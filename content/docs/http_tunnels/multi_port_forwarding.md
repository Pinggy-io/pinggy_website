---
title: "Multiple Forwardings"
description: "Route multiple listen addresses and tunnel types through one Pinggy connection."
date: 2026-04-30T00:00:00+05:30
draft: false
og_image: "/doc_img/multiple_forwardings.png"
---

# Multiple Forwardings

Pinggy can map more than one forwarding to the same tunnel. That means one session can route different hostnames to different local services, and the forwarding entries can mix tunnel types such as HTTP, TCP, UDP, TLS, and TLSTCP.

{{< figure src="/doc_img/multiple_forwardings.png" alt="Multiple forwardings routing different tunnel types to different local services" >}}

## Why this helps

Multiple forwardings are useful when you want one tunnel to handle a few related services at once:

- one machine running multiple apps
- a wildcard domain that points to several local ports
- a mix of HTTP, TCP, UDP, TLS, and TLSTCP routes in one configuration
- a default forwarding that catches everything not matched by a more specific rule

If you are routing by subdomain, set up a wildcard custom domain first. The [custom domain guide](/docs/custom_domain/) walks through that setup.

## Configuration model

In Pinggy's config model, `forwarding` can be a single string or a list of forwarding objects. For multiple forwardings, a list is usually the clearest choice.

```jsonc
{
  "version": "1.0",
  "name": "workspace services",
  "configId": "workspace-services",
  "serverAddress": "free.pinggy.io:443",
  "token": "tkn",
  "forwarding": [
    {
      "type": "http",
      "listenAddress": "",
      "address": "http://localhost:80"
    },
    {
      "type": "http",
      "listenAddress": "app.example.com",
      "address": "http://localhost:3000"
    },
    {
      "type": "tcp",
      "listenAddress": "ssh.example.com",
      "address": "localhost:22"
    },
    {
      "type": "udp",
      "listenAddress": "udp.example.com",
      "address": "localhost:9999"
    }
  ]
}
```

Each forwarding entry has three important fields:

- `type` chooses the tunnel type. Supported values are `http`, `tcp`, `tls`, `udp`, and `tlstcp`.
- `listenAddress` is the public route. Leave it empty for the default forwarding.
- `address` is the local target in `[protocol://]host:port` form. If the protocol is `https`, Pinggy treats the local server as TLS-backed.

## Listen address format

The listen address follows this pattern:

```text
[schema//]hostname[/port][@name]
```

Examples:

| Example | Meaning |
|---------|---------|
| `example.com` | Assumes HTTP forwarding |
| `tls//example.com` | Uses TLS forwarding and ignores the port |
| `tcp//abc/15678` | TCP forwarding, hostname is ignored |
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
- Use the config model when you want the same routing setup in the dashboard, CLI, or SDKs.
- If you only need one route, a single forwarding still works as before. Multiple forwardings are just an extension of that same model.
