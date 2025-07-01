---
title: "How to Run DeepSeek Locally"
description: "Learn how to run powerful DeepSeek AI models locally on your computer using Ollama for privacy-focused, cost-effective AI development with data control."
date: 2025-04-29T14:00:00+05:30
draft: false
tags: ["DeepSeek", "DeepSeek-R1", "Ollama", "Self-Hosted AI", "LLM Deployment", "AI Models"]
og_image: "images/run_deepseek_locally/deepseek_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiUnVuIERlZXBTZWVrIEFJIExvY2FsbHkgVXNpbmcgT2xsYW1hIiwKICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHJ1biBEZWVwU2VlayBBSSBtb2RlbHMgbG9jYWxseSBmb3IgcHJpdmFjeS1mb2N1c2VkIEFJIGRldmVsb3BtZW50IiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3J1bl9kZWVwc2Vla19sb2NhbGx5L2RlZXBzZWVrX2Jhbm5lci53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkRvd25sb2FkIGFuZCBpbnN0YWxsIE9sbGFtYSBmcm9tIGh0dHBzOi8vb2xsYW1hLmNvbS9kb3dubG9hZCBmb3IgeW91ciBvcGVyYXRpbmcgc3lzdGVtIChXaW5kb3dzLCBtYWNPUywgb3IgTGludXgpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJPcGVuIGEgdGVybWluYWwgYW5kIHB1bGwgdGhlIERlZXBTZWVrIGJhc2UgbW9kZWwgdXNpbmcgdGhlIGNvbW1hbmQ6ICdvbGxhbWEgcHVsbCBkZWVwc2Vlay1yMToxLjViJy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiVG8gdXNlIGEgbGFyZ2VyIG1vZGVsLCBydW46ICdvbGxhbWEgcHVsbCBkZWVwc2Vlay1jb2Rlcjo2LjdiJy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU3RhcnQgdGhlIG1vZGVsIGxvY2FsbHkgdXNpbmc6IG9sbGFtYSBydW4gZGVlcHNlZWstcjE6MS41Yicgb3IgJ29sbGFtYSBwdWxsIGRlZXBzZWVrLXIxOjEuNWInLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJFeHBvc2UgdGhlIE9sbGFtYSBBUEkgb24gdGhlIGludGVybmV0IHVzaW5nIFBpbmdneSB3aXRoIHRoZSBjb21tYW5kOiAnc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjExNDM0IC10IHFyQGEucGluZ2d5LmlvIHU6SG9zdDpsb2NhbGhvc3Q6MTE0MzQnLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJZb3UgY2FuIG5vdyBzZW5kIHJlcXVlc3RzIHRvIHRoZSBPbGxhbWEgQVBJIHZpYSB0aGUgUGluZ2d5IHB1YmxpYyBVUkwgb3IgaW50ZWdyYXRlIGl0IHdpdGggeW91ciB0b29scyBzZWN1cmVseS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

In today's AI landscape, running powerful language models locally gives you privacy, cost savings, and full control over your data. {{< link href="https://github.com/deepseek-ai/DeepSeek-LLM" >}}DeepSeek-R1{{< /link >}} models have emerged as impressive open-source AI options that rival commercial alternatives. These models excel at reasoning, coding, and solving complex problems - all while running on your own hardware.
{{< image "run_deepseek_locally/deepseek_banner.webp" "Run DeepSeek Locally Using Ollama" >}}


{{% tldr %}}

1. **Install Ollama**  
   - Download from <a href="https://ollama.com/download" target="_blank">ollama.com/download</a> for your operating system
2. **Get a DeepSeek-R1 Model**  
   ```bash
   # Choose the right size for your computer:
   ollama pull deepseek-r1:1.5b  # For basic computers (1.1GB)
   ollama pull deepseek-r1:7b    # For better performance (4.7GB)
   ```
3. **Run the Model**  
   ```bash
   # Start using your AI model:
   ollama run deepseek-r1:1.5b
   # Or for better reasoning:
   ollama run deepseek-r1:7b
   ```
4. **Share API Online with Pinggy** (Optional)  
   ```bash
   ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io "u:Host:localhost:11434"
   ```

{{% /tldr %}}

## Why Use DeepSeek-R1 Models Locally?

DeepSeek-R1 is a powerful family of AI models with performance similar to high-end commercial options. Running these models locally offers significant benefits:

- **Keep your data private** - Your prompts never leave your computer
- **No usage fees or rate limits** - Use the model as much as you want
- **Work offline** - No internet connection needed
- **Choose the right size** - From small models for basic computers to larger models for advanced tasks

## Getting Started in 3 Simple Steps

### Step 1: Install Ollama

1. **Download the installer**:
   - Visit [ollama.com/download](https://ollama.com/download) 
   - Download the version for your operating system (Windows, macOS, or Linux)
   - Follow the installation instructions

2. **Verify installation**:
   ```bash
   ollama --version  # Should show the current version number
   ```
   {{< image "run_deepseek_locally/ollama_version.webp" "Verify Ollama Installation" >}}

### Step 2: Download a DeepSeek-R1 Model

DeepSeek-R1 comes in different sizes to match your computer's capabilities:

1. **For basic computers** (8GB RAM or less):
   ```bash
   ollama pull deepseek-r1:1.5b
   ```
   {{< image "run_deepseek_locally/deepseek_r1_1.5b_pull.webp" "Pulling the smallest DeepSeek-R1 model" >}}

2. **For mid-range computers** (16GB RAM):
   ```bash
   ollama pull deepseek-r1:7b
   ```

3. **For powerful computers** (32GB+ RAM):
   ```bash
   ollama pull deepseek-r1:8b    # 4.9GB
   ollama pull deepseek-r1:14b   # 9.0GB
   ```

4. **Check your downloaded models**:
   ```bash
   ollama list
   ```
   {{< image "run_deepseek_locally/ollama_list.webp" "List of your available models" >}}

### Step 3: Start Using DeepSeek-R1

Now that you have the model downloaded, let's start using it:

1. **Run the model**:
   ```bash
   ollama run deepseek-r1:1.5b
   ```
   {{< image "run_deepseek_locally/deepseek_r1_run.webp" "DeepSeek-R1 running in terminal" >}}

2. **Try reasoning tasks**:
   ```
   You: Solve this step by step: If I have 12 apples and give away 1/3 of them, then eat 2, how many do I have left?
   ```
   {{< image "run_deepseek_locally/command_output_1.webp" "DeepSeek-R1 Try reasoning tasks1" >}}
   {{< image "run_deepseek_locally/command_output_2.webp" "DeepSeek-R1 Try reasoning tasks2" >}}

## Using the API for Your Applications

You can also use DeepSeek-R1 in your applications through the Ollama API:

1. **Make sure the server is running**:
   ```bash
   ollama serve
   ```

2. **Send requests with curl**:
   ```bash
   curl --location 'http://localhost:11434/api/chat' \
   --header 'Content-Type: application/json' \
   --data '{
     "model": "deepseek-r1:1.5b",
     "messages": [
       {
         "role": "user",
         "content": "Hello"
       }
     ]
   }'
   ```
{{< image "run_deepseek_locally/postman_ss.webp" "Send requests with curl" >}}

3. **To test the Ollama API using JavaScript, follow these simple steps**:
    -  Clone the repository from GitHub: {{< link href="https://github.com/Moksh45/RunOllamaApi" >}}RunOllamaApi{{< /link >}}.
    - Open the project directory in your terminal.
    - Install the required dependencies by running `npm install`.
    - Execute the script with `node main.js` to test the API.

## Using DeepSeek through a GUI with Open WebUI

Instead of interacting with DeepSeek through the command line, you can use Open WebUI - a user-friendly ChatGPT-like interface for Ollama models:

1. **Install Open WebUI via Docker**:
   ```bash
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

2. **Access the UI** at `http://localhost:3000` in your browser and create an admin account on first use.

   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_running_on_local.webp" "Open WebUI running on localhost" >}}

3. **Chat with DeepSeek models**:
   - Select your DeepSeek model from the dropdown menu in the top-right corner
   - Start chatting in a clean, modern interface
   - Upload documents for analysis
   - Organize conversations in folders

   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/open_webui_running_on_pinggy_url.png" "Open WebUI interface" >}}

Open WebUI provides several advantages:
- Multi-modal support for image inputs
- Conversation history management
- Preset prompts and system prompts
- Shareable chat URLs
- Mobile-friendly interface

To learn more about Open WebUI, including advanced features, check out our guide on [How to Easily Share Ollama API and Open WebUI Online](https://pinggy.io/blog/how_to_easily_share_ollama_api_and_open_webui_online/).

## Sharing Your Model Online (Optional)

If you want to share your DeepSeek-R1 model with others or access it remotely, you can use [Pinggy](https://pinggy.io):

1. **Start the Ollama server**:
   ```bash
   ollama serve  # Keep this terminal open
   ```
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_test_local.webp" "ollama model api test local" >}}

2. **Create a public tunnel**:
   ```bash
   ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io "u:Host:localhost:11434"
   ```
   
   {{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 -t qr@a.pinggy.io u:Host:localhost:11434\"}}}"
{{</ ssh_command >}}

**Command Breakdown**:  
- `-p 443`: Connects via HTTPS for firewall compatibility.  
- `-R0:localhost:11434`: Forwards Ollama's port to Pinggy.  
- `qr@a.pinggy.io`: Pinggy's tunneling endpoint.  
- `u:Host:localhost:11434`: Maps the tunnel to your local port.

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/pinggy_tunnel_command_for_model.webp" "pinggy command" >}}

After running, you'll see a public URL like `https://abc123.pinggy.link`.  

{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_log_terminal.webp" "ollama log" >}}

### Test and Integrate the Shared API  
Verify access using `curl` or Verify using web browser:  
```bash
curl https://abc123.pinggy.link/api/tags
```  
{{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_api_test_pinggy_url.webp" "ollama api test using pinggy url" >}}

> **Note**: For a detailed guide on sharing Ollama models online, check out [How to Easily Share Ollama API and Open WebUI Online](https://pinggy.io/blog/how_to_easily_share_ollama_api_and_open_webui_online/).

## Performance Tips

Here are some tips to get the best performance from DeepSeek-R1:

1. **Use quantized models** for less memory usage:
   ```bash
   # Example: q4_K_M is a 4-bit quantized version that uses less memory
   ollama run deepseek-r1:1.5b-q4_K_M
   ```

2. **Adjust model parameters** for better responses:
   ```bash
   ollama run deepseek-r1:1.5b --temperature 0.7 --top_p 0.9
   ```

## Troubleshooting

**Model won't load?**
- Try a smaller model: `ollama pull deepseek-r1:1.5b`
- Make sure you have enough free RAM

**Slow responses?**
- Use a quantized model variant
- Try a smaller context size: `ollama run deepseek-r1:1.5b --num_ctx 1024`

**API connection issues?**
- Verify Ollama is running: `ollama serve`

## About DeepSeek-R1 Models

DeepSeek-R1 models are licensed under MIT, which means you can:
- Use them commercially
- Modify and create derivative works
- Build applications with them

The models come in different sizes based on the original architecture:
- Qwen-based models: 1.5b, 7b, 14b, 32b
- Llama-based models: 8b, 70b

## Conclusion

Running DeepSeek-R1 locally with Ollama gives you a powerful AI assistant right on your computer. No cloud accounts, API fees, or privacy concerns - just incredible AI capabilities at your fingertips.

Get started today:
```bash
ollama pull deepseek-r1:1.5b && ollama run deepseek-r1:1.5b
```

For more information, check out the {{< link href="https://github.com/deepseek-ai/DeepSeek-LLM" >}}DeepSeek documentation{{< /link >}} and the [Ollama GitHub repository](https://github.com/ollama/ollama).