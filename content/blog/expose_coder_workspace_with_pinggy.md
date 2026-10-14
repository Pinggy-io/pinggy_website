---
title: "Get a Public URL From a Self-Hosted Coder Workspace Without Wildcard DNS"
description: "Coder's built-in port sharing needs a wildcard DNS record and a matching TLS certificate before it works. Here's how to get a public HTTPS URL from any self-hosted Coder workspace with one SSH command, no DNS changes required."
date: 2026-09-20T16:10:00+05:30
draft: false
tags: ["Coder", "self-hosted", "remote development", "port forwarding", "Pinggy"]
categories: ["Technology", "Self-Hosted", "Developer Tools"]
og_image: "images/expose_coder_workspace_with_pinggy/expose_coder_workspace_with_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEdldCBhIFB1YmxpYyBVUkwgRnJvbSBhIFNlbGYtSG9zdGVkIENvZGVyIFdvcmtzcGFjZSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBleHBvc2luZyBhbiBhcHAgcnVubmluZyBpbnNpZGUgYSBzZWxmLWhvc3RlZCBDb2RlciB3b3Jrc3BhY2UgdG8gdGhlIGludGVybmV0IHdpdGggYSBQaW5nZ3kgU1NIIHR1bm5lbCwgd2l0aG91dCBjb25maWd1cmluZyB3aWxkY2FyZCBETlMgb3IgYSBUTFMgY2VydGlmaWNhdGUuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2V4cG9zZV9jb2Rlcl93b3Jrc3BhY2Vfd2l0aF9waW5nZ3kvZXhwb3NlX2NvZGVyX3dvcmtzcGFjZV93aXRoX3BpbmdneV9iYW5uZXIud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJPcGVuIGEgdGVybWluYWwgaW5zaWRlIHRoZSBDb2RlciB3b3Jrc3BhY2UsIGZvciBleGFtcGxlIHdpdGggJ2NvZGVyIHNzaCBteXdvcmtzcGFjZScgb3IgdGhlIGJ1aWx0LWluIHdlYiB0ZXJtaW5hbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU3RhcnQgdGhlIGFwcCBzbyBpdCBsaXN0ZW5zIG9uIGEgbG9jYWwgcG9ydCBpbnNpZGUgdGhlIHdvcmtzcGFjZSwgZm9yIGV4YW1wbGUgcG9ydCAzMDAwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJSdW46IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvcHkgdGhlIHByaW50ZWQgaHR0cHM6Ly94eHh4LnJ1bi5waW5nZ3ktZnJlZS5saW5rIFVSTCBhbmQgc2hhcmUgaXQgb3IgdXNlIGl0IGFzIGEgd2ViaG9vayB0YXJnZXQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIk9wdGlvbmFsbHkgYWRkIGJhc2ljIGF1dGggKGI6dXNlcjpwYXNzKSBvciBhIFBpbmdneSBQcm8gdG9rZW4gZm9yIGEgdHVubmVsIHRoYXQgZG9lcyBub3QgZXhwaXJlIGFmdGVyIDYwIG1pbnV0ZXMuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "expose_coder_workspace_with_pinggy/expose_coder_workspace_with_pinggy_banner.webp" "Coder's port forwarding documentation page listing the four supported ways to reach a workspace port" >}}

{{< link href="https://github.com/coder/coder" >}}Coder{{< /link >}} is a self-hosted platform for spinning up cloud development environments from Terraform: EC2 boxes, Kubernetes pods, or plain Docker containers, provisioned in seconds and torn down when idle. It has picked up over 15,000 GitHub stars, and its pitch has shifted hard toward AI coding agents lately: run Claude Code, Codex, or your own agent inside a sandboxed workspace on infrastructure you control, instead of handing an agent SSH keys on your laptop. AGPL-3.0, no vendor lock-in, works with your own Terraform templates.

It works well for what it's built for. Where it gets awkward is the moment you want to hand someone a link.

{{% tldr %}}
1. Coder's dashboard port sharing (owner / authenticated / public) only works once the deployment has a wildcard DNS record and a matching TLS certificate, configured via `CODER_WILDCARD_ACCESS_URL`. Without it, sharing a port outside the Coder Desktop mesh does not work at all.
2. Coder Desktop, `coder port-forward`, and `coder ssh -L` only get the port to your own machine. None of them produce a link you can hand to a teammate, a client, or a webhook provider.
3. From inside the workspace's own shell, run:
   ```bash
   ssh -p 443 -R0:localhost:3000 free.pinggy.io
   ```
   That's a public HTTPS URL in about two seconds, no DNS record, no certificate, no admin config.
4. Add basic auth for anything sensitive: `ssh -p 443 -R0:localhost:3000 free.pinggy.io -t -- b:user:pass`
{{% /tldr %}}

{{< llm-context >}}To get a public HTTPS URL for an app running inside a Coder workspace with Pinggy - start the app on a port inside the workspace (for example port 3000), open a terminal in that same workspace, then run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL.{{< /llm-context >}}

## Why sharing a Coder workspace port is harder than it looks

Coder's own docs are upfront about this. Port forwarding {{< link href="https://coder.com/docs/user-guides/workspace-access/port-forwarding" >}}documentation{{< /link >}} lists four supported methods: Coder Desktop, the CLI, the dashboard, and plain SSH. The first three all route through Coder's own encrypted WireGuard-based mesh, and the CLI form looks like this:

```bash
coder port-forward myworkspace --tcp 8000:8080
```

That forwards workspace port 8080 to port 8000 on *your* machine. Useful if you're the one connecting, useless if you're trying to send a link to someone who has never touched your Coder deployment.

The dashboard's port-sharing feature is the one that actually produces a URL, and it comes with three sharing levels: `owner` (private, the default), `authenticated` (any signed-in user on the deployment), and `public` (anyone with the link). To get any of these working, though, the {{< link href="https://coder.com/docs/admin/networking/wildcard-access-url" >}}admin setup docs{{< /link >}} spell out a real prerequisite: a wildcard DNS record pointing at the Coder server, and a TLS certificate that covers it.

```
*.coder.example.com    A    <your-coder-server-ip>
```

Set that up, point `CODER_WILDCARD_ACCESS_URL` at it, and each workspace app gets its own subdomain, something like `8080--main--myworkspace--john.coder.example.com`. There's even a documented gotcha buried in there: DNS labels top out at 63 characters, so if your app name, agent name, workspace name, and username add up to more than that, port forwarding via the dashboard silently stops working. And on Coder's paid tiers, the maximum sharing level a template is allowed to expose is itself an admin-controlled setting, so even `public` sharing can be locked down centrally.

None of this is unreasonable for a company running Coder for forty engineers behind a real domain. It's a lot of infrastructure for someone trying Coder on a home server, a single VPS, or a side project, where DNS and certificates were never part of the plan.

## What you actually have inside the workspace

Here's the part the docs don't dwell on: every Coder workspace is a normal Linux box (or container) with a shell, and almost every template image ships with an SSH client already installed, because that's what git clones and dependency installs already need. Outbound port 443 is open for the same reason. That's everything required to run a tunnel from inside the workspace itself, no Coder configuration involved.

{{< image "expose_coder_workspace_with_pinggy/coder_wildcard_vs_pinggy_diagram.webp" "Diagram comparing Coder's dashboard port sharing, which is blocked without a wildcard DNS record and TLS certificate, against a Pinggy SSH tunnel started from inside the workspace shell, which produces a public HTTPS URL immediately" >}}

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} forwards a public address to a local port over an ordinary SSH connection. Open a terminal in the workspace (`coder ssh myworkspace`, the web terminal, or a VS Code integrated terminal connected to the workspace) and run:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:3000 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:3000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:3000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

It prints back an `https://xxxx.run.pinggy-free.link` URL with a real, automatically issued TLS certificate. No signup, nothing to install beyond the SSH client that was already there. Paste that URL into a GitHub webhook config, send it to a client for a quick look at a preview build, or open it on your phone. It has nothing to do with your Coder deployment's DNS, and it doesn't touch the dashboard's sharing settings at all.

The free tunnel is good for about 60 minutes per connection, which covers a demo call or a webhook test. For anything that needs to survive a workspace restart, use a {{< link href="https://dashboard.pinggy.io" >}}Pinggy Pro token{{< /link >}}, which removes the timeout and can hold a persistent subdomain:

```bash
ssh -p 443 -R0:localhost:3000 <token>@pro.pinggy.io
```

## How this compares to what Coder ships

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Method</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">What it needs</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Link for someone outside your Coder deployment?</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Coder Desktop</td>
  <td style="border:1px solid #ddd;padding:0.45em;">The Coder Desktop app, joined to the deployment's mesh</td>
  <td style="border:1px solid #ddd;padding:0.45em;">No</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;"><code>coder port-forward</code></td>
  <td style="border:1px solid #ddd;padding:0.45em;">Coder CLI installed locally</td>
  <td style="border:1px solid #ddd;padding:0.45em;">No</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">SSH port forwarding (<code>coder ssh -L</code>)</td>
  <td style="border:1px solid #ddd;padding:0.45em;">SSH access to the workspace</td>
  <td style="border:1px solid #ddd;padding:0.45em;">No</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Dashboard port sharing</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Wildcard DNS record + TLS cert on the deployment</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Yes, once an admin sets up the wildcard domain</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Pinggy tunnel from the workspace shell</td>
  <td style="border:1px solid #ddd;padding:0.45em;">One SSH command, outbound port 443</td>
  <td style="border:1px solid #ddd;padding:0.45em;">Yes, immediately</td>
</tr>
</tbody>
</table>

The first three keep everything inside your own perimeter, which is exactly right for day-to-day development. The last two are the only ones that produce something you can actually send. Coder's version needs an admin, a domain, and a certificate to get there. The tunnel needs a terminal.

## Making it automatic when the workspace starts

If a workspace repeatedly needs to be reachable (a webhook receiver you're building, a preview server you keep sharing), it's worth wiring the tunnel into the Coder template itself rather than typing the SSH command by hand every time. Coder templates start background processes through the `startup_script` attribute on the `coder_agent` resource:

```hcl
resource "coder_agent" "main" {
  os             = "linux"
  arch           = "amd64"
  startup_script = <<-EOT
    #!/bin/bash
    npm install -g pinggy
    pinggy -p 443 -R0:localhost:3000 --token "$PINGGY_TOKEN" --notui > /tmp/pinggy.log 2>&1 &
  EOT
}
```

Use a Pro token here rather than the anonymous free tunnel. Free tunnels hand out a new random URL every time they reconnect, which is fine for a one-off share but useless for something you want at a stable address every time the workspace boots.

## Don't skip auth on anything that matters

A public URL is public. If the app behind it isn't already gated, add a layer at the tunnel:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io -t -- b:user:pass
```

Or restrict it to specific source ranges, which is closer to what the wildcard-domain setup would have given you through Coder's own authenticated sharing tier:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io -t -- w:203.0.113.0/24
```

Both flags go after `--` in the SSH form. If you're testing a webhook, skip auth on that specific tunnel since the sender (GitHub, Stripe, whoever) won't have credentials to send back, but don't leave it running longer than the test needs.

## Wrapping up

Coder's sanctioned paths to a shareable link assume you're running a deployment with a real domain and someone willing to own its DNS and certificates. That's a fair assumption for a company. It's not a fair assumption for a workspace on a $6 VPS you spun up to try self-hosting an AI coding agent over the weekend. The workspace already has everything it needs to reach the internet on its own: a shell, an SSH client, and outbound 443. One command turns that into a public HTTPS URL without going anywhere near the Coder admin panel.

If you're setting up a broader self-hosted AI agent stack alongside Coder, {{< link href="/blog/self_host_ai_agents_using_n8n_and_pinggy/" >}}self-hosting AI agents with n8n and Pinggy{{< /link >}} and {{< link href="/blog/best_hardware_for_self_hosted_coding_agents/" >}}picking hardware for self-hosted coding agents{{< /link >}} cover the rest of that setup.
