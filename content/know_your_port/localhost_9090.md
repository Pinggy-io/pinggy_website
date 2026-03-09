---
title: "localhost:9090 - OpenClaw Dashboard & Web UI Port Guide"
description: "Complete guide to localhost:9090 - the popular port used by OpenClaw autonomous AI agent dashboard and Prometheus monitoring."
date: 2026-03-06T10:00:00+05:30
draft: false
tags: ["localhost", "port", "openclaw", "prometheus", "ai", "dashboard"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
  <h2 style="margin: 0 0 15px 0; color: white; font-size: 2.2em;">localhost:9090 / 9091</h2>
  <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9); font-size: 1.1em;">OpenClaw AI Dashboard Port</p>
  <a href="http://localhost:9090" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3); transition: all 0.3s ease; border: none;">
    🤖 Open localhost:9090
  </a>
  <p style="margin: 15px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;">
    Access your OpenClaw Dashboard running on port 9090 or 9091
  </p>
</div>

**Localhost:9090** (and occasionally **9091**) is a widely paired port typically used for local AI dashboards and monitoring gateways. Most notably, it is the default port for the **OpenClaw** autonomous AI agent web UI and its WebSocket Gateway. It's also well known among DevOps engineers as the default port for the **Prometheus** metrics monitoring system.

Port 9090 gives developers a convenient web interface to check up on agent logs, view monitoring statistics, or configure system boundaries without interfering with lower-range common ports like 8080 or 3000.  

---

## Services and Software That Use Port 9090

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🤖 AI & Local Apps</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://openclaw.ai/" >}}OpenClaw AI{{< /link >}}</strong>: Local agent's Web UI / WebSocket gateway</li>
<li><strong>Cockpit</strong>: Server manager often using 9090</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">📊 DevOps & Monitoring</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://prometheus.io/" >}}Prometheus{{< /link >}}</strong>: The premier monitoring and time-series DB</li>
<li><strong>Various Exporters</strong>: Often default to 9091 or 9090</li>
</ul>
</div>

</div>

When using OpenClaw, the AI gateway actively listens on port 9090 to interface between messaging apps (like Telegram, Discord) and the underlying LLM models.

---

## How to Troubleshoot Localhost:9090

<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #856404; margin: 0 0 15px 0;">🔍 Step 1: Check if the Local Server is Active</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> Confirm OpenClaw (or Prometheus) is running.</p>
</div>

<div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #0c5460; margin: 0 0 15px 0;">🚫 Step 2: Try Port 9091</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> If 9090 fails, the server may have automatically shifted to 9091. Open <code>http://localhost:9091</code></p>
</div>

<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #155724; margin: 0 0 15px 0;">🌐 Step 3: Test the Connection</h3>
<p style="margin: 0 0 10px 0;"><strong>Action:</strong> Run a simple curl test <code>curl http://localhost:9090</code> to inspect the headers.</p>
</div>

---

## Access localhost:9090 from Other Devices

Use {{< link href="https://pinggy.io/" >}}Pinggy tunnel{{< /link >}} to share your dashboard easily:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:9090 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"}}}"
{{</ ssh_command >}}

This exposes the UI instantly. **Warning:** If running an AI agent or database portal, ensure authentication is enabled before exposing it to the Internet.

---

## Common Problems and Solutions

Here are typical issues with `localhost:9090` and how to resolve them:

<div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 25px 0;">

<div style="background: #fff; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e74c3c; margin: 0 0 10px 0;">❌ "Connection Refused" Error</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> You cannot reach the dashboard.</p>
<p style="margin: 0;"><strong>Solution:</strong> Ensure your server instance successfully completed its boot sequence in the terminal without errors.</p>
</div>

<div style="background: #fff; border-left: 4px solid #f39c12; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ "Port Already in Use" Error</h3>
<p style="margin: 0 0 10px 0;"><strong>Problem:</strong> OpenClaw and Prometheus might be clashing.</p>
<p style="margin: 0;"><strong>Solution:</strong> Use <code>lsof -i :9090</code> to check. Change one of their configurations to use <code>9091</code> to resolve conflicts.</p>
</div>

</div>

---

## Summary

* **What it is**: `localhost:9090` and `9091` are primarily used by AI dashboard web UIs and DevOps monitoring tools.
* **Troubleshooting**: If 9090 conflicts (common due to Prometheus), the application usually automatically attempts `9091`. Check local port bindings if both fail.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
<h3 style="margin: 0 0 15px 0; font-size: 1.4em;">🚀 Quick Start Commands</h3>
<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin: 15px 0;">
<code style="display: block; color: #fff; font-size: 14px; line-height: 1.6;">
# Check what is running on 9090<br>
lsof -i :9090
</code>
</div>
</div>
