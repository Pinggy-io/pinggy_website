---
title: "Go 1.27 Drains HTTP/1 Response Bodies So Connections Get Reused"
description: "Before Go 1.27, closing an unread HTTP/1 response body threw the TCP connection away. Go 1.27 drains up to 256 KB or 50 ms for you. Here is the mechanism, a repro with real numbers, and the caveats."
date: 2026-10-15T10:00:00+05:30
lastmod: 2026-10-15T10:00:00+05:30
draft: false
tags: ["Go", "http", "networking", "tcp"]
og_image: "images/go_1_27_http1_connection_reuse/go_1_27_http1_connection_reuse_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkdvIDEuMjcgRHJhaW5zIEhUVFAvMSBSZXNwb25zZSBCb2RpZXMgU28gQ29ubmVjdGlvbnMgR2V0IFJldXNlZCIsCiAgImRlc2NyaXB0aW9uIjogIkJlZm9yZSBHbyAxLjI3LCBjbG9zaW5nIGFuIHVucmVhZCBIVFRQLzEgcmVzcG9uc2UgYm9keSB0aHJldyB0aGUgVENQIGNvbm5lY3Rpb24gYXdheS4gR28gMS4yNyBkcmFpbnMgdXAgdG8gMjU2IEtCIG9yIDUwIG1zIGZvciB5b3UuIEhlcmUgaXMgdGhlIG1lY2hhbmlzbSwgYSByZXBybyB3aXRoIHJlYWwgbnVtYmVycywgYW5kIHRoZSBjYXZlYXRzLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9nb18xXzI3X2h0dHAxX2Nvbm5lY3Rpb25fcmV1c2UvZ29fMV8yN19odHRwMV9jb25uZWN0aW9uX3JldXNlX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMTVUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0xNVQxMDowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL2dvXzFfMjdfaHR0cDFfY29ubmVjdGlvbl9yZXVzZS8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkdvIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJHbyAxLjI3LCBuZXQvaHR0cCwgSFRUUC8xIGNvbm5lY3Rpb24gcmV1c2UsIGtlZXAtYWxpdmUsIHJlc3BvbnNlIGJvZHkgZHJhaW4sIGh0dHAuVHJhbnNwb3J0IiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkhUVFAvMSBrZWVwLWFsaXZlIiwgImRlc2NyaXB0aW9uIjogIlJldXNpbmcgb25lIFRDUCBjb25uZWN0aW9uIGZvciBzZXZlcmFsIEhUVFAvMSByZXF1ZXN0cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlJlc3BvbnNlIGJvZHkgZHJhaW5pbmciLCAiZGVzY3JpcHRpb24iOiAiUmVhZGluZyB0aGUgcmVzdCBvZiBhIHJlc3BvbnNlIHNvIHRoZSBuZXh0IHJlc3BvbnNlIG9uIHRoZSBzdHJlYW0gY2FuIGJlIGZvdW5kLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAibmV0L2h0dHAgVHJhbnNwb3J0IiwgImRlc2NyaXB0aW9uIjogIlRoZSBHbyBIVFRQIGNsaWVudCBjb21wb25lbnQgdGhhdCBwb29scyBjb25uZWN0aW9ucy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlRMUyBoYW5kc2hha2UgY29zdCIsICJkZXNjcmlwdGlvbiI6ICJSb3VuZCB0cmlwcyBzcGVudCBiZWZvcmUgdGhlIGZpcnN0IHJlcXVlc3QgYnl0ZSBpcyBzZW50LiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "go_1_27_http1_connection_reuse/go_1_27_http1_connection_reuse_banner.webp" "Go 1.27 reuses HTTP/1 connections: 100 requests open 100 TCP connections on Go 1.26.9 and 3 on Go 1.27.2" >}}

This program makes 100 requests and never reads a response body:

```go
resp, err := http.Get("http://127.0.0.1:8080/")
if err != nil { panic(err) }
_ = resp.StatusCode
resp.Body.Close() // status only, body unread
```

On Go 1.26.9 it opens 100 TCP connections to the server. On Go 1.27.2 it opens 3. Same code, same server. The difference is that `net/http` now drains the unread part of an HTTP/1 body (up to 256 KB or 50 ms) before giving up on the connection, so the next request can reuse it.

{{% tldr %}}
1. **Closing an unread HTTP/1 body used to kill the connection.** Through Go 1.26, `net/http` dropped it, and the next request paid for a fresh TCP (and TLS) handshake.
2. **Go 1.27 drains in the background**, for up to **50 ms or 256 KB**, then returns the connection to the idle pool. Skipped when the response says `Connection: close`.
3. **In my local repro, 100 requests used 3 connections instead of 100** (61 ms down to 16 ms on loopback). Over a real network the saving is larger, because handshakes cost round trips.
4. **You can delete your `io.Copy(io.Discard, body)` wrappers**, and just close the body. HTTP/2 never had this problem.
5. **Watch for idle connection growth** if you run with `MaxIdleConns` set to 0 or with many `http.Client` values.
{{% /tldr %}}

## Why an unread body blocks the connection

HTTP/1.1 sends responses back-to-back on one byte stream. The client finds where response N+1 starts only by reading response N to its end, as defined by `Content-Length` or chunked encoding. `http.Get` returns as soon as the status line and headers are parsed. If you close the body at that point, the rest of it is still on the wire, and the connection is in an unknown state. Through Go 1.26, `net/http` handled that by closing the connection.

HTTP/2 avoids this because it multiplexes frames: an unread body on one stream doesn't stand in the way of the others. That's why this only matters for HTTP/1.

{{< image "go_1_27_http1_connection_reuse/http1_body_drain_before_after.webp" "Two panels comparing Go 1.26, where closing an unread HTTP/1 body closes the connection, with Go 1.27, where the body is drained and the connection reused" >}}

*Closing the body is the same call in both versions. What the transport does next is what changed.*

## What a new connection costs

The {{< link href="https://go.dev/blog/http-connection-reuse" >}}Go team's write-up{{< /link >}} (14 October 2026) counts it like this: one round trip for the TCP handshake, two for a TLS 1.2 handshake, then the request. About 3 RTT pass before the first byte of the request goes out. TLS 1.3 trims that to roughly 2.

Their benchmark was 100 status-only calls to `index.golang.org` with `GODEBUG=http2client=0` (forcing HTTP/1): about 710 ms on Go 1.26, about 150 ms on Go 1.27. That's one machine and one endpoint, so treat it as an order of magnitude, not a promise.

## Two places it bit people

- **Status-only callers.** An API that returns a small JSON body on every call, where you only look at `resp.StatusCode`. Every call looked like a cold start.
- **Almost-complete reads.** `json.Decoder` stops at the closing brace. If the server sends a trailing newline, that one byte is unread, and the connection can't be reused until it's consumed.

The usual fix was a hand-written drain. The Go post walks through how it grows: `io.Copy(io.Discard, body)` first, then a byte cap with `io.CopyN(io.Discard, body, 256<<10)`, then a 50 ms timer in a goroutine so a slow server can't stall you, then moving the whole thing into the background so the caller doesn't wait at all. Each step fixes a problem the previous one introduced, and it's easy to get wrong. Draining an HTTP/2 body, for example, is wasted work.

Go 1.27 moves that last version into `net/http.Transport`.

## Repro: 100 requests, 100 connections versus 3

I wanted the connection count, not just a timing, so the server counts `StateNew` events. The full program is short:

```go
package main

import (
	"fmt"
	"net"
	"net/http"
	"sync/atomic"
	"time"
)

func main() {
	var conns int64
	body := make([]byte, 64<<10) // 64 KB response
	srv := &http.Server{
		Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write(body)
		}),
		ConnState: func(c net.Conn, s http.ConnState) {
			if s == http.StateNew {
				atomic.AddInt64(&conns, 1)
			}
		},
	}
	ln, _ := net.Listen("tcp", "127.0.0.1:8080")
	go srv.Serve(ln)

	start := time.Now()
	for i := 0; i < 100; i++ {
		resp, err := http.Get("http://127.0.0.1:8080/")
		if err != nil {
			panic(err)
		}
		_ = resp.StatusCode
		resp.Body.Close() // status only, body unread
	}
	fmt.Printf("100 requests, %d TCP connections, %v\n",
		atomic.LoadInt64(&conns), time.Since(start).Round(time.Millisecond))
}
```

I ran it with each toolchain downloaded from go.dev (`GOTOOLCHAIN=local`):

```text
go1.26.9
100 requests, 100 TCP connections, 61ms
go1.27.2
100 requests, 3 TCP connections, 16ms
```

Two caveats. This is loopback, so there is no RTT to save, and the 45 ms gap is just connection setup and teardown. And the 3 (not 1) is my reading of the design, not something I verified in the source: the drain runs asynchronously, so if request N+1 starts before the drain of request N finishes, the transport opens another connection. The Go post says the same thing about whether the next request reuses the connection.

## What to change in your code

Close the body and move on. If you have this pattern, you can drop it on Go 1.27:

```go
io.Copy(io.Discard, resp.Body)
resp.Body.Close()
```

Keep reading the body to the end when you actually want the data, and keep the drain if you still support older toolchains. The limits (50 ms, 256 KB) are the Go team's current values and the post says they may change.

The {{< link href="https://tip.golang.org/doc/go1.27" >}}Go 1.27 release notes{{< /link >}} add one warning: programs that keep too many idle connections may slow down, usually because `Transport.MaxIdleConns` is 0 (no limit) or because the program creates many `http.Client` values, each with its own pool. Set a limit, share one client, or set `Transport.DisableKeepAlives` to `true` to turn reuse off.

## Check it on your own service

1. Add a `ConnState` hook like the one above to a test server, or run `ss -tn state established '( dport = :8080 )' | wc -l` while your client loops.
2. Run the same client under Go 1.26 and Go 1.27 (`go install golang.org/dl/go1.27.2@latest && go1.27.2 download`).
3. For HTTP/1 against a real HTTPS API, set `GODEBUG=http2client=0` so you are testing the path this change affects.

If the connection count drops and you didn't touch your code, the change is working for you.

{{< image "go_1_27_http1_connection_reuse/go_connections_per_100_requests.webp" "Bar chart: 100 status-only requests opened 100 TCP connections on Go 1.26.9 and 3 on Go 1.27.2" >}}

*Data: author measurement on loopback, October 2026. Over a real network the time saved is larger.*
