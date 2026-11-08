---
title: "Run a Homelab on a $10 4G Stick and Reach It from Anywhere"
description: "How a $10 MSM8916 4G USB stick becomes a Debian homelab: flash it over EDL, keep the modem partitions, and expose services from behind carrier CGNAT with one SSH tunnel."
date: 2026-11-07T10:00:00+05:30
lastmod: 2026-11-07T10:00:00+05:30
draft: false
tags: ["OpenStick", "self-hosted", "CGNAT", "ssh", "tunneling"]
og_image: "images/homelab_on_a_10_dollar_4g_stick/homelab_on_a_10_dollar_4g_stick_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiUnVuIGEgaG9tZWxhYiBvbiBhICQxMCA0RyBzdGljayBhbmQgcmVhY2ggaXQgZnJvbSBhbnl3aGVyZSIsCiAgImRlc2NyaXB0aW9uIjogIkhvdyBhICQxMCBNU004OTE2IDRHIFVTQiBzdGljayBiZWNvbWVzIGEgRGViaWFuIGhvbWVsYWI6IGZsYXNoIGl0IG92ZXIgRURMLCBrZWVwIHRoZSBtb2RlbSBwYXJ0aXRpb25zLCBhbmQgZXhwb3NlIHNlcnZpY2VzIGZyb20gYmVoaW5kIGNhcnJpZXIgQ0dOQVQgd2l0aCBvbmUgU1NIIHR1bm5lbC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaG9tZWxhYl9vbl9hXzEwX2RvbGxhcl80Z19zdGljay9ob21lbGFiX29uX2FfMTBfZG9sbGFyXzRnX3N0aWNrX2Jhbm5lci53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMDdUMTA6MDA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQmFjayB1cCB0aGUgb3JpZ2luYWwgZmlybXdhcmUiLCAidGV4dCI6ICJQdXQgdGhlIHN0aWNrIGluIEVETCBtb2RlIHdpdGggYWRiIHJlYm9vdCBlZGwgYW5kIHJ1biBlZGwgcmYgb3JpZ19mdy5iaW4uIEtlZXAgZnNjLCBmc2csIG1vZGVtLCBtb2RlbXN0MSwgbW9kZW1zdDIsIHBlcnNpc3QgYW5kIHNlYy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJGbGFzaCBEZWJpYW4iLCAidGV4dCI6ICJJbnN0YWxsIHRoZSBPcGVuU3RpY2sgYm9vdGxvYWRlciBvdmVyIEVETCwgdGhlbiBmbGFzaCB0aGUgcGFydGl0aW9uIHRhYmxlLCBib290IGFuZCByb290ZnMgd2l0aCBmYXN0Ym9vdCwgYW5kIHJlc3RvcmUgdGhlIHNhdmVkIG1vZGVtIHBhcnRpdGlvbnMuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiR3JvdyB0aGUgcm9vdCBmaWxlc3lzdGVtIiwgInRleHQiOiAiTG9nIGluIHdpdGggc3NoIHVzZXJAMTkyLjE2OC41LjEgYW5kIHJ1biBzdWRvIHJlc2l6ZTJmcyAvZGV2L2Rpc2svYnktcGFydGxhYmVsL3Jvb3Rmcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJPcGVuIGEgUGluZ2d5IHR1bm5lbCBmcm9tIHRoZSBzdGljayIsICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4MCBmcmVlLnBpbmdneS5pbyBhbmQgb3BlbiB0aGUgSFRUUFMgVVJMIGl0IHByaW50cy4gVGhlIHN0aWNrIGlzIGJlaGluZCBjYXJyaWVyIENHTkFULCBzbyB0aGUgdHVubmVsIGlzIGFuIG91dGJvdW5kIGNvbm5lY3Rpb24uIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiS2VlcCB0aGUgdHVubmVsIHJ1bm5pbmciLCAidGV4dCI6ICJSdW4gc3NoIHdpdGggU2VydmVyQWxpdmVJbnRlcnZhbD02MCBhbmQgRXhpdE9uRm9yd2FyZEZhaWx1cmU9eWVzIGFzIGEgc3lzdGVtZCBzZXJ2aWNlIHdpdGggUmVzdGFydD1hbHdheXMsIHVzaW5nIGEgUGluZ2d5IHRva2VuIGZvciBhIHN0YWJsZSBVUkwuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "homelab_on_a_10_dollar_4g_stick/homelab_on_a_10_dollar_4g_stick_banner.webp" "A 4G USB stick running Debian, with an arrow to a public Pinggy HTTPS URL" >}}

{{< llm-context >}}To reach a service on a 4G USB stick homelab behind carrier CGNAT with Pinggy - on the stick run `ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8080 free.pinggy.io -T` (Gatus status page on port 8080) to get a public HTTPS URL, or `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T` to reach SSH on port 22.{{< /llm-context >}}

A 4G USB dongle that sells for about $10 on AliExpress has a quad-core Cortex-A53, 512 MB of RAM, 4 GB of eMMC, Wi-Fi and a modem. Under the stock Android 4.4 firmware it is a hotspot. Flash it with Debian and it becomes a small always-on server that sips power and ships with its own cellular uplink. The catch is the uplink: mobile carriers put you behind CGNAT, so nothing on teh internet can open a connection *to* the stick. An outbound SSH tunnel fixes that, and `ssh` is already installed.

{{% tldr %}}
1. The sticks use the **Qualcomm MSM8916** chip, and Linux runs on them through a postmarketOS kernel and the OpenStick Debian image.
2. **Back up the original firmware before you flash.** The `modemst1` and `modemst2` partitions are unique to each stick, and the LTE modem needs them.
3. With about 450 MB usable, a handful of Go and Rust services fit. **Skip anything that needs Node on the stick.**
4. The SIM puts you behind CGNAT, so **inbound port forwarding cannot work**. One outbound SSH connection to Pinggy gives each service a public URL.
5. Run the tunnel as a systemd service so it **restarts itself** after a dropped connection or a reboot.
{{% /tldr %}}

## What is inside the stick

The dongles go by names like UZ801, UFI001C, UFI103S, UF896 and MF800. Underneath they share one board design: a Qualcomm MSM8916 (the Snapdragon 410 family) with four Cortex-A53 cores at 1 GHz, 512 MB of RAM, 4 or 8 GB of eMMC, Wi-Fi, GPS and an LTE modem rated at 150 Mbit/s. {{< link href="https://notes.stavros.io/build-notes/msm8916-lte-stick-linux-port/" >}}Stavros's build notes{{< /link >}} list the bands as FDD B1/3/5, so check that against your carrier before you buy.

That chip has mainline Linux support, which is why this works at all. The UFI001C device tree was upstreamed in 2023, and the {{< link href="https://github.com/kinsamanka/OpenStick-Builder" >}}OpenStick-Builder{{< /link >}} project packages a postmarketOS kernel (`linux-postmarketos-qcom-msm8916`) with a custom bootloader (hyp plus lk2nd) and a Debian root filesystem.

Which board you get matters. {{< link href="https://dmitrybrant.com/openstick" >}}Dmitry Brant tried three{{< /link >}} (UZ801 v3.2, UFI103S and HMUF02) and calls the UZ801 the best supported. He also found the newest Debian builds crashed now and then on the UZ801, while the older Bookworm image from wvthoog.nl stayed stable. Treat the first boot as an experiment, and buy two sticks if you plan to rely on one.

## Flash it without losing the modem

Everything here can brick the stick. The order matters more than the commands.

1. **Dump the original firmware.** Put the stick in EDL (Qualcomm's emergency download mode) with `adb reboot edl`, or by shorting the EDL test point while plugging it in. Then, with the bkerler `edl` tool: `edl rf orig_fw.bin`.
2. **Keep the modem partitions.** From that dump you need `fsc`, `fsg`, `modem`, `modemst1`, `modemst2`, `persist` and `sec`. Without the right `modemst1` and `modemst2` the radio will not register on the network.
3. **Install the new bootloader over EDL**, reboot into fastboot, flash the partition table, bootloader pieces, `boot` and `rootfs`.
4. **Flash the saved modem partitions back** with fastboot, then `fastboot reboot`.

{{< image "homelab_on_a_10_dollar_4g_stick/openstick_flash_order.webp" "Five numbered steps for flashing Debian onto an MSM8916 4G stick, with the modem partition steps highlighted" >}}

*The modem partitions go out before the flash and come back after it.*

On first boot the builder's image answers on a USB network at `192.168.5.1` and a Wi-Fi access point called `Openstick` at `192.168.4.1`. The README lists the login as `user` with password `1`, so change it before anything else. Then grow the root filesystem to the full eMMC:

```bash
ssh user@192.168.5.1
sudo resize2fs /dev/disk/by-partlabel/rootfs
```

For other boards, edit `/boot/extlinux/extlinux.conf` and swap the device tree name: `thwc-ufi001c` for the UFIxxx, `thwc-uf896` for the UF896, `fy-mf800` for the MF800. The default is `yiming-uz801v3`. The stick will also need an APN for your SIM, and those settings depend on your carrier and your image, so I am not going to guess at them here.

## What fits in 450 MB

A running Debian with systemd and Podman leaves roughly 450 MB free. {{< link href="https://blog.bosscher.ch/posts/openstick/" >}}One homelab write-up on a stick like this{{< /link >}} (checked November 2026) reports these resident sizes: AdGuard Home about 40 MB, Beszel about 20 MB, an RSS reader about 22 MB, the Gatus uptime monitor about 10 MB and the Diun update notifier about 9 MB. Those are the numbers to design around. Services written in Go or Rust fit easily. A Node or Java service does not leave you much room, and a second Chromium-based anything is out.

For the rest of this post the worked example is Gatus, which serves a status page on port 8080. It is a single Go binary, so it is a realistic stand-in for whatever you run.

## Why you cannot port-forward to a SIM

Your carrier assigns the stick a private address and translates it at the carrier's edge, which is CGNAT. A connection from the internet to your stick has nowhere to land, and there is no router of yours to configure. The same thing blocks home servers on many fibre and cable plans; the background is in [How to Access Your Home Server or Raspberry Pi When Your ISP Uses CGNAT](/blog/access_home_server_raspberry_pi_behind_cgnat/).

The way around it is to flip the direction. The stick connects *out* to a relay, and the relay hands incoming requests back down that connection. With Pinggy the relay is `free.pinggy.io` and the connection is plain SSH, so there is nothing to install on the stick:

the visitor opens the Pinggy URL -> Pinggy forwards the request down the SSH connection the stick opened -> `ssh` hands it to Gatus on `localhost:8080`

{{< image "homelab_on_a_10_dollar_4g_stick/stick_behind_cgnat_pinggy.webp" "Diagram of a 4G stick opening an outbound SSH connection through carrier CGNAT to a Pinggy server while a direct inbound connection is blocked" >}}

*The stick dials out to Pinggy, so the carrier's NAT never has to accept an inbound connection.*

## Open the tunnel from the stick

Start the status page, then in a second shell on the stick:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints an HTTPS URL of the form `https://xxxx.run.pinggy-free.link`. Open it from your phone on a different network, so you recieve the page the same way any visitor would. If the Gatus page loads, the path works.

I could not run this on a real stick for this post, so treat the commands as untested on that hardware. They are the standard Pinggy commands, and the only thing the stick adds is its memory limit.

For SSH access to the stick itself, use a TCP tunnel:

```bash
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T
```

It prints a `tcp://free.pinggy.io:XXXXX` address. From your laptop, `ssh -p XXXXX user@free.pinggy.io` lands on the stick. Put a key in `~/.ssh/authorized_keys` and turn password login off before you do this, because that address is public.

Do not expose a dashboard bare. Add basic auth to the HTTP tunnel by appending flags after `--`:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- b:admin:change-this-password
```

### Why plain ssh and not the Pinggy CLI

The Pinggy CLI is installed with `npm`, which means a Node runtime on a board where 450 MB is all you have. OpenSSH is already on the image, and one client process is small next to a Node runtime (I did not measure it on the stick). The tradeoff is that plain `ssh` does not reconnect by itself, so you wrap it in systemd.

## Keep it running after a reboot

A free tunnel lasts 60 minutes and gets a new random URL each time. For a homelab you want a stable address, so get a token from the {{< link href="https://dashboard.pinggy.io" >}}Pinggy dashboard{{< /link >}} and assign a subdomain to it there. Then save the token where only root can read it:

```bash
echo 'PINGGY_TOKEN=your_token_here' | sudo tee /etc/pinggy.env
sudo chmod 600 /etc/pinggy.env
```

And add `/etc/systemd/system/pinggy-web.service`:

```ini
[Unit]
Description=Pinggy tunnel for Gatus
After=network-online.target
Wants=network-online.target

[Service]
EnvironmentFile=/etc/pinggy.env
ExecStart=/usr/bin/ssh -p 443 -o ServerAliveInterval=60 -o ExitOnForwardFailure=yes -o StrictHostKeyChecking=accept-new -R0:localhost:8080 -T ${PINGGY_TOKEN}@pro.pinggy.io
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now pinggy-web
```

`ServerAliveInterval=60` notices a dead link, which on a cellular connection happens often. `ExitOnForwardFailure=yes` makes `ssh` quit if the forward cannot be set up, and `Restart=always` brings it back five seconds later. The unit file is untested on a stick, but it uses only standard systemd and OpenSSH options.

## What I would skip

- **Flashing a stick you cannot afford to lose.** At $8 to $10 each, this is a toy until you have a second one and a firmware backup.
- **Heavy dashboards.** A metrics server and a container UI that overlap each other cost 10 to 20 MB for the duplicate. Pick one.
- **Anything with root-level agents on a public tunnel.** If a service on the stick can run commands, put basic auth or an IP allowlist (`w:` flag) in front of it.
- **Counting on the free tunnel.** Sixty minutes and a random URL is fine for testing and wrong for a status page you share.

## Conclusion

A $10 stick can run a handful of small services and stay reachable if you treat it as two separate problems. The first is flashing it without losing the modem partitions. The second is the direction of the connection, and an outbound SSH tunnel solves that for every port you care about. To check the setup yourself, open the tunnel URL from a phone on mobile data with Wi-Fi off, which is the one network path CGNAT cannot fake. If you want to see what else the same trick covers, [How to Set Up Port Forwarding Even Behind CGNAT](/blog/how_to_set_up_port_forwarding_even_behind_cgnat/) walks through other services.
