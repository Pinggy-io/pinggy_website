---
title: "How to Manage Remote IoT Devices Behind NAT Without Opening Ports"
description: "Manage remote IoT devices such as Raspberry Pis behind NAT or CGNAT without opening ports: get a browser terminal, tunnel SSH, check device health, update safely and lock down access with Pinggy."
date: 2026-11-13T07:30:00+05:30
lastmod: 2026-11-13T07:30:00+05:30
draft: false
tags: ["iot", "remote access", "raspberry pi", "terminal", "Pinggy"]
eyebrow: "IoT"
og_image: "images/manage_remote_iot_devices_behind_nat/manage_remote_iot_devices_behind_nat_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIE1hbmFnZSBSZW1vdGUgSW9UIERldmljZXMgQmVoaW5kIE5BVCBXaXRob3V0IE9wZW5pbmcgUG9ydHMiLAogICJkZXNjcmlwdGlvbiI6ICJSZWFjaCwgbW9uaXRvciBhbmQgbWFpbnRhaW4gcmVtb3RlIElvVCBkZXZpY2VzIHN1Y2ggYXMgUmFzcGJlcnJ5IFBpcyBiZWhpbmQgTkFUIG9yIENHTkFUIHdpdGggUGluZ2d5OiBhIGJyb3dzZXIgdGVybWluYWwgd2l0aCBQaW5nZ3kgRGV2aWNlcywgYSBUQ1AgdHVubmVsIGZvciBTU0gsIGEgaGVhbHRoLWNoZWNrIHNjcmlwdCwgc2FmZSB1cGRhdGUgaGFiaXRzIGFuZCB0b2tlbiBoeWdpZW5lLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9tYW5hZ2VfcmVtb3RlX2lvdF9kZXZpY2VzX2JlaGluZF9uYXQvbWFuYWdlX3JlbW90ZV9pb3RfZGV2aWNlc19iZWhpbmRfbmF0X2Jhbm5lci53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMTNUMDc6MzA6MDArMDU6MzAiLAogICJ0b29sIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiUGluZ2d5IENMSSIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIkEgTGludXggb3IgbWFjT1MgZGV2aWNlIHdpdGggU1NIIiB9CiAgXSwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbm5lY3QgdGhlIGRldmljZSB0byB0aGUgUGluZ2d5IGRhc2hib2FyZCIsCiAgICAgICJ0ZXh0IjogIk9uIHRoZSBkZXZpY2UsIHJ1biBjdXJsIC1mc1NMIGh0dHBzOi8vcGluZ2d5LmlvL2luc3RhbGwuc2ggfCBzaC4gVGhlIHNjcmlwdCBpbnN0YWxscyB0aGUgUGluZ2d5IENMSSB3aXRob3V0IHN1ZG8sIHNpZ25zIHRoZSBkZXZpY2UgaW4gd2l0aCBhbiBlbWFpbCBhbmQgYSA2LWRpZ2l0IGNvZGUsIGFuZCBzdGFydHMgdGhlIGRldmljZSBhZ2VudCBpbiB0aGUgYmFja2dyb3VuZC4gRm9yIGRldmljZXMgd2l0aG91dCBhIGtleWJvYXJkLCBjbGljayBBZGQgZGV2aWNlIGluIHRoZSBkYXNoYm9hcmQgYW5kIHJ1biB0aGUgY29tbWFuZCBpdCBzaG93cywgd2hpY2ggY29udGFpbnMgYSBkZXZpY2UgdG9rZW4uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IHRoZSBhZ2VudCBhdCBib290IiwKICAgICAgInRleHQiOiAiUnVuIHBpbmdneSBkYWVtb24gc2VydmljZS1pbnN0YWxsLiBJdCByZWdpc3RlcnMgdGhlIFBpbmdneSBkYWVtb24gYXMgYSBzeXN0ZW1kIHVzZXIgc2VydmljZSBvbiBMaW51eCwgYSBsYXVuY2hkIGFnZW50IG9uIG1hY09TIG9yIGEgc2NoZWR1bGVkIHRhc2sgb24gV2luZG93cywgYW5kIHRoZSBkZXZpY2UgYWdlbnQgc3RhcnRzIHdpdGggdGhlIGRhZW1vbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiBhIHNoZWxsIGFuZCByZWFjaCBvdGhlciBzZXJ2aWNlcyBvdmVyIGEgVENQIHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkluIHRoZSBkYXNoYm9hcmQsIG9wZW4gdGhlIGRldmljZSwgZ28gdG8gdGhlIFRlcm1pbmFsIHRhYiBhbmQgY2xpY2sgTmV3IHNoZWxsLiBGb3IgU1NILCBWTkMgb3IgYSBsb2NhbCB3ZWIgVUksIHJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjIgdGNwQGZyZWUucGluZ2d5LmlvIG9uIHRoZSBkZXZpY2UsIG9yIHNhdmUgYSB0dW5uZWwgd2l0aCBwaW5nZ3kgY29uZmlnIHNhdmUgaW90LXNzaCAtLWF1dG8gLS10eXBlIHRjcCAtbCAyMiBhbmQgc3RhcnQgaXQgd2l0aCBwaW5nZ3kgc3RhcnQgLS1hbGwuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIGRldmljZSBoZWFsdGgiLAogICAgICAidGV4dCI6ICJUaGUgT3ZlcnZpZXcgdGFiIHNob3dzIGhvc3RuYW1lLCBPUywgQ1BVLCBtZW1vcnkgYW5kIGxpdmUgbG9hZC4gRm9yIGRpc2sgc3BhY2UgYW5kIGJvYXJkIHRlbXBlcmF0dXJlLCBydW4gYSBzaG9ydCBzaGVsbCBzY3JpcHQgaW4gdGhlIGJyb3dzZXIgdGVybWluYWwgdGhhdCBwcmludHMgdXB0aW1lLCBkZiBvdXRwdXQsIGF2YWlsYWJsZSBtZW1vcnkgYW5kIHZjZ2VuY21kIG1lYXN1cmVfdGVtcCB3aGVuIHByZXNlbnQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVwZGF0ZSBjYXJlZnVsbHkgYW5kIHNlY3VyZSBhY2Nlc3MiLAogICAgICAidGV4dCI6ICJVcGRhdGUgb25lIGRldmljZSBmaXJzdCwgcnVuIGxvbmcgam9icyB1bmRlciB0bXV4IG9yIHNjcmVlbiBiZWNhdXNlIGEgYnJvd3NlciBzaGVsbCBlbmRzIGFmdGVyIDMwIG1pbnV0ZXMgd2l0aCBubyBhY3Rpdml0eSBvciA4IGhvdXJzLCBhbmQga2VlcCBhIHNlcGFyYXRlIFRDUCB0dW5uZWwgYXMgYSBmYWxsYmFjayBwYXRoLiBUdXJuIG9uIDItZmFjdG9yIGF1dGhlbnRpY2F0aW9uIG9uIHRoZSBQaW5nZ3kgYWNjb3VudCwgcnVuIHRoZSBhZ2VudCBhcyBhbiB1bnByaXZpbGVnZWQgdXNlciwgYW5kIGRlbGV0ZSBhIGRldmljZSBvciByb3RhdGUgaXRzIHRva2VuIGluIHRoZSBkYXNoYm9hcmQgdG8gcmV2b2tlIGl0LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---
{{< image "manage_remote_iot_devices_behind_nat/manage_remote_iot_devices_behind_nat_banner.webp" "Headline Manage remote IoT devices behind NAT above a flow from a Raspberry Pi behind NAT or CGNAT to the Pinggy dashboard and your browser, with the Pinggy install command" >}}

{{< llm-context >}}To manage a remote IoT device behind NAT with Pinggy - on the device run `curl -fsSL https://pinggy.io/install.sh | sh` and sign in with your email, run `pinggy daemon service-install` to start it at boot, then open the device's Terminal tab at https://dashboard.pinggy.io/pinggy-devices and click New shell. For SSH or VNC, run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` on the device to get a public TCP address.{{< /llm-context >}}

Managing IoT devices such as Raspberry Pis and other single-board computers is hard once they are out in the field, because they usually sit behind home routers, CGNAT or cellular links where nothing can connect in. Easy remote access and management is the first thing a deployed fleet needs.

The way around that is to stop trying to reach the device and let it reach you. A device that opens one outbound connection to a broker can be reached from anywhere, and on top of that one connection you can build the three jobs of remote management: a shell to act, health data to watch, and a safe way to change things. This guide builds all three on a Raspberry Pi-class device with Pinggy, using one install command and a few CLI commands.

{{% tldr %}}

1. **Get a shell:** run `curl -fsSL https://pinggy.io/install.sh | sh` on the device, then open **Terminal** on its page in the <a href="https://dashboard.pinggy.io/pinggy-devices" target="_blank">Pinggy Devices dashboard</a>.
2. **Survive reboots:** run `pinggy daemon service-install` so the agent starts with the machine.
3. **Reach other services:** `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` publishes SSH, VNC or a web UI as a TCP address, and `pinggy config save` makes it permanent.
4. **Watch and update carefully:** check the Overview tab and a small health script, update one device first, and revoke access by deleting a device or rotating its token.

{{% /tldr %}}

## The three jobs of managing a remote device

Remote management comes down to reaching the device, observing it, and changing it. Reaching it is the hard part, because a device behind NAT, CGNAT or a corporate firewall has no address you can connect to. The fix is an outbound tunnel: the device dials out and keeps the connection open, and your session rides back along it, so nothing is opened on the router. We explain the mechanism in {{< link href="/blog/ssh_reverse_tunnelling/" newtab=false >}}SSH Reverse Tunneling{{< /link >}}, and our comparison of {{< link href="/blog/best_remote_iot_device_management_software/" newtab=false >}}remote IoT device management platforms{{< /link >}} covers the heavier tools. Observing and changing are simpler once a shell exists, so that is where we start.

{{< image "manage_remote_iot_devices_behind_nat/pinggy_reaches_device_behind_nat.webp" "Diagram of a browser reaching the Pinggy dashboard over https while an inbound connection to a device behind NAT or CGNAT is blocked, and the Pinggy agent on the device opens one outbound connection to the dashboard" >}}

## Step 1: Connect the device and open a shell

On the device, run:

```bash
curl -fsSL https://pinggy.io/install.sh | sh
```

The script needs no `sudo`. It installs the Pinggy CLI to `~/.pinggy/bin`, asks for your email, sends a 6-digit code (a new email gets a free account), and starts the device agent in the background. The agent keeps one outbound connection to the dashboard, so the device needs no open port, public IP or SSH server. Open the device's page in the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy Devices dashboard{{< /link >}}, go to the **Terminal** tab and click **New shell** to get a shell that runs as the user who started the agent.

{{< image "run_opencode_remotely_from_any_browser/pinggy_device_overview_dark.webp" "Pinggy dashboard device Overview tab in the dark theme, showing the device online, system details with agent version 0.6.4, and live CPU, memory, load average and uptime" >}}

*Screenshot: dashboard.pinggy.io, November 2026. The hostname is a placeholder.*

Typing an email on every unit does not scale. For a device with no keyboard, click **Add device** in the dashboard and run the command it shows, which carries the device's token and asks for no email or code:

```bash
curl -fsSL https://pinggy.io/install.sh | DEVICE_AGENT_TOKEN=<TOKEN> sh
```

{{< image "run_opencode_remotely_from_any_browser/pinggy_device_connect_this_device_dark.webp" "Connect this device card on a Pinggy dashboard device page in the dark theme, with the install command containing a DEVICE_AGENT_TOKEN placeholder and a Rotate token button" >}}

*Screenshot: dashboard.pinggy.io, November 2026. The token is a placeholder.*

The token reaches the CLI in an environment variable, never on a command line. One machine holds one device credential, so a fleet means one device and one token per unit. The Linux builds are glibc binaries for x64 and arm64, so use 64-bit Raspberry Pi OS; on Alpine and other musl systems, install with `npm install -g pinggy`.

The agent stops when the machine reboots. Run `pinggy daemon service-install` once to register the Pinggy daemon as a systemd user service on Linux, a launchd agent on macOS or a scheduled task on Windows. The device agent starts with the daemon, and on Linux the CLI also enables systemd lingering for your user so it can start at boot with nobody logged in. If it cannot, it prints the `loginctl enable-linger <user>` command to run yourself. This arrived in CLI 0.6.5, and `pinggy daemon service-uninstall` removes it.

## Step 2: Reach SSH, VNC and web UIs with a TCP tunnel

A browser shell covers most tasks, but sometimes you want a real SSH session for `scp`, VNC for a desktop or a local web UI. Pinggy's {{< link href="/docs/guides/ssh_iot/" newtab=false >}}SSH IoT guide{{< /link >}} gives the one-liner, which you run on the device:

```bash
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io
```

It prints a public address like `tcp://rndnj-103-170-183-11.a.free.pinggy.online:37315`, and from your laptop you run `ssh -p 37315 username@rndnj-103-170-183-11.a.free.pinggy.online`. Change `22` to `5900` for VNC or `1880` for a Node-RED editor. On the free plan the port changes on every connection and a tunnel lasts 60 minutes, so it suits a one-off fix. With a Pro token, the same tunnel gets a persistent address and port.

For a tunnel that should always be there, save it with the CLI instead of keeping a command running. The first command is the one I ran on CLI 0.6.4, where it saved, showed and deleted a config as documented:

```bash
pinggy config save iot-ssh --auto --type tcp -l 22 <TOKEN>@pro.pinggy.io
pinggy start --all      # start every auto-start tunnel
pinggy ps               # list running tunnels
```

Tunnels saved with `--auto` are the auto-start ones, and `pinggy daemon start` lists which configs will auto-start. Use `pinggy config show iot-ssh` to confirm what was saved. The tunnel commands come straight from the docs, because I did not open a live tunnel from the test machine.

## Step 3: Watch the device's health

The **Overview** tab shows the hostname, OS, CPU, memory and agent version next to live CPU, load average and uptime, and the **Activity** tab lists events with source IP addresses. It does not show disk space or board temperature, and Pinggy has no alerting that I could find in its docs, so pair it with a small script you run from the browser shell:

```bash
#!/bin/sh
echo "host:   $(hostname)"
echo "uptime: $(uptime | sed 's/^.*up //')"
echo "disk:   $(df -h / | awk 'NR==2 {print $5 " of " $2 " used on /"}')"
if [ -r /proc/meminfo ]; then
  awk '/MemTotal/ {t=$2} /MemAvailable/ {a=$2} END {printf "memory: %d of %d MB available\n", a/1024, t/1024}' /proc/meminfo
fi
if command -v vcgencmd >/dev/null 2>&1; then
  echo "temp:   $(vcgencmd measure_temp | cut -d= -f2)"
fi
```

I ran this on macOS and in a Debian 12 container, where the disk and memory lines printed correctly. The `vcgencmd` line only runs on Raspberry Pi OS, where that tool exists, and I could not test it here. SD card wear is the classic Pi failure, so if you care about it, look at the SD card monitoring in the tools compared in our {{< link href="/blog/best_remote_iot_device_management_software/" newtab=false >}}device management comparison{{< /link >}}.

## Step 4: Change things without bricking the device

Pinggy Devices has no over-the-air update system and no fleet-wide jobs, so every change is something you do in a shell, one device at a time. That works for ten Pis and stops working for a thousand. For firmware or image updates with rollback, add a dedicated updater such as Mender or balenaCloud, both covered in the comparison above.

A few habits keep manual changes safe. Update one device first and let it run for a day before touching the rest. A browser shell ends after 30 minutes with no activity or after 8 hours, so run long jobs under `tmux` or `screen` on the device, or teh job dies with the shell. And keep a second way in: if an update breaks the Pinggy agent, a saved TCP tunnel or a plain SSH reverse tunnel is your only path back. Never reboot a device you cannot reach any other way without checking that its agent starts at boot.

## Step 5: Lock down access

Anyone signed in to your Pinggy account can open a shell on every device as the user running the agent, so turn on 2-factor authentication for the account and run the agent as an unprivileged user, not root. The device token sits in `~/.config/pinggy/device.json`, readable only by that user. The agent never logs what you type, and the screen copy that redraws a reopened tab stays in memory.

To cut a device off, delete it in the dashboard or rotate its token. `pinggy device remove` only forgets the token on the device, so a device whose token leaked needs the dashboard. Pricing is simple: the Free plan covers 1 device with 1 shell, and Pro is $2.50 per seat per month billed annually, with 25 devices and 25 open shells per seat (see the {{< link href="/#prices" newtab=false >}}pricing page{{< /link >}}).

## Troubleshooting

If a second device fails to connect on the Free plan, the CLI says `Your plan allows 1 device. Delete one in the dashboard, or upgrade, to add another.` If the **Terminal** tab is greyed out, the CLI on that device is too old, so run the install command again. If the agent stops with a message that its token was refused or revoked, the device was deleted or its token rotated, and you need to add it again. If you recieve a message that the Linux uses musl libc, install with npm as shown above.

## Conclusion

A remote device needs three things: a way in, a way to see how it is doing, and a safe way to change it. Pinggy Devices gives you the first with one install command and a boot service, a TCP tunnel covers SSH and VNC, and a short script fills the monitoring gap. For updates at scale you will still want a dedicated OTA tool, but for a handful of Pis behind CGNAT this setup takes minutes, not days.
