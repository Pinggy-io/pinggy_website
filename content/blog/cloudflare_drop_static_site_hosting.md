---
title: "Cloudflare Drop Gets You a Live URL in Seconds - But Only for Static Files"
description: "Cloudflare Drop lets you drag a folder into the browser and get a live URL with no account. Here's what it actually does, its real file and time limits, how to keep the site, and why it can't replace a tunnel for anything with a backend."
date: 2026-07-10T11:00:00+05:30
lastmod: 2026-11-25T11:00:00+05:30
draft: false
tags: ["Cloudflare Drop", "developer tools", "Cloudflare", "Pinggy", "tunneling"]
categories: ["Technology", "Developer Tools", "Web Hosting"]
og_image: "images/cloudflare_drop_static_site_hosting/cloudflare_drop_static_site_hosting_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIERlcGxveSBhIFN0YXRpYyBTaXRlIHdpdGggQ2xvdWRmbGFyZSBEcm9wIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGRlcGxveWluZyBhIHN0YXRpYyBzaXRlIHRvIENsb3VkZmxhcmUncyBlZGdlIG5ldHdvcmsgdXNpbmcgQ2xvdWRmbGFyZSBEcm9wLCB3aXRoIG5vIGFjY291bnQgcmVxdWlyZWQgdG8gZ2V0IGEgbGl2ZSBwcmV2aWV3IFVSTCwgYW5kIGtlZXBpbmcgaXQgd2l0aCBXcmFuZ2xlciBhZnRlciB5b3UgY2xhaW0gaXQuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRyYWcgYSBmb2xkZXIsIHppcCBvciBIVE1MIGZpbGUgb250byBjbG91ZGZsYXJlLmNvbS9kcm9wIiwKICAgICAgInRleHQiOiAiR28gdG8gY2xvdWRmbGFyZS5jb20vZHJvcCwgYWNjZXB0IHRoZSB0ZXJtcywgYW5kIGRyYWcgeW91ciBidWlsZCBvdXRwdXQgZm9sZGVyLCBhIHppcCBvZiBpdCwgb3IgYSBzaW5nbGUgSFRNTCBmaWxlIG9udG8gdGhlIHBhZ2UuIEtlZXAgZXZlcnkgZmlsZSB1bmRlciA1IE1pQiBhbmQgdGhlIHVwbG9hZCB1bmRlciAxLDAwMCBmaWxlcy4gTm8gbG9naW4gaXMgcmVxdWlyZWQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkdldCB5b3VyIGxpdmUgcHJldmlldyBVUkwiLAogICAgICAidGV4dCI6ICJXaGVuIHRoZSB1cGxvYWQgZmluaXNoZXMgeW91IGxhbmQgb24gdGhlIFlvdXIgc2l0ZSBpcyByZWFkeSBzY3JlZW4gd2l0aCBhIGxpdmUgd29ya2Vycy5kZXYgVVJMLCBhIENsYWltIGJ1dHRvbiB0aGF0IGNvdW50cyBkb3duIGZyb20gNjAgbWludXRlcywgYW5kIGEgQ29weSBjbGFpbSBsaW5rIGJ1dHRvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiB0aGUgVVJMIHRvIHZpZXcgdGhlIGxpdmUgc2l0ZSIsCiAgICAgICJ0ZXh0IjogIk9wZW4gdGhlIHByZXZpZXcgVVJMIGFuZCB0aGUgc2l0ZSBpcyBhbHJlYWR5IHNlcnZpbmcgdHJhZmZpYyBmcm9tIENsb3VkZmxhcmUncyBlZGdlLCBleGFjdGx5IGFzIHVwbG9hZGVkLiBBbnlvbmUgd2l0aCB0aGUgVVJMIGNhbiBvcGVuIGl0LCBhbmQgdW5rbm93biBwYXRocyByZXR1cm4gaW5kZXguaHRtbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2xhaW0gaXQgYmVmb3JlIHRoZSB0aW1lciBydW5zIG91dCwgb3IgbGV0IGl0IGV4cGlyZSIsCiAgICAgICJ0ZXh0IjogIkNsaWNrIENsYWltIGFuZCBzaWduIGluIG9yIHJlZ2lzdGVyIGEgZnJlZSBDbG91ZGZsYXJlIGFjY291bnQgdG8ga2VlcCB0aGUgc2l0ZSBhcyBhIFdvcmtlciBpbiB5b3VyIGFjY291bnQuIFRvIGxldCBzb21lb25lIGVsc2UgY2xhaW0gaXQsIHNlbmQgdGhlbSB0aGUgZGFzaC5jbG91ZGZsYXJlLmNvbS9jbGFpbS1wcmV2aWV3IGxpbmsgYmVoaW5kIHRoZSBDbGFpbSBidXR0b24sIG5vdCB0aGUgQ29weSBjbGFpbSBsaW5rIGFkZHJlc3MuIElmIHRoZSA2MC1taW51dGUgdGltZXIgcnVucyBvdXQgZmlyc3QsIHRoZSBzaXRlIGFuZCBpdHMgdGVtcG9yYXJ5IGFjY291bnQgYXJlIGRlbGV0ZWQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRlcGxveSB1cGRhdGVzIHdpdGggV3JhbmdsZXIiLAogICAgICAidGV4dCI6ICJSdW4gbnB4IHdyYW5nbGVyIGxvZ2luIG9uIHRoZSBhY2NvdW50IHRoYXQgY2xhaW1lZCB0aGUgc2l0ZSwgYWRkIGEgd3JhbmdsZXIuanNvbmMgd2hvc2UgbmFtZSBpcyB0aGUgZHJvcC0gV29ya2VyIG5hbWUgZnJvbSB0aGUgaG9zdG5hbWUgYW5kIHdob3NlIGFzc2V0cy5kaXJlY3RvcnkgcG9pbnRzIGF0IHlvdXIgYnVpbGQgZm9sZGVyLCB0aGVuIHJ1biBucHggd3JhbmdsZXIgZGVwbG95IHRvIHVwZGF0ZSB0aGUgc2FtZSBVUkwuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "cloudflare_drop_static_site_hosting/cloudflare_drop_static_site_hosting_banner.webp" "Cloudflare Drop lets you drag a folder for a live URL in seconds, but it only hosts static files - Pinggy tunnels still cover a running dev server" >}}

Getting a small web project in front of someone used to mean picking a host, creating an account and wiring up a deploy before anyone saw a single page. For static sites that step has been shrinking for years, and <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a>'s <a href="https://www.cloudflare.com/drop/" target="_blank">Drop</a> takes it about as far as it can go.

Go to `cloudflare.com/drop`, drag in a folder, a zip or a single HTML file, and a few seconds later you have a live `workers.dev` URL on Cloudflare's network. There's no signup, no Wrangler config and no CI pipeline. The site stays up for 60 minutes unless you claim it into a Cloudflare account, and an upload can hold up to 1,000 files of 5 MiB each. It was announced on the <a href="https://developers.cloudflare.com/changelog/post/2026-07-08-cloudflare-drag-and-drop/" target="_blank">Cloudflare changelog</a> and reached the <a href="https://news.ycombinator.com/item?id=48836233" target="_blank">Hacker News front page</a> with 524 points and 283 comments.

The catch is that Drop only serves files. Anything with a backend, an API or a webhook needs something else, and it's worth knowing exactly where that line sits before you reach for it on your next project.

{{% tldr %}}
1. **What it is** - drag a folder, zip or HTML file into the browser at `cloudflare.com/drop`, get a public `workers.dev` URL in seconds, no account required.
2. **Limits** - 1,000 files max, 5 MiB per file, static assets only, live for 60 minutes unless you claim it.
3. **How it works** - your files become a static-assets Worker in a temporary account that expires with the deployment, unless you claim it.
4. **Keeping it** - send the link behind the **Claim** button (not **Copy claim link**), then ship updates with `wrangler deploy`.
5. **What it can't do** - no server, no API routes, no database, no websockets, no live reload of a process actually running on your machine.
6. **For that, use a tunnel** - `ssh -p 443 -R0:localhost:3000 free.pinggy.io -T` exposes whatever's really running on your machine, backend included, not a snapshot of it.
{{% /tldr %}}

## What Drop actually does

The pitch is refreshingly narrow. You have a folder of built static assets, maybe from `vite build` or a static site generator, or maybe something an AI coding agent just wrote to disk. You drag it into the browser at `cloudflare.com/drop`. Cloudflare uploads it, serves it from its edge network, and hands you a URL. That's the whole interaction.

Under the hood it's not really "no account" so much as "an account you never see." Cloudflare provisions a <a href="https://blog.cloudflare.com/temporary-accounts" target="_blank">temporary account</a> for the upload and deploys your files into it as a static-assets Worker named `drop-` plus 12 random characters. The preview stays live for 60 minutes. If you want to keep it, a "Claim" button lets you log in or register a free Cloudflare account and move that Worker into it.

The limits are tight and clearly meant to keep the anonymous path from being abused: 1,000 files per upload and 5 MiB per file, per the <a href="https://developers.cloudflare.com/workers/platform/claim-deployments/" target="_blank">claim deployments docs</a>. The uploader's own browser check lets files up to 25 MiB through, but the server rejects them with a generic "Something went wrong".

Only static content works, HTML, CSS, JavaScript, images, and fonts, and no build step runs on Cloudflare's side. Unknown paths return your `index.html`, and a `POST` gets a `405`. If your `dist` folder needs a server-side render or an API to call, Drop will happily host the static shell and silently do nothing about the part that made your app work.

## How to use Cloudflare Drop

The whole flow is three screens. Go to `cloudflare.com/drop` and drag a folder or a zip onto the page, with `index.html` at its top level. Cloudflare starts uploading right away and shows a live progress list of the files it's picking up.

{{< image "cloudflare_drop_static_site_hosting/drop_the_file.webp" "Cloudflare Drop initializing a deployment after a folder is dropped" >}}

A few seconds later you land on the "Your site is ready" screen: a live URL on Cloudflare's edge, a **Claim** button counting down from 60 minutes, and a **Copy claim link** button.

{{< image "cloudflare_drop_static_site_hosting/your_site_is_ready.webp" "Cloudflare Drop deployment ready screen with a live URL, claim timer, and claim link" >}}

Open that URL and the site is already serving from Cloudflare's edge, exactly as uploaded. Anyone with the link can view it, so don't drop anything you wouldn't post publicly.

{{< image "cloudflare_drop_static_site_hosting/web_page_using_cloudflare_url.webp" "Static page loading from the Cloudflare Drop preview URL" >}}

To keep it, click **Claim** and sign in or create an account before the countdown ends; if the timer runs out, the deployment and its throwaway account both disappear. To hand the claim to someone else, don't use **Copy claim link**: it copies the Drop page's own address, which only works in your browser. The real claim link is the `dash.cloudflare.com/claim-preview` URL behind the **Claim** button. Right-click it, copy the link address, and send it privately, since whoever completes the claim owns the site.

Dragging a new build onto Drop creates a seperate site with a new URL. To update the claimed one, log Wrangler in to the account that claimed it (`npx wrangler login`, or `npx wrangler login --device` on a remote box), then put the same Worker name (the first label of the hostname) in a `wrangler.jsonc` and deploy:

```jsonc
{
  "name": "drop-9ae24080-bea",
  "compatibility_date": "2026-11-25",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

```bash
npm run build && npx wrangler deploy
```

Same URL, new files.

## Why it's the interesting one

Instant-preview drag-and-drop deploys aren't new. <a href="https://surge.sh/" target="_blank">Surge.sh</a> has done command-line static hosting for years. <a href="https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/" target="_blank">Netlify Drop</a> and <a href="https://vercel.com/docs/drop" target="_blank">Vercel Drop</a> both let you drag a folder onto a browser tab and get a URL, but Netlify password-protects an unclaimed site and Vercel wants an account for anything beyond a plain static drop. Cloudflare's URL is public from the first second, which is the part that got it onto Hacker News: a designer, a client, or an AI agent that just generated a prototype can get a shareable link without anyone stopping to create an account.

That's a real use case. It's good for exactly what it's built for: sharing a mockup with a client, sanity-checking a static export before you commit to a real deploy, handing a teammate a one-off doc site, or giving an AI coding agent something it can point at to verify its own output rendered correctly. The HN thread's main complaint wasn't about the product working, it was about Cloudflare's standard terms-of-service license clause applying to whatever you drop, which is worth reading before you upload anything sensitive.

## Where it stops

The static-only constraint isn't a rough edge, it's the entire design. Drop has no concept of a process. There's no port to forward, no request to proxy, no long-lived connection. It takes files, stores them, and serves them back byte-for-byte. That rules out:

- Any app with a real backend - Express, FastAPI, Django, Rails, anything that runs server-side logic per request
- API routes in a framework like Next.js that aren't statically exportable
- Databases, even an embedded one like SQLite that your app reads at runtime
- WebSocket connections, SSE streams, or anything else that isn't a one-shot HTTP GET
- Incoming webhooks - a `POST` from Stripe or GitHub gets a `405`, because there's nothing to recieve it
- Hot reload - the moment you change a local file, your Drop URL is already stale; you'd have to drag the folder in again

None of this is a knock on the product. It's doing one job, doing it with zero friction, and being honest that the job is "static file hosting," not "put my app on the internet."

## The gap it leaves

The interesting question isn't "is Drop good," it's "what do you reach for the moment your project needs a server." Most real local development doesn't stay static for long. A Next.js app has API routes. A Django project has a database. A webhook integration needs an endpoint that can actually receive a request, not a URL that returns a fixed file.

That's the gap a tunnel fills, and it's a different mechanism entirely. Instead of uploading a copy of your files somewhere, a tunnel opens a connection from your machine outward and proxies real traffic to whatever's actually listening on a local port. With [Pinggy](https://pinggy.io), that's one command:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io -T
```

Point `3000` at whatever your dev server is running on and you get back a public HTTPS URL. There's no build step and no upload, because nothing gets copied anywhere. Requests to that URL travel straight to the process on your laptop. Change a file, your framework's dev server hot-reloads, and the public URL reflects it instantly, because it was never a snapshot to begin with. Point the same command at a WebSocket server or a webhook receiver and it works the same way, because Pinggy isn't inspecting file types, it's forwarding a connection. The tradeoff: a free tunnel lasts 60 minutes and gets a new random URL on reconnect, while a [Pro plan](https://pinggy.io/#prices) removes the timeout and gives you a fixed subdomain.

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
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Full - any HTTP or TCP service, any port</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Live updates</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">None - re-drag, or <code>wrangler deploy</code> once claimed</td>
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
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">60 minutes per free tunnel; none on Pro</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Account required</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No, until you want to keep it</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No, for the free tunnel</td>
</tr>
</tbody>
</table>

They're not really competitors. Drop replaces the "let me spin up a static host real quick" reflex. A tunnel replaces the "let me deploy this to staging just to test one thing" reflex, for anything that isn't static. If you're testing a [PayPal webhook](/blog/how_to_set_up_and_test_paypal_webhook_locally/) or a [Discord bot](/blog/how_to_set_up_and_test_discord_bot_webhook/) against your local server, Drop was never in the running, because there's no server behind it to receive anything.

## The honest take

Cloudflare Drop is a well-scoped tool that does one narrow thing without asking you to sign up first, and that's a genuinely good default for the "I just need a URL for this HTML" moment. It's not trying to be a deploy pipeline, and it's upfront about the 60-minute clock, if less so about the file caps.

Where it gets confusing is if you start treating it as a general-purpose "share my project" button. The moment there's a backend, a database, a websocket, or anything that needs to run rather than just sit there and be read, you're back to needing something that proxies to a live process. That's a tunnel's job, and it's been a tunnel's job the whole time. Drop didn't shrink that gap, it just made the static half of it a lot faster to reach for.

## Conclusion

Cloudflare Drop and a tunnel solve different problems. If you have a folder of built static files, Drop gets you a shareable URL faster than anything else, with no account. Once the project needs a server, a database or a websocket, Drop can't help, and a tunnel that points a public URL at your running app is the better fit.
