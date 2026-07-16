---
title: "Best Open Source Self-Hosted Text-to-Speech Models in 2026"
description: "A guide to the best open-weight text-to-speech models you can self-host in 2026, ranked by Artificial Analysis Speech Arena Elo. Compare Step Audio EditX, Fish Audio S2 Pro, Voxtral TTS, Kokoro 82M, Maya1, NVIDIA Magpie, Chatterbox, and Zonos on quality, licensing, hardware, and deployment."
date: 2026-07-14T10:00:00+05:30
lastmod: 2026-07-14T10:00:00+05:30
draft: false
tags: ["text to speech", "open source TTS", "self-hosted AI", "Step Audio EditX", "Fish Audio S2", "Voxtral TTS", "Kokoro TTS", "Maya1", "Magpie TTS", "Chatterbox", "Zonos", "VibeVoice", "voice cloning", "local AI"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/best_open_source_self_hosted_text_to_speech_models/best_open_source_self_hosted_text_to_speech_models_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJBcnRpY2xlIiwKICAiaGVhZGxpbmUiOiAiQmVzdCBPcGVuIFNvdXJjZSBTZWxmLUhvc3RlZCBUZXh0LXRvLVNwZWVjaCBNb2RlbHMgaW4gMjAyNiIsCiAgImRlc2NyaXB0aW9uIjogIkEgZ3VpZGUgdG8gdGhlIGJlc3Qgb3Blbi13ZWlnaHQgdGV4dC10by1zcGVlY2ggbW9kZWxzIHlvdSBjYW4gc2VsZi1ob3N0IGluIDIwMjYsIHJhbmtlZCBieSBBcnRpZmljaWFsIEFuYWx5c2lzIFNwZWVjaCBBcmVuYSBFbG8sIGluY2x1ZGluZyBTdGVwIEF1ZGlvIEVkaXRYLCBGaXNoIEF1ZGlvIFMyIFBybywgVm94dHJhbCBUVFMsIEtva29ybyA4Mk0sIE1heWExLCBOVklESUEgTWFncGllLCBDaGF0dGVyYm94LCBhbmQgWm9ub3MuIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTA3LTE0VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMDctMTRUMTA6MDA6MDArMDU6MzAiLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYmVzdF9vcGVuX3NvdXJjZV9zZWxmX2hvc3RlZF90ZXh0X3RvX3NwZWVjaF9tb2RlbHMvYmVzdF9vcGVuX3NvdXJjZV9zZWxmX2hvc3RlZF90ZXh0X3RvX3NwZWVjaF9tb2RlbHNfYmFubmVyLndlYnAiLAogICJhcnRpY2xlU2VjdGlvbiI6IFsKICAgICJUZWNobm9sb2d5IiwKICAgICJBSSBUb29scyIsCiAgICAiU2VsZi1Ib3N0aW5nIgogIF0sCiAgImtleXdvcmRzIjogWwogICAgInRleHQgdG8gc3BlZWNoIiwKICAgICJvcGVuIHNvdXJjZSBUVFMiLAogICAgInNlbGYtaG9zdGVkIEFJIiwKICAgICJTdGVwIEF1ZGlvIEVkaXRYIiwKICAgICJGaXNoIEF1ZGlvIFMyIFBybyIsCiAgICAiVm94dHJhbCBUVFMiLAogICAgIktva29ybyBUVFMiLAogICAgIk1heWExIiwKICAgICJNYWdwaWUgVFRTIiwKICAgICJDaGF0dGVyYm94IiwKICAgICJab25vcyIsCiAgICAiVmliZVZvaWNlIiwKICAgICJ2b2ljZSBjbG9uaW5nIiwKICAgICJ2TExNIiwKICAgICJMb2NhbEFJIgogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_text_to_speech_models/best_open_source_self_hosted_text_to_speech_models_banner.webp" "Speech Arena ranking, model size, and hosted API pricing for open-weight text-to-speech models, July 2026" >}}

Kokoro is 82 million parameters. It runs on a laptop CPU, it's Apache 2.0, and in blind listening tests people pick it over Microsoft's 9-billion-parameter VibeVoice. That's a fair summary of where open-weight text-to-speech landed in 2026: the models got a lot better and a lot smaller at the same time.

If you last looked at open TTS a couple of years ago, the choice was between something that sounded like a satnav and something that needed a rack of GPUs. That era is over. You can now download a model that clones a voice from three seconds of audio, another that takes stage direction inline (`[whisper]`, `[clears throat]`, `[giggle]`), and another that builds a speaker out of a written description like "40-year-old male, warm, low pitch, conversational". Every one of them runs on a single GPU, and several run on hardware you already own.

The frontier is still ahead. Alibaba's proprietary Qwen-Audio-3.0-TTS-Plus tops the {{< link href="https://artificialanalysis.ai/text-to-speech/leaderboard/provider-voice?open-weights=true" >}}Artificial Analysis Speech Arena{{< /link >}} at **1,236** against **1,118** for the best open weights, and if voice quality *is* your product, that gap is worth paying for. For most other work it isn't - and the economics aren't close. The best-value open model runs about **$0.70 per million characters** on a hosted API against **$100** for ElevenLabs v3, and costs nothing but electricity if you run it yourself.

This guide covers the open-weight TTS models worth self-hosting in July 2026, what each is genuinely good at, the licensing traps (there are several, and they're nastier than in the LLM world), and the tooling to deploy them.

{{% tldr %}}

**Top Open-Weight TTS Models (blind listening tests, July 2026):**
1. **Step Audio EditX** - Elo **1,118** - emotion/style editing, Apache 2.0 - <a target="_blank" href="https://stepaudiollm.github.io/step-audio-editx/">Project page</a>
2. **Fish Audio S2 Pro** - Elo **1,110** - inline `[tag]` prosody control, 80+ languages, **non-commercial** - <a target="_blank" href="https://fish.audio/s2/">fish.audio/s2</a>
3. **Voxtral TTS** - Elo **1,077** - 3-second voice cloning, 9 languages, **non-commercial** - <a target="_blank" href="https://mistral.ai/news/voxtral-tts/">Mistral announcement</a>
4. **Kokoro 82M v1.0** - Elo **1,060** - runs on a CPU, Apache 2.0, no cloning - <a target="_blank" href="https://github.com/hexgrad/kokoro">GitHub</a>
5. **Maya1** - Elo **1,053** - design a voice from a text description, Apache 2.0 - <a target="_blank" href="https://www.mayaresearch.ai/">mayaresearch.ai</a>
6. **Magpie-Multilingual 357M** - Elo **1,048** - 9 languages, commercial-safe - <a target="_blank" href="https://build.nvidia.com/nvidia/magpie-tts-multilingual/modelcard">NVIDIA model card</a>
7. **Chatterbox** - Elo **1,011** - MIT, 23 languages, emotion control - <a target="_blank" href="https://www.resemble.ai/learn/models/chatterbox">resemble.ai</a>
8. **Zonos-v0.1** - Elo **1,000** - Apache 2.0, 44kHz, 6GB VRAM - <a target="_blank" href="https://www.zyphra.com/our-work/beta-release-of-zonos-v0-1">Zyphra</a>

**Watch the license, not the marketing.** Two of the top three ship under non-commercial terms despite being described as open source. Step Audio EditX (#1) is Apache 2.0 and is the only top-three model you can ship commercially without a negotiation.

**Best Self-Hosting Tools:**
- <a target="_blank" href="https://github.com/mudler/LocalAI">LocalAI</a> - broadest model coverage, OpenAI-compatible
- <a target="_blank" href="https://github.com/vllm-project/vllm-omni">vLLM-Omni</a> - production GPU serving for new-generation TTS
- <a target="_blank" href="https://github.com/remsky/Kokoro-FastAPI">Kokoro-FastAPI</a> - the fastest path to a working endpoint

{{% /tldr %}}

## Where open weights stand today

The ranking in the banner above comes from the Artificial Analysis Speech Arena, where listeners hear two clips of the same text without knowing which model made them and pick the better one. It's the most useful signal in TTS, because it measures the thing you actually care about - whether the output sounds good to a human - rather than a metric a vendor can train against.

**Step Audio EditX and Fish Audio S2 Pro are neck and neck at the top**, both from the last few months. Behind them the board is more interesting than a ranking suggests: Voxtral TTS, Kokoro, Maya1 and NVIDIA's Magpie land within about 30 points of each other while ranging from 82M to 4B parameters and disagreeing completely about what a TTS model is even for. One clones any voice from a few seconds of audio. One refuses to clone at all, on purpose. One invents a speaker from a sentence of description.

That spread is the real headline. **Size has almost stopped predicting quality.** Kokoro sits in the top five at 82M, ahead of models sixty times larger, and NVIDIA's Magpie does nine languages in 357M. The trillion-parameter arms race that defines open-weight LLMs simply isn't happening here - the useful models are small enough that a mid-range GPU, or in Kokoro's case no GPU at all, is enough to serve them.

The third panel in the banner is where self-hosting earns its keep. Even paying someone else to host these models, open weights run $0.70 to $40 per million characters against $100 for ElevenLabs v3. Run them yourself and the marginal cost goes to zero.

### Open-weight leaderboard (July 2026)

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Creator</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Elo</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">License</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen-Audio-3.0-TTS-Plus <em>(proprietary, for reference)</em></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Alibaba</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,236</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Closed</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Step Audio EditX</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">StepFun</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>1,118</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Fish Audio S2 Pro</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Fish Audio</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>1,110</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Research (non-commercial)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Voxtral TTS</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Mistral</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,077</td>
  <td style="border:1px solid #ddd;padding:0.5em;">CC BY-NC 4.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Kokoro 82M v1.0</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">hexgrad</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,060</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Maya1</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Maya Research</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,053</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Magpie-Multilingual 357M</strong> (Mar 2026)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">NVIDIA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,048</td>
  <td style="border:1px solid #ddd;padding:0.5em;">NVIDIA Open Model</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Chatterbox</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Resemble AI</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,011</td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">Magpie-Multilingual 357M (Jan 2026)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">NVIDIA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,005</td>
  <td style="border:1px solid #ddd;padding:0.5em;">NVIDIA Open Model</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Zonos-v0.1</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Zyphra</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,000</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">OpenVoice v2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">MyShell</td>
  <td style="border:1px solid #ddd;padding:0.5em;">959</td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">VibeVoice 7B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Microsoft</td>
  <td style="border:1px solid #ddd;padding:0.5em;">958</td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT (withdrawn)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">XTTS v2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Coqui</td>
  <td style="border:1px solid #ddd;padding:0.5em;">908</td>
  <td style="border:1px solid #ddd;padding:0.5em;">CPML (non-commercial)</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">StyleTTS 2</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Li et al.</td>
  <td style="border:1px solid #ddd;padding:0.5em;">882</td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT + conditions</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.5em;">MetaVoice v1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">MetaVoice</td>
  <td style="border:1px solid #ddd;padding:0.5em;">836</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
</tr>
</tbody>
</table>

> For the current scores and the full model list, visit the {{< link href="https://artificialanalysis.ai/text-to-speech/leaderboard/provider-voice?open-weights=true" >}}Speech Arena leaderboard{{< /link >}} directly.

## Best Open Source TTS Models

### 1. Step Audio EditX (StepFun) - the best open weights, and Apache 2.0

{{< image "best_open_source_self_hosted_text_to_speech_models/step_audio_editx.webp" "Step Audio EditX project page by StepFun" >}}

{{< link href="https://stepaudiollm.github.io/step-audio-editx/" >}}Step Audio EditX{{< /link >}} leads the open weights at **1,118 Elo**, and unusually for a leader, it's Apache 2.0. StepFun shipped the weights in November 2025 and improved the paralinguistics in January 2026.

The interesting thing about it is that it isn't really a TTS model with editing bolted on - it's an audio editing model that also does TTS. A dual-codebook tokenizer turns speech into discrete tokens, a 3B audio LLM manipulates those tokens, and a flow-matching decoder turns them back into waveform. Because edits happen in token space rather than through waveform DSP, you can iteratively refine a take: generate, adjust the emotion, adjust it again. StepFun's pitch is that it gets there using only large-margin synthetic training data, skipping the embedding-based disentanglement that comparable systems rely on.

What that buys you in practice: 14+ emotions, 30+ speaking styles, and 20+ paralinguistic tags (breathing, laughter, sighing, chuckling), plus zero-shot cloning and utility operations like denoise and silence trimming. StepFun reports 81.6% emotion accuracy in Chinese after three refinement iterations, and claims wins over MiniMax-2.6-hd and Doubao-Seed-TTS-2.0 on emotion editing.

The tradeoffs are real. It's designed for clips under 30 seconds per inference, so long-form narration means chunking the text yourself. Language coverage is narrow: Mandarin, English, Sichuanese, Cantonese, Japanese, and Korean, with no European languages beyond English. And it's the newest model here, so it has had the least real-world shakedown of anything near the top.

#### Key Specs

- **Architecture:** Dual-codebook tokenizer, 3B audio LLM, flow-matching decoder
- **License:** Apache 2.0
- **Released:** November 2025, updated January 2026
- **Languages:** Mandarin, English, Sichuanese, Cantonese, Japanese, Korean
- **Speech Arena Elo:** 1,118 (highest open weights in this guide)
- **Self-hosting:** 12GB VRAM minimum (tested on an L40S), vLLM supported

### 2. Fish Audio S2 Pro - inline prosody tags, non-commercial license

{{< image "best_open_source_self_hosted_text_to_speech_models/fish_audio.webp" "Fish Audio S2 Pro product page" >}}

{{< link href="https://fish.audio/s2/" >}}Fish Audio S2 Pro{{< /link >}} (March 2026) sits a hair behind Step Audio EditX at **1,110 Elo**, and it has the most pleasant control surface of anything in this list. You write prosody directly into the text as free-form tags:

```
[clears throat] Hey chat, how do I solve merge conflicts again?
[whisper in small voice] I definitely knew the answer yesterday. [exhale]
```

There are 15,000+ recognized tags, and they accept natural-language descriptions rather than a fixed enum, so `[pitch up]` and `[flirty]` both work. It's a much lower-friction way to direct a performance than fiddling with conditioning vectors.

Architecturally it's a Dual-AR design: a 4B "Slow AR" built on Qwen3-4B predicts semantic tokens, and a 400M 4-layer "Fast AR" fills in acoustics across 10 RVQ codebooks. Fish reports **0.54% WER** on the Seed-TTS Chinese test set and an 81.88% overall win rate on EmergentTTS-Eval, with 80+ languages supported in tiers (Japanese, English and Chinese are tier 1). Serving is SGLang-based with continuous batching and prefix caching: **RTF 0.195** and ~100ms time-to-first-audio on a single H200.

The catch is the license. Despite the "now open-source" headline on the product page, the weights are under the **Fish Audio Research License** - free for research, commercial use requires a separate agreement. Also worth knowing: the arXiv paper is CC BY 4.0, which is the *paper's* license, not the weights', and a few write-ups have confused the two. Fish doesn't publish a VRAM minimum.

#### Key Specs

- **Architecture:** Dual-AR - 4B Slow AR (Qwen3-4B based) + 400M Fast AR, 10 RVQ codebooks
- **License:** Fish Audio Research License (non-commercial)
- **Released:** March 9, 2026
- **Languages:** 80+ (tiered)
- **Speech Arena Elo:** 1,110
- **Vendor benchmarks:** 0.54% WER (Seed-TTS test-zh), 81.88% EmergentTTS-Eval win rate
- **Self-hosting:** SGLang or vLLM-Omni; RTF 0.195 on a single H200; no published VRAM floor

### 3. Voxtral TTS (Mistral) - the best 3-second voice cloning

{{< image "best_open_source_self_hosted_text_to_speech_models/voxtral.webp" "Mistral Voxtral TTS announcement page" >}}

{{< link href="https://mistral.ai/news/voxtral-tts/" >}}Voxtral TTS{{< /link >}} (March 23, 2026) scores **1,077 Elo** and is the most straightforward model here to actually run: a single GPU with **16GB VRAM**, served through vLLM Omni.

It's three pieces: a 3.4B decoder based on Ministral 3B predicts semantic tokens from text plus a voice prompt, a 390M flow-matching transformer handles acoustics, and a 300M in-house neural codec produces the waveform at 24kHz. Roughly 4B parameters total.

Its party trick is cloning from **about three seconds of reference audio with no transcript required**, and it infers prosody and emotion from the voice prompt rather than needing tags. Mistral reports a **68.4% human preference win rate against ElevenLabs Flash v2.5** on blind zero-shot cloning. Performance is well documented for once: on one H200, RTF 0.103 at one concurrent request (about 9.7x real-time), degrading to 0.302 at 32 concurrent, with 70ms to 552ms latency across that range.

Two caveats. It's **CC BY-NC 4.0**, so non-commercial. And Mistral deliberately publishes no WER or speaker-similarity numbers, saying they prioritized human naturalness evaluation - which is defensible, but it means you can't line it up against Fish's WER figures.

#### Key Specs

- **Architecture:** 3.4B decoder (Ministral 3B based) + 390M flow-matching acoustic model + 300M codec
- **License:** CC BY-NC 4.0 (non-commercial)
- **Released:** March 23, 2026
- **Languages:** 9 - English, French, German, Spanish, Dutch, Portuguese, Italian, Hindi, Arabic
- **Speech Arena Elo:** 1,077
- **Self-hosting:** Single GPU, 16GB+ VRAM, vLLM Omni 0.18.0+; RTF 0.103 on an H200

### 4. Kokoro 82M v1.0 - 82 million parameters, top-five quality

{{< image "best_open_source_self_hosted_text_to_speech_models/kokoro.webp" "Kokoro 82M TTS GitHub repository" >}}

{{< link href="https://github.com/hexgrad/kokoro" >}}Kokoro{{< /link >}} is the most interesting model on this list, because it has no business being here. It's **82M parameters** - about 1/60th the size of Fish Audio S2 Pro - and it scores **1,060 Elo**, level with Maya1 (3B) and ahead of Chatterbox, Zonos, and VibeVoice 7B. It's a StyleTTS 2 architecture with an ISTFTNet vocoder, decoder-only, no diffusion, trained on "a few hundred hours" of permissively licensed and synthetic audio.

It runs in **under 2GB of VRAM**, or CPU-only in about 4GB of RAM via the ONNX path, and it's Apache 2.0. It's also the most listened-to model on this list by a wide margin, so its standing is the best established of the bunch.

The tradeoff is stark and worth being clear about: **no voice cloning and no emotion control.** You get 54 preset voices across 8 languages, and that's the whole menu. If your use case is "read this text in a decent voice, cheaply, at scale" - audiobooks, notifications, accessibility, an app's built-in narrator - Kokoro is the correct answer and nothing else is close on cost. If you need a specific person's voice or a specific emotional read, Kokoro cannot do it at any price.

Two practical notes. The commonly quoted speed figures (~0.03 RTF on an A100, ~2.4x real-time on CPU via ONNX) come from third-party blog benchmarks, not from hexgrad - there are no official numbers. And the reference repo is frozen: last commit was around 11 months ago, PyPI stuck at 0.9.4 since April 2025. The ecosystem moved to wrappers like {{< link href="https://github.com/thewh1teagle/kokoro-onnx" >}}kokoro-onnx{{< /link >}} and {{< link href="https://github.com/remsky/Kokoro-FastAPI" >}}Kokoro-FastAPI{{< /link >}}, both of which are actively maintained. The model works; the original repo just stopped needing changes.

**One warning:** Kokoro has no official website. The model card explicitly disclaims any site with "kokoro" in the root domain - kokorottsai.com, kokorotts.net and friends are not affiliated with the project. GitHub and Hugging Face are the only canonical homes.

#### Key Specs

- **Architecture:** StyleTTS 2 + ISTFTNet vocoder, decoder-only, 82M params
- **License:** Apache 2.0
- **Released:** January 27, 2025
- **Languages:** 8 languages, 54 preset voices
- **Speech Arena Elo:** 1,060
- **Self-hosting:** Under 2GB VRAM, or CPU-only via ONNX; Apple Silicon MPS supported
- **Limits:** No voice cloning, no emotion control

We have a full walkthrough of running this one on free hardware: {{< link href="/blog/self_hosting_text_to_speech_ai_on_google_colab/" >}}Self-Hosting Text-to-Speech AI for Free on Google Colab{{< /link >}}.

### 5. Maya1 - describe the voice you want in words

{{< image "best_open_source_self_hosted_text_to_speech_models/maya1.webp" "Maya Research homepage" >}}

{{< link href="https://www.mayaresearch.ai/" >}}Maya1{{< /link >}} (November 2025, Apache 2.0) scores **1,053 Elo** and takes a genuinely different approach to voice control. Instead of cloning from a reference clip, you *describe* the voice you want:

`<description="40-year-old male, warm, low pitch, conversational">`

That's promptable voice design, and it sidesteps the whole consent problem that reference-audio cloning creates - you're not copying anyone, you're specifying a synthetic speaker. It's a 3B Llama-style decoder feeding a SNAC neural codec at roughly 0.98 kbps, 24kHz mono, with 20+ inline emotion tags (laugh, cry, whisper, gasp, sigh) and real-time streaming at a claimed sub-100ms latency on vLLM.

It's **English-only**, which is the main limitation; Maya Research lists multilingual support as future work. It wants 16GB+ VRAM on a single GPU (A100, H100, or a 4090 all work), and community GGUF quants exist if you want to go smaller.

Maya Research claims #2 among open-weight voice models on Artificial Analysis. As of July 2026 it sits 5th - the claim dates from its November 2025 launch, and the board has moved since.

Note that mayaresearch.ai is the only official page. Several high-ranking search results (maya1.org and similar) are unaffiliated SEO sites; one of them says so in its own footer.

#### Key Specs

- **Architecture:** 3B Llama-style decoder + SNAC neural codec, 24kHz
- **License:** Apache 2.0
- **Released:** November 2025
- **Languages:** English only (multi-accent)
- **Speech Arena Elo:** 1,053
- **Self-hosting:** Single GPU, 16GB+ VRAM, vLLM; sub-100ms streaming latency claimed

### 6. NVIDIA Magpie-Multilingual 357M - the commercial-safe multilingual pick

{{< image "best_open_source_self_hosted_text_to_speech_models/magpie.webp" "NVIDIA Magpie TTS Multilingual model card" >}}

{{< link href="https://build.nvidia.com/nvidia/magpie-tts-multilingual/modelcard" >}}Magpie-TTS Multilingual{{< /link >}} is 357M parameters, covers **9 languages**, and ships under the NVIDIA Open Model License, which permits commercial use. That combination - small, multilingual, commercially usable - is rarer than it should be.

It's a transformer encoder-decoder (6 causal encoder layers, 12 causal decoder layers) predicting 8 codebooks of NanoCodec tokens at 22kHz, trained on 38k hours. NVIDIA uses CTC-based attention priors to enforce monotonic alignment, which is the standard fix for the skipping and repeating that autoregressive TTS is prone to, plus classifier-free guidance and GRPO for alignment.

The March 2026 checkpoint (`v2602`, which added Hindi and Japanese) scores **1,048**, up 43 Elo from the January checkpoint's 1,005 - a useful reminder that these models get meaningfully better between point releases. On the January checkpoint NVIDIA reports 0.34% CER and 0.835 speaker similarity on LibriTTS test-clean, degrading on the non-English CML sets (French: 2.70% CER, 0.703 SV-SSIM).

Two deliberate omissions you should know about before you pick this. **Zero-shot voice cloning was removed** - NVIDIA's model card says plainly "we have removed zero-shot capabilities," so you get 5 fixed speakers and nothing else. And **emotional speech is gated to the enterprise NIM**, not the open weights. This is the most locked-down model in this guide in terms of what it will let you do, which is presumably the point: it's aimed at voice agents and brand ambassadors, where you want one consistent voice and no ability to impersonate anyone.

Also note the 20-second cap per inference in standard mode; long-form mode uses a sliding window and is English-only.

#### Key Specs

- **Architecture:** Transformer encoder-decoder, 8-codebook NanoCodec at 22kHz, 357M params
- **License:** NVIDIA Open Model License (commercial use permitted)
- **Released:** January 2026 (v2512), March 3, 2026 (v2602, adds Hindi + Japanese)
- **Languages:** 9 - English, Spanish, German, French, Italian, Vietnamese, Mandarin, Hindi, Japanese
- **Speech Arena Elo:** 1,048 (Mar 2026 checkpoint) / 1,005 (Jan 2026)
- **Self-hosting:** NeMo Framework 25.11; A10/A30/A100/H100; no published VRAM figure
- **Limits:** No voice cloning, no emotion control in the open weights, 20s per inference

### 7. Chatterbox (Resemble AI) - MIT, 23 languages, emotion exaggeration

{{< image "best_open_source_self_hosted_text_to_speech_models/chatterbox.webp" "Chatterbox open source TTS by Resemble AI" >}}

{{< link href="https://www.resemble.ai/learn/models/chatterbox" >}}Chatterbox{{< /link >}} scores **1,011 Elo** and is the best-rounded permissively licensed option: MIT, 0.5B parameters, cloning from ~5 seconds of audio, and an emotion **exaggeration** control that Resemble claims was an open-source first.

The family has grown well past the original May 2025 English release. Chatterbox Multilingual (September 2025) covers 23 languages; v3 (June 2026) pushes to ~25 including dialect variants, with 6 tuned single-language packs. **Chatterbox Turbo** is the one to look at for real-time work: 350M parameters, 75ms latency, ~6x real-time on GPU via a single-step mel decoder instead of the usual 10 steps, plus paralinguistic tags (`[laugh]`, `[sigh]`, `[gasp]`, `[whisper]`).

Resemble publishes blind-eval win rates and, refreshingly, publishes the losses too: Turbo beats ElevenLabs Turbo v2.5 65.3% and VibeVoice 7B 59.1%, but ties Cartesia Sonic 3 at 49.8%. That's more credibility than most vendor benchmark tables earn.

One thing to be aware of: every Chatterbox output carries **PerTh neural watermarking**, embedded at generation. That's a feature if you care about provenance and a constraint if you don't want an inaudible signal in your audio. Resemble publishes no VRAM requirement anywhere official.

#### Key Specs

- **Architecture:** 0.5B Llama-style backbone, trained on ~500k hours
- **License:** MIT
- **Released:** May 2025 (English), Sept 2025 (multilingual), June 2026 (v3)
- **Languages:** 23 (multilingual), ~25 in v3
- **Speech Arena Elo:** 1,011
- **Self-hosting:** `pip install chatterbox-tts`; ~200ms latency, Turbo at 75ms; no published VRAM floor

### 8. Zonos-v0.1 (Zyphra) - Apache 2.0, 44kHz, runs on 6GB

{{< image "best_open_source_self_hosted_text_to_speech_models/zonos.webp" "Zonos-v0.1 beta release by Zyphra" >}}

{{< link href="https://www.zyphra.com/our-work/beta-release-of-zonos-v0-1" >}}Zonos-v0.1{{< /link >}} (February 10, 2025) sits at exactly **1,000 Elo** and remains a solid Apache 2.0 workhorse. Zyphra released two 1.6B variants: a pure transformer and an SSM hybrid built on Mamba2, which they billed as the first open-source SSM TTS model. Trained on ~200k hours, and it outputs natively at **44kHz** - the highest sample rate in this guide, where most models top out at 24kHz.

It clones from a 10-30 second sample and gives you fine-grained conditioning knobs: speaking rate, pitch, max frequency, audio quality, and emotions (happiness, anger, sadness, fear). It runs on **6GB+ VRAM**, with a Gradio UI and Docker support, and hits roughly 2x real-time on a 4090. The hybrid variant needs an RTX 3000-series or newer; the transformer variant is less picky.

Two honest caveats. Zyphra publishes **no quantitative benchmarks at all** - the announcement offers side-by-side samples against ElevenLabs and Cartesia and explicitly concedes that audio quality is hard to quantify. And it's still labelled v0.1 beta eighteen months on. Zyphra also cautions that languages beyond English, Japanese, Chinese, French, and German are in the training data but not robust.

#### Key Specs

- **Architecture:** 1.6B transformer or 1.6B Mamba2 SSM hybrid, 44kHz output
- **License:** Apache 2.0
- **Released:** February 10, 2025
- **Languages:** English, Japanese, Chinese, French, German (others unreliable)
- **Speech Arena Elo:** 1,000
- **Self-hosting:** 6GB+ VRAM; hybrid needs RTX 3000-series or newer; ~2x real-time on a 4090

### VibeVoice 7B - the one Microsoft took back

{{< image "best_open_source_self_hosted_text_to_speech_models/vibevoice.webp" "Microsoft VibeVoice project page showing the removal notice" >}}

{{< link href="https://microsoft.github.io/VibeVoice/" >}}VibeVoice{{< /link >}} is worth a section less for its **958 Elo** than for what happened to it, which is the most instructive story in open-weight TTS.

Microsoft released VibeVoice-7B-Preview on August 26, 2025. It was a genuinely ambitious model: a next-token diffusion framework pairing a Qwen2.5-7B LLM with continuous acoustic and semantic tokenizers running at an ultra-low **7.5Hz** frame rate, capable of **90 minutes of multi-speaker audio with up to 4 distinct speakers** - built for podcast generation, and well past the 1-2 speaker limit of everything else at the time. Microsoft's own preference evaluation put the 7B at **3.75**, above Gemini 2.5 Pro Preview TTS (3.65) and Eleven v3 Alpha (3.375).

On September 5, 2025 - ten days later - Microsoft pulled it. The notice on the project page still reads: *"After release, we discovered instances where the tool was used in ways inconsistent with the stated intent. Since responsible use of AI is one of Microsoft's guiding principles, we have disabled the repo until we are confident that out-of-scope use is no longer possible."* The weights came down from Hugging Face and ModelScope; the TTS code was stripped from the repo.

It didn't work. The model was **MIT licensed**, which permits redistribution, so the community mirrors are entirely lawful and remain up - the code fork has 8,000+ stars. Microsoft withdrew a model it had already given away under a license that says you can't take it back. The Elo score in the table above comes from weights Microsoft no longer distributes.

Two traps if you go looking. Microsoft's current lineup is VibeVoice-1.5B (TTS), VibeVoice-Realtime-0.5B (TTS), and VibeVoice-ASR (9B) - and **that 9B "7B-class" model is speech recognition, not TTS.** Searching "VibeVoice 7B" today can easily land you on a completely different kind of model. Second, the "7B" in the original name refers to the LLM backbone; the full model is ~9B parameters. It was also English and Chinese only, and research-use only by Microsoft's own guidance.

## Honorable mentions (and when to skip them)

The bottom of the leaderboard is a graveyard, and it's more useful as history than as a shortlist. All four of these have dormant upstream repos - none is archived, so you have to check commit dates rather than trusting the archive flag.

- **{{< link href="https://github.com/myshell-ai/OpenVoice" >}}OpenVoice v2{{< /link >}}** (MyShell, April 2024, MIT, 959 Elo) - the cleanest license of the four and still the only model with a genuinely decoupled tone-color converter, so you can clone from reference audio in any language and speak in six. But quality is capped by its MeloTTS base speaker, and both layers are dormant: OpenVoice's last real commit was April 2025, MeloTTS's was December 2024.
- **{{< link href="https://github.com/idiap/coqui-ai-TTS" >}}XTTS v2{{< /link >}}** (Coqui, November 2023, 908 Elo) - still the widest language coverage here at 17, with cloning from ~3 seconds of reference audio. Its licensing is a mess worth reading about in the next section. Use the Idiap fork if you use it at all.
- **{{< link href="https://github.com/yl4579/StyleTTS2" >}}StyleTTS 2{{< /link >}}** (June 2023, 882 Elo) - matters most as an ancestor: **Kokoro is built directly on it**, and Kokoro's model card credits it. Its own weights are English-only and the license is muddier than the "MIT" label suggests (there are extra disclosure conditions in the README, and an open issue flagging exactly that). The lineage lives on in `Stylish-TTS/stylish-tts`.
- **{{< link href="https://github.com/metavoiceio/metavoice-src" >}}MetaVoice v1{{< /link >}}** (February 2024, Apache 2.0, 836 Elo) - honestly, skip it. Its only remaining claim is Apache 2.0 at 1.2B, and Kokoro gives you Apache 2.0 at 82M with better output and 1/6th the VRAM. Last commit July 2024; the company pivoted to a closed product and no longer mentions the model. Its own README admits int8 quantisation runs *slower* than bf16 "for undebugged reasons," which tells you where it was left.

## "Open weights" and "open source" are not the same thing here

Before you commit to one of these, read its license rather than its landing page. TTS is worse about this than the LLM world, and the marketing copy will actively mislead you.

Fish Audio's own product page for S2 Pro reads **"The most expressive voice AI ever made, now open-source."** The weights ship under the Fish Audio Research License, which is non-commercial. Mistral's Voxtral TTS is **CC BY-NC 4.0**. Both are genuinely downloadable, inspectable, and runnable on your own hardware. Neither is open source in the OSI sense, and neither can go into a commercial product without a separate agreement.

The cautionary tale is **XTTS v2**. Its code is MPL-2.0, but its weights are under the Coqui Public Model License, which permits "only non-commercial use of a machine learning model and its outputs." Coqui the company {{< link href="https://x.com/_josh_meyer_/status/1742522906041635166" >}}shut down in January 2024{{< /link >}}. A request to relicense the weights permissively before the shutdown was never answered. So the weights are now permanently non-commercial with **nobody left who can sell you a commercial license** - the canonical license URL at coqui.ai/cpml is itself a dead 404 now. The code lives on: the {{< link href="https://github.com/idiap/coqui-ai-TTS" >}}Idiap Research Institute maintains an active fork{{< /link >}} (pip package `coqui-tts`), but a fork can't relicense weights it didn't train. Note also that the dead original repo has ~45k stars against the live fork's ~2k, so search results and star counts will point you at the corpse.

If you need to ship commercially, the safe picks are **Step Audio EditX** (Apache 2.0), **Kokoro** (Apache 2.0), **Maya1** (Apache 2.0), **Chatterbox** (MIT), **Zonos** (Apache 2.0), and **NVIDIA Magpie** (NVIDIA Open Model License, which does permit commercial use). That happens to include the #1 model, so this isn't a painful constraint - but you have to check.

## How to self-host these models

Here's the thing nobody says plainly: **there is no Ollama for TTS.** Ollama itself has no text-to-speech support at all. What has standardized is the API shape - almost everything now speaks OpenAI's `POST /v1/audio/speech` dialect - but not the runtime. Every server wraps a different narrow subset of models, and none gives you Ollama's one-binary, pull-any-model, no-Python experience.

A big part of why: no single library even *contains* the models people actually deploy. Hugging Face Transformers v5.13 has text-to-waveform support for Bark, CSM, Higgs Audio v2, Qwen omni models, SeamlessM4T, VITS and friends - but **no Kokoro, no XTTS, no Chatterbox, no F5-TTS**. The popular models each live in their own repo with their own inference path.

### The servers worth using

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tool</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Best for</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Models covered</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/mudler/LocalAI">LocalAI</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Broadest coverage, one server for TTS + LLM + more</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Coqui, Piper, Qwen3-TTS, VibeVoice, Chatterbox, fish-speech</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/vllm-project/vllm-omni">vLLM-Omni</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Production GPU serving, streaming, batching</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3-TTS, CosyVoice3, fishaudio/s2-pro, Voxtral-4B-TTS, VoxCPM2</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/remsky/Kokoro-FastAPI">Kokoro-FastAPI</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Fastest path to a working endpoint</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Kokoro-82M only</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/thewh1teagle/kokoro-onnx">kokoro-onnx</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">CPU and edge, no PyTorch dependency</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Kokoro-82M only</td>
</tr>
</tbody>
</table>

**On vLLM specifically, the detail matters:** core vLLM does *not* do TTS. Its supported-models list treats audio as input only (Whisper, Qwen2-Audio, Voxtral's ASR side). Text-to-speech lives in a separate official subproject, **{{< link href="https://github.com/vllm-project/vllm-omni" >}}vllm-omni{{< /link >}}**, which is where you'll find `/v1/audio/speech`, `/v1/audio/voices`, batch endpoints and a WebSocket streaming endpoint. If a tutorial tells you to serve Fish S2 Pro or Voxtral TTS from plain vLLM, it's out of date.

A few more landmines worth knowing:

- **openedai-speech is archived and dead.** Its README says so: "This software is mostly obsolete and will no longer be updated." One of the four successors it recommends is itself long dead. Don't start here.
- **Piper moved orgs.** `rhasspy/piper` is archived; the live project is {{< link href="https://github.com/OHF-Voice/piper1-gpl" >}}OHF-Voice/piper1-gpl{{< /link >}}. Several server projects still link the old repo in their docs.
- **llama.cpp has a `llama-tts` binary** and still builds it by default, but it's pinned to OuteTTS-0.2-500M plus WavTokenizer - a 2024-era model, two generations behind. It compiles; it is not a general TTS runner.
- **{{< link href="https://github.com/speaches-ai/speaches" >}}Speaches{{< /link >}}** advertises itself as "Ollama, but for TTS/STT" and is the closest thing in spirit, but it only runs Kokoro and Piper, and its `master` branch has been quiet since April 2026.

For the wider self-hosting picture, our guides on {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}self-hosting any LLM{{< /link >}} and {{< link href="/blog/best_hardware_for_self_hosting_local_llms/" >}}picking hardware for local models{{< /link >}} cover the GPU, quantization, and driver groundwork that applies here too.

### Getting to your TTS server from outside your network

Once your model is serving on `localhost:8880` or wherever, you'll usually want to reach it from somewhere else - a phone, a staging app, a teammate, or an AI agent that needs a voice. A Pinggy tunnel is a one-liner for that:

```bash
ssh -p 443 -R0:localhost:8880 free.pinggy.io
```

That prints a public HTTPS URL like `https://abc123.a.pinggy.link` pointing at your local endpoint, so an OpenAI-compatible client can hit `/v1/audio/speech` on it from anywhere without you opening a port or configuring a reverse proxy. We've written this up in more depth for {{< link href="/blog/self_host_voicebox_with_pinggy/" >}}Voicebox, a local-first AI voice studio{{< /link >}}, and for {{< link href="/blog/self_hosting_text_to_speech_ai_on_google_colab/" >}}Kokoro running on a free Colab GPU{{< /link >}}.

## Quick decision guide

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Your Need</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Recommended Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Why</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Best quality, commercially usable</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Step Audio EditX</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Top of the open-weight board at 1,118 Elo, and Apache 2.0</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">High volume on a budget</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Kokoro 82M</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Top-five quality from 82M params; runs on a CPU</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Voice cloning from a short clip</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Voxtral TTS or Chatterbox</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3s and 5s references respectively; Chatterbox if you need a commercial license</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Fine-grained emotion direction</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Fish Audio S2 Pro or Step Audio EditX</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Inline free-form tags vs iterative token-space editing</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Multilingual + commercial</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Magpie-Multilingual or Chatterbox</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9 and 23 languages, both licensed for commercial use</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">A voice with no reference audio</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Maya1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Describe the speaker in text; no consent problem to manage</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Voice agents, one consistent voice</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Magpie-Multilingual 357M</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Fixed speakers by design, small, commercial-safe</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Highest audio fidelity</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Zonos-v0.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Native 44kHz output where most models stop at 24kHz</td>
</tr>
</tbody>
</table>

## Conclusion

Synthetic speech stopped sounding synthetic somewhere in the last two years, and the open-weight models made that jump alongside the closed ones. **Step Audio EditX** and **Fish Audio S2 Pro** trade the top spot, **Voxtral TTS** clones a voice off three seconds of audio, **Chatterbox** does 23 languages under MIT, and **Kokoro** does a startling amount of it in 82 million parameters on a CPU. None of that existed in downloadable form two years ago.

Alibaba's Qwen-Audio-3.0-TTS-Plus is still ahead of all of them, and if voice quality is the product you sell, pay for it. But that's a narrower slice of use cases than it sounds. Most TTS work is "read this text in a decent voice, a lot of times" - narration, notifications, accessibility, an agent that talks back - and open weights have been comfortably good enough for that for a while now, at a price that rounds to zero.

Two things to get right when you pick one. **Read the license, not the landing page**, because "open source" in TTS marketing routinely means open weights and non-commercial terms. And **budget your time for the serving layer, not the model** - there's no Ollama here yet, so standing up the endpoint will take longer than choosing what to run on it. Neither is a reason to wait.
