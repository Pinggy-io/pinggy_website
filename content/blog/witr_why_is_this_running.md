---
title: "witr: The Command That Answers 'Why Is This Running?'"
description: "witr is a CLI and TUI tool that traces any process, port, container, or file back to what actually started it - systemd unit, cron job, Docker container, or someone's stray tmux session. Here's how it works and how to read its output."
date: 2026-08-07T11:00:00+05:30
draft: false
tags: ["witr", "CLI tools", "devops", "process management", "Linux", "Go", "systemd", "developer tools", "open source"]
categories: ["Technology", "Developer Tools", "DevOps"]
og_image: "images/witr_why_is_this_running/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFRyYWNlIFdoYXQgSXMgUnVubmluZyBvbiBhIFBvcnQgd2l0aCB3aXRyIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGluc3RhbGxpbmcgd2l0ciwgdHJhY2luZyBhIHByb2Nlc3MsIHBvcnQsIG9yIGNvbnRhaW5lciBiYWNrIHRvIHdoYXQgc3RhcnRlZCBpdCwgYW5kIHJlYWRpbmcgaXRzIGFuY2VzdHJ5IGNoYWluIGFuZCB3YXJuaW5ncy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvd2l0cl93aHlfaXNfdGhpc19ydW5uaW5nL2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgd2l0ciIsCiAgICAgICJ0ZXh0IjogIlJ1biBjdXJsIC1mc1NMIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9wcmFuc2h1cGFybWFyL3dpdHIvbWFpbi9pbnN0YWxsLnNoIHwgYmFzaCBvbiBMaW51eCwgbWFjT1MsIG9yIEZyZWVCU0QsIG9yIGJyZXcgaW5zdGFsbCB3aXRyLCBvciBnbyBpbnN0YWxsIGdpdGh1Yi5jb20vcHJhbnNodXBhcm1hci93aXRyL2NtZC93aXRyQGxhdGVzdC4gd2l0ciBzaGlwcyBhcyBhIHNpbmdsZSBzdGF0aWMgYmluYXJ5IHdpdGggbm8gcnVudGltZSBkZXBlbmRlbmNpZXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlF1ZXJ5IGEgcG9ydCwgUElELCBvciBwcm9jZXNzIG5hbWUiLAogICAgICAidGV4dCI6ICJSdW4gd2l0ciAtLXBvcnQgNTQzMiB0byBmaW5kIHdoYXRldmVyIGlzIGJvdW5kIHRvIHRoYXQgcG9ydCwgd2l0ciAtLXBpZCAxNDIzMyB0byBsb29rIHVwIGEgc3BlY2lmaWMgcHJvY2VzcyBJRCwgb3Igd2l0ciBuZ2lueCB0byBtYXRjaCBieSBwcm9jZXNzIG5hbWUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlJlYWQgdGhlIGFuY2VzdHJ5IGNoYWluIiwKICAgICAgInRleHQiOiAiVGhlIFdoeSBJdCBFeGlzdHMgbGluZSBzaG93cyB0aGUgZnVsbCBjYXVzYWwgY2hhaW4sIGZvciBleGFtcGxlIHN5c3RlbWQgdG8gZG9ja2VyIHRvIGNvbnRhaW5lcmQtc2hpbSB0byBwb3N0Z3Jlcywgc28geW91IGNhbiBzZWUgZXhhY3RseSB3aGljaCBzdXBlcnZpc29yIGlzIHJlc3BvbnNpYmxlIGZvciBrZWVwaW5nIHRoZSBwcm9jZXNzIGFsaXZlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDaGVjayB0aGUgd2FybmluZ3MiLAogICAgICAidGV4dCI6ICJ3aXRyIGZsYWdzIHJpc2t5IHN0YXRlcyBhdXRvbWF0aWNhbGx5LCBpbmNsdWRpbmcgcHJvY2Vzc2VzIGxpc3RlbmluZyBvbiBhIHB1YmxpYyBpbnRlcmZhY2UsIHJ1bm5pbmcgYXMgcm9vdCwgb3IgcmVzdGFydGluZyByZXBlYXRlZGx5LiBSdW4gd2l0ciAtLXdhcm5pbmdzIHRvIGZpbHRlciBmb3Igb25seSB0aGVzZSBmbGFnZ2VkIHByb2Nlc3Nlcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiB0aGUgaW50ZXJhY3RpdmUgVFVJIGZvciBvbmdvaW5nIGNoZWNrcyIsCiAgICAgICJ0ZXh0IjogIlJ1biB3aXRyIHdpdGggbm8gYXJndW1lbnRzIHRvIGxhdW5jaCB0aGUgdGVybWluYWwgZGFzaGJvYXJkIHdpdGggUHJvY2Vzc2VzLCBQb3J0cywgQ29udGFpbmVycywgYW5kIExvY2tzIHRhYnMsIHVzZWZ1bCBmb3Igc2Nhbm5pbmcgYSBtYWNoaW5lIHlvdSBkaWQgbm90IHNldCB1cCB5b3Vyc2VsZi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHRoZSByaWdodCBzZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHdyb25nIG9uZSIsCiAgICAgICJ0ZXh0IjogIk9uY2Ugd2l0ciBjb25maXJtcyB3aGljaCBwcm9jZXNzIGFjdHVhbGx5IG93bnMgYSBwb3J0LCBleHBvc2UgaXQgZGVsaWJlcmF0ZWx5IHdpdGggYSB0dW5uZWwgcmF0aGVyIHRoYW4gcmViaW5kaW5nIGl0IHRvIDAuMC4wLjA6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo1NDMyIGZyZWUucGluZ2d5LmlvIHByaW50cyBhIHB1YmxpYyBIVFRQUyBVUkwgZm9yIHRoYXQgZXhhY3Qgc2VydmljZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "witr_why_is_this_running/banner.webp" "Terminal output of witr --port 5432, showing the ancestry chain systemd to docker to containerd-shim to postgres and a warning about listening on a public interface" >}}

You SSH into a box, run `ss -tlnp` or `lsof -i :5432`, and see something listening on a port you don't remember opening. `ps` tells you the PID and the command line. Neither tells you *why* it's there: which systemd unit owns it, whether it's inside a container, whether it'll come back if you kill it, or whether some contractor's cron job spins it up every night at 2am. You end up chaining together `ps -ef --forest`, `systemctl status`, `docker ps`, and a fair amount of guessing.

<a href="https://github.com/pranshuparmar/witr" target="_blank">witr</a> is a small Go CLI that collapses that whole ritual into one query. Point it at a port, a PID, a process name, or a container, and it walks the process tree back to the root and prints the causal chain: which supervisor started it, when, and what's still keeping it alive.

{{% tldr %}}
**witr** answers "why is this running?" for any process, port, container, or file, in one command.

- Query by `--port`, `--pid`, process name, `--file`, or `--container`; get the full ancestry chain back to PID 1
- Detects the actual supervisor: systemd (with unit name and schedule), launchd, PM2, cron, Docker/Podman/Kubernetes, an SSH session, or an interactive shell inside tmux/screen
- Flags risk automatically: public-interface binds, root processes with dangerous capabilities, deleted binaries, repeated restarts
- Ships as a single static binary for Linux, macOS, Windows, and FreeBSD, with an interactive TUI (`witr` with no args) alongside the scriptable CLI (`--json`, `--short`, exit codes for automation)
- Once witr confirms which local service actually owns a port, you can expose that exact port with a <a href="https://pinggy.io" target="_blank">Pinggy</a> tunnel (`ssh -p 443 -R0:localhost:<port> free.pinggy.io`) instead of guessing and rebinding it to `0.0.0.0`
{{% /tldr %}}

## The problem with the tools we already have

`ps`, `top`, `lsof`, `ss`, `systemctl`, and `docker ps` are all answering the same underlying question from different angles, and none of them answer it directly. `lsof -i :8080` tells you a PID owns that port. `ps -p <pid> -o ppid,cmd` gives you its parent. From there you're manually walking up the tree, cross-referencing `systemctl status`, checking `docker inspect`, and hoping nobody nested three levels of supervisors between PID 1 and the process you actually care about.

That manual chase is exactly the failure mode witr's README targets: witr treats ports, containers, files, and commands as different entry points into the same underlying question, then answers it by walking the process ancestry once and printing the whole story.

## What a query actually looks like

The output format is the whole pitch. Ask about a port:

```
$ witr --port 5432

Target      : postgres
Process     : postgres (pid 2311)
User        : postgres
Command     : postgres -D /var/lib/postgresql/data
Started     : 14 days ago

Why It Exists :
  systemd (pid 1) → docker (pid 891) → containerd-shim (pid 2298) → postgres (pid 2311)

Source      : docker container "prod-db" (image: postgres:16)
Context     : Working Dir: / | Public vs private bind: public (0.0.0.0)
Warnings    : listening on public interface 0.0.0.0
```

That single block replaces at least three separate commands you'd otherwise run by hand, and it surfaces the one line - `listening on public interface 0.0.0.0` - that a `docker ps` or `lsof` output would never call out on its own.

Name-based and PID-based queries follow the same shape. A process spawned by a supervisor you don't normally think about shows exactly that:

```
$ witr node --short

systemd (pid 1) → pm2 (pid 5034) → node (pid 14233)
```

or as a tree, for when the ancestry has more than one branch worth seeing:

```
$ witr --pid 143895 --tree

systemd (pid 1)
  └─ sshd: user@pts/2 (pid 143858)
    └─ tmux: server (pid 143859)
      └─ bash (pid 143886)
        └─ node index.js (pid 143895)
```

`--short` and `--tree` exist for a reason: `--json` and matching exit codes (0 clean, 1 warnings, 2 not found, 3 permission denied) mean the same query slots straight into a CI health check or an incident-response runbook without any output parsing hacks.

## The part that's actually new: "Source" and "Warnings"

Two fields do most of the work. **Source** identifies the specific mechanism keeping a process alive, not just its immediate parent - a systemd unit and its schedule, a launchd plist, an SSH session with the remote IP, a cron job, or a shell wrapped in tmux/screen. That's the difference between "the parent PID is bash" and "someone SSH'd in from 203.0.113.4, opened a tmux session, and has had this running for six days."

**Warnings** is the closest thing to opinionated advice the tool offers, and it's a plain list of non-blocking observations: a process running as root, dangerous Linux capabilities on a non-root process, a binary that's been deleted out from under a running process, restarts that happened more than expected, memory usage that's climbed for 90+ days straight, and - the one that matters most for anyone who tunnels services - **listening on a public interface**.

That last flag is worth sitting with for a second. It's easy to `docker run -p 0.0.0.0:5432:5432` out of habit, forget you did it, and leave a database reachable from the entire internet with nothing standing guard but its own password. witr won't fix the bind for you, but it will tell you it's there the next time you go looking, which is more than `docker ps` does by default.

## Installing it and where the TUI helps

Install is a single command - `curl -fsSL https://raw.githubusercontent.com/pranshuparmar/witr/main/install.sh | bash` on Linux/macOS/FreeBSD, `irm .../install.ps1 | iex` on Windows PowerShell, or through Homebrew, Conda, APT, the AUR, Winget, npm, or `go install github.com/pranshuparmar/witr/cmd/witr@latest` if you'd rather build from source. No runtime, no config file, one static binary.

Running `witr` with no arguments launches an interactive TUI: Processes, Ports, Containers, and Locks as separate tabs, each sortable and filterable, with a side panel showing the ancestry tree for whatever row is highlighted. It auto-refreshes on an adaptive cadence, supports mouse navigation, and lets you send signals (kill, terminate, pause, resume) directly from the process detail view. That's the mode worth reaching for on a machine you didn't provision yourself - a shared staging box, a server you inherited, a container image you're debugging for the first time - where you don't yet know which of the forty listening ports actually matter.

The Locks tab is a smaller but genuinely useful addition: system-wide file locks (POSIX/flock on Linux, lsof-derived on macOS/FreeBSD), which answers a related but distinct question - not "why is this running" but "why can't I delete/rename/unmount this file."

## Where it doesn't help

witr's causal chain stops at the process boundary. It'll tell you PM2 launched your Node app and systemd launched PM2, but it won't tell you *why* the code inside that Node process opened the socket it did, or what's calling that HTTP endpoint from across the network. It's a process-and-port tool, not an APM or a network tracer - `strace`, `tcpdump`, or your app's own logs are still the next step once you've confirmed which process you're actually looking at.

Platform coverage is also uneven by design, which the README is upfront about: environment-variable inspection is restricted on macOS by SIP and on Windows for protected processes; systemd-timer and launchd-interval schedule detection doesn't exist on Windows or FreeBSD; Snap/Flatpak detection is Linux-only. None of that undermines the core use case, but it's worth knowing before you reach for witr as your only diagnostic tool on a mixed fleet.

## Pairing it with a tunnel

The workflow this tool is actually built for - find out what's running on a port before you touch it - pairs naturally with anything that changes what's reachable on that port. If `witr --port 3000` confirms the process you meant to expose (and not, say, a leftover `python -m http.server` from three weeks ago), the safer move is a tunnel scoped to exactly that port rather than rebinding the service to `0.0.0.0` and hoping your firewall rules are still correct:

```
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

That prints a public HTTPS URL - something like `https://abc123.a.pinggy.link` - that forwards to the service witr just confirmed is running, without touching the bind address or opening the port to the whole internet. Close the SSH session and the URL stops resolving. It's a smaller, more deliberate blast radius than the "just bind it to `0.0.0.0` and forget about it" pattern that shows up in witr's own warning list.
