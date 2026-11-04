---
title: "Tailscale SSH Tailworm: How Socket Forwarding Became Root"
description: "Tailscale SSH socket forwarding let an allowed device reach root-only sockets like Docker's. Here is the race condition behind Tailworm, what 1.104.4 changed, and how to check your nodes."
date: 2026-10-28T10:00:00+05:30
lastmod: 2026-10-28T10:00:00+05:30
draft: false
tags: ["Tailscale", "security", "ssh", "Docker"]
og_image: "images/tailscale_ssh_tailworm_socket_forwarding_root/tailscale_ssh_tailworm_socket_forwarding_root_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlRhaWxzY2FsZSBTU0ggVGFpbHdvcm06IEhvdyBTb2NrZXQgRm9yd2FyZGluZyBCZWNhbWUgUm9vdCIsCiAgImRlc2NyaXB0aW9uIjogIlRhaWxzY2FsZSBTU0ggc29ja2V0IGZvcndhcmRpbmcgbGV0IGFuIGFsbG93ZWQgZGV2aWNlIHJlYWNoIHJvb3Qtb25seSBzb2NrZXRzIGxpa2UgRG9ja2VyJ3MuIEhlcmUgaXMgdGhlIHJhY2UgY29uZGl0aW9uIGJlaGluZCBUYWlsd29ybSwgd2hhdCAxLjEwNC40IGNoYW5nZWQsIGFuZCBob3cgdG8gY2hlY2sgeW91ciBub2Rlcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvdGFpbHNjYWxlX3NzaF90YWlsd29ybV9zb2NrZXRfZm9yd2FyZGluZ19yb290L3RhaWxzY2FsZV9zc2hfdGFpbHdvcm1fc29ja2V0X2ZvcndhcmRpbmdfcm9vdF9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgInB1Ymxpc2hlciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IiwKICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iCiAgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTI4VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMjhUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogewogICAgIkB0eXBlIjogIldlYlBhZ2UiLAogICAgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL3RhaWxzY2FsZV9zc2hfdGFpbHdvcm1fc29ja2V0X2ZvcndhcmRpbmdfcm9vdC8iCiAgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiU2VjdXJpdHkiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIlRhaWxzY2FsZSBTU0ggdnVsbmVyYWJpbGl0eSwgVGFpbHdvcm0sIFRTLTIwMjYtMDE0LCBUYWlsc2NhbGUgMS4xMDQuNCwgU1NIIHNvY2tldCBmb3J3YXJkaW5nIHByaXZpbGVnZSBlc2NhbGF0aW9uIiwKICAiYWJvdXQiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIlRhaWxzY2FsZSBTU0giLAogICAgICAiZGVzY3JpcHRpb24iOiAiU1NIIHNlcnZlciBidWlsdCBpbnRvIHRhaWxzY2FsZWQsIGF1dGhvcmlzZWQgYnkgdGFpbG5ldCBwb2xpY3kuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIlRoaW5nIiwKICAgICAgIm5hbWUiOiAiVE9DVE9VIHJhY2UiLAogICAgICAiZGVzY3JpcHRpb24iOiAiQSBwYXRoIGlzIGNoZWNrZWQsIHRoZW4gc3dhcHBlZCBiZWZvcmUgdGhlIGtlcm5lbCB1c2VzIGl0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIlVuaXggc29ja2V0IGZvcndhcmRpbmciLAogICAgICAiZGVzY3JpcHRpb24iOiAic3NoIC1MIGFuZCAtUiB0byBhIHNvY2tldCBwYXRoLCB3aGljaCByYW4gYXMgcm9vdCBiZWZvcmUgMS4xMDQuNC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiVGhpbmciLAogICAgICAibmFtZSI6ICJIZWFkc2NhbGUiLAogICAgICAiZGVzY3JpcHRpb24iOiAiU2VsZi1ob3N0ZWQgVGFpbHNjYWxlIGNvbnRyb2wgc2VydmVyLCBub3QgZml4ZWQgYnkgdGhlIGNsaWVudCB1cGRhdGUuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "tailscale_ssh_tailworm_socket_forwarding_root/tailscale_ssh_tailworm_socket_forwarding_root_banner.webp" "Tailscale SSH to root: a device allowed by policy reaches tailscaled running as root, which opens docker.sock" >}}

Tailscale SSH runs its server inside `tailscaled`, and `tailscaled` runs as root. Until client 1.104.4, when you forwarded a Unix socket over a Tailscale SSH session, that root process did the dial, bind and unlink for you. The path was checked against an allowlist first, but the kernel resolved it later, and a rename in between could point it somewhere else. A device your policy already trusted could end up talking to the Docker socket as root.

The researcher who found it, Erica Windisch of Cyberdione Labs, named it Tailworm. Tailscale shipped the fix in 1.104.4 and published four security bulletins (TS-2026-014 to TS-2026-017) on October 28, 2026. This post walks through the mechanism, what changed, and what to check on your own machines.

{{% tldr %}}
1. **Forwarding ran as root.** The Tailscale SSH server lives in `tailscaled`, so Unix socket forwarding (`ssh -L` and `ssh -R` to a socket path) used root's credentials.
2. **The path check lost a race.** The allowlist was checked by name, then the kernel resolved the name later. Swapping a directory in between sent the root process to a socket it should not touch.
3. **You need a foothold first.** The attacker must already control a device your policy lets SSH to the target, with forwarding allowed. No one is attacking random servers with this.
4. **Update to 1.104.4 or later.** Until then, set `TS_SSH_DISABLE_FORWARDING=1` for `tailscaled` and restart it. That covers the forwarding bug, not the other three bulletins.
5. **Headscale is not fixed by a client update.** As of October 28, 2026, headscale 0.29.5 does not address the reported issues.
{{% /tldr %}}

## What Tailscale SSH does differently from OpenSSH

Normaly `sshd` forks a process per session and drops to the logged-in user. Tailscale SSH replaces that: the SSH server is built into `tailscaled`, authentication comes from your tailnet policy file instead of keys, and the daemon starts the session for the right local user. It only runs on Linux and the open-source macOS build.

That design is the root of this bug. The session's shell is the user's, but the helper work around it (forwarding included) sits inside a daemon that is root. Anything the daemon does "on behalf of" the user has to be restricted by hand, because the kernel's normal file permission checks see root.

## How a socket path turned into a root socket

Take the worked example we'll keep using: a Linux server running Docker, with Tailscale SSH enabled, and a laptop your policy allows to SSH in as an ordinary user with forwarding permitted.

The user asks for a forward to a Unix socket. The daemon runs roughly this sequence:

1. Check the requested path against an allowlist of places a user may use.
2. Hand the path to the kernel to dial, bind or unlink - as root.

Those are two steps, and the path is a name, not a handle. Between step 1 and step 2, the attacker's session can rename a directory in the allowed location so the same name now leads somewhere else. Check passes, the kernel resolves the new target, and root connects to `/var/run/docker.sock`. This is a time-of-check to time-of-use (TOCTOU) race.

{{< image "tailscale_ssh_tailworm_socket_forwarding_root/tailscale_ssh_socket_forwarding_race.webp" "Sequence diagram: an SSH session passes the path check in tailscaled, renames a directory, and tailscaled then dials docker.sock as root" >}}

*The allowlist checks a name, but the kernel resolves it after the swap.*

In the researchers' lab runs, forwarding to the Docker socket gave a root shell and a read of `/etc/shadow`. They also reportd a root shell through systemd's control socket and capture of device-enrollment keys. Tailscale's own description is narrower: access to root-only sockets such as Docker's or the `tailscaled` local API. The Ostorlab write-up quotes the researchers' verdict that the allowlist "is not a security boundary."

## What it takes to exploit it

This is lateral movement, not a way in from the internet. Tailscale and the third-party write-ups agree on the preconditions:

- The attacker controls a device (or a user on it) that your policy file already lets SSH to the target.
- That rule has forwarding enabled.
- The target runs a Tailscale SSH server, so Linux or the open-source macOS build.
- The tested client was 1.104.2. The bulletins list no CVE IDs, severity scores or oldest affected version as of October 28, 2026.

Windisch called the chain "wormable", since one compromised device could hop to every server it may reach, and from there onward. Tailscale rejected that label and says the reach is limited to what the policy already permits. Both are true: if your policy says "all devices can SSH to all servers", the reach is your whole tailnet. She found two controls that stopped the spread: device-to-device rules instead of tag-wide ones, and binding device keys to hardware such as a TPM. Neither Tailscale nor the report claims exploitation in the wild, and the proof of concept is not public.

One timing detail: Tailscale says it received the report on October 24, about two hours before it was published, so there was no coordinated disclosure window.

## What 1.104.4 changed

The fix moves the work to where the kernel can enforce it. Per reports on the release, forwarding now runs as the logged-in user rather than root, and access control falls back to normal OS file permissions instead of the path allowlist. A user who couldn't open `/var/run/docker.sock` over plain SSH can't open it over Tailscale SSH either.

{{< image "tailscale_ssh_tailworm_socket_forwarding_root/tailscale_ssh_forwarding_before_after.webp" "Before 1.104.4 tailscaled opens docker.sock as root; after, the logged-in user is denied by file permissions" >}}

*The fix swaps a hand-written check for the permission bits the kernel already enforces.*

The other three bulletins in the same release:

- **TS-2026-015:** an allowed SSH session could grow `tailscaled` memory without limit through window-change messages and environment appends. The out-of-memory kill takes down every Tailscale connection on that node.
- **TS-2026-016:** in `tailscale serve`, a forward to a Unix socket could reach the `tailscaled` local API and control the node. A related socket-swap issue is covered too.
- **TS-2026-017:** with TLS serve and two or more mounts, one request could receive another mount's permission headers.

This is not the first socket-forwarding bug in this area. In June, TS-2026-004 (fixed in 1.98.9) let an unprivileged user reach a privileged socket the same way.

## Check and patch your nodes

Check the version on each server. I haven't run these on a patched or unpatched box, so treat the service commands as the usual systemd pattern, not verified output.

```bash
tailscale version
# need 1.104.4 or later
```

If you can't update today, turn off forwarding without turning off Tailscale SSH. Tailscale's workaround is an environment variable in the `tailscaled` service:

```bash
sudo systemctl edit tailscaled
# add under [Service]:
#   Environment="TS_SSH_DISABLE_FORWARDING=1"
sudo systemctl restart tailscaled
```

This blocks the forwarding bug (TS-2026-014). It does nothing for the memory exhaustion or the `serve` issues, so the real fix is still the update.

Then tighten policy while you're there:

- Replace tag-wide or identity-wide SSH accept rules with per-pair rules, so a compromised laptop reaches only the servers it needs.
- Remove `tailscale serve` TCP forwards that point at Unix sockets.
- Don't count on SSH check mode here. It guards session start, not what happens inside an approved session.
- If you think a server was reached, update is not enough. Delete the device in the admin console and rotate keys it could read. Reimaging does not revoke a stolen device key.

The Ostorlab write-up suggests auditd rules for socket unlink, bind and chmod in allowed directories, and alerts on rapid directory renames, if you want detection on top.

## Headscale users

If you self-host the control server, the client update is not the whole story. Reporting on the research says headscale grants forwarding on every accepted SSH session and cannot disable it in policy, and that 0.29.5 (released October 13) doesn't fix the issues. The advice from the researchers is to treat every SSH grant on headscale as a root grant until a server-side fix lands, and to keep the control plane off the open internet. If you're weighing options, our list of [open source Tailscale alternatives](/blog/top_open_source_tailscale_alternatives/) covers the other self-hosted choices.

## Conclusion

Start with `tailscale version` on every node that has Tailscale SSH on, and treat anything under 1.104.4 as a root-equivalent grant for every device your policy lets in. Then read your policy file and ask, for each SSH rule, whether forwarding was something you meant to allow. The primary sources are Tailscale's {{< link href="https://tailscale.com/ssh-investigation-update" >}}investigation update{{< /link >}} and the {{< link href="https://tailscale.com/blog/tailscale-ssh-findings-fixes" >}}findings and fixes post{{< /link >}}, plus the {{< link href="https://blog.ostorlab.co/tailscale-ssh-tailworm-privesc.html" >}}Ostorlab technical write-up{{< /link >}}.
