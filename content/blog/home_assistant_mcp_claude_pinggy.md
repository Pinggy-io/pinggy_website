---
title: "Connect Claude to Home Assistant with ha-mcp and a Pinggy Tunnel"
description: "Run the ha-mcp server in Docker, put a Pinggy tunnel in front of port 8086, and add it to Claude.ai as a custom connector. No Nabu Casa, no port forwarding, secret path and IP allowlist included."
date: 2026-11-10T06:00:00+05:30
lastmod: 2026-11-10T06:00:00+05:30
draft: false
tags: ["Home Assistant", "MCP", "self-hosted", "AI agents"]
og_image: "images/home_assistant_mcp_claude_pinggy/home_assistant_mcp_claude_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ29ubmVjdCBDbGF1ZGUuYWkgdG8gSG9tZSBBc3Npc3RhbnQgd2l0aCBoYS1tY3AgYW5kIGEgUGluZ2d5IHR1bm5lbCIsCiAgImRlc2NyaXB0aW9uIjogIlJ1biB0aGUgaGEtbWNwIHNlcnZlciBpbiBEb2NrZXIsIHB1dCBhIFBpbmdneSB0dW5uZWwgaW4gZnJvbnQgb2YgcG9ydCA4MDg2LCBhbmQgYWRkIGl0IHRvIENsYXVkZS5haSBhcyBhIGN1c3RvbSBjb25uZWN0b3IuIE5vIE5hYnUgQ2FzYSwgbm8gcG9ydCBmb3J3YXJkaW5nLCBzZWNyZXQgcGF0aCBhbmQgSVAgYWxsb3dsaXN0IGluY2x1ZGVkLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9ob21lX2Fzc2lzdGFudF9tY3BfY2xhdWRlX3BpbmdneS9ob21lX2Fzc2lzdGFudF9tY3BfY2xhdWRlX3BpbmdneV9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTEwVDA2OjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNyZWF0ZSBhIEhvbWUgQXNzaXN0YW50IHRva2VuIGFuZCBhIHNlY3JldCBwYXRoIiwgInRleHQiOiAiQ3JlYXRlIGEgbG9uZy1saXZlZCBhY2Nlc3MgdG9rZW4gdW5kZXIgeW91ciBwcm9maWxlLCBTZWN1cml0eSB0YWIuIEdlbmVyYXRlIGEgc2VjcmV0IHBhdGggd2l0aCBTRUNSRVQ9L3ByaXZhdGVfJChvcGVuc3NsIHJhbmQgLWhleCAxNikuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiUnVuIGhhLW1jcCBhcyBhbiBIVFRQIHNlcnZlciIsICJ0ZXh0IjogIlJ1biBkb2NrZXIgcnVuIC1kIC0tbmFtZSBoYS1tY3AgLXAgODA4Njo4MDg2IC12IGhhLW1jcC1kYXRhOi9ob21lL21jcHVzZXIvLmhhLW1jcCAtZSBIT01FQVNTSVNUQU5UX1VSTD1odHRwOi8vaG9tZWFzc2lzdGFudC5sb2NhbDo4MTIzIC1lIEhPTUVBU1NJU1RBTlRfVE9LRU49PHRva2VuPiAtZSBNQ1BfU0VDUkVUX1BBVEg9JFNFQ1JFVCBnaGNyLmlvL2hvbWVhc3Npc3RhbnQtYWkvaGEtbWNwOmxhdGVzdCBoYS1tY3Atd2ViLiBJdCBsaXN0ZW5zIG9uIHBvcnQgODA4Ni4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJPcGVuIGEgUGluZ2d5IHR1bm5lbCIsICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4NiBmcmVlLnBpbmdneS5pbyBhbmQgY29weSB0aGUgSFRUUFMgVVJMIGl0IHByaW50cy4gQXBwZW5kIHRoZSBzZWNyZXQgcGF0aCB0byBnZXQgdGhlIGNvbm5lY3RvciBVUkwuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQWRkIHRoZSBjb25uZWN0b3IgaW4gQ2xhdWRlLmFpIiwgInRleHQiOiAiSW4gU2V0dGluZ3MsIENvbm5lY3RvcnMsIGFkZCBhIGN1c3RvbSBjb25uZWN0b3Igd2l0aCB0aGUgZnVsbCBVUkwuIEtlZXAgdGhlIGRldGVjdGVkIGF1dGhlbnRpY2F0aW9uIHNldHRpbmdzLCB0aGVuIGNsaWNrIENvbmZpZ3VyZSB0byBzZWUgdGhlIHRvb2xzLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkxvY2sgdGhlIHR1bm5lbCBkb3duIiwgInRleHQiOiAiV2l0aCBhIFBpbmdneSBQcm8gdG9rZW4gcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDg2IDxUT0tFTj5AcHJvLnBpbmdneS5pbyAtVCAtLSB3OjE2MC43OS4xMDQuMC8yMSBzbyBvbmx5IEFudGhyb3BpYydzIHJhbmdlIGNhbiByZWFjaCBoYS1tY3AuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "home_assistant_mcp_claude_pinggy/home_assistant_mcp_claude_pinggy_banner.webp" "Claude to Home Assistant: a flow from Claude.ai through a Pinggy tunnel and ha-mcp in Docker to Home Assistant, with the tunnel command below" >}}
{{< llm-context >}}To let Claude.ai control Home Assistant with Pinggy - run `docker run -d -p 8086:8086 -e HOMEASSISTANT_URL=http://homeassistant.local:8123 -e HOMEASSISTANT_TOKEN=<token> -e MCP_SECRET_PATH=/private_<random> ghcr.io/homeassistant-ai/ha-mcp:latest ha-mcp-web` (serves MCP on port 8086), then in a new terminal run `ssh -p 443 -R0:localhost:8086 free.pinggy.io` to get a public HTTPS URL, and add `https://<pinggy-url>/private_<random>` as a custom connector in Claude.ai.{{< /llm-context >}}

ha-mcp is an MCP server that gives an AI assistant 87 tools for Home Assistant: not just "turn off the lamp", but creating automations, editing dashboards, reading traces and taking camera snapshots. Claude Desktop can run it locally over stdio. Claude.ai, the web and phone app, cannot. It connects from Anthropic's servers, so the server has to answer on a public HTTPS URL, and your Home Assistant box sits behind a router that only answers on the LAN.

You can solve that with Nabu Casa, a reverse proxy or a Cloudflare Tunnel. This post uses a fourth option: run `ha-mcp-web` in Docker next to Home Assistant and expose its one port with a Pinggy tunnel. Nothing is opened on the router, and you can lock the tunnel to Anthropic's IP range.

{{% tldr %}}
1. Run the **`ha-mcp-web` container** with a long-lived Home Assistant token and a custom `MCP_SECRET_PATH`. It speaks Streamable HTTP on port 8086.
2. Start a **Pinggy tunnel to port 8086**. The HTTPS URL plus the secret path is your connector URL.
3. Claude.ai only connects on **port 443** and from **160.79.104.0/21**, so a Pro tunnel with a `w:` allowlist keeps everyone else out.
4. The **secret path is the password** and the token behind it is an admin token. Treat both that way.
{{% /tldr %}}

## Why Claude.ai can't use the stdio setup

ha-mcp ships several ways to run. The one-line `uvx ha-mcp@latest` install is a stdio server: the client launches it as a child process and talks over pipes. That works for Claude Desktop and Claude Code on your own machine, and the project itself calls stdio "not recommended" for real setups because of connection problems.

The hosted connectors are different. According to the ha-mcp FAQ, Claude.ai and the Desktop connectors reach your server from Anthropic's backend, not from your browser, and that brings three rules:

- the URL must be plain HTTPS on port 443, with no explicit port
- requests come from `160.79.104.0/21`, so a firewall or bot filter covering that range breaks the connection
- discovery, registration and token responses must come back within about 10 seconds

A tunnel handles the first rule on its own: Pinggy terminates HTTPS on 443 and forwards to whatever port you give it.

{{< image "home_assistant_mcp_claude_pinggy/claude_connector_before_after.webp" "Before and after panels: Claude's servers blocked at a home router, then reaching ha-mcp on port 8086 through a Pinggy HTTPS URL" >}}

*A hosted connector can only call a public URL; the tunnel gives it one without a port forward.*
## Start ha-mcp as an HTTP server

The worked example uses a machine on teh same network as Home Assistant: a Raspberry Pi, a NAS or a mini PC with Docker. Home Assistant is at `http://homeassistant.local:8123`.

First create a long-lived access token: your profile (bottom of the sidebar) -> **Security** -> **Long-lived access tokens** -> **Create token**. The project recommends an administrator token. The token never leaves your network, but whoever holds your connector URL gets everything it can do, so read the security section before you skip ahead.

Then pick a secret path. ha-mcp serves MCP at `/mcp` by default, which anyone can guess. Generate a long random one instead:

```bash
SECRET=/private_$(openssl rand -hex 16)
echo "$SECRET"
```

Run the container (this is the command from the ha-mcp FAQ with the secret path added; I haven't run it against a live Home Assistant):

```bash
docker run -d --name ha-mcp -p 8086:8086 \
  -v ha-mcp-data:/home/mcpuser/.ha-mcp \
  -e HOMEASSISTANT_URL=http://homeassistant.local:8123 \
  -e HOMEASSISTANT_TOKEN=<your_long_lived_token> \
  -e MCP_SECRET_PATH="$SECRET" \
  ghcr.io/homeassistant-ai/ha-mcp:latest ha-mcp-web
```

The named volume matters. ha-mcp keeps its tool settings, backups and OAuth client registrations in `~/.ha-mcp`, which is `/home/mcpuser/.ha-mcp` in the container, and without the volume they vanish whenever the container is replaced. If you run Home Assistant OS, you can use the ha-mcp app (add-on) or the in-process HA-MCP integration instead; both are in the README, and the add-on logs print the URL to use. The rest of this post applies to any of them as long as you know the local port.

Check it locally first:

```bash
docker logs ha-mcp | tail -5
curl -i "http://localhost:8086$SECRET"
```

A plain `GET` on an MCP endpoint is not a real request, so a `405 Method Not Allowed` there is normal. The ha-mcp FAQ says the same about the `405` lines you will later see in its logs.

## Open the tunnel

In a second terminal on the same machine:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8086 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8086 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8086 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\"}}}"
{{</ ssh_command >}}

The HTTPS URL you recieve from Pinggy looks like `https://xxxx.run.pinggy-free.link`. Your connector URL is that address followed by the secret path:

`https://xxxx.run.pinggy-free.link/private_<random>`

Before you add anything to Claude, run the same `curl -i` check against the public URL. You should get the same answer as on localhost. If you get an error from Pinggy instead, ha-mcp probably isn't listening on 8086.

## Add the connector in Claude.ai

In Claude.ai, open **Settings -> Connectors -> Add custom connector**, paste the full URL and click **Continue**. Keep whatever authentication settings Claude detects. The ha-mcp FAQ is blunt about this: manual overrides, including "No sign in", often don't help, and if nothing is detected the usual fix is to delete the connector and add it again.

Two behaviours that look like failures and aren't:

- Claude.ai often shows "Couldn't reach the MCP server" during the first handshake and then connects anyway. Click **Configure** on the connector. If tools are listed, you're connected.
- A `405` on a `GET` in the ha-mcp logs is the pre-flight and not the cause of a failed connect.

To confirm, start a chat and ask "Can you see my Home Assistant?". Then ask for something read-only, like the state of one sensor, before you let it near an automation.

## What a free tunnel gets wrong for this

A free anonymous tunnel works for the test above, with two catches that matter for a connector you leave in place:

- It disconnects after 60 minutes and the next one gets a new random URL, so you would re-add the connector every hour.
- The `w:` IP allowlist (below) is a Pro feature.

For something permanent, use a Pro token and a persistent subdomain assigned to it in the {{< link href="https://dashboard.pinggy.io" >}}Pinggy dashboard{{< /link >}}, then run the tunnel with the CLI, which reconnects on its own:

```bash
npm install -g pinggy
pinggy -p 443 -R0:localhost:8086 --token <TOKEN> --notui
```

The URL stays the same across restarts, so the connector keeps working. Put the command in a systemd service or use the steps in the Pinggy docs for {{< link href="https://pinggy.io/docs/run_tunnel_on_startup/" >}}running a tunnel on startup{{< /link >}}.

{{< image "home_assistant_mcp_claude_pinggy/ha_mcp_tunnel_architecture.webp" "Request path from Claude.ai through Pinggy on port 443 to ha-mcp-web on port 8086 and Home Assistant on port 8123" >}}

*The request path from Claude.ai to your entities, with the allowlist and the long-lived token marked on their hops.*
## Lock it down

The connector URL controls a house. Assume the worst case: it leaks in a screenshot, a shell history or a log paste.

1. **Secret path.** Already done above. The ha-mcp docs call the URL a shared secret and say to treat it like a password. If it leaks, change `MCP_SECRET_PATH`, restart the container and update the connector.
2. **IP allowlist at the tunnel.** Claude's backend traffic comes from `160.79.104.0/21` (per the ha-mcp FAQ, which cites Anthropic's published ranges; check those before relying on it). With a Pro token the tunnel can drop everyone else before the request ever reaches your machine:

   ```bash
   ssh -p 443 -R0:localhost:8086 <TOKEN>@pro.pinggy.io -T -- w:160.79.104.0/21
   ```

   The tradeoff: if you later add a flow that sends your own browser to the server, for example an OAuth consent page, your home IP has to be in the list too. Comma-separate them: `w:160.79.104.0/21,203.0.113.7/32`.
3. **A narrower token.** The project recommends an administrator token, but says non-admin tokens work with limitations. If you only want Claude to read and toggle devices, a non-admin user's token limits what a leaked URL can do.
4. **Fewer tools.** ha-mcp has a settings page where you can enable, disable and pin individual tools. Turn off what you don't use. The file and YAML editing tools are already off by default, per the README.

Basic auth and bearer-key flags on the tunnel (`b:` and `k:`) are the wrong tool here. They make the tunnel demand credentials that the Claude.ai connector flow isn't set up to send, so they would block Claude along with everyone else. I haven't tested this, so verify it before you rely on it.

## Troubleshooting

- **The connector will not add.** Check that the URL has no port and starts with `https://`. Check the logs for a `200` after the failed attempt. Restart both the container and the Claude.ai tab; the FAQ says either side can hold stale state.
- **Everything times out.** Claude waits roughly 10 seconds for discovery and token responses. A slow Wi-Fi link between the tunnel machine and the container, or a cold container, can miss that. Run both on the same machine.
- **The tunnel dropped.** On a free tunnel, that is the 60 minute limit. Add `-o ServerAliveInterval=60` to the SSH command, or use the Pinggy CLI, which reconnects.
- **Tools list is empty or old.** Restart the container and refresh the connector. Tool toggles apply on the next server restart.
- **`HOMEASSISTANT_URL` is wrong.** Inside the container, `localhost` is the container. Use the machine's LAN address or `homeassistant.local`, and `http://` unless you have set up TLS on Home Assistant.

## What to do next

Start read-only. Ask Claude to list your areas and which devices have been unavailable for a week, and see what it finds before you let it edit anything. The settings page also manages automatic backups, which is worth switching on before Claude edits an automation. When you are happy, switch to a Pro tunnel with the allowlist and delete the free-tunnel connector.

If you want the general version of this pattern for any MCP server, see [how to share a local MCP server with Pinggy](/blog/share_local_mcp_server_with_pinggy/). For smart home apps stuck behind CGNAT without any MCP involved, [remote access to smart home apps behind CGNAT](/blog/remote_access_smart_home_apps_behind_cgnat/) covers the plain case. The ha-mcp commands in this post come from the project's README and FAQ as of November 10, 2026 (ha-mcp 9.0.0 was released October 28, 2026) and were not run against a live Home Assistant instance; check them against the {{< link href="https://github.com/homeassistant-ai/ha-mcp" >}}ha-mcp repository{{< /link >}} before you rely on them. The Pinggy flags match the Pinggy docs.
