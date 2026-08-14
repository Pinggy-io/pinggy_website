---
title: "Sharing LM Studio from localhost"
description: "LM Studio is a desktop app for running local language models, with an OpenAI-compatible server built in."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/lm-studio.svg"
---

With [pinggy.io](https://pinggy.io) you can share the LM Studio local server from localhost with just a single command. **Replace the port 1234 with the port where the server is running.**

Start the server from the **Developer** tab in LM Studio first, then run the tunnel. Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`, which works as the base URL for any OpenAI-compatible client.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to LM Studio:" portstring="LM Studio Port" localport="1234" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/FQgmqxBE3f4" title="Share the LM Studio API online with Pinggy" >}}

<hr>
