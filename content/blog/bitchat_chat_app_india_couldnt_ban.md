---
title: "Bitchat: The Chat App India Tried to Ban and Couldn't"
description: "India's cybercrime unit gave GitHub three hours to take down Bitchat, Jack Dorsey's Bluetooth mesh chat app, after protesters used it to organize through internet shutdowns. The repo is still up. Here's how the protocol actually works, and why a takedown notice doesn't do much against it."
date: 2026-07-30T14:15:00+05:30
draft: false
tags: ["bitchat", "bluetooth mesh", "decentralized messaging", "nostr", "censorship resistance", "peer-to-peer", "networking", "privacy", "open source"]
categories: ["Technology", "Networking", "Privacy"]
og_image: "images/bitchat_chat_app_india_couldnt_ban/bitchat_chat_app_india_couldnt_ban_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "bitchat_chat_app_india_couldnt_ban/bitchat_chat_app_india_couldnt_ban_banner.webp" "Diagram illustrating that Bitchat's Bluetooth mesh network has no central server for a takedown notice to target, with peer nodes routing around a blocked node" >}}

On July 24, 2026, India's Indian Cyber Crime Coordination Centre (I4C) sent GitHub a notice asking it to pull the repositories for an app called Bitchat. Reports on the order's exact wording vary, but several outlets that saw it described a turnaround window measured in hours, not days. As of this writing, the main repository is still live, GitHub hasn't confirmed whether it received the notice, and the app never had a server to actually shut down in the first place.

Bitchat is a messaging app built by permissionlesstech, the small dev shop Jack Dorsey has been backing, and its whole pitch is that it doesn't need an internet connection, a phone number, or an account to work. It routes encrypted messages phone-to-phone over Bluetooth Low Energy, hopping through nearby devices until one of them is the recipient. When Wi-Fi and cell networks disappear, which is exactly what happens during the kind of protests Bitchat just got tangled up in, that architecture stops being a neat privacy feature and starts being the only channel left.

{{% tldr %}}
1. **What it is**: a dual-transport chat app, Bluetooth LE mesh for local, offline delivery, and the <a href="https://nostr.com/" target="_blank">Nostr</a> protocol for internet-based global reach. No accounts, no phone numbers, no central server.
2. **How the mesh works**: messages hop through nearby phones with a TTL that starts at 7, get deduplicated with an LRU cache, and use Noise-protocol encryption (XX for live sessions with forward secrecy, X for offline "courier" delivery without it).
3. **The news hook**: since July 20, 2026, student-led protests in Delhi against a national exam scandal have used Bitchat to keep organizing through repeated internet shutdowns. Downloads in India reportedly jumped 32x in a single day and accounted for roughly 85% of the app's global installs that week.
4. **The response**: India's I4C sent GitHub a takedown notice targeting Bitchat alongside two other mesh-messaging apps, Briar and Bridgefy. Digital rights groups say the legal basis is shaky, since the notice targets a piece of open source software rather than any specific illegal content.
5. **Why it's hard to actually take down**: the code is public domain (iOS) and MIT-licensed (Android), already forked in multiple places, and already installed as APKs and IPAs on phones that don't need GitHub to keep running. Removing a repo doesn't uninstall an app.
6. **The tradeoff**: the project's own whitepaper is upfront that metadata, not message content, is the weak point. A static 8-byte peer identifier makes it possible to passively track who's talking to whom, even though the actual message text is encrypted.
{{% /tldr %}}

## What Bitchat actually is

Strip away the news cycle and Bitchat is a fairly small, focused piece of engineering: a peer-to-peer messenger with two independent transports that it switches between automatically.

The first is a **Bluetooth Low Energy mesh**. Phones running the app discover each other over BLE, form direct links, and relay messages for one another so that a message can travel further than any single Bluetooth radio's range by hopping device to device. No internet connection is involved anywhere in that path.

The second is **Nostr**, the same decentralized relay protocol some people know from the fediverse-adjacent social app space. When a message needs to go further than Bluetooth range, or reach someone who isn't nearby, Bitchat seals it and pushes it out over a network of more than 290 public Nostr relays, which the recipient's phone can pull from whenever it next has internet access.

Both paths skip the parts of a normal messaging app that require a company behind them: no phone number verification, no account database, no push notification service tied to your identity, no central server logging who messaged whom. The iOS client is released into the public domain; the {{< link href="https://github.com/permissionlesstech/bitchat-android" >}}Android client{{< /link >}} is MIT-licensed. The project's {{< link href="https://github.com/permissionlesstech/bitchat/blob/main/WHITEPAPER.md" >}}whitepaper{{< /link >}} is refreshingly direct about what that buys you and what it doesn't, which is worth reading before assuming "decentralized" means "unbreakable."

## How a message actually gets from your phone to mine

The mesh layer is the more interesting engineering problem, because BLE wasn't designed for multi-hop relay and the whitepaper's design choices show it.

Every device generates two keypairs: a Curve25519 pair for encryption and an Ed25519 pair for signing. Your stable identifier on the network isn't your name or number, it's the first 8 bytes of the SHA-256 fingerprint of your Noise static key. That ID persists across sessions unless you deliberately rotate your identity.

When you send a message, it goes out with a **time-to-live of 7 hops**. If the local mesh is dense (six or more active connections), relayed copies get capped at TTL 5 to avoid flooding a crowded room with redundant traffic; on a sparse chain of two or fewer links, packets relay at the full depth instead, because there's less risk of a broadcast storm. Every relaying phone keeps an LRU cache of the last 1,000 packet IDs it's seen, with a 5-minute expiry, so it doesn't rebroadcast something it already forwarded. Relays add 10-220ms of random jitter before rebroadcasting, which keeps a room full of phones from all retransmitting in lockstep. When two devices have already established a confirmed bidirectional path, Bitchat switches to source routing along that known path instead of flooding the mesh.

Encryption depends on what kind of delivery is happening:

- **Live sessions** between two connected peers use Noise XX, giving mutual authentication and forward secrecy over ChaCha20-Poly1305.
- **Offline "courier seals"**, one-way encrypted messages left for someone who isn't currently reachable, use Noise X. You get authentication, but not forward secrecy: if your static key is ever compromised, previously stored ciphertext for you becomes readable.
- **Messages routed through Nostr** get wrapped in nested XChaCha20-Poly1305 layers, with the innermost message sealed, then re-encrypted inside a public envelope using a one-time key, so relay operators see encrypted blobs, not identifiable message metadata.

{{< image "bitchat_chat_app_india_couldnt_ban/bitchat_chat_app_india_couldnt_ban_dual_transport.webp" "Diagram showing Bitchat's two delivery paths: a Bluetooth LE mesh relaying through nearby phones with a TTL of 7 hops, and a Nostr relay bridge reaching phones anywhere with internet access" >}}

Store-and-forward is its own small subsystem. A sender keeps up to 100 messages per peer in an outbox with a 24-hour TTL, sealed and persisted to disk. A "courier" system lets trusted relay phones carry encrypted envelopes for someone who's offline, tagged with rotating daily HMAC-based recipient tags so the courier can't easily tell who the final recipient is, with quota limits (5 messages for mutual favorites, 2 for other verified peers) and an 8-copy budget so one popular message doesn't monopolize a courier's storage. Public, non-directed messages get gossiped between phones via a 1,000-packet cache synced every 15 seconds using GCS filter reconciliation, with a 6-hour retention window.

## Where the whitepaper is honest about the weak points

This is the part worth paying attention to, because it's easy to hear "end-to-end encrypted mesh network" and assume the whole thing is airtight. The project's own documentation says otherwise, in plain language: "metadata is the weakest part of this design."

The static 8-byte peer ID, useful for maintaining identity across sessions, also means an observer within Bluetooth range can passively enumerate who's present and correlate that presence across locations over time. Announced static keys and the neighbor adjacency lists phones exchange to build the mesh leak network topology to anyone listening. Store-and-forward courier envelopes and Nostr-routed private messages don't have forward secrecy, so a compromised static key exposes previously retained ciphertext. And there's no unlinkable presence mechanism: only Noise-encrypted and handshake packets get padded out to fixed buckets of 256, 512, 1024, or 2048 bytes; ordinary public messages, announcements, and file transfers go out at their natural length, which makes their approximate size observable to anyone sniffing the local Bluetooth traffic.

None of that undermines the core promise of no-infrastructure delivery. But if you're evaluating Bitchat for a use case where "who talked to whom" is as sensitive as "what did they say", the whitepaper itself is telling you to think harder about that before you rely on it.

## The mesh under real load, before India

Bitchat's stress tests over the past several months read like a tour of places where the ordinary internet became unreliable or unsafe to use. It saw adoption during unrest in Madagascar, and usage climbed in Jamaica after Hurricane Melissa knocked out enough communications infrastructure that Bluetooth relay became a practical fallback rather than a novelty.

The clearest test case, though, was Uganda's January 2026 presidential election. Uganda's 2021 election was followed by a nationwide internet blackout that lasted more than four days, something opposition figures argued helped enable electoral fraud by cutting off independent reporting. Ahead of the 2026 vote, opposition leader Bobi Wine urged supporters to download Bitchat as insurance against a repeat shutdown. According to one of the app's pseudonymous developers, hundreds of thousands of Android installs happened in Uganda in the days around the election, roughly 1% of the country's population, entirely through a channel that doesn't depend on the networks a government can switch off.

## Then Delhi happened, and so did the takedown notice

In mid-July 2026, student-led protests broke out across Indian cities under a banner some organizers call the "Cockroach Janta Party," a pointed jab at the ruling party, directed at a national exam scandal and broader corruption complaints. Demonstrations centered on Delhi's Jantar Mantar drew tear gas and baton charges from police, and, per multiple reports, the kind of intermittent connectivity restrictions that have become a standard crowd-control tool in the region.

Bitchat usage in India spiked hard during that window. Reported figures put India at roughly 85% of the app's global downloads between July 17 and July 23, with installs jumping about 32-fold in a single day (July 19) and more than 91,000 downloads across those five days.

That's the spike that got the government's attention. India's Ministry of Home Affairs, through the I4C, expanded a crackdown on Bluetooth-based mesh messaging apps, issuing takedown notices covering Bitchat alongside two similar tools, {{< link href="https://briarproject.org/" >}}Briar{{< /link >}} and {{< link href="https://bridgefy.me/" >}}Bridgefy{{< /link >}}. The stated rationale, according to reporting on the notices, is that these apps enable anonymous communication without registration or centralized logging, which the government argues hinders law enforcement.

Digital rights groups pushed back quickly on the legal footing. The Internet Freedom Foundation argued that what a repository takedown actually accomplishes is preventing public scrutiny of the underlying code, not stopping anyone from using an app already installed on their phone. Raman Chima, a policy lead at the digital rights group {{< link href="https://www.accessnow.org/" >}}Access Now{{< /link >}}, made a related point to reporters: the order wasn't just targeting a service the way a typical app-store takedown does, it was effectively arguing that open source development of this category of software shouldn't happen at all. That's a different, much broader claim than "remove this specific illegal content," and it's not clearly something the cited legal provisions actually authorize.

As of the most recent reporting, Bitchat's primary GitHub repository was still reachable from India, and GitHub hadn't confirmed receiving the notice or logged it in its public repository of government takedown requests.

## Why "take down the repo" doesn't take down the app

This is the part that should be obvious to anyone who's spent time around open source distribution, but is apparently less obvious to whoever drafted the notice. A GitHub repository is where code is developed and published. It is not a runtime dependency for software that's already on someone's phone.

Bitchat's iOS app is released into the public domain; the Android app is MIT-licensed. Both facts mean anyone can already have a full copy of the source, can mirror it to any of a hundred other hosts, and has every legal right to do so. The app itself, once installed as an IPA or APK, doesn't phone home to GitHub to keep functioning; it talks to nearby Bluetooth radios and to Nostr relays, neither of which GitHub controls. Removing the repository doesn't uninstall the app from a single device already using it during a protest, and it does nothing to the Bluetooth radios and Nostr relays the app actually depends on at runtime.

That's the structural difference between banning a **platform** and banning a **protocol**. You can meaningfully deplatform a company: cut off its AWS account, pull its app store listing, serve its registrar a court order. Bitchat doesn't have most of those pressure points, because it wasn't built to. The tradeoff is real: no company also means no one to call when something goes wrong, no customer support, and a project that depends on a small volunteer team continuing to maintain it. But as a response to "we want this specific tool to stop existing," a GitHub takedown notice is a mismatch for what the tool actually is.

## The bigger point for anyone building communication tools

Whether or not you think circumventing a government internet shutdown is a good use case, Bitchat is a useful data point for anyone designing systems meant to survive adversarial conditions: censorship resistance isn't a feature you bolt onto a centralized service after the fact. It's a property that falls out of the architecture, specifically out of not having a single company, server, or app-store listing that a single order can reach.

That's also why this is a fundamentally different problem than the one most developers deal with day to day. If you're building a normal product, exposing a local server to the internet for testing, demos, or a webhook integration, you want the opposite of Bitchat's model: a stable, reachable public endpoint you control. That's a solved problem with tools like [Pinggy](https://pinggy.io), which turns a localhost port into a public HTTPS URL with one SSH command. Bitchat's whole design point is refusing that trade for a use case where a reachable public endpoint is exactly what an adversary would shut down first. Different problems, different architectures, and it's worth being clear about which one you're actually solving before reaching for either.
