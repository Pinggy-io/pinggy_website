---
title: "OmniRoute: A Free AI Gateway's Real Security Track Record"
description: "OmniRoute puts 500+ AI models behind one free, self-hosted endpoint and has passed 32,000 GitHub stars. Its first commit briefly repeated 9router's exact hardcoded-JWT CVE before a same-day fix, still ships an admin password of CHANGEME if you don't set one, and a real Socket.dev flag hit v3.8.5 - here's what actually still matters today, and how to share it safely with Pinggy."
date: 2026-07-24T11:20:00+05:30
lastmod: 2026-07-27T11:20:00+05:30
draft: false
tags: ["OmniRoute", "AI gateway", "self-hosted AI", "LLM router", "open source security", "supply chain security", "Pinggy", "9router"]
categories: ["Technology", "AI Tools", "Security"]
og_image: "images/omniroute_ai_gateway_security/omniroute_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNhZmVseSBTZWxmLUhvc3QgT21uaVJvdXRlIGFuZCBSZWFjaCBJdCB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBzZXR0aW5nIE9tbmlSb3V0ZSdzIGluaXRpYWwgZGFzaGJvYXJkIHBhc3N3b3JkIGFuZCBzaGFyaW5nIGl0cyBsb2NhbCBkYXNoYm9hcmQgYW5kIEFQSSBvdmVyIGEgcHVibGljIEhUVFBTIFVSTCB1c2luZyBQaW5nZ3kuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNldCBJTklUSUFMX1BBU1NXT1JEIGJlZm9yZSB5b3VyIGZpcnN0IHJlYWwgcnVuIiwKICAgICAgInRleHQiOiAiT21uaVJvdXRlIGF1dG8tZ2VuZXJhdGVzIGl0cyBvd24gSldUX1NFQ1JFVCwgQVBJX0tFWV9TRUNSRVQsIGFuZCBTVE9SQUdFX0VOQ1JZUFRJT05fS0VZIG9uIGZpcnN0IGxhdW5jaCwgYnV0IGlmIHlvdSBkb24ndCBzZXQgSU5JVElBTF9QQVNTV09SRCBpdCBsb2dzIHRoZSBkYXNoYm9hcmQgYWRtaW4gcGFzc3dvcmQgYXMgdGhlIGxpdGVyYWwgZGVmYXVsdCBDSEFOR0VNRS4gU2V0IHlvdXIgb3duIElOSVRJQUxfUEFTU1dPUkQgYmVmb3JlIHlvdXIgZmlyc3QgcmVhbCB1c2UsIG9yIGNoYW5nZSBpdCBpbW1lZGlhdGVseSBpbiBTZXR0aW5ncyBhZnRlciBmaXJzdCBsb2dpbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgT21uaVJvdXRlIiwKICAgICAgInRleHQiOiAiUnVuIG5weCBvbW5pcm91dGVAbGF0ZXN0IG9yIGRvY2tlciBydW4gLXAgMjAxMjg6MjAxMjggZGllZ29zb3V6YXB3L29tbmlyb3V0ZSB0byBzdGFydCB0aGUgZ2F0ZXdheS4gVGhlIGRhc2hib2FyZCBhbmQgT3BlbkFJLWNvbXBhdGlibGUgQVBJIGFyZSBib3RoIHNlcnZlZCBmcm9tIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjguIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkV4cG9zZSBwb3J0IDIwMTI4IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMDEyOCBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgdHVubmVscyB0byB5b3VyIGxvY2FsIE9tbmlSb3V0ZSBpbnN0YW5jZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWRkIEhUVFAgYmFzaWMgYXV0aCB0byB0aGUgdHVubmVsIiwKICAgICAgInRleHQiOiAiQXBwZW5kIC10IFwiYjp1c2VyOnBhc3N3b3JkXCIgdG8gdGhlIFNTSCBjb21tYW5kIHNvIHRoZSB0dW5uZWwgaXRzZWxmIHJlcXVpcmVzIGEgcGFzc3dvcmQsIGFkZGluZyBhIGxheWVyIG9mIHByb3RlY3Rpb24gaW5kZXBlbmRlbnQgb2YgT21uaVJvdXRlJ3Mgb3duIGF1dGhlbnRpY2F0aW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJVc2UgdGhlIHB1YmxpYyBVUkwgYW5kIHRlYXIgaXQgZG93biB3aGVuIGRvbmUiLAogICAgICAidGV4dCI6ICJPcGVuIHRoZSBwaW5nZ3kubGluayBVUkwgZnJvbSBhbm90aGVyIGRldmljZSB0byByZWFjaCB0aGUgZGFzaGJvYXJkIG9yIHJvdXRlIEFQSSBjYWxscyB0aHJvdWdoIGl0LCB0aGVuIGNsb3NlIHRoZSBTU0ggc2Vzc2lvbiB3aGVuIHlvdSdyZSBmaW5pc2hlZCBpbnN0ZWFkIG9mIGxlYXZpbmcgdGhlIHR1bm5lbCBydW5uaW5nIGluZGVmaW5pdGVseS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "omniroute_ai_gateway_security/omniroute_banner.webp" "OmniRoute: A Free AI Gateway's Real Security Track Record" >}}

OmniRoute wants to be the last AI API key you ever configure: one endpoint, 290-plus providers, 500-plus models, and a command that gets you a working dashboard in about thirty seconds. It showed up on GitHub's trending page for TypeScript in late June, broke into the all-languages trending list a few weeks later, and hasn't slowed down since - past 32,000 stars as of late July, credited to more than 500 contributors.

Dig into its security history and there's a real story there, just not the one a quick skim of GitHub issues suggests. OmniRoute's very first commit briefly shipped the exact same hardcoded authentication bug that later became a CVSS 9.8 CVE in its own predecessor, 9router, then fixed it the same day. A later npm release genuinely got flagged by the supply-chain scanner Socket.dev and had two confirmed vulnerabilities patched within days. Neither of those is a live risk in anything you'd install today, and current builds auto-generate their own session secrets and encryption keys on first launch, no configuration required. One thing from that history is still true right now: the dashboard's own admin password defaults to the literal string `CHANGEME` if you never set one. Here's the actual timeline, what still applies, and how to share a self-hosted instance safely with Pinggy.

{{% tldr %}}
1. **What it is**: a free, MIT-licensed, self-hosted AI gateway - one OpenAI-compatible endpoint in front of 290+ providers and 500+ models, from <a href="https://github.com/diegosouzapw/OmniRoute" target="_blank">diegosouzapw/OmniRoute</a>.
2. **Run it**: `npx omniroute@latest` or `docker run -p 20128:20128 diegosouzapw/omniroute`, then open `http://localhost:20128`. Current builds auto-generate their own `JWT_SECRET`, `API_KEY_SECRET`, and `STORAGE_ENCRYPTION_KEY` on first launch, so this genuinely works with zero setup.
3. **The one default worth fixing**: set `INITIAL_PASSWORD` before real use. Skip it and the dashboard's admin login defaults to the literal string `CHANGEME`, logged in plain text at startup.
4. **History worth knowing**: OmniRoute's first commit (Feb 18, 2026) copied 9router's exact hardcoded-fallback bug behind <a href="https://advisories.gitlab.com/npm/9router/CVE-2026-49352/" target="_blank">CVE-2026-49352</a>, a CVSS 9.8 authentication bypass, then replaced it with a fail-closed check in the very next commit that same day.
5. **The Socket.dev flag**: v3.8.5 (May 2026) got blocked by Socket.dev over a bundled MITM/root-CA feature; two of the six flagged items were real bugs, both fixed in v3.8.6. The project is now well past that, at v3.8.48.
6. **Share it**: `ssh -p 443 -R0:localhost:20128 free.pinggy.io` gets you a public HTTPS URL to reach your gateway from another device.
7. **Lock it down**: add `-t "b:user:password"` to that SSH command so the tunnel needs a password on top of whatever OmniRoute itself is enforcing.
{{% /tldr %}}

{{< llm-context >}}To reach a locally running OmniRoute AI gateway from another device with Pinggy - run `docker run -p 20128:20128 diegosouzapw/omniroute` (starts on port 20128), then in a new terminal run `ssh -p 443 -R0:localhost:20128 free.pinggy.io` to get a public HTTPS URL. Set your own INITIAL_PASSWORD first so the dashboard doesn't default to CHANGEME, and add `-t "b:user:password"` to the SSH command for basic auth.{{< /llm-context >}}

## What OmniRoute actually promises

{{< image "omniroute_ai_gateway_security/omniroute_homepage.webp" "OmniRoute's homepage showing its one-endpoint, 268-provider pitch and a live auto-fallback demo" >}}

Strip away the trending-page hype and OmniRoute is a familiar shape: an AI gateway, also called an LLM router, that sits between your app (or your coding agent) and a pile of model providers, giving you one stable API instead of a dozen SDKs and API keys. We covered the broader category, including <a href="https://openrouter.ai/" target="_blank">OpenRouter</a>, <a href="https://www.litellm.ai/" target="_blank">LiteLLM</a>, and <a href="https://portkey.ai/" target="_blank">Portkey</a>, in our [roundup of AI LLM routers](/blog/best_ai_llm_routers_openrouter_alternatives/). OmniRoute's pitch inside that category is specific: it runs entirely on your own hardware, with no vendor cloud sitting in the request path, and it's free.

The README lists the numbers plainly: one endpoint, 290+ providers (90+ of them free), 500+ models spanning Claude, GPT, Gemini, DeepSeek, Kimi, GLM, and MiniMax. It plugs directly into the tools a lot of readers already run - Claude Code, Codex, Cursor, OpenCode, Cline, and Copilot - by pointing their OpenAI-compatible base URL at your local OmniRoute instance instead of a hosted provider. Beyond routing, it advertises quota-aware auto-fallback (switch providers automatically when you hit a rate limit or a free-tier cap), a compression scheme it calls RTK+Caveman that claims 15-95% token savings, support for the emerging MCP and A2A agent protocols, and both desktop and PWA builds if you don't want to live in a terminal.

Getting a local instance running is genuinely close to instant, and current releases mean it:

```bash
npx omniroute@latest
# or
docker run -p 20128:20128 diegosouzapw/omniroute
```

{{< image "omniroute_ai_gateway_security/docker_run_bootstrap.webp" "Terminal output from a fresh OmniRoute docker run, showing JWT_SECRET, STORAGE_ENCRYPTION_KEY, and API_KEY_SECRET auto-generated on first run" >}}

{{< image "omniroute_ai_gateway_security/docker_container_running.webp" "OmniRoute container running in Docker Desktop, mapped to port 20128 with normal CPU and memory usage" >}}

Either command starts a server on port 20128, serving a management dashboard at `http://localhost:20128` and an OpenAI-compatible API at `http://localhost:20128/v1`. For anything you intend to keep running, the project's own Docker guide recommends a named container with a persistent volume:

```bash
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 20128:20128 -v omniroute-data:/app/data \
  diegosouzapw/omniroute:latest
```

That's the whole appeal in two commands: no signup, no billing page, a dashboard where you paste in whichever provider API keys you already have (including the free tiers most people never bother collecting), and one endpoint your tools can all share.

## Why it's spreading this fast

Three things are compounding here. First, the free-tier aggregation is a real, tangible benefit - most developers have a Gemini key from a free-tier signup, maybe a GLM or Kimi key from a promo, and no interest in wiring four separate SDKs together to use them. OmniRoute collapses that into one endpoint. Second, it plugs into the exact tools this audience already runs day to day - if you're already pointing Claude Code or Cursor at a base URL, swapping in a local gateway is a five-minute change, not a new workflow. Third, the project didn't start from zero: it began as a fork of a project called <a href="https://github.com/decolua/9router" target="_blank">9router</a>, itself a TypeScript port of the Go project CLIProxyAPI, which gave it a working core and a chunk of contributors on day one. The repository's own tagline now credits more than 500 contributors.

The star count reflects all of that, and it's climbed fast: from a June 29 debut on GitHub's TypeScript trending list to past 32,000 stars by late July. That is a real signal that a lot of people found the pitch compelling. It is a much weaker signal about whether the code underneath has been through the kind of scrutiny you'd want before handing it your Anthropic, OpenAI, and Google API keys, which is exactly why it's worth checking what actually happened in its security history rather than trusting a star count either way.

## The one-day scare: OmniRoute's first commit and CVE-2026-49352

9router's own security history is unambiguous. <a href="https://advisories.gitlab.com/npm/9router/CVE-2026-49352/" target="_blank">CVE-2026-49352</a> is a CVSS 9.8 authentication bypass: 9router used the publicly known literal string `9router-default-secret-change-me` as the fallback JWT secret for every dashboard session whenever the operator never set `JWT_SECRET`. Because that string is committed in the public repository and identical across every install that skips setup, any unauthenticated attacker could forge a valid session cookie, walk into the dashboard with full admin access, and read out stored API keys. It affected 9router versions 0.2.21 up to (but not including) 0.4.45, and a public proof-of-concept exists on GitHub.

Given that OmniRoute is a direct fork of 9router, it's worth checking whether the same bug came along for the ride. It did, briefly. OmniRoute's first commit, tagged as v1.0.0 on February 18, 2026, contains this exact line in its login route:

```javascript
const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "omniroute-default-secret-change-me"
);
```

That's not a similar bug, it's the identical fallback string, carried over from the fork. What actually matters is what happened next: the very next commit to that same file, made the same day, replaced it with a fail-closed check instead of a guessable default. Every release since, and the project is now many versions past that point at v3.8.48, has shipped that version instead. No GitHub Security Advisory or CVE was ever filed against OmniRoute itself for this, most likely because the exploitable window lasted hours rather than the months it took to notice and fix the same bug in 9router.

Current code does more than just remove the literal string. Running the actual docker image confirms it: on a fresh container, the boot log shows OmniRoute generating its own credentials rather than falling back to anything guessable.

`JWT_SECRET`, `STORAGE_ENCRYPTION_KEY`, and `API_KEY_SECRET` are all auto-generated on first launch and persisted to `/app/data/server.env` (or `~/.omniroute/server.env` outside Docker). The dashboard itself confirms this in a banner the first time you load it:

{{< image "omniroute_ai_gateway_security/omniroute_ui_localhost.webp" "OmniRoute's dashboard home page showing a zero-config mode banner confirming auto-generated encryption keys" >}}

That's a meaningfully different design than 9router's, and it's the reason the "quickstart in thirty seconds, no config" experience is still both real and safe today: the zero-config path generates its own unique secrets rather than falling back to ones anybody could look up. Neither `JWT_SECRET` nor `STORAGE_ENCRYPTION_KEY` is the gap it used to be.

## Where the real gap still is: the initial dashboard password

Look one line further down that same boot log, though, and there's a real, current default worth fixing:

```
[bootstrap] ⚠ INITIAL_PASSWORD is not set - using default 'CHANGEME'. Change it in Settings!
```

Skip setting `INITIAL_PASSWORD`, which is the default path for anyone who just runs the quickstart command, and the dashboard's admin account password is the literal string `CHANGEME`, not a randomly generated value like the session secrets above. OmniRoute logs a warning about it, but nothing stops you from logging in with it and never changing it, which means anyone who reaches your dashboard, over a network, a misconfigured tunnel, or a shared machine, and tries that exact string gets in.

Unlike the JWT issue, this isn't a historical footnote, it's current, documented, reproducible behavior on the version shipping today. If you're the only one who can ever reach `localhost:20128`, that's a manageable risk. If you're exposing the dashboard to anyone else, including through a Pinggy tunnel, it's worth the one extra environment variable:

```bash
export INITIAL_PASSWORD=$(openssl rand -base64 24)
```

## The Socket.dev flag on v3.8.5

In May 2026, Socket.dev flagged version 3.8.5 of the `omniroute` npm package hard enough to block it, citing a low supply-chain score and AI-detected "potential malware." The trigger was real: OmniRoute ships an optional, dashboard-activated feature that installs a root certificate and can run a bundled MITM server to intercept TLS traffic, exactly the kind of behavior scanners are built to catch.

Maintainer diegosouzapw responded in <a href="https://github.com/diegosouzapw/OmniRoute/issues/2863" target="_blank">issue #2863</a>, confirming the feature is opt-in and never activates by default, so it wasn't silent malware. Two of the six flagged items, though, were genuine bugs, a credential-overwrite path in Cloud Sync and a Keychain Import flaw, both patched a day later in v3.8.6. The project has since shipped 40+ more releases and is now at v3.8.48.

Put together, that's a fair summary of a fast-moving open-source project's actual risk profile: one bug inherited from a fork and caught within a day, one real supply-chain scare that turned out to be mostly a false-positive on a genuinely risky opt-in feature (plus two real minor bugs fixed just as fast), and one still-live default, an admin password of `CHANGEME`, that's a single environment variable away from being closed. That's a very different picture than either "this is malware" or "this has a critical unpatched CVE," and it's worth knowing the difference before you decide how to run it.

## Getting it running with the one setting that still matters

None of this is a reason to skip OmniRoute, the free-tier aggregation is genuinely useful, and its current defaults for session secrets and storage encryption are solid. It is a reason to add one environment variable instead of pasting the quickstart command verbatim:

```bash
export INITIAL_PASSWORD=$(openssl rand -base64 24)
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 20128:20128 -v omniroute-data:/app/data \
  -e INITIAL_PASSWORD \
  diegosouzapw/omniroute:latest
```

That closes the CHANGEME gap before anyone else can reach your dashboard. Beyond that, keep the install reasonably current (anything from v3.8.6 onward already includes the Socket.dev fixes, and the project releases often, it's already well past v3.8.48) and leave the MITM/root-CA feature turned off unless you have a specific reason to need it.

## Reaching it from somewhere else with Pinggy

Once OmniRoute is running, `localhost:20128` is exactly as reachable as any other local dev server, which is to say: not reachable from anywhere except the machine it's running on. That's fine if you only ever call it from the same box. It's limiting the moment you want to point a coding agent running on a different machine at your gateway, check the dashboard from your phone, or let a teammate use your provider quota without you copy-pasting keys into their laptop too.

A Pinggy tunnel solves that without opening a port on your router or standing up a reverse proxy:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That prints a public HTTPS URL, along with a live request log for anything that comes through it:

{{< image "omniroute_ai_gateway_security/pinggy_tunnel_logs.webp" "Pinggy tunnel dashboard showing the public HTTPS URLs and a live log of dashboard requests routed through the tunnel" >}}

Open that URL in a browser and OmniRoute's own Quick Start card updates to show it, since the dashboard detects the base URL you're actually being reached on:

{{< image "omniroute_ai_gateway_security/omniroute_running_on_pinggy_url.webp" "OmniRoute's dashboard loaded through a public Pinggy tunnel URL, with the Quick Start card showing that URL as the base URL for API clients" >}}

Point a remote coding agent's `OPENAI_BASE_URL` at that same URL and traffic tunnels straight back to your local OmniRoute instance. The routing, the compression, and the actual model calls still happen through your own configured provider keys; the tunnel only carries the request and response traffic.

Even with current defaults being reasonably solid, treat the tunnel itself as another authentication layer rather than something that only matters if the app behind it has a bug, especially since this is exactly the kind of exposure that turns a `CHANGEME` password from a local inconvenience into something reachable from anywhere. Add HTTP basic auth to the SSH command:

```bash
ssh -p 443 -R0:localhost:20128 a.pinggy.io -t "b:user:temporarypass"
```

Now reaching your gateway from outside requires both a Pinggy-level password and whatever password you've actually set inside OmniRoute. Close the SSH session when you're done rather than leaving the tunnel open around the clock. A temporary link that exists for the duration of one working session is a much smaller target than a permanent one, regardless of how solid the app behind it is.

## What this is (and isn't) good for

**Good for:** personal use, prototyping, aggregating free-tier API access you'd otherwise leave unused, and pointing a coding agent at your own local gateway from a second machine or a cloud sandbox for the length of a session.

**Not good for:** dropping into a shared team environment or a production inference path without setting `INITIAL_PASSWORD` first. A single-maintainer-led project releasing dozens of versions a month is a reasonable bet for your own side projects; treating any one release as permanently audited is a harder case to make to anyone who has to sign off on where your company's API keys live.

## Conclusion

OmniRoute earned its trending-page spot honestly, and its security history is more reassuring than a first glance at its GitHub issues suggests: the inherited 9router bug lasted a day, session secrets now auto-generate safely, and the Socket.dev flag turned out to be a mostly false-positive with a fast fix. The one default still worth changing is `INITIAL_PASSWORD`, since skipping it leaves your dashboard login as the literal string `CHANGEME`. Set that, put a Pinggy tunnel with its own password in front if you need remote access, and you're good.
