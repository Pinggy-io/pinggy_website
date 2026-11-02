---
title: "Pinggy Devices - remote terminal and tunnels for your machines"
description: "Connect a machine to the Pinggy dashboard with 1 install command. Open a terminal on it from your browser, see its CPU and memory, and start or stop its tunnels. Works behind NAT and firewalls."
date: 2026-11-01T12:00:00+05:30
draft: false
---

# Pinggy Devices

Pinggy Devices connects a machine to the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy dashboard{{</ link >}}. Once a machine is connected, you can:

- Open a terminal on it from your browser.
- See its hostname, OS, CPU, and memory, with live CPU, load, and memory usage.
- List its tunnels and saved tunnel configs, and start, stop, restart, or edit them.
- See an activity log of what happened on the device, with source IP addresses.

The machine runs the Pinggy CLI as an agent. The agent opens 1 outbound connection to the dashboard and keeps it open. The machine needs no open port, no public IP, and no SSH server, so it works behind NAT, CGNAT, and firewalls.

## Add a device

Run 1 command on the machine you want to add.

{{< tabs groupId="install" >}}
{{% tab name="macOS / Linux" %}}
```bash
curl -fsSL https://pinggy.io/install.sh | sh
```
{{% /tab %}}
{{% tab name="Windows (PowerShell)" %}}
```powershell
irm https://pinggy.io/install.ps1 | iex
```
{{% /tab %}}
{{< /tabs >}}

The command does 2 things:

1. **It installs the Pinggy CLI, or updates it.** It needs no `sudo` or administrator rights.
   - macOS and Linux: the binary goes to `~/.pinggy/bin/pinggy`, with a link in `~/.local/bin`. When `~/.local/bin` is not on your `PATH`, the script adds 1 line to your shell's rc file.
   - Windows: the binary goes to `%LOCALAPPDATA%\Pinggy\bin\pinggy.exe`, and that folder is added to your user `PATH`.
2. **It signs the machine in.** It runs `pinggy device login`, which asks for your email and sends you a 6-digit code and an **Approve sign-in** link:
   - Type the code in the terminal, or click the link in the email.
   - If you click the link, approve only when the page shows the same code the terminal printed. A different code means someone else started that sign-in.
   - If your account has 2-factor authentication on, the CLI also asks for your authenticator code.
   - An email with no Pinggy account gets a new free account.

When the sign-in finishes, the CLI prints a link and a QR code to the device's page in the dashboard. The device is named after the machine's hostname. The agent stays connected in that terminal until you press `Ctrl+C`.

> The Linux binaries need glibc, as on Debian, Ubuntu, and Fedora. On Alpine and other musl-based systems, install with `npm install -g pinggy` instead.

### Add a device from the dashboard

On the {{< link href="https://dashboard.pinggy.io/pinggy-devices" >}}Pinggy Devices{{</ link >}} page, click **Add device**. The dashboard shows a command with the device's token in it:

{{< tabs groupId="token" >}}
{{% tab name="macOS / Linux" %}}
```bash
curl -fsSL https://pinggy.io/install.sh | DEVICE_AGENT_TOKEN=<TOKEN> sh
```
{{% /tab %}}
{{% tab name="Windows (PowerShell)" %}}
```powershell
$env:DEVICE_AGENT_TOKEN='<TOKEN>'; irm https://pinggy.io/install.ps1 | iex
```
{{% /tab %}}
{{< /tabs >}}

This command installs or updates the CLI, then connects the machine as that device. It asks for no email and no code, and it needs no keyboard, so it also works in CI jobs, in `docker run` without `-t`, and on machines you reach only through a script. The token reaches the CLI in an environment variable, never on a command line, and the CLI removes the variable before it starts anything else.

### If the CLI is already installed

```bash
pinggy device login                     # sign in with your email
pinggy device connect --token <TOKEN>   # or connect with a token from the dashboard
```

The first successful connect saves the token on the machine, so later runs need only `pinggy device connect`.

## Keep the device connected in the background

Add `-b` to run the agent in the background. It keeps running after you close the terminal.

```bash
pinggy device connect -b
pinggy device login -b
```

The Pinggy CLI daemon runs the background agent, the same daemon that runs background tunnels. Stop it with `pinggy device stop`. It also stops when the daemon stops (`pinggy daemon stop`) and when the machine reboots. After a reboot, run `pinggy device connect -b` again. The token is saved, so it asks nothing.

## Open a remote terminal

Open the device in the dashboard and go to the **Terminal** tab. Click **New shell** to start a shell on the machine. Each shell gets its own tab.

- **A shell keeps running when you close the browser tab**, and when the machine's connection drops for a while. Open the Terminal tab again to go back to it. The screen is redrawn as you left it.
- **The shell runs as the user who ran `pinggy`**, with that user's permissions. On macOS and Linux it is a shell listed in `/etc/shells`. On Windows it is PowerShell or `cmd.exe`.
- **`Ctrl+C` works as in a local terminal.** It stops the program running in the shell, not the shell.
- **On macOS and Linux, each tab shows the shell's current directory and the program running in it.**

A shell ends when you close it or type `exit`. It also ends:

- After 30 minutes with no activity.
- After 8 hours, whatever its activity.
- When the agent stops: `Ctrl+C` on a foreground agent, `pinggy device stop`, or `pinggy daemon stop`.

If the Terminal tab is greyed out, the CLI on that machine is too old to open a shell. Run the install command again to update it.

## Manage tunnels on a device

The **Tunnels** tab lists the tunnels running on the machine and the tunnel configs saved there with `pinggy config save`. From it you can:

- Start, stop, and restart tunnels.
- Edit a saved config, or the config of a running tunnel.
- Start a new tunnel on the machine from a config you define in the dashboard.

Tunnels started from the dashboard run in the background on the machine, as `pinggy start -b` does. Stopping the device agent leaves running tunnels alone. See the [Pinggy CLI](/docs/cli/) docs for saved configs and background tunnels.

## Plans

| Plan | Devices | Shells open on 1 device | Shells open across all devices |
|------|---------|-------------------------|--------------------------------|
| Free | 1 | 1 | 1 |
| Pro | 25 | 3 | 10 |
| Pro (team, per seat) | 25 | 3 | 10 per seat |
| Enterprise | 25 | 5 | 50 |

See [pricing](/#prices) for the plans.

## Commands

| Command | What it does |
|---------|--------------|
| `pinggy device login` | Sign this machine in with your email, then stay connected |
| `pinggy device connect` | Connect with the saved token, or with `--token <TOKEN>`, then stay connected |
| `pinggy device stop` | Stop the agent running in the background |
| `pinggy device status` | Show the saved device id, dashboard, and masked token, and whether a background agent runs |
| `pinggy device remove` | Forget the saved token on this machine. The device stays in the dashboard |

| Option | Applies to | Meaning |
|--------|------------|---------|
| `-b` | `login`, `connect` | Run the agent in the background, in the daemon |
| `--token <TOKEN>` | `connect` | The device token from the dashboard. It is not the tunnel token of the same name |
| `--name <NAME>` | `login` | The device name. Default: the machine's hostname |

1 machine holds 1 device credential. Running a second agent with the same credential does not work: the dashboard refuses the second connection while the first one is open.

## Security

- **The machine only makes an outbound connection.** It accepts no incoming connection.
- **The device token is saved in `device.json`** in the CLI's config directory: `~/.config/pinggy/` on macOS and Linux, where only your user can read it, and `%APPDATA%\pinggy\` on Windows.
- **The agent never logs what you type in a shell.** The copy of a shell's screen that redraws a reopened tab is kept in memory only, and it is gone when the shell ends.
- **The Activity tab** lists the device's events, with source IP addresses.
- **To revoke a device, delete it or rotate its token in the dashboard.** `pinggy device remove` only deletes the token from the machine. A machine without its token cannot authenticate a delete.

Anyone signed in to your Pinggy account can open a shell on your devices. Turn on 2-factor authentication for your account.

## Pinggy Devices and remote management

[Remote management](/docs/remote_devices/) is an older feature. It runs `pinggy --remote-management <API_KEY>` and lets the dashboard create and stop tunnels on that machine. Pinggy Devices covers that and adds the terminal, machine metrics, saved configs, and the activity log. The 2 features use different credentials and can run on the same machine.

## Troubleshooting

| Message | What to do |
|---------|------------|
| `"pinggy devices" is now "pinggy device"` | Use `pinggy device`, without the `s` |
| `Your plan allows 1 device. Delete one in the dashboard, or upgrade, to add another.` | Delete a device in the dashboard, or upgrade your plan |
| `This machine already runs as device <id> in the background. Stop it first: pinggy device stop` | A background agent is running. Stop it before you run `login` or `connect` in the foreground |
| The agent stops and says the token was refused or revoked | The device was deleted or its token was rotated. Add the device again |
| `this Linux uses musl libc, as Alpine does` | Install with `npm install -g pinggy` |
| Terminal tab greyed out | Update the CLI: run the install command again |
