---
title: "RuView's 83,000 GitHub Stars and the np.random.rand() Behind Its WiFi X-Ray Claims"
description: "RuView promises WiFi that tracks your heartbeat and pose through walls using $9 ESP32 chips. An independent audit found the sensor code returning random numbers. Here's what's real and what isn't."
date: 2026-07-22T15:30:00+05:30
draft: false
tags: ["RuView", "WiFi DensePose", "GitHub trending", "GitHub stars", "vibe coding", "AI generated code", "open source", "ESP32", "CMU research"]
categories: ["Technology", "Open Source", "AI"]
og_image: "images/ruview_wifi_densepose_controversy/ruview_wifi_densepose_controversy_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "ruview_wifi_densepose_controversy/ruview_wifi_densepose_controversy_banner.webp" "Split graphic showing a WiFi router's signal passing through a wall toward a glowing pose skeleton, next to a code snippet reading amplitude = np.random.rand(num_antennas, num_subcarriers) flagged as not real CSI data, with a badge reading 83,088 GitHub stars" >}}

Here's the line that matters, sitting in `v1/src/hardware/csi_extractor.py` on line 84 of a GitHub repository with 83,000 stars:

```python
amplitude = np.random.rand(num_antennas, num_subcarriers)
```

That's the function that's supposed to read WiFi signal data off an ESP32 chip and turn it into a picture of a person walking around your living room, breathing, heart beating, through a wall. It doesn't read anything. It generates a random array and calls it a sensor reading.

The repo is RuView, also known as WiFi DensePose, and it's currently sitting near the top of GitHub's daily trending list with 83,088 stars. It promises to turn a $9 microcontroller into a camera-free body tracker: presence detection through walls, breathing rate, heart rate, a 17-point skeleton, fall detection, even sleep apnea screening. An independent code audit says large parts of that pipeline never worked, and GitHub users who've actually wired up the hardware are reporting exactly the kind of nothing you'd expect from a function that returns random numbers instead of real data.

{{% tldr %}}
1. RuView (aka WiFi DensePose) claims to turn cheap ESP32 chips into a through-wall body tracker, riffing on real research from Carnegie Mellon on WiFi-based human sensing.
2. An independent audit of the code found the CSI signal parser generating random data with `np.random.rand()`, neural networks with no trained weights, and benchmark numbers like "94.2% accuracy" and "100% test coverage" that have no way to be true.
3. The repo went from a few thousand stars to 25,800 by March, 55,000 by mid-May, and 83,088 today, climbing the entire time the audit and skeptical GitHub issues were public.
4. A GitHub issue titled "Vibe coded non functional project with fake inflated 3k+ github stars," along with the full audit, was deleted from the original repo. It survives as a fork.
5. The creator, Reuven Cohen, has publicly disputed the criticism. Meanwhile the project's release notes from the past few weeks show a real, if late, pivot toward actual hardware validation.
{{% /tldr %}}

## What RuView actually claims

The pitch is simple enough to go viral on its own: your WiFi router is already bouncing radio waves off everything in the room, including you. Route those reflections through the right model and you get a sensor that needs no camera, no wearable, and no line of sight. RuView's README lists, among other things:

- Presence detection and occupancy counting through walls, out to roughly 5 meters
- Breathing rate (6 to 30 breaths per minute) and heart rate (40 to 120 BPM)
- 17-keypoint pose estimation from WiFi signal alone
- Fall detection with alerting in under 2 seconds
- Sleep stage classification and apnea screening
- Native Home Assistant, Apple Home, Google Home, and Alexa integration over MQTT and Matter

Hardware cost is the hook: one ESP32-S3 board runs about $9, and the project claims a 4-bit quantized model that fits in 8KB of memory and runs in about a millisecond per frame on a Raspberry Pi. Multiple nodes mesh together for better spatial coverage, and a companion "Cognitum Seed" appliance (roughly $140 all-in) adds persistent storage and a catalog of over 100 "edge modules" for things like fall detection, intrusion alerts, and HVAC automation.

None of that is physically impossible on its face. WiFi-based human sensing is a real, published research area. The problem is what's actually running underneath the claims.

## The research it's borrowing credibility from

RuView's documentation leans hard on <a href="https://arxiv.org/abs/2301.00250" target="_blank">DensePose From WiFi</a>, a legitimate 2022 Carnegie Mellon paper by Jiaqi Geng, Dong Huang, and Fernando De la Torre. The CMU team really did train a neural network to map WiFi channel state information (CSI, the amplitude and phase of a wireless signal across every subcarrier and antenna pair) to dense human body surface coordinates, and it really did work well enough to publish.

The catch is the hardware. CMU's setup used specialized multi-antenna capture cards, Intel 5300 and Atheros AR9580 network interfaces built for MIMO (multiple-input, multiple-output) research, giving them dozens of independent spatial measurements per frame. An ESP32-S3, the chip at the center of RuView, has one antenna. RuView's answer is to mesh several $9 boards together to approximate what a real MIMO array does through antenna geometry, a substitution that several people who've looked at the code call unproven, at best, and at worst a rebrand of a research paper's credibility onto hardware that can't do the same job.

## What the audit actually found

A technical audit published as a fork, <a href="https://github.com/deletexiumu/wifi-densepose" target="_blank">deletexiumu/wifi-densepose</a>, walks through the original codebase function by function. Some of what it documents:

- **The CSI parser fabricates its input.** `ESP32CSIParser.parse()` in `v1/src/hardware/csi_extractor.py` generates `amplitude = np.random.rand(num_antennas, num_subcarriers)` instead of reading anything off the wire. A separate `RouterCSIParser._parse_atheros_format()` returns hardcoded mock data explicitly labeled a "placeholder implementation" in its own comments.
- **Feature extraction is also fake.** The Doppler feature extraction step in `v1/src/core/csi_processor.py` generates random noise rather than doing any actual signal analysis.
- **The neural networks were never trained.** `DensePoseHead` and `ModalityTranslationNetwork` are real, valid PyTorch model definitions, but the audit found no trained weights, no training scripts, no datasets, and no evaluation code anywhere in the repository. A claimed "94.2% pose detection accuracy" has nothing behind it to measure.
- **The README made claims with nothing to back them.** "100% test coverage" and "96.5% fall detection sensitivity" appeared in the documentation alongside a reference to a Docker image that, per the audit, never existed on Docker Hub.

Separately, GitHub users noticed the star count itself didn't track normal repo growth. Coverage from <a href="https://korben.info/en/wifi-densepose-fake-github-project-25000-stars.html" target="_blank">Korben</a> and others pointed to jumps like 1,300 to 3,000 stars overnight with zero new commits in between, the kind of pattern associated with purchased or farmed GitHub stars rather than organic interest.

A GitHub issue on the original repo, titled "Vibe coded non functional project with fake inflated 3k+ github stars," laid all of this out in one place. According to reporting on the incident, that issue, along with a full technical audit posted directly to the repo, was deleted by the maintainer. It's the reason the audit now lives on as an independent fork instead of a comment thread on the original project.

## The star count that wouldn't stop climbing

What makes this stranger than a typical "vibe-coded repo gets called out" story is the timeline. Getting exposed usually kills a project's momentum. This one kept accelerating.

{{< image "ruview_wifi_densepose_controversy/ruview_stars_timeline.webp" "Bar chart showing RuView's GitHub star count rising from 3,000 in February 2026, when it first hit GitHub trending, to 25,800 in March after an audit called it a facade, to 55,000 by mid-May, and 83,088 by July 2026" >}}

By the time <a href="https://www.techtimes.com/articles/316748/20260517/ruview-passes-55000-github-stars-wifi-sensing-law-it-outran-has-not-arrived.htm" target="_blank">Tech Times covered it passing 55,000 stars in mid-May</a>, the audit, the deleted issue, and multiple critical write-ups had already been public for close to two months. Two months after that, it's sitting at 83,088, still climbing, still on GitHub's daily trending feed. Whatever is driving that curve, it isn't waiting on anyone resolving the "does it actually work" question first.

## The creator's side

Reuven Cohen, the developer behind RuView (GitHub handle ruvnet), has pushed back directly on the criticism. Asked about the fake-data findings on LinkedIn, his response was blunt: "No this is not fake. Yes it actually works." He's positioned RuView as part of a broader personal ecosystem of AI infrastructure projects, and has continued shipping updates to the repo on a near-daily cadence through the controversy rather than walking away from it.

To be fair to that position: a repo that's actively raising money, or actively selling something, behaving this way would be a straightforwardly different story. RuView is MIT-licensed and free. Whatever is driving the star count and the defensiveness, it isn't a direct cash grab in the way a paid product would be.

## Real hardware, real silence

Away from the audits and the LinkedIn arguments, the most telling evidence comes from people who just tried to build the thing. <a href="https://github.com/ruvnet/RuView/issues/299" target="_blank">GitHub issue #299</a>, filed in late March, documents a user running two ESP32 nodes on the same router as their PC, following the setup instructions exactly. The WebSocket connection worked. The dashboard loaded. No skeleton ever appeared, no matter how much the person in front of the sensor moved around. A thread on the Home Assistant community forum, bluntly titled "Has anyone actually gotten RuView (WiFi DensePose) to work in real world?", asks the same question other users have been asking since March: has anyone, anywhere, gotten a real skeleton out of real hardware, not the simulator.

That's a hard question to spin. A UI that opens and a WebSocket that connects tell you the web stack works. They tell you nothing about whether the sensing pipeline underneath it does anything at all.

## Then, quietly, some of it started getting real

Here's the part that complicates a clean "it's all fake" verdict: RuView's own release notes from the last few weeks look different from the code the March audit tore apart.

The <a href="https://github.com/ruvnet/RuView/releases" target="_blank">releases page</a> shows a run of hardware-validated ESP32-S3 builds through June and July: v0.8.1 through v0.8.4 fix real bugs like CSI starvation on display-less boards, phantom sensor detection, and frame-rate miscounts, each one explicitly validated against physical hardware, with one release claiming 15-29 fps of sustained CSI streaming over 600-plus logged callbacks. A parallel set of releases adds real wire protocols for Qualcomm, MediaTek, and Realtek WiFi chipsets, each one carrying an explicit disclaimer that "simulator data is never presented as hardware data." The project also retracted its old, impossible 100% accuracy figure and replaced it with an honest 82.3% held-out accuracy number, alongside a real pretrained model on Hugging Face trained on 60,630 samples actually captured from two ESP32-S3 nodes over eight hours.

None of that erases what the audit found in February and March. But it's a genuinely different codebase than the one that got called a facade, whether that's an honest correction under pressure or just staying one release ahead of the next audit is something only time, and someone independently reproducing the current claims on their own hardware, will settle.

## What this says about GitHub trending in 2026

The uncomfortable pattern here isn't really about one repo. It's that an LLM can now write a README, a test suite, a benchmark table, and a plausible-looking model architecture referencing real published research, all of which reads exactly like a working project right up until someone opens the file that's supposed to talk to the hardware. That's the same asymmetry we wrote about with {{< link href="/blog/curl_ai_slop_summer_of_bliss/" newtab=false >}}curl's AI-slop bug reports{{< /link >}}: generating something that looks legitimate now costs a prompt, verifying it still costs a person reading code line by line. Stars, trending badges, and even a full README with citations are all things an LLM can produce convincingly. Whether the CSI parser reads real antenna data or calls `np.random.rand()` is not.

## How to actually vet a viral repo

A few habits would have caught this one in about five minutes, and they generalize to the next viral repo that shows up in your feed:

1. **Check commits against stars.** A repo with 25,000 stars and 35 commits, or one that jumps by thousands of stars overnight with no new activity, is not growing the way real interest grows.
2. **Read the code that talks to hardware or the network first.** Model architectures and dashboards are the easy part to fake convincingly. The function that's supposed to read a physical sensor or parse a real protocol is where a facade runs out of places to hide.
3. **Search the issues for the word "fake" or "scam" before you trust the README.** If a critical issue or audit was posted and then deleted, that's usually visible in forks, mirrors, or a quick search, and it's a bigger signal than anything in the marketing copy.
4. **Look for independent reproduction, not just the maintainer's own demo videos.** A live GitHub issue full of users unable to reproduce basic functionality on real hardware outweighs a polished README every time.
5. **Treat benchmark numbers without a dataset, training script, or eval code as marketing, not evidence.** "94.2% accuracy" with no way to check it is a claim, not a result.

## Conclusion

RuView is a genuinely useful case study precisely because it doesn't resolve neatly. In February and March, independent audits found a WiFi sensing pipeline that generated its core signal data with a random number generator, wrapped in real-sounding citations to legitimate CMU research and benchmark numbers nobody could reproduce. The star count kept climbing through all of it. By July, at least some of the hardware-facing code looks like an honest attempt to build the real thing, sitting in the same repository that got called a facade five months earlier.

If you've got 83,000 stars pointing you toward a project, that number alone tells you people clicked a button. It doesn't tell you what the code does when you plug in the hardware. For that, you still have to go read `csi_extractor.py` yourself.
