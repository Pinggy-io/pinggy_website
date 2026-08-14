---
title: "Sharing Foundry VTT from localhost"
description: "Foundry Virtual Tabletop is a self-hosted roleplaying platform that runs its own local web server for players to join."
date: 2026-08-11T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/foundryvtt.webp"
---

With [pinggy.io](https://pinggy.io), you can share your Foundry VTT server from localhost with just a single command. No port forwarding, no dynamic DNS, nothing to install. **Replace the port 30000 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Send that to your players.

{{% tldr %}}

1. Launch Foundry VTT. It serves on port **30000** by default. Confirm under **Game Access &rarr; Invitation Links**.
2. Open a terminal / cmd, and run the following command (replace 30000 with your port):
   ```bash
   ssh -p 443 -R0:localhost:30000 free.pinggy.io
   ```
3. Pinggy prints a public URL like `https://abc123xyz.a.pinggy.link`. Share it with your players and they connect from anywhere, with nothing to set up on their end.

{{% /tldr %}}

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Foundry VTT:" portstring="Foundry VTT Port" localport="30000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

## Check which port Foundry is using

Foundry VTT runs its own web server on port `30000` by default. Open **Game Access &rarr; Invitation Links** inside Foundry to confirm: the local network address looks like `http://10.123.1.136:30000`.

If you want to test the tunnel before Foundry is up, any local server on that port will do:

```bash
python3 -m http.server 30000
```

## Tell Foundry it is behind a proxy

Pinggy terminates HTTPS at the public URL and forwards plain HTTP to port 30000. Foundry has no way to know that, so the invitation link it shows you and its audio/video setup still advertise `http://` on port 30000. Set these in `Config/options.json`:

```json
"proxySSL": true,
"proxyPort": 443
```

Restart Foundry afterwards. Without it the game still loads fine over the Pinggy URL, but the in-app invitation link and A/V point at the wrong scheme and port, which is the usual reason players get a link that doesn't work.

## Password protect the session

Anyone who guesses the URL can walk into your game. Add basic auth to the tunnel and they get a login prompt first:

```bash
ssh -p 443 -R0:localhost:30000 -t free.pinggy.io b:username:password
```

Replace `username` and `password` with your own. See [Basic Authentication](/docs/http_tunnels/basic_auth/) for the full set of options.

## Keep the same URL between sessions

Free tunnels get a random URL and time out after 60 minutes, which means a new link for your players every week. A [Pinggy Pro](https://dashboard.pinggy.io/) token gives you a [persistent subdomain](/docs/persistent_subdomain/) instead:

```bash
ssh -p 443 -R0:localhost:30000 yourAccessToken@pro.pinggy.io
```

For the long version, with screenshots, see the full [Foundry VTT self hosting guide](/blog/foundry_vtt/).

<hr>
