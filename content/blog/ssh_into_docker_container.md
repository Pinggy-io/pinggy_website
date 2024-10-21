---
title: "SSH Into Docker Container"
description: "Learn how to securely SSH into Docker containers with practical examples and step-by-step instructions. Master container management and troubleshooting in your development workflow."
date: 2024-10-18T14:15:25+05:30
lastmod: 2024-10-18T14:15:25+05:30
draft: false
tags: ["guide", "docker", "SSH", "container management"]
outputs:
  - HTML
  - AMP
---

Secure Shell (SSH) is a widely supported protocol used for remotely making administrative connections to another computer on the network. It enables individuals to access a different computer and run commands through a terminal as if they were physically with the system. SSH is invaluable for system administrators, developers, and network engineers.

In this article, we will explore two methods to SSH into Docker containers and discuss best practices for managing SSH within Docker environments.

{{< image "ssh_into_docker_container/img1.webp" "SSH into Docker Container" >}}

{{% tldr %}}

1. **Method 1: SSH into Host and Exec into Docker**

   **Steps:**

   - **Run your Docker container.**

   - **Generate SSH keys on your host:**

     ```bash
     ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
     ```

   - **Create a secure tunnel using Pinggy:**

     ```bash
     ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
     ```

   - **Connect to SSH via public URL provided by Pinggy:**

     ```bash
     ssh -p <port> -i ~/.ssh/id_rsa your_username@your-unique-url.a.free.pinggy.link
     ```

   - **Access Docker container:**

     ```bash
     docker exec -it my-ubuntu-container bash
     ```

   **Continue reading [Method 1](#method-1-ssh-into-host-and-exec-into-docker)**

2. **Method 2: SSH Directly into Docker Using Pinggy**

   **Steps:**

   - **Set up your container. Example with Ubuntu container:**

     ```bash
     docker run -it --name ssh-container ubuntu
     ```

   - **Install OpenSSH server inside the container:**

     ```bash
     apt-get update
     apt-get install -y openssh-server
     mkdir /var/run/sshd
     ```

   - **Configure SSH server and set root password:**

     ```bash
     echo 'root:password' | chpasswd
     sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
     service ssh start
     ```

   - **Create a tunnel using Pinggy:**

     ```bash
     ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
     ```

   - **SSH into the container via the public URL provided by Pinggy:**

     ```bash
     ssh -p <port> root@your-unique-url.a.free.pinggy.link
     ```

   **Continue reading [Method 2](#method-2-ssh-directly-into-docker-using-pinggy)**

{{% /tldr %}}

### What is SSH?

SSH is a widely supported protocol that is used for remotely making administrative connections to another computer over the network. It enables individuals to access a different computer and run commands through a terminal as if they were physically with the system. Commonly, SSH is used to accomplish an encrypted and secure communication channel between a client and a server, so such a tool is invaluable for system administrators, developers, and network engineers.
SSH is often used in handling cloud-based servers, managing distant services or even Docker instances as we will explain in this guide.


### How Does SSH Work?

When you ‘log in’ to an SSH server for the first time, the communication between the client (usually your computer or device you are using) and the SSH server is to exchange secret keys to form what is referred to as an encrypted ‘tunnel’. This helps to make certain that any information exchange between them – in the form of commands, files, and passwords, etc. is not vulnerable to eavesdropping.
SSH uses a client-server model of operation, in that the client initiates connection requests to the server. To set up an SSH session, you typically need:

**Requirements to Set Up an SSH Session:**

- **An SSH client:** A tool run locally on your machine. Most Linux distributions and macOS come with the OpenSSH client pre-installed.
- **An SSH server:** An SSH server has to be installed and running on the remote machine or container. This is what waits for connection requests over an SSH server on a specific port, most preferably port number 22.


**Basic SSH Command Syntax:**

```bash
ssh user@host
```

- `user`: The username on the remote machine.
- `host`: The IP address or domain name of the remote server.

**Example:**

```bash
ssh john@192.168.1.100
```

## Why is SSH Important for Docker Containers?

SSH can be effective in container management irrespective of the working environment, but it is more effective for production projects and for remote work. While Docker provides its own set of tools for container access, SSH is often used when:

- **Managing containers on remote servers:** Whenever you have Docker containers running in the context of a virtual machine, such as cloud services, SSH allows you easy and safe access to both the host and its containers.
- **Needing secure, encrypted access:** SSH makes sure that any commands or data in transit between you and the container is encrypted.
- **Restricted from direct Docker access:** Though in some contexts, direct access to docker can be prohibited via security policies then SSH becomes the favored way of engaging the container.

SSH also enables tunneling, port forwarding, and other features that may be helpful when dealing with containers remotely. or in a specific network topological structure.

## Method 1: SSH into Host and Exec into Docker
In this method, you will initially connect a terminal to the host machine, where the Docker container is launched from by using SSH. After getting on the host, it is possible to use a built-in `docker exec` command to work in the container. This is a quite simple and safe process if you deal with the containers in a production mode.


### Diagram Overview

{{< image "ssh_into_docker_container/ssh_into host_and_exec_into_docker.webp" "SSH into Host and Exec into Docker" >}}

**Diagram flow Summary**
  - Pinggy tunnel allows the user to access the host.
  - Authentication is handled by the SSH server on the host, granting user access.
  - Once authenticated, Docker commands (like `docker exec`) can be used to open a terminal session in the running Docker container.

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

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:22 tcp@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\"}}}"
{{</ ssh_command >}}

The command above simply sets up a tunnel from your system SSH Port (22) out to public internet through Pinggy.

{{< image "ssh_into_docker_container/secure_tunneling_using_pinggy.webp" "Secure Tunneling Using Pinggy" >}}

#### Step 6: Connect to SSH via Public URL

After creating the tunnel, Pinggy will provide a public URL like this:

```
tcp://your-unique-url.a.free.pinggy.link:port
```

- To connect to your system using the Pinggy-generated URL, follow these steps:

   - **Find Your Username:** Run this command:
    
     ```bash
     whoami
     ```

    - **Connect via SSH:** Use the following command to establish an SSH connection:
    
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

In this method, where you need direct SSH access to a Docker container, you can set up an SSH server inside the container itself. This method allows you to establish an SSH connection directly into the container using Pinggy, even if the host lacks a public IP address.


### Diagram Overview

{{< image "ssh_into_docker_container/ssh_directly_into_docker_using_pinggy.webp" "SSH Directly into Docker Using Pinggy" >}}

**Diagram flow Summary**
- The container runs Ubuntu and is accessible publicly by Pinggy’s URL.
- The connection is forwarded to port 22 of the container from the public endpoint through pinggy.
- The SSH server simply listens to port 22 in the container and takes care of this connection.


### Step-by-Step Guide

#### 1. Set Up Ubuntu Docker Container


**Run an Ubuntu Container:**

We are using an ubuntu container image for demonstrating this method. You can install ssh server in your own existing containers.


```bash
docker run -it --name ssh-container ubuntu
```

{{< image "ssh_into_docker_container/run_ubuntu_container.webp" "Ubuntu Container" >}}

**Install OpenSSH Server Inside the Container:**

```bash
apt-get update
apt-get install -y openssh-server
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
Exposes port 22 (SSH port on the container) using Pinggy. The command will forward the connection to the host machine's SSH server:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:22 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:22 tcp@a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "ssh_into_docker_container/create_a_tunnel_using_pinggy.webp" "Start SSH Service" >}}

**Get the Public URL:**
After executing the command, Pinggy will give us a public URL which external users would have the ability to connect to via SSH to the container’s server. It will look like this:

```
tcp://your-unique-url.a.free.pinggy.link:port
```

#### 3. SSH into the Container

Connect to the Ubuntu container's SSH server on the public Pinggy link from your user machine. Run this command (replace rnhoq-27-59-124-165.a.free.pinggy.link) with the URL and port you received


```bash
ssh -p <port> root@your-unique-url.a.free.pinggy.link
```

**Authenticate:**

Enter the password you set earlier (`password` in this example).

{{< image "ssh_into_docker_container/ssh_into_the_container.webp" "SSH Into The Container" >}}


## Docker Best Practices for Managing SSH
For Docker containers there is a notion of them being “disposable”. They are designed to be as long as the task or the process in which it is applied, and can be reused in cases of errors. Any changes we make manually after SSHing into a container are not permanent. If they are not added to the image, all changes will be gone once the container stops or restarts.

### 1. Ephemeral Nature of Containers
Never input or place something into a container by hand. Still, make changes in such manners in Dockerfiles or deploy changes using configuration management tools such as Ansible or Chef if changes are made through SSH.

**Best Practice:**

- Avoid manual changes inside containers. Instead, modify Dockerfiles or use configuration management tools like Ansible or Chef to ensure any changes made via SSH are reproducible and can be applied in a clean, automated way.

- Rebuild your container images rather than manually changing configuration via SSH. This ensures that you maintain an immutable infrastructure, where changes are versioned and trackable.


### 2. Container Immutability
Docker’s best practice is that of an immutable infrastructure . An immutable container implies that changes to the running container need to be avoided instead the new containers should be spawned from the newly created images. When you open SSH access on a container, it can be altered manually in which you is contradicting this principle of immutability. For instance, changes made manually over time results in a difference in the running container and the definition of the configuration.


**Best Practice:**

- Docker should be utilized for Infrastructure as Code (IaC), because the used infrastructure is defined and managed. If change is required in specific containers, never update via SSH, always recreate the containers out of the Dockerfile or through the CI/CD paths.

- Restrict the use of SSH to when you are doing urgent debugging the Docker image but before you perform any commands on the instance, remember to commit the Dockerfile and as well the change into version control once troubleshooting is over.


### 3. Minimizing Security Risks
It is worth to note that containers as being isolated and thus secure units themselves. Adding SSH to a container obviously opens it up to even more potential points of exploitation. When an SSH server is run inside a container it means port 22 is opened and this means that it attracts a lot of traffic and possibly a lot of danger if protection is not put in place. First of all, the SSH server as a service becomes a potential weak link if has not been set up and updated properly.

**Best Practice:**

- Instead of carrying out password-based authentication, use SSH key-based authentication to reduce brute force attacks. The first is to ensure that Root login is disabled, as well as the default privileges for users be restricted.

- You should use the {{< link href="https://pinggy.io/docs/tcp_tunnels/ip_whitelist/" >}}IP Whitelist{{< /link >}} feature of Pinggy to only allow connections from trusted IP addresses.

- You should update and patch your existing SSH server and your Docker images as often as possible to minimize on security exploits.

### 4. Limiting the Need for SSH
It would be desirable for SSH into Docker containers as much as possible. Using the shell of the host operating system, Docker offers the docker exec command which one can use to interact with containers with its inherent problems, such as the use of SSH connection which has to be established every time for every container. The docker exec is less invasive and is aligned with Docker principles of how containers can be managed in a much more controlled manner.

**Best Practice:**

- Giving admin access to the container Use `docker exec -it <container_id> /bin/bash` for working with containers when you need to work using command-line interface. This method also does not involve the opening of any other ports, which makes your container exposed to different security threats.

- The only use of Reserve SSH should be when docker exec is not possible due to the application’s rate of growth or if you are working in a multitenant production environment with limited Docker privileges.


### 5. Centralized Logging and Monitoring
The problem with debugging using SSH access is that, the actions you may want to take are only limited to the particular instance. If something goes wrong, it may be a bit hard to track down to it’s source since it is all over. Rather than using SSH to diagnose issues, centrally logging and monitoring can give a clue to what is transpiring within a container.


**Best Practice:**

- Setup a logging as a service which is ELK Stack (Elasticsearch, Logstash, and Kibana) or use Prometheus along with Grafana to monitor the performance of your container along with logs of the application. That way there is little reliance on SSH because you can monitor the status of the container without physically logging into it.

- Use tools like Datadog, New Relic, or Prometheus to monitor container metrics and performance remotely.

## Conclusion

While, SSH is powerful tool for running Docker containers, but it has to be used carefully, in agreement with the Docker practices. Users can obtain access to the containers in production environment by techniques such as SSH into the host and run Docker proxied commands, or SSH into a container directly. However, you shouldn’t rely over much on manual intervention, for it’s against the core principles of Docker (immutability and automation). To make a more secure, scalable, and manageable Docker infrastructure one uses Docker exec to manage the containers combined with the security measure and centralized logging.

