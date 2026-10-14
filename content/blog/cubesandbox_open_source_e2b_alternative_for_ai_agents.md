---
title: "CubeSandbox: Tencent's Open Source E2B Alternative for AI Agents"
description: "Tencent open-sourced CubeSandbox, an E2B-compatible, self-hosted sandbox for AI agents with sub-60ms cold starts. Here's how it works, and how to get it a public URL with Pinggy."
date: 2026-07-07T10:00:00+05:30
draft: false
tags: ["CubeSandbox", "AI agents", "E2B", "sandboxing", "Tencent", "self-hosted", "microVM", "KVM", "developer tools", "Pinggy"]
categories: ["Technology", "AI Tools", "Developer Tools"]
og_image: "images/cubesandbox_open_source_e2b_alternative_for_ai_agents/cubesandbox_open_source_e2b_alternative_for_ai_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEdldCBhIFB1YmxpYyBVUkwgZm9yIGEgU2VsZi1Ib3N0ZWQgQ3ViZVNhbmRib3ggd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gZGVwbG95aW5nIEN1YmVTYW5kYm94LCBhbiBvcGVuIHNvdXJjZSBFMkItY29tcGF0aWJsZSBBSSBhZ2VudCBzYW5kYm94LCBhbmQgZXhwb3NpbmcgaXRzIGNvbnNvbGUgb3IgYSBzcGVjaWZpYyBzYW5kYm94IHBvcnQgdG8gdGhlIGludGVybmV0IHVzaW5nIGEgUGluZ2d5IFNTSCB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRlcGxveSBDdWJlU2FuZGJveCIsCiAgICAgICJ0ZXh0IjogIlJ1biB0aGUgb25lLWNsaWNrIGluc3RhbGxlciBvbiBhbiB4ODZfNjQgTGludXggc2VydmVyIHdpdGggS1ZNIHN1cHBvcnQ6IGN1cmwgLXNMIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5jZW50Y2xvdWQvQ3ViZVNhbmRib3gvcmF3L21hc3Rlci9kZXBsb3kvb25lLWNsaWNrL29ubGluZS1pbnN0YWxsLnNoIHwgQ1VCRV9QVk1fRU5BQkxFPTEgYmFzaCIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25maXJtIHRoZSBjb25zb2xlIGlzIHJ1bm5pbmcgbG9jYWxseSIsCiAgICAgICJ0ZXh0IjogIk9wZW4gaHR0cDovL2xvY2FsaG9zdDoxMjA4OCBvbiB0aGUgbWFjaGluZSBydW5uaW5nIEN1YmVTYW5kYm94IHRvIGNvbmZpcm0gdGhlIHdlYiBjb25zb2xlIGFuZCBDdWJlQVBJIChwb3J0IDMwMDApIGFyZSB1cC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHRoZSBjb25zb2xlIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjEyMDg4IGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgZm9yIHRoZSBDdWJlU2FuZGJveCBjb25zb2xlLCBubyBETlMgb3IgVExTIGNlcnRpZmljYXRlIHNldHVwIHJlcXVpcmVkLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSZWFjaCBhIHNwZWNpZmljIHNhbmRib3ggcG9ydCIsCiAgICAgICJ0ZXh0IjogIlVzZSBDdWJlUHJveHkgcGF0aC1iYXNlZCByb3V0aW5nIChodHRwOi8vPGhvc3Q+Ojxwb3J0Pi9zYW5kYm94LzxpZD4vPHBvcnQ+LzxwYXRoPikgYW5kIHR1bm5lbCB0aGF0IHNhbWUgcG9ydCB3aXRoIFBpbmdneSB0byBzaGFyZSBhIGxpdmUgcHJldmlldyBvZiB3aGF0ZXZlciBpcyBydW5uaW5nIGluc2lkZSBhIHNhbmRib3guIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "cubesandbox_open_source_e2b_alternative_for_ai_agents/cubesandbox_open_source_e2b_alternative_for_ai_agents_banner.webp" "Tencent open-sources CubeSandbox, an E2B-compatible AI agent sandbox with sub-60ms cold starts, 8.2k GitHub stars, under 5MB memory overhead, and support for over 2,000 concurrent sandboxes on a 96-core server" >}}

Tencent Cloud open-sourced its AI agent sandbox under Apache 2.0 back in April, and it's the kind of project that keeps resurfacing on GitHub's trending page months later: {{< link href="https://github.com/TencentCloud/CubeSandbox" >}}CubeSandbox{{< /link >}}, currently sitting at 8.2k stars and 687 forks. The pitch is simple - a sandbox for running AI-agent-generated code that boots in under 60ms, costs under 5MB of memory overhead per instance, and speaks the same API as {{< link href="https://e2b.dev/" >}}E2B{{< /link >}}, the hosted sandbox service a lot of coding-agent products build on. Point your existing E2B SDK code at your own server instead of E2B's cloud, and it mostly just works.

That's a genuinely useful thing to open source, and Tencent didn't hold anything back: this is the full production stack, not a stripped-down demo. But if you actually stand it up on a spare box or a home server, you'll hit the same wall every self-hoster hits eventually - getting traffic in from the outside world takes more than a docker-compose file.

{{% tldr %}}
1. **What it is**: CubeSandbox is an open source (Apache 2.0), self-hosted sandbox for AI agents built on RustVMM and KVM - microVMs with dedicated guest kernels, not shared-kernel containers.
2. **The numbers**: sub-60ms cold start (P95 90ms under 50 concurrent creations), under 5MB memory overhead per sandbox, and over 2,000 sandboxes running concurrently on a single 96-core server.
3. **Why it matters**: it's a drop-in replacement for the E2B SDK - `Sandbox.create(template=...)` works against your own CubeAPI endpoint with a URL change, no code rewrite.
4. **The catch**: E2B's cloud gives you `sandbox.getHost(port)` and a public HTTPS URL for free. Self-hosted CubeSandbox expects you to bring your own wildcard DNS record and TLS certificate for that.
5. **The fix**: a Pinggy SSH tunnel gets you a public HTTPS URL for the CubeSandbox console, or for a specific port inside a sandbox, in one command - no DNS, no certificate, no open firewall port.
{{% /tldr %}}

## What CubeSandbox actually is

The problem CubeSandbox is solving is an old one with a new twist. AI coding agents write and run code constantly - Python snippets from a code interpreter, shell commands from an autonomous dev agent, browser automation scripts. Running that code on the same machine as everything else is a bad idea, because some fraction of it is going to be wrong, and a growing fraction of it is going to be actively malicious (prompt-injected instructions trying to exfiltrate credentials, for instance). You need isolation.

The usual choices both have a cost. Docker containers share the host kernel, which means a kernel exploit escapes every container on the box - fast to start, weak isolation. Full VMs get you a dedicated kernel per workload, real isolation, but they're slow to boot and heavy on memory, which matters a lot when an agent framework wants to spin up a fresh sandbox per task and throw it away thirty seconds later.

CubeSandbox is built on RustVMM and KVM to sit in between: a microVM with its own guest kernel (so a compromised sandbox can't touch the host kernel) that still boots in under 60ms. The published benchmarks put single-concurrency cold start at 60ms, and 67ms average / 90ms P95 / 137ms P99 under 50 concurrent sandbox creations - fast enough that "spin up a fresh sandbox per agent task" stops being a design concession. Memory overhead is under 5MB per instance, and Tencent's own numbers claim over 2,000 concurrent sandboxes on a single 96-core server.

The part that actually explains why this is trending is narrower: it's API-compatible with {{< link href="https://e2b.dev/" >}}E2B{{< /link >}}. If your agent stack already calls `Sandbox.create()` from the `e2b_code_interpreter` SDK, pointing it at a self-hosted CubeAPI endpoint instead of E2B's cloud is close to a one-line change:

```python
import os
from e2b_code_interpreter import Sandbox

with Sandbox.create(template=os.environ["CUBE_TEMPLATE_ID"]) as sandbox:
    result = sandbox.run_code("print('Hello from Cube Sandbox!')")
```

For anyone who built on E2B's SDK because it was the fastest way to ship, that compatibility is the whole story. You get to keep the code you wrote and swap out who's billing you for the compute.

## The architecture, briefly

CubeSandbox isn't one binary, it's a small distributed system:

- **CubeAPI** - the REST gateway, compatible with the E2B protocol
- **CubeMaster** - the cluster orchestrator that schedules sandboxes across nodes
- **Cubelet** - runs on each node, manages local sandbox lifecycle
- **CubeHypervisor / CubeShim** - the KVM integration layer that actually boots the microVMs
- **CubeEgress** - an OpenResty-based gateway that filters outbound traffic (domain allowlists, credential vaulting so API keys never enter the sandbox)
- **CubeVS** - an eBPF-based virtual switch enforcing network isolation at the kernel level

Sandboxes aren't limited to one-shot code execution either. The docs describe hosting long-running agent processes, and full service stacks - Redis, MySQL, a headless browser, a whole dev environment - inside a sandbox, with millisecond-granularity snapshot, clone, and rollback. The latest release (v0.3.0, 82 commits from 22 contributors) added CubeCoW, a copy-on-write snapshot engine, plus a preview of an AgentHub console and a Go SDK to go with the existing Python one.

| | Docker | Traditional VM | CubeSandbox |
|---|---|---|---|
| Boot time | ~200ms | seconds | under 60ms |
| Isolation | shared kernel | dedicated kernel | dedicated kernel + eBPF |
| Memory overhead | low | high | under 5MB |
| E2B SDK compatible | no | no | yes, drop-in |

## The catch: you now own the networking

Here's the part that doesn't show up in the benchmark table. When you run a web server on a port inside an E2B sandbox, E2B's cloud gives you a working public HTTPS URL for it automatically - `sandbox.getHost(3000)` returns a hostname, and `https://` that hostname routes straight to port 3000 inside the sandbox. That's not sandboxing, that's ingress, and E2B operates the wildcard DNS and edge routing that makes it work as a managed service. It's easy to take for granted until you're running the equivalent yourself.

CubeSandbox's own docs are upfront about this. Getting a real public URL for something inside a self-hosted sandbox needs a wildcard DNS record pointing at whatever machine is running CubeProxy:

```
*.your.domain.com  →  <IP of the node running CubeProxy>
```

and a TLS certificate to go with it - either `mkcert` for local development (fine for testing, not trusted outside your own machine) or your own certificate wired into CubeProxy's nginx config for anything production-facing. There's a fallback that skips DNS entirely, path-based routing through CubeProxy (`http://<host>:<port>/sandbox/<id>/<port>/<path>`), but that still assumes the host itself is reachable from wherever you're trying to connect from - which, if you're running this on a laptop, a homelab box, or a VM sitting behind a NAT without a public IP, it isn't.

None of this is a knock on the project. Owning your own ingress is the tradeoff you make in exchange for owning your own compute - it's the same tradeoff behind every "self-host X" story. It just means the fast, drop-in E2B-SDK experience stops at the sandbox boundary. Getting a URL out of it is still on you.

## Getting a public URL without the DNS dance

{{< image "cubesandbox_open_source_e2b_alternative_for_ai_agents/pinggy_tunnel_diagram.webp" "Diagram showing a self-hosted CubeSandbox with no public IP connected through a Pinggy SSH reverse tunnel to a public HTTPS URL, using the command ssh -p 443 -R0:localhost:12088 free.pinggy.io" >}}

This is exactly the gap {{< link href="https://pinggy.io/" >}}Pinggy{{< /link >}} is built for: turning a port on a machine with no public IP into a real, TLS-terminated public URL, without touching DNS or a firewall.

{{< llm-context >}}To get a public URL for a self-hosted CubeSandbox with Pinggy - deploy CubeSandbox with the one-click installer (web console starts on port 12088), then in a new terminal run `ssh -p 443 -R0:localhost:12088 free.pinggy.io` to get a public HTTPS URL for the console.{{< /llm-context >}}

### Step 1: Get CubeSandbox running

Follow CubeSandbox's own quick start on an x86_64 Linux machine with KVM support:

```bash
curl -sL https://github.com/tencentcloud/CubeSandbox/raw/master/deploy/one-click/online-install.sh | CUBE_PVM_ENABLE=1 bash
```

This brings up the REST API on port 3000 and the web console on port 12088, backed by Docker Compose for the supporting services. Confirm it's alive locally:

```bash
curl http://localhost:12088
```

### Step 2: Tunnel the console with Pinggy

In a second terminal, no signup or install required:

```bash
ssh -p 443 -R0:localhost:12088 free.pinggy.io
```

Pinggy prints back a public HTTPS URL, something like `https://abc123.a.free.pinggy.link`, that proxies straight to port 12088 on your machine. That URL works from your phone, from a teammate's laptop, from anywhere - no wildcard DNS record, no certificate to generate or renew, and nothing to open on your router or cloud security group. If your CubeSandbox box is a home server or a laptop sitting behind CGNAT, this is the difference between "reachable" and "not reachable" full stop.

### Step 3: Reach a specific sandbox, not just the console

The console tunnel is useful for admin access, but the more interesting case is a service running *inside* a sandbox - say an agent that built a small web app and you want to see it live, or a webhook receiver an agent stood up that needs a real callback URL to test against. CubeProxy's path-based routing gets you there without DNS:

```
http://<control-node-IP>:<cubeproxy-port>/sandbox/<sandbox-id>/<port>/<path>
```

Tunnel that same CubeProxy port with Pinggy the same way as step 2, and the resulting public URL reaches straight into the sandbox. It's the same trick used for {{< link href="/blog/expose_mcp_server_with_pinggy/" >}}exposing a local MCP server{{< /link >}}: the service never needs to know it's being reached from the internet, it just needs a tunnel pointed at the port it's already listening on.

## Where this actually pays off

The self-hosting math is worth spelling out, because it's the reason this repo is getting attention beyond the isolation-and-performance pitch. E2B's cloud bills by the second - a 2 vCPU / 4 GiB sandbox runs around $0.17/hour in compute on top of a $150/month Pro plan once you're past the free tier's 20-concurrent-sandbox, one-hour-session limits. That's a completely reasonable price for not running any infrastructure yourself. But if you're running an agent product that spins up hundreds of sandboxes a day, or you're an indie developer who'd rather burn a few hours on `nginx.conf` than a monthly SaaS bill, owning a box that can hold 2,000+ concurrent sandboxes changes the arithmetic fast.

Pinggy doesn't replace CubeSandbox's production networking guide - if you're running this for real traffic at scale, you'll eventually want the wildcard DNS and a real certificate the docs describe. What it replaces is the fifteen minutes of DNS and TLS setup standing between "I just deployed this" and "I can actually hit it from outside my LAN," which is exactly the kind of friction that makes people give up on self-hosting halfway through a Saturday afternoon.

## Conclusion

CubeSandbox is a legitimately interesting release: Tencent shipped the whole production stack, not a teaser, and the E2B SDK compatibility means switching costs almost nothing if you're already building on that API. The sub-60ms boot times and sub-5MB overhead numbers hold up against Docker on the speed side and against full VMs on the isolation side, which is the combination that's hard to get right.

What it doesn't ship with is a hosted ingress layer, because that's not really a sandbox feature, it's a platform feature, and platforms are what you're opting out of by self-hosting. If you're standing up CubeSandbox on hardware without a public IP, or you just don't want to manage a wildcard certificate for a side project, a Pinggy tunnel gets you from "running on my machine" to "reachable from the internet" in the time it takes to type one SSH command.
