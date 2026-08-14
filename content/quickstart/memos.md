---
title: "Sharing Memos from localhost"
description: "Memos is a lightweight, self-hosted note-taking app with a plain-text first design."
date: 2026-08-14T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/memos.webp"
---

With [pinggy.io](https://pinggy.io) you can share your Memos instance from localhost with just a single command. **Replace the port 5230 with the port where Memos is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to reach your notes from a phone or another machine.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Memos:" portstring="Memos Port" localport="5230" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/2cXQhBYIw68" title="Self-host a private notes app with Memos and Pinggy" >}}

Memos has its own sign-in, so the tunnel does not expose your notes to anyone who guesses the URL. Turning on **Password Protect** above adds a second gate in front of it.

For the full walkthrough, see [self-hosting a note-taking app with Memos](/blog/self_hosting_memos_note_taking_app/).

<hr>
