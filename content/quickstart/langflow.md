---
title: "Sharing Langflow from localhost"
description: "Langflow is a visual builder for AI agents and workflows, wired together as a flow graph."
date: 2026-08-14T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/langflow.webp"
---

With [pinggy.io](https://pinggy.io) you can share your Langflow instance from localhost with just a single command. **Replace the port 7860 with the port where Langflow is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to open the flow editor from another machine, or to reach a flow you have exposed as an API.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Langflow:" portstring="Langflow Port" localport="7860" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/TvB37TSWujg" title="Run Langflow Anywhere - Self-Host Locally & Access Remotely with Pinggy" >}}

A public flow editor is worth protecting. Turn on **Password Protect** in the settings above to put basic auth in front of the tunnel.

For the full walkthrough, see [self-hosting Langflow and accessing it remotely](/blog/self_host_langflow_and_access_remotely/).

<hr>
