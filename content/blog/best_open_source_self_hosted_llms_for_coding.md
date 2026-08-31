---
title: "Best Open Source Self-Hosted LLMs for Coding in 2026"
description: "Discover the best open source LLMs for coding and development that you can self-host. Compare Kimi K3, Qwen3.8-Max, GLM-5.3, GLM-5.3-Flash, DeepSeek-V4-Pro, MiniMax M3, Qwen3.8-27B, Muse Glimmer 30B, Nemotron 3.5 Lightning and more with benchmarks, hardware requirements, and deployment guides."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-08-30T09:00:00+05:30
draft: false
tags: ["open source LLM", "self-hosted AI", "local LLM", "AI coding agents", "open source"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/best_open_source_self_hosted_llms_for_coding_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIENob29zZSBhbmQgU2VsZi1Ib3N0IE9wZW4gU291cmNlIExMTXMgZm9yIENvZGluZyIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBzZWxlY3RpbmcgYW5kIHNlbGYtaG9zdGluZyB0aGUgYmVzdCBvcGVuIHNvdXJjZSBsYXJnZSBsYW5ndWFnZSBtb2RlbHMgZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50IGluIDIwMjYsIGluY2x1ZGluZyBtb2RlbCBjb21wYXJpc29uLCBoYXJkd2FyZSByZXF1aXJlbWVudHMsIGFuZCBkZXBsb3ltZW50IHRvb2xzLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBc3Nlc3MgWW91ciBIYXJkd2FyZSBhbmQgUmVxdWlyZW1lbnRzIiwKICAgICAgInRleHQiOiAiRGV0ZXJtaW5lIHlvdXIgYXZhaWxhYmxlIGhhcmR3YXJlIChHUFUgVlJBTSwgc3lzdGVtIFJBTSwgc3RvcmFnZSkgYW5kIGNvZGluZyBuZWVkcy4gRm9yIGEgc2luZ2xlIGNvbnN1bWVyIEdQVSB3aXRoIDI0R0IgVlJBTSBvciBhIDMyR0IgTWFjLCBRd2VuMy44LTI3QiBxdWFudGl6ZXMgdG8gcm91Z2hseSAxNC0xN0dCIGF0IDQtYml0IGFuZCBpcyB0aGUgc3Ryb25nZXN0IG1vZGVsIHRoYXQgZml0cywgd2l0aCBNdXNlIEdsaW1tZXIgMzBCLCBOZW1vdHJvbiAzLjUgTGlnaHRuaW5nIGFuZCBEZXZzdHJhbCBTbWFsbCAyIGFzIGFsdGVybmF0aXZlcy4gRm9yIGEgc2luZ2xlIDgtR1BVIDgwR0Igc2VydmVyLCBHTE0tNS4zLUZsYXNoIGZpdHMgYXQgcm91Z2hseSAxODAtMTk1R0IgaW4gNC1iaXQuIEtpbWkgSzMgYW5kIFF3ZW4zLjgtTWF4IG5lZWQgbXVsdGktbm9kZSBjbHVzdGVycywgYXQgcm91Z2hseSAxLjRUQiBhbmQgMS4zVEIgb2YgNC1iaXQgd2VpZ2h0cyByZXNwZWN0aXZlbHkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNob29zZSBZb3VyIE1vZGVsIEJhc2VkIG9uIFVzZSBDYXNlIiwKICAgICAgInRleHQiOiAiU2VsZWN0IGEgbW9kZWwgdGhhdCBmaXRzIHlvdXIgY29kaW5nIHdvcmtmbG93LiBLaW1pIEszIGFuZCBRd2VuMy44LU1heCBwb3N0IHRoZSBoaWdoZXN0IG9wZW4td2VpZ2h0IHNjb3JlcyBidXQgYm90aCByZXF1aXJlIGNsdXN0ZXIgaGFyZHdhcmUgYW5kIGNhcnJ5IHJldmVudWUtZ2F0ZWQgYmVzcG9rZSBsaWNlbnNlcy4gR0xNLTUuMy1GbGFzaCBpcyB0aGUgc3Ryb25nZXN0IE1JVC1saWNlbnNlZCBtb2RlbCB0aGF0IGZpdHMgb25lIDgtR1BVIG5vZGUuIEZvciBsaWdodHdlaWdodCBsb2NhbCB1c2UsIFF3ZW4zLjgtMjdCIGlzIHRoZSBjbGVhciBwaWNrIGF0IDUyIG9uIHRoZSBBcnRpZmljaWFsIEFuYWx5c2lzIEludGVsbGlnZW5jZSBJbmRleCwgcm91Z2hseSAxNCBwb2ludHMgYWJvdmUgYW55IG90aGVyIG1vZGVsIGluIGl0cyBzaXplIGNsYXNzLiBGb3IgY29zdC1zZW5zaXRpdmUgc2VydmluZywgRGVlcFNlZWstVjQtRmxhc2ggZ2l2ZXMgdXAgbGl0dGxlIGFnZW50aWMgY29kaW5nIHF1YWxpdHkgYXQgYXJvdW5kIDMwMEIgdG90YWwgcGFyYW1ldGVycy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBhIFNlbGYtSG9zdGluZyBUb29sIiwKICAgICAgInRleHQiOiAiU2V0IHVwIGEgZGVwbG95bWVudCB0b29sIGxpa2UgT2xsYW1hIGZvciBxdWljayBsb2NhbCBwcm90b3R5cGluZywgdkxMTSBvciBTR0xhbmcgZm9yIHByb2R1Y3Rpb24gc2VydmluZyB3aXRoIGhpZ2ggY29uY3VycmVuY3ksIG9yIGxsYW1hLmNwcCBmb3IgbWF4aW11bSBjb250cm9sIGFuZCBDUFUgaW5mZXJlbmNlLiBGb3IgYSBHVUkgZXhwZXJpZW5jZSwgdXNlIExNIFN0dWRpbyBvciBPcGVuIFdlYlVJLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJEb3dubG9hZCBhbmQgUnVuIHRoZSBNb2RlbCIsCiAgICAgICJ0ZXh0IjogIlB1bGwgeW91ciBjaG9zZW4gbW9kZWwgdXNpbmcgdGhlIHNlbGVjdGVkIHRvb2wuIEZvciBleGFtcGxlLCBydW4gb2xsYW1hIHB1bGwgcXdlbjMuODoyN2Igd2l0aCBPbGxhbWEsIG9yIGRvd25sb2FkIHdlaWdodHMgZnJvbSBIdWdnaW5nIEZhY2UgZm9yIHZMTE0uIEFwcGx5IDQtYml0IHF1YW50aXphdGlvbiAoUTRfS19NKSB0byByZWR1Y2UgbWVtb3J5IHVzYWdlIHdoaWxlIG1haW50YWluaW5nIHF1YWxpdHk7IEtpbWkgSzMgc2hpcHMgbmF0aXZlbHkgaW4gTVhGUDQgZnJvbSBxdWFudGl6YXRpb24tYXdhcmUgdHJhaW5pbmcsIGFuZCBRd2VuMy44LTI3QiBhbHNvIGhhcyBhbiBvZmZpY2lhbCBGUDggYnVpbGQgYXQgcm91Z2hseSAyOEdCLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnRlZ3JhdGUgd2l0aCBZb3VyIERldmVsb3BtZW50IFdvcmtmbG93IiwKICAgICAgInRleHQiOiAiQ29ubmVjdCB5b3VyIHNlbGYtaG9zdGVkIG1vZGVsIHRvIGNvZGluZyB0b29scyBsaWtlIE9wZW5Db2RlLCBDb250aW51ZS5kZXYsIEFpZGVyLCBRd2VuIENvZGUsIG9yIGFueSBPcGVuQUktY29tcGF0aWJsZSBjbGllbnQuIE1vc3Qgc2VsZi1ob3N0aW5nIHRvb2xzIGV4cG9zZSBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEkgZW5kcG9pbnQsIG1ha2luZyBpbnRlZ3JhdGlvbiBzdHJhaWdodGZvcndhcmQgd2l0aCBleGlzdGluZyBkZXZlbG9wbWVudCB3b3JrZmxvd3MuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/best_open_source_self_hosted_llms_for_coding_banner.webp" "Best Open Source Self-Hosted LLMs for Coding in 2026" >}}

Choosing a coding model used to be a decision you made once a year. The open-weight field now moves fast enough that the right answer changes every few weeks, and for most teams the deciding factor turns out to be hardware rather than benchmark scores.

August 2026 made that point emphatically. In the twenty days between **August 10 and August 29**, six open-weight releases landed: Meta's Muse Glimmer 30B, NVIDIA's Nemotron 3.5 Lightning, Alibaba's Qwen3.8-Max (2.4T) and Qwen3.8-27B, DeepSeek's V4-Pro GA build, and Z.AI's GLM-5.3-Flash and GLM-5.3, whose weights landed last of all on August 29. Two of those run on a single 24GB GPU. Two of them need a multi-node cluster.

Whether you're a solo developer who wants to keep code off third-party servers, a startup looking to cut API costs, or an enterprise with strict data compliance requirements, self-hosted open source LLMs have become a genuinely viable option for professional software development. In this guide, we'll cover the best open source models you can self-host for coding, the tools to deploy them, and the hardware you need to get started.

{{% tldr %}}

**Top open-weight coding models, ranked by Artificial Analysis Intelligence Index (v4.1.1, August 2026):**
1. **Kimi K3 (max)** - Index **60**, ~1.4 TB of weights, needs a cluster - <a target="_blank" href="https://huggingface.co/moonshotai/Kimi-K3">Get Kimi K3</a>
2. **Qwen3.8-Max (2.4T-A95B)** - Index **58**, SWE-bench Pro **67.7**, needs a cluster - <a target="_blank" href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B">Get Qwen3.8-Max</a>
3. **GLM-5.3-Flash** - Index **57**, MIT, 320B/18B, fits one 8-GPU node - <a target="_blank" href="https://huggingface.co/zai-org/GLM-5.3-Flash">Get GLM-5.3-Flash</a>
4. **DeepSeek-V4-Pro (0813)** - Index **53**, MIT, 1.6T/49B - <a target="_blank" href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">Get DeepSeek-V4-Pro</a>
5. **Qwen3.8-27B** - Index **52**, Apache 2.0, runs on one 24GB GPU - <a target="_blank" href="https://huggingface.co/Qwen/Qwen3.8-27B">Get Qwen3.8-27B</a>
6. **MiniMax M3** - Index **45**, 1M context, native multimodal - <a target="_blank" href="https://huggingface.co/MiniMaxAI">Get MiniMax M3</a>

**If you have one GPU, pull Qwen3.8-27B.** Alibaba published the weights on **August 14, 2026** under Apache 2.0. It is a 27B dense multimodal model that quantizes to roughly **14-17GB at 4-bit**, and it scores **52** on the Artificial Analysis Intelligence Index against **38** for Qwen3.6-27B and **35** for Meta's Muse Glimmer 30B. That is not a close race in its size class. See the [Qwen3.8-27B section below](#6-qwen38-27b-alibaba---best-model-for-a-single-gpu).

**GLM-5.3's weights just landed.** Z.AI announced it on **August 14, 2026**, held the weights back two weeks for a safety review prompted by the model's unexpected offensive-security scores, and published them on **August 29** - 756 GB of native FP8 across 141 files, under a bespoke GLM-5.3 License. At an Intelligence Index of **60** it ties Kimi K3 for the best open weight there is, but it needs H200-class hardware. If your ceiling is one 8x80GB node, **GLM-5.3-Flash** (August 26, MIT, 320B/18B, natively multimodal, 1M context) is still the one to deploy. See the [GLM-5.3 section below](#3-glm-53-and-glm-53-flash-zai---best-that-fits-one-server).

**Best self-hosting tools:**
- <a target="_blank" href="https://ollama.com">Ollama</a> - Easiest way to get started locally
- <a target="_blank" href="https://github.com/vllm-project/vllm">vLLM</a> - Best for production serving
- <a target="_blank" href="https://lmstudio.ai">LM Studio</a> - Best GUI for desktop users

{{% /tldr %}}


## Open Source vs Proprietary: How Close Is the Gap?

Before diving into individual models, it's worth understanding where open source stands. We use {{< link href="https://artificialanalysis.ai/models/open-source" >}}Artificial Analysis{{< /link >}} as the primary lens here because it's independent, it re-scores models itself rather than reprinting vendor claims, and it already covers the entire August 2026 wave. Its **Intelligence Index** (currently **v4.1.1**, aggregating nine evaluations including GDPval-AA v2, Terminal-Bench 2.1, SciCode and GPQA Diamond) collapses that into one number. We cross-check it against **SWE-Bench Pro** and **Terminal-Bench 2.1** further down, plus **LiveBench** where coverage exists.

### Artificial Analysis Intelligence Index (August 2026, open weights)

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
  <td style="border:1px solid #ddd;padding:0.5em;">Claude Opus 5</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Anthropic</td>
  <td style="border:1px solid #ddd;padding:0.5em;">63</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Proprietary, no self-host</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Kimi K3 (max)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Moonshot AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>60</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Multi-node cluster, 64+ accelerators (~1.4 TB at MXFP4)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM-5.3 (max)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Z.AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>60</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">8x H200 141GB (756 GB, native FP8)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.8-Max (2.4T-A95B)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Alibaba</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>58</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Multi-node cluster, 4+ nodes (~1.3 TB at INT4)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM-5.3-Flash</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Z.AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>57</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">8x H100/H200 80GB (~180-195 GB at Q4)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>DeepSeek V4 Pro (0813)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">DeepSeek</td>
  <td style="border:1px solid #ddd;padding:0.5em;">53</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8x H100/H200 80GB (~430 GB)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.8-27B (xhigh)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Alibaba</td>
  <td style="border:1px solid #ddd;padding:0.5em;">52</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Single 24GB GPU or 32GB Mac (~14-17 GB at 4-bit)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>MiniMax M3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MiniMax</td>
  <td style="border:1px solid #ddd;padding:0.5em;">45</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3-4x H100 80GB (~233 GB)</td>
</tr>
</tbody>
</table>

The **Hardware requirement** column is the approximate memory for 4-bit weights (INT4/Q4, or MXFP4 for Kimi K3) and the smallest box that fits them, taken from vendor and community deployment notes ({{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Kimi K3{{< /link >}}, {{< link href="https://www.spheron.network/tools/gpu-recommender/Qwen/Qwen3.8-2.4T-A95B-FP8/" >}}Qwen3.8-Max{{< /link >}}, {{< link href="https://unsloth.ai/docs/models/glm-5.3-flash" >}}GLM-5.3-Flash{{< /link >}}, {{< link href="https://knightli.com/en/2026/05/01/deepseek-v4-local-vram-quantization-table/" >}}DeepSeek V4{{< /link >}}). Add headroom on top for the KV cache, which balloons at these models' 1M context lengths.

Two things changed this table in August. At the top, **Claude Opus 5 now leads the overall index at 63**, with Kimi K3 at **60** three points behind it. Alibaba's **Qwen3.8-Max at 58** is the new #2 open weight and the first Qwen-Max-class flagship ever published - every prior Max was API-only.

At the bottom, **Qwen3.8-27B scores 52 on a single 24GB card**, against 37 for the best single-GPU option in the previous version of this guide. That 15-point jump in four months is the most useful number here: the "run it on a laptop" tier is no longer a big compromise.

The full **GLM-5.3** scores **60** as well, tying Kimi K3 at the top of the open-weight field. Its weights only became downloadable on **August 29**, and at 756 GB of FP8 it needs more memory than an 8x80GB node holds - covered below.

### Practical models you can actually self-host

Everything above the Qwen3.8-27B row needs a rack. If your "server" is a laptop, the ceiling is Apple's: the M5 Max MacBook Pro tops out at **128GB of unified memory**, which has to hold weights plus KV cache - at 4-bit, a cutoff around 125B total parameters. Same Intelligence Index as above, so these read directly against Kimi K3's 60 and Claude Opus 5's 63.

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
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.8-27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">27B dense + vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~14-17 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>52</strong></td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.6-27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">27.8B dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~17 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">38</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Muse Glimmer 30B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">29.6B dense + vision</td>
  <td style="border:1px solid #ddd;padding:0.5em;">under 20 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">35</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Gemma 4 31B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">30.7B dense</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~18 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">30</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Nemotron 3 Super 120B-A12B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">120.6B / 12.7B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~68 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">26</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>gpt-oss-120b (high)</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">117B / 5.1B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~63 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Nemotron 3.5 Lightning</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">31.6B / 3.6B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">~18 GB</td>
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

**Bigger still does not win on a laptop.** Qwen3.8-27B tops this table at **52** with the smallest footprint on it, beating every 120B-class model that also fits by more than 25 points. If you only take one recommendation from this section: pull the 27B, not the biggest thing that fits.

Three vendors shipped a ~30B agent model within five days in August: Meta's Muse Glimmer (Aug 10), NVIDIA's Nemotron 3.5 Lightning (Aug 11), then Qwen3.8-27B (Aug 14), which reset the class. Each keeps a distinct pitch - Qwen wins capability, Nemotron wins throughput, Muse Glimmer wins MCP tool use.

What does *not* fit on one machine: **GLM-5.3-Flash**, at roughly 105-115GB with Unsloth 2-bit quants and 180-195GB at a proper Q4. Kimi K3 and Qwen3.8-Max are further out of reach again.

### SWE-Bench Pro and Terminal-Bench 2.1 (coding-specific cross-check)

The Intelligence Index is a general-capability score. For code specifically, SWE-Bench Pro and Terminal-Bench 2.1 are the two benchmarks with the widest coverage across this field, so the table is sorted by Terminal-Bench 2.1. This table was rebuilt against {{< link href="https://huggingface.co/datasets/ScaleAI/SWE-bench_Pro" >}}the official SWE-Bench Pro dataset's own Hugging Face leaderboard{{< /link >}}, which auto-aggregates every model's declared result, and it surfaced four legitimate open-weight entrants this guide had not covered: **Tencent's Hy4-preview**, **Ornith AI's Ornith-1.5-397B**, **Xiaohongshu's dots3-note-prev**, and **Poolside's Laguna S 2.1** - the last of these notable because Poolside was a closed, API-only US lab until this release. Numbers come from each model's own card, cross-checked against several rivals' own cross-vendor benchmark tables ({{< link href="https://huggingface.co/tencent/Hy4-preview" >}}Tencent Hy4-preview{{< /link >}}, {{< link href="https://huggingface.co/ornith-ai/Ornith-1.5-397B" >}}Ornith-1.5-397B{{< /link >}}, {{< link href="https://huggingface.co/dots-studio/dots3-note-prev" >}}dots3-note-prev{{< /link >}}, {{< link href="https://huggingface.co/poolside/Laguna-S-2.1" >}}Laguna S 2.1{{< /link >}}, {{< link href="https://huggingface.co/zai-org/GLM-5.2" >}}GLM-5.2{{< /link >}}), which is why we trust it: Kimi K3's 88.3 Terminal-Bench score and Claude Opus 4.8's 69.2 SWE-Bench Pro score each appear identically across four independent competitors' tables.

Two traps worth knowing before you compare these against anything else. First, **every number below is vendor-run**, with each lab using its own scaffolding; Scale's own {{< link href="https://labs.scale.com/leaderboard/swe_bench_pro_public" >}}SEAL leaderboard{{< /link >}}, which uses standardized scaffolding, currently tops out at **61.5 (Muse Spark 1.1)** with Claude Opus 4.6 at **51.9** - noticeably below what vendors self-report - and does not cover most of the models below. Second, **SWE-Bench Pro is not SWE-bench Verified.** Pro is the harder benchmark this section is about; Verified lives on {{< link href="https://www.swebench.com/" >}}swebench.com{{< /link >}} and scores much higher. The two get mixed up constantly, including by us in an earlier version of this table - if you see a SWE-Bench Pro score in the high 70s or 80s for a proprietary model anywhere else, check which benchmark it is actually citing.

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Released</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">SWE-Bench Pro</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Terminal-Bench 2.1</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">GPT-5.6 Sol <em>(proprietary)</em></td>
  <td style="border:1px solid #ddd;padding:0.5em;">-</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Not reported</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>88.8</strong></td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Kimi K3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Jul 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Not reported*</td>
  <td style="border:1px solid #ddd;padding:0.5em;">88.3</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM-5.3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Not reported*</td>
  <td style="border:1px solid #ddd;padding:0.5em;">88.2</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>DeepSeek V4-Pro</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">55.4</td>
  <td style="border:1px solid #ddd;padding:0.5em;">87.9</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Claude Opus 5 <em>(proprietary)</em></td>
  <td style="border:1px solid #ddd;padding:0.5em;">-</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>79.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">86.7</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.8-Max</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">67.7</td>
  <td style="border:1px solid #ddd;padding:0.5em;">86.6</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Ornith-1.5-397B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">65.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">86.1</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Tencent Hy4-preview</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">65.7</td>
  <td style="border:1px solid #ddd;padding:0.5em;">85.4</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>GLM-5.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Jun 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">62.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">81.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>dots3-note-prev</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">61.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">75.1</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3.8-27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">61.7</td>
  <td style="border:1px solid #ddd;padding:0.5em;">73.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Poolside Laguna-S-2.1</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Jul 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">59.4</td>
  <td style="border:1px solid #ddd;padding:0.5em;">70.2</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>MiniMax M3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Jun 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">59.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">66.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Muse Glimmer 30B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Aug 2026</td>
  <td style="border:1px solid #ddd;padding:0.5em;">51.2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">51.7</td>
</tr>
</tbody>
</table>

**The top of the Terminal-Bench column is still the real story, and it hasn't changed hands.** GPT-5.6 Sol leads at 88.8, with Kimi K3 (88.3), GLM-5.3 (88.2) and DeepSeek V4-Pro (87.9) all open weights within a point of it. Claude Opus 5 (86.7) and the brand-new Ornith-1.5-397B (86.1) sit right behind that cluster.

**SWE-Bench Pro is where the new entrants actually change the ranking.** Qwen3.8-Max still leads open weights at 67.7, but it's no longer alone at the top: Tencent's **Hy4-preview scores 65.7** and Ornith's **397B model scores 65.1**, both released within the last week of August and both ahead of GLM-5.2 (62.1). Further down, **Poolside's Laguna S 2.1 posts 59.4** - the more interesting number here isn't the score, it's that Poolside was a closed, API-only lab until this release, joining Meta and NVIDIA as Western labs that opened up in August.

The row to look at twice for hardware efficiency is still **Qwen3.8-27B**: 61.7 on SWE-Bench Pro at roughly 28x fewer parameters than GLM-5.2, and now joined by **dots3-note-prev** (61.0 at 280B/16B active) as a second efficient option in a similar range. Everything above Qwen3.8-27B in this table needs at least four 80GB GPUs; Ornith-1.5-397B and Hy4-preview, at roughly 800GB and 1.5TB in BF16 respectively, sit at the upper end of that same tier.

Three footnotes. \*Kimi K3 and GLM-5.3 have no vendor-reported SWE-Bench Pro number, but independent competitor retests (from Tencent's, Ornith's and dots3-note-prev's own cross-vendor tables) consistently place both around **63-65**, in the same neighborhood as GLM-5.2 - useful context, not a substitute for an official score. DeepSeek's 55.4 shows up identically on cards dated June, July and August 2026, including DeepSeek's own current card for the V4-Pro-**0813** GA build - the August update's gains landed on other benchmarks, not this one. And GLM-5.3 does publish **Terminal-Bench 3.0** (28.3, against GLM-5.2's 4.6), a harder longer-horizon benchmark on a different scale that should never be read next to the 2.1 column above.

### What LiveBench does and does not cover

{{< link href="https://livebench.ai/#/?cats=Agentic+Coding" >}}LiveBench{{< /link >}} is the contamination-aware cross-check, but its coverage now lags the field. Its agentic-coding rotation has **Kimi K3 at 57.58 Agentic / 81.45 Coding** (top open weight), **GLM-5.2 at 51.92 / 79.65**, **DeepSeek V4 Pro at 42.63 / 69.99**, **MiniMax M3 at 40.66 / 68.20**, and **Qwen3.6-27B at 39.29 / 71.78**.

None of the August releases have agentic-coding breakdowns yet, and GLM-5.3 cannot be scored until its weights ship. Treat LiveBench as confirmation for the June and July models and use Artificial Analysis for anything newer.


## Best Open Source LLMs for Coding

The ranking below is by Artificial Analysis Intelligence Index among models you can actually download. The first two take the top slots on scores but need cluster hardware, so read the deployment notes before you plan around them. For most teams the real decision starts at GLM-5.3-Flash, and for anyone with a single GPU it starts at Qwen3.8-27B.

### 1. Kimi K3 (Moonshot AI) - Top Open-Weight Scores, Cluster Required

{{< image "best_open_source_self_hosted_llms_for_coding/kimi.webp" "Kimi K3 Open Source LLM by Moonshot AI" >}}

Moonshot AI announced {{< link href="https://kimi.com/" >}}Kimi K3{{< /link >}} on **July 16, 2026** and published the weights on {{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Hugging Face{{< /link >}} on **July 27, 2026**, along with a technical report and three of the infrastructure tools used to train it. At **2.8 trillion total parameters** it is the largest open-weight model released to date, and it hit the top of Hugging Face's trending chart within half an hour of going live. A month later it is still the highest-scoring open weight on the Artificial Analysis Intelligence Index at **60**, though Qwen3.8-Max has closed to within two points.

The architecture is a "Stable LatentMoE" design with 896 experts, 16 active per token for **104B active parameters**, across 93 layers (69 Kimi Delta Attention plus 24 Gated MLA), with a MoonViT-V2 vision encoder for native image understanding and a full **1M-token context** - four times the K2 line's 256K.

Two things to check before you plan around it. **Hardware:** the weights are natively **MXFP4 from quantization-aware training**, so ~1.4 TB resident is already the compact form. That does not fit the 640 GB in an 8x80GB node, and there is no meaningful further quantization headroom; Moonshot recommends **64 or more accelerators**. Engines are vLLM, SGLang, and TokenSpeed.

**License:** K3 drops the K2 line's Modified MIT for a bespoke **Kimi K3 License** that permits self-hosting, fine-tuning and quantization, and fully exempts internal use. But MaaS operators above **$20M group revenue over any 12 months** need a separate agreement with Moonshot, and products above 100M MAU must display "Kimi K3" in the UI. Fine for internal tooling; read it properly if you plan to resell inference.

On Moonshot's own benchmarks K3 posts **88.3 on Terminal-Bench 2.1** (still the highest of any open weight), **81.2 on FrontierSWE** and **67.5 on DeepSWE**; it did not report SWE-Bench Pro. It debuted at **#1 on LMArena's Frontend Code Arena** with 1,679 points. API pricing is **$3/M input** ($0.30 cached) and **$15/M output**.

#### Key Specs - Kimi K3

- **Architecture:** MoE ("Stable LatentMoE"), 2.8T total / 104B active parameters, 896 experts with 16 active per token, 93 layers (69 KDA + 24 Gated MLA)
- **Context Window:** 1M tokens (Kimi Delta Attention); native vision via MoonViT-V2
- **License:** Kimi K3 License (bespoke; self-hosting and fine-tuning allowed, revenue-triggered agreement for MaaS resale)
- **Weight format:** MXFP4 weights / MXFP8 activations from quantization-aware training, ~1.4 TB resident
- **Terminal-Bench 2.1:** 88.3 (self-reported by Moonshot AI)
- **FrontierSWE:** 81.2 (self-reported by Moonshot AI)
- **Artificial Analysis Intelligence Index:** 60 (independently scored, #1 open weight; trails Claude Opus 5 at 63)
- **LiveBench Coding Avg / Agentic Coding Avg:** 81.45 / 57.58 (independently scored, #1 open weight)
- **API pricing:** $3/M input tokens ($0.30/M cache hit), $15/M output tokens
- **Self-hosting:** vLLM, SGLang, or TokenSpeed; multi-node cluster required (Moonshot suggests 64+ accelerators) - no single 8-GPU node fits it

### 2. Qwen3.8-Max (Alibaba) - First Open Max-Class Flagship

{{< image "best_open_source_self_hosted_llms_for_coding/qwen.webp" "Qwen3.8-Max Open Source LLM by Alibaba" >}}

Alibaba announced Qwen3.8-Max on **August 3, 2026** and published the weights as {{< link href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B" >}}Qwen3.8-2.4T-A95B{{< /link >}} around **August 12-13**. This is the first time a Qwen-Max-class flagship has ever been open-weighted; 2.5-Max, 3-Max, 3.6-Max and 3.7-Max were all API-only. At **2.4T total / 95B active** it is the second-largest open model ever released, behind only Kimi K3.

The architecture is a sparse MoE with **512 experts, 10 routed plus 1 shared active per token**, a native **262,144-token context** extensible to about 1.01M with RoPE scaling, and up to 128K output tokens. Reasoning is always on: the model emits `<think>` blocks before its final answer and thinking cannot be disabled, though you can dial it with a `reasoning_effort` parameter set to `xhigh`, `medium` or `low`. Deployment is supported on SGLang, vLLM, TokenSpeed, Transformers and Docker Model Runner.

On coding it is the strongest open weight that reports SWE-Bench Pro: **67.7**, more than five points clear of GLM-5.2, alongside **86.6 on Terminal-Bench 2.1**, **56.6 on DeepSWE 1.1**, **92.6 on GPQA Diamond** and **93.0 on PaperBench**. Artificial Analysis scores it **58** on the Intelligence Index, second among open weights. Alibaba also demonstrated more than ten days of continuous autonomous coding and a chip-design optimisation run spanning 500+ turns, which is the kind of long-horizon claim that is hard to verify but does line up with the DeepSWE and Terminal-Bench numbers.

Two honest caveats. First, the downloadable model is **not the hosted Max**. The open weights are **text-only** with no vision, and ship with the 262K context rather than the hosted model's 1M; several threads on the Hugging Face repo are pointed about this. Second, the license is a bespoke **qwen3.8-max license**, not Apache 2.0, with revenue-gated carve-outs in the same family as Kimi K3's: prominent model-name attribution above 100M MAU or $20M monthly revenue, and a separate licence for MaaS or "AI Work Assistant" businesses above $50M in any twelve months.

Hardware is the real gate. FP16 inference needs roughly **5.3 TB of VRAM**; INT4 brings that down to about **1.3 TB**, which still exceeds the 640GB in an 8x80GB node. NVIDIA's NIM guide for the model targets **GB300-NVL72** hardware specifically, requires Kubernetes, and calls for at least four nodes. API pricing is $2 per million input tokens, $6 per million output, $0.25 per million cached.

#### Key Specs - Qwen3.8-Max

- **Architecture:** Sparse MoE, 2.4T total / ~95B active, 512 experts (10 routed + 1 shared per token)
- **Context Window:** 262K native, extensible to ~1.01M; 128K max output
- **License:** qwen3.8-max (bespoke, revenue-gated for large commercial and MaaS use)
- **Modality:** Text only in the open weights (the hosted Max is multimodal)
- **Thinking:** Always on, tunable via `reasoning_effort` (xhigh / medium / low)
- **SWE-bench Pro:** 67.7 (self-reported by Alibaba)
- **Terminal-Bench 2.1:** 86.6 (self-reported by Alibaba)
- **DeepSWE 1.1:** 56.6 (self-reported by Alibaba)
- **Artificial Analysis Intelligence Index:** 58 (independently scored, #2 open weight)
- **API pricing:** $2/M input, $6/M output, $0.25/M cached
- **Self-hosting:** SGLang, vLLM, TokenSpeed, Transformers, Docker Model Runner; ~1.3 TB at INT4, 4+ node cluster

### 3. GLM-5.3 and GLM-5.3-Flash (Z.AI) - Best That Fits One Server

{{< image "best_open_source_self_hosted_llms_for_coding/glm.webp" "GLM-5.3 Open Source LLM by Z.AI" >}}

Z.AI announced **GLM-5.3** on **August 14, 2026** and rolled it out through the API on **August 18**. The interesting engineering detail is what it is *not*: the base model is **unchanged from GLM-5.2** (743B parameters). Every gain comes from scaled post-training, an approach Z.AI calls environment scaling. No retrain, no new architecture.

The gains are large. **Terminal-Bench 3.0 goes from 4.6 to 28.3**, **DeepSWE v1.1 from 46.2 to 66.9**, and Z.AI's internal Code Bench improves ~50% to 31.4% at roughly 50K tokens, against Claude Opus 4.8's 29.5% at 120K. Artificial Analysis scores it around **60**, level with Kimi K3 at a fraction of the parameters.

**The weights are finally out.** Z.AI held them back two weeks after launch for safety hardening, because the model developed unexpected offensive-security capability - it scores **84.5% on CyberGym** and **54.4% on ExploitBench**, and Z.AI ran it against real targets with several security teams, finding **2,436 vulnerabilities across 269 open-source projects**. They went live at {{< link href="https://huggingface.co/zai-org/GLM-5.3" >}}zai-org/GLM-5.3{{< /link >}} on **August 29, 2026**, a day after the announced date.

Three things to know before you pull them. They ship as **native FP8** (e4m3, 128x128 block scaling) rather than the usual paired BF16/FP8 repos, so **756 GB across 141 safetensors files** is already the compact form - that clears eight H200s at 1.1 TB but not the 640 GB in an 8x80GB H100 node. The architecture is confirmed as 78 layers, 256 routed experts with 8 active per token, and a full **1M-token context**. And the license is **not MIT**: it is a bespoke **GLM-5.3 License** that grants use, modification, distribution, fine-tuning and resale freely, with one clause - Model-as-a-Service operators whose aggregate revenue exceeds **$10 billion over any 12 months** must pass a Z.AI security review first. That threshold is high enough to be irrelevant to almost everyone, and far looser than Kimi K3's $20M trigger.

**GLM-5.3-Flash is the one you can deploy today.** Shipped **August 26, 2026** under **MIT**: a **320B total / 18B active** MoE, the first natively multimodal model in the GLM-5 family, with a **1M-token context** and visual reasoning over rendered interfaces, documents and spreadsheets. It pairs linear attention with sparse attention, and an IndexPool scheme cuts KV cache **4.4x** while using about **three times less attention compute** than GLM-5.3.

Flash lands at **57** on the Intelligence Index with **DeepSWE v1.1 at 63.4** and **AutomationBench at 48.8** (up from 26.2). At roughly **$0.045 per task** on Artificial Analysis it is the cheapest thing in this weight class; API pricing is $0.15/M input and $0.50/M output.

For self-hosting, a Q4 GGUF lands around **180-195GB** before context, so the realistic floor is an 8-GPU node. Unsloth's dynamic quants go lower - roughly 105-115GB at 2-bit, within reach of a 128GB unified-memory machine via llama.cpp, at a real quality cost. Your hardware pays for all 320B total parameters, not just the 18B active ones.

#### Key Specs - GLM-5.3

- **Architecture:** MoE, 743B base (unchanged from GLM-5.2), 78 layers, 256 routed experts with 8 active per token; gains from post-training only
- **Context Window:** 1M tokens
- **License:** GLM-5.3 License (bespoke; free use, modification, resale and fine-tuning, with a security review required only for MaaS operators above $10B revenue)
- **Weight format:** Native FP8 (e4m3), 756 GB across 141 safetensors files, published **August 29, 2026**
- **Terminal-Bench 3.0:** 28.3, up from GLM-5.2's 4.6 (self-reported by Z.AI)
- **DeepSWE v1.1:** 66.9, up from 46.2 (self-reported by Z.AI)
- **CyberGym / ExploitBench:** 84.5% / 54.4% (self-reported by Z.AI)
- **Artificial Analysis Intelligence Index:** 60, tied with Kimi K3 for the top open weight
- **Thinking:** Three levels (low / high / max), cannot be disabled
- **Self-hosting:** vLLM or SGLang; 8x H200 141GB clears it, an 8x80GB H100 node does not

#### Key Specs - GLM-5.3-Flash

- **Architecture:** MoE, 320B total / 18B active, linear + sparse attention, IndexPool KV compression (4.4x)
- **Context Window:** 1M tokens, natively multimodal (text, images, rendered interfaces)
- **License:** MIT
- **DeepSWE v1.1:** 63.4 (self-reported by Z.AI)
- **AutomationBench:** 48.8, up from 26.2 (self-reported by Z.AI)
- **Artificial Analysis Intelligence Index:** 57 (independently scored, #3 open weight)
- **API pricing:** $0.15/M input, $0.50/M output; ~$0.045 per task on the AA index
- **Self-hosting:** SGLang, vLLM, TokenSpeed; ~180-195 GB at Q4 (8x80GB node), ~105-115 GB with Unsloth 2-bit dynamic quants

### 4. DeepSeek V4-Pro / V4-Flash (DeepSeek) - Best Cost-to-Quality

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek.webp" "DeepSeek V4 Open Source LLMs" >}}

DeepSeek shipped **DeepSeek-V4** as a preview on **April 24, 2026** and spent the summer taking it to general availability. {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash" >}}V4-Flash{{< /link >}} went GA on **July 31, 2026** at roughly **300B total parameters**, and {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro" >}}V4-Pro{{< /link >}} followed as build **0813** on **August 13**, at **1.6T total / 49B active**. Both carry a **1M-token context** with up to **384K output tokens**, both are MIT-licensed, and there is still no V5: DeepSeek has neither announced one nor published a roadmap mentioning it.

The 0813 build is an agent-focused update rather than a new generation. It adds three selectable reasoning effort levels (low for simple tasks, high for daily agent workflows, max for complex work), native support for the OpenAI Responses API, and specific optimisation for Codex-style integrations. Artificial Analysis re-scored it at **53** on the Intelligence Index, up from 44.3 for the preview build, which is one of the larger jumps from a point release this year.

The higher-effort **V4-Pro-Max** configuration still leads open weights on the older SWE-Bench Verified at **80.6%** and posts **93.5% on LiveCodeBench**, though on the stricter SWE-Bench Pro it lands at 55.4, now well behind Qwen3.8-Max and Qwen3.8-27B. On LiveBench, V4-Pro scores **69.99 Coding Avg / 42.63 Agentic Coding Avg** and V4-Flash trails at 69.23 / 37.63 - so V4-Flash gives up surprisingly little agentic coding quality for a fifth of the parameters, which remains the real argument for this family.

One thing to watch if you use the API rather than self-hosting: DeepSeek moved to peak/off-peak pricing on **August 16, 2026**. Peak output pricing went to $3.96 per million tokens from a flat $0.87, with off-peak rates 50% lower than peak. Self-hosting sidesteps that entirely, which is rather the point of this guide.

#### Key Specs

- **Architecture:** MoE, 1.6T total / 49B active (V4-Pro 0813); ~300B total (V4-Flash)
- **Context Window:** 1M tokens, up to 384K output
- **License:** MIT
- **Reasoning:** Three effort levels (low / high / max); native OpenAI Responses API support
- **SWE-Bench Verified:** 80.6% (V4-Pro-Max, self-reported)
- **SWE-Bench Pro:** 55.4 (V4-Pro-Max, self-reported)
- **LiveCodeBench:** 93.5% (V4-Pro-Max, self-reported)
- **LiveBench Coding Avg / Agentic Coding Avg:** 69.99 / 42.63 (V4-Pro); 69.23 / 37.63 (V4-Flash)
- **Artificial Analysis Intelligence Index:** 53 (V4-Pro 0813, independently scored)
- **Self-hosting:** V4-Pro needs roughly 8x H100/H200 80GB for 4-bit weights; V4-Flash is far lighter at ~300B total

### 5. MiniMax M3 (MiniMax) - Long Context Plus Multimodal

{{< link href="https://huggingface.co/MiniMaxAI" >}}MiniMax M3{{< /link >}} shipped on **June 1, 2026**, combining strong coding performance, a **1M-token context**, and native multimodal input in a single architecture (weights followed within about ten days of the API launch). Its headline feature is **MSA (MiniMax Sparse Attention)**, which partitions the KV cache into blocks so each block is read only once - MiniMax says this delivers more than 4x faster attention than Flash-Sparse-Attention style implementations and much faster prefill at long context. It's reported at roughly 428B parameters, served through vLLM and SGLang.

Vendor benchmarks report **59.0 SWE-Bench Pro**, **66.0 Terminal-Bench 2.1**, and **74.2 MCP-Atlas**. On LiveBench it scores **68.20 Coding Avg** and **40.66 Agentic Coding Avg**, and Artificial Analysis puts it at **45** on the Intelligence Index. The August wave has pushed it down the table, but it remains one of the few models here combining a 1M context with native image input at a footprint that fits three or four H100s.

MiniMax also shipped **MiniMax H3** on **August 3, 2026**, an open-weight omni-modal model that generates 4-15 second 2K video clips with native stereo audio. It is not a coding model and is not covered further here, but it is worth knowing the family has branched.

#### Key Specs

- **Architecture:** MoE, ~428B total parameters (MiniMax Sparse Attention)
- **Context Window:** 1M tokens, native multimodal input
- **SWE-Bench Pro:** 59.0 (self-reported by MiniMax)
- **Terminal-Bench 2.1:** 66.0 (self-reported by MiniMax)
- **MCP-Atlas:** 74.2 (self-reported by MiniMax)
- **LiveBench Coding Avg / Agentic Coding Avg:** 68.20 / 40.66
- **Artificial Analysis Intelligence Index:** 45
- **Self-hosting:** vLLM or SGLang; roughly 3-4x H100 80GB (~233 GB) for 4-bit weights

### 6. Qwen3.8-27B (Alibaba) - Best Model for a Single GPU

{{< image "best_open_source_self_hosted_llms_for_coding/qwen_3_coder.webp" "Qwen3.8-27B Open Source LLM by Alibaba" >}}

This is the most important release in this guide for anyone without a GPU server. Alibaba published {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B" >}}Qwen3.8-27B{{< /link >}} on Hugging Face on **August 14, 2026** under **Apache 2.0**, about ten days after the Qwen3.8 announcement. It scores **52** on the Artificial Analysis Intelligence Index, and Artificial Analysis puts its Agentic Index at **51**, ahead of Claude Opus 4.8 at maximum reasoning. For context, the previous best model that fit a 24GB card scored 38.

It is a **27B dense** model, not an MoE, with a vision encoder for native image and video understanding. The architecture runs 64 layers alternating three gated DeltaNet/FFN blocks with one gated attention/FFN block, 5,120 hidden dimension, and a **262,144-token native context** extensible to about 1M with RoPE scaling. Alibaba evaluated it with the Claude Code harness at avg@3 with an eight-hour timeout, which is a more honest setup than most vendor cards.

The coding numbers are the point: **73.0 on Terminal-Bench 2.1**, **61.7 on SWE-bench Pro**, **90.3 on LiveCodeBench v6**, and **42.2 on DeepSWE 1.1** - a three-fold jump over Qwen3.6-27B's 13.3. It also posts **89.2 on GPQA Diamond** and **84.3 on OSWorld-Verified**, which together with the video input make it the only model in its size class genuinely equipped for agents that read screenshots and drive a desktop.

Memory is the whole reason this matters: roughly **14-17GB at 4-bit** (a single RTX 4090 or 5090, or a 32GB Mac), ~28GB at FP8 via the official {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B-FP8" >}}FP8 build{{< /link >}}, ~56GB at BF16. Those are weights only - KV cache at 262K context is not a rounding error. The Ollama build is an 18GB download, and Ollama, llama.cpp, LM Studio, vLLM and SGLang all support it.

The one real complaint is verbosity: it generates a lot of reasoning tokens by default, and in one published test that made it roughly **30x slower end-to-end than DeepSeek V4-Flash**. Turn reasoning effort down for interactive work, keep it high for agent runs.

#### Key Specs

- **Architecture:** 27B dense + vision encoder, 64 layers (3x gated DeltaNet/FFN + 1x gated attention/FFN)
- **Context Window:** 262K native, extensible to ~1M with RoPE scaling
- **License:** Apache 2.0
- **Modality:** Text, image and video input
- **Terminal-Bench 2.1:** 73.0 (self-reported by Alibaba)
- **SWE-bench Pro:** 61.7 (self-reported by Alibaba)
- **LiveCodeBench v6:** 90.3 (self-reported by Alibaba)
- **OSWorld-Verified:** 84.3 (self-reported by Alibaba)
- **Artificial Analysis Intelligence Index:** 52; Agentic Index 51 (independently scored)
- **Self-hosting:** Ollama, llama.cpp, LM Studio, vLLM, SGLang; ~14-17 GB at 4-bit, ~28 GB at FP8, ~56 GB at BF16

### 7. Muse Glimmer 30B (Meta) - Best MCP Tool Use on One GPU

Meta Superintelligence Labs released {{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}Muse Glimmer{{< /link >}} on **August 10, 2026**: a 30B dense multimodal model under **Apache 2.0**, built for agents that run on your own machine. It is not a Llama model, and the announcement doesn't mention Llama once - it reads as a separate line out of MSL.

The specs: **~29.6B total parameters** (including a ~1.8B vision encoder), 52 layers, a **131K context window**, and GQA at 16:1. Full BF16 wants about 64GB, but Meta's K-Quant builds put the language model under 20GB with a reported 0.2-1.0% degradation, so it fits a single 24GB card.

Meta's own numbers are strong on tool use: **75.5 on MCP Atlas** against Qwen3.6-27B's 62.5, plus **51.2 on SWE-Bench Pro** and **76.0 on SWE-Bench Verified**. For scale, GLM-5.2 scores 76.8 on MCP Atlas at 753B parameters, so a 30B model landing 1.3 points off it is a real result.

**The independent numbers are less flattering, and they arrived after our last update.** Artificial Analysis scores it **35** on the Intelligence Index - *behind* Qwen3.6-27B at 38. On the agentic side the gap is wider: **953 Elo on GDPval-AA v2 against Qwen3.6-27B's 1,141**, below the 1,000 human baseline, with an **82% hallucination rate on AA-Omniscience against Qwen's 49%**. Artificial Analysis called agentic knowledge work "its weakness relative to its size class", which is awkward for a model marketed as an agentic release.

Then Qwen3.8-27B landed four days later and won every benchmark where both were run (SWE-Bench Pro 61.7 against 51.2, GPQA Diamond 89.2 against 83.5). What is left is MCP Atlas, where nothing in this size class is close, and **DFlash**, a block-diffusion speculative decoder: Meta reports **74.9 to 233.4 tok/s on an RTX 5090 (3.1x)** with output identical to standard decoding. If your agent lives inside MCP servers, or you need that throughput, it earns a look. Otherwise pull Qwen3.8-27B.

#### Key Specs

- **Architecture:** Dense causal transformer, ~29.6B total parameters (incl. ~1.8B vision encoder), 52 layers, GQA 16:1
- **Context Window:** 131K tokens; text + image input, text output
- **License:** Apache 2.0
- **MCP Atlas:** 75.5 (self-reported by Meta; best tool-use score of any consumer-hardware model in this guide)
- **SWE-Bench Pro / Verified:** 51.2 / 76.0 (self-reported by Meta)
- **TerminalBench 2.1:** 51.7 (self-reported by Meta)
- **Artificial Analysis Intelligence Index:** 35 (independently scored; behind Qwen3.6-27B at 38)
- **GDPval-AA v2:** 953 Elo (independently scored; below the 1,000 human baseline)
- **Self-hosting:** Ollama, LM Studio, llama.cpp, vLLM, SGLang, Transformers, Jan, Docker Model Runner, ExecuTorch on Apple devices; ~64GB at BF16, under 20GB with K-Quant

### 8. Nemotron 3.5 Lightning (NVIDIA) - Fastest Local Inference

{{< image "best_open_source_self_hosted_llms_for_coding/nvidia_nemotran.webp" "NVIDIA Nemotron 3.5 Lightning Open Source LLM" >}}

NVIDIA shipped {{< link href="https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch" >}}Nemotron 3.5 Lightning{{< /link >}} on **August 11, 2026**, one day after Muse Glimmer, into the same single-GPU slot. It is a **31.6B total / 3.6B active** hybrid of Mamba-2, MoE and attention, distilled from Nemotron 3 Ultra (the 550B open MoE NVIDIA shipped in June), with a context length up to **1M tokens**. It ships under the permissive **OpenMDW-1.1** license with weights, training data and recipes all released, which is a stronger transparency position than anything else in this size class.

On raw capability it does not compete with Qwen3.8-27B. Artificial Analysis scores it **24** on the Intelligence Index, a 9-point gain over Nemotron 3 Nano's 15, level with gpt-oss-120b and just behind NVIDIA's own Nemotron 3 Super at 26 despite being four times smaller. Coding-relevant numbers are modest: **51.56 on SWE-bench Verified**, 75.44 on GPQA Diamond, 81.94 on MMLU Pro.

Throughput is the pitch. In pre-release testing with the final NVFP4 weights it hit nearly **670 tokens per second**, the highest measured of any model in the comparison and close to double Gemini 3.5 Flash-Lite's 386 tok/s, with NVIDIA claiming up to 4x the output speed of similarly sized models and 10,000 tasks completed 30% faster than Qwen3.6 35B at comparable accuracy. If you are running a high-volume, latency-sensitive local pipeline - batch refactors, test generation, log triage - rather than a reasoning-heavy agent, that tradeoff can be the right one. For anything that needs to think, it isn't.

#### Key Specs

- **Architecture:** Mamba-2 + MoE + attention hybrid, 31.6B total / 3.6B active; distilled from Nemotron 3 Ultra (550B)
- **Context Window:** up to 1M tokens
- **License:** OpenMDW-1.1 (weights, training data and recipes released)
- **SWE-bench Verified:** 51.56 (self-reported by NVIDIA)
- **Artificial Analysis Intelligence Index:** 24 (independently scored)
- **Throughput:** ~670 tok/s measured on final NVFP4 weights, highest in its comparison set
- **Self-hosting:** single GPU at ~18 GB in 4-bit; NVFP4 builds available

### 9. Devstral 2 (Mistral AI) - Best for Vibe CLI Workflows

{{< image "best_open_source_self_hosted_llms_for_coding/mistral.webp" "Devstral 2 Open Source LLM by Mistral AI" >}}

{{< link href="https://mistral.ai/news/devstral-2-vibe-cli" >}}Devstral 2{{< /link >}} from Mistral AI is a 123 billion parameter model designed for agentic software engineering. Released in December 2025, it scores 72.2% on SWE-bench Verified with a 256K context window and, on its last LiveBench snapshot, 66.79 Coding Avg / 43.33 Agentic Coding Avg. At 123B dense it is an order of magnitude smaller than the trillion-scale MoE models above. It is now the oldest model in this list by a wide margin, so treat it as a size/efficiency pick rather than a frontier one - Artificial Analysis scores it at 19 on the current index.

The smaller sibling is what keeps it here: **Devstral Small 2** (24B parameters) scores 68% on SWE-bench Verified, runs on a single RTX 4090 or a 32GB Mac, supports image inputs, and ships under Apache 2.0. Qwen3.8-27B now beats it comfortably at a similar footprint, but Devstral Small 2 pairs with **Vibe CLI**, Mistral's open source terminal coding assistant, if you want a ready-made workflow rather than wiring one up.

#### Key Specs (Devstral 2 / Devstral Small 2)

- **Parameters:** 123B / 24B
- **Context Window:** 256K / 128K tokens
- **License:** Modified MIT / Apache 2.0
- **SWE-bench Verified:** 72.2% / 68.0% (self-reported by Mistral AI)
- **LiveBench Coding Avg / Agentic Coding Avg:** 66.79 / 43.33 (Devstral 2, last scored before dropping off the active rotation)
- **Self-hosting:** multi-GPU for Devstral 2; single RTX 4090 or 32GB Mac for Devstral Small 2

### 10. MiMo-V2.5-Pro (Xiaomi) - 78.9% SWE-Bench Verified

{{< image "best_open_source_self_hosted_llms_for_coding/mimo.webp" "MiMo-V2.5-Pro Open Source LLM by Xiaomi" >}}

{{< link href="https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro" >}}MiMo-V2.5-Pro{{< /link >}} is Xiaomi's open-weight flagship, released on **April 22, 2026**. It's a 1.02T total parameter MoE with 42B active and a 1M token context window, on Hugging Face and ModelScope under MIT. On Xiaomi's own benchmarks it posts **78.9% on SWE-Bench Verified** and **68.4% on TerminalBench 2.0**; Artificial Analysis scores it independently at 42.2, which now places it below the August releases.

The architecture is the interesting part: a hybrid attention design interleaving local sliding-window attention with global attention at a 6:1 ratio, which Xiaomi says cuts KV-cache memory by roughly 7x at long context, plus three lightweight Multi-Token Prediction modules for a 3x inference speedup. SGLang is the recommended engine, and it needs a multi-GPU setup similar to other ~1T MoE models here. Xiaomi pitches it at workflows involving more than 1,000 sequential tool calls.

#### Key Specs

- **Architecture:** MoE, 1.02T total / 42B active parameters, 6:1 local-to-global attention
- **Context Window:** 1M tokens
- **License:** MIT
- **SWE-Bench Verified:** 78.9% (self-reported by Xiaomi)
- **TerminalBench 2.0:** 68.4% (self-reported by Xiaomi)
- **Artificial Analysis Intelligence Index:** 42.2
- **Self-hosting:** SGLang or vLLM; multi-GPU setup required

## Honorable Mentions

Several other open source models deserve recognition for specific strengths:

{{< image "best_open_source_self_hosted_llms_for_coding/starcode2.webp" "StarCoder 2 Open Source LLM by BigCode" >}}

- {{< link href="https://github.com/bigcode-project/starcoder2" >}}StarCoder 2{{< /link >}} - A Hugging Face and ServiceNow collaboration under the BigCode project, in 3B, 7B and 15B sizes, trained on The Stack v2 across 619 programming languages with a 16K context. Every training source is documented with Software Heritage Identifiers, making it the most auditable coding model available - the right pick if your blocker is IP and licensing compliance rather than raw capability.

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k27_code.webp" "Kimi K2.7-Code Open Source LLM by Moonshot AI" >}}

- {{< link href="https://huggingface.co/moonshotai/Kimi-K2.7-Code" >}}Kimi K2.7-Code{{< /link >}} - Moonshot's coding-specialised line, separate from K3 and built on K2.6. A 1T total / 32B active MoE with a 262K context, released June 12, 2026, with a HighSpeed variant three days later that serves at roughly 180 tok/s (up to 260 on short context), about 6x standard K2.7-Code. It spends around 30% fewer thinking tokens than K2.6. Two things make it worth a look over K3 if you can live with the smaller context: it keeps the **Modified MIT** license K3 abandoned, and at 1T total it is a third of K3's size. Moonshot has not submitted it for independent benchmarking, so the comparison numbers are all its own.

{{< image "best_open_source_self_hosted_llms_for_coding/ibm_granite.webp" "IBM Granite Code Open Source LLM" >}}

- {{< link href="https://www.ibm.com/granite" >}}IBM Granite Code{{< /link >}} - Available from 350M to 34B parameters under Apache 2.0, trained on 116 programming languages with license-permissible data. Granite 4.0 introduces a hybrid Mamba-2/transformer architecture using 70% less memory. Best choice for enterprise compliance.

{{< image "best_open_source_self_hosted_llms_for_coding/yi_coder.webp" "Yi-Coder Open Source LLM by 01.AI" >}}

- {{< link href="https://github.com/01-ai/Yi-Coder" >}}Yi-Coder{{< /link >}} - From 01.AI, in 1.5B and 9B sizes with 128K context and Apache 2.0 license. Yi-Coder 9B scores 85.4% on HumanEval, on par with DeepSeek Coder 33B at a fraction of the size.

## How to Use These Models with a Coding Agent

If you want a Claude Code or Aider-style workflow with self-hosted models, one of the easiest setups is **{{< link href="https://opencode.ai" >}}OpenCode{{< /link >}} + {{< link href="https://ollama.com" >}}Ollama{{< /link >}}**. This combination gives you a local coding agent with a simple terminal workflow and no cloud dependency.

### Easiest Setup: OpenCode + Ollama

Ollama's Applications flow makes this a three-command job. The {{< link href="https://ollama.com/library/qwen3.8" >}}Qwen3.8 Ollama page{{< /link >}} lists a direct OpenCode launch command, and the 27B build is an 18GB download.

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
ollama launch opencode --model qwen3.8:27b
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode.webp" "opencode" >}}

On an Apple Silicon Mac, use the MLX build instead - `ollama launch opencode --model qwen3.8:27b-mlx` - which runs through Apple's MLX backend rather than the default runner.

**Step 4: Open your project and start working**

Once OpenCode starts, point it at your repository and use it like any other terminal coding agent for explaining code, refactoring files, writing tests, or implementing features.

One setting worth changing on day one: Qwen3.8-27B thinks a lot by default. If interactive edits feel sluggish, drop the reasoning effort for chat work and keep it high only for long agent runs. Check the live Ollama model page for currently available tags, since Alibaba ships new quantisations regularly.

### Why This Setup Works Well

- **Fastest setup path** because Ollama can launch OpenCode directly as an application
- **Runs fully local** with no separate model gateway to configure
- **Easy to scale up or down** by swapping the Ollama model tag based on your hardware

## How to Self-Host These Models Locally

Once you've picked a model, you need the right tools and hardware to run it. We've covered this extensively in our previous guides:

- {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}How to Self-Host Any LLM - Step by Step Guide{{< /link >}} - A complete walkthrough covering installation, model download, quantization, GPU setup, and connecting to your development tools.
- {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}Top 5 Local LLM Tools and Models{{< /link >}} - A detailed comparison of Ollama, vLLM, llama.cpp, LM Studio, and other self-hosting tools with hardware requirements and performance benchmarks.

## Conclusion

Your hardware picks the model, not the benchmarks. One GPU: **Qwen3.8-27B**, Apache 2.0, 14-17GB at 4-bit, and it beats everything else in its class - take **Muse Glimmer 30B** instead only if your agent lives inside MCP servers. One 8-GPU server: **GLM-5.3-Flash**, MIT and cheap at ~$0.045 per task. H200s or a cluster: **GLM-5.3** and **Kimi K3** tie at 60, with Qwen3.8-Max just behind - all three under bespoke licenses worth reading first, though GLM-5.3's only bites above $10B revenue.

The gap at the top is now 3 points to Claude Opus 5. The more useful number is at the bottom: the best model you can run on a gaming GPU went from 38 to 52 in four months.
