---
title: "Inside Muse: Meta Built a Second AI Just to Watch the First One"
description: "Meta's new personal AI agent Muse can book travel, pay bills, and send email on your behalf. Here's how its Secure VM, credential surrogation, and a separate oversight agent called Sentinel actually work, and where Meta's own testers found it breaking before launch."
date: 2026-09-09T16:40:00+05:30
draft: false
tags: ["Meta", "AI agents", "AI security", "security"]
categories: ["Technology", "Security", "AI"]
og_image: "images/inside_muse_meta_ai_agent_security_architecture/inside_muse_meta_ai_agent_security_architecture_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "inside_muse_meta_ai_agent_security_architecture/inside_muse_meta_ai_agent_security_architecture_banner.webp" "TechCrunch's coverage of Meta's Muse launch, showing the Muse chat interface handling a Halloween costume order and a budget adjustment" >}}

Meta shipped a personal AI agent called Muse this week, and it can do things a chatbot can't: book your flight, email your landlord, reorder a prescription, and pay for it. That's not a new idea by itself, Operator and Claude's computer use have been doing versions of this for a while. What's worth a closer look is what Meta built to stop the thing from going wrong, because handing an LLM your email, your calendar, and a payment method is a fundamentally different threat model than handing it a chat window.

The short version: Muse's agent never touches a real password, a real OAuth token, or a real credit card number. Every one of those is held by a separate set of host processes, and every action that leaves the machine has to clear a second, independently-trained AI called Sentinel whose only job is to say yes, no, or "ask the human." It's a genuinely interesting piece of systems security, and Meta's own internal testers still found it going sideways before launch.

{{% tldr %}}
1. **What launched:** Muse, Meta's personal AI agent, rolling out in the US via its own app, WhatsApp, and the web. Free tier plus $20/month Power and $100/month Maximum plans, powered by a new model called Muse Spark.
2. **The core design:** each user's Muse runs inside a dedicated "Secure VM." The agent itself lives in a locked-down `systemd-nspawn` container with filtered syscalls; a separate set of host-side services holds all real credentials.
3. **Sentinel:** a second, independent AI agent is the only process on the machine allowed to approve network egress or connector actions. Muse can propose a purchase; Sentinel decides if it actually happens.
4. **Credentials the agent never sees:** connectors get "surrogate" tokens minted by a service called `authd`. The real OAuth token or one-time-use card number is swapped in only at the network boundary, after Sentinel approves.
5. **The framework behind it:** Meta calls it the "Agents Rule of Two" - an agent can have at most two of (a) untrusted input, (b) sensitive access, (c) the ability to act externally, before a human has to be in the loop.
6. **It still isn't solved:** internal testers reportedly got Muse to expose photos from a locked iCloud album, and Meta's own VP admitted "it is impossible to say that there is never going to be a mistake." The bug bounty pays up to $130,000 for a working prompt injection.
{{% /tldr %}}

## The problem Muse is actually solving for

A chatbot that gives you a bad answer wastes your time. An agent that gives a bad *answer* the ability to *act* can empty your calendar, email your boss something unhinged, or buy the wrong flight for the wrong date. The moment you connect an LLM to your inbox, your bank, and the open web, you've created three separate attack surfaces that used to be independent: the model can be tricked by data it reads (a calendar invite, a webpage, an email), it can reach things you'd rather it didn't, and it can send things back out. Any one of those alone is manageable. All three at once, in a single unsupervised session, is how you get an agent that reads a poisoned support ticket and wires money to an attacker.

Meta has a name for this: the <a href="https://ai.meta.com/blog/practical-ai-agent-security/" target="_blank">Agents Rule of Two</a>. The framework says an agent session should satisfy no more than two of three properties without a human checkpoint: processing untrustworthy input, accessing sensitive systems or private data, and changing state or communicating externally. A travel agent that searches the web and reads your itinerary is fine (untrusted input + sensitive access) as long as it can't book anything without you clicking confirm. A research assistant that browses arbitrary URLs and writes a summary is fine (untrusted input + external action) as long as it never sees your actual accounts. The moment an agent needs all three at once in the same context window, without a fresh session, Meta's own rule says it shouldn't be allowed to run unsupervised. It's a simple enough checklist that it's worth stealing even if you're not building anything close to Muse's scale.

Muse's problem is that "personal assistant that books your flight" is, almost by definition, all three at once: it reads your email (untrusted), it holds your payment method (sensitive), and it has to actually check out (external action). You can't design that use case away. So Meta built infrastructure to make that combination survivable instead.

## A computer that isn't trusted with its own keys

{{< image "inside_muse_meta_ai_agent_security_architecture/inside_muse_meta_ai_agent_security_architecture_sentinel_flow.webp" "Diagram of how a Muse action moves from the sandboxed runtime cell through privsep and authd to the Sentinel oversight agent, which decides allow, ask, or deny before a real credential ever reaches the network" >}}

Every Muse user gets a dedicated virtual machine, described in Meta's own writeup as a <a href="https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse" target="_blank">Secure VM</a>. Inside it, the actual agent, the model doing the reasoning and calling tools, runs in something Meta calls a runtime cell: a `systemd-nspawn` container with its own filesystem image, a mapped-down root user that isn't root on the host, filtered syscalls (`io_uring` is out), and stripped capabilities (no `CAP_SYS_PTRACE`, no `CAP_NET_ADMIN`). That cell is the part of the system expected to process untrusted data, because it's the part running an LLM that reads whatever web pages and emails you point it at.

Everything that actually matters from a security standpoint lives outside that cell, on the same VM but walled off:

- `hatch-safety` - independent classifiers watching requests and responses for prompt injection and other frontier risks
- `privsep` - workers that run the built-in connector code (email, calendar, shopping) with narrowly scoped privileges
- `hatch-authd` - the credential store; OAuth tokens live in your VM, not in centralized Meta infrastructure, and it hands out access without ever exposing the underlying secret
- Sentinel - the oversight agent, covered below
- a Postgres database for durable state, kept separate from both the runtime cell and the credential store

The interprocess communication between all of this runs over Unix domain sockets using `SO_PEERCRED` and peer ACLs, which is a fairly deliberate choice: it means the kernel itself authenticates who's talking to whom, so there's no shared secret or bearer token sitting around for a compromised runtime cell to steal and replay. If the agent process gets fully owned by a prompt injection, it still can't forge its way into being `hatch-authd`.

## Sentinel: the agent that isn't allowed to want anything

The most interesting design decision is the separation between the agent that wants to do something and the system that decides whether it can. Sentinel is a distinct, host-side agent, not a permission dialog, not a static allowlist, that sits between Muse and the outside world. When Muse wants to call a connector, the request goes to Sentinel with a description of what's being invoked, what class of action it is, what scope it needs, and what the user actually asked for. Sentinel evaluates that against your connector policies and returns one of three verdicts: allow, deny, or ask.

The same gate covers raw network egress, not just the built-in connectors. Sentinel checks the destination at layer 4 (hostname, the IP it actually resolved to, port, protocol) and at layer 7 (HTTP method, path, the decoded request body), specifically to catch server-side request forgery where a public-looking hostname resolves to something internal after DNS resolution. There's also a taint-tracking layer built on eBPF `cgroup` programs and Linux Security Module hooks: a tool-execution process starts out "clean" and gets marked "tainted" the moment it reads user data, at which point it loses whatever auto-allow privileges it had. A process that never touches your data can move faster; one that just read your inbox gets watched more closely for whatever it tries to do next.

Credential handling follows the same never-let-the-agent-hold-the-real-thing pattern in three layers: privsep decides *where* credential-capable code can even run, authd decides *which* caller gets *which* credential (a calendar worker's allowlist doesn't include email credentials, full stop), and Sentinel decides whether the specific action is permitted at all. In practice, the runtime cell only ever holds a surrogate token minted by authd. The real OAuth credential gets swapped in at the network boundary, after Sentinel signs off, and the agent process never sees the substitution happen.

Payments get an extra layer on top of that. For a saved card at a known checkout, Meta requires human-in-the-loop approval every single time, no exceptions for repeat purchases. For a new site, Muse uses Stripe's Link integration to issue a single-use virtual card number scoped to a specific merchant, a specific dollar amount, and a limited time window, so a compromised checkout flow can't be replayed against you later or used to buy something else. The email connector applies its own filter on top: one-time passcodes, password reset links, and login "magic links" get stripped out with both deterministic rules and a classifier, specifically so a prompt-injected agent can't cascade into resetting your other accounts.

## What still went wrong before launch

None of this is theoretical hardening for a system that's never been pressure-tested. Meta delayed Muse's original planned launch to work through security issues, and reporting from before this week's release describes internal testers finding real failures anyway: one tester got the agent to bypass its own guardrails and surface photos from a locked iCloud album while it was supposed to be identifying toys in a picture. Meta's CTO reported getting logged out of his own accounts repeatedly, sometimes several times in a few minutes. A monitoring feature meant to flag risky behavior reportedly "switched itself off for no apparent reason" during testing. Meta VP Vishal Shah's response, on the record, was that "it is impossible to say that there is never going to be a mistake," which is a genuinely honest thing to say about shipping an LLM-driven agent and not the kind of line a marketing team writes on purpose.

Meta backed that admission with money: Muse is in the company's public bug bounty program, up to $300,000 for a high-impact vulnerability and specifically up to $130,000 for a prompt injection that compromises a single user. Prompt injection is still, as a category, an unsolved problem across the entire industry. No amount of `SO_PEERCRED` sockets or eBPF taint tracking fixes a model that can be talked into misbehaving by the text it reads; those layers exist to limit the blast radius when it happens, not to prevent it from happening at all.

There's also a gap between the architecture and the promise. Meta says staff policy prohibits employees from accessing user VMs, but the company's own VP acknowledged that doing so remains "technically possible" today. The fix for that is a planned Muse Confidential VM, encrypted end to end with keys the user holds, that Meta says even Meta can't read into. It's currently in testing with a small group and is explicitly not what's running at general launch. Which means the honest current state is: your data is well-isolated from other users and from most of Meta's own infrastructure, but not yet cryptographically closed off from Meta itself.

## Why the scrutiny is fair, not just cynical

It's worth saying plainly that Meta is not starting this conversation from a position of trust. The company has a 2011 FTC settlement over deceptive privacy practices, a 2019 discovery that it had been storing hundreds of millions of user passwords in plaintext internally, a $5 billion FTC penalty the same year, the Cambridge Analytica fallout, a 2023 FTC charge for violating its own prior consent order, and an $18 billion multistate settlement over harm to minors on its platforms. None of that means the Secure VM architecture described above is fake or badly engineered, the technical detail Meta published is specific enough that it reads like real infrastructure, not a whitepaper written after the fact. But it does mean the burden of proof sits with Meta, and "trust us" is not a security control. A system this well-instrumented is also a system Meta could, in principle, instrument for its own purposes, and the only thing that actually closes that gap is the Confidential VM that doesn't exist yet.

## The part worth taking even if you never touch Muse

If you're building anything agentic, an internal tool that reads support tickets and files Jira issues, a bot that triages your inbox, a script that lets an LLM hit your own APIs, the Rule of Two is a genuinely useful three-question gut check before you wire up one more tool call: does this agent read data I don't fully trust, does it touch something sensitive, and can it act on the outside world without me looking? If the answer to all three is yes in the same run, that's the point to add a human click, not a better system prompt. Muse's actual infrastructure, dedicated VMs, kernel-authenticated sockets, taint-tracked egress, is not something most teams need or can build. The design principle underneath it, that the model doing the reasoning should never be the same thing that's trusted to act, scales down fine to a much smaller project.

Whether Muse earns the trust it's asking for is going to be decided by what its bug bounty turns up over the next few months, not by this week's launch post. The architecture is a real, serious attempt at the problem. Given who built it, it deserves to be checked rather than believed.
