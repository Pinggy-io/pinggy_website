---
title: "StemDeck: Split Any Song Into Studio Stems, Locally and for Free"
description: "StemDeck is an open-source stem separator built on Demucs that isolates vocals, drums, bass, guitar, and piano in a browser-based mixer. Here's how it works and how to share a running instance with Pinggy."
date: 2026-08-29T11:20:00+05:30
draft: false
tags: ["StemDeck", "Demucs", "local AI", "self-hosted AI", "Pinggy"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/stemdeck_local_ai_stem_separator_pinggy/stemdeck_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBTdGVtRGVjayBMb2NhbGx5IGFuZCBTaGFyZSBJdCB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBzZXR0aW5nIHVwIHRoZSBTdGVtRGVjayBzdGVtIHNlcGFyYXRvciwgcnVubmluZyBpdHMgbG9jYWwgd2ViIG1peGVyLCBhbmQgZXhwb3NpbmcgaXQgdG8gdGhlIGludGVybmV0IHVzaW5nIFBpbmdneS4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2xvbmUgU3RlbURlY2sgYW5kIHJ1biBzZXR1cCIsCiAgICAgICJ0ZXh0IjogIkNsb25lIHRoZSByZXBvc2l0b3J5IHdpdGggZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGVtZGVja2FwcC9zdGVtZGVjayBzdGVtZGVjayAmJiBjZCBzdGVtZGVjaywgdGhlbiBydW4gLi9ydW4uc2ggc2V0dXAgdG8gaW5zdGFsbCBmZm1wZWcgYW5kIHV2IGFuZCBzeW5jIGRlcGVuZGVuY2llcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIFN0ZW1EZWNrIHNlcnZlciIsCiAgICAgICJ0ZXh0IjogIlJ1biAuL3J1bi5zaCBzdGFydC4gVGhpcyBsYXVuY2hlcyB0aGUgRmFzdEFQSSBiYWNrZW5kIGFuZCBicm93c2VyIG1peGVyIFVJIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2VwYXJhdGUgYSB0cmFjayBpbnRvIHN0ZW1zIiwKICAgICAgInRleHQiOiAiRHJvcCBhbiBhdWRpbyBmaWxlIG9yIHBhc3RlIGEgWW91VHViZSBVUkwgaW50byB0aGUgU3RlbURlY2sgVUkuIFRoZSBodGRlbXVjc182cyBEZW11Y3MgbW9kZWwgc2VwYXJhdGVzIGl0IGludG8gdm9jYWxzLCBkcnVtcywgYmFzcywgZ3VpdGFyLCBwaWFubywgYW5kIG90aGVyIHN0ZW1zLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgcG9ydCA4MDAwIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwgcnVuOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODAwMCBmcmVlLnBpbmdneS5pby4gUGluZ2d5IHByaW50cyBhIHB1YmxpYyBIVFRQUyBVUkwgdGhhdCB0dW5uZWxzIGRpcmVjdGx5IHRvIHlvdXIgbG9jYWwgU3RlbURlY2sgaW5zdGFuY2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk9wZW4gdGhlIG1peGVyIGZyb20gYW55IGRldmljZSIsCiAgICAgICJ0ZXh0IjogIlZpc2l0IHRoZSBnZW5lcmF0ZWQgcGluZ2d5LmxpbmsgVVJMIGZyb20geW91ciBwaG9uZSBvciBhIGJhbmRtYXRlJ3MgYnJvd3NlciB0byB1c2UgdGhlIERBVy1zdHlsZSBtaXhlciBhbmQgZG93bmxvYWQgc3RlbXMsIHdoaWxlIGFsbCBwcm9jZXNzaW5nIHN0YXlzIG9uIHlvdXIgbWFjaGluZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "stemdeck_local_ai_stem_separator_pinggy/stemdeck_banner.webp" "StemDeck runs locally on your machine, tunnels through Pinggy, and opens as a browser mixer on any device" >}}

Splitting a mixed song back into its individual instruments used to require either a research lab or a subscription. <a href="https://github.com/stemdeckapp/stemdeck" target="_blank">StemDeck</a> does it with a `git clone` and a local model download. Point it at an MP3 and a few minutes later you have separate WAV files for vocals, drums, bass, guitar, piano, and everything else, playable in a browser-based mixer with per-track mute, solo, and volume faders. No account, no upload, no per-song fee.

That alone would be a nice weekend tool. What makes it interesting from a "how do I actually use this" angle is that StemDeck runs as a plain FastAPI web server on `localhost:8000`. It is, mechanically, no different from any other local dev server you've ever wanted to reach from somewhere other than the machine it's running on - your phone, a bandmate's laptop, a studio machine on a different network. That's a problem Pinggy solves in one command, and it pairs unusually well here because StemDeck already leans into local-network sharing (it prints a QR code so you can open the mixer from a phone on the same Wi-Fi). A tunnel just removes the "same Wi-Fi" part.

{{% tldr %}}
1. **Get it**: `git clone https://github.com/stemdeckapp/stemdeck stemdeck && cd stemdeck`
2. **One-shot setup (macOS/Linux)**: `./run.sh setup && ./run.sh start`
3. **It's a real web server**: the mixer UI runs on `http://localhost:8000` by default.
4. **Separation model**: Demucs `htdemucs_6s`, Meta AI's open-source 6-stem neural network, running entirely on your own CPU or GPU.
5. **Share it**: `ssh -p 443 -R0:localhost:8000 free.pinggy.io` gets you a public HTTPS URL in seconds - useful the moment you're off the home Wi-Fi StemDeck's built-in QR code depends on.
6. **Lock it down**: add `-t "b:user:password"` to the SSH command before you hand the link to anyone.
{{% /tldr %}}

{{< llm-context >}}To share a locally running StemDeck stem separator with Pinggy - clone and start StemDeck (`git clone https://github.com/stemdeckapp/stemdeck stemdeck && cd stemdeck && ./run.sh setup && ./run.sh start`, starts on port 8000), then in a new terminal run `ssh -p 443 -R0:localhost:8000 free.pinggy.io` to get a public HTTPS URL for the browser-based stem mixer.{{< /llm-context >}}

## What StemDeck actually does

StemDeck takes an audio file (MP3, WAV, FLAC, OGG/Opus, MP4, M4A) or a YouTube URL and separates it into up to six stems: vocals, drums, bass, guitar, piano, and "other" (everything that doesn't fit the first five - synths, strings, whatever). The separation is powered by <a href="https://github.com/facebookresearch/demucs" target="_blank">Demucs</a>, Meta AI's open-source source-separation model, specifically the `htdemucs_6s` variant, a hybrid transformer architecture trained on the six-stem case rather than the more common four-stem (vocals/drums/bass/other) split.

Once a job finishes, the result opens in a DAW-style mixer built with vanilla JavaScript and the Web Audio API: waveform view per stem, mute/solo buttons, volume faders, a shared transport with loop regions, and live VU meters. You can isolate just the vocals to check phrasing, mute the drums to hear how a bassline sits alone, or export any subset as a custom mix. There's also basic song analysis thrown in - BPM detection, key identification, and LUFS loudness measurement via `librosa` and `pyloudnorm` - and an optional secondary pass with the UVR-MDX-NET Karaoke 2 model to split lead vocals from backing vocals.

None of the underlying technology is new. Demucs has been open for a few years and command-line tools like Ultimate Vocal Remover (UVR5) have offered similar separation for a while. What StemDeck adds is packaging: a normal person can run one script and get a polished, playable mixer instead of a folder of WAV files and a `.bat` script. That's roughly the same value proposition as Meetily did for local meeting transcription, or a hundred other "wrap an existing open model in a good UI" projects - except this one has an unusually direct use case for anyone who plays music, teaches it, or DJs.

## Why it beats the alternatives for most personal use

The commercial comparison points are <a href="https://moises.ai/" target="_blank">Moises</a> and <a href="https://www.lalal.ai/" target="_blank">LALAL.AI</a>, both of which charge per minute of audio processed or gate stem count behind a subscription. StemDeck's pitch is the opposite: everything runs on your machine, so there's no quota, no account, and no file ever leaves your computer. For separating a demo take to check a mix, pulling stems to practice along with a song, or grabbing an a cappella for a mashup, that's a straightforwardly better deal if you have the hardware for it.

The tradeoff is exactly what you'd expect from trading a cloud GPU for your own: quality and speed depend on what you're running it on. Demucs is not free lunch, either. GPU acceleration helps a lot (CUDA on NVIDIA, MPS on Apple Silicon are both supported, with CPU fallback for everyone else), and a full six-stem separation on a longer track will noticeably tax a laptop's CPU if it has no GPU to fall back to.

## Installing it

You have four ways to run StemDeck, depending on platform and how much you want to touch a terminal.

**Desktop app (macOS/Windows).** Grab a `.dmg` or `.zip` from the <a href="https://github.com/stemdeckapp/stemdeck/releases" target="_blank">releases page</a>. It's a Tauri-wrapped shell around the same FastAPI backend, and it bundles Python, FFmpeg, and the model download on first launch, so there's nothing else to install.

**Web server (macOS/Linux), one-shot setup:**

```bash
git clone https://github.com/stemdeckapp/stemdeck stemdeck && cd stemdeck
./run.sh setup     # installs ffmpeg + uv, runs uv sync
./run.sh start
```

**Web server (Windows PowerShell):**

```powershell
winget install astral-sh.uv
winget install Gyan.FFmpeg
git clone https://github.com/stemdeckapp/stemdeck stemdeck; cd stemdeck
uv sync
uv run uvicorn app.main:app --host 127.0.0.1 --port 8000 --timeout-graceful-shutdown 5
```

**Docker**, if you'd rather not touch Python at all:

```bash
docker run -d --name stemdeck -p 8000:8000 \
  -v /path/to/jobs:/app/jobs \
  -v /path/to/cache:/cache \
  ghcr.io/stemdeckapp/stemdeck:edge
```

Whichever route you take, the first run pauses to download the `htdemucs_6s` weights (about 170 MB) and, for the web-server path, a Python runtime managed by `uv`. After that it's cached and startup is fast.

A few environment variables worth knowing about if you're running this as more than a one-off: `STEMDECK_DEMUCS_DEVICE` forces the inference device (`cuda`, `mps`, `cpu`) when auto-detection guesses wrong, `STEMDECK_MAX_DURATION_SEC` (default 1200, i.e. 20 minutes) rejects anything longer, and `STEMDECK_JOB_TTL_SECONDS` (default 86400) auto-deletes finished jobs after a day so your disk doesn't fill up with stems from six months ago.

## Sharing a running instance with Pinggy

{{< image "stemdeck_local_ai_stem_separator_pinggy/stemdeck_mixer_ui.webp" "StemDeck's browser-based mixer with six colored channel strips for vocals, drums, bass, guitar, piano, and other, accessed through a Pinggy tunnel URL" >}}

StemDeck already gets the LAN case right - it prints a QR code so you can point your phone at the mixer without typing an IP address, as long as the phone is on the same Wi-Fi as the machine running the server. That's fine until it isn't: you're at a rehearsal space on a different network, a bandmate wants to check a rough mix from home, or you just want to pull up the mixer on your phone over mobile data while you're not near your router. At that point the LAN trick stops working and you're stuck either copying files by hand or standing up real infrastructure for what is, honestly, a five-minute task.

That's what a tunnel is for. Leave StemDeck running in one terminal, open a second one, and run:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy responds with a public HTTPS URL, something like `https://abc123.a.pinggy.link`. Open it from any device on any network and you're looking at the exact same mixer you'd get on `localhost:8000` - waveforms, faders, export button included. The separation itself is still happening on your machine's CPU or GPU; the tunnel only carries the UI and the finished audio, the same way it would for any other local web app.

If you need a stable link instead of a fresh random one every time you restart the tunnel, <a href="https://pinggy.io" target="_blank">Pinggy's paid plans</a> add persistent subdomains.

### Adding password protection

A stem separator processing whatever audio you drop on it isn't the kind of thing you want indexed by a stray crawler or opened by someone who guessed the subdomain. Pinggy supports HTTP basic auth on the tunnel itself:

```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io -t "b:reviewer:temporarypass"
```

Now the public URL asks for credentials before it shows anything. It's not a substitute for real authentication if you were deploying this as a permanent service, but for "let this one bandmate check this one mix for the next hour," it's exactly enough friction.

## What people are actually using this for

Skimming the discussion around StemDeck's release, the reactions split about how you'd expect for a tool built entirely from other people's open models. People are impressed the separation quality is this good for something running for free on a laptop - one long-time bedroom producer described spending years as a kid trying to manually EQ out an a cappella, which is the kind of thing this replaces in about ninety seconds. The more skeptical thread is the YouTube/SoundCloud download shortcut baked into the input step: convenient, and also the part most likely to get you in trouble if you separate something you don't have rights to. Treat that feature the way you'd treat any downloader - fine for audio you own or have permission to process, not a loophole around copyright.

The practical use cases line up pretty directly with why you'd want remote access in the first place:

- **Practicing along with a track.** Mute the guitar, solo the drums, loop a section - all standard stuff for learning a part, minus the terrible full-mix bleed you get trying to do this by ear.
- **Sharing a rough mix stem-by-stem.** Send a bandmate the tunnel URL instead of six separate file uploads; they open the mixer and adjust balance themselves.
- **DJing and remixing.** Pull an a cappella or an instrumental from a track that never got an official stem release.
- **Transcription.** Isolating bass or piano makes picking out a part by ear meaningfully easier than working from the full mix.

## Limitations worth knowing before you rely on this

StemDeck's dev server has no concept of user accounts or per-request permissions - anyone with the tunnel URL (and your basic auth credentials, if you set them) can see every job in that instance, including ones from earlier sessions, since jobs persist until the TTL clears them out. Treat a tunnel as a temporary bridge for one specific person or one specific session, not a standing multi-user deployment.

Separation quality also has a ceiling that's inherent to the underlying model, not to StemDeck's packaging: dense mixes with a lot of overlapping frequency content (a wall-of-guitars rock mix, for instance) separate less cleanly than a sparse pop arrangement. And a fully offline six-stem separation on CPU alone, for a full-length track, will take noticeably longer than the GPU path - budget accordingly if you're on a laptop with no dedicated graphics card.

## Conclusion

StemDeck is a good example of a project that doesn't need a novel model to be worth using, just a clean local wrapper around one that already exists. If you've ever wanted to isolate a bassline, pull a clean vocal for practice, or hand a bandmate a rough mix without a file-sharing back-and-forth, it's a `git clone` and a model download away, with none of the per-minute billing that comes with the cloud alternatives. The one gap it leaves - reaching that mixer from anywhere other than your own Wi-Fi - is exactly what a Pinggy tunnel is for, and it costs one SSH command to close. If you have a spare GPU or even just a modern laptop CPU, this is a reasonable thing to have running the next time you're deep in a mix.
