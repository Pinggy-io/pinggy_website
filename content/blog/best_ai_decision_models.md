---
title: "7 Best AI Decision Models in 2026, Compared on Independent Benchmarks"
description: "Jev, Liquid d1-ultra, pplx-decider, Microsoft-Decision-1, OpenAI Decisions, Cloudflare Clef and Strands Decider 2B compared on price, inputs and three independent leaderboards, with one run locally on an M3 Pro."
date: 2026-10-18T00:15:00+05:30
lastmod: 2026-10-19T00:15:00+05:30
draft: false
tags: ["AI Models", "AI agents", "open source", "API", "llm"]
eyebrow: "Decision models"
og_image: "images/best_ai_decision_models/best_ai_decision_models_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIjcgQmVzdCBBSSBEZWNpc2lvbiBNb2RlbHMgaW4gMjAyNiwgQ29tcGFyZWQgb24gSW5kZXBlbmRlbnQgQmVuY2htYXJrcyIsCiAgImRlc2NyaXB0aW9uIjogIkpldiwgTGlxdWlkIGQxLXVsdHJhLCBwcGx4LWRlY2lkZXIsIE1pY3Jvc29mdC1EZWNpc2lvbi0xLCBPcGVuQUkgRGVjaXNpb25zLCBDbG91ZGZsYXJlIENsZWYgYW5kIFN0cmFuZHMgRGVjaWRlciAyQiBjb21wYXJlZCBvbiBwcmljZSwgaW5wdXRzIGFuZCB0aHJlZSBpbmRlcGVuZGVudCBsZWFkZXJib2FyZHMsIHdpdGggb25lIHJ1biBsb2NhbGx5IG9uIGFuIE0zIFByby4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYmVzdF9haV9kZWNpc2lvbl9tb2RlbHMvYmVzdF9haV9kZWNpc2lvbl9tb2RlbHNfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiAgICB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0xOFQwMDoxNTowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTE5VDAwOjE1OjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvYmVzdF9haV9kZWNpc2lvbl9tb2RlbHMvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJBSSBNb2RlbHMiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIkFJIGRlY2lzaW9uIG1vZGVscywgU3lzdGVtIE9uZSBtb2RlbCwgSmV2LCBUeXBlU2FmZSwgTGlxdWlkIGQxLXVsdHJhLCBwcGx4LWRlY2lkZXIsIE1pY3Jvc29mdC1EZWNpc2lvbi0xLCBPcGVuQUkgRGVjaXNpb25zIEFQSSwgQ2xvdWRmbGFyZSBDbGVmLCBTdHJhbmRzIERlY2lkZXIgMkIsIEpldkJlbmNoLCBEZWNpc2lvbiBJbmRleCIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJEZWNpc2lvbiBtb2RlbCIsICJkZXNjcmlwdGlvbiI6ICJBbiBBSSBtb2RlbCB0aGF0IHJldHVybnMgdHlwZWQgcHJvYmFiaWxpdGllcyBmb3IgeWVzL25vLCBjaG9pY2UgYW5kIHNjb3JlIHF1ZXN0aW9ucyBpbiBvbmUgZm9yd2FyZCBwYXNzIGluc3RlYWQgb2YgZ2VuZXJhdGluZyB0ZXh0LiIgfSwKICAgIHsgIkB0eXBlIjogIlNvZnR3YXJlQXBwbGljYXRpb24iLCAibmFtZSI6ICJUeXBlU2FmZSBKZXYiLCAiYXBwbGljYXRpb25DYXRlZ29yeSI6ICJEZXZlbG9wZXJBcHBsaWNhdGlvbiIsICJkZXNjcmlwdGlvbiI6ICJIb3N0ZWQgZGVjaXNpb24gbW9kZWwgYXQgJDAuMDQyIHBlciBtaWxsaW9uIGlucHV0IHRva2VucyB3aXRoIG91dHB1dCBmcmVlOyBqZXYtMS4xNC4wIHJlbGVhc2VkIE9jdG9iZXIgMTQsIDIwMjYuIiB9LAogICAgeyAiQHR5cGUiOiAiU29mdHdhcmVBcHBsaWNhdGlvbiIsICJuYW1lIjogIkxpcXVpZCBBSSBkMS11bHRyYSIsICJhcHBsaWNhdGlvbkNhdGVnb3J5IjogIkRldmVsb3BlckFwcGxpY2F0aW9uIiwgImRlc2NyaXB0aW9uIjogIkhvc3RlZCBtdWx0aW1vZGFsIGRlY2lzaW9uIG1vZGVsIHJlbGVhc2VkIE9jdG9iZXIgMTUsIDIwMjYgYXQgJDAuMDQyIHBlciBtaWxsaW9uIGlucHV0IHRva2Vuczsgc2Vjb25kIG9uIHRoZSBKZXZCZW5jaCBob3N0ZWQgYm9hcmQuIiB9LAogICAgeyAiQHR5cGUiOiAiU29mdHdhcmVBcHBsaWNhdGlvbiIsICJuYW1lIjogIlBlcnBsZXhpdHkgcHBseC1kZWNpZGVyIHYxLjIiLCAiYXBwbGljYXRpb25DYXRlZ29yeSI6ICJEZXZlbG9wZXJBcHBsaWNhdGlvbiIsICJkZXNjcmlwdGlvbiI6ICJBcGFjaGUtMi4wIDI3QiBkZWNpc2lvbiBtb2RlbCwgNHRoIG9mIDE3NCBvbiBEZWNpc2lvbiBJbmRleCAwLjMuMiwgaG9zdGVkIGF0ICQwLjAyIHBlciBtaWxsaW9uIGlucHV0IHRva2Vucy4iIH0sCiAgICB7ICJAdHlwZSI6ICJTb2Z0d2FyZUFwcGxpY2F0aW9uIiwgIm5hbWUiOiAiU3RyYW5kcyBEZWNpZGVyIDJCIiwgImFwcGxpY2F0aW9uQ2F0ZWdvcnkiOiAiRGV2ZWxvcGVyQXBwbGljYXRpb24iLCAiZGVzY3JpcHRpb24iOiAiQXBhY2hlLTIuMCAxLjlCIGRlY2lzaW9uIG1vZGVsIGZyb20gQVdTIFN0cmFuZHMgTGFicyB0aGF0IHJ1bnMgbG9jYWxseSB2aWEgcGlwIGluc3RhbGwgc3RyYW5kcy1kZWNpZGVyLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiSmV2QmVuY2giLCAiZGVzY3JpcHRpb24iOiAiSW5kZXBlbmRlbnQgZGVjaXNpb24tbW9kZWwgYmVuY2htYXJrIGJ5IEJlbmNobWFyayBIZWF2ZW4gc2NvcmluZyBpbnRlbGxpZ2VuY2UsIGNhbGlicmF0aW9uLCBzcGVlZCBhbmQgY29zdCBvbiAxLDUwMCBkZWNpc2lvbnMuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "best_ai_decision_models/best_ai_decision_models_banner.webp" "Best AI decision models in 2026: Jev, d1-ultra, pplx-decider, Decision-1, OpenAI Decisions, Clef-flash and Strands Decider 2B with their makers' logos and hosted prices" >}}

Most of the calls an AI agent makes are not requests for prose. Route this ticket, allow this tool call, rate this incident: each is a small, bounded decision, and paying a chat model to write a sentence that your code parses back into an `if` statement is slow and expensive.

A month ago one company sold a model built for that job. Since TypeSafe launched {{< link href="/blog/typesafe_jev_system_one_model_use_cases_vs_llms/" >}}Jev{{< /link >}} on September 15, 2026, OpenAI, Microsoft, Perplexity, Cloudflare, Liquid AI and AWS have all shipped decision models, and the Decision Index leaderboard now lists 174 entries. They return a probability for every allowed answer in a single forward pass, and the hosted ones bill only input tokens, from $0.01 to $0.24 per million.

Below are the seven worth evaluating, judged on three independent leaderboards rather than vendor charts, with one run on a laptop. Numbers checked October 18, 2026.

{{% tldr %}}
1. **Decision models return typed probabilities instead of text**: a yes/no, a choice or a score, all answered in one pass with output tokens free on <a href="https://docs.typesafe.ai/models" target="_blank">Jev</a> and every other hosted API here.
2. **The leaderboards disagree.** <a href="https://benchmarkheaven.com/jev-models/api" target="_blank">JevBench</a> weighs in cost and speed, the <a href="https://huggingface.co/spaces/multimodalart/jev-decision-index" target="_blank">Decision Index</a> is mostly private accuracy tests, and <a href="https://artificialanalysis.ai/articles/artificial-analysis-decision-index" target="_blank">Artificial Analysis</a> finds decision models overconfident on hard questions.
3. **Hosted: Jev is the best-tested, and <a href="https://www.liquid.ai/blog/d1-ultra" target="_blank">Liquid's d1-ultra</a> currently beats it on JevBench** at the same $0.042 per million input tokens.
4. **Open weights: <a href="https://huggingface.co/perplexity-ai/pplx-decider-v1.2" target="_blank">pplx-decider v1.2</a> has the 4th-highest score of 174 on the Decision Index**, the best of any major vendor's model, under Apache-2.0.
5. **For a laptop, <a href="https://github.com/strands-labs/strands-decider" target="_blank">Strands Decider 2B</a> installs with pip and runs on Apple Silicon**, but it ranks 135th on the Decision Index, so keep it on clear-cut routing.
{{% /tldr %}}

## How a decision model differs from a chat model

You send a state (text, and for some models an image) plus questions with fixed answer types. Three types cover nearly everything: a yes/no probability (TypeSafe, Microsoft, Cloudflare and Perplexity call it `noul`, OpenAI calls it `predicate`), a `choice` among named options, and a `score` on an ordered scale. The model reads the input once and scores every allowed answer in that pass, so nothing comes back malformed and extra questions add little latency.

The wire format is settling into two shapes. TypeSafe's `POST /v1/systemone` request, with `state`, `questions` and `criteria`, is also what Microsoft-Decision-1 serves on Foundry and what the open servers from Strands, Kev and Laya implement, so moving between them is mostly a base-URL change. OpenAI and Perplexity each use a `POST /v1/decisions` endpoint instead.

Vendors also promise calibrated probabilities: a 0.9 should be right about 90% of the time, so you can act above a threshold and escalate the rest. Artificial Analysis found that holds on tool-calling and safety tasks, but on hard knowledge questions accuracy fell below the stated probability for every decision model it tested.

## Why the three leaderboards disagree

**JevBench v1.6.1**, maintained by Benchmark Heaven "independently of TypeSafe AI", scores 1,500 decisions per system, 1,200 of them sealed. Its composite is a harmonic mean of intelligence, calibration, speed and cost, so cheap, fast hosted APIs do well and self-hosted 27B models get punished on cost: Perplexity's Decider v1.1 27B has a capability score of 82.8, above any hosted API, and a composite of 20.6.

**Decision Index 0.3.2**, updated October 16, takes 20% from 37 public benchmarks, 50% from private tests of the same skills and 30% from private tasks in new domains, and leaves out models slower than 1,000 ms per request. Small-lab fine-tunes crowd the top; first is StartLux-Decision v1.1 27B at 69.12.

{{< image "best_ai_decision_models/decision_index_leaderboard.webp" "Decision Index 0.3.2 leaderboard bar chart of full scores, with StartLux-Decision v1.1 27B first at 69.1, Perplexity Decider v1.2 at 65.5 and Jev 1.14 at 61.5" >}}

*The Decision Index 0.3.2 full-score board, 174 models. Screenshot: {{< link href="https://huggingface.co/spaces/multimodalart/jev-decision-index" >}}multimodalart/jev-decision-index{{< /link >}}, October 2026.*

**Artificial Analysis Decision Index v1.0**, published October 13, is the only one that also scores chat models. Jev 1.13 gets 58 and Microsoft-Decision-1 gets 54, while Claude Haiku 5.5 (Low) scores 61 and GPT-6 Luna (Low) 55. Decision models win on cost and time instead: Jev costs $42 per million tasks against Haiku's $184 and is 11 times faster.

{{< image "best_ai_decision_models/jevbench_hosted_decision_apis.webp" "Scatter chart of hosted decision APIs on JevBench, with Liquid d1-ultra highest at capability 80.5 and OpenAI Decisions most expensive at $0.052 per 1,000 decisions" >}}

*Data: {{< link href="https://benchmarkheaven.com/jev-models/api" >}}JevBench hosted board v1.7.46{{< /link >}}, October 16, 2026. Costs for d1-ultra and Jev 1.14 are JevBench estimates.*

So "best" depends on the axis you care about. Here is how the seven compare:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Weights</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Hosted price, per 1M input</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Inputs</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">JevBench capability</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Decision Index 0.3.2</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>TypeSafe Jev 1.13 / 1.14</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Closed</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0.042</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text; images in preview</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">77.1 / 75.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">60.11 / 61.53</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Liquid d1-ultra</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Closed (d1-3B open)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0.042</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text, images</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">80.5</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Not listed (d1-3B: 38.90)</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Perplexity pplx-decider v1.2</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0.02 (flash: $0.01)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text, images</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">82.8 (v1.1, self-hosted)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">65.55 (4th-highest)</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Microsoft-Decision-1</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Closed</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0.042</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text, 32K</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">70.8</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Not listed</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>OpenAI Decisions (gpt-6-luna)</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Closed</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0.10</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text, images</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">73.5</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Not listed</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Cloudflare Clef / Clef-flash</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0.24 / $0.038</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text, images (Clef-omni: audio, video)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">75.3 / 63.8 (self-hosted)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">53.08 / 47.61</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>AWS Strands Decider 2B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Self-hosted only</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Text</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Not listed</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">21.34 (135th)</td>
</tr>
</tbody>
</table>

## The 7 best decision models in 2026

### 1. TypeSafe Jev

Jev is still the model the field measures against. JevBench is named after it, and Jev leads jabr's 49-task classifier benchmark at 0.969 macro accuracy, though that suite doesn't include the newer entrants. Pricing is unchanged at $0.042 per million input tokens with output free. A request takes up to 64k tokens (32k per question) and up to 255 options per choice.

`jev-1.14.0` shipped on {{< link href="https://typesafe.ai/blog/jev-1-14" >}}October 14{{< /link >}} with three opt-in features behind "danger zone" headers: image input, a `box` question type for bounding boxes, and long context up to 262k tokens. TypeSafe says none is production-ready, and `jev-latest` stays on 1.13.0 until about October 21. Independent scores split on the upgrade: JevBench has 1.14 slightly behind 1.13 (capability 75.0 against 77.1), while the Decision Index has it slightly ahead (61.53 against 60.11).

Access is still labelled early access, though the company <a href="https://techaiwire.com/articles/typesafe-ai-870-million-series-a-jev-a16z/" target="_blank">raised $870 million at a $7.5 billion valuation</a> on October 9, so it's unlikely to vanish mid-integration.

### 2. Liquid AI d1-ultra and d1-3B

Liquid AI has the strongest independent result of any large vendor right now. Its hosted {{< link href="https://www.liquid.ai/blog/d1-ultra" >}}d1-ultra{{< /link >}}, released October 15 on the Liquid API at $0.042 per million input tokens, takes text and images. On JevBench's hosted board it sits second overall with a composite of 76.1 and a capability of 80.5, ahead of Jev 1.13 on both. Liquid says it beat Jev 1.14 on all 112 of its own evaluations; it hasn't named the base model, and it's three days old.

The open {{< link href="https://huggingface.co/LiquidAI/d1-3B" >}}d1-3B{{< /link >}} (3.12B parameters, built on LFM2.5-VL-3B, 32,768-token context) is the speed pick: Liquid reports 8 ms per decision on an RTX 4090 and 30 ms on an M5 Pro, with GGUF and MLX builds. It scores 38.90 on the Decision Index, well behind the 27B models. Read the license first: the LFM Open License v1.0 allows commercial use only below $10 million in annual revenue.

### 3. Perplexity pplx-decider v1.2

This is the best open-weight model from a major vendor and the cheapest hosted one. Version 1.2, released October 15, is a 27B fine-tune of Qwen3.8-27B under Apache-2.0, with a 4B flash variant on Qwen3.5-4B. The hosted {{< link href="https://docs.perplexity.ai/getting-started/pricing" >}}Decisions API{{< /link >}} charges $0.02 per million input tokens for the 27B and $0.01 for flash, output free, and accepts text and images with up to 128 questions per request.

Its 65.55 is the fourth-highest score of 174 on Decision Index 0.3.2 and the highest of any model in this list, and flash scores 54.81. Self-hosting the 27B takes roughly 49 to 52 GiB of GPU memory, which is what sinks v1.1's JevBench composite. Perplexity reports an expected calibration error of 0.014 on its own development set; treat that as a vendor number.

### 4. Microsoft-Decision-1

Microsoft-Decision-1, in {{< link href="https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-microsoft-decision-1-in-microsoft-foundry-for-decision-and-classific/4562742" >}}public preview in Foundry{{< /link >}} since October 9, is Qwen3.5-9B post-trained for single-pass scoring, at $0.042 per million input tokens in US and EU Datazone deployments. It speaks TypeSafe's protocol: requests go to `<foundry-endpoint>/providers/microsoft/v1/systemone` with the same state and questions shape, so code written for Jev moves over with a new URL and key. Inputs are text only, up to 32K tokens, and it's also on {{< link href="https://openrouter.ai/microsoft/microsoft-decision-1" >}}OpenRouter{{< /link >}}.

Microsoft claims the top accuracy across its own 36 benchmarks and an 85 ms median. Independent numbers are more modest: JevBench ranks it 13th with a capability of 70.8 and a measured median of 0.46 s, and Artificial Analysis gives it 54, at $31 per million tasks against Jev's $42. Microsoft plans to rebase it on MAI and OpenAI models, so re-test when it does.

### 5. OpenAI Decisions API

OpenAI's version is a new endpoint, {{< link href="https://developers.openai.com/api/docs/guides/decisions" >}}`POST /v1/decisions`{{< /link >}}, that runs only `gpt-6-luna` and has been in public beta since October 6. Input costs $0.10 per million tokens with no charge for output or cache, which makes it the most expensive per decision of the hosted APIs on JevBench, at $0.052 per 1,000. It takes text and images, 1 to 200 questions per request and 2 to 255 options per choice, and any answer can come back as a `refusal`.

JevBench gives it a capability of 73.5, with calibration at 90. In {{< link href="https://every.to/vibe-check/vibe-check-openai-devday-2026" >}}Every's early tests{{< /link >}} it picked the correct control in 76 of 78 steps of a computer-use replay against Jev's 73, and tied Jev on thread classification while running slower. The real case is integration: if you already rely on OpenAI's zero data retention, HIPAA or EU data residency, the Decisions API inherits them, though regional processing adds OpenAI's 10% uplift to the $0.10.

### 6. Cloudflare Clef

Cloudflare released {{< link href="https://blog.cloudflare.com/clef-decision-models/" >}}Clef and Clef-flash{{< /link >}} on October 1 with Apache-2.0 weights: Clef is 27B on Qwen3.8-27B, Clef-flash 9B on Qwen3.5-9B. On October 9 it added Clef-omni, a 30B mixture-of-experts with 3B active parameters that also reads audio and video. On Workers AI they cost $0.24, $0.15 and $0.038 per million input tokens, output free. Clef-flash dropped from $0.090 that same day, and its hosted context shrank from 64K to 24K.

Cloudflare reports medians of 209.3 ms for Clef and 38.8 ms for Clef-flash. Independent scores put them mid-table: 53.08 and 47.61 on the Decision Index, and capabilities of 75.3 and 63.8 on JevBench's open board. If your traffic already runs through Workers, `@cf/cloudflare/clef-flash` is a cheap in-path check, and Clef-omni is the only model here that reads video.

### 7. AWS Strands Decider 2B

{{< link href="https://strandsagents.com/blog/introducing-strands-decider/" >}}Strands Decider 2B{{< /link >}}, from AWS's Strands Labs team, came out October 1 under Apache-2.0 and is the one you can run on a laptop today. It has 1.9B parameters: Qwen3.5-2B-Base with the language-model head removed, a pointer head of about 1M parameters in its place, and a rank-16 LoRA. AWS hasn't put it on Bedrock as a managed model, so you host it yourself.

Strands reports 180 of 231 (77.9%) on JevBench's public split for the current checkpoint, but that's a vendor run on public tasks, and the Decision Index, which is mostly private tests, places it 135th at 21.34. Keep it on routing, tool selection and guardrails with clearly distinct options.

## Running Strands Decider 2B on a laptop

I installed it from the repository's main branch on an M3 Pro with 18 GB, where it picked the MPS backend on its own (torch 2.14.1, transformers 5.20.1). The first run downloads about 4.7 GB.

```bash
pip install "strands-decider @ git+https://github.com/strands-labs/strands-decider"
strands-decider ask StrandsAgents/strands-decider-2B-qwen3.5-v1-2610 \
  --state "Help! My payouts have been failing for 3 days! " \
  --choice "Which team should handle this?=billing,sales,retail" \
  --noul "Is the customer blocked right now?" \
  --score "How urgent is this?=can wait,today,right now"
```

```bash
noul_0 noul = 0.209
choice_0 -> billing (confidence 0.657)
    billing                  0.771
    sales                    0.120
    retail                   0.109
score_0 score = 1.30 (confidence 0.328)
    0: can wait                                 0.197
    1: today                                    0.311
    2: right now                                0.492
```

Routing is right, but 0.209 on "blocked right now" for payouts failing for three days is a miss. The CLI also reloads the model every time (17.6 s for that command), so for real use start the server, which speaks the same `POST /v1/systemone` shape as Jev:

```bash
strands-decider serve StrandsAgents/strands-decider-2B-qwen3.5-v1-2610 --port 8000
```

This client uses only the Python standard library, so it runs as-is under Python 3.13:

```python
import json
import statistics
import time
import urllib.request

URL = "http://localhost:8000/v1/systemone"

body = {
    "state": "Help! My payouts have been failing for 3 days!",
    "questions": {
        "team": {
            "type": "choice",
            "instructions": "Which team should handle this?",
            "criteria": {
                "billing": "Payments, payouts, invoices and refunds",
                "sales": "Pricing, plans and new contracts",
                "retail": "In-store orders and returns",
            },
        },
        "urgent": {"type": "noul", "instructions": "Does the customer need help today?"},
    },
}


def ask():
    req = urllib.request.Request(
        URL, data=json.dumps(body).encode(), headers={"content-type": "application/json"}
    )
    with urllib.request.urlopen(req) as resp:
        return json.load(resp)


answers = ask()["answers"]  # first call warms up the shapes
print(json.dumps(answers, indent=2))

times = []
for _ in range(10):
    start = time.perf_counter()
    ask()
    times.append((time.perf_counter() - start) * 1000)
print(f"median {statistics.median(times):.0f} ms over {len(times)} calls")
```

```bash
$ python3 decide.py
{
  "team": {
    "type": "choice",
    "choice": "billing",
    "probabilities": {
      "billing": 0.9795,
      "sales": 0.0111,
      "retail": 0.0095
    },
    "confidence": 0.9692
  },
  "urgent": {
    "type": "noul",
    "noul": 0.9124
  }
}
median 280 ms over 10 calls
```

The request changed and the model didn't. Describing each option lifted billing from 0.771 to 0.980, and asking whether the customer needs help today instead of whether they are blocked moved the yes/no from 0.209 to 0.912. **Option descriptions and question wording move these models as much as model choice does.** Warm requests took a median of 280 ms over 10 calls, slower than the 153 ms Strands reports on an M3 Pro for an earlier checkpoint on short inputs; its docs say the optional MLX backend runs 1.4 to 1.6 times faster than MPS.

## Which decision model to pick

Pick on deployment first and leaderboard second. For the most independent evidence on a hosted API, use Jev, and trial d1-ultra beside it at the same price. For open weights, pplx-decider v1.2 is the accuracy pick if you have an 80 GB-class GPU, and flash needs far less. If compliance decides, stay on your cloud: Decision-1 on Azure, Decisions on OpenAI, Clef on Workers. For a laptop or an air-gapped box, use Strands Decider 2B or d1-3B, minding Liquid's revenue cap.

Kev, Laya and other open Jev clones are in our {{< link href="/blog/best_open_source_jev_alternatives_self_hosted_decision_models/" >}}open source Jev alternatives roundup{{< /link >}}.

## Conclusion

Don't trust a leaderboard over your own traffic. Label a few hundred real decisions from your logs, run two candidates in shadow mode for a week, and compare accuracy, confidence and cost against what you run today. The three leaderboards disagree and the field reshuffles every few days, so your own labelled set is the only ranking that matches your data.
