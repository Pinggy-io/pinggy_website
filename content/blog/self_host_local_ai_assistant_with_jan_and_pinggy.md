---
title: "Self-host Local AI Assistant with Jan and Pinggy"
description: "Learn how to run Jan, a ChatGPT alternative, locally and share it online using Pinggy. A complete guide to setting up your private AI assistant with full data control and privacy."
date: 2025-06-19T14:00:00+05:30
draft: false
tags: ["Jan", "Pinggy", "Self-Hosted AI", "Local AI", "AI Assistant", "Privacy", "Jan.ai"]
og_image: "images/self_host_local_ai_assistant_with_jan_and_pinggy/jan_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiU2VsZi1ob3N0IExvY2FsIEFJIEFzc2lzdGFudCB3aXRoIEphbiBhbmQgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHJ1biBKYW4sIGEgQ2hhdEdQVCBhbHRlcm5hdGl2ZSwgbG9jYWxseSBhbmQgc2hhcmUgaXQgb25saW5lIHVzaW5nIFBpbmdneS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc2VsZl9ob3N0X2xvY2FsX2FpX2Fzc2lzdGFudF93aXRoX2phbl9hbmRfcGluZ2d5L2phbl9iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJEb3dubG9hZCBhbmQgaW5zdGFsbCBKYW4gZnJvbSBqYW4uYWkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRG93bmxvYWQgYW4gQUkgbW9kZWwgZnJvbSB0aGUgSHViVGFiIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlN0YXJ0IGNoYXR0aW5nIGluIHRoZSBOZXcgQ2hhdCB0YWIiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2hhcmUgb25saW5lIHdpdGggUGluZ2d5IHVzaW5nOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MTMzNyAtdCBxckBhLnBpbmdneS5pbyB1Okhvc3Q6bG9jYWxob3N0OjEzMzciCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---
{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_banner.webp" "Self-host Local AI Assistant with Jan and Pinggy" >}}

Running your own AI assistant locally means keeping full control over your conversations and data while avoiding subscription fees and usage limits. {{< link href="https://jan.ai/" >}}Jan{{< /link >}} is an open-source ChatGPT alternative that runs entirely on your computer, powered by the robust Cortex inference engine. With [Pinggy](https://pinggy.io), you can also share your local Jan instance online for team collaboration or remote access.


{{% tldr %}}

1. **Download Jan**
   - Install from <a href="https://jan.ai/" target="_blank">jan.ai</a> for Windows, Mac, or Linux
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
- **Open Source** - Fully transparent and customizable

## Getting Jan Up and Running

Getting started with Jan is surprisingly straightforward. Head over to {{< link href="https://jan.ai/" >}}jan.ai{{< /link >}} and grab the installer for your operating system. Whether you're on Windows, Mac, or Linux, there's a proper installer that handles everything for you.

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_download_page.webp" "Jan download page" >}}

Once you've got Jan installed and launched, you'll see a clean interface with no pre-installed models. The first thing you'll want to do is download an AI model to actually chat with. Click on the **Hub Tab** to browse available models.


Jan offers various local AI models from nimble lightweights to hefty powerhouses. Browse models and tap any for details - models need to be in GGUF format. Choose carefully based on your hardware specifications as local models consume your computer's memory and processing power.

**Pro Tip**: Start with the smaller model first to test everything works, then you can always download larger models later for better performance.

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_hubtab.webp" "Jan Hub Tab model browser" >}}

Once your model is downloaded, you can start chatting by typing your message in the **New Chat** at the bottom of the interface. You can test it out with something simple like asking it to help you write a Python function or explain a concept you're curious about.

{{< image "self_host_local_ai_assistant_with_jan_and_pinggy/jan_conversation.webp" "Jan conversation interface" >}}

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

With Pinggy's tunneling, you can easily share your local Jan instance when needed, making it accessible from anywhere while keeping the processing local to your machine. This approach offers the best of both worlds: the privacy and control of local hosting with the convenience of online access when you need it.