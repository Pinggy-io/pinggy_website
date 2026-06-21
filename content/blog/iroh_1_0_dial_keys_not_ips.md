---
title: "Iroh 1.0: Dial Keys, Not IPs"
description: "Iroh 1.0 ships a stable P2P networking library that connects devices by cryptographic key instead of IP address. QUIC under the hood, 90% hole-punch success, 200M+ endpoints/month, and now stable language bindings for Python, Node.js, Swift, and Kotlin."
date: 2026-06-18T10:00:00+05:30
draft: false
tags: ["networking", "p2p", "rust", "QUIC", "iroh", "nat traversal", "peer-to-peer", "open source"]
categories: ["Technology", "Networking", "Open Source"]
og_image: "images/iroh_1_0_dial_keys_not_ips/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBDb25uZWN0IFR3byBEZXZpY2VzIHdpdGggSXJvaCAxLjAiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gZXN0YWJsaXNoIGEgcGVlci10by1wZWVyIFFVSUMgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBkZXZpY2VzIHVzaW5nIElyb2ggMS4wLCB3aGljaCBjb25uZWN0cyBieSBjcnlwdG9ncmFwaGljIGtleSBpbnN0ZWFkIG9mIElQIGFkZHJlc3MuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2lyb2hfMV8wX2RpYWxfa2V5c19ub3RfaXBzL2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkFkZCBpcm9oIHRvIHlvdXIgcHJvamVjdCIsCiAgICAgICJ0ZXh0IjogIkFkZCBpcm9oIHRvIENhcmdvLnRvbWwgZm9yIFJ1c3QsIG9yIGluc3RhbGwgdmlhIHBpcCBpbnN0YWxsIGlyb2gsIG5wbSBpbnN0YWxsIEBudW1iZXIwL2lyb2gsIG9yIHRoZSBTd2lmdCBhbmQgS290bGluIFNESyBwYWNrYWdlcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQmluZCBhbiBFbmRwb2ludCIsCiAgICAgICJ0ZXh0IjogIkNhbGwgRW5kcG9pbnQ6OmJpbmQocHJlc2V0czo6TjApLmF3YWl0IHRvIGNyZWF0ZSBhbiBlbmRwb2ludC4gRWFjaCBlbmRwb2ludCBhdXRvLWdlbmVyYXRlcyBhIGNyeXB0b2dyYXBoaWMga2V5cGFpciB3aG9zZSBwdWJsaWMga2V5IGlzIHRoZSBzdGFibGUgYWRkcmVzcyB5b3Ugc2hhcmUgd2l0aCBwZWVycy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2hhcmUgeW91ciBOb2RlQWRkciIsCiAgICAgICJ0ZXh0IjogIlJldHJpZXZlIHlvdXIgbm9kZSBhZGRyZXNzIHdpdGggZW5kcG9pbnQubm9kZV9hZGRyKCkuYXdhaXQgYW5kIHNoYXJlIHRoZSBOb2RlQWRkciBzdHJ1Y3Qgd2l0aCB0aGUgcGVlciB5b3Ugd2FudCB0byBjb25uZWN0IHRvIHRocm91Z2ggYW55IGNoYW5uZWwuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRpYWwgdGhlIHJlbW90ZSBwZWVyIiwKICAgICAgInRleHQiOiAiQ29ubmVjdCB3aXRoIGVuZHBvaW50LmNvbm5lY3QocmVtb3RlX2FkZHIsIEFMUE4pLmF3YWl0LiBJcm9oIGF0dGVtcHRzIGEgZGlyZWN0IFFVSUMgY29ubmVjdGlvbiB2aWEgaG9sZSBwdW5jaGluZyBmaXJzdCBhbmQgZmFsbHMgYmFjayB0byB0aGUgcmVsYXkgc2VydmVyIGlmIHRoYXQgZmFpbHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVzZSBRVUlDIHN0cmVhbXMiLAogICAgICAidGV4dCI6ICJPcGVuIGJpZGlyZWN0aW9uYWwgc3RyZWFtcyB3aXRoIGNvbm4ub3Blbl9iaSgpIG9yIHVuaWRpcmVjdGlvbmFsIHN0cmVhbXMgd2l0aCBjb25uLm9wZW5fdW5pKCkgb24gdGhlIHJldHVybmVkIENvbm5lY3Rpb24gdG8gc2VuZCBhbmQgcmVjZWl2ZSBhcHBsaWNhdGlvbiBkYXRhLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "iroh_1_0_dial_keys_not_ips/banner.webp" "Iroh 1.0: connecting two peers by cryptographic key, not IP address, with QUIC and relay fallback" >}}

IP addresses are a bad primary key. They change when a laptop switches from Wi-Fi to a hotspot, when a mobile phone moves between cells, when a cloud instance gets rebooted. Every time that happens, connections break and need to be re-established - if your software even noticed the change at all.

<a href="https://www.iroh.computer/" target="_blank">Iroh 1.0</a>, released June 15, 2026, ships a clean answer to that problem: give every device a cryptographic keypair, use the public key as the address, and let the library figure out the fastest path to reach it. After four years and 65 pre-release versions, the project hit stable on June 15, 2026, with wire-protocol stability, committed language bindings, and over 200 million endpoint connections per month already flowing through its public relay infrastructure.

{{% tldr %}}
1. **What Iroh does**: connects any two devices by cryptographic public key instead of IP address. IP addresses become ephemeral hints; the key is the stable identity.
2. **How it connects**: attempts a direct QUIC UDP hole punch first (~90% success rate). Falls back to stateless encrypted relay servers when that fails. About 95% of data volume flows over direct connections in practice.
3. **Protocol stack**: QUIC with TLS 1.3 directly. Adopts <a href="https://datatracker.ietf.org/doc/draft-ietf-quic-nat-traversal/" target="_blank">QNT (QUIC-NAT-Traversal)</a>, an emerging IETF standard, for cleaner hole punching integrated into the QUIC stack itself.
4. **What 1.0 means**: wire-protocol stability and API stability. An iroh v1 endpoint will talk to another iroh v1 endpoint regardless of patch version or language binding.
5. **Language support**: Rust (native), plus Python, Node.js, Swift, and Kotlin as official SDK bindings.
6. **When you still need a public URL**: Iroh connects known peers. For accepting inbound HTTP from unknown clients - webhooks, APIs, web UIs - you still need a public endpoint. [Pinggy](https://pinggy.io) creates one from localhost in one SSH command.
{{% /tldr %}}

## Why IP addresses are a fragile identity

The internet was designed assuming that every host has a stable, globally routable address. That assumption died quietly with NAT. Today, most devices sit behind one or more layers of NAT: your laptop is behind your home router, which is behind your ISP, possibly behind CGNAT. The device's "IP address" as seen from the outside is shared with thousands of other users and changes whenever the router renegotiates its lease.

This isn't a configuration problem you can solve once. It's a structural property of the network. The result is that peer-to-peer connectivity - two devices talking directly without routing through a server you control - has required either expensive infrastructure (STUN, TURN, ICE, coordinated hole punching) or a VPN overlay that imposes latency and operational overhead.

Iroh replaces the question "what is this device's IP address?" with "what is this device's public key?" Keys don't change when you switch networks. They don't expire. They're tied to the device, not the network interface. And they carry built-in authentication: if you can complete a QUIC handshake with the holder of a given key, you know you're talking to exactly that peer, not a man in the middle.

## What happens when you dial a key

When you call `endpoint.connect(node_addr, ALPN)`, here's what Iroh does:

**Step 1 - Relay bootstrap**: Both endpoints maintain persistent connections to a relay server. The relay is the initial coordination point. When A wants to talk to B, both sides have already told the relay their public IP:port as seen from outside their NAT (the "reflective address").

**Step 2 - Hole punch**: The relay shares each side's reflective address with the other. Both nodes simultaneously fire UDP packets at each other's reflective address. Because both are sending on the same 4-tuple (source IP/port to destination IP/port), the firewalls on both sides see the incoming packets as matching the outbound traffic and let them through. This is UDP hole punching.

Iroh uses <a href="https://datatracker.ietf.org/doc/draft-ietf-quic-nat-traversal/" target="_blank">QUIC-NAT-Traversal (QNT)</a>, an emerging IETF standard that expresses the hole punch as a QUIC-level operation rather than something happening underneath QUIC. This matters because the QUIC congestion controller becomes aware of the hole punch attempt, giving better loss detection and a cleaner handoff once the direct connection succeeds.

**Step 3 - Direct connection or relay fallback**: If the hole punch succeeds (roughly 90% of the time in production), the QUIC connection upgrades to the direct path. If it fails - typically due to symmetric NAT where the external port is unpredictable - traffic continues flowing over the relay. About 95% of actual data volume ends up on direct connections.

A critical detail: Iroh's relay servers are *stateless*. They forward encrypted packets without decrypting or maintaining session state. This is possible because QUIC with TLS 1.3 encrypts everything end-to-end. Stateless relay infrastructure is dramatically cheaper to operate than the stateful TURN servers that WebRTC relies on.

## How the code looks

A minimal echo server and client in Rust:

```rust
use iroh::{Endpoint, endpoint::presets, protocol::Router};

// Accepting side
let endpoint = Endpoint::bind(presets::N0).await?;
let router = Router::builder(endpoint.clone())
    .accept(ECHO_ALPN, EchoHandler)
    .spawn();
endpoint.online().await?;
let addr = endpoint.node_addr().await?;
// share `addr` with the connecting peer out of band

// Connecting side
let other = Endpoint::bind(presets::N0).await?;
let conn = other.connect(addr, ECHO_ALPN).await?;
let (mut send, mut recv) = conn.open_bi().await?;
send.write_all(b"hello iroh").await?;
send.finish()?;
let response = recv.read_to_end(1024).await?;
```

Each protocol is identified by an ALPN (Application-Layer Protocol Negotiation) byte string, the same mechanism TLS uses to negotiate HTTP/1.1 vs HTTP/2 vs HTTP/3. Your application defines its own ALPN; Iroh routes incoming connections to the right handler.

The Python and Node.js bindings follow the same shape. The `NodeAddr` - which bundles the public key with a relay server hint and any known direct addresses - is the thing you exchange out of band to bootstrap a connection. Once two peers have each other's `NodeAddr`, they can connect and reconnect forever, even as underlying IP addresses change.

## Iroh vs. WebRTC vs. libp2p

If you've looked at P2P connectivity before, you've probably hit WebRTC or libp2p. The tradeoffs are real.

**WebRTC** was designed for browser-to-browser real-time media. It bundles a heavy stack: ICE, STUN, TURN, DTLS, SCTP, and RTP. This is fine for video calls, but if you're building a file sync app or an agent coordination protocol, you're carrying a lot of complexity you don't need. WebRTC's TURN relay servers are also stateful and expensive to run at scale.

**libp2p** is the P2P networking layer behind IPFS and a number of blockchain projects. It's designed to minimize reliance on central infrastructure, at the cost of complexity and connection reliability. Its hole-punch success rate runs around 70% in practice. It has a Kademlia-based DHT built in, which is essential if you're doing content-addressed routing but overkill otherwise.

Iroh explicitly accepts a small amount of centralization - the relay and DNS discovery infrastructure - in exchange for near-certain connectivity. 90% direct connection success vs. 70% sounds incremental, but in a distributed app where you're connecting many pairs of nodes, a 30% failure rate compounds quickly. Iroh's designers also decided not to build a DHT: if you need content-addressed routing, that's a layer on top.

For most applications that want to connect specific known peers across NATs - device sync, distributed compute, secure messaging, game networking - Iroh hits a better tradeoff than either alternative.

## What 1.0 means in practice

The 1.0 stamp is a commitment on two things:

**Wire-protocol stability**: packets produced by iroh v1.0.x will be understood by iroh v1.2.0, v1.5.0, and so on. You won't need to coordinate library updates across all your nodes simultaneously.

**API stability**: the public API surface - `Endpoint`, `NodeAddr`, `Connection`, `Router`, the ALPN protocol handler pattern - won't make breaking changes without a major version bump. The language bindings for Python, Node.js, Swift, and Kotlin carry the same guarantee.

Before 1.0, building on iroh meant tracking pre-release API churn. The library saw 65 releases over four years. That's the right way to iterate on a networking primitive, but it was a real operational cost for anyone shipping products on top of it. The 1.0 release also ships QUIC multipath support - when a device has multiple interfaces (Wi-Fi and cellular), iroh can use both and migrate the connection automatically as signal quality changes.

At scale, iroh's public relay network has seen more than 200 million endpoints created in the last 30 days. The production real-world use cases include video streaming, LLM training across distributed compute nodes, secure messaging, file transfer, and game networking.

## Where Iroh doesn't help

Iroh connects known peers. That's a real constraint.

To dial a key, you first need the key. Getting it to the other side requires an out-of-band channel: a QR code, a configuration file, a pairing flow in your app, or a discovery server. Iroh doesn't solve the initial key exchange problem for you. It solves everything after that.

More importantly, Iroh doesn't give you a public HTTPS URL. The web is still built on the client-server model where billions of HTTP clients connect to servers at known addresses. Webhooks arrive at URLs. Customers visit web dashboards at URLs. APIs are called over HTTPS.

If you're building an Iroh-based application and it has any web-facing component - a configuration UI, a webhook listener for Stripe or GitHub, an HTTP API for your mobile app - you need a way to expose that HTTP service publicly.

The straightforward way to do that during development and testing is [Pinggy](https://pinggy.io), which creates a public HTTPS tunnel to a port on your local machine over SSH:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

That gives you a public HTTPS URL like `https://abc123.a.pinggy.link` pointing at whatever is running on port 8080 locally. Iroh handles the P2P data plane; Pinggy handles the public HTTP entry point. The two don't interfere.

For a more permanent setup, you'd deploy a small server-side HTTP endpoint in front of your Iroh infrastructure, but for prototyping, local testing, or demo'ing a webhook integration, the SSH command gets you there in seconds.

## The bigger picture

Iroh 1.0 is a milestone for a problem that's been annoying network programmers since NAT became ubiquitous. The combination of QUIC's built-in security and multiplexing, hole punching integrated at the QUIC level via QNT, and stateless relay infrastructure makes it the most practical general-purpose P2P connectivity library available right now.

The constraint is real: it's a library, not a service. You're embedding iroh into your application, building your own key exchange flow, and making your own decisions about discovery. That's appropriate for the use cases it targets - you wouldn't want a video streaming protocol or an agent coordination layer to depend on a third-party service for its core data path.

For the cases where you do want a public URL - a stable HTTPS endpoint that arbitrary clients can reach without knowing your key - a tunnel is still the right tool. The interesting applications are the ones that use both: Iroh for the direct peer-to-peer data flows where low latency and decentralization matter, and a public HTTPS endpoint for the initial configuration, the webhook receiver, or the web UI that doesn't belong in the P2P layer.

The Iroh project is on <a href="https://github.com/n0-computer/iroh" target="_blank">GitHub</a>, and the official documentation is at <a href="https://docs.iroh.computer/" target="_blank">docs.iroh.computer</a>.
