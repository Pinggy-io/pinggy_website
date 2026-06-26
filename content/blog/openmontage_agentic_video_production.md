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

That's not a Loom wrapper or a Canva clone. The pitch is that you describe a video in plain English to Claude Code, Cursor, Copilot, or any other compatible agent, and it handles research, scripting, asset generation, editing, and final composition end-to-end. The model reads a pipeline manifest, executes stage-director skills, selects providers, and maintains an auditable decision trail. You sit back and review the output.

Whether it actually delivers on that promise is the interesting question.

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

Most "AI video" tools generate short clips from text. You get a 4-second shot of a robot waving, or an animated image with a slow zoom. OpenMontage aims to do what an actual production team does: research the topic, write a script, build a scene plan, source and generate assets, edit them into a timeline, add narration and music, and render a finished file.

It's not a standalone app. It's a set of tools, pipelines, and skills that your AI coding agent can call. When you tell Claude Code to "make a 90-second documentary about city life at 4am using real footage, no narration, elegiac tone," the agent reads the relevant pipeline manifest (Documentary Montage), applies the corresponding skills, calls out to footage sources, assembles a timeline, and renders via FFmpeg.

The architecture has three layers:

- **Tools** (`tools/`): 52 Python executables covering video generation, image generation, TTS, music, composition, and analysis
- **Pipeline manifests** (`pipeline_defs/`): YAML playbooks that define the production stages for each video type
- **Skills** (`skills/`): Markdown instruction files that teach the agent how to use the tools correctly - what parameters to use, what to check, how to handle edge cases

There's no traditional orchestrator. The agent reads the manifest and drives the whole thing. This design means you can use any compatible agent (Claude Code, Cursor, Copilot, Windsurf, Codex) since the "intelligence" lives in the skills files, not in a proprietary orchestration layer.

## The 12 Pipelines

OpenMontage ships with 12 structured production workflows:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Pipeline</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">What It Produces</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Key Providers</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Animated Explainer</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Educational content with narration, captions, and AI visuals</td>
  <td style="border:1px solid #ddd;padding:0.45em;">FLUX / Pexels + Piper TTS + Remotion</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Documentary Montage</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Real footage edited from Archive.org, NASA, Wikimedia, Pexels</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Free archives + FFmpeg</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Cinematic</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Trailers and mood-driven edits</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Kling / Runway Gen-4 / Google Veo 3</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Avatar Spokesperson</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Presenter-style videos with AI avatar</td>
  <td style="border:1px solid #ddd;padding:0.45em;">HeyGen + ElevenLabs</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Screen Demo</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Software walkthrough recordings with narration</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Screen capture + Piper TTS</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Podcast Repurpose</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Long-form audio to short social clips</td>
  <td style="border:1px solid #ddd;padding:0.45em;">FFmpeg + FLUX</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Animation</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Motion graphics and kinetic typography</td>
  <td style="border:1px solid #ddd;padding:0.45em;">HyperFrames (HTML/GSAP)</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Clip Factory</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Batch social clips from longer source material</td>
  <td style="border:1px solid #ddd;padding:0.45em;">FFmpeg + local TTS</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Hybrid</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Your existing footage enhanced with AI graphics</td>
  <td style="border:1px solid #ddd;padding:0.45em;">FLUX + Remotion</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Localization &amp; Dub</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Multi-language adaptation with synchronized dubs</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Google TTS (700+ voices) + FFmpeg</td>
</tr>
</tbody>
</table>

Each pipeline follows the same spine: research → proposal → script → scene plan → asset generation → edit → compose → self-review. The agent proposes a treatment before executing, so you have a checkpoint to redirect before anything expensive runs.

## Prerequisites

You'll need three things installed globally:

- **Python 3.10+** in a clean virtual environment
- **Node.js 18+** (22+ if you use the HyperFrames composition engine)
- **FFmpeg** installed system-wide (`brew install ffmpeg` or `apt install ffmpeg`)

Plus an AI coding agent. OpenMontage ships configuration files for Claude Code, Cursor, GitHub Copilot, Codex, and Windsurf. If you use a different tool, the `AGENT_GUIDE.md` in the repo root describes the protocol.

## Installation

```bash
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup
```

`make setup` handles the Python dependencies, Remotion's Node packages, and Piper TTS (the local offline voice engine). If you don't have `make`, run the steps manually:

```bash
pip install -r requirements.txt
cd remotion-composer && npm install && cd ..
pip install piper-tts
cp .env.example .env
```

On Windows, if `npm install` fails with `ERR_INVALID_ARG_TYPE`, use `npx --yes npm install` instead.

Then open `.env` and add whatever API keys you have. The next section explains what you can do without any.

## Running for Free

This is the thing most coverage buries: **you can produce a real, complete video without spending a cent**.

The zero-cost stack:

- **Narration:** Piper TTS (offline, runs locally, 90+ voice models)
- **Footage:** Archive.org, NASA Media Library, Wikimedia Commons, Pexels, Unsplash, Pixabay
- **Composition:** Remotion (React-based, runs locally)
- **Post-production:** FFmpeg (runs locally)

A 60-second documentary montage built entirely from free stock footage with Piper narration costs nothing. You just won't get the cinematic AI-generated visuals you'd get from Runway or Kling.

The examples in the repo's `demos/` folder include productions in the $0.15-$1.33 range that use API-based generators - Ghibli-style animation for $0.15, a 60-second animated short for $1.33. The system surfaces a cost estimate before executing anything, and you can configure hard spend caps.

## Your First Production

Once setup is done and your AI agent is running, describe what you want:

```
Make a 60-second animated explainer about how neural networks learn.
Use captions and background music. Keep it free tier only.
```

The agent will:

1. Look up the `animated_explainer` pipeline manifest
2. Apply the relevant stage-director skills
3. Propose a treatment (title, structure, tone, rough scene count) - you can approve or redirect
4. Download/generate images using Pexels and local FLUX if no API key is set
5. Generate narration with Piper TTS
6. Source background music (Suno AI if you have a key; otherwise ambient stock)
7. Compose everything in Remotion - which starts a local dev server on port 3000
8. Run a self-review (ffprobe checks, audio analysis, slideshow risk scoring)
9. Render the final MP4 via FFmpeg

The whole thing for a 60-second explainer with free tools takes around 10-15 minutes. The agent logs every decision with reasoning, so you can see exactly why it chose a particular image or voice.

## Sharing the Remotion Preview with Pinggy

Remotion's composition engine spins up a local dev server at `http://localhost:3000`. While the agent is composing, this gives you a live interactive preview - you can scrub the timeline, check scene transitions, and spot problems before the final FFmpeg render runs.

The issue is that this server is local. If you want a client to review the cut, or a collaborator to check timing on their end, they need access to your `localhost:3000`.

Pinggy fixes this in one command:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy gives you a public HTTPS URL like `https://abc123.a.pinggy.link`. Anyone you share it with can open the Remotion preview in their browser - no VPN, no firewall changes, no account required on their end.

This is particularly useful when:

- **Client review:** You're producing marketing videos and the client wants to see the rough cut before you spend time on the final render
- **Remote collaboration:** Your production pipeline is running on a dedicated machine (a workstation with a local GPU for WAN 2.1 or Hunyuan video generation) and you want to preview from your laptop
- **Async feedback:** You send the preview URL in a Slack message and teammates can scrub through it at their own pace

The tunnel closes when you kill the `ssh` command. The URL changes each time unless you use a Pinggy paid plan with a persistent subdomain.

## Provider Selection: How the Agent Chooses

One of the more thoughtful parts of OpenMontage is the provider scoring system. When the agent needs to generate a video clip, it doesn't just call Runway every time. It ranks 14 video generation providers across 7 dimensions:

- **Task fit:** Does this provider excel at the specific shot type (cinematic, animated, avatar, product)?
- **Quality:** Output resolution, temporal consistency, realism
- **Control:** Prompt adherence, aspect ratio support, camera motion control
- **Reliability:** Uptime, rate limits, generation success rate
- **Cost:** Per-second cost relative to budget cap
- **Latency:** Generation time (critical for batch workflows)
- **Continuity:** Consistency across consecutive shots in a scene

The decision and its alternatives get logged in an audit trail. If you want to understand why it picked Kling over Runway for a particular scene, you can read the reasoning in the job log.

## Quality Controls That Prevent Slideshows

The project calls out "slideshow risk" explicitly - the failure mode where an "AI video" is really just a sequence of still images with a Ken Burns pan. OpenMontage runs a 6-dimension pre-compose check that scores motion density before anything gets rendered. If the score is too low, the agent tries to source real motion footage or regenerate with different parameters.

There's also a post-render self-review that extracts frames, checks audio waveforms with ffprobe, and flags issues before you ever open the file. In practice, this means you get a report even if the render looks okay at first glance.

## What's Rough Right Now

OpenMontage is a young project and the README is honest about it. The manual install path - Python, Node, FFmpeg, multiple provider SDKs, and a `.env` with 20+ optional keys - is not for the impatient. The `make setup` path smooths this out considerably, but if anything in your environment is misaligned (wrong Python version, conflicting Node modules, FFmpeg missing codec support), you'll be debugging before you make a single frame.

The project doesn't have a Docker image yet, which would solve most of the environment friction. Watch the issues tracker - that's likely to land soon given the star velocity.

The free tier produces good results for documentary and explainer formats. The high-production pipelines (Cinematic, Animation, Avatar Spokesperson) benefit strongly from API-based providers, and the costs add up if you're iterating. The budget governance tools are there for a reason - set caps before you start.

## The Bigger Picture

The design pattern here - tools + pipeline manifests + skills files, driven by your existing AI coding agent - is worth paying attention to. OpenMontage isn't trying to be the agent. It's a domain-specific toolkit that makes any capable agent productive at video production. The `AGENT_GUIDE.md` is essentially a contract the agent follows.

This is similar to how [MCP servers exposed via Pinggy](https://pinggy.io/blog/share_local_mcp_server_with_pinggy/) extend an agent's capabilities in a structured way. The tools live in the repo, the agent learns to use them from the skills files, and the pipeline manifests encode the production process. Swap out the agent, same results.

For indie hackers who produce demo videos, course content, or marketing material: this is the most capable free option for automated video production that's been released as of today. Whether it fits your workflow depends on how comfortable you are with a CLI-driven setup and whether your use case matches one of the 12 pipelines well.

The project is AGPLv3. Use it for your own productions. If you build a product on top of it, the license terms apply.

## Conclusion

OpenMontage's star spike is justified. It's not a GPT wrapper slapped on an existing SaaS - it's a complete, thoughtfully designed production system that reflects how an actual video workflow is structured. The agent-first architecture is sound, the free tier is genuinely usable, and the quality controls show someone who has thought about what actually goes wrong in automated video generation.

Getting set up is the hardest part. Once it's running and your agent can call the tools, producing a 60-second explainer is a single prompt. For sharing the Remotion preview with anyone outside your machine, Pinggy gets you a shareable URL in one command.

The <a href="https://github.com/calesthio/OpenMontage" target="_blank">repository</a> is worth bookmarking even if you don't use it today - the pipeline manifests alone are a good model for thinking about structured AI production workflows.
