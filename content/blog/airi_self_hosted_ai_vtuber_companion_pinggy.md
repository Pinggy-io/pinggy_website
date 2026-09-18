---
title: "Self-Host Your Own AI VTuber Companion with Project AIRI and Pinggy"
description: "Project AIRI is an open-source, self-hosted take on Neuro-sama: a voice, a face, and a Minecraft account for your own AI companion. Here's how it works and how to reach it from your phone with Pinggy."
date: 2026-07-27T11:30:00+05:30
draft: false
tags: ["AIRI", "AI VTuber", "Neuro-sama", "self-hosted AI", "Live2D", "VRM", "Pinggy", "open source"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/airi_self_hosted_ai_vtuber_companion_pinggy/airi_self_hosted_ai_vtuber_companion_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBQcm9qZWN0IEFJUkkgYW5kIFNoYXJlIEl0IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHJ1bm5pbmcgdGhlIG9wZW4tc291cmNlIEFJUkkgQUkgVlR1YmVyIGNvbXBhbmlvbiBsb2NhbGx5IGFuZCBleHBvc2luZyBpdHMgU3RhZ2UgV2ViIFVJIHRvIHRoZSBpbnRlcm5ldCB1c2luZyBQaW5nZ3kuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsb25lIEFJUkkgYW5kIGluc3RhbGwgZGVwZW5kZW5jaWVzIiwKICAgICAgInRleHQiOiAiQ2xvbmUgdGhlIHJlcG9zaXRvcnkgd2l0aCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL21vZXJ1LWFpL2FpcmksIHRoZW4gY2QgYWlyaSBhbmQgcnVuIHBucG0gaS4gUmVxdWlyZXMgTm9kZS5qcyAyMiBvciBuZXdlciBhbmQgcG5wbS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgU3RhZ2UgV2ViIiwKICAgICAgInRleHQiOiAiUnVuIHBucG0gZGV2IGZyb20gdGhlIHJlcG9zaXRvcnkgcm9vdC4gVGhpcyBzdGFydHMgQUlSSSdzIGJyb3dzZXItYmFzZWQgU3RhZ2UgV2ViIFVJIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6NTE3My4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29ubmVjdCBhbiBMTE0gcHJvdmlkZXIiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBTZXR0aW5ncyBwYW5lbCBpbiB0aGUgd2ViIFVJIGFuZCBhZGQgYW4gQVBJIGtleSBmb3IgT3BlbkFJLCBBbnRocm9waWMsIE9wZW5Sb3V0ZXIsIE9sbGFtYSwgb3Igb25lIG9mIEFJUkkncyBvdGhlciA0MC1wbHVzIHN1cHBvcnRlZCBwcm92aWRlcnMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSBwb3J0IDUxNzMgd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJJbiBhIG5ldyB0ZXJtaW5hbCBydW46IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo1MTczIGZyZWUucGluZ2d5LmlvLiBQaW5nZ3kgcHJpbnRzIGEgcHVibGljIEhUVFBTIFVSTCB0aGF0IHR1bm5lbHMgZGlyZWN0bHkgdG8geW91ciBsb2NhbCBBSVJJIGluc3RhbmNlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJPcGVuIHRoZSBwdWJsaWMgVVJMIGZyb20gYW55IGRldmljZSIsCiAgICAgICJ0ZXh0IjogIlZpc2l0IHRoZSBnZW5lcmF0ZWQgcGluZ2d5LmxpbmsgVVJMIGZyb20geW91ciBwaG9uZSBvciBhIGZyaWVuZCdzIGJyb3dzZXIgdG8gY2hhdCB3aXRoIHlvdXIgY29tcGFuaW9uLCBoZWFyIGl0IHRhbGssIGFuZCB3YXRjaCBpdCBwbGF5IE1pbmVjcmFmdCwgd2hpbGUgdGhlIExMTSBrZXlzIGFuZCBjaGF0IGhpc3Rvcnkgc3RheSBvbiB5b3VyIG1hY2hpbmUuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "airi_self_hosted_ai_vtuber_companion_pinggy/airi_self_hosted_ai_vtuber_companion_pinggy_banner.webp" "Diagram showing Project AIRI's AI VTuber companion running on a laptop, tunneled through Pinggy, and reachable from a phone anywhere" >}}

Neuro-sama has been the strangest success story on Twitch for three years running. She is not a person behind a cartoon avatar; there is no person at all. Vedal987, her creator, built a language model, wired it up to a Live2D avatar and a text-to-speech voice, and started streaming it playing games and heckling chat back in December 2022. By early 2026 that channel had pulled in more paid subscribers than any other on the platform, human or otherwise.

What Vedal never shipped is a way for anyone else to build their own version. That gap is exactly what {{< link href="https://github.com/moeru-ai/airi" >}}Project AIRI{{< /link >}} fills. It is an open-source, self-hosted platform for running your own AI companion, complete with a voice, a Live2D or VRM face, and the ability to actually play Minecraft or Factorio alongside you, instead of just talking about it. Everything runs on your own hardware and your own choice of LLM. Since it is just a local web app when you're developing it, a `pinggy` tunnel is the fastest way to pull it up on your phone or hand the link to a friend without deploying anything.

{{% tldr %}}
1. **Prerequisites**: Node.js 22+ and pnpm. Prebuilt installers exist for Windows (`winget install MoeruAI.AIRI`) and macOS (`brew install --cask airi`).
2. **Run it from source**: `git clone https://github.com/moeru-ai/airi && cd airi && pnpm i && pnpm dev`
3. **It's a browser app**: `pnpm dev` starts the Stage Web UI on `http://localhost:5173`.
4. **Pick a brain**: add an API key for OpenAI, Anthropic, OpenRouter, Ollama, or one of AIRI's other 40+ supported providers from the in-app Settings panel.
5. **Share it**: `ssh -p 443 -R0:localhost:5173 free.pinggy.io` gets you a public HTTPS URL in seconds.
6. **Lock it down**: add `-t "b:user:password"` to the SSH command before you send that link to anyone, since it's fronting your LLM keys and chat history.
{{% /tldr %}}

{{< llm-context >}}To self-host the AIRI AI VTuber companion and share it with Pinggy - clone and run AIRI (`git clone https://github.com/moeru-ai/airi && cd airi && pnpm i && pnpm dev`, starts on port 5173), then in a new terminal run `ssh -p 443 -R0:localhost:5173 free.pinggy.io` to get a public HTTPS URL for the Stage Web chat UI.{{< /llm-context >}}

## Why anyone would want their own Neuro-sama

Neuro-sama's appeal was never really about the technology being novel. Text-to-speech, a language model, and a 2D avatar had all existed for years before Vedal put them together. What made it work was watching something that looked alive react to chat in real time: getting distracted mid-Minecraft-run, holding a grudge from three streams ago, singing badly on purpose. That combination of memory, personality, and a face is what turns a chatbot into a companion instead of a tool.

{{< link href="https://github.com/moeru-ai/airi" >}}moeru-ai/airi{{< /link >}} describes its own goal bluntly in the README: a "self-hosted, you-owned" companion, "wishing to achieve Neuro-sama's altitude." The project traces back to mid-2024, when its creator started picking apart what made Neuro-sama's streams compelling and rebuilding the pieces as MIT-licensed, self-hostable software instead of a one-off Twitch act. The difference in philosophy matters: Neuro-sama is a product you watch. AIRI is a kit you assemble, and the result belongs to whoever ran it.

## What's actually running under the hood

AIRI is not one program so much as a coordinated set of local services glued together by a Vue frontend. Breaking down the README and docs, the pieces are:

- **The brain**: conversation and reasoning are handled through an abstraction layer called xsAI, which AIRI uses to talk to more than 40 LLM backends, including OpenAI, Anthropic Claude, Google Gemini, DeepSeek, Qwen, Groq, Mistral, xAI, Cloudflare Workers AI, Together.ai, Fireworks.ai, and local options like Ollama, vLLM, and SGLang. Swapping models is a Settings-panel change, not a code change.
- **Memory**: conversation history and context are backed by DuckDB WASM and pgvector, so your companion can reference things you told it in earlier sessions instead of starting fresh every time.
- **Voice**: speech input comes from browser audio, Discord voice channels, or client-side voice activity detection; speech output goes through whichever TTS provider you configure, from ElevenLabs and Azure Speech down to a fully local Kokoro TTS model if you don't want any audio leaving your machine.
- **A face**: avatars are rendered as Live2D or VRM models with auto-blink, gaze tracking, and idle animation, drawn through WebGPU in the browser.
- **Hands, of a sort**: a game-agent layer plays Minecraft through the Mineflayer library and is adding Factorio support via its RCON API, with Kerbal Space Program and Helldivers 2 co-play listed as in-progress targets.

The whole thing ships as three separate "stages" rather than one app: Stage Web is the browser build that runs anywhere with WebGPU support, Stage Tamagotchi is an Electron desktop build with native CUDA (NVIDIA) or Metal (Apple Silicon) acceleration via Hugging Face's Candle framework, and Stage Pocket is a mobile PWA. For trying it out and for the purposes of this guide, Stage Web is the one that matters, since it is the version you can run in seconds and tunnel out to a phone.

## Getting it running

If you just want to poke at it without building from source, prebuilt installers exist for the desktop stage:

```bash
# Windows
winget install MoeruAI.AIRI

# macOS
brew install --cask airi
```

For Linux, or if you want the browser-based Stage Web version regardless of platform, you build from source. You'll need Node.js 22 or newer and pnpm:

```bash
git clone https://github.com/moeru-ai/airi.git
cd airi
pnpm i
pnpm dev
```

`pnpm dev` starts the Vite dev server for Stage Web on `http://localhost:5173`. Open that in a browser and you land on AIRI's chat interface with an idle avatar waiting for input. Before it can actually respond to anything, open the Settings panel and add credentials for at least one LLM provider, whether that's a paid API key for Claude or GPT, a free-tier key from OpenRouter, or a local Ollama endpoint if you'd rather keep inference on your own GPU as well.

If you want the desktop build with full native acceleration and system-level integration instead:

```bash
pnpm dev:tamagotchi
```

Both commands watch the source tree, so changes to AIRI's configuration or your own patches reload without a restart.

## Giving it a voice and a face

Once a provider is connected, AIRI can hold a text conversation immediately, but the more interesting setup work is layering on voice and appearance. For speech, you pick an STT source (browser microphone, Discord voice channel, or client-side detection) and a TTS provider from the settings, choosing between cloud voices like ElevenLabs and Azure or the bundled local Kokoro model. For appearance, you load a Live2D or VRM model, either one of the samples AIRI ships with or your own, and the renderer handles blinking, gaze tracking toward your cursor, and idle motion automatically through WebGPU.

None of this is exotic in isolation; Live2D rigs and cloud TTS have both been commodity technology for years. What AIRI packages well is the wiring between them and the LLM, so a response from the model drives voice synthesis and avatar animation together instead of you gluing three separate SDKs together yourself.

## Teaching it to play

The feature that separates AIRI from a talking avatar is the game-agent layer. Minecraft support runs through Mineflayer, a Node.js library that drives a Minecraft client programmatically, letting your companion actually join your world, path around, and react to what's happening rather than narrate it from the sidelines. Factorio support is newer and connects through Factorio's RCON API, and the project's roadmap lists Kerbal Space Program and co-op Helldivers 2 play as targets in progress.

This is also where the "memory" piece pays off. An agent that remembers it died to a creeper at your base last week has a very different feel from one improvising blind every session.

## Sharing it with Pinggy

Stage Web has no built-in way to invite anyone else into a session. There's no share link, no cloud sync tier, nothing beyond a dev server bound to `localhost:5173`. If you want to check on your companion from your phone across the room, or actually show a friend what you built instead of describing it, you need a tunnel.

Leave AIRI running and open a second terminal:

```bash
ssh -p 443 -R0:localhost:5173 free.pinggy.io
```

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} responds with a public HTTPS URL, something like `https://abc123.a.pinggy.link`. Open that from any device and you get the same Stage Web interface you'd see on `localhost:5173`, avatar, voice, and chat included, except now it's reachable from your phone's data connection or your friend's browser on the other side of town. The LLM calls, memory database, and TTS processing all still happen on your machine; the tunnel is only carrying the UI traffic and the audio stream, exactly as it would for any other local web app.

Because that URL is fronting your LLM API keys, your conversation history, and (if you've connected one) your Discord or Minecraft integrations, do not leave it open to the world. Add HTTP basic auth at the tunnel layer before sharing the link with anyone:

```bash
ssh -p 443 -R0:localhost:5173 -t free.pinggy.io b:companion:temporarypass
```

That's enough friction to stop a bare URL from being scraped or passed around further while you're using it for a single demo or session. It is not a substitute for real per-user authentication if this became a permanent, always-on deployment, but for "let one specific person say hi to my AI," it's sufficient.

## What this is (and isn't) good for

**Good for:** checking in on your companion from your phone, showing off a Live2D setup to a friend without deploying anything, letting someone else's browser join a Minecraft-watching session, or debugging your LLM provider config from a second machine on the same network.

**Not good for:** leaving the tunnel open indefinitely as a substitute for a real multi-user deployment. AIRI's dev server has no concept of separate accounts, so anyone with the URL and your basic auth credentials sees the same session you do, memory and all. Treat the tunnel as a temporary bridge for a specific session, not permanent infrastructure.

## Conclusion

Neuro-sama proved there's an audience for an AI that has a face, a voice, and enough continuity to feel like it's actually there instead of just answering prompts. AIRI's contribution is refusing to let that stay locked inside one Twitch channel: the brain, the memory, the voice, and the avatar rigging are all yours to configure, swap, and run on hardware you control. The one thing local-only software never solves on its own is letting anyone else see it, and that's the one problem a single Pinggy command clears up for as long as you need it to.
