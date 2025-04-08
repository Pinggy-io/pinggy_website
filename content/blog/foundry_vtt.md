---
title: "Foundry VTT"
description: "Learn how to effortlessly host Foundry VTT online with Pinggy in just minutes, without downloading software or configuring network settings."
date: 2025-04-08T14:00:00+05:30
draft: false
tags: ["Foundry VTT", "Pinggy", "Self-hosting", "Gaming", "Remote Hosting"]
og_image: "images/foundry_vtt/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlF1aWNrbHkgU2VsZi1Ib3N0IEZvdW5kcnkgVlRUIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGVhc2lseSBob3N0aW5nIHlvdXIgRm91bmRyeSBWVFQgc2Vzc2lvbnMgb25saW5lIHVzaW5nIFBpbmdneSwgd2l0aCBubyBzb2Z0d2FyZSBpbnN0YWxsYXRpb24gb3IgY29tcGxleCBuZXR3b3JrIGNvbmZpZ3VyYXRpb24gcmVxdWlyZWQuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkxhdW5jaCB5b3VyIEZvdW5kcnkgVmlydHVhbCBUYWJsZXRvcCBhcHBsaWNhdGlvbiBsb2NhbGx5IG9uIHlvdXIgY29tcHV0ZXIgYW5kIGVuc3VyZSBpdCBpcyBydW5uaW5nIG9uIDxwb3J0PiBFZy4zMDAwIC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiVmVyaWZ5IEZvdW5kcnkgVlRUIGlzIHJ1bm5pbmcgYnkgb3BlbmluZyB5b3VyIGJyb3dzZXIgYXQgaHR0cDovL2xvY2FsaG9zdDozMDAwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSBzZWN1cmUgcHVibGljIFVSTCB1c2luZyBQaW5nZ3kgYnkgZXhlY3V0aW5nIHRoZSBjb21tYW5kOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MzAwMDAgYS5waW5nZ3kuaW8uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvcHkgdGhlIHB1YmxpYyBVUkwgaHR0cHM6Ly9hYmMxMjN4eXouYS5waW5nZ3kubGluayBnZW5lcmF0ZWQgYnkgUGluZ2d5IGFuZCBzaGFyZSBpdCB3aXRoIHlvdXIgcGxheWVycyB0byBqb2luIHlvdXIgRm91bmRyeSBWVFQgZ2FtZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---
{{< image "foundry_vtt/banner.webp" "Banner Image" >}}


Hosting your {{< link href="https://foundryvtt.com/" >}}Foundry Virtual Tabletop{{< /link >}} (VTT) game sessions online traditionally involves complicated steps like configuring port forwarding, firewall settings, or dealing with dynamic IP addresses. Fortunately, [Pinggy](https://pinggy.io) simplifies this entire process by instantly exposing your locally running Foundry instance through a public URL, without needing to download or install additional software or configure your router.

In this comprehensive guide, I’ll provide detailed steps on how to effortlessly host Foundry VTT using [Pinggy](https://pinggy.io), and I'll also explore some useful advanced options you can take advantage of for better session management and security.

{{% tldr %}}
1. **Run Foundry VTT Locally**
   - Launch your Foundry VTT server locally on port `3000`:
     ```bash
     # Navigate to your Foundry VTT folder and launch the app
     cd /path/to/foundryvtt
     ./FoundryVTT
     ```
   - Verify Foundry is running:
     ```
     http://localhost:3000
     ```
2. **Create a Tunnel with Pinggy**
   - Start the Pinggy SSH tunnel (no software installation required):
     ```bash
     ssh -p 443 -R0:localhost:3000 a.pinggy.io
     ```
   - Share the provided public URL `https://abc123xyz.a.pinggy.link` from [Pinggy](https://pinggy.io) with your players to instantly connect to your Foundry session.
{{% /tldr %}}

## What Exactly is Pinggy?

[Pinggy](https://pinggy.io) is a robust, easy-to-use tunneling tool that lets you instantly create secure, publicly accessible URLs for your locally hosted applications (such as Foundry VTT). Unlike alternatives like {{< link href="https://ngrok.com" >}}ngrok{{< /link >}}, Pinggy doesn't require any software downloads. Instead, it works directly via a single, straightforward SSH command from your terminal or command prompt.

This makes Pinggy perfect for quick sessions, easy demonstrations, gaming, or testing purposes.

## Step-by-Step Guide to Self-Host Foundry VTT with Pinggy

### Step 1: Launch Your Foundry VTT Server Locally

Before creating your public URL, you must first ensure your Foundry VTT instance is running locally on your machine. By default, Foundry runs on port `3000`.

- Start your Foundry VTT application normally.
- Verify it's running by opening your browser and navigating to:

```bash
http://localhost:3000
```

You should see your Foundry VTT login page or welcome screen.

#### Quick Tip for Testing (Optional):

If you want to test Pinggy without launching Foundry first, you can quickly spin up a basic local web server using Python. This is a handy way to confirm everything is working correctly:

Open your terminal or command prompt, and run:

```bash
python3 -m http.server 3000
```

This will create a simple web server accessible at `http://localhost:3000`.

### Step 2: Create a Public URL Using Pinggy (Single SSH Command)

Next, you’ll create a public tunnel to your local Foundry VTT instance using Pinggy’s single-line SSH command.

#### Execute the Following Command:

Open your terminal (macOS/Linux) or PowerShell (Windows) and run:

```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "foundry_vtt/pinggy_command.webp" "Pinggy Command" >}}

**Explanation of this command:**

- `-p 443`: Uses port 443 for SSH, ensuring compatibility through most firewalls.
- `-R0:localhost:3000`: Requests Pinggy to forward connections from a random public URL to your local port `3000`.
- `a.pinggy.io`: Connects to Pinggy's tunneling server.

#### Example Output:

Once you execute the above command, Pinggy will automatically assign you a unique public URL. Your terminal output will look similar to:

```bash
You can access your local server via the following URL(s):
http://abc123xyz.a.pinggy.link
https://abc123xyz.a.pinggy.link
```

{{< image "foundry_vtt/pinggy_public_url.webp" "Pinggy Public Url" >}}

#### How to Share with Players:

Copy one of these provided URLs and share it directly with your Foundry VTT players. They can now instantly access your Foundry session from anywhere on the web—no additional setup required!

## Advanced Features for Enhanced Management and Security (Optional, Recommended)

Pinggy offers a few powerful features you can optionally leverage to enhance the security and manageability of your tunnels:

### Manage All Your Active Tunnels Using Pinggy Dashboard

Pinggy provides an intuitive, web-based dashboard to monitor and manage your tunnels, connections, and usage statistics.

- Visit the [Pinggy Dashboard](https://dashboard.pinggy.io) and sign up or sign in.
- Once logged in, you’ll receive a personalized **access token**.

{{< image "foundry_vtt/pinggy_dashboard.webp" "Pinggy Dashboard" >}}

#### Enhanced SSH Command Using Access Token:

Use your Pinggy access token with your SSH command to link this tunnel directly to your Pinggy dashboard for convenient management:

```bash
ssh -p 443 -R0:localhost:3000 -t yourAccessToken@a.pinggy.io
```

**Replace** `yourAccessToken` with the actual token obtained from your dashboard.

Now your tunnels appear neatly listed in your Pinggy dashboard for easier tracking and management.

### Enable Basic Authentication for Extra Security

To further secure your Foundry VTT session, Pinggy supports Basic Authentication, allowing you to require a username and password from anyone trying to access your public URL.

#### SSH Command with Basic Authentication Enabled:

Execute the following command to enable password-protected access to your Foundry VTT:

```bash
ssh -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password
```

- Replace `username` and `password` with your desired credentials.
- Anyone accessing your public URL will now see a login prompt requiring these credentials, providing an additional layer of security.

### Custom Domains & Persistent URLs with Pinggy Pro (Optional)

If you're looking to host your Foundry sessions regularly or professionally, Pinggy Pro enables:

- Persistent tunnels for longer gaming sessions.
- Custom domains to personalize your gaming URLs.
- More detailed management and analytics options.

## Conclusion

Hosting your {{< link href="https://foundryvtt.com/" >}}Foundry Virtual Tabletop{{< /link >}} (VTT) games online should never become a complicated ordeal. Thanks to [Pinggy](https://pinggy.io), we've seen how effortless it can be to securely expose your local Foundry instance using just a simple SSH command—no software installations, no port forwarding, and no complicated network setups required.

With Pinggy, you benefit from:

- **Instant setup**: Quickly generate public URLs through a single SSH command.

- **Enhanced security**: Add Basic Authentication to protect your gaming sessions.

- **Easy management**: Monitor all active tunnels effortlessly through your Pinggy Dashboard.

- **Professional customization**: Leverage Pinggy Pro features like custom domains and persistent tunnels for professional or regular hosting needs.

Whether you're running casual weekend sessions with friends or managing a professional online gaming community, Pinggy simplifies the whole hosting process, ensuring you spend less time troubleshooting technicalities and more time enjoying immersive gaming sessions.

