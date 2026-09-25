---
title: "Why the Dutch Government's Windows Replacement Runs on NixOS, Not Ubuntu"
description: "The Netherlands is piloting a NixOS desktop called DAWO after Microsoft suspended the ICC prosecutor's email in 2025. Here's the reproducible-build mechanism, and the Munich Linux migration it's built not to repeat."
date: 2026-09-25T10:00:00+05:30
lastmod: 2026-09-25T10:00:00+05:30
draft: true
tags: ["NixOS", "open source", "self-hosted", "privacy"]
og_image: "images/dutch_government_windows_replacement_nixos/dutch_government_windows_replacement_nixos_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIldoeSB0aGUgRHV0Y2ggR292ZXJubWVudCdzIFdpbmRvd3MgUmVwbGFjZW1lbnQgUnVucyBvbiBOaXhPUywgTm90IFVidW50dSIsCiAgImRlc2NyaXB0aW9uIjogIlRoZSBOZXRoZXJsYW5kcyBpcyBwaWxvdGluZyBhIE5peE9TIGRlc2t0b3AgY2FsbGVkIERBV08gYWZ0ZXIgTWljcm9zb2Z0IHN1c3BlbmRlZCB0aGUgSUNDIHByb3NlY3V0b3IncyBlbWFpbCBpbiAyMDI1LiBIZXJlJ3MgdGhlIHJlcHJvZHVjaWJsZS1idWlsZCBtZWNoYW5pc20sIGFuZCB0aGUgTXVuaWNoIExpbnV4IG1pZ3JhdGlvbiBpdCdzIGJ1aWx0IG5vdCB0byByZXBlYXQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2R1dGNoX2dvdmVybm1lbnRfd2luZG93c19yZXBsYWNlbWVudF9uaXhvcy9kdXRjaF9nb3Zlcm5tZW50X3dpbmRvd3NfcmVwbGFjZW1lbnRfbml4b3NfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0wOS0yNVQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTA5LTI1VDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvZHV0Y2hfZ292ZXJubWVudF93aW5kb3dzX3JlcGxhY2VtZW50X25peG9zLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiT3BlbiBTb3VyY2UiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIk5peE9TLCBEQVdPLCBEdXRjaCBnb3Zlcm5tZW50IExpbnV4LCBkaWdpdGFsIHNvdmVyZWlnbnR5LCBXaW5kb3dzIGFsdGVybmF0aXZlLCByZXByb2R1Y2libGUgYnVpbGRzLCBOaXggcGFja2FnZSBtYW5hZ2VyLCBNdW5pY2ggTGlNdXgiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTml4T1MiLCAiZGVzY3JpcHRpb24iOiAiQSBMaW51eCBkaXN0cmlidXRpb24gd2hlcmUgdGhlIGVudGlyZSBzeXN0ZW0gaXMgYnVpbHQgZnJvbSBvbmUgZGVjbGFyYXRpdmUsIHJlcHJvZHVjaWJsZSBjb25maWd1cmF0aW9uLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiREFXTyIsICJkZXNjcmlwdGlvbiI6ICJUaGUgRHV0Y2ggSW50ZXJpb3IgTWluaXN0cnkncyBwcm9qZWN0IHRvIGJ1aWxkIGEgc292ZXJlaWduIGdvdmVybm1lbnQgZGVza3RvcCBvbiBOaXhPUy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkRpZ2l0YWwgc292ZXJlaWdudHkiLCAiZGVzY3JpcHRpb24iOiAiUmVkdWNpbmcgYSBnb3Zlcm5tZW50J3MgZGVwZW5kZW5jZSBvbiBpbmZyYXN0cnVjdHVyZSBjb250cm9sbGVkIGJ5IGZvcmVpZ24gdmVuZG9ycyBvciBnb3Zlcm5tZW50cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk5peCBwYWNrYWdlIG1hbmFnZXIiLCAiZGVzY3JpcHRpb24iOiAiVGhlIGJ1aWxkIHRvb2wgdW5kZXJseWluZyBOaXhPUyB0aGF0IGlkZW50aWZpZXMgcGFja2FnZXMgYnkgYSBoYXNoIG9mIHRoZWlyIGJ1aWxkIGlucHV0cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk11bmljaCBMaU11eCIsICJkZXNjcmlwdGlvbiI6ICJNdW5pY2gncyAyMDA0LTIwMTcgbWlncmF0aW9uIGZyb20gV2luZG93cyB0byBhIGN1c3RvbSBVYnVudHUtYmFzZWQgTGludXggZGVza3RvcC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkRBV08tU2V4dGFudCIsICJkZXNjcmlwdGlvbiI6ICJBIHNlbGYtaG9zdGVkLCBwdWxsLWJhc2VkIGZsZWV0IG1hbmFnZW1lbnQgY29udHJvbCBwbGFuZSBmb3IgTml4T1MgZGV2aWNlcy4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

> **Image placeholder**
> - Type: banner
> - File: dutch_government_windows_replacement_nixos_banner.webp
> - Place: banner
> - Shows: the headline over a two-tile screenshot collage on a light background: the DAWO-NixOS repository page and the NixOS.org homepage.
> - Text: "The Netherlands' Windows Replacement Runs on NixOS"; "DAWO rebuilds the whole desktop from one config file"
> - Notice: NixOS's name and logo are the one element that appears in both the headline and both screenshots.
> - Sources: https://github.com/MinBZK/DAWO-NixOS, https://nixos.org
> - Caption: DAWO, the Dutch government's own Linux desktop, is a NixOS configuration checked into a public repository.

On February 6, 2025, President Trump signed an executive order sanctioning Karim Khan, the International Criminal Court's chief prosecutor, over ICC arrest warrants tied to the war in Gaza. Weeks later, Khan's Microsoft-hosted email account stopped working. Microsoft's president Brad Smith later told reporters the company "did not in any way involve the cessation of services to the ICC," while a company spokesperson separately confirmed Microsoft had been in contact with the ICC "throughout the process that led to excluding the sanctioned official from Microsoft services." Whatever the precise mechanics, Khan ended up moving his inbox to Proton Mail, and by October 2025 the ICC had migrated its office and collaboration tools off Microsoft entirely.

The Netherlands hosts the ICC in The Hague, and the episode landed hard there: a European institution's own chief prosecutor lost his email because a US company had to comply with a US sanctions order. Eighteen months later, the Dutch government is piloting its own answer on real government PCs: a desktop called DAWO, built on NixOS, a Linux distribution most developers know for one specific trick: it turns an entire operating system into a single, reproducible build. That trick, and not the fact that it's Linux, is the part worth understanding, because it's also the part earlier European government Linux migrations didn't have.

{{% tldr %}}
1. **The trigger**: Microsoft cut off email access for ICC chief prosecutor Karim Khan after 2025 US sanctions, and Dutch outlets later reported that Microsoft shared Dutch civil servants' unredacted names with a US House committee - concrete reasons the Netherlands wants to depend less on one US vendor.
2. **DAWO** (Digitaal Autonome Werkomgeving Overheid) is the Dutch Interior Ministry's project to rebuild the government desktop, OS, office suite, chat, cloud storage, on NixOS. It became an official mandate in July 2026 and is piloted on a handful of machines and eight municipalities since September.
3. **NixOS turns the whole desktop into one build**: a `configuration.nix` compiles into content-hashed `/nix/store` paths, so the same config produces a bit-identical machine every time, and a bad rollout is one `nixos-rebuild switch --rollback` away from undone.
4. **That's the exact failure mode that undid Munich's LiMux migration**: not that Linux didn't work for 13 years, but that thousands of desktops drifted out of a single, provable configuration once political attention moved elsewhere.
5. **A reproducible config still isn't a deployed fleet.** A second open-source project, DAWO-Sextant, gets that config onto real laptops by having devices pull their state from a self-hosted, git-backed control plane instead of a vendor pushing commands from the cloud.
{{% /tldr %}}

## The prosecutor's email, and the leak that followed it

Khan's email wasn't the only incident. In May 2026, Dutch outlets including {{< link href="https://nltimes.nl/2026/05/22/microsoft-accused-leaking-dutch-civil-servants-names-us-government" >}}NL Times{{< /link >}} reported that Microsoft, responding to a US House Judiciary Committee document request tied to an investigation into "tech censorship," had handed over internal emails, meeting minutes and invitations naming civil servants at two Dutch regulators: the Authority for Consumers and Markets (ACM) and the Dutch Data Protection Authority (AP). Both bodies help enforce the EU's Digital Services Act, a law the US administration treats as a form of censorship. The names weren't redacted. Dutch State Secretary for Digital Economy and Sovereignty Willemijn Aerdts raised it directly with the US ambassador; fellow State Secretary Eric van der Burg called it "worrisome" and asked Microsoft for a full accounting of what had been shared.

Neither incident is really about Windows specifically. Both are about what happens when a government's day-to-day work runs on infrastructure a foreign government can reach into. In July 2026, the Interdepartmental Commission for Government Business Operations (ICBR), which sets policy across Dutch ministries, issued a directive telling public bodies to weigh geopolitical risk and vendor dependence before adopting cloud services, and to keep sensitive data out of non-EU/EEA clouds by default. DAWO, short for Digitaal Autonome Werkomgeving Overheid ("Digital Autonomous Government Work Environment"), is the Ministry of the Interior and Kingdom Relations' answer: a full desktop stack, operating system, office suite, chat, cloud storage, device management, that a government body can run without a US vendor's cooperation.

## Inside DAWO, the ministry's own Linux

DAWO is not a product announcement, it's a public git repository ({{< link href="https://github.com/MinBZK/DAWO-NixOS" >}}code.overheid.nl/MinBZK/DAWO-NixOS{{< /link >}}, mirrored on Codeberg and GitHub) with roughly 130 commits, organized into modules for boot, desktop environments, hardware profiles, networking, and a hardening module that maps individual settings to specific security requirements derived from ISO 27001. As of September 2026 it's running on a small number of real machines, including some used by elected council members, and being trialled separately by eight municipalities coordinated by VNG, the association of Dutch municipalities; earlier reporting named 's-Hertogenbosch, Zaanstad, Ede and Amsterdam among the participants. Developers working on the project have floated 2027 as an informal target for a 1.0 release; there's no fixed government-mandated date.

> **Image placeholder**
> - Type: diagram
> - Kind: timeline
> - File: dawo_sovereignty_timeline.webp
> - Place: body
> - Shows: a horizontal timeline from 2006 to 2027 with six points: 2006, Nix's PhD thesis at Utrecht University; 2015, the NixOS Foundation founded as a Dutch non-profit; February 2025, US sanctions hit ICC prosecutor Karim Khan's email; May 2026, Microsoft reportedly shares Dutch civil servants' data with a US House committee; July 2026, the ICBR mandates a sovereign digital work environment; 2027, developers' informal target for a DAWO 1.0 release.
> - Text: "2006 Nix, Utrecht University"; "2015 NixOS Foundation (Dutch)"; "Feb 2025 US sanctions hit ICC prosecutor's email"; "May 2026 Dutch civil servant data reaches US House committee"; "Jul 2026 ICBR mandates sovereign desktop"; "2027 DAWO 1.0 target"
> - Notice: shade the gap between February 2025 (the trigger) and the 2027 target, since that's how long a sovereignty migration takes even once the technical case is made.
> - Sources: https://en.wikipedia.org/wiki/NixOS, https://www.euronews.com/2025/05/15/trumps-sanctions-on-icc-halt-tribunals-work-staffers-claim, https://nltimes.nl/2026/05/22/microsoft-accused-leaking-dutch-civil-servants-names-us-government
> - Caption: Nineteen years separate Nix's origin at a Dutch university from the Dutch government's own pilot of it.

That's a small, cautious rollout, and deliberately so, because the last time a European city tried to swap Windows for Linux at real scale, the technology wasn't what killed it.

## What Munich's Linux migration actually got wrong

Munich's LiMux project ran from 2004 to 2017: a custom Ubuntu-based Linux distribution rolled out to roughly 15,000 city desktops alongside LibreOffice. It's usually remembered as a failure, but the failure wasn't technical. Thousands of employees ran it for over a decade, and the city saved real money doing it. What killed it was a change in political control after the 2014 mayoral election, after which officials cited software compatibility headaches, staff complaints, and the cost of maintaining in-house Linux expertise, most of it stemming from running Windows and Linux side by side for years so nothing broke during the transition. One city official later said the reversal decision "was not made on the basis of facts." By November 2017 the council voted to go back to Windows.

Strip out the politics and there's still a real, structural problem: a fleet of Ubuntu desktops that fifteen years of incremental patches, one-off fixes and parallel-running compromises can drift out of any single, provable configuration. By year ten, nobody could point at one file and say "this is what every machine is supposed to be running," because no two machines necessarily were. That's the specific gap NixOS is built to close, and it's a plausible reason the Dutch pilots looked past Ubuntu and Fedora: not because NixOS is newer, but because "a Linux desktop" and "a system that stays a known, single configuration for years" turn out to be two different promises.

## How a NixOS system proves it hasn't changed

On NixOS, the whole operating system, packages, services, users, network config, desktop environment, is described in one file, `configuration.nix` (or a `flake.nix` in newer setups), checked into git like any other code. Running `nixos-rebuild switch` doesn't patch the live system in place; it evaluates that file, builds every package and configuration artifact it produces, and stores each one under `/nix/store` at a path named after a cryptographic hash of everything that went into building it: source code, dependencies, compiler flags, all of it. Change one dependency and you get a new hash and a new path; the old one stays untouched on disk.

That has two consequences that matter for a government rollout. First, reproducibility: build the same `configuration.nix` on two machines, in two ministries, a year apart, and you get bit-identical `/nix/store` paths, because the hash is a function of the inputs, not of when or where you ran the build. Second, rollback: every `nixos-rebuild switch` creates a new "generation" and adds it to the boot menu, while every earlier generation stays bootable. A bad update isn't a reinstall; it's `sudo nixos-rebuild switch --rollback` and a reboot, back to the exact `/nix/store` paths that were working an hour ago.

> **Image placeholder**
> - Type: diagram
> - Kind: flowchart
> - File: nixos_rebuild_generations.webp
> - Place: body
> - Shows: the path from configuration.nix, checked into git, through nix evaluating and building content-hashed /nix/store paths, to nixos-rebuild switch activating a new generation while the previous generation stays intact and bootable.
> - Text: "configuration.nix (in git)"; "nix builds"; "/nix/store/<hash>-..."; "generation N (active)"; "generation N-1 (kept)"; "nixos-rebuild switch --rollback"
> - Notice: draw the previous generation as still present and bootable, not deleted, since that's what turns a bad update into a one-command rollback instead of a reinstall.
> - Sources: https://nixos.org/manual/nixos/stable/, https://nixos.org/manual/nix/stable/
> - Caption: A NixOS upgrade never overwrites the working system; it builds a new one next to it.

## Getting one configuration onto every laptop is the harder problem

None of that solves the actual government-scale problem: getting one correct configuration onto several thousand laptops without shipping a USB stick to every desk. That's a second, separate open-source project, {{< link href="https://code.overheid.nl/minbzk/dawo-sextant" >}}DAWO-Sextant{{< /link >}}, built specifically as the part Windows shops already have from vendors and Linux government pilots usually don't: a fleet control plane. It's explicit about the model it's replacing. Instead of an admin console like Microsoft Intune pushing commands down to devices, laptops running Sextant pull their configuration from a self-hosted, git-backed source of truth on their own schedule. New machines enroll close to zero-touch, PXE boot plus MOK keys, no imaging station required. Every change has to pass a Nix build check before it can even merge, and rollouts move through configurable rings with soak periods and health thresholds rather than hitting every machine at once. If a laptop never checks in, or its running state doesn't match what was deployed, that shows up on a single dashboard instead of a support ticket six months later.

Sextant is written mostly in Go with some Nix and Rust, licensed EUPL-1.2 (the copyleft only applies if you redistribute it; running it as an internal service doesn't trigger it), and is in beta. The team behind it describes it as "feature-complete," with the remaining work about proving stability under a real fleet rather than changing the design.

> **Image placeholder**
> - Type: diagram
> - Kind: architecture
> - File: dawo_sextant_pull_model.webp
> - Place: body
> - Shows: a laptop pulling its configuration from a self-hosted, git-backed control plane (DAWO-Sextant), where changes pass a Nix build gate before merge and roll out through rings with soak periods, contrasted with a traditional MDM like Microsoft Intune that pushes commands down to the device.
> - Text: "Your laptop"; "pulls config"; "DAWO-Sextant (self-hosted)"; "git-backed config repo"; "Nix build gate"; "ring 1 -> ring 2 -> ring 3"; "Intune: console pushes commands"
> - Notice: the arrow direction is the point, the laptop reaches out to pull its state; nothing reaches into the laptop from outside.
> - Sources: https://code.overheid.nl/minbzk/dawo-sextant, https://discourse.nixos.org/t/nixos-fleet-control-plane-for-mobile-devices/79390
> - Caption: Devices pull their configuration on their own schedule; the control plane never pushes commands to them.

## The rest of Europe is running the same experiment

France's digital agency DINUM has gone further and put a number on it: up to 2.5 million civil service workstations off Windows by 2030, starting with around 250 machines and 40 sysadmins today. It's building the same two-tier idea DAWO is aiming for: {{< link href="https://www.thestack.technology/nixos-atomic-os-france-sovereign/" >}}Sécurix{{< /link >}}, an ANSSI-hardened NixOS build with FIDO2/YubiKey login and TPM2-backed secure boot for admin and security desks, and Bureautix, a friendlier NixOS build running KDE Plasma with a deliberately Windows-like interface for everyone else. Denmark moved several ministries off Microsoft in 2025. And the ICC itself, the institution that started this whole story, didn't wait around for a Dutch or French rebuild: it migrated to openDesk, an open-source office and collaboration suite built by Germany's Centre for Digital Sovereignty (ZenDiS) for the German Federal Ministry of the Interior.

There's a smaller irony worth knowing before your next standup: Nix, the package manager underneath NixOS, came out of Eelco Dolstra's 2006 PhD thesis at Utrecht University, and the non-profit that stewards NixOS today, the NixOS Foundation, is itself Dutch. The Dutch government spent two decades letting a homegrown reproducible-build tool become one of the most respected in the Linux world, then reached for it only after a US sanctions order made the alternative uncomfortable.

## Where the pilot is still thin

Ask anyone who runs NixOS day to day and reproducibility has a cost: the same immutability that keeps a government desktop stable makes fast iteration on bleeding-edge software annoying. Developers testing different builds of a fast-moving project report fighting the store's immutability before discovering `direnv` and per-project `flake.nix` files that scope a development environment without touching the system config. That's a workflow problem engineers can solve; it's a bigger open question for the office workers DAWO actually targets, whose spreadsheet macros and internal Windows tools have no such escape hatch yet.

There's also the honest scale problem: eight municipalities and a handful of council-member laptops is not what "digital sovereignty for the Dutch government" ultimately requires, and even the Sextant team frames its own project as proving stability, not finished. A 2027 target for a 1.0 release, floated informally by developers rather than promised by the ministry, is closer to a hope than a plan.

## Try the two commands DAWO is betting on

You don't need a government procurement budget to watch the part that matters. Install NixOS in a VM (the ISO is at nixos.org), or install just the Nix package manager on Linux or macOS you already have, and try the two commands the whole approach rests on:

```bash
sudo nixos-rebuild switch          # builds /etc/nixos/configuration.nix, activates a new generation
sudo nixos-rebuild list-generations
sudo nixos-rebuild switch --rollback   # boots the previous generation's exact /nix/store paths
```

Edit one line in `configuration.nix`, for instance add a package to `environment.systemPackages`, rebuild, confirm it's there, then run the rollback command and confirm it's gone again with the rest of the system untouched. That single reversible step, run by a script instead of an IT technician with a re-imaging tool, is the entire bet the Netherlands is making on its next fifteen years of government desktops.
