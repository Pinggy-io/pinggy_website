---
title: "Best Open Source LLMs for Coding to Self-Host in 2026"

description: "Compare open-weight coding LLMs for a 24GB GPU, a 128GB Mac or a GPU cluster. Top picks include Kimi K3.1 Pro, Hy4, DeepSeek-V4.1-Flash-1017, Inkling 2, Qwen3.8-27B and Nanbeige4.3-33B, with AA v5.0.2 scores and memory math."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-11-25T09:00:00+05:30
draft: false
tags: ["open source LLM", "self-hosted AI", "local LLM", "AI coding agents", "open source"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/open_coding_llms_nov_2026_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkJlc3QgT3BlbiBTb3VyY2UgTExNcyBmb3IgQ29kaW5nIHRvIFNlbGYtSG9zdCBpbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiQ29tcGFyZSBvcGVuLXdlaWdodCBjb2RpbmcgTExNcyBmb3IgYSAyNEdCIEdQVSwgYSAxMjhHQiBNYWMgb3IgYSBHUFUgY2x1c3Rlci4gVG9wIHBpY2tzIGluY2x1ZGUgS2ltaSBLMy4xIFBybywgSHk0LCBEZWVwU2Vlay1WNC4xLUZsYXNoLTEwMTcsIElua2xpbmcgMiwgUXdlbjMuOC0yN0IgYW5kIE5hbmJlaWdlNC4zLTMzQiwgd2l0aCBBQSB2NS4wLjIgc2NvcmVzIGFuZCBtZW1vcnkgbWF0aC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYmVzdF9vcGVuX3NvdXJjZV9zZWxmX2hvc3RlZF9sbG1zX2Zvcl9jb2Rpbmcvb3Blbl9jb2RpbmdfbGxtc19ub3ZfMjAyNl9iYW5uZXIud2VicCIsCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0wMy0yNlQxNDoxNToyNSswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTI1VDA5OjAwOjAwKzA1OjMwIgp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/open_coding_llms_nov_2026_banner.webp" "Two bar charts of open-weight coding models: the Artificial Analysis Intelligence Index v5.0.2, where Kimi K3.1 Pro leads at 47, and Artificial Analysis's Terminal-Bench 4.1 run, with Claude Opus 5.5 as a hosted reference" >}}

Self-hosting a coding model is mostly a memory problem. The weights have to fit, and so does everything the agent piles into its context while it reads files, runs tests and reads the output back.

The strongest downloadable model on the Artificial Analysis Intelligence Index v5.0.2 is **Kimi K3.1 Pro** at 47, against 59 for Claude Opus 5.5 at max effort. It needs eight Blackwell GPUs. On a single 24GB card the race is closer: Qwen3.8-27B, Inkling 2 Mini and Nanbeige4.3-33B all score 20. Nanbeige finishes 29% of Terminal-Bench 4.1 tasks in Artificial Analysis's run and the other two finish 6%, but its KV cache is more than three times bigger, so on that card it gets half the context.

I checked every model below against its Hugging Face card, the <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank">Artificial Analysis leaderboard</a> and the <a href="https://www.tbench.ai/leaderboard" target="_blank">Terminal-Bench 4.1 leaderboard</a>. I didn't run local inference for this comparison. Memory figures come from file sizes and from each model's `config.json`.

{{% tldr %}}

1. **One 24GB GPU:** Qwen3.8-27B is the easy pick. Its 18GB Ollama build plus 64K tokens of KV cache comes to about 22GB, under Apache 2.0.
2. **A 32GB card or a 32GB Mac:** add Nanbeige4.3-33B for shell-heavy agent work, or Inkling 2 Mini for repository fixes. Both are Apache 2.0.
3. **A 128GB Mac:** Qwen3.8-Flash-Next with Atomic Chat's split GGUF keeps 56GB in GPU memory and a 38GB lookup table on SSD.
4. **A shared GPU server:** GLM-5.3-Flash (MIT) fits three or four 80GB cards at 4-bit. Inkling 2 Small (Apache 2.0) and DeepSeek-V4.1-Flash-1017 (MIT) fit four H200s.
5. **An eight-GPU node:** Kimi K3.1 Pro leads every open model on the index and on Terminal-Bench, with Tencent Hy4 second. Both licenses add terms for large API resellers.

{{% /tldr %}}

## Which coding models fit your hardware?

A file size tells you how much to download. The running server also needs room for the KV cache (the attention keys and values for every token in context), which grows as the agent reads files and gets tool output back. Ollama multiplies the context by the number of parallel requests, so two people sharing one server need twice the cache.

| Machine | Model and license | What to budget for |
|---|---|---|
| One 24GB GPU | Qwen3.8-27B, Apache 2.0 | 18GB <a href="https://ollama.com/library/qwen3.8/tags" target="_blank">Ollama download</a>, plus about 4.3GB of KV cache at 64K tokens. |
| A 32GB GPU or Mac | Inkling 2 Mini or Nanbeige4.3-33B, both Apache 2.0 | 17.6GB and 18.6GB at 4-bit. Thinking Machines recommends 32GB for Inkling, and Nanbeige's cache is about 14GB at 64K. |
| 128GB Apple Silicon | Qwen3.8-Flash-Next, Qwen Community License | Atomic Chat's split build holds 56.1GB in GPU memory and leaves a 38.4GB table on SSD. |
| Three or four 80GB GPUs | GLM-5.3-Flash, MIT | <a href="https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF" target="_blank">Unsloth's 4-bit files</a> run 157-200GB. |
| Four H200s or two B300s | Inkling 2 Small (Apache 2.0) or DeepSeek-V4.1-Flash-1017 (MIT) | 394GB of NVFP4 weights for Inkling, 510GB for DeepSeek with its Engram tables in host RAM. |
| One eight-GPU node | Tencent Hy4 (Tencent Hy License) or Kimi K3.1 Pro (Kimi K3.1-Pro License) | About 944GB of GPU memory for Hy4-FP8. Kimi's 1.56TB of MXFP4 weights run on eight B300s or two GB300 trays. |

### How much context fits on a 24GB card

You can estimate the KV cache from a model's `config.json`: 2 (keys and values) x attention layers x KV heads x head dimension x 2 bytes at FP16, for every token. OpenCode wants at least 64K tokens of context, so that's the budget I used.

Qwen3.8-27B is cheap here because only 16 of its 64 layers use full attention. The other 48 are Gated DeltaNet layers, which keep a fixed-size state no matter how long the context gets. With 4 KV heads of 256 dimensions, that's 64KiB per token, or 4.3GB at 64K. Devstral Small 2 has 40 ordinary attention layers with 8 KV heads of 128, so 160KiB per token and 10.7GB. Nanbeige4.3-33B is a plain Llama architecture with 52 layers, which works out to 208KiB per token and 14.0GB.

{{< image "best_open_source_self_hosted_llms_for_coding/kv_cache_24gb_card.webp" "Stacked bar chart of 4-bit weights plus FP16 KV cache at 64K tokens: Qwen3.8-27B 18GB plus 4.3GB, Devstral Small 2 15GB plus 10.7GB, Nanbeige4.3-33B 18.6GB plus 14.0GB, against the 25.8GB of a 24GiB card" >}}

*Weights: Ollama and bartowski GGUF file sizes. KV cache: computed from each model's `config.json`. Compute buffers and the vision projector are extra.*

A "24GB" RTX 4090 holds 24GiB, about 25.8GB, and the driver and compute buffers take a slice of that. Qwen fits with room to spare. Devstral at 25.7GB doesn't. Setting `OLLAMA_KV_CACHE_TYPE=q8_0` halves the cache, which brings Devstral to 20.4GB, but Nanbeige still needs 25.6GB at 64K. On a 24GB card, run it at 32K (22.1GB with a q8 cache), or give it a 32GB card. Inkling 2 Mini is harder to estimate by hand. Most of its layers use 1,024-token sliding windows, so the cache grows slowly, but its looped layers each keep their own cache, and the <a href="https://huggingface.co/blog/inkling2mini" target="_blank">Hugging Face launch post</a> says the 17.6GB IQ4_NL file "fits in 32 GB of GPU RAM or unified memory".

## What the benchmarks say

Artificial Analysis averages nine evaluations into its <a href="https://artificialanalysis.ai/methodology/intelligence-benchmarking" target="_blank">Intelligence Index v5.0.2</a>, in four equally weighted groups. The coding group is FrontierCode-AA 2.0 (15%) and Terminal-Bench 4.1 (10%). Version 5.0.2 swapped Terminal-Bench 4.0 for 4.1, which keeps the same 66 tasks with stricter verifiers, and regraded FrontierCode for every model. Scores from the v4.x index sit on a different scale. Qwen3.8-27B showed 34 on v4.3.2 and shows 20 on v5.0.2, so never compare an old screenshot with a current one.

The table lists Artificial Analysis's own runs at each model's highest reasoning setting.

| Model | Index v5.0.2 | Terminal-Bench 4.1 | FrontierCode-AA 2.0 |
|---|---:|---:|---:|
| Claude Opus 5.5, max *(hosted reference)* | 59 | 59.1% | 46.9% |
| Kimi K3.1 Pro | **47** | **68.2%** | 25.5% |
| Tencent Hy4 | 35 | 37.9% | **31.2%** |
| DeepSeek-V4.1-Flash-1017 | 32 | 32.3% | 28.2% |
| GLM-5.3 | 32 | 40.9% | 21.6% |
| Inkling 2 Small | 31 | 13.6% | 25.4% |
| MiMo-V2.6-Pro | 30 | 35.4% | 24.0% |
| MiniMax-M3.1-Flash | 29 | 25.8% | 20.8% |
| Qwen3.8-Flash-Next | 28 | 24.2% | 27.1% |
| GLM-5.3-Flash | 28 | 32.8% | 17.2% |
| MiMo-V2.6-Flash | 27 | 23.7% | 21.6% |
| Mistral Large 4 | 26 | 24.7% | 15.0% |
| Nanbeige4.3-33B | 20 | 29.3% | 10.7% |
| Inkling 2 Mini | 20 | 5.6% | 15.1% |
| Qwen3.8-27B | 20 | 5.6% | 14.9% |
| MiniMax-M3 | 19 | 2.0% | 23.0% |
| Beam 1.0 | 18 | 3.0% | 5.1% |

Kimi K3.1 Pro beats Opus 5.5 on Terminal-Bench in this run and trails it badly on FrontierCode, so "best" depends on whether your agent lives in a shell or in a large codebase. Three more open models score near the middle of the table but don't get sections below: InclusionAI's Ling 3.1 Flash 1019 (30, MIT, 560B), StepFun's Step 5 Preview (29) and Meta's gated Muse Spark Open (25). Each needs 530GB or more of weights.

### Vendor tests and the agent harness

Lab-reported numbers are useful when one table runs every model through the same harness. Thinking Machines' cards report DeepSWE v1.1 with mini-swe-agent for everyone: DeepSeek-V4.1-Flash-1017 77.0%, MiniMax-M3.1-Flash 73.7%, Inkling 2 Small 72.1%, MiMo-V2.6-Pro 71.9%, GLM-5.3 69.0%, Kimi K3 68.5%, Inkling 2 Mini 48.2% and Qwen3.8-27B 42.2%. On the public Terminal-Bench 4.1 leaderboard, where each entry picks its own agent, Kimi K3.1 Pro with Claude Code scores 59.7% against 65.8% for Opus 5.5. That's lower than its 68.2% in Artificial Analysis's run, which tells you how much the harness moves these numbers.

I left SWE-Bench Pro out. Scale moved it to a <a href="https://huggingface.co/datasets/ScaleAI/SWE-bench_Pro" target="_blank">642-task V2 dataset</a>, most model cards still quote the 731-task v1 set, and Scale's public leaderboard doesn't list the current open models.

## Best open source LLMs for coding

The order roughly follows the index. Scores are Artificial Analysis v5.0.2 unless a lab is named.

### 1. Kimi K3.1 Pro (Moonshot AI)

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k3_1_pro.webp" "Hugging Face model page for moonshotai/Kimi-K3.1-Pro, showing the kimi-k3.1-pro license and 2.8T parameters" >}}

*Screenshot: huggingface.co/moonshotai/Kimi-K3.1-Pro.*

Moonshot's <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro" target="_blank">Kimi K3.1 Pro</a> is post-trained from Kimi K3 and keeps its shape: 2.8T total parameters, 104B active, 896 experts with 16 per token, image input and a 1,048,576-token context. One change matters for long agent sessions: the 24 full-attention Gated MLA layers became Gated DeepSeek Sparse Attention layers. The weights come out of quantization-aware training as MXFP4, so the 1.56TB download is already the small version.

It scores **47**, the highest open-weight result, and 68.2% on Artificial Analysis's Terminal-Bench 4.1 run. The <a href="https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro" target="_blank">vLLM recipe</a> runs one tensor-parallel group of eight GPUs on a B300 node, two GB300 trays or an MI355X node, and it needs a vLLM 0.35.0 nightly or the `vllm/vllm-openai:kimi-k31` image, with `--tool-call-parser kimi_k3 --reasoning-parser kimi_k3`. If you write your own agent loop, pass the whole assistant message back each turn, including `reasoning_content`; the card says multi-turn tool use depends on it.

The <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE" target="_blank">Kimi K3.1-Pro License</a> is MIT-style with two additions. A model-as-a-service business whose revenue with affiliates passes $20 million over 12 months needs a separate agreement, and products above 100 million monthly users or $20 million monthly revenue must show "Kimi K3.1-Pro" in the UI. Internal use is exempt. The older Kimi K3 has the same footprint and scores 23.0% on the public Terminal-Bench 4.1 board against K3.1 Pro's 59.7%, so there's little reason to deploy it now.

### 2. Tencent Hy4 and Hy4 flash

{{< image "best_open_source_self_hosted_llms_for_coding/hy4.webp" "Hugging Face model page for tencent/Hy4, showing the tencent-hy-license and the model introduction" >}}

*Screenshot: huggingface.co/tencent/Hy4.*

Tencent's <a href="https://huggingface.co/tencent/Hy4" target="_blank">Hy4</a> is a 770B mixture-of-experts language model with 49B active parameters, 78 layers, 256 routed experts (8 per token) plus a shared expert, a 1.23B vision encoder and a 1M-token context. Attention is Gated DeepSeek Sparse Attention, and a built-in 3.3B drafter called DFly2 reuses the main model's KV cache for speculative decoding, so it costs no extra cache memory.

Hy4 scores 35, second among open models, and its 31.2% on FrontierCode-AA 2.0 is the best open-weight result on that test. The FP8 checkpoint is 786GB on disk, and <a href="https://recipes.vllm.ai/tencent/Hy4" target="_blank">vLLM's recipe</a> asks for about 944GB of aggregate GPU memory, so plan on one eight-GPU node; the recipe renders 8x B300 and says 8x MI355X runs the FP8 checkpoint. Reasoning has two settings, `no_think` and `high`. The Tencent Hy License is derived from Apache 2.0 with added commercial terms: a model-as-a-service business needs a separate license once revenue passes $50 million a year or a product passes 100 million monthly users, and purely internal use is exempt. Tencent's own card is candid that "a notable gap remains" to top proprietary models on long-horizon coding.

<a href="https://huggingface.co/tencent/Hy4-flash" target="_blank">Hy4 flash</a> is the cheaper sibling: 220B total including 64B of n-gram "Engram" tables, about 12B active. Don't plan on a 128GB Mac. AngelSlim's Q4_K_M GGUF is 168GB, and llama.cpp needs build b12755 or newer to load it. On the public Terminal-Bench 4.1 board it scores 11.8%.

### 3. DeepSeek-V4.1-Flash-1017 (DeepSeek)

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek_v4_1_flash_1017.webp" "Hugging Face model page for deepseek-ai/DeepSeek-V4.1-Flash-1017, showing the MIT license and the model introduction" >}}

*Screenshot: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017.*

<a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank">DeepSeek-V4.1-Flash-1017</a> is an update to V4.1-Flash with the same 510GB of weights under MIT. The design is unusual: a 552B backbone plus 196B of Engram memory that can sit in CPU RAM, 384 experts with 6 active, and 8B active parameters during prefill but 16B during decode. DeepSeek reports Terminal-Bench 4.0 rising from 31.2% to 42.3% (Claude Code harness) and DeepSWE v1.1 from 74.2% to 77.0% (Mini-SWE-V2), the best DeepSWE result among open models.

It scores 32 at max effort and costs $0.60 per index task on Artificial Analysis's run, against $3.68 for Kimi K3.1 Pro. Two practical notes. The release has no Jinja chat template; it ships a Python reference encoder and the <a href="https://github.com/deepseek-ai/deepseek-recipe" target="_blank">deepseek-recipe</a> libraries, so check that your server supports the format before you rely on tool calls. And vLLM documents a <a href="https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4.1-Flash" target="_blank">four-H200 setup</a> that puts the Engram tables in pinned host RAM, which frees GPU memory for concurrent sessions.

DeepSeek-V4-Pro-0813 (1.6T total, 49B active, 893GB) now scores 23, below the Flash, so skip it unless it's already deployed. The older 284B {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" >}}V4-Flash-0731{{< /link >}} still fits a 128GB machine at 3-bit, as our {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}guide to local LLM tools and models{{< /link >}} explains.

### 4. GLM-5.3 and GLM-5.3-Flash (Z.AI)

{{< image "best_open_source_self_hosted_llms_for_coding/glm_5_3.webp" "Hugging Face model page for zai-org/GLM-5.3, showing the glm-5.3 license and 753B parameters" >}}

*Screenshot: huggingface.co/zai-org/GLM-5.3.*

{{< link href="https://huggingface.co/zai-org/GLM-5.3" >}}GLM-5.3{{< /link >}} keeps GLM-5.2's 744B base with 40B active, and every gain comes from post-training. It scores 32, and its 40.9% on Terminal-Bench 4.1 is second only to Kimi among open models. The native FP8 repo is 756GB, which fits eight H200s but not an 8x80GB H100 node. The GLM-5.3 License is MIT-like, except that model-as-a-service operators above $10 billion in revenue need a Z.AI security review first.

**GLM-5.3-Flash** is the one most teams can deploy. It's a 320B MoE with 18B active, under plain MIT, natively multimodal, with a hybrid of linear and sparse attention that Z.AI says cuts the KV cache 4.44x against GLM-5.3. It scores 28 and 32.8% on Terminal-Bench 4.1, better on the shell than several models above it on the index. Unsloth's 4-bit GGUFs run from 157GB (`UD-IQ4_XS`) to 200GB (`UD-Q4_K_XL`), which fits three or four 80GB GPUs, and the 2-bit `UD-Q2_K_XL` is 109GB, at a real cost in quality. Mainline llama.cpp supports it ({{< link href="https://github.com/ggml-org/llama.cpp/pull/27773" >}}PR #27773{{< /link >}}). Ollama only lists `glm-5.3-flash:cloud`, so run the GGUF through llama.cpp or LM Studio.

### 5. Inkling 2 Small and Inkling 2 Mini (Thinking Machines)

{{< image "best_open_source_self_hosted_llms_for_coding/inkling_2_mini.webp" "Hugging Face model page for thinkingmachines/Inkling-2-Mini, showing the Apache 2.0 license and 26.4B parameters" >}}

*Screenshot: huggingface.co/thinkingmachines/Inkling-2-Mini.*

Thinking Machines shipped both under Apache 2.0, with no revenue clauses. <a href="https://huggingface.co/thinkingmachines/Inkling-2-Small" target="_blank">Inkling 2 Small</a> is a 594B MoE with 17B active, 48 layers, 384 experts with 8 per token and a 1M-token context. It was trained in NVFP4, and that 394GB checkpoint needs at least 500GB of aggregate VRAM: two B300s or four H200s. It scores 31 and 25.4% on FrontierCode-AA 2.0, but only 13.6% on Terminal-Bench 4.1. Pick it for repository work under a clean license, not for long shell sessions.

<a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini" target="_blank">Inkling 2 Mini</a> stores 24 layers and runs the middle 12 three times, so each token gets 48 layer passes from 26.4B parameters with 3.4B active (5.4B effective). The native checkpoint is about 20GB. ggml-org's <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">GGUFs</a> are 17.6GB at IQ4_NL, 27.8GB at Q8_0 and 52.2GB at BF16, Unsloth goes down to 7.8GB at 1-bit, and Ollama now carries it as `inkling-2-mini` (18-20GB).

Mini ties Qwen3.8-27B at 20 on the index and at 5.6% on Terminal-Bench 4.1, but it got there in 14.7 minutes per task against 31.0, and for $0.59 against $3.53. In Thinking Machines' table it leads Qwen on DeepSWE (48.2% to 42.2%) and on bash-only SWE-bench Verified (79.2% to 77.8%). If most of your day is fixing failing tests, it's the faster of the two.

### 6. MiMo-V2.6-Pro and MiMo-V2.6-Flash (Xiaomi)

{{< image "best_open_source_self_hosted_llms_for_coding/mimo_v2_6_pro.webp" "Hugging Face model page for XiaomiMiMo/MiMo-V2.6-Pro-MOPD, showing the MIT license and 1T parameters" >}}

*Screenshot: huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD.*

Xiaomi published both under plain MIT, and the improved `-MOPD` repos that followed are the ones to download. They take text, image, video and audio, with a 1M-token context and a multi-token prediction drafter. The <a href="https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD" target="_blank">Pro</a> is a 1.02T MoE with 42B active and about 574GB of mostly MXFP4 weights; vLLM documents eight H200s or four MI355Xs. It scores 30 and 35.4% on Terminal-Bench 4.1. The Flash is 309B with 15B active, about 178GB, and runs on four H200s. It scores 27. Neither leads anything here, but MIT weights, audio input and a Pro that fits four MI355Xs are a combination nobody else offers.

### 7. MiniMax-M3.1-Flash and MiniMax M3 (MiniMax)

{{< image "best_open_source_self_hosted_llms_for_coding/minimax_m3_1_flash.webp" "Hugging Face model page for MiniMaxAI/MiniMax-M3.1-Flash, showing the minimax-community license and model card" >}}

*Screenshot: huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash.*

<a href="https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash" target="_blank">MiniMax-M3.1-Flash</a> keeps M3's 428B MoE with 23B active and its 1M-token context, but uses MiniMax Sparse Attention in every layer, adds quantization-aware training and ships a DSpark speculative-decoding head. The weights are 252GB. It scores 29, ten points above M3, and MiniMax reports 73.7% on DeepSWE v1.1 (mini-SWE-agent) and 38.1% on Terminal-Bench 4.0 (Codex harness). For now it runs on vLLM, SGLang or TokenSpeed; the card lists Transformers and Unsloth support as in progress.

Read the **MiniMax Community License** before anything else. The base grant is non-commercial. Commercial use needs a "Built with MiniMax M3.1-Flash" notice and a one-time email to MiniMax, and products above $20 million a year need written authorization. The older {{< link href="https://huggingface.co/MiniMaxAI/MiniMax-M3" >}}MiniMax M3{{< /link >}} has the same terms. Its Unsloth GGUFs are 213-270GB at 4-bit and run with dense attention, because llama.cpp doesn't implement MSA.

### 8. Qwen3.8-Flash-Next (Alibaba): best for a 128GB machine

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_flash_next.webp" "Hugging Face model page for Qwen/Qwen3.8-Flash-Next, showing the qwen-community-1.0 license" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-Flash-Next.*

{{< link href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next" >}}Qwen3.8-Flash-Next{{< /link >}} previews the Qwen4 architecture: 125B parameters with 6B active, plus a 51B n-gram embedding table that can live in RAM or on SSD, Gated DeltaNet with Qwen Sparse Attention, image input and a 262K context extensible to 1M. It scores 28, and its 27.1% on FrontierCode-AA 2.0 beats every open model except Hy4 and DeepSeek-V4.1-Flash-1017.

Read the **Qwen Community License** first. Attribution is required above 100 million monthly users or $20 million monthly revenue, and any company that runs a model-as-a-service or "AI work assistant" business (AI coding or office productivity) needs a separate license before commercial use, whatever its size. Purely internal use is exempt. On a Mac, the GGUF you pick matters more than for any other model here; the [setup section below](#running-qwen38-flash-next-on-a-128gb-mac) explains why.

### 9. Qwen3.8-27B (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_27b.webp" "Hugging Face model page for Qwen/Qwen3.8-27B, showing the Apache 2.0 license" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-27B.*

For anyone without a GPU server, this is still the default. {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B" >}}Qwen3.8-27B{{< /link >}} (**Apache 2.0**) is a 27B dense vision-language model whose 64 layers repeat three Gated DeltaNet blocks and one gated attention block, with a 262K context. That layout is why its KV cache stays small. Alibaba reports 61.7% on SWE-Bench Pro v1 and 90.3 on LiveCodeBench v6.

It scores 20 at `xhigh` reasoning, 17.5 at `medium` and 15.7 at `low`, and 5.6% on Terminal-Bench 4.1. The real complaint is verbosity: Artificial Analysis measured about 59 output tokens/s and 31 minutes per index task at `xhigh`, twice as long as Inkling 2 Mini for the same score. Turn reasoning down for interactive edits and up for unattended agent runs. Ollama's default `qwen3.8:27b` tag is 18GB, the `27b-mlx` tag runs on Apple's MLX backend, and NVIDIA has published small draft models for speculative decoding.

### 10. Nanbeige4.3-33B (Nanbeige)

{{< image "best_open_source_self_hosted_llms_for_coding/nanbeige_4_3_33b.webp" "Hugging Face model page for Nanbeige/Nanbeige4.3-33B, showing the Apache 2.0 license and 33B parameters" >}}

*Screenshot: huggingface.co/Nanbeige/Nanbeige4.3-33B.*

<a href="https://huggingface.co/Nanbeige/Nanbeige4.3-33B" target="_blank">Nanbeige4.3-33B</a> (Apache 2.0) is the surprise on the terminal tests. It's a text-only, 33B dense model on the plain Llama architecture with a 512K context. Nanbeige's card runs every model through the same harness and reports 23.8% on Terminal-Bench 4.0 against 6.3% for Qwen3.8-27B, and 65.5% on DeepSWE against 42.5%. Qwen still wins SWE-Bench Pro, 61.7% to 60.3%. Artificial Analysis independently measured 29.3% on Terminal-Bench 4.1, the best result for any model this size, with an index score of 20.

The cost is memory, as the chart above shows. Ollama doesn't carry it, so use bartowski's GGUFs (18.6GB at IQ4_XS, 20.8GB at Q4_K_M) with llama.cpp or LM Studio. The card recommends `preserve_thinking=True` and XML tool calls for agent work. On a 24GB card I'd start from this (untested) command, which caps context at 32K and quantizes the cache:

```bash
llama-server -hf bartowski/Nanbeige_Nanbeige4.3-33B-GGUF:IQ4_XS \
  --jinja -ngl 99 -c 32768 -fa on -ctk q8_0 -ctv q8_0 \
  --chat-template-kwargs '{"preserve_thinking": true}' --port 8080
```

### 11. Qwen3.8-Max (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_max.webp" "Hugging Face model page for Qwen/Qwen3.8-2.4T-A95B, the open weights of Qwen3.8-Max" >}}

*Screenshot: huggingface.co/Qwen/Qwen3.8-2.4T-A95B.*

Alibaba open-weighted Qwen3.8-Max as {{< link href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B" >}}Qwen3.8-2.4T-A95B{{< /link >}}: a text-only 2.4T MoE with 95B active and a 262K context. Its card reports 67.7% on SWE-Bench Pro v1. Artificial Analysis hasn't scored it on the v5 index yet, but measured 11.1% on Terminal-Bench 4.1. vLLM's recipe runs the NVFP4 build (1.32TiB) on eight B300s. The license adds a separate-license requirement for AI coding and office-assistant businesses above $50 million a year. For that hardware, Kimi K3.1 Pro is the stronger choice. Alibaba's newer Qwen4-Max scores 43 but is API-only so far.

### 12. Reflection Beam 1.0 (Reflection)

{{< image "best_open_source_self_hosted_llms_for_coding/beam_1_0.webp" "Hugging Face model page for reflection/Beam-1.0-501B-A23B, showing the Apache 2.0 license" >}}

*Screenshot: huggingface.co/reflection/Beam-1.0-501B-A23B.*

<a href="https://huggingface.co/reflection/Beam-1.0-501B-A23B" target="_blank">Beam 1.0</a> (Apache 2.0) is a text-only 501B MoE with 23B active and a 1M-token context, in BF16, FP8 and NVFP4. The NVFP4 checkpoint is about 280GB, and <a href="https://huggingface.co/blog/reflection-beam" target="_blank">Hugging Face recommends four B200s</a> for shared use. Reflection reports 81.6% on SWE-bench Verified and 66.1% on SWE-Bench Pro v1, but only 43.3% on DeepSWE, and Artificial Analysis measured 3.0% on Terminal-Bench 4.1 with an index score of 18. That gap between single-issue fixes and long agent runs is the pattern to watch for. Beam's strength is speed: 373 output tokens/s on Artificial Analysis, the fastest here, which suits batch refactors and test generation.

### 13. Mistral Large 4, Medium 3.5 and Devstral Small 2 (Mistral AI)

{{< image "best_open_source_self_hosted_llms_for_coding/mistral_large_4.webp" "Hugging Face model page for mistralai/Mistral-Large-4-1T-A52B, showing the model introduction" >}}

*Screenshot: huggingface.co/mistralai/Mistral-Large-4-1T-A52B.*

<a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank">Mistral Large 4</a> is a 1T MoE with 52B active including embeddings, 128 experts with 4 per token, image input and a 1M-token context. It now powers Mistral's open-source Vibe coding CLI. It scores 26 and 24.7% on Terminal-Bench 4.1, and the NVFP4 build is 610GB. The Mistral Ecosystem Open-Weight License is a modified MIT that requires a separate license for model-as-a-service businesses.

Mistral Medium 3.5 (128B dense) scores only 5 on the current index, so I'd skip it for agents. The small model is still useful. **Devstral Small 2** (24B, Apache 2.0) is a 15GB Ollama download with image input. Its 10.7GB cache at 64K is the catch from the chart above, so set `OLLAMA_KV_CACHE_TYPE=q8_0` on a 24GB card.

### 14. Muse Glimmer 30B (Meta)

{{< image "best_open_source_self_hosted_llms_for_coding/muse_glimmer_30b.webp" "Hugging Face model page for meta-models/Muse-Glimmer-30B, showing the Apache 2.0 license and model card" >}}

*Screenshot: huggingface.co/meta-models/Muse-Glimmer-30B.*

{{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}Muse Glimmer{{< /link >}} (**Apache 2.0**) is a 29.6B dense multimodal model with a 131K context, and Meta's own K-quant builds fit a 24GB card. Meta reports 75.5% on MCP Atlas and its DFlash speculative decoder took an RTX 5090 from 74.9 to 233.4 tokens/s with identical output. On agent coding it's weak: 6 on the index and 0.5% on Terminal-Bench 4.1. Meta's larger Muse Spark Open (816B, 42B active) scores 25, but it's gated behind a custom Muse license and needs 533GB at NVFP4.

### 15. Nemotron 3.5 Lightning (NVIDIA)

{{< image "best_open_source_self_hosted_llms_for_coding/nemotron_3_5_lightning.webp" "Hugging Face model page for NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, showing the license and an accuracy chart" >}}

*Screenshot: huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16.*

{{< link href="https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch" >}}Nemotron 3.5 Lightning{{< /link >}} is a Mamba-2, MoE and attention hybrid with 31.6B total and 3.6B active parameters, up to 1M tokens of context, and weights, training data and recipes released under **OpenMDW-1.1**. It scores 6 on the index, so it isn't an agent model. Throughput is the pitch: about 314 output tokens/s on Artificial Analysis, and 4-bit builds of 21-25.5GB. For a high-volume pipeline (log triage, docstrings, simple test generation) that tradeoff can be right. NVIDIA's newer Nemotron 3.5 Super VL (124.5B, 12B active) scores 14.

## Honorable mentions

{{< image "best_open_source_self_hosted_llms_for_coding/starcode2.webp" "StarCoder 2 Open Source LLM by BigCode" >}}

{{< link href="https://github.com/bigcode-project/starcoder2" >}}StarCoder 2{{< /link >}} from BigCode comes in 3B, 7B and 15B sizes with a 16K context. Every source file in its training set carries a Software Heritage identifier, which makes it the most auditable coding model available. Pick it when your blocker is IP compliance rather than capability.

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k27_code.webp" "Hugging Face model page for moonshotai/Kimi-K2.7-Code, showing the model card" >}}

*Screenshot: huggingface.co/moonshotai/Kimi-K2.7-Code.*

{{< link href="https://huggingface.co/moonshotai/Kimi-K2.7-Code" >}}Kimi K2.7-Code{{< /link >}} is a 1T MoE with 32B active and a 262K context under a modified MIT license, at about a third of K3.1 Pro's size. Artificial Analysis measured 1.0% on Terminal-Bench 4.1, so treat it as a code-completion and chat model, not an agent.

{{< image "best_open_source_self_hosted_llms_for_coding/granite_4_2.webp" "Hugging Face model page for ibm-granite/granite-4.2-30b, showing the Apache 2.0 license and model summary" >}}

*Screenshot: huggingface.co/ibm-granite/granite-4.2-30b.*

{{< link href="https://huggingface.co/ibm-granite/granite-4.2-30b" >}}IBM Granite 4.2{{< /link >}} comes as dense 3B, 8B and 30B models under Apache 2.0 with a 128K context. IBM reports 57.0% on SWE-bench Verified for the 30B. It isn't competitive on capability, but it's the license-clean enterprise option.

## How to use these models with a coding agent

The quickest local setup is {{< link href="https://opencode.ai" >}}OpenCode{{< /link >}}, an open-source terminal coding agent, with {{< link href="https://ollama.com" >}}Ollama{{< /link >}} serving the model. The commands follow the <a href="https://docs.ollama.com/integrations/opencode" target="_blank">Ollama integration guide</a> and the <a href="https://opencode.ai/docs/providers/" target="_blank">OpenCode providers docs</a> for Ollama 0.40.18 and OpenCode v2.

**1. Install Ollama and OpenCode v2**

```bash
curl -fsSL https://ollama.com/install.sh | sh
curl -fsSL https://opencode.ai/v2/install | bash
```

The v2 installer replaces an OpenCode 1 binary, and v2 still reads a v1 `opencode.json`.

**2. Give the model enough context**

OpenCode needs at least 64K tokens of context. Ollama's default is 4K under 24GiB of VRAM and 32K from 24 to 48GiB, so <a href="https://docs.ollama.com/context-length" target="_blank">raise it</a>, and halve the cache while you're at it:

```bash
OLLAMA_CONTEXT_LENGTH=65536 OLLAMA_KV_CACHE_TYPE=q8_0 ollama serve
```

**3. Launch OpenCode through Ollama**

In a second terminal:

```bash
ollama pull qwen3.8:27b
ollama launch opencode --model qwen3.8:27b
```

Swap in `inkling-2-mini` on a 32GB Mac. OpenCode v2 also probes `http://127.0.0.1:11434` on its own and lists the models it finds under `/models`, so a plain `opencode` works too. It does the same for LM Studio on port 1234 and vLLM on port 8000, but discovered vLLM models start with tools disabled, so add `"capabilities": { "tools": true }` for that model in your config.

With the model loaded, run `ollama ps`. The `CONTEXT` column shows the allocated window, and a CPU/GPU split under `PROCESSOR` means some weights spilled onto the CPU. If edits feel slow, check that split before blaming the model.

## Running Qwen3.8-Flash-Next on a 128GB Mac

Flash-Next on a Mac takes more care because macOS doesn't give the GPU all of unified memory. By default it can wire about 75%, roughly 96GB on a 128GB machine. Check yours (`0` means the default is in force):

```bash
sysctl iogpu.wired_limit_mb
```

A standard 4-bit Flash-Next GGUF needs 96-114GB, at or over that line before any KV cache. You can raise the limit with `sudo sysctl iogpu.wired_limit_mb=<MB>` until the next reboot (our {{< link href="/blog/self_hosting_llms_on_512gb_m5_ultra_mac_studio/" >}}512GB Mac Studio post{{< /link >}} covers how much to leave macOS), but that leaves little for context. There's a better option.

### Keep the n-gram table on SSD

The 51B n-gram table is a lookup, not a matrix multiply. Each token hashes its last three tokens and reads 16 rows, about 2.7KB, so the table can stay on disk and get paged in on demand. llama.cpp memory-maps GGUF files by default, so in principle that already works. The catch, per {{< link href="https://huggingface.co/AtomicChat/Qwen3.8-Flash-Next-GGUF" >}}Atomic Chat's model card{{< /link >}}, is that Metal wires the whole mapped region of any shard holding a GPU tensor, so a table that shares a shard with other weights gets pinned into GPU memory. Atomic Chat's "AD" builds put the table alone in its own shard.

Get `AD-4.27bpw-Q4_K_M-M64`. It holds 56.1GB in GPU memory and leaves 38.4GB on SSD, with a mean KL divergence of 0.0842 and the same top-1 token as the full model 89.49% of the time, within measurement error of the 5.00bpw build. That leaves about 40GB under the default limit, so you don't have to touch the sysctl. The 3.84bpw build gets Flash-Next onto a 64GB Mac, but most of its expert weights drop to 1.75 bits and its KL divergence is 2.7 times higher. Leave mmap on, which is the default, since that's what makes the table pageable.

### Add a small model next to it

That headroom fits a second model. Pair Flash-Next as the workhorse with {{< link href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF" >}}Gemma 4 26B-A4B{{< /link >}} (about 4B active, 14.2GB in Unsloth's QAT build) for quick calls. Together they take about 70GB of the ~96GB default. Download all three Flash-Next shards first, then start each server in its own terminal:

```bash
hf download AtomicChat/Qwen3.8-Flash-Next-GGUF \
  --include "Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-*.gguf" --local-dir .
llama-server -m Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-00001-of-00003.gguf \
  --jinja -ngl 99 -c 65536 -fa on -fit off --alias flash-next --port 8080

# In a second terminal
llama-server -hf unsloth/gemma-4-26B-A4B-it-qat-GGUF:UD-Q4_K_XL \
  --jinja -ngl 99 -c 32768 --alias gemma-4-26b --port 8081
```

Flash-Next needs `--jinja` (without it, turns can come out malformed) and `-fit off`, because llama.cpp's automatic memory fitting fails on this architecture. The card doesn't publish KV cache sizes, so watch memory pressure in Activity Monitor the first time a session nears 64K. Then point OpenCode at both servers in `opencode.jsonc`, using the native v2 format. In v2 the small model's job is session titles, set through the built-in `title` agent:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "providers": {
    "mac": {
      "name": "Flash-Next on this Mac",
      "package": "@opencode/ai/providers/openai-compatible",
      "settings": { "baseURL": "http://localhost:8080/v1" },
      "models": {
        "flash-next": {
          "name": "Qwen3.8-Flash-Next",
          "capabilities": { "tools": true },
          "limit": { "context": 65536 }
        }
      }
    },
    "mac-small": {
      "name": "Gemma on this Mac",
      "package": "@opencode/ai/providers/openai-compatible",
      "settings": { "baseURL": "http://localhost:8081/v1" },
      "models": { "gemma-4-26b": { "name": "Gemma 4 26B-A4B" } }
    }
  },
  "model": "mac/flash-next",
  "agents": { "title": { "model": "mac-small/gemma-4-26b" } }
}
```

The tradeoff is 14GB that Flash-Next could spend on context, so drop Gemma first if long sessions get squeezed. Flash-Next reads images itself through the 0.9GB `mmproj-Qwen3.8-Flash-Next-F16.gguf` projector in the same repo, and the {{< link href="https://atomic.chat/" >}}Atomic Chat{{< /link >}} desktop app runs the same builds if you'd rather skip the terminal.

## Running the model on a GPU box and coding from your laptop

A common setup is a workstation with the GPU at home or in the office and a laptop everywhere else. Ollama only listens on localhost, and it rejects requests whose `Host` header isn't a local name, so a plain tunnel gets `403 Forbidden`. A [Pinggy](https://pinggy.io/) tunnel can rewrite the header and require a key. Pick a random secret, replace `YOUR_RANDOM_KEY` in both places, and run this on the GPU machine:

```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io -T -- "u:Host:localhost:11434" "k:YOUR_RANDOM_KEY"
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode_remote_ollama_pinggy.webp" "Diagram of OpenCode on a laptop sending a request with a bearer key to a Pinggy URL, Pinggy checking the key and rewriting the Host header to localhost:11434, and the request reaching Ollama on the GPU machine through the SSH tunnel the GPU machine opened" >}}

It prints public HTTPS URLs such as `https://<random>.run.pinggy-free.link`, and a request without `Authorization: Bearer YOUR_RANDOM_KEY` will recieve a `401`. OpenCode v2's built-in Ollama provider sends its `apiKey` as exactly that bearer token, on discovery and on model requests, so on the laptop you only override the endpoint:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "ollama/qwen3.8:27b",
  "providers": {
    "ollama": {
      "settings": {
        "baseURL": "https://<random>.run.pinggy-free.link/v1",
        "apiKey": "YOUR_RANDOM_KEY"
      }
    }
  }
}
```

Free tunnels last 60 minutes and get a new URL each time, which is fine for a quick session. For a box you code against every day, a [Pinggy Pro token](https://dashboard.pinggy.io) removes the timeout and keeps the URL stable.

## How to self-host these models

Once you've picked a model, these guides cover the rest:

- {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}How to Self-Host Any LLM{{< /link >}} walks through running Ollama and Open WebUI in Docker and sharing the setup outside your network.
- {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}Best local LLM tools and models{{< /link >}} compares LM Studio, Unsloth, Ollama and others.
- {{< link href="/blog/best_hardware_for_self_hosted_coding_agents/" >}}Best hardware for self-hosted coding agents{{< /link >}} covers GPUs and unified-memory machines.

## Try one issue before standardizing on a model

Pick a bug you've already fixed and check out the commit just before the fix in a disposable worktree. Give each model the issue text, the same tools, the same context limit and the same time budget, and keep the regression test out of its prompt. After each run, apply the test and read the diff. Write down whether the fix passes, how long it took, how many tokens it used and whether you had to steer. On a 24GB card, run it twice: once at the context you'd like and once at the context that actually fits. A model that loses the thread when you cut its window from 64K to 32K will do teh same thing on a real repo.

## Conclusion

On a 24GB GPU, start with Qwen3.8-27B in Ollama; with 32GB, try Nanbeige4.3-33B or Inkling 2 Mini. Shared servers can run GLM-5.3-Flash, and an eight-GPU node gets you Kimi K3.1 Pro, the open model closest to the hosted frontier. Whichever you pick, test it on one of your own issues, because that's the benchmark that counts.
