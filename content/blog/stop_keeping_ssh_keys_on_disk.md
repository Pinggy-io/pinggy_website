---
title: "Stop Keeping SSH Private Keys on Disk: Agents, Enclaves and FIDO2"
description: "Credential stealers read ~/.ssh/id_ed25519 like any other file. How an SSH agent signs without exposing the key, and how Bitwarden, 1Password, Secure Enclave, FIDO2 and TPM agents compare."
date: 2026-11-24T18:30:00+05:30
lastmod: 2026-11-24T18:30:00+05:30
draft: false
tags: ["ssh", "security", "supply chain security", "DevOps"]
eyebrow: "SSH keys"
og_image: "images/stop_keeping_ssh_keys_on_disk/stop_keeping_ssh_keys_on_disk_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlN0b3AgS2VlcGluZyBTU0ggUHJpdmF0ZSBLZXlzIG9uIERpc2s6IEFnZW50cywgRW5jbGF2ZXMgYW5kIEZJRE8yIiwKICAiZGVzY3JpcHRpb24iOiAiQ3JlZGVudGlhbCBzdGVhbGVycyByZWFkIH4vLnNzaC9pZF9lZDI1NTE5IGxpa2UgYW55IG90aGVyIGZpbGUuIEhvdyBhbiBTU0ggYWdlbnQgc2lnbnMgd2l0aG91dCBleHBvc2luZyB0aGUga2V5LCBhbmQgaG93IEJpdHdhcmRlbiwgMVBhc3N3b3JkLCBTZWN1cmUgRW5jbGF2ZSwgRklETzIgYW5kIFRQTSBhZ2VudHMgY29tcGFyZS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc3RvcF9rZWVwaW5nX3NzaF9rZXlzX29uX2Rpc2svc3RvcF9rZWVwaW5nX3NzaF9rZXlzX29uX2Rpc2tfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiAgICB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMS0yNFQxODozMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTI0VDE4OjMwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvc3RvcF9rZWVwaW5nX3NzaF9rZXlzX29uX2Rpc2svIiB9LAogICJhcnRpY2xlU2VjdGlvbiI6ICJTZWN1cml0eSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAic3NoIGtleXMgb24gZGlzaywgc3NoIGFnZW50LCBCaXR3YXJkZW4gU1NIIGFnZW50LCAxUGFzc3dvcmQgU1NIIGFnZW50LCBTZWN1cmUgRW5jbGF2ZSBTU0gga2V5LCBlZDI1NTE5LXNrLCBGSURPMiBTU0gga2V5LCBzc2gtdHBtLWFnZW50LCBTU0ggY29tbWl0IHNpZ25pbmciLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU1NIIGFnZW50IiwgImRlc2NyaXB0aW9uIjogIkEgcHJvY2VzcyB0aGF0IGhvbGRzIHByaXZhdGUga2V5cyBhbmQgc2lnbnMgYXV0aGVudGljYXRpb24gcmVxdWVzdHMgb3ZlciBhIFVuaXggc29ja2V0IHdpdGhvdXQgZXhwb3J0aW5nIHRoZSBrZXkuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJCaXR3YXJkZW4gU1NIIGFnZW50IiwgImRlc2NyaXB0aW9uIjogIkFuIFNTSCBhZ2VudCBpbiB0aGUgQml0d2FyZGVuIGRlc2t0b3AgYXBwIHRoYXQgc2VydmVzIEVkMjU1MTkgYW5kIFJTQSBrZXlzIGZyb20gdGhlIHZhdWx0LiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiMVBhc3N3b3JkIFNTSCBhZ2VudCIsICJkZXNjcmlwdGlvbiI6ICJBbiBTU0ggYWdlbnQgaW4gdGhlIDFQYXNzd29yZCBkZXNrdG9wIGFwcCB3aXRoIHBlci1hcHBsaWNhdGlvbiBhcHByb3ZhbCBwcm9tcHRzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiU2VjdXJlIEVuY2xhdmUiLCAiZGVzY3JpcHRpb24iOiAiQXBwbGUgaGFyZHdhcmUgdGhhdCBnZW5lcmF0ZXMgUC0yNTYga2V5cyBhbmQgc2lnbnMgd2l0aCB0aGVtIGJ1dCBjYW5ub3QgZXhwb3J0IHRoZW0uIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJGSURPMiBzZWN1cml0eSBrZXkiLCAiZGVzY3JpcHRpb24iOiAiQSBoYXJkd2FyZSB0b2tlbiBPcGVuU1NIIDguMiBhbmQgbGF0ZXIgY2FuIHVzZSB0aHJvdWdoIGVkMjU1MTktc2sgYW5kIGVjZHNhLXNrIGtleSB0eXBlcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkNyZWRlbnRpYWwgc3RlYWxlciIsICJkZXNjcmlwdGlvbiI6ICJNYWx3YXJlLCBvZnRlbiBkZWxpdmVyZWQgdGhyb3VnaCBhIGNvbXByb21pc2VkIHBhY2thZ2UsIHRoYXQgY29waWVzIGtleSBhbmQgdG9rZW4gZmlsZXMgZnJvbSBhIGRldmVsb3BlciBtYWNoaW5lLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "stop_keeping_ssh_keys_on_disk/stop_keeping_ssh_keys_on_disk_banner.webp" "A crossed-out key file ~/.ssh/id_ed25519, an SSH agent box with Bitwarden, 1Password, Apple and Yubico marks, and a server that receives only a signature" >}}

`~/.ssh/id_ed25519` is a text file of about 400 bytes that any program running as you can read. The npm worm that hit `keyv` and 443 other packages on August 4, 2026 did exactly that: its scanner walked the disk with about 200 glob patterns, and `id_rsa`, `id_ed25519` and `.ssh/config` were on the list, according to <a href="https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack" target="_blank">Aikido's write-up</a>. The fix is old and a bit boring. Keep the private key somewhere that can sign with it but won't hand it over, and delete the file. This post walks through how that works with one ed25519 key, what each place you can put the key actually protects against, and what none of them fix.

{{% tldr %}}

1. **A private key file is readable by every process you run.** One `npm install` of a compromised package is enough to copy it, and a copied key works from anywhere until you remove it from every `authorized_keys`.
2. **An SSH agent signs for you over a Unix socket.** `ssh` sends it the data to sign and gets back a signature. The agent protocol has no message that returns a private key.
3. **Where the agent keeps the key is the real choice**: process memory (`ssh-agent`), a password manager vault (Bitwarden, 1Password), or hardware that cannot export it (Secure Enclave, a FIDO2 token, a TPM).
4. **An agent stops theft, not use.** Malware running as you can still ask an unlocked agent to sign. Per-use approval and a touch requirement are what limit that.
5. **Check your own machine** with `grep -rl "PRIVATE KEY" ~ 2>/dev/null`. Anything it prints is a key a stealer would have taken.

{{% /tldr %}}

## What a credential stealer takes from ~/.ssh

The recent stealers are not clever about SSH. They don't hook into anything or log keystrokes. They open files. Aikido's analysis of the August worm lists the targets: `~/.npmrc`, `~/.aws/credentials`, `~/.kube/config`, `.env` files, `*.pem`, `*.key`, and for SSH, `id_rsa`, `id_ed25519` and `.ssh/config`. Everything gets encrypted with the attacker's RSA key and pushed to a public GitHub repo. The `wfx` GitHub Actions stealer from mid-November reads `~/.ssh` too, per <a href="https://safedep.io/blog/github-actions-wfx-credential-stealer" target="_blank">SafeDep's report</a>.

The `.ssh/config` part is what turns a stolen key into access. It's a list of your hostnames, usernames and ports, so the attacker doesn't have to guess where the key works.

A passphrase on the key helps against this class of attack, and it's worth being fair about that: an encrypted key file is useless to a file-grabber on its own. Two things undercut it in practice. Lots of people press Enter at the passphrase prompt, and the ones who don't usually run `ssh-add` once and leave the decrypted key in an agent all day anyway. If you're already going to use an agent, you may as well stop keeping the file.

## How an SSH agent signs without giving up the key

Public key authentication in SSH never sends the private key anywhere. The client proves it holds the key by signing a blob made of the session identifier, the username and the public key, and the server verifies that signature against the line in `authorized_keys`.

An agent moves that signing step into a seperate process. `ssh` connects to the Unix socket named in `SSH_AUTH_SOCK` (or `IdentityAgent` in `~/.ssh/config`), asks which public keys the agent has, and then sends a sign request with the blob. The agent replies with a signature. That's the whole conversation. The <a href="https://datatracker.ietf.org/doc/html/draft-ietf-sshm-ssh-agent" target="_blank">agent protocol</a> can add keys, remove keys, list public keys and sign. It has no "export private key" message, so whatever sits behind the socket decides how well the key is protected.

{{< image "stop_keeping_ssh_keys_on_disk/ssh_agent_sign_request_sequence.webp" "Sequence diagram of one ssh login: ssh asks the agent for public keys, offers one to the server, sends the agent a sign request, gets a signature back and passes it to the server" >}}

## Moving one key into an agent and deleting the file

Here's the smallest version, using the stock `ssh-agent` that ships with OpenSSH. I ran this on Ubuntu 24.04 with `OpenSSH_9.6p1` against an `sshd` on port 2222 that only accepts public keys. The key is an ed25519 key with the comment `laptop`.

```bash
$ ssh-add ~/.ssh/id_ed25519
Identity added: /home/me/.ssh/id_ed25519 (laptop)
$ ssh-add -l
256 SHA256:woyd1JHlGoBvHvIPbY44QYCEsefUMRahMzeHVfmSypI laptop (ED25519)
$ rm ~/.ssh/id_ed25519
$ ls ~/.ssh
id_ed25519.pub
```

The private key now exists only in the agent's memory. Logging in still works, and `ssh -v` shows where the key came from. Every default path comes back `type -1` (not found), and the one key it tries is marked `agent`:

```text
debug1: identity file /home/me/.ssh/id_ed25519 type -1
debug1: get_agent_identities: agent returned 1 keys
debug1: Will attempt key: laptop ED25519 SHA256:woyd1J...ypI agent
debug1: Offering public key: laptop ED25519 SHA256:woyd1J...ypI agent
debug1: Server accepts key: laptop ED25519 SHA256:woyd1J...ypI agent
Authenticated to 127.0.0.1 ([127.0.0.1]:2222) using "publickey".
```

With the agent socket unset, the same command fails with `Permission denied (publickey).`, which is the proof that nothing on disk can log in anymore.

Don't do this on your real key yet. `ssh-agent` holds keys in RAM, so a reboot would lose a key whose file you just deleted. Stock `ssh-agent` is the mechanism; for daily use the key needs a home that survives a restart.

## Where the key can live instead

Every option below speaks the same agent protocol, so `ssh`, `git`, `scp` and `rsync` don't know the difference. What changes is where the private key sits and who can get it out.

{{< image "stop_keeping_ssh_keys_on_disk/where_ssh_private_key_can_live.webp" "Five places an SSH private key can live, from a file in ~/.ssh that needs one file read to copy, to a Secure Enclave or FIDO2 token that cannot be exported" >}}

| Where the key lives | Survives reboot | Can be backed up | Works on | Asks before signing |
|---|---|---|---|---|
| `ssh-agent` memory | No | Only if you keep the file | Everywhere | Only with `ssh-add -c` |
| Bitwarden vault | Yes | Yes, it syncs | macOS, Linux, Windows | Configurable |
| 1Password vault | Yes | Yes, it syncs | macOS, Linux, Windows | Yes, per application |
| macOS Secure Enclave | Yes | No | Apple silicon and T2 Macs | Touch ID |
| FIDO2 token (YubiKey etc.) | Yes | No, enroll a second token | Anywhere with OpenSSH 8.2+ | Touch |
| TPM 2.0 | Yes | No | Linux, mostly | Optional PIN |

### Bitwarden's SSH agent

The Bitwarden desktop app runs an agent backed by the vault. You turn on "Enable SSH agent" in Settings, then point `ssh` at its socket:

```text
Host *
  IdentityAgent ~/.bitwarden-ssh-agent.sock
```

The path depends on how you installed it, which catches people out. The <a href="https://bitwarden.com/help/ssh-agent/" target="_blank">Bitwarden docs</a> list `~/.bitwarden-ssh-agent.sock` for the `.dmg` and plain Linux builds, `~/Library/Containers/com.bitwarden.desktop/Data/.bitwarden-ssh-agent.sock` for the Mac App Store build, `~/snap/bitwarden/current/.bitwarden-ssh-agent.sock` for Snap, and `~/.var/app/com.bitwarden.desktop/data/.bitwarden-ssh-agent.sock` for Flatpak. On Windows it takes over the OpenSSH pipe, so you disable the "OpenSSH Authentication Agent" service first.

Limits, from the <a href="https://bitwarden.com/help/about-ssh/" target="_blank">About SSH page</a>: it handles Ed25519 and RSA keys only, it can generate only Ed25519, imports must be OpenSSH or PKCS#8 format (PuTTY keys don't import), and you can't manage it with `ssh-add`. It also offers every key in the vault in turn, so with several keys a server can cut you off for too many failed attempts before it reaches the right one. The workaround is `IdentityFile` pointing at the matching `.pub` file for that host.

It works on a locked vault in a sensible way: listing keys is allowed, signing prompts you to unlock. I haven't run Bitwarden's agent on the test box for this post (it has no desktop session), so the above is from the docs, not from my terminal.

### 1Password's SSH agent

Same idea, older implementation. The socket is `~/Library/Group Containers/2BUA8C4S2C.com.1password/t/agent.sock` on macOS and `~/.1password/agent.sock` on Linux, per the <a href="https://www.1password.dev/ssh/get-started/" target="_blank">1Password docs</a>. Ed25519 and RSA again.

The approval model is the part I like. Each request prompts for Touch ID, Windows Hello or your password, and an approval covers that key for that application until 1Password locks. So your terminal approving a login does not let a random background process sign with the same key. Two catches: the Flatpak and Snap builds don't support the agent at all, and the docs warn that with more than six keys OpenSSH servers may reject you, for the same too-many-attempts reason as Bitwarden.

A fair objection to both vault options is that the private key now syncs through someone's cloud. It's encrypted with a key derived from your master password, so the trade is "a stealer needs my file" for "an attacker needs my vault unlocked". For most people that is a clear improvement. If it isn't for you, use hardware.

### Secure Enclave on a Mac

The Secure Enclave generates a P-256 key inside the chip and will sign with it but never export it. <a href="https://github.com/maxgoedjen/secretive" target="_blank">Secretive</a> (9.5k stars as of November 24, 2026, `brew install secretive`) has been the usual way to get an agent in front of it, with Touch ID on each use and a notification whenever a key is accessed.

Recent macOS can also do it with no third-party app. `sc_auth` creates the key and `/usr/lib/ssh-keychain.dylib` presents it to OpenSSH as a security-key type key:

```bash
sc_auth create-ctk-identity -l ssh -k p-256-ne -t bio
export SSH_SK_PROVIDER=/usr/lib/ssh-keychain.dylib
ssh-add -K
```

These commands come from a widely shared <a href="https://gist.github.com/arianvp/5f59f1783e3eaf1a2d4cd8e952bb4acf" target="_blank">community gist</a>, not from Apple documentation, and I couldn't run them on the Linux test box. Read `man sc_auth` and `man ssh-keychain` on your own Mac before trusting them. The key shows up as `sk-ecdsa-sha2-nistp256@openssh.com`, which some servers with strict key-type allowlists refuse.

The cost is the same either way: the key can't be backed up or moved. A new Mac means a new key and a round of updating `authorized_keys` everywhere. Enroll a second key from another device before you need it.

### A FIDO2 token

OpenSSH has supported FIDO keys natively since 8.2, with no agent needed:

```bash
ssh-keygen -t ed25519-sk -O resident -O verify-required
```

This still writes a file to `~/.ssh/id_ed25519_sk`, but it holds a key handle, not a private key. It is useless without the physical token plugged in, so a stealer that copies it gets nothing. `-O verify-required` (OpenSSH 8.4+) adds a PIN on top of the touch, and `-O resident` stores the handle on the token so `ssh-add -K` can load it on another machine.

This is the strongest option against remote attackers, because every signature needs a finger on a device. It's also the most annoying. GitHub doesn't accept no-touch keys, so every `git push` and `git fetch` is a tap. I'd use it for production servers and something softer for Git. Again, untested here: the test box has no USB.

### A TPM on Linux

Most PCs from the last decade have a TPM 2.0 chip, and <a href="https://github.com/Foxboron/ssh-tpm-agent" target="_blank">ssh-tpm-agent</a> (820 stars as of November 24, 2026) puts an agent in front of it. `ssh-tpm-keygen` creates `~/.ssh/id_ecdsa.tpm`, and the agent runs as a systemd user service after `ssh-tpm-agent --install-user-units`.

There is still a file on disk here, and that's fine. The `.tpm` file is sealed by the chip, so copying it to another machine gets you bytes that only the original TPM can use. A PIN is optional, and the TPM's own lockout stops brute-forcing it.

## What an agent does not protect

Moving the key changes what malware can steal. It does not change what malware running as you can do while it's running. Any process with your UID can open the agent socket, and it's worth seeing how little that takes. This is the entire "list keys" request against the stock agent:

```python
import socket, os, struct
s = socket.socket(socket.AF_UNIX)
s.connect(os.environ["SSH_AUTH_SOCK"])
s.sendall(struct.pack(">IB", 1, 11))   # SSH_AGENTC_REQUEST_IDENTITIES
print(s.recv(4096)[4])                 # 12 = SSH_AGENT_IDENTITIES_ANSWER
```

It printed `12` on my box, and a sign request is not much longer. So a stealer that's aware of agents can log into your servers from your machine, while your agent is unlocked. That's a much smaller window than "forever, from anywhere", and it disappears when you close the laptop, but it's not nothing.

What narrows it further:

- Per-use approval. 1Password's per-application prompt, Bitwarden's authorization setting, Touch ID on the enclave, a touch on a token. With stock `ssh-agent`, `ssh-add -c -t 4h` asks for confirmation on every use and drops the key after four hours. It needs an `ssh-askpass` program installed to show the prompt.
- Not approving by reflex. If you get a Touch ID prompt forty times a day you'll stop reading them. A prompt you didn't cause is the signal, and it only works if prompts are rare enough to notice.
- Skipping agent forwarding. `ssh -A` exposes your agent socket to root on the remote host for as long as you're connected. Use `ssh -J jumphost target` instead; [ProxyJump](/blog/accessing_remote_servers_with_ssh_proxyjump_and_jump_hosts/) keeps the signing on your machine.
- On Linux, checking `sysctl kernel.yama.ptrace_scope`. Ubuntu sets it to `1`, which stops one of your processes attaching a debugger to another. On `0`, a same-user process has more ways to get at an agent's memory.

## Signing Git commits from the same agent

Git has been able to sign commits with SSH keys since 2.34, and it can take the key straight from the agent, so signing doesn't drag a key file back onto disk. With Git 2.43:

```bash
git config --global gpg.format ssh
git config --global user.signingkey "key::$(ssh-add -L | grep laptop)"
git config --global commit.gpgsign true
```

A commit then carries a `gpgsig -----BEGIN SSH SIGNATURE-----` header, which you can see with `git cat-file -p HEAD`. To verify locally, put `you@example.com ssh-ed25519 AAAA...` in a file and point `gpg.ssh.allowedSignersFile` at it. `git log --show-signature` then prints:

```text
Good "git" signature for a@b.c with ED25519 key SHA256:OqbCCi87f0b5N+IuuAdLOuBqG2/eHRbwYVDId/2e0cE
```

On GitHub, add the same public key a second time as a "Signing Key". A neat trick from <a href="https://jola.dev/posts/you-cant-afford-ssh-keys-disk" target="_blank">Johanna Larsson's post</a> on her Bitwarden setup: use one key for auth and a different one for signing, so a commit and a push each need thier own approval.

## Tunnels and other SSH-based tools still work

Anything that shells out to `ssh` picks up the agent through `SSH_AUTH_SOCK` or `IdentityAgent`, so reverse tunnels need no changes. A [Pinggy](https://pinggy.io) tunnel is a plain `ssh -R` command:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

The free tier doesn't check your key against anything, but `ssh` asks you for a password when it has no key at all to offer. With an agent running, it offers the agent's key and skips the prompt, the same as it did when the file was on disk. I couldn't confirm that from the test box, which has no outbound SSH, so treat it as expected behaviour from how OpenSSH picks identities. If a tool reads a key path directly instead of calling `ssh` (some deploy scripts and older Git GUIs do), it will break, and that's the main thing to look for after you delete the file.

## Check what is still on your disk

Before deleting anything, add a second way in: a second key in `authorized_keys`, or console access through your provider. Then find out what a stealer would recieve from your machine today:

```bash
grep -rl "PRIVATE KEY" ~ 2>/dev/null
```

That matches OpenSSH, PEM and PKCS#8 headers. Expect surprises in `~/Downloads`, old project folders and cloud-provider `.pem` files. For each hit: import it into whichever agent you picked, confirm `ssh-add -L` lists it, log in once with `ssh -v` and look for the word `agent` on the "Offering public key" line, and only then delete the file. If the machine has run an `npm install` from one of the compromised package versions, skip the import and generate new keys. A key that may have been copied isn't worth moving.
