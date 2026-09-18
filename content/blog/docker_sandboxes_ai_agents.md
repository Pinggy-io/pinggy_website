---
title: "Docker Sandboxes: Giving Your AI Coding Agent Its Own Disposable microVM"
description: "Docker shipped Docker Sandboxes, a new sbx CLI that runs Claude Code, Codex, and Copilot CLI inside a disposable microVM instead of your host. Here's the architecture, what it isolates, what HN pushed back on, and how to preview a dev server running inside one."
date: 2026-08-10T16:20:00+05:30
draft: false
tags: ["Docker Sandboxes", "sbx CLI", "AI coding agents", "microVM", "Claude Code", "sandboxing", "developer tools", "Docker"]
categories: ["Technology", "AI", "Developer Tools"]
og_image: "images/docker_sandboxes_ai_agents/docker_sandboxes_ai_agents_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "docker_sandboxes_ai_agents/docker_sandboxes_ai_agents_banner.webp" "Hero graphic showing Docker Sandboxes running a coding agent inside an isolated microVM with its own Docker daemon and closed network, separate from the untouched host machine" >}}

Letting a coding agent run with `--dangerously-skip-permissions` on your actual laptop is the kind of thing you do once, get away with, and then think better of. Docker's answer, shipped this month, is a CLI called `sbx` that puts the agent in a disposable microVM instead: its own kernel, its own Docker daemon, its own filesystem, and a network that's closed by default. The pitch is that you get the isolation of a full VM without the boot-time tax that made people skip sandboxing in the first place.

{{% tldr %}}
1. **What it is:** `sbx`, a CLI that launches AI coding agents (Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode, Kiro) inside a dedicated microVM instead of on your host machine.
2. **Why microVMs, not containers:** containers sharing your kernel plus a mounted Docker socket give an agent a real path back to the host. A microVM boots its own kernel, so a compromised or overzealous agent has no way out.
3. **Why not just use Firecracker:** Firecracker only runs on Linux/KVM. Docker wrote a new VMM from scratch that uses Hypervisor.framework on macOS, the Windows Hypervisor Platform on Windows, and KVM on Linux, so the isolation model works the same on a developer laptop as it would in the cloud.
4. **Networking is closed by default.** A dev server the agent starts inside the sandbox isn't reachable from your browser until you explicitly publish a port with `sbx ports --publish 8080:3000`, and even then it only lands on `127.0.0.1` on your own machine.
5. **What HN pushed back on:** `sbx` requires a Docker login for a local tool, and despite Docker's Linux roots, there's no native Linux build yet, only macOS and Windows. Several commenters also pointed out that container-based isolation (which Docker itself argues against here) is well understood, mature, and already free via gVisor, Kata, or plain bubblewrap.
6. **The part that matters for previewing your work:** even after you publish a port, it's still just `localhost` on your laptop. Getting a real URL to it, one you can open on your phone or hand to a teammate, takes a tunnel.
{{% /tldr %}}

## The problem Docker is actually solving

Coding agents got good enough this year that the interesting failure mode stopped being "wrong answer" and started being "right answer, wrong blast radius." An agent with shell access that's told to clean up a project directory doesn't need to be malicious to run `rm -rf` somewhere you didn't mean; it just needs to be confidently wrong once. Docker's own framing of this is blunt: no sandboxing is fine right up until "one `rm -rf`, one leaked `.env`, one rogue network call, and the blast radius is your entire machine."

The obvious fix, run the agent in a container, has a specific problem for coding agents in particular: they usually need Docker themselves, to build images, run test suites in containers, or spin up a `docker compose` stack. Giving a container access to Docker means either mounting the host's Docker socket (which is close to root on the host) or nesting Docker-in-Docker, which needs privileged mode. Either way, the isolation boundary you wanted gets a hole punched straight through it. Full VMs solve that cleanly, at the cost of the slow cold starts and resource overhead that make people reach for `--skip-permissions` and hope for the best instead of spinning one up for every session.

Docker's stated reasoning for skipping WebAssembly sandboxes as an alternative is worth noting too: V8 isolates are fast to spin up, but "hardening V8 is difficult, and security bugs in the V8 engine surface more frequently than in mature hypervisors," and a WASM sandbox can't run arbitrary shell commands or install system packages anyway, which is most of what a coding agent actually does.

## What a Docker Sandbox actually is

Each `sbx` session gets a dedicated microVM, not a container, with its own kernel. That's the same hardware-level isolation boundary a full VM gives you, applied per-agent-session instead of per-host. Inside it:

- **A private, VM-isolated Docker daemon.** The agent gets full `docker build`, `docker run`, and `docker compose`, with no socket mounting and no host-level privileges, because the daemon it's talking to lives entirely inside its own microVM.
- **Only the project workspace mounted.** The rest of your filesystem, your other projects, your SSH keys, your shell history, simply isn't visible from inside the sandbox.
- **Credentials injected at runtime, not baked in.** A local proxy hands out the actual secret to outbound requests; the agent process itself never holds it.
- **No path back to the host**, by design rather than by convention. Docker's own line on this is the clearest summary of why: "An LLM deciding its own security boundaries is not a security model. The bounding box has to come from infrastructure, not from a system prompt."

Because it's a real microVM and not a stripped-down runtime, nothing inside is stubbed or simulated. The agent can clone a repo, install dependencies, run a full test suite, build images, and open a pull request, exactly like it would on your machine, just not *on* your machine.

## Why a custom VMM instead of Firecracker

If you've touched serverless infrastructure, "microVM" probably means Firecracker, the KVM-based VMM AWS built for Lambda and open-sourced in 2018. Docker looked at reusing it and ran into a hard limit: Firecracker is Linux/KVM only, full stop, and coding agents run on developer laptops, which are mostly macOS and Windows.

So Docker wrote a new VMM, targeting the hypervisor each OS already ships:

| Platform | Hypervisor used |
|---|---|
| macOS | Apple's Hypervisor.framework |
| Windows | Windows Hypervisor Platform |
| Linux | KVM |

The point of a single codebase across all three isn't just convenience, it's that there's no translation layer or emulation tax sitting between the sandbox and the isolation guarantees each OS's native hypervisor provides. Docker's framing of the tradeoff they were chasing: "MicroVMs eliminate that asterisk. You get VM-grade isolation with cold starts fast enough that there's no reason to skip it, and full Docker support inside the sandbox." Fair warning: Docker doesn't publish an actual cold-start number in its architecture writeup, so "fast enough" is a claim worth testing against your own machine rather than taking as a benchmark.

## The part that matters once the agent is actually running something

Here's where this stops being an abstract security story and turns into a plumbing one. Say the agent inside the sandbox does exactly what you asked: it scaffolds a small app and starts a dev server on port 3000. By design, that port is not reachable from your browser. Sandboxes are network-isolated, so "your browser or local tools can't reach a server running inside one by default."

{{< image "docker_sandboxes_ai_agents/docker_sandboxes_ai_agents_pipeline.webp" "Diagram showing the path from an agent's dev server inside a Docker Sandbox, through sbx ports --publish to localhost on the host, and then through a Pinggy tunnel to a public HTTPS URL reachable from a phone or webhook" >}}

To see it, you publish the port explicitly:

```bash
sbx run --publish 8080:3000 --name my-sandbox claude
```

or for a sandbox that's already running:

```bash
sbx ports my-sandbox --publish 8080:3000
open http://localhost:8080
```

`sbx ls` shows you exactly what's mapped where:

```
SANDBOX         AGENT   STATUS   PORTS                    WORKSPACE
my-sandbox      claude  running  127.0.0.1:8080->3000/tcp /home/user/proj
```

Notice the address: `127.0.0.1`. That's the correct, secure default, and it's also exactly as far as it goes. The port is bound to your loopback interface, not your LAN, not the internet. Your phone can't hit it. A teammate you want a quick look from can't hit it. A real webhook from Stripe or GitHub, if that's what the agent just wired up, definitely can't hit it. `sbx` solved "who can reach into your machine" (nobody, by default, on purpose) and in doing so recreated the exact problem every `localhost:3000` dev server has always had: it's genuinely local.

That's a tunnel's job, and it composes cleanly with everything `sbx` just did, because the sandbox never has to know a tunnel exists. You publish the port to your host like the docs describe, then run:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

That opens a reverse SSH tunnel and hands back a public HTTPS URL that forwards straight to `127.0.0.1:8080`, which forwards straight into the sandbox's port 3000. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} needs no account for casual use and no client software beyond the `ssh` binary you already have. Open the URL on your phone to check the layout actually works on a small screen, paste it into Slack for a teammate to click, or point a real webhook sender at it to test the flow the agent just built, all without deploying anything or opening a port on your router. `Ctrl+C` kills the tunnel when you're done, and the URL stops resolving.

It's a small addition on top of what `sbx` already does, but it's the addition that turns "the agent built something in an isolated box" into "I can actually show someone the thing it built."

## What Hacker News didn't let slide

The {{< link href="https://news.ycombinator.com/item?id=49239751" >}}launch thread{{< /link >}} was not a pile-on, but it wasn't a coronation either, and the specific objections are worth knowing before you install this:

- **`sbx login` is required for a local sandboxing tool.** Multiple commenters flagged this as an odd requirement for something that's fundamentally running on your own machine, with the obvious worry being that a tool this deep in your dev workflow shouldn't need an account just to launch.
- **No native Linux support yet**, which several people called out as ironic given Docker's origins. If your dev machine runs Linux, `sbx` isn't for you today; you're stuck with macOS or Windows.
- **Containers vs. microVMs is a real, ongoing argument, not a solved one.** Commenters pointed out that gVisor and Kata Containers already offer hypervisor-grade isolation reduction on the syscall surface without a full separate kernel per session, and that plenty of people already run equivalent setups with QEMU, Incus/LXD, or bubblewrap namespaces at zero cost. The pushback wasn't "microVMs are wrong," it was "this problem already has mature, open solutions, and Docker packaging its own version isn't automatically better."

None of that makes the security model wrong, kernel-per-session isolation is a genuinely stronger guarantee than a shared-kernel container with a mounted socket, but it's worth going in knowing this launched into a space with real incumbents and real skeptics, not a green field.

## Where this sits next to E2B, Daytona, and Modal

If you've looked at sandboxing for AI agents before, you've probably run into E2B, Daytona, or Modal's sandbox feature, and it's worth being precise about how `sbx` differs, because the category name overlaps but the product doesn't. E2B and Daytona are both cloud-hosted, per-execution sandbox APIs: you call an SDK, a Firecracker microVM (E2B) or a container with optional Kata/Sysbox hardening (Daytona) spins up somewhere in their infrastructure, your code runs, and you get results back over the network. They're built to be embedded inside a SaaS product that needs to execute arbitrary, possibly untrusted, user or agent-generated code at request time, and they bill for it by the vCPU-hour and GiB-hour the sandbox is alive. Modal's sandboxes use gVisor instead of hardware virtualization and drop compute billing to zero when idle, but the shape is the same: it's infrastructure you rent, reached over the network, not something running on your laptop.

`sbx` is a different animal entirely. It runs locally, on the machine you're already developing on, and it's aimed at a narrower problem: letting the coding agent you're already running in your terminal operate without supervision, without giving it your actual filesystem and network. You're not paying per vCPU-hour, and there's no API to integrate; you're running a CLI the same way you'd run `docker run`. That's also exactly why the tunnel gap exists for `sbx` and not really for the others: E2B, Daytona, and Modal sandboxes are cloud infrastructure, so exposing a port from one is a networking decision their platform already makes for you. `sbx` sandboxes live on your laptop, behind your NAT, same as any other localhost process, which is precisely the situation a tunnel is built for.

## Should you actually use it

If your coding agent workflow already involves `--dangerously-skip-permissions` or an equivalent auto-approve mode, because typing "yes" to every file edit gets old fast, `sbx` is a meaningfully better place to point that autonomy than your bare host, and it's free to try if you're on macOS or Windows. The Docker daemon-inside-a-microVM detail matters more than it sounds: a lot of agent workflows genuinely need Docker itself, and this is the first sandboxing approach that gives an agent a real one without punching a hole in the isolation to do it.

If you're on Linux, or you're not comfortable with a local CLI requiring an account, the community alternatives the HN thread surfaced, gVisor, Kata Containers, or a hand-rolled bubblewrap or QEMU setup, get you a comparable security boundary today without either constraint. And if what you actually need is a sandbox reachable from a web product rather than a local terminal session, E2B, Daytona, or Modal are the better fit; that's a different problem than the one `sbx` is solving.

## Conclusion

The interesting part of Docker Sandboxes isn't the word "microVM," it's the acknowledgment baked into the design: an agent shouldn't get to decide its own boundaries, and the boundary shouldn't cost you enough speed that you're tempted to skip it. Whether `sbx` becomes the default way people run autonomous coding agents locally, or a Linux gap and a login prompt push people back toward gVisor and Kata, comes down to execution over the next few releases, not the launch post. Either way, the moment an agent inside one of these boxes builds something worth looking at, you'll hit the same wall everyone building on `localhost` always has: it's local until you decide to make it not.
