---
 title: "SSH Reverse Tunneling" 
 description: "This article offers a comprehensive guide to SSH reverse tunneling, explaining its role in securely accessing local services from remote locations, even behind firewalls or NATs. It covers common use cases like remote IoT control, database access, and gaming, while also highlighting security best practices and alternatives such as VPNs and Pinggy, a tool that simplifies the tunneling process. Additionally, it explores how Pinggy provides developers with an easy-to-use interface for exposing local services to the internet."
 date: 2024-10-23T14:15:25+05:30
 lastmod: 2024-10-23T15:15:25+05:30
 draft: false 
 tags: ["SSH Reverse Tunneling", "Secure Remote Access", "Firewall Bypass", "Reverse Proxy", ""]
 og_image: "images/ssh_reverse_tunnelling/ssh-reverse-tunneling-img.webp"
 outputs:
  - HTML
  - AMP
---

SSH reverse tunneling is a powerful tool that enables secure remote access to systems or services that are behind firewalls or NATs (Network Address Translation). It is often used to provide external access to local systems and services without modifying the network's security settings. In this detailed guide, we will break down SSH reverse tunneling, explain its applications, highlight security practices, discuss alternatives, and offer an example of how [Pinggy](https://pinggy.io) simplifies the process.

{{< image "ssh_reverse_tunnelling/ssh-reverse-tunneling-img.webp" "SSH Reverse Tunnelling" >}}

## What is SSH Reverse Tunneling?

SSH (Secure Shell) reverse tunneling allows an external machine to connect to a local machine, even if that local machine is behind a firewall or doesn’t have a public-facing IP address. Unlike typical SSH port forwarding, where a local service connects outward to a remote service, reverse tunneling sends traffic from the remote system back to your local machine.

This technique is especially useful for:

- Bypassing firewall restrictions
- Accessing services on a local machine from a remote location
- Enabling remote debugging or testing of applications
- Managing IoT devices, servers, or databases from anywhere

## How SSH Reverse Tunneling Works?

The basic principle of reverse SSH tunneling is to create a connection from a remote machine (which could be a server in the cloud) to your local machine using SSH, forwarding a port from the remote system back to a service running on your local system.

- **Command Syntax:**

    ```
    ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
    ```
    - `-R`: Defines the reverse tunnel
    - `[remote-port]`: The port on the remote machine that forwards traffic
    - `localhost:[local-port]`: The local machine and port running the service
    - `[user]@[remote-host]`: Remote SSH server credentials

For example:

```
ssh -R 8080:localhost:3000 user@remote-server.com
```

In this example, any traffic to `remote-server.com:8080` will be forwarded to port `3000` on your local machine, allowing a user on the remote server to access your locally hosted service.

## How to Set Up SSH Reverse Tunneling:

Setting up SSH reverse tunneling allows you to securely forward traffic from a remote server back to your local machine. The steps may vary depending on your operating system. Here's a guide for **Linux**, **macOS**, and **Windows**.

---

### For Linux


#### Step 1: Ensure SSH is Installed
Most Linux distributions come with SSH pre-installed. If it’s not installed, you can add it using the following commands:

For Ubuntu/Debian:

```bash
sudo apt update
sudo apt install openssh-client
```
#### Step 2: Set Up SSH on the Remote Server

Ensure that SSH is installed and configured to allow reverse tunneling on the remote server. You'll need to edit the SSH configuration file to allow this feature:

1. **Open the SSH configuration file on the remote server**:

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. **Find the line that says `GatewayPorts` and set it to `yes`**:

    ```bash
    GatewayPorts yes
    ```
3. **Restart the SSH service to apply changes**:

    ```bash
    sudo systemctl restart sshd
    ```
#### Step 3: Run the SSH Reverse Tunnel Command:
To create a reverse tunnel, use the following command:

```bash
ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
```

- `[remote-port]`: The port on the remote server you want to forward.
- `[local-port]`: The port on your local machine that receives the forwarded traffic.
- `[user]@[remote-host]`: Your SSH credentials.

Example:
```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

This will forward traffic from `8080` on the remote server to port `3000` on your local machine.

---

### For macOS


#### Step 1: Ensure SSH is Installed
macOS typically comes with SSH pre-installed. However, if it's missing, you can install it using **Homebrew**:

```bash
brew install openssh
```

#### Step 2: Set Up SSH on the Remote Server
Follow the same steps as in the Linux section to configure SSH on the remote server:

1. Edit `/etc/ssh/sshd_config` to allow reverse tunneling:
```bash
sudo nano /etc/ssh/sshd_config
```
2. Set `GatewayPorts` to `yes` and restart the SSH service:
```bash
sudo systemctl restart sshd
```

#### Step 3: Run the SSH Reverse Tunnel Command
The same SSH reverse tunneling command applies to macOS:

```bash
ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
```
For example, if you want to forward port 8080 on the remote server to port 3000 on your local machine:

```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

---

### For Windows

You can set up SSH reverse tunneling on Windows using either OpenSSH (included in Windows 10 and later) or PuTTY.

### Option 1: Using OpenSSH (Windows 10 and Later)

#### Step 1: Install OpenSSH (if not already installed)
To check if OpenSSH is installed, open PowerShell and run:

```bash
ssh
```

If OpenSSH is missing, install it from **Settings > Apps > Optional Features > Add a Feature**, then search for **OpenSSH Client**.

#### Step 2: Set Up SSH on the Remote Server
Configure SSH on the remote server by editing the `/etc/ssh/sshd_config` file as shown in the Linux section, enabling `GatewayPorts`.

#### Step 3: Run the SSH Reverse Tunnel Command
Once OpenSSH is ready, you can use the same SSH command as on Linux and macOS:

```bash
ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
```

Example:

```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

### Option 2: Using PuTTY
If you prefer a graphical interface, use PuTTY for setting up the reverse tunnel.

#### Step 1: Download and Install PuTTY
You can download PuTTY from the official site: {{< link href="https://www.putty.org/" >}}PuTTY Download{{</ link >}}.

#### Step 2: Configure Reverse Tunneling in PuTTY

1. Open PuTTY and enter the remote server’s IP in the **Host Name** field.
2. Navigate to **Connection > SSH > Tunnels**.
3. Under **Source Port**, enter the remote port you want to forward (e.g., `8080`).
4. Under **Destination**, enter `localhost:[local-port]` (e.g., `localhost:3000`).
5. Select **Remote**.
6. Click **Add**, then **Open** to establish the connection.

---

#### Step 4: Access the Tunnel (All Platforms)

Once the reverse tunnel is set up, any traffic directed to the remote server (e.g., `remote-server.com:8080`) will be forwarded to your local machine's port (e.g., `localhost:3000`).

---

#### Optional Step: Persistent Tunnels

If you want the reverse tunnel to persist across SSH session drops or server reboots, use tools like autossh or add the reverse tunnel command to a startup script.


## Common Use Cases for SSH Reverse Tunneling

#### 1. Remote IoT Device Control

Imagine you have a Raspberry Pi running at home that controls various IoT devices (e.g., sensors, cameras).

{{< image "ssh_reverse_tunnelling/Manage-IOT_devices.webp" "Managing-IOT devices-using-ssh reverse-tunnelling" >}}

SSH reverse tunneling enables you to control and access the Raspberry Pi securely from your office or anywhere else:

- **Setup**: SSH into a remote server with a reverse tunnel command:

```
ssh -R 9000:localhost:22 user@remote-server.com
```

Here, `port 9000` on the remote server forwards to port `22` (SSH) on the Raspberry Pi, allowing you to SSH into your Pi through the server:
`ssh -p 9000 user@remote-server.com`

#### 2. Remote Database Access

Accessing databases like MySQL that are behind a firewall can be challenging. SSH reverse tunneling allows developers to securely connect to the database from an external location without exposing the database to the public internet.

- **Example**: To access a MySQL database running on localhost:3306 of a local server, you could run:

```
ssh -R 3307:localhost:3306 user@remote-server.com
```

Now, the MySQL service can be accessed remotely at `remote-server.com:3307` as though it were running locally.

#### 3. Game Hosting and Network Restrictions

Some online multiplayer games may require open ports to host sessions, which can be blocked by NAT or firewall rules. SSH reverse tunneling provides an alternative by forwarding traffic from an external server to your local machine:

- **Setup**: If a game server runs on `localhost:25565`, use reverse tunneling to allow friends to connect:

```
ssh -R 4000:localhost:25565 user@remote-server.com
```

Now others can join your game via `remote-server.com:4000`.

#### 4. Troubleshooting and Common Issues

- **Connection Failures**: If your SSH connection fails, ensure that the remote server allows reverse tunneling (check `sshd_config` for the setting `GatewayPorts`).
- **Authentication Issues**: SSH key issues are common. Ensure that your SSH key is added to the agent using `ssh-add` and use the `-i` flag to specify the key if necessary.
- **Port Conflicts**: If the remote server's port is already in use, specify a different port or check which process is occupying the port using `lsof -i`.

## Security Best Practices for SSH Reverse Tunneling

While SSH reverse tunneling is secure, it's important to follow best practices to prevent unauthorized access:

1. **Use SSH keys**: Disable password-based authentication on your SSH server and only allow access through public/private key pairs for better security.
   `PasswordAuthentication no`
   in the `sshd_config` file.

2. **Passphrase-Protected Keys**: Always protect your private keys with a passphrase to avoid them being compromised in the case of theft.

3. **Restrict Access**: Limit which users and IP addresses can access the reverse tunnel by using firewall rules or specifying allowed users in `sshd_config`:
   `AllowUsers user@ip-address`

4. **Monitoring**: Regularly audit SSH connections and logs to ensure that only authorized users are accessing the tunnel.

## Alternatives to SSH Reverse Tunneling

While SSH reverse tunneling is a powerful tool, there are alternatives that might be more suitable in some situations:

- **VPN (Virtual Private Network)**: A VPN creates a secure tunnel for all network traffic between your machine and a remote network. This can be more scalable and easier to manage if you need access to multiple services or machines on a remote network.

- **Remote Desktop Protocols (RDP)**: If you need to control an entire machine remotely rather than just a single service, RDP may be more convenient.

- **Ngrok**: Another tool similar to reverse SSH tunneling but specialized for web development, allowing you to expose local servers to the internet with a public URL.

Each method has its trade-offs depending on your needs, but SSH reverse tunneling excels in providing secure, flexible access to individual services.

## How Pinggy Uses SSH Reverse Tunneling

Now that we’ve explored SSH reverse tunneling in detail, let’s look at Pinggy, a service that leverages reverse tunneling to make it easier for developers and users to expose their local services to the internet.

Pinggy provides a simple interface to create secure SSH reverse tunnels without the need for a public-facing SSH server. It generates a public URL that routes traffic to your local machine, making it ideal for tasks like webhook testing, remote collaboration, and exposing IoT devices.

Here’s how you can set up an SSH reverse tunnel with Pinggy:

**Basic Tunnel Setup**: You can use the following command to create a reverse tunnel with Pinggy:

```
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```

1. This command does several things:

- It connects to Pinggy’s public server on port 443 (commonly open in firewalls).
- The `-R0:localhost:3000` option creates a reverse tunnel that forwards traffic from the generated public URL to `localhost:3000` on your machine, where your local service is running.

2. **Public URL Generation**: After running the command, Pinggy provides a public URL (e.g., `https://yourapp.pinggy.io`). You can share this URL with others, and any requests to this URL will be forwarded to your local machine’s service.

**Proxy and Firewall Compatibility**: If your network blocks traditional SSH traffic, Pinggy offers additional tools like ncat and openssl to tunnel traffic through HTTPS or SSL, ensuring the tunnel remains operational even in restrictive environments. For example:

```
ssh -p443 -R0:localhost:4000 -o ProxyCommand="ncat --proxy-type http --proxy 192.168.2.2:3128 %h %p" a.pinggy.io
```

## Advantages of Pinggy for SSH Reverse Tunneling

- Pinggy removes the complexity of managing SSH servers and firewalls. With a single command, developers can expose their local applications and obtain a public URL for sharing.

- Pinggy’s tunneling over HTTPS and SSL ensures that even in restrictive environments, your local services can be accessed remotely.

- Pinggy is perfect for testing webhooks or exposing IoT devices, allowing external services or collaborators to interact with your local machine without additional network setup.

## Conclusion

SSH reverse tunneling is a highly flexible and secure way to expose local services to the internet, especially in environments with restrictive firewalls or NATs. It’s an essential tool for developers, system administrators, and anyone needing remote access to local systems.

[Pinggy](https://pinggy.io) builds on the power of SSH reverse tunneling, providing a user-friendly platform that simplifies tunnel setup and management. Whether you’re testing webhooks, managing IoT devices, or remotely accessing machines, Pinggy makes the process effortless while ensuring secure connections.





