---
 title: "Connect a local Rasa chatbot to Telegram"
 description: "Expose a locally trained Rasa chatbot to Telegram by tunnelling its REST endpoint with Pinggy and registering the public URL as the bot webhook."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Connect a local Rasa chatbot to Telegram with Pinggy

[Rasa](https://rasa.com/) is an open-source framework for building intent-driven chatbots. After training a model, Rasa runs an HTTP server that other chat platforms can deliver messages to. Telegram, like most chat platforms, sends every incoming message to a webhook URL - and that URL has to be publicly reachable over HTTPS.

Pinggy puts the public HTTPS endpoint in front of your local Rasa server, so you can develop and iterate on the bot without deploying it.

#### Step 1: Train and start Rasa

From the directory containing your `domain.yml` and training data:

```bash
rasa train
rasa run --enable-api -p 5005
```

The Rasa server now listens on `http://localhost:5005`. Confirm it answers:

```bash
curl http://localhost:5005/
```

#### Step 2: Configure the Telegram channel in `credentials.yml`

Rasa ships with a built-in Telegram connector. Add the following block to `credentials.yml`, leaving `webhook_url` as a placeholder for now:

```yaml
telegram:
  access_token: "<bot-token-from-BotFather>"
  verify: "<bot-username>"
  webhook_url: "https://placeholder.invalid/webhooks/telegram/webhook"
```

Get the bot token by messaging [@BotFather](https://t.me/BotFather) on Telegram and creating a new bot.

#### Step 3: Tunnel the Rasa port

Open the tunnel:

```bash
ssh -p 443 -R0:localhost:5005 free.pinggy.io
```

Note the HTTPS URL Pinggy returns - for example `https://abcd1234.a.pinggy.link`. Update `credentials.yml` so `webhook_url` points to `<pinggy-url>/webhooks/telegram/webhook`, then restart Rasa so the new value takes effect.

#### Step 4: Register the webhook with Telegram

Telegram needs to know where to deliver messages. Either let Rasa register it automatically on startup (recent versions do this when the channel is configured), or call the Bot API directly:

```bash
curl -X POST \
  "https://api.telegram.org/bot<BOT_TOKEN>/setWebhook" \
  --data-urlencode "url=https://abcd1234.a.pinggy.link/webhooks/telegram/webhook"
```

A successful response is `{"ok":true,"result":true,"description":"Webhook was set"}`.

#### Step 5: Send a test message

Open Telegram, find your bot by username, and send any message. The Rasa server logs should show an incoming POST to `/webhooks/telegram/webhook`, and Rasa replies through the same webhook.

For long-running development sessions, use a [persistent subdomain](/docs/persistent_subdomain/) so the webhook URL does not change between Pinggy reconnects - otherwise the Telegram registration has to be redone every time.
