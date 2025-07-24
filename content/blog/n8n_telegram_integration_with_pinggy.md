---
title: "n8n Telegram Integration with Pinggy"
description: "Learn how to integrate Telegram with n8n using Pinggy for seamless automation. Step-by-step guide to create Telegram bots, set up webhooks, and build powerful workflows."
date: 2025-07-23T14:15:25+05:30
draft: false
tags: ["n8n", "telegram", "automation", "workflow", "bot", "pinggy", "webhook"]
categories: ["Automation", "Workflow", "Bot Development"]
og_image: "images/n8n_telegram_integration_with_pinggy/n8n_workflow_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAibjhuIFRlbGVncmFtIEludGVncmF0aW9uIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIGludGVncmF0ZSBUZWxlZ3JhbSB3aXRoIG44biBmb3IgYXV0b21hdGlvbiB3b3JrZmxvd3MsIGluY2x1ZGluZyBjcmVhdGluZyBib3RzLCBzZXR0aW5nIHVwIHdlYmhvb2tzLCBhbmQgdXNpbmcgUGluZ2d5IGZvciBsb2NhbCBkZXZlbG9wbWVudC4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ3JlYXRlIFRlbGVncmFtIEJvdCIsCiAgICAgICJ0ZXh0IjogIk9wZW4gVGVsZWdyYW0gYW5kIHNlYXJjaCBmb3IgQm90RmF0aGVyIChAQm90RmF0aGVyKS4gU2VuZCAvbmV3Ym90IGNvbW1hbmQgYW5kIGZvbGxvdyBpbnN0cnVjdGlvbnMgdG8gY3JlYXRlIHlvdXIgYm90IGFuZCBvYnRhaW4gQVBJIHRva2VuLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgbjhuIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo1Njc4IHFyQGZyZWUucGluZ2d5LmlvIHRvIGV4cG9zZSB5b3VyIGxvY2FsIG44biBpbnN0YW5jZSB3aXRoIEhUVFBTIGZvciBUZWxlZ3JhbSB3ZWJob29rcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBhbmQgU2V0dXAgbjhuIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCBuOG4gbG9jYWxseSB1c2luZyBucG0gaSBuOG4gLWcgb3IgRG9ja2VyLiBTdGFydCB3aXRoIFdFQkhPT0tfVVJMPWh0dHBzOi8veW91ci1waW5nZ3ktdXJsLmEucGluZ2d5LmxpbmsgbjhuIHN0YXJ0IGFuZCBhY2Nlc3MgYXQgaHR0cDovL2xvY2FsaG9zdDo1Njc4LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25maWd1cmUgVGVsZWdyYW0gTm9kZSIsCiAgICAgICJ0ZXh0IjogIkluIG44biwgYWRkIGEgVGVsZWdyYW0gVHJpZ2dlciBub2RlLCBjcmVhdGUgbmV3IGNyZWRlbnRpYWxzIHdpdGggeW91ciBib3QgdG9rZW4sIGFuZCBzYXZlIHRoZSBub2RlLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTZXQgV2ViaG9vayIsCiAgICAgICJ0ZXh0IjogIlZpc2l0IGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Q8eW91cl9ib3RfdG9rZW4+L3NldFdlYmhvb2s/dXJsPTx5b3VyX3dlYmhvb2tfdXJsPiB0byBjb25uZWN0IHlvdXIgYm90IHRvIHRoZSB3ZWJob29rLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBZGQgUmVzcG9uc2UgTm9kZSIsCiAgICAgICJ0ZXh0IjogIkFkZCBhIFRlbGVncmFtIG5vZGUgd2l0aCBSZXNvdXJjZTogTWVzc2FnZSwgT3BlcmF0aW9uOiBTZW5kIE1lc3NhZ2UsIENoYXQgSUQ6ID17JGpvbltcIm1lc3NhZ2VcIl1bXCJjaGF0XCJdW1wiaWRcIl19LCBhbmQgYSByZXNwb25zZSB0ZXh0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJUZXN0IFdvcmtmbG93IiwKICAgICAgInRleHQiOiAiRXhlY3V0ZSB0aGUgd29ya2Zsb3cgaW4gbjhuIGFuZCBzZW5kIC9zdGFydCB0byB5b3VyIFRlbGVncmFtIGJvdCB0byB0ZXN0IHRoZSBpbnRlZ3JhdGlvbi4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "n8n_telegram_integration_with_pinggy/n8n_workflow_banner.webp" "n8n Telegram Integration with Pinggy" >}}

Building automated workflows that connect Telegram with other services has become essential for modern businesses and developers. {{< link href="https://n8n.io" >}}n8n{{< /link >}} provides a powerful platform for creating these automations, while {{< link href="https://telegram.org" >}}Telegram{{< /link >}} offers an excellent messaging interface for users to interact with your automated systems.

However, when developing locally, connecting Telegram webhooks to your n8n instance can be challenging since Telegram requires HTTPS endpoints. This is where {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} becomes invaluable, providing instant HTTPS tunnels to your local development environment without any complex setup.

{{% tldr %}}

**Quick Setup Guide**
- Create Telegram bot via BotFather (`/newbot` command)
- Expose n8n with Pinggy: `ssh -p 443 -R0:localhost:5678 qr@free.pinggy.io`
- Install n8n with webhook URL: `npm i n8n -g && WEBHOOK_URL="https://your-pinggy-url.a.pinggy.link" n8n start`
- Configure Telegram Trigger node with bot token
- Set webhook: `https://api.telegram.org/bot<token>/setWebhook?url=<webhook_url>`
- Add response node with Chat ID: `={{$json["message"]["chat"]["id"]}}`
- Execute workflow and test with `/start` command
- <a target="_blank" href="https://n8n.io/workflows/">Browse n8n workflow templates</a>

**Popular Use Cases**
- Automated customer support responses
- Real-time notifications and alerts
- Data collection and processing
- Integration with CRM and business tools
- AI-powered chatbots and assistants

{{% /tldr %}}

## Why integrate Telegram with n8n?

Telegram's robust Bot API combined with n8n's visual workflow automation creates powerful possibilities for businesses and developers. This integration enables you to build sophisticated automation systems that can handle customer inquiries, process data, send notifications, and integrate with hundreds of other services.

**Real-time communication** - Telegram bots provide instant messaging capabilities, making them perfect for time-sensitive notifications, alerts, and customer interactions.

**Rich media support** - Beyond text messages, you can send images, documents, location data, and interactive keyboards, creating engaging user experiences.

**Scalable automation** - n8n's visual workflow builder lets you create complex automation logic without extensive coding, while still offering the flexibility to add custom JavaScript when needed.



## Setting up Your Development Environment

Before diving into the Telegram integration, you'll need to prepare your local development environment with the necessary tools, services, and configurations.

### Prerequisites

Make sure you have the following installed and set up on your system:

- **Node.js** (v16 or above) - Check with: `node -v`
- **npm** (comes with Node.js) - Check with: `npm -v`
- **Docker** (optional, if you prefer running n8n in a container) - Check with: `docker -v`
- **SSH client** (for Pinggy tunneling) - Available by default on most systems
- **Telegram Bot Token**
  You’ll need to create a bot using {{< link href="https://t.me/botfather" >}}@BotFather{{< /link >}} and get the token to connect it with n8n.


### Creating your Telegram bot

Every Telegram integration starts with creating a bot through BotFather:

- Open Telegram and search for "BotFather" (@BotFather)

{{< image "how_to_set_up_and_test_telegram_bot_webhook/start_chat_with_god_bot.webp" "Bot Father Chat" >}}
- Start a conversation and send the command `/newbot`

{{< image "how_to_set_up_and_test_telegram_bot_webhook/newbot_chat.webp" "newbot" >}}
- Follow the instructions to name your bot and create a username

{{< image "how_to_set_up_and_test_telegram_bot_webhook/bot_name.webp" "name" >}}
- BotFather will provide an API token that looks like: `123456789:ABCDefGhIJKlmNoPQRsTUVwxyZ`
{{< image "how_to_set_up_and_test_telegram_bot_webhook/bot_token.png" "bot token" >}}


This token is crucial as it authenticates your bot with Telegram's servers and allows n8n to send and receive messages.

## Exposing n8n with Pinggy for webhook integration

The challenge with local n8n development is that Telegram webhooks require HTTPS endpoints, but your local instance runs on HTTP. Traditional solutions involve complex SSL certificate setup or paid tunneling services.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} solves this elegantly by providing instant HTTPS tunnels with a single command:

```bash
ssh -p 443 -R0:localhost:5678 qr@free.pinggy.io
```


   {{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5678 qr@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5678 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5678 qr@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5678 qr@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5678 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5678 qr@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5678 qr@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5678 qr@free.pinggy.io\"}}}"
{{</ ssh_command >}}


This command creates a secure tunnel from Pinggy's servers to your local n8n instance, providing you with an HTTPS URL like `https://randomstring.a.pinggy.link` that Telegram can use for webhooks.

{{< image "n8n_telegram_integration_with_pinggy/pinggy_tunnel.webp" "pinggy tunnel" >}}

The benefits of using Pinggy include:

- **Instant setup** - No configuration files or complex setup procedures
- **Automatic HTTPS** - SSL certificates are handled automatically
- **Reliable connection** - Built-in reconnection and keepalive features
- **No downloads required** - Works with standard SSH client

## Installing n8n Locally

Now that you have your Pinggy tunnel ready, you need to install and configure n8n to work with it. You can run n8n using npm or Docker, depending on your preference.

### Option 1: Using npm

1. Install n8n globally:

```bash
npm install n8n -g
```

2. Start n8n with your Pinggy webhook URL:

```bash
WEBHOOK_URL="https://your-pinggy-url.a.pinggy.link" n8n start
```

> **Important**: Replace `your-pinggy-url.a.pinggy.link` with the actual URL provided by Pinggy. Setting the `WEBHOOK_URL` environment variable is essential for Telegram webhooks to work properly.

{{< image "n8n_telegram_integration_with_pinggy/n8n_running_on_pinggy_url.webp" "n8n running on pinggy url" >}}

### Option 2: Using Docker

If you prefer using Docker, run the following command:

```bash
docker run -it --rm --name n8n \
  -p 5678:5678 \
  -e WEBHOOK_URL="https://your-pinggy-url.a.pinggy.link" \
  n8nio/n8n
```

Once n8n is running, open your browser and navigate to `http://localhost:5678` to access the n8n interface. You'll be prompted to create an account and can then start building your automation workflows.

## Configuring the Telegram integration in n8n

With your tunnel established, you can now configure the Telegram integration within n8n:

### Adding the Telegram Trigger node

1. Create a new workflow in n8n
2. Add a "Telegram Trigger" node from the node palette

{{< image "n8n_telegram_integration_with_pinggy/on_message_selection_on_telegram.webp" "telegram trigger node" >}}

3. Click on "Create New Credential" next to the credentials dropdown

4. Enter your bot token from BotFather

{{< image "n8n_telegram_integration_with_pinggy/save_the_telegram_token.webp" "create new credential" >}}

{{< image "n8n_telegram_integration_with_pinggy/showing_pinggy_webhook_url.webp" "showing pinggy webhook url" >}}

5. Save the First Node

{{< image "n8n_telegram_integration_with_pinggy/first_node_of_telegram.webp" "first node of telegram" >}}

### Connect Telegram Bot to Webhook

After saving your first node, you need to connect your Telegram bot to the webhook URL. Copy the webhook URL from first node:

{{< image "n8n_telegram_integration_with_pinggy/webhook_url_copied.webp" "webhook url" >}}

```
https://api.telegram.org/bot<your_bot_token>/setWebhook?url=<your_webhook_url>
```

**Example:**
```
https://api.telegram.org/bot123456789:ABCdefGhIjKlmNoPQRstUvWXyZ1234567890/setWebhook?url=https://rnwuh-14-143-171-146.a.free.pinggy.link/webhook-test/d2002f4c-6fc8-46de-9fd2-b430b2a2a77f/webhook
```

You'll get a response like:
```json
{"ok":true,"result":true,"description":"Webhook was set"}
```

{{< image "n8n_telegram_integration_with_pinggy/postman_request_on_with_url.webp" "postman request" >}}

### Add Response Node

Now let's create a simple response workflow. Add a Telegram node after the trigger:

1. **Resource**: Message
2. **Operation**: Send Message
3. **Chat ID**: `={{$json["message"]["chat"]["id"]}}`
4. **Text**: "Hello, your message was received!"

{{< image "n8n_telegram_integration_with_pinggy/adding_2_node.webp" "telegram response node setup" >}}

### Testing the workflow

Now it's time to test your complete workflow:

1. **Execute the workflow** - Click the "Execute Workflow" button in n8n to activate it
2. **Test with your bot** - Open Telegram and send `/start` to your bot
3. **Verify the response** - You should receive the message "Hello, your message was received!"
4. **Check n8n execution** - Return to n8n to see the workflow execution data and confirm everything worked

{{< image "n8n_telegram_integration_with_pinggy/execute_automation.webp" "executing workflow" >}}
{{< image "n8n_telegram_integration_with_pinggy/test_the_automation.webp" "testing the automation" >}}

If the test is successful, your bot is now ready to receive and respond to messages through the Pinggy tunnel!

## Conclusion

Integrating Telegram with n8n using Pinggy creates a powerful foundation for building automated communication workflows. The combination of Telegram's rich messaging capabilities, n8n's visual workflow builder, and Pinggy's seamless tunneling solution enables developers to quickly prototype and test sophisticated automation systems.

Whether you're building customer support bots, notification systems, or complex multi-service integrations, this stack provides the flexibility and reliability needed for modern automation challenges. Start with simple workflows and gradually expand your automation capabilities as your needs grow.

The key to success lies in understanding your users' needs, designing intuitive conversation flows, and leveraging n8n's extensive integration ecosystem to connect Telegram with the tools and services that power your business.
