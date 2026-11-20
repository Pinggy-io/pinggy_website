---
title: "Colibrì Runs GLM-5.2's 744B Parameters on 25 GB of RAM (and How to Share It with Pinggy)"
description: "Colibri is a single 2,400-line C file that runs the 744-billion-parameter GLM-5.2 MoE model on a 25 GB RAM laptop by streaming experts from disk. Here's how it works, and how to expose its OpenAI-compatible API with Pinggy."
date: 2026-07-11T12:00:00+05:30
draft: false
tags: ["Colibri", "GLM-5.2", "local LLM", "mixture of experts", "self-hosted AI", "Pinggy", "OpenAI API", "llama.cpp alternative"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/colibri_glm_5_2_744b_local_llm/colibri_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBHTE0tNS4yIExvY2FsbHkgd2l0aCBDb2xpYnJpIGFuZCBTaGFyZSB0aGUgQVBJIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGJ1aWxkaW5nIENvbGlicmksIHJ1bm5pbmcgR0xNLTUuMidzIDc0NEItcGFyYW1ldGVyIE1vRSBtb2RlbCBvbiBhIDI1R0IgUkFNIG1hY2hpbmUgYnkgc3RyZWFtaW5nIGV4cGVydHMgZnJvbSBkaXNrLCBhbmQgZXhwb3NpbmcgaXRzIE9wZW5BSS1jb21wYXRpYmxlIEFQSSBwdWJsaWNseSB3aXRoIFBpbmdneS4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2xvbmUgYW5kIGJ1aWxkIENvbGlicmkiLAogICAgICAidGV4dCI6ICJDbG9uZSBnaXRodWIuY29tL0p1c3RWdWdnL2NvbGlicmksIGNkIGludG8gdGhlIGMgZGlyZWN0b3J5LCBhbmQgcnVuIC4vc2V0dXAuc2ggdG8gYnVpbGQgdGhlIGVuZ2luZSBhbmQgcnVuIGl0cyBzZWxmLXRlc3RzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb252ZXJ0IHRoZSBtb2RlbCB0byBpbnQ0IiwKICAgICAgInRleHQiOiAiUnVuIC4vY29saSBjb252ZXJ0IC0tbW9kZWwgL252bWUvZ2xtNTJfaTQgdG8gZG93bmxvYWQgdGhlIEZQOCBjaGVja3BvaW50IGZyb20gSHVnZ2luZyBGYWNlIGFuZCBjb252ZXJ0IGl0IHRvIGludDQgc2hhcmQgYnkgc2hhcmQsIHdpdGhvdXQgbmVlZGluZyB0aGUgZnVsbCA3NTZHQiBjaGVja3BvaW50IG9uIGRpc2sgYXQgb25jZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVGVzdCB3aXRoIGludGVyYWN0aXZlIGNoYXQiLAogICAgICAidGV4dCI6ICJSdW4gQ09MSV9NT0RFTD0vbnZtZS9nbG01Ml9pNCAuL2NvbGkgY2hhdCB0byBsb2FkIHRoZSBtb2RlbCBhbmQgY2hhdCB3aXRoIGl0IGRpcmVjdGx5IGluIHRoZSB0ZXJtaW5hbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIE9wZW5BSS1jb21wYXRpYmxlIEFQSSBzZXJ2ZXIiLAogICAgICAidGV4dCI6ICJSdW4gQ09MSV9NT0RFTD0vbnZtZS9nbG01Ml9pNCBDT0xJX0FQSV9LRVk9bG9jYWwtc2VjcmV0IC4vY29saSBzZXJ2ZSAtLWhvc3QgMTI3LjAuMC4xIC0tcG9ydCA4MDAwIC0tbW9kZWwtaWQgZ2xtLTUuMi1jb2xpYnJpIHRvIGV4cG9zZSAvdjEvY2hhdC9jb21wbGV0aW9ucyBvbiB5b3VyIGxvY2FsIG1hY2hpbmUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSB0aGUgQVBJIHB1YmxpY2x5IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiT3BlbiBhIG5ldyB0ZXJtaW5hbCBhbmQgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDAwIGZyZWUucGluZ2d5LmlvLiBQaW5nZ3kgcHJpbnRzIGEgcHVibGljIEhUVFBTIFVSTCBsaWtlIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5LmxpbmsgdGhhdCB0dW5uZWxzIGRpcmVjdGx5IHRvIHlvdXIgbG9jYWwgQ29saWJyaSBzZXJ2ZXIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNhbGwgaXQgZnJvbSBhbnl3aGVyZSIsCiAgICAgICJ0ZXh0IjogIlNlbmQgcmVxdWVzdHMgdG8geW91ciBQaW5nZ3kgVVJMJ3MgL3YxL2NoYXQvY29tcGxldGlvbnMgZW5kcG9pbnQgd2l0aCBhbiBBdXRob3JpemF0aW9uIGhlYWRlciB1c2luZyB5b3VyIENPTElfQVBJX0tFWSwgdGhlIHNhbWUgd2F5IHlvdSB3b3VsZCBjYWxsIE9wZW5BSSdzIEFQSSwgZnJvbSB5b3VyIHBob25lLCBhIHRlYW1tYXRlJ3MgbGFwdG9wLCBvciBhbnkgT3BlbkFJLWNvbXBhdGlibGUgY2xpZW50LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "colibri_glm_5_2_744b_local_llm/colibri_banner.webp" "Colibri runs the 744-billion-parameter GLM-5.2 model on 25GB of RAM by streaming experts from an NVMe drive" >}}

A "Show HN" post hit the Hacker News front page this week with a genuinely unusual claim: <a href="https://github.com/JustVugg/colibri" target="_blank">a project called Colibrì</a> can run GLM-5.2, Z.ai's 744-billion-parameter mixture-of-experts flagship, on a 12-core laptop with 25 GB of RAM. Not a distilled 7B version. Not a heavily pruned variant. The actual 744B model, on hardware you probably already own.

The post climbed to <a href="https://news.ycombinator.com/item?id=48842459" target="_blank">730+ points and 180 comments</a>. The top comment reads simply: "This is the hacker spirit." That's the right read on it. The author, JustVugg, is upfront that the result is slow - 0.05 to 0.1 tokens per second on the baseline setup, meaning minutes per word, not per paragraph. The point was never speed. The point was proving it could run at all, using nothing but a single C file and a fast disk.

{{% tldr %}}
1. Colibrì is a ~2,400-line C engine that runs GLM-5.2 (744B params, 40B active per token) on 16GB+ RAM by keeping the ~17B dense parameters resident and streaming the 21,504 routed experts from an NVMe drive on demand.
2. Baseline speed is 0.05-0.1 tok/s. Community benchmarks on faster hardware (PCIe5 NVMe, more RAM, a learned expert-pinning cache) reach 0.3-1.0+ tok/s.
3. **Build**: clone <a href="https://github.com/JustVugg/colibri" target="_blank">github.com/JustVugg/colibri</a>, `cd c && ./setup.sh`
4. **Convert the model**: `./coli convert --model /nvme/glm52_i4`
5. **Serve an OpenAI-compatible API**: `COLI_MODEL=/nvme/glm52_i4 COLI_API_KEY=local-secret ./coli serve --host 127.0.0.1 --port 8000 --model-id glm-5.2-colibri`
6. **Expose it publicly**: `ssh -p 443 -R0:localhost:8000 free.pinggy.io`
{{% /tldr %}}

{{< llm-context >}}To run GLM-5.2 locally with Colibri and share it with Pinggy - build Colibri with `cd c && ./setup.sh`, convert the model with `./coli convert --model /nvme/glm52_i4`, then start the API server with `COLI_MODEL=/nvme/glm52_i4 ./coli serve --host 127.0.0.1 --port 8000` (starts on port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io` to get a public HTTPS URL for the OpenAI-compatible /v1/chat/completions endpoint.{{< /llm-context >}}

## The math that makes this possible

GLM-5.2 is a mixture-of-experts (MoE) model, which means most of its 744 billion parameters sit idle for any given token. Only about 40B parameters activate per token - the model routes each token through a small subset of "expert" sub-networks instead of running it through the whole network. If you're unfamiliar with the architecture, we cover the mechanics in more depth in {{< link href="/blog/what_is_mixture_of_experts_in_llm_models/" >}}What is Mixture of Experts in LLM Models{{< /link >}}.

Colibrì's insight is one level deeper than "only load the active experts." It splits the model into two very different categories:

- **Dense components** - attention layers, shared experts, embeddings - about 17B parameters. These are used on every single token, so they stay resident in RAM at int4 quantization (~9.9 GB).
- **Routed experts** - 21,504 of them, spread across 75 MoE layers with 256 experts each, plus the multi-token-prediction (MTP) head. Each is roughly 19 MB at int4. Together they total around 370 GB, which is why they live on disk instead of RAM.

During decoding, the router picks a handful of experts per layer per token - only about 11 GB worth of weights actually change from one token to the next. Colibrì streams just those from disk, backed by a per-layer LRU cache, an optional pinned "hot store" for frequently-used experts, and the OS page cache acting as a free second-level cache. Inactive experts simply never touch RAM.

## A single C file, no dependencies

The engine itself is refreshingly unglamorous: `c/glm.c`, about 2,400 lines, plus a few small headers. No BLAS library, no Python at runtime, no GPU required (though an experimental CUDA backend exists for pinned dense tensors). The matmul kernels are hand-written AVX2 int8/int4/int2 code with dequantization-on-use, hitting around 119 GFLOP/s for single-token throughput on supported CPUs.

That plainness is part of what got this onto the HN front page. Most local-inference projects lean on llama.cpp, vLLM, or a pile of Python dependencies. Colibrì is closer to something you could read start to finish in an afternoon and actually understand.

## Building and running it

You'll need Linux, macOS, or Windows 11 (via MinGW-w64), GCC with OpenMP and AVX2 support, at least 16 GB of RAM, and around 370 GB of free NVMe storage for the int4 model.

```bash
git clone https://github.com/JustVugg/colibri
cd colibri/c
./setup.sh                              # builds the engine, runs self-tests
./coli convert --model /nvme/glm52_i4   # downloads FP8 checkpoint, converts to int4
COLI_MODEL=/nvme/glm52_i4 ./coli chat   # interactive terminal chat
```

The conversion step downloads the 756 GB FP8 checkpoint incrementally and converts it shard by shard, so you never need the full uncompressed checkpoint sitting on disk at the same time as the int4 output. Startup for `coli chat` takes about 30 seconds, with peak memory auto-capped around 20 GB.

If you'd rather skip the conversion, pre-converted int4 weights are available on Hugging Face at <a href="https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4" target="_blank">jlnsrk/GLM-5.2-colibri-int4</a>.

## How slow is "slow," exactly

This is the part of the HN thread where opinions split. The author's own baseline - a 12-core laptop, 25 GB RAM, roughly 1 GB/s NVMe throughput over WSL2 - produces 0.05 to 0.1 tokens per second on cold decode, with each token costing about 11 GB of expert reads from disk. That's minutes per token, not minutes per response.

Community members who tried it on beefier hardware reported meaningfully better, if still far from cloud-API, numbers:

| Hardware | Disk throughput | Speed | Notes |
|---|---|---|---|
| Author baseline (WSL2, 12-core, 25GB RAM) | ~1 GB/s | 0.05-0.1 tok/s | Cold decode, no pinning |
| Ryzen 9 9950X + PCIe5 NVMe | 8.81 GB/s | 0.28 tok/s | 57% matmul-bound after disk upgrade |
| Ryzen AI 9 HX 370 (128GB RAM) | - | 0.37 tok/s | 46.7GB learned pin, 66% cache hit |
| Ryzen AI Max+ (learned pin) | - | 0.40 tok/s | 47.6GB pinned experts |
| Apple M5 Max (128GB RAM) | 14.2 GB/s | 1.06 tok/s | 23% expert cache hit |

Two things are doing the heavy lifting on the faster end: a "learning cache" that records which experts get used most and pins them in whatever spare RAM is available, and speculative decoding via GLM-5.2's native multi-token-prediction head, which generates 2.2-2.8 draft tokens per forward pass when the MTP head is kept at int8 precision (int4 collapses acceptance rates to near zero). The general pattern holds across the benchmarks: below about 5 GB/s of disk throughput, you're I/O-bound; above that, you start hitting CPU and RAM-budget limits instead.

If you're weighing whether your own machine is worth the 370 GB download, our guide on {{< link href="/blog/best_hardware_for_self_hosting_local_llms/" >}}hardware for self-hosting local LLMs{{< /link >}} covers the RAM/VRAM/NVMe tradeoffs for local inference more generally.

## Turning it into an API you can actually call

Interactive chat is fun for a demo, but the more useful mode is `coli serve`, which starts a persistent OpenAI-compatible HTTP server:

```bash
COLI_MODEL=/nvme/glm52_i4 COLI_API_KEY=local-secret ./coli serve \
  --host 127.0.0.1 --port 8000 --model-id glm-5.2-colibri
```

This exposes the endpoints you'd expect from any OpenAI-style server: `GET /v1/models`, `POST /v1/chat/completions` (with SSE streaming), `POST /v1/completions`, and `GET /health` for queue status. It supports temperature and top-p sampling, `max_tokens`, GLM-5.2's reasoning block via `enable_thinking: true`, request queuing (8 slots by default), and up to 16 isolated KV-cache contexts via a `cache_slot` parameter.

Test it locally:

```bash
curl http://127.0.0.1:8000/v1/chat/completions \
  -H "Authorization: Bearer local-secret" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-5.2-colibri",
    "messages": [{"role": "user", "content": "Hello"}],
    "stream": true
  }'
```

Because it speaks the same protocol as OpenAI's API, any existing OpenAI-client code works against it with just a `base_url` change.

## Sharing the endpoint with Pinggy

Given the speed profile, the realistic way to use this is to kick off a long-running query on a home machine - overnight, or while you're at work - and check back later from somewhere else. That means you need the API reachable from outside your home network, without opening router ports or standing up a VPN.

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Pinggy prints a public HTTPS URL:

```
You are assigned a random subdomain: https://abc123.a.pinggy.link
```

That URL now proxies straight to your Colibrì server. From your phone, a laptop at a coworking space, or a teammate's machine, you can call the same endpoint:

```bash
curl https://abc123.a.pinggy.link/v1/chat/completions \
  -H "Authorization: Bearer local-secret" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "glm-5.2-colibri",
    "messages": [{"role": "user", "content": "Summarize what changed while I was away."}],
    "stream": false
  }'
```

`COLI_API_KEY` already gates the endpoint with a bearer token, so you're not relying on obscurity alone. If you want an extra layer while demoing to someone, Pinggy also supports HTTP basic auth on the tunnel itself:

```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io -t "b:myuser:mypassword"
```

If you're leaving this running long enough to matter, a fixed subdomain from <a href="https://pinggy.io" target="_blank">Pinggy's paid plans</a> means you don't have to update the URL in your client config every time you restart the tunnel.

## Should you actually run this

Be honest with yourself about the use case. At 0.05-1 tok/s, this is not a chat replacement, and several HN commenters pushed back hard on exactly that point - impressive engineering, impractical beyond demos. Where it does make sense:

**Overnight batch jobs.** Queue up a long, complex prompt before bed - a code review, a research summary, a document analysis - and let it grind through the response while you sleep. Check the result over Pinggy in the morning from your phone.

**Privacy-sensitive one-off queries.** If you have something you genuinely don't want touching a third-party API, running it locally (however slowly) and pulling the result remotely later is a legitimate tradeoff.

**Learning how MoE inference actually works.** The codebase is small enough to read, and the `coli plan --json` command inspects a model's safetensors headers without loading tensors, which is a good way to understand the shape of a model like this before you commit 370 GB of disk to it.

**Hardware-upgrade decision making.** The benchmark table above is a decent proxy for "is my NVMe drive the bottleneck for local AI work in general." If Colibrì is I/O-bound on your machine, so is most other memory-mapped local inference you'll try.

What it's not good for: anything interactive, anything with a deadline measured in minutes, or production traffic of any kind. The project's own benchmark harness (`coli bench hellaswag arc_challenge mmlu`) is still waiting on community-submitted accuracy numbers for the int4 quantization, so treat output quality as unverified against the full-precision model too.

## Conclusion

Colibrì is a good reminder that "runs on consumer hardware" and "usable" are different claims, and that's fine - the project never pretended otherwise. What it does prove is that a 744B-parameter frontier model isn't fundamentally locked to datacenter GPUs; it's locked to how fast you can move ~11 GB of weights per token, and that's a problem disk streaming and careful caching can chip away at. If you have a fast NVMe drive sitting in a machine you don't use much, it's a genuinely interesting afternoon project - and pairing it with a Pinggy tunnel means the results are useful even when your laptop is the one doing the (slow) thinking.
