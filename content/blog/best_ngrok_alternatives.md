---
title: "Best Ngrok Alternatives in 2026: 10 Tunneling Tools Compared"
description: "The best ngrok alternatives in 2026, compared on price, free tier limits, UDP support and custom domains: Pinggy, Cloudflare Quick Tunnels, Tailscale Funnel, zrok, LocalXpose, Playit.gg and more, plus 5 open source picks."
date: 2023-02-01T14:15:25+05:30
lastmod: 2026-10-06T14:15:25+05:30
draft: false
tags: ["ngrok", "tunneling", "comparison", "AI agents", "open source"]
og_image: "images/best_ngrok_alternatives/img1.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkJlc3QgTmdyb2sgQWx0ZXJuYXRpdmVzIGluIDIwMjY6IDEwIFR1bm5lbGluZyBUb29scyBDb21wYXJlZCIsCiAgImRlc2NyaXB0aW9uIjogIlRoZSBiZXN0IG5ncm9rIGFsdGVybmF0aXZlcyBpbiAyMDI2LCBjb21wYXJlZCBvbiBwcmljZSwgZnJlZSB0aWVyIGxpbWl0cywgVURQIHN1cHBvcnQgYW5kIGN1c3RvbSBkb21haW5zOiBQaW5nZ3ksIENsb3VkZmxhcmUgUXVpY2sgVHVubmVscywgVGFpbHNjYWxlIEZ1bm5lbCwgenJvaywgTG9jYWxYcG9zZSwgUGxheWl0LmdnIGFuZCBtb3JlLCBwbHVzIDUgb3BlbiBzb3VyY2UgcGlja3MuIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDIzLTAyLTAxVDE0OjE1OjI1KzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMDZUMTQ6MTU6MjUrMDU6MzAiLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYmVzdF9uZ3Jva19hbHRlcm5hdGl2ZXMvaW1nMS53ZWJwIiwKICAiYXJ0aWNsZVNlY3Rpb24iOiBbIlRlY2hub2xvZ3kiLCAiR3VpZGVzIiwgIkNvbXBhcmlzb25zIl0sCiAgImtleXdvcmRzIjogWyJOZ3JvayBhbHRlcm5hdGl2ZXMiLCAidHVubmVsaW5nIHRvb2xzIiwgIlBpbmdneSIsICJDbG91ZGZsYXJlIFF1aWNrIFR1bm5lbHMiLCAiVGFpbHNjYWxlIEZ1bm5lbCIsICJ6cm9rIiwgIkxvY2FsdHVubmVsIiwgIkxvY2FsWHBvc2UiLCAiUGxheWl0LmdnIiwgImxvY2FsaG9zdC5ydW4iLCAiSW5sZXRzIiwgIkxvY2FsQ2FuIiwgImZycCIsICJzc2h1dHRsZSIsICJjaGlzZWwiLCAiUGFuZ29saW4iLCAiT3BlblppdGkiLCAiQUkgYWdlbnRzIiwgIkFnZW50IFNraWxscyIsICJNQ1AiXSwKICAicHVibGlzaGVyIjogewogICAgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsCiAgICAibmFtZSI6ICJQaW5nZ3kiLAogICAgImxvZ28iOiB7CiAgICAgICJAdHlwZSI6ICJJbWFnZU9iamVjdCIsCiAgICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYXNzZXRzL3BpbmdneV9sb2dvLnBuZyIKICAgIH0KICB9Cn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "best_ngrok_alternatives/img1.webp" "Illustration of ngrok alternatives with the ngrok, Pinggy, localtunnel, zrok and LocalXpose logos" >}}

Sooner or later, something running on localhost needs a public URL: a webhook from Stripe, a demo for a client, a game server for friends, or a coding agent that needs a real endpoint to test against. A tunnel is the quickest way to get one, and the tool you pick decides what it costs and what it can carry.

{{< link href="https://ngrok.com" >}}Ngrok{{< /link >}} is still the default, but its limits push plenty of people elsewhere. The free plan stops at 1GB of transfer and 20k HTTP requests and shows visitors an interstitial page. The $8-$10 Hobbyist plan includes 5GB, and when its $10 of monthly usage credit runs out, your endpoints stop until the next cycle. There's no UDP at all, and ngrok's own docs say it doesn't support apex domains.

This post compares 10 ngrok alternatives on setup, price, protocols and limits, plus 5 open source tools you can run yourself. Prices, versions and star counts were checked on October 7, 2026.

{{% tldr %}}

1. **The 10 alternatives:** <a href="https://pinggy.io" target="_blank">Pinggy</a>, <a href="https://try.cloudflare.com/" target="_blank">Cloudflare Quick Tunnels</a>, <a href="https://tailscale.com/" target="_blank">Tailscale</a>, <a href="https://zrok.io/" target="_blank">zrok</a>, <a href="https://theboroer.github.io/localtunnel-www/" target="_blank">Localtunnel</a>, <a href="https://localxpose.io/" target="_blank">LocalXpose</a>, <a href="https://playit.gg/" target="_blank">Playit.gg</a>, <a href="https://localhost.run/" target="_blank">localhost.run</a>, <a href="https://inlets.dev/" target="_blank">Inlets</a> and <a href="https://www.localcan.com/" target="_blank">LocalCan</a>.
2. **Cheapest and simplest:** Pinggy needs no install for HTTP, TCP and TLS tunnels and costs $3/month ($2.50 billed yearly) with unlimited bandwidth, UDP tunnels and apex domains. Cloudflare Quick Tunnels are free, need no account, and can now be locked to specific email addresses.
3. **Open source picks:** <a href="https://github.com/fatedier/frp" target="_blank">frp</a>, <a href="https://github.com/sshuttle/sshuttle" target="_blank">sshuttle</a>, <a href="https://github.com/jpillora/chisel" target="_blank">chisel</a>, <a href="https://github.com/fosrl/pangolin" target="_blank">Pangolin</a> and <a href="https://github.com/openziti/ziti" target="_blank">OpenZiti</a>, for when you would rather own the server.
4. **AI agents:** Pinggy has both an Agent Skill and an MCP server built around tunnels. Ngrok now ships nine Agent Skills but no MCP server for driving it, and Cloudflare's skills and MCP servers are platform-wide.

{{% /tldr %}}

## Ngrok alternatives at a glance

| Tool | Install needed | Free tier | Cheapest paid plan | UDP | Custom domains |
|---|---|---|---|---|---|
| Ngrok | Agent (SSH needs an account and key) | 1GB, 20k requests, interstitial | $8/month yearly, $10 monthly | No | Pay-as-you-go only, no apex |
| Pinggy | None for HTTP/TCP/TLS, CLI for UDP | 60-minute tunnels | $2.50/month yearly, $3 monthly | Yes | Yes, including apex |
| Cloudflare Quick Tunnels | `cloudflared` | Free, no account | Free (named tunnels too) | No | Named tunnels only |
| Tailscale Funnel | Tailscale client | Personal, up to 6 users | $8/seat/month | No | No (`ts.net` names) |
| zrok | `zrok2` client | 5GB per day | Self-host, or NetFoundry | Private shares only | Self-hosted, or myzrok Pro |
| Localtunnel | npm package | Free only | None | No | No |
| LocalXpose | Client | 2 HTTP(S) tunnels | $8/month billed yearly | Paid | Paid |
| Playit.gg | Client | 4 ports | $3/month | Yes | Paid (external domains) |
| localhost.run | None (SSH) | Rotating domain, speed-limited | $9/month billed yearly | No | Paid |
| Inlets | Client plus exit server or Inlets Cloud | None | $25/month | Yes | Yes |
| LocalCan | Desktop app or CLI | 1 URL, 60-minute sessions, 1GB | $10/month, $8 yearly | No | Paid |

## AI agent support

Any agent with terminal access can run a tunnel CLI, but official agent tooling gives it product-specific instructions or direct control, and this corner of the market changed a lot in September.

**Pinggy** ships both halves: an Agent Skill that teaches an agent Pinggy's commands, flags, tunnel types and SDKs (`npx skills add https://pinggy.io`), and an MCP server that lets Claude Code, Claude Desktop, Cursor, VS Code and Windsurf create, inspect and stop tunnels through tool calls. The MCP server is still labelled early and experimental. Setup is in Pinggy's [AI Agents guide](/docs/ai_agents/).

**Ngrok** expanded its skills on September 19, 2026: the repo, renamed {{< link href="https://github.com/ngrok/skills" >}}ngrok/skills{{< /link >}}, now holds nine skills, including `expose-localhost` (which also handles raw TCP), `secure-endpoint` and `receive-webhooks`. Install them with `npx skills add ngrok/skills`, or as a plugin in Claude Code, Cursor or Codex. There's still no MCP server for driving ngrok, only a read-only endpoint for searching its docs.

**Cloudflare** has the broadest tooling: Agent Skills including `cloudflare-one` (which covers Tunnel), an MCP server that covers its whole API plus product-specific ones, setup guides for 10 coding agents, and `cloudflared --output json` so an agent can read the tunnel hostname from structured output. It's all account-centric, while a quick tunnel has no account behind it.

The rest is thinner. **Tailscale** has an alpha Agent Skill for reference material, plus two alpha built-in connectors (Tailnet and Tailscale SSH) in its Aperture AI gateway that can join machines to a tailnet and run commands over Tailscale SSH. **LocalCan** ships an MCP server with 26 tools that works with its desktop app or CLI daemon, with write access off by default. **Inlets** has an official {{< link href="https://github.com/inlets/agent-skills" >}}agent-skills repo{{< /link >}} with six skills, though inlets.dev doesn't link to it. LocalXpose, Localtunnel, zrok, localhost.run and Playit.gg have no official skill or MCP server.

## Overview of Ngrok

Ngrok provides tunnels for ingress through its programmable network edge, with HTTP(S), TCP and TLS endpoints. Its strengths are depth: request inspection and replay, webhook verification, traffic policies, endpoint pooling and global load balancing, a Kubernetes operator, and visitor authentication with Basic Auth, OAuth, OIDC, SAML, JWT validation and mutual TLS. For teams running production ingress, that depth is ngrok's main advantage.

The cons are the ones in the intro. You need an account, and either the ngrok agent or an SSH reverse tunnel that only works once you've uploaded an SSH key. There's no UDP, no apex domains, and free visitors see an interstitial page.

{{< image "best_ngrok_alternatives/ngrok_pricing.webp" "Ngrok pricing page showing the Free, Hobbyist and Pay-as-you-go plans" >}}

*Screenshot: ngrok.com/pricing, October 2026.*

Pricing is credit-based. **Free** includes 3 online endpoints, 1GB of transfer, 20k HTTP requests and a $5 one-time credit that can't be spent on data transfer. **Hobbyist** is $10/month, or $8/month billed yearly. It includes 5GB and 100k requests, and anything beyond that is paid from $10 of monthly credit; when the credit is gone, usage stops. **Pay-as-you-go** is $20/month with $20 of credit, unlimited endpoints, bring-your-own and wildcard domains, and overage billed at $0.10/GB and $1 per 100k requests. Watch the hourly meters: endpoints outside the free dev domain cost $0.02 per active hour, and a custom domain adds $0.01 for every hour it gets traffic.

## 1. Pinggy

[Pinggy](https://pinggy.io) starts a tunnel with a single SSH command and nothing to install. One command gives anyone access to an app on your localhost, without cloud setup, port forwarding, DNS or a VPN. To share a React app on `localhost:3000`:

<h3 class="h5">Run this command to start a tunnel:</h3>

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< video poster="/assets/tunnelvideothumb.webp" src="/assets/pinggy_demo.webm" >}}

Three differences from ngrok matter most. Bandwidth is **unlimited**, with no monthly transfer cap or per-GB overage. **Apex domains** work, so `example.com` itself can point at a tunnel, set up through a relay (a TXT verification record plus A/AAAA records pointing at a Pinggy relay). And **UDP tunnels** exist, for game servers, DNS and WireGuard; those need the Pinggy CLI (still in beta), because the SSH command can't carry UDP.

The free tier needs no sign-up, and tunnels run for 60 minutes. It includes HTTP(S), TCP, TLS and UDP tunnels, unlimited transfer, header modification, and request inspection and replay in a web debugger. The terminal UI shows a QR code for the URL and live requests. Visitors on a browser see a one-time screening page on free tunnels, as with ngrok's interstitial, but API clients and `curl` go straight through. Access control covers basic auth, bearer key auth and IP whitelisting, and there are Node.js and Python SDKs for driving tunnels from code. It runs on macOS, Windows, Linux and Docker.

**Pro** is $3/month, or $2.50/month billed yearly. It adds persistent subdomains, custom and wildcard domains, persistent TCP and UDP ports, teams and remote device management, and removes the screening page. The gaps against ngrok are visitor OAuth and global edge load balancing, which Pinggy doesn't offer.

### Comparing Ngrok and Pinggy

<table style="width:100%;border-collapse:collapse;table-layout:fixed;">
<thead>
<tr>
    <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Feature</th>
    <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Pinggy</th>
    <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Ngrok</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
    <td style="border:1px solid #ddd;padding:0.45em;">Entry paid plan</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Pro: $3/month, or $2.50/month billed yearly</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Hobbyist: $10/month, or $8/month billed yearly</td>
</tr>
<tr>
    <td style="border:1px solid #ddd;padding:0.45em;">Bandwidth on the entry plan</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Unlimited</td>
    <td style="border:1px solid #ddd;padding:0.45em;">5GB included; more only from the $10 monthly credit, then endpoints stop</td>
</tr>
<tr style="background:#f9fbfd;">
    <td style="border:1px solid #ddd;padding:0.45em;">UDP tunnels</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Yes, with the Pinggy CLI</td>
    <td style="border:1px solid #ddd;padding:0.45em;">No</td>
</tr>
<tr>
    <td style="border:1px solid #ddd;padding:0.45em;">Custom domains</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Subdomains and apex domains on Pro</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Pay-as-you-go only, $0.01 per active hour; no apex domains</td>
</tr>
<tr style="background:#f9fbfd;">
    <td style="border:1px solid #ddd;padding:0.45em;">Start without sign-up</td>
    <td style="border:1px solid #ddd;padding:0.45em;">Yes</td>
    <td style="border:1px solid #ddd;padding:0.45em;">No</td>
</tr>
</tbody>
</table>

The apex domain row is not our reading of the docs, it is what ngrok says itself:

{{< image "best_ngrok_alternatives/ngrok_no_apex_domains.webp" "Ngrok documentation stating that ngrok does not currently support apex domains" >}}

Source: ngrok's {{< link href="https://ngrok.com/docs/gateway/domains/custom-domains" >}}How to Use A Custom Domain{{< /link >}} docs, checked October 2026.

## 2. Cloudflare Quick Tunnels

{{< link href="https://try.cloudflare.com/" >}}Cloudflare Quick Tunnels{{< /link >}} (TryCloudflare) are the part of Cloudflare Tunnel that behaves like ngrok. Install the `cloudflared` daemon, run one command, and you get a random HTTPS URL on `trycloudflare.com`:

```bash
cloudflared tunnel --url http://localhost:8080
```

No account, no domain on Cloudflare, no DNS record and no inbound port. `cloudflared` opens outbound-only connections to nearby Cloudflare data centers, and requests come back down it, with Cloudflare's DDoS protection along the way. Kill the process and the tunnel and its hostname are gone. Since October 2, adding `--allowed-mail alice@example.com` (or `'*@example.com'`) puts an email one-time PIN in front of the URL, still with no Cloudflare account on either side. That needs cloudflared 2026.9.3 or later.

{{< image "best_ngrok_alternatives/cloudflaretunnel.webp" "try.cloudflare.com page for Cloudflare Quick Tunnels" >}}

The production sibling is the named tunnel, documented under {{< link href="https://developers.cloudflare.com/tunnel/" >}}Cloudflare Tunnel{{< /link >}}. It gives you a stable hostname on your own domain and Access policies, at the cost of a Cloudflare account and a domain on Cloudflare (plus a YAML config file if you manage the tunnel locally).

The catches are worth knowing. The hostname changes on every run, so webhook configs break on restart. The {{< link href="https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/" >}}Quick Tunnels docs{{< /link >}} list 200 in-flight requests before Cloudflare returns `429`, no Server-Sent Events and no uptime guarantee. A quick tunnel gives you an HTTPS URL. For TCP you need a named tunnel, with the other machine running `cloudflared access tcp`, and UDP needs Cloudflare's private networking plus the Cloudflare One client (formerly WARP).

Quick tunnels and named tunnels are both free. Account limits are 1,000 tunnels, 1,000 routes and 500 Access applications, and request bodies are capped at Cloudflare's usual 100MB on the Free and Pro plans (200MB on Business).

## 3. Tailscale

{{< link href="https://tailscale.com/" >}}Tailscale{{< /link >}} is a mesh VPN built on WireGuard rather than a tunnel service. Devices connect directly where NAT allows and fall back to Tailscale's DERP relays where it doesn't. It becomes an ngrok alternative through **Tailscale Funnel**, which routes public internet traffic to a service on one of your nodes. Funnel is still in beta, only listens on ports 443, 8443 and 10000, and only serves `ts.net` names, so there's no custom domain.

{{< image "best_ngrok_alternatives/tailscale.webp" "Tailscale diagram of users and devices in six US cities connected in one tailnet" >}}

Tailscale is excellent when you want a private network across your machines, with MagicDNS and grants-based access control. As a public URL tool it's indirect: the machine serving the app has to join a tailnet and run the Tailscale client with HTTPS certificates and Funnel enabled, though visitors need nothing. Funnel's three fixed ports also rule out arbitrary TCP ports, and it doesn't carry UDP.

The free **Personal** plan covers up to 6 users with unlimited user devices and 50 tagged resources. Since Tailscale's April 2026 pricing change, **Standard** is $8 per seat per month (it replaced the $6-per-active-user Starter plan) and **Premium** stays at $18, now per seat, and you pay for every purchased seat, used or not. Enterprise is custom-priced.

## 4. zrok

{{< link href="https://zrok.io/" >}}zrok{{< /link >}} is an open source (Apache 2.0) sharing tool built on OpenZiti, a zero trust overlay network. It handles public shares for web traffic and private shares that only another zrok user can reach. You can use NetFoundry's managed service or self-host the whole thing.

{{< image "best_ngrok_alternatives/zrok_2026.webp" "zrok.io homepage showing the zrok2 invite, enable and share commands" >}}

*Screenshot: zrok.io, October 2026.*

Version 2.0 (March 2026) was a breaking release: the binary is now `zrok2`, namespaces and reserved names replaced the old reservation system, and there's a new `dynamicProxy` frontend. The latest release is v2.0.7 (October 3, 2026), and the v1 line still gets fixes. Share backends are proxy, web, caddy, drive (WebDAV), tcpTunnel, udpTunnel and socks. Public shares only accept the HTTP-style backends, though, so **TCP and UDP shares are private**: the other side has to run `zrok2 access private`. Docs now live at netfoundry.io/docs/zrok.

The managed free tier is $0 with 5GB per day, 25 environments, 50 share backends and 50 private access frontends, plus an interstitial page until you add a credit card. Commercial plans go through NetFoundry. zrok fits teams that care about zero trust and ownership, but setup is heavier than a managed tunnel, and v2 broke older tutorials.

## 5. Localtunnel

{{< link href="https://theboroer.github.io/localtunnel-www/" >}}Localtunnel{{< /link >}} is an npm package that gives you a random `loca.lt` HTTPS URL, and it can be used as a library in Node.js apps. It's free and has no account or paid tier.

{{< image "best_ngrok_alternatives/localtunnel_2026.webp" "Localtunnel homepage with the npm install and lt --port quickstart" >}}

*Screenshot: theboroer.github.io/localtunnel-www, October 2026.*

It survives on distribution. The `localtunnel` package pulled about 2.8 million npm downloads in the month to October 4, 2026, still more than `@ngrok/ngrok` (about 2.3 million). Maintenance is another story. The last release, 2.0.2, shipped in September 2021, and the last code change landed in August 2022. There are 150 open issues, with outage reports still arriving in September 2026, and 2.0.2 still pins `axios` 0.21.4, which has known vulnerabilities. Browser visitors also hit a reminder page asking for a tunnel password, which is the tunneller's public IP. Use it for throwaway tests, not anything that needs to stay up. It only does HTTP(S): no TCP, TLS or custom domains.

## 6. LocalXpose

{{< link href="https://localxpose.io/" >}}LocalXpose{{< /link >}} is one of the most complete clients here: HTTP(S), TCP, TLS and UDP tunnels, a built-in file server, request logging with replay, and a desktop GUI next to the CLI. It runs on Windows, macOS, Linux, FreeBSD and Docker.

{{< image "best_ngrok_alternatives/localxpose.webp" "LocalXpose diagram of a secure tunnel to several services" >}}

Every plan, including the free one, gets the file server, header editing, basic and key auth, rate limiting and IP whitelisting. The free Starter tier is thin, though: two HTTP(S) tunnels, time limits and an interstitial page. **PRO** is $8/month billed yearly ($96/year) and unlocks 10 tunnels, TCP, TLS and UDP, custom and wildcard domains, and reserved subdomains. There's no visitor OAuth, and you always need its client installed.

## 7. Playit.gg

{{< link href="https://playit.gg/" >}}Playit.gg{{< /link >}} is built for game servers, and it's one of the easiest ways to put a Minecraft, Palworld, Terraria, Factorio or Valheim server online. The agent is open source (BSD-2-Clause) and runs on Windows, macOS, Linux and Docker.

{{< image "best_ngrok_alternatives/playit_gg_2026.webp" "Playit.gg homepage: make your game server public in minutes, Premium $3 a month" >}}

*Screenshot: playit.gg, October 2026.*

The free tier gives you 4 ports in total and 2 agents, with game presets plus generic UDP. **Premium** is $3/month and adds TCP, TCP+UDP, SSH and HTTPS tunnels, 16 ports, 10 agents, region selection, three `.playit.plus` domains and external domains. It's not built for webhook testing or traffic inspection, but for game hosting it's hard to beat.

## 8. localhost.run

{{< link href="https://localhost.run/" >}}localhost.run{{< /link >}} is the other SSH-only option, with no client to install:

```bash
ssh -R 80:localhost:8080 localhost.run
```

{{< image "best_ngrok_alternatives/localhost_run.webp" "localhost.run homepage with its ssh -R command" >}}

It's deliberately minimal, with no inspection, auth or tunnel management. On the free tier the domain changes every few hours and traffic is speed-limited, which the project frames as an anti-phishing measure. The {{< link href="https://localhost.run/docs/custom-domains/" >}}Custom Domain plan{{< /link >}} is $9/month billed yearly, and it gives you your own domain or a stable `lhr.rocks` subdomain with no speed limit.

## 9. Inlets

{{< link href="https://inlets.dev/" >}}Inlets{{< /link >}} is a commercial tunnel for teams that want control: you run the exit server yourself, or use the managed Inlets Cloud that's included with a subscription. It carries HTTP(S), WebSockets, gRPC and TCP, and UDP on TCP tunnels since 0.11.13 (July 2026). The latest release is 0.11.18 (October 5, 2026).

{{< image "best_ngrok_alternatives/inlets_2026.webp" "Inlets homepage: self-hosted tunnels with full control and privacy" >}}

*Screenshot: inlets.dev, October 2026.*

It integrates well with Kubernetes through the inlets-operator, exposes Prometheus metrics, and offers OAuth for HTTP tunnels. There's no free tier: **Personal** is $25/month (one person, non-commercial, 5 tunnels), **Commercial** starts at $50/month for 2 tunnels plus $25 for each extra, and **Uplink** for service providers starts at $250/month. See {{< link href="https://inlets.dev/pricing/" >}}inlets.dev pricing{{< /link >}}.

## 10. LocalCan

{{< link href="https://www.localcan.com/" >}}LocalCan{{< /link >}} is a desktop-first tool: a macOS and Windows app (v3.2.1, October 6, 2026) for public URLs and `.local` HTTPS domains on your network, plus a CLI that runs on Linux and servers. It suits demos, OAuth callbacks and testing across devices on Wi-Fi.

{{< image "best_ngrok_alternatives/localcan_pricing.webp" "LocalCan pricing page with Free, Solo, Pro and Teams plans, yearly billing shown" >}}

*Screenshot: localcan.com pricing with yearly billing selected, October 2026.*

The free tier gives you 1 live public URL, 60-minute sessions, 1GB a month, unlimited `.local` domains and the MCP server. Paid public URLs carry HTTPS and TCP. **Solo** is $10/month or $96/year (1 device, 5 URLs, 2 custom domains), **Pro** is $16/month or $144/year (2 devices, 10 URLs, 4 domains), and **Teams** is $15 per seat with a 3-seat minimum. A limited-offer Lifetime license costs $99 once for 1 device, 5 URLs and 2 custom domains. There's no zero-install SSH path.

## New entrants worth watching

A few newer tools have picked up traction, though none has the track record yet to join the top 10.

{{< link href="https://localtonet.com/" >}}Localtonet{{< /link >}} bills per tunnel. The free tier gives you 1 HTTP, TCP or UDP tunnel, 1GB a month and a 30-minute timeout. Pay-as-you-go is $2/month per tunnel, with unlimited bandwidth, no timeout, custom domains and ports, IP whitelisting and SSO. Its tunnel types include dedicated UDP and mixed UDP/TCP.

{{< link href="https://instatunnel.my/" >}}InstaTunnel{{< /link >}} has a generous free tier: 3 tunnels, 24-hour sessions, custom subdomains and basic analytics, within 2GB a month and 2,000 requests a day. Pro is $5/month for 10 tunnels and adds password protection and custom domains. Business is $15/month for 25 tunnels.

{{< link href="https://21tunnel.com/" >}}21tunnel{{< /link >}} is built around AI coding agents, with scoped child API keys that you can revoke in one cascade. Its pricing page now says everything is free with no paid tier, though its homepage still shows the old paid plans, and it calls itself MVP-stage. The roundup that ranks it first is published on 21tunnel's own blog.

{{< link href="https://github.com/agrinman/tunnelto" >}}Tunnelto{{< /link >}}, an open-source Rust tool, got a burst of attention in late December 2025 and now has about 7,100 stars. It's dormant, though: the last release is v0.1.18 from May 2021 and the last commit is from September 2022. The hosted tunnelto.dev still sells reserved subdomains at $4 per user per month.

## Top 5 open source Ngrok alternatives

If you'd rather run the server yourself, these five give you more ownership than any managed tunnel, at the cost of setup and maintenance. Star counts are from October 7, 2026. {{< link href="https://github.com/ekzhang/bore" >}}bore{{< /link >}} dropped off this list: it's still a tidy TCP forwarder, but its last release was v0.6.0 in June 2025 and it has had no commits in eight months.

## 1. frp (Fast Reverse Proxy)

{{< link href="https://github.com/fatedier/frp" >}}frp{{< /link >}} is the most popular tool in this article at about 110k stars, and it's actively maintained (v0.71.0, August 2026). It proxies TCP, UDP, HTTP and HTTPS, with transports including QUIC and WebSocket, plus custom domains, token auth, compression, encryption and load balancing. The cost is that you configure and run the server side yourself.

## 2. sshuttle

{{< link href="https://github.com/sshuttle/sshuttle" >}}sshuttle{{< /link >}} works like a VPN over SSH: it forwards TCP and DNS through an SSH server without installing sshuttle there. Version 2.0.0 shipped on September 28, 2026 and needs Python 3.10 or newer on both ends. It's not a public URL tool like ngrok, so it fits reaching into private networks rather than sharing localhost.

## 3. Chisel

{{< link href="https://github.com/jpillora/chisel" >}}chisel{{< /link >}} tunnels TCP and UDP over HTTP, secured with SSH, from a single small binary (v1.12.0, August 2026). It can act as a SOCKS5 proxy, and UDP remotes are written like `1.1.1.1:53/udp`. It forwards ports rather than handing you a public HTTPS URL, and you run your own chisel server.

## 4. Pangolin

{{< link href="https://github.com/fosrl/pangolin" >}}Pangolin{{< /link >}} is one of the most active projects in this space, with about 23k stars and frequent releases (1.24.0, September 30, 2026). It started as a self-hosted answer to Cloudflare Tunnel and now pitches itself as an open-source SASE platform built on WireGuard: a tunneled reverse proxy with identity-aware access, SSO and a dashboard. Self-hosting needs a VPS and a domain, and there's now a managed Pangolin Cloud too. The Community Edition is AGPL-3.

## 5. OpenZiti (Ziti)

{{< link href="https://github.com/openziti/ziti" >}}OpenZiti{{< /link >}} is the programmable zero trust overlay network underneath zrok (v2.0.6, September 2026). It shares resources without exposing public endpoints and is highly customizable, and NetFoundry publishes a Ziti MCP server for managing Ziti networks. The tradeoff is complexity: it's a lot of machinery if all you need is to share localhost.

## Conclusion

Pick by the shape of the job. For a one-command tunnel with nothing to install, use Pinggy or localhost.run. Cloudflare Quick Tunnels give you a free throwaway HTTPS URL once `cloudflared` is installed, and can now be locked to an email domain. LocalXpose is the pick for a GUI with UDP, Playit.gg for game servers, and zrok, Pangolin or frp if you'd rather self-host. If AI coding agents are part of your workflow, Pinggy is the one tool here whose Agent Skill and MCP server are both built around tunnels, while ngrok has more skills but no MCP server for operating it. Either way, ngrok's limits no longer have to be yours.
