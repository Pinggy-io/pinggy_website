---
title: "How to Set Up Raspberry Pi Tunnel for Remote Access"
description: "SSH into a Raspberry Pi and open its web apps from anywhere with a Pinggy tunnel, no port forwarding. Tested commands, a systemd unit that starts the tunnel at boot, and how to lock it down."
date: 2025-07-18T14:15:25+05:30
lastmod: 2026-11-24T14:15:25+05:30
draft: false
og_image: "images/raspberry_pi_tunnel/raspberry_pi_tunnel_banner.webp"
tags: ["raspberry pi", "ssh", "remote access", "iot"]
eyebrow: "Raspberry Pi"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNldCBVcCBhIFJhc3BiZXJyeSBQaSBUdW5uZWwgZm9yIFJlbW90ZSBBY2Nlc3MiLAogICJkZXNjcmlwdGlvbiI6ICJTU0ggaW50byBhIFJhc3BiZXJyeSBQaSBhbmQgb3BlbiBpdHMgd2ViIGFwcHMgZnJvbSBhbnl3aGVyZSB3aXRoIGEgUGluZ2d5IHR1bm5lbCwgbm8gcG9ydCBmb3J3YXJkaW5nLiBUZXN0ZWQgY29tbWFuZHMsIGEgc3lzdGVtZCB1bml0IHRoYXQgc3RhcnRzIHRoZSB0dW5uZWwgYXQgYm9vdCwgYW5kIGhvdyB0byBsb2NrIGl0IGRvd24uIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3Jhc3BiZXJyeV9waV90dW5uZWwvcmFzcGJlcnJ5X3BpX3R1bm5lbF9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTI0VDE0OjE1OjI1KzA1OjMwIiwKICAidG90YWxUaW1lIjogIlBUMTBNIiwKICAiZXN0aW1hdGVkQ29zdCI6IHsgIkB0eXBlIjogIk1vbmV0YXJ5QW1vdW50IiwgImN1cnJlbmN5IjogIlVTRCIsICJ2YWx1ZSI6ICIwIiB9LAogICJ0b29sIjogWyB7ICJAdHlwZSI6ICJIb3dUb1Rvb2wiLCAibmFtZSI6ICJQaW5nZ3kiIH0sIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIk9wZW5TU0giIH0gXSwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlR1cm4gb24gU1NIIG9uIHRoZSBSYXNwYmVycnkgUGkiLCAidGV4dCI6ICJFbmFibGUgU1NIIGluIFJhc3BiZXJyeSBQaSBJbWFnZXIsIGluIHJhc3BpLWNvbmZpZywgb3Igd2l0aCBzdWRvIHN5c3RlbWN0bCBlbmFibGUgLS1ub3cgc3NoLiBDcmVhdGUgYSBrZXkgb24gdGhlIFBpIHdpdGggc3NoLWtleWdlbiAtdCBlZDI1NTE5LiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIk9wZW4gYSBUQ1AgdHVubmVsIHRvIHBvcnQgMjIiLCAidGV4dCI6ICJPbiB0aGUgUGksIHJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjIgdGNwQGZyZWUucGluZ2d5LmlvIC1UIGFuZCBub3RlIHRoZSB0Y3A6Ly9ob3N0OnBvcnQgYWRkcmVzcyBpdCBwcmludHMuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU1NIIGluIGZyb20gYW55d2hlcmUiLCAidGV4dCI6ICJGcm9tIHlvdXIgbGFwdG9wLCBydW4gc3NoIC1wIDxwb3J0PiBwaUA8aG9zdD4gd2l0aCB0aGUgaG9zdCBhbmQgcG9ydCBmcm9tIHRoZSB0Y3A6Ly8gYWRkcmVzcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJPcGVuIGEgd2ViIGFwcCBvdmVyIEhUVFBTIiwgInRleHQiOiAiRm9yIGEgd2ViIGFwcCBvbiBwb3J0IDgwODAsIHJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCBmcmVlLnBpbmdneS5pbyAtVCBhbmQgb3BlbiB0aGUgSFRUUFMgVVJMIGl0IHByaW50cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTdGFydCB0aGUgdHVubmVsIGF0IGJvb3QiLCAidGV4dCI6ICJDcmVhdGUgL2V0Yy9zeXN0ZW1kL3N5c3RlbS9waW5nZ3ktc3NoLnNlcnZpY2UgcnVubmluZyB0aGUgdHVubmVsIGNvbW1hbmQgd2l0aCBTZXJ2ZXJBbGl2ZUludGVydmFsPTMwIGFuZCBSZXN0YXJ0PWFsd2F5cywgdGhlbiBydW4gc3VkbyBzeXN0ZW1jdGwgZW5hYmxlIC0tbm93IHBpbmdneS1zc2ggYW5kIHJlYWQgdGhlIGFkZHJlc3Mgd2l0aCBqb3VybmFsY3RsIC11IHBpbmdneS1zc2guIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiTG9jayBpdCBkb3duIiwgInRleHQiOiAiVHVybiBvZmYgU1NIIHBhc3N3b3JkIGxvZ2lucyBpbiAvZXRjL3NzaC9zc2hkX2NvbmZpZy5kLzEwLWtleXMtb25seS5jb25mIGFuZCByZXN0cmljdCB3aG8gY2FuIHJlYWNoIHRoZSB0dW5uZWwgd2l0aCAtLSB3OjxDSURSPi4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "raspberry_pi_tunnel/raspberry_pi_tunnel_banner.webp" "Raspberry Pi tunnel for remote access: a Raspberry Pi with SSH on port 22 and a web app on port 8080, each reachable from anywhere through a Pinggy tunnel" >}}

{{< llm-context >}}To reach a Raspberry Pi remotely with Pinggy - enable SSH with `sudo systemctl enable --now ssh`, then on the Pi run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T` and connect from anywhere with `ssh -p <port> pi@<host>` using the tcp:// address it prints. For a web app on the Pi (for example port 8080), run `ssh -p 443 -R0:localhost:8080 free.pinggy.io -T` to get a public HTTPS URL.{{< /llm-context >}}

A Raspberry Pi tends to end up somewhere useful and awkward: behind a home router, on a shelf at your parents' place, or on a mobile hotspot in a shed. Reaching it from the local network is easy. Reaching it from anywhere else is where people give up and leave a monitor plugged in.

You don't need port forwarding or a static IP for this. The Pi opens an outbound SSH connection to Pinggy, and Pinggy gives you a public address that leads back down that connection. It takes one command for SSH access and one for a web app. With a short systemd unit, the tunnel comes back on its own after a reboot.

Everything below was run on November 25, 2026, on Debian 13 "trixie" arm64, the same base as the current Raspberry Pi OS (the 2026-10-06 release). The device side ran in a container with systemd as PID 1, and I connected through live Pinggy tunnels from a Mac. I didn't have real Pi hardware for this run. The commands don't depend on it, but the Pi-specific setup steps come from the Raspberry Pi documentation.

{{% tldr %}}

1. **Turn on SSH on the Pi:** `sudo systemctl enable --now ssh`, or use the SSH switch in Raspberry Pi Imager when you flash the card.
2. **Open a TCP tunnel to port 22** on the Pi:
   ```bash
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T
   ```
3. **Connect from anywhere** with the address it prints, `tcp://<host>:<port>`:
   ```bash
   ssh -p <port> pi@<host>
   ```
4. **Open a web app** on the Pi (port 8080 here) over HTTPS:
   ```bash
   ssh -p 443 -R0:localhost:8080 free.pinggy.io -T
   ```
5. **Start the tunnel at boot** with a systemd unit, and switch to a Pro token for an address that stays the same.

{{% /tldr %}}

## Why the Pi dials out instead of you dialling in

Port forwarding needs three things to line up: a router you control, a public IPv4 address on that router, and an ISP that doesn't block inbound traffic. Plenty of connections fail at least one. Mobile data and many fiber plans put you behind carrier-grade NAT, where your router gets a private carrier address, the real public IPv4 is shared with other customers, and no inbound port reaches you at all. Our [CGNAT guide](/blog/access_home_server_raspberry_pi_behind_cgnat/) shows how to check whether you're in that situation.

A reverse tunnel turns the direction around. The Pi runs a normal `ssh` client and connects out to Pinggy on port 443, which almost every network allows. The `-R0:localhost:22` part asks Pinggy to forward a public port back down that connection to port 22 on the Pi. When you connect to the public address, the path is: your laptop -> Pinggy -> the SSH connection the Pi opened -> the Pi's sshd. Nothing on the router changes.

{{< image "raspberry_pi_tunnel/raspberry_pi_two_tunnels_pinggy.webp" "Diagram: a Raspberry Pi behind a home router opens two outbound SSH connections to Pinggy on port 443, one a TCP tunnel to its SSH server on port 22 that a laptop reaches with ssh, the other an HTTP tunnel to a web app on port 8080 that a phone opens over HTTPS" >}}

Each tunnel in this guide forwards one port. SSH on port 22 needs a TCP tunnel (`tcp@`), because SSH isn't HTTP. A web dashboard gets an HTTP tunnel, which gives it an HTTPS URL with a valid certificate. Run one command per port.

## Turn on SSH on the Pi

Raspberry Pi OS ships with the SSH server turned off. The Raspberry Pi docs list four ways to turn it on. Use whichever fits how you set the Pi up:

- **When you flash the card:** in Raspberry Pi Imager, open **Customisation > Remote Access** and switch on **Enable SSH**. You can paste your public key there too, which skips passwords from the start.
- **On the Pi's desktop:** **Preferences > Control Centre > Interfaces**, then enable SSH.
- **From a terminal on the Pi:** `sudo raspi-config` -> **3 Interface Options** -> **I1 SSH**. In a script, `sudo raspi-config nonint do_ssh 0` does the same thing.
- **With only the SD card in a reader:** create an empty file called `ssh` on the boot partition (`/boot/firmware/ssh` once the Pi is running). Since there's no default user, also add a `userconf.txt` there with one line, `username:hash`, where the hash comes from `openssl passwd -6`. Then boot the Pi.

On any Debian-based OS, including Raspberry Pi OS, plain systemd works too:

```bash
sudo systemctl enable --now ssh
```

On a fresh Debian 13 system, that created the `ssh.service` links and started sshd listening on port 22 for IPv4 and IPv6.

There's no default `pi` user any more. Raspberry Pi OS dropped it in 2022, and you now pick a username in Imager or on first boot. I use `pi` in the commands below; replace it with yours.

One small thing before the first tunnel: create an SSH key on the Pi if it doesn't have one.

```bash
ssh-keygen -t ed25519
```

Without a key, Pinggy's server asks `tcp@free.pinggy.io's password:` when you run the tunnel command in a terminal. The free tier doesn't check it, so pressing Enter works (I tried it to be sure teh prompt really accepts nothing), but a script or a systemd service can't press Enter. With a key in `~/.ssh`, the prompt doesn't appear. (Run non-interactively with `-T` and no terminal, it didn't prompt even without a key in my tests, but the key costs nothing.)

## SSH into the Pi through a TCP tunnel

On the Pi, start a TCP tunnel to port 22:

```bash
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T
```

The first time, ssh asks you to confirm Pinggy's host key; type `yes`. Then it prints the public address. This is the real output from the test, with my IP address replaced by a documentation address:

```
Allocated port 2 for remote forward to localhost:22
You are not authenticated.
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels. https://dashboard.pinggy.io
tcp://bqgqx-203-0-113-7.run.pinggy-free.link:36185
```

The hostname contains your public IP address with dashes, so be careful where you paste it. The "Allocated port 2" line is internal to the SSH session; the port you connect to is the one at the end of the `tcp://` line. From your laptop, anywhere:

```bash
ssh -p 36185 pi@bqgqx-203-0-113-7.run.pinggy-free.link
```

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command on the Pi to start an SSH tunnel:" portstring="SSH Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="You can customize the command with additional options:" >}}
{{< /pinggytunnel >}}

Anything that runs over SSH works through the same address. I copied my laptop's key to the Pi with `ssh-copy-id -p 36185 pi@<host>`, which asked for the Pi's password once, and `scp -P 36185 note.txt pi@<host>:~/` copied a file across. Note that `scp` takes a capital `-P` for the port. Other tools that ride on ssh, like `rsync -e "ssh -p 36185"` or VS Code's Remote-SSH, take the same host and port.

### Stop the host key prompt on every new URL

A free tunnel gets a new hostname and port each time it starts. ssh tracks host keys by hostname, so it asks "Are you sure you want to continue connecting?" for every new one, even though the Pi's key hasn't changed. Tell ssh to file all of them under one name in `~/.ssh/config` on your laptop:

```
Host *.run.pinggy-free.link
    User pi
    HostKeyAlias raspberrypi
```

With that in place, I connected to a second tunnel address with `StrictHostKeyChecking=yes` and got straight in, because ssh found the Pi's key under `raspberrypi`. You also get a real check out of it: if a different machine ever answers on a tunnel address, ssh refuses to connect. Use a separate alias per Pi if you tunnel more than one.

## Open a web app on the Pi over HTTPS

For anything that speaks HTTP, use an HTTP tunnel instead. It gives you an HTTPS URL with a valid certificate, which matters for phones and for apps that refuse plain HTTP. As a stand-in app, serve a folder on port 8080:

```bash
mkdir -p ~/www && echo "<h1>Hello from raspberrypi</h1>" > ~/www/index.html
cd ~/www && python3 -m http.server 8080
```

In a second terminal on the Pi:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io -T
```

```
Allocated port 9 for remote forward to localhost:8080
You are not authenticated.
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels. https://dashboard.pinggy.io
https://ctqqj-203-0-113-7.run.pinggy-free.link
https://rkjoz-203-0-113-7.free.pinggy.net
```

Both URLs lead to the same app, and requests to either one recieve the same answer. `curl` on the first one returned `HTTP/1.0 200 OK` from `SimpleHTTP/0.6 Python/3.13.5` and the one-line page. A browser sees a one-time Pinggy notice page first on free tunnels ("Caution - you are about to visit a website that is served for free through pinggy.io"). Click through it once. API clients and `curl` don't get it.

Swap 8080 for whatever your Pi actually runs: 1880 for [Node-RED](/blog/self_hosting_node_red/), 8123 for Home Assistant. Home Assistant needs one setting first. Pinggy adds `X-Forwarded-For`, `X-Forwarded-Host`, `X-Forwarded-Proto` and `Forwarded` headers to every request, and Home Assistant refuses proxied requests unless **Trust X-Forwarded-For** is on and the proxy is listed under **Trusted proxies**. Forward to `127.0.0.1:8123` instead of `localhost:8123` and list `127.0.0.1`, because `localhost` can resolve to `::1` on the Pi and then the proxy address won't match. The [smart home guide](/blog/remote_access_smart_home_apps_behind_cgnat/) walks through it. If you'd rather not change the app, add `-- x:noreverseproxy` to the tunnel command. With that flag my header-echo server received only `Host`, `User-Agent` and `Accept`.

Two variations are worth knowing:

- **A QR code for your phone.** Start the tunnel with `ssh -p 443 -t -R0:localhost:8080 qr@free.pinggy.io` in a real terminal. Instead of plain lines, you get a full-screen view with both URLs and a QR code you can scan.
- **A password in front of the app.** Many Pi dashboards have no login at all. Append `-- b:admin:some-long-password` to the command and Pinggy asks for basic auth before any request reaches the Pi.

## Start the tunnel at boot with systemd

A tunnel typed into a terminal dies when you close the terminal, when the Wi-Fi drops, and after 60 minutes on the free tier. For a Pi that should be reachable all the time, let systemd own it. Create `/etc/systemd/system/pinggy-ssh.service`:

```ini
[Unit]
Description=Pinggy TCP tunnel to the SSH server
After=network-online.target ssh.service
Wants=network-online.target

[Service]
User=pi
ExecStart=/usr/bin/ssh -p 443 -T -o StrictHostKeyChecking=accept-new -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -o ExitOnForwardFailure=yes -R0:localhost:22 tcp@free.pinggy.io
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

What the options do:

- `User=pi` runs the tunnel as your user, so it uses the key in `/home/pi/.ssh` and never hits the password prompt.
- `StrictHostKeyChecking=accept-new` accepts Pinggy's host key the first time, since nobody is there to type `yes`.
- `ServerAliveInterval=30` with `ServerAliveCountMax=3` makes ssh notice a dead connection within about 90 seconds and exit. Without them, a tunnel can sit "connected" over a network that went away.
- `Restart=always` brings it back whenever it exits, however it exits. Pinggy's own [run-on-startup guide](/docs/run_tunnel_on_startup/linux/) uses `Restart=on-failure`; `always` also covers a clean exit.

Enable it and read the address from the journal:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now pinggy-ssh
sudo journalctl -u pinggy-ssh -o cat | grep tcp:// | tail -1
```

`systemd-analyze verify` passed on the unit. To test recovery, I killed the ssh process with `kill -9`. systemd logged `Failed with result 'signal'`, `Scheduled restart job, restart counter is at 1`, and printed a fresh `tcp://` address 10 seconds later. After a full restart of the machine, both `ssh` and `pinggy-ssh` came up active by themselves.

I also left the service alone to watch the free-tier limit. The tunnel opened at 04:09 UTC, and at 05:13 Pinggy dropped it. ssh printed `Connection to free.pinggy.io closed by remote host.` and exited with `status=255/EXCEPTION`. systemd scheduled a restart 10 seconds later, and the new tunnel came up on a different hostname and port. So the 60-minute limit doesn't need any extra handling. `Restart=always` covers it.

That fresh address is the catch on the free tier: **every reconnect gets a new hostname and port**, so you have to read the journal to find it. If you only need the Pi now and then, that's fine. For an address that stays the same, use a Pinggy Pro token (from [dashboard.pinggy.io](https://dashboard.pinggy.io)) in the `ExecStart` line:

```bash
ssh -p 443 -R0:localhost:22 <your-token>+tcp@pro.pinggy.io -T
```

Per Pinggy's pricing page and TCP tunnel docs, Pro tunnels have no 60-minute limit and keep a persistent address and TCP port, which you can reserve in the dashboard. Pro costs $2.50 a month billed annually, or $3 billed monthly, as of November 25, 2026. I didn't have a Pro token on the test machine, so the Pro line is from the docs, not from this run.

For a second tunnel, such as the web app, copy the unit to `pinggy-web.service` and change the port and the host part (`free.pinggy.io` instead of `tcp@free.pinggy.io`).

## Lock it down

A tunnel to port 22 puts your Pi's SSH server on the internet, so treat it like any public server. Three things are worth doing, and the first two take a minute.

**Turn off password logins.** Once your key works, create `/etc/ssh/sshd_config.d/10-keys-only.conf`:

```
PasswordAuthentication no
KbdInteractiveAuthentication no
```

Then check and reload:

```bash
sudo sshd -t && sudo systemctl reload ssh
```

sshd reads the files in `sshd_config.d` in alphabetical order, and the first value it finds wins. That's why the file name starts with `10-`: it beats any `50-something.conf` that an installer drops in later with `PasswordAuthentication yes`. I tested that exact case with `sshd -T`. After the reload, a password attempt through the tunnel got `Permission denied (publickey)`.

**Know that the Pi can't see who is connecting.** Every login through the tunnel shows up in the Pi's log as coming from localhost:

```
Accepted publickey for pi from ::1 port 49498 ssh2: ED25519 SHA256:...
```

The connection really does arrive from the local ssh client, which forwards what Pinggy sends it. That breaks IP-based tools on the Pi. fail2ban sees every failed login coming from `::1`, which it ignores by default as the machine's own address, so it never bans anyone who comes through the tunnel. And if you made it ban `::1`, you'd lock out every login through the tunnel, yours included. An `AllowUsers pi@198.51.100.*` rule never matches either. Do the IP filtering at Pinggy instead, before traffic reaches the Pi. The `w:` option takes addresses or CIDR ranges:

```bash
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T -- w:198.51.100.0/24
```

I tested both cases. With my own address on the list, ssh connected normally. With only `198.51.100.0/24` on the list, the connection ended right away with `Connection closed by 139.162.14.64`, which is Pinggy's server, and the Pi never saw it. The allowlist only fits if you connect from addresses you know, such as your office or a VPS.

**Keep the Pi updated.** `sudo apt update && sudo apt full-upgrade` is still the main defence for anything that faces the internet.

## Other ways to reach a Pi

A TCP tunnel gives you real SSH, so `scp`, `rsync`, VS Code and port forwarding all work, and an HTTP tunnel opens any web app. If you only want a shell in a browser, there are two other options:

<table style="width:100%;border-collapse:collapse;font-size:0.95em">
<thead><tr><th style="text-align:left;padding:8px;border-bottom:2px solid #ddd">Option</th><th style="text-align:left;padding:8px;border-bottom:2px solid #ddd">What you get</th><th style="text-align:left;padding:8px;border-bottom:2px solid #ddd">Free tier</th><th style="text-align:left;padding:8px;border-bottom:2px solid #ddd">Catch</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border-bottom:1px solid #eee">Pinggy tunnel (this guide)</td><td style="padding:8px;border-bottom:1px solid #eee">Real SSH and any web app, from any client</td><td style="padding:8px;border-bottom:1px solid #eee">60-minute tunnels, new address each time</td><td style="padding:8px;border-bottom:1px solid #eee">Stable address needs Pro</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid #eee"><a href="/docs/devices/">Pinggy Devices</a></td><td style="padding:8px;border-bottom:1px solid #eee">Shell in the Pinggy dashboard, plus tunnel management</td><td style="padding:8px;border-bottom:1px solid #eee">1 device, 1 open shell</td><td style="padding:8px;border-bottom:1px solid #eee">Needs the Pinggy CLI, which only has x64 and arm64 builds</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid #eee"><a href="https://www.raspberrypi.com/documentation/services/connect.html" target="_blank">Raspberry Pi Connect</a></td><td style="padding:8px;border-bottom:1px solid #eee">Shell and screen sharing in a browser</td><td style="padding:8px;border-bottom:1px solid #eee">Free for personal accounts</td><td style="padding:8px;border-bottom:1px solid #eee">No port access, so no scp or web apps; needs Bookworm or later</td></tr>
</tbody>
</table>

Pinggy Devices needs the Pinggy CLI on the Pi. `curl -fsSL https://pinggy.io/install.sh | sh` installed v0.6.10 for linux-arm64 in my test, into `~/.pinggy/bin` with a link in `~/.local/bin`, and never used sudo. The installer only has x64 and arm64 builds, though, so the Pi needs the 64-bit Raspberry Pi OS. On the original Pi Zero, a Pi 1 or a Pi 2, which only run the 32-bit OS, it stops with "unsupported CPU", while the plain `ssh` commands in this guide work on every Pi. For a full desktop rather than a shell, see the [VNC guide](/blog/remotely_connect_to_iol__using_vnc/).

## Troubleshooting

- **`tcp@free.pinggy.io's password:`** - the Pi has no SSH key. Press Enter, or run `ssh-keygen -t ed25519` once so the prompt goes away for good.
- **`kex_exchange_identification: read: Connection reset by peer`** - the tunnel is up, but nothing listens on that port on the Pi. The tunnel's own output says so too, with `connect_to localhost port 22: failed.` Check `systemctl status ssh` and turn SSH on as above.
- **`Connection closed by <ip>` right away** - your address isn't on the tunnel's `w:` allowlist.
- **`Could not resolve hostname ...run.pinggy-free.link`** - that tunnel has ended and its hostname is gone. Free tunnels end after about 60 minutes, and the restarted one has a new hostname and port, so look in `journalctl -u pinggy-ssh`.
- **ssh warns that the host key changed** - if you use the `HostKeyAlias` config, that's a real warning, so check which machine answered before you accept anything.
- **The browser shows a Pinggy caution page** - that's the free-tier notice; click through it once. It doesn't appear for `curl`, apps or webhooks.

## Conclusion

Most of the work is the two commands: `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T` for the terminal, and the same command without `tcp@` for a web app. The systemd unit keeps the tunnel running, and keys-only SSH plus a Pinggy allowlist take care of the risk that comes with a public SSH port.

To check it yourself, start the tunnel on your Pi, turn off Wi-Fi on your phone, and SSH in over mobile data from an app like Termius. If that works, the Pi is reachable from anywhere your phone is. When the changing address starts to bother you, a Pro token is a one-line change in the unit file.
