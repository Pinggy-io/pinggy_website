---
title: "Self-Host OmniRoute: A Free AI Gateway for 500+ Models and 290+ Providers"
description: "OmniRoute is a free MIT-licensed AI gateway you run yourself: one OpenAI-compatible endpoint in front of 290+ providers and 500+ models. We ran it in Docker, got 99 models resolving with zero configuration, tested combos, compression, MCP, and the CLI, then shared the whole thing over a public HTTPS URL with Pinggy. Facts rechecked against v3.8.51 (October 2026)."
date: 2026-07-30T11:20:00+05:30
lastmod: 2026-10-08T11:20:00+05:30
draft: false
tags: ["OmniRoute", "AI gateway", "self-hosted AI", "LLM router", "open source", "Claude Code"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/omniroute_ai_gateway_security/omniroute_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPbW5pUm91dGUgYW5kIFJlYWNoIEl0IFJlbW90ZWx5IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHNlbGYtaG9zdGluZyB0aGUgT21uaVJvdXRlIEFJIGdhdGV3YXkgd2l0aCBEb2NrZXIsIHNldHRpbmcgYW4gaW5pdGlhbCBhZG1pbiBwYXNzd29yZCwgcG9pbnRpbmcgY29kaW5nIHRvb2xzIGF0IGl0cyBPcGVuQUktY29tcGF0aWJsZSBlbmRwb2ludCwgYW5kIHNoYXJpbmcgaXQgb3ZlciBhIHB1YmxpYyBIVFRQUyBVUkwgd2l0aCBQaW5nZ3kuIiwKICAidG90YWxUaW1lIjogIlBUMTBNIiwKICAidG9vbCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIkRvY2tlciAob3IgTm9kZS5qcyAyMi4yMi4yKyBvciAyNC54LTI2LnggZm9yIHRoZSBucG0gaW5zdGFsbCkiIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1Rvb2wiLCAibmFtZSI6ICJBbiBTU0ggY2xpZW50IiB9CiAgXSwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCBhbiBpbml0aWFsIGFkbWluIHBhc3N3b3JkIiwKICAgICAgInRleHQiOiAiT21uaVJvdXRlIGF1dG8tZ2VuZXJhdGVzIEpXVF9TRUNSRVQsIEFQSV9LRVlfU0VDUkVULCBhbmQgU1RPUkFHRV9FTkNSWVBUSU9OX0tFWSBvbiBmaXJzdCBsYXVuY2gsIGJ1dCB0aGUgZGFzaGJvYXJkIGFkbWluIHBhc3N3b3JkIGZhbGxzIGJhY2sgdG8gdGhlIGxpdGVyYWwgc3RyaW5nIENIQU5HRU1FIGlmIElOSVRJQUxfUEFTU1dPUkQgaXMgdW5zZXQuIEdlbmVyYXRlIG9uZSBmaXJzdCB3aXRoIGV4cG9ydCBJTklUSUFMX1BBU1NXT1JEPSQob3BlbnNzbCByYW5kIC1iYXNlNjQgMjQpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCBPbW5pUm91dGUgd2l0aCBEb2NrZXIiLAogICAgICAidGV4dCI6ICJSdW4gZG9ja2VyIHJ1biAtZCAtLW5hbWUgb21uaXJvdXRlIC0tcmVzdGFydCB1bmxlc3Mtc3RvcHBlZCAtLXN0b3AtdGltZW91dCA0MCAtcCAyMDEyODoyMDEyOCAtdiBvbW5pcm91dGUtZGF0YTovYXBwL2RhdGEgLWUgSU5JVElBTF9QQVNTV09SRCBkaWVnb3NvdXphcHcvb21uaXJvdXRlOmxhdGVzdC4gVGhlIGRhc2hib2FyZCBhbmQgdGhlIE9wZW5BSS1jb21wYXRpYmxlIEFQSSBhcmUgYm90aCBzZXJ2ZWQgZnJvbSBwb3J0IDIwMTI4LiBUaGUgNDAgc2Vjb25kIHN0b3AgdGltZW91dCBsZXRzIE9tbmlSb3V0ZSBjaGVja3BvaW50IGl0cyBTUUxpdGUgZGF0YWJhc2Ugb24gc2h1dGRvd24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbmZpcm0gdGhlIGdhdGV3YXkgaXMgdXAiLAogICAgICAidGV4dCI6ICJPcGVuIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjggaW4gYSBicm93c2VyLCB3aGljaCByZWRpcmVjdHMgdG8gL2Rhc2hib2FyZC4gQ2hlY2sgdGhlIG1vZGVsIGxpc3Qgd2l0aCBjdXJsIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjgvdjEvbW9kZWxzLiBSb3VnaGx5IDk5IG1vZGVscyByZXNvbHZlIGJlZm9yZSB5b3UgY29uZmlndXJlIGEgc2luZ2xlIHByb3ZpZGVyLCBpbmNsdWRpbmcgMzYgYXV0by8qIGNvbWJvIGFsaWFzZXMgYW5kIHNldmVyYWwgbm8tYXV0aCBmcmVlIHByb3ZpZGVyIHBvb2xzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25uZWN0IHByb3ZpZGVycyBhbmQgY3JlYXRlIGFuIEFQSSBrZXkiLAogICAgICAidGV4dCI6ICJJbiB0aGUgZGFzaGJvYXJkLCBnbyB0byBQcm92aWRlcnMgdG8gY29ubmVjdCBPQXV0aCBzdWJzY3JpcHRpb25zIHN1Y2ggYXMgQ2xhdWRlIENvZGUsIENvZGV4LCBhbmQgR2l0SHViIENvcGlsb3QsIG9yIHBhc3RlIEFQSSBrZXlzIGZvciBHTE0sIERlZXBTZWVrLCBNaXN0cmFsLCBHcm9xLCBhbmQgb3RoZXIgcHJvdmlkZXJzLiBUaGVuIGdvIHRvIEFQSSBLZXlzIHRvIG1pbnQgYSBiZWFyZXIgdG9rZW4sIHNjb3BpbmcgaXQgdG8gY2hhdCwgbWFuYWdlLCBhZG1pbiwgbWVtb3J5LCBvciBtY3AuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBvaW50IHlvdXIgY29kaW5nIHRvb2xzIGF0IHRoZSBnYXRld2F5IiwKICAgICAgInRleHQiOiAiU2V0IEFOVEhST1BJQ19CQVNFX1VSTCB0byBodHRwOi8vbG9jYWxob3N0OjIwMTI4IGZvciBDbGF1ZGUgQ29kZSwgb3IgT1BFTkFJX0JBU0VfVVJMIHRvIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjggZm9yIENvZGV4LiBGb3IgQ3Vyc29yLCBDbGluZSwgQ29udGludWUsIGFuZCBSb29Db2RlLCBjaG9vc2UgdGhlIE9wZW5BSS1jb21wYXRpYmxlIHByb3ZpZGVyIGFuZCBzZXQgdGhlIGJhc2UgVVJMIHRvIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjgvdjEgd2l0aCB5b3VyIE9tbmlSb3V0ZSBBUEkga2V5LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgcG9ydCAyMDEyOCB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIkluIGEgbmV3IHRlcm1pbmFsIHJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjAxMjggZnJlZS5waW5nZ3kuaW8gdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCB0aGF0IHR1bm5lbHMgdG8geW91ciBsb2NhbCBPbW5pUm91dGUgaW5zdGFuY2UsIHNvIHlvdSBjYW4gcmVhY2ggdGhlIGRhc2hib2FyZCBvciByb3V0ZSBBUEkgY2FsbHMgdGhyb3VnaCBpdCBmcm9tIGFub3RoZXIgbWFjaGluZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWRkIEhUVFAgYmFzaWMgYXV0aCB0byB0aGUgdHVubmVsIiwKICAgICAgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMDEyOCAtdCBmcmVlLnBpbmdneS5pbyBiOnVzZXI6cGFzc3dvcmQgc28gdGhlIHR1bm5lbCBpdHNlbGYgcmVxdWlyZXMgY3JlZGVudGlhbHMuIFJlcXVlc3RzIHdpdGhvdXQgdGhlbSBnZXQgYSA0MDEgYmVmb3JlIHRoZXkgZXZlciByZWFjaCBPbW5pUm91dGUsIHdoaWNoIGFkZHMgYSBsYXllciBpbmRlcGVuZGVudCBvZiB0aGUgZ2F0ZXdheSdzIG93biBhdXRoZW50aWNhdGlvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2xvc2UgdGhlIHR1bm5lbCB3aGVuIHlvdSBhcmUgZG9uZSIsCiAgICAgICJ0ZXh0IjogIkVuZCB0aGUgU1NIIHNlc3Npb24gcmF0aGVyIHRoYW4gbGVhdmluZyB0aGUgdHVubmVsIG9wZW4gaW5kZWZpbml0ZWx5LiBBIGxpbmsgdGhhdCBleGlzdHMgZm9yIHRoZSBsZW5ndGggb2Ygb25lIHdvcmtpbmcgc2Vzc2lvbiBpcyBhIG11Y2ggc21hbGxlciB0YXJnZXQgdGhhbiBhIHBlcm1hbmVudCBvbmUuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "omniroute_ai_gateway_security/omniroute_banner.webp" "Self-Host OmniRoute: A Free AI Gateway for 500+ Models and 290+ Providers" >}}

One command gets you a working AI gateway in about a minute, and here is the part that surprised me: before configuring a single provider or pasting a single API key, `curl http://localhost:20128/v1/models` came back with 99 models (on v3.8.48, which is what we ran). That includes 36 routing aliases like `auto/best-coding` and `auto/best-free`, plus a handful of no-auth provider pools that need nothing from you at all. One of them answered a real chat completion on the first try.

OmniRoute is a free, MIT-licensed AI gateway you host yourself. It puts one OpenAI-compatible endpoint in front of what its README counts as 358 providers (150+ with a free tier) spanning Claude, GPT, Gemini, DeepSeek, Kimi, GLM, Mistral, and MiniMax. Nothing sits in the request path except your own container. It went up on GitHub in February 2026 and, as of October 9, 2026, sits at 74,497 stars and 10,738 forks, with the current release being v3.8.51 from September 30, 2026. That is up from 33,908 stars and 290+ providers when we first wrote this in July. We covered the wider AI gateway category, including <a href="https://openrouter.ai/" target="_blank">OpenRouter</a> and <a href="https://www.litellm.ai/" target="_blank">LiteLLM</a>, in our {{< link href="/blog/best_ai_llm_routers_openrouter_alternatives/" >}}roundup of AI LLM routers{{< /link >}}.

A note on what was tested when. The hands-on results below (the 99-model list, container memory, the tunnel and its basic auth) are from our run of v3.8.48 in Docker. For this update we rechecked the counts, the engine and Node requirements, the default password, and the CLI commands against the v3.8.51 npm package and README, but did not repeat the container run.

{{% tldr %}}
1. **What it is**: a free, MIT-licensed, self-hosted AI gateway from <a href="https://github.com/diegosouzapw/OmniRoute" target="_blank">diegosouzapw/OmniRoute</a> - one OpenAI-compatible endpoint, 358 providers, 150+ with a free tier.
2. **Run it**: `npm install -g omniroute && omniroute`, or `docker run -p 20128:20128 diegosouzapw/omniroute`. Dashboard and API both live on port 20128.
3. **Fix one thing first**: set `INITIAL_PASSWORD`, or the dashboard admin login defaults to the literal string `CHANGEME`.
4. **Why bother**: free-tier aggregation (~1.62B tokens/month across 35 pools) and Combos that fail over between providers automatically when one runs out of quota.
5. **Share it**: `ssh -p 443 -R0:localhost:20128 free.pinggy.io` for a public HTTPS URL; add `-t` before the host and `b:user:password` after it (`ssh -p 443 -R0:localhost:20128 -t free.pinggy.io b:user:password`) to password-protect the tunnel.
{{% /tldr %}}

{{< llm-context >}}To self-host OmniRoute and reach it remotely with Pinggy - run `docker run -d -p 20128:20128 -v omniroute-data:/app/data -e INITIAL_PASSWORD=yourpassword diegosouzapw/omniroute:latest` (dashboard and OpenAI-compatible API both on port 20128), then in a new terminal run `ssh -p 443 -R0:localhost:20128 free.pinggy.io` to get a public HTTPS URL. For HTTP basic auth on the tunnel run `ssh -p 443 -R0:localhost:20128 -t free.pinggy.io b:user:password` instead.{{< /llm-context >}}

## Getting it running

Two commands, either of which works:

```bash
# npm - check the engines field first, it is narrow:
# node >=22.22.2 <23 || >=24.0.0 <27, so Node 23 is excluded
npm install -g omniroute
omniroute

# Docker - nothing else needed
docker run -p 20128:20128 diegosouzapw/omniroute
```

The first boot writes its own secrets. This is the actual log from a fresh container:

```
[bootstrap] JWT_SECRET auto-generated (first run)
[bootstrap] STORAGE_ENCRYPTION_KEY auto-generated (first run)
[bootstrap] API_KEY_SECRET auto-generated (first run)
[bootstrap] Secrets persisted to: /app/data/server.env
[bootstrap] INITIAL_PASSWORD is not set - using default 'CHANGEME'. Change it in Settings!
Next.js 16.2.10
- Local:         http://localhost:20128
Ready in 0ms
```

{{< image "omniroute_ai_gateway_security/docker_run_bootstrap.webp" "Terminal output from a fresh OmniRoute docker run, showing JWT_SECRET, STORAGE_ENCRYPTION_KEY, and API_KEY_SECRET auto-generated on first run alongside the CHANGEME password warning" >}}

Three of those four secrets are handled for you. The fourth line is the one thing to fix before anything else:

```bash
export INITIAL_PASSWORD=$(openssl rand -base64 24)
```

With that set, the `CHANGEME` warning does not appear. For anything you intend to leave running, use a named container with a persistent volume and a 40 second stop timeout, since OmniRoute checkpoints its SQLite database on shutdown:

```bash
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 20128:20128 -v omniroute-data:/app/data \
  -e INITIAL_PASSWORD \
  diegosouzapw/omniroute:latest
```

{{< image "omniroute_ai_gateway_security/docker_container_running.webp" "OmniRoute container running in Docker Desktop, mapped to port 20128" >}}

On our instance the container idled at roughly 541 MB of RAM and about 3% CPU with no traffic.

## What you get before configuring anything

With zero providers connected, the model list is already populated:

```bash
curl -s http://localhost:20128/v1/models | jq '.data | length'
# 99
```

Of those 99, 36 are `auto/*` combo aliases such as `auto/best-coding` and `auto/best-free`. These are intent-based names rather than models: you ask for `auto/best-coding` and OmniRoute picks whichever configured provider currently satisfies that intent, so your client config does not have to change when you swap providers underneath.

The remaining 63 come from no-auth provider pools that ship enabled: `theoldllm` (26 models), `auggie` (15), `opencode` (8), `duckduckgo-web` (6), and a few smaller ones. A plain OpenAI-shaped request against one of them worked immediately and returned a normal `chat.completion` object with a real `usage` block. Being honest about the rest: of the seven no-auth providers we probed, only two responded, the others returned `403`, `418`, `502`, or `400`. Treat these as a bonus that sometimes works, not the reason to install this.

## The dashboard, combos, and free-tier aggregation

{{< image "omniroute_ai_gateway_security/omniroute_ui_localhost.webp" "OmniRoute's dashboard home page showing the zero-config mode banner, the four-step Quick Start card, and the provider topology panel" >}}

`http://localhost:20128` redirects to `/dashboard`, which confirms the encryption banner and walks you through four steps: create an API key, connect providers, point your client at `/v1`, and monitor usage. Providers connect three ways: OAuth for subscriptions like Claude Code and GitHub Copilot, paste-and-save for API-key providers like GLM and Mistral, and a toggle for the free no-auth pools. Management endpoints are properly locked down; hitting `/api/free-tier/summary` without a key returns a clean `401`.

The most useful feature is **Combos**, an ordered list of models plus a fallback strategy:

```json
{
  "name": "premium-coding",
  "strategy": "priority",
  "models": [
    { "model": "cc/claude-opus-5" },
    { "model": "glm/glm-5.2" },
    { "model": "minimax/MiniMax-M3" }
  ]
}
```

The README now lists 19 strategies, including priority (strict order), round-robin, weighted, least-used, cost-optimized, random, `cache-optimized` (sends repeat requests back to the connection holding the cached prefix), and a `fusion` mode that fans a prompt out to several models. We only exercised the simple ones. OmniRoute tracks each provider's quota window (5-hour and weekly resets for subscriptions, daily or monthly for API providers), and when one trips its limit the combo falls through to the next instead of erroring out to your client.

That failover is worth pairing with the project's other big draw: free-tier aggregation. OmniRoute's <a href="https://github.com/diegosouzapw/OmniRoute/blob/main/docs/reference/FREE_TIERS.md" target="_blank">FREE_TIERS reference</a> puts the documented recurring grant at about 1.62 billion free tokens per month across 35 deduplicated pools, led by Mistral at about 1 billion, then Nara (210M), LLM7 (150M), xKiro (150M), and Groq (30M, as five per-model caps). Treat the headline with some care. The doc says its Mistral figure is only visible inside an account console, and a September 2026 re-audit removed Gemini and Ollama Cloud from the sum because neither publishes a token figure anymore (the total dropped from ~1.94B earlier in the year for similar corrections). Expect rate limits too: OmniRoute's own doc lists Mistral's free tier at 2 requests per minute, while Mistral's help center (an older page) says 1 request per second, so check your own admin console. See our guide to {{< link href="/blog/free_ai_model_apis_unlimited_tokens_openrouter/" >}}free AI model APIs{{< /link >}} if that is your main interest.

On top of that, compression can shave 15-95% off token usage before requests reach a provider. The default stack is two engines: **Caveman** compresses prose, **RTK** (inspired by <a href="https://github.com/RTK-AI/rtk" target="_blank">Rust Token Killer</a>) compresses repetitive tool output like build logs and test runs. The README now lists 12 composable engines in total, including LLMLingua-2 and a few lossy modes you opt into. Code, URLs, and JSON pass through untouched in the default stack, and every response carries an `x-omniroute-compression` header showing whether it fired.

## Pointing your coding tools at it

This is a five-minute change if you already use a coding agent, not a new workflow. For Claude Code, set `ANTHROPIC_BASE_URL=http://localhost:20128` and `ANTHROPIC_AUTH_TOKEN=your-omniroute-api-key` in `~/.claude/settings.json`. For Codex CLI, `export OPENAI_BASE_URL="http://localhost:20128"` and `OPENAI_API_KEY`. For Cursor, Cline, Continue, and RooCode, pick the OpenAI-compatible provider type and point it at `http://localhost:20128/v1`. If you are still comparing agents, our roundup of the {{< link href="/blog/best_ai_tools_for_coding/" >}}best AI tools for coding{{< /link >}} and {{< link href="/blog/best_open_source_cli_coding_agents/" >}}CLI coding agents{{< /link >}} covers what each expects from a provider.

## MCP, A2A, and the CLI

OmniRoute exposes itself as an MCP server (SSE, HTTP streaming, or stdio via `omniroute --mcp`), so an agent can drive the gateway itself, with 110 tools behind 33 scopes (scope enforcement is opt-in, so check the setting before you hand a key to an agent). See our guide on {{< link href="/blog/expose_mcp_server_with_pinggy/" >}}exposing an MCP server with Pinggy{{< /link >}} if you want to reach it remotely. There is also an A2A server speaking JSON-RPC 2.0 with a skills framework, though this side of the project is the least mature and thinnest on docs.

The CLI has grown to 80+ commands and covers most of what the dashboard does, which matters on headless boxes:

```bash
omniroute doctor                   # checks data dir, DB, providers, port conflicts
omniroute providers test <id>      # live round-trip against one provider
omniroute quota                    # provider quota usage
omniroute combo switch <name>      # change the default combo
omniroute reset-password           # admin password recovery
```

`omniroute doctor` is the first thing to reach for when something is wrong. If OmniRoute runs on a VPS, `omniroute connect <host>` logs the same CLI into the remote server with a scoped token, so you can drive it from your laptop.

## Reaching your gateway from another machine with Pinggy

`localhost:20128` is reachable from exactly one computer. A Pinggy tunnel fixes that without opening a router port:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "omniroute_ai_gateway_security/pinggy_public_url.webp" "Pinggy printing two public HTTPS URLs for the tunnel forwarding to localhost:20128" >}}

Both the dashboard and the API work through it. On our tunnel, `/v1/models` returned the same 99 models and a chat completion streamed back normally. Loading that URL in a browser even updates OmniRoute's Quick Start card to show it as the client base URL, since the dashboard reads whatever it is actually being reached on.

{{< image "omniroute_ai_gateway_security/omniroute_running_on_pinggy_url.webp" "OmniRoute's dashboard loaded through a public Pinggy tunnel URL, with the Quick Start card showing that URL as the base URL for API clients" >}}

Since your gateway now holds every provider key you have configured, put a password on the tunnel itself:

```bash
ssh -p 443 -R0:localhost:20128 -t free.pinggy.io b:user:temporarypass
```

This is the syntax from the {{< link href="/docs/http_tunnels/basic_auth/" >}}basic auth docs{{< /link >}}. In our July test, requests with no credentials or wrong credentials both got `401`, and only correct ones reached OmniRoute. That gives you two independent layers, the tunnel password and `INITIAL_PASSWORD`. Close the SSH session when you are done rather than leaving a permanent link open.

## Conclusion

Set `INITIAL_PASSWORD`, mind the image size, and put a Pinggy tunnel with basic auth in front when you need to reach it from elsewhere. Combos, quota-aware failover, MCP/A2A support, and a free-tier catalog worth roughly 1.62B tokens a month make this a lot of working software for an MIT license.
