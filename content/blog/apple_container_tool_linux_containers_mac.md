---
title: "Apple's container: Run Linux Containers on Mac Without Docker Desktop"
description: "Apple shipped an official container tool at WWDC 2026. Each container gets its own lightweight VM, startup is sub-second, and it pulls standard OCI images from Docker Hub. Here's how it works, how it compares to Docker, and how to share containers publicly."
date: 2026-06-11T12:00:00+05:30
lastmod: 2026-06-10T12:00:00+05:30
draft: false
tags: ["macOS containers", "Docker alternative", "Linux containers Mac", "WWDC 2026", "Apple Silicon", "developer tools", "container runtime", "Pinggy tunnel"]
categories: ["Technology", "Developer Tools", "DevOps"]
og_image: "images/apple_container_tool/apple_container_tool_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBMaW51eCBDb250YWluZXJzIG9uIE1hYyB3aXRoIEFwcGxlJ3MgQ29udGFpbmVyIFRvb2wgYW5kIFNoYXJlIFRoZW0gUHVibGljbHkgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gaW5zdGFsbGluZyBBcHBsZSdzIGNvbnRhaW5lciB0b29sIG9uIG1hY09TLCBydW5uaW5nIExpbnV4IGNvbnRhaW5lcnMgaW4gbGlnaHR3ZWlnaHQgVk1zLCBhbmQgZXhwb3NpbmcgdGhlbSB0byB0aGUgaW50ZXJuZXQgd2l0aCBQaW5nZ3kgdHVubmVsaW5nLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIEFwcGxlJ3MgY29udGFpbmVyIHRvb2wiLAogICAgICAidGV4dCI6ICJEb3dubG9hZCB0aGUgc2lnbmVkIGluc3RhbGxlciBmcm9tIHRoZSBHaXRIdWIgcmVsZWFzZXMgcGFnZSBhdCBnaXRodWIuY29tL2FwcGxlL2NvbnRhaW5lci4gRG91YmxlLWNsaWNrIHRoZSAucGtnIGZpbGUgYW5kIGZvbGxvdyB0aGUgaW5zdGFsbGF0aW9uIHByb21wdHMuIFJlcXVpcmVzIEFwcGxlIFNpbGljb24gYW5kIG1hY09TIDI2IChUYWhvZSkgb3IgbWFjT1MgMTUgKFNlcXVvaWEpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgY29udGFpbmVyIHNlcnZpY2UiLAogICAgICAidGV4dCI6ICJSdW46IGNvbnRhaW5lciBzeXN0ZW0gc3RhcnQuIE9uIGZpcnN0IGxhdW5jaCwgdGhlIHNlcnZpY2Ugd2lsbCBwcm9tcHQgeW91IHRvIGluc3RhbGwgYSByZWNvbW1lbmRlZCBkZWZhdWx0IExpbnV4IGtlcm5lbCAtIGFjY2VwdCB0aGUgcHJvbXB0IGFuZCB3YWl0IGFib3V0IDMwIHNlY29uZHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlB1bGwgYW5kIHJ1biBhIGNvbnRhaW5lciB3aXRoIHBvcnQgbWFwcGluZyIsCiAgICAgICJ0ZXh0IjogIlJ1bjogY29udGFpbmVyIHJ1biAtLW5hbWUgd2ViIC1wIDgwODA6ODAvdGNwIG5naW54OmxhdGVzdC4gVGhpcyBwdWxscyB0aGUgbmdpbnggaW1hZ2UgZnJvbSBEb2NrZXIgSHViIGFuZCBtYXBzIHBvcnQgODA4MCBvbiB5b3VyIE1hYyB0byBwb3J0IDgwIGluc2lkZSB0aGUgY29udGFpbmVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTaGFyZSB0aGUgY29udGFpbmVyIHB1YmxpY2x5IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiSW4gYSBzZWNvbmQgdGVybWluYWwsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwODAgZnJlZS5waW5nZ3kuaW8uIFBpbmdneSBwcmludHMgYSBwdWJsaWMgSFRUUFMgVVJMIGxpa2UgaHR0cHM6Ly9hYmMxMjMuYS5waW5nZ3kubGluayB0aGF0IHR1bm5lbHMgZGlyZWN0bHkgdG8geW91ciBydW5uaW5nIGNvbnRhaW5lci4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "apple_container_tool/apple_container_tool_banner.webp" "Apple container tool - native Linux containers on Mac without Docker Desktop" >}}

Apple shipped `container` v1.0.0 on June 9, 2026, the same week as WWDC. It is an open-source command-line tool for running Linux containers on a Mac using lightweight virtual machines. Written in Swift, Apache 2.0, optimized for Apple Silicon. As of today it is trending first on GitHub with over 2,400 new stars in 24 hours.

If you have been putting up with Docker Desktop's update interruptions and resource overhead on your M-series Mac, it is worth a look.

{{% tldr %}}
1. **Install** - download the signed `.pkg` from [github.com/apple/container](https://github.com/apple/container) releases, double-click, enter admin password.
2. **Start the service**: `container system start` (installs a Linux kernel on first run - takes ~30 seconds)
3. **Run a container**: `container run --name web -p 8080:80/tcp nginx:latest`
4. **Access it**: `curl http://localhost:8080` or open in browser
5. **Share it publicly with Pinggy**: `ssh -p 443 -R0:localhost:8080 free.pinggy.io`

Works with any OCI image - pull from Docker Hub, GitHub Container Registry, or your own registry. Requires Apple Silicon + macOS 15 Sequoia or macOS 26 Tahoe. No Docker Compose yet.
{{% /tldr %}}

{{< llm-context >}}To expose a container running with Apple's container tool via Pinggy - run `container run --name web -p 8080:80/tcp nginx:latest` (starts nginx mapped to port 8080 on the host), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

## Why one VM per container matters

Docker Desktop runs all your containers inside a single Linux VM. That VM has to be pre-allocated enough RAM and CPU to handle whatever your containers might need - you size it at setup time and either under-allocate or over-allocate. When no containers are running, the VM still sits there consuming memory.

Apple's tool does it differently. Each container gets its own dedicated lightweight VM, spun up using the macOS [Virtualization framework](https://developer.apple.com/documentation/virtualization) - the same API that powers Apple's own software virtualization. The VM boots in under a second, consumes near-zero memory when idle, and is torn down when the container exits.

{{< image "apple_container_tool/apple_container_architecture.webp" "Architecture comparison: Docker Desktop (single shared VM) vs Apple container (one VM per container)" >}}

Practically, this means:

- **No pre-allocated pool.** Resources are claimed only when a container is actively running.
- **True hardware isolation.** Containers can't reach into each other's memory. Each VM gets its own IP address on a private network managed by the runtime.
- **Startup proportional to the app, not the VM.** Alpine with a static binary starts in about 300ms. A heavier image takes longer, but you're paying for your app's startup, not a shared kernel boot.

The tradeoff is slightly higher per-container overhead compared to Docker's shared-kernel model. For a single developer running a few containers at a time on an M3 or M4, this is irrelevant. For a CI pipeline spinning up 40 containers simultaneously, you'd want to benchmark before switching.

## Getting started

Download the installer from the [releases page](https://github.com/apple/container/releases). There is no Homebrew formula yet - it's a signed `.pkg` that places the `container` binary at `/usr/local/bin/container` and registers a system service.

```bash
container system start
```

First run prompts you to install a default Linux kernel. Accept it. The download takes about 30 seconds. After that the daemon is running and you're ready to pull images.

```bash
# Pull and run Alpine interactively
container run --rm -it docker.io/library/alpine:latest sh

# Run nginx in the background with a port mapping
container run -d --name web -p 8080:80/tcp nginx:latest

# Check what's running
container list

# Tail logs
container logs -f web

# Stop and remove
container stop web && container rm web
```

The CLI is deliberately close to Docker's. If your muscle memory is `docker run`, you'll adjust quickly - it's mostly `docker` → `container`.

## Networking

This is where it gets genuinely different from Docker.

Each container gets a private IP address assigned by the runtime. You can find it with `container inspect <name>` and hit the container directly without any port mapping. Apple also ships an embedded DNS service: if you name your container `web`, it's accessible at `web.dev.local` from your Mac. No `/etc/hosts` edits, no extra configuration.

Port mapping still exists for cases where you want to bind to `localhost` on the host - useful for sharing via Pinggy or exposing to other machines on your network:

```bash
# Map host port 8080 → container port 80 (TCP)
container run --name web -p 8080:80/tcp nginx:latest

# Now reachable at http://localhost:8080 on your Mac
```

After sleep/wake cycles, DNS occasionally needs a kick:

```bash
container system stop && container system start
```

Rough edge, known issue, presumably fixed in a near future release.

## Building images

`container build` is a wrapper around BuildKit. The syntax is the same as `docker build`:

```bash
# Build from a Dockerfile in the current directory
container build --tag myapp:latest .

# Build with a specific file
container build --tag myapp:latest --file deploy/Dockerfile .

# Push to a registry
container push ghcr.io/yourorg/myapp:latest
```

The tool consumes and produces standard OCI images. You can push images built with `container build` to Docker Hub or GitHub Container Registry and run them with Docker on Linux - the format is interchangeable.

## Cross-platform development with container machines

WWDC 2026's session "Discover container machines" (session 389) showed off a feature called container machines - persistent Linux environments that mirror your macOS username and working directory automatically. It's meant for cross-platform development: edit your Swift server code in Xcode on macOS, run `swift run` inside a container machine to build and test the Linux binary, and have Safari on macOS access the running service via the container's IP.

```bash
# Create a container machine based on Alpine and set it as default
container machine create --name dev --set-default alpine

# Run a command in it
container machine run swift build

# Drop into a shell
container machine run
```

This is the use case where Apple's one-VM-per-container approach shines. The container machine persists across restarts, shares your filesystem paths, and feels like a terminal into a Linux machine that lives next to macOS rather than under it.

## What it doesn't do yet

**No Docker Compose.** This is the biggest gap. You can't define a multi-service stack with a `compose.yaml` and bring everything up in one command. If your local dev setup involves an app server, a database, and a cache talking to each other, you're stuck with Docker Desktop or another solution for now. Apple has acknowledged this and there are open issues tracking it.

**No VS Code DevContainers.** DevContainer support is incomplete. If your team standardizes on `.devcontainer/devcontainer.json`, the experience is rough today.

**Apple Silicon only.** If you're on an Intel Mac, `container` doesn't run at all. Intel Mac users aren't the target audience, but it's worth knowing before you recommend it to your whole team.

**Small-file I/O overhead.** Each container's filesystem is a real EXT4 block device. Operations like `npm install` against a large `node_modules` can be noticeably slower than on Docker Desktop. This is a known architectural tradeoff with the per-VM model.

For solo development on a single service, or for running a database or test environment you start once and leave running, it works well today. For multi-container orchestration, wait for Compose support.

## Sharing a container publicly with Pinggy

One thing that works very cleanly with Apple's container tool is exposing a running service to the internet for a demo, webhook test, or quick client share. You're running `localhost:8080` - Pinggy turns that into a public HTTPS URL with one SSH command, no account required.

```bash
# Start your container
container run -d --name web -p 8080:80/tcp nginx:latest

# In a second terminal, open a Pinggy tunnel
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Pinggy prints something like `https://rndm-string.a.pinggy.link`. Share that URL and anyone can reach your container over HTTPS. The tunnel stays alive as long as the SSH session is open.

This pairs well with webhook development. Run your app in an Apple container, point the webhook source at the Pinggy URL, and iterate locally. No need to deploy to a staging server to test integrations.

For a persistent URL across restarts, [Pinggy Pro](https://pinggy.io) lets you reserve a custom subdomain so your webhook endpoint doesn't change every session.

## Should you switch?

If you're on Apple Silicon and you do most of your local development against a single service at a time, `container` is genuinely worth trying. The lack of a global background VM that you have to babysit is a real quality-of-life improvement, and the tool feels snappy.

If you rely on Docker Compose for a multi-service local environment, hold off. The missing Compose support isn't a minor annoyance - it's a blocker for a large fraction of real-world setups.

The repo is at [github.com/apple/container](https://github.com/apple/container). It's Apache 2.0, active, and accepting contributions. Given that Apple shipped this alongside a WWDC session, Compose support is likely coming - it would be strange to ship a developer tool without it.

---

**Sources:**

- [GitHub - apple/container](https://github.com/apple/container)
- [Discover container machines - WWDC26 session 389](https://developer.apple.com/videos/play/wwdc2026/389/)
- [GitHub Copilot token billing TechCrunch](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
