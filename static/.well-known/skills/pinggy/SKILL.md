---
name: pinggy
description: This skill should be used when the user asks to "expose localhost", "share local server", "create a tunnel", "test webhooks locally", "use Pinggy", "access remote device", "forward a port", "set up ngrok alternative", "make localhost public", "persistent subdomain", "custom domain tunnel", "TCP tunnel", "UDP tunnel", "TLS tunnel", or mentions Pinggy. Covers all Pinggy tunnel types, access methods, authentication, domains, SDKs, and advanced features.
version: 1.0.0
---

# Pinggy — Complete Tunneling Skill

Pinggy is a tunneling service that exposes local services to the internet via SSH reverse tunneling. No download required to get started — only SSH needed. Supports HTTP(S), TCP, UDP, TLS, and TLSTCP tunnels with automatic HTTPS certificates.

---

## Quick Start

```bash
# Expose port 8000 (HTTP) — no install required
ssh -p 443 -R0:localhost:8000 a.pinggy.io

# With Pro token (persistent URL, custom domains)
ssh -p 443 -R0:localhost:8000 <token>@a.pinggy.io
```

Output provides two URLs: `http://xxxx.a.free.pinggy.link` and `https://xxxx.a.free.pinggy.link`.

---

## Access Methods

### 1. SSH (No Install)
```bash
ssh -p 443 -R0:localhost:<PORT> a.pinggy.io
# With keepalive (prevents disconnects):
ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:<PORT> a.pinggy.io
```

### 2. Pinggy CLI
```bash
npm install -g pinggy
pinggy http 8000      # HTTP tunnel
pinggy tcp 22         # TCP tunnel
pinggy udp 19132      # UDP tunnel
```

### 3. Python SDK
```python
import pinggy                                     # pip install pinggy
tunnel = pinggy.start_tunnel(forwardto="localhost:8000")
print(tunnel.urls)
tunnel.stop()
```

### 4. Node.js SDK
```javascript
const { pinggy } = require('@pinggy/pinggy');    // npm i @pinggy/pinggy
const tunnel = await pinggy.createTunnel({ forwarding: "localhost:3000" });
await tunnel.start();
const urls = await tunnel.urls();
```

### 5. Docker
```bash
docker run --net=host -it pinggy/pinggy http 8000          # Linux
docker run -it pinggy/pinggy http 8000                     # Mac/Windows
```

### 6. Desktop App (GUI)
Download from pinggy.io — Windows (MS Store / direct), Mac (Intel + Apple Silicon), Linux (Ubuntu deb). Includes visual tunnel management, system tray, and auto-start on boot.

---

## Tunnel Types

### HTTP(S) — Default
```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io
# Force HTTPS redirect:
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- x:https
# Connect to local HTTPS server:
ssh -p 443 -R0:localhost:8443 a.pinggy.io -- x:localServerTls
# Local HTTPS with custom SNI:
ssh -p 443 -R0:localhost:8443 a.pinggy.io -- x:localServerTls:example.com
```
Auto-generates HTTPS cert (Let's Encrypt). Web debugger available at `http://localhost:4300`.

### TCP
```bash
ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
# Output: tcp://a.pinggy.io:XXXXX — use this port to connect
```

### UDP (CLI only)
```bash
pinggy udp 19132      # Minecraft Bedrock
pinggy udp 25565      # Other game servers
```

### TLS (End-to-End Encrypted)
```bash
ssh -p 443 -R0:localhost:443 tls@a.pinggy.io
```
Pinggy cannot inspect traffic. Unique domain on TCP port 443 — no port number in URL.

### TLSTCP (TCP + TLS Wrapper)
```bash
ssh -p 443 -R0:localhost:8000 tlstcp@a.pinggy.io
```
Dual access: raw TCP on assigned port + TLS on port 443. Pinggy terminates TLS, forwards plaintext locally.

---

## Authentication & Access Control

All flags go **after `--`** in SSH or as `--flag` in CLI.

### Basic Auth (username:password)
```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- b:user:pass
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- b:user1:pass1 b:user2:pass2
```

### Bearer Token / Key Auth
```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- k:mysecretkey
# Client sends: Authorization: Bearer mysecretkey
# CORS preflight bypass:
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- k:mykey x:passpreflight
```

### IP Whitelist (CIDR)
```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- w:192.168.1.0/24
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- w:192.168.1.0/24,10.0.0.0/8
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
| Default | `a.pinggy.io` |
| USA | `us.free.pinggy.io` |
| Europe | `eu.free.pinggy.io` |
| Asia | `ap.free.pinggy.io` |
| Brazil | `br.free.pinggy.io` |
| Australia | `au.free.pinggy.io` |

---

## Common Use Cases

**Webhook testing (Stripe, Slack, Telegram, Razorpay):**
```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io
# Paste the HTTPS URL into the webhook dashboard
```

**SSH into Raspberry Pi / IoT (no public IP needed):**
```bash
# On device: expose port 22 via TCP tunnel
ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
# From anywhere: ssh user@a.pinggy.io -p <assigned-port>
```

**Share dev server with teammates:**
```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io
# Press 'u' in terminal for QR code
```

**Long-running 24/7 service:**
```bash
pinggy http --token <TOKEN> --subdomain myapp 8000   # CLI auto-reconnects

# SSH with loop:
while true; do
  ssh -p 443 -o ServerAliveInterval=60 -R0:localhost:8000 <token>@a.pinggy.io
  sleep 5
done
```

**Database access (PostgreSQL, MySQL, MongoDB):**
```bash
ssh -p 443 -R0:localhost:5432 tcp@a.pinggy.io
# Remote: psql -h a.pinggy.io -p <port> -U user dbname
```

**Multiple services from one machine:**
```bash
ssh -p 443 \
  -R0:localhost:8000 \
  -R app.example.com:1:localhost:3000 \
  -R api.example.com:1:localhost:4000 \
  <token>@a.pinggy.io
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Tunnel drops frequently | Add `-o ServerAliveInterval=60` or use CLI (auto-reconnect built-in) |
| Behind corporate firewall | Use `openssl s_client` or `ncat --ssl` as ProxyCommand — see `references/advanced.md` |
| CORS errors from local API | Add `x:passpreflight` flag |
| Wrong Host header to app | Add `u:Host:localhost` flag |
| App needs client IP | Add `x:xff` flag |
| Port 443 blocked outbound | Try `ssh -p 80` |
| Custom domain not working | Verify DNS propagation; check TXT record for relay mode |
| Free tunnel expired (60 min) | Use Pro token or restart tunnel |

---

## Additional Resources

### Scripts

Ready-to-run helper scripts in `scripts/`:
- **`scripts/http-tunnel.sh`** — Start an HTTP tunnel: `./http-tunnel.sh <PORT> [TOKEN] [SUBDOMAIN]`
- **`scripts/tcp-tunnel.sh`** — Start a TCP tunnel: `./tcp-tunnel.sh <PORT> [TOKEN]`
- **`scripts/persistent-tunnel.sh`** — Auto-reconnecting 24/7 tunnel: `./persistent-tunnel.sh <http|tcp|udp> <PORT> <TOKEN>`
- **`scripts/install-pinggy-cli.sh`** — Install Pinggy CLI via npm or Homebrew
- **`scripts/get-tunnel-url.sh`** — Fetch active tunnel URLs from the debugger API

Run scripts directly or instruct the agent to execute them. All scripts require `bash`.

### Reference Files

For detailed documentation, consult:
- **`references/domains.md`** — Custom domains, persistent subdomains, wildcard domains, multi-port forwarding, relay setup
- **`references/advanced.md`** — Live header manipulation, web debugger API, QR codes, proxy/firewall traversal, JSON config, logging
- **`references/cli-sdks.md`** — Full CLI flag reference, Python/Node.js SDKs, Docker, JSON config files
- **`references/management.md`** — Remote device management, REST API, Teams, pricing summary, all use cases, Pinggy vs alternatives
