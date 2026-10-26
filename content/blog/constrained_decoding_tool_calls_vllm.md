---
title: "Constrained Decoding for LLM Tool Calls in vLLM"
description: "Kimi K2.6 on vLLM produced valid tool calls only 92% of the time until constrained decoding was switched on. How structural tags work, and the vLLM flags that raise it to 100%."
date: 2026-10-26T10:00:00+05:30
lastmod: 2026-10-26T10:00:00+05:30
draft: false
tags: ["vLLM", "AI agents", "self-hosted AI", "local LLM", "Pinggy"]
og_image: "images/constrained_decoding_tool_calls_vllm/constrained_decoding_tool_calls_vllm_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkNvbnN0cmFpbmVkIERlY29kaW5nIGZvciBMTE0gVG9vbCBDYWxscyBpbiB2TExNIiwKICAiZGVzY3JpcHRpb24iOiAiS2ltaSBLMi42IG9uIHZMTE0gcHJvZHVjZWQgdmFsaWQgdG9vbCBjYWxscyBvbmx5IDkyJSBvZiB0aGUgdGltZSB1bnRpbCBjb25zdHJhaW5lZCBkZWNvZGluZyB3YXMgc3dpdGNoZWQgb24uIEhvdyBzdHJ1Y3R1cmFsIHRhZ3Mgd29yaywgYW5kIHRoZSB2TExNIGZsYWdzIHRoYXQgcmFpc2UgaXQgdG8gMTAwJS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvY29uc3RyYWluZWRfZGVjb2RpbmdfdG9vbF9jYWxsc192bGxtL2NvbnN0cmFpbmVkX2RlY29kaW5nX3Rvb2xfY2FsbHNfdmxsbV9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTI2VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjZUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9jb25zdHJhaW5lZF9kZWNvZGluZ190b29sX2NhbGxzX3ZsbG0vIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJBSSBJbmZyYXN0cnVjdHVyZSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAidkxMTSB0b29sIGNhbGxpbmcsIGNvbnN0cmFpbmVkIGRlY29kaW5nLCBzdHJ1Y3R1cmVkIG91dHB1dHMsIHRvb2wtc3RyaWN0LWxldmVsLCBYR3JhbW1hciwgS2ltaSBLMi42LCBMTE0gdG9vbCBjYWxsIGFjY3VyYWN5IiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkNvbnN0cmFpbmVkIGRlY29kaW5nIiwgImRlc2NyaXB0aW9uIjogIk1hc2tpbmcgdG9rZW5zIHRoYXQgd291bGQgYnJlYWsgYSBncmFtbWFyIG9yIHNjaGVtYSBhdCBlYWNoIGdlbmVyYXRpb24gc3RlcC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogInZMTE0iLCAiZGVzY3JpcHRpb24iOiAiT3Blbi1zb3VyY2UgaW5mZXJlbmNlIGVuZ2luZSB3aXRoIGFuIE9wZW5BSS1jb21wYXRpYmxlIHNlcnZlci4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlN0cnVjdHVyYWwgdGFncyIsICJkZXNjcmlwdGlvbiI6ICJYR3JhbW1hciBmb3JtYXQgbWl4aW5nIGZyZWUgdGV4dCB3aXRoIHNjaGVtYS1jb25zdHJhaW5lZCBzZWN0aW9ucyBzdWNoIGFzIHRvb2wgY2FsbHMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJUb29sIGNhbGxpbmciLCAiZGVzY3JpcHRpb24iOiAiTExNIG91dHB1dCB0aGF0IG5hbWVzIGEgZnVuY3Rpb24gYW5kIGl0cyBKU09OIGFyZ3VtZW50cyBmb3IgYSBoYXJuZXNzIHRvIHJ1bi4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "constrained_decoding_tool_calls_vllm/constrained_decoding_tool_calls_vllm_banner.webp" "Constrained decoding for LLM tool calls: a wrong argument name city_name crossed out beside the valid one, location" >}}

Ubicloud measured Kimi K2.6 on vLLM 0.28 and found that only **92%** of its tool calls matched the tool's JSON schema. About 2 in every 25 calls were unusable. After they turned on constrained decoding, the same model scored 100% on the same benchmark. The model did not change. The server just stopped letting it pick tokens that break the schema.

If you serve an open-weight model for an agent, this is the cheapest reliability fix available, and in vLLM it is off by default for most setups. This post walks through why tool calls fail, what the server does at each token, and the three flags that control it.

{{% tldr %}}
1. A model samples tokens by likelihood and never checks a schema, so even clear prompts yield **tool names and argument keys that do not exist** (`search_web` instead of `web_search`).
2. Constrained decoding masks every token that would break the schema at each step. Validity becomes a **guarantee at runtime**, not a best effort.
3. In vLLM, `tool_choice: "required"` or a named function is constrained by default. `auto`, the mode most agents use, is constrained only for tools marked `strict: true`, or when the server sets `--tool-strict-level`.
4. Ubicloud's numbers for Kimi K2.6: **92%** schema accuracy unconstrained, **100%** with constrained decoding on, measured on Moonshot's K2VV ToolCall benchmark (2,000 requests).
5. It is off by default for good reasons: some models get worse when forced, and grammar bugs exist. Test your own model before turning it on for everyone.
{{% /tldr %}}

## Why a valid-looking tool call can still be invalid

A model learns many tool-calling conventions during training. When your harness hands it a tool list, it still writes the call one token at a time, picking by probability. Nothing in that loop knows your schema.

The failures are boring and specific. With a tool named `web_search`, the model writes `search_web`, because that name was common in its training data. With a parameter named `location`, it writes `city_name`. The call parses as JSON, the harness recieves it and tries to run it, and you get an error message that now sits in the context window. The model reads teh error, burns tokens apologising, and retries. In a long agent session those retries add up in both cost and quality.

Ubicloud's benchmark, Moonshot AI's K2VV ToolCall, measures two things over 2,000 requests: whether the service decides to call a tool at all (compared with Moonshot's own service), and schema accuracy, meaning the share of calls that conform to the tool's JSON schema and can be executed. Schema accuracy is the one constrained decoding fixes.

## What the server does at each token

A model with tool support has its own call format. Kimi's looks like this in the token stream: the call opens with `<|tool_calls_section_begin|>`, then `<|tool_call_begin|>`, then a name such as `functions.webfetch:0`, then `<|tool_call_argument_begin|>`, the JSON arguments, and `<|tool_call_end|>`. A parser in the server turns that into the standard `tool_calls` JSON your harness expects.

Constrained decoding adds a step before sampling. The engine tracks where the output is in a grammar: inside the name, inside the call index (integers only), inside the arguments. For that position it computes which tokens are legal and sets the probability of all others to zero. The model still chooses, but only among tokens that keep the call valid.

{{< image "constrained_decoding_tool_calls_vllm/constrained_decoding_token_mask.webp" "Four steps of one vLLM decoding step: the model scores tokens, the grammar marks legal ones, the rest are masked, and a token is sampled so web_search is allowed and search_web is blocked" >}}

*Grammar built from the tools in the request, so the allowed names and keys change per call.*

The mechanism comes from <a href="https://github.com/mlc-ai/xgrammar" target="_blank">XGrammar</a>, which vLLM uses for this. For tool calls it uses **structural tags**, a JSON description of the output that mixes free text with constrained sections. A `TriggeredTags` section lets the model write free text until it emits a trigger string such as a tool-call marker, then switches to the structured grammar. A `JSONSchema` part constrains the arguments. For Kimi K2.6, Ubicloud describes the path as begin call -> tool name -> call index -> argument start -> schema-constrained JSON -> end call.

On cost, Ubicloud says the token masks are precomputed per phase and applied on the GPU, so the overhead is negligible. The XGrammar-2 authors report compilation up to 80x faster than the first XGrammar when going from 10 to 500 tools, and 100% schema accuracy on the simple and parallel subsets of BFCL-V3 across four models, with the biggest accuracy gains on smaller models. Those are the authors' own numbers, so check them on your workload.

## The three ways vLLM decides to constrain

Tool calling in vLLM needs two flags before any of this matters:

```bash
vllm serve Qwen/Qwen2.5-7B-Instruct \
    --enable-auto-tool-choice \
    --tool-call-parser hermes
```

The parser has to match the model family. The docs list `hermes` for Qwen2.5, `kimi_k2` for Kimi, `deepseek_v3` and `deepseek_v31` for DeepSeek, `openai` for gpt-oss, and a long list of others. I did not run this on a GPU for this post, so treat the command as straight from the {{< link href="https://docs.vllm.ai/en/latest/features/tool_calling/" >}}vLLM tool calling docs{{< /link >}}, with the model swapped.

From there, what gets constrained depends on the request:

| What the request asks for | What vLLM constrains |
|---|---|
| `tool_choice` set to a named function, or `required` | The call, using schema-derived structured outputs. On by default. |
| `tool_choice: "auto"`, tool marked `strict: true` | The call envelope (markup and function name) and that tool's argument schema |
| `tool_choice: "auto"`, no strict tools | Nothing. Arguments can be malformed and markup can leak into the reply. |

The last row is where most agents live. Agent harnesses generally send `auto`, since the model has to be free to answer in plain text (check what yours sends). Without strict tools, those calls go out unconstrained.

There are two ways to change that. The client can mark tools `strict: true`. For that to work the schema must be strict-compatible: `additionalProperties` set to `false`, every property listed in `required`, and optional fields written as nullable, such as `{"type": ["string", "null"]}`.

```bash
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Qwen/Qwen2.5-7B-Instruct",
    "messages": [{"role": "user", "content": "Weather in Pune?"}],
    "tool_choice": "auto",
    "tools": [{
      "type": "function",
      "function": {
        "name": "get_weather",
        "strict": true,
        "parameters": {
          "type": "object",
          "properties": {"location": {"type": "string"}},
          "required": ["location"],
          "additionalProperties": false
        }
      }
    }]
  }'
```

Or the server can raise the floor for every client, which matters when you do not control the harness. That is what the `--tool-strict-level` flag does. It was added in vLLM PR #56268, merged September 18, 2026:

| Level | Effect |
|---|---|
| `auto` | Follows the request's tool choice and per-tool `strict` settings. The default for most parsers. |
| `function` | Constrains the call envelope for every request that has tools. Argument contents stay free. |
| `parameter` | Pins argument schemas for every tool, as if each were strict. |

```bash
vllm serve moonshotai/Kimi-K2.6 \
    --enable-auto-tool-choice \
    --tool-call-parser kimi_k2 \
    --tool-strict-level parameter
```

The level is a floor: it never loosens a constraint a strict tool already has, and it does not force a call. The default is `function` for the `glm47` parser and `auto` for the rest. Setting `VLLM_ENFORCE_STRICT_TOOL_CALLING=false` turns structural tags off entirely. The `moonshotai/Kimi-K2.6` repo name above is my assumption, so check the exact Hugging Face id before you copy it.

## What Ubicloud found, and why vLLM was cautious

Ubicloud first added constrained decoding to its own vLLM fork and reached 100%. When vLLM v0.25 shipped the feature upstream, they moved to it for Kimi and DeepSeek, and accuracy dropped to 91%. The implementation was fine. Upstream had changed the default, so requests that did not explicitly opt in ran without constraints. The server-side flag arrived in vLLM 0.31, and with it enabled they re-ran K2VV ToolCall and saw 100% across every model version they serve.

| Configuration | Kimi K2.6 schema accuracy |
|---|---|
| vLLM 0.28, unconstrained | 92% |
| Upstream after the default change | 91% |
| vLLM 0.31+, constrained decoding on | 100% |

The cautious default is not arbitrary. Ubicloud groups what went wrong when the feature was on for everyone into three buckets:

- **Models that diverge from their own schema.** Forcing tokens can push a model off course when its natural output differs from the grammar. Reports named gpt-oss-20b, Qwen 3.6 and GLM 5.1.
- **Grammar translation bugs.** Converting a model's call format into a grammar can produce invalid calls, failed requests or silently dropped constraints (vLLM PR #45600, issue #58930).
- **Feature interactions.** With speculative decoding, the grammar can reject valid speculative tokens and fail the request (issues #44006 and #55152).

One more from the vLLM tracker: issue #50989 describes Qwen models looping under strict mode with tools that take no arguments. For a model-agnostic engine, off-by-default is the safer call. Ubicloud serves two model families at first-party quality, so for them on is the better trade.

{{< image "constrained_decoding_tool_calls_vllm/kimi_k26_tool_call_schema_accuracy.webp" "Bar chart of Kimi K2.6 tool-call schema accuracy on vLLM: 92% unconstrained, 91% after the default change, 100% constrained" >}}

*Data: <a href="https://www.ubicloud.com/blog/fixing-tool-call-accuracy-in-vllm" target="_blank">Ubicloud</a>, October 20, 2026.*

## How to check your own model

You do not need Ubicloud's benchmark to see whether this matters for you. Run your real tool list through the model a few hundred times and count calls whose name or arguments fail validation against the schema. Do it once with `--tool-strict-level auto` and once with `parameter`. If the second run is clean and your task accuracy holds, keep it. If success on the actual task drops, look at the three buckets above before blaming the flag: smaller models and tools with no arguments are the usual suspects.

Also watch two side effects. A model forced into a call it did not want to make is not a better answer, only a valid one, so schema accuracy and task accuracy are different numbers. And under `required` or a named choice, some parsers (the docs mention Mistral's official format) can still answer in text until `max_tokens` rather than call a tool.

## Reaching your vLLM server from a remote agent

If the agent harness runs on a different machine than the GPU box, say a laptop on the road talking to a home server, you need a reachable URL. A tunnel does that without opening router ports. vLLM serves its OpenAI-compatible API on port 8000 by default, so:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey
```

Pinggy prints a public HTTPS URL. Point the harness at `https://<your-pinggy-url>/v1` with `mysecretkey` as the bearer key. Keep the key on. Without it, anyone with the URL can spend your GPU. Free tunnels expire after 60 minutes. For the longer version of this setup, see {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}how to self-host any LLM{{< /link >}} and {{< link href="/blog/expose_mcp_server_with_pinggy/" >}}how to expose a local MCP server with Pinggy{{< /link >}}.

## Conclusion

If you serve open models to agents, check three things this week: which `--tool-call-parser` you use, whether your harness sends `strict: true`, and what `--tool-strict-level` is set to. Then run your own tools through the model a few hundred times and count the failures. A 92% pass rate looks fine in a demo and stops being fine on the fifteenth step of an agent loop, because every failed call adds an error message to the context the next step has to read.
