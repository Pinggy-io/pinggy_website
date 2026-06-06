---
title: "Picking the Right Hardware to Run LLMs Locally in 2026"
description: "A practical hardware guide for self-hosting LLMs in 2026. Compare consumer GPUs, Apple Silicon, enterprise cards, and pre-built AI workstations. Find the right setup for 7B to 405B models at every budget."
date: 2026-06-05T14:15:25+05:30
lastmod: 2026-06-04T14:15:25+05:30
draft: false
tags: ["local LLM", "self-hosted AI", "GPU for LLM", "RTX 4090", "Apple Silicon", "Ollama", "hardware guide", "AI hardware"]
categories: ["Technology", "AI", "Hardware"]
og_image: "images/best_hardware_for_self_hosting_local_llms/best_hardware_for_self_hosting_local_llms_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIENob29zZSB0aGUgUmlnaHQgSGFyZHdhcmUgZm9yIFNlbGYtSG9zdGluZyBMb2NhbCBMTE1zIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHNlbGVjdGluZyB0aGUgcmlnaHQgR1BVLCBSQU0sIGFuZCBzdG9yYWdlIGZvciBydW5uaW5nIGxhcmdlIGxhbmd1YWdlIG1vZGVscyBsb2NhbGx5LCBmcm9tIGNvbnN1bWVyIHNldHVwcyB0byBlbnRlcnByaXNlIGRlcGxveW1lbnRzLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEZXRlcm1pbmUgWW91ciBUYXJnZXQgTW9kZWwgU2l6ZSIsCiAgICAgICJ0ZXh0IjogIkRlY2lkZSB3aGljaCBMTE1zIHlvdSB3YW50IHRvIHJ1bi4gQSA3QiBtb2RlbCBhdCBRNF9LX00gbmVlZHMgYXJvdW5kIDVHQiBWUkFNOyBhIDEzQiBuZWVkcyA4LTEwR0I7IGEgMzRCIG5lZWRzIDE2LTIyR0I7IGEgNzBCIG5lZWRzIDM1LTQyR0IuIEtub3dpbmcgeW91ciB0YXJnZXQgbW9kZWwgc2l6ZSB0ZWxscyB5b3UgdGhlIG1pbmltdW0gVlJBTSB5b3UgbmVlZCBiZWZvcmUgYnV5aW5nIGFueXRoaW5nLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDaG9vc2UgWW91ciBIYXJkd2FyZSBCdWRnZXQgVGllciIsCiAgICAgICJ0ZXh0IjogIk1hdGNoIHlvdXIgYnVkZ2V0IHRvIHRoZSByaWdodCB0aWVyLiBVbmRlciAkNjAwOiBSVFggNDA3MCAxMkdCIG9yIFJUWCA0MDYwIFRpIDE2R0IgZm9yIDdCLTE0QiBtb2RlbHMuICQxLDUwMC0yLDAwMDogUlRYIDQwOTAgMjRHQiBvciBSVFggNTA5MCAzMkdCIGZvciBxdWFudGl6ZWQgNzBCIG1vZGVscy4gJDQsMDAwKzogQXBwbGUgTTMgVWx0cmEgTWFjIFN0dWRpbyB3aXRoIDE5MkdCIHVuaWZpZWQgbWVtb3J5IG9yIE5WSURJQSBER1ggU3BhcmsgZm9yIGxhcmdlIG1vZGVsIGluZmVyZW5jZSB3aXRob3V0IHF1YW50aXphdGlvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2l6ZSBZb3VyIFN5c3RlbSBSQU0gYW5kIFN0b3JhZ2UiLAogICAgICAidGV4dCI6ICJQcm92aXNpb24gYXQgbGVhc3QgMnggYW1vdW50IG9mIHlvdXIgR1BVIFZSQU0gaW4gc3lzdGVtIFJBTS4gRm9yIENQVS1vbmx5IGluZmVyZW5jZSwgdXNlIDEuNXggdGhlIG1vZGVsIGZpbGUgc2l6ZSBpbiBSQU0uIEZvciBzdG9yYWdlLCBnZXQgYXQgbGVhc3QgMlRCIG9mIFBDSWUgNC4wIE5WTWUuIEEgNzBCIG1vZGVsIGF0IFE0IHF1YW50aXphdGlvbiB0YWtlcyBhYm91dCA0MEdCIG9uIGRpc2ssIGFuZCBOVk1lIGxvYWRzIGl0IGluIDUtMTAgc2Vjb25kcyB2ZXJzdXMgNzArIHNlY29uZHMgb24gU0FUQS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBJbmZlcmVuY2UgU29mdHdhcmUiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIE9sbGFtYSBmb3IgZWFzeSBsb2NhbCBtb2RlbCBtYW5hZ2VtZW50IHdpdGggYSBzaW5nbGUgY29tbWFuZDogY3VybCAtZnNTTCBodHRwczovL29sbGFtYS5jb20vaW5zdGFsbC5zaCB8IHNoLiBUaGVuIHB1bGwgeW91ciBtb2RlbDogb2xsYW1hIHB1bGwgbGxhbWEzLjM6NzBiLiBGb3IgYSB3ZWIgaW50ZXJmYWNlLCBydW4gT3BlbiBXZWJVSSB2aWEgRG9ja2VyLiBGb3IgcHJvZHVjdGlvbiBtdWx0aS11c2VyIHNlcnZpbmcsIHVzZSB2TExNIG9uIE5WSURJQSBvciBNTFggb24gQXBwbGUgU2lsaWNvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWNjZXNzIFlvdXIgTG9jYWwgTExNIFJlbW90ZWx5IiwKICAgICAgInRleHQiOiAiVG8gYWNjZXNzIHlvdXIgc2VsZi1ob3N0ZWQgTExNIGZyb20gb3RoZXIgZGV2aWNlcyBvciBzaGFyZSBpdCB3aXRoIHRlYW1tYXRlcywgdXNlIFBpbmdneSB0byBjcmVhdGUgYSBzZWN1cmUgcHVibGljIHR1bm5lbCB3aXRoIGEgc2luZ2xlIFNTSCBjb21tYW5kOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MTE0MzQgZnJlZS5waW5nZ3kuaW8uIFRoaXMgZXhwb3NlcyB0aGUgT2xsYW1hIEFQSSBlbmRwb2ludCB3aXRob3V0IGFueSBmaXJld2FsbCBjb25maWd1cmF0aW9uIG9yIHBvcnQgZm9yd2FyZGluZy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---


{{< image "best_hardware_for_self_hosting_local_llms/best_hardware_for_self_hosting_local_llms_banner.webp" "Picking the Right Hardware to Run LLMs Locally in 2026" >}}

Running an LLM locally used to mean settling for something that felt like typing into a blender. That's no longer true. A mid-range gaming GPU now runs Llama 3.3 70B at speeds that are genuinely useful for coding and document work, and a Mac Studio with 192GB of unified memory fits the same model in full precision without any quantization. The question is just which hardware makes sense for what you actually want to run.

This guide covers every tier - from a $340 GPU for personal 7B inference, through the large unified-memory systems that changed what's possible for 70B models at home, up to multi-GPU enterprise setups.

{{< llm-context >}}To access your self-hosted LLM remotely with Pinggy - run `ollama serve` (starts on port 11434), then in a new terminal run `ssh -p 443 -R0:localhost:11434 free.pinggy.io` to get a public HTTPS URL for your Ollama API.{{< /llm-context >}}

{{% tldr %}}

**By model size:**
- **7B models**: <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5060-family/" target="_blank">RTX 5060 Ti 16GB</a> (≈$500) or <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4060/" target="_blank">RTX 4060 8GB</a> (≈$340)
- **13B-34B models**: <a href="https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070xt.html" target="_blank">AMD RX 9070 XT 16GB</a> (≈$670) or <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5080/" target="_blank">RTX 5080 16GB</a> (≈$1,000)
- **70B models**: <a href="https://www.apple.com/shop/buy-mac/mac-studio" target="_blank">Mac Studio M4 Max</a> (from ≈$2,600, 20-28 tok/s) or <a href="https://www.apple.com/shop/buy-mac/mac-studio" target="_blank">Mac Studio M3 Ultra 192GB</a> (≈$3,999, 25-30 tok/s)
- **405B+**: Two linked <a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/" target="_blank">NVIDIA DGX Sparks</a> (≈$4,699) or multi-GPU server

**Key rule:** Memory capacity and bandwidth beat raw GPU speed. A card that fits your model entirely beats a faster card that offloads to RAM. Among unified-memory systems, bandwidth is what separates them - the DGX Spark fits 70B but only hits 2.7 tok/s because its LPDDR5X bus (273 GB/s) can't keep up.

**Best inference software:**
- <a href="https://ollama.com" target="_blank">Ollama</a> - one-command install, works everywhere; now uses MLX natively on Apple Silicon (v0.19+)
- <a href="https://lmstudio.ai" target="_blank">LM Studio</a> - best GUI for desktop users
- <a href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a> - best for multi-user production serving on NVIDIA
- <a href="https://github.com/ml-explore/mlx" target="_blank">MLX</a> - direct API for Apple Silicon inference; Ollama now wraps it automatically

{{% /tldr %}}

## The Bottleneck: Memory Bandwidth

Before looking at specific hardware, there's one concept worth understanding: **LLM inference is bottlenecked by memory bandwidth, not compute.** When the model generates a token, it loads the entire weight matrix from memory once. The rate at which it can do this - in GB/s - determines tokens per second, not teraflops.

This is why hardware choices that look obvious on paper don't always play out as expected. An RTX 4090 has 1,008 GB/s of GDDR6X bandwidth, the M3 Ultra has 819 GB/s, and the DGX Spark - marketed as a personal AI supercomputer - has 273 GB/s of LPDDR5X. That bandwidth difference is the reason the DGX Spark only manages 2.7 tok/s on Llama 3.1 70B (confirmed by NVIDIA's own Ollama benchmark), while the M3 Ultra hits 25-30 tok/s on the same model. Capacity matters for whether the model fits at all; bandwidth determines how fast it runs once it does.

## How Much Memory Do You Need?

GGUF quantization lets you trade a small amount of quality for dramatically lower memory usage. **Q4_K_M** is the standard recommendation - roughly half the memory of FP16 with quality most users can't distinguish in practice.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model Size</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Q4_K_M</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Q8_0</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">FP16</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">7B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~5 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~8 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~14 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">13B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~9 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~14 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~26 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">34B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~20 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~34 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~68 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">70B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~42 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~70 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~140 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">405B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~220 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~405 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~810 GB</td>
</tr>
</tbody>
</table>

Quick shorthand: `model_size_B × 0.6` gives you the approximate Q4_K_M requirement in GB. Context window also adds overhead - a 128K context can nearly double memory usage for large models.

## Consumer GPUs

NVIDIA's RTX 40 and 50-series dominate this category. The CUDA ecosystem - Ollama, LM Studio, vLLM, TensorRT-LLM, llama.cpp - targets CUDA first, and that software maturity matters as much as the hardware specs.

At the entry level, the **RTX 5060 Ti 16GB** (≈$500) is the new budget recommendation for 2026 - it's a Blackwell card with FP4 support, handles 14B at Q8 comfortably, and has better efficiency than its 40-series predecessors. The older **RTX 4060 8GB** (≈$340) is still available and fine for 7B models at 40-60 tok/s, but the 5060 Ti 16GB gives you twice the VRAM for not much more money.

The mid-range picks are the **RTX 5080 16GB** (≈$1,000 MSRP, though often more in practice) and the **RTX 4090 24GB**. The 5080's 960 GB/s GDDR7 bandwidth is competitive, but its 16GB VRAM limits you to 13B at Q8 - the 4090's 24GB handles 20B and below without any offloading. The 4090 is now harder to source - NVIDIA stopped production in October 2024 - and street prices run $2,400-$3,500. If you find one below $2,000, it's worth it; otherwise the 5080 or a used 4090 are the practical options. The RTX 4090 hits 120+ tok/s on 8B models fully in VRAM. The catch is 70B: the model needs about 42GB and about 18GB offloads over PCIe to system RAM, bringing real-world decode speed on Llama 3.1 70B to 8-18 tok/s.

The **RTX 5090 32GB** (≈$3,000-5,000 - never sold close to its $2,000 MSRP) has 1,792 GB/s of GDDR7 bandwidth and fits 34B at Q8 entirely in VRAM. At current market prices it's hard to recommend over two cheaper cards or a Mac Studio for most setups.

For budget buyers, a **used RTX 3090** ($800-1,050) delivers 24GB of VRAM for roughly 87% of the 4090's throughput. Used pricing has climbed from a year ago but it remains the most practical 24GB option under $1,000.

**AMD** has two strong options in 2026. The **RX 9070 XT** (16GB GDDR6, ≈$500 MSRP) is the cleaner recommendation - RDNA 4 architecture, ROCm support is official from launch, and it's the safest AMD card for LLM work on Linux. The older **RX 7900 XTX** (24GB) has risen to ≈$800 used / $1,339 new, reducing its value case. ROCm 7.2 added FP8 support for both cards, and Ollama, LM Studio, and llama.cpp all run well. Windows support remains inconsistent - Linux is strongly preferred for AMD inference.

## Large Unified Memory Systems

This is the category that changes the calculation for 70B models. On a standard PC with a 24GB GPU, you can't fit a 70B model without offloading to RAM and taking a serious speed hit. Systems with large **unified memory** - where CPU, GPU, and neural engine all share the same pool - eliminate that ceiling entirely. Load a 70B model at Q8 into 96GB of unified memory and every layer runs at memory bus speeds.

The critical insight from benchmarks: **capacity tells you whether the model fits; bandwidth tells you how fast it runs**. These three systems have the same 128GB, but very different bandwidth numbers.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">System</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Memory</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Bandwidth</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Llama 70B tok/s</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">8B tok/s</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Price</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mac Studio M3 Ultra (192GB)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">192 GB unified</td>
  <td style="border:1px solid #ddd;padding:0.5em;">819 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>25-30</strong> (Ollama/MLX)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~80</td>
  <td style="border:1px solid #ddd;padding:0.5em;">from $3,999 (96GB base)</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mac Studio M4 Max (128GB)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128 GB unified</td>
  <td style="border:1px solid #ddd;padding:0.5em;">546 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>20-28</strong> (Ollama/MLX)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~60</td>
  <td style="border:1px solid #ddd;padding:0.5em;">from $3,200</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>NVIDIA DGX Spark (128GB)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128 GB LPDDR5X</td>
  <td style="border:1px solid #ddd;padding:0.5em;">273 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>2.7</strong> (FP8, confirmed by Ollama)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~924 (NIM/FP4)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$4,699</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>RTX 4090 (24GB) - for context</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">24 GB GDDR6X</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,008 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8-18 (with CPU offload)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~120-128</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$2,400-3,500</td>
</tr>
</tbody>
</table>

### Mac Studio M4 Max (128GB)

The M4 Max delivers 546 GB/s of bandwidth and 20-28 tok/s on Llama 3.3 70B - better than a 4090 on 70B, not because Apple Silicon is faster but because the model fits entirely in memory without offloading. It runs 70B at Q4 or 32B at Q8 with room to spare, draws 200-400W total (versus 350W for the 4090 GPU alone), and doubles as a quiet, capable daily workstation. Configurations with 64GB or 96GB start from around $2,200-$2,600.

As of Ollama 0.19 (March 2026), Ollama on Apple Silicon uses MLX as its inference backend, so you no longer need to choose between them - Ollama now delivers MLX performance automatically.

### Mac Studio M3 Ultra (192GB)

The M3 Ultra is the highest single-machine unified memory option available outside enterprise hardware. Its 819 GB/s bandwidth pushes decode speed to 25-30 tok/s on 70B, putting it in the same range as an H100 for single-user inference at a fraction of the cost. 192GB fits Llama 3.3 70B at full BF16 precision (140GB) with headroom, or handles 405B at Q2. The Mac Studio with M3 Ultra starts at $3,999 (base 96GB config; 192GB is a BTO option).

The tradeoff worth knowing: MLX doesn't yet support the batching efficiency that vLLM provides on NVIDIA hardware. Serving 20 concurrent users, an H100 will pull ahead significantly. For one developer or a small team, the Mac Studio is the better deal by a wide margin.

### NVIDIA DGX Spark (128GB LPDDR5X)

The DGX Spark launched at $4,699 as NVIDIA's "personal AI supercomputer" - a Grace Blackwell Superchip with 128GB of unified memory, 1 petaFLOP of AI performance, and pre-installed Ollama and TensorRT-LLM. On small models, the Blackwell tensor cores are exceptional: around 924 tok/s on Llama 3.1 8B via NVIDIA NIM at FP4. That number is real and impressive.

On 70B, the LPDDR5X bus at 273 GB/s becomes the ceiling. NVIDIA's own official Ollama benchmark records **2.7 tok/s** on Llama 3.1 70B FP8. That is not a misconfiguration - it's the result of reading about 42GB of model weights through a 273 GB/s pipe, once per token. The Blackwell tensor cores sit mostly idle because they can't be fed fast enough.

So the DGX Spark is genuinely the right choice if you need CUDA compatibility, NVIDIA NIM containers, fine-tuning workflows, or sub-8B inference at very high throughput. For interactive 70B inference, a Mac Studio M3 Ultra costs less and runs 10x faster. Two DGX Sparks linked over 10 GbE (≈$4,699) do cover 405B models at Q2-Q3 via distributed inference, which is otherwise impossible at this price point. OEM versions from Dell, ASUS, Acer, and MSI ship at comparable prices for different form factors.

## Professional and Enterprise GPUs

When you're serving a team rather than a single user, consumer GPUs hit real limits: no ECC memory, shorter warranties, and software tested primarily for single-user workloads. The professional tier solves these.

The current professional workstation card is the **RTX PRO 6000 Blackwell** (96GB GDDR7 ECC, ≈$8,565), which superseded the RTX 6000 Ada in March 2025. 96GB is enough for 70B at Q8 entirely in VRAM, and the Blackwell architecture adds FP4 support and 2.5x better AI training throughput over Ada. The older **RTX 6000 Ada** (48GB GDDR6 ECC, ≈$6,800) is still a capable card at a lower price point if you find one - it fits 70B at Q4_K_M in VRAM and handles multi-user serving well via vLLM. The **L40S** (48GB, ≈$7,500-10,000 new) occupies the same 48GB tier but is data center-tuned, with cloud rental around $0.50-7.58/hr.

The **H100 SXM** (80GB HBM3, 3.35 TB/s) is where production workloads live. Single-stream 70B inference lands around 25 tok/s, but the real advantage is concurrent throughput via vLLM - dozens of users sharing one GPU without proportional slowdown. H100 SXM hardware now runs $35,000-40,000 per card; cloud pricing runs $1.99-8/hr. The **H200** (141GB HBM3e, 4.8 TB/s) extends this to models like DeepSeek V3.2 671B at Q2, which requires 8x H200 nodes.

## Storage, RAM, and Multi-GPU

A few practical points that usually get underestimated.

**System RAM** acts as overflow when GPU VRAM fills up. Running a 42GB 70B model on a 24GB card means about 18GB offloads to RAM over PCIe. If RAM is also too small, layers spill to disk and latency jumps from seconds to minutes. Provision at least 2x your GPU VRAM in system RAM - 64GB is the minimum for a 4090 setup, 128GB is more comfortable.

**Storage** determines model load time. A 70B model at Q4 is about 40GB on disk. A PCIe 4.0 NVMe (Samsung 990 Pro, WD Black SN850X, around 7,000 MB/s) loads it in 5-10 seconds. A SATA SSD at 550 MB/s takes over a minute. Get at least 2TB of PCIe 4.0 NVMe; 4TB if you plan to keep several large models on hand.

**Multi-GPU** gives you additive VRAM, which matters for models that don't fit in a single card. Two RTX 4090s pool to 48GB - enough for 70B at Q8 - but PCIe interconnect between consumer cards means scaling efficiency is only 70-78%. You get roughly 1.4-1.5x throughput, not 2x. Professional cards with NVLink (RTX 6000 Ada, A100, H100) scale more cleanly at 85-93% per added card.

## Cloud vs. Owning Hardware

For infrequent use, renting wins easily. An RTX 4090-equivalent on a decentralized cloud provider runs $0.29-1.00/hr - far cheaper than buying hardware you'd use a few hours a week.

The math changes at sustained utilization. A team spending $5,000/month on cloud GPU inference pays $60,000/year. A pair of RTX 4090s at ≈$3,400 amortizes in under two months at that spend rate. The rule of thumb: below 70% sustained utilization, cloud is cheaper over three years. Above 80%, owned hardware typically breaks even within four to twelve months.

## Getting Started with Ollama

Once you have hardware, running a model takes under five minutes. Install Ollama:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Pull and run a model. For a 128GB+ unified memory system, Llama 3.3 70B fits without offloading:

```bash
ollama pull llama3.3:70b
ollama run llama3.3:70b
```

For a 12-16GB GPU, Qwen3 14B is more appropriate:

```bash
ollama pull qwen3:14b
ollama run qwen3:14b
```

Ollama automatically uses your GPU (NVIDIA, AMD, or Apple Silicon) and exposes an OpenAI-compatible API at `localhost:11434`. Point Cursor, Continue.dev, or Open WebUI at that endpoint and you're done. On Apple Silicon, Ollama 0.19+ uses MLX as its backend automatically - no separate MLX setup needed.

For a chat frontend, Open WebUI runs in Docker:

```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

That gives you a ChatGPT-like interface at `localhost:3000`. Our guide on {{< link href="/blog/best_open_source_alternatives_to_chatgpt/" >}}open-source ChatGPT alternatives{{< /link >}} covers more frontend options if you want something beyond the basics.

## Access Your LLM from Anywhere with Pinggy

Once Ollama is running locally, you might want to reach it from another device or share it with a teammate. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} creates a secure public tunnel with a single SSH command - no firewall rules, port forwarding, or static IP needed.

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11434 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\"}}}"
{{</ ssh_command >}}

This gives you a public HTTPS URL for your Ollama instance. The same approach works for Open WebUI on port 3000 or any other local AI frontend.

## Conclusion

The decision mostly comes down to which models you want to run and whether you want discrete GPU or unified memory. For 7B-34B models, NVIDIA GPUs win on price - the RTX 5060 Ti 16GB at $500 is the new entry-level pick, the RTX 4090 (now $2,400+) remains the best 24GB consumer card if you can find one, and the RTX PRO 6000 Blackwell (96GB) handles 70B at Q8 for team serving. For 70B models with a single user, the Mac Studio M4 Max or M3 Ultra is the better buy: both fit 70B fully in memory and hit 20-30 tok/s, better than any 24GB GPU offloading to RAM. The DGX Spark is excellent for small-model throughput and CUDA workflows, but its LPDDR5X bus makes it the wrong choice for interactive 70B inference.

For more on what to actually run on this hardware, the {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" >}}best open source LLMs for coding{{< /link >}} guide covers the current leaderboard with real benchmark scores, and {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}top local LLM tools{{< /link >}} walks through the inference software in more depth.
