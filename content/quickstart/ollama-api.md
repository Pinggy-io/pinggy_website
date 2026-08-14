---
title: "Sharing Ollama API from localhost"
description: "Ollama runs large language models locally and serves them over an HTTP API on port 11434."
date: 2026-08-12T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/ollama-api.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Ollama API from localhost with just a single command. **Replace the port 11434 with the port where Ollama is running.**

Ollama checks the `Host` header on incoming requests and rejects anything that is not localhost, so the command rewrites it back with `u:Host:localhost:11434`.

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use it as the base URL in any client that speaks the Ollama API.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Ollama:" portstring="Ollama Port" localport="11434" webdebugenabled=false keepalive=true headermodifications=`[{"mode":"u", "headername":"Host", "headerval": "localhost:11434"}]` >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/OhWEKvYj-UE" title="Run Ollama Models for Free on Google Colab with Pinggy + OpenWebUI" >}}

<hr>
