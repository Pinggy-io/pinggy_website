---
title: "Your AI Agent Is Burning Too Many Tokens. Headroom Fixes That."
description: "Headroom is an open-source LLM context compression tool that cuts token usage by 60-95% with no accuracy loss. Built by a Netflix engineer, it went viral in 2026 with 43K stars. This post explains how it works and how to use it."
date: 2026-06-20T09:00:00+05:30
lastmod: 2026-06-20T09:00:00+05:30
draft: false
tags: ["LLM", "token compression", "AI agents", "developer tools", "open source", "cost optimization", "Claude", "Codex", "MCP", "Pinggy"]
categories: ["AI", "Development", "Developer Tools"]
og_image: "images/headroom_llm_token_compression/headroom_banner.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEN1dCBMTE0gVG9rZW4gQ29zdHMgd2l0aCBIZWFkcm9vbSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIGFuZCB1c2luZyBIZWFkcm9vbSwgdGhlIG9wZW4tc291cmNlIGNvbnRleHQgY29tcHJlc3Npb24gdG9vbCwgdG8gcmVkdWNlIExMTSB0b2tlbiB1c2FnZSBieSA2MC05NSUgd2l0aG91dCBkZWdyYWRpbmcgb3V0cHV0IHF1YWxpdHkuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgSGVhZHJvb20iLAogICAgICAidGV4dCI6ICJJbnN0YWxsIHRoZSBoZWFkcm9vbS1haSBwYWNrYWdlIHZpYSBwaXAgaW5zdGFsbCAnaGVhZHJvb20tYWlbYWxsXScgYW5kIGNvbmZpcm0gdGhlIGluc3RhbGxhdGlvbiB3aXRoIGhlYWRyb29tIC0tdmVyc2lvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiV3JhcCB5b3VyIEFJIGNvZGluZyBhZ2VudCIsCiAgICAgICJ0ZXh0IjogIlJ1biBoZWFkcm9vbSB3cmFwIGNsYXVkZSAob3IgY29kZXgsIGN1cnNvciwgb3IgYWlkZXIpIHRvIGludGVyY2VwdCByZXF1ZXN0cyBhbmQgY29tcHJlc3MgY29udGV4dCBiZWZvcmUgaXQgcmVhY2hlcyB0aGUgTExNIHByb3ZpZGVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgbG9jYWwgcHJveHkiLAogICAgICAidGV4dCI6ICJSdW4gaGVhZHJvb20gcHJveHkgLS1wb3J0IDg3ODcgdG8gc3RhcnQgYW4gT3BlbkFJLWNvbXBhdGlibGUgcHJveHkgdGhhdCBjb21wcmVzc2VzIGV2ZXJ5IHJlcXVlc3QgcGFzc2luZyB0aHJvdWdoIGl0IHdpdGggemVybyBjb2RlIGNoYW5nZXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk1lYXN1cmUgeW91ciBzYXZpbmdzIiwKICAgICAgInRleHQiOiAiUnVuIGhlYWRyb29tIHBlcmYgdG8gc2VlIGEgcmVhbC10aW1lIGJyZWFrZG93biBvZiB0b2tlbiBzYXZpbmdzIGFjcm9zcyB5b3VyIHJlY2VudCBzZXNzaW9ucywgaW5jbHVkaW5nIHBlci1jb250ZW50LXR5cGUgcmVkdWN0aW9uIHJhdGVzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTaGFyZSB0aGUgcHJveHkgd2l0aCB5b3VyIHRlYW0gdmlhIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIkV4cG9zZSB5b3VyIGxvY2FsIEhlYWRyb29tIHByb3h5IG92ZXIgdGhlIGludGVybmV0IGJ5IHJ1bm5pbmcgc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0Ojg3ODcgZnJlZS5waW5nZ3kuaW8sIHRoZW4gc2hhcmUgdGhlIGdlbmVyYXRlZCBIVFRQUyBVUkwgd2l0aCB0ZWFtbWF0ZXMgc28gdGhleSBhbGwgYmVuZWZpdCBmcm9tIGEgc2luZ2xlIHNoYXJlZCBjb21wcmVzc2lvbiBwcm94eS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "headroom_llm_token_compression/headroom_banner.png" "Headroom: Cut Your LLM Token Bills by 90% - open source context compression tool" >}}

A senior Netflix engineer named Tejas Chopra was spending $200 a day on tool-heavy agent runs. Not $200 a month - $200 a day. He dug into his token logs and found the culprit: his AI agents were sending enormous tool outputs, full server logs, and verbose JSON blobs to the LLM on every turn, most of which the model didn't actually need to produce the right answer.

So he built <a href="https://github.com/chopratejas/headroom" target="_blank">Headroom</a>, an open-source compression layer that sits between your AI application and the LLM, stripping redundancy before it reaches the provider. He open-sourced it in early 2026, and it immediately hit the front page of Hacker News. As of today it has 43,000+ GitHub stars and has collectively saved its users an estimated $700,000 in token costs.

{{% tldr %}}
Headroom is a local compression proxy/library that reduces LLM input tokens by 60-95% with no meaningful degradation in answer quality. It detects content type (JSON, code, logs, prose) and applies specialized compressors to each.

**Quick start - wrap your agent with one command:**
```bash
pip install "headroom-ai[all]"
headroom wrap claude    # or: codex, cursor, aider, copilot
```

**Proxy mode (zero code changes, any app):**
```bash
headroom proxy --port 8787
# point your OPENAI_BASE_URL to http://localhost:8787
```

**Share your proxy with teammates via Pinggy:**
```bash
ssh -p 443 -R0:localhost:8787 free.pinggy.io
```

Real-world numbers from the project: SRE incident debugging went from 65,694 tokens to 5,118 (92% reduction). Code search: 17,765 to 1,408 tokens. Same answers. Benchmarks on GSM8K and TruthfulQA show zero accuracy regression.
{{% /tldr %}}

## The context window problem nobody talks about

Everyone is optimizing models. Longer context windows, faster inference, cheaper pricing per million tokens. But there's a less glamorous problem that eats most teams' AI budgets: agents are absolutely wasteful with what they send.

A typical agentic loop does a file read, gets 4,000 tokens of boilerplate back. Runs a shell command, gets 2,000 tokens of logs with timestamps and repeated stack traces. Queries a database, gets the same schema header on every row. Calls an MCP tool, gets a deeply nested JSON response where 80% of the fields are null. None of that needs to hit the model in full. The model just needs the signal.

This isn't a hypothetical problem. Earlier this year, Uber reportedly blew through its annual AI coding tool budget in a few months - a phenomenon that someone dubbed "tokenmaxxing." Enterprise teams have started capping Claude licenses and enforcing per-developer spend limits.

Headroom is the practical answer to this: compress what your agent sends, not by truncating it or summarizing it with another LLM, but by algorithmically removing redundancy while preserving the semantics the model cares about.

## How it works

{{< image "headroom_llm_token_compression/headroom_architecture.png" "Headroom architecture: ContentRouter dispatches to specialized compressors before tokens reach the LLM API" >}}

Headroom's pipeline starts with a **ContentRouter** that classifies incoming content and dispatches it to one of several specialized compressors:

**SmartCrusher** handles JSON. It understands arrays, nested objects, and mixed types - it can strip repeated keys, collapse null fields, and abbreviate deeply nested structures that carry mostly structural noise.

**CodeCompressor** is AST-aware. For Python, JavaScript, Go, Rust, Java, and C++, it parses the actual syntax tree rather than treating the code as text. This means it can remove docstrings, collapse function bodies the model doesn't need to see, and strip redundant whitespace in a semantically correct way.

**Kompress-base** is a small ML model trained specifically on agentic traces - logs, prose outputs, tool results. It handles the stuff that doesn't fit neatly into "JSON" or "code." Think shell output, error messages, database query results.

**CacheAligner** stabilizes token prefixes so you get better KV cache hits from your LLM provider. This one is subtle but real: if your system prompt tokens shift slightly each turn, you lose cached computation and pay for it again. CacheAligner normalizes the prefix structure so the provider can reuse cached states.

Finally, **CCR (Cached Compression Retrieval)** handles reversibility. The original content is cached locally. If the model needs the full version, it can call a `headroom_retrieve` tool to get it back. Nothing is thrown away - it's just not sent by default.

## The actual numbers

The benchmarks that matter are the real-world ones, not the synthetic ones:

| Task | Before | After | Reduction |
|------|--------|-------|-----------|
| SRE incident debugging | 65,694 tokens | 5,118 tokens | 92% |
| Code search | 17,765 tokens | 1,408 tokens | 92% |
| GitHub issue triage | 54,174 tokens | 14,761 tokens | 73% |
| Codebase exploration | 78,502 tokens | 41,254 tokens | 47% |

The tasks where Headroom helps most are exactly the agentic workflows where agents read a lot but act on a fraction: log triage, code search, documentation lookup, tool-heavy debugging sessions.

For accuracy, the project benchmarks on standard evals. GSM8K (grade school math): no regression. TruthfulQA: actually improved slightly (0.530 → 0.560), probably because removing noise helps the model focus. SQuAD v2 QA: 97% accuracy at 19% compression. BFCL tool-use: 97% accuracy at 32% compression.

One honest caveat: these benchmarks are on Headroom's own test suite. You should run `headroom perf` on your own workload to see what compression rate your specific tasks actually get. Codebase exploration at 47% is much less dramatic than SRE debugging at 92%.

## Four ways to use it

### 1. Wrap mode (fastest to try)

If you use Claude Code, Codex, Cursor, or Aider from the terminal, you can drop Headroom in with a single command prefix:

```bash
pip install "headroom-ai[all]"
headroom wrap claude    # wraps claude code
headroom wrap codex     # wraps codex
headroom wrap cursor    # wraps cursor
headroom wrap aider     # wraps aider
```

Every session you run through `headroom wrap` gets compression applied automatically. Run `headroom perf` afterward to see the stats for that session.

### 2. Proxy mode (zero code changes for any app)

For apps that already talk to the OpenAI API or a compatible endpoint, proxy mode requires no code changes at all. You start the proxy:

```bash
headroom proxy --port 8787
```

Then point your application's base URL at it:

```bash
export OPENAI_BASE_URL=http://localhost:8787
```

Any request that would normally go to `api.openai.com` now goes through Headroom first, gets compressed, and then forwarded to the real provider. The response comes back and passes through normally.

You can also enable output token reduction, which appends brevity instructions and routes routine steps (like simple file reads) to lower-effort model modes:

```bash
export HEADROOM_OUTPUT_SHAPER=1
headroom proxy --port 8787
```

### 3. MCP server mode

If your agent uses the Model Context Protocol, Headroom exposes itself as an MCP server with three tools: `headroom_compress`, `headroom_retrieve`, and `headroom_stats`. Your agent can explicitly call compress on tool outputs before stuffing them into context, and retrieve originals on demand when it needs the full version.

This mode is the most surgical - you control exactly what gets compressed and when, rather than letting Headroom intercept everything transparently.

### 4. Library mode (Python / TypeScript)

For tight integration into your own agent code:

```python
from headroom import compress

compressed_messages = compress(messages, model="claude-sonnet-4-6")
response = anthropic.messages.create(messages=compressed_messages, ...)
```

TypeScript:

```typescript
import { compress } from 'headroom-ai';

const compressed = await compress(messages, { model: 'claude-sonnet-4-6' });
```

This gives you full control and is the right choice if you're building your own agent framework rather than wrapping an existing tool.

## Sharing your Headroom proxy with a team (or a remote dev environment)

Here's where things get more interesting for team setups. Running `headroom proxy` starts a local server that only your machine can reach. If you're on a team and you want everyone to benefit from the same compression proxy - or if you work in a remote environment like GitHub Codespaces, a cloud VM, or Google Colab - you need to expose that local proxy to the network.

[Pinggy](https://pinggy.io) is the fast way to do this. Run the proxy on your machine and then expose it with a single SSH command:

```bash
# Terminal 1: start the Headroom proxy
headroom proxy --port 8787

# Terminal 2: expose it via Pinggy
ssh -p 443 -R0:localhost:8787 free.pinggy.io
```

Pinggy gives you a public HTTPS URL like `https://abcdef.a.pinggy.link`. Teammates point their `OPENAI_BASE_URL` at that URL and every request they make to the LLM gets compressed before it leaves their machine.

This matters for a few real scenarios:

**Shared team proxy**: one person runs Headroom (say, on a dev server), everyone else points their coding agents at the Pinggy URL. You get centralized token accounting via `headroom perf` too.

**Remote dev environments**: your Codespace or cloud box can't reach `localhost:8787` on your laptop. The Pinggy URL is reachable from anywhere, so you can run the proxy on a beefier local or shared machine and route remote agents through it.

**Testing with a remote LLM app**: if you have a deployed application you want to run through Headroom (for a benchmark or a cost comparison), point its `OPENAI_BASE_URL` at your Pinggy URL without redeploying.

Before sharing the URL, add authentication so random traffic can't use your proxy:

```bash
ssh -p 443 -R0:localhost:8787 -t free.pinggy.io -- --key-auth
```

Pinggy will show you the key to include as a header when connecting.

## What doesn't work well

**Low-compression tasks**: codebase exploration gets 47% reduction vs. 92% for log triage. If your agent is reading densely packed source code that's all signal and no noise, compression helps less. Don't expect dramatic numbers on every workflow.

**Context-dependent reasoning**: Headroom assumes you can strip the parts of the input the model doesn't need. That assumption holds for structured outputs (JSON, logs, tool results) but is shakier for cases where the model genuinely needs full prose context to reason correctly. Run evals on your specific tasks before committing to it in production.

**Output compression is experimental**: the output token reduction feature (brevity steering + effort routing) is marked as having "honest estimates with confidence ranges" rather than guaranteed reduction. The input compression side is battle-tested; output shaping is newer.

**You're adding a local dependency**: if Headroom crashes, your agent calls fail at the proxy. In proxy mode, this is a single point of failure for the whole pipeline. Design for it.

## Verdict

For tool-heavy agentic workflows - SRE debugging, code search, issue triage, anything that reads lots of structured output - Headroom is the kind of optimization that pays for itself in the first afternoon. The `headroom wrap claude` path takes about 90 seconds to set up and shows you exactly how many tokens you're saving in real time.

The library mode takes more integration work but gives you the most control. The MCP server mode fits naturally if you're already building on Model Context Protocol.

At 43,000 stars and $700,000 in collective savings, this one has been well stress-tested by the community. Worth a look before you reach for the bigger hardware or a different model tier.

The <a href="https://github.com/chopratejas/headroom" target="_blank">Headroom repository</a> is on GitHub under Apache 2.0.
