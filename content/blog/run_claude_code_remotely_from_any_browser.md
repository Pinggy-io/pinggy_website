---
title: "Run Claude Code Remotely from Any Browser with Pinggy"
description: "Open a terminal on your home or work machine from any browser with Pinggy Devices, then run Claude Code in it. One install command, no SSH server or open port. Covers setup, background sessions, and Free vs Pro limits."
date: 2026-11-03T10:00:00+05:30
draft: false
tags: ["Claude Code", "remote access", "AI coding agents", "terminal", "Pinggy"]
og_image: "images/run_claude_code_remotely_from_any_browser/run_claude_code_remotely_from_any_browser_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEFjY2VzcyBDbGF1ZGUgQ29kZSBSZW1vdGVseSBmcm9tIEFueSBCcm93c2VyIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiT3BlbiBhIHRlcm1pbmFsIG9uIHlvdXIgaG9tZSBvciB3b3JrIG1hY2hpbmUgZnJvbSBhbnkgYnJvd3NlciB3aXRoIFBpbmdneSBEZXZpY2VzLCB0aGVuIHJ1biBDbGF1ZGUgQ29kZSBpbiBpdC4gT25lIGluc3RhbGwgY29tbWFuZCwgbm8gU1NIIHNlcnZlciBvciBvcGVuIHBvcnQuIENvdmVycyBzZXR1cCwgYmFja2dyb3VuZCBzZXNzaW9ucywgYW5kIEZyZWUgdnMgUHJvIGxpbWl0cy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvcnVuX2NsYXVkZV9jb2RlX3JlbW90ZWx5X2Zyb21fYW55X2Jyb3dzZXIvcnVuX2NsYXVkZV9jb2RlX3JlbW90ZWx5X2Zyb21fYW55X2Jyb3dzZXJfYmFubmVyLndlYnAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0wM1QxMDowMDowMCswNTozMCIsCiAgInRvb2wiOiBbCiAgICB7ICJAdHlwZSI6ICJIb3dUb1Rvb2wiLCAibmFtZSI6ICJQaW5nZ3kgQ0xJIDAuNi4zIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiQ2xhdWRlIENvZGUgMi4xLjMxOCIgfQogIF0sCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIHRoZSBQaW5nZ3kgQ0xJIGFuZCBjb25uZWN0IHRoZSBtYWNoaW5lIiwKICAgICAgInRleHQiOiAiT24gdGhlIG1hY2hpbmUsIHJ1biBjdXJsIC1mc1NMIGh0dHBzOi8vcGluZ2d5LmlvL2luc3RhbGwuc2ggfCBzaCwgb3IgaXJtIGh0dHBzOi8vcGluZ2d5LmlvL2luc3RhbGwucHMxIHwgaWV4IGluIFBvd2VyU2hlbGwgb24gV2luZG93cy4gVGhlIHNjcmlwdCBpbnN0YWxscyB0aGUgUGluZ2d5IENMSSB3aXRob3V0IHN1ZG8gYW5kIHJ1bnMgcGluZ2d5IGRldmljZSBsb2dpbiwgd2hpY2ggc2lnbnMgdGhlIG1hY2hpbmUgaW4gd2l0aCB5b3VyIGVtYWlsIGFuZCBhIDYtZGlnaXQgY29kZSwgYW5kIGNyZWF0ZXMgYSBmcmVlIGFjY291bnQgaWYgdGhlIGVtYWlsIGlzIG5ldy4gVGhlIGRldmljZSBpcyBuYW1lZCBhZnRlciB0aGUgbWFjaGluZSdzIGhvc3RuYW1lLiBJZiB0aGUgZGV2aWNlIGFscmVhZHkgZXhpc3RzIGluIHRoZSBkYXNoYm9hcmQsIGNvcHkgdGhlIGNvbW1hbmQgZnJvbSBpdHMgT3ZlcnZpZXcgdGFiIGluc3RlYWQ6IGl0IGNhcnJpZXMgdGhlIGRldmljZSB0b2tlbiBhbmQgbmVlZHMgbm8gZW1haWwgb3IgY29kZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiS2VlcCB0aGUgZGV2aWNlIGNvbm5lY3RlZCBpbiB0aGUgYmFja2dyb3VuZCIsCiAgICAgICJ0ZXh0IjogIlByZXNzIEN0cmwrQyB0byBzdG9wIHRoZSBmb3JlZ3JvdW5kIGFnZW50LCB0aGVuIHJ1biBwaW5nZ3kgZGV2aWNlIGNvbm5lY3QgLWIsIG9yIHBpbmdneSBkZXZpY2UgY29ubmVjdCAtLXRva2VuIDxUT0tFTj4gLWIgb24gdGhlIGZpcnN0IGNvbm5lY3QuIFRoZSBhZ2VudCBrZWVwcyBvbmUgb3V0Ym91bmQgY29ubmVjdGlvbiB0byB0aGUgUGluZ2d5IGRhc2hib2FyZCBhZnRlciB0aGUgdGVybWluYWwgY2xvc2VzLCBzbyB0aGUgbWFjaGluZSBuZWVkcyBubyBvcGVuIHBvcnQsIHB1YmxpYyBJUCBvciBTU0ggc2VydmVyLiBSdW4gdGhlIGNvbW1hbmQgYWdhaW4gYWZ0ZXIgYSByZWJvb3QuIFN0b3AgdGhlIGFnZW50IHdpdGggcGluZ2d5IGRldmljZSBzdG9wIG9yIHBpbmdneSBkYWVtb24gc3RvcC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiBhIHNoZWxsIGluIHRoZSBicm93c2VyIiwKICAgICAgInRleHQiOiAiSW4gdGhlIFBpbmdneSBkYXNoYm9hcmQsIG9wZW4gUGluZ2d5IERldmljZXMsIHNlbGVjdCB0aGUgZGV2aWNlLCBnbyB0byB0aGUgVGVybWluYWwgdGFiIGFuZCBjbGljayBOZXcgc2hlbGwuIFRoZSBzaGVsbCBydW5zIGFzIHRoZSB1c2VyIHdobyByYW4gcGluZ2d5IGFuZCBrZWVwcyBydW5uaW5nIHdoZW4geW91IGNsb3NlIHRoZSBicm93c2VyIHRhYi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgQ2xhdWRlIENvZGUiLAogICAgICAidGV4dCI6ICJDaGFuZ2UgaW50byB5b3VyIHByb2plY3QgZm9sZGVyIGFuZCBydW4gY2xhdWRlLiBTaWduIGluIHRvIENsYXVkZSBDb2RlIGF0IHRoZSBtYWNoaW5lIGJlZm9yZWhhbmQsIHNpbmNlIHRoZSBicm93c2VyIHNoZWxsIHJ1bnMgYXMgdGhlIHNhbWUgdXNlciBhbmQgdXNlcyB0aGF0IGxvZ2luLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSdW4gbG9uZyB0YXNrcyBhcyBiYWNrZ3JvdW5kIHNlc3Npb25zIiwKICAgICAgInRleHQiOiAiQSBicm93c2VyIHNoZWxsIGVuZHMgYWZ0ZXIgMzAgbWludXRlcyB3aXRoIG5vIGFjdGl2aXR5IG9yIGFmdGVyIDggaG91cnMsIGFuZCBhIHBsYWluIGNsYXVkZSBzZXNzaW9uIGVuZHMgd2l0aCBpdC4gUnVuIGNsYXVkZSAtLWJnIGZvbGxvd2VkIGJ5IHlvdXIgdGFzayBzbyB0aGUgc2Vzc2lvbiBrZWVwcyBydW5uaW5nIHVuZGVyIHRoZSBDbGF1ZGUgQ29kZSBzdXBlcnZpc29yLCB0aGVuIHVzZSBjbGF1ZGUgYWdlbnRzIG9yIGNsYXVkZSBhdHRhY2ggd2l0aCB0aGUgc2Vzc2lvbiBpZCBmcm9tIGFueSBuZXcgc2hlbGwuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---
{{< image "run_claude_code_remotely_from_any_browser/run_claude_code_remotely_from_any_browser_banner.webp" "Headline 'Run Claude Code from any browser' with the Pinggy and Claude Code logos, the install command curl -fsSL https://pinggy.io/install.sh | sh on the left, and the Pinggy dashboard Terminal tab with Claude Code running on the right" >}}

{{< llm-context >}}To access Claude Code remotely with Pinggy - on the machine run `curl -fsSL https://pinggy.io/install.sh | sh` (Windows: `irm https://pinggy.io/install.ps1 | iex`) and sign in with your email, keep it connected with `pinggy device connect -b`, then open the device's Terminal tab at https://dashboard.pinggy.io/pinggy-devices, click New shell, and run `claude`, or `claude --bg "<task>"` for long tasks that must outlive the shell.{{< /llm-context >}}

Access your terminal from anywhere, right in your browser, with Pinggy.

Install the Pinggy CLI on a machine, then open that machine's terminal from the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy dashboard{{< /link >}} on any browser. Run Claude Code in it, or anything else. The machine only makes an outbound connection, so there is no SSH server, open port or public IP to set up.

{{% tldr %}}

1. **Install and sign in:** `curl -fsSL https://pinggy.io/install.sh | sh` (Windows: `irm https://pinggy.io/install.ps1 | iex`). Enter your email and the 6-digit code.
2. **Open the terminal:** go to the <a href="https://dashboard.pinggy.io/pinggy-devices" target="_blank">Pinggy Devices page</a>, click your device, open **Terminal**, and click **New shell**.
3. **Run Claude Code:** `claude`

{{% /tldr %}}


## How it works
{{< iframe src="https://www.youtube.com/embed/FNj9WTlHllY?si=T6sOXWesZyXcpI5f" title="Run Claude Code from Any Browser with Pinggy (No SSH, No Open Ports)" >}}

This feature is called Pinggy Devices, and it arrived in {{< link href="https://github.com/Pinggy-io/cli-js/releases/tag/v0.6.2" >}}Pinggy CLI v0.6.2{{< /link >}} on November 2, 2026. The CLI runs on your machine as an agent and keeps one outbound connection open to the dashboard. Your browser talks to the dashboard, and the dashboard passes your keystrokes down that connection into a shell on the machine. Nothing connects inbound, so it works behind NAT, CGNAT and firewalls.

The shell runs as the user who ran `pinggy`, so `claude` in it uses the files, git config and Claude login that user already has. I ran the whole flow on an Apple Silicon MacBook with Pinggy CLI 0.6.3 and Claude Code 2.1.318. The screenshots come from that run, with emails, tokens and device IDs swapped for placeholders. Limits and plan numbers come from the {{< link href="/docs/devices/" >}}Pinggy Devices docs{{< /link >}}.

## Step 1: Install the Pinggy CLI and sign in

On the machine you want to reach, run:

```bash
curl -fsSL https://pinggy.io/install.sh | sh
```

On Windows, run this in PowerShell instead:

```powershell
irm https://pinggy.io/install.ps1 | iex
```

The script installs the CLI without `sudo`, then runs `pinggy device login`. You don't need a Pinggy account first. Enter your email and type the 6-digit code it sends. You can also click **Approve sign-in** in the email, but only if the page shows the same code your terminal printed. An unknown email gets a new free account, and the machine is added as a device named after its hostname. On Alpine and other musl-based systems, use `npm install -g pinggy` instead.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_install_script_email_sign_in_terminal.webp" "Terminal running the Pinggy install script on macOS: it installs CLI 0.6.3, asks for an email and a 6-digit code, then reports the machine connected as a device and prints a dashboard link" >}}

*Screenshot: the install script on macOS, November 2026. Email, code, link and IDs are placeholders.*

**Already have the device in the dashboard?** Its **Overview** tab has a **Connect this device** card with two commands that already contain the device token:

{{< image "run_claude_code_remotely_from_any_browser/pinggy_dashboard_device_connect_this_device.webp" "Pinggy dashboard device Overview tab with system details, live CPU and memory, and the Connect this device card showing an install command and an Already installed command, each with a token placeholder" >}}

*Screenshot: dashboard.pinggy.io, November 2026. Account, hostname and tokens are placeholders.*

The first, `curl -fsSL https://pinggy.io/install.sh | DEVICE_AGENT_TOKEN=<TOKEN> sh`, installs the CLI and connects the machine with no email and no code, so it works with no keyboard attached. If the CLI is already installed, use the second: `pinggy device connect --token <TOKEN> --manage dashboard.pinggy.io`. The `--manage` option names the dashboard host, and the docs list the same command without it.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_device_connect_token_manage_terminal.webp" "Terminal running pinggy device connect with a token and the manage option, reporting a successful connection as a device and printing the device's dashboard link" >}}

*Screenshot: terminal on macOS, November 2026. Token, email and ID are placeholders.*

The first successful connect saves the token on the machine, so later runs need only `pinggy device connect`.

## Step 2: Keep the device running in the background

After sign-in the agent stays in the foreground until you press `Ctrl+C`. Stop it and reconnect in teh background with `-b`:

```bash
pinggy device connect -b
```

On a machine with no saved token, add it: `pinggy device connect --token <TOKEN> -b`.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_device_connect_background_terminal.webp" "Terminal running pinggy device connect with a token in the background, printing the device id, the dashboard link, the daemon log path and the command to stop it" >}}

*Screenshot: macOS terminal. The CLI also accepted `--b`, as shown; the docs use `-b`. Token, email, ID and username are placeholders.*

The agent runs in the Pinggy daemon, so it outlives the terminal but not a reboot. After a reboot, run `pinggy device connect -b` again. To stop it, run `pinggy device stop`, or `pinggy daemon stop` to stop the whole daemon. The dashboard then shows the device offline.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_daemon_stop_terminal.webp" "Terminal running pinggy daemon stop, which reports the daemon stopped and the background device agent stopped too, so the device shows offline in the dashboard" >}}

*Screenshot: terminal on macOS, November 2026.*

## Step 3: Open the terminal and run Claude Code

Open the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy Devices page{{< /link >}} and click your device. The **Overview** tab shows its hostname, OS, CPU and memory, with live usage.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_device_overview_system_usage.webp" "Pinggy dashboard device Overview tab showing the device online, system details for an Apple M3 Pro Mac, and live CPU, memory, load average and uptime" >}}

*Screenshot: dashboard.pinggy.io, November 2026. The hostname is a placeholder.*

Open the **Terminal** tab and click **New shell**. Each shell gets its own tab. From there it's an ordinary terminal:

```bash
cd ~/code/storefront   # your own project folder
claude
```

{{< image "run_claude_code_remotely_from_any_browser/pinggy_device_terminal_tab_claude_code.webp" "Pinggy dashboard Terminal tab with one shell tab named claude and Claude Code 2.1.318 running in it after answering a short prompt" >}}

*Screenshot: dashboard.pinggy.io, November 2026. The shell runs on the machine; the browser only draws it.*

If Claude Code isn't installed yet, install it from this shell with `curl -fsSL https://claude.ai/install.sh | bash`, but log in while you're still at the machine, because the first launch opens a browser window there. Claude Code has a fallback (press `c` to copy the login URL), but I haven't tried it through the dashboard terminal.

Closing the browser tab doesn't end the shell. Reopen the Terminal tab and the screen is redrawn as you left it.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_device_terminal_tab_claude_code_reply.webp" "Pinggy dashboard Terminal tab where Claude Code 2.1.318 has answered a short greeting typed in the browser, with the shell footer showing /bin/zsh and its process id" >}}

*Screenshot: dashboard.pinggy.io, November 2026, on the first device I enrolled. Device name and account are placeholders.*

## Step 4: Run long tasks in the background

A dashboard shell ends after 30 minutes with no activity, or after 8 hours regardless. A session started with plain `claude` ends with it. For a long task, start a background session instead. A seperate supervisor process runs it, so it keeps working with no terminal attached:

```bash
claude --bg "run the test suite and fix the failing tests in src/billing"
```

On Claude Code 2.1.317, a short test prompt returned at once and printed:

```text
Starting background service…
backgrounded · 5dc70293
  claude agents             list sessions
  claude attach 5dc70293    open in this terminal
  claude logs 5dc70293      show recent output
  claude stop 5dc70293      stop this session
```

From any later shell, `claude agents` lists your sessions, `claude attach 5dc70293` reopens one, and `claude logs 5dc70293` prints its recent output. To detach, press the left arrow key on an empty prompt, or `Ctrl+Z`. A `--bg` session works in its own git worktree under `.claude/worktrees/`. It survives sleep but stops if the machine shuts down.

## Free vs Pro

Every plan, Free included, gets the browser terminal. Prices are from the {{< link href="https://pinggy.io/#prices" >}}Pinggy pricing page{{< /link >}} and limits from the devices docs, checked on November 3, 2026.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Plan</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Price</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Devices</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Terminals per device</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Terminals open across all devices</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Free</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong>Pro</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">$2.50/month billed annually, $3/month billed monthly</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">25</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">3</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">10 per seat</td>
</tr>
</tbody>
</table>

Free is enough for one home machine. Pro's three shells per device is where it gets comfortable: one for Claude, one for the dev server, one for git. Pro also adds persistent tunnels, custom domains and teams, with a 7-day free trial. Enterprise has custom pricing (contact@pinggy.io), and its pricing card lists unlimited devices and terminals.

## How this compares with Remote Control and SSH

{{< link href="https://code.claude.com/docs/en/remote-control" >}}Claude Code Remote Control{{< /link >}} needs a Pro, Max, Ultra, Team or Enterprise subscription (no API keys), and it only reaches a `claude` process that's already running, so someone has to start `claude remote-control` at the machine. SSH needs a server listening and, behind NAT, a tunnel such as `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io`, whose address changes every 60 minutes on the free tier.

A Pinggy Devices shell has neither limit. Start Claude from scratch, restart a dev server, run `git pull`, or use Codex instead, with any Claude login, API keys included. Our {{< link href="/blog/remote_control_claude_code_codex_on_vm/" >}}guide to Claude Code and Codex on a VM{{< /link >}} covers the other two routes in detail.

## Security

The device token sits in `device.json` under `~/.config/pinggy/`, readable only by your user. Per the docs, the agent never logs what you type, and the **Activity** tab lists the device's events with source IP addresses.

Anyone signed in to your Pinggy account can open a shell on your devices, as your user, and run `claude` with your Anthropic login. Turn on 2-factor authentication first, and keep the dashboard's connect commands out of screenshots and chats, since they contain the token. To cut a machine off, delete the device or rotate its token in the dashboard. `pinggy device remove` only forgets the token locally.

## Troubleshooting

- **Terminal tab is greyed out.** The CLI on that machine is too old. Run the install command again.
- **`This machine already runs as device <id> in the background. Stop it first: pinggy device stop`.** A background agent already holds the connection. Stop it before running `login` or `connect` in the foreground.

## Recap

Three commands cover it:

```bash
curl -fsSL https://pinggy.io/install.sh | sh   # install and sign in
pinggy device connect -b                       # keep the machine connected
claude --bg "<your task>"                      # in the browser terminal: a task that outlives the shell
```

Then open the device's **Terminal** tab on the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy Devices page{{< /link >}}, click **New shell**, and start working.
