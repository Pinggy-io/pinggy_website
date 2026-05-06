---
 title: "Test Stripe webhooks against localhost"
 description: "Receive real Stripe webhook events on a locally running development server by routing them through a Pinggy HTTPS tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Test Stripe webhooks against your local server with Pinggy

When a payment moves through Stripe - a charge succeeds, a subscription renews, a refund completes - Stripe posts a JSON event to whatever webhook URL you registered. During development the handler for those events lives on `localhost`, which Stripe cannot reach. The traditional fix is the Stripe CLI's `stripe listen` command, but that only works from machines where the CLI is installed and signed in.

A Pinggy tunnel gives you a real public HTTPS URL that you can paste into the Stripe Dashboard exactly as you would in production. Every event Stripe sends is delivered to your local handler in real time, with valid TLS, and you can iterate on the handler without redeploying.

#### Step 1: Run your webhook handler

Start whatever framework hosts your handler. A Flask example listening on `5000`:

```python
from flask import Flask, request
import stripe

app = Flask(__name__)
endpoint_secret = "whsec_..."  # paste from the Stripe dashboard

@app.post("/webhook")
def webhook():
    payload = request.get_data(as_text=True)
    sig = request.headers.get("Stripe-Signature", "")
    event = stripe.Webhook.construct_event(payload, sig, endpoint_secret)
    print("Received", event["type"])
    return "", 200

app.run(port=5000)
```

#### Step 2: Open the tunnel

```bash
ssh -p 443 -R0:localhost:5000 free.pinggy.io
```

Pinggy returns an HTTPS URL such as `https://abcd1234.a.pinggy.link`. Stripe requires HTTPS for webhook endpoints, which Pinggy provides automatically.

#### Step 3: Register the endpoint in Stripe

In the [Stripe Dashboard](https://dashboard.stripe.com/test/webhooks), click **Add endpoint**, paste `<pinggy-url>/webhook`, and pick the event types your handler cares about (for example `checkout.session.completed` or `invoice.paid`). Stripe shows a signing secret on the endpoint detail page - copy it into the `endpoint_secret` constant in your code so signature verification passes.

#### Step 4: Trigger an event

Either run a real test charge through Stripe Checkout in test mode, or fire a sample event from the Stripe CLI:

```bash
stripe trigger checkout.session.completed
```

Your local server logs the incoming POST. The Stripe Dashboard's webhook log shows whether the delivery succeeded; if not, the response status and body are visible there for debugging.

#### Step 5: Avoid re-registering on every reconnect

A free tunnel changes its hostname every time you reconnect, which means the registered Stripe endpoint goes stale. To keep one webhook URL stable across sessions, sign in to [the dashboard](https://dashboard.pinggy.io) and use a [persistent subdomain](/docs/persistent_subdomain/) or [custom domain](/docs/custom_domain/) - paste that URL into Stripe once and forget about it.

For a step-by-step walkthrough including signature verification, see the [webhook testing guide](/blog/receive_and_test_webhooks_in_localhost/).
