---
 title: "Expose Apache or Nginx web server"
 description: "Make a locally running Apache or Nginx site reachable on the public internet using a single Pinggy command."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Expose an Apache or Nginx web server with Pinggy

Apache HTTP Server and Nginx are two of the most widely used web servers for serving static sites, PHP applications, and reverse-proxied backends. Both bind to a TCP port on your machine (usually `80` or `8080` for development) and accept HTTP requests. To make that traffic reachable from outside your LAN - for client demos, browser testing on real mobile devices, or webhook integration - you can wrap the local port in a Pinggy HTTP tunnel.

This guide covers tunneling either web server. The flow is identical because both expose plain HTTP on a TCP port.

#### Step 1: Confirm the web server is running locally

For Apache, start the service and check it answers on the configured port:

```bash
sudo systemctl start apache2     # Debian/Ubuntu
# or
sudo systemctl start httpd       # RHEL/CentOS/Fedora

curl http://localhost:80
```

For Nginx:

```bash
sudo systemctl start nginx
curl http://localhost:80
```

If you are running the server on a non-privileged port (for example `8080`), substitute that value in the next step.

#### Step 2: Open a Pinggy HTTP tunnel

Run the following command, replacing `80` with whatever port your server listens on:

```bash
ssh -p 443 -R0:localhost:80 free.pinggy.io
```

Pinggy prints two URLs - an `http://` and an `https://` variant - that map to your local server. The HTTPS URL is served with a valid certificate, so browsers and webhook senders that require TLS work without extra configuration.

#### Step 3: Adjust the virtual host (optional)

Apache and Nginx route requests by the `Host` header. When traffic arrives through a Pinggy tunnel, the header value is the public Pinggy hostname - not `localhost`. If your virtual host is bound to a specific server name, either:

- Add the Pinggy hostname to the `ServerAlias` (Apache) or `server_name` (Nginx) directive, or
- Configure a default/catch-all virtual host so unmatched hostnames still resolve.

For most development setups the default site catches everything and no change is required.

#### Step 4: Forward the original client IP

Pinggy injects standard `X-Forwarded-For` and `Forwarded` headers describing the originating client. If your application or access logs need the real client IP rather than the tunnel's address, configure `mod_remoteip` (Apache) or `set_real_ip_from` (Nginx) to trust those headers.

For a deeper dive on how these headers work, see the [`X-Forwarded-For` reference](/blog/x_forwarded_for_and_forwarded_headers/).
