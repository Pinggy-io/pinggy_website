---
title: "Self-Host Project AIRI: Run Your Own AI VTuber Companion"
description: "Project AIRI is an open-source, self-hosted AI companion with realtime voice chat, Live2D/VRM avatars, and support for local LLMs. Here's how to run it yourself and reach it from anywhere with Pinggy."
date: 2026-07-29T11:00:00+05:30
draft: false
tags: ["Project AIRI", "AI VTuber", "self-hosted", "Neuro-sama", "Pinggy", "open source", "AI companion", "Live2D"]
categories: ["Technology", "AI Tools", "Self-Hosted"]
og_image: "images/self_host_project_airi_ai_vtuber_companion/self_host_project_airi_ai_vtuber_companion_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBQcm9qZWN0IEFJUkkgYW5kIEFjY2VzcyBJdCBSZW1vdGVseSB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBydW4gdGhlIG9wZW4tc291cmNlIFByb2plY3QgQUlSSSBBSSBjb21wYW5pb24gbG9jYWxseSBhbmQgZXhwb3NlIGl0IHRvIHRoZSBpbnRlcm5ldCB3aXRoIFBpbmdneSBmb3IgcmVtb3RlIGFjY2Vzcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2VsZl9ob3N0X3Byb2plY3RfYWlyaV9haV92dHViZXJfY29tcGFuaW9uL3NlbGZfaG9zdF9wcm9qZWN0X2FpcmlfYWlfdnR1YmVyX2NvbXBhbmlvbl9iYW5uZXIud2VicCIsCiAgInRvdGFsVGltZSI6ICJQVDE1TSIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbG9uZSBhbmQgaW5zdGFsbCBQcm9qZWN0IEFJUkkiLAogICAgICAidGV4dCI6ICJDbG9uZSBnaXRodWIuY29tL21vZXJ1LWFpL2FpcmkgYW5kIHJ1biBwbnBtIGkgdG8gaW5zdGFsbCBkZXBlbmRlbmNpZXMgdXNpbmcgcG5wbUAxMC4zMy4wIG9yIG5ld2VyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgd2ViIHN0YWdlIiwKICAgICAgInRleHQiOiAiUnVuIHBucG0gZGV2IHRvIHN0YXJ0IHRoZSBTdGFnZSBXZWIgZGV2ZWxvcG1lbnQgc2VydmVyLiBUaGUgVUkgaXMgYXZhaWxhYmxlIGF0IGxvY2FsaG9zdDo1MTczLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25uZWN0IGFuIExMTSBwcm92aWRlciIsCiAgICAgICJ0ZXh0IjogIk9wZW4gU2V0dGluZ3MgaW4gdGhlIFVJIGFuZCBhZGQgY3JlZGVudGlhbHMgZm9yIGFuIExMTSBwcm92aWRlciwgb3IgcG9pbnQgaXQgYXQgYSBsb2NhbCBPbGxhbWEgc2VydmVyIGZvciBmdWxseSBvZmZsaW5lIHVzZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIGEgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NTE3MyBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIGZvciB5b3VyIEFJUkkgaW5zdGFuY2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoYXQgd2l0aCB5b3VyIGNvbXBhbmlvbiBmcm9tIGFueXdoZXJlIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgUGluZ2d5IFVSTCBvbiB5b3VyIHBob25lIG9yIGFueSBvdGhlciBkZXZpY2UgdG8gdGFsayB0byB5b3VyIHNlbGYtaG9zdGVkIEFJIGNvbXBhbmlvbiBvdmVyIHZvaWNlIGNoYXQsIGZyb20gb3V0c2lkZSB5b3VyIGhvbWUgbmV0d29yay4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host Project AIRI (open-source AI VTuber companion) with Pinggy - clone github.com/moeru-ai/airi, run `pnpm i && pnpm dev` (starts the web UI on port 5173), then in a new terminal run `ssh -p 443 -R0:localhost:5173 free.pinggy.io` to get a public HTTPS URL you can use from your phone.{{< /llm-context >}}

{{< image "self_host_project_airi_ai_vtuber_companion/self_host_project_airi_ai_vtuber_companion_banner.webp" "Conceptual illustration of a self-hosted AI companion web app running on localhost:5173, with a terminal command tunneling it through Pinggy to a public HTTPS link" >}}

As of January 2026, the most-subscribed streamer on Twitch is not a person. It is <a href="https://www.twitch.tv/vedal987" target="_blank">Neuro-sama</a>, a chaotic, singing, osu!-playing AI VTuber built by a solo programmer named Vedal, and she has more subscribers than every human creator on the platform. That fact alone has been enough to send a steady trickle of developers down the rabbit hole of "wait, can I build my own version of this?"

The honest answer used to be: sort of, with a lot of glue code. <a href="https://github.com/moeru-ai/airi" target="_blank">Project AIRI</a> is the most complete open-source attempt I've seen at closing that gap. It is a self-hosted framework for running your own AI companion - realtime voice chat, a Live2D or VRM avatar, the ability to play Minecraft or Factorio with you, and a plug for more than 30 LLM providers including fully local ones. It is MIT licensed, it runs in your browser or as a desktop app, and none of it requires you to send your conversations to a company that trains on them by default.

What's less obvious is what happens once it's running. AIRI lives on `localhost` like every other self-hosted dev tool, which is fine until you want to talk to your companion from your phone on the bus, or show a friend what you built without making them clone a monorepo. That's the part [Pinggy](https://pinggy.io) fixes - one SSH command turns your local instance into a real HTTPS URL, no port forwarding, no cloud deployment.

{{% tldr %}}

1. **Clone and install**

   ```bash
   git clone https://github.com/moeru-ai/airi.git
   cd airi
   pnpm i
   ```

2. **Start the web stage**

   ```bash
   pnpm dev
   ```

   The UI comes up at `http://localhost:5173`. Open Settings and add credentials for an LLM provider (OpenAI, Anthropic, Gemini, or a local Ollama server if you want everything running offline).

3. **Expose it with Pinggy**

   ```bash
   ssh -p 443 -R0:localhost:5173 free.pinggy.io
   ```

   You get a public HTTPS URL like `https://abc123.a.pinggy.link` - open it on your phone or send it to a friend.

4. **Add password protection (optional)**

   ```bash
   ssh -p 443 -R0:localhost:5173 -t free.pinggy.io b:youruser:yourpassword
   ```

**Links:**
- <a href="https://github.com/moeru-ai/airi" target="_blank">Project AIRI on GitHub</a>
- <a href="https://pinggy.io" target="_blank">Pinggy</a> for instant public HTTPS tunnels

{{% /tldr %}}

## Why an Open-Source Neuro-sama Matters

Neuro-sama isn't a novelty chatbot with a cartoon face bolted on. Her creator built the whole stack from scratch in Python and C#/Unity: a personality model tuned to be genuinely funny and occasionally cruel, a voice pipeline, game-playing agents, and enough consistency that people have watched her for years. She has become a real Twitch institution - streaming for hours a day, singing, roasting chat, occasionally getting banned for saying something she shouldn't have.

None of that is open source. If you wanted your own version, you were on your own to wire together a speech-to-text pipeline, an LLM, a text-to-speech engine, and an avatar renderer, then somehow keep the latency low enough that it feels like a conversation instead of a chatbot with extra steps.

<a href="https://github.com/moeru-ai/airi" target="_blank">Project AIRI</a>, built by the moeru-ai team, is explicitly aiming at that altitude and open-sourcing the climb. The repository description is blunt about it: a container for "souls of waifu, cyber livings," built to bring them into our world, "wishing to achieve Neuro-sama's altitude." It's a strange sentence to put in a README, but it's an honest one, and the project backs it up with real engineering - 45,000+ GitHub stars, 4,000+ commits, and an active Discord community building on top of it.

## What Project AIRI Actually Ships

AIRI is a monorepo, not a single app, and that shows in how many ways you can run it:

- **Stage Web** - the browser version, built with Vue 3 and Vite, also hosted at <a href="https://airi.moeru.ai" target="_blank">airi.moeru.ai</a> if you just want to poke at it before self-hosting
- **Stage Tamagotchi** - a desktop app for Windows, macOS, and Linux (Electron-based), so your companion can sit on your desktop instead of a browser tab
- **Stage Pocket** - a mobile build using Capacitor for iOS and Android

Under the hood, the parts that make it feel like an actual companion rather than a chat widget:

**Voice, in and out.** Realtime speech recognition for input, and text-to-speech through ElevenLabs, Azure, Kokoro, or any OpenAI-compatible TTS endpoint. This is the piece that turns "typing to a chatbot" into "talking to something."

**A face that reacts.** Both Live2D and VRM model formats are supported, with auto-blink, eye tracking, and idle animation baked in. If you already have a Live2D or VRM model from the vtuber/vroid ecosystem, you can likely drop it in.

**Games.** AIRI can play Minecraft and Factorio, with Kerbal Space Program announced and Helldivers 2 co-play listed as work in progress. This is the part that most visibly echoes Neuro-sama, who is as well known for backseat-gaming and dying to easy bosses as she is for singing.

**Bring your own brain.** More than 30 LLM providers are supported through AIRI's provider abstraction layer: the usual hosted names (OpenAI, Anthropic, Gemini, DeepSeek, xAI, Mistral, Groq), plus local inference through Ollama, vLLM, and SGLang. If privacy is the point of self-hosting in the first place, running the model locally too closes the loop - your conversations never leave your machine.

**Chat surfaces beyond the web UI.** Discord and Telegram integrations let your companion live in a server or group chat instead of only a browser tab.

## Running It Yourself

The fastest path is the web version, since it's the one the project's own dev workflow is built around.

### Prerequisites

- Node.js and `pnpm@10.33.0` or newer (AIRI's monorepo pins this exact pnpm version in `package.json`)
- Git
- An API key for at least one LLM provider, or a local <a href="https://ollama.com/" target="_blank">Ollama</a> install if you want zero API cost and zero data leaving your machine

### Clone and install

```bash
git clone https://github.com/moeru-ai/airi.git
cd airi
pnpm i
```

This pulls the full monorepo - the web stage, the desktop shell, docs, and the various provider packages all live in the same workspace, managed with Turbo.

### Start the web stage

```bash
pnpm dev
```

This boots the Vite dev server for Stage Web at `http://localhost:5173` (Vite's standard default port - if that number looks familiar, it's the same one behind [Pinggy's own port guide for Vite apps](/know_your_port/localhost_5173/)). Open it in a browser, head to Settings, and add your LLM provider credentials. If you're running Ollama locally, point AIRI at it the way you would any local Ollama consumer, and skip API keys entirely.

If you'd rather have a desktop companion sitting outside the browser, `pnpm dev:tamagotchi` starts the Electron build instead. Prebuilt installers are also available directly - `winget install MoeruAI.AIRI` on Windows, `brew install --cask airi` on macOS, or a direct download from the GitHub releases page.

## Reaching Your Companion from Anywhere with Pinggy

A companion that only exists on `localhost` stops being useful the moment you leave your desk. A few situations where that actually matters:

- Talking to your companion by voice from your phone, away from your home network
- Letting a friend try your setup without walking them through a `pnpm i`
- Running AIRI on a home server and controlling it from a laptop elsewhere
- Testing the mobile PWA build against your real dev server instead of a deploy preview

<a href="https://pinggy.io" target="_blank">Pinggy</a> solves this with one SSH command and no account required to try it.

### Open the tunnel

In a second terminal, alongside `pnpm dev`, run:

```bash
ssh -p 443 -R0:localhost:5173 free.pinggy.io
```

Pinggy prints back a public URL, something like `https://rAnDoMsTrInG.a.pinggy.link`. That link is live immediately and proxies straight through to your local AIRI instance, including its websocket connections for voice and chat.

### Lock it down before sharing

If you're handing the link to someone else, put a password on it at the tunnel layer:

```bash
ssh -p 443 -R0:localhost:5173 -t free.pinggy.io b:youruser:yourpassword
```

Visitors get an HTTP Basic Auth prompt before they reach your companion. Given that AIRI can be wired up to your own paid LLM API keys, this is worth doing any time the URL leaves your own devices.

### Get a link that doesn't change

The free tier hands out a new random subdomain every time you reconnect, which is fine for a one-off demo but annoying if you want to bookmark your companion on your phone. [Pinggy's paid tier](https://pinggy.io/#prices) gives you a fixed subdomain that stays the same across restarts.

## What's Still Rough

Self-hosting an AI VTuber is a fun project, but it's worth being honest about where AIRI is still unfinished:

**Memory is a work in progress.** The "Memory Alaya" system referenced in the project's roadmap is explicitly WIP. Don't expect your companion to remember last week's conversation the way a product like Character.AI's long-running bots might.

**Game integrations vary in maturity.** Minecraft and Factorio play are functional; Kerbal Space Program is announced but not shipped, and Helldivers 2 co-play is listed as work in progress. Don't pick AIRI specifically because you want it to play a specific game today - check the current state first.

**Latency depends entirely on your LLM choice.** A hosted API like GPT or Claude will feel snappy. A local 7B model on a laptop GPU will feel like talking to someone on a bad phone connection. The voice pipeline is only as fast as the slowest link in it.

**Browser requirements are real.** The web stage leans on WebGPU, WebAudio, and WebAssembly for in-browser inference and rendering. Older browsers or low-end hardware will have a rougher time than a modern Chrome or Edge on a recent machine.

**This is still a young, fast-moving project.** With 4,000+ commits and active daily development, expect breaking changes between releases. Pin a specific commit or release tag if you're building something you don't want to babysit.

## Closing Thoughts

Neuro-sama proved that an AI personality with a voice and a face can hold an audience better than most human streamers, and that idea clearly isn't going to stay locked in one Twitch channel. Project AIRI is the most serious attempt at making that experience something anyone can run on their own hardware, under their own terms, with their own choice of model.

The self-hosting part is the easy half now - `pnpm i && pnpm dev` gets you a running companion in a few minutes. The part that used to require a VPS, a domain, and a reverse proxy config is now one SSH command with Pinggy. If you've been curious about the AI VTuber space but didn't want to hand your conversations to a third party to find out, this is a genuinely good weekend project.

Project AIRI is at <a href="https://github.com/moeru-ai/airi" target="_blank">github.com/moeru-ai/airi</a>, MIT licensed. Pinggy's free tier is at [pinggy.io](https://pinggy.io) - no signup needed to try the tunnel command.
