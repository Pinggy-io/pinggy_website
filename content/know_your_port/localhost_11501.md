---
title: "localhost:11501 - Khajane 2 (K2) Treasury App Port Guide"
description: "Guide to https://localhost:11501 - the local port used by the Khajane 2 (K2) desktop app from Karnataka's Department of Treasuries, with fixes for certificate warnings and connection errors."
date: 2026-10-24T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "khajane2", "dsc", "https"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:11501</p>
  <p class="kyp-hero__sub">Khajane 2 (K2) Local App Port</p>
  <a href="https://localhost:11501" target="_blank" class="kyp-hero__btn">
    Open https://localhost:11501
  </a>
  <p class="kyp-hero__note">
    Opens the Khajane 2 app running on this computer. Note the https://
  </p>
</div>

**Localhost:11501** is the port used by the **Khajane II (K2)** desktop application. K2 is the Government of Karnataka's Integrated Financial Management System, run by the {{< link href="https://khajane.karnataka.gov.in/" >}}Department of Treasuries{{< /link >}}, and it is what drawing and disbursing officers (DDOs) and treasury staff use for bill preparation and other treasury work. The installer, listed as "Khajane II Application" from DOT - Government of Karnataka, runs a small HTTPS server on your PC at `https://localhost:11501`.

Why does a web portal need a program on your PC at all? A web page can't talk to USB hardware such as a Digital Signature Certificate (DSC) token on its own, so government portals that need signing usually ship a small local helper and have the page call it on `localhost`. The Department of Treasuries says a DSC is needed for work on K2, and that biometric registration is compulsory for every K2 user.

Two things trip most people up:

- **It's `https://`, not `http://`.** Typing `http://localhost:11501` won't work.
- **The certificate is self-signed.** Your browser will show a "Your connection is not private" warning the first time. On your own machine, for this app, that's expected.

---

## Can You Open localhost:11501 From Another Device?

No, and for K2 you shouldn't try. `localhost` means "this computer", so the K2 app has to run on the same PC as your browser and your DSC token. Opening `localhost:11501` on your phone looks for the app on your phone, where it doesn't exist.

Don't put the K2 app on the internet with a tunnel either. It is the bridge to your DSC token, and a public URL pointing at it is a public URL pointing at your signing setup. If you need K2 on a different computer, install the K2 app and your token driver there.

### If 11501 Is Your Own App

Port 11501 isn't reserved for K2. If you've picked it for your own dev server and want to share it, a {{< link href="https://pinggy.io/" >}}Pinggy tunnel{{< /link >}} gives it a public URL:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11501 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11501 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11501 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That's useful for showing a work-in-progress app to a teammate, testing it on a phone, or receiving webhooks. Keep it to apps you'd be fine with anyone reaching.

---

## What Uses Port 11501

<div class="kyp-grid">

<div class="kyp-card">
<h3>Khajane II (K2)</h3>
<ul>
<li><strong>Khajane II Application</strong>: The Windows app from the Department of Treasuries that serves <code>https://localhost:11501</code></li>
<li><strong>K2 web portal</strong>: The treasury site your browser has open, which calls the local app</li>
</ul>
</div>

<div class="kyp-card">
<h3>What K2 Works Alongside</h3>
<ul>
<li><strong>DSC USB token</strong>: Your Digital Signature Certificate, plus the token driver from its vendor</li>
<li><strong>Biometric registration</strong>: Done in person at your treasury, as the department requires for all K2 users</li>
</ul>
</div>

</div>

Get the K2 installer from your district treasury office rather than a third-party download site. The app needs to be installed and running before anything on `https://localhost:11501` will load.

---

## How to Troubleshoot Localhost:11501

If `https://localhost:11501` won't open, work through these in order:

<div class="kyp-step">
<h3>Step 1: Check That the K2 App Is Running</h3>
<p><strong>Action:</strong> Start the Khajane II app from the Start menu or its desktop shortcut, then give it a few seconds.</p>
<p><strong>How to check:</strong> Run <code>netstat -ano | findstr :11501</code> in Command Prompt. A line ending in <code>LISTENING</code> means something is serving the port.</p>
</div>

<div class="kyp-step">
<h3>Step 2: Use https:// and Accept the Certificate</h3>
<p><strong>Action:</strong> Open <code>https://localhost:11501</code> with the <code>s</code>.</p>
<p><strong>How to fix the warning:</strong> In Chrome or Edge, click <em>Advanced</em>, then <em>Proceed to localhost (unsafe)</em> or <em>Continue to localhost (unsafe)</em>. In Firefox, click <em>Advanced</em>, then <em>Accept the Risk and Continue</em>. Then go back to the K2 portal and retry.</p>
</div>

<div class="kyp-step">
<h3>Step 3: Look for a Port Conflict</h3>
<p><strong>Action:</strong> Make sure the program on 11501 is actually K2.</p>
<p><strong>How to check:</strong> Take the PID from the last column of the <code>netstat</code> output and run <code>tasklist /FI "PID eq &lt;pid&gt;"</code>. If it's some other program, close it and restart K2.</p>
</div>

---

## Common Problems and Solutions

<div class="kyp-problems">

<div class="kyp-problem">
<h3>"This site can't be reached" (ERR_CONNECTION_REFUSED)</h3>
<p><strong>Problem:</strong> Nothing is listening on port 11501.</p>
<p><strong>Solution:</strong> The K2 app isn't running, or it crashed. Start it again. If it closes straight away, check whether your antivirus quarantined it.</p>
</div>

<div class="kyp-problem">
<h3>"Your connection is not private" (NET::ERR_CERT_AUTHORITY_INVALID)</h3>
<p><strong>Problem:</strong> The browser doesn't trust K2's self-signed certificate.</p>
<p><strong>Solution:</strong> This is expected for the K2 app on your own computer. Click <em>Advanced</em> and proceed. Only do this for <code>localhost</code>, never for a site on the internet.</p>
</div>

<div class="kyp-problem">
<h3>404 or Blank Page After Proceeding</h3>
<p><strong>Problem:</strong> You accepted the warning and got a 404 or an empty page.</p>
<p><strong>Solution:</strong> That usually just means the app is up and the certificate is accepted. The local app isn't meant to be browsed directly, so go back to the K2 portal and try again.</p>
</div>

<div class="kyp-problem">
<h3>DSC Token Not Detected</h3>
<p><strong>Problem:</strong> K2 loads, but signing fails or finds no certificate.</p>
<p><strong>Solution:</strong> Install the driver for your token's make, plug the token straight into the PC (not a hub), and check the certificate hasn't expired. If it still fails, contact your district treasury help desk.</p>
</div>

</div>

---

## Summary

* **What it is**: `https://localhost:11501` is where the Khajane II (K2) desktop app from Karnataka's Department of Treasuries runs on your PC.
* **Who uses it**: DDOs and treasury staff working on K2, alongside a DSC token.
* **Troubleshooting**: Make sure the app is running, use `https://`, and accept the self-signed certificate warning.
* **Remote access**: Don't tunnel it. K2 needs to run on the same computer as your browser and DSC token.

<div class="kyp-quick">
<h3>Quick Check Commands (Windows)</h3>
<div class="kyp-quick__code">
<code>
# Is anything listening on 11501?<br>
netstat -ano | findstr :11501<br><br>
# Which program owns that PID?<br>
tasklist /FI "PID eq &lt;pid&gt;"<br><br>
# Open the K2 local app in your default browser<br>
start https://localhost:11501
</code>
</div>
</div>
