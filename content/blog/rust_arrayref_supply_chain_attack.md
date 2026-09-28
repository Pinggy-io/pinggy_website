---
title: "Inside the arrayref Supply Chain Attack: A Build Script Nearly Backdoored 245 Million Rust Downloads"
description: "On August 20, 2026, a compromised arrayref release added one dependency line pointing at a typosquatted crate, and Cargo ran the rest. A technical breakdown of the build.rs payload, the proc-macro1 typosquat, the 86-minute exposure window, and how to check if you pulled it."
date: 2026-08-21T11:00:00+05:30
lastmod: 2026-08-21T11:00:00+05:30
draft: false
tags: ["rust", "supply chain security", "cargo", "cybersecurity", "open source"]
categories: ["Technology", "Security"]
og_image: "images/rust_arrayref_supply_chain_attack/rust_arrayref_supply_chain_attack_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "rust_arrayref_supply_chain_attack/rust_arrayref_supply_chain_attack_banner.webp" "Diagram of the arrayref supply chain attack: cargo build pulls arrayref 0.3.10, which adds a dependency on the typosquatted proc-macro1, whose build.rs downloads and runs a payload from a remote server" >}}

On August 20, 2026, at 07:15 UTC, someone published `arrayref@0.3.10` to {{< link href="https://crates.io/" >}}crates.io{{< /link >}}. `arrayref` is a small, boring utility crate, the kind of dependency you've probably pulled in transitively without ever thinking about it: it converts slices into fixed-size array references, and it's been stable for years. It has roughly 245 million all-time downloads. Wiz later estimated it shows up in over a third of all environments its scanners see, and in about three out of four environments that use Rust at all.

The new version didn't touch a single line of the crate's actual source. It added one line to `Cargo.toml`:

```toml
[dependencies.proc-macro1]
version = "1.0.107"
```

`proc-macro1` doesn't exist as a legitimate crate. It's a typosquat of `proc-macro2`, one of the most widely used low-level crates in the entire Rust ecosystem, and its build script downloads and runs a binary the moment Cargo compiles it. No function call, no import, no line of arrayref's code needed to invoke anything. Just `cargo build`.

It was live for 86 minutes before the Rust Security Response Team pulled it.

{{% tldr %}}
1. **What happened** - `arrayref@0.3.10`, `internment@0.8.7`, and `append-only-vec@0.1.9` were republished on crates.io with a manifest-only change adding a dependency on `proc-macro1`, a typosquat of `proc-macro2` whose `build.rs` downloads and executes a remote payload at compile time.
2. **Exposure window** - 86, 90, and 107 minutes respectively before the Rust Security Response Team deleted the malicious versions. Discovered and reported by Nextron Systems.
3. **The trick** - the payload lives in `build.rs`, which Cargo runs automatically with no sandboxing. Nothing in arrayref's actual source changed, so a source-code diff of the crate itself would show nothing.
4. **The payload** - fetches an architecture-specific binary over HTTPS with certificate validation disabled, from `23.254.165.112`, spawns it detached (on Windows, via `WScript.exe` specifically to escape Cargo's job object), and the stage-2 implant reads browser credential databases in Chrome, Brave, and Edge.
5. **Attribution** - no formal attribution from the Rust team, but Wiz found infrastructure overlap with campaigns previously tied to North Korea-linked actors, including this year's Mastra and axios npm compromises.
6. **Check yourself** - run the `find` command in the "Check if you pulled it" section below against your local Cargo cache and grep your `Cargo.lock` files.
{{% /tldr %}}

## The injection: a manifest, not a code change

This is the part worth sitting with. If you audit dependencies by diffing a crate's source code against its previous version, or by reading through `src/` before you upgrade, this attack was built to walk right past you. `arrayref`'s actual logic, the array-slicing macros people actually use, was untouched. The only change was a new entry under `[dependencies]`.

Cargo doesn't distinguish between "a dependency this crate needs to function" and "a dependency someone added to run code on your machine." It resolves the graph and builds everything in it, including build scripts, without asking. A single manifest line is enough to pull in an entirely new build-time execution path, and unless you're diffing `Cargo.toml` specifically (not just source files) on every upgrade, you won't see it. Most people don't. Most tooling doesn't flag it as differently risky than a source change, either.

The attacker also yanked `arrayref` versions 0.3.5 through 0.3.9 around the same time, which nudges Cargo's dependency resolver toward pulling the newest available version for anyone with a loose version constraint, exactly the malicious one.

## proc-macro1: built to be mistaken for the real thing

`proc-macro2` is about as core to the Rust ecosystem as it gets. It underlies `syn`, `quote`, and effectively every derive macro in wide use; if you've built a nontrivial Rust project, you've compiled it dozens of times without noticing. That familiarity is exactly what `proc-macro1` was counting on.

The fake crate's source was `proc-macro2`'s actual code, run through a mechanical find-and-replace to rename it, functioning as a working drop-in so nothing looked broken during a build. Its metadata claimed authorship by David Tolnay (the real, well-known maintainer of `proc-macro2`, `syn`, and `quote`) with an invalid email address and a GitHub repository that doesn't exist. And its `Cargo.toml` pulled in `base64`, `rustls`, and `ureq`, dependencies that make no sense for a token-parsing library and every kind of sense for something that needs to make an HTTPS request and decode a response.

## What build.rs actually did

`build.rs` is a Rust file Cargo compiles and executes automatically before building your actual crate, if one is present. It's meant for things like generating code from a schema or telling Cargo which system libraries to link against. It runs with the full permissions of whatever user invoked `cargo build`, unsandboxed, and Cargo will happily wait for it to finish before proceeding.

The malicious `proc-macro1` build script:

- Decoded an obfuscated payload URL to `https://23.254.165.112:9089/`, and separately used `23.254.165.112:443` as a command-and-control address
- Connected using TLS configured to accept any certificate, no validation, so the download itself couldn't be intercepted or verified by anything watching the connection
- On Linux and macOS, wrote the downloaded binary to `/tmp/rust-setup`, marked it executable, and spawned it as a detached process
- On Windows, wrote a PowerShell script to `%TEMP%\rust-setup.ps1` and launched it through `WScript.exe` with a hidden window, specifically because that path escapes Cargo's job object, meaning the payload keeps running even after the build process that spawned it exits or is killed

Four payload variants shipped, selected by OS and CPU architecture: Linux x86_64, Windows x86_64, macOS x86_64, and macOS aarch64 (Apple Silicon). According to Wiz's analysis, the stage-2 implant queries the SQLite login databases Chrome, Brave, and Edge use to store saved credentials, pulling `origin_url` and `username_value` columns. It stops short of extracting the encrypted `password_value` field directly in the version analyzed, but having the site list and usernames from someone's browser is already a serious foothold.

The scope of what could reach this code path is wider than "people who use arrayref directly." `arrayref` sits transitively under GUI libraries like `egui`, `eframe`, and `iced`, and various graphics crates, so plenty of developers who never typed `arrayref` into a `Cargo.toml` would have pulled it in anyway.

## The timeline

| Crate | Malicious version | Published (UTC) | Deleted (UTC) | Exposed |
|---|---|---|---|---|
| `arrayref` | 0.3.10 | 07:15:00 | 08:41:40 | 86 min |
| `internment` | 0.8.7 | 07:34:07 | 09:04:11 | 90 min |
| `append-only-vec` | 0.1.9 | 07:37:49 | 09:25:24 | 107 min |

{{< link href="https://www.nextron-systems.com/" >}}Nextron Systems{{< /link >}}' research team discovered and reported the malicious `proc-macro1` crate, which is what set off the response. The Rust Security Response Team deleted all the malicious package versions, unyanked the legitimate `arrayref` versions that had been pulled to steer people toward 0.3.10, and locked the affected maintainer's account as a precaution. Their assessment: "We do not believe the author of arrayref to be acting maliciously, but their computer or credentials are likely compromised."

Beyond the three headline crates, the attacker's supporting infrastructure included several more typosquats and throwaway packages, `proc-macro-en`, `aovine`, `arone`, `aronenao`, and `tinymember`, all removed once identified.

## Who did it, probably

Nobody has put an official name on this one. The Rust team's writeup sticks to the technical facts and doesn't attribute the campaign. But {{< link href="https://www.wiz.io/blog/rust-supply-chain-attack-on-arrayref-significant-overlap-with-dprk-campaigns" >}}Wiz's independent analysis{{< /link >}} found overlap in C2 paths, TLS certificate issuer strings, and Hostwinds hosting infrastructure between this attack and campaigns previously linked to North Korean state-sponsored actors, specifically this year's compromises of the Mastra npm package (which Microsoft attributed to a group it tracks as Sapphire Sleet) and axios (attributed by Google's Threat Intelligence Group to a group it tracks as Midnight Neptune, formerly UNC1069).

Axios is worth pausing on for scale comparison: over 100 million weekly downloads, malicious versions live for about three hours before removal. The arrayref window was shorter, 86 minutes instead of three hours, but the download count involved (245 million all-time) puts it in the same tier of "how many machines could plausibly have pulled this" as the bigger npm incidents. Whether that reflects an actual pattern of one actor working across ecosystems, or just overlapping infrastructure-for-hire that gets reused across unrelated campaigns, isn't settled from the outside.

## Check if you pulled it

The Rust team published a command to scan your local Cargo cache for the malicious crate files:

```bash
find ~/.cargo/registry/cache -type f \( \
  -name 'append-only-vec-0.1.9.crate' -o \
  -name 'arrayref-0.3.10.crate' -o \
  -name 'internment-0.8.7.crate' -o \
  -name 'proc-macro1-*.crate' -o \
  -name 'proc-macro-en-*.crate' -o \
  -name 'aovine-*.crate' -o \
  -name 'arone-*.crate' -o \
  -name 'aronenao-*.crate' -o \
  -name 'tinymember-*.crate' \
) -print
```

That only tells you whether the crate was downloaded to that machine, not whether it was actually built (and therefore actually executed the payload). If it shows up, check your shell history and CI logs around the exposure windows above for a build that would have compiled it.

It's also worth grepping your lockfiles across every repo and CI checkout you have, in case a `Cargo.lock` was committed while the malicious version was resolvable:

```bash
grep -rEn 'proc-macro1|proc-macro-en|aovine|arone|aronenao|tinymember|arrayref.*0\.3\.10|internment.*0\.8\.7|append-only-vec.*0\.1\.9' \
  --include=Cargo.lock --include=Cargo.toml .
```

If either check turns up something and the timing lines up with your build history, treat it as a confirmed compromise: rotate credentials, especially anything a saved browser login could have exposed, and rebuild the affected machine rather than trying to clean it in place.

## Why this keeps happening

The most pointed criticism after this incident wasn't really about the attack, it was about the response tooling. Developers in the {{< link href="https://news.ycombinator.com/item?id=49374269" >}}Hacker News discussion{{< /link >}} noted that the compromised version simply vanished from crates.io with no visible advisory or yank marker at first, so anyone who'd already resolved it had no signal that anything was wrong short of reading a blog post. One comment put it plainly: "we shouldn't need to resort to pasting commands into the shell from blog posts to tell if we're compromised." `cargo audit` checking against a known-bad list automatically, rather than everyone running ad hoc `find` commands from an incident writeup, is the obvious ask, and it isn't there yet.

The sharper irony is that Cargo already has a fix for exactly this shape of problem, and it just wasn't switched on yet. RFC 3923 defines `min-publish-age`, a setting that holds newly published versions out of dependency resolution for a configurable window, giving registries and scanners time to flag something before it's buildable by everyone. It landed on nightly behind the `-Zmin-publish-age` flag back in June. The {{< link href="https://github.com/rust-lang/cargo/issues/17009" >}}stabilization tracking issue{{< /link >}} entered its final comment period on August 18, two days before this attack, with the Cargo team saying they expected it to land in a stable Rust release "absent concerns." Every developer running a plain, non-nightly `cargo build` on August 20 was, by definition, not covered by it yet.

GitHub shipped a comparable three-day cooldown for Dependabot back in July. `npm` went further after its own build-time-payload incident earlier this year (a campaign called Miasma, which hid a payload inside `binding.gyp` rather than a lifecycle script) and disabled install scripts from dependencies by default in v12, making them opt-in rather than automatic. Cargo doesn't have an equivalent opt-in switch for build scripts, and given how many crates legitimately need `build.rs` to link system libraries or generate code, an opt-in-only model would break a lot more than npm's did.

A publish-age window, on the other hand, wouldn't have stopped this attack from being published, but it would very plausibly have stopped it from being widely built before someone caught it, since the entire campaign depended on speed. 86, 90, and 107 minutes is not a window a human reviewer fills; it's a window automated typosquat and diff scanners are built for, if the ecosystem gives them time to run before the package is resolvable by every `cargo build` on the internet.

## Further reading

- <a href="https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/" target="_blank">Supply chain attack on arrayref</a> - official Rust Security Response Team writeup
- <a href="https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/" target="_blank">Malicious Rust Crate arrayref Runs a Build-Time Payload</a> - SafeDep technical analysis
- <a href="https://www.stepsecurity.io/blog/arrayref-rust-crate-supply-chain-attack" target="_blank">Rust Supply-Chain Attack: arrayref, internment, and append-only-vec Poisoned by the proc-macro1 Build-Time Dropper</a> - StepSecurity
- <a href="https://www.wiz.io/blog/rust-supply-chain-attack-on-arrayref-significant-overlap-with-dprk-campaigns" target="_blank">Rust Supply Chain Attack on arrayref: Significant Overlap with DPRK Campaigns</a> - Wiz
- <a href="https://github.com/rust-lang/cargo/issues/17009" target="_blank">Tracking issue for min-publish-age (RFC 3923)</a> - rust-lang/cargo
