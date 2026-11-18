---
title: "Best Open Source Jev Alternatives: 7 Self-Hosted Decision Models"
description: "Open-weight decision models now beat TypeSafe's Jev on both independent leaderboards. Karpo Decision 31B, GLiDE, vLLM-SR d3, Mammoth-1, pplx-decider v1.3, Kev and Laya compared on Decision Index 0.4.1 and Artificial Analysis v2 scores, licenses, and the GPU each one needs to self-host."
date: 2026-09-23T10:30:00+05:30
lastmod: 2026-11-18T10:30:00+05:30
draft: false
og_image: "images/best_open_source_jev_alternatives_self_hosted_decision_models/best_open_source_jev_alternatives_self_hosted_decision_models_banner.webp"
tags: ["AI Models", "open source", "self-hosted AI", "llm", "developer tools"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJlcGxhY2UgVHlwZVNhZmUgSmV2IHdpdGggYW4gT3BlbiBTb3VyY2UgRGVjaXNpb24gTW9kZWwiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gY2hvb3NpbmcsIHJ1bm5pbmcgYW5kIGV2YWx1YXRpbmcgYW4gb3Blbi13ZWlnaHQgYWx0ZXJuYXRpdmUgdG8gVHlwZVNhZmUncyBKZXYgU3lzdGVtIE9uZSBtb2RlbCBpbiBOb3ZlbWJlciAyMDI2LCBjb3ZlcmluZyBLYXJwbyBEZWNpc2lvbiAzMUIsIEdMaURFLCB2TExNLVNSIGQzLCBNYW1tb3RoLTEgYW5kIEVsZXBoYW50LTEsIHBwbHgtZGVjaWRlciB2MS4zLCBLZXYgYW5kIExheWEsIHRoZWlyIERlY2lzaW9uIEluZGV4IGFuZCBBcnRpZmljaWFsIEFuYWx5c2lzIHNjb3JlcywgbGljZW5zZXMsIEdQVSBuZWVkcywgYW5kIGhvdyB0byB0ZXN0IGEgbG9jYWwgZGVjaXNpb24gc2VydmVyLiIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTE4VDEwOjMwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBpY2sgb24gR1BVIG1lbW9yeSBmaXJzdCIsCiAgICAgICJ0ZXh0IjogIkV2ZXJ5IG9wZW4gbW9kZWwgdGhhdCBjbGVhcmx5IGJlYXRzIEpldiAxLjE0IG9uIHRoZSBEZWNpc2lvbiBJbmRleCBpcyBhIDI3QiB0byAzMUIgZmluZS10dW5lIHdpdGggNTAgdG8gNjMgR0Igb2YgYmYxNiB3ZWlnaHRzLCBzbyBpdCBuZWVkcyBhbiA4MCBHQi1jbGFzcyBHUFU6IEthcnBvIERlY2lzaW9uIDMxQiwgR0xpREUgMjdCLCB2TExNLVNSIGQzLXVsdHJhLCBNYW1tb3RoLTEsIHBwbHgtZGVjaWRlciB2MS4zIGFuZCBLZXYgMjdCLiBPbiBhIDI0IEdCIGNhcmQsIEdMaURFIDlCLCBFbGVwaGFudC0xIGFuZCBkMy1mbGFzaCBhcmUgdGhlIG9wdGlvbnMuIE9uIGEgQ1BVLCBMYXlhIHJ1bnMgYnV0IHNjb3JlcyBuZWFyIHRoZSBib3R0b20gb2YgdGhlIGJvYXJkLCBzbyBwbGFuIHRvIGZpbmUtdHVuZSBpdC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUmVhZCB0aGUgbGljZW5zZSBiZWZvcmUgdGhlIGxlYWRlcmJvYXJkIiwKICAgICAgInRleHQiOiAiS2FycG8gRGVjaXNpb24sIHBwbHgtZGVjaWRlciwgdkxMTS1TUiBkMywgS2V2IGFuZCBMYXlhIGFyZSBBcGFjaGUtMi4wLCBhbmQgTWFtbW90aC0xIGFuZCBFbGVwaGFudC0xIGFyZSBNSVQuIEdMaURFIHNoaXBzIHVuZGVyIHRoZSBGYXN0aW5vIENvbW11bml0eSBMaWNlbnNlLCB3aGljaCByZXF1aXJlcyBhIHNlcGFyYXRlIGNvbW1lcmNpYWwgYWdyZWVtZW50IGZvciBwcm9kdWN0aW9uIHVzZSBieSBhIGNvbXBhbnkgd2l0aCBtb3JlIHRoYW4gMTAgbWlsbGlvbiBVUyBkb2xsYXJzIGluIGFubnVhbCByZXZlbnVlLiBIMk8gTGlnaHRuaW5nIGFuZCBCZXNwb2tlIE5pbWJsZSBhcmUgbm9uLWNvbW1lcmNpYWwuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIktlZXAgeW91ciBKZXYgY2xpZW50IGFuZCBjaGFuZ2UgdGhlIGJhc2UgVVJMIiwKICAgICAgInRleHQiOiAiS2FycG8gRGVjaXNpb24sIEdMaURFLCBLZXYsIExheWEgYW5kIHZMTE0gU2VtYW50aWMgUm91dGVyJ3MgRW5naW5lIG1vZGUgYWxsIHNlcnZlIFR5cGVTYWZlJ3MgUE9TVCAvdjEvc3lzdGVtb25lIGNvbnRyYWN0LCBzbyBhbiBleGlzdGluZyBKZXYgY2xpZW50IG9yIHRoZSB0eXBlc2FmZS1zZGsgd29ya3MgYWdhaW5zdCBhIGxvY2FsIHNlcnZlciBhZnRlciBhIGJhc2UgVVJMIGNoYW5nZS4gcHBseC1kZWNpZGVyIHNoaXBzIGEgUHl0aG9uIGRlY2lkZSgpIEFQSSBpbnN0ZWFkLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJUcnkgYSBob3N0ZWQgY29weSBiZWZvcmUgcmVudGluZyBhIEdQVSIsCiAgICAgICJ0ZXh0IjogIlBlcnBsZXhpdHkncyBEZWNpZGVyIHYxLjMgaXMgZnJlZSBvbiBPcGVuUm91dGVyLCB2TExNLVNSIHNlcnZlcyBkMy11bHRyYSBvbiBhIGZyZWUgQVBJIGF0IGRlY2lzaW9uLnZsbG0tc3IuYWksIGFuZCBCYXNldGVuIGhvc3RzIE1hbW1vdGgtMS4gUnVuIGEgZmV3IGh1bmRyZWQgb2YgeW91ciBvd24gbGFiZWxsZWQgZGVjaXNpb25zIHRocm91Z2ggdGhlIGhvc3RlZCBjb3B5LCB0aGVuIHNlbGYtaG9zdCB0aGUgc2FtZSB3ZWlnaHRzIGlmIHRoZSBudW1iZXJzIGhvbGQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlJlZml0IHRoZSBjb25maWRlbmNlIHRlbXBlcmF0dXJlIG9uIHlvdXIgb3duIGRhdGEiLAogICAgICAidGV4dCI6ICJBcnRpZmljaWFsIEFuYWx5c2lzIGZvdW5kIGRlY2lzaW9uIG1vZGVscyBvdmVyY29uZmlkZW50IG9uIGhhcmQga25vd2xlZGdlIHF1ZXN0aW9ucywgYW5kIFBlcnBsZXhpdHkgc2F5cyBhIHNpbmdsZSB0ZW1wZXJhdHVyZSBjYW5ub3QgYmUgcmlnaHQgZm9yIGV2ZXJ5IHRhc2suIEZpdCB0aGUgdGVtcGVyYXR1cmUgb3IgcGVyLXRhc2sgdGhyZXNob2xkcyBvbiBoZWxkLW91dCB0cmFmZmljIGJlZm9yZSBhbnkgcHJvYmFiaWxpdHkgZGVjaWRlcyB3aGV0aGVyIHRvIGFjdCBvciBlc2NhbGF0ZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVGVzdCB0aGUgbG9jYWwgZGVjaXNpb24gc2VydmVyIGZyb20gb3V0c2lkZSB5b3VyIG1hY2hpbmUiLAogICAgICAidGV4dCI6ICJBIGRlY2lzaW9uIGVuZHBvaW50IGlzIHVzdWFsbHkgY2FsbGVkIGJ5IGEgd2ViaG9vaywgYSBzdGFnaW5nIGFwcCBvciBhIHRlYW1tYXRlLCBub25lIG9mIHdoaWNoIGNhbiByZWFjaCAxMjcuMC4wLjEuIFdpdGggdGhlIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCA4MDA5LCBydW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwMDkgZnJlZS5waW5nZ3kuaW8gdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCB0aGF0IGFueSBleHRlcm5hbCBjYWxsZXIgY2FuIHVzZSwgd2l0aG91dCBwb3J0IGZvcndhcmRpbmcgb3IgYSBmaXJld2FsbCBjaGFuZ2UuIFNldCB0aGUgc2VydmVyJ3MgQVBJIGtleSB2YXJpYWJsZSBmaXJzdCwgYmVjYXVzZSB0aGVzZSBzZXJ2ZXJzIGFyZSBvcGVuIGJ5IGRlZmF1bHQuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---
{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/best_open_source_jev_alternatives_self_hosted_decision_models_banner.webp" "Best Open Source Jev Alternatives: 5 Self-Hosted Decision Models" >}}

An Apache-2.0 model now sits at the top of the community Decision Index. karpo-decision-31B, a Gemma 4 31B fine-tune from MachinePulse, scores **73.86** on the November 17 board, and TypeSafe's own Jev 1.14 is 67th at **60.24**. Of the 66 entries above Jev, 65 run on weights you can download.

That is a different field from the one TypeSafe faced when it shipped {{< link href="/blog/typesafe_jev_system_one_model_use_cases_vs_llms/" >}}Jev{{< /link >}} on September 15, 2026. The first open reimplementations appeared within about a day, <a href="https://www.latent.space/p/ainews-here-are-6-clones-of-jev-in" target="_blank">AINews counted six in two days</a>, and they copied Jev's interface far better than its accuracy: on jabr's 49-task classifier benchmark the best open entrant scored 0.704 against Jev's 0.966. The gap closed through something heavier. Perplexity, Baseten, Fastino, the vLLM Semantic Router team and a crowd of small labs took 27B to 31B open bases, fine-tuned every weight on millions of typed decisions, and put a readout over the answer options where the text generator used to be.

The seven models below are ranked by their <a href="https://huggingface.co/spaces/multimodalart/jev-decision-index" target="_blank">Decision Index 0.4.1</a> Full score, with the <a href="https://artificialanalysis.ai/articles/decision-index-v2" target="_blank">Artificial Analysis Decision Index v2</a> score beside it where there is one. Scores, stars and licenses were checked on November 18, 2026. This field reshuffles weekly, so check teh boards again before you commit.

{{% tldr %}}

**Open weights now beat Jev on accuracy. They still lose on hardware.**

- **<a href="https://huggingface.co/MachinePulseAI/karpo-decision-31B" target="_blank">Karpo Decision 31B</a>** (Apache-2.0) is first on the Decision Index at 73.86, with a 94 ms median on one RTX PRO 6000. It needs 62.5 GB for the weights alone.
- **<a href="https://huggingface.co/fastino/GLiDE-27B" target="_blank">GLiDE 27B</a>** is second at 73.37 and scores 73 on Artificial Analysis, but its license needs a commercial agreement above $10M in annual revenue.
- **<a href="https://huggingface.co/vllm-sr/d3-ultra" target="_blank">vLLM-SR d3-ultra</a>** (Apache-2.0, 70.18) is the pick for images, video and 131k-token documents. Its 9B sibling d3-flash has 101,936 downloads.
- **<a href="https://huggingface.co/baselabs/mammoth-1" target="_blank">Mammoth-1</a>** (MIT) scores 71 on Artificial Analysis and gives the same answer to reworded questions 99% of the time. The 9B Elephant-1 ties Jev there at 66.
- **<a href="https://huggingface.co/perplexity-ai/pplx-decider-v1.3" target="_blank">pplx-decider v1.3</a>** (Apache-2.0) is free on OpenRouter, so you can test it on your traffic before buying a GPU.
- **<a href="https://github.com/jaredpalmer/kev" target="_blank">Kev 27B</a>** lands level with Jev (59.56) and runs TypeSafe's own SDK unchanged.
- **<a href="https://github.com/NandhaKishorM/laya" target="_blank">Laya</a>** has 35,664 GitHub stars, the most in the field by a wide margin, and ranks 294th of 308. It runs on a CPU; fine-tune it or skip it.

{{% /tldr %}}

## Open models caught up with Jev in two months

A System One model is narrow. You hand it a block of state plus questions with declared answer types - a `choice` over up to 255 options, a `score` on an ordered scale, a `noul` yes/no probability - and it returns a probability for every allowed answer in one pass instead of decoding tokens. The interface is public in TypeSafe's <a href="https://docs.typesafe.ai/api" target="_blank">API docs</a>, so it was copied in a weekend. The model and training data are not.

The September clones lacked data and compute. Base Labs trained Mammoth-1 on 6.21 million decision examples across 72 GB300 GPUs, with a Brier calibration term in the loss and a trained "I don't know" option. Karpo puts a 255 x 5,376 linear readout on top of Gemma 4 31B, reads the state once, and gives every question its own branch that sees the state but never another question's options. These are full fine-tunes of 27B to 31B models, not a LoRA on a 4B or a head on a frozen encoder.

The wire format survived. Karpo, GLiDE, Kev, Laya and vLLM Semantic Router's Engine mode all serve TypeSafe's `POST /v1/systemone` contract, so an existing Jev client moves over with a new base URL. pplx-decider ships a Python `decide()` API instead.

The cost is hardware. Every open model that clearly beats Jev weighs 50 to 63 GB in bf16 and wants an 80 GB-class GPU. The smallest that reach Jev's score are 9B models - GLiDE 9B (62.48), Jeffan-9B (61.48) and Elephant-1 (60.26) - at roughly 16 to 19 GB of weights. Below that, nothing open matches Jev yet: the best models under 5B, PelaAI's KnowLine 4B Gen5.5 and Perplexity's Decider Flash v1.3, score about 55.

### Comparison table

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">License</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Size and base</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Decision Index 0.4.1 (of 308)</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Artificial Analysis v2 (of 25)</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">bf16 weights</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Karpo Decision 31B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">31B, Gemma 4 31B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">73.86 (1st)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Not listed</td>
  <td style="border:1px solid #ddd;padding:0.4em;">62.5 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>GLiDE 27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Fastino Community ($10M revenue cap)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B, Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">73.37 (2nd)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">73 (4th, hosted v1.2)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">52.2 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>vLLM-SR d3-ultra</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">26B, Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">70.18 (14th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Not listed</td>
  <td style="border:1px solid #ddd;padding:0.4em;">~52 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Mammoth-1 / Elephant-1</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B / 9B, Qwen3.5</td>
  <td style="border:1px solid #ddd;padding:0.4em;">68.44 (22nd) / 60.26 (66th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">71 (5th) / 66 (13th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">~55 GB / ~19 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>pplx-decider v1.3</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B, Qwen3.8-27B (Flash: 4B)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">67.67 (30th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">70 (7th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">54 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Kev 27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B, Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">59.56 (74th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Not listed</td>
  <td style="border:1px solid #ddd;padding:0.4em;">51.3 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Laya</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">421M, ModernBERT-large</td>
  <td style="border:1px solid #ddd;padding:0.4em;">9.21 (294th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Not listed</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Runs on CPU</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><em>TypeSafe Jev 1.14 (reference)</em></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Closed, hosted</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Not disclosed</td>
  <td style="border:1px solid #ddd;padding:0.4em;">60.24 (67th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">66 (14th)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">-</td>
</tr>
</tbody>
</table>

Weights marked `~` are parameter count times two bytes; the rest come from each model card or the Hub.

## Decision Index, Artificial Analysis and OpenRouter measure different things

**Decision Index 0.4.1** is the community board on Hugging Face, maintained by multimodalart and run on one RTX PRO 6000 per entrant. Since edition 0.4 its Full score is 60% private tests of the same skills as the public suite and 40% private tasks from new domains; the 37 public benchmarks are still shown but no longer count, and rows an entrant trained on count as wrong. It lists 308 entries, almost all of them open fine-tunes, so it is the best map of the open field.

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/decision_index_open_models_vs_jev.webp" "Horizontal bar chart of Decision Index 0.4.1 Full scores: Karpo Decision 31B 73.86, GLiDE 27B 73.37, vLLM-SR d3-ultra 70.18, Mammoth-1 68.44 and pplx-decider v1.3 67.67 clear the Jev 1.14 line at 60.24, Kev 27B sits just under it at 59.56 and Laya scores 9.21" >}}

*Data: {{< link href="https://huggingface.co/spaces/multimodalart/jev-decision-index" >}}Decision Index 0.4.1{{< /link >}}, board of November 17, 2026.*

**Artificial Analysis Decision Index v2**, published November 8, scores 25 decision models and a few chat models. 45% of it is now private data, and its headline Decision Score is 50 x (1 + accuracy - Brier score), so a confident wrong answer costs more than an unsure one. Liquid's hosted d1.2-ultra leads the decision models at 75, Nace.AI's Drex Max v1.1 and Fastino's GLiDE v1.2 follow at 73, Mammoth sits at 71, Decider v1.3 at 70, and Jev 1.14 at 66 alongside Elephant. Chat models still score higher - Claude Haiku 5.5 (Max) gets 77 - but at 32.65 seconds per task against Jev's 92 ms.

**<a href="https://openrouter.ai/rankings/decisions" target="_blank">OpenRouter's decision rankings</a>** measure use, not quality, and use still goes to Jev. In the latest week, through November 17, Jev 1.13 served 950M requests and Jev 1.14 614M; the top open-weight model, Perplexity's Decider v1.2, served 268M. TypeSafe's share of decision requests was 68.5% in the week starting November 9.

The boards disagree in useful ways. Elephant-1 is 13th of 25 on Artificial Analysis and 66th of 308 on the Decision Index, and d3-ultra and Karpo are not on Artificial Analysis at all. The top of the Decision Index also turns over fast: Mammoth-1 launched on October 21 as #1 on edition 0.4 with 71.24 and is 22nd today.

## 1. Karpo Decision 31B: first on the Decision Index

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/karpo_decision_31b_hf.webp" "The karpo-decision-31B model card on Hugging Face, with an Apache-2.0 license tag, a Decision Index #1 Full 73.9 badge and the leaderboard bar chart" >}}

*Screenshot: huggingface.co/MachinePulseAI/karpo-decision-31B, November 2026.*

Karpo Decision is the newest model here and the one to beat. MachinePulse put the 31B on Hugging Face on November 5 under Apache-2.0: Gemma 4 31B fine-tuned end to end, with a linear readout over 255 option codes where the text generator was. It reads text and images, including a page screenshot, takes 32,768 tokens per sequence, and splits a longer request by questions rather than truncating it. It ships a Python API and a `POST /v1/systemone` server.

Its 73.86 Full score breaks down as 70.7 on private tests of known skills and **78.6 on private tasks from new domains**, the part that rewards generalising over memorising. The board measured a 94 ms median per request and a calibration error of 4.8 points. GLiDE 27B is within the board's 0.9-point tie band, so the two technically share first.

These are the card's commands. I have not run them, because they want a single GPU with room for 62.5 GB of weights:

```bash
pip install "karpo-decision @ git+https://github.com/machinepulse-ai/karpo-decision"
CKPT=$(python -c 'from huggingface_hub import snapshot_download; print(snapshot_download("MachinePulseAI/karpo-decision-31B"))')
torchrun --standalone --nproc_per_node 1 -m karpo_decision.serve.server --checkpoint "$CKPT" --port 18440
```

On November 12 MachinePulse added 12B (Gemma 4 12B), 9B, 4B, 2B and 0.8B (Qwen3.5) siblings, none of them on the board yet. Two caveats. The model is two weeks old from a small company with no technical report, and its card credits its layout to three other entrants (FlexDM, jev-brain and Sieve-31B-v3); much of the top of this board is people remixing each other's recipes. And loading it as a plain chat model does not reproduce its answers; use the package.

## 2. GLiDE 27B: second place, with a revenue cap

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/glide_27b_hf.webp" "The GLiDE-27B model card from Fastino on Hugging Face, showing the fastino-community license tag and a 26B-parameter BF16 checkpoint" >}}

*Screenshot: huggingface.co/fastino/GLiDE-27B, November 2026.*

GLiDE comes from Fastino, the team behind the GLiNER2 extraction models, in five sizes: 27B on Qwen3.8-27B, then 9B, 2B, 0.8B and a 0.4B built on a 400M Ettin encoder. The 27B is second on the Decision Index at 73.37, and Fastino's hosted GLiDE v1.2 scores 73 on Artificial Analysis, fourth of 25 and level with Drex Max, with higher raw accuracy than Drex Max (60 against 58). **GLiDE 9B, at 62.48, is the smallest open model on the board that beats Jev.**

Self-hosting the 27B means 52.2 GB of bf16 weights and one GPU with 80 GB or more; Fastino measured a 112 ms median on an RTX PRO 6000. It reads text, JSON and images, takes 40,000 tokens per question by default, and its `/v1/systemone` server requires a bearer token once `GLIDE_API_KEY` is set.

Read the <a href="https://huggingface.co/fastino/GLiDE/blob/main/LICENSE" target="_blank">Fastino Community License</a> before anything else. It is free to use, modify and redistribute, but a company with more than $10M in annual revenue running it in production for commercial use needs a separate agreement with Fastino, any commercial use must display "Built with Fastino GLiDE", and fine-tunes and quantizations inherit both rules. Evaluation and a pilot of up to 90 days are exempt. It is open weights, not open source, and the hosted API is not cheap either: Artificial Analysis puts it at $780 per million tasks, because Fastino bills the input once per question rather than once per request.

## 3. vLLM-SR d3-ultra and d3-flash: images, video and long documents

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/d3_ultra_hf.webp" "The vLLM-SR d3-ultra model card on Hugging Face with its summary table: 26.09B parameters, released 2026-10-26, text, images and video input, Choice, Yes/No, Score, Box and Track questions, 131,072 tokens per question, Apache-2.0" >}}

*Screenshot: huggingface.co/vllm-sr/d3-ultra, November 2026.*

Decision 3.0 is the decision-model family from the <a href="https://github.com/vllm-project/semantic-router" target="_blank">vLLM Semantic Router</a> project, and it covers inputs the others don't. **d3-ultra**, released October 26 under Apache-2.0, is 26.09B parameters including a 0.46B vision encoder and takes up to 131,072 tokens per question. Besides choice, yes/no and score, it answers `Box` (where is this in the image or at this moment of the video) and `Track` (where is it across the whole clip), all from one read of the input. On one AMD Instinct MI325X, one question about a photo took 304 ms and 255 questions took 2.16 s, about 7.3 ms per extra question.

It scores 70.18 on the Decision Index, 14th of 308. The team's own SR-Text test puts it at 87.2 against Jev 1.14's 73.1; that's a vendor benchmark, so weight it accordingly. A free hosted API at <a href="https://decision.vllm-sr.ai" target="_blank">decision.vllm-sr.ai</a> serves d3-ultra if you want to try it first.

The 9B **d3-flash** is the practical one. It has 101,936 downloads on the Hub, more than any other model in this post, and vLLM Semantic Router serves it natively with `vllm-sr serve -e` on CPU, CUDA or ROCm, at 23.8 to 29.1 GiB of GPU memory and 95 requests per second with p99 under a second on an MI325X. It scores 54.27 on the Decision Index, well short of Jev, so it suits high-volume routing more than hard calls. Engine mode is still on the development channel.

## 4. Mammoth-1 and Elephant-1: the most consistent answers

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/mammoth_1_hf.webp" "The baselabs/mammoth-1 model card on Hugging Face, with the Baseten Mammoth-1 banner, an MIT license tag and a 27B-parameter BF16 checkpoint post-trained from Qwen3.5-27B" >}}

*Screenshot: huggingface.co/baselabs/mammoth-1, November 2026.*

Base Labs, the research arm of Baseten, released <a href="https://www.baseten.co/blog/the-best-decision-models-in-the-world-mammoth-1-and-elephant-1/" target="_blank">Mammoth-1 (27B) and Elephant-1 (9B)</a> on October 21 under MIT, the most permissive license in this list. Both are full post-trains of Qwen3.5 at the same sizes, read text and images, and accept up to 16,384 tokens.

They stand out on Artificial Analysis. Mammoth scores 71, fifth of 25 and ahead of Jev 1.14 by five points, at 106 ms per task. Elephant scores 66, level with Jev, at 79 ms, the second-fastest decision model on that board. On AA-Symmetry, which asks the same question several ways, **Mammoth gives the same answer 99% of the time**, against 91% for Drex Max, 88% for GLiDE and 67% for Cloudflare's Clef. Part of that comes from abstaining: it was trained with an explicit "I don't know" option and uses it.

On the Decision Index they've slipped since launch, Mammoth to 22nd at 68.44 and Elephant to 66th at 60.26, a hair above Jev. Self-hosting uses a pinned OneJev runtime that `setup.sh` installs on one CUDA GPU, and Baseten also hosts Mammoth at $0.10 per million input tokens. Pick these when consistent, abstaining answers matter more than the last point of accuracy, or when your legal team only signs off on MIT.

## 5. pplx-decider v1.3: try it free, then self-host the same weights

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/pplx_decider_v1_3_hf.webp" "The perplexity-ai/pplx-decider-v1.3 model card on Hugging Face, with an Apache-2.0 license tag and an intro describing the new Locate span extraction" >}}

*Screenshot: huggingface.co/perplexity-ai/pplx-decider-v1.3, November 2026.*

Perplexity put v1.3 on Hugging Face on November 9, again Apache-2.0: a 27B fine-tune of Qwen3.8-27B and a 4B Flash on Qwen3.5-4B. It scores 70 on Artificial Analysis, seventh of 25, and at $68 per million tasks it's one of the cheapest there. On the Decision Index it lands at 67.67, within a third of a point of v1.2's 67.98, so don't upgrade expecting a jump on general tasks.

The new feature is **Locate**: ask `"person": {"type": "locate", "instructions": "The person who signed the contract"}` and you get verbatim spans with character offsets and a score, mixed into the same request as your decisions. It works on text states only, up to 128 questions. v1.3 also expects its own prompt format, built by the `pplx_decider` package, and gives different answers if you feed it v1.2-style prompts.

The hosted path makes it the easiest open model to evaluate. Decider V1.3 is free on OpenRouter, where it served 58.1M requests in the latest week, and Perplexity's own API charges $0.02 per million input tokens. Run your labelled set through the hosted copy, and if the numbers hold, download the same weights: 54 GB of safetensors and a CUDA GPU with room for about 49 GiB in BF16 plus working memory. The card's `fast=True` path packs sequences and compiles the decoder, about 1.7 to 1.9 times faster in the default mode.

## 6. Kev: level with Jev, and it speaks Jev's API

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/kev_github_repo.webp" "The jaredpalmer/kev repository on GitHub at 10k stars, described as a Jev-like family of decision models built on Qwen3.5 and Qwen3.8" >}}

*Screenshot: github.com/jaredpalmer/kev, November 2026.*

Kev, from Jared Palmer, has 10,047 GitHub stars and the most careful evaluation write-ups in the open field. Its top model is now **Kev-27B v2**, a full-weight fine-tune of Qwen3.8-27B averaged with the earlier LoRA, which scores 59.56 on the Decision Index: 0.68 behind Jev 1.14 and above Jev 1.13. Kev's own 14-dataset comparison has it at 52.3 against Jev's 54.0 with overlapping confidence intervals: about the same. Training screened out 6,388 records that matched evaluation sets, and no Jev output went into the training data.

Kev's selling point is still the API. It serves TypeSafe's `POST /v1/systemone` contract, so the official `typesafe-sdk` works by changing a base URL. Here is the server and a request, run on an Apple M3 Pro with the small 0.8B model:

```bash
git clone https://github.com/jaredpalmer/kev.git && cd kev
uv sync --extra serve
KEV_DTYPE=bf16 uv run --extra serve python -m kev.serve --run jaredpalmer/kev-0.8b --port 8009
```

```bash
curl -s localhost:8009/v1/systemone -H 'content-type: application/json' -d '{
  "state": "Shoes arrived two weeks late and in the wrong size. Also I see two charges on my card.",
  "model": "kev-latest",
  "questions": {
    "department": {"type": "choice", "instructions": "Which team should handle this?",
                   "criteria": {"returns": "Exchanges, refunds, wrong or damaged items",
                                "shipping": "Delivery status, delays, lost packages",
                                "billing": "Charges, invoices, payment problems"}},
    "escalate":   {"type": "noul", "instructions": "Does this need urgent human attention?"},
    "frustration":{"type": "score", "instructions": "How frustrated is the customer?",
                   "criteria": ["Calm", "Frustrated", "Very angry"]}
  }}'
```

That returned `returns` at 0.39 probability with `shipping` at 0.38 and `billing` at 0.24, the right spread for a ticket that mentions all three. Through Kev's MLX backend the request took **77 ms on a fresh state and 47 ms on a repeated one**, after a 3.2 s first call. Fast, but the 0.8B scores 16.3 on the Decision Index, so treat it as a dev stand-in. For real traffic swap in `--run jaredpalmer/kev-27b`, which needs an 80 GB-class GPU (51 GB of weights, 65.5 GB resident); Kev expects it to fit a 96 to 128 GB Mac through MLX but hasn't measured that yet.

## 7. Laya: the most stars, near the bottom of the board

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/laya_github_repo.webp" "The NandhaKishorM/laya repository on GitHub at 35.7k stars, described as a non-autoregressive System 1 decision engine for 100+ languages" >}}

*Screenshot: github.com/NandhaKishorM/laya, November 2026.*

Laya is the open Jev alternative people have heard of: **35,664 stars**, more than Kev, SemIf, NanoJev, jevlike and the awesome-jev list put together, and the only one you install with a single `pip install laya`. Convai Innovations built it on a 421M ModernBERT-large backbone with a 322M multilingual checkpoint for 100+ languages, under Apache-2.0. It is 32.8 to 39.5 ms per question on a Tesla T4, and it runs fine on a laptop CPU. I ran the README's quickstart on an M3 Pro with no GPU acceleration and measured **66 ms median over 20 runs** for all three questions in one pass:

```python
import laya

agent = laya.load("convaiinnovations/laya")

state = {
    "subject": "Duplicate charge on invoice #4411",
    "body": "We were billed twice for March. Please refund the duplicate today or we will cancel our plan.",
}
questions = {
    "department": {"type": "choice", "instructions": "Which department should handle this request?",
                   "criteria": {"billing": "invoices, payments, refunds",
                                "technical": "bugs, outages, system errors",
                                "sales": "pricing, new contracts"}},
    "urgency": {"type": "score", "instructions": "How urgent is this request?",
                "criteria": ["not urgent", "soon", "critical deadline or blocking issue"]},
    "churn_risk": {"type": "noul", "instructions": "Does the user threaten to cancel or leave?"},
}

res = agent.predict(state, questions)["answers"]
print(res["department"]["choice"], res["department"]["confidence"])  # billing 0.827
print(res["urgency"]["score"], res["churn_risk"]["noul"])             # 1.49 0.741
```

The star count hides a weak score. On the Decision Index, Laya scores **9.21, 294th of 308**, beside the other encoder-sized models: Von 1.3 at 11.65 and Fastino's GLiNER2.5-Decide at 10.14. Its own README admits it: the base checkpoints score 0.362 and 0.352 on its typed-decisions benchmark, below a 0.461 majority-class baseline, and all of the accuracy there comes from fine-tuning (the fine-tuned `laya-typed-decisions` checkpoint reaches 0.766). It also warns that the English checkpoint collapses on non-Latin scripts, scoring 0.000 on Khmer at 0.952 confidence before its temperature clamp, which is why the bundled `Router` detects the script before the forward pass. The package ships almost daily, reaching 0.4.37 on November 18, and since 0.4.23 `laya.Agent(vegaml=True)` swaps in a separate frozen 0.8B reader that also takes images and speech. The Decision Index score above is for the 421M checkpoint, not that path.

Laya is the right tool when a decision has to run on a CPU, in many languages, and you will {{< link href="/blog/finetune_and_selfhost_llms_locally_with_unsloth/" >}}fine-tune it on your own labels{{< /link >}}. It is not a Jev replacement out of the box, and its stars measure attention, not accuracy. `laya-serve` exposes the same `POST /v1/systemone` protocol.

## Other open decision models

- **<a href="https://huggingface.co/decisionmodels/REAX-1.3" target="_blank">REAX 1.3</a>** is third on the Decision Index at 72.64. It comes out of a Bittensor subnet competition and averages two roughly 30B models 50/50, one from the Gemma line and one built partly on d3-ultra. Apache-2.0, but it wants a 96 GB RTX PRO 6000, 400 GB of disk and 64 GiB of RAM, and some long requests take minutes. A research artifact more than a deployment.
- **Cloudflare Clef** is one of the most-downloaded decision models on Hugging Face (78,027 downloads, 2,377 likes), but it scores 54.92 on the Decision Index and 60 on Artificial Analysis. It's covered with the hosted options in our {{< link href="/blog/best_ai_decision_models/" >}}AI decision models comparison{{< /link >}}.
- **Not for commercial use:** H2O Lightning 31B (69.92, 16th) is under H2O's non-commercial licence, and Bespoke Nimble v4.1 Max (70.03, 15th) is CC-BY-NC-4.0. Nace.AI publishes Drex v2.0 under its own OpenRAIL-M licence, but Drex Max, which ties GLiDE at the top of Artificial Analysis, has no public weights. Liquid's d1-2B uses the LFM Open License, which caps commercial use at $10M in revenue.
- **Laptop-sized:** below 5B, PelaAI's KnowLine 4B Gen5.5 (55.99) and Perplexity's Decider Flash v1.3 (55.14) lead, and GLiDE 2B scores 43.22. AWS's Strands Decider 2B installs with pip and runs on Apple Silicon but scores 20.72, 253rd.
- **The first wave of clones** taught the pattern and stopped there. <a href="https://github.com/TheoLeeCJ/SemIf-OpenJev" target="_blank">SemIf</a> (4,965 stars), which reads option logits off a frozen Qwen3.5-4B, scores 26.71 and hasn't had a commit since September 23. <a href="https://github.com/TianyuCodings/NanoJev" target="_blank">NanoJev</a> (2,602 stars) is still the reference for 0.6B decisions inside real-time game loops, <a href="https://github.com/vinnylarouge/jevlike" target="_blank">jevlike</a> (1,372 stars) is a trainer for your own label set, and Von, which led the open field on jabr's benchmark in September, has archived its repository.

## Test a local decision server from outside your machine

Every model above runs as an HTTP server bound to your own machine, and with the 27B to 31B ones that machine is usually a rented GPU box or a workstation under a desk. That's fine until something else has to call it: a staging app, a webhook feeding the classifier, a teammate checking the routing, or a {{< link href="/blog/best_ai_llm_routers_openrouter_alternatives/" >}}router{{< /link >}} sending small decisions to the cheap model. With Kev listening on port 8009, one command gives it a public HTTPS URL using {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8009 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8009 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8009 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Change the port for the other servers (Karpo's example uses 18440). During a migration, choose between models by shadowing real traffic against both: point a copy of production webhooks at the tunnel, log what the open model would have decided, and compare it with the answer you recieve from Jev. One caution - these servers are open by default, so set `KEV_API_KEY`, `GLIDE_API_KEY` or `LAYA_API_KEY` to require a bearer token before you expose one.

## Pick by GPU memory first, then license

Start from the GPU you have. With an 80 GB-class card, use **Karpo Decision 31B** for the top accuracy under Apache-2.0, or **Mammoth-1** if you want MIT and answers that stay put when the question is reworded. If you'd rather test before buying hardware, start with **pplx-decider v1.3** free on OpenRouter and self-host the same weights later. For images, video or documents past 32k tokens, use **d3-ultra**; on a 24 GB card, **d3-flash** or **Elephant-1**. To keep an existing Jev client with zero code changes, run **Kev 27B**. On a CPU, in many languages, with time to fine-tune, use **Laya**. **GLiDE** scores as well as Karpo, so use it if you're under $10M in revenue or willing to sign Fastino's agreement.

## Conclusion

The open field copied Jev's interface in a day and then spent weeks failing to copy its accuracy. That part is done: on both independent boards, models you can download under Apache-2.0 or MIT now score above Jev 1.14. The hardware bill hasn't changed. Everything that clearly beats Jev wants 50 to 63 GB of GPU memory, while Jev answers in 92 ms for $0.042 per million input tokens without you owning a GPU at all.

So pick the model that matches your hardware and license, run it in shadow mode against a few hundred of your own labelled decisions, refit the confidence temperature, and compare accuracy and cost with what you run today. Treat every number above, the vendors' included, as a hypothesis until your own traffic confirms it - the same caution that applies to {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}self-hosting models{{< /link >}} generally.
