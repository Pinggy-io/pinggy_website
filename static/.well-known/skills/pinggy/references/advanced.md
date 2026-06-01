# Pinggy — Advanced Features

## Live Header Manipulation

Add, remove, or update HTTP request headers on the fly. All flags go after `--` in SSH.

```bash
# Add a header
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- a:X-Custom-Header:myvalue

# Remove a header
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- r:X-Unwanted-Header

# Update/replace a header
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- u:Host:myapp.internal

# Add X-Forwarded-For (original client IP)
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- x:xff

# X-Forwarded-For with custom header name
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- x:xff:X-Real-IP

# Add X-Pinggy-Url header (full original request URL)
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- x:fullurl

# Disable reverse proxy headers (X-Forwarded-For, X-Forwarded-Proto, etc.)
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- x:noreverseproxy

# Combine multiple operations
ssh -p 443 -R0:localhost:8000 a.pinggy.io -- a:X-Token:abc r:X-Debug u:Host:api.local
```

**Notes:**
- `Host` header cannot be removed, only updated
- Values with spaces or special characters are supported
- Flags combine freely with auth flags (`b:`, `k:`, `w:`)

---

## Web Debugger (Request Inspection)

Live HTTP request/response viewer with replay and modification capability. Accessible at `http://localhost:4300` when an HTTP tunnel is active.

```bash
# Default port 4300 — just open http://localhost:4300 in browser
# Custom port:
pinggy http --debugger-port 5000 8000
```

**Debugger API endpoints:**
```bash
GET http://localhost:4300/urls          # Active tunnel URLs
GET http://localhost:4300/ipwhitelist   # Current IP whitelist
GET http://localhost:4300/settings      # Tunnel configuration
```

**Terminal (TUI) Controls:**
- Arrow keys — navigate between requests
- `c` — show ASCII QR code for current URL
- `u` — show Unicode QR code for current URL

**Zero Trust mode:** Use TLS tunnels with the debugger for end-to-end encryption — Pinggy cannot read the traffic.

---

## Proxy & Firewall Traversal

Use when port 443 is blocked outbound or the machine is behind a corporate HTTP proxy.

```bash
# Through HTTP CONNECT proxy (Linux/Mac):
ssh -p 443 \
  -o ProxyCommand="nc -X connect -x proxy.host:8080 %h %p" \
  -R0:localhost:8000 a.pinggy.io

# SSH tunneled over SSL using openssl:
ssh \
  -o ProxyCommand="openssl s_client -connect a.pinggy.io:443 -quiet" \
  -R0:localhost:8000 a.pinggy.io

# SSH tunneled over SSL using ncat:
ssh \
  -o ProxyCommand="ncat --ssl a.pinggy.io 443" \
  -R0:localhost:8000 a.pinggy.io

# Alternative port (if 443 is blocked):
ssh -p 80 -R0:localhost:8000 a.pinggy.io
```

---

## File Sharing (Pinggy CLI)

Instantly share a local directory as a public HTTP file server.

```bash
pinggy http --serve /path/to/files 8000
# Shorthand:
./pinggy --serve /path/to/directory
```

No cloud upload needed. Files accessible at the generated HTTPS URL.

---

## Auto-Start on Boot (Pinggy CLI)

```bash
pinggy install-service    # Register as system service
pinggy remove-service     # Remove system service
```

Works on Windows, Mac, and Linux. Service restarts automatically on reboot.

---

## Remote Management Agent

Start the Pinggy remote agent on a device to manage it from the dashboard.

```bash
pinggy remote-agent --token <TOKEN>
```

Manage from: https://dashboard.pinggy.io/activedevices
- Create, edit, and stop tunnels remotely
- Monitor all active tunnels
- WebSocket-based secure connection
- Available on Pro plan

---

## JSON Configuration File

Save tunnel configuration as a reusable JSON file.

```json
{
  "token": "your-pro-token",
  "type": "http",
  "port": 8000,
  "subdomain": "myapp",
  "basicAuth": ["user:pass"],
  "keyAuth": ["secretkey"],
  "ipWhitelist": ["192.168.1.0/24"],
  "httpsRedirect": true,
  "addHeaders": { "X-Custom": "value" },
  "region": "us"
}
```

```bash
pinggy --config tunnel.json
```

---

## Logging (Pinggy CLI)

```bash
--log-file /path/to/file.log    # Write logs to file
--log-level ERROR|INFO|DEBUG    # Set log verbosity
--v                             # Verbose
--vv                            # More verbose
--vvv                           # Maximum verbosity
```
