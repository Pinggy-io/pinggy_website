---
title: "DESIGN.md: Teach Your Coding Agent Your Design System Once"
description: "Google Labs open-sourced DESIGN.md, a YAML-plus-Markdown spec that gives AI coding agents a persistent, structured understanding of your design system. Here is what it is, how the format works, and how to use it with Claude Code or Cursor."
date: 2026-06-27T10:00:00+05:30
lastmod: 2026-06-26T10:00:00+05:30
draft: false
tags: ["DESIGN.md", "AI coding agents", "design system", "Claude Code", "Cursor", "design tokens", "Google Labs"]
categories: ["Technology", "Development", "AI Tools"]
og_image: "images/design_md_coding_agent_design_system/design_md_coding_agent_design_system_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIENyZWF0ZSBhbmQgVXNlIERFU0lHTi5tZCB3aXRoIEFJIENvZGluZyBBZ2VudHMiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gd3JpdGluZyBhIERFU0lHTi5tZCBmaWxlIGFuZCB1c2luZyBpdCB3aXRoIENsYXVkZSBDb2RlLCBDdXJzb3IsIGFuZCBvdGhlciBBSSBjb2RpbmcgYWdlbnRzIGZvciBjb25zaXN0ZW50IFVJIGdlbmVyYXRpb24uIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNyZWF0ZSB5b3VyIERFU0lHTi5tZCBmaWxlIiwKICAgICAgInRleHQiOiAiQWRkIGEgREVTSUdOLm1kIGZpbGUgdG8geW91ciBwcm9qZWN0IHJvb3QuIFN0YXJ0IHdpdGggWUFNTCBmcm9udCBtYXR0ZXIgYmV0d2VlbiAtLS0gZmVuY2VzIGNvbnRhaW5pbmcgeW91ciBkZXNpZ24gdG9rZW5zOiBjb2xvcnMsIHR5cG9ncmFwaHksIHNwYWNpbmcsIGFuZCByb3VuZGVkIGNvcm5lciB2YWx1ZXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRlZmluZSB5b3VyIGRlc2lnbiB0b2tlbnMgaW4gWUFNTCIsCiAgICAgICJ0ZXh0IjogIkZpbGwgaW4gdGhlIFlBTUwgYmxvY2sgd2l0aCB5b3VyIGJyYW5kIGNvbG9ycyBhcyBoZXggdmFsdWVzLCB0eXBvZ3JhcGh5IHNldHRpbmdzIHdpdGggZm9udEZhbWlseSwgZm9udFNpemUsIGFuZCBmb250V2VpZ2h0LCBhbmQgc3BhY2luZyBzY2FsZSB2YWx1ZXMgaW4gcGl4ZWxzIG9yIHJlbSB1bml0cy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiV3JpdGUgdGhlIG1hcmtkb3duIGRlc2lnbiByYXRpb25hbGUiLAogICAgICAidGV4dCI6ICJBZnRlciB0aGUgWUFNTCBibG9jaywgd3JpdGUgbWFya2Rvd24gc2VjdGlvbnMgZm9yIE92ZXJ2aWV3LCBDb2xvcnMsIFR5cG9ncmFwaHksIExheW91dCwgYW5kIENvbXBvbmVudHMuIEV4cGxhaW4gdGhlIHdoeSBiZWhpbmQgZWFjaCBkZWNpc2lvbiBzbyBhZ2VudHMgYXBwbHkgdG9rZW5zIGluIHRoZSByaWdodCBjb250ZXh0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJMaW50IGFuZCB2YWxpZGF0ZSB0aGUgZmlsZSIsCiAgICAgICJ0ZXh0IjogIlJ1biBucHggQGdvb2dsZS9kZXNpZ24ubWQgbGludCBERVNJR04ubWQgdG8gY2F0Y2ggYnJva2VuIHRva2VuIHJlZmVyZW5jZXMgYW5kIFdDQUcgY29udHJhc3QgdmlvbGF0aW9ucyBiZWZvcmUgeW91ciBhZ2VudHMgc3RhcnQgdXNpbmcgdGhlIGZpbGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkFkZCBERVNJR04ubWQgdG8geW91ciBhZ2VudCBjb250ZXh0IiwKICAgICAgInRleHQiOiAiUmVmZXJlbmNlIERFU0lHTi5tZCBpbiB5b3VyIGNvZGluZyBhZ2VudCBjb250ZXh0LiBGb3IgQ2xhdWRlIENvZGUsIGFkZCBpdCB0byB5b3VyIENMQVVERS5tZCBvciBzeXN0ZW0gcHJvbXB0LiBUaGUgYWdlbnQgcmVhZHMgdG9rZW5zIGFzIG5vcm1hdGl2ZSB2YWx1ZXMgYW5kIHByb3NlIGFzIGRlc2lnbiBndWlkYW5jZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "design_md_coding_agent_design_system/design_md_coding_agent_design_system_banner.webp" "DESIGN.md: A specification for describing your design system to AI coding agents" >}}

Every developer using AI coding agents has hit this wall. You ask Claude Code or Cursor to build a card component. It comes out in the right structure but the wrong blue. You correct it, add context about your design system, generate a few more components - and the next session starts from scratch. The agent has no memory of the brand colors you established last time, the spacing scale you spent an hour defining, or the specific reasoning behind your typography choices.

Google Labs released a fix for this on April 21, 2026: an open spec called <a href="https://github.com/google-labs-code/design.md" target="_blank">DESIGN.md</a>. It hit 5,000 GitHub stars within 72 hours and added 1,500 more yesterday alone, making it the most-starred new repo on GitHub today. The concept is simple - a plain-text file that lives in your repo and encodes your entire design system in a format AI agents can actually parse.

{{% tldr %}}
1. DESIGN.md is a YAML-plus-Markdown spec (published by Google Labs, Apache 2.0) that encodes your design system so AI coding agents can read it once and apply it consistently.
2. The file has two layers: machine-readable YAML tokens (exact colors, typography, spacing values) and human-readable Markdown sections explaining the design rationale.
3. It works with Claude Code, Cursor, v0, and any agent that can read a text file - it lives in version control like any other source file.
4. The CLI (`npx @google/design.md lint`) validates token integrity and checks WCAG AA contrast ratios. Export to Tailwind config or W3C Design Tokens format.
5. The spec is still in alpha - not all agents read it automatically yet. You need to reference it explicitly in your context or CLAUDE.md.
{{% /tldr %}}

## The actual problem it solves

Design systems are not hard to document. They are hard to keep in sync with the places where UI gets generated - and AI agents just added a new place.

Before, your Figma file held the canonical source of truth. Developers translated it manually. There was friction, but it was at least a defined handoff. Now agents are generating UI on the fly, directly in the codebase, and they have no connection to that Figma file or whatever CSS custom properties you settled on six months ago.

The band-aid solution most teams reach for is pasting design context into the system prompt or CLAUDE.md: "use `#6366f1` for primary actions, use `Inter` for body copy, use 8px base spacing." That works until it doesn't - context gets truncated, colleagues add their own overrides, tokens drift from the actual CSS variables, and there's no validation step that catches the inconsistencies.

DESIGN.md is the proposal for a proper solution: a structured file format that agents can parse reliably, that lives in version control, and that has tooling around it (linting, diffing, exporting).

## What the format looks like

A DESIGN.md file has two parts. The YAML front matter sits between `---` fences at the top and contains machine-readable tokens. The markdown body that follows gives the design rationale in prose.

Here is a minimal but real example:

```yaml
---
name: Acme SaaS
colors:
  primary: "#6366f1"
  primary-dark: "#4f46e5"
  surface: "#0f172a"
  surface-raised: "#1e293b"
  text: "#f1f5f9"
  text-muted: "#94a3b8"
  success: "#10b981"
  danger: "#ef4444"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.1
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.6
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.06em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    borderRadius: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
---

## Overview

Clean, technical dark-mode SaaS aesthetic. The product is a developer tool, so the UI should feel like something a developer would build themselves - precise, not decorative. Use indigo as the sole accent color. Never introduce secondary accent colors without explicit sign-off.

## Colors

The `primary` color handles all interactive elements: buttons, links, active states, focus rings. `surface` is the base background; `surface-raised` is for cards and modal overlays. Avoid `text` on `surface-raised` without contrast checking - use `text-muted` for secondary labels.

## Typography

Inter is the only typeface. `h1` is reserved for page-level headings only - one per view. For section titles, use `h2`. Body copy uses `body-md`. For metadata, labels, and tags, use `label-sm` in uppercase.

## Layout

Base unit is 8px. All padding and margin values should snap to multiples of this unit. Max content width is 1280px with 24px gutters. On mobile, gutters compress to 16px.

## Components

Buttons: use `button-primary` for the single primary CTA per view. Use a ghost style (transparent background, `primary` border) for secondary actions. Never stack two `button-primary` elements side by side.
```

The `{colors.primary}` syntax inside component definitions cross-references other tokens, so you can change a color in one place and have it propagate through all the component definitions that reference it.

The markdown sections are not optional decoration. Agents treat the YAML tokens as the normative values and the markdown prose as the context for applying them correctly. The prose is what prevents an agent from using `text` on a `surface-raised` background and creating a 1.8:1 contrast ratio that technically uses the right tokens but violates the intent.

## Supported token types

The spec defines five core token categories:

- **colors**: any CSS-compatible value - hex, `rgb()`, `oklch()`, named colors
- **typography**: objects with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`
- **spacing**: scale-level keys (`xs`, `sm`, `md`, etc.) mapped to pixel or rem values
- **rounded**: corner radius definitions
- **components**: named UI elements with variant states

Typography is where most real-world systems get complex. The spec supports 9-15 typography levels, which covers most design systems. A common naming pattern is semantic categories - `display`, `headline`, `body`, `label`, `caption` - with size suffixes (`-sm`, `-md`, `-lg`).

## The CLI

The spec ships with a CLI that adds actual tooling around the file:

```bash
# Lint token integrity and WCAG contrast
npx @google/design.md lint DESIGN.md

# Show what changed between two versions
npx @google/design.md diff DESIGN.md DESIGN-v2.md

# Export to Tailwind config
npx @google/design.md export --format json-tailwind DESIGN.md

# Export to W3C Design Tokens format
npx @google/design.md export --format w3c DESIGN.md
```

The linter catches three categories of problems: structural errors (missing required fields, invalid token types), broken token references (`{colors.nonexistent}` will flag), and WCAG AA contrast violations. That last one is genuinely useful - it means your DESIGN.md file acts as an automated contract that the color combinations you've defined are accessible.

The `diff` command is useful during design system updates. Instead of eyeballing what changed between two versions of your tokens, you get a structured diff at the token level.

The `export` commands are what make DESIGN.md composable with existing tooling. You can use DESIGN.md as the canonical source and emit a Tailwind config from it, rather than maintaining both files by hand.

## How to wire it up with coding agents

The spec does not auto-inject itself into agent context. You have to reference it explicitly, which is a design choice - different agents have different context mechanisms and Google did not want to bake in assumptions about how each one works.

**For Claude Code**, the most reliable approach is to add a line to your `CLAUDE.md`:

```markdown
## Design System
Read DESIGN.md in the project root before generating any UI code.
Treat the YAML tokens as normative values and the markdown sections as 
design rationale. Do not introduce colors, font sizes, or spacing values
that are not in the token set.
```

This gets included in every session's context automatically.

**For Cursor**, add DESIGN.md to `.cursorrules` or reference it in your system prompt. Cursor's docs suggest keeping context files short, but the YAML-only portion of a well-structured DESIGN.md is typically under 80 lines.

**For v0** and similar tools, you can paste the YAML block directly into the system context field. It is dense but small.

One practical tip: if your DESIGN.md tokens are already expressed as CSS custom properties in your codebase, keep them in sync manually for now. There is a community-maintained script that generates DESIGN.md from CSS variables, but it is not part of the official tooling yet.

## The ecosystem that formed around it

A few interesting things happened after the spec went open-source.

<a href="https://designmd.app/" target="_blank">designmd.app</a> maintains a collection of over 450 DESIGN.md files for major brand systems - Stripe, Spotify, Apple, Figma, and many others. These are community-contributed, not official, so treat them as starting points rather than authoritative sources.

The <a href="https://github.com/VoltAgent/awesome-design-md" target="_blank">awesome-design-md</a> collection on GitHub crossed 64,000 stars. Most of the growth comes from developers looking for a reference implementation for a brand they are building on top of (Stripe's design system is the most-forked one, predictably).

There is also a Chrome extension that generates a starter DESIGN.md from any website's computed styles. It is rough - it will pull hex values from the DOM but does not infer the semantic roles - but it is useful as a first draft you then clean up.

## What it does not solve

A few honest caveats:

**It is still alpha.** The spec has a version field, but the schema is under active revision. Token names that work today may not map cleanly to the next version. Pin the CLI version in your package.json if you are using this in production.

**Agent adoption is uneven.** Claude Code picks it up well when explicitly referenced. Some tools do not read additional context files at all. DESIGN.md is more of a convention at this point than a protocol with broad enforcement.

**Tokens drift from CSS.** If you maintain CSS custom properties and a DESIGN.md file separately, they will diverge. The spec intentionally does not try to replace your CSS variables or Tailwind config - it layers on top. But two sources of truth means two things to update.

**It does not cover all design decisions.** Animation timing, shadows, Z-index stacks, responsive breakpoints - these are real design system concerns that are not in the spec yet. The markdown prose can document them, but there is no YAML schema for a shadow ramp the way there is for spacing.

## Getting started

If you want to try it on a real project:

1. Create `DESIGN.md` in your project root. Start with just the YAML block - the five token categories - and leave the markdown body sparse.
2. Run `npx @google/design.md lint DESIGN.md` to catch errors before you rely on it.
3. Add a reference to DESIGN.md in your CLAUDE.md (or equivalent agent config) and test it by asking the agent to build a new component without specifying any styles. See how close it gets.
4. Iterate. The markdown rationale section matters more than you might expect - it is how you teach the agent to make judgment calls in cases the tokens do not explicitly cover.

The spec is at <a href="https://github.com/google-labs-code/design.md" target="_blank">github.com/google-labs-code/design.md</a> under Apache 2.0. The README has a more formal spec document and a handful of worked examples including the festival-theming one that shows how far you can push the component token definitions.

## Why this is the right direction

The deeper point is not about the specific format - it is about the category of problem. Right now most teams using AI coding agents have an informal understanding of their design system that lives in designers' heads, Figma files, and scattered CSS comments. That worked when humans were the bottleneck; it breaks when agents are generating UI alongside them.

DESIGN.md is a bet that a structured file in version control - with linting, diffing, and export tooling - is a better long-term answer than pasting design context into prompts. The alternative approaches (feeding agents the Figma API, writing elaborate CLAUDE.md design sections, hoping agents generalize from existing components) each have real failure modes that a proper spec avoids.

Whether DESIGN.md specifically becomes the standard or gets displaced by something else, the pattern it establishes - design system as a version-controlled, machine-readable artifact - seems like an inevitable step in how teams use AI agents for product work.
