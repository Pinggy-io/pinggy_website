---
title: "Hosting a Nuxt App Without a Server"
description: "Learn how to securely host your Nuxt.js app online using Pinggy. This step-by-step guide walks you through running your app locally and creating a secure tunnel for remote access."
date: 2025-01-02T14:00:00+05:30
draft: false
tags: ["Nuxt.js", "Pinggy", "guide", "tunneling", "remote access"]
og_image: "images/hosting_a_nuxt_app_without_a_server/pinggy.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvc3RpbmcgYSBOdXh0IEFwcCBXaXRob3V0IGEgU2VydmVyIFVzaW5nIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIkxlYXJuIGhvdyB0byBzZWN1cmVseSBob3N0IHlvdXIgTnV4dC5qcyBhcHAgb25saW5lIHVzaW5nIFBpbmdneS4gVGhpcyBndWlkZSB3YWxrcyB5b3UgdGhyb3VnaCBydW5uaW5nIHlvdXIgYXBwIGxvY2FsbHkgYW5kIGNyZWF0aW5nIGEgc2VjdXJlIHR1bm5lbCBmb3IgcmVtb3RlIGFjY2Vzcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaG9zdGluZ19hX251eHRfYXBwX3dpdGhvdXRfYV9zZXJ2ZXIvcGluZ2d5LndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIGEgbmV3IE51eHQuanMgYXBwIGFuZCBuYXZpZ2F0ZSB0byB0aGUgZGlyZWN0b3J5LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJSdW4gdGhlIE51eHQuanMgZGV2ZWxvcG1lbnQgc2VydmVyIHVzaW5nIHRoZSBjb21tYW5kOiBucG0gcnVuIGRldi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIGEgdHVubmVsIHdpdGggUGluZ2d5IGJ5IHJ1bm5pbmc6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGEucGluZ2d5LmlvLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJBY2Nlc3MgeW91ciBOdXh0LmpzIGFwcCB2aWEgdGhlIHB1YmxpYyBVUkwgZ2VuZXJhdGVkIGJ5IFBpbmdneS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiT3B0aW9uYWw6IEN1c3RvbWl6ZSB5b3VyIFBpbmdneSB0dW5uZWwgd2l0aCBmZWF0dXJlcyBsaWtlIGN1c3RvbSBkb21haW5zIG9yIHBhc3N3b3JkIHByb3RlY3Rpb24gZm9yIGVuaGFuY2VkIHNlY3VyaXR5LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "hosting_a_nuxt_app_without_a_server/pinggy.webp" "Hosting a Nuxt App Without a Server Using Pinggy" >}}

Hosting your {{< link href="https://nuxt.com/" >}}Nuxt.Js{{< /link >}} app on the internet securely and without complex server setups is now easier than ever, thanks to [Pinggy](https://pinggy.io). This guide explains how you can expose your locally hosted Nuxt app to the web using Pinggy, a tunneling solution similar to {{< link href="https://ngrok.com/" >}} Ngrok{{< /link >}}.

{{% tldr %}}
1. **Run Nuxt.js App**

   - Create and set up your <a href="https://nuxt.com/" target="_blank">Nuxt.js</a> app:
     ```bash
     npx create-nuxt-app my-nuxt-app
     cd my-nuxt-app
     npm run dev
     ```

2. **Create a Tunnel with Pinggy**

   - Start SSH tunnel:
     ```bash
     ssh -p 443 -R0:localhost:3000 a.pinggy.io
     ```
   - Access your Nuxt.js app via the provided [Pinggy](https://pinggy.io) public URL.

{{% /tldr %}}

{{< iframe src="https://www.youtube.com/embed/FGeRXmG1SNo" title="YouTube video player" >}}

## What is a Nuxt.js App?

{{< link href="https://nuxt.com/" >}}Nuxt.Js{{< /link >}} is a powerful framework based on {{< link href="https://vuejs.org/" >}}Vue.Js{{< /link >}}, designed for building fast, modern, and SEO-friendly web applications. It offers server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) capabilities, making it versatile for various use cases. Whether you are building a portfolio, a blog, or a full-fledged web app, Nuxt.js simplifies development with its modular architecture and extensive feature set.

## What is Pinggy?

[Pinggy](https://pinggy.io) is a secure and straightforward tunneling solution that allows you to expose your local applications, APIs, or web UIs to the internet. It eliminates the need for complex configurations, making it perfect for developers who want quick and secure remote access. With Pinggy, you can create a public URL for your locally hosted Nuxt app in just a few steps.

### Features of Pinggy:
- **Ease of Use**: Minimal configuration required.
- **Secure Tunnels**: Data is transmitted securely using SSH.
- **Customization**: Offers options like custom domains and password protection for enhanced control.

## Prerequisites

Before you begin, ensure you have the following:
1. Node.js and npm: Installed on your system. You can download it from {{< link href="https://nodejs.org/" >}}Node.js official website{{< /link >}}.
2. Nuxt.js Installed: If not, we’ll guide you through setting it up.
3. [Pinggy account](https://dashboard.pinggy.io/) (if you wish to use custom domains or other advanced features).
4. Basic Terminal Knowledge: Familiarity with running commands.

## Step 1: Run Your Nuxt.js App Locally

The first step is to create and run your Nuxt.js app on your local machine.

### Commands to Get Started:
1. Create a new {{< link href="https://nuxt.com/" >}}Nuxt.Js{{< /link >}}  app:
   ```bash
   npx create-nuxt-app my-nuxt-app
   ```
   {{< image "hosting_a_nuxt_app_without_a_server/create_command.webp" "Nust App Create Command" >}}
2. Navigate to the project directory:
   ```bash
   cd my-nuxt-app
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
    {{< image "hosting_a_nuxt_app_without_a_server/run_nuxt_app.webp" "Run Command" >}}

Your Nuxt.js app will now be available at `http://localhost:3000`.

## Step 2: Create a Tunnel with Pinggy

Now, let’s expose your locally hosted Nuxt.js app using [Pinggy](https://pinggy.io). 

### Tunnel Creation Command:
Open your terminal and run the following command:
```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```
{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "hosting_a_nuxt_app_without_a_server/localhost_running.png" "Nuxt App Running on Localhost" >}}
{{< image "hosting_a_nuxt_app_without_a_server/pinggy_public_url.png" "Nuxt App Running on Public URL" >}}


### Command Breakdown:
- **`ssh -p 443`**: Establishes a secure connection to Pinggy’s server.
- **`-R0:localhost:3000`**: Maps your local Nuxt.js app (running on port 3000) to Pinggy’s public URL.
- **`a.pinggy.io`**: Specifies the Pinggy server.

After executing the command, Pinggy will generate a public URL for your Nuxt.js app. It might look something like this:
```
http://example.pinggy.link
https://example.pinggy.link
```
 {{< image "hosting_a_nuxt_app_without_a_server/pinggy_log.png" "Run Command" >}}

Copy and paste the URL into your browser to access your app from anywhere!

## Step 3: Customize Your Pinggy Tunnel

Pinggy offers advanced customization options to improve functionality and security.

### Custom Domains
- You can use a personalized or branded domain name for your tunnel instead of the default Pinggy-generated link.
- This is especially useful for professional deployments, making links memorable and aligned with your branding.

### Password Protection
- Add an extra layer of security by setting up password protection for your tunnel.
- Only those with the password can access your app, keeping it secure from unauthorized users.

To learn more about these features, refer to [Pinggy's official documentation](https://pinggy.io/docs/).

## Benefits of Hosting Nuxt.js Apps with Pinggy

1. **No Server Required**: Simplify hosting by eliminating the need for a traditional server.
2. **Fast and Secure**: Establish secure connections instantly.
3. **Ideal for Testing and Demos**: Share your app with clients or team members during development.

## Troubleshooting Tips

If you run into issues with the Pinggy tunnel or ComfyUI setup, try these solutions:

- **Port Conflicts**: Make sure the port provided with the SSH command corresponds to the port used by Nuxt App, by default it is 3000. Mismatched ports will prevent a successful tunnel connection.
- **Firewall Restrictions**:  Some of the network firewalls prevent tunneling connections. Make certain that SSH connection is authorised and if there are any firewalls active, then get them removed for some time.
- **Command Not Found**: Make sure SSH is installed on your machine. On macOS and Linux, SSH is pre-installed, but on Windows, you may need to install it or use tools like Git Bash.

## Conclusion

Using [Pinggy](https://pinggy.io) to host your {{< link href="https://nuxt.com/" >}}Nuxt.Js{{< /link >}} app provides a secure, serverless solution for developers. Whether you’re showcasing your app to clients or testing it on the go, Pinggy simplifies the process, making it accessible to anyone with a few terminal commands. 

With its advanced features like custom domains and password protection, Pinggy is an excellent tool for hosting and sharing your local projects effortlessly.
