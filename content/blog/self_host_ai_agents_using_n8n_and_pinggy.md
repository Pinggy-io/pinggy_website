---
title: "Self-Host AI Agents Using n8n and Pinggy"
description: "Learn how to self-host n8n's AI Starter Kit and access your AI workflows remotely with Pinggy. A step-by-step guide to creating privacy-focused AI solutions with local LLMs."
date: 2025-06-07T14:00:00+05:30
draft: false
tags: ["n8n", "AI", "Self-Hosted", "Pinggy", "Ollama", "Qdrant", "Local LLM"]
og_image: "images/self_host_ai_agents_using_n8n_and_pinggy/n8n_ai_starter_kit_pinggy.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNlbGYtSG9zdCBBSSBBZ2VudHMgVXNpbmcgbjhuIGFuZCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJMZWFybiBob3cgdG8gc2VsZi1ob3N0IG44bidzIEFJIFN0YXJ0ZXIgS2l0IGFuZCBhY2Nlc3MgeW91ciBBSSB3b3JrZmxvd3MgcmVtb3RlbHkgd2l0aCBQaW5nZ3kuIEEgc3RlcC1ieS1zdGVwIGd1aWRlIHRvIGNyZWF0aW5nIHByaXZhY3ktZm9jdXNlZCBBSSBzb2x1dGlvbnMgd2l0aCBsb2NhbCBMTE1zLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3RfYWlfYWdlbnRzX3VzaW5nX244bl9hbmRfcGluZ2d5L244bl9haV9zdGFydGVyX2tpdF9waW5nZ3kud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIERvY2tlciBhbmQgRG9ja2VyIENvbXBvc2Ugb24geW91ciBzeXN0ZW0iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ2xvbmUgdGhlIG44biBBSSBTdGFydGVyIEtpdCByZXBvc2l0b3J5OiBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL244bi1pby9zZWxmLWhvc3RlZC1haS1zdGFydGVyLWtpdC5naXQiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiTmF2aWdhdGUgaW50byB0aGUgY2xvbmVkIGZvbGRlciBhbmQgbGF1bmNoIGNvbnRhaW5lcnM6IGRvY2tlciBjb21wb3NlIC0tcHJvZmlsZSBjcHUgdXAiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQWNjZXNzIHlvdXIgbjhuIGluc3RhbmNlIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6NTY3OCBhbmQgc2V0IHVwIHRoZSBpbmNsdWRlZCBBSSB3b3JrZmxvdyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJFeHBvc2UgeW91ciBuOG4gaW5zdGFuY2UgdXNpbmcgUGluZ2d5OiBzc2ggLXAgNDQzIC1SIDA6bG9jYWxob3N0OjU2NzggYS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2VjdXJlIHlvdXIgZXhwb3NlZCBuOG4gaW5zdGFuY2UgdXNpbmcgUGluZ2d5J3MgYXV0aGVudGljYXRpb24gYW5kIGFjY2VzcyBjb250cm9sIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---
{{< image "self_host_ai_agents_using_n8n_and_pinggy/n8n_ai_starter_kit_pinggy.webp" "Self-Host AI Agents Using n8n and Pinggy" >}}

In today's AI landscape, running powerful AI agents locally offers significant advantages in terms of privacy, cost, and control. Combining n8n's powerful workflow automation platform with local Large Language Models (LLMs) creates a compelling solution for businesses and developers seeking to build AI-powered applications without relying on cloud APIs. This comprehensive guide will walk you through setting up the n8n Self-hosted AI Starter Kit and exposing it securely online using [Pinggy](https://pinggy.io).


{{% tldr %}}


1. **Self-host n8n AI Starter Kit**

   - Install Docker and Docker Compose
   - Clone the repository:

     ```bash
     git clone https://github.com/n8n-io/self-hosted-ai-starter-kit.git
     ```

   - Start the containers:

     ```bash
     docker compose --profile cpu up
     ```

     *(or use GPU profiles if available)*

   - Access n8n at: `http://localhost:5678/`

2. **Configure Your AI Environment**

   - Set up n8n with the included workflow
   - Verify Ollama is working by checking for the Llama3 model download
   - Connect to Qdrant for vector storage capabilities

3. **Expose with Pinggy for Remote Access**

   - Basic HTTP tunnel:

     ```bash
     ssh -p 443 -R0:localhost:5678 a.pinggy.io
     ```

   - With authentication:

     ```bash
     ssh -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password
     ```

   - Access your AI workflows remotely via the generated Pinggy URL

4. **Build AI Applications**

   - Create AI chatbots with memory
   - Develop document analysis workflows
   - Build automation for data processing with AI capabilities
   - All while keeping data private and secure


{{% /tldr %}}

## Why Self-Host AI Agents?

The rise of Large Language Models (LLMs) has transformed what's possible with AI, but relying on cloud APIs comes with challenges:

- **Privacy Concerns**: Sensitive data sent to third-party services may introduce compliance and confidentiality risks
- **Unpredictable Costs**: API usage can quickly become expensive with high volumes
- **Limited Control**: You're dependent on providers' model choices, pricing changes, and service availability
- **Latency Issues**: Network delays can impact real-time applications

Self-hosting AI agents addresses these challenges by keeping data and processing on your own infrastructure. Combined with n8n's workflow automation capabilities, you can create sophisticated AI applications tailored to your specific needs.

## What is n8n's Self-hosted AI Starter Kit?

The n8n Self-hosted AI Starter Kit is an open-source Docker Compose template that bootstraps a complete local AI development environment. It integrates:

- **n8n**: A powerful low-code workflow automation platform with 400+ integrations
- **Ollama**: A platform for running local LLMs like Llama3, Mistral, and more
- **Qdrant**: An open-source vector database for storing and retrieving embeddings
- **PostgreSQL**: A robust database for persistent storage

This combination provides everything needed for building advanced AI workflows without cloud dependencies.

## Prerequisites

Before starting, ensure you have:

- A computer with sufficient resources (recommended: 16GB+ RAM, preferably with a GPU)
- {{< link href="https://www.docker.com/products/docker-desktop" >}}Docker{{< /link >}} and Docker Compose installed
- Basic familiarity with terminal/command line
- Optional: NVIDIA GPU with CUDA support (for faster model inference)

## Step-by-Step Installation Guide

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/n8n-io/self-hosted-ai-starter-kit.git
cd self-hosted-ai-starter-kit
```

{{< image "self_host_ai_agents_using_n8n_and_pinggy/github_download.webp" "Clone the Repository" >}}

### 2. Choose Your Setup Profile

The starter kit offers different profiles based on your hardware:

- **For CPU-only systems**:
  ```bash
  docker compose --profile cpu up
  ```

- **For NVIDIA GPU users**:
  ```bash
  docker compose --profile gpu-nvidia up
  ```

- **For AMD GPU users on Linux**:
  ```bash
  docker compose --profile gpu-amd up
  ```

- **For Mac/Apple Silicon users**:
  ```bash
  docker compose up
  ```

{{< image "self_host_ai_agents_using_n8n_and_pinggy/docker_download.webp" "Docker Compose For Mac/Apple Silicon Users" >}}

### 3. Access n8n and Set Up Your Environment

Once the containers are running, access the n8n interface at:
```
http://localhost:5678/
```

{{< image "self_host_ai_agents_using_n8n_and_pinggy/localhost_terminal.webp" "Access n8n and Set Up Your Environment" >}}

You'll be prompted to create an account during the first login. After completing the setup:

{{< image "self_host_ai_agents_using_n8n_and_pinggy/sign_up.webp" "sign_up.webp" >}}

1. Navigate to the included workflow: `http://localhost:5678/workflow/srOnR8PAY3u4RSwb`
2. Click the **Chat** button at the bottom of the canvas to start the workflow
3. The first run will download the necessary model (Llama3.2), which may take some time depending on your internet connection

{{< image "self_host_ai_agents_using_n8n_and_pinggy/workflow_on_local.webp" "n8n interface with AI workflow" >}}

## Accessing Your n8n Instance Remotely with Pinggy

While your n8n instance works perfectly on your local network, you might want to access it remotely or share it with collaborators. This is where [Pinggy](https://pinggy.io) comes in, allowing you to create secure tunnels to your localhost.

### Basic HTTP Tunnel

To expose your n8n instance with a simple HTTP tunnel, run:

```bash
ssh -p 443 -R0:localhost:5678 a.pinggy.io
```

{{< image "self_host_ai_agents_using_n8n_and_pinggy/pinggy_command.webp" "Pinggy Command" >}}

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:5678 a.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5678 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5678 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5678 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5678 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5678 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5678 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5678 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5678 a.pinggy.io\"}}}"
{{</ ssh_command >}}

This command will create a tunnel and provide you with a public URL (e.g., `https://abc123.pinggy.link`) that redirects to your local n8n instance.

{{< image "self_host_ai_agents_using_n8n_and_pinggy/pinggy_public_url.webp" "Pinggy Public Url" >}}

{{< image "self_host_ai_agents_using_n8n_and_pinggy/login_in_using_pinggy.webp" "login n8n" >}}

{{< image "self_host_ai_agents_using_n8n_and_pinggy/workflow_using_pinggy_url.webp" "n8n interface with AI workflow using pinggy public url" >}}


### Adding Authentication

For better security, add basic authentication to your tunnel:

```bash
ssh -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password
```
{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:5678 -t a.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

This adds an extra layer of protection, requiring users to enter credentials before accessing your n8n instance.

## Building Powerful AI Workflows with n8n

Now that your self-hosted AI environment is up and running, you can start building powerful workflows. Here are some ideas to get you started:

### 1. AI Chatbot with Memory

Create a conversational agent that remembers past interactions using:
- Chat Trigger node to receive user messages
- AI Agent node connected to Ollama
- Postgres Chat Memory for persistent conversation history

### 2. Document Analysis and Summarization

Build a workflow that can process and extract insights from documents:
- Read/Write Files from Disk node to access PDFs or text files
- Text splitter nodes to chunk the content
- Ollama for embedding generation
- Qdrant to store and retrieve semantically similar content
- Summarization Chain for generating concise summaries

### 3. AI-Powered Data Processing

Automate data processing tasks with AI assistance:
- HTTP Request node to fetch data from APIs or databases
- Code node for data transformation
- AI Transform node to enhance or classify data
- Send Email or Webhook nodes to deliver processed results

## Security Considerations

When exposing your self-hosted AI environment, consider these security measures:

1. **Always use authentication** for your Pinggy tunnels
2. **Enable IP whitelisting** to restrict access to specific IPs
3. **Use n8n's built-in authentication** for an additional security layer
4. **Regularly update** all components (n8n, Ollama, Docker containers)
5. **Be cautious with sensitive data** in your workflows

## Troubleshooting Common Issues

### Ollama Model Download Issues

If Llama3 isn't downloading:
```bash
# Check Ollama logs
docker logs ollama
# Manually trigger a model download
docker exec -it ollama ollama pull llama3:8b
```

### n8n Connection to Ollama

If n8n can't connect to Ollama, verify the service configuration:
1. Navigate to n8n credentials: `http://localhost:5678/home/credentials`
2. Check "Local Ollama service" configuration
3. Ensure the base URL is set to `http://ollama:11434/` (or `http://host.docker.internal:11434/` for Mac users running Ollama locally)

## Conclusion 
Self-hosting AI agents with n8n and Pinggy gives you full control over your workflows, data, and infrastructure without relying on cloud APIs. With just Docker and a few simple commands, you can build secure, private, and scalable AI applications tailored to your needs. Whether you're building chatbots, document analysis tools, or data automation pipelines, this setup empowers you to harness the power of local LLMs with ease.