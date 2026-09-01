---
title: "AI Crawlers Now Cost More CPU Than All Your Real Traffic Combined"
description: "git.kernel.org now spends more CPU rendering pages for AI training scrapers than on every git clone and legitimate visit combined. Here's what the numbers say, why proof-of-work challenges like Anubis are winning and losing at the same time, and what it means for anyone running their own infrastructure."
date: 2026-08-31T16:00:00+05:30
draft: false
tags: ["AI crawlers", "self-hosted", "open source", "security", "developer tools"]
categories: ["Technology", "Security", "Open Source"]
og_image: "images/ai_crawlers_cost_more_cpu_than_real_traffic/ai_crawlers_cost_more_cpu_than_real_traffic_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "ai_crawlers_cost_more_cpu_than_real_traffic/ai_crawlers_cost_more_cpu_than_real_traffic_banner.webp" "Hand-drawn chart from a git.kernel.org engineering post showing 14 CPU cores spent rendering pages for AI scraper bots, versus 10 for real git clones and 2.5 for legitimate browsing" >}}

Across five geo-distributed servers, git.kernel.org keeps 14 to 16 CPU cores busy around the clock doing one thing: rendering individual Linux kernel commits as HTML pages for AI training scrapers. That's out of roughly 90 cores total, and it works out to about 20% of the whole fleet's capacity, spent on average. For comparison, actual `git clone` operations, the entire reason the service exists, use about 10 cores. People browsing the code through a web browser use about 2.5. Real human traffic on one of the most important pieces of software infrastructure on the planet is now a rounding error next to bot traffic.

Konstantin Ryabitsev, who runs the Linux Foundation's git and mailing list infrastructure, published these numbers this week, and they're worth sitting with. This isn't a small side project getting overwhelmed by a viral Hacker News post. It's the canonical hosting for the Linux kernel, run by people who have been doing infrastructure at scale for over a decade, and they are losing a fight against automated traffic that most of us assumed was already handled by robots.txt and a firewall rule.

{{% tldr %}}
1. **The numbers:** git.kernel.org burns 14-16 of its ~90 CPU cores nonstop rendering pages for AI scrapers, more than it spends on all git clones (10 cores) and legitimate browsing (2.5 cores) combined.
2. **Why it's so bad:** `cgit`, the software that serves the site, can render every commit, patch, diff, and combination of the two as a distinct URL. For a repository with 1.48 million commits and 922 forks, that's an effectively infinite crawl space, and scrapers hit all of it.
3. **This isn't just kernel.org:** Wikimedia says bots account for 65% of its most expensive traffic while generating only 35% of pageviews. SourceHut has blocked GCP and Azure outright. KDE's GitLab went down under Alibaba's IP ranges.
4. **The current best defense is a proof-of-work checkpoint** called Anubis, which forces every visitor's browser to burn CPU solving a math problem before it gets in - and it's already losing ground as scrapers learn to solve it.
5. **If you run anything with a public URL**, this is now baseline infrastructure cost, not an edge case. Budget for it the way you'd budget for backups.
{{% /tldr %}}

## Why kernel.org is such an easy target

`cgit`, the lightweight web frontend that serves git.kernel.org, was built to make a git repository browsable without cloning it. You can view any commit, any diff between any two commits, any file at any point in history, and a plain-text render of all of the above. Ryabitsev put the scale of that surface area bluntly: for the Linux kernel repository alone, with its 1.48 million commits and 922 forks hosted on the site, `cgit` can generate what he calls "1.2 metric bajillion" valid URLs.

Every one of those URLs is a real page. Every one takes actual server-side work to render, walking the git object database and formatting the output as HTML. A `git clone` is comparatively cheap: the server packs up objects it already has and streams them. Rendering a commit as a syntax-highlighted diff page is not.

That distinction is exactly what makes cgit-style browsing attractive to scrapers and expensive to serve. A crawler that wants training data doesn't need to be smart about it. It can start at any commit and walk outward through links, and cgit will dutifully generate a fresh page for every single request. Pre-2023 kernel source and commit history is also just useful: it's a huge, permissively licensed corpus of real, expert-written code and commit messages from before large language models existed, which makes it more valuable as training data than most of what's on the web today.

## The traffic breakdown is the real headline

Ryabitsev's post gives the full picture: git.kernel.org sees around 6 million requests a day. Of those, roughly 66% get an immediate proof-of-work challenge and never make it further. About 33% solve the challenge and get through. By his estimate, legitimate human traffic is somewhere around 2% of the total. Everything else is some flavor of automated.

The CPU chart is the part that makes the abstraction concrete. Scrapers hitting cgit pages: 14 cores, sustained. Legitimate cgit browsing: 2.5 cores. Actual git clones, the thing the infrastructure is fundamentally for: 10 cores. Scraper traffic alone costs more compute than every other form of access to the Linux kernel's source history, combined.

## This is not a kernel.org problem, it's an internet-infrastructure problem

What makes this worth a blog post instead of a niche mailing list thread is how consistent the pattern is across completely different projects.

<a href="https://diff.wikimedia.org/2025/04/01/how-crawlers-impact-the-operations-of-the-wikimedia-projects/" target="_blank">The Wikimedia Foundation reported</a> that bandwidth for downloading multimedia from Wikimedia Commons rose 50% starting in 2024, driven almost entirely by scrapers. Bots account for about 65% of the site's most resource-intensive traffic while making up only 35% of actual pageviews, because crawlers don't respect the site's caching layer the way humans do. A popular Wikipedia article is cached close to the reader; a scraper working through the long tail of obscure pages forces every request back to Wikimedia's core data centers, which is the expensive path. The Foundation's 2025/2026 annual plan explicitly lists cutting crawler-driven request volume by 20% as a goal.

<a href="https://sourcehut.org/" target="_blank">SourceHut</a>, the git-hosting service built by and for open source developers, went further: it now unilaterally blocks traffic from GCP and Azure by default because of the volume of bot requests originating from those networks, and deployed a tarpit called Nepenthes that deliberately feeds crawlers an endless maze of fake, slow-loading pages instead of real content. KDE's GitLab instance was knocked offline entirely by a wave of crawler traffic coming from Alibaba's IP ranges. Fedora's Pagure code-hosting instance ended up blocking all traffic from Brazil after more targeted mitigations failed to bring bot traffic down. Codeberg, a nonprofit git host, reported by August 2025 that scrapers had already learned to solve the challenge system it had deployed months earlier.

Separately, infrastructure provider Vercel's own traffic data from late 2024 showed OpenAI's GPTBot generating 569 million requests and Anthropic's ClaudeBot 370 million, across the sites it hosts. Ad-fraud detection firm DoubleVerify measured a 86% rise in invalid traffic in the second half of 2024, attributing a growing share of it to AI-related bots.

None of these are small, poorly-run sites. They're some of the most trafficked, best-engineered pieces of shared infrastructure in software, and they are all describing the same thing: a layer of automated demand that didn't exist five years ago and now rivals or exceeds real usage.

## Why the obvious fixes don't work

`robots.txt` is a request, not a lock, and the crawlers training frontier models generally ignore it. Rate limiting and IP blocking used to help, but scraping operations now route through residential proxy networks and rotate user-agent strings, so a blocked IP just gets replaced by the next one in a pool of millions. Ryabitsev notes that kernel.org tried IP-based blocking early on and watched it stop working as scrapers spread out across residential and mobile address space that looks, at the network level, indistinguishable from a real visitor on their phone.

That's the core problem: the traditional signals used to separate a bot from a person, IP reputation and a declared user-agent string, are both trivially fakeable, and the entities doing the scraping have the budget and motivation to fake them at scale.

## Proof-of-work: the current best answer, and its limits

The tool that's spread furthest as a response is <a href="https://github.com/TecharoHQ/anubis" target="_blank">Anubis</a>, an open source reverse proxy created by developer Xe Iaso in January 2025 after a self-hosted git server got knocked over by an Amazon crawler that ignored `robots.txt` entirely. It's since been adopted by the Linux kernel's own infrastructure, GNOME, FFmpeg, Wine, FreeCAD, ScummVM, OpenWRT, and a growing list of others. GNOME's GitLab reported that only about 3.2% of requests hitting it actually solved the challenge and passed through, a rough proxy for how much of its traffic was automated in the first place.

The mechanism borrows directly from Hashcash, the same proof-of-work idea Bitcoin later built on. Anubis hands a visitor's browser a random challenge and asks it to find a value that, when hashed with SHA-256, produces an output starting with a set number of zero bits. There's no shortcut: the only way to find one is to try inputs until you get lucky. A real browser running a few lines of JavaScript solves the default difficulty in a couple of seconds and gets an EdDSA-signed cookie that lets it through for a while. A script trying to make millions of cheap requests per day now has to pay real CPU time for every single one, which breaks the economics of bulk scraping even when it doesn't literally block anything.

Ryabitsev's post describes watching that arms race play out in real time on kernel.org. He raised Anubis's difficulty from 4 leading zero bits to 5, a change that (as he put it) makes people's phones "uncomfortably warm" while solving it, since more zero bits means more attempts, and more attempts means more heat. The bots adapted and started solving difficulty-5 challenges anyway. The mitigation still runs, but nobody involved is pretending it's a permanent fix. Security researcher Tavis Ormandy summarized the underlying asymmetry well: proof-of-work costs are, in his words, "literally nothing for a soulless AI vendor with a monthly cloud services budget in the 8 figures." It's a real cost, just not a large enough one against that kind of budget.

## What comes after proof-of-work

Kernel.org's stated plan, going forward, is to reduce the crawlable surface area itself rather than keep raising the price of crawling it: turning off features that generate large numbers of derived pages, and gating the more expensive rendering operations behind either a login or a formal bulk-download request, while keeping the underlying data available to anyone who asks for it directly. That's a meaningful shift in posture, from "defend every URL" to "shrink the number of URLs worth attacking."

Tarpits like SourceHut's Nepenthes take a different angle: instead of trying to block scrapers, feed them convincingly fake, procedurally generated content that costs the crawler compute to fetch and, ideally, pollutes whatever dataset it ends up in. It's less about protecting your own server and more about making scraping your site net-negative for the scraper. Blocking entire cloud provider ranges or whole countries, as SourceHut, Fedora, and others have done, is a blunter tool that trades some false positives (a legitimate developer working from a GCP-hosted dev box, say) for a large reduction in noise.

None of these are elegant. All of them are what people are actually running in production right now, often stacked on top of each other, because no single approach holds up on its own.

## The part that applies beyond git hosting

It's tempting to read this as a story specific to large open source foundations with unusually crawlable software, and the cgit angle is a genuinely unusual amplifier. But the underlying dynamic isn't specific to git hosting at all. Any site that serves a lot of distinct, content-bearing pages, a wiki, a documentation site, a forum, a product catalog, a blog archive, is exactly the kind of target that makes bulk scraping worthwhile, and the load doesn't care whether the operator is the Linux Foundation or one person running a Ghost blog on a $5 VPS.

If you're self-hosting anything with real content behind it, this is worth treating as a line item, not a surprise. A few concrete things worth doing before it becomes your problem at 2 AM: put a reverse proxy with rate limiting in front of anything content-heavy, even a cheap one; keep an eye on server load broken down by user-agent so you notice the pattern before it takes the site down; and if a chunk of your pages are cheap to generate but expensive to render (think anything templated from a database on every request), cache the rendered output aggressively so a crawl doesn't force a fresh database query on every hit. Anubis is a five-minute install as a reverse proxy in front of anything running behind nginx or Caddy, and it's a reasonable default even for a small personal project, not just kernel.org-scale infrastructure.

The bigger picture: the assumption that a public URL mostly gets visited by people has quietly stopped being true. Budgeting CPU and bandwidth for automated traffic isn't paranoia anymore, it's closer to accounting for a fact of how the modern web works.
