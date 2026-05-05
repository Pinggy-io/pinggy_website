---
 title: "Expose a Netdata monitoring dashboard"
 description: "Reach a self-hosted Netdata dashboard from outside your home or office network by routing it through a Pinggy HTTP tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Expose a local Netdata dashboard with Pinggy

[Netdata](https://www.netdata.cloud/) is a real-time monitoring agent that collects thousands of system metrics at one-second resolution and exposes them through a self-contained web dashboard on port `19999`. The dashboard is fast, javascript-heavy, and uses long-polling for live updates - all of which work cleanly through a Pinggy HTTP tunnel.

This guide walks through publishing a single Netdata node. For multi-node fleets, the same approach works against a parent Netdata instance that streams metrics from children.

#### Step 1: Install and start Netdata

The official one-line installer covers most Linux distributions:

```bash
bash <(curl -SsL https://get.netdata.cloud/kickstart.sh)
```

Once installed, the agent runs as a systemd service. Confirm the dashboard responds locally:

```bash
curl http://localhost:19999/api/v1/info
```

#### Step 2: Tunnel port 19999

```bash
ssh -p 443 -R0:localhost:19999 free.pinggy.io
```

The HTTPS URL Pinggy prints is the public endpoint for your dashboard. Browsers handle the TLS handshake against Pinggy and the streamed metric updates flow through the tunnel to your local agent.

#### Step 3: Restrict access

Netdata's dashboard ships without authentication because the project assumes the port is unreachable from the internet. Once exposed, that assumption no longer holds. Apply at least one safeguard at the tunnel level:

- **[Basic authentication](/docs/http_tunnels/basic_auth/)** - every visitor must supply a username and password before any Netdata bytes are served.
- **[IP whitelisting](/docs/http_tunnels/ip_whitelist/)** - only listed IP addresses or CIDR ranges reach the dashboard.

For a basic-auth-protected tunnel:

```bash
ssh -p 443 -R0:localhost:19999 -t free.pinggy.io b:admin:strongpassword
```

#### Step 4: Stable URL for bookmarks and alerts

Free tunnels reissue their hostname on each reconnect, which makes them awkward for bookmarks and alert links. Sign in to [the dashboard](https://dashboard.pinggy.io) and use a [persistent subdomain](/docs/persistent_subdomain/) or a [custom domain](/docs/custom_domain/) so the dashboard URL stays consistent across restarts.

#### Step 5: Forward original client IPs (optional)

If you rely on Netdata's access log to track who is viewing the dashboard, configure the agent to honour Pinggy's `X-Forwarded-For` header. Edit `netdata.conf` under `[web]` and add the relevant `allow connections from` and trusted proxy directives so the real client IP, rather than the loopback address, is recorded.
