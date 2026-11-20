---
title: "Ngrok UDP Alternative"
description: "Ngrok has no UDP tunnels. Here's how to expose a local UDP service with the Pinggy CLI or the Pinggy App, test it with netcat, and which other tools carry UDP in 2026."
date: 2025-02-28T14:15:25+05:30
lastmod: 2026-11-18T14:15:25+05:30
draft: false
tags: ["Ngrok Alternative", "networking", "Pinggy"]
og_image: "images/ngrok_udp_alternative/Ngrok UDP Alternative.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNldHRpbmcgVXAgYSBVRFAgVHVubmVsIFVzaW5nIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIkhvdyB0byBleHBvc2UgYSBsb2NhbCBVRFAgc2VydmljZSB0aHJvdWdoIGEgUGluZ2d5IFVEUCB0dW5uZWwgd2l0aCB0aGUgUGluZ2d5IENMSSBvciB0aGUgUGluZ2d5IEFwcCwgYW5kIHRlc3QgaXQgd2l0aCBuZXRjYXQuIE5ncm9rIGRvZXMgbm90IHN1cHBvcnQgVURQIHR1bm5lbHMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL25ncm9rX3VkcF9hbHRlcm5hdGl2ZS9OZ3JvayBVRFAgQWx0ZXJuYXRpdmUucG5nIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI1LTAyLTI4VDE0OjE1OjI1KzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMThUMTQ6MTU6MjUrMDU6MzAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCB0aGUgUGluZ2d5IENMSSBmcm9tIGh0dHBzOi8vcGluZ2d5LmlvL2NsaS8gd2l0aCB0aGUgb25lLWxpbmUgaW5zdGFsbGVyIGZvciBtYWNPUywgTGludXggb3IgV2luZG93cywgb3Igd2l0aCBucG0gaW5zdGFsbCAtZyBwaW5nZ3kuIFVEUCB0dW5uZWxzIGNhbm5vdCBiZSBjcmVhdGVkIHdpdGggdGhlIHBsYWluIFNTSCBjb21tYW5kLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJSdW4gcGluZ2d5IC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwMDAgdWRwQGZyZWUucGluZ2d5LmlvLCByZXBsYWNpbmcgODAwMCB3aXRoIHRoZSBwb3J0IHlvdXIgVURQIHNlcnZpY2UgbGlzdGVucyBvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ29weSB0aGUgcHVibGljIGhvc3RuYW1lIGFuZCBVRFAgcG9ydCB0aGF0IFBpbmdneSBwcmludHMuIEZyZWUgdHVubmVscyBsYXN0IDYwIG1pbnV0ZXMgYW5kIGdldCBhIG5ldyBwb3J0IG9uIGV2ZXJ5IGNvbm5lY3Rpb247IFBpbmdneSBQcm8gY2FuIHJlc2VydmUgYSBwZXJzaXN0ZW50IFVEUCBwb3J0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJBbHRlcm5hdGl2ZWx5LCBpbnN0YWxsIHRoZSBQaW5nZ3kgQXBwIGZyb20gaHR0cHM6Ly9waW5nZ3kuaW8vYXBwLywgZ28gdG8gQ3JlYXRlIFR1bm5lbCwgcGljayBVRFAgVHVubmVsLCBzZXQgdGhlIGxvY2FsIHBvcnQsIGFuZCBjbGljayBTYXZlIGFuZCBTdGFydCBUdW5uZWwgdG8gZ2V0IGEgdWRwOi8vIGFkZHJlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlRlc3QgdGhlIHR1bm5lbCBieSBydW5uaW5nIG5jIC11IC1sIDgwMDAgb24gdGhlIGxvY2FsIG1hY2hpbmUgYW5kIHNlbmRpbmcgYSBkYXRhZ3JhbSBmcm9tIGFub3RoZXIgbWFjaGluZSB3aXRoIG5jIC11IHRvIHRoZSBwdWJsaWMgaG9zdG5hbWUgYW5kIHBvcnQuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< link href="https://ngrok.com" >}}Ngrok{{< /link >}} is the tool most people reach for when something on localhost needs to be online, but it only tunnels HTTP, TCP and TLS. There's no UDP, so a game server, a VoIP service, a DNS resolver or a WireGuard endpoint running on your machine can't go through it.

[Pinggy](https://pinggy.io) can carry UDP. Its [CLI](https://pinggy.io/cli/) and the desktop [Pinggy App](https://pinggy.io/app/) both open UDP tunnels, and the free tier is enough to try one. Below are both ways to set it up, a quick netcat test, and the other tools that tunnel UDP if Pinggy isn't the right fit. Prices and versions were checked on November 18, 2026.

{{< image "ngrok_udp_alternative/Ngrok UDP Alternative.png" "Ngrok UDP Alternative" >}}

{{< llm-context >}}To expose a local UDP service with Pinggy - install the Pinggy CLI (one-line installer from pinggy.io/cli or `npm install -g pinggy`), then run `pinggy -p 443 -R0:localhost:<port> udp@free.pinggy.io` to get a public udp:// hostname and port. The plain SSH command can't carry UDP; ngrok has no UDP tunnels at all.{{< /llm-context >}}

{{% tldr %}}

1. **Ngrok has no UDP.** Its endpoints are HTTP, TCP and TLS only, on every plan.
2. **Pinggy carries UDP** through its CLI (still labelled beta) or the Pinggy App. The plain SSH command can't, because SSH only forwards TCP.
3. **One command with the CLI:**
   ```bash
   pinggy -p 443 -R0:localhost:8000 udp@free.pinggy.io
   ```
4. **Test it** by listening with `nc -u -l 8000` and sending a datagram to the public address from another machine.
5. **Other options:** Playit.gg for game servers, LocalXpose and Localtonet as managed tunnels, and frp or chisel if you'd rather run your own relay.

{{% /tldr %}}

## A UDP tunnel gives a local UDP port a public address

UDP sends datagrams without a connection, acknowledgements or retransmits. Lost packets stay lost, and in return there's very little latency, which is why it carries most real-time traffic:

- **Game servers**, such as Minecraft Bedrock (port 19132), Valheim or Palworld.
- **Voice and video**, where a late packet is worse than a missing one.
- **DNS**, which answers most queries over UDP port 53.
- **VPNs** like WireGuard, which runs entirely over UDP.
- **IoT telemetry**, where small devices send short readings and can't afford connection overhead.

A UDP tunnel puts a public hostname and port in front of a UDP service on your machine. Your client opens an outbound connection to the tunnel's relay, the relay accepts datagrams on its public port, and it forwards them down that connection to your local port. Nothing on your router changes, so it works behind CGNAT and strict firewalls where port forwarding isn't an option.

## Ngrok only tunnels HTTP, TCP and TLS

Ngrok's pricing page lists its endpoint protocols as HTTP, TCP and TLS, and none of the plans, from Free through Pay-as-you-go, adds UDP. A TCP endpoint doesn't help either: a game server or a DNS resolver listening for UDP never sees TCP traffic, so the packets have nowhere to land. If you need UDP, you need a different tool. The [ngrok alternatives comparison](/blog/best_ngrok_alternatives/) covers the wider field; the rest of this post sticks to UDP.

## Set up a UDP tunnel with the Pinggy CLI

UDP is the one tunnel type Pinggy's SSH command can't create, because plain SSH only carries TCP. Install the [Pinggy CLI](https://pinggy.io/cli/) instead: it's one command on macOS, Linux and Windows, or `npm install -g pinggy`.

Then start the tunnel, replacing `8000` with the port your UDP service listens on:

{{< ssh_command clionly="true">}}
"{\"cli\":{\"windows\":{\"ps\":\"pinggy -p 443 -R0:localhost:8000 udp@free.pinggy.io\",\"cmd\":\"pinggy -p 443 -R0:localhost:8000 udp@free.pinggy.io\"},\"linux\":{\"ps\":\"pinggy -p 443 -R0:localhost:8000 udp@free.pinggy.io\",\"cmd\":\"pinggy -p 443 -R0:localhost:8000 udp@free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints a public hostname and a UDP port. Point your game client, SIP phone or `dig` at that pair and the datagrams arrive on `localhost:8000`. For a Minecraft Bedrock server, the local port is `19132`. If an AI agent or a script is starting the tunnel, add `--notui` to get plain log lines instead of the interactive terminal UI.

The [UDP tunnel docs](https://pinggy.io/docs/udp_tunnels/) still label UDP support as beta.

## Set up a UDP tunnel with the Pinggy App

If you'd rather click than type, the [Pinggy App](https://pinggy.io/app/) does the same thing from a window. It's a desktop app for macOS (Apple Silicon and Intel), Windows (x64 and ARM64) and Ubuntu, currently v1.3.8 and marked beta, and it creates HTTP, TCP, UDP and TLS tunnels.

1. **Download the Pinggy App** from [pinggy.io/app](https://pinggy.io/app/) and install it for your operating system.

{{< image "ngrok_udp_alternative/download_page.png" "Pinggy App download page with macOS, Windows and Linux builds" >}}

2. **Open the app** and go to **Create Tunnel**.

{{< image "ngrok_udp_alternative/pinggy_app_home.webp" "Pinggy App home screen" >}}

3. **Pick UDP Tunnel** from the four tunnel types.

{{< image "ngrok_udp_alternative/pinggy_app_create_tunnel.webp" "Pinggy App tunnel type picker with HTTP, TCP, TLS and UDP tunnels" >}}

4. **Set your local port** (8000 in this example). If you have a Pro access token, paste it into **Access Token**.

{{< image "ngrok_udp_alternative/pinggy_app_config_tunnel.webp" "Pinggy App UDP tunnel configuration with local port 8000 and an access token field" >}}

5. **Click Save and Start Tunnel.**

{{< image "ngrok_udp_alternative/pinggy_app_tunnel_creting.webp" "Pinggy App saving and starting a UDP tunnel" >}}

6. **Copy the `udp://` address** at the top of the tunnel page. That's the hostname and port your clients connect to. On the free plan you'll also see the countdown to the 60-minute limit.

{{< image "ngrok_udp_alternative/pinggy_app_public_url.webp" "Pinggy App running a free UDP tunnel with its public udp:// address and a 60-minute countdown" >}}

## Test the tunnel with netcat

Before you point a real game or phone at the tunnel, check that datagrams make it through. On the machine running the tunnel, listen on the local port:

```bash
nc -u -l 8000
```

That's the syntax for macOS and the OpenBSD netcat most Linux distros ship. Traditional netcat wants `nc -u -l -p 8000`.

From a different machine, send a line to the public hostname and port Pinggy gave you:

```bash
echo "hello over udp" | nc -u -w1 <hostname> <port>
```

The listener should recieve the line within a second. If nothing shows up, check that the port in the tunnel command matches the one you're listening on, and that the free tunnel hasn't hit its 60-minute limit. `socat - UDP:<hostname>:<port>` does the same job if you prefer socat.

## Free and Pro limits for Pinggy UDP tunnels

The free tier needs no sign-up. UDP tunnels get unlimited data transfer, but they last 60 minutes, and the public port changes on every connection, so you hand out a new address each time.

**Pro** is $3/month, or $2.50/month billed yearly. It lets you reserve a persistent UDP port from the dashboard, so the address you give players or devices stays the same, and it removes the time limit. That's the plan to use for a game server your friends join every evening or a device that reports in around the clock.

## Other tools that tunnel UDP

Pinggy isn't the only option. Here's how the other well-known tunnels handle UDP:

| Tool | UDP | Cheapest way to get UDP | Notes |
|---|---|---|---|
| {{< link href="https://playit.gg/" >}}Playit.gg{{< /link >}} | Yes | Free: game presets plus generic UDP, 4 ports | Premium ($3/month) adds TCP+UDP tunnels and 16 ports; built for game servers |
| {{< link href="https://localxpose.io/" >}}LocalXpose{{< /link >}} | Yes | PRO, $8/month billed yearly | The free Starter tier is 2 HTTP(S) tunnels only |
| {{< link href="https://localtonet.com/" >}}Localtonet{{< /link >}} | Yes | Free: 1 tunnel, stops after 30 minutes per start | About $2/month per tunnel with no timeout; dedicated UDP and mixed UDP/TCP types |
| {{< link href="https://inlets.dev/" >}}Inlets{{< /link >}} | Yes, on TCP tunnels | Personal, $25/month | UDP since 0.11.13; you run the exit server or use Inlets Cloud |
| {{< link href="https://github.com/fatedier/frp" >}}frp{{< /link >}} | Yes | Free, self-hosted | v0.72.0; you run `frps` on a server with a public IP |
| {{< link href="https://github.com/jpillora/chisel" >}}chisel{{< /link >}} | Yes | Free, self-hosted | UDP remotes look like `1.1.1.1:53/udp`; v1.12.0 |
| {{< link href="https://zrok.io/" >}}zrok{{< /link >}} | Private shares only | Free managed tier (5GB a day) or self-host | The other side has to run `zrok2 access private` |
| {{< link href="https://tailscale.com/docs/features/tailscale-funnel" >}}Tailscale Funnel{{< /link >}} | No | None | Funnel only serves TLS on ports 443, 8443 and 10000 |
| {{< link href="https://developers.cloudflare.com/tunnel/" >}}Cloudflare Tunnel{{< /link >}} | Not on quick tunnels | Private networking | Visitors need the Cloudflare One client on their device |
| Ngrok | No | None | HTTP, TCP and TLS only |

**Playit.gg** is the closest match if all you're hosting is a game server: generic UDP is free, and the agent is open source. **LocalXpose** and **Localtonet** are managed tunnels with UDP, LocalXpose behind its paid plan and Localtonet with a short-lived free tunnel. **frp** and **chisel** are the self-hosted picks, and they cost you a VPS and some config, but the relay is yours. Tailscale is a different story: it's a WireGuard mesh, so UDP works fine between devices inside your tailnet, but Funnel can't publish a UDP port to the public internet.

You'll also see SSH suggested for this. Plain SSH can't forward UDP, and the usual trick is to wrap the datagrams in TCP with `socat` on both ends of an `ssh -L` or `ssh -R` forward. It works for a one-off DNS test, but every lost packet stalls the ones queued behind it, which is teh opposite of what a game or a voice call needs.

## Conclusion

If ngrok is your tunnel and you hit a UDP service, Pinggy is the quickest fix: install the CLI, run one command, and you have a public UDP address, with a persistent port on Pro for $3/month. Playit.gg is worth a look for game servers, and frp or chisel make sense if you'd rather run the relay yourself. For a wider comparison of tunnels beyond UDP, see the [ngrok alternatives guide](/blog/best_ngrok_alternatives/).
