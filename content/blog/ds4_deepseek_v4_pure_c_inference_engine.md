---
title: "antirez's ds4 Runs DeepSeek V4 in Pure C - Here's How to Reach It from Anywhere"
description: "antirez, the creator of Redis, wrote a dependency-free C inference engine for DeepSeek V4 that runs a 284B-parameter model on a single Mac Studio. Here's how it works, and how to expose its API with Pinggy."
date: 2026-08-03T11:00:00+05:30
draft: false
tags: ["ds4", "DeepSeek V4", "antirez", "local inference", "self-hosted AI", "Pinggy", "LLM", "Metal", "CUDA", "ROCm"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/ds4_deepseek_v4_pure_c_inference_engine/ds4_deepseek_v4_pure_c_inference_engine_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiUnVuIERlZXBTZWVrIFY0IExvY2FsbHkgd2l0aCBkczQgYW5kIFJlYWNoIEl0IGZyb20gQW55d2hlcmUgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gYnVpbGQgYW50aXJleidzIGRzNCBpbmZlcmVuY2UgZW5naW5lLCBydW4gaXRzIE9wZW5BSS1jb21wYXRpYmxlIEFQSSBzZXJ2ZXIgZm9yIERlZXBTZWVrIFY0LCBhbmQgZXhwb3NlIGl0IHB1YmxpY2x5IHVzaW5nIGEgUGluZ2d5IFNTSCB0dW5uZWwuIiwKICAidG90YWxUaW1lIjogIlBUMjBNIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRvd25sb2FkIGEgcXVhbnRpemVkIG1vZGVsIiwKICAgICAgInRleHQiOiAiUnVuIC4vZG93bmxvYWRfbW9kZWwuc2ggcTItaW1hdHJpeCB0byBmZXRjaCBhIERlZXBTZWVrIFY0IEZsYXNoIHF1YW50aXphdGlvbiBzaXplZCBmb3IgbWFjaGluZXMgd2l0aCA5NiB0byAxMjggR0Igb2YgUkFNLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJCdWlsZCBkczQgZm9yIHlvdXIgaGFyZHdhcmUiLAogICAgICAidGV4dCI6ICJSdW4gbWFrZSBvbiBtYWNPUyBmb3IgdGhlIE1ldGFsIGJhY2tlbmQsIG1ha2UgY3VkYS1zcGFyayBvciBtYWtlIGN1ZGEtZ2VuZXJpYyBvbiBMaW51eCB3aXRoIGFuIE5WSURJQSBHUFUsIG9yIG1ha2Ugc3RyaXgtaGFsbyBmb3IgQU1EIFJPQ20uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IHRoZSBBUEkgc2VydmVyIiwKICAgICAgInRleHQiOiAiUnVuIC4vZHM0LXNlcnZlciAtLWN0eCAxMDAwMDAgLS1rdi1kaXNrLWRpciAvdG1wL2RzNC1rdiAtLWt2LWRpc2stc3BhY2UtbWIgODE5MiB0byBzdGFydCB0aGUgT3BlbkFJLWNvbXBhdGlibGUgc2VydmVyIG9uIHBvcnQgODAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIGEgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkluIGEgbmV3IHRlcm1pbmFsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwMDAgZnJlZS5waW5nZ3kuaW8gLSBQaW5nZ3kgd2lsbCBwcmludCBhIHB1YmxpYyBIVFRQUyBVUkwgc3VjaCBhcyBodHRwczovL2FiYzEyMy5hLnBpbmdneS5saW5rLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDYWxsIHRoZSBBUEkgcmVtb3RlbHkiLAogICAgICAidGV4dCI6ICJTZW5kIHJlcXVlc3RzIHRvIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5LmxpbmsvdjEvY2hhdC9jb21wbGV0aW9ucyBmcm9tIGEgcGhvbmUsIGEgdGVhbW1hdGUncyBtYWNoaW5lLCBvciBhIGNsb3VkLWJhc2VkIGNvZGluZyBhZ2VudC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To reach a local ds4 DeepSeek V4 inference server from anywhere with Pinggy - run `./ds4-server --ctx 100000 --kv-disk-dir /tmp/ds4-kv --kv-disk-space-mb 8192` (starts on port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

{{< image "ds4_deepseek_v4_pure_c_inference_engine/ds4_deepseek_v4_pure_c_inference_engine_banner.webp" "Terminal-style graphic showing antirez's ds4 running DeepSeek V4 locally, with a Mac Studio or GPU box connecting through ds4-server on port 8000, a Pinggy tunnel, and out to a remote client" >}}

Salvatore Sanfilippo - antirez, the person who wrote Redis - spent about a week writing a plain C program that runs a 284-billion-parameter DeepSeek model on a single Mac Studio at a usable speed. No Python, no PyTorch, no GGML. Just `ds4.c` and a handful of backend-specific files for Metal, CUDA, and ROCm.

The project is called ds4 (short for DwarfStar 4), and it is a strange thing to see succeed in 2026: a narrow, single-purpose inference engine in a field that has spent years consolidating around general-purpose runners like llama.cpp and vLLM.

{{% tldr %}}
1. ds4 is a from-scratch C inference engine built for exactly three model families: DeepSeek V4 Flash, DeepSeek V4 PRO, and GLM 5.2.
2. It runs a 284B-parameter MoE model on a Mac with 96-128 GB of RAM, or on NVIDIA CUDA (including the DGX Spark) and AMD ROCm.
3. Build with `make` (Metal), `make cuda-spark` / `make cuda-generic` (NVIDIA), or `make strix-halo` (AMD), then run `./ds4-server` to start an OpenAI-compatible API on port 8000.
4. Expose that server publicly with one command: `ssh -p 443 -R0:localhost:8000 free.pinggy.io`.
{{% /tldr %}}

## A narrow bet in a world of general-purpose runners

Most local inference tools - llama.cpp, Ollama, vLLM - aim for breadth. They support hundreds of model architectures through a shared abstraction layer (GGML, in llama.cpp's case), which is exactly what makes them useful as a default choice and exactly what limits how far they can push any single model.

<a href="https://github.com/antirez/ds4" target="_blank">ds4</a> goes the other way. It supports three model families, full stop, and every part of the stack - model loading, prompt templating, tool-call parsing, KV cache management, the HTTP server, even a bundled coding-agent CLI - is written and tuned specifically for them. antirez has been public about the debt the project owes to Georgi Gerganov's llama.cpp and GGML ("this project would not exist without them"), but the architectural choice is deliberate: sacrifice generality to extract more performance and correctness out of a small number of models.

That bet paid off in an unusual way. DeepSeek V4 Flash and PRO turned out to tolerate very aggressive asymmetric quantization: routed MoE experts can drop to 2-bit (IQ2_XXS for up/gate projections, Q2_K for down projections) while shared experts and attention layers stay at higher precision. The result is a 284B-parameter model that fits and runs acceptably on consumer-attainable hardware - a Mac Studio, or a Framework Desktop with an AMD Strix Halo chip - rather than a rack of A100s.

## What ds4 actually supports

**Models and quantizations:**

- DeepSeek V4 Flash: `q2-imatrix` (96-128 GB RAM), `q2-q4-imatrix` (last six layers at Q4), `q4-imatrix` (256+ GB RAM), with optional MTP speculative decoding
- DeepSeek V4 PRO: `pro-q2-imatrix` (512 GB machines), `pro-q4` (split across two 512 GB machines)
- GLM 5.2: routed IQ2_XXS, Q2_K, Q4_K, and Q5_K variants

**Hardware backends:**

- Metal - the primary target, Macs with 96 GB+ RAM, with SSD streaming for smaller machines
- NVIDIA CUDA - single and multi-GPU, including the DGX Spark and Ada Lovelace cards
- AMD ROCm - Strix Halo systems and the Framework Desktop
- CPU - reference/debug only, not meant for real use

Here's what single-run Metal performance looks like on real hardware, greedy decoding, 32,768-token context:

| Machine | Quant | Prefill (short) | Generation |
|---|---|---|---|
| M5 Max 128GB | q2 | 87.25 t/s | 34.27 t/s |
| M3 Ultra 512GB | q2 | 84.43 t/s | 36.86 t/s |
| M3 Ultra 512GB | q4 | 78.95 t/s | 35.50 t/s |
| M3 Ultra 512GB | PRO q2 | 138.82 t/s (32k ctx) | 9.56 t/s |

Generation in the mid-30s tokens/second on a laptop-class chip, for a model this size, is the number that made people stop scrolling. If two Macs are available, ds4 can also split the model across them over RDMA - 50/50 tensor parallelism for lower latency, or pipeline parallelism to speed up long prefills. antirez reports a 1.38x prefill speedup running Q4 Flash split across two M5 Max machines on a 9,400-token prompt.

## Building and running it

There's no package manager step - you build the binary for your hardware and run it:

```bash
# Download a quantization sized for your RAM
./download_model.sh q2-imatrix

# Build for your platform
make                 # macOS, Metal
make cuda-spark       # Linux, CUDA on DGX Spark
make cuda-generic     # Linux, generic NVIDIA GPUs
make strix-halo       # Linux, AMD ROCm on Strix Halo
make cpu              # CPU-only, debugging
```

Then run it interactively, one-shot, or as a server:

```bash
./ds4                          # interactive chat
./ds4 -p "Explain RDMA in one paragraph"   # one-shot generation
./ds4-agent                    # bundled coding agent
```

## The part most writeups skip: the API server

Buried past the benchmarks is the feature that matters most if you actually want to use this thing day to day: ds4 ships an OpenAI-compatible REST server.

```bash
./ds4-server --ctx 100000 --kv-disk-dir /tmp/ds4-kv --kv-disk-space-mb 8192
```

That starts a server on `http://127.0.0.1:8000` with:

- `GET /v1/models`
- `POST /v1/chat/completions`
- `POST /v1/messages` (Anthropic-compatible)
- `POST /v1/responses` (OpenAI Responses API)
- `POST /v1/completions`

It also supports multi-session batching (`--batched-session N`), a disk-backed KV cache for prefix reuse across requests, and exact tool-call replay so agent frameworks get consistent behavior across retries. The README lists working integrations with OpenCode, the Pi agent, Codex CLI, and Claude Code - point any of them at your ds4 server the same way you'd point them at OpenAI, and they run against your local DeepSeek V4 instance instead.

That compatibility is also why llama.cpp maintainers have started borrowing ideas back: there's an open <a href="https://github.com/ggml-org/llama.cpp/issues/23891" target="_blank">feature request on llama.cpp's GitHub</a> asking for a power-throttling flag "like antirez/ds4 --power" - a small but telling sign that the narrow project is feeding ideas back into the general-purpose one it grew out of.

## Reaching your ds4 server from anywhere

The catch with any of this is the same catch every local API has: `127.0.0.1:8000` only answers on the machine it's running on. If your Mac Studio or GPU box lives under a desk and you want to hit the API from your laptop on the couch, from your phone, or from a coding agent running in the cloud, you need a way out.

{{< image "ds4_deepseek_v4_pure_c_inference_engine/ds4_tunnel_diagram.webp" "Diagram showing a local ds4-server on port 8000 connecting through an SSH reverse tunnel to Pinggy, which exposes a public HTTPS URL reachable from a phone, teammate, or cloud coding agent" >}}

Pinggy turns that into one SSH command, no account or install required:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Pinggy prints back a public HTTPS URL, something like `https://abc123.a.pinggy.link`. From there:

```bash
curl https://abc123.a.pinggy.link/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model": "ds4flash", "messages": [{"role": "user", "content": "hi"}]}'
```

Point Claude Code, Codex CLI, or any OpenAI-compatible client at that URL instead of `127.0.0.1:8000`, and it talks to your local DeepSeek V4 instance from wherever it happens to be running. If you want the tunnel to survive a reboot or run unattended, a <a href="https://pinggy.io/blog/access_localhost_from_phone_using_qr/" target="_blank">persistent Pinggy setup</a> or a signed-up account with a fixed URL works the same way with a token added to the command.

## The honest tradeoffs

None of this is free. A few things worth knowing before you sink an evening into it:

- **You need the RAM.** 96 GB is the realistic floor for even the smallest Flash quantization. This is not a "try it on your 16 GB laptop" project.
- **2-bit quantization has a quality cost.** It's asymmetric and carefully chosen, but it isn't free - expect DS4 to be noticeably worse than the full-precision cloud version on tasks requiring precision, even if it holds up surprisingly well on typical coding and writing tasks.
- **It's genuinely narrow.** If you want to run Llama, Qwen, or Mistral variants, ds4 is the wrong tool - that's what llama.cpp and Ollama are for. ds4 only does what it says on the tin.
- **The project moves fast and was built fast.** antirez has been upfront that GPT-5.5/5.6 and Claude Fable did a lot of the heavy lifting in the initial C implementation, with him leading the design, testing, and debugging. Expect the rough edges of a young, single-maintainer project - check open issues before you build a workflow around it.

## Why this is worth paying attention to

The interesting part isn't the benchmark numbers, it's the shape of the bet: as open-weight models get good enough and quantization gets aggressive enough, a narrow, hand-tuned engine for one model family can outperform a general one for that specific case - and a single motivated person with an AI coding assistant can now build that engine in about a week instead of a year. That is a fundamentally different cost equation than local inference had even twelve months ago, and it is worth watching whether more narrow, model-specific engines like ds4 start showing up for other frontier open-weight releases.
