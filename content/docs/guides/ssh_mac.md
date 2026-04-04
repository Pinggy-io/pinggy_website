---
 title: "SSH into Mac from anywhere"
 description: "Securely SSH into your macOS machine from anywhere with Pinggy. Access your Mac remotely without a public IP or port forwarding."
 date: 2024-04-04T14:15:25+05:30 
 draft: false 
---

# SSH into Mac from anywhere

macOS has a built-in SSH server that allows you to access your Mac's terminal remotely. With Pinggy, you can bypass NAT and firewalls to SSH into your Mac from anywhere in the world.

## Step 1: Enable Remote Login on Mac

To allow SSH connections to your Mac, you must enable "Remote Login":

1. Click the **Apple menu** and select **System Settings** (or **System Preferences**).
2. Go to **General > Sharing** (or just **Sharing** on older versions).
3. Toggle the **Remote Login** switch to **On**.
4. (Optional) Click the **Info** button next to Remote Login to specify which users are allowed to connect.

## Step 2: Start a Pinggy Tunnel

Open the **Terminal** app on your Mac and run the following command to create a TCP tunnel to your SSH port:

```bash
ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
```

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

Pinggy will provide you with a public URL and port, for example:
`tcp://example.pinggy.link:54321`

### Using Your Pinggy Account

If you have a Pinggy account, you can use your token to get a persistent address. Find your token in the [Pinggy Dashboard](https://dashboard.pinggy.io).

```bash
ssh -p 443 -R0:localhost:22 <token>+tcp@a.pinggy.io
```

## Step 3: Access your Mac remotely

Use an SSH client on another machine to connect to your Mac using the Pinggy URL:

```bash
ssh -p 54321 username@example.pinggy.link
```

Replace `54321` and `example.pinggy.link` with the actual values from the tunnel output. `username` is your macOS short username (you can find it by typing `whoami` in the terminal).
