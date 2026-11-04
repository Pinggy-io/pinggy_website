---
title: "Build a Web App in C with CGI and SQLite"
description: "Write a web app as one C binary: a CGI program that verifies a Stripe-style webhook with libsodium, stores it in SQLite, and runs behind lighttpd. Includes the full code and a Pinggy tunnel."
date: 2026-10-13T11:00:00+05:30
lastmod: 2026-10-13T11:00:00+05:30
draft: false
tags: ["C programming", "webhooks", "web development", "security"]
og_image: "images/c_cgi_web_app_sqlite/c_cgi_web_app_sqlite_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQnVpbGQgYSB3ZWIgYXBwIGluIEMgd2l0aCBDR0kgYW5kIFNRTGl0ZSB0aGF0IHZlcmlmaWVzIHdlYmhvb2tzIiwKICAiZGVzY3JpcHRpb24iOiAiV3JpdGUgYSB3ZWIgYXBwIGFzIG9uZSBDIGJpbmFyeTogYSBDR0kgcHJvZ3JhbSB0aGF0IHZlcmlmaWVzIGEgU3RyaXBlLXN0eWxlIHdlYmhvb2sgd2l0aCBsaWJzb2RpdW0sIHN0b3JlcyBpdCBpbiBTUUxpdGUsIGFuZCBydW5zIGJlaGluZCBsaWdodHRwZC4gSW5jbHVkZXMgdGhlIGZ1bGwgY29kZSBhbmQgYSBQaW5nZ3kgdHVubmVsLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9jX2NnaV93ZWJfYXBwX3NxbGl0ZS9jX2NnaV93ZWJfYXBwX3NxbGl0ZV9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTEzVDExOjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIldyaXRlIHRoZSBDR0kgcHJvZ3JhbSIsICJ0ZXh0IjogIldyaXRlIGFwcC5jOiByZWFkIFJFUVVFU1RfTUVUSE9ELCBDT05URU5UX0xFTkdUSCBhbmQgSFRUUF9TVFJJUEVfU0lHTkFUVVJFIGZyb20gdGhlIGVudmlyb25tZW50LCByZWFkIHRoZSBib2R5IGZyb20gc3RkaW4sIHZlcmlmeSBITUFDLVNIQTI1NiBvdmVyIHRpbWVzdGFtcC5ib2R5IHdpdGggbGlic29kaXVtLCBhbmQgaW5zZXJ0IHRoZSBldmVudCBpbnRvIFNRTGl0ZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDb21waWxlIGl0IiwgInRleHQiOiAiUnVuIGdjYyAtTzIgLVdhbGwgLVdleHRyYSAtbyB3d3cvYXBwLmNnaSBhcHAuYyAtbHNvZGl1bSAtbHNxbGl0ZTMgYWZ0ZXIgaW5zdGFsbGluZyBsaWJzb2RpdW0tZGV2IGFuZCBsaWJzcWxpdGUzLWRldi4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTZXJ2ZSBpdCB3aXRoIGxpZ2h0dHBkIiwgInRleHQiOiAiRW5hYmxlIG1vZF9jZ2kgYW5kIG1vZF9yZXdyaXRlLCBhc3NpZ24gLmNnaSBmaWxlcyB0byBiZSBleGVjdXRlZCwgcmV3cml0ZSBhbGwgcGF0aHMgdG8gL2FwcC5jZ2ksIHNldCBXRUJIT09LX1NFQ1JFVCBhbmQgRVZFTlRTX0RCLCB0aGVuIHJ1biBsaWdodHRwZCAtRCAtZiBsaWdodHRwZC5jb25mLiBJdCBsaXN0ZW5zIG9uIHBvcnQgODA4MC4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJUZXN0IHNpZ25lZCBhbmQgdW5zaWduZWQgcmVxdWVzdHMiLCAidGV4dCI6ICJTaWduIHRoZSBib2R5IHdpdGggb3BlbnNzbCBkZ3N0IC1zaGEyNTYgLWhtYWMgYW5kIHNlbmQgaXQgd2l0aCBjdXJsIHVzaW5nIGEgU3RyaXBlLVNpZ25hdHVyZSBoZWFkZXIuIEEgYmFkIHNpZ25hdHVyZSByZXR1cm5zIDQwMCBhbmQgYSB2YWxpZCBvbmUgcmV0dXJucyAyMDAgYW5kIGFkZHMgYSByb3cuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiT3BlbiBhIFBpbmdneSB0dW5uZWwiLCAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwODAgZnJlZS5waW5nZ3kuaW8gYW5kIHVzZSB0aGUgSFRUUFMgVVJMIGl0IHByaW50cywgZm9sbG93ZWQgYnkgL3dlYmhvb2ssIGFzIHRoZSB3ZWJob29rIGVuZHBvaW50LiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "c_cgi_web_app_sqlite/c_cgi_web_app_sqlite_banner.webp" "A web app in 90 lines of C: a webhook flows through Pinggy, lighttpd and a C CGI binary into SQLite" >}}

{{< llm-context >}}To receive signed webhooks in a C CGI app with Pinggy - compile with `gcc -O2 -o www/app.cgi app.c -lsodium -lsqlite3`, serve the `www` folder with `lighttpd -D -f lighttpd.conf` (listens on port 8080), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL for the webhook endpoint.{{< /llm-context >}}

A web app does not need a framework, a runtime or a long-running process. A C program that reads environment variables and `stdin`, writes HTTP headers and a body to `stdout`, and exits is a complete web app, as long as a web server is willing to start it for each request. That is CGI, and it still works on lighttpd 1.4.74 in 2026. This post builds one: a single `app.c` that verifies a signed Stripe-style webhook with libsodium, stores it in SQLite, and shows the last 20 events on a page. It compiles in about 0.4 seconds, the binary is 17 KB, and the Pinggy section at the end points a real webhook sender at it.

{{% tldr %}}
1. A CGI program is a **normal executable the web server starts per request**, passing the request through environment variables and `stdin`.
2. **Webhook signature checks are a few lines of C** with libsodium's `crypto_auth_hmacsha256` and a constant-time compare.
3. **SQLite is a library, not a server**, so the database is one file next to the binary.
4. You pay for fork and exec on every request, and you write the parsing, escaping and limits yourself. That is the real cost.
5. A Pinggy tunnel gives the sender a public HTTPS URL while the app stays on `localhost:8080`.
{{% /tldr %}}

## What the web server hands your program

With CGI, the web server does the HTTP and your program does the app. On each request lighttpd forks, executes your binary, and passes the request like this:

- Method, path, query string and content length arrive as environment variables: `REQUEST_METHOD`, `PATH_INFO`, `QUERY_STRING`, `CONTENT_LENGTH`.
- Every request header arrives as `HTTP_<NAME>`, uppercased with dashes turned into underscores. `Stripe-Signature` becomes `HTTP_STRIPE_SIGNATURE`.
- The request body is on `stdin`, exactly `CONTENT_LENGTH` bytes.
- Your response is headers, a blank line, then the body, written to `stdout`. A `Status: 400` header sets the status code.

{{< image "c_cgi_web_app_sqlite/cgi_request_lifecycle.webp" "Sequence diagram of one POST request: the client calls lighttpd, which starts app.cgi, which inserts a row into events.db and exits after writing the response" >}}

*The process exists only for the length of one request.*

The process dies when it finishes. There is no shared state, no thread to leak, and no restart to roll out a new version: you replace the file and the next request runs the new code. Memory bugs are also limited to a single request's process. They are still bugs, and C gives you plenty of ways to write them.

## The whole app

The first half handles `POST`: check the length, read the body, verify the signature, insert a row. The second half handles everything else by printing the last 20 events. This is the complete `app.c`:

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sodium.h>
#include <sqlite3.h>

static void esc(const char *s) {
    for (; *s; s++) {
        switch (*s) {
        case '<': fputs("&lt;", stdout); break;
        case '>': fputs("&gt;", stdout); break;
        case '&': fputs("&amp;", stdout); break;
        case '"': fputs("&quot;", stdout); break;
        default: putchar(*s);
        }
    }
}

static int verify(const char *hdr, const char *body, size_t len, const char *secret) {
    /* Stripe-Signature: t=1700000000,v1=<hex hmac of "t.body"> */
    const char *t = strstr(hdr, "t="), *v = strstr(hdr, "v1=");
    if (!t || !v) return 0;
    char ts[32] = {0};
    sscanf(t + 2, "%31[0-9]", ts);
    crypto_auth_hmacsha256_state st;
    unsigned char mac[crypto_auth_hmacsha256_BYTES];
    crypto_auth_hmacsha256_init(&st, (const unsigned char *)secret, strlen(secret));
    crypto_auth_hmacsha256_update(&st, (const unsigned char *)ts, strlen(ts));
    crypto_auth_hmacsha256_update(&st, (const unsigned char *)".", 1);
    crypto_auth_hmacsha256_update(&st, (const unsigned char *)body, len);
    crypto_auth_hmacsha256_final(&st, mac);
    char want[2 * sizeof mac + 1];
    sodium_bin2hex(want, sizeof want, mac, sizeof mac);
    char got[sizeof want] = {0};
    sscanf(v + 3, "%64[0-9a-f]", got);
    return strlen(got) == sizeof want - 1 &&
           sodium_memcmp(want, got, sizeof want - 1) == 0;
}

int main(void) {
    const char *method = getenv("REQUEST_METHOD");
    const char *db_path = getenv("EVENTS_DB") ? getenv("EVENTS_DB") : "events.db";
    sqlite3 *db;
    if (sodium_init() < 0 || sqlite3_open(db_path, &db) != SQLITE_OK) {
        printf("Status: 500\r\nContent-Type: text/plain\r\n\r\nstartup failed\n");
        return 0;
    }
    sqlite3_busy_timeout(db, 2000);
    sqlite3_exec(db, "CREATE TABLE IF NOT EXISTS events("
                     "id INTEGER PRIMARY KEY, at TEXT DEFAULT CURRENT_TIMESTAMP, body TEXT)",
                 0, 0, 0);

    if (method && strcmp(method, "POST") == 0) {
        size_t len = getenv("CONTENT_LENGTH") ? strtoul(getenv("CONTENT_LENGTH"), 0, 10) : 0;
        if (len == 0 || len > 65536) {
            printf("Status: 413\r\nContent-Type: text/plain\r\n\r\nbad length\n");
            return 0;
        }
        char *body = calloc(len + 1, 1);
        if (fread(body, 1, len, stdin) != len) { printf("Status: 400\r\n\r\n"); return 0; }
        const char *hdr = getenv("HTTP_STRIPE_SIGNATURE");
        const char *secret = getenv("WEBHOOK_SECRET");
        if (!hdr || !secret || !verify(hdr, body, len, secret)) {
            printf("Status: 400\r\nContent-Type: text/plain\r\n\r\nbad signature\n");
            return 0;
        }
        sqlite3_stmt *s;
        sqlite3_prepare_v2(db, "INSERT INTO events(body) VALUES(?)", -1, &s, 0);
        sqlite3_bind_text(s, 1, body, (int)len, SQLITE_STATIC);
        sqlite3_step(s);
        sqlite3_finalize(s);
        printf("Content-Type: text/plain\r\n\r\nok\n");
        return 0;
    }

    printf("Content-Type: text/html; charset=utf-8\r\n\r\n");
    printf("<!doctype html><title>events</title><h1>Last 20 events</h1><ul>");
    sqlite3_stmt *s;
    sqlite3_prepare_v2(db, "SELECT at, body FROM events ORDER BY id DESC LIMIT 20", -1, &s, 0);
    while (sqlite3_step(s) == SQLITE_ROW) {
        printf("<li>%s <code>", sqlite3_column_text(s, 0));
        esc((const char *)sqlite3_column_text(s, 1));
        printf("</code></li>");
    }
    sqlite3_finalize(s);
    printf("</ul>\n");
    sqlite3_close(db);
    return 0;
}
```

Three details are easy to get wrong:

- **The body is bound as a parameter** (`sqlite3_bind_text`), never pasted into the SQL string. The same goes for output: `esc()` turns `<`, `>`, `&` and `"` into entities before the stored body goes into HTML. CGI gives you no templating or escaping, so every string that reaches the page goes through code you wrote.
- **The signature is compared in constant time** with `sodium_memcmp`, after checking the length, because `sodium_memcmp` assumes equal-length inputs. A plain `strcmp` would stop at the first differing byte.
- **The HMAC is over the raw bytes.** Stripe signs `timestamp + "." + raw body`, so the program must hash the bytes it read from `stdin`, not a parsed and re-serialised JSON object.

The program above is deliberately small, so it leaves out two things a production receiver needs. It does not reject old timestamps (Stripe's libraries default to a 5 minute tolerance), so a captured request can be replayed. And it does not read the secret from anywhere but an environment variable. Add both before pointing real payments at it.

## Compile it and wire up lighttpd

You need a C compiler, the libsodium and SQLite headers, and a web server with CGI. On Ubuntu 24.04:

```bash
sudo apt install build-essential libsodium-dev libsqlite3-dev lighttpd
mkdir -p www
gcc -O2 -Wall -Wextra -o www/app.cgi app.c -lsodium -lsqlite3
```

That builds without warnings on gcc 13.3 with libsodium 1.0.18 and SQLite 3.45.1. Then save this as `lighttpd.conf`:

```bash
server.document-root = "/path/to/your/project/www"
server.port = 8080
server.modules = ("mod_cgi", "mod_rewrite", "mod_setenv")
cgi.assign = (".cgi" => "")
url.rewrite-once = ("^/(.*)$" => "/app.cgi")
setenv.add-environment = ("WEBHOOK_SECRET" => "whsec_test123", "EVENTS_DB" => "/path/to/your/project/events.db")
```

`cgi.assign` runs any `.cgi` file as a program (the empty string means "execute it directly"). `url.rewrite-once` sends every path to the one binary, so `/` and `/webhook` both reach it. `setenv.add-environment` passes the secret and the database path to the process. Start the server in the foreground:

```bash
lighttpd -D -f lighttpd.conf
```

## Check that it rejects bad signatures

Sign a payload the way Stripe does, `HMAC-SHA256(secret, "<timestamp>.<body>")`, and send it with `curl`:

```bash
BODY='{"type":"checkout.session.completed","amount":4900}'
T=$(date +%s)
SIG=$(printf '%s.%s' "$T" "$BODY" | openssl dgst -sha256 -hmac whsec_test123 | awk '{print $2}')

curl -i -X POST localhost:8080/webhook -H "Stripe-Signature: t=$T,v1=deadbeef" -d "$BODY"
curl -i -X POST localhost:8080/webhook -H "Stripe-Signature: t=$T,v1=$SIG" -d "$BODY"
```

On my machine the first call returned `400 Bad Request` with `bad signature`, the same as a request with no header at all. The second returned `200 OK` with `ok`, and `sqlite3 events.db 'select count(*) from events'` printed `1`. Open `http://localhost:8080/` and the event is listed with its JSON escaped.

For speed, 200 sequential `GET /` requests took 2.7 seconds, about 14 ms each, and that includes starting a `curl` process for every one of them. Fork and exec for a 17 KB binary is not the bottleneck on this kind of app. If it ever is, FastCGI keeps the process alive and needs few changes to a program shaped like this.

## Receive real webhooks with a Pinggy tunnel

Stripe, GitHub and most other senders call a public HTTPS URL, and your app is on `localhost:8080`. Open a tunnel from a second terminal:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
{{</ ssh_command >}}

Pinggy prints an HTTPS address like `https://abc123.run.pinggy-free.link`. Use `https://abc123.run.pinggy-free.link/webhook` as the endpoint in the sender's dashboard, and put the signing secret the dashboard shows into `WEBHOOK_SECRET`. The path of a request is then: the sender calls the Pinggy URL -> Pinggy forwards it down the SSH connection your machine opened -> lighttpd on port 8080 starts `app.cgi`.

{{< image "c_cgi_web_app_sqlite/webhook_to_c_cgi_app.webp" "Architecture diagram: Stripe calls a Pinggy URL, which reaches lighttpd, app.cgi and events.db on a laptop through an SSH connection the laptop opened" >}}

*The sender only sees the public Pinggy URL.*

A free tunnel lasts 60 minutes and gets a new random URL each time you reconnect, so update the endpoint in the sender's dashboard every session. I did not run the tunnel step while writing this post, since the build environment had no SSH client. The tunnel command is the one from the Pinggy docs, and everything before it was run as shown. For stable URLs and longer sessions, paid plans keep tunnels up without the 60 minute limit and support persistent subdomains; see the [Pinggy docs](https://pinggy.io/docs/).

If you want a deeper look at how webhooks behave through a tunnel, {{< link href="https://stripe.com/docs/webhooks#verify-manually" >}}Stripe's signature verification docs{{< /link >}} describe the exact header format this code follows, and [how to receive and test webhooks on localhost](/blog/receive_and_test_webhooks_in_localhost/) covers the tunnel side for other senders.

## What C CGI costs you

The upside is real: no runtime to patch, one file to deploy, a database you can open with `sqlite3`, and `gdb` or `valgrind` work on the whole app because it is just a program. The costs are also real:

- **You write the HTTP glue.** Cookies, form parsing, URL decoding and validation do not exist until you write them. The `sscanf` parsing above is fine for a fixed header format and nothing more.
- **Every unchecked buffer is a hole.** Cap lengths early (the 64 KB limit above), use bounded `sscanf` widths, and build with `-fsanitize=address,undefined` while testing.
- **One process per request.** It's cheap at this size and stops being cheap once the program loads a large dataset on start.
- **SQLite allows one writer at a time.** `sqlite3_busy_timeout` makes concurrent writes wait up to 2 seconds instead of failing, which is plenty for a webhook receiver and not for a write-heavy service.

## Conclusion

Copy `app.c` and `lighttpd.conf`, change the secret, and replay a few signed requests with the `curl` commands above. Then break it on purpose: send a body one byte different from the signed one, send an oversized body, and send a `<script>` tag as a payload, and confirm each is rejected or escaped. That quickly shows what the 90 or so lines do and what they leave to you.
