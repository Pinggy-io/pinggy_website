---
title: "Cloudflare Drop: How to Share and Keep a Static Site"
description: "Deploy an HTML file, folder or ZIP with Cloudflare Drop. Check the browser upload limits, share the workers.dev preview, and claim the deployment within 60 minutes to keep it."
date: 2026-07-10T11:00:00+05:30
lastmod: 2026-11-22T11:00:00+05:30
draft: false
tags: ["Cloudflare Drop", "developer tools", "Cloudflare", "Pinggy", "tunneling"]
categories: ["Technology", "Developer Tools", "Web Hosting"]
og_image: "images/cloudflare_drop_static_site_hosting/cloudflare_drop_static_site_hosting_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ2xvdWRmbGFyZSBEcm9wOiBIb3cgdG8gU2hhcmUgYW5kIEtlZXAgYSBTdGF0aWMgU2l0ZSIsCiAgImRlc2NyaXB0aW9uIjogIkRlcGxveSBhbiBIVE1MIGZpbGUsIGZvbGRlciBvciBaSVAgd2l0aCBDbG91ZGZsYXJlIERyb3AuIENoZWNrIHRoZSBicm93c2VyIHVwbG9hZCBsaW1pdHMsIHNoYXJlIHRoZSB3b3JrZXJzLmRldiBwcmV2aWV3LCBhbmQgY2xhaW0gdGhlIGRlcGxveW1lbnQgd2l0aGluIDYwIG1pbnV0ZXMgdG8ga2VlcCBpdC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvY2xvdWRmbGFyZV9kcm9wX3N0YXRpY19zaXRlX2hvc3RpbmcvY2xvdWRmbGFyZV9kcm9wX3N0YXRpY19zaXRlX2hvc3RpbmdfYmFubmVyLndlYnAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yMlQxMTowMDowMCswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQcmVwYXJlIHRoZSBzdGF0aWMgc2l0ZSIsCiAgICAgICJ0ZXh0IjogIlVzZSBhIHNpbmdsZSBIVE1MIGZpbGUsIG9yIGJ1aWxkIHRoZSBzaXRlIGxvY2FsbHkgYW5kIHBsYWNlIGluZGV4Lmh0bWwgYXQgdGhlIHRvcCBvZiB0aGUgb3V0cHV0IGZvbGRlciBvciBaSVAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVwbG9hZCB0aGUgZmlsZXMiLAogICAgICAidGV4dCI6ICJEcm9wIHRoZSBmaWxlLCBmb2xkZXIgb3IgWklQIG9udG8gY2xvdWRmbGFyZS5jb20vZHJvcCBhbmQgd2FpdCBmb3IgdGhlIHJlYWR5IHNjcmVlbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVGVzdCBhbmQgc2hhcmUgdGhlIGxpdmUgVVJMIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgd29ya2Vycy5kZXYgVVJMLCBjaGVjayB0aGF0IHRoZSBhc3NldHMgbG9hZCwgYW5kIHNlbmQgdGhlIGxpdmUgYWRkcmVzcyB0byByZXZpZXdlcnMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsYWltIHRoZSBkZXBsb3ltZW50IiwKICAgICAgInRleHQiOiAiVXNlIENsYWltIG9yIHByaXZhdGVseSBnaXZlIHRoZSBjbGFpbSBsaW5rIHRvIHRoZSBpbnRlbmRlZCBvd25lci4gU2lnbiBpbiBhbmQgZmluaXNoIHRoZSBkYXNoYm9hcmQgcHJvbXB0cyB3aXRoaW4gNjAgbWludXRlcy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "cloudflare_drop_static_site_hosting/cloudflare_drop_static_site_hosting_banner.webp" "Cloudflare Drop accepts an HTML file, a folder or a ZIP. It returns a workers.dev preview URL and gives you 60 minutes to claim the deployment." >}}

On July 8, 2026, <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a> shipped <a href="https://www.cloudflare.com/drop/" target="_blank">Drop</a>: go to `cloudflare.com/drop`, drag an HTML file, a folder or a ZIP onto the page, and get a live URL on Cloudflare's edge network in a few seconds. No signup, no `wrangler` config, no CI pipeline. It landed on the <a href="https://developers.cloudflare.com/changelog/post/2026-07-08-cloudflare-drag-and-drop/" target="_blank">Cloudflare changelog</a> that morning and hit the <a href="https://news.ycombinator.com/item?id=48836233" target="_blank">Hacker News front page</a> two days later with over 500 points.

{{% tldr %}}

1. **For one page**, drop a single HTML file with any filename. If it refers to local images, scripts or stylesheets, upload the folder containing those files instead.
2. **For a built site**, upload the output folder or a ZIP with `index.html` at the root. The browser checks folders for fewer than 2,000 files, at most 25 MiB per file and at most 100 MiB in total.
3. **Share the live URL with reviewers.** Give the claim link only to the person who should control the deployment.
4. **For a local backend**, use a tunnel when the request needs to reach a running process. A Drop-hosted page can also call an API that already has a public address.

{{% /tldr %}}

## What Drop actually does

The pitch is refreshingly narrow. You have a folder of built static assets, maybe from `vite build` or a static site generator, or maybe something an AI coding agent just wrote to disk. You drag it into the browser at `cloudflare.com/drop`. Cloudflare uploads it, serves it from its edge network, and hands you a URL. That's the whole interaction.

Under the hood it's not really "no account" so much as "an account you never see." Cloudflare provisions a temporary sandbox account for the upload, the kind of throwaway credential that expires on its own. The preview stays live for 60 minutes. If you want to keep it, a "Claim" button on the preview page lets you log in or register a free Cloudflare account and keep the Worker in the account that claims it.

For Vite, Hugo or another static site generator, run your normal build locally. Upload the directory with the finished HTML, CSS, images and scripts, typically `dist/` for Vite or `public/` for Hugo. Open the output directory and look for `index.html` at its top level. If you package a ZIP, put the site's contents at the root of the archive. Drop serves the files you give it. Installing dependencies and compiling source code are steps you do before uploading.

### Browser upload limits

We checked the validation used by the <a href="https://www.cloudflare.com/drop/" target="_blank">live Drop uploader</a> in November 2026. It measures sizes in multiples of 1,048,576 bytes (MiB).

| Input | What the browser checks before upload |
|---|---|
| Single HTML file | Up to 25 MiB. A single `.html` file with any name can be the home page. |
| Folder | Up to 1,999 files, up to 25 MiB each, up to 100 MiB altogether. Include `index.html` at the top of the site. |
| ZIP archive | The ZIP itself must be at most 25 MiB. The browser checks it as one file. That check doesn't establish how many extracted files the service will accept. |

If a small app hits the file-count limit, check whether you selected the project directory and included `node_modules/`. If one video exceeds the individual file limit, putting it alongside smaller files won't help. Host the video separately or export a smaller version. Cloudflare also publishes <a href="https://developers.cloudflare.com/workers/platform/limits/" target="_blank">Workers platform limits</a> for deployments made through other workflows.

## How to use Cloudflare Drop

The whole flow is three screens. Go to `cloudflare.com/drop` and drag your HTML file, folder or ZIP onto the page. Cloudflare starts uploading right away and shows a live progress list of the files it's picking up.

{{< image "cloudflare_drop_static_site_hosting/drop_the_file.webp" "Cloudflare Drop initializing a deployment after a folder is dropped" >}}

A few seconds later the upload finishes and you land on the "Your site is ready" screen. This is the temporary preview: a live URL on workers.dev, a countdown showing how long it has left (60 minutes from here), a **Claim** button to keep the Worker in your account, and a **Copy claim link** option if you want someone else to claim it instead.

{{< image "cloudflare_drop_static_site_hosting/your_site_is_ready.webp" "Cloudflare Drop deployment ready screen with a live URL, claim timer, and claim link" >}}

Open that URL and the site is already serving traffic from Cloudflare's edge, exactly as uploaded, no sign-in required to view it.

{{< image "cloudflare_drop_static_site_hosting/web_page_using_cloudflare_url.webp" "Static page loading from the Cloudflare Drop preview URL" >}}

Send the live URL to reviewers. Give the claim link privately to the person who should own the site. They must sign in and complete the dashboard prompts within 60 minutes, including email verification for a new account. If the timer runs out first, the deployment and its temporary account disappear. <a href="https://developers.cloudflare.com/workers/platform/claim-deployments/" target="_blank">Cloudflare’s claim instructions</a>.

### A temporary deployment from the terminal

For repeated previews of a local build, Cloudflare documents a Wrangler equivalent. From the project directory, point it at the built assets. This example uses the compatibility date for November 23, 2026. Use the current date for a new project.

```bash
npm exec --yes wrangler@latest -- deploy ./dist --name static-demo --temporary --compatibility-date 2026-11-23
```

The anonymous flow requires Wrangler 4.102.0 or later and a signed-out environment. Wrangler prints a deployment URL and a claim URL. If you're already authenticated, use the normal deploy command for your intended account and omit `--temporary`. To update a claimed site, authenticate to the account that owns it and use the claimed Worker's name. <a href="https://www.cloudflare.com/drop/" target="_blank">Drop's CLI example</a> · <a href="https://developers.cloudflare.com/workers/platform/claim-deployments/" target="_blank">Wrangler authentication and claiming</a>.

## Why it's the interesting one

Instant-preview drag-and-drop deploys aren't new. <a href="https://surge.sh/" target="_blank">Surge.sh</a> has done command-line static hosting for years. Netlify Drop also lets you publish a static folder and claim it afterward. Vercel Drop lets you select a team and can run a framework build. With Cloudflare, a designer or client can open the preview immediately, then claim the deployment in their own account. <a href="https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/" target="_blank">Netlify Drop quickstart</a> · <a href="https://vercel.com/changelog/vercel-drop" target="_blank">Vercel Drop announcement</a>.

That's a real use case. It's good for exactly what it's built for: sharing a mockup with a client, sanity-checking a static export before you commit to a real deploy, handing a teammate a one-off doc site, or giving an AI coding agent something it can point at to verify its own output rendered correctly. The <a href="https://news.ycombinator.com/item?id=48836233" target="_blank">Hacker News discussion</a> also raised a question worth considering for client mockups: do you have permission to share the material at a public URL?

## Where it stops

The static-only constraint isn't a rough edge, it's the entire design. Drop has no concept of a process. There's no port to forward, no request to proxy, no long-lived connection. It takes files, stores them, and serves them back byte-for-byte. For the uploaded site, that rules out:

- Any app with a real backend - Express, FastAPI, Django, Rails, anything that runs server-side logic per request
- API routes in a framework like Next.js that aren't statically exportable
- Databases, even an embedded one like SQLite that your app reads at runtime
- Hosting a WebSocket or server-sent events (SSE) endpoint
- Incoming webhooks - the upload supplies no handler for a `POST` from Stripe or GitHub
- Hot reload - the moment you change a local file, your Drop URL is already stale; you'd have to drag the folder in again

A static frontend can still be interactive. A search box that filters a downloaded JSON file runs entirely in the browser. A form that posts to an existing public API can also work, provided the API accepts the site's origin. But if the form posts to a relative path such as `/api/feedback`, the browser sends that request to the Drop site. Uploading your Express or Django source alongside the HTML won't start a handler there. And `localhost` in a reviewer's browser points to the reviewer's own machine.

## The gap it leaves

The interesting question isn't "is Drop good," it's "what do you reach for the moment your project needs a server." Most real local development doesn't stay static for long. A Next.js app has API routes. A Django project has a database. A webhook integration needs an endpoint that can actually receive a request, not a URL that returns a fixed file.

That's the gap a tunnel fills, and it's a different mechanism entirely. Instead of uploading a copy of your files somewhere, a tunnel opens a connection from your machine outward and proxies real traffic to whatever's actually listening on a local port. With <a href="https://pinggy.io" target="_blank">Pinggy</a>, that's one command:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

Point `3000` at whatever your dev server is running on and you get back a public HTTPS URL. There's no build step and no upload, because nothing gets copied anywhere. Requests to that URL travel straight to the process on your laptop. Change a file, your framework's dev server hot-reloads, and the public URL reflects it instantly, because it was never a snapshot to begin with. This HTTP tunnel also works for WebSocket upgrades and webhook requests. For a raw TCP service, select a TCP tunnel with `tcp@free.pinggy.io` and connect to the assigned host and port. A free tunnel lasts up to 60 minutes and closes earlier if you disconnect. [Local tunnel walkthrough](/blog/local_tunnel/).

## Drop vs. a tunnel, side by side

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;"></th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Cloudflare Drop</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Pinggy tunnel</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>What it serves</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">A copy of static files you upload</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">The actual process running on your machine</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Setup</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Drop an HTML file, folder or ZIP into a browser tab</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">One SSH command</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Backend support</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">None - static assets only</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Local HTTP or TCP service, using the matching tunnel type</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Live updates</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">None - re-drag to update</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Live while the dev server and tunnel are running</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Webhooks</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No webhook handler</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Forwards requests to your local handler</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Time limit</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">60 minutes unless claimed</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Up to 60 minutes on the free plan</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Account required</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No, until you want to keep it</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No, for the free quick tunnel</td>
</tr>
</tbody>
</table>

## Conclusion

For a design review, upload the finished HTML and assets to Cloudflare Drop and send the reviewer the live `workers.dev` URL. They can browse the site even after you close your laptop. If they need to keep the deployment, send them the separate claim link so they can finish claiming it within 60 minutes.

If you're testing a <a href="/blog/how_to_set_up_and_test_paypal_webhook_locally/">PayPal webhook</a> or a <a href="/blog/how_to_set_up_and_test_discord_bot_webhook/">Discord bot</a> against your local server, share the HTTPS tunnel URL so the callback reaches the handler on your machine.
