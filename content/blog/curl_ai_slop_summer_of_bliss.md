---
title: "curl's Summer of Bliss: Why It Stopped Taking Bug Reports in July 2026"
description: "curl is refusing all vulnerability reports for the month of July 2026 after AI-generated 'slop' reports pushed its confirmed-vulnerability rate below 5%. Here's the timeline, the numbers, and why this is bigger than one project."
date: 2026-07-02T10:00:00+05:30
lastmod: 2026-07-03T10:00:00+05:30
draft: false
tags: ["curl", "open source", "cybersecurity"]
categories: ["Technology", "Security", "Open Source"]
og_image: "images/curl_ai_slop_summer_of_bliss/curl_ai_slop_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "curl_ai_slop_summer_of_bliss/curl_ai_slop_banner.webp" "curl closes its inbox to fight AI slop - confirmed vulnerability report rate under 5 percent, report volume doubled versus 2025, seven maintainers holding the line" >}}

As of July 1, 2026, curl's security team is not reading your bug report. Doesn't matter how real it is. HackerOne submissions to the project go dark at 00:00 CEST and stay that way until August 3 at 09:00 CEST. The security email address is a dead end for the same five weeks. Daniel Stenberg, curl's creator and lead maintainer, is calling it the "curl summer of bliss," and he means it literally: the plan is for the team to close the laptop and go outside.

This isn't a stunt. It's the next step in a fight that's been going on for over a year, and it's a preview of a problem a lot more projects are about to have.

{{% tldr %}}
1. **What's happening**: curl accepts zero vulnerability reports from July 1 to August 3, 2026 - no HackerOne, no email, no exceptions.
2. **Why**: the confirmed-vulnerability rate on curl's reports fell from a historical ~15% to under 5% as AI-generated "slop" reports flooded in. By mid-2025, Stenberg estimated roughly 20% of submissions were outright fabricated.
3. **The bounty is already gone**: curl shut down its paid HackerOne bug bounty entirely on January 31, 2026, after nearly seven years and 87 confirmed vulnerabilities, because the incentive was attracting more fake reports than real ones.
4. **curl isn't the outlier**: HackerOne's own Internet Bug Bounty program paused new submissions on March 27, 2026, and Axios reported open source maintainers broadly getting hundreds of AI-generated reports where they used to get a handful a week.
5. **The real lesson**: AI made the cost of *writing* a plausible vulnerability report close to zero, but the cost of *triaging* one is still a human reading it carefully. That asymmetry is what actually broke.
{{% /tldr %}}

## The number that made a maintainer take a month off

For years, curl's HackerOne bug bounty ran on a simple ratio: roughly 15% of submitted reports turned out to be real, confirmed vulnerabilities. That's a normal hit rate for a security program with any public visibility - most reports are duplicates, non-issues, or honest misunderstandings of what counts as a vulnerability.

Starting in 2025, that ratio collapsed. Confirmed reports dropped below 5%. As Stenberg put it, "not even one in twenty was real." By July 2025, he estimated around 20% of all submissions were what he calls AI slop: reports that read like a real CVE writeup, cite a function that doesn't exist, describe a bug that was patched years ago, or reference a code path curl has never had. By that point curl was averaging around two security reports a week, already well above historical norms, with spam spikes hitting eight times that in a single week. By the time the "summer of bliss" was announced in June 2026, the sustained rate had roughly doubled again from that already-elevated 2025 baseline. More than one report a day, for a security team of seven volunteers.

The pattern is consistent with how these reports get made. A large language model given the curl source and told to "find a vulnerability" will produce something that looks exactly like a real disclosure: a CVE-style title, a plausible-sounding root cause, a "proof of concept," a severity rating. What it often won't produce is a bug that actually exists. LLMs are good at pattern-matching the *shape* of a security report and bad at verifying the underlying claim against real code, which is exactly the part that used to be expensive enough to keep low-effort submissions out.

## "We are effectively being DDoSed"

The public turning point came in May 2025, when Stenberg started publicly calling out and banning HackerOne accounts submitting AI-generated reports. His framing at the time was blunt:

> "We now ban every reporter instantly who submits reports we deem AI slop. A threshold has been reached. We are effectively being DDoSed. If we could, we would charge them for this waste of our time."

That's a security researcher describing his own bug bounty program - the thing that's supposed to make his project safer - as an attack surface. The DDoS comparison is the useful part: a denial-of-service attack doesn't need any single request to be sophisticated, it just needs enough volume that legitimate traffic can't get through. Swap "requests" for "vulnerability reports" and "server" for "the two or three humans who understand curl's codebase well enough to triage a report," and the mechanics are identical.

Banning individual accounts didn't fix the underlying economics. It's trivial to spin up a new HackerOne account, and the reports cost the submitter nothing but a few minutes of prompting. The cost all landed on curl's side of the transaction.

## Killing the bounty didn't kill the problem

curl's bug bounty had run since April 2019, funded through HackerOne and the Internet Bug Bounty program. Over almost seven years it paid out more than $100,000 across 87 confirmed vulnerabilities - a genuinely good return for a project that sits underneath most of the internet's HTTP traffic in one form or another.

On January 31, 2026, that program ended. Stenberg's reasoning, in the blog post announcing it: "We are just a small single open source project with a small number of active maintainers. It is not in our power to change how all these people and their slop machines work." Removing the cash reward was meant to remove the incentive to spam the inbox - if there's no bounty, there's no reason to farm reports with an LLM and hope one sticks.

It helped, but not enough. curl briefly moved intake to GitHub's security advisory workflow, then switched back to HackerOne on March 1, 2026, purely as an intake and triage tool, with no payment attached. Report volume kept rising anyway. That's the part worth sitting with: killing the financial incentive slowed things down, but it didn't stop the flood, because for a lot of the AI-slop volume there was never a financial incentive in the first place - just a prompt, a script, and someone running it against every prominent open source repo they can find, maybe hoping for reputation, a resume line, or nothing coherent at all.

## What "closed for the month" actually means

The summer of bliss is a different kind of move. It's not a policy change to the reporting process, it's a scheduled, announced, total stop:

> "Whatever issue you find that you feel a need to report to the curl project during this month has to wait."

From July 1, 00:00 CEST, through August 3, 09:00 CEST, curl's security team will not read, acknowledge, or act on any vulnerability report through any channel. If you find a real, working, remote-code-execution-grade bug in curl this month, it waits five weeks. Stenberg has been explicit that this is about maintainer wellbeing as much as workload - a suggestion that other open source maintainers should feel entitled to take a real vacation too, instead of treating security response as an obligation with no off switch.

There's an obvious risk here, and Stenberg knows it: a genuine zero-day could land in that window and sit unaddressed. curl's response is essentially that the tradeoff is worth it - the team has been running at a workload that isn't sustainable, the AI-slop volume made the queue unmanageable regardless of any real bug hiding in it, and a burned-out three-person triage rotation is itself a security risk. The Lobsters discussion thread on the announcement mostly landed on a similar note: "the bad guys won't rest, probably not, but we will," as one commenter put it, more resigned than alarmed.

## curl isn't the outlier here

It's tempting to read this as one famous, over-scrutinized project's problem. It isn't. curl is just the project with a maintainer who blogs about it in detail and a project popular enough that the story travels.

HackerOne's own Internet Bug Bounty program - the umbrella funding that backed curl's bounty alongside a handful of other critical infrastructure projects - paused new submissions on March 27, 2026, for the opposite-sounding but related reason: AI is now so good at *finding* real bugs that remediation, not discovery, became the bottleneck. HackerOne pointed to Claude turning up 22 Firefox vulnerabilities in two weeks, 14 of them high-severity, as the kind of result that broke the program's assumption that payouts should reward discovery over fixing. Axios reported in March 2026 that AI agents are flooding open source maintainers broadly: projects that used to get two or three bug reports a week, or one a month if they were less popular, are now getting hundreds of reports arriving at once. Sonatype's 2026 State of the Software Supply Chain report found the global CVE count has doubled in five years, with the count of *unscored* CVEs - the ones nobody has triaged enough to rate - growing 37x. AI-generated submissions aren't the whole story there, but they're accelerating it.

The same week curl's "summer of bliss" post was making the rounds, a different piece was doing similar numbers on Hacker News: Andrew Nesbitt's satirical "Incident Report: CVE-2026-LGTM," a fictional account of a malicious package sailing past seven independent AI-powered security gates, each failing in a different way - one fooled by a prompt injected into a README, two AI reviewers stuck in a 340-comment disagreement loop, an autonomous remediation agent deleting the wrong files and causing the actual outage. It's satire, but it's satire that landed because it's obviously extrapolating from things that are already happening: AI systems reviewing AI-generated code and AI-generated reports, with the human verification step quietly getting squeezed out of the loop on both sides at once.

## The actual lesson

Bug bounty programs, code review, support queues, PR review - a lot of open source infrastructure is built on an implicit assumption: producing a submission costs the submitter *something*. Writing a real bug report takes time, understanding, and usually a working reproduction. That cost is what kept volume low enough for a small team of humans to handle triage. It was never a perfect filter, but it was a real one.

LLMs didn't make that filter worse. They removed it. Generating a report that has every surface feature of a real vulnerability disclosure now costs one prompt and a few seconds of inference. Verifying it still costs a human who understands the codebase reading the code, trying the reproduction, and deciding whether it's real. That asymmetry doesn't get better with better AI models, it gets worse - as generation gets cheaper and more convincing, the fixed cost of human verification is the same bottleneck it always was, just facing far more traffic.

curl's response - kill the bounty, then take a scheduled month completely off - is a maintainer-level fix for a structural problem. It buys breathing room; it doesn't solve the underlying arithmetic. The projects watching this closely are the ones that haven't been hit yet but can see the volume trend in Sonatype's numbers and Axios's reporting and know it's coming for them too. If you maintain anything with more than a handful of users, the practical takeaway isn't "expect AI slop in your bug tracker" - it's "have a plan for what you do when triage cost exceeds triage capacity," because the honest answer right now, for one of the most widely deployed pieces of software on the internet, is a five-week auto-reply.

## Conclusion

curl's security reports resume August 3, 2026, at 09:00 CEST. Whatever's waiting in that queue when it reopens, real or not, gets read then.

The month off doesn't fix what caused it, and Stenberg isn't claiming it does. Banning accounts didn't stop the slop. Killing the $100,000-plus bounty didn't stop the slop. The only lever left for a seven-person volunteer team was refusing to look at the queue at all for five weeks. That's not a curl-specific quirk - HackerOne pausing its own Internet Bug Bounty and Axios's reporting on maintainers broadly getting hit by the same flood say this is a pattern, not an incident. If you maintain anything people can file bugs against, the question worth answering before it happens to you isn't whether you'll get AI slop, it's what you do the week your triage queue stops being something one person can get through before lunch.

