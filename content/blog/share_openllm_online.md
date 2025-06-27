---
title: "How to Easily Share OpenLLM API Online"
description: "Discover how to deploy and share large language models locally using OpenLLM and expose APIs securely via Pinggy tunneling. Perfect for developers and AI enthusiasts."
date: 2025-02-04T14:00:00+05:30
draft: false
tags: ["OpenLLM", "Pinggy", "Self-Hosted AI", "LLM Deployment", "AI Tunneling"]
og_image: "images/share_openllm_online/thumbnail_image.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNlbGYtSG9zdCBMYXJnZSBMYW5ndWFnZSBNb2RlbHMgKExMTXMpIHdpdGggT3BlbkxMTSBhbmQgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIGRlcGxveSBMTE1zIGxvY2FsbHkgdXNpbmcgT3BlbkxMTSBhbmQgc2VjdXJlbHkgZXhwb3NlIHRoZW0gb25saW5lIHZpYSBQaW5nZ3kgdHVubmVsaW5nLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zaGFyZV9vcGVubGxtX29ubGluZS90aHVtYm5haWxfaW1hZ2UucG5nIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogInBpcCBpbnN0YWxsIG9wZW5sbG0gYW5kIGRlcGxveSBhIG1vZGVsLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTdGFydCBhIG1vZGVsIHNlcnZlciB1c2luZyBPcGVuTExNLCBlLmcuLCAnb3BlbmxsbSBzZXJ2ZSBsbGFtYTMuMjoxYi1pbnN0cnVjdC1nZ21sLWZwMTYtbGludXgnLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSBzZWN1cmUgdHVubmVsIHdpdGggUGluZ2d5OiAnc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgYS5waW5nZ3kuaW8nLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJBY2Nlc3MgeW91ciBMTE0gQVBJIGFuZCBPcGVuIFdlYlVJIHZpYSB0aGUgZ2VuZXJhdGVkIFBpbmdneSBwdWJsaWMgVVJMLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJFbmhhbmNlIHNlY3VyaXR5IGJ5IGFkZGluZyBhdXRoZW50aWNhdGlvbiBhbmQgc2V0dGluZyB1cCBhIGN1c3RvbSBkb21haW4uIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

In the era of generative AI, self-hosting large language models (LLMs) gives developers full control over data privacy and model customization. {{< link href="https://github.com/bentoml/OpenLLM" >}} OpenLLM{{< /link >}} emerges as a powerful toolkit for deploying {{< link href="https://github.com/bentoml/openllm-models?tab=readme-ov-file#supported-models" >}}models{{< /link >}} like {{< link href="https://www.llama.com/" >}} Llama 3 {{< /link >}} or {{< link href="https://mistral.ai/en" >}} Mistral {{< /link >}} locally, while [Pinggy](https://pinggy.io) enables secure internet exposure without complex infrastructure. This guide walks you through self-hosting an LLM endpoint with a public URL, making it accessible and shareable in minutes.

{{< image "share_openllm_online/thumbnail_image.png" "Self-Host LLMs with OpenLLM and Pinggy" >}}

{{% tldr %}}

1. **Install OpenLLM & Deploy a Model**  
   ```bash
   pip install openllm
   openllm serve llama3.2:1b-instruct-ggml-fp16-linux
   ```
   Change `llama3.2:1b-instruct-ggml-fp16-linux` to the model you want to execute.

2. **Expose API via Pinggy**  
   Tunnel port `3000`:  
   ```bash
   ssh -p 443 -R0:localhost:3000 a.pinggy.io
   ```
   - Share the generated URL for ChatGPT-like access to your LLMs.

{{% /tldr %}}

## Why Self-Host LLMs with OpenLLM?
### The Rise of Local AI Deployment  
With growing concerns about data privacy and API costs, tools like OpenLLM have become essential for running LLMs locally. However, limiting access to your local network restricts their utility. By sharing them online, you can:  
- **Collaborate remotely** with team members or clients.  
- **Integrate AI into web/mobile apps** via OpenLLM’s API.  
- **Demo projects** without deploying to the cloud.  
- **Reduce latency** by keeping inference local while enabling remote access.  

### Why Choose Pinggy for Tunneling?  
Pinggy simplifies port forwarding by creating secure tunnels. Unlike alternatives like ngrok, it offers:  
- **Free HTTPS URLs** with no installation required.  
- **No rate limits** on the free tier.  
- **No bandwidth limit** with the [Pinggy Pro plan](https://pinggy.io/#prices).
- **Web Debugger** Observe and monitor requests coming to your server.  

## Step-by-Step Guide to Sharing OpenLLM   
{{< iframe src="https://www.youtube.com/embed/mBeZZj1DnGc" title="YouTube video player" >}}
## Step 1: Install OpenLLM & Deploy Models

### Prerequisites
- Python 
- pip package manager

### Install openllm
```bash
pip install openllm
```
{{< image "share_openllm_online/install_openllm.webp" "install openllm" >}}

### Start a Model Server
Launch llama3.2:1b-instruct-ggml-fp16-linux. You can also choose a different model from {{< link href="https://github.com/bentoml/openllm-models?tab=readme-ov-file#supported-models" >}}this list{{</link>}}.
```bash
openllm serve llama3.2:1b-instruct-ggml-fp16-linux
```
Available models include:
- `mistral`
- `falcon`
- `qwen`
- `dolly-v2`

{{< image "share_openllm_online/serve_openllm.webp" "serve openllm" >}}


## Step 2: Expose OpenLLM API via Pinggy

### Create Secure Tunnel
While OpenLLM runs on port `3000`:
```bash
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

**Command Breakdown**:  
- `-p 443`: Connects via HTTPS for firewall compatibility.  
- `-R0:localhost:3000`: Forwards Ollama’s port to Pinggy.  
- `qr@a.pinggy.io`: Pinggy’s tunneling endpoint.  

{{< image "share_openllm_online/pinggy_tunnel_command.webp" "Pinggy Command" >}}

You'll receive a public URL like `https://xyz123.pinggy.link`.

{{< image "share_openllm_online/pinggy_public_url.webp" "Pinggy Public Url" >}}

### API Endpoints
- **OpenLLM Swagger Docs**:  
  ```bash
  curl https://xyz123.pinggy.link/
  ```
{{< image "share_openllm_online/swagger_docs.webp" "openllm swagger docs" >}}
- **OpenLLM WebUI**:  
  ```bash
  curl https://xyz123.pinggy.link/chat
  ```
{{< image "share_openllm_online/openllm_webui.webp" "openllm webui" >}}
- **List Models**:  
  ```bash
  curl https://xyz123.pinggy.link/v1/models
  ```
{{< image "share_openllm_online/openllm_models.webp" "openllm models" >}}

## Advanced Configuration and Security Best Practices  

### Secure Your Deployment  
- **Enable Basic Authentication in Pinggy**:  
  Secure your tunnel by appending a username and password to your SSH command:  

  ```bash
  ssh -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password
  ```  
{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 -t a.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

  You can also configure multiple username-password pairs for enhanced access control. For more details, refer to the [official documentation](https://pinggy.io/docs/http_tunnels/basic_auth/).

### Custom Domains and Performance Optimization  
With [Pinggy Pro](https://pinggy.io/#prices) ((3 USD/month)/month), you can set up a **custom domain** for your tunnels. This enhances branding and improves accessibility.  

For a step-by-step guide on setting up a custom domain, refer to the [Pinggy Custom Domain Documentation](https://pinggy.io/docs/custom_domain/).

## Real-World Use Cases for Remote AI Access  

### Collaborative Development  
Distributed teams can:  
- Share a single Ollama instance for **code review** and **documentation generation**.  
- Train custom models collaboratively using Open WebUI’s RAG features.  

### Customer-Facing Applications  
Expose OpenLLM's API to power:  b
- **AI chatbots** for 24/7 customer support.  
- **Content generation tools** for blogs, social media, or product descriptions.  

### Academic and Research Workflows  
Researchers can securely share access to proprietary models with peers without exposing internal infrastructure. 

## Troubleshooting

**Model Fails to Load**
- Verify hardware requirements (RAM/GPU)
- Check quantization compatibility:
  ```bash
  openllm run llama3.2:1b-instruct-ggml-fp16-linux --quantize int4
  ```

**Connection Timeouts**
- Use Pinggy's TCP mode for unstable networks:
  ```bash
  while true; do 
    ssh -p 443 -o StrictHostKeyChecking=no -R0:localhost:3000 a.pinggy.io; 
  sleep 10; done
  ```
  *Note: This command requires [Pinggy Pro](https://pinggy.io/#prices)*.

## Conclusion

Combining **OpenLLM**'s flexible model serving with **Pinggy**'s secure tunneling provides a quick and easy way to deploy AI models accessible from anywhere. Whether you're prototyping chatbots or testing NLP pipelines, this stack simplifies remote access without the complexity of traditional deployments.

- Complete data ownership
- Cost-effective scaling
- Developer-friendly tooling

Ready to deploy? Start with:
```bash
pip install openllm && openllm run llama3.2:1b-instruct-ggml-fp16-linux
```

For advanced configurations, explore {{< link href="https://github.com/bentoml/OpenLLM" >}}OpenLLM Documentation{{< /link >}} and [Pinggy Features](https://pinggy.io/#features:~:text=Learn%20more-,Features,-No%20downloads).