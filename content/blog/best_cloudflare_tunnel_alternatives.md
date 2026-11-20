---
 title: "Top 10 Cloudflare Tunnel Alternatives in 2026" 
 description: "The best Cloudflare Tunnel alternatives in 2026, compared on price, free tier limits, TCP and UDP support and self-hosting: Pinggy, ngrok, Tailscale Funnel, LocalXpose, zrok, Localtunnel, localhost.run, Rathole, Pangolin and frp."
 date: 2024-10-17T14:15:25+05:30
 lastmod: 2026-11-18T15:15:25+05:30
 draft: false 
 tags: ["Cloudflare", "tunneling", "comparison", "open source"]
 og_image: "images/best_cloudflare_tunnel_alternatives/New-img1.webp"
 outputs:
  - HTML
  - AMP
---
{{< image "best_cloudflare_tunnel_alternatives/New-img1.webp" "Best Cloudflare Tunnel alternatives" >}}

{{< link href="https://www.cloudflare.com/products/tunnel/" >}}Cloudflare Tunnel{{< /link >}} is how a lot of people put a home server, a Raspberry Pi or a dev box on the internet without opening a port. You run `cloudflared`, it dials out to Cloudflare, and visitors reach your app back through that connection. It's free, and Cloudflare's DDoS protection comes along with it.

It doesn't fit every job, though. A permanent hostname needs your domain's DNS on Cloudflare, raw TCP needs `cloudflared` on the visitor's machine too, there's no public UDP, and every request passes through Cloudflare's edge, where TLS is terminated. If any of that gets in teh way, one of the 10 tools below will probably suit you better. Prices, versions and limits were checked on November 18, 2026.

{{% tldr %}}

1. **The 10 alternatives:** <a href="https://pinggy.io" target="_blank">Pinggy</a>, <a href="https://ngrok.com/" target="_blank">ngrok</a>, <a href="https://tailscale.com/" target="_blank">Tailscale</a>, <a href="https://localxpose.io/" target="_blank">LocalXpose</a>, <a href="https://zrok.io/" target="_blank">zrok</a>, <a href="https://theboroer.github.io/localtunnel-www/" target="_blank">Localtunnel</a>, <a href="https://localhost.run/" target="_blank">localhost.run</a>, <a href="https://github.com/rathole-org/rathole" target="_blank">Rathole</a>, <a href="https://github.com/fosrl/pangolin" target="_blank">Pangolin</a> and <a href="https://github.com/fatedier/frp" target="_blank">frp</a>.
2. **Closest managed swap:** Pinggy needs nothing installed for HTTP, TCP and TLS tunnels, adds public UDP and apex domains, and costs $3/month ($2.50 billed yearly).
3. **Self-hosted swaps:** Pangolin is the nearest self-hosted equivalent of Cloudflare Tunnel, with SSO and a dashboard. frp and Rathole are lighter reverse proxies for raw TCP and UDP.
4. **Staying on Cloudflare:** quick tunnels need no account, and since October they can sit behind an email PIN with `--allowed-mail`.

{{% /tldr %}}

## Cloudflare Tunnel alternatives at a glance

| Tool | Install needed | Free tier | Cheapest paid plan | UDP | Custom domains |
|---|---|---|---|---|---|
| Cloudflare Tunnel | `cloudflared` | Free, quick tunnels need no account | Free (named tunnels too) | Private networks only | Named tunnels, DNS on Cloudflare |
| Pinggy | None for HTTP/TCP/TLS, CLI for UDP | 60-minute tunnels, no sign-up | $2.50/month yearly, $3 monthly | Yes | Yes, including apex |
| Ngrok | Agent (SSH needs an account and key) | 1GB, 20k requests, interstitial | $8/month yearly, $10 monthly | No | Pay-as-you-go only, no apex |
| Tailscale Funnel | Tailscale client | Personal, up to 6 users | $8/seat/month | No | No (`ts.net` names) |
| LocalXpose | `loclx` client | 2 HTTP(S) tunnels | $8/month billed yearly | Paid | Paid |
| zrok | `zrok2` client | 5GB per day | Self-host, or NetFoundry | Private shares only | Self-hosted, or via NetFoundry |
| Localtunnel | npm package | Free only | None | No | No |
| localhost.run | None (SSH) | Rotating domain, speed-limited | $9/month billed yearly | No | Paid |
| Rathole | Client plus your own server | Open source | Your server | Yes | No HTTP layer |
| Pangolin | Connector plus your own server, or Pangolin Cloud | Self-hosted, or Cloud Basic | Cloud Team, $4/user/month | Self-hosted only | Yes |
| frp | `frpc` plus your own `frps` server | Open source | Your server | Yes | Yes |

## Overview of Cloudflare Tunnel

{{< link href="https://developers.cloudflare.com/tunnel/" >}}Cloudflare Tunnel{{< /link >}} (formerly Argo Tunnel) comes in two forms. A **quick tunnel** needs no account at all:

```bash
cloudflared tunnel --url http://localhost:8080
```

You get a random `trycloudflare.com` HTTPS URL that lives as long as the process does. Since October 2, adding `--allowed-mail alice@example.com` (or `'*@example.com'`) puts an email one-time PIN in front of it, still with no Cloudflare account on either side. The flag arrived in `cloudflared` 2026.9.2, and the current release is 2026.11.1. The {{< link href="https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/" >}}Quick Tunnels docs{{< /link >}} cap them at 200 in-flight requests before Cloudflare returns `429`, rule out Server-Sent Events, and promise no uptime.

A **named tunnel** is the production version: a stable hostname on your own domain, Access policies in front of it, and the tunnel managed from the dashboard or a YAML file. It needs a Cloudflare account and your domain's DNS on Cloudflare.

#### Pros of Cloudflare Tunnel

- Free, named tunnels included, with up to 1,000 tunnels and 50,000 routes per account.
- No inbound ports: `cloudflared` only makes outbound connections.
- DDoS protection, firewall rules and Cloudflare Access (SSO, email PINs) in front of your app.
- Quick tunnels work without an account.
- The broadest AI tooling here: Agent Skills including `cloudflare-one` (which covers Tunnel), an MCP server for the whole Cloudflare API plus product-specific ones, setup guides for 12 coding agents, and `cloudflared tunnel --output json` for scripts and agents.

#### Cons of Cloudflare Tunnel

- A stable hostname needs your domain's DNS on Cloudflare.
- Quick tunnel URLs change on every restart, which breaks webhook configs.
- Raw TCP needs `cloudflared access tcp` running on the visitor's machine as well.
- UDP only reaches private networks through the Cloudflare One client (formerly WARP). There's no public UDP endpoint.
- Request bodies are capped at 100MB on the Free and Pro plans (200MB on Business), which bites for large uploads.
- Cloudflare terminates TLS at its edge, so your HTTP traffic is decrypted on Cloudflare's servers.

#### Pricing of Cloudflare Tunnel

Tunnels are free on every plan. Account limits are 1,000 tunnels, 50,000 routes and 500 Access applications, and platforms that need more tunnels can buy them through Tunnels for Platforms at $4.50 per extra tunnel per month.

## 1. Pinggy

[Pinggy](https://pinggy.io) opens a tunnel with a single SSH command, so there's nothing to install for HTTP, TCP or TLS. To share a React app on `localhost:3000`:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

{{< video poster="/assets/tunnelvideothumb.webp" src="/assets/pinggy_demo.webm" >}}

It's the closest managed swap for a quick tunnel, and it covers two things Cloudflare doesn't: public UDP tunnels, and raw TCP ports that visitors can reach without installing anything.

#### Pros of Pinggy

- No install and no sign-up on the free tier.
- HTTP(S), TCP, TLS and UDP tunnels, with unlimited bandwidth.
- Request inspection and replay in a web debugger, header modification, and a terminal UI with a QR code for the URL.
- Basic auth, bearer key auth and IP whitelisting.
- Custom and wildcard domains, and apex domains through a relay with plain A/AAAA records.
- [Remote terminals](/remote-terminal/) into your devices: 1 device on the free tier, 25 on Pro.
- An Agent Skill (`npx skills add https://pinggy.io`) and an MCP server that can start, inspect and stop tunnels (still experimental).
- Node.js and Python SDKs for driving tunnels from code.

#### Cons of Pinggy

- No OAuth for tunnel visitors and no global edge load balancing.
- Browser visitors to free tunnels see a one-time screening page, while API clients and `curl` recieve responses directly.
- UDP needs the Pinggy CLI (still in beta), since SSH can't carry UDP.

#### Pricing of Pinggy

Free tunnels last 60 minutes. **Pro** is $3/month, or $2.50/month billed yearly, and adds persistent subdomains, custom, wildcard and apex domains, persistent TCP and UDP ports and teams, and removes the screening page.

## 2. Ngrok

{{< link href="https://ngrok.com/" >}}Ngrok{{< /link >}} is the best-known tunnel service and has the deepest feature set on this list: request inspection and replay, webhook verification, traffic policies, endpoint pooling and load balancing, a Kubernetes operator, and visitor auth with Basic Auth, OAuth, OIDC, SAML, JWT validation and mutual TLS.

{{< image "best_cloudflare_tunnel_alternatives/ngrok.webp" "ngrok diagram of client requests passing through the ngrok edge and tunnel to the ngrok agent" >}}

#### Pros of Ngrok

- Mature traffic inspection, replay and webhook verification.
- Visitor auth options that rival Cloudflare Access.
- Nine official Agent Skills (`npx skills add ngrok/skills`) and, since November 16, a hosted MCP server at `mcp.ngrok.com` on every plan. It manages domains, cloud endpoints and policies, but it can't start a tunnel.
- Official framework packages for Next.js, FastAPI, Axum and Gin, added in October.

#### Cons of Ngrok

- No UDP and no apex domains.
- Needs an account, and the SSH option only works after you upload an SSH key.
- The free plan stops at 1GB and 20k HTTP requests and shows browser visitors an interstitial page.
- Custom domains need the Pay-as-you-go plan, with hourly meters on top of the base price.

#### Installation

Download ngrok from {{< link href="https://ngrok.com/download" >}}ngrok.com{{< /link >}}, add your authtoken, and start a tunnel:

```bash
ngrok config add-authtoken <your-token>
ngrok http 8080
```

#### Pricing of Ngrok

**Free** includes 3 online endpoints, 1GB of transfer, 20k HTTP requests and a $5 one-time credit. **Hobbyist** is $10/month, or $8/month billed yearly, with 5GB and 100k requests; past that it draws on $10 of monthly credit, and when that's gone usage stops. **Pay-as-you-go** is $20/month with $20 of credit and adds custom and wildcard domains, but endpoints outside the free dev domain cost $0.02 per active hour, and a custom domain adds $0.01 for every hour it gets traffic.

## 3. Tailscale

{{< link href="https://tailscale.com/" >}}Tailscale{{< /link >}} is a mesh VPN built on WireGuard, not a tunnel service, but **Tailscale Funnel** turns it into one by routing public internet traffic to a service on one of your nodes. When only your own devices need access, plain Tailscale is often a better answer than any public tunnel, because nothing gets exposed at all.

{{< image "best_cloudflare_tunnel_alternatives/Tailscale.webp" "Tailscale diagram of users and devices in six US cities connected in one tailnet" >}}

#### Pros of Tailscale

- Private access between devices, with MagicDNS, grants-based access control and sign-in through your identity provider.
- Direct WireGuard connections where NAT allows, with Tailscale's DERP relays as a fallback.
- Funnel adds a public HTTPS URL without opening ports.
- A free Personal plan for up to 6 users.

#### Cons of Tailscale

- Funnel is still in beta, listens only on ports 443, 8443 and 10000, and only serves `ts.net` names, so there's no custom domain.
- No arbitrary TCP ports or UDP through Funnel.
- The serving machine has to join a tailnet and run the Tailscale client, with HTTPS certificates and Funnel enabled for the tailnet.

#### Installation

Install Tailscale from the {{< link href="https://tailscale.com/download" >}}download page{{< /link >}}, join your tailnet, and publish a local port:

```bash
sudo tailscale up
sudo tailscale funnel 3000
```

#### Pricing of Tailscale

The **Personal** plan is free for up to 6 users with unlimited user devices. **Standard** is $8 per seat per month and **Premium** $18 per seat, and you pay for every purchased seat, used or not. Enterprise is custom-priced.

## 4. LocalXpose

{{< link href="https://localxpose.io/" >}}LocalXpose{{< /link >}} is a tunnel client with a GUI next to the CLI, covering HTTP(S), TCP, TLS and UDP. It also has a built-in file server and request logging with replay, and it runs on Windows, macOS, Linux, FreeBSD and Docker.

{{< image "best_cloudflare_tunnel_alternatives/Localxpose.webp" "LocalXpose diagram of a secure tunnel from the LocalXpose network to several services" >}}

#### Pros of LocalXpose

- HTTP(S), TCP, TLS and UDP tunnels.
- A GUI (`loclx gui` serves it in your browser) alongside the CLI.
- File server, header editing, basic and key auth, rate limiting and IP whitelisting on every plan, including free.
- Custom, wildcard and reserved domains on PRO.

#### Cons of LocalXpose

- You always need its client installed.
- The free Starter tier is limited to 2 HTTP(S) tunnels, with time limits and an interstitial page.
- No visitor OAuth, and no official Agent Skill or MCP server.

#### Installation

Download `loclx` from the {{< link href="https://localxpose.io/download" >}}download page{{< /link >}}, log in, and start an HTTP tunnel, which forwards to `localhost:8080` by default:

```bash
loclx account login
loclx tunnel http
```

`loclx tunnel http --help` lists the options for other ports and domains.

#### Pricing of LocalXpose

Starter is free. **PRO** is $8/month billed yearly ($96/year) for 10 tunnels, with TCP, TLS and UDP and custom and wildcard domains.

## 5. zrok

{{< link href="https://zrok.io/" >}}zrok{{< /link >}} is an open source (Apache 2.0) sharing tool built on OpenZiti, a zero trust overlay network. Public shares give a web app a public URL, while private shares can only be reached by another zrok user running `zrok2 access private`. You can use NetFoundry's hosted service or run the whole stack yourself.

#### Pros of zrok

- Open source and fully self-hostable, or hosted by NetFoundry.
- Private shares for TCP, UDP and SOCKS that only other zrok users can reach.
- File sharing through the `drive` (WebDAV) and `web` backends.
- Namespaces and reserved names for stable URLs.

#### Cons of zrok

- Public shares only accept HTTP-style backends, so TCP and UDP shares are private-only.
- Version 2.0 (March 2026) renamed the binary to `zrok2` and replaced the old reservation system, so older tutorials no longer work.
- The hosted service has been unreliable lately: a {{< link href="https://openziti.discourse.group/t/6122" >}}forum thread about 500 errors{{< /link >}} opened on September 25 is still marked as investigating, and users reported 403, 409 and 401 failures through mid-November.
- Self-hosting means running OpenZiti underneath, which is a lot of machinery.

#### Installation

Download the `zrok2` binary from {{< link href="https://zrok.io/" >}}zrok.io{{< /link >}}, then create an account, enable your environment, and share:

```bash
zrok2 invite
zrok2 enable <your-token>
zrok2 share public localhost:3000
```

The docs now live at netfoundry.io/docs/zrok.

#### Pricing of zrok

The hosted free tier is $0 with 5GB a day, 25 environments and 50 share backends, plus an interstitial page until you add a credit card. Commercial plans go through NetFoundry, and self-hosting is free. The latest release is v2.0.10 (November 16, 2026).

## 6. Localtunnel

{{< link href="https://theboroer.github.io/localtunnel-www/" >}}Localtunnel{{< /link >}} is an npm package that gives you a random `loca.lt` HTTPS URL, and it also works as a library inside Node.js apps. It's free, with no accounts and no paid tier, but it's effectively unmaintained.

{{< image "best_cloudflare_tunnel_alternatives/Localtunnel.webp" "Localtunnel homepage with the npm install and lt --port quickstart" >}}

#### Pros of Localtunnel

- One npm install and one command.
- Usable as a library from Node.js code.
- `--subdomain` requests a specific subdomain if it's free.
- Free.

#### Cons of Localtunnel

- The last release, 2.0.2, shipped in September 2021, and the last code change landed in August 2022. About 150 issues are open, with outage reports as recent as September 2026.
- 2.0.2 still pins `axios` 0.21.4, which is affected by several high-severity advisories.
- Browser visitors hit a reminder page asking for a tunnel password, which is the tunneller's public IP.
- HTTP(S) only: no TCP, TLS or custom domains.

#### Installation

```bash
npm install -g localtunnel
lt --port 3000
```

#### Pricing of Localtunnel

Free. It still pulls about 3 million npm downloads a month, so it shows up in a lot of tutorials, but keep it for throwaway tests.

## 7. localhost.run

{{< link href="https://localhost.run/" >}}localhost.run{{< /link >}} is the other SSH-only option on this list: no client to install and no sign-up on the free tier.

{{< image "best_cloudflare_tunnel_alternatives/localhost.run.webp" "localhost.run feature list with no download or signup and the $9 per month custom domain plan" >}}

#### Pros of localhost.run

- Nothing to install; any machine with an SSH client works.
- No account needed on the free tier.
- The Custom Domain plan adds your own domain or a stable `lhr.rocks` subdomain, wildcard subdomains, TLS passthrough and TCP over TLS, and up to 5 tunnels at once.
- An official Agent Skill (`npx skills add localhost-run/agent-skills`).

#### Cons of localhost.run

- Free domains change every few hours and free traffic is speed-limited, which the project frames as an anti-phishing measure.
- No request inspection, visitor auth or tunnel dashboard.
- No UDP, and no MCP server.

#### Installation

```bash
ssh -R 80:localhost:3000 localhost.run
```

#### Pricing of localhost.run

The free tier is as above. The {{< link href="https://localhost.run/docs/custom-domains/" >}}Custom Domain plan{{< /link >}} is $9/month billed yearly, with no speed limit.

## 8. Rathole

{{< link href="https://github.com/rathole-org/rathole" >}}Rathole{{< /link >}} is a small reverse proxy for NAT traversal written in Rust, which its README pitches as an alternative to frp and ngrok. You run the server on a machine with a public IP (a cheap VPS is enough) and the client next to your service. The repo now lives under the `rathole-org` organization.

{{< image "best_cloudflare_tunnel_alternatives/rathole.webp" "rathole repository page on GitHub" >}}

#### Pros of Rathole

- Low memory use and high throughput, which suits routers and small boards.
- TCP and UDP services.
- Plain TCP transport by default, with optional TLS, Noise Protocol encryption or WebSocket.
- Every service needs a token, so a stray client can't claim your ports.
- Apache-2.0, with no limits beyond your server's bandwidth.

#### Cons of Rathole

- You need your own server with a public IP.
- Traffic isn't encrypted unless you configure TLS or Noise.
- No HTTP layer (subdomains, certificates, request inspection), so web apps want a reverse proxy like Caddy in front.
- The last tagged release is v0.5.0 from October 2023, with only rolling development builds since.

#### Installation

Download a binary from {{< link href="https://github.com/rathole-org/rathole/releases" >}}GitHub Releases{{< /link >}}. On the server, create `server.toml`:

```toml
[server]
bind_addr = "0.0.0.0:2333"

[server.services.my_app]
token = "use_a_secret_that_only_you_know"
bind_addr = "0.0.0.0:5202"
```

On the machine with the service, create `client.toml` with the same token:

```toml
[client]
remote_addr = "myserver.com:2333"

[client.services.my_app]
token = "use_a_secret_that_only_you_know"
local_addr = "127.0.0.1:3000"
```

Then run `./rathole server.toml` on the server and `./rathole client.toml` on the client.

#### Pricing of Rathole

Free and open source. You pay for the server.

## 9. Pangolin

{{< link href="https://github.com/fosrl/pangolin" >}}Pangolin{{< /link >}} started as a self-hosted answer to Cloudflare Tunnel, which makes it the closest match here if you want the same model on your own server. A connector on the private side links to your Pangolin server over WireGuard, and the server runs a reverse proxy with identity-aware access, SSO and a dashboard. It now describes itself as an open source platform for secure access to apps, infrastructure and AI, and compares itself to Cloudflare One and Zscaler.

#### Pros of Pangolin

- The same shape as Cloudflare Tunnel on infrastructure you control: no open ports at home, a public hostname, and a login in front of it.
- Identity-aware access with SSO, and a web dashboard for sites and resources.
- Raw TCP and UDP resources on self-hosted servers, as plain port forwards.
- Active development, with about 24k stars: 1.26.0 shipped on November 4, 2026, and a 1.27.0 release candidate is out.
- A managed Pangolin Cloud if you'd rather not run the server.

#### Cons of Pangolin

- Self-hosting needs a Linux server with a public IP and a domain, with TCP ports 80 and 443 and UDP ports 51820 and 21820 open.
- Raw TCP and UDP resources skip Pangolin's authentication, and on Pangolin Cloud they need a remote node that you deploy.
- The Enterprise Edition is free only for personal use and for companies under $100K in annual revenue.

#### Installation

On the server, run the quick installer:

```bash
curl -fsSL https://static.pangolin.net/get-installer.sh | bash
sudo ./installer
```

Then create a site in the dashboard and install a connector next to your service. The {{< link href="https://docs.pangolin.net/manage/sites/install-site" >}}docs{{< /link >}} now recommend the Pangolin CLI for new sites (`pangolin up site`), and existing Newt connectors keep working.

#### Pricing of Pangolin

The Community Edition is free under AGPL-3. **Pangolin Cloud** Basic is free for 5 users and 5 sites, Team is $4 per user per month and Business is $9 per user per month.

## 10. frp (Fast Reverse Proxy)

{{< link href="https://github.com/fatedier/frp" >}}frp{{< /link >}} is the most popular self-hosted reverse proxy for this job, with about 110k stars and regular releases (v0.72.0 on November 4, 2026). You run `frps` on a public server and `frpc` next to your services.

{{< image "best_cloudflare_tunnel_alternatives/frp.webp" "frp homepage describing TCP, UDP, HTTP and HTTPS proxying" >}}

#### Pros of frp

- TCP, UDP, HTTP and HTTPS proxies, plus P2P connections through `xtcp`.
- Custom domains for HTTP, token auth, encryption, compression and load balancing.
- Transports including QUIC, KCP and WebSocket.
- Mature and well documented.

#### Cons of frp

- You run and secure the server yourself.
- More configuration than a hosted tunnel, and INI config is deprecated in favor of TOML, YAML or JSON, so older guides need translating.

#### Installation

A minimal `frpc.toml` that publishes SSH through your server:

```toml
serverAddr = "x.x.x.x"
serverPort = 7000

[[proxies]]
name = "ssh"
type = "tcp"
localIP = "127.0.0.1"
localPort = 22
remotePort = 6000
```

Then run `./frps -c ./frps.toml` on the server and `./frpc -c ./frpc.toml` on the client.

#### Pricing of frp

Free and open source (Apache-2.0). You pay for the server.

## Conclusion

Pick by what you're replacing. For quick dev tunnels, Pinggy is the closest swap and adds UDP and apex domains, and localhost.run covers simple HTTP over SSH. Ngrok is the pick when you need deep traffic inspection and visitor auth and don't mind the usage meters. Tailscale beats any public tunnel when only your own devices need access. If you like Cloudflare Tunnel's model but want to own the server, Pangolin is the nearest match, and frp or Rathole are lighter options for raw TCP and UDP. And if Cloudflare Tunnel already works for you, a quick tunnel behind `--allowed-mail` is now a reasonable way to show a client a private demo.
