---
 title: "SSH into Linux PC from anywhere"
 description: "Learn how to SSH into your Linux desktop or server from anywhere using Pinggy. Simple TCP tunneling for remote access without port forwarding."
 date: 2024-04-04T14:15:25+05:30 
 draft: false 
---

# SSH into Linux PC from anywhere

Whether you are using a Linux desktop or a server, SSH is the standard way to manage it remotely. Pinggy allows you to access your Linux machine even if it is behind a restrictive firewall or NAT.

## Step 1: Install and Enable SSH Server

Most Linux distributions come with an SSH server, but it might not be installed or enabled by default.

**On Ubuntu / Debian:**
```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable --now ssh
```

**On Fedora:**
```bash
sudo dnf install openssh-server
sudo systemctl enable --now sshd
```

**On Arch Linux:**
```bash
sudo pacman -S openssh
sudo systemctl enable --now sshd
```

## Step 2: Start a Pinggy Tunnel

Run the following command in your terminal to create a TCP tunnel:

```bash
ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
```

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

You will receive a public URL and port, such as:
`tcp://example.pinggy.link:11223`

### Using Your Pinggy Account

If you have a Pinggy account, you can use your token to get a persistent address. Find your token in the [Pinggy Dashboard](https://dashboard.pinggy.io).

```bash
ssh -p 443 -R0:localhost:22 <token>+tcp@a.pinggy.io
```

## Step 3: Access your Linux machine remotely

From your remote machine, connect using:

```bash
ssh -p 11223 username@example.pinggy.link
```

Replace `11223` and `example.pinggy.link` with the output from Pinggy, and `username` with your Linux username.
