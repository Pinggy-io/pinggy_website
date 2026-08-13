---
title: "Sharing LocalAI from localhost"
description: "LocalAI is a self-hosted, OpenAI-compatible API for running models on your own hardware."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/local-ai.png"
---

With [pinggy.io](https://pinggy.io) you can share your LocalAI server from localhost with just a single command. **Replace the port 8080 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use it as the base URL for any OpenAI-compatible client, or open it in a browser for the built-in web UI.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to LocalAI:" portstring="LocalAI Port" localport="8080" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
