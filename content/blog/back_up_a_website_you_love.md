---
title: "How to Back Up a Website You Love (wget, WARC and ArchiveBox)"
description: "Back up any website you depend on: mirror it with wget, capture a replayable WARC file, and set up ArchiveBox for pages you want to keep. Commands tested, with real file counts and sizes."
date: 2026-11-02T10:00:00+05:30
lastmod: 2026-11-02T10:00:00+05:30
draft: false
tags: ["web archiving", "guide", "developer tools", "self-hosted"]
og_image: "images/back_up_a_website_you_love/back_up_a_website_you_love_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIGJhY2sgdXAgYSB3ZWJzaXRlIHdpdGggd2dldCBhbmQgYSBXQVJDIGZpbGUiLAogICJkZXNjcmlwdGlvbiI6ICJCYWNrIHVwIGFueSB3ZWJzaXRlIHlvdSBkZXBlbmQgb246IG1pcnJvciBpdCB3aXRoIHdnZXQsIGNhcHR1cmUgYSByZXBsYXlhYmxlIFdBUkMgZmlsZSwgYW5kIHNldCB1cCBBcmNoaXZlQm94IGZvciBwYWdlcyB5b3Ugd2FudCB0byBrZWVwLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9iYWNrX3VwX2Ffd2Vic2l0ZV95b3VfbG92ZS9iYWNrX3VwX2Ffd2Vic2l0ZV95b3VfbG92ZV9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTAyVDEwOjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIk1pcnJvciB0aGUgc2l0ZSB3aXRoIHdnZXQiLCAidGV4dCI6ICJSdW4gd2dldCAtLW1pcnJvciAtLWNvbnZlcnQtbGlua3MgLS1hZGp1c3QtZXh0ZW5zaW9uIC0tcGFnZS1yZXF1aXNpdGVzIC0tbm8tcGFyZW50IC0td2FpdD0xIC0tcmFuZG9tLXdhaXQgLS13YXJjLWZpbGU9cGluZ2d5LWRvY3MgLVAgbWlycm9yIGh0dHBzOi8vcGluZ2d5LmlvL2RvY3MvIHRvIHNhdmUgdGhlIHBhZ2VzIGFuZCB3cml0ZSBhIFdBUkMgZmlsZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTZXJ2ZSB0aGUgbWlycm9yIGxvY2FsbHkiLCAidGV4dCI6ICJSdW4gY2QgbWlycm9yICYmIHB5dGhvbjMgLW0gaHR0cC5zZXJ2ZXIgODAwMCBhbmQgb3BlbiBodHRwOi8vbG9jYWxob3N0OjgwMDAvIHRvIGNoZWNrIHRoZSBjb3B5LiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlJlcGxheSB0aGUgV0FSQyIsICJ0ZXh0IjogIk9wZW4gcmVwbGF5d2ViLnBhZ2UgYW5kIGxvYWQgdGhlIFdBUkMgZmlsZSB0byBicm93c2UgdGhlIGFyY2hpdmVkIHJlc3BvbnNlcyBpbiB5b3VyIGJyb3dzZXIuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiVXNlIGEgYnJvd3Nlci1iYXNlZCB0b29sIGZvciBKYXZhU2NyaXB0IHBhZ2VzIiwgInRleHQiOiAiRm9yIHBhZ2VzIHJlbmRlcmVkIGJ5IEphdmFTY3JpcHQsIHNhdmUgdGhlbSB3aXRoIFNpbmdsZUZpbGUgb3IgQXJjaGl2ZUJveCwgd2hpY2ggbG9hZCB0aGUgcGFnZSBpbiBhIHJlYWwgYnJvd3Nlci4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJUZXN0IHRoZSBiYWNrdXAiLCAidGV4dCI6ICJEaXNjb25uZWN0IGZyb20gdGhlIG5ldHdvcmssIG9wZW4gdGhlIG1pcnJvciBhbmQgdGhlIFdBUkMsIGFuZCBjbGljayB0aHJvdWdoIHNldmVyYWwgcGFnZXMuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "back_up_a_website_you_love/back_up_a_website_you_love_banner.webp" "Back up a website you love: a wget command producing a browsable mirror folder and a replayable WARC file" >}}

One `wget` command saved the Pinggy docs for me as 130 files and 8.3 MB, and the same run wrote a single WARC file that replays the pages exactly as the server sent them. That is most of what "backing up a website" means for a small, mostly static site. The rest is knowing which of the three common formats you need, and where each one breaks.

If a site you read or rely on is run by one person, it can vanish with a lapsed domain, a hosting bill or a bored maintainer. The fix costs a few minutes and a few megabytes. I'll use the Pinggy docs as the worked example throughout, since it is a real site with HTML, CSS, fonts and images.

{{% tldr %}}
1. **`wget --mirror` with `--convert-links`** gives you a folder of files you can open offline or serve with any static server. It works well on static sites and badly on anything that builds its pages with JavaScript.
2. **Add `--warc-file`** to the same command and you also get a WARC, which stores the raw HTTP responses. It is the format the Internet Archive uses, and it keeps headers and the original URLs that a folder throws away.
3. **A folder and a WARC answer different questions.** The folder is for reading offline. The WARC is for proof of what the site served on a given day, and it replays in a browser with ReplayWeb.page.
4. **For JavaScript-heavy pages and one-off saves**, use SingleFile or ArchiveBox, which drive a real browser.
5. **Check the backup before you trust it.** Open it with your network off.
{{% /tldr %}}

## What you are actually saving

A website is not a file. It is a set of HTTP responses: an HTML document, the CSS and fonts it links to, images, and whatever the scripts fetch after load. A backup is a copy of those responses, plus a way to show them again.

There are three common shapes:

| Format | What it is | Good at | Breaks on |
|---|---|---|---|
| Mirror folder | HTML, CSS and images on disk, links rewritten to relative paths | Reading offline, serving from any static host | Pages rendered by JavaScript, login walls |
| WARC | Raw requests and responses in one file | Fidelity, proof of what was served, replay | Needs a replay tool to browse |
| Single-file page | One HTML file with everything inlined | Saving one article | Whole sites |

{{< image "back_up_a_website_you_love/website_backup_formats.webp" "Three ways to back up the Pinggy docs: a mirror folder, a WARC file and a single HTML file, with what each is good at" >}}

## Mirror a site with wget

GNU Wget 1.21.4 ships with most Linux distros and installs with Homebrew on macOS. This is the command I ran against the Pinggy docs:

```bash
wget --mirror --convert-links --adjust-extension --page-requisites \
  --no-parent --wait=1 --random-wait \
  --warc-file=pinggy-docs --no-warc-compression \
  -P mirror https://pinggy.io/docs/
```

What each flag does:

- `--mirror` turns on recursion with no depth limit and timestamping, so a second run only fetches what changed.
- `--convert-links` rewrites links in the saved pages so they point at your local copies. Without it, every link in the backup still goes to the live site.
- `--adjust-extension` saves a page served as `text/html` with an `.html` extension.
- `--page-requisites` also fetches the CSS, images and fonts a page needs to render.
- `--no-parent` keeps wget below `/docs/`. Leave it out and wget climbs to the whole domain.
- `--wait=1 --random-wait` pauses about a second between requests. It is the polite default, and it is why the run took 2 minutes 39 seconds for 130 files.

The result, counted on 3 November 2026:

```text
130 files, 8.3 MB in mirror/
53 .html, 29 .webp, 24 .png, 8 .otf, 6 .woff2, 4 .css
```

The pages live under `mirror/pinggy.io/docs/`. You can open `index.html` straight from disk, but some sites use root-absolute paths that only work behind a web server. A server from the Python standard library handles that:

```bash
cd mirror && python3 -m http.server 8000
```

Open `http://localhost:8000/pinggy.io/docs/index.html`. I got a 200 for it.

## Why the WARC is worth the extra flag

`--warc-file=pinggy-docs` makes wget write every request and response it handles into `pinggy-docs.warc`. WARC (Web ARChive, ISO 28500) is the container the Internet Archive and national libraries use. Each record holds the request URL, the response headers and the body, with a timestamp and a checksum.

For this run the file held 130 response records and was 8.0 MB uncompressed. I passed `--no-warc-compression` so I could look inside with `head`; without it wget gzips each record, and `gzip -9` on the whole file brought mine down to 5.1 MB.

What the WARC keeps that a folder drops:

- the HTTP headers, including `Content-Type`, `Last-Modified` and redirects
- the exact URL of every resource, including query strings that a folder turns into odd filenames
- the date each response was fetched, so you can say what the site served on that day

To browse it, open {{< link href="https://replayweb.page" >}}ReplayWeb.page{{< /link >}} and load the file. It replays from the WARC inside your browser with a service worker, so there is no server to run. For the command line, {{< link href="https://github.com/webrecorder/warcio" >}}warcio{{< /link >}} is a Python library that reads and writes WARC files.

{{< image "back_up_a_website_you_love/wget_one_run_two_outputs.webp" "How one wget run on the Pinggy docs writes a mirror folder for offline reading and a WARC file for replay" >}}

## Where wget stops working

wget fetches what the server sends. It does not run JavaScript. A single-page app sends a nearly empty HTML shell and builds the page in the browser, so wget saves the shell and nothing else. I would expect a mirror of a React or Vue app with client-side rendering to be mostly empty, and it is the first thing to check after any backup.

Other limits worth knowing:

- Pages behind a login need cookies. wget has `--load-cookies`, but expect to fiddle.
- `robots.txt` is honoured by default in recursive mode. Respect it on sites that are not yours.
- Content loaded on scroll or click is never requested, so it is never saved.
- A mirror of a large site is a lot of requests. Keep the wait on, and don't hammer a small host.

## Use a real browser when the page needs one

Two tools handle pages that need JavaScript, because they load the page in a browser first and save what the browser ended up with.

**SingleFile** is a browser extension (and a `single-file-cli` for scripts) that saves the current page as one HTML file, with CSS, images and fonts inlined. It is the quickest way to keep one article. It is a poor fit for crawling a whole site.

**ArchiveBox** is a self-hosted archiver. You hand it URLs and it saves each one in several forms: HTML, a PDF, a screenshot, a WARC and more. It runs from Docker. I did not run ArchiveBox for this post, so check the {{< link href="https://github.com/ArchiveBox/ArchiveBox" >}}project README{{< /link >}} for the current install and flags. The basic flow, as its docs describe it, looks like this:

```bash
mkdir archive && cd archive
docker run -v "$PWD":/data -it archivebox/archivebox init
docker run -v "$PWD":/data -it archivebox/archivebox add 'https://pinggy.io/docs/'
```

The tradeoff is size. A browser-rendered capture with a screenshot and a PDF per page takes far more disk than the 8 MB wget used for the same section, so pick ArchiveBox for pages you will actually read again.

## Back up the backup

A backup that lives on the one laptop is a second copy of nothing. A few habits that cost little:

1. Re-run the mirror on a schedule. With `--mirror`, wget skips files that haven't changed, so a weekly `cron` job stays cheap.
2. Keep the WARC gzipped and copy it somewhere else: another disk, object storage, a friend's server.
3. Note the date in the filename, such as `pinggy-docs-2026-11-03.warc.gz`. A WARC without a date loses half its value.
4. Test a restore. Disconnect from the network, open the mirror, click through five pages, and open the WARC in ReplayWeb.page.

## Sharing the archive with a tunnel

Once the mirror is on your machine, you may want to show it to someone else, or check how it looks on your phone. If the `http.server` from earlier is still running on port 8000, a tunnel gives it a public URL without opening anything on your router:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Pinggy prints an HTTPS URL. Append `/pinggy.io/docs/index.html` to it, and the archived docs open from any device. Close the tunnel when you're done, since it exposes the whole `mirror/` folder. The free tunnel also expires after 60 minutes, which suits a quick look and not a permanent mirror.

## Conclusion

Run the wget command above on one site you would miss, for example a docs site or a personal blog you follow. Then switch your network off and click around the folder. If the page comes up bare, that site needs a browser-based tool. If it looks right, drop the WARC in ReplayWeb.page too, and you will see why the format exists. It costs teh price of a coffee break, and you recieve a copy nobody can take down.
