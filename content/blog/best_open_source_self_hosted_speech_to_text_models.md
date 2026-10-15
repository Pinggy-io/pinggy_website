---
title: "Best Open Source Speech-to-Text Models to Self-Host in 2026"
description: "The best open-weight speech-to-text models you can self-host in October 2026, ranked on the Hugging Face Open ASR Leaderboard: Qwen3-ASR, Cohere Transcribe, Granite Speech, Parakeet, Voxtral, Whisper and more, with licenses, speed and serving."
date: 2026-10-15T10:00:00+05:30
lastmod: 2026-10-15T10:00:00+05:30
draft: false
tags: ["speech to text", "self-hosted AI", "local AI", "open source AI", "AI Models"]
og_image: "images/best_open_source_self_hosted_speech_to_text_models/best_open_source_self_hosted_speech_to_text_models_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAZ3JhcGgiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgICAgICJoZWFkbGluZSI6ICJCZXN0IE9wZW4gU291cmNlIFNwZWVjaC10by1UZXh0IE1vZGVscyB0byBTZWxmLUhvc3QgaW4gMjAyNiIsCiAgICAgICJkZXNjcmlwdGlvbiI6ICJUaGUgYmVzdCBvcGVuLXdlaWdodCBzcGVlY2gtdG8tdGV4dCBtb2RlbHMgeW91IGNhbiBzZWxmLWhvc3QgaW4gT2N0b2JlciAyMDI2LCByYW5rZWQgb24gdGhlIEh1Z2dpbmcgRmFjZSBPcGVuIEFTUiBMZWFkZXJib2FyZDogUXdlbjMtQVNSLCBDb2hlcmUgVHJhbnNjcmliZSwgR3Jhbml0ZSBTcGVlY2gsIFBhcmFrZWV0LCBWb3h0cmFsLCBXaGlzcGVyIGFuZCBtb3JlLCB3aXRoIGxpY2Vuc2VzLCBzcGVlZCBhbmQgc2VydmluZy4iLAogICAgICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Jlc3Rfb3Blbl9zb3VyY2Vfc2VsZl9ob3N0ZWRfc3BlZWNoX3RvX3RleHRfbW9kZWxzL2Jlc3Rfb3Blbl9zb3VyY2Vfc2VsZl9ob3N0ZWRfc3BlZWNoX3RvX3RleHRfbW9kZWxzX2Jhbm5lci53ZWJwIiwKICAgICAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAgICAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgICAgICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMTVUMTA6MDA6MDArMDU6MzAiLAogICAgICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMTVUMTA6MDA6MDArMDU6MzAiLAogICAgICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvYmVzdF9vcGVuX3NvdXJjZV9zZWxmX2hvc3RlZF9zcGVlY2hfdG9fdGV4dF9tb2RlbHMvIiB9LAogICAgICAiYXJ0aWNsZVNlY3Rpb24iOiAiQUkiLAogICAgICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICAgICAia2V5d29yZHMiOiAic2VsZi1ob3N0ZWQgc3BlZWNoIHRvIHRleHQsIG9wZW4gc291cmNlIHNwZWVjaCByZWNvZ25pdGlvbiwgb3BlbiBzb3VyY2UgQVNSIG1vZGVscyAyMDI2LCBXaGlzcGVyIGFsdGVybmF0aXZlcywgUXdlbjMtQVNSLCBDb2hlcmUgVHJhbnNjcmliZSwgR3Jhbml0ZSBTcGVlY2gsIFBhcmFrZWV0IFREVCwgVm94dHJhbCwgV2hpc3BlciBsYXJnZS12My10dXJibywgVmliZVZvaWNlLUFTUiwgTmVtb3Ryb24gQVNSIHN0cmVhbWluZywgTW9vbnNoaW5lLCBXaGlzdGxlLCB3aGlzcGVyLmNwcCwgZmFzdGVyLXdoaXNwZXIsIHZMTE0gdHJhbnNjcmlwdGlvbiwgT3BlbiBBU1IgTGVhZGVyYm9hcmQiLAogICAgICAiYWJvdXQiOiBbCiAgICAgICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJBdXRvbWF0aWMgc3BlZWNoIHJlY29nbml0aW9uIiwgImRlc2NyaXB0aW9uIjogIkNvbnZlcnRpbmcgc3Bva2VuIGF1ZGlvIGludG8gdGV4dCB3aXRoIGEgbWFjaGluZSBsZWFybmluZyBtb2RlbC4iIH0sCiAgICAgICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJXb3JkIGVycm9yIHJhdGUiLCAiZGVzY3JpcHRpb24iOiAiVGhlIHNoYXJlIG9mIHdvcmRzIGEgc3BlZWNoIHJlY29nbml0aW9uIG1vZGVsIGdldHMgd3JvbmcsIHRoZSBtYWluIGFjY3VyYWN5IG1ldHJpYyBvbiB0aGUgT3BlbiBBU1IgTGVhZGVyYm9hcmQuIiB9LAogICAgICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUlRGeCIsICJkZXNjcmlwdGlvbiI6ICJTZWNvbmRzIG9mIGF1ZGlvIHRyYW5zY3JpYmVkIHBlciBzZWNvbmQgb2YgY29tcHV0ZSwgdGhlIE9wZW4gQVNSIExlYWRlcmJvYXJkJ3MgdGhyb3VnaHB1dCBtZXRyaWMuIiB9LAogICAgICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiT3Blbi13ZWlnaHQgbW9kZWxzIiwgImRlc2NyaXB0aW9uIjogIk1vZGVscyB3aG9zZSB3ZWlnaHRzIGNhbiBiZSBkb3dubG9hZGVkIGFuZCBydW4gb24geW91ciBvd24gaGFyZHdhcmUsIHVuZGVyIGxpY2Vuc2VzIHN1Y2ggYXMgQXBhY2hlIDIuMCwgTUlULCBDQy1CWS00LjAgYW5kIE9wZW5NRFctMS4xLiIgfSwKICAgICAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk9wZW5BSS1jb21wYXRpYmxlIHRyYW5zY3JpcHRpb24gQVBJIiwgImRlc2NyaXB0aW9uIjogIlRoZSBQT1NUIC92MS9hdWRpby90cmFuc2NyaXB0aW9ucyByb3V0ZSB0aGF0IHZMTE0sIHdoaXNwZXIuY3BwIGFuZCBvdGhlciBzZXJ2ZXJzIGV4cG9zZS4iIH0KICAgICAgXQogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvIiwKICAgICAgIm5hbWUiOiAiSG93IHRvIHNlbGYtaG9zdCBhIHNwZWVjaC10by10ZXh0IGVuZHBvaW50IHdpdGggd2hpc3Blci5jcHAgYW5kIHJlYWNoIGl0IGZyb20gYW55d2hlcmUiLAogICAgICAiZGVzY3JpcHRpb24iOiAiUnVuIFdoaXNwZXIgbGFyZ2UtdjMtdHVyYm8gd2l0aCB3aGlzcGVyLmNwcCdzIHdoaXNwZXItc2VydmVyIG9uIGFuIE9wZW5BSS1zdHlsZSB0cmFuc2NyaXB0aW9uIHJvdXRlLCB0aGVuIGV4cG9zZSBpdCB0aHJvdWdoIGEga2V5LXByb3RlY3RlZCBQaW5nZ3kgdHVubmVsIGFuZCBjYWxsIGl0IHdpdGggdGhlIE9wZW5BSSBTREsuIiwKICAgICAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9iZXN0X29wZW5fc291cmNlX3NlbGZfaG9zdGVkX3NwZWVjaF90b190ZXh0X21vZGVscy9iZXN0X29wZW5fc291cmNlX3NlbGZfaG9zdGVkX3NwZWVjaF90b190ZXh0X21vZGVsc19iYW5uZXIud2VicCIsCiAgICAgICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0xNVQxMDowMDowMCswNTozMCIsCiAgICAgICJ0b29sIjogWwogICAgICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIndoaXNwZXIuY3BwIDEuOS41IiB9LAogICAgICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIlBpbmdneSIgfSwKICAgICAgICB7ICJAdHlwZSI6ICJIb3dUb1Rvb2wiLCAibmFtZSI6ICJPcGVuQUkgUHl0aG9uIFNESyIgfQogICAgICBdLAogICAgICAic3RlcCI6IFsKICAgICAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJJbnN0YWxsIHdoaXNwZXIuY3BwIiwgInRleHQiOiAiUnVuIGJyZXcgaW5zdGFsbCB3aGlzcGVyLmNwcCBvbiBtYWNPUywgb3IgYnVpbGQgZnJvbSB0aGUgZ2dtbC1vcmcvd2hpc3Blci5jcHAgcmVwb3NpdG9yeSB3aXRoIENNYWtlIG9uIExpbnV4LiBJdCBpbnN0YWxscyB3aGlzcGVyLWNsaSBhbmQgd2hpc3Blci1zZXJ2ZXIuIiB9LAogICAgICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkRvd25sb2FkIHRoZSBtb2RlbCIsICJ0ZXh0IjogIkRvd25sb2FkIGdnbWwtbGFyZ2UtdjMtdHVyYm8tcTVfMC5iaW4sIGEgNTc0TUIgZmlsZSwgZnJvbSBodHRwczovL2h1Z2dpbmdmYWNlLmNvL2dnZXJnYW5vdi93aGlzcGVyLmNwcC9yZXNvbHZlL21haW4vZ2dtbC1sYXJnZS12My10dXJiby1xNV8wLmJpbi4iIH0sCiAgICAgICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU3RhcnQgdGhlIHNlcnZlciBvbiBhbiBPcGVuQUktc3R5bGUgcm91dGUiLCAidGV4dCI6ICJSdW4gd2hpc3Blci1zZXJ2ZXIgLW0gZ2dtbC1sYXJnZS12My10dXJiby1xNV8wLmJpbiAtLXBvcnQgODA4MCAtLWluZmVyZW5jZS1wYXRoIC92MS9hdWRpby90cmFuc2NyaXB0aW9ucy4gSXQgZGVjb2RlcyBXQVYgYW5kIEZMQUMgaXRzZWxmOyBhZGQgLS1jb252ZXJ0LCB3aGljaCBuZWVkcyBmZm1wZWcsIGZvciBmb3JtYXRzIHN1Y2ggYXMgTTRBLiIgfSwKICAgICAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJUZXN0IGl0IGxvY2FsbHkiLCAidGV4dCI6ICJSdW4gY3VybCBodHRwOi8vbG9jYWxob3N0OjgwODAvdjEvYXVkaW8vdHJhbnNjcmlwdGlvbnMgLUYgZmlsZT1AamZrLndhdiAtRiByZXNwb25zZV9mb3JtYXQ9anNvbiBhbmQgY2hlY2sgdGhhdCB0aGUgSlNPTiBjb250YWlucyB0aGUgdHJhbnNjcmlwdC4iIH0sCiAgICAgICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiT3BlbiBhIGtleS1wcm90ZWN0ZWQgUGluZ2d5IHR1bm5lbCIsICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCAtdCBmcmVlLnBpbmdneS5pbyBrOnN0dC1kZW1vLWtleSBhbmQgY29weSB0aGUgSFRUUFMgVVJMIGl0IHByaW50cy4gUGluZ2d5IHJlamVjdHMgcmVxdWVzdHMgdGhhdCBkbyBub3Qgc2VuZCBBdXRob3JpemF0aW9uOiBCZWFyZXIgc3R0LWRlbW8ta2V5LiIgfSwKICAgICAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDYWxsIGl0IHdpdGggdGhlIE9wZW5BSSBTREsiLCAidGV4dCI6ICJDcmVhdGUgT3BlbkFJKGJhc2VfdXJsPVwiaHR0cHM6Ly88eW91ci11cmw+LnJ1bi5waW5nZ3ktZnJlZS5saW5rL3YxXCIsIGFwaV9rZXk9XCJzdHQtZGVtby1rZXlcIikgYW5kIGNhbGwgY2xpZW50LmF1ZGlvLnRyYW5zY3JpcHRpb25zLmNyZWF0ZShtb2RlbD1cIndoaXNwZXItMVwiLCBmaWxlPWYpLiBUaGUgU0RLIHNlbmRzIHRoZSBhcGlfa2V5IGFzIHRoZSBCZWFyZXIgaGVhZGVyIFBpbmdneSBjaGVja3MuIiB9CiAgICAgIF0KICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_speech_to_text_models/best_open_source_self_hosted_speech_to_text_models_banner.webp" "Average WER on the Open ASR Leaderboard, October 2026: Qwen3-ASR-1.7B 5.40, Cohere Transcribe 5.77, Granite Speech 4.1 5.96, Parakeet TDT v2 6.02, Whisper large-v3 7.16, above the waveform of jfk.wav and the JSON transcript whisper large-v3-turbo returned for it" >}}

Speech-to-text now sits underneath a lot of everyday software: meeting notes, voice agents, subtitles, call analytics, the dictation button in your editor. The easy route is a cloud API billed per minute, which also means every recording leaves your network.

The open models have closed most of that gap. On the Hugging Face Open ASR Leaderboard's October 9, 2026 update, **Qwen3-ASR-1.7B** averages **5.40% word error rate** on the English track, ahead of OpenAI's API-only GPT-Transcribe (5.96%) and 0.70 points behind the best proprietary entry, Zoom's Scribe v2 Pro (4.70%). It's Apache 2.0. Whisper large-v3, still the default in most self-hosted stacks, sits 36th at 7.16%.

Below are the open-weight models worth running yourself, their caveats, and how to serve them. Numbers were checked against the leaderboard and model cards on October 15, 2026; the whisper.cpp and Python examples were run on an M3 Pro MacBook.

{{% tldr %}}

1. **Most accurate open model: Qwen3-ASR-1.7B.** 5.40% average WER, Apache 2.0, 30 languages plus 22 Chinese dialects, served by vLLM - <a href="https://github.com/QwenLM/Qwen3-ASR" target="_blank">GitHub</a>
2. **Best on long English recordings: Cohere Transcribe.** Top open model on the long-form track at 12.23%, Apache 2.0 but gated, and no timestamps - <a href="https://huggingface.co/CohereLabs/cohere-transcribe-03-2026" target="_blank">Hugging Face</a>
3. **Fastest: NVIDIA Parakeet TDT 0.6B and IBM Granite Speech 5.0 TurboCTC.** 6,000 to 21,000x real time on an H200, for 0.6 to 1 point more WER than the leader - <a href="https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3" target="_blank">Parakeet v3</a>
4. **Whisper is the ecosystem pick, not the accuracy pick.** 99 languages, MIT, runs everywhere; large-v3-turbo transcribed an 11-second clip in 0.85 seconds on an M3 Pro via <a href="https://github.com/ggml-org/whisper.cpp" target="_blank">whisper.cpp</a>
5. **Check licenses and benchmark fitting.** Licenses run from Apache 2.0 to OpenMDW-1.1, and a Hugging Face study caught 6 of 11 models copying a benchmark's mistakes instead of the audio.

{{% /tldr %}}

## How these models are ranked

Rankings come from the {{< link href="https://huggingface.co/spaces/hf-audio/open_asr_leaderboard" >}}Open ASR Leaderboard{{< /link >}}. It reports average word error rate (WER, the share of words a model gets wrong) and RTFx, seconds of audio processed per second of compute on an NVIDIA H200. The average now includes private held-out sets from Appen and DataoceanAI plus URGENT24, added on October 9, so older model-card numbers run lower: Cohere's card says 5.42, the board now says 5.77. Don't mix the two.

{{< link href="https://artificialanalysis.ai/speech-to-text" >}}Artificial Analysis{{< /link >}} runs a second board, weighted 50% toward agent-style conversations. Voxtral Small is the best open model there at 2.8%, and the same Whisper large-v3 weights score 4.1% on fal.ai and 10.1% on Replicate. How a model is served can matter as much as which model it is.

Then there's benchmark fitting. In an {{< link href="https://huggingface.co/blog/asr-benchmark-optimization" >}}August 2026 study{{< /link >}}, Hume AI researchers played a parliament clip where the speaker says "Thank you" but the VoxPopuli reference transcript omits it. Six of 11 models omitted it too, including Cohere Transcribe, Canary-Qwen-2.5B, Granite Speech 4.1 and Parakeet TDT v2. Qwen3-ASR, Voxtral Mini, Whisper large-v3 and Moonshine wrote what was said. A low public-benchmark score partly measures how well a model learned that benchmark.

{{< image "best_open_source_self_hosted_speech_to_text_models/open_asr_wer_vs_rtfx.webp" "Scatter plot of average WER against RTFx for 13 open-weight speech-to-text models, with Qwen3-ASR-1.7B, Cohere Transcribe, Parakeet TDT v2 and v3, and Granite TurboCTC on the lowest-WER line and Whisper well above it" >}}

*Grey dots are the other open models in the table below. Data: {{< link href="https://huggingface.co/spaces/hf-audio/open_asr_leaderboard" >}}Open ASR Leaderboard{{< /link >}}, October 9, 2026.*

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Model</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">License</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Languages</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Avg WER</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">RTFx</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Zoom Scribe v2 Pro <em>(closed, reference)</em></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Proprietary</td>
  <td style="border:1px solid #ddd;padding:0.5em;">-</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4.70</td>
  <td style="border:1px solid #ddd;padding:0.5em;">-</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Qwen3-ASR-1.7B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">30 + 22 dialects</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>5.40</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">819</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Cohere Transcribe</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0 (gated)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">14</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5.77</td>
  <td style="border:1px solid #ddd;padding:0.5em;">902</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Canary-Qwen-2.5B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">CC-BY-4.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">English</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5.94</td>
  <td style="border:1px solid #ddd;padding:0.5em;">862</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Granite Speech 4.1 2B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5.96</td>
  <td style="border:1px solid #ddd;padding:0.5em;">545</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Parakeet TDT 0.6B v2</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">CC-BY-4.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">English</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.02</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5,988</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Parakeet TDT 0.6B v3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">CC-BY-4.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">25 European</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.18</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6,132</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Granite Speech 5.0 470M TurboCTC</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">English</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.38</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>21,174</strong></td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Voxtral Small 24B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8</td>
  <td style="border:1px solid #ddd;padding:0.5em;">6.38</td>
  <td style="border:1px solid #ddd;padding:0.5em;">101</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Whisper large-v3</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.5em;">99</td>
  <td style="border:1px solid #ddd;padding:0.5em;">7.16</td>
  <td style="border:1px solid #ddd;padding:0.5em;">470</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Whisper large-v3-turbo</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.5em;">99</td>
  <td style="border:1px solid #ddd;padding:0.5em;">7.64</td>
  <td style="border:1px solid #ddd;padding:0.5em;">794</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>VibeVoice-ASR</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.5em;">50+</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8.16</td>
  <td style="border:1px solid #ddd;padding:0.5em;">216</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Voxtral Mini 4B Realtime</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Apache 2.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">13</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8.44</td>
  <td style="border:1px solid #ddd;padding:0.5em;">103</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Nemotron 3.5 ASR Streaming 0.6B</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">OpenMDW-1.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">40 locales</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9.75</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,343</td>
</tr>
</tbody>
</table>

## Qwen3-ASR-1.7B: the most accurate open model

{{< link href="https://github.com/QwenLM/Qwen3-ASR" >}}Qwen3-ASR{{< /link >}} came out of Alibaba's Qwen team on January 29, 2026, in 1.7B and 0.6B sizes built on Qwen3-Omni. One model does language identification and transcription for 30 languages and 22 Chinese dialects, plus singing. The 1.7B leads the English board at 5.40% (RTFx 819) and is the second-best open model on the multilingual track at 6.56%, behind Voxtral Small. The 0.6B scores 6.24%.

Both run on vLLM, which gives you the OpenAI-style `/v1/audio/transcriptions` route; streaming works only through the vLLM backend. Timestamps need a separate model, Qwen3-ForcedAligner-0.6B, which covers 11 languages. Qwen publishes no VRAM figure. Weights and code are Apache 2.0.

## Cohere Transcribe: built for long English recordings

{{< link href="https://huggingface.co/CohereLabs/cohere-transcribe-03-2026" >}}Cohere Transcribe{{< /link >}} (March 2026) is a 2B Conformer encoder with a small Transformer decoder, trained from scratch on 14 languages. It's second among open models on the short-form board (5.77%) and first on the long-form track: 12.23% across Earnings21, Earnings22 and CORAAL, beaten there only by proprietary APIs.

The card lists what's missing: no timestamps, no diarization, no automatic language detection, and it is "eager to transcribe, even non-speech sounds," so put a voice activity detector in front of it. The license is Apache 2.0, but the download is gated behind a contact-details form.

## Granite Speech 4.1 and 5.0: IBM's accuracy and speed pair

{{< link href="https://huggingface.co/ibm-granite/granite-speech-4.1-2b" >}}Granite Speech 4.1 2B{{< /link >}} (April 29, 2026) is a speech-language model for English, French, German, Spanish, Portuguese and Japanese, with speech translation built in. It scores 5.96% at RTFx 545, and a `-plus` variant adds speaker labels and word timestamps.

{{< link href="https://huggingface.co/ibm-granite/granite-speech-5.0-470m-turboctc" >}}Granite Speech 5.0 470M TurboCTC{{< /link >}} (August 2026) goes the other way: an English-only CTC model with non-autoregressive decoding, aimed at edge devices. Its RTFx of 21,174 is the highest on the whole board, at 6.38% WER. Both are Apache 2.0; the 470M's `-nc` sibling is CC-BY-NC-SA.

## Parakeet TDT 0.6B v2 and v3: throughput on NVIDIA hardware

{{< link href="https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3" >}}Parakeet TDT{{< /link >}} pairs a FastConformer encoder with a Token-and-Duration Transducer decoder, which predicts how many audio frames each token covers and jumps ahead instead of stepping through every frame. That's where the speed comes from. v2 (English, May 2025) scores 6.02% at RTFx 5,988, and v3 (August 2025) covers 25 European languages with automatic language detection at 6.18%. Both take up to 24 minutes per pass, with word and segment timestamps.

They're CC-BY-4.0, so commercial use is fine with attribution. The catch is serving: vLLM doesn't support them. You run them through NVIDIA NeMo, sherpa-onnx, {{< link href="https://github.com/senstella/parakeet-mlx" >}}parakeet-mlx{{< /link >}} on Apple Silicon, or the `parakeet-cli` binary that now ships with whisper.cpp.

## Voxtral and Omnilingual ASR: the multilingual picks

Mistral's {{< link href="https://huggingface.co/mistralai/Voxtral-Small-24B-2507" >}}Voxtral Small{{< /link >}} (July 2025) is the best open model on the multilingual track (6.39% across German, French, Italian, Spanish, Portuguese, Hindi and Dutch) and on Artificial Analysis's board. It's a 24B audio LLM built on Mistral Small 3, so it needs about 55GB of GPU memory in bf16 and runs at RTFx 101. Voxtral Mini 3B needs about 9.5GB and scores 8.06% multilingual. Both are Apache 2.0. Mistral's newer Voxtral Mini Transcribe V2 is API-only.

For languages nobody else covers, Meta's {{< link href="https://github.com/facebookresearch/omnilingual-asr" >}}Omnilingual ASR{{< /link >}} (November 2025, Apache 2.0) handles more than 1,600, from 300M to 7B parameters. The 7B LLM variant scores 7.00% on the multilingual track; standard variants cap clips at 40 seconds.

## Whisper large-v3 and turbo: still the default for a reason

OpenAI hasn't released an open-weight speech model since {{< link href="https://huggingface.co/openai/whisper-large-v3-turbo" >}}large-v3-turbo{{< /link >}} in October 2024; GPT-Transcribe, launched in July 2026, is API-only. Turbo still pulled 6.3 million downloads last month, more than any other model in this guide.

The reason is reach. Whisper covers 99 languages, it's MIT licensed, and every runtime supports it: whisper.cpp on CPUs and Apple GPUs, faster-whisper on CUDA, WhisperX for diarization. Turbo cuts the decoder from 32 layers to 4 and needs about 6GB of VRAM in PyTorch; its q5_0 GGML build is a 574MB file. It wasn't trained for translation, so use large-v3 for that.

## VibeVoice-ASR: hour-long meetings with speakers attached

Microsoft's {{< link href="https://huggingface.co/microsoft/VibeVoice-ASR" >}}VibeVoice-ASR{{< /link >}} (January 2026, MIT) takes up to 60 minutes of audio in a single pass and returns who spoke, when, and what, as one structured transcript. Most pipelines assemble that from three models: ASR, a diarizer like pyannote, and a forced aligner. It accepts hotwords for names and jargon, and covers 50+ languages.

The tradeoff is accuracy and size: 8.7B parameters and 8.16% on the English board, almost three points behind Qwen3-ASR. Use it when speaker labels are the product, as in meeting notes.

## Real-time streaming: Nemotron 3.5 ASR and Voxtral Realtime

Batch models wait for the whole clip; voice agents can't. NVIDIA's {{< link href="https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b" >}}Nemotron 3.5 ASR Streaming{{< /link >}} (June 2026) is a 600M cache-aware FastConformer-RNNT: it caches encoder state between chunks, so each new 80ms to 1.12s chunk doesn't recompute the past. It covers 40 language-locales, and NVIDIA reports 240 concurrent streams on one H100 at 80ms chunks, against 14 for Parakeet RNNT 1.1B. It's licensed OpenMDW-1.1.

{{< link href="https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602" >}}Voxtral Mini 4B Realtime{{< /link >}} (February 2026, Apache 2.0, 13 languages) streams over vLLM's `/v1/realtime` WebSocket with a delay you set between 240ms and 2.4s. At the recommended 480ms it scores 8.72% on FLEURS, against 5.90% for Mistral's offline model. That gap, like Nemotron's 9.75% on the English board, is the price of not waiting for the sentence to end.

## On-device: Moonshine and Whistle

For phones, wearables and Raspberry Pis, {{< link href="https://huggingface.co/moonshine-ai/moonshine-streaming-medium" >}}Moonshine{{< /link >}}'s English streaming models (MIT, 34M to 245M parameters) run on a CPU and transcribe as you speak. Some older non-English Moonshine checkpoints use a non-commercial license, so check the one you download.

The newest entry is Cactus Compute's {{< link href="https://cactuscompute.com/blog/whistle" >}}Whistle{{< /link >}}, released October 2, 2026: one 16.9MB file covering seven European languages, Apache 2.0, no dependencies. On an M4 Pro CPU, Cactus measured 11.1ms to first token on ten seconds of audio, against 73.2ms for Whisper base and 22.8ms for Moonshine tiny v2. Its WER is published only as charts, where it trades wins with Whisper base. There's no published parameter count, and it's two weeks old, so test it on your own audio.

## Serving: the API is standard, the runtime isn't

Most servers now speak OpenAI's `POST /v1/audio/transcriptions`, so client code doesn't care which model sits behind it. The runtimes are still split by model family:

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Runtime</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Models</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">How you call it</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://docs.vllm.ai/en/stable/serving/online_serving/speech_to_text/">vLLM</a> 0.31.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3-ASR, Cohere Transcribe, Granite Speech, Voxtral, Whisper</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>/v1/audio/transcriptions</code>, <code>/v1/realtime</code></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/ggml-org/whisper.cpp">whisper.cpp</a> 1.9.5</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Whisper (GGML), Parakeet via <code>parakeet-cli</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>/inference</code>, renamable with <code>--inference-path</code></td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/SYSTRAN/faster-whisper">faster-whisper</a> 1.2.1</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Whisper (CTranslate2)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Python library, no server</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/speaches-ai/speaches">Speaches</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">faster-whisper models, Parakeet ONNX</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>/v1/audio/transcriptions</code> on port 8000</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/NVIDIA-NeMo/Speech">NeMo Speech</a> 3.0.0</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Parakeet, Canary, Nemotron</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Python; NVIDIA NIM containers for HTTP</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a target="_blank" href="https://github.com/k2-fsa/sherpa-onnx">sherpa-onnx</a> 1.13.8</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Whisper, Parakeet, Moonshine, SenseVoice</td>
  <td style="border:1px solid #ddd;padding:0.5em;">On-device: Android, iOS, Raspberry Pi</td>
</tr>
</tbody>
</table>

One thing bit me while testing: a fresh `pip install faster-whisper` now pulls PyAV 19, which removed an argument faster-whisper 1.2.1 still passes, so every transcription fails with `TypeError: open() got an unexpected keyword argument 'metadata_errors'`. The fix is merged upstream but unreleased. Until then, install with `pip install faster-whisper "av<19"`.

## Self-host Whisper and reach it from anywhere

Say you want a private transcription endpoint at home that a phone app, a script or an agent can call. whisper.cpp with large-v3-turbo is the shortest path:

```bash
brew install whisper.cpp
curl -L -o ggml-large-v3-turbo-q5_0.bin \
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo-q5_0.bin
whisper-server -m ggml-large-v3-turbo-q5_0.bin --port 8080 \
  --inference-path /v1/audio/transcriptions
```

On Linux, build from the {{< link href="https://github.com/ggml-org/whisper.cpp" >}}repo{{< /link >}} with CMake. In my tests the server decoded WAV and FLAC but rejected M4A with `Invalid request`; `--convert` adds ffmpeg conversion. Test it with the 11-second `samples/jfk.wav` clip from the repo:

```bash
curl http://localhost:8080/v1/audio/transcriptions \
  -F file=@jfk.wav -F response_format=json
```

```
{"text":" And so, my fellow Americans, ask not what your country can do for you, ask what you can do for your country.\n"}
```

On an M3 Pro, warm requests took about 0.85 seconds for the 11-second clip on the Metal GPU.

The server listens on localhost only. To reach it from outside without opening a router port, start a {{< link href="https://pinggy.io/docs/http_tunnels/key_auth/" >}}Pinggy tunnel with key authentication{{< /link >}} so strangers can't use your GPU:

```bash
ssh -p 443 -R0:localhost:8080 -t free.pinggy.io k:stt-demo-key
```

It prints an `https://<random>.run.pinggy-free.link` URL. Pinggy blocks any request without `Authorization: Bearer stt-demo-key` before it reaches your machine, and that's exactly the header the OpenAI SDK sends from `api_key`, so the standard client works unchanged:

```python
from openai import OpenAI

client = OpenAI(base_url="https://<your-url>.run.pinggy-free.link/v1", api_key="stt-demo-key")

with open("jfk.wav", "rb") as f:
    print(client.audio.transcriptions.create(model="whisper-1", file=f).text)
```

{{< image "best_open_source_self_hosted_speech_to_text_models/stt_endpoint_through_pinggy.webp" "Sequence diagram: an OpenAI SDK client sends POST /v1/audio/transcriptions with a bearer key to a Pinggy URL, Pinggy forwards it through the SSH tunnel to whisper-server on port 8080, the JSON transcript comes back, and a request without the key is blocked at Pinggy" >}}

whisper-server ignores the `model` field, so any value works, and its README warns against running it with admin privileges. Free tunnels close after 60 minutes and get a new URL on restart; a Pro token keeps one URL. On an NVIDIA box, swap whisper-server for vLLM serving Qwen3-ASR or Cohere Transcribe and keep the client as is. For the other half of a voice loop, see our {{< link href="/blog/best_open_source_self_hosted_text_to_speech_models/" >}}self-hosted text-to-speech guide{{< /link >}}.

## How to choose

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Your need</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Pick</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Best accuracy, commercial use</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3-ASR-1.7B</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Long English recordings</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Cohere Transcribe, with a VAD in front</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Bulk transcription on NVIDIA GPUs</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Parakeet TDT 0.6B v3, or Granite Speech 5.0 TurboCTC for English</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Many languages</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Voxtral Small, or Omnilingual ASR beyond 100 languages</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Meetings with speaker labels</td>
  <td style="border:1px solid #ddd;padding:0.5em;">VibeVoice-ASR</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Voice agents</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Nemotron 3.5 ASR Streaming or Voxtral Mini 4B Realtime</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Phones and small devices</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Moonshine or Whistle</td>
</tr>
</tbody>
</table>

## Conclusion

Before you commit to a model, run 50 clips of your own audio through two candidates on the same runtime and compute WER yourself. The leaderboards disagree, and the benchmark-fitting study shows why your audio is the only test set that settles it.
