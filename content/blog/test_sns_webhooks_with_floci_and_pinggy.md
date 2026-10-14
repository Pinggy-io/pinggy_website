---
title: "Test AWS SNS Webhooks Locally with Floci and Pinggy"
description: "Floci is a new open-source AWS emulator that runs 100+ services on your laptop with no auth token, unlike LocalStack after March 2026. Pair it with a Pinggy tunnel to receive real SNS webhook deliveries without an AWS account."
date: 2026-09-26T14:00:00+05:30
lastmod: 2026-09-26T14:00:00+05:30
draft: false
tags: ["AWS", "webhook testing", "Docker", "Pinggy", "DevOps"]
og_image: "images/test_sns_webhooks_with_floci_and_pinggy/test_sns_webhooks_with_floci_and_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiVGVzdCBBV1MgU05TIFdlYmhvb2tzIExvY2FsbHkgd2l0aCBGbG9jaSBhbmQgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiUnVuIHRoZSBvcGVuLXNvdXJjZSBGbG9jaSBBV1MgZW11bGF0b3Igb24geW91ciBsYXB0b3AsIHN1YnNjcmliZSBhIFBpbmdneSB0dW5uZWwgVVJMIHRvIGFuIFNOUyB0b3BpYywgYW5kIGNvbmZpcm0gYW5kIHJlY2VpdmUgcmVhbCB3ZWJob29rIGRlbGl2ZXJpZXMgd2l0aG91dCBhbiBBV1MgYWNjb3VudC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvdGVzdF9zbnNfd2ViaG9va3Nfd2l0aF9mbG9jaV9hbmRfcGluZ2d5L3Rlc3Rfc25zX3dlYmhvb2tzX3dpdGhfZmxvY2lfYW5kX3BpbmdneV9iYW5uZXIud2VicCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTA5LTI2VDE0OjAwOjAwKzA1OjMwIiwKICAic3RlcCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlN0YXJ0IEZsb2NpIiwgInRleHQiOiAiUnVuIGRvY2tlciBydW4gLWQgLS1uYW1lIGZsb2NpIC1wIDQ1NjY6NDU2NiAtdiAvdmFyL3J1bi9kb2NrZXIuc29jazovdmFyL3J1bi9kb2NrZXIuc29jayBmbG9jaS9mbG9jaTpsYXRlc3QuIEZsb2NpIGxpc3RlbnMgb24gcG9ydCA0NTY2IGFuZCBhY2NlcHRzIGR1bW15IEFXUyBjcmVkZW50aWFscy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJDcmVhdGUgYW4gU05TIHRvcGljIiwgInRleHQiOiAiUnVuIGF3cyBzbnMgY3JlYXRlLXRvcGljIC0tbmFtZSB3ZWJob29rLXRlc3QgLS1lbmRwb2ludC11cmwgaHR0cDovL2xvY2FsaG9zdDo0NTY2IHRvIGdldCBhIFRvcGljQXJuLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlN0YXJ0IGEgbG9jYWwgd2ViaG9vayByZWNlaXZlciIsICJ0ZXh0IjogIlJ1biBhIHNtYWxsIEhUVFAgc2VydmVyIG9uIHBvcnQgODA4MCB0aGF0IHByaW50cyB0aGUgYm9keSBvZiBldmVyeSBQT1NUIHJlcXVlc3QgaXQgcmVjZWl2ZXMuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiT3BlbiBhIFBpbmdneSB0dW5uZWwgdG8gdGhlIHJlY2VpdmVyIiwgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgwIGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBVUkwgc3VjaCBhcyBodHRwOi8vYWJjMTIzLnJ1bi5waW5nZ3ktZnJlZS5saW5rLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlN1YnNjcmliZSB0aGUgdHVubmVsIFVSTCB0byB0aGUgdG9waWMiLCAidGV4dCI6ICJSdW4gYXdzIHNucyBzdWJzY3JpYmUgLS10b3BpYy1hcm4gPGFybj4gLS1wcm90b2NvbCBodHRwIC0tbm90aWZpY2F0aW9uLWVuZHBvaW50IGh0dHA6Ly9hYmMxMjMucnVuLnBpbmdneS1mcmVlLmxpbmsvd2ViaG9vayAtLWVuZHBvaW50LXVybCBodHRwOi8vbG9jYWxob3N0OjQ1NjYsIHRoZW4gY29uZmlybSBieSByZXF1ZXN0aW5nIHRoZSBTdWJzY3JpYmVVUkwgZnJvbSB0aGUgU3Vic2NyaXB0aW9uQ29uZmlybWF0aW9uIGJvZHkgRmxvY2kgcG9zdHMgdG8geW91ciByZWNlaXZlci4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJQdWJsaXNoIGEgbWVzc2FnZSBhbmQgd2F0Y2ggaXQgYXJyaXZlIiwgInRleHQiOiAiUnVuIGF3cyBzbnMgcHVibGlzaCAtLXRvcGljLWFybiA8YXJuPiAtLW1lc3NhZ2UgXCIuLi5cIiAtLWVuZHBvaW50LXVybCBodHRwOi8vbG9jYWxob3N0OjQ1NjYgYW5kIHNlZSB0aGUgTm90aWZpY2F0aW9uIEpTT04gbGFuZCBvbiB5b3VyIGxvY2FsIHJlY2VpdmVyIHRocm91Z2ggdGhlIHR1bm5lbC4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "test_sns_webhooks_with_floci_and_pinggy/test_sns_webhooks_with_floci_and_pinggy_banner.webp" "Test AWS webhooks without AWS: Floci and a webhook receiver on your laptop, tunneled through Pinggy to a public HTTPS URL" >}}

{{< llm-context >}}To receive a real SNS webhook delivery on a local AWS emulator with Pinggy - run `docker run -d --name floci -p 4566:4566 -v /var/run/docker.sock:/var/run/docker.sock floci/floci:latest` (Floci listens on port 4566), start a local webhook receiver on port 8080, then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` and subscribe the printed URL to your SNS topic with `aws sns subscribe --protocol http --notification-endpoint <pinggy-url>/webhook --endpoint-url http://localhost:4566`.{{< /llm-context >}}

<a href="https://floci.io/" target="_blank">Floci</a> showed up on GitHub's trending page this week: a free, MIT-licensed local emulator for AWS, Azure, GCP and OCI that boots in well under a second and needs no account, no auth token, and no credit card. It exists because of a very specific gap. <a href="https://blog.localstack.cloud/localstack-for-aws-release-2026-03-0/" target="_blank">LocalStack's own release notes</a> confirm that as of March 23, 2026, the `localstack/localstack:latest` image folded its free Community edition into a single image that requires a `LOCALSTACK_AUTH_TOKEN` to start at all. For six years LocalStack was the default answer to "how do I test AWS integrations without an AWS account." Now the free path needs a login, and a wave of `localstack-community` forks and alternatives filled the vacuum. Floci is the one that stuck: 25.7k GitHub stars and 2.8k forks as of this week, positioning itself directly as "same port 4566, 119+ services, native binary, zero code changes."

I pulled the image and ran it. `docker run -d --name floci -p 4566:4566 -v /var/run/docker.sock:/var/run/docker.sock floci/floci:latest` starts a container that logs `AWS Local Emulator 2.1.0 Starting` and is answering requests before the log even finishes printing. Pointing the AWS CLI at `http://localhost:4566` with the dummy credentials `test`/`test` gets you S3, SQS, DynamoDB, Lambda and 117 other services running entirely on your machine.

The part that needs more than a local emulator is anything built around webhooks. <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-http-https-endpoint-as-subscriber.html" target="_blank">SNS's HTTP(S) subscription protocol</a>, the mechanism behind CloudWatch alarm notifications, S3 event fan-out, and a lot of internal "notify this service when X happens" plumbing, requires the subscriber to be reachable from wherever SNS is running so it can POST a confirmation request and, later, the actual notifications. Floci's SNS implementation does exactly what real AWS SNS does here: it makes a genuine outbound HTTP request to whatever endpoint you register. Your laptop, sitting behind NAT with no public IP, can't receive that request on its own. That's the one piece Floci can't fake for you, and it's exactly what a Pinggy tunnel is for.

{{% tldr %}}
1. **Floci replaces LocalStack Community** for free, no-auth-token local AWS testing: `docker run -d -p 4566:4566 -v /var/run/docker.sock:/var/run/docker.sock floci/floci:latest`.
2. **SNS HTTP(S) subscriptions need a real, reachable URL**, even in a local emulator, because the confirmation and delivery requests are genuine outbound HTTP calls.
3. **A Pinggy tunnel gives your local webhook receiver that URL**: `ssh -p 443 -R0:localhost:8080 free.pinggy.io` prints a public HTTPS URL in one line, no signup.
4. **Subscribe the tunnel URL to your topic**, then confirm it by fetching the `SubscribeURL` from the confirmation payload Floci sends you.
5. **Everything you publish with `aws sns publish` now lands on your laptop** in the same JSON shape a production subscriber would get.
{{% /tldr %}}

## What you're testing: a webhook that never touches AWS

The scenario: you're building a service that reacts to SNS notifications delivered over plain HTTP, the same pattern used for CloudWatch alarms, S3 bucket events fanned out through SNS, or an internal "something changed, tell these three services" topic. Before wiring this into real infrastructure, you want to prove the whole loop works: topic exists, subscription confirms, messages arrive with the fields your code expects. Standing up a real SNS topic and a public endpoint for a five-minute test is overkill, and now that LocalStack Community wants an account first, it's also friction that didn't used to be there for a two-command test.

The mental model for this post is small on purpose: one Floci container standing in for AWS, one local Python script standing in for whatever service you'd normally deploy, and one Pinggy tunnel connecting the two the way the public internet would.

## Installing Floci

Floci ships as a single Docker image. The only other thing worth having is the AWS CLI, since it already knows how to talk to any endpoint you point it at with `--endpoint-url`.

```bash
docker run -d --name floci -p 4566:4566 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  floci/floci:latest
```

The socket mount matters: several of Floci's 121 emulated services (Lambda and RDS among them) launch real Docker containers behind the scenes rather than faking a response, so the container needs access to the host's Docker daemon to spin those up.

`docker logs floci` shows it come up:

```
   AWS Local Emulator  ·  Always Free

            Powered by Quarkus 3.39.2
...
=== AWS Local Emulator 2.1.0 Starting ===
Endpoint:  http://0.0.0.0:4566
Region:    us-east-1  Account: 000000000000
Storage:   memory  Path: /app/data
TLS:       disabled (HTTP only)
Enabled services: [ssm, sqs, s3, dynamodb, sns, lambda, apigateway, iam, ...]
=== AWS Local Emulator Ready ===
floci 2.1.0 native (powered by Quarkus 3.39.2) started in 0.091s.
```

Point the CLI at it with dummy credentials, no real AWS account required:

```bash
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
export AWS_DEFAULT_REGION=us-east-1
export EP=http://localhost:4566
```

## Creating the SNS topic

```bash
aws sns create-topic --name webhook-test --endpoint-url $EP
```

```json
{
    "TopicArn": "arn:aws:sns:us-east-1:000000000000:webhook-test"
}
```

Same shape you'd get from real SNS, same account ID Floci uses for every resource (`000000000000`) unless you configure it otherwise.

## Writing a local webhook receiver

Anything that can accept a POST and print the body works. A single-file Python server is enough to see the mechanism clearly:

```python
# server.py
from http.server import BaseHTTPRequestHandler, HTTPServer

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        print("---- received POST", self.path, "----")
        print(body.decode())
        self.send_response(200)
        self.end_headers()

HTTPServer(('0.0.0.0', 8080), Handler).serve_forever()
```

```bash
python3 server.py
```

This is standing in for whatever real service would eventually own this endpoint, an alerting service, a background worker, a Slack notifier. Right now it just needs to exist on port 8080 and print what it gets.

## Opening a Pinggy tunnel to the receiver

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy answers with two URLs, one plain HTTP and one HTTPS, both pointing at port 8080 on your machine:

```
http://abc123.run.pinggy-free.link
https://abc123.run.pinggy-free.link
```

Either works with SNS, since SNS's HTTP(S) protocol accepts both `http` and `https` as the subscription protocol. Using the plain `http://` URL is one less TLS handshake to think about while you're testing, and Pinggy still terminates and forwards it the same way.

## Subscribing the tunnel URL to the topic

```bash
aws sns subscribe \
  --topic-arn arn:aws:sns:us-east-1:000000000000:webhook-test \
  --protocol http \
  --notification-endpoint http://abc123.run.pinggy-free.link/webhook \
  --endpoint-url $EP
```

```json
{
    "SubscriptionArn": "arn:aws:sns:us-east-1:000000000000:webhook-test:858b5767-7f9e-4ed5-942f-425ea774cf05"
}
```

The moment this command returns, Floci's SNS service has already tried to deliver a `SubscriptionConfirmation` request to your tunnel URL. Your `server.py` terminal shows something like:

```
---- received POST /webhook ----
{"Type":"SubscriptionConfirmation","MessageId":"...","TopicArn":"arn:aws:sns:us-east-1:000000000000:webhook-test","Message":"You have chosen to subscribe to the topic ...","SubscribeURL":"http://localhost:4566/?Action=ConfirmSubscription&TopicArn=...&Token=...","Timestamp":"..."}
```

{{< image "test_sns_webhooks_with_floci_and_pinggy/sns_confirm_and_publish_sequence.webp" "Sequence diagram: subscribing and confirming an SNS topic through a Pinggy tunnel, then publishing a message that arrives at the local webhook receiver" >}}

## Confirming the subscription

SNS doesn't deliver anything to a pending subscription. Copy the `SubscribeURL` out of that JSON and hit it:

```bash
curl "http://localhost:4566/?Action=ConfirmSubscription&TopicArn=arn:aws:sns:us-east-1:000000000000:webhook-test&Token=..."
```

That request goes straight to Floci over localhost, since it's your own machine confirming its own subscription; nothing needs to leave through the tunnel for this step. Check it stuck:

```bash
aws sns list-subscriptions-by-topic \
  --topic-arn arn:aws:sns:us-east-1:000000000000:webhook-test \
  --endpoint-url $EP
```

A subscription still shown as `PendingConfirmation` after this step means the `SubscribeURL` wasn't reached, usually because it was copied with the escaped `&` still in it instead of a literal `&`, or a shell ate part of the query string. Quote the whole URL.

## Publishing a message and watching it arrive

```bash
aws sns publish \
  --topic-arn arn:aws:sns:us-east-1:000000000000:webhook-test \
  --message "order #4471 shipped" \
  --endpoint-url $EP
```

```json
{
    "MessageId": "bee06b38-d37c-4dc7-a93e-a83b35fa062d"
}
```

And on the receiver's terminal, through the tunnel:

```
---- received POST /webhook ----
{"Type":"Notification","MessageId":"bee06b38-d37c-4dc7-a93e-a83b35fa062d","TopicArn":"arn:aws:sns:us-east-1:000000000000:webhook-test","Message":"order #4471 shipped","Timestamp":"2026-09-26T13:43:40.119Z"}
```

That's the same `Type: Notification` envelope a production subscriber gets from real SNS: `Message`, `MessageId`, `TopicArn`, `Timestamp`. Whatever parsing code you write against this now works unchanged against a real topic later, since Floci's whole pitch is matching the wire format rather than approximating it.

## Troubleshooting

- **Subscription stuck in `PendingConfirmation`.** You either haven't hit the `SubscribeURL` yet, or the tunnel dropped between the subscribe call and the confirmation POST arriving. Re-run `list-subscriptions-by-topic` to check the current state before assuming publish will work.
- **Free tunnel expired after 60 minutes.** Pinggy's anonymous `free.pinggy.io` tunnels disconnect after an hour, and reconnecting hands you a new random subdomain. Your old subscription now points at a dead URL. For anything longer than a quick test, subscribe again with the new URL, or use a <a href="https://dashboard.pinggy.io" target="_blank">Pinggy Pro token</a> for a persistent one.
- **Nothing arrives at all.** Confirm the receiver is actually listening on 8080 before opening the tunnel, and confirm you subscribed the `/webhook` path if your server only handles that path. `docker logs floci` will show `Failed to send ... ` lines if Floci's own delivery attempt errored out, which is the fastest way to tell "never sent" from "sent, dropped somewhere downstream."
- **Confirming from the wrong place.** The `SubscribeURL` points at Floci (`localhost:4566`), not at your tunnel. Don't route it through Pinggy; curl it directly.

## What to do next

The same pattern extends past SNS. Floci emulates EventBridge, S3 event notifications, and CloudWatch Alarms too, and any of those that end in an HTTP(S) call downstream benefit from the same Pinggy tunnel trick whenever the target needs to be a real, externally reachable URL rather than another container on the same Docker network. If you're testing a Lambda that's meant to be invoked by a third-party SaaS webhook rather than by AWS itself, forwarding a Pinggy tunnel at Floci's `4566` endpoint (rather than at your receiver) lets that outside service call directly into your emulated stack instead of the other way around.

Floci ships releases on the first and third Tuesday of each month, so the exact service list and version numbers here will move; check <a href="https://github.com/floci-io/floci/releases" target="_blank">the release notes</a> before assuming a specific service is covered. What won't change is the shape of this problem: a local emulator can fake an entire cloud provider's API, but it can't fake being reachable from the internet. That part still needs a tunnel.
