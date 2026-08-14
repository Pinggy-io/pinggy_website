---
title: "Sharing FastAPI from localhost"
description: "FastAPI is a Python web framework for building APIs, with automatic interactive documentation."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/fastapi.svg"
---

With [pinggy.io](https://pinggy.io) you can share your FastAPI app from localhost with just a single command. **Replace the port 8000 with the port where your app is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to reach your API, and add `/docs` to it for the interactive documentation.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to FastAPI:" portstring="FastAPI Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
