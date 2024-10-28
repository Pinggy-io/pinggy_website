---
title: "How to Easily Share ComfyUI Online"
description: "Learn how to share your ComfyUI setup online with Pinggy. This easy guide walks you through each step to securely share ComfyUI over the internet, making collaboration and remote access simple!"
date: 2024-10-28T01:15:25+05:30
draft: false
tags: ["ComfyUI","Pinggy","guide","tunneling","remote access"]
og_image: "/blog_img/comfyui_pinggy/share_comfyui_online.webp"
outputs:
  - HTML
  - AMP
---

ComfyUI is a portable, locally run interface commonly used for AI-simulated art generation with models like Stable Diffusion. When collaborating with remote clients or teammates, you might want to make this locally hosted UI accessible via the internet. This is where Pinggy, a fast and effective tunneling service, helps by allowing you to share your local setup using a public link.

{{% tldr %}}
1. **Run ComfyUI**

   - Clone and set up ComfyUI:
     ```bash
     git clone https://github.com/ComfyUI/ComfyUI.git
     cd ComfyUI
     pip install -r requirements.txt
     python launch.py
     ```

2. **Create a Tunnel with Pinggy**

   - Start SSH tunnel:
     ```bash
     ssh -p 443 -R0:localhost:8188 pinggy@a.pinggy.io
     ```
   - Access your ComfyUI via the provided URL.

{{% /tldr %}}


In this guide, we'll walk through how to use Pinggy to make your ComfyUI instance accessible online.

## What is Pinggy?
Pinggy is a tunneling solution similar to Ngrok, which lets you expose your local network to the internet securely. It’s easy to use, and you don’t need extensive configuration—perfect for accessing local applications, web UIs, or APIs from remote locations.

## Prerequisites
Before we begin, make sure you have:

- A ComfyUI instance running locally.
- Node.js installed on your system.
- Pinggy account (if you wish to use custom domains or other advanced features).
- Basic knowledge of terminal/command-line operations.

## Step 1: Run ComfyUI Locally
If ComfyUI is not already running, follow these steps:

1. Clone the ComfyUI repository:
   ```bash
   git clone https://github.com/ComfyUI/ComfyUI.git
   cd ComfyUI
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start ComfyUI:
   ```bash
   python launch.py
   ```
   By default, ComfyUI will start at `http://localhost:8188`.

## Step 2: Create a Tunnel with Pinggy
To expose your locally hosted ComfyUI instance, use Pinggy's SSH tunneling command:

Open a terminal and enter:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:22 tcp@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\"}}}"
{{</ ssh_command >}}

Replace `22` if ComfyUI is running on a different port.

### Command Breakdown:
- `ssh -p 443`: Establishes a secure connection to Pinggy’s server over port 443.
- `-R0:localhost:8188`: Connects your localhost to Pinggy’s server, forwarding the ComfyUI server.
- `pinggy@a.pinggy.io`: Directs the command to Pinggy’s server.

After executing, Pinggy will generate a public URL for your ComfyUI instance, which might look like:
```
http://fakqxzqrohxxx.a.pinggy.link
https://fakqxzqrohxxx.a.pinggy.link
```

## Step 3: Customize Your Pinggy Tunnel
Pinggy offers options for added privacy and customization:

- **Custom Domains**: Use a branded URL for professional access.
- **Password Protection**: Secure your tunnel with a password.

For more, refer to Pinggy's [documentation](https://pinggy.io/docs).

## Troubleshooting Tips
If you encounter issues:

- **Port Conflicts**: Ensure the port in the SSH command matches ComfyUI's port.
- **Firewall Restrictions**: Verify that SSH connections are allowed.
- **Command Not Found**: Ensure SSH is installed on your machine.

## Conclusion
Pinggy allows you to securely share your ComfyUI instance online, enabling seamless collaboration regardless of location. It’s a powerful yet simple tool for remote teamwork on AI projects.

