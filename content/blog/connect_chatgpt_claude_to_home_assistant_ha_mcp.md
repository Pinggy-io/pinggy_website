---
title: "How to Connect ChatGPT and Claude to Home Assistant with ha-mcp"
description: "ha-mcp gives ChatGPT and Claude 87 tools to build automations, edit dashboards and debug Home Assistant. Run it in Docker on port 8086 and reach it through a Pinggy tunnel with a secret URL."
date: 2026-11-12T18:30:00+05:30
lastmod: 2026-11-12T18:30:00+05:30
draft: false
tags: ["Home Assistant", "MCP", "ChatGPT", "self-hosted", "remote access"]
og_image: "images/connect_chatgpt_claude_to_home_assistant_ha_mcp/connect_chatgpt_claude_to_home_assistant_ha_mcp_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIGNvbm5lY3QgQ2hhdEdQVCBhbmQgQ2xhdWRlIHRvIEhvbWUgQXNzaXN0YW50IHdpdGggaGEtbWNwIiwKICAiZGVzY3JpcHRpb24iOiAiaGEtbWNwIGdpdmVzIENoYXRHUFQgYW5kIENsYXVkZSA4NyB0b29scyB0byBidWlsZCBhdXRvbWF0aW9ucywgZWRpdCBkYXNoYm9hcmRzIGFuZCBkZWJ1ZyBIb21lIEFzc2lzdGFudC4gUnVuIGl0IGluIERvY2tlciBvbiBwb3J0IDgwODYgYW5kIHJlYWNoIGl0IHRocm91Z2ggYSBQaW5nZ3kgdHVubmVsIHdpdGggYSBzZWNyZXQgVVJMLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9jb25uZWN0X2NoYXRncHRfY2xhdWRlX3RvX2hvbWVfYXNzaXN0YW50X2hhX21jcC9jb25uZWN0X2NoYXRncHRfY2xhdWRlX3RvX2hvbWVfYXNzaXN0YW50X2hhX21jcF9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTEyVDE4OjMwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNyZWF0ZSBhIHRva2VuIGZvciBoYS1tY3AiLCAidGV4dCI6ICJJbiBIb21lIEFzc2lzdGFudCwgYWRkIGEgZGVkaWNhdGVkIGFkbWluaXN0cmF0b3IgYWNjb3VudCB3aXRoIGxvY2FsIGFjY2VzcyBvbmx5LCB0aGVuIGNyZWF0ZSBhIGxvbmctbGl2ZWQgYWNjZXNzIHRva2VuIHVuZGVyIGl0cyBwcm9maWxlLCBTZWN1cml0eSwgTG9uZy1saXZlZCBhY2Nlc3MgdG9rZW5zLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlJ1biBoYS1tY3AgYXMgYW4gSFRUUCBzZXJ2ZXIgb24gcG9ydCA4MDg2IiwgInRleHQiOiAiUnVuIGRvY2tlciBydW4gLWQgLS1uYW1lIGhhLW1jcCAtcCAxMjcuMC4wLjE6ODA4Njo4MDg2IC12IGhhLW1jcC1kYXRhOi9ob21lL21jcHVzZXIvLmhhLW1jcCAtZSBIT01FQVNTSVNUQU5UX1VSTD1odHRwOi8vMTkyLjE2OC4xLjUwOjgxMjMgLWUgSE9NRUFTU0lTVEFOVF9UT0tFTj15b3VyX2xvbmdfbGl2ZWRfdG9rZW4gLWUgTUNQX1NFQ1JFVF9QQVRIPS9wcml2YXRlXzxyYW5kb20+IGdoY3IuaW8vaG9tZWFzc2lzdGFudC1haS9oYS1tY3A6bGF0ZXN0IGhhLW1jcC13ZWIuIFRoZSBzZWNyZXQgcGF0aCBpcyB0aGUgb25seSBjcmVkZW50aWFsLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIk9wZW4gYSBQaW5nZ3kgdHVubmVsIHRvIHBvcnQgODA4NiIsICJ0ZXh0IjogIlJ1biBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODA4NiBmcmVlLnBpbmdneS5pbyBhbmQgY29weSB0aGUgSFRUUFMgVVJMIGl0IHByaW50cy4gVGhlIGNvbm5lY3RvciBVUkwgaXMgdGhhdCBVUkwgZm9sbG93ZWQgYnkgdGhlIHNlY3JldCBwYXRoLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkFkZCB0aGUgY29ubmVjdG9yIGluIENoYXRHUFQgb3IgQ2xhdWRlLmFpIiwgInRleHQiOiAiVHVybiBvbiBkZXZlbG9wZXIgbW9kZSBpbiBDaGF0R1BULCBvciBvcGVuIFNldHRpbmdzLCBDb25uZWN0b3JzIGluIENsYXVkZS5haSwgY3JlYXRlIGEgY3VzdG9tIGNvbm5lY3RvciwgcGFzdGUgdGhlIHR1bm5lbCBVUkwgd2l0aCB0aGUgc2VjcmV0IHBhdGggYW5kIGNob29zZSBubyBhdXRoZW50aWNhdGlvbi4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJMaW1pdCB3aGF0IHRoZSBtb2RlbCBjYW4gY2hhbmdlIiwgInRleHQiOiAiQXBwZW5kIC9yZWFkb25seSB0byB0aGUgY29ubmVjdG9yIFVSTCB0byBoaWRlIHdyaXRlIHRvb2xzLCBhbmQgdXNlIHRoZSBzZXR0aW5ncyBwYWdlIGF0IHRoZSBzZWNyZXQgcGF0aCBwbHVzIC9zZXR0aW5ncyB0byBkaXNhYmxlIHRvb2xzIG9yIHJlcXVpcmUgYXBwcm92YWwuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "connect_chatgpt_claude_to_home_assistant_ha_mcp/connect_chatgpt_claude_to_home_assistant_ha_mcp_banner.webp" "Headline above a flow from the ChatGPT and Claude logos through Pinggy to ha-mcp on port 8086 and Home Assistant on port 8123, with the ssh tunnel command in a code panel" >}}

{{< llm-context >}}To connect ChatGPT or Claude.ai to Home Assistant with ha-mcp and Pinggy - run `docker run -d --name ha-mcp -p 127.0.0.1:8086:8086 -e HOMEASSISTANT_URL=http://192.168.1.50:8123 -e HOMEASSISTANT_TOKEN=<token> -e MCP_SECRET_PATH=/private_<random> ghcr.io/homeassistant-ai/ha-mcp:latest ha-mcp-web` (Streamable HTTP on port 8086), then in a new terminal run `ssh -p 443 -R0:localhost:8086 free.pinggy.io` and paste the HTTPS URL plus `/private_<random>` into the chat app as a custom MCP connector.{{< /llm-context >}}

<a href="https://github.com/homeassistant-ai/ha-mcp" target="_blank">ha-mcp</a> is an MCP server that hands an AI assistant 87 tools for administering Home Assistant: writing automations, editing dashboards, reading automation traces, managing helpers and backups. Version 9.2.0 shipped on November 11, 2026, and the repo sits at 7.7k stars as of November 12. It works well with Claude Desktop or Cursor on the same network. ChatGPT and Claude.ai are different, because they call your server from OpenAI's and Anthropic's data centers, so the server needs a public HTTPS URL. This post runs ha-mcp in Docker next to Home Assistant and gives it that URL with a Pinggy tunnel.

{{% tldr %}}
1. **ha-mcp administers Home Assistant; the built-in MCP server only operates devices.** It has 87 tools against roughly 15, covering automations, scripts, dashboards, traces, logs and backups.
2. **ChatGPT and Claude.ai connect from the cloud**, so `http://192.168.1.50:8086` is useless to them. They need HTTPS on port 443 at a public hostname.
3. **Run the HTTP server with a secret path**: `ha-mcp-web` on port 8086 with `MCP_SECRET_PATH=/private_<random>`. The path is the only credential in this mode.
4. **Tunnel only port 8086**, not Home Assistant itself: `ssh -p 443 -R0:localhost:8086 free.pinggy.io`. Your login page on 8123 stays off the internet.
5. **Start on the read-only endpoint.** Append `/readonly` to the URL until you trust what the model does with write access.
{{% /tldr %}}

## How ha-mcp differs from Home Assistant's built-in MCP server

Home Assistant has shipped its own MCP Server integration since 2025. It exposes the entities you've shared with Assist, so a model can turn on a light or read a temperature. It can't see your automation YAML, your dashboards or your logs.

ha-mcp goes after the admin work instead. The project's own FAQ puts it as "Built-in = operate devices. ha-mcp = administer your system." The 87 tools fall into groups like these:

- `ha_config_set_automation`, `ha_config_set_script`, `ha_config_set_scene` to create and edit automations, scripts and scenes
- `ha_config_get_dashboard`, `ha_config_set_dashboard` for Lovelace dashboards
- `ha_get_automation_traces`, `ha_get_logs`, `ha_get_history` for debugging
- `ha_search`, `ha_get_state`, `ha_get_overview` for finding entities
- `ha_call_service`, `ha_bulk_control` for the device control the built-in server also does
- `ha_manage_backup`, `ha_manage_updates`, `ha_restart` for system chores

The practical difference shows up in a prompt like "the hallway motion light stays on all night, find out why". With the built-in server the model can look at the light's state and guess. With ha-mcp it can pull the automation's traces, read teh condition that never matched, and propose a fix as an edit you approve.

The project is MIT licensed, written in Python, and moves fast: v1.0.0 was tagged in September 2025 and v9.0.0 landed on October 28, 2026. Expect breaking changes between majors.

## Why ChatGPT and Claude.ai need a public URL

A desktop MCP client such as Claude Desktop, Claude Code or Cursor runs on your machine. It can reach `http://192.168.1.50:8086/mcp` because it's on your LAN.

ChatGPT's custom connectors and Claude.ai's connectors don't work that way. The request to your MCP server comes from the vendor's backend, not from your browser tab. The ha-mcp FAQ lists what Anthropic's side requires: standard HTTPS on port 443 with no explicit port in the URL, an answer within 10 seconds during discovery, and nothing in front that blocks Anthropic's egress range `160.79.104.0/21`. OpenAI's side has the same basic requirement of a publicly reachable HTTPS URL.

Most Home Assistant boxes sit behind a home router, often behind CG-NAT, with no inbound ports at all. A tunnel fixes that without touching the router: the machine at home opens an outbound SSH connection to Pinggy, Pinggy hands back a public HTTPS hostname, and requests to that hostname travel back down the connection.

{{< image "connect_chatgpt_claude_to_home_assistant_ha_mcp/chatgpt_to_home_assistant_ha_mcp_tunnel.webp" "Sequence diagram: ha-mcp opens an SSH connection to Pinggy from the home network, ChatGPT posts to the secret path on the Pinggy URL, Pinggy forwards it to ha-mcp on port 8086, and ha-mcp calls Home Assistant on port 8123" >}}

*The dashed blue line is the SSH connection your home machine opens first. Only port 8086 is reachable through it.*

A tunnel isn't the only route. Here's how the options compare for someone who doesn't already have Home Assistant on the internet:

| Route | What you need | URL | What it exposes |
|---|---|---|---|
| Nabu Casa + ha-mcp webhook | Home Assistant Cloud subscription | Stable, `/api/webhook/<id>` on your Nabu Casa host | Home Assistant itself, as Nabu Casa already does |
| Cloudflare quick tunnel | `cloudflared` installed | Random `trycloudflare.com`, changes on restart | Whatever port you point it at |
| Cloudflare named tunnel | Cloudflare account and a domain on it | Stable, your domain | Whatever port you point it at |
| OpenAI Tunnel (community integration) | OpenAI API key with Tunnels permissions, HA OS or Supervised | No public URL, a tunnel ID | Only reachable by OpenAI products |
| Pinggy | An SSH client | Random on the free tier for 60 minutes, stable with a Pro token | Whatever port you point it at |

If you already pay for Nabu Casa, use the webhook route and skip the rest of this post. If you only care about ChatGPT, the <a href="https://github.com/norpol/hass-codex-tunnel-mcp" target="_blank">OpenAI Tunnel integration</a> is worth a look since nothing becomes public, but Claude.ai can't use it. And with Cloudflare, the ha-mcp docs call out the "Block AI training bots" setting as the most common reason a connector fails while the URL loads fine in a browser.

## Step 1: create a token for ha-mcp

The worked example for the rest of the post: Home Assistant Container on a mini PC at `http://192.168.1.50:8123`, with Docker on the same box.

ha-mcp talks to Home Assistant as a user, through a long-lived access token. You can make one on your own account (your profile -> **Security** -> **Long-lived access tokens** -> **Create token**), and it's shown only once. The project's README recommends something stricter: add a separate person under **Settings -> People** with **Administrator** and **Local access only** turned on, and create the token there. Changes then show up in the logbook under that account's name, and the token is useless from outside your network if it leaks.

It needs to be an admin. Non-admin tokens work in a limited way, and admin-only operations such as reading automation configs fail with `AUTH_INSUFFICIENT_PERMISSIONS`.

## Step 2: run ha-mcp as an HTTP server on port 8086

ha-mcp has several install methods: an integration that runs inside Home Assistant (needs 2026.8.0 or newer), an app for Home Assistant OS, and a standalone server through Docker or `uvx`. The standalone server suits a Container or Core install, and it keeps the MCP endpoint on its own port, which is what we want to tunnel.

The image's default entry point speaks stdio. For a network server you pass `ha-mcp-web`, which serves Streamable HTTP on port 8086. The old `ha-mcp-sse` entry point is gone, and a client configured for SSE gets a `405`.

```bash
SECRET=$(openssl rand -hex 16)

docker run -d --name ha-mcp -p 127.0.0.1:8086:8086 \
  -v ha-mcp-data:/home/mcpuser/.ha-mcp \
  -e HOMEASSISTANT_URL=http://192.168.1.50:8123 \
  -e HOMEASSISTANT_TOKEN=your_long_lived_token \
  -e MCP_SECRET_PATH=/private_$SECRET \
  ghcr.io/homeassistant-ai/ha-mcp:latest ha-mcp-web

echo "/private_$SECRET"   # keep this, it's the credential
```

Three things in that command matter:

- `MCP_SECRET_PATH` replaces the default `/mcp` endpoint with a path nobody can guess. In this mode ha-mcp has no login. Its <a href="https://github.com/homeassistant-ai/ha-mcp/blob/master/SECURITY.md" target="_blank">threat model</a> says plainly that the server "authenticates by URL-path secrecy", so anyone who knows the full URL is an admin on your Home Assistant. Leaving `/mcp` on a public hostname would be handing out the keys.
- `-p 127.0.0.1:8086:8086` binds the port to loopback on the host. The tunnel client runs on the same box, so nothing else on the LAN needs to reach it.
- The `ha-mcp-data` volume keeps tool settings and feature flags across container updates. Without it they reset every time the container is re-created.

No Docker? The same server runs from PyPI with <a href="https://docs.astral.sh/uv/" target="_blank">uv</a>:

```bash
export HOMEASSISTANT_URL=http://192.168.1.50:8123
export HOMEASSISTANT_TOKEN=your_long_lived_token
export MCP_SECRET_PATH=/private_$(openssl rand -hex 16)
export MCP_HOST=127.0.0.1
uvx --python 3.14 --from ha-mcp@latest ha-mcp-web
```

A quick check from the same machine: `curl -i http://localhost:8086/private_$SECRET` should answer `405` with a plain-text page explaining that this is an MCP endpoint. That's correct. The endpoint only accepts `POST`, and the 405 tells you the path is right. A `404` means the path is wrong.

One caveat on everything in this step: I took the commands, ports and defaults from the ha-mcp v9.2.0 source and its setup wizard, not from a run against my own Home Assistant box. If your logs disagree with what's written here, trust the logs and the <a href="https://homeassistant-ai.github.io/ha-mcp/setup/" target="_blank">setup wizard</a>.

{{< image "connect_chatgpt_claude_to_home_assistant_ha_mcp/ha_mcp_connector_url_anatomy.webp" "A connector URL split into three parts: the Pinggy tunnel hostname, the secret path set by MCP_SECRET_PATH, and the optional /readonly suffix" >}}

*Whoever has the middle segment has your Home Assistant, so treat the whole URL like a password.*

## Step 3: open a Pinggy tunnel to port 8086

On the same machine, in a second terminal:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8086 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8086 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8086 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8086 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints an HTTP and an HTTPS URL of the form `https://abc123.run.pinggy-free.link`. Your connector URL is the HTTPS one with the secret path on the end: `https://abc123.run.pinggy-free.link/private_<your secret>`. Because the tunnel answers on port 443, it already satisfies the "no explicit port" rule the hosted connectors have.

Notice what is and isn't public now. Port 8086 is reachable at a random hostname, and every path except the secret one returns nothing useful. Port 8123, with the Home Assistant login page, isn't in the tunnel at all. That is the main reason I'd pick the standalone server over tunnelling Home Assistant itself for this job.

The free tunnel is fine for trying this out, with two limits you'll hit quickly: it disconnects after 60 minutes, and reconnecting gives you a new random hostname, which means editing the connector in ChatGPT again. For something you use daily, a Pro token with a subdomain assigned in the <a href="https://dashboard.pinggy.io" target="_blank">dashboard</a> keeps the same URL across restarts:

```bash
ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8086 <token>@pro.pinggy.io
```

If Claude.ai is your only client, you can also restrict who may connect at the tunnel. Pinggy's `w:` option takes a CIDR list, and Anthropic publishes its egress range:

```bash
ssh -p 443 -R0:localhost:8086 <token>@pro.pinggy.io -- w:160.79.104.0/21
```

Requests from anywhere else get refused before they reach ha-mcp. Check <a href="https://platform.claude.com/docs/en/api/ip-addresses" target="_blank">Anthropic's IP address page</a> before relying on that range, and don't add this if you also want ChatGPT to connect.

## Step 4: add the connector in ChatGPT or Claude.ai

In ChatGPT, custom MCP servers live behind developer mode. OpenAI has moved the toggle around this year: look under **Settings -> Security and login**, or under the connectors section's advanced settings, and turn on **Developer mode**. Availability depends on your plan and, in a workspace, on your admin. Then create a new connector:

- Name: `Home Assistant`
- URL: `https://abc123.run.pinggy-free.link/private_<your secret>`
- Authentication: none (the secret path is the credential)

ChatGPT lists the tools it discovered. If you see names starting with `ha_`, the whole chain works: OpenAI -> Pinggy -> ha-mcp -> Home Assistant. Enable the connector in a new chat and try something read-only first, such as "Give me an overview of my Home Assistant setup", which should trigger `ha_get_overview`.

In Claude.ai, go to **Settings -> Connectors**, add a custom connector and paste the same URL. Two quirks the ha-mcp docs warn about: Claude.ai often shows "Couldn't reach the MCP server" during the first handshake and then connects anyway, and you still have to click **Connect** on the connector after adding it. If the connector's **Configure** button lists tools, you're in.

With either client you'll recieve a confirmation prompt before write tools run, as long as you haven't told the client to always allow them. Leave that on.

## Limiting what the model can change

An assistant with 87 admin tools and a prompt-injection problem is a bad combination, and ha-mcp is upfront that defending against a tricked model is the client's job, not the server's. A connected client is a "trusted principal", equivalent to someone holding your access token. So reduce what a connection can do.

The simplest control is the read-only endpoint. Add `/readonly` to the URL, `https://abc123.run.pinggy-free.link/private_<your secret>/readonly`, and that connection sees no write tools and has write calls blocked. Use it as your default connector, and keep a second, full-access connector that you enable only when you want an automation written.

ha-mcp also serves a settings page at `<secret path>/settings` on the same port. From there you can disable individual tools, turn on global Read Only Mode, and set policies that require your approval for specific tool calls. Be aware that this page travels through the tunnel too, under the same secret path. That's one more reason not to paste the URL into a chat, a screenshot or a bug report.

Two more defaults that help: ha-mcp takes automatic backups before edits, and the tools that touch raw files and YAML are beta features that stay off unless you enable them.

## Troubleshooting

**`405 Method Not Allowed` on a GET in the logs.** Normal. Connectors pre-flight with a `GET`, and the endpoint only takes `POST` and `DELETE`. It shows up on successful connections too.

**"Terminating session: None" in the logs.** Also normal. ha-mcp runs in stateless HTTP mode, so each request creates and drops a temporary session.

**It worked an hour ago and now nothing connects.** The free tunnel's 60 minutes ran out and the hostname changed. Restart the tunnel and update the connector URL, or move to a persistent URL.

**ChatGPT shows old tools after an ha-mcp update.** ChatGPT caches a connector's tool list. Open the connector in settings and click **Refresh tools**, then start a new conversation. If the list is still stale, delete the connector and re-create it under a different name.

**A browser shows a Pinggy page instead of the 405 text.** Free tunnels show an interstitial to browser user agents. MCP clients aren't browsers, so they usually aren't affected, but if a connector fails only on the free tier, a Pro tunnel removes that variable.

**Connection hangs after switching install methods.** Run exactly one ha-mcp per client. A leftover local `uvx` entry in the same client alongside the HTTP URL is a known cause.

## Where to go from here

Start with the read-only connector and ask the model to audit what you already have: automations that never trigger, entities that have been unavailable for weeks, dashboards that reference devices you removed. That's low risk, and it shows quickly whether the model understands your setup. When you move to write access, ask for one automation at a time and read the diff before approving.

If you'd like to try the tools before pointing them at your own house, the project runs a public demo instance: set `HOMEASSISTANT_URL=https://ha-mcp-demo-server.qc-h.net` and `HOMEASSISTANT_TOKEN=demo`, and it resets weekly. For the rest of the remote access picture, see our posts on [reaching smart home apps behind CG-NAT](/blog/remote_access_smart_home_apps_behind_cgnat/) and [sharing a local MCP server with Pinggy](/blog/share_local_mcp_server_with_pinggy/).
