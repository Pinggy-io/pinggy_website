---
title: "Self-Host a SimpleX Chat Relay Server Without a VPS Using Pinggy"
description: "SimpleX Chat hit #1 on GitHub trending with a design that eliminates user identifiers entirely. Here's how to run your own private SMP relay server locally and expose it to the internet with Pinggy - no VPS, no static IP required."
date: 2026-06-28T10:00:00+05:30
lastmod: 2026-06-28T10:00:00+05:30
draft: false
tags: ["SimpleX Chat", "self-hosted", "privacy", "messaging", "docker", "SMP server", "TCP tunnel", "pinggy"]
categories: ["Self-Hosting", "Privacy", "Tutorial"]
og_image: "images/self_host_simplex_chat_relay/self_host_simplex_chat_relay_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host a SimpleX Chat SMP relay server and expose it publicly - run `docker run -d -e "ADDR=<your-pinggy-host>" -p 5223:5223 simplexchat/smp-server:latest` (starts on port 5223), then in a new terminal run `ssh -p 443 -R0:localhost:5223 free.pinggy.io` to get a public TCP address. Use the Pinggy TCP address and SMP server fingerprint to configure SimpleX Chat clients.{{< /llm-context >}}

{{< image "self_host_simplex_chat_relay/self_host_simplex_chat_relay_banner.webp" "Self-host a SimpleX Chat SMP relay server and expose it with Pinggy TCP tunneling" >}}

<a href="https://github.com/simplex-chat/simplex-chat" target="_blank">SimpleX Chat</a> hit #1 on GitHub trending this week, gaining over 1,600 stars in a single day. The repo now sits past 16,000 stars and shows no sign of slowing. The reason people care isn't hard to find: it's the first messaging network designed from scratch without any user identifiers - not a username, not a phone number, not even an anonymous random ID. The network literally cannot correlate users across connections.

Most people use SimpleX with the default relay servers the team runs. That works fine, and the end-to-end encryption means even the relay operator can't read your messages. But if you want zero metadata exposure to any third party - or if you're running a small team that wants full stack control - you can run your own relay. It takes about ten minutes, and you don't need a VPS or a static IP to try it. Pinggy handles the public exposure over an SSH tunnel.

{{% tldr %}}
1. Pull and start the SMP server Docker container with your Pinggy address as `ADDR`
2. Start a Pinggy TCP tunnel: `ssh -p 443 -R0:localhost:5223 free.pinggy.io`
3. Use the tunnel host and SMP fingerprint to configure the SimpleX app on any device
{{% /tldr %}}

## What SimpleX actually is

The standard privacy pitch is end-to-end encryption. SimpleX does that too, using the Signal double-ratchet algorithm with post-quantum key exchange on every ratchet step. But the more interesting design choice is one level up: there are no user identifiers at the network layer.

Every time you start a conversation, SimpleX creates two one-way message queues, one for each direction. The identifiers attached to those queues are unique per queue and change over time. An observer who can see relay traffic cannot tell that the queue you're using to receive from Alice is related to the queue you're using to send to Bob. Even if they own the relay.

The relay servers - called SMP servers, for SimpleX Messaging Protocol - store messages briefly in memory until the recipient picks them up. They don't know who you are. They just know "someone deposited a message for queue X, and later someone retrieved it." Queue IDs rotate. The relay doesn't log connections. There's no account to subpoena.

Running your own relay means that even that minimal relay-side picture lives on hardware you control.

## What Pinggy does here

The SMP server listens on TCP port 5223. For another SimpleX client to reach it, that port has to be reachable from the public internet.

If you're on a home connection, you're almost certainly behind NAT and a carrier firewall. Port forwarding through your router is one option, but it requires a static IP, depends on your router firmware cooperating, and is a pain to set up reliably.

Pinggy creates an SSH reverse tunnel from your machine to Pinggy's edge servers. When traffic arrives at the Pinggy TCP endpoint, it gets forwarded back through the tunnel to your local port 5223. The SMP client on a remote phone thinks it's talking to a public host - it's actually talking to the SMP server running in Docker on your laptop.

The free tier gives you a fresh TCP address each session. That's fine for testing and for small groups where you can share an updated address. For a permanent relay, {{< link href="https://pinggy.io/#prices" >}}Pinggy's paid plan{{< /link >}} gives you a persistent TCP address that doesn't change between restarts.

## Prerequisites

You need Docker. That's the only hard dependency. The SMP server image is about 50 MB and self-contained.

You also need an SSH client. It ships with every Linux and macOS machine and is included in Windows 10 and later via OpenSSH.

No domain name, no TLS certificate, no DNS setup, no firewall rules. The SMP server generates its own self-signed certificate on first start, and the certificate fingerprint is part of the server address you share with clients. That fingerprint is how clients verify they're talking to the right server even without a CA-signed cert.

## Step 1: Start the Pinggy tunnel first

Start the tunnel before starting the server, so you know what address to give the SMP container.

```bash
ssh -p 443 -R0:localhost:5223 free.pinggy.io
```

Pinggy prints a TCP address when the tunnel is up:

```
tcp://rndomstr.a.pinggy.link:40001
```

Keep this terminal open. The host part (`rndomstr.a.pinggy.link`) and port (`40001`) are what you'll use in the next step.

## Step 2: Pull and run the SMP server

Open a second terminal. Create directories for the server's config and data:

```bash
mkdir -p $HOME/simplex/smp/{config,data}
```

Start the container, substituting the Pinggy host and port you just got:

```bash
docker run -d \
  --name smp-server \
  -e "ADDR=rndomstr.a.pinggy.link" \
  -e "PORT=40001" \
  -p 5223:5223 \
  -v $HOME/simplex/smp/config:/etc/opt/simplex:z \
  -v $HOME/simplex/smp/data:/var/opt/simplex:z \
  simplexchat/smp-server:latest
```

The `ADDR` and `PORT` values tell the SMP server what address it should advertise as its public endpoint. On first run it creates a self-signed certificate and stores it in the config volume, then starts listening on port 5223.

Check the logs to confirm startup and grab the server fingerprint:

```bash
docker logs smp-server 2>&1 | grep -A2 "Server address"
```

The output will look like:

```
Server address:
smp://ABC123FINGERPRINT456==@rndomstr.a.pinggy.link:40001
```

That full string - `smp://fingerprint@host:port` - is your server address. Copy it. This is what you paste into SimpleX Chat on any device that should use your relay.

If you want to protect queue creation so only people you trust can create new queues on your relay, add `-e "PASS=yourpassword"` to the `docker run` command. The password gets embedded in the server address the same way: `smp://fingerprint:password@host:port`.

## Step 3: Add the server in SimpleX Chat

Open SimpleX Chat on any device. The path varies slightly by platform, but you're looking for **Settings > Network & Servers > SMP servers**.

Tap **Add server** and paste the full `smp://...` address. SimpleX validates the fingerprint against the server's certificate on first connection, so the TLS tunnel is pinned to your specific server from that moment on.

You can test the connection from the same settings screen. If it shows a green check, the tunnel is working.

By default, SimpleX uses your custom server for new contacts alongside the built-in preset servers. If you want to route everything through your own relay, turn off the preset servers in the same settings panel. Note that existing contacts keep their current queues - you'd need to use "Change receiving address" on each contact to move them to the new relay.

## Step 4: Share the address with teammates

The easiest way to onboard others is via QR code. In the SMP server settings screen, tap **Share server** to display a QR code encoding the full server address including the fingerprint. Anyone who scans it gets the server pre-configured in their SimpleX app.

Alternatively, just send the `smp://...` string over any channel - SimpleX recognizes it as a server link when pasted.

## What happens when the tunnel restarts

The SMP server's fingerprint is stable - it lives in the config volume and persists across container restarts. Only the Pinggy address changes when you reconnect the tunnel.

On the free tier, this means you need to:
1. Start a new Pinggy tunnel to get the new host/port
2. Update the container's `ADDR` / `PORT` environment variables (easiest to `docker rm` and re-run)
3. Share the new `smp://fingerprint@newhost:newport` with anyone using your relay

For a relay you want to run continuously, the right move is to use Pinggy with a persistent TCP address (available on paid plans) or to deploy the container on a cheap VPS with a real IP. The setup is identical; just skip the Pinggy step and use your VPS IP or hostname as `ADDR`.

## A note on message delivery

The SMP relay stores messages in memory until clients pick them up, with persistence enabled by default (queue records survive restarts, but in-flight messages may not). `STORE_LOG` can be enabled in the config file to improve persistence across restarts, but the design intent is that messages are short-lived on the relay - delivery latency is measured in seconds when clients are online.

If the relay is unreachable (tunnel down, container stopped), messages queue up on the sending client and retry. They'll deliver once the relay comes back, assuming the client is still around to retry. For a personal or team relay that's mostly up, this works fine. For something mission-critical, you'd want a proper server with guaranteed uptime.

## Monitoring

The SMP server exposes a control port on 5224 locally. You can query it with `nc`:

```bash
docker exec -it smp-server sh -c "nc 127.0.0.1 5224 <<< stats"
```

This returns queue counts, active connections, message throughput, and proxy statistics. Useful for getting a sense of load if you're running a shared relay.

You can also enable CSV stats logging by modifying `/etc/opt/simplex/smp-server.ini` in the config volume and setting `log_stats: on` under `[STORE_LOG]`. The daily stats file works with Grafana's CSV datasource if you want a dashboard.

## Why this matters

SimpleX is a serious attempt to build a messaging system with real privacy properties, not just encrypted payloads over a surveillance-friendly network. Running your own relay closes the last gap: the relay operator sees nothing, and the relay operator is you.

The Pinggy tunnel isn't production infrastructure - it's a fast way to stand up a relay on hardware you already own and verify that the setup works before you decide whether to commit to a VPS or a paid persistent tunnel. The fingerprint-based addressing means the server identity is stable even if the address changes, so migrating to a permanent setup later doesn't break established contacts.

If privacy in messaging matters to you - and given what's trending, a lot of people think it does - this is worth an afternoon.

---

**Links:**
- <a href="https://github.com/simplex-chat/simplex-chat" target="_blank">SimpleX Chat on GitHub</a>
- <a href="https://simplex.chat/docs/server.html" target="_blank">Official SMP server documentation</a>
- {{< link href="https://pinggy.io" >}}Pinggy - TCP and HTTP tunnels{{< /link >}}
