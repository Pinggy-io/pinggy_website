---
title: "Self-Host OpenCut: Run Your Own Open-Source CapCut Alternative"
description: "CapCut's 2025 terms now claim a perpetual license to everything you upload, and its Pro plan jumped 177% in a year. OpenCut is the open-source, MIT-licensed answer - here's the backlash behind it and how to self-host it with Docker and reach it from anywhere with Pinggy."
date: 2026-07-16T11:00:00+05:30
lastmod: 2026-07-16T11:00:00+05:30
draft: false
tags: ["OpenCut", "CapCut alternative", "open source video editor", "self-hosted", "Docker", "Pinggy", "video editing", "privacy", "Rust", "Next.js"]
categories: ["Technology", "Self-Hosted", "Open Source"]
og_image: "images/self_host_opencut_capcut_alternative/self_host_opencut_capcut_alternative_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPcGVuQ3V0IGFuZCBBY2Nlc3MgSXQgUmVtb3RlbHkgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gcnVuIHRoZSBPcGVuQ3V0IGNsYXNzaWMgdmlkZW8gZWRpdG9yIHdpdGggRG9ja2VyIENvbXBvc2UgYW5kIGV4cG9zZSBpdCB0byB0aGUgaW50ZXJuZXQgd2l0aCBQaW5nZ3kgZm9yIHJlbW90ZSBhY2Nlc3MgZnJvbSBhbnkgZGV2aWNlLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3Rfb3BlbmN1dF9jYXBjdXRfYWx0ZXJuYXRpdmUvc2VsZl9ob3N0X29wZW5jdXRfY2FwY3V0X2FsdGVybmF0aXZlX2Jhbm5lci53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUMTVNIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsb25lIHRoZSBPcGVuQ3V0IGNsYXNzaWMgcmVwb3NpdG9yeSIsCiAgICAgICJ0ZXh0IjogIkNsb25lIGdpdGh1Yi5jb20vb3BlbmN1dC1hcHAvb3BlbmN1dC1jbGFzc2ljIGFuZCBjb3B5IGFwcHMvd2ViLy5lbnYuZXhhbXBsZSB0byBhcHBzL3dlYi8uZW52LmxvY2FsLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCBQb3N0Z3JlcyBhbmQgUmVkaXMiLAogICAgICAidGV4dCI6ICJSdW4gZG9ja2VyIGNvbXBvc2UgdXAgLWQgZGIgcmVkaXMgc2VydmVybGVzcy1yZWRpcy1odHRwIHRvIHN0YXJ0IHRoZSBkYXRhYmFzZSBhbmQgY2FjaGUgc2VydmljZXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgZGVwZW5kZW5jaWVzIGFuZCBydW4gdGhlIGRldiBzZXJ2ZXIiLAogICAgICAidGV4dCI6ICJSdW4gYnVuIGluc3RhbGwgdGhlbiBidW4gZGV2OndlYi4gVGhlIGVkaXRvciBVSSBpcyBhdmFpbGFibGUgYXQgaHR0cDovL2xvY2FsaG9zdDozMDAwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDcmVhdGUgYSBQaW5nZ3kgdHVubmVsIiwKICAgICAgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgZm9yIHlvdXIgbG9jYWwgT3BlbkN1dCBpbnN0YW5jZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWNjZXNzIE9wZW5DdXQgZnJvbSBhbnl3aGVyZSIsCiAgICAgICJ0ZXh0IjogIlVzZSB0aGUgUGluZ2d5IHB1YmxpYyBVUkwgb24gYW55IGRldmljZSBvciBzaGFyZSBpdCB3aXRoIGNvbGxhYm9yYXRvcnMgdG8gYWNjZXNzIHlvdXIgc2VsZi1ob3N0ZWQgT3BlbkN1dCBlZGl0b3IgcmVtb3RlbHkuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host OpenCut (open-source CapCut alternative) with Pinggy - run `docker compose up -d db redis serverless-redis-http` then `bun install && bun dev:web` (starts on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

{{< image "self_host_opencut_capcut_alternative/self_host_opencut_capcut_alternative_banner.webp" "OpenCut open-source video editor timeline compared to CapCut, self-hosted with Docker and accessed remotely with Pinggy" >}}

CapCut's June 2025 terms of service grant ByteDance an "unconditional, non-exclusive, royalty-free, fully transferable, sub-licensable, perpetual and worldwide license" to anything you upload - including private drafts you never published. Around the same time, the annual Pro plan went from roughly $77/year to $179.99/year, a 177% jump, and features that used to be free - 1080p export, auto captions, watermark-free downloads - moved behind that paywall. A separate lawsuit alleges CapCut collected users' photos, videos, location data, and biometric data without proper consent. None of that is a rumor; it's in the current ToS and the pricing page.

That's the backdrop for {{< link href="https://github.com/opencut-app/opencut" >}}OpenCut{{< /link >}}, a free, MIT-licensed video editor built as a direct response. One developer, who goes by mazeincoding, tweeted the initial concept in June 2025. Thirteen months later the repository has passed 70,000 GitHub stars - a fast climb for an open-source video editor, a category that historically doesn't move that quickly.

OpenCut is also, right now, two different codebases. The version people can actually install and use today is what the project calls "classic." The one getting most of the attention is a ground-up rewrite aimed at a formal plugin API, an MCP server so AI agents can drive the editor, and a single Rust core shared across web, desktop, and mobile. The rewrite is real, but it's early - mostly UI scaffolding so far. This guide covers self-hosting the classic build, which works end to end today, and explains what the rewrite is trying to become.

{{% tldr %}}
1. **Clone the classic app and set up the environment file**
   ```bash
   git clone https://github.com/opencut-app/opencut-classic.git
   cd opencut-classic
   cp apps/web/.env.example apps/web/.env.local
   ```
2. **Start Postgres, Redis, and the Redis HTTP adapter**
   ```bash
   docker compose up -d db redis serverless-redis-http
   ```
3. **Install dependencies and run the dev server**
   ```bash
   bun install
   bun dev:web
   ```
   OpenCut's editor is now at `http://localhost:3000`.
4. **Expose it with Pinggy**
   ```bash
   ssh -p 443 -R0:localhost:3000 free.pinggy.io
   ```
   You get a public HTTPS URL like `https://abc123.a.pinggy.link` - open it on your phone, or send it to a client for review.

**Links:**
- <a href="https://github.com/opencut-app/opencut-classic" target="_blank">OpenCut classic on GitHub</a>
- <a href="https://github.com/opencut-app/opencut" target="_blank">OpenCut rewrite on GitHub</a>
- [Pinggy](https://pinggy.io) for instant public HTTPS tunnels
{{% /tldr %}}

## What's actually driving people away from CapCut

CapCut followed a pattern that's familiar by now: launch free, get to critical mass, then paywall the features people built their workflow around. The timeline reads like a checklist. First, basic transitions became a Pro feature. Then higher export resolutions. Then a forced watermark appeared on projects exported on the free tier. Most recently, the terms of service were rewritten to claim broad, perpetual rights over uploaded content, and reports surfaced that ByteDance uses that content to train models.

The specific numbers matter here, not just the general vibe. Going from $77/year to $179.99/year for the Pro tier is a 177% increase in about twelve months - hard to justify as inflation or added value when the removed features (auto-captions, 1080p, no watermark) used to just work. On Reddit and app store reviews, the most common complaint isn't about a missing feature; it's "this used to be free last month." Combine that with an active privacy lawsuit over photo, video, location, and biometric data collection, and you get exactly the kind of trust erosion that makes an open-source alternative look appealing even to people who normally wouldn't bother self-hosting anything.

## What OpenCut is

OpenCut's classic build is a browser-based, timeline editor: multiple video and audio tracks, drag-to-trim clips, transitions, text overlays, and standard export presets, aimed squarely at the CapCut/short-form-content workflow rather than professional color grading or VFX. The heavy lifting - compositing, effects, encoding - runs through a Rust core compiled to WebAssembly, so a meaningful chunk of the processing happens client-side in your browser rather than round-tripping through a server. The web app around it (built in Next.js) handles project storage, authentication, and autosave.

The pitch is simple: same editing model as CapCut, minus the paywall ratchet and the data-collection terms, because the code is MIT-licensed and you're the one running it.

## Classic vs. the ground-up rewrite

{{< image "self_host_opencut_capcut_alternative/opencut_classic_vs_rewrite.webp" "Diagram comparing OpenCut classic self-hosted stack (Next.js, Postgres, Redis, Docker) against the in-development rewrite (TanStack Start, Cloudflare Workers, Rust core, plugin API, MCP server)" >}}

The `opencut-app/opencut-classic` repository was archived on May 17, 2026. Archived on GitHub means read-only for new pull requests, not deleted - you can still clone it, build it, and run it, which is exactly what this guide does. Active development moved to `opencut-app/opencut`, a rewrite that's what's currently pulling in new GitHub stars.

The rewrite is ambitious on paper: a move to TanStack Start deployed on Cloudflare Workers, a single Rust core meant to power the web app, a native desktop client, and mobile from one codebase, a formal Editor API with a plugin-first architecture, an MCP server so AI coding agents can drive the editor programmatically, and a headless mode for batch rendering without a UI at all. If that lands, it would be a genuinely different kind of tool - not just a free CapCut clone but a scriptable editing engine.

Right now, though, the rewrite repository is mostly UI scaffolding - Shadcn component boilerplate and route structure, no test suite yet, and the team has said it isn't taking outside contributions while the architecture settles. That's a normal, honest place for an ambitious rewrite to be thirteen months into a project's life. It also means it's not what you want to self-host if your goal is to actually edit a video this week.

## Self-hosting the classic build with Docker

### Prerequisites

- Docker and Docker Compose
- <a href="https://bun.sh/" target="_blank">Bun</a> (the classic app's package manager and dev server)
- Git

### Step 1: Clone the repo and set up the environment file

```bash
git clone https://github.com/opencut-app/opencut-classic.git
cd opencut-classic
cp apps/web/.env.example apps/web/.env.local
```

The example file already points at the Docker Compose defaults - local Postgres on port 5432, a Redis HTTP adapter on port 8079 - so you don't need to edit anything to get a working local instance. Two variables are optional third-party integrations: `FREESOUND_CLIENT_ID`/`FREESOUND_API_KEY` (stock audio search) and `MARBLE_WORKSPACE_KEY` (used for OpenCut's own CMS-driven content). Leave them blank if you just want the editor working; only the audio search feature depends on Freesound.

### Step 2: Start Postgres, Redis, and the Redis HTTP adapter

```bash
docker compose up -d db redis serverless-redis-http
```

This starts three containers: `postgres:17` for projects and auth, `redis:7-alpine` for caching and sessions, and `serverless-redis-http`, a small adapter that exposes Redis over HTTP. That last one exists because the app talks to Redis using Upstash's REST client library - the adapter just makes local Redis speak that same HTTP protocol instead of the raw Redis wire protocol.

### Step 3: Install dependencies and run the dev server

```bash
bun install
bun dev:web
```

The editor is now running at `http://localhost:3000`. Open it, create a project, and drop in a video file to confirm the timeline and preview work before moving on.

If you'd rather skip the `bun dev` workflow entirely and run a production build, `docker compose up -d` (no service names) builds and starts the full stack, including the web app itself, on `http://localhost:3100`.

## Accessing your self-hosted editor from anywhere with Pinggy

A video editor running on `localhost:3000` is only reachable from that one machine. That's fine until you want to:

- Pull up a project on your phone or tablet to check how a cut looks outside your desktop monitor
- Share a work-in-progress edit with a client or collaborator without exporting a file and uploading it somewhere
- Keep editing from a different computer without setting up the whole Docker stack again

[Pinggy](https://pinggy.io) solves this with one SSH command - no signup, no install, no reverse-proxy configuration.

### Creating the tunnel

In a new terminal, with OpenCut still running, run:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

Pinggy prints a public HTTPS URL, something like `https://rAnDoMsTrInG.a.pinggy.link`. Open that URL on any device and you're looking at the same editor, same project, same local Postgres data - just reachable over the internet.

### Adding password protection

If you're sending the link to a client or teammate rather than just using it yourself, put HTTP Basic Auth in front of it at the tunnel layer:

```bash
ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:youruser:yourpassword
```

Anyone who opens the URL gets a browser password prompt before reaching the editor.

### Getting a stable URL

The free tier assigns a new random subdomain each time you start a tunnel, which is fine for a one-off review link but annoying if you want to bookmark the same address every session. [Pinggy's paid tier](https://pinggy.io/#prices) gives you a fixed custom subdomain that stays the same across restarts.

## Honest tradeoffs

**The classic app is archived, not maintained.** You get the code as it stood in May 2026. Security patches or new features from the OpenCut team will land in the rewrite, not here. For a self-hosted tool that isn't exposed to the open internet by default, that's a manageable risk, but it's worth knowing going in.

**The rewrite isn't ready to use yet.** If you were hoping to self-host the version with the plugin API and MCP server, that doesn't exist as a working editor today - it's scaffolding. Watch the repository if that roadmap is what interests you.

**Docker plus Bun is real setup friction.** CapCut is an app-store install. This is `git clone`, three containers, and a package manager most people haven't used before. If you just need to trim one clip today, that tradeoff isn't worth it - use whatever's fastest. It becomes worth it the moment you're doing this regularly and want to stop feeding files to ByteDance.

**Feature parity isn't 1:1.** CapCut has years of trend-driven templates, effects packs, and a huge library of licensed music and sound effects. OpenCut's classic build covers the core timeline-editing workflow well; it doesn't have that same breadth of ready-made assets. If your work depends on trending effect presets specifically, that gap is real.

**Performance depends on your hardware, not a server's.** Because compositing runs through WASM in your browser, a heavy multi-track project on a low-power laptop will feel slower than the same project on a desktop with a real GPU. There's no cloud render farm behind this - it's your machine doing the work, which is also exactly the point.

## Why this is worth paying attention to

OpenCut isn't really a story about video editing specifically. It's the same story as [open-source alternatives to Google's AI tools](/blog/self_host_open_notebook_notebooklm_alternative/) or self-hosted chat replacements for hosted SaaS: a free consumer tool builds a user base, then the incentives push toward monetizing that base harder than the product improves, and a chunk of that user base goes looking for something they control. What makes OpenCut notable is how fast it happened - a single developer's side project passed 70,000 stars in about a year, mostly on the strength of "CapCut, but you own it."

Whether the in-progress rewrite delivers on the plugin API and AI-agent integration is a separate bet from whether the classic app is useful today. It is. Clone it, run the three commands above, and you have a working, private video editor that never sends your footage anywhere - reachable from your phone the moment you add one more command with Pinggy.
