---
title: "Bookshelf Is a Self-Hosted eBook Library With No Database and No Login Screen"
description: "Bookshelf turns a folder of EPUBs into a browsable library with no database at all. Here's how to run it, and how to lock down its wide-open default with a Pinggy tunnel."
date: 2026-08-25T11:00:00+05:30
draft: false
tags: ["Bookshelf", "self-hosted", "ebooks", "Pinggy", "Docker"]
og_image: "images/self_host_bookshelf_ebook_library/self_host_bookshelf_ebook_library_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNlbGYtSG9zdCBCb29rc2hlbGYgYW5kIEFjY2VzcyBZb3VyIGVCb29rIExpYnJhcnkgUmVtb3RlbHkiLAogICJkZXNjcmlwdGlvbiI6ICJMZWFybiBob3cgdG8gcnVuIHRoZSBCb29rc2hlbGYgc2VsZi1ob3N0ZWQgZWJvb2sgbGlicmFyeSB3aXRoIERvY2tlciBhbmQgZXhwb3NlIGl0IHRvIHRoZSBpbnRlcm5ldCB3aXRoIGEgUGluZ2d5IHR1bm5lbCwgYWRkaW5nIGJhc2ljIGF1dGggc2luY2UgQm9va3NoZWxmIHNoaXBzIHdpdGggbm8gYnVpbHQtaW4gYXV0aGVudGljYXRpb24uIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNsb25lIHRoZSByZXBvIGFuZCBhZGQgRVBVQiBvciBQREYgZmlsZXMgdG8gYSBib29rcyBmb2xkZXI6IGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vbXVyZXJraW5uL2Jvb2tzaGVsZi5naXQgJiYgY2QgYm9va3NoZWxmICYmIG1rZGlyIGJvb2tzIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlN5bmMgYW5kIHN0YXJ0IHdpdGggRG9ja2VyIENvbXBvc2U6IGRvY2tlciBjb21wb3NlIHJ1biAtLXJtIHN5bmMgLS1jcmVhdGUgJiYgZG9ja2VyIGNvbXBvc2UgdXAgLWQiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgc2hlbGYgbG9jYWxseSBhdCBodHRwOi8vbG9jYWxob3N0OjMwMDAiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIGEgcHVibGljIHR1bm5lbCB3aXRoIFBpbmdneTogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgZnJlZS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiTG9jayB0aGUgcHVibGljIFVSTCBkb3duIHdpdGggYmFzaWMgYXV0aDogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgLXQgZnJlZS5waW5nZ3kuaW8gYjp1c2VybmFtZTpwYXNzd29yZCIKICAgIH0KICBdCn0KCjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_host_bookshelf_ebook_library/self_host_bookshelf_ebook_library_banner.webp" "Bookshelf's book grid UI in a browser, with a note that a Pinggy tunnel is the way to add a lock to a library that ships without one" >}}

{{< llm-context >}}To self-host the Bookshelf ebook library and share it with Pinggy - run `docker compose run --rm sync --create && docker compose up -d` after dropping EPUB/PDF files in a `books/` folder (starts the shelf on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password` to get a public HTTPS URL with a basic auth prompt in front of it.{{< /llm-context >}}

Most self-hosted ebook readers - Calibre-Web, Kavita, Audiobookshelf - ask you to stand up a database first. {{< link href="https://github.com/murerkinn/bookshelf" >}}Bookshelf{{< /link >}} skips that step entirely. It's a server-rendered page that lists the books in a folder, lets you search them, and reads EPUB and PDF files right in the browser. No SQLite file, no Postgres container, no ORM migrations to keep straight. The folder of books *is* the database.

The tradeoff for that simplicity is spelled out in the project's own README, in plain words: there is no authentication. Anyone who can reach the URL can read and download the entire library. That's a fine default for a library sitting on your home network, and a bad one the moment you want to read from your phone on mobile data or hand a link to a friend. This post covers running Bookshelf, and then closing that gap with a Pinggy tunnel.

{{% tldr %}}

1. **Clone Bookshelf and add your books**
   ```bash
   git clone https://github.com/murerkinn/bookshelf.git
   cd bookshelf
   mkdir books && cp ~/Downloads/*.epub books/
   ```

2. **Sync and start it with Docker**
   ```bash
   docker compose run --rm sync --create
   docker compose up -d
   ```
   Bookshelf is now running at `http://localhost:3000`.

3. **Share it with Pinggy, with a login prompt in front**
   ```bash
   ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password
   ```
   You get a public HTTPS URL like `https://abc123.a.pinggy.link`, and anyone who opens it needs the username and password you picked before they see a single book cover.

{{% /tldr %}}

## What Bookshelf actually is

{{< link href="https://github.com/murerkinn/bookshelf" >}}Bookshelf{{< /link >}} is a TypeScript project (built with Turborepo) that renders one page: a grid of book covers with a search box above it. Click a book and it opens in an in-browser EPUB or PDF reader that remembers where each profile left off. Profiles exist so housemates or family members can keep their reading progress separate - they're not an access control mechanism, just a way to avoid one person's bookmark clobbering another's.

What makes it worth a second look is the storage model. Bookshelf ships two providers, and both treat object storage as the only state the app needs:

{{< image "self_host_bookshelf_ebook_library/self_host_bookshelf_ebook_library_architecture.webp" "Diagram comparing Bookshelf's two storage providers: a books folder on disk served by a Node server, and a Cloudflare R2 bucket served by a Worker, both skipping a database" >}}

- **Filesystem provider**: point it at a directory, and a small Node server does the rest. This is the one to reach for on a home server, a NAS, or a cheap VPS.
- **Cloudflare Worker provider**: point it at an R2 bucket instead, and the same app deploys as a Worker with `wrangler`. No server to patch, scales to zero when nobody's reading.

A one-time `sync` step walks your books, generates cover thumbnails (with `cwebp` and `pdftoppm`, or the Docker image, which bundles both), and writes a small index alongside them. After that, the app just reads what's already on disk or in the bucket. There's no background process reconciling state with a database, because there's no database to reconcile with.

## Running it locally

The Docker path is the fastest way to try it, and it's what the project's own quick start leads with:

```bash
git clone https://github.com/murerkinn/bookshelf.git
cd bookshelf
mkdir books
cp ~/Downloads/*.epub books/
```

Then sync the library and bring the stack up:

```bash
docker compose run --rm sync --create
docker compose up -d
```

`docker compose up` starts the app on `http://localhost:3000`, backed by a named volume (`library`) that holds the generated covers, search index, and per-profile reading data. If you'd rather bind-mount a real directory on the host instead of a named volume, the README calls out that you need to `chown` it to UID 1000 first, since that's the user the container runs as.

If you don't have books handy and just want to see the UI, there's a demo mode:

```bash
npm run demo
```

This generates nine public-domain titles so you can look at a populated shelf without hunting down files first.

### Running it without Docker

If you'd rather skip Docker, the filesystem provider runs directly with Node 24+ (a Unix-like OS is required - the sync tool shells out to `which` to find `cwebp`/`pdftoppm`, so Windows isn't supported outside Docker):

```bash
npm install
```

Point a `bookshelf.config.json` at a local directory:

```jsonc
{ "storage": { "provider": "fs", "directory": "shelf-data" } }
```

Then sync and start:

```bash
npm run sync -- --create
npm run build
npm start -w @bookshelf/app
```

For a public-facing instance where you want people to read but never upload or delete, set one environment variable and writes are refused at the storage layer:

```bash
BOOKSHELF_READ_ONLY=1
```

That's a genuinely useful guardrail. It just isn't the same thing as a login.

## The gap: no auth, by design

Here's the line from the README, verbatim: "There is no authentication. Anyone who can reach the app can read and download the whole library, so put it on a network you trust or behind something that asks who is calling." That's an honest tradeoff, not an oversight - a login system pulls in sessions, password resets, and probably the database this project is explicitly avoiding. But it does mean the app is not the thing standing between your books and the internet. Something else has to be.

When Bookshelf got discussed on Hacker News, this was the first thing commenters pushed on, alongside a fair point about copyright: publishing an unencrypted library of books you don't have redistribution rights for, even to an audience of one, is worth thinking about before you expose anything publicly. Read-only mode and profiles don't change either of those facts. If you're only ever going to open the app on your home Wi-Fi, none of this matters - localhost and your router's NAT are the perimeter. It starts mattering the moment you want the shelf on your phone over LTE, or you want to hand a link to your partner instead of setting up their laptop on your network.

## Putting a lock on it with Pinggy

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} opens an SSH tunnel from Bookshelf's port to a public HTTPS URL, and - more importantly here - it can put a username/password prompt in front of that URL, so the "something that asks who is calling" from the README doesn't have to be built into Bookshelf at all.

With the app running on `localhost:3000`, open a second terminal:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 free.pinggy.io" >}}
"{\"cli\": {\"windows\": {\"ps\": \"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\", \"cmd\": \"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"}, \"linux\": {\"ps\": \"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\", \"cmd\": \"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}}, \"ssh\": {\"windows\": {\"ps\": \"ssh -p 443 -R0:localhost:3000 free.pinggy.io\", \"cmd\": \"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}, \"linux\": {\"ps\": \"ssh -p 443 -R0:localhost:3000 free.pinggy.io\", \"cmd\": \"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints a public URL, something like `https://abc123.a.pinggy.link`, that forwards straight to your local Bookshelf instance. Anyone who opens it right now sees your whole library, no questions asked - the same wide-open default the README warns about, just reachable from anywhere instead of only your LAN. That's the gap to close before sharing the link with anyone but yourself.

Add basic auth by tacking a `b:username:password` argument onto the same command:

```bash
ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password
```

{{< ssh_command >}}
"{\"cli\": {\"windows\": {\"ps\": \"./pinggy.exe -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\", \"cmd\": \"./pinggy.exe -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\"}, \"linux\": {\"ps\": \"./pinggy -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\", \"cmd\": \"./pinggy -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\"}}, \"ssh\": {\"windows\": {\"ps\": \"ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\", \"cmd\": \"ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\"}, \"linux\": {\"ps\": \"ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\", \"cmd\": \"ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

Replace `username` and `password` with values of your choosing (neither can contain a colon). Now the same public URL prompts for that username and password in a plain browser login dialog before it lets anyone past the front page - a book grid full of your library never renders for someone who doesn't have the credentials. You can add more than one pair (`b:reader1:pass1 b:reader2:pass2`) if a few people need their own login, or pair the tunnel with {{< link href="https://pinggy.io/docs/http_tunnels/ip_whitelist/" >}}IP whitelisting{{< /link >}} instead if you'd rather restrict by network than by password.

For a single-person setup, `BOOKSHELF_READ_ONLY=1` plus basic auth is a reasonable combination: nobody without the password gets in, and even if the password leaked, they couldn't delete or overwrite anything in the library.

## How it stacks up against the usual suspects

If you've looked into self-hosted ebook servers before, you've probably run into {{< link href="https://github.com/janeczku/calibre-web" >}}Calibre-Web{{< /link >}}, {{< link href="https://www.kavitareader.com/" >}}Kavita{{< /link >}}, or {{< link href="https://www.audiobookshelf.org/" >}}Audiobookshelf{{< /link >}} (which handles ebooks, though audiobooks are its main focus). All three are heavier by design: real user accounts, a database, OPDS feeds for e-reader apps, multi-device sync. That buys you things Bookshelf doesn't try to do - per-user shelves, reading lists, metadata scraping - at the cost of an actual deployment to maintain.

Bookshelf's pitch is narrower and, for a lot of people, closer to what they actually wanted: a page that shows the books you already own and lets you read them, with as little infrastructure as a `books/` folder and a Docker Compose file. If you outgrow that - you want OPDS support so your e-reader app can sync automatically, or real per-user libraries - one of the heavier options is the better fit. If you just want your own EPUBs off a USB stick and onto a URL you can open from your phone, Bookshelf is a lot less to run.

## Wrapping up

Bookshelf is a good example of a tool that took "no database" seriously enough to also mean "no login system," and said so directly instead of bolting on something half-finished. That's a reasonable design choice for software meant to run on hardware you already trust. A Pinggy tunnel with basic auth turns on for exactly the moment that trust boundary changes - when the library needs to be reachable somewhere you don't control the network, and you'd rather add a password than build one.

```bash
ssh -p 443 -R0:localhost:3000 -t free.pinggy.io b:username:password
```

One command, one login prompt, and the folder of EPUBs you've been meaning to organize is finally readable from anywhere - just not by anyone.
