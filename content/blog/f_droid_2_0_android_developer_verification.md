---
title: "F-Droid Rebuilt Its App Store Right as Android Locks Down Sideloading"
description: "F-Droid shipped a from-scratch Kotlin and Compose rewrite on September 24, 2026, six days before Android developer verification starts blocking unverified apps in Brazil, Indonesia, Singapore and Thailand."
date: 2026-09-24T10:00:00+05:30
lastmod: 2026-09-24T10:00:00+05:30
draft: false
tags: ["android", "open source", "Google", "security"]
og_image: "images/f_droid_2_0_android_developer_verification/f_droid_2_0_android_developer_verification_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkYtRHJvaWQgUmVidWlsdCBJdHMgQXBwIFN0b3JlIFJpZ2h0IGFzIEFuZHJvaWQgTG9ja3MgRG93biBTaWRlbG9hZGluZyIsCiAgImRlc2NyaXB0aW9uIjogIkYtRHJvaWQgc2hpcHBlZCBhIGZyb20tc2NyYXRjaCBLb3RsaW4gYW5kIENvbXBvc2UgcmV3cml0ZSBvbiBTZXB0ZW1iZXIgMjQsIDIwMjYsIHNpeCBkYXlzIGJlZm9yZSBBbmRyb2lkIGRldmVsb3BlciB2ZXJpZmljYXRpb24gc3RhcnRzIGJsb2NraW5nIHVudmVyaWZpZWQgYXBwcyBpbiBCcmF6aWwsIEluZG9uZXNpYSwgU2luZ2Fwb3JlIGFuZCBUaGFpbGFuZC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvZl9kcm9pZF8yXzBfYW5kcm9pZF9kZXZlbG9wZXJfdmVyaWZpY2F0aW9uL2ZfZHJvaWRfMl8wX2FuZHJvaWRfZGV2ZWxvcGVyX3ZlcmlmaWNhdGlvbl9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTA5LTI0VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMDktMjRUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9mX2Ryb2lkXzJfMF9hbmRyb2lkX2RldmVsb3Blcl92ZXJpZmljYXRpb24vIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJNb2JpbGUgYW5kIE9wZW4gU291cmNlIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJGLURyb2lkIDIuMCwgQW5kcm9pZCBkZXZlbG9wZXIgdmVyaWZpY2F0aW9uLCBzaWRlbG9hZGluZywgb3BlbiBzb3VyY2UgQW5kcm9pZCwgR29vZ2xlIFBsYXksIGFwcCBzdG9yZSwgQW5kcm9pZCBEZXZlbG9wZXIgQ29uc29sZSIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJGLURyb2lkIiwgImRlc2NyaXB0aW9uIjogIkEgdm9sdW50ZWVyLXJ1biBmcmVlIGFuZCBvcGVuIHNvdXJjZSBzb2Z0d2FyZSByZXBvc2l0b3J5IGFuZCBjbGllbnQgZm9yIEFuZHJvaWQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJBbmRyb2lkIGRldmVsb3BlciB2ZXJpZmljYXRpb24iLCAiZGVzY3JpcHRpb24iOiAiR29vZ2xlJ3MgcmVxdWlyZW1lbnQgdGhhdCBhcHAgZGV2ZWxvcGVycyB2ZXJpZnkgdGhlaXIgaWRlbnRpdHkgYmVmb3JlIHRoZWlyIGFwcHMgY2FuIGJlIGluc3RhbGxlZCBvbiBjZXJ0aWZpZWQgQW5kcm9pZCBkZXZpY2VzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU2lkZWxvYWRpbmciLCAiZGVzY3JpcHRpb24iOiAiSW5zdGFsbGluZyBhbiBBbmRyb2lkIGFwcCBmcm9tIG91dHNpZGUgdGhlIEdvb2dsZSBQbGF5IFN0b3JlLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQVBLIHNpZ25pbmcga2V5IiwgImRlc2NyaXB0aW9uIjogIlRoZSBjcnlwdG9ncmFwaGljIGtleSB1c2VkIHRvIHNpZ24gYW4gQW5kcm9pZCBwYWNrYWdlLCB3aGljaCB0aWVzIGFuIGFwcCB0byBhIHNwZWNpZmljIGRldmVsb3BlciBpZGVudGl0eS4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "f_droid_2_0_android_developer_verification/f_droid_2_0_android_developer_verification_banner.webp" "F-Droid 2.0 ships as Android locks down: a timeline panel showing F-Droid 2.0 shipping September 24, developer verification enforcement on September 30, roughly 85 percent of F-Droid's catalog signed with F-Droid's own key, and global rollout planned for 2027" >}}

On September 24, 2026, {{< link href="https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html" >}}F-Droid shipped 2.0{{< /link >}}, a ground-up rewrite of the client that has been the main alternative to the Google Play Store for fifteen years. The old codebase is gone, replaced with Kotlin and Jetpack Compose after more than a year of work, 14 test releases, and an independent security audit. Six days later, on September 30, Google starts enforcing Android developer verification in Brazil, Indonesia, Singapore, and Thailand: a rule that only apps registered to an identity-verified developer can be installed on a certified Android device, sideloaded ones included. F-Droid picked an interesting week to prove its code is better than ever, because the code was never the part of F-Droid that was under threat.

{{% tldr %}}
1. **F-Droid 2.0 is a real rewrite, not a reskin**: Kotlin and Jetpack Compose replace the old Java codebase, navigation collapses to three tabs (Discover, Search, My Apps), and the app now auto-updates by default after a security audit from the Open Technology Fund's Security Lab and Convocation.
2. **Android developer verification starts enforcing September 30, 2026** in Brazil, Indonesia, Singapore, and Thailand, with global rollout planned for 2027. It requires developers to verify their identity and register their package names with Google, whether they distribute through Play, another store, or a direct download.
3. **F-Droid says this is existential, not cosmetic.** In a {{< link href="https://f-droid.org/2026/02/24/open-letter-opposing-developer-verification.html" >}}February 2026 open letter{{< /link >}} signed by the Electronic Frontier Foundation, Free Software Foundation Europe, Software Freedom Conservancy, and dozens of other groups, F-Droid argues the "advanced flow" Google promised for experienced users won't be ready before enforcement begins.
4. **The catalog has a signing-key problem.** F-Droid builds most apps from source and signs them with its own key rather than the original developer's, and F-Droid forum members estimate roughly 85% of the catalog falls into that category, apps that would need a coordination mechanism which doesn't exist yet to register under verification.
5. **Nothing changes for F-Droid users this week.** The September 30 enforcement covers four countries and applies to certified Android devices installing newly-registered apps; ADB installs are explicitly unaffected, and the real test is what "advanced flow" looks like once it exists, or whether it ever does.
{{% /tldr %}}

## What F-Droid actually rewrote

F-Droid is a nonprofit-adjacent, volunteer-run catalog of free and open source Android apps, most of them built from source on F-Droid's own infrastructure rather than uploaded as pre-built binaries. The client app, the thing you install to browse and update from that catalog, has run on essentially the same Java codebase since the project started in 2010. Version 2.0 replaces it:

- **Language and UI**: rewritten in Kotlin with Jetpack Compose, the toolkit most Android teams have already standardized on. F-Droid says this is meant to make the codebase easier for new contributors familiar with modern Android development to pick up.
- **Navigation**: collapsed from a busier layout into three areas: **Discover** (new, updated, and popular apps), **Search** (now indexing descriptions, categories, and translated text, with better CJK support), and **My Apps** (installed apps, updates, and any issues in one place). Settings and Nearby Swap moved into the top bar instead of competing for space in the main navigation.
- **Auto-updates on by default**: F-Droid 2.0 fetches and installs updates automatically unless you turn that off, a reversal from the old manual-by-default behavior. The pull-to-refresh gesture is gone along with it, replaced by background checking.
- **Minimum OS bumped to Android 7**: Android 6 support is dropped.
- **Categories expanded**: Games went from one bucket to 17 genres, and new top-level categories cover VPNs, firewalls, password managers, launchers, and navigation apps.
- **A few features paused, not polished**: the app-wiping panic trigger is temporarily removed pending community feedback, Tor auto-detection is gone in favor of manual proxy or VPN setup, and the F-Droid Privileged Extension is no longer supported.
- **Independently audited**: the release went through a security review by the Open Technology Fund's Security Lab in partnership with Convocation, funded in part by NLnet, OTF, and the Calyx Institute.

That's a legitimate, well-scoped piece of engineering: 14 test releases is a lot of iteration for a project run mostly by volunteers, and shipping a Compose rewrite of an app this old without breaking its core job, browsing and installing apps from outside the Play Store, is not trivial. If F-Droid had released this in a quiet month, it would be a solid "here's how a 15-year-old open source project modernized itself" story on its own.

It isn't a quiet month.

## The wall it's shipping into

{{< image "f_droid_2_0_android_developer_verification/verification_timeline.webp" "A timeline from February 2026 to 2027 marking F-Droid's open letter, the September 24 release of F-Droid 2.0, the September 30 developer verification enforcement date, and the planned 2027 global rollout, with a zoomed-in callout on the six days between the release and enforcement" >}}

{{< link href="https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html" >}}Android developer verification{{< /link >}} is Google's answer to a real problem: its own analysis found more than 90 times more malware coming from sideloaded apps than from Google Play. Starting September 30, 2026, in Brazil, Indonesia, Singapore, and Thailand, and expanding globally in 2027, only apps registered to a verified developer can be installed on a certified Android device (the mainstream, Google-certified devices most people carry, as opposed to a custom ROM without Google's compatibility certification), no matter where the APK came from. Google's own developer guide is explicit about scope: "If your app runs on a certified device, these requirements apply to you, regardless of your app's download source."

There are three paths, as Google lays them out:

- **Full distribution**: verify your identity (individual or organization, with documentation) and register your package names by submitting an APK signed with your private key. Once done, installs work exactly as they do today, through any store or direct download.
- **Limited distribution**: a lighter option for students and hobbyists. No government ID, just an email address, but capped at 20 devices. Sign-ups opened in June 2026 with a global launch in August.
- **Sideloading unregistered apps**: an "advanced flow" Google says it's building for experienced users who want to install something outside both of the above, with "extra safeguards" meant to slow down social-engineering scams that trick people into sideloading malware.

ADB installs, the way developers push a debug build to their own device over USB, are explicitly untouched: "ADB workflow and experience stays the same." That's the detail worth sitting with before assuming this is a flat ban on sideloading. It isn't, yet. What changes is the default path for installing an app you downloaded as a file or added a repository for, and how much friction Google puts in front of anyone who hasn't registered.

## Why F-Droid calls this existential

F-Droid's objection isn't to identity verification as a concept, it's to what the "advanced flow" actually looks like in practice, and whether it will exist in time. In a {{< link href="https://f-droid.org/2026/02/24/open-letter-opposing-developer-verification.html" >}}February 24, 2026 open letter{{< /link >}}, signed by the Electronic Frontier Foundation, Free Software Foundation Europe, Software Freedom Conservancy, and dozens of other organizations, F-Droid wrote that Google had promised an advanced flow for experienced users but that "no such 'advanced flow' will be made available prior to the September lock-down," and warned that if one does eventually ship, it's likely to be "maximally obscure and high-friction" based on how little external feedback Google had solicited on its design. The letter also cites a figure worth noting for scale: more than 95% of Android devices outside China are Google-certified, meaning the requirement's reach is close to the entire non-China Android install base once it goes global.

The more concrete problem is underneath F-Droid's own build model. Most apps in F-Droid's catalog aren't uploaded by their original developers, F-Droid builds them from public source code on its own infrastructure and signs the resulting APK with F-Droid's key, not the developer's. On the {{< link href="https://forum.f-droid.org/t/google-will-require-developer-verification-to-install-android-apps-including-sideloading/33123" >}}F-Droid community forum{{< /link >}}, one member estimated that roughly 85% of the catalog falls into that category. If verification ties an app's identity to the key that signed it, as the "register your package names by providing the APK signed with your private key" language suggests, then most of F-Droid's catalog doesn't cleanly map onto a single verified developer at all. The fix members discuss, having original developers register F-Droid's signing key alongside their own, needs a coordination mechanism between thousands of independent developers and F-Droid that doesn't exist yet.

None of this is unique to F-Droid. Any store or repository that resigns apps, or any developer who's stopped maintaining an app F-Droid still builds from an old source tree, runs into the same key-identity mismatch.

## What actually changes on September 30, and what doesn't

It's easy to read "developer verification enforcement begins" as "sideloading ends," and that's not quite where things stand yet:

- It applies in four countries at first: Brazil, Indonesia, Singapore, and Thailand. Global rollout is planned for 2027, not this week.
- It applies to certified Android devices. A phone running LineageOS without Google's certification, for instance, isn't in scope by this definition.
- ADB installs are explicitly carved out, so a developer sideloading their own debug builds sees no change.
- The "advanced flow" for sideloading unregistered apps is supposed to exist as an option, F-Droid's dispute is over whether it will be usable, and whether it will exist at all by the enforcement date, not whether Google intends to remove sideloading outright.

What does change, if F-Droid's reading holds, is the default experience: installing something outside the registered-and-verified path gets friction by design, marketed as protection against coercion and scams, and the people most likely to hit that friction are exactly the users of alternative repositories who've spent fifteen years treating "install from outside the Play Store" as an ordinary Tuesday. Whether that friction is proportionate or excessive is the actual argument, and it's one that plays out over the next several months as the advanced flow, if it ships, becomes something people can actually try.

## Testing your own F-Droid repo before you publish it

If you're a developer weighing whether to distribute through F-Droid, its "official" catalog isn't the only option. F-Droid's own tooling lets anyone run a private or internal repository: `fdroid init` sets up a signing key and a working directory, dropping APKs into its `repo/` subfolder and running `fdroid update` regenerates the index files F-Droid's client reads. The result is just a folder of static files, an index plus the APKs, so any web server that can serve a directory can host a repo; F-Droid's {{< link href="https://f-droid.org/docs/Setup_an_F-Droid_App_Repo/" >}}own docs{{< /link >}} use nginx pointed at that folder as the example.

That also means you can test a repo before it goes anywhere public. Serve the folder locally:

```bash
cd fdroid   # the directory fdroid init created, containing repo/
python3 -m http.server 8000
```

Then open a tunnel to it and add the printed HTTPS URL as a repository on your phone, instead of deploying to a real server just to check the index parses and the app installs cleanly:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T
```

That prints a public HTTPS URL (`https://xxxx.a.pinggy.link`). In the F-Droid app, add a repository and point it at `<that URL>/repo/`, the same path Google's docs and F-Droid's own setup guide reference. The free tunnel is anonymous, no signup, and good for the length of a test; it disconnects after 60 minutes and hands back a new random address next time, which is the right tradeoff for "does my repo work" and the wrong one for anything you'd point real users at long-term.

## What to check yourself

The F-Droid 2.0 release notes and the {{< link href="https://developer.android.com/developer-verification/guides" >}}Android developer verification guide{{< /link >}} are both public and worth reading directly rather than through secondhand summaries, this one included. The forum thread F-Droid's community has been tracking developer verification in has stayed active since the February announcement, and it's the fastest way to see whether the advanced flow Google promised has actually shipped by the time you read this, or whether the six-day gap between F-Droid's rewrite and Android's enforcement date turned out to matter as much as it looks like it will.
