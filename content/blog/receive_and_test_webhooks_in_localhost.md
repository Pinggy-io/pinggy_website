---
 title: "Receive and test webhooks on localhost"
 description: "How to expose a local server so Stripe, GitHub, Slack and others can deliver webhooks to your dev box. Covers Pinggy tunnels, provider CLIs, inspection tools, and HMAC signing."
 date: 2023-02-25T14:15:25+05:30
 lastmod: 2026-05-23T14:15:25+05:30
 draft: false
 outputs:
  - HTML
  - AMP
---

Webhooks need a public URL. Your laptop doesn't have one. That's the whole problem.

If you're building against Stripe, GitHub, Slack, Shopify, Discord or any other provider that pushes events instead of waiting for you to pull them, you've hit this wall. The provider needs to POST to `https://something.example.com/webhook`, and your handler is running on `localhost:3000` behind NAT.

This post walks through what works in 2026: a tunnel (Pinggy or one of its peers), or a provider CLI that opens an outbound connection for you, plus a quick tour of inspection tools and the signature-verification code you actually need to write.

## The basic recipe: one tunnel command

The simplest path is still a reverse tunnel. Run your app on `localhost:3000`, point a tunnel at it, paste the resulting `https://...` URL into the provider's webhook config, done.

With Pinggy, that's one SSH command - nothing to install, since `ssh` ships with macOS, Linux, and modern Windows:

```
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

You'll get back something like:

```
https://rnxxx-30-47-152-61.a.free.pinggy.link
```

Use that as the webhook endpoint on Stripe, GitHub, etc. Pinggy free sessions last 60 minutes and use random subdomains; the Pro plan ($3/month) keeps a stable subdomain so you don't have to re-paste the URL into the provider dashboard every hour.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start receiving webhooks:" portstring="Localhost Port" localport="3000" webdebugenabled=true keepalive=false tryYourselfText="Try it yourself now" >}}
{{< /pinggytunnel >}}

## Provider CLIs: skip the tunnel entirely

If you only need webhooks from one provider, their CLI is usually less hassle than a tunnel. The CLI opens an outbound connection to the provider and pushes events straight to your localhost - no public URL involved, no DNS, no signing-secret juggling.

**Stripe CLI.** After `brew install stripe/stripe-cli/stripe` (or the equivalent on Linux/Windows) and `stripe login`:

```
stripe listen --forward-to localhost:4242/webhook
```

It prints a `whsec_...` signing secret on startup. Use that one for local development; your live mode secret stays separate. Forward only the events you care about with `--events`:

```
stripe listen --events checkout.session.completed,payment_intent.succeeded \
  --forward-to localhost:4242/webhook
```

`stripe trigger checkout.session.completed` fires a synthetic event so you don't have to actually run a checkout.

**GitHub uses smee.io.** GitHub's docs recommend [smee.io](https://smee.io), a free proxy run by the Probot team. Create a channel on the website, run `smee --url https://smee.io/abc123 --target http://localhost:3000/webhook` (from `npm i -g smee-client`), and point your GitHub App or repo webhook at the smee URL. It's HTTP-over-SSE, so no inbound port on your side. Caveat: channels are unauthenticated - anyone with the URL can see traffic, so don't reuse the channel for sensitive payloads.

**Shopify, Twilio, Slack** all ship their own CLIs with `webhook` or `tunnel` subcommands now. Worth checking the provider's docs before installing yet another tunnel.

## Inspection without writing a handler

Sometimes you just want to see what a provider sends before you write code.

- **webhook.site** gives you a unique URL instantly, shows requests in real time with headers, body, and query string. Free tier caps at 100 requests per URL.
- **RequestBin** (Pipedream's version) does the same with a workflow editor attached.
- **Hookdeck Console** is similar but adds replay and persistence. Free for development use.

For an inspector you control, hit your Pinggy dashboard and watch the local request log.

## Webhook gateways: when retries get serious

Once you're past the "make it work locally" stage, the next thing that bites is reliability. Providers retry on failure, but the retry windows are short - Stripe gives you about 72 hours with exponential backoff; GitHub gives up after 8 hours. Miss those and the event is gone.

Three services try to sit between the provider and your app to handle that:

- **Hookdeck**. Event gateway with a CLI for local forwarding (`hookdeck listen 3000`), plus retries, filtering, transformations, and a dashboard for replays. Free for dev.
- **Svix**. More commonly used as a sending platform (you use Svix to send webhooks to your customers), but they also have Svix Ingest for receiving.
- **Convoy**. Open source, self-hostable.

For a side project, this is overkill. For anything where missing an event costs money, it's worth a look.

## Verify the signature. Always.

Anyone who knows your webhook URL can POST to it. Without signature verification, "Stripe sent me this" is just a string in a header. Three things to check on every request:

1. **HMAC matches.** The provider signs the body with a shared secret; you recompute and compare.
2. **Timestamp is recent.** Reject anything older than ~5 minutes to block replays.
3. **Comparison is constant-time.** Plain `===` leaks timing information.

Here's a generic Node/Express handler that does all three. Adjust the header name and the signed-payload format for your provider (Stripe uses `Stripe-Signature` with `t=...,v1=...`; GitHub uses `X-Hub-Signature-256` with no timestamp; Slack uses `X-Slack-Signature` plus `X-Slack-Request-Timestamp`):

```js
import express from "express";
import crypto from "node:crypto";

const app = express();
const SECRET = process.env.WEBHOOK_SECRET;
const TOLERANCE_SECONDS = 300;

// IMPORTANT: get the raw body, not the parsed JSON.
// JSON.parse + re-stringify will change byte order and break the signature.
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.get("X-Signature") ?? "";
    const ts  = req.get("X-Timestamp") ?? "";

    // 1. Timestamp window
    const age = Math.abs(Date.now() / 1000 - Number(ts));
    if (!ts || age > TOLERANCE_SECONDS) {
      return res.status(400).send("stale or missing timestamp");
    }

    // 2. Recompute HMAC over `${ts}.${rawBody}`
    const expected = crypto
      .createHmac("sha256", SECRET)
      .update(`${ts}.${req.body}`)
      .digest("hex");

    // 3. Constant-time compare
    const a = Buffer.from(expected, "hex");
    const b = Buffer.from(sig, "hex");
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return res.status(401).send("bad signature");
    }

    // Parse only after verifying.
    const event = JSON.parse(req.body.toString("utf8"));

    // 4. Idempotency: events get redelivered. Insert event.id into a
    //    unique-indexed table inside the same transaction as your work.
    //    If the insert fails with a unique violation, you've seen this one.

    // 5. Return 200 fast. Do real work in a background job.
    res.sendStatus(200);
  }
);

app.listen(3000);
```

A few things worth flagging:

- `express.raw()` is load-bearing. The default `express.json()` parses the body and discards the bytes, which means the signature can never match. This is the single most common reason "signature verification doesn't work" - the body is already mangled by the time you see it.
- The 5-minute tolerance window is what Stripe and Slack both use. Tighter is fine if your clocks are sane; looser invites replays.
- `crypto.timingSafeEqual` requires equal-length buffers. Compare lengths first or you'll throw.
- Idempotency belongs in the database, not the application. A unique index on `event_id` and an `INSERT ... ON CONFLICT DO NOTHING` is the simplest version. Wrapping the insert and the business logic in one transaction keeps the two from drifting.
- Reply within the provider's timeout. Stripe drops the delivery and schedules a retry after 10 seconds; GitHub uses 30. If your handler does anything slow (image processing, third-party API calls), enqueue and return 200 immediately.

## Stack notes

Express is still the lingua franca of webhook examples, which is why the snippet above uses it, but the raw-body trick translates:

- **Fastify**: use `fastify.addContentTypeParser("application/json", { parseAs: "buffer" }, ...)` so you get a Buffer in `request.body`.
- **Hono / Bun**: `await c.req.text()` for the raw string before `JSON.parse`.
- **Next.js App Router**: in a route handler, `await req.text()` gives the raw body; don't call `req.json()` first.

## Putting it together

The workflow that ends up working for most people:

1. Run the app (`node --watch server.js` on Node 22+, or whatever your stack uses).
2. Open a Pinggy tunnel to the same port.
3. Paste the public URL into the provider's webhook config.
4. Trigger an event from the provider's dashboard or CLI.
5. Watch the request hit your handler. Verify signature. Reply 200.

Once that loop is solid, swap in the provider CLI (`stripe listen`, smee for GitHub) if you don't want a tunnel running all day. And before you ship, write a test that POSTs to your handler with a deliberately wrong signature and confirms you return 401 - that's the failure mode that's easiest to introduce by accident and hardest to notice in production.
