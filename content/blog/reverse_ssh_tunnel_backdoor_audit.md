---
title: "How a Reverse SSH Tunnel Becomes a Backdoor (and How to Audit Yours)"
description: "A backdoored editor extension used one authorized_keys line and one ssh -R command to hand out shells. See how reverse SSH tunnels work, and the exact commands to check your own machine."
date: 2026-10-31T10:00:00+05:30
lastmod: 2026-10-31T10:00:00+05:30
draft: false
tags: ["ssh", "security", "tunneling", "Claude Code"]
og_image: "images/reverse_ssh_tunnel_backdoor_audit/reverse_ssh_tunnel_backdoor_audit_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBhIFJldmVyc2UgU1NIIFR1bm5lbCBCZWNvbWVzIGEgQmFja2Rvb3IgKGFuZCBIb3cgdG8gQXVkaXQgWW91cnMpIiwKICAiZGVzY3JpcHRpb24iOiAiQSBiYWNrZG9vcmVkIGVkaXRvciBleHRlbnNpb24gdXNlZCBvbmUgYXV0aG9yaXplZF9rZXlzIGxpbmUgYW5kIG9uZSBzc2ggLVIgY29tbWFuZCB0byBoYW5kIG91dCBzaGVsbHMuIFNlZSBob3cgcmV2ZXJzZSBTU0ggdHVubmVscyB3b3JrLCBhbmQgdGhlIGV4YWN0IGNvbW1hbmRzIHRvIGNoZWNrIHlvdXIgb3duIG1hY2hpbmUuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3JldmVyc2Vfc3NoX3R1bm5lbF9iYWNrZG9vcl9hdWRpdC9yZXZlcnNlX3NzaF90dW5uZWxfYmFja2Rvb3JfYXVkaXRfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMzFUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0zMVQxMDowMDowMCswNTozMCIsCiAgImF1dGhvciI6IHsiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5In0sCiAgInB1Ymxpc2hlciI6IHsiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyJ9Cn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "reverse_ssh_tunnel_backdoor_audit/reverse_ssh_tunnel_backdoor_audit_banner.webp" "Reverse SSH tunnel backdoor: a laptop opens an outbound ssh -R connection to a server and traffic comes back in" >}}

In late October 2026, versions 2.1.312 and 2.1.313 of the Claude Code extension, as served from the Cursor marketplace, shipped with an extra block of JavaScript at the top of `extension.js`. It appended one key to `~/.ssh/authorized_keys` and started one `ssh -R` process. Those two steps gave an attacker an interactive shell on every machine that loaded the extension, and neither step needed an exploit. The security firm Phorion published the {{< link href="https://phorion.io/blog/offical-claude-code-vsx-compromise/" >}}teardown of the implant{{< /link >}} on October 30, and it is a useful specimen: the mechanism is the same one you use every day to share localhost.

This post uses that implant as the worked example. We'll walk through the reverse tunnel, the persistence tricks, what to grep for on your own machine, and why the same primitive is fine when you start it yourself.

{{% tldr %}}
1. A **reverse SSH tunnel is an outbound connection**, so NAT and inbound firewall rules never see it. The remote end opens a listening port and pipes traffic back to your `localhost:22`.
2. The implant needed two ingredients: **a planted public key** (so the attacker can log in) and **an `ssh -N -R *:0:localhost:22` loop** (so the attacker can reach the door).
3. **Uninstalling the extension does not remove it.** It also writes `~/.config/.smt`, a LaunchAgent named `com.apple.sysmond`, or a cron `@reboot` line.
4. You can check a machine in about five commands, listed below. **Look at `authorized_keys`, running `ssh -R` processes, and startup entries**, not just the editor.
5. The same `ssh -R` mechanism powers Pinggy and every other SSH tunnel. What differs is **who started it and where it points**.
{{% /tldr %}}

## What a reverse SSH tunnel actually does

Normal SSH forwarding is `-L`: you ask your local machine to listen, and traffic goes out to somewhere else. `-R` flips it. You connect to a server, and you ask the server to listen on a port. Anything that arrives there is sent back down your connection and out to an address on your side.

```bash
ssh -N -R 0:localhost:22 user@server.example.com
```

The `0` means "pick any free port on the server". The server prints the port it chose. `-N` means "don't run a command", so the connection just sits there holding the forward open. We covered the mechanism in more detail in [SSH reverse tunnelling](/blog/ssh_reverse_tunnelling/).

The point that matters for security is teh direction. The connection is opened by the machine behind the NAT, so the router sees ordinary outbound traffic on port 22. Nothing inbound is ever opened. That is why the technique works for sharing a dev server, and also why it works for malware.

{{< image "reverse_ssh_tunnel_backdoor_audit/reverse_ssh_tunnel_direction.webp" "Sequence diagram: the laptop opens an outbound tunnel to an SSH server, the operator connects to the allocated port, and traffic returns down the tunnel to localhost:22" >}}

*The laptop dials out once. Everything after that rides the same connection.*

## The two ingredients in the implant

Phorion's write-up shows the injected code running before the extension's normal `activate` function, so nothing has to be clicked. It does three things in order.

First, it makes sure `~/.ssh` exists (mode `0700`) and appends an Ed25519 public key to `~/.ssh/authorized_keys` (mode `0600`). The key has the comment `svc-telemetry`. A public key in that file means "whoever holds the matching private key may log in as me". It is the actual backdoor. Everything else is plumbing to reach it.

Second, it opens the tunnel. The script writes an embedded private key to a hidden file in the temp directory, `.stk_` plus ten characters of an MD5 of the hostname and home path, and connects to `134.209.82.225` as user `tunnel` on port 22. The forward is `-R *:0:localhost:22`, so the attacker's server allocates a port and sends anything that hits it to the victim's own SSH daemon. The flags are the ones you would pick if you wanted a quiet, self-healing connection: `-N`, `BatchMode`, `StrictHostKeyChecking` off, `ServerAliveInterval=30`, `ExitOnForwardFailure`, and `autossh` if it is installed.

Third, it sends one plain HTTP POST to `/beacon` with the hostname, username, platform, git email, public IP, and up to 40 environment variable names that match `KEY|TOKEN|SECRET|PASS|AWS|GCP`. Names only, not values. It is an inventory of which machines are worth a visit.

When the operator wants in, they SSH to their own server's allocated port. That lands on the victim's `sshd` through the tunnel, and the planted key authenticates them. Because the connection arrives via a local forward, the victim's auth log shows the login coming from `127.0.0.1` or `::1`. That detail is useful later.

{{< image "reverse_ssh_tunnel_backdoor_audit/backdoor_infection_chain.webp" "Five-step flow from the extension loading to a key in authorized_keys, persistence, an ssh -R tunnel and a beacon" >}}

*Five steps from opening the editor to a reachable shell, based on Phorion's analysis.*

## Why uninstalling the extension doesn't fix it

The tunnel is started detached, in a loop that retries every 60 seconds, so closing the editor does not stop it. On top of that, the implant writes persistence that has nothing to do with the extension folder:

- **macOS:** `~/.config/.smt` (the loop script), `~/.config/.smtk` (the tunnel key), and `~/Library/LaunchAgents/com.apple.sysmond.plist` with `RunAtLoad` and `KeepAlive` set. The `com.apple.` label is the camouflage.
- **Linux:** the same two files in `~/.config`, plus an `@reboot` line in the user's crontab.
- **Windows:** `smt.cmd` and `smtk` in `~/.config`, then either a `SysMon` scheduled task or a `sysmon.cmd` in the Startup folder.

So the removal order matters: kill the tunnel processes, delete the persistence, remove the key, then remove the extension, then rotate anything that user could read.

There is also a bug worth knowing about, because it changes what you will find. On macOS the script runs `systemsetup -getremotelogin` without admin rights. That command prints an "administrator access" error and exits 0, the script only turns SSH on if the output says `Off`, and so it never tries. If Remote Login was off on your Mac, the tunnel connects out but the attacker lands on a closed port 22. Phorion points out, rightly, that this is luck and not a defence: turn Remote Login on later and the door is open.

## Checking your own machine

These are read-only. The paths are the ones in Phorion's report. I have not run the implant, so I can't show output from an infected box, but each command is a plain lookup. On Linux and macOS:

```bash
# 1. Is a planted key in authorized_keys? Compare against the published fingerprint.
ssh-keygen -lf ~/.ssh/authorized_keys
grep -n 'svc-telemetry' ~/.ssh/authorized_keys

# 2. Is an ssh or autossh process holding a reverse forward open?
ps aux | grep -E '[a]utossh|[s]sh .*-R'

# 3. Any outbound connection to the tunnel server?
lsof -nP -iTCP -sTCP:ESTABLISHED | grep 134.209.82.225

# 4. Hidden persistence files and the temp key
ls -la ~/.config/.smt ~/.config/.smtk "${TMPDIR:-/tmp}"/.stk_* 2>/dev/null

# 5. Startup entries
crontab -l 2>/dev/null | grep @reboot
ls ~/Library/LaunchAgents/com.apple.sysmond.plist 2>/dev/null   # macOS only
```

The key fingerprints Phorion published are `SHA256:0Z6R+DF64Do2nwQic8a7kkfDLNNk4IiK+2U2Rci4htk` for the key in `authorized_keys` and `SHA256:KOAU57+ZG6u3MG4WwzPzPX2O5YEe9qdOC1Bl+6MVyDQ` for the tunnel key. Match on the fingerprint, not the comment, since a comment is whatever the attacker typed.

Then check whether the extension was ever installed. The folder name carries the version:

```bash
ls -d ~/.cursor/extensions/anthropic.claude-code-* ~/.vscode/extensions/anthropic.claude-code-* 2>/dev/null
```

Phorion's update says Cursor's own notice lists 2.1.312 and 2.1.313 for macOS and Windows, and that Cursor has pulled both from its marketplace. On Windows, look for the `SysMon` task and the Startup `sysmon.cmd` instead.

If anything turns up, treat the machine as exposed. Check `sshd` logs for logins as your user that came from `127.0.0.1` or `::1` with the `svc-telemetry` key, because that is how a tunnelled login looks. If there is one, rotate every credential that user could read, starting with the ones in your shell environment.

{{< image "reverse_ssh_tunnel_backdoor_audit/reverse_ssh_backdoor_audit_checklist.webp" "Four read-only checks for a reverse SSH backdoor leading to a cleanup order if any of them hits" >}}

*Four read-only checks, then cleanup in a fixed order if any of them hits.*

## Hardening that matters for this attack

None of this needs a zero-day, so ordinary controls work.

- **Treat extensions as code with your shell's privileges.** An extension runs as you, with read access to `~/.ssh`, your repos and your environment. Install fewer, prefer ones from the editor vendor's own marketplace channel, and pin or review auto-updates for anything that touches credentials.
- **Watch `authorized_keys`.** On macOS, only a few processes should ever write to `~/.ssh`. An editor helper process doing it is a loud signal if your endpoint tool can see file writes. A plain `auditctl -w ~/.ssh/authorized_keys -p wa` rule does the same job on Linux.
- **Restrict outbound SSH where you can.** Many laptops have no reason to open port 22 to arbitrary IPs. Egress filtering on port 22 breaks this exact chain, though a tunnel on port 443 would pass, which is what the next section is about.
- **Keep `sshd` off when you don't need it.** On macOS that is System Settings, Sharing, Remote Login. A tunnel to a closed port is just a connection that goes nowhere.
- **Look at your `sshd` config for what it allows.** `sshd -T | grep -iE 'allowtcpforwarding|gatewayports'` shows the forwarding policy on a server you run.

## The same primitive, started by you

Pinggy works the same way as the implant's tunnel. You run `ssh -R`, the server listens, and traffic comes back down your connection. For the Vite or Flask app on port 3000 you want to show a colleague, that looks like this:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io -T
```

The difference is not technical. You typed the command, you know what is on the other end, the target is a web app you chose, and it ends when you press Ctrl+C. Nothing is written to `authorized_keys`, nothing persists across reboots, and the exposed port is the one in the command. For access to a service like SSH itself, Pinggy has a TCP tunnel type (`ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io -T`), and that is the one where you should add an access control from the [Pinggy docs](https://pinggy.io/docs/) and key-only auth on `sshd`, because that is the shape the implant used. I have not run these two commands in this environment, so check the output on your own machine.

The practical rule falls out of this. If a tunnel's start command, target port and lifetime all came from you, it is a tool. If you find one you didn't start, it is an incident. That is why step 2 of the audit, listing running `ssh -R` processes, is worth running even when you're not worried: it shows every forward currently open from your machine, including yours.

## Conclusion

Run the five commands above on any machine that has had Cursor or VS Code extensions auto-updating in the last week or so. It takes a minute, and the one that matters most is the first: `ssh-keygen -lf ~/.ssh/authorized_keys` should only list keys you recognise. If you'd like the background on forwards before reading logs, [SSH reverse tunnelling](/blog/ssh_reverse_tunnelling/) goes through the flags one by one. Make a habit of checking `ps` for stray `ssh -R` lines; you should recieve no surprises. The attack was clever mostly in how little it needed.
