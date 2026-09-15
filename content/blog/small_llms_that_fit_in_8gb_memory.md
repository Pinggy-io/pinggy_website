---
title: "Small LLMs That Fit in 8GB: The Best Models to Self-Host in 2026"
description: "Which open-weight LLMs actually fit in 8GB of VRAM or RAM in 2026, with measured file sizes, KV cache math from published configs, and Ollama commands for Qwen3.5, Gemma 4, Ministral 3, Granite 4.1, Nemotron 3 Nano, and Phi-4-mini."
date: 2026-09-15T09:00:00+05:30
lastmod: 2026-09-14T09:00:00+05:30
draft: false
tags: ["local LLM", "self-hosted AI", "Ollama", "edge AI", "on-device AI"]
categories: ["Technology", "AI", "Self-Hosting"]
og_image: "images/small_llms_that_fit_in_8gb_memory/small_llms_8gb_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFBpY2sgYW5kIFJ1biBhIFNtYWxsIExMTSBUaGF0IEZpdHMgaW4gOEdCIG9mIE1lbW9yeSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBjaG9vc2luZyBhIHNtYWxsIG9wZW4td2VpZ2h0IGxhbmd1YWdlIG1vZGVsIHRoYXQgZml0cyBpbnNpZGUgOEdCIG9mIFZSQU0gb3Igc3lzdGVtIFJBTSwgc2l6aW5nIHRoZSBLViBjYWNoZSBjb3JyZWN0bHksIHJ1bm5pbmcgaXQgd2l0aCBPbGxhbWEsIGFuZCByZWFjaGluZyBpdCByZW1vdGVseSB3aXRoIFBpbmdneS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc21hbGxfbGxtc190aGF0X2ZpdF9pbl84Z2JfbWVtb3J5L3NtYWxsX2xsbXNfOGdiX2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkJ1ZGdldCBmb3IgV2VpZ2h0cyBQbHVzIEtWIENhY2hlLCBOb3QgV2VpZ2h0cyBBbG9uZSIsCiAgICAgICJ0ZXh0IjogIkFuIDhHQiBidWRnZXQgaGFzIHRvIGhvbGQgcXVhbnRpemVkIHdlaWdodHMsIHRoZSBLViBjYWNoZSwgYW5kIHJ1bnRpbWUgb3ZlcmhlYWQuIFJlc2VydmUgcm91Z2hseSA2R0IgZm9yIHdlaWdodHMgYW5kIGtlZXAgMS41LTJHQiBmcmVlLiBBIGNvbnZlbnRpb25hbCA4QiBtb2RlbCB3aXRoIDM2IGZ1bGwtYXR0ZW50aW9uIGxheWVycyBzcGVuZHMgYWJvdXQgMTQ0S0IgcGVyIHRva2VuIG9uIEtWIGNhY2hlLCB3aGljaCBpcyA0LjVHaUIgYXQgMzJLIGNvbnRleHQsIHdoaWxlIFF3ZW4zLjUtOUIga2VlcHMgb25seSA4IG9mIGl0cyAzMiBsYXllcnMgb24gZnVsbCBhdHRlbnRpb24gYW5kIHNwZW5kcyAzMktCIHBlciB0b2tlbiwgb3IgMUdpQiBhdCB0aGUgc2FtZSBjb250ZXh0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQaWNrIGEgTW9kZWwgZm9yIFlvdXIgTWVtb3J5IFR5cGUiLAogICAgICAidGV4dCI6ICJXaXRoIDhHQiBvZiBkZWRpY2F0ZWQgR1BVIFZSQU0sIHJ1biBRd2VuMy41LTlCIGF0IFE0X0tfTSAoNi42R0IpIGZvciB0aGUgYmVzdCBxdWFsaXR5IHBlciBnaWdhYnl0ZSwgb3IgTWluaXN0cmFsIDMgOEIgKDYuMEdCKSBmb3IgYSBwbGFpbiBkZW5zZSBBcGFjaGUgMi4wIG1vZGVsLiBXaXRoIDhHQiBvZiB0b3RhbCBzeXN0ZW0gUkFNIGFuZCBubyBHUFUsIGRyb3AgdG8gUXdlbjMuNS00QiAoMy40R0IpLCBHZW1tYSA0IEUyQiBRQVQgKDQuM0dCKSwgTmVtb3Ryb24gMyBOYW5vIDRCICgyLjhHQiksIG9yIFBoaS00LW1pbmkgKDIuNUdCKS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2hvb3NlIGEgUXVhbnRpemF0aW9uIiwKICAgICAgInRleHQiOiAiUTRfS19NIGlzIHRoZSBkZWZhdWx0IGZvciA4R0I6IHJvdWdobHkgaGFsZiB0aGUgbWVtb3J5IG9mIEZQMTYgd2l0aCBhIHF1YWxpdHkgZHJvcCBtb3N0IHVzZXJzIGNhbm5vdCBkZXRlY3QuIEdvb2dsZSBwdWJsaXNoZXMgUXVhbnRpemF0aW9uLUF3YXJlIFRyYWluaW5nIGJ1aWxkcyBvZiBHZW1tYSA0LCB3aGljaCByZWNvdmVyIG1vc3Qgb2YgdGhlIHF1YWxpdHkgbG9zdCB0byBuYWl2ZSA0LWJpdCByb3VuZGluZywgc28gZ2VtbWE0OjEyYi1pdC1xYXQgZml0cyBhIDEyQiBkZW5zZSBtb2RlbCBpbnRvIDcuMkdCLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIE9sbGFtYSBhbmQgUHVsbCB0aGUgTW9kZWwiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIE9sbGFtYSB3aXRoIGN1cmwgLWZzU0wgaHR0cHM6Ly9vbGxhbWEuY29tL2luc3RhbGwuc2ggfCBzaCwgdGhlbiBwdWxsIHRoZSBtb2RlbCB3aXRoIG9sbGFtYSBwdWxsIHF3ZW4zLjU6OWIuIENhcCB0aGUgY29udGV4dCB3aXRoIGEgbnVtX2N0eCBzZXR0aW5nIHRoYXQgbGVhdmVzIGhlYWRyb29tLCBiZWNhdXNlIE9sbGFtYSBzaWxlbnRseSBvZmZsb2FkcyBsYXllcnMgdG8gQ1BVIHdoZW4gdGhlIEtWIGNhY2hlIHB1c2hlcyBwYXN0IGF2YWlsYWJsZSBWUkFNLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBY2Nlc3MgdGhlIE1vZGVsIFJlbW90ZWx5IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiT2xsYW1hIHNlcnZlcyBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEkgb24gcG9ydCAxMTQzNC4gVG8gcmVhY2ggaXQgZnJvbSBhIHBob25lIG9yIGFub3RoZXIgbWFjaGluZSwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoxMTQzNCBmcmVlLnBpbmdneS5pbyBpbiBhIHNlY29uZCB0ZXJtaW5hbC4gUGluZ2d5IHJldHVybnMgYSBwdWJsaWMgSFRUUFMgVVJMIHN1Y2ggYXMgaHR0cHM6Ly94eHh4eC5ydW4ucGluZ2d5LWZyZWUubGluayB3aXRoIG5vIHBvcnQgZm9yd2FyZGluZyBvciBmaXJld2FsbCBjaGFuZ2UuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "small_llms_that_fit_in_8gb_memory/small_llms_8gb_banner.webp" "Small LLMs that fit within 8GB of memory for self-hosting" >}}

Most people who want to run an LLM on their own hardware are not shopping for a GPU, they are working with whatever is already on the desk. That usually means an 8GB graphics card or a laptop with 8GB of soldered RAM, and for a long time that budget bought you a 7B model that was pleasant to demo and frustrating to use. That changed in 2026: Alibaba's Qwen3.5-9B ships at 6.6GB in 4-bit and outscores OpenAI's 120B gpt-oss on GPQA Diamond (81.7 vs 80.1), and Google's quantization-aware build of Gemma 4 12B squeezes a 12-billion-parameter dense multimodal model into 7.2GB.

This guide covers what actually fits in 8GB, how to budget that 8GB correctly (weights are only part of the bill), and which model to pick depending on whether your 8GB is dedicated VRAM or shared system RAM.

{{< llm-context >}}To run a small LLM in 8GB and reach it remotely with Pinggy - run `ollama pull qwen3.5:9b` then `ollama serve` (starts on port 11434), then in a new terminal run `ssh -p 443 -R0:localhost:11434 free.pinggy.io` to get a public HTTPS URL for the Ollama API.{{< /llm-context >}}

{{% tldr %}}

**The highest-scoring model an 8GB machine can run** is not one that fits in 8GB at all: **Qwen3.5-35B-A3B** (36B total, ~3B active) via <a href="https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF" target="_blank">Unsloth's UD-IQ2_XXS dynamic quant</a> (9.93GB) with llama.cpp's `--n-cpu-moe` parking the experts in system RAM. It scores 15 on the Artificial Analysis Intelligence Index against 14 for the best model that fits natively. Needs 32GB of RAM and runs slower.

**If your 8GB is dedicated GPU VRAM:**
- <a href="https://huggingface.co/Qwen/Qwen3.5-9B" target="_blank">Qwen3.5-9B</a> at Q4_K_M (`ollama pull qwen3.5:9b`, 6.6GB) - the default pick. Apache 2.0, 262K context, native vision, and a hybrid attention design that keeps the KV cache small.
- <a href="https://ollama.com/library/gemma4" target="_blank">Gemma 4 12B QAT</a> (`gemma4:12b-it-qat`, 7.2GB) - the largest dense model that fits, but it leaves almost no room for long context.
- <a href="https://mistral.ai/news/mistral-3/" target="_blank">Ministral 3 8B</a> (`ministral-3:8b`, 6.0GB) - Apache 2.0, multimodal, 256K context.

**If your 8GB is total system RAM (no discrete GPU):**
- `qwen3.5:4b` (3.4GB), `gemma4:e2b-it-qat` (4.3GB), `nemotron-3-nano:4b` (2.8GB), or `phi4-mini:3.8b` (2.5GB).

**The rule everyone gets wrong:** weights are not the whole budget. A conventional 8B model burns ~144KB of KV cache per token, which is 4.5GiB at 32K context. Qwen3.5-9B spends 32KB per token (1GiB at 32K) because only 8 of its 32 layers use full attention.

**What does not fit:** `gpt-oss:20b` (14GB), Gemma 4 26B/31B (16-20GB), Nemotron 3 Nano 30B (24GB). No amount of quantization gets these under 8GB at usable quality.

{{% /tldr %}}

## The 8GB Budget Is Not Just Weights

The most common mistake is treating an 8GB limit as "find a model file under 8GB." Three things compete for that space: the quantized weights, the KV cache that grows with your conversation, and 0.5-1GB of runtime and framebuffer overhead. Fill it with weights alone and the first long prompt pushes layers onto the CPU, where throughput drops by an order of magnitude.

The KV cache is the part worth doing arithmetic on, because it varies enormously between models that look identical on a spec sheet. The formula is straightforward:

`bytes per token = layers x 2 x kv_heads x head_dim x bytes_per_element`

Running that against the published `config.json` for each model makes the differences obvious. Here is the fp16 KV cache cost at 32K context for models in this class:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Attention layout</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">KV per token</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">KV at 32K</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Gemma 4 E4B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">35 sliding (512) + 7 full</td>
  <td style="border:1px solid #ddd;padding:0.5em;">15.1 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0.47 GiB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.5-9B / 4B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">24 linear + 8 full</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32.0 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.00 GiB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Gemma 4 12B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">40 sliding (1024) + 8 full</td>
  <td style="border:1px solid #ddd;padding:0.5em;">74.0 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.31 GiB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3-8B (previous gen)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">36 full</td>
  <td style="border:1px solid #ddd;padding:0.5em;">144.0 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4.50 GiB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Granite 4.1 8B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">40 full</td>
  <td style="border:1px solid #ddd;padding:0.5em;">160.0 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5.00 GiB</td>
</tr>
</tbody>
</table>

That spread is the single most important thing to understand about small models in 2026. Granite 4.1 8B has smaller weights than Qwen3.5-9B (5.3GB vs 6.6GB), but at 32K context its cache alone needs 5GiB, so the pair blows past 8GB while Qwen3.5-9B is still comfortably inside it. The architectural reason is that Qwen3.5 inherits the Qwen3-Next hybrid attention layout: its `config.json` sets `full_attention_interval: 4`, so 24 of its 32 layers are linear-attention blocks with a fixed-size recurrent state and only 8 keep a cache that grows with sequence length. Those 8 layers carry 4 KV heads at 256 dimensions each, which is <a href="https://techaiwire.com/articles/qwen-3-5-9b-kv-cache-hybrid-attention/" target="_blank">where the 32KB-per-token figure comes from</a>, and it is a 4x saving over the same model with full attention throughout. Gemma 4 takes a different route to the same place, alternating sliding-window attention (512 or 1024 tokens) with a handful of global layers.

This shows up in measured runs. A <a href="https://localllm.in/blog/best-local-llms-8gb-vram-2025" target="_blank">published llama.cpp benchmark</a> on an RTX 3070 (8GB) reports Qwen3.5-9B holding a steady 55-58 tok/s from 4K all the way to 32K context at about 7GB peak VRAM, while a conventional 12B model in the same test dropped to 4.3 tok/s and spilled to 10GB.

## How They Actually Rank

<a href="https://artificialanalysis.ai/leaderboards/models" target="_blank">Artificial Analysis</a> runs the most useful independent scoreboard for this, because it scores every model on the same ten evaluations rather than trusting vendor-reported numbers. Here is where the 8GB-class models sit on its Intelligence Index, alongside what each one costs you on disk. The amber bar is the odd one out: it is the MoE-offload route, which runs on an 8GB card without fitting inside it.

{{< image "small_llms_that_fit_in_8gb_memory/small_llms_that_fit_in_8gb_memory_chart.webp" "Two-panel chart: Artificial Analysis Intelligence Index v4.3 for models that fit in 8GB, and the disk size of each, with an 8GB budget line" >}}

One caveat that trips people up: **Artificial Analysis rescales this index, and the versions are not comparable.** The current v4.3 folds in ten much harder evaluations, including Humanity's Last Exam and Terminal-Bench v4.0, so scores compress downward across the board. AA's own March 2026 write-up of the Qwen3.5 small models put the 9B at 32; the same model reads 14 on today's leaderboard. Neither number is wrong, they are just different rulers, and secondary sites quote them interchangeably. Check the version string before comparing any two scores.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">AA Index v4.3</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Smallest good build</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Fits 8GB?</th>
</tr>
</thead>
<tbody>
<tr style="background:#fdf6e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.5 35B-A3B</strong><br><span style="font-size:0.9em;color:#666;">Unsloth UD-IQ2_XXS</span></td>
  <td style="border:1px solid #ddd;padding:0.5em;">15</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9.93GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, with MoE offload</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Gemma 4 26B A4B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">17</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16GB (QAT)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Gemma 4 12B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">14</td>
  <td style="border:1px solid #ddd;padding:0.5em;">7.2GB (QAT)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, barely</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.5 9B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">14</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.6GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.5 4B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">13</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3.4GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">gpt-oss-20b</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9</td>
  <td style="border:1px solid #ddd;padding:0.5em;">14GB (MXFP4)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Gemma 4 E4B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">9</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.1GB (QAT)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Granite 4.1 8B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">7</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5.3GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Weights yes, context no</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Nemotron 3 Nano 4B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">7</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.8GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Phi-4 Mini</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">6</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.5GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Ministral 3 8B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">5</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.0GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
</tbody>
</table>

Ranking and memory bill are only loosely related: Qwen3.5 4B sits one point off the top of the bracket at half the weights of the models above it.

## The Models That Fit in 8GB of VRAM

**Qwen3.5-35B-A3B via Unsloth** is the biggest thing on this list, and the only entry here that does not fit in 8GB of VRAM at all. It is a mixture of experts: 36B parameters total, roughly 3B active per token, which means llama.cpp can keep attention and the KV cache on the card and push the bulky expert tensors into system RAM. Unsloth's `UD-IQ2_XXS` build is 9.93GB on disk and it tops the 8GB bracket on the Intelligence Index at 15. The [offloading section](#stretching-past-8gb-unsloth-dynamic-quants-and-moe-offloading) below has the command and the caveats - the short version is that it needs 32GB of system RAM and trades speed for capability.

**Qwen3.5-9B** is the one to try first if you want everything on the GPU. Released March 2, 2026 under Apache 2.0, it is a 10B-parameter multimodal model (there is a 27-layer vision tower in the config alongside the text stack) with a 262,144-token position limit. It ties Gemma 4 12B at the top of the 8GB bracket on the current Intelligence Index, and it gets there at 6.6GB rather than 7.2GB. The catch, and it is a real one: Artificial Analysis notes the Qwen3.5 small models burn 230-390M output tokens to complete the index, far more than frontier models. Thinking mode is where the quality comes from, and it costs you wall-clock time on slow hardware.

{{< image "small_llms_that_fit_in_8gb_memory/qwen35_ollama_tag_sizes.webp" "Ollama's tag list for qwen3.5 showing download sizes: 0.8b at 1.0GB, 2b at 2.7GB, 4b at 3.4GB, 9b at 6.6GB, and 27b at 17GB, all with a 256K context window" >}}

Ollama's tag list makes the 8GB cutoff easy to see: `9b` at 6.6GB is the last rung that fits, and the jump to `27b` at 17GB skips straight past every consumer 8GB card.

**Gemma 4 12B** is the interesting outlier. The BF16 checkpoint is 24GB, the naive Q4_K_M is 7.6GB, and Google's <a href="https://ai.google.dev/gemma/docs/core" target="_blank">quantization-aware training</a> build (`gemma4:12b-it-qat`) lands at 7.2GB, because QAT models are fine-tuned with quantization noise simulated during training and recover most of what naive 4-bit rounding throws away; our post on {{< link href="/blog/turboquant_for_efficient_llms_and_how_gemma_4_utilizes_it/" >}}TurboQuant and Gemma 4{{< /link >}} has the math. The tradeoff at 7.2GB is obvious: roughly 800MB left, about 11K tokens of context. A short-conversation option, not a long-document one.

{{< image "small_llms_that_fit_in_8gb_memory/gemma4_12b_qat_sizes.webp" "Ollama tag sizes for Gemma 4 12B: bf16 at 24GB, q8_0 at 13GB, q4_K_M at 7.6GB, and the quantization-aware-training build at 7.2GB" >}}

The four 12B builds side by side show the whole compression ladder: 24GB at bf16, 13GB at q8_0, 7.6GB at plain q4_K_M, and 7.2GB for the QAT build that was trained to survive the drop.

**Ministral 3 8B** (`ministral-3:8b`, 6.0GB) and **Granite 4.1 8B** (`granite4.1:8b`, 5.3GB) are both Apache 2.0 plain dense transformers, which is a feature if you hit tooling bugs with hybrid-attention architectures - llama.cpp and vLLM support for conventional models is simply more battle-tested. Being conventional is also why Granite's KV cache is the heaviest here: IBM dropped Granite 4.0's hybrid Mamba design for a dense decoder-only stack, so it suits short-context RAG rather than a 32K chat window.

## The Models That Fit in 8GB of System RAM

If your 8GB is shared with the operating system, the browser, and your editor, you have roughly 4-5GB to play with. CPU inference is also bandwidth-bound in a way GPU inference is not, so smaller is genuinely faster here, not just smaller.

**Qwen3.5-4B** (3.4GB) is the sweet spot. It uses the same 24-linear/8-full attention layout as the 9B, so it carries the same 32KB-per-token cache cost, and it gives up only one point of Intelligence Index against the 9B (13 vs 14) for less than half the weights. Below that the drop is steeper: `qwen3.5:2b` (2.7GB) falls to 7 and `qwen3.5:0.8b` (1.0GB) to 6, so do not go below 4B unless the memory genuinely forces it.

**Gemma 4 E2B and E4B** are built for exactly this scenario. The E-series uses Per-Layer Embeddings so that E4B's 8.0B total parameters behave like 4.5B at inference time. The QAT builds are `gemma4:e2b-it-qat` (4.3GB) and `gemma4:e4b-it-qat` (6.1GB), both accept audio as well as text and images, and E4B's KV cache is the lightest here at 15.1 KiB per token - 32K context costs under half a gigabyte.

**Nemotron 3 Nano 4B** (`nemotron-3-nano:4b`, 2.8GB) is NVIDIA's agentic pick: a hybrid Mamba-Transformer pruned and distilled from Nemotron Nano 9B v2, with configurable reasoning traces and a 256K context. It ships under the NVIDIA Open Model License rather than Apache 2.0, so check the terms before commercial use.

**Phi-4-mini** (`phi4-mini:3.8b`, 2.5GB) remains the best math-and-reasoning model at its size, MIT licensed, with function calling and a 128K context. Microsoft's synthetic-data training recipe still punches above its parameter count on structured reasoning, though it is text-only.

**Granite 4.1 3B** (2.1GB) and **Ministral 3 3B** (3.0GB) round out the tier if you want a plain dense transformer with no reasoning-mode surprises.

## What Does Not Fit, No Matter What You Read

A few models get recommended for 8GB setups and should not be. OpenAI's `gpt-oss:20b` is 14GB in Ollama's MXFP4 build - the repeated "runs in 16GB" figure is accurate, and 16 is not 8. Gemma 4 26B A4B is 16GB at QAT, and activating only 4B parameters per token does not help, because every expert still has to be resident; Nemotron 3 Nano 30B is 24GB for the same reason. Our explainer on {{< link href="/blog/what_is_mixture_of_experts_in_llm_models/" >}}mixture-of-experts models{{< /link >}} covers why active parameters and memory footprint are separate numbers.

The exception worth knowing about is aggressive sub-4-bit compression. {{< link href="/blog/bonsai_27b_phone_llm/" >}}Bonsai 27B{{< /link >}} fits a 27B model into 3.9GB with native 1-bit weights, at a real cost in quality. That is a different tradeoff, not a free lunch.

## Stretching Past 8GB: Unsloth Dynamic Quants and MoE Offloading

Everything above assumes the whole model lives in your 8GB. There is a second route worth knowing before you settle: run a much larger mixture-of-experts model and keep only part of it on the GPU.

<a href="https://github.com/unslothai/unsloth" target="_blank">Unsloth</a> publishes Dynamic GGUF quants (the `UD-` builds) that quantize layer by layer instead of uniformly, pushing expert layers to a lower bit width while leaving attention at 4 or 6 bits. That does not squeeze a 35B model into 8GB on its own, but it moves the floor: Unsloth's `Qwen3.5-35B-A3B-GGUF` bottoms out at 9.93GB for `UD-IQ2_XXS` and 11.32GB for `UD-Q2_K_XL`, against the 20.71GB `UD-Q4_K_XL` that <a href="https://unsloth.ai/docs/models/qwen3.5" target="_blank">Unsloth recommends</a>.

The part that actually matters for an 8GB card is that Qwen3.5-35B-A3B is a mixture of experts: 36B parameters total, roughly 3B active per token. Only a small slice of those weights is touched on any given forward pass, so llama.cpp can keep attention, the router and the KV cache on the GPU and park the bulky expert tensors in system RAM:

```bash
llama-server -hf unsloth/Qwen3.5-35B-A3B-GGUF:UD-Q2_K_XL \
  -ngl 999 --n-cpu-moe 30
```

`--n-cpu-moe N` moves the routed expert weights of N layers to the CPU; `-ot "exps=CPU"` is the older, more explicit form of the same idea. Tune N down until the model stops fitting, because the performance curve is a V: catastrophic while you are overcommitted on VRAM, best at the smallest value that genuinely fits, then slowly declining as you push more work onto the CPU.

Be clear-eyed about the trade. This is not a free upgrade from a 9B to a 36B: you need the system RAM (16GB is tight, 32GB comfortable), generation speed becomes bound by DDR bandwidth rather than your GPU's, and long-prompt processing gets noticeably slower. If your 8GB machine also has 8GB of RAM, skip it. On a desktop with 32GB and an 8GB card it is a real option that the "which model fits in 8GB" framing misses. Our guide to {{< link href="/blog/finetune_and_selfhost_llms_locally_with_unsloth/" >}}self-hosting and fine-tuning with Unsloth{{< /link >}} covers the rest of the toolchain.

## Running It

Install <a href="https://ollama.com" target="_blank">Ollama</a> and pull a model:

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen3.5:9b
ollama run qwen3.5:9b
```

The one setting worth changing is the context window. Ollama will happily accept a `num_ctx` that does not fit and silently offload layers to CPU, which looks like a mysterious 10x slowdown rather than an error. Set it explicitly to something your remaining VRAM can hold:

```bash
# server-wide default
OLLAMA_CONTEXT_LENGTH=16384 ollama serve

# or per-session, inside the interactive prompt
ollama run qwen3.5:9b
>>> /set parameter num_ctx 16384
```

Ollama's default is 4096 tokens, so you are usually raising this rather than lowering it - just raise it deliberately rather than jumping straight to the model's 262K ceiling.

If you are short on headroom, quantizing the KV cache halves its cost. Set `OLLAMA_FLASH_ATTENTION=1` and `OLLAMA_KV_CACHE_TYPE=q8_0` before starting the server - flash attention has to be on for the cache type to take effect, and on architectures that do not support it Ollama silently falls back to fp16 rather than warning you. For a fuller walkthrough of the install-to-first-token path, see our {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}step-by-step self-hosting guide{{< /link >}}, and {{< link href="/blog/whichllm_find_best_local_llm/" >}}whichllm{{< /link >}} if you would rather have a tool detect your hardware and rank models for you.

## Reaching Your 8GB Model From Anywhere

Ollama exposes an OpenAI-compatible API on `localhost:11434`, which is useless from your phone or a teammate's laptop until you put a public address in front of it. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} does that with one SSH command, no account, no client install, and no firewall change:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11434 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints a public HTTPS URL like `https://xxxxx.run.pinggy-free.link` that forwards straight to the local Ollama process. Point any OpenAI-compatible client at it and your 8GB machine is now an API endpoint. The same command with port 3000 exposes an Open WebUI frontend instead; {{< link href="/blog/forward_ollama_port_11434_online_access/" >}}our Ollama port-forwarding post{{< /link >}} covers the details, including keeping the tunnel alive.

## Conclusion

If you have 8GB of dedicated VRAM, pull `qwen3.5:9b` and stop shopping - it is the only model in this class that stays entirely on the GPU at 32K context, and it does so because of how it is built, not because of aggressive quantization. If you have 8GB of system RAM, `qwen3.5:4b` or `gemma4:e2b-it-qat` will feel far better than trying to force a 9B onto the CPU. And whatever you pick, do the KV cache arithmetic before you assume a model fits: the difference between 15 KiB and 160 KiB per token decides whether your 8GB holds a 32K conversation or a 4K one.

If this exercise convinces you that 8GB is the real constraint rather than the model, our guide to {{< link href="/blog/best_hardware_for_self_hosting_local_llms/" >}}hardware for self-hosting local LLMs{{< /link >}} covers what the next tier up actually buys you.
