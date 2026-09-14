---
title: "Self-Host Hister and Search Everything You've Ever Read, From Anywhere"
description: "Hister is an open-source, self-hosted search engine that indexes every page you visit and every file you keep. Here's how to run it and expose it remotely with Pinggy."
date: 2026-08-23T10:30:00+05:30
draft: false
tags: ["Hister", "self-hosted", "Pinggy", "open source", "MCP"]
categories: ["Technology", "Self-Hosting", "AI Tools"]
og_image: "images/self_host_hister_with_pinggy/self_host_hister_with_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiU2VsZi1Ib3N0IEhpc3RlciBhbmQgRXhwb3NlIEl0IFJlbW90ZWx5IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGluc3RhbGwgdGhlIEhpc3RlciBzZWxmLWhvc3RlZCBzZWFyY2ggZW5naW5lLCBydW4gaXRzIGxvY2FsIHNlcnZlciwgYW5kIGV4cG9zZSBpdCBwdWJsaWNseSB1c2luZyBhIFBpbmdneSBTU0ggdHVubmVsIGZvciByZW1vdGUgd2ViIGFjY2VzcyBhbmQgTUNQIGFnZW50IGludGVncmF0aW9uLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIGFuZCBzdGFydCBIaXN0ZXIiLAogICAgICAidGV4dCI6ICJEb3dubG9hZCB0aGUgaGlzdGVyIGJpbmFyeSBmcm9tIHRoZSBHaXRIdWIgcmVsZWFzZXMgcGFnZSwgcnVuIGNobW9kICt4IGhpc3RlciwgdGhlbiBzdGFydCBpdCB3aXRoIC4vaGlzdGVyIGxpc3Rlbi4gVGhlIHNlcnZlciBsaXN0ZW5zIG9uIDEyNy4wLjAuMTo0NDMzIGJ5IGRlZmF1bHQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlZlcmlmeSB0aGUgbG9jYWwgc2VydmVyIiwKICAgICAgInRleHQiOiAiT3BlbiBodHRwOi8vMTI3LjAuMC4xOjQ0MzMgaW4gYSBicm93c2VyIHRvIGNvbmZpcm0gdGhlIEhpc3RlciB3ZWIgaW50ZXJmYWNlIGxvYWRzLCB0aGVuIGluc3RhbGwgdGhlIENocm9tZSBvciBGaXJlZm94IGV4dGVuc2lvbiBhbmQgcG9pbnQgaXQgYXQgdGhlIGxvY2FsIHNlcnZlci4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIGEgUGluZ2d5IHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkluIGEgdGVybWluYWwgcnVuOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NDQzMyBmcmVlLnBpbmdneS5pby4gUGluZ2d5IHByaW50cyBhIHB1YmxpYyBIVFRQUyBVUkwgc3VjaCBhcyBodHRwczovL2FiYzEyMy5hLnBpbmdneS5saW5rLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJUZXN0IHJlbW90ZSBhY2Nlc3MiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBQaW5nZ3kgSFRUUFMgVVJMIGZyb20gYW5vdGhlciBkZXZpY2Ugb3IgYnJvd3NlciB0byBzZWFyY2ggeW91ciBpbmRleGVkIHBhZ2VzIGFuZCBmaWxlcyByZW1vdGVseS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29ubmVjdCBhbiBNQ1AgY2xpZW50IHJlbW90ZWx5IiwKICAgICAgInRleHQiOiAiQWRkIHRoZSBQaW5nZ3kgVVJMIHBsdXMgL21jcCBhcyB0aGUgSGlzdGVyIE1DUCBzZXJ2ZXIgVVJMIGluIGFuIEFJIGNsaWVudCBjb25maWcsIGZvciBleGFtcGxlIGh0dHBzOi8vYWJjMTIzLmEucGluZ2d5LmxpbmsvbWNwLCBzbyBhZ2VudHMgY2FuIGNhbGwgdGhlIHNlYXJjaCBhbmQgZ2V0X3ByZXZpZXcgdG9vbHMuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host Hister search engine and access it remotely - download the binary and run `./hister listen` (starts on port 4433), then in a new terminal run `ssh -p 443 -R0:localhost:4433 free.pinggy.io` to get a public HTTPS URL for remote web search and MCP access.{{< /llm-context >}}

{{< image "self_host_hister_with_pinggy/self_host_hister_with_pinggy_banner.webp" "Hister self-hosted search engine banner, showing a magnifying glass highlighting indexed documents in a private search index" >}}

Adam Tauber, who goes by asciimoo on GitHub, has a habit of building search infrastructure that other people end up depending on. He wrote Searx back in 2014, the privacy-respecting metasearch engine that later became SearXNG and is now the default self-hosted search box in half the homelab dashboards on the internet. He also maintains Colly, one of the more popular Go scraping frameworks. His newest project, <a href="https://github.com/asciimoo/hister" target="_blank">Hister</a>, points the same idea inward: instead of searching the web, it searches *you* - every page you've visited, every file you keep, indexed with full-text search that never leaves a server you control.

The pitch is simple and the itch is familiar. You read something useful three weeks ago, remember roughly what it said, and have no idea how to find it again. Browser history search matches titles and URLs, not content. Hister fixes that by indexing the actual text of what you read, then giving you a proper search engine over it: field filters, phrase matches, wildcards, negation, date ranges, even optional semantic search. It ships as a single Go binary, stores everything in SQLite or Postgres, and talks to a browser extension, a CLI, a terminal UI, an HTTP API, and an MCP server.

{{% tldr %}}
1. Download the `hister` binary from the <a href="https://github.com/asciimoo/hister/releases" target="_blank">releases page</a>, `chmod +x hister`, then run `./hister listen`.
2. The server comes up on `http://127.0.0.1:4433` - install the browser extension and point it there.
3. Expose it: `ssh -p 443 -R0:localhost:4433 free.pinggy.io`
4. Pinggy prints a public HTTPS URL like `https://abc123.a.pinggy.link` - search your index from any device, or point an MCP client at `/mcp`.
{{% /tldr %}}

## What Hister actually indexes

Hister works off three collection paths, and you can mix and match all of them:

- **The browser extension** (Chrome and Firefox) captures pages as you visit them and sends the rendered content to your Hister server.
- **A file watcher** monitors local directories - notes, PDFs, DOCX, Markdown, org files - and reindexes them when they change, keeping version history so you can see what a document said before.
- **A crawler** can walk a site you point it at, and there's a bulk import path for pulling in your existing Firefox or Chrome history.

Everything gets run through a modular content extractor, language-detected (including CJK), and dropped into a full-text index with a stored preview so search results show real context instead of a bare link. The query language supports the things you'd expect from a real search engine and rarely get from browser history: `site:` filters, quoted phrases, `-exclusion`, date ranges, and saved query aliases.

The newest releases (v0.17.0 landed a few weeks ago) added a persistent, resumable crawl job queue, a durable queue for semantic indexing, and dedicated extraction for GitHub issues and PRs - so you can index a repo's discussion history, not just its README.

## Installing it

The binary is the fastest path:

```bash
# grab the release for your platform from
# https://github.com/asciimoo/hister/releases
chmod +x hister
./hister listen
```

Open `http://127.0.0.1:4433` and you'll get the web UI, empty until you start feeding it content. From there, install the <a href="https://hister.org/docs/installing" target="_blank">browser extension</a> and point it at that local address - it starts indexing pages as you browse.

If you'd rather run it as a service, there's a Docker image and an Nix flake:

```bash
# Nix, no install needed
nix run github:asciimoo/hister -- listen

# Or build from source (Go 1.26, npm, a C compiler for CGO)
git clone https://github.com/asciimoo/hister.git
cd hister
./manage.sh build
```

For anything beyond a quick trial, generate a config file so restarts don't wipe your settings:

```bash
./hister create-config ~/.config/hister/config.yml
```

That file is where the server address, database backend (SQLite by default, Postgres for multi-user setups), access tokens, and public-mode flag all live.

## The problem: it only listens on localhost

By design, `./hister listen` binds to `127.0.0.1:4433` and nothing else. That is the right default for something that ingests your entire browsing history and file contents - Hister's own docs are blunt about it: the server "transmits your entire browsing history, with page contents, to and from the server," which is not something you want sitting unencrypted on the open internet.

But it also means the only thing that can search your index is the browser sitting on the same machine. That gets limiting fast:

- You run Hister on a home server or NAS, and want to search it from your laptop or phone.
- You index a shared knowledge base for a small team and want colleagues to query it without VPNing in.
- You're wiring an AI agent to Hister's MCP server, and the agent runs somewhere other than your desktop.

Hister's own deployment docs cover this, and the official path is a reverse proxy: put Caddy or Nginx in front of the loopback-only server, terminate TLS there, and set `base_url` in the config to match. That works, but it's also a certificate, a domain, and a config file you now have to maintain just to check a search index from your phone.

{{< image "self_host_hister_with_pinggy/hister_pinggy_diagram.webp" "Diagram showing browsing history and files feeding into a local Hister search index, which Pinggy exposes over HTTPS to a phone, an MCP-connected AI client, and a teammate's browser" >}}

## Exposing Hister with Pinggy

Skip the reverse proxy. With Hister running, open a second terminal and run:

```bash
ssh -p 443 -R0:localhost:4433 free.pinggy.io
```

Pinggy prints something like:

```
You are allocated a random subdomain.
Please use the following URLs to connect to your tunnel:

http://abc123.a.pinggy.link
https://abc123.a.pinggy.link
```

That's a working HTTPS endpoint in front of your local Hister instance - no Caddyfile, no cert renewal, no `base_url` juggling. Open the HTTPS URL from your phone and you get the same web UI, searching the same index, live.

One config detail matters here: Hister needs `server.base_url` to match whatever address a client is connecting through when it's not bound to loopback. Since Pinggy is proxying to `127.0.0.1:4433` and Hister itself never leaves loopback, you generally don't need to touch `base_url` for read/search traffic - it only becomes relevant if Hister generates absolute links back to itself (password reset emails, OAuth callbacks) that need to resolve to the public Pinggy URL rather than `127.0.0.1`.

## Locking it down before you share the URL

The random Pinggy subdomain isn't secret once you've shared it, and Hister's default config has no `access_token` set. Before you send that URL to anyone, set one in `~/.config/hister/config.yml`:

```yaml
app:
  access_token: 'a-long-random-token'
  public: false
```

With `public: false` (the default) and a token set, every request needs `Authorization: Bearer <token>` or an `X-Access-Token` header. If you want a subset of your index searchable without a login - say, a documentation set you crawled - flip `public: true`; Hister still blocks anonymous writes and keeps `get_history` behind auth either way.

If you'd rather not manage a token at all, put HTTP basic auth on the tunnel itself instead:

```bash
ssh -p 443 -R0:localhost:4433 -t a@free.pinggy.io +https+auth:username:password
```

That way the reverse-proxy-style auth Hister's docs describe happens at the tunnel, and Hister itself never has to know about it.

## Connecting an MCP client remotely

This is the part that makes Hister interesting beyond "search my own history." It runs an MCP server at `/mcp` with three tools: `search` (full query syntax, semantic option, date filters), `get_preview` (fetch the stored preview for a specific URL), and `get_history` (what's been indexed or opened, auth-gated).

Point any MCP-compatible client at the Pinggy URL instead of `127.0.0.1`:

```json
{
  "mcpServers": {
    "hister": {
      "url": "https://abc123.a.pinggy.link/mcp",
      "headers": {
        "Authorization": "Bearer a-long-random-token"
      }
    }
  }
}
```

With that wired up, an agent running in Claude Code, Cursor, or anywhere else that speaks MCP can search everything you've read without needing filesystem access to your machine - useful if the agent runs in a sandboxed cloud environment and your Hister index lives on a machine at home. For more on the general pattern of exposing local MCP servers, see our earlier guide on {{< link href="/blog/share_local_mcp_server_with_pinggy/" >}}sharing local MCP servers with Pinggy{{< /link >}}.

## A persistent URL if you need one

The free tier's subdomain changes every time you reconnect, which is fine for one-off checks but annoying if you've hardcoded the URL into an MCP config or a bookmark. Pinggy's paid plan lets you reserve a fixed subdomain:

```bash
ssh -p 443 -R0:localhost:4433 -t a@free.pinggy.io +https+myhister
```

That gives you `https://myhister.a.pinggy.link` every time, so your agent config and phone bookmark don't break on reconnect.

## Where this fits

Hister is squarely in the same lane as SearXNG and Colly: infrastructure-flavored, unglamorous, and quietly useful once you have it running. It's AGPLv3, the source is on <a href="https://github.com/asciimoo/hister" target="_blank">GitHub</a> and mirrored on Codeberg, and there's a live demo at <a href="https://demo.hister.org" target="_blank">demo.hister.org</a> if you want to poke at the search syntax before installing anything.

What Pinggy adds is the piece the project intentionally leaves to you: getting the loopback-only server somewhere you can actually reach it, without standing up a reverse proxy and a TLS cert just to check a search index from your phone. One SSH command gets you there, and you can lock it down with a token or tunnel auth once you know it works.

## Conclusion

Hister turns "I read this somewhere" into an actual search query, and it does it without sending your browsing history to anyone else's server. The tradeoff for that privacy is that the server only listens on `127.0.0.1` by default - which is correct, but not useful the moment you want to search from a second device or wire up an AI agent. Pinggy's SSH tunnel closes that gap in one command, HTTPS included, so the only thing left to decide is who else gets the URL.
