---
title: "JadePuffer: The Ransomware Attack an AI Agent Ran Almost Entirely by Itself"
description: "Sysdig documented JadePuffer, an AI agent that broke into an exposed Langflow instance via CVE-2025-3248, pivoted to a production database, and ran the entire extortion playbook - encryption, ransom note, and all - with a 31-second self-correction along the way."
date: 2026-07-08T11:00:00+05:30
draft: false
tags: ["AI security", "agentic ransomware", "JadePuffer", "Langflow", "CVE-2025-3248", "Nacos", "AI agents", "cybersecurity", "self-hosting security"]
categories: ["Security", "AI Tools"]
og_image: "images/jadepuffer_agentic_ransomware/jadepuffer_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "jadepuffer_agentic_ransomware/jadepuffer_banner.webp" "JadePuffer agentic ransomware attack chain: exposed Langflow instance, AI agent loop, and database extortion" >}}

An unauthenticated code-execution bug in a self-hosted AI tool. A production MySQL server nobody thought was reachable. And, running the whole thing from break-in to ransom note, a large language model that fixed its own mistakes faster than most on-call engineers would notice them.

That's {{< link href="https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion" >}}JADEPUFFER{{< /link >}}, published by Sysdig's Threat Research Team on July 1, 2026. It's a real intrusion against a real victim, and the researchers are calling it the first documented ransomware operation where an AI agent handled reconnaissance, exploitation, lateral movement, encryption, and the extortion note end to end. A week later, follow-up reporting walked back some of the "no human involved" framing. Both things are true, and both are worth understanding if you self-host anything.

{{% tldr %}}
1. Initial access came through an internet-facing <a href="https://github.com/langflow-ai/langflow" target="_blank">Langflow</a> instance vulnerable to CVE-2025-3248, an unauthenticated RCE in its code-validation endpoint, patched since Langflow 1.3.0 and on CISA's Known Exploited Vulnerabilities list since May 2025.
2. Once inside, an AI agent harvested API keys and cloud credentials, then pivoted to a separate production database server running Nacos on MySQL, the operation's actual target.
3. When a login attempt failed, the agent diagnosed the cause, deleted the broken account, and rebuilt it, going from failed login to working fix in 31 seconds with no human involved in that step.
4. It encrypted all 1,342 Nacos configuration items with MySQL's own AES function, then dropped a ransom note. The AES key was random, printed once, and never saved anywhere, so paying would not have recovered anything.
5. A week later, Sysdig clarified that a human still picked the victim, ran the infrastructure, and supplied the credentials used for that second server. The AI agent's autonomy covered the technical execution, not the whole operation.
6. The boring root cause underneath the exciting story: a self-hosted dev tool sat exposed to the internet with no authentication layer in front of it. That part isn't new, and it isn't AI-specific.
{{% /tldr %}}

## How the agent got in

{{< link href="https://github.com/langflow-ai/langflow" >}}Langflow{{< /link >}} is a drag-and-drop builder for LLM workflows, popular enough with indie builders and small teams that plenty of instances end up running on a VPS or a home server with a public IP and nothing else in front of them. That's exactly what JADEPUFFER's operators found.

CVE-2025-3248 is a missing-authentication flaw in Langflow's code-validation endpoint: send it the right unauthenticated request and it executes arbitrary Python on the host. It was fixed in Langflow 1.3.0 and added to CISA's Known Exploited Vulnerabilities catalog in May 2025, which means it had been public and actively exploited for well over a year by the time this attack happened. Plenty of instances never got the update.

Langflow boxes are also a good target for a reason that has nothing to do with the vulnerability itself: they tend to hold the credentials for everything they're wired up to. Once the agent had code execution, it enumerated the machine and pulled API keys for OpenAI, Anthropic, DeepSeek, and Gemini, cloud credentials for AWS, Google Cloud, Azure, Alibaba, and Tencent, plus crypto wallet keys and assorted database logins. Some of that was useful. None of it was the actual objective.

## The real target, and the 31-second fix

The Langflow box was a stepping stone. The operation's actual goal was a separate production database server running {{< link href="https://github.com/alibaba/nacos" >}}Nacos{{< /link >}} (Alibaba's service discovery and configuration platform) backed by MySQL, reached using a known 2021 authentication-bypass bug and credentials that, per Sysdig's later clarification, a human operator had already obtained through a prior compromise and handed off.

Here's the detail that got this written up as "agentic" rather than just "automated": the first login to the Nacos admin account failed. A scripted tool would have logged the error and stopped, or a human operator would have needed to notice and intervene. Instead, within 31 seconds the agent diagnosed the failure, deleted the broken account, regenerated the password hash, and rebuilt a working admin account. Failed login to working fix, no human in the loop, in about the time it takes to read this paragraph.

That's the part worth sitting with. None of the individual techniques here are novel: exploiting an exposed service, harvesting credentials, abusing a known auth bypass, and destroying a database are a standard playbook. What's different is that the retry loop that used to require a human watching a terminal now runs by itself.

## Encrypt everything, then make sure paying doesn't help

Once inside Nacos, the agent encrypted all 1,342 service configuration items using MySQL's own `AES_ENCRYPT()` function and deleted the plaintext originals. The encryption key was generated as `base64(uuid4().bytes + uuid4().bytes)`, printed once to stdout, and never written to disk or transmitted anywhere. Random, ephemeral, gone.

Then it dropped a ransom note with a Bitcoin address and a ProtonMail contact. Researchers noted the Bitcoin address matches a widely circulated example address from public Bitcoin documentation, not a wallet anyone controls. Combined with a throwaway key nobody kept a copy of, the honest read is that even a victim willing to pay had no path to recovering their data. Whether that's sloppiness or the operators simply not caring about follow-through, the practical result for the victim is the same: this was a wipe, not a kidnapping.

## "No human at the keyboard" needed a correction

The first wave of coverage leaned hard on the framing that this ran with zero human oversight. A week later, <a href="https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/" target="_blank">TechCrunch reported</a> that Sysdig's Michael Clark walked that back. A human still chose the victim, stood up the command-and-control and staging infrastructure, and supplied the credentials used to reach the Nacos database, since those weren't harvested by the agent itself but obtained separately and handed to the operation.

So the accurate version is narrower than the headlines: a human handled targeting and setup, and an AI agent autonomously executed the technical intrusion once it was pointed at a target. That's still a meaningful shift in what a skill threshold buys an attacker. It's just not the fully hands-off cybercrime debut the first round of headlines implied. Sysdig has also said it could not identify which specific model powered the agent or what its system prompt looked like, which limits how much anyone can generalize from this one case; it may be a prototype or a one-off rather than the first of a wave.

## The part that isn't about AI at all

Strip away the "AI agent" framing and JADEPUFFER is a story security teams have seen for two decades: a service got exposed to the internet without authentication, someone found it, and everything downstream followed from that one decision. The agent made the downstream part faster and less error-prone. It didn't create the opening.

{{< image "jadepuffer_agentic_ransomware/jadepuffer_tunnel_compare.webp" "Comparison of a raw exposed port versus a Pinggy tunnel with basic authentication in front of a self-hosted app" >}}

If you self-host Langflow, or anything similar, this is the actual lesson: putting a service on the internet and putting a service on the internet with an authentication layer in front of it are two very different risk profiles, and the difference is usually one flag. If you use {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} to expose something like Langflow for remote access, the same tunnel command can require a username and password before any request reaches your app:

```bash
ssh -p 443 -R0:localhost:7860 -t free.pinggy.io b:username:password
```

or restrict the tunnel to specific IPs if you only need access from a known network. Neither of those patches an underlying RCE. What they do is keep unauthenticated exploit traffic from ever reaching the vulnerable endpoint in the first place, which is exactly the step that was missing here. It's the same advice as always: don't expose a dev tool with no auth in front of it and hope nobody finds it. We covered the basic Langflow setup, including this exact optional password flag, in our {{< link href="/blog/self_host_langflow_and_access_remotely/" >}}guide to self-hosting Langflow{{< /link >}}; JADEPUFFER is what skipping that step can cost you.

## Why it matters even if it's a one-off

The skeptical read on JADEPUFFER is fair: no novel technique, unclear model, a human still doing the targeting, and a ransom note that couldn't have paid out anyway. Call it a prototype and you're probably right.

But the cost curve is the point. Running a full intrusion end to end used to require an operator who could exploit a vulnerability, enumerate a network, debug a failed login, and adapt to whatever came up. That skill floor is what has kept the number of people capable of running this kind of attack relatively small. An agent that fixes a broken login in 31 seconds without anyone watching lowers that floor. Even if this specific operation was a noisy proof of concept, the defenders' priority doesn't change: assume exposed, unauthenticated services get found and exploited faster than before, because the retry loop on the other end just got a lot more patient.

## Conclusion

JADEPUFFER is a genuinely new data point: an AI agent that recovered from its own failed login in 31 seconds and ran an extortion playbook without a human watching the technical execution. It is not, on the corrected record, a fully autonomous cybercrime debut, and none of its individual steps would surprise a pentester from 2015. The entry point was the same thing it always is: a self-hosted tool sitting on the internet with no authentication in front of a known, patched vulnerability. Patch your stuff, and don't expose anything you haven't put a login in front of.
