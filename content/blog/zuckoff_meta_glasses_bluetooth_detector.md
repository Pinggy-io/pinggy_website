---
title: "ZuckOff: The Bluetooth Fingerprint That Gives Away Meta's Camera Glasses"
description: "ZuckOff is a free app that listens for the Bluetooth broadcasts camera glasses give off and matches them against a catalogued list of manufacturer IDs. Here is exactly how the detection works, what it can't tell you, and why a solo developer built it."
date: 2026-09-21T11:00:00+05:30
draft: false
tags: ["smart glasses", "privacy", "Bluetooth", "wearables"]
categories: ["Technology", "Security", "Privacy"]
eyebrow: "Privacy Tech"
og_image: "images/zuckoff_meta_glasses_bluetooth_detector/zuckoff_meta_glasses_bluetooth_detector_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "zuckoff_meta_glasses_bluetooth_detector/zuckoff_meta_glasses_bluetooth_detector_banner.webp" "Illustration of a phone detecting a Bluetooth signal broadcast by nearby camera glasses" >}}

Camera glasses give themselves away before they ever record a frame. Every time a pair of Ray-Ban Meta, Oakley Meta, or Snap Spectacles is within Bluetooth range, it broadcasts an advertisement packet carrying a manufacturer ID, a short number baked into the chip that identifies who made it. If you know which numbers belong to which glasses, you can write an app that listens for exactly that and tells someone when a pair is nearby. That is the entire mechanism behind <a href="https://zuckoff.app" target="_blank">ZuckOff</a>, a free iOS and Android app built by one developer that has picked up roughly 5,000 users since it landed in the App Store last month.

The developer is Pawel Szydlowski, a 30-year-old Polish programmer who bought several models of camera glasses, captured what they broadcast, and built a matching catalog from the captures. His reasoning for building it is blunt: "We as a society have the right to at least know that someone is recording." He isn't claiming the app can prove recording is happening. It can't. What it does is turn something invisible, a nearby camera you'd otherwise have no way to notice, into something you can at least glance at.

{{% tldr %}}
1. **The mechanism**: camera glasses broadcast a Bluetooth Low Energy advertisement packet with a manufacturer ID or service UUID. ZuckOff matches those IDs against a catalog built from real devices its developer bought and captured.
2. **What it flags**: `0x0D53` (Luxottica: Ray-Ban Meta, Oakley Meta), `0x058E` (Meta Platforms Technologies wearables), `0x03C2` (Snap Spectacles), and `0xFD5F` (a service UUID registered to Oculus VR), plus product names like "Spectacles" or "VisionPro" at lower confidence.
3. **What it can't tell you**: whether the camera is actually recording, who is wearing it, or which direction it's pointed. Some standalone models also stay silent on Bluetooth while worn.
4. **Why it exists right now**: Meta is unveiling camera-free glasses at Connect on September 23, after Reality Labs racked up roughly $88 billion in cumulative losses and the company launched paid subscription tiers to shore up revenue elsewhere.
5. **The app itself**: free, no account, nothing leaves the phone. A paid tier adds background alerts; the free tier already logs every Bluetooth device it hears and lets you export the log as CSV.
{{% /tldr %}}

## How the detection actually works

Bluetooth Low Energy devices don't wait to be asked before they talk. To let phones and accessories find them, most BLE hardware continuously broadcasts small advertisement packets, a few dozen bytes announcing that it exists, roughly how far away it might be based on signal strength, and often a manufacturer-specific data field that identifies the chipset or company behind it. That last field is the one ZuckOff reads. It isn't a hack or an exploit; the packets are public by design, the same way a Wi-Fi router broadcasts its network name to anyone nearby.

Szydlowski's catalog maps that manufacturer data back to real products, and the app publishes the mapping instead of hiding it:

- `0x0D53` &rarr; Luxottica: Ray-Ban Meta, Oakley Meta
- `0x058E` &rarr; Meta Platforms Technologies wearable
- `0x03C2` &rarr; Snap: Spectacles
- `0xFD5F` &rarr; a service UUID registered to Oculus VR

Below that tier, the app also flags product names it sees in plaintext, like "Spectacles," "HeyCyan," or "VisionPro," but at lower confidence, since a name string is easier to spoof or coincidentally match than a registered manufacturer ID. Every one of those rules, per the app's own description, "comes from a capture of a real device." Szydlowski says he owns only a few pairs and is actively asking owners of unlisted hardware to send him a short Bluetooth capture, or to loan him the glasses, so the catalog can grow. It's a crowdsourced fingerprint database bootstrapped by one person buying hardware out of pocket.

The rest of the app is straightforward once the detection layer exists: it shows the evidence behind every flag instead of a bare "camera nearby" warning, logs every Bluetooth device it hears whether or not it matches (so you can audit the app's own behavior), lets you mark glasses you own so they stop raising alerts, and exports the whole log as CSV. On iPhone that extends to a Lock Screen Live Activity and a Home Screen widget; on both platforms you can start and stop a scan from Siri, Shortcuts, or an automation. None of it requires an account, and per the app's privacy claim, nothing leaves the phone.

## What it can't tell you

The app is upfront about its own limits, and they're worth repeating because they undercut the "recording detector" framing that headlines about it tend to use. Glasses broadcast loudest at the moments you'd least expect to need a warning: powering on, pairing, or coming out of the case. Most pairs keep advertising continuously while worn, which is what makes detection possible at all, but the app's own documentation notes that "a few standalone models stay silent." Quiet doesn't mean nobody's recording, and a detection doesn't mean anyone is either, it means camera-capable hardware is somewhere in Bluetooth range. Signal strength gives a rough distance, not a direction, so ZuckOff can tell you a pair is close without telling you where to look.

Third-party testing backs up the same picture: the app identifies nearby hardware capable of recording, not an active recording session, and it can't identify who's wearing the glasses. That's a meaningful gap for anyone hoping this closes the loop on consent, and it's one the developer doesn't paper over.

## The LED that keeps getting patched around

Meta's own answer to exactly this problem is a small white LED that lights up while the camera is recording, meant to signal bystanders the way a red light does on a camcorder. It has been trivial to defeat almost since launch. <a href="https://www.engadget.com/2227710/a-dollar2-sticker-let-me-bypass-the-meta-glasses-anti-creep-feature/" target="_blank">Engadget tested a $16.99 kit of a dozen stickers</a> sold on Amazon and TikTok Shop: a notched clear layer over the sensor and a black sticker over the light itself, cheap enough per sticker that the outlet's headline rounded it down to "a $2 sticker." Worn outdoors on second-generation Ray-Ban Meta glasses, the LED became undetectable and never tripped Meta's own tamper warning. For anyone willing to spend more, hobbyists have also physically removed the LED for around $60, leaving the glasses looking stock.

Meta has been chasing the loophole in software ever since. An earlier fix targeted the moment recording starts: if the LED was already covered, the camera would refuse to record. The gap left open was starting a recording first and covering the light after. <a href="https://9to5google.com/2026/08/28/meta-ray-ban-smart-glasses-privacy-led-loophole-update/" target="_blank">An update that began rolling out on August 28, 2026</a> closes that too. Per Meta's VP of AR, "the camera will now stop working if the light is covered during a recording." It's an incremental fix to a signal that keeps getting worked around, and it's part of why a detector that reads something harder to disable, a hardware manufacturer ID rather than a light, is a meaningfully different kind of check. You can't sticker over a Bluetooth radio without also breaking the reason the glasses have one.

## Why this is landing now

Meta is not standing still on any of this. On September 15, 2026, the company launched <a href="https://americanbazaaronline.com/2026/09/15/instagram-whatsapp-and-facebook-are-getting-a-paid-upgrade-meta-one-starts-at-2-99-488192/" target="_blank">Meta One</a>, a bundle of paid tiers across Instagram, Facebook, WhatsApp, and Meta AI starting at $2.99 a month and running up to $499 for business accounts, a clear push for revenue outside advertising. Two days from now, at Connect on September 23, Meta is expected to unveil Luna: glasses with <a href="https://techcrunch.com/2026/09/16/after-accusations-of-selling-perv-glasses-meta-prepares-to-sell-a-pair-without-a-camera/" target="_blank">no camera at all</a>, replaced by six onboard microphones, a temple button for summoning the AI assistant, and slimmer arms, shipping this fall in two versions codenamed Clubmaster and Burbank. TechCrunch's framing of the move is pointed: Meta is building a pair "without integrated spy equipment," months after the current camera-equipped line drew accusations of enabling exactly the kind of covert filming ZuckOff is trying to surface.

The money underneath both moves is not subtle. Reality Labs, Meta's hardware and metaverse division, lost about $4 billion in the first quarter of 2026 and another $4.6 billion in the second, pushing its cumulative losses since the division's creation to roughly $88 billion. Camera-equipped glasses have been the one bright spot in that division's sales, and they're also the source of a growing privacy backlash: venues from cinemas to schools to pubs in the UK have started banning them outright. Meta building a camera-free variant and layering subscription revenue on top of its core apps in the same month reads less like a coincidence and more like a company hedging against the exact criticism an app like ZuckOff exists to make visible.

## A small coincidence in the name

The app's name is a jab at Mark Zuckerberg, but it also happens to be the surname of a real, unrelated person: Mitchell Zuckoff, a journalism professor who found out about the app through news coverage. He decided not to pursue it. By his own account, he had more pressing things to focus his attention on, including work related to child surveillance protection. It's a footnote, but it's a good one, a reminder that the app's target audience overlaps with people who think hard about surveillance for a living, not just people annoyed at gadget blogs.

## Detection as a category, not a one-off

ZuckOff isn't the only tool doing this. Similar Bluetooth-based detectors already exist for Android, and the pattern is bigger than any single app: as camera-equipped wearables ship by the million with no built-in way for bystanders to opt out, independent developers are quietly building the accountability layer the manufacturers didn't. None of it needs venture funding. The whole stack is a phone's Bluetooth radio, a catalog of manufacturer IDs built by buying hardware and capturing packets, and a UI that shows its work instead of hiding behind a black-box warning. The free tier does the actual detection; a $9.99-a-year or $24.99-lifetime Pro tier funds background alerts and, per the developer, the next pair of glasses worth capturing. That's a strange but honest business model: the privacy tool doesn't monetize your data, because there isn't any to sell, it monetizes convenience, and it grows exactly as fast as one person can afford new hardware to reverse-engineer. For an audience used to shipping niche tools solo, that's the more interesting story here: not that camera glasses can be detected, but that detecting them didn't require anyone's permission, an app store partnership, or a dollar of outside funding to ship.
