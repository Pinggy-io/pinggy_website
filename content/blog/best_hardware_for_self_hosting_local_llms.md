---
title: "Picking the Right Hardware to Run LLMs Locally in 2027"
description: "A practical hardware guide for self-hosting LLMs like Qwen3.8 27B, Inkling 2 Mini, Gemma 4, Nemotron 3 Super and GLM 5.3 Flash: how much memory each needs including the KV cache, why bandwidth sets tokens per second, and current prices for RTX 50 GPUs, Radeon AI PRO, Mac Studio M5, Ryzen AI Max, DGX Spark and RTX Spark."
date: 2026-06-05T14:15:25+05:30
lastmod: 2026-11-27T14:15:25+05:30
draft: false
tags: ["local LLM", "self-hosted AI", "Apple Silicon", "Ollama", "AI hardware"]
categories: ["Technology", "AI", "Hardware"]
og_image: "images/best_hardware_for_self_hosting_local_llms/best_hardware_for_self_hosting_local_llms_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIENob29zZSBIYXJkd2FyZSBmb3IgU2VsZi1Ib3N0aW5nIExvY2FsIExMTXMiLAogICJkZXNjcmlwdGlvbiI6ICJTaXplIGxvY2FsIExMTSBoYXJkd2FyZSBieSBtZW1vcnk6IHRoZSBtb2RlbCBkb3dubG9hZCBwbHVzIGl0cyBLViBjYWNoZSwgdGhlbiBjaGVjayBtZW1vcnkgYmFuZHdpZHRoIGZvciBzcGVlZC4gQ292ZXJzIFF3ZW4zLjUgOUIsIFF3ZW4zLjggMjdCLCBJbmtsaW5nIDIgTWluaSwgTmVtb3Ryb24gMyBTdXBlciBhbmQgR0xNIDUuMyBGbGFzaCBvbiAxNkdCIGFuZCAzMkdCIEdQVXMsIDEyOEdCIHVuaWZpZWQtbWVtb3J5IHN5c3RlbXMsIHRoZSBNYWMgU3R1ZGlvIE01LCBER1ggU3BhcmsgYW5kIFJ5emVuIEFJIE1heC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYmVzdF9oYXJkd2FyZV9mb3Jfc2VsZl9ob3N0aW5nX2xvY2FsX2xsbXMvYmVzdF9oYXJkd2FyZV9mb3Jfc2VsZl9ob3N0aW5nX2xvY2FsX2xsbXNfYmFubmVyLndlYnAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yN1QxNDoxNToyNSswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJMb29rIHVwIHRoZSBtb2RlbCBkb3dubG9hZCBzaXplIiwKICAgICAgInRleHQiOiAiQ2hlY2sgdGhlIGV4YWN0IE9sbGFtYSB0YWcgYW5kIHF1YW50aXphdGlvbi4gQXQgZm91ciBiaXRzLCBRd2VuMy41IDlCIGlzIDYuNiBHQiwgUXdlbjMuOCAyN0IgaXMgMTcuNyBHQiwgSW5rbGluZyAyIE1pbmkgaXMgMTkuMCBHQiwgdGhlIGRlbnNlIE1pc3RyYWwgTWVkaXVtIDMuNSAxMjhCIGlzIDgwLjIgR0IgYW5kIE5lbW90cm9uIDMgU3VwZXIgaXMgODYuOCBHQi4gQSBtaXh0dXJlLW9mLWV4cGVydHMgbW9kZWwgbmVlZHMgbWVtb3J5IGZvciBhbGwgb2YgaXRzIHdlaWdodHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkFkZCB0aGUgS1YgY2FjaGUgZm9yIHlvdXIgY29udGV4dCBsZW5ndGgiLAogICAgICAidGV4dCI6ICJLViBieXRlcyBwZXIgdG9rZW4gPSAyIHggYXR0ZW50aW9uIGxheWVycyB4IEtWIGhlYWRzIHggaGVhZCBkaW0geCBieXRlcyBwZXIgdmFsdWUuIFF3ZW4zLjggMjdCIG9ubHkgY2FjaGVzIGl0cyAxNiBmdWxsLWF0dGVudGlvbiBsYXllcnMsIDY0IEtpQiBwZXIgdG9rZW4gYXQgZjE2LCBzbyAxMjhrIGFkZHMgOCBHaUIgYW5kIHB1c2hlcyBpdCBwYXN0IGEgMjQgR0IgY2FyZC4gT0xMQU1BX0tWX0NBQ0hFX1RZUEU9cThfMCByb3VnaGx5IGhhbHZlcyB0aGUgY2FjaGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBpY2sgaGFyZHdhcmUgdGhhdCBob2xkcyB0aGUgdG90YWwiLAogICAgICAidGV4dCI6ICIxNiBHQiBjYXJkcyBzdWNoIGFzIHRoZSBSVFggNTA2MCBUaSBmaXQgOUIgdG8gMTRCIG1vZGVscyBhbmQgdGhlIHRlcm5hcnkgQm9uc2FpIDIgMjdCLiAyNCBHQiBjYXJkcyBmaXQgUXdlbjMuOCAyN0Igb3IgSW5rbGluZyAyIE1pbmksIGFuZCAzMiBHQiBjYXJkcyBzdWNoIGFzIHRoZSBSYWRlb24gQUkgUFJPIFI5NzAwIG9yIFJUWCA1MDkwIGZpdCBRd2VuMy44IDI3QiBhdCBhIDI1NmsgY29udGV4dC4gMTI4IEdCIHVuaWZpZWQtbWVtb3J5IHN5c3RlbXMgKFJ5emVuIEFJIE1heCsgMzk1LCBNYWMgU3R1ZGlvIE01IE1heCwgREdYIFNwYXJrKSBmaXQgTmVtb3Ryb24gMyBTdXBlciBvciBNaXN0cmFsIE1lZGl1bSAzLjUsIGEgMjU2IEdCIE1hYyBTdHVkaW8gTTUgVWx0cmEgZml0cyBHTE0gNS4zIEZsYXNoLCBhbmQgYSA1MTIgR0Igb25lIGZpdHMgSW5rbGluZyAyIFNtYWxsIG9yIEdMTS01LjIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIG1lbW9yeSBiYW5kd2lkdGggZm9yIHNwZWVkIiwKICAgICAgInRleHQiOiAiRm9yIGEgZGVuc2UgbW9kZWwsIGJhbmR3aWR0aCBkaXZpZGVkIGJ5IG1vZGVsIHNpemUgaXMgdGhlIGNlaWxpbmcgb24gdG9rZW5zIHBlciBzZWNvbmQuIEluIG9uZSBPbGxhbWEgdGVzdCBvbiBMbGFtYSAzLjEgNzBCLCBhbiA4MTkgR0IvcyBNMyBVbHRyYSB3cm90ZSAxNC4wOCB0b2tlbnMvcywgYSAyNTYgR0IvcyBSeXplbiBBSSBNYXgrIDM5NSA0Ljk3IGFuZCBhIDI3MyBHQi9zIEdCMTAgc3lzdGVtIDQuNzEuIE1peHR1cmUtb2YtZXhwZXJ0cyBtb2RlbHMgcmVhZCBvbmx5IHRoZWlyIGFjdGl2ZSBwYXJhbWV0ZXJzIGFuZCBydW4gbXVjaCBmYXN0ZXIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgT2xsYW1hIGFuZCB2ZXJpZnkgdGhlIGZpdCIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgT2xsYW1hIChjdXJsIC1mc1NMIGh0dHBzOi8vb2xsYW1hLmNvbS9pbnN0YWxsLnNoIHwgc2ggb24gTGludXgpLCBydW4gdGhlIG1vZGVsIHdpdGggb2xsYW1hIHJ1biA8bW9kZWw+IC0tdmVyYm9zZSwgdGhlbiBydW4gb2xsYW1hIHBzLiBQUk9DRVNTT1Igc2hvdWxkIHJlYWQgMTAwJSBHUFUgYW5kIENPTlRFWFQgc2hvd3MgdGhlIGFsbG9jYXRlZCB3aW5kb3c7IHJhaXNlIGl0IHdpdGggT0xMQU1BX0NPTlRFWFRfTEVOR1RILiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBY2Nlc3MgeW91ciBsb2NhbCBMTE0gcmVtb3RlbHkiLAogICAgICAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjExNDM0IGZyZWUucGluZ2d5LmlvIHU6SG9zdDpsb2NhbGhvc3Q6MTE0MzQgdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBmb3IgdGhlIE9sbGFtYSBBUEkuIFRoZSB1Okhvc3QgcmV3cml0ZSBpcyBuZWVkZWQgYmVjYXVzZSBPbGxhbWEgcmVqZWN0cyByZXF1ZXN0cyB3aG9zZSBIb3N0IGhlYWRlciBpcyBub3QgYSBsb2NhbCBuYW1lLiBBZGQgazpZT1VSX1JBTkRPTV9LRVkgdG8gcmVxdWlyZSBhIGJlYXJlciBrZXkuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---


{{< image "best_hardware_for_self_hosting_local_llms/best_hardware_for_self_hosting_local_llms_banner.webp" "Picking the Right Hardware to Run LLMs Locally in 2027" >}}

Running a large language model on your own hardware keeps your prompts private, has no per-token bill, and keeps working when the internet doesn't. The hard part is picking the machine, because spec sheets sell teraflops while the number that decides how fast a model answers is memory: how much you have, and how quickly the chip can read it.

That's why the price tags can mislead. An 8GB RTX 4060 still runs Qwen3.5 9B, a 24GB card holds Qwen3.8 27B or the new Inkling 2 Mini, and a 128GB AMD Ryzen AI Max+ 395 box at around $3,400 keeps Nemotron 3 Super or Mistral Medium 3.5 entirely in GPU memory. Meanwhile NVIDIA's DGX Spark, sold as a personal AI supercomputer, manages only 2.7 tok/s on a dense 70B model at FP8, because its memory bandwidth is roughly a quarter of an RTX 4090's.

This guide covers every tier: GPUs for 9B to 35B models, the unified-memory systems that made 120B-class models practical at home, and the 256GB to 512GB machines and clusters for GLM 5.3 Flash, Inkling 2 Small and beyond, plus how to serve your model with Ollama and reach it from anywhere.

{{< llm-context >}}To access your self-hosted LLM remotely with Pinggy - run `ollama serve` (starts on port 11434), then in a new terminal run `ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434` to get a public HTTPS URL for your Ollama API (the `u:Host` rewrite stops Ollama from answering 403).{{< /llm-context >}}

{{% tldr %}}

**By model size:**
- **9B-14B models** (Qwen3.5 9B, Gemma 4 12B, Bonsai 2 27B): <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5060-family/" target="_blank">RTX 5060 Ti 16GB</a> (≈$800) or <a href="https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070xt.html" target="_blank">AMD RX 9070 XT 16GB</a> (≈$980); an 8GB RTX 4060 still runs Qwen3.5 9B with a short context
- **26B-35B models** (Qwen3.8 27B, Inkling 2 Mini, Gemma 4 31B, Qwen3.6 35B-A3B): a 24GB card for Qwen3.8 27B or Inkling 2 Mini, <a href="https://www.amd.com/en/products/graphics/workstations/radeon-ai-pro/ai-9000-series/amd-radeon-ai-pro-r9700.html" target="_blank">Radeon AI PRO R9700 32GB</a> (≈$1,900) for value, <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/" target="_blank">RTX 5090 32GB</a> (≈$7,350) for speed
- **120B-class models** (Nemotron 3 Super, Mistral Medium 3.5): 128GB of unified memory - a Ryzen AI Max+ 395 system (≈$3,449), a <a href="https://www.apple.com/mac-studio/" target="_blank">Mac Studio</a> M5 Max (from $2,499, up to 128GB), an <a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/" target="_blank">NVIDIA DGX Spark</a> (≈$6,950) or an RTX Spark mini PC
- **300B and up** (GLM 5.3 Flash, Inkling 2 Small, GLM-5.2): a 256GB or 512GB Mac Studio M5 Ultra ($22,299 for 512GB), a used 512GB M3 Ultra, or up to eight clustered DGX Sparks

**Key rule:** the model file plus its KV cache has to fit in GPU-reachable memory; after that, bandwidth sets the speed. In one identical Ollama test on a dense 70B model, an M3 Ultra (819 GB/s) did 14.08 tok/s, a Ryzen AI Max+ 395 (256 GB/s) 4.97 and a GB10 Spark-class box (273 GB/s) 4.71. A 24GB RTX 4090 managed 3.10, because the model didn't fit.

**Best inference software:**
- <a href="https://ollama.com" target="_blank">Ollama</a> - one-command install, works everywhere, sizes the context to your VRAM and adds an MLX engine on Apple Silicon
- <a href="https://lmstudio.ai" target="_blank">LM Studio</a> - best GUI for desktop users
- <a href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a> - best for multi-user production serving on NVIDIA
- <a href="https://github.com/ggml-org/llama.cpp" target="_blank">llama.cpp</a> - the engine under most local tools, with CUDA, ROCm, Vulkan, SYCL and Metal backends

{{% /tldr %}}

## The Bottleneck: Memory Bandwidth

Before looking at specific hardware, there's one concept worth understanding: **generating text is bottlenecked by memory bandwidth, not compute.** To produce each token, the GPU reads every weight the model uses for that token out of memory. For a dense model that's the whole file, once per token. Divide bandwidth by the bytes read and you get a hard ceiling on output speed, whatever the teraflops figure says.

Run that sum for Mistral Medium 3.5, a dense 128B model and an 80.2 GB download at four bits. A 256 GB/s Ryzen AI Max+ 395 tops out around 3.2 tokens per second, a 273 GB/s DGX Spark at 3.4, a 614 GB/s M5 Max at 7.7 and the 1.2 TB/s M5 Ultra at about 15. Qwen3.8 27B, at 17.7 GB, gets a ceiling of about 100 tokens/s on a 1,792 GB/s RTX 5090. Real runs land below those ceilings, because no chip reaches its paper bandwidth and the KV cache has to be read too.

Jeff Geerling's <a href="https://github.com/geerlingguy/ai-benchmarks" target="_blank">ai-benchmarks</a> repo runs the same Ollama test on every machine, which makes it one of the few apples-to-apples comparisons around. It still uses Llama 3.1 70B, an older dense model that has become the standard yardstick, with the default Ollama tag:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Machine</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Where the model runs</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Output tok/s</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio M3 Ultra, 512GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>14.08</strong></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio M1 Ultra, 128GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9.84</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio M1 Max, 64GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">7.25</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Framework Desktop, Ryzen AI Max+ 395</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU and CPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4.97</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Dell Pro Max with GB10 (the DGX Spark chip)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4.71</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Ryzen 9 7900X with an RTX 4090 24GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU and CPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3.10</td>
</tr>
</tbody>
</table>

The order follows bandwidth almost exactly, with one telling exception. The RTX 4090 has 1,008 GB/s, more than anything else here, and it comes last, because the 43 GB file doesn't fit in 24GB and the overflow runs at system RAM speed. The 2.7 tok/s DGX Spark figure comes from <a href="https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark" target="_blank">LMSYS's review</a>, which ran Llama 3.1 70B in FP8 under SGLang. FP8 weights are about 70GB, so at 273 GB/s the ceiling is under 4 tokens per second.

Two exceptions keep this from being the whole story. Mixture-of-experts (MoE) models only read the experts active for each token: Nemotron 3 Super has 120B parameters but about 12B active, so it writes several times faster than the dense Mistral Medium 3.5 on the same box, and Inkling 2 Mini reads only 5.4B of its 26B. Qwen3.6 35B-A3B is the same idea at desktop size: 35B parameters, about 3B active. And reading your prompt (prefill) is compute-bound, so the wait for the first token tracks GPU compute instead. Capacity decides whether a model fits, bandwidth decides how fast it writes, and compute decides how long you wait after pasting in a long file.

## How Much Memory Do You Need?

Parameters times 0.6 still approximates a dense model at Q4_K_M, but the real download is easy to look up. These are Ollama's default four-bit tags (Q4_K_M, or NVFP4 for Inkling 2 Mini) in decimal GB, with a starting point for one user and a modest context. The two largest have no local Ollama tag, so their sizes (marked *) are Unsloth's UD-Q4_K_XL GGUFs:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Type</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">4-bit download</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Hardware to consider</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3.5:9b" target="_blank">Qwen3.5 9B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">dense, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.6 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8GB GPU</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/gemma4:12b" target="_blank">Gemma 4 12B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">dense, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8.0 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">12GB GPU</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/bonsai-2:27b" target="_blank">Bonsai 2 27B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">dense, ternary, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8.3 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">12GB GPU</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3.8:27b" target="_blank">Qwen3.8 27B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">dense, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">17.7 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24GB card</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/inkling-2-mini" target="_blank">Inkling 2 Mini 26B-A5B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE, NVFP4, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">19.0 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24GB card or a 32GB Mac</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3.6:35b" target="_blank">Qwen3.6 35B-A3B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">22.6 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24GB for short context, 32GB for long</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/mistral-medium-3.5:128b" target="_blank">Mistral Medium 3.5 128B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">80.2 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">128GB unified memory</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/nemotron-3-super:120b" target="_blank">Nemotron 3 Super 120B-A12B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">hybrid MoE</td>
  <td style="border:1px solid #ddd;padding:0.5em;">86.8 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">128GB unified memory</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF" target="_blank">GLM 5.3 Flash 320B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE</td>
  <td style="border:1px solid #ddd;padding:0.5em;">199.7 GB*</td>
  <td style="border:1px solid #ddd;padding:0.5em;">256GB Mac Studio</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://huggingface.co/unsloth/Inkling-2-Small-GGUF" target="_blank">Inkling 2 Small 594B-A17B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE, vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">354.2 GB*</td>
  <td style="border:1px solid #ddd;padding:0.5em;">512GB Mac Studio</td>
</tr>
</tbody>
</table>

{{< image "best_hardware_for_self_hosting_local_llms/local_llm_model_sizes.webp" "Bar chart titled How much memory does a local LLM need, showing four-bit download sizes for ten current local LLMs, from 6.6 GB for Qwen3.5 9B, 17.7 GB for Qwen3.8 27B and 19.0 GB for Inkling 2 Mini to 354.2 GB for Inkling 2 Small 594B." >}}

*Data: Ollama registry manifests for the default Q4_K_M or MXFP4 tags; Unsloth's Hugging Face file listings for GLM 5.3 Flash and Inkling 2 Small.*

Two things in that table trip people up. An MoE model needs memory for **all** its weights, even though each token touches only a few experts, so Nemotron 3 Super still needs the full 86.8 GB. And the Qwen and Gemma figures include a vision projector (0.9 GB for Qwen3.8), because Ollama ships the image encoder in the same download. Higher precision scales with bits per weight: Q8_0 stores about 8.5 bits per parameter, so Qwen3.8 27B grows to 30GB, and BF16 takes two bytes per parameter, 56GB for the same model. Q4_K_M remains the standard pick, and it's what Ollama pulls by default. Two newer models break the pattern. Inkling 2 Mini, from Thinking Machines, was trained in NVFP4 and ships at that precision, so there's no separate quantization step. Bonsai 2 27B stores ternary weights (-1, 0 or +1), which puts a 27B model in 8.3 GB, under half the size of the four-bit Qwen3.8 27B.

Always check the exact tag before you budget. Ollama's model page lists the quantization and size:

{{< image "best_hardware_for_self_hosting_local_llms/ollama_qwen3_8_27b_details.webp" "Ollama's Qwen3.8 27B model page showing the ollama run qwen3.8:27b command and the llama.cpp download: a 17GB Q4_K_M model with 27.3B parameters plus a 931MB vision projector, 18GB in total." >}}

### Context adds the KV cache

The download is only the first allocation. Every token in the conversation leaves keys and values behind in each attention layer, and that KV cache grows linearly with context length. That's how a model that "fits" in a short chat stops fitting at a long context. The cost per token comes straight from the model's `config.json`:

```text
KV bytes per token = 2 (K and V) x layers x KV heads x head dim x bytes per value
```

For a conventional dense model like <a href="https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/blob/main/config.json" target="_blank">Mistral Medium 3.5</a> that's 2 x 88 x 8 x 128 x 2 bytes = **352 KiB per token** with the default f16 cache, 11 GiB at 32k. The current Qwen models are much cheaper. Qwen3.5, 3.6 and 3.8 use Gated DeltaNet linear attention on three of every four layers, and those layers keep a fixed-size state (about 150 MiB in total for Qwen3.8 27B) instead of a cache that grows, so only the full-attention layers count:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Full-attention layers x KV heads x head dim</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">KV per token (f16)</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">At 32k</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">At 128k</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://huggingface.co/Qwen/Qwen3.5-9B/blob/main/config.json" target="_blank">Qwen3.5 9B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">8 of 32 x 4 x 256</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.0 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4.0 GiB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://huggingface.co/Qwen/Qwen3.6-35B-A3B/blob/main/config.json" target="_blank">Qwen3.6 35B-A3B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">10 of 40 x 2 x 256</td>
  <td style="border:1px solid #ddd;padding:0.5em;">20 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0.63 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.5 GiB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://huggingface.co/Qwen/Qwen3.8-27B/blob/main/config.json" target="_blank">Qwen3.8 27B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 of 64 x 4 x 256</td>
  <td style="border:1px solid #ddd;padding:0.5em;">64 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.0 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8.0 GiB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Mistral Medium 3.5 128B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">88 of 88 x 8 x 128</td>
  <td style="border:1px solid #ddd;padding:0.5em;">352 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">11.0 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">44.0 GiB</td>
</tr>
</tbody>
</table>

Gemma 4 takes a different route to the same end: five of every six layers use a 1,024-token sliding window, so their cache stops growing after the first thousand tokens.

{{< image "best_hardware_for_self_hosting_local_llms/qwen3_8_27b_kv_cache_fit.webp" "Chart titled Qwen3.8 27B on a 24 GB vs a 32 GB GPU: 16.5 GiB of weights plus 2 GiB of KV cache at 32k, 8 GiB at 128k with an f16 cache, 4.25 GiB at 128k and 8.5 GiB at 256k with a q8_0 cache, against 24 GiB and 32 GiB limits." >}}

Put the weights in the same unit (17.7 GB is 16.5 GiB) and the limits are plain. At 32k Qwen3.8 27B needs about 18.5 GiB and fits a 24GB card easily. At 128k it needs 24.5 GiB, so on a 24GB RTX 3090 or 4090 part of the model moves to system RAM and generation slows sharply. A 32GB RTX 5090 or Radeon AI PRO R9700 holds the 128k version with room to spare. An older full-attention model of similar size, Qwen3 32B, needed 8 GiB of cache at just 32k.

Two levers shrink the cache. Ollama can store it as `q8_0`, which the <a href="https://docs.ollama.com/faq" target="_blank">Ollama FAQ</a> says uses about half the memory of f16 "with a very small loss in precision", or `q4_0` at a quarter with more loss. Set `OLLAMA_KV_CACHE_TYPE=q8_0` on the server; it needs flash attention, which Ollama enables by itself where the backend supports it. That brings Qwen3.8 27B at 128k down to about 20.8 GiB on a 24GB card, and its full 256k window to 25 GiB, which needs the 32GB card. The other lever is architecture, which is why the hybrid Qwen models and Gemma 4 above get away with so little cache.

Ollama also picks the context length for you. Per its <a href="https://docs.ollama.com/context-length" target="_blank">context length docs</a>, it defaults to 4k on GPUs with under 24 GiB, 32k between 24 and 48 GiB, and 256k at 48 GiB and up. On a smaller GPU, a long document can silently lose its beginning because it never fit the window. Set `OLLAMA_CONTEXT_LENGTH` when you start the server, then check the fit again.

I checked this on my 18GB M3 Pro MacBook Pro with Ollama 0.40.11 and `qwen3.5:9b`. The server log reported 13.3 GiB of usable GPU memory and picked `default_num_ctx=4096`. On a Mac, Ollama pulled the 7.6 GB NVFP4 build for its MLX runner rather than the 6.6 GB Q4_K_M file in the table, so run `ollama show` to see which quantization you actually got. Raising the context to 32,768, with an f16 or a `q8_0` cache, left `ollama ps` at 7.8 GB, so on the MLX runner that figure doesn't show the cache; add the 1 GiB from the table yourself. Warm runs wrote between 23 and 28 tokens/s in every setup.

## Consumer GPUs

NVIDIA's RTX 50 series still dominates here, mostly because of software: Ollama, LM Studio, vLLM, TensorRT-LLM and llama.cpp all target CUDA first. What changed is price. A DRAM and GDDR7 shortage pushed street prices far above launch: Tom's Hardware's Newegg tracking, summarized by <a href="https://www.club386.com/nvidia-gpu-price-increases-august-2026/" target="_blank">Club386</a>, showed the median RTX 5060 Ti 16GB climbing from $569.99 to $804.99 in a couple of months. These are the cards worth considering, with the lowest new US listing on <a href="https://gpuprix.com/us/gpus/geforce-rtx-5090" target="_blank">gpuprix</a>:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Card</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">VRAM</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Bandwidth</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Launch price</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Lowest new US price</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5060 Ti 16GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">448 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$429</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$800</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">RX 9070 XT</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">640 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$599</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$980</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Intel Arc Pro B60</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">456 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$599 (first listings)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$1,000</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5070 Ti</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">896 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$749</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$1,400</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Radeon AI PRO R9700</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">640 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$1,299</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$1,900</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5080</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">960 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$999</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$2,000</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5090</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,792 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$1,999</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$7,350</td>
</tr>
</tbody>
</table>

The 16GB cards differ in speed, not in what they load. Any of them runs Gemma 4 12B or Qwen3.5 9B with a long context, and none holds Qwen3.8 27B, whose 16.5 GiB of weights alone fill the card. The exception is Bonsai 2 27B, whose ternary weights take only 8.3 GB. The **RTX 5060 Ti 16GB** is the cheap ticket, a Blackwell card with FP4 support. The **RTX 5070 Ti** and **RTX 5080** double its bandwidth, so the same models write about twice as fast, but you're paying for speed, not capacity. An existing 8GB card like the RTX 4060 still runs Qwen3.5 9B at Ollama's 4k default.

At 24 to 32GB the choice is money versus speed. The **Radeon AI PRO R9700** gives you 32GB for about $1,900, enough for Qwen3.8 27B at its full 256k context with a q8_0 cache, or Qwen3.6 35B-A3B with a long one. The **RTX 5090** has the same 32GB with nearly three times the bandwidth, so it's the fastest consumer card for anything that fits, but at about $7,350 it's hard to justify for capacity alone. The **Intel Arc Pro B60** is the cheapest 24GB card at around $1,000, enough for Qwen3.8 27B at 32k or Inkling 2 Mini, if you're comfortable with llama.cpp's SYCL or Vulkan backends.

Used cards got pricier too. A **used RTX 3090** (24GB, 936 GB/s) had a median eBay asking price of $1,996 per <a href="https://gpudojo.com/market-notes/2026-11-11-rtx-3090-asks-rise" target="_blank">gpudojo</a>, about what a new R9700 costs for 8GB less, so only buy one well below that. The **RTX 4090** is out of production with new stock from about $4,400, and the 24GB **RX 7900 XTX** goes for about $1,500 refurbished.

{{< image "best_hardware_for_self_hosting_local_llms/local_llm_memory_per_dollar.webp" "Scatter chart titled Local LLM hardware: memory vs. price, plotting memory against US price on log scales: discrete GPUs from 16 GB at $800 to 32 GB at $7,350 and 96 GB at about $16,000, unified-memory systems from 128 GB at $3,449 to 512 GB at $22,299." >}}

Per gigabyte, discrete GPUs are expensive and unified-memory systems are where capacity gets cheap. You pay for that capacity in bandwidth, which the next section covers.

Backend support matters more off NVIDIA. Ollama's <a href="https://docs.ollama.com/gpu" target="_blank">GPU support page</a> lists the RX 9070 XT and R9700 on Linux with the ROCm v7 driver, while its Windows ROCm list stops at the RX 7000 and Radeon PRO W7000 cards. Vulkan is on by default and covers the rest, so a Radeon card on Windows still works, just not through ROCm. Intel's Arc Pro cards aren't on Ollama's list; llama.cpp's SYCL and Vulkan backends are the usual path. Linux is still the better choice for AMD inference.

## Large Unified Memory Systems

This is the category that changes the calculation for 100B-class and larger models. On a PC with a 24GB card, Nemotron 3 Super or Mistral Medium 3.5 doesn't fit without spilling into system RAM. Systems with large **unified memory**, where CPU and GPU share one pool, remove that ceiling: Nemotron 3 Super loads into 128GB and every layer runs on the GPU. The tradeoff is bandwidth. The AMD and NVIDIA boxes sit between 256 and 300 GB/s, while Apple's Max and Ultra chips go much wider.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">System</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Memory</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Bandwidth</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">US price</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mac Studio M5 Max</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">36 to 128 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">460 or 614 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">from $2,499</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mac Studio M5 Ultra</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">96, 256 or 512 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.2 TB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">from $5,499; 512GB $22,299</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Framework Desktop, Ryzen AI Max+ 395</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">256 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$3,449</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Framework Desktop, Ryzen AI Max+ PRO 495</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">192 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">273 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$6,799 (DIY Edition)</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>ASUS ProArt GR1X, RTX Spark</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">64 or 128 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">300 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">from $4,499; 128GB $6,999</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>NVIDIA DGX Spark</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128 GB (64GB from partners)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">273 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$6,950; 64GB from $4,999</td>
</tr>
</tbody>
</table>

### Mac Studio M5 Max and M5 Ultra

The Mac Studio is the fastest single box in this group. Apple's <a href="https://www.apple.com/mac-studio/specs/" target="_blank">spec page</a> ties memory to the chip: the $2,499 base M5 Max has a 32-core GPU, 36GB and 460 GB/s, while 48, 64 and 128GB come only with the 40-core GPU at 614 GB/s. The 36GB base model runs Qwen3.8 27B or Inkling 2 Mini, 64GB adds room for Qwen3.6 35B-A3B at long contexts, and 128GB holds Mistral Medium 3.5 or Nemotron 3 Super.

The M5 Ultra runs at 1.2 TB/s in every build. The cheapest is $5,499 with a 64-core GPU and 96GB, which holds Qwen3.8 27B at full BF16 (56GB) with plenty of room for context. The 256GB and 512GB builds need the 80-core GPU tier: per <a href="https://www.tomshardware.com/desktops/mini-pcs/apple-mac-studio-m5-ultra-review" target="_blank">Tom's Hardware's review</a> that adds $1,300, and going from 96GB to 256GB adds $4,000, so 256GB starts around $10,799, enough for GLM 5.3 Flash at 4-bit once you raise macOS's GPU memory limit. The 512GB build is $22,299, with $15,500 of that being memory (<a href="https://macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/" target="_blank">MacRumors</a>). It's the only single box here that holds Inkling 2 Small (354GB at 4-bit) or GLM-5.2, a 743B model that takes 418GB.

Speed follows the bandwidth. Tom's Hardware ran the dense Qwen3.8 27B at Q4_K_M on the 80-core M5 Ultra and measured output about double the M4 Max and almost four times a DGX Spark, with faster prompt processing than the Spark as well. Older Macs read long prompts slowly, and Apple says the M5 Max processes prompts up to 3.9x faster than the M4 Max in LM Studio (<a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/" target="_blank">Apple newsroom</a>), thanks to neural accelerators in each GPU core.

The catch is software. In a <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/going-deep-on-local-ai-performance-with-apples-mac-studio-with-m5-ultra-inference-engine-recipes-mandatory-for-bigger-models-as-mlx-stack-matures" target="_blank">follow-up deep dive</a> with large MoE models, results depended heavily on the inference engine: two clustered DGX Sparks processed long prompts far faster, and an MLX-specific serving recipe tripled the Mac's decode speed on GLM 5.3 Flash compared with llama.cpp. MLX also doesn't batch requests like vLLM on NVIDIA, so the Mac is excellent for one developer or a small team and the wrong tool for 20 concurrent users.

Apple's newest chip, the M6, went into the 14-inch MacBook Pro, the Mac mini and the iMac rather than the Mac Studio. Per Apple's <a href="https://www.apple.com/macbook-pro/specs/" target="_blank">MacBook Pro spec page</a>, it tops out at 32GB of unified memory and 170 GB/s (153 GB/s on 16GB models), with Neural Accelerators in its 12-core GPU. 32GB holds Qwen3.8 27B or Inkling 2 Mini at four bits with a modest context, but 170 GB/s caps the dense Qwen3.8 27B at about 10 tokens/s, so the MoE Inkling 2 Mini is the better fit. If you want a small Mac with more room, the <a href="https://www.apple.com/mac-mini/specs/" target="_blank">Mac mini</a> with an M5 Pro goes up to 64GB.

### Mac Studio M4 Max and M3 Ultra (used and refurbished)

Apple's Mac Studio page now lists only the M5 Max and M5 Ultra, so the earlier models, including the 512GB M3 Ultra, are used or refurbished buys. The M3 Ultra has 819 GB/s, two-thirds of the M5 Ultra's, and in Geerling's test it ran Llama 3.1 70B at 14.08 tokens/s, the best of any unified-memory machine in that table. A 256GB unit holds Mistral Medium 3.5 at Q8 (138GB) with headroom, and a 512GB one holds Inkling 2 Small (354GB at 4-bit) or GLM-5.2 (418GB), the same models as a 512GB M5 Ultra at lower speed.

The 40-core M4 Max has 546 GB/s and up to 128GB. <a href="https://www.tomshardware.com/desktops/exploring-apple-silicons-local-ai-performance-with-the-mac-studio-and-m4-max-m4-max-beats-gb10-and-strix-halo-in-decode-throughput-but-memory-bandwidth-isnt-everything" target="_blank">Tom's Hardware's llama.cpp tests</a> found it writing 27% to 82% faster than a GB10 box depending on the model, and 2.26 times as fast as Strix Halo on the dense Gemma 4 12B. On that dense model, though, its prompt processing was only level with Strix Halo, which is the gap the M5 generation went after.

### NVIDIA DGX Spark (128GB LPDDR5X)

The DGX Spark is NVIDIA's "personal AI supercomputer": a GB10 Grace Blackwell chip with 128GB of unified memory at 273 GB/s, running Linux with CUDA and NVIDIA's container stack. That stack is the main reason to buy one, since fine-tuning scripts, NIM containers and vLLM or SGLang recipes written for NVIDIA mostly just work. NVIDIA's own <a href="https://developer.nvidia.com/blog/how-nvidia-dgx-sparks-performance-enables-intensive-ai-tasks" target="_blank">single-user benchmarks</a> show where it's strong: Llama 3.1 8B in NVFP4 read a 2,048-token prompt at 10,257 tokens/s, then wrote at 38.65 tokens/s, and gpt-oss 120B came in at 1,725 and 55.37. The prefill figures are genuinely impresive; the generation figures are what 273 GB/s allows.

On big dense models that bus is the ceiling: LMSYS measured 2.7 tokens/s on Llama 3.1 70B in FP8, and Geerling's Ollama run got 4.71 with the four-bit file. The price climbed with memory costs too. <a href="https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases" target="_blank">ServeTheHome reported</a> that the 128GB model, which launched at $3,999, now costs $6,950, while Acer, ASUS, Dell, Gigabyte, HP and MSI sell 64GB versions from $4,999.

What sets the Spark apart is clustering. Two units connect directly over their ConnectX-7 ports, and NVIDIA now supports up to eight. In its <a href="https://developer.nvidia.com/blog/running-frontier-class-ai-models-across-8-nvidia-dgx-spark-nodes" target="_blank">multi-node benchmarks</a>, Qwen3.8 27B in NVFP4 decoded at 11.86 tokens/s on one Spark with an 8k prompt, 21.71 on two directly connected nodes and 52.58 on eight behind a switch. Eight nodes give 1TB of memory, enough for the full 753B GLM 5.3 in NVFP4, which NVIDIA ran at 31 tokens/s for one user with speculative decoding. Eight Sparks at today's price cost over $55,000, though.

### AMD Ryzen AI Max+ 395 (Strix Halo)

The Ryzen AI Max+ 395 is AMD's answer to Apple Silicon: 16 Zen 5 cores, a 40-CU Radeon 8060S GPU and up to 128GB of LPDDR5X at 256 GB/s on one chip. AMD's Variable Graphics Memory gives the GPU up to 96GB on Windows, and Linux allows more, so Mistral Medium 3.5 or Nemotron 3 Super runs entirely on the GPU, somthing no 24GB or 32GB card can do. It's the cheapest way to load a 120B MoE model, though the price rose with everything else: Framework's 128GB Desktop launched at $1,999 and now lists at $3,449 (<a href="https://hwbusters.com/news/framework-desktop-goes-to-192gb-with-gorgon-halo-and-the-price-nearly-doubles-to-6799/" target="_blank">Hardware Busters</a>). The Corsair AI Workstation 300, Geekom A9 Mega and AMD's own Ryzen AI Halo box sit in the same range.

On a dense 70B it's slow: Geerling measured 4.97 tokens/s, in line with its 6 tokens/s ceiling. On MoE models it's a different machine. One person, eugr, ran the same `llama-bench` command with gpt-oss 120B on a DGX Spark and a Ryzen AI Max+ 395 mini PC and <a href="https://forums.developer.nvidia.com/t/dgx-spark-vs-amd-strix-halo/348751" target="_blank">posted the results</a>:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Machine (llama.cpp, gpt-oss 120B)</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Prompt, empty context</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Output, empty context</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Prompt at 32k</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Output at 32k</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">DGX Spark, CUDA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,939 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">56.3 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,242 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">39.1 tok/s</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Ryzen AI Max+ 395, ROCm</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,000 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">47.5 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">349 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">35.4 tok/s</td>
</tr>
</tbody>
</table>

Output speed is close, because both have about the same bandwidth and gpt-oss reads only a few GB per token. Prompt processing is a compute job, and there the Spark is twice as fast on an empty context and 3.6 times as fast at 32k: reading another 2,048 tokens into a 32k conversation takes about 1.6 seconds on the Spark and 5.9 on the AMD box. Both backends have improved since, and a later <a href="https://github.com/visorcraft/strix-halo-llm-perf" target="_blank">community run</a> on ROCm 7 measured 53.4 tokens/s output on the 395, so the ratio is the useful part. For a chat window, the AMD box at half the price is fine. For a coding agent that rereads a big context every turn, the Spark's prefill is worth paying for.

Use Linux with ROCm 7 for the best results; on Windows most tools go through Vulkan instead.

### AMD Ryzen AI Max+ PRO 495 (Gorgon Halo)

Gorgon Halo keeps the design and raises the memory ceiling. The Ryzen AI Max+ PRO 495 pairs 16 Zen 5 cores (up to 5.2 GHz) with a 40-CU Radeon 8065S and supports up to **192GB of unified memory**, of which 160GB can go to the GPU. That's enough for Nemotron 3 Super at Q8 (132GB), or Mistral Medium 3.5 at Q8 with a long context.

Don't expect much more speed. The memory is still LPDDR5X, now at 8533 MT/s, so bandwidth only rises to 273 GB/s, about 7% above the 395. You're paying for headroom, and paying a lot: Framework's 192GB Desktop starts at **$6,799** for the DIY Edition and runs Linux only at that size. Lenovo's ThinkCentre X Ultra takes the PRO 495 with up to 128GB, and AMD's <a href="https://www.amd.com/en/blogs/2026/project-zenith-comes-to-amd-ryzen-ai-halo-ready-to-code.html" target="_blank">Ryzen AI Halo 495 box</a> ships with Microsoft's Project Zenith developer setup preinstalled.

### NVIDIA RTX Spark

The RTX Spark is NVIDIA's Windows-on-Arm chip: an Arm CPU built with MediaTek and a Blackwell GPU sharing 64 or 128GB of LPDDR5X at 300 GB/s. It brings the DGX Spark idea, unified memory with CUDA, to laptops and small desktops, and it's on sale from ASUS, Dell, HP, Lenovo, Microsoft Surface and MSI, from the Surface Laptop Ultra to mini PCs like the ASUS ProArt GR1X ($4,499 with 64GB, $6,999 with 128GB).

In <a href="https://www.tomsguide.com/computing/mini-pcs/nvidia-rtx-spark-mini-pc-review-benchmarks-vs-amd" target="_blank">Tom's Guide's review</a>, the 128GB GR1X ran Qwen3.8 27B in LM Studio at 25.6 to 31.1 tokens/s across three tasks, against 20.8 to 24.3 on a 128GB Ryzen AI Max 395 mini PC that costs $3,000 less. The bigger gap was time to first token: 0.32 to 0.98 seconds versus 1.10 to 2.41. The review doesn't name the quantization. Check that your tools have Windows on Arm builds before buying.

## Professional and Enterprise GPUs

When you're serving a team rather than one user, consumer hardware hits real limits: no ECC memory, shorter warranties, and software tuned for one request at a time.

The current workstation card is the **RTX PRO 6000 Blackwell**: 96GB of GDDR7 with ECC at 1,792 GB/s, the bandwidth of an RTX 5090 with three times the memory. NVIDIA publishes no MSRP; its marketplace listed it at about $16,000 per <a href="https://www.igorslab.de/en/nvidia-rtx-pro-6000-blackwell-16000-dollar-96-gb-workstation-gpu-price-increase/" target="_blank">Igor's Lab</a>, which also found it out of stock. 96GB holds Nemotron 3 Super or Mistral Medium 3.5 at four bits, and the ceiling for that dense 128B is around 22 tokens/s, seven times what the 256 GB/s unified-memory boxes reach. Runpod rents it from $1.69 an hour.

Data center GPUs are a different class. NVIDIA lists 80GB of HBM3 at 3.35 TB/s for the <a href="https://www.nvidia.com/en-us/data-center/h100/" target="_blank">H100 SXM</a> and 141GB of HBM3e at 4.8 TB/s for the <a href="https://www.nvidia.com/en-us/data-center/h200/" target="_blank">H200</a>. Their real edge is concurrency: under vLLM, batching turns many users' reads of the weights into one, so dozens of people share a GPU without a proportional slowdown. Most teams rent them. Runpod's <a href="https://www.runpod.io/pricing" target="_blank">pricing page</a> lists the H100 SXM at $2.69 an hour on community cloud ($4.39 secure) and the H200 at $3.59 ($5.29 secure). Rent the candidate for a day and replay real traffic through vLLM before you commit.

## Storage, RAM, and Multi-GPU

A few practical points that usually get underestimated.

**System RAM** is slow overflow: layers that don't fit in VRAM run from it over PCIe, which is why the 4090 came last in Geerling's table, and if RAM runs out too the system swaps. On a discrete GPU build, provision at least twice your VRAM in system RAM. On a Mac or Ryzen AI Max machine the GPU's share comes from the same pool the OS needs, so leave a few GB free.

**Storage** only decides cold-start time. Nemotron 3 Super is 86.8 GB, so a PCIe 4.0 NVMe drive at around 7,000 MB/s (Samsung 990 Pro, WD Black SN850X) reads it in about 12 seconds, while a 550 MB/s SATA SSD takes over two and a half minutes. Get at least 2TB of NVMe if you keep several models around.

**Multi-GPU** adds memory, not single-user speed. llama.cpp and Ollama split layers across cards, so two 24GB cards hold Qwen3.8 27B at Q8 (30GB) with a long context, but each token still passes through the cards one after another. Real speedups need tensor parallelism, where every card works on every layer at once; vLLM does this on NVIDIA, and the Spark numbers above show what it buys: 1.84 times the decode speed on two nodes, 4.43 times on eight.

## Cloud vs. Owning Hardware

For occasional use, renting wins easily. Runpod lists an RTX 4090 at $0.34 an hour and an RTX 5090 at $0.69 on its community cloud, or $0.89 and $1.39 on its secure cloud, and renting lets you try a model on a card before buying one.

The math changes with sustained use. At $1.39 an hour, a $7,350 RTX 5090 pays for itself after about 5,290 hours, before electricity: two and a half years at 40 hours a week, or about seven months running around the clock. A used RTX 3090 at $1,996 against a $0.34 rented 4090 breaks even after about 5,870 hours, and a $16,000 RTX PRO 6000 against its $2.69 secure-cloud rate after about 5,950. At current prices, roughly 5,000 to 6,000 hours of real use is where owning starts to win. If the machine runs all day or the data can't leave your network, buy. For an afternoon of testing or a weekly batch job, rent.

## Getting Started with Ollama

Once you have hardware, running a model takes a few minutes. On macOS and Windows, download the app from <a href="https://ollama.com/download" target="_blank">ollama.com/download</a>. On Linux, use the install script:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Pick a model that fits with room for context: Qwen3.5 9B or Gemma 4 12B on a 16GB GPU, Qwen3.8 27B or Inkling 2 Mini on 24GB, Nemotron 3 Super on a 128GB unified-memory machine.

```bash
ollama run qwen3.5:9b
ollama run qwen3.8:27b
ollama run inkling-2-mini
ollama run nemotron-3-super
```

Add `--verbose` for separate prompt and output timings, then check what was actually allocated with `ollama ps`:

```bash
ollama run qwen3.5:9b --verbose --think=false "Explain how a DNS cache works in three sentences."
ollama ps
```

```text
NAME          ID              SIZE      PROCESSOR    CONTEXT    RUNNER    UNTIL
qwen3.5:9b    d63f830f28d5    8.0 GB    100% GPU     4096       mlx       4 minutes from now

prompt eval count:    23 token(s)
prompt eval cached:   22 token(s)
eval count:           92 token(s)
eval rate:            26.80 tokens/s
```

That's a warm run on my M3 Pro, and 26.8 tokens/s sits close to the bandwidth ceiling for this chip: 150 GB/s divided by the roughly 5.2 GB of language-model weights read per token, about 29. Qwen3.5 thinks before answering by default, and `--think=false` turns that off so the timing covers the answer itself. **PROCESSOR** should say `100% GPU`; a split like `48%/52% CPU/GPU` means the model or its cache didn't fit, so lower the context, quantize the cache, or use a smaller tag. **CONTEXT** shows the window Ollama allocated, which stays at the VRAM-based default unless you raise it:

```bash
OLLAMA_CONTEXT_LENGTH=32768 OLLAMA_KV_CACHE_TYPE=q8_0 ollama serve
```

**RUNNER** shows which engine loaded the model. Ollama added an <a href="https://ollama.com/blog/mlx" target="_blank">MLX engine</a> for Apple Silicon in version 0.19, starting as a preview with a short list of supported models, and it picks the runner per model, so check the column rather than assuming; here `qwen3.5:9b` loaded on MLX, while models without an MLX build still use llama.cpp's Metal backend. On AMD, Ollama needs the ROCm v7 driver on Linux, falls back to Vulkan for RDNA 4 cards on Windows, and its docs describe `HSA_OVERRIDE_GFX_VERSION` for GPUs ROCm doesn't list. On NVIDIA it just works.

Ollama serves an OpenAI-compatible API at `http://localhost:11434/v1`, so Cursor, Continue, Open WebUI or any OpenAI client can point straight at it. For a chat frontend, Open WebUI runs in Docker next to a host Ollama install:

```bash
docker run -d -p 127.0.0.1:3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

That gives you a ChatGPT-like interface at `localhost:3000`, bound to your machine only. Our guide on {{< link href="/blog/best_open_source_alternatives_to_chatgpt/" >}}open-source ChatGPT alternatives{{< /link >}} covers more frontend options.

## Access Your LLM from Anywhere with Pinggy

Once Ollama is running locally, you might want to reach it from a laptop, a phone or a teammate's machine. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} creates a secure public tunnel with a single SSH command - no firewall rules, port forwarding, or static IP needed.

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"}}}"
{{</ ssh_command >}}

This gives you a public HTTPS URL for your Ollama instance; use it plus `/v1` as the base URL in any OpenAI-compatible client. The `u:Host:localhost:11434` part rewrites the Host header to the one Ollama expects; without it, Ollama answers 403 Forbidden. The same approach works for Open WebUI on port 3000.

Anyone with the URL can use your model, so add a key before you share it. Appending `k:YOUR_RANDOM_KEY` makes the tunnel reject requests that don't send `Authorization: Bearer YOUR_RANDOM_KEY`, which is exactly what OpenAI-style clients send as their API key; the [key authentication docs](/docs/http_tunnels/key_auth/) have the details. A free tunnel lasts 60 minutes and gets a new URL each time, while a Pro token with a [persistent subdomain](/docs/persistent_subdomain/) keeps the address stable.

## What to Buy at Each Budget

US street prices, which have moved a lot with the memory shortage.

**Around $800.** An RTX 5060 Ti 16GB runs Gemma 4 12B, Qwen3.5 9B or Bonsai 2 27B with a long context. Check your current machine first: an 8GB card already runs Qwen3.5 9B at Ollama's 4k default.

**$1,000 to $2,000.** The Arc Pro B60 gives 24GB for about $1,000, enough for Qwen3.8 27B, if you're happy with llama.cpp's Intel backends. The Radeon AI PRO R9700 at about $1,900 gives 32GB, enough for Qwen3.8 27B at 256k, and is the best-supported AMD option on Linux. A used RTX 3090 costs about the same for less memory, so only buy one cheap.

**$2,500 to $3,500.** A 128GB Ryzen AI Max+ 395 machine holds Nemotron 3 Super or Mistral Medium 3.5 entirely in GPU memory, and the MoE Nemotron writes several times faster than the dense Mistral. A Mac Studio M5 Max with 64GB or more is the pick if you also want a Mac for Qwen3.8 27B and Qwen3.6 35B-A3B, with more bandwidth and far less setup.

**$5,000 to $7,500.** The M5 Ultra at $5,499 has by far the most bandwidth. The DGX Spark has CUDA, fast prefill and clustering, the GR1X runs Windows, and the 192GB Framework 495 has the most memory. An RTX 5090 is the fastest option for models under 32GB and the worst value for anything larger.

**$10,000 and up.** A 256GB M5 Ultra from about $10,799 runs GLM 5.3 Flash and other large MoE models, an RTX PRO 6000 is the fastest choice up to 96GB, and the $22,299 512GB Mac Studio holds Inkling 2 Small or GLM-5.2 on one box.

## Conclusion

Size the machine by memory first: the model plus its KV cache at the context you use. A 16GB card like the RTX 5060 Ti covers 9B to 14B models, 24GB to 32GB covers Qwen3.8 27B, Inkling 2 Mini and Qwen3.6 35B-A3B, and past that unified-memory systems such as the Ryzen AI Max+ 395, DGX Spark or Mac Studio M5 Ultra take over. Check `ollama ps` with your real prompts before you commit.

For what to run on it, see the {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" >}}best open source LLMs for coding{{< /link >}} and {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}top local LLM tools{{< /link >}}.
