---
title: "minipg: PostgreSQL as a Single Executable, Used Like SQLite"
description: "minipg packs real PostgreSQL 18 into one binary and a .pgdb folder. How it runs Alpine's Postgres without Docker or a VM, what it costs in speed and memory, and how to share it."
date: 2026-11-26T10:00:00+05:30
lastmod: 2026-11-26T10:00:00+05:30
draft: false
tags: ["PostgreSQL", "database", "developer tools", "open source", "self-hosted"]
og_image: "images/minipg_postgres_single_executable/minipg_postgres_single_executable_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIm1pbmlwZzogUG9zdGdyZVNRTCBhcyBhIFNpbmdsZSBFeGVjdXRhYmxlLCBVc2VkIExpa2UgU1FMaXRlIiwKICAiZGVzY3JpcHRpb24iOiAibWluaXBnIHBhY2tzIHJlYWwgUG9zdGdyZVNRTCAxOCBpbnRvIG9uZSBiaW5hcnkgYW5kIGEgLnBnZGIgZm9sZGVyLiBIb3cgaXQgcnVucyBBbHBpbmUncyBQb3N0Z3JlcyB3aXRob3V0IERvY2tlciBvciBhIFZNLCB3aGF0IGl0IGNvc3RzIGluIHNwZWVkIGFuZCBtZW1vcnksIGFuZCBob3cgdG8gc2hhcmUgaXQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL21pbmlwZ19wb3N0Z3Jlc19zaW5nbGVfZXhlY3V0YWJsZS9taW5pcGdfcG9zdGdyZXNfc2luZ2xlX2V4ZWN1dGFibGVfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiAgICB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMS0yNlQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTI2VDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvbWluaXBnX3Bvc3RncmVzX3NpbmdsZV9leGVjdXRhYmxlLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiRGF0YWJhc2VzIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJtaW5pcGcsIFBvc3RncmVTUUwgc2luZ2xlIGJpbmFyeSwgUG9zdGdyZXMgd2l0aG91dCBEb2NrZXIsIGVtYmVkZGVkIFBvc3RncmVzLCBQR2xpdGUgYWx0ZXJuYXRpdmUsIGh5cGVyOSwgUG9zdGdyZXMgbGlrZSBTUUxpdGUsIFBpbmdneSBUQ1AgdHVubmVsIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIm1pbmlwZyIsICJkZXNjcmlwdGlvbiI6ICJBIENMSSB0aGF0IHJ1bnMgUG9zdGdyZVNRTCAxOCBmcm9tIG9uZSBleGVjdXRhYmxlLCB3aXRoIGEgLnBnZGIgZm9sZGVyIGFzIHRoZSBkYXRhYmFzZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogImh5cGVyOSIsICJkZXNjcmlwdGlvbiI6ICJBIFBsYW4gOSBrZXJuZWwgZW1iZWRkZWQgYXMgYSBsaWJyYXJ5IHRoYXQgcnVucyB1bm1vZGlmaWVkIExpbnV4IGJpbmFyaWVzIG9uIHRoZSBob3N0IGh5cGVydmlzb3IuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJQb3N0Z3JlU1FMIiwgImRlc2NyaXB0aW9uIjogIlRoZSBvcGVuIHNvdXJjZSByZWxhdGlvbmFsIGRhdGFiYXNlIG1pbmlwZyBlbWJlZHMgZnJvbSB0aGUgcG9zdGdyZXM6MTgtYWxwaW5lIGltYWdlLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU3lzY2FsbCBVc2VyIERpc3BhdGNoIiwgImRlc2NyaXB0aW9uIjogIkEgTGludXggNS4xMSBmZWF0dXJlIGg5IHVzZXMgdG8gdHJhcCBndWVzdCBzeXN0ZW0gY2FsbHMgd2l0aG91dCBLVk0uIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJQR2xpdGUiLCAiZGVzY3JpcHRpb24iOiAiUG9zdGdyZXMgY29tcGlsZWQgdG8gV2ViQXNzZW1ibHksIGEgc2luZ2xlLWNvbm5lY3Rpb24gaW4tcHJvY2VzcyBhbHRlcm5hdGl2ZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBpbmdneSBUQ1AgdHVubmVsIiwgImRlc2NyaXB0aW9uIjogIkZvcndhcmRzIGEgcHVibGljIGhvc3QgYW5kIHBvcnQgdG8gYSBsb2NhbCBwb3J0IHN1Y2ggYXMgNTQzMjEgb3ZlciBTU0guIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "minipg_postgres_single_executable/minipg_postgres_single_executable_banner.webp" "Banner reading Postgres in one binary, with a flow from the minipg binary to an app.pgdb folder to a psql result" >}}

`minipg app.pgdb` creates a folder, starts a real PostgreSQL 18 server inside it, and drops you into `psql`. There's no `apt install postgresql`, no Docker, no `pg_hba.conf`. When you quit and nothing else is connected, the server shuts itself down a minute later, and `app.pgdb` is just a directory you can `cp -r` or delete. That's the pitch of {{< link href="https://github.com/progrium/minipg" >}}minipg{{< /link >}}, a new MIT-licensed tool by Jeff Lindsay (progrium, of Dokku and localtunnel fame). The interesting part isn't the CLI, it's how the Postgres gets there: minipg embeds Docker Hub's `postgres:18-alpine` image and runs those unmodified Linux binaries through {{< link href="https://github.com/progrium/hyper9" >}}hyper9{{< /link >}}, a Plan 9 kernel compiled into the binary as a library that answers Postgres's system calls itself.

{{% tldr %}}
1. **A `.pgdb` folder is the whole database**: data, config, the generated password and the Postgres major all live in it, and a stopped one copies like any directory.
2. **It is real Postgres, not a port**: Alpine's own `postgres` binaries from `postgres:18-alpine`, run by hyper9 on KVM, Hypervisor.framework, Windows Hypervisor Platform, or a no-hypervisor fallback for containers and CI.
3. **Servers start on demand and stop after 60 idle seconds**, enforced by a lock file so only one process ever owns a `.pgdb`.
4. **It's slower than native**: about 2x for one client and 6 to 12x under load on the no-KVM backend, 27 ms per new connection, and about 375 MB of RAM idle. Use a connection pool.
5. **It's early software.** The README says not to trust it with data you can't recreate, and third-party extensions such as pgvector aren't available yet.
{{% /tldr %}}

A quick note on testing: everything below comes from the minipg README, its 700-line `MANUAL.md` and the source as of November 26, 2026 (latest tag `v0.3`, from November 17). I read the code but did not run the binary for this post, so the commands are as documented, not as observed on my machine.

## What minipg replaces

The use case is the one every developer has hit. You find a self-hosted tool you want to try, and the README says "requires PostgreSQL". Now you're installing Postgres, or Docker plus a Postgres container, and remembering to start it before the tool, all to try something you might delete in ten minutes.

SQLite never had this problem because it has no server. minipg's manual puts it plainly: it "gives PostgreSQL the workflow of SQLite". The author's own {{< link href="https://progrium.xyz/articles/2026/single-binary-postgres/" >}}write-up{{< /link >}} lists the targets: running software that only supports Postgres, shipping Postgres inside your own program, tests and local dev without Docker, and agents that need a throwaway database for one task.

It's explicitly not for production. No replicas, no high availability, no many-users-over-many-connections. The manual says to "run Postgres normally or in a container for those."

The whole interface fits on a screen:

```bash
minipg app.pgdb                       # psql shell (creates app.pgdb if missing)
minipg app.pgdb "select 1"            # one statement
minipg url app.pgdb                   # postgres://postgres:...@127.0.0.1:54321/app
minipg serve app.pgdb                 # an explicit foreground server
minipg run app.pgdb -- npm start      # your app, with DATABASE_URL set
minipg dump app.pgdb > dump.sql       # and minipg restore app.pgdb dump.sql
```

The worked example for the rest of this post: a small Node notes app that reads `DATABASE_URL`, backed by `app.pgdb`, which I later want a teammate to poke at from their own `psql`.

## Why it isn't PGlite

The obvious question is how this differs from {{< link href="https://pglite.dev/" >}}PGlite{{< /link >}}, which is Postgres compiled to WebAssembly and runs as a library. Lindsay tried PGlite first. The problem he hit is that PGlite supports a single connection and a single session. Plenty of apps written for a real server open a transaction on one connection and then query on another before committing. With one connection, the second query waits on a transaction that is waiting on it, and his app deadlocked.

His second attempt ran a full Postgres server inside the v86 x86 emulator in a headless webview. It worked, but took about 7 seconds on an M3 MacBook before it would accept a connection. That's fine for a server, useless for a CLI where every `select` should feel instant.

So the tradeoff is clear. PGlite is in-process, lighter and has no separate server, but one connection. minipg is a real multi-connection Postgres server, with the memory and process cost that comes with it.

## How minipg runs Alpine's Postgres without Docker

This is the clever part. The `postgres:18-alpine` image is a Linux userland: musl, busybox, and Postgres binaries that expect a Linux kernel underneath. minipg doesn't boot one.

Instead, hyper9 (h9) is linked into minipg as a Zig library. h9 is a Plan 9 (9front) kernel, derived from the one in drawterm, that runs inside the minipg process. Its "Linux personality" loads Alpine's ELF binaries and runs them on a virtual CPU from the host's hypervisor. When Postgres makes a system call, it doesn't reach your host kernel. It traps to h9, which answers it. The idea is close to what Wine and Proton do for Windows APIs, applied at the syscall layer.

{{< image "minipg_postgres_single_executable/minipg_h9_stack.webp" "Layer diagram of one minipg process: Alpine postgres and psql binaries make syscalls that h9, a Plan 9 kernel, answers on top of KVM, Hypervisor.framework, WHP or the sud engine, with app.pgdb as the working directory and Postgres on 127.0.0.1:54321" >}}

*The h9 layer replaces both Docker and a guest Linux kernel. Source: minipg README and hyper9 spec, November 2026.*

Which hypervisor depends on the platform:

| Platform | h9 engine | Needs | Tested by the project |
|---|---|---|---|
| Linux x86_64 | KVM, or the `sud` engine without it | Linux 5.11 or later | Yes, `sud` engine |
| Linux arm64 | KVM | read/write `/dev/kvm` | Builds, not run |
| macOS (Apple Silicon) | Hypervisor.framework | the hypervisor entitlement | Not run |
| Windows x86_64 | Windows Hypervisor Platform | Windows 10 1803+, WHP feature on | Yes |

The `sud` row is what makes it work in CI and containers. It uses Linux's {{< link href="https://docs.kernel.org/admin-guide/syscall-user-dispatch.html" >}}Syscall User Dispatch{{< /link >}}, added in kernel 5.11, which is why that version is the floor. Each guest process runs as a tiny ~4 KB stub host process, and every `SYSCALL` instruction it executes raises `SIGSYS` instead of reaching the host kernel. h9 catches the signal and answers the call. A seccomp filter kills the stub if anything slips through. No `--privileged`, no `/dev/kvm`, no extra capabilities. One caveat from h9's own spec: the `sud` engine is "not a security boundary", so don't think of it as a sandbox for untrusted code.

The image is trimmed at build time. LLVM, headers and docs are dropped, which means no JIT, so minipg starts Postgres with `jit=off`. The first command unpacks the embedded root (about 90 MB) into `~/.cache/minipg` on Linux, once.

Postgres tools work the same way. `psql`, `pg_dump` and `pg_restore` aren't installed on your host. Each runs in its own short-lived h9 machine over the same Alpine root, which takes about 90 ms to start, and connects to the server over loopback like any other client.

## What's inside a .pgdb folder

```
app.pgdb/
  minipg.toml   settings and the generated superuser password (mode 0600)
  pgdata/       Postgres's data directory, as plain files
  .lock         held by the server while it runs
```

`minipg.toml` records the layout format, the Postgres major, the arch, the image digest, the superuser and its password, the default database (named after the folder, so `app.pgdb` gets a database called `app`), and a preferred port picked at init. Nothing is written next to the folder. Runtime files and logs go to standard per-OS locations like `~/.local/state/minipg/logs/`.

Two details I liked. First, new clusters use Postgres's builtin `C.UTF-8` locale, which sorts the same on every platform and never changes between versions. That sidesteps the classic bug where a glibc upgrade silently changes collation and corrupts your text indexes. Second, every TCP connection uses SCRAM-SHA-256 with the generated password, loopback included. Stock `initdb` trusts loopback, which on a shared machine lets any local user in. minipg turns that off.

The copy rule is the one to remember: **a stopped `.pgdb` is an ordinary directory, a running one is not.** Copy a running one and you may get torn files. Check with `minipg status app.pgdb` (exit code 3 means stopped), or use `minipg dump` while it runs.

## How servers start and stop on their own

Exactly one process runs Postgres for a given `.pgdb`, and it holds an exclusive lock on `.lock` for its whole life. The OS releases that lock even on `kill -9`, so a crashed server never leaves a stale lock behind.

Commands never host Postgres themselves. When `minipg app.pgdb "select 1"` runs, it looks for a server. If there isn't one, it starts a background server and waits until it's ready (about 2 seconds, or 4 to 8 seconds on the very first start while it unpacks and runs `initdb`). Back-to-back commands share that server. A monitor thread counts clients in `pg_stat_activity`, and after `MINIPG_IDLE` seconds (default 60) with none, the server does a clean fast shutdown.

{{< image "minipg_postgres_single_executable/minipg_server_lifecycle.webp" "State diagram of a minipg server moving from Stopped to Starting to Running to Idle, and back to Stopped after 60 seconds with no clients or on minipg stop" >}}

For our notes app, `run` is the cleanest way to wire it up. It starts the server if needed, sets `DATABASE_URL`, `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD` and `PGDATABASE`, keeps the server up until your command exits, and returns your command's exit code:

```bash
minipg app.pgdb "create table notes (id serial primary key, body text)"
minipg app.pgdb "insert into notes (body) values ('hello')"
minipg run app.pgdb -- npm start
```

If you'd rather have a fixed port and logs in your terminal, `minipg serve app.pgdb -p 54321` runs it in the foreground with no idle timeout. That's also the mode for systemd, a Procfile or a container entrypoint. Shutdown on Ctrl-C goes through a small supervisor shell inside the machine that sends `SIGINT` to the postmaster alone; a second Ctrl-C, or 30 seconds, tears the machine down and Postgres recovers from its WAL on the next start.

In CI it gets short:

```bash
minipg init test.pgdb
minipg run test.pgdb -- go test ./...
```

Cache `~/.cache/minipg` between runs to skip the 90 MB unpack. For per-test isolation, `minipg create test.pgdb t42` makes a new database inside an existing `.pgdb`, which is faster than a 4-second `init` per test.

## What it costs: speed and memory

The manual is refreshingly honest here. These numbers are from x86_64 Linux on the `sud` engine (no KVM), against native Postgres on the same machine:

{{< image "minipg_postgres_single_executable/minipg_vs_native_postgres.webp" "Bar chart of minipg slowdown against native PostgreSQL: 2.2x single-client select, 6.1x TPC-B-like, 11.8x select-only and 11.7x per new connection" >}}

*Data: {{< link href="https://github.com/progrium/minipg/blob/main/MANUAL.md" >}}minipg MANUAL.md{{< /link >}}, section 10, November 2026.*

| Measure | minipg | Native | Ratio |
|---|---|---|---|
| Single-client select latency | 0.24 ms | 0.11 ms | about 2x |
| Select-only, 4 clients | 3,800 tps | 44,900 tps | about 12x |
| TPC-B-like, 4 clients | 640 tps | 3,900 tps | about 6x |
| New connection | 27 ms | 2.3 ms | about 12x |

The connection number is the one to design around. Every new Postgres connection forks a backend process, and fork is the most expensive thing h9 does. An app that opens a connection per request will feel 27 ms on every request; one that keeps a pool won't. For a local notes app that's a non-issue. For a test suite that reconnects per test, it adds up fast.

Memory is the other cost. An idle server sits at about 375 MB resident and about 550 MB under load, much more than native Postgres with teh same settings. On Windows, WHP commits the whole guest memory up front, 2 GB per server and 1 GB per running tool, so an 8 GB machine tops out at three or four servers at once.

KVM and Hypervisor.framework avoid the `sud` engine's main cost (a cross-thread round trip on every syscall) and should be faster, but the project hasn't measured them yet.

## What's tested, and what isn't

The end-to-end suite runs on stock GitHub runners and kills the server with `kill -9` in the middle of writes, then checks that Postgres recovers from its WAL and that `amcheck` finds no index corruption. File and directory `fsync` calls reach the host disk, so Postgres's normal durability rules hold. A separate `make stress` suite kills things six different ways, exhausts connections, memory and disk, and checks every acknowledged commit survived.

What hasn't been tested: power loss, kernel crashes, and crash-testing on KVM, Hypervisor.framework or arm64. macOS and Linux arm64 builds haven't even been run by the project, per the platform table above.

The other limits worth knowing before you commit to it:

- **Extensions.** Contrib extensions that ship in the official Alpine image (`pgcrypto`, `hstore`, `pg_trgm`) work with `CREATE EXTENSION`. Third-party ones like pgvector and PostGIS don't, until custom images (`init --image REF`) land. The author's blog post mentions pgvector and PostGIS as motivations, so read that as a goal, not a current feature.
- **Upgrades.** There's no `upgrade` command yet. Moving from 17 to 18 means `dump`, `init --pg 18`, `restore`.
- **Cross-arch.** A `.pgdb` records its arch and warns if opened on another. Dump and restore to move between x86_64 and arm64.
- **No packages yet.** No Homebrew or apt, though both are on the roadmap. You download the zip from the releases page or build with Zig 0.16.

## Sharing a minipg database with a teammate through Pinggy

Back to the notes app. Say a teammate wants to run some queries against your local `app.pgdb` from their own `psql` or a GUI like DBeaver. minipg binds `127.0.0.1` by default, and your laptop is behind NAT anyway. A Pinggy TCP tunnel forwards a public host and port to that loopback port, over an outbound SSH connection, so nothing changes on your router.

Start the server on a fixed port in one terminal:

```bash
minipg serve app.pgdb -p 54321
```

In a second terminal, open the tunnel:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:54321 tcp@free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:54321 tcp@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:54321 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:54321 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:54321 tcp@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:54321 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:54321 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:54321 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:54321 tcp@free.pinggy.io\"}}}"
{{< /ssh_command >}}

Pinggy prints an address like `tcp://rnrwn-14-139-241-214.a.free.pinggy.link:43141`. Get the password with `minipg url app.pgdb`, and your teammate connects with the host and port from the tunnel:

```bash
psql "postgres://postgres:<password>@rnrwn-14-139-241-214.a.free.pinggy.link:43141/app"
```

{{< image "minipg_postgres_single_executable/minipg_pinggy_tcp_tunnel.webp" "Sequence diagram of a teammate's psql connecting through a Pinggy TCP tunnel to minipg serve on localhost:54321, with the SCRAM-SHA-256 password check at Postgres" >}}

A few things to get right here:

- **Never combine this with `serve --trust`.** `--trust` lets loopback clients in without a password, and minipg refuses it only for a non-loopback `--listen`. The tunnel's traffic arrives at Postgres from `127.0.0.1`, because your own ssh client makes the local connection. So `--trust` plus a public tunnel is a passwordless database on the internet. Keep the default SCRAM auth.
- **The free tunnel lasts 60 minutes**, which is plenty for a pairing session. A Pro token gives a tunnel that stays up and a persistent address, and IP whitelisting (`-- w:203.0.113.7/32`) narrows who can even reach the port.
- **Rotate after sharing.** `minipg passwd app.pgdb` generates a new password and saves it, so the one you pasted into chat stops working.
- **Remember the 27 ms connection cost** adds to the tunnel's round trip. Fine for a few `psql` sessions, not a setup to point a production app at.

For more on TCP tunnels in general, the [Pinggy TCP tunnel docs](https://pinggy.io/docs/tcp_tunnels/) cover the flags, and [the MariaDB guide](/blog/how_to_access_mariadb_using_pinggy/) walks through the same idea for MySQL-style databases.

## Should you use it

For trying a self-hosted tool that insists on Postgres, for a throwaway database in a test job, or for teaching someone SQL without a setup session, minipg looks like the nicest option I've seen. One binary, one folder, and it's actual Postgres 18 with multiple connections, which PGlite can't give you.

I'd hold off for anything you can't recreate. The project says so itself, the KVM and macOS paths are untested, and the memory footprint is heavy for a "lite" tool. The bigger idea, packaging a complex Linux system as a single cross-platform binary by running it on an embedded Plan 9 kernel, is the part I'd keep an eye on. Postgres is just the first program it was pointed at.

To check the claims yourself, grab a release zip from {{< link href="https://github.com/progrium/minipg" >}}github.com/progrium/minipg{{< /link >}}, run `minipg app.pgdb "select version()"`, and time `minipg app.pgdb "select 1"` twice: the first call pays the server start, the second should come back in milliseconds. The {{< link href="https://progrium.github.io/minipg/" >}}project page{{< /link >}} also has a browser demo that downloads about 35 MB and needs Chrome or Edge 137 or later, if you just want to recieve a feel for it without installing anything.
