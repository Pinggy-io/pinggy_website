---
title: "Self-Hosting LLMs on the 512GB M5 Ultra Mac Studio: What Actually Fits"
description: "Apple's M5 Ultra Mac Studio tops out at 512GB of unified memory at 1.2TB/s. Here is the memory math, which open-weight LLMs actually fit at 4-bit, measured tokens per second, the MLX commands to run them, and when you need a Thunderbolt 5 cluster instead."
date: 2026-09-01T11:30:00+05:30
draft: false
tags: ["Apple Silicon", "local LLM", "self-hosted AI", "AI hardware"]
categories: ["Technology", "AI", "Hardware"]
eyebrow: "Apple Silicon"
og_image: "images/self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBhbiBMTE0gb24gYSA1MTJHQiBNNSBVbHRyYSBNYWMgU3R1ZGlvIGFuZCBSZWFjaCBJdCBBbnl3aGVyZSB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBjaG9vc2luZyBhbiBvcGVuLXdlaWdodCBMTE0gdGhhdCBmaXRzIEFwcGxlJ3MgTTUgVWx0cmEgTWFjIFN0dWRpbyB3aXRoIDUxMkdCIG9mIHVuaWZpZWQgbWVtb3J5LCByYWlzaW5nIHRoZSBHUFUgd2lyZWQgbGltaXQsIHNlcnZpbmcgaXQgd2l0aCBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEksIGFuZCBleHBvc2luZyB0aGF0IEFQSSB0byB0aGUgaW50ZXJuZXQgd2l0aCBhbiBhdXRoZW50aWNhdGVkIFBpbmdneSB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNpemUgdGhlIG1vZGVsIGFnYWluc3QgeW91ciB1bmlmaWVkIG1lbW9yeSIsCiAgICAgICJ0ZXh0IjogIkJ1ZGdldCByb3VnaGx5IDAuNSB0byAwLjYgR0Igb2YgdW5pZmllZCBtZW1vcnkgcGVyIGJpbGxpb24gVE9UQUwgcGFyYW1ldGVycyBhdCA0LWJpdCBxdWFudGl6YXRpb24sIHBsdXMgdGhlIEtWIGNhY2hlIGFuZCBmcmFtZXdvcmsgb3ZlcmhlYWQuIFRvdGFsIHBhcmFtZXRlcnMgc2V0IHRoZSBjYXBhY2l0eSByZXF1aXJlbWVudCBldmVuIGZvciBtaXh0dXJlLW9mLWV4cGVydHMgbW9kZWxzLCBiZWNhdXNlIHRoZSByb3V0ZXIgY2FuIHNlbGVjdCBhbnkgZXhwZXJ0IGF0IGFueSBzdGVwLiBWZXJpZmllZCA0LWJpdCBNTFggcmVwb3NpdG9yeSBzaXplczogUXdlbjMuOC0yN0IgaXMgMTYuMUdCLCBEZWVwU2Vlay1WNC1GbGFzaCAoMjg0Qi8xM0IgYWN0aXZlKSBpcyAxNTFHQiwgR0xNLTUuMy1GbGFzaCAoMzIwQi8xOEIgYWN0aXZlKSBpcyAxNzcuNkdCLCBNaW5pTWF4IE0zICh+NDI3QikgaXMgYWJvdXQgMjQwR0IsIGFuZCBHTE0tNS4yICg3NDNCLzQwQiBhY3RpdmUpIGlzIDQxOEdCLiBLaW1pIEsyLjctQ29kZSBpcyA2NDFHQiBhdCA0LWJpdCBhbmQgbmVlZHMgdHdvIG1hY2hpbmVzOyBLaW1pIEszIGlzIDEuNTZUQiBhbmQgbmVlZHMgZm91ci4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXN0aW1hdGUgc3BlZWQgZnJvbSBtZW1vcnkgYmFuZHdpZHRoLCBub3QgY2FwYWNpdHkiLAogICAgICAidGV4dCI6ICJUb2tlbiBnZW5lcmF0aW9uIGlzIG1lbW9yeS1iYW5kd2lkdGgtYm91bmQ6IHRva2VucyBwZXIgc2Vjb25kIGlzIHJvdWdobHkgbWVtb3J5IGJhbmR3aWR0aCB0aW1lcyBhbiBlZmZpY2llbmN5IGZhY3RvciBvZiAwLjYgdG8gMC44LCBkaXZpZGVkIGJ5IHRoZSBieXRlcyByZWFkIHBlciB0b2tlbi4gVGhlIE01IFVsdHJhIHJ1bnMgYXQgMS4yVEIvcyBvbiBib3RoIGl0cyA2NC1jb3JlIGFuZCA4MC1jb3JlIEdQVSBjb25maWd1cmF0aW9ucywgYSA1MCBwZXJjZW50IGluY3JlYXNlIG92ZXIgdGhlIE0zIFVsdHJhJ3MgODE5R0Ivcy4gUHJvbXB0IHByb2Nlc3NpbmcgaXMgY29tcHV0ZS1ib3VuZCBpbnN0ZWFkIGFuZCBiZW5lZml0cyBmcm9tIHRoZSBOZXVyYWwgQWNjZWxlcmF0b3JzIGluIGV2ZXJ5IE01IEdQVSBjb3JlLCB3aGljaCBBcHBsZSBtZWFzdXJlZCBhdCAzLjN4IHRvIDQuMDZ4IGZhc3RlciB0aW1lLXRvLWZpcnN0LXRva2VuIHRoYW4gTTQgYWdhaW5zdCBvbmx5IDEuMTl4IHRvIDEuMjd4IG9uIGRlY29kZS4gUHJlZmVyIGxhcmdlIHNwYXJzZSBtaXh0dXJlLW9mLWV4cGVydHMgbW9kZWxzIG92ZXIgbGFyZ2UgZGVuc2Ugb25lczogYSA0LWJpdCBMbGFtYSA0MDVCIGRlbnNlIG1vZGVsIGdlbmVyYXRlcyBvbmx5IDIuOSB0b2tlbnMgcGVyIHNlY29uZCBvbiBhbiBNMyBVbHRyYS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUmFpc2UgdGhlIEdQVSB3aXJlZCBtZW1vcnkgbGltaXQiLAogICAgICAidGV4dCI6ICJDaGVjayB0aGUgY3VycmVudCBjZWlsaW5nIHdpdGggc3lzY3RsIGlvZ3B1LndpcmVkX2xpbWl0X21iLiBBIHZhbHVlIG9mIDAgbWVhbnMgdGhlIHN5c3RlbSBkZWZhdWx0IG9mIHJvdWdobHkgNzUgcGVyY2VudCBvZiBpbnN0YWxsZWQgUkFNIGlzIGluIGZvcmNlLCB3aGljaCBvbiBhIDUxMkdCIG1hY2hpbmUgaXMgYWJvdXQgMzg0R0IuIFJhaXNlIGl0IHdpdGggc3VkbyBzeXNjdGwgaW9ncHUud2lyZWRfbGltaXRfbWI9NDgzMzI4IHRvIGdpdmUgdGhlIEdQVSBhYm91dCA0NzJHQiBhbmQgbGVhdmUgcm91Z2hseSA0MEdCIGZvciBtYWNPUy4gVGhlIHNldHRpbmcgZG9lcyBub3Qgc3Vydml2ZSBhIHJlYm9vdCwgc28gcnVuIGl0IGF0IGxvZ2luIGlmIHlvdSBkZXBlbmQgb24gaXQsIGFuZCBuZXZlciBhbGxvY2F0ZSBhbGwgb2YgaW5zdGFsbGVkIG1lbW9yeS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2VydmUgdGhlIG1vZGVsIGxvY2FsbHkgd2l0aCBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEkiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSB2aXJ0dWFsIGVudmlyb25tZW50LCBydW4gcGlwIGluc3RhbGwgbWx4LWxtLCB0aGVuIHN0YXJ0IHRoZSBzZXJ2ZXI6IG1seF9sbS5zZXJ2ZXIgLS1tb2RlbCBtbHgtY29tbXVuaXR5L0RlZXBTZWVrLVY0LUZsYXNoLTRiaXQgLS1ob3N0IDEyNy4wLjAuMSAtLXBvcnQgODA4MCAtLWRlY29kZS1jb25jdXJyZW5jeSA0IC0tcHJvbXB0LWNhY2hlLXNpemUgOC4gSXQgZXhwb3NlcyAvdjEvbW9kZWxzIGFuZCAvdjEvY2hhdC9jb21wbGV0aW9ucyBpbiB0aGUgT3BlbkFJIHNoYXBlLiBSYWlzZSAtLWRlY29kZS1jb25jdXJyZW5jeSBvbiBhIGxhcmdlLW1lbW9yeSBtYWNoaW5lLCBzaW5jZSBlYWNoIGNvbmN1cnJlbnQgc2xvdCBjb3N0cyBhbm90aGVyIEtWIGNhY2hlIGJ1dCBsZXRzIGEgc2Vjb25kIHJlcXVlc3QgbWFrZSBwcm9ncmVzcywgYW5kIHVzZSAtLXByb21wdC1jYWNoZS1zaXplIHNvIGFuIGFnZW50IHJlc2VuZGluZyBpdHMgY29udGV4dCBkb2VzIG5vdCBwYXkgZnVsbCBwcmVmaWxsIGV2ZXJ5IHR1cm4uIENvbmZpcm0gaXQgaXMgYWxpdmUgd2l0aCBjdXJsIC1zIGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC92MS9tb2RlbHMgYmVmb3JlIGV4cG9zaW5nIGl0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgdGhlIEFQSSB3aXRoIGEgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIlRoZSBzZXJ2ZXIgYmluZHMgdG8gbG9vcGJhY2sgYW5kIHRoZSBNYWMgaXMgdXN1YWxseSBiZWhpbmQgTkFUIHdpdGggbm8gZm9yd2FyZGFibGUgcG9ydC4gSW4gYSBuZXcgdGVybWluYWwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgwIGZyZWUucGluZ2d5LmlvLiBQaW5nZ3kgcHJpbnRzIGEgcHVibGljIEhUVFBTIFVSTCBzdWNoIGFzIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5Lmxpbmsgd2l0aCB0aGUgY2VydGlmaWNhdGUgYWxyZWFkeSBoYW5kbGVkLiBQb2ludCBhbnkgT3BlbkFJLWNvbXBhdGlibGUgY2xpZW50IC0gQ29udGludWUuZGV2LCBBaWRlciwgT3BlbkNvZGUsIHRoZSBPcGVuQUkgU0RLLCBhIHBob25lIGJyb3dzZXIgLSBhdCB0aGF0IFVSTCBwbHVzIC92MSBhbmQgcmVxdWVzdHMgYXJlIHNlcnZlZCBieSB0aGUgbW9kZWwgb24geW91ciBNYWMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkF1dGhlbnRpY2F0ZSB0aGUgdHVubmVsIGJlZm9yZSBsZWF2aW5nIGl0IHJ1bm5pbmciLAogICAgICAidGV4dCI6ICJOZXZlciBsZWF2ZSBhbiBpbmZlcmVuY2UgZW5kcG9pbnQgb3BlbiBvbiB0aGUgcHVibGljIGludGVybmV0LiBCZWFyZXIta2V5IGF1dGggZml0cyBhbiBMTE0gQVBJIGJlc3QgYmVjYXVzZSBPcGVuQUktY29tcGF0aWJsZSBjbGllbnRzIGFscmVhZHkgc2VuZCBhbiBBdXRob3JpemF0aW9uOiBCZWFyZXIgaGVhZGVyOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCAtdCBmcmVlLnBpbmdneS5pbyBrOnlvdXItc2VjcmV0LWtleS4gRm9yIGEgYnJvd3NlciBwYXNzd29yZCBwcm9tcHQgdXNlIGJhc2ljIGF1dGggaW5zdGVhZCB3aXRoIGI6dXNlcm5hbWU6cGFzc3dvcmQsIG9yIGlmIHRoZSBjYWxsZXJzIGFyZSBhIGtub3duIG5ldHdvcmssIHdoaXRlbGlzdCB0aGUgcmFuZ2Ugd2l0aCB3OjIwMy4wLjExMy4wLzI0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJLZWVwIHRoZSB0dW5uZWwgdXAgYXJvdW5kIHRoZSBjbG9jayIsCiAgICAgICJ0ZXh0IjogIkZyZWUgdHVubmVscyBleHBpcmUgYWZ0ZXIgNjAgbWludXRlcyBhbmQgbG9uZy1saXZlZCBTU0ggc2Vzc2lvbnMgZHJvcCwgc28gYWRkIC1vIFNlcnZlckFsaXZlSW50ZXJ2YWw9NjAgYW5kIHdyYXAgdGhlIGNvbW1hbmQgaW4gYSByZWNvbm5lY3QgbG9vcC4gQSBQcm8gdG9rZW4gYWRkaXRpb25hbGx5IHByb3ZpZGVzIGEgcGVyc2lzdGVudCBzdWJkb21haW4sIHdoaWNoIG1hdHRlcnMgYmVjYXVzZSBjbGllbnRzIGFuZCBhZ2VudHMgaG9sZCBvbmUgYmFzZSBVUkwgYW5kIGEgZnJlc2ggcmFuZG9tIGhvc3RuYW1lIG9uIGV2ZXJ5IHJlY29ubmVjdCBicmVha3MgdGhlbSBhbGwuIFRoZSBQaW5nZ3kgQ0xJIGhhbmRsZXMgcmVjb25uZWN0aW9uIGl0c2VsZjogcGluZ2d5IGh0dHAgLS10b2tlbiA8VE9LRU4+IC0tc3ViZG9tYWluIG15LW1hYy1zdHVkaW8gODA4MC4gV2hpbGUgYSB0dW5uZWwgaXMgcnVubmluZywgYSB3ZWIgZGVidWdnZXIgYXQgaHR0cDovL2xvY2FsaG9zdDo0MzAwIHNob3dzIGV2ZXJ5IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHRoYXQgY3Jvc3NlZCBpdC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_banner.webp" "Self-Hosting LLMs on the 512GB M5 Ultra Mac Studio" >}}

Self-hosting a large language model is rarely a compute problem first. It is a capacity problem: the weights either fit in fast memory or they do not, and almost everything about the experience - which models you can even load, how long a prompt you can hold, how many tokens per second you see - follows from that single fact.

Apple moved that ceiling on **August 25, 2026**. The new Mac Studio with M5 Ultra scales to **512GB of unified memory at 1.2TB/s**, a 50% bandwidth jump over the M3 Ultra's 819GB/s, in a box that draws a couple of hundred watts from a wall socket. That is enough to hold `mlx-community/GLM-5.2-4bit` - a 743B-parameter mixture-of-experts model, 418GB on disk - entirely in memory, with room left for a working context. It is also *not* enough to hold Kimi K3, whose official MXFP4 checkpoint is 1.56TB.

This post is the concrete version of that tradeoff: the arithmetic that decides what fits, a tier-by-tier list of open-weight models with real measured repository sizes, the tokens-per-second you should expect, the point at which you stop buying memory and start buying a second Mac, and how to serve the result to anywhere in the world from behind your own NAT.

{{% tldr %}}

**The machine:** M5 Ultra Mac Studio, announced August 25, 2026 - quad-die, up to 80-core GPU, **512GB of unified memory at 1.2TB/s**, 4.3x the peak AI compute of M3 Ultra. From **$5,499** (96GB); **$9,499** at 256GB; the 512GB build is unpriced and ships **late October 2026**. <a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/" target="_blank">Apple Newsroom</a>

**Fits one 512GB machine at 4-bit** (measured MLX repository sizes): <a href="https://huggingface.co/mlx-community/Qwen3.8-27B-4bit" target="_blank">Qwen3.8-27B</a> 16.1GB, <a href="https://huggingface.co/mlx-community/DeepSeek-V4-Flash-4bit" target="_blank">DeepSeek-V4-Flash</a> 151GB, <a href="https://huggingface.co/pipenetwork/GLM-5.3-Flash-MLX-4bit" target="_blank">GLM-5.3-Flash</a> 177.6GB, <a href="https://huggingface.co/pipenetwork/MiniMax-M3-MLX-4bit" target="_blank">MiniMax M3</a> ~240GB, <a href="https://huggingface.co/mlx-community/GLM-5.2-4bit" target="_blank">GLM-5.2</a> (743B) 418GB - the edge of the box.

**Does not fit:** <a href="https://huggingface.co/mlx-community/Kimi-K2.7-Code-4bit" target="_blank">Kimi K2.7-Code</a> 641GB and DeepSeek-V4-Pro ~862GB need two Macs; <a href="https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei" target="_blank">Kimi K3</a> at 1.56TB needs four. RDMA over Thunderbolt 5 makes that a 2TB pool.

**Speed** (measured on the 819GB/s M3 Ultra; scale ~1.46x for M5 Ultra): GLM-5.2 **17.7 tok/s**, DeepSeek V3 **just over 20**, Llama 405B dense **2.9**. Total parameters decide what fits, active parameters decide how fast - so buy this for sparse MoEs, not dense models.

**Serve and share it:** <a href="https://github.com/ml-explore/mlx-lm" target="_blank">MLX LM</a> is the fast path (`pip install mlx-lm`) and `mlx_lm.server` binds to `127.0.0.1:8080`. One command - `ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key` - gives it a public HTTPS URL behind the same `Authorization: Bearer` header OpenAI clients already send. <a href="https://pinggy.io" target="_blank">Pinggy</a>

{{% /tldr %}}

{{< llm-context >}}To reach an LLM running on a Mac Studio from anywhere with Pinggy - start the MLX server with `mlx_lm.server --model mlx-community/DeepSeek-V4-Flash-4bit --port 8080` (OpenAI-compatible API on port 8080), then in a new terminal run `ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key` to get a public HTTPS URL protected by a bearer key.{{< /llm-context >}}

## What is actually in the box

The M5 Ultra is not a new die. It is a **quad-die** part: two dual-die M5 Max chips bonded with next-generation UltraFusion, which Apple rates at over **4.4TB/s** of inter-die bandwidth. That matters for inference, because the fabric between halves has to be fast enough that the GPU can treat all 512GB as one flat pool rather than two NUMA domains you have to think about.

Here is how the two chips in the new Mac Studio compare, taken from <a href="https://www.apple.com/mac-studio/specs/" target="_blank">Apple's tech specs page</a>:

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Spec</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">M5 Max</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">M5 Ultra</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">CPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">18-core (6 super + 12 performance)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">30-core base, up to 36-core (12 super + 24 performance)</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32-core or 40-core</td>
  <td style="border:1px solid #ddd;padding:0.5em;">64-core or 80-core</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Neural Engine</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16-core</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32-core</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Unified memory</td>
  <td style="border:1px solid #ddd;padding:0.5em;">36GB base, up to 128GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">96GB base, 256GB or <strong>512GB</strong></td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Memory bandwidth</td>
  <td style="border:1px solid #ddd;padding:0.5em;">460GB/s (32-core GPU) or 614GB/s (40-core GPU)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.2TB/s on both configurations</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Starting price</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$2,499</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$5,499</td>
</tr>
</tbody>
</table>

Two details are easy to skim past and both matter more than the core counts. First, **the M5 Ultra runs at 1.2TB/s regardless of which GPU you pick**, so the cheaper 64-core config gives up compute but not decode bandwidth. Second, every GPU core now carries a **Neural Accelerator**, a dedicated matrix-multiply unit. That is a prefill feature, and we will come back to why.

For contrast, the M5 Max caps at 128GB. If your goal is running models above roughly the 70B dense / 120B MoE class, the Ultra is the only option in this lineup, and the memory upgrade is where the money goes: 96GB to 256GB alone adds $4,000.

## The two numbers that decide everything

Local inference has exactly two hardware constraints, and they map cleanly onto two specs.

**Capacity decides what loads.** At 4-bit quantization a model needs roughly **0.5 to 0.6 GB of memory per billion total parameters**, plus the KV cache and framework overhead. The word *total* is doing the work there. A mixture-of-experts model activates only a fraction of its parameters per token, but the router can pick any expert at any step, so all of them have to be resident. DeepSeek-V4-Flash activates 13B parameters per token and still needs 151GB of memory, because its total is 284B. If you want the longer version of why MoE models behave this way, we covered it in {{< link href="/blog/what_is_mixture_of_experts_in_llm_models/" >}}What is Mixture of Experts in LLM Models{{< /link >}}.

**Bandwidth decides how fast.** During decode, generating each token requires reading the active weights out of memory once. So the theoretical ceiling is:

```
tokens/sec = (memory bandwidth * efficiency) / bytes read per token
```

Efficiency in practice lands somewhere around 0.6 to 0.8 of peak. Run the numbers for a 4-bit 70B dense model on the M5 Ultra: about 40GB of weights read per token, 1.2TB/s of bandwidth, so a ceiling near 30 tok/s and a realistic 20 to 25. Now run them for a 4-bit MoE with 20B active parameters: only ~11GB read per token, and you are suddenly in the 70 to 100 tok/s range from a model that occupies 200GB.

**This is the single most important thing to understand about a 512GB Mac.** Capacity and speed are decided by different numbers, and sparse models exploit the gap. A 743B MoE with 40B active is *faster* to generate from than a 405B dense model, despite being nearly twice the size. The <a href="https://github.com/ml-explore/mlx/discussions/3209" target="_blank">systematic MLX benchmarks on an M3 Ultra 512GB</a> show this starkly: Mixtral 8x7B (12.9B active of 47B total) hits 68.4 tok/s at 4-bit and 1K context, while a dense Qwen 32B manages 31.2 and a dense Llama 405B collapses to **2.9 tok/s**. Dense models above ~120B are technically loadable on this machine and practically unusable.

### Prefill is a different bottleneck

Decode is bandwidth-bound. Prefill - processing the prompt you just sent - is compute-bound, because it multiplies a whole block of tokens against the weights at once. Apple is explicit about the split: "Generating the first token is compute-bound, and takes full advantage of the Neural Accelerators," while "generating subsequent tokens is bounded by memory bandwidth, rather than by compute ability."

That is why the Neural Accelerators in every M5 GPU core matter. In <a href="https://machinelearning.apple.com/research/exploring-llms-mlx-m5" target="_blank">Apple's own MLX measurements</a>, M5 delivered **3.3x to 4.06x faster time-to-first-token** than M4 across six models, but only **1.19x to 1.27x** faster subsequent tokens - because decode was still gated by a 28% bandwidth increase. Apple's Mac Studio claim of "up to 9.8x faster LLM prompt processing in LM Studio" versus M1 Ultra is a prefill number, not a generation number.

{{< image "self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_prefill_vs_decode.webp" "Speedup of the M5 over the M4 in MLX across six models: prefill (time-to-first-token) improves 3.30x to 4.06x, while decode improves only 1.19x to 1.27x" >}}

If you are running a coding agent, prefill is the number you feel. Agents routinely resend tens of thousands of tokens of context per turn, and a run that generates 200 tokens after reading 60,000 spends most of its wall-clock time in prefill. The same MLX benchmark run shows prefill throughput itself degrading with sequence length - roughly 345 tok/s at 1K context down to 154 tok/s at 128K, a 55% drop.

## How much of the 512GB you actually get

macOS does not hand the GPU all of unified memory. There is a wired-memory ceiling controlled by a sysctl, and on a machine this large the default leaves a lot of capacity on the table. Check it:

```bash
sysctl iogpu.wired_limit_mb
```

A return value of `0` means the system default is in force, which is typically around 75% of installed RAM. On a 512GB machine that is roughly 384GB - enough for GLM-5.3-Flash, not enough for GLM-5.2 at 418GB. Raise it, in megabytes:

```bash
# Give the GPU ~472GB of a 512GB machine, leaving ~40GB for macOS
sudo sysctl iogpu.wired_limit_mb=483328

# Revert to the system default at any time
sudo sysctl iogpu.wired_limit_mb=0
```

Two caveats worth taking seriously. The setting does **not** survive a reboot, so script it at login if you depend on it. And do not set it to the full installed amount - macOS still needs memory for the kernel, the window server, and whatever else you have open, and starving it produces beachballs or a hard reset rather than a graceful failure. For reference, the reviewer who first ran DeepSeek R1 671B on an M3 Ultra 512GB allocated **448GB** for a 404GB model and left 64GB to the OS. Somewhere between 32GB and 64GB of headroom is the sane range on a 512GB box.

Budget the rest like this: **model weights + KV cache + a few GB of framework overhead**. The KV cache is the part people forget, and it scales linearly with context length. On long-context runs you can quantize it, which `mlx-lm` supports directly:

```bash
mlx_lm.generate \
  --model mlx-community/DeepSeek-V4-Flash-4bit \
  --prompt "Summarise this repository's architecture." \
  --max-tokens 1024 \
  --kv-bits 8 \
  --quantized-kv-start 4096
```

That keeps the cache in full precision for the first 4,096 tokens and switches to 8-bit after, which is where the memory actually starts to bite. There is also `--max-kv-size` for a rotating cache if you would rather cap it hard than pay for it.

## Tier 1: models that fit with room to spare

Everything in this tier leaves you at least 300GB free, which means you can hold a million-token context, run two models at once, or keep working in Xcode while the model serves requests.

**Qwen3.8-27B** is the dense workhorse. Alibaba published it on August 14, 2026 under Apache 2.0, and the MLX 4-bit build is **16.1GB**. On a 512GB machine that is a rounding error, and it is the model to reach for when you want fast interactive edits rather than maximum capability. It is also the strongest thing you can run on a 24GB GPU, which makes it a useful yardstick.

**gpt-oss-120b** ships natively in MXFP4 at roughly 65GB and is a reasonable default for general chat and tool use where you want headroom for concurrency rather than raw score.

**Qwen3.8-Flash-Next** (August 26, 2026) is the odd one architecturally: a 125B MoE with only **6B active parameters**, paired with a 51B N-gram embedding table and a 4B multi-token-prediction module, released as a preview of the Qwen4 architecture. With 6B active per token, decode on an M5 Ultra should be genuinely quick - this is the shape of model that unified memory suits best.

**DeepSeek-V4-Flash** (284B total / 13B active, MIT, July 31, 2026) is the first model in this list where the total parameter count starts to matter. The MLX 4-bit conversion is **151GB**. It has the most independent benchmark coverage of the flash-tier models, and 13B active means decode stays comfortable.

**GLM-5.3-Flash** (320B / 18B active, MIT, August 26, 2026) is the capability pick of this tier. The 4-bit MLX build is **177.6GB**, and it is worth stopping on the quantization strategy: the routed experts, which are 304B of the 320B total, go to 4-bit with group size 64, while the lightning-indexer projections stay at 8-bit and the vision tower stays in bfloat16. The published perplexity on wikitext-2 is 3.7549. For comparison, the original BF16 checkpoint is **643GB** and does not fit on this machine at all. Quantization is not an optimization here, it is the whole reason the model runs.

One caveat on that build: the hybrid Kimi-Delta-linear plus DeepSeek-sparse attention stack is new enough that the conversion ships with its own loader rather than running under stock `mlx_lm`. Expect to clone the project's repo and use its entry point for now. `mlx-community/DeepSeek-V4-Flash-4bit` is the model in this tier that works with plain `mlx_lm.chat` and `mlx_lm.server` today, which is why it is the one used in the commands throughout this post.

## Tier 2: models that fit but fill the machine

This is the tier the 512GB configuration exists for, and it is where you start making real tradeoffs between weights and context.

**MiniMax M3** is a ~427B MoE (128 experts, top-4 routing, plus one shared expert, first three layers dense) with a 1M-token context window and native text, image and video input. The 4-bit MLX conversion is **~240GB**. That leaves plenty of room, but the 1M context is theoretical rather than practical - filling it would cost far more KV cache than you have left.

**DeepSeek-V3.1-class 671B models** at 4-bit land around 380GB. This is the configuration that made the M3 Ultra 512GB famous, and the numbers held up: DeepSeek R1 671B needed 404GB of weights and ran at **17 to 18 tok/s**, while DeepSeek V3-0324 cleared **20 tok/s** with `mlx-lm`. On M5 Ultra's 1.2TB/s, scaling by bandwidth alone points to the high 20s.

**GLM-5.2** (743B total / 40B active) is the ceiling. `mlx-community/GLM-5.2-4bit` is **418GB**, and combined with a raised wired limit and a modest context it fits on one machine. Independent measurement from the oMLX benchmark database on an M3 Ultra 512GB puts it at **213.6 tok/s prefill and 17.7 tok/s generation**. A separate published run of GLM-5 at 4-bit reports a resident footprint of **391.8 to 415.4GB** with 10.7 to 16.7 tok/s generation and 77.7 to 187 tok/s prefill depending on context length. Those two datasets agree closely enough to trust.

**GLM-5.3**, whose weights Z.AI published on August 29, 2026, shares GLM-5.2's near-identical ~743B footprint - 78 transformer layers, 256 routed experts with 8 active per token, 1M context. Its native FP8 checkpoint is 756GB and its BF16 release is 1.5TB, so neither fits. A 4-bit MLX conversion should land in the same ~420GB range as GLM-5.2, which would make it the strongest open-weight model that runs on a single Mac. Treat that number as an inference from GLM-5.2's measured size rather than a published one, and check the actual repository size before you plan around it.

## Tier 3: models that need a second Mac

**Kimi K2.7-Code** is a 1T-parameter MoE with 32B active, and `mlx-community/Kimi-K2.7-Code-4bit` is **641GB**. It misses a single 512GB machine by about 130GB. You can either drop to a ~3-bit community quant and accept the quality loss, or add a second Mac Studio - which is what people did on the previous generation, running Kimi K2.5 across two M3 Ultra 512GB machines for a 1TB pool.

**DeepSeek-V4-Pro** (1.6T total / 49B active, MIT) needs roughly **862GB** in its native format, which mixes FP4 expert weights with FP8 attention. Two machines minimum.

**Qwen3.8-Max** (2.4T total / 95B active, August 3, 2026) and **Kimi K3** (2.8T total / 104B active, July 27, 2026) are cluster models on any hardware. Kimi K3's public repository is **1.56TB across 96 safetensor shards** in MXFP4 with MXFP8 activations, and Moonshot recommends 64 or more accelerators for production serving. Four 512GB Mac Studios give you a 2TB pool, which is the first configuration where K3 becomes a home-lab proposition rather than a data-center one.

{{< image "self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_cluster_throughput.webp" "Measured generation tokens per second on Mac Studio clusters over Thunderbolt 5 RDMA, from one node to four" >}}

## The full fit table

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Total / active params</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">4-bit size</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">One 512GB Mac?</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">27B dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16.1GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, trivially</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">gpt-oss-120b</td>
  <td style="border:1px solid #ddd;padding:0.5em;">120B MoE</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~65GB (MXFP4)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3.8-Flash-Next</td>
  <td style="border:1px solid #ddd;padding:0.5em;">125B / 6B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~100GB (estimated)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek-V4-Flash</td>
  <td style="border:1px solid #ddd;padding:0.5em;">284B / 13B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>151GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">GLM-5.3-Flash</td>
  <td style="border:1px solid #ddd;padding:0.5em;">320B / 18B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>177.6GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">MiniMax M3</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~427B / ~23B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>~240GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, with context limits</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek 671B class (V3.1, R1)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">671B / 37B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~380-404GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, raise the wired limit</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">GLM-5.2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">743B / 40B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>418GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, at the edge</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">GLM-5.3</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~743B / ~40B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~420GB (estimated)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Probably, at the edge</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Kimi K2.7-Code</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1T / 32B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>641GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - two machines</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek-V4-Pro</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.6T / 49B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~862GB (native FP8)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - two machines</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3.8-Max</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.4T / 95B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~1.3TB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - three or four machines</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Kimi K3</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.8T / 104B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>1.56TB</strong> (MXFP4)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - four machines</td>
</tr>
</tbody>
</table>

Sizes in bold are measured repository sizes from published MLX conversions. The rest are calculated from parameter counts at roughly 0.5 to 0.6 GB per billion and should be treated as within ±10%.

## What speed actually looks like

The M5 Ultra 512GB configuration does not ship until late October 2026, so there are no published measurements on it yet. What there is, in quantity, is data from the M3 Ultra 512GB at 819GB/s. Since decode is bandwidth-bound, scaling those numbers by **1.46x** gives a defensible estimate, with the caveat that prefill will improve much more than that thanks to the Neural Accelerators.

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model / quant</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Measured on M3 Ultra 512GB</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">M5 Ultra estimate (decode)</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">GLM-5.2, 4-bit</td>
  <td style="border:1px solid #ddd;padding:0.5em;">213.6 prefill / 17.7 generation</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~26 tok/s</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek V3-0324, 4-bit</td>
  <td style="border:1px solid #ddd;padding:0.5em;">just over 20 generation</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~29 tok/s</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek R1 671B, 4-bit</td>
  <td style="border:1px solid #ddd;padding:0.5em;">17-18 generation</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~25 tok/s</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Llama 3.3 70B, 4-bit</td>
  <td style="border:1px solid #ddd;padding:0.5em;">103-150 prefill / 6.5-15.5 generation</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~10-23 tok/s</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Mixtral 8x7B, 4-bit, 1K ctx</td>
  <td style="border:1px solid #ddd;padding:0.5em;">68.4 generation</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~100 tok/s</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Llama 405B dense, 4-bit, 1K ctx</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.9 generation</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~4 tok/s</td>
</tr>
</tbody>
</table>

{{< image "self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_quant_vs_context.webp" "Qwen 32B generation tokens per second on an M3 Ultra 512GB across six quantization levels, at 1K context versus 128K context" >}}

The uncomfortable finding buried in that benchmark set is that **context length hurts more than quantization helps**. On a dense Qwen 32B, going from 1K to 128K context drops generation from 31.2 to 8.5 tok/s at 4-bit. At 1K context, dropping from F16 to 2-bit buys a 4.5x speedup; at 128K it buys 1.7x. If your workload is long-context - and any agent workload is - the honest expectation is that you will spend most of your time somewhere in the lower half of these tables.

## Self-hosting the model behind a Pinggy tunnel

A 512GB inference box is most useful when it is not tied to the desk it sits on, but a local model server binds to loopback and the Mac is almost certainly behind NAT with no port you can forward. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} closes that gap with one SSH command, no daemon and no router configuration.

Serve the model first. `mlx-lm` ships an OpenAI-compatible server:

```bash
pip install mlx-lm

mlx_lm.server \
  --model mlx-community/DeepSeek-V4-Flash-4bit \
  --port 8080 \
  --decode-concurrency 4 \
  --prompt-cache-size 8
```

That listens on `127.0.0.1:8080` with `/v1/models` and `/v1/chat/completions`. The two extra flags matter on a large-memory machine: let several requests decode at once, and keep recent prompt prefixes cached so an agent resending its context does not pay full prefill every turn.

Then expose it, with auth on from the first command. Bearer-key auth is the one that fits an LLM API, because OpenAI-compatible clients already send `Authorization: Bearer <key>`:

```bash
ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key
```

Pinggy prints a public HTTPS URL such as `https://abc123.a.pinggy.link`, certificate included. Point Continue.dev, Aider, OpenCode, the OpenAI SDK or a phone at that URL plus `/v1`, with `your-secret-key` as the API key, and everything else is rejected at the edge. Use `b:username:password` instead if you want a browser password prompt, or `w:203.0.113.0/24` to whitelist a known network rather than issue credentials at all. Do not skip this step: an open inference endpoint will find users you did not invite, and they will spend your GPU time.

For an always-on setup, a Pro token adds a **persistent subdomain**, which matters because agents and teammates hold one base URL and a fresh random hostname on every reconnect breaks all of them. The CLI handles reconnection itself, where a bare SSH tunnel needs `-o ServerAliveInterval=60` and a loop:

```bash
npm install -g pinggy
pinggy http --token <TOKEN> --subdomain my-mac-studio 8080
```

While a tunnel is running, Pinggy serves a web debugger at `http://localhost:4300` showing every request that crossed it - the first place to look when an agent is failing and you cannot tell whether the client, the tunnel or the server is at fault.

We have walked the same pattern through {{< link href="/blog/forward_ollama_port_11434_online_access/" >}}the Ollama API port{{< /link >}}, {{< link href="/blog/how_to_easily_share_ollama_api_and_open_webui_online/" >}}Ollama with Open WebUI{{< /link >}}, and {{< link href="/blog/omlx_local_llm_server_pinggy/" >}}an oMLX server{{< /link >}}, the last of which suits a machine this size since its tiered RAM/SSD KV cache is built for long agent sessions.

## Where the Mac Studio is the wrong answer

**Concurrency.** MLX does not match vLLM's batching efficiency. For one user or a handful of agents a Mac Studio is excellent; for thirty people on one endpoint, a GPU server serving the same model delivers several times the aggregate throughput.

**Prefill.** The Neural Accelerators are a real 3 to 4x gain, but an 8-GPU H200 node still processes prompts faster. If your workload is "read 100K tokens, write 500," you will notice.

**No CUDA.** MLX, llama.cpp's Metal backend and Core AI cover inference and LoRA fine-tuning. They do not cover the long tail of research code and custom kernels that assume an NVIDIA device.

**Dense models above ~120B are a trap.** You can load a 4-bit Llama 405B. At 2.9 tok/s you will not want to.

**Price and timing.** $5,499 with 96GB, $9,499 at 256GB, and the 512GB build is unpriced and not shipping until late October 2026.

What it wins on is capacity, coherence, silence and power draw. An M3 Ultra ran DeepSeek R1 671B under 200W and sits at 160 to 270W under load; an 8x H100 node draws roughly 7kW before cooling and costs $200,000 to $400,000. Against API spend, a $6,800 machine pays back in about 34 months at $200/month, roughly 14 at $500, and under 7 at $1,000.

## Which configuration to buy

**Flash tier** (DeepSeek-V4-Flash 151GB, GLM-5.3-Flash 177.6GB, anything under ~200GB): the **256GB M5 Ultra at $9,499**, and save several thousand dollars.

**743B tier** (GLM-5.2 at 418GB, GLM-5.3 at roughly the same, DeepSeek 671B at ~400GB): **512GB**, with the wired limit raised and one eye on your context budget.

**Kimi K3 or DeepSeek-V4-Pro:** no single machine works. Two 512GB Macs give you 1TB; four give you 2TB and cover every open-weight model published so far.

**Not sure yet:** a 40-core-GPU M5 Max with 128GB handles everything through the ~100GB class at 614GB/s from a $2,499 base, and will tell you whether local inference fits your workflow before you spend $10,000 finding out.

For the wider hardware picture including NVIDIA options, see {{< link href="/blog/best_hardware_for_self_hosting_local_llms/" >}}Picking the Right Hardware to Run LLMs Locally{{< /link >}}, and {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" >}}Best Open Source Self-Hosted LLMs for Coding{{< /link >}} for capability per parameter. {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}How to Self-Host Any LLM{{< /link >}} is the step-by-step setup guide.

## Conclusion

512GB at 1.2TB/s is the first desktop where GLM-5.2 fits at 418GB and generates at a usable rate. Total parameters still decide what loads and active parameters decide how fast, so buy this machine for large sparse MoEs, not big dense ones. And the frontier already outruns one box - Kimi K3 needs 1.56TB - which makes RDMA over Thunderbolt 5, not the 512GB, the real news.
