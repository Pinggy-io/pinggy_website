---
title: "Sharing ComfyUI from localhost"
description: "ComfyUI is a node-based interface for building image generation pipelines with Stable Diffusion and other models."
date: 2026-08-14T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/comfyui.webp"
---

With [pinggy.io](https://pinggy.io) you can share your ComfyUI instance from localhost with just a single command. **Replace the port 8188 with the port where ComfyUI is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to open the node editor from another machine, which is the usual way to drive a GPU box from a laptop.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to ComfyUI:" portstring="ComfyUI Port" localport="8188" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/ILjLap85Qsg" title="Run and Share ComfyUI on Google Colab with Pinggy" >}}

ComfyUI has no login of its own, so anyone with the URL can queue jobs on your GPU. Turn on **Password Protect** above before sharing the link.

For the full walkthrough, see [how to easily share ComfyUI online](/blog/how_to_easily_share_comfyui_online/).

<hr>
