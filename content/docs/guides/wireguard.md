---
 title: "Access a local WireGuard server"
 description: "Reach a WireGuard VPN server running on your home network from anywhere by exposing its UDP port through a Pinggy UDP tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Reach a self-hosted WireGuard server through Pinggy

[WireGuard](https://www.wireguard.com/) is a lightweight VPN that runs over UDP - typically on port `51820`. Self-hosting it on a home server gives you encrypted access back into your LAN, but the server is only reachable if its UDP port is exposed to the public internet. ISPs that use CGNAT, restrictive firewalls, and routers without port-forwarding support all break that assumption.

Pinggy's UDP tunnels solve this by relaying UDP datagrams from a public endpoint to your local WireGuard server, so peers anywhere in the world can complete the handshake.

#### Step 1: Confirm WireGuard is listening

On the server, check that the interface is up and bound to the expected port:

```bash
sudo wg show
```

You should see a `listening port: 51820` line (or whatever you configured). If the interface is not yet up, bring it up with `sudo wg-quick up wg0`.

#### Step 2: Open a UDP tunnel

Pinggy supports UDP tunnels. From the same machine that runs WireGuard, execute:

```bash
ssh -p 443 -R0:localhost:51820 udp@free.pinggy.io
```

Pinggy returns a public hostname and a UDP port - for example `udp://rndnj-103-170-183-11.a.free.pinggy.online:43210`. That endpoint forwards every UDP datagram to `localhost:51820`.

For a stable hostname and port across reconnects, sign in to [the dashboard](https://dashboard.pinggy.io) and use your access token (`token+udp@free.pinggy.io`).

#### Step 3: Update each peer's configuration

In every client `.conf` file, point the `Endpoint` line at the Pinggy hostname and port:

```ini
[Peer]
PublicKey = <server-public-key>
AllowedIPs = 10.0.0.0/24
Endpoint = rndnj-103-170-183-11.a.free.pinggy.online:43210
PersistentKeepalive = 25
```

`PersistentKeepalive` is recommended when traversing NAT - the periodic packets keep mappings alive on intermediate networks.

#### Step 4: Bring up the tunnel and verify

On a peer device:

```bash
sudo wg-quick up wg0
sudo wg show
```

A successful handshake (recent `latest handshake` timestamp and non-zero transfer counters) confirms the peer reached the server through Pinggy. Test routing by pinging an IP inside the WireGuard subnet.
