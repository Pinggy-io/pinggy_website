---
 title: "Ngrok - But without downloading anything" 
 description: "Get a public URL for localhost without installing anything. Pinggy runs over the ssh client already on macOS, Linux and Windows, while ngrok needs its agent, or an account with an uploaded SSH key."
 date: 2023-08-12T14:15:25+05:30
 lastmod: 2026-11-18T14:15:25+05:30
 draft: false 
 tags: ["ngrok", "ssh", "tunneling"]
 og_image: "/assets/header.webp"
 outputs:
  - HTML
  - AMP
---

Ngrok made localhost tunnels a normal part of web development, but it starts with an install: download the agent for your OS, add an authtoken, then run it. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} skips that step. It runs over the `ssh` client that's already on your machine, so one command gets you a public URL for a local port:

```bash
ssh -p 443 -R0:localhost:8000 qr@free.pinggy.io
```

The `qr@` prefix prints a QR code of the tunnel URL in your terminal, which is handy for opening the app on a phone. Use plain `free.pinggy.io` if you only want the URL.

{{< video poster="/assets/tunnelvideothumb.jpg" src="/assets/qr.webm" >}}

## Ngrok needs its agent or an uploaded SSH key

The usual ngrok setup on a Mac looks like this ({{< link href="https://ngrok.com/downloads/mac-os" >}}ngrok's download page{{< /link >}} has the Windows and Linux versions):

```bash
brew install ngrok
ngrok config add-authtoken "<YOUR_AUTHTOKEN>"
ngrok http 80
```

That's an install, an account and a token before the first request reaches your app. It's fine on your own laptop, and more annoying on a locked-down work machine, a fresh VM or a Raspberry Pi you SSH'd into five minutes ago.

Ngrok does have an SSH option, `ssh -R 443:localhost:80 v2@connect.ngrok-agent.com http`, but it only works once you have an ngrok account and have uploaded your SSH public key in the dashboard. Ngrok's own {{< link href="https://ngrok.com/docs/agent/ssh-reverse-tunnel-agent" >}}SSH reverse tunnel docs{{< /link >}} say you should only use it "if you really can't use an Agent or SDK". Over SSH, endpoints don't reconnect after a network drop, and there's no equivalent to the agent's traffic inspection interface.

## Pinggy works with the ssh client you already have

macOS and Linux ship with `ssh`, and Windows 10 (build 1809 and later) and Windows 11 have a built-in OpenSSH client, listed under Optional Features if it isn't turned on yet. Pinggy needs nothing else for HTTP(S), TCP and TLS tunnels. Pick your port and options here and copy the command:

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true tryYourselfText="Paste one command to start tunnel:" >}}
{{< /pinggytunnel >}}

The free tier needs no sign-up. Each tunnel runs for 60 minutes and gets a new random URL when you reconnect, with unlimited transfer. Visitors on a browser see a one-time screening page on free tunnels, much like ngrok's interstitial, but `curl` and API clients go straight through, so webhook deliveries from Stripe or GitHub reach your app untouched. UDP tunnels are the one case that needs a seperate download: SSH can't carry UDP, so those use the Pinggy CLI, which is still in beta.

If the connection drops on an idle network, add `-o ServerAliveInterval=60` to the command, or keep the keepalive option above switched on.

## Inspect and replay requests without installing anything

Add `-L4300:localhost:4300` to the command and Pinggy's web debugger runs on your own machine:

```bash
ssh -p 443 -R0:localhost:8080 -L4300:localhost:4300 free.pinggy.io
```

Then open `http://localhost:4300`. If port 4300 is taken, map another local port instead, for example `-L9999:localhost:4300`. It works on free tunnels without signing in.

{{< figure src="/assets/webdebug.webp" alt="Logging, Inspecting & Replaying HTTP requests using Pinggy" >}}

The web debugger lets you:

1. Inspect incoming requests: method, headers and body.
2. Check your server's responses: status codes and headers.
3. Replay a request as it arrived.
4. Edit a request's method, path, HTTP version or headers, then replay it.

This is the piece ngrok's SSH route leaves out, so on ngrok you're back to installing the agent if you want to inspect traffic locally.

## Pinggy vs ngrok on free and paid plans

| | Pinggy | Ngrok |
|---|---|---|
| Install | None, uses `ssh` (CLI only for UDP) | Agent; SSH only with an account and an uploaded key |
| Sign-up for a free tunnel | No | Yes |
| Free tier | 60-minute tunnels, unlimited transfer | 3 endpoints, 1GB transfer, 20k HTTP requests |
| Browser warning on free | One-time screening page; API clients skip it | Interstitial on all browser HTML traffic |
| UDP | Yes, with the Pinggy CLI | No |
| Apex domains | Yes, on Pro | No |
| Cheapest paid plan | $3/month, or $2.50 billed yearly | $10/month, or $8 billed yearly |
| Remote terminal | 1 device free, 25 on Pro | No built-in remote terminal |

Pinggy **Pro** is $3/month, or $2.50/month billed yearly. It removes the 60-minute limit and the screening page, and adds persistent subdomains, custom and wildcard domains (apex domains included), persistent TCP and UDP ports, teams, and [remote terminals](/remote-terminal/) for up to 25 devices. Ngrok's cheapest plan, Hobbyist, is $10/month or $8/month billed yearly with 5GB of transfer included, and custom domains need the $20 Pay-as-you-go plan. For a wider comparison, see our [Top 10 ngrok alternatives](/blog/best_ngrok_alternatives/).

## Conclusion

If you only need a public URL for a while, the install is the slowest part of ngrok. Pinggy turns it into one `ssh` command that works on teh machines you already have, including servers and VMs where you can't or don't want to install anything. When you need UDP or a stable domain, the Pinggy CLI and the Pro plan cover them without changing how you start a tunnel.
