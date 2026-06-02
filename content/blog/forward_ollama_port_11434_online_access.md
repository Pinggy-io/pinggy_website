---
title: "Forward Ollama Port 11434 for Online Access: Complete Guide"
description: "Learn how to forward Ollama's default port 11434 to access your local AI models online. Step-by-step guide using secure tunneling for remote Ollama API access."
date: 2025-09-18T15:00:00+05:30
lastmod: 2026-06-01T15:00:00+05:30
draft: false
tags: ["Ollama", "Port Forwarding", "Tunneling", "AI API", "Remote Access", "LLM Hosting"]
og_image: "images/forward_ollama_port_11434_online_access/forward_ollama_port_11434_online_access.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkZvcndhcmRpbmcgT2xsYW1hIFBvcnQgMTE0MzQgZm9yIE9ubGluZSBBY2Nlc3MiLAogICJkZXNjcmlwdGlvbiI6ICJMZWFybiBob3cgdG8gZm9yd2FyZCBPbGxhbWEncyBkZWZhdWx0IHBvcnQgMTE0MzQgdG8gYWNjZXNzIHlvdXIgbG9jYWwgQUkgbW9kZWxzIG9ubGluZSIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9mb3J3YXJkX29sbGFtYV9wb3J0XzExNDM0X29ubGluZV9hY2Nlc3MvZm9yd2FyZF9vbGxhbWFfcG9ydF8xMTQzNF9vbmxpbmVfYWNjZXNzLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCBPbGxhbWEgYW5kIHN0YXJ0IHRoZSBzZXJ2ZXIgb24gcG9ydCAxMTQzNCIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJEb3dubG9hZCBhbiBMTE0gbW9kZWwgdXNpbmcgT2xsYW1hIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkZvcndhcmQgcG9ydCAxMTQzNCB1c2luZyBQaW5nZ3k6IHNzaCAtcCA0NDMgLVIgMDpsb2NhbGhvc3Q6MTE0MzQgLXQgcXJAYS5waW5nZ3kuaW8gXCJ1Okhvc3Q6bG9jYWxob3N0OjExNDM0XCIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiVGVzdCB0aGUgZm9yd2FyZGVkIEFQSSB1c2luZyBjVVJMIG9yIGJyb3dzZXIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW50ZWdyYXRlIHRoZSByZW1vdGUgQVBJIGludG8geW91ciBhcHBsaWNhdGlvbnMiCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "forward_ollama_port_11434_online_access/forward_ollama_port_11434_online_access.webp" "Forward Ollama Port 11434 for Online Access" >}}

Ollama binds to port `11434` on localhost by default. That's fine for local use, but it means nothing outside your machine can reach it - not a teammate on a different device, not a web app on another server, not a mobile client. Forwarding port `11434` through a tunnel fixes that without touching your router or firewall.



{{% tldr %}}

1. **Start Ollama Server**  
   - Ollama runs on port `11434` by default:  
     ```bash
     ollama serve
     ```

2. **Forward Port 11434 with Pinggy**  
   - Create secure tunnel for remote access:  
     ```bash
     ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io "u:Host:localhost:11434"
     ```

3. **Get Public URL**  
   - Access your Ollama API via generated URL (e.g., `https://abc123.pinggy.link`).

4. **Test Remote Access**  
   - Verify API works remotely:  
     ```bash
     curl https://abc123.pinggy.link/api/tags
     ```

{{% /tldr %}}

## Why Forward Ollama Port 11434?

Ollama's localhost-only default is a reasonable security choice - you don't want an LLM API open to the internet without thinking about it first. But it becomes an obstacle the moment you need to call the API from somewhere else: a CI job, a collaborator's machine, a web app in staging, or a mobile prototype.

Forwarding via a tunnel keeps your data local. The model runs on your hardware, inference happens on your machine, and nothing is sent to a cloud GPU provider. Compared to deploying to a hosted service, you also avoid per-token costs and model availability restrictions - run whatever you've pulled with `ollama pull`, not just what the platform supports.

## Prerequisites for Forwarding Ollama Port 11434

### Install and Configure Ollama
First, ensure Ollama is properly installed and configured:

1. **Download Ollama**: Visit {{< link href="https://ollama.com/" >}}ollama.com{{< /link >}} and install for your operating system
2. **Verify Installation**:  
   ```bash
   ollama --version
   ```
   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_version.webp" "Verify Ollama installation" >}}

### Download Your First Model
Before forwarding the port, download a model to test with:
```bash
ollama run qwen:0.5b
```
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/model_run_terminal.webp" "Download and run Ollama model" >}}

For more powerful models, try:
```bash
ollama run llama3:8b
# or for multimodal capabilities
ollama run llava:13b
```

## Step-by-Step Guide: Forward Ollama Port 11434

{{< iframe src="https://www.youtube.com/embed/Zlwr4alUflo" title="Forward Ollama Port 11434 Tutorial" >}}

### Step 1: Start Ollama Server
Ensure Ollama is running on its default port:
```bash
ollama serve
```
Keep this terminal window open - Ollama needs to stay running to handle API requests.

### Step 2: Create Secure Tunnel for Port 11434
Use Pinggy to create a secure tunnel that forwards port `11434`:
```bash
ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io "u:Host:localhost:11434"
```

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 -t qr@free.pinggy.io u:Host:localhost:11434\"}}}"
{{</ ssh_command >}}

**Understanding the Command**:
- `-p 443`: Uses HTTPS port for better firewall compatibility
- `-R0:localhost:11434`: Forwards your local port 11434 to a random remote port
- `qr@free.pinggy.io`: Pinggy's tunneling server with QR code support
- `u:Host:localhost:11434`: Maps the tunnel to your Ollama server

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/pinggy_tunnel_command_for_model.webp" "Create Pinggy tunnel for port 11434" >}}

### Step 3: Get Your Public URL
After running the command, Pinggy will provide a public HTTPS URL like `https://abc123.pinggy.link`. This URL now forwards all requests to your local Ollama server on port `11434`.

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_log_terminal.webp" "Ollama API accessible via public URL" >}}

## Testing Your Forwarded Ollama Port 11434

### Verify Ollama is Running Remotely
Once your tunnel is established, you can verify that Ollama is accessible through your forwarded port:

1. **Browser Verification**:
   Open your browser and navigate to the public URL provided by Pinggy (e.g., `https://abc123.pinggy.link`). You should see Ollama running and responding, confirming that port `11434` is successfully forwarded.

   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_test_local.webp" "Ollama running via forwarded port in browser" >}}

2. **Command Line Testing**:
   Test the API endpoints using curl commands:
   ```bash
   # Check if Ollama is responding
   curl https://abc123.pinggy.link/api/version

   # List available models
   curl https://abc123.pinggy.link/api/tags
   ```


3. **Test Model Inference**:
   Once you confirm Ollama is accessible, test actual model inference:
   ```bash
   curl -X POST https://abc123.pinggy.link/api/generate \
     -H "Content-Type: application/json" \
     -d '{"model": "qwen:0.5b", "prompt": "Hello, world!", "stream": false}'
   ```

### Integration Testing
To test the forwarded Ollama API in your applications, follow these steps:

1. **Clone the test repository**: {{< link href="https://github.com/Moksh45/RunOllamaApi" >}}RunOllamaApi{{< /link >}}
2. **Install dependencies**: `npm install`
3. **Update the API URL**: Replace the localhost URL in the code with your Pinggy URL (e.g., `https://abc123.pinggy.link`)
4. **Run the test**: `node main.js`

This repository provides complete examples of how to integrate and test your forwarded Ollama API with JavaScript applications.

## Adding Open WebUI to Your Forwarded Ollama Setup

If you want a browser UI on top of your forwarded API, Open WebUI pairs well with this setup:

### Quick Open WebUI Setup:
1. **Install Open WebUI**:
   ```bash
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```
2. **Forward WebUI Port**: `ssh -p 443 -R0:localhost:3000 free.pinggy.io`
3. **Access WebUI**: Use the generated URL to access your ChatGPT-like interface
4. **Connect to Ollama**: Configure WebUI to use your forwarded Ollama API URL

### Why Add Open WebUI

Open WebUI gives you a chat interface in the browser - useful for team members who don't want to write curl commands. It supports document uploads for RAG-style conversations and lets you switch between models without touching the terminal. Once the port is forwarded, you can share the WebUI URL with anyone and they get a usable interface to your local models without needing their own Ollama setup.

### Complete Setup

For detailed instructions on running both Ollama API and Open WebUI together, see: {{< link href="https://pinggy.io/blog/how_to_easily_share_ollama_api_and_open_webui_online/" >}}How to Easily Share Ollama API and Open WebUI Online{{< /link >}}.

## Conclusion

Forwarding port `11434` with a tunnel is the quickest path from "model works on my machine" to "model is callable from anywhere" - without a cloud account, without firewall changes, and without the model leaving your hardware.

For personal use and development, Pinggy's free tier handles this well. If you're running this for a team or integrating it into a production service, look at Pinggy's persistent subdomain options or consider whether a proper auth layer in front of the API makes sense for your threat model.
