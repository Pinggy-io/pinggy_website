---
title: "localhost:9090 - Prometheus Web UI Port Guide"
description: "Complete guide to localhost:9090 - the default port of the Prometheus web UI and HTTP API, also used by the Cockpit server console and the Openfire admin console."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-25T10:00:00+05:30
draft: false
tags: ["localhost", "port", "prometheus", "monitoring", "devops", "dashboard"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:9090</p>
  <p class="kyp-hero__sub">Prometheus Web UI Port</p>
  <a href="http://localhost:9090" target="_blank" class="kyp-hero__btn">
    Open localhost:9090
  </a>
  <p class="kyp-hero__note">
    Access the Prometheus query UI and HTTP API running on port 9090
  </p>
</div>

**Localhost:9090** is the default port of **Prometheus**, the open-source monitoring system and time-series database. Open it in a browser and you get the Prometheus web UI: the PromQL query page with graphs, plus the Targets, Alerts and Status pages. The same port serves the HTTP API (`/api/v1/query`) and Prometheus's own metrics at `/metrics`.

Port 9090 has a couple of other well-known tenants: **Cockpit**, the Linux server web console that ships with Fedora and RHEL-family distros, and the **Openfire** XMPP server's admin console. If you came here looking for the **OpenClaw** dashboard, current OpenClaw releases serve it on port **18789** by default, not 9090.

---

## Access localhost:9090 from Other Devices

Use {{< link href="https://pinggy.io/" >}}Pinggy tunnel{{< /link >}} to share your Prometheus UI easily:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:9090 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"}}}"
{{</ ssh_command >}}

This exposes the UI instantly. **Warning:** Prometheus has no login by default, so anyone with the URL can run queries and read every metric you collect. Add basic auth to the tunnel with `ssh -p 443 -R0:localhost:9090 -t free.pinggy.io b:username:password`, or set `basic_auth_users` in a Prometheus `--web.config.file`.

---

## Services and Software That Use Port 9090

<div class="kyp-grid">

<div class="kyp-card">
<h3>Prometheus & Monitoring</h3>
<ul>
<li><strong>{{< link href="https://prometheus.io/" >}}Prometheus{{< /link >}}</strong>: Web UI, HTTP API and self-metrics, default <code>--web.listen-address=":9090"</code></li>
<li><strong>{{< link href="https://github.com/prometheus/pushgateway" >}}Pushgateway{{< /link >}}</strong>: Prometheus component for short-lived jobs, default port 9091 (Alertmanager uses 9093, exporters start at 9100)</li>
</ul>
</div>

<div class="kyp-card">
<h3>Server Admin & Other Apps</h3>
<ul>
<li><strong>{{< link href="https://cockpit-project.org/" >}}Cockpit{{< /link >}}</strong>: Linux server web console, listens on 9090 through <code>cockpit.socket</code></li>
<li><strong>{{< link href="https://www.igniterealtime.org/projects/openfire/" >}}Openfire{{< /link >}}</strong>: XMPP server admin console on 9090 (HTTP) and 9091 (HTTPS)</li>
</ul>
</div>

</div>

Looking for {{< link href="https://openclaw.ai/" >}}OpenClaw{{< /link >}}? Its Gateway (which connects messaging apps like Telegram and Discord to the LLM) and dashboard default to port 18789. It only listens on 9090 if you start it with `openclaw gateway --port 9090` or set `gateway.port` in its config (or the `OPENCLAW_GATEWAY_PORT` env var); otherwise open `http://127.0.0.1:18789/` or run `openclaw dashboard`.

---

## How to Troubleshoot Localhost:9090

<div class="kyp-step">
<h3>Step 1: Check if Prometheus is Running</h3>
<p><strong>Action:</strong> Start it with <code>./prometheus --config.file=prometheus.yml</code>, check <code>systemctl status prometheus</code> on a packaged install, or run it in Docker with <code>docker run -p 9090:9090 prom/prometheus</code>.</p>
</div>

<div class="kyp-step">
<h3>Step 2: See What Owns the Port</h3>
<p><strong>Action:</strong> Run <code>lsof -i :9090</code> (macOS/Linux) or <code>netstat -ano | findstr :9090</code> (Windows). On Fedora or RHEL, the answer is often <code>systemd</code> holding <code>cockpit.socket</code>, not Prometheus.</p>
</div>

<div class="kyp-step">
<h3>Step 3: Test the Connection</h3>
<p><strong>Action:</strong> <code>curl http://localhost:9090/-/healthy</code> should return <code>Prometheus Server is Healthy.</code> and <code>curl http://localhost:9090/-/ready</code> returns <code>Prometheus Server is Ready.</code> once it can serve queries.</p>
</div>

---

## Common Problems and Solutions

Here are typical issues with `localhost:9090` and how to resolve them:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>"Connection Refused" Error</h3>
<p><strong>Problem:</strong> You cannot reach the Prometheus UI.</p>
<p><strong>Solution:</strong> Make sure Prometheus finished starting without config errors. In Docker, the port must be published with <code>-p 9090:9090</code>, and a custom <code>--web.listen-address</code> moves the UI off 9090.</p>
</div>

<div class="kyp-problem">
<h3>"bind: address already in use" Error</h3>
<p><strong>Problem:</strong> Prometheus exits at startup because Cockpit or a second Prometheus instance already holds 9090. It does not fall back to another port on its own.</p>
<p><strong>Solution:</strong> Use <code>lsof -i :9090</code> to find the owner. Start Prometheus with <code>--web.listen-address=":9095"</code>, or move Cockpit with <code>sudo systemctl edit cockpit.socket</code>. Avoid 9091, which belongs to Pushgateway (and Openfire's HTTPS console).</p>
</div>

</div>

---

## Summary

* **What it is**: `localhost:9090` is the default Prometheus web UI and HTTP API port, and also Cockpit's and Openfire's admin console port.
* **Troubleshooting**: If 9090 is taken, Prometheus fails with "address already in use" rather than switching ports. Find the owner with `lsof -i :9090` and move one of the services with `--web.listen-address`.

<div class="kyp-quick">
<h3>Quick Start Commands</h3>
<div class="kyp-quick__code">
<code>
# Run Prometheus on port 9090<br>
docker run -p 9090:9090 prom/prometheus<br><br>
# Check it is healthy<br>
curl http://localhost:9090/-/healthy<br><br>
# Check what is running on 9090<br>
lsof -i :9090
</code>
</div>
</div>
