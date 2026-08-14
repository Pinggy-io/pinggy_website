---
title: "Sharing Node-RED from localhost"
description: "Node-RED is a flow-based editor for wiring together devices, APIs, and online services."
date: 2026-08-14T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/node-red.webp"
---

With [pinggy.io](https://pinggy.io) you can share your Node-RED instance from localhost with just a single command. **Replace the port 1880 with the port where Node-RED is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to open the editor, and as the base for any HTTP-in endpoint you want an external service to call.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Node-RED:" portstring="Node-RED Port" localport="1880" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/wGqper3p3So" title="Self-Hosting Node-RED and Making It Publicly Accessible with Pinggy" >}}

Node-RED ships with no authentication on the editor, so anyone with the URL can edit your flows. Turn on **Password Protect** above, or set `adminAuth` in `settings.js`.

For the full walkthrough, see [self-hosting Node-RED](/blog/self_hosting_node_red/).

<hr>
