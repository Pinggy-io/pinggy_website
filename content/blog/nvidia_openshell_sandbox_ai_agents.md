---
title: "NVIDIA OpenShell: Sandbox AI Agents With a Default-Deny Network Policy"
description: "How NVIDIA OpenShell confines AI coding agents with Landlock, seccomp and a policy-checked egress path, keeps API keys out of the agent, and hot-reloads network rules."
date: 2026-09-30T18:00:00+05:30
lastmod: 2026-09-30T18:00:00+05:30
draft: false
tags: ["OpenShell", "AI agents", "security", "open source"]
og_image: "images/nvidia_openshell_sandbox_ai_agents/nvidia_openshell_sandbox_ai_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIk5WSURJQSBPcGVuU2hlbGw6IFNhbmRib3ggQUkgQWdlbnRzIFdpdGggYSBEZWZhdWx0LURlbnkgTmV0d29yayBQb2xpY3kiLAogICJkZXNjcmlwdGlvbiI6ICJIb3cgTlZJRElBIE9wZW5TaGVsbCBjb25maW5lcyBBSSBjb2RpbmcgYWdlbnRzIHdpdGggTGFuZGxvY2ssIHNlY2NvbXAgYW5kIGEgcG9saWN5LWNoZWNrZWQgZWdyZXNzIHBhdGgsIGtlZXBzIEFQSSBrZXlzIG91dCBvZiB0aGUgYWdlbnQsIGFuZCBob3QtcmVsb2FkcyBuZXR3b3JrIHJ1bGVzLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9udmlkaWFfb3BlbnNoZWxsX3NhbmRib3hfYWlfYWdlbnRzL252aWRpYV9vcGVuc2hlbGxfc2FuZGJveF9haV9hZ2VudHNfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0wOS0zMFQxODowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTA5LTMwVDE4OjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvbnZpZGlhX29wZW5zaGVsbF9zYW5kYm94X2FpX2FnZW50cy8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkFJIGFnZW50IHNlY3VyaXR5IiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJOVklESUEgT3BlblNoZWxsLCBBSSBhZ2VudCBzYW5kYm94LCBMYW5kbG9jaywgc2VjY29tcCwgZGVmYXVsdC1kZW55IG5ldHdvcmsgcG9saWN5LCBzYW5kYm94IGNvZGluZyBhZ2VudHMiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTGFuZGxvY2siLCAiZGVzY3JpcHRpb24iOiAiTGludXggc2VjdXJpdHkgbW9kdWxlIHRoYXQgcmVzdHJpY3RzIHdoaWNoIGZpbGVzIGEgcHJvY2VzcyBjYW4gYWNjZXNzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTmV0d29yayBwb2xpY3kiLCAiZGVzY3JpcHRpb24iOiAiUGVyLWJpbmFyeSwgcGVyLWhvc3QgYWxsb3cgcnVsZXMgZW5mb3JjZWQgYnkgdGhlIE9wZW5TaGVsbCBzdXBlcnZpc29yLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQ3JlZGVudGlhbCBpbmplY3Rpb24iLCAiZGVzY3JpcHRpb24iOiAiUmVhbCBBUEkga2V5cyBhcmUgYWRkZWQgdG8gYXBwcm92ZWQgcmVxdWVzdHMgb3V0c2lkZSB0aGUgc2FuZGJveC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBvbGljeSBwcm92ZXIiLCAiZGVzY3JpcHRpb24iOiAiU01ULWJhc2VkIGNoZWNrIHRoYXQgYSBwb2xpY3kgY2hhbmdlIHN0YXlzIHdpdGhpbiBhIGJvdW5kYXJ5IHBvbGljeS4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "nvidia_openshell_sandbox_ai_agents/nvidia_openshell_sandbox_ai_agents_banner.webp" "OpenShell: a sandbox for AI agents, with a coding agent in a sandbox, a policy check, and the internet" >}}

NVIDIA's OpenShell (Apache 2.0, about 11.4k GitHub stars as of 30 September 2026) runs an AI agent inside a sandbox where every file read, system call and outbound connection is checked against a YAML policy. The default is deny. When the agent hits something the policy doesn't allow, OpenShell blocks it, drafts a rule, and waits for you to approve or reject it. The real API keys never enter the sandbox at all.

That last part is the interesting one. Most agent sandboxes stop at "run it in a container". OpenShell also decides which host a request may reach, which binary is allowed to make it, and which HTTP methods it can use, and only then attaches the credential.

{{% tldr %}}
1. OpenShell isolates an agent with **Landlock for files and seccomp for network calls**, and the only way out of the sandbox is a channel to a supervisor that checks policy.
2. **Network rules are per binary, per host, and can be limited to HTTP methods**, so `curl` can `GET` from `api.github.com` while a `POST` from the same binary is refused.
3. **Filesystem and process rules are fixed when the sandbox starts.** Network rules hot-reload while the agent runs.
4. **Agents never see real credentials.** A provider injects them into requests bound for approved endpoints only.
5. A policy prover uses an SMT solver to check that a proposed change stays inside a boundary policy, and exits non-zero with a counterexample when it doesn't.
{{% /tldr %}}

I could not start a sandbox for this post: the machine I wrote it on has no running Docker daemon, and OpenShell needs Docker, Podman or host virtualization. Every command and output below comes from the {{< link href="https://docs.nvidia.com/openshell/latest/index.html" >}}OpenShell docs{{< /link >}} and the README, not from my own run. The version I read is the 0.1.x line.

## The problem with running an agent as you

A coding agent that can install packages and call APIs runs with your privileges by default. It can read `~/.ssh`, it can `curl` your data anywhere, and it holds your API key in an environment variable that any prompt-injected command can print. If you have read about [agent hijacking through MCP](/blog/agentjacking_ai_coding_agents_sentry_mcp/), you know the failure mode: the agent is not malicious, it is obedient to text it should not have trusted.

A plain container helps with the filesystem, but its network is usually wide open and the secrets are still inside it. OpenShell's pitch is that the boundary should be enforced from outside the agent's reach, in the kernel and in a supervisor process the agent cannot touch.

## How a request leaves the sandbox

OpenShell has three parts. The gateway is the control plane: it authenticates you, stores sandbox state, and is the only component that signs credentials, each bound to one sandbox instance. The sandbox holds the agent as a child process, knows which program made each request, and enforces the kernel controls. The supervisor sits on the trusted side, checks requests against policy, supplies credentials, resolves DNS and opens the approved connection.

Per the {{< link href="https://docs.nvidia.com/openshell/latest/about/architecture.html" >}}architecture docs{{< /link >}}, one outbound request goes like this:

1. The agent opens a TCP connection or makes a DNS query.
2. The sandbox uses seccomp user notification to catch it before it leaves, and identifies which binary made the call.
3. The request travels over an authenticated HTTP/2 channel to the supervisor.
4. The supervisor checks policy and, if allowed, injects the credential for that endpoint.
5. The supervisor opens the connection and relays the traffic.
6. Every other route out is denied by an outer network fence.

{{< image "nvidia_openshell_sandbox_ai_agents/openshell_request_flow.webp" "Sequence diagram: an agent connects to the supervisor, the supervisor checks policy and adds the real token before relaying to api.github.com, while direct egress is denied" >}}

*The supervisor is the only way out, and it attaches the credential after the policy check.*

The design is fail-closed. The docs say the agent can't run before its controls are confirmed, so a failure to apply a rule stops the sandbox instead of leaving it open.

## The policy file and what is fixed at startup

A policy is a YAML file with `version: 1` and up to five sections. The split that matters is when each one is enforced:

| Section | What it controls | Enforced by | Changeable while running |
|---|---|---|---|
| `filesystem_policy` | Paths the agent can read, or read and write | Landlock LSM in the kernel | No |
| `landlock` | Fallback if a filesystem rule can't be applied | Sandbox runtime | No |
| `process` | User and group the agent runs as | Docker or Podman at creation | No |
| `network_policies` | Which binary can reach which host, port and HTTP method | Supervisor | Yes |
| `network_middlewares` | Inspection and transformation of traffic | Supervisor | Yes |

When several policies exist, OpenShell picks in this order: the gateway-wide policy, the sandbox's saved policy, the policy baked into the sandbox image, then its own restrictive default. Providers add their own rules on top, and the merged result is the effective policy.

{{< image "nvidia_openshell_sandbox_ai_agents/openshell_policy_layers.webp" "OpenShell policy sections grouped into those that hot-reload while running and those fixed at sandbox start" >}}

*Network rules are the only part of the policy you can change while the agent is running.*

Fixing the filesystem at startup is a sensible tradeoff. Landlock rulesets can only get stricter once applied, so you can't widen them from outside. If the agent needs another directory, you restart it.

## Watching the default deny work

The {{< link href="https://docs.nvidia.com/openshell/latest/tutorials/first-network-policy.html" >}}first network policy tutorial{{< /link >}} is the shortest way to see the model. Create a sandbox with no providers attached:

```bash
openshell sandbox create --name demo --no-auto-providers
```

Inside it, an outbound call fails, because nothing is allowed yet:

```bash
curl -s https://api.github.com/zen
# curl: (56) Received HTTP code 403 from proxy after CONNECT
```

The sandbox log records the reason as `network connections not allowed by policy`. Now allow that one binary to read that one host:

```bash
openshell policy update demo \
  --rule-name github_api \
  --binary /usr/bin/curl \
  --add-endpoint api.github.com:443:read-only:rest:enforce \
  --wait
```

That produces this rule, live, without a restart:

```yaml
network_policies:
  github_api:
    endpoints:
      - host: api.github.com
        port: 443
        protocol: rest
        enforcement: enforce
        access: read-only
```

`GET`, `HEAD` and `OPTIONS` now succeed. A `POST`, `PUT` or `DELETE` to the same host returns a `403` with `"error":"policy_denied"`. Because the rule is keyed on `/usr/bin/curl`, a Python script in the same sandbox still can't reach GitHub. That per-binary scoping is what a plain firewall allowlist can't give you.

## Approving what the agent asks for

You don't have to write every rule up front. In {{< link href="https://docs.nvidia.com/openshell/latest/about/run-your-first-agent.html" >}}Run Your First Agent{{< /link >}}, the docs launch OpenCode against a free OpenRouter model:

```bash
openshell profile import \
  --url https://raw.githubusercontent.com/NVIDIA/OpenShell/main/providers/openrouter.yaml

openshell provider create --name openrouter --type openrouter --from-existing

openshell sandbox create \
  --name my-agent \
  --from ghcr.io/anomalyco/opencode:latest \
  --provider openrouter \
  -- opencode -m openrouter/nvidia/nemotron-3.5-lightning:free
```

`--from-existing` reads `OPENROUTER_API_KEY` from your shell and hands it to the gateway. The agent's sandbox gets a placeholder, and the supervisor swaps in the real key only on requests to OpenRouter.

When the agent tries something the policy doesn't cover, OpenShell denies it and drafts a rule. You review the queue from another terminal:

```bash
openshell rule get my-agent --status pending
openshell rule approve my-agent --chunk-id <chunk-id>
openshell rule reject my-agent --chunk-id <chunk-id> --reason "Not needed for this task."
```

An approved rule hot-reloads into the running sandbox, and the agent can retry. It is a slower loop than `--dangerously-skip-permissions`, and that is the point: you decide per host instead of per session.

## Checking a policy change with the prover

Reading YAML diffs to spot a new credentialed route is error-prone. The {{< link href="https://docs.nvidia.com/openshell/latest/how-it-works/policies/prover.html" >}}policy prover{{< /link >}} does that comparison with an SMT solver. It checks two things: that a candidate policy stays inside a boundary policy, and that a proposed network rule doesn't open risky access such as cloud metadata endpoints or credential destinations.

```bash
openshell-prover check candidate.yaml --boundary boundary.yaml
```

If the candidate allows writes to `/tmp` and the boundary doesn't, you get a counterexample instead of a vague warning:

```text
result: exceeds_boundary
coverage: domains=filesystem,network_l4,network_rest,process,landlock
counterexample: filesystem write /tmp
```

The exit codes are `0` for `within_boundary`, `1` for `exceeds_boundary`, and `3` for `unsupported` or `inconclusive` (timeout, or a policy feature the prover can't model). That makes it usable as a CI gate on a shared policy repo. The `inconclusive` case is worth knowing about: a complex policy can time out, and a script that treats only `1` as failure would let it through.

## What to know before adopting it

- It is 0.1.x. The project ships a {{< link href="https://docs.nvidia.com/openshell/latest/upgrade/0-1-0" >}}0.1.0 upgrade guide{{< /link >}} and had 337 open issues on 30 September 2026, so expect changes.
- Platform support: Linux, macOS on Apple Silicon, and Windows through WSL 2, which is marked experimental. Landlock and seccomp are Linux features, so on macOS the sandbox runs inside a Linux VM or container.
- On Kubernetes you deploy the gateway with Helm, and your CNI must enforce `NetworkPolicy`, or the outer network fence is not there.
- Telemetry is on by default and anonymous, limited to operational counts. Set `OPENSHELL_TELEMETRY_ENABLED=false` on the gateway to turn it off.
- SDKs exist for Python (`uv add openshell`), TypeScript, Go and Rust, if you want to create sandboxes from your own code instead of the CLI.

A sandbox limits damage. It does not make a prompt-injected agent trustworthy, and an approved rule for a host you shouldn't have approved is still your mistake. The value is that the mistake is one reviewable line of YAML, not a leaked home directory.

## Conclusion

To try it, run the two README commands on a machine with Docker, then follow the network policy tutorial until you see the `403` turn into a `200` for `GET` and stay a `403` for `POST`. That ten-minute loop shows the model better than any description. After that, put your real agent behind a policy and read the pending-rule queue for a day before you approve anything broad.
