# Pinggy — Domains & URL Management

## Free Plan (Random Subdomain)

Every tunnel start generates a new random URL:
`https://rnskg-21-24-129-38.a.free.pinggy.link`

Changes on every restart. Free plan tunnels expire after 60 minutes.

---

## Persistent Subdomain (Pro)

```bash
ssh -p 443 -R0:localhost:8000 <token>@a.pinggy.io
# Same URL every restart: https://myapp.a.pinggy.link
```

Configure the subdomain name at https://dashboard.pinggy.io.

---

## Custom Domain (Pro)

### CNAME Method (for subdomains like `app.example.com`)

Add a CNAME record:
```
CNAME  app.example.com  →  <token>.a.pinggy.link
```

Then tunnel normally — Pinggy issues HTTPS cert automatically.

### Relay Method (for root/apex domains like `example.com`)

Add three DNS records:
```
TXT   _pinggy.example.com  →  <relay-value>
A     example.com           →  <relay-ip>
AAAA  example.com           →  <relay-ipv6>
```

Get relay values from the Pinggy dashboard. HTTPS cert issued automatically after DNS validation.

---

## Wildcard Domains (Pro)

Format: `*.example.com` or `*.subdomain.example.com`

Route different subdomains to different local ports. Configure wildcard routing rules in the dashboard at https://dashboard.pinggy.io.

```bash
# Start tunnel with wildcard domain token
ssh -p 443 -R0:localhost:8000 <wildcard-token>@a.pinggy.io
# api.example.com → port 3000, app.example.com → port 8000 (configured in dashboard)
```

---

## Multiple Port Forwarding (Multi-Service in One Tunnel)

Route different domains/subdomains to different local services in a single SSH session.

```bash
# Default → port 8000, api.example.com → port 3000, app.example.com → port 4000
ssh -p 443 \
  -R0:localhost:8000 \
  -R api.example.com:1:localhost:3000 \
  -R app.example.com:1:localhost:4000 \
  <token>@a.pinggy.io
```

**Format:** `-R <domain>:1:<forwardHost>:<forwardPort>`

Mix HTTP, TCP, TLS, and TLSTCP in one session. Use with wildcard tokens to route any subdomain.

---

## QR Code for Sharing URLs

```bash
# Auto-display QR code at tunnel start (SSH):
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io

# Auto-display ASCII QR:
ssh -p 443 -R0:localhost:8000 aqr@a.pinggy.io

# After tunnel starts — press in terminal:
# 'c'  → ASCII QR code
# 'u'  → Unicode QR code
# Arrow keys → navigate between multiple tunnel URLs
```
