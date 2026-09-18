---
title: "Hister: A Private Search Engine for Every Page You've Read and File You Keep"
description: "Hister is a self-hosted, open-source search engine that indexes your browsing history and local files in full text. Here's how it works, its query language, MCP support, and how to reach it remotely with Pinggy."
date: 2026-09-18T11:00:00+05:30
lastmod: 2026-09-18T11:00:00+05:30
draft: false
tags: ["Hister", "self-hosted", "privacy", "MCP", "Pinggy"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/self_host_hister_personal_search_engine/self_host_hister_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBIaXN0ZXIgYW5kIEFjY2VzcyBJdCBSZW1vdGVseSB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsIEhpc3RlciwgYSBzZWxmLWhvc3RlZCBwZXJzb25hbCBzZWFyY2ggZW5naW5lLCBpbmRleCB5b3VyIGJyb3dzaW5nIGhpc3RvcnkgYW5kIGZpbGVzLCBhbmQgZXhwb3NlIGl0IHRvIHRoZSBpbnRlcm5ldCB3aXRoIFBpbmdneSBmb3IgcmVtb3RlIGFjY2Vzcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2VsZl9ob3N0X2hpc3Rlcl9wZXJzb25hbF9zZWFyY2hfZW5naW5lL3NlbGZfaG9zdF9oaXN0ZXJfYmFubmVyLndlYnAiLAogICJ0b3RhbFRpbWUiOiAiUFQxNU0iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRG93bmxvYWQgYW5kIHN0YXJ0IEhpc3RlciIsCiAgICAgICJ0ZXh0IjogIkRvd25sb2FkIHRoZSBIaXN0ZXIgYmluYXJ5IGZyb20gaXRzIEdpdEh1YiByZWxlYXNlcyBwYWdlLCBtYWtlIGl0IGV4ZWN1dGFibGUgd2l0aCBjaG1vZCAreCBoaXN0ZXIsIHRoZW4gcnVuIC4vaGlzdGVyIGxpc3Rlbi4gVGhlIHdlYiBpbnRlcmZhY2UgaXMgYXZhaWxhYmxlIGF0IGh0dHA6Ly8xMjcuMC4wLjE6NDQzMy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCB0aGUgYnJvd3NlciBleHRlbnNpb24iLAogICAgICAidGV4dCI6ICJJbnN0YWxsIHRoZSBIaXN0ZXIgZXh0ZW5zaW9uIGZvciBGaXJlZm94IG9yIENocm9tZSBzbyBuZXdseSB2aXNpdGVkIHBhZ2VzIGFyZSBpbmRleGVkIGF1dG9tYXRpY2FsbHkgaW4gdGhlIGJhY2tncm91bmQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNyZWF0ZSBhIFBpbmdneSB0dW5uZWwiLAogICAgICAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjQ0MzMgZnJlZS5waW5nZ3kuaW8gaW4gYSB0ZXJtaW5hbCB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgZm9yd2FyZHMgdG8geW91ciBsb2NhbCBIaXN0ZXIgc2VydmVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQYXNzd29yZC1wcm90ZWN0IHRoZSB0dW5uZWwiLAogICAgICAidGV4dCI6ICJBZGQgYmFzaWMgYXV0aGVudGljYXRpb24gYnkgcnVubmluZyBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NDQzMyAtdCBmcmVlLnBpbmdneS5pbyBiOnlvdXJ1c2VyOnlvdXJwYXNzd29yZCBzbyBvbmx5IHNvbWVvbmUgd2l0aCB0aGUgcGFzc3dvcmQgY2FuIHJlYWNoIHlvdXIgc2VhcmNoIGluZGV4LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTZWFyY2ggZnJvbSBhbnl3aGVyZSIsCiAgICAgICJ0ZXh0IjogIk9wZW4gdGhlIFBpbmdneSBVUkwgb24geW91ciBwaG9uZSBvciBhbnkgb3RoZXIgZGV2aWNlIHRvIHNlYXJjaCB5b3VyIGluZGV4ZWQgYnJvd3NpbmcgaGlzdG9yeSBhbmQgZmlsZXMgcmVtb3RlbHkuIgogICAgfQogIF0KfQoKPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host Hister (a personal full-text search engine for browsing history and local files) with Pinggy - run `./hister listen` (starts the web UI on port 4433), then in a new terminal run `ssh -p 443 -R0:localhost:4433 free.pinggy.io` to get a public HTTPS URL you can search from any device.{{< /llm-context >}}

{{< image "self_host_hister_personal_search_engine/self_host_hister_banner.webp" "Hister private search engine indexing browser history and local files into a searchable index" >}}

Every developer has the same problem: you read something useful three weeks ago, half-remember a phrase from it, and now you're scrolling through browser history hoping to recognize the favicon. Ctrl+F in your history panel only matches page titles, and most of us have given up and started re-Googling things we've already found once.

{{< link href="https://github.com/asciimoo/hister" >}}Hister{{< /link >}} fixes that by building a real search engine over your own browsing, one page at a time, and it stores nothing outside your machine unless you tell it to.

## What Hister Actually Does

Hister runs a small server on your computer (or a box you control) and builds a full-text index of two things: pages you visit and files you point it at. It's the difference between "search your history" and "search the actual content of everything you've read."

{{< image "self_host_hister_personal_search_engine/hister_demo_interface.webp" "Hister's search interface, showing the search box and indexed page and rule counts on the public read-only demo instance" >}}

The pieces that make it more than a bookmark manager:

- **Full-page indexing, not just titles and URLs.** A browser extension for Firefox or Chrome captures the rendered content of every page you visit and sends it to your Hister server. Search for a phrase you remember from an article and it matches the body text, not just what happened to be in the `<title>` tag.
- **Local file indexing.** Point Hister at a directory - notes, PDFs, exported chat logs - and it indexes those too, alongside your web history, in the same query.
- **A real query language.** Field filters, phrases, wildcards, negation, date ranges, and OR groups (more on this below).
- **Multiple clients.** A web UI, a terminal client for people who live in the shell, and an MCP endpoint so an AI assistant can search your history directly.
- **No cloud requirement.** No telemetry, no mandatory account, no third-party indexing service. The project's own line is that it's built for people who want "a search engine as private as their own filesystem."

It's written in Go, ships as a single binary, and is licensed AGPLv3.

## Installing Hister

The quickest path is the prebuilt binary from the {{< link href="https://github.com/asciimoo/hister/releases/latest" >}}GitHub releases page{{< /link >}}:

```bash
chmod +x hister
./hister listen
```

That starts the server with no configuration required for a single-user, local setup. The web UI comes up at `http://127.0.0.1:4433`, and the terminal keeps running as long as you want the server up - closing it stops indexing and search.

Three other install paths, if you'd rather not manage a raw binary:

```bash
# Homebrew (macOS/Linux)
brew install hister

# Docker
docker pull ghcr.io/asciimoo/hister:latest

# Nix, without installing anything permanently
nix run github:asciimoo/hister -- listen
```

Once it's running, install the {{< link href="https://hister.org/docs/quickstart" >}}browser extension{{< /link >}} for Firefox or Chrome and point it at your local server. From then on, every page you visit gets indexed in the background. According to the project's privacy notes, the extension only makes one network call outside indexing your content: fetching a page's favicon.

You can also import what you already have instead of starting from zero - existing browser history, {{< link href="https://linkding.link/">}}Linkding{{< /link >}} exports, and {{< link href="https://obsidian.md/">}}Obsidian{{< /link >}} vaults are supported import sources, plus a straightforward website crawler if you want to index a whole doc site.

## A Query Language Worth Learning

Most personal search tools stop at fuzzy keyword matching. Hister gives you an actual grammar, and it's worth spending five minutes with it because the difference between "search everything" and "search precisely" is what makes a tool like this useful two months in, not just on day one.

```
# Exact phrase
"end-to-end encryption"

# Restrict to a field
title:migration domain:github.com

# Wildcards (trailing is faster than leading)
secur*

# Exclude terms or languages
privacy -facebook
-language:en

# OR groups
title:(firewall|vpn|proxy)

# Time and visit-count filters
updated:>90d
visits:10..

# Combine all of it
title:encryption "end-to-end" domain:(signal.org|whatsapp.com) -deprecated
```

That last query finds pages with "encryption" in the title, the exact phrase "end-to-end" in the body, from either signal.org or whatsapp.com, while excluding anything mentioning "deprecated." Try building that against your browser's native history search.

## Letting an AI Assistant Search Your History Too

Hister ships an MCP (Model Context Protocol) endpoint at `/mcp`, which means an assistant like Claude can query your indexed history and files directly instead of you copy-pasting context into a chat window. If you haven't run into MCP before, it's a small open standard for wiring external tools and data sources into an AI assistant's context - we've covered the mechanics in more detail in [exposing a local MCP server with Pinggy](/blog/expose_mcp_server_with_pinggy/).

For a local, single-user instance, no authentication is required by default - point your client at `http://127.0.0.1:4433/mcp`. In Claude Desktop's config file:

```json
{
  "mcpServers": {
    "hister": {
      "url": "http://127.0.0.1:4433/mcp"
    }
  }
}
```

If you've turned on token authentication (covered in the next section), add the header:

```json
{
  "mcpServers": {
    "hister": {
      "url": "http://127.0.0.1:4433/mcp",
      "headers": {
        "Authorization": "Bearer <your-access-token>"
      }
    }
  }
}
```

In practice this is genuinely useful for research-heavy work: ask your assistant "did I read anything about Postgres connection pooling last month" and it can search your actual indexed history instead of guessing from training data.

## Making Hister Reachable From Anywhere with Pinggy

By default Hister only listens on `127.0.0.1`, which is deliberate - the project's own docs are blunt about the tradeoff: *"Hister transmits your entire browsing history, with page contents, to and from the server. This is not something you want circulating unencrypted on the public Internet."* Their documented options for going beyond localhost are a local-network bind plus a real hostname, or a reverse proxy (Caddy or nginx) in front of it for TLS, since Hister doesn't speak HTTPS natively.

That's the right warning, but setting up nginx, a certificate, and DNS just to check your search index from your phone is a lot of yak-shaving for something you might want in the next five minutes. [Pinggy](https://pinggy.io) gets you the same result - an HTTPS URL in front of your local port - with one command and no server to maintain.

### Creating the tunnel

```bash
ssh -p 443 -R0:localhost:4433 free.pinggy.io
```

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Hister:" portstring="Hister port" localport="4433" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

Pinggy prints a public URL like `https://abc123.a.pinggy.link`. It's HTTPS by default, which covers exactly the "don't send this unencrypted" concern Hister's own docs raise.

### Adding a password

Since anyone with the URL can reach your search index, put HTTP Basic Auth in front of it at the tunnel layer:

```bash
ssh -p 443 -R0:localhost:4433 -t free.pinggy.io b:youruser:yourpassword
```

Anyone opening the link now gets a browser password prompt before they see anything. This is a reasonable substitute for Hister's own `app.access_token` setting if you just want a quick, temporary tunnel rather than reconfiguring the server.

### A stable URL for daily use

The free tier hands you a new random subdomain each time you reconnect, which is fine for a one-off check but annoying if you want to search your history from your phone every day. [Pinggy's paid tier](https://pinggy.io/#prices) gives you a fixed subdomain that stays the same across restarts, so you can bookmark it once.

## Honest Tradeoffs

Hister is young and opinionated, and it's worth knowing what you're signing up for before you build a habit around it.

**Resource usage varies with your history size.** A handful of self-hosters report the indexer getting heavy on CPU once the archive grows into the tens of thousands of pages, particularly if it's sharing a small VPS with a reverse proxy. Start on a machine with headroom, not the same $5 box running five other things.

**No native HTTPS.** As covered above, you need either a reverse proxy or a tunnel for encrypted remote access - it's not a batteries-included web server.

**It's a young project under a different working name.** Hister renamed after a trademark conflict with its original name, so search results and older discussion threads may still reference the old name. The maintainer (`asciimoo`, also known for the {{< link href="https://github.com/asciimoo/searx">}}SearX{{< /link >}} privacy search engine) has a track record of shipping and maintaining privacy tools, which is a reasonable signal for longevity.

**It's not the only tool in this space.** If you've tried {{< link href="https://github.com/ArchiveBox/ArchiveBox">}}ArchiveBox{{< /link >}} (page preservation), {{< link href="https://www.lesbonscomptes.com/recoll/">}}Recoll{{< /link >}} (desktop full-text search), or Zotero (reference management), Hister overlaps with all three without replacing any of them outright - it's closer to "active, searchable knowledge base of what you've already seen" than an archive or a reference manager. If your workflow already has one of those tools, and it's not the browsing-history gap Hister targets, you may not need to add another.

## Wrapping Up

The interesting thing about Hister isn't any single feature - full-text search, local files, MCP - it's that all of it stays on hardware you control by default. That's a genuinely different privacy posture from typing your research questions into someone else's search box. Run `./hister listen`, install the extension, and give the query language ten minutes; if you want it reachable from your phone before you've set up a proper domain and TLS certificate, `ssh -p 443 -R0:localhost:4433 free.pinggy.io` gets you there in about the time it took to read this sentence.
