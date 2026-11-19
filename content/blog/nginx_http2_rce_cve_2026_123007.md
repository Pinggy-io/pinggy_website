---
title: "NGINX HTTP/2 RCE (CVE-2026-123007): How to Check and Patch Your Server"
description: "CVE-2026-123007 and CVE-2026-123633 let an unauthenticated attacker run code on NGINX with HTTP/2 enabled. How the bugs work, which versions and distro packages are fixed, and the exact commands to check and mitigate."
date: 2026-11-19T10:00:00+05:30
lastmod: 2026-11-19T10:00:00+05:30
draft: false
tags: ["NGINX", "security", "http", "self-hosted", "DevOps"]
og_image: "images/nginx_http2_rce_cve_2026_123007/nginx_http2_rce_cve_2026_123007_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIGNoZWNrIGFuZCBwYXRjaCBOR0lOWCBmb3IgdGhlIEhUVFAvMiBSQ0UgdnVsbmVyYWJpbGl0aWVzIENWRS0yMDI2LTEyMzAwNyBhbmQgQ1ZFLTIwMjYtMTIzNjMzIiwKICAiZGVzY3JpcHRpb24iOiAiQ1ZFLTIwMjYtMTIzMDA3IGFuZCBDVkUtMjAyNi0xMjM2MzMgbGV0IGFuIHVuYXV0aGVudGljYXRlZCBhdHRhY2tlciBydW4gY29kZSBvbiBOR0lOWCB3aXRoIEhUVFAvMiBlbmFibGVkLiBIb3cgdGhlIGJ1Z3Mgd29yaywgd2hpY2ggdmVyc2lvbnMgYW5kIGRpc3RybyBwYWNrYWdlcyBhcmUgZml4ZWQsIGFuZCB0aGUgZXhhY3QgY29tbWFuZHMgdG8gY2hlY2sgYW5kIG1pdGlnYXRlLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9uZ2lueF9odHRwMl9yY2VfY3ZlXzIwMjZfMTIzMDA3L25naW54X2h0dHAyX3JjZV9jdmVfMjAyNl8xMjMwMDdfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTEtMTlUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0xOVQxMDowMDowMCswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDaGVjayB0aGUgaW5zdGFsbGVkIHBhY2thZ2UgdmVyc2lvbiIsICJ0ZXh0IjogIlJ1biBkcGtnIC1sIG5naW54IGFuZCBjb21wYXJlIHRoZSBmdWxsIHBhY2thZ2UgdmVyc2lvbiB3aXRoIHlvdXIgZGlzdHJvJ3Mgc2VjdXJpdHkgdHJhY2tlci4gVXBzdHJlYW0gZml4ZWQgcmVsZWFzZXMgYXJlIG5naW54IDEuMzAuNyBhbmQgMS4zMS45OyBVYnVudHUgMjQuMDQgaXMgZml4ZWQgaW4gMS4yNC4wLTJ1YnVudHU3LjIwIGV2ZW4gdGhvdWdoIG5naW54IC12IHN0aWxsIHByaW50cyAxLjI0LjAuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQ2hlY2sgdGhhdCB0aGUgSFRUUC8yIG1vZHVsZSBpcyBidWlsdCBpbiIsICJ0ZXh0IjogIlJ1biBuZ2lueCAtViAyPiYxIHwgZ3JlcCAtLSAnLS13aXRoLWh0dHBfdjJfbW9kdWxlJy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDaGVjayB3aGV0aGVyIHRoZSBjb25maWcgZW5hYmxlcyBIVFRQLzIiLCAidGV4dCI6ICJSdW4gc3VkbyBuZ2lueCAtVCAyPiYxIHwgc2VkICdzLyMuKi8vJyB8IGdyZXAgLW5FICdsaXN0ZW5bWzpzcGFjZTpdXS4qaHR0cDJ8XltbOnNwYWNlOl1dKmh0dHAyW1s6c3BhY2U6XV0rb25bWzpzcGFjZTpdXSo7Jy4gQW55IG91dHB1dCBtZWFucyBIVFRQLzIgaXMgb24gZm9yIHRoYXQgYWRkcmVzcyBhbmQgcG9ydC4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJUZXN0IEhUVFAvMiBmcm9tIG91dHNpZGUiLCAidGV4dCI6ICJSdW4gb3BlbnNzbCBzX2NsaWVudCAtY29ubmVjdCBIT1NUOjQ0MyAtc2VydmVybmFtZSBIT1NUIC1hbHBuIGgyIDwvZGV2L251bGwgYW5kIGxvb2sgZm9yIEFMUE4gcHJvdG9jb2w6IGgyLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkRpc2FibGUgSFRUUC8yIGlmIHlvdSBjYW5ub3QgcGF0Y2ggeWV0IiwgInRleHQiOiAiT24gbmdpbnggMS4yNS4xIG9yIGxhdGVyIHNldCBodHRwMiBvZmY7IGluIGV2ZXJ5IHNlcnZlciBibG9jayBvbiB0aGUgcG9ydC4gT24gb2xkZXIgdmVyc2lvbnMgcmVtb3ZlIGh0dHAyIGZyb20gdGhlIGxpc3RlbiBkaXJlY3RpdmUgb2YgZXZlcnkgc2VydmVyIGJsb2NrIHNoYXJpbmcgdGhlIHBvcnQuIFJ1biBzdWRvIG5naW54IC10ICYmIHN1ZG8gbmdpbnggLXMgcmVsb2FkLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlVwZ3JhZGUgYW5kIHJlc3RhcnQgTkdJTlgiLCAidGV4dCI6ICJSdW4gc3VkbyBhcHQgdXBkYXRlICYmIHN1ZG8gYXB0IGluc3RhbGwgLS1vbmx5LXVwZ3JhZGUgbmdpbngsIG9yIHB1bGwgbmdpbng6MS4zMC43IG9yIG5naW54OjEuMzEuOSwgdGhlbiBzdWRvIHN5c3RlbWN0bCByZXN0YXJ0IG5naW54LiBBIHJlbG9hZCBkb2VzIG5vdCByZXBsYWNlIHRoZSBydW5uaW5nIGJpbmFyeS4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "nginx_http2_rce_cve_2026_123007/nginx_http2_rce_cve_2026_123007_banner.webp" "NGINX HTTP/2 RCE headline beside a terminal panel listing affected versions 1.9.5 to 1.31.8 and fixed versions 1.30.7 and 1.31.9" >}}

On November 18, 2026, the NGINX team shipped **1.30.7 stable and 1.31.9 mainline** with fixes for ten security bugs. Two of them, CVE-2026-123007 and CVE-2026-123633, let an unauthenticated attacker execute code on a server that has HTTP/2 turned on. One of the two has been in the code since HTTP/2 landed in NGINX 1.9.5, back in 2015. If you run NGINX with `http2` anywhere in your config, upgrade the package and restart the process today; if you can't, drop HTTP/2 from every TLS listener until you can. The rest of this post shows how the bugs work, how to tell whether your box is exposed (the version string can lie), and the commands I ran to check and fix a stock Ubuntu 24.04 install.

{{% tldr %}}
1. **Both RCEs need HTTP/2 enabled.** CVE-2026-123007 (flow-control integer underflow) affects 1.9.5 to 1.31.8 and works against NGINX serving plain static files. CVE-2026-123633 (use-after-free) affects 1.19.7 to 1.31.8 and needs a proxying setup.
2. **Fixed upstream in 1.30.7 and 1.31.9.** Official Docker tags `nginx:1.30.7` and `nginx:1.31.9` were on Docker Hub within a day.
3. **Distro packages keep the old version number.** Ubuntu 24.04's fix is `1.24.0-2ubuntu7.20`, which still prints `nginx/1.24.0`. Check the package version, not `nginx -v`. Debian stable was still unpatched when I checked.
4. **HTTP/2 is per port, not per site.** One `listen 443 ssl http2;` turns it on for every server block on that address, so grep the whole `nginx -T` output.
5. **A reload is not enough after upgrading.** The old binary keeps running until you restart NGINX.
{{% /tldr %}}

## What was disclosed on November 18

The fixes came out as a coordinated release from F5, the company that owns NGINX, with write-ups from {{< link href="https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities" >}}Wiz Research{{< /link >}} and {{< link href="https://xint.io/blog/nginx2root-remote-code-execution" >}}Xint{{< /link >}} the same day. Five teams found the same bugs independently: Wiz, Ikotas Labs, Metnir, Rapid7 and Xint. Wiz says it found both with its AI code scanning harness; Xint says one of its researchers found CVE-2026-123007 while preparing for a hacking contest, and a fully automated scan found four more a few days later. Whatever you think of the AI angle, five parallel reports of decade-old bugs means the window between "patch lands in git" and "someone has a working exploit" is short.

The two that matter for most people:

| CVE | Bug | Affected | What it needs | Blocked by turning off HTTP/2? |
|---|---|---|---|---|
| CVE-2026-123007 | Integer underflow in HTTP/2 `send_window` | 1.9.5 to 1.31.8 | HTTP/2 on. Wiz showed RCE on a server serving static files over TLS on 64-bit Linux | Yes |
| CVE-2026-123633 | Use-after-free of an HTTP/2 connection | 1.19.7 to 1.31.8 | HTTP/2 on, requests proxied upstream, free connection slots running low | Yes |

The same release also fixed a use-after-free in HTTP/3 (CVE-2026-121810), one in the DNS `resolver` (CVE-2026-123634), one in the mail proxy (CVE-2026-113425), and five lower-impact bugs, including an endless loop while reading a request body over TLS 1.3 (CVE-2026-118899). **Turning off HTTP/2 does nothing for those.** Only the upgrade covers all of them.

A note on severity, because the numbers don't agree. Wiz and Xint call both HTTP/2 bugs critical, CVSS 4.0 score 9.2. Ubuntu rates CVE-2026-123007 high priority with a CVSS 3 score of 8.1. The {{< link href="https://nginx.org/en/security_advisories.html" >}}nginx.org advisories page{{< /link >}} labels CVE-2026-123007 "major" and CVE-2026-123633 "medium". The vendor's own text says code execution needs ASLR to be off or bypassed, and Wiz says its exploits include an ASLR bypass via a memory read. I'd treat both as "patch now" and not wait for the scores to converge.

## How the send_window underflow works

HTTP/2 lets many requests (streams) share one TCP connection. Flow control stops the server from sending more response data than the client said it can take. NGINX tracks the remaining allowance for the whole connection in a counter, `h2c->send_window`. The protocol caps teh window at 2^31 - 1 bytes.

The bug is a three-step accident:

1. NGINX queues response data and subtracts its size from `send_window` before the bytes actually go out.
2. The client cancels the stream with `RST_STREAM` while the data is still queued. The cleanup handler, `ngx_http_v2_filter_cleanup()`, gives the unsent allowance back with `h2c->send_window += window;` and never checks the cap. If the client has meanwhile sent `WINDOW_UPDATE` frames to raise the window, the refund pushes the counter above 2^31 - 1, a value the rest of the code assumes can't happen.
3. The next `WINDOW_UPDATE` hits the bounds check in `ngx_http_v2_state_window_update()`:

```c
if (window > NGX_HTTP_V2_MAX_WINDOW - h2c->send_window)
```

`send_window` is now bigger than the maximum, and the subtraction is unsigned, so it wraps to a huge positive number. The check passes and the window keeps growing. Later `ngx_http_v2_send_chain()` converts that counter to a signed `off_t`, it comes out negative, and a buffer ends up with its end pointer before its start pointer. On the TLS send path, `ngx_ssl_send_chain()` turns that into an out-of-bounds memory copy. From there it's memory disclosure, heap corruption and, with enough work, code execution as the worker user.

{{< image "nginx_http2_rce_cve_2026_123007/nginx_send_window_underflow.webp" "Four steps of CVE-2026-123007: queued data reduces send_window, an RST_STREAM refund pushes it above 2^31 - 1, the unsigned bounds check wraps, and a negative length causes an out-of-bounds copy" >}}

*The refund in step 2 is where the counter escapes its range. Mechanism from the {{< link href="https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities" >}}Wiz Research write-up{{< /link >}}.*

None of this touches your application code. Wiz says it got code execution against official 1.31.7 and 1.31.8 builds serving ordinary static files, no backend and no third-party modules. The attack also leaves almost nothing in the access log: `WINDOW_UPDATE` and `RST_STREAM` are control frames, not requests, so they never get a log line.

## How the HTTP/2 use-after-free works

CVE-2026-123633 is a bookkeeping slip around connection reuse. NGINX keeps a list of idle connections it's allowed to close when it runs out of `worker_connections`. An HTTP/2 connection with no active streams goes on that list.

The attacker sends half a `HEADERS` frame. With no streams open yet, NGINX marks the connection reusable while it waits for the rest. The rest arrives, `ngx_http_v2_create_stream()` starts a request, and nobody takes the connection off the reusable list. Now the request gets proxied upstream, which needs a new connection slot. If slots are tight, `ngx_drain_connections()` picks a reusable connection to close, and it can pick this one, mid-request. If NGINX also fails to build the `GOAWAY` frame (it has hit its per-connection frame limit), the error path frees the connection's memory and returns to the request, which keeps using it.

That's why this one needs more conditions: a proxy config, connection pressure, and the frame-limit edge case. The attacker can create the connection pressure themselves by opening lots of connections, so "we have plenty of `worker_connections`" isn't much of a defence.

## Check whether your server is exposed

I ran these on a fresh Ubuntu 24.04 container with the distro `nginx` package and a TLS server block on port 8443. Swap in your own port.

### 1. Check the package, not just the binary

```bash
$ nginx -v
nginx version: nginx/1.24.0 (Ubuntu)
$ dpkg -l nginx | tail -1
ii  nginx          1.24.0-2ubuntu7.20 amd64        small, powerful, scalable web/proxy server
```

`1.24.0` is inside the vulnerable range, but this box is patched. Distros backport the fix and only bump the package revision. The changelog says so:

```bash
$ zcat /usr/share/doc/nginx/changelog.Debian.gz | head -8
nginx (1.24.0-2ubuntu7.20) noble-security; urgency=medium

  * SECURITY UPDATE: Arbitrary code execution in send_window
    - debian/patches/CVE-2026-123007.patch: Account for queued frames when
      validating WINDOW_UPDATE in src/http/v2/ngx_http_v2.c and
      ../ngx_http_v2_filter_module.c
    - CVE-2026-123007
  * SECURITY UPDATE: Arbitrary code execution in HTTP/2
```

Fixed package versions as of November 19, 2026, from the {{< link href="https://ubuntu.com/security/CVE-2026-123007" >}}Ubuntu CVE page{{< /link >}} and the {{< link href="https://security-tracker.debian.org/tracker/CVE-2026-123007" >}}Debian security tracker{{< /link >}}:

| Distro | NGINX version | Fixed package |
|---|---|---|
| Ubuntu 24.04 LTS | 1.24.0 | `1.24.0-2ubuntu7.20` |
| Ubuntu 22.04 LTS | 1.18.0 | `1.18.0-6ubuntu14.23` |
| Ubuntu 26.04 LTS | 1.28.3 | `1.28.3-2ubuntu1.13` |
| Ubuntu 20.04 / 18.04 | 1.18.0 / 1.14.0 | Ubuntu Pro (ESM) only |
| Debian 12 bookworm | 1.22.1 | not fixed yet (`1.22.1-9+deb12u10` is vulnerable) |
| Debian 13 trixie | 1.26.3 | not fixed yet (`1.26.3-3+deb13u10` is vulnerable) |
| Debian sid | 1.30.6 | `1.30.6-4` |
| nginx.org packages, Docker | 1.30.7 / 1.31.9 | `nginx:1.30.7`, `nginx:1.31.9`, `stable`, `mainline` |

If you're on Debian stable today, the mitigation in the next section is your only option until the security team ships. Check the tracker again before you assume that's still the case. Ubuntu 26.10 also has a fixed package listed.

### 2. Check that HTTP/2 is compiled in

```bash
$ nginx -V 2>&1 | grep -q -- '--with-http_v2_module' && echo 'HTTP2_MODULE=present' || echo 'HTTP2_MODULE=absent'
HTTP2_MODULE=present
```

Every mainstream build has it, so this mostly rules things out for custom builds.

### 3. Check whether the config turns it on

`nginx -T` dumps the full config, including every `include`. Strip comments and look for both the old and the new syntax:

```bash
$ sudo nginx -T 2>&1 | sed 's/#.*//' | grep -nE 'listen[[:space:]].*http2|^[[:space:]]*http2[[:space:]]+on[[:space:]]*;'
193:    listen 8443 ssl http2;
```

Any output means HTTP/2 is enabled somewhere. `nginx -T` reads the files on disk, so if someone edited the config and never reloaded, the running process can differ.

### 4. Check what a client actually gets

From outside your network, ask for HTTP/2 during the TLS handshake:

```bash
$ openssl s_client -connect localhost:8443 -servername localhost -alpn h2 </dev/null 2>&1 | grep -E 'ALPN protocol:|No ALPN negotiated'
ALPN protocol: h2
```

`ALPN protocol: h2` means the port speaks HTTP/2. `curl -sk -o /dev/null -w '%{http_version}\n' --http2 https://localhost:8443/` printing `2` tells you the same thing. If a CDN sits in front, this only tests the CDN. Run it against the origin IP too. Wiz says a CDN or WAF that terminates HTTP/2 itself "may mitigate parts of the exploit", depending on the implementation, which is not something I'd bet a server on.

{{< image "nginx_http2_rce_cve_2026_123007/nginx_http2_rce_exposure_check.webp" "Decision flow for the NGINX HTTP/2 RCEs: check the package with dpkg, then http2 in nginx -T, then an openssl ALPN h2 test, ending in patched, still upgrade, or exposed" >}}

*Run the package check first, because the version string can't be trusted on distro builds.*

## Turn off HTTP/2 until you can patch

The directive depends on your version. On NGINX 1.25.1 and later, HTTP/2 has its own directive:

```nginx
server {
    listen 443 ssl;
    http2 off;
    # ...
}
```

On anything older, including Ubuntu 24.04's 1.24.0, that directive doesn't exist and the config test fails:

```bash
$ sudo nginx -t
2026/11/19 13:40:21 [emerg] 743#743: unknown directive "http2" in /etc/nginx/sites-enabled/default:3
nginx: configuration file /etc/nginx/nginx.conf test failed
```

There, remove the `http2` parameter from the `listen` line instead: `listen 443 ssl http2;` becomes `listen 443 ssl;`.

The trap that bit me: **HTTP/2 on a `listen` line applies to the whole address and port, not just that server block.** I set up two virtual hosts on port 8443. Only `old.example.test` had `http2` on its `listen` line. Both negotiated HTTP/2:

```bash
$ for h in app.example.test old.example.test; do echo -n "$h: "; openssl s_client -connect localhost:8443 -servername $h -alpn h2 </dev/null 2>&1 | grep -E 'ALPN protocol:|No ALPN'; done
app.example.test: ALPN protocol: h2
old.example.test: ALPN protocol: h2
```

So fixing the one site you were looking at is not enough. Remove it from every server block that shares the port, then test and reload:

```bash
$ sudo nginx -t && sudo nginx -s reload
$ openssl s_client -connect localhost:8443 -servername localhost -alpn h2 </dev/null 2>&1 | grep -E 'ALPN protocol:|No ALPN negotiated'
No ALPN negotiated
```

Clients fall back to HTTP/1.1 and most people won't notice. What breaks: gRPC served directly by NGINX (gRPC needs HTTP/2), and pages that load hundreds of small assets will be a bit slower without multiplexing. This mitigation does nothing for the HTTP/3, resolver or mail proxy bugs. If you've enabled `listen 443 quic`, you need the upgrade regardless.

## Upgrade, then restart

On Ubuntu:

```bash
sudo apt update && sudo apt install --only-upgrade nginx
sudo systemctl restart nginx
```

For the nginx.org repo it's the same `apt` or `dnf` upgrade, landing on 1.30.7 or 1.31.9. For containers, pull `nginx:1.30.7` or `nginx:1.31.9` (or `stable` / `mainline`) and redeploy. A Dockerfile pinned to `nginx:1.31.8` won't fix itself, so grep your repos for old tags.

**Restart, don't just reload.** `nginx -s reload` re-reads the config but keeps the running binary, so a patched package on disk changes nothing until the master process restarts (or you do a binary upgrade with `USR2`). Check that the old workers are gone afterwards:

```bash
ps -eo user,pid,lstart,args | grep '[n]ginx'
```

Don't forget NGINX you didn't install yourself: Kubernetes ingress controllers, appliance images, the "web panel" bundled with your hosting control panel, and old containers that pin a minor version. Xint counted 11.94 million hosts on Shodan with a visible NGINX version string as of November 10, and 98.9% of those were inside the affected range. A big chunk of those are packages nobody has looked at in years.

## Looking for signs of an attack

Exploit attempts are noisy in places other than the access log. Xint's write-up lists a few signals worth checking, none of them proof on its own:

- **Worker crashes.** A failed attempt usually segfaults a worker: `sudo grep -Ei 'worker process.*exited|signal 11|segfault' /var/log/nginx/error.log`.
- **Long-lived connections that only receive.** The `send_window` attack sends a flood of `WINDOW_UPDATE` frames over one connection. `sudo ss -tinp state established '( sport = :443 )'` run twice a few seconds apart shows `bytes_received` climbing fast while `bytes_sent` barely moves.
- **Workers running programs.** An NGINX worker has no reason to call `execve()`. An `auditd` rule on the worker's UID (`www-data` on Debian and Ubuntu) catches a shell starting, but only from the moment you add it.

If a worker has spawned `/bin/sh`, treat the box as compromised: rotate whatever secrets it could read and rebuild it. Xint also chained CVE-2026-123007 with a Linux kernel SCTP bug to get root on the host and break out of a Docker container in their tests, so "it's only the `www-data` user" isn't as comforting as it sounds. If nothing on the box uses SCTP, blocking the module (`install sctp /bin/true` in a file under `/etc/modprobe.d/`) is a cheap extra layer.

## Conclusion

The fix itself is small: a missing cap check on a refund, and a connection that never left the reusable list. The work is finding every NGINX you run. Do it in this order: list every host and image that runs NGINX, check the package version against the distro tracker, grep `nginx -T` for `http2`, run the `openssl -alpn h2` test from outside, and either upgrade and restart or strip `http2` from every `listen` on the shared port. Then run the ALPN test once more, so the last thing you check is what an attacker would recieve, not what the config file says.
