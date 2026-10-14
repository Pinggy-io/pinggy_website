---
title: "How Hindsight Gives AI Agents a Memory That Survives Between Sessions"
description: "Hindsight is an open source memory server for AI agents. Here is how its retain, recall and reflect pipeline turns conversations into durable facts, and how to self-host it and reach it from another machine with a Pinggy tunnel."
date: 2026-09-28T09:00:00+05:30
lastmod: 2026-09-28T09:00:00+05:30
draft: false
tags: ["AI agents", "MCP", "self-hosted AI", "open source"]
og_image: "images/hindsight_ai_agent_memory/hindsight_ai_agent_memory_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBIaW5kc2lnaHQgR2l2ZXMgQUkgQWdlbnRzIGEgTWVtb3J5IFRoYXQgU3Vydml2ZXMgQmV0d2VlbiBTZXNzaW9ucyIsCiAgImRlc2NyaXB0aW9uIjogIkhpbmRzaWdodCBpcyBhbiBvcGVuIHNvdXJjZSBtZW1vcnkgc2VydmVyIGZvciBBSSBhZ2VudHMuIEhlcmUgaXMgaG93IGl0cyByZXRhaW4sIHJlY2FsbCBhbmQgcmVmbGVjdCBwaXBlbGluZSB0dXJucyBjb252ZXJzYXRpb25zIGludG8gZHVyYWJsZSBmYWN0cywgYW5kIGhvdyB0byBzZWxmLWhvc3QgaXQgYW5kIHJlYWNoIGl0IGZyb20gYW5vdGhlciBtYWNoaW5lIHdpdGggYSBQaW5nZ3kgdHVubmVsLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9oaW5kc2lnaHRfYWlfYWdlbnRfbWVtb3J5L2hpbmRzaWdodF9haV9hZ2VudF9tZW1vcnlfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiAgICB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0wOS0yOFQwOTowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTA5LTI4VDA5OjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvaGluZHNpZ2h0X2FpX2FnZW50X21lbW9yeS8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkFJIEFnZW50cyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiQUkgYWdlbnQgbWVtb3J5LCBIaW5kc2lnaHQsIHJldGFpbiByZWNhbGwgcmVmbGVjdCwgTUNQIHNlcnZlciwgYWdlbnQgbWVtb3J5IGJlbmNobWFyaywgc2VsZi1ob3N0ZWQgQUkgbWVtb3J5LCBMb25nTWVtRXZhbCIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJBZ2VudCBtZW1vcnkiLCAiZGVzY3JpcHRpb24iOiAiU3lzdGVtcyB0aGF0IGxldCBBSSBhZ2VudHMgc3RvcmUgYW5kIHJldHJpZXZlIGluZm9ybWF0aW9uIGFjcm9zcyBzZXNzaW9ucyBpbnN0ZWFkIG9mIHJlbHlpbmcgb25seSBvbiB0aGUgY29udGV4dCB3aW5kb3cuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJIaW5kc2lnaHQiLCAiZGVzY3JpcHRpb24iOiAiQW4gb3BlbiBzb3VyY2UgYWdlbnQgbWVtb3J5IHNlcnZlciBidWlsdCBieSBWZWN0b3JpemUgd2l0aCBhIHJldGFpbiwgcmVjYWxsIGFuZCByZWZsZWN0IHBpcGVsaW5lLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTW9kZWwgQ29udGV4dCBQcm90b2NvbCIsICJkZXNjcmlwdGlvbiI6ICJUaGUgcHJvdG9jb2wgQUkgY2xpZW50cyBsaWtlIENsYXVkZSBEZXNrdG9wIGFuZCBDbGF1ZGUgQ29kZSB1c2UgdG8gY2FsbCBleHRlcm5hbCB0b29scyBhbmQgc2VydmVycy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlNlbGYtaG9zdGluZyIsICJkZXNjcmlwdGlvbiI6ICJSdW5uaW5nIGEgc2VydmljZSBvbiB5b3VyIG93biBtYWNoaW5lIGluc3RlYWQgb2YgYSB2ZW5kb3IncyBjbG91ZC4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "hindsight_ai_agent_memory/hindsight_ai_agent_memory_banner.webp" "Give your AI agent a memory: how Hindsight's retain, recall, reflect pipeline carries a fact from one session into the next" >}}

Ask a coding agent the same question in two separate sessions and you can get two different answers, not because it changed its mind, but because it never wrote anything down. Close the terminal, and everything the agent inferred about your codebase, your preferences, or the bug you were chasing is gone. The next session starts from zero again.

{{< link href="https://github.com/vectorize-io/hindsight" >}}Hindsight{{< /link >}} is an open source attempt to fix that. It is a self-hostable memory server, not a bigger context window: instead of re-reading the whole conversation every time, an agent tells Hindsight what it learned, and later asks Hindsight what it knows. The project went open source in December 2025, shipped its latest patch release, v0.10.1, on September 21, 2026, and has picked up close to 40,000 GitHub stars in the nine months since. That is a fast climb for infrastructure, and it lines up with how much attention "agent memory" has been getting in 2026 as more people run long-lived coding agents instead of one-off chat sessions.

This post is about the mechanism, not the growth chart: how Hindsight decides what to keep, how it finds the right memory again later, and how you can run it yourself, including reaching it from a second machine with a Pinggy tunnel instead of paying for the hosted version just to get multi-device access.

{{% tldr %}}
1. **Hindsight is a memory server, not a vector database wrapper.** It runs three operations, `retain`, `recall` and `reflect`, on top of Postgres with `pgvector`.
2. **Retain uses an LLM to turn a sentence into structured memory**: facts, entities, relationships and dates, normalized before they are stored.
3. **Recall merges four search strategies** (semantic vectors, BM25 keywords, a graph of entities and time, and a plain time-range filter) with reciprocal rank fusion and a cross-encoder reranker, instead of relying on vector similarity alone.
4. **It runs locally in one Docker command**, exposing an HTTP API on port 8888 and a control plane UI on port 9999, with a built-in MCP server any MCP client can call.
5. **The project's own docs push multi-device access to their paid cloud tier.** A Pinggy tunnel gets you the same result, a real HTTPS URL for your local MCP endpoint, for free, without giving up self-hosting.
{{% /tldr %}}

## Why agents forget everything between sessions

Most AI coding agents have no memory of their own. What looks like memory inside a single conversation is really the model re-reading the entire transcript on every turn: every tool call, every file it read, every mistake it made and corrected. That is why a long session gets slower and more expensive as it goes, and why a fresh session starts back at zero the moment you close the terminal or hit a context limit.

The common workaround is a vector database: embed everything the agent has seen, and do a similarity search before each prompt. That helps with "what did we talk about," but it is bad at the things people actually want an agent to remember, like "this project's tests live in `tests/`, not `test/`" (a fact, not a passage of text), or "she asked me not to touch the billing module without asking first" (a standing instruction, not a similar-sounding sentence). Plain vector search returns text that resembles the query. It does not distinguish a fact from an opinion, track when something stopped being true, or connect two memories that mention the same person under different names.

Hindsight's pitch is to treat memory as a small pipeline instead of a single similarity lookup: extract structured information on the way in (`retain`), combine several retrieval strategies on the way out (`recall`), and periodically go back over what it has stored to build higher-level understanding (`reflect`).

## What happens when Hindsight retains a memory

{{< image "hindsight_ai_agent_memory/hindsight_retain_pipeline.webp" "Diagram of Hindsight's retain pipeline: a sentence goes through LLM extraction into facts, relationships and temporal data, then gets canonicalized into the memory store" >}}

*Retain does not just embed the sentence. It extracts facts, entities and dates from it first.*

Say an agent working in your repository picks up a detail worth keeping: "This repo's tests live in `tests/`, not `test/`." Handing that straight to Hindsight looks like this:

```python
from hindsight_client import Hindsight

client = Hindsight(base_url="http://localhost:8888")
client.retain(
    bank_id="my-project",
    content="This repo's tests live in tests/, not test/. Always run pytest tests/.",
)
```

Behind that one call, Hindsight's `retain` operation uses an LLM to pull out facts, entities, relationships and temporal information from the raw text, then normalizes them into canonical representations before writing them to storage (Postgres with the `pgvector` extension, or Oracle AI Database 23ai on the enterprise backend). The write is asynchronous; the docs note it can take a few seconds before a `recall` call sees it, since extraction happens in the background rather than blocking the request.

That extraction step is the whole point. A plain vector store would embed the sentence and call it done. Hindsight instead ends up with something closer to a small, queryable fact: the entity is "this repo's tests," the relationship is "located at," the value is `tests/` not `test/`, and it can be reconciled later if a future memory says the tests moved again.

## How recall answers a question from four directions at once

{{< image "hindsight_ai_agent_memory/hindsight_recall_merge.webp" "Diagram of Hindsight's recall pipeline: a query fans out to semantic, keyword, graph and time-range search, which are merged with reciprocal rank fusion and reranked" >}}

*Recall runs four retrieval strategies in parallel, then fuses and reranks the results rather than trusting any single one.*

Asking for it back is symmetric:

```python
result = client.recall(bank_id="my-project", query="Where do the tests live?")
```

Internally, `recall` runs what Hindsight's docs call a four-way parallel search: semantic similarity over the vector index, BM25 keyword matching, a graph walk over entity, temporal and causal links, and a plain time-range filter for anything scoped to "recently" or "as of last week." The four result sets are merged with reciprocal rank fusion and passed through a cross-encoder reranker before anything comes back to the caller.

The reason to bother with four strategies instead of one is that they fail differently. Vector similarity misses an exact term match if the phrasing drifts too far from how it was stored. Keyword search misses a paraphrase. Neither one knows that "the tests" and "the test suite" refer to the same entity unless the graph layer says so. Fusing all four and then reranking is slower and more expensive per query than a single vector lookup, which is the tradeoff: Hindsight is optimizing for recall accuracy over raw query latency.

## What reflect adds on top

`retain` and `recall` are the operations an agent calls on every turn. `reflect` is the slower one: it goes back over what has already been stored, looks for connections between separate memories, and consolidates them into higher-level structures Hindsight calls observations and mental models, essentially a standing, evidence-backed answer to a question the agent keeps asking. If an agent retains ten separate facts about how your CI pipeline is configured over a few sessions, `reflect` is what turns that into one coherent picture instead of ten facts you have to piece together at recall time.

```python
summary = client.reflect(bank_id="my-project", query="How is CI configured in this repo?")
```

This is also where Hindsight reports its strongest benchmark numbers. On {{< link href="https://benchmarks.hindsight.vectorize.io/" >}}its own benchmark page{{< /link >}}, as of September 2026 Hindsight lists a score of 94.6% on the LongMemEvalS long-term memory benchmark and says it leads every dataset on the wider Agent Memory Benchmark. Those are Hindsight's own published numbers rather than an independent audit, so treat the headline score the way you would any vendor benchmark: as a claim worth checking against your own workload, not a settled fact. The project does say the results have been independently reproduced by Virginia Tech's Sanghani Center, which is a reasonable starting point if you want to verify the methodology yourself before trusting it with something important.

## Running Hindsight yourself

The whole thing ships as a single Docker image with an embedded Postgres instance, so there is no separate database to stand up first:

```bash
export OPENAI_API_KEY=sk-xxx

docker run -it --pull always --name hindsight --restart unless-stopped \
  --shm-size=1g -p 8888:8888 -p 9999:9999 \
  -e HINDSIGHT_API_LLM_API_KEY=$OPENAI_API_KEY \
  -v $HOME/.hindsight-docker:/home/hindsight/.pg0 \
  ghcr.io/vectorize-io/hindsight:latest
```

That gives you the API at `http://localhost:8888` and a control plane UI at `http://localhost:9999` where you can browse banks, inspect individual memories and watch retain/recall calls as they happen. `HINDSIGHT_API_LLM_API_KEY` can point at any of the 25-plus supported providers Hindsight lists, including Ollama for a fully local setup with no cloud LLM calls at all; swap in `HINDSIGHT_API_LLM_PROVIDER=ollama` and a local model name if you want to keep everything on your own hardware.

Once it's running, the fastest way to poke at it is the CLI:

```bash
curl -fsSL https://hindsight.vectorize.io/get-cli | bash

hindsight memory retain my-project "This repo's tests live in tests/, not test/"
hindsight memory recall my-project "Where do the tests live?"
```

It also runs an MCP server out of the box, one endpoint per memory bank, at `http://localhost:8888/mcp/my-project/`. Any MCP-compatible client, Claude Code, Claude Desktop, Cursor, or your own agent, can register that URL directly and call `retain`, `recall` and `reflect` as tools instead of going through the SDK:

```bash
claude mcp add --transport http hindsight http://localhost:8888/mcp/my-project/
```

Worth knowing before you rely on it: the MCP endpoint has no authentication by default. Anyone who can reach `localhost:8888` can read and write to your memory banks. Turning on an API key is one environment variable:

```bash
export HINDSIGHT_API_TENANT_EXTENSION=hindsight_api.extensions.builtin.tenant:ApiKeyTenantExtension
export HINDSIGHT_API_TENANT_API_KEY=your-secret-key
```

after which every request needs an `Authorization: Bearer your-secret-key` header. Do this before the next step, not after.

## Reaching your memory bank from another machine with Pinggy

{{< image "hindsight_ai_agent_memory/hindsight_pinggy_remote_mcp.webp" "Sequence diagram of Claude Desktop reaching a self-hosted Hindsight MCP server at home through a Pinggy tunnel" >}}

*The home machine opens the tunnel outward. The laptop only ever talks to the public URL.*

Hindsight's own guide for running it as a local MCP server is upfront about a limitation: local mode is scoped to "when you want memory on your own machine," and their docs point you toward Hindsight Cloud if you need to reach the same memory bank from more than one device. That is a reasonable thing to sell, but it is not the only way to get multi-device access. If your Hindsight instance already runs somewhere with a stable connection, a Pinggy tunnel gives the local MCP endpoint a real public HTTPS URL, which is the actual requirement for a remote MCP client, without moving your data off your own machine.

On the machine running Hindsight, with the API key set as above, open a tunnel to port 8888:

```bash
ssh -p 443 -R0:localhost:8888 free.pinggy.io -T
```

That prints a public URL such as `https://abc123.a.pinggy.link`. Point any MCP client at it the same way you would the localhost URL, just with the tunnel's HTTPS address and the bearer header:

```json
{
  "mcpServers": {
    "hindsight": {
      "url": "https://abc123.a.pinggy.link/mcp/my-project/",
      "headers": {
        "Authorization": "Bearer your-secret-key"
      }
    }
  }
}
```

Now Claude Desktop on a laptop, a teammate's machine, or a phone-based agent client can retain and recall against the same memory bank as the machine sitting at home, without Hindsight's data ever leaving that machine. The free tunnel above resets to a new URL every 60 minutes, which is fine for testing but not for something you point a config file at daily; for a memory server you actually rely on, a {{< link href="https://dashboard.pinggy.io" >}}Pro token with a persistent subdomain{{< /link >}} keeps the same URL across restarts. Either way, layering Pinggy's own bearer-key auth on the tunnel (`-- k:tunnelsecret`) is worth doing too, since it means a stolen or guessed Hindsight API key alone isn't enough to reach the endpoint. If you want the fuller walkthrough on exposing an MCP server generally, see {{< link href="/blog/expose_mcp_server_with_pinggy/" >}}Expose a Local MCP Server with Pinggy{{< /link >}}; for reaching a coding agent's whole session from your phone rather than just its memory, see {{< link href="/blog/remotely_manage_claude_code_from_phone/" >}}Remotely Manage Claude Code from Your Phone{{< /link >}}.

One more thing worth turning on before you open this up even briefly: Hindsight's Memory Defense feature scans everything written through `retain` against a 45-pattern list covering API keys, database connection strings and common PII, and can redact or block matches instead of storing them verbatim. It's off by default on every bank. If your agent might ever retain something it read from a `.env` file or a support ticket, that's the setting that stops it from ending up in a memory bank someone else can now reach.

## What to check for yourself

The retain and recall calls above are the whole surface area worth testing before you trust Hindsight with anything real: write a fact through `retain`, wait the few seconds the docs mention for the asynchronous extraction to finish, then ask for it back through `recall` with a differently worded query than the one you stored it with. If the paraphrase comes back correctly, the four-way merge is doing its job. If you want to see the extraction step itself rather than take it on faith, the control plane UI at port 9999 shows exactly what facts, entities and relationships got pulled out of each memory you retain, which is the fastest way to build an opinion on whether the extraction is accurate enough for what you're using it for.
