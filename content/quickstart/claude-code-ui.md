---
title: "Sharing Claude Code UI from localhost"
description: "Claude Code UI is a self-hosted web interface for driving Claude Code, Cursor CLI, and Codex sessions from any device."
date: 2026-08-14T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/claudecode-text.svg"
---

With [pinggy.io](https://pinggy.io) you can reach Claude Code UI from your phone with just a single command. **Replace the port 3001 with the port where it is running.**

Claude Code UI checks the `Host` header, so the command rewrites it back with `u:Host:localhost:3001`.

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Open it on your phone to check on a running agent, answer its questions, or start a new task.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Claude Code UI:" portstring="Claude Code UI Port" localport="3001" webdebugenabled=false keepalive=true headermodifications=`[{"mode":"u", "headername":"Host", "headerval": "localhost:3001"}]` >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/3uyS88lgXiI" title="Control Claude Code from Your Phone - Run AI Coding Agents Remotely with Pinggy" >}}

This gives a browser shell on the machine running your coding agent, so treat the URL as a credential. Turn on **Password Protect** above before you share it anywhere.

For the full walkthrough, see [remotely managing Claude Code from your phone](/blog/remotely_manage_claude_code_from_phone/).

<hr>
