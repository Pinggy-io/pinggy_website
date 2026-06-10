---
title: "Apple's container Tool Hits v1.0: Linux Containers on macOS Without Docker"
description: "Apple's open-source container tool just reached v1.0.0. It runs each Linux container in its own lightweight VM on Apple Silicon, with a Docker-compatible CLI and no daemon required. Here's what it is, how it works, and how to expose your containers to the internet with Pinggy."
date: 2026-06-10T08:00:00+05:30
draft: false
tags: ["Apple Silicon", "Linux containers", "macOS", "Docker alternative", "tunneling", "Pinggy", "developer tools", "containerization", "container machine"]
categories: ["Technology", "Developer Tools", "Containers"]
og_image: "images/apple_container_linux_macos/apple_container_github.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlJ1biBMaW51eCBDb250YWluZXJzIG9uIE1hYyBXaXRob3V0IERvY2tlciBVc2luZyBBcHBsZSdzIGNvbnRhaW5lciBUb29sIiwKICAiZGVzY3JpcHRpb24iOiAiSG93IHRvIGluc3RhbGwgQXBwbGUncyBjb250YWluZXIgdG9vbCBvbiBtYWNPUyAyNiwgcnVuIExpbnV4IGNvbnRhaW5lcnMsIGFuZCBleHBvc2UgY29udGFpbmVyIHBvcnRzIHRvIHRoZSBpbnRlcm5ldCB1c2luZyBQaW5nZ3kgdHVubmVscy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYXBwbGVfY29udGFpbmVyX2xpbnV4X21hY29zL2FwcGxlX2NvbnRhaW5lcl9naXRodWIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIEFwcGxlIGNvbnRhaW5lciIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgdmlhIEhvbWVicmV3OiBicmV3IGluc3RhbGwgYXBwbGUvcGtnL2NvbnRhaW5lciwgdGhlbiBzdGFydCB0aGUgc3lzdGVtIHNlcnZpY2Ugd2l0aCBjb250YWluZXIgc3lzdGVtIHN0YXJ0IgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlB1bGwgYW5kIHJ1biBhIGNvbnRhaW5lciIsCiAgICAgICJ0ZXh0IjogIlB1bGwgYW4gaW1hZ2UgYW5kIHJ1biBpdCB3aXRoIHBvcnQgcHVibGlzaGluZzogY29udGFpbmVyIHJ1biAtZCAtLW5hbWUgd2ViIC1wIDEyNy4wLjAuMTo4MDgwOjgwIGRvY2tlci5pby9saWJyYXJ5L25naW54OmxhdGVzdCIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgcG9ydCB0byB0aGUgaW50ZXJuZXQgd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwODAgZnJlZS5waW5nZ3kuaW8gdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBwb2ludGluZyB0byB5b3VyIGNvbnRhaW5lciIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJUZXN0IHJlbW90ZSBhY2Nlc3MiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBQaW5nZ3kgVVJMIGluIGEgYnJvd3NlciBvciBydW4gY3VybCBhZ2FpbnN0IGl0IHRvIHZlcmlmeSB5b3VyIGNvbnRhaW5lciBpcyBwdWJsaWNseSByZWFjaGFibGUiCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "apple_container_linux_macos/apple_container_github.webp" "Apple's container tool on GitHub - Linux containers on macOS without Docker" >}}

{{< llm-context >}}To run Linux containers on macOS and expose them online with Pinggy - install Apple's container tool (`brew install apple/pkg/container`), start the service with `container system start`, run a container with port publishing (`container run -d -p 127.0.0.1:8080:80 nginx:latest`), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

Yesterday, Apple tagged {{< link href="https://github.com/apple/container/releases/tag/1.0.0" >}}v1.0.0 of `container`{{< /link >}} - its open-source tool for running Linux containers on Apple Silicon Macs. One year after the project first appeared, it's reached stable API. The repo has been trending hard on GitHub today, picking up over 1,300 stars in a single day.

The pitch is simple: OCI-compatible containers, a CLI that'll feel familiar if you've used Docker, and each container running in its own dedicated lightweight virtual machine. No shared kernel, no daemon you have to babysit.

{{% tldr %}}
1. **Install** Apple's `container` tool (requires macOS 26 + Apple Silicon):
   ```bash
   brew install apple/pkg/container
   container system start
   ```

2. **Run a container** with port publishing:
   ```bash
   container run -d --name web -p 127.0.0.1:8080:80 docker.io/library/nginx:latest
   ```

3. **Expose it to the internet** using Pinggy (no install needed):
   ```bash
   ssh -p 443 -R0:localhost:8080 free.pinggy.io
   ```

4. **Get a public URL** - Pinggy prints something like `https://abc123.a.pinggy.link` which forwards directly to your container.
{{% /tldr %}}

## Why this is different from Docker

The fundamental difference is isolation. Docker containers share the host's Linux kernel - that's what makes them fast and lightweight. Apple's `container` takes the opposite approach: every container gets its own minimal Linux kernel running inside a lightweight VM via Apple's `Virtualization.framework`.

The practical tradeoff: slightly more overhead per container (each one boots a kernel), but genuine hardware-level isolation between containers. A compromised container can't do kernel-level tricks against its neighbors. The boot times are still fast - Apple has put real work into making the VMs start quickly.

From a compatibility angle, each container really runs Linux. When you pull `docker.io/library/ubuntu:24.04` and exec into it, you're in an actual Linux environment, not a macOS translation layer. That matters for anything that does low-level syscalls or expects `/proc` to behave like Linux.

The tool is written in Swift and is tightly integrated with macOS internals - networking goes through `vmnet`, images use the same on-disk format as other Apple virtualization tooling.

## What v1.0.0 adds

{{< image "apple_container_linux_macos/apple_container_release.webp" "Apple container v1.0.0 release on GitHub" >}}

The headline feature in this release is `container machine` - a persistent Linux environment that mounts your Mac home directory at `/Users/<username>` inside the VM. Think of it as a WSL equivalent for macOS: you keep editing files in your normal macOS editor, but builds and commands run in Linux.

```bash
# Create a persistent Linux machine from any OCI image
container machine create docker.io/library/ubuntu:24.04 --name dev

# Open a shell into it
container machine run -n dev

# List your machines
container machine ls
```

Once inside, your home directory is already there. You can run `make`, compile a Rust binary, run `apt install` for system tools, all without touching your Mac's Homebrew. The machine persists across reboots - it's not a one-shot container.

Other 1.0.0 changes:
- Configuration moved from UserDefaults to TOML files (easier to version-control)
- `container cp` for copying files between host and container
- `--stop-signal` support
- IPv6 for DNS and port forwarding
- Breaking change: XPC API compatibility with the v0 API has been dropped

## Installation

Requires macOS 26 and an Apple Silicon Mac (M1 or later). Intel Macs aren't supported.

```bash
brew install apple/pkg/container
container system start
```

The system service runs as a launch agent in the background and manages the XPC helpers for image storage, networking, and per-container runtimes. You can stop it with `container system stop` when you're done.

To verify:

```bash
container --version
container system status
```

## Basic usage

The CLI maps closely to Docker's, so if you've used Docker before it feels familiar:

```bash
# Pull an image
container pull docker.io/library/alpine:latest

# Run interactively
container run --rm -it docker.io/library/alpine:latest sh

# Run in the background
container run -d --name redis docker.io/library/redis:latest

# List running containers
container ps

# View logs
container logs redis

# Real-time resource stats
container stats

# Stop and remove
container stop redis
container rm redis
```

Images come from any OCI-compatible registry - Docker Hub, GHCR, a self-hosted registry. You can also build and push with `container build` and `container push`, using a standard Containerfile/Dockerfile.

One thing to note: there's no equivalent of `--net=host` since each container is in its own VM network. If you need container-to-host communication, you can set up a DNS alias:

```bash
sudo container system dns create host.container.internal --localhost 203.0.113.113
```

After that, containers can reach host services at `host.container.internal`. This does require macOS security workarounds (it temporarily disables Private Relay) so it's more of a dev convenience than something you'd set up permanently.

## Port publishing and why localhost-only matters

Port forwarding uses the familiar `-p` / `--publish` flag:

```bash
# Bind to localhost only (default)
container run -d -p 127.0.0.1:8080:80 docker.io/library/nginx:latest

# IPv6
container run -d -p '[::1]:8080:80' docker.io/library/nginx:latest
```

By default the `-p` flag binds to `127.0.0.1` - your Mac's loopback address. The service is reachable at `http://localhost:8080` on your machine, but nothing else on your network can hit it directly.

This is a reasonable default. You don't want random services on your dev machine accidentally exposed. But it creates a problem the moment you need to:

- Test a webhook from GitHub, Stripe, or Slack (they need to reach your server from the outside)
- Show a work-in-progress to a colleague on a different machine
- Test from your phone
- Run integration tests from a CI environment against your local container

This is where Pinggy comes in.

## Exposing a container to the internet with Pinggy

Pinggy creates an SSH tunnel from your local port to a public HTTPS URL. You don't install anything extra - just use the `ssh` binary that's already on your Mac.

First, start your container with a local port binding:

```bash
container run -d --name web -p 127.0.0.1:8080:80 docker.io/library/nginx:latest
```

Verify it's running:

```bash
curl http://localhost:8080
```

Then open a tunnel in a new terminal:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints a URL like `https://abc123.a.pinggy.link`. Anyone with that URL can reach your container - no port forwarding on your router, no firewall rules, nothing.

The `R0` in `-R0:localhost:8080` tells the SSH server to pick a random available remote port and forward it to your local port 8080. Pinggy handles the HTTPS termination, so callers get a valid TLS certificate automatically.

For webhook testing specifically, Pinggy also includes a built-in request inspector at port 4300:

```bash
open http://localhost:4300
```

This shows every incoming request with headers, body, and response - handy for debugging webhook payloads without adding logging to your app.

## The container machine + Pinggy workflow

The `container machine` feature pairs well with this for longer-lived dev environments. Suppose you're running a web app inside a container machine that maps your source code from the Mac side:

```bash
# Start your dev machine
container machine run -n dev

# Inside the machine, start your app
cd myapp && npm start
# App is now running on port 3000 inside the VM
```

From outside the VM, you can't directly reach the app's port since it's inside the machine. But you can bind a port when running the machine, or use `container machine` networking to forward. The simpler path for dev purposes: if the machine runs a service on a specific port, use `container run` with `-p` instead and keep things explicit.

## Multiplatform images

One legitimately useful thing: `container build` can produce both `linux/arm64` and `linux/amd64` images from the same Mac:

```bash
container build --arch arm64 --arch amd64 -t myapp:latest .
```

Since the containers are actual VMs, the `amd64` builds aren't emulation in the traditional sense - they run in a VM with the right instruction set. Build times are slower than native, but the result is a genuine multi-arch image you can push to a registry.

For indie hackers shipping to cloud VMs (almost all of which are x86_64), this means you can build and test the actual deployment image on your M-series Mac without relying on a CI server.

## Limitations worth knowing

**macOS 26 required.** The tool takes advantage of new virtualization and networking APIs in macOS 26. It won't run on Sonoma or earlier without significant networking limitations.

**Apple Silicon only.** No Intel Mac support. If you're still on an Intel machine, Docker Desktop or OrbStack are your options.

**No Docker Compose.** `docker compose up` won't work against `container`. You'd need to manage multi-container setups with shell scripts or a tool that speaks the container CLI directly. This is probably the biggest practical limitation for teams with existing Compose files.

**Pre-1.0 API breakage history.** The project moved fast in its first year - minor version updates dropped breaking changes. The 1.0.0 tag signals a stable API contract going forward, but the ecosystem tooling is still catching up.

**Port forwarding is IPv4/IPv6 loopback only by default.** You can't do `--publish 0.0.0.0:8080:80` to expose to your LAN directly - which is exactly why a tool like Pinggy is useful here.

## Should you switch from Docker?

Probably not entirely, yet. The Docker ecosystem is enormous - Compose, Desktop, Buildx, the whole Scout / Attest / Scout supply chain tooling - and `container` is a year old. If your workflow depends on any of that, you'll be patching things.

That said, for a certain class of use - "I want to run a Linux service locally, isolated from my Mac system, and I don't need the full Docker stack" - `container` is clean. The per-VM isolation is genuinely better for security-sensitive workloads. And for macOS-native development, being able to use the same home directory on both sides with `container machine` removes a lot of friction.

Worth keeping an eye on as the macOS 26 ecosystem matures.

## Resources

- {{< link href="https://github.com/apple/container" >}}github.com/apple/container{{< /link >}} - source, issues, and releases
- {{< link href="https://github.com/apple/container/blob/main/docs/how-to.md" >}}Official how-to docs{{< /link >}} - port publishing syntax, networking, volume mounts
- {{< link href="https://github.com/apple/container/blob/main/docs/container-machine.md" >}}container machine docs{{< /link >}} - the persistent Linux environment feature
- {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} - SSH tunneling to expose local ports, no install required
