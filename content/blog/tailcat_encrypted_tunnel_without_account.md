---
title: "Tailcat: An Encrypted Tunnel Without a Tailscale Account"
description: "Tailscale open sourced Tailcat, a netcat style CLI that builds an encrypted, NAT traversing tunnel between two machines with no account and no control plane. How it works, what it is for, and where it stops being enough."
date: 2026-08-27T12:00:00+05:30
draft: false
tags: ["Tailscale", "WireGuard", "networking", "tunneling", "peer-to-peer"]
og_image: "images/tailcat_encrypted_tunnel_without_account/tailcat_encrypted_tunnel_without_account_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJCbG9nUG9zdGluZyIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7CiAgICAiQHR5cGUiOiAiV2ViUGFnZSIsCiAgICAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvdGFpbGNhdF9lbmNyeXB0ZWRfdHVubmVsX3dpdGhvdXRfYWNjb3VudC8iCiAgfSwKICAiaGVhZGxpbmUiOiAiVGFpbGNhdDogQW4gRW5jcnlwdGVkIFR1bm5lbCBXaXRob3V0IGEgVGFpbHNjYWxlIEFjY291bnQiLAogICJkZXNjcmlwdGlvbiI6ICJUYWlsc2NhbGUgb3BlbiBzb3VyY2VkIFRhaWxjYXQsIGEgbmV0Y2F0IHN0eWxlIENMSSB0aGF0IGJ1aWxkcyBhbiBlbmNyeXB0ZWQsIE5BVCB0cmF2ZXJzaW5nIHR1bm5lbCBiZXR3ZWVuIHR3byBtYWNoaW5lcyB3aXRoIG5vIGFjY291bnQgYW5kIG5vIGNvbnRyb2wgcGxhbmUuIEEgbG9vayBhdCBob3cgaXQgd29ya3MsIHdoYXQgaXQgaXMgZm9yLCBhbmQgd2hlcmUgYSBwdWJsaWMgdHVubmVsIGxpa2UgUGluZ2d5IGlzIHN0aWxsIHRoZSBiZXR0ZXIgdG9vbC4iLAogICJwdWJsaXNoZXIiOiB7CiAgICAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwKICAgICJuYW1lIjogIlBpbmdneSIKICB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMDgtMjciLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0wOC0yNyIsCiAgImtleXdvcmRzIjogIlRhaWxjYXQsIFRhaWxzY2FsZSwgV2lyZUd1YXJkLCBuZXRjYXQsIE5BVCB0cmF2ZXJzYWwsIERFUlAgcmVsYXksIG1hZ2ljc29jaywgcGVlci10by1wZWVyIHR1bm5lbCwgU1NILCBTT0NLUyBwcm94eSwgUGluZ2d5IiwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiTmV0d29ya2luZywgRGV2T3BzIiwKICAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvdGFpbGNhdF9lbmNyeXB0ZWRfdHVubmVsX3dpdGhvdXRfYWNjb3VudC8iLAogICJhcnRpY2xlQm9keSI6ICJJbnN0YWxsIFRhaWxjYXQgd2l0aCBnbyBpbnN0YWxsIGdpdGh1Yi5jb20vdGFpbHNjYWxlL3RhaWxjYXQvY21kL3RhaWxjYXRAbGF0ZXN0LiBSdW4gdGFpbGNhdCBvbiBvbmUgbWFjaGluZSB0byBnZXQgYSB0b2tlbiwgdGhlbiBydW4gdGFpbGNhdCA8dG9rZW4+IG9uIGFub3RoZXIgbWFjaGluZSB0byBvcGVuIGFuIGVuY3J5cHRlZCBXaXJlR3VhcmQgdHVubmVsIGJldHdlZW4gdGhlbSwgd2l0aCBOQVQgdHJhdmVyc2FsIGFuZCBERVJQIHJlbGF5IGZhbGxiYWNrIGhhbmRsZWQgYXV0b21hdGljYWxseSBhbmQgbm8gVGFpbHNjYWxlIGFjY291bnQgcmVxdWlyZWQuIgp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "tailcat_encrypted_tunnel_without_account/tailcat_encrypted_tunnel_without_account_banner.webp" "Diagram showing two machines connected through an encrypted tailcat tunnel routed through a DERP relay" >}}

Tailscale just open sourced the plumbing it uses to punch through NAT and encrypt traffic between two machines, packaged as a single static binary called {{< link href="https://github.com/tailscale/tailcat" >}}Tailcat{{< /link >}}. Run `tailcat` on one machine and it prints a token. Paste that token into `tailcat <token>` on another machine anywhere on the internet, and the two ends have an encrypted, NAT traversing pipe between them. No account, no login flow, no tailnet, no persistent identity unless you ask for one.

```
go install github.com/tailscale/tailcat/cmd/tailcat@latest
```

or, with Nix:

```
nix run github:tailscale/tailcat
```

That's the entire onboarding. Compare that to setting up Tailscale itself, where you sign up, install a client, authenticate a device, and join a tailnet before reaching anything, and it's clear what Tailcat is going for: the useful sliver of Tailscale, an encrypted point-to-point connection that works despite NAT, with the rest (identity, ACLs, device management, a coordination server tracking your fleet) stripped out entirely.

{{% tldr %}}
**What it is:** a netcat-style CLI from Tailscale that opens an encrypted WireGuard tunnel between two machines using Tailscale's NAT traversal and DERP relay network, without a Tailscale account or coordination server.

**Install:** `go install github.com/tailscale/tailcat/cmd/tailcat@latest`

**Basic use:**
```
tailcat                    # server, prints a token
tailcat <token>             # client, connects using that token
tailcat --serve=8080,8443   # forward local ports through the tunnel
tailcat --serve=no-auth-ssh # temporary SSH server
tailcat ssh <token>         # SSH into it
```

**Not built for:** giving a URL to someone who isn't also running `tailcat`. For that, a tunnel that terminates HTTPS and hands out a real public URL, like [Pinggy](https://pinggy.io), is the better fit.
{{% /tldr %}}

## What it actually gives you

At its simplest, Tailcat is netcat with WireGuard bolted on. One side listens:

```
tailcat
```

That prints a token, a short string starting with `tc` that encodes the server's WireGuard public key and which DERP region to rendezvous through, nothing else. Hand that token to whoever needs to connect over whatever out-of-band channel you trust (a Slack DM, a QR code, a DNS record), and they run something like:

```
echo hello | tailcat tcomFwWCCcjS5nKNqAod034nWoJZW0LZqDhhC8U_dKdnDRYQ8uNGFpGQEu
```

and "hello" shows up on the listening side. That's the whole netcat analogy: pipe data between two machines that otherwise have no way to find each other. But because the pipe is WireGuard underneath, it's encrypted and authenticated by default, and because it reuses Tailscale's NAT traversal stack, neither side needs a public IP or a forwarded port.

From there, `--serve` turns the same mechanism into port forwarding. On the machine with the service:

```
tailcat --serve=8080,8443
```

exposes local ports 8080 and 8443 to whoever holds the token. On the other end:

```
tailcat <token> 8080
```

reaches port 8080 through the tunnel. There's a built-in passwordless SSH server (`tailcat --serve=no-auth-ssh`, paired with `tailcat ssh <token>` or `tailcat ssh <token> ls -la` to run a single command), a SOCKS5 proxy mode (`tailcat socks <token> curl http://server.tailcat:8081/`), an exit-node mode that routes all of a client's traffic out through the server (`tailcat --serve=exit-node`), and a `tailcat ping --until-direct <token>` command that reports whether the connection landed direct or is still bouncing off a relay.

## Ephemeral by default, persistent if you ask

The most thought-out part of the design is that a bare `tailcat` invocation generates a fresh WireGuard keypair every run, so the token you print is single-use and the address dies when the process exits. If you want a stable address you can reconnect to later, `tailcat genkey` saves a named key to disk:

```
tailcat genkey --region=nyc
tailcat --serve=8080 --key=<name>
```

and you can restrict who's allowed to use that key with an explicit allowlist:

```
tailcat --serve=22 --allow=nodekey:cfb6bf...ddfd16
```

Tokens can also be published as DNS TXT records, so instead of pasting a token around you can run `tailcat ssh my-server.example.com` directly and let DNS resolve it to the current token. None of that touches a coordination server. It's local state on disk, a public-key allowlist, and DNS, which gets you "an address that doesn't change" without rebuilding Tailscale's device registry.

## The transport is not new code

The more interesting story here is what Tailcat is built from. It's layered directly on the open source stack that powers the real Tailscale client:

- **{{< link href="https://www.wireguard.com/" >}}WireGuard{{< /link >}}**, running in userspace instead of through a kernel `wg0` interface, so it needs no root and no TUN device.
- **magicsock**, Tailscale's UDP transport, doing STUN-style discovery and hole punching to try to get a direct connection between the two peers.
- **DERP relays**, the same encrypted rendezvous and fallback network Tailscale runs for when hole punching fails, which happens on symmetric NATs and locked-down corporate firewalls more often than you'd like. The connection handshake, an exchange of tiny "are you there" pings over DERP, happens before either side knows whether a direct path exists at all.
- **Netstack**, a userspace TCP/IP stack (the same one gVisor uses) that terminates connections without a real network interface.

Put together, a connection goes: generate keys, connect to a DERP relay, hand over a token out of band, ping the peer over DERP to confirm it's alive, bring up the WireGuard tunnel over that relay, then race NAT traversal in the background to upgrade from relayed to direct UDP if the network allows it. `ping --until-direct` exists specifically to show you which of those two states you ended up in. None of this is new protocol design. It's the exact code path that already runs on every phone, laptop, and server currently connected to a tailnet, just without the coordination server telling both sides who to trust.

## Where it sits next to the tools you already reach for

`netcat` and `socat` do the piping part but nothing else. No encryption, no NAT traversal. Fine if both machines are already reachable on the open internet; a dead end the moment either one sits behind a home router or a corporate NAT you don't control.

{{< link href="https://github.com/magic-wormhole/magic-wormhole" >}}magic-wormhole{{< /link >}} solves an adjacent problem (get a file, or a connection, from one machine to another that can't otherwise find each other) using short human-readable codewords and a PAKE handshake, but it's built around a specific transfer flow rather than an arbitrary long-lived pipe.

Projects like {{< link href="https://github.com/n0-computer/iroh" >}}iroh{{< /link >}} and {{< link href="https://github.com/n0-computer/dumbpipe" >}}dumbpipe{{< /link >}} from n0-computer sit in almost exactly the same niche as Tailcat: QUIC instead of WireGuard, but the same pitch of encrypted P2P connectivity with no account, distributed as a library or a CLI. Tailcat's edge is that it's reusing transport code already running in production on millions of Tailscale devices, rather than a newer implementation finding its edge cases in the wild.

Full Tailscale is still the right tool when you actually want persistent infrastructure: a fleet of machines that all know about each other, ACLs, SSO, an admin console, exit nodes that stay up across reboots. Tailcat throws all of that away on purpose, in exchange for zero setup.

## The rough edges

The README is upfront about a few things worth taking seriously before reaching for this on anything that matters:

- **No stability promises**, on the Go API, the CLI flags, the output format, or the wire protocol. Fine for a one-off SSH session into a dev box; a bad foundation for anything you'd want to still work in six months without pinning the exact version.
- **Public DERP relays carry no uptime SLA**, and access can be revoked without notice. You can point `genkey` at a self-hosted DERP server if you need something you control end to end.
- **Auth is whatever you build on top of the public-key allowlist.** No accounts, no session sharing between machines, no audit log. That's the entire point of skipping the control plane, but it also means you're back to manually tracking who holds which key.
- **Both ends still need the binary, and the token still has to travel out of band somehow.** It's a private pipe between two `tailcat` processes, not a link you can hand to someone who doesn't have the tool installed.

## Where Pinggy fits differently

That last point is really the dividing line. Tailcat is for two machines, both running the same tool, whose owners already trust each other and just need a private pipe between them. It has nothing on the other end that speaks HTTP or terminates TLS for the public, so there's no way to hand the connection to a browser, a webhook sender, or a client who has never heard of Tailscale.

That's the gap [Pinggy](https://pinggy.io) fills instead. When what you actually want is a public HTTPS URL that anyone can hit without installing anything, a tunnel that terminates TLS and speaks HTTP is solving a different problem than a private encrypted pipe between two consenting processes:

```
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

gets a public URL pointed at local port 3000 in one command, with nothing to install beyond the SSH client already on your machine. It answers "show this local service to the internet"; Tailcat answers "let this one other machine I trust reach into mine." Both start from the same complaint (NAT makes reaching your own machine annoying), but they're not really competing for the same job.

## Worth using?

For the case it's built for, quick, ephemeral, one-off connectivity between two machines whose owners already trust each other, Tailcat is a genuinely well put together tool: a single static binary, nothing to configure on either end, built on transport code that's already been hardened by years of running on real Tailscale devices. If you've ever reached for netcat over an SSH tunnel just to move a file or get a shell into something sitting behind a NAT you don't control, this replaces that workaround with something better designed and encrypted by default, for free.

Just don't treat "no API or CLI stability promises" as boilerplate. Pin the version, keep a fallback plan for exchanging the token, and treat the public DERP relays as a courtesy rather than infrastructure you depend on.
