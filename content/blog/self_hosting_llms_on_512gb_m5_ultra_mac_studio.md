---
title: "Self-Hosting LLMs on the 512GB M5 Ultra Mac Studio: What Actually Fits"
description: "Apple's M5 Ultra Mac Studio tops out at 512GB of unified memory at 1.2TB/s. Here is the memory math, which large open-weight LLMs actually fit, measured tokens per second, and three ways to run a model bigger than 4-bit allows: Unsloth GGUF quants, streaming weights off SSD, or a Thunderbolt 5 cluster."
date: 2026-09-01T11:30:00+05:30
draft: false
tags: ["Apple Silicon", "local LLM", "self-hosted AI", "AI hardware"]
categories: ["Technology", "AI", "Hardware"]
eyebrow: "Apple Silicon"
og_image: "images/self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBhbiBMTE0gb24gYSA1MTJHQiBNNSBVbHRyYSBNYWMgU3R1ZGlvIGFuZCBSZWFjaCBJdCBBbnl3aGVyZSB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBjaG9vc2luZyBhbiBvcGVuLXdlaWdodCBMTE0gdGhhdCBmaXRzIEFwcGxlJ3MgTTUgVWx0cmEgTWFjIFN0dWRpbyB3aXRoIDUxMkdCIG9mIHVuaWZpZWQgbWVtb3J5LCByYWlzaW5nIHRoZSBHUFUgd2lyZWQgbGltaXQsIHNlcnZpbmcgaXQgd2l0aCBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEksIGFuZCBleHBvc2luZyB0aGF0IEFQSSB0byB0aGUgaW50ZXJuZXQgd2l0aCBhbiBhdXRoZW50aWNhdGVkIFBpbmdneSB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNpemUgdGhlIG1vZGVsIGFnYWluc3QgeW91ciB1bmlmaWVkIG1lbW9yeSIsCiAgICAgICJ0ZXh0IjogIkJ1ZGdldCByb3VnaGx5IDAuNSB0byAwLjYgR0Igb2YgdW5pZmllZCBtZW1vcnkgcGVyIGJpbGxpb24gVE9UQUwgcGFyYW1ldGVycyBhdCA0LWJpdCBxdWFudGl6YXRpb24sIHBsdXMgdGhlIEtWIGNhY2hlIGFuZCBmcmFtZXdvcmsgb3ZlcmhlYWQuIFRvdGFsIHBhcmFtZXRlcnMgc2V0IHRoZSBjYXBhY2l0eSByZXF1aXJlbWVudCBldmVuIGZvciBtaXh0dXJlLW9mLWV4cGVydHMgbW9kZWxzLCBiZWNhdXNlIHRoZSByb3V0ZXIgY2FuIHNlbGVjdCBhbnkgZXhwZXJ0IGF0IGFueSBzdGVwLiBWZXJpZmllZCA0LWJpdCBNTFggcmVwb3NpdG9yeSBzaXplczogUXdlbjMuOC0yN0IgaXMgMTYuMUdCLCBEZWVwU2Vlay1WNC1GbGFzaCAoMjg0Qi8xM0IgYWN0aXZlKSBpcyAxNTFHQiwgR0xNLTUuMy1GbGFzaCAoMzIwQi8xOEIgYWN0aXZlKSBpcyAxNzcuNkdCLCBNaW5pTWF4IE0zICh+NDI3QikgaXMgYWJvdXQgMjQwR0IsIGFuZCBHTE0tNS4yICg3NDNCLzQwQiBhY3RpdmUpIGlzIDQxOEdCLiBLaW1pIEsyLjctQ29kZSBpcyA2NDFHQiBhdCA0LWJpdCBhbmQgbmVlZHMgdHdvIG1hY2hpbmVzOyBLaW1pIEszIGlzIDEuNTZUQiBhbmQgbmVlZHMgZm91ci4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXN0aW1hdGUgc3BlZWQgZnJvbSBtZW1vcnkgYmFuZHdpZHRoLCBub3QgY2FwYWNpdHkiLAogICAgICAidGV4dCI6ICJUb2tlbiBnZW5lcmF0aW9uIGlzIG1lbW9yeS1iYW5kd2lkdGgtYm91bmQ6IHRva2VucyBwZXIgc2Vjb25kIGlzIHJvdWdobHkgbWVtb3J5IGJhbmR3aWR0aCB0aW1lcyBhbiBlZmZpY2llbmN5IGZhY3RvciBvZiAwLjYgdG8gMC44LCBkaXZpZGVkIGJ5IHRoZSBieXRlcyByZWFkIHBlciB0b2tlbi4gVGhlIE01IFVsdHJhIHJ1bnMgYXQgMS4yVEIvcyBvbiBib3RoIGl0cyA2NC1jb3JlIGFuZCA4MC1jb3JlIEdQVSBjb25maWd1cmF0aW9ucywgYSA1MCBwZXJjZW50IGluY3JlYXNlIG92ZXIgdGhlIE0zIFVsdHJhJ3MgODE5R0Ivcy4gUHJvbXB0IHByb2Nlc3NpbmcgaXMgY29tcHV0ZS1ib3VuZCBpbnN0ZWFkIGFuZCBiZW5lZml0cyBmcm9tIHRoZSBOZXVyYWwgQWNjZWxlcmF0b3JzIGluIGV2ZXJ5IE01IEdQVSBjb3JlLCB3aGljaCBBcHBsZSBtZWFzdXJlZCBhdCAzLjN4IHRvIDQuMDZ4IGZhc3RlciB0aW1lLXRvLWZpcnN0LXRva2VuIHRoYW4gTTQgYWdhaW5zdCBvbmx5IDEuMTl4IHRvIDEuMjd4IG9uIGRlY29kZS4gUHJlZmVyIGxhcmdlIHNwYXJzZSBtaXh0dXJlLW9mLWV4cGVydHMgbW9kZWxzIG92ZXIgbGFyZ2UgZGVuc2Ugb25lczogYSA0LWJpdCBMbGFtYSA0MDVCIGRlbnNlIG1vZGVsIGdlbmVyYXRlcyBvbmx5IDIuOSB0b2tlbnMgcGVyIHNlY29uZCBvbiBhbiBNMyBVbHRyYS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUmFpc2UgdGhlIEdQVSB3aXJlZCBtZW1vcnkgbGltaXQiLAogICAgICAidGV4dCI6ICJDaGVjayB0aGUgY3VycmVudCBjZWlsaW5nIHdpdGggc3lzY3RsIGlvZ3B1LndpcmVkX2xpbWl0X21iLiBBIHZhbHVlIG9mIDAgbWVhbnMgdGhlIHN5c3RlbSBkZWZhdWx0IG9mIHJvdWdobHkgNzUgcGVyY2VudCBvZiBpbnN0YWxsZWQgUkFNIGlzIGluIGZvcmNlLCB3aGljaCBvbiBhIDUxMkdCIG1hY2hpbmUgaXMgYWJvdXQgMzg0R0IuIFJhaXNlIGl0IHdpdGggc3VkbyBzeXNjdGwgaW9ncHUud2lyZWRfbGltaXRfbWI9NDgzMzI4IHRvIGdpdmUgdGhlIEdQVSBhYm91dCA0NzJHQiBhbmQgbGVhdmUgcm91Z2hseSA0MEdCIGZvciBtYWNPUy4gVGhlIHNldHRpbmcgZG9lcyBub3Qgc3Vydml2ZSBhIHJlYm9vdCwgc28gcnVuIGl0IGF0IGxvZ2luIGlmIHlvdSBkZXBlbmQgb24gaXQsIGFuZCBuZXZlciBhbGxvY2F0ZSBhbGwgb2YgaW5zdGFsbGVkIG1lbW9yeS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3F1ZWV6ZSBiaWdnZXIgbW9kZWxzIGluIHdpdGggVW5zbG90aCBHR1VGIHF1YW50cyBhbmQgZGlzayBvZmZsb2FkIiwKICAgICAgInRleHQiOiAiRm9yIGEgbW9kZWwgdGhhdCBkb2VzIG5vdCBmaXQgYXQgTUxYIDQtYml0LCB0aGVyZSBhcmUgdGhyZWUgcm91dGVzLiBGaXJzdCwgY2hlY2sgZm9yIGFuIFVuc2xvdGggRHluYW1pYyBHR1VGIGNvbnZlcnNpb24sIHdoaWNoIHNlbGVjdGl2ZWx5IHF1YW50aXplcyBzZW5zaXRpdmUgbGF5ZXJzIGhpZ2hlciBhbmQgZXZlcnl0aGluZyBlbHNlIGxvd2VyIHJhdGhlciB0aGFuIHVuaWZvcm1seTogS2ltaSBLMi43LUNvZGUgbmVlZHMgdHdvIE1hY3MgYXQgTUxYIDQtYml0ICg2NDFHQikgYnV0IGZpdHMgb25lIE1hYyBhdCBVRC1RMl9LX1hMICgzMzlHQiksIGFuZCBHTE0tNS4zLCBub3QgeWV0IGNvbnZlcnRlZCBmb3IgTUxYLCBpcyBtZWFzdXJlZCBhdCA0NjdHQiB2aWEgVUQtUTRfS19YTC4gU2Vjb25kLCBydW4gYSBxdWFudCBsYXJnZXIgdGhhbiB5b3VyIG1lbW9yeSBieSBsZXR0aW5nIGxsYW1hLmNwcCBtbWFwIHRoZSBHR1VGIGZpbGUsIHdoaWNoIHBhZ2VzIHdlaWdodHMgaW4gZnJvbSBTU0Qgb24gZGVtYW5kIGFuZCBuZXZlciBuZWVkcyB0aGUgd2hvbGUgbW9kZWwgcmVzaWRlbnQ7IGV4cGVjdCByb3VnaGx5IDEgdG8gMiB0b2tlbnMgcGVyIHNlY29uZCwgc2luY2Ugc3RvcmFnZSBiYW5kd2lkdGggcmF0aGVyIHRoYW4gY29tcHV0ZSBiZWNvbWVzIHRoZSBjb25zdHJhaW50LCBzbyB0cmVhdCB0aGlzIGFzIGEgYmF0Y2gtam9iIG9wdGlvbiBhbmQgbm90IGFuIGludGVyYWN0aXZlIG9uZS4gVGhpcmQsIGNsdXN0ZXIgbXVsdGlwbGUgTWFjcyBvdmVyIFRodW5kZXJib2x0IDUgUkRNQS4gTm90ZSB0aGF0IG9uIEFwcGxlIFNpbGljb24gdGhlIC0tbi1jcHUtbW9lIGFuZCAtLW92ZXJyaWRlLXRlbnNvciBmbGFncyB1c2VkIG9uIGRpc2NyZXRlLUdQVSBtYWNoaW5lcyBkbyBub3RoaW5nIHVzZWZ1bCwgYmVjYXVzZSBDUFUgYW5kIEdQVSBzaGFyZSBvbmUgdW5pZmllZCBtZW1vcnkgcG9vbC4gQnVpbGQgbGxhbWEuY3BwIHdpdGggY21ha2UgLURHR01MX01FVEFMPU9OIGFuZCBzZXJ2ZSB3aXRoIGxsYW1hLXNlcnZlci4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2VydmUgdGhlIG1vZGVsIGxvY2FsbHkgd2l0aCBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEkiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSB2aXJ0dWFsIGVudmlyb25tZW50LCBydW4gcGlwIGluc3RhbGwgbWx4LWxtLCB0aGVuIHN0YXJ0IHRoZSBzZXJ2ZXI6IG1seF9sbS5zZXJ2ZXIgLS1tb2RlbCBtbHgtY29tbXVuaXR5L0RlZXBTZWVrLVY0LUZsYXNoLTRiaXQgLS1ob3N0IDEyNy4wLjAuMSAtLXBvcnQgODA4MCAtLWRlY29kZS1jb25jdXJyZW5jeSA0IC0tcHJvbXB0LWNhY2hlLXNpemUgOC4gSXQgZXhwb3NlcyAvdjEvbW9kZWxzIGFuZCAvdjEvY2hhdC9jb21wbGV0aW9ucyBpbiB0aGUgT3BlbkFJIHNoYXBlLiBSYWlzZSAtLWRlY29kZS1jb25jdXJyZW5jeSBvbiBhIGxhcmdlLW1lbW9yeSBtYWNoaW5lLCBzaW5jZSBlYWNoIGNvbmN1cnJlbnQgc2xvdCBjb3N0cyBhbm90aGVyIEtWIGNhY2hlIGJ1dCBsZXRzIGEgc2Vjb25kIHJlcXVlc3QgbWFrZSBwcm9ncmVzcywgYW5kIHVzZSAtLXByb21wdC1jYWNoZS1zaXplIHNvIGFuIGFnZW50IHJlc2VuZGluZyBpdHMgY29udGV4dCBkb2VzIG5vdCBwYXkgZnVsbCBwcmVmaWxsIGV2ZXJ5IHR1cm4uIENvbmZpcm0gaXQgaXMgYWxpdmUgd2l0aCBjdXJsIC1zIGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC92MS9tb2RlbHMgYmVmb3JlIGV4cG9zaW5nIGl0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgdGhlIEFQSSB3aXRoIGEgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIlRoZSBzZXJ2ZXIgYmluZHMgdG8gbG9vcGJhY2sgYW5kIHRoZSBNYWMgaXMgdXN1YWxseSBiZWhpbmQgTkFUIHdpdGggbm8gZm9yd2FyZGFibGUgcG9ydC4gSW4gYSBuZXcgdGVybWluYWwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgwIGZyZWUucGluZ2d5LmlvLiBQaW5nZ3kgcHJpbnRzIGEgcHVibGljIEhUVFBTIFVSTCBzdWNoIGFzIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5Lmxpbmsgd2l0aCB0aGUgY2VydGlmaWNhdGUgYWxyZWFkeSBoYW5kbGVkLiBQb2ludCBhbnkgT3BlbkFJLWNvbXBhdGlibGUgY2xpZW50IC0gQ29udGludWUuZGV2LCBBaWRlciwgT3BlbkNvZGUsIHRoZSBPcGVuQUkgU0RLLCBhIHBob25lIGJyb3dzZXIgLSBhdCB0aGF0IFVSTCBwbHVzIC92MSBhbmQgcmVxdWVzdHMgYXJlIHNlcnZlZCBieSB0aGUgbW9kZWwgb24geW91ciBNYWMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkF1dGhlbnRpY2F0ZSB0aGUgdHVubmVsIGJlZm9yZSBsZWF2aW5nIGl0IHJ1bm5pbmciLAogICAgICAidGV4dCI6ICJOZXZlciBsZWF2ZSBhbiBpbmZlcmVuY2UgZW5kcG9pbnQgb3BlbiBvbiB0aGUgcHVibGljIGludGVybmV0LiBCZWFyZXIta2V5IGF1dGggZml0cyBhbiBMTE0gQVBJIGJlc3QgYmVjYXVzZSBPcGVuQUktY29tcGF0aWJsZSBjbGllbnRzIGFscmVhZHkgc2VuZCBhbiBBdXRob3JpemF0aW9uOiBCZWFyZXIgaGVhZGVyOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCAtdCBmcmVlLnBpbmdneS5pbyBrOnlvdXItc2VjcmV0LWtleS4gRm9yIGEgYnJvd3NlciBwYXNzd29yZCBwcm9tcHQgdXNlIGJhc2ljIGF1dGggaW5zdGVhZCB3aXRoIGI6dXNlcm5hbWU6cGFzc3dvcmQsIG9yIGlmIHRoZSBjYWxsZXJzIGFyZSBhIGtub3duIG5ldHdvcmssIHdoaXRlbGlzdCB0aGUgcmFuZ2Ugd2l0aCB3OjIwMy4wLjExMy4wLzI0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJLZWVwIHRoZSB0dW5uZWwgdXAgYXJvdW5kIHRoZSBjbG9jayB3aXRoIHRoZSBQaW5nZ3kgQ0xJIiwKICAgICAgInRleHQiOiAiVGhlIFBpbmdneSBDTEkgYmluYXJ5IGF1dG8tcmVjb25uZWN0cyBvbiBmYWlsdXJlIGJ5IGRlZmF1bHQsIHdoaWNoIGEgcmF3IFNTSCBzZXNzaW9uIGRvZXMgbm90LiBSdW4gLi9waW5nZ3kgLS10b2tlbiA8VE9LRU4+IC1sIGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCBmb3IgYW4gYWQtaG9jIHR1bm5lbCB3aXRoIGEgcGVyc2lzdGVudCBzdWJkb21haW4sIG9yIHNhdmUgaXQgYXMgYSBuYW1lZCBjb25maWcgd2l0aCBwaW5nZ3kgY29uZmlnIHNhdmUgbWFjLXN0dWRpbyAtbCA4MDgwIDxUT0tFTj5AcHJvLnBpbmdneS5pbyBhbmQgc3RhcnQgaXQgZGV0YWNoZWQgd2l0aCBwaW5nZ3kgc3RhcnQgbWFjLXN0dWRpbyAtLWIgc28gdGhlIGRhZW1vbiBrZWVwcyBpdCBhbGl2ZSBpbiB0aGUgYmFja2dyb3VuZC4gV2hpbGUgYSB0dW5uZWwgaXMgcnVubmluZywgYSB3ZWIgZGVidWdnZXIgYXQgaHR0cDovL2xvY2FsaG9zdDo0MzAwIHNob3dzIGV2ZXJ5IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHRoYXQgY3Jvc3NlZCBpdC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_banner.webp" "Self-Hosting LLMs on the 512GB M5 Ultra Mac Studio" >}}

Self-hosting a large language model is rarely a compute problem first. It is a capacity problem: the weights either fit in fast memory or they do not, and almost everything about the experience - which models you can even load, how long a prompt you can hold, how many tokens per second you see - follows from that single fact.

Apple moved that ceiling on **August 25, 2026**. The new Mac Studio with M5 Ultra scales to **512GB of unified memory at 1.2TB/s**, a 50% bandwidth jump over the M3 Ultra's 819GB/s, in a box that draws a couple of hundred watts from a wall socket. That is enough to hold `mlx-community/GLM-5.2-4bit` - a 743B-parameter mixture-of-experts model, 418GB on disk - entirely in memory, with room left for a working context. It is also *not* enough to hold Kimi K3, whose official MXFP4 checkpoint is 1.56TB.

This post is the concrete version of that tradeoff, and it concentrates on the models where the answer is actually in doubt: the arithmetic that decides what fits, real measured repository sizes for the large open-weight models, the tokens-per-second you should expect, the three ways to run something bigger than 4-bit allows on one machine (lower-bit GGUF quants, streaming weights off SSD, or a second Mac), and how to serve the result to anywhere in the world from behind your own NAT.

{{% tldr %}}

**The machine:** M5 Ultra Mac Studio, announced August 25, 2026. Up to 80-core GPU and **512GB of unified memory at 1.2TB/s**. Starts at **$5,499**; the 512GB build is still unpriced and ships **late October 2026**. <a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/" target="_blank">Apple Newsroom</a>

**What fits at MLX 4-bit.** Anything under ~200GB is a non-question, so the interesting ones are:

- <a href="https://huggingface.co/pipenetwork/MiniMax-M3-MLX-4bit" target="_blank">MiniMax M3</a> (427B) - ~240GB
- DeepSeek 671B - ~404GB
- <a href="https://huggingface.co/mlx-community/GLM-5.2-4bit" target="_blank">GLM-5.2</a> (743B) - **418GB**, the edge of the box

**Too big for 4-bit? Three options:**

- **Drop to a lower-bit GGUF.** <a href="https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF" target="_blank">Kimi K2.7-Code</a> needs two Macs at 4-bit (641GB) but fits one at Unsloth's 2-bit, **339GB**.
- **Stream from SSD.** `llama.cpp` mmaps GGUF files, so a model bigger than your memory still runs. Measured speed: **1 to 2 tok/s**. Fine for a batch job, useless for chat.
- **Add Macs.** Thunderbolt 5 RDMA turns four into a 2TB pool. <a href="https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei" target="_blank">Kimi K3</a> needs this: even Unsloth's 1-bit quant wants **610GB**, so no single Mac runs it.

**Speed:** GLM-5.2 runs at **17.7 tok/s** and DeepSeek V3 at just over **20**, both measured on the older M3 Ultra. A dense Llama 405B manages **2.9**. Total parameters decide what fits; active parameters decide how fast. Buy this for sparse MoEs, not dense models.

**Serving it:** `mlx_lm.server` binds to `127.0.0.1:8080`. One <a href="https://pinggy.io" target="_blank">Pinggy</a> command gives it a public HTTPS URL behind auth that OpenAI clients already speak: `ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key`

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

## The models that just fit, briefly

Anything under about 200GB at 4-bit is a non-question on this machine and not worth dwelling on: <a href="https://huggingface.co/mlx-community/Qwen3.8-27B-4bit" target="_blank">Qwen3.8-27B</a> at 16.1GB, gpt-oss-120b at ~65GB in native MXFP4, Qwen3.8-Flash-Next (a 125B MoE with only 6B active) at roughly 100GB, <a href="https://huggingface.co/mlx-community/DeepSeek-V4-Flash-4bit" target="_blank">DeepSeek-V4-Flash</a> (284B/13B active) at **151GB**, and <a href="https://huggingface.co/pipenetwork/GLM-5.3-Flash-MLX-4bit" target="_blank">GLM-5.3-Flash</a> (320B/18B active) at **177.6GB**. All of them load with hundreds of gigabytes left for context, and all of them run on a 256GB machine costing $4,000 less.

Two practical notes before moving on to the models that actually justify 512GB. GLM-5.3-Flash is a good illustration that quantization is not an optimization but the whole reason these models run at all: its original BF16 checkpoint is **643GB** and does not fit this machine in any configuration. And its MLX conversion ships with its own loader rather than running under stock `mlx_lm`, because the hybrid Kimi-Delta-linear plus DeepSeek-sparse attention stack is too new. `mlx-community/DeepSeek-V4-Flash-4bit` is the one in this group that works with plain `mlx_lm.chat` and `mlx_lm.server` today, which is why it is used in the commands throughout this post.

## The models that actually fill 512GB

This is the tier the configuration exists for, and where you start trading weights against context.

**MiniMax M3** is a ~427B MoE (128 experts, top-4 routing, plus one shared expert, first three layers dense) with a 1M-token context window and native text, image and video input. The 4-bit MLX conversion is **~240GB**. That leaves plenty of room, but the 1M context is theoretical rather than practical - filling it would cost far more KV cache than you have left.

**DeepSeek-V3.1-class 671B models** at 4-bit land around 380GB. This is the configuration that made the M3 Ultra 512GB famous, and the numbers held up: DeepSeek R1 671B needed 404GB of weights and ran at **17 to 18 tok/s**, while DeepSeek V3-0324 cleared **20 tok/s** with `mlx-lm`. On M5 Ultra's 1.2TB/s, scaling by bandwidth alone points to the high 20s.

**GLM-5.2** (743B total / 40B active) is the ceiling. `mlx-community/GLM-5.2-4bit` is **418GB**, and combined with a raised wired limit and a modest context it fits on one machine. Independent measurement from the oMLX benchmark database on an M3 Ultra 512GB puts it at **213.6 tok/s prefill and 17.7 tok/s generation**. A separate published run of GLM-5 at 4-bit reports a resident footprint of **391.8 to 415.4GB** with 10.7 to 16.7 tok/s generation and 77.7 to 187 tok/s prefill depending on context length. Those two datasets agree closely enough to trust.

**GLM-5.3**, whose weights Z.AI published on August 29, 2026, shares GLM-5.2's near-identical ~743B footprint - 78 transformer layers, 256 routed experts with 8 active per token, 1M context. Its native FP8 checkpoint is 756GB and its BF16 release is 1.5TB, so neither fits, and no MLX conversion has landed yet. But <a href="https://huggingface.co/unsloth/GLM-5.3-GGUF" target="_blank">Unsloth's GGUF conversion</a> is real and measured today: their **UD-Q4_K_XL** build is **467GB**, which clears the raised wired limit with almost nothing left over, and **UD-Q3_K_XL** at **343GB** is the safer choice if you want actual headroom for context. That is a different toolchain (`llama.cpp`, not `mlx_lm`) and a real quality tradeoff at the lower end, which the next section covers in detail.

## The models that overflow one machine at 4-bit

**Kimi K2.7-Code** is a 1T-parameter MoE with 32B active, and `mlx-community/Kimi-K2.7-Code-4bit` is **641GB**. It misses a single 512GB machine by about 130GB at MLX 4-bit. Two real options: add a second Mac Studio, which is what people did on the previous generation running Kimi K2.5 across two M3 Ultra 512GB machines for a 1TB pool, or switch toolchains entirely - the next section covers a verified GGUF quant that fits this exact model on one Mac.

**DeepSeek-V4-Pro** (1.6T total / 49B active, MIT) needs roughly **862GB** in its native format, which mixes FP4 expert weights with FP8 attention. Two machines minimum.

**Qwen3.8-Max** (2.4T total / 95B active, August 3, 2026) and **Kimi K3** (2.8T total / 104B active, July 27, 2026) are cluster models on any hardware. Kimi K3's public repository is **1.56TB across 96 safetensor shards** in MXFP4 with MXFP8 activations, and Moonshot recommends 64 or more accelerators for production serving. Four 512GB Mac Studios give you a 2TB pool, which is the first configuration where K3 becomes a home-lab proposition rather than a data-center one.

{{< image "self_hosting_llms_on_512gb_m5_ultra_mac_studio/self_hosting_llms_on_512gb_m5_ultra_mac_studio_cluster_throughput.webp" "Measured generation tokens per second on Mac Studio clusters over Thunderbolt 5 RDMA, from one node to four" >}}

## Squeezing bigger models in with GGUF and disk offload

A second Mac is not the only way past the 472GB ceiling. Everything above assumes `mlx_lm` and Apple's own 4-bit conversions, but `llama.cpp` and the GGUF format are a separate toolchain with their own quantizations, and <a href="https://huggingface.co/unsloth" target="_blank">Unsloth</a> publishes "Dynamic" GGUF quants that push well past 4-bit without the naive quality loss that used to come with it. Their method upcasts the layers that are sensitive to precision (attention, the router, certain normalization layers) and pushes everything else down to 1- or 2-bit, rather than quantizing every layer uniformly. That is why a 1-bit Unsloth quant behaves nothing like a naive 1-bit quant.

Usefully, Unsloth publishes a memory-requirement table for each model rather than just file sizes, and those two numbers are not the same thing. Here is what their own docs say each model needs in **combined RAM plus VRAM**, which on a Mac is just unified memory, against the 472GB you get after raising the wired limit. Figures are from Unsloth's per-model pages for <a href="https://unsloth.ai/docs/models/deepseek-v4" target="_blank">DeepSeek-V4</a>, <a href="https://unsloth.ai/docs/models/minimax-m3" target="_blank">MiniMax M3</a>, <a href="https://unsloth.ai/docs/models/glm-5.3" target="_blank">GLM-5.3</a>, <a href="https://unsloth.ai/docs/models/kimi-k2.7-code" target="_blank">Kimi K2.7-Code</a> and <a href="https://unsloth.ai/docs/models/kimi-k3" target="_blank">Kimi K3</a>:

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">2-bit</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">3-bit</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">4-bit</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Best tier that fits 472GB</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek-V4-Flash (284B)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">102GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">110-135GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">162GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Lossless Q8</strong> (169GB) with room to spare</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">MiniMax M3 (427B)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">148GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">164-200GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">213-270GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>8-bit</strong> (460-470GB), or 4-bit with a huge context</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">GLM-5.3 (754B)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">245GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">290-360GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">372-475GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>4-bit</strong> at the low end of that range, <strong>3-bit</strong> if you want context headroom</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">Kimi K2.7-Code (1T)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">325-350GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">385-470GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~584GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>3-bit</strong>, right at the ceiling; 2-bit for comfort</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Kimi K3 (2.8T)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">726-880GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">-</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.5TB+</td>
  <td style="border:1px solid #ddd;padding:0.5em;">None. Even <strong>1-bit needs 610GB</strong> - this model wants two Macs minimum</td>
</tr>
</tbody>
</table>

That table reframes the whole question. Two of these models are not remotely hard: DeepSeek-V4-Flash fits at Unsloth's **lossless** Q8 in 169GB, and MiniMax M3 fits at 8-bit. Neither needs a 512GB machine at all. GLM-5.3 and Kimi K2.7-Code are the two that genuinely use the memory, and both land in the 3-to-4-bit band where a 512GB Mac is exactly the right size.

And Kimi K3 is off the table entirely, which corrects the tempting reading of its file listing. The HF repo lists a 466GB 1-bit file that looks like it would squeeze in, but Unsloth's own hardware table says the smallest 1-bit tier wants **610GB** of RAM plus VRAM, and their recommended quant is the 594GB `UD-IQ1_S`. A 2.8T model does not fit one Mac at any bit depth worth using.

### What the lower bit depths actually cost you

The other thing Unsloth publishes, and the reason you should not just grab the smallest file that fits, is per-quant accuracy. Their GLM-5.3 numbers are the clearest illustration:

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">GLM-5.3 quant</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Size</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Top-1 accuracy</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Perplexity</th>
</tr>
</thead>
<tbody>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">UD-IQ1_S (1-bit)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">216.7GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">72.56%</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4.6130</td>
</tr>
<tr style="background:#fffde7;">
  <td style="border:1px solid #ddd;padding:0.5em;">UD-IQ2_M (2-bit)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">238.6GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">78.53%</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3.7433</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">UD-Q4_K_XL (4-bit)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">467.3GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>94.29%</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.7006</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">UD-Q5_K_XL (5-bit)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">562.5GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">95.82%</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.6842</td>
</tr>
</tbody>
</table>

**"Just use a smaller quant" is not a smooth dial.** Going from 4-bit to 5-bit buys 1.5 points of accuracy for 95GB, which is a bad trade on a machine this size. Going the other way is much worse: 4-bit to 2-bit saves 229GB and costs **16 points of top-1 accuracy**, and 1-bit gives up 22 points. The same pattern shows up in Kimi K2.7-Code's numbers, where 4-bit measures ~1.8420 perplexity against the lossless Q8's ~1.8419 - a difference of one ten-thousandth - and 2-bit jumps to ~2.4131.

The practical rule that falls out: **4-bit is close to free, and everything below it is expensive.** Pick the largest model whose 4-bit tier fits your memory, rather than the largest model you can cram in at 2-bit. On 512GB that means GLM-5.3 at 4-bit, not Kimi K3 at 1-bit.

### Actually running one

Unsloth documents per-model inference settings, and they are worth copying rather than guessing. For Kimi K2.7-Code: temperature **1.0**, top-p **0.95**, suggested context **98,304 tokens** (the model goes to 262,144, but context is paid for out of the same memory budget as the weights). GLM-5.3 and Kimi K3 both want temperature 1.0 with top-p 0.95, moving to top-p 1.0 for long agentic runs, and both expose a reasoning-effort setting with `max` as the default.

```bash
git clone https://github.com/ggml-org/llama.cpp
# Unsloth's Mac guidance: Metal is on by default, so just turn CUDA off
cmake llama.cpp -B llama.cpp/build -DGGML_CUDA=OFF
cmake --build llama.cpp/build --config Release -j --clean-first \
  --target llama-cli llama-server

./llama.cpp/build/bin/llama-server \
  --model unsloth/Kimi-K2.7-Code-GGUF/UD-Q2_K_XL/Kimi-K2.7-Code-UD-Q2_K_XL-00001-of-00008.gguf \
  --port 8080 \
  --ctx-size 98304 \
  --temp 1.0 \
  --top-p 0.95
```

This path is genuinely slower per token than MLX at the same bit depth, since MLX is built for Apple Silicon specifically and `llama.cpp`'s Metal backend is not. What you get in exchange is the bit depths MLX has no conversions for, and the mmap behaviour in the next section.

### Running a model bigger than your memory: RAM plus SSD

If you want `UD-Q4_K_XL` (584GB) or `UD-Q8_K_XL` (595GB, Unsloth's stated lossless tier) for Kimi K2.7-Code, no amount of wired-limit tuning gets you there on 512GB. This is where the third escape route comes in, and it is the least understood of the three.

`llama.cpp` memory-maps GGUF files by default, which means **it never required the whole model to be resident in the first place**. The weights live in a file; the OS pages them in on demand and evicts idle pages without writing anything back, because the file on disk already is the authoritative copy. Turn mmap off and a model larger than RAM is an out-of-memory crash. Leave it on, which is the default, and the same model runs by streaming the parts it needs from SSD. Unsloth's own guidance for Kimi K2.7-Code puts the rule plainly: "RAM+VRAM ≈ the quant size" is the fast path, but with less than that, "it'll still work, just slower due to offloading."

**"Slower" is doing a lot of work in that sentence, and this is the number people skip.** Apply the same bandwidth arithmetic the rest of this post uses. Unified memory on the M5 Ultra moves 1.2TB/s. Apple says the new Mac Studio's storage is up to twice as fast as the previous generation on a PCIe Gen 6 architecture, and specifically cites "loading huge LLMs" as the use case, but even the fastest SSDs on the market top out around 28GB/s. So the moment a meaningful fraction of your weights has to come off disk each token, your effective read bandwidth drops by roughly two orders of magnitude, and decode speed follows it down.

The published measurements bear that out. On a 96GB RAM plus 24GB VRAM machine running DeepSeek-R1's 212GB `UD-Q2_K_XL` from a Gen 5 NVMe - so a little over half the model resident - <a href="https://huggingface.co/unsloth/DeepSeek-R1-GGUF/discussions/13" target="_blank">the reported throughput</a> was **~1.3 tok/s at 8K context and ~1.0 tok/s at 16K**, with the SSD reading at 2 to 5GB/s throughout and storage bandwidth, not compute, as the binding constraint. Enabling GPU offload barely moved it. A separate <a href="https://github.com/ggml-org/llama.cpp/discussions/19163" target="_blank">llama.cpp discussion</a> reports a 93GB model on 42GB of combined memory at **1.18 tok/s** generation.

So the honest framing is this: disk offload converts "will not run" into "runs at one to two tokens per second." That is genuinely useful for a batch job you can leave overnight, for evaluating whether a model is worth buying more hardware for, or for a single hard question where you care about the answer and not the latency. It is not usable for interactive chat, and it is nowhere near usable for a coding agent that resends 60,000 tokens of context per turn.

One Apple-Silicon-specific correction, because guides written for PC hardware will send you the wrong way. On a discrete-GPU machine the standard move for a big MoE is `--n-cpu-moe N` or `--override-tensor "\.ffn_.*_exps\.weight=CPU"`, which pushes the rarely-touched expert weights out of scarce VRAM into plentiful system RAM while attention stays on the GPU. On a Mac there is no such split to exploit: CPU and GPU address the same unified memory, so moving a tensor from "VRAM" to "system RAM" moves it nowhere. The only levers that matter here are how much of the model fits under the wired limit, and mmap streaming the remainder from SSD.

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
  <td style="border:1px solid #ddd;padding:0.5em;">Everything under ~200GB<br><span style="font-size:0.9em;color:#666;">(Qwen3.8-27B, gpt-oss-120b, Qwen3.8-Flash-Next, DeepSeek-V4-Flash, GLM-5.3-Flash)</span></td>
  <td style="border:1px solid #ddd;padding:0.5em;">27B dense up to 320B MoE</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16.1GB to <strong>177.6GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, and a 256GB machine does it too</td>
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
  <td style="border:1px solid #ddd;padding:0.5em;">Not converted (see GGUF above)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes via Unsloth GGUF, not yet via MLX</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Kimi K2.7-Code</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1T / 32B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>641GB</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">No at MLX 4-bit; yes via Unsloth GGUF (see above)</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek-V4-Pro</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1.6T / 49B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~862GB (native FP8)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - two machines, or SSD-streamed at ~1-2 tok/s</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3.8-Max</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.4T / 95B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~1.3TB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - three or four machines; no Unsloth GGUF yet</td>
</tr>
<tr style="background:#ffebee;">
  <td style="border:1px solid #ddd;padding:0.5em;">Kimi K3</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2.8T / 104B</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>1.56TB</strong> (MXFP4)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No - two Macs minimum, four to run it well; even 1-bit needs 610GB</td>
</tr>
</tbody>
</table>

Sizes in bold are measured repository sizes from published MLX conversions. The rest are calculated from parameter counts at roughly 0.5 to 0.6 GB per billion and should be treated as within ±10%. Every "no" in the last column has three possible answers, in descending order of how much you will enjoy them: a lower-bit Unsloth GGUF that fits in memory, a second Mac over Thunderbolt 5, or mmap streaming the overflow from SSD at roughly one to two tokens per second.

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

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:your-secret-key\"}}}"
{{</ ssh_command >}}

Pinggy prints a public HTTPS URL such as `https://abc123.a.free.pinggy.link`, certificate included. Point Continue.dev, Aider, OpenCode, the OpenAI SDK or a phone at that URL plus `/v1`, with `your-secret-key` as the API key, and everything else is rejected at the edge. Use `b:username:password` instead if you want a browser password prompt, or `w:203.0.113.0/24` to whitelist a known network rather than issue credentials at all. Do not skip this step: an open inference endpoint will find users you did not invite, and they will spend your GPU time.

For an always-on setup, the Pinggy CLI binary is the better tool than a raw SSH command: it auto-reconnects on failure by default, and a Pro token gets you a **persistent subdomain** so agents and teammates can hold one base URL instead of a fresh random hostname on every reconnect.

```bash
./pinggy --token <TOKEN> -l http://localhost:8080
```

Save it as a named config to start it detached and let the daemon keep it alive in the background:

```bash
pinggy config save mac-studio -l 8080 <TOKEN>@pro.pinggy.io
pinggy start mac-studio --b
```

Pinggy also has a web debugger that logs every request crossing the tunnel, which is the first place to look when an agent is failing and you cannot tell whether the client, the tunnel or the server is at fault. It is opt-in, so ask for it with `-d`:

```bash
./pinggy --token <TOKEN> -l http://localhost:8080 -d 4300
```

Then open `http://localhost:4300`. One gotcha worth knowing: the debugger binds to the IPv6 loopback, so `localhost:4300` works but `127.0.0.1:4300` will refuse the connection.

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
