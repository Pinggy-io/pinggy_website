---
title: "Same Bug, Five Times: Inside Langflow's CVE Streak"
description: "CISA just added Langflow's latest RCE to its exploited vulnerabilities list with a 3-day deadline. It's at least the fifth Langflow CVE with this profile since 2025, and they all trace back to the same default."
date: 2026-08-05T11:30:00+05:30
draft: false
tags: ["Langflow", "security", "CVE", "CISA KEV", "self-hosted", "AI agents", "vulnerability"]
og_image: "images/langflow_cisa_kev_five_cves/langflow_cisa_kev_five_cves_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBDaGVjayBJZiBZb3VyIFNlbGYtSG9zdGVkIExhbmdmbG93IEluc3RhbmNlIElzIEV4cG9zZWQgYW5kIExvY2sgSXQgRG93biIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBjaGVja2luZyB3aGV0aGVyIGEgc2VsZi1ob3N0ZWQgTGFuZ2Zsb3cgZGVwbG95bWVudCBpcyB2dWxuZXJhYmxlIHRvIHRoZSBhdXRvLWxvZ2luIGFuZCBjb2RlLWV4ZWN1dGlvbiBDVkUgY2hhaW4sIHBhdGNoaW5nIGl0LCBhbmQgc2FmZWx5IGV4cG9zaW5nIGl0IHRvIHRoZSBpbnRlcm5ldCBvbmx5IHRocm91Z2ggYW4gYXV0aGVudGljYXRlZCB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNoZWNrIHlvdXIgTGFuZ2Zsb3cgdmVyc2lvbiIsCiAgICAgICJ0ZXh0IjogIlJ1biBsYW5nZmxvdyAtLXZlcnNpb24gb3IgY2hlY2sgdGhlIERvY2tlciBpbWFnZSB0YWcuIFZlcnNpb25zIDEuMC4wIHRocm91Z2ggMS4xMC4wIGFyZSB2dWxuZXJhYmxlIHRvIENWRS0yMDI2LTkxOTguIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlVwZ3JhZGUgdG8gYSBwYXRjaGVkIHJlbGVhc2UiLAogICAgICAidGV4dCI6ICJVcGRhdGUgdG8gTGFuZ2Zsb3cgMS4xMC4xIG9yIGxhdGVyLCB3aGljaCBjbG9zZXMgdGhlIGF1dG9fbG9naW4gYW5kIHZhbGlkYXRlL2NvZGUgZXhwbG9pdCBjaGFpbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRGlzYWJsZSBhdXRvLWxvZ2luIGFuZCBzZXQgcmVhbCBjcmVkZW50aWFscyIsCiAgICAgICJ0ZXh0IjogIlNldCBMQU5HRkxPV19BVVRPX0xPR0lOPWZhbHNlIGFuZCBjb25maWd1cmUgYSByZWFsIHN1cGVydXNlciB1c2VybmFtZSBhbmQgcGFzc3dvcmQgc28gdGhlIGluc3RhbmNlIHJlcXVpcmVzIGF1dGhlbnRpY2F0aW9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJOZXZlciBleHBvc2UgTGFuZ2Zsb3cgZGlyZWN0bHkgdG8gdGhlIGludGVybmV0IiwKICAgICAgInRleHQiOiAiS2VlcCBMYW5nZmxvdyBib3VuZCB0byBsb2NhbGhvc3Qgb3IgeW91ciBwcml2YXRlIG5ldHdvcmsuIElmIHlvdSBuZWVkIHJlbW90ZSBhY2Nlc3MsIHB1dCBhbiBhdXRoZW50aWNhdGVkIHR1bm5lbCBzdWNoIGFzIFBpbmdneSBpbiBmcm9udCBvZiBpdCBpbnN0ZWFkIG9mIGZvcndhcmRpbmcgdGhlIHJhdyBwb3J0LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "langflow_cisa_kev_five_cves/langflow_cisa_kev_five_cves_banner.webp" "Timeline graphic showing Langflow's repeated CISA KEV entries and the auto_login-to-exec() exploit chain behind CVE-2026-9198" >}}

On August 4, 2026, CISA added CVE-2026-9198 to its Known Exploited Vulnerabilities catalog and gave federal agencies until August 7 to patch it. Three days. That short a window on the KEV catalog usually means one thing: CISA already has evidence of active exploitation and doesn't expect defenders to have much time before more of it happens.

The vulnerability is in {{< link href="https://github.com/langflow-ai/langflow" >}}Langflow{{< /link >}}, the open-source visual builder for LangChain-style AI agents that's become a default choice for people who want to wire up LLMs, tools, and vector stores without writing glue code by hand. And CVE-2026-9198 is not Langflow's first appearance on CISA's list. It's not even its fourth.

{{% tldr %}}

- **CVE-2026-9198** chains two Langflow endpoints, `/api/v1/auto_login` (hands out a SUPERUSER token with no credentials) and `/api/v1/validate/code` (runs whatever Python it's given via `exec()`), into unauthenticated remote code execution. CVSS 9.8. Added to <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank">CISA's KEV catalog</a> on August 4, 2026 with a 3-day patch deadline.
- It's at least the fifth Langflow CVE with this profile since May 2025, when <a href="https://www.recordedfuture.com/blog/langflow-cve-2025-3248" target="_blank">CVE-2025-3248</a> was used to deploy the Flodrix botnet.
- <a href="https://censys.com/advisory/cve-2025-3248" target="_blank">Censys</a> found roughly 7,000 Langflow instances reachable from the public internet; Sysdig watched a separate Langflow RCE get exploited within 20 hours of disclosure.
- The root cause every time: `LANGFLOW_AUTO_LOGIN` defaults to on, and the app assumes a trusted, single-user network that doesn't exist once the port is public.
- If you self-host Langflow (or anything similar) and need remote access, don't forward the raw port. Put an authenticated tunnel in front of it, for example `ssh -p 443 -R0:localhost:7860 -t free.pinggy.io b:user:pass` with <a href="https://pinggy.io" target="_blank">Pinggy</a>.

{{% /tldr %}}

## The bug, again

CVE-2026-9198 is a two-step chain. Langflow ships with an `/api/v1/auto_login` endpoint that, in its default configuration, hands out a valid SUPERUSER session token to any caller who asks, no credentials required. Once you have that token, you can hit `/api/v1/validate/code`, an endpoint meant to let the UI sanity-check a custom component's Python before running it in a flow. That endpoint runs the code you send it through `exec()`.

Chain the two together and an attacker with nothing but network access gets arbitrary Python execution as the application's superuser. CVSS 9.8. CWE-94, improper control of generation of code. No login page to guess, no session cookie to steal, just two HTTP requests against whatever port Langflow is listening on.

That specific chain is new to CVE-2026-9198, but the shape of the bug is not new to Langflow at all.

## This is the fifth time

Pull the last fifteen months of Langflow's security advisories and CISA's KEV entries together and a pattern falls out immediately: unauthenticated network access, some code-execution surface Langflow exposes on purpose for legitimate use, and an attacker skipping straight to the part where they run their own code.

| When | CVE | What broke | Outcome |
|---|---|---|---|
| May 5, 2025 | CVE-2025-3248 | Missing auth on `/api/v1/validate/code`, abused via Python decorators and default arguments | Added to KEV; used to deploy the Flodrix botnet, per {{< link href="https://www.recordedfuture.com/" >}}Recorded Future{{< /link >}} |
| March 16, 2026 | CVE-2026-33017 | `/api/v1/build_public_tmp/{flow_id}/flow` accepted attacker-supplied flow data instead of the stored flow, routing custom Python into an unsandboxed `exec()` | Exploited in the wild within 20 hours of disclosure, per Sysdig's threat research team |
| June 8, 2026 | CVE-2026-5027 | Path traversal in `POST /api/v2/files`; the filename from the form body was written to disk unsanitized | Active exploitation confirmed by VulnCheck's canary sensors the same day patches shipped |
| July 7, 2026 | CVE-2026-55255 | IDOR on `/api/v1/responses`; any authenticated user could run someone else's flow by swapping in their `flow_id` | Added to KEV, 3-day remediation deadline |
| August 4, 2026 | CVE-2026-9198 | `auto_login` + `validate/code` chain described above | Added to KEV, 3-day remediation deadline |

Five, and that's being conservative. CISA also flagged a sixth Langflow flaw in between, CVE-2026-0770, an untrusted-control-sphere bug that let unauthenticated attackers get code execution as root. Security teams that have been tracking Langflow's CVE count for their own asset inventories put the KEV total at five or six depending on which advisories you count as distinct incidents versus re-triage of the same root cause.

Either way, the throughline across nearly all of them is the same: a feature that's genuinely useful for a single developer running Langflow on their own laptop becomes an open door the moment the same instance is reachable from the internet.

## It's not a sandboxing problem, it's a defaults problem

Langflow's own documentation is honest about this. `LANGFLOW_AUTO_LOGIN` defaults to `true`, which the docs describe as intentional: it's meant for single-tenant setups and automated pipelines where asking for a password on every request would just be friction. Every request under auto-login mode gets treated as the same superuser. The docs go on to say, in more or less these words, don't expose this to the internet without putting real authentication in front of it.

That's a reasonable default for the thing Langflow is trying to be: a fast, low-friction way to prototype an agent locally. It's a bad default for the thing a lot of people actually do with it, which is `docker run -p 7860:7860` on a cloud VM, or forward the port on their router, because they want to show a teammate or a client what they built. {{< link href="https://censys.com/" >}}Censys{{< /link >}} counted roughly 7,000 Langflow instances reachable from the public internet when researchers went looking during the CVE-2026-5027 wave, most of them in North America. A separate Shodan sweep the same month turned up over 1,200 more with the specific exploit paths open. None of those instances needed a password to reach the parts of the app that matter.

And Langflow isn't alone in this. In June, researchers at Check Point found a SQL injection in LangGraph's SQLite checkpointer, and Cyera documented a path traversal in LangChain-core's prompt loader. Different frameworks, different code, same underlying assumption: these tools store agent state, accept file uploads, and load configuration from inputs that were never meant to be adversarial, because for most of their life nobody was pointing an internet scanner at them. That assumption stopped being true somewhere around the moment "build an AI agent this weekend" became a mainstream hobby.

## The fix that keeps not sticking

Every one of these advisories ends with roughly the same three lines of remediation: upgrade to the patched version, set `LANGFLOW_AUTO_LOGIN=false`, and put a real authentication layer in front of the instance if it needs to be reachable remotely. All three are correct. None of them are the default, which is why the same failure mode keeps generating new CVEs instead of one CVE and a permanent fix.

If you're running Langflow, or honestly any self-hosted AI tool that assumes a trusted, single-user network, the version bump matters less than the second question: how is this thing reachable from outside your machine right now? `docker run -p 7860:7860` and port-forwarding on your router both put the raw application directly on the internet, unauthenticated endpoints and all, indistinguishable from the setup every one of these CVEs was written against.

If you actually need remote access, that's a different problem than "expose the port," and it has a cheap, boring answer: put the tunnel itself behind authentication, so nothing about your app's own auth story matters to an internet scanner. With {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}, that's one extra flag on the same SSH command you'd use to expose the port in the first place:

```bash
# Don't do this from a cloud VM's security group or your router:
# docker run -p 7860:7860 langflowai/langflow:latest

# Instead, keep Langflow bound to localhost, then tunnel it with a password gate in front:
ssh -p 443 -R0:localhost:7860 -t free.pinggy.io b:youruser:apassword
```

Anyone hitting the public URL gets a browser auth prompt before a single request reaches Langflow's `auto_login` endpoint, patched or not. It's not a replacement for actually patching, and it's not a substitute for setting `LANGFLOW_AUTO_LOGIN=false` if you're leaving the tunnel open for more than a demo. But it means a scanner finding your URL between the time a new CVE drops and the time you get around to upgrading doesn't turn into an entry on somebody else's incident timeline.

## The pattern is the story

CISA's three-day deadlines are for federal agencies, but the signal is useful for everyone else running this stuff: when the turnaround is that short, exploitation is already happening, and the researchers watching internet-wide scanning traffic keep reporting the same thing, first attempts within hours of disclosure, sometimes before the patch has even fully rolled out to package registries. Langflow's maintainers have shipped fixes fast every single time. The problem was never patch velocity. It's that "runs great on localhost, don't you dare expose it" keeps losing to how people actually deploy the things they build over a weekend.
