---
title: "Cloudflare Drop Gets You a Live URL in Seconds - But Only for Static Files"
description: "Cloudflare shipped Drop on July 8, 2026: drag a folder into the browser, get a live URL with no account. Here's what it actually does, its file and time limits, and why it can't replace a tunnel for anything with a backend."
date: 2026-07-10T11:00:00+05:30
draft: false
tags: ["Cloudflare Drop", "static hosting", "developer tools", "Cloudflare", "web hosting", "Pinggy", "tunneling"]
categories: ["Technology", "Developer Tools", "Web Hosting"]
og_image: "images/cloudflare_drop_static_site_hosting/cloudflare_drop_static_site_hosting_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIERlcGxveSBhIFN0YXRpYyBTaXRlIHdpdGggQ2xvdWRmbGFyZSBEcm9wIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGRlcGxveWluZyBhIHN0YXRpYyBzaXRlIHRvIENsb3VkZmxhcmUncyBlZGdlIG5ldHdvcmsgdXNpbmcgQ2xvdWRmbGFyZSBEcm9wLCB3aXRoIG5vIGFjY291bnQgcmVxdWlyZWQgdG8gZ2V0IGEgbGl2ZSBwcmV2aWV3IFVSTC4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRHJhZyBhIGZvbGRlciBvciB6aXAgb250byBjbG91ZGZsYXJlLmNvbS9kcm9wIiwKICAgICAgInRleHQiOiAiR28gdG8gY2xvdWRmbGFyZS5jb20vZHJvcCBhbmQgZHJhZyBhIGZvbGRlciBvZiBzdGF0aWMgYXNzZXRzIG9yIGEgemlwIGZpbGUgb250byB0aGUgcGFnZS4gQ2xvdWRmbGFyZSBzdGFydHMgdXBsb2FkaW5nIGltbWVkaWF0ZWx5IGFuZCBzaG93cyBhIGxpdmUgcHJvZ3Jlc3MgbGlzdCBvZiB0aGUgZmlsZXMgaXQncyBwaWNraW5nIHVwLCBubyBsb2dpbiByZXF1aXJlZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiR2V0IHlvdXIgbGl2ZSBwcmV2aWV3IFVSTCIsCiAgICAgICJ0ZXh0IjogIk9uY2UgdGhlIHVwbG9hZCBmaW5pc2hlcywgeW91IGxhbmQgb24gYSByZWFkeSBzY3JlZW4gd2l0aCBhIGxpdmUgVVJMIG9uIENsb3VkZmxhcmUncyBlZGdlLCBhIDYwLW1pbnV0ZSBjb3VudGRvd24sIGEgQ2xhaW0gYnV0dG9uIHRvIGNvbnZlcnQgdGhlIGRlcGxveW1lbnQgaW50byBhIHBlcm1hbmVudCBvbmUgb24gQ2xvdWRmbGFyZSBQYWdlcywgYW5kIGEgQ29weSBjbGFpbSBsaW5rIG9wdGlvbiB0byBoYW5kIG9mZiB0aGUgY2xhaW0gdG8gc29tZW9uZSBlbHNlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJPcGVuIHRoZSBVUkwgdG8gdmlldyB0aGUgbGl2ZSBzaXRlIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgcHJldmlldyBVUkwgYW5kIHRoZSBzaXRlIGlzIGFscmVhZHkgc2VydmluZyB0cmFmZmljIGZyb20gQ2xvdWRmbGFyZSdzIGVkZ2UsIGV4YWN0bHkgYXMgdXBsb2FkZWQsIHdpdGggbm8gc2lnbi1pbiByZXF1aXJlZCB0byB2aWV3IGl0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbGFpbSBpdCBiZWZvcmUgdGhlIHRpbWVyIHJ1bnMgb3V0LCBvciBsZXQgaXQgZXhwaXJlIiwKICAgICAgInRleHQiOiAiQ2xpY2sgQ2xhaW0gYW5kIHNpZ24gaW4gb3IgcmVnaXN0ZXIgYSBmcmVlIENsb3VkZmxhcmUgYWNjb3VudCB0byBrZWVwIHRoZSBkZXBsb3ltZW50IHBlcm1hbmVudGx5LiBJZiB0aGUgNjAtbWludXRlIHRpbWVyIHJ1bnMgb3V0IGZpcnN0LCB0aGUgZGVwbG95bWVudCBhbmQgaXRzIHRlbXBvcmFyeSBhY2NvdW50IGJvdGggZGlzYXBwZWFyLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "cloudflare_drop_static_site_hosting/cloudflare_drop_static_site_hosting_banner.webp" "Cloudflare Drop lets you drag a folder for a live URL in seconds, but it only hosts static files - Pinggy tunnels still cover a running dev server" >}}

On July 8, 2026, <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a> shipped <a href="https://www.cloudflare.com/drop/" target="_blank">Drop</a>: go to `cloudflare.com/drop`, drag a folder or a zip onto the page, and get a live URL on Cloudflare's edge network in a few seconds. No signup, no `wrangler` config, no CI pipeline. It landed on the <a href="https://developers.cloudflare.com/changelog/post/2026-07-08-cloudflare-drag-and-drop/" target="_blank">Cloudflare changelog</a> that morning and hit the <a href="https://news.ycombinator.com/item?id=48836233" target="_blank">Hacker News front page</a> two days later with over 500 points.

It's a genuinely nice piece of friction removal. It's also, by design, useless for anything with a backend, and that's worth being specific about before you reach for it on your next project.

{{% tldr %}}
1. **What it is** - drag a folder or zip into the browser at `cloudflare.com/drop`, get a public URL on Cloudflare's edge in seconds, no account required.
2. **Limits** - 1,000 files max, 25 MiB per file, static assets only (HTML, CSS, JS, images, fonts), live for 60 minutes unless you claim it.
3. **How it works** - Cloudflare spins up a throwaway sandbox account behind the scenes that expires along with the deployment, unless you sign in to claim it.
4. **What makes it different** - Netlify Drop and Vercel Drop both require an account before anything goes live; Cloudflare Drop is the first anonymous-first option in that lineup.
5. **What it can't do** - no server, no API routes, no database, no websockets, no live reload of a process actually running on your machine.
6. **For that, use a tunnel** - `ssh -p 443 -R0:localhost:3000 free.pinggy.io` exposes whatever's really running on your machine, backend included, not a snapshot of it.
{{% /tldr %}}

## What Drop actually does

The pitch is refreshingly narrow. You have a folder of built static assets, maybe from `vite build` or a static site generator, or maybe something an AI coding agent just wrote to disk. You drag it into the browser at `cloudflare.com/drop`. Cloudflare uploads it, serves it from its edge network, and hands you a URL. That's the whole interaction.

Under the hood it's not really "no account" so much as "an account you never see." Cloudflare provisions a temporary sandbox account for the upload, the kind of throwaway credential that expires on its own. The preview stays live for 60 minutes. If you want to keep it, a "Claim" button on the preview page lets you log in or register a free Cloudflare account and convert the temporary deployment into a permanent one on Cloudflare Pages.

The limits are tight and clearly meant to keep the anonymous path from being abused: 1,000 files per upload, 25 MiB per file, and only static content, HTML, CSS, JavaScript, images, and fonts. No build step runs on Cloudflare's side. If your `dist` folder needs a server-side render or an API to call, Drop will happily host the static shell and silently do nothing about the part that made your app work.

## How to use Cloudflare Drop

The whole flow is three screens. Go to `cloudflare.com/drop` and drag a folder or a zip onto the page. Cloudflare starts uploading right away and shows a live progress list of the files it's picking up.

{{< image "cloudflare_drop_static_site_hosting/drop_the_file.webp" "Cloudflare Drop initializing a deployment after a folder is dropped" >}}

A few seconds later the upload finishes and you land on the "Your site is ready" screen. This is the temporary preview: a live URL on Cloudflare's edge, a countdown showing how long it has left (60 minutes from here), a **Claim** button to convert it into a permanent deployment on Cloudflare Pages, and a **Copy claim link** option if you want someone else to claim it instead.

{{< image "cloudflare_drop_static_site_hosting/your_site_is_ready.webp" "Cloudflare Drop deployment ready screen with a live URL, claim timer, and claim link" >}}

Open that URL and the site is already serving traffic from Cloudflare's edge, exactly as uploaded, no sign-in required to view it.

{{< image "cloudflare_drop_static_site_hosting/web_page_using_cloudflare_url.webp" "Static page loading from the Cloudflare Drop preview URL" >}}

That's the entire interaction: drag a folder in, get a URL back, done. If you let the timer run out without claiming it, the deployment and its throwaway account both disappear.

## Why it's the interesting one

Instant-preview drag-and-drop deploys aren't new. <a href="https://surge.sh/" target="_blank">Surge.sh</a> has done command-line static hosting for years. Netlify Drop and Vercel Drop both let you drag a folder onto a browser tab and get a URL. The difference is that both of those require you to be logged in first. Cloudflare Drop is live before you've authenticated at all, which is the part that got it onto Hacker News: a designer, a client, or an AI agent that just generated a prototype can get a shareable link without anyone stopping to create an account.

That's a real use case. It's good for exactly what it's built for: sharing a mockup with a client, sanity-checking a static export before you commit to a real deploy, handing a teammate a one-off doc site, or giving an AI coding agent something it can point at to verify its own output rendered correctly. The HN thread's main complaint wasn't about the product working, it was about Cloudflare's standard terms-of-service license clause applying to whatever you drop, which is worth reading before you upload anything sensitive.

## Where it stops

The static-only constraint isn't a rough edge, it's the entire design. Drop has no concept of a process. There's no port to forward, no request to proxy, no long-lived connection. It takes files, stores them, and serves them back byte-for-byte. That rules out:

- Any app with a real backend - Express, FastAPI, Django, Rails, anything that runs server-side logic per request
- API routes in a framework like Next.js that aren't statically exportable
- Databases, even an embedded one like SQLite that your app reads at runtime
- WebSocket connections, SSE streams, or anything else that isn't a one-shot HTTP GET
- Incoming webhooks - Drop can't receive a `POST` from Stripe or GitHub, it can only serve files it already has
- Hot reload - the moment you change a local file, your Drop URL is already stale; you'd have to drag the folder in again

None of this is a knock on the product. It's doing one job, doing it with zero friction, and being honest that the job is "static file hosting," not "put my app on the internet."

## The gap it leaves

The interesting question isn't "is Drop good," it's "what do you reach for the moment your project needs a server." Most real local development doesn't stay static for long. A Next.js app has API routes. A Django project has a database. A webhook integration needs an endpoint that can actually receive a request, not a URL that returns a fixed file.

That's the gap a tunnel fills, and it's a different mechanism entirely. Instead of uploading a copy of your files somewhere, a tunnel opens a connection from your machine outward and proxies real traffic to whatever's actually listening on a local port. With <a href="https://pinggy.io" target="_blank">Pinggy</a>, that's one command:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

Point `3000` at whatever your dev server is running on and you get back a public HTTPS URL. There's no build step and no upload, because nothing gets copied anywhere. Requests to that URL travel straight to the process on your laptop. Change a file, your framework's dev server hot-reloads, and the public URL reflects it instantly, because it was never a snapshot to begin with. Point the same command at a WebSocket server, a raw TCP service, or a webhook receiver and it works the same way, because Pinggy isn't inspecting file types, it's forwarding a connection.

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
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Drag a folder into a browser tab</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">One SSH command</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Backend support</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">None - static assets only</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Full - any TCP/HTTP service, any port</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Live updates</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">None - re-drag to update</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Automatic - it's your real dev server</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Webhooks</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Can't receive requests</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Works out of the box</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Time limit</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">60 minutes unless claimed</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Runs as long as your session does</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Account required</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No, until you want to keep it</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No, for the free quick tunnel</td>
</tr>
</tbody>
</table>

They're not really competitors. Drop replaces the "let me spin up a static host real quick" reflex. A tunnel replaces the "let me deploy this to staging just to test one thing" reflex, for anything that isn't static. If you're testing a <a href="/blog/how_to_set_up_and_test_paypal_webhook_locally/">PayPal webhook</a> or a <a href="/blog/how_to_set_up_and_test_discord_bot_webhook/">Discord bot</a> against your local server, Drop was never in the running, because there's no server behind it to receive anything.

## The honest take

Cloudflare Drop is a well-scoped tool that does one narrow thing without asking you to sign up first, and that's a genuinely good default for the "I just need a URL for this HTML" moment. It's not trying to be a deploy pipeline, and it's refreshingly upfront about the 60-minute clock and the file caps.

Where it gets confusing is if you start treating it as a general-purpose "share my project" button. The moment there's a backend, a database, a websocket, or anything that needs to run rather than just sit there and be read, you're back to needing something that proxies to a live process. That's a tunnel's job, and it's been a tunnel's job the whole time. Drop didn't shrink that gap, it just made the static half of it a lot faster to reach for.

## Conclusion

Cloudflare Drop and a tunnel solve two different problems, and the trick is knowing which one you're actually facing. If what you have is a folder of built assets, a static export, or a prototype an AI agent just wrote to disk, Drop gets you a shareable URL faster than anything else out there, no account, no config, no wait. But the second your project needs a server, a database, a websocket, or anything that has to run rather than just be read back, Drop can't help, because it was never built to. That's where a tunnel takes over, pointing a public URL at whatever's actually running on your machine, backend and all, live as long as your process is. Keep both in your kit, reach for whichever one matches what you're actually testing.
