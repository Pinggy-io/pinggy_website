---
title: "GL.iNet GoodCloud Breach: How to Check Your Router or KVM"
description: "GL.iNet's GoodCloud remote management was used to run root commands on routers and KVMs on November 20, 2026. Here is how the flaw worked, the SSH checks that find it, and why a factory reset is not enough."
date: 2026-11-23T18:30:00+05:30
lastmod: 2026-11-23T18:30:00+05:30
draft: false
tags: ["GL.iNet", "security", "networking", "remote access", "self-hosted"]
og_image: "images/glinet_goodcloud_breach_check_router_kvm/glinet_goodcloud_breach_check_router_kvm_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIGNoZWNrIGEgR0wuaU5ldCByb3V0ZXIgb3IgS1ZNIGZvciBtYWx3YXJlIGFmdGVyIHRoZSBHb29kQ2xvdWQgYnJlYWNoIiwKICAiZGVzY3JpcHRpb24iOiAiR0wuaU5ldCdzIEdvb2RDbG91ZCByZW1vdGUgbWFuYWdlbWVudCB3YXMgdXNlZCB0byBydW4gcm9vdCBjb21tYW5kcyBvbiByb3V0ZXJzIGFuZCBLVk1zIG9uIE5vdmVtYmVyIDIwLCAyMDI2LiBIZXJlIGlzIGhvdyB0aGUgZmxhdyB3b3JrZWQsIHRoZSBTU0ggY2hlY2tzIHRoYXQgZmluZCBpdCwgYW5kIHdoeSBhIGZhY3RvcnkgcmVzZXQgaXMgbm90IGVub3VnaC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvZ2xpbmV0X2dvb2RjbG91ZF9icmVhY2hfY2hlY2tfcm91dGVyX2t2bS9nbGluZXRfZ29vZGNsb3VkX2JyZWFjaF9jaGVja19yb3V0ZXJfa3ZtX2Jhbm5lci53ZWJwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMjNUMTg6MzA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQ2hlY2sgYmVmb3JlIHlvdSByZWJvb3QiLCAidGV4dCI6ICJTU0ggaW50byB0aGUgcm91dGVyIGFzIHJvb3QgYmVmb3JlIHJlc3RhcnRpbmcgb3IgdXBncmFkaW5nIGl0LiBUaGUgcmVtb3RlIHNoZWxsLCB0aGUgbmFtZWQgcGlwZSAvdG1wL2YgYW5kIHRoZSBTRFdBTl9JUF9NQVBQSU5HIGZpcmV3YWxsIHJ1bGUgYXJlIGdvbmUgYWZ0ZXIgYSByZXN0YXJ0LiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkxvb2sgZm9yIHRoZSByZW1vdGUgc2hlbGwgYW5kIGJhY2tkb29yIHByb2Nlc3NlcyIsICJ0ZXh0IjogIlJ1biBwcyB3IHwgZ3JlcCAtRSAnY3JvbmQgLWl8bWtmaWZvfG5jIFswLTldfHNoIC1pfG1vbml0b3JkfHVqYWlsZCcgfCBncmVwIC12IGdyZXAuIEEgbGluZSB3aXRoIG5jIGFuZCBhbiBJUCBhZGRyZXNzLCAvYmluL3NoIC1pLCBta2ZpZm8sIG1vbml0b3JkLCB1amFpbGQgb3IgY3JvbmQgLWkgL3RtcC8ubG9nIGlzIGEgaGl0LiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkNoZWNrIHRoZSB0cmFjZXMgdGhhdCBzdXJ2aXZlIGEgcmVib290IiwgInRleHQiOiAiUnVuIGxzIC1sYSAvZXRjL21wX2lwX21hcHBpbmdfaW5mbyBhbmQgbHMgLWwgL2Jpbi91bG9nZC4gQW4gZW1wdHkgL2V0Yy9tcF9pcF9tYXBwaW5nX2luZm8gZGF0ZWQgTm92ZW1iZXIgMjAsIDIwMjYgb3IgbGF0ZXIgb24gYSByb3V0ZXIgdGhhdCBkb2VzIG5vdCB1c2UgQXN0cm9XYXJwIG1lYW5zIHRoZSB2dWxuZXJhYmxlIGhhbmRsZXIgd2FzIGNhbGxlZC4gL2Jpbi91bG9nZCBiZWxvbmdzIHRvIHRoZSBvbGRlciBiYWNrZG9vci4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJTd2l0Y2ggR29vZENsb3VkIG9mZiIsICJ0ZXh0IjogIlJ1biAvZXRjL2luaXQuZC9nbC1jbG91ZCBzdG9wLCB1Y2kgc2V0IGdsLWNsb3VkLkBjbG91ZFswXS5lbmFibGU9JzAnLCB1Y2kgY29tbWl0IGdsLWNsb3VkIGFuZCAvZXRjL2luaXQuZC9nbC1jbG91ZCBkaXNhYmxlLiBUaGUgY2xvdWQgY2xpZW50IG9ubHkgc3RhcnRzIHdoZW4gR29vZENsb3VkIGlzIGVuYWJsZWQgb24gdGhlIGRldmljZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJJbnN0YWxsIHRoZSBmaXhlZCBmaXJtd2FyZSIsICJ0ZXh0IjogIkRvd25sb2FkIHRoZSBzdGFibGUgc2VjdXJpdHkgZmlybXdhcmUgZm9yIHlvdXIgZXhhY3QgbW9kZWwgZnJvbSBkbC5nbC1pbmV0LmNvbSwgZm9yIGV4YW1wbGUgNC4xMS4xIGZvciB0aGUgR0wtTVQzMDAwIGFuZCBHTC1NVDYwMDAgb3IgMS4xMC4zIGZvciB0aGUgQ29tZXQgS1ZNcy4gSWYgYW55IGNoZWNrIGZvdW5kIHNvbWV0aGluZywgcmVpbnN0YWxsIHdpdGggS2VlcCBTZXR0aW5ncyBzd2l0Y2hlZCBvZmYuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiUm90YXRlIHdoYXQgdGhlIGRldmljZSBzdG9yZWQiLCAidGV4dCI6ICJSZXZva2UgdGhlIHJvdXRlcidzIFdpcmVHdWFyZCBhbmQgT3BlblZQTiBwcm9maWxlcyBvbiB0aGUgc2VydmVyIHNpZGUsIHJlbW92ZSBpdHMgU1NIIHB1YmxpYyBrZXkgZnJvbSBvdGhlciBtYWNoaW5lcywgYW5kIGNoYW5nZSB0aGUgYWRtaW4sIFdpLUZpIGFuZCBHb29kQ2xvdWQgcGFzc3dvcmRzLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "glinet_goodcloud_breach_check_router_kvm/glinet_goodcloud_breach_check_router_kvm_banner.webp" "Headline GL.iNet GoodCloud breach: check your router, above a flow from GoodCloud to the gl-cloud client to a root shell and a ps command that looks for the remote shell" >}}

On November 20, 2026, someone used GL.iNet's cloud remote management service, GoodCloud, to run commands as root on customers' routers and Comet KVMs. GL.iNet confirmed it in a {{< link href="https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20" >}}security notice{{< /link >}} the same day, closed the cloud side, and by November 23 had shipped fixed firmware for 18 router models and 7 KVM models. The official check is one command, `ps | grep tmp`, looking for a process called `crond -i /tmp/.log`. The trouble is that the people who went through a few hundred affected routers by hand did not find that process on a single one of them, and found three other things instead.

This post covers what the flaw was, which checks actually find something, and what to do afterwards. Everything here is as of November 23, 2026; GL.iNet's notice says the investigation is still running. I don't own an affected device, so the commands below are quoted from GL.iNet's notice and from the two community write-ups that did teh forensic work, not from my own terminal.

{{% tldr %}}
1. **Check before you reboot.** The remote shell, its pipe at `/tmp/f` and the firewall rule it left are gone after a restart. Two traces survive: an empty `/etc/mp_ip_mapping_info` and the older backdoor's `/bin/ulogd`.
2. **The official check is too narrow.** `ps | grep tmp` looks for `crond -i /tmp/.log`. Run the wider process, file and firewall checks in this post as well.
3. **The bug was a shell injection in the cloud client.** A handler named `virtual_ip_info` put two values from a cloud message into an `iptables` command and ran it as root. It has shipped since firmware 4.7.0 (December 5, 2024) and ran whether or not you used AstroWarp.
4. **Install the fixed firmware, but reinstall with Keep Settings off if anything turned up.** A factory reset or a settings-preserving upgrade can carry a planted start-up entry across.
5. **Rotate what the router held.** VPN profiles, SSH keys, Wi-Fi and admin passwords were all readable by a root shell. Revoke them on the server side.
{{% /tldr %}}

## What GL.iNet has confirmed

The notice is short on mechanism and long on download links. What it does say:

- A vulnerability in "cloud remote management services" was identified on November 20, 2026, and an unauthorized party used it "to access and install malicious software on some GL.iNet routers and KVM devices."
- The cloud side is fixed, so devices "can no longer be newly infected through this attack path." That does not clean a device that was already hit.
- The security firmware removes the identified malware without a factory reset.
- More indicators of compromise have turned up since, and the official quick checks "may not detect every affected device."
- For KVMs, GL.iNet is still working out "whether computers connected to affected KVM devices were impacted."

There is no CVE, no device count, and no description of what the malware does. Minimum fixed versions, from the notice:

| Device | Fixed firmware |
|---|---|
| GL-MG1300, GL-MT3000, GL-MT6000 | 4.11.1 |
| GL-E5800 | 4.10.3 |
| GL-BE3600, GL-BE9300 | 4.10.2 |
| GL-BE14000 | 4.9.3 |
| GL-BE6500, GL-MT3600BE, GL-MT5000 | 4.9.1 |
| GL-BE10000 | 4.8.7 |
| GL-AX1800, GL-AXT1800, GL-SFT1200, GL-X3000, GL-XE3000 | 4.8.4 |
| GL-MT2500, GL-MT2500A, GL-X2000 | 4.7.14 |
| KVM: RM1, RM1V2, RM10, RM10RC, RM1PE, RM4PE | 1.10.3 |
| KVM: RMQ1 (Comet Q) | 1.8.7 |

The notice also warns that "an unlisted model is not necessarily unaffected." Download from {{< link href="https://dl.gl-inet.com/" >}}dl.gl-inet.com{{< /link >}} for your exact model.

## How one cloud message became a root command

The mechanism comes from {{< link href="https://github.com/RemoteToHome-io/gl-security-incident-2026" >}}RemoteToHome's write-up{{< /link >}}, a consultancy that manages a fleet of these routers and read the firmware. GL.iNet has not confirmed it in words. Its patch touches the same handler, which is about as close to a confirmation as a diff gets.

A router with GoodCloud switched on runs a client, `/usr/bin/gl-cloud`, from the package `gl-sdk4-cloud`. It holds an outbound connection to GL.iNet's cloud and waits for commands: reboot, push a config, open a remote terminal. One of those commands, `virtual_ip_info`, belongs to AstroWarp, GL.iNet's SD-WAN product. For each entry in the message it takes a `virtualIp` and an `ip` field, drops them into this format string, and hands the result to `os.execute`:

```
iptables -t nat -A %s -d %s -j DNAT --to-destination %s
```

Neither value is validated or quoted, and `os.execute` goes through a shell. So an `ip` value of `127.0.0.1;<any command> &` produces a valid firewall rule followed by whatever the sender wanted, as root. Every message recovered from affected routers has that shape: `virtualIp` set to `127.0.0.1`, and a command appended to `ip`.

{{< image "glinet_goodcloud_breach_check_router_kvm/goodcloud_virtual_ip_info_injection.webp" "Four steps from GoodCloud to the gl-cloud client, the AstroWarp handler and a root shell, with the iptables command line showing the injected part after the semicolon" >}}

*The ip field goes into a shell command unquoted, so a semicolon ends the iptables rule and starts the attacker's command. Mechanism: {{< link href="https://github.com/RemoteToHome-io/gl-security-incident-2026/blob/main/docs/technical-breakdown.md" >}}RemoteToHome technical breakdown{{< /link >}}, November 2026.*

Three details make this worse than a normal injection bug:

- **The handler never checks whether AstroWarp is enabled.** RemoteToHome recorded the setting on 193 routers, including every one that had been called, and AstroWarp was off on all of them. "I never used that feature" is no protection.
- **It has been there a long time.** The earliest image with the code is GL-MT3000 4.7.0, released December 5, 2024. Firmware 4.6 and older doesn't have it. That is 715 days in released firmware before the attack.
- **Nobody outside could have reviewed it.** The cloud client ships as compiled Lua bytecode, and its source isn't in GL.iNet's published repositories. The stock firmware is OpenWrt underneath, but this part of it is closed.

What nobody outside GL.iNet knows yet is how the attacker got to send cloud messages in the first place. The router-side bug only matters once someone can speak on that channel, and the notice says nothing about the cloud-side hole beyond "fixed."

## What was sent on November 20 and 21

Three kinds of message were recovered from router memory, all through that one handler.

Some GL-AXT1800 and GL-MT6000 routers got an interactive root shell. The appended command is a loop that makes a named pipe at `/tmp/f`, joins `/bin/sh -i` to `nc 170.39.226.219 <port>` through it, and retries three seconds after the connection drops. Shells started between 20:06 and 21:40 UTC on November 20. The hosting provider suspended that address on November 21, but routers that hadn't been restarted were still retrying on November 22.

Most other routers recieved a one-shot command instead. It lists two folders, `/etc/config/.gl` and `/etc/glinet/.cache`, tags the result with a device ID and sends it to the same address. Those folders belong to an implant called `gl-helper` found on Comet KVMs, so this reads like a survey: which devices already have the implant. It installs nothing itself. Whether a router that answered was then sent something else can't be seen from the router.

The calls came in batches per model, a couple of minutes apart across unrelated networks: GL-MT6000 first at 20:06 on November 20, GL-MT3000 on 4.9.0 at 00:21 the next morning, GL-MT5000 at 01:40, and so on.

{{< image "glinet_goodcloud_breach_check_router_kvm/glinet_goodcloud_incident_timeline.webp" "Timeline from firmware 4.7.0 on 5 December 2024 through an older backdoor in 2025 and 2026 to the first root shells on 20 November 2026 and fixed firmware on 22 and 23 November" >}}

*The vulnerable code shipped 715 days before anyone is known to have used it. Dates: GL.iNet security notice and {{< link href="https://github.com/RemoteToHome-io/gl-security-incident-2026" >}}RemoteToHome{{< /link >}}, November 2026.*

### The older backdoor nobody was looking for

While people were hunting for November 20 traces, {{< link href="https://forum.gl-inet.com/t/found-other-malware-while-looking-for-11-20-evidence/73097" >}}several owners found something else{{< /link >}}: a separate backdoor with file dates from September 2025 to May 2026. It adds lines to the top of `/etc/init.d/urandom_seed`, drops `/bin/ulogd`, runs as `monitord` or `ujaild`, and writes its own line into `/lib/upgrade/keep.d/netifd` so it survives upgrades that keep settings. RemoteToHome found it running on 49 of the 199 routers it reached. How it was installed is unknown. The official `crond` check doesn't see it.

### How many devices

GL.iNet hasn't given a number. The only figures are self-selected. RemoteToHome's fleet: 166 of 199 routers showed the November attack, the older backdoor, or both. The {{< link href="https://gl-i.net/security/csa-2026-01/" >}}community advisory page{{< /link >}}, which collects anonymous reports from people who ran its script, listed 1,901 devices on November 23, with traces on 634 of 1,427 not-yet-updated routers and 111 of 269 KVMs. People who suspect a problem are the ones who run a script, so treat those as "this was not rare," not as a rate.

## Check a router over SSH, before you reboot

Order matters. A restart wipes most of the evidence, and so does a firmware upgrade. SSH in as root first (the {{< link href="https://docs.gl-inet.com/router/en/4/tutorials/ssh_log_in_to_the_router/" >}}router SSH guide{{< /link >}} covers it; the default LAN address is `192.168.8.1`).

GL.iNet's own check, which also works from LuCI under Status -> Processes:

```bash
ps | grep tmp
# a hit contains: crond -i /tmp/.log
# a line showing only the grep itself is not a hit
```

The wider checks, from RemoteToHome's write-up:

```bash
# remote shell, older backdoor, and GL.iNet's indicator in one pass
ps w | grep -E 'crond -i|mkfifo|nc [0-9]|sh -i|monitord|ujaild' | grep -v grep

# the shell's named pipe: a hit is a line starting with "p"
ls -la /tmp/f /tmp/.log

# the firewall rule the injected command arrived in
iptables -t nat -S SDWAN_IP_MAPPING
nft list ruleset | grep -i sdwan      # on firmware that says "use 'nft' tool"

# survives a reboot: empty file, dated 20 Nov 2026 or later
ls -la /etc/mp_ip_mapping_info
uci -q get mptun.global.enable        # 0 or nothing = AstroWarp not in use

# older backdoor: any output from cmp is a hit, and so is the file existing
/rom/bin/busybox cmp /etc/init.d/urandom_seed /rom/etc/init.d/urandom_seed
ls -l /bin/ulogd
```

How to read the results:

- `nc` with an IP address, `/bin/sh -i` or `mkfifo` in the process list is a live remote shell.
- A rule in `SDWAN_IP_MAPPING` with `127.0.0.1` on both sides means the handler ran an injected command since the last boot. The rule itself is harmless.
- An empty `/etc/mp_ip_mapping_info` on a router that doesn't use AstroWarp means the handler was called at some point. Its creation and modification times are the first and last call. This is the one November trace that outlasts a reboot.
- `monitord`, `ujaild`, `/bin/ulogd` or a modified `urandom_seed` is the older backdoor.

One warning from GL.iNet staff: on an infected device `netstat` may have been replaced by a script, and running it starts the malware. Look before you use it. On a router, `ls -l /bin/netstat` should show a link to `busybox`.

On a Comet KVM, open Toolbox -> Terminal -> Access in the web UI and run `ps -aux | grep tmp` (`ps -a | grep tmp` on the RMQ1). The `gl-helper` implant on KVMs also leaves files in `/etc/glinet/.cache` and `/etc/config/.gl`, entries in `rc.local` and the root crontab, and an SSH key named `gl-agent`.

There is also an {{< link href="https://github.com/admonstrator/glinet-csa-2026-01" >}}unofficial triage script{{< /link >}} that runs all of this and more, and GL.iNet's notice links to it with a long disclaimer. It runs as root and offers to upload a report, so read it first. Its `--archive` flag saves the process list, firewall state and suspect binaries, which is worth doing before a reboot if the device sits in a business network.

A clean result means nothing is running now and nothing of this kind has run since the last boot. It can't prove the device was never touched.

## Switch GoodCloud off

On the firmware RemoteToHome read, the init script won't start the cloud client unless the GoodCloud switch is on. Turn it off in the admin panel, or over SSH:

```bash
/etc/init.d/gl-cloud stop
uci set gl-cloud.@cloud[0].enable='0'
uci commit gl-cloud
/etc/init.d/gl-cloud disable
```

The device then disappears from the GoodCloud dashboard. On a Comet KVM the switch is in the cloud settings in the web UI; forum users report it under "More Settings."

Even on fixed firmware I'd leave it off unless you depend on it. RemoteToHome says it reported one more weakness in the cloud client on November 22 that the 4.11.1 build doesn't address, and it's withholding the details until that is patched.

## Why a factory reset is not the fix

If every check came back clean, GL.iNet's advice is enough: install the fixed firmware and move on. If anything turned up, the three obvious recovery routes aren't equal.

A firmware upgrade with "Keep Settings" on carries a list of paths into the new install: `/etc/rc.local`, the root crontab, everything under `/etc/config`, `/etc/openvpn`, `/etc/udhcpc.user.d` and SSH authorized keys. Those are exactly where an attacker with root would plant a start-up entry. RemoteToHome tested it on a GL-MT3000: entries planted in kept settings survived the upgrade to 4.11.1 and ran. The fixed firmware's own cleanup is one short script that restores `urandom_seed` and leaves the older backdoor's other files in place.

A factory reset erases the writable layer but leaves the installed firmware image alone. On a GL-AXT1800 the partition holding that image is writable from a root shell. Nobody has reported a modified image, but a reset wouldn't remove one.

A reinstall with "Keep Settings" off, from a file you downloaded yourself, rewrites the image and starts with an empty writable layer in one step. It's the most thorough option an owner has. It still doesn't touch the boot loader.

{{< image "glinet_goodcloud_breach_check_router_kvm/glinet_router_recovery_options.webp" "Grid comparing an upgrade with Keep Settings on, a factory reset and a reinstall with Keep Settings off by whether the firmware image, writable layer and boot loader are replaced" >}}

*Only one of the three routes replaces both halves at once, and none of them rewrites the boot loader. Source: {{< link href="https://github.com/RemoteToHome-io/gl-security-incident-2026" >}}RemoteToHome{{< /link >}}, November 2026.*

Then deal with everything the router knew. A root shell could read every key on the device, and reinstalling doesn't take a copied key back:

- Remove the router's WireGuard peer or OpenVPN certificate on the server and issue a new one. For a commercial VPN, regenerate the keys in your account. For Tailscale or ZeroTier, remove the node and rejoin.
- If the router was a VPN server, give it a new private key and reissue every client profile.
- Remove the router's SSH public key (`/root/.ssh/id_dropbear` by default) from any machine that trusts it, and check the router's own `authorized_keys` for keys you didn't add.
- Change the admin, Wi-Fi, DDNS and GoodCloud passwords.
- Export the device log from your GoodCloud account before you change that password. One owner found the injected calls there as `{"id":1,"astrowarp":[],"code":0}` entries, and lost the log after a reset.

For a KVM, check the computer it was plugged into: new accounts, start-up items, scheduled tasks, browser extensions. A KVM is a keyboard and a screen on that machine.

## Reaching the router once GoodCloud is off

GoodCloud solved a real problem: a travel router in a hotel or a box at a relative's house has no public IP, and you still want to get at it. Switching it off means picking another way in, ideally one that can only carry a connection and not an instruction.

If the router has a public IP, its built-in WireGuard server is the obvious choice and involves no third party. GL.iNet firmware also ships a Tailscale client, which works behind CG-NAT. Both mean a client on whatever you connect from.

A third option that needs nothing installed is an SSH reverse tunnel, and that is where Pinggy fits. From any always-on Linux machine on the router's LAN (a Pi, a NAS), forward the router's SSH port out through a TCP tunnel:

```bash
ssh -p 443 -o ServerAliveInterval=60 -R0:192.168.8.1:22 tcp@free.pinggy.io -T
```

It prints a `tcp://` address with a port, and `ssh root@<that-host> -p <that-port>` from anywhere lands on the router's SSH login. I haven't run this against a GL.iNet router, only against ordinary Linux hosts; the mechanics are covered in our [SSH reverse tunnelling](/blog/ssh_reverse_tunnelling/) post.

Be clear about what this is and isn't. It is still a third party's relay in the path, so you're trading one cloud for another. The difference is the shape: a TCP tunnel forwards bytes to a port, and whoever arrives still has to log in to dropbear. There is no management channel that can tell the router to run something. The cost is that the router's SSH port is now reachable from the internet, so switch it to key-only login first, and don't leave the tunnel up when you don't need it. Free tunnels drop after 60 minutes and come back on a new address, which for an emergency way in is arguably a feature.

## What to check a week from now

Three things are still open as of November 23. GL.iNet hasn't said how the attacker reached the cloud command channel, whether devices with the cloud service on but not bound to an account were reachable, or what happened on computers behind infected KVMs. The {{< link href="https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20" >}}notice{{< /link >}} carries a "last updated" line, and the fixed-firmware list has grown twice already, so re-read it before assuming your model is covered.

If you want to see the fix for yourself, RemoteToHome mirrors each fixed build next to the one it replaces. Unpack both, find `cloud/astrowarp.lua` under `/usr/local/lib/lua/5.4/`, and compare: in 4.11.1 the `virtual_ip_info` handler checks its two address fields as IPv4 addresses before it builds any command. That check is small. The 715 days before it are the part worth remembering next time a device offers to manage itself from someone else's server.
