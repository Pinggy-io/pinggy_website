---
title: "Remote Access to Home Assistant and Self-Hosted Smart Home Apps Behind CGNAT"
description: "Your ISP put you behind Carrier-Grade NAT, so port forwarding is dead. Here is how to reach Home Assistant, Frigate, Zigbee2MQTT, ESPHome and Node-RED from outside the house using an outbound tunnel, including the trusted_proxies settings that Home Assistant needs before it will answer."
date: 2026-09-03T11:30:00+05:30
draft: false
og_image: "images/remote_access_smart_home_apps_behind_cgnat/remote_access_smart_home_apps_behind_cgnat_banner.webp"
tags: ["smart home", "CGNAT", "networking", "remote access", "self-hosted"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEFjY2VzcyBTZWxmLUhvc3RlZCBTbWFydCBIb21lIEFwcHMgQmVoaW5kIENHTkFUIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHJlYWNoaW5nIEhvbWUgQXNzaXN0YW50LCBGcmlnYXRlLCBaaWdiZWUyTVFUVCwgRVNQSG9tZSBhbmQgb3RoZXIgc2VsZi1ob3N0ZWQgc21hcnQgaG9tZSBhcHBzIGZyb20gb3V0c2lkZSB0aGUgaG91c2Ugd2hlbiB5b3VyIElTUCBwdXRzIHlvdSBiZWhpbmQgQ2Fycmllci1HcmFkZSBOQVQsIHVzaW5nIGFuIG91dGJvdW5kIFBpbmdneSB0dW5uZWwgaW5zdGVhZCBvZiBwb3J0IGZvcndhcmRpbmcuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3JlbW90ZV9hY2Nlc3Nfc21hcnRfaG9tZV9hcHBzX2JlaGluZF9jZ25hdC9yZW1vdGVfYWNjZXNzX3NtYXJ0X2hvbWVfYXBwc19iZWhpbmRfY2duYXRfYmFubmVyLndlYnAiLAogICJ0b3RhbFRpbWUiOiAiUFQyME0iLAogICJlc3RpbWF0ZWRDb3N0IjogewogICAgIkB0eXBlIjogIk1vbmV0YXJ5QW1vdW50IiwKICAgICJjdXJyZW5jeSI6ICJVU0QiLAogICAgInZhbHVlIjogIjAiCiAgfSwKICAidG9vbCI6IHsKICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25maXJtIENHTkFUIGlzIGFjdHVhbGx5IHRoZSBwcm9ibGVtIiwKICAgICAgInRleHQiOiAiQ29tcGFyZSB5b3VyIHJvdXRlcidzIFdBTiBJUHY0IGFkZHJlc3Mgd2l0aCB0aGUgYWRkcmVzcyB0aGUgaW50ZXJuZXQgc2VlcyBhdCBpcHY0LmljYW5oYXppcC5jb20uIElmIHRoZXkgZGlmZmVyLCBvciBpZiB0aGUgV0FOIGFkZHJlc3MgZmFsbHMgaW5zaWRlIDEwMC42NC4wLjAvMTAgKHRoZSBSRkMgNjU5OCBzaGFyZWQgYWRkcmVzcyBzcGFjZSksIHlvdXIgSVNQIGlzIHRyYW5zbGF0aW5nIHlvdSBhbmQgcG9ydCBmb3J3YXJkaW5nIGNhbm5vdCB3b3JrIG5vIG1hdHRlciBob3cgdGhlIHJvdXRlciBpcyBjb25maWd1cmVkLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJGaW5kIHRoZSBwb3J0IHlvdXIgc21hcnQgaG9tZSBhcHAgbGlzdGVucyBvbiIsCiAgICAgICJ0ZXh0IjogIkhvbWUgQXNzaXN0YW50IHNlcnZlcyBpdHMgVUkgYW5kIEFQSSBvbiBwb3J0IDgxMjMgKEhvbWUgQXNzaXN0YW50IE9TIGluc3RhbGxzIGNyZWF0ZWQgb24gMjAyNi44IG9yIGxhdGVyIGRlZmF1bHQgdG8gcG9ydCA4MCBpbnN0ZWFkKS4gSG9tZWJyaWRnZSBVSSBpcyA4NTgxLCBvcGVuSEFCIGlzIDgwODAsIFppZ2JlZTJNUVRUJ3MgZnJvbnRlbmQgaXMgODA4MCwgRVNQSG9tZSdzIGRhc2hib2FyZCBpcyA2MDUyLCBOb2RlLVJFRCBpcyAxODgwLCBaLVdhdmUgSlMgVUkgaXMgODA5MSBhbmQgRnJpZ2F0ZSdzIGF1dGhlbnRpY2F0ZWQgVUkgaXMgODk3MS4gVmVyaWZ5IHdpdGggY3VybCAtSSBodHRwOi8vbG9jYWxob3N0OjgxMjMgYmVmb3JlIHR1bm5lbGxpbmcgYW55dGhpbmcuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IGFuIG91dGJvdW5kIHR1bm5lbCBmcm9tIGluc2lkZSB0aGUgbmV0d29yayIsCiAgICAgICJ0ZXh0IjogIk9uIHRoZSBtYWNoaW5lIHJ1bm5pbmcgdGhlIGFwcCwgcnVuIHNzaCAtcCA0NDMgLVIwOjEyNy4wLjAuMTo4MTIzIGZyZWUucGluZ2d5LmlvLiBUaGUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZCBvdXRib3VuZCwgc28gQ0dOQVQgbmV2ZXIgc2VlcyBhbiBpbmJvdW5kIGNvbm5lY3Rpb24gdG8gYmxvY2suIFBpbmdneSByZXR1cm5zIGEgcHVibGljIEhUVFBTIFVSTCB3aXRoIGEgdmFsaWQgY2VydGlmaWNhdGUuIFVzZSAxMjcuMC4wLjEgcmF0aGVyIHRoYW4gbG9jYWxob3N0IHNvIHRoZSBmb3J3YXJkIHJlc29sdmVzIHRvIElQdjQgaW5zdGVhZCBvZiA6OjEuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlRlbGwgSG9tZSBBc3Npc3RhbnQgdG8gdHJ1c3QgdGhlIHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIlBpbmdneSBwcm94aWVzIEhUVFAgdHVubmVscyBhbmQgaW5qZWN0cyBYLUZvcndhcmRlZC1Gb3IsIFgtRm9yd2FyZGVkLVByb3RvLCBYLUZvcndhcmRlZC1Ib3N0IGFuZCBGb3J3YXJkZWQgaGVhZGVycy4gSG9tZSBBc3Npc3RhbnQgYW5zd2VycyA0MDAgQmFkIFJlcXVlc3QgYW5kIGxvZ3MgJ0EgcmVxdWVzdCBmcm9tIGEgcmV2ZXJzZSBwcm94eSB3YXMgcmVjZWl2ZWQgZnJvbSAxMjcuMC4wLjEsIGJ1dCB5b3VyIEhUVFAgaW50ZWdyYXRpb24gaXMgbm90IHNldC11cCBmb3IgcmV2ZXJzZSBwcm94aWVzJyB1bnRpbCB5b3UgdHVybiBvbiBUcnVzdCBYLUZvcndhcmRlZC1Gb3IgYW5kIGFkZCB0aGUgdHVubmVsIGhvc3QncyBhZGRyZXNzIHRvIFRydXN0ZWQgcHJveGllcyB1bmRlciBTZXR0aW5ncyA+IFN5c3RlbSA+IE5ldHdvcmsgPiBIVFRQIHNlcnZlci4gT24gaW5zdGFsbHMgb2xkZXIgdGhhbiAyMDI2LjggdGhlIHNhbWUgc2V0dGluZ3MgbGl2ZSBpbiB0aGUgaHR0cDogYmxvY2sgb2YgY29uZmlndXJhdGlvbi55YW1sIGFzIHVzZV94X2ZvcndhcmRlZF9mb3IgYW5kIHRydXN0ZWRfcHJveGllcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiTG9jayB0aGUgdHVubmVsIGRvd24gYmVmb3JlIHlvdSBzaGFyZSB0aGUgVVJMIiwKICAgICAgInRleHQiOiAiQWRkIEhUVFAgYmFzaWMgYXV0aCBhdCB0aGUgdHVubmVsIGVkZ2Ugd2l0aCBzc2ggLXAgNDQzIC1SMDoxMjcuMC4wLjE6ODEyMyBmcmVlLnBpbmdneS5pbyBiOnlvdXJ1c2VyOnlvdXJwYXNzd29yZCwgb3IgcmVzdHJpY3QgdGhlIHR1bm5lbCB0byBrbm93biBuZXR3b3JrcyB3aXRoIHc6MjAzLjAuMTEzLjAvMjQuIEluc2lkZSB0aGUgYXBwLCBlbmFibGUgbXVsdGktZmFjdG9yIGF1dGhlbnRpY2F0aW9uIGFuZCBJUCBiYW5uaW5nIHNvIGZhaWxlZCBsb2dpbnMgYXJlIGJsb2NrZWQgYXQgdGhlIHJlYWwgY2xpZW50IElQIHRoYXQgWC1Gb3J3YXJkZWQtRm9yIG5vdyBjYXJyaWVzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJLZWVwIHRoZSB0dW5uZWwgdXAgYWNyb3NzIHJlYm9vdHMiLAogICAgICAidGV4dCI6ICJGcmVlIHR1bm5lbHMgZXhwaXJlIGFmdGVyIDYwIG1pbnV0ZXMgYW5kIGhhbmQgb3V0IGEgbmV3IHJhbmRvbSBob3N0bmFtZSBlYWNoIHRpbWUuIEEgUGluZ2d5IFBybyB0b2tlbiBnaXZlcyB5b3UgYSBmaXhlZCBzdWJkb21haW4gYW5kIHJlbW92ZXMgdGhlIHRpbWUgbGltaXQ6IHNzaCAtcCA0NDMgLVIwOjEyNy4wLjAuMTo4MTIzIFlPVVJfVE9LRU5AcHJvLnBpbmdneS5pby4gUnVuIGl0IGZyb20gYSBzeXN0ZW1kIHVuaXQgd2l0aCBSZXN0YXJ0PWFsd2F5cywgb3IgdXNlIHRoZSBQaW5nZ3kgQ0xJLCB3aGljaCByZWNvbm5lY3RzIG9uIGl0cyBvd24uIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To reach a self-hosted smart home app behind CGNAT with Pinggy - on the machine running the app, run `ssh -p 443 -R0:127.0.0.1:8123 free.pinggy.io` (8123 is Home Assistant; use 8581 for Homebridge, 6052 for ESPHome, 1880 for Node-RED, 8971 for Frigate) to get a public HTTPS URL. In Home Assistant, also turn on Trust X-Forwarded-For and add `127.0.0.1` to Trusted proxies under Settings > System > Network > HTTP server, or it answers 400 Bad Request.{{< /llm-context >}}

{{< image "remote_access_smart_home_apps_behind_cgnat/remote_access_smart_home_apps_behind_cgnat_banner.webp" "Remote access to self-hosted smart home apps behind CGNAT" >}}

A self-hosted smart home is only as useful as your ability to reach it, and nearly every setup guide assumes your house has an address on the internet. That assumption stopped being safe years ago: if your router's WAN address sits inside `100.64.0.0/10`, you are sharing one public IPv4 address with hundreds of subscribers, and the port-forwarding rule you just saved will never receive a packet.

Home Assistant's own documentation calls Carrier-Grade NAT "becoming fairly common" and notes ISPs often charge extra for a dedicated IPv4. The fix is to stop waiting for inbound connections; every command below was run against a live tunnel.

{{% tldr %}}

**The problem:** behind CGNAT your router's WAN address is in `100.64.0.0/10` (<a href="https://datatracker.ietf.org/doc/html/rfc6598" target="_blank">RFC 6598</a> shared space), so port forwarding, dynamic DNS and UPnP all fail.

**Check it:** `curl -4 -s https://ipv4.icanhazip.com` - if that differs from your router's WAN IP, or starts `100.64` through `100.127`, you are behind CGNAT.

**The fix, from the machine running the app:**
```bash
ssh -p 443 -R0:127.0.0.1:8123 free.pinggy.io
```
`8123` is Home Assistant. Swap in `8581` (Homebridge), `8080` (openHAB, Zigbee2MQTT), `6052` (ESPHome), `1880` (Node-RED), `8091` (Z-Wave JS UI) or `8971` (Frigate).

**The step everyone misses:** Pinggy adds `X-Forwarded-For`, so Home Assistant returns **400 Bad Request** until you enable *Trust X-Forwarded-For* and add `127.0.0.1` to *Trusted proxies* under **Settings > System > Network > HTTP server**. As of <a href="https://www.home-assistant.io/integrations/http/" target="_blank">2026.8 that moved out of `configuration.yaml`</a>, and the YAML form dies in 2027.2.

**Add auth first:** append `b:youruser:yourpassword` to the command. Verified `401` without credentials, `200` with.

**Alternatives:** <a href="https://www.nabucasa.com/pricing/" target="_blank">Home Assistant Cloud</a> ($6.50/month) covers Home Assistant only; <a href="https://tailscale.com/pricing" target="_blank">Tailscale's free plan</a> needs a client on every viewer; Cloudflare Tunnel is free but <a href="https://blog.cloudflare.com/updated-tos" target="_blank">still restricts self-hosted video</a>, ruling out Frigate.

{{% /tldr %}}

## Why port forwarding cannot work

Standard NAT translates your LAN's private addresses to the public address on your router's WAN interface. You control that router, so you can punch a hole in it. Carrier-Grade NAT adds a second layer you do not control: your router's WAN address is itself private, drawn from the `100.64.0.0/10` block RFC 6598 reserved in 2012 for exactly this purpose, and your traffic is translated again at the carrier's NAT. We go deeper in {{< link href="/blog/how_nat_traversal_works/" >}}how NAT traversal works{{< /link >}}.

Each consequence looks like a different bug. **Port forwarding silently does nothing:** the rule saves, the status page says active, UPnP may even report success, but the ISP has no rule sending port 8123 to you. **Dynamic DNS resolves to an address that is not yours:** DuckDNS works fine, it just publishes the carrier's shared address. And while many CGNAT deployments hand out a real IPv6 prefix, the coffee-shop Wi-Fi you are reaching home from is often IPv4-only, so an AAAA-only setup fails exactly where you need it.

## Confirm the diagnosis

Note your router's WAN IPv4, then run:

```bash
curl -4 -s https://ipv4.icanhazip.com
```

If the two differ, something is translating you. If the router's WAN address is in `100.64.0.0/10` (second octet 64 to 127), that something is your ISP. A `traceroute -n -m 4 1.1.1.1` showing an RFC 6598 address in the first few hops is close to conclusive. If `curl -4` returns nothing you are on an IPv6-only or 464XLAT connection, which behaves identically for inbound IPv4.

If your ISP has a documented escape hatch, try it first: we have write-ups for {{< link href="/blog/tmobile_port_forwarding/" >}}T-Mobile Home Internet{{< /link >}} and {{< link href="/blog/virgin_media_port_forwarding/" >}}Virgin Media{{< /link >}}.

## Know which port you are exposing

Getting this wrong is how people publish an admin panel by accident.

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">App</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Port</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Auth built in?</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Notes</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Home Assistant</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>8123</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes, plus optional MFA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">2026.8+ Home Assistant OS installs default to <code>80</code></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Homebridge UI</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>8581</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
  <td style="border:1px solid #ddd;padding:0.5em;">HomeKit pairing is LAN-only, so it will not traverse a tunnel</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Zigbee2MQTT</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>8080</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">No, opt in via <code>auth_token</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">The token is cleartext; add edge auth too</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">ESPHome</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>6052</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">No, standalone</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Flashes firmware; treat as fully privileged</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Node-RED</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>1880</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">No by default</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Function nodes run arbitrary JS; set <code>adminAuth</code></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Frigate</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><code>8971</code></td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes on 8971, none on 5000</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Tunnel 8971 only; WebRTC needs 8555 TCP+UDP</td>
</tr>
</tbody>
</table>

Frigate's port 5000 deserves emphasis: roles are not enforced there, so every request is anonymous with admin-equivalent access. Tunnel 8971. Confirm what is listening with `curl -I http://localhost:8123` first; a `200`, `302` or `401` all mean something is answering.

## Reach it with an outbound tunnel

Your ISP blocks inbound connections but not outbound ones. If a machine inside your network opens a connection to a public relay and holds it open, traffic flows back down it both ways. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} does this over plain SSH, nothing to install:

```bash
ssh -p 443 -R0:127.0.0.1:8123 free.pinggy.io
```

```
Allocated port 7 for remote forward to 127.0.0.1:8123
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels.
https://rpuwm-44-227-128-71.free.pinggy.net
```

Open that URL from your phone on mobile data and Home Assistant's login page loads with a valid certificate, over a connection that cannot accept inbound traffic. No router change, no dynamic DNS, no certificate to renew. See {{< link href="/blog/ssh_reverse_tunnelling/" >}}SSH reverse tunnelling{{< /link >}} for the mechanism.

**Use `127.0.0.1`, not `localhost`.** On a dual-stack host `-R0:localhost:8123` resolves to `::1` first, so requests reach your app from IPv6 loopback instead. That matters next, because the address your app sees is the address you must trust. If you prefer `localhost`, trust both.

**An app on another machine** works too, since the forward destination is resolved by the SSH client: point it at a LAN address with `-R0:192.168.1.50:8123`. This is the practical answer for Home Assistant OS. Verified against a live tunnel, the app then sees the connection arriving from the tunnel host's LAN address, so that is what you trust rather than loopback.

## Make Home Assistant accept the tunnel

Open the URL and there is a good chance you get `400: Bad Request`, with this in the log:

```
A request from a reverse proxy was received from 127.0.0.1, but your HTTP integration is not set-up for reverse proxies
```

Nothing is broken; Home Assistant is refusing to guess. Pinggy acts as a reverse proxy for HTTP tunnels, adding forwarding headers (plus an RFC 7239 `Forwarded:` equivalent). Here is the request a local app actually receives, captured from a header-echo server behind a live tunnel:

```
--- peer: ('127.0.0.1', 63337)
Host: ymggt-44-227-128-71.free.pinggy.net
X-Forwarded-For: 44.227.128.71
X-Forwarded-Host: ymggt-44-227-128-71.free.pinggy.net
X-Forwarded-Proto: https
```

`X-Forwarded-For` carries the real visitor IP, which you want for logging and rate limiting, and `X-Forwarded-Proto: https` stops the app downgrading its redirects. But Home Assistant will not take a client IP from a proxy it has not been told to trust.

On 2026.8 and later, go to **Settings > System > Network > HTTP server**, turn on **Trust X-Forwarded-For**, and add the address from the log message to **Trusted proxies**. On older installs the same thing lives in `configuration.yaml`:

```yaml
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 127.0.0.1
    - ::1
```

If you upgraded, your old `http:` block was imported automatically and a repair issue raised asking you to delete it. Check the imported values first, and note that {{< link href="https://github.com/home-assistant/core/issues/178330" >}}issue #178330{{< /link >}} reported 2026.8.0 installs shown the deprecation warning while the Network UI was still missing those very fields. If yours does not show them, keep the YAML.

Do not widen the trust to `0.0.0.0/0` to silence the error: `trusted_proxies` lists who is allowed to tell Home Assistant the client's IP, so trusting everything lets any caller forge it, poisoning your logs and defeating IP banning. With a CIDR, the docs require the network address (`192.168.1.0/24`), not a host address.

Then set the **Internet** field to your tunnel URL, keeping **Local Network** on plain HTTP, since HTTPS there can break casting to media devices. A public HTTPS URL is also what unlocks integrations that must reach you from outside, like Withings and SmartThings.

**On WebSockets:** the frontend does almost everything over a single socket at `/api/websocket`, so if upgrades do not survive the tunnel you get a UI that loads then shows stale state. Verified through a live tunnel: the handshake returns `HTTP/1.1 101 Switching Protocols`, frames pass both ways, and `X-Forwarded-For` survives the upgrade, so the setting above covers it.

## Lock it down before you share the URL

The URL is unguessable, but that is not an access control: it leaks through history, referrers and screenshots. The cheapest real gate is basic auth applied by Pinggy before traffic reaches your network:

```bash
ssh -p 443 -R0:127.0.0.1:8123 free.pinggy.io b:homeassistant:s3cret
```

Verified: no credentials `401`, wrong credentials `401`, correct `200`. Rejected requests never touch your network. For scripts, `k:your-secret-key` expects an `Authorization: Bearer` header, and `w:203.0.113.0/24` restricts the tunnel to one network.

Edge auth is a wrapper, not a replacement. Inside Home Assistant, turn on multi-factor authentication and enable IP banning; bans land in `ip_bans.yaml`. This is why the `trusted_proxies` work pays off: without it every request looks like `127.0.0.1`, so IP banning would either lock out everyone or do nothing.

## The other apps

Only the port and caveats change. **Frigate** needs its authenticated port plus basic auth, and its WebRTC path wants UDP on 8555, which no HTTP tunnel carries; the UI falls back to MSE or HLS, a second or two behind live but fine for reviewing events. Keep it patched: CVE-2026-25643 was a remote command execution issue in the go2rtc stream config before 0.16.4. **Zigbee2MQTT** needs `auth_token` set *and* the basic auth. **ESPHome** and **Node-RED** ship without authentication and both amount to code execution on the host, so add an IP allowlist at minimum; our {{< link href="/blog/self_hosting_node_red/" >}}Node-RED guide{{< /link >}} covers them.

When what you need is not HTTP, prefix the hostname for a raw TCP tunnel:

```bash
ssh -p 443 -R0:127.0.0.1:22 tcp@free.pinggy.io
```

That returns a host and port rather than a URL, and it is byte-transparent. Verified: requests arrive with no forwarding headers and the original `Host` intact. That is a tradeoff: Home Assistant never throws the reverse-proxy 400 over TCP, but your app cannot see the real client IP either, so IP banning stops being meaningful. Use HTTP for web UIs and TCP for SSH or MQTT; see {{< link href="/blog/access_raspberry_pi_remotely_to_control_iot_devices/" >}}accessing a Raspberry Pi remotely{{< /link >}}.

## Keeping the tunnel up

A free tunnel expires after 60 minutes and hands out a new hostname each restart. A Pro token removes the limit and pins the subdomain, which matters because the companion app, `external_url` and any registered webhook break when it changes. The Pinggy CLI reconnects on its own:

```bash
npm install -g pinggy
pinggy http --token YOUR_TOKEN --subdomain myhome 8123
```

To stay on plain SSH, run it under systemd; `-N` holds the forward open without a shell:

```ini
[Unit]
Description=Pinggy tunnel for Home Assistant
After=network.target

[Service]
User=pinggy
ExecStart=/usr/bin/ssh -p 443 -N -o ServerAliveInterval=60 -o ExitOnForwardFailure=yes -o StrictHostKeyChecking=accept-new -R0:127.0.0.1:8123 YOUR_TOKEN@pro.pinggy.io
Restart=always
RestartSec=10s

[Install]
WantedBy=multi-user.target
```

Home Assistant OS has no general-purpose shell, so either use the **Advanced SSH & Web Terminal** add-on, whose `init_commands` option runs commands on start, or better, run the tunnel on a separate always-on LAN machine pointed at Home Assistant's LAN address. That keeps tunnel restarts independent of Home Assistant's, and one box can carry tunnels for several apps.

## How this compares

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Approach</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Behind CGNAT</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Cost</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">The catch</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Port forwarding</td>
  <td style="border:1px solid #ddd;padding:0.5em;">No</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Fails silently, and exposes the port to scanners</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Home Assistant Cloud</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$6.50/mo, $65/yr</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Home Assistant only, nothing else</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Tailscale / WireGuard</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free tier / VPS</td>
  <td style="border:1px solid #ddd;padding:0.5em;">A client on every viewer; no shareable link</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Cloudflare Tunnel</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Needs your own domain; no self-hosted video</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Pinggy tunnel</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Yes</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free tier, ~$2.50/mo</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Free tunnels expire hourly; you own the auth</td>
</tr>
</tbody>
</table>

Home Assistant Cloud is the right default if Home Assistant is all you need: one toggle, and it registers cloudhooks automatically. Tailscale folded Personal Plus into its free tier in April 2026 at up to 6 users and unlimited devices, and it gets you the whole LAN rather than one app - but it is the wrong tool for handing someone a link. The combination is often best: a mesh VPN for your own access, a tunnel for whatever needs a public URL. See {{< link href="/blog/top_open_source_tailscale_alternatives/" >}}Tailscale alternatives{{< /link >}} and {{< link href="/blog/how_to_set_up_port_forwarding_even_behind_cgnat/" >}}port forwarding behind CGNAT{{< /link >}}.

## What a tunnel does not fix

**UDP does not ride an HTTP tunnel**, so Frigate's WebRTC view falls back to MSE or HLS. **Local discovery stays local:** mDNS, HomeKit pairing and Matter commissioning are link-local by design, so commission devices at home and use the tunnel for the dashboard. **Every request round-trips through a relay**, so the local URL is always faster, which is why setting both URLs matters. **Camera streams are bandwidth**, and your home upload is the ceiling. **The tunnel is a dependency**, so keep a second path in. And **a URL is a credential** - rotate it if it leaks.

## Wrapping up

CGNAT is not a misconfiguration to be fixed, it is your ISP's architecture. What changes is the direction of the connection: once the machine inside your house is the one dialling out, the carrier NAT is not involved.

The mechanical part is one command. What is worth getting right is everything around it: `trusted_proxies` set to the address your app actually sees, `127.0.0.1` in the forward, edge auth in place before the URL exists, and a fixed subdomain under a service manager. The {{< link href="https://pinggy.io/docs/" >}}Pinggy documentation{{< /link >}} covers custom domains and the remaining tunnel types.
