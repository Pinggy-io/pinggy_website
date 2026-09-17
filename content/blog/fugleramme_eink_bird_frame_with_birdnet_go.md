---
title: "The E-Ink Frame That Draws Only the Birds You Can Actually Hear"
description: "Fugleramme pairs a Raspberry Pi 5, an e-ink display, and the open-source BirdNET-Go acoustic classifier to turn real garden birds into hand-cut 19th-century illustrations - no camera, no cloud, no AI-generated art. Here's how it works, what it takes to build one, and how to check on it from your phone with Pinggy."
date: 2026-09-17T11:00:00+05:30
draft: false
tags: ["BirdNET-Go", "raspberry pi", "local ai", "iot", "Pinggy"]
categories: ["Technology", "Self-Hosting", "Hardware"]
og_image: "images/fugleramme_eink_bird_frame_with_birdnet_go/fugleramme_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEJ1aWxkIGFuIEUtSW5rIEJpcmQgSWRlbnRpZmljYXRpb24gRnJhbWUgYW5kIENoZWNrIG9uIEl0IFJlbW90ZWx5IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIHdvcmtmbG93IHRvIHJ1biBCaXJkTkVULUdvIG9uIGEgUmFzcGJlcnJ5IFBpLCBwb2ludCBGdWdsZXJhbW1lIGF0IGl0IHRvIHJlbmRlciBkZXRlY3RlZCBzcGVjaWVzIGFzIGhpc3RvcmljYWwgaWxsdXN0cmF0aW9ucyBvbiBhbiBlLWluayBwYW5lbCBvciB3ZWIga2lvc2ssIGFuZCByZWFjaCB0aGF0IGtpb3NrIGZyb20gb3V0c2lkZSB5b3VyIGhvbWUgbmV0d29yayB3aXRoIFBpbmdneS4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2V0IHVwIEJpcmRORVQtR28iLAogICAgICAidGV4dCI6ICJJbnN0YWxsIEJpcmRORVQtR28gb24gYSBSYXNwYmVycnkgUGkgNSB3aXRoIGEgVVNCIG1pY3JvcGhvbmUgc28gaXQgY2xhc3NpZmllcyBiaXJkIGNhbGxzIGxvY2FsbHkgd2l0aCBhIFRlbnNvckZsb3cgTGl0ZSBtb2RlbCBhbmQgZXhwb3NlcyBkZXRlY3Rpb25zIG92ZXIgaXRzIFJFU1QgQVBJLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIEZ1Z2xlcmFtbWUiLAogICAgICAidGV4dCI6ICJSdW4gdGhlIEZ1Z2xlcmFtbWUgaW5zdGFsbCBzY3JpcHQgb3IgRG9ja2VyIGltYWdlIGFuZCBwb2ludCBGVUdMRVJBTU1FX0RFVEVDVE9SX1VSTCBhdCB0aGUgQmlyZE5FVC1HbyBpbnN0YW5jZSwgb24gdGhlIHNhbWUgUGkgb3IgYW55d2hlcmUgZWxzZSBvbiB0aGUgbmV0d29yay4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiV2lyZSB1cCB0aGUgZS1pbmsgcGFuZWwgKG9wdGlvbmFsKSIsCiAgICAgICJ0ZXh0IjogIkNvbm5lY3QgYW4gSW5reSBJbXByZXNzaW9uIDEzLjMgaW5jaCBTcGVjdHJhIDYgZGlzcGxheSB0byB0aGUgUGk7IHdpdGhvdXQgb25lLCBGdWdsZXJhbW1lIHN0aWxsIHNlcnZlcyB0aGUgc2FtZSBjb2xsYWdlIGFzIGEgd2ViIGtpb3NrIG9uIHBvcnQgODA4MC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiTGV0IGl0IGZpbGwgaW4iLAogICAgICAidGV4dCI6ICJGdWdsZXJhbW1lIHBvbGxzIEJpcmRORVQtR28ncyBBUEkgYW5kIHJlZHJhd3Mgb25seSB3aGVuIGRldGVjdGVkIHNwZWNpZXMgY2hhbmdlLCBtYXRjaGluZyBlYWNoIG9uZSB0byBhIGhhbmQtY3V0IGhpc3RvcmljYWwgaWxsdXN0cmF0aW9uIHNpemVkIGJ5IGJvZHkgbWFzcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2hlY2sgb24gaXQgcmVtb3RlbHkgd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJGcm9tIHRoZSBQaSwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgwIGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgdGhhdCB0dW5uZWxzIHRvIHRoZSBsb2NhbCB3ZWIga2lvc2ssIHNvIHlvdSBjYW4gc2VlIHdoYXQgaGFzIHZpc2l0ZWQgeW91ciBnYXJkZW4gZnJvbSB5b3VyIHBob25lLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "fugleramme_eink_bird_frame_with_birdnet_go/fugleramme_banner.webp" "Illustration of a wooden picture frame on a wall showing three bird silhouettes of different sizes on a textured paper background, representing the Fugleramme e-ink bird frame" >}}

There's a picture frame hanging in a kitchen window in Bergen, Norway, and it only ever shows birds that are actually outside making noise right now. Not stock photos, not a rotating slideshow, not whatever a diffusion model imagined a robin might look like. A microphone picks up a chirp, an offline classifier decides which of 6,000-plus species made it, and within seconds a hand-cut illustration of that exact bird - lifted from a real 19th-century natural history plate - appears on the glass. When the garden goes quiet, the frame goes back to showing an empty perch.

The project is called <a href="https://github.com/arnegiacomo/fugleramme" target="_blank">Fugleramme</a> ("bird frame" in Norwegian), and it's a genuinely nice piece of engineering: a Raspberry Pi, a USB microphone, an e-ink panel, and roughly 800 pieces of public-domain art doing something no photo-based smart frame does, which is show you the truth about what's in your yard instead of a generic stock image of "robin."

{{% tldr %}}
1. **What it is**: <a href="https://github.com/arnegiacomo/fugleramme" target="_blank">Fugleramme</a>, an open-source e-ink frame for Raspberry Pi that listens for bird calls and renders whichever species it hears as a hand-cut historical illustration, live.
2. **The classifier**: <a href="https://github.com/tphakala/birdnet-go" target="_blank">BirdNET-Go</a>, a self-hosted Go rewrite of Cornell Lab's BirdNET acoustic model, does the actual species identification - fully offline, on the same Pi.
3. **The art rule**: over 800 cutouts covering 400+ species, every one taken from a real Scandinavian, British, or central European natural history plate. The project's own words: "no art is AI-generated, though some has been retouched with AI."
4. **The hardware**: a Raspberry Pi 5, an Inky Impression 13.3" e-ink panel, a mic, and an IKEA A4 frame. The e-ink panel is optional - it also runs as a plain web kiosk.
5. **The practical follow-up**: Fugleramme's kiosk binds to a local port, so if you build one, [Pinggy](/) gets you a public HTTPS URL to check what's visited your garden from your phone: `ssh -p 443 -R0:localhost:8080 free.pinggy.io`.
{{% /tldr %}}

## How it hears

The detection work happens entirely on the Pi, using <a href="https://github.com/tphakala/birdnet-go" target="_blank">BirdNET-Go</a>, a self-hosted "realtime soundscape analyser for birds, bats and other wildlife." It's built around <a href="https://birdnet.cornell.edu/home" target="_blank">BirdNET</a>, the acoustic model developed by the K. Lisa Yang Center for Conservation Bioacoustics at Cornell Lab of Ornithology together with Chemnitz University of Technology. BirdNET chops incoming audio into 3-second windows, converts each one into a spectrogram, and runs it through a convolutional network (an EfficientNetB0-style backbone) trained to recognize the vocalizations of more than 6,000 species worldwide, outputting a species label and a confidence score per window.

BirdNET-Go itself is a single static Go binary with the TensorFlow Lite model embedded directly in it, no Python runtime, no dependency install, just a binary you run or a Docker container you start. That's a deliberate departure from its predecessor, <a href="https://github.com/mcguirepr89/BirdNET-Pi" target="_blank">BirdNET-Pi</a>, the original Python-based project that got a lot of people into home bird monitoring but became harder to maintain as its dependency stack aged. BirdNET-Go's own web dashboard, built in Svelte, shows live spectrograms and detection heatmaps, and it can optionally swap in Google's Perch v2 model or add bat detection via BattyBirdNET. All of it runs locally and exposes what it hears over a REST API.

That API is the only thing Fugleramme actually talks to. It doesn't touch audio, doesn't run any models, and doesn't care whether BirdNET-Go is running on the same Pi or on a completely different machine on your network - the frame just polls a URL.

{{< image "fugleramme_eink_bird_frame_with_birdnet_go/fugleramme_pipeline.webp" "Diagram showing the Fugleramme pipeline: a USB microphone feeds BirdNET-Go, which classifies the sound and hands detections to Fugleramme, which renders a matching illustration on an e-ink display or web kiosk" >}}

## The art is the actual point

Most "AI bird camera" projects lean on a photo or, increasingly, a generated image. Fugleramme's author made a specific, stated choice not to do that. Half the project, by his own description, is "showing off some amazing public-domain natural-history illustrations": over 800 cutouts spanning more than 400 species, every single one taken from a real historical plate and hand-cut for this project. The README is blunt about the rule: "no art is AI-generated, though some has been retouched with AI." The plates come from Scandinavian, British, and central European sources, which is why coverage is strongest for birds you'd actually see in the Nordics, the British Isles, and Germany, and thinner everywhere else for now - broader European and North American coverage is explicitly planned.

The layout itself is thoughtful rather than a random grid. Each detected species is matched to its cutout, background-removed, and packed onto a textured paper page with larger birds placed toward the center and everything sized proportionally by actual body mass, pulled from <a href="https://opentraits.org/datasets/avonet.html" target="_blank">AVONET</a>, a published global functional-trait dataset for birds. A magpie doesn't render the same size as a wren just because both got detected in the last hour. When nothing has been heard, the frame shows a bare perch rather than a placeholder graphic.

The look itself has a specific source: a WWF Verdens naturfond poster by illustrator <a href="https://www.axelthorenfeldt.com/news/wwf-verdens-naturfonds-fugleskole" target="_blank">Axel Thorenfeldt</a>, hanging on the author's own wall, that he wanted a living version of - one that showed the actual birds in his actual garden instead of a fixed poster design. That's a nice detail because it explains why the project reads as art-directed rather than merely functional: someone had a specific picture in mind before they wrote a line of code.

## What it actually takes to build

The parts list is short. For the full build, the project recommends a Raspberry Pi 5 (2 GB is enough), a 32 GB+ microSD card, an active cooler ("not optional," since the classifier runs continuously), an <a href="https://shop.pimoroni.com/products/inky-impression" target="_blank">Inky Impression 13.3" (Spectra 6)</a> e-ink panel from Pimoroni at 1600x1200 resolution, a Clippy EM272Z1 microphone (described as "the gold standard for the birding and field-recording crowd") through a UGREEN USB sound card, the official 27W Raspberry Pi power supply, and an IKEA RÖDALM 21x30 cm frame.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Component</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Full build (with BirdNET-Go)</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Frame-only (points at a remote BirdNET-Go)</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Board</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Raspberry Pi 5, 2 GB</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Pi 5 (1 GB), Pi 4, or even a Pi Zero 2 W</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Cooling</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Active cooler - required for continuous classification</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Not needed - the Pi is just rendering, not classifying</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Storage</td>
  <td style="border:1px solid #ddd;padding:0.45em;">32 GB+ microSD (holds sound clips and artwork)</td>
  <td style="border:1px solid #ddd;padding:0.45em;">16 GB+ microSD</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Display</td>
  <td style="border:1px solid #ddd;padding:0.45em;" colspan="2">Inky Impression 13.3" (Spectra 6) - optional either way; web kiosk works without it</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Frame</td>
  <td style="border:1px solid #ddd;padding:0.45em;" colspan="2">IKEA RÖDALM 21x30 cm (A4), oak effect</td>
</tr>
</tbody>
</table>

The microphone is worth a second look because it's the one part where cost and quality genuinely trade off. The recommended Clippy EM272Z1 needs the 3.5mm-to-USB sound card adapter to work, but the project also lists a Boya BY-M1 lapel mic with a 6-meter cable as a budget fallback, and notes that a Clippy Ultra with phantom power extends detection up to 110 kHz - high enough to pick up bats, which is why BirdNET-Go supports a separate BattyBirdNET classifier for exactly that case.

Running it without any of this hardware is also a supported path. `uv run fugleramme-fake-detector` stands up a stand-in for BirdNET-Go on port 8090, and `uv run fugleramme-dev` starts the actual Fugleramme service on port 8080 with hot reload, so you can poke at the layout and rendering logic before you've bought a single part.

## It's quietly become a small genre

What's interesting from a distance is that Fugleramme isn't alone. Its own README lists half a dozen adjacent projects doing versions of the same idea, and the split in approach says something about where this kind of build tends to go: <a href="https://github.com/Twarner491/AvianVisitors" target="_blank">AvianVisitors</a> pairs BirdNET-Pi with AI-generated illustrations and photo cutouts, <a href="https://github.com/veteranbv/inky-bird-frame" target="_blank">inky-bird-frame</a> renders field-journal-style illustrations on an Inky panel from BirdNET, <a href="https://github.com/adamoberley/HABirdDashboard" target="_blank">HABirdDashboard</a> turns BirdNET-Go detections into a collage card inside Home Assistant, <a href="https://github.com/Belkins/belkins-birdnet" target="_blank">belkins-birdnet</a> renders detections in AI-generated kachō-e style, <a href="https://github.com/wr/featherframe" target="_blank">featherframe</a> puts real Audubon plates on a much cheaper ESP32-driven e-ink panel instead of a full Pi, and <a href="https://github.com/simenf/birdframe" target="_blank">birdframe</a> skips e-ink entirely and pushes several art styles to a Samsung Frame TV. Fugleramme's author is explicit that his project "shares no code or art with them," but the convergence is the interesting part: once an offline classifier good enough to run on a Pi exists, "turn detections into a piece of wall art" turns out to be an idea multiple people arrive at independently, and the main design fork in the whole genre is simply whether you're willing to hand illustration duty to a diffusion model or insist on real archival art.

## See it before you build it

You don't need any hardware to see the concept working. A live instance runs at <a href="https://fugleramme.arnegiacomo.dev" target="_blank">fugleramme.arnegiacomo.dev</a>, streaming straight from the author's own kitchen window in Bergen - whatever's shown there is whatever has actually been heard in that garden recently, not a demo reel. There's also a searchable <a href="https://arnegiacomo.dev/fugleramme/species/" target="_blank">species coverage list</a> if you want to check whether your local birds are likely to already have artwork before you commit to a build.

## Building one, and checking on it from your phone

If you do build one, the install is a single command on a fresh Raspberry Pi OS install:

```bash
curl -fsSL https://raw.githubusercontent.com/arnegiacomo/fugleramme/main/install.sh | bash
```

Or, if you'd rather run BirdNET-Go somewhere else on your network and just point the frame at it:

```bash
docker run -d -p 8080:8080 -v fugleramme:/data \
  -e FUGLERAMME_DETECTOR_URL=http://birdnet.local:8080 \
  ghcr.io/arnegiacomo/fugleramme
```

Either way, you end up with a web kiosk and admin panel bound to port 8080 on the Pi, in addition to whatever's drawn on the e-ink panel itself. That's genuinely useful beyond just admiring the build: the admin page lets you tune what gets shown, and the kiosk view is the same collage the e-ink panel renders, just reachable from any browser on your network. The catch is "on your network" - if you're at work and want to check whether anything interesting showed up in the garden, or you want to show a friend the live view without walking them through your router's port forwarding, that local-only binding is the thing standing in your way.

This is the same problem we've covered for other Pi-based projects, like getting a [Raspberry Pi reachable over a tunnel](/blog/raspberry_pi_tunnel/) or [accessing a Pi remotely to control IoT devices](/blog/access_raspberry_pi_remotely_to_control_iot_devices/) - and the fix is the same one-line SSH command each time. From the Pi:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy prints back a public HTTPS URL like `https://abc123.a.pinggy.link` that tunnels straight to the Fugleramme kiosk running on the Pi, no router configuration and no static IP required. Open that link from your phone and you're looking at the same live collage that's rendering on the e-ink panel at home. The free tier's link rotates and expires after an hour of inactivity, which is fine for the "let me just check what's out there right now" use case; if you want a stable link you can bookmark, a [paid Pinggy plan](/) gives you a fixed subdomain and optional basic-auth in front of the admin panel, which is worth doing before you share the URL with anyone else.

## Conclusion

What makes Fugleramme worth writing about isn't really the e-ink panel or even the offline classifier, both of which are established building blocks at this point. It's the discipline of the art constraint: it would have been considerably easier to point a diffusion model at a species name and call it done, and at least one of the adjacent projects in this space does exactly that. Choosing 800 hand-cut plates and a body-mass-aware layout instead is more work for a strictly worse "coverage" story - plenty of species still have no artwork at all - and that tradeoff is exactly what makes the result look like something worth framing rather than something a script generated. If you've got a Raspberry Pi, a spare afternoon, and a windowsill with a view of a bird feeder, the <a href="https://github.com/arnegiacomo/fugleramme" target="_blank">full build docs</a> have everything else you need.
