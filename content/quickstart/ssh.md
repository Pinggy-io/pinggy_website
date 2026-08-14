---
title: "Access your machine over SSH"
description: "SSH gives you an encrypted shell on a remote machine for administration and file transfer."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/ssh.svg"
---

With [pinggy.io](https://pinggy.io) you can reach the SSH server on your machine from anywhere with just a single command. **Replace the port 22 with the port where sshd is listening.**

This is a TCP tunnel, so Pinggy gives you a host and port such as `tcp://example.a.pinggy.link:11223` rather than an HTTPS URL.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to your SSH server:" portstring="SSH Port" localport="22" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

From the remote machine, connect with the host and port Pinggy printed, dropping the `tcp://` prefix:

```bash
ssh -p 11223 username@example.a.pinggy.link
```

For per-platform setup, see the SSH guides for [Linux](/docs/guides/ssh_linux/), [macOS](/docs/guides/ssh_mac/) and [Windows](/docs/guides/ssh_windows/).

<hr>
