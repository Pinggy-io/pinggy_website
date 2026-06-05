---
title: "Headroom: Cut Your LLM Token Costs by 90% Without Touching Your Code"
description: "Headroom is an open-source tool by a Netflix engineer that compresses LLM context - tool outputs, logs, RAG chunks, and conversation history - by 60-95% before it reaches the model. Here's how it works and when to use it."
date: 2026-06-05T10:00:00+05:30
lastmod: 2026-06-04T10:00:00+05:30
draft: false
tags: ["LLM", "AI agents", "token optimization", "open source", "developer tools", "cost reduction", "context compression", "headroom"]
categories: ["Technology", "AI Tools", "Development"]
og_image: "images/headroom_llm_token_compression/headroom_banner.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEN1dCBMTE0gVG9rZW4gQ29zdHMgd2l0aCBIZWFkcm9vbSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIGFuZCB1c2luZyBIZWFkcm9vbSwgdGhlIG9wZW4tc291cmNlIGNvbnRleHQgY29tcHJlc3Npb24gdG9vbCB0aGF0IHJlZHVjZXMgTExNIEFQSSB0b2tlbiB1c2FnZSBieSA2MC05NSUgd2l0aG91dCBjaGFuZ2luZyB5b3VyIGFuc3dlcnMuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgSGVhZHJvb20iLAogICAgICAidGV4dCI6ICJJbnN0YWxsIHRoZSBoZWFkcm9vbS1haSBwYWNrYWdlOiBwaXAgaW5zdGFsbCAnaGVhZHJvb20tYWlbYWxsXScgZm9yIFB5dGhvbiBvciBucG0gaW5zdGFsbCBoZWFkcm9vbS1haSBmb3IgVHlwZVNjcmlwdC4gUmVxdWlyZXMgUHl0aG9uIDMuOSsgb3IgTm9kZSAxOCsuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIldyYXAgeW91ciBjb2RpbmcgYWdlbnQiLAogICAgICAidGV4dCI6ICJSdW4gaGVhZHJvb20gd3JhcCBjbGF1ZGUgKG9yIGFpZGVyLCBjb2RleCwgY3Vyc29yKSBmcm9tIHlvdXIgdGVybWluYWwuIEhlYWRyb29tIGludGVyY2VwdHMgdGhlIGFnZW50J3MgTExNIGNhbGxzIGFuZCBjb21wcmVzc2VzIGNvbnRleHQgYmVmb3JlIGVhY2ggcmVxdWVzdC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIHByb3h5IGZvciBhbnkgT3BlbkFJLWNvbXBhdGlibGUgY2xpZW50IiwKICAgICAgInRleHQiOiAiUnVuIGhlYWRyb29tIHByb3h5IC0tcG9ydCA4Nzg3LCB0aGVuIHBvaW50IHlvdXIgY2xpZW50J3MgYmFzZV91cmwgdG8gaHR0cDovL2xvY2FsaG9zdDo4Nzg3LiBObyBjb2RlIGNoYW5nZXMgcmVxdWlyZWQgLSBpdCBhY3RzIGFzIGEgdHJhbnNwYXJlbnQgY29tcHJlc3Npb24gbGF5ZXIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVzZSB0aGUgY29tcHJlc3MoKSBmdW5jdGlvbiBpbiB5b3VyIGNvZGUiLAogICAgICAidGV4dCI6ICJJbXBvcnQgYW5kIGNhbGwgY29tcHJlc3MobWVzc2FnZXMsIG1vZGVsPSdjbGF1ZGUtMy1zb25uZXQnKSBpbiBQeXRob24gYmVmb3JlIHNlbmRpbmcgbWVzc2FnZXMgdG8gYW55IExMTS4gVGhlIGZ1bmN0aW9uIHJldHVybnMgY29tcHJlc3NlZCBtZXNzYWdlcyByZWFkeSBmb3IgdGhlIEFQSSBjYWxsLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFbmFibGUgcmV2ZXJzaWJsZSBjb21wcmVzc2lvbiAoQ0NSKSIsCiAgICAgICJ0ZXh0IjogIlVzZSBDQ1IgbW9kZSBzbyB0aGUgTExNIGNhbiByZXRyaWV2ZSBvcmlnaW5hbCB1bmNvbXByZXNzZWQgY29udGVudCB2aWEgdGhlIGhlYWRyb29tX3JldHJpZXZlIHRvb2wgd2hlbiBpdCBuZWVkcyBmdWxsIGZpZGVsaXR5IGRldGFpbHMgZnJvbSBjb21wcmVzc2VkIHNlY3Rpb25zLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "headroom_llm_token_compression/headroom_banner.png" "Headroom: LLM context compression tool - cut token costs by 60-95%" >}}

By turn 10 of a typical AI agent conversation, you're paying for 100,000 tokens on every single LLM call. Most of those tokens are tool outputs, log dumps, and RAG chunks you already paid for in turn 2. This is the problem [Headroom](https://github.com/chopratejas/headroom) solves.

Headroom is an open-source context compression layer built by Tejas Chopra, a senior engineer at Netflix. It compresses everything your agent reads - tool call responses, log files, file contents, RAG chunks, conversation history - before any of it reaches the model. The headline number: 60-95% fewer tokens, with accuracy that holds steady on standard benchmarks.

The project hit Hacker News yesterday and shot to the top of GitHub's daily trending list with over 3,000 new stars in a single day. It has roughly 13,800 stars total as of June 5, 2026, and Chopra estimates it has saved users a collective $700,000 in API costs since its January release.

{{% tldr %}}
**Headroom** compresses LLM context (tool outputs, logs, RAG chunks) by 60-95% before it reaches the model.
- Install: `pip install "headroom-ai[all]"`
- Three modes: library function, transparent proxy, or agent wrapper
- Accuracy holds on GSM8K, TruthfulQA, SQuAD v2, and BFCL benchmarks
- Works with Claude Code, Cursor, Aider, Codex, and any OpenAI-compatible client
- Apache 2.0 license, runs entirely locally
{{% /tldr %}}

## The cost spiral nobody warned you about

When you build an agent that runs tools - file searches, API calls, database queries, grep across a codebase - you quickly run into a problem that isn't obvious from the documentation: tool responses are enormous.

A code search returning 100 results might produce 17,765 tokens worth of JSON. An incident debugging session pulling logs generates 65,694 tokens. An issue triage workflow that reads GitHub threads hits 54,174 tokens. And here's the painful part: on every subsequent LLM call in that conversation, those tokens get resent as part of the context window. If your agent makes 10 tool calls before finishing a task, you're paying for those 65,000 log tokens 10 times.

The obvious fixes all have catches. Truncation is fast but may cut the data the model actually needed. Summarization adds 400-600ms of latency and is lossy in ways that are hard to predict. Bigger context windows just delay the problem and cost more per token. Headroom takes a different approach: compress the source material deterministically, store the originals locally, and let the model retrieve specifics on demand.

## What gets compressed and by how much

Headroom ships with four specialized compression engines routed by a content detector:

**SmartCrusher** handles JSON and structured data. It uses an information-theoretic approach - specifically the Kneedle algorithm on bigram coverage curves - to find the point where additional items in an array stop contributing new information. A 50,000-token JSON response from a tool call commonly compresses to 5,000 tokens (90% reduction).

**CodeCompressor** is AST-aware and handles Python, JavaScript, Go, Rust, Java, and C++. Rather than applying generic text compression, it parses the syntax tree and strips or summarizes the structurally redundant parts while preserving semantics.

**LogCompressor** targets application logs, which tend to be highly repetitive. Server logs with repetitive patterns regularly hit 90%+ compression.

**Kompress-base** covers general prose text using a fine-tuned HuggingFace model for cases that don't fit the other three engines.

Measured against real workloads from the Headroom documentation:

| Workload | Original | Compressed | Reduction |
|---|---|---|---|
| Code search, 100 results | 17,765 tokens | 1,408 tokens | 92% |
| SRE incident log triage | 65,694 tokens | 5,118 tokens | 92% |
| GitHub issue thread | 54,174 tokens | 14,761 tokens | 73% |
| Application log file | 10,144 tokens | 1,260 tokens | 87.6% |

On accuracy benchmarks - GSM8K math reasoning, TruthfulQA, SQuAD v2, and BFCL tool-use - scores hold steady or improve slightly after compression, with deltas in the range of +/-0.000 to +0.030.

## CacheAligner: the part most people miss

Before routing content to the compression engines, Headroom runs everything through CacheAligner. This component stabilizes the prefix structure of each request so that Anthropic's and OpenAI's key-value caches actually hit.

Both providers offer significant discounts for cached input tokens - Anthropic applies a 90% read discount on cached prefixes via their prompt caching feature. In practice, agentic workflows break cache hits constantly because minor differences in conversation framing cause prefix mismatches. CacheAligner normalizes the prefix structure so the same logical content reuses the cached computation. Even without any compression savings, this alone is worth enabling if you're using Claude or GPT-4 at scale.

## Reversible compression: CCR

One legitimate concern with compressing context is that you might need the original detail later. Headroom's CCR (Compress, Cache, Retrieve) mode addresses this. When CCR is active, compressed content is stored locally and a `headroom_retrieve` tool is registered with the model. If the LLM determines it needs the full fidelity version of something - an exact function signature, a specific log line, a raw JSON field - it calls `headroom_retrieve` to fetch it from local storage.

This creates a system where the model operates on dense summaries for most reasoning steps and pulls originals only when precision matters, which is a fraction of the time in most workflows.

## Getting started

Install the package:

```bash
pip install "headroom-ai[all]"   # Python
# or
npm install headroom-ai           # TypeScript/Node
```

**Option 1: Wrap a coding agent (zero config)**

The easiest entry point if you use Claude Code, Aider, or Codex:

```bash
headroom wrap claude
# or
headroom wrap aider
headroom wrap codex
headroom wrap cursor
```

Headroom intercepts the agent's LLM calls and compresses context before each request. Nothing else changes in your workflow.

**Option 2: Drop-in proxy**

Start a local proxy on port 8787:

```bash
headroom proxy --port 8787
```

Then point any OpenAI-compatible client at `http://localhost:8787` instead of the real API endpoint:

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-key",
    base_url="http://localhost:8787"  # headroom proxy
)
```

No other code changes. The proxy compresses transparently and forwards to the real API.

**Option 3: Call compress() directly**

For tighter integration in your own agent code:

```python
from headroom import compress

messages = [
    {"role": "user", "content": "..."},
    {"role": "assistant", "content": "..."},
    # tool results with large payloads
]

compressed_messages = compress(messages, model="claude-3-5-sonnet-20241022")
response = anthropic_client.messages.create(
    model="claude-3-5-sonnet-20241022",
    messages=compressed_messages,
    max_tokens=1024
)
```

Headroom also integrates with LangChain, Agno, Strands, and LiteLLM, and ships an MCP server for use with any MCP-compatible host.

## When it helps and when it doesn't

Headroom shines when your agent consumes large, repetitive, or structured tool outputs - log files, API responses with many similar records, file contents, RAG chunks from a large document set. The compression ratios in those cases are consistently high.

It's less useful for workflows where each tool call returns small, unique text. If your tools return 200-token responses and you run 5 tool calls total, the overhead of the compression pipeline isn't worth it.

There's also a setup cost for CCR mode: Headroom stores originals locally, so you need to think about disk usage in long-running agent sessions. For one-off CLI interactions, the proxy or wrap mode is the right starting point.

The accuracy results are convincing, but it's worth running your own benchmarks on tasks that matter to you before committing. The project includes evaluation tooling for exactly this, and Chopra has been active on the GitHub issues when people report unexpected behavior.

## The bigger picture

What's interesting about Headroom as a project isn't just the compression numbers - it's the framing. Chopra published data showing that up to 90% of tokens sent to large language models in agentic workflows are redundant. That's a structural inefficiency baked into how most agent frameworks are built: tools return raw output, the framework appends it to context, and the whole thing gets re-sent on every call.

Headroom is a stopgap while the underlying model infrastructure catches up. Providers will eventually get better at selective retrieval, structured context management, and on-device caching. Until then, a 90% token reduction with no accuracy drop is a significant practical win, especially at the scale where API bills start becoming a line item in product discussions.

The code is at [github.com/chopratejas/headroom](https://github.com/chopratejas/headroom), Apache 2.0, with 1,400+ commits and active development as of v0.23.0 released June 4, 2026.
