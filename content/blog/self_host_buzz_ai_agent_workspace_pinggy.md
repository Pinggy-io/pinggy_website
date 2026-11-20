---
title: "Self-Host Buzz: Block's AI Agent Workspace, Reachable from Anywhere with Pinggy"
description: "Block open-sourced Buzz, a Nostr-based chat and Git workspace where AI agents get their own cryptographic identity instead of a bot token. Here's what it does, how to self-host it, and how to reach the relay from outside your network with a single Pinggy tunnel."
date: 2026-07-28T11:00:00+05:30
lastmod: 2026-07-28T11:00:00+05:30
draft: false
tags: ["self-hosted", "AI agents", "Nostr", "Buzz", "Block", "team chat", "Docker", "Pinggy", "open source", "Slack alternative"]
categories: ["Technology", "Self-Hosting", "Developer Tools"]
og_image: "images/self_host_buzz_ai_agent_workspace_pinggy/self_host_buzz_ai_agent_workspace_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KeyJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLCAiQHR5cGUiOiAiSG93VG8iLCAibmFtZSI6ICJIb3cgdG8gU2VsZi1Ib3N0IEJ1enogYW5kIEV4cG9zZSBJdCB3aXRoIFBpbmdneSIsICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gcnVubmluZyBCbG9jaydzIEJ1enogQUktYWdlbnQgd29ya3NwYWNlIGxvY2FsbHkgd2l0aCBEb2NrZXIgYW5kIEhlcm1pdCwgdGhlbiBtYWtpbmcgaXRzIE5vc3RyIHJlbGF5IHJlYWNoYWJsZSBmcm9tIGFueXdoZXJlIHVzaW5nIGEgUGluZ2d5IHR1bm5lbC4iLCAic3RlcCI6IFt7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNsb25lIHRoZSByZXBvc2l0b3J5IGFuZCBhY3RpdmF0ZSBIZXJtaXQiLCAidGV4dCI6ICJSdW4gZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9ibG9jay9idXp6LmdpdCAmJiBjZCBidXp6LCB0aGVuIC4gLi9iaW4vYWN0aXZhdGUtaGVybWl0IHRvIGxvYWQgdGhlIHBpbm5lZCBSdXN0LCBOb2RlLCBhbmQgcG5wbSB0b29sY2hhaW4uIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiSW5zdGFsbCBkZXBlbmRlbmNpZXMgYW5kIGJ1aWxkIiwgInRleHQiOiAiUnVuIGp1c3Qgc2V0dXAgJiYganVzdCBidWlsZCB0byBpbnN0YWxsIGRlcGVuZGVuY2llcyBhbmQgY29tcGlsZSB0aGUgcmVsYXkgYW5kIGRlc2t0b3AgYXBwLiJ9LCB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlN0YXJ0IHRoZSByZWxheSBhbmQgZGVza3RvcCBhcHAiLCAidGV4dCI6ICJSdW4ganVzdCBkZXYgdG8gc3RhcnQgdGhlIEJ1enogcmVsYXkgb24gd3M6Ly9sb2NhbGhvc3Q6MzAwMCBhbG9uZ3NpZGUgdGhlIGRlc2t0b3AgY2xpZW50LiJ9LCB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkV4cG9zZSB0aGUgcmVsYXkgd2l0aCBQaW5nZ3kiLCAidGV4dCI6ICJJbiBhIG5ldyB0ZXJtaW5hbCwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUy9XU1MgVVJMIHN1Y2ggYXMgaHR0cHM6Ly9hYmMxMjMuYS5waW5nZ3kubGluay4ifSwgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJQb2ludCBSRUxBWV9VUkwgYXQgdGhlIHB1YmxpYyBVUkwiLCAidGV4dCI6ICJTZXQgUkVMQVlfVVJMIGluIC5lbnYgdG8gdGhlIHdzczovLyB2ZXJzaW9uIG9mIHRoZSBQaW5nZ3kgVVJMIHNvIE5JUC00MiBhdXRoIGNoYWxsZW5nZXMgdmFsaWRhdGUgY29ycmVjdGx5LCB0aGVuIHJlc3RhcnQgdGhlIHJlbGF5LiJ9LCB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNvbm5lY3QgdGVhbW1hdGVzIGFuZCBhZ2VudHMgcmVtb3RlbHkiLCAidGV4dCI6ICJTaGFyZSB0aGUgd3NzOi8vIFBpbmdneSBVUkwgd2l0aCB0ZWFtbWF0ZXMgb3IgYWdlbnQgcHJvY2Vzc2VzIG91dHNpZGUgeW91ciBuZXR3b3JrIHNvIHRoZXkgY2FuIGFkZCBpdCBhcyBhIGNvbW11bml0eSByZWxheSBpbiB0aGUgQnV6eiBjbGllbnQgYW5kIHNpZ24gaW4gd2l0aCB0aGVpciBvd24gTm9zdHIga2V5LiJ9XX0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "self_host_buzz_ai_agent_workspace_pinggy/self_host_buzz_ai_agent_workspace_pinggy_banner.webp" "Self-host Buzz, Block's Nostr-based AI agent workspace, and expose it with Pinggy" >}}

Block, the company behind Square, Cash App, Afterpay, and Tidal, open-sourced a workspace called Buzz on July 21. The pitch is blunt: replace Slack and GitHub with a single tool where AI agents are teammates with their own cryptographic identity, not bots hanging off a webhook. The Hacker News thread the same day pulled 365 points and 325 comments, and a good chunk of that was pushback - a Slack engineer flagged data-leakage risk from agents sharing channels, and more than one commenter pointed out the irony of a GitHub alternative being hosted on GitHub.

Whatever you think of the pitch, the engineering underneath is worth a look, and it happens to run into the exact problem Pinggy exists to solve.

## What Buzz actually is

Buzz is a Nostr relay with a chat and Git client bolted on top, written as a Rust workspace on Axum. Instead of a database schema you'd recognize from Slack, every message, reaction, code review, workflow step, and approval is a signed Nostr event written to one append-only log. You own the relay, so you own the log - there's no Block-hosted service sitting between your team and its history unless you choose one.

The part that's actually new is how agents fit in. Add an agent to a channel the same way you'd add a coworker. It gets its own Nostr keypair, its own channel memberships, and its own entry in the audit trail - every patch it sends, review it leaves, or workflow it triggers is a signed event attributable to that specific key, not to "the API." Block's framing is that agents should be "part of the room, not haunted cron jobs," and the identity model is what makes that literal instead of a slogan.

Agents connect through `buzz-acp`, a harness in the repo that spawns agent subprocesses and auto-injects three environment variables: `BUZZ_RELAY_URL`, `BUZZ_PRIVATE_KEY`, and `BUZZ_AUTH_TAG`. There's also `buzz-cli`, an agent-first command line client (`cargo build --release -p buzz-cli`) that reads threads and posts structured, signature-stripped JSON - built for a script to parse, not a human to scroll. Rate limits are tiered by role in the config: humans get 60 messages/minute, standard agents 120, elevated agents 300, and platform-level agents 600, which tells you Block expects agents to be considerably chattier than people.

As of this week the project sits well past 10,000 GitHub stars, most of them added in the three days after launch - <a href="https://news.ycombinator.com/item?id=48995213" target="_blank">the HN discussion</a> is worth reading for the skepticism alone.

{{< llm-context >}}To self-host Buzz's AI-agent workspace and reach it remotely with Pinggy - run `just setup && just build` once, then `just dev` (starts the relay on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public wss:// URL, and set RELAY_URL in .env to that address before restarting the relay.{{< /llm-context >}}

{{% tldr %}}
1. **Clone and activate the toolchain**: `git clone https://github.com/block/buzz.git && cd buzz && . ./bin/activate-hermit`
2. **Install and build**: `just setup && just build`
3. **Run it**: `just dev` - the relay comes up on `ws://localhost:3000` with the desktop app
4. **Expose it**: `ssh -p 443 -R0:localhost:3000 free.pinggy.io` in a second terminal
5. **Re-point the relay**: set `RELAY_URL` in `.env` to the `wss://` Pinggy URL, then restart
6. **Share it**: give teammates or remote agents the `wss://` URL as their community relay
{{% /tldr %}}

## Setting it up locally

Buzz needs Docker plus either the bundled Hermit toolchain or Rust 1.88+, Node 24+, pnpm 10+, and `just` installed yourself. Hermit is the path of least resistance - it pins exact tool versions inside the repo so you're not hunting for a Rust version mismatch three files into a build.

```bash
git clone https://github.com/block/buzz.git
cd buzz
. ./bin/activate-hermit
just setup && just build
```

`just setup` pulls dependencies and boots the Postgres, Redis, and MinIO containers the relay needs for event storage, full-text search, pub/sub, and media (Buzz uses the Blossom protocol for file attachments). `just build` compiles the Rust workspace. Both take a few minutes the first time.

Daily development after that is one command:

```bash
. ./bin/activate-hermit
just dev
```

This starts the relay on `ws://localhost:3000` and launches the desktop app pointed at it. Prebuilt desktop clients (macOS `.dmg`, Linux `.AppImage`/`.deb`, Windows `.exe`) are also available from the <a href="https://github.com/block/buzz/releases/latest" target="_blank">latest release</a> if you don't want to build from source, though you'll still need the relay running somewhere.

## The networking problem Pinggy solves

`just dev` binds the relay to your loopback interface. That's fine for you, sitting at the machine that's running it. It's not fine for a teammate on another network, a phone running the (still early) mobile client, or an agent process running on a different box - none of them can resolve `localhost:3000` to your machine.

This isn't a hypothetical gap. Buzz's own issue tracker has it logged twice: <a href="https://github.com/block/buzz/issues/2816" target="_blank">issue #2816</a> notes that self-host onboarding dead-ends - choosing "I own the community" only routes you to Block's hosted Builderlab option and never surfaces a relay URL field for people running their own instance. And <a href="https://github.com/block/buzz/issues/2735" target="_blank">issue #2735</a> documents that the mobile app can't onboard standalone; it needs the desktop app's identity first. Community docs that do address remote access tell you to put your own reverse proxy in front of the relay and use its `wss://` URL - which is correct, and also a full afternoon of nginx and cert config for something you might only need for a week-long trial with a distributed team.

Pinggy skips the reverse proxy entirely. It opens an SSH reverse tunnel from your machine to Pinggy's edge; inbound traffic on a public HTTPS/WSS URL gets forwarded straight back down that tunnel to your local port. No inbound firewall rule, no domain, no TLS certificate to manage - the tunnel itself terminates TLS for you.

{{< image "self_host_buzz_ai_agent_workspace_pinggy/buzz_pinggy_architecture.webp" "Architecture diagram showing a local Buzz relay reached through a Pinggy tunnel by remote teammates and AI agents" >}}

## Exposing the relay with Pinggy

With `just dev` running and the relay up on port 3000, open a second terminal:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

Pinggy prints back a pair of URLs:

```
http://abc123.a.pinggy.link
https://abc123.a.pinggy.link
```

For a WebSocket-based relay you want the `wss://` form of the HTTPS URL - `wss://abc123.a.pinggy.link` - since that's what a Nostr client expects when connecting over TLS.

Here's the detail that'll bite you if you skip it: Buzz's relay signs NIP-42 authentication challenges against whatever `RELAY_URL` is set to in your `.env`. If that still says `ws://localhost:3000` while clients are actually connecting through the Pinggy tunnel, auth challenges won't match the connection they were issued for, and remote logins will fail in a way that looks like a bug in your setup rather than a stale config value. Update it:

```bash
# .env
RELAY_URL=wss://abc123.a.pinggy.link
```

Restart the relay so it picks up the change, then have a remote teammate open their Buzz client, add a community pointing at that `wss://` URL, and sign in with their `nsec1...` key. Point an agent process at the same URL via its `BUZZ_RELAY_URL` environment variable and it joins the same way - no separate integration path for humans versus agents, which is the whole design premise of the project.

### Locking it down before you share the URL

A relay reachable from the public internet is, by default, reachable by anyone who has the link. Two `.env` settings matter here:

```bash
RELAY_OWNER_PUBKEY=your_pubkey_here
BUZZ_REQUIRE_RELAY_MEMBERSHIP=true
```

Setting an owner pubkey and requiring relay membership means new connections need an explicit invite rather than write access the moment they find the URL. Combined with the built-in rate limits (60 msgs/min for humans, up to 600/min for platform-tier agents), this keeps a demo link from turning into an open mic for the entire internet. For anything beyond a short-lived trial, a <a href="https://pinggy.io/#prices" target="_blank">Pinggy paid plan</a> also gets you a fixed subdomain instead of one that changes every time you reconnect, and a <a href="https://pinggy.io/docs/tunnel_token/" target="_blank">tunnel token</a> to automate reconnects without babysitting a terminal.

## Tradeoffs to know

**This is a young project.** Buzz shipped nine days before this post. Mobile onboarding is unfinished, the desktop app is still built on Tauri with rough edges, and the git-hosting backend Block has talked about is not built yet - what's live today is the relay, channels, threads, DMs, canvases, media, search, and audit logs.

**The HN skepticism is worth taking seriously.** Letting multiple AI agents post into shared channels with the same visibility as humans is a real surface for accidental data exposure, and Block hasn't fully answered that concern yet. If you're piloting this with a team, start with a narrow set of channels and agents before opening it wider.

**Resource footprint is heavier than a chat app has any right to be.** Postgres, Redis, and MinIO alongside the relay itself means you're running four services for what used to be one Slack tab. Fine on a laptop or a small VPS, worth knowing before you try it on a Raspberry Pi. If you want a lighter self-hosted chat stack without the agent-identity layer, the {{< link href="/blog/best_open_source_alternatives_to_slack_and_discord/" >}}open source Slack and Discord alternatives{{< /link >}} roundup covers options like Rocket.Chat and Zulip that run on a single container.

**Free Pinggy URLs are ephemeral.** Every time you reconnect the tunnel, you get a new subdomain, and you'd need to update `RELAY_URL` again. For a same-day demo that's a non-issue; for anything you want teammates coming back to next week, get a fixed URL first.

## Wrapping up

Buzz is a genuinely different answer to "what does team chat look like once agents are full participants" - the identity model, the single signed event log, and the rate-limit tiers all follow from taking that question seriously instead of treating agents as bots with extra steps. Whether that's the right shape for your team is a separate question from whether it's worth trying, and trying it doesn't require a VPS or a reverse proxy. `just dev` gets the relay running locally in a few minutes; one `ssh` command is what turns that into something a teammate on the other side of the world - or an agent running somewhere else entirely - can actually reach.
