---
title: "How Cloudflare Incident Affected 2.4 Billion Internet Users"
description: "Deep dive into the November 18, 2025 Cloudflare outage that disrupted 2.4 billion users across ChatGPT, X, Spotify, Canva, and more. Technical breakdown of the Bot Management bug, financial impact analysis, and lessons learned from one of the internet's worst outages since 2019."
date: 2025-11-18T14:30:00+00:00
lastmod: 2025-11-18T17:30:00+00:00
draft: false
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyBDbG91ZGZsYXJlIEluY2lkZW50IEFmZmVjdGVkIDIuNCBCaWxsaW9uIEludGVybmV0IFVzZXJzIiwKICAiZGVzY3JpcHRpb24iOiAiVW5kZXJzdGFuZCB0aGUgTm92ZW1iZXIgMTgsIDIwMjUgQ2xvdWRmbGFyZSBvdXRhZ2UsIGl0cyByb290IGNhdXNlLCBhbmQgaG93IHRvIHByZXZlbnQgc2ltaWxhciBpbmNpZGVudHMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Nsb3VkZmxhcmVfb3V0YWdlX25vdl8yMDI1L2Nsb3VkZmxhcmVfb3V0YWdlX2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlVuZGVyc3RhbmQgdGhlIHNjYWxlOiAyLjQgYmlsbGlvbiB1c2VycyBhZmZlY3RlZCBhY3Jvc3MgQ2hhdEdQVCwgU3BvdGlmeSwgWCwgQ2FudmEsIGFuZCBtb3JlIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIklkZW50aWZ5IHRoZSByb290IGNhdXNlOiBDbGlja0hvdXNlIGRhdGFiYXNlIHBlcm1pc3Npb25zIGNoYW5nZSBjYXVzZWQgQm90IE1hbmFnZW1lbnQgZmVhdHVyZSBmaWxlIHRvIGRvdWJsZSBpbiBzaXplIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkxlYXJuIHByZXZlbnRpb24gbWVhc3VyZXM6IEltcGxlbWVudCBpbnB1dCB2YWxpZGF0aW9uLCBncmFjZWZ1bCBlcnJvciBoYW5kbGluZywgYW5kIGdsb2JhbCBraWxsIHN3aXRjaGVzIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkltcGxlbWVudCBtdWx0aS1DRE4gc3RyYXRlZ3kgb3IgZ3JhY2VmdWwgZGVncmFkYXRpb24gZm9yIGNyaXRpY2FsIGFwcGxpY2F0aW9ucyIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
tags: ["cloudflare", "outage", "incident", "infrastructure", "CDN", "security"]
og_image: "images/cloudflare_outage_nov_2025/cloudflare_outage_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "cloudflare_outage_nov_2025/cloudflare_outage_banner.webp" "Cloudflare Outage November 18, 2025" >}}

On November 18, 2025, at **11:20 UTC**, the internet experienced one of its most significant disruptions in recent history. {{< link href="https://www.cloudflare.com/" >}}Cloudflare{{< /link >}}, the infrastructure backbone serving millions of websites and applications, suffered a catastrophic outage that affected an estimated **2.4 billion monthly active users** across major platforms.

For nearly **six hours**, users worldwide encountered HTTP 500 errors instead of their favorite services, marking Cloudflare's worst incident since 2019.

The outage wasn't caused by a cyberattack or malicious activity. Instead, a seemingly innocuous database permissions change triggered a cascade of failures that brought down some of the internet's most critical services.

This incident serves as a stark reminder of how centralized our modern internet infrastructure has become, and how a single point of failure can ripple across the digital ecosystem.

{{% tldr %}}

**Scale of Impact:** 2.4 billion aggregated monthly active users affected across major platforms including <a href="https://chat.openai.com/" target="_blank">ChatGPT</a> (700M MAU), <a href="https://www.spotify.com/" target="_blank">Spotify</a> (713M MAU), <a href="https://x.com/" target="_blank">X/Twitter</a> (557M MAU), <a href="https://www.canva.com/" target="_blank">Canva</a> (240M MAU), <a href="https://discord.com/" target="_blank">Discord</a> (200M MAU), <a href="https://claude.ai/" target="_blank">Claude</a> (19M MAU), and <a href="https://www.figma.com/" target="_blank">Figma</a> (13M MAU).

**Duration:** Core outage lasted from 11:20 UTC to 14:30 UTC (3 hours 10 minutes), with full service restoration at 17:06 UTC (5 hours 46 minutes total).

**Root Cause:** A <a href="https://clickhouse.com/" target="_blank">ClickHouse</a> database permissions change caused Bot Management feature file to double in size, exceeding hardcoded memory limits in Cloudflare's proxy system.

**Financial Impact:** Estimated $180-360 million in lost revenue across affected services, based on conservative calculations of hourly revenue loss during peak disruption.

**Services Affected:** Core CDN, Turnstile, Workers KV, Access, Email Security, plus downstream impacts to ChatGPT, X, Spotify, Canva, Discord, <a href="https://www.digitalocean.com/" target="_blank">DigitalOcean</a>, <a href="https://medium.com/" target="_blank">Medium</a>, Figma, <a href="https://1password.com/" target="_blank">1Password</a>, <a href="https://trello.com/" target="_blank">Trello</a>, <a href="https://www.namecheap.com/" target="_blank">Namecheap</a>, and dozens more.
{{% /tldr %}}

## The Scale of Disruption: 2.4 Billion Users Affected

When Cloudflare stumbles, the internet feels it. The company's network sits in front of millions of websites, handling everything from DNS resolution to DDoS protection, content delivery, and security filtering.

The aggregated monthly active user count across affected major services reached approximately **2.4 billion**:

- **{{< link href="https://chat.openai.com/" >}}ChatGPT{{< /link >}}**: 700 million MAU - authentication failures and service unavailability
- **{{< link href="https://www.spotify.com/" >}}Spotify{{< /link >}}**: 713 million MAU - streaming interruptions
- **{{< link href="https://x.com/" >}}X (Twitter){{< /link >}}**: 557 million MAU - over **11,500 problem reports** on {{< link href="https://downdetector.com/" >}}Downdetector{{< /link >}}
- **{{< link href="https://www.canva.com/" >}}Canva{{< /link >}}**: 240 million MAU - design projects inaccessible
- **{{< link href="https://discord.com/" >}}Discord{{< /link >}}**: 200 million MAU - connectivity issues
- **{{< link href="https://claude.ai/" >}}Claude{{< /link >}}**: 19 million MAU - service unavailable
- **{{< link href="https://www.figma.com/" >}}Figma{{< /link >}}**: 13 million MAU - design tools offline

The ripple effects extended to {{< link href="https://www.digitalocean.com/" >}}DigitalOcean{{< /link >}}, {{< link href="https://medium.com/" >}}Medium{{< /link >}}, {{< link href="https://1password.com/" >}}1Password{{< /link >}}, {{< link href="https://trello.com/" >}}Trello{{< /link >}}, {{< link href="https://www.namecheap.com/" >}}Namecheap{{< /link >}}, {{< link href="https://www.postman.com/" >}}Postman{{< /link >}}, {{< link href="https://vercel.com/" >}}Vercel{{< /link >}}, and countless other platforms.

What made this outage particularly frustrating was its intermittent nature during the first few hours. Services would recover briefly, only to fail again minutes later, leading many developers to initially suspect their own infrastructure.

{{< image "cloudflare_outage_nov_2025/outage_graph.webp" "Scale of Disruption Graph" >}}

## Timeline of the Incident: How It Unfolded

**11:05 UTC** - Cloudflare deployed a database access control change to their {{< link href="https://clickhouse.com/" >}}ClickHouse{{< /link >}} cluster to improve distributed query security.

**11:28 UTC** - First HTTP errors appeared on customer traffic.

**11:31 UTC** - Automated monitoring detected the issue; manual investigation began.

**11:35 UTC** - Incident call created, engineering teams assembled.

**11:32-13:05 UTC** - Engineers attempted various mitigations for Workers KV service. Initial symptoms were misleading. Cloudflare's status page also went down, leading some to suspect a DDoS attack.

**13:05 UTC** - Bypasses implemented for Workers KV and Cloudflare Access, falling back to prior proxy version.

**13:37 UTC** - Root cause identified: Bot Management configuration file doubled in size, exceeding the hardcoded **200-feature limit**.

**14:24 UTC** - Automatic deployment of new Bot Management configuration files stopped.

**14:30 UTC** - Previous configuration file deployed globally; most services began operating normally.

**17:06 UTC** - Full service restoration confirmed across all Cloudflare services.

## Technical Deep Dive: What Actually Broke

**Request Flow:**
1. HTTP and TLS layer
2. Core proxy system (FL/Frontline)
3. Bot Management assigns bot scores
4. {{< link href="https://github.com/cloudflare/pingora" >}}Pingora{{< /link >}} for cache lookups or origin fetches

### The Feature File Problem

The Bot Management ML model uses a "feature" configuration file refreshed every **few minutes** and distributed globally. Features are individual traits used to predict whether a request is automated or human-generated.

**What Changed:**
The database permissions change at **11:05 UTC** altered how {{< link href="https://clickhouse.com/" >}}ClickHouse{{< /link >}} returned metadata. The query began returning columns from both the "default" database and the underlying "r0" database, effectively **more than doubling** the number of features in the configuration file.

### The Critical Failure Point

The Bot Management system had a hardcoded limit of **200 features** (normal usage: ~**60 features**). When the oversized file with **more than 200 features** was propagated, the FL2 {{< link href="https://www.rust-lang.org/" >}}Rust{{< /link >}} code called `Result::unwrap()` on an error value, causing an unhandled panic.

**Impact:**
- **FL2 proxy**: HTTP 500 errors for users
- **FL proxy (older)**: Bot scores set to **zero**, causing false positives for bot-blocking rules

### Why It Was Intermittent

The feature file was regenerated every **five minutes** by querying the {{< link href="https://clickhouse.com/" >}}ClickHouse{{< /link >}} cluster, which was being gradually updated. Bad data was only generated if the query ran on an updated node. Every five minutes, there was a chance of either a good or bad file being generated.

Eventually, every {{< link href="https://clickhouse.com/" >}}ClickHouse{{< /link >}} node was updated, and the outage stabilized in the failing state.

## Financial Impact: Counting the Cost

The financial impact of a six-hour outage affecting **2.4 billion users** is staggering. Conservative estimates suggest direct revenue loss of **$180-360 million** across major affected services:

**Major Service Losses:**
- **{{< link href="https://openai.com/" >}}ChatGPT/OpenAI{{< /link >}}**: ~**$1.4M** in subscription value + API revenue
- **{{< link href="https://www.spotify.com/" >}}Spotify{{< /link >}}**: ~**$4.3M** in subscriptions + advertising losses
- **{{< link href="https://x.com/" >}}X (Twitter){{< /link >}}**: **$5-7M** in advertising revenue
- **{{< link href="https://www.canva.com/" >}}Canva{{< /link >}}**: **$2-3M** in direct revenue + enterprise productivity losses
- **Enterprise services** ({{< link href="https://www.digitalocean.com/" >}}DigitalOcean{{< /link >}}, {{< link href="https://www.figma.com/" >}}Figma{{< /link >}}, {{< link href="https://1password.com/" >}}1Password{{< /link >}}): Millions in SLA credits

**Indirect Costs:**
- Customer support expenses
- Engineering incident response time
- SLA credits and compensation
- Customer churn
- Reputational damage

For Cloudflare itself, SLA credits and enterprise compensation likely cost **tens of millions of dollars**.

The broader impact extends to millions of smaller businesses: e-commerce sites lost sales, SaaS applications couldn't serve customers, and content creators couldn't reach audiences. The aggregate impact across hundreds of thousands of affected sites likely added hundreds of millions more to the total cost.

## Affected Services: The Ripple Effect

### Core Cloudflare Services

**CDN and Security**: HTTP 500 errors instead of content for millions of websites

**Turnstile**: CAPTCHA alternative failed, breaking authentication flows including Cloudflare's own dashboard login

**Workers KV**: Elevated HTTP 500 error rates affected edge computing applications and internal Cloudflare services

**Cloudflare Access**: Zero trust authentication failures from incident start until **13:05 UTC**

**Email Security**: Processing continued, but temporary loss of IP reputation source reduced spam detection accuracy

### Downstream Service Impacts

**Consumer Services:**
- **{{< link href="https://chat.openai.com/" >}}ChatGPT{{< /link >}}** (700M MAU): Largely inaccessible
- **{{< link href="https://x.com/" >}}X/Twitter{{< /link >}}** (557M MAU): Struggled to load
- **{{< link href="https://www.spotify.com/" >}}Spotify{{< /link >}}** (713M MAU): Streaming unavailable
- **{{< link href="https://www.canva.com/" >}}Canva{{< /link >}}** (240M MAU): Design projects inaccessible
- **{{< link href="https://discord.com/" >}}Discord{{< /link >}}** (200M MAU): Communities went silent

**Developer Tools:**
- **{{< link href="https://www.digitalocean.com/" >}}DigitalOcean{{< /link >}}**: Control panel inaccessible
- **{{< link href="https://www.figma.com/" >}}Figma{{< /link >}}** (13M MAU, **95% of Fortune 500**): Offline during business hours
- **{{< link href="https://1password.com/" >}}1Password{{< /link >}}, {{< link href="https://trello.com/" >}}Trello{{< /link >}}, {{< link href="https://www.namecheap.com/" >}}Namecheap{{< /link >}}, {{< link href="https://www.postman.com/" >}}Postman{{< /link >}}, {{< link href="https://vercel.com/" >}}Vercel{{< /link >}}**: All experienced disruptions

### Global Impact

Cloudflare operates data centers in **over 300 cities** worldwide. The outage affected all regions simultaneously—North America, Europe, Asia, Africa, and South America—highlighting the systemic nature of the problem.

## Cloudflare's Response and Remediation

**13:05 UTC** - Engineers implemented bypasses for Workers KV and Cloudflare Access, falling back to an earlier proxy version to reduce customer impact.

**13:37 UTC** - Bot Management configuration file identified as the trigger.

**14:24 UTC** - Automatic deployment of new Bot Management files stopped.

**14:30 UTC** - Previous configuration file deployed globally, forcing proxy restart across entire network.

**17:06 UTC** - Full service restoration confirmed after **six hours**.

Cloudflare CEO Matthew Prince issued a public apology: "An outage like today is unacceptable. We've architected our systems to be highly resilient to failure to ensure traffic will always continue to flow."

## Lessons Learned and Prevention Measures

Cloudflare outlined specific remediation steps in their post mortem:

**1. Configuration File Validation**: Validate all configuration files, even internally generated ones, with size limits and format validation enforced at multiple layers.

**2. Improved Error Handling**: Replace `Result::unwrap()` with proper error handling that logs errors, falls back to known-good configurations, and continues serving traffic.

**3. Global Kill Switches**: Allow engineers to instantly disable features across the entire network without code deployment, enabling **minutes rather than hours** recovery time.

**4. Observability System Redesign**: Prevent debugging systems from consuming excessive CPU during incidents.

**5. Memory Allocation Strategy**: Replace hard **200-feature limit** with dynamic allocation and soft limits that trigger warnings rather than failures.

**6. Database Change Testing**: Require comprehensive testing for schema and permission changes, including validation of all affected queries.

**7. Configuration Monitoring**: Track file sizes, generation times, and distribution patterns to detect anomalies before production deployment.

**8. Gradual Rollout Strategy**: Develop better strategies for infrastructure changes, including canary deployments with automated validation.

## The Broader Implications for Internet Infrastructure

This outage raises important questions about centralization and systemic risk.

**Cloudflare's Scale:**
- Serves **over 20%** of all websites
- Processes **more than 50 million** HTTP requests per second
- Handles DNS queries for millions of domains

### Key Takeaways

**Single Point of Failure**: {{< link href="https://chat.openai.com/" >}}ChatGPT{{< /link >}}, {{< link href="https://www.spotify.com/" >}}Spotify{{< /link >}}, {{< link href="https://x.com/" >}}X{{< /link >}}, and {{< link href="https://www.canva.com/" >}}Canva{{< /link >}}—operated by completely different companies—all failed simultaneously due to shared Cloudflare dependency.

**Multi-Cloud Strategies**: Organizations need failover capabilities and parallel infrastructure with alternative CDN providers, though this adds cost and complexity.

**Graceful Degradation**: Services should detect failures and fall back to direct connections or alternative paths rather than hard failing.

**Regulatory Implications**: Incidents like this may accelerate discussions about critical infrastructure designation and oversight for major internet service providers.

**Technical Lessons**: The unhandled panic when a configuration file exceeded expected size represents a common pattern. Building resilient systems requires anticipating the unexpected and designing for failure modes.

## Comparing to Previous Major Outages

**Cloudflare July 2019**: Bad WAF regex caused CPU exhaustion. Duration: **27 minutes** vs. **six hours** in 2025.

**Cloudflare June 2025**: Google Cloud infrastructure failure. The November incident was self inflicted, making it more concerning.

**{{< link href="https://aws.amazon.com/" >}}AWS{{< /link >}} December 2021**: US-EAST-1 outage lasted **7+ hours**, affecting {{< link href="https://www.netflix.com/" >}}Netflix{{< /link >}}, {{< link href="https://www.disneyplus.com/" >}}Disney+{{< /link >}}, {{< link href="https://robinhood.com/" >}}Robinhood{{< /link >}}. Cause: Internal automation error.

**{{< link href="https://www.facebook.com/" >}}Facebook{{< /link >}} October 2021**: **6-hour** BGP routing error disconnected data centers, affecting billions across Facebook, {{< link href="https://www.instagram.com/" >}}Instagram{{< /link >}}, {{< link href="https://www.whatsapp.com/" >}}WhatsApp{{< /link >}}, Oculus.

**{{< link href="https://www.fastly.com/" >}}Fastly{{< /link >}} June 2021**: Less than **1 hour**, affecting {{< link href="https://www.amazon.com/" >}}Amazon{{< /link >}}, {{< link href="https://www.reddit.com/" >}}Reddit{{< /link >}}, {{< link href="https://www.twitch.tv/" >}}Twitch{{< /link >}}. Rapid recovery highlights importance of quick diagnosis.

### What Makes This Unique

The November 2025 Cloudflare outage combined duration, scope, and user impact like few others. The **2.4 billion affected users** represents a significant portion of the global internet using population, making this one of the most impactful outages in internet history.

## What This Means for Cloudflare Customers

For organizations relying on Cloudflare, this **six-hour outage** demands reassessment of risk management strategies.

### Key Considerations

**Continue Using Cloudflare?**
- **Non-critical apps**: Cloudflare's performance, features, and pricing remain compelling
- **Mission-critical apps**: Implement redundancy to mitigate downtime risk

**Multi-CDN Strategies**: Configure DNS to distribute traffic across multiple CDN providers for automatic failover. Tools like {{< link href="https://www.cedexis.com/" >}}Cedexis{{< /link >}} and {{< link href="https://ns1.com/" >}}NS1{{< /link >}} specialize in intelligent traffic management.

**Graceful Degradation**: Design applications to function when Cloudflare is unavailable by falling back to direct origin connections, serving cached content, or displaying informative error messages.

**SLA Review**: Verify if this outage triggered SLA credits (typically **99.9% to 100%** uptime commitments) and evaluate whether SLAs adequately reflect business impact.

**Independent Monitoring**: Use third-party services like {{< link href="https://www.pingdom.com/" >}}Pingdom{{< /link >}}, {{< link href="https://uptimerobot.com/" >}}UptimeRobot{{< /link >}}, or {{< link href="https://www.datadoghq.com/" >}}Datadog{{< /link >}} to provide early warning independent of Cloudflare's dashboard.

## Conclusion: 

The November 18, 2025 Cloudflare outage triggered by a faulty Bot Management configuration file that exceeded memory limits disrupted services for 2.4 billion users and caused massive economic losses. A combination of unhandled Rust errors, missing validation, and lack of fast kill switches turned a routine change into Cloudflare’s longest outage since 2019, lasting nearly six hours. The incident highlights critical lessons: Cloudflare needs stronger diagnostics, failover systems, and emergency controls; the tech industry must reduce systemic risks through redundancy and architectural diversity; and users are reminded how much the modern internet depends on a few key providers. While Cloudflare is now improving validation, error handling, global kill switches, and testing, the event will remain a major reminder of how challenging it is to build a resilient internet for billions.


