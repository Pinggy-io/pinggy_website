---
title: "Cobalt Turns a Kobo E-Reader Into a Tiny App Platform"
description: "Cobalt is an open-source Rust SDK, signed app store, and sandboxed runtime that lets a stock Kobo Clara BW install and run real apps over Wi-Fi. Here's how it works, what ships in the store, and where it breaks down."
date: 2026-08-22T11:00:00+05:30
draft: false
tags: ["Kobo", "open source", "rust", "developer tools"]
categories: ["Technology", "Developer Tools", "Open Source"]
og_image: "images/cobalt_kobo_e_reader_apps/cobalt_kobo_hero.webp"
outputs:
  - HTML
  - AMP
---

{{< image "cobalt_kobo_e_reader_apps/cobalt_kobo_hero.webp" "Illustration of a Kobo e-reader running the Cobalt app store, showing a grid of app icons for RSS, News, Terminal, arXiv, and other tools on an e-ink screen" >}}

A Kobo Clara BW is a $159.99 e-reader with a 6-inch E Ink Carta screen, a low-power ARM chip, and firmware that does exactly one job: show you books. <a href="https://github.com/BandarLabs/Cobalt" target="_blank">Cobalt</a> changes that. It's an open-source project that layers a launcher, a signed app store, a Rust SDK, and a sandboxed runtime on top of stock Kobo firmware, so the device can install and run real third-party apps over Wi-Fi after one initial USB setup.

{{% tldr %}}
1. Cobalt is an open-source app platform for Kobo e-readers, built by BandarLabs and released under AGPL-3.0.
2. One USB pass installs the platform; every app after that installs, updates, and removes itself over Wi-Fi through a signed App Store.
3. The launch catalog ships 18 apps, including an RSS reader, a Hacker News client with full comment threads, a terminal emulator, and an OPDS library browser.
4. Apps are static ARMv7 Rust binaries that run as unprivileged processes and have to request access to Wi-Fi, storage, or the frontlight, capability by capability.
5. Only the Kobo Clara BW (model N365) has been hardware-tested. Other models are refused, not guessed at.
6. The Hacker News thread praised the idea and picked apart the AI-generated marketing copy on the project's own site, which is worth knowing before you read the docs.
{{% /tldr %}}

## What actually ships

Cobalt isn't a single hack, it's four pieces working together:

- **A launcher** that shows installed apps and always keeps a route back to the stock Kobo reading experience.
- **An App Store** that reads signed catalogs and installs, updates, or removes apps over Wi-Fi.
- **A Rust SDK** (`kobo-sdk`) for writing new apps against a declarative screen API.
- **A runtime** (`kobod`) that launches each app as its own unprivileged process on the device.

The repository keeps these as separate crates: `kobo-sdk` for the public API, `kobod` for the on-device runtime, `kobo-ui` for layout and rendering, `kobo-sim` for a browser-based simulator, and `kobo-cli` for the tooling that ties it together. Everything compiles down to static ARMv7 binaries, so there's no dependency on a package manager living on the reader itself.

## Getting it onto the device

The first install still needs a cable:

```
git clone https://github.com/BandarLabs/Cobalt.git
cd Cobalt
rustup target add armv7-unknown-linux-musleabihf
cargo run -p kobo-cli -- setup
```

That flashes the platform onto the device's storage partition over USB. It's an explicit, one-time step, and the project is upfront that it modifies the reader's storage without a warranty. After a reboot, Cobalt shows up in the Kobo menu, and from there the App Store takes over: it pulls signed catalogs straight from GitHub releases, so shipping a new app or an update to users doesn't require a new platform release or another USB session. Merging an app pull request triggers a build, a signature, and a catalog update, and the app just appears in Store.

Rebooting the device drops you straight back into the stock Kobo reading firmware. Cobalt doesn't touch the boot chain, which is a deliberate, low-risk way to bolt a second OS-like layer onto hardware you didn't design.

## What you can actually run

The launch catalog leans toward things that make sense on a low-power, monochrome, slow-refresh screen rather than trying to turn the reader into a phone. The 18 apps include an RSS reader, a Hacker News client with full comment threads, a terminal emulator, a Morse code beacon, a Sudoku board, and Gutenbird, an OPDS client that reads Project Gutenberg, Standard Ebooks, Open Library, or any library you point it at. There's also an audiobook app that researches, writes, and narrates original audiobooks, and a Daily Brief tool that collects the day's stories in the background while you're using something else.

Sudoku was deliberately left out of the USB install package. It only ships through the Store, specifically to prove that Wi-Fi delivery actually works end to end before anyone trusts it with anything more important.

## Building your own app

The SDK is built around a `KoboApp` trait and a `ScreenBuilder` API. You describe screens declaratively, text, tiles, dialogs, keyboards, pagination, and the runtime handles layout math, partial-refresh planning for the E Ink panel, navigation, and app lifecycle. That partial-refresh piece matters more than it sounds: E Ink displays are slow to redraw and prone to ghosting if you refresh the whole panel for every small UI change, so the SDK tracks which regions actually changed and only repaints those.

Access to anything outside the sandbox, network, local storage, the battery indicator, the frontlight, Bluetooth, audio, goes through capability requests. An app asks for Wi-Fi or storage access and gets either a grant or a typed error it has to handle, rather than raw device access it can assume will always work. You can build and test entirely without hardware using `cargo run -p kobo-cli -- run --sim --app <name>`, which runs the app against a Clara BW simulator in a browser.

## The security model behind Wi-Fi installs

Letting a device install unsigned binaries over Wi-Fi is exactly the kind of feature that goes wrong if you skip the verification chain. Cobalt's runtime checks "the catalog, the package, the installed manifest and the binary before an app runs," according to the project's own documentation, before any code executes. Each app package ships as one signed ARM executable plus a signed manifest, and the store's catalog itself is signed too, so a compromised catalog host can't silently swap in a different binary for an app you already trust.

## Where it breaks down

Only the Clara BW, model N365, has actual hardware testing behind it. The README is explicit that other Kobo models are "refused, not guessed at": if you're not on tested hardware, Cobalt won't try to run on it and quietly fail in some unpredictable way, it just won't install. Anyone wanting to port it to another model is asked to open an issue first rather than attempt it blind, which is a sane way to avoid bricked devices from a project run by a small team.

The <a href="https://news.ycombinator.com/item?id=49390427" target="_blank">Hacker News thread</a> split roughly three ways. Some people liked the idea enough to go buy a Clara BW specifically to try it. Others pushed back on the philosophy, with commenter luciana1u summing it up as "an e-reader running apps feels like putting a treadmill in a library." The most pointed criticism, though, wasn't about the code, it was about the copy. Commenter xearl called the site's marketing text "so full of claude-isms that it quickly became unbearable," and 5G_activated went further, saying "I find LLM copywriting revolting... it is a major disservice... to generate your website copy with an LLM." For an open-source project trying to earn trust for something that flashes unverified strangers' code onto your device over Wi-Fi, that's a real credibility cost, independent of whether the runtime itself is solid.

## Prior art it's up against

Cobalt isn't the first project to open up Kobo hardware. <a href="https://github.com/pgaskin/NickelMenu" target="_blank">NickelMenu</a> lets you add custom actions and scripts to Kobo's existing native menu, and <a href="https://koreader.rocks/" target="_blank">KOReader</a> is a full alternative reading application with its own OPDS client and a much broader device support list. When the topic came up in the thread, Cobalt's author, posting as thepoet, was direct about the difference: "NickelMenu is a mature project and perfect at what it does, we just have different goals." Cobalt isn't trying to replace either one, it's aiming at something closer to a general-purpose app platform, with an SDK, a simulator, and a store, rather than a way to extend the stock reading app.

## Why this is worth watching

E-ink hardware has been sitting around as an underused category of computer: months of battery life, sunlight-readable screens, ARM chips that sip power, all locked behind firmware built for one job. Cobalt is a small team's bet that there's an audience for treating a $160 reading device as a tiny, dedicated app platform instead, something you'd run an RSS reader or a terminal on precisely because it isn't trying to be a phone. The code and the security model behind the store look like they were built by people who've thought about what happens when Wi-Fi installs go wrong. Whether the project earns the trust needed to get more Kobo models supported and more apps written for it depends on fixing the credibility gap the launch already exposed, and on nothing shipping through that signed pipeline breaking someone's device in the process.
