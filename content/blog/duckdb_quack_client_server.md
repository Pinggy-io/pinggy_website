---
title: "DuckDB Adds a Client-Server Protocol, Skip the VPS to Share It"
description: "DuckDB's new Quack protocol lets one instance serve as a database server for others. Here's how it works, and how to expose it from your laptop with one Pinggy command instead of nginx and Let's Encrypt."
date: 2026-08-18T10:30:00+05:30
draft: false
tags: ["DuckDB", "database", "SQL", "developer tools", "Pinggy"]
og_image: "images/duckdb_quack_client_server/duckdb_quack_client_server_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiRXhwb3NlIGEgRHVja0RCIFF1YWNrIFNlcnZlciBXaXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXBzIHRvIHJ1biBEdWNrREIncyBuZXcgUXVhY2sgY2xpZW50LXNlcnZlciBwcm90b2NvbCBsb2NhbGx5IGFuZCBzaGFyZSBpdCBvdmVyIHRoZSBpbnRlcm5ldCB3aXRoIGEgUGluZ2d5IHR1bm5lbCBpbnN0ZWFkIG9mIHNldHRpbmcgdXAgbmdpbnggYW5kIExldCdzIEVuY3J5cHQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2R1Y2tkYl9xdWFja19jbGllbnRfc2VydmVyL2R1Y2tkYl9xdWFja19jbGllbnRfc2VydmVyX2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IGEgUXVhY2sgc2VydmVyIGluIER1Y2tEQiIsCiAgICAgICJ0ZXh0IjogIlJ1biBDQUxMIHF1YWNrX3NlcnZlKCdxdWFjazpsb2NhbGhvc3QnLCB0b2tlbiA9ICd5b3VyX3Rva2VuJykgaW4gdGhlIER1Y2tEQiBDTEkgdG8gc3RhcnQgbGlzdGVuaW5nIG9uIHBvcnQgOTQ5NC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiBhIFBpbmdneSB0dW5uZWwgdG8gcG9ydCA5NDk0IiwKICAgICAgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo5NDk0IGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgdGhhdCBmb3J3YXJkcyB0byB0aGUgbG9jYWwgUXVhY2sgc2VydmVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBdHRhY2ggdG8gdGhlIHR1bm5lbCBmcm9tIGEgcmVtb3RlIER1Y2tEQiBjbGllbnQiLAogICAgICAidGV4dCI6ICJPbiBhbm90aGVyIG1hY2hpbmUsIGNyZWF0ZSBhIHF1YWNrIHNlY3JldCB3aXRoIHRoZSBzYW1lIHRva2VuLCB0aGVuIHJ1biBBVFRBQ0ggJ3F1YWNrOjx5b3VyLXBpbmdneS11cmw+JyBBUyByZW1vdGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlF1ZXJ5IHRoZSBzaGFyZWQgZGF0YWJhc2UiLAogICAgICAidGV4dCI6ICJSdW4gU1FMIGFnYWluc3QgdGhlIGF0dGFjaGVkIHJlbW90ZSBkYXRhYmFzZSBleGFjdGx5IGFzIHlvdSB3b3VsZCBsb2NhbGx5LCBvdmVyIHRoZSBwdWJsaWMgdHVubmVsLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "duckdb_quack_client_server/duckdb_quack_client_server_banner.webp" "Diagram of a DuckDB Quack server on one laptop connected through a Pinggy tunnel to a DuckDB client on another machine" >}}

{{< llm-context >}}To expose a local DuckDB Quack server with Pinggy, run `CALL quack_serve('quack:localhost', token = 'your_token');` in DuckDB (listens on port 9494 by default), then in a new terminal run `ssh -p 443 -R0:localhost:9494 free.pinggy.io` to get a public HTTPS URL, and attach to it from another machine with `ATTACH 'quack:<your-pinggy-url>' AS remote (TOKEN 'your_token');`.{{< /llm-context >}}

{{% tldr %}}
1. <a href="https://duckdb.org/quack/" target="_blank">Quack</a> is DuckDB's new client-server protocol: any DuckDB process can serve a database over the network, and another DuckDB process attaches to it with `ATTACH`, no separate server software involved.
2. Start it with `CALL quack_serve('quack:localhost', token = 'your_token');`, it listens on port `9494`.
3. DuckDB's own docs say not to expose that port to the internet directly, run a reverse proxy like nginx or Caddy in front of it to terminate TLS.
4. Skip that setup with a Pinggy tunnel instead: `ssh -p 443 -R0:localhost:9494 free.pinggy.io` gives you a public HTTPS URL backed by a real certificate in one command.
5. On the client, `ATTACH 'quack:<your-pinggy-url>' AS remote;` is the exact same syntax DuckDB's production docs use, no custom port or disabled SSL needed.
6. This is a good fit for pairing on a dataset, live demos, and debugging together, not for anything you'd call production. Quack is still experimental and auth is a single shared token.
{{% /tldr %}}

DuckDB has always been an embedded database. You import it into a process, point it at a file, and it runs in-process, fast, no server, no client library juggling network round trips. The tradeoff has always been the flip side of that design: only one writer can hold the file at a time, and there has never been a supported way for a second machine to just connect to your running instance and run a query.

That changes with {{< link href="https://duckdb.org/quack/" >}}Quack{{< /link >}}, a client-server protocol that shipped in beta with DuckDB 1.5.3 and is heading toward a stable release as part of {{< link href="https://duckdb.org/2026/08/17/duckdb-20-highlights" >}}DuckDB v2.0{{< /link >}} this fall. Any DuckDB process can now call one function and start listening for other DuckDB processes to connect to it, over the network, using `CONNECT` and `ATTACH` the same way you'd attach a local file.

The interesting part for anyone who has ever wanted to hand a colleague live query access to whatever is running on their laptop, without spinning up a box, is what the DuckDB docs recommend for actually reaching that server from outside `localhost`: put a reverse proxy in front of it and terminate TLS yourself. That's exactly the kind of five-minute-turned-forty-five-minute task a tunnel is built to remove. More on that below, after a look at what Quack actually does.

## What Quack is

Quack turns two DuckDB processes on a network into a client and a server. On the machine that has the data:

```sql
CALL quack_serve('quack:localhost', token = 'super_secret');
CREATE TABLE hello AS FROM VALUES ('world') v(s);
```

That starts a server listening on port `9494` (the DuckDB team's joke is that "94" nods to Netscape Navigator's 1994 release). From a second DuckDB instance, anywhere on the network:

```sql
CREATE SECRET (TYPE quack, TOKEN 'super_secret');
ATTACH 'quack:localhost' AS remote;
FROM remote.hello;
```

The remote database shows up like any other attached DuckDB file: you can query it, join it against a local table, or `CREATE TABLE ... AS FROM remote.query('...')` to pull a computed result back. The protocol rides on HTTP rather than a custom binary format, which the DuckDB team picked specifically so it plays nicely with existing load balancers and firewalls, but the payload itself is DuckDB's own internal serialization, not Arrow Flight SQL. Skipping the Arrow conversion is most of where the speed comes from.

And it is fast. DuckDB's own numbers, measured on a pair of AWS `m8g.2xlarge` instances:

{{< image "duckdb_quack_client_server/duckdb_quack_benchmark.webp" "Bar chart comparing time to transfer 60 million rows: Quack at 4.94 seconds, Arrow Flight SQL at roughly 17.3 seconds, and PostgreSQL's wire protocol at roughly 158 seconds" >}}

Moving a 60 million row result set takes 4.94 seconds over Quack, about 3.5x faster than Arrow Flight SQL and roughly 32x faster than doing the same transfer over PostgreSQL's wire protocol. On the write side, an 8-thread benchmark hit 5,434 transactions per second, about 4x Arrow Flight and 1.26x Postgres. None of this makes DuckDB a distributed query engine (there's no query planning across nodes yet), but for "let another process read or write the same database I'm running," it's a genuinely new capability, not just a faster driver.

Authentication is a shared token: the server generates a random one at startup unless you set your own, and the client supplies it through `CREATE SECRET`. There's also an authorization callback you can override with a SQL macro to restrict what queries a given connection is allowed to run, useful for a read-only mode.

## The part that involves a reverse proxy

Here's the catch, and it's a deliberate one. Quack's server does not speak TLS. From the {{< link href="https://duckdb.org/docs/current/quack/security.html" >}}security docs{{< /link >}}: "the server does not use TLS itself," and DuckDB is explicit that you should "not expose Quack directly to the internet." The documented path is to bind the server to `localhost`, then put a real HTTP reverse proxy in front of it that terminates TLS and forwards plain HTTP to port `9494`. Their own {{< link href="https://duckdb.org/docs/current/quack/setup/reverse_proxy.html" >}}example nginx config{{< /link >}} looks like this:

```nginx
server {
    listen 443 ssl http2;
    server_name quack.example.com;
    ssl_certificate /etc/letsencrypt/live/quack.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/quack.example.com/privkey.pem;
    client_max_body_size 256M;
    proxy_read_timeout 600s;
    proxy_send_timeout 600s;
    location / {
        proxy_pass http://127.0.0.1:9494;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_buffering off;
    }
}
```

That's a domain, a DNS record, a Let's Encrypt certificate, and an nginx (or Caddy) install, just to let a teammate on another network run one query against a database that's sitting on your laptop right now. It's the right call for a server you're going to leave running, and completely reasonable advice from a database project that isn't in the business of hosting tunnels. But it's a lot of infrastructure for the much more common case: you want someone else to see the data for the next twenty minutes.

## The one-command version

This is precisely the gap {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} is built for: an HTTPS endpoint with a real certificate, in front of a port on your machine, without touching DNS or a proxy config. Start the Quack server as before:

```sql
CALL quack_serve('quack:localhost', token = 'super_secret');
```

Then open a tunnel to port `9494`:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:9494 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:9494 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:9494 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:9494 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:9494 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:9494 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9494 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:9494 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9494 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That prints a public HTTPS URL like `https://abc123.a.pinggy.link`, backed by a real TLS certificate at Pinggy's edge, forwarding straight to `localhost:9494`. It's functionally the same job as the nginx block above, minus the domain, the cert renewal, and the config file.

On the other machine, the `ATTACH` line is the exact same production syntax from DuckDB's own docs, because a hostname without an explicit port makes the client assume HTTPS on 443, which is exactly what's on the other end of the tunnel:

```sql
CREATE SECRET (TYPE quack, TOKEN 'super_secret');
ATTACH 'quack:abc123.a.pinggy.link' AS remote;

FROM remote.query('SELECT count(*) FROM sales_2026');
```

No `DISABLE_SSL` flag, no custom port in the connection string, no certificate to install on the client. It behaves like a hosted database because, for the length of the tunnel, it is one.

If you want to narrow who can reach it beyond the token, Pinggy supports IP whitelisting on the same command, which works at the tunnel level regardless of what protocol is running underneath:

```bash
ssh -p 443 -R0:localhost:9494 -t free.pinggy.io w:203.0.113.4
```

Only connections from that address get through to the tunnel at all, before Quack's own auth even runs.

## Where this is actually useful

The honest framing here is closer to sharing your screen than deploying a service. A few situations where it's a clean fit:

- **Pairing on a dataset.** You've got a DuckDB file with the day's numbers loaded and indexed. Instead of shipping a 4GB file over Slack, a teammate attaches to your running instance and runs their own queries against it.
- **Demoing a pipeline.** You built something that lands data in DuckDB locally and want a stakeholder to poke at the results themselves, live, without waiting for a deploy.
- **Debugging together.** Two people staring at the same slow query plan is a lot easier when both can run `EXPLAIN ANALYZE` against the same live state instead of relaying screenshots.

What it is not a good fit for, at least yet, is anything you'd call production. Quack is explicitly experimental as of DuckDB 1.5.x, the protocol and function names are still subject to change before v2.0 ships, and token-based auth with a permissive-by-default authorization callback is a single shared secret, not a real access control system. Treat a Quack-over-Pinggy setup the way you'd treat any other temporary tunnel: convenient for the length of a session, not something you leave running unattended pointed at a database you care about. Close the tunnel when you're done, and rotate the token before you open the next one.

## The rest of DuckDB 2.0

Quack is the feature that changes what DuckDB can be used for, but it's shipping alongside a fairly large release. The {{< link href="https://duckdb.org/2026/08/17/duckdb-20-highlights" >}}preview post{{< /link >}} (DuckDB is calling this release "Cyanoptera," after the cinnamon teal duck) also covers a new PEG-based SQL parser replacing the old Postgres-derived one, full trigger support with `BEFORE`/`AFTER` and transition tables, first-class treatment for the `VARIANT` semi-structured type, and a storage format v2.0 with lazy column metadata loading and `DICT_FSST` compression by default. A recursive CTE benchmark in the post shows a roughly 40x speedup on single-source reachability queries over a million edges, down from 4.90 seconds to 0.12 seconds against DuckDB 1.5.4.

Any one of those would be a reasonable headline feature on its own. Quack stands out because it's the one that changes what kind of tool DuckDB is, from a fast file format you query in-process to something you can point a teammate at over the network, at least for as long as you leave the tunnel open.
