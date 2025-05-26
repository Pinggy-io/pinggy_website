---
 title: "How to Set Up and Test Telegram Bot Webhook" 
 description: "Learn how to set up and test Telegram bot webhooks to receive real-time updates from users. This step-by-step guide covers creating a webhook server, exposing it using Pinggy, and testing your integration."
 date: 2025-05-22T10:00:00+05:30
 tags: ["telegram bot", "webhook", "API", "bot development", "Pinggy", "localhost"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBTZXQgVXAgYW5kIFRlc3QgVGVsZWdyYW0gQm90IFdlYmhvb2siLAogICJkZXNjcmlwdGlvbiI6ICJMZWFybiBob3cgdG8gc2V0IHVwIGFuZCB0ZXN0IFRlbGVncmFtIGJvdCB3ZWJob29rcyB0byByZWNlaXZlIHJlYWwtdGltZSB1cGRhdGVzIGZyb20gdXNlcnMuIFRoaXMgc3RlcC1ieS1zdGVwIGd1aWRlIGNvdmVycyBjcmVhdGluZyBhIHdlYmhvb2sgc2VydmVyLCBleHBvc2luZyBpdCB1c2luZyBQaW5nZ3ksIGFuZCB0ZXN0aW5nIHlvdXIgaW50ZWdyYXRpb24uIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2hvd190b19zZXRfdXBfYW5kX3Rlc3RfdGVsZWdyYW1fYm90X3dlYmhvb2svdGVsZWdyYW1fYm90X3RodW1ibmFpbC53ZWJwIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNyZWF0ZSBhIFRlbGVncmFtIGJvdCB1c2luZyBCb3RGYXRoZXIgYW5kIG9idGFpbiB5b3VyIEFQSSB0b2tlbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIGEgbG9jYWwgd2ViaG9vayBzZXJ2ZXIgdXNpbmcgUHl0aG9uIGFuZCBGbGFzayB0byByZWNlaXZlIGFuZCBwcm9jZXNzIHVwZGF0ZXMgZnJvbSBUZWxlZ3JhbS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRXhwb3NlIHlvdXIgbG9jYWwgc2VydmVyIHRvIHRoZSBpbnRlcm5ldCB1c2luZyBQaW5nZ3kgd2l0aCB0aGUgY29tbWFuZDogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwMDAgcXJAYS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiUmVnaXN0ZXIgeW91ciB3ZWJob29rIHdpdGggVGVsZWdyYW0gdXNpbmcgdGhlIHNldFdlYmhvb2sgQVBJIG1ldGhvZCBhbmQgeW91ciBQaW5nZ3kgVVJMLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJUZXN0IHlvdXIgd2ViaG9vayBpbnRlZ3JhdGlvbiBieSBzZW5kaW5nIGEgbWVzc2FnZSB0byB5b3VyIGJvdCBhbmQgdmVyaWZ5aW5nIHRoYXQgeW91ciBzZXJ2ZXIgcmVjZWl2ZXMgdGhlIHVwZGF0ZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
 draft: false 
 og_image: "images/how_to_set_up_and_test_telegram_bot_webhook/telegram_bot_thumbnail.webp"
 outputs:
  - HTML
  - AMP
---


Want your {{< link href="https://telegram.org/blog/bot-revolution" >}}Telegram bot{{< /link >}} to respond instantly to users? That’s where webhooks come in. While long polling is fine for testing, webhooks are faster and better for real-time updates—especially in production. In this guide, you’ll learn how to set up and test Telegram bot webhooks using [Pinggy](https://pinggy.io), a super easy tool that gives your local server a public URL with just one command. No downloads, no headaches.

{{< image "how_to_set_up_and_test_telegram_bot_webhook/telegram_bot_thumbnail.webp" "Set Up and Test Telegram Bot Webhook" >}}

{{% tldr %}}

**Telegram Bot Webhooks Explained**
- Real-time updates from Telegram to your server without polling
- Telegram pushes notifications directly when users interact with your bot
- More efficient than long polling for production bots

**Quick Setup Guide**
- Get API token from BotFather (`/newbot` command)
- Create webhook server (Python/Flask) to receive JSON updates
- Expose locally with Pinggy: 
```bash
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
```
- Register webhook: 
```bash
curl -X POST "https://api.telegram.org/bot<TOKEN>/setWebhook" -d "url=https://your-pinggy-url/webhook"
```
- Test by sending messages to your bot

**Why Use Webhooks?**
- Instant updates without constant API requests
- Lower server load and bandwidth usage
- Better user experience with immediate responses
- Easier scaling for high-traffic bots

{{% /tldr %}}

## Understanding Telegram Bot Webhooks

Telegram bots can receive messages and updates through two different mechanisms:

1. **Long Polling** – Your bot repeatedly asks Telegram's servers for new updates.
2. **Webhooks** – Telegram sends updates directly to your server via HTTP POST requests.

While long polling is simpler to set up initially, webhooks offer significant advantages for production bots:

- **Efficiency**: No need to constantly query Telegram's servers
- **Real-time updates**: Immediate notification when users interact with your bot
- **Reduced server load**: Your server only works when there's an actual update

For webhooks to function properly, Telegram needs to be able to reach your server through a public URL. This is where many developers face challenges during development and testing.

## Step 1: Create Your Telegram Bot

Before setting up a webhook, you need a Telegram bot and its API token:

- Open Telegram and search for "BotFather" (@BotFather)

{{< image "how_to_set_up_and_test_telegram_bot_webhook/start_chat_with_god_bot.webp" "Bot Father Chat" >}}
- Start a conversation and send the command `/newbot`
{{< image "how_to_set_up_and_test_telegram_bot_webhook/newbot_chat.webp" "newbot" >}}
- Follow the instructions to name your bot and create a username
{{< image "how_to_set_up_and_test_telegram_bot_webhook/bot_name.webp" "name" >}}
- BotFather will provide an API token that looks like: `123456789:ABCDefGhIJKlmNoPQRsTUVwxyZ`
{{< image "how_to_set_up_and_test_telegram_bot_webhook/bot_token.png" "bot token" >}}


Keep this token secure as it grants full access to control your bot.

## Step 2: Create a Local Webhook Server

Next, you'll need a server that can receive and process webhook updates from Telegram. Here's a simple example using {{< link href="https://www.python.org/" >}}Python{{< /link >}} and {{< link href="https://flask.palletsprojects.com/en/stable/" >}}Flask{{< /link >}}

```python
from flask import Flask, request, jsonify
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

@app.route('/webhook', methods=['POST'])
def webhook():
    update = request.get_json()
    logging.info(f"Update received: {update}")
    
    # Extract message information
    if 'message' in update:
        chat_id = update['message']['chat']['id']
        text = update.get('message', {}).get('text', '')
        logging.info(f"Message from {chat_id}: {text}")
        
        # Process the message here
        # You would typically send a response back to the user
        
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
```

Save this code as `telegram_webhook.py` and install the required packages:

```
pip install flask
```

Run the server with:

```
python telegram_webhook.py
```

{{< image "how_to_set_up_and_test_telegram_bot_webhook/python_code_is_running.webp" "python code" >}}

This creates a simple webhook endpoint at `http://localhost:8000/webhook` that logs incoming messages.

## Step 3: Expose Your Localhost with Pinggy

For Telegram to send webhooks to your server, it needs a public URL. During development, you can use Pinggy to expose your local server to the internet without complex configuration:

1. Open your terminal and run:

   ```
   ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
   ```

   {{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 qr@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 qr@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 qr@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 qr@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "how_to_set_up_and_test_telegram_bot_webhook/pinggy_tunnel_command.webp" "pinggy command" >}}


2. Pinggy will provide you with a public URL like:
   ```
   https://abcdefghij.a.pinggy.link
   ```

This URL now points to your local webhook server and can be accessed from anywhere, including Telegram's servers.
{{< image "how_to_set_up_and_test_telegram_bot_webhook/pinggy_public_url.webp" "pinggy publiv url" >}}

## Step 4: Register Your Webhook with Telegram

Now you need to tell Telegram where to send updates for your bot. You can do this using the Telegram Bot API's `setWebhook` method:

Using cURL:

```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" \
     -d "url=https://abcdefghij.a.pinggy.link/webhook"
```

Replace `<YOUR_BOT_TOKEN>` with the token you received from BotFather, and use your actual Pinggy URL.

If successful, Telegram will respond with:

```json
{
  "ok": true,
  "result": true,
  "description": "Webhook was set"
}
```
{{< image "how_to_set_up_and_test_telegram_bot_webhook/postman_call.png" "postman api call" >}}


## Step 5: Test Your Webhook Integration

Now it's time to test if your webhook is working properly:

1. Open Telegram and find your bot (by the username you created)
2. Send a message to your bot
3. Check your local server's console output

You should see log entries showing the received update, including the message text and chat ID. If you see these logs, congratulations! Your webhook is working correctly.

Example log output:
```
INFO:root:Update received: {'update_id': 123456789, 'message': {'message_id': 1, 'from': {'id': 987654321, 'is_bot': False, 'first_name': 'User', 'language_code': 'en'}, 'chat': {'id': 987654321, 'first_name': 'User', 'type': 'private'}, 'date': 1625097600, 'text': 'Hello, bot!'}}
INFO:root:Message from 987654321: Hello, bot!
```

{{< image "how_to_set_up_and_test_telegram_bot_webhook/chat_with_pinggy_bot.webp" "chat with new pinggy bot" >}}
{{< image "how_to_set_up_and_test_telegram_bot_webhook/webhook_logs.webp" "webhook logs" >}}


## Enhancing Your Webhook Server

Once you have the basic webhook working, you can enhance your bot server to:

1. **Send responses**: Use the `sendMessage` API to reply to user messages
2. **Handle commands**: Process special commands that start with a slash (/)
3. **Implement conversation flows**: Create multi-step interactions
4. **Add rich media**: Send photos, videos, documents, or interactive buttons

Here's an example of how to send a response message:

```python
import requests

def send_message(chat_id, text, token):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text
    }
    response = requests.post(url, json=payload)
    return response.json()
```

You can call this function from your webhook handler to reply to incoming messages.

## Conclusion

Setting up a Telegram bot webhook allows your bot to receive real-time updates, creating a more responsive and efficient user experience. By using [Pinggy](https:/pinggy.io) to expose your local development environment, you can easily test and debug your webhook implementation before deploying to production.

Webhooks are particularly valuable for bots that need to respond quickly to user interactions or process high volumes of messages. With the approach outlined in this guide, you can develop and test your Telegram bot webhook locally, then deploy the same code to your production environment.

For more advanced use cases, consider exploring {{< link href="https://core.telegram.org/bots/api" >}}Telegram's Bot API documentation{{< /link >}} to leverage features like inline keyboards, location sharing, and file transfers to create rich, interactive bot experiences.
