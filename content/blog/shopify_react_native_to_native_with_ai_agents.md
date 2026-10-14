---
title: "Shopify Rebuilt Its Shop App From React Native to Swift and Kotlin in 12 Weeks, With AI Agents Doing the Port"
description: "Shopify just moved its mobile apps off React Native and back to native Swift and Kotlin: 50% faster Android startup, 37% smaller app, 10x fewer crashes, in 12 weeks. Here's how its Helix checkpoint system and a headless CLI architecture made rewriting twice cheaper than maintaining one shared codebase."
date: 2026-09-11T16:00:00+05:30
draft: false
tags: ["React Native", "AI coding agents", "mobile app development", "developer tools", "AI agents"]
og_image: "images/shopify_react_native_to_native_with_ai_agents/shopify_react_native_to_native_with_ai_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIERlY2lkZSBXaGV0aGVyIGFuIEFJLUFnZW50LURyaXZlbiBOYXRpdmUgUmV3cml0ZSBNYWtlcyBTZW5zZSBmb3IgWW91ciBBcHAiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gZXZhbHVhdGluZyBTaG9waWZ5J3MgcGxheWJvb2sgZm9yIHVzaW5nIEFJIGNvZGluZyBhZ2VudHMgdG8gbWlncmF0ZSBhIG1vYmlsZSBhcHAgZnJvbSBSZWFjdCBOYXRpdmUgdG8gbmF0aXZlIFN3aWZ0IGFuZCBLb3RsaW4sIGFuZCB3aGF0IHBhcnRzIG9mIGl0IGdlbmVyYWxpemUgdG8gYSBzbWFsbGVyIHRlYW0uIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk1lYXN1cmUgdGhlIHJlYWwgY29zdCBvZiB5b3VyIGNyb3NzLXBsYXRmb3JtIHN0YWNrIGhvbmVzdGx5IiwKICAgICAgInRleHQiOiAiU2hvcGlmeSdzIFJlYWN0IE5hdGl2ZSBhcHBzIHdlcmUgbm90IGZhaWxpbmcgdXNlcnMgLSB0aGUgMjAyNSByZXRyb3NwZWN0aXZlIHJlcG9ydGVkIHN1Yi01MDBtcyBQNzUgc2NyZWVuIGxvYWRzIGFuZCBvdmVyIDk5LjklIGNyYXNoLWZyZWUgc2Vzc2lvbnMuIFRoZSBjb3N0IHRoYXQgY2hhbmdlZCB3YXMgZW5naW5lZXJpbmcgdGltZSBzcGVudCBvbiBmcmFtZXdvcmsgbWFpbnRlbmFuY2UgYW5kIGRlcGVuZGVuY3kgdXBncmFkZXMsIG5vdCBydW50aW1lIHF1YWxpdHksIHNvIGNoZWNrIHdoaWNoIG9uZSBpcyBhY3R1YWxseSB5b3VyIGJvdHRsZW5lY2sgYmVmb3JlIGFzc3VtaW5nIGEgcmV3cml0ZSBoZWxwcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRGVjb3VwbGUgYnVzaW5lc3MgbG9naWMgZnJvbSBVSSBiZWZvcmUgYWdlbnRzIHRvdWNoIGl0IiwKICAgICAgInRleHQiOiAiU2hvcGlmeSdzIHRlYW0gc2VwYXJhdGVkIHRoZSBhcHAncyBidXNpbmVzcyBsb2dpYyBzbyBpdCBjb3VsZCBydW4gaGVhZGxlc3Mgb3V0c2lkZSB0aGUgc2ltdWxhdG9yLCBhY2Nlc3NpYmxlIGZyb20gYSBDTEkuIFRoYXQgc2luZ2xlIGFyY2hpdGVjdHVyYWwgY2hhbmdlIGlzIHdoYXQgbGV0IGFnZW50cyBpdGVyYXRlIGluIG1pbGxpc2Vjb25kcyBpbnN0ZWFkIG9mIG1pbnV0ZXMsIGFuZCBpdCBpcyB0aGUgcGFydCBvZiB0aGlzIHBsYXlib29rIHRoYXQgYXBwbGllcyBldmVuIGlmIHlvdSBuZXZlciB0b3VjaCBSZWFjdCBOYXRpdmUgb3IgU3dpZnQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkJ1aWxkIGEgY2hlY2twb2ludGVkIHJldmlldyBoYXJuZXNzIGJlZm9yZSBsZXR0aW5nIGFnZW50cyB3cml0ZSBwcm9kdWN0aW9uIGNvZGUiLAogICAgICAidGV4dCI6ICJTaG9waWZ5J3MgSGVsaXggc3lzdGVtIGJyZWFrcyB0aGUgbWlncmF0aW9uIGludG8gc21hbGwgb3JkZXJlZCBjaGVja3BvaW50cywgZWFjaCBvZiB3aGljaCBtdXN0IHBhc3MgYXV0b21hdGVkIHRlc3RzLCBtYXRjaCB0aGUgcnVubmluZyBhcHAgaW4gYSB2aXN1YWwgcmV2aWV3LCBzdXJ2aXZlIHR3byBhZHZlcnNhcmlhbCBjb2RlIHJldmlld2VycywgYW5kIGdldCBhIGh1bWFuIHNpZ24tb2ZmIGJlZm9yZSB0aGUgbmV4dCBjaGVja3BvaW50IHN0YXJ0cy4gU2tpcHBpbmcgdGhlIGdhdGUsIG5vdCB0aGUgYWdlbnQsIGlzIHdoYXQgbW9zdCBwb3N0bW9ydGVtcyBvZiBiYWQgYWdlbnQtd3JpdHRlbiBjb2RlIGhhdmUgaW4gY29tbW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJHaXZlIGFnZW50cyBhIGZhc3QsIGhlYWRsZXNzIGl0ZXJhdGlvbiBsb29wIiwKICAgICAgInRleHQiOiAiUnVubmluZyBhZ2VudHMgYWdhaW5zdCBhIHNpbXVsYXRvciBvciBwaHlzaWNhbCBkZXZpY2UgaXMgc2xvdyBhbmQgZXhwZW5zaXZlIHBlciB0dXJuLiBFeHBvc2UgdGhlIHNhbWUgbG9naWMgdGhyb3VnaCBhIENMSSBvciBhIGxvY2FsIEFQSSBzbyBhbiBhZ2VudCdzIGVkaXQtdGVzdC1maXggbG9vcCB0YWtlcyBtaWxsaXNlY29uZHMsIGFuZCBydW4gbXVsdGlwbGUgYWdlbnQgc2Vzc2lvbnMgaW4gcGFyYWxsZWwgYWNyb3NzIHNlcGFyYXRlIGdpdCB3b3JrdHJlZXMgaW5zdGVhZCBvZiBvbmUgc2Vzc2lvbiBhdCBhIHRpbWUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk1lYXN1cmUgYmVmb3JlIGFuZCBhZnRlciB3aXRoIHJlYWwgbnVtYmVycywgbm90IHZpYmVzIiwKICAgICAgInRleHQiOiAiU2hvcGlmeSBwdWJsaXNoZWQgY29uY3JldGUgZGVsdGFzOiBBbmRyb2lkIGNvbGQgc3RhcnQgZG93biA1MCUgKDQ0MzNtcyB0byAyMjMzbXMpLCBpT1MgY29sZCBzdGFydCBkb3duIDIzJSwgQW5kcm9pZCBhcHAgc2l6ZSBkb3duIDM3LjIlLCBidWlsZCB0aW1lcyBkb3duIGFib3V0IDc1JSwgYW5kIHNlc3Npb24gc3RhYmlsaXR5IGFib3ZlIDk5Ljk1JS4gQ29tbWl0IHRvIHB1Ymxpc2hpbmcgeW91ciBvd24gYmVmb3JlL2FmdGVyIG51bWJlcnMgc28gdGhlIGRlY2lzaW9uIHRvIHJld3JpdGUgLSBvciBub3QgLSBpcyBmYWxzaWZpYWJsZSByYXRoZXIgdGhhbiBhbmVjZG90YWwuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "shopify_react_native_to_native_with_ai_agents/shopify_react_native_to_native_with_ai_agents_banner.webp" "Diagram showing a React Native product card component being ported by an AI agent into an equivalent native Swift SwiftUI view, with stats for a 12-week timeline, 50% faster Android startup, and 37% smaller app size" >}}

Shopify just rebuilt its Shop app from scratch, in Swift and Kotlin instead of React Native, and shipped it to the app stores in **12 weeks**. Six engineers did it, with AI coding agents doing most of the line-by-line porting. The result: Android cold start time cut in half, app size down 37%, crash-free sessions up by roughly 10x, and build times down about 75%.

That would be a solid engineering write-up on its own. What makes it worth reading closely is the reversal it represents. Shopify moved its mobile apps to React Native in 2020 for exactly the reasons every cross-platform pitch makes: one codebase, no duplicated feature work, web engineers who could ship mobile without learning two new languages. Six years later, the company that champions React Native has quietly decided that "build once" is no longer worth what it costs, because an AI agent can now build twice for less than the framework's upkeep was costing them.

{{% tldr %}}

**What happened:** {{< link href="https://shopify.engineering/back-to-native" >}}Shopify is migrating its mobile apps{{< /link >}} (Shop, Shopify, Point of Sale, Inbox) from React Native back to native Swift and Kotlin. The Shop app went from proof of concept to a published App Store release in **12 weeks**, built by a core team of **6 engineers**.

**The numbers:** Android cold start **4433ms &rarr; 2233ms (-50%)**, iOS cold start **3200ms &rarr; 2466ms (-23%)**, Android app size **down 109MB (-37.2%)**, build times **down ~75%**, session stability **above 99.95%** (roughly a 10x drop in crashes).

**Why now, not in 2020:** Shopify says plainly that React Native wasn't the problem. Its own 2025 retrospective reported sub-500ms P75 screen loads and over 99.9% crash-free sessions on React Native. What changed is that AI agents can now do enough of the porting, testing, and review work that maintaining two native codebases stopped being more expensive than maintaining one shared one.

**How they kept the agents honest:** a system called **Helix** breaks the migration into small checkpoints, each of which must pass automated tests, match the running app in a visual diff, survive two adversarial code reviewers, and get a human sign-off before the next checkpoint starts.

**The real unlock wasn't a smarter model:** it was decoupling business logic from the UI so agents could drive it from a CLI in milliseconds, instead of waiting on a simulator.

{{% /tldr %}}

## Why React Native, in 2020

It's worth remembering why Shopify picked React Native in the first place, because the 2026 announcement doesn't walk any of it back. The <a href="https://shopify.engineering/back-to-native" target="_blank">migration post</a> lists three reasons: eliminate duplicate feature work across iOS and Android, let engineers who don't specialize in mobile still ship mobile features, and cut the ongoing tax of keeping two platforms at feature parity.

Those reasons held up. Shopify's own <a href="https://shopify.engineering/five-years-of-react-native-at-shopify" target="_blank">five-year retrospective</a>, published in January 2025, is unambiguous that the bet paid off: sub-500ms P75 screen loads and over 99.9% crash-free sessions, numbers that would be respectable for a fully native app. The retrospective's conclusion was that "native doesn't automatically mean fast, and React Native doesn't automatically mean slow." Nothing in the 2026 post disputes that. This isn't a story about React Native failing at scale, and Shopify says so directly: "LLMs changed one of the core assumptions behind our 2020 decision, so we reevaluated our mobile stack from first principles."

## What actually changed

The assumption that changed is narrower than "AI is better now." It's specifically about translation labor. Shopify's own framing: "agents can now do enough of the implementation, translation, testing, and review work that it's no longer the deciding factor it was in 2020."

Read that literally. The deciding factor in 2020 was the cost of writing (and maintaining) the same feature twice, once for iOS and once for Android. React Native's whole value proposition is collapsing that into one codebase. If an agent can now port a React Native screen into idiomatic SwiftUI or Jetpack Compose fast enough and reliably enough, the "write once" advantage stops paying for itself, and what's left is native's usual list of upsides: fewer framework layers between your code and the platform, first-party tooling, faster access to new OS APIs, and no more multi-week waits for React Native to catch up to a new iOS release.

That doesn't mean the two-codebase cost disappeared. Shopify's own post is careful about this: "Native still means building and maintaining software on two platforms, that cost has not disappeared." What disappeared is the assumption that the cost is prohibitive. It's now a cost they can pay with agent labor instead of headcount.

## Helix: the part that makes this believable

The riskiest sentence in any "AI agents rewrote our production app" story is the one where nobody explains how they stopped the agent from quietly breaking something. Shopify's answer is a system it built specifically for this migration, called **Helix**.

Helix reads the existing React Native code and proposes a sequence of checkpoints: small, ordered slices of the rewrite that a human can review in minutes rather than hours. Each checkpoint has to clear four gates before the next one starts:

1. **Automated tests** prove the new native code behaves the way the old React Native code did.
2. **A visual review** compares screenshots of the native build against the running React Native app, checkpoint by checkpoint.
3. **Two adversarial code reviewers** (themselves agents, primed to look for problems rather than rubber-stamp) go over the diff.
4. **A human signs off** before the checkpoint is committed and the next one begins.

Plans are hash-validated, so if the underlying code changes, the previous approval is invalidated rather than silently carried forward. And feedback from every review round is fed back into the system, so later checkpoints in the same migration need less hand-holding than the first ones did. That's the mechanism, not "the model got good enough to trust." Nobody skipped code review, they just made code review cheap enough to run on every checkpoint instead of once per pull request.

## The real unlock: a CLI, not a smarter model

The detail that's easy to miss in the coverage of this migration is that the biggest gain wasn't from a better LLM. It was an architecture change that had nothing to do with AI at all: **decoupling business logic from the UI so it could run headless.**

Historically, testing a mobile app change means booting a simulator or flashing a device, which takes anywhere from tens of seconds to a couple of minutes per cycle. That's a tolerable cost for a human, who tests occasionally between longer stretches of writing code. It's a brutal cost for an agent, which wants to test after every small edit. Shopify's team restructured the app so its business logic is reachable from a CLI, independent of the simulator. Along with a debugging tool called **Tardis** that gives agents structured access to live app events, logs, and state (instead of screenshotting the UI and guessing), that turned an edit-test-fix loop from minutes into milliseconds.

Combine that with running many agent sessions in parallel, each in its own git worktree, working on separate checkpoints at once, and you get the actual explanation for the 12-week timeline. It's not that one agent got fast enough to outpace six engineers. It's that the iteration loop got cheap enough to run thousands of times in parallel without anyone waiting on a simulator queue.

This is the part of Shopify's playbook that generalizes furthest beyond mobile, or even beyond AI agents. Fast, headless, scriptable feedback loops have always been worth building. Agents just raised the value of having one to the point where teams are building it on purpose instead of treating it as nice-to-have infrastructure work.

## The numbers, in one place

{{< image "shopify_react_native_to_native_with_ai_agents/shopify_react_native_to_native_with_ai_agents_metrics.webp" "Comparison grid showing the Shop app's before and after metrics: Android cold start down 50% to 2233ms, iOS cold start down 23% to 2466ms, Android app size down 109MB, build times down 75%, and session stability above 99.95%, delivered by 6 engineers in 12 weeks" >}}

A few of these are worth sitting with. The Android startup improvement (50%) is roughly double the iOS one (23%), which tracks with React Native historically carrying a heavier tax on Android, where the JavaScript bridge and larger binary size hit harder than on iOS. The **-109MB** app size reduction on Android (37.2% smaller) is the JavaScript runtime, the bridge, and bundled JS assets simply not being there anymore. And "roughly 10x fewer crashes," off a baseline that was already above 99.9% crash-free, means Shopify pushed session stability into the range where most of the remaining crashes are edge cases rather than framework overhead.

The Shopify app itself, the bigger of the two, is still in progress: 300+ screens, home and lock-screen widgets, an Apple Watch app, watch complications, and Siri Shortcuts, expected to ship later in 2026. The Shop app was the pilot that proved the Helix workflow before pointing it at something with an order of magnitude more surface area.

## What Shopify leaves behind for the React Native ecosystem

Shopify didn't just use React Native, it funded a meaningful chunk of its ecosystem, and the migration post is explicit about what happens to that investment:

- **React Native Skia**, the 2D graphics library, gets sponsorship through the end of 2026. Its creator will fork and continue it under a new name once Shopify's version is archived.
- **FlashList**, the high-performance list component with roughly 2 million downloads a week and a de facto standard in the React Native ecosystem, keeps getting critical compatibility fixes only. Shopify says it's in talks with other companies about long-term stewardship.
- **Restyle**, a styling library, is being archived outright, kept working through the end of 2026 and then left for the community to fork if anyone wants to.

That's not a company torching a framework on the way out. It reads more like a company trying to hand off maintenance responsibly, which is its own small signal about how seriously to take the "AI made this decision, not disillusionment" framing.

## The pushback is worth taking seriously

Reaction to the announcement wasn't uniformly convinced, and the skepticism is worth engaging with rather than waving off, because most of it is about scale and process rather than "AI can't write good code."

The sharpest version of the objection: Shopify processes billions of orders a year, and at that volume, edge cases that never show up in a demo show up constantly in production. Manual "install it and click around" testing doesn't scale to that surface area, whether a human or an agent is doing the clicking, and neither does a testing strategy that stops at "does it look right." A few engineers pointed out that comparing an early-stage product's use of AI-generated code to a payments platform handling that kind of volume undersells how much can go wrong quietly, in security-sensitive paths especially: hardcoded secrets, WebView vulnerabilities, OAuth misconfiguration are the kind of bugs that pass a visual review and a happy-path test and still cost you.

Shopify's own numbers are actually the best answer to that objection, not a dismissal of it: this wasn't "let the agent run and hope." It was four review gates per checkpoint, hash-validated plans, adversarial reviewers, and a human sign-off, applied at a granularity fine enough that nobody is trusting one giant unreviewed diff. Whether that process holds up once it's pointed at the full Shopify app, with its 300+ screens and years of accumulated edge cases, is the actual open question, and it's one Shopify itself hasn't answered yet.

## What this means if you're not Shopify

Most teams reading this don't have six engineers to spare for a 12-week migration, and don't need to. The transferable part isn't "go rewrite your app in native code." It's the two pieces of infrastructure that made the rewrite safe and fast at the same time:

**A fast, scriptable feedback loop for whatever agents are touching.** If your business logic can only be exercised through a UI, an agent (or a human) pays a tax on every single iteration. Pulling logic behind a CLI or a local API, testable without booting a full app, is worth doing on its own merits, agents or not. If you're testing a native mobile client against a backend during a rewrite like this, pointing debug builds at a real local server instead of a shared staging environment is the same idea applied one layer down; we covered that workflow in {{< link href="/blog/student_developers_testing_mobile_app_backends_on_campus/" newtab=false >}}testing mobile app backends from anywhere{{< /link >}}.

**A review process with real gates, not a vibe check.** "The tests pass" is not the same bar as "tests pass, a visual diff matches, an adversarial reviewer looked at it, and a human signed off." The gap between those two bars is most of what separates a rewrite that ships in 12 weeks from one that quietly accumulates the exact edge-case bugs the skeptics are worried about.

Neither of those requires Shopify's scale or Shopify's tooling. They require deciding, before an agent touches production code, what "done" actually means for a single small change, and refusing to skip the check even when the agent is fast.

## Conclusion

The headline is "Shopify dropped React Native," but the actual news is narrower and more interesting: the specific cost that made cross-platform frameworks worth their tradeoffs, the labor of building the same feature twice, just got cheap enough for a well-instrumented team to pay directly instead of architecting around it. That doesn't make React Native, Flutter, or any other cross-platform framework obsolete. Most teams still don't have Shopify's incentive to own every pixel of platform-specific behavior, and "build once" remains the right default for a small team without the appetite to build a Helix-style review harness first.

What it does mean is that the calculation is worth rerunning, not assumed. If your team's reason for cross-platform was "we can't afford to build this twice," that reason is worth re-pricing now that agents can take a real bite out of the translation cost, provided you build the checkpoint discipline to go with them.
