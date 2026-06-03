---
name: pinggy
description: This skill should be used when the user asks to "expose localhost", "share local server", "create a tunnel", "test webhooks locally", "use Pinggy", "access remote device", "forward a port", "set up ngrok alternative", "make localhost public", "persistent subdomain", "custom domain tunnel", "TCP tunnel", "UDP tunnel", "TLS tunnel", or mentions Pinggy. Covers all Pinggy tunnel types, access methods, authentication, domains, SDKs, and advanced features.
metadata:
  version: 1.1.0
---

# Pinggy - Complete Tunneling Skill

## What Pinggy is

Pinggy forwards a public internet address to a port on the local machine, over an ordinary SSH connection. It gives any service running on `localhost` a public URL (with automatic HTTPS) without port forwarding, a static IP, or a firewall change. It supports HTTP(S), TCP, UDP, TLS, and TLSTCP tunnels.

The basic path needs no account, no signup, and no installed package - a single SSH command returns a public HTTPS URL. That is the main difference from ngrok, Cloudflare Tunnel, and Tailscale, which require a client install and usually authentication before the first tunnel works.

## When to use it

- Share a local web app, API, or static site for a demo or review.
- Receive webhooks (Stripe, GitHub, Slack, Telegram bots, Razorpay) on a local dev server.
- Reach a home or office machine, IoT device, database, or game server without a public IP.
- Give an AI agent or a teammate a public URL for something running locally.

---

## How to access Pinggy

Three access methods, in order of preference:

- **(a) Preferred - the Pinggy CLI (npm).** Use this when Node.js is available and an npm package can be installed. Easiest to script, reconnects automatically.
- **(b) Fallback - the SSH command.** Use this when nothing can be installed. The SSH client ships with almost every system; nothing to download.
- **(c) Programmatic - the SDK (Node.js or Python).** Use this when a program needs to start, inspect, or stop tunnels in code. Driven by need, layered on top of (a) or (b), not a last resort.

### (a) Pinggy CLI (preferred)

```bash
npm install -g pinggy

pinggy -p 443 -R0:localhost:8000 --notui                       # HTTP(S) tunnel to localhost:8000
pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io --notui       # TCP tunnel
pinggy -p 443 -R0:localhost:19132 udp@free.pinggy.io --notui    # UDP tunnel
```

`--notui` prints plain logs to stdout instead of the interactive terminal UI - the right choice for AI agents and scripts. Omit it for an interactive human session. Add `--token <TOKEN>` (and connect to `pro.pinggy.io`) for a Pro tunnel; a persistent URL comes from a subdomain assigned to that token in the dashboard, not a CLI flag. The friendlier `--type <http|tcp|udp|tls|tlstcp> -l <PORT>` form works too, for example `pinggy --type tcp -l 22 --notui`.

### (b) SSH command (fallback, no install)

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T

# With keepalive (prevents disconnects):
ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8000 free.pinggy.io -T

# Pro token (persistent URL, custom domains, no timeout):
ssh -p 443 -R0:localhost:8000 <token>@pro.pinggy.io -T
```

Output gives two URLs: `http://xxxx.a.free.pinggy.link` and `https://xxxx.a.free.pinggy.link`. The `-T` flag disables the pseudo-terminal for clean, parseable output - use it for agents and scripts. A password is asked only when the system has no SSH keys; create one with `ssh-keygen` to skip the prompt.

### (c) SDK (programmatic)

Node.js (`npm i @pinggy/pinggy`):
```javascript
import { pinggy } from "@pinggy/pinggy";

const tunnel = await pinggy.createTunnel({ forwarding: "localhost:3000" });
await tunnel.start();
console.log(await tunnel.urls());   // ['https://xxxx.a.free.pinggy.link']
await tunnel.stop();
```

Python (`pip install pinggy`):
```python
import pinggy

tunnel = pinggy.start_tunnel(forwardto="localhost:8000")
print(tunnel.urls)   # ['https://xxxx.a.free.pinggy.link']
tunnel.stop()
```

Both SDKs accept the same options as the CLI (`token`, `subdomain`, `region`, auth, headers). See `references/cli-sdks.md`.

### Free vs Pro

Every access method above works with or without an account. The host you connect to (or the `--token` flag) decides which tier you get.

**Free (anonymous, `free.pinggy.io`):**

- No signup, no token. Connect and a URL is returned immediately.
- Each tunnel lasts **60 minutes**, then disconnects. Reconnecting works but issues a **new random URL** every time (`https://xxxx.a.free.pinggy.link`), so the address is not stable across restarts.
- Fine for quick demos, one-off webhook tests, and sharing something for the length of a call.

**Pro (`<token>@pro.pinggy.io`, or `--token <TOKEN>` in the CLI):**

- **No 60-minute timeout** - tunnels stay up as long as the process runs (and the CLI auto-reconnects if the connection drops).
- **Persistent URL** - assign a subdomain to the token in the dashboard (https://dashboard.pinggy.io) and the same address comes back on every start. Note this is set in the dashboard, not via a CLI flag.
- **Custom domains** (`app.example.com`), **wildcard domains**, and **multiple tunnels** on one connection.
- Higher bandwidth and request limits, plus access controls like IP whitelisting on every tunnel type.

**Which to use:** reach for a Pro token whenever the user wants a URL that survives restarts, a custom domain, or a long-running / 24-7 tunnel. Default to the free anonymous tunnel for throwaway demos and quick local testing. Get a token from https://dashboard.pinggy.io.

### Other ways to run it

- **Docker:** `docker run --net=host -it pinggy/pinggy -p 443 -R0:localhost:8000 free.pinggy.io` (Linux; drop `--net=host` on Mac/Windows).
- **Desktop app (GUI):** download from pinggy.io for Windows, Mac (Intel + Apple Silicon), and Linux. Visual tunnel management, system tray, auto-start on boot.

---

## Tunnel Types

The same SSH or CLI command works for other protocols by changing the remote host prefix (`tcp@`, `tls@`, `tlstcp@`) or the CLI subcommand.

### HTTP(S) - Default
```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T
# Force HTTPS redirect:
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- x:https
# Connect to a local HTTPS server:
ssh -p 443 -R0:localhost:8443 free.pinggy.io -T -- x:localServerTls
# Local HTTPS with custom SNI:
ssh -p 443 -R0:localhost:8443 free.pinggy.io -T -- x:localServerTls:example.com
```
Auto-generates an HTTPS cert (Let's Encrypt). Web debugger available at `http://localhost:4300`.

### TCP
```bash
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T
# Output: tcp://free.pinggy.io:XXXXX - use this port to connect
```

### UDP (CLI or Docker only, not plain SSH)
```bash
pinggy -p 443 -R0:localhost:19132 udp@free.pinggy.io --notui    # Minecraft Bedrock
pinggy -p 443 -R0:localhost:25565 udp@free.pinggy.io --notui    # Other game servers
```

### TLS (End-to-End Encrypted)
```bash
ssh -p 443 -R0:localhost:443 tls@free.pinggy.io -T
```
Pinggy cannot inspect traffic. Unique domain on TCP port 443 - no port number in URL.

### TLSTCP (TCP + TLS Wrapper)
```bash
ssh -p 443 -R0:localhost:8000 tlstcp@free.pinggy.io -T
```
Dual access: raw TCP on assigned port + TLS on port 443. Pinggy terminates TLS, forwards plaintext locally.

---

## Authentication & Access Control

All flags go **after `--`** in SSH, or as `--flag` in the CLI.

### Basic Auth (username:password)
```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:user:pass
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- b:user1:pass1 b:user2:pass2
```

### Bearer Token / Key Auth
```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mysecretkey
# Client sends: Authorization: Bearer mysecretkey
# CORS preflight bypass:
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- k:mykey x:passpreflight
```

### IP Whitelist (CIDR)
```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- w:192.168.1.0/24
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T -- w:192.168.1.0/24,10.0.0.0/8
```
Works for all tunnel types (HTTP, TCP, UDP, TLS).

---

## Key Flags Quick Reference

| Flag | Purpose |
|------|---------|
| `b:user:pass` | Basic auth |
| `k:key` | Bearer key auth |
| `w:CIDR` | IP whitelist |
| `a:Name:Value` | Add request header |
| `r:Name` | Remove request header |
| `u:Name:Value` | Update/replace header |
| `x:https` | Force HTTPS redirect |
| `x:xff` | Add X-Forwarded-For header |
| `x:xff:CustomName` | X-Forwarded-For with custom name |
| `x:fullurl` | Add X-Pinggy-Url header (original URL) |
| `x:localServerTls` | Local server uses TLS |
| `x:localServerTls:sni` | Local TLS with custom SNI |
| `x:noreverseproxy` | Disable reverse proxy headers |
| `x:passpreflight` | Allow CORS preflight bypass |

---

## Regions

| Region | Host |
|--------|------|
| Default | `free.pinggy.io` |
| USA | `us.free.pinggy.io` |
| Europe | `eu.free.pinggy.io` |
| Asia | `ap.free.pinggy.io` |
| Brazil | `br.free.pinggy.io` |
| Australia | `au.free.pinggy.io` |

---

## Common Use Cases

**Webhook testing (Stripe, Slack, Telegram, Razorpay):**
```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io -T
# Paste the HTTPS URL into the webhook dashboard
```

**SSH into Raspberry Pi / IoT (no public IP needed):**
```bash
# On device: share port 22 via TCP tunnel
ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T
# From anywhere: ssh user@free.pinggy.io -p <assigned-port>
```

**Database access (PostgreSQL, MySQL, MongoDB):**
```bash
ssh -p 443 -R0:localhost:5432 tcp@free.pinggy.io -T
# Remote: psql -h free.pinggy.io -p <port> -U user dbname
```

**Long-running 24/7 service (CLI auto-reconnects):**
```bash
pinggy -p 443 -R0:localhost:8000 --token <TOKEN> --notui
# Persistent subdomain = the one assigned to this token in the dashboard
```

**Multiple services from one machine (Pro):**
```bash
ssh -p 443 \
  -R0:localhost:8000 \
  -R app.example.com:1:localhost:3000 \
  -R api.example.com:1:localhost:4000 \
  <token>@pro.pinggy.io -T
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Tunnel drops frequently | Add `-o ServerAliveInterval=60`, or use the CLI (auto-reconnect built-in) |
| Behind corporate firewall | Use `openssl s_client` or `ncat --ssl` as ProxyCommand - see `references/advanced.md` |
| CORS errors from local API | Add `x:passpreflight` flag |
| Wrong Host header to app | Add `u:Host:localhost` flag |
| App needs client IP | Add `x:xff` flag |
| Port 443 blocked outbound | Try `ssh -p 80` |
| Custom domain not working | Verify DNS propagation; check TXT record for relay mode |
| Free tunnel expired (60 min) | Use a Pro token or restart the tunnel |

---

## Additional Resources

### Scripts

Ready-to-run helper scripts in `scripts/`:
- **`scripts/http-tunnel.sh`** - Start an HTTP tunnel: `./http-tunnel.sh <PORT> [TOKEN]`
- **`scripts/tcp-tunnel.sh`** - Start a TCP tunnel: `./tcp-tunnel.sh <PORT> [TOKEN]`
- **`scripts/persistent-tunnel.sh`** - Auto-reconnecting 24/7 tunnel: `./persistent-tunnel.sh <http|tcp|udp> <PORT> <TOKEN>`
- **`scripts/install-pinggy-cli.sh`** - Install Pinggy CLI via npm or Homebrew
- **`scripts/get-tunnel-url.sh`** - Fetch active tunnel URLs from the debugger API

Run scripts directly or instruct the agent to execute them. All scripts require `bash`.

### Reference Files (bundled with this skill)

- **`references/domains.md`** - Custom domains, persistent subdomains, wildcard domains, multi-port forwarding, relay setup
- **`references/advanced.md`** - Live header manipulation, web debugger API, QR codes, proxy/firewall traversal, JSON config, logging
- **`references/cli-sdks.md`** - Full CLI flag reference, Python/Node.js SDKs, Docker, JSON config files
- **`references/management.md`** - Remote device management, REST API, Teams, pricing summary, all use cases, Pinggy vs alternatives

### Documentation Pages (fetch for full detail)

Each link returns clean Markdown - fetch any of them for a deeper explanation.

- CLI: https://pinggy.io/docs/cli/index.md
- HTTP tunnels: https://pinggy.io/docs/http_tunnels/index.md
- TCP tunnels: https://pinggy.io/docs/tcp_tunnels/index.md
- UDP tunnels: https://pinggy.io/docs/udp_tunnels/index.md
- TLS tunnels: https://pinggy.io/docs/tls_tunnels/index.md
- TLS over TCP: https://pinggy.io/docs/tlstcp_tunnels/index.md
- Usage examples: https://pinggy.io/docs/usages/index.md
- Custom domains: https://pinggy.io/docs/custom_domain/index.md
- Persistent subdomain: https://pinggy.io/docs/persistent_subdomain/index.md
- Node.js SDK: https://pinggy-io.github.io/sdk-nodejs/
- Python SDK (PyPI): https://pypi.org/project/pinggy/
- Web debugger / HTTP API: https://pinggy.io/docs/api/web_debugger_api/index.md
- Pro REST API: https://pinggy.io/docs/api/api/index.md
- All docs (llms.txt): https://pinggy.io/llms.txt
