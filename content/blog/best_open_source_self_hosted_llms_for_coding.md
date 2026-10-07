---
title: "Best Open Source LLMs for Coding to Self-Host in 2026"
description: "The best open-weight coding LLMs you can self-host as of October 2026, from MiMo-V2.6-Pro and GLM-5.3 down to Qwen3.8-27B on one GPU, with current benchmark scores, licenses and the hardware each one needs."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-10-05T09:00:00+05:30
draft: false
tags: ["open source LLM", "self-hosted AI", "local LLM", "AI coding agents", "open source"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/best_open_source_self_hosted_llms_for_coding_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIGNob29zZSBhbmQgc2VsZi1ob3N0IGFuIG9wZW4gc291cmNlIExMTSBmb3IgY29kaW5nIGluIDIwMjYiLAogICJkZXNjcmlwdGlvbiI6ICJUaGUgYmVzdCBvcGVuLXdlaWdodCBjb2RpbmcgTExNcyB5b3UgY2FuIHNlbGYtaG9zdCBhcyBvZiBPY3RvYmVyIDIwMjYsIGZyb20gTWlNby1WMi42LVBybyBhbmQgR0xNLTUuMyBkb3duIHRvIFF3ZW4zLjgtMjdCIG9uIG9uZSBHUFUsIHdpdGggY3VycmVudCBiZW5jaG1hcmsgc2NvcmVzLCBsaWNlbnNlcyBhbmQgdGhlIGhhcmR3YXJlIGVhY2ggb25lIG5lZWRzLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9iZXN0X29wZW5fc291cmNlX3NlbGZfaG9zdGVkX2xsbXNfZm9yX2NvZGluZy9iZXN0X29wZW5fc291cmNlX3NlbGZfaG9zdGVkX2xsbXNfZm9yX2NvZGluZ19iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTA1VDA5OjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk1hdGNoIHRoZSBtb2RlbCB0byB5b3VyIGhhcmR3YXJlIiwKICAgICAgInRleHQiOiAiT25lIDI0R0IgR1BVIG9yIGEgMzJHQiBNYWMgcnVucyBRd2VuMy44LTI3QiBhdCA0LWJpdCAoMTYtMTlHQikuIEEgMTI4R0IgbWFjaGluZSBydW5zIFF3ZW4zLjgtRmxhc2gtTmV4dCBhdCA0LWJpdCAoOTYtMTE0R0IpLiBUaHJlZSBvciBmb3VyIDgwR0IgR1BVcyBydW4gR0xNLTUuMy1GbGFzaCBhdCA0LWJpdCAoMTYyLTIxMEdCKS4gRWlnaHQgSDIwMHMgcnVuIE1pTW8tVjIuNi1Qcm8gKGFib3V0IDU3NEdCKSBvciBHTE0tNS4zICg3NTZHQikuIEtpbWkgSzMgbmVlZHMgYXQgbGVhc3QgZWlnaHQgR0IzMDAgb3IgTUkzNTVYIEdQVXMgKDEuNTZUQikuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIHRoZSBsaWNlbnNlIiwKICAgICAgInRleHQiOiAiUXdlbjMuOC0yN0IgaXMgQXBhY2hlIDIuMCwgYW5kIE1pTW8tVjIuNiwgR0xNLTUuMy1GbGFzaCBhbmQgRGVlcFNlZWsgVjQgYXJlIE1JVC4gS2ltaSBLMywgR0xNLTUuMywgUXdlbjMuOC1NYXgsIFF3ZW4zLjgtRmxhc2gtTmV4dCBhbmQgTWluaU1heCBNMyB1c2UgY3VzdG9tIGxpY2Vuc2VzIHdpdGggcmV2ZW51ZSBvciB1c2UtY2FzZSBjb25kaXRpb25zLCBzbyByZWFkIHRoZW0gYmVmb3JlIHJlc2VsbGluZyBpbmZlcmVuY2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgT2xsYW1hIGFuZCBPcGVuQ29kZSIsCiAgICAgICJ0ZXh0IjogIlJ1biBjdXJsIC1mc1NMIGh0dHBzOi8vb2xsYW1hLmNvbS9pbnN0YWxsLnNoIHwgc2ggYW5kIGN1cmwgLWZzU0wgaHR0cHM6Ly9vcGVuY29kZS5haS9pbnN0YWxsIHwgYmFzaC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiR2l2ZSB0aGUgbW9kZWwgZW5vdWdoIGNvbnRleHQiLAogICAgICAidGV4dCI6ICJPcGVuQ29kZSBuZWVkcyBhdCBsZWFzdCA2NEsgdG9rZW5zIG9mIGNvbnRleHQsIGFuZCBPbGxhbWEgZGVmYXVsdHMgdG8gNEsgb24gR1BVcyB1bmRlciAyNEdpQiBvZiBWUkFNIGFuZCAzMksgdXAgdG8gNDhHaUIuIFN0YXJ0IHRoZSBzZXJ2ZXIgd2l0aCBPTExBTUFfQ09OVEVYVF9MRU5HVEg9NjQwMDAgb2xsYW1hIHNlcnZlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJMYXVuY2ggdGhlIGNvZGluZyBhZ2VudCIsCiAgICAgICJ0ZXh0IjogIlJ1biBvbGxhbWEgbGF1bmNoIG9wZW5jb2RlIC0tbW9kZWwgcXdlbjMuODoyN2IuIE9uIGFuIEFwcGxlIFNpbGljb24gTWFjLCB1c2UgdGhlIHF3ZW4zLjg6MjdiLW1seCB0YWcgaW5zdGVhZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3B0aW9uYWxseSByZWFjaCBhIHJlbW90ZSBHUFUgYm94IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiT24gdGhlIEdQVSBtYWNoaW5lLCBydW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjExNDM0IGZyZWUucGluZ2d5LmlvIFwidTpIb3N0OmxvY2FsaG9zdDoxMTQzNFwiIFwiazpjaGFuZ2UtbWVcIiwgdGhlbiBwb2ludCBPcGVuQ29kZSdzIGJhc2VVUkwgYXQgdGhlIHByaW50ZWQgaHR0cHMgVVJMIHBsdXMgL3YxIHdpdGggYXBpS2V5IGNoYW5nZS1tZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/best_open_source_self_hosted_llms_for_coding_banner.webp" "Bar charts of open-weight coding LLMs: Artificial Analysis Intelligence Index v4.3.2 against Claude Opus 5.5, Terminal-Bench 2.1 scores, and the models that fit in 128GB" >}}

Choosing a coding model used to be a decision you made once a year. The open-weight field now moves fast enough that the right answer changes every few weeks, and for most teams the deciding factor turns out to be hardware rather than benchmark scores.

The last six weeks show it. Xiaomi's **MiMo-V2.6-Pro**, released on September 21 under MIT, is now the top open weight on the Artificial Analysis Intelligence Index at 46, ahead of GLM-5.3 (45) and Kimi K3 (44). **DeepSeek-V4.1-Flash** (September 10) tops LiveBench's agentic coding board outright, above Claude Opus 5.5. Neither fits on one GPU. The model that does, **Qwen3.8-27B**, scores 34 on the same index, which still makes it the best of 142 models in its size class.

This guide ranks the coding models you can actually download as of October 6, 2026, and says what hardware each one needs. Scores come from Artificial Analysis (Intelligence Index v4.3.2), LiveBench, and vendor-reported SWE-Bench Pro and Terminal-Bench 2.1 numbers. Hardware figures come from model cards, Unsloth's docs and vLLM's deployment recipes.

{{% tldr %}}

**Top open-weight coding models (Artificial Analysis Intelligence Index v4.3.2, October 2026):**
1. **MiMo-V2.6-Pro** - Index **46**, MIT, 1.02T/42B, 8x H200 - <a target="_blank" href="https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD">Get MiMo-V2.6-Pro</a>
2. **GLM-5.3** - Index **45**, custom license, 756GB of FP8 weights - <a target="_blank" href="https://huggingface.co/zai-org/GLM-5.3">Get GLM-5.3</a>
3. **Kimi K3** - Index **44**, 2.78T parameters, needs at least 8x GB300 - <a target="_blank" href="https://huggingface.co/moonshotai/Kimi-K3">Get Kimi K3</a>
4. **GLM-5.3-Flash** - Index **42**, MIT, 320B/18B, 3-4x 80GB GPUs at Q4 - <a target="_blank" href="https://huggingface.co/zai-org/GLM-5.3-Flash">Get GLM-5.3-Flash</a>
5. **Qwen3.8-Flash-Next** - Index **40**, fits a 128GB machine at 4-bit - <a target="_blank" href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next">Get Qwen3.8-Flash-Next</a>
6. **DeepSeek-V4.1-Flash** - Index **39**, MIT, #1 on LiveBench agentic coding - <a target="_blank" href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash">Get DeepSeek-V4.1-Flash</a>
7. **Qwen3.8-27B** - Index **34**, Apache 2.0, one 24GB GPU - <a target="_blank" href="https://huggingface.co/Qwen/Qwen3.8-27B">Get Qwen3.8-27B</a>

**One GPU: pull Qwen3.8-27B.** It's a 27B dense Apache 2.0 model that needs 16-19GB at 4-bit, and it scores 34 on the index to the next-best small model's 25.

**128GB Mac: Qwen3.8-Flash-Next.** It needs 96-114GB at 4-bit and scores 40, level with Qwen3.8-2.4T-A95B, the open weights behind Qwen3.8-Max.

**One server: GLM-5.3-Flash.** It's MIT and needs 162-210GB at 4-bit, so three or four 80GB GPUs instead of eight.

**Self-hosting tools:** <a target="_blank" href="https://ollama.com">Ollama</a> for local use, <a target="_blank" href="https://github.com/vllm-project/vllm">vLLM</a> for production serving, <a target="_blank" href="https://lmstudio.ai">LM Studio</a> for a desktop GUI.

{{% /tldr %}}

## How close open weights are to proprietary models

We use {{< link href="https://artificialanalysis.ai/models/open-source" >}}Artificial Analysis{{< /link >}} as the main lens because it runs every model itself rather than reprinting vendor claims. Its Intelligence Index changed in September: v4.3 (September 7) swapped Terminal-Bench 2.1 for **Terminal-Bench 4.0** and replaced τ³-Banking with AutomationBench-AA, and the current **v4.3.2** combines 10 evaluations. Scores fell across the board, so numbers from older articles (including the previous version of this one) aren't comparable.

On the current scale, **Claude Opus 5.5 leads overall at 58**. The best open weight, MiMo-V2.6-Pro, scores 46. The hardware column is the smallest setup that holds the weights, worked out from each model's card, vLLM recipe or Unsloth guide, before KV cache headroom.

| Model | Params (active) | License | AA Index | Smallest practical setup |
|---|---|---|---|---|
| Claude Opus 5.5 *(proprietary)* | - | - | **58** | API only |
| MiMo-V2.6-Pro | 1.02T (42B) | MIT | **46** | 8x H200 (~574GB, mostly MXFP4) |
| GLM-5.3 | 744B (40B) | GLM-5.3 License | **45** | 8x H200 (756GB FP8) |
| Kimi K3 | 2.78T (104B) | Kimi K3 License | **44** | 8x GB300 or 8x MI355X (1.56TB MXFP4) |
| GLM-5.3-Flash | 320B (18B) | MIT | **42** | 3-4x 80GB GPUs at 4-bit (162-210GB) |
| Qwen3.8-Max (2.4T-A95B) | 2.4T (95B) | Qwen3.8-Max License | 40 | 8x B300 at NVFP4 (1.32TiB) |
| Qwen3.8-Flash-Next | 125B (6B) + 51B n-gram table | Qwen Community License | 40 | 128GB machine (96-114GB at 4-bit) |
| DeepSeek-V4.1-Flash | 552B + 196B Engram (16B) | MIT | 39 | 4x H200 with Engram on CPU (~511GB) |
| MiMo-V2.6-Flash | 309B (15B) | MIT | 38 | 4x H200 (~178GB, mostly MXFP4) |
| DeepSeek-V4-Pro-0813 | 1.6T (49B) | MIT | 36 | 8x H200 (893GB) |
| Qwen3.8-27B | 27B dense | Apache 2.0 | 34 | One 24GB GPU (16-19GB at 4-bit) |
| MiniMax M3 | 428B (23B) | MiniMax Community License | 29 | 4x H100 at 4-bit (213-270GB) |

### Models that fit one GPU or a 128GB machine

If your "server" is a laptop, the ceiling is Apple's: the M5 Max MacBook Pro tops out at **128GB of unified memory**, which has to hold the weights plus the KV cache. Same index, so these read directly against the table above.

| Model | Params (active) | ~4-bit memory | AA Index |
|---|---|---|---|
| Qwen3.8-Flash-Next | 125B (6B) + n-gram table | 96-114GB | **40** |
| Qwen3.8-27B | 27B dense + vision | 16-19GB | **34** |
| Qwen3.6-27B | 27.8B dense | 18GB | 21 |
| Muse Glimmer 30B | 29.6B dense (incl. vision) | 17GB | 17 |
| Gemma 4 31B | 30.7B dense | 17-20GB | 15 |
| Nemotron 3.5 Lightning | 31.6B (3.6B) | 21-25.5GB | 13 |
| Nemotron 3 Super 120B-A12B | 120.6B (12.7B) | 64-72GB | 13 |
| gpt-oss-120b (high) | 117B (5.1B) | ~63GB | 12 |
| Qwen3-Coder-Next | 79.7B (3B) | 46GB | 9 |

**Bigger doesn't win on a laptop, newer does.** Qwen3.8-27B beats every 120B-class model that fits by more than 20 points, and the only thing above it on a 128GB machine is Qwen3.8-Flash-Next. Its runner-up in the small class is now K2 Horizon MoVA 36B-A4B (Apache 2.0) at 25. GLM-5.3-Flash also squeezes into 128GB with Unsloth's 2-bit quant (a 109GB file), at a real quality cost.

### SWE-Bench Pro and Terminal-Bench 2.1

The Intelligence Index measures general capability. For code specifically, SWE-Bench Pro (fixing real issues in real repos) and Terminal-Bench 2.1 (agentic tasks in a shell) have the widest coverage across open weights. These are vendor-reported numbers from each model card, cross-checked against the {{< link href="https://huggingface.co/datasets/ScaleAI/SWE-bench_Pro" >}}SWE-Bench Pro{{< /link >}} and {{< link href="https://huggingface.co/datasets/harborframework/terminal-bench-2.1" >}}Terminal-Bench 2.1{{< /link >}} leaderboards on Hugging Face, sorted by Terminal-Bench.

| Model | Released | SWE-Bench Pro (v1) | Terminal-Bench 2.1 |
|---|---|---|---|
| DeepSeek-V4.1-Flash | Sep 2026 | Not reported | **90.6** |
| MiMo-V2.6-Pro | Sep 2026 | Not reported | 89.9 |
| Kimi K3 | Jul 2026 | Not reported | 88.3 |
| GLM-5.3 | Aug 2026 | Not reported | 88.2 |
| DeepSeek-V4-Pro-0813 | Aug 2026 | 55.4 (April preview) | 87.9 |
| MiMo-V2.6-Flash | Sep 2026 | Not reported | 87.6 |
| Qwen3.8-Max | Aug 2026 | **67.7** | 86.6 |
| Ornith-1.5-397B | Aug 2026 | 65.1 | 86.1 |
| Tencent Hy4-preview | Aug 2026 | 65.7 | 85.4 |
| GLM-5.3-Flash | Aug 2026 | Not reported | 84.3 |
| Nex-N2.5-Pro | Sep 2026 | 61.2 | 82.7 |
| GLM-5.2 | Jun 2026 | 62.1 | 81.0 (Terminus-2) |
| dots3-note-prev | Aug 2026 | 61.0 | 75.1 |
| Qwen3.8-27B | Aug 2026 | 61.7 | 73.0 |
| Poolside Laguna-S-2.1 | Jul 2026 | 59.4 | 70.2 |
| MiniMax M3 | Jun 2026 | 59.0 | 66.0 |
| Muse Glimmer 30B | Aug 2026 | 51.2 | 51.7 |
| Qwen3.8-Flash-Next | Aug 2026 | 62.5 | Not reported |

The top of the Terminal-Bench column now belongs to open weights. DeepSeek-V4.1-Flash's 90.6 sits above GPT-5.6 Sol's 88.8 (OpenAI-reported) and above Artificial Analysis's own run of Claude Opus 5 (89.1), though below Claude Fable 5.1 (91.4 in AA's run). On SWE-Bench Pro, **Qwen3.8-Max still leads open weights at 67.7**, and the more useful number is Qwen3.8-27B's 61.7 at a fraction of the size.

Three caveats before you compare these against anything else. **Every number here is vendor-run**, with each lab using its own scaffolding. Scale's standardized {{< link href="https://labs.scale.com/leaderboard/swe_bench_pro" >}}SEAL leaderboard{{< /link >}} tops out at 61.5 (Muse Spark 1.1) and doesn't cover any of these models. **SWE-Bench Pro moved to a V2 dataset on September 22**, so these v1 scores won't line up with new submissions. Qwen's SWE-Bench Pro scores also come from its own corrected version of the v1 tasks. And the frontier has moved on to **Terminal-Bench 4.0**, where Claude Opus 5.5 leads {{< link href="https://www.tbench.ai/" >}}tbench.ai's leaderboard{{< /link >}} at 64.8 and the only open-weight entry so far is GLM-5.3 at 41.8.

### What LiveBench adds

{{< link href="https://livebench.ai/#/?cats=Agentic+Coding" >}}LiveBench{{< /link >}} is the contamination-aware cross-check, and it has now scored most of the August and September releases (not MiMo-V2.6 yet). **DeepSeek-V4.1-Flash leads the entire agentic coding board at 77.27**, above Claude Opus 5.5 at 71.72. Among other open weights, DeepSeek-V4-Flash-Vision-Exp scores 65.10 on agentic coding, Qwen3.8-Max 64.65, Kimi K3 62.17, Qwen3.8-Flash-Next 61.62, Qwen3.8-27B 61.36 and GLM-5.3 60.91. On plain coding, Kimi K3 is still the top base open weight at 81.45.

## Best open source LLMs for coding

The list below is a selection of open weights you can download today, roughly in Artificial Analysis index order. Most of the top five need data-center hardware, so read the deployment notes before you plan around them. For a single GPU or a 128GB Mac, skip to Qwen3.8-27B and Qwen3.8-Flash-Next.

### 1. MiMo-V2.6-Pro and MiMo-V2.6-Flash (Xiaomi) - top open weight

{{< image "best_open_source_self_hosted_llms_for_coding/mimo_v2_6_pro.webp" "Hugging Face model page for XiaomiMiMo/MiMo-V2.6-Pro-MOPD, showing the MIT license and 1T parameters" >}}

*Screenshot: huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD, October 2026.*

Xiaomi published **MiMo-V2.6-Pro** and **MiMo-V2.6-Flash** on September 21, 2026, under a plain MIT license with no revenue thresholds. Each comes in two builds: the `-RL` repos from launch day, and improved `-MOPD` repos published on September 27. Both take text, image, video and audio input, with a 1M-token context, up to 128K output tokens, and a hybrid of sliding-window and global attention plus a multi-token prediction drafter for faster decoding.

The Pro is a 1.02T-parameter MoE with 42B active (384 experts, 8 active per token). Its weights, mostly 4-bit MXFP4, total about 574GB, and vLLM's recipe needs at least 680GB of VRAM, so the floor is eight H200s. It scores **46** on the Intelligence Index, **89.9 on Terminal-Bench 2.1** and 71.9 on DeepSWE. The Flash is 309B with 15B active, about 178GB of weights, and runs on four H200s. It scores 38 on the index and 87.6 on Terminal-Bench 2.1. Neither reports SWE-Bench Pro or SWE-Bench Verified, and Unsloth has no guide for them yet.

These replace April's MiMo-V2.5-Pro, which Artificial Analysis now marks deprecated at 26.

### 2. GLM-5.3 and GLM-5.3-Flash (Z.AI)

{{< image "best_open_source_self_hosted_llms_for_coding/glm_5_3.webp" "Hugging Face model page for zai-org/GLM-5.3, showing the GLM-5.3 license and 753B parameters" >}}

*Screenshot: huggingface.co/zai-org/GLM-5.3, October 2026.*

Z.AI announced **GLM-5.3** on August 14 and published the weights on {{< link href="https://huggingface.co/zai-org/GLM-5.3" >}}Hugging Face{{< /link >}} on August 28, after holding them for two weeks of safety evaluation. The base model is unchanged from GLM-5.2 (744B total, 40B active); every gain comes from post-training. Terminal-Bench 3.0 goes from 4.6 to 28.3, DeepSWE v1.1 from 46.2 to 66.9, and the card reports **88.2 on Terminal-Bench 2.1**. It also scores 84.5% on CyberGym, and Z.AI says it found 2,436 vulnerabilities across 269 real-world projects with it.

The default repo is native FP8: 141 safetensors shards, 756GB, which fits eight H200s but not an 8x80GB H100 node (a BF16 copy also exists at about 1.5TB). It has 78 layers, 256 routed experts with 8 active, a 1M-token context, and thinking at three levels that can't be turned off. The **GLM-5.3 License** is MIT-like, except that model-as-a-service operators above $10 billion in revenue must pass a Z.AI security review first.

**GLM-5.3-Flash** is the one most teams can deploy. Released August 26 under **MIT**, it's a 320B MoE with 18B active, the first natively multimodal GLM-5 model, with a 1M-token context. Its hybrid of linear and sparse attention gives a 4.44x smaller KV cache and about 3x less attention compute than GLM-5.3. It scores **42** on the index, 84.3 on Terminal-Bench 2.1 and 63.4 on DeepSWE, at about $0.25 per task on Artificial Analysis's run. The native FP8 weights (328GB) need an 8x80GB node, but a 4-bit build at 162-210GB (Unsloth's `UD-Q4_K_XL` is 200GB) fits three or four 80GB GPUs or a 256GB Mac, and {{< link href="https://unsloth.ai/docs/models/glm-5.3-flash" >}}Unsloth's 2-bit quant{{< /link >}} needs about 115GB. Mainline llama.cpp {{< link href="https://github.com/ggml-org/llama.cpp/pull/27773" >}}merged support{{< /link >}} on September 30.

### 3. Kimi K3 (Moonshot AI)

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k3.webp" "Hugging Face model page for moonshotai/Kimi-K3, showing the kimi-k3 license and 2.8T parameters" >}}

*Screenshot: huggingface.co/moonshotai/Kimi-K3, October 2026.*

Moonshot announced {{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Kimi K3{{< /link >}} on July 16 and published the weights on July 27. At **2.78T total parameters** with 104B active, it's the largest open-weight model released so far: 896 experts with 16 active per token, 93 layers (69 Kimi Delta Attention plus 24 Gated MLA), a MoonViT-V2 vision encoder and a 1M-token context.

The weights are natively MXFP4 from quantization-aware training, so the 1.56TB download is already the compact form, and vLLM's recipe needs at least eight GB300 or MI355X GPUs, with multiple nodes for production traffic. Unsloth does publish GGUFs, but its recommended 1-bit quant (`UD-IQ1_S`) is still 594GB, and even the smallest file (`UD-Q1_0`) is 466GB. The **Kimi K3 License** permits self-hosting and fine-tuning and exempts internal use, but model-as-a-service operators above $20M in revenue need a separate agreement, and products above 100M monthly users or $20M monthly revenue must show "Kimi K3" in the UI.

Moonshot reports **88.3 on Terminal-Bench 2.1**, 81.2 on FrontierSWE and 67.5 on DeepSWE, with no SWE-Bench Pro number. It's still the top base open weight on LiveBench coding (81.45), and it scores 44 on the index, now third among open weights. API pricing is $3 per million input tokens ($0.30 cached) and $15 per million output.

### 4. Qwen3.8-Max (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_max.webp" "Hugging Face model page for Qwen/Qwen3.8-2.4T-A95B, the open weights of Qwen3.8-Max" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-2.4T-A95B, October 2026.*

Alibaba announced Qwen3.8-Max on August 3 and published the weights as {{< link href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B" >}}Qwen3.8-2.4T-A95B{{< /link >}} on August 12, the first time a Qwen-Max-class model has been open-weighted. It's a 2.4T MoE with 95B active (512 experts, 10 routed plus 1 shared per token), a 262K context extensible to about 1M, and always-on thinking you can dial with `reasoning_effort` (`xhigh`, `medium` or `low`).

It's the **strongest open weight that reports SWE-Bench Pro, at 67.7**, with 86.6 on Terminal-Bench 2.1. Two caveats. The open weights are text-only and not the hosted model: Alibaba's API-only Qwen3.8-Max-0902 update scores 45 on the index while the open weights score 40. And the license is a custom one with attribution required above 100M monthly users or $20M monthly revenue, plus a separate license for model-as-a-service or AI coding and office-assistant businesses with more than $50M a year in revenue, including affiliates. BF16 weights are about 4.9TB. vLLM's recipe runs the NVFP4 build (1.32TiB) on eight B300s, or the FP8 build on 16 B300s or 32 H200s.

### 5. DeepSeek-V4.1-Flash and V4-Pro (DeepSeek)

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek_v4_1_flash.webp" "Hugging Face model page for deepseek-ai/DeepSeek-V4.1-Flash, showing the MIT license and the 552B backbone in its introduction" >}}

*Screenshot: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash, October 2026.*

**DeepSeek-V4.1-Flash** (September 10, MIT) is the most unusual design here. It's an encoder-decoder model with a 552B backbone plus 196B of "Engram" memory that can sit in CPU RAM, 384 experts with 6 active, and 8B active parameters during prefill but 16B during decode. It has a 1M-token context and 384K output tokens. DeepSeek reports **90.6 on Terminal-Bench 2.1** (88.0 with the Claude Code harness) and 74.2 on DeepSWE, the highest open-weight scores on both, and LiveBench independently puts it at #1 on agentic coding. It scores 39 on the index. The weights are about 511GB, and vLLM's recipe runs it on eight H200s, or four with Engram offloaded to CPU. Unsloth has no GGUF yet, and llama.cpp support is still in review.

**DeepSeek-V4-Pro-0813** (August 13, MIT) is 1.6T total with 49B active, a 1M context and three effort levels, and DeepSeek's API now speaks the OpenAI Responses API natively. Its card reports 87.9 on Terminal-Bench 2.1 and 62.7 on DeepSWE, and it scores 36 on the index. The often-quoted 80.6 SWE-Bench Verified and 55.4 SWE-Bench Pro come from the April preview, not this build. The official weights are already FP4 experts plus FP8, 893GB in total, so the floor is eight H200s. On DeepSeek's API, V4-Flash and V4-Flash-Vision-Exp were retired on September 10 and their names now route to V4.1-Flash. If you'd rather keep the older 284B {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" >}}V4-Flash-0731{{< /link >}}, it fits a 128GB machine at 3-bit, as our {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}guide to local LLM tools and models{{< /link >}} explains.

### 6. Qwen3.8-Flash-Next (Alibaba) - best for a 128GB machine

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_flash_next.webp" "Hugging Face model page for Qwen/Qwen3.8-Flash-Next, showing the qwen-community-1.0 license" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-Flash-Next, October 2026.*

{{< link href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next" >}}Qwen3.8-Flash-Next{{< /link >}} (August 26) is Alibaba's preview of the Qwen4 architecture: 125B parameters with 6B active, plus a 51B n-gram embedding table that can be offloaded to RAM or SSD, Gated DeltaNet with Qwen Sparse Attention, and a 262K context extensible to 1M. Thinking can be turned off, unlike on Max.

It scores **40** on the index, level with Qwen3.8-2.4T-A95B, the open weights behind Qwen3.8-Max, with **62.5 on SWE-Bench Pro** and 91.9 on LiveCodeBench v6. Unsloth's {{< link href="https://unsloth.ai/docs/models/qwen3.8-next" >}}guide{{< /link >}} puts the 4-bit quant at 96-114GB, so it's the strongest model that runs on a 128GB Mac without dropping below 4 bits. Read the **Qwen Community License** first: attribution is required above 100M monthly users or $20M monthly revenue, and any company (or affiliate) that runs a model-as-a-service or "AI work assistant" (AI coding or office-productivity) business needs a separate license before commercial use, regardless of size. Purely internal use, with nothing exposed to third parties, is exempt.

### 7. Qwen3.8-27B (Alibaba) - best for a single GPU

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_27b.webp" "Hugging Face model page for Qwen/Qwen3.8-27B, showing the Apache 2.0 license" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-27B, October 2026.*

For anyone without a GPU server, this is the most important model here. Alibaba published {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B" >}}Qwen3.8-27B{{< /link >}} on August 14 under **Apache 2.0**. It's a 27B dense vision-language model with 64 layers (repeating three Gated DeltaNet blocks and one gated attention block) and a 262K context extensible to about 1M.

The coding numbers are the point: **61.7 on SWE-Bench Pro**, 73.0 on Terminal-Bench 2.1, 90.3 on LiveCodeBench v6 and 42.2 on DeepSWE, more than three times Qwen3.6-27B's 13.3. SWE-Bench Pro and DeepSWE were run with the Claude Code harness, and Terminal-Bench with Terminus. It scores 34 on the index, first of 142 models in its size class and well ahead of Qwen3.6-27B (21).

It needs 16-19GB at 4-bit (a single 24GB card like an RTX 4090, or a 24GB Mac), about 31GB at FP8 and 56GB at BF16, and the default Ollama tag is an 18GB download. The real complaint is verbosity. Artificial Analysis measured it at 47.8 output tokens/s against 222.8 for DeepSeek-V4-Flash-0731, and it took about six times longer to finish the index. Turn reasoning effort down for interactive edits and keep it high for agent runs. If you want a coding specialist instead, Qwen3-Coder-Next (80B, 3B active, 46GB at 4-bit) is fast, but it scores far lower on today's index (9).

### 8. MiniMax M3 (MiniMax)

{{< image "best_open_source_self_hosted_llms_for_coding/minimax_m3.webp" "Hugging Face model page for MiniMaxAI/MiniMax-M3, showing the minimax-community license and 427B parameters" >}}

*Screenshot: huggingface.co/MiniMaxAI/MiniMax-M3, October 2026.*

{{< link href="https://huggingface.co/MiniMaxAI/MiniMax-M3" >}}MiniMax M3{{< /link >}} shipped on June 1, with weights on Hugging Face by June 12. It's a 428B MoE with 23B active, a 1M-token context and native image and video input, built around MiniMax Sparse Attention (MSA), which reads each KV cache block only once. MiniMax reports 59.0 on SWE-Bench Pro, 66.0 on Terminal-Bench 2.1 and 74.2 on MCP-Atlas, and it scores 29 on the index.

Two things to know. Unsloth's 4-bit GGUFs need 213-270GB, so plan on four H100s, and they're text-only with dense attention because llama.cpp doesn't implement MSA. And the **MiniMax Community License** is restrictive: the base grant is non-commercial, commercial use needs a "Built with MiniMax M3" notice and a one-time notice to MiniMax, and products above $20M a year need written authorization.

### 9. Muse Glimmer 30B (Meta) - best MCP tool use on one GPU

{{< image "best_open_source_self_hosted_llms_for_coding/muse_glimmer_30b.webp" "Hugging Face model page for meta-models/Muse-Glimmer-30B, showing the Apache 2.0 license and model card" >}}

*Screenshot: huggingface.co/meta-models/Muse-Glimmer-30B, October 2026.*

Meta Superintelligence Labs released {{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}Muse Glimmer{{< /link >}} on August 10: a 29.6B dense multimodal model (including a 1.8B vision encoder) under **Apache 2.0**, with 52 layers and a 131K context. The BF16 weights are about 60GB, and Meta's K-Quant builds bring it under 20GB with 0.2-1.0% degradation, so it fits a 24GB card.

Meta's own numbers are strong on tool use: **75.5 on MCP Atlas** against Qwen3.6-27B's 62.5, close to GLM-5.2's 76.8 at 744B parameters, plus 51.2 on SWE-Bench Pro. Independent results are weaker. It scores 17 on the current index, behind Qwen3.6-27B at 21, and Artificial Analysis's launch review called agentic knowledge work "its weakness relative to its size class". Qwen3.8-27B, released four days later, beats it on every benchmark both report. What's left is MCP Atlas and **DFlash**, a block-diffusion speculative decoder that Meta measured going from 74.9 to 233.4 tokens/s on an RTX 5090 with identical output. It runs in Ollama, LM Studio, llama.cpp, MLX, vLLM and SGLang.

### 10. Nemotron 3.5 Lightning (NVIDIA) - fastest local inference

{{< image "best_open_source_self_hosted_llms_for_coding/nemotron_3_5_lightning.webp" "Hugging Face model page for NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, showing the OpenMDW-1.1 license and an accuracy chart" >}}

*Screenshot: huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, October 2026.*

NVIDIA shipped {{< link href="https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch" >}}Nemotron 3.5 Lightning{{< /link >}} on August 11: a Mamba-2, MoE and attention hybrid with 31.6B total and 3.6B active parameters by Artificial Analysis's count (NVIDIA rounds to 30B and 3B), distilled from Nemotron 3 Ultra, with up to 1M tokens of context. It ships under **OpenMDW-1.1** with weights, training data and recipes all released.

It doesn't compete with Qwen3.8-27B on capability. It scores 13 on the index, level with Nemotron 3 Super and above gpt-oss-120b (12), and NVIDIA reports 51.56 on SWE-bench Verified. Throughput is the pitch: Artificial Analysis measured nearly **670 tokens/s** on the NVFP4 weights at launch. Its 4-bit builds are 21-25.5GB on disk. For a high-volume pipeline (batch refactors, test generation, log triage) that tradeoff can be right; for anything that needs to think, it isn't.

### 11. Mistral Medium 3.5 and Devstral Small 2 (Mistral AI)

{{< image "best_open_source_self_hosted_llms_for_coding/mistral_medium_3_5.webp" "Hugging Face model page for mistralai/Mistral-Medium-3.5-128B, which says it replaces Devstral 2 in Vibe" >}}

*Screenshot: huggingface.co/mistralai/Mistral-Medium-3.5-128B, October 2026.*

Mistral's coding line has consolidated. {{< link href="https://huggingface.co/mistralai/Mistral-Medium-3.5-128B" >}}Mistral Medium 3.5{{< /link >}} (April 2026) is a 128B dense model under a modified MIT license with a 256K context and 77.6% on SWE-bench Verified, and its card says it supersedes Devstral and replaces Devstral 2 in Vibe CLI, Mistral's open-source terminal coding agent. It needs about 80GB at 4-bit but scores only 14 on the current index.

The smaller sibling is why Mistral stays on this list. **Devstral Small 2** (24B, Apache 2.0, December 2025) scores 68.0% on SWE-bench Verified, takes image input, has a 256K context and runs on a single RTX 4090 or a 32GB Mac. Qwen3.8-27B beats it at a similar footprint, but Devstral Small 2 with Vibe CLI is a ready-made workflow.

## Honorable mentions

{{< image "best_open_source_self_hosted_llms_for_coding/starcode2.webp" "StarCoder 2 Open Source LLM by BigCode" >}}

{{< link href="https://github.com/bigcode-project/starcoder2" >}}StarCoder 2{{< /link >}} from BigCode comes in 3B, 7B and 15B sizes with a 16K context. The 15B was trained on 600+ languages from The Stack v2, and every source-code file in its training set carries a Software Heritage identifier, which makes it the most auditable coding model available. Pick it when your blocker is IP compliance rather than capability.

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k27_code.webp" "Kimi K2.7-Code Open Source LLM by Moonshot AI" >}}

{{< link href="https://huggingface.co/moonshotai/Kimi-K2.7-Code" >}}Kimi K2.7-Code{{< /link >}} (June 12) is Moonshot's coding line: a 1T MoE with 32B active and a 262K context that spends about 30% fewer thinking tokens than K2.6. A HighSpeed variant serves at about 180 tokens/s. It keeps the modified MIT license that K3 dropped, at about a third of K3's size.

{{< image "best_open_source_self_hosted_llms_for_coding/granite_4_2.webp" "Hugging Face model page for ibm-granite/granite-4.2-30b, showing the Apache 2.0 license and model summary" >}}

*Screenshot: huggingface.co/ibm-granite/granite-4.2-30b, October 2026.*

{{< link href="https://huggingface.co/ibm-granite/granite-4.2-30b" >}}IBM Granite 4.2{{< /link >}} (August 25) comes as dense 3B, 8B and 30B models under Apache 2.0, with a 128K context extendable to 512K and a thinking mode. The 30B scores 57.0 on SWE-bench Verified and 33.29 on SWE-Bench Pro. It isn't competitive on capability, but it's the license-clean enterprise option, as is IBM's older Granite Code line (3B to 34B, trained on 116 languages).

{{< image "best_open_source_self_hosted_llms_for_coding/yi_coder.webp" "Yi-Coder Open Source LLM by 01.AI" >}}

{{< link href="https://github.com/01-ai/Yi-Coder" >}}Yi-Coder{{< /link >}} from 01.AI comes in 1.5B and 9B sizes with a 128K context under Apache 2.0, and Yi-Coder-9B-Chat scores 85.4% on HumanEval. It's small enough for code completion on modest hardware.

**Worth watching:** Reflection AI announced {{< link href="https://reflection.ai/blog/introducing-beam" >}}Beam{{< /link >}} on October 5, a 501B MoE with 23B active that reports 65.5 on SWE-Bench Pro and 80.1 on Terminal-Bench 2.1. The Apache 2.0 weights are promised for later in October but aren't on Hugging Face yet.

## How to use these models with a coding agent

The quickest local setup is {{< link href="https://opencode.ai" >}}OpenCode{{< /link >}}, an open-source terminal coding agent, with {{< link href="https://ollama.com" >}}Ollama{{< /link >}} serving the model. Ollama can launch OpenCode directly, so it's a few commands.

**Step 1: Install Ollama**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

{{< image "best_open_source_self_hosted_llms_for_coding/install_ollama.webp" "install ollama" >}}

**Step 2: Install OpenCode**

```bash
curl -fsSL https://opencode.ai/install | bash
```

{{< image "best_open_source_self_hosted_llms_for_coding/install_opencode.webp" "install opencode" >}}

**Step 3: Give the model enough context**

OpenCode needs at least 64K tokens of context, and Ollama's default is smaller on most consumer GPUs: 4K under 24GiB of VRAM and 32K up to 48GiB. Start the server with a bigger window (on macOS, quit the Ollama app first so the port is free):

```bash
OLLAMA_CONTEXT_LENGTH=64000 ollama serve
```

**Step 4: Launch OpenCode through Ollama**

In a second terminal:

```bash
ollama launch opencode --model qwen3.8:27b
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode.webp" "opencode" >}}

On an Apple Silicon Mac, use the `qwen3.8:27b-mlx` tag (also 18GB), which runs on Apple's MLX backend. Then open your repository and use it like any other terminal coding agent. Qwen3.8-27B thinks a lot by default, so if interactive edits feel slow, lower the reasoning effort for chat and keep it high for long agent runs.

## Running the model on a GPU box and coding from your laptop

A common setup is a workstation with the GPU at home or in the office and a laptop everywhere else. Ollama only listens on localhost, and it rejects requests whose `Host` header isn't a local name, so a plain tunnel gets `403 Forbidden`. A [Pinggy](https://pinggy.io/) tunnel can rewrite the header and require a key. On the GPU machine, run:

```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io "u:Host:localhost:11434" "k:change-me"
```

It prints public HTTPS URLs such as `https://<random>.run.pinggy-free.link`, and requests without `Authorization: Bearer change-me` get a `401`. OpenAI-compatible clients send exactly that header with their API key, so on the laptop you point OpenCode's `opencode.json` at the tunnel and set the key:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "gpubox": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama on my GPU box",
      "options": {
        "baseURL": "https://<random>.run.pinggy-free.link/v1",
        "apiKey": "change-me"
      },
      "models": {
        "qwen3.8:27b": { "name": "Qwen3.8-27B" }
      }
    }
  }
}
```

Free tunnels last 60 minutes and get a new URL each time, which is fine for a quick session. For a box you code against every day, a [Pinggy Pro token](https://dashboard.pinggy.io) removes the timeout and keeps the URL stable.

## How to self-host these models

Once you've picked a model, these guides cover the rest:

- {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}How to Self-Host Any LLM{{< /link >}} walks through running Ollama and Open WebUI in Docker, downloading a model, and sharing the setup outside your network.
- {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}Best local LLM tools and models{{< /link >}} compares LM Studio, Unsloth, Ollama and others, and lists which models fit in 128GB.
- {{< link href="/blog/best_hardware_for_self_hosted_coding_agents/" >}}Best hardware for self-hosted coding agents{{< /link >}} covers GPUs and unified-memory machines.

## Conclusion

Your hardware picks the model, not the leaderboard. With **one GPU**, run Qwen3.8-27B: Apache 2.0, 16-19GB at 4-bit, and it scores 34 on the index to the next-best small model's 25. With a **128GB Mac**, run Qwen3.8-Flash-Next if its license works for you. With **three or four 80GB GPUs**, run GLM-5.3-Flash under MIT. With **eight H200s**, MiMo-V2.6-Pro is the top open weight and comes with the simplest license of the leaders. Kimi K3 needs at least eight GB300-class GPUs.

On Artificial Analysis's current scale, the best open weight scores 46 to Claude Opus 5.5's 58. On vendor-reported Terminal-Bench 2.1, open weights have caught up. Check both again in a month; this field moves that fast.
