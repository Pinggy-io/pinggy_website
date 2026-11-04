---
title: "Whistle: A 16.9 MB Speech-to-Text Model That Runs on a CPU"
description: "Whistle is an Apache-2.0 speech recognition model in a single 16.9 MB file. How it works, how to run it with pip, where it beats Whisper base, where it doesn't, and how to serve it over HTTP."
date: 2026-10-09T10:00:00+05:30
lastmod: 2026-10-09T10:00:00+05:30
draft: false
tags: ["Whistle", "edge AI", "local AI", "open source"]
og_image: "images/whistle_16mb_speech_to_text_model/whistle_16mb_speech_to_text_model_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIldoaXN0bGU6IEEgMTYuOSBNQiBTcGVlY2gtdG8tVGV4dCBNb2RlbCBUaGF0IFJ1bnMgb24gYSBDUFUiLAogICJkZXNjcmlwdGlvbiI6ICJXaGlzdGxlIGlzIGFuIEFwYWNoZS0yLjAgc3BlZWNoIHJlY29nbml0aW9uIG1vZGVsIGluIGEgc2luZ2xlIDE2LjkgTUIgZmlsZS4gSG93IGl0IHdvcmtzLCBob3cgdG8gcnVuIGl0IHdpdGggcGlwLCB3aGVyZSBpdCBiZWF0cyBXaGlzcGVyIGJhc2UsIHdoZXJlIGl0IGRvZXNuJ3QsIGFuZCBob3cgdG8gc2VydmUgaXQgb3ZlciBIVFRQLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy93aGlzdGxlXzE2bWJfc3BlZWNoX3RvX3RleHRfbW9kZWwvd2hpc3RsZV8xNm1iX3NwZWVjaF90b190ZXh0X21vZGVsX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMDlUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0wOVQxMDowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL3doaXN0bGVfMTZtYl9zcGVlY2hfdG9fdGV4dF9tb2RlbC8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJXaGlzdGxlIHNwZWVjaCB0byB0ZXh0LCBDYWN0dXMgV2hpc3RsZSwgb24tZGV2aWNlIHNwZWVjaCByZWNvZ25pdGlvbiwgc21hbGwgQVNSIG1vZGVsLCBXaGlzcGVyIGJhc2UgYWx0ZXJuYXRpdmUsIGNhY3R1cy1uZWVkbGUiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiV2hpc3RsZSIsICJkZXNjcmlwdGlvbiI6ICJBIDE2LjkgTUIgQXBhY2hlLTIuMCBzcGVlY2ggcmVjb2duaXRpb24gbW9kZWwgZnJvbSBDYWN0dXMgQ29tcHV0ZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk9uLWRldmljZSBzcGVlY2ggcmVjb2duaXRpb24iLCAiZGVzY3JpcHRpb24iOiAiVHJhbnNjcmliaW5nIGF1ZGlvIG9uIHRoZSBDUFUgb2YgdGhlIGxvY2FsIG1hY2hpbmUgd2l0aG91dCBhIGNsb3VkIEFQSS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIldvcmQgZXJyb3IgcmF0ZSIsICJkZXNjcmlwdGlvbiI6ICJUaGUgc3RhbmRhcmQgYWNjdXJhY3kgbWVhc3VyZSBmb3Igc3BlZWNoIHJlY29nbml0aW9uLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU1NIIHJldmVyc2UgdHVubmVsIiwgImRlc2NyaXB0aW9uIjogIkV4cG9zaW5nIGEgbG9jYWwgSFRUUCBlbmRwb2ludCB0aHJvdWdoIGEgcHVibGljIEhUVFBTIFVSTC4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "whistle_16mb_speech_to_text_model/whistle_16mb_speech_to_text_model_banner.webp" "Headline Speech-to-text in 16.9 MB above bars comparing the model file sizes of Whistle, Moonshine tiny v2 and Whisper base" >}}
Whistle is a speech recognition model from Cactus Compute, released on October 2, 2026. The whole model is one 16.9 MB file, it runs on the CPU, and it is Apache-2.0 licensed. On my 4-core x86 sandbox, `pip install cactus-needle` plus one download was enough to turn a WAV file into text with word timestamps, no GPU and no API key.

That size is the interesting part. Whisper base is 145.3 MB, Moonshine tiny v2 is 41.9 MB, and Whistle sits at roughly an eighth of the first. This post covers how it gets there, how to run it, what it costs you in accuracy and limits, and how to put it behind an HTTP endpoint you can call from a phone.

{{% tldr %}}
1. **Whistle is one 16.9 MB file** that runs on a plain CPU. It transcribes up to 30 seconds of 16 kHz mono audio per call, in 7 languages.
2. **Install is `pip install cactus-needle`** plus `needle download whistle`. `needle.transcribe("clip.wav")` returns text, language, time to first token and tokens per second.
3. **The speed claims are vendor numbers from an M4 Pro** (11.1 ms to first token on a 10 s clip). On my 4-core x86 box the same call took about 100 to 145 ms. Still fast, not the same.
4. **Whisper base wins on some benchmarks** (TED-LIUM, AMI, the MLS average). Whistle leads on LibriSpeech, SPGISpeech, Earnings-22 and the FLEURS average. Test on your own audio.
5. **The 30 second cap is a hard error**, not a silent truncation. Longer audio needs chunking before you call it.
{{% /tldr %}}

## What 16.9 MB of speech recognition is made of

The pipeline is short, and each stage is small. This is from the {{< link href="https://cactuscompute.com/blog/whistle" >}}Cactus write-up{{< /link >}}.

- **Front end.** Audio is cut into 25 ms windows with a 10 ms hop and turned into 80 log-mel bins, band-limited to 250-3500 Hz. Thirty seconds is 3,000 frames. A convolutional stem then halves the frame count three times, leaving 375 frames of 80 ms each.
- **Encoder.** Eight blocks of "Simple Attention", the same encoder as Cactus's Needle tool-calling model. Attention is non-causal, so every frame can look at the whole clip.
- **Decoder.** Eight layers at width 512, with grouped-query attention (8 query heads, 2 KV heads) and gated cross attention into the encoder output. The encoder keys and values are computed once per clip and reused across beams.
- **Decoding.** Beam search with 5 beams, a vocabulary of 8,192 text pieces plus 7 language tokens, and a cap of 320 tokens per transcript. Keyword biasing runs through an Aho-Corasick automaton.

The language is emitted as a token, so detection costs nothing extra. Clips below a loudness-range threshold return an empty transcript without ever entering beam search, which is why silence is cheap.

{{< image "whistle_16mb_speech_to_text_model/whistle_speech_pipeline.webp" "Five-step flow from 16 kHz audio through log-mel bins, a convolutional stem, the encoder and the decoder to text" >}}

*The frame count drops 8x in the convolutional stem, before any attention runs.*
## Run it yourself

The package is `cactus-needle` (3.1.3 when I installed it on October 9, 2026). Whistle shares its engine with Needle, so the CLI has a few commands you won't need.

```bash
python3 -m venv v && source v/bin/activate
pip install cactus-needle
needle download whistle     # fetches whistle.cact, 16.92 MB
```

Telemetry is on by default in the binary. To turn it off, set `NEEDLE_TELEMETRY=0` and `DO_NOT_TRACK=1` before you run anything.

I generated a test clip with text-to-speech (`turn off the kitchen lights and set a timer for ten minutes`), converted it to 16 kHz mono with `ffmpeg -i c.mp3 -ar 16000 -ac 1 clip.wav`, and transcribed it:

```python
import needle
print(needle.transcribe("clip.wav", weights="./whistle.cact"))
```

```text
{'text': 'Turn off the kitchen lights and set a timer for ten minutes.', 'language': 'en', 'ttft_ms': 144.6, 'decode_tps': 97.1}
```

Add `word_timestamps=True` and you get a start, end and probability for each word. The timestamps come from the decoder's attention, so treat them as approximate. In my run, the weakest word was "ten" at a probability of 0.67, which is a reasonable place to look if you want to flag uncertain transcripts.

```text
{'word': 'ten', 'start': 2.72, 'end': 2.96, 'probability': 0.67}
```

Two things worth knowing. The first call loads the model, so time the second one. And if your audio isn't 16 kHz mono, a plain install can't resample it: the `[mic]` extra adds `soxr` and `sounddevice` for that and for microphone capture. `needle whistle playground` gives you a terminal mic demo, and `needle whistle compare` runs Whistle, Whisper and Moonshine side by side.

## What the benchmark numbers say

Cactus publishes this table for a 10 second clip on an Apple M4 Pro CPU:

| Model | Size | Time to first token | Decode speed |
|---|---|---|---|
| Whistle | 16.9 MB | 11.1 ms | 1,319 tokens/s |
| Whisper base | 145.3 MB | 73.2 ms | 266 tokens/s |
| Moonshine tiny v2 | 41.9 MB | 22.8 ms | 262 tokens/s |

Those are the vendor's numbers, not mine. On a 4-core x86 sandbox my own runs gave 100 to 145 ms to first token and 97 to 168 tokens/s on a 3.4 second clip, with the first call being the slow one. That's a different machine and a different clip, so it says nothing about the M4 Pro figures. It does say you shouldn't expect 11 ms on a cheap VPS.

One detail that matters for latency: Whistle's time to first token scales with clip length (5.9 ms at 5 s, 11.1 ms at 10 s, 36.3 ms at 30 s), while Whisper pads everything to 30 seconds, so its latency is flat. Short voice commands are where Whistle's design pays off most.

On accuracy, the authors report word error rate over 86,174 utterances. Whistle leads on LibriSpeech test-clean and test-other, SPGISpeech, Earnings-22 and the FLEURS average. Whisper base leads on TED-LIUM, AMI and the MLS average. The exact WER values are in a chart on their page that I couldn't extract as text, so I'm not quoting them. They also say no test audio appears in training or validation data, checked by audio checksums and speaker IDs.

{{< image "whistle_16mb_speech_to_text_model/whistle_vs_whisper_base_moonshine.webp" "Bar charts of model size and time to first token for Whistle, Moonshine tiny v2 and Whisper base" >}}

*Data: Cactus Compute, {{< link href="https://cactuscompute.com/blog/whistle" >}}cactuscompute.com/blog/whistle{{< /link >}}, October 2026. Apple M4 Pro CPU, 10 s clip.*
## Where it breaks

I tried the obvious edges.

**The 30 second limit is an exception.** I fed it a 44.6 second clip and got `RuntimeError: audio limit is 30 s`. Nothing is truncated quietly, which is good, but you have to split longer recordings yourself. Cut on silence if you can, because cutting mid-word costs you that word.

**Keyword biasing is not magic.** I passed `keywords=['Pinggy', 'Hetzner']` on a sentence containing both. Without the keywords the output was `We deployed Pindy and Kubernetes on Hetzner last Tuesday...`, and with them it was identical, still "Pindy". This was one synthetic voice and one sentence, so it proves little, but don't assume a product name will be spelled right just because you listed it.

**Seven languages.** English, German, French, Spanish, Italian, Dutch and Polish. Pass `language="de"` to force one rather than relying on detection.

**Not on the page.** The model card doesn't list the training data, and the main page doesn't compare against Parakeet or other larger models. If you need a smaller error rate and can afford the memory, a bigger Whisper is still the safer pick.

The sensible places to use it are the ones where size and start-up time dominate: voice commands on a phone or Raspberry Pi, a wake-then-transcribe flow, a browser or WASM build. The release ships engines for 17 targets including Linux, macOS, Android, iOS, Windows on ARM and the browser.

## Putting Whistle behind an HTTP endpoint with Pinggy

A model this small runs well on a laptop or a Pi, which usually sits behind a router. If a phone, a Shortcut or a webhook sender needs to post audio to it, a tunnel is the shortest route. This is the only step in the post that needs one.

Here is a bare-bones server using only the standard library plus `needle`. It takes a 16 kHz mono WAV in the request body and returns the transcript as JSON.

```python
import json, tempfile
from http.server import BaseHTTPRequestHandler, HTTPServer
import needle

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        body = self.rfile.read(int(self.headers["Content-Length"]))
        with tempfile.NamedTemporaryFile(suffix=".wav") as f:
            f.write(body)
            f.flush()
            try:
                out, code = needle.transcribe(f.name, weights="whistle.cact"), 200
            except RuntimeError as e:
                out, code = {"error": str(e)}, 413
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(out).encode())

HTTPServer(("127.0.0.1", 8000), Handler).serve_forever()
```

I ran this locally and posted two files with curl. The 3.4 second clip came back with a transcript and a 200. The 44.6 second one came back as `{"error": "audio limit is 30 s"}` with a 413.

```bash
curl -s -X POST --data-binary @clip.wav -H 'Content-Type: audio/wav' localhost:8000/
```

Now open a tunnel to port 8000. Because this endpoint runs a model on your CPU for anyone who finds the URL, add a bearer key so only your caller gets in. I couldn't run the tunnel from my sandbox (no `ssh` client there), so this command is untested here; it follows the Pinggy CLI reference for the `k:` option.

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey
```

Pinggy prints an HTTPS URL. Call it with the key:

```bash
curl -X POST --data-binary @clip.wav \
  -H 'Authorization: Bearer mysecretkey' \
  https://<your-subdomain>.run.pinggy-free.link/
```

The flow is: the caller posts audio to the Pinggy URL -> Pinggy forwards it down the SSH connection your machine opened -> your machine hands it to port 8000 -> Whistle returns JSON. Nothing is opened on your router. A free tunnel lasts 60 minutes and gets a new URL each time, so for a phone shortcut you'll want a Pro token with a fixed subdomain. For more on receiving requests on a local server, see [receiving webhooks on localhost](/blog/receive_and_test_webhooks_in_localhost/).

{{< image "whistle_16mb_speech_to_text_model/whistle_phone_to_local_transcriber.webp" "Sequence of a phone posting audio to a Pinggy URL, the request travelling over SSH to a laptop and port 8000, and the JSON transcript returning" >}}

*The laptop starts the connection, so the phone can reach port 8000 without any router change.*
## What to try next

Pick three recordings of your own, ideally with the names and jargon you actually care about, and run them through `needle whistle compare`. That prints Whistle, Whisper and Moonshine side by side on your audio, which tells you more than any leaderboard. If Whistle holds up on short commands and notes, the 16.9 MB file is easy to ship almost anywhere. If it drops product names or accents, that's your answer too.
