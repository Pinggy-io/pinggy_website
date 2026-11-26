---
title: "How to Set Up Raspberry Pi Tunnel for Remote Access"
description: "Set up a Raspberry Pi tunnel for remote access with Pinggy. Open web apps over HTTPS, SSH into your Pi from anywhere, and start the tunnel at boot with systemd, no port forwarding."
date: 2025-07-18T14:15:25+05:30
lastmod: 2026-11-25T14:15:25+05:30
draft: false
og_image: "/images/raspberry_pi_tunnel/raspberry_pi_tunnel_banner.png"
tags: ["raspberry pi", "ssh", "remote access", "iot"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBTZXQgVXAgUmFzcGJlcnJ5IFBpIFR1bm5lbCBmb3IgUmVtb3RlIEFjY2VzcyIsCiAgImRlc2NyaXB0aW9uIjogIlNldCB1cCBSYXNwYmVycnkgUGkgdHVubmVscyBmb3IgcmVtb3RlIGFjY2VzcyB3aXRoIFBpbmdneTogYW4gSFRUUCB0dW5uZWwgZm9yIHdlYiBhcHBzLCBhIFRDUCB0dW5uZWwgZm9yIFNTSCwgYW5kIGEgc3lzdGVtZCBzZXJ2aWNlIHRoYXQgc3RhcnRzIHRoZSB0dW5uZWwgYXQgYm9vdCwgd2l0aCBubyBwb3J0IGZvcndhcmRpbmcuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYXNzZXRzL2hlYWRlci53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUMTBNIiwKICAiZXN0aW1hdGVkQ29zdCI6IHsKICAgICJAdHlwZSI6ICJNb25ldGFyeUFtb3VudCIsCiAgICAiY3VycmVuY3kiOiAiVVNEIiwKICAgICJ2YWx1ZSI6ICIwIgogIH0sCiAgInRvb2wiOiB7CiAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICJuYW1lIjogIlBpbmdneSIKICB9LAogICJzdGVwIjogW3sKICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgInRleHQiOiAiRW5hYmxlIFNTSCBvbiB5b3VyIFJhc3BiZXJyeSBQaSBpbiBSYXNwYmVycnkgUGkgSW1hZ2VyLCBpbiByYXNwaS1jb25maWcsIG9yIGJ5IHJ1bm5pbmcgJ3N1ZG8gc3lzdGVtY3RsIGVuYWJsZSAtLW5vdyBzc2gnLiBSYXNwYmVycnkgUGkgT1MgaGFzIG5vIGRlZmF1bHQgcGkgdXNlciwgc28gdXNlIHRoZSB1c2VybmFtZSB5b3UgY3JlYXRlZC4iLAogICAgIm5hbWUiOiAiRW5hYmxlIFNTSCBvbiBSYXNwYmVycnkgUGkiCiAgfSx7CiAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICJ0ZXh0IjogIkZvciBhbiBIVFRQIHR1bm5lbCwgcnVuICdzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCBxckBmcmVlLnBpbmdneS5pbycgKHJlcGxhY2UgODA4MCB3aXRoIHlvdXIgcG9ydCkuIEZvciBhbiBTU0ggdHVubmVsLCBydW4gJ3NzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMiB0Y3BAZnJlZS5waW5nZ3kuaW8nLiIsCiAgICAibmFtZSI6ICJDcmVhdGUgVHVubmVsIgogIH0sewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJPcGVuIHRoZSBIVFRQUyBVUkwgUGluZ2d5IHByaW50cywgb3IgY29ubmVjdCB3aXRoICdzc2ggLXAgPHBvcnQ+IDx1c2VyPkA8aG9zdD4nIHVzaW5nIHRoZSB0Y3A6Ly8gYWRkcmVzcyBpdCBwcmludHMuIiwKICAgICJuYW1lIjogIkFjY2VzcyBZb3VyIFBpIFJlbW90ZWx5IgogIH0sewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJSdW4gdGhlIHR1bm5lbCBjb21tYW5kIGFzIGEgc3lzdGVtZCBzZXJ2aWNlIHdpdGggUmVzdGFydD1vbi1mYWlsdXJlIHNvIGl0IGNvbWVzIGJhY2sgYWZ0ZXIgYSByZWJvb3Qgb3IgYSBkcm9wcGVkIGNvbm5lY3Rpb24uIFVzZSBhIFBpbmdneSBQcm8gdG9rZW4gZm9yIGFuIGFkZHJlc3MgdGhhdCBzdGF5cyB0aGUgc2FtZS4iLAogICAgIm5hbWUiOiAiU3RhcnQgdGhlIFR1bm5lbCBhdCBCb290IgogIH1dCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "raspberry_pi_tunnel/raspberry_pi_tunnel_banner.png" "Raspberry Pi tunnel for remote access" >}}

{{< llm-context >}}To reach a Raspberry Pi remotely with Pinggy - enable SSH with `sudo systemctl enable --now ssh`, then on the Pi run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` and connect from anywhere with `ssh -p <port> <user>@<host>` using the tcp:// address it prints. For a web app on the Pi (for example port 8080), run `ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

A Raspberry Pi is a small Linux computer that ends up running all sorts of things: web servers, IoT dashboards, Home Assistant, a camera feed. Reaching it on your home network is easy. Reaching it from work or from your phone on mobile data is where most people get stuck.

Port forwarding often fails because many ISPs now put you behind CG-NAT. A tunnel turns the problem around: the Pi makes an outbound SSH connection, and you get a public address that leads back to it. Below are the commands for an HTTP tunnel, an SSH tunnel, and a systemd service that brings the tunnel back after a reboot.

{{% tldr %}}

1. **Enable SSH on your Raspberry Pi:**
   ```bash
   sudo systemctl enable --now ssh
   ```

2. **Create an HTTP tunnel** (replace `8080` with your port):
   ```bash
   ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io
   ```

3. **Create an SSH tunnel** for remote terminal access:
   ```bash
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io
   ```

4. Use the public URL or `tcp://` address Pinggy prints to reach your Raspberry Pi from anywhere on the internet.

5. Sign in to <a href="https://dashboard.pinggy.io" target="_blank" >dashboard.pinggy.io</a> for a Pro token: a stable address and no 60-minute limit.

{{% /tldr %}}

## What is a Raspberry Pi tunnel?

A Raspberry Pi tunnel is a connection that lets you reach your Pi over the internet even though it sits behind your home router and NAT (Network Address Translation). The Pi connects out to Pinggy over SSH on port 443, which almost every network allows, and `-R0:localhost:<port>` asks Pinggy to send traffic from a public address back down that connection to a port on the Pi.

There are two types of tunnels you'll commonly use with a Raspberry Pi:

**HTTP tunnels** are for web applications, dashboards, or anything else that speaks HTTP. You get an HTTPS URL with a valid certificate.

**TCP tunnels** carry SSH, so you get terminal access to your Pi's command line. SSH isn't HTTP, which is why port 22 needs a TCP tunnel (`tcp@`). The same tunnel type works for databases or other TCP services. Each tunnel forwards one port.

## Why traditional port forwarding doesn't work

Most home networks use NAT, which means your Pi doesn't have a public IP address of its own. Port forwarding asks your router to send a public port to the Pi, and it has several limitations:

- Many ISPs, and most mobile data plans, use CG-NAT, where your public IPv4 is shared with other customers and no inbound port reaches you. Our [CGNAT guide](/blog/access_home_server_raspberry_pi_behind_cgnat/) shows how to check.
- Router configuration varies by manufacturer, and ISP routers often lock it
- An open port exposes the Pi directly to every scanner on the internet
- Dynamic IP addresses change, so you also need dynamic DNS
- Corporate and public networks block inbound traffic

A tunnel avoids all of this because the connection starts on the Pi, so nothing on the router changes.

## Setting up SSH on your Raspberry Pi

Raspberry Pi OS, now based on Debian 13 "Trixie", ships with the SSH server turned off. It also has no default `pi` user any more: you pick a username in Raspberry Pi Imager or on first boot, so swap `pi` in the commands below for yours.

### Enable SSH service

The easiest way is to switch on SSH in Raspberry Pi Imager's customisation settings when you flash the card, and paste your public key there to skip passwords from teh start. For a headless Pi that's already flashed, create an empty file called `ssh` on the boot partition, plus a `userconf.txt` with one line, `username:hash` (the hash comes from `openssl passwd -6`).

If you're already on the Pi, run:

```bash
sudo systemctl enable --now ssh
```

To verify SSH is running:

```bash
sudo systemctl status ssh
```

Also create an SSH key on the Pi with `ssh-keygen -t ed25519`. Without one, Pinggy asks for a password when you start a tunnel. Pressing Enter works, but a systemd service can't press Enter.

### Secure your SSH configuration

A tunnel to port 22 puts your Pi's SSH server on the internet, so turn off password logins once your key works. Create `/etc/ssh/sshd_config.d/10-keys-only.conf`:

```
PasswordAuthentication no
KbdInteractiveAuthentication no
```

sshd takes the first value it finds in alphabetical file order, hence the `10-` prefix. Check and reload:

```bash
sudo sshd -t && sudo systemctl reload ssh
```

If you always connect from known addresses, add `-- w:198.51.100.0/24` (your range) to the tunnel command and Pinggy drops everyone else.

## Creating a Raspberry Pi HTTP tunnel

HTTP tunnels are the right choice for web-based services on your Pi: a web server, an IoT dashboard, a security camera interface, or any app that serves content over HTTP.

### Step-by-step HTTP tunnel setup

1. **Start your web service** on your Pi. For example, a Python web server (replace `8080` with your desired port):
   ```bash
   python3 -m http.server 8080
   ```

2. **Create the HTTP tunnel** using Pinggy in a second terminal (replace `8080` with your actual port):
   ```bash
   ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io
   ```

   {{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \",\"cmd\":\"ssh -p 443 -R0:localhost:8080 -t qr@free.pinggy.io \"}}}"
   {{</ ssh_command >}}

   The `qr@` prefix adds a QR code you can scan with your phone. For plain output in a script, use `free.pinggy.io -T` instead.

3. **Access your Pi remotely** using the public URL Pinggy prints. It will look something like:
   `https://randomstring.run.pinggy-free.link`

{{< image "hosting_a_vue_app_without_a_server/pinggy_public_url.webp" "Pinggy public url" >}}

On the free tier, browsers see a one-time Pinggy notice page before your app, and the tunnel ends after 60 minutes. The next one gets a new URL.

### HTTP tunnel use cases

HTTP tunnels work well for:
- **Home automation dashboards** like Home Assistant (port 8123) or [Node-RED](/blog/self_hosting_node_red/) (port 1880)
- **Security camera feeds** and monitoring systems
- **IoT device management** interfaces
- **Personal cloud storage** and web-based file managers
- **Development servers** for testing web applications

Many Pi dashboards have no login, so add `-- b:admin:some-long-password` to the tunnel command and Pinggy asks for a password first.

## Setting up SSH tunnel for Raspberry Pi

SSH tunnels give you command-line access to your Pi from anywhere, for administration, troubleshooting, and file transfers with `scp` or `rsync`.

### Creating an SSH tunnel

1. **Create the SSH tunnel** on the Pi using this command:
   ```bash
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io
   ```

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start an SSH tunnel:" portstring="SSH Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="You can customize the command with additional options:" >}}
   {{< /pinggytunnel >}}

2. **Note the connection details** provided by Pinggy. You'll recieve something like:
   `tcp://randomstring.run.pinggy-free.link:36185`

3. **Connect to your Pi remotely** using the host and port from that address (replace `pi` with your username):
   ```bash
   ssh -p 36185 pi@randomstring.run.pinggy-free.link
   ```

   {{< image "iot/url.webp" "Raspberry Pi tunnel connection details" >}}

Every free tunnel gets a new hostname, so ssh asks you to confirm the host key each time. This in `~/.ssh/config` on your laptop makes it ask only once:

```
Host *.run.pinggy-free.link
    HostKeyAlias raspberrypi
```

### Start the tunnel at boot with systemd

A tunnel typed into a terminal stops when you close it, when the network drops, or after 60 minutes on the free tier, so let systemd run it. Create `/etc/systemd/system/pinggy-ssh.service`:

```ini
[Unit]
Description=Pinggy TCP tunnel to the SSH server
After=network-online.target ssh.service
Wants=network-online.target

[Service]
User=pi
ExecStart=/usr/bin/ssh -p 443 -T -o StrictHostKeyChecking=accept-new -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -o ExitOnForwardFailure=yes -R0:localhost:22 tcp@free.pinggy.io
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable it and read the current address from the journal:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now pinggy-ssh
sudo journalctl -u pinggy-ssh -o cat | grep tcp:// | tail -1
```

When the network dies or Pinggy closes a free tunnel, ssh exits with an error and `Restart=on-failure` starts a new tunnel 10 seconds later. If the service fails with `status=217/USER`, the `User=` line names an account that doesn't exist on this Pi; change it and run `daemon-reload` again.

Each free restart brings a new hostname and port. For a fixed address, use `<your-token>+tcp@pro.pinggy.io` in `ExecStart` and reserve a TCP port in the dashboard, because the port changes per connection even on Pro. Pro costs $3 a month, or $2.50 a month billed yearly.

## Conclusion

With {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}, a TCP tunnel to port 22 gives you a terminal on your Pi and an HTTP tunnel opens any web app on it, with no port forwarding and no trouble behind CG-NAT. Add the systemd unit so the tunnel survives reboots, keep SSH keys-only, and move to a Pro token once the changing address gets annoying.
