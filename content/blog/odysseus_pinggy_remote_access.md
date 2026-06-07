---
title: "How to Access Odysseus - the Viral Self-Hosted AI Workspace - from Anywhere"
description: "Odysseus is PewDiePie's open-source AI workspace that hit 44,000 GitHub stars in days. Learn how to set it up with Docker and expose it remotely with Pinggy for access from any device."
date: 2026-06-07T12:00:00+05:30
lastmod: 2026-06-06T12:00:00+05:30
draft: false
tags: ["Odysseus", "self-hosted AI", "Pinggy", "local AI", "Docker", "privacy", "AI workspace", "open source"]
categories: ["Technology", "AI Tools", "Self-Hosted"]
og_image: "images/odysseus_pinggy_remote_access/odysseus_banner.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEFjY2VzcyBPZHlzc2V1cyBBSSBXb3Jrc3BhY2UgUmVtb3RlbHkgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW5zdGFsbCBPZHlzc2V1cywgdGhlIHZpcmFsIHNlbGYtaG9zdGVkIEFJIHdvcmtzcGFjZSwgYW5kIGV4cG9zZSBpdCB0byB0aGUgaW50ZXJuZXQgd2l0aCBQaW5nZ3kgZm9yIHJlbW90ZSBhY2Nlc3MgZnJvbSBhbnkgZGV2aWNlLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9vZHlzc2V1c19waW5nZ3lfcmVtb3RlX2FjY2Vzcy9vZHlzc2V1c19iYW5uZXIucG5nIiwKICAidG90YWxUaW1lIjogIlBUMTBNIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsb25lIGFuZCBzdGFydCBPZHlzc2V1cyB3aXRoIERvY2tlciIsCiAgICAgICJ0ZXh0IjogIlJ1biBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL3Bld2RpZXBpZS1hcmNoZGFlbW9uL29keXNzZXVzLmdpdCwgY2Qgb2R5c3NldXMsIGNwIC5lbnYuZXhhbXBsZSAuZW52LCB0aGVuIGRvY2tlciBjb21wb3NlIHVwIC1kIC0tYnVpbGQuIE9keXNzZXVzIHN0YXJ0cyBhdCBodHRwOi8vbG9jYWxob3N0OjcwMDAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkdldCBhZG1pbiBwYXNzd29yZCBhbmQgbG9nIGluIiwKICAgICAgInRleHQiOiAiUnVuIGRvY2tlciBjb21wb3NlIGxvZ3Mgb2R5c3NldXMgfCBncmVwIC1pIHBhc3N3b3JkIHRvIGZpbmQgeW91ciBnZW5lcmF0ZWQgYWRtaW4gcGFzc3dvcmQsIHRoZW4gbG9nIGluIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6NzAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29ubmVjdCBhIGxvY2FsIG1vZGVsIHZpYSBPbGxhbWEiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIE9sbGFtYSwgcHVsbCBhIG1vZGVsIHdpdGggb2xsYW1hIHB1bGwgbGxhbWEzLjIsIHRoZW4gYWRkIGh0dHA6Ly9sb2NhbGhvc3Q6MTE0MzQvdjEgYXMgYW4gZW5kcG9pbnQgaW4gT2R5c3NldXMgU2V0dGluZ3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSBPZHlzc2V1cyB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NzAwMCBmcmVlLnBpbmdneS5pbyBpbiBhIG5ldyB0ZXJtaW5hbCB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIHlvdSBjYW4gYWNjZXNzIGZyb20gYW55IGRldmljZSBvciBzaGFyZSB3aXRoIHRlYW1tYXRlcy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To access Odysseus (self-hosted AI workspace) remotely with Pinggy - run `git clone https://github.com/pewdiepie-archdaemon/odysseus.git && cd odysseus && cp .env.example .env && docker compose up -d --build` (starts on port 7000), then in a new terminal run `ssh -p 443 -R0:localhost:7000 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

{{< image "odysseus_pinggy_remote_access/odysseus_banner.png" "Odysseus self-hosted AI workspace exposed remotely with Pinggy tunneling" >}}

On May 31, 2026, the biggest YouTuber on the planet pushed a GitHub repo with a 12-word README opener: "The war on big tech has just begun." That repo - {{< link href="https://github.com/pewdiepie-archdaemon/odysseus" >}}Odysseus{{< /link >}} by pewdiepie-archdaemon - crossed 30,000 stars in 48 hours and sat at over 44,000 within a week. It's been on GitHub's trending page every day since.

The hype is justified. Odysseus is a genuinely useful, privacy-first AI workspace that runs entirely on your own hardware. No subscriptions, no telemetry, no data leaving your machine. It replaces ChatGPT, Claude's web interface, and a chunk of your productivity stack - all in a single Docker Compose file.

The problem, as with most self-hosted tools, is the localhost wall. Odysseus binds to `127.0.0.1:7000` by default. That's deliberate and smart from a security standpoint, but it means you can only reach it from the machine it's running on. Your phone can't hit it. Your home lab can't reach it from the office. A teammate can't use it without SSH forwarding gymnastics.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} solves that with one SSH command. You get a public HTTPS URL for your local Odysseus instance in under a minute, no firewall rules, no port forwarding, no VPS.

{{% tldr %}}

1. **Install and start Odysseus**

   ```bash
   git clone https://github.com/pewdiepie-archdaemon/odysseus.git
   cd odysseus
   cp .env.example .env
   docker compose up -d --build
   ```

   Odysseus UI is at `http://localhost:7000`. Get the auto-generated admin password:
   ```bash
   docker compose logs odysseus | grep -i password
   ```

2. **Connect a local model (optional)**

   Install {{< link href="https://ollama.com/" >}}Ollama{{< /link >}} and pull a model:
   ```bash
   ollama pull llama3.2
   ```
   Then add `http://localhost:11434/v1` as an endpoint in Odysseus **Settings > Models**.

3. **Expose it with Pinggy**

   ```bash
   ssh -p 443 -R0:localhost:7000 free.pinggy.io
   ```

   You get a public HTTPS URL like `https://rndom.a.pinggy.link` - works from any device.

{{% /tldr %}}

## What Odysseus actually does

Before getting into the setup, it's worth understanding why this thing went viral. Odysseus isn't just another chat wrapper. It's a full self-hosted workspace with several distinct modes:

**Chat and agents** - standard multi-turn chat with local models, cloud APIs (OpenAI, OpenRouter, GitHub Copilot), or a mix. The agent mode gives the model access to bash, file system, web search via a bundled SearXNG instance, persistent memory via ChromaDB, and any MCP server you connect.

**Deep Research** - ask a question, Odysseus searches, reads sources, and writes back a cited report. Similar to Perplexity's research mode but running locally with your choice of model.

**Compare** - send one prompt to several models side by side. Useful for picking the right model for a task without guessing.

**Email with AI triage** - connects to any IMAP/SMTP account and uses the model to summarize, draft replies, auto-tag, and filter. Genuinely useful if you run your own mail server or want to keep email processing local.

**Model Cookbook** - scans your available VRAM/RAM and recommends models from a catalog of 270+ with fit scores. Then handles serving via Ollama, llama.cpp, or vLLM.

The tech stack is Python 3.11, FastAPI, SQLite, ChromaDB, and a static frontend. Runs in Docker Compose with four containers: Odysseus itself, ChromaDB (vector memory), SearXNG (private search), and ntfy (notifications).

## Prerequisites

You need:
- [Docker](https://docs.docker.com/get-docker/) and Docker Compose (v2 - the `docker compose` variant, not `docker-compose`)
- Git
- 8 GB RAM minimum; 16 GB if you want to run local models alongside the workspace
- [Ollama](https://ollama.com/) if you want local model inference (not required - you can use OpenRouter or OpenAI keys instead)

On macOS with Apple Silicon, Ollama handles GPU acceleration. On Linux with an NVIDIA GPU, vLLM or llama.cpp with CUDA give better throughput for larger models.

## Step 1: Clone and start Odysseus

```bash
git clone https://github.com/pewdiepie-archdaemon/odysseus.git
cd odysseus
cp .env.example .env
docker compose up -d --build
```

The build takes a few minutes the first time - it's pulling the Python deps and the SearXNG/ChromaDB images. Wait for:

```bash
docker compose ps
```

All four containers should show `running` or `healthy`:

```
NAME            STATUS
odysseus        running
odysseus-chroma running
odysseus-searxng running
odysseus-ntfy   running
```

## Step 2: Log in

Odysseus generates a random admin password on first boot. Find it:

```bash
docker compose logs odysseus | grep -i password
```

You'll see something like:

```
odysseus  | Admin password: k7mP2xQnRvL9
```

Open `http://localhost:7000`, enter `admin` as the username and the generated password. The first thing you'll want to do is go to **Settings > Account** and change that to something you'll remember.

## Step 3: Add a model

Odysseus works with any OpenAI-compatible endpoint. The simplest path for local inference is Ollama.

Install Ollama from {{< link href="https://ollama.com/" >}}ollama.com{{< /link >}} and pull a model. For a general-purpose setup on 16 GB RAM:

```bash
ollama pull llama3.2        # 3B, fast, good for chat
ollama pull qwen2.5:7b      # 7B, stronger reasoning
```

For coding tasks specifically:
```bash
ollama pull qwen2.5-coder:7b
```

Then in Odysseus, go to **Settings > Models > Add Endpoint** and enter:
- **URL**: `http://localhost:11434/v1`
- **Type**: OpenAI-compatible
- **Name**: Ollama (or whatever you want)

Click Save, and your local models appear in the chat model selector.

If you'd rather use a cloud API, add your OpenAI or OpenRouter key in the same Settings screen. Both can be active simultaneously - Odysseus lets you switch models per-conversation.

## Step 4: Expose it with Pinggy

Odysseus is running at `http://localhost:7000`. To reach it from another device or share access, open a new terminal and run:

```bash
ssh -p 443 -R0:localhost:7000 free.pinggy.io
```

Pinggy will print a public URL:

```
You are forwarded at:
https://rndom.a.pinggy.link
http://rndom.a.pinggy.link
```

Open that URL on your phone, another laptop, or anywhere else with internet. Odysseus's login page will load over HTTPS. Since authentication is enabled by default, you'll need to enter your admin credentials - that's a reasonable security baseline for remote access.

To get a QR code printed in the terminal (convenient for mobile access):

```bash
ssh -p 443 -R0:localhost:7000 -t qr@free.pinggy.io "u:Host:localhost:7000"
```

## Locking it down further

Odysseus itself has authentication enabled by default - the login screen is the first line of defense. A few extra steps if you're exposing it over the internet for more than a quick demo:

**Add HTTP basic auth via Pinggy** - this adds a second password layer at the tunnel level, before any request even reaches Odysseus:

```bash
ssh -p 443 -R0:localhost:7000 -t free.pinggy.io b:yourusername:yourpassword
```

Anyone accessing the URL will see a browser basic-auth prompt before getting to the Odysseus login screen.

**Set a custom subdomain** with a [Pinggy Pro](https://pinggy.io/#prices) account:

```bash
ssh -p 443 -R0:localhost:7000 myteam@free.pinggy.io
```

This gives you a stable `https://myteam.a.pinggy.link` URL instead of a random one that changes each session - useful if you're sharing access with others who need a predictable address.

**Don't expose the raw ChromaDB or SearXNG ports** - the Docker Compose setup binds those to `127.0.0.1` by default, so only Odysseus talks to them internally. Keep it that way.

## When this setup is actually useful

**Access from mobile** - the Odysseus interface is mobile-responsive. With Pinggy running, you can open your workspace from your phone without any app install. Useful for checking a running Deep Research job or sending a quick query on the go.

**Team access to a shared GPU box** - if one machine on your network has a decent GPU and runs the models, the rest of the team can use Odysseus through the Pinggy URL without each needing their own hardware.

**Demo without deploying** - you're building something on top of the Odysseus API and want to show it to a client or collaborator. Start the tunnel, share the link, kill it when the demo is done. No deployment, no cleanup.

**Isolated research environment** - run document-heavy Deep Research jobs on a beefy home machine while you're at the office. Access the results in the browser when they're done.

## What doesn't work well

A few honest limitations:

The email feature requires IMAP access, which means generating an app password for Gmail or configuring your mail server. It's not plug-and-play if you're on a standard consumer email account with 2FA.

Odysseus is still early - it hit v0.2 around the time of the GitHub spike. Some rough edges around model serving, particularly on Windows with vLLM. The Docker path is solid; native installs are shakier.

The macOS script (`start-macos.sh`) uses port 7860 instead of 7000. Update the Pinggy command accordingly:

```bash
ssh -p 443 -R0:localhost:7860 free.pinggy.io
```

If port 7000 is already taken on your machine, set `APP_PORT=7001` in `.env` and restart:

```bash
docker compose down && docker compose up -d
```

Then forward the new port with Pinggy.

## Bottom line

Odysseus is the most complete self-hosted AI workspace available right now. The 44,000-star spike isn't just hype - the feature set is genuinely broad and the Docker setup is clean. Running it locally is five commands. Getting it accessible from anywhere is one more.

For anything beyond a quick look, change the auto-generated password, enable basic auth on the Pinggy tunnel if you're sharing the URL, and treat the URL as semi-private - Odysseus has shell access to your machine via the agent tools.
