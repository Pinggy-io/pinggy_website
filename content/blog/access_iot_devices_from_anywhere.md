---
 title: "Access IoT Devices from Anywhere"
 description: "SSH into a Raspberry Pi or any Linux IoT device from anywhere with one Pinggy TCP tunnel command. No public IP, no port forwarding, works behind NAT and CGNAT."
 date: 2023-06-09T14:15:25+05:30
 lastmod: 2026-11-26T14:15:25+05:30
 draft: false 
 og_image: "images/iot/head.webp"
 tags: ["iot", "ssh", "raspberry pi", "remote access", "tcp"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkFjY2VzcyBJb1QgRGV2aWNlcyBmcm9tIEFueXdoZXJlIiwKICAiZGVzY3JpcHRpb24iOiAiU1NIIGludG8gYSBSYXNwYmVycnkgUGkgb3IgYW55IExpbnV4IElvVCBkZXZpY2UgZnJvbSBhbnl3aGVyZSB3aXRoIGEgUGluZ2d5IFRDUCB0dW5uZWwsIHdpdGhvdXQgYSBwdWJsaWMgSVAgb3IgcG9ydCBmb3J3YXJkaW5nLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9pb3QvaGVhZC53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUNU0iLAogICJzdGVwIjogWwogICAgeyJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDcmVhdGUgYSB0dW5uZWwgdG8geW91ciBJb1QgZGV2aWNlIiwgInRleHQiOiAiT24gdGhlIGRldmljZSwgcnVuICdzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjIgdGNwQGZyZWUucGluZ2d5LmlvJy4gT24gUmFzcGJlcnJ5IFBpIE9TLCBlbmFibGUgU1NIIGZpcnN0IHdpdGggJ3N1ZG8gcmFzcGktY29uZmlnIG5vbmludCBkb19zc2ggMCcuIn0sCiAgICB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIk9idGFpbiB0aGUgcHVibGljIFVSTCIsICJ0ZXh0IjogIk5vdGUgdGhlIGhvc3QgYW5kIHBvcnQgdGhhdCBQaW5nZ3kgcHJpbnRzLiBGcmVlIHR1bm5lbHMgbGFzdCA2MCBtaW51dGVzIGFuZCBnZXQgYSBuZXcgYWRkcmVzcyBvbiBldmVyeSByZWNvbm5lY3QuIn0sCiAgICB7IkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlNTSCBpbnRvIHlvdXIgSW9UIGRldmljZSIsICJ0ZXh0IjogIkZyb20gYW55IG1hY2hpbmUsIHJ1biAnc3NoIC1wIDxwb3J0PiA8dXNlcm5hbWU+QDxob3N0PicuIFVzZSBTU0gga2V5cyBhbmQgYWRkICd3Ojx5b3VyLWlwPicgdG8gdGhlIHR1bm5lbCBjb21tYW5kIHRvIGFsbG93IG9ubHkgeW91ciBJUC4ifSwKICAgIHsiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiVXNlIGEgcGVyc2lzdGVudCBhZGRyZXNzIiwgInRleHQiOiAiU2lnbiBpbiB0byBkYXNoYm9hcmQucGluZ2d5LmlvLCBjb3B5IHlvdXIgYWNjZXNzIHRva2VuIGFuZCBydW4gJ3NzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMiA8YWNjZXNzX3Rva2VuPit0Y3BAcHJvLnBpbmdneS5pbycgZm9yIGEgUHJvIHR1bm5lbCB3aXRoIG5vIHRpbWUgbGltaXQgYW5kIGEgcGVyc2lzdGVudCBhZGRyZXNzLiJ9CiAgXQp9Cjwvc2NyaXB0Pgo="
 outputs:
  - HTML
  - AMP
---

{{< image "iot/head.webp" "Access IoT Devices from Anywhere" >}}

An IoT device is easy to reach while you're on the same network and surprisingly hard to reach from anywhere else. You can SSH into a Raspberry Pi or any Linux board from anywhere in the world with a single command on the device: no public IP, no port forwarding, no router configuration.

{{< llm-context >}}To SSH into an IoT device from anywhere with Pinggy - on the device run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` (SSH listens on port 22), then connect from any machine with `ssh -p <port> <username>@<host>` using the host and port from the output.{{< /llm-context >}}

{{% tldr %}}

1. Run this command on your IoT device such as a Raspberry Pi:
   ```
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io
   ```
2. This creates a TCP tunnel and prints a public address like `tcp://abcde-203-0-113-7.run.pinggy-free.link:43527`.
3. Use the host and port from that address to SSH into your device:
   ```
   ssh -p <port> <username>@<host>
   ```
   Example:
   `ssh -p 43527 alice@abcde-203-0-113-7.run.pinggy-free.link`
4. You now have a shell on the device from any network.

5. Sign in to [dashboard.pinggy.io](https://dashboard.pinggy.io) to see your active tunnels, and use a Pro token for an address that doesn't change.

{{% /tldr %}}

Developers and DevOps engineers need remote access to IoT devices to monitor them, push updates, read logs and fix whatever stopped reporting overnight. SSH is the backbone of that workflow. The problem is that most IoT devices sit behind NAT with no public IP, and a growing share of home, fibre and cellular connections use CGNAT, where port forwarding isn't even an option.

[Pinggy](https://pinggy.io) gets around that from the device side. The device makes one outbound SSH connection to Pinggy, and Pinggy gives it a public host and port that leads back to its SSH server. Nothing on the router changes, and the device doesn't need any software beyond teh SSH client it already has.

There are a few approaches to remote IoT access:

- **SSH remote access** - a full terminal on the device. The most reliable option for headless boards and scripted automation, and light enough for a cellular link.
- **RDP / VNC for remote desktop** - useful when you need the GUI, at the cost of more bandwidth.
- **Vendor cloud portals** - convenient, but tied to one vendor's service and usually limited to what the vendor exposes.

This guide focuses on SSH, which covers most IoT use cases.

## Using Pinggy for SSH from anywhere

Pinggy works with Raspberry Pi, Banana Pi, Orange Pi, NanoPi, Odroid, Rock Pi, NVIDIA Jetson and any other Linux-based device. As long as the device has outbound internet access and runs an SSH server, this works.

On current Raspberry Pi OS, the SSH server is off by default. Turn it on in Raspberry Pi Imager's customisation settings before you flash the card, or on the Pi with `sudo raspi-config nonint do_ssh 0`.

{{< image "iot/ssh_iot_device_through_pinggy_tunnel.webp" "Sequence diagram: a Raspberry Pi behind CGNAT dials out to Pinggy on port 443, Pinggy prints a public host and port, and the laptop's ssh -p 43527 is forwarded down the open tunnel to port 22 while direct inbound SSH is dropped at the router" >}}

**Step 1: Create a tunnel to your IoT device**

On your IoT device, open a terminal and run:

```
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io
```

This connects out to Pinggy's server on port 443, which firewalls almost never block, and sets up a tunnel that forwards traffic back to the device's port 22. The free tier needs no account.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

**Step 2: Obtain the public URL**

After running the command, you'll recieve a public address in this format:

tcp://<span style="background: #fff0f0">abcde-203-0-113-7.run.pinggy-free.link</span>:<span style="background: #e9ecff">43527</span>

Note the hostname and port. Free tunnels last 60 minutes, and the address changes every time you reconnect. The screenshot below shows an older `a.pinggy.link` hostname; the format is otherwise the same.

{{< image "iot/url.webp" "Public URL" >}}

**Step 3: SSH into your IoT device**

From any machine with internet access, run:

```
ssh -p 43527 username@abcde-203-0-113-7.run.pinggy-free.link
```

Replace `username` with your account on the device, and use the hostname and port from your own Pinggy output. The connection goes to Pinggy's server, which passes it through the tunnel to your device.

_Tip: current Raspberry Pi OS images have no default `pi` user. Log in with the username you set in Raspberry Pi Imager._

Anyone who finds the address can try to log in, so use SSH keys (`ssh-copy-id -p 43527 username@host`) and turn off password logins once keys work. To let only your own IP through, add `w:` to the tunnel command:

```
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io w:203.0.113.5
```

## Persistent tunnel address with the Pinggy dashboard

A random address that changes every hour is fine for a quick fix, but not for a device you reach every day. With a Pinggy account you can see a device's current tunnel in the dashboard, and a Pro token removes the 60-minute limit and gives you a persistent address.

**Step 1: Sign in to Pinggy**

Go to [dashboard.pinggy.io](https://dashboard.pinggy.io) and sign in, or create an account if you don't have one.

**Step 2: Get your access token**

Your access token is on the dashboard home page. Copy it. [Pinggy Pro](https://pinggy.io/#prices) costs $3/month, or $2.50/month billed yearly.

**Step 3: Create the tunnel with your token**

```
ssh -p 443 -R0:localhost:22 <access_token>+tcp@pro.pinggy.io
```

Replace `<access_token>` with the token from the dashboard. The running tunnel shows up in the dashboard, so you can find the device's address without being anywhere near it, which helps when you've forgotten what a device in a closet is reachable on.

For a device that should always be reachable, the [run tunnel on startup guide](https://pinggy.io/docs/run_tunnel_on_startup/linux/) sets the tunnel up as a service that comes back after every reboot and network drop.

## Remote desktop access

If you need a GUI rather than a terminal, the same approach works. Start a VNC or RDP server on your device, then tunnel that port instead:

```
ssh -p 443 -R0:localhost:5900 tcp@free.pinggy.io
```

Port 5900 is the default VNC port, and it's where WayVNC listens on a Raspberry Pi running the desktop (enable it with `sudo raspi-config nonint do_vnc 0`). Enter the Pinggy host and port in your VNC viewer. For RDP, tunnel port 3389 instead; our [Raspberry Pi remote desktop guide](/blog/iot_remote_desktop_raspberry_pi/) covers the xrdp setup and the Wayland switch it needs, and the [VNC guide](/blog/remotely_connect_to_iol__using_vnc/) covers VNC on other boards.

VNC doesn't encrypt the session by itself, so add `w:` with your IP here too, and stop the tunnel when you're done.

## Conclusion

One outbound `ssh -p 443` command gives an IoT device behind NAT or CGNAT a public address for SSH, with no router changes and no static IP. The free tier is fine for occasional access; protect it with SSH keys and `w:`, and use a Pro token for devices you need to reach every day.
