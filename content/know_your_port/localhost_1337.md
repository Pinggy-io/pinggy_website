---
title: "localhost:1337 - Jan Local AI Port Guide"
description: "Complete guide to localhost:1337 - the default port for Jan, an open-source alternative to ChatGPT that runs entirely offline."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "jan", "llm", "ai", "offline"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:1337</p>
  <p class="kyp-hero__sub">Jan Local AI Server Port</p>
  <a href="http://localhost:1337" target="_blank" class="kyp-hero__btn">
    Open localhost:1337
  </a>
  <p class="kyp-hero__note">
    Access your Jan local AI model server running on port 1337
  </p>
</div>

**Localhost:1337** is the default port for **Jan**, a privacy-focused open-source alternative to ChatGPT that runs 100% offline on any Windows, Mac, or Linux computer. The number "1337" (historically spelling "leet", as in "elite") gives a nod to hacker culture, making it an instantly memorable API endpoint. 

Jan exposes an OpenAI-equivalent API natively. It spins up a local server on port 1337 with the identical layout as `api.openai.com/v1`, making it exceptionally easy for developers to plug Jan into applications meant for ChatGPT simply by changing the base URL.

---

## Access localhost:1337 from Other Devices

Use {{< link href="https://pinggy.io/" >}}Pinggy tunnel{{< /link >}} to share your Jan server globally:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:1337 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:1337 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:1337 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\"}}}"
{{</ ssh_command >}}

This allows other applications on foreign networks to communicate securely with your local Jan models.

Jan's API rejects requests whose `Host` header isn't `localhost`, a local IP or an entry in its Trusted Hosts setting (`403 Invalid host header`), so rewrite the header when you tunnel: `ssh -p 443 -R0:localhost:1337 -t free.pinggy.io "u:Host:localhost:1337"`.

---

## Services and Software That Use Port 1337

<div class="kyp-grid">

<div class="kyp-card">
<h3>Jan AI Ecosystem</h3>
<ul>
<li><strong>{{< link href="https://jan.ai/" >}}Jan Desktop{{< /link >}}</strong>: The core UI and AI engine server</li>
<li><strong>Jan API</strong>: The OpenAI-compatible local AI serving endpoint</li>
</ul>
</div>

<div class="kyp-card">
<h3>Legacy / General</h3>
<ul>
<li><strong>Game Servers</strong>: Often used in vintage gaming setups</li>
<li><strong>Various Peer2Peer Clients</strong>: Traditional fallback port</li>
</ul>
</div>

</div>

When Jan boots up its inference server, replacing the endpoint inside your Python or Node tools with `http://localhost:1337/v1` immediately pipes your traffic securely into your offline machine rather than OpenAI's servers.

---

## How to Troubleshoot Localhost:1337

If you can't access `localhost:1337`, here's how to diagnose and fix common Jan development server issues:

<div class="kyp-step">
<h3>Step 1: Check if Jan is Running</h3>
<p><strong>Action:</strong> Confirm that Jan application is active.</p>
<p><strong>How to check:</strong> Ensure the Jan desktop app is open and the local API server feature is enabled in its settings.</p>
</div>

<div class="kyp-step">
<h3>Step 2: Resolve Port Conflicts</h3>
<p><strong>Action:</strong> Ensure no other program is using port 1337.</p>
<p><strong>How to fix:</strong> Use <code>lsof -i :1337</code> (macOS/Linux) or <code>netstat -ano | findstr :1337</code> (Windows) to see if another process is taking the port.</p>
</div>

<div class="kyp-step">
<h3>Step 3: Test the Connection</h3>
<p><strong>Action:</strong> Verify that the local API is accessible.</p>
<p><strong>How to test:</strong> Run <code>curl http://localhost:1337/v1/models</code> to see if it responds with a list of models. If you set an API key in Jan, add <code>-H "Authorization: Bearer YOUR_API_KEY"</code>, otherwise you get <code>401 Unauthorized</code>.</p>
</div>

---

## Common Problems and Solutions

Here are typical issues with `localhost:1337` and how to resolve them:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>"Connection Refused" Error</h3>
<p><strong>Problem:</strong> Jan's API server is down.</p>
<p><strong>Solution:</strong> Open Jan Desktop and ensure the local API server button is switched on in the settings.</p>
</div>

<div class="kyp-problem">
<h3>"Port Already in Use" Error</h3>
<p><strong>Problem:</strong> Another application is occupying port 1337.</p>
<p><strong>Solution:</strong> Find the conflicting process (often a local dev server or game server) and stop it, or configure Jan to use a different port if needed.</p>
</div>

<div class="kyp-problem">
<h3>Model Not Loading</h3>
<p><strong>Problem:</strong> The API responds but requests time out or fail to generate.</p>
<p><strong>Solution:</strong> Ensure a model is downloaded and actively loaded into Jan's memory before sending API requests.</p>
</div>

</div>

---

## Summary

* **What it is**: `localhost:1337` is the default port for the Jan offline local LLM.
* **Who uses it**: AI engineers testing open-source capabilities using existing OpenAI SDK integrations.

<div class="kyp-quick">
<h3>Quick Start Commands</h3>
<div class="kyp-quick__code">
<code>
# Connect OpenAI SDK to Jan<br>
export OPENAI_BASE_URL="http://localhost:1337/v1"
</code>
</div>
</div>
