---
title: "Self-Host Open Notebook: Run Your Own Private NotebookLM Alternative"
description: "Open Notebook is an open-source NotebookLM alternative with multi-model support, custom podcasts, and a REST API - all running on your own machine. Learn how to set it up with Docker and make it accessible from anywhere with Pinggy."
date: 2026-06-06T11:00:00+05:30
draft: false
tags: ["NotebookLM", "Open Notebook", "self-hosted", "AI tools", "Pinggy", "Docker", "privacy", "knowledge management"]
categories: ["Technology", "AI Tools", "Self-Hosted"]
og_image: "images/self_host_open_notebook/self_host_open_notebook_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPcGVuIE5vdGVib29rIGFuZCBBY2Nlc3MgSXQgUmVtb3RlbHkgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW5zdGFsbCBPcGVuIE5vdGVib29rIHVzaW5nIERvY2tlciwgcnVuIGl0IGxvY2FsbHksIGFuZCBleHBvc2UgaXQgdG8gdGhlIGludGVybmV0IHdpdGggUGluZ2d5IGZvciByZW1vdGUgYWNjZXNzIGZyb20gYW55IGRldmljZS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2VsZl9ob3N0X29wZW5fbm90ZWJvb2svc2VsZl9ob3N0X29wZW5fbm90ZWJvb2tfYmFubmVyLndlYnAiLAogICJ0b3RhbFRpbWUiOiAiUFQxNU0iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBEb2NrZXIgRGVza3RvcCIsCiAgICAgICJ0ZXh0IjogIkRvd25sb2FkIGFuZCBpbnN0YWxsIERvY2tlciBEZXNrdG9wIG9uIHlvdXIgbWFjaGluZS4gT3BlbiBOb3RlYm9vayByZXF1aXJlcyBEb2NrZXIgYW5kIERvY2tlciBDb21wb3NlIHRvIHJ1bi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRG93bmxvYWQgdGhlIGRvY2tlci1jb21wb3NlLnltbCIsCiAgICAgICJ0ZXh0IjogIkRvd25sb2FkIHRoZSBPcGVuIE5vdGVib29rIGRvY2tlci1jb21wb3NlLnltbCBmcm9tIHRoZSBHaXRIdWIgcmVwb3NpdG9yeSBhbmQgc2V0IHlvdXIgT1BFTl9OT1RFQk9PS19FTkNSWVBUSU9OX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgT3BlbiBOb3RlYm9vayIsCiAgICAgICJ0ZXh0IjogIlJ1biBkb2NrZXIgY29tcG9zZSB1cCAtZCBpbiB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgZG9ja2VyLWNvbXBvc2UueW1sIHRvIHN0YXJ0IE9wZW4gTm90ZWJvb2suIFRoZSBVSSBpcyBhdmFpbGFibGUgYXQgbG9jYWxob3N0Ojg1MDIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNyZWF0ZSBhIFBpbmdneSB0dW5uZWwiLAogICAgICAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0Ojg1MDIgZnJlZS5waW5nZ3kuaW8gdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBmb3IgeW91ciBPcGVuIE5vdGVib29rIGluc3RhbmNlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBY2Nlc3MgT3BlbiBOb3RlYm9vayBmcm9tIGFueXdoZXJlIiwKICAgICAgInRleHQiOiAiVXNlIHRoZSBQaW5nZ3kgcHVibGljIFVSTCBvbiBhbnkgZGV2aWNlIG9yIHNoYXJlIGl0IHdpdGggdGVhbW1hdGVzIHRvIGFjY2VzcyB5b3VyIHByaXZhdGUgT3BlbiBOb3RlYm9vayBpbnN0YW5jZSByZW1vdGVseS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host Open Notebook (open-source NotebookLM alternative) with Pinggy - run `docker compose up -d` (starts UI on port 8502), then in a new terminal run `ssh -p 443 -R0:localhost:8502 free.pinggy.io` to get a public HTTPS URL you can access from any device.{{< /llm-context >}}

{{< image "self_host_open_notebook/self_host_open_notebook_banner.webp" "Open Notebook - open-source self-hosted NotebookLM alternative running locally" >}}

Google's NotebookLM is genuinely useful. Feed it a pile of PDFs, research papers, or meeting transcripts and it produces surprisingly good summaries, answers questions with citations, and - its most viral feature - generates a podcast-style audio discussion of your material. A lot of researchers and indie hackers I know use it daily.

The friction is the obvious one: your documents go to Google. That's fine for public papers, but uncomfortable for anything proprietary - client work, unpublished research, internal strategy docs, personal notes. And if you want to use a model other than Gemini, you're out of luck.

{{< link href="https://github.com/lfnovo/open-notebook" >}}Open Notebook{{< /link >}} is a direct open-source answer to that problem. It hit {{< link href="https://github.com/trending" >}}GitHub's trending page{{< /link >}} today - second overall with 783 new stars - after the team shipped v1.9.0 on June 2. It does everything NotebookLM does, then goes further: 18+ AI providers (including local models), podcasts with up to four speakers, full vector search, and a REST API. Everything runs on your machine.

The one annoying part of self-hosting anything is the localhost wall. Open Notebook running on your laptop is only reachable from that laptop. If you want to access it from your phone, share a research workspace with a teammate, or build something on top of the REST API from a remote machine, you need a public URL. That's where {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} comes in - one SSH command and your local instance gets a working HTTPS URL, no firewall changes, no deployment.

{{% tldr %}}

1. **Start Open Notebook with Docker**

   ```bash
   # Download docker-compose.yml from GitHub
   curl -O https://raw.githubusercontent.com/lfnovo/open-notebook/main/docker-compose.yml

   # Set your encryption key
   export OPEN_NOTEBOOK_ENCRYPTION_KEY=$(openssl rand -hex 32)

   # Start it
   docker compose up -d
   ```

   Open Notebook UI is at `http://localhost:8502`. The REST API runs at `http://localhost:5055`.

2. **Expose it with Pinggy**

   ```bash
   ssh -p 443 -R0:localhost:8502 free.pinggy.io
   ```

   You get a public HTTPS URL like `https://abc123.a.pinggy.link` - open it from any device.

3. **Add password protection (optional)**

   ```bash
   ssh -p 443 -R0:localhost:8502 -t free.pinggy.io b:youruser:yourpassword
   ```

**Links:**
- <a href="https://github.com/lfnovo/open-notebook" target="_blank">Open Notebook on GitHub</a>
- <a href="https://pinggy.io" target="_blank">Pinggy</a> for instant public HTTPS tunnels

{{% /tldr %}}

## What Open Notebook Actually Does

{{< image "self_host_open_notebook/open_notebook_interface.webp" "Open Notebook interface showing document sources and research workspace" >}}

The core workflow is the same as NotebookLM: you create a notebook, add sources - PDFs, web pages, YouTube videos, audio files, Office documents - and then chat with the AI against that specific body of material. Answers cite sources so you can trace claims back to the original text.

Where it diverges from Google's version:

**AI provider flexibility.** NotebookLM is Gemini-only. Open Notebook supports OpenAI, Anthropic, Mistral, Google, Cohere, Groq, and local models through Ollama or LM Studio. You can mix providers per task - use Claude for analysis, a local model for drafting, Whisper-compatible transcription for audio. v1.9.0 added Deepgram's Aura voices, Mistral Voxtral for speech-to-text, and xAI text-to-speech.

**Podcast generation.** This is NotebookLM's signature feature - you can generate an audio discussion of your research material. Open Notebook supports 1-4 speakers with configurable profiles and voices, versus NotebookLM's fixed two-host format. The actual output quality depends on your chosen TTS provider, but the control is meaningful if you have a specific format in mind.

**REST API.** Full programmatic access to your notebooks, sources, and AI queries. If you want to pipe research into a workflow, trigger summaries from a CI job, or build a custom frontend, the API is there.

**Vector + full-text search.** SurrealDB (the embedded database) handles both indexed full-text search and vector similarity search across all your ingested content.

**Data sovereignty.** Your documents never leave your machine. The AI API calls go to whichever provider you configure, but the storage and indexing are local.

## Installing Open Notebook

The quickstart requires Docker Desktop (Docker + Docker Compose). There's no binary distribution yet - the Docker route is the documented path.

### Prerequisites

- Docker Desktop installed and running
- An API key from at least one AI provider (OpenAI, Anthropic, Google, or Ollama running locally)

### Step 1: Download the compose file

```bash
curl -O https://raw.githubusercontent.com/lfnovo/open-notebook/main/docker-compose.yml
```

The compose file defines two services: `surrealdb` (the database, on port 8000) and `open_notebook` (the app, on ports 8502 and 5055).

### Step 2: Set the encryption key

Open Notebook requires an `OPEN_NOTEBOOK_ENCRYPTION_KEY` to encrypt stored credentials. Generate one and set it as an environment variable before starting:

```bash
export OPEN_NOTEBOOK_ENCRYPTION_KEY=$(openssl rand -hex 32)
```

Or add it directly to a `.env` file in the same directory:

```
OPEN_NOTEBOOK_ENCRYPTION_KEY=your-32-char-or-longer-random-string
```

### Step 3: Start the stack

```bash
docker compose up -d
```

Docker pulls two images (`surrealdb/surrealdb:v2` and `lfnovo/open_notebook:v1-latest`) and starts both containers. The first run pulls about 1-2 GB depending on your cache state.

Check that both containers are running:

```bash
docker compose ps
```

### Step 4: Open the UI and add an AI provider

Visit `http://localhost:8502`. The first thing you need to do is go to **Settings** and add credentials for at least one AI provider. For a fully local setup with no API costs, install {{< link href="https://ollama.com/" >}}Ollama{{< /link >}} and add it as a provider - Open Notebook connects to it at `http://host.docker.internal:11434`.

Once you have a provider configured, create your first notebook, add some sources, and start asking questions.

## Accessing Open Notebook from Anywhere with Pinggy

Open Notebook running locally is useful, but there are several situations where you want it reachable from outside your machine:

- Access your research workspace from a different device (phone, tablet, another computer)
- Share a notebook with a collaborator without sending files back and forth
- Use the REST API (`localhost:5055`) from a remote script or service
- Demo a research workflow to someone not on your local network

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} creates an instant HTTPS tunnel to your local port using a single SSH command - no install, no config files, no cloud account required to try it.

### Creating the tunnel

In a new terminal window, run:

```bash
ssh -p 443 -R0:localhost:8502 free.pinggy.io
```

Pinggy prints a public URL, something like:

```
https://rAnDoMsTrInG.a.pinggy.link
```

That URL is live immediately. Open it on your phone or share it with a teammate - they can access your Open Notebook instance exactly as if they were on your local network.

### Adding password protection

If you are sharing the URL with others, add HTTP Basic Auth at the Pinggy layer:

```bash
ssh -p 443 -R0:localhost:8502 -t free.pinggy.io b:youruser:yourpassword
```

Anyone visiting the public URL will get a browser password prompt before they can reach the Open Notebook interface.

### Tunneling the REST API too

If you need remote access to the API (port 5055) as well, open a second terminal and run a separate tunnel:

```bash
ssh -p 443 -R0:localhost:5055 free.pinggy.io
```

You now have two public URLs - one for the UI and one for the API. Useful if you want to build automation on top of Open Notebook's programmatic interface while keeping the UI accessible separately.

### Getting a stable URL

The free Pinggy tier generates a random subdomain on each connection. For a persistent URL you can bookmark or share permanently, {{< link href="https://pinggy.io/#prices" >}}Pinggy's paid tier{{< /link >}} gives you a fixed custom subdomain that stays the same every time you start the tunnel.

## A Few Honest Tradeoffs

Open Notebook is genuinely good, but it is not a drop-in replacement if you live in Google Workspace. A few things to know before switching:

**Setup friction is real.** The Docker path takes 10-15 minutes the first time. NotebookLM is zero-install. If you just need to summarize a PDF once, use Google's version.

**AI quality depends on your provider.** NotebookLM's quality bar comes from Gemini. If you configure Open Notebook with a local model, output quality will vary. For research-grade work, use a capable API model like GPT-4o or Claude 3.7.

**The v1.9.0 breaking change to watch:** Ollama's default context window dropped from 128K to 8,192 tokens. If you were relying on long-context analysis with Ollama, set `num_ctx` in the settings or explicitly configure a higher value per credential.

**No mobile app.** The UI is a web app. It works fine in a mobile browser, especially if you expose it with Pinggy, but it is not optimized for small screens.

## Why This Is Trending

Open Notebook went from around 25K total stars in early 2026 to over 26K today, with 783 new stars in a single day. A few things are driving the attention:

NotebookLM has gotten popular enough that people are actively looking for alternatives. The privacy conversation has shifted - more developers are uncomfortable with research material going to a cloud service even when terms say it is not used for training. Open Notebook lands at exactly the right moment: polished enough to actually use, flexible enough to work with whatever AI stack you already have.

The Pinggy angle is practical: for anyone running Open Notebook at home, the tunnel step takes one command and immediately makes the tool genuinely portable. Research you started on your workstation is accessible from a coffee shop without syncing files or running a deployment.

Open Notebook is at {{< link href="https://github.com/lfnovo/open-notebook" >}}github.com/lfnovo/open-notebook{{< /link >}}. The latest release is v1.9.0. Pinggy's free tier is at {{< link href="https://pinggy.io" >}}pinggy.io{{< /link >}} - no signup needed to try the tunnel command.
