---
title: "OpenCut Is Rebuilding Itself From Scratch, and Still Self-Hostable Today"
description: "OpenCut, the open-source CapCut alternative with 75,000+ GitHub stars, is being rebuilt around a shared Rust core. Here's what's changing, and how to self-host the current editor and share it with Pinggy."
date: 2026-07-19T11:20:00+05:30
draft: false
tags: ["OpenCut", "CapCut alternative", "open source video editor", "self-hosted", "Pinggy", "Rust", "Next.js", "MCP server"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/opencut_capcut_alternative_rewrite_pinggy/opencut_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPcGVuQ3V0IGFuZCBTaGFyZSBJdCB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBydW5uaW5nIHRoZSBPcGVuQ3V0IG9wZW4tc291cmNlIHZpZGVvIGVkaXRvciBsb2NhbGx5IHdpdGggRG9ja2VyIGFuZCBleHBvc2luZyBpdCB0byB0aGUgaW50ZXJuZXQgdXNpbmcgUGluZ2d5LiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbG9uZSBPcGVuQ3V0IGNsYXNzaWMgYW5kIHNldCB1cCB0aGUgZW52aXJvbm1lbnQgZmlsZSIsCiAgICAgICJ0ZXh0IjogIkNsb25lIHRoZSByZXBvc2l0b3J5IHdpdGggZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9PcGVuQ3V0LWFwcC9vcGVuY3V0LWNsYXNzaWMsIHRoZW4gY29weSBhcHBzL3dlYi8uZW52LmV4YW1wbGUgdG8gYXBwcy93ZWIvLmVudi5sb2NhbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIGRhdGFiYXNlIGFuZCBSZWRpcyBjb250YWluZXJzIiwKICAgICAgInRleHQiOiAiUnVuIGRvY2tlciBjb21wb3NlIHVwIC1kIGRiIHJlZGlzIHNlcnZlcmxlc3MtcmVkaXMtaHR0cCB0byBicmluZyB1cCBQb3N0Z3JlcyBhbmQgUmVkaXMgaW4gdGhlIGJhY2tncm91bmQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgZGVwZW5kZW5jaWVzIGFuZCBzdGFydCB0aGUgZGV2IHNlcnZlciIsCiAgICAgICJ0ZXh0IjogIlJ1biBidW4gaW5zdGFsbCBmb2xsb3dlZCBieSBidW4gZGV2OndlYi4gVGhpcyBzdGFydHMgdGhlIE5leHQuanMgZWRpdG9yIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHBvcnQgMzAwMCB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIkluIGEgbmV3IHRlcm1pbmFsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgZnJlZS5waW5nZ3kuaW8uIFBpbmdneSBwcmludHMgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgdHVubmVscyBkaXJlY3RseSB0byB5b3VyIGxvY2FsIE9wZW5DdXQgaW5zdGFuY2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk9wZW4gdGhlIHB1YmxpYyBVUkwgZnJvbSBhbnkgZGV2aWNlIiwKICAgICAgInRleHQiOiAiVmlzaXQgdGhlIGdlbmVyYXRlZCBwaW5nZ3kubGluayBVUkwgZnJvbSBhIHBob25lLCB0YWJsZXQsIG9yIGEgY29sbGFib3JhdG9yJ3MgYnJvd3NlciB0byB2aWV3IGFuZCB1c2UgdGhlIHNhbWUgZWRpdG9yIHJ1bm5pbmcgb24geW91ciBtYWNoaW5lLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBZGQgYmFzaWMgYXV0aCBmb3IgYSBzaGFyZWQgbGluayIsCiAgICAgICJ0ZXh0IjogIkFwcGVuZCAtdCBcImI6cmV2aWV3ZXI6dGVtcG9yYXJ5cGFzc1wiIHRvIHRoZSBTU0ggY29tbWFuZCBzbyB0aGUgdHVubmVsIHJlcXVpcmVzIGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGJlZm9yZSBhbnlvbmUgY2FuIG9wZW4gdGhlIGVkaXRvci4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "opencut_capcut_alternative_rewrite_pinggy/opencut_banner.webp" "Banner reading OpenCut Is Rebuilding Itself From Scratch, showing a mock video editing timeline with video, text, and audio tracks and the command to self-host it and tunnel it with Pinggy" >}}

OpenCut has quietly become one of the most-starred video editors on GitHub, past 75,000 stars for a browser-based, MIT-licensed alternative to CapCut. On May 27, 2026, the small team behind it announced something that looks strange for a project with that kind of momentum: they are throwing out most of the current architecture and rebuilding it from scratch, around a shared Rust core instead of a browser-only TypeScript engine.

That is not a routine version bump. It changes what OpenCut is allowed to become, and it is worth understanding both what is changing and what still works exactly the way it did last month, because the editor you can self-host today is not going away while the rewrite catches up.

{{% tldr %}}
1. **What's happening**: OpenCut, an open-source, MIT-licensed CapCut alternative, is being rebuilt from the ground up around a shared Rust core so the same engine can power web, desktop, Android, and iOS.
2. **What's coming**: a formal Editor API, a first-party plugin system, headless batch rendering, an in-editor scripting tab, and an MCP server so AI agents can drive the editor directly.
3. **What still works today**: the "classic" Next.js editor still powers <a href="https://opencut.app" target="_blank">opencut.app</a> and is fully self-hostable, watermark-free, and subscription-free.
4. **Self-host it**: `git clone https://github.com/OpenCut-app/opencut-classic && cd opencut-classic && cp apps/web/.env.example apps/web/.env.local && docker compose up -d db redis serverless-redis-http && bun install && bun dev:web` starts the editor on `http://localhost:3000`.
5. **Share it**: `ssh -p 443 -R0:localhost:3000 free.pinggy.io` turns that local editor into a public HTTPS link in seconds, no deployment required.
6. **Lock it down**: add `-t "b:reviewer:temporarypass"` to the SSH command before sending the link to anyone outside your own devices.
{{% /tldr %}}

{{< llm-context >}}To self-host OpenCut and share it with Pinggy - clone and run OpenCut classic (`git clone https://github.com/OpenCut-app/opencut-classic && cd opencut-classic && cp apps/web/.env.example apps/web/.env.local && docker compose up -d db redis serverless-redis-http && bun install && bun dev:web`, starts on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL for the running editor.{{< /llm-context >}}

## What OpenCut actually is

<a href="https://github.com/OpenCut-app/OpenCut" target="_blank">OpenCut</a> is a timeline-based video editor that runs in the browser: multi-track cutting, trimming, and arranging of video, audio, and text layers, with real-time preview and frame-level precision. The pitch is the same one that keeps showing up across this whole wave of open-source "alternative to X" projects, but it lands especially well for video: your footage never leaves your device, exports come out with no watermark, and there is no subscription tier gating basic editing the way CapCut's Pro plan does.

Technically, the classic version (the one still running today) is a fairly ordinary self-hosted web stack: a Next.js and TypeScript frontend, Postgres for project data, Redis for caching, and a Rust/WASM module handling the GPU-accelerated compositor and effects work that would be too slow in plain JavaScript. Exports go through FFmpeg compiled to WebAssembly, so encoding happens client-side in the browser tab, not on a server somewhere. It is MIT licensed, so you can self-host it, fork it, or embed it in a commercial product without owing anyone a pull request.

## Why rebuild something that is already working

The reasoning the team gave, laid out in their <a href="https://mer.vin/2026/07/opencut-explained-open-source-capcut-alternative-classic-editor-vs-ground-up-rewrite/" target="_blank">rewrite announcement</a>, is straightforward: a browser-only TypeScript engine was a fine choice when web was the only target platform. It stops being a fine choice the moment you want native desktop, Android, and iOS apps that share the same editing engine instead of three separate reimplementations drifting apart over time. So the new architecture puts a single Rust core underneath everything, with each platform's app reduced to a thin UI layer wrapped around that shared engine.

That core also unlocks four things the classic architecture could not really support:

- **A plugin system** with a formal Editor API, so third-party extensions can hook into the timeline instead of forking the whole app.
- **Headless mode**, for batch rendering and automated exports without a browser tab open at all.
- **An in-editor scripting tab**, for programmatic edits.
- **An MCP server**, so an AI agent can drive the editor directly instead of a human dragging clips on a timeline.

That last one is worth pausing on. MCP servers are how AI coding agents read a codebase or query a database; an MCP server for a video editor means an agent could plausibly cut a rough edit, apply color correction, or batch-export a set of clips as a tool call, the same way it currently calls a shell or a file system. Whether that turns out to be genuinely useful or mostly a checkbox for the "AI-native" era is an open question, but the plumbing to try it is now part of the roadmap. fal.ai, which supplies generative image, video, and audio models, sponsors the project, which tells you roughly which direction that plumbing is pointed.

## Two versions exist right now, and that is fine

If you go looking for OpenCut today, you will land in the middle of the transition, so it is worth being precise about what is where:

- **The classic editor** lives in <a href="https://github.com/OpenCut-app/opencut-classic" target="_blank">opencut-app/opencut-classic</a>. GitHub shows it as archived as of May 17, 2026, but "archived" here means "not accepting new commits," not "broken." It is still what runs <a href="https://opencut.app" target="_blank">opencut.app</a>, still full-featured, and still the version you would actually self-host for real editing work today.
- **The rewrite** lives at <a href="https://github.com/OpenCut-app/OpenCut" target="_blank">opencut-app/OpenCut</a> and has a live preview at <a href="https://new.opencut.app" target="_blank">new.opencut.app</a>. It is early: the team is not accepting outside contributions yet while the core architecture settles, and the web target is the only one getting active attention right now, with desktop and mobile following once the engine stabilizes.

If you clone the new repo to poke around, the setup is different enough to be worth noting: it uses <a href="https://moonrepo.dev/proto" target="_blank">proto</a> as a toolchain manager and <a href="https://moonrepo.dev" target="_blank">moon</a> to run tasks instead of a plain `bun dev`. `proto use` installs the pinned toolchain, then `moon run web:dev` starts the web app on `localhost:5173` and `moon run api:dev` starts the API on `localhost:8787`. It is a preview of where the project is going, not something you would point real editing work at yet.

For everything below, "OpenCut" means the classic editor, because that is the version that is actually done and actually yours to run.

## Self-hosting the editor that works today

The prerequisites are <a href="https://bun.sh" target="_blank">Bun</a> and Docker (Docker is technically optional, but skipping it means standing up your own Postgres and Redis by hand, so just use it). From a clean checkout:

```bash
git clone https://github.com/OpenCut-app/opencut-classic
cd opencut-classic
cp apps/web/.env.example apps/web/.env.local
docker compose up -d db redis serverless-redis-http
bun install
bun dev:web
```

The `.env.example` file already matches the Docker Compose service names and ports, so there is nothing to edit for a basic local setup. `bun dev:web` starts the Next.js app with hot reload on `http://localhost:3000`. If you want a production-style build instead of dev mode, `docker compose up -d` on its own builds and runs the entire stack, landing the app on `http://localhost:3100` instead.

If you plan to touch the Rust/WASM compositor code, that is a separate track: install the Rust toolchain via <a href="https://rustup.rs" target="_blank">rustup</a>, then `cargo install wasm-pack cargo-watch`, `bun run build:wasm`, link the built package into `apps/web`, and run `bun dev:wasm`. Most people editing video, rather than editing the editor, will never need this.

## Sharing your local instance with Pinggy

A self-hosted editor on `localhost:3000` is exactly as useful as the number of people who can reach `localhost:3000`, which by default is one: you. That is fine for solo editing, but it breaks down the moment you want a second opinion on a cut, want a client to review a rough edit before you spend more time on it, or just want to check how the timeline behaves on an actual phone screen instead of squeezed into browser devtools.

Leave OpenCut running in its terminal, open a second one, and run:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

<a href="https://pinggy.io" target="_blank">Pinggy</a> prints back a public HTTPS URL, something like `https://abc123.a.pinggy.link`. Open it from any device and you get the same OpenCut interface that is running on `localhost:3000`, timeline and all, reachable from your phone's data connection or a collaborator's browser on another network entirely. The editor, the Postgres project data, and the WASM compositor all stay on your machine; the tunnel just carries the browser traffic in and out, exactly like it would for any other local dev server.

Because a bare tunnel URL is enough for anyone who finds it to open your project, add HTTP basic auth for anything you are actually sending to another person:

```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io -t "b:reviewer:temporarypass"
```

That is enough friction to stop a link from being casually reshared or crawled while you are using it. It is not a real access-control system, so treat it the way you would a screen-share link: fine for one specific person for one specific session, not something you leave running unattended for a week.

## What this is and is not good for

**Good for:** sending a client or teammate a live link to review an in-progress edit without deploying anywhere, checking your timeline's responsive behavior on a real phone browser, or demoing OpenCut itself to someone without walking them through a local setup first.

**Not good for:** a permanent multi-user editing workflow. OpenCut's self-hosted stack is built around a single local Postgres instance with no per-user access model beyond whatever you bolt on with basic auth, so treat the tunnel as a temporary bridge for one reviewer at a time, not a substitute for actually deploying a shared instance if you have a team that needs ongoing access.

## Conclusion

OpenCut's rewrite is a bet that a video editor is more useful as a multi-platform, scriptable, agent-addressable engine than as a well-polished single-purpose web app. That bet will take a while to pay off, and until it does, the classic editor keeps doing the job it has always done: a real, watermark-free, subscription-free video editor you can run entirely on your own machine. The only thing missing from that setup was an easy way to let someone else see it, and a single SSH command closes that gap for exactly as long as you need it open.
