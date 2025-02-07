---
title: "How to Easily Share Ollama API and Open WebUI Online"
description: "Learn to securely expose Ollama's API and Open WebUI interface using Pinggy tunneling. A complete guide to running AI models locally while enabling remote access."
date: 2025-01-26T14:00:00+05:30
draft: false
tags: ["Ollama", "Open WebUI", "Pinggy", "AI Deployment", "LLM Hosting"]
og_image: "images/how_to_easily_share_ollama_api_and_open_webui_online/pinggy.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNoYXJpbmcgT2xsYW1hIEFQSSBhbmQgT3BlbiBXZWJVSSBPbmxpbmUiLAogICJkZXNjcmlwdGlvbiI6ICJMZWFybiBob3cgdG8gZXhwb3NlIGxvY2FsIEFJIG1vZGVscyB2aWEgT2xsYW1hJ3MgQVBJIGFuZCBPcGVuIFdlYlVJIHVzaW5nIFBpbmdneSB0dW5uZWxpbmciLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaG93X3RvX2Vhc2lseV9zaGFyZV9vbGxhbWFfYXBpX2FuZF9vcGVuX3dlYnVpX29ubGluZS9waW5nZ3kucG5nIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgT2xsYW1hIGFuZCBkb3dubG9hZCBhbiBMTE0gbW9kZWwiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2V0dXAgT3BlbiBXZWJVSSB1c2luZyBEb2NrZXIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRXhwb3NlIE9sbGFtYSdzIEFQSSB2aWE6IHNzaCAtcCA0NDMgLVIgMDpsb2NhbGhvc3Q6MTE0MzQgLXQgcXJAYS5waW5nZ3kuaW8gXCJ1Okhvc3Q6bG9jYWxob3N0OjExNDM0XCIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2hhcmUgT3BlbiBXZWJVSSB3aXRoOiBzc2ggLXAgNDQzIC1SIDA6bG9jYWxob3N0OjMwMDAgYS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQWR2YW5jZWQgY29uZmlndXJhdGlvbjogQWRkIGF1dGhlbnRpY2F0aW9uLCB1c2UgY3VzdG9tIGRvbWFpbnMsIGFuZCBvcHRpbWl6ZSBwZXJmb3JtYW5jZSIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

In today’s AI-driven world, deploying large language models (LLMs) like Meta’s Llama 3, Google’s Gemma, or Mistral locally offers unparalleled control over data privacy and customization. However, sharing these tools securely over the internet unlocks collaborative potential—whether you’re a developer showcasing a prototype, a researcher collaborating with peers, or a business integrating AI into customer-facing apps.  

This comprehensive guide will walk you through exposing {{< link href="https://ollama.com/" >}} Ollama’s API {{< /link >}} and {{< link href="https://github.com/open-webui/open-webui" >}} Open WebUI {{< /link >}} online using [Pinggy](https://pinggy.io/), a powerful tunneling service. You’ll learn to turn your local AI setup into a globally accessible resource—no cloud servers or complex configurations required.  

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/pinggy.png" "How to Easily Share Ollama API and Open WebUI Online" >}}


{{% tldr %}}

1. **Install Ollama & Download a Model**  
   - Get Ollama from <a href="https://ollama.com" target="_blank">ollama.com</a> and run a model:  
     ```bash
     ollama run llama3:8b
     ```

2. **Share Ollama API via Pinggy**  
   - Create a secure tunnel for port 11434:  
     ```bash
     ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io "u:Host:localhost:11434"
     ```
   - Access API via [Pinggy](https://pinggy.io) URL (e.g., `https://abc123.pinggy.link`).

3. **Deploy Open WebUI**  
   - Run via <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker</a>:  
     ```bash
     docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway ghcr.io/open-webui/open-webui:main
     ```

4. **Expose WebUI Online**  
   - Tunnel port 3000:  
     ```bash
     ssh -p 443 -R0:localhost:3000 a.pinggy.io
     ```
   - Share the generated URL for ChatGPT-like access to your LLMs.

{{% /tldr %}}

## Why Share Ollama and Open WebUI Online?  

### The Rise of Local AI Deployment  
With growing concerns about data privacy and API costs, tools like Ollama and Open WebUI have become essential for running LLMs locally. However, limiting access to your local network restricts their utility. By sharing them online, you can:  
- **Collaborate remotely** with team members or clients.  
- **Integrate AI into web/mobile apps** via Ollama’s API.  
- **Demo projects** without deploying to the cloud.  
- **Reduce latency** by keeping inference local while enabling remote access.  

### Why Choose Pinggy for Tunneling?  
Pinggy simplifies port forwarding by creating secure tunnels. Unlike alternatives like ngrok, it offers:  
- **Free HTTPS URLs** with no signup required.  
- **No rate limits** on the free tier.  
- **SSH-based security** for encrypted connections.  


## Prerequisites for Sharing Ollama and Open WebUI  
### A. Install Ollama  
1. **Download Ollama**: Visit {{< link href="https://ollama.com/" >}}ollama.com{{< /link >}}  and choose your OS:  
   - **Windows**: Double-click the `.exe` installer.  
   - **macOS/Linux**: Run 
    ```bash
    curl -fsSL https://ollama.com/install.sh | sh 
    ```
2. **Verify Installation**:  
   ```bash
   ollama --version  # Should return "ollama version 0.1.30" or higher
   ```  
   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_version.webp" "ollama version check" >}}

### B. Download a Model  
Ollama supports 100+ models. Start with a lightweight option:  
```bash
ollama run qwen:0.5b  
```  
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/model_run_terminal.webp" "ollama run qwen:0.5b model" >}}
For multimodal capabilities (text + images), try `llava` or `bakllava`:  
```bash
ollama run llava:13b
```  

### C. Install Open WebUI  
Open WebUI provides a ChatGPT-like interface for Ollama. Install via Docker:  
```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```  
Access the UI at `http://localhost:3000` and create an admin account.  
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/download_open_webui_image.webp" "install open webui docker image" >}}
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_docker_ss.webp" "docker screenshot" >}}
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_running_on_local.webp" "Open webui running localhost" >}}


## Step-by-Step Guide to Sharing Ollama API  

{{< iframe src="https://www.youtube.com/embed/Zlwr4alUflo" title="YouTube video player" >}}

### Start Ollama Locally  
By default, Ollama runs on port `11434`. Start the server:  
```bash
ollama serve  # Keep this terminal open
```  

### Create a Public URL with Pinggy  
Use this SSH command to tunnel Ollama’s API:  
```bash
ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io "u:Host:localhost:11434"
```  

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"}}}"
{{</ ssh_command >}}
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_test_local.webp" "ollama model api test local" >}}

**Command Breakdown**:  
- `-p 443`: Connects via HTTPS for firewall compatibility.  
- `-R0:localhost:11434`: Forwards Ollama’s port to Pinggy.  
- `qr@a.pinggy.io`: Pinggy’s tunneling endpoint.  
- `u:Host:localhost:11434`: Maps the tunnel to your local port.

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/pinggy_tunnel_command_for_model.webp" "pinggy command" >}}

After running, you’ll see a public URL like `https://abc123.pinggy.link`.  

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_log_terminal.webp" "ollama log" >}}


### Test and Integrate the Shared API  
Verify access using `curl` or Verify using web browser:  
```bash
curl https://abc123.pinggy.link/api/tags
```  
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_test_pinggy_url.webp" "ollama api test using pinggy url" >}}

To test the Ollama API using JavaScript, follow these simple steps:
1. Clone the repository from GitHub: {{< link href="https://github.com/Moksh45/RunOllamaApi" >}}RunOllamaApi{{< /link >}}.
2. Open the project directory in your terminal.
3. Install the required dependencies by running `npm install`.
4. Execute the script with `node main.js` to test the API.

## Step-by-Step Guide to Sharing Open WebUI  
{{< iframe src="https://www.youtube.com/embed/953DU7vL6UQ" title="YouTube video player" >}}

### Expose Open WebUI via Pinggy  
Run this command to share port `3000`:  
```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```  
{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

You’ll receive a URL like `https://xyz456.pinggy.link`.  

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_tunnel_create.webp" "open webui via pinggy url" >}}

### Access the WebUI Remotely  
1. Open `https://xyz456.pinggy.link` in a browser.  
2. Log in with your Open WebUI credentials.  
3. Leverage features like:  
   - **Chat with models** (Llama 3, Mistral, etc.).  
   - **Upload documents** for RAG (Retrieval-Augmented Generation).  
   - **Switch models** via the top-right dropdown.  

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_login.webp" "Log in with your Open WebUI credentials" >}}
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_running_on_pinggy_url.png" "open webui live" >}}

## Advanced Configuration and Security Best Practices  
### Secure Your Deployment  
- **Enable Basic Authentication in Pinggy**:  
  Secure your tunnel by appending a username and password to your SSH command:  

  ```bash
  ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password
  ```  

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

  You can also configure multiple username-password pairs for enhanced access control. For more details, refer to the [official documentation](https://pinggy.io/docs/http_tunnels/basic_auth/).

### Custom Domains and Performance Optimization  
With [Pinggy Pro](https://pinggy.io/#prices) (INR 204.89/month), you can set up a **custom domain** for your tunnels. This enhances branding and improves accessibility.  

For a step-by-step guide on setting up a custom domain, refer to the [Pinggy Custom Domain Documentation](https://pinggy.io/docs/custom_domain/).

## Real-World Use Cases for Remote AI Access  

### Collaborative Development  
Distributed teams can:  
- Share a single Ollama instance for **code review** and **documentation generation**.  
- Train custom models collaboratively using Open WebUI’s RAG features.  

### Customer-Facing Applications  
Expose Ollama’s API to power:  
- **AI chatbots** for 24/7 customer support.  
- **Content generation tools** for blogs, social media, or product descriptions.  

### Academic and Research Workflows  
Researchers can securely share access to proprietary models with peers without exposing internal infrastructure.  

## Troubleshooting Common Issues  

### Connection Errors  
1. **"Connection Refused"**:  
   - Ensure Ollama is running: `ollama serve`.  
   - Check firewall settings for ports `11434` and `3000`.  

### Model Loading Failures  
- Verify model compatibility with your Ollama version.  
- Free up RAM for larger models like `llama3:70b` (requires 40+ GB).  


## Conclusion and Next Steps  

By combining **Ollama**, **Open WebUI**, and **Pinggy**, you’ve created a secure, shareable AI platform without relying on cloud services. This setup is ideal for startups, researchers, or anyone prioritizing data control.  

