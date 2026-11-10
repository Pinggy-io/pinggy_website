---
title: "Run OpenCode Remotely from Any Browser with Pinggy"
description: "Open a terminal on your own machine from any browser with Pinggy Devices and run OpenCode 2 in it. One install command, no SSH server or open port, and OpenCode sessions that outlive the browser shell."
date: 2026-11-09T10:00:00+05:30
lastmod: 2026-11-09T10:00:00+05:30
draft: false
tags: ["OpenCode", "remote access", "AI coding agents", "terminal", "open source"]
og_image: "images/run_opencode_remotely_from_any_browser/run_opencode_remotely_from_any_browser_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBPcGVuQ29kZSBSZW1vdGVseSBmcm9tIEFueSBCcm93c2VyIHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiT3BlbiBhIHRlcm1pbmFsIG9uIHlvdXIgb3duIG1hY2hpbmUgZnJvbSBhbnkgYnJvd3NlciB3aXRoIFBpbmdneSBEZXZpY2VzIGFuZCBydW4gT3BlbkNvZGUgMiBpbiBpdC4gT25lIGluc3RhbGwgY29tbWFuZCwgbm8gU1NIIHNlcnZlciBvciBvcGVuIHBvcnQsIGFuZCBPcGVuQ29kZSBzZXNzaW9ucyB0aGF0IG91dGxpdmUgdGhlIGJyb3dzZXIgc2hlbGwuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3J1bl9vcGVuY29kZV9yZW1vdGVseV9mcm9tX2FueV9icm93c2VyL3J1bl9vcGVuY29kZV9yZW1vdGVseV9mcm9tX2FueV9icm93c2VyX2Jhbm5lci53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMDlUMTA6MDA6MDArMDU6MzAiLAogICJ0b29sIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiUGluZ2d5IENMSSAwLjYuNCIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIk9wZW5Db2RlIDIuMi42IiB9CiAgXSwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgdGhlIFBpbmdneSBDTEkgYW5kIHNpZ24gdGhlIG1hY2hpbmUgaW4iLAogICAgICAidGV4dCI6ICJPbiB0aGUgbWFjaGluZSwgcnVuIGN1cmwgLWZzU0wgaHR0cHM6Ly9waW5nZ3kuaW8vaW5zdGFsbC5zaCB8IHNoLCBvciBpcm0gaHR0cHM6Ly9waW5nZ3kuaW8vaW5zdGFsbC5wczEgfCBpZXggaW4gUG93ZXJTaGVsbCBvbiBXaW5kb3dzLiBUaGUgc2NyaXB0IGluc3RhbGxzIHRoZSBQaW5nZ3kgQ0xJIHdpdGhvdXQgc3VkbyBhbmQgcnVucyBwaW5nZ3kgZGV2aWNlIGxvZ2luLCB3aGljaCBzaWducyB0aGUgbWFjaGluZSBpbiB3aXRoIHlvdXIgZW1haWwgYW5kIGEgNi1kaWdpdCBjb2RlIGFuZCBjcmVhdGVzIGEgZnJlZSBhY2NvdW50IGlmIHRoZSBlbWFpbCBpcyBuZXcuIEZyb20gQ0xJIDAuNi40IHRoZSBkZXZpY2UgYWdlbnQgdGhlbiBydW5zIGluIHRoZSBiYWNrZ3JvdW5kLCBrZWVwcyBvbmUgb3V0Ym91bmQgY29ubmVjdGlvbiB0byB0aGUgUGluZ2d5IGRhc2hib2FyZCwgYW5kIHN0YXlzIGNvbm5lY3RlZCBhZnRlciB0aGUgdGVybWluYWwgY2xvc2VzLiBSdW4gcGluZ2d5IGRldmljZSBjb25uZWN0IGFnYWluIGFmdGVyIGEgcmVib290LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIE9wZW5Db2RlIDIiLAogICAgICAidGV4dCI6ICJSdW4gY3VybCAtZnNTTCBodHRwczovL29wZW5jb2RlLmFpL3YyL2luc3RhbGwgfCBiYXNoLCBvciBucG0gaW5zdGFsbCAtZyBAb3BlbmNvZGUvY2xpLiBUaGUgdjIgaW5zdGFsbGVyIHJlcGxhY2VzIGFuIE9wZW5Db2RlIDEgYmluYXJ5LiBPcGVuQ29kZSBzaGlwcyBmcmVlIG1vZGVscyB0aGF0IG5lZWQgbm8gYWNjb3VudCwgb3IgY29ubmVjdCB5b3VyIG93biBwcm92aWRlciB3aXRoIC9jb25uZWN0IGluIHRoZSB0ZXJtaW5hbCBpbnRlcmZhY2Ugb3Igb3BlbmNvZGUgYXV0aCBsb2dpbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiBhIHNoZWxsIGluIHRoZSBicm93c2VyIiwKICAgICAgInRleHQiOiAiSW4gdGhlIFBpbmdneSBkYXNoYm9hcmQsIG9wZW4gUGluZ2d5IERldmljZXMsIHNlbGVjdCB0aGUgZGV2aWNlLCBnbyB0byB0aGUgVGVybWluYWwgdGFiIGFuZCBjbGljayBOZXcgc2hlbGwuIFRoZSBzaGVsbCBydW5zIG9uIHRoZSBtYWNoaW5lIGFzIHRoZSB1c2VyIHdobyByYW4gcGluZ2d5IGFuZCBrZWVwcyBydW5uaW5nIHdoZW4geW91IGNsb3NlIHRoZSBicm93c2VyIHRhYi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgT3BlbkNvZGUiLAogICAgICAidGV4dCI6ICJDaGFuZ2UgaW50byB5b3VyIHByb2plY3QgZm9sZGVyIGFuZCBydW4gb3BlbmNvZGUuIFRoZSB0ZXJtaW5hbCBpbnRlcmZhY2UgaXMgYSBjbGllbnQgb2YgT3BlbkNvZGUncyBzaGFyZWQgYmFja2dyb3VuZCBzZXJ2ZXIsIHdoaWNoIG93bnMgc2Vzc2lvbnMgYW5kIHJ1bnMgdGhlIHRvb2xzIG9uIHRoZSBtYWNoaW5lLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb250aW51ZSBhIHNlc3Npb24gbGF0ZXIiLAogICAgICAidGV4dCI6ICJBIGJyb3dzZXIgc2hlbGwgZW5kcyBhZnRlciAzMCBtaW51dGVzIHdpdGggbm8gYWN0aXZpdHkgb3IgYWZ0ZXIgOCBob3VycywgYW5kIHRoZSBvcGVuY29kZSBjbGllbnQgZW5kcyB3aXRoIGl0LCBidXQgdGhlIHNlc3Npb24gc3RheXMgd2l0aCBPcGVuQ29kZSdzIGJhY2tncm91bmQgc2VydmVyLiBPcGVuIGEgbmV3IHNoZWxsIGFuZCBydW4gb3BlbmNvZGUgLWMgdG8gY29udGludWUgdGhlIGxhc3Qgc2Vzc2lvbiwgb3BlbmNvZGUgc2Vzc2lvbiBsaXN0IHRvIGxpc3Qgc2Vzc2lvbnMsIG9yIG9wZW5jb2RlIC1zIHdpdGggYSBzZXNzaW9uIGlkIHRvIG9wZW4gb25lLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---
{{< image "run_opencode_remotely_from_any_browser/run_opencode_remotely_from_any_browser_banner.webp" "Headline Run OpenCode from any browser beside a flow from your browser to Pinggy to your machine running opencode, with the Pinggy install command and the OpenCode logo" >}}

{{< llm-context >}}To run OpenCode remotely with Pinggy - on the machine run `curl -fsSL https://pinggy.io/install.sh | sh` (Windows: `irm https://pinggy.io/install.ps1 | iex`) and sign in with your email, install OpenCode with `curl -fsSL https://opencode.ai/v2/install | bash`, then open the device's Terminal tab at https://dashboard.pinggy.io/pinggy-devices, click New shell, and run `opencode` in your project folder. In a later shell, `opencode -c` continues the last session.{{< /llm-context >}}

Access your terminal from anywhere, right in your browser, with Pinggy.

Install the Pinggy CLI on the machine where your code lives, then open that machine's terminal from the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy dashboard{{< /link >}} on any browser and run {{< link href="https://opencode.ai/" >}}OpenCode{{< /link >}} in it. The machine only makes an outbound connection, so there is no SSH server, open port or public IP to set up.

{{% tldr %}}

1. **Install Pinggy and sign in:** `curl -fsSL https://pinggy.io/install.sh | sh` (Windows: `irm https://pinggy.io/install.ps1 | iex`). Enter your email and the 6-digit code.
2. **Install OpenCode:** `curl -fsSL https://opencode.ai/v2/install | bash`
3. **Open the terminal:** go to the <a href="https://dashboard.pinggy.io/pinggy-devices" target="_blank">Pinggy Devices page</a>, click your device, open **Terminal**, and click **New shell**.
4. **Run OpenCode:** `opencode`

{{% /tldr %}}

## How it works

{{< image "run_opencode_remotely_from_any_browser/opencode_pinggy_browser_terminal_architecture.webp" "Diagram of a browser reaching the Pinggy dashboard, which reaches a Pinggy agent on your machine over an outbound connection; the agent starts a shell running the opencode client, which talks to the OpenCode background server on 127.0.0.1:49374 that keeps the sessions" >}}

Two pieces do the work. **Pinggy Devices** arrived in {{< link href="https://github.com/Pinggy-io/cli-js/releases/tag/v0.6.2" >}}Pinggy CLI v0.6.2{{< /link >}} on November 2, 2026. The CLI runs on your machine as an agent and keeps one outbound connection open to the dashboard. Your browser talks to the dashboard, and the dashboard passes your keystrokes down that connection into a shell on the machine. Nothing connects inbound, so it works behind NAT, CGNAT and firewalls. Since {{< link href="https://github.com/Pinggy-io/cli-js/releases/tag/v0.6.4" >}}v0.6.4{{< /link >}} (November 5), the agent runs in the background by default.

**OpenCode 2** is a client and a server. The `opencode` command you type is a terminal client. A shared background server, which OpenCode starts on first use, owns the sessions, permissions and tool execution, and listens on `127.0.0.1:49374` on macOS and Linux. That split is what makes it a good fit for a browser terminal: the shell can go away without taking teh session with it.

OpenCode is MIT-licensed and sits at 225,629 GitHub stars as of November 9, 2026. I ran the whole flow that day on an Apple Silicon MacBook with Pinggy CLI 0.6.4 and OpenCode 2.2.6, released November 6, adding the machine with the dashboard's token command. Most screenshots come from that run; a few were taken on November 10 in the dashboard's dark theme, and two come from our Claude Code guide. Tokens, emails, hostnames and usernames are placeholders. Limits and plan numbers come from the {{< link href="/docs/devices/" >}}Pinggy Devices docs{{< /link >}}.

## Step 1: Install the Pinggy CLI and sign in

On the machine you want to reach, run:

```bash
curl -fsSL https://pinggy.io/install.sh | sh
```

On Windows, run this in PowerShell instead:

```powershell
irm https://pinggy.io/install.ps1 | iex
```

The script installs the CLI without `sudo`, then runs `pinggy device login`. Enter your email and type the 6-digit code it sends. You can also click **Approve sign-in** in the email, but only if the page shows the same Device Code your terminal printed. An email with no Pinggy account gets a new free account, and the machine is added as a device named after its hostname.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_install_script_email_sign_in_terminal.webp" "Terminal running the Pinggy install script on macOS: it installs the CLI, asks for an email and a 6-digit code, signs the machine in and prints a dashboard link with a QR code" >}}

*Screenshot: the email sign-in on Pinggy CLI 0.6.3, from our Claude Code guide. On 0.6.4 the agent then starts in the background instead of staying in the terminal. Email, code, link and IDs are placeholders.*

When sign-in finishes, the CLI prints a link and a QR code to the device's page in the dashboard, starts the agent in the background and exits. The agent keeps running after you close the terminal, but not after a reboot. Run `pinggy device connect` again after one; the token is saved, so it asks nothing. A CLI older than 0.6.4 keeps the agent in the foreground unless you add `-b`, so run the install command again to update it.

**Already have a Pinggy account?** Click **Add device** on the Devices page and give the machine a name. The dashboard shows a command with the device's token in it, and the device's **Overview** tab keeps it in a **Connect this device** card. It needs no email and no code, so it also works on a machine you only reach through a script:

{{< image "run_opencode_remotely_from_any_browser/pinggy_device_connect_this_device_dark.webp" "Connect this device card on a Pinggy dashboard device page in the dark theme, with the macOS and Linux install command containing a DEVICE_AGENT_TOKEN placeholder, a Copy install command button and a Rotate token button" >}}

*Screenshot: dashboard.pinggy.io in the dark theme, November 10, 2026. The token is a placeholder.*

Run it on the machine. On a Mac that already had the CLI, it checked the version and connected straight away:

{{< image "run_opencode_remotely_from_any_browser/pinggy_install_device_token_output_terminal.webp" "macOS Terminal running the Pinggy install command with a device token: pinggy 0.6.4 is up to date, the Manage this device commands, the agent starting in the background, and the device's dashboard link" >}}

*Screenshot: macOS Terminal, November 10, 2026. Token, device id, email and username are placeholders.*

If the machine was already a device on another account, the CLI says so and leaves that old device in its dashboard, offline. If the CLI is already installed, `pinggy device connect --token <TOKEN>` does the same without the download.

## Step 2: Install OpenCode on the machine

Do this at the machine, or from the browser shell in step 3:

```bash
curl -fsSL https://opencode.ai/v2/install | bash
```

`npm install -g @opencode/cli` and `brew install anomalyco/tap/opencode-v2` work too. Windows package managers aren't supported; the {{< link href="https://opencode.ai/docs/" >}}docs page{{< /link >}} has a standalone Windows build instead.

OpenCode 1 and 2 both install an `opencode` command. The v2 curl installer replaces a v1 binary, which is what happened to the OpenCode 1.3.10 on my MacBook, and a v1 installed through a package manager should be removed first. V2 kept my existing config, default model included, but {{< link href="https://opencode.ai/docs/migrate-v1/" >}}V1 plugins don't run in V2{{< /link >}}.

OpenCode 1 runs in the browser terminal too. Here's 1.3.10 in the dashboard's dark theme:

{{< image "run_opencode_remotely_from_any_browser/opencode_1_3_10_pinggy_terminal_tab_dark.webp" "Pinggy dashboard Terminal tab in the dark theme with a shell tab named opencode, showing the OpenCode 1.3.10 home screen with the Build agent and a local Ollama model" >}}

*Screenshot: dashboard.pinggy.io, November 10, 2026. OpenCode 1.3.10 with a local Ollama model.*

The rest of this guide uses OpenCode 2, whose background server is what keeps a session going after the shell ends.

You don't need an account to start. On November 9, `opencode models` listed ten free models, Big Pickle, DeepSeek V4.1 Flash Free and GLM-5.3-Flash Free among them. OpenCode stores your data when you use them, though, so for private code connect your own provider with `/connect` in the TUI or `opencode auth login`. An API key is easy to paste in from the browser shell. For providers that log in through a browser, I'd connect while you're still at the machine.

## Step 3: Open the terminal and run OpenCode

Open the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy Devices page{{< /link >}} and click your device. The **Overview** tab shows whether it's online, with its hostname, OS, CPU and memory.

{{< image "run_opencode_remotely_from_any_browser/pinggy_device_overview_dark.webp" "Pinggy dashboard device Overview tab in the dark theme, showing the device online, system details for an Apple M3 Pro Mac with agent version 0.6.4, and live CPU, memory, load average and uptime" >}}

*Screenshot: dashboard.pinggy.io, November 10, 2026. The hostname is a placeholder.*

Open the **Terminal** tab and click **New shell**. Each shell gets its own tab, and it runs as the user who ran `pinggy`, so OpenCode sees that user's files, git config and saved provider logins:

```bash
cd ~/code/storefront   # your own project folder
opencode
```

{{< image "run_opencode_remotely_from_any_browser/opencode_in_pinggy_dashboard_terminal_tab.webp" "Pinggy dashboard Terminal tab with one shell tab named opencode, showing the OpenCode 2.2.6 home screen in ~/code/storefront with the Build agent and the free Big Pickle model selected" >}}

*Screenshot: dashboard.pinggy.io, November 9, 2026. The shell runs on the MacBook; the browser only draws it.*

OpenCode 2.2.6 shows a "What's new" dialog the first time it starts after an update; Esc closes it. Mine opened on the local Ollama model from my old config, so I pressed `Ctrl+X`, then `M`, typed "big pickle" and pressed Enter. `Ctrl+X` went through the browser terminal fine. Then I asked it to "Write cart.test.js with three node:test tests for cart.js", and Big Pickle wrote the file and ran the tests in 11.3 seconds.

Type a request and press Enter. `/models` picks a model, `/connect` adds a provider, `!` at the start of an empty prompt runs a shell command, and `Ctrl+P` opens the command palette.

## Step 4: Come back to a session later

Closing the browser tab doesn't end the shell. The Terminal tab lists the shells still running on the device, with the program in each, and clicking one reopens it with the screen redrawn:

{{< image "run_opencode_remotely_from_any_browser/pinggy_terminal_shells_on_this_device.webp" "Pinggy dashboard Terminal tab listing Shells on this device, with one zsh shell in ~/code/storefront still running opencode after the browser tab was closed" >}}

*Screenshot: dashboard.pinggy.io, November 9, 2026.*

A dashboard shell does end after 30 minutes with no activity, or after 8 hours regardless, and the `opencode` client in it ends too. To test that, I hung up the shell from the machine's side, which is what a timeout does. The client exited with it; the session didn't, because OpenCode's background server holds it. In a new shell:

```bash
cd ~/code/storefront     # sessions belong to a project folder
opencode session list    # list sessions; it opens in a pager, press q to leave
opencode -c              # continue the last session
```

`opencode session list` printed the session id, title and time:

```text
ses_e40039520ffev5jRWwjsz0uEAl  Three node:test tests for cart.js       11/9/2026, 4:36:04 PM
```

and `opencode -c` opened it where I'd left off:

{{< image "run_opencode_remotely_from_any_browser/opencode_continue_session_new_pinggy_shell.webp" "Pinggy dashboard Terminal tab with a new shell running opencode -c, showing the earlier OpenCode session where Big Pickle created cart.test.js with three passing node:test tests" >}}

*Screenshot: dashboard.pinggy.io, November 9, 2026. The username in the path is a placeholder.*

`opencode -s <id>` opens a specific session, and inside the TUI `/sessions` (or `Ctrl+X`, then `L`) lists them too.

Work in progress survives as well. In a local terminal, I killed the `opencode` client eight seconds into a task, with the same hang-up signal a closing shell sends. The background server kept going, and the file it was writing appeared about 16 seconds later, with no client attached. So a long task doesn't need the browser shell to stay open, as long as the machine stays awake.

## OpenCode's own remote access, and why use a shell

OpenCode has a way in of its own. `opencode pair` prints a one-time link and a QR code to its web UI, valid for 5 minutes, and `opencode pair --remote` pairs from anywhere through an {{< link href="https://github.com/anomalyco/opentunnel" >}}OpenTunnel{{< /link >}} address. That one exposes your OpenCode server to the internet, end-to-end encrypted and behind its password, and it asks before turning that on. On a phone, OpenCode's web UI or mobile app is nicer than a TUI in a browser tab.

A Pinggy shell is a whole terminal, though. Restart the OpenCode service, `git pull`, restart a dev server or run Claude Code in a seperate tab, and nothing about the OpenCode server faces the internet. Our {{< link href="/blog/run_claude_code_remotely_from_any_browser/" >}}Claude Code version of this guide{{< /link >}} covers the same setup for `claude`.

{{< image "run_claude_code_remotely_from_any_browser/pinggy_device_terminal_tab_claude_code.webp" "Pinggy dashboard Terminal tab with one shell tab named claude and Claude Code 2.1.318 running in it after answering a short prompt" >}}

*Screenshot: Claude Code 2.1.318 in the same Terminal tab, from our Claude Code guide, November 2026.*

## Free vs Pro

Every plan, Free included, gets the browser terminal. Free covers 1 device with 1 shell. Pro, at $2.50/month billed annually or $3/month billed monthly (checked on November 3, 2026), covers 25 devices, 3 shells per device and 10 open shells per seat. Three shells is the comfortable number: one for OpenCode, one for the dev server, one for git. See the {{< link href="https://pinggy.io/#prices" >}}pricing page{{< /link >}} for the rest.

## Security

The device token sits in `device.json` under `~/.config/pinggy/`, readable only by your user. Per the docs, the agent never logs what you type, and the **Activity** tab lists the device's events with source IP addresses.

Anyone signed in to your Pinggy account can open a shell on your devices, as your user, and run OpenCode with your provider keys. Turn on 2-factor authentication first, and keep the dashboard's connect commands out of screenshots and chats, since they contain the token. To cut a machine off, delete the device or rotate its token in the dashboard. `pinggy device remove` only forgets the token locally.

## Troubleshooting

- **Terminal tab is greyed out.** The CLI on that machine is too old to open a shell. Run the install command again.
- **`This machine already runs as device <id> in the background. Stop it first: pinggy device stop`.** A background agent already holds the connection. Stop it before running `login` or `connect` with `--foreground`.
- **`opencode -c` shows `Expected a string starting with "ses"` and an empty session.** You ran it in a folder with no OpenCode sessions, which is easy to do in a fresh browser shell that starts in your home directory. `cd` into the project first, or open a session by id with `opencode -s <id>`.
- **OpenCode can't reach its server.** Run `opencode service status`, then `opencode service restart` if it's stuck.

## Recap

```bash
curl -fsSL https://pinggy.io/install.sh | sh       # install Pinggy and sign in
curl -fsSL https://opencode.ai/v2/install | bash   # install OpenCode 2
opencode                                           # in the browser terminal
opencode -c                                        # in a later shell: continue the last session
```

Open the device's **Terminal** tab on the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy Devices page{{< /link >}}, click **New shell**, and start working.
