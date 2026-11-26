---
title: "Remotely Connect to IoT Devices Using VNC"
description: "Open the desktop of a Raspberry Pi or other Linux IoT device from anywhere with VNC: enable WayVNC or install TigerVNC, start a Pinggy TCP tunnel with one SSH command, and connect with a VNC viewer."
og_image: "images/remotely_connect_to_iot_devices_using_vnc/thumbnail.webp"
tags: ["VNC", "raspberry pi", "iot", "remote access"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlJlbW90ZWx5IENvbm5lY3QgdG8gSW9UIERldmljZXMgVXNpbmcgVk5DIiwKICAiZGVzY3JpcHRpb24iOiAiT3BlbiB0aGUgZGVza3RvcCBvZiBhIFJhc3BiZXJyeSBQaSBvciBvdGhlciBMaW51eCBJb1QgZGV2aWNlIGZyb20gYW55d2hlcmUgd2l0aCBWTkM6IGVuYWJsZSBXYXlWTkMgb3IgaW5zdGFsbCBUaWdlclZOQywgc3RhcnQgYSBQaW5nZ3kgVENQIHR1bm5lbCB3aXRoIG9uZSBTU0ggY29tbWFuZCwgYW5kIGNvbm5lY3Qgd2l0aCBhIFZOQyB2aWV3ZXIuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3JlbW90ZWx5X2Nvbm5lY3RfdG9faW90X2RldmljZXNfdXNpbmdfdm5jL3RodW1ibmFpbC53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUMzBNIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkVuYWJsZSBXYXlWTkMgb24gUmFzcGJlcnJ5IFBpIE9TIiwKICAgICAgInRleHQiOiAiT24gUmFzcGJlcnJ5IFBpIE9TIHdpdGggdGhlIGRlc2t0b3AgcnVubmluZywgdHVybiBvbiBWTkMgaW4gUHJlZmVyZW5jZXMgPiBDb250cm9sIENlbnRyZSA+IEludGVyZmFjZXMsIG9yIHJ1biAnc3VkbyByYXNwaS1jb25maWcgbm9uaW50IGRvX3ZuYyAwJy4gV2F5Vk5DIGxpc3RlbnMgb24gcG9ydCA1OTAwIGFuZCBhc2tzIGZvciB5b3VyIFJhc3BiZXJyeSBQaSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk9yIGluc3RhbGwgWEZDRSBhbmQgVGlnZXJWTkMgU2VydmVyIG9uIG90aGVyIExpbnV4IGJvYXJkcyIsCiAgICAgICJ0ZXh0IjogIk9uIFVidW50dSwgRGViaWFuIG9yIFJhc3BiZXJyeSBQaSBPUyBMaXRlLCBydW4gJ3N1ZG8gYXB0IGluc3RhbGwgLXkgeGZjZTQgeGZjZTQtZ29vZGllcyBkYnVzLXgxMSB0aWdlcnZuYy1zdGFuZGFsb25lLXNlcnZlciB0aWdlcnZuYy10b29scycsIHNldCBhIHBhc3N3b3JkIHdpdGggJ3ZuY3Bhc3N3ZCcsIHRoZW4gc3RhcnQgYSBkZXNrdG9wIHdpdGggJ3ZuY3NlcnZlciA6MSAtZ2VvbWV0cnkgMTYwMHg5MDAgLS0geGZjZScuIEl0IGxpc3RlbnMgb24gbG9jYWxob3N0IHBvcnQgNTkwMS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIGEgVENQIHR1bm5lbCB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIk9uIHRoZSBkZXZpY2UsIHJ1biAnc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjU5MDEgdGNwQGZyZWUucGluZ2d5LmlvJyAodXNlIHBvcnQgNTkwMCBmb3IgV2F5Vk5DKS4gUGluZ2d5IHByaW50cyBhIHB1YmxpYyBhZGRyZXNzIHN1Y2ggYXMgJ3RjcDovL2FiY2RlLTIwMy0wLTExMy03LnJ1bi5waW5nZ3ktZnJlZS5saW5rOjQzNTI3Jy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBhIFZOQyB2aWV3ZXIgb24geW91ciBQQyIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgdGhlIFRpZ2VyVk5DIHZpZXdlciBvciBSZWFsVk5DIFZpZXdlciBvbiB5b3VyIGxhcHRvcCBvciBkZXNrdG9wLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25uZWN0IHdpdGggdGhlIFBpbmdneSBhZGRyZXNzIiwKICAgICAgInRleHQiOiAiRW50ZXIgdGhlIGhvc3QgYW5kIHBvcnQgZnJvbSBQaW5nZ3kgd2l0aG91dCAndGNwOi8vJywgZm9yIGV4YW1wbGUgJ2FiY2RlLTIwMy0wLTExMy03LnJ1bi5waW5nZ3ktZnJlZS5saW5rOjQzNTI3JywgdGhlbiBlbnRlciB0aGUgVk5DIHBhc3N3b3JkIG9yIHlvdXIgUmFzcGJlcnJ5IFBpIGxvZ2luLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFbmNyeXB0IGFuZCByZXN0cmljdCB0aGUgY29ubmVjdGlvbiIsCiAgICAgICJ0ZXh0IjogIlN0YXJ0IFRpZ2VyVk5DIHdpdGggJy1sb2NhbGhvc3QgeWVzIC1TZWN1cml0eVR5cGVzIFRMU1ZuYycgc28gdGhlIHNlc3Npb24gaXMgZW5jcnlwdGVkLCBhbmQgYWRkICd3Ojx5b3VyIHB1YmxpYyBJUD4nIHRvIHRoZSB0dW5uZWwgY29tbWFuZCBzbyBvbmx5IHlvdXIgSVAgY2FuIGNvbm5lY3QuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
date: 2025-03-12T03:57:29+05:30
lastmod: 2026-11-25T03:57:29+05:30
draft: false
---

{{< image "remotely_connect_to_iot_devices_using_vnc/thumbnail.webp" "Remotely Connect to IoT Devices Using VNC" >}}

Virtual Network Computing (VNC) is a graphical desktop-sharing system built on the Remote Frame Buffer (RFB) protocol. It lets you see and control another computer's desktop over a network, which is handy for IoT boards like
{{< link href="https://www.raspberrypi.com/" >}}Raspberry Pi{{< /link >}}, {{< link href="https://www.nvidia.com/en-in/autonomous-machines/embedded-systems/jetson-nano/product-development/" >}}Nvidia Jetson Nano{{< /link >}} and {{< link href="https://coral.ai/" >}}Google Coral{{< /link >}} that sit somewhere you can't plug in a monitor.

The hard part is usually reaching the device at all, since most boards live behind a home router, a cellular modem or CGNAT with no public port. This guide sets up a VNC server on the device, exposes it with a [Pinggy](https://pinggy.io) TCP tunnel over SSH, and connects to it from a VNC viewer on your laptop. Nothing gets opened on the router.

{{< llm-context >}}To open an IoT device's desktop over VNC with Pinggy - on Raspberry Pi OS with the desktop, run `sudo raspi-config nonint do_vnc 0` to enable WayVNC (port 5900); on Ubuntu, Debian or Pi OS Lite, run `sudo apt install -y xfce4 xfce4-goodies dbus-x11 tigervnc-standalone-server tigervnc-tools`, `vncpasswd`, then `vncserver :1 -geometry 1600x900 -- xfce` (port 5901). Then run `ssh -p 443 -R0:localhost:5901 tcp@free.pinggy.io` (or 5900) and enter the printed host and port, without `tcp://`, in a VNC viewer.{{< /llm-context >}}

{{% tldr %}}

1. **Step 1.** Start a VNC server on your IoT device. On Raspberry Pi OS with the desktop, `sudo raspi-config nonint do_vnc 0` turns on WayVNC (port `5900`). On Ubuntu, Debian or Pi OS Lite, install XFCE and TigerVNC (port `5901`):

```
sudo apt update
sudo apt install -y xfce4 xfce4-goodies dbus-x11 tigervnc-standalone-server tigervnc-tools
vncpasswd
vncserver :1 -geometry 1600x900 -- xfce
```

2. **Step 2.** Create a TCP tunnel with [Pinggy](https://pinggy.io/) to the VNC port (`5900` for WayVNC):

```
ssh -p 443 -R0:localhost:5901 tcp@free.pinggy.io
```

You will recieve an address like `tcp://abcde-203-0-113-7.run.pinggy-free.link:43527`.

3. **Step 3.** Install a VNC viewer on your PC:

- TigerVNC: <a href="https://github.com/TigerVNC/tigervnc/releases" target="_blank">Download here</a>

- RealVNC: <a href="https://www.realvnc.com/en/connect/download/viewer/" target="_blank">Download here</a>

Enter the host and port without `tcp://`, for example `abcde-203-0-113-7.run.pinggy-free.link:43527`, then your VNC password (or your Pi login for WayVNC).

{{% /tldr %}}


### Step-by-Step Guide

**Running Raspberry Pi OS with the desktop?** Current Raspberry Pi OS, based on Debian 13 "trixie", runs the labwc Wayland compositor and ships {{< link href="https://github.com/any1/wayvnc" >}}WayVNC{{< /link >}}, which shares the desktop already on screen. Turn it on in **Preferences > Control Centre > Interfaces > VNC**, in `sudo raspi-config` under **3 Interface Options > I3 VNC**, or over SSH:

```bash
sudo raspi-config nonint do_vnc 0
```

WayVNC listens on port `5900`, takes your Pi username and password, and encrypts the session, so skip to Step 3 and tunnel port `5900`. If the Pi boots to the console, labwc isn't running and raspi-config enables RealVNC Server instead (see the {{< link href="https://www.raspberrypi.com/documentation/computers/remote-access.html#vnc" >}}Raspberry Pi docs{{< /link >}}).

Steps 1 and 2 are for boards with no desktop to share: Raspberry Pi OS Lite, Ubuntu Server and most Debian-based IoT images.

#### (Optional) Step 1: Install Desktop Environment  

If your device has no graphical desktop, install XFCE, which is light enough for small boards. `xfce4-goodies` is optional, and `dbus-x11` lets the session start inside a VNC server:

```bash
sudo apt update && sudo apt upgrade -y  
sudo apt install -y xfce4 xfce4-goodies dbus-x11
```

#### Step 2: Install and Configure a VNC Server

There are several VNC servers for Linux, such as {{< link href="https://tigervnc.org/" >}}TigerVNC{{< /link >}}, {{< link href="https://www.tightvnc.com/" >}}TightVNC{{< /link >}} and {{< link href="https://www.realvnc.com/en/connect/download/vnc/" >}}RealVNC Server{{< /link >}}. We'll use TigerVNC: it's maintained (Debian trixie packages 1.15.0) and supports TLS. Older guides, and the screenshots below, use `tightvncserver`. It still installs and works, but it's the old TightVNC 1.3.10 release with classic VNC authentication and no encryption.

1. **Install the VNC Server:**

```bash
sudo apt install -y tigervnc-standalone-server tigervnc-tools
```

On the older TightVNC route, the command is `sudo apt install -y tightvncserver`, which is what this screenshot shows:

{{< image "remotely_connect_to_iot_devices_using_vnc/install_tightvncserver.png" "Terminal installing the tightvncserver package with apt on a Linux IoT device" >}}

2. **Set VNC Password:**

Run this as the user who will own the desktop, not with `sudo`:

```bash
vncpasswd
```

With `tightvncserver`, the first `vncserver` run asks for the password instead.

{{< image "remotely_connect_to_iot_devices_using_vnc/set_password.webp" "Set VNC Password" >}}

You'll be prompted for:
- A mandatory access password, 6 to 8 characters (longer ones are cut or refused)
- An optional view-only password (you can skip it)

On the TightVNC route, stop the instance that first run started:

```bash
vncserver -kill :1
```

3. **Configure VNC Startup File:**

TigerVNC doesn't need one, because you name the session when you start it in the next step. For `tightvncserver`, back up the original startup file and replace it with one that runs XFCE:

```bash
mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
printf '#!/bin/bash\nxrdb $HOME/.Xresources\nstartxfce4 &\n' > ~/.vnc/xstartup
chmod +x ~/.vnc/xstartup
```

4. **Start the VNC Server:**

```bash
vncserver :1 -geometry 1600x900 -- xfce
```

On Debian and Ubuntu, TigerVNC's `vncserver` wrapper listens only on `localhost:5901` by default, which is exactly what teh tunnel needs. On the TightVNC route, run `vncserver -localhost :1`; without `-localhost` it listens on port `5901` on every interface.

#### Step 3: Secure Remote Access Using Pinggy

On the device, start a [Pinggy](https://pinggy.io/) TCP tunnel to the VNC port. It only needs the OpenSSH client:

```bash
ssh -p 443 -R0:localhost:5901 tcp@free.pinggy.io
```

Use `5900` instead of `5901` for WayVNC on Raspberry Pi OS.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to VNC server:" portstring="VNC server Port" localport="5901" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

Pinggy answers with a public address:

```
You are not authenticated.
Your tunnel will expire in 60 minutes. Upgrade to Pinggy Pro to get unrestricted tunnels. https://dashboard.pinggy.io
tcp://abcde-203-0-113-7.run.pinggy-free.link:43527
```

{{< image "remotely_connect_to_iot_devices_using_vnc/pinggy_public_url.webp" "Pinggy printing a public TCP address for a VNC server tunnel" >}}

Your hostname may look different from the screenshot's; copy whatever yours prints. A free tunnel lasts 60 minutes and gets a new address on every reconnect. A [Pinggy Pro](https://pinggy.io/#prices) token removes the time limit, but TCP ports still change per connection unless you reserve one in the dashboard. If the tunnel drops on a flaky connection, add `-o ServerAliveInterval=60` to the command.

#### Step 4: Installing VNC Viewer on Your Laptop/PC

Install a VNC viewer on your local machine:

- **TigerVNC Viewer:** {{< link href="https://github.com/TigerVNC/tigervnc/releases" >}}Download TigerVNC{{< /link >}}. The Raspberry Pi docs recommend it, and it handles WayVNC's encryption and the TLS setup below.
- **RealVNC Viewer:** {{< link href="https://www.realvnc.com/en/connect/download/viewer/" >}}Download RealVNC Viewer{{< /link >}}

Open the viewer and enter the host and port from Pinggy, without `tcp://`:

- Example: `abcde-203-0-113-7.run.pinggy-free.link:43527`

TigerVNC only reads `host:N` as a display number when N is below 100, so a five-digit Pinggy port goes straight through; `host::43527` with two colons always means a port. Click **Connect** and enter your VNC password, or your Pi username and password for WayVNC. WayVNC's certificate is self-signed, so TigerVNC warns about it on first connect, and the Raspberry Pi docs say to accept.

{{< image "remotely_connect_to_iot_devices_using_vnc/real_vnc_nav_bar.webp" "connect using realvnc viewer" >}}

{{< image "remotely_connect_to_iot_devices_using_vnc/password_real_vnc.webp" "enter password realvnc viewer" >}}

### Best Practices and Security Tips

The leg from the device to Pinggy is SSH, so it's always encrypted. The leg from your viewer to Pinggy carries VNC exactly as the server speaks it, so it's only encrypted if the VNC server is.

- **Strong Passwords:** WayVNC uses your Pi login, so give that account a strong password. Classic VNC passwords stop at 8 characters, so use 8 random ones, not a word.
- **Encrypt the VNC Session:** WayVNC encrypts out of the box. TigerVNC on Debian and Ubuntu defaults to `VncAuth`, which keeps the password off the wire but sends your screen and keystrokes unencrypted. Start it with TLS instead, and keep `-localhost yes`, because once you list a TLS type the wrapper otherwise listens on every interface:

```bash
vncserver -kill :1
vncserver :1 -localhost yes -SecurityTypes TLSVnc -geometry 1600x900 -- xfce
```

`TLSVnc` is anonymous TLS: it encrypts the session but doesn't verify the server's identity. Connect with the TigerVNC viewer, since viewers without VeNCrypt support won't connect. `tightvncserver` can't encrypt at all.

- **Firewall Management:** The tunnel needs no inbound port, so keep the router closed and the VNC server on `localhost`. To limit who can reach the public port, add Pinggy's {{< link href="/docs/tcp_tunnels/ip_whitelist/" newtab=false >}}IP whitelist{{< /link >}} with your public IP; a comma-separated list allows several:

```bash
ssh -p 443 -R0:localhost:5901 -t tcp@free.pinggy.io w:203.0.113.5
```

- **Close It When Done:** Ctrl+C on the `ssh` command closes the public port right away.

### Conclusion

You now have a VNC server on your IoT device (WayVNC on Raspberry Pi OS, or TigerVNC with XFCE elsewhere), a Pinggy TCP tunnel carrying it out from behind NAT, and a viewer on your laptop to open the desktop. Before you leave it running, make sure the VNC session itself is encrypted and put your IP on the tunnel's whitelist.
