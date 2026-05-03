---
title: "Multiple Forwardings"
description: "Route multiple listen addresses and tunnel types through one Pinggy connection."
date: 2026-04-30T00:00:00+05:30
draft: false
og_image: "/doc_img/multiple_forwardings.png"
---

# Multiple Forwardings

Pinggy can map more than one forwarding to the same tunnel. That means one session can route different hostnames to different local services, and the forwarding entries can mix tunnel types such as HTTP, TCP, UDP, TLS, and TLSTCP.

<img src="/doc_img/multiple_forwardings.svg" alt="Multiple forwardings routing different tunnel types to different local services" style="maxWidth: 4000px; width: 100%" />

## Example

Suppose you have a wildcard domain `*.example.com` with persistent TCP port `34567` configured with a token `TOKEN`. Now you want one tunnel to route:

- HTTP(S): `app.example.com` to `localhost:3000`
- HTTP(S): `backend.example.com` to `localhost:8080`
- TCP: `ssh.example.com:34567` to `localhost:22`
- everything else to `localhost:80`

The same idea in SSH syntax looks like this:

```bash
ssh -p 443 \
    -R http//app.example.com:1:localhost:3000 \
    -R http//backend.example.com:1:localhost:8080 \
    -R tcp//ssh.example.com/34567:1:localhost:22 \
    -R 1:localhost:80 \
    TOKEN@pro.pinggy.io
```

The first forwarding is the default route. The named entries take priority when their listen address matches.

The domain can be configured from {{< link href="https://dashboard.pinggy.io/domains" >}}https://dashboard.pinggy.io/domains{{< /link >}}.

## Why this helps

Multiple forwardings are useful when you want one tunnel to handle a few related services at once:

- one machine running multiple apps
- a wildcard domain that points to several local ports
- a mix of HTTP, TCP, UDP, TLS, and TLSTCP routes in one configuration
- a default forwarding that catches everything not matched by a more specific rule

If you are routing by subdomain, set up a wildcard custom domain first. The [custom domain guide](/docs/custom_domain/) walks through that setup.

## Listen address format

The listen address follows this pattern:

```text
[schema//]hostname[/port][@name]
```


| Example | Meaning |
|---------|---------|
| `example.com` | Assumes HTTP forwarding |
| `tls//example.com` | Uses TLS forwarding and ignores the port |
| `tcp//abc.example.com/15678` | TCP forwarding, hostname is ignored |
| `tcp//anything/15678` | TCP forwarding, hostname is ignored |
| `tlstcp//abc.example.com/15421` | TLSTCP forwarding, port is ignored |

When you use a custom domain, the hostname portion lets Pinggy route traffic to the right local service. The optional schema controls which tunnel type should handle that forwarding.

## SSH command example

The SSH form looks like this:

```text
ssh -R [listenAddress]:1:<forwardingAddress>:<forwardingPort>
```

Here is a practical example:

```bash
ssh -p 443 \
  -R one.example.com:1:one.local:8888 \
  -R tcp//two.example.com/14578:1:two.local:9999 \
  free.pinggy.io
```

In this example:

- `one.example.com:1:one.local:8888` forwards `one.example.com` to `one.local:8888`
- `tcp//two.example.com/14578:1:two.local:9999` forwards TCP traffic for `two.example.com` to `two.local:9999`
- adding another `-R` entry gives you another route in the same tunnel

## A few practical patterns

- Use a default forwarding as your fallback route, then add more specific entries for named hosts.
- Keep HTTP services, internal APIs, and TCP services together when that makes the workflow simpler.
- If you only need one route, a single forwarding still works as before. Multiple forwardings are just an extension of that same SSH pattern.
