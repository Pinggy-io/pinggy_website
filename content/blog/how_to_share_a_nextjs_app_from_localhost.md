---
title: "How to Share a Next.js App from Localhost"
description: "Learn how to securely host your Next.js app online using Pinggy. Step-by-step guide for running your app locally and creating secure tunnels."
date: 2025-03-23T10:00:00+05:30
lastmod: 2026-06-03T10:00:00+05:30
draft: false
tags: ["Next.js", "Pinggy", "guide", "tunneling", "remote access"]
og_image: "images/how_to_share_a_nextjs_app_from_localhost/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KICB7CiAgICAiQGNvbnRleHQiOiAiaHR0cHM6Ly9zY2hlbWEub3JnLyIsCiAgICAiQHR5cGUiOiAiSG93VG8iLAogICAgIm5hbWUiOiAiSG93IHRvIFNoYXJlIGEgTmV4dC5qcyBBcHAgZnJvbSBMb2NhbGhvc3QiLAogICAgImRlc2NyaXB0aW9uIjogIkxlYXJuIGhvdyB0byBzZWN1cmVseSBob3N0IHlvdXIgTmV4dC5qcyBhcHAgb25saW5lIHVzaW5nIFBpbmdneS4gVGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgd2Fsa3MgeW91IHRocm91Z2ggcnVubmluZyB5b3VyIGFwcCBsb2NhbGx5IGFuZCBjcmVhdGluZyBhIHNlY3VyZSB0dW5uZWwgZm9yIHJlbW90ZSBhY2Nlc3MuIiwKICAgICJzdGVwIjogWwogICAgICB7IkB0eXBlIjoiSG93VG9TdGVwIiwibmFtZSI6IkNyZWF0ZSBhIE5leHQuanMgQXBwIiwidGV4dCI6Im5weCBjcmVhdGUtbmV4dC1hcHAgbXktYXBwIn0sCiAgICAgIHsiQHR5cGUiOiJIb3dUb1N0ZXAiLCJuYW1lIjoiUnVuIE5leHQuanMgTG9jYWxseSIsInRleHQiOiJucG0gcnVuIGRldiJ9LAogICAgICB7IkB0eXBlIjoiSG93VG9TdGVwIiwibmFtZSI6IkNyZWF0ZSBUdW5uZWwgd2l0aCBQaW5nZ3kiLCJ0ZXh0Ijoic3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgZnJlZS5waW5nZ3kuaW8ifSwKICAgICAgeyJAdHlwZSI6Ikhvd1RvU3RlcCIsIm5hbWUiOiJBY2Nlc3MgVXNpbmcgUHVibGljIFVSTCAiLCJ0ZXh0IjoiVmlzaXQgVXNpbmcgUGluZ2d54oCRZ2VuZXJhdGVkIFVSTCBodHRwczovL3lvdXItYXBwLnBpbmdneS5saW5rIGluIHlvdXIgYnJvd3NlciJ9CiAgICBdCiAgfQogIDwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "how_to_share_a_nextjs_app_from_localhost/banner.webp" "How to Share a Next.js App from Localhost" >}}

You're building a {{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} app and want to show someone on another machine - a client, a teammate, a reviewer - without pushing to a staging environment. [Pinggy](https://pinggy.io) makes that a one-command operation. This guide walks through the full setup: running your Next.js dev server locally and punching it through a secure SSH tunnel so anyone can reach it from a public URL in minutes.

{{% tldr %}}
1. **Run Next.js App**
   - Create and start your <a href="https://nextjs.org/" target="_blank">Next.js</a> app locally:
     ```bash
     npx create-next-app@latest my-app
     cd my-app
     npm run dev
     ```
   - Your app is now live at `http://localhost:3000`.
2. **Expose It with Pinggy**
   - Open a new terminal and run:
     ```bash
     ssh -p 443 -R0:localhost:3000 free.pinggy.io
     ```
   - Pinggy prints a public URL (e.g., `https://your-app.pinggy.link`). Share it with anyone - no firewall rules or server setup required.

<!-- llm-context: To share a Next.js app from localhost - run `npx create-next-app@latest my-app && cd my-app && npm run dev` (starts on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL via Pinggy tunnel. -->
{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/HJCr-9HpTpY?si=9mEqvhjSLmwRQbRw" title="How to Share a Next.js App from Localhost - Tutorial Video" >}}

## What Is Next.js?
{{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} is an open‑source React framework maintained by {{< link href="https://vercel.com/" >}}Vercel{{< /link >}}. As of Next.js 15, the App Router is the recommended default, bringing React Server Components, Server Actions, and streaming layouts out of the box. The Pages Router still works if you’re on an older codebase.

Key things Next.js handles for you:

- **App Router + React Server Components** - server-rendered by default, client components opt-in
- **Server Actions** for form handling and data mutations without a separate API layer
- **Static, Dynamic, and Incremental rendering** - mix strategies per route
- **Turbopack** (default dev bundler in Next.js 15) for noticeably faster cold starts and HMR
- **Built-in routing, image optimization, and font loading** - no extra config

The `npm run dev` command starts on port 3000 in all current versions, which is what Pinggy will forward.

## Sharing Your Local Next.js App

Your Next.js dev server listens on `localhost:3000`, which only your machine can reach. {{< link href="https://en.wikipedia.org/wiki/Carrier-grade_NAT" >}}CGNAT{{< /link >}}, home router NAT, and corporate firewalls all block direct inbound connections - so there's no way to just hand someone your IP.

The usual workaround is a deployment: push to Vercel, wait for the build, share the preview URL. That works fine for code reviews, but it's heavy for a quick demo or a five-minute feedback loop. You also can't easily demo features that depend on localhost environment variables, local databases, or `localhost`-only OAuth redirect URIs.

[Pinggy](https://pinggy.io) solves this with a reverse SSH tunnel. One command forwards a public HTTPS URL to your local port - no firewall rules, no server setup, no deploy pipeline. The tunnel stays alive as long as the SSH connection does.

## Prerequisites
-  **Node.js and npm**: Installed on your system. You can download it from {{< link href="https://nodejs.org/" >}}Node.js official website{{< /link >}}.
- **SSH client** (macOS/Linux built‑in; Windows via Git Bash or OpenSSH)  
- [Pinggy account](https://dashboard.pinggy.io/) **(Optional)**: if you wish to use custom domains or other advanced features.
- **Basic Terminal Knowledge**: Familiarity with running commands.

## Step 1: Create & Run Your Next.js App

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```
{{< image "how_to_share_a_nextjs_app_from_localhost/next_app_command.webp" "Next app create command" >}}


Visit `http://localhost:3000` to confirm your app is live locally.

{{< image "how_to_share_a_nextjs_app_from_localhost/npm_run_command.webp" "Next App Start command" >}}

{{< image "how_to_share_a_nextjs_app_from_localhost/localhost_web_app.webp" "Next App live locally" >}}

## Step 2: Expose Your App via Pinggy

Open a new terminal window and run:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

### Command Breakdown:
- **`ssh -p 443`**: Establishes a secure connection to Pinggy’s server.
- **`-R0:localhost:3000`**: Maps your local Next.js app (running on port 3000) to Pinggy’s public URL.
- **`free.pinggy.io`**: Specifies the Pinggy server.


{{< image "how_to_share_a_nextjs_app_from_localhost/pinggy_command.webp" "pinggy ssh command" >}}

Pinggy will output a secure public URL (e.g., `https://your-app.pinggy.link`). Paste that URL in your browser - your Next.js app is now accessible from anywhere.

{{< image "how_to_share_a_nextjs_app_from_localhost/pinggy_public_url.webp" "pinggy url" >}}

{{< image "how_to_share_a_nextjs_app_from_localhost/next_app_run_on_pinggy_url.webp" "next app running on pinggy url" >}}


{{< image "how_to_share_a_nextjs_app_from_localhost/pinggy_public_url_log.webp" "pinggy url log" >}}

## Step 3: Customize Your Pinggy Tunnel

Pinggy offers advanced customization options to improve functionality and security.

### Custom Domains
- You can use a personalized or branded domain name for your tunnel instead of the default Pinggy-generated link.
- This is especially useful for professional deployments, making links memorable and aligned with your branding.

### Password Protection
- Add an extra layer of security by setting up password protection for your tunnel.
- Only those with the password can access your app, keeping it secure from unauthorized users.

To learn more about these features, refer to [Pinggy's official documentation](https://pinggy.io/docs/).

## Benefits of Hosting Next.js Apps with Pinggy

1. **No Server Required**: Simplify hosting by eliminating the need for a traditional server.
2. **Fast and Secure**: Establish secure connections instantly.
3. **Ideal for Testing and Demos**: Share your app with clients or team members during development.


## Troubleshooting
- **Port Conflict**  
  - **Symptom:** Tunnel fails because port is already in use.  
  - **Fix:** Confirm your {{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} dev server is running on port 3000 (or update `-R0:localhost:<your_port>` to match).
- **SSH Blocked by Firewall**  
  - **Symptom:** Connection times out or is refused.  
  - **Fix:** Temporarily whitelist outbound port 443 in your firewall settings or switch to a less restrictive network.
- **“Command Not Found” Error**  
  - **Symptom:** Terminal returns “ssh: command not found.”  
  - **Fix:**  
    - **macOS/Linux:** SSH is pre‑installed.  
    - **Windows:** Install OpenSSH via Settings → Apps → Optional Features, or use Git Bash.  

## Conclusion

The whole setup takes under two minutes: `create-next-app`, `npm run dev`, one `ssh` command. You get a public HTTPS URL that proxies straight to your local machine - no build step, no cloud account, no waiting. It’s the fastest way to get eyes on a Next.js feature mid-development.

When you’re ready to go to production, the path to Vercel, Netlify, or AWS Amplify is straightforward - Next.js is designed around those targets. But for everything before that point, a [Pinggy](https://pinggy.io) tunnel is hard to beat for speed and simplicity.
