---
title: "How to Create a Local Tunnel to Localhost with Pinggy"
description: "Share localhost with a Pinggy HTTPS tunnel, test the public URL from your phone, and add a visitor password. Includes TCP forwarding, the LocalTunnel npm command, and fixes for common connection problems."
date: 2024-06-22T00:15:25+05:30
lastmod: 2026-11-22T14:15:25+05:30
tags: ["local tunnel", "Pinggy", "secure tunneling"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIENyZWF0ZSBhIExvY2FsIFR1bm5lbCB0byBMb2NhbGhvc3Qgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTaGFyZSBsb2NhbGhvc3Qgd2l0aCBhIFBpbmdneSBIVFRQUyB0dW5uZWwsIHRlc3QgdGhlIHB1YmxpYyBVUkwgZnJvbSB5b3VyIHBob25lLCBhbmQgYWRkIGEgdmlzaXRvciBwYXNzd29yZC4gSW5jbHVkZXMgVENQIGZvcndhcmRpbmcsIHRoZSBMb2NhbFR1bm5lbCBucG0gY29tbWFuZCwgYW5kIGZpeGVzIGZvciBjb21tb24gY29ubmVjdGlvbiBwcm9ibGVtcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvbG9jYWxfdHVubmVsL2xvY2FsX3R1bm5lbF9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTIyVDE0OjE1OjI1KzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIHRoZSBsb2NhbCBhcHAiLAogICAgICAidGV4dCI6ICJPcGVuIGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC8gb24gdGhlIG1hY2hpbmUgcnVubmluZyBTU0ggYW5kIGNvbmZpcm0gdGhlIGV4cGVjdGVkIHBhZ2UgbG9hZHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0YXJ0IHRoZSBIVFRQIHR1bm5lbCIsCiAgICAgICJ0ZXh0IjogIkluIGFub3RoZXIgdGVybWluYWwsIHJ1biBzc2ggLXAgNDQzIC1SMDoxMjcuMC4wLjE6ODAwMCBmcmVlLnBpbmdneS5pbyBhbmQgbGVhdmUgYm90aCBwcm9jZXNzZXMgcnVubmluZy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IHRoZSBwdWJsaWMgVVJMIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgcHJpbnRlZCBIVFRQUyBVUkwgb24gYSBwaG9uZSB1c2luZyBtb2JpbGUgZGF0YSBhbmQgY29uZmlybSB0aGF0IHRoZSBzYW1lIHBhZ2UgbG9hZHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlN0b3Agc2hhcmluZyIsCiAgICAgICJ0ZXh0IjogIlByZXNzIEN0cmwrQyBpbiB0aGUgdGVybWluYWwgcnVubmluZyB0aGUgdHVubmVsLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
draft: false
og_image: "images/local_tunnel/local_tunnel_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "local_tunnel/local_tunnel_banner.webp" "A phone requests a public HTTPS URL. Pinggy forwards the request through the laptop's SSH connection to 127.0.0.1:8000." >}}

{{< llm-context >}}To share a local web app with Pinggy, check that it answers at `http://127.0.0.1:8000`, then run `ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io` in a second terminal. Open the printed HTTPS URL on another device. Keep the app and SSH session running until you finish.{{< /llm-context >}}

If your app opens at `http://127.0.0.1:8000` on your laptop, this command gives you an HTTPS link you can open on your phone, even on mobile data:

```bash
ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io
```

{{% tldr %}}

1. **Check the app locally.** Open `http://127.0.0.1:8000` on the machine where you'll start the tunnel. If your app listens on another port, use that port in the command.
2. **Share the printed HTTPS URL.** For a private browser demo, start the tunnel with a visitor password before sharing the link.
3. **Keep the terminal open.** Free Pinggy tunnels expire after 60 minutes. Starting another free tunnel gives you a new address. Press `Ctrl+C` to stop sharing sooner.

{{% /tldr %}}

## Understanding Local Tunnels

A local tunnel is a secure connection that allows external access to a device connected to a private local network from the internet. Local tunnels can handle different protocols such as HTTP, TCP, UDP, etc., which enables tunneling traffic of that specific protocol. For example, an HTTP local tunnel allows you to host a website on your localhost (your local computer) and make it accessible from the internet through a public URL.

Usually, localhost ports aren't reachable from the internet because of NAT, CGNAT, and firewalls. Your laptop opens an outbound SSH connection to Pinggy. When your phone requests the public URL, Pinggy forwards the request over that connection to port 8000 on the laptop. The app can stay bound to loopback, including when your router sits behind carrier-grade NAT. Your network must allow outbound SSH to Pinggy on port 443. [How Pinggy HTTP tunnels work](/docs/http_tunnels/).

## Setting Up Your Local Tunnel

### Start with a page you can recognize

Skip this step if your app is already running. Otherwise, create a new directory named `tunnel-demo` and put one file named `index.html` inside it containing the text `Local tunnel works`. From the parent directory, serve just that folder with Python 3:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory tunnel-demo
```

On Windows with the Python launcher, replace `python3` with `py -3`. Open `http://127.0.0.1:8000/` on the laptop. You should see **Local tunnel works**. If you see a directory listing or a different app, fix that first. The tunnel will serve whatever answers on this port. <a href="https://docs.python.org/3/library/http.server.html#command-line-interface" target="_blank">Python HTTP server options</a>.

### HTTP local tunnel setup

Leave the app running. In a second terminal on the same machine, run the SSH command below. The SSH tab uses your installed OpenSSH client. The CLI tab assumes you've [downloaded the Pinggy executable](/cli/).

{{< ssh_command defaultcommand="ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io" >}}
"{\"cli\":{\"linux\":{\"ps\":\"./pinggy -p 443 -R0:127.0.0.1:8000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:127.0.0.1:8000 free.pinggy.io\"},\"windows\":{\"ps\":\".\\\\pinggy.exe -p 443 -R0:127.0.0.1:8000 free.pinggy.io\",\"cmd\":\".\\\\pinggy.exe -p 443 -R0:127.0.0.1:8000 free.pinggy.io\"}},\"ssh\":{\"linux\":{\"ps\":\"ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io\"},\"windows\":{\"ps\":\"ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:127.0.0.1:8000 free.pinggy.io\"}}}"
{{< /ssh_command >}}

The `-p 443` selects the port your SSH client uses to reach Pinggy. In `-R0:127.0.0.1:8000`, the zero lets Pinggy allocate the remote forwarding port, and the last number is your app's port. If your app moves to port 3000, change only `8000`.

Copy the **HTTPS URL** from the terminal and open it on your phone with Wi-Fi turned off. Free tunnels show a one-time [browser screening page](/docs/http_tunnels/screening/). Continue through it and look for the text or app you saw locally. Seeing that page on mobile data checks the full path. Typing `localhost:8000` on the phone would send the browser back to the phone itself. For a webhook, append the route your app expects, such as `/webhook`, to the printed URL.

If you'd like a QR code for a phone demo, use `qr@free.pinggy.io` in the HTTP command. Point your phone’s camera at the code in the terminal. [QR code option](/docs/advanced/qr_code/).

{{< image "sharing_self_hosted_django_app_from_localhost/pinggy_public_url.webp" "Example terminal output showing where to find the public HTTPS address for a tunnel." >}}

In our November 2026 check, a request to the public HTTPS URL returned HTTP 200 and the text `Local tunnel works`. The password, raw TCP and npm examples below follow their respective client documentation.

{{< video poster="/assets/tunnelvideothumb.webp" src="/assets/pinggy_demo.webm" >}}

### TCP local tunnel setup

Choose HTTP for websites, APIs and webhooks. Choose TCP when the client needs a hostname and port and speaks its own protocol. You can see the difference using the same throwaway web server on port 8000. Stop the HTTPS tunnel and start this one:

{{< ssh_command defaultcommand="ssh -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io" >}}
"{\"cli\":{\"linux\":{\"ps\":\"./pinggy -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\"},\"windows\":{\"ps\":\".\\\\pinggy.exe -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\",\"cmd\":\".\\\\pinggy.exe -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\"}},\"ssh\":{\"linux\":{\"ps\":\"ssh -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\"},\"windows\":{\"ps\":\"ssh -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:127.0.0.1:8000 tcp@free.pinggy.io\"}}}"
{{< /ssh_command >}}

Pinggy prints an address in the form `tcp://HOST:PORT`. For **this Python demo**, open `http://HOST:PORT/` using the actual host and assigned port. This works because Python speaks HTTP over TCP. A client for another protocol would use the host and port in its own connection settings. Raw TCP forwards the bytes the client sends, so encryption and visitor authentication on the public side depend on that protocol. [Pinggy TCP tunnels](/docs/tcp_tunnels/).

{{< image "iot/url.webp" "Pinggy terminal output with the assigned TCP hostname and port highlighted separately." >}}

*Copy both highlighted parts from your own session. The public port can differ from the port your app listens on.*

For example, to reach your own SSH server listening on port 22, replace the final `8000` in the forwarding rule with `22`. From the remote machine, run `ssh -p PORT USER@HOST` with the public port and hostname printed by Pinggy and your local SSH username. The SSH server still checks your credentials.

## Alternative: VPS with SSH Port Forwarding

For those preferring a DIY approach, you can establish local tunnels by renting a VPS and implementing SSH port forwarding to expose local services. This method requires creating SSH connections to your VPS and manually configuring port forwarding rules. Although this approach grants greater control over your setup, it demands significantly more configuration effort and ongoing management of VPS resources, firewall settings, and SSH key authentication. You also manage DNS and HTTPS if reviewers need a named web address. [SSH reverse tunneling walkthrough](/blog/ssh_reverse_tunnelling/).

## LocalTunnel with Node.js

If you searched for the npm package named **LocalTunnel**, it is a separate way to share the same HTTP app. With Node.js and npm installed, leave the app running and use:

```bash
npx localtunnel --port 8000 --local-host 127.0.0.1
```

Open the URL the client prints and keep the process running. This is handy in a project that already uses Node. The Pinggy SSH command above also works on machines that only have an SSH client. <a href="https://github.com/localtunnel/localtunnel#readme" target="_blank">LocalTunnel client documentation</a>.

## Why use a local tunnel? {#why-local-tunnels-are-game-changers}

You can share work in progress with a remote teammate or client without provisioning a staging server for each demo. A reviewer sees the app running on your machine, including changes your development server picks up while the tunnel is open. Because the connection starts from inside your network, a router behind CGNAT can participate as long as your network permits the outbound connection.

For a one-off review, use the generated address. To track active tunnel URLs, sign in to the [Pinggy dashboard](https://dashboard.pinggy.io/) and start the tunnel with your access token. A Pro token can have a persistent subdomain, which saves changing a webhook callback every time you reconnect. You can also point a domain you own at the tunnel. [Persistent subdomains](/docs/persistent_subdomain/) · [Custom domains](/docs/custom_domain/).

An installed SSH client is enough for the HTTP and TCP examples above. For a UDP service, such as a game server that sends datagrams, use the Pinggy CLI's UDP tunnel support. [UDP tunnel setup](/docs/udp_tunnels/).

## Real-World Applications for Local Tunnels

In web development and testing, a tunnel lets you showcase local web applications for live demos, gather client feedback, or conduct collaborative debugging sessions. Mobile app developers benefit by testing applications against backend services running on their development machine without complex deployment steps.

For API integration and webhooks, local tunnels expose local APIs to external services for comprehensive callback testing, webhook validation, and integration verification. For IoT device administration, a tunnel can provide remote access to a device dashboard running on a private network.

System administrators can reach their own SSH server or remote desktop from an external network using a TCP tunnel and the service's usual authentication. When it comes to client presentations, local tunnels deliver seamless demonstrations of prototypes or beta software to remote stakeholders, eliminating the need for premature production deployments.

## Security Considerations and Protection Strategies

A tunnel makes the service on the selected port reachable from outside your network. Check which routes that service exposes before sharing a demo, particularly admin pages and development tools. Use test data and keep production credentials out of the demo environment. For a review limited to known office or VPN addresses, configure [IP filtering](/docs/http_tunnels/ip_whitelist/).

Use the HTTPS URL to encrypt traffic between the visitor and Pinggy. A persistent subdomain gives the team a stable address. To restrict who can use it, add visitor authentication. For raw TCP, choose a service that provides its own encryption and authentication, such as SSH.

### Require a password for a browser demo

An HTTPS link encrypts the browser's connection to Pinggy. Anyone with the link can still request the page unless your app or the tunnel checks who they are. To add a browser login, stop any running tunnel with `Ctrl+C`, replace `YOUR_RANDOM_PASSWORD` with a fresh password, and run:

```bash
ssh -t -p 443 -R0:127.0.0.1:8000 free.pinggy.io "b:viewer:YOUR_RANDOM_PASSWORD" x:https
```

The `b:` option enables Basic authentication, and `x:https` redirects HTTP visitors to HTTPS. Choose a password without a colon, which separates the fields. Open the **new** URL in a private browser window to check the login prompt before sending it to anyone. The username is `viewer`. For a callback that can set an `Authorization` header, Pinggy also supports bearer keys. [Basic authentication](/docs/http_tunnels/basic_auth/) · [Bearer key authentication](/docs/http_tunnels/key_auth/).

While testing webhooks, watch the local server log or use the [HTTP web debugger](/docs/http_tunnels/web_debugger/) to inspect the method, path and response. Close the tunnel when the session ends.

## If the public link doesn't show your app

| What you see | What to check |
|---|---|
| The local URL already fails | Confirm that the app is running, note its actual listening port, and open that port locally before restarting the tunnel. |
| The local page works, but the public request returns a host error | If the app reports an invalid host, add the specific public hostname to the development server's allowed hosts. A new free URL can mean a different hostname. |
| The app works on your laptop, but SSH runs in Docker or WSL | Test the local address from the same environment that runs SSH. Its loopback address points to that environment. |
| Your phone can open the page, but a webhook doesn't arrive | Check the callback's full path, its HTTP method and the server log. Confirm that the sender has the current URL and that the handler is ready to receive the request. |
| A link shared earlier stops working | Check whether SSH disconnected or the free 60-minute session expired. Restart it and share the newly printed URL. |

## Conclusion

For a browser demo, share the HTTPS URL after you’ve opened it on a phone using mobile data and confirmed that it shows the right app. For a webhook, add the handler’s path to that URL. For an SSH session or another TCP service, give the client the assigned hostname and port. When you’re done, press `Ctrl+C` in the tunnel terminal. Your app can keep running locally.
