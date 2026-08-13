---
title: "Sharing Jan from localhost"
description: "Jan is an offline-first desktop app for running and chatting with local language models."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/jan-ai.jpg"
---

With [pinggy.io](https://pinggy.io) you can share your Jan instance from localhost with just a single command. **Replace the port 1337 with the port where Jan is running.**

Jan's server expects a localhost `Host` header, so the command rewrites it with `u:Host:localhost:1337`.

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to reach Jan from another machine.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jan:" portstring="Jan Port" localport="1337" webdebugenabled=false keepalive=true headermodifications=`[{"mode":"u", "headername":"Host", "headerval": "localhost:1337"}]` >}}
{{< /pinggytunnel >}}

<hr>
