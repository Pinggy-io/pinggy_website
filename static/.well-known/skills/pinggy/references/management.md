# Pinggy - Management, API, Teams & Pricing

## REST API (Pro / Enterprise)

Create API keys at: https://dashboard.pinggy.io

```bash
# List active tunnels
curl -H "Authorization: Bearer <API_KEY>" \
  https://pinggy.io/backend/api/v1/session/active

# Session history (up to 60 days)
curl -H "Authorization: Bearer <API_KEY>" \
  "https://pinggy.io/backend/api/v1/session/history/2024-01-01/2024-01-31?page=0&size=10"
```

API supports pagination (`page`, `size` params) and date range queries.

---

## Remote Device Management (Pro)

Manage tunnels on remote machines without direct SSH access.

```bash
# Run on the remote device:
pinggy remote-agent --token <TOKEN>
```

Dashboard: https://dashboard.pinggy.io/activedevices

Capabilities from the dashboard:
- Create, edit, and stop tunnels on the remote device
- Monitor which tunnels are active
- No direct access to the device needed
- WebSocket-based, secure connection
- Works through NAT and firewalls

---

## Teams (Pro)

Share tunnel access without sharing Pro tokens or passwords.

- Assign **editable** or **read-only** token access per team member
- Add and remove members instantly from dashboard
- Per-seat pricing ($3/month/seat)
- Volume discounts at 20+ seats
- Manage at: https://dashboard.pinggy.io/teams

---

## Pricing Summary

| Feature | Free | Pro ($3/mo/seat) | Enterprise |
|---------|------|-----------------|------------|
| HTTP / TCP / UDP / TLS / TLSTCP tunnels | ✓ | ✓ | ✓ |
| Automatic HTTPS certificate | ✓ | ✓ | ✓ |
| Web debugger + live header manipulation | ✓ | ✓ | ✓ |
| Unlimited data transfer | ✓ | ✓ | ✓ |
| 60-minute tunnel timeout | ✓ (limit) | - | - |
| Persistent tunnels (no timeout) | - | ✓ per seat | ✓ Unlimited |
| Persistent custom subdomain | - | ✓ per seat | ✓ Unlimited |
| Custom domains | - | ✓ per seat | ✓ Unlimited |
| Persistent TCP/UDP ports | - | ✓ per seat | ✓ Unlimited |
| Wildcard domains | - | ✓ | ✓ |
| Teams / token sharing | - | ✓ per seat | ✓ Unlimited |
| Remote device management | - | ✓ | ✓ |
| REST API access | - | ✓ | ✓ Full |
| Dedicated / on-premise server | - | - | ✓ |
| Priority support (Discord + calls) | - | Email/Discord | ✓ |

Annual billing: $2.50/seat/month. Enterprise: contact sales.

---

## Use Cases - Extended Reference

### Ollama / Local LLM
```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io
```

### Jupyter Notebook
```bash
ssh -p 443 -R0:localhost:8888 free.pinggy.io
```

### Minecraft - Java Edition (TCP)
```bash
ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io
```

### Minecraft - Bedrock Edition (UDP)
```bash
pinggy udp 19132
```

### Home Assistant
```bash
ssh -p 443 -R0:localhost:8123 free.pinggy.io
```

### PocketBase / Strapi / Ghost
```bash
ssh -p 443 -R0:localhost:8090 free.pinggy.io    # PocketBase
ssh -p 443 -R0:localhost:1337 free.pinggy.io    # Strapi
ssh -p 443 -R0:localhost:2368 free.pinggy.io    # Ghost
```

### Kubernetes Service
```bash
kubectl port-forward svc/my-service 8080:80
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

### Wireguard VPN
```bash
pinggy udp 51820
```

### Remote Desktop (VNC)
```bash
ssh -p 443 -R0:localhost:5900 tcp@free.pinggy.io
```

### PostgreSQL / MySQL / MongoDB
```bash
ssh -p 443 -R0:localhost:5432 tcp@free.pinggy.io   # PostgreSQL
ssh -p 443 -R0:localhost:3306 tcp@free.pinggy.io   # MySQL
ssh -p 443 -R0:localhost:27017 tcp@free.pinggy.io  # MongoDB
```

### Netdata Monitoring
```bash
ssh -p 443 -R0:localhost:19999 free.pinggy.io
```

### Portainer
```bash
ssh -p 443 -R0:localhost:9000 free.pinggy.io
```

### Traefik Dashboard
```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

---

## Pinggy vs. Alternatives

| Feature | Pinggy | ngrok | Cloudflare Tunnel | localtunnel |
|---------|--------|-------|-------------------|-------------|
| UDP tunnels | ✓ Free | Paid | ✗ | ✗ |
| TLS (zero-knowledge) | ✓ | ✗ | ✗ | ✗ |
| No download (SSH) | ✓ | ✗ | ✗ | ✗ |
| Pro price | $3/mo | $10/mo | Free* | Free |
| Unlimited bandwidth | ✓ | Limited free | ✓ | ✓ |
| Wildcard domains | ✓ Pro | ✓ Paid | ✓ | ✗ |
| Teams | ✓ Pro | ✓ Paid | Enterprise | ✗ |
| Remote device mgmt | ✓ Pro | ✗ | ✗ | ✗ |
| Desktop GUI | ✓ | ✓ | ✓ | ✗ |

*Cloudflare Tunnel requires cloudflared daemon + Cloudflare account.
