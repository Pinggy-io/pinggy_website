---
title: "Floci: A Free Local AWS Emulator, and How to Test Webhooks Against It"
description: "Floci is an MIT-licensed local AWS emulator that needs no account or token. Run it with Docker, deploy a Lambda behind API Gateway, and receive real webhooks on it through a Pinggy tunnel."
date: 2026-11-06T10:00:00+05:30
lastmod: 2026-11-06T10:00:00+05:30
draft: false
tags: ["AWS", "open source", "Docker", "developer tools", "webhook testing"]
og_image: "images/floci_local_aws_emulator/floci_local_aws_emulator_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiUmVjZWl2ZSBhIHdlYmhvb2sgaW4gYSBMYW1iZGEgcnVubmluZyBvbiBGbG9jaSwgYSBsb2NhbCBBV1MgZW11bGF0b3IiLAogICJkZXNjcmlwdGlvbiI6ICJGbG9jaSBpcyBhbiBNSVQtbGljZW5zZWQgbG9jYWwgQVdTIGVtdWxhdG9yIHRoYXQgbmVlZHMgbm8gYWNjb3VudCBvciB0b2tlbi4gUnVuIGl0IHdpdGggRG9ja2VyLCBkZXBsb3kgYSBMYW1iZGEgYmVoaW5kIEFQSSBHYXRld2F5LCBhbmQgcmVjZWl2ZSByZWFsIHdlYmhvb2tzIG9uIGl0IHRocm91Z2ggYSBQaW5nZ3kgdHVubmVsLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9mbG9jaV9sb2NhbF9hd3NfZW11bGF0b3IvZmxvY2lfbG9jYWxfYXdzX2VtdWxhdG9yX2Jhbm5lci53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMDZUMTA6MDA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiU3RhcnQgRmxvY2kiLCAidGV4dCI6ICJSdW4gZG9ja2VyIGNvbXBvc2UgdXAgLWQgd2l0aCB0aGUgZmxvY2kvZmxvY2k6bGF0ZXN0IGltYWdlIGFuZCBwb3J0IDQ1NjYgcHVibGlzaGVkLCB0aGVuIGV4cG9ydCBBV1NfRU5EUE9JTlRfVVJMPWh0dHA6Ly9sb2NhbGhvc3Q6NDU2Ni4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJEZXBsb3kgYSBMYW1iZGEiLCAidGV4dCI6ICJaaXAgaGFuZGxlci5weSBhbmQgcnVuIGF3cyBsYW1iZGEgY3JlYXRlLWZ1bmN0aW9uIC0tZnVuY3Rpb24tbmFtZSB3ZWJob29rIC0tcnVudGltZSBweXRob24zLjEzIC0taGFuZGxlciBoYW5kbGVyLmhhbmRsZXIuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQWRkIGFuIEhUVFAgQVBJIHJvdXRlIiwgInRleHQiOiAiQ3JlYXRlIGFuIEFQSSBHYXRld2F5IHYyIEhUVFAgQVBJIHdpdGggYW4gQVdTX1BST1hZIGludGVncmF0aW9uLCBhIFBPU1QgL3dlYmhvb2sgcm91dGUgYW5kIGEgZGV2IHN0YWdlLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIlByb3h5IG9uZSBwYXRoIiwgInRleHQiOiAiUnVuIENhZGR5IG9uIHBvcnQgODA4MCBzbyB0aGF0IG9ubHkgL3dlYmhvb2sgaXMgcmV3cml0dGVuIHRvIHRoZSBGbG9jaSBleGVjdXRlLWFwaSBwYXRoLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIk9wZW4gYSBQaW5nZ3kgdHVubmVsIiwgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDgwIGZyZWUucGluZ2d5LmlvIGFuZCBnaXZlIHRoZSBIVFRQUyBVUkwgdG8gdGhlIHdlYmhvb2sgc2VuZGVyLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "floci_local_aws_emulator/floci_local_aws_emulator_banner.webp" "A free local AWS: Floci on port 4566, with a webhook flowing from a sender through Pinggy and Caddy into Floci and a Lambda" >}}

{{< llm-context >}}To receive real webhooks on a local AWS Lambda with Pinggy - run `docker compose up` for Floci (AWS emulator on port 4566), deploy a Lambda behind an API Gateway v2 route, put a small Caddy proxy on port 8080 that forwards only `/webhook` to it, then run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

Floci is a local AWS emulator that starts in about 24 ms, idles at about 13 MiB of memory, and needs no account or auth token. It is MIT licensed, listens on port 4566 like LocalStack did, and takes the same `AWS_ENDPOINT_URL` override from the AWS CLI and SDKs. Those startup and memory numbers come from the project's own README (checked November 6, 2026), not from a benchmark I ran.

The reason it exists is a licensing change. LocalStack folded its community image into a single account-based image in March 2026, so anyone pulling the old image for CI now needs an auth token. Floci is the "swap the image name and carry on" answer. This post covers what it is, how to start it, and one thing a local emulator can't do alone: recieve a webhook from the public internet. For that we put a Pinggy tunnel in front of a Lambda running inside Floci.

{{% tldr %}}
1. **Floci is a drop-in for the LocalStack community image**: same port 4566, same endpoint-URL override, MIT license, no token.
2. **Simple services run in-process, heavier ones in real Docker containers.** SQS, SNS, S3 and DynamoDB are native code; Lambda, RDS, ElastiCache and ECS start containers.
3. **The emulator is local-only by default.** To receive a Stripe, GitHub or Slack webhook in a local Lambda, you need a public URL pointing at it.
4. **Never tunnel port 4566 directly.** It is an unauthenticated AWS control plane. Put a proxy in front that forwards one path.
5. **Fidelity has limits.** Some services are stubs that return canned responses, so don't treat a green local run as proof of production behavior.
{{% /tldr %}}

## What Floci emulates, and how

Floci ships as a native-image build (the README describes a JAX-RS and Vert.x router, which is where the quick start comes from) that speaks the AWS wire protocols on port 4566. Point `aws`, boto3, Terraform or the CDK at `http://localhost:4566` and they behave as if they were talking to a region.

The README splits the services into two groups, and the split matters when you choose what to trust:

- **In-process:** S3, DynamoDB, SQS, SNS, IAM, KMS, Secrets Manager, Step Functions, EventBridge, API Gateway (REST and v2), Cognito and many more. These are reimplementations inside the Floci process.
- **Real Docker:** Lambda, RDS, ElastiCache, MSK, ECS, EC2, EKS, OpenSearch and CodeBuild. Floci starts an actual container, for example `public.ecr.aws/lambda/<runtime>` for Lambda and `postgres:16-alpine` for RDS PostgreSQL.
- **Stubs:** Textract, Transcribe and the Bedrock runtime return canned responses. They exist so your code path completes, not so you can judge model output.

{{< image "floci_local_aws_emulator/floci_vs_localstack_community.webp" "Table comparing Floci and LocalStack Community on startup time, idle memory, Docker image size and auth token requirement" >}}

*Project-reported figures from the {{< link href="https://github.com/floci-io/floci" >}}Floci README{{< /link >}}, November 2026. Not an independent benchmark.*

Fidelity is the honest caveat. The docs list the supported operations per service, and in-process does not mean complete. Some features are accepted and stored but inert: Application Auto Scaling policies are saved but never fire, and AWS FIS experiments are a control-plane simulation. If your test depends on one of those behaviors, run it against a real account once.

## Start it with Docker Compose

You need Docker 23.0 or newer (the image layers are zstd-compressed) and Compose v2. Create `compose.yaml`:

```yaml
services:
  floci:
    image: floci/floci:latest
    ports:
      - "4566:4566"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

The socket mount is only needed for services that start containers, which includes Lambda, and for the web console. Without it, everything in-process still works.

```bash
docker compose up -d
```

Then set the usual AWS variables. Any non-empty credentials work unless you turn on stricter auth:

```bash
export AWS_ENDPOINT_URL=http://localhost:4566
export AWS_DEFAULT_REGION=us-east-1
export AWS_ACCESS_KEY_ID=test
export AWS_SECRET_ACCESS_KEY=test
aws s3 mb s3://my-bucket
```

If you'd rather skip Docker entirely, each release also ships a `floci-aws` binary for Linux, macOS and Windows. On Linux it needs glibc 2.34 or newer, so Alpine and older RHEL releases are out. There's also a browser console at `http://localhost:4566/_floci/ui` that starts as a sidecar container on first request.

If you're coming from LocalStack, the migration is mostly the image name. The old `hectorvent/floci` image no longer gets updates, so use `floci/floci`.

## The worked example: a Stripe-style webhook into a local Lambda

Here is a concrete case. You're building a webhook handler as a Lambda behind an HTTP API, and you want Stripe, GitHub or a partner's staging system to call it while you iterate. Everything about the function lives in Floci. The sender, though, lives on the internet and can't see `localhost:4566`.

{{< image "floci_local_aws_emulator/webhook_to_local_lambda.webp" "A webhook sender calls a Pinggy URL, the request travels down the SSH connection to Caddy on port 8080, then Floci on port 4566 and a Lambda container" >}}

*A webhook travels over the tunnel to Caddy, which forwards the one allowed path into Floci.*

### Deploy the function

A handler that logs what it receives:

```python
# handler.py
import json

def handler(event, context):
    print(json.dumps({
        "path": event["rawPath"],
        "headers": event["headers"],
        "body": event.get("body"),
    }))
    return {"statusCode": 200, "body": "received"}
```

Zip it and create the function. Use any role ARN in the right shape (Floci only enforces IAM if you turn enforcement on):

```bash
zip function.zip handler.py
aws lambda create-function --function-name webhook \
  --runtime python3.13 --handler handler.handler \
  --zip-file fileb://function.zip \
  --role arn:aws:iam::000000000000:role/lambda-role
```

The first invoke pulls the Lambda runtime image, so expect a wait teh first time.

### Wire it to an HTTP API

```bash
API_ID=$(aws apigatewayv2 create-api --name webhooks --protocol-type HTTP \
  --query ApiId --output text)
FN_ARN=$(aws lambda get-function --function-name webhook \
  --query Configuration.FunctionArn --output text)
INT_ID=$(aws apigatewayv2 create-integration --api-id $API_ID \
  --integration-type AWS_PROXY --integration-uri $FN_ARN \
  --payload-format-version 2.0 --query IntegrationId --output text)
aws apigatewayv2 create-route --api-id $API_ID \
  --route-key 'POST /webhook' --target integrations/$INT_ID
aws apigatewayv2 create-stage --api-id $API_ID --stage-name dev --auto-deploy
```

Floci serves the API on three URL forms, per its API Gateway docs: `http://{apiId}.execute-api.localhost.floci.io:4566/{stage}/{path}`, `http://localhost:4566/execute-api/{apiId}/{stage}/{path}`, and, for REST APIs, `http://localhost:4566/restapis/{apiId}/{stage}/_user_request_/{path}`. The path form is the easiest to test with curl:

```bash
curl -X POST "http://localhost:4566/execute-api/$API_ID/dev/webhook" -d '{"ping":true}'
```

You should get `received` back. The handler's `print` output lands in the function's log stream.

## Why not just tunnel port 4566

The tempting move is `ssh -R0:localhost:4566 ...` and handing the sender `https://<tunnel>/execute-api/<id>/dev/webhook`. It works, and it is a bad idea. Port 4566 is not just your API. It is the whole emulator: `CreateBucket`, `PutParameter`, `DeleteFunction`, all unauthenticated unless you enabled signature checks. Anyone who guesses or scrapes the tunnel URL can read and rewrite your local state. The random hostname is not a security boundary.

Two smaller problems point the same way. The sender needs a URL with an `/execute-api/<id>/dev` prefix baked into it, and Floci's host-based routing (the `*.localhost.floci.io` forms) won't match a public hostname.

A small reverse proxy fixes all three. This Caddyfile exposes exactly one path and rewrites it to the Floci route:

```text
:8080 {
	handle /webhook {
		rewrite * /execute-api/{$API_ID}/dev/webhook
		reverse_proxy localhost:4566 {
			header_up Host {upstream_hostport}
		}
	}
	handle {
		respond 404
	}
}
```

```bash
API_ID=$API_ID caddy run --config Caddyfile
```

Caddy keeps the incoming `Host` header by default, which would be the Pinggy hostname, so add `header_up Host {upstream_hostport}` to send `localhost:4566` instead. Any other path returns `404` without touching Floci.

## Open the Pinggy tunnel

Now tunnel the proxy, not the emulator. In a second terminal, open a {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} tunnel to port 8080:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints an HTTPS URL like `https://abc123.run.pinggy-free.link`. Send a request to it from anywhere, such as your phone's browser tools or another machine:

```bash
curl -X POST https://abc123.run.pinggy-free.link/webhook -d '{"hello":"from outside"}'
```

The path is: the sender calls the Pinggy URL -> Pinggy forwards it down the SSH connection your machine opened -> Caddy on port 8080 rewrites it -> Floci routes it to API Gateway -> Floci starts the Lambda container. Paste the URL into the Stripe or GitHub webhook settings and real events land in your local function. The Pinggy CLI also serves a request inspector at `http://localhost:4300`, handy for replaying a payload while you fix a bug.

Free tunnels last 60 minutes and the URL changes on reconnect, so for a webhook you register once, a {{< link href="https://dashboard.pinggy.io" >}}Pinggy Pro token{{< /link >}} gives you a stable address. If the provider signs its payloads (Stripe does), verify the signature in the handler even locally. That way the code you test is the code you ship. For the general pattern, see {{< link href="/blog/receive_and_test_webhooks_in_localhost/" >}}receiving and testing webhooks on localhost{{< /link >}}.

A note on what I ran: the sandbox this post was written in had no running Docker daemon and no outbound tunnel access, so I did not run Floci or the tunnel myself. The Floci commands follow its README and service docs, and the Caddy rewrite is untested. If a flag or route form differs on your Floci version, trust the docs for your version over this post, and tell us so we can fix it.

## When Floci isn't the right tool

- **You need exact AWS behavior.** IAM edge cases, eventual consistency and service quotas differ. Treat Floci as a fast inner loop and keep one integration run against a real account.
- **You depend on a LocalStack-only feature.** LocalStack still has features Floci doesn't copy. Its own posts say the free tier remains available to hobbyists and open-source projects after signing in, so if you already have an account and tokens in CI, there's no emergency.
- **You want a hosted URL, not a tunnel.** If the webhook target must be up when your laptop is closed, deploy to a real stage.

## Conclusion

The practical check is quick. Start Floci with Compose, deploy a six-line Lambda, and confirm `curl` returns `received`. Then decide whether your tests need the real container-backed services or only the in-process ones, since that decides your startup time in CI. The webhook route through a path-restricted proxy and a tunnel is worth keeping even if you later switch emulators, because the same shape works for any local service you want a sender to reach.
