---
 title: "How to Set Up and Test PayPal Webhook Locally" 
 description: "Learn how to set up and test PayPal webhooks locally using Pinggy. Step-by-step guide for creating a webhook listener, configuring PayPal sandbox, and testing webhook events."
 date: 2025-12-25T10:00:00+05:30
 tags: ["paypal", "webhook", "API", "payment integration", "Pinggy", "localhost"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBTZXQgVXAgYW5kIFRlc3QgUGF5UGFsIFdlYmhvb2sgTG9jYWxseSIsCiAgImRlc2NyaXB0aW9uIjogIkxlYXJuIGhvdyB0byBzZXQgdXAgYW5kIHRlc3QgUGF5UGFsIHdlYmhvb2tzIGxvY2FsbHkgdXNpbmcgUGluZ2d5LiBUaGlzIHN0ZXAtYnktc3RlcCBndWlkZSBjb3ZlcnMgY3JlYXRpbmcgYSB3ZWJob29rIGxpc3RlbmVyLCBjb25maWd1cmluZyBQYXlQYWwgc2FuZGJveCwgYW5kIHRlc3Rpbmcgd2ViaG9vayBldmVudHMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2hvd190b19zZXRfdXBfYW5kX3Rlc3RfcGF5cGFsX3dlYmhvb2tfbG9jYWxseS9wYXlwYWxfd2ViaG9va19iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSBQYXlQYWwgRGV2ZWxvcGVyIGFjY291bnQgYW5kIGFjY2VzcyB0aGUgc2FuZGJveCBlbnZpcm9ubWVudC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ3JlYXRlIGEgbG9jYWwgd2ViaG9vayBsaXN0ZW5lciBzZXJ2ZXIgdXNpbmcgTm9kZS5qcyBhbmQgRXhwcmVzcyB0byByZWNlaXZlIGFuZCBwcm9jZXNzIFBheVBhbCB3ZWJob29rIGV2ZW50cy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRXhwb3NlIHlvdXIgbG9jYWwgc2VydmVyIHRvIHRoZSBpbnRlcm5ldCB1c2luZyBQaW5nZ3kgd2l0aCB0aGUgY29tbWFuZDogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjMwMDAgcXJAYS5waW5nZ3kuaW8iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ29uZmlndXJlIHdlYmhvb2sgVVJMIGluIHlvdXIgUGF5UGFsIHNhbmRib3ggYXBwbGljYXRpb24gc2V0dGluZ3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlRlc3QgeW91ciB3ZWJob29rIHVzaW5nIFBheVBhbCdzIFdlYmhvb2sgU2ltdWxhdG9yIG9yIGJ5IG1ha2luZyB0ZXN0IHRyYW5zYWN0aW9ucy4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pg=="
 draft: false 
 og_image: "images/how_to_set_up_and_test_paypal_webhook_locally/paypal_webhook_banner.webp"
 outputs:
  - HTML
  - AMP
---

{{< image "how_to_set_up_and_test_paypal_webhook_locally/paypal_webhook_banner.webp" "Set Up and Test PayPal Webhook Locally" >}}

Building a payment integration with {{< link href="https://www.paypal.com/" >}}PayPal{{< /link >}} requires handling webhooks to receive real-time notifications about transactions, disputes, subscriptions, and other payment events. However, testing webhooks during local development presents a significant challenge: PayPal needs to send HTTP requests to your server, which means your localhost isn't directly reachable. In this guide, you'll learn how to set up and test PayPal webhooks locally using [Pinggy](https://pinggy.io), a simple tunneling tool that exposes your local server to the internet with just one command.

{{% tldr %}}

**PayPal Webhooks Explained**
- Real-time HTTP notifications for payment events like `PAYMENT.CAPTURE.COMPLETED`, `CHECKOUT.ORDER.APPROVED`, and more
- Essential for tracking payment status, handling disputes, and managing subscriptions
- Requires a publicly accessible URL to receive events

**Quick Setup Guide**
- Create PayPal Developer account at <a href="https://developer.paypal.com/" target="_blank">developer.paypal.com</a>
- Create webhook listener server (Node.js/Express) to receive events
- Expose locally with Pinggy:
```bash
ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io
```
- Configure webhook URL in PayPal sandbox app settings
- Test using <a href="https://developer.paypal.com/api/rest/webhooks/simulator/" target="_blank">PayPal Webhook Simulator</a>

**Why Use Webhooks?**
- Receive instant payment confirmations without polling
- Handle asynchronous payment flows (e.g., pending payments)
- Get notified about disputes, refunds, and subscription changes
- Required for production-grade PayPal integrations

{{% /tldr %}}

## Understanding PayPal Webhooks

PayPal webhooks are HTTP callbacks that notify your application when specific events occur in your PayPal account. Instead of continuously polling the PayPal API to check for updates, your server receives real-time notifications whenever a relevant event happens whether that's a completed payment, a refund, a dispute, or a subscription renewal.

When an event occurs, PayPal sends an HTTP POST request to your configured webhook URL containing a JSON payload with details about the event. This payload includes the event type, timestamp, and resource data such as transaction details, customer information, and payment amounts. Your server must respond with an HTTP 2xx status code to acknowledge receipt; otherwise, PayPal will retry delivery up to 25 times over 3 days.

Common webhook events you'll want to handle include:

- **PAYMENT.CAPTURE.COMPLETED** - Payment successfully captured
- **CHECKOUT.ORDER.APPROVED** - Customer approved the payment
- **PAYMENT.CAPTURE.REFUNDED** - Payment was refunded
- **BILLING.SUBSCRIPTION.ACTIVATED** - Subscription became active
- **CUSTOMER.DISPUTE.CREATED** - Customer opened a dispute

## Prerequisites

Before getting started, ensure you have the following:

- A {{< link href="https://developer.paypal.com/" >}}PayPal Developer account{{< /link >}} (free to create)
- Node.js 16+ installed on your machine
- Basic familiarity with Express.js or similar web frameworks
- Access to a terminal/command line

## Step 1: Set Up Your PayPal Developer Account

First, you need to access the PayPal Developer Dashboard and create a sandbox application:

1. Go to {{< link href="https://developer.paypal.com/" >}}developer.paypal.com{{< /link >}} and log in with your PayPal account
2. Navigate to "Apps & Credentials" in the dashboard
3. Make sure you're in **Sandbox** mode (toggle at the top)
4. Click "Create App" to create a new sandbox application
5. Give your app a name and click "Create App"

After creating your app, you'll see your **Client ID** and **Secret**. Keep these credentials secure as you'll need them for API authentication and webhook verification.

PayPal's sandbox environment provides test accounts that allow you to simulate transactions without processing real payments. You can find these under "Sandbox" → "Accounts" in the developer dashboard.

## Step 2: Create a Local Webhook Listener Server

Next, create a server that can receive and process webhook events from PayPal. Here's a simple example using Node.js and Express that includes the raw body preservation needed for signature verification:

```javascript
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// IMPORTANT: PayPal needs raw body for signature verification
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.post("/webhook/paypal", async (req, res) => {
  const headers = req.headers;
  const event = req.body;

  console.log("📩 PayPal Webhook Event Received");
  console.log("Event Type:", event.event_type);
  console.log("Event ID:", event.id);
  console.log("Full Payload:", JSON.stringify(event, null, 2));

  // Handle different event types
  switch (event.event_type) {
    case "PAYMENT.CAPTURE.COMPLETED":
      const captureAmount = event.resource?.amount;
      console.log(`💰 Payment completed: ${captureAmount?.value} ${captureAmount?.currency_code}`);
      break;
    case "CHECKOUT.ORDER.APPROVED":
      console.log(`✅ Order approved: ${event.resource?.id}`);
      break;
    case "PAYMENT.CAPTURE.REFUNDED":
      const refundAmount = event.resource?.amount;
      console.log(`↩️ Refund processed: ${refundAmount?.value} ${refundAmount?.currency_code}`);
      break;
    case "CUSTOMER.DISPUTE.CREATED":
      console.log(`⚠️ Dispute created: ${event.resource?.dispute_id}`);
      break;
    default:
      console.log(`Unhandled event type: ${event.event_type}`);
  }

  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

Save this code as `paypal_webhook.js` and initialize your project:

```bash
npm init -y
npm install express body-parser
```

Add `"type": "module"` to your `package.json` to enable ES modules, then run the server:

```bash
node paypal_webhook.js
```

Your webhook listener is now running at `http://localhost:3000/webhook/paypal`.


{{< image "how_to_set_up_and_test_paypal_webhook_locally/server_running_on_port_3000.webp" "Your webhook listener on 3000" >}}

## Step 3: Expose Your Localhost with Pinggy

PayPal requires a publicly accessible HTTPS URL to send webhook events. During local development, your localhost isn't reachable from the internet. This is where Pinggy comes in it creates a secure tunnel that exposes your local server to the web with a single command.

Open a new terminal window and run:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 qr@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 qr@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 qr@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 qr@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 qr@a.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "how_to_set_up_and_test_paypal_webhook_locally/pinggy_command.webp" "Pinggy Command" >}}

Pinggy will provide you with a public URL like:

```
https://abcdefghij.a.pinggy.link
```

{{< image "how_to_set_up_and_test_paypal_webhook_locally/pinggy_public_url.webp" "Pinggy Public Url" >}}


This URL now points to your local webhook server. Your complete webhook endpoint URL will be:

```
https://abcdefghij.a.pinggy.link/webhook/paypal
```

Keep the Pinggy tunnel running while you configure and test your PayPal webhooks.

## Step 4: Configure Webhook in PayPal

Now that you have a public URL, configure it in your PayPal sandbox application:

1. Go to your {{< link href="https://developer.paypal.com/dashboard/applications/sandbox" >}}PayPal Developer Dashboard{{< /link >}}
2. Click on your sandbox application
3. Scroll down to the "Webhooks" section
4. Click "Add Webhook"
5. Enter your Pinggy URL with the webhook endpoint path: `https://abcdefghij.a.pinggy.link/webhook/paypal`
6. Select the events you want to subscribe to. For testing, select:
   - `PAYMENT.CAPTURE.COMPLETED`
   - `CHECKOUT.ORDER.APPROVED`
   - `PAYMENT.CAPTURE.REFUNDED`
   - `CUSTOMER.DISPUTE.CREATED`
7. Click "Save"


PayPal will display a **Webhook ID** after successful configuration. Make note of this ID you'll need it for signature verification in production.

{{< image "how_to_set_up_and_test_paypal_webhook_locally/paypal_webhooks.webp" "Configure Webhook in PayPal" >}}

## Step 5: Test with PayPal's Webhook Simulator

PayPal provides a Webhook Simulator that lets you send test events to your webhook endpoint without making actual transactions. This is perfect for verifying your listener is working correctly.

1. Go to the {{< link href="https://developer.paypal.com/api/rest/webhooks/simulator/" >}}PayPal Webhook Simulator{{< /link >}}
2. Enter your webhook URL: `https://abcdefghij.a.pinggy.link/webhook/paypal`
3. Select an event type from the dropdown (e.g., `PAYMENT.CAPTURE.COMPLETED`)
4. Click "Send Test"

{{< image "how_to_set_up_and_test_paypal_webhook_locally/paypal_webhooks_simulator.webp" "Paypal Webhook Simulator" >}}

Check your terminal where the Node.js server is running. You should see log output showing the received webhook event:

```
📩 PayPal Webhook Event Received
Event Type: PAYMENT.CAPTURE.COMPLETED
Event ID: WH-7YX49823S2290830K-0FE11B7M
💰 Payment completed: 100.00 USD
```

If you see this output, your webhook listener is working correctly.

**Note:** Mock events from the simulator have a special Webhook ID of `WEBHOOK_ID` and cannot be verified using PayPal's signature verification endpoint. They're purely for testing the functionality of your listener.

{{< image "how_to_set_up_and_test_paypal_webhook_locally/pinggy_public_url_logs.webp" "Pinggy Public Url Logs" >}}

{{< image "how_to_set_up_and_test_paypal_webhook_locally/webhooks_response.webp" "Paypal Response" >}}

## Conclusion

Setting up and testing PayPal webhooks locally is straightforward with the right tools. By using [Pinggy](https://pinggy.io) to expose your local development server, you can test your webhook integration without deploying to a production server. This significantly speeds up development and debugging of payment integrations.

The combination of PayPal's Webhook Simulator for quick functional testing and real sandbox transactions for end-to-end testing ensures your integration is robust before going live. Remember to always implement proper signature verification in production to protect against malicious requests.

For more advanced webhook configurations, including handling multiple webhook endpoints and managing webhook subscriptions programmatically, refer to the {{< link href="https://developer.paypal.com/api/rest/webhooks/" >}}PayPal Webhooks documentation{{< /link >}}.

