---
title: "HTML over WebSockets: The Web's Quiet Move Back to the Server"
description: "LiveView, Hotwire, Datastar, and Blazor Server all push rendered HTML over a persistent connection instead of JSON. Here's why the pattern keeps resurfacing, what it costs you, and what changes when you test it."
date: 2026-08-13T11:30:00+05:30
draft: false
tags: ["WebSockets", "web development", "developer tools", "networking", "tunneling"]
categories: ["Technology", "Development", "Web Development"]
og_image: "images/html_over_websockets_web_moves_back_to_server/html_over_websockets_web_moves_back_to_server_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "html_over_websockets_web_moves_back_to_server/html_over_websockets_web_moves_back_to_server_banner.webp" "Diagram comparing a traditional SPA fetching JSON from an API against HTML over WebSockets, where the server renders HTML and pushes it over a persistent connection" >}}

In April 2020, Chris McCord posted a screencast with a blunt title: "Build a real-time Twitter clone in 15 minutes with LiveView and Phoenix 1.5. No need to write JavaScript." He built a timeline that broadcast new posts to every connected browser instantly, with payloads he claimed were smaller than a hand-written SPA would send. There was no REST API, no JSON schema, no client-side rendering framework. The server rendered HTML, diffed it against what the browser already had, and pushed just the difference down an open connection.

That idea, usually called "HTML over WebSockets" or "server-driven UI," has been quietly picking up steam again. Rails shipped Hotwire. Laravel shipped Livewire. Symfony shipped UX Live Components. .NET has had Blazor Server for years. A newer, much smaller library called Datastar is doing the same thing in 11KB. None of these are new ideas exactly, but the list of teams betting on them in production keeps growing, and it's worth understanding why.

{{% tldr %}}
1. HTML over WebSockets/SSE means the server renders HTML and pushes it over a persistent connection, instead of the browser fetching JSON and rendering it client-side.
2. Phoenix LiveView is the most established implementation; Rails Hotwire/Turbo, Laravel Livewire, Symfony UX Live Components, Blazor Server, and Datastar all do variations of the same pattern.
3. The tradeoff is real: one codebase and no API layer, but the server now holds per-connection state, which changes how you scale and how you monitor failures.
4. WebSockets guarantee in-order delivery and support bidirectional push; Server-Sent Events get you automatic reconnection and plain HTTP compatibility but only push one way.
5. Testing this locally is different from testing a stateless API, reconnect behavior and multi-client broadcast state matter more than a single request/response cycle.
6. To test it from a real phone on a real cellular connection, you need a tunnel that forwards the WebSocket upgrade handshake untouched, not one that only understands plain HTTP.
{{% /tldr %}}

## What "HTML over WebSockets" actually means

In a typical SPA, the browser holds application state in JavaScript, calls an API for data, gets JSON back, and re-renders part of the page. That means two codebases: a backend that returns data, and a frontend that knows how to turn that data into markup. Keeping the API contract in sync between them is a permanent maintenance tax.

HTML over WebSockets collapses that into one codebase. The server keeps a live connection open per client, holds that client's view state in memory, and whenever something changes, it re-renders the relevant HTML fragment and pushes it down the wire. The browser's job shrinks to "receive this HTML, patch it into the DOM." Frameworks in this space ship a small client-side runtime, usually a few kilobytes, that handles the patching, form serialization, and reconnection, but you rarely write JavaScript yourself.

The pitch is that you get real-time updates for free: broadcast a change to every connected client's process, and everyone's markup updates without polling or a manual WebSocket message handler. And you get it without owning a REST or GraphQL API surface at all.

## Older than the name suggests

The pattern is not new, and the obvious objection, that this reinvents ASP.NET WebForms and DHTML-style postbacks from the 2000s, is not wrong about the shape. What's different now is the diffing. Early postback-style frameworks re-sent whole page fragments and clobbered scroll position and focus. Modern implementations diff the rendered HTML tree (via libraries like morphdom or idiomorph) and patch only what changed, which is what makes it viable for interactive UI instead of just page reloads with extra steps.

Production use predates LiveView's public debut too. Booking.com built something similar in-house around 2014-2015: server-side templating plus morphdom for DOM patching, years before Phoenix made the pattern famous. LiveView, which shipped for Elixir/Phoenix in 2019, is generally credited as the implementation that made the idea mainstream and portable to other ecosystems, but it didn't invent the technique.

## The current field

A few frameworks cover most of this space today, and they're not interchangeable:

- **Phoenix LiveView** (Elixir) is the most mature implementation and the one everyone else gets compared to. It leans on the BEAM's lightweight processes to hold millions of connections cheaply, which is a big part of why it scales the way it does.
- **Rails Hotwire (Turbo + Stimulus)** ships Turbo Streams, which can broadcast partial page updates over WebSocket via Action Cable, and Stimulus for the sliver of JavaScript you still need. 37signals built HEY and Basecamp on it and has been vocal about skipping the SPA build step entirely.
- **Laravel Livewire** and **Symfony UX Live Components** bring the same idea to PHP, wiring component state to the server instead of a client store.
- **Blazor Server** (.NET) runs your component tree on the server and streams UI diffs to the browser over SignalR, which is effectively WebSockets with fallbacks. It's popular for internal, employee-only tools where the always-on connection isn't a dealbreaker.
- **Datastar** takes a different transport bet: it uses Server-Sent Events instead of WebSockets, and fits in about 11KB by merging Alpine.js-style client reactivity with htmx-style backend-driven updates into one library.
- **htmx** itself is mostly a stateless, HTTP-based tool, but pairs with its SSE extension when you need server push without going full WebSocket.

None of these agree on transport, and that disagreement is the most interesting technical argument in this space right now.

## WebSocket or SSE: the transport fight

WebSockets guarantee in-order, bidirectional delivery over a single TCP connection. That matters when the server is maintaining stateful UI and the client also needs to push events back frequently, form input, clicks, keystrokes for live validation. It's also more resource-hungry: every open socket is a held connection and (usually) held server-side state, and naive implementations are vulnerable to slow, resource-exhausting connection floods the way any long-lived TCP service is.

Server-Sent Events are HTTP, not a protocol upgrade. That gets you automatic reconnection out of the box (the browser retries and sends a `Last-Event-ID` header so the server can resume where it left off), and it survives strict corporate proxies that mangle WebSocket upgrades better than WebSockets do. The catch is that SSE is one-directional, server to client only, and under HTTP/1.1 browsers cap you at six connections per origin, which can bite you if a user has several tabs open. HTTP/2 mostly removes that ceiling through multiplexing.

Neither side has fully won the argument. Frameworks that need tight, bidirectional interactivity (LiveView, Blazor Server) reach for WebSockets. Frameworks optimizing for simplicity and resilience over flaky networks (Datastar, htmx+SSE) reach for SSE. WebTransport, built on HTTP/3 and QUIC, is the theoretical next step that could give you SSE's resilience with WebSocket's bidirectionality, but browser support is still uneven enough that nobody is shipping production apps on it yet.

## What you give up

This isn't a free upgrade. A few costs are worth naming plainly:

- **Server memory scales with connections, not requests.** A stateless JSON API can be scaled by throwing more instances behind a load balancer with no coordination required. A stateful WebSocket app needs sticky sessions (so a client's reconnect lands on the same process) or a shared backplane (Redis pub/sub is the common choice for Rails and Phoenix deployments) so a broadcast reaches clients connected to different servers.
- **No offline mode.** If the connection drops, there's often no cached client-side state to fall back on. The UI is genuinely just a window into server state.
- **Monitoring looks different.** A slow or hung server process behind a WebSocket can look perfectly healthy at the TCP layer while doing nothing useful, unlike a stateless HTTP request that just times out and gets retried.
- **It's a worse fit for offline-capable, highly interactive consumer apps** where you want optimistic UI updates ahead of any server round trip. Internal tools, admin panels, and dashboards, where every user is basically always online, are consistently the sweet spot people report success with.

## Why it's getting a second look now

Part of the current appeal is unrelated to real-time features at all: fewer moving parts means less for an AI coding agent to get wrong. When your rendering logic and your data layer live in one codebase with no API contract to keep in sync, a model generating or editing code has one source of truth to reason about instead of two that can silently drift apart. That's speculative as a driving trend, but it lines up with why teams keep reaching for Hotwire, Livewire, or LiveView on new internal tools in 2026 rather than standing up a separate frontend build.

## Testing a stateful connection is a different problem

Here's the part that's easy to overlook until you hit it: testing a WebSocket-driven app on `localhost` tells you almost nothing about how it behaves for a real user. A stateless JSON endpoint either returns the right response or it doesn't. A LiveView or Turbo Streams page has a live connection that needs to survive a phone switching from WiFi to LTE, a laptop going to sleep, or two people looking at the same broadcast state from different devices at the same time. None of that shows up when you and your one browser tab are both sitting on the same machine as the server.

The practical fix is to get the app off `localhost` and onto a real public URL you can hit from an actual phone on an actual cellular network, without deploying anywhere. Pinggy does this with a single SSH command:

```bash
ssh -p 443 -R0:localhost:4000 free.pinggy.io
```

That forwards a TCP connection, not just HTTP requests, so the WebSocket upgrade handshake passes through unmodified, the same way it would through Turbo's Action Cable connection or LiveView's socket. You get back a public `https://<random>.a.pinggy.link` URL. Open it on your phone over cellular data, and you can watch the reconnect logic actually fire when you walk out of WiFi range, or open the same URL on two devices to check that a broadcast update lands on both. Close the SSH session and the tunnel is gone, no server to tear down.

## Should you reach for it

If you're building an internal tool, an admin dashboard, or anything where every user is reliably online and the interactivity needs are "update this list when something changes" rather than "feel instant on every keystroke," this pattern removes a whole API layer for a modest server cost. If you're building a highly interactive consumer product that needs to work offline or feel snappy before any round trip completes, the case for a traditional SPA is still strong. The honest answer, six years after that first LiveView screencast, is that this stopped being a novelty and became a legitimate default for a specific, common category of app. Just go in knowing you're trading a build step for a persistent connection to babysit.

---

**Further reading:**
- <a href="https://www.phoenixframework.org/blog/build-a-real-time-twitter-clone-in-15-minutes-with-live-view-and-phoenix-1-5" target="_blank">Build a real-time Twitter clone in 15 minutes with LiveView and Phoenix 1.5</a> - Phoenix Framework Blog
- <a href="https://hotwired.dev/" target="_blank">Hotwire: HTML Over The Wire</a> - Hotwired.dev
- <a href="https://world.hey.com/dhh/bringing-hotwire-to-basecamp-91a442d6" target="_blank">Bringing Hotwire to Basecamp</a> - DHH
- <a href="https://github.com/starfederation/datastar/" target="_blank">Datastar: the hypermedia framework</a> - GitHub
