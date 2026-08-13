---
title: "Self-Host OmniRoute: A Free AI Gateway for 500+ Models and 290+ Providers"
description: "OmniRoute is a free MIT-licensed AI gateway you run yourself: one OpenAI-compatible endpoint in front of 290+ providers and 500+ models. We ran v3.8.48 in Docker, got 99 models resolving with zero configuration, tested combos, compression, MCP, and the CLI, then shared the whole thing over a public HTTPS URL with Pinggy."
date: 2026-07-30T11:20:00+05:30
draft: false
tags: ["OmniRoute", "AI gateway", "self-hosted AI", "LLM router", "open source", "Claude Code"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/omniroute_ai_gateway_security/omniroute_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBPbW5pUm91dGUgYW5kIFJlYWNoIEl0IFJlbW90ZWx5IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHNlbGYtaG9zdGluZyB0aGUgT21uaVJvdXRlIEFJIGdhdGV3YXkgd2l0aCBEb2NrZXIsIHNldHRpbmcgYW4gaW5pdGlhbCBhZG1pbiBwYXNzd29yZCwgcG9pbnRpbmcgY29kaW5nIHRvb2xzIGF0IGl0cyBPcGVuQUktY29tcGF0aWJsZSBlbmRwb2ludCwgYW5kIHNoYXJpbmcgaXQgb3ZlciBhIHB1YmxpYyBIVFRQUyBVUkwgd2l0aCBQaW5nZ3kuIiwKICAidG90YWxUaW1lIjogIlBUMTBNIiwKICAidG9vbCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIkRvY2tlciAob3IgTm9kZS5qcyAyMi54IC8gMjQueC0yNi54IGZvciB0aGUgbnBtIGluc3RhbGwpIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiQW4gU1NIIGNsaWVudCIgfQogIF0sCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTZXQgYW4gaW5pdGlhbCBhZG1pbiBwYXNzd29yZCIsCiAgICAgICJ0ZXh0IjogIk9tbmlSb3V0ZSBhdXRvLWdlbmVyYXRlcyBKV1RfU0VDUkVULCBBUElfS0VZX1NFQ1JFVCwgYW5kIFNUT1JBR0VfRU5DUllQVElPTl9LRVkgb24gZmlyc3QgbGF1bmNoLCBidXQgdGhlIGRhc2hib2FyZCBhZG1pbiBwYXNzd29yZCBmYWxscyBiYWNrIHRvIHRoZSBsaXRlcmFsIHN0cmluZyBDSEFOR0VNRSBpZiBJTklUSUFMX1BBU1NXT1JEIGlzIHVuc2V0LiBHZW5lcmF0ZSBvbmUgZmlyc3Qgd2l0aCBleHBvcnQgSU5JVElBTF9QQVNTV09SRD0kKG9wZW5zc2wgcmFuZCAtYmFzZTY0IDI0KS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgT21uaVJvdXRlIHdpdGggRG9ja2VyIiwKICAgICAgInRleHQiOiAiUnVuIGRvY2tlciBydW4gLWQgLS1uYW1lIG9tbmlyb3V0ZSAtLXJlc3RhcnQgdW5sZXNzLXN0b3BwZWQgLS1zdG9wLXRpbWVvdXQgNDAgLXAgMjAxMjg6MjAxMjggLXYgb21uaXJvdXRlLWRhdGE6L2FwcC9kYXRhIC1lIElOSVRJQUxfUEFTU1dPUkQgZGllZ29zb3V6YXB3L29tbmlyb3V0ZTpsYXRlc3QuIFRoZSBkYXNoYm9hcmQgYW5kIHRoZSBPcGVuQUktY29tcGF0aWJsZSBBUEkgYXJlIGJvdGggc2VydmVkIGZyb20gcG9ydCAyMDEyOC4gVGhlIDQwIHNlY29uZCBzdG9wIHRpbWVvdXQgbGV0cyBPbW5pUm91dGUgY2hlY2twb2ludCBpdHMgU1FMaXRlIGRhdGFiYXNlIG9uIHNodXRkb3duLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25maXJtIHRoZSBnYXRld2F5IGlzIHVwIiwKICAgICAgInRleHQiOiAiT3BlbiBodHRwOi8vbG9jYWxob3N0OjIwMTI4IGluIGEgYnJvd3Nlciwgd2hpY2ggcmVkaXJlY3RzIHRvIC9kYXNoYm9hcmQuIENoZWNrIHRoZSBtb2RlbCBsaXN0IHdpdGggY3VybCBodHRwOi8vbG9jYWxob3N0OjIwMTI4L3YxL21vZGVscy4gUm91Z2hseSA5OSBtb2RlbHMgcmVzb2x2ZSBiZWZvcmUgeW91IGNvbmZpZ3VyZSBhIHNpbmdsZSBwcm92aWRlciwgaW5jbHVkaW5nIDM2IGF1dG8vKiBjb21ibyBhbGlhc2VzIGFuZCBzZXZlcmFsIG5vLWF1dGggZnJlZSBwcm92aWRlciBwb29scy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29ubmVjdCBwcm92aWRlcnMgYW5kIGNyZWF0ZSBhbiBBUEkga2V5IiwKICAgICAgInRleHQiOiAiSW4gdGhlIGRhc2hib2FyZCwgZ28gdG8gUHJvdmlkZXJzIHRvIGNvbm5lY3QgT0F1dGggc3Vic2NyaXB0aW9ucyBzdWNoIGFzIENsYXVkZSBDb2RlLCBDb2RleCwgYW5kIEdpdEh1YiBDb3BpbG90LCBvciBwYXN0ZSBBUEkga2V5cyBmb3IgR0xNLCBEZWVwU2VlaywgTWlzdHJhbCwgR3JvcSwgYW5kIG90aGVyIHByb3ZpZGVycy4gVGhlbiBnbyB0byBBUEkgS2V5cyB0byBtaW50IGEgYmVhcmVyIHRva2VuLCBzY29waW5nIGl0IHRvIGNoYXQsIG1hbmFnZSwgYWRtaW4sIG1lbW9yeSwgb3IgbWNwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQb2ludCB5b3VyIGNvZGluZyB0b29scyBhdCB0aGUgZ2F0ZXdheSIsCiAgICAgICJ0ZXh0IjogIlNldCBBTlRIUk9QSUNfQkFTRV9VUkwgdG8gaHR0cDovL2xvY2FsaG9zdDoyMDEyOCBmb3IgQ2xhdWRlIENvZGUsIG9yIE9QRU5BSV9CQVNFX1VSTCB0byBodHRwOi8vbG9jYWxob3N0OjIwMTI4IGZvciBDb2RleC4gRm9yIEN1cnNvciwgQ2xpbmUsIENvbnRpbnVlLCBhbmQgUm9vQ29kZSwgY2hvb3NlIHRoZSBPcGVuQUktY29tcGF0aWJsZSBwcm92aWRlciBhbmQgc2V0IHRoZSBiYXNlIFVSTCB0byBodHRwOi8vbG9jYWxob3N0OjIwMTI4L3YxIHdpdGggeW91ciBPbW5pUm91dGUgQVBJIGtleS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHBvcnQgMjAxMjggd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJJbiBhIG5ldyB0ZXJtaW5hbCBydW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjIwMTI4IGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgdGhhdCB0dW5uZWxzIHRvIHlvdXIgbG9jYWwgT21uaVJvdXRlIGluc3RhbmNlLCBzbyB5b3UgY2FuIHJlYWNoIHRoZSBkYXNoYm9hcmQgb3Igcm91dGUgQVBJIGNhbGxzIHRocm91Z2ggaXQgZnJvbSBhbm90aGVyIG1hY2hpbmUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkFkZCBIVFRQIGJhc2ljIGF1dGggdG8gdGhlIHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkFwcGVuZCAtdCBcImI6dXNlcjpwYXNzd29yZFwiIHRvIHRoZSBTU0ggY29tbWFuZCBzbyB0aGUgdHVubmVsIGl0c2VsZiByZXF1aXJlcyBjcmVkZW50aWFscy4gUmVxdWVzdHMgd2l0aG91dCB0aGVtIGdldCBhIDQwMSBiZWZvcmUgdGhleSBldmVyIHJlYWNoIE9tbmlSb3V0ZSwgd2hpY2ggYWRkcyBhIGxheWVyIGluZGVwZW5kZW50IG9mIHRoZSBnYXRld2F5J3Mgb3duIGF1dGhlbnRpY2F0aW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbG9zZSB0aGUgdHVubmVsIHdoZW4geW91IGFyZSBkb25lIiwKICAgICAgInRleHQiOiAiRW5kIHRoZSBTU0ggc2Vzc2lvbiByYXRoZXIgdGhhbiBsZWF2aW5nIHRoZSB0dW5uZWwgb3BlbiBpbmRlZmluaXRlbHkuIEEgbGluayB0aGF0IGV4aXN0cyBmb3IgdGhlIGxlbmd0aCBvZiBvbmUgd29ya2luZyBzZXNzaW9uIGlzIGEgbXVjaCBzbWFsbGVyIHRhcmdldCB0aGFuIGEgcGVybWFuZW50IG9uZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "omniroute_ai_gateway_security/omniroute_banner.webp" "Self-Host OmniRoute: A Free AI Gateway for 500+ Models and 290+ Providers" >}}

One command gets you a working AI gateway in about a minute, and here is the part that surprised me: before configuring a single provider or pasting a single API key, `curl http://localhost:20128/v1/models` came back with 99 models. That includes 36 routing aliases like `auto/best-coding` and `auto/best-free`, plus a handful of no-auth provider pools that need nothing from you at all. One of them answered a real chat completion on the first try.

OmniRoute is a free, MIT-licensed AI gateway you host yourself. It puts one OpenAI-compatible endpoint in front of what its README counts as 290+ providers (90+ of them free) and roughly 516 models spanning Claude, GPT, Gemini, DeepSeek, Kimi, GLM, Mistral, and MiniMax. Nothing sits in the request path except your own container. It went up on GitHub in February 2026 and now sits at 33,908 stars and 4,372 forks, with the current release being v3.8.48 from July 13, 2026. We covered the wider AI gateway category, including <a href="https://openrouter.ai/" target="_blank">OpenRouter</a> and <a href="https://www.litellm.ai/" target="_blank">LiteLLM</a>, in our {{< link href="/blog/best_ai_llm_routers_openrouter_alternatives/" >}}roundup of AI LLM routers{{< /link >}}. Everything below was tested against v3.8.48 running in Docker.

{{% tldr %}}
1. **What it is**: a free, MIT-licensed, self-hosted AI gateway from <a href="https://github.com/diegosouzapw/OmniRoute" target="_blank">diegosouzapw/OmniRoute</a> - one OpenAI-compatible endpoint, 290+ providers, ~516 models.
2. **Run it**: `npm install -g omniroute && omniroute`, or `docker run -p 20128:20128 diegosouzapw/omniroute`. Dashboard and API both live on port 20128.
3. **Fix one thing first**: set `INITIAL_PASSWORD`, or the dashboard admin login defaults to the literal string `CHANGEME`.
4. **Why bother**: free-tier aggregation (~1.54B tokens/month across 40+ pools) and Combos that fail over between providers automatically when one runs out of quota.
5. **Share it**: `ssh -p 443 -R0:localhost:20128 free.pinggy.io` for a public HTTPS URL; add `-t "b:user:password"` to password-protect the tunnel.
{{% /tldr %}}

{{< llm-context >}}To self-host OmniRoute and reach it remotely with Pinggy - run `docker run -d -p 20128:20128 -v omniroute-data:/app/data -e INITIAL_PASSWORD=yourpassword diegosouzapw/omniroute:latest` (dashboard and OpenAI-compatible API both on port 20128), then in a new terminal run `ssh -p 443 -R0:localhost:20128 free.pinggy.io` to get a public HTTPS URL. Add `-t "b:user:password"` to the SSH command for HTTP basic auth on the tunnel.{{< /llm-context >}}

## Getting it running

Two commands, either of which works:

```bash
# npm - check the engines field first, it is narrow:
# node >=22.0.0 <23 || >=24.0.0 <27, so Node 23 is excluded
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
    { "model": "cc/claude-opus-4-7" },
    { "model": "glm/glm-4.7" },
    { "model": "minimax/MiniMax-M2.1" }
  ]
}
```

Six strategies are available: priority (strict order), round-robin, weighted, least-used, cost-optimized, and random. OmniRoute tracks each provider's quota window (5-hour and weekly resets for subscriptions, daily or monthly for API providers), and when one trips its limit the combo falls through to the next instead of erroring out to your client.

That failover is worth pairing with the project's other big draw: free-tier aggregation. OmniRoute's <a href="https://github.com/diegosouzapw/OmniRoute/blob/main/docs/reference/FREE_TIERS.md" target="_blank">FREE_TIERS reference</a> catalogs roughly 1.54 billion recurring free tokens per month across 40+ deduplicated pools, led by Mistral at about 1 billion (throttled to 2 requests per minute), with Gemini, Cerebras, Cloudflare AI, Groq, and SambaNova contributing smaller amounts. See our guide to {{< link href="/blog/free_ai_model_apis_unlimited_tokens_openrouter/" >}}free AI model APIs{{< /link >}} if that is your main interest.

On top of that, two stacked compression engines can shave 15-95% off token usage before requests reach a provider: **Caveman** compresses prose, **RTK** (inspired by <a href="https://github.com/RTK-AI/rtk" target="_blank">Rust Token Killer</a>) compresses repetitive tool output like build logs and test runs. Code, URLs, and JSON pass through untouched, and every response carries an `x-omniroute-compression` header showing whether it fired.

## Pointing your coding tools at it

This is a five-minute change if you already use a coding agent, not a new workflow. For Claude Code, set `ANTHROPIC_BASE_URL=http://localhost:20128` and `ANTHROPIC_AUTH_TOKEN=your-omniroute-api-key` in `~/.claude/settings.json`. For Codex CLI, `export OPENAI_BASE_URL="http://localhost:20128"` and `OPENAI_API_KEY`. For Cursor, Cline, Continue, and RooCode, pick the OpenAI-compatible provider type and point it at `http://localhost:20128/v1`. If you are still comparing agents, our roundup of the {{< link href="/blog/best_ai_tools_for_coding/" >}}best AI tools for coding{{< /link >}} and {{< link href="/blog/best_open_source_cli_coding_agents/" >}}CLI coding agents{{< /link >}} covers what each expects from a provider.

## MCP, A2A, and the CLI

OmniRoute exposes itself as an MCP server (SSE, HTTP streaming, or stdio via `omniroute --mcp`), so an agent can drive the gateway itself, restricted to any of ten scopes like combos, health, or billing per API key. See our guide on {{< link href="/blog/expose_mcp_server_with_pinggy/" >}}exposing an MCP server with Pinggy{{< /link >}} if you want to reach it remotely. There is also an A2A server speaking JSON-RPC 2.0 with a skills framework, though this side of the project is the least mature and thinnest on docs.

The CLI covers everything the dashboard does, which matters on headless boxes:

```bash
omniroute doctor                   # checks data dir, DB, providers, port conflicts
omniroute providers test <id>      # live round-trip against one provider
omniroute quota                    # provider quota usage
omniroute combos switch <name>     # change the default combo
omniroute reset-password           # admin password recovery
```

`omniroute doctor` is the first thing to reach for when something is wrong.

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
ssh -p 443 -R0:localhost:20128 a.pinggy.io -t "b:user:temporarypass"
```

We tested this: requests with no credentials or wrong credentials both get `401`, and only correct ones reach OmniRoute. That gives you two independent layers, the tunnel password and `INITIAL_PASSWORD`. Close the SSH session when you are done rather than leaving a permanent link open.

## Conclusion

Set `INITIAL_PASSWORD`, mind the image size, and put a Pinggy tunnel with basic auth in front when you need to reach it from elsewhere. Combos, quota-aware failover, MCP/A2A support, and a free-tier catalog worth roughly 1.54B tokens a month make this a lot of working software for an MIT license.
