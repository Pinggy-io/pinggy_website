---
title: "Access a Raspberry Pi over remote desktop"
description: "Reach the remote desktop of a Raspberry Pi or other IoT device from anywhere."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/raspberry-pi-remote-desktop.svg"
---

With [pinggy.io](https://pinggy.io) you can reach the desktop of a Raspberry Pi from anywhere with just a single command. **Replace the port 3389 with the port where your remote desktop server is listening.**

Install an RDP server on the Pi first, then run the tunnel command on the Pi itself:

```bash
sudo apt install xrdp
```

This is a TCP tunnel, so Pinggy gives you a host and port such as `tcp://example.a.pinggy.link:11223` rather than an HTTPS URL.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command on the Pi to start a tunnel to remote desktop:" portstring="Remote Desktop Port" localport="3389" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

In your Remote Desktop client, enter the host and port as `example.a.pinggy.link:11223`, without the `tcp://` prefix.

<hr>
