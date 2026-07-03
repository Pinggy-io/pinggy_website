---
title: "Foundry VTT Self Hosting Guide"
description: "Learn how to host Foundry VTT online with Pinggy in minutes, without downloading software or configuring network settings."
date: 2025-04-08T14:00:00+05:30
lastmod: 2026-07-02T14:00:00+05:30
draft: false
tags: ["Foundry VTT", "Pinggy", "Self-hosting", "Gaming", "Remote Hosting"]
og_image: "images/foundry_vtt/banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlF1aWNrbHkgU2VsZi1Ib3N0IEZvdW5kcnkgVlRUIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGVhc2lseSBob3N0aW5nIHlvdXIgRm91bmRyeSBWVFQgc2Vzc2lvbnMgb25saW5lIHVzaW5nIFBpbmdneSwgd2l0aCBubyBzb2Z0d2FyZSBpbnN0YWxsYXRpb24gb3IgY29tcGxleCBuZXR3b3JrIGNvbmZpZ3VyYXRpb24gcmVxdWlyZWQuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkxhdW5jaCB5b3VyIEZvdW5kcnkgVmlydHVhbCBUYWJsZXRvcCBhcHBsaWNhdGlvbiBsb2NhbGx5IG9uIHlvdXIgY29tcHV0ZXIgYW5kIGVuc3VyZSBpdCBpcyBydW5uaW5nIG9uIDxwb3J0PiBFZy4zMDAwMCAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlZlcmlmeSBGb3VuZHJ5IFZUVCBpcyBydW5uaW5nIGJ5IG9wZW5pbmcgeW91ciBicm93c2VyIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMDAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNyZWF0ZSBhIHNlY3VyZSBwdWJsaWMgVVJMIHVzaW5nIFBpbmdneSBieSBleGVjdXRpbmcgdGhlIGNvbW1hbmQ6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwMCBmcmVlLnBpbmdneS5pby4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ29weSB0aGUgcHVibGljIFVSTCBodHRwczovL2FiYzEyM3h5ei5hLnBpbmdneS5saW5rIGdlbmVyYXRlZCBieSBQaW5nZ3kgYW5kIHNoYXJlIGl0IHdpdGggeW91ciBwbGF5ZXJzIHRvIGpvaW4geW91ciBGb3VuZHJ5IFZUVCBnYW1lLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "foundry_vtt/banner.webp" "Banner Image" >}}


{{< link href="https://foundryvtt.com/" >}}Foundry Virtual Tabletop{{< /link >}} (VTT) runs a local web server, by default on port `30000`. That's fine for a solo test, but the moment you want players to join from outside your house, you're stuck configuring port forwarding, poking holes in your firewall, or fighting a dynamic IP that changes every time your ISP feels like it. [Pinggy](https://pinggy.io) skips all of that: one SSH command turns your local Foundry instance into a public URL, no router config and nothing to install.

Here's how to set it up, plus a few options worth knowing about for locking down access once your session is live.

{{% tldr %}}
1. **Run Foundry VTT Locally**
   - Launch the Foundry VTT application as you normally would. By default, it runs on port `30000`.
   - Check the local network address in Foundry under:
     ```
     Game Access > Invitation Links
     ```
     It will look something like:
     ```
     http://10.123.1.136:30000
     ```
2. **Create a Tunnel with Pinggy**
   - Start the Pinggy SSH tunnel (no software installation required):
     ```bash
     ssh -p 443 -R0:localhost:30000 free.pinggy.io
     ```
   - Share the provided public URL `https://abc123xyz.a.pinggy.link` from [Pinggy](https://pinggy.io) with your players to instantly connect to your Foundry session.
{{% /tldr %}}

## What Is Pinggy?

[Pinggy](https://pinggy.io) makes a local port reachable from the public internet using nothing but SSH. There's no client to download: you point an SSH command at Pinggy's server, and it hands back a public URL that forwards to your local port.

For a Foundry session that means players can connect from anywhere without you touching your router.

## Step-by-Step Guide to Self-Host Foundry VTT with Pinggy

### Step 1: Launch Your Foundry VTT Server Locally

Launch Foundry VTT as you normally would. It runs on port `30000` by default.

Navigate to `Game Access > Invitation Links` within the Foundry interface to confirm the local network address, which looks something like `http://10.123.1.136:30000`.

{{< image "foundry_vtt/foundry_vtt_home_page.webp" "foundry vtt homepage" >}}

#### Quick Tip for Testing (Optional):

If you want to test the tunnel before launching Foundry, spin up a basic local web server with Python instead:

Open your terminal or command prompt, and run:

```bash
python3 -m http.server 30000
```

This will create a simple web server accessible at `http://localhost:30000`.

### Step 2: Create a Public URL Using Pinggy (Single SSH Command)

Now open a terminal and run the tunnel command.

#### Execute the Following Command:

Open your terminal (macOS/Linux) or PowerShell (Windows) and run:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:30000 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:30000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:30000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:30000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:30000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:30000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:30000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:30000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:30000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "foundry_vtt/pinggy_command.webp" "Pinggy Command" >}}

**Explanation of this command:**

- `-p 443`: Uses port 443 for SSH, ensuring compatibility through most firewalls.
- `-R0:localhost:30000`: Requests Pinggy to forward connections from a random public URL to your local port `30000`.
- `free.pinggy.io`: Connects to Pinggy's tunneling server.

#### Example Output:

Once you execute the above command, Pinggy will automatically assign you a unique public URL. Your terminal output will look similar to:

```bash
You can access your local server via the following URL(s):
http://abc123xyz.a.pinggy.link
https://abc123xyz.a.pinggy.link
```

{{< image "foundry_vtt/pinggy_public_url.webp" "Pinggy Public Url" >}}

#### How to Share with Players:

Copy one of these URLs and send it to your players. They connect from anywhere - no port forwarding or setup required on their end.

## Optional: Managing and Securing Your Tunnel

A couple of features are worth knowing about if you're running sessions regularly rather than a one-off game night.

### Manage All Your Active Tunnels Using Pinggy Dashboard

Pinggy's dashboard shows your active tunnels, connections, and usage stats in one place.

- Visit the [Pinggy Dashboard](https://dashboard.pinggy.io) and sign up or sign in.
- Once logged in, you’ll receive a personalized **access token**.

{{< image "foundry_vtt/pinggy_dashboard.webp" "Pinggy Dashboard" >}}

#### Enhanced SSH Command Using Access Token:

Add your access token to the SSH command and the tunnel shows up in your dashboard instead of running anonymously:

```bash
ssh -p 443 -R0:localhost:30000 -t yourAccessToken@pro.pinggy.io
```

**Replace** `yourAccessToken` with the token from your dashboard.

### Enable Basic Authentication for Extra Security

If you don't want randoms stumbling into your game, Pinggy supports basic auth: anyone hitting your public URL gets a login prompt first.

#### SSH Command with Basic Authentication Enabled:

```bash
ssh -p 443 -R0:localhost:30000 -t free.pinggy.io b:username:password
```

Replace `username` and `password` with your own credentials.

### Custom Domains & Persistent URLs with Pinggy Pro (Optional)

If you host Foundry sessions regularly, Pinggy Pro adds persistent tunnels (the URL stays the same between sessions instead of changing every time), custom domains, and more detailed usage stats.

## Conclusion

Getting Foundry VTT online doesn't require port forwarding, dynamic DNS, or a router restart. One SSH command gets you a public URL, and basic auth or a Pinggy access token cover you if you want more control over who connects and how the tunnel is tracked.

For a one-off session with friends, the free tier and a single command is all you need. For a recurring campaign, the access token plus a persistent domain saves you from sending everyone a new link every week.

