---
title: "Tailcat: Tailscale's Netcat Without the Control Plane"
description: "Tailscale shipped Tailcat, a netcat-style tool that reuses its WireGuard data plane for point-to-point tunnels with no account, no tailnet, and no control plane. Here's how it works and how it compares to Pinggy."
date: 2026-08-28T12:00:00+05:30
lastmod: 2026-08-28T12:00:00+05:30
draft: false
tags: ["Tailscale", "WireGuard", "peer-to-peer", "tunneling", "networking"]
categories: ["Technology", "Networking", "Open Source"]
og_image: "images/tailcat_tailscale_netcat_no_control_plane/tailcat_tailscale_netcat_no_control_plane_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFRyeSBUYWlsY2F0IGZvciBhIFBvaW50LXRvLVBvaW50IEVuY3J5cHRlZCBUdW5uZWwiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW5zdGFsbGluZyBUYWlsY2F0IGFuZCBjb25uZWN0aW5nIHR3byBtYWNoaW5lcyBvdmVyIGFuIGVuY3J5cHRlZCBXaXJlR3VhcmQgdHVubmVsIHdpdGhvdXQgYSBUYWlsc2NhbGUgYWNjb3VudC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvdGFpbGNhdF90YWlsc2NhbGVfbmV0Y2F0X25vX2NvbnRyb2xfcGxhbmUvdGFpbGNhdF90YWlsc2NhbGVfbmV0Y2F0X25vX2NvbnRyb2xfcGxhbmVfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMDgtMjhUMTI6MDA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCB0YWlsY2F0IiwKICAgICAgInRleHQiOiAiUnVuIGdvIGluc3RhbGwgZ2l0aHViLmNvbS90YWlsc2NhbGUvdGFpbGNhdC9jbWQvdGFpbGNhdEBsYXRlc3QsIG9yIGluc3RhbGwgaXQgZnJvbSB0aGUgTml4IHBhY2thZ2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IGEgbGlzdGVuZXIgb24gdGhlIG1hY2hpbmUgeW91IHdhbnQgdG8gcmVhY2giLAogICAgICAidGV4dCI6ICJSdW4gdGFpbGNhdCB3aXRoIG5vIGFyZ3VtZW50cy4gSXQgcHJpbnRzIGEgc2hvcnQgdG9rZW4gc3RhcnRpbmcgd2l0aCB0YyB0aGF0IGVuY29kZXMgaXRzIFdpcmVHdWFyZCBwdWJsaWMga2V5IGFuZCBERVJQIHJlbGF5IGluZm9ybWF0aW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTaGFyZSB0aGUgdG9rZW4gb3V0IG9mIGJhbmQiLAogICAgICAidGV4dCI6ICJTZW5kIHRoZSB0b2tlbiB0byB0aGUgb3RoZXIgbWFjaGluZSBvdmVyIGNoYXQsIGVtYWlsLCBvciBhIEROUyBUWFQgcmVjb3JkLiBBbnlvbmUgd2hvIGhhcyB0aGUgdG9rZW4gY2FuIGNvbm5lY3QsIHNvIHRyZWF0IGl0IGxpa2UgYSBwYXNzd29yZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29ubmVjdCBmcm9tIHRoZSBzZWNvbmQgbWFjaGluZSIsCiAgICAgICJ0ZXh0IjogIlJ1biB0YWlsY2F0IGNvbm5lY3QgZm9sbG93ZWQgYnkgdGhlIHRva2VuIHRvIG9wZW4gYSBXaXJlR3VhcmQgdHVubmVsIGRpcmVjdGx5IHRvIHRoZSBmaXJzdCBtYWNoaW5lLCBmYWxsaW5nIGJhY2sgdG8gYSBERVJQIHJlbGF5IGlmIGEgZGlyZWN0IFVEUCBwYXRoIGNhbm5vdCBiZSBlc3RhYmxpc2hlZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRm9yd2FyZCBhIHBvcnQgb3Igb3BlbiBhIHNoZWxsIiwKICAgICAgInRleHQiOiAiVXNlIHRhaWxjYXQncyBwb3J0LWZvcndhcmRpbmcgZmxhZ3MsIGl0cyBidWlsdC1pbiBTU0ggc2VydmVyLCBvciBpdHMgU09DS1M1IHByb3h5IG1vZGUgdG8gcmVhY2ggYSBzcGVjaWZpYyBzZXJ2aWNlIG9uIHRoZSByZW1vdGUgbWFjaGluZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "tailcat_tailscale_netcat_no_control_plane/tailcat_tailscale_netcat_no_control_plane_banner.webp" "Diagram of two machines connected by an encrypted tailcat tunnel, with a short token exchanged between them" >}}

{{< link href="https://github.com/tailscale/tailcat" >}}Tailcat{{< /link >}} is a small Go tool that does one thing: it opens an encrypted, point-to-point connection between two machines and hands you a shell, a port forward, or a raw pipe. No account, no admin console, no tailnet to join. Run `tailcat` on one machine, it prints a token that starts with `tc`, you hand that token to a second machine, and `tailcat connect <token>` gets you a WireGuard tunnel straight through. Tailscale describes it, accurately, as "Tailscale without Tailscale, by Tailscale."

That's a strange thing for a company to ship. Tailscale's entire business is the control plane, the piece Tailcat deliberately leaves out. It turns out there was real appetite for exactly this combination: netcat's simplicity with WireGuard's encryption, minus the identity and policy layer that makes Tailscale itself worth paying for.

{{% tldr %}}
- <a href="https://github.com/tailscale/tailcat" target="_blank">Tailcat</a> is Tailscale's open source netcat replacement: one command generates a short token, another command connects to it, and the two ends get an encrypted tunnel with no account or tailnet.
- Under the hood it reuses Tailscale's own components: userspace WireGuard, the `magicsock` transport layer for NAT traversal, gVisor's `netstack` for TCP termination, and DERP relays as a fallback path.
- It can pipe stdin/stdout, forward local ports, run an account-free SSH server, act as a SOCKS5 proxy, or serve as an exit node. Install with `go install github.com/tailscale/tailcat/cmd/tailcat@latest`.
- The tradeoff is governance: no identity, no access logs, no revocation beyond the token itself, and HN's top comment thread raised the obvious question of what this looks like as malware C2.
- It solves a different problem than Pinggy. Tailcat links two machines you already control; Pinggy takes a service on your laptop and gives it a public HTTPS URL that anyone, with no client installed, can open in a browser.
{{% /tldr %}}

## What running it actually looks like

The whole interaction is two commands on two machines:

```bash
# on machine A (the one you want to reach)
$ tailcat
tc7f2a9e1c40b8f30d9e2a1b6c5d4e3f2091827364...
listening...

# on machine B (the one connecting in)
$ tailcat connect tc7f2a9e1c40b8f30d9e2a1b6c5d4e3f2091827364...
connected
```

That's it. No login page, no invite link, no admin dashboard to configure an ACL in first. By default `tailcat` just pipes stdin/stdout, like the netcat command it's named after, but the same token unlocks more specific modes: forward a local port to a port on the other machine, drop into a password-free SSH session, run it as a SOCKS5 proxy so all your traffic exits through the remote machine, or use ping-style diagnostics to check the path. The token itself is short (Tailscale says ~50 bytes) because it's CBOR-encoded data carrying just the server's WireGuard public key and enough DERP relay info to find it.

Two details make this less throwaway than it sounds. First, keys can be ephemeral (thrown away when the process exits) or persistent, so you can get a stable address for a machine you connect to repeatedly. Second, a token can be published as a DNS TXT record, which turns "share this string over Slack" into "point tailcat at a hostname you control."

## The parts it's actually built from

Tailcat isn't a from-scratch reimplementation. It's Tailscale's own client-side networking stack with the coordination server unplugged:

- **Userspace WireGuard** handles the encryption. It doesn't touch a kernel TUN device, so tailcat needs no root and no kernel module, just a process with a socket.
- **magicsock** is the transport layer Tailscale normally uses to multiplex a node's traffic across direct UDP paths and relay fallbacks. It does the STUN-style endpoint discovery and NAT hole-punching that gets two machines behind different routers talking directly when possible.
- **netstack**, borrowed from Google's gVisor project, is a full userspace TCP/IP stack. It's what lets tailcat accept and originate TCP connections inside its own process without asking the OS to route anything or open a listening socket in the usual sense.
- **DERP relays** (Tailscale's "Designated Encrypted Relay for Packets" servers) are the fallback when hole-punching fails, which happens more often than networking optimists would like, especially behind symmetric NATs or restrictive corporate firewalls. All DERP traffic stays end-to-end encrypted with WireGuard; the relay only ever sees ciphertext.

If you want the deeper cut, Tailscale wrote up how NAT traversal and DERP work in <a href="https://tailscale.com/blog/how-tailscale-works" target="_blank">their own engineering blog</a> years before Tailcat existed. Tailcat is mostly a thin CLI wrapped around infrastructure that was already battle-tested at millions of nodes.

## Where the discussion got interesting

Tailcat's <a href="https://news.ycombinator.com/item?id=49452990" target="_blank">launch thread</a> pulled 654 points and 126 comments, and most of it wasn't about the engineering, which is solid and well-understood. It was about what happens when you make WireGuard tunnels this disposable.

One commenter asked, bluntly, whether this is now a clean primitive for malware command-and-control: two processes exchange a token once, and after that you have an encrypted channel that's hard to fingerprint on the wire and hard to take down (short of blocking Tailscale's entire DERP infrastructure). Another pushed back on the framing that this is "peer-to-peer" at all, pointing out that a meaningful share of real-world connections will ride Tailscale's own relay servers rather than a direct path, and contrasting it with projects like Nebula, which push you toward running your own lighthouse instead of depending on the vendor's infrastructure. A third raised plain vendor-lock-in fatigue: swapping netcat, a 30-year-old universally available tool, for a project you have to `go install` from a specific vendor's repo is a real cost even if the tunnel itself is free and open source.

There was also a useful round of "this already exists" from people who track this space closely. <a href="https://github.com/magic-wormhole/magic-wormhole" target="_blank">Magic Wormhole</a> does the token-based pairing idea for file transfer specifically. <a href="https://github.com/coder/wush" target="_blank">wush</a>, from Coder, already builds P2P file transfer and shell access on top of Tailscale's `tsnet` library. <a href="https://github.com/n0-computer/iroh" target="_blank">iroh</a> and its `dumbpipe` demo do QUIC-based direct connections with a similar "share a ticket, connect" model but a different relay design. And a handful of smaller tools (`tsnc`, `tailscale-netcat`) already exist purely to give SSH's `ProxyCommand` a netcat-shaped binary that runs over an existing tailnet. Tailcat's contribution isn't a new idea, it's Tailscale doing the idea with its own production-grade NAT traversal and no separate account system to manage.

### Where it sits next to the alternatives

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tool</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Shape</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Best for</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Tailcat</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Token-paired WireGuard tunnel, no account</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Ad hoc SSH/port-forward between two machines you own</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Magic Wormhole</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">One-time word-code pairing</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Sending a single file between two people, once</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>wush</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Tailscale <code>tsnet</code>-based P2P transfer/shell</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Fast file transfer without setting up a tailnet</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Tailscale (full)</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Persistent mesh network, control plane, ACLs</td>
  <td style="border:1px solid #ddd;padding:0.45em;">A standing network across many devices with identity and policy</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;"><strong>Pinggy</strong></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Reverse SSH tunnel to a public edge</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Giving a local service a public HTTPS URL anyone can open</td>
</tr>
</tbody>
</table>

## The part that's actually a different problem: reaching the public internet

Everything above, Tailcat included, solves the same shape of problem: getting two machines that both run a piece of software to talk to each other. That's genuinely useful, but it's not what you want when the other end isn't a machine you control at all, it's a webhook sender, a client demoing your app from their phone, or a payment provider's callback hitting your laptop during local development. Those don't have tailcat installed, and they never will.

{{< image "tailcat_tailscale_netcat_no_control_plane/tailcat_vs_pinggy_shapes.webp" "Comparison diagram showing tailcat as a peer-to-peer link between two machines you control, versus Pinggy as a reverse tunnel that exposes a local port at a public HTTPS URL" >}}

That's the problem {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} is built for. It's a reverse SSH tunnel, not a mesh network: point it at a local port and it hands back a public URL that works in any browser, on any device, with nothing installed on the other end.

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

That single line, run against a local dev server on port 3000, prints back an `https://` URL over Pinggy's free tier. Because it's outbound-only over port 443, it works from behind CGNAT and corporate firewalls that would make Tailcat's direct WireGuard path fall back to a relay anyway, or block it outright. The tradeoff is the mirror image of Tailcat's: you're trusting a public edge to terminate TLS and route the request, rather than building a private link between two peers, and it's only useful for something you specifically want reachable by anyone with the URL.

Put the two side by side and the design decisions in both make more sense. Tailcat optimizes for "I already know exactly which second machine I want, and I control it." Pinggy optimizes for "I don't know or care who's connecting, I just need this port reachable from the outside, right now, without asking anyone to install anything." Different shape, same underlying itch: get a bit of traffic from here to there without provisioning a server in the middle for good.

## Should you actually use it?

If you're a developer who occasionally needs to jump onto a friend's machine, transfer a file to a colleague, or give a CI job temporary reach into a private network, Tailcat is a genuinely convenient drop-in for what people used to do with a temporary WireGuard config or an SSH reverse tunnel through a bastion. It's free, the binary is small, and the security model (whoever holds the token gets in) is at least legible, even if it's not an audit trail.

What it isn't is a replacement for real access management. There's no revocation beyond hoping the ephemeral key expired, no per-connection logging you'd hand to a security team, and the public relay comes with, in Tailscale's own words, no uptime SLA. Treat it the way you'd treat a one-time SSH key you emailed to someone: fine for a quick, deliberate task between two parties who trust each other, not something you'd build production infrastructure on top of.
