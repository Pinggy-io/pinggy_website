---
title: "Self-host Local AI Assistant with Jan and Pinggy"
description: "Learn how to run Jan, a ChatGPT alternative, locally and share it online using Pinggy. Complete guide to setting up your private AI assistant with local models and remote API access."
date: 2025-06-19T14:00:00+05:30
draft: false
tags: ["Jan", "Pinggy", "Self-Hosted AI", "Local AI", "AI Assistant", "Privacy", "Jan.ai"]
og_image: "images/self_host_local_ai_assistant_with_jan_and_pinggy/jan_banner.png"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiU2VsZi1ob3N0IExvY2FsIEFJIEFzc2lzdGFudCB3aXRoIEphbiBhbmQgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHJ1biBKYW4sIGEgQ2hhdEdQVCBhbHRlcm5hdGl2ZSwgbG9jYWxseSBhbmQgc2hhcmUgaXQgb25saW5lIHVzaW5nIFBpbmdneS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2VsZl9ob3N0X2xvY2FsX2FpX2Fzc2lzdGFudF93aXRoX2phbl9hbmRfcGluZ2d5L2phbl9iYW5uZXIucG5nIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkRvd25sb2FkIGFuZCBpbnN0YWxsIEphbiBmcm9tIGphbi5haSIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJEb3dubG9hZCBhbiBBSSBtb2RlbCBmcm9tIHRoZSBIdWJUYWIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU3RhcnQgY2hhdHRpbmcgaW4gdGhlIE5ldyBDaGF0IHRhYiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTaGFyZSBvbmxpbmUgd2l0aCBQaW5nZ3kgdXNpbmc6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoxMzM3IC10IHFyQGEucGluZ2d5LmlvIHU6SG9zdDpsb2NhbGhvc3Q6MTMzNyIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---
{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_banner.png" "Self-host Local AI Assistant with Jan and Pinggy" >}}

Running your own AI assistant locally means keeping full control over your conversations and data while avoiding subscription fees and usage limits. {{< link href="https://jan.ai/" >}}Jan{{< /link >}} is an open-source ChatGPT alternative that runs entirely on your computer, powered by the robust Cortex inference engine. You can also connect to cloud models from providers like Anthropic, OpenAI, and Google for additional capabilities. With [Pinggy](https://pinggy.io), you can share your Jan instance online for team collaboration or remote access.


{{% tldr %}}

1. **Download Jan**
   - Install from <a href="https://jan.ai/download" target="_blank">jan.ai</a> for Windows, Mac, or Linux
   - No complex setup required - works out of the box

2. **Get an AI Model**
   ```
   Recommended models:
   • phi3.5 (for 8GB+ RAM)
   • qwen2.5 (for older computers)
   ```

3. **Start Chatting**
   - Use the New Chat tab for conversations
   - Works 100% offline with full privacy

4. **Share Online with Pinggy** 
   ```bash
   ssh -p 443 -R0:localhost:1337 -t qr@a.pinggy.io "u:Host:localhost:1337"
   ```

{{% /tldr %}}

## Why Choose Jan for Your Local AI Assistant?

Jan offers a compelling alternative to cloud-based AI services with several key advantages:

- **Complete Privacy** - Your conversations never leave your computer
- **No Subscription Fees** - Use powerful AI models without ongoing costs
- **Offline Capability** - Works without internet connection
- **User-Friendly Interface** - Familiar ChatGPT-like experience
- **Document Intelligence** - Talk to PDFs, notes, and other documents directly to get summaries, answers, or insights
- **Open Source** - Fully transparent and customizable

## Getting Jan Up and Running

Jan is available for Mac, Windows and Linux. You can download and install pre-built binaries from {{< link href="https://jan.ai/download" >}}Jan.ai{{< /link >}}.

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_download_page.webp" "Jan download page" >}}

You can also build it from source using:

```bash
git clone https://github.com/menloresearch/jan
cd jan
make dev
```

See detailed guide here: {{< link href="https://github.com/menloresearch/jan" >}}Jan.ai GitHub Repo{{< /link >}}

Once you've got Jan installed and launched, you'll see a clean interface with no pre-installed models. The first thing you'll want to do is download an AI model to actually chat with. Click on the **Hub Tab** to browse available models.


Jan offers various local AI models from nimble lightweights to hefty powerhouses. Browse models and tap any for details - models need to be in GGUF format. Choose carefully based on your hardware specifications as local models consume your computer's memory and processing power.

**Pro Tip**: Start with the smaller model first to test everything works, then you can always download larger models later for better performance.

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_hubtab.webp" "Jan Hub Tab model browser" >}}

Once your model is downloaded, you can start chatting by typing your message in the **New Chat** at the bottom of the interface. You can test it out with something simple like asking it to help you write a Python function or explain a concept you're curious about.

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_conversation.webp" "Jan conversation interface" >}}

## Connect to Remote AI Models (Optional)

Beyond local models, Jan also supports connecting to cloud-based AI models from major providers like Anthropic (Claude), OpenAI (GPT-4), Google (Gemini), Groq, and Cohere etc. This gives you access to the latest AI capabilities without hardware limitations.

To add remote models:
1. Go to **Settings** → **Model Providers** 
2. Select your preferred provider (Anthropic, OpenAI, Google, etc.)
3. Add your API key from the provider's console
4. Start using premium models alongside your local ones

This hybrid approach lets you use local models for privacy-sensitive tasks and remote models for demanding work that requires cutting-edge AI capabilities. When sharing via [Pinggy](https://pinggy.io), your team gets access to both local and premium models through the same interface.

## Accessing Jan's API for Development

Jan includes a built-in API server that's compatible with OpenAI's API specification, making it perfect for building custom AI-powered tools:

To enable the API server:
1. Navigate to the **Setting > Local API Server** in Jan
2. Add an API Key (can be anything like "testing" or "jan-api-key")
3. Click **Start Server** button
4. Wait for confirmation: `JAN API listening at: http://127.0.0.1:1337`

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/start_local_api_server.webp" "Jan API Server Settings" >}}

Here's a simple example of using Jan's API with curl:

```bash
curl --location 'http://127.0.0.1:1337/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer testing' \
--data '{
    "model": "qwen3:0.6b",
    "messages": [
      {"role": "user", "content": "Explain quantum computing in simple terms"}
    ]
  }'
```

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_api_test.webp" "Testing Jan API with curl" >}}

## Sharing Your Jan Instance Online with Pinggy

If you want to access your Jan assistant from other devices or share it with team members, [Pinggy](https://pinggy.io) makes this incredibly simple:

1. **Keep Jan running** on your computer
2. **Open a terminal** and run this command:
   ```bash
   ssh -p 443 -R0:localhost:1337 -t qr@a.pinggy.io "u:Host:localhost:1337"
   ```

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/pinggy_tunnel_command.webp" "Pinggy tunnel command for Jan" >}}

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\",\"cmd\":\"./pinggy -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 -t qr@a.pinggy.io u:Host:localhost:1337\"}}}"
{{</ ssh_command >}}

3. **Share the public URL** that Pinggy generates (something like `https://abc123.pinggy.link`)

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/pinggy_public_url.webp" "Pinggy public url for Jan" >}}

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/test_jan_on_pinggy_public_url.webp" "Jan running on Pinggy public url" >}}

Now anyone with the URL can access your Jan instance through their web browser. This is perfect for:
- **Remote Work**: Access your AI assistant from anywhere
- **Team Collaboration**: Share AI capabilities with colleagues
- **Mobile Access**: Use Jan on devices where the app isn't available

## Security Considerations

When sharing your Jan instance online, consider these security measures:

### Add Basic Authentication
Protect your tunnel with a username and password:
```bash
ssh -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password
```

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\",\"cmd\":\"./pinggy -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 -t a.pinggy.io b:username:password\"}}}"
{{</ ssh_command >}}

### Custom Domains
With [Pinggy Pro](https://pinggy.io/#prices), you can use custom domains for a more professional setup.

## Conclusion

Setting up your own local AI assistant with Jan gives you the perfect combination of privacy, control, and capability. Whether you're using it for personal productivity, team collaboration, or development projects, this setup ensures your conversations stay private while giving you access to powerful AI capabilities.

With the option to connect remote models from providers like Anthropic, OpenAI, and Google, you can access premium AI capabilities when your local hardware isn't sufficient. And with Pinggy's tunneling, you can easily share your Jan instance when needed, making it accessible from anywhere while keeping the processing local to your machine.

This approach offers the best of both worlds: the privacy and control of local hosting with the convenience of online access when you need it.