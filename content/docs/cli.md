---
title: "Pinggy CLI"
description: "Robust HTTP, TCP, UDP, or TLS tunnels to localhost for sharing your apps, websites, and games. Manage tunnels from the command line with a background daemon, lifecycle commands, and saved configs."
date: 2026-04-29T00:00:00+05:30
lastmod: 2026-06-08T00:00:00+05:30
draft: false
---

# Pinggy CLI

Create secure, shareable tunnels to your localhost and manage them from the command line. Pinggy CLI supports HTTP(S), TCP, UDP, TLS, and TLSTCP tunnels, and it can also be used for  [Remote Devices](/docs/remote_devices/).

Every tunnel runs inside a background daemon, so you can start tunnels detached, list and stop them later, follow their logs, and even run them at boot as a system service.

<div>
  <img
    src="/assets/cli_tui.png"
    style="box-shadow: none;"
    class="mt-2 py-2 img-fluid featureimage"
    alt="Pinggy CLI TUI"
  />
</div>

## Requirements

- Node.js 22 or newer is recommended for the npm install. The CLI uses modern ESM and WebSocket features.
- A network connection that allows outgoing WebSocket and HTTPS traffic.

The standalone binaries from the {{< link href="/cli/" >}}download page{{</ link >}} bundle their own runtime, so Node.js is only needed when you install via npm.

## Installation

Pinggy CLI is available for Windows, Mac, and Linux. Global install is recommended for the system-wide `pinggy` command.

**Install using npm:**

```bash
npm install -g pinggy
```

**Or download Pinggy CLI from {{< link href="/cli/" >}}here{{</ link >}}.**


After install, verify the command:

```bash
pinggy --help
```

## Getting Started

Before starting a tunnel, navigate to the directory where the Pinggy CLI is installed. You can start a tunnel by running:

```bash
./pinggy <options>
```

Pinggy CLI supports the same options as our SSH command. You can customize the command on our {{< link href="/" >}}home page{{</ link >}}.

**Example:**

```bash
./pinggy -p 443 -R0:localhost:3000 -L4300:localhost:4300
```

This starts a tunnel that forwards connections to local port `3000`. It also starts the web debugger on port `4300`.

Pinggy CLI also supports more user-friendly options to set up simple tunnels.

**Example:**

```bash
./pinggy -l https://localhost:443
```

This starts a tunnel that forwards connections to a local HTTPS server running on `localhost:443`.

### HTTP(S) Tunnel

To share a local HTTP server running on port `8080`, use `-l http://localhost:8080`. You may add a token using `--token MYTOK`.

```bash
./pinggy -l http://localhost:8080
./pinggy --token MYTOK -l http://localhost:8080
```

To share a local HTTPS server running on port `8443`, use `-l https://localhost:8443`.

```bash
./pinggy -l https://localhost:8443
```

### TCP Tunnel

To start a TCP tunnel, use `--type tcp` and specify a port using `-l`.

```bash
./pinggy --type tcp -l 8000
```

### UDP Tunnel

To start a UDP tunnel, use `--type udp` and specify a port using `-l`.

```bash
./pinggy --type udp -l 8000
```

### TLS Tunnel

To start a TLS tunnel, use `--type tls` and specify a port using `-l`.

```bash
./pinggy --type tls -l 8000
```

## Config management

The ad-hoc commands above create one-off tunnels. To reuse a tunnel, save it as a named config. The CLI includes a built-in config store for saving, listing, and starting tunnel configurations. Configs are persisted as JSON files in your platform's config directory (see [State and file locations](#state-and-file-locations)).

### Save a tunnel config

```bash
pinggy config save my-tunnel -l 3000 token@pro.pinggy.io
```

This saves a config called `my-tunnel`. The name is what you pass to `pinggy start`, `stop`, `restart`, and the other commands below.

### Save with auto-start enabled

```bash
pinggy config save my-tunnel --auto -l 3000
```

### List all saved configs

```bash
pinggy config list
pinggy config ls          # alias for list
```

### View details of a saved config

```bash
pinggy config show my-tunnel
pinggy config show my-tunnel other-tunnel
pinggy config my-tunnel                      # shorthand: same as config show
```

### Update a saved config

```bash
pinggy config update my-tunnel -l 4000
```

### Enable or disable auto-start

```bash
pinggy config auto my-tunnel
pinggy config noauto my-tunnel
pinggy config auto tunnel1 tunnel2
```

### Delete a saved config

```bash
pinggy config delete my-tunnel
pinggy config delete tunnel1 tunnel2
```

Configs can be looked up by name (exact match) or by `configId` prefix (partial match).

## Starting saved tunnels

### Start a saved tunnel

```bash
pinggy start my-tunnel             # foreground, TUI attached
pinggy start my-tunnel --b         # detached, CLI exits immediately
```

### Start with runtime overrides

```bash
pinggy start my-tunnel -l 4000
```

### Start multiple tunnels

```bash
pinggy start tunnel1 tunnel2
```

### Start all auto-start tunnels

```bash
pinggy start --all
```

### Start with remote management

```bash
pinggy start --all --remote-management <API_KEY>
pinggy start tunnel1 tunnel2 --remote-management <API_KEY>
```

### Start with logging enabled

```bash
pinggy start my-tunnel --vvv
pinggy start --all --logfile /tmp/pinggy.log --loglevel DEBUG
```

> Note: Runtime overrides (`-l`, `--type`, `--token`, and similar) only apply when starting a single tunnel. For multiple tunnels, update the saved config first with `pinggy config update`.

## How tunnels run: the daemon

The CLI runs as two processes. The command you type is short-lived. A long-running daemon owns every tunnel and talks to the Pinggy service. The two communicate over HTTP and WebSocket on `127.0.0.1`, and the daemon starts automatically the first time you create a tunnel, so you usually never start it by hand.

This split is what makes the lifecycle commands possible. A tunnel can run in one of two modes:

- **Foreground** (default): the CLI keeps a live connection to the tunnel and renders the TUI. Press `Ctrl+C` to close the TUI and stop the tunnel.
- **Background / detached** (`--b`): the CLI prints the public URL and exits. The tunnel keeps running in the daemon until you stop it with `pinggy stop`.

Because the daemon outlives any single command, you can start a tunnel in one terminal, list it from another, follow its logs, re-attach the TUI, or stop it later, all without keeping a window open.

## Running tunnels in the background

Add `--b` to start a tunnel detached. The CLI prints the public URL and exits, and the daemon keeps the tunnel alive.

```bash
pinggy -l 3000 --b                 # start an ad-hoc tunnel in the background
pinggy start my-tunnel --b         # start a saved tunnel in the background
```

Stop a detached tunnel with `pinggy stop <name|id>`, or stop everything with `pinggy daemon stop`.

## Managing running tunnels

Because the daemon owns every tunnel, you can inspect and control them from any terminal.

```bash
pinggy ps                          # list running tunnels (id, name, status, local endpoint, public URL)
pinggy stop my-tunnel              # stop a tunnel by name
pinggy stop my-tunnel other        # stop several at once
pinggy stop abc12345               # stop by configId prefix
pinggy restart my-tunnel           # restart a tunnel (keeps its foreground/background mode)
pinggy attach my-tunnel            # re-open the live TUI against a running tunnel
```

`attach` is handy for a detached tunnel: open a fresh TUI session, watch requests and responses in real time, then close it again without stopping the tunnel. `restart` also picks up the latest log level.

Tunnels can be referenced by name (exact match) or by `configId` prefix (partial match) in every lifecycle command.

## Daemon control

The daemon starts automatically when needed, so most users never touch these commands. They exist for explicit control, scripting, and boot-time service install. Both `pinggy daemon` and the alias `pinggy d` work.

```bash
pinggy daemon start                # start the daemon (lists which configs will auto-start)
pinggy daemon status               # show PID, port, start time, and uptime
pinggy daemon stop                 # stop every tunnel and shut the daemon down cleanly
```

## Remote management

You can control tunnels remotely using a secure WebSocket connection.

- Start remote management with a token:

```bash
pinggy --remote-management <API KEY>
```

- Specify a management server (default is `wss://dashboard.pinggy.io`):

```bash
pinggy --remote-management <API KEY> --manage wss://custom.example.com
```

## File server mode

Serve a local directory quickly over a tunnel:

```bash
pinggy --serve /path/to/files
```

Optionally combine with other flags (auth, IP whitelist) as needed.

## Logging

The CLI has two layers of logging: per-invocation flags that affect what the current command prints, and daemon-wide commands that read the persistent log files the daemon writes.

### Per-invocation flags

Pass these on any command that starts or interacts with a tunnel. CLI flags override the matching environment variables.

```bash
pinggy -l 3000 --logfile ~/.pinggy/pinggy.log --loglevel INFO --v
```

If you pass `--v`, `--vv`, or `--vvv` without specifying a log level, the default is INFO. If a `logfile` path is provided, the log directory is created if it does not exist.

### Daemon and per-tunnel logs

The daemon writes its own log file plus a separate log per tunnel. Read them without hunting for paths:

```bash
pinggy logs                        # last 100 lines of the daemon log
pinggy logs -f                     # follow new daemon log lines
pinggy logs my-tunnel              # last 100 lines of that tunnel's log
pinggy logs my-tunnel -f           # follow a tunnel's log (survives log rotation)
```

Get or set the daemon log level, or print the resolved log file paths:

```bash
pinggy log level                   # print the current level
pinggy log level debug             # set to debug, info, or error
pinggy log path                    # daemon log path
pinggy log path my-tunnel          # a specific tunnel's log path
```

Setting the level persists and applies to the daemon and any new tunnels. To pick up a new level on a tunnel that is already running, restart it with `pinggy restart <name>`.

## Saving and loading configuration

In addition to the named config store, you can save and reuse a single set of options as a standalone file.

- Save current options to a file:

```bash
pinggy -p 443 -L4300:localhost:4300 -t -R0:127.0.0.1:8000 qr+force@free.pinggy.io x:noreverseproxy x:passpreflight x:xff --saveconf myconfig.json
```

- Use a config as base and override with flags:

```bash
pinggy --conf ./myconfig.json -p 8080
```

## State and file locations

Pinggy CLI stores saved configs and writes logs under standard per-OS directories.

Config directory:

- Linux and macOS: `~/.config/pinggy/`
- Windows: `%APPDATA%\pinggy\`

Log directory:

- Linux: `~/.local/state/pinggy-cli/logs/` (honors `$XDG_STATE_HOME`)
- macOS: `~/Library/Logs/Pinggy-CLI/`
- Windows: `%LOCALAPPDATA%\Pinggy-CLI\Logs\`

Run `pinggy log path` to print the exact resolved paths on your system.

## Key features

- HTTP, TCP, UDP, TLS, and TLSTCP tunnels to localhost
- SSH-style and user-friendly flags
- Web debugger for HTTP tunnels
- Extended options for auth, header manipulation, IP allowlists, CORS handling, and more
- Background daemon owns every tunnel, with foreground (live TUI) and detached (`--b`) modes
- Lifecycle commands: `ps`, `start`, `stop`, `restart`, `attach`
- Per-tunnel and per-daemon log files with `pinggy logs` (tail, follow, rotation-safe)
- System-service install for auto-start at boot (systemd, launchd, Task Scheduler)
- Remote management via secure WebSocket connection, works with Pinggy Dashboard
- Save and load configuration files
- Config store for saving, listing, updating, and starting named tunnel configs
- Auto-start support for launching saved tunnels automatically
- Simple file server mode for quickly sharing local files
- Built-in TUI for viewing tunnel statistics, requests, and responses in real time

## Usage

Basic syntax:

```bash
pinggy [options] [user@domain]
```

- `user@domain` is optional. Domain can be any valid domain supported by the service backend, for example `ap.free.pinggy.io`. And `user` is a combination of token and tunnel mode, like `token+tcp`.

### Pinggy CLI specific options

Pinggy's CLI lets you configure the tunnel with various user-friendly options:

**Type**: `--type`

Specify the type of tunnel you want to create. The available options are `http`, `tcp`, `tls`, `udp`, and `tlstcp`. If nothing is specified, the default type is `http`.

```bash
--type <type>
```

**Local Port**: `--localport` or `-l`

Specify the local port, along with host and protocol if present, to forward the tunnel to. The default host is `localhost`.

```bash
--localport <protocol><host>:<port>
```

For example:

```bash
--localport django_server:8000
--localport https://my.domain:445
-l 777
```

**Debugger Port**: `--debugger` or `-d`

Specify the port on which the web debugger will run.

```bash
--debugger <port>
```

**Token**: `--token`

Provide the token for authentication.

```bash
--token <token>
```

### Options

The CLI supports both SSH-style flags and more descriptive long flags. Below is a consolidated list of public options. For the most up-to-date help, run `pinggy --help`.

#### Port Forwarding

| Flag | Description | Example |
|------|-------------|---------|
| `-R`, `--R` | Local port forwarding, SSH-style | `-R0:localhost:3000` |
| `-L`, `--L` | Web debugger address, SSH-style | `-L4300:localhost:4300` |

#### Connection

| Flag | Description | Example |
|------|-------------|---------|
| `-p`, `--server-port` | Pinggy server port, default `443` | `--server-port 8080` |
| `--type` | Type of connection (`http`, `tcp`, `udp`, `tls`, `tlstcp`) | `--type tcp` |
| `-l`, `--localport` | Local endpoint `[protocol:][host:]port` | `--localport https://localhost:8000` |
| `-d`, `--debugger` | Port for web debugger | `-d 4300` |
| `--token` | Token for authentication | `--token abc123` |
| `--force` | Forcefully close existing tunnels and establish a new one | `--force` |

#### Tunnel lifecycle

| Flag | Description |
|------|-------------|
| `--b` | Run the tunnel in the background via the daemon; the CLI exits after the tunnel starts |
| `--all` | Start every saved config marked as auto-start (pairs with `pinggy start`) |
| `--auto` | Mark a saved config as auto-start (pairs with `pinggy config save`) |

#### Logging

| Flag | Description |
|------|-------------|
| `--loglevel` | Logging level: `ERROR`, `INFO`, `DEBUG` |
| `--logfile` | Path to log file |
| `--v` | Print CLI logs to stdout |
| `--vv` | Detailed logs (Node.js SDK + Libpinggy) |
| `--vvv` | Enable logs from CLI, SDK, and internal components |
| `--follow` | Stream new log lines as they appear (used with `pinggy logs`) |

#### Config (file-based)

| Flag | Description |
|------|-------------|
| `--saveconf <file>` | Create a configuration file with the provided options |
| `--conf <file>` | Load configuration from a file (CLI flags override) |

#### File server

| Flag | Description |
|------|-------------|
| `--serve <path>` | Serve files from a local directory via a simple web server |

#### AutoReconnect

| Flag | Description |
|------|-------------|
| `-a`, `--no-autoreconnect` | Disable automatic reconnection on failure. Auto-reconnect is on by default. |

#### Remote control

| Flag | Description |
|------|-------------|
| `--remote-management <token>` | Enable remote tunnel management |
| `--manage <addr>` | Remote management server, default `dashboard.pinggy.io` |
| `--noTui` | Disable the TUI in remote management mode |

#### Misc

| Flag | Description |
|------|-------------|
| `--version` | Print version and exit |
| `-h`, `--help` | Show help and exit |

### Extended options

Extended options provide advanced controls. Specify them as positional values like `x:https` or `w:192.168.1.0/24` alongside other CLI flags.

- `x:https` enforces HTTPS-only, HTTP redirected to HTTPS.
- `x:passpreflight` or `x:allowpreflight` allows CORS preflight to pass unchanged.
- `x:noreverseproxy` disables built-in reverse-proxy header injection.
- `x:localservertls:<host>` connects to a local HTTPS server with the given SNI host.
- `x:xff` adds `X-Forwarded-For`.
- `x:fullurl` or `x:fullrequesturl` includes the original request URL.
- `w:<cidr>[,<cidr>...]` whitelists IPs, IPv4 CIDR.
- `k:<token>` sets Bearer token(s) for auth, repeatable.
- `b:<user:pass>` adds Basic Auth credentials, repeatable.
- `a:<Key:Val>` adds a header.
- `u:<Key:Val>` updates a header.
- `r:<Key>` removes a header.

Examples:

- Enforce HTTPS and XFF for a local HTTPS server on `8443`:

```bash
pinggy x:https x:xff -l https://localhost:8443
```

- Allow only a local subnet:

```bash
pinggy w:192.168.1.0/24 -l 8080
```

To generate advanced CLI arguments, use [Configure from Pinggy.io](https://pinggy.io/).

## Signals and shutdown

- **Foreground tunnel**: `Ctrl+C` closes the TUI. The daemon arms a short grace timer and stops the tunnel if no other CLI re-attaches.
- **Detached tunnel** (`--b`): the CLI has already exited. Stop it with `pinggy stop <name|id>`.
- **Everything at once**: `pinggy daemon stop` stops every tunnel and shuts the daemon down cleanly.
