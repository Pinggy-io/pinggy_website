---
title: "SimpleX Chat: Private Messaging Without Any User Identifiers - and How to Run Your Own Relay"
description: "SimpleX Chat is the only messenger that assigns no user identifier whatsoever - no phone number, no email, not even a random ID. Learn how it works and how to self-host your own SMP relay and expose it with a Pinggy TCP tunnel."
date: 2026-06-29T14:30:00+05:30
lastmod: 2026-06-29T14:30:00+05:30
draft: false
tags: ["SimpleX", "privacy", "self-hosted", "messaging", "SMP server", "TCP tunnel", "Pinggy", "end-to-end encryption", "open source", "Docker"]
categories: ["Technology", "Privacy", "Self-Hosting"]
og_image: "images/simplex_chat_private_relay/simplex_chat_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBhIFNpbXBsZVggQ2hhdCBTTVAgUmVsYXkgYW5kIEV4cG9zZSBJdCB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBydW5uaW5nIGEgU2ltcGxlWCBTTVAgcmVsYXkgc2VydmVyIHdpdGggRG9ja2VyIGFuZCBtYWtpbmcgaXQgcHVibGljbHkgYWNjZXNzaWJsZSBmcm9tIGJlaGluZCBOQVQgdXNpbmcgYSBQaW5nZ3kgVENQIHR1bm5lbC4iLAogICJ0b3RhbFRpbWUiOiAiUFQxNU0iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIGRpcmVjdG9yaWVzIGFuZCBwdWxsIHRoZSBTTVAgc2VydmVyIGltYWdlIiwKICAgICAgInRleHQiOiAiUnVuOiBta2RpciAtcCAkSE9NRS9zaW1wbGV4L3NtcC97Y29uZmlnLGxvZ3N9IHRvIGNyZWF0ZSBwZXJzaXN0ZW50IHN0b3JhZ2UgZGlyZWN0b3JpZXMgZm9yIHRoZSByZWxheSBzZXJ2ZXIgY29uZmlnIGFuZCBsb2dzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgU01QIHJlbGF5IHdpdGggRG9ja2VyIiwKICAgICAgInRleHQiOiAiUnVuOiBkb2NrZXIgcnVuIC1kIC1lIFwiQUREUj1sb2NhbGhvc3RcIiAtcCA1MjIzOjUyMjMgLXYgJEhPTUUvc2ltcGxleC9zbXAvY29uZmlnOi9ldGMvb3B0L3NpbXBsZXg6eiAtdiAkSE9NRS9zaW1wbGV4L3NtcC9sb2dzOi92YXIvb3B0L3NpbXBsZXg6eiAtLW5hbWUgc2ltcGxleC1zbXAgc2ltcGxleGNoYXQvc21wLXNlcnZlcjpsYXRlc3QgdG8gc3RhcnQgdGhlIHJlbGF5IG9uIHBvcnQgNTIyMy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiR2V0IHRoZSByZWxheSBjZXJ0aWZpY2F0ZSBmaW5nZXJwcmludCIsCiAgICAgICJ0ZXh0IjogIlJ1bjogZG9ja2VyIGV4ZWMgc2ltcGxleC1zbXAgY2F0IC9ldGMvb3B0L3NpbXBsZXgvZmluZ2VycHJpbnQgdG8gcmV0cmlldmUgdGhlIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHRoYXQgZm9ybXMgcGFydCBvZiB0aGUgU01QIHNlcnZlciBhZGRyZXNzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJPcGVuIGEgUGluZ2d5IFRDUCB0dW5uZWwgdG8gcG9ydCA1MjIzIiwKICAgICAgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwgcnVuOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NTIyMyBmcmVlLnBpbmdneS5pbyB0byByZWNlaXZlIGEgcHVibGljIFRDUCBhZGRyZXNzIGxpa2UgdGNwOi8vYWJjMTIzLmEucGluZ2d5Lmxpbms6NDA1MjcuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkJ1aWxkIHRoZSBmdWxsIFNNUCBzZXJ2ZXIgYWRkcmVzcyIsCiAgICAgICJ0ZXh0IjogIkNvbWJpbmUgdGhlIGZpbmdlcnByaW50IHdpdGggdGhlIFBpbmdneSBwdWJsaWMgaG9zdCBhbmQgcG9ydDogc21wOi8vPGZpbmdlcnByaW50PkBhYmMxMjMuYS5waW5nZ3kubGluazo0MDUyNy4gVGhpcyBpcyB3aGF0IHlvdSBzaGFyZSB3aXRoIGNvbnRhY3RzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBZGQgdGhlIHJlbGF5IGluIHRoZSBTaW1wbGVYIGFwcCIsCiAgICAgICJ0ZXh0IjogIkluIFNpbXBsZVgsIGdvIHRvIFNldHRpbmdzID4gTmV0d29yayBhbmQgU2VydmVycyA+IFNNUCBTZXJ2ZXJzID4gQWRkIHNlcnZlci4gUGFzdGUgdGhlIHNtcDovLyBhZGRyZXNzIGFuZCBzYXZlLiBUZXN0IHRoZSBjb25uZWN0aW9uIGZyb20gdGhlIHNhbWUgc2NyZWVuLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "simplex_chat_private_relay/simplex_chat_banner.webp" "SimpleX Chat: messaging with no user identifiers of any kind" >}}

Every messaging app knows who you are. Signal requires your phone number. Telegram wants your number too. Matrix assigns you a `@username:homeserver` that follows you everywhere. Even the "private" options that use random-ID accounts still create a persistent identifier the server stores and can correlate over time.

<a href="https://github.com/simplex-chat/simplex-chat" target="_blank">SimpleX Chat</a> takes a different approach: it assigns no identifier to users whatsoever. No phone number, no email, no username, not even a randomly generated UUID. The server has no user records to subpoena, correlate, or leak. The project just crossed 17,000 GitHub stars and gained over 1,200 stars in a single day this week - which is a pretty good signal that people are paying attention.

This post covers how SimpleX actually pulls this off technically and walks through running your own relay server at home, accessible from anywhere via a Pinggy TCP tunnel.

{{< llm-context >}}To self-host a SimpleX SMP relay with Pinggy - run `docker run -d -e "ADDR=localhost" -p 5223:5223 -v $HOME/simplex/smp/config:/etc/opt/simplex:z -v $HOME/simplex/smp/logs:/var/opt/simplex:z --name simplex-smp simplexchat/smp-server:latest` (starts on port 5223), then in a new terminal run `ssh -p 443 -R0:localhost:5223 free.pinggy.io` to get a public TCP address. Build your server address as `smp://<fingerprint>@<pinggy-host>:<pinggy-port>` and add it in the SimpleX app under Settings > Network and Servers > SMP Servers.{{< /llm-context >}}

{{% tldr %}}
1. **Why SimpleX is different**: no user IDs of any kind - the server never knows who is talking to whom
2. **How it works**: pairwise per-queue identifiers, unidirectional message queues, Double Ratchet E2E encryption + post-quantum key exchange
3. **Start relay**: `docker run -d -e "ADDR=localhost" -p 5223:5223 -v $HOME/simplex/smp/config:/etc/opt/simplex:z -v $HOME/simplex/smp/logs:/var/opt/simplex:z --name simplex-smp simplexchat/smp-server:latest`
4. **Get fingerprint**: `docker exec simplex-smp cat /etc/opt/simplex/fingerprint`
5. **Expose via Pinggy**: `ssh -p 443 -R0:localhost:5223 free.pinggy.io` - note the returned TCP address
6. **Your server address**: `smp://<fingerprint>@<pinggy-host>:<pinggy-port>`
7. **Add to app**: Settings > Network and Servers > SMP Servers > Add server
{{% /tldr %}}

## What other messengers get wrong

The problem with Signal-style privacy is that the phone number requirement creates a real-world identity anchor. The server might not read your messages, but it knows `+1-555-0123` sent 47 messages yesterday, mostly to `+1-555-0456`. Traffic analysis on that is meaningful.

Matrix assigns `@alice:matrix.org` - a persistent, globally unique identifier. Your contacts know it, servers know it, and federation means it travels everywhere.

Even messengers that let you create a "username" instead of giving a phone number still create a user record. The server knows: this account exists, here is its key, here is its message history.

SimpleX's insight is that none of that is necessary if you flip the model. Instead of "users have identities, and they send messages to each other," you have "conversations are made of message queues, and queues have no user attached."

## How the protocol actually works

The core primitive is a **simplex message queue** - one-directional, created by the recipient. When Alice wants to talk to Bob, the flow is roughly:

1. Alice generates a one-time invitation link (or a QR code)
2. Bob scans it, which creates **two queues**: one for Alice → Bob, one for Bob → Alice
3. Each queue lives on an SMP relay server, identified by a pair of random send/receive addresses

Those queue addresses are different for every conversation pair. Alice's address for talking to Bob has no connection to Alice's address for talking to Carol. The server sees queue IDs, never user IDs. There is nothing to join them.

This is what "pairwise per-queue identifiers" means in practice: the server could be compromised, the logs subpoenaed, the traffic analyzed - it still cannot tell you who Alice is, because Alice does not exist as a server-side concept.

### Starting a conversation

The only way to connect on SimpleX is through an out-of-band channel - someone sends you a link directly, you scan a QR code in person, or you publish a long-lived address (which SimpleX calls a user address, though it's really just a persistent queue). That friction is intentional. There is no search directory, no username lookup, no phone book. You can only contact people you already have some way to reach.

### Encryption stack

Messages are encrypted with the Signal Double Ratchet algorithm using Curve448 keys - the same construction Signal uses, chosen for forward secrecy and post-compromise security. Since v5.x, SimpleX also applies a post-quantum key exchange (using CRYSTALS-Kyber) on every ratchet step, not just at session setup. That means even a future quantum adversary who recorded your traffic today cannot decrypt it later.

There is also per-queue encryption using NaCl cryptobox (Curve25519) between client and server, so the relay cannot read message content even if it wanted to. Message metadata - timestamps, sender/receiver queue IDs per session - travels inside encrypted envelopes.

From v6.0 onward, private message routing is on by default: messages route through an additional relay hop so that your SMP relay does not learn your IP address.

### What the relay server actually stores

Very little. The SMP server implementation uses **in-memory message storage** - messages are held temporarily until the recipient retrieves them, then gone. If the server restarts, undelivered messages are lost. The only persistent data is queue records (the random send/receive address pairs) and TLS certificates.

This is a deliberate tradeoff. It means your relay server has essentially no interesting data on disk. The downside is that offline message delivery is limited to whatever fits in the in-flight buffer.

## Running your own relay

The official Docker image is `simplexchat/smp-server`. You need Docker installed, and port 5223 needs to be reachable from the internet - that second part is where Pinggy comes in if you're on a home connection or behind CGNAT.

**Step 1 - Create storage directories**

```bash
mkdir -p $HOME/simplex/smp/{config,logs}
```

**Step 2 - Start the relay**

```bash
docker run -d \
  -e "ADDR=localhost" \
  -p 5223:5223 \
  -v $HOME/simplex/smp/config:/etc/opt/simplex:z \
  -v $HOME/simplex/smp/logs:/var/opt/simplex:z \
  --name simplex-smp \
  simplexchat/smp-server:latest
```

On first run, the container generates a TLS certificate and CA key, initializes the queue storage, and starts listening on 5223. The `ADDR=localhost` environment variable is what the server puts in its generated address string - you'll override this with your actual public address once you have it.

**Step 3 - Get the fingerprint**

```bash
docker exec simplex-smp cat /etc/opt/simplex/fingerprint
```

This outputs something like `kSoQ9cONHYNnNIKgNmBoMZ7hfHs_3lsH7OsxH40oVh4=`. That fingerprint is computed from the offline CA certificate and is what your contacts use to verify they're talking to your relay, not a MITM. Keep it - you'll need it to build the full server address.

The <a href="https://github.com/simplex-chat/simplex-chat/blob/stable/docs/SERVER.md" target="_blank">official docs</a> also recommend deleting the CA private key from the server after initialization for better security, since the CA key is only needed to regenerate server certs and keeping it around is an unnecessary risk.

## Exposing the relay with Pinggy

Home internet connections don't get incoming TCP connections - your ISP puts you behind NAT, sometimes CGNAT, and port 5223 on your machine isn't reachable from the outside. Pinggy fixes this with a TCP tunnel that requires no port forwarding and no public IP.

The SMP relay uses a raw TCP connection (with TLS on top). Pinggy's TCP tunnel passes traffic transparently - the SMP server's TLS handshake goes directly to the connecting client with no interference, so the certificate fingerprint the client sees matches the one you retrieved in Step 3.

**Step 4 - Open the Pinggy TCP tunnel**

```bash
ssh -p 443 -R0:localhost:5223 free.pinggy.io
```

Pinggy returns a public TCP address:

```
tcp://abc123xyz.a.pinggy.link:40527
```

The host and port here are what your contacts will connect to. Write them down.

{{< image "simplex_chat_private_relay/simplex_pinggy_arch.webp" "Architecture diagram: SimpleX app connects through Pinggy TCP tunnel to self-hosted SMP relay behind NAT" >}}

**Step 5 - Construct the server address**

Your full SMP server address is:

```
smp://<fingerprint>@<pinggy-host>:<pinggy-port>
```

For the example above:

```
smp://kSoQ9cONHYNnNIKgNmBoMZ7hfHs_3lsH7OsxH40oVh4=@abc123xyz.a.pinggy.link:40527
```

This is the string you add to the SimpleX app and share with people you want to route through your relay.

## Adding the relay to SimpleX

In the SimpleX app on iOS or Android: **Settings > Network and Servers > SMP Servers > Add server**. Paste the `smp://` address and tap Save. There's a built-in connection test on the same screen - tap it to confirm Pinggy is forwarding traffic to your relay correctly.

You can set your relay as the default server for new conversations. Contacts who use your relay also need to add it the same way (or you can share the link via SimpleX's QR scanner built into the server settings screen).

One important note: you can still communicate with people who use SimpleX's default public relays. The two relay sets don't need to be the same - SimpleX routes each queue independently.

## Tradeoffs to know about

**Pinggy free tier gives random addresses.** Each time the tunnel restarts, you get a different hostname and port. That means your `smp://` server address changes, and any contacts using your relay need the updated address. For occasional testing this is fine. For a relay you actually rely on, you want a persistent address - Pinggy's paid plans give you a fixed hostname that survives tunnel restarts.

**Messages don't survive restarts.** The SMP server holds in-flight messages in memory only. If the container or the tunnel goes down while messages are queued, those messages are dropped. Clients retry on reconnect, so most short outages recover transparently, but long outages (hours) can cause message loss. If reliability matters, you want to run the SMP server on something with decent uptime - a Raspberry Pi on a home UPS, or a small VPS.

**The server address is permanent per key.** The fingerprint is tied to the certificate generated at first startup. If you delete and re-run the container without preserving the config volume, you get a new fingerprint and a new server identity. Your contacts' copy of the address breaks. The volume mount (`-v $HOME/simplex/smp/config:/etc/opt/simplex`) keeps the certificate persistent across container restarts.

**Password protection is optional but recommended.** The SMP server supports a password that clients must include in the server address: `smp://<fingerprint>:<password>@<host>:<port>`. Set it with `-e "PASS=yourpassword"` in the Docker run command. Without it, anyone who discovers your relay's address can use it to route their traffic through your server.

## What you get from running your own relay

The public SimpleX relays run by the SimpleX team are free and available, so the question is when it makes sense to run your own. The honest answer is: not for most people. If you just want private messaging, the default setup is already much more private than any mainstream messenger.

The use cases where self-hosting makes sense are:
- Small teams or families who want zero dependency on a third-party relay for their communication
- Situations where you have specific trust requirements (legal, journalistic, organizational)
- Testing and development on the SMP protocol itself
- Learning how the system actually works

The Pinggy angle is specifically for running a relay at home without a dedicated server or static IP. For a production relay, a small VPS with a fixed IP and proper hostname is simpler and more reliable.

## What SimpleX gets right

The comparison to Signal is useful here. Signal is good. Its encryption is solid. But Signal knows your phone number, your contacts list (via sealed sender it's blinded, but your number is the root), and your message timing. It's also a US company with an address that can receive legal process.

SimpleX's model is structurally more private by design - the relay server genuinely doesn't know who its users are. There's no user record to hand over, no metadata graph to analyze. That's not a feature flag or a privacy policy. It's the protocol.

The tradeoff is usability. No phone number means no lookup, no sync. You have to exchange contacts deliberately. Group chats and file transfers exist but work differently from Signal. The client apps are polished but feel less refined than Signal's in places.

For most people, Signal is probably still the right answer. For people who need the extra property that the server literally cannot identify them, SimpleX is doing something genuinely different.

The self-hosted relay story is a nice extra: if you don't want your message metadata touching anyone else's infrastructure at all, you can route all your traffic through a relay you control. Pinggy gets that relay online in about five minutes.

---

*SimpleX Chat is open source under AGPL-3.0. The iOS and Android clients are available at the links in the <a href="https://github.com/simplex-chat/simplex-chat" target="_blank">GitHub repository</a>. The SMP server Docker image is `simplexchat/smp-server` on Docker Hub. Pinggy TCP tunnels are documented at <a href="https://pinggy.io/docs/tcp_tunnels/" target="_blank">pinggy.io/docs/tcp_tunnels</a>.*
