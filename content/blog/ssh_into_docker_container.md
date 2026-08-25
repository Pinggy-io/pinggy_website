---
title: "SSH Into Docker Container"
description: "Learn how to securely SSH into Docker containers with practical examples and step-by-step instructions. Master container management and troubleshooting."
date: 2024-10-18T14:15:25+05:30
lastmod: 2026-08-21T14:15:25+05:30
draft: false
og_image: "images/ssh_into_docker_container/ssh_directly_into_docker_using_pinggy.webp"
tags: ["Docker", "ssh", "tunneling", "DevOps"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkhvdyB0byBTU0ggSW50byBhIERvY2tlciBDb250YWluZXIiLAogICJkZXNjcmlwdGlvbiI6ICJUd28gd2F5cyB0byBTU0ggaW50byBhIERvY2tlciBjb250YWluZXI6IGNvbm5lY3QgdG8gdGhlIGhvc3Qgb3ZlciBTU0ggYW5kIHVzZSBkb2NrZXIgZXhlYywgb3IgcnVuIGFuIFNTSCBzZXJ2ZXIgaW5zaWRlIHRoZSBjb250YWluZXIgYW5kIHJlYWNoIGl0IGRpcmVjdGx5IHRocm91Z2ggYSBQaW5nZ3kgVENQIHR1bm5lbC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvc3NoX2ludG9fZG9ja2VyX2NvbnRhaW5lci9zc2hfZGlyZWN0bHlfaW50b19kb2NrZXJfdXNpbmdfcGluZ2d5LndlYnAiLAogICJ0b3RhbFRpbWUiOiAiUFQxME0iLAogICJlc3RpbWF0ZWRDb3N0IjogewogICAgIkB0eXBlIjogIk1vbmV0YXJ5QW1vdW50IiwKICAgICJjdXJyZW5jeSI6ICJVU0QiLAogICAgInZhbHVlIjogIjAiCiAgfSwKICAidG9vbCI6IFt7CiAgICAiQHR5cGUiOiAiSG93VG9Ub29sIiwKICAgICJuYW1lIjogIkRvY2tlciIKICB9LHsKICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgIm5hbWUiOiAiT3BlblNTSCIKICB9LHsKICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH1dLAogICJzdGVwIjogW3sKICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgIm5hbWUiOiAiUnVuIHlvdXIgRG9ja2VyIGNvbnRhaW5lciIsCiAgICAidGV4dCI6ICJTdGFydCB0aGUgY29udGFpbmVyIHlvdSB3YW50IHRvIHJlYWNoLCBmb3IgZXhhbXBsZTogZG9ja2VyIHJ1biAtZCAtLW5hbWUgbXktdWJ1bnR1LWNvbnRhaW5lciB1YnVudHU6bGF0ZXN0IHRhaWwgLWYgL2Rldi9udWxsIgogIH0sewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAibmFtZSI6ICJFbmFibGUgU1NIIG9uIHRoZSBob3N0IGFuZCBnZW5lcmF0ZSBrZXlzIiwKICAgICJ0ZXh0IjogIkVuYWJsZSB0aGUgT3BlblNTSCBzZXJ2ZXIgb24gdGhlIGhvc3QgbWFjaGluZSBhbmQgZ2VuZXJhdGUgYSBrZXkgcGFpciB3aXRoOiBzc2gta2V5Z2VuIC10IGVkMjU1MTkgLUMgXCJ5b3VyX2VtYWlsQGV4YW1wbGUuY29tXCIiCiAgfSx7CiAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICJuYW1lIjogIkV4cG9zZSBTU0ggd2l0aCBhIFBpbmdneSBUQ1AgdHVubmVsIiwKICAgICJ0ZXh0IjogIlJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjIyIHRjcEBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgdGNwOi8vIGFkZHJlc3MgZm9yIHRoZSBTU0ggc2VydmVyLCB3aXRoIG5vIHB1YmxpYyBJUCBvciByb3V0ZXIgY29uZmlndXJhdGlvbiBuZWVkZWQuIgogIH0sewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAibmFtZSI6ICJDb25uZWN0IGFuZCBlbnRlciB0aGUgY29udGFpbmVyIiwKICAgICJ0ZXh0IjogIkNvbm5lY3QgdXNpbmcgdGhlIGFkZHJlc3MgYW5kIHBvcnQgUGluZ2d5IHByaW50ZWQsIHRoZW4gcnVuOiBkb2NrZXIgZXhlYyAtaXQgbXktdWJ1bnR1LWNvbnRhaW5lciBiYXNoIHRvIG9wZW4gYSBzaGVsbCBpbnNpZGUgdGhlIGNvbnRhaW5lci4iCiAgfSx7CiAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICJuYW1lIjogIkFsdGVybmF0aXZlOiBTU0ggZGlyZWN0bHkgaW50byB0aGUgY29udGFpbmVyIiwKICAgICJ0ZXh0IjogIkluc3RhbGwgb3BlbnNzaC1zZXJ2ZXIgaW5zaWRlIHRoZSBjb250YWluZXIsIHN0YXJ0IGl0LCB0aGVuIHJ1biB0aGUgc2FtZSBQaW5nZ3kgVENQIHR1bm5lbCBjb21tYW5kIGZyb20gaW5zaWRlIHRoZSBjb250YWluZXIgdG8gcmVhY2ggdGhlIGNvbnRhaW5lciBTU0ggc2VydmVyIGRpcmVjdGx5LiIKICB9XQp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "ssh_into_docker_container/ssh_into_docker_container_banner.webp" "SSH into Docker Container" >}}

{{< llm-context >}}To reach a Docker container from anywhere with Pinggy - run `ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io` to expose an SSH server over a public `tcp://host:port` address, then either connect to the host and run `docker exec -it my-container bash`, or run the tunnel command from inside a container that has its own `openssh-server` to SSH straight in.{{< /llm-context >}}

Debugging a container that runs on someone else's machine - a cloud VM, a build server, a box behind an office firewall - usually means getting a shell on it first, and the usual `docker exec` only helps once you can already reach the host. Secure Shell (SSH) is the widely supported protocol used for making administrative connections to another computer over the network. It lets you access a different machine and run commands through a terminal as if you were sitting in front of it, which makes it invaluable for system administrators, developers, and network engineers.

In this article, we will explore two methods to SSH into Docker containers and discuss best practices for managing SSH within Docker environments.

{{% tldr %}}

1. **[Method 1: SSH into the host, then `docker exec`](#method-1-ssh-into-host-and-exec-into-docker)** - safer, and the better default. Start your container, enable SSH on the host, then run these on the host:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"   # if you have no key yet
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io          # tunnel the host's SSH
   ```

   Then from anywhere, using the address and port Pinggy printed:

   ```bash
   ssh -p <port> -i ~/.ssh/id_rsa your_username@your-unique-url.a.free.pinggy.link
   docker exec -it my-ubuntu-container bash
   ```

2. **[Method 2: SSH straight into the container](#method-2-ssh-directly-into-docker-using-pinggy)** - when you need the container itself, not the host. Inside the container:

   ```bash
   apt-get update && apt-get install -y openssh-server openssh-client
   mkdir /var/run/sshd
   echo 'root:password' | chpasswd
   sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
   service ssh start
   ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io          # run this inside the container
   ```

   Then connect from your own machine:

   ```bash
   ssh -p <port> root@your-unique-url.a.free.pinggy.link
   ```

{{% /tldr %}}

### How Does SSH Work?

When you log in to an SSH server, the client (your local machine) and the server exchange keys to establish an encrypted tunnel. Everything that crosses it afterwards - commands, files, passwords - is protected from eavesdropping.

Two pieces are needed: an **SSH client** on your machine, which Linux and macOS ship with by default, and an **SSH server** running on the remote machine or container, listening on a port (conventionally 22). The command itself is just `ssh user@host`, where `host` is an IP address or domain name.

## Why is SSH Important for Docker Containers?

Docker has its own tools for container access, so SSH earns its place mainly in production and remote work. It is worth reaching for when you are managing containers on a remote server such as a cloud VM and need safe access to both the host and what runs on it, when the commands and data in transit need to stay encrypted, or when security policy restricts direct Docker access and SSH is the sanctioned way in. It also brings tunneling and port forwarding along with it, which matters once the network between you and the container is not a straight line.

## Method 1: SSH into Host and Exec into Docker
Here you SSH to the host machine that the container runs on, then use the built-in `docker exec` command to get a shell inside the container. It is the simpler and safer of the two methods, and the better default for production.

{{< image "ssh_into_docker_container/ssh_into host_and_exec_into_docker.webp" "SSH into Host and Exec into Docker" >}}

The flow: a Pinggy tunnel exposes the host's SSH server, the host authenticates you, and once you are in, `docker exec` opens a terminal session in the running container.

### Step-by-Step Guide

#### Step 1: Install Docker

Ensure Docker is installed on your system. If not, download it from the {{< link href="https://www.docker.com/get-started" >}}official Docker website{{< /link >}}.

**Verify Docker Installation:**

```bash
docker --version
```

{{< image "ssh_into_docker_container/docker_version.webp" "Docker Version" >}}

#### Step 2: Run Your Docker Container

Run an Ubuntu container:

```bash
docker run -d --name my-ubuntu-container ubuntu:latest tail -f /dev/null
```

This creates a container named `my-ubuntu-container` running in the background.

{{< image "ssh_into_docker_container/docker_container_id.webp" "Docker Container Id" >}}

#### Step 3: Secure Access with SSH Keys

To begin, we need to generate an SSH key pair and set this up securely so that we can SSH into our system. In this step, we create the private (`~/.ssh/id_rsa`) and public keys, which are required.

- Run the following command in your terminal to generate an SSH key:

    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

    - `-t rsa`: Specifies RSA key generation.
    - `-b 4096`: Creates a 4096-bit key.
    - `-C`: Adds a comment (typically your email) to the key for identification.

- When prompted, save the key in the default location by pressing **Enter**.
- Optional: Add a passphrase for extra security.


#### Step 4: Enable SSH on Your System

##### *For macOS:*

1. **Enable SSH server on your host machine:**

    ```bash
    sudo systemsetup -setremotelogin on
   ```

2. **Verify SSH is enabled:**

   ```bash
   sudo systemsetup -getremotelogin
   ```

**You should see:**

  ``` 
  Remote Login: On 
  ```

*Note:* If prompted for Full Disk Access, enable it in **Settings > Privacy & Security > Full Disk Access**.

---

##### *For Linux:*

1. **Install OpenSSH Server:**

   ```bash
   sudo apt update
   sudo apt install openssh-server
   ```

2. **Enable and Start SSH Service:**

   ```bash
   sudo systemctl enable ssh
   sudo systemctl start ssh
   ```

3. **Verify SSH is Running:**

   ```bash
   sudo systemctl status ssh
   ```

   You should see a status indicating that the SSH service is active and running.

---

##### *For Windows:*

1. **Install OpenSSH Server:**

   - Go to **Settings > Apps > Optional features**.
   - Click on **Add a feature**.
   - Scroll down to **OpenSSH Server**, select it, and click **Install**.

2. **Start and Configure SSH Service:**

   - Open **PowerShell** as an administrator.
   - Run the following commands:

     ```powershell
     Start-Service sshd
     Set-Service -Name sshd -StartupType 'Automatic'
     ```

3. **Allow SSH Through Firewall:**

   ```powershell
   New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH SSH Server' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
   ```

4. **Verify SSH Service:**

   ```powershell
   Get-Service sshd
   ```

   Ensure the service status is **Running**.

---

*Note:* After enabling SSH, you might need to refresh your system settings or restart your machine for the changes to take effect.

#### Step 5: Secure Tunneling Using Pinggy

If the client you are connecting from and the host where the container is running are within the same network, then you can use the IP address of the host to establish an ssh connection. However, often the client and the host are on different networks, and the host might not have a public IP address to make it accessible. In such cases, [Pinggy](https://pinggy.io) can be used to create a TCP Tunnel to your SSH server so that you can access it from the public internet.


- **Sign up for Pinggy:** If you don’t have a Pinggy account, register at the {{< link href="https://dashboard.pinggy.io/" >}}Pinggy dashboard{{< /link >}}.

- **Create a TCP Tunnel:** Once registered, run the following command to create a tunnel:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io">}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\"}}}"
{{</ ssh_command >}}

The command above simply sets up a tunnel from your system SSH Port (22) out to public internet through Pinggy.

{{< image "ssh_into_docker_container/secure_tunneling_using_pinggy.webp" "Secure Tunneling Using Pinggy" >}}

#### Step 6: Connect to SSH via Public URL

After creating the tunnel, Pinggy will provide a public URL like this:

```
tcp://your-unique-url.a.free.pinggy.link:port
```

Run `whoami` on the host to confirm your username, then connect using the address and port Pinggy printed:

```bash
ssh -p <port> -i ~/.ssh/id_rsa your_username@your-unique-url.a.free.pinggy.link
```

*Replace `<port>`, `your_username`, and `your-unique-url` with your actual details.*

{{< image "ssh_into_docker_container/connect-to-ssh-via-public-url.webp" "Connect to SSH via Public URL" >}}

#### Step 7: Access Docker Container

Once connected to your system over SSH, run:

```bash
docker exec -it my-ubuntu-container bash
```

This opens a terminal inside your running Docker container.

## Method 2: SSH Directly into Docker Using Pinggy

When you need SSH access straight into the container rather than the host, run an SSH server inside the container itself. Pinggy then exposes it publicly, so this works even when the host has no public IP address.

{{< image "ssh_into_docker_container/ssh_directly_into_docker_using_pinggy.webp" "SSH Directly into Docker Using Pinggy" >}}

The flow: Pinggy publishes a public endpoint and forwards connections to port 22 inside the container, where the container's own SSH server picks them up.

### Step-by-Step Guide

#### 1. Set Up Ubuntu Docker Container


**Run an Ubuntu Container:**

We are using an ubuntu container image for demonstrating this method. You can install ssh server in your own existing containers.


```bash
docker run -it --name ssh-container ubuntu
```

{{< image "ssh_into_docker_container/run_ubuntu_container.webp" "Ubuntu Container" >}}

**Install OpenSSH Server Inside the Container:**

Install the server so the container can accept SSH connections, and the client so it can open the outbound Pinggy tunnel in the next step:

```bash
apt-get update
apt-get install -y openssh-server openssh-client
```

{{< image "ssh_into_docker_container/install_openssh_server.webp" "Install OpenSSH Server" >}}

**Configure SSH Server:**

```bash
mkdir /var/run/sshd
```

**Set a root password (replace password with your desired password):**
```bash
echo 'root:password' | chpasswd
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
```

{{< image "ssh_into_docker_container/set_root_password.webp" "Set Root Password" >}}

**Start SSH Service:**

```bash
service ssh start
```

{{< image "ssh_into_docker_container/start_ssh_service.webp" "Start SSH Service" >}}

#### 2. Create a Tunnel Using Pinggy

**Run the Pinggy Tunnel Command:**
Run this **from inside the container**, in the same shell where you just started the SSH service. That matters: the container's port 22 is not published to the host, so `localhost:22` only resolves to the container's own SSH server from within the container. Running it on the host would tunnel the *host's* SSH server instead, which is Method 1.

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io">}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:22 tcp@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@free.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "ssh_into_docker_container/create_a_tunnel_using_pinggy.webp" "Start SSH Service" >}}

**Get the Public URL:**
After executing the command, Pinggy gives you a public address that anyone can use to reach the container's SSH server. It looks like this:

```
tcp://your-unique-url.a.free.pinggy.link:port
```

Since the tunnel process runs in the foreground, keep that shell open. Open a second shell into the container with `docker exec -it ssh-container bash` if you need to poke around while the tunnel is up.

#### 3. SSH into the Container

From your own machine, connect to the container's SSH server over the public Pinggy address. Replace `<port>` and the hostname with the values Pinggy printed:

```bash
ssh -p <port> root@your-unique-url.a.free.pinggy.link
```

**Authenticate:**

Enter the password you set earlier (`password` in this example).

{{< image "ssh_into_docker_container/ssh_into_the_container.webp" "SSH Into The Container" >}}

## Conclusion

SSH is useful for working with Docker containers, but it works best used sparingly. Reach a container either by SSHing into the host and running `docker exec`, or by running an SSH server inside the container and connecting directly - a {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} TCP tunnel makes either work without a public IP. Prefer `docker exec` day to day, use key-based auth on any SSH server you expose, and let centralized logging answer the questions that would otherwise send you hunting for a shell.

