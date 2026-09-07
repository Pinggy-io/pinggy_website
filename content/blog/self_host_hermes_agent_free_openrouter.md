---
title: "Self-Host Hermes Agent for Free with OpenRouter's Free Models"
description: "How to install Nous Research's open-source Hermes Agent on your own machine and run it at zero token cost on OpenRouter free models - the tool-calling and 64K context requirements, the request limits that actually bite, a free-model fallback chain, and remote access over a tunnel."
date: 2026-09-05T11:30:00+05:30
draft: false
tags: ["Hermes Agent", "AI agents", "self-hosted AI", "OpenRouter", "open source"]
og_image: "images/self_host_hermes_agent_free_openrouter/self_host_hermes_agent_free_openrouter_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBIZXJtZXMgQWdlbnQgZm9yIEZyZWUgd2l0aCBPcGVuUm91dGVyIEZyZWUgTW9kZWxzIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGluc3RhbGxpbmcgTm91cyBSZXNlYXJjaCdzIG9wZW4tc291cmNlIEhlcm1lcyBBZ2VudCBvbiB5b3VyIG93biBtYWNoaW5lIGFuZCBydW5uaW5nIGl0IGF0IHplcm8gdG9rZW4gY29zdCBvbiBPcGVuUm91dGVyJ3MgZnJlZSBtb2RlbHMsIGluY2x1ZGluZyB0aGUgdG9vbC1jYWxsaW5nIGFuZCA2NEsgY29udGV4dCByZXF1aXJlbWVudHMsIHRoZSByZXF1ZXN0LXBlci1kYXkgbGltaXRzLCBhIGZyZWUtbW9kZWwgZmFsbGJhY2sgY2hhaW4sIGFuZCByZW1vdGUgYWNjZXNzIG92ZXIgYSBQaW5nZ3kgdHVubmVsLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3RfaGVybWVzX2FnZW50X2ZyZWVfb3BlbnJvdXRlci9zZWxmX2hvc3RfaGVybWVzX2FnZW50X2ZyZWVfb3BlbnJvdXRlcl9iYW5uZXIud2VicCIsCiAgInRvdGFsVGltZSI6ICJQVDMwTSIsCiAgImVzdGltYXRlZENvc3QiOiB7CiAgICAiQHR5cGUiOiAiTW9uZXRhcnlBbW91bnQiLAogICAgImN1cnJlbmN5IjogIlVTRCIsCiAgICAidmFsdWUiOiAiMCIKICB9LAogICJ0b29sIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICAgIm5hbWUiOiAiSGVybWVzIEFnZW50IgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvVG9vbCIsCiAgICAgICJuYW1lIjogIk9wZW5Sb3V0ZXIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICAgIm5hbWUiOiAiUGluZ2d5IgogICAgfQogIF0sCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDcmVhdGUgYW4gT3BlblJvdXRlciBBUEkga2V5IiwKICAgICAgInRleHQiOiAiU2lnbiB1cCBhdCBvcGVucm91dGVyLmFpIGFuZCBnZW5lcmF0ZSBhIGtleSBvbiB0aGUgS2V5cyBwYWdlLiBUaGUga2V5IHN0YXJ0cyB3aXRoIHNrLW9yLS4gTm8gY3JlZGl0IGNhcmQgaXMgbmVlZGVkIGZvciB0aGUgZnJlZSBtb2RlbHMsIGJ1dCBhIG9uZS10aW1lIHB1cmNoYXNlIG9mIGF0IGxlYXN0IDEwIFVTRCBpbiBjcmVkaXRzIHJhaXNlcyB0aGUgZnJlZS1tb2RlbCBkYWlseSBsaW1pdCBmcm9tIDUwIHJlcXVlc3RzIHRvIDEwMDAgcmVxdWVzdHMgcGVyIGRheSwgd2hpY2ggaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGRlbW8gYW5kIGRhaWx5IHVzZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUGljayBhIGZyZWUgbW9kZWwgdGhhdCBzdXBwb3J0cyB0b29sIGNhbGxpbmcgYW5kIDY0SyBjb250ZXh0IiwKICAgICAgInRleHQiOiAiSGVybWVzIEFnZW50IHJlZnVzZXMgdG8gc3RhcnQgb24gYSBtb2RlbCB3aXRoIGxlc3MgdGhhbiA2NCwwMDAgdG9rZW5zIG9mIGNvbnRleHQsIGFuZCBldmVyeSBhZ2VudCB0dXJuIGlzIGEgdG9vbC1jYWxsaW5nIHJlcXVlc3QsIHNvIHRoZSBtb2RlbCBtdXN0IGFkdmVydGlzZSB0b29scyBzdXBwb3J0LiBRdWVyeSBodHRwczovL29wZW5yb3V0ZXIuYWkvYXBpL3YxL21vZGVscyB3aXRoIG5vIEFQSSBrZXkgYW5kIGtlZXAgb25seSBJRHMgZW5kaW5nIGluIDpmcmVlIHdob3NlIHN1cHBvcnRlZF9wYXJhbWV0ZXJzIGluY2x1ZGUgdG9vbHMgYW5kIHdob3NlIGNvbnRleHRfbGVuZ3RoIGlzIGF0IGxlYXN0IDY0MDAwLiBPbiA1IFNlcHRlbWJlciAyMDI2IHRoYXQgZmlsdGVyIHJldHVybnMgMTggb2YgdGhlIDE5IGZyZWUgbW9kZWxzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIEhlcm1lcyBBZ2VudCIsCiAgICAgICJ0ZXh0IjogIk9uIExpbnV4LCBtYWNPUywgV1NMMiBvciBUZXJtdXggcnVuIGN1cmwgLWZzU0wgaHR0cHM6Ly9oZXJtZXMtYWdlbnQubm91c3Jlc2VhcmNoLmNvbS9pbnN0YWxsLnNoIHwgYmFzaC4gT24gbmF0aXZlIFdpbmRvd3MgcnVuIGlleCAoaXJtIGh0dHBzOi8vaGVybWVzLWFnZW50Lm5vdXNyZXNlYXJjaC5jb20vaW5zdGFsbC5wczEpIGluIFBvd2VyU2hlbGwuIEdpdCBpcyB0aGUgb25seSBwcmVyZXF1aXNpdGUgb24gbm9uLVdpbmRvd3MgcGxhdGZvcm1zLCBwbHVzIGN1cmwgYW5kIHh6LXV0aWxzIG9uIExpbnV4LiBUaGUgaW5zdGFsbGVyIHB1bGxzIHV2LCBQeXRob24gMy4xMSwgTm9kZS5qcywgcmlwZ3JlcCBhbmQgZmZtcGVnIGl0c2VsZiwgcHV0cyB0aGUgY29kZSBpbiB+Ly5oZXJtZXMvaGVybWVzLWFnZW50IGFuZCB0aGUgbGF1bmNoZXIgaW4gfi8ubG9jYWwvYmluL2hlcm1lcy4gUmVsb2FkIHRoZSBzaGVsbCB3aXRoIHNvdXJjZSB+Ly5iYXNocmMgb3Igc291cmNlIH4vLnpzaHJjIGFmdGVyd2FyZHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBvaW50IEhlcm1lcyBhdCB0aGUgZnJlZSBtb2RlbCIsCiAgICAgICJ0ZXh0IjogIlN0b3JlIHRoZSBrZXkgd2l0aCBoZXJtZXMgY29uZmlnIHNldCBPUEVOUk9VVEVSX0FQSV9LRVkgc2stb3ItLi4uLCB3aGljaCB3cml0ZXMgaXQgdG8gfi8uaGVybWVzLy5lbnYsIHRoZW4gc2V0IHByb3ZpZGVyIG9wZW5yb3V0ZXIgYW5kIHRoZSBjaG9zZW4gOmZyZWUgbW9kZWwgSUQgYXMgbW9kZWwuZGVmYXVsdCBpbiB+Ly5oZXJtZXMvY29uZmlnLnlhbWwuIFJ1biBoZXJtZXMgdG8gc3RhcnQgY2hhdHRpbmcsIG9yIHRlc3QgYSBzaW5nbGUgdHVybiB3aXRoIGhlcm1lcyBjaGF0IC0tcHJvdmlkZXIgb3BlbnJvdXRlciAtLW1vZGVsIHotYWkvZ2xtLTUuMjpmcmVlLiBTd2l0Y2ggbW9kZWxzIG1pZC1zZXNzaW9uIHdpdGggL21vZGVsIG9wZW5yb3V0ZXI6PG1vZGVsLWlkPiBhbmQgYWRkIC0tZ2xvYmFsIHRvIHBlcnNpc3QgdGhlIGNoYW5nZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWRkIGEgZmFsbGJhY2sgY2hhaW4gb2YgZnJlZSBtb2RlbHMiLAogICAgICAidGV4dCI6ICJGcmVlIG1vZGVscyBhcmUgY2FwcGVkIGF0IDIwIHJlcXVlc3RzIHBlciBtaW51dGUgYW5kIDUwIG9yIDEwMDAgcmVxdWVzdHMgcGVyIGRheSwgYW5kIGEgc2luZ2xlIGFnZW50IHR1cm4gY2FuIHNwZW5kIHNldmVyYWwgb2YgdGhlbSBiZWNhdXNlIGF1eGlsaWFyeSB0YXNrcyBzdWNoIGFzIGNvbnRleHQgY29tcHJlc3Npb24sIHNlc3Npb24gdGl0bGVzIGFuZCB2aXNpb24gZWFjaCBtYWtlIHRoZWlyIG93biBjYWxsLiBBZGQgYSB0b3AtbGV2ZWwgZmFsbGJhY2tfcHJvdmlkZXJzIGxpc3QgaW4gY29uZmlnLnlhbWwgbmFtaW5nIHR3byBvciB0aHJlZSBvdGhlciA6ZnJlZSBtb2RlbHMuIEhlcm1lcyBzd2l0Y2hlcyB0byB0aGUgbmV4dCBlbnRyeSBtaWQtdHVybiBvbiBIVFRQIDQyOSwgNTAwLTUwMywgNDAxLCA0MDMgb3IgNDA0IHdpdGhvdXQgbG9zaW5nIHRoZSBjb252ZXJzYXRpb24sIHRoZW4gcmV0cmllcyB0aGUgcHJpbWFyeSBvbiB0aGUgbmV4dCB0dXJuLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSZWFjaCB0aGUgYWdlbnQgZnJvbSBvdXRzaWRlIHRoZSBtYWNoaW5lIHdpdGggYSB0dW5uZWwiLAogICAgICAidGV4dCI6ICJTZXQgQVBJX1NFUlZFUl9FTkFCTEVEPXRydWUgYW5kIEFQSV9TRVJWRVJfS0VZIGluIH4vLmhlcm1lcy8uZW52IGFuZCBydW4gaGVybWVzIGdhdGV3YXkgdG8gZXhwb3NlIGFuIE9wZW5BSS1jb21wYXRpYmxlIGVuZHBvaW50IG9uIDEyNy4wLjAuMTo4NjQyLiBQdWJsaXNoIGl0IHdpdGggc3NoIC1wIDQ0MyAtUjA6MTI3LjAuMC4xOjg2NDIgZnJlZS5waW5nZ3kuaW8uIFRoZSBlbmRwb2ludCBzdGF5cyBndWFyZGVkIGJ5IEFQSV9TRVJWRVJfS0VZLCB3aGljaCBjYWxsZXJzIHNlbmQgYXMgYW4gQXV0aG9yaXphdGlvbiBCZWFyZXIgaGVhZGVyLCBzbyBtYWtlIHRoYXQgdmFsdWUgbG9uZyBhbmQgcmFuZG9tIGJlZm9yZSB0aGUgdHVubmVsIGV4aXN0cy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host Hermes Agent for free with Pinggy - install with `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`, run `hermes config set OPENROUTER_API_KEY sk-or-...`, set `model.provider: openrouter` and a `:free` model ID such as `z-ai/glm-5.2:free` in `~/.hermes/config.yaml`, then `hermes` to chat. To reach it remotely, put `API_SERVER_ENABLED=true` and `API_SERVER_KEY=<secret>` in `~/.hermes/.env`, run `hermes gateway` (listens on 127.0.0.1:8642) and run `ssh -p 443 -R0:127.0.0.1:8642 free.pinggy.io` for a public HTTPS URL. The endpoint is guarded by `API_SERVER_KEY`, sent as an `Authorization: Bearer` header.{{< /llm-context >}}

{{< image "self_host_hermes_agent_free_openrouter/self_host_hermes_agent_free_openrouter_banner.webp" "Self-hosting Hermes Agent for free with OpenRouter free models" >}}

Running your own AI agent used to mean choosing between a hosted product that owns your data and a framework you assemble yourself. A third option has quietly become practical: a full open-source agent runtime on your own machine, pointed at inference you do not pay for.

Two things make that work right now. <a href="https://github.com/NousResearch/hermes-agent" target="_blank">Hermes Agent</a> from Nous Research is MIT-licensed, installs in one command, and shipped **v0.21.0 on August 31, 2026** with 241,000 GitHub stars behind it. On the model side, a query against OpenRouter's public catalog on **September 5, 2026** returns **19 models priced at $0 per token**, 18 of which support tool calling and clear the 64K context floor Hermes requires. That is a capable agent for zero dollars, with one constraint worth understanding first: you are limited by requests per day, not tokens.

{{% tldr %}}

**What you get:** an MIT-licensed agent runtime on your own machine with persistent memory, a skill library, cron jobs, subagents, sandboxed shell access and a messaging gateway - on models that cost nothing per token.

**Install:**
```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

**Point it at a free model** (`~/.hermes/config.yaml`), after `hermes config set OPENROUTER_API_KEY sk-or-...`:
```yaml
model:
  provider: openrouter
  default: z-ai/glm-5.2:free
```

**The catch is requests, not tokens.** <a href="https://openrouter.ai/docs/api-reference/limits" target="_blank">OpenRouter's free tier</a> allows 20 requests per minute and 50 per day, rising to 1,000 per day once you have ever bought $10 in credits. One agent turn can spend several.

**Two hard requirements:** the model must support tool calling and expose at least **64,000 tokens** of context, which Hermes checks at startup.

**Reach it from anywhere:** enable the OpenAI-compatible API server on `127.0.0.1:8642`, then `ssh -p 443 -R0:127.0.0.1:8642 free.pinggy.io`. `API_SERVER_KEY` is what guards the endpoint, so make it long and random.

{{% /tldr %}}

## What you are actually self-hosting

Be precise about this, because it changes what the setup buys you: you are self-hosting the **agent**, not the model. The control loop, tool definitions, memory files, session history, skills, credentials and the shell it runs commands in all live on your machine; inference is an ordinary HTTPS call out to OpenRouter. Your file tree stays local, but your prompts do leave, and free endpoints are the ones most likely to be served by providers with a permissive data policy - which is why OpenRouter keeps separate privacy settings for free and paid models.

If that boundary is not good enough, Hermes speaks to Ollama, vLLM, llama.cpp and LM Studio through a `custom` endpoint, the same config shape with a different `base_url`, a path covered in {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}how to self-host any LLM{{< /link >}}. The tradeoff is hardware: a 550B-parameter model on a free endpoint is not something a laptop will match.

## The two hard requirements

Hermes will not run on just any model, and two constraints rule out most cheap alternatives.

**Tool calling is mandatory.** Every turn sends a tool schema and expects structured tool calls back for file reads, shell commands and search. A model that cannot emit them does not degrade gracefully here, it simply cannot drive the loop.

**64,000 tokens of context is the floor.** The Hermes quickstart is blunt: models with smaller windows "cannot maintain enough working memory for multi-step tool-calling workflows and will be rejected at startup." The system prompt, tool definitions, skill descriptions and memory snapshot all occupy that window before your first message does.

## What is free on OpenRouter right now

{{< image "self_host_hermes_agent_free_openrouter/openrouter_free_models.webp" "OpenRouter's free models collection page listing MiniMax M3 and Nemotron 3 Ultra at $0 per million input and output tokens" >}}

<a href="https://openrouter.ai/collections/free-models" target="_blank">OpenRouter's free models collection</a> is the readable view, but the list rotates faster than blog posts get updated: the Hermes fallback docs still use `inclusionai/ring-2.6-1t:free` in an example, and that ID is no longer in the catalog at all. So generate your own. This script needs no API key and filters the live catalog by exactly the two requirements above:

```python
#!/usr/bin/env python3
"""Free OpenRouter models that support tool calling and clear Hermes' 64K floor."""
import json
import urllib.request

with urllib.request.urlopen("https://openrouter.ai/api/v1/models", timeout=30) as r:
    models = json.load(r)["data"]

usable = [
    m for m in models
    if m["id"].endswith(":free")
    and "tools" in (m.get("supported_parameters") or [])
    and (m.get("context_length") or 0) >= 64_000
]

for m in sorted(usable, key=lambda m: -m["context_length"]):
    print(f'{m["id"]:<50}{m["context_length"]:>10,} ctx')

print(f"\n{len(usable)} free tool-calling models usable by Hermes today")
```

Run on September 5, 2026 it printed `18 free tool-calling models usable by Hermes today`, one more than the day before. The only `:free` ID that fails the filter is `nvidia/nemotron-3.5-content-safety:free`, a classifier with no tool support. The pick of them, with detail from OpenRouter's endpoints API the same day:

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Free model ID</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Served by</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Context</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Notes</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><code>z-ai/glm-5.2:free</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Decart</td>
  <td style="border:1px solid #ddd;padding:0.5em;">256K</td>
  <td style="border:1px solid #ddd;padding:0.5em;">fp4, structured outputs, <code>tool_choice: required</code></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>nvidia/nemotron-3-ultra-550b-a55b:free</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">NVIDIA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1M</td>
  <td style="border:1px solid #ddd;padding:0.5em;">550B total / 55B active, Transformer-Mamba hybrid</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><code>nvidia/nemotron-3.5-lightning:free</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">NVIDIA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1M</td>
  <td style="border:1px solid #ddd;padding:0.5em;">30B / 3B active, built for high-throughput agents</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>thinkingmachines/inkling:free</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Thinking Machines</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1M</td>
  <td style="border:1px solid #ddd;padding:0.5em;">975B / 41B active MoE, multimodal</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><code>poolside/laguna-s-2.1:free</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Poolside</td>
  <td style="border:1px solid #ddd;padding:0.5em;">262K</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Coding agent model, 70.2% on Terminal-Bench 2.1</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>cohere/north-mini-code:free</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Cohere</td>
  <td style="border:1px solid #ddd;padding:0.5em;">256K</td>
  <td style="border:1px solid #ddd;padding:0.5em;">30B / 3B active agentic coder, moderated</td>
</tr>
</tbody>
</table>

Two details never show up in a pricing table. Several free endpoints serve **fp4 or fp8 weights**, a fair guess as to why they are free. And each free variant has exactly **one serving endpoint**, so nothing routes around a bad hour: 24-hour uptime ranged from 100% down to 92.3% on `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`.

## Setup, in four steps

### Step 1: Create an OpenRouter API key

Sign up at <a href="https://openrouter.ai" target="_blank">openrouter.ai</a> and generate a key on the Keys page. It starts with `sk-or-`, and no card is required for the free models.

{{< image "self_host_hermes_agent_free_openrouter/openrouter_api_key_generate.webp" "The OpenRouter API Keys page with a newly created key, showing usage and limit columns" >}}

### Step 2: Install Hermes Agent

On Linux, macOS, WSL2 or Android via Termux:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

{{< image "self_host_hermes_agent_free_openrouter/install_hermes_agent.webp" "The Hermes Agent installer detecting macOS and provisioning uv, Python 3.11, Node.js, ripgrep and ffmpeg" >}}

Windows users run `iex (irm https://hermes-agent.nousresearch.com/install.ps1)` in PowerShell instead. Git is the only prerequisite on non-Windows platforms, plus `curl` and `xz-utils` on Linux; the installer pulls `uv`, Python 3.11, Node.js, ripgrep and ffmpeg itself. Code lands in `~/.hermes/hermes-agent/`, the launcher in `~/.local/bin/hermes`, your data in `~/.hermes/`.

### Step 3: Store the key and choose the model

Reload your shell first (`source ~/.zshrc` or `source ~/.bashrc`), then hand the key to the CLI, which writes it to `~/.hermes/.env`:

```bash
hermes config set OPENROUTER_API_KEY sk-or-...
```

{{< image "self_host_hermes_agent_free_openrouter/set_openrouter_apikey.webp" "hermes config set OPENROUTER_API_KEY confirming the key was written to ~/.hermes/.env" >}}

The model itself goes in `~/.hermes/config.yaml`:

```yaml
model:
  provider: openrouter
  default: z-ai/glm-5.2:free
```

`hermes model` walks through both interactively and is what you want when adding a provider for the first time.

### Step 4: Start it

```bash
hermes doctor   # confirm the install before spending a request
hermes          # start chatting
```

{{< image "self_host_hermes_agent_free_openrouter/run_hermes_cli.webp" "The Hermes CLI after a model switch, showing provider, context window, capabilities and a live session" >}}

The banner names the provider, the detected context window and the model's capabilities, which is the fastest way to confirm the free model actually loaded. To try another model, run `hermes chat --provider openrouter --model nvidia/nemotron-3.5-lightning:free`. Inside a session, `/model openrouter:<model-id>` switches for that session and `--global` persists it.

## The real limit is requests, not tokens

Free models cost nothing per token, but the request caps are firm: **20 requests per minute** regardless of account status, **50 per day** if you have never bought credits, and **1,000 per day** once you have purchased at least $10 in credits at any point. The per-minute cap does not move with credits; the daily one moves permanently.

The Hermes docs warn that small free quotas "can be exhausted after a handful of agent turns, because Hermes may make several model calls per user turn." Ask it to fix a bug and it reads files, runs a command, reads the output, edits, re-runs - each one a request. On top of that Hermes runs auxiliary tasks alongside the main loop (context compression, session titles, vision, web summarization and more, eleven slots in total), and by default every one of them goes to your main model and spends from the same budget. Fifty requests per day is a demo. One thousand is a working assistant.

The single most useful setting is a fallback chain across models served by different providers:

```yaml
fallback_providers:
  - provider: openrouter
    model: minimax/minimax-m3:free
  - provider: openrouter
    model: nvidia/nemotron-3-ultra-550b-a55b:free
```

Fallback fires on HTTP 429 after retries, on 500, 502 and 503 after retries, and immediately on 401, 403 and 404, swapping model and provider mid-turn without losing the conversation. A rate limit is a 429, so this is what keeps a turn alive when you hit the wall. It is turn-scoped and activates at most once per turn, and the same chain covers auxiliary tasks left on `provider: auto`, so a free-only chain keeps those free too.

Beyond that, trim the toolset with `hermes tools`, since every enabled toolset and skill description rides along in each request. `hermes setup` also has a **Blank Slate** mode that starts with everything off but the provider, file operations and terminal.

## Which free model to start with

**Start with `z-ai/glm-5.2:free`.** It gives you 256K context, structured outputs and `tool_choice: required` on a model built for long-horizon agent work, at 99.8% uptime over the past day. Back it with the chain above, which puts MiniMax M3 and Nemotron 3 Ultra on two more serving providers, so a rate limit on one does not stall the turn.

Swap the primary to taste from there. **Laguna S 2.1** and Cohere's **North Mini Code** are purpose-built agentic coders; **Nemotron 3.5 Lightning** activates 3B of 30B parameters when latency beats depth; **Nemotron 3 Ultra** and **Inkling** are the heavyweights for hard reasoning. Skip `liquid/lfm-2.5-2.6b:free`, which clears the floor by 1,536 tokens and whose own card advises against agentic coding. Broader rankings are in {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" >}}the open-weight coding model comparison{{< /link >}}.

## Reach your agent from anywhere

An agent that lives in one terminal window is missing most of the point. Hermes ships an OpenAI-compatible API server, so Open WebUI, LobeChat, a phone app or your own script can drive it with the full toolset. Add two lines to `~/.hermes/.env`, then start the gateway:

```bash
API_SERVER_ENABLED=true
API_SERVER_KEY=<a long random string>
```

{{< image "self_host_hermes_agent_free_openrouter/set_api_server_key.webp" "The ~/.hermes/.env file with OPENROUTER_API_KEY, API_SERVER_ENABLED and API_SERVER_KEY set, secrets redacted" >}}

```bash
hermes gateway
```

{{< image "self_host_hermes_agent_free_openrouter/hermes_gateway.webp" "hermes gateway starting up and printing capability-probe warnings for tools whose prerequisites are missing" >}}

The wall of `check_fn ... returned False` warnings is not an error. Those are capability probes: no Discord token, no browser installed, no image provider, so Hermes skips those tools for the run. It prints `[API Server] API server listening on http://127.0.0.1:8642` and answers on `/v1/chat/completions` with `hermes-agent` as the model name. Opening `http://127.0.0.1:8642/` in a browser returns 404, which is correct - this is an API, not a web UI, and `/health` and `/v1/*` are the routes.

{{< image "self_host_hermes_agent_free_openrouter/call_chat_api_using_localhost.webp" "A POST to http://localhost:8642/v1/chat/completions returning 200 OK with a chat.completion response from hermes-agent" >}}

That loopback bind is the right default and also why it is invisible from your phone. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} publishes it over an outbound SSH connection, so nothing changes on your router and the machine can sit behind CGNAT:

```bash
ssh -p 443 -R0:127.0.0.1:8642 free.pinggy.io
```

{{< image "self_host_hermes_agent_free_openrouter/pinggy_tunnel_url.webp" "Pinggy printing the public HTTPS URLs for the tunnel along with the 60-minute free-tier notice" >}}

Point any OpenAI-compatible client at `https://<your-tunnel>/v1` with the same bearer token, and you are talking to your own agent from anywhere. The mechanism is a plain {{< link href="/blog/ssh_reverse_tunnelling/" >}}SSH reverse tunnel{{< /link >}}.

{{< image "self_host_hermes_agent_free_openrouter/call_chat_api_using_pinggy_url.webp" "The same chat completion request sent to the public Pinggy URL, returning 200 OK from the self-hosted agent" >}}

Pinggy also ships as an official Hermes skill (`hermes skills install official/devops/pinggy-tunnel`), so the agent can open its own tunnels when a task needs a public URL, such as catching a webhook mid-run. Free tunnels stop after 60 minutes and change hostname on reconnect, so an always-on setup wants a Pro token and a service manager.

## What to watch out for

**The daily cap is the ceiling on ambition.** A long autonomous task can burn a hundred requests without finishing, and cron jobs and subagents multiply that.

**Free endpoints are not a contract.** Single endpoint, no SLA, and they disappear - the Hermes doc example that no longer resolves is the normal lifecycle, not an outlier.

**Read the data policy.** Discounted inference and permissive data policies travel together. Hermes guards the explicit version: models with a `-contributor` suffix, where the vendor may train on your prompts, need confirmation, and unattended cron runs fail closed until you set `security.allow_data_training_tiers_noninteractive`.

**Sandbox the shell.** This agent runs terminal commands and the API server exposes that over HTTP, so `hermes config set terminal.backend docker` is a reasonable default for an agent driven by a model you have not evaluated.

## Conclusion

The interesting part is not that it is free. It is that the free part is the model, the one component you swap in a single line when the catalog changes, while the agent, its memory and its skills stay on your machine.

Start narrow: install Hermes, put `z-ai/glm-5.2:free` in `config.yaml`, add two free models as fallbacks, and give it a real task before enabling anything extra. If the request budget turns out to be the binding constraint, $10 of credits moves you from 50 to 1,000 requests a day, which will do more than any model swap. The {{< link href="https://pinggy.io/docs/" >}}Pinggy documentation{{< /link >}} covers persistent subdomains and the other tunnel types.
