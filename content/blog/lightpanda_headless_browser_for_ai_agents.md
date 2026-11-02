---
title: "Lightpanda: A Headless Browser Built for AI Agents"
description: "Lightpanda is a headless browser written in Zig, not a Chromium fork. How fetch, serve and mcp work, what the 16x memory claim means, where it breaks, and how to reach it remotely."
date: 2026-11-02T10:00:00+05:30
lastmod: 2026-11-02T10:00:00+05:30
draft: false
tags: ["headless browser", "AI agents", "MCP", "automation"]
og_image: "images/lightpanda_headless_browser_for_ai_agents/lightpanda_headless_browser_for_ai_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkxpZ2h0cGFuZGE6IEEgSGVhZGxlc3MgQnJvd3NlciBCdWlsdCBmb3IgQUkgQWdlbnRzIiwKICAiZGVzY3JpcHRpb24iOiAiTGlnaHRwYW5kYSBpcyBhIGhlYWRsZXNzIGJyb3dzZXIgd3JpdHRlbiBpbiBaaWcsIG5vdCBhIENocm9taXVtIGZvcmsuIEhvdyBmZXRjaCwgc2VydmUgYW5kIG1jcCB3b3JrLCB3aGF0IHRoZSAxNnggbWVtb3J5IGNsYWltIG1lYW5zLCB3aGVyZSBpdCBicmVha3MsIGFuZCBob3cgdG8gcmVhY2ggaXQgcmVtb3RlbHkuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2xpZ2h0cGFuZGFfaGVhZGxlc3NfYnJvd3Nlcl9mb3JfYWlfYWdlbnRzL2xpZ2h0cGFuZGFfaGVhZGxlc3NfYnJvd3Nlcl9mb3JfYWlfYWdlbnRzX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTEtMDJUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0wMlQxMDowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL2xpZ2h0cGFuZGFfaGVhZGxlc3NfYnJvd3Nlcl9mb3JfYWlfYWdlbnRzLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiRGV2ZWxvcGVyIFRvb2xzIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJMaWdodHBhbmRhLCBoZWFkbGVzcyBicm93c2VyLCBaaWcsIENEUCBzZXJ2ZXIsIFB1cHBldGVlciwgTUNQIHNlcnZlciwgQUkgYWdlbnQgYnJvd3NlciIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJIZWFkbGVzcyBicm93c2VyIiwgImRlc2NyaXB0aW9uIjogIkEgYnJvd3NlciB0aGF0IHJ1bnMgd2l0aG91dCBhIGdyYXBoaWNhbCBpbnRlcmZhY2UuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJDaHJvbWUgRGV2VG9vbHMgUHJvdG9jb2wiLCAiZGVzY3JpcHRpb24iOiAiVGhlIHByb3RvY29sIFB1cHBldGVlciBhbmQgUGxheXdyaWdodCB1c2UgdG8gZHJpdmUgYSBicm93c2VyLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTW9kZWwgQ29udGV4dCBQcm90b2NvbCIsICJkZXNjcmlwdGlvbiI6ICJBIHByb3RvY29sIHRoYXQgbGV0cyBBSSBjbGllbnRzIGNhbGwgdG9vbHMgc3VjaCBhcyBhIGJyb3dzZXIuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJQaW5nZ3kgdHVubmVsIiwgImRlc2NyaXB0aW9uIjogIkFuIFNTSCByZXZlcnNlIHR1bm5lbCB0aGF0IGV4cG9zZXMgYSBsb2NhbCBwb3J0IGF0IGEgcHVibGljIEhUVFBTIFVSTC4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "lightpanda_headless_browser_for_ai_agents/lightpanda_headless_browser_for_ai_agents_banner.webp" "Lightpanda headline next to bars comparing 100 pages in headless Chrome and Lightpanda: 2 GB and 46 s against 123 MB and 5 s" >}}
Lightpanda is a headless browser written from scratch in Zig. It runs JavaScript through V8, builds a DOM, speaks the Chrome DevTools Protocol (CDP), and skips everything that paints pixels. On its own benchmark of 100 pages, the project reports 123 MB of peak memory against about 2 GB for headless Chrome, and 5 seconds against 46. The repo had about 40.8k stars on November 2, 2026.

That is a big claim, so this post looks at where the saving comes from, the three ways to drive it (`fetch`, `serve`, `mcp`), and what you give up. I could not install it in the sandbox I wrote this in, so every command below comes from the {{< link href="https://lightpanda.io/docs" >}}official docs{{< /link >}} and is marked as untested here. The numbers are the project's, not mine.

{{% tldr %}}
1. Lightpanda is **not a Chromium fork**. It has no rendering engine, so there is no layout, paint or compositor to pay for.
2. You can use it three ways: `lightpanda fetch` to dump a page as Markdown or HTML, `lightpanda serve` as a CDP server for Puppeteer and Playwright, and `lightpanda mcp` for MCP clients.
3. The project's benchmark (933 pages, AWS m5.large) shows **about 16x less memory and 9x less time** than headless Chrome. Check it against your own pages before you rely on it.
4. Gaps to know about: no native Windows build, glibc-only Linux binaries, AGPL-3.0 license, and an incomplete Web API list.
5. `serve` binds to `127.0.0.1` by default. To drive it from another machine, put an authenticated tunnel in front of it instead of binding `0.0.0.0`.
{{% /tldr %}}

## Where the memory saving comes from

A headless Chrome still runs the whole pipeline: it parses CSS, computes layout, rasterises, and keeps a GPU process and several renderer processes around. An agent that wants the text of a page, or wants to click a button, needs none of that. It needs the DOM, a JavaScript engine and a network stack.

Lightpanda keeps exactly those. Per its README, the pieces are V8 for JavaScript, html5ever for HTML parsing, and libcurl for HTTP. It supports XHR and Fetch, cookies, custom headers, proxies, form clicks and input, network interception, and `robots.txt` handling via `--obey-robots`.

{{< image "lightpanda_headless_browser_for_ai_agents/lightpanda_memory_and_time.webp" "Bar chart comparing headless Chrome and Lightpanda on 100 pages: 2 GB and 46 seconds against 123 MB and 5 seconds" >}}

*Data: Lightpanda's own benchmark, {{< link href="https://github.com/lightpanda-io/browser" >}}github.com/lightpanda-io/browser{{< /link >}}, November 2026.*
The benchmark ran 933 real pages on an AWS EC2 m5.large. The 100-page figures are the headline: 123 MB vs 2 GB peak memory, 5 s vs 46 s. Two caveats. It is the vendor's own test, and a browser that does less will always be faster on a task that needs less. If your page only renders its content after a canvas or WebGL call, there is nothing to compare.

## Fetch a page as Markdown

The simplest use needs no browser protocol at all. Install it (Homebrew nightly, a binary from the releases page, Nix, or Docker) and dump a page:

```bash
brew install lightpanda-io/browser/lightpanda
lightpanda fetch https://example.com --dump markdown --wait-until networkidle --strip-mode clutter
```

`--dump` takes `html`, `markdown`, `pdf`, `png`, `semantic_tree` and `semantic_tree_text`. The pdf and png outputs are text-only renderings, not a screenshot of the page. `--strip-mode clutter` keeps the main content, like a reader mode, which is what you want before feeding a page to an LLM. `--dump-max-bytes` caps the output and appends a `[truncated]` marker.

Waiting is where scraping tools usually bite, and teh defaults matter. `--wait-until` accepts `load`, `domcontentloaded`, `networkalmostidle`, `networkidle` and `done`. `done` waits for full quiet, so a page with constant background requests runs until `--wait-ms` (default 5000) expires. For single-page apps, `--wait-selector` or `--wait-script` is usually the better signal.

## Drive it with Puppeteer or Playwright

`serve` starts a CDP server, so existing scripts can connect instead of launching Chrome:

```bash
lightpanda serve --host 127.0.0.1 --port 9222
```

```javascript
import puppeteer from 'puppeteer-core'

const browser = await puppeteer.connect({
  browserWSEndpoint: 'ws://127.0.0.1:9222',
})
const context = await browser.createBrowserContext()
const page = await context.newPage()
await page.goto('https://wikipedia.com/')
console.log(await page.title())
await browser.disconnect()
```

That snippet is from the docs. Note `puppeteer-core`: there is no Chrome to download. The server allows 16 simultaneous connections by default (`--cdp-max-connections`), caps WebSocket messages at 1 MB, and exposes Prometheus metrics at `/metrics` unless you pass `--disable-metrics`. A `--protocol webdriver` option serves WebDriver BiDi instead, and repeating the flag serves both on one port.

## Give an MCP client a browser

`lightpanda mcp` runs an MCP server over stdio. Add `--port 8000` for HTTP, where each client gets its own session. The docs name tools such as `goto`, `markdown`, `links`, `evaluate`, `fill`, `press` and `search`, plus session tools in HTTP mode. For a local client like Claude Desktop or Cursor, stdio is enough and nothing leaves the machine.

## What breaks

- No native Windows build. Use WSL2.
- No Android or Termux build.
- Linux binaries need glibc (2.35 on x86_64, 2.38 on arm64), so Alpine and other musl distros fail.
- The Web API list is still growing. Pages that lean on features it lacks will fail in ways Chrome never would, and the README does not say which features are missing. Run your own target pages through `fetch` before you commit to it.
- AGPL-3.0. Read it before you ship Lightpanda inside a product.

## Reach a Lightpanda server from another machine

Say Lightpanda runs on a small home server and your agent runs on a laptop or a cloud function. `serve` listens on `127.0.0.1`, which is right: CDP has no authentication, and anyone who can reach port 9222 can drive the browser and read its cookies. Binding `0.0.0.0` on a public interface is a bad idea.

A Pinggy HTTP tunnel with a bearer key puts a check in front of the port without opening anything on the router. On the server:

```bash
lightpanda serve --host 127.0.0.1 --port 9222
ssh -p 443 -R0:localhost:9222 free.pinggy.io -T -- k:my-long-random-key
```

The tunnel prints an HTTPS URL. The key flag (`k:`) makes Pinggy require `Authorization: Bearer my-long-random-key` on every request. Then connect from the agent machine, swapping `https` for `wss`:

```javascript
const browser = await puppeteer.connect({
  browserWSEndpoint: 'wss://abc123.a.pinggy.link',
  headers: { Authorization: 'Bearer my-long-random-key' },
})
```

I have not tested this combination, including whether the WebSocket upgrade passes through the key check, so treat it as a starting point and is definately worth a test before you depend on it. The free tunnel lasts 60 minutes and the URL changes on reconnect, so for anything long-running you want a Pro token and a fixed subdomain. For background on the mechanism, see [SSH reverse tunnelling](/blog/ssh_reverse_tunnelling/).

{{< image "lightpanda_headless_browser_for_ai_agents/lightpanda_remote_cdp.webp" "A Puppeteer script on a laptop connects through a Pinggy wss URL with a bearer key to a Lightpanda CDP server on port 9222, while the home server holds an outbound SSH connection to Pinggy" >}}
## Conclusion

Run `lightpanda fetch` on ten of your own target pages and compare the Markdown with what headless Chrome returns. If the output matches and the memory drop shows up in `top`, `serve` is a one-line swap in your Puppeteer config. If a page comes back empty, you have found a missing Web API, and the project's issue tracker is the place to check whether it is known.
