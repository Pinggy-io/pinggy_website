---
title: "Self-Hosting Node-RED"
description: "Complete guide to self-hosting Node-RED, the powerful flow-based programming tool for IoT and automation. Install locally and access from anywhere using Pinggy tunnels."
date: 2026-01-30T14:30:00+05:30
draft: false
og_image: "images/self_hosting_node_red/self_hosting_node_red_banner.webp"
tags: ["node-red", "self-hosted", "automation", "iot", "pinggy", "webhooks", "low-code"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBOb2RlLVJFRCBhbmQgTWFrZSBJdCBQdWJsaWNseSBBY2Nlc3NpYmxlIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiQ29tcGxldGUgZ3VpZGUgdG8gc2VsZi1ob3N0aW5nIE5vZGUtUkVEIGFuZCBtYWtpbmcgaXQgYWNjZXNzaWJsZSBmcm9tIGFueXdoZXJlIHVzaW5nIFBpbmdneSB0dW5uZWxzLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3Rpbmdfbm9kZV9yZWQvc2VsZl9ob3N0aW5nX25vZGVfcmVkX2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgTm9kZS5qcyB2MTggb3IgaGlnaGVyIG9uIHlvdXIgc3lzdGVtLiBDaGVjayB2ZXJzaW9uIHdpdGg6IG5vZGUgLS12ZXJzaW9uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgTm9kZS1SRUQgZ2xvYmFsbHkgdXNpbmcgbnBtOiBucG0gaW5zdGFsbCAtZyAtLXVuc2FmZS1wZXJtIG5vZGUtcmVkIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlJ1biBOb2RlLVJFRCB1c2luZyB0aGUgY29tbWFuZDogbm9kZS1yZWQgKG9yIG5weCBub2RlLXJlZCBmb3IgbG9jYWwgaW5zdGFsbGF0aW9uKSIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTZXQgdXAgUGluZ2d5IHR1bm5lbCBmb3IgcHVibGljIGFjY2Vzczogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjE4ODAgcXJAZnJlZS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQWNjZXNzIE5vZGUtUkVEIGZyb20gYW55d2hlcmUgdXNpbmcgdGhlIHB1YmxpYyBVUkwgcHJvdmlkZWQgYnkgUGluZ2d5IgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_node_red/self_hosting_node_red_banner.webp" "Self-Hosting Node-RED with Pinggy" >}}

{{< link href="https://nodered.org/" >}}Node-RED{{< /link >}} is a powerful flow-based programming tool that makes wiring together hardware devices, APIs, and online services remarkably simple. Whether you're building IoT projects, automating workflows, or creating integrations between services, Node-RED provides a browser-based visual editor that lets you connect nodes with just a few clicks.

In this guide, we'll walk through installing Node-RED locally and then use {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} to make it accessible from anywhere on the internet. This setup is perfect for developers, IoT builders, automation engineers, and anyone who wants to access their Node-RED flows remotely or receive webhooks from external services.



{{% tldr %}}
**What You'll Build:**
- Self-hosted Node-RED instance for flow-based programming and automation
- Local installation with simple npm commands
- Pinggy tunnel for secure remote access from any device
- Public URL for webhooks, integrations, and sharing workflows

**Quick Setup:**
1. Install Node-RED globally:
   ```bash
   npm install -g --unsafe-perm node-red
   ```
2. Run Node-RED:
   ```bash
   node-red
   ```
3. Access locally at `http://localhost:1880`
4. Create a Pinggy tunnel for remote access:
   ```bash
   ssh -p 443 -R0:localhost:1880 qr@free.pinggy.io
   ```
5. Use the public URL to access Node-RED from anywhere

**Resources:**
- <a href="https://nodered.org/docs/getting-started/local" target="_blank">Node-RED Documentation</a>
- <a href="https://flows.nodered.org/" target="_blank">Node-RED Flow Library</a>
- <a href="https://pinggy.io" target="_blank">Pinggy</a> for tunneling
{{% /tldr %}}

## Why Self-Host Node-RED?

Node-RED has become an essential tool for anyone working with IoT, home automation, or workflow integration. While cloud-hosted options exist, self-hosting gives you complete control over your automation flows, data privacy, and the ability to integrate directly with local hardware and services.

Running Node-RED on your own machine means your automation logic stays private, you can connect to local devices and databases without exposing them to third parties, and you have zero recurring costs. Combined with Pinggy for remote access, you get the best of both worlds: local control with cloud-like accessibility.

Self-hosting is particularly valuable when you need to:
- Receive webhooks from external services like GitHub, Slack, or payment processors
- Control IoT devices on your local network remotely
- Share your automation dashboards with team members
- Test and develop integrations without deploying to production servers

## What is Node-RED?

{{< link href="https://nodered.org/" >}}Node-RED{{< /link >}} is an open-source, flow-based development tool originally created by IBM for wiring together hardware devices, APIs, and online services. It provides a browser-based editor that makes it easy to wire together flows using a wide range of nodes that can be deployed with a single click.

The visual approach means you can build complex integrations without writing extensive code. Simply drag nodes onto the canvas, connect them with wires, and deploy your flow. Node-RED handles the underlying messaging and execution.

**Key Features:**
- **Visual Flow Editor**: Drag-and-drop interface for building automation workflows
- **Extensive Node Library**: Thousands of community-contributed nodes for every service imaginable
- **Built-in Dashboard**: Create interactive UI dashboards for monitoring and control
- **JavaScript Function Nodes**: Write custom logic when visual nodes aren't enough
- **Import/Export Flows**: Share workflows as JSON files with the community
- **Lightweight Runtime**: Runs efficiently on everything from Raspberry Pi to enterprise servers

{{< image "self_hosting_node_red/node_red_editor.webp" "Node-RED Flow Editor" >}}

## Prerequisites

Before starting, ensure you have the following installed on your system:

**Node.js v18 or higher**: Node-RED requires a modern version of Node.js. Check your version with:
```bash
node --version
```

{{< image "self_hosting_node_red/node_version.webp" "Check Node.js Version" >}}

If you need to install or update Node.js:

**Windows/macOS**: Download from {{< link href="https://nodejs.org/" >}}nodejs.org{{< /link >}} (LTS version recommended)

**Linux (Ubuntu/Debian)**:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**npm**: Comes bundled with Node.js. Verify with:
```bash
npm --version
```

{{< image "self_hosting_node_red/npm_version.webp" "Check npm Version" >}}

## Step 1: Install Node-RED

{{< iframe src="https://www.youtube.com/embed/wGqper3p3So?si=kSxJE3At4451Ogq0" title="Self-Hosting Node-RED and Making It Publicly Accessible with Pinggy" >}}

With Node.js ready, installing Node-RED is a single command. Open your terminal and run:

```bash
# Global installation (recommended)
npm install -g --unsafe-perm node-red

# OR local installation (if you prefer not to install globally)
mkdir node-red
cd node-red
npm init -y
npm install --unsafe-perm node-red
```
{{< image "self_hosting_node_red/npm_install_node_red_package.webp" "Installing Node-RED" >}}

For global installation, use `npm install -g` which makes Node-RED available system-wide. If you prefer local installation, omit the `-g` flag and Node-RED will be installed in your current project directory. The `--unsafe-perm` flag is required on some systems to allow native module compilation.

The installation downloads Node-RED and its dependencies. Once complete, verify the installation:

```bash
# If installed globally
node-red --version

# If installed locally
npx node-red --version
```

You should see output like `v4.0.5` (or newer), confirming Node-RED is installed correctly.

{{< image "self_hosting_node_red/node_red_version.webp" "Node-RED Version" >}}

## Step 2: Run Node-RED

Starting Node-RED is straightforward. Run:

```bash
# If installed globally
node-red

# If installed locally
npx node-red
```

You'll see startup messages as Node-RED initializes:

```
Welcome to Node-RED
===================

30 Jan 12:00:00 - [info] Node-RED version: v4.0.5
30 Jan 12:00:00 - [info] Node.js  version: v20.10.0
30 Jan 12:00:00 - [info] Server now running at http://127.0.0.1:1880/
```

Node-RED is now running on `localhost:1880`. Open your browser and navigate to `http://localhost:1880` to see the flow editor.

{{< image "self_hosting_node_red/run_npx_node_red.webp" "Running Node-RED" >}}
{{< image "self_hosting_node_red/node_red_running_on_localhost.webp" "Node-RED Running on Localhost" >}}

### Exploring the Interface

The Node-RED editor has three main areas:

- **Node Palette** (left): Contains all available nodes organized by category
- **Flow Canvas** (center): Where you build your flows by connecting nodes
- **Info/Debug Panel** (right): Shows node information and debug output

Try creating a simple flow:
1. Drag an **inject** node from the palette to the canvas
2. Drag a **debug** node next to it
3. Connect them by dragging from the inject node's output to the debug node's input
4. Click **Deploy** in the top right
5. Click the inject button to trigger the flow and see output in the debug panel

## Step 3: Access Node-RED from Anywhere with Pinggy

Running Node-RED locally is useful, but the real power comes from accessing it remotely. Whether you need to receive webhooks, monitor IoT devices while away, or share dashboards with colleagues, {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} makes it simple.

Pinggy creates a secure tunnel from your local machine to the internet without any software installation. It works directly through SSH.

### Creating the Tunnel

Open a new terminal window (keep Node-RED running in the first one) and execute:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:1880 qr@free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:1880 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:1880 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:1880 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:1880 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:1880 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:1880 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:1880 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:1880 qr@free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy will establish a tunnel and provide you with public URLs:

```
You can access local server via following URL(s):
https://randomstring.a.pinggy.link
```

The `qr@` prefix also displays a QR code in your terminal, making it easy to open the URL on your phone by simply scanning it.

{{< image "self_hosting_node_red/pinggy_tunnel_public_url.webp" "Pinggy Tunnel Public URL" >}}

Copy the HTTPS URL and open it in any browser or on any device. You'll see your Node-RED editor, fully accessible from anywhere in the world. The terminal shows live connection logs so you can monitor activity in real time.

{{< image "self_hosting_node_red/node_red_running_on_pinggy_public_url.webp" "Node-RED Accessible via Pinggy URL" >}}
{{< image "self_hosting_node_red/pinggy_public_url_logs.webp" "Pinggy Connection Logs" >}}

### Persistent URLs with Pinggy Pro

The free Pinggy tier provides random URLs that change on reconnection. For consistent access, {{< link href="https://pinggy.io/#prices" >}}Pinggy Pro{{< /link >}} offers persistent subdomains so your Node-RED instance stays at the same URL.

## What You Can Do Next

With Node-RED publicly accessible, you unlock powerful capabilities:

**Receive Webhooks**: Set up HTTP input nodes to receive callbacks from services like GitHub, Stripe, Twilio, or any API that supports webhooks. Your flows can process incoming data instantly.

**Remote IoT Control**: Monitor and control IoT devices on your local network from anywhere. Check sensor readings, toggle switches, and receive alerts on your phone.

**Share Dashboards**: Build interactive dashboards with Node-RED Dashboard nodes and share them with team members or clients using your Pinggy URL.

**Test Integrations**: Develop and test webhook integrations locally without deploying to staging servers. Iterate quickly with live data.

**Automate Workflows**: Create automations that connect your local services with cloud APIs, all while maintaining control over your data.

## Conclusion

Self-hosting Node-RED gives you a powerful automation platform that runs entirely on your own hardware. Combined with Pinggy for instant public access, you get cloud-like convenience without sacrificing privacy or control.

The setup takes just minutes: install Node-RED with npm, start the server, and create a Pinggy tunnel. From there, you can build sophisticated automation flows, receive webhooks from any service, and access your dashboards from anywhere in the world.

Whether you're an IoT enthusiast, a developer building integrations, or someone who wants to automate repetitive tasks, Node-RED with Pinggy provides a flexible, free, and powerful solution. Your automations, your data, your control.
