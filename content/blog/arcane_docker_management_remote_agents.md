---
title: "Arcane 3.0: Manage Docker Hosts Behind NAT With Agents That Dial Out"
description: "Arcane 3.0 turns every remote Docker host into an outbound agent that opens no ports. Set up the manager, expose it on a stable HTTPS URL with Pinggy, and enroll a VPS and a Raspberry Pi behind NAT."
date: 2026-11-17T11:00:00+05:30
lastmod: 2026-11-17T11:00:00+05:30
draft: false
tags: ["Arcane", "Docker", "self-hosted", "remote access", "open source"]
og_image: "images/arcane_docker_management_remote_agents/arcane_docker_management_remote_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiTWFuYWdlIERvY2tlciBob3N0cyBiZWhpbmQgTkFUIHdpdGggQXJjYW5lIDMuMCBhZ2VudHMgYW5kIGEgUGluZ2d5IHR1bm5lbCIsCiAgImRlc2NyaXB0aW9uIjogIkFyY2FuZSAzLjAgdHVybnMgZXZlcnkgcmVtb3RlIERvY2tlciBob3N0IGludG8gYW4gb3V0Ym91bmQgYWdlbnQgdGhhdCBvcGVucyBubyBwb3J0cy4gU2V0IHVwIHRoZSBtYW5hZ2VyLCBleHBvc2UgaXQgb24gYSBzdGFibGUgSFRUUFMgVVJMIHdpdGggUGluZ2d5LCBhbmQgZW5yb2xsIGEgVlBTIGFuZCBhIFJhc3BiZXJyeSBQaSBiZWhpbmQgTkFULiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9hcmNhbmVfZG9ja2VyX21hbmFnZW1lbnRfcmVtb3RlX2FnZW50cy9hcmNhbmVfZG9ja2VyX21hbmFnZW1lbnRfcmVtb3RlX2FnZW50c19iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTE3VDExOjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkdlbmVyYXRlIGFuIGVuY3J5cHRpb24ga2V5IiwgInRleHQiOiAiUnVuIGRvY2tlciBydW4gLS1ybSBnaGNyLmlvL2dldGFyY2FuZWFwcC9tYW5hZ2VyOmxhdGVzdCAvYXBwL2FyY2FuZSBnZW5lcmF0ZSBzZWNyZXQsIG9yIG9wZW5zc2wgcmFuZCAtaGV4IDMyLCBhbmQgcHV0IHRoZSB2YWx1ZSBpbiBBUkNBTkVfRU5DUllQVElPTl9LRVkuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU3RhcnQgdGhlIEFyY2FuZSBtYW5hZ2VyIiwgInRleHQiOiAiQ3JlYXRlIGNvbXBvc2UueWFtbCB3aXRoIHRoZSBnaGNyLmlvL2dldGFyY2FuZWFwcC9tYW5hZ2VyOnYzIGltYWdlLCBwb3J0IDM1NTIsIHRoZSBEb2NrZXIgc29ja2V0IGFuZCB5b3VyIHByb2plY3RzIGZvbGRlciBtb3VudGVkLCB0aGVuIHJ1biBkb2NrZXIgY29tcG9zZSB1cCAtZCBhbmQgY29weSAvYXBwL2RhdGEvaW5pdGlhbC1hZG1pbi1wYXNzd29yZCBvdXQgb2YgdGhlIGNvbnRhaW5lci4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJPcGVuIGEgUGluZ2d5IHR1bm5lbCB0byBwb3J0IDM1NTIiLCAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtbyBTZXJ2ZXJBbGl2ZUludGVydmFsPTYwIC1SMDpsb2NhbGhvc3Q6MzU1MiA8dG9rZW4+QHByby5waW5nZ3kuaW8gLVQgLS0geDp4ZmYgd2l0aCBhIHRva2VuIHRoYXQgaGFzIGEgcGVyc2lzdGVudCBzdWJkb21haW4sIHNvIHRoZSBVUkwgc3RheXMgdGhlIHNhbWUgYWNyb3NzIHJlc3RhcnRzLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlBvaW50IEFyY2FuZSBhdCB0aGUgcHVibGljIFVSTCIsICJ0ZXh0IjogIlNldCBBUkNBTkVfQVBQX1VSTCB0byB0aGUgUGluZ2d5IEhUVFBTIFVSTCBhbmQgQVJDQU5FX1RSVVNURURfUFJPWElFUyB0byB0aGUgQ29tcG9zZSBuZXR3b3JrIHN1Ym5ldCwgdGhlbiByZWNyZWF0ZSB0aGUgY29udGFpbmVyIHdpdGggZG9ja2VyIGNvbXBvc2UgdXAgLWQuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiRW5yb2xsIHJlbW90ZSBhZ2VudHMiLCAidGV4dCI6ICJJbiBBZ2VudHMgLT4gQWRkIEFnZW50LCBnZW5lcmF0ZSBhbiBlbnJvbGxtZW50IHRva2VuLCB0aGVuIHJ1biBnaGNyLmlvL2dldGFyY2FuZWFwcC9hZ2VudDp2MyBvbiBlYWNoIHJlbW90ZSBob3N0IHdpdGggQVJDQU5FX0FHRU5UPXRydWUsIEFSQ0FORV9BR0VOVF9UUkFOU1BPUlQ9d2Vic29ja2V0LCBBUkNBTkVfQUdFTlRfVE9LRU4gYW5kIEFSQ0FORV9NQU5BR0VSX0FQSV9VUkwgc2V0IHRvIHRoZSBQaW5nZ3kgVVJMLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "arcane_docker_management_remote_agents/arcane_docker_management_remote_agents_banner.webp" "A VPS and a Raspberry Pi running arcane-agent connect out through a Pinggy URL to an Arcane manager on port 3552" >}}

{{< llm-context >}}To reach an Arcane 3.0 Docker manager behind NAT with Pinggy - run the manager with `docker compose up -d` (it listens on port 3552), then run `ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:3552 <token>@pro.pinggy.io -T -- x:xff` to get a persistent public HTTPS URL, set ARCANE_APP_URL and each agent's ARCANE_MANAGER_API_URL to that URL, and use ARCANE_AGENT_TRANSPORT=websocket on the agents.{{< /llm-context >}}

Arcane 3.0 shipped on November 14, 2026, and its biggest change is a deletion. The "direct" agent, where the manager reached into each remote host on a port you had to open, is gone. Every remote Docker host now runs a small `arcane-agent` container that connects **out** to the manager over gRPC or WebSocket and opens no ports of its own. That means a Raspberry Pi behind CG-NAT, a VPS and a laptop on hotel Wi-Fi can all sit on one dashboard, as long as each of them can reach a single URL: the manager's.

{{% tldr %}}
1. **Arcane is a self-hosted Docker management UI** (BSD-3-Clause, Go, about 9.1k GitHub stars as of November 17, 2026). It runs as one container on port `3552` and talks to Docker through `/var/run/docker.sock`.
2. **In 3.0, every remote host is an outbound agent.** Direct agents and the polling transport were removed; agents hold a long-lived tunnel to the manager and listen on no port.
3. **Only the manager needs a reachable URL.** If it runs on a home server, a Pinggy HTTPS tunnel on `localhost:3552` gives it one without touching the router.
4. **Use a persistent URL and the WebSocket transport.** Agents store the manager URL, so a URL that changes every hour breaks them; `ARCANE_AGENT_TRANSPORT=websocket` skips the gRPC attempt.
5. **Treat the Arcane login like root.** Anything that can create containers through the socket can take over the host, with or without a socket proxy.
{{% /tldr %}}

## What Arcane is and what it touches

{{< link href="https://github.com/getarcaneapp/arcane" >}}Arcane{{< /link >}} is a web UI for Docker in the same space as Portainer and Dockge: containers, images, volumes, networks, Compose projects, plus image update checks, vulnerability scans, Git sync for Compose files and Swarm. The backend is Go (the module is `getarcane.dev/arcane/v3`), the license is BSD-3-Clause, and the `getarcaneapp/manager` image on Docker Hub had about 1.11 million pulls on November 17, 2026. It also manages Podman, including pods and Quadlets.

The 3.0 dashboard is a grid of widgets that cover every agent at once: online agents, containers with updates, a vulnerability risk score, reclaimable disk space and top memory users.

{{< image "arcane_docker_management_remote_agents/arcane_v3_dashboard.webp" "Arcane 3.0 dashboard with online agents, needs attention, updates and risk score widgets above an agents table" >}}

*The Arcane 3.0 dashboard, one page for every agent. Screenshot: {{< link href="https://github.com/getarcaneapp/arcane" >}}getarcaneapp/arcane README{{< /link >}}, November 2026.*

The thing to understand before you install it is the mount list. Arcane needs `/var/run/docker.sock`, and access to that socket is root on teh host. The project's own {{< link href="https://getarcane.app/docs/security/socket-proxy.html" >}}socket proxy page{{< /link >}} is unusually blunt about it: a proxy filters which Docker API routes Arcane can call, but Arcane still needs to create and exec into containers, and anyone who can create containers can mount `/` or run a privileged one. "Treat Arcane's login and API keys like root access." Keep that in mind for every step below that makes the manager reachable from outside.

## Install the manager on the Docker host

The setup below follows the official {{< link href="https://getarcane.app/docs/get-started/installation.html" >}}installation guide{{< /link >}}. Our worked example: a home server running Docker that will be the manager, plus a VPS and a Raspberry Pi that will become agents. The Compose projects live in `/opt/docker`.

Generate an encryption key first. It encrypts secrets in Arcane's database:

```bash
docker run --rm ghcr.io/getarcaneapp/manager:latest /app/arcane generate secret
# or, without pulling the image:
openssl rand -hex 32
```

Then create `compose.yaml`:

```yaml
services:
  arcane:
    image: ghcr.io/getarcaneapp/manager:v3
    container_name: arcane
    ports:
      - "3552:3552"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - arcane-data:/app/data
      - /opt/docker:/opt/docker
    environment:
      - ARCANE_APP_URL=http://localhost:3552
      - ARCANE_ENCRYPTION_KEY=<your-encryption-key>
      - ARCANE_PROJECTS_DIRECTORY=/opt/docker
      - PUID=1000
      - PGID=1000
    cgroup: host
    restart: unless-stopped

volumes:
  arcane-data:
```

Two details here trip people up. The projects folder is mounted at the **same absolute path** inside and outside the container, so a relative mount like `./config` in one of your Compose files resolves to the same place for Arcane and for Docker. And `ARCANE_APP_URL` has to be the address you actually open in the browser; we'll change it once the tunnel is up.

Start it and copy out the generated admin password:

```bash
docker compose up -d
docker compose cp arcane:/app/data/initial-admin-password .
cat initial-admin-password
```

Sign in at `http://localhost:3552` as `arcane` with that password, and set a new one when it asks. By default Arcane stores everything in SQLite inside the `arcane-data` volume; set `ARCANE_DATABASE_URL` to a `postgres://` URL if you'd rather use Postgres. Images exist for `linux/amd64`, `linux/arm64`, `linux/arm/v7` and `linux/riscv64`, so the same file works on a Pi.

I couldn't run the manager in the sandbox I wrote this in, because it refuses to mount the Docker socket into a container. Every command and Compose file in this post is copied from the Arcane 3.0 docs and the repo's `docker/examples/compose.basic.yaml`, not from a session of my own, so check the docs if something has moved by the time you read this.

## How Arcane 3.0 agents connect

In 2.x there were two kinds of remote host. A **direct** agent (`AGENT_MODE=true`) listened on port `3553` and the manager called into it, so every remote host needed an inbound port and a firewall rule. An **edge** agent dialled out instead, with either a polling transport or a tunnel. Version 3.0 deletes the direct mode and the polling transport and renames edge agents to plain agents. There's one model left:

1. You create an agent in the manager's UI. Arcane issues a single-use enrollment token (`arc_etkn_...`).
2. The remote host runs `arcane-agent` with that token and the manager's URL.
3. On first start, the agent trades the token for its own API key and stores it, encrypted, in `/app/data`.
4. From then on, the agent holds one continuous tunnel to the manager. Every request the manager makes to that host's Docker engine (list containers, stream logs, open a terminal) rides back down that tunnel.

The agent opens no listening port at all. That's why the old `curl http://localhost:3553/api/health` health check no longer works, and the {{< link href="https://getarcane.app/docs/remote/agents.html" >}}agents docs{{< /link >}} tell you to watch the agent's status in the UI instead.

{{< image "arcane_docker_management_remote_agents/arcane_2x_vs_3_agent_connections.webp" "Side by side: in Arcane 2.x the manager connects in to a remote host listening on port 3553; in Arcane 3.0 the remote host opens the tunnel to the manager and listens on no port" >}}

*In 3.0 the remote host only makes outbound connections, so it can sit behind NAT or a strict firewall. Based on the {{< link href="https://getarcane.app/docs/get-started/migrate-v3.html" >}}Arcane 3.0 migration guide{{< /link >}}.*

The flip side is that the manager now has to be reachable from every agent. If your manager runs on a VPS with a domain and a TLS certificate, that's already true. If it runs on a box in your closet behind a home router, or worse behind carrier-grade NAT where port forwarding isn't possible at all, the agents have nowhere to dial. That's the gap a tunnel fills.

## Give the manager a public HTTPS URL with Pinggy

A Pinggy HTTP tunnel is an SSH reverse tunnel: the home server opens an outbound SSH connection to Pinggy on port 443, Pinggy hands out an HTTPS URL, and requests to that URL come back down the SSH connection to `localhost:3552`. The home server's router never gets touched, which mirrors the way Arcane's own agents work. If you haven't used reverse tunnels before, [this post explains the mechanism](/blog/ssh_reverse_tunnelling/).

For a quick look from your phone, the free tunnel is enough. Run this on the Docker host:

```bash
ssh -p 443 -R0:localhost:3552 free.pinggy.io -T
```

It prints an `http://` and an `https://` URL on `*.run.pinggy-free.link`. Open the HTTPS one and you get the Arcane login page. For browsing that's fine, but it isn't what agents need: free tunnels last 60 minutes, and every reconnect issues a new random URL. An agent stores `ARCANE_MANAGER_API_URL` in its environment, so when the URL changes, every agent goes Offline until you edit each one.

For agents, use a Pro token with a persistent subdomain assigned to it in the [Pinggy dashboard](https://dashboard.pinggy.io), so the same address comes back on every start:

```bash
ssh -p 443 -o ServerAliveInterval=60 \
  -R0:localhost:3552 <token>@pro.pinggy.io -T -- x:xff
```

`ServerAliveInterval=60` keeps the SSH connection from being dropped while idle, and `x:xff` makes Pinggy add an `X-Forwarded-For` header with the real client IP. For a tunnel that should survive reboots and dropped connections, the [Pinggy CLI](https://pinggy.io/docs/cli/) reconnects on its own: `pinggy -p 443 -R0:localhost:3552 --token <TOKEN> --notui`. I couldn't open an SSH tunnel from the sandbox either, so try the free one first and confirm the login page loads before wiring agents to the Pro URL.

Now tell Arcane its new address. In `compose.yaml`:

```yaml
    environment:
      - ARCANE_APP_URL=https://arcane.a.pinggy.link
      - ARCANE_TRUSTED_PROXIES=172.18.0.0/16
```

Replace `arcane.a.pinggy.link` with your subdomain. `ARCANE_TRUSTED_PROXIES` matters more than it looks. Arcane rate-limits logins and token refreshes by client IP. Without it, every request coming through the tunnel looks like it comes from the same address (the Docker network gateway, since the tunnel client connects to the published port from the host), so a few bad logins from anywhere can lock out everyone. List the subnet of the Compose network, which you can look up with:

```bash
docker network inspect <project>_default --format '{{range .IPAM.Config}}{{.Subnet}}{{end}}'
```

Then `docker compose up -d` again to recreate the container with the new values.

## Enroll a VPS and a Raspberry Pi as agents

In the manager, open **Agents -> Add Agent**, give it a name, and click **Generate Agent Configuration**. Copy the token or the snippet right away; Arcane doesn't show it again. On the VPS, the generated Compose file looks like this, with one line changed:

```yaml
services:
  arcane-agent:
    image: ghcr.io/getarcaneapp/agent:v3
    container_name: arcane-agent
    restart: unless-stopped
    environment:
      - ARCANE_AGENT=true
      - ARCANE_AGENT_TRANSPORT=websocket
      - ARCANE_AGENT_TOKEN=arc_etkn_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      - ARCANE_MANAGER_API_URL=https://arcane.a.pinggy.link
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - arcane-data:/app/data

volumes:
  arcane-data:
```

The generated snippet uses `ARCANE_AGENT_TRANSPORT=auto`, which tries a gRPC tunnel to `/api/tunnel/connect` first and falls back to WebSocket. gRPC needs the path in front of the manager to forward HTTP/2 cleartext (h2c) streams without a read timeout; Arcane's {{< link href="https://getarcane.app/docs/networking/reverse-proxy.html" >}}reverse proxy guide{{< /link >}} has a whole Traefik section about exactly that. I haven't confirmed gRPC passes through a Pinggy HTTP tunnel, and WebSocket upgrades do, so setting `websocket` skips the failed attempt on every reconnect. If you leave it on `auto`, the agent log tells you which one won:

```
Agent tunnel connected to manager with transport=grpc
gRPC agent tunnel connection failed, falling back to websocket transport
```

Run `docker compose up -d` on the VPS, and the agent's status in the manager goes from Pending to Online. Do the same on the Pi. If you have many hosts, **Agents -> Enrollment Tokens** creates one multi-use token (up to 10,000 uses, or unlimited) and each host that enrolls with it creates its own agent named after its hostname.

Keep the `arcane-data` volume on the agent. The agent swaps the enrollment token for its own key on first start and saves it there. Lose the volume and the agent tries to enroll again: a used single-use token gets refused, and a multi-use token quietly creates a duplicate agent.

{{< image "arcane_docker_management_remote_agents/arcane_agents_through_pinggy.webp" "Agents on a VPS and a Raspberry Pi behind CG-NAT open WebSocket tunnels to a Pinggy URL, and the home server running the Arcane manager reaches the same URL over SSH on port 443" >}}

*Agents and the manager both dial out; the Pinggy URL is the only public address.*

## What I'd lock down before leaving it public

A public URL in front of a root-equivalent web app deserves some care. In rough order of payoff:

- **Turn on passkeys or SSO.** Arcane supports both (see {{< link href="https://getarcane.app/docs/access/passkeys.html" >}}passkeys{{< /link >}} and {{< link href="https://getarcane.app/docs/access/sso.html" >}}SSO{{< /link >}}). A password alone is a weak lock on what is effectively a root shell.
- **Restrict by IP if your agents have static addresses.** Pro tunnels support an IP whitelist, for example `-- x:xff w:203.0.113.10/32,198.51.100.0/24`. The catch: your phone on mobile data won't be on that list, and neither will a Pi on a residential IP that changes.
- **Don't put HTTP basic auth on the tunnel** if agents use the same URL. The agent config has no setting for basic auth credentials that I could find in the docs, so a `b:user:pass` rule in front would block the agents along with the strangers.
- **Run a socket proxy** such as `wollomatic/socket-proxy`. The docs ship a full Compose file. It won't stop a compromised Arcane from creating a privileged container, but it does block API routes Arcane never needs.
- **Check the 3.0 renames** if you're upgrading rather than installing fresh. Every variable now needs the `ARCANE_` prefix, and a leftover `APP_URL` without its replacement stops startup. The worse trap is the inverted flags: `ANALYTICS_DISABLED=true` is now ignored, so analytics and update checks switch back on unless you set `ARCANE_ANALYTICS_ENABLED=false` and `ARCANE_UPDATE_CHECK_ENABLED=false`. You also have to be on 2.17.3 before moving to 3.0, and the manager, every agent and `arcane-cli` must all run 3.0.

## Where it fits and where it doesn't

Next to Portainer, which splits into a free Community Edition and a paid Business Edition, Arcane is one BSD-licensed codebase, and the 3.0 UI treats many hosts as one inventory: lists and the dashboard show every agent with an Agent column and filter, and the old environment switcher is gone. Portainer has had an outbound Edge Agent for years, so the connection model itself isn't new. What's new is that Arcane made it the only model, which removes a whole class of "why can't the manager reach my host" debugging.

The rough edges are the ones you'd expect from a major version that is three days old. 2.x detail-page bookmarks no longer resolve, `/api/environments` routes moved to `/api/agents` (so scripts against the API need updating), cron schedules dropped the seconds field, and notification providers have to be set up again under **System -> Notifications** because they're now global to the manager. If you depend on the API or on scheduled jobs, I'd wait for a point release or two and read the {{< link href="https://getarcane.app/docs/get-started/migrate-v3.html" >}}migration guide{{< /link >}} end to end before upgrading.

## Try it

Start with one host. Bring the manager up on `localhost:3552`, open the free tunnel, and check that the login page loads on your phone over mobile data. Then switch to a persistent URL, update `ARCANE_APP_URL`, and enroll a single agent with `ARCANE_AGENT_TRANSPORT=websocket`. When the agent shows Online and the manager starts to recieve its container list and live logs, add the rest. If an agent stays Pending, `docker logs -f arcane-agent` on that host almost always says why: a wrong URL, a reused single-use token, or a lost `/app/data` volume.
