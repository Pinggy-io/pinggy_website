---
title: "Sharing n8n from localhost"
description: "n8n is a workflow automation tool that connects APIs, services, and AI agents with low-code nodes."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/n8n.svg"
---

With [pinggy.io](https://pinggy.io) you can share your n8n instance from localhost with just a single command. **Replace the port 5678 with the port where n8n is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to open the editor, and as the base for any webhook URL you hand to an external service.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to n8n:" portstring="n8n Port" localport="5678" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
