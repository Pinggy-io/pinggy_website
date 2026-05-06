---
 title: "Expose a PostgreSQL database"
 description: "Connect to a PostgreSQL server running on your laptop or home server from anywhere by tunnelling its TCP port through Pinggy."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Expose a local PostgreSQL database with Pinggy

PostgreSQL listens on TCP port `5432` by default. On a development machine that port is reachable from `psql` on the same host or from other machines on the LAN, but it is firewalled from the public internet - and rightly so, because exposing a database directly to the world is risky.

Pinggy provides a controlled middle ground. A TCP tunnel gives a remote teammate or a hosted service a single public hostname and port that forwards into your local database, while still requiring your existing PostgreSQL credentials and TLS configuration to actually connect.

#### Step 1: Confirm PostgreSQL accepts the connection locally

Make sure the server is running and the `postgres` user (or whichever role you plan to use remotely) can authenticate:

```bash
psql -h 127.0.0.1 -U postgres -d mydb
```

If `psql` connects, you are ready for the tunnel. If not, check `pg_hba.conf` and `postgresql.conf` - `listen_addresses` must include `localhost` or `*`, and `pg_hba.conf` must contain a matching line for the role and source.

#### Step 2: Open a TCP tunnel

PostgreSQL is a TCP wire protocol, not HTTP, so use Pinggy's TCP tunnel:

```bash
ssh -p 443 -R0:localhost:5432 tcp@free.pinggy.io
```

Pinggy returns a public hostname and port - for example `tcp://rndnj.a.free.pinggy.online:31572`. That endpoint is the address remote clients should connect to.

#### Step 3: Connect from a remote client

Use the same `psql` invocation, swapping in the Pinggy hostname and port:

```bash
psql -h rndnj.a.free.pinggy.online -p 31572 -U postgres -d mydb
```

GUI clients (DBeaver, TablePlus, pgAdmin) accept the same parameters under their connection settings.

#### Step 4: Lock the tunnel down

Anyone who guesses the Pinggy hostname and port hits your `pg_hba.conf` directly. Reduce the attack surface with at least one of:

- A dedicated, low-privilege role for remote access - never expose `postgres` superuser credentials.
- **[IP whitelisting](/docs/tcp_tunnels/ip_whitelist/)** on the tunnel so only known networks can reach the port.
- TLS-only connections by setting `ssl = on` and forcing `hostssl` rules in `pg_hba.conf`. The TLS handshake terminates between the client and PostgreSQL, end to end through the tunnel.

#### Step 5: Stable address for production-like access

Free TCP tunnels reissue both hostname and port on every reconnect, which breaks saved connection strings. Sign in to [the dashboard](https://dashboard.pinggy.io) and use your access token (`token+tcp@free.pinggy.io`); on a Pinggy Pro plan you also get a stable hostname and port that survive reconnects.

For a deeper dive on TCP tunnel options, see the [TCP tunnels reference](/docs/tcp_tunnels/).
