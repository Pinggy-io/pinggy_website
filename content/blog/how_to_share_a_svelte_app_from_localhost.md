---
title: "How to Share a Svelte App from Localhost"
description: "Learn how to securely share your Svelte app online using Pinggy. This step-by-step guide walks you through running your app locally and creating a secure tunnel for remote access."
date: 2025-03-26T10:00:00+05:30
draft: false
tags: ["Svelte", "Pinggy", "guide", "tunneling", "remote access"]
og_image: "images/how_to_share_a_svelte_app_from_localhost/banner.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KICB7CiAgICAiQGNvbnRleHQiOiAiaHR0cHM6Ly9zY2hlbWEub3JnLyIsCiAgICAiQHR5cGUiOiAiSG93VG8iLAogICAgIm5hbWUiOiAiSG93IHRvIFNoYXJlIGEgU3ZlbHRlIEFwcCBmcm9tIExvY2FsaG9zdCIsCiAgICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHNlY3VyZWx5IGhvc3QgeW91ciBTdmVsdGUgYXBwIG9ubGluZSB1c2luZyBQaW5nZ3kuIFRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIHdhbGtzIHlvdSB0aHJvdWdoIHJ1bm5pbmcgeW91ciBhcHAgbG9jYWxseSBhbmQgY3JlYXRpbmcgYSBzZWN1cmUgdHVubmVsIGZvciByZW1vdGUgYWNjZXNzLiIsCiAgICAic3RlcCI6IFsKICAgICAgewogICAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAgICJuYW1lIjogIkNyZWF0ZSBhIFN2ZWx0ZSBBcHAiLAogICAgICAgICJ0ZXh0IjogIm5weCBjcmVhdGUtc3ZlbHRlIG15LWFwcCIKICAgICAgfSwKICAgICAgewogICAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAgICJuYW1lIjogIkluc3RhbGwgRGVwZW5kZW5jaWVzIiwKICAgICAgICAidGV4dCI6ICJjZCBteS1hcHAgJiYgbnBtIGluc3RhbGwiCiAgICAgIH0sCiAgICAgIHsKICAgICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgICAibmFtZSI6ICJSdW4gU3ZlbHRlIExvY2FsbHkiLAogICAgICAgICJ0ZXh0IjogIm5wbSBydW4gZGV2IgogICAgICB9LAogICAgICB7CiAgICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICAgIm5hbWUiOiAiQ3JlYXRlIFR1bm5lbCB3aXRoIFBpbmdneSIsCiAgICAgICAgInRleHQiOiAic3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjUxNzMgLXQgcXJAYS5waW5nZ3kuaW8gXCJ1Okhvc3Q6bG9jYWxob3N0OjUxNzNcIiIKICAgICAgfSwKICAgICAgewogICAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAgICJuYW1lIjogIkFjY2VzcyBVc2luZyBQdWJsaWMgVVJMIiwKICAgICAgICAidGV4dCI6ICJWaXNpdCB0aGUgUGluZ2d5LWdlbmVyYXRlZCBVUkwgaHR0cHM6Ly95b3VyLWFwcC5waW5nZ3kubGluayBpbiB5b3VyIGJyb3dzZXIiCiAgICAgIH0KICAgIF0KICB9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "how_to_share_a_svelte_app_from_localhost/banner.png" "How to Share a Svelte App from Localhost" >}}

Hosting your [Svelte](https://svelte.dev/) app on the internet securely without deploying to a full server is simple with Pinggy. This guide will show you how to run your Svelte application locally and expose it publicly via a secure SSH tunnel in just a few steps.

{{% tldr %}}
1. **Run Svelte App**
Create and set up your [Svelte](https://svelte.dev/docs/kit/creating-a-project) app:

```bash
npx sv create my-app
cd my-app
npm install
npm run dev
```

2 **Create a Tunnel with Pinggy**
Start SSH tunnel:

```bash
ssh -p 443 -R0:localhost:5173 -t qr@a.pinggy.io \"u:Host:localhost:5173\"
```

Access your Svelte app via the provided Pinggy public URL (e.g., `https://your-app.pinggy.link`).
{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/DZIFU4bJtw0" title="YouTube video player" >}}

## What Is Svelte?
{{< link href="https://svelte.dev/" >}}Svelte{{< /link >}} is an innovative, open-source JavaScript framework that shifts much of the work from runtime to compile time. Unlike traditional frameworks like React or Vue, Svelte compiles your code into vanilla JavaScript, resulting in:

- **Zero Runtime Overhead**: Faster load times and better performance.
- **Reactive by Default**: No need for complex state management libraries—reactivity is built-in.
- **Simpler Syntax**: Less boilerplate, making it easier to write and maintain code.
- **Small Bundle Sizes**: Efficient output for lightweight applications.
- **Seamless Animation & Stores**: Built-in tools for smooth UI transitions and state management.

Svelte is perfect for building everything from lightweight static sites to highly interactive applications with minimal fuss.

## Sharing Your Local Svelte App

When developing a {{< link href="https://svelte.dev/" >}}Svelte{{< /link >}}  application, it runs locally (e.g., on `localhost:5173`), but there's a common challenge: others cannot access your local development server. This limitation exists because of network constraints like {{< link href="https://en.wikipedia.org/wiki/Carrier-grade_NAT " >}}CGNAT{{< /link >}} (Carrier-Grade NAT), firewalls, and standard NAT configurations that prevent direct incoming connections to your device.

Traditional solutions involve deploying your app to cloud services, but this approach is often:
- Time-consuming, requiring configuration and build processes
- Expensive, especially for temporary sharing needs
- Overkill for simple demos or quick feedback sessions

Using [Pinggy](http://pinggy.io), you can create a secure tunnel that instantly makes your locally-hosted {{< link href="https://svelte.dev/" >}}Svelte{{< /link >}} application accessible to anyone on the internet no complex configuration or cloud deployments required.

## Prerequisites

-  **Node.js and npm**: Installed on your system. You can download it from {{< link href="https://nodejs.org/" >}}Node.js official website{{< /link >}}.
- **SSH client** (macOS/Linux built‑in; Windows via Git Bash or OpenSSH)  
- [Pinggy account](https://dashboard.pinggy.io/) **(Optional)**: if you wish to use custom domains or other advanced features.
- **Basic Terminal Knowledge**: Familiarity with running commands.

## Step 1: Create & Run Your Svelte App

```bash
npx sv create my-app
cd my-app
npm install
npm run dev
```

{{< image "how_to_share_a_svelte_app_from_localhost/svelte_app_create_command.webp" "Svelte app create command" >}}

Visit `http://localhost:5173` to verify your app is running locally.

{{< image "how_to_share_a_svelte_app_from_localhost/svelte_app_create_process.webp" "Svelte App Start command" >}}
{{< image "how_to_share_a_svelte_app_from_localhost/svelteKit_running_on_localhost.webp" "Svelte App live locally" >}}

## Step 2: Expose Your App via Pinggy

Open a new terminal window and run:

```bash
ssh -p 443 -R0:localhost:5173 -t qr@a.pinggy.io \"u:Host:localhost:5173\"
```


{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\",\"cmd\":\"ssh -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\",\"cmd\":\"ssh -p 443 -R0:localhost:5173 -t qr@a.pinggy.io u:Host:localhost:5173\"}}}"
{{</ ssh_command >}}

{{< image "how_to_share_a_svelte_app_from_localhost/pinggy_command.webp" "Pinggy command" >}}

### Command Breakdown:
- `ssh -p 443`: Connects securely to Pinggy’s server.
- `-R0:localhost:5173`: Maps your local Svelte app (port 5173) to a public URL.
- `a.pinggy.io`: The Pinggy server endpoint.



Pinggy will provide a public URL (e.g., `https://your-app.pinggy.link`). Open it in your browser to access your Svelte app remotely.

{{< image "how_to_share_a_svelte_app_from_localhost/pinggy_public_url.webp" "Pinggy Public Url" >}}

{{< image "how_to_share_a_svelte_app_from_localhost/svelte_website_running_on_pinggy_url.webp" "website host on pinggy public url" >}}

{{< image "how_to_share_a_svelte_app_from_localhost/pinggy_public_url_log.webp" "pinggy public url log" >}}


## Step 3: Customize Your Pinggy Tunnel

Pinggy offers advanced customization options to improve functionality and security.

### Custom Domains
- You can use a personalized or branded domain name for your tunnel instead of the default Pinggy-generated link.
- This is especially useful for professional deployments, making links memorable and aligned with your branding.

### Password Protection
- Add an extra layer of security by setting up password protection for your tunnel.
- Only those with the password can access your app, keeping it secure from unauthorized users.

To learn more about these features, refer to [Pinggy's official documentation](https://pinggy.io/docs/).

## Benefits of Hosting Svelte Apps with Pinggy

- **No Server Setup**: Share without provisioning a full server.
- **Quick & Secure**: Instant tunnels with SSH encryption.
- **Perfect for Collaboration**: Ideal for feedback, testing, or showcasing work.

## Troubleshooting

### Port Conflict
- **Symptom**: Tunnel fails due to port issues.
- **Fix**: Ensure Svelte runs on port `5173`, or adjust `-R0:localhost:<your_port>`.

### SSH Blocked
- **Symptom**: Connection refused or timeout.
- **Fix**: Allow outbound port `443` or switch networks.

### Command Not Found
- **Symptom**: `ssh: command not found.`
- **Fix**: Install OpenSSH (Windows) or verify SSH (macOS/Linux).

## Conclusion

Using [Pinggy](http://pinggy.io) to share your [Svelte](https://svelte.dev/) app lets you skip complex deployments while keeping your work secure via SSH tunneling. With a few commands, your local app becomes globally accessible—perfect for demos, reviews, or testing. When it’s time for production, Svelte’s lightweight output pairs seamlessly with platforms like {{< link href="https://vercel.com/" >}}Vercel{{< /link >}} or {{< link href="https://netlify.com/" >}}Netlify{{< /link >}}.

