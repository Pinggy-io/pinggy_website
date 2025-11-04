---
title: "How to Share a Next.js App from Localhost"
description: "Learn how to securely host your Next.js app online using Pinggy. Step-by-step guide for running your app locally and creating secure tunnels."
date: 2025-03-23T10:00:00+05:30
draft: false
tags: ["Next.js", "Pinggy", "guide", "tunneling", "remote access"]
og_image: "images/how_to_share_a_nextjs_app_from_localhost/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KICB7CiAgICAiQGNvbnRleHQiOiAiaHR0cHM6Ly9zY2hlbWEub3JnLyIsCiAgICAiQHR5cGUiOiAiSG93VG8iLAogICAgIm5hbWUiOiAiSG93IHRvIFNoYXJlIGEgTmV4dC5qcyBBcHAgZnJvbSBMb2NhbGhvc3QiLAogICAgImRlc2NyaXB0aW9uIjogIkxlYXJuIGhvdyB0byBzZWN1cmVseSBob3N0IHlvdXIgTmV4dC5qcyBhcHAgb25saW5lIHVzaW5nIFBpbmdneS4gVGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgd2Fsa3MgeW91IHRocm91Z2ggcnVubmluZyB5b3VyIGFwcCBsb2NhbGx5IGFuZCBjcmVhdGluZyBhIHNlY3VyZSB0dW5uZWwgZm9yIHJlbW90ZSBhY2Nlc3MuIiwKICAgICJzdGVwIjogWwogICAgICB7IkB0eXBlIjoiSG93VG9TdGVwIiwibmFtZSI6IkNyZWF0ZSBhIE5leHQuanMgQXBwIiwidGV4dCI6Im5weCBjcmVhdGUtbmV4dC1hcHAgbXktYXBwIn0sCiAgICAgIHsiQHR5cGUiOiJIb3dUb1N0ZXAiLCJuYW1lIjoiUnVuIE5leHQuanMgTG9jYWxseSIsInRleHQiOiJucG0gcnVuIGRldiJ9LAogICAgICB7IkB0eXBlIjoiSG93VG9TdGVwIiwibmFtZSI6IkNyZWF0ZSBUdW5uZWwgd2l0aCBQaW5nZ3kiLCJ0ZXh0Ijoic3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgYS5waW5nZ3kuaW8ifSwKICAgICAgeyJAdHlwZSI6Ikhvd1RvU3RlcCIsIm5hbWUiOiJBY2Nlc3MgVXNpbmcgUHVibGljIFVSTCAiLCJ0ZXh0IjoiVmlzaXQgVXNpbmcgUGluZ2d54oCRZ2VuZXJhdGVkIFVSTCBodHRwczovL3lvdXItYXBwLnBpbmdneS5saW5rIGluIHlvdXIgYnJvd3NlciJ9CiAgICBdCiAgfQogIDwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "how_to_share_a_nextjs_app_from_localhost/banner.webp" "How to Share a Next.js App from Localhost" >}}

Hosting your {{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} app on the internet securely without deploying to a full server is easy with [Pinggy](https://pinggy.io). This guide will show you how to run your Next.js application locally and expose it publicly via a secure SSH tunnel in minutes.

{{% tldr %}}
1. **Run Next.js App**
   - Create and set up your <a href="https://nextjs.org/" target="_blank">Next.js</a> app:
     ```bash
     npx create-next-app@latest my-app
     cd my-app
     npm run dev
     ```
2. **Create a Tunnel with Pinggy**
   - Start SSH tunnel:
     ```bash
     ssh -p 443 -R0:localhost:3000 a.pinggy.io
     ```
    - Access your Next.js app via the provided [Pinggy](https://pinggy.io) public URL (e.g., `https://your-app.pinggy.link`).
{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/HJCr-9HpTpY?si=9mEqvhjSLmwRQbRw" title="YouTube video player" >}}

## What Is Next.js?
{{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} is an open‑source React framework created by {{< link href="https://vercel.com/" >}}Vercel{{< /link >}} that streamlines building production‑ready web applications. Out of the box it provides:

- **Static Site Generation (SSG)** for lightning‑fast, SEO‑friendly pages  
- **Server‑Side Rendering (SSR)** to deliver dynamic content on request  
- **Incremental Static Regeneration (ISR)** to update static content without redeploying  
- **Built‑in Routing & API Routes** — no extra server configuration required  
- **Automatic Code Splitting & Optimization** for smaller bundles and faster load times  
- **Image & Font Optimization**, Internationalization (i18n), and Analytics integrations  

Whether you’re prototyping a landing page, building a full e‑commerce storefront, or developing a complex dashboard, Next.js accelerates development while enforcing best practices.

## Sharing Your Local Next.js App

When developing a {{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} application, you can run it on your local machine (localhost), but there's a common challenge: others cannot access your local development server. This limitation exists because of network constraints like {{< link href="https://en.wikipedia.org/wiki/Carrier-grade_NAT " >}}CGNAT{{< /link >}} (Carrier-Grade NAT), firewalls, and standard NAT configurations that prevent direct incoming connections to your device.

Traditional solutions involve deploying your app to cloud services, but this approach is often:
- Time-consuming, requiring configuration and build processes
- Expensive, especially for temporary sharing needs
- Overkill for simple demos or quick feedback sessions

Using [Pinggy](https://pinggy.io), you can create a secure tunnel that instantly makes your locally-hosted {{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} application accessible to anyone on the internet no complex configuration or cloud deployments required.

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
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

### Command Breakdown:
- **`ssh -p 443`**: Establishes a secure connection to Pinggy’s server.
- **`-R0:localhost:3000`**: Maps your local Nuxt.js app (running on port 3000) to Pinggy’s public URL.
- **`a.pinggy.io`**: Specifies the Pinggy server.


{{< image "how_to_share_a_nextjs_app_from_localhost/pinggy_command.webp" "pinggy ssh command" >}}

Pinggy will output a secure public URL (e.g., `https://your-app.pinggy.link`). Paste that URL in your browser — your Next.js app is now accessible from anywhere.

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

Hosting a {{< link href="https://nextjs.org/" >}}Next.js{{< /link >}} app with [Pinggy](https://pinggy.io) empowers you to bypass traditional infrastructure overhead while maintaining enterprise‑grade security via SSH. In just three commands, you transform a local development server into a publicly accessible, shareable demo environment — ideal for stakeholder reviews, client feedback, or remote testing. When you’re ready for production, migrating to a managed platform (Vercel, Netlify, or AWS Amplify) is seamless thanks to Next.js’s deployment‑ready optimizations.
