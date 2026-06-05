---
title: "Headroom: Why 90% of Your LLM Tokens Are Redundant"
description: "A Netflix engineer got a $287 Claude bill on a personal project, dug into the payloads, and found most of it was boilerplate JSON and repeated log entries. He built Headroom - an open-source context compression layer that cuts LLM token usage by 60-95% without changing your answers."
date: 2026-06-05T10:00:00+05:30
lastmod: 2026-06-04T10:00:00+05:30
draft: false
tags: ["LLM", "AI agents", "token cost optimization", "context compression", "open source", "developer tools", "Headroom", "AI infrastructure"]
categories: ["Technology", "AI Tools", "Developer Tools"]
og_image: "images/headroom_llm_context_compression/headroom_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEN1dCBMTE0gVG9rZW4gQ29zdHMgd2l0aCBIZWFkcm9vbSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIGFuZCB1c2luZyBIZWFkcm9vbSwgdGhlIG9wZW4tc291cmNlIGNvbnRleHQgY29tcHJlc3Npb24gbGF5ZXIgdGhhdCByZWR1Y2VzIExMTSB0b2tlbiB1c2FnZSBieSA2MC05NSUgYmVmb3JlIHByb21wdHMgcmVhY2ggdGhlIG1vZGVsLiIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTA2LTA0VDEwOjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgaGVhZHJvb20tYWkiLAogICAgICAidGV4dCI6ICJSdW4gcGlwIGluc3RhbGwgaGVhZHJvb20tYWlbYWxsXSBmb3IgUHl0aG9uLCBvciBucG0gaW5zdGFsbCBoZWFkcm9vbS1haSBmb3IgVHlwZVNjcmlwdC4gUHl0aG9uIDMuMTAgb3IgaGlnaGVyIGlzIHJlcXVpcmVkLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgcHJveHkiLAogICAgICAidGV4dCI6ICJSdW4gaGVhZHJvb20gcHJveHkgLS1wb3J0IDg3ODcgaW4gYSB0ZXJtaW5hbC4gVGhpcyBzdGFydHMgYSBkcm9wLWluIEhUVFAgcHJveHkgdGhhdCByZXF1aXJlcyB6ZXJvIGNvZGUgY2hhbmdlcyB0byB5b3VyIGV4aXN0aW5nIGFwcGxpY2F0aW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQb2ludCB5b3VyIGFwcGxpY2F0aW9uIGF0IHRoZSBwcm94eSIsCiAgICAgICJ0ZXh0IjogIkNoYW5nZSB5b3VyIGJhc2UgVVJMIGZyb20gdGhlIEFudGhyb3BpYyBvciBPcGVuQUkgZW5kcG9pbnQgdG8gaHR0cDovL2xvY2FsaG9zdDo4Nzg3L3YxLiBBbGwgcmVxdWVzdHMgd2lsbCBub3cgYmUgY29tcHJlc3NlZCBiZWZvcmUgcmVhY2hpbmcgdGhlIExMTS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiV3JhcCBhIGNvZGluZyBhZ2VudCIsCiAgICAgICJ0ZXh0IjogIlVzZSBoZWFkcm9vbSB3cmFwIGNsYXVkZSwgaGVhZHJvb20gd3JhcCBjb2RleCwgaGVhZHJvb20gd3JhcCBjdXJzb3IsIG9yIGhlYWRyb29tIHdyYXAgYWlkZXIgdG8gYXV0b21hdGljYWxseSBjb21wcmVzcyBhbGwgdHJhZmZpYyBmcm9tIGEgc3VwcG9ydGVkIGNvZGluZyBhZ2VudC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiTW9uaXRvciB0b2tlbiBzYXZpbmdzIiwKICAgICAgInRleHQiOiAiUmV2aWV3IHByb3h5IGxvZ3Mgb3IgY2FsbCB0aGUgaGVhZHJvb21fc3RhdHMgTUNQIHRvb2wgdG8gc2VlIGNvbXByZXNzaW9uIG1ldHJpY3MuIFR5cGljYWwgd29ya2xvYWRzIHNlZSA2MC05MiUgdG9rZW4gcmVkdWN0aW9uIG9uIGNvZGUgc2VhcmNoLCBsb2dzLCBhbmQgSlNPTiB0b29sIG91dHB1dHMuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

Tejas Chopra checked his AI API invoice for a personal project and found he'd spent $287 in a single month, almost entirely on Claude Sonnet. He pulled the receipts. The tokens were real - roughly 10 million of them. But when he started reading the actual payloads hitting the API, he found something uncomfortable: a lot of it was noise.

Not "noise" in the sense of bad prompts. Noise in the technical sense - verbosity that carried no signal. JSON fields repeated in every tool response. Nested API schemas the model would never use. Identical database rows. Log files where 9,800 out of 9,900 lines were the exact same message at different timestamps. His back-of-napkin math put the useful content at around 10-20% of total tokens sent.

He built [Headroom](https://github.com/chopratejas/headroom) to fix this. It landed on GitHub in January 2026 as v0.22, and it hit the #1 spot on GitHub Trending this week with over 3,000 stars gained in a single day. Several teams at Netflix use it informally, and users collectively report $700,000 saved - about 200 billion tokens freed since launch.

{{% tldr %}}
1. Headroom compresses tool outputs, logs, RAG chunks, and conversation history before they reach an LLM - typically 60-95% fewer tokens on agentic workloads.
2. The proxy mode requires zero code changes: `headroom proxy --port 8787`, then point your app at `localhost:8787`.
3. Coding agent wrappers: `headroom wrap claude`, `headroom wrap codex`, `headroom wrap aider`.
4. Compression is reversible - originals are stored locally and the LLM can retrieve them via an MCP tool if needed.
5. It's pre-1.0 software. Prose compression via the Kompress-base model is the least predictable part; test accuracy on your actual workload before relying on it in production.
{{% /tldr %}}

## What is actually eating your tokens

If you're running any kind of AI agent - a coding assistant, a RAG pipeline, an automated debugging workflow - you've probably hit this pattern without naming it.

A tool call returns a JSON response. The response has 40 fields. You need 3. The other 37 get tokenized and sent to the model anyway. Multiply that by dozens of tool calls per session, add conversation history that keeps growing, throw in RAG retrieval chunks with boilerplate metadata prefixes on every chunk, and a debugging session that should be 5,000 tokens ends up consuming 65,000.

The problem is structural. Most LLM APIs charge per token. Most tool outputs were designed for human consumption - verbose, well-formatted, explicit. Most agents pass these outputs through unmodified because the context window is big enough to fit them. Nobody's doing anything obviously wrong, but the cumulative effect is expensive. A 200k-token context window paired with Claude Opus pricing means a 3-hour agent session can run well past $50 before you look at the bill.

## How Headroom works

Headroom sits between your application and the LLM API as a transparent interception layer. Before your prompt reaches the model, it routes each piece of content through a compression pipeline.

**SmartCrusher** handles JSON - arrays, nested objects, mixed types. It uses statistical sampling to identify anomalies, errors, and high-signal values while collapsing the rest. If your tool returned 10,000 log lines with the same `ERROR: connection timeout`, SmartCrusher keeps 10 representative lines, a count, and the timestamp range. The model gets the shape of the data without the repetition.

**CodeCompressor** handles source code. It parses abstract syntax trees for Python, JavaScript, Go, Rust, Java, and C++, then strips redundant structure while preserving actual logic. Code compression typically runs around 80% reduction on real codebases. The AST approach means it doesn't just truncate - it understands what's boilerplate.

**Kompress-base** handles prose - conversation history, document chunks, free-form text. It's a HuggingFace model fine-tuned on agentic traces. This is the most opaque part of the pipeline. On benchmarks (GSM8K math, TruthfulQA), accuracy holds steady or slightly improves - but prose compression is harder to reason about than JSON compression, and the benchmarks may not reflect your specific workload.

**CacheAligner** is the less obvious piece. Anthropic and OpenAI both cache the KV state for repeated context prefixes - when your system prompt and conversation history match a cached entry, you get faster responses at lower cost. CacheAligner stabilizes message prefixes across turns so they're more likely to hit those caches consistently.

**CCR (Compress-Cache-Retrieve)** is the safety net. When Headroom compresses something, it stores the original locally - on Redis or SQLite, your choice. The LLM can call a `headroom_retrieve` MCP tool if it needs the full uncompressed version. This is what makes Headroom "reversible" compression rather than just lossy truncation: the model itself decides when it needs more detail.

## Getting started

Three integration modes. Pick based on how much you want to change.

**Proxy mode** - zero code changes. This is the right default for most people:

```bash
pip install "headroom-ai[all]"
headroom proxy --port 8787
```

Then set your base URL:

```bash
# for Claude Code or the Anthropic SDK
ANTHROPIC_BASE_URL=http://localhost:8787 claude

# or in code
client = anthropic.Anthropic(base_url="http://localhost:8787")
```

Everything else stays the same. You'll see compression stats in the proxy logs.

**Wrap mode** - if you're running a coding agent:

```bash
headroom wrap claude
headroom wrap codex
headroom wrap aider
headroom wrap cursor
```

This intercepts the agent's LLM traffic without touching any config files.

**Library mode** - for direct integration in Python or TypeScript:

```python
from headroom import compress

compressed_messages = compress(messages)
response = client.messages.create(
    model="claude-opus-4-8",
    messages=compressed_messages
)
```

**MCP server mode** gives the LLM itself access to compression and retrieval tools. Register it with `headroom mcp install`, and your MCP-compatible client gets `headroom_compress`, `headroom_retrieve`, and `headroom_stats` as callable tools.

## The numbers

Benchmarks from real agentic workloads, pulled from the project's documentation:

| Workload | Before | After | Reduction |
|---|---|---|---|
| SRE debugging session | 65,694 tokens | 5,118 tokens | 92% |
| Code search (large repo) | 17,765 tokens | 1,408 tokens | 92% |
| GitHub issue triage | 54,174 tokens | 14,761 tokens | 73% |
| 3-hour agent session | 78,502 tokens | 41,254 tokens | 47% |

By content type: code at 79.8%, JSON at 59.2%, logs at 31.0%.

The accuracy picture is clean on benchmarks: GSM8K math held at 0.870 (no change), TruthfulQA improved slightly from 0.530 to 0.560. Compression latency adds sub-millisecond to a few tens of milliseconds per request - negligible against the LLM's response time measured in seconds.

## What to watch for

It's v0.22, launched in January. There are real rough edges.

**Prose compression is the least predictable part.** SmartCrusher on JSON is deterministic - you can inspect what it does. The Kompress-base neural compression on free text is a model call with model-call behavior. If your context is primarily conversation history or long retrieved documents, run your own accuracy tests on your actual workload before putting this in a production path.

**Local-only storage.** Originals live on your machine (Redis or SQLite). Great for privacy - nothing leaves your box. Bad if you want the CCR retrieval to work across machines or in a distributed setup. That's a genuine architectural limitation for multi-machine agent workflows.

**The 60-95% range is wide.** The low end (60%) is what you get on mixed agentic sessions with diverse content. The high end (92%) is what you get on something like a log analysis run where 99% of the content is repetitive entries. What you'll actually see depends heavily on your specific tool outputs. The proxy mode makes it easy to measure: run a few sessions, look at the stats, form your own estimate.

**It solves overhead, not architecture.** Headroom reduces tokens on whatever you're sending. If the underlying problem is that your agent is retrieving entire files when it needs 10 lines, Headroom gives you a multiplier on a bad baseline. Fix the retrieval logic first. Headroom is for the residual noise that's genuinely hard to eliminate at the application layer.

## Bottom line

The core claim holds: a lot of what reaches your LLM is noise that the model would have filtered out anyway if you'd sent less. SmartCrusher's JSON compression in particular is the kind of thing that's obviously correct once you see it - of course you don't need 9,900 copies of the same log line.

The proxy mode makes experimentation cheap. No code changes, one command to start, compression stats visible in the logs. If your agent sessions routinely hit 50k+ tokens, a 20-minute test with the proxy is a reasonable use of time.

The $287 bill that started this whole thing is probably less surprising than the fact that nobody built this layer sooner. Token pricing has been around since GPT-3. Verbose tool outputs have been around just as long. The gap is finally getting closed.
