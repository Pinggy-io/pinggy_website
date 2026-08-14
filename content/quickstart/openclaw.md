---
title: "Sharing OpenClaw from localhost"
description: "OpenClaw is a self-hosted AI agent that connects to chat platforms like Telegram, Discord, and WhatsApp."
date: 2026-08-14T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/openclaw.webp"
---

With [pinggy.io](https://pinggy.io) you can share your OpenClaw instance from localhost with just a single command. **Replace the port 18789 with the port where OpenClaw is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to reach the OpenClaw control panel, and as the webhook base for the chat platforms you connect.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to OpenClaw:" portstring="OpenClaw Port" localport="18789" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/mQy2-z8WtVE" title="Self-Host Your Own AI Discord Bot (OpenClaw-Style) with Ollama, Docker & Pinggy" >}}

The panel drives an agent with access to your machine, so do not leave the URL open. Use **Password Protect** for a browser login, or **Key / Token Authentication** if a script is calling it.

For the full walkthrough, see [running OpenClaw with Pinggy](/blog/run_openclaw_with_pinggy/).

<hr>
