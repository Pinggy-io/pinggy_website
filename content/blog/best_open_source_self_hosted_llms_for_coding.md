---
title: "Best Open Source Self-Hosted LLMs for Coding in 2026"
description: "Discover the best open source LLMs for coding and development that you can self-host. Compare Kimi K3, GLM-5.2, MiniMax M3, DeepSeek-V4-Pro-Max, Qwen3.6, Muse Glimmer 30B, Devstral 2, MiMo-V2.5-Pro, and more with benchmarks, hardware requirements, and deployment guides."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-08-11T10:00:00+05:30
draft: false
tags: ["open source LLM", "self-hosted AI", "coding LLM", "Kimi K3", "GLM-5.2", "MiniMax M3", "DeepSeek-V4-Pro-Max", "Qwen3.6", "Muse Glimmer", "Devstral", "MiMo-V2.5-Pro", "local AI"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/best_open_source_self_hosted_llms_for_coding_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIENob29zZSBhbmQgU2VsZi1Ib3N0IE9wZW4gU291cmNlIExMTXMgZm9yIENvZGluZyIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBzZWxlY3RpbmcgYW5kIHNlbGYtaG9zdGluZyB0aGUgYmVzdCBvcGVuIHNvdXJjZSBsYXJnZSBsYW5ndWFnZSBtb2RlbHMgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50LCBpbmNsdWRpbmcgbW9kZWwgY29tcGFyaXNvbiwgaGFyZHdhcmUgcmVxdWlyZW1lbnRzLCBhbmQgZGVwbG95bWVudCB0b29scy4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQXNzZXNzIFlvdXIgSGFyZHdhcmUgYW5kIFJlcXVpcmVtZW50cyIsCiAgICAgICJ0ZXh0IjogIkRldGVybWluZSB5b3VyIGF2YWlsYWJsZSBoYXJkd2FyZSAoR1BVIFZSQU0sIHN5c3RlbSBSQU0sIHN0b3JhZ2UpIGFuZCBjb2RpbmcgbmVlZHMuIEZvciBjb25zdW1lciBHUFVzIHdpdGggOC0yNEdCIFZSQU0sIGNvbnNpZGVyIG1vZGVscyBsaWtlIERldnN0cmFsIFNtYWxsIDIgKDI0QiksIFF3ZW4gMy42IDI3Qiwgb3IgTXVzZSBHbGltbWVyIDMwQiwgd2hpY2ggcXVhbnRpemVzIHRvIHVuZGVyIDIwR0Igd2l0aCBLLVF1YW50LiBGb3IgYSBzaW5nbGUgODBHQi1jbGFzcyBtdWx0aS1HUFUgc2VydmVyLCBHTE0tNS4yIGZpdHMgaW4gcm91Z2hseSA0eCBIMTAwLiBLaW1pIEszIG5lZWRzIGEgbXVsdGktbm9kZSBjbHVzdGVyIG9mIDY0IG9yIG1vcmUgYWNjZWxlcmF0b3JzIGZvciBpdHMgMS40VEIgb2YgTVhGUDQgd2VpZ2h0cy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2hvb3NlIFlvdXIgTW9kZWwgQmFzZWQgb24gVXNlIENhc2UiLAogICAgICAidGV4dCI6ICJTZWxlY3QgYSBtb2RlbCB0aGF0IGZpdHMgeW91ciBjb2Rpbmcgd29ya2Zsb3cuIEtpbWkgSzMgdG9wcyB0aGUgb3Blbi13ZWlnaHQgTGl2ZUJlbmNoIHJhbmtpbmdzIGJ1dCByZXF1aXJlcyBjbHVzdGVyIGhhcmR3YXJlIGFuZCBhIGJlc3Bva2UgbGljZW5zZS4gR0xNLTUuMiBpcyB0aGUgc3Ryb25nZXN0IE1JVC1saWNlbnNlZCBtb2RlbCB0aGF0IGZpdHMgb25lIHNlcnZlci4gRm9yIGxpZ2h0d2VpZ2h0IGxvY2FsIHVzZSwgRGV2c3RyYWwgU21hbGwgMiBvciBRd2VuIDMuNiAyN0IgcnVuIG9uIGNvbnN1bWVyIGhhcmR3YXJlLiBGb3IgYSBsb2NhbCBhZ2VudCB0aGF0IGxlYW5zIG9uIE1DUCB0b29sIGNhbGxzLCBNZXRhJ3MgQXBhY2hlIDIuMCBNdXNlIEdsaW1tZXIgMzBCIHNjb3JlcyA3NS41IG9uIE1DUCBBdGxhcyBvbiBhIHNpbmdsZSAyNEdCIEdQVS4gRm9yIGNvc3Qtc2Vuc2l0aXZlIHNlcnZpbmcsIERlZXBTZWVrIFY0LUZsYXNoIGdpdmVzIHVwIGxpdHRsZSBhZ2VudGljIGNvZGluZyBxdWFsaXR5IGF0IDI4NEIgdG90YWwgcGFyYW1ldGVycy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBhIFNlbGYtSG9zdGluZyBUb29sIiwKICAgICAgInRleHQiOiAiU2V0IHVwIGEgZGVwbG95bWVudCB0b29sIGxpa2UgT2xsYW1hIGZvciBxdWljayBsb2NhbCBwcm90b3R5cGluZywgdkxMTSBvciBTR0xhbmcgZm9yIHByb2R1Y3Rpb24gc2VydmluZyB3aXRoIGhpZ2ggY29uY3VycmVuY3ksIG9yIGxsYW1hLmNwcCBmb3IgbWF4aW11bSBjb250cm9sIGFuZCBDUFUgaW5mZXJlbmNlLiBGb3IgYSBHVUkgZXhwZXJpZW5jZSwgdXNlIExNIFN0dWRpbyBvciBPcGVuIFdlYlVJLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEb3dubG9hZCBhbmQgUnVuIHRoZSBNb2RlbCIsCiAgICAgICJ0ZXh0IjogIlB1bGwgeW91ciBjaG9zZW4gbW9kZWwgdXNpbmcgdGhlIHNlbGVjdGVkIHRvb2wuIEZvciBleGFtcGxlLCBydW4gb2xsYW1hIHB1bGwgcXdlbjMuNjoyN2Igd2l0aCBPbGxhbWEsIG9yIGRvd25sb2FkIHdlaWdodHMgZnJvbSBIdWdnaW5nIEZhY2UgZm9yIHZMTE0uIEFwcGx5IDQtYml0IHF1YW50aXphdGlvbiAoUTRfS19NKSB0byByZWR1Y2UgbWVtb3J5IHVzYWdlIHdoaWxlIG1haW50YWluaW5nIHF1YWxpdHk7IEtpbWkgSzMgc2hpcHMgbmF0aXZlbHkgaW4gTVhGUDQgZnJvbSBxdWFudGl6YXRpb24tYXdhcmUgdHJhaW5pbmcuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkludGVncmF0ZSB3aXRoIFlvdXIgRGV2ZWxvcG1lbnQgV29ya2Zsb3ciLAogICAgICAidGV4dCI6ICJDb25uZWN0IHlvdXIgc2VsZi1ob3N0ZWQgbW9kZWwgdG8gY29kaW5nIHRvb2xzIGxpa2UgT3BlbkNvZGUsIENvbnRpbnVlLmRldiwgQWlkZXIsIG9yIGFueSBPcGVuQUktY29tcGF0aWJsZSBjbGllbnQuIE1vc3Qgc2VsZi1ob3N0aW5nIHRvb2xzIGV4cG9zZSBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEkgZW5kcG9pbnQsIG1ha2luZyBpbnRlZ3JhdGlvbiBzdHJhaWdodGZvcndhcmQgd2l0aCBleGlzdGluZyBkZXZlbG9wbWVudCB3b3JrZmxvd3MuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/best_open_source_self_hosted_llms_for_coding_banner.webp" "Best Open Source Self-Hosted LLMs for Coding in 2026" >}}

The gap between proprietary and open source AI models for coding is narrowing fast. A year ago, self-hosting an LLM for development meant settling for significantly worse performance than cloud-based alternatives like GPT-5.4 or Claude. In 2026, the best open source models are closing in on proprietary leaders across independent benchmarks like {{< link href="https://artificialanalysis.ai/agents/coding-agents" >}}Artificial Analysis{{< /link >}} and {{< link href="https://livebench.ai/#/?sort=Agentic+Coding+Average&highunseenbias=true" >}}LiveBench{{< /link >}}, and some even outperform them on specific tasks like code generation and completion.

Whether you're a solo developer who wants to keep code off third-party servers, a startup looking to cut API costs, or an enterprise with strict data compliance requirements, self-hosted open source LLMs have become a genuinely viable option for professional software development. In this guide, we'll cover the best open source models you can self-host for coding, the tools to deploy them, and the hardware you need to get started.

{{% tldr %}}

**Top Open Source LLMs for Coding (Self-Hostable, ranked by LiveBench Agentic Coding Avg):**
1. **Kimi K3** - LiveBench Coding **81.45**, Agentic Coding **57.58** - <a target="_blank" href="https://huggingface.co/moonshotai/Kimi-K3">Get Kimi K3</a>
2. **GLM 5.2** - LiveBench Coding **79.65**, Agentic Coding **51.92** - <a target="_blank" href="https://huggingface.co/zai-org/GLM-5.2">Get GLM-5.2</a>
3. **DeepSeek V4 Pro** - LiveBench Coding **69.99**, Agentic Coding **42.63** - <a target="_blank" href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">Get DeepSeek-V4-Pro</a>
4. **MiniMax M3** - LiveBench Coding **68.20**, Agentic Coding **40.66** - <a target="_blank" href="https://huggingface.co/MiniMaxAI">Get MiniMax M3</a>
5. **Qwen 3.6 27B** - LiveBench Coding **71.78**, Agentic Coding **39.29** - <a target="_blank" href="https://github.com/QwenLM/Qwen3.6">Get Qwen 3.6 27B</a>

**Also worth self-hosting (not in LiveBench's current rotation, scored on other benchmarks):**
- **DeepSeek-V4-Pro-Max** - SWE-Bench Verified **80.6%**, 1.6T/49B active - <a target="_blank" href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">Get DeepSeek-V4-Pro-Max</a>
- **MiMo-V2.5-Pro** - vendor SWE-Bench Verified **78.9%** - <a target="_blank" href="https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro">Get MiMo-V2.5-Pro</a>
- **Muse Glimmer 30B** - vendor SWE-Bench Pro **51.2**, MCP Atlas **75.5**, runs on a 24GB GPU - <a target="_blank" href="https://huggingface.co/meta-models/Muse-Glimmer-30B">Get Muse Glimmer 30B</a>
- **Devstral 2** - LiveBench Coding **66.79**, Agentic Coding **43.33** - <a target="_blank" href="https://huggingface.co/mistralai">Get Devstral 2</a>

**New: Meta shipped a 30B agentic model that fits one consumer GPU.** Muse Glimmer landed **August 10, 2026** under **Apache 2.0** - dense, multimodal, 131K context, and quantized down to under 20GB so it runs on a single 24GB card. It beats Qwen3.6-27B on SWE-Bench Pro and by 13 points on MCP Atlas tool use, but loses to it on TerminalBench 2.1. See the [Muse Glimmer section below](#8-muse-glimmer-30b-meta---best-tool-use-on-a-single-gpu).

**Kimi K3 weights are out, but they need a cluster:** Moonshot published the 2.8T MoE flagship on **July 27, 2026**. It's the **#1 open-weight model on LiveBench's Coding Avg (81.45) and Agentic Coding Avg (57.58)**, but at ~1.4 TB of MXFP4 weights it does not fit any single 8-GPU node, and it ships under a bespoke license rather than MIT. If you want the best model that fits one server, that's still GLM-5.2 - see the [Kimi K3 section below](#1-kimi-k3-moonshot-ai---top-open-weight-scores-cluster-required).

**Best Self-Hosting Tools:**
- <a target="_blank" href="https://ollama.com">Ollama</a> - Easiest way to get started locally
- <a target="_blank" href="https://github.com/vllm-project/vllm">vLLM</a> - Best for production serving
- <a target="_blank" href="https://lmstudio.ai">LM Studio</a> - Best GUI for desktop users

{{% /tldr %}}


## Open Source vs Proprietary: How Close Is the Gap?

Before diving into individual models, it's worth understanding where open source stands. We use {{< link href="https://artificialanalysis.ai/agents/coding-agents" >}}Artificial Analysis{{< /link >}} as the primary lens here because it's independent and covers the full June-July 2026 wave, including the just-released Kimi K3. Its **Intelligence Index** aggregates provider-reported and benchmark-derived signals into one number. We cross-check it against **SWE-Bench Pro** (coding-specific) and **LiveBench** (contamination-aware) further down. The snapshot below is **July 2026**.

### Artificial Analysis Intelligence Index (July 2026, open weights)

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Organization</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Intelligence Index</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Hardware requirement</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Claude Fable 5</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Anthropic</td>
  <td style="border:1px solid #ddd;padding:0.5em;">60</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Proprietary, no self-host</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Kimi K3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Moonshot AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>57</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Multi-node cluster, 64+ accelerators (~1.4 TB at MXFP4)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM 5.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Z.AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>51.1</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">4x H100/H200 80GB (~370 GB)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>MiniMax M3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MiniMax</td>
  <td style="border:1px solid #ddd;padding:0.5em;">44.4</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3-4x H100 80GB (~233 GB)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>DeepSeek V4 Pro</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek</td>
  <td style="border:1px solid #ddd;padding:0.5em;">44.3</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8x H100/H200 80GB (~430 GB)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>MiMo-V2.5-Pro</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Xiaomi</td>
  <td style="border:1px solid #ddd;padding:0.5em;">42.2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8x H100/H200 80GB (~550 GB)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.6 35B-A3B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Alibaba</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Single 24GB GPU or 32GB Mac (~20 GB)</td>
</tr>
</tbody>
</table>

The **Hardware requirement** column is the approximate VRAM just for 4-bit weights (INT4/Q4, or MXFP4 in Kimi K3's case) and the smallest 80GB-class multi-GPU box that fits them, from each model's community and vendor deployment notes ({{< link href="https://www.spheron.network/blog/deploy-glm-5-2-gpu-cloud/" >}}GLM-5.2{{< /link >}}, {{< link href="https://www.spheron.network/tools/gpu-recommender/MiniMaxAI/MiniMax-M3/" >}}MiniMax M3{{< /link >}}, {{< link href="https://knightli.com/en/2026/05/01/deepseek-v4-local-vram-quantization-table/" >}}DeepSeek V4{{< /link >}}, {{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Kimi K3{{< /link >}}). Three caveats: add headroom on top for the KV cache, which balloons at these models' 1M context lengths; none of these run on a single consumer GPU; and Kimi K3 is in a different class entirely, since ~1.4 TB of weights does not fit the 640 GB of an 8x80GB node no matter how you shard it. If a single server is your ceiling, GLM-5.2 is the practical top end. If a laptop or a single consumer GPU is your budget, the [practical models section](#practical-models-you-can-actually-self-host) below has the full list that fits - Devstral Small 2 (24B) and Qwen 3.6 27B run on a single RTX 4090 or a 32GB Mac. You can also trade GPUs for large CPU RAM with GGUF builds, at much lower speed.

On Artificial Analysis, the actual frontier leader is Anthropic's **Claude Fable 5 at 60** - the current #1 model on the whole index. **Kimi K3** is close behind at **57**, ahead of Claude Opus 4.8 (56), and since July 27 it is a model you can download - if you have a cluster to put it on. **GLM-5.2 at 51.1** is the leader among models that fit a single node, ahead of the tight 42-44 cluster of MiniMax M3, DeepSeek V4 Pro, and MiMo-V2.5-Pro. Fable 5's lead over the best open weights is now 3 points, not the chasm it was a year ago. On AA's real-world agentic benchmark (**GDPval-AA v2**), GLM-5.2 scores **1524**, effectively level with GPT-5.5 xHigh (1514). At the small end, **Qwen3.6-35B-A3B** trails at 32 but is one of the models you can actually run on a laptop, which is the subject of the next section. The two cross-checks further down tell the same story.

### Practical models you can actually self-host

Every model in the table above except Qwen3.6 needs a rack. If your "server" is the laptop you're reading this on, the ceiling is Apple's: the M5 Max MacBook Pro announced in March 2026 tops out at **128GB of unified memory** at 614GB/s, and that has to hold the weights plus the KV cache. At 4-bit that puts the cutoff around 125B total parameters.

Here is everything that clears it, scored on the same Artificial Analysis Intelligence Index as the table above, so you can read these numbers directly against Kimi K3's 57 and Claude Fable 5's 60. Scores come from AA's {{< link href="https://artificialanalysis.ai/models/open-source/small" >}}small (4B-40B){{< /link >}} and {{< link href="https://artificialanalysis.ai/models/open-source/medium" >}}medium (40B-150B){{< /link >}} open-weights boards.

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Total / active params</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">~4-bit footprint</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Intelligence Index</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.6 27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">27.8B dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~17 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>37</strong></td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.6 35B-A3B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">36B / 3B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~20 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.5 122B-A10B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">125B / 10B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~70 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mistral Medium 3.5</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128B dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~72 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">30</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Gemma 4 31B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">30.7B dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~18 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">29</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Nemotron 3 Super 120B-A12B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">120.6B / 12.7B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~68 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">25</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>gpt-oss-120b (high)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">117B / 5.1B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~63 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3-Coder-Next</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">79.7B / 3B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~45 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">21</td>
</tr>
</tbody>
</table>

The useful surprise here is that **bigger does not win on a laptop**. **Qwen3.6 27B** tops this table at **37** and AA ranks it **#1 of 130** in its size class - it beats every 120B-class model that also fits, including Qwen3.5 122B-A10B (32), Mistral Medium 3.5 (30), Nemotron 3 Super (25), and gpt-oss-120b (24). It's also the cheapest to run of the lot at ~17 GB, which leaves most of a 128GB machine free for KV cache at its 262K context. If you only take one recommendation from this section: pull the 27B, not the biggest thing that fits.

Two caveats. AA publishes reasoning and non-reasoning variants separately, and this table uses the reasoning score wherever one exists - Qwen3-Coder-Next and Mistral Medium 3.5 are scored non-reasoning only, so the bottom rows aren't a strict like-for-like read. And the two Mistral models the rest of this guide covers score lower on this index than their SWE-bench numbers suggest: **Devstral 2 sits at 19** and **Devstral Small 2 at 17** (both non-reasoning), as does **Nemotron-Cascade 2 30B-A3B at 18**.

One model missing from this table is the newest entrant in exactly this size class: **Muse Glimmer 30B**, which Meta released on August 10, 2026. Artificial Analysis hasn't scored it yet, so there is no Intelligence Index number to slot in, but on Meta's own benchmarks it trades wins with Qwen3.6 27B and clears it comfortably on tool use. It's covered in [its own section below](#8-muse-glimmer-30b-meta---best-tool-use-on-a-single-gpu).

What does *not* fit: GLM-5.2. Unsloth's 2-bit dynamic GGUF squeezes it from ~1.51 TB to ~239 GB, which needs a 256GB Mac Studio rather than any MacBook Pro, and 2-bit is a real quality cut on top. Kimi K3 is further out of reach again.

### LiveBench (secondary cross-check, July 2026)

LiveBench refreshed its question set on **June 25, 2026**, part of its normal contamination-aware monthly rotation - absolute scores read lower across the board than in older snapshots, so rankings within a single snapshot are the meaningful comparison, not the raw numbers year over year. Two models covered later in this guide are missing from the table below: Devstral 2 dropped out of the current rotation, and MiMo-V2.5-Pro has never been covered. **Kimi K3** and **MiniMax M3** are newly added.

#### LiveBench Agentic Coding Average

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Organization</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Type</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Agentic Coding Avg</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">GPT-5.6 Terra Max Effort</td>
  <td style="border:1px solid #ddd;padding:0.5em;">OpenAI</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Proprietary</td>
  <td style="border:1px solid #ddd;padding:0.5em;">67.98</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Kimi K3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Moonshot AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Open weights (bespoke license)</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>57.58</strong></td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM 5.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Z.AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Open Source</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>51.92</strong></td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>DeepSeek V4 Pro</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Open Source</td>
  <td style="border:1px solid #ddd;padding:0.5em;">42.63</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>MiniMax M3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MiniMax</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Open Source</td>
  <td style="border:1px solid #ddd;padding:0.5em;">40.66</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen 3.6 27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Alibaba</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Open Source</td>
  <td style="border:1px solid #ddd;padding:0.5em;">39.29</td>
</tr>
</tbody>
</table>

**GPT-5.6 Terra Max Effort** leads the whole table at **67.98** - the actual current #1 on LiveBench's Agentic Coding leaderboard. **Kimi K3** is the top open-weight entry at **57.58**, well clear of GLM-5.2, though still behind Terra Max, GPT-5.6 Sol Max (65.61), Muse Spark 1.1 xHigh (65.05), and Grok 4.5 (59.8). As of July 27 you can download K3's weights, so this is now a self-hostable row - just not on hardware most teams have. **GLM-5.2** remains the best score you can reach on a single node, at **51.92 Agentic Coding Avg** and **79.65 Coding Avg**, roughly 6 points of agentic score behind K3.

> For the latest scores and full model list, visit the {{< link href="https://livebench.ai/#/?cats=Agentic+Coding" >}}LiveBench leaderboard{{< /link >}} directly.

### SWE-Bench Pro (coding-specific cross-check)

SWE-Bench Pro is the coding-specific benchmark that does cover the June releases, so it's the best head-to-head on code tasks alone. GLM-5.2 tops the open-weight field here, with the June releases clustered just behind. **Kimi K3 doesn't appear in this table** - Moonshot didn't report a SWE-Bench Pro number for it, publishing Terminal-Bench 2.1, FrontierSWE, Program Bench, DeepSWE, and SWE Marathon instead (see the Kimi K3 section below).

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Organization</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Released</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">SWE-Bench Pro</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM 5.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Z.AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Jun 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>62.1</strong></td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>MiniMax M3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MiniMax</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Jun 1, 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">59.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>DeepSeek-V4-Pro-Max</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apr 24, 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">55.4</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Muse Glimmer 30B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Meta</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 10, 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">51.2</td>
</tr>
</tbody>
</table>

The interesting row is the last one. **Muse Glimmer 30B lands 4.2 points behind DeepSeek-V4-Pro-Max** on this benchmark while being roughly 50x smaller in total parameters and running on a single 24GB GPU rather than eight H100s. Everything above it in this table needs a rack.

DeepSeek-V4-Pro-Max sits lower on SWE-Bench Pro but leads open weights on the older SWE-Bench Verified at **80.6%** (tied with Gemini 3.1 Pro) and posts **93.5% on LiveCodeBench**, so its ranking depends heavily on which benchmark you weight. Several of these are self-reported by the vendor; treat them as directional until LiveBench and other independent evaluations catch up.

## Best Open Source LLMs for Coding

The ranking below is by LiveBench's current Agentic Coding Average among models you can actually self-host. Kimi K3 takes the top slot on scores, but read its hardware and license notes before you plan around it - for most teams the real decision starts at GLM-5.2.

### 1. Kimi K3 (Moonshot AI) - Top Open-Weight Scores, Cluster Required

{{< image "best_open_source_self_hosted_llms_for_coding/kimi.webp" "Kimi K3 Open Source LLM by Moonshot AI" >}}

Moonshot AI announced {{< link href="https://kimi.com/" >}}Kimi K3{{< /link >}} on **July 16, 2026** and published the weights on {{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Hugging Face{{< /link >}} on **July 27, 2026**, along with a technical report and three of the infrastructure tools used to train it. At **2.8 trillion total parameters** it is the largest open-weight model released to date, and it hit the top of Hugging Face's trending chart within half an hour of going live.

The architecture is a "Stable LatentMoE" design with 896 experts, 16 of which activate per token for **104B active parameters**. It runs 93 layers (69 Kimi Delta Attention plus 24 Gated MLA), a 160K vocabulary, and a MoonViT-V2 vision encoder (401M) for native image understanding. Kimi Delta Attention and Attention Residuals support a full **1M-token context window**, four times the 256K window of the K2 line. Moonshot credits its MoonEP communication library with a 2.5x gain in scaling efficiency over the previous generation.

Two things to check before you plan around it. First, hardware: the weights are natively **MXFP4 (with MXFP8 activations) from quantization-aware training**, which is already the compact form - about **1.4 TB resident**, from a ~1.56 TB repository spread over 118 files. That does not fit the 640 GB in an 8x80GB H100 or H200 node, so there is no single-server deployment and no meaningful further quantization headroom. Moonshot recommends a supernode of **64 or more accelerators**. Supported engines are vLLM, SGLang, and TokenSpeed.

Second, the license. K3 does **not** ship under the Modified MIT terms the K2 line used. It carries a bespoke **Kimi K3 License** (tagged `license:other` on Hugging Face) that permits download, self-hosting, fine-tuning, and quantization, and fully exempts internal use never exposed to third parties. But Model-as-a-Service operators whose group revenue exceeds **$20M over any consecutive 12 months** must sign a separate agreement with Moonshot before commercial use, and products above 100M monthly active users or $20M monthly revenue must prominently display "Kimi K3" in the UI. Fine for internal developer tooling; read it properly if you plan to resell inference.

On Moonshot's own benchmarks, K3 posts **88.3 on Terminal-Bench 2.1**, **81.2 on FrontierSWE**, **77.8 on Program Bench**, **67.5 on DeepSWE**, and **42.0 on SWE Marathon**. On LMArena's Frontend Code Arena, K3 debuted at **#1 with 1,679 points**, ahead of Claude Fable 5 (1,631) and GPT-5.6 Sol (1,618). That said, across the wider set of published head-to-head benchmarks Fable 5 still wins more often than it loses to K3, so treat the Frontend Code Arena result as a genuine win on that specific task rather than overall superiority. LiveBench independently confirms the ranking, where it's the **#1 open-weight model** on both **Coding Avg (81.45)** and **Agentic Coding Avg (57.58)** - though GPT-5.6 Terra Max Effort (67.98 Agentic) and other proprietary models still lead the overall leaderboard. If you would rather rent than run it, API pricing is **$3 per million input tokens** ($0.30 on a cache hit) and **$15 per million output tokens**.

#### Key Specs - Kimi K3 (July 2026)

- **Architecture:** MoE ("Stable LatentMoE"), 2.8T total / 104B active parameters, 896 experts with 16 active per token, 93 layers (69 KDA + 24 Gated MLA)
- **Context Window:** 1M tokens (Kimi Delta Attention); native vision via MoonViT-V2
- **License:** Kimi K3 License (bespoke; self-hosting and fine-tuning allowed, revenue-triggered agreement for MaaS resale)
- **Weight format:** MXFP4 weights / MXFP8 activations from quantization-aware training, ~1.4 TB resident
- **Terminal-Bench 2.1:** 88.3 (self-reported by Moonshot AI)
- **FrontierSWE:** 81.2 (self-reported by Moonshot AI)
- **SWE-Bench Pro:** Not reported by Moonshot (they published Program Bench, DeepSWE, and SWE Marathon instead)
- **Artificial Analysis Intelligence Index:** 57 (independently scored, #1 open-weight in this guide; edges out Claude Opus 4.8's 56, but trails Claude Fable 5's 60)
- **LiveBench Coding Avg:** 81.45 (independently scored, #1 open-weight in this guide)
- **LiveBench Agentic Coding Avg:** 57.58 (independently scored, #1 open-weight in this guide; trails proprietary leader GPT-5.6 Terra Max Effort at 67.98)
- **API pricing:** $3/M input tokens ($0.30/M cache hit), $15/M output tokens
- **Self-hosting:** vLLM, SGLang, or TokenSpeed; multi-node cluster required (Moonshot suggests 64+ accelerators) - no single 8-GPU node fits it

### 2. GLM-5.2 (Z.AI) - Best Model That Fits One Server

{{< image "best_open_source_self_hosted_llms_for_coding/glm.webp" "GLM-5.2 Open Source LLM by Z.AI" >}}

{{< link href="https://huggingface.co/zai-org/GLM-5.2" >}}GLM-5.2{{< /link >}} (June 2026) from Z.AI is the most competitive coding model that actually fits a single multi-GPU server, and it's MIT licensed with no revenue clauses attached. It runs a **1M-token context** and was the first open-weight model to beat GPT-5.5 on SWE-Bench Pro. Unless you have a 64-GPU cluster for Kimi K3, this is the practical top of the self-hostable field.

What makes this family particularly noteworthy is its training infrastructure. The GLM-5 generation was trained on 100,000 Huawei Ascend 910B chips rather than NVIDIA GPUs - a significant milestone for non-NVIDIA AI hardware. Z.AI also introduced a novel reinforcement learning infrastructure called "Slime" that reduced hallucination rates from 90% to 34%, and GLM-5.2 adds anti-hack mechanisms in RL training specifically for coding agents.

GLM-5.2's architecture introduces **IndexShare**, which reuses the sparse attention indexer across every four sparse attention layers - cutting per-token FLOPs by 2.9x at 1M context length without sacrificing quality. An improved MTP layer increases speculative decoding acceptance length by up to 20%. It also adds two selectable thinking modes: **Max** for maximum reasoning depth and **High** for a better latency/quality tradeoff.

On coding benchmarks, GLM-5.2 scores **79.65 Coding Avg** and **51.92 Agentic Coding Avg** on LiveBench - second only to Kimi K3 among open weights, and the highest you can reach without a cluster. On SWE-Bench Pro it posts **62.1** (above GPT-5.5's 58.6), **81.0 on Terminal-Bench 2.1**, **74.4 on FrontierSWE** (vs Claude Opus 4.8's 75.1 and GPT-5.5's 72.6), and **76.8 on MCP-Atlas** (vs GPT-5.5's 75.3). {{< link href="https://artificialanalysis.ai/agents/coding-agents" >}}Artificial Analysis{{< /link >}} agrees on the ordering: **51.1 on its Intelligence Index**, ahead of MiniMax M3 and DeepSeek V4 Pro at 44 and behind only Kimi K3 at 57, plus **1524 on the real-world GDPval-AA v2 agentic benchmark**, effectively level with GPT-5.5 xHigh.

#### Key Specs - GLM-5.2 (June 2026)

- **Architecture:** MoE, 753B total / 40B active parameters
- **Context Window:** 1M tokens
- **License:** MIT
- **SWE-Bench Pro:** 62.1 (self-reported by Z.AI; beats GPT-5.5 at 58.6)
- **Terminal-Bench 2.1:** 81.0 (self-reported by Z.AI)
- **FrontierSWE:** 74.4 (self-reported by Z.AI)
- **MCP-Atlas:** 76.8 (self-reported by Z.AI)
- **LiveBench Coding Avg:** 79.65
- **LiveBench Agentic Coding Avg:** 51.92 (highest of any single-node self-hostable model in this guide)
- **Self-hosting:** vLLM (v0.23.0+), SGLang (v0.5.13.post1+), KTransformers, Transformers; weights on Hugging Face and ModelScope; roughly 4x H100/H200 80GB for 4-bit weights

### 3. MiniMax M3 (MiniMax) - Best Long Context + Multimodal

{{< link href="https://huggingface.co/MiniMaxAI" >}}MiniMax M3{{< /link >}} shipped on **June 1, 2026**, combining frontier coding performance, a **1M-token context**, and native multimodal input in a single architecture (weights followed within about ten days of the API launch). Its headline feature is **MSA (MiniMax Sparse Attention)**, which partitions the KV cache into blocks so each block is read only once - MiniMax says this delivers more than 4x faster attention than Flash-Sparse-Attention style implementations and much faster prefill at long context. It's reported at roughly 428B parameters, served through vLLM and SGLang.

Vendor benchmarks report **59.0% SWE-Bench Pro**, **66.0% Terminal-Bench 2.1**, and **74.2% MCP-Atlas**. On LiveBench it scores **68.20 Coding Avg** and **40.66 Agentic Coding Avg** - solidly mid-pack among self-hostable models, but it's the only one in this guide combining that context length with native image input.

#### Key Specs

- **Architecture:** MoE, ~428B total parameters (MiniMax Sparse Attention)
- **Context Window:** 1M tokens, native multimodal input
- **SWE-Bench Pro:** 59.0% (self-reported by MiniMax)
- **Terminal-Bench 2.1:** 66.0% (self-reported by MiniMax)
- **MCP-Atlas:** 74.2% (self-reported by MiniMax)
- **LiveBench Coding Avg:** 68.20
- **LiveBench Agentic Coding Avg:** 40.66
- **Self-hosting:** vLLM or SGLang; roughly 3-4x H100 80GB (~233 GB) for 4-bit weights

### 4. DeepSeek V4 Pro / V4-Pro-Max (DeepSeek) - Best Cost-to-Quality

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek.webp" "DeepSeek V4 Open Source LLMs" >}}

DeepSeek shipped **DeepSeek-V4** on **April 24, 2026** in two variants: {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro" >}}V4-Pro{{< /link >}} (**1.6T total / 49B active**) and {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash" >}}V4-Flash{{< /link >}} (**284B total / 13B active**), both **1M context**, MIT-licensed. It's still the current DeepSeek generation - the company has not announced a V5, and V4-Flash is the cheap workhorse of this guide.

The higher-effort **V4-Pro-Max** configuration leads open weights on SWE-Bench Verified at **80.6%** (tied with Gemini 3.1 Pro) and posts **93.5% on LiveCodeBench**, though on the stricter SWE-Bench Pro it lands at 55.4, behind GLM-5.2 and MiniMax M3. On LiveBench, V4-Pro scores **69.99 Coding Avg / 42.63 Agentic Coding Avg** (V4-Flash trails at 69.23 / 37.63) - so V4-Flash gives up surprisingly little agentic coding quality for a fifth of the parameters, which is the real argument for this family.

#### Key Specs

- **Architecture:** MoE, 1.6T total / 49B active (V4-Pro); 284B total / 13B active (V4-Flash)
- **Context Window:** 1M tokens
- **License:** MIT
- **SWE-Bench Verified:** 80.6% (V4-Pro-Max, self-reported; tied for top open-weight)
- **SWE-Bench Pro:** 55.4 (V4-Pro-Max, self-reported)
- **LiveCodeBench:** 93.5% (V4-Pro-Max, self-reported)
- **LiveBench Coding Avg:** 69.99 (V4-Pro); 69.23 (V4-Flash)
- **LiveBench Agentic Coding Avg:** 42.63 (V4-Pro); 37.63 (V4-Flash)
- **Self-hosting:** V4-Pro needs roughly 8x H100/H200 80GB for 4-bit weights; V4-Flash is far lighter at 284B total

### 5. Devstral 2 (Mistral AI) - Best for Vibe CLI Workflows

{{< image "best_open_source_self_hosted_llms_for_coding/mistral.webp" "Devstral 2 Open Source LLM by Mistral AI" >}}

{{< link href="https://mistral.ai/news/devstral-2-vibe-cli" >}}Devstral 2{{< /link >}} from Mistral AI is a 123 billion parameter model specifically designed for agentic software engineering. Released in December 2025, it scores 72.2% on SWE-bench Verified with a 256K context window and, on its last LiveBench snapshot, 66.79 Coding Avg / 43.33 Agentic Coding Avg. Mistral describes it as 7x more cost-efficient than Claude Sonnet, and at 123B dense it is an order of magnitude smaller than the trillion-scale MoE models above while staying competitive on benchmarks. It's the oldest model in this list, so treat it as a size/efficiency pick rather than a frontier one.

What makes the Devstral family compelling for self-hosting is the smaller sibling, **Devstral Small 2** (24B parameters), which scores an impressive 68% on SWE-bench Verified. That's remarkable for a model that runs on a single RTX 4090 or a Mac with 32GB of RAM. It also supports image inputs and comes with Apache 2.0 licensing, making it one of the most permissive options available. Mistral also offers **Vibe CLI**, an open source terminal coding assistant powered by Devstral, giving you a ready-made development workflow out of the box.

#### Key Specs (Devstral 2)

- **Parameters:** 123B
- **Context Window:** 256K tokens
- **License:** Modified MIT
- **LiveBench Coding Avg:** 66.79 (last scored before dropping off LiveBench's active rotation)
- **LiveBench Agentic Coding Avg:** 43.33 (last scored before dropping off LiveBench's active rotation)
- **SWE-bench Verified:** 72.2% (self-reported by Mistral AI)
- **Self-hosting:** Multi-GPU recommended for full model

#### Key Specs (Devstral Small 2)

- **Parameters:** 24B
- **Context Window:** 128K tokens
- **License:** Apache 2.0
- **SWE-bench Verified:** 68.0% (self-reported by Mistral AI)
- **Self-hosting:** Single RTX 4090 or Mac with 32GB RAM

### 6. MiMo-V2.5-Pro (Xiaomi) - 78.9% SWE-Bench, 68.4% TerminalBench

{{< image "best_open_source_self_hosted_llms_for_coding/mimo.webp" "MiMo-V2.5-Pro Open Source LLM by Xiaomi" >}}

{{< link href="https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro" >}}MiMo-V2.5-Pro{{< /link >}} is Xiaomi's latest open-weight model, released on **April 22, 2026**. It's a 1.02T total parameter MoE model with 42B active parameters and a 1M token context window - broadly comparable in scale to DeepSeek-V4 Pro. Weights are on Hugging Face and ModelScope under the MIT license.

MiMo-V2.5-Pro isn't on LiveBench, so a direct side-by-side comparison with the other models in this guide isn't possible. On {{< link href="https://mimo.xiaomi.com/mimo-v2-5-pro" >}}vendor-reported benchmarks{{< /link >}}, it posts **78.9% on SWE-Bench Verified** and **68.4% on TerminalBench 2.0**, just behind GLM-5.2's 81.0 on the newer TerminalBench 2.1. These are self-reported numbers from Xiaomi; treat them as directional until independent evaluations confirm them. Artificial Analysis does score it independently, at 42.2 on the Intelligence Index.

The architecture uses a hybrid attention design that interleaves local sliding window attention with global attention at a 6:1 ratio, which Xiaomi says cuts KV-cache memory usage by roughly 7x compared to full attention at long contexts. Three lightweight Multi-Token Prediction modules enable a 3x inference speedup. For self-hosting, SGLang is the recommended inference engine; the model requires a significant multi-GPU setup similar to other ~1T MoE models in this guide. Xiaomi pitches it at agentic and software engineering work, with support for workflows involving more than 1,000 sequential tool calls.

#### Key Specs

- **Architecture:** MoE, 1.02T total / 42B active parameters
- **Context Window:** 1M tokens
- **License:** MIT
- **SWE-Bench Verified:** 78.9% ({{< link href="https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro" >}}self-reported by Xiaomi{{< /link >}})
- **TerminalBench 2.0:** 68.4% ({{< link href="https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro" >}}self-reported by Xiaomi{{< /link >}})
- **LiveBench:** Not covered
- **Self-hosting:** SGLang or vLLM; multi-GPU setup required (similar footprint to DeepSeek V4 Pro)

### 7. Qwen 3.6 / Qwen3-Coder-Next (Alibaba) - Best on a Single GPU

{{< image "best_open_source_self_hosted_llms_for_coding/qwen_3_coder.webp" "Qwen 3.6 Open Source LLM by Alibaba" >}}

The general-purpose **Qwen 3.6** line (a 27B dense variant and the 35B-A3B MoE, both Apache 2.0, both released April 2026) is what shows up in this guide's LiveBench table: **71.78 Coding Avg / 39.29 Agentic Coding Avg** for the 27B, which makes it the best self-hostable option that fits a single consumer GPU. Nothing else in this guide comes close on that constraint.

On the coding-specialized side, {{< link href="https://huggingface.co/Qwen/Qwen3-Coder-Next" >}}Qwen3-Coder-Next{{< /link >}} (80B total, 3B active) combines hybrid attention with MoE and scores 70.6% on SWE-bench Verified from only 3B active parameters - the best efficiency-per-active-parameter story here. Alibaba also provides {{< link href="https://github.com/QwenLM/qwen-code" >}}Qwen Code{{< /link >}}, an open source terminal coding agent optimized for the Qwen models, so you get a working agent workflow without wiring one up yourself.

#### Key Specs

- **Architecture:** Dense 27B or MoE 35B-A3B (Qwen 3.6); MoE 80B total / 3B active (Qwen3-Coder-Next)
- **License:** Apache 2.0
- **SWE-bench Verified:** 70.6% (Qwen3-Coder-Next, self-reported by Alibaba)
- **LiveBench Coding Avg:** 71.78 (Qwen 3.6 27B)
- **LiveBench Agentic Coding Avg:** 39.29 (Qwen 3.6 27B)
- **Self-hosting:** Qwen 3.6 27B runs on a single 24GB GPU or a 32GB Mac via Ollama; Qwen3-Coder-Next needs more headroom despite its 3B active count

### 8. Muse Glimmer 30B (Meta) - Best Tool Use on a Single GPU

Meta Superintelligence Labs released {{< link href="https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model" >}}Muse Glimmer{{< /link >}} on **August 10, 2026**: a 30B dense multimodal model under **Apache 2.0**, built for agents that run on your own machine instead of in a datacenter. It is not a Llama model, and the announcement doesn't mention Llama once - it reads as a separate line out of MSL.

The specs that matter here: **~29.6B total parameters** (including a ~1.8B vision encoder), 52 layers, a **131K context window**, GQA at 16:1, and a repeating `[local, local, local, global]` attention pattern with a 2,048-token sliding window. Full BF16 wants about 64GB, but Meta ships K-Quant builds that put the language model under 20GB, so it fits a single 24GB card, with a reported **0.2-1.0% degradation across 15 benchmarks**. That is the entire pitch: a serious agentic model on hardware you already own.

Here's how it scores against its direct size-class rivals, both of which are already in this guide. All numbers are Meta's own, taken from the {{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}model card{{< /link >}} benchmark table, and all three columns are max-reasoning scores: Muse Glimmer in **High Reasoning**, Gemma4 and Qwen3.6 in **Thinking Mode**. TerminalBench 2.1 is run with the `terminus2` harness.

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Benchmark</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Muse Glimmer 30B</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Qwen3.6 27B</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Gemma4 31B</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">SWE-Bench Pro</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>51.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">50.2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">36.9</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">SWE-Bench Verified</td>
  <td style="border:1px solid #ddd;padding:0.5em;">76.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>77.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">66.6</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">TerminalBench 2.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">51.7</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>60.7</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">43.4</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">MCP Atlas (Public)</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>75.5</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">62.5</td>
  <td style="border:1px solid #ddd;padding:0.5em;">54.2</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSearch QA</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>74.6</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">71.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">61.7</td>
</tr>
</tbody>
</table>

Read that honestly and it's a split decision with Qwen 3.6 27B, not a clean win. Qwen still takes SWE-Bench Verified (77.2 vs 76.0) and takes **TerminalBench 2.1 by nine points** (60.7 vs 51.7), which is the benchmark closest to "can it actually drive a shell". Muse Glimmer edges SWE-Bench Pro and then pulls away on **MCP Atlas: 75.5 against Qwen's 62.5**. For scale, GLM-5.2 scores 76.8 on that same benchmark at 753B total parameters. A 30B model landing 1.3 points off it is the single most interesting number in this release. If your agent spends its time calling MCP servers, that gap is the reason to try it; if it spends its time in a terminal, Qwen 3.6 27B is still the better local pick.

The other piece worth knowing about is **DFlash**, a block-diffusion speculative decoder that drafts 16 tokens in a single pass. Meta reports **74.9 to 233.4 tok/s on an RTX 5090 (3.1x)**, 26.6 to 50.2 on an M5 Max (1.8x), and 23.7 to 37.8 on an M4 Max (1.5x), with output identical to standard decoding. Speculative decoding usually costs you quality or memory; a 3.1x jump for neither is the kind of thing that changes whether a local agent feels usable.

Two caveats. Every number above is self-reported by Meta - it isn't on LiveBench, and Artificial Analysis hasn't published an Intelligence Index score, so there's no independent read against the rest of this guide yet. And at 131K, its context window is the shortest of anything in the top half of this list, which bites when you point an agent at a large repo.

#### Key Specs

- **Architecture:** Dense causal transformer, ~29.6B total parameters (incl. ~1.8B vision encoder), 52 layers, GQA 16:1
- **Context Window:** 131K tokens; text + image input, text output
- **License:** Apache 2.0
- **SWE-Bench Pro:** 51.2 ({{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}self-reported by Meta{{< /link >}})
- **SWE-Bench Verified:** 76.0 (self-reported by Meta)
- **TerminalBench 2.1:** 51.7 (self-reported by Meta)
- **MCP Atlas:** 75.5 (self-reported by Meta; best tool-use score of any consumer-hardware model in this guide)
- **LiveBench / Artificial Analysis:** Not yet covered
- **Self-hosting:** Ollama, LM Studio, llama.cpp, vLLM, SGLang, Transformers, Jan, Docker Model Runner, and ExecuTorch on Apple devices; ~64GB VRAM at BF16, under 20GB with K-Quant so a single 24GB GPU or a 32GB Mac works

### 9. StarCoder 2 (BigCode / Hugging Face) - Most Auditable Training Data

{{< image "best_open_source_self_hosted_llms_for_coding/starcode2.webp" "StarCoder 2 Open Source LLM by BigCode" >}}

{{< link href="https://github.com/bigcode-project/starcoder2" >}}StarCoder 2{{< /link >}} is a collaboration between Hugging Face and ServiceNow under the BigCode project. Available in 3B, 7B, and 15B sizes, it was trained on 3.3 to 4.3 trillion tokens from The Stack v2, covering 619 programming languages. It uses Grouped Query Attention with a 16K context window.

StarCoder 2's standout quality is its data transparency. Every training data source is documented with Software Heritage Identifiers (SWHIDs), making it the most auditable coding model available. This matters for enterprises concerned about IP and licensing compliance. The 15B model matches or outperforms CodeLlama 34B (a model twice its size), demonstrating strong efficiency.

While it doesn't compete with the larger MoE models on raw benchmarks, StarCoder 2 remains an excellent choice for teams that need a lightweight, well-documented coding model they can run on modest hardware.

#### Key Specs

- **Sizes:** 3B, 7B, 15B
- **Context Window:** 16K tokens
- **License:** OpenRAIL (fully transparent training data)
- **Self-hosting:** Runs on consumer hardware via Ollama; 3B variant works on laptops

## Honorable Mentions

Several other open source models deserve recognition for specific strengths:

{{< image "best_open_source_self_hosted_llms_for_coding/ibm_granite.webp" "IBM Granite Code Open Source LLM" >}}

- {{< link href="https://www.ibm.com/granite" >}}IBM Granite Code{{< /link >}} - Available from 350M to 34B parameters under Apache 2.0, trained on 116 programming languages with license-permissible data. Granite 4.0 introduces hybrid Mamba-2/transformer architecture using 70% less memory. Best choice for enterprise compliance.

{{< image "best_open_source_self_hosted_llms_for_coding/nvidia_nemotran.webp" "NVIDIA Nemotron-Cascade 2 Open Source LLM" >}}

- {{< link href="https://research.nvidia.com/labs/nemotron/nemotron-cascade-2/" >}}NVIDIA Nemotron-Cascade 2{{< /link >}} - A 30B MoE with only 3B active parameters that achieves Gold Medal-level performance on competitive programming benchmarks (IMO, IOI, ICPC) with 20x fewer parameters than comparable models. Remarkable efficiency.

{{< image "best_open_source_self_hosted_llms_for_coding/yi_coder.webp" "Yi-Coder Open Source LLM by 01.AI" >}}

- {{< link href="https://github.com/01-ai/Yi-Coder" >}}Yi-Coder{{< /link >}} - From 01.AI, available in 1.5B and 9B sizes with 128K context and Apache 2.0 license. Yi-Coder 9B scores 85.4% on HumanEval, on par with DeepSeek Coder 33B at a fraction of the size.

## How to Use These Models with a Coding Agent

If you want a Claude Code or Aider-style workflow with self-hosted models, one of the easiest setups is **{{< link href="https://opencode.ai" >}}OpenCode{{< /link >}} + {{< link href="https://ollama.com" >}}Ollama{{< /link >}}**. This combination gives you a local coding agent with a simple terminal workflow and no cloud dependency.

### Easiest Setup: OpenCode + Ollama

If you're using Ollama's built-in Applications flow, the setup is even simpler. The current {{< link href="https://ollama.com/library/qwen3.6" >}}Qwen 3.6 Ollama page{{< /link >}} lists a direct OpenCode launch command.

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

**Step 3: Launch OpenCode directly through Ollama Applications**

```bash
ollama launch opencode --model qwen3.6:35b-a3b
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode.webp" "opencode" >}}

**Step 4: Open your project and start working**

Once OpenCode starts, point it at your repository and use it like any other terminal coding agent for explaining code, refactoring files, writing tests, or implementing features.

If you want a smaller local footprint, Ollama also provides smaller Qwen 3.6 variants (for example 27B-class options). Check the live Ollama model page for currently available tags.

### Why This Setup Works Well

- **Fastest setup path** because Ollama can launch OpenCode directly as an application
- **Runs fully local** with no separate model gateway to configure
- **Easy to scale up or down** by swapping the Ollama model tag based on your hardware


## How to Self-Host These Models Locally

Once you've picked a model, you need the right tools and hardware to run it. We've covered this extensively in our previous guides:

- {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}How to Self-Host Any LLM - Step by Step Guide{{< /link >}} - A complete walkthrough covering installation, model download, quantization, GPU setup, and connecting to your development tools.
- {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}Top 5 Local LLM Tools and Models{{< /link >}} - A detailed comparison of Ollama, vLLM, llama.cpp, LM Studio, and other self-hosting tools with hardware requirements and performance benchmarks.


## Conclusion

**Kimi K3** holds the top open-weight scores on every independent benchmark we checked, but at ~1.4 TB it needs a cluster and a bespoke license, so for most teams it's an API model that happens to be downloadable. **GLM-5.2** is the one to actually deploy: the best scores of anything that fits a single server, MIT licensed, roughly 4x H100. At the small end, **Muse Glimmer 30B** quantizes under 20GB and posts 75.5 on MCP Atlas, within 1.3 points of a 753B model, though Qwen 3.6 27B still beats it on terminal work.

So: start with Qwen 3.6 27B or Devstral Small 2 locally, add Muse Glimmer if your agent leans on MCP tool calls, move to GLM-5.2 once you have a GPU server, and reach for Kimi K3 only if you have the cluster. With the best open weights now 3 points off the top of the Artificial Analysis index, the gap with proprietary models keeps shrinking.
