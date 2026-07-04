---
title: "chrome-devtools-mcp Is Trending: How to Use It When Your Coding Agent Isn't on Your Laptop"
description: "chrome-devtools-mcp lets AI coding agents drive a real Chrome browser for debugging and testing. Here's what the official tool does, and how to reach your local dev server (or your own Chrome) from a remote agent using a Pinggy tunnel."
date: 2026-07-04T11:30:00+05:30
draft: false
tags: ["chrome-devtools-mcp", "MCP", "Model Context Protocol", "AI coding agents", "Claude Code", "Chrome DevTools Protocol", "developer tools", "SSH tunnel"]
categories: ["Technology", "AI Tools", "Developer Tools"]
og_image: "images/chrome_devtools_mcp_remote_coding_agents/chrome_devtools_mcp_remote_coding_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFVzZSBjaHJvbWUtZGV2dG9vbHMtbWNwIHdpdGggYSBSZW1vdGUgQ29kaW5nIEFnZW50IHZpYSBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gZXhwb3NpbmcgYSBsb2NhbCBkZXYgc2VydmVyIG9yIGEgbG9jYWwgQ2hyb21lIHJlbW90ZSBkZWJ1Z2dpbmcgcG9ydCB3aXRoIFBpbmdneSBzbyBhIHJlbW90ZSBjb2RpbmcgYWdlbnQgcnVubmluZyBjaHJvbWUtZGV2dG9vbHMtbWNwIGNhbiByZWFjaCBpdC4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBjaHJvbWUtZGV2dG9vbHMtbWNwIiwKICAgICAgInRleHQiOiAiQWRkIGNocm9tZS1kZXZ0b29scy1tY3AgdG8geW91ciBNQ1AgY2xpZW50IGNvbmZpZyB1c2luZyBucHggLXkgY2hyb21lLWRldnRvb2xzLW1jcEBsYXRlc3QsIG9yIHJ1biBpdCB3aXRoIC0taGVhZGxlc3Mgb24gYSByZW1vdGUgYWdlbnQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IHlvdXIgbG9jYWwgZGV2IHNlcnZlciIsCiAgICAgICJ0ZXh0IjogIlJ1biB5b3VyIGFwcCBsb2NhbGx5LCBmb3IgZXhhbXBsZSBvbiBsb2NhbGhvc3Q6MzAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIGl0IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIGluIGEgdGVybWluYWwgdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBmb3IgeW91ciBkZXYgc2VydmVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQb2ludCB0aGUgYWdlbnQgYXQgdGhlIHR1bm5lbCBVUkwiLAogICAgICAidGV4dCI6ICJUZWxsIHlvdXIgY29kaW5nIGFnZW50IHRvIHVzZSBuYXZpZ2F0ZV9wYWdlIHdpdGggdGhlIFBpbmdneSBIVFRQUyBVUkwgaW5zdGVhZCBvZiBsb2NhbGhvc3Qgc28gdGhlIHJlbW90ZSBicm93c2VyIGNhbiByZWFjaCB5b3VyIGFwcC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3B0aW9uYWw6IGRyaXZlIHlvdXIgYWN0dWFsIGxvY2FsIENocm9tZSIsCiAgICAgICJ0ZXh0IjogIkxhdW5jaCBDaHJvbWUgd2l0aCAtLXJlbW90ZS1kZWJ1Z2dpbmctcG9ydD05MjIyLCBleHBvc2UgcG9ydCA5MjIyIHdpdGggYSBQaW5nZ3kgVENQIHR1bm5lbCByZXN0cmljdGVkIGJ5IElQIHdoaXRlbGlzdCwgdGhlbiBjb25maWd1cmUgY2hyb21lLWRldnRvb2xzLW1jcCB3aXRoIC0tYnJvd3Nlci11cmwgcG9pbnRpbmcgYXQgdGhlIHR1bm5lbC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "chrome_devtools_mcp_remote_coding_agents/chrome_devtools_mcp_remote_coding_agents_banner.webp" "Diagram showing a coding agent's chrome-devtools-mcp connecting through a Pinggy tunnel to reach a local dev server or local Chrome instance" >}}

{{< llm-context >}}To let a remote coding agent's chrome-devtools-mcp reach your local dev server with Pinggy - run your app locally (e.g. on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL, and point the agent's navigate_page tool at that URL instead of localhost.{{< /llm-context >}}

`chrome-devtools-mcp` is sitting in GitHub's daily trending list right now, and it's not another wrapper project - it's built and maintained by the Chrome DevTools team itself. It turns an MCP-compatible coding agent (Claude Code, Cursor, Copilot, Gemini CLI, and a dozen others) into something that can open a real Chrome browser, click through your app, read the console, capture a performance trace, and diff two heap snapshots, instead of guessing what your frontend is doing from source code alone.

It's a genuinely useful tool. It's also easy to run into a wall with the moment your agent and your browser aren't on the same machine - which is increasingly often, now that coding agents run in cloud sandboxes, devcontainers, and CI runners as much as on a laptop. This post covers what the tool actually does, why the localhost problem shows up, and two ways to fix it with a Pinggy tunnel.

{{% tldr %}}
1. Install `chrome-devtools-mcp` in your MCP client config:
   ```json
   { "mcpServers": { "chrome-devtools": { "command": "npx", "args": ["-y", "chrome-devtools-mcp@latest"] } } }
   ```
2. If your agent runs remotely, expose your local dev server with Pinggy:
   ```bash
   ssh -p 443 -R0:localhost:3000 free.pinggy.io
   ```
   Then have the agent `navigate_page` to the printed `https://xxxx.a.pinggy.link` URL instead of `localhost:3000`.
3. To have the remote agent drive your *actual* local Chrome (same cookies, same logged-in session), launch Chrome with `--remote-debugging-port=9222`, expose that port with a Pinggy TCP tunnel restricted to the sandbox's IP, then point `chrome-devtools-mcp` at it with `--browser-url=http://TUNNEL_HOST:PORT`.
{{% /tldr %}}

## What chrome-devtools-mcp Actually Gives Your Agent

The setup is one line in your MCP client config:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

That's it - no API key, no separate service to run. The `npx` command downloads the server, launches a managed Chrome instance, and exposes it as 51 tools across eight categories, according to the project's own tool reference:

- **Input automation** - click, drag, fill forms, hover, type, upload files
- **Navigation** - open tabs, switch between them, wait for content to appear
- **Emulation** - simulate devices, network conditions, and viewport sizes
- **Performance** - record and analyze Chrome performance traces
- **Network** - inspect individual requests or list everything the page fired
- **Debugging** - screenshots, accessibility snapshots, console messages, Lighthouse audits, screencasts
- **Memory** - take and diff heap snapshots, trace retaining paths for leaks
- **Extensions** - install, reload, and trigger unpacked Chrome extensions

The practical effect is that an agent stops guessing. Instead of inferring "the button probably didn't fire" from reading your React component, it can click the actual button, read the actual console error, and check the actual network request that did or didn't go out. For anyone who's spent time pasting screenshots and error logs into a chat window by hand, this is the obvious next step.

There's also a slimmer mode for agents that don't need the full toolset:

```json
{ "args": ["-y", "chrome-devtools-mcp@latest", "--slim", "--headless"] }
```

## The Catch: Your Agent's Browser Might Not Be Anywhere Near Your App

Here's the assumption baked into most examples you'll find for this tool: your coding agent, `chrome-devtools-mcp`, the Chrome instance it launches, and your `localhost:3000` dev server are all on the same machine. In that world, `navigate_page` to `http://localhost:3000` just works, because everything shares one network namespace.

That assumption breaks the moment your agent runs somewhere else. Claude Code on the web, a GitHub Codespace, a devcontainer, a remote pair-programming box, a CI job running an agent as part of a test suite - in all of these, `chrome-devtools-mcp` launches its Chrome instance *inside that remote environment*, not on your laptop. The browser it controls has its own network namespace, and `localhost` inside a cloud sandbox resolves to the sandbox, not to the machine where your dev server is actually listening on port 3000.

The agent will happily try to navigate to `http://localhost:3000` and get a connection refused, because from its point of view, nothing is listening there. It's not a bug in the tool - it's just that "localhost" quietly stopped meaning what everyone assumed it meant.

## Fix 1: Tunnel Your Dev Server, Not the Browser

The simplest fix is to stop pointing the agent at `localhost` at all. Give your dev server a public URL and navigate to that instead.

{{< pinggytunnel box="true" mode="http" tunnelstring="Paste this command to start the tunnel:" portstring="Local Dev Server Port" localport="3000" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

Run the equivalent from your terminal:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

Pinggy prints a public HTTPS URL, something like `https://rndm-abcd1234.a.pinggy.link`. Now, instead of asking the agent to check `localhost:3000`, tell it to use the tunnel URL:

> Use chrome-devtools-mcp to open https://rndm-abcd1234.a.pinggy.link, click the "Sign up" button, and tell me what the console shows.

The agent's `navigate_page` call reaches your dev server the same way any other visitor on the internet would - through the tunnel, over port 443, no VPN or firewall rule required on your end. This works identically whether the agent is running in a browser tab, a cloud sandbox, or a teammate's CI pipeline, because a public URL doesn't care where the request comes from.

This is the right fix when all you need is for the agent's Chrome to reach your *app*. It's not, however, the same browser you'd see if you opened Chrome yourself - the agent is still driving its own instance, with its own cookies and its own session.

## Fix 2: Let the Remote Agent Drive Your Actual Local Chrome

Sometimes you want the opposite: not a fresh, cookie-less Chrome in the cloud, but *your* browser, with your logged-in sessions, your extensions, and your open tabs, controlled by an agent that happens to be running remotely. `chrome-devtools-mcp` supports this directly - it can attach to an existing Chrome instance instead of launching its own, via `--browser-url` or `--autoConnect`.

{{< image "chrome_devtools_mcp_remote_coding_agents/chrome_devtools_mcp_remote_coding_agents_cdp_tunnel_diagram.webp" "Diagram showing Chrome's remote debugging port tunneled through Pinggy with an IP whitelist, so a remote chrome-devtools-mcp instance can attach to it" >}}

First, launch Chrome on your machine with its debugging port open:

```bash
google-chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-agent-profile
```

That port speaks the Chrome DevTools Protocol in plain HTTP and WebSocket, listening only on `localhost` by default. To let a remote sandbox reach it, expose it with a Pinggy TCP tunnel, which forwards raw bytes rather than terminating HTTP itself - so CDP's HTTP/WebSocket traffic passes through untouched:

```bash
ssh -p 443 -R0:localhost:9222 tcp@free.pinggy.io
```

This prints something like `tcp://rndm-abcd1234.a.pinggy.link:41234`. On the remote agent's side, point `chrome-devtools-mcp` at that address (using `http://`, since CDP itself is plain HTTP over the tunnel, not TLS):

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "-y", "chrome-devtools-mcp@latest",
        "--browser-url=http://rndm-abcd1234.a.pinggy.link:41234"
      ]
    }
  }
}
```

Now when the agent calls `take_screenshot` or `list_console_messages`, it's talking to the Chrome window actually open on your desk - you can watch it click through your app in real time.

**A security note worth taking seriously.** The Chrome DevTools Protocol has no authentication of its own - anyone who can reach that port can read cookies, execute arbitrary JavaScript in your pages, and generally do anything you can do in that browser. Don't leave a CDP tunnel open to the world. Lock it down with Pinggy's IP whitelisting, restricting the tunnel to your sandbox's known IP address:

```bash
ssh -p 443 -R0:localhost:9222 -t tcp@free.pinggy.io w:SANDBOX_IP
```

And close the tunnel the moment you're done - a free-tier Pinggy tunnel dies with the SSH connection anyway, which is a reasonable default safety net if you forget.

## Headless Mode for CI

If the goal is automated checks rather than interactive debugging - say, an agent running in CI that opens a preview deployment and checks for console errors on every pull request - skip the tunnel-to-your-desktop pattern entirely and run headless Chrome inside the CI job itself:

```json
{ "args": ["-y", "chrome-devtools-mcp@latest", "--headless"] }
```

Point that headless instance at a Pinggy-tunneled preview URL (Fix 1) if the app under test is still running on someone's laptop rather than a real staging deployment. It's a pattern that shows up more than you'd expect - "the fix works, but only on my machine" turning into "and now the CI agent can verify that, too."

## Which Fix to Reach For

- **Testing your own app from a remote agent:** tunnel the dev server (Fix 1). Simple, no CDP security exposure, works with any MCP client out of the box.
- **Debugging something session-dependent - a paywall, an OAuth flow, an admin panel you're already logged into:** tunnel the CDP port and drive your local Chrome (Fix 2). More setup, but the agent sees exactly what you see.
- **CI checks on every deploy:** headless Chrome inside the CI job, pointed at a tunneled or real preview URL.

None of this is unique to Pinggy - any tunnel that can forward a TCP or HTTP port would do the underlying job. The reason it's a five-second setup rather than a fifteen-minute one is that Pinggy runs over plain SSH on port 443, needs no account or client install for the free tier, and gives you a real public URL immediately: `ssh -p 443 -R0:localhost:PORT free.pinggy.io` and you're done.

## Conclusion

`chrome-devtools-mcp` is a genuinely well-built tool from the team that owns Chrome DevTools, and the fact that it's trending says something about how much of the coding-agent workflow is quietly shifting from "read the code" to "drive the actual browser." The rough edge is that most of its examples assume agent and browser and app all live on one machine - an assumption that's already wrong for anyone running Claude Code on the web, a Codespace, or a CI-driven agent. A Pinggy tunnel is a small, boring fix for that: expose the dev server, or expose the browser's own debugging port, and the "localhost problem" stops being a problem at all.
