---
title: "Expose a Cua Computer-Use Agent Desktop with Pinggy"
description: "Cua gives an AI agent a real desktop to click around in, viewable at localhost:6901 with no password by default. Here's how to reach it from outside your network - safely - with one Pinggy SSH command."
date: 2026-09-22T12:30:00+05:30
draft: false
tags: ["Cua", "AI agents", "Docker", "self-hosted", "SSH tunnel"]
categories: ["Technology", "Developer Tools", "AI Tools"]
og_image: "images/expose_cua_computer_use_agent_with_pinggy/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEV4cG9zZSBhIEN1YSBDb21wdXRlci1Vc2UgQWdlbnQgRGVza3RvcCB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byByZWFjaGluZyBhIGxvY2FsIEN1YSBjb21wdXRlci11c2UgYWdlbnQgc2FuZGJveCAobm9WTkMgdmlld2VyIGFuZCBDb21wdXRlciBTZXJ2ZXIgQVBJKSBmcm9tIG91dHNpZGUgeW91ciBuZXR3b3JrIHVzaW5nIGEgcGFzc3dvcmQtcHJvdGVjdGVkIFBpbmdneSBTU0ggdHVubmVsLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSdW4gdGhlIEN1YSBYRkNFIGNvbnRhaW5lciIsCiAgICAgICJ0ZXh0IjogImRvY2tlciBydW4gLS1ybSAtaXQgLS1zaG0tc2l6ZT01MTJtIC1wIDU5MDE6NTkwMSAtcCA2OTAxOjY5MDEgLXAgODAwMDo4MDAwIHRyeWN1YS9jdWEteGZjZTpsYXRlc3QiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IGl0IGxvY2FsbHkiLAogICAgICAidGV4dCI6ICJPcGVuIGh0dHA6Ly9sb2NhbGhvc3Q6NjkwMSBpbiBhIGJyb3dzZXIgdG8gY29uZmlybSB0aGUgbm9WTkMgZGVza3RvcCBsb2FkcyBiZWZvcmUgZXhwb3NpbmcgYW55dGhpbmcuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSB0aGUgdmlld2VyIHdpdGggUGluZ2d5LCB3aXRoIGF1dGgiLAogICAgICAidGV4dCI6ICJzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NjkwMSBmcmVlLnBpbmdneS5pbyAtVCAtLSBiOnVzZXI6cGFzcyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJPcGVuIHRoZSBwdWJsaWMgVVJMIiwKICAgICAgInRleHQiOiAiVmlzaXQgdGhlIHByaW50ZWQgaHR0cHM6Ly94eHh4LnBpbmdneS5saW5rIFVSTCwgZW50ZXIgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCwgYW5kIHdhdGNoIG9yIGNvbnRyb2wgdGhlIGFnZW50IGRlc2t0b3AgZnJvbSBhbnl3aGVyZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "expose_cua_computer_use_agent_with_pinggy/banner.webp" "Your computer-use AI agent has a whole desktop. Now watch it work from anywhere, with a Pinggy SSH tunnel command." >}}

Computer-use agents don't call an API and get back JSON. They get a screen, a mouse, and a keyboard, and they do whatever a human would do: open an app, click through a form, read what's on screen, react. <a href="https://github.com/trycua/cua" target="_blank">Cua</a> - its own tagline is "Docker for Computer-Use AI Agents" - packages that idea into a container you can run in one command: a full XFCE Linux desktop with a VNC server, a browser-based noVNC viewer, and an HTTP/WebSocket API an agent can drive.

It's a genuinely fun thing to run locally. It's also, out of the box, a full remote-controllable desktop listening with no password on it. That combination is worth being deliberate about the moment you want to reach it from anywhere other than the machine it's running on.

{{% tldr %}}
1. **Run the sandbox:**
   ```bash
   docker run --rm -it --shm-size=512m \
     -p 5901:5901 -p 6901:6901 -p 8000:8000 \
     trycua/cua-xfce:latest
   ```
2. **Check it locally first** - open `http://localhost:6901` and confirm the desktop loads before touching a tunnel.
3. **Expose it with Pinggy, with auth baked in** (the viewer itself has none):
   ```bash
   ssh -p 443 -R0:localhost:6901 free.pinggy.io -T -- b:agent:a-real-password
   ```
4. **Open the printed URL**, log in with the username/password you just set, and you're watching (or driving) the agent's desktop from any device on any network.
{{% /tldr %}}

{{< llm-context >}}To expose a Cua computer-use agent desktop with Pinggy - run the sandbox with `docker run --rm -it --shm-size=512m -p 5901:5901 -p 6901:6901 -p 8000:8000 trycua/cua-xfce:latest` (noVNC viewer on port 6901), then run `ssh -p 443 -R0:localhost:6901 free.pinggy.io -T -- b:user:pass` to get a password-protected public HTTPS URL, since the viewer itself ships with no authentication.{{< /llm-context >}}

## What Cua Actually Runs

<a href="https://github.com/trycua/cua" target="_blank">Cua</a> is an open-source project (25,000+ GitHub stars at the time of writing) built around one idea: give an AI agent a real computer instead of a sandboxed API surface. The most common way to try it is the XFCE container - Ubuntu 22.04 with a lightweight desktop, a TigerVNC server, noVNC for browser access, and a bundled **Computer Server** that exposes screenshots, clicks, and keystrokes over HTTP and WebSocket so an agent SDK can drive the machine programmatically.

```bash
docker pull trycua/cua-xfce:latest
docker run --rm -it --shm-size=512m \
  -p 5901:5901 -p 6901:6901 -p 8000:8000 \
  trycua/cua-xfce:latest
```

Three ports, three jobs:

- **5901** - raw VNC, for a native VNC client
- **6901** - noVNC, the same desktop rendered in a browser tab at `http://localhost:6901`
- **8000** - the Computer Server API, what an agent SDK actually talks to when it takes a screenshot or moves the mouse

Point a browser at `localhost:6901` and you're looking at a live desktop. Point an agent (through Cua's SDK, or MCP) at `localhost:8000` and it can operate that same desktop - open a terminal, fill out a web form, read whatever's rendered on screen. Beyond the self-hosted container, Cua also sells this as a service: <a href="https://cua.ai" target="_blank">Cua Fleets</a> rents you pooled cloud desktops so you don't have to run any of this yourself. The self-hosted route is the one that costs nothing and stays entirely on your machine, which is the appeal for anyone experimenting without a monthly bill attached.

## Everything Above Is Bound to Localhost

That's fine as long as "watching the agent" means sitting at the same machine the container is running on. It stops being fine the moment you want to:

- Check on a long-running agent task from your phone
- Show a teammate what the agent is actually doing, live, instead of narrating it
- Point a cloud-hosted orchestrator or a second machine at this sandbox instead of paying for a hosted Fleet

`localhost:6901` only resolves to `localhost` for the person on that box. Everyone else needs either an open port on your router (bad idea, permanent, and most home connections don't have a static IP to make it durable anyway) or a tunnel.

{{< image "expose_cua_computer_use_agent_with_pinggy/cua_pinggy_architecture.webp" "Diagram showing a Cua XFCE container's noVNC viewer, which ships with no password, reached through a Pinggy SSH tunnel with basic auth added, then used by a person's phone, a teammate, or a cloud orchestrator." >}}

## The Part That Actually Matters: No Password by Default

Here's the detail worth pausing on. The noVNC web interface at port 6901 and the raw VNC on 5901 ship with **no authentication at all**. On `localhost`, that's a non-issue - only processes on your own machine can reach it. The instant you put that port on the public internet, anyone who finds the URL has an unauthenticated, fully interactive session on a desktop that can run shell commands.

So the tunnel command isn't just `ssh -p 443 -R0:localhost:6901 free.pinggy.io`. It's that plus basic auth, which Pinggy adds as a flag on the same command rather than something you'd have to build into the container:

```bash
ssh -p 443 -R0:localhost:6901 free.pinggy.io -T -- b:agent:a-real-password
```

Everything after `--` are Pinggy's own connection options. `b:user:pass` puts HTTP basic auth in front of the tunnel - the browser prompts for credentials before it ever reaches noVNC, so the "no password" problem is solved at the tunnel layer instead of requiring you to patch the container. Swap in a real username and a password you haven't used anywhere else; anyone who has it gets full control of the desktop.

Run it, and you'll see output including a public URL:

```
Host: rndm-agnt1234.pinggy.link
```

Open `https://rndm-agnt1234.pinggy.link`, enter the credentials, and you're looking at the same live desktop, from a phone, a different laptop, wherever.

## Exposing the Agent API Too

If the goal is letting a remote agent orchestrator drive this sandbox instead of just watching it, you want port 8000 (the Computer Server) reachable as well, not just the viewer:

```bash
ssh -p 443 \
  -R0:localhost:6901 \
  -R0:localhost:8000 \
  free.pinggy.io -T -- b:agent:a-real-password
```

Pinggy's free anonymous tier supports multiple forwarded ports in one connection; each gets its own public hostname, printed alongside each other in the output. Point your agent SDK's Computer Server URL at the 8000 tunnel's hostname instead of `localhost:8000`, and the machine running the agent framework no longer needs to be the same machine running the desktop. That's the whole trick behind self-hosting instead of paying for a cloud Fleet: your laptop stays the compute, the tunnel is just the wire.

## Keeping the Session Alive

The free tunnel disconnects after 60 minutes and hands you a fresh random URL on reconnect - fine for a quick check-in, annoying if an agent is mid-task on a long browser automation run. A [Pinggy token](https://dashboard.pinggy.io/) removes the timeout and pins the hostname:

```bash
ssh -p 443 -R0:localhost:6901 -o ServerAliveInterval=60 \
  <token>@pro.pinggy.io -T -- b:agent:a-real-password
```

That keeps the same URL across restarts, which matters if you've bookmarked it or handed it to a teammate.

## Where This Is Actually Useful

**Checking on a long agent run without staying at your desk.** Computer-use tasks - filling out a multi-page form, working through a slow web app, waiting on a page to load - can take a while. Start the tunnel, close your laptop, check progress from your phone over lunch.

**Showing someone what "the agent controls a real desktop" actually looks like.** Screenshots and logs are a poor substitute for watching a cursor move on its own. A live noVNC link does the job in one message.

**Running the sandbox on a beefier home machine while developing from a laptop.** If the Docker container lives on a desktop with more RAM and you're working from a laptop on a different network, tunnel both ports and treat the desktop machine as remote compute, no VPN required.

**Prototyping an agent product without a cloud bill.** Before committing to a hosted Fleet or a cloud GPU box, running the container locally and tunneling it out gets you a real, internet-reachable environment to test integrations against - webhooks, a second service, a demo for a potential customer - for the cost of one SSH command.

---

Cua's pitch is that an agent should get a real computer, not a narrow, purpose-built API. That's a good default for capability and a genuinely risky one for exposure, since a real computer with no password is a real computer anyone can use. Pinggy doesn't change what Cua ships - it just puts a lock on the door before you hand out the address.
