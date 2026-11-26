---
 title: "Localtunnel - Easiest way to create a local tunnel" 
 description: "Open a local tunnel to localhost with a single command using Pinggy. No downloads required. Just paste one command to get local tunnels."
 date: 2024-06-22T00:15:25+05:30
 lastmod: 2026-11-25T14:15:25+05:30
 tags: ["local tunnel", "Pinggy", "secure tunneling"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkxvY2FsdHVubmVsIC0gRWFzaWVzdCB3YXkgdG8gY3JlYXRlIGEgbG9jYWwgdHVubmVsIiwKICAiZGVzY3JpcHRpb24iOiAiUXVpY2sgZ3VpZGUgdG8gZXhwb3NpbmcgYSBsb2NhbCBzZXJ2aWNlIHdpdGggYSBQaW5nZ3kgbG9jYWwgdHVubmVsOiBvbmUgU1NIIGNvbW1hbmQgZm9yIEhUVFAgb3IgVENQLCBwbHVzIGhvdyB0byBwcm90ZWN0IHRoZSBwdWJsaWMgVVJMLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2Fzc2V0cy9oZWFkZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTdGFydCB5b3VyIGxvY2FsIGFwcCBhbmQgbm90ZSBpdHMgcG9ydCwgZm9yIGV4YW1wbGUgODAwMC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiT3BlbiBhbiBIVFRQIHR1bm5lbCBieSBydW5uaW5nOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODAwMCBxckBmcmVlLnBpbmdneS5pbyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJPcGVuIGEgVENQIHR1bm5lbCBmb3IgU1NILCBkYXRhYmFzZXMgb3IgZ2FtZSBzZXJ2ZXJzIGJ5IHJ1bm5pbmc6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMiB0Y3BAZnJlZS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiUHJvdGVjdCB0aGUgVVJMIHdpdGggYmFzaWMgYXV0aCAoYjp1c2VyOnBhc3MpLCBhIGJlYXJlciBrZXkgKGs6KSBvciBhbiBJUCBhbGxvd2xpc3QgKHc6KSBhZGRlZCB0byB0aGUgc2FtZSBjb21tYW5kLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTaWduIGluIHRvIHRoZSBQaW5nZ3kgZGFzaGJvYXJkIGFuZCB1c2UgeW91ciB0b2tlbiBmb3IgcGVyc2lzdGVudCBzdWJkb21haW5zIGFuZCBjdXN0b20gZG9tYWlucy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
 draft: false 
 og_image: "/assets/header.webp"
 outputs:
  - HTML
  - AMP
---


Starting a local tunnel is as simple as pasting the following command into your Terminal / Command Prompt:

```
ssh -p 443 -R0:localhost:8000 qr@free.pinggy.io
```

Simply replace <kbd>8000</kbd> with your desired port number. The `qr@` part also prints a QR code in the terminal, so you can open the tunnel on your phone without typing the URL. For additional features and customization options, visit https://pinggy.io.

{{< llm-context >}}To create a local tunnel with Pinggy - start your app (for example on port 8000), then run `ssh -p 443 -R0:localhost:8000 qr@free.pinggy.io` to get a public HTTPS URL. For TCP services such as SSH, run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` instead.{{< /llm-context >}}

{{< video poster="/assets/tunnelvideothumb.webp" src="/assets/pinggy_demo.webm" >}}

**Local tunnels are simple using {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}** 

{{% tldr %}}
**Local Tunnel - Quick Overview**

* Exposes a local service to the internet through a public URL (HTTP, TCP, UDP or TLS).
* Works behind NAT, CGNAT and most firewalls, because your machine dials out over port 443 with the SSH client it already has.

**Why use it**

* One command for demos, mobile testing, webhooks and remote access.
* No deploy, no router change, no public IP needed.
* Free tunnels last 60 minutes; Pro adds persistent subdomains and custom domains.

**Security (short)**

* Risks: anyone with the link can reach your app, and the free URL contains your public IP.
* Mitigations: basic auth (`b:`), bearer keys (`k:`), IP allowlists (`w:`), and no production data on a dev server.

**Pinggy setup**

* HTTP tunnel: `ssh -p 443 -R0:localhost:<your-port> qr@free.pinggy.io`
* TCP tunnel: `ssh -p 443 -R0:localhost:<your-port> tcp@free.pinggy.io`
* Use the <a href="https://dashboard.pinggy.io/" target="_blank">Pinggy Dashboard</a> for tokens and custom domains.
{{% /tldr %}}

## Create Local Tunnels with a Single Command

Local tunnels open a path from the internet to a server running on your own machine, so you can share a website, an API, a file server or a remote shell without deploying anything. They matter most when normal port forwarding is impossible: on CGNAT connections, mobile hotspots, office networks and anything else where you don't control the router. With Pinggy, a single command creates the tunnel to your localhost server, using the `ssh` client that already ships with macOS, Linux and Windows 10 and later:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 qr@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\"}}}"
{{</ ssh_command >}}

Within a second or two you get two HTTPS links to your localhost, and either one works.

## Understanding Local Tunnels

A local tunnel is an outbound connection from your machine to a public tunnel server, kept open so the server can send traffic back down it. Local tunnels can carry different protocols, such as HTTP, TCP, UDP and TLS, and each type forwards that kind of traffic. An HTTP tunnel lets you host a website on your laptop and make it reachable from any browser; a TCP tunnel does the same for SSH, databases or game servers.

Your localhost ports aren't reachable from the internet on their own, because NAT, carrier-grade NAT and firewalls block inbound connections. A tunnel flips the direction. The client on your laptop connects *out* to the tunnel server, and when someone opens the public URL, the server pushes that request back through the open connection to your local port. It does the job of port forwarding, but you also get a public address, and it works even when your ISP gives you no public IP at all.

{{< image "local_tunnel/local_tunnel_request_sequence.webp" "Sequence diagram: the tunnel client on the laptop dials out to the tunnel server, then a phone's GET request travels from the server down that connection to the client and on to a local dev server, and the response returns to the phone" >}}

Because Pinggy runs that connection over SSH on port 443, the same port as HTTPS, it gets through most office and campus firewalls, and the hop to your laptop is encrypted.

## Setting Up Your Local Tunnel

[Pinggy](https://pinggy.io/) is the quickest way to create a local tunnel. One command turns any local server into an internet-accessible service, which is handy for development, testing, live demos and remote collaboration.

### HTTP Local Tunnel Setup:

1. Launch your command prompt or terminal. Copy and paste this command, then press enter to start your local tunnel. Substitute `8080` with your app's port:
   {{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 qr@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 qr@free.pinggy.io\"}}}"
{{</ ssh_command >}}
2. Once executed, Pinggy prints the public URLs for your tunnel. A free tunnel gets two, one on `free.pinggy.net` and one on `run.pinggy-free.link`, and both reach the same app. The hostname includes your public IP written with dashes, so treat the link like you would your IP address.
  {{< image "iot/https_pinggy_public_url.webp" "Pinggy Https Public Url" >}}

3. Free tunnels run for 60 minutes and get a new random URL each time. For more control, sign in to <a href="https://dashboard.pinggy.io" target="_blank">dashboard.pinggy.io</a> to get an access token. With it you can track active tunnels and, on Pro ($3/month, or $2.50/month billed yearly), keep a persistent subdomain.

4. You can also link a custom domain to your Pinggy tunnel to have a permanent URL to localhost.

5. If your app is a dev server such as Vite and the tunnel URL shows `Blocked request. This host is not allowed`, the dev server is rejecting the public hostname. Add a Host header rewrite to the command, for example `u:Host:localhost:5173` at the end, and Pinggy forwards the request as if it came from localhost.

If you'd rather have an app than an SSH command, the Pinggy CLI takes the same arguments and adds a terminal UI and auto-reconnect. Install it with `npm install -g pinggy` (Node 22+) or from the [Pinggy CLI page](/cli/).

### TCP Local Tunnel Setup:

1. Create a TCP local tunnel by executing this command in your command prompt or terminal (substitute `22` with your specific port):
{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\"}}}"
{{</ ssh_command >}}

2. Upon executing the tunneling command, you'll recieve a public address in the form `tcp://HOST:PORT`.

   Use that host and port with your normal client (`ssh -p PORT user@HOST` for a shell, or the host and port fields in a database or game client) to connect to your local port from any network.

   {{< image "iot/url.webp" "Pinggy Tcp Public Url" >}}

   On the free plan the port changes every time you reconnect. Pro lets you reserve one in the dashboard. More detail is in the [TCP tunnel docs](/docs/tcp_tunnels/).

## Alternative: VPS with SSH Port Forwarding

For a DIY approach, you can rent a VPS and use SSH remote port forwarding (`ssh -R`) to expose local services through it. That means keeping a server patched, setting `GatewayPorts` in its `sshd_config`, opening firewall ports, managing SSH keys and adding your own TLS certificate if you want HTTPS. You get full control, and you pay for it in setup time and upkeep.

The other name you'll run into is Localtunnel, the npm package behind `npx localtunnel --port 8000`. It still works, but its client hasn't had a release in years, the free loca.lt server is a volunteer-run service, and visitors have to type your public IP on a reminder page before they see your app. It only does HTTP, so there's no TCP or UDP. For most people, a single SSH command to Pinggy is faster than either option.

## Why Use a Local Tunnel

The biggest win is speed. One command exposes your local service, with no deploy and no network configuration. That makes it easy to share work in progress with a teammate or client the moment it runs on your machine, instead of pushing it to a staging server first.

Tunnels also get around network barriers. NAT, CGNAT and firewalls that block inbound connections don't matter, because the connection starts from your side. It's cheap too: a tunnel replaces a test server for demos and short-lived testing, and when you need something stable, you can add a persistent subdomain or your own domain.

Pinggy covers HTTP, TCP, UDP and TLS with small changes to the same command, so one tool handles a web app, a database and a game server. And because it uses the SSH client already installed on almost every operating system, there's nothing to download.

## Real-World Applications for Local Tunnels

In web development, a tunnel lets you show a local app in a live demo, collect client feedback or debug with someone on a call. Mobile developers can point a phone on mobile data at a backend running on their laptop, which is the quickest way to test on a real device.

For API integration and webhooks, a tunnel gives Stripe, GitHub, Slack or any other provider a public URL to call, so you can watch callbacks hit your local handler and fix them in place. Pinggy's [web debugger](/docs/http_tunnels/web_debugger/) shows each request and lets you replay it. For a full walkthrough, see [receiving webhooks on localhost](/blog/receive_and_test_webhooks_in_localhost/).

For IoT and home labs, TCP tunnels give you SSH or VNC access to a Raspberry Pi or other device behind a home router, without opening ports. System administrators can reach a server or desktop from outside the network without building a VPN. And for client presentations, you can show a prototype or beta build to remote stakeholders before it goes anywhere near production.

## Security Considerations and Protection Strategies

A tunnel makes a local service public, so anything you expose, including admin pages, debug endpoints and dev databases, can be reached by anyone who has the link. Keep development and production data separate, and add access control at the tunnel instead of trusting an obscure URL.

Pinggy can do that in the same command. Add `b:username:password` for HTTP <a target="_blank" href="/docs/http_tunnels/basic_auth/">basic authentication</a> (visitors without credentials get a `401 Unauthorized`), `k:` for a <a target="_blank" href="/docs/http_tunnels/key_auth/">bearer token</a>, or `w:` with a CIDR range for <a target="_blank" href="/docs/http_tunnels/ip_whitelist/">IP whitelisting</a>. For example:

```
ssh -p 443 -R0:localhost:8000 free.pinggy.io b:demo:choose-a-strong-password
```

Free tunnels show a short screening page on the first browser visit, which helps against phishing abuse, but it isn't access control. Public tunnel URLs also get scanned by bots, so watch your app's logs while a tunnel is open, close it with `Ctrl+C` when you're done, and use a persistent subdomain from your dashboard rather than reusing random links you've posted in chats. Traffic between visitors and Pinggy uses HTTPS, and the hop to your machine runs inside SSH, so it's encrypted in transit.

## Conclusion

Local tunnels let developers and IT teams expose a local environment in seconds for development, testing, demos, webhooks or remote administration. They get around NAT, CGNAT and firewall limits, and they handle more than just HTTP. With Pinggy, it's one SSH command and nothing to install. Just remember to add authentication before you share teh link, and close the tunnel when you no longer need it.
