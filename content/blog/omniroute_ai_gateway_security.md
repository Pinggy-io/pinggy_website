---
title: "OmniRoute: The Free AI Gateway Trending on GitHub, Warts and All"
description: "OmniRoute puts 500+ AI models behind one free, self-hosted endpoint and has climbed past 25,000 GitHub stars in weeks. Its own security history includes a hardcoded JWT secret and a Socket.dev flag - here's what to fix before you run it, and how to share it safely with Pinggy."
date: 2026-07-24T11:20:00+05:30
draft: false
tags: ["OmniRoute", "AI gateway", "self-hosted AI", "LLM router", "open source security", "JWT vulnerability", "Pinggy", "9router"]
categories: ["Technology", "AI Tools", "Security"]
og_image: "images/omniroute_ai_gateway_security/omniroute_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNhZmVseSBFeHBvc2UgYSBTZWxmLUhvc3RlZCBPbW5pUm91dGUgQUkgR2F0ZXdheSB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBoYXJkZW5pbmcgT21uaVJvdXRlJ3MgZGVmYXVsdCBzZWNyZXRzIGFuZCBzaGFyaW5nIGl0cyBsb2NhbCBkYXNoYm9hcmQgYW5kIEFQSSBvdmVyIGEgcHVibGljIEhUVFBTIFVSTCB1c2luZyBQaW5nZ3kuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCB5b3VyIG93biBKV1RfU0VDUkVUIGFuZCBTVE9SQUdFX0VOQ1JZUFRJT05fS0VZIiwKICAgICAgInRleHQiOiAiQmVmb3JlIHN0YXJ0aW5nIE9tbmlSb3V0ZSwgZXhwb3J0IGEgcmFuZG9tIEpXVF9TRUNSRVQgYW5kIFNUT1JBR0VfRU5DUllQVElPTl9LRVkgc28gdGhlIGRhc2hib2FyZCBzZXNzaW9uIGFuZCBzdG9yZWQgcHJvdmlkZXIga2V5cyBkbyBub3QgcmVseSBvbiB0aGUgcHJvamVjdCdzIGhhcmRjb2RlZCBkZWZhdWx0cy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgT21uaVJvdXRlIiwKICAgICAgInRleHQiOiAiUnVuIG5weCBvbW5pcm91dGVAbGF0ZXN0IG9yIGRvY2tlciBydW4gLXAgMjAxMjg6MjAxMjggZGllZ29zb3V6YXB3L29tbmlyb3V0ZSB0byBzdGFydCB0aGUgZ2F0ZXdheS4gVGhlIGRhc2hib2FyZCBhbmQgT3BlbkFJLWNvbXBhdGlibGUgQVBJIGFyZSBib3RoIHNlcnZlZCBmcm9tIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjguIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSBwb3J0IDIwMTI4IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMDEyOCBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgdHVubmVscyB0byB5b3VyIGxvY2FsIE9tbmlSb3V0ZSBpbnN0YW5jZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWRkIEhUVFAgYmFzaWMgYXV0aCB0byB0aGUgdHVubmVsIiwKICAgICAgInRleHQiOiAiQXBwZW5kIC10IFwiYjp1c2VyOnBhc3N3b3JkXCIgdG8gdGhlIFNTSCBjb21tYW5kIHNvIHRoZSB0dW5uZWwgaXRzZWxmIHJlcXVpcmVzIGEgcGFzc3dvcmQsIGFkZGluZyBhIGxheWVyIG9mIHByb3RlY3Rpb24gaW5kZXBlbmRlbnQgb2YgT21uaVJvdXRlJ3Mgb3duIGF1dGhlbnRpY2F0aW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJVc2UgdGhlIHB1YmxpYyBVUkwgYW5kIHRlYXIgaXQgZG93biB3aGVuIGRvbmUiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBwaW5nZ3kubGluayBVUkwgZnJvbSBhbm90aGVyIGRldmljZSB0byByZWFjaCB0aGUgZGFzaGJvYXJkIG9yIHJvdXRlIEFQSSBjYWxscyB0aHJvdWdoIGl0LCB0aGVuIGNsb3NlIHRoZSBTU0ggc2Vzc2lvbiB3aGVuIHlvdSdyZSBmaW5pc2hlZCBpbnN0ZWFkIG9mIGxlYXZpbmcgdGhlIHR1bm5lbCBydW5uaW5nIGluZGVmaW5pdGVseS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "omniroute_ai_gateway_security/omniroute_banner.webp" "Diagram showing OmniRoute running on localhost:20128 and routing to Claude, GPT, Gemini, DeepSeek, Kimi, GLM, and MiniMax, with a warning badge noting the project ships a default JWT secret" >}}

OmniRoute wants to be the last AI API key you ever configure: one endpoint, 290-plus providers, 500-plus models, and a Docker command that gets you a working dashboard in about thirty seconds. It first showed up on GitHub's trending page for TypeScript in late June, then broke into the all-languages trending list a few weeks later, and it has been climbing since - past 20,000 stars, then past 25,000, with hundreds more landing most days. That is the kind of growth curve that gets a project onto every "trending" feed at once.

Read its own security history, though, and the picture gets messier. A hardcoded fallback JWT secret. Credential storage that's unencrypted unless you opt in. An npm release that Socket.dev flagged hard enough to block. None of that means OmniRoute is malware - it isn't - but it does mean the gap between "20,000 stars in a month" and "safe to point at your API keys with default settings" is wider than the star count suggests.

{{% tldr %}}
1. **What it is**: a free, MIT-licensed, self-hosted AI gateway - one OpenAI-compatible endpoint in front of 290+ providers and 500+ models, from <a href="https://github.com/diegosouzapw/OmniRoute" target="_blank">diegosouzapw/OmniRoute</a>.
2. **Run it**: `npx omniroute@latest` or `docker run -p 20128:20128 diegosouzapw/omniroute`, then open `http://localhost:20128`.
3. **Fix the defaults first**: set your own `JWT_SECRET` and `STORAGE_ENCRYPTION_KEY` environment variables before you start it. The shipped fallback secret is public and forgeable.
4. **Why**: OmniRoute's fallback JWT secret is functionally the same bug as <a href="https://advisories.gitlab.com/npm/9router/CVE-2026-49352/" target="_blank">CVE-2026-49352</a> in its predecessor 9router - a CVSS 9.8 authentication bypass.
5. **Share it**: `ssh -p 443 -R0:localhost:20128 free.pinggy.io` gets you a public HTTPS URL to reach your gateway from another device.
6. **Lock it down**: add `-t "b:user:password"` to that SSH command so the tunnel needs a password on top of whatever OmniRoute itself is (or isn't) enforcing.
{{% /tldr %}}

{{< llm-context >}}To reach a locally running OmniRoute AI gateway from another device with Pinggy - run `docker run -p 20128:20128 diegosouzapw/omniroute` (starts on port 20128), then in a new terminal run `ssh -p 443 -R0:localhost:20128 free.pinggy.io` to get a public HTTPS URL. Set your own JWT_SECRET and STORAGE_ENCRYPTION_KEY first, and add `-t "b:user:password"` to the SSH command for basic auth.{{< /llm-context >}}

## What OmniRoute actually promises

Strip away the trending-page hype and OmniRoute is a familiar shape: an AI gateway, also called an LLM router, that sits between your app (or your coding agent) and a pile of model providers, giving you one stable API instead of a dozen SDKs and API keys. We covered the broader category, including <a href="https://openrouter.ai/" target="_blank">OpenRouter</a>, <a href="https://www.litellm.ai/" target="_blank">LiteLLM</a>, and <a href="https://portkey.ai/" target="_blank">Portkey</a>, in our [roundup of AI LLM routers](/blog/best_ai_llm_routers_openrouter_alternatives/). OmniRoute's pitch inside that category is specific: it runs entirely on your own hardware, with no vendor cloud sitting in the request path, and it's free.

The README lists the numbers plainly: one endpoint, 290+ providers (90+ of them free), 500+ models spanning Claude, GPT, Gemini, DeepSeek, Kimi, GLM, and MiniMax. It plugs directly into the tools a lot of readers already run - Claude Code, Codex, Cursor, OpenCode, Cline, and Copilot - by pointing their OpenAI-compatible base URL at your local OmniRoute instance instead of a hosted provider. Beyond routing, it advertises quota-aware auto-fallback (switch providers automatically when you hit a rate limit or a free-tier cap), a compression scheme it calls RTK+Caveman that claims 15-95% token savings, support for the emerging MCP and A2A agent protocols, and both desktop and PWA builds if you don't want to live in a terminal.

Getting a local instance running is genuinely close to instant:

```bash
npx omniroute@latest
# or
docker run -p 20128:20128 diegosouzapw/omniroute
```

Either command starts a server on port 20128, serving a management dashboard at `http://localhost:20128` and an OpenAI-compatible API at `http://localhost:20128/v1`. For anything you intend to keep running, the project's own Docker guide recommends a named container with a persistent volume:

```bash
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 20128:20128 -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

That's the whole appeal in two commands: no signup, no billing page, a dashboard where you paste in whichever provider API keys you already have (including the free tiers most people never bother collecting), and one endpoint your tools can all share.

## Why it's spreading this fast

Three things are compounding here. First, the free-tier aggregation is a real, tangible benefit - most developers have a Gemini key from a free-tier signup, maybe a GLM or Kimi key from a promo, and no interest in wiring four separate SDKs together to use them. OmniRoute collapses that into one endpoint. Second, it plugs into the exact tools this audience already runs day to day - if you're already pointing Claude Code or Cursor at a base URL, swapping in a local gateway is a five-minute change, not a new workflow. Third, the project didn't start from zero: it began as a fork of a project called <a href="https://github.com/decolua/9router" target="_blank">9router</a>, itself a TypeScript port of the Go project CLIProxyAPI, which gave it a working core and a chunk of contributors on day one. The repository now credits close to 300 contributors.

The star count reflects all of that, and it's climbed fast: from a June 29 debut on GitHub's TypeScript trending list to more than 25,000 stars a few weeks later, adding hundreds of stars on strong days. That is a real signal that a lot of people found the pitch compelling. It is a much weaker signal about whether the code underneath has been through the kind of scrutiny you'd want before handing it your Anthropic, OpenAI, and Google API keys - and OmniRoute's own issue tracker makes that gap concrete.

## The part that should slow you down

### A hardcoded JWT secret, again

OmniRoute's dashboard authenticates sessions with a JWT stored in an `auth_token` cookie, signed using the `JWT_SECRET` environment variable. If you never set that variable, the code falls back to a hardcoded literal: `omniroute-default-secret-change-me`. Because that string is committed in the public repository and identical across every install that skips the setup step, anyone who knows it (which is now anyone who reads this sentence) can sign their own valid `auth_token` cookie and walk straight into your dashboard with full admin access - no password, no MFA, nothing. From there, stored provider API keys are readable.

If that sounds like a bug you've read about before, it's because you have. It's essentially the same flaw as <a href="https://advisories.gitlab.com/npm/9router/CVE-2026-49352/" target="_blank">CVE-2026-49352</a>, a CVSS 9.8 authentication bypass disclosed in 9router - OmniRoute's own predecessor - where the fallback secret was `9router-default-secret-change-me`, affecting versions 0.2.21 up to (but not including) 0.4.45. A public proof-of-concept for that exact bug exists on GitHub. Whether OmniRoute inherited the pattern directly from the fork or reintroduced it independently, the failure mode is identical: a security-critical secret with a public, guessable default is not a secret, and "change-me" in the variable name doesn't help if most people never do.

{{< image "omniroute_ai_gateway_security/omniroute_security_flow.webp" "Diagram showing the four-step attack path: unset JWT_SECRET falls back to a public default, an attacker forges an auth_token cookie, gains a full admin session, and reads stored provider API keys" >}}

### Credentials stored unencrypted by default

OmniRoute does support encrypting stored provider keys with AES-256-GCM, but only if you explicitly set a `STORAGE_ENCRYPTION_KEY` environment variable. Skip that step, which is the default path for anyone who just runs the quickstart command, and your API keys sit on disk unencrypted. Combined with the JWT issue above, that's a second layer of the same problem: sane security is opt-in rather than the default.

### The Socket.dev flag on v3.8.5

In May 2026, the supply-chain scanner Socket.dev flagged version 3.8.5 of the `omniroute` npm package hard enough to block it, citing a low supply-chain score and several high-risk alerts, including AI-detected "potential malware." The specific behavior triggering that flag was real: OmniRoute ships an optional component that installs a custom root certificate into the host OS trust store on Windows, macOS, and Linux, using privileged commands, and can spin up a bundled MITM (man-in-the-middle) server to intercept TLS traffic. Installing a root CA to intercept your own encrypted traffic is exactly the kind of behavior security tooling is built to catch, whatever the intended use case.

Maintainer diegosouzapw responded in <a href="https://github.com/diegosouzapw/OmniRoute/issues/2863" target="_blank">issue #2863</a>, explaining that the flagged capability is a documented, opt-in feature that only activates through explicit action in the local dashboard, not something that runs by default on install. That's a meaningfully different story than silent malware, and no actual malicious payload was ever confirmed. But the maintainer also conceded that two of the six items Socket.dev flagged were genuine vulnerabilities: a silent credential-overwrite path in the Cloud Sync feature (since fixed with HMAC-SHA256 verification) and a flaw in the Keychain Import flow that could expose credentials during import. Both were patched in v3.8.6.

Add it up and you get a fair, if blunt, summary from one of the independent reviews that followed: a hardcoded secret, encryption you have to remember to turn on, and a root-CA-installing feature that a scanner mistook for malware, all maintained day to day by one primary developer despite a long contributor list. That's a normal risk profile for a fast-moving open-source side project. It is not a normal risk profile for something you'd wire into a company's production inference traffic without reading the changelog first.

## Getting it running without repeating its own mistakes

None of this is a reason to skip OmniRoute - the free-tier aggregation is genuinely useful, and every issue above has a documented fix. It's a reason to spend two extra minutes on setup instead of pasting the quickstart command verbatim:

```bash
export JWT_SECRET=$(openssl rand -hex 32)
export STORAGE_ENCRYPTION_KEY=$(openssl rand -hex 32)
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 20128:20128 -v omniroute-data:/app/data \
  -e JWT_SECRET -e STORAGE_ENCRYPTION_KEY \
  diegosouzapw/omniroute:latest
```

That single change closes both the forgeable-cookie problem and the unencrypted-storage problem before you've pasted your first provider API key into the dashboard. Then update to at least v3.8.6, since that's where the two confirmed Socket.dev findings were patched, and leave the MITM/root-CA feature turned off unless you have a specific reason to need it.

## Reaching it from somewhere else with Pinggy

Once OmniRoute is running with your own secrets in place, `localhost:20128` is exactly as reachable as any other local dev server, which is to say: not reachable from anywhere except the machine it's running on. That's fine if you only ever call it from the same box. It's limiting the moment you want to point a coding agent running on a different machine at your gateway, check the dashboard from your phone, or let a teammate use your provider quota without you copy-pasting keys into their laptop too.

A Pinggy tunnel solves that without opening a port on your router or standing up a reverse proxy:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That prints a public HTTPS URL like `https://abc123.a.pinggy.link`. Point a remote coding agent's `OPENAI_BASE_URL` at it, or open it in a browser to check the dashboard, and traffic tunnels straight back to your local OmniRoute instance. The routing, the compression, and the actual model calls still happen through your own configured provider keys; the tunnel only carries the request and response traffic.

Given everything above, treat the tunnel itself as another authentication layer rather than a bypass around OmniRoute's own weak spots. Add HTTP basic auth to the SSH command:

```bash
ssh -p 443 -R0:localhost:20128 a.pinggy.io -t "b:user:temporarypass"
```

Now reaching your gateway from outside requires both a Pinggy-level password and, once through, whatever JWT-based session OmniRoute enforces on its side, assuming you set a real `JWT_SECRET` as covered above. Close the SSH session when you're done rather than leaving the tunnel open around the clock. A temporary link that exists for the duration of one working session is a much smaller target than a permanent one, regardless of how well the app behind it is secured.

## What this is (and isn't) good for

**Good for:** personal use, prototyping, aggregating free-tier API access you'd otherwise leave unused, and pointing a coding agent at your own local gateway from a second machine or a cloud sandbox for the length of a session.

**Not good for:** dropping into a shared team environment or production inference path without hardening it first. A single-maintainer project with a recent history of default-secret and default-unencrypted-storage issues is a reasonable bet for your own side projects and a much harder one to justify to anyone who has to sign off on where your company's API keys live.

## Conclusion

OmniRoute earned its trending-page spot honestly: free access to 500-plus models behind one endpoint, running entirely on hardware you control, is a real and useful thing to want. But the same openness that makes it trivial to spin up in thirty seconds also means the defaults were built for a quick demo, not for facing the internet. Set your own `JWT_SECRET` and `STORAGE_ENCRYPTION_KEY`, keep it updated past v3.8.6, and if you need it reachable from somewhere other than the machine it's running on, put a Pinggy tunnel with its own password in front of it rather than forwarding the port directly. That's roughly five minutes of extra setup for a tool that otherwise wants to save you from typing API keys into four different SDKs for the rest of the year.
