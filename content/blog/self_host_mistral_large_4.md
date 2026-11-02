---
title: "How to Self-Host Mistral Large 4 and Reach It From Anywhere"
description: "Mistral Large 4 ships open weights: 1T parameters, 49B active, 1M context. Here is what it takes to serve it with vLLM on one 8-GPU node and expose the API safely with a Pinggy tunnel."
date: 2026-10-30T10:00:00+05:30
lastmod: 2026-10-30T10:00:00+05:30
draft: false
tags: ["Mistral", "self-hosted AI", "open source", "AI Models"]
og_image: "images/self_host_mistral_large_4/self_host_mistral_large_4_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIHNlbGYtaG9zdCBNaXN0cmFsIExhcmdlIDQgd2l0aCB2TExNIGFuZCByZWFjaCBpdCBmcm9tIGFueXdoZXJlIiwKICAiZGVzY3JpcHRpb24iOiAiU2VydmUgTWlzdHJhbCBMYXJnZSA0ICgxVCBwYXJhbWV0ZXJzLCA0OUIgYWN0aXZlKSB3aXRoIHZMTE0gb24gYW4gOC1HUFUgbm9kZSwgdGhlbiBleHBvc2UgdGhlIE9wZW5BSS1jb21wYXRpYmxlIGVuZHBvaW50IHRocm91Z2ggYSBQaW5nZ3kgdHVubmVsIHdpdGggYmVhcmVyLWtleSBhdXRoLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3RfbWlzdHJhbF9sYXJnZV80L3NlbGZfaG9zdF9taXN0cmFsX2xhcmdlXzRfYmFubmVyLndlYnAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0zMFQxMDowMDowMCswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTZXJ2ZSB0aGUgbW9kZWwgd2l0aCB2TExNIiwgInRleHQiOiAiUnVuIHRoZSB2bGxtL3ZsbG0tb3BlbmFpOm1pc3RyYWwtbGFyZ2UtNCBjb250YWluZXIgd2l0aCAtLW1vZGVsIG1pc3RyYWxhaS9NaXN0cmFsLUxhcmdlLTQtMVQtQTUyQiwgLS10ZW5zb3ItcGFyYWxsZWwtc2l6ZSA4LCAtLXRvb2wtY2FsbC1wYXJzZXIgbWlzdHJhbCwgLS1yZWFzb25pbmctcGFyc2VyIG1pc3RyYWwgYW5kIC0tZW5hYmxlLWF1dG8tdG9vbC1jaG9pY2UuIEl0IGxpc3RlbnMgb24gcG9ydCA4MDAwLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIk9wZW4gYSBQaW5nZ3kgdHVubmVsIHdpdGggYSBiZWFyZXIga2V5IiwgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDAwIGZyZWUucGluZ2d5LmlvIC1UIC0tIGs6bXlzZWNyZXRrZXkgYW5kIGNvcHkgdGhlIEhUVFBTIFVSTCBpdCBwcmludHMuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQ2FsbCB0aGUgZW5kcG9pbnQiLCAidGV4dCI6ICJTZW5kIGEgcmVxdWVzdCB0byA8dHVubmVsLXVybD4vdjEvY2hhdC9jb21wbGV0aW9ucyB3aXRoIHRoZSBoZWFkZXIgQXV0aG9yaXphdGlvbjogQmVhcmVyIG15c2VjcmV0a2V5IGFuZCBtb2RlbCBtaXN0cmFsYWkvTWlzdHJhbC1MYXJnZS00LTFULUE1MkIuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_host_mistral_large_4/self_host_mistral_large_4_banner.webp" "Headline 'Self-Host Mistral Large 4' above a flow from an 8-GPU node running vLLM, through a Pinggy tunnel, to a laptop, CI job or phone" >}}

{{< llm-context >}}To self-host Mistral Large 4 with Pinggy - run the vllm/vllm-openai:mistral-large-4 Docker image with --model mistralai/Mistral-Large-4-1T-A52B --tensor-parallel-size 8 (serves on port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey` to get a public HTTPS URL that requires a bearer key.{{< /llm-context >}}

Mistral just released the weights of Mistral Large 4. It is a mixture-of-experts model with about 1T total parameters, 49B active per token, a 1M-token context window and native image input. The checkpoint is on Hugging Face as `mistralai/Mistral-Large-4-1T-A52B`, and the recommended way to run it is a single vLLM container on one node with 8 GPUs.

That is not a laptop model. This post covers what the model is, the exact serve command from the model card, what to expect from the hardware, and how to make the resulting OpenAI-compatible endpoint reachable from your laptop, a CI job or a phone without opening a port.

{{% tldr %}}
1. Mistral Large 4 is a **1T-parameter MoE with 49B active parameters per token**, so compute per token is closer to a 50B dense model, but all the weights still have to fit in GPU memory.
2. The model card serves it with **vLLM on one 8-GPU node** (`--tensor-parallel-size 8`); the fp8 checkpoint is the default and an NVFP4 one targets Blackwell.
3. You need `--tool-call-parser mistral` and `--reasoning-parser mistral` or tool calls and reasoning output come back wrong.
4. The license is a modified MIT; **running it as a paid hosted service needs a separate commercial license**.
5. A Pinggy tunnel with `k:<key>` gives the vLLM port a **public HTTPS URL that rejects requests without a bearer key**.
{{% /tldr %}}

## What Mistral Large 4 is

Per the {{< link href="https://mistral.ai/news/mistral-large-4-oss/" >}}release post{{< /link >}} and the {{< link href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" >}}model card{{< /link >}} (checked October 30, 2026):

- Granular MoE with 128 routed experts, 4 active per token, plus 1 shared expert.
- About 1T parameters in total, 49B active per token (52B counting embedding and output layers).
- 1M-token context, text and image input, text output.
- Instruct and reasoning in one model, with three reasoning efforts: `low`, `medium` and `high` (the default).
- Native function calling, JSON output and strict JSON schema enforcement.
- License: Mistral Ecosystem Open-Weight License, a modified MIT. Commercial use is fine, but if you run a Model-as-a-Service business you need a separate license from Mistral.

Mistral's own numbers: 48% on the Artificial Analysis Coding Agent Index (roughly tied with GLM-5.3, with 47% fewer tokens per task), 41% on Terminal-Bench 4.0 and 84.5% on BrowseComp. Those are vendor-reported, so treat them as a starting point and run your own tasks. A technical report is listed as "coming soon".

{{< image "self_host_mistral_large_4/mistral_large_4_moe_routing.webp" "Diagram of one token entering a router that selects 4 of 128 experts, with a shared expert that always runs, summed into the output" >}}

*Compute per token follows the 49B active parameters; memory follows the full 1T.*

## What the hardware has to look like

The model card does not state a minimum. Its examples all use `--tensor-parallel-size 8`, so plan on one node with 8 data-center GPUs. The arithmetic backs that up: the main checkpoint is fp8, which is roughly one byte per parameter, so the weights alone are in the neighbourhood of 1 TB before the KV cache. That is my estimate from the parameter count, not a number from Mistral. An 8x H200 node (about 1.1 TB of HBM in total) is the obvious fit; a smaller node will not hold it.

There is an NVFP4 checkpoint with a smaller footprint, aimed at Blackwell GPUs. If memory is tight, the card suggests lowering `--max-model-len` or `--max-num-seqs` rather than trying to hold the full 1M context.

Two honest tradeoffs. First, if you do not already have such a node, renting one by the hour is the realistic path, and then the hosted API at $0.70 per million input tokens and $2.10 per million output tokens may be cheaper unless you keep the GPUs busy. Second, I could not run this myself: I have no 8-GPU node here. The commands below are copied from the model card and the Pinggy docs, and the serve step is untested by me.

## Serving it with vLLM

This is the command from the model card:

```bash
docker run --runtime nvidia --gpus all \
  -v ~/.cache/huggingface:/root/.cache/huggingface \
  -p 8000:8000 --ipc=host \
  vllm/vllm-openai:mistral-large-4 \
  --model mistralai/Mistral-Large-4-1T-A52B \
  --tensor-parallel-size 8 \
  --tool-call-parser mistral \
  --reasoning-parser mistral \
  --enable-auto-tool-choice \
  --gpu-memory-utilization 0.85
```

The Hugging Face cache mount matters: the first start downloads the whole checkpoint, and you do not want to recieve that download twice. The two parsers are not optional if you want agents to work. `--tool-call-parser mistral` turns the model's tool-call format into OpenAI-style `tool_calls`, and `--reasoning-parser mistral` splits the reasoning trace from the final answer.

The card also describes optional speculative decoding using the DSpark draft head shipped in the checkpoint:

```bash
--speculative-config '{"method": "dspark", "num_speculative_tokens": 3}'
```

SGLang is the other supported server (`sglang serve` with `--tp-size 8`, `--speculative-algorithm DSPARK`). For sampling, the card recommends `temperature=1.0` and `top_p=0.95`.

Once the weights load, vLLM serves an OpenAI-compatible API on port 8000. Check it from the same machine:

```bash
curl http://localhost:8000/v1/models
```

## Why a tunnel, and why not just open port 8000

The GPU box usually sits in a datacenter or a rented VM with a firewall you do not control, or in a lab behind NAT. You want your laptop, a teammate, an editor plugin or a CI runner to call it. Opening 8000 to teh world with no auth would hand out a 1T-parameter model to anyone who finds the IP, and vLLM does not require a key unless you set one.

A Pinggy tunnel avoids both problems. The server opens an outbound SSH connection, gets a public HTTPS URL, and Pinggy can require a bearer key before a request reaches vLLM. The request path is: client calls the HTTPS URL -> Pinggy checks the `Authorization` header -> the request goes down the SSH connection -> vLLM on `localhost:8000` answers.

{{< image "self_host_mistral_large_4/mistral_large_4_pinggy_request_path.webp" "Sequence diagram of a request with a bearer key passing from a laptop through the Pinggy server to vLLM on the GPU node, and a request without the key getting 401 at Pinggy" >}}

*The GPU node dials out; clients without the key never reach vLLM.*

## Opening the tunnel with a bearer key

On the GPU node, in a second terminal:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey" >}}
{{</ ssh_command >}}

Replace `mysecretkey` with a long random string (`openssl rand -hex 24` works). The command prints an HTTPS URL like `https://abc123.run.pinggy-free.link`. Pinggy now answers only requests that carry `Authorization: Bearer mysecretkey`.

The free tunnel lasts 60 minutes and the URL changes each time. For anything you want to keep, use a Pro token, which has no timeout and supports a persistent subdomain set in the {{< link href="https://dashboard.pinggy.io" >}}dashboard{{< /link >}}:

```bash
ssh -p 443 -R0:localhost:8000 <token>@pro.pinggy.io -T -- k:mysecretkey
```

## Calling it from your laptop

From any machine, point an OpenAI-style client at the tunnel URL:

```bash
curl https://abc123.run.pinggy-free.link/v1/chat/completions \
  -H "Authorization: Bearer mysecretkey" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mistralai/Mistral-Large-4-1T-A52B",
    "messages": [{"role": "user", "content": "Write a one-line shell command to count lines in all .py files."}]
  }'
```

Without the `Authorization` header the request is refused at the tunnel. The same URL and key work in any tool that takes an OpenAI base URL: set the base URL to `https://abc123.run.pinggy-free.link/v1` and the API key to `mysecretkey`. For the model's tool use, send a normal `tools` array; with the two parsers on, you get standard `tool_calls` back.

Tunnels add a hop, so expect some latency on the first token, and a 1M-token prompt will take a while to upload however you route it. If you want the same pattern for a smaller model, [sharing Ollama and Open WebUI online](/blog/how_to_easily_share_ollama_api_and_open_webui_online/) walks through it end to end.

## When this is worth it

Self-hosting a model this size makes sense when prompts cannot leave your network, when you will keep eight GPUs busy most of the day, or when you want to fine-tune. For occasional use, the hosted API is cheaper and has no ops. The tunnel step is the same either way: it takes the endpoint you already trust and makes it reachable without exposing the machine.

To check the setup yourself, call `/v1/models` through the tunnel with and without the bearer key. You should see the model list in the first case and a refusal in the second, and that is what tells you the key is actually enforced before you share the URL.
