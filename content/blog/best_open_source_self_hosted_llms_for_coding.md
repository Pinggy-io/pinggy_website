---
title: "Best Open Source LLMs for Coding to Self-Host in 2026"

description: "Compare open-weight coding LLMs for one GPU, a 128GB Mac or a cluster. November 2026 picks include Inkling 2 Mini, Qwen3.8-27B, DeepSeek-V4.1-Flash-1017 and Kimi K3.1 Pro, with benchmarks and memory budgets."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-11-22T09:00:00+05:30
draft: false
tags: ["open source LLM", "self-hosted AI", "local LLM", "AI coding agents", "open source"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/coding_llms_november_2026_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkJlc3QgT3BlbiBTb3VyY2UgTExNcyBmb3IgQ29kaW5nIHRvIFNlbGYtSG9zdCBpbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiQ29tcGFyZSBvcGVuLXdlaWdodCBjb2RpbmcgTExNcyBmb3Igb25lIEdQVSwgYSAxMjhHQiBNYWMgb3IgYSBjbHVzdGVyLiBOb3ZlbWJlciAyMDI2IHBpY2tzIGluY2x1ZGUgSW5rbGluZyAyIE1pbmksIFF3ZW4zLjgtMjdCLCBEZWVwU2Vlay1WNC4xLUZsYXNoLTEwMTcgYW5kIEtpbWkgSzMuMSBQcm8sIHdpdGggYmVuY2htYXJrcyBhbmQgbWVtb3J5IGJ1ZGdldHMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Jlc3Rfb3Blbl9zb3VyY2Vfc2VsZl9ob3N0ZWRfbGxtc19mb3JfY29kaW5nL2NvZGluZ19sbG1zX25vdmVtYmVyXzIwMjZfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMDMtMjZUMTQ6MTU6MjUrMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yMlQwOTowMDowMCswNTozMCIKfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/coding_llms_november_2026_banner.webp" "November 2026 coding models. Kimi K3.1 Pro scores 46 on the Artificial Analysis Index. Inkling 2 Mini and Qwen3.8-27B both score 20. A second chart compares vendor-reported Terminal-Bench 4.0 results." >}}

On a single 24GB GPU, I'd try **Qwen3.8-27B** first if I already used Ollama. Its default download is 18GB. **Inkling 2 Mini** is the other model I'd test on that card. Its 17.6GB build fits the same budget, and Thinking Machines reports that it solves more repository issues on DeepSWE. Both score 20 on the independent Artificial Analysis Intelligence Index. For an editor or terminal agent, I’d break that tie with a failing test from my own repository. <a href="https://ollama.com/library/qwen3.8:27b" target="_blank">Ollama registry</a> · <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">llama.cpp builds</a> · <a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini" target="_blank">Thinking Machines evaluations</a>.

{{% tldr %}}

1. **One 24GB card:** Qwen3.8-27B has a direct Ollama-to-OpenCode setup. Inkling 2 Mini runs in llama.cpp or MLX. Both carry Apache 2.0 licenses.
2. **A 128GB Mac:** Qwen3.8-Flash-Next can keep 56.1GB of weights in GPU memory and a 38.4GB lookup table on SSD. The particular GGUF build matters.
3. **A shared GPU server:** GLM-5.3-Flash and DeepSeek-V4.1-Flash-1017 have MIT weights. Reflection also publishes Beam under Apache 2.0 with a four-B200 serving recipe.
4. **A large cluster:** Kimi K3.1 Pro leads this shortlist on the independent index. A documented configuration uses eight B300 GPUs. Check Moonshot's license if you're selling inference.

{{% /tldr %}}

## Which coding models fit your hardware?

These are downloadable checkpoints and example configurations checked in November 2026. A file size tells you how much to download. The running server also needs memory for activations and the attention cache (often called the KV cache), which grows as the agent reads files and receives tool output. Two people using a server at once can exhaust memory even when one long session fits.

| Machine or workload | Model and license | What to budget for |
|---|---|---|
| A small GPU, short edits | Qwen2.5-Coder-7B-Instruct, Apache 2.0 | The <a href="https://ollama.com/library/qwen2.5-coder:7b" target="_blank">Ollama download</a> is 4.7GB. Give it a function and its failing test. |
| One 24GB GPU | Inkling 2 Mini or Qwen3.8-27B, both Apache 2.0 | 17.6GB for the Inkling IQ4_NL language weights or 18GB for the Ollama Qwen tag. Leave space for the prompt. |
| 128GB Apple Silicon | Qwen3.8-Flash-Next, Qwen Community License | Atomic Chat's split build takes 94.5GB on disk. The GPU holds 56.1GB of it. |
| A server with 80GB cards | GLM-5.3-Flash, MIT | <a href="https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF" target="_blank">Unsloth's four-bit files</a> span roughly 162-210GB. Three or four cards give different amounts of room for context. |
| A Blackwell server | Beam 1.0, Apache 2.0 | About 280GB of NVFP4 weights. <a href="https://huggingface.co/blog/reflection-beam" target="_blank">Hugging Face recommends four B200s</a> for longer contexts and concurrent requests. |
| A data-center node or cluster | Kimi K3.1 Pro, Moonshot's K3.1-Pro License | The <a href="https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro" target="_blank">vLLM recipe</a> splits one replica across eight B300s, eight MI355Xs, or two four-GPU GB300 trays. |

## What the coding benchmarks measure

Artificial Analysis runs nine evaluations for its **Intelligence Index v5.0.1**. It includes software engineering alongside reasoning and tool use. Among these downloadable models, Kimi K3.1 Pro scores **46**, Tencent Hy4 **35**, DeepSeek-V4.1-Flash-1017 at max effort **33**, GLM-5.3 at max **32**, Qwen3.8-Flash-Next **29**, and Inkling 2 Mini **20**, and Qwen3.8-27B (xhigh) **20**. The published scores describe the evaluated endpoints. A four-bit local copy can behave differently. <a href="https://artificialanalysis.ai/embed/llm-performance-leaderboard" target="_blank">Artificial Analysis leaderboard</a> · <a href="https://artificialanalysis.ai/models/tencent-hy4" target="_blank">Hy4 evaluation</a> · <a href="https://artificialanalysis.ai/models/inkling-2-mini" target="_blank">Inkling evaluation and methodology</a>.

For coding, the choice of test changes the ordering. Terminal-Bench measures whether an agent can finish a task in a shell. DeepSWE measures whether it can fix a repositry issue. Here are the figures in Moonshot's K3.1 Pro release comparison, with a proprietary reference for scale.

| Model | Terminal-Bench 4.0 | DeepSWE v1.1 |
|---|---:|---:|
| Claude Opus 5.5 (hosted reference) | 66.4% | 74.2% |
| Kimi K3.1 Pro | 65.7% | 75.5% |
| DeepSeek-V4.1-Flash-1017 | 42.3% | 77.0% |
| GLM-5.3 | 41.8% | 66.9% |

DeepSeek edges out Kimi on DeepSWE, while Kimi finishes far more terminal tasks. The two labs used different agents on DeepSWE: Moonshot ran Kimi with Claude Code, and DeepSeek ran 1017 with Mini-SWE-V2. Those agents decide how to edit files, retry commands and spend the token budget. Treat the percentages as results for the whole setup. <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro#3-evaluation-results" target="_blank">Moonshot's table and evaluation footnotes</a> · <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank">DeepSeek's evaluation setup</a>.

## October benchmark comparisons

The October 2026 measurements below used the ten-test Artificial Analysis Intelligence Index v4.3.2. Its September revision introduced Terminal-Bench 4.0 and AutomationBench-AA. Read these scores against other rows in the same table. November’s v5.0.1 index above uses a different set of tests.

Claude Opus 5.5 scored 58 and MiMo-V2.6-Pro scored 46 on v4.3.2. The hardware column gives example configurations for the weights. Allow additional memory for the KV cache.

| Model | Params (active) | License | AA v4.3.2 | Example setup |
|---|---|---|---|---|
| Claude Opus 5.5 *(proprietary)* | - | - | **58** | API only |
| MiMo-V2.6-Pro | 1.02T (42B) | MIT | **46** | 8x H200 (~574GB, mostly MXFP4) |
| GLM-5.3 | 744B (40B) | GLM-5.3 License | **45** | 8x H200 (756GB FP8) |
| Kimi K3 | 2.78T (104B) | Kimi K3 License | **44** | 8x GB300 or 8x MI355X (1.56TB MXFP4) |
| GLM-5.3-Flash | 320B (18B) | MIT | **42** | 3-4x 80GB GPUs at 4-bit (162-210GB) |
| Qwen3.8-Max (2.4T-A95B) | 2.4T (95B) | Qwen3.8-Max License | 40 | 8x B300 at NVFP4 (1.32TiB) |
| Qwen3.8-Flash-Next | 125B (6B) + 51B n-gram table | Qwen Community License | 40 | 128GB machine (56GB in GPU memory at 4-bit, n-gram table on SSD) |
| DeepSeek-V4.1-Flash | 552B + 196B Engram (16B) | MIT | 39 | 4x H200 with Engram on CPU (~511GB) |
| MiMo-V2.6-Flash | 309B (15B) | MIT | 38 | 4x H200 (~178GB, mostly MXFP4) |
| DeepSeek-V4-Pro-0813 | 1.6T (49B) | MIT | 36 | 8x H200 (893GB) |
| Qwen3.8-27B | 27B dense | Apache 2.0 | 34 | One 24GB GPU (16-19GB at 4-bit) |
| MiniMax M3 | 428B (23B) | MiniMax Community License | 29 | 4x H100 at 4-bit (213-270GB) |

### Models that fit one GPU or a 128GB machine

If your "server" is a laptop or a desktop Mac short of an Ultra, the ceiling is Apple's: the M5 Max tops out at **128GB of unified memory** in both the MacBook Pro and the Mac Studio. That has to hold the weights plus the KV cache, and by default macOS lets the GPU use only about 75% of it, roughly **96GB**. Same index, so these read directly against the table above.

| Model | Params (active) | ~4-bit memory | AA v4.3.2 |
|---|---|---|---|
| Qwen3.8-Flash-Next | 125B (6B) + n-gram table | 96-114GB (56GB with the table on SSD) | **40** |
| Qwen3.8-27B | 27B dense + vision | 16-19GB | **34** |
| Qwen3.6-27B | 27.8B dense | 18GB | 21 |
| Muse Glimmer 30B | 29.6B dense (incl. vision) | 17GB | 17 |
| Gemma 4 26B-A4B | 26B (4B) | 14-17GB | 17 (est.) |
| Gemma 4 31B | 30.7B dense | 17-20GB | 15 |
| Nemotron 3.5 Lightning | 31.6B (3.6B) | 21-25.5GB | 13 |
| Nemotron 3 Super 120B-A12B | 120.6B (12.7B) | 64-72GB | 13 |
| gpt-oss-120b (high) | 117B (5.1B) | ~63GB | 12 |
| Qwen3-Coder-Next | 79.7B (3B) | 46GB | 9 |

In the October snapshot, Qwen3.8-27B scored 34 to K2 Horizon MoVA 36B-A4B’s 25. GLM-5.3-Flash also fits on a 128GB machine with Unsloth’s 109GB two-bit file, at a cost in quality.

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

DeepSeek-V4.1-Flash scored 90.6 on Terminal-Bench 2.1. In the SWE-Bench Pro v1 column, the 2.4T Qwen3.8-Max scored 67.7 against 61.7 for the much smaller Qwen3.8-27B. These are vendor runs with different agent harnesses. Scale released v2 on September 22, and Qwen used a corrected set of v1 tasks. Check the test version and harness before comparing a result with the <a href="https://labs.scale.com/leaderboard/swe_bench_pro" target="_blank">SEAL leaderboard</a>.

### What LiveBench adds

In the October <a href="https://livebench.ai/#/?cats=Agentic+Coding" target="_blank">LiveBench agentic coding results</a>, September’s DeepSeek-V4.1-Flash scored 77.27 and Claude Opus 5.5 scored 71.72. DeepSeek-V4-Flash-Vision-Exp reached 65.10, Qwen3.8-Max 64.65, Kimi K3 62.17, Qwen3.8-Flash-Next 61.62, Qwen3.8-27B 61.36 and GLM-5.3 60.91. Kimi K3 scored 81.45 in the separate plain coding category.

## Best open source LLMs for coding

The numbered profiles retain the individual checkpoints and their launch results. Unless a different version is named, Intelligence Index scores in these profiles refer to the October **v4.3.2** measurements above.

### 1. MiMo-V2.6-Pro and MiMo-V2.6-Flash (Xiaomi)

{{< image "best_open_source_self_hosted_llms_for_coding/mimo_v2_6_pro.webp" "Hugging Face model page for XiaomiMiMo/MiMo-V2.6-Pro-MOPD, showing the MIT license and 1T parameters" >}}

*Screenshot: huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD, October 2026.*

Xiaomi published **MiMo-V2.6-Pro** and **MiMo-V2.6-Flash** on September 21, 2026, under a plain MIT license with no revenue thresholds. Each comes in two builds: the `-RL` repos from launch day, and improved `-MOPD` repos published on September 27. Both take text, image, video and audio input, with a 1M-token context, up to 128K output tokens, and a hybrid of sliding-window and global attention plus a multi-token prediction drafter for faster decoding.

The Pro is a 1.02T-parameter MoE with 42B active (384 experts, 8 active per token). Its weights, mostly 4-bit MXFP4, total about 574GB, and vLLM's recipe needs at least 680GB of VRAM, with documented configurations of eight H200s or four MI355Xs. It scores **46** on the Intelligence Index, **89.9 on Terminal-Bench 2.1** and 71.9 on DeepSWE. The Flash is 309B with 15B active, about 178GB of weights, and runs on four H200s. It scores 38 on the index and 87.6 on Terminal-Bench 2.1. Neither launch card reported SWE-Bench Pro or SWE-Bench Verified.

These replace April's MiMo-V2.5-Pro, which Artificial Analysis now marks deprecated at 26.

<a href="https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD" target="_blank">MOPD model card</a> · <a href="https://recipes.vllm.ai/XiaomiMiMo/MiMo-V2.6-Pro-RL" target="_blank">vLLM recipe</a>.

### 2. GLM-5.3 and GLM-5.3-Flash (Z.AI)

{{< image "best_open_source_self_hosted_llms_for_coding/glm_5_3.webp" "Hugging Face model page for zai-org/GLM-5.3, showing the GLM-5.3 license and 753B parameters" >}}

*Screenshot: huggingface.co/zai-org/GLM-5.3, October 2026.*

Z.AI announced **GLM-5.3** on August 14 and published the weights on {{< link href="https://huggingface.co/zai-org/GLM-5.3" >}}Hugging Face{{< /link >}} on August 28, after holding them for two weeks of safety evaluation. The base model is unchanged from GLM-5.2 (744B total, 40B active); every gain comes from post-training. Terminal-Bench 3.0 goes from 4.6 to 28.3, DeepSWE v1.1 from 46.2 to 66.9, and the card reports **88.2 on Terminal-Bench 2.1**. It also scores 84.5% on CyberGym, and Z.AI says it found 2,436 vulnerabilities across 269 real-world projects with it.

The default repo is native FP8: 141 safetensors shards, 756GB, which fits eight H200s but not an 8x80GB H100 node (a BF16 copy also exists at about 1.5TB). It has 78 layers, 256 routed experts with 8 active, a 1M-token context, and thinking at three levels that can't be turned off. The **GLM-5.3 License** is MIT-like, except that model-as-a-service operators above $10 billion in revenue must pass a Z.AI security review first.

**GLM-5.3-Flash** is the one most teams can deploy. Released August 26 under **MIT**, it's a 320B MoE with 18B active, the first natively multimodal GLM-5 model, with a 1M-token context. Its hybrid of linear and sparse attention gives a 4.44x smaller KV cache and about 3x less attention compute than GLM-5.3. It scores **42** on the index, 84.3 on Terminal-Bench 2.1 and 63.4 on DeepSWE, at about $0.25 per task on Artificial Analysis's run. The native FP8 weights (328GB) need an 8x80GB node, but a 4-bit build at 162-210GB (Unsloth's `UD-Q4_K_XL` is 200GB) fits three or four 80GB GPUs or a 256GB Mac, and {{< link href="https://unsloth.ai/docs/models/glm-5.3-flash" >}}Unsloth's 2-bit quant{{< /link >}} needs about 115GB. Mainline llama.cpp {{< link href="https://github.com/ggml-org/llama.cpp/pull/27773" >}}merged support{{< /link >}} on September 30.

### 3. Kimi K3 (Moonshot AI)

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k3.webp" "Hugging Face model page for moonshotai/Kimi-K3, showing the kimi-k3 license and 2.8T parameters" >}}

*Screenshot: huggingface.co/moonshotai/Kimi-K3, October 2026.*

Moonshot announced {{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Kimi K3{{< /link >}} on July 16 and published the weights on July 27. At **2.78T total parameters** with 104B active, its architecture includes 896 experts with 16 active per token, 93 layers (69 Kimi Delta Attention plus 24 Gated MLA), a MoonViT-V2 vision encoder and a 1M-token context.

The weights are natively MXFP4 from quantization-aware training, so the 1.56TB download is already the compact form, and vLLM's recipe needs at least eight GB300 or MI355X GPUs, with multiple nodes for production traffic. Unsloth does publish GGUFs, but its recommended 1-bit quant (`UD-IQ1_S`) is still 594GB, and even the smallest file (`UD-Q1_0`) is 466GB. The **Kimi K3 License** permits self-hosting and fine-tuning and exempts internal use, but model-as-a-service operators above $20M in revenue need a separate agreement, and products above 100M monthly users or $20M monthly revenue must show "Kimi K3" in the UI.

Moonshot reports **88.3 on Terminal-Bench 2.1**, 81.2 on FrontierSWE and 67.5 on DeepSWE, with no SWE-Bench Pro number. In October it scored 81.45 on LiveBench coding and 44 on the v4.3.2 index.

#### Kimi K3.1 Pro for long terminal tasks

Kimi K3.1 Pro is the cluster pick when the agent spends most of its time in a shell. Its 65.7% on Terminal-Bench 4.0 is close to the 66.4% Moonshot lists for Claude Opus 5.5. Kimi accepts images, supports 1,048,576 tokens, and activates 104B of its 2.8T parameters per token. The released weights already use MXFP4. vLLM's eight-GPU recipe is a more useful sizing reference than multiplying the active parameter count by four bits. <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro" target="_blank">Kimi K3.1 Pro weights and results</a> · <a href="https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro" target="_blank">vLLM deployment recipe</a>.

Moonshot's license distinguishes an internal coding tool from a service that lets customers control inference. Its separate-agreement clause applies to model-as-a-service businesses once combined revenue with affiliates exceeds $20 million over any consecutive 12 months. The license defines internal use and lists attribution thresholds separately. <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE" target="_blank">Kimi K3.1-Pro License, sections 2-4</a>.

### 4. Qwen3.8-Max (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_max.webp" "Hugging Face model page for Qwen/Qwen3.8-2.4T-A95B, the open weights of Qwen3.8-Max" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-2.4T-A95B, October 2026.*

Alibaba announced Qwen3.8-Max on August 3 and published the weights as {{< link href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B" >}}Qwen3.8-2.4T-A95B{{< /link >}} on August 12, the first time a Qwen-Max-class model has been open-weighted. It's a 2.4T MoE with 95B active (512 experts, 10 routed plus 1 shared per token), a 262K context extensible to about 1M, and always-on thinking you can dial with `reasoning_effort` (`xhigh`, `medium` or `low`).

Its card reports **67.7 on SWE-Bench Pro v1**, with 86.6 on Terminal-Bench 2.1. Two caveats. The open weights are text-only and not the hosted model: Alibaba's API-only Qwen3.8-Max-0902 update scores 45 on the index while the open weights score 40. And the license is a custom one with attribution required above 100M monthly users or $20M monthly revenue, plus a separate license for model-as-a-service or AI coding and office-assistant businesses with more than $50M a year in revenue, including affiliates. BF16 weights are about 4.9TB. vLLM's recipe runs the NVFP4 build (1.32TiB) on eight B300s, or the FP8 build on 16 B300s or 32 H200s.

Alibaba also announced Qwen4-Max on November 16. Its release offers the Max model through QwenCloud's API and Token Plan and describes smaller Qwen4 weights as forthcoming. For a machine that must run offline, the downloadable checkpoint here is Qwen3.8-27B. <a href="https://qwen.ai/blog?id=qwen4-max" target="_blank">Qwen4-Max release announcement</a>.

### 5. DeepSeek-V4.1-Flash and V4-Pro (DeepSeek)

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek_v4_1_flash.webp" "Hugging Face model page for deepseek-ai/DeepSeek-V4.1-Flash, showing the MIT license and the 552B backbone in its introduction" >}}

*Screenshot: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash, October 2026.*

**DeepSeek-V4.1-Flash** (September 10, MIT) is the most unusual design here. It's an encoder-decoder model with a 552B backbone plus 196B of "Engram" memory that can sit in CPU RAM, 384 experts with 6 active, and 8B active parameters during prefill but 16B during decode. It has a 1M-token context and 384K output tokens. DeepSeek reports **90.6 on Terminal-Bench 2.1** (88.0 with the Claude Code harness) and 74.2 on DeepSWE for the September release. It scores 39 on the index. The weights are about 511GB, and vLLM's recipe runs it on eight H200s, or four with Engram offloaded to CPU.

**DeepSeek-V4-Pro-0813** (August 13, MIT) is 1.6T total with 49B active, a 1M context and three effort levels, and DeepSeek's API now speaks the OpenAI Responses API natively. Its card reports 87.9 on Terminal-Bench 2.1 and 62.7 on DeepSWE, and it scores 36 on the index. The often-quoted 80.6 SWE-Bench Verified and 55.4 SWE-Bench Pro come from the April preview, not this build. The official weights are already FP4 experts plus FP8, 893GB in total, with documented configurations of eight H200s or four MI355Xs. On DeepSeek's API, V4-Flash and V4-Flash-Vision-Exp were retired on September 10 and their names now route to V4.1-Flash. If you'd rather keep the older 284B {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" >}}V4-Flash-0731{{< /link >}}, it fits a 128GB machine at 3-bit, as our {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}guide to local LLM tools and models{{< /link >}} explains.

#### DeepSeek-V4.1-Flash-1017 for repository fixes

Use the exact checkpoint name when comparing results. DeepSeek reports that the October 17 weights raised Terminal-Bench 4.0 from 31.2% to 42.3% and DeepSWE v1.1 from 74.2% to 77.0% over the September Flash release. Both weights and code carry the MIT license. The release supplies a reference encoder for tool calls and reasoning history. An inference server needs support for that format to return tool calls your agent can use. <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank">DeepSeek checkpoint, results and prompt encoding</a>.

One useful deployment choice is where to put the Engram lookup tables. vLLM documents a four-H200 configuration that puts them in pinned host RAM. That frees GPU memory for concurrent requests, provided the host has the RAM and the GPUs support unified virtual addressing. <a href="https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4.1-Flash" target="_blank">vLLM hardware recipes</a> · <a href="https://docs.vllm.ai/en/v0.32.0/features/engram/" target="_blank">Engram offload documentation</a>.

### 6. Qwen3.8-Flash-Next (Alibaba) - best for a 128GB machine

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_flash_next.webp" "Hugging Face model page for Qwen/Qwen3.8-Flash-Next, showing the qwen-community-1.0 license" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-Flash-Next, October 2026.*

{{< link href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next" >}}Qwen3.8-Flash-Next{{< /link >}} (August 26) is Alibaba's preview of the Qwen4 architecture: 125B parameters with 6B active, plus a 51B n-gram embedding table that can be offloaded to RAM or SSD, Gated DeltaNet with Qwen Sparse Attention, native image input, and a 262K context extensible to 1M. Thinking can be turned off, unlike on Max.

It scores **40** on the index, level with Qwen3.8-2.4T-A95B, the open weights behind Qwen3.8-Max, with **62.5 on SWE-Bench Pro** and 91.9 on LiveCodeBench v6. Read the **Qwen Community License** first: attribution is required above 100M monthly users or $20M monthly revenue, and any company (or affiliate) that runs a model-as-a-service or "AI work assistant" (AI coding or office-productivity) business needs a separate license before commercial use, regardless of size. Purely internal use, with nothing exposed to third parties, is exempt.

On a Mac, pick the GGUF carefully. Unsloth's {{< link href="https://unsloth.ai/docs/models/qwen3.8-next" >}}guide{{< /link >}} puts the 4-bit quant at 96-114GB, which is at or over the roughly 96GB that macOS lets the GPU use on a 128GB machine. {{< link href="https://huggingface.co/AtomicChat/Qwen3.8-Flash-Next-GGUF" >}}Atomic Chat's build{{< /link >}} keeps the 38GB n-gram table on SSD instead, so its 4.27bpw quant holds only 56GB in GPU memory, with room left for long context or a second model. Its 3.84bpw build even runs on a 64GB Mac, at a real quality cost. The [setup section below](#running-qwen38-flash-next-on-a-128gb-mac) explains why this works and has the commands.

### 7. Qwen3.8-27B (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_27b.webp" "Hugging Face model page for Qwen/Qwen3.8-27B, showing the Apache 2.0 license" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-27B, October 2026.*

For anyone without a GPU server, this is the most important model here. Alibaba published {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B" >}}Qwen3.8-27B{{< /link >}} on August 14 under **Apache 2.0**. It's a 27B dense vision-language model with 64 layers (repeating three Gated DeltaNet blocks and one gated attention block) and a 262K context extensible to about 1M.

The coding numbers are the point: **61.7 on SWE-Bench Pro**, 73.0 on Terminal-Bench 2.1, 90.3 on LiveCodeBench v6 and 42.2 on DeepSWE, more than three times Qwen3.6-27B's 13.3. SWE-Bench Pro and DeepSWE were run with the Claude Code harness, and Terminal-Bench with Terminus. It scores 34 on the index, first in the October sample of 142 models in its size class and well ahead of Qwen3.6-27B (21).

It needs 16-19GB at 4-bit (a single 24GB card like an RTX 4090, or a 24GB Mac), about 31GB at FP8 and 56GB at BF16, and the default Ollama tag is an 18GB download. The real complaint is verbosity. Artificial Analysis measured it at 47.8 output tokens/s against 222.8 for DeepSeek-V4-Flash-0731, and it took about six times longer to finish the index. Turn reasoning effort down for interactive edits and keep it high for agent runs. If you want a coding specialist instead, Qwen3-Coder-Next (80B, 3B active, 46GB at 4-bit) is fast, but it scores far lower on the October v4.3.2 index (9).

### 8. MiniMax M3 (MiniMax)

{{< image "best_open_source_self_hosted_llms_for_coding/minimax_m3.webp" "Hugging Face model page for MiniMaxAI/MiniMax-M3, showing the minimax-community license and 427B parameters" >}}

*Screenshot: huggingface.co/MiniMaxAI/MiniMax-M3, October 2026.*

{{< link href="https://huggingface.co/MiniMaxAI/MiniMax-M3" >}}MiniMax M3{{< /link >}} shipped on June 1, with weights on Hugging Face by June 12. It's a 428B MoE with 23B active, a 1M-token context and native image and video input, built around MiniMax Sparse Attention (MSA), which reads each KV cache block only once. MiniMax reports 59.0 on SWE-Bench Pro, 66.0 on Terminal-Bench 2.1 and 74.2 on MCP-Atlas, and it scores 29 on the index.

Two things to know. Unsloth's 4-bit GGUFs need 213-270GB, so plan on four H100s, and they're text-only with dense attention because llama.cpp doesn't implement MSA. And the **MiniMax Community License** is restrictive: the base grant is non-commercial, commercial use needs a "Built with MiniMax M3" notice and a one-time notice to MiniMax, and products above $20M a year need written authorization.

#### MiniMax-M3.1-Flash

Useful if the same agent reads screenshots and edits code. MiniMax reports 73.7% on DeepSWE v1.1. Check the MiniMax Community License and the runtime's sparse attention support before sizing a deployment. <a href="https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash" target="_blank">MiniMax results and serving guide</a>.

### 9. Muse Glimmer 30B (Meta)

{{< image "best_open_source_self_hosted_llms_for_coding/muse_glimmer_30b.webp" "Hugging Face model page for meta-models/Muse-Glimmer-30B, showing the Apache 2.0 license and model card" >}}

*Screenshot: huggingface.co/meta-models/Muse-Glimmer-30B, October 2026.*

Meta Superintelligence Labs released {{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}Muse Glimmer{{< /link >}} on August 10: a 29.6B dense multimodal model (including a 1.8B vision encoder) under **Apache 2.0**, with 52 layers and a 131K context. The BF16 weights are about 60GB, and Meta's K-Quant builds bring it under 20GB with 0.2-1.0% degradation, so it fits a 24GB card.

Meta's own numbers are strong on tool use: **75.5 on MCP Atlas** against Qwen3.6-27B's 62.5, close to GLM-5.2's 76.8 at 744B parameters, plus 51.2 on SWE-Bench Pro. Independent results are weaker. It scores 17 on the October v4.3.2 index, behind Qwen3.6-27B at 21, and Artificial Analysis's launch review called agentic knowledge work "its weakness relative to its size class". Qwen3.8-27B, released four days later, beats it on every benchmark both report. What's left is MCP Atlas and **DFlash**, a block-diffusion speculative decoder that Meta measured going from 74.9 to 233.4 tokens/s on an RTX 5090 with identical output. It runs in Ollama, LM Studio, llama.cpp, MLX, vLLM and SGLang.

### 10. Nemotron 3.5 Lightning (NVIDIA)

{{< image "best_open_source_self_hosted_llms_for_coding/nemotron_3_5_lightning.webp" "Hugging Face model page for NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, showing the OpenMDW-1.1 license and an accuracy chart" >}}

*Screenshot: huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, October 2026.*

NVIDIA shipped {{< link href="https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch" >}}Nemotron 3.5 Lightning{{< /link >}} on August 11: a Mamba-2, MoE and attention hybrid with 31.6B total and 3.6B active parameters by Artificial Analysis's count (NVIDIA rounds to 30B and 3B), distilled from Nemotron 3 Ultra, with up to 1M tokens of context. It ships under **OpenMDW-1.1** with weights, training data and recipes all released.

It doesn't compete with Qwen3.8-27B on capability. It scores 13 on the index, level with Nemotron 3 Super and above gpt-oss-120b (12), and NVIDIA reports 51.56 on SWE-bench Verified. Throughput is the pitch: Artificial Analysis measured nearly **670 tokens/s** on the NVFP4 weights at launch. Its 4-bit builds are 21-25.5GB on disk. For a high-volume pipeline (batch refactors, test generation, log triage) that tradeoff can be right; for anything that needs to think, it isn't.

### 11. Mistral Medium 3.5 and Devstral Small 2 (Mistral AI)

{{< image "best_open_source_self_hosted_llms_for_coding/mistral_medium_3_5.webp" "Hugging Face model page for mistralai/Mistral-Medium-3.5-128B, which says it replaces Devstral 2 in Vibe" >}}

*Screenshot: huggingface.co/mistralai/Mistral-Medium-3.5-128B, October 2026.*

Mistral's coding line has consolidated. {{< link href="https://huggingface.co/mistralai/Mistral-Medium-3.5-128B" >}}Mistral Medium 3.5{{< /link >}} (April 2026) is a 128B dense model under a modified MIT license with a 256K context and 77.6% on SWE-bench Verified, and its card says it supersedes Devstral and replaces Devstral 2 in Vibe CLI, Mistral's open-source terminal coding agent. It needs about 80GB at 4-bit but scores only 14 on the October v4.3.2 index.

The smaller sibling is why Mistral stays on this list. **Devstral Small 2** (24B, Apache 2.0, December 2025) scores 68.0% on SWE-bench Verified, takes image input, has a 256K context and runs on a single RTX 4090 or a 32GB Mac. Qwen3.8-27B beats it at a similar footprint, but Devstral Small 2 with Vibe CLI is a ready-made workflow.

#### Mistral Large 4

Large 4 has downloadable 1T-class weights under Mistral's Ecosystem Open-Weight License. For a developer using Vibe locally, Devstral Small 2 is the 24B Apache 2.0 alternative. <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank">Large 4</a> · <a href="https://huggingface.co/mistralai/Devstral-Small-2-24B-Instruct-2512" target="_blank">Devstral Small 2</a>.

### 12. Inkling 2 Mini for repository edits

Thinking Machines released **Inkling 2 Mini** on November 20 under Apache 2.0. It stores 24 layers and visits the middle 12 three times for each token. That gives it 48 layer evaluations while reusing the same weights. Each pass still needs its own cache. On a 24GB card, budget for the context length you actually use before planning around the model's advertised million tokens. <a href="https://huggingface.co/blog/inkling2mini" target="_blank">Hugging Face launch and runtime guide</a> · <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">llama.cpp conversion notes</a>.

{{< image "best_open_source_self_hosted_llms_for_coding/inkling_2_mini_gguf_sizes.webp" "Inkling 2 Mini language-weight downloads by format: IQ4_NL 17.6 GB, Q8_0 27.8 GB and BF16 52.2 GB." >}}

*Source: <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">ggml-org's file table</a>. For image input, download the vision projector as well.*

Thinking Machines reports **48.2% on DeepSWE v1.1** for Mini against **42.2% for Qwen3.8-27B**. On Terminal-Bench 4.0 its table gives them both **5.6%**. If your day is mostly fixing failing tests, Mini is worth the download. For setup, use a llama.cpp build with Inkling 2 Mini support and select the IQ4_NL file. The same GGUF repository lists **27.8GB** for Q8_0 and **52.2GB** for BF16. Apple Silicon users can also load the original mixed-precision checkpoint with MLX. <a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini#5-evaluations" target="_blank">Thinking Machines model card</a> · <a href="https://huggingface.co/blog/inkling2mini" target="_blank">Runtime examples</a>.

### 13. Reflection Beam when you need Apache 2.0

Beam 1.0 is downloadable in BF16, FP8 and NVFP4. It reads text, routes each token through 23B active parameters and stores 501B parameters overall. The NVFP4 checkpoint is about 280GB. Two B200s can hold the weights, but Hugging Face recommends four if developers will share the server or run long sessions. On Hopper, its example uses the FP8 checkpoint on eight H200s. Reflection also ships the coding harness it used with Beam, which gives teams a starting point for reproducing the setup. <a href="https://huggingface.co/reflection/Beam-1.0-501B-A23B" target="_blank">Reflection model card and weights</a> · <a href="https://huggingface.co/blog/reflection-beam" target="_blank">Hardware and inference recipes</a>.

Reflection reported 65.5 on SWE-Bench Pro and 80.1 on Terminal-Bench 2.1 in its <a href="https://reflection.ai/blog/introducing-beam" target="_blank">release announcement</a>.

### 14. Tencent Hy4

A candidate for frontend work that takes screenshots as input. Tencent's November release includes instruction-tuned and base weights. For an agent, start with the instruction-tuned checkpoint. The FP8 model includes a 770B language backbone and a speculative decoding drafter under the Tencent Hy License. <a href="https://huggingface.co/tencent/Hy4-FP8" target="_blank">Tencent model card and deployment docs</a>.

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

## How to use these models with a coding agent

The quickest local setup is {{< link href="https://opencode.ai" >}}OpenCode{{< /link >}}, an open-source terminal coding agent, with {{< link href="https://ollama.com" >}}Ollama{{< /link >}} serving the model. The commands below follow the <a href="https://docs.ollama.com/integrations/opencode" target="_blank">Ollama integration guide</a>. These are documented configurations. We did not run local inference or measure GPU memory for this comparison.

**1. Install Ollama**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

{{< image "best_open_source_self_hosted_llms_for_coding/install_ollama.webp" "install ollama" >}}

**2. Install OpenCode**

```bash
curl -fsSL https://opencode.ai/install | bash
```

{{< image "best_open_source_self_hosted_llms_for_coding/install_opencode.webp" "install opencode" >}}

**3. Give the model enough context**

OpenCode needs at least 64K tokens of context, and Ollama's default is smaller on most consumer GPUs: 4K under 24GiB of VRAM and 32K up to 48GiB. Set the context length in the Ollama app, or stop the existing server and restart it with a larger window. <a href="https://docs.ollama.com/context-length" target="_blank">Ollama context settings</a>.

```bash
OLLAMA_CONTEXT_LENGTH=64000 ollama serve
```

**4. Launch OpenCode through Ollama**

In a second terminal:

```bash
ollama launch opencode --model qwen3.8:27b
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode.webp" "opencode" >}}

With the model loaded, run `ollama ps` in another terminal. The `CONTEXT` column shows the allocated window. A CPU/GPU split under `PROCESSOR` means some weights are running on the CPU. If edits feel slow, check that split before changing the prompt.

On an Apple Silicon Mac, use the `qwen3.8:27b-mlx` tag (also 18GB), which runs on Apple's MLX backend. Then open your repository and use it like any other terminal coding agent. Qwen3.8-27B thinks a lot by default, so if interactive edits feel slow, lower the reasoning effort for chat and keep it high for long agent runs.

## Running Qwen3.8-Flash-Next on a 128GB Mac

Ollama is the easy path for Qwen3.8-27B. Flash-Next on a Mac takes more care, because of a limit Apple's spec sheet doesn't mention: macOS doesn't give the GPU all of unified memory. By default it can wire about 75%, roughly 96GB on a 128GB machine. Check yours (`0` means the default is in force):

```bash
sysctl iogpu.wired_limit_mb
```

A standard 4-bit Flash-Next GGUF needs 96-114GB, so it sits at or over that line before you add any KV cache. You can raise the limit with `sudo sysctl iogpu.wired_limit_mb=<MB>`, which lasts until the next reboot (our {{< link href="/blog/self_hosting_llms_on_512gb_m5_ultra_mac_studio/" >}}512GB Mac Studio post{{< /link >}} covers how much to leave macOS), but on a 128GB machine that leaves very little for context. There's a better option.

### Keep the n-gram table on SSD

The 51B n-gram table is a lookup, not a matrix multiply. Each token hashes its last three tokens and reads 16 rows, about 2.7KB, so the table can stay on disk and get paged in on demand. Common n-grams can stay in the page cache. llama.cpp memory-maps GGUF files by default, so in principle it already works this way. The catch, per {{< link href="https://huggingface.co/AtomicChat/Qwen3.8-Flash-Next-GGUF" >}}Atomic Chat's model card{{< /link >}}, is that Metal wires the entire mapped region of any shard that holds a GPU tensor, so a table sharing a shard with other weights gets pinned into GPU memory along with them. Atomic Chat's "AD" builds put the table alone in its own shard, so Metal can leave it on disk. Download all three files of the selected build together. The first two hold the weights and the third holds the lookup table.

| Build | GPU memory | On SSD | Mean KLD | Same top-1 token |
|---|---|---|---|---|
| `AD-3.84bpw-IQ4_XS-M64` | 45.8GB | 39.1GB | 0.2277 | 82.68% |
| `AD-4.27bpw-Q4_K_M-M64` | **56.1GB** | 38.4GB | **0.0842** | **89.49%** |
| `AD-5.00bpw-Q5_K_M-M64` | 56.1GB | 54.4GB | 0.0837 | 89.55% |

Get the 4.27bpw build. It matches the 5.00bpw build within measurement error, and at 56GB it leaves about 40GB under the default limit, so you don't have to touch the sysctl at all. Two caveats on the names. The bpw figure averages the whole file, and the Q5_1 n-gram table is 41% of it, so the expert weights in GPU memory are at 2.5 to 4.5 bits; the KLD column is the quality number to trust. And the 3.84bpw build is the one that gets Flash-Next onto a 64GB Mac (Atomic Chat measured 36 tokens/s on a 64GB M5 Max, and {{< link href="https://lilting.ch/en/articles/qwen38-flash-next-llamacpp-m1max-test" >}}an independent test{{< /link >}} got 17.6 tokens/s on a 64GB M1 Max), but most of its expert weights are at 1.75 bits and its KLD is 2.7 times higher. Mainline llama.cpp has supported the architecture since August 27 ({{< link href="https://github.com/ggml-org/llama.cpp/pull/27742" >}}PR #27742{{< /link >}}). Leave mmap on, which is the default, since that's what makes the table pageable.

### Add a small model next to it

That headroom is enough for a second model, and a good way to use it is to pair Flash-Next as the workhorse with {{< link href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF" >}}Gemma 4 26B-A4B{{< /link >}} for quick jobs and images. Gemma is a mixture-of-experts model with about 4B active parameters, and Unsloth's QAT build is 14.2GB.

| Model | Build | GPU memory |
|---|---|---|
| Qwen3.8-Flash-Next | Atomic Chat `AD-4.27bpw-Q4_K_M-M64`, table on SSD | 56.1GB |
| Gemma 4 26B-A4B | Unsloth QAT `UD-Q4_K_XL` | 14.2GB |
| **Total weights** | | **~70GB of the ~96GB default** |

OpenCode already splits work this way. Its `small_model` option handles lightweight calls like session titles, and without one those go to your main model, where they compete with the agent turn you're waiting on. Start each server in its own terminal. Download the matched Flash-Next shards into the working directory first. The server aliases below match the model IDs in OpenCode.

```bash
hf download AtomicChat/Qwen3.8-Flash-Next-GGUF \
  --include "Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-*.gguf" --local-dir .
llama-server -m Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-00001-of-00003.gguf \
  --jinja -ngl 99 -c 65536 -fa on -fit off --alias flash-next --port 8080

# In a second terminal
llama-server -hf unsloth/gemma-4-26B-A4B-it-qat-GGUF:UD-Q4_K_XL \
  --jinja -ngl 99 -c 32768 --alias gemma-4-26b --port 8081
```

Flash-Next needs `--jinja` (without it, turns can come out malformed) and `-fit off`, because llama.cpp's automatic memory fitting fails on this architecture. The card doesn't publish KV cache sizes and its own examples stop at 32K, so watch memory pressure in Activity Monitor the first time you push a session toward OpenCode's 64K window. Then point OpenCode at both servers in `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "mac": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Flash-Next on this Mac",
      "options": { "baseURL": "http://localhost:8080/v1" },
      "models": { "flash-next": { "name": "Qwen3.8-Flash-Next" } }
    },
    "mac-small": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Gemma on this Mac",
      "options": { "baseURL": "http://localhost:8081/v1" },
      "models": { "gemma-4-26b": { "name": "Gemma 4 26B-A4B" } }
    }
  },
  "model": "mac/flash-next",
  "small_model": "mac-small/gemma-4-26b"
}
```

The tradeoff is 14GB that Flash-Next could spend on context, so if long sessions start to squeeze, drop Gemma first. You don't need it for images, either: Flash-Next reads them itself through the 0.9GB `mmproj-Qwen3.8-Flash-Next-F16.gguf` projector in the same repo. And if you'd rather skip the terminal, the {{< link href="https://atomic.chat/" >}}Atomic Chat{{< /link >}} desktop app runs the same builds.

## Running the model on a GPU box and coding from your laptop

A common setup is a workstation with the GPU at home or in the office and a laptop everywhere else. Ollama only listens on localhost, and it rejects requests whose `Host` header isn't a local name, so a plain tunnel gets `403 Forbidden`. A [Pinggy](https://pinggy.io/) tunnel can rewrite the header and require a key. Choose a random secret, replace `YOUR_RANDOM_KEY` in both examples, then run this on the GPU machine.

```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io -T -- "u:Host:localhost:11434" "k:YOUR_RANDOM_KEY"
```

It prints public HTTPS URLs such as `https://<random>.run.pinggy-free.link`, and requests without `Authorization: Bearer YOUR_RANDOM_KEY` get a `401`. OpenAI-compatible clients send exactly that header with their API key, so on the laptop point your private OpenCode config at the printed URL, set the same key, and select the remote model.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "gpubox/qwen3.8:27b",
  "provider": {
    "gpubox": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama on my GPU box",
      "options": {
        "baseURL": "https://<random>.run.pinggy-free.link/v1",
        "apiKey": "YOUR_RANDOM_KEY"
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

## Try one issue before standardizing on a model

Pick a bug you have already fixed and check out the commit just before the fix in a disposable worktree. Give each model the issue description, the same tools and the same time budget. Keep the regression test out of its prompt. After each run, apply the test and inspect the diff. Record whether the fix passes, how long it took, and whether you had to steer the agent. On a 24GB machine, that gives you a reason to keep Inkling or Qwen even when their index scores tie.

## Conclusion

On a 24GB GPU, start with Qwen3.8-27B if you already use Ollama or want to give the agent a screenshot. Try Inkling 2 Mini alongside it if most of your work involves fixing failing tests. On a 128GB Mac, the split build of Qwen3.8-Flash-Next lets you keep its n-gram table on SSD and leave GPU memory available for longer prompts.

For a shared server with three or four 80GB GPUs, GLM-5.3-Flash is a practical option. If you have the eight-GPU setup for Kimi K3.1 Pro, its terminal results make it worth testing on longer shell tasks. In either case, run a typical issue with the tools and context your team uses. A patch that passes review within your time and memory budget is the result that matters.
