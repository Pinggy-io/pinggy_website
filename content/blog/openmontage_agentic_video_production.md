---
title: "OpenMontage: The Open-Source Agent That Turns Your Coding Assistant into a Video Studio"
description: "OpenMontage is the world's first open-source agentic video production system. Learn how it works, how to set it up for free, and how to share Remotion previews online with Pinggy."
date: 2026-06-26T10:30:00+05:30
draft: false
tags: ["OpenMontage", "agentic video", "open source AI", "video production", "Claude Code", "Remotion", "AI tools", "self-hosted AI"]
categories: ["Technology", "AI Tools", "Open Source"]
og_image: "images/openmontage_agentic_video_production/openmontage_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNldCBVcCBPcGVuTW9udGFnZSBhbmQgU2hhcmUgVmlkZW8gUHJldmlld3MgT25saW5lIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGluc3RhbGxpbmcgT3Blbk1vbnRhZ2UsIHRoZSBvcGVuLXNvdXJjZSBhZ2VudGljIHZpZGVvIHByb2R1Y3Rpb24gc3lzdGVtLCBydW5uaW5nIHlvdXIgZmlyc3QgQUktZHJpdmVuIHByb2R1Y3Rpb24sIGFuZCBzaGFyaW5nIHRoZSBSZW1vdGlvbiBwcmV2aWV3IHNlcnZlciBvbmxpbmUgd2l0aCBQaW5nZ3kuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL29wZW5tb250YWdlX2FnZW50aWNfdmlkZW9fcHJvZHVjdGlvbi9vcGVubW9udGFnZV9iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDbG9uZSBPcGVuTW9udGFnZSBhbmQgaW5zdGFsbCBkZXBlbmRlbmNpZXM6IGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vY2FsZXN0aGlvL09wZW5Nb250YWdlLmdpdCAmJiBjZCBPcGVuTW9udGFnZSAmJiBtYWtlIHNldHVwIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvbmZpZ3VyZSB5b3VyIC5lbnYgZmlsZTogY3AgLmVudi5leGFtcGxlIC5lbnYsIHRoZW4gYWRkIEFQSSBrZXlzIChvciBrZWVwIGJsYW5rIHRvIHVzZSBmcmVlIGxvY2FsIFBpcGVyIFRUUyBhbmQgc3RvY2sgZm9vdGFnZSkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiVGVsbCB5b3VyIEFJIGNvZGluZyBhZ2VudCAoQ2xhdWRlIENvZGUsIEN1cnNvciwgZXRjLikgd2hhdCB2aWRlbyB0byBtYWtlOiBNYWtlIGEgNjAtc2Vjb25kIGV4cGxhaW5lciBhYm91dCBuZXVyYWwgbmV0d29ya3MiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiT25jZSBSZW1vdGlvbiBzdGFydHMgY29tcG9zaW5nIG9uIHBvcnQgMzAwMCwgZXhwb3NlIHRoZSBwcmV2aWV3IHZpYSBQaW5nZ3k6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlNoYXJlIHRoZSBnZW5lcmF0ZWQgcHVibGljIFVSTCB3aXRoIGNsaWVudHMgb3IgY29sbGFib3JhdG9ycyB0byByZXZpZXcgdGhlIGxpdmUgdmlkZW8gcHJldmlldyIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "openmontage_agentic_video_production/openmontage_banner.webp" "OpenMontage: Open-Source Agentic Video Production System" >}}

{{< llm-context >}}To produce a video with OpenMontage - clone the repo and run `make setup` (requires Python 3.10+, Node.js 18+, FFmpeg), then tell your AI coding agent (Claude Code, Cursor, etc.) what to make. To share the Remotion preview with collaborators, run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

<a href="https://github.com/calesthio/OpenMontage" target="_blank">OpenMontage</a> picked up 3,434 GitHub stars in a single day - the kind of number you usually only see when something has genuinely crossed a nerve. The description is what hooked people: "World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio."

That's not a Loom wrapper or a Canva clone. The pitch is that you describe a video in plain English to Claude Code, Cursor, Copilot, or any other compatible agent, and it handles research, scripting, asset generation, editing, and final composition end-to-end. Whether it delivers on that is the interesting question.

{{% tldr %}}
1. Install OpenMontage:
   ```bash
   git clone https://github.com/calesthio/OpenMontage.git
   cd OpenMontage
   make setup
   ```
2. Copy and configure your `.env` file:
   ```bash
   cp .env.example .env
   ```
3. Tell your AI coding agent what to make - "Create a 60-second explainer about how neural networks learn"
4. When Remotion starts composing on port 3000, share the preview via Pinggy:
   ```bash
   ssh -p 443 -R0:localhost:3000 free.pinggy.io
   ```

**Resources:**
- <a href="https://github.com/calesthio/OpenMontage" target="_blank">OpenMontage GitHub repository</a>
- <a href="https://www.youtube.com/@OpenMontage" target="_blank">OpenMontage YouTube channel</a>
{{% /tldr %}}

## What OpenMontage Actually Is

Most "AI video" tools generate short clips from text. OpenMontage aims to do what an actual production team does: research the topic, write a script, build a scene plan, source and generate assets, edit them into a timeline, add narration and music, and render a finished file.

It's not a standalone app. It's a toolkit your AI coding agent drives. The architecture is three layers: **tools** (`tools/`) - 52 Python executables covering video generation, image gen, TTS, music, and analysis; **pipeline manifests** (`pipeline_defs/`) - YAML playbooks defining production stages for each video type; and **skills** (`skills/`) - Markdown instruction files that teach the agent how to use every tool correctly. There's no proprietary orchestrator. The agent reads the manifest and drives the whole thing, which means you can swap agents freely - Claude Code, Cursor, Copilot, Windsurf, Codex all work.

Before writing a single word of script, the agent runs 15–25+ web searches across YouTube, Reddit, news sites, and academic sources to ground your video in real, current information. Every provider choice, style decision, and fallback gets logged in an auditable decision trail.

## The 12 Pipelines

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Pipeline</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">What It Produces</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Best For</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Animated Explainer</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">AI-generated explainer with research, narration, visuals, music</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Tutorials, educational content</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Animation</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Motion graphics and kinetic typography via HyperFrames (HTML/GSAP)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Social media, product demos</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Avatar Spokesperson</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Avatar-driven presenter videos</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Corporate comms, training</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Cinematic</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Trailers, teasers, mood-driven edits</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Brand films, promotional content</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Clip Factory</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Batch of ranked short-form clips from one long source</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Repurposing long content for social</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Documentary Montage</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Real footage cut from Archive.org, NASA, Wikimedia, Pexels</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Video essays, real-footage without paid APIs</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Hybrid</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Your existing footage enhanced with AI visuals</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Enhancing existing footage</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Localization &amp; Dub</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Subtitle, dub, and translate existing video</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Multi-language distribution</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Podcast Repurpose</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Podcast highlights to video</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Podcast marketing, audiograms</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Screen Demo</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Polished software screen recordings with narration</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Product demos, documentation</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Talking Head</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Footage-led speaker videos</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Presentations, vlogs, interviews</td>
</tr>
</tbody>
</table>

Every pipeline follows the same structured flow: `research → proposal → script → scene plan → assets → edit → compose`. The agent proposes a treatment before executing, giving you a checkpoint to redirect before anything expensive runs.

## Prerequisites

- **Python 3.10+**
- **Node.js 18+** - use 22+ if you want HyperFrames (motion graphics, kinetic typography, SVG character animation)
- **FFmpeg** - `brew install ffmpeg` / `sudo apt install ffmpeg`
- **An AI coding assistant** - Claude Code, Cursor, Copilot, Windsurf, or Codex. OpenMontage ships a dedicated config file for each.

## Installation

```bash
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup
```

{{< image "openmontage_agentic_video_production/git_clone_openmontage.webp" "Cloning the OpenMontage repository and running make setup" >}}

`make setup` installs Python dependencies, Remotion's Node packages, and Piper TTS (free offline voice engine). If you don't have `make`:

```bash
pip install -r requirements.txt
cd remotion-composer && npm install && cd ..
pip install piper-tts
cp .env.example .env
```

{{< image "openmontage_agentic_video_production/intall_requirement.webp" "Running pip install -r requirements.txt" >}}

{{< image "openmontage_agentic_video_production/git_clone_2_install_dependency.webp" "Installing Node and Piper TTS dependencies" >}}

On Windows, if `npm install` fails with `ERR_INVALID_ARG_TYPE`, use `npx --yes npm install` instead.

{{< image "openmontage_agentic_video_production/copy_env.webp" "Configuring the .env file with API keys" >}}

## Running for Free

This is the thing most coverage buries: you can produce a complete video without spending a cent. `make setup` gives you this full stack at zero cost:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Capability</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Free Tool</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">What It Does</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Narration</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Piper TTS</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free offline TTS, 90+ voice models, runs locally</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Footage</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Archive.org + NASA + Wikimedia + Pexels</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free/open archival and stock footage</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Composition</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Remotion (React) + HyperFrames (HTML/GSAP)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Animated scenes, captions, motion graphics - runs locally</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Post-production</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">FFmpeg</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Encoding, subtitle burn-in, audio mixing, color grading</td>
</tr>
</tbody>
</table>

When you do add API keys, the real cost floor is low. From the repo's own examples: a Ghibli-style animation (12 FLUX images, Ken Burns motion, particles) costs **$0.15**; a 70-second history elegy with OpenAI TTS costs **$0.02**; a product ad with 4 AI images and word-level subtitles costs **$0.69** with a single OpenAI key. The system always surfaces a cost estimate before executing, and hard spend caps are configurable.

If you have an NVIDIA GPU, you can also unlock free local video generation with WAN 2.1, Hunyuan, or CogVideo:

```bash
make install-gpu
# Then in .env:
VIDEO_GEN_LOCAL_ENABLED=true
VIDEO_GEN_LOCAL_MODEL=wan2.1-1.3b
```

## Your First Production

Once setup is done and your AI agent is open on the project, describe what you want:

```
Make a 60-second animated explainer about how neural networks learn.
Use captions and background music. Keep it free tier only.
```

The agent looks up the `animated_explainer` pipeline manifest, proposes a treatment for your approval, then runs each stage - web research, image generation, Piper TTS narration, music sourcing, Remotion composition, and a self-review pass (ffprobe validation, frame sampling, audio level analysis) before handing you the final MP4. The whole thing for a 60-second free-tier explainer takes around 10–15 minutes.

You can also start from a reference video. Paste a YouTube link and say "make something like this but about quantum computing" - the agent analyzes transcript, pacing, and style, then gives you 2–3 differentiated concepts with cost estimates before doing any production work.

{{< image "openmontage_agentic_video_production/make_demo.webp" "OpenMontage producing a video via an AI coding agent" >}}

## Sharing the Remotion Preview with Pinggy

Remotion's composition engine spins up a local dev server at `http://localhost:3000`. While the agent is composing, this gives you a live interactive preview - you can scrub the timeline, check scene transitions, and spot problems before the final FFmpeg render runs.

{{< image "openmontage_agentic_video_production/reun_remotion_composer.webp" "Remotion composer running locally during video production" >}}

{{< image "openmontage_agentic_video_production/running_ui_localhost.webp" "Remotion preview UI at localhost:3000" >}}

The issue is that this server is local. If you want a client to review the cut, or a collaborator to check timing on their end, they need access to your `localhost:3000`.

Pinggy fixes this in one command:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "openmontage_agentic_video_production/create_pinggy_tunnel.webp" "Creating a Pinggy tunnel to expose the Remotion preview server" >}}

Pinggy gives you a public HTTPS URL like `https://abc123.a.pinggy.link`. Anyone you share it with can open the Remotion preview in their browser - no VPN, no firewall changes, no account required on their end.

{{< image "openmontage_agentic_video_production/running_ui_on_pinggy_public_url.webp" "Remotion preview accessible via Pinggy public URL" >}}

This is particularly useful when:

- **Client review:** You're producing marketing videos and the client wants to see the rough cut before you spend time on the final render
- **Remote collaboration:** Your production pipeline is running on a dedicated machine (a workstation with a local GPU for WAN 2.1 or Hunyuan video generation) and you want to preview from your laptop
- **Async feedback:** You send the preview URL in a Slack message and teammates can scrub through it at their own pace

The tunnel closes when you kill the `ssh` command. The URL changes each time unless you use a Pinggy paid plan with a persistent subdomain.

## Provider Selection: How the Agent Chooses

When the agent needs to generate a video clip, it doesn't just call Runway every time. It ranks all available providers across 7 weighted dimensions: task fit (30%), output quality (20%), control features (15%), reliability (15%), cost efficiency (10%), latency (5%), and continuity (5%). The winner and all alternatives get logged. If you want to understand why it picked Kling over Runway for a particular scene, you can read the exact reasoning in the job log.

OpenMontage supports 14 video generation providers total - cloud APIs (Kling, Runway Gen-4, Google Veo 3, Grok, MiniMax, HeyGen), free stock sources (Pexels, Pixabay, Wikimedia Commons), and local GPU models (WAN 2.1, Hunyuan, CogVideo, LTX-Video). Image generation covers 10 providers including FLUX, Google Imagen 4, DALL-E 3, and free stock. TTS covers ElevenLabs, Google (700+ voices), OpenAI, and Piper locally.

## What's Rough Right Now

OpenMontage is a young project and the README is honest about it. The manual install path - Python, Node, FFmpeg, multiple provider SDKs - is not for the impatient. `make setup` smooths it out considerably, but if anything in your environment is misaligned (wrong Python version, conflicting Node modules, FFmpeg missing codec support), you'll be debugging before you make a single frame. There's no Docker image yet, which would solve most of the friction.

The free tier produces good results for documentary and explainer formats. The high-production pipelines (Cinematic, Animation, Avatar Spokesperson) benefit strongly from API-based providers, and the costs add up if you're iterating. The budget governance tools are there for a reason - set caps before you start.

## Conclusion

Getting set up is the hardest part. Once it's running, producing a 60-second explainer is a single prompt, and Pinggy gets the Remotion preview in front of a client in one more. The <a href="https://github.com/calesthio/OpenMontage" target="_blank">repository</a> is worth bookmarking even if you don't use it today.
