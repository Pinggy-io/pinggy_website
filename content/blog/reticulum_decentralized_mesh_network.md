---
title: "Reticulum: A Network Stack That Doesn't Need an ISP"
description: "Reticulum is an open-source, cryptography-based networking stack that routes encrypted traffic over LoRa, packet radio, WiFi, or plain TCP/IP interchangeably - no ISP, carrier, or central server required."
date: 2026-08-17T11:30:00+05:30
draft: false
tags: ["Reticulum", "networking", "open source", "privacy", "self-hosted"]
categories: ["Technology", "Networking", "Open Source"]
og_image: "images/reticulum_decentralized_mesh_network/reticulum_decentralized_mesh_network_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KeyJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLCAiQHR5cGUiOiAiSG93VG8iLCAibmFtZSI6ICJIb3cgdG8gRXhwb3NlIGEgUmV0aWN1bHVtIFRDUCBTZXJ2ZXIgSW50ZXJmYWNlIHdpdGggUGluZ2d5IiwgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIFJldGljdWx1bSwgcnVubmluZyBhIFRDUCBTZXJ2ZXIgSW50ZXJmYWNlLCBhbmQgbWFraW5nIGl0IHJlYWNoYWJsZSB0byBvdGhlciBSZXRpY3VsdW0gbm9kZXMgb3ZlciB0aGUgaW50ZXJuZXQgdXNpbmcgYSBQaW5nZ3kgdHVubmVsLCB3aXRob3V0IHJvdXRlciBwb3J0IGZvcndhcmRpbmcuIiwgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9yZXRpY3VsdW1fZGVjZW50cmFsaXplZF9tZXNoX25ldHdvcmsvcmV0aWN1bHVtX2RlY2VudHJhbGl6ZWRfbWVzaF9uZXR3b3JrX2Jhbm5lci53ZWJwIiwgInN0ZXAiOiBbeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJJbnN0YWxsIFJldGljdWx1bSIsICJ0ZXh0IjogIlJ1biBwaXAgaW5zdGFsbCBybnMgdG8gaW5zdGFsbCB0aGUgUmV0aWN1bHVtIG5ldHdvcmtpbmcgc3RhY2suIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU3RhcnQgdGhlIGRhZW1vbiIsICJ0ZXh0IjogIlJ1biBybnNkIHRvIHN0YXJ0IHRoZSBSZXRpY3VsdW0gZGFlbW9uLCB3aGljaCBnZW5lcmF0ZXMgYSBkZWZhdWx0IGNvbmZpZyBhbmQgaWRlbnRpdHkgYXQgfi8ucmV0aWN1bHVtL2NvbmZpZyBvbiBmaXJzdCBydW4uIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiRW5hYmxlIGEgVENQIFNlcnZlciBJbnRlcmZhY2UiLCAidGV4dCI6ICJBZGQgYSBUQ1BTZXJ2ZXJJbnRlcmZhY2UgYmxvY2sgdG8gdGhlIGNvbmZpZyBsaXN0ZW5pbmcgb24gYSBjaG9zZW4gcG9ydCwgc3VjaCBhcyA0MjQyLCBzbyBvdGhlciBSZXRpY3VsdW0gbm9kZXMgY2FuIGNvbm5lY3Qgb3ZlciBUQ1AuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiRXhwb3NlIHRoZSBwb3J0IHdpdGggUGluZ2d5IiwgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo0MjQyIHRjcEBmcmVlLnBpbmdneS5pbyB0byBvcGVuIGEgcHVibGljIFRDUCB0dW5uZWwgdG8gdGhhdCBwb3J0LCBieXBhc3Npbmcgcm91dGVyIHBvcnQgZm9yd2FyZGluZyBhbmQgQ0dOQVQuIn0sIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiUGVlciB3aXRoIHRoZSBwdWJsaWMgYWRkcmVzcyIsICJ0ZXh0IjogIlNoYXJlIHRoZSBQaW5nZ3kgaG9zdG5hbWUgYW5kIHBvcnQgd2l0aCBvdGhlciBub2RlIG9wZXJhdG9ycywgd2hvIGFkZCBpdCBhcyBhIFRDUENsaWVudEludGVyZmFjZSB0YXJnZXRfaG9zdCBhbmQgdGFyZ2V0X3BvcnQgdG8gcGVlciB3aXRoIHlvdXIgbm9kZS4ifV19Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "reticulum_decentralized_mesh_network/reticulum_decentralized_mesh_network_banner.webp" "Diagram of a Reticulum mesh network connecting nodes over LoRa radio, packet radio, TCP, NomadNet, and Sideband clients" >}}

A Reticulum link stays up on a channel that pushes 5 bits per second. Not 5 kilobits, not 5 megabits - 5 bits. That number sits right in the manual, next to a 500-byte MTU, as the floor the protocol is designed to tolerate. Most networking stacks would fall over long before that; Reticulum treats it as a normal operating condition, because it was built for links a lot worse than your home WiFi: LoRa radios, packet radio over ham bands, and anything else that can move a handful of bytes between two points.

{{< link href="https://github.com/markqvist/Reticulum" >}}Reticulum{{< /link >}} is a full networking stack, not a library you bolt onto TCP/IP. It handles addressing, routing, and encryption itself, and it treats whatever physical medium is available - LoRa, WiFi, Ethernet, a serial line, a packet radio TNC, even a plain internet connection - as an interchangeable transport underneath. Encryption is not optional and there is no way to send a packet without it. There's no DNS, no IP allocation authority, and no source address on the wire at all.

{{% tldr %}}
1. **What it is**: an open-source, MIT-licensed (with added ethical-use clauses) networking stack that runs entirely in Python userland and works over LoRa, packet radio, WiFi/Ethernet, I2P, serial links, or plain TCP/IP.
2. **Addressing**: every endpoint is a cryptographic identity built on X25519 and Ed25519 keys. There's no central registry, no source address on packets, and forward secrecy on every link by default.
3. **How low it goes**: designed to keep working down to roughly 5 bits per second of throughput and a 500-byte MTU, and it runs on hardware as small as a Raspberry Pi Zero.
4. **What's built on it**: <a href="https://github.com/markqvist/NomadNet" target="_blank">NomadNet</a> for terminal-based off-grid messaging and micron pages, <a href="https://github.com/markqvist/Sideband" target="_blank">Sideband</a> for a mobile/desktop LXMF client with voice and telemetry, and <a href="https://github.com/liamcottle/reticulum-meshchat" target="_blank">MeshChat</a> for a browser-based UI - all interoperable over the same network.
5. **The governance story**: creator Mark Qvist added AI-training and harm-prevention clauses to the license in April 2025, which put it out of step with strict open-source packaging rules, then stepped back from public development by the end of that year. The project is community-maintained going forward.
6. **Where a tunnel fits**: Reticulum's `TCPServerInterface` lets other nodes reach you over the open internet, but it still needs a port that's actually reachable from outside your router. [Pinggy](https://pinggy.io) exposes that port with one SSH command, which matters a lot if your ISP runs CGNAT.
{{% /tldr %}}

## What problem this is actually solving

Every mainstream network you use assumes a chain of things you don't control: an ISP handing you an address, a DNS resolver you're trusting, routing hardware operated by companies that can throttle, log, or simply cut you off. Reticulum's manual states the goal plainly: let anyone "operate their own sovereign communication networks," and make it "cheap and easy to cover vast areas with a myriad of independent, interconnectable and autonomous networks."

That's not an abstract complaint about big tech. It's a concrete design constraint. Reticulum is meant to keep working when the assumptions above don't hold - during a disaster when cell towers are down, in a region where the internet is filtered or shut off, or just for a community mesh built with radios that nobody owns, licenses, or can revoke access to.

{{< image "reticulum_decentralized_mesh_network/reticulum_github_repo.webp" "The Reticulum GitHub repository showing 6.9k stars, 506 forks, and topic tags including lora, mesh, packet-radio, and networking-stack" >}}

## No source addresses, no central registry

The addressing model is the part that trips people up first. In Reticulum, an identity is a keypair: 512 bits of elliptic-curve key material combining X25519 for encryption and Ed25519 for signing. Your address is derived from your public key, not assigned by anyone. Two people can generate identities on opposite sides of the planet with zero chance of collision, and zero coordination required.

Packets carry a destination hash but never a source address. That's a deliberate anonymity property, not an accident of the routing design: an eavesdropper watching traffic pass through a relay can't tell who sent a packet, only where it's headed. Every link additionally negotiates ephemeral keys over ECDH on Curve25519, so compromising one session's key doesn't expose past or future traffic - forward secrecy is on by default, not an opt-in mode.

Routing is fully self-configuring. Reticulum instances announce their presence, and paths propagate through the network automatically as multi-hop routes with no manual configuration, no routing tables to maintain, and no need for symmetric link speeds - a node reachable only over a slow LoRa hop and a node on gigabit Ethernet interoperate through the same protocol without either side needing to know the other's transport.

## Any wire will do

The interface abstraction is where the "unstoppable networks" pitch turns into something you can actually run. Reticulum ships a dozen-plus interface types, and you mix them freely on the same node:

- **AutoInterface** - zero-config discovery of other Reticulum nodes over local WiFi or Ethernet
- **RNodeInterface** / **RNodeMultiInterface** - full control over LoRa radio parameters through RNode transceivers, including boards with multiple radios
- **TCPServerInterface** / **TCPClientInterface** - connects over ordinary IPv4/IPv6, including the internet
- **UDPInterface** - broadcast-capable transport for private or internet IP networks
- **I2PInterface** - routes over I2P for an extra layer of network-level anonymity
- **SerialInterface** / **KISSInterface** / **AX25KISSInterface** - packet radio TNCs and amateur radio gear, including AX.25 framing for ham bands
- **PipeInterface** - hands off to any external program over stdin/stdout, so you can bridge in something Reticulum doesn't support natively

A single Raspberry Pi can run several of these interfaces at once - an RNode on one USB port, a packet radio TNC on another, and a WiFi AutoInterface - and Reticulum will route between them transparently. A message can leave a phone over LoRa, hop through that Pi onto a TCP link to another city, and land on someone's laptop, and none of the applications on either end need to know the path changed medium three times.

## Interoperable apps, not one client

Reticulum itself is a transport layer; the things people actually use sit on top of it, and they all talk to each other over LXMF, the messaging protocol built on Reticulum:

- **{{< link href="https://github.com/markqvist/NomadNet" >}}NomadNet{{< /link >}}** is a terminal application for off-grid messaging, plus "micron" pages - lightweight, decentralized web pages served directly from other Reticulum nodes, no hosting provider involved.
- **{{< link href="https://github.com/markqvist/Sideband" >}}Sideband{{< /link >}}** is the mobile/desktop client, with end-to-end encrypted messaging, voice calls over the LXST protocol (using Codec2 or Opus depending on link quality), location and telemetry sharing, and a plugin system for custom commands. It runs on Android, Linux, macOS, and Windows, and it's picked up around 1.7k GitHub stars.
- **{{< link href="https://github.com/liamcottle/reticulum-meshchat" >}}MeshChat{{< /link >}}** wraps the same network in a browser-based UI, and can send and receive messages, images, and voice recordings with both Sideband and NomadNet users.

None of these require you to pick a network first and then find people on it. You configure interfaces on your node, and whichever app you run talks to anyone else reachable through those interfaces, on whatever combination of radio and wire got the packets there.

## The founder stepped back, and the license got complicated

Mark Qvist built essentially all of this - the protocol, the reference implementation, the firmware for RNode radios, and the flagship apps - largely by himself, and put the protocol itself in the public domain back in 2016.

In April 2025, he changed the license on his reference code. It's still built on MIT terms, but with two clauses added on top: the software can't be used to build an AI/ML training dataset, and it can't be used in a system designed to purposefully harm people. Both are understandable goals on their own, but neither is compatible with the Open Source Initiative's definition of open source, which prohibits restricting use by field of endeavor. That single change was enough to put Reticulum out of step with the license policies that strict distribution channels - the kind of Linux distros and app stores that vet every package's license before accepting it - require before they'll carry a piece of software at all.

By the end of 2025, Qvist had stepped back from public engagement with the project entirely, while the code itself kept moving. At FOSDEM 2026, a community talk was specifically titled around what comes next: continuing development, handling the license question, and keeping alternate implementations - Rust and other language ports have shown up around the ecosystem - moving forward without a single maintainer at the center.

It's a strange position for a project whose entire pitch is resilience against single points of failure: the protocol survives losing its own founder for the same reason it survives losing an ISP. The spec is public domain, the reference implementation is open, and nothing about the network depends on Qvist personally running any of it.

## Reticulum vs. Meshtastic

If you've heard of mesh radio networking at all, it's probably through {{< link href="https://meshtastic.org/" >}}Meshtastic{{< /link >}}, which has its own enthusiastic following. The comparison is worth making because the two solve different layers of the same problem.

Meshtastic treats the LoRa radio itself as the network - firmware runs directly on the radio hardware, and the mesh protocol is tightly coupled to that one physical layer. It's simple to get running and that's exactly the point.

Reticulum is a layer below that kind of decision. It doesn't care whether the physical medium is LoRa, packet radio, WiFi, or a TCP socket over the open internet, and it can carry all of them on the same node simultaneously. That flexibility costs you some of Meshtastic's plug-and-play simplicity - you're configuring interfaces and running a Python daemon, not flashing one firmware image - but it buys you a network that isn't tied to owning specific radio hardware at all. You can run a fully functional Reticulum node with nothing but an internet connection.

## Getting a node running

Reticulum runs anywhere Python 3 does. The minimal path:

```bash
pip install rns
```

Then start the background daemon:

```bash
rnsd
```

The first run generates a default config at `~/.reticulum/config`, along with a fresh identity keypair. To see every available interface option written out, generate an example config instead of the minimal one:

```bash
rnsd --exampleconfig
```

Out of the box, a fresh install with the default `AutoInterface` will find and talk to any other Reticulum node on your local network with zero further setup. From there, `rnstatus` shows you the interfaces and paths your node currently knows about, and `rnpath` lets you query whether a specific destination is reachable.

## Where Pinggy fits

Reticulum's `TCPServerInterface` is the piece that lets your node act as a rendezvous point for other people's nodes over the open internet - useful if you're running a Nomad Network hub, bridging two physically separate mesh islands, or just want friends to be able to peer with you without both of you owning radio hardware. The config is short:

```
[[TCP Server Interface]]
  type = TCPServerInterface
  enabled = yes
  listen_ip = 0.0.0.0
  listen_port = 4242
```

The catch is the same one every self-hosted service runs into: `listen_port = 4242` only matters if something outside your network can actually reach it. On a home connection, that means router port forwarding, which plenty of ISPs make difficult or impossible outright behind CGNAT (carrier-grade NAT), a setup common enough on mobile and some residential ISPs that you may not even have a public IP to forward to.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} solves that by opening a raw TCP tunnel from its edge straight to the port on your machine, no router configuration or public IP required:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:4242 tcp@free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:4242 tcp@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:4242 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:4242 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:4242 tcp@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:4242 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:4242 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:4242 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:4242 tcp@free.pinggy.io\"}}}"
{{</ ssh_command >}}

That prints back a public hostname and port. Give those to whoever you want peering with your node, and they add you as a `TCPClientInterface` pointing at that address instead of your home IP:

```
[[TCP Client Interface]]
  type = TCPClientInterface
  enabled = yes
  target_host = your-tunnel-hostname.a.pinggy.link
  target_port = 43219
```

It's a small piece of the overall picture - Reticulum's whole point is that it doesn't need any single piece of internet infrastructure to function - but for the specific job of bridging your node onto the wider internet-connected part of the network without fighting your router, it's the fastest path there.

## The bigger picture

Reticulum is one of the more complete answers to "what would a network stack look like if it were designed today, for hostile and unreliable links, by someone who didn't assume an ISP was always in the loop." The cryptography is solid, the interface abstraction genuinely works across wildly different physical mediums, and the app ecosystem on top of it - NomadNet, Sideband, MeshChat - is far enough along to actually use daily, not just prototype with.

The governance transition is the part worth watching. A network stack whose entire premise is "no single point of failure" is now testing that premise on itself, minus the one person who wrote nearly all of it. If the community keeps the reference implementation, the alternate language ports, and the license question moving without Qvist at the center, it's a pretty good demonstration that the architecture works exactly as advertised.

The project lives on {{< link href="https://github.com/markqvist/Reticulum" >}}GitHub{{< /link >}}, and the full manual - interfaces, cryptography details, and hardware guides included - is at {{< link href="https://reticulum.network/manual/" >}}reticulum.network{{< /link >}}.
