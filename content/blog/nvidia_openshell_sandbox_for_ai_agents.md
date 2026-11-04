---
title: "NVIDIA OpenShell: Run AI Coding Agents in a Policy-Enforced Sandbox"
description: "How NVIDIA OpenShell sandboxes AI agents with Landlock, seccomp and a deny-by-default network proxy, and how to write your first policy so an agent can read the GitHub API but not post to it."
date: 2026-10-24T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["OpenShell", "AI agents", "security", "Docker", "open source"]
og_image: "images/nvidia_openshell_sandbox_for_ai_agents/nvidia_openshell_sandbox_for_ai_agents_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIk5WSURJQSBPcGVuU2hlbGw6IFJ1biBBSSBDb2RpbmcgQWdlbnRzIGluIGEgUG9saWN5LUVuZm9yY2VkIFNhbmRib3giLAogICJkZXNjcmlwdGlvbiI6ICJIb3cgTlZJRElBIE9wZW5TaGVsbCBzYW5kYm94ZXMgQUkgYWdlbnRzIHdpdGggTGFuZGxvY2ssIHNlY2NvbXAgYW5kIGEgZGVueS1ieS1kZWZhdWx0IG5ldHdvcmsgcHJveHksIGFuZCBob3cgdG8gd3JpdGUgeW91ciBmaXJzdCBwb2xpY3kgc28gYW4gYWdlbnQgY2FuIHJlYWQgdGhlIEdpdEh1YiBBUEkgYnV0IG5vdCBwb3N0IHRvIGl0LiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9udmlkaWFfb3BlbnNoZWxsX3NhbmRib3hfZm9yX2FpX2FnZW50cy9udmlkaWFfb3BlbnNoZWxsX3NhbmRib3hfZm9yX2FpX2FnZW50c19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTI0VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjRUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9udmlkaWFfb3BlbnNoZWxsX3NhbmRib3hfZm9yX2FpX2FnZW50cy8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkFJIFNlY3VyaXR5IiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJOVklESUEgT3BlblNoZWxsLCBBSSBhZ2VudCBzYW5kYm94LCBzYW5kYm94IEFJIGNvZGluZyBhZ2VudHMsIExhbmRsb2NrLCBzZWNjb21wLCBkZW55LWJ5LWRlZmF1bHQgbmV0d29yayBwb2xpY3kiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiT3BlblNoZWxsIiwgImRlc2NyaXB0aW9uIjogIk5WSURJQSdzIG9wZW4tc291cmNlIHJ1bnRpbWUgdGhhdCBydW5zIEFJIGFnZW50cyBpbiBwb2xpY3ktZW5mb3JjZWQgc2FuZGJveGVzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTGFuZGxvY2siLCAiZGVzY3JpcHRpb24iOiAiTGludXggc2VjdXJpdHkgbW9kdWxlIHRoYXQgY29uZmluZXMgYSBwcm9jZXNzIHRvIGRlY2xhcmVkIGZpbGVzeXN0ZW0gcGF0aHMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJzZWNjb21wIiwgImRlc2NyaXB0aW9uIjogIkxpbnV4IHN5c2NhbGwgZmlsdGVyIHVzZWQgdG8gYmxvY2sgcHJpdmlsZWdlIGVzY2FsYXRpb24gcGF0aHMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJOZXR3b3JrIHBvbGljeSIsICJkZXNjcmlwdGlvbiI6ICJEZW55LWJ5LWRlZmF1bHQgcnVsZXMgbWF0Y2hlZCBvbiBob3N0LCBwb3J0LCBiaW5hcnksIEhUVFAgbWV0aG9kIGFuZCBwYXRoLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "nvidia_openshell_sandbox_for_ai_agents/nvidia_openshell_sandbox_for_ai_agents_banner.webp" "Sandbox your AI agent: OpenShell lets an agent send a GET to api.github.com and returns 403 for a POST" >}}

An AI coding agent that can run shell commands can also `curl` your secrets to anywhere. {{< link href="https://github.com/NVIDIA/OpenShell" >}}NVIDIA OpenShell{{< /link >}} is an Apache 2.0 runtime that puts the agent in a sandbox where everything it can touch is written down in a YAML policy: which paths it can read and write, which user it runs as, and which hosts, ports, HTTP methods and binaries it can use on the network. Anything not listed is denied, and the network rules can be changed while the agent is running.

It is young. The docs are at v0.1.5 (0.1.x, with weekly stable releases), so read this as a tour of how it works and what it asks of you, not as a recommendation to hand it production credentials tomorrow.

{{% tldr %}}
1. OpenShell runs each agent in a sandbox and puts three kernel-level controls around it: **Landlock for files, seccomp plus a privilege drop for processes, and a policy-checked proxy for every network connection**.
2. Network access is **deny by default, matched on host, port and the calling binary**, and it can go down to HTTP method and path, so `GET api.github.com` can be allowed while `POST` is refused.
3. The agent only ever holds a **placeholder credential**. The real key is swapped in by the supervisor on requests to endpoints the policy allows.
4. Network rules **hot-reload**. Filesystem and process rules are fixed when the sandbox is created.
5. It needs Docker 28+, Podman 5, Kubernetes or a microVM, and a Linux kernel with **Landlock ABI 3 (Linux 6.2 or newer)**. As of October 24, 2026 the repo has about 19.2k stars.
{{% /tldr %}}

## What it protects you from

An agent like Claude Code, OpenCode or a home-grown loop does three risky things on your behalf: it reads files, it runs programs, and it talks to the network with your credentials. A prompt injection in a web page or an issue comment can turn any of those against you. The usual answer is "run it in a container", but a plain container still has a wide-open network and usually has your API keys in its environment.

OpenShell's pitch is narrower and more useful: keep the agent running with real tools, but make the boundary explicit and reviewable. The policy is a version-controllable YAML file, so "what can this agent do" becomes something you diff in a pull request.

Throughout this post the worked example is one agent, OpenCode, in one sandbox called `demo`, and one question: can it read the GitHub API without being able to write to it?

## The pieces: gateway, sandbox, supervisor

The {{< link href="https://docs.nvidia.com/openshell/latest/about/architecture" >}}architecture page{{< /link >}} names four parts.

- **Gateway.** The control plane. It authenticates users, stores sandbox state, hands out policy and providers.
- **Sandbox.** The place the untrusted agent runs. It identifies which program is making each request (from `/proc`) but makes no decisions.
- **Supervisor.** The trusted side. It checks each request against policy, adds credentials where policy allows, resolves DNS, opens the real connection and relays traffic.
- **Compute driver.** Creates the sandbox on Docker, Podman, Kubernetes or a microVM and builds an outer network fence that denies all egress except the channel to the supervisor.

{{< image "nvidia_openshell_sandbox_for_ai_agents/openshell_request_flow.webp" "Sequence diagram of one request from an agent through the sandbox and supervisor to api.github.com, with a refused request returning 403" >}}

*Every connection the agent makes is checked by the supervisor before it leaves.*

The request path, from the docs: the agent opens a TCP connection or does a DNS lookup -> the sandbox identifies the calling program -> the request goes over a single mutually authenticated HTTP/2 connection to the supervisor -> the supervisor checks it against policy and adds any allowed credential -> if allowed, the supervisor opens the real connection. The outer fence blocks every other path, so the agent cannot reach the gateway, DNS or private addresses on its own.

## The three layers of enforcement

This is the table worth remembering. Each layer uses a different kernel or proxy mechanism, and they differ in when they can change.

{{< image "nvidia_openshell_sandbox_for_ai_agents/openshell_enforcement_layers.webp" "Four bands: network and credentials hot-reload, filesystem and process rules are set at sandbox creation" >}}

*Network and credential rules hot-reload; filesystem and process rules need a new sandbox.*

**Filesystem.** Landlock, a Linux security module, confines the agent to declared paths. By default `/usr`, `/lib`, `/etc` and `/var/log` are read-only, and the working directory plus `/tmp` are read-write. You add more under `filesystem_policy.read_only` and `read_write`. Landlock needs ABI 3, which arrived in Linux 6.2, and startup fails if the baseline can't be enforced. The `compatibility` setting is `best_effort` by default, which can skip policy paths that don't exist; `hard_requirement` refuses to start instead.

**Process.** The workload runs as an unprivileged user (`sandbox`, or a numeric ID; root is always rejected). Seccomp blocks `mount`, `pivot_root`, `bpf`, `perf_event_open`, `userfaultfd`, module loading and kexec at startup, and at runtime it blocks `ptrace`, `memfd_create`, `io_uring_setup`, `setns` and others. Sockets are limited to `AF_UNIX`, `AF_NETLINK` (route only) and the brokered `AF_INET`/`AF_INET6`. None of this is configurable.

**Network.** Every outbound connection goes through a CONNECT proxy, which checks the destination host and port and the calling binary. Binaries are pinned by SHA256 on first use, so replacing `/usr/bin/curl` with something else makes the rule stop matching. Command-line paths never authorize anything. Loopback, link-local and cloud metadata addresses are always blocked, even with `allowed_ips`.

## Install and create a sandbox

The quickstart is two commands. I could not run them for this post (the environment I wrote it in has no Docker daemon), so the commands and outputs below come from the OpenShell docs and README, not from my terminal.

```bash
curl -LsSf https://raw.githubusercontent.com/NVIDIA/OpenShell/main/install.sh | sh
openshell sandbox create --name demo
```

The installer sets up the CLI and a local gateway. The default sandbox image is minimal Ubuntu with no agent in it. To run a real agent, the docs use OpenCode with a free OpenRouter model:

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

`--from-existing` reads `OPENROUTER_API_KEY` from your shell and stores it in the provider. Inside the sandbox the agent sees an opaque placeholder, which only resolves on requests to hosts, ports and paths the provider profile authorizes. Host support is Linux (Debian/Ubuntu, x86_64 and aarch64) and macOS on Apple Silicon through Docker Desktop. Windows through WSL 2 is marked experimental.

## Write your first network policy

The tutorial in the docs is the best way to see deny-by-default in action. Create a sandbox with nothing allowed, then try a request from inside it:

```bash
openshell sandbox create --name demo --from registry.example.com/team/agent-tools:1.0 --no-auto-providers
```

```bash
# inside the sandbox
curl -s https://api.github.com/zen
```

```text
curl: (56) Received HTTP code 403 from proxy after CONNECT
```

On the host, the sandbox log names exactly what was refused (abridged here):

```bash
openshell logs demo --since 5m --source sandbox
```

```text
NET:OPEN [MED] DENIED /usr/bin/curl(64) -> api.github.com:443 [reason:network connections not allowed by policy]
```

Now allow `curl` to read from the GitHub API, and nothing else:

```bash
openshell policy update demo \
  --rule-name github_api \
  --binary /usr/bin/curl \
  --add-endpoint api.github.com:443:read-only:rest:enforce \
  --wait
```

That command is shorthand for this policy fragment:

```yaml
network_policies:
  github_api:
    endpoints:
      - host: api.github.com
        port: 443
        protocol: rest
        enforcement: enforce
        access: read-only
    binaries:
      - path: /usr/bin/curl
```

No restart is needed. The same `curl` GET now succeeds. A write is refused at the HTTP layer, because `protocol: rest` makes the proxy parse the request and `access: read-only` only permits safe methods:

```bash
# inside the sandbox
curl -s -X POST https://api.github.com/repos/octocat/hello-world/issues \
    -H "Content-Type: application/json" -d '{"title":"oops"}'
```

The proxy answers with a 403 and a JSON body whose fields include `"error":"policy_denied"`, `"policy":"github_api"` and the rule that matched, `POST /repos/octocat/hello-world/issues`. If you omit `protocol: rest`, host, port and binary are still checked but any method and path is allowed. That is the most common mistake the best-practices page lists.

## Letting the agent ask for access

Writing every rule by hand gets old fast, so there is a policy advisor. It is off by default. Turn it on with `openshell settings set --global --key agent_policy_proposals_enabled --value true --yes`, and when the proxy denies an inspected HTTP request, the agent is pointed to a local API where it can submit a rule scoped to host, port, binary, method and path. Proposals can only add rules.

You review them from the host:

```bash
openshell rule get my-agent --status pending
openshell rule approve my-agent --chunk-id <chunk-id>
openshell rule reject my-agent --chunk-id <chunk-id> --reason "Not needed for this task."
```

Before a proposal reaches you, a policy prover compares what the sandbox could reach with and without the rule, and flags risky destinations such as private IPs and wildcard hosts. Flagged proposals can't be approved automatically. There is an opt-in `auto` approval mode, and I would not turn it on until I had watched a few weeks of manual approvals.

## Where it still asks you to be careful

The docs are unusually direct about the sharp edges, and they are worth repeating.

- `enforcement` defaults to `audit`, which logs violations and **forwards the traffic anyway**. Start there to learn what an agent needs, then switch to `enforce`.
- Broad binary globs such as `/**` mean any binary can use the endpoint.
- `tls: skip` disables credential rewriting and HTTP inspection for that endpoint.
- `allowed_ips` on private ranges reopens SSRF and DNS rebinding paths toward your internal network.
- Operator approvals last only until the sandbox is recreated.
- Filesystem and process rules can't change at runtime. Changing them means a new sandbox.
- Kernel support is probed at startup and fails closed. A distro kernel with backported Landlock still has to pass the same checks.

It is also pre-1.0. Releases are weekly, with security fixes backported to the latest and previous minor, and interfaces marked experimental can change in any patch.

## Trying it on your own agent

A sensible first week, following the docs' recommended workflow:

1. Create a sandbox with `enforcement: audit` and a minimal policy.
2. Run your agent on a real task and read `openshell logs <name> --source sandbox` for what it tried to reach.
3. Add narrow endpoints, each with a specific binary, `protocol: rest` and explicit rules.
4. Switch to `enforce` once the logs are quiet, and set `compatibility: hard_requirement` on the filesystem policy.
5. Diff the policy file into your repo so changes get reviewed like code.

The repo also ships `examples/sandbox-policy-quickstart/demo.sh`, an automated version of the tutorial above. The docs show OpenCode and Pi as examples; for any other agent you bring your own container image and attach the provider it needs, then run the same audit-then-enforce loop.
