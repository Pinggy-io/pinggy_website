---
title: "Access a Raspberry Pi over SSH"
description: "Reach the SSH port of a Raspberry Pi or other IoT device from anywhere."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/raspberry-pi-ssh.svg"
---

With [pinggy.io](https://pinggy.io) you can reach a Raspberry Pi over SSH from anywhere with just a single command, without port forwarding or a static IP. **Replace the port 22 with the port where sshd is listening.**

Enable SSH on the Pi first with `sudo raspi-config` (**Interface Options &rarr; SSH**), then run the tunnel command on the Pi itself. This is a TCP tunnel, so Pinggy gives you a host and port such as `tcp://example.a.pinggy.link:11223`.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command on the Pi to start a tunnel to SSH:" portstring="SSH Port" localport="22" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

From any other machine, connect with the host and port Pinggy printed:

```bash
ssh -p 11223 pi@example.a.pinggy.link
```

To keep the tunnel up across reboots, see [running a tunnel on startup](/docs/run_tunnel_on_startup/).

<hr>
