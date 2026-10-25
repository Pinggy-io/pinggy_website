---
title: "Brotli CVE-2026-111497: Find and Fix Every Vulnerable Decoder in Your Stack"
description: "CVE-2026-111497 is an out-of-bounds write in Google's Brotli decoder. Which Node.js, Python, curl and proxy builds are affected, the fixed versions, and the commands to check yours."
date: 2026-10-25T18:30:00+05:30
lastmod: 2026-10-25T18:30:00+05:30
draft: false
tags: ["Brotli", "security", "Node.js", "Python", "DevOps"]
og_image: "images/brotli_decoder_cve_2026_111497/brotli_decoder_cve_2026_111497_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkJyb3RsaSBDVkUtMjAyNi0xMTE0OTc6IEZpbmQgYW5kIEZpeCBFdmVyeSBWdWxuZXJhYmxlIERlY29kZXIgaW4gWW91ciBTdGFjayIsCiAgImRlc2NyaXB0aW9uIjogIkNWRS0yMDI2LTExMTQ5NyBpcyBhbiBvdXQtb2YtYm91bmRzIHdyaXRlIGluIEdvb2dsZSdzIEJyb3RsaSBkZWNvZGVyLiBXaGljaCBOb2RlLmpzLCBQeXRob24sIGN1cmwgYW5kIHByb3h5IGJ1aWxkcyBhcmUgYWZmZWN0ZWQsIHRoZSBmaXhlZCB2ZXJzaW9ucywgYW5kIHRoZSBjb21tYW5kcyB0byBjaGVjayB5b3Vycy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYnJvdGxpX2RlY29kZXJfY3ZlXzIwMjZfMTExNDk3L2Jyb3RsaV9kZWNvZGVyX2N2ZV8yMDI2XzExMTQ5N19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTI1VDE4OjMwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjVUMTg6MzA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9icm90bGlfZGVjb2Rlcl9jdmVfMjAyNl8xMTE0OTcvIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJTZWN1cml0eSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiQ1ZFLTIwMjYtMTExNDk3LCBCcm90bGkgdnVsbmVyYWJpbGl0eSwgTm9kZTJTaGVsbCwgSFRUUDJTaGVsbCwgTm9kZS5qcyBCcm90bGkgUkNFLCBCcm90bGkgMS4yLjEsIFB5dGhvbiBCcm90bGkgZml4IiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkJyb3RsaSIsICJkZXNjcmlwdGlvbiI6ICJBIGNvbXByZXNzaW9uIGZvcm1hdCBhbmQgbGlicmFyeSB1c2VkIGZvciBIVFRQIENvbnRlbnQtRW5jb2Rpbmc6IGJyLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQ1ZFLTIwMjYtMTExNDk3IiwgImRlc2NyaXB0aW9uIjogIk91dC1vZi1ib3VuZHMgd3JpdGUgaW4gdGhlIEJyb3RsaSBkZWNvZGVyLCBmaXhlZCBpbiAxLjIuMSwgMS4xLjEgYW5kIDEuMC4xMC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk5vZGUuanMgc2VjdXJpdHkgcmVsZWFzZSIsICJkZXNjcmlwdGlvbiI6ICJOb2RlLmpzIDIyLjIzLjQsIDI0LjIyLjEgYW5kIDI2LjEyLjEgYnVuZGxlIHRoZSBmaXhlZCBkZWNvZGVyLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQ29udGVudC1FbmNvZGluZyIsICJkZXNjcmlwdGlvbiI6ICJUaGUgSFRUUCBoZWFkZXIgdGhhdCB0ZWxscyBhIHJlY2VpdmVyIGhvdyBhIGJvZHkgd2FzIGNvbXByZXNzZWQuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "brotli_decoder_cve_2026_111497/brotli_decoder_cve_2026_111497_banner.webp" "Brotli CVE-2026-111497 headline above Node.js, Python, curl and Envoy logos and the vulnerable Brotli 1.0.3 to 1.2.0 range" >}}

CVE-2026-111497 is an out-of-bounds write in Google's Brotli decoder, rated 9.2 (critical) on CVSS 4.0. It affects Brotli 1.0.3 through 1.2.0, and it can be reached by anything that decompresses attacker-controlled `br` data: a server reading a request body, or a client reading a response. Node.js shipped the fix on October 21, 2026 (22.23.4, 24.22.1, 26.12.1), and Brotli itself shipped 1.2.1, 1.1.1 and 1.0.10 the same day.

The annoying part is where the decoder lives. It is not a line in your `package.json`. It is inside the Node binary, inside `pip` wheels pulled in by an HTTP client extra, inside `libcurl`, and inside proxies like Envoy.

{{% tldr %}}
1. The bug is in one function, `DecodeBlockTypeAndLength()`, which reports **"bad data" and "need more input" with the same return value**. A crafted stream abuses that to write past a buffer.
2. **Any bundled copy of Brotli 1.0.3 to 1.2.0 is vulnerable**, so check Node.js, Python (`Brotli`, `brotlicffi`), curl, Envoy, Istio and your container base images.
3. **Fixed versions:** Node.js 22.23.4 / 24.22.1 / 26.12.1, Brotli 1.2.1 / 1.1.1 / 1.0.10, Python `Brotli` 1.2.1 and `brotlicffi` 1.2.1.0. End-of-life Node lines get no fix.
4. **Restart after patching.** A running process keeps the old decoder in memory.
5. If you cannot patch today, **refuse `Content-Encoding: br` on the way in** and stop asking for `br` on the way out.
{{% /tldr %}}

## What the bug is

Brotli streams are split into blocks, and a block can switch to a new "block type" partway through. The decoder handles that switch in `DecodeBlockTypeAndLength()`. That function returns a plain boolean. `BROTLI_FALSE` is supposed to mean "I need more input bytes, call me again", but it is also what the function returns for "this stream is malformed and the switch is invalid".

Callers cannot tell the two apart, and on the fast decoding path the return value is ignored altogether. The {{< link href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" >}}Node.js advisory{{< /link >}} describes the result: an invalid block switch is treated as "wait for more input", and the streaming decoder keeps appending incoming bytes to an eight-byte internal buffer, writing past its end. Depending on what sits behind that buffer, that is a crash, a leak of process memory, or code execution.

The upstream fix returns a real error code, `BROTLI_DECODER_ERROR_FORMAT_BLOCK_SWITCH` (-17), and stops decoding. In practice a bad stream now fails the way any other corrupt stream does.

Two timeline details matter if you are judging how worried to be. According to {{< link href="https://www.upwind.io/feed/http2shell-cve-2026-111497-one-brotli-bug-rce-across-the-http-stack" >}}Upwind's write-up{{< /link >}}, OpenAI reported the bug in February 2026 and Brotli fixed the code then, but no release carried the fix until October 21. Node.js credits OpenAI Codex Security for the report. And as of October 23, the same write-up says there were no reports of exploitation in the wild and the CVE was not in CISA's KEV list. Imperva's red team did show code execution on an unmodified Node.js 24.22.0, so "theoretical" is the wrong word.

## Why it reaches more than Node.js

A decoder only matters if untrusted bytes reach it. Brotli is the `br` in `Content-Encoding: br` and `Accept-Encoding: gzip, br`, so it sits on the path of ordinary HTTP traffic in both directions:

- **A malicious client sends your server a `br` request body.** This needs a server or proxy that decodes request bodies. Most do not by default, but API gateways, upload endpoints and Envoy configured with a Brotli decompressor do.
- **A malicious or compromised server sends your client a `br` response.** Your code may never mention Brotli, but the HTTP client does the decoding for you.

The second case is the one people miss. Node's `fetch` is built on undici, and undici's response decoding calls `zlib.createBrotliDecompress()` when a server answers with `content-encoding: br`. So does anything that calls `node:zlib` directly. On the Python side, urllib3 (and so `requests`), httpx with its `brotli` extra, and aiohttp all use the `Brotli` or `brotlicffi` package automatically as soon as it is installed, and Scrapy installs it by default.

One caveat on the Node side: the Node advisory only confirms the `node:zlib` path. Whether a given `fetch` call is exploitable depends on the response actually reaching that decoder, which is why the safe assumption is to patch rather than reason about it.

{{< image "brotli_decoder_cve_2026_111497/brotli_decoder_locations.webp" "Diagram of two paths to a Brotli decoder: a br request body through Envoy to your app, and a br response from an attacker's server to your HTTP client" >}}

*Both directions of an HTTP call can hand attacker-controlled bytes to the same bundled decoder.*

## Check which Brotli your machine actually runs

Start with the runtime you deploy, not the one in your Dockerfile comment. All of these ran on a fresh Linux box with Node v22.22.0 (older than the fixed 22.23.4) and curl 8.5.0:

```bash
node -p "process.versions.brotli"
# 1.1.0
```

Node reports the Brotli it was built with. 1.1.0 sits inside the vulnerable 1.0.3 to 1.2.0 range, and the box needs Node 22.23.4 or later. For Node, the reliable check is the Node version itself against the fixed releases (22.23.4, 24.22.1, 26.12.1), since a patched build may keep a similar-looking Brotli version string.

For Python, in every virtualenv and every image:

```bash
pip show Brotli brotlicffi
pipdeptree -r -p Brotli
```

The first prints `Version: 1.2.0` in my test environment, which is vulnerable. The second shows what pulled it in, for example `httpx[brotli]`. Per {{< link href="https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497" >}}Aikido{{< /link >}}, pip-audit, Dependabot and Safety were not flagging the PyPI packages yet when the CVE landed, so do not rely on them for this one. PyPI lists `Brotli` 1.2.1 and `brotlicffi` 1.2.1.0 as the current releases, which are the fixed ones. (Write-ups differ slightly on the exact vulnerable range for Python, "1.2.0 and earlier" in one and "through 1.2.1" in another. PyPI's release list settles it: anything below 1.2.1 needs upgrading.)

For curl:

```bash
curl -V | head -1
# curl 8.5.0 (x86_64-pc-linux-gnu) libcurl/8.5.0 OpenSSL/3.0.13 zlib/1.3 brotli/1.1.0 ...
```

The `brotli/1.1.0` there is the library version curl was linked against, but on Debian and Ubuntu the security team backports fixes without bumping it. The second line of `curl -V` in my output says `security patched: 8.5.0-2ubuntu10.16`. A version string cannot tell you whether the backport is in, so check the distro's security tracker for `CVE-2026-111497` and update the package.

For containers, run the same checks inside each image, for example `docker run --rm your-image node -v`.

## Fixed versions

| Software | Vulnerable | Fixed |
|---|---|---|
| Brotli (upstream) | 1.0.3 to 1.2.0 | 1.2.1, 1.1.1, 1.0.10 |
| Node.js | 22.x, 24.x, 26.x before the October 21 releases | 22.23.4, 24.22.1, 26.12.1 |
| Python `Brotli` / `brotlicffi` | 1.2.0 and earlier | 1.2.1 / 1.2.1.0 |
| Bun | before 1.4.4 | 1.4.4 |
| Envoy | 1.39.2, 1.38.5, 1.37.7, 1.36.11 (only if the Brotli decompressor is configured) | 1.40.0, 1.39.3, 1.38.6, 1.37.8, 1.36.12 |
| Istio | not confirmed by an Istio bulletin when I checked | 1.29.9, 1.30.6, 1.31.2 reported |

Node.js lines that are already end-of-life (25.x, 23.x and 20.x or older) get no fix, so on those the answer is to move to a supported line. Versions and dates are as of October 25, 2026, from the Node.js advisory, the Brotli {{< link href="https://github.com/google/brotli/releases" >}}releases page{{< /link >}} and the vendor write-ups linked above.

What about the Go port? The widely used {{< link href="https://github.com/andybalholm/brotli/issues/82" >}}andybalholm/brotli{{< /link >}} has the same pattern of ignoring the block-switch result. The reporter expects Go's bounds checks to turn it into a panic rather than memory corruption, but did not reproduce it. The maintainer fixed it in commit `33c2a98` on October 23. A panic in a server that decodes request bodies is still a denial of service, so bump that module too.

## Patch in this order

Patching a library and patching a running service are two different events. The process keeps the old decoder in memory until it restarts, so the checklist is: update, rebuild the image, redeploy, then verify the running workload reports the new version.

For the order, go by exposure:

1. Internet-facing proxies and services that decode request bodies (Envoy, Istio gateways, API servers with `br` middleware).
2. Services that fetch URLs a user gives them: webhook senders, link previewers, scrapers, import-from-URL features. Those hand a stranger control over the response.
3. Everything else, including build tooling and CI images.

If you cannot patch today:

- **Inbound:** reject any request whose `Content-Encoding` contains `br` before the body is read.
- **Outbound:** do not send `br` in `Accept-Encoding`. That alone is not enough, because a malicious server can answer with Brotli anyway. Also refuse `content-encoding: br` responses before your client decodes them.
- **Python:** `pip uninstall Brotli brotlicffi` and drop extras like `httpx[brotli]`. Clients fall back to gzip and deflate. Node and other runtimes that bundle the decoder have no such switch.

## Check your own endpoint from the outside with Pinggy

A WAF only sees inbound traffic, and your dev laptop is not behind your production proxy, so it is worth sending a harmless Brotli body to the thing you actually expose and seeing whether it decodes `br` at all. This does not test whether you are patched. It tells you whether the inbound path exists.

Here is a minimal Node server on port 3000 that decodes `br` bodies with `node:zlib`, the same call the advisory describes:

```js
const http = require('http'), zlib = require('zlib');
http.createServer((q, r) => {
  const c = [];
  q.on('data', d => c.push(d));
  q.on('end', () => {
    if ((q.headers['content-encoding'] || '').toLowerCase() === 'br') {
      return zlib.brotliDecompress(Buffer.concat(c), (e, o) =>
        r.end(e ? 'error ' + e.code + '\n' : 'decoded: ' + o + '\n'));
    }
    r.end('plain: ' + Buffer.concat(c) + '\n');
  });
}).listen(3000);
```

Run it with `node srv.js`, then open a tunnel in a second terminal:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints a public HTTPS URL. Compress a small valid payload and post it to that URL (I ran the same requests against `localhost:3000`; the tunnel URL below is a placeholder):

```bash
printf 'hello' | python3 -c "import sys,brotli;sys.stdout.buffer.write(brotli.compress(sys.stdin.buffer.read()))" > body.br
curl -s -X POST -H 'Content-Encoding: br' --data-binary @body.br https://abc123.a.pinggy.link
# decoded: hello
```

If your real service answers `decoded` to a request like that, it decodes Brotli request bodies and is on the first row of the patch list. If it answers with a 415 or ignores the header, the inbound path is closed, and the outbound path through your HTTP clients is the one left to check. A server that fails to decode a corrupt body returns an error like `ERR__ERROR_FORMAT_PADDING_2`, which is the normal path for bad data and not a sign of the bug. Do not go hunting for a malicious stream to prove exposure. The version check above is the proof.

To make a service refuse `br` bodies while you wait on the patch, add this before your body parser:

```js
app.use((req, res, next) =>
  /\bbr\b/i.test(req.headers['content-encoding'] || '')
    ? res.status(415).end('unsupported content-encoding')
    : next());
```

For background on tunnels and what they expose, see the [Pinggy docs](https://pinggy.io/docs/). Close the tunnel when you are done testing.

## What to do next

Run `node -v`, `pip show Brotli brotlicffi` and `curl -V` on each host and image you run, compare against the table, and redeploy anything below the fixed versions. Then put "restart the process" on the checklist, because that is the step people skip. Related reading on this blog: [how forwarded headers work](/blog/x_forwarded_for_and_forwarded_headers/) if you terminate traffic at a proxy.
