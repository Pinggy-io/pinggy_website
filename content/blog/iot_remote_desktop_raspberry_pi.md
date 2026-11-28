---
 title: "Remote Desktop for Raspberry Pi and other IoT devices"
 description: "Reach your Raspberry Pi desktop from anywhere over RDP with xrdp and a Pinggy TCP tunnel, no port forwarding. Covers the Wayland/labwc black screen, the same-user login clash and Raspberry Pi Connect."
 date: 2023-08-11T14:15:25+05:30
 lastmod: 2026-11-27T14:15:25+05:30
 draft: false
 og_image: "images/pirdp/pirdp.webp"
 tags: ["raspberry pi", "RDP", "remote access", "iot", "tcp"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlJlbW90ZSBEZXNrdG9wIGZvciBSYXNwYmVycnkgUGkgYW5kIG90aGVyIElvVCBkZXZpY2VzIiwKICAiZGVzY3JpcHRpb24iOiAiUmVhY2ggYSBSYXNwYmVycnkgUGkgZGVza3RvcCBmcm9tIGFueXdoZXJlIG92ZXIgUkRQIHVzaW5nIHhyZHAgb24gdGhlIFBpIGFuZCBhIFBpbmdneSBUQ1AgdHVubmVsLCB3aXRob3V0IHBvcnQgZm9yd2FyZGluZy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvcGlyZHAvcGlyZHAud2VicCIsCiAgInRvdGFsVGltZSI6ICJQVDE1TSIsCiAgInN0ZXAiOiBbCiAgICB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlN3aXRjaCB0aGUgUGkgdG8gWDExIiwgInRleHQiOiAiT24gY3VycmVudCBSYXNwYmVycnkgUGkgT1MsIHJ1biAnc3VkbyByYXNwaS1jb25maWcgbm9uaW50IGRvX3dheWxhbmQgVzEnIGFuZCByZWJvb3QsIGJlY2F1c2UgeHJkcCBkb2VzIG5vdCB3b3JrIHdpdGggdGhlIGxhYndjIFdheWxhbmQgY29tcG9zaXRvci4ifSwKICAgIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiSW5zdGFsbCB0aGUgUkRQIHNlcnZlciIsICJ0ZXh0IjogIlJ1biAnc3VkbyBhcHQgdXBkYXRlJywgJ3N1ZG8gYXB0IGluc3RhbGwgeHJkcCcgYW5kICdzdWRvIHN5c3RlbWN0bCBlbmFibGUgLS1ub3cgeHJkcCcuIFR1cm4gb2ZmIGF1dG8tbG9naW4gb3IgY3JlYXRlIGEgc2VwYXJhdGUgdXNlciwgc2luY2Ugb25lIHVzZXIgY2FuJ3QgYmUgbG9nZ2VkIGluIGxvY2FsbHkgYW5kIG92ZXIgeHJkcCBhdCB0aGUgc2FtZSB0aW1lLiJ9LAogICAgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTdGFydCBhIFBpbmdneSBUQ1AgdHVubmVsIiwgInRleHQiOiAiUnVuICdzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MzM4OSB0Y3BAZnJlZS5waW5nZ3kuaW8nIG9uIHRoZSBQaS4ifSwKICAgIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiTm90ZSB0aGUgcHVibGljIFVSTCIsICJ0ZXh0IjogIkNvcHkgdGhlIGhvc3QgYW5kIHBvcnQgdGhhdCBQaW5nZ3kgcHJpbnRzLCB3aXRob3V0IHRoZSB0Y3A6Ly8gcHJlZml4LiJ9LAogICAgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDb25uZWN0IGZyb20gdGhlIFJEUCBjbGllbnQiLCAidGV4dCI6ICJFbnRlciBob3N0OnBvcnQgYXMgdGhlIFBDIG5hbWUgaW4gUmVtb3RlIERlc2t0b3AgQ29ubmVjdGlvbiBvbiBXaW5kb3dzIG9yIFdpbmRvd3MgQXBwIG9uIG1hY09TLCBpT1MgYW5kIEFuZHJvaWQsIHRoZW4gc2lnbiBpbiB3aXRoIHRoZSBQaSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuIn0KICBdCn0KPC9zY3JpcHQ+Cg=="
 outputs:
  - HTML
  - AMP
---

{{< image "pirdp/pirdp.webp" "Remote Desktop for Raspberry Pi and other IoT devices" >}}

A Raspberry Pi with a desktop is handy to have on a shelf, until you need that desktop from somewhere else. RDP works on a Pi the same way it works on Windows: install an RDP server (xrdp) and connect from any RDP client. The catch is that the Pi sits behind NAT or CGNAT in nearly every real deployment, so the connection needs a tunnel. This post uses Pinggy for that.

One thing to know up front: current Raspberry Pi OS (Trixie, based on Debian 13) runs the desktop on Wayland with the **labwc** compositor, and xrdp gives you a black screen with it. You switch the Pi back to X11 with one `raspi-config` setting, and xrdp works. If you'd rather keep Wayland, **Raspberry Pi Connect** is the Pi team's own browser-based option, covered at the end.

{{< llm-context >}}To get a remote desktop on a Raspberry Pi with Pinggy - switch to X11 with `sudo raspi-config nonint do_wayland W1`, install xrdp (`sudo apt install xrdp`, listens on port 3389), reboot, then run `ssh -p 443 -R0:localhost:3389 tcp@free.pinggy.io` on the Pi and enter the printed host:port in Remote Desktop Connection or Windows App.{{< /llm-context >}}

{{% tldr %}}

1. **Step 1.** On the Pi, switch the desktop session to X11:
   ```
   sudo raspi-config nonint do_wayland W1
   sudo reboot
   ```
2. **Step 2.** Install and start xrdp:
   ```
   sudo apt update
   sudo apt install xrdp
   sudo systemctl enable --now xrdp
   ```
3. **Step 3.** Open a Pinggy TCP tunnel to port 3389:

   ```
   ssh -p 443 -R0:localhost:3389 tcp@free.pinggy.io
   ```

   You'll get a host and port like:<br>
   tcp://<span style="background: #fff0f0">abcde-203-0-113-7.run.pinggy-free.link</span>:<span style="background: #e9ecff">43527</span>

4. **Step 4.** Open **Remote Desktop Connection** (`mstsc.exe`) on Windows, or **Windows App** (formerly Microsoft Remote Desktop) on macOS, iOS and Android. Enter `host:port` to connect.<br>
   Example: `abcde-203-0-113-7.run.pinggy-free.link:43527`

5. Sign in to [dashboard.pinggy.io](https://dashboard.pinggy.io) for an access token; your active tunnels and their addresses show up in the dashboard.

{{% /tldr %}}

<br/>

{{< iframe src="https://www.youtube.com/embed/HvI7FJngFDw" title="YouTube video player" >}}

Reaching a Raspberry Pi by RDP only works if something can route to it, and that's usually the harder part of the problem. Home ISPs put the Pi behind NAT; cellular and many fibre networks put it behind CGNAT, which port forwarding can't get through at all. Pinggy opens a TCP tunnel from the Pi out to a public hostname over port 443, so the RDP client connects to that hostname instead of trying to find the Pi directly.

The video above walks through it. The steps below give the same flow with the gotchas spelled out.

## Step 1. Switch the Pi back to X11 (current Pi OS only)

xrdp doesn't work with **labwc**, the Wayland compositor that Raspberry Pi OS uses by default on every model. On a current install, an RDP login gives you a black or empty screen until you switch to X11.

```bash
sudo raspi-config nonint do_wayland W1
sudo reboot
```

`W1` is the X11 option (the Openbox window manager on X). You can do the same in `sudo raspi-config` under **Advanced Options > Wayland > W1 X11**; the menu number in front of "Wayland" has moved between releases, so look for the name. If you're on an older Pi OS that still defaults to X11, or on a non-Pi board, skip this step.

The tradeoff: WayVNC and Raspberry Pi Connect screen sharing both need Wayland, so they stop working once you're on X11. Pick one approach per Pi.

{{< image "pirdp/raspberry_pi_remote_desktop_x11_vs_wayland.webp" "Matrix of Raspberry Pi remote desktop tools on X11 and Wayland: xrdp works only on X11, WayVNC and Pi Connect screen sharing need Wayland, Pi Connect remote shell and TightVNC work on both" >}}

## Step 2. Install the RDP server

On the Pi (or any Debian-based IoT device), install `xrdp` and enable it as a service:

```bash
sudo apt update
sudo apt install xrdp
sudo systemctl enable --now xrdp
```

`enable --now` starts the service and sets it to come up on boot. Check it's listening with `ss -tlnp | grep 3389`.

One more gotcha: a user can't be logged in on the Pi's own screen and over xrdp at the same time. If the Pi boots with auto-login, your RDP session for that same user ends in a black screen. Either turn auto-login off (**System Options > Auto Login** in `raspi-config`) or create a seperate account just for remote sessions:

```bash
sudo adduser rdpuser
```

## Step 3. Start a Pinggy TCP tunnel

To expose port 3389 over the public internet, start a Pinggy TCP tunnel from the Pi:

```
ssh -p 443 -R0:localhost:3389 tcp@free.pinggy.io
```

It uses the SSH client Raspberry Pi OS already ships with, and the free tier needs no account.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to the RDP server:" portstring="RDP server Port" localport="3389" webdebugenabled=false keepalive=true tryYourselfText="You can customize the command here:" >}}
{{< /pinggytunnel >}}

## Step 4. Note the public URL

Once the SSH tunnel is up you'll see an address like:

tcp://<span style="background: #fff0f0">abcde-203-0-113-7.run.pinggy-free.link</span>:<span style="background: #e9ecff">43527</span>

The hostname (<span style="background: #fff0f0">abcde-203-0-113-7.run.pinggy-free.link</span>) and port (<span style="background: #e9ecff">43527</span>) are what you'll give the RDP client. Leave off the `tcp://` prefix.

If you'd rather not copy the address from the terminal each time, sign in to [dashboard.pinggy.io](https://dashboard.pinggy.io) for an access token. Tunnels started with that token are listed in the dashboard. The screenshot below shows an older `a.pinggy.link` address; free tunnels now get `run.pinggy-free.link` and `free.pinggy.net` hostnames.

{{< image "iot/url.webp"  "Ongoing tunnel URLs" >}}

## Step 5. Connect from the RDP client

On Windows, use **Remote Desktop Connection** (`mstsc.exe`, still built in). On macOS, iOS, iPadOS and Android the client is **Windows App**, which replaced the old "Microsoft Remote Desktop" app and keeps the same **Add PC** dialog.

Enter `hostname:port` (e.g. `abcde-203-0-113-7.run.pinggy-free.link:43527`) as the PC name. Accept the certificate warning, since xrdp uses a self-signed certificate, then sign in with the Pi username and password you created in Raspberry Pi Imager (or the `rdpuser` account from Step 2).

{{< image "pirdp/rdp.webp" "Remote Desktop Connection" >}}

## Tips

**Free tunnels expire after 60 minutes** and the address changes on reconnect. For a Pi you leave running, wrap the tunnel in a loop so it comes back on its own:

```bash
while true; do
    ssh -p 443 -o ServerAliveInterval=30 -R0:localhost:3389 tcp@free.pinggy.io;
    sleep 10;
done
```

With [Pinggy Pro](https://pinggy.io/#prices) ($3/month, or $2.50/month billed yearly) the 60-minute limit goes away and the Pi keeps a persistent address, so you don't have to look it up after every restart. The [run tunnel on startup guide](https://pinggy.io/docs/run_tunnel_on_startup/linux/) sets the tunnel up as a service that starts at boot.

**Lock things down before exposing RDP.** Anyone who finds the address can reach the xrdp login screen, and xrdp checks passwords against the Pi's normal user accounts. Current Raspberry Pi OS has no default `pi` user anymore, but a short password is still a brute-force target, so use a long one. You can also let only your own IP through by adding `w:` to the tunnel command:

```bash
ssh -p 443 -R0:localhost:3389 tcp@free.pinggy.io w:203.0.113.5
```

Replace `203.0.113.5` with the public IP of teh machine you connect from, and stop the tunnel when you're done.

## Alternative: Raspberry Pi Connect

If the xrdp and X11 switch is more friction than you want, **<a href="https://www.raspberrypi.com/software/connect/" target="_blank">Raspberry Pi Connect</a>** is the Pi team's own remote-access service. It uses WebRTC instead of RDP, runs in any browser at `connect.raspberrypi.com`, gets through NAT and CGNAT without a tunnel, and works on the default Wayland desktop. It's installed by default on Raspberry Pi OS Desktop; run `rpi-connect on` and `rpi-connect signin` to link the Pi to your Raspberry Pi ID.

Personal use is free and covers screen sharing, a remote shell and remote updates (pushing scripts or OS updates to a Pi you can't reach in person). Organisation accounts with multiple users and an audit log are billed per device. Connect only shares the screen on Wayland, so it doesn't mix with the X11 switch from Step 1. The connection goes peer to peer when it can and falls back to Raspberry Pi's relay servers when it can't, which means your session depends on their service being up.

For an RDP workflow that fits existing Windows tooling, or for non-Pi boards that Connect doesn't support, xrdp with Pinggy is still the better fit. For "I just need to see my Pi's screen," Connect is the path of least resistence.

## Conclusion

On current Raspberry Pi OS, RDP takes three things: switch the desktop to X11, install xrdp, and tunnel port 3389 with one Pinggy command, which works behind NAT and CGNAT without touching the router. Use a long password, add `w:` with your own IP, and use a Pro token if you want an address that doesn't change after every restart.
