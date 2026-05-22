---
title: "localhost:5173 - Vite Development Server Port Guide"
description: "Complete guide to localhost:5173 - the default port for Vite development server used by Vue.js, React, and modern frontend frameworks."
date: 2025-01-30T10:00:00+05:30
lastmod: 2026-05-21T10:00:00+05:30
draft: false
tags: ["localhost", "port", "vite", "vue", "react", "frontend", "development"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
  <h2 style="margin: 0 0 15px 0; color: white; font-size: 2.2em;">localhost:5173</h2>
  <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9); font-size: 1.1em;">Vite Development Server Port</p>
  <a href="http://localhost:5173" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3); transition: all 0.3s ease; border: none;">
    ⚡ Open localhost:5173
  </a>
  <p style="margin: 15px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;">
    Vite's default dev server, with HMR over native ES modules
  </p>
</div>

**`localhost:5173`** is the address Vite's dev server binds to by default when you run `npm run dev`. `localhost` resolves to `127.0.0.1` (your machine), and `5173` is the port Vite picked back in v2.7 to dodge collisions with Create React App on 3000 and friends.

There's a small joke in the number itself: 5-1-7-3 reads as V-I-T-E if you squint at a phone keypad. Cute, but the reason most frontend projects you touch in 2026 land on this port is more boring - Vite is the default dev server for almost every modern framework.

As of 2026, Vite 8 ships with **{{< link href="https://rolldown.rs/" >}}Rolldown{{< /link >}}**, a Rust-based bundler that replaces the old Rollup + esbuild split. Production builds are 1.6x to 7.7x faster than Vite 7 on real codebases (Linear reported 46s -> 6s; Ramp -57%; Beehiiv -64%). Plugin API compatibility was preserved, but some Rollup plugins that reach into internals still need updates - check before upgrading large monorepos. The dev server on `localhost:5173` works the same as before, though under the hood it now uses the **Environment API** (introduced in Vite 6) to handle client, SSR, and edge runtimes as separate, configurable environments - the foundation TanStack Start, Nuxt, and SvelteKit build on for unified dev/prod parity. Around it, the ecosystem has picked up **{{< link href="https://tanstack.com/start" >}}TanStack Start{{< /link >}}** (full-stack React on Vite, v1 RC since early 2026), **{{< link href="https://voidzero.dev/posts/announcing-vite-plus" >}}Vite+{{< /link >}}** (VoidZero's integrated toolchain), and coding agents like Claude Code and Cursor that drive the Vite server for browser automation.

---

## Services and Software That Use Port 5173

Port 5173 is primarily used by Vite and Vite-powered applications across the modern frontend ecosystem. Here are the main applications:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">⚡ Vite-Powered Frameworks</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://tanstack.com/start" >}}TanStack Start{{< /link >}}</strong>: Full-stack React (and Solid) on Vite. v1 RC since early 2026 - production-usable, ecosystem still filling in</li>
<li><strong>{{< link href="https://vuejs.org/" >}}Vue.js 3{{< /link >}}</strong>: Default scaffold (<code>npm create vue@latest</code>) wires up Vite</li>
<li><strong>{{< link href="https://reactjs.org/" >}}React{{< /link >}}</strong>: Vite is the React team's recommended starter since CRA was retired in 2025</li>
<li><strong>{{< link href="https://kit.svelte.dev/" >}}SvelteKit{{< /link >}}</strong>: Svelte's full-stack framework, Vite-powered</li>
<li><strong>{{< link href="https://astro.build/" >}}Astro{{< /link >}}</strong>: Content-first static + island architecture, built on Vite</li>
<li><strong>{{< link href="https://nuxt.com/" >}}Nuxt 3{{< /link >}}</strong>: Vue's full-stack framework on Vite + Nitro</li>
<li><strong>{{< link href="https://remix.run/" >}}Remix{{< /link >}}</strong>: Full-stack React, Vite-based since v2</li>
<li><strong>{{< link href="https://qwik.builder.io/" >}}Qwik{{< /link >}}</strong>: Resumability-focused framework, Vite under the hood</li>
<li><strong>{{< link href="https://www.solidjs.com/" >}}Solid.js{{< /link >}}</strong>: Fine-grained reactive runtime, ships a Vite template</li>
<li><strong>{{< link href="https://analogjs.org/" >}}Analog{{< /link >}}</strong>: Angular meta-framework on Vite</li>
<li><strong>{{< link href="https://waku.gg/" >}}Waku{{< /link >}}</strong>: Minimal React Server Components framework on Vite</li>
<li><strong>{{< link href="https://lit.dev/" >}}Lit{{< /link >}}</strong>: Web components library, works cleanly with Vite</li>
<li><strong>{{< link href="https://preactjs.com/" >}}Preact{{< /link >}}</strong>: 3KB React alternative with a Vite template</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🛠️ Development Tools</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://vite.dev/" >}}Vite 8 Dev Server{{< /link >}}</strong>: The actual process listening on 5173. v8 ships Rolldown as the bundler (10x to 30x faster builds vs Rollup)</li>
<li><strong>{{< link href="https://voidzero.dev/posts/announcing-vite-plus" >}}Vite+{{< /link >}}</strong>: VoidZero's integrated toolchain bundling Vite, Vitest, Rolldown, and Oxc behind one CLI</li>
<li><strong>{{< link href="https://vitest.dev/" >}}Vitest{{< /link >}}</strong>: Vite-native unit test runner; reuses your <code>vite.config.js</code></li>
<li><strong>{{< link href="https://tanstack.com/devtools" >}}TanStack DevTools{{< /link >}}</strong>: Unified devtools panel for Query / Router / Form / Start, installed as a Vite plugin</li>
<li><strong>{{< link href="https://storybook.js.org/" >}}Storybook{{< /link >}}</strong>: Runs on Vite as its builder (Storybook 7+)</li>
<li><strong>{{< link href="https://playwright.dev/" >}}Playwright{{< /link >}}</strong> / <strong>{{< link href="https://www.cypress.io/" >}}Cypress{{< /link >}}</strong>: E2E runners that point at the Vite dev URL</li>
<li><strong>AI coding agents</strong>: Cursor, Claude Code, and similar tools commonly start Vite with <code>server.open: false</code> + <code>strictPort: true</code> so the URL is predictable for headless browser steps</li>
<li><strong>{{< link href="https://mswjs.io/" >}}MSW{{< /link >}}</strong>: Mock Service Worker - intercepts <code>fetch</code> during dev so you can build against an API that doesn't exist yet</li>
<li><strong>{{< link href="https://vite-pwa-org.netlify.app/" >}}vite-plugin-pwa{{< /link >}}</strong>: Drops a service worker and manifest into your build; works on 5173 in dev with <code>devOptions.enabled: true</code></li>
<li><strong>{{< link href="https://github.com/web-infra-dev/oxc" >}}Oxc{{< /link >}} / <strong>{{< link href="https://biomejs.dev/" >}}Biome{{< /link >}}</strong></strong>: Rust-based lint/format toolchains; Oxc now powers <code>@vitejs/plugin-react-oxc</code> for faster transforms</li>
<li><strong>{{< link href="https://hono.dev/" >}}Hono{{< /link >}}</strong>: Edge-first web framework with first-class Vite integration (<code>@hono/vite-dev-server</code>) for full-stack apps on a single port</li>
<li><strong>{{< link href="https://vite.dev/plugins/" >}}Vite plugins{{< /link >}}</strong>: Anything from <code>vite-plugin-svelte</code> to <code>@vitejs/plugin-react-oxc</code></li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">📱 Modern Web Applications</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>Single Page Applications (SPAs)</strong>: Full-featured apps that run entirely in the browser</li>
<li><strong>Progressive Web Apps (PWAs)</strong>: Offline-capable apps with app-like experience</li>
<li><strong>{{< link href="https://www.typescriptlang.org/" >}}TypeScript{{< /link >}} Projects</strong>: Full type safety out of the box</li>
<li><strong>Vanilla JavaScript</strong>: No framework needed, just modern ES modules</li>
<li><strong>Web Components</strong>: Reusable custom HTML elements</li>
<li><strong>Mobile Apps</strong>: iOS/Android apps with {{< link href="https://capacitorjs.com/" >}}Capacitor{{< /link >}} or {{< link href="https://tauri.app/" >}}Tauri{{< /link >}}</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🎨 Frontend Tooling</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>CSS Frameworks</strong>: {{< link href="https://tailwindcss.com/" >}}Tailwind CSS{{< /link >}}, {{< link href="https://unocss.dev/" >}}UnoCSS{{< /link >}}, {{< link href="https://sass-lang.com/" >}}Sass{{< /link >}}</li>
<li><strong>Component Libraries</strong>: Build and test UI components with live reload</li>
<li><strong>Micro-frontends</strong>: Module federation for composable apps</li>
<li><strong>Documentation Sites</strong>: {{< link href="https://vitepress.dev/" >}}VitePress{{< /link >}}, {{< link href="https://dumi.umijs.org/" >}}Dumi{{< /link >}} for docs</li>
<li><strong>Design Systems</strong>: Build and maintain component systems</li>
<li><strong>Blog Generators</strong>: {{< link href="https://astro.build/" >}}Astro{{< /link >}} for content-heavy sites</li>
</ul>
</div>

</div>

Run `npm run dev`, `yarn dev`, or `pnpm dev` and Vite starts on 5173 with no config. You get cold-start in tens of milliseconds (vs ~10s for CRA on a comparable app), HMR over a WebSocket on the same port, native ESM in the browser, dependency pre-bundling via esbuild on first run, and zero-config TypeScript transpilation (note: not type-checking - run `tsc --noEmit` separately or via Vitest).

---

## How to Troubleshoot Localhost:5173

When the dev server isn't reachable on 5173, it's almost always one of four things:

<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #856404; margin: 0 0 15px 0;">🔍 Step 1: Make Sure Vite is Actually Running</h3>
<p style="margin: 0 0 10px 0;"><strong>The Fix:</strong> Fire up your dev server if it's not already going.</p>
<p style="margin: 0;"><strong>What to do:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Start Vite:</strong> <code>npm run dev</code>, <code>yarn dev</code>, or <code>pnpm dev</code></li>
<li><strong>Check terminal:</strong> Look for "Local: http://localhost:5173/" message</li>
<li><strong>Verify project setup:</strong> Ensure you're in a Vite project directory</li>
<li><strong>Check package.json:</strong> Verify dev script is configured correctly</li>
</ul>
</div>

<div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #0c5460; margin: 0 0 15px 0;">🚫 Step 2: Free Up Port 5173</h3>
<p style="margin: 0 0 10px 0;"><strong>The Fix:</strong> Port 5173 is already taken by something else.</p>
<p style="margin: 0;"><strong>Quick wins:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Find conflicting process:</strong> <code>lsof -i :5173</code> (Linux/macOS) or <code>netstat -ano | findstr :5173</code> (Windows)</li>
<li><strong>Stop the process:</strong> <code>kill -9 &lt;PID&gt;</code></li>
<li><strong>Use different port:</strong> <code>npm run dev -- --port 5174</code></li>
</ul>
</div>

<div style="background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #721c24; margin: 0 0 15px 0;">🔧 Step 3: Config or Dependency Issues</h3>
<p style="margin: 0 0 10px 0;"><strong>The Fix:</strong> Something's wrong with your setup.</p>
<p style="margin: 0;"><strong>Try these:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Check vite.config.js:</strong> Verify configuration syntax and plugins</li>
<li><strong>Install dependencies:</strong> <code>npm install</code> or <code>yarn install</code></li>
<li><strong>Clear cache:</strong> Remove <code>node_modules/.vite</code> directory</li>
</ul>
</div>

<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #155724; margin: 0 0 15px 0;">🌐 Step 4: Verify It's Working</h3>
<p style="margin: 0 0 10px 0;"><strong>The Fix:</strong> Test if your server is actually reachable.</p>
<p style="margin: 0;"><strong>Check it:</strong></p>
<ul style="margin: 10px 0 0 20px;">
<li><strong>Browser:</strong> Navigate to <code>http://localhost:5173</code></li>
<li><strong>Command line:</strong> <code>curl http://localhost:5173</code></li>
<li><strong>Network access:</strong> Use <code>npm run dev -- --host</code> for external access</li>
</ul>
</div>

---

## Port behavior worth knowing

A few things about how Vite handles 5173 that trip people up:

- **It auto-increments.** If 5173 is taken, Vite silently picks 5174, then 5175, and so on. Useful when running two projects at once, annoying when scripts or browser bookmarks assume 5173. Lock it with `server.strictPort: true` in `vite.config.js` (or `--strictPort` on the CLI) and Vite will exit instead.
- **`vite dev` and `vite preview` are different ports.** Dev runs on 5173. `vite preview` (which serves your production `dist/` for smoke-testing) defaults to **4173**. They're different processes serving different bundles - don't share state between them.
- **`--host` exposes you on the LAN.** Without it, Vite binds to `127.0.0.1` and is reachable only from your machine. With `--host` (or `server.host: true`), it binds to `0.0.0.0` - now anyone on the same Wi-Fi can hit your dev server. Fine at home, less fine on a hotel or coffee-shop network.
- **`allowedHosts` is enforced.** Since Vite 6, requests with a `Host` header outside `server.allowedHosts` are rejected with a 403. This matters when proxying through a tunnel or a reverse proxy - add the public hostname or set it to `true` for dev.
- **Inside Docker, `localhost` isn't your host.** Inside a container, `localhost` is the container itself. Run Vite with `--host 0.0.0.0`, expose 5173 in your `Dockerfile`/compose, and visit `http://localhost:5173` from the host - it'll forward in. For HMR, you may also need `server.hmr.host` set to the host name the browser uses.
- **HTTPS on localhost takes a plugin.** Vite has `server.https`, but generating a trusted cert is the painful part. `vite-plugin-mkcert` automates this (uses [mkcert](https://github.com/FiloSottile/mkcert) under the hood) and is the standard answer when you need HTTPS for OAuth callbacks, PWAs, or anything that requires a secure context.

---

## Access localhost:5173 from Other Devices

`localhost` only resolves on the machine running Vite, so a phone on the same Wi-Fi or a teammate on the other side of the office can't hit it directly. Two options: bind Vite to your LAN IP (`npm run dev -- --host` then visit `http://<your-ip>:5173`), or open a tunnel for anyone on the internet. For the second case, a one-line {{< link href="https://pinggy.io/" >}}Pinggy{{< /link >}} command works without installing anything:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:5173 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5173 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5173 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\"}}}"
{{</ ssh_command >}}

You'll get back a public HTTPS URL that proxies to `localhost:5173`. Useful for sharing a WIP build with a client, testing on iOS Safari without messing with certs, or pointing a webhook (Stripe, Clerk, GitHub) at a local handler. Heads-up: Vite's HMR runs over WebSockets, and depending on your `vite.config.js` you may need to set `server.hmr.clientPort: 443` and add the tunnel host to `server.allowedHosts` for hot reload to keep working over the tunnel.

---

## Common Problems and Solutions

Here are typical issues with `localhost:5173` and how to resolve them:

<div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 25px 0;">

<div style="background: #fff; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e74c3c; margin: 0 0 10px 0;">❌ "Port Already in Use" Error</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> "Port 5173 is in use..."</p>
<p style="margin: 0;"><strong>Quick fix:</strong> <code>lsof -i :5173</code> to find who's using it, <code>kill -9 &lt;PID&gt;</code> to kill it, or just switch ports with <code>npm run dev -- --port 5174</code></p>
</div>

<div style="background: #fff; border-left: 4px solid #f39c12; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ Vite Server Won't Start</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Errors during startup or fails immediately</p>
<p style="margin: 0;"><strong>Quick fix:</strong> <code>npm install</code> to reinstall deps, check vite.config.js for typos, or nuke <code>node_modules/.vite</code> cache</p>
</div>

<div style="background: #fff; border-left: 4px solid #9b59b6; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #9b59b6; margin: 0 0 10px 0;">🔄 HMR Not Working (Changes Don't Auto-Reload)</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Save a file but browser doesn't update</p>
<p style="margin: 0;"><strong>Quick fix:</strong> Check browser console for WebSocket errors, make sure your IDE is watching files, or just restart Vite</p>
</div>

<div style="background: #fff; border-left: 4px solid #3498db; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #3498db; margin: 0 0 10px 0;">🌐 Can't Access from Other Machines on Network</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Works on localhost but not from phone or other PC</p>
<p style="margin: 0;"><strong>Quick fix:</strong> <code>npm run dev -- --host</code> then access via your machine's IP like <code>http://192.168.1.100:5173</code></p>
</div>

<div style="background: #fff; border-left: 4px solid #27ae60; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #27ae60; margin: 0 0 10px 0;">🐌 Slow Initial Load or Server Startup</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Takes forever to start or first page load is sluggish</p>
<p style="margin: 0;"><strong>Quick fix:</strong> <code>rm -rf node_modules package-lock.json && npm install</code>, remove the <code>node_modules/.vite</code> folder, or optimize dependencies in vite.config.js</p>
</div>

<div style="background: #fff; border-left: 4px solid #e67e22; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e67e22; margin: 0 0 10px 0;">🔌 Plugin Errors</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Vite starts but complains about a plugin</p>
<p style="margin: 0;"><strong>Quick fix:</strong> Check plugin versions match your Vite version, verify the config is correct, and update plugins with <code>npm update</code></p>
</div>

<div style="background: #fff; border-left: 4px solid #16a085; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #16a085; margin: 0 0 10px 0;">🔄 HMR Disconnects Behind a Tunnel or Reverse Proxy</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Page loads fine, but the console shows <code>WebSocket connection to 'wss://...:5173' failed</code> and edits don't hot-reload</p>
<p style="margin: 0;"><strong>Quick fix:</strong> Vite's client tries to open the WebSocket on port 5173, but tunnels/proxies only expose 443. Set <code>server.hmr.clientPort: 443</code> (and <code>server.hmr.protocol: 'wss'</code> if needed) in <code>vite.config.js</code>, and add the public host to <code>server.allowedHosts</code>.</p>
</div>

<div style="background: #fff; border-left: 4px solid #34495e; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #34495e; margin: 0 0 10px 0;">📦 Monorepo: "The request url ... is outside of Vite serving allow list"</h3>
<p style="margin: 0 0 10px 0;"><strong>You'll see:</strong> Importing a sibling package in a pnpm/npm workspace 403s with that error</p>
<p style="margin: 0;"><strong>Quick fix:</strong> Add the workspace root (or the specific package paths) to <code>server.fs.allow</code> in your <code>vite.config.js</code>. Default is the project root only; in a monorepo, Vite refuses to serve files above it for security.</p>
</div>

</div>

---

## Summary

* **What it is**: `localhost:5173` is Vite's default dev server address (`127.0.0.1` on TCP 5173).
* **Who uses it**: Every Vite-based stack - Vue, React, Svelte, Astro, Nuxt, TanStack Start, Solid, Qwik, Analog, Waku, plus Vitest and Storybook in dev.
* **First debug step**: `lsof -i :5173` to see what's bound, then `npm run dev` and watch the terminal for the "Local: http://localhost:5173/" line.
* **Common fixes**: kill whatever owns the port, pass `--port 5174`, wipe `node_modules/.vite`, or use `--host` to expose it on your LAN.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
<h3 style="margin: 0 0 15px 0; font-size: 1.4em;">🚀 Quick Start Commands</h3>
<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin: 15px 0;">
<code style="display: block; color: #fff; font-size: 14px; line-height: 1.6;">
# Vue<br>
npm create vue@latest my-app && cd my-app && npm install<br><br>
# React (Vite template)<br>
npm create vite@latest my-app -- --template react-ts<br><br>
# TanStack Start (full-stack React on Vite)<br>
npm create @tanstack/start@latest my-app<br><br>
# Same scaffold with Bun (faster install)<br>
bunx create-vite@latest my-app --template svelte-ts<br><br>
# Start dev server (binds to localhost:5173)<br>
npm run dev
</code>
</div>
<p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.9;">
Use these commands to quickly get started with Vite on localhost:5173
</p>
</div>

If you've worked with frontend tooling in the last few years, 5173 is probably one of the more memorable numbers in your shell history. It's not magic - it's just the port Vite picked, and Vite happens to be what most frameworks now ship as their dev server. Knowing how to find what's bound to it, how to move off it, and how to expose it safely covers 90% of what you'll ever need.
