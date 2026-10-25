---
title: "Code Mode: Why AI Agents Now Call Tools by Writing Code"
description: "Code mode lets an LLM write a short script that calls MCP tools inside a sandbox, so big results never enter the context window. How it works, with a runnable QuickJS demo and real token numbers."
date: 2026-10-07T12:00:00+05:30
lastmod: 2026-10-07T12:00:00+05:30
draft: false
tags: ["code mode", "MCP", "AI agents", "developer tools"]
og_image: "images/code_mode_mcp_agents/code_mode_mcp_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkNvZGUgTW9kZTogV2h5IEFJIEFnZW50cyBOb3cgQ2FsbCBUb29scyBieSBXcml0aW5nIENvZGUiLAogICJkZXNjcmlwdGlvbiI6ICJDb2RlIG1vZGUgbGV0cyBhbiBMTE0gd3JpdGUgYSBzaG9ydCBzY3JpcHQgdGhhdCBjYWxscyBNQ1AgdG9vbHMgaW5zaWRlIGEgc2FuZGJveCwgc28gYmlnIHJlc3VsdHMgbmV2ZXIgZW50ZXIgdGhlIGNvbnRleHQgd2luZG93LiBIb3cgaXQgd29ya3MsIHdpdGggYSBydW5uYWJsZSBRdWlja0pTIGRlbW8gYW5kIHJlYWwgdG9rZW4gbnVtYmVycy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvY29kZV9tb2RlX21jcF9hZ2VudHMvY29kZV9tb2RlX21jcF9hZ2VudHNfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMDdUMTI6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0wN1QxMjowMDowMCswNTozMCIsCiAgImF1dGhvciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgInB1Ymxpc2hlciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IiwKICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iCiAgfQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "code_mode_mcp_agents/code_mode_mcp_agents_banner.webp" "Code Mode for AI agents: 161,859 characters of tool output versus a 45 character result" >}}

In a normal tool-calling loop, every tool result goes through the model. Ask an agent to total up paid orders by country, and it calls `list_orders`, gets 500 orders back as JSON, reads all of it, then calls `get_customer` again and again. In my test that first result alone was 161,859 characters, roughly 40,000 tokens, to produce an answer that fits in 45 characters.

Code mode fixes the loop instead of the model. The agent writes a short JavaScript function that calls the tools, filters and joins the results in code, and returns only the answer. The function runs in a sandbox. The 161,859 characters never leave it.

{{% tldr %}}
1. **Tool results stop passing through the model.** The model writes a script, the harness runs it, and only the script's return value goes back into the context.
2. **Tool definitions become a typed API**, not a pile of JSON schemas, so the model can discover what it needs instead of loading everything up front.
3. **The sandbox is the whole security story.** No network, no filesystem, and the only way out is the tool bridge. QuickJS in WebAssembly and V8 isolates both work.
4. **The savings are large but depend on the workload.** Cloudflare reports 1.17 million tokens down to about 1,000, Anthropic reports 150,000 down to 2,000. Small, single-call tasks gain nothing.
5. **It costs you a sandbox, weaker model support and harder debugging.** Smaller models write worse glue code than they make tool calls.
{{% /tldr %}}

## What classic tool calling does to the context window

With plain MCP, the harness sends the model every tool's name, description and JSON schema on every turn. Then each call is a round trip: the model emits a JSON tool call, the harness runs it, and the full result is appended to the conversation.

That has two costs. Definitions are paid for up front: Cloudflare worked out that exposing its 2,500+ API endpoints as individual MCP tools would take about 1.17 million tokens, more than most context windows hold. And results are paid for on every call, whether or not the model needs the whole thing.

Doing anything with a loop is worse. Fetching a customer for each of 428 orders would be 428 model turns, each one re-reading the growing conversation.

{{< image "code_mode_mcp_agents/classic_vs_code_mode.webp" "Two panels comparing classic tool calling, where 161,859 characters reach the model, with code mode, where 45 characters do" >}}

*The same 429 tool calls happen either way. Code mode keeps their results out of the model's context.*

## How code mode works

Cloudflare's {{< link href="https://blog.cloudflare.com/code-mode/" >}}Code Mode post{{< /link >}} (September 26, 2025) gave the idea its name. The harness does four things:

1. Reads the tool schemas and generates a typed API from them, for example `await tools.get_customer({ id })`, with the schema descriptions as doc comments.
2. Gives the model one tool, something like `run_code`, whose input is a JavaScript function body.
3. Runs that code in a sandbox where the generated functions exist as globals.
4. Each call to one of those functions crosses a bridge to the harness, which makes the real tool call and hands the JSON result back into the sandbox.

The model's context sees the code it wrote and whatever the code returns. Intermediate results live in JavaScript variables.

The argument for doing this in code is practical. Cloudflare's phrasing is that tool calling is like "putting Shakespeare through a month-long class in Mandarin": models have seen millions of real programs and comparatively few synthetic tool-call transcripts. Loops, filters, `Promise.all` and error handling are things they already write well.

Anthropic's {{< link href="https://www.anthropic.com/engineering/code-execution-with-mcp" >}}Code execution with MCP{{< /link >}} (November 4, 2025) takes the same idea and adds progressive disclosure. Tools are laid out as files, one per tool, and the agent lists and reads only the ones it needs:

```text
servers/
├── google-drive/
│   ├── getDocument.ts
│   └── index.ts
└── salesforce/
    ├── updateRecord.ts
    └── index.ts
```

Their example moves a meeting transcript from Google Drive to Salesforce without the transcript ever being shown to the model, and they report a drop from 150,000 tokens to 2,000.

## Running it yourself in 60 lines

To check the claim, I built the smallest version I could: a fake backend with 500 orders and 40 customers, two tools, and a QuickJS sandbox. {{< link href="https://github.com/justjake/quickjs-emscripten" >}}quickjs-emscripten{{< /link >}} (0.32.0 when I ran it, on Node 22) compiles the QuickJS engine to WebAssembly, so there is no native dependency.

```bash
npm i quickjs-emscripten
```

The tools are plain functions:

```javascript
const tools = {
  list_orders: () => orders,                              // 500 orders, 4 line items each
  get_customer: ({ id }) => customers.find(c => c.id === id),
};
```

This is the script a model would write for "total paid orders by country":

```javascript
const orders = await list_orders();
const paid = orders.filter(o => o.status === "paid");
const byCountry = {};
for (const o of paid) {
  const c = await get_customer({ id: o.customer });
  byCountry[c.country] = (byCountry[c.country] || 0) + o.total;
}
return byCountry;
```

The host registers each tool as a global function inside the QuickJS context, wraps the script in an async function, runs it and reads the result back out. The output of my run:

```text
classic: chars into context: 163759 approx tokens: 40940 tool calls: 41
code mode: result {"DE":11066,"IN":11153,"BR":11440,"US":11027} chars: 45 host tool calls: 429
sandbox globals: undefined,undefined,undefined,undefined
```

The orders list alone is 161,859 characters (about 40,000 tokens at 4 characters per token, a rough estimate, not a tokenizer count). The classic line also counts all 40 customer lookups, which is why it reads 163,759. The code mode run made 429 host tool calls (1 `list_orders` plus 428 `get_customer` for the paid orders) and returned 45 characters.

The last line is the sandbox check: `typeof fetch`, `require`, `process` and `setTimeout` are all `undefined` inside the context. Whatever the model writes, the only door out is the functions you registered.

Two caveats on this demo. The data is synthetic and deliberately padded, so the ratio flatters code mode. And I wrote the script by hand, so it shows nothing about how reliably a model writes it. It does show where the tokens go.

{{< image "code_mode_mcp_agents/code_mode_sandbox.webp" "Diagram of an LLM sending a script to a QuickJS sandbox that calls MCP servers and returns 45 characters" >}}

*The script runs in a sandbox whose only exit is the tool bridge.*

## Why the sandbox matters more than the code

The model's output is now arbitrary code, so the sandbox is the security boundary. Two designs are in use.

Cloudflare runs the code in a V8 isolate (a Dynamic Worker) with no general internet access. MCP servers are passed in as bindings on `env`, so the sandboxed code can call them but never sees the API keys, which stay with the supervisor. Armin Ronacher's {{< link href="https://lucumr.pocoo.org/2026/10/6/codemode/" >}}write-up of codemode in Pi{{< /link >}} (October 6, 2026) describes the same shape with QuickJS in WASM: no network, no filesystem, no timers, limited RAM, and Pi caps concurrent executions at four.

Node's built-in `vm` module is not a substitute. Its docs say it is not a security mechanism. Use an engine that has nothing to expose in the first place.

Prompt injection still applies. The sandbox stops injected instructions from reading your disk, but a tool result can still talk the model into misusing the tools you did hand over. Giving the sandbox fewer tools is the control that works.

## Doing it at the server: one search tool, one execute tool

You don't have to do this in the harness. On February 20, 2026 Cloudflare shipped an {{< link href="https://blog.cloudflare.com/code-mode-mcp/" >}}MCP server for its own API{{< /link >}} that exposes two tools, `search()` and `execute()`, instead of 2,500+ endpoint tools. The model writes JavaScript to search a pre-resolved OpenAPI spec, then JavaScript to make the requests, handle pagination and chain calls. Cloudflare puts the context cost at roughly 1,000 tokens against 1.17 million, and shows an origin DDoS-protection setup done in four tool calls.

The catch Ronacher points out is nesting. If your harness already has code mode and the MCP server has its own, the model writes JavaScript that has to carry more JavaScript as a string, and the inner code can't reach the outer tools. Pick one layer.

## What it costs

- **Model quality.** Writing correct glue code is harder than emitting one JSON call. Ronacher notes smaller models struggle with the pattern.
- **Messy MCP servers.** Many return text instead of structured JSON, some change what they return depending on result size, and the protocol has no good story for large binary data.
- **Durability.** If a script dies at step 300 of 428, there is no checkpoint. Ronacher floats durable workflow engines as a possible fix; nobody has shipped a settled answer.
- **Debugging.** A failed run is a stack trace inside a sandbox, not a clean tool-call log. Log every host call at the bridge or you will be guessing.
- **No win on small tasks.** One call, one small result: classic tool calling is simpler and costs the same.

## Conclusion

Run the demo above and look at the numbers on your own data. Take the one agent task you have that loops over many records, count how many characters its tool results add up to, and compare that with the size of the answer. A large gap means code mode will pay for itself. If the two numbers are close, skip it and keep your tools as they are.
