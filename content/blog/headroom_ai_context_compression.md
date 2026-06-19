---
title: "Headroom: Cut Your AI Agent Token Costs by 92%"
description: "Headroom is an open-source context compression layer that reduces AI agent token usage by 60-95% before requests hit the LLM. Here's how it works, how to set it up, and how to share it across your team with Pinggy."
date: 2026-06-18T10:00:00+05:30
lastmod: 2026-06-18T10:00:00+05:30
draft: false
tags: ["AI agents", "token optimization", "LLM cost reduction", "context compression", "headroom", "Claude Code", "developer tools", "AI infrastructure"]
categories: ["AI", "Development", "Developer Tools"]
og_image: "images/headroom_ai_context_compression/headroom_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNldCBVcCBIZWFkcm9vbSBDb250ZXh0IENvbXByZXNzaW9uIGZvciBBSSBBZ2VudHMiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW5zdGFsbGluZyBhbmQgY29uZmlndXJpbmcgSGVhZHJvb24gdG8gcmVkdWNlIEFJIGFnZW50IHRva2VuIGNvc3RzIGJ5IDYwLTk1JSB1c2luZyBwcm94eSwgTUNQIHNlcnZlciwgb3IgYWdlbnQgd3JhcHBlciBtb2RlLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIEhlYWRyb29tIiwKICAgICAgInRleHQiOiAiUnVuIHBpcCBpbnN0YWxsIGhlYWRyb29tLWFpW2FsbF0gZm9yIFB5dGhvbiBvciBucG0gaW5zdGFsbCBoZWFkcm9vbS1haSBmb3IgTm9kZS5qcyB0byBpbnN0YWxsIHRoZSBsaWJyYXJ5IGFuZCBhbGwgY29tcHJlc3Npb24gZW5naW5lcy4gUmVxdWlyZXMgUHl0aG9uIDMuMTArLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgY29tcHJlc3Npb24gcHJveHkiLAogICAgICAidGV4dCI6ICJSdW4gaGVhZHJvb20gcHJveHkgLS1wb3J0IDg3ODcgdG8gc3RhcnQgYSBsb2NhbCBPcGVuQUktY29tcGF0aWJsZSBwcm94eSB0aGF0IGNvbXByZXNzZXMgZXZlcnkgcmVxdWVzdCBiZWZvcmUgZm9yd2FyZGluZyBpdCB0byB0aGUgTExNIHByb3ZpZGVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQb2ludCB5b3VyIEFJIHRvb2wgdG8gdGhlIHByb3h5IiwKICAgICAgInRleHQiOiAiU2V0IHRoZSBiYXNlIFVSTCBvZiB5b3VyIEFJIGNsaWVudCB0byBodHRwOi8vbG9jYWxob3N0Ojg3ODcvdjEgYW5kIHVzZSB5b3VyIGV4aXN0aW5nIEFQSSBrZXkuIE5vIG90aGVyIGNvZGUgY2hhbmdlcyBuZWVkZWQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIGNvbXByZXNzaW9uIHN0YXRzIiwKICAgICAgInRleHQiOiAiUnVuIGhlYWRyb29tIHN0YXRzIHRvIHNlZSB0b2tlbiBzYXZpbmdzLCBjb21wcmVzc2lvbiByYXRpb3MsIGFuZCBlc3RpbWF0ZWQgY29zdCByZWR1Y3Rpb25zIGFjcm9zcyB5b3VyIGN1cnJlbnQgYW5kIHBhc3Qgc2Vzc2lvbnMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNoYXJlIHRoZSBwcm94eSB3aXRoIHlvdXIgdGVhbSB1c2luZyBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0Ojg3ODcgLUw0MzAwOmxvY2FsaG9zdDo0MzAwIC10IGZyZWUucGluZ2d5LmlvIHRvIGV4cG9zZSB5b3VyIGhlYWRyb29tIHByb3h5IHRvIGEgcHVibGljIEhUVFBTIFVSTCBzbyByZW1vdGUgQUkgY2xpZW50cyBhbmQgdGVhbW1hdGVzIGNhbiBhbHNvIGJlbmVmaXQgZnJvbSBjb21wcmVzc2lvbi4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "headroom_ai_context_compression/headroom_banner.webp" "Headroom: Cut Your AI Agent Token Costs by 92%" >}}

A repo called <a href="https://github.com/chopratejas/headroom" target="_blank">headroom</a> appeared on GitHub on June 16, 2026, and picked up nearly 4,000 stars in a single day - faster than almost anything in the AI tooling space this year. The pitch is simple: compress everything your AI agent reads before it reaches the model, and keep 60-95% of your tokens without losing the answers.

If you run Claude Code, Cursor, or any OpenAI-compatible agent against real codebases, you know where the bills come from. It isn't clever prompts or long conversations - it's the blizzard of tool outputs, search results, log dumps, and RAG chunks that accumulates when an agent is doing real work. A single SRE debugging session can blow past 65,000 tokens before the agent types its first `grep`. Headroom tackles that accumulation before it reaches the API.

{{% tldr %}}
<a href="https://github.com/chopratejas/headroom" target="_blank">Headroom</a> is an open-source context compression layer that sits between your AI agent and the LLM API. It compresses tool outputs, logs, files, and conversation history locally before forwarding them to the model.

- Install: `pip install "headroom-ai[all]"` (Python 3.10+) or `npm install headroom-ai`
- Start proxy: `headroom proxy --port 8787` - then point any OpenAI-compatible client at `http://localhost:8787/v1`
- Wrap Claude Code directly: `headroom wrap claude`
- Install as MCP server: `headroom mcp install`
- Benchmarked: 17,765 tokens down to 1,408 on a code search workload (92% savings), accuracy preserved on GSM8K and TruthfulQA
- Share your proxy across your team with a Pinggy tunnel: `ssh -p 443 -R0:localhost:8787 free.pinggy.io`
{{% /tldr %}}

## The actual problem headroom solves

Token billing is straightforward until agents start chaining tool calls. Here's what happens in practice.

Your agent searches a codebase for a function, gets back 100 results. Each result includes file paths, surrounding context, type signatures - easily 17,000 tokens for something that might answer the agent's question in 200 words if someone had summarized it. The agent reads the full dump, figures out three files matter, then searches again. By turn three, you're deep into a context window that costs real money.

The standard solutions are rough: truncate aggressively and risk cutting the relevant part, summarize with another LLM call (more cost, more latency), or just accept the bill. Headroom's answer is to compress at the source - before the bytes hit the API.

The key benchmark result is this: on a realistic code search workload, headroom reduces 17,765 tokens down to 1,408. That's a 92% reduction. On a multi-hour SRE debugging session with `kubectl` logs and stack traces, it took 65,694 tokens down to 5,118 - also 92%. GitHub issue triage came in at 73%, codebase exploration at 47%. The accuracy benchmarks (GSM8K, TruthfulQA, SQuAD v2) stay within noise of uncompressed baselines.

That last point matters. Lossy compression that cuts 90% of tokens but also cuts 20% of accuracy isn't useful. The benchmark numbers suggest headroom isn't doing that, though your mileage will vary based on workload type.

## How the compression pipeline works

Headroom runs a series of compressors depending on what kind of content it receives:

**SmartCrusher** handles JSON and structured data. Most tool outputs are JSON - API responses, database rows, config files, package manifests. SmartCrusher strips redundant keys, normalizes repeated structures, and strips null fields and padding without touching values that affect meaning.

**CodeCompressor** uses AST-aware compression for Python, JavaScript, Go, Rust, Java, and C++. Rather than treating source code as plain text, it parses the structure and can drop function bodies that weren't requested, collapse import blocks, and remove docstrings that duplicate type signatures. The agent still sees the skeleton of the code, just not the verbose parts it didn't ask for.

**Kompress-base** is a custom HuggingFace model trained on agentic traces specifically - not general text. General-purpose summarization models tend to drop the wrong things in technical contexts. A model that has seen thousands of debugging sessions knows that an error message's stack trace is more information-dense than the surrounding prose.

**CacheAligner** addresses a subtler cost: KV cache misses. If your system prompt contains a timestamp, session ID, or any dynamic value, the provider's KV cache can't reuse it across requests. CacheAligner detects these and moves them to a stable position, meaning the static parts of your prompt can actually hit the cache and save on inference latency and cost.

**CCR (reversible compression)** handles cases where the model actually needs the full original. When headroom compresses something, it caches the original locally. The LLM gets a `headroom_retrieve` tool it can call if it needs more detail from a compressed block. The agent decides when to fetch; headroom decides what to compress initially.

## Four ways to use it

### Proxy mode (zero code changes)

This is the fastest way to get started. Start headroom as a local OpenAI-compatible proxy:

```bash
pip install "headroom-ai[all]"
headroom proxy --port 8787
```

Then change only the base URL in your existing AI client:

```bash
export OPENAI_BASE_URL=http://localhost:8787/v1
export OPENAI_API_KEY=your-actual-key
```

Every request from every tool that respects `OPENAI_BASE_URL` now routes through headroom's compression pipeline before hitting the real API. No code changes in your application, no library imports.

### Agent wrapper mode

If you use specific tools rather than configuring base URLs:

```bash
headroom wrap claude      # Claude Code
headroom wrap aider       # Aider
headroom wrap cursor      # Cursor CLI
headroom wrap codex       # OpenAI Codex CLI
headroom wrap copilot     # GitHub Copilot CLI
```

This wraps the tool's process and intercepts API calls at the network layer, so even tools that hardcode their endpoint can be compressed.

### Library mode (for your own apps)

If you're building an agent yourself:

```python
from headroom import compress
from anthropic import Anthropic

client = Anthropic()
messages = [{"role": "user", "content": tool_output}]

# Compress before sending
compressed = compress(messages, model="claude-opus-4-8")
response = client.messages.create(model="claude-opus-4-8", messages=compressed)
```

Or with the SDK wrapper for automatic compression:

```python
from headroom.integrations.anthropic import withHeadroom
from anthropic import Anthropic

client = withHeadroom(Anthropic())
# Now all API calls are automatically compressed
```

Framework integrations exist for LangChain (`HeadroomChatModel`), LiteLLM (`HeadroomCallback`), Vercel AI SDK (`headroomMiddleware()`), and ASGI apps (`CompressionMiddleware`).

### MCP server mode

```bash
headroom mcp install
```

This registers headroom as an MCP server, exposing three tools: `headroom_compress`, `headroom_retrieve`, and `headroom_stats`. Any MCP-compatible client - Claude for Desktop, custom agent setups - can then call compression explicitly as a tool, and retrieve cached originals when needed.

## Checking what you're saving

```bash
headroom stats
```

This shows token savings by session, compression ratios per content type, and estimated cost deltas. The `output-savings` subcommand estimates how much output token reduction verbosity steering is contributing.

## Sharing your headroom proxy with Pinggy

Proxy mode works great when you and your AI tools are on the same machine. But as soon as a remote AI client enters the picture - a cloud-based agent, a teammate's Cursor install, an n8n workflow - `localhost:8787` isn't reachable.

One approach: run headroom on a server. But for development and prototyping, that's overkill. A faster option is to expose your local proxy publicly using a Pinggy SSH tunnel:

```bash
ssh -p 443 -R0:localhost:8787 -L4300:localhost:4300 -t free.pinggy.io
```

Pinggy creates a public HTTPS URL pointing at your local port 8787. You can share that URL with any OpenAI-compatible client - a teammate's agent, a cloud workflow, a mobile app's AI feature - and they route through your headroom proxy transparently.

{{< image "headroom_ai_context_compression/headroom_architecture.webp" "Architecture diagram showing headroom proxy with Pinggy tunnel connecting local and remote AI clients" >}}

The setup is:

1. Run `headroom proxy --port 8787` locally
2. Run the Pinggy command above to get a public URL like `https://abc123.a.pinggy.link`
3. Set `OPENAI_BASE_URL=https://abc123.a.pinggy.link/v1` in any remote client
4. All remote requests compress through your local headroom before hitting the LLM

For team setups where you want consistent compression behavior across environments, this is a quick way to share a single proxy configuration without standing up dedicated infrastructure.

A few things to be aware of: the Pinggy free tier tunnels are temporary and reset on restart. For something more permanent, use a Pinggy paid plan with a reserved domain, or run headroom on a persistent server. Also, everyone routing through your proxy shares your LLM API key unless you add authentication - Pinggy supports basic auth headers to gate access.

## What headroom learns over time

There's a `headroom learn` command that mines failed or degraded agent sessions and produces corrections that get written back to `CLAUDE.md` or `AGENTS.md`. The idea is that if the agent keeps failing a task because compressed output missed something important, headroom can note that this content type shouldn't be compressed as aggressively. It's early, but it addresses the main concern people have about compression: that it will silently drop the thing that mattered.

## Tradeoffs worth knowing

Compression isn't free. Headroom runs locally, which adds a few hundred milliseconds to each API call. For latency-sensitive use cases, that overhead matters. The ML-based compressors (`Kompress-base`) require a model download on first run - about 400MB. If you want just the rule-based compressors (SmartCrusher, CodeCompressor), install with `pip install "headroom-ai[code]"` and skip the ML extras.

The compression ratios also vary a lot by content type. Structured data like JSON and code compress aggressively. Natural language prose, already fairly dense, compresses much less. If your agent primarily processes prose - essays, documentation, emails - expect 20-40% savings rather than 90%.

One more thing: headroom is local-first by design. Your data never goes to a headroom server. The trade-off is that the model it uses for compression has to fit on your machine. If you're on a small VM without much RAM, the ML compressor may not be practical, and you'd stick to the rule-based ones.

## Is it worth it?

At Claude Opus-level pricing, the difference between 17,765 tokens and 1,408 tokens per tool call is real money. If you're running Claude Code sessions that routinely hit 100k+ tokens through code search and log analysis, the savings compound fast. A team running a few hundred agentic sessions per day could see meaningful monthly cost reductions without changing their tooling workflow at all.

The fact that it's local-first and runs as a transparent proxy is what makes it practically viable. You don't need to rewrite your agent, change models, or set up new infrastructure. You install it, start a proxy, change one environment variable, and watch the token counter drop.

<a href="https://github.com/chopratejas/headroom" target="_blank">Headroom on GitHub</a> - the README has detailed configuration options for each compression algorithm and framework integration guide.
