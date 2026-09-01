---
title: "Turn a Security Camera Microphone Into a 24/7 Bird Identification System"
description: "BirdNET-Go turns an RTSP security camera microphone or a $10 USB sound card into a local, offline bird identification system covering up to 14,795 species. Here's how it works, how to run it on a Raspberry Pi, and how to check detections from your phone with Pinggy."
date: 2026-09-01T11:00:00+05:30
draft: false
tags: ["BirdNET-Go", "self-hosted", "Raspberry Pi", "open source", "citizen science"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/self_hosted_bird_identification_birdnet_go/self_hosted_bird_identification_birdnet_go_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KeyJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLCAiQHR5cGUiOiAiSG93VG8iLCAibmFtZSI6ICJSdW4gYSBTZWxmLUhvc3RlZCBCaXJkIElkZW50aWZpY2F0aW9uIFN5c3RlbSB3aXRoIEJpcmRORVQtR28gYW5kIFZpZXcgSXQgQW55d2hlcmUgd2l0aCBQaW5nZ3kiLCAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHR1cm5pbmcgYSBzZWN1cml0eSBjYW1lcmEgbWljcm9waG9uZSBvciBVU0Igc291bmQgY2FyZCBpbnRvIGEgMjQvNyBvZmZsaW5lIGJpcmQgaWRlbnRpZmljYXRpb24gc3lzdGVtIHdpdGggQmlyZE5FVC1HbywgdGhlbiBleHBvc2luZyBpdHMgZGFzaGJvYXJkIHdpdGggYSBQaW5nZ3kgdHVubmVsLiIsICJzdGVwIjogW3siQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiSW5zdGFsbCBCaXJkTkVULUdvIiwgInRleHQiOiAiUnVuOiBjdXJsIC1mc1NMIGh0dHBzOi8vZ2l0aHViLmNvbS90cGhha2FsYS9iaXJkbmV0LWdvL3Jhdy9tYWluL2luc3RhbGwuc2ggLW8gaW5zdGFsbC5zaCAmJiBiYXNoIGluc3RhbGwuc2ggdG8gaW5zdGFsbCBCaXJkTkVULUdvIGFuZCBpdHMgRG9ja2VyIGNvbnRhaW5lciBvbiBMaW51eCBvciBhIFJhc3BiZXJyeSBQaS4ifSwgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJQb2ludCBpdCBhdCBhbiBhdWRpbyBzb3VyY2UiLCAidGV4dCI6ICJJbiB0aGUgc2V0dXAgd2l6YXJkIG9yIGNvbmZpZy55YW1sLCBjaG9vc2UgYSBVU0Igc291bmQgY2FyZCBvciBlbnRlciB0aGUgUlRTUCBVUkwgb2YgYW4gZXhpc3Rpbmcgc2VjdXJpdHkgY2FtZXJhJ3MgbWljcm9waG9uZSBzdHJlYW0uIFNldCB5b3VyIGxvY2F0aW9uIHNvIHRoZSByYW5nZSBmaWx0ZXIgbmFycm93cyByZXN1bHRzIHRvIHNwZWNpZXMgc2VlbiBpbiB5b3VyIGFyZWEuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU3RhcnQgdGhlIHNlcnZpY2UiLCAidGV4dCI6ICJCaXJkTkVULUdvIGJlZ2lucyBhbmFseXppbmcgdGhlIGF1ZGlvIHN0cmVhbSBjb250aW51b3VzbHkgYW5kIGNsYXNzaWZ5aW5nIGJpcmQgY2FsbHMgbG9jYWxseS4gVGhlIHdlYiBkYXNoYm9hcmQgYmVjb21lcyBhdmFpbGFibGUgYXQgaHR0cDovL2xvY2FsaG9zdDo4MDgwIHdpdGggbGl2ZSBzcGVjdHJvZ3JhbXMsIGRldGVjdGlvbnMsIGFuZCBjb25maWRlbmNlIHNjb3Jlcy4ifSwgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJFeHBvc2UgdGhlIGRhc2hib2FyZCB3aXRoIFBpbmdneSIsICJ0ZXh0IjogIkluIGEgbmV3IHRlcm1pbmFsLCBydW46IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgwIGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgc3VjaCBhcyBodHRwczovL2FiYzEyMy5hLnBpbmdneS5saW5rIHRoYXQgZm9yd2FyZHMgdG8geW91ciBsb2NhbCBkYXNoYm9hcmQuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQ2hlY2sgZGV0ZWN0aW9ucyBmcm9tIGFueXdoZXJlIiwgInRleHQiOiAiT3BlbiB0aGUgUGluZ2d5IFVSTCBmcm9tIHlvdXIgcGhvbmUgb3IgYW55IGJyb3dzZXIgdG8gc2VlIGxpdmUgYmlyZCBkZXRlY3Rpb25zIHdpdGhvdXQgYmVpbmcgb24gdGhlIHNhbWUgbmV0d29yay4gVXNlIGEgUGluZ2d5IGFjY2VzcyB0b2tlbiBmb3IgYSBwZXJzaXN0ZW50IFVSTCB0aGF0IGRvZXMgbm90IGNoYW5nZSBvbiByZWNvbm5lY3QuIn1dfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To run a self-hosted 24/7 bird identification system with Pinggy - install BirdNET-Go with `curl -fsSL https://github.com/tphakala/birdnet-go/raw/main/install.sh -o install.sh && bash install.sh` and point it at an RTSP camera microphone or a USB sound card (dashboard starts on port 8080), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL you can check from your phone.{{< /llm-context >}}

{{< image "self_hosted_bird_identification_birdnet_go/self_hosted_bird_identification_birdnet_go_banner.webp" "Illustration of a bird-identification dashboard showing an audio spectrogram with three live species detections and confidence scores" >}}

Most outdoor security cameras already have a microphone in them, and almost nobody uses it for anything besides catching the occasional voice on a doorbell clip. Point that microphone's audio stream at <a href="https://github.com/tphakala/birdnet-go" target="_blank">BirdNET-Go</a>, an open-source project with 1.8k GitHub stars, and it becomes a 24/7 wildlife monitoring station that identifies bird species by their call, entirely offline, on hardware as small as a Raspberry Pi.

That's the interesting part of this project: it's not a new gadget or a cloud subscription. It's a piece of software that turns hardware you probably already own into something genuinely useful, using a real-time audio classifier that runs locally with no API calls and no monthly bill.

{{% tldr %}}
1. **BirdNET-Go** is a self-hosted, open-source app that listens to a live audio stream and identifies bird (and bat) species by their calls in real time, entirely offline.
2. **It can use hardware you already have**: a USB sound card, or the RTSP audio feed from an existing security camera. No dedicated recording equipment required.
3. **Model options** range from the embedded BirdNET v2.4 (about 6,500 species) to Google's newer Perch v2 model via ONNX (14,795 species across birds, insects, amphibians, and mammals).
4. **Install with one script**: `curl -fsSL https://github.com/tphakala/birdnet-go/raw/main/install.sh -o install.sh && bash install.sh`. The web dashboard runs on port 8080.
5. **Expose the dashboard with Pinggy**: `ssh -p 443 -R0:localhost:8080 free.pinggy.io` gives you a public HTTPS URL so you can check detections from your phone without opening anything on your router.
{{% /tldr %}}

## What BirdNET-Go actually does

At the core is a sound classification model trained on the same research lineage as Cornell Lab of Ornithology's BirdNET project, which has spent years building acoustic models from citizen-science recordings. BirdNET-Go wraps that model in a self-hosted service: it listens to a continuous audio stream, cuts it into short overlapping windows, converts each window into a spectrogram, and runs that spectrogram through a neural network that outputs a species and a confidence score.

The defaults are already broad. The embedded BirdNET v2.4 model recognizes around 6,500 species worldwide. If you want more coverage, BirdNET-Go also supports Google's Perch v2 model through ONNX Runtime, which extends identification to 14,795 species, not just birds but insects, amphibians, and mammals too. There's also a set of regional BattyBirdNET classifiers for bat echolocation calls, and a geographic model (BirdNET-Go calls it the Geomodel) that filters results by what's actually plausible to see in your location and season, which matters a lot for cutting down false positives. A confused classifier calling a common local sparrow a species that only lives in another hemisphere is a real failure mode without that filter.

None of this touches the cloud. Detection, classification, and storage all happen on the device running BirdNET-Go, backed by SQLite by default (MySQL is supported for larger deployments). That's worth calling out on its own: this is a case where "AI-powered" doesn't mean "sends your data to a third party's GPU cluster." It means a Go binary with an embedded TensorFlow Lite model, running inference on a Raspberry Pi.

## The hardware hack: you probably already have a microphone

The most common way people set up wildlife audio monitoring is buying a dedicated microphone, waterproofing it, and running a cable somewhere. BirdNET-Go supports that path (any USB sound card and a `arecord`-compatible input works), but it also does something more interesting: it can pull audio directly from an RTSP camera stream using FFmpeg. If you already have an outdoor security camera with a microphone, you point BirdNET-Go at its stream URL and you're done. No new hardware, no new mounting bracket, no new cable run.

One developer wrote up exactly this setup after repurposing three existing security cameras around his property, running everything through Docker as part of a broader homelab, and integrating detections into Home Assistant over MQTT so smart-home automations could react to specific species showing up. After twelve months of continuous operation, his instance had logged 418,726 detections across 271 unique species, with an average confidence of 60.9%. The single most common bird was the House Finch, with 118,667 detections on its own, way ahead of anything else on the list. That's a useful data point for anyone wondering whether this is a novelty that produces a trickle of results or an actual data-collection tool: run continuously, it accumulates fast.

It's not flawless. Audio classification catches things that sound similar to bird calls and occasionally misfires, famously including one recorded human bodily function on that same setup. BirdNET-Go also has a privacy feature worth knowing about if you're repurposing a security camera mic that might pick up conversations: it can detect and discard audio segments that contain speech, so the pipeline that's meant to classify chickadees isn't quietly transcribing your porch conversations.

## Setting it up

BirdNET-Go ships prebuilt binaries for Linux, Windows, and macOS, Docker images for `linux/amd64` and `linux/arm64`, and a one-line installer for Debian, Ubuntu, and Raspberry Pi OS:

```bash
curl -fsSL https://github.com/tphakala/birdnet-go/raw/main/install.sh -o install.sh
bash ./install.sh
```

The script installs Docker if it's missing, walks you through picking an audio source, sets up a systemd service so it survives reboots, and writes its config to `~/birdnet-go-app/config/config.yaml`. If you'd rather run it by hand with Docker directly:

```bash
docker run -ti --rm --name birdnet-go -p 8080:8080 \
  --env TZ="America/Los_Angeles" \
  --device /dev/snd \
  -v ~/birdnet-go-app/config:/config \
  -v ~/birdnet-go-app/data:/data \
  ghcr.io/tphakala/birdnet-go:nightly
```

`--device /dev/snd` passes your sound card into the container; if you're pulling from an RTSP camera instead, you configure the stream URL in `config.yaml` and BirdNET-Go handles the FFmpeg pull itself, no `--device` flag needed. Either way, the setup wizard asks for your location, which feeds the range filter mentioned earlier.

Once it's running, the dashboard is available at `http://localhost:8080`. You'll see a live spectrogram, a running list of detections with confidence scores and playback for the actual audio clip, and a heatmap of activity by hour and species. It's a genuinely pleasant interface for something running on a Pi.

## Checking detections from your phone with Pinggy

Here's the catch with the setup above: `localhost:8080` is only reachable from the machine BirdNET-Go is running on, or other devices on the same LAN at best. If you're at work and want to see what showed up in your backyard this morning, or you want to send a friend a link to your dashboard without adding them to your home Wi-Fi, you're stuck.

The usual fixes are annoying. Port forwarding on your router means editing firewall rules and exposing a raw port to the internet with no TLS. A VPN back into your home network works but is overkill for looking at a bird dashboard. Pinggy skips both: it opens an outbound SSH connection from your BirdNET-Go machine to Pinggy's servers, and Pinggy hands you back a public HTTPS URL that tunnels straight to your local port 8080.

{{< image "self_hosted_bird_identification_birdnet_go/birdnet_pinggy_architecture.webp" "Diagram showing audio flowing from a security camera microphone into BirdNET-Go on a Raspberry Pi, then out through a Pinggy tunnel to a phone anywhere on the internet" >}}

On the same machine running BirdNET-Go (or any machine on the LAN that can reach it), run:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy prints a public URL like `https://abc123.a.pinggy.link`. Open that from any browser, anywhere, and you get the same live dashboard, spectrograms and all. Port 443 is used for the outbound connection specifically because it's almost never blocked by home routers or workplace firewalls, so this works from most networks without any extra configuration.

The free tier's URL changes every time you reconnect, which is fine for checking in occasionally but annoying if you want to bookmark a stable link or set it as a webhook target. A <a href="https://pinggy.io/#prices" target="_blank">Pinggy access token</a> fixes that: `ssh -p 443 -R0:localhost:8080 <token>+tcp@pro.pinggy.io` gives you the same tunnel tied to a consistent address.

## What accumulates after a few weeks

BirdNET-Go isn't just a dashboard you glance at. It ships an alert engine that can route new detections (or specific species) to Discord, Slack, Telegram, ntfy, Pushover, Gotify, Matrix, a webhook, or a shell script, and it supports MQTT with Home Assistant discovery baked in, so "turn on the porch light when an owl is detected at night" is a real automation you can build, not a hypothetical. If you want to contribute your data back to the broader research effort, there's an opt-in integration with <a href="https://www.birdweather.com/" target="_blank">BirdWeather</a>, a community platform aggregating detections from BirdNET-style stations worldwide.

The database itself becomes the interesting artifact over time. A year of detections gives you your own local phenology record: when the first spring migrants showed up, which species visit only in certain months, whether a particular bird you like is a daily regular or a once-a-season surprise. That's the kind of dataset that's genuinely hard to build any other way without either hiring someone to sit outside with binoculars or buying commercial monitoring equipment that costs a lot more than a Raspberry Pi and a camera you already own.

## Tradeoffs worth knowing before you commit

**It's audio-only identification.** BirdNET-Go tells you what it heard, not what it saw. For species that look similar but sound distinct (or vice versa), that's actually an advantage, but it means the system can't confirm a rare visual sighting on its own.

**Perch v2 is heavier to run.** The bigger species coverage comes from a larger ONNX model, which asks more of your CPU than the embedded BirdNET v2.4 model. On a Raspberry Pi 4, stick with the default model unless you've confirmed your hardware keeps up; a Pi 5 has more headroom.

**Mic placement matters more than model choice.** An RTSP camera mic pointed at a busy street picks up traffic noise as easily as bird calls, which drags down both detection rate and confidence. The best results come from a camera or mic aimed at foliage, feeders, or anywhere birds actually spend time, away from mechanical noise sources.

**The license is non-commercial.** BirdNET-Go is released under CC BY-NC-SA 4.0, so it's free for personal, educational, and research use, but you can't build a paid product on top of it without a separate arrangement.

**False positives happen.** Confidence scores exist for a reason; treat anything under roughly 70-80% as "maybe" rather than a confirmed sighting, especially before you extrapolate that dataset column into a public species count.

## Why this is worth paying attention to

Most consumer bird-ID tools, like Cornell's own Merlin app, work by cloud inference on a photo or a short recording you actively capture. That's useful, but it only tells you about the birds you happened to notice and photograph. A passive, always-on, offline system flips that: it catches the birds that pass through at 5 AM while you're asleep, or the ones that call from deep in a tree you never looked at. Running it entirely on local hardware, with no ongoing API costs and no data leaving your network unless you opt into sharing it, is a good demonstration of what small, well-scoped machine learning models can still do without a subscription attached.

If you're already running a homelab or a few Raspberry Pis for other self-hosted projects, BirdNET-Go is a low-cost way to point some of that idle compute at something that produces a genuinely interesting, growing dataset about the place you live. And if the whole point is to actually look at it when you're not home, a one-line Pinggy tunnel is a lot less setup than anything else that gets you the same result.
