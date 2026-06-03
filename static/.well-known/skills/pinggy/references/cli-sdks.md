# Pinggy - CLI & SDK Reference

## Pinggy CLI - Full Command Reference

### Install
```bash
npm install -g pinggy
```

### Commands

The CLI takes the same flags as the SSH command. Pick the protocol with `--type` (default `http`) and the local port with `-l` / `--localport`; or use the raw `-R0:localhost:<PORT>` forward with a `tcp@` / `udp@` / `tls@` / `tlstcp@` host prefix.

```bash
pinggy -p 443 -R0:localhost:8000                  # HTTP(S), the default type
pinggy --type tcp    -l 8000                       # TCP
pinggy --type udp    -l 8000                       # UDP
pinggy --type tls    -l 8000                       # TLS, end-to-end encrypted
pinggy --type tlstcp -l 8000                       # TLSTCP (TCP + TLS wrapper)
```

Add `--notui` for plain stdout logs (the right choice for agents and scripts) and `--token <TOKEN>` for a Pro tunnel.

### Options

| Flag | Description |
|------|-------------|
| `--type <http\|tcp\|udp\|tls\|tlstcp>` | Tunnel type (default `http`) |
| `-l`, `--localport <[proto://][host:]port>` | Local endpoint to forward |
| `-p`, `--server-port <PORT>` | Pinggy server port (default `443`) |
| `--token <TOKEN>` | Pro account token |
| `-d`, `--debugger <PORT>` | Web debugger port (default `4300`) |
| `-R0:localhost:<PORT>` | SSH-style local forward |
| `-L<PORT>:localhost:4300` | SSH-style web debugger forward |
| `--force` | Close any existing tunnel and start a new one |
| `--serve <PATH>` | Serve a directory as a simple file server |
| `--saveconf <FILE>` / `--conf <FILE>` | Save / load a JSON config file |
| `--logfile <PATH>` | Write logs to a file |
| `--loglevel <ERROR\|INFO\|DEBUG>` | Log level |
| `--v` / `--vv` / `--vvv` | Verbosity (stdout logs) |
| `--autoreconnect`, `-a` | Auto-reconnect on failure (on by default) |
| `--remote-management <TOKEN>` | Enable remote tunnel management |
| `--notui` | Plain stdout logs, no TUI |

Extended options are positional values placed after the host, exactly as in the SSH command:

| Option | Purpose |
|--------|---------|
| `x:https` | Force HTTPS redirect |
| `x:xff` | Add X-Forwarded-For |
| `x:fullurl` | Add the original request URL header |
| `x:passpreflight` | Allow CORS preflight to pass |
| `x:noreverseproxy` | Disable reverse-proxy headers |
| `x:localServerTls[:sni]` | Local server uses TLS |
| `w:<cidr>[,<cidr>]` | IP whitelist |
| `k:<key>` | Bearer key auth (repeatable) |
| `b:<user:pass>` | Basic auth (repeatable) |
| `a:<Name:Value>` / `u:<Name:Value>` / `r:<Name>` | Add / update / remove a header |

### Config store and auto-start
```bash
pinggy config save my-tunnel -l 3000 token@pro.pinggy.io   # save a named config
pinggy config save my-tunnel --auto -l 3000                # save and mark for auto-start
pinggy config list                                         # list saved configs
pinggy config update my-tunnel -l 4000                     # update a saved config
pinggy start my-tunnel                                     # start a saved config
pinggy start --all                                         # start all auto-start tunnels
pinggy --remote-management <API_KEY>                       # control tunnels remotely
```

To launch a tunnel on system boot, create a systemd service that runs the `pinggy` command - see https://pinggy.io/docs/run_tunnel_on_startup/.

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

# Linux (--net=host routes localhost to the host machine)
docker run --net=host -it pinggy/pinggy -p 443 -R0:localhost:8000 free.pinggy.io

# Mac / Windows (localhost is auto-mapped to host.docker.internal)
docker run -it pinggy/pinggy -p 443 -R0:localhost:8000 free.pinggy.io

# With a Pro token (persistent subdomain is the one assigned to the token in the dashboard)
docker run -it pinggy/pinggy -p 443 -R0:localhost:8000 <token>@pro.pinggy.io

# TCP tunnel
docker run --net=host -it pinggy/pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io
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
pinggy --conf tunnel.json
```

Multiple tunnel configs can be defined for different environments and loaded by name.
