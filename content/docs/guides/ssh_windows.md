---
 title: "SSH into Windows from anywhere"
 description: "Learn how to securely SSH into your Windows machine from anywhere using Pinggy. No public IP or port forwarding required."
 date: 2024-04-04T14:15:25+05:30 
 draft: false 
---

# SSH into Windows from anywhere

SSH (Secure Shell) is a protocol that allows you to securely access and manage your computer remotely. While traditionally associated with Linux, Windows now has built-in support for both SSH client and server.

If your Windows machine is behind NAT, a firewall, or CGNAT, you won't be able to access it remotely without port forwarding. Pinggy solves this problem by providing remote access to your devices without requiring any router configuration.

## Step 1: Enable OpenSSH Server on Windows

Before you can SSH into your Windows machine, you need to enable the OpenSSH Server:

1. Open **Settings** from the Start menu.
2. Navigate to **System > Optional features** (or **Apps > Optional features** depending on your Windows version).
3. Click **Add a feature** (or **View features**) and search for **OpenSSH Server**.
4. Click **Install**.
5. Once installed, open **Services** (search for it in the Start menu).
6. Find **OpenSSH SSH Server**, right-click it, and select **Start**.
7. To make it start automatically, right-click, select **Properties**, and set **Startup type** to **Automatic**.

Alternatively, you can use PowerShell (as Administrator):
```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Start-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'
```

## Step 2: Start a Pinggy Tunnel

Open your terminal (Command Prompt or PowerShell) and run the following command to create a TCP tunnel to your SSH port (default 22):

```bash
ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
```

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

After running the command, Pinggy will provide a public URL and port, such as:
`tcp://example.pinggy.link:12345`

### Using Your Pinggy Account

If you have a Pinggy account, you can use your token to get a persistent address. Find your token in the [Pinggy Dashboard](https://dashboard.pinggy.io).

```bash
ssh -p 443 -R0:localhost:22 <token>+tcp@a.pinggy.io
```

## Step 3: Access your Windows machine remotely

From another computer, use any SSH client to connect to the public URL provided by Pinggy:

```bash
ssh -p 12345 username@example.pinggy.link
```

Replace `12345` with the port and `example.pinggy.link` with the URL from Pinggy. `username` should be your Windows username.

If you are using a Microsoft account, your username might be the first 5 characters of your email address or your full name. You can check it by running `whoami` in the terminal on your Windows machine.
