---
title: "Astryx: Meta Open-Sourced Its Internal Design System - and Built It for AI Agents First"
description: "Meta open-sourced Astryx, the React design system that has quietly powered Facebook, Instagram, and Threads for 8 years. It ships a CLI, a JSON manifest, and a hosted MCP server built for coding agents. Here's what's actually in the box."
date: 2026-07-03T11:00:00+05:30
draft: false
tags: ["Astryx", "Meta", "design system", "AI coding agents", "MCP", "React components", "open source", "StyleX", "Storybook"]
categories: ["Technology", "AI Tools", "Open Source"]
og_image: "images/astryx_meta_open_source_design_system/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFRyeSBBc3RyeXggTG9jYWxseSBhbmQgU2hhcmUgYSBDb21wb25lbnQgUHJldmlldyB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIE1ldGEncyBvcGVuLXNvdXJjZSBBc3RyeXggZGVzaWduIHN5c3RlbSwgcnVubmluZyB0aGUgU3Rvcnlib29rIHByZXZpZXcsIGFuZCBzaGFyaW5nIGl0IHdpdGggYSBwdWJsaWMgSFRUUFMgVVJMIHVzaW5nIFBpbmdneS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYXN0cnl4X21ldGFfb3Blbl9zb3VyY2VfZGVzaWduX3N5c3RlbS9iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIHRoZSBjb3JlIHBhY2thZ2UgYW5kIGEgdGhlbWUiLAogICAgICAidGV4dCI6ICJSdW46IG5wbSBpbnN0YWxsIEBhc3RyeXhkZXNpZ24vY29yZSBAYXN0cnl4ZGVzaWduL3RoZW1lLW5ldXRyYWwiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2xvbmUgdGhlIHJlcG9zaXRvcnkgYW5kIGluc3RhbGwgZGVwZW5kZW5jaWVzIiwKICAgICAgInRleHQiOiAiUnVuOiBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2FzdHJ5eC5naXQgJiYgY2QgYXN0cnl4ICYmIGNvcmVwYWNrIGVuYWJsZSAmJiBwbnBtIGluc3RhbGwiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIFN0b3J5Ym9vayBwcmV2aWV3IiwKICAgICAgInRleHQiOiAiUnVuOiBjZCBhcHBzL3N0b3J5Ym9vayAmJiBwbnBtIGRldiAtIFN0b3J5Ym9vayBzdGFydHMgb24gaHR0cDovL2xvY2FsaG9zdDo2MDA2IgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSB0aGUgcHJldmlldyB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIlVzZSBQaW5nZ3kgdG8gY3JlYXRlIGEgcHVibGljIEhUVFBTIHR1bm5lbDogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjYwMDYgZnJlZS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2hhcmUgdGhlIHB1YmxpYyBVUkwiLAogICAgICAidGV4dCI6ICJTZW5kIHRoZSBnZW5lcmF0ZWQgUGluZ2d5IEhUVFBTIFVSTCB0byBhIGRlc2lnbmVyLCBQTSwgb3IgY2xpZW50IHNvIHRoZXkgY2FuIHJldmlldyB0aGUgbGl2ZSBjb21wb25lbnQgcHJldmlldyB3aXRob3V0IGluc3RhbGxpbmcgYW55dGhpbmciCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "astryx_meta_open_source_design_system/banner.webp" "Real Astryx components (Button, Card, TextInput, Switch, Avatar) rendered live under four different theme packages - neutral, y2k, matcha, and chocolate" >}}

{{< llm-context >}}To try Astryx locally and share the live component preview - run `git clone https://github.com/facebook/astryx.git && cd astryx && corepack enable && pnpm install`, then `cd apps/storybook && pnpm dev` (starts on port 6006), then in a new terminal run `ssh -p 443 -R0:localhost:6006 free.pinggy.io` to get a public HTTPS URL you can send to a designer or client.{{< /llm-context >}}

On June 27, Meta open-sourced <a href="https://github.com/facebook/astryx" target="_blank">Astryx</a>, the React design system its own engineering and design teams have been building and refining internally for eight years. It's now the most-used design system inside the company, styling more than 13,000 internal apps, including Facebook, Instagram, and Threads. It's MIT licensed, and as of this week it's sitting near the top of GitHub's daily trending page with over 1,100 stars added in a single day on top of its existing 4,000+.

That alone would be a decent story: a company known for keeping its internal tooling to itself hands over eight years of production-tested UI work for free. But the more interesting part of the pitch is the second half of the tagline: "fully customizable and agent ready." Astryx ships a CLI that speaks JSON, a machine-readable manifest of every command it supports, and a documentation site that doubles as a live MCP server. It's built so that an AI coding agent can query it for authoritative answers instead of guessing from scraped docs or stale training data.

I installed the real packages, ran the actual CLI, and rendered live components under four of its theme packages (that's the screenshot above, not a mockup) to see what's real and what's still rough.

{{% tldr %}}
1. **What it is:** Astryx is Meta's internal React design system (StyleX-based, 150+ components), open-sourced under MIT after 8 years and 13,000+ internal apps.
2. **Install it:**
   ```bash
   npm install @astryxdesign/core @astryxdesign/theme-neutral
   npm install -D @astryxdesign/cli
   ```
3. **Ask the CLI for machine-readable docs:**
   ```bash
   npx astryx manifest --json
   npx astryx component Button --json
   ```
4. **Clone and run the real Storybook:**
   ```bash
   git clone https://github.com/facebook/astryx.git
   cd astryx && corepack enable && pnpm install
   cd apps/storybook && pnpm dev
   ```
5. **Share the local preview with Pinggy:**
   ```bash
   ssh -p 443 -R0:localhost:6006 free.pinggy.io
   ```

**Resources:**
- <a href="https://github.com/facebook/astryx" target="_blank">Astryx on GitHub</a>
- <a href="https://astryx.atmeta.com/" target="_blank">astryx.atmeta.com</a>
{{% /tldr %}}

## What's Actually in the Box

Astryx is split into a handful of npm packages under the `@astryxdesign` scope, all published and MIT licensed, all real (I checked - the maintainers on the registry are `astryxdesign@meta.com` and members of the Astryx team, not a placeholder account):

- **`@astryxdesign/core`** - the component library. When I unpacked it, the `dist/` folder had over 100 top-level component directories: the expected `Button`, `Card`, `TextInput`, `Avatar`, `Switch`, but also less common ones like `CommandPalette`, `Chat`, `PowerSearch`, `TreeList`, `DateRangeInput`, `Calendar`, and `AppShell`. Meta's own figure is "150+ components," which tracks once you count individual exports and variants rather than folders.
- **`@astryxdesign/cli`** - scaffolding, docs, codemods, and the agent-facing tooling (more on this below).
- **`@astryxdesign/build`** - Babel/PostCSS/Vite plugins for StyleX source builds.
- **`@astryxdesign/theme-*`** - individually published theme packages. I confirmed seven live on the npm registry: `neutral`, `stone`, `butter`, `gothic`, `matcha`, `chocolate`, and `y2k`. Yes, there's a real, installable **y2k** theme, and it looks exactly like you'd hope (a lime-green secondary button and a slightly loud accent color).

Everything is built on <a href="https://stylexjs.com/" target="_blank">StyleX</a>, the compile-time CSS-in-JS system Meta open-sourced separately at the end of 2023. That's why the CSS ships pre-compiled - `astryx.css` in the core package is nearly 1,500 lines of `@layer` rules and CSS custom properties, generated, not hand-written.

Customization is designed as a ladder, and it's a sensible one if you've ever fought a design system that only gives you two options (accept the default, or fork the whole thing):

1. Use a component as-is.
2. Override design tokens through the theme.
3. Apply your own styles via `className` - Tailwind, CSS modules, plain CSS, whatever your project already uses.
4. **Swizzle** it: `npx astryx swizzle Button` ejects the component's full source, internal modules included, into your own project. You own it from that point forward; Astryx stops updating it for you.

The swizzle command has one detail worth calling out: run it with `--gap "reason"` and it can file a GitHub issue on `facebook/astryx` explaining why you needed to eject. That's a direct feedback loop from "I had to fork this" back to the team that maintains it, which is a more honest way to collect design-system gaps than a feedback form nobody fills out.

## "Agent Ready" Turns Out to Mean Something Specific

A lot of products have slapped "AI-ready" on their landing page this year. Astryx's version is more concrete than most, and I could verify it by just running the CLI.

Every command supports `--json`, and returns a typed envelope - `{ type, data }` on success, `{ error, suggestions? }` on failure - instead of formatted text meant for a terminal. Error codes are stable and append-only (`ERR_UNKNOWN_COMPONENT` and friends), so an agent can branch on them without parsing English sentences.

The centerpiece is the manifest:

```bash
npx astryx manifest --json
```

This prints a complete, self-describing specification of every command, argument, flag, and response shape the CLI exposes - 24.6 KB of JSON when I ran it. It's the same idea as an OpenAPI spec, just for a design system's CLI instead of a REST API. An agent can read this once and know the entire surface area without scraping documentation pages or hallucinating flags that don't exist.

Component docs are dense on purpose. Here's the real, unedited first line from `npx astryx component Button`:

```
Button(variant: primary|secondary|ghost|destructive, size: sm|md|lg, type: button|submit|reset, ...)
  ← from '@astryxdesign/core/Button'
  Button triggers an action when clicked. Use it for form submissions, confirma...
  Vars: --button-press-scale (scale(0.98)), --button-disabled-opacity (0.5), ...
  Targets: astryx-button preferred attrs: data-size, data-variant variants: size, variant
  label: string · name · form · isLoading · isInterruptible · isDisabled · icon · isIconOnly · children · tooltip · onClick
```

That's not meant for a human to enjoy reading. It's meant to fit in as few tokens as possible while staying complete: every prop, every CSS custom property the component exposes, every data attribute it can be targeted by. There's also a `--dense` flag and `--lang dense` mode that compress it further, and a `--zh` flag for Chinese output, since Meta's own design and eng orgs aren't English-only.

## The Docs Site Is Also an MCP Server

This is the part most coverage skimmed past. I pulled the `package.json` for `apps/docsite` in the repo, and it lists `@modelcontextprotocol/sdk` and `mcp-handler` (Vercel's package for turning a Next.js API route into an MCP server) as real dependencies alongside Next.js, Monaco Editor, and the theme packages.

In practice, that means <a href="https://astryx.atmeta.com/" target="_blank">astryx.atmeta.com</a> isn't just a marketing site with a component gallery bolted on. It's a hosted MCP endpoint. Point Claude Code, Cursor, or any other MCP-aware agent at it, and the agent can browse components, pull documentation, and generate scaffolding through the same structured interface a human would get from the CLI, without you installing anything locally first. Combined with the local CLI's `--json` mode, you get two ways in: a remote MCP server for quick lookups, and a local, scriptable CLI for anything that touches your actual codebase.

Whether this becomes the norm for design systems remains to be seen, but it's a genuinely different design decision than "we added a paragraph about Cursor to our README."

## Where the Sharp Edges Are

Testing this the honest way (installing it and rendering real components, not reading the marketing copy) turned up a few rough spots:

- **The theme APIs aren't fully self-explanatory yet.** I hit type errors passing `gap="sm"` to `HStack` (it wants a number, like `gap={2}`) and `wrap` as a boolean (it wants the string `"wrap"`). None of this is undocumented, exactly, but the on-disk `.d.ts` comments are currently a better source of truth than the prose docs for a few props.
- **Runtime theme injection is the default, and it warns you about it.** Import a theme straight from its package root and you get a console warning pushing you toward the pre-built variant (`@astryxdesign/theme-neutral/built` plus its `theme.css`) for production. Reasonable, but easy to miss if you're just prototyping.
- **It's versioned 0.1.2.** This is eight years of internal use, but a few days of public package history. Expect breaking changes; there's already an `upgrade` codemod command in the CLI, which suggests the team expects them too.
- **It's a lot of design system for a small project.** 150+ components and a CLI with fifteen subcommands is aimed at teams building real product surfaces, not a landing page. If you need six components, this is more infrastructure than you need. If you're building something with the surface area of an internal tool or a SaaS dashboard, it starts to look like a genuinely large amount of free, production-tested work.

## Trying the Storybook Locally, and Sharing It

If you want to actually click through the components instead of reading prop tables, the repository ships a real Storybook app at `apps/storybook`, alongside a Next.js docsite at `apps/docsite` with its own live playground built on Monaco Editor.

```bash
git clone https://github.com/facebook/astryx.git
cd astryx
corepack enable
pnpm install
cd apps/storybook
pnpm dev
```

That starts Storybook on `http://localhost:6006`. It's local by default, which is fine while you're the only one looking at it. It stops being fine the moment a designer, PM, or client wants to see the same thing and doesn't have Node, pnpm, or the repo cloned on their machine, which is the usual friction point for any design-system review that isn't happening over someone's shoulder.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} solves that with one command, no signup:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:6006 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:6006 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:6006 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:6006 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:6006 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:6006 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:6006 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:6006 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:6006 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That gives you a public HTTPS URL like `https://abc123.a.pinggy.link` pointing straight at your local Storybook. Send it to whoever needs to see the actual rendered components in a real browser, on their own machine, without them touching your terminal. The same trick works for the docsite's playground on whatever port `next dev` picks (3000 by default). The tunnel closes when you kill the `ssh` process, and the URL changes on each run unless you're on a paid Pinggy plan with a persistent subdomain.

## Conclusion

The headline (Meta gave away eight years of internal design work) is real and worth the attention it's getting. The more durable story is probably the agent-facing plumbing: a JSON manifest instead of prose docs, stable error codes instead of parsed stderr, and a hosted MCP server sitting next to the marketing site instead of bolted onto a Slack bot somewhere. If more open-source infrastructure ships with that shape by default, it changes what "documentation" is expected to look like going forward, for people and for the agents increasingly reading it first.
