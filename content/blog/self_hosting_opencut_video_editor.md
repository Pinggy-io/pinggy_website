---
title: "Self-Hosting OpenCut, the Open-Source CapCut Alternative, and Sharing It with Pinggy"
description: "OpenCut is a free, MIT-licensed CapCut alternative where your footage never leaves your machine. Here's how to self-host it with Docker and reach it from anywhere using a Pinggy tunnel."
date: 2026-07-15T11:00:00+05:30
draft: false
tags: ["OpenCut", "CapCut alternative", "open source video editor", "self-hosted", "Pinggy", "Docker", "video editing", "privacy", "MIT license"]
categories: ["Technology", "Developer Tools", "Open Source"]
og_image: "images/self_hosting_opencut_video_editor/opencut_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPcGVuQ3V0IGFuZCBBY2Nlc3MgSXQgUmVtb3RlbHkgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJSdW4gdGhlIG9wZW4tc291cmNlIE9wZW5DdXQgdmlkZW8gZWRpdG9yIGxvY2FsbHkgd2l0aCBEb2NrZXIgQ29tcG9zZSwgdGhlbiBleHBvc2UgaXQgdG8gdGhlIGludGVybmV0IHdpdGggYSBQaW5nZ3kgU1NIIHR1bm5lbCBzbyB5b3UgY2FuIGVkaXQgb3Igc2hhcmUgaXQgZnJvbSBhbnl3aGVyZS4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiR2V0IHRoZSBPcGVuQ3V0IHNvdXJjZSIsCiAgICAgICJ0ZXh0IjogIkNsb25lIHRoZSBvcGVuY3V0LWNsYXNzaWMgcmVwb3NpdG9yeSwgd2hpY2ggaXMgdGhlIGNvZGViYXNlIGN1cnJlbnRseSBydW5uaW5nIHRoZSBsaXZlIG9wZW5jdXQuYXBwIHByb2R1Y3Rpb24gc2l0ZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29uZmlndXJlIGVudmlyb25tZW50IHZhcmlhYmxlcyIsCiAgICAgICJ0ZXh0IjogIkNvcHkgYXBwcy93ZWIvLmVudi5leGFtcGxlIHRvIGFwcHMvd2ViLy5lbnYubG9jYWwuIFRoZSBkZWZhdWx0cyBhbHJlYWR5IG1hdGNoIHRoZSBidW5kbGVkIERvY2tlciBDb21wb3NlIHNlcnZpY2VzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCBPcGVuQ3V0IHdpdGggRG9ja2VyIENvbXBvc2UiLAogICAgICAidGV4dCI6ICJSdW4gZG9ja2VyIGNvbXBvc2UgdXAgLWQgdG8gc3RhcnQgdGhlIHdlYiBhcHAsIFBvc3RncmVzLCBSZWRpcywgYW5kIHRoZSBzZXJ2ZXJsZXNzIFJlZGlzIEhUVFAgcHJveHkgdG9nZXRoZXIuIE9wZW5DdXQgYmVjb21lcyBhdmFpbGFibGUgYXQgaHR0cDovL2xvY2FsaG9zdDozMTAwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIFBpbmdneSBhbmQgb3BlbiBhIHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MzEwMCBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIGZvcndhcmRpbmcgdG8geW91ciBsb2NhbCBPcGVuQ3V0IGluc3RhbmNlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBY2Nlc3MgT3BlbkN1dCBmcm9tIGFueXdoZXJlIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgUGluZ2d5IEhUVFBTIFVSTCBvbiBhbnkgZGV2aWNlIHRvIHJlYWNoIHlvdXIgc2VsZi1ob3N0ZWQgZWRpdG9yLCBhbmQgb3B0aW9uYWxseSBhZGQgYmFzaWMtYXV0aCBwcm90ZWN0aW9uIGJlZm9yZSBzaGFyaW5nIHRoZSBsaW5rLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_opencut_video_editor/opencut_pinggy_banner.webp" "Self-hosting OpenCut, the open-source CapCut alternative, and exposing it with a Pinggy tunnel" >}}

OpenCut is a free, timeline-based video editor that does the one thing CapCut won't: it processes your footage entirely on your own machine, ships no watermark, and asks for no subscription. It's MIT-licensed, which means nobody can quietly turn it into a paid product out from under you. Since it first showed up as a browser-only editor in mid-2025, it has picked up over 70,000 stars on GitHub, and the team is now in the middle of tearing the whole thing down and rebuilding it as something considerably more ambitious.

That rebuild is worth a minute of context before we get to the actual point of this post, which is running OpenCut yourself and reaching it from anywhere with a Pinggy tunnel.

{{% tldr %}}
1. **Get OpenCut running locally with Docker Compose:**
   ```bash
   git clone https://github.com/opencut-app/opencut-classic.git
   cd opencut-classic
   cp apps/web/.env.example apps/web/.env.local
   docker compose up -d
   ```
   OpenCut is now running at `http://localhost:3100`.

2. **Expose it with Pinggy:**
   ```bash
   ssh -p 443 -R0:localhost:3100 free.pinggy.io
   ```
   You get a public HTTPS URL like `https://rnd-opencut.a.pinggy.link` that forwards straight to your local instance.

3. **Lock it down before sharing (optional):**
   ```bash
   ssh -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password
   ```
{{% /tldr %}}

{{< llm-context >}}To self-host OpenCut and access it remotely with Pinggy - clone opencut-classic, run `cp apps/web/.env.example apps/web/.env.local` then `docker compose up -d` (starts on port 3100), then in a new terminal run `ssh -p 443 -R0:localhost:3100 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

## What OpenCut actually is

{{< link href="https://github.com/opencut-app/opencut" >}}OpenCut{{< /link >}} is a timeline video editor: multi-track editing, real-time preview, trimming, transitions, the stuff you'd expect from CapCut or a lightweight Premiere. The pitch that got it noticed wasn't the feature list, though, it was the license. CapCut is free until it isn't - watermarks on export, features locked behind a subscription, and your footage routed through ByteDance's servers along the way. OpenCut runs the encoding and compositing locally and is MIT-licensed end to end, so there's no tier to hit and no company that can change the terms later.

That pitch worked. The project crossed 70,000 GitHub stars, which is a genuinely large number for a video editor that started as a weekend-scale open source project a year ago.

## The rewrite: throwing away a 70k-star codebase on purpose

On May 27, 2026, the OpenCut team announced they were rebuilding the editor from the ground up, and it's a bigger call than it sounds. The original app was a TypeScript video editor running entirely in the browser. That was fine when the browser was the only target, but the team wants OpenCut on desktop and mobile too, and dragging a browser-bound TypeScript engine onto three more platforms means either forking the logic per platform or starting over with something portable.

They chose starting over. The new architecture centers on a platform-agnostic Rust core, handling GPU compositing, effects, and masking, wrapped by thin UI layers: Next.js for web, a native GPUI app for desktop, and mobile clients down the line, all sharing the same engine instead of three separate reimplementations drifting apart. On top of that core, the roadmap adds four things the browser-only version structurally couldn't do: a plugin system, a headless mode for batch rendering and automation, an in-editor scripting tab, and an MCP server so AI agents can drive the editor programmatically. That last one is the interesting bit if you've been paying attention to how much tooling is quietly growing an MCP server lately, it's the difference between "an app you click around in" and "an app another program can operate."

The rewrite lives at `new.opencut.app` and is genuinely early. As of this writing the desktop shell is, by the team's own description, just a window that opens, and the web build is the most finished surface. The repository also isn't taking outside pull requests right now, specifically because the architecture is still moving. None of that is a criticism, it's just an honest snapshot of a project mid-rebuild, and worth knowing before you go looking for a `docker-compose.yml` in the new repo and can't find one.

## Why the self-hosting story runs through the "classic" codebase

Here's the part that matters if you actually want to run OpenCut today: the original browser-only codebase, now archived at `opencut-app/opencut-classic` as of May 17, 2026, is what still powers the live production site at `opencut.app`. Archived on GitHub means read-only, no more pull requests, no further commits. It does not mean broken. It's a frozen, working, MIT-licensed Next.js app with a documented Docker Compose setup, and it's the practical way to get a self-hosted OpenCut instance running while the rewrite catches up.

That's a reasonable trade for a self-hosting guide: a snapshot that works today over a moving target that doesn't have a production deploy path yet. Just don't expect security patches or new features to land on it, since development attention has fully moved to the rewrite.

## Why self-host it at all

The honest answer is privacy and control, the same reasons you'd self-host anything. `opencut.app` is free to use as-is, so self-hosting isn't about unlocking a paywalled feature. What it buys you is footage that never touches a server you don't control, a version you can pin instead of one that changes under you, and the ability to point it at your own object storage or auth provider instead of the defaults. If you're editing anything under an NDA, or just don't want raw client footage passing through a server you don't operate, running your own instance removes that question entirely.

## Prerequisites

- **Docker** and **Docker Compose** (the production path needs nothing else)
- **Git**, to clone the repository
- An **SSH client** for the Pinggy tunnel, already installed on macOS, Linux, and Windows
- Optionally, **Bun**, only if you want to run the app outside Docker for local development

## Step 1: Get the OpenCut source

```bash
git clone https://github.com/opencut-app/opencut-classic.git
cd opencut-classic
```

## Step 2: Configure environment variables

```bash
cp apps/web/.env.example apps/web/.env.local
```

The example file already has sensible defaults for every service in the bundled `docker-compose.yaml` - database URL, Redis endpoint, auth secret - all pointed at the containers you're about to start. You don't need to edit anything to get a working local instance; you'd only touch this file to plug in real credentials for the optional Freesound audio integration or a Marble CMS workspace.

## Step 3: Start OpenCut with Docker Compose

For a complete, self-contained production setup:

```bash
docker compose up -d
```

This brings up four containers together: the Next.js web app, PostgreSQL for persistence, Redis for caching, and a serverless Redis HTTP proxy the app talks to internally. Once everything is healthy, OpenCut is live at:

```
http://localhost:3100
```

If you'd rather run the web app outside Docker while you poke around (faster reloads, easier to read logs), start only the backing services and run the app with Bun instead:

```bash
docker compose up -d db redis serverless-redis-http
bun install
bun dev:web
```

That path serves the app at `http://localhost:3000` instead of `3100` - keep the port in mind for the tunnel command in the next step, since it changes depending on which path you took.

## Step 4: Expose it with Pinggy

OpenCut is running, but only on your machine. To reach it from a phone, a client's laptop, or literally anywhere else, you need a public URL pointing at your local container. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} does this with one SSH command and no client install, since every OS already ships an SSH client.

```bash
ssh -p 443 -R0:localhost:3100 free.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3100 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3100 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3100 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3100 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3100 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3100 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3100 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3100 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3100 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints back a public HTTP and HTTPS URL forwarding to your container:

{{< image "self_hosting_opencut_video_editor/opencut_pinggy_terminal.webp" "Terminal output showing OpenCut started with Docker Compose and exposed publicly through a Pinggy SSH tunnel" >}}

Open the HTTPS URL on any device, your phone, a tablet, a teammate's laptop, and you're looking at your own OpenCut instance, timeline and all, with nothing installed on the other end.

### Add password protection before sharing the link

A random `.pinggy.link` URL isn't guessable, but if you're handing it to a client for a review pass or leaving it open for more than a few minutes, put a login in front of it:

```bash
ssh -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password
```

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:3100 -t free.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

Anyone opening the link now hits a browser auth prompt before they see your editor. No extra config on the OpenCut side, no reverse proxy to set up - that layer lives entirely in the tunnel command.

## A couple of practical uses for this setup

The obvious one is cross-device editing: OpenCut's project state lives in your Postgres container, not in browser storage, so opening the Pinggy URL from a laptop, a tablet, or a different room picks up exactly where you left off on the machine actually running the container.

The less obvious one is client review. Instead of exporting a rough cut, uploading it somewhere, and waiting on a download link, you can point a client straight at your running timeline through a password-protected Pinggy URL and let them scrub through it live. It's a small thing, but it cuts out an entire upload-download cycle for feedback that would otherwise take an email thread.

And looking slightly ahead: once headless mode and the MCP server land in the rewrite, the same tunnel setup stops being just a way to view a UI remotely. A publicly reachable, headless OpenCut instance is exactly what you'd point a batch-rendering job or an AI agent at, render requests in, finished clips out, no browser tab required. That's not available yet, but it's the direction the architecture is visibly heading, and the Pinggy setup here doesn't change when that lands.

## Conclusion

OpenCut is in an unusual spot for an open source project: the version most people are using is a frozen snapshot, and the actively developed version isn't quite ready to replace it. That's not a flaw so much as what a serious rewrite looks like from the outside while it's happening. In the meantime, the classic codebase is a real, working, MIT-licensed video editor you can run in one `docker compose up -d`, and pairing it with a Pinggy tunnel takes it from "something running on my laptop" to something you can hand a URL to and walk away from. When the rewrite lands with headless rendering and an MCP server, the same tunnel command is still the way you'd reach it, so this setup isn't wasted effort once that day comes.
