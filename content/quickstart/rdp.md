---
title: "Access your desktop over RDP"
description: "Remote Desktop Protocol gives you a full graphical desktop session on a remote machine."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/rdp.svg"
---

With [pinggy.io](https://pinggy.io) you can reach the Remote Desktop server on your machine from anywhere with just a single command. **Replace the port 3389 with the port where your RDP server is listening.**

Turn on Remote Desktop first (on Windows, **Settings &rarr; System &rarr; Remote Desktop**), then start the tunnel. This is a TCP tunnel, so Pinggy gives you a host and port such as `tcp://example.a.pinggy.link:11223` rather than an HTTPS URL.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to your RDP server:" portstring="RDP Port" localport="3389" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

In your Remote Desktop client, enter the host and port as `example.a.pinggy.link:11223`, without the `tcp://` prefix.

<hr>
