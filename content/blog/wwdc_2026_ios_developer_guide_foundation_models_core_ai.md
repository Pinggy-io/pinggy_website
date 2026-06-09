---
title: "WWDC 2026 for Developers: Foundation Models, Core AI, App Intents, and Testing with Pinggy"
description: "A practical developer guide to the four biggest changes at WWDC 2026: Foundation Models provider swapping, Core AI replacing Core ML, App Intents becoming mandatory, and MCP going platform-wide. Includes how to test your local Apple Intelligence integration on a real device using Pinggy."
date: 2026-06-09T10:00:00+05:30
draft: false
tags: ["WWDC 2026", "iOS 27", "Foundation Models", "Core AI", "App Intents", "Xcode 27", "Apple Intelligence", "MCP", "developer tools", "Pinggy", "local development"]
categories: ["Technology", "Development", "AI Tools"]
og_image: "images/wwdc_2026_ios_developer_guide/wwdc_2026_ios_developer_guide_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFRlc3QgWW91ciBBcHBsZSBJbnRlbGxpZ2VuY2UgSW50ZWdyYXRpb24gb24gaU9TIDI3IFVzaW5nIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBleHBvc2luZyBhIGxvY2FsIE1DUCBzZXJ2ZXIgb3IgQXBwIEludGVudHMgd2ViaG9vayB0aHJvdWdoIGEgUGluZ2d5IEhUVFBTIHR1bm5lbCB0byB0ZXN0IEFwcGxlIEludGVsbGlnZW5jZSBpbnRlZ3JhdGlvbnMgd2l0aCBhIHJlYWwgaU9TIDI3IGRldmljZS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvd3dkY18yMDI2X2lvc19kZXZlbG9wZXJfZ3VpZGUvd3dkY18yMDI2X2lvc19kZXZlbG9wZXJfZ3VpZGVfYmFubmVyLndlYnAiLAogICJ0b3RhbFRpbWUiOiAiUFQxME0iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgeW91ciBsb2NhbCBpbnRlZ3JhdGlvbiIsCiAgICAgICJ0ZXh0IjogIlJ1biB5b3VyIE1DUCBzZXJ2ZXIgb3IgQXBwIEludGVudHMgd2ViaG9vayByZWNlaXZlciBvbiBsb2NhbGhvc3QuIEFuIE1DUCBzZXJ2ZXIgdGhhdCBzdXBwb3J0cyBTdHJlYW1hYmxlIEhUVFAgdHlwaWNhbGx5IGxpc3RlbnMgb24gcG9ydCAzMDAwIGFuZCBleHBvc2VzIGEgL21jcCBlbmRwb2ludC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiBhIFBpbmdneSB0dW5uZWwiLAogICAgICAidGV4dCI6ICJJbiBhIHRlcm1pbmFsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgZnJlZS5waW5nZ3kuaW8gdG8gY3JlYXRlIGEgcHVibGljIEhUVFBTIHR1bm5lbC4gUGluZ2d5IHByaW50cyB0aGUgVVJMIHdoZW4gdGhlIHR1bm5lbCBpcyByZWFkeS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUmVnaXN0ZXIgdGhlIFVSTCBvbiB5b3VyIGRldmljZSIsCiAgICAgICJ0ZXh0IjogIk9uIHlvdXIgaVBob25lIHJ1bm5pbmcgaU9TIDI3LCBnbyB0byBTZXR0aW5ncywgdGhlbiBBcHBsZSBJbnRlbGxpZ2VuY2UgYW5kIFNpcmksIHRoZW4gRGV2ZWxvcGVyIE1DUCBTZXJ2ZXJzLCBhbmQgYWRkIHRoZSBQaW5nZ3kgSFRUUFMgVVJMIGFzIGEgbmV3IE1DUCBzZXJ2ZXIgZW5kcG9pbnQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlRlc3Qgd2l0aCBTaXJpIG9yIGEgRm91bmRhdGlvbiBNb2RlbHMgYXBwIiwKICAgICAgInRleHQiOiAiVXNlIFNpcmkgb3IgYSBGb3VuZGF0aW9uIE1vZGVscyBhcHAgb24geW91ciBkZXZpY2UgdG8gdHJpZ2dlciBhY3Rpb25zIHRoYXQgcm91dGUgdGhyb3VnaCB5b3VyIE1DUCBzZXJ2ZXIuIFdhdGNoIHJlcXVlc3RzIGFycml2ZSBhdCB5b3VyIGxvY2FsIHNlcnZlciBpbiByZWFsIHRpbWUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkl0ZXJhdGUgd2l0aG91dCByZWRlcGxveWluZyIsCiAgICAgICJ0ZXh0IjogIkVkaXQgeW91ciBsb2NhbCBzZXJ2ZXIgY29kZSBhbmQgcmVzdGFydCBpdC4gVGhlIFBpbmdneSB0dW5uZWwgVVJMIHN0YXlzIHN0YWJsZSBmb3IgdGhlIHNlc3Npb24uIE5vIGNsb3VkIGRlcGxveSBuZWVkZWQgYmV0d2VlbiBpdGVyYXRpb25zLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "wwdc_2026_ios_developer_guide/wwdc_2026_ios_developer_guide_banner.webp" "WWDC 2026 developer guide: Foundation Models, Core AI, App Intents and MCP" >}}

Apple's WWDC 2026 keynote was June 8. Most of the coverage focused on Siri's new conversational AI, the iOS 27 redesign, and the Gemini integration. That's the consumer story. The developer story is different: four frameworks changed substantially in ways that affect how you architect AI-powered iOS and macOS apps. Two of those changes require migration work whether you want it or not.

This is not a feature list. It's an explanation of what actually changed, what you need to do, and - for those building Apple Intelligence integrations - how to test your local tools against a real device without deploying anything to a cloud server.

{{% tldr %}}
1. <strong>Foundation Models</strong>: A new <code>LanguageModel</code> protocol lets you swap Apple's model for Claude, Gemini, or OpenAI by swapping one Swift Package Manager dependency. Existing session code is unchanged. Image input and a Python SDK are also new.
2. <strong>Core AI</strong>: Replaces Core ML for generative workloads. Runs third-party model weights (Qwen, Mistral, SAM3) directly on Apple Silicon's Neural Engine. Core ML still works in iOS 27 - no deprecation date yet.
3. <strong>App Intents</strong>: SiriKit received a formal deprecation notice. App Intents is now the only way to integrate with Siri under iOS 27 and later. If you have SiriKit extensions, start the migration now.
4. <strong>Xcode 27</strong>: Apple Silicon only, dual-engine agentic coding (local Neural Engine + cloud routing), MCP tools built in, Device Hub replaces Simulator.
5. <strong>MCP platform-wide</strong>: Siri 2.0 can now call registered MCP servers directly. To test a local MCP server from your iPhone, use <a href="https://pinggy.io" target="_blank">Pinggy</a> to expose it over HTTPS in one command.
{{% /tldr %}}

## Foundation Models 3: The LanguageModel Protocol

The headline change is not the new model weights. It's a new Swift protocol called `LanguageModel`.

Before iOS 27, `LanguageModelSession` was backed by Apple's on-device model and Private Cloud Compute - nothing else. Now there is a public `LanguageModel` protocol that any provider can implement. Apple ships three conformances in the box: its own on-device model, `CoreAILanguageModel` for local third-party weights, and `MLXLanguageModel` for GPU-backed inference via the MLX framework.

The interesting part is how third-party cloud providers plug in. Anthropic, Google, and OpenAI each publish a Swift Package Manager package. You add one as a dependency, swap one line in your session setup, and the rest of your app - tool calling, context management, structured outputs - stays exactly the same.

```swift
// Apple's on-device model (default, no extra dependency)
let session = LanguageModelSession()

// Switch to Claude via Anthropic's Swift package
let claudeModel = ClaudeModel(apiKey: .keychain)
let session = LanguageModelSession(model: claudeModel)

// Switch to Gemini via Firebase AI Logic
let geminiModel = GeminiModel(apiKey: .keychain)
let session = LanguageModelSession(model: geminiModel)
```

Auth and billing are handled per-provider through OAuth and Keychain. Per-token usage, including cache and reasoning tokens, is tracked in a unified way.

Other additions in Foundation Models 3:

- **Image input**: `LanguageModelSession` now accepts `Vision.VNImage` alongside text. Object detection, barcode readers, and OCR are callable as tools by the model.
- **Dynamic Profiles**: A mechanism for switching models and tool sets mid-conversation, which is what you want for agent flows that need a fast model for triage and a stronger model for complex steps.
- **Python SDK and `fm` CLI**: A Python SDK and a `fm` command-line tool let you run Foundation Models sessions in scripts and automation without spinning up an Xcode project.
- **Evaluations framework**: A test harness for validating model behavior, similar in spirit to evals frameworks from the cloud AI world, now built into the SDK.

The tradeoff: the provider independence is genuinely useful, but cloud provider calls from a user's device mean latency and cost land on the user or developer. Apple's on-device model is still the right default for most cases. The provider swap is most useful when you need a specific capability - say, Claude's extended context window or Gemini's multimodal reasoning - for a task that can tolerate round-trip latency.

## Core AI: Core ML's Replacement for Generative Workloads

Core ML has been around since iOS 11. It was designed for traditional ML models: image classifiers, tabular regressors, style transfer. It was never designed for streaming token generation, large memory footprints, or agent-style tool calling.

Core AI is its replacement for those workloads. It ships in iOS 27, iPadOS 27, and macOS 27 (Golden Gate), and it handles async inference natively, supports large model footprints in Apple Silicon's unified memory, and opens an explicit slot for third-party model weights.

Apple publishes a `coreai-models` repository with export recipes for Qwen, Mistral, SAM3 (segmentation), and others. The workflow is:

1. Browse the repository, pick a model that fits your task and device requirements
2. Export or download pre-exported weights
3. Add the `coreai-models` Swift package and select the relevant libraries
4. Use `Background Assets` to trigger on-demand model downloads so your app binary stays small
5. Pre-compile with `xcrun coreai-build compile` to avoid first-run specialization latency

```swift
import FoundationModels
import CoreAILanguageModels

// Load a local Qwen or Mistral model
let model = try await CoreAILanguageModel(resourcesAt: modelURL)
let session = LanguageModelSession(model: model)

let response = try await session.respond(to: "Summarize this document.")
```

Structured output works with the same `@Generable` macro as Apple's own model:

```swift
@Generable
struct ProductSummary {
    let title: String
    let keyFeatures: [String]
    let priceRange: String
}

let response = try await session.respond(
    to: "Describe this product",
    generating: ProductSummary.self
)
```

Core ML is not deprecated. Your existing `.mlmodel` files and `MLModel` API calls will keep working in iOS 27. Apple has not given a deprecation timeline. But for any new generative feature you build, Core AI is the intended path. The practical difference is that Core AI's async inference model fits LLMs better than Core ML's synchronous prediction API, and Core AI handles model memory management more gracefully on devices with constrained RAM.

{{< image "wwdc_2026_ios_developer_guide/wwdc_2026_frameworks_overview.webp" "Overview of new developer frameworks at WWDC 2026: Foundation Models, Core AI, App Intents, and Xcode 27" >}}

## App Intents: The Migration Clock Is Running

This one has a deadline attached to it.

SiriKit, the framework you've used since iOS 10 to integrate with Siri through Intent Definition files and `INExtension` subclasses, received a formal deprecation notice at WWDC 2026. It still works in iOS 27. Apple has not announced a removal date. But the signal is clear: App Intents is now the only integration surface for Siri, Shortcuts, Spotlight, and Apple Intelligence under iOS 27 and later.

If your app has a SiriKit extension, it still runs. Users who saved your Shortcuts will still have them. But Siri AI - the conversational, context-aware assistant that can chain actions across apps - cannot call SiriKit intents. Only App Intents-defined actions are visible to Siri AI.

App Intents is a Swift framework available since iOS 16. You declare your app's actions and entities in Swift, mark them with `@AppIntent` and `@AppEntity`, and the system discovers them. No phrase registration, no `.intentdefinition` files, no training data submission required.

What's new in iOS 27 specifically:

- **AppIntentsTesting framework**: A dedicated test harness for validating how Siri resolves and calls your intents. You can write unit tests that simulate a user asking Siri to do something and verify that the right intent fires with the right parameters.
- **View Annotations API**: Annotate SwiftUI views with intent metadata so Siri AI can understand what's on screen and act on it. This is how Siri gains on-screen awareness without you writing explicit OCR or parsing logic.
- **Entity schemas for Spotlight**: App Intents entity schemas now feed directly into Spotlight's semantic index, so your app's content is discoverable through natural language search without any additional indexing code.

A rough migration checklist:

1. Identify which `INIntentHandlingProtocol` subclasses in your codebase still have active users
2. Map each SiriKit domain to an equivalent App Intents schema (most common domains like messaging, payments, and media have documented migration paths in WWDC session 301)
3. Add `AppEntity` definitions for your content types
4. Add `AppIntent` definitions for the core actions
5. Keep the SiriKit extension live during transition so existing Shortcuts don't break

One honest note: App Intents requires iOS 16 minimum. If you support iOS 15, you'll need conditional compilation. If you support iOS 14, you have a more complicated path.

## Xcode 27 and Agentic Coding

Xcode 27 requires an Apple Silicon Mac. If you're still on an Intel machine, that's the first thing to deal with.

The AI coding story in Xcode 27 runs on two engines. A local model runs on the Neural Engine for real-time Swift and Apple SDK suggestions - no network call, no latency, no context leaving your machine. A cloud routing layer handles heavier analysis tasks: architecture questions, cross-file refactoring, test generation. That cloud layer can route to Anthropic's Claude, Google's Gemini, or OpenAI's agents depending on your configuration.

The agentic mode is worth paying attention to. The Xcode agent can:

- Run tests and iterate on failures
- Launch the iOS Simulator, interact with it, and report what it observes
- Inspect visual changes through live previews
- Work with a canvas that renders Markdown and code diffs side by side

Conversations with the agent support interactive planning and multi-turn Q&A. You can build up a spec through back-and-forth before the agent writes a line of code.

Extensibility is through MCP and the Agent Client Protocol. More than 20 tools are wired into the agent in the current release. GitHub and Figma are the first external tools to offer one-click installation directly from their apps. The practical implication: if your team has an internal tool or data source, you can write an MCP server for it and wire it into the Xcode agent directly.

Device Hub replaces the old Simulator interface. It unifies virtual and physical devices in a single pane, which makes running tests across multiple OS versions and screen sizes less painful.

## MCP Goes Platform-Wide

This is the announcement that will matter most six months from now.

MCP support first appeared in Xcode 26.3 in February 2026, limited to the IDE. WWDC 2026 extended it to the OS level: Siri 2.0 and the Core AI routing layer can now connect to MCP servers that users register on their device. An MCP server you host - for your data, your APIs, your internal tools - can be called by Siri AI when a user's natural language request requires it.

The registration mechanism requires explicit user action or enterprise MDM configuration. Users go into Settings and add MCP server URLs manually. Enterprise deployments can push MCP server configurations via MDM profiles. Apple has not added a public app-visible API for registering MCP servers - this is a user-controlled surface, deliberately.

Why does this matter for developers?

Before iOS 27, if you wanted Siri to know about your company's internal calendar, your task management system, or your product catalog, you had to write SiriKit or App Intents code and ship it through the App Store. Your server-side data was only reachable through a client-side shim.

With MCP platform-wide, you can build an MCP server that exposes your data directly and users can register it with Siri. No App Store submission for the integration logic. No client-side code required beyond the registration step. Siri can fetch, query, and act on your data through the MCP tool surface.

The tradeoffs are real: users must register the server manually, the MCP server must be reachable from the internet (or the user's local network if they're on the same network), and Apple has not published what trust signals they use to warn users about unknown MCP servers. Expect the trust model to evolve significantly through the beta period.

## Testing Your Local MCP Server with Pinggy

Here's the practical problem this creates.

You're building an MCP server locally - `localhost:3000/mcp`. You install iOS 27 beta on your iPhone. You want to test whether Siri actually calls your server correctly. But your iPhone is not on the same machine as your dev environment; it can't reach `localhost`.

The usual options for getting a public URL pointing at your laptop are: cloud deployment (slow feedback loop), port forwarding on your router (requires admin access, doesn't survive IP changes), or a tunneling tool.

[Pinggy](https://pinggy.io) is the quickest option here. It works over SSH with no binary installation required:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

That command creates a public HTTPS tunnel to your local port 3000 and prints a URL like `https://randr0m.a.pinggy.link`. You can register that URL in iOS 27's MCP server settings, ask Siri to do something that requires your tool, and watch the request arrive at your local server in real time.

The workflow looks like this:

```
iPhone (iOS 27 Siri)
       |
       | HTTPS request to registered MCP URL
       v
https://abc123.a.pinggy.link/mcp
       |
       | Pinggy tunnel
       v
localhost:3000/mcp  (your local MCP server)
       |
       | You watch logs, edit code, restart
       v
Response flows back up the same path
```

To test App Intents webhook callbacks (if your intent calls back to a local server to complete an action), the same pattern applies - just change the port.

For free tier Pinggy, the URL changes each time you reconnect the tunnel. If you need a stable URL for longer development sessions, Pinggy's paid tiers assign a persistent subdomain. The [Pinggy pricing page](https://pinggy.io/#prices) has the current options.

One important note for MCP security: before sharing your MCP server URL with anyone other than yourself during testing, add basic authentication. Pinggy supports HTTP basic auth via the `-t` flag, which lets you require a username and password before requests reach your local server. For solo development testing on your own device, the bare tunnel is fine.

For a deeper look at MCP server setup and security options, see the earlier Pinggy guide on {{< link href="/blog/share_local_mcp_server_with_pinggy/" >}}exposing local MCP servers{{< /link >}}.

## What to Build This Summer

Given the beta timeline, iOS 27 ships to users around September 2026. That's roughly 12 weeks of beta to build and test.

The highest-value targets in priority order:

**1. Migrate SiriKit extensions to App Intents.** This is the one with an implicit deadline. App Intents is not new - it's been available since iOS 16 - but if you've been putting off the migration, now is the time. WWDC session 301 "Migrate from SiriKit to App Intents" walks through the common patterns.

**2. Build one App Intents action and test it with Siri AI.** Pick one action your app does that a user might want to invoke conversationally. Implement it as an `AppIntent`. Test it against Siri AI in iOS 27 beta using the AppIntentsTesting framework before shipping.

**3. Experiment with Foundation Models + your data.** The Python SDK and `fm` CLI make it possible to prototype Foundation Models sessions without an Xcode project. If you have structured data, try generating summaries or classifications against it locally before deciding which provider to use in production.

**4. Write an MCP server for your internal tooling.** If your team uses an internal API or data source that Siri or your Xcode agent could usefully access, an MCP server is a few hours of work. Expose it through Pinggy for testing, then decide whether it makes sense to deploy it permanently.

Core AI model experimentation is lower priority for most teams unless you have a specific use case that requires on-device inference with custom weights. The model export and compilation workflow is still new, and the available model catalog is smaller than the Ollama ecosystem. Worth watching but probably not worth building against yet.

The WWDC 26 developer sessions, sample code, and documentation are all available at [developer.apple.com/wwdc26](https://developer.apple.com/wwdc26/). The iOS 27 developer beta is live now for enrolled Apple Developer Program members.
