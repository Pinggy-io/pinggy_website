---
 title: "Access an IP camera remotely"
 description: "View a home IP camera from anywhere by tunneling its HTTP or RTSP stream through Pinggy - no port forwarding or static IP required."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# View a home IP camera through Pinggy

Most consumer IP cameras expose two interfaces on your LAN: a web interface (HTTP, often on port `80` or `8080`) for live preview and configuration, and an RTSP stream (typically on port `554`) for video clients such as VLC or NVR software. Both are reachable from inside your home network but blocked at the router by default.

Instead of opening ports on your router and exposing the camera directly to the internet - a frequent source of insecure-camera headlines - you can keep the camera on its private LAN and front it with a Pinggy tunnel. Traffic terminates at Pinggy with TLS, and authentication still happens at the camera.

#### Step 1: Identify the camera's local address

Use the same address you already type into your browser to view the live footage on your LAN - for example `http://192.168.1.42:80`. Note the protocol (`http`/`https`), IP, and port; that is what the tunnel will forward to.

#### Step 2: Tunnel the web interface

Run Pinggy on a machine on the same LAN as the camera (a Raspberry Pi, NAS, or always-on PC works well). Pass the camera's LAN IP and port instead of `localhost`:

```bash
ssh -p 443 -R0:192.168.1.42:80 free.pinggy.io
```

Pinggy returns an HTTPS URL. Visit it in a browser to reach the camera's login page over an encrypted tunnel.

#### Step 3: Tunnel the RTSP stream (optional)

RTSP is a TCP-based control protocol. Use a TCP tunnel rather than the HTTP tunnel above:

```bash
ssh -p 443 -R0:192.168.1.42:554 tcp@free.pinggy.io
```

The output includes a public hostname and TCP port - for example `tcp://rndnj.a.free.pinggy.online:31572`. Open it in VLC as `rtsp://rndnj.a.free.pinggy.online:31572/<stream-path>`.

Note that the RTSP video payload itself often travels over a separate negotiated UDP range. Many clients support "RTSP over TCP" mode, which keeps everything inside the single TCP tunnel - enable that option if playback fails.

#### Step 4: Lock the tunnel down

Even though the camera enforces its own login, public exposure widens the attack surface. Apply at least one of:

- **[Basic authentication](/docs/http_tunnels/basic_auth/)** at the tunnel level so clients have to authenticate before reaching the camera at all.
- **[IP whitelisting](/docs/http_tunnels/ip_whitelist/)** to restrict access to the IP addresses you care about.
- A strong, unique camera password and the latest firmware.

For long-term remote access, sign in to [the dashboard](https://dashboard.pinggy.io) and use a [persistent subdomain](/docs/persistent_subdomain/) so bookmarks keep working after reconnects.
