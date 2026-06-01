# Pinggy — CLI & SDK Reference

## Pinggy CLI — Full Command Reference

### Install
```bash
npm install -g pinggy
```

### Commands
```bash
pinggy http   [OPTIONS] <PORT>    # HTTP(S) tunnel
pinggy tcp    [OPTIONS] <PORT>    # TCP tunnel
pinggy udp    [OPTIONS] <PORT>    # UDP tunnel
pinggy tls    [OPTIONS] <PORT>    # TLS end-to-end encrypted tunnel
pinggy tlstcp [OPTIONS] <PORT>    # TLSTCP (TCP + TLS wrapper)
```

### All Options

| Flag | Description |
|------|-------------|
| `--token <TOKEN>` | Pro account token |
| `--subdomain <NAME>` | Persistent subdomain name |
| `--domain <DOMAIN>` | Custom domain |
| `--region <REGION>` | `us` / `eu` / `ap` / `br` / `au` |
| `--basic-auth <user:pass>` | Enable Basic authentication |
| `--key-auth <key>` | Enable Bearer token authentication |
| `--ip-whitelist <CIDR>` | Restrict access by IP (CIDR notation) |
| `--debugger-port <PORT>` | Web debugger port (default: 4300) |
| `--add-header <Name:Value>` | Add request header |
| `--remove-header <Name>` | Remove request header |
| `--update-header <Name:Value>` | Update/replace request header |
| `--xff` | Add X-Forwarded-For header |
| `--https-redirect` | Force HTTP → HTTPS redirect |
| `--no-reverse-proxy` | Disable reverse proxy headers |
| `--pass-preflight` | Allow CORS preflight bypass |
| `--local-tls` | Local server uses TLS/HTTPS |
| `--local-tls-sni <SNI>` | Custom SNI for local TLS |
| `--serve <PATH>` | Serve directory as file server |
| `--config <FILE>` | Load JSON configuration file |
| `--log-file <PATH>` | Write logs to file |
| `--log-level <LEVEL>` | `ERROR` / `INFO` / `DEBUG` |
| `--v` / `--vv` / `--vvv` | Verbosity levels |

### Service Management
```bash
pinggy install-service     # Auto-start on system boot
pinggy remove-service      # Remove system service
pinggy remote-agent --token <TOKEN>   # Start remote management agent
```

---

## Python SDK

```bash
pip install pinggy
```

```python
import pinggy

# Basic HTTP tunnel
tunnel = pinggy.start_tunnel(forwardto="localhost:8000")
print(tunnel.urls)    # ['https://xxxx.a.free.pinggy.link']
tunnel.stop()

# With options
tunnel = pinggy.start_tunnel(
    forwardto="localhost:8000",
    token="your-pro-token",
    subdomain="myapp",
    basic_auth=["user:pass"],
    https_redirect=True,
    region="us"
)
```

---

## Node.js SDK

```bash
npm i @pinggy/pinggy
```

```javascript
const { pinggy } = require('@pinggy/pinggy');

// Basic HTTP tunnel
const tunnel = await pinggy.createTunnel({ forwarding: "localhost:3000" });
await tunnel.start();
const urls = await tunnel.urls();
console.log(urls);    // ['https://xxxx.a.free.pinggy.link']
await tunnel.stop();

// With options
const tunnel = await pinggy.createTunnel({
    forwarding: "localhost:3000",
    token: "your-pro-token",
    subdomain: "myapp",
    region: "us",
    httpsRedirect: true
});
```

---

## Docker

```bash
# Pull image
docker pull pinggy/pinggy

# Linux (--net=host routes localhost to host machine)
docker run --net=host -it pinggy/pinggy http 8000

# Mac / Windows (auto-routes localhost → host.docker.internal)
docker run -it pinggy/pinggy http 8000

# With token
docker run -it pinggy/pinggy http --token <TOKEN> --subdomain myapp 8000

# TCP tunnel
docker run --net=host -it pinggy/pinggy tcp 22
```

---

## JSON Configuration File

Create `tunnel.json`:
```json
{
  "token": "your-pro-token",
  "type": "http",
  "port": 8000,
  "subdomain": "myapp",
  "domain": "app.example.com",
  "region": "us",
  "basicAuth": ["user:pass"],
  "keyAuth": ["secretkey1", "secretkey2"],
  "ipWhitelist": ["192.168.1.0/24", "10.0.0.0/8"],
  "httpsRedirect": true,
  "addHeaders": { "X-Custom": "value", "X-Env": "prod" },
  "removeHeaders": ["X-Debug"],
  "xff": true,
  "passPreFlight": true
}
```

```bash
pinggy --config tunnel.json
```

Multiple tunnel configs can be defined for different environments and loaded by name.
