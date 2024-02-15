---
title: "Access raspberry pi remotely to control iot devices"
description: "Discover a quick guide to remotely access your Raspberry Pi and other IoT devices over the internet without port forwarding. Learn how to set up an SSH, VNC, or RDP server, create a Pinggy TCP tunnel for internet access, and connect seamlessly to your IoT devices from anywhere!"
date: 2024-02-13T03:57:29+05:30
draft: false
---

In this blog, we’ll discuss how to **securely connect to your Raspberry Pi or IoT device remotely from anywhere over the internet without port forwarding**, allowing you to remotely manage your devices more effectively.

There are three main ways to access your Raspberry Pi remotely over the internet:

1. **SSH** - Secure Shell, a cryptographic network protocol for secure remote access to devices over an unsecured network such as the internet.

2. **VNC** - Virtual Network Computing, a protocol for safely accessing the Raspberry Pi GUI or desktop.

3. **RDP** - Remote Desktop Protocol, a proprietary protocol developed by Microsoft that provides a user with a graphical interface to connect to another computer over a network connection.

However, all of these methods usually require port forwarding, which can pose security risks.

#### The Challenge with Port Forwarding

**Internet Service Providers** (ISPs) often place devices behind NAT or CGNAT routers, making port forwarding challenging. Port forwarding exposes devices to the internet, increasing vulnerability to attacks.

Here, we’ll discuss how to configure and setup Raspberry Pi for remote access without setting up port forwarding using [Pinggy.io](https://pinggy.io).

[Pinggy](https://pinggy.io) is a tunneling tool that gives a public address to access your localhost, even while sitting behind a NAT or a firewall -- all this in a single command.

## Remotely connect to Raspberry Pi behind NAT router or firwall over the Internet using SSH

SSH follows a client server model — the SSH server runs on the raspberry pi and the SSH client runs on the user laptop or PC. SSH server listens on TCP port 22 by default.

#### Using Pinggy for remote access

Pinggy provides a secure and reliable method to remotely access your IoT devices, including Raspberry Pi, Banana Pi, Orange Pi, NanoPi NEO, Odroid, Rock Pi, NVIDIA Jetson Nano, and others, even if they don't have a public IP address. It enables you to establish an SSH connection to your devices from anywhere in the world.

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
   ```

   This command establishes a secure connection to the Pinggy server, creating a tunnel that forward traffic from the server’s port 22 to your IoT device’s port 22.

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format: `tcp://rnrwn-14-139-241-214.a.free.pinggy.online:43141`

{{< image "public_url.png" "Public URL" >}}

3. Now, you can use the public URL to connect to your Raspberry Pi from anywhere in the world. Open a terminal on your laptop or PC and run the following command:

   ```bash
   ssh -p 43141 username@rnrwn-14-139-241-214.a.free.pinggy.online
   ```

By executing this command, you establish an SSH connection to the Pinggy server, which redirects the traffic to your Raspberry Pi through the previously created tunnel. You can now access and control your Raspberry Pi as if it were directly connected to your local network.

**Note:** Use [Pinggy dashboard](https://dashboard.pinggy.io) for persistent public URLs and to manage your devices.

## Connect to Raspberry Pi remotely over the Internet using VNC

Virtual Network Computing (VNC) is a client-server system which helps to control remote computer over a network connection. Actions like keyboard button presses and mouse clicks are transmitted from one computer to another over this virtual network. It works on client-server model.

VNC follows a client server model — the VNC server runs on the raspberry pi and the VNC client runs on the user laptop or PC. VNC server listens on TCP port 5901 by default.

#### Install TightVNC server on Raspberry Pi

1. Open a terminal on your Raspberry Pi and run the following **two commands in the to install Tight VNC Server**. The first command is not necessary but it is recommended to update and upgrade the raspberry pi before installing any new software. The second command is to install Tight VNC Server.

   ```bash
   sudo apt-get update && sudo apt-get upgrade
   sudo apt-get install tightvncserver
   ```

2. Wait till the installation is complete. To check if the installation was successful, run the following command:

   ```bash
   vncserver
   ```

On running the command for the first time, you will be asked to set new VNC password for accessing the Raspberry Pi using TightVNC.

3. After setting the password, you will receive a message with the following information:

   ```bash
   New 'X' desktop is raspberrypi:1
   ```

This message indicates that the VNC server is running on the Raspberry Pi and is listening on port 5901.

#### Using Pinggy for remote access

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:5901 tcp@a.pinggy.io
   ```

   This command establishes a secure connection to the Pinggy server, creating a tunnel that forward traffic from the server’s port 5901 to your IoT device’s port 5901.

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to VNC server:" portstring="VNC server Port" localport="5901" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format: `tcp://rnrwn-14-139-241-214.a.free.pinggy.online:43141`

3. Now, you can use the public URL to connect to your Raspberry Pi from anywhere in the world. Open a VNC client on your laptop or PC and enter the public URL in the address bar.

By executing this command, you establish a VNC connection to the Pinggy server, which redirects the traffic to your Raspberry Pi through the previously created tunnel. You can now access and control your Raspberry Pi as if it were directly connected to your local network.

#### Install VNC Viewer on your laptop or PC

Since the raspberry pi acts as a TightVNC server, we need software which acts as a TightVNC client. Download the zip file from the [official website](https://www.tightvnc.com/download.php) and install it on your laptop or PC.

After installing the VNC Viewer, open the application and enter the public URL in the address bar. Click on the connect button to establish a connection to your Raspberry Pi.

{{< image "vnc_viewer.png" "VNC Viewer" >}}

## Connect to Raspberry Pi remotely over the Internet using RDP

Remote Desktop Protocol(RDP) is a network protocol developed by Microsoft and is widely used by users to remotely access and interact with the graphical user interface of a remote machine such as Windows Server, Mac, or Linux machine including Raspberry Pi.

RDP follows the client-server model, where an RDP client is installed on a local machine, and an RDP server is installed on the remote server or IoT device.

#### Install xrdp on Raspberry Pi

1. Open a terminal on your Raspberry Pi and run the following command to install xrdp:

   ```bash
   sudo apt update
   sudo apt install xrdp
   sudo systemctl start xrdp
   ```

#### Using Pinggy for remote access

1. On your Raspberry Pi, open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:3389 tcp@a.pinggy.io
   ```

   This command establishes a secure connection to the Pinggy server, creating a tunnel that forward traffic from the server’s port 3389 to your IoT device’s port 3389.

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to RDP server:" portstring="RDP server Port" localport="3389" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format: `tcp://rnrwn-14-139-241-214.a.free.pinggy.online:43141`

3. Now, you can use the public URL to connect to your Raspberry Pi from anywhere in the world. Open an RDP client on your laptop or PC and enter the public URL in the address bar.

By executing this command, you establish an RDP connection to the Pinggy server, which redirects the traffic to your Raspberry Pi through the previously created tunnel. You can now access and control your Raspberry Pi as if it were directly connected to your local network.

#### Connect to remote desktop

Since the raspberry pi acts as an RDP server, we need an RDP client to connect to the raspberry pi. Open Remote Desktop Connection application on your Windows / Microsoft Remote Desktop on Mac. Enter the URL:Port to connect.

{{< image "pirdp/rdp.webp" "Remote Desktop Connection" >}}
