---
title: "Self-Host Kaneo and Expose It with Pinggy"
description: "Kaneo is a minimalist, open source Linear alternative with its own MCP server so AI coding agents can manage tickets too. Run it with Docker Compose, then expose it to the internet with one Pinggy command - no VPS, no per-seat billing."
date: 2026-08-04T10:00:00+05:30
lastmod: 2026-08-04T10:00:00+05:30
draft: false
tags: ["self-hosted", "project management", "Kaneo", "Linear alternative", "Docker", "Pinggy", "open source", "MCP", "AI agents"]
categories: ["Technology", "Self-Hosting", "Developer Tools"]
og_image: "images/self_host_kaneo/self_host_kaneo_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KeyJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLCAiQHR5cGUiOiAiSG93VG8iLCAibmFtZSI6ICJIb3cgdG8gU2VsZi1Ib3N0IEthbmVvIGFuZCBFeHBvc2UgSXQgd2l0aCBQaW5nZ3kiLCAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHJ1bm5pbmcgdGhlIEthbmVvIG9wZW4tc291cmNlIHByb2plY3QgbWFuYWdlbWVudCBwbGF0Zm9ybSBsb2NhbGx5IHdpdGggRG9ja2VyIENvbXBvc2UgYW5kIG1ha2luZyBpdCBwdWJsaWNseSBhY2Nlc3NpYmxlIHVzaW5nIFBpbmdneSB0dW5uZWxpbmcuIiwgInRvdGFsVGltZSI6ICJQVDEwTSIsICJzdGVwIjogW3siQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiR2V0IHRoZSBjb25maWcgZmlsZXMiLCAidGV4dCI6ICJDcmVhdGUgYSBwcm9qZWN0IGRpcmVjdG9yeSBhbmQgZG93bmxvYWQgY29tcG9zZS55bWwgYW5kIC5lbnYuc2FtcGxlIGZyb20gdGhlIHVzZWthbmVvL2thbmVvIEdpdEh1YiByZXBvc2l0b3J5LCB0aGVuIHJlbmFtZSAuZW52LnNhbXBsZSB0byAuZW52LiJ9LCB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNvbmZpZ3VyZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMiLCAidGV4dCI6ICJFZGl0IC5lbnY6IHNldCBQT1NUR1JFU19QQVNTV09SRCB0byBhIHN0cm9uZyBwYXNzd29yZCwgZ2VuZXJhdGUgQVVUSF9TRUNSRVQgd2l0aCBvcGVuc3NsIHJhbmQgLWhleCAzMiwgYW5kIHRlbXBvcmFyaWx5IHNldCBLQU5FT19DTElFTlRfVVJMIHRvIGh0dHA6Ly9sb2NhbGhvc3Q6NTE3My4ifSwgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTdGFydCB0aGUgc3RhY2siLCAidGV4dCI6ICJSdW46IGRvY2tlciBjb21wb3NlIHVwIC1kIHRvIHN0YXJ0IFBvc3RncmVTUUwgYW5kIHRoZSBLYW5lbyBhcHAgY29udGFpbmVyLiBLYW5lbyBiZWNvbWVzIGF2YWlsYWJsZSBhdCBodHRwOi8vbG9jYWxob3N0OjUxNzMuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiRXhwb3NlIEthbmVvIHdpdGggUGluZ2d5IiwgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjUxNzMgZnJlZS5waW5nZ3kuaW8gdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBsaWtlIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5LmxpbmsuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiVXBkYXRlIHRoZSBjbGllbnQgVVJMIGFuZCByZXN0YXJ0IiwgInRleHQiOiAiU2V0IEtBTkVPX0NMSUVOVF9VUkwgaW4gLmVudiB0byB0aGUgUGluZ2d5IFVSTCwgdGhlbiBydW4gZG9ja2VyIGNvbXBvc2UgcmVzdGFydCBrYW5lbyBzbyB0aGUgYXBwIHBpY2tzIHVwIHRoZSBuZXcgdmFsdWUuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiV2lyZSB1cCBHaXRIdWIgc2lnbi1pbiAob3B0aW9uYWwpIiwgInRleHQiOiAiSW4geW91ciBHaXRIdWIgT0F1dGggQXBwIHNldHRpbmdzLCBzZXQgdGhlIGF1dGhvcml6YXRpb24gY2FsbGJhY2sgVVJMIHRvIDxLQU5FT19BUElfVVJMPi9hcGkvYXV0aC9jYWxsYmFjay9naXRodWIsIHVzaW5nIHlvdXIgUGluZ2d5IFVSTC4ifV19Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_host_kaneo/self_host_kaneo_banner.webp" "Self-host Kaneo, an open source project management tool, and expose it with Pinggy tunneling" >}}

Linear's Business plan is $16 per user per month, billed annually. Jira's Premium tier runs up to $14.54 per user per month. For a five-person team, that is $960 a year just to move cards between columns. Most of that money buys you nothing you'd notice day to day - the actual feature you use is a kanban board with labels, priorities, and due dates.

<a href="https://github.com/usekaneo/kaneo" target="_blank">Kaneo</a> is the self-hosted answer: an open source project management tool (MIT license, 7,100+ GitHub stars) built around the idea that most PM software is bloated. "All you need. Nothing you don't," as the repo puts it. It runs as a two-container Docker Compose stack, and as of v2.12 it also ships an MCP server, so your AI coding agent can read and update tickets directly instead of you copy-pasting between a terminal and a browser tab.

The catch is the same one every self-hosted tool has: Docker Compose binds Kaneo to `127.0.0.1`, so nobody outside your machine can reach it, and GitHub sign-in needs a real callback URL to redirect to. Pinggy solves both with one command.

{{< llm-context >}}To self-host Kaneo project management with Pinggy - run `docker compose up -d` (starts on port 5173), then in a new terminal run `ssh -p 443 -R0:localhost:5173 free.pinggy.io` to get a public HTTPS URL. Set KANEO_CLIENT_URL in .env to that URL and restart with `docker compose restart kaneo`.{{< /llm-context >}}

{{% tldr %}}
1. **Get the files**: download `compose.yml` and `.env.sample` from the Kaneo repo, rename the latter to `.env`
2. **Edit .env**: set `POSTGRES_PASSWORD`, generate `AUTH_SECRET` with `openssl rand -hex 32`, set `KANEO_CLIENT_URL`
3. **Start**: `docker compose up -d` - Kaneo runs at `http://localhost:5173`
4. **Expose**: `ssh -p 443 -R0:localhost:5173 free.pinggy.io`
5. **Update**: set `KANEO_CLIENT_URL` to the Pinggy URL, then `docker compose restart kaneo`
6. **Optional**: point your GitHub OAuth App's callback URL at `<KANEO_API_URL>/api/auth/callback/github`
{{% /tldr %}}

## What Kaneo actually does

Kaneo organizes work the way Linear or Jira does: workspaces contain projects, projects contain tasks, and tasks move across a kanban board with statuses, priorities, labels, assignees, and due dates. There's also a list view for people who'd rather scan a table than drag cards. Time tracking is built in per task, which is one thing Linear leaves to a third-party integration.

The stack behind it is straightforward: a React and TypeScript frontend, a <a href="https://hono.dev/" target="_blank">Hono</a> backend, and PostgreSQL for storage, all wired together with pnpm and Turborepo in a single monorepo. That simplicity is deliberate - the project's whole pitch is that Jira and ClickUp accumulate features nobody asked for, and every one of those features is a setting screen, a notification type, or a button standing between you and the actual task list.

Where it gets interesting for a solo dev or small team: Kaneo ships outgoing webhooks and integrations for Slack, Discord, Telegram, GitHub, and Gitea, so task events (created, moved, commented) can post into whatever channel your team already lives in. GitHub integration goes further than a webhook - it's a full GitHub App connection that can sync issues both ways, which needs its own App ID, private key, and webhook secret in the environment file.

## An MCP server means your AI agent can use it too

The detail that makes Kaneo worth a second look in 2026 is <a href="https://mcpmarket.com/server/kaneo" target="_blank">kaneo-mcp</a>, a Model Context Protocol server that ships alongside the app. Point a compatible coding agent at it and it can list workspaces, create and update tasks, attach labels, add comments, and search across projects, all through tool calls instead of you narrating status updates by hand.

In practice this turns your task tracker into a shared surface between you and your agent: ask Claude Code or Cursor what's in the backlog, have it file a ticket for the bug it just found, or let it move a card to "In Review" the moment it opens a pull request. The environment file even reserves default OAuth client IDs for `kaneo-cli` and `kaneo-mcp`, so this isn't a bolt-on - it's a first-class way to talk to the app.

## The networking problem Pinggy solves

`docker compose up` starts two containers: PostgreSQL on port 5432, and the Kaneo app itself on port 5173, bound to `127.0.0.1`. That's fine if you're the only person using it from the same machine, but it breaks the moment you want a teammate to log in from their laptop, want to check the board from your phone, or want GitHub to redirect back to your instance after an OAuth sign-in.

The usual fixes are a VPS (a server to patch and pay for), router port forwarding (fragile, and a bad idea to expose a login page to directly), or a tunnel. Pinggy opens an SSH reverse tunnel from your machine out to its edge servers, which then forward inbound HTTPS traffic back down that same connection to your local port 5173. Nothing opens on your router, your home IP stays private, and there's no server to maintain.

{{< image "self_host_kaneo/kaneo_pinggy_architecture.webp" "Architecture diagram showing a browser and an AI coding agent both reaching a self-hosted Kaneo instance through a Pinggy tunnel" >}}

## Setup walkthrough

You need Docker and Docker Compose. This works the same on macOS, Linux, or Windows with WSL2.

**Step 1 - Get the config files**

```bash
mkdir kaneo && cd kaneo
wget -O compose.yml https://raw.githubusercontent.com/usekaneo/kaneo/main/compose.yml
wget -O .env https://raw.githubusercontent.com/usekaneo/kaneo/main/.env.sample
```

**Step 2 - Configure .env**

Open `.env` and set at minimum:

```bash
POSTGRES_DB=kaneo
POSTGRES_USER=kaneo
POSTGRES_PASSWORD=changeme_strong_password

# Generate with: openssl rand -hex 32
AUTH_SECRET=your_32_byte_hex_string_here

# We'll swap this for the Pinggy URL in a moment
KANEO_CLIENT_URL=http://localhost:5173
```

If you skip `AUTH_SECRET`, Kaneo generates a random one at container start, which means every restart logs everyone out. Set it explicitly so sessions survive.

**Step 3 - Start the stack**

```bash
docker compose up -d
```

This pulls `postgres:16-alpine` and `ghcr.io/usekaneo/kaneo:latest`, waits for Postgres to report healthy, then starts the app. Give it under a minute, then open `http://localhost:5173` to confirm you see the Kaneo sign-in screen.

## Exposing Kaneo with Pinggy

Open a second terminal and run:

```bash
ssh -p 443 -R0:localhost:5173 free.pinggy.io
```

Pinggy prints output like:

```
You are not logged in. You will get a temporary URL.
...
http://abc123.a.pinggy.link
https://abc123.a.pinggy.link
```

Copy the `https://` URL and update `.env`:

```bash
KANEO_CLIENT_URL=https://abc123.a.pinggy.link
```

Restart the app container so it picks up the change:

```bash
docker compose restart kaneo
```

Open the Pinggy URL in a browser. You should land on the same sign-in screen, now served over HTTPS from a URL anyone on your team can reach - no VPN, no shared Wi-Fi requirement.

### Persistent URLs

The free Pinggy URL changes every time you reconnect, which is fine for testing but annoying for something a team logs into daily. A <a href="https://pinggy.io/#prices" target="_blank">Pinggy paid plan</a> gives you a fixed subdomain, so you set `KANEO_CLIENT_URL` once and never touch it again. Pinggy's <a href="https://pinggy.io/docs/tunnel_token/" target="_blank">tunnel token</a> also lets you script the tunnel to reconnect automatically after a reboot.

## Wiring up GitHub sign-in

If you want teammates to log in with GitHub instead of email and password, create an OAuth App under **GitHub Settings → Developer settings → OAuth Apps** and set the authorization callback URL to:

```
https://abc123.a.pinggy.link/api/auth/callback/github
```

That path is `<KANEO_API_URL>/api/auth/callback/github` - since `KANEO_API_URL` defaults to `KANEO_CLIENT_URL` plus `/api` when unset, your Pinggy URL covers both. Drop the resulting `GITHUB_OAUTH_CLIENT_ID` and `GITHUB_OAUTH_CLIENT_SECRET` into `.env` and restart. The separate GitHub App integration (for two-way issue sync) is a different set of credentials - `GITHUB_APP_ID`, `GITHUB_PRIVATE_KEY`, `GITHUB_WEBHOOK_SECRET` - and needs the same public URL to receive webhook deliveries.

## Tradeoffs to know

**No built-in HA.** The default Compose file runs Postgres and the app as single containers. There's a commented-out Redis (Valkey) service for pub/sub if you're scaling websockets across multiple app instances, but for one team on one machine you won't need it.

**Free Pinggy URL isn't persistent.** Fine for a demo or a weekend project; get a paid plan or run Kaneo on a small VPS with a real domain if you want a URL that never changes.

**You maintain the upgrade path.** `docker compose pull && docker compose up -d` gets you the latest image, but you're the one running it. Kaneo also sells a hosted Cloud version with a 14-day trial if you'd rather not manage any of this yourself - though at that point you're back to paying someone else, which is the exact tradeoff this guide is trying to avoid.

**Resource use is light.** Postgres plus a Hono API server idles well under what Linear's marketing would have you believe you need a subscription to avoid. A $5-6/month VPS or a spare machine on your home network handles it without strain.

## Wrapping up

Kaneo is a bet that most teams are overpaying for project management software they use ten percent of. The kanban board, labels, and time tracking cover what a small team actually needs, the MCP server means your AI agent can file and move its own tickets, and the whole thing runs on hardware you already own.

The only piece Docker Compose doesn't hand you is a public URL, and that's a one-line `ssh` command away with Pinggy - no VPS, no port forwarding, and no $960-a-year bill for a kanban board.
