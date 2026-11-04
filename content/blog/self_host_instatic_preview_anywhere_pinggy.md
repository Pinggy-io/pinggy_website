---
title: "Self-Host Instatic and Preview Your Site From Anywhere with Pinggy"
description: "Instatic is a new open-source, self-hosted visual CMS built on Bun - an alternative to Webflow, Framer, and WordPress that ships clean static HTML. Here is how to run it locally and share a live preview instantly with Pinggy."
date: 2026-07-26T11:00:00+05:30
lastmod: 2026-07-26T11:00:00+05:30
draft: false
tags: ["Instatic", "self-hosted CMS", "Webflow alternative", "open source", "Bun", "Pinggy", "static site", "visual editor", "localhost tunnel"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/self_host_instatic_preview_anywhere_pinggy/self_host_instatic_preview_anywhere_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiU2VsZi1Ib3N0IEluc3RhdGljIGFuZCBQcmV2aWV3IEl0IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHJ1bm5pbmcgdGhlIEluc3RhdGljIG9wZW4tc291cmNlIHZpc3VhbCBDTVMgbG9jYWxseSB3aXRoIEJ1biBhbmQgZXhwb3NpbmcgaXQgcHVibGljbHkgb3ZlciBIVFRQUyB1c2luZyBhIFBpbmdneSBTU0ggdHVubmVsLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbG9uZSBhbmQgaW5zdGFsbCBJbnN0YXRpYyIsCiAgICAgICJ0ZXh0IjogIlJ1biBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2NvcmVidW5jaC9pbnN0YXRpYy5naXQsIGNkIGluc3RhdGljLCB0aGVuIGJ1biBpbnN0YWxsLiBCdW4gMS4zLnggb3IgbmV3ZXIgaXMgcmVxdWlyZWQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IEluc3RhdGljIiwKICAgICAgInRleHQiOiAiUnVuIGJ1biBydW4gc3RhcnQgdG8gYnVpbGQgdGhlIGFkbWluIFVJIGFuZCBzZXJ2ZSB0aGUgQ01TIGZyb20gYSBzaW5nbGUgcG9ydC4gQnkgZGVmYXVsdCBpdCBsaXN0ZW5zIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSB3aXRoIFNRTGl0ZSBhbmQgbm8gZXh0cmEgY29uZmlndXJhdGlvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIGEgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkluIGEgbmV3IHRlcm1pbmFsLCBydW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDEgZnJlZS5waW5nZ3kuaW8uIFBpbmdneSBwcmludHMgYSBwdWJsaWMgSFRUUFMgVVJMIHN1Y2ggYXMgaHR0cHM6Ly9hYmMxMjMuYS5waW5nZ3kubGluayB0aGF0IGZvcndhcmRzIHRvIHlvdXIgbG9jYWwgSW5zdGF0aWMgaW5zdGFuY2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNoYXJlIHRoZSBsaXZlIHByZXZpZXciLAogICAgICAidGV4dCI6ICJTZW5kIHRoZSBQaW5nZ3kgVVJMIHRvIGEgY2xpZW50LCB0ZWFtbWF0ZSwgb3IgeW91ciBvd24gcGhvbmUgdG8gdmlldyBhbmQgZWRpdCB0aGUgc2l0ZSB3aGlsZSBpdCBzdGlsbCBydW5zIG9uIHlvdXIgbWFjaGluZSwgd2l0aCBubyBkZXBsb3kgc3RlcCByZXF1aXJlZC4iCiAgICB9CiAgXQp9Cgo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host Instatic and preview it from anywhere - clone the repo and run `bun install && bun run start` (serves on port 3001), then in a new terminal run `ssh -p 443 -R0:localhost:3001 free.pinggy.io` to get a public HTTPS URL for the live CMS.{{< /llm-context >}}

{{< image "self_host_instatic_preview_anywhere_pinggy/self_host_instatic_preview_anywhere_pinggy_banner.webp" "Self-Host Instatic, the open-source Webflow alternative, and preview your site from anywhere with Pinggy" >}}

Instatic gained over 890 GitHub stars in a single day this week, pushing it past 5,300 stars less than a couple of months after its first commits. The pitch is straightforward: a self-hosted visual CMS that replaces Webflow, Framer, and WordPress in one Bun server, and outputs pages that are, in the maintainers' own words, "clean enough to read in view-source." No page-builder div soup, no client-side framework runtime shipped to visitors, just semantic HTML and compact CSS baked to disk.

It's built by the team behind Motion.page and Core Framework, which means the visual editor's design-token system - color scales, fluid typography, spacing - isn't bolted on afterward. It's the same engine a lot of WordPress designers already use, just wired directly into a CMS instead of a page-builder plugin.

{{% tldr %}}
1. Instatic is a self-hosted, open-source, MIT-licensed visual CMS built on Bun and TypeScript - an alternative to Webflow, Framer, and WordPress.
2. It outputs static HTML with almost no client-side JavaScript, alongside a canvas editor, role-based access control, and a sandboxed plugin system.
3. Run it locally: `git clone https://github.com/corebunch/instatic.git && cd instatic && bun install && bun run start` - serves everything from `http://localhost:3001`.
4. Expose it: `ssh -p 443 -R0:localhost:3001 free.pinggy.io`
5. Pinggy prints a public HTTPS URL like `https://abc123.a.pinggy.link` - send that to a client or teammate to preview the live site, no deploy step needed.
{{% /tldr %}}

## What Instatic actually bundles

A lot of "visual CMS" projects are a page builder glued onto a headless backend, with a Postgres instance, a Node API, and a separate frontend deploy to wire together. Instatic collapses that into one process:

- **Canvas editor** - a side-by-side breakpoint editor for building pages visually, with typed components, reusable slots, and a template system for shared site chrome (header, footer, nav).
- **Content engine** - a single content model spans pages, posts, and custom collections, with a data workspace for defining your own post types and an editorial workflow (draft, scheduled, published) with version history.
- **Publisher** - pages are baked to static files on disk at publish time, with an in-memory versioned cache for anything that still needs to be dynamic. The runtime shipped to visitors is roughly 1.1 kB, just enough to auto-detect visitor-specific content.
- **Admin layer** - role-based access control across 38 capabilities, TOTP two-factor auth, an audit log, and a command palette (Cmd+K) for navigating the dashboard.
- **AI agent** - an assistant that edits pages as editable nodes directly on the canvas, with support for Claude, OpenAI, OpenRouter, or a local Ollama model if you don't want to send content to a hosted API.
- **Plugins** - third-party code runs sandboxed in QuickJS-WASM workers with no filesystem or network access by default. A plugin can add routes, admin pages, storage, background jobs, or canvas modules, but only with permissions the site owner explicitly grants.

The tech stack underneath is Bun for the runtime, TypeScript throughout, React 19 with the React Compiler for the admin UI, and SQLite by default (Postgres if you want it). It's MIT licensed, with no paid tiers or "contact sales" gates baked into the open-source repo.

## Running it locally

Instatic needs just one dependency: Bun 1.3.x or newer. There's no database server to install for the default path - SQLite lives in a `.tmp/dev.db` file that gets created automatically.

```bash
git clone https://github.com/corebunch/instatic.git
cd instatic
bun install
bun run dev
```

`bun run dev` runs the admin UI through Vite on `http://localhost:5173`, proxying API calls to the backend. First visit prompts you to create a site and an owner account.

For something closer to how you'd actually run it - one server, one port, no split frontend process - use the production-style build instead:

```bash
bun run start
```

This builds the admin bundle and serves the whole thing, API and admin UI together, from `http://localhost:3001`. That single-port shape is also what makes it trivial to expose over a tunnel, since there's exactly one thing to point at.

If you'd rather run Postgres locally instead of SQLite, a `docker-compose.yml` in the repo spins up a Postgres 16 container automatically the moment `DATABASE_URL` in your environment points at it - `bun run dev` handles starting the container for you.

## Why you'd want to expose it

A self-hosted visual CMS is genuinely useful right up until someone who isn't you needs to look at it. A few situations where that happens constantly:

- A client wants to see the homepage draft before you deploy anything, and "screen-share on a call" is worse than just sending them a link.
- You're testing a webhook-driven form (Stripe, a CRM, a third-party integration) and the provider needs a public URL to call back to, not `localhost:3001`.
- You built the site on your desktop with a GPU for the AI agent, but you want to poke at the admin panel from your laptop or your phone on the couch.
- You're demoing Instatic itself to a teammate before committing to it as your CMS, and installing a second copy is more friction than sharing one running instance.

Instatic's own deployment story covers Railway, Render, and Docker/VPS for when you're ready to go live. None of those help with the "show someone the thing that's running on my machine right now" problem, which is exactly the gap a tunnel fills.

## Exposing Instatic with Pinggy

With `bun run start` running and Instatic listening on port 3001, open a second terminal and run:

```bash
ssh -p 443 -R0:localhost:3001 free.pinggy.io
```

Pinggy prints a public URL:

```
You are allocated a random subdomain.
Please use the following URLs to connect to your tunnel:

http://abc123.a.pinggy.link
https://abc123.a.pinggy.link
```

{{< image "self_host_instatic_preview_anywhere_pinggy/instatic_pinggy_diagram.webp" "Diagram showing Instatic running on localhost:3001 exposed through a Pinggy HTTPS tunnel to a remote client, phone, or teammate" >}}

That HTTPS URL now serves the exact same canvas editor, admin dashboard, and published pages that are running locally - reload the local instance and the public URL reflects it instantly, since it's the same process, not a copy. Send it to a client, open it on your phone, or paste it into a webhook provider's callback field. No firewall rule, no port forward on your router, no certificate to manage.

## Locking it down before you share it

The Pinggy URL is public the moment it's printed, and Instatic's own admin login is your only gate by default. Two things worth doing before you hand the link to anyone:

**Add HTTP basic auth at the tunnel level** if you just want a private preview link and don't want random crawlers or opportunistic scanners even reaching Instatic's login page:

```bash
ssh -p 443 -R0:localhost:3001 -t a@free.pinggy.io +https+auth:username:password
```

**Use a persistent subdomain** if you're sharing the link with a client repeatedly or wiring it into a webhook config that expects a stable URL, rather than a new random one every time you reconnect:

```bash
ssh -p 443 -R0:localhost:3001 -t a@free.pinggy.io +https+myinstaticsite
```

That requires a Pinggy account with a reserved subdomain, but it means the URL doesn't change between sessions. Pinggy's {{< link href="/docs/http_tunnels/" >}}tunnel authentication docs{{< /link >}} cover both approaches in more detail.

## Where it sits versus Webflow and WordPress

Instatic isn't trying to out-feature either of its targets, at least not yet. It's version 0.0.x on purpose - the maintainers are explicit that the API can still shift before a 1.0. What it does have that neither Webflow nor stock WordPress offers is full self-hosting with no per-seat pricing and no plugin marketplace tax, plus an output format (near-zero client JS, semantic markup) that's closer to what you'd hand-write than what either of those platforms typically ships.

The tradeoff is maturity. Webflow's visual editor has a decade of edge cases sanded off. WordPress has every plugin you could want, for better and worse. Instatic is early, the plugin ecosystem is thin so far, and you're one of the first few thousand people running it in production. That's a reasonable bet if you want to own your content and your database file, and a less reasonable one if you need a page builder that's already been battle-tested by a million sites.

## Conclusion

Instatic is a serious attempt at a self-hosted visual CMS that doesn't ship a framework runtime to your visitors, and the fact that it's picking up 890+ stars in a day suggests plenty of people are interested in exactly that trade. Running it locally takes one `bun install` and one `bun run start`. Getting a live, shareable preview of it - for a client, a teammate, or your own phone - takes one more command:

```bash
ssh -p 443 -R0:localhost:3001 free.pinggy.io
```

The source is on <a href="https://github.com/corebunch/instatic" target="_blank">GitHub</a> under MIT, and the project is moving fast enough that it's worth checking back in a few months to see how the plugin ecosystem and the AI agent workflows have matured.
