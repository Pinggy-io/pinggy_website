---
title: "Access Raspberry Pi Remotely to Control IoT Devices"
description: "Reach a Raspberry Pi or other IoT device from anywhere without port forwarding. SSH, VNC, RDP and web dashboards through a Pinggy tunnel, with commands checked on current Raspberry Pi OS."
og_image: "images/iot/remote_access_raspberry_pi.webp"
tags: ["raspberry pi", "iot", "remote access", "ssh", "RDP"]
outputs:
- HTML
- AMP
date: 2024-06-25T03:57:29+05:30
lastmod: 2026-11-25T14:15:25+05:30
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkFjY2VzcyBSYXNwYmVycnkgUGkgUmVtb3RlbHkgdG8gQ29udHJvbCBJb1QgRGV2aWNlcyIsCiAgImRlc2NyaXB0aW9uIjogIkNvbm5lY3QgdG8gYSBSYXNwYmVycnkgUGkgb3Igb3RoZXIgSW9UIGRldmljZSBmcm9tIGFueXdoZXJlIG92ZXIgdGhlIGludGVybmV0IHdpdGhvdXQgcG9ydCBmb3J3YXJkaW5nLiBVc2UgU1NILCBWTkMsIFJEUCBvciBhIHdlYiBkYXNoYm9hcmQgdGhyb3VnaCBhIFBpbmdneSB0dW5uZWwgdGhhdCB0aGUgUGkgb3BlbnMgd2l0aCBvbmUgb3V0Ym91bmQgU1NIIGNvbW1hbmQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2lvdC9yZW1vdGVfYWNjZXNzX3Jhc3BiZXJyeV9waS53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUMzBNIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCBVcCBSZW1vdGUgQWNjZXNzIFVzaW5nIFNTSCIsCiAgICAgICJ0ZXh0IjogIkVuYWJsZSB0aGUgU1NIIHNlcnZlciBvbiBSYXNwYmVycnkgUGkgT1Mgd2l0aCAnc3VkbyByYXNwaS1jb25maWcgbm9uaW50IGRvX3NzaCAwJywgcnVuICdzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjIgdGNwQGZyZWUucGluZ2d5LmlvJyBvbiB0aGUgUGksIHRoZW4gY29ubmVjdCBmcm9tIGFueXdoZXJlIHdpdGggJ3NzaCAtcCA8cG9ydD4gPHVzZXJuYW1lPkA8aG9zdD4nIHVzaW5nIHRoZSBwcmludGVkIGFkZHJlc3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCBVcCBSZW1vdGUgQWNjZXNzIFVzaW5nIFZOQyIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgVGlnaHRWTkMgc2VydmVyIHdpdGggJ3N1ZG8gYXB0IGluc3RhbGwgdGlnaHR2bmNzZXJ2ZXInIGFuZCBzdGFydCBpdCB3aXRoICd2bmNzZXJ2ZXInIChkaXNwbGF5IDoxLCBwb3J0IDU5MDEpLCBvciBlbmFibGUgdGhlIGJ1aWx0LWluIFdheVZOQyBzZXJ2ZXIgb24gcG9ydCA1OTAwLiBUdW5uZWwgdGhlIHBvcnQgd2l0aCAnc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjU5MDEgdGNwQGZyZWUucGluZ2d5LmlvJyBhbmQgZW50ZXIgaG9zdDo6cG9ydCBpbiBhIFZOQyB2aWV3ZXIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCBVcCBSZW1vdGUgRGVza3RvcCBBY2Nlc3MgVXNpbmcgUkRQIiwKICAgICAgInRleHQiOiAiU3dpdGNoIFJhc3BiZXJyeSBQaSBPUyB0byB0aGUgWDExIGRlc2t0b3Agd2l0aCAnc3VkbyByYXNwaS1jb25maWcgbm9uaW50IGRvX3dheWxhbmQgVzEnLCBpbnN0YWxsIHhyZHAsIHJlYm9vdCwgYW5kIHJ1biAnc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMzODkgdGNwQGZyZWUucGluZ2d5LmlvJy4gQ29ubmVjdCB3aXRoIFJlbW90ZSBEZXNrdG9wIENvbm5lY3Rpb24gb24gV2luZG93cyBvciBXaW5kb3dzIEFwcCBvbiBNYWMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNoYXJlIGEgV2ViIERhc2hib2FyZCIsCiAgICAgICJ0ZXh0IjogIlJ1biBhIHdlYiBhcHAgb24gdGhlIFBpLCBmb3IgZXhhbXBsZSBhbiBFeHByZXNzIHNlcnZlciBvbiBwb3J0IDMwMDAsIGFuZCBydW4gJ3NzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIC0tIGI6YWRtaW46YS1sb25nLXBhc3N3b3JkJyB0byBnZXQgYSBwYXNzd29yZC1wcm90ZWN0ZWQgcHVibGljIEhUVFBTIFVSTC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiTW9uaXRvciBTeXN0ZW0gTWV0cmljcyIsCiAgICAgICJ0ZXh0IjogIkNoZWNrIENQVSwgbWVtb3J5IGFuZCBwcm9jZXNzZXMgd2l0aCBodG9wIG92ZXIgU1NILCBvciBzZXJ2ZSBDUFUsIG1lbW9yeSBhbmQgZGlzayB1c2FnZSBmcm9tIGEgRmFzdEFQSSBhbmQgcHN1dGlsIGFwcCBvbiBwb3J0IDgwMDAgdGhyb3VnaCBhIFBpbmdneSB0dW5uZWwuIEEgZnVsbCBleGFtcGxlIGlzIGF0ICdodHRwczovL3BpbmdneS5pby9ibG9nL3JlbW90ZV9zeXN0ZW1fbW9uaXRvcmluZ193aXRoX2Zhc3RhcGlfYW5kX3BpbmdneS8nLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
draft: false
---

{{< image "iot/remote_access_raspberry_pi.webp" "Access raspberry pi remotely to control iot devices" >}}

A Raspberry Pi running sensors or relays is easy to reach on your own Wi-Fi and hard to reach from anywhere else. This guide shows how to **connect to a Raspberry Pi or other IoT device from anywhere over the internet without port forwarding**, using SSH, VNC, RDP or a web app, each with one outbound SSH command on the Pi.

{{< llm-context >}}To access a Raspberry Pi remotely with Pinggy - enable SSH (`sudo raspi-config nonint do_ssh 0`), run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` on the Pi, then run `ssh -p <port> <username>@<host>` with the printed address. Tunnel port 5901 for VNC, 3389 for xrdp, or `ssh -p 443 -R0:localhost:3000 free.pinggy.io` for a web app.{{< /llm-context >}}

## Why Remote Access Matters for IoT Projects

Watching a home automation system, reading sensor data or fixing a project that stopped reporting all need a way in from outside. The traditional methods have problems:

- **Port forwarding** puts a port on your public IP where every scanner on the internet can find it
- **Dynamic IPs** change without warning
- **CGNAT** (Carrier-Grade NAT) blocks incoming connections entirely, and it's common on mobile and fibre connections
- **Corporate and campus firewalls** often block outbound traffic on everything except ports 80 and 443

## Four Ways to Access Your Raspberry Pi Remotely

Here are the methods we'll cover, each suited to a different job:

1. **SSH (Command Line)** - server management, file transfers, and running scripts remotely
2. **VNC (Desktop GUI)** - when you need a full desktop for configuration or development
3. **RDP (Remote Desktop)** - for Windows and Mac users who already have an RDP client
4. **Web Applications** - custom dashboards, APIs, or web-based IoT control panels

None need a router change: the Pi connects out on port 443, which almost every network allows.


{{% tldr %}}


1. **Step 1.** Run these commands on your Raspberry Pi (xrdp needs the X11 desktop on current Raspberry Pi OS):
   ```
   sudo raspi-config nonint do_wayland W1
   sudo apt update && sudo apt install -y xrdp
   sudo reboot
   ```
2. **Step 2.** Run this command to get a public address for your Raspberry Pi:

   ```
   ssh -p 443 -R0:localhost:3389 tcp@free.pinggy.io
   ```

   You will get a URL and port in the output such as:<br>
   tcp://<span style="background: #fff0f0">abcde-203-0-113-7.run.pinggy-free.link</span>:<span style="background: #e9ecff">43527</span>

3. **Step 3.** Open _Remote Desktop Connection_ on Windows or _Windows App_ (formerly Microsoft Remote Desktop) on Mac. Enter the host and port, without `tcp://`, to connect.<br>
   Example: `abcde-203-0-113-7.run.pinggy-free.link:43527`

4. Sign in to <a href="https://dashboard.pinggy.io" target="_blank">dashboard.pinggy.io</a> to see your active tunnel URLs.

{{% /tldr %}}

<br/>

{{< iframe src="https://www.youtube.com/embed/HvI7FJngFDw" title="YouTube video player" >}}


#### The Challenge with Port Forwarding

**Internet Service Providers** (ISPs) often put home connections behind NAT or CGNAT, where port forwarding is either awkward or impossible. And when it does work, it exposes the device directly to the internet.

Here, we'll set up a Raspberry Pi for remote access without port forwarding, using [Pinggy.io](https://pinggy.io).

[Pinggy](https://pinggy.io) is a tunneling service that gives a public address to a port on your localhost, even behind NAT or a firewall, using the SSH client Raspberry Pi OS already has.

## Method 1: SSH Access - Your Command Line Gateway

SSH is the first thing to set up. Updating packages, reading logs and running Python scripts all work over a terminal, and SCP/SFTP move files over the same connection.

**Why SSH is perfect for IoT:**
- Light on bandwidth, so it works over slow or cellular links
- Encrypted end to end
- Works on headless boards with no monitor or desktop
- Easy to script and automate

Raspberry Pi OS ships with SSH turned off and no default `pi` user. Enable SSH in Raspberry Pi Imager's customisation settings, or later with `sudo raspi-config nonint do_ssh 0`, and log in with the username you set in Imager.

#### Using Pinggy for remote SSH access

The same steps work on Banana Pi, Orange Pi, NanoPi, Odroid, Rock Pi, NVIDIA Jetson and other Linux boards running an SSH server. The free tier needs no account.

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io
   ```

   Pinggy forwards a random public TCP port back down this connection to port 22.

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will recieve a public address in this format: `tcp://abcde-203-0-113-7.run.pinggy-free.link:43527`. The older screenshot below shows the previous `a.free.pinggy.link` domain.

    {{< image "iot/public_url.webp" "Pinggy TCP tunnel output with the public host and port for SSH into a Raspberry Pi" >}}

3. Connect from your laptop with the host and port from the output and your own username:

   ```bash
   ssh -p 43527 username@abcde-203-0-113-7.run.pinggy-free.link
   ```

Anyone who finds the address can try to log in, so use SSH keys (`ssh-copy-id`) and a strong password. To let only your IP through, add `w:` and your public IP: `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io w:203.0.113.5`.

A free [Pinggy account](https://dashboard.pinggy.io/) lets you look up the current address from the dashboard, and the [run tunnel on startup guide](https://pinggy.io/docs/run_tunnel_on_startup/linux/) brings the tunnel back on every boot.

## Method 2: VNC Access - Full Desktop Experience

Sometimes you need more than a command line: a Python GUI app, a camera preview, or a tool with no CLI. VNC streams a desktop from the Pi to your computer.

**When to use VNC:**
- Setting up software that only has a graphical installer
- Debugging visual applications or GPIO projects with an on-screen display
- Teaching others how to use the Raspberry Pi
- When you want a desktop environment instead of a shell

A Pi that boots to the desktop already has WayVNC, which shares the screen on port 5900: turn it on with `sudo raspi-config nonint do_vnc 0` and tunnel 5900 instead of 5901 below. On boards without a desktop, TightVNC gives you a separate virtual desktop on port 5901.

#### Install TightVNC server on Raspberry Pi

1. Open a terminal on your Raspberry Pi and run these two commands. The first updates the system; the second installs TightVNC Server (1.3.10 in Debian 13, which current Raspberry Pi OS is based on).

   ```bash
   sudo apt update && sudo apt full-upgrade
   sudo apt install tightvncserver
   ```

2. When the installation finishes, start the server:

   ```bash
   vncserver
   ```

   The first time, it asks you to set a VNC password. Only the first eight characters count.

   {{< image "iot/tightvnc_server.webp" "TightVNC Server asking for a new VNC password on a Raspberry Pi" >}}

3. After setting the password, you'll see a message like this:

   ```bash
   New 'X' desktop is raspberrypi:1
   ```

The VNC server is running display `:1`, which listens on port 5901. If you later see only a grey screen, the board has no desktop installed; `sudo apt install xfce4 dbus-x11` gives it one.

#### Using Pinggy for remote VNC access

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:5901 tcp@free.pinggy.io
   ```

   This creates a TCP tunnel from a random public port on Pinggy to port 5901 on the Pi.

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to VNC server:" portstring="VNC server Port" localport="5901" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will get a public address in this format: `tcp://abcde-203-0-113-7.run.pinggy-free.link:43527`

3. Open a VNC viewer on your laptop or PC and enter the host and port, without `tcp://`.

TightVNC doesn't encrypt the session, so your screen and keystrokes travel in the clear between your viewer and Pinggy. Add `w:` with your IP to the tunnel, and stop it when you're done.

#### Install VNC Viewer on your laptop or PC

Your computer needs a VNC client. On Windows, download TightVNC from the {{< link href="https://www.tightvnc.com/download.php" >}}official website{{< /link >}} and install the viewer. TightVNC is Windows-only, so on Mac or Linux use the <a href="https://github.com/TigerVNC/tigervnc/releases" target="_blank">TigerVNC viewer</a>.

Type the address into **Remote Host** with two colons before the port, like `abcde-203-0-113-7.run.pinggy-free.link::43527` (one colon means a display number), click **Connect** and enter the VNC password.

{{< image "iot/vnc_viewer.webp" "TightVNC Viewer new connection window where the Pinggy host and port go into Remote Host" >}}

## Method 3: RDP Access - Windows-Style Remote Desktop

If you come from Windows, RDP will feel familiar. xrdp implements Microsoft's protocol on Linux, so the Remote Desktop Connection app built into Windows can open a Pi desktop.

**Why choose RDP:**
- Familiar interface for Windows users
- Built into Windows, and a free Microsoft client on Mac
- Often smoother than VNC on slow links
- Clipboard sharing and an encrypted session

#### Install xrdp on Raspberry Pi

1. Current Raspberry Pi OS runs the desktop on labwc, a Wayland compositor, and xrdp shows a black screen with it. Switch the Pi to the X11 desktop first, then install xrdp and reboot:

   ```bash
   sudo raspi-config nonint do_wayland W1
   sudo apt update
   sudo apt install xrdp
   sudo reboot
   ```

   The package enables xrdp at boot. On other Debian or Ubuntu boards, skip the `raspi-config` line.

#### Using Pinggy for remote desktop (RDP) access

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:3389 tcp@free.pinggy.io
   ```

   This creates a TCP tunnel from a random public port on Pinggy to port 3389, where xrdp listens.

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to RDP server:" portstring="RDP server Port" localport="3389" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will get a public address in this format: `tcp://abcde-203-0-113-7.run.pinggy-free.link:43527`

3. Enter that host and port, without `tcp://`, in an RDP client on your laptop or PC.

xrdp logs in with your Pi account, so use a long password, and add `w:` with your IP to the tunnel when you can.

#### Connect to remote desktop

On Windows, open **Remote Desktop Connection**. On Mac, install **Windows App** from the App Store, which replaced Microsoft Remote Desktop and keeps the same **Add PC** dialog. Enter `host:port` as the PC name, accept the certificate warning if one appears (xrdp's certificate is self-signed), and sign in with your Pi username and password.

{{< image "pirdp/rdp.webp" "Adding a Raspberry Pi to Microsoft Remote Desktop on Mac with a Pinggy host and port as the PC name" >}}

## Method 4: Web Application Access - Custom Dashboards and APIs

Maybe you've built a sensor dashboard, a home automation control panel, or an API that serves readings from your Pi. Once it's reachable from outside, you can check it from your phone.

**Perfect for:**
- IoT sensor dashboards and monitoring interfaces
- Home automation control panels
- REST APIs serving sensor data
- Custom web applications for device management

Let's say you have a Node.js web server on your Pi. Raspberry Pi OS packages Node.js 20, enough for Express 5 (`sudo apt install nodejs npm`, then `npm init -y && npm install express` in a new folder).

```javascript
const express = require("express");
const app = express();
const port = 3000;

// Simple IoT dashboard example
app.get("/", (req, res) => {
  res.send(`
    <h1>My IoT Dashboard</h1>
    <p>Temperature: 23.5°C</p>
    <p>Humidity: 65%</p>
    <p>Last updated: ${new Date().toLocaleString()}</p>
  `);
});

// API endpoint for sensor data
app.get("/api/sensors", (req, res) => {
  res.json({
    temperature: 23.5,
    humidity: 65,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`IoT Dashboard running at http://localhost:${port}`);
});
```

Save this code as `iot-dashboard.js` and run it:

```bash
node iot-dashboard.js
```

If you're building something more advanced than a demo dashboard - a production IoT platform with device fleets, secure APIs, and analytics - companies like SCAND specialize in {{< link href="https://scand.com/industries/iot/" >}}end-to-end IoT application development{{< /link >}}.

Right now teh app is only reachable on your local network.

#### Using Pinggy for remote access

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:3000 -o ServerAliveInterval=30 free.pinggy.io
   ```

   {{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to your web server:" portstring="Web server Port" localport="3000" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will get a public HTTPS URL like this:

   `https://abcde-203-0-113-7.run.pinggy-free.link`

3. Open that URL in a browser on your laptop or phone.

If you add routes that switch a relay or GPIO pin, anyone with the URL can flip them, so add basic auth: `ssh -p 443 -R0:localhost:3000 free.pinggy.io -- b:admin:a-long-password`.

## Bonus: Monitor Your Pi's Health Remotely

A project eating CPU or memory explains a lot of crashes that otherwise seem random.

`htop` is like Task Manager for Linux. It shows live CPU, memory and per-process usage.

#### Installing htop on Raspberry Pi

If `htop` isn't already installed, open a terminal on your Raspberry Pi and run:

```bash
sudo apt update
sudo apt install htop
```

#### Using Pinggy for remotely monitoring iot using htop

htop runs inside an SSH session, so start the SSH tunnel from Method 1 and connect to it.

#### Using HTOP to monitor system resources

Once you're logged in over SSH, start htop:

```bash
htop
```

You get per-core CPU bars, memory and swap usage, and a process list you can sort with F6 and filter with F4. Press F9 to kill a runaway process.

{{< image "iot/htop.webp" "htop showing CPU, memory and processes on a Raspberry Pi over a remote SSH session" >}}

## Monitoring Raspberry Pi System Metrics

htop is good for a quick look over SSH. To read the numbers without logging in, or poll them from a script, run a small API (FastAPI + psutil) that serves CPU, RAM and disk usage over HTTP, and tunnel that instead.

See our *[Remote System Monitoring with FastAPI and Pinggy article](/blog/remote_system_monitoring_with_fastapi_and_pinggy/)* for a ready-to-use example. The original source code is on {{< link href="https://github.com/AbhilashK26/Remote_system_monitoring_with_FastAPI_and_Pinggy" >}}GitHub{{< /link >}}. Once the app is running on port 8000, create a tunnel with a password on it:

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -- b:monitor:change-me
```

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to FastAPI:" portstring="FastAPI Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

Only someone with the URL and the password can read your metrics. Use htop for interactive checks and the FastAPI endpoints for automated ones.

## Tips

Use the [Pinggy Dashboard](https://dashboard.pinggy.io/) to see your active tunnels and their addresses.

{{< image "iot/pinggy_dashboard.webp" "Pinggy Dashboard listing active tunnels" >}}

Free tunnels close after 60 minutes and come back on a new random address. For a Pi you reach every day, [Pinggy Pro](https://pinggy.io/#prices) costs $3/month, or $2.50/month billed yearly, and removes the time limit and gives you a persistent subdomain.

## Conclusion

A Raspberry Pi behind NAT or CGNAT doesn't need port forwarding: one outbound `ssh -p 443` command gives it a public address for SSH, VNC, RDP or a web dashboard. Lock each tunnel down with SSH keys, `w:` IP whitelisting or `b:` basic auth, and use a Pro token when the Pi needs a fixed address.
