---
title: "localhost:9090 - OpenClaw Dashboard & Web UI Port Guide"
description: "Complete guide to localhost:9090 - the popular port used by OpenClaw autonomous AI agent dashboard and Prometheus monitoring."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "openclaw", "prometheus", "ai", "dashboard"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:9090 / 9091</p>
  <p class="kyp-hero__sub">OpenClaw AI Dashboard Port</p>
  <a href="http://localhost:9090" target="_blank" class="kyp-hero__btn">
    Open localhost:9090
  </a>
  <p class="kyp-hero__note">
    Access your OpenClaw Dashboard running on port 9090 or 9091
  </p>
</div>

**Localhost:9090** (and occasionally **9091**) is a widely paired port typically used for local AI dashboards and monitoring gateways. If you're looking for the **OpenClaw** autonomous AI agent web UI and its WebSocket Gateway, note that current OpenClaw releases serve both on port **18789** by default, not 9090. It's also well known among DevOps engineers as the default port for the **Prometheus** metrics monitoring system.

Port 9090 gives developers a convenient web interface to check up on agent logs, view monitoring statistics, or configure system boundaries without interfering with lower-range common ports like 8080 or 3000.  

---

## Access localhost:9090 from Other Devices

Use {{< link href="https://pinggy.io/" >}}Pinggy tunnel{{< /link >}} to share your dashboard easily:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:9090 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"}}}"
{{</ ssh_command >}}

This exposes the UI instantly. **Warning:** If running an AI agent or database portal, ensure authentication is enabled before exposing it to the Internet.

---

## Services and Software That Use Port 9090

<div class="kyp-grid">

<div class="kyp-card">
<h3>AI & Local Apps</h3>
<ul>
<li><strong>{{< link href="https://openclaw.ai/" >}}OpenClaw AI{{< /link >}}</strong>: Local agent's Web UI / WebSocket gateway</li>
<li><strong>Cockpit</strong>: Server manager often using 9090</li>
</ul>
</div>

<div class="kyp-card">
<h3>DevOps & Monitoring</h3>
<ul>
<li><strong>{{< link href="https://prometheus.io/" >}}Prometheus{{< /link >}}</strong>: The premier monitoring and time-series DB</li>
<li><strong>{{< link href="https://github.com/prometheus/pushgateway" >}}Pushgateway{{< /link >}}</strong>: Prometheus component for short-lived jobs, default port 9091 (exporters start at 9100)</li>
</ul>
</div>

</div>

OpenClaw's Gateway sits between messaging apps (like Telegram, Discord) and the underlying LLM models. It only listens on 9090 if you start it with `openclaw gateway --port 9090` or set `gateway.port` in its config (or the `OPENCLAW_GATEWAY_PORT` env var); otherwise open `http://127.0.0.1:18789/` or run `openclaw dashboard`.

---

## How to Troubleshoot Localhost:9090

<div class="kyp-step">
<h3>Step 1: Check if the Local Server is Active</h3>
<p><strong>Action:</strong> Confirm OpenClaw (or Prometheus) is running.</p>
</div>

<div class="kyp-step">
<h3>Step 2: Try Port 9091</h3>
<p><strong>Action:</strong> If 9090 fails, the server may have automatically shifted to 9091. Open <code>http://localhost:9091</code></p>
</div>

<div class="kyp-step">
<h3>Step 3: Test the Connection</h3>
<p><strong>Action:</strong> Run a simple curl test <code>curl http://localhost:9090</code> to inspect the headers. For Prometheus, <code>curl http://localhost:9090/-/healthy</code> should return <code>Prometheus Server is Healthy.</code></p>
</div>

---

## Common Problems and Solutions

Here are typical issues with `localhost:9090` and how to resolve them:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>"Connection Refused" Error</h3>
<p><strong>Problem:</strong> You cannot reach the dashboard.</p>
<p><strong>Solution:</strong> Ensure your server instance successfully completed its boot sequence in the terminal without errors.</p>
</div>

<div class="kyp-problem">
<h3>"Port Already in Use" Error</h3>
<p><strong>Problem:</strong> OpenClaw and Prometheus might be clashing.</p>
<p><strong>Solution:</strong> Use <code>lsof -i :9090</code> to check. Change one of their configurations to use <code>9091</code> to resolve conflicts.</p>
</div>

</div>

---

## Summary

* **What it is**: `localhost:9090` and `9091` are primarily used by AI dashboard web UIs and DevOps monitoring tools.
* **Troubleshooting**: If 9090 conflicts (common due to Prometheus), the application usually automatically attempts `9091`. Check local port bindings if both fail.

<div class="kyp-quick">
<h3>Quick Start Commands</h3>
<div class="kyp-quick__code">
<code>
# Check what is running on 9090<br>
lsof -i :9090
</code>
</div>
</div>
