---
title: "X Sent Nitter a Cease-and-Desist. Self-Hosting Still Works"
description: "X Corp's cease-and-desist letter took nitter.net and XCancel offline on August 24, 2026 and got the project's GitHub repo archived two days later. Here's what the letter says, why public instances keep losing this fight, and how to self-host a private Nitter reader and reach it with Pinggy."
date: 2026-08-26T10:00:00+05:30
lastmod: 2026-08-26T10:00:00+05:30
draft: false
tags: ["Nitter", "self-hosted", "privacy", "open source", "Pinggy"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/nitter_cease_and_desist_self_hosting/nitter_cease_and_desist_self_hosting_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KeyJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLCAiQHR5cGUiOiAiSG93VG8iLCAibmFtZSI6ICJIb3cgdG8gU2VsZi1Ib3N0IGEgUHJpdmF0ZSBOaXR0ZXIgUmVhZGVyIGFuZCBBY2Nlc3MgSXQgd2l0aCBQaW5nZ3kiLCAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHJ1bm5pbmcgYSBwZXJzb25hbCBOaXR0ZXIgZm9yayB3aXRoIGEgYnVybmVyLWFjY291bnQgc2Vzc2lvbiB0b2tlbiBhbmQgZXhwb3NpbmcgaXQgc2VjdXJlbHkgd2l0aCBhIFBpbmdneSB0dW5uZWwgaW5zdGVhZCBvZiBhIHB1YmxpYyBWUFMuIiwgInN0ZXAiOiBbeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDbG9uZSBhIG1haW50YWluZWQgZm9yayIsICJ0ZXh0IjogIlJ1bjogZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWthaS1zb2Z0L25pdHRlci1waXRjaGZvcmtlZC5naXQgJiYgY2Qgbml0dGVyLXBpdGNoZm9ya2VkLiBUaGUgb3JpZ2luYWwgemVkZXVzL25pdHRlciByZXBvIHdhcyBhcmNoaXZlZCBvbiBBdWd1c3QgMjYsIDIwMjYsIHNvIGEgbWFpbnRhaW5lZCBmb3JrIGlzIG5lZWRlZCBmb3IgdXBkYXRlcy4ifSwgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJHZW5lcmF0ZSBhIHNlc3Npb24gdG9rZW4iLCAidGV4dCI6ICJVc2UgYSB0aHJvd2F3YXkgWCBhY2NvdW50IHdpdGggdGhlIHByb2plY3QncyBnZXRfc2Vzc2lvbi5weSBzY3JpcHQgdG8gcHJvZHVjZSBhIHNlc3Npb25zLmpzb25sIGZpbGUuIFRoaXMgcmVwbGFjZXMgdGhlIGd1ZXN0IHRva2VucyBYIHJlbW92ZWQgaW4gSmFudWFyeSAyMDI0LiJ9LCB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNvbmZpZ3VyZSBuaXR0ZXIuY29uZiIsICJ0ZXh0IjogIkNvcHkgbml0dGVyLmV4YW1wbGUuY29uZiB0byBuaXR0ZXIuY29uZiwgc2V0IGhvc3RuYW1lIHRvIGxvY2FsaG9zdCwgcG9ydCB0byA4MDgwLCBnZW5lcmF0ZSBobWFjS2V5IHdpdGggb3BlbnNzbCByYW5kIC1oZXggMzIsIGFuZCBzZXQgcmVkaXNIb3N0IHRvIG5pdHRlci1yZWRpcyBmb3IgRG9ja2VyIENvbXBvc2UuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU3RhcnQgdGhlIHN0YWNrIiwgInRleHQiOiAiUnVuOiBkb2NrZXItY29tcG9zZSB1cCAtZCB0byBzdGFydCBOaXR0ZXIgYW5kIFJlZGlzIHRvZ2V0aGVyLiBUaGUgcmVhZGVyIGJlY29tZXMgYXZhaWxhYmxlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC4ifSwgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJFeHBvc2UgaXQgcHJpdmF0ZWx5IHdpdGggUGluZ2d5IiwgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwgcnVuOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSB0ZW1wb3JhcnkgcHVibGljIEhUVFBTIFVSTCB5b3UgY2FuIG9wZW4gZnJvbSB5b3VyIHBob25lLCB3aXRob3V0IG9wZW5pbmcgcm91dGVyIHBvcnRzIG9yIHJlbnRpbmcgYSBWUFMuIn1dfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "nitter_cease_and_desist_self_hosting/nitter_cease_and_desist_self_hosting_banner.webp" "Dark banner reading 'Nitter Is Offline, Your Own Copy Doesn't Have To Be' with tags for cease and desist, session tokens, self-hosting, and Pinggy tunnel" >}}

Nitter.net went dark on August 24, 2026. Two days later, on August 26, the project's GitHub repository was archived - "read-only," in GitHub's own words - after seven years of active development. The cause wasn't a funding shortfall or a maintainer burning out. X Corp sent a cease-and-desist letter, gave the developer until 5 p.m. Eastern the next day to comply, and that was that. XCancel, one of the larger public services built on the same codebase, went offline the same night.

If you've never used it: Nitter was a lightweight front-end for reading X (formerly Twitter) posts. No login, no ads, no tracking JavaScript, no algorithmic feed - you gave it a username or a link and it rendered the posts as plain HTML. It also served RSS feeds for accounts and searches, which is how a lot of people, scripts, and news aggregators actually consumed it day to day.

## What the letter actually says

<a href="https://techcrunch.com/2026/08/25/x-sends-cease-and-desist-to-open-source-project-nitter-over-alleged-scraping/" target="_blank">TechCrunch reviewed the cease-and-desist</a> and reported that X accused Nitter of "unlawful use and circumvention of X's Application Programming Interface (API) and associated data," and alleged the project "scraped X data and accessed X accounts and session tokens" in violation of X's terms. The letter cited the Texas Harmful Access by Computer Act and the federal Lanham Act as its legal basis, and it wasn't aimed only at the flagship nitter.net - other instance operators reported getting the same letter.

The developer, who goes by Zedeus, posted a short statement: "nitter.net is offline and development has stopped for the time being. I'm seeking legal advice." That's the whole announcement. No fight, no fundraiser, no defiant relaunch - just a shutdown notice, followed two days later by the repo archive.

## This isn't Nitter's first near-death experience

This is actually round two. In January 2024, X pulled the "guest account" API that Nitter relied on to fetch posts without a login. Every public instance broke within days, and the project looked finished. The community adapted instead: forks switched from guest tokens to authenticating with real X account session cookies, and by February 2025 Zedeus was <a href="https://github.com/zedeus/nitter/discussions/1212" target="_blank">posting on GitHub Discussions</a> that development was resuming.

What's different this time is that the C&D doesn't just target the network requests, it targets the code itself - X demanded a "permanent takedown of Nitter instances and the project's repository." Blocking an API is a technical problem you can route around. A legal letter naming the repository by name is a different kind of pressure, and it's the kind an unpaid open-source maintainer has far less appetite to fight alone.

## The part everyone on Hacker News is pointing out

The irony didn't take long to surface. X is owned by xAI, and xAI's Grok has been trained in large part on a real-time, large-scale scrape of public posts from X itself, plus the open web more broadly. Ireland's Data Protection Commission got X/xAI to agree to stop processing EU users' data for Grok training and to delete personal data scraped between May and August 2024, after regulatory pressure over the exact same "unauthorized scraping" concept. So the company sending cease-and-desist letters over "unlawful scraping" has spent the last two years fielding near-identical accusations about its own AI training pipeline. Nobody involved thought that comparison was subtle - close to 900 comments piled up across the two Hacker News threads on this story, and the irony was the most repeated line in both.

## Why public instances keep losing this fight

Zoom out and the pattern is consistent, not just for Nitter. A public instance of an ad-stripping, login-free front-end is:

- **A listed target.** Community-maintained lists of active instances exist so users can find one that's up. The same lists double as a ready-made enforcement target list.
- **A visible competitor.** No ads, no login wall, no algorithmic feed - it strips exactly the tracking and engagement mechanics the platform's ad business depends on. A public instance with real traffic is a business problem, not just a terms-of-service violation.
- **Running at a scale that shows up.** Thousands of anonymous requests through one IP range or a known reverse proxy is trivial to fingerprint.

None of that describes someone running a copy of the same code on their own laptop to read their own feed.

## What self-hosting still gets you

{{< image "nitter_cease_and_desist_self_hosting/nitter_public_vs_personal_diagram.webp" "Diagram comparing a public Nitter instance serving thousands of anonymous users from a rented VPS against a personal instance reached through a private Pinggy tunnel" >}}

The zedeus/nitter repository is archived, not deleted - you can still `git clone` it, and the code builds the same as it did last week. Archiving on GitHub disables new issues and pull requests on the original repo; it doesn't erase the git history or stop forks. A handful of community forks kept pace with the account-token migration well before this week's letter, including <a href="https://github.com/sekai-soft/nitter-pitchforked" target="_blank">nitter-pitchforked</a>, which is what I used to check the steps below still work today.

{{< llm-context >}}To self-host a private Nitter reader with Pinggy - configure a Nitter fork like nitter-pitchforked with a throwaway account's session token, run `docker-compose up -d` (starts on port 8080), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL you can open from your phone.{{< /llm-context >}}

{{% tldr %}}
1. **Clone a maintained fork**: `git clone https://github.com/sekai-soft/nitter-pitchforked.git && cd nitter-pitchforked`
2. **Get a session token**: sign up a throwaway X account and run the project's `get_session.py` to produce `sessions.jsonl`
3. **Configure**: `cp nitter.example.conf nitter.conf`, set `hostname = "localhost"`, `port = 8080`, generate `hmacKey` with `openssl rand -hex 32`
4. **Start**: `docker-compose up -d` - the reader runs at `http://localhost:8080`
5. **Expose it to yourself**: `ssh -p 443 -R0:localhost:8080 free.pinggy.io`
{{% /tldr %}}

### Step by step

**1. Get the code.** Clone the fork:

```bash
git clone https://github.com/sekai-soft/nitter-pitchforked.git
cd nitter-pitchforked
```

**2. Generate a session token.** X removed the guest-account API in January 2024, so the backend now has to authenticate as a real account. Don't use your main one - a throwaway account works with the project's `get_session.py` script, which logs in with that account's credentials and writes the resulting session cookie to `sessions.jsonl`. That file sits next to your config and is the only credential the whole setup needs.

**3. Configure `nitter.conf`.** Copy the example file and edit a few lines:

```ini
[Server]
hostname = "localhost"
port = 8080

[Cache]
redisHost = "nitter-redis"   # matches the service name in docker-compose

[Config]
hmacKey = "generate-this-with-openssl-rand-hex-32"
```

`hmacKey` signs proxied media URLs - generate a real random value, don't leave the placeholder in place.

**4. Start it:**

```bash
docker-compose up -d
```

This brings up the Nitter container and a Redis instance together. Give it a few seconds, then open `http://localhost:8080` - you should see a working feed with your own timeline and search, minus every tracker.

**5. Reach it from your phone.** Docker Compose binds to localhost by default, so nothing outside your machine can see it yet - which is exactly what you want here. To read your feed from your phone without opening a port on your router or renting a VPS with a public IP, open a second terminal and run:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy prints a temporary HTTPS URL you can open from any device. It works as a reverse SSH tunnel - your machine connects out to Pinggy, and Pinggy forwards traffic back in - so there's no inbound firewall rule to manage and no static IP tied to your home connection. Close the terminal and the URL stops resolving; there's no standing server for anyone to find, list, or send a letter to.

## What this doesn't buy you

Be honest about what "personal instance" actually means here. It is not a legal loophole - the same terms X cited against Nitter technically apply to anyone hitting their systems outside the official client, at any scale. What changes is exposure, not exemption: a single-user instance behind an ephemeral tunnel URL isn't listed anywhere, isn't indexed, and isn't generating the kind of traffic that got the public instances flagged in the first place. It's a much smaller target, not a shield.

There's also a real maintenance cost. X has broken Nitter's scraping method twice now in under three years, and a throwaway account used this way can itself get suspended - if that happens, you're back to `get_session.py` and a new account. This is weekend-project-level upkeep, not a set-and-forget service.

## The bigger pattern

This week is a Nitter story, but the shape of it applies to Invidious, Libreddit, and every other privacy-respecting front-end that strips ads and tracking from a platform whose business model depends on ads and tracking. Running the public-facing, high-traffic version of any of these is picking a fight with a legal team. Running your own for yourself, reachable only when you need it, is a quieter and different thing - and it's still legal-gray, not legal-clean, so weigh that before committing an evening to setting one up.

Nitter's code isn't gone. Seven years of work parsing X's markup into something readable without a login still runs today, on your own machine, for an audience of one.
