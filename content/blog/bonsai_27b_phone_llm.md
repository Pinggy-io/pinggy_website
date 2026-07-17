---
title: "Bonsai 27B: A 27B Model That Fits on a Phone (and What It Gives Up to Get There)"
description: "PrismML's Bonsai 27B compresses a 27B-parameter Qwen3.6 model to 3.9GB using native 1-bit weights and runs it on an iPhone at 11 tok/s. Here's how the quantization works, the benchmarks it quietly loses, and how to try it in a browser."
date: 2026-07-17T11:00:00+05:30
lastmod: 2026-07-17T11:00:00+05:30
draft: false
tags: ["Bonsai 27B", "PrismML", "on-device AI", "LLM quantization", "1-bit LLM", "edge AI", "local LLM", "Qwen3.6", "WebGPU"]
categories: ["Technology", "AI", "Edge AI"]
og_image: "images/bonsai_27b_phone_llm/bonsai_27b_phone_llm_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "bonsai_27b_phone_llm/bonsai_27b_phone_llm_banner.webp" "Bonsai 27B compresses a 27-billion-parameter model from 54GB to 3.9GB so it runs locally on a phone" >}}

3.9GB. That's the entire footprint of a 27-billion-parameter language model that now runs on an iPhone 17 Pro Max, fully offline, at 11 tokens a second. No API key, no network call, no server bill. The same weights that would normally need 54GB in standard 16-bit precision.

<a href="https://prismml.com/" target="_blank">PrismML</a>, a Caltech spinout backed by Khosla Ventures, shipped this as **Bonsai 27B** on July 14, 2026. It's a compressed build of Alibaba's open <a href="https://huggingface.co/collections/prism-ml/bonsai-27b" target="_blank">Qwen3.6 27B</a>, and within a day it was sitting near the top of Hacker News with well over 500 points, mostly because the top comments were busy poking holes in the benchmark chart rather than just cheering the file size.

{{% tldr %}}
1. **What shipped** - Bonsai 27B, a 27B-parameter model compressed to a 3.9GB 1-bit build or a 5.9GB ternary build, both Apache 2.0 and downloadable from <a href="https://huggingface.co/prism-ml" target="_blank">Hugging Face</a>.
2. **How it's small** - PrismML trained the model natively at 1-bit precision instead of quantizing an existing checkpoint after the fact, so there's no full-precision fallback hiding anywhere in the weights.
3. **How fast** - 11 tok/s on an iPhone 17 Pro Max, up to 87 tok/s on an Apple M5 Max, with a lossless speculative-decoding drafter (DSpark) doing part of the work.
4. **What it loses** - math and code stay close to the original model's scores; tool-calling and vision drop noticeably more, which matters if you were hoping to run agent workflows on it.
5. **Try it with zero installs** - a WebGPU build runs the 1-bit model directly in Chrome, Edge, or Safari via a <a href="https://huggingface.co/spaces/webml-community/bonsai-webgpu-kernels" target="_blank">Hugging Face Space</a>.
6. **The bigger story** - <a href="https://www.cnbc.com/2026/07/14/apple-prismml-ai-compression-iphone.html" target="_blank">CNBC reported</a> the same day that Apple is evaluating PrismML's compression tech for future iPhones.
{{% /tldr %}}

## What actually shipped

Bonsai 27B is a multimodal model built on Qwen3.6 27B's hybrid-attention architecture (roughly 75% linear attention layers, 25% full attention), with the full ~27.32B language weights plus a 461M-parameter vision tower kept in 4-bit so the model can still read screenshots and documents, not just text. It ships in two compressed forms:

- **1-bit build** - 3.9GB, 1.125 effective bits per weight, tuned to fit inside the memory budget of an iPhone 17 Pro.
- **Ternary build** - 5.9GB, 1.71 effective bits per weight, aimed at laptop-class hardware where you can afford a bit more memory for better quality.

Both are on Hugging Face under the `prism-ml` org, in GGUF and MLX formats, licensed Apache 2.0. If you've got `llama.cpp` or `mlx-lm` set up already, this is a normal model pull, not a special SDK.

## The trick: train at 1-bit, don't quantize down to it

Most "1-bit" or "2-bit" LLMs you've seen are a full-precision model that gets quantized after training, with a handful of sensitive layers (usually the embeddings and the LM head) left at higher precision because they break too badly otherwise. PrismML didn't do that here. Bonsai was trained natively at 1-bit from the start, with the low-precision constraint applied end-to-end across embeddings, attention, and the MLP layers. Nothing gets a high-precision escape hatch.

The ternary build uses what PrismML calls a "g128" format: weights are grouped in blocks of 128, and each group shares a single FP16 scale factor across three possible weight values (-1, 0, +1). That's the real trick behind the density number - you're not storing 128 individual scales, just one, so the per-weight overhead stays close to the theoretical 1.58 bits of a ternary value. Smaller groups would preserve more precision per group but need more scale factors; PrismML's numbers land at 1.71 effective bits per weight as the tradeoff point.

{{< image "bonsai_27b_phone_llm/bonsai_size_comparison.webp" "Bar chart comparing Bonsai 27B file size across FP16 (54GB), ternary (5.9GB), and 1-bit (3.9GB) builds" >}}

That's roughly a 9x reduction for the ternary build and close to 14x for the 1-bit build, off the same 27B parameter count. No pruning, no smaller model swapped in - the same architecture, just represented with far fewer bits per weight.

## How fast it actually is

Numbers, not vibes: on an iPhone 17 Pro Max, the 1-bit build runs at about 11 tokens per second. On an Apple M5 Max, PrismML reports up to 87 tok/s for the 1-bit build and 58 tok/s for the heavier ternary build. Both builds carry a 262K-token context window, which is unusually long for anything you'd expect to run on a phone.

Part of that speed comes from **DSpark**, a speculative-decoding drafter layer trained specifically against Bonsai as its target model, alongside a standard multi-token-prediction (MTP) path. Speculative decoding lets a small, cheap draft model guess several tokens ahead and the big model verify them in one pass instead of generating token-by-token - and because it's a lossless verification scheme, you get the speedup (PrismML reports 1.37x on the CUDA serving path) without changing the output distribution. It's a good example of how "make the model smaller" and "make the model faster" are increasingly two different engineering problems solved with two different tricks stacked together.

## The benchmark that gives away the tradeoff

Here's where the marketing copy and the Hacker News thread start to diverge. PrismML's own numbers show the ternary build scoring 78 on MMLU against 84 for the uncompressed Qwen3.6 27B - about 93% retention - and an average of 80.49 across 15 benchmarks in thinking mode, which PrismML frames as roughly 95% retention of full-precision quality.

That's a genuinely good result, but it's an average, and averages hide the interesting part. Multiple people who actually ran the numbers by category (including a detailed breakdown from independent testing) found that **math and code hold up close to parity - PrismML has these sitting in the 90s - while tool-calling drops into the 70s, and vision quality falls off too.** Quantizing a model this aggressively doesn't cost you evenly across skills. Reasoning that stays inside the model's own head (chain-of-thought math, writing code) degrades gracefully. Anything that depends on precisely structured, multi-step output - calling a tool with the right arguments in the right format, in the exact schema an agent harness expects - is more fragile, and it shows.

If you're picturing Bonsai as the backbone for an on-device agent that calls tools, reads your calendar, and books things for you, that's exactly the workload where the compression bites hardest. It's a fine model for a phone-based chat assistant or a private coding helper. It is not yet a drop-in replacement for a full-precision model in an agentic pipeline, and at least one early Android tester reported getting a screen full of exclamation marks back instead of an answer - a reminder that "just shipped" software still ships some rough edges.

## Try it without installing anything

You don't need a phone or a beefy GPU to see this working. PrismML worked with the WebML community to build custom WebGPU kernels for Bonsai, and there's a live demo running the 1-bit build entirely in-browser at the <a href="https://huggingface.co/spaces/webml-community/bonsai-webgpu-kernels" target="_blank">Hugging Face Space</a>. WebGPU is the successor to WebGL - it gives the browser near-native access to the GPU's compute shaders, which is what makes running a 3.9GB model's matrix multiplications in a browser tab even remotely practical.

Expect 8 to 30 tokens per second depending on your GPU, and a one-time multi-gigabyte download that gets cached for later runs. Chrome and Edge support WebGPU well; Safari's support is newer and more experimental, including on iOS.

## Why Apple is suddenly in this story

The same day Bonsai 27B shipped, <a href="https://www.cnbc.com/2026/07/14/apple-prismml-ai-compression-iphone.html" target="_blank">CNBC reported</a> that Apple is evaluating PrismML's compression technology, with PrismML CEO Babak Hassibi saying Apple and other companies have been benchmarking the startup's models for speed, energy efficiency, and on-device performance. Hassibi described the talks as early - "things are progressing nicely" is about as much specificity as he gave - but it's not hard to see why Apple would be interested. Apple has spent years pitching on-device, privacy-preserving AI as a differentiator, and a technique that claims up to 15x memory reduction with 90%+ benchmark retention is exactly the kind of thing that turns "on-device AI" from a marketing slide into something that actually fits in a phone's RAM.

Worth separating fact from spin here: this is "evaluating," not an acquisition or a signed deal. Companies benchmark outside vendors' technology constantly without it going anywhere. But the timing (Apple's own on-device models have been criticized for lagging the frontier) makes it a genuinely interesting thread to watch rather than routine startup PR.

## What this means if you're building something

The headline trick here is that Bonsai needs no server at all - it's designed to run entirely on the device in your pocket. But most people prototyping with a 27B-class model day to day are still going to run it on a workstation or a home server first, where you have more RAM to spare and don't have to fight a phone's power budget. If you're serving the ternary build from a Mac Studio or a Linux box with [something like llama.cpp or Ollama](/blog/whichllm_find_best_local_llm/) and want to hit that API from your phone, or hand a teammate a URL without deploying anything, you don't need to open a router port. One tunnel command does it:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

That forwards whatever's listening on port 8000 - your local model server - to a public HTTPS URL you can hit from anywhere, torn down the moment you close the terminal. It's the same approach covered in our [guide to exposing an Ollama server online](/blog/forward_ollama_port_11434_online_access/), and it works identically for any OpenAI-compatible endpoint a Bonsai-based server exposes.

## The bigger picture

Bonsai 27B is another data point in a trend that's been building all year: the interesting frontier in local AI isn't only "can we make a bigger model," it's "how much of a big model's capability can we keep after we've made it small enough to fit where people actually want to run it." PrismML's answer - train at low precision from scratch instead of quantizing afterward - is a genuinely different approach from KV-cache compression tricks or mixture-of-experts sparsity, and it's aggressive enough to draw attention from Apple.

The honest version of the pitch isn't "a 27B model that's exactly as good as the original, now on your phone." It's "a 27B model that's still surprisingly good at reasoning and code, meaningfully worse at precise tool use, and small enough that none of that matters if all you needed was a private assistant that never leaves your device." For a lot of use cases, that's already enough.
