---
title: "Remotely Connect to IoT Devices Using VNC"
description: "Learn how to securely access and control your IoT devices remotely using VNC and SSH tunneling with Pinggy, ideal for Raspberry Pi and Linux devices."
og_image: "images/remotely_connect_to_iot_devices_using_vnc/thumbnail.webp"
tags: ["iot", "IoT remote access", "vnc remote access iot firewall", "iot remote desktop"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlJlbW90ZWx5IENvbm5lY3QgdG8gSW9UIERldmljZXMgVXNpbmcgVk5DIiwKICAiZGVzY3JpcHRpb24iOiAiTGVhcm4gaG93IHRvIHNlY3VyZWx5IGFjY2VzcyBhbmQgY29udHJvbCB5b3VyIElvVCBkZXZpY2VzIHJlbW90ZWx5IHVzaW5nIFZOQyBhbmQgU1NIIHR1bm5lbGluZyB3aXRoIFBpbmdneSwgaWRlYWwgZm9yIFJhc3BiZXJyeSBQaSwgTnZpZGlhIEpldHNvbiwgYW5kIG90aGVyIExpbnV4LWJhc2VkIGRldmljZXMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3JlbW90ZWx5X2Nvbm5lY3RfdG9faW90X2RldmljZXNfdXNpbmdfdm5jL3RodW1ibmFpbC53ZWJwIiwKICAidG90YWxUaW1lIjogIlBUMzBNIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgYW5kIENvbmZpZ3VyZSBUaWdodFZOQyBTZXJ2ZXIiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIFRpZ2h0Vk5DIHNlcnZlciB1c2luZyB0aGUgY29tbWFuZCAnc3VkbyBhcHQgaW5zdGFsbCAteSB0aWdodHZuY3NlcnZlcicsIHNldCBhIHBhc3N3b3JkIHVzaW5nICd2bmNzZXJ2ZXInLCBhbmQgY29uZmlndXJlIHRoZSBzdGFydHVwIGZpbGUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNyZWF0ZSBhIFNlY3VyZSBTU0ggVHVubmVsIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiVXNlIHRoZSBjb21tYW5kICdzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6NTkwMSB0Y3BAYS5waW5nZ3kuaW8nIHRvIGVzdGFibGlzaCBhIHNlY3VyZSB0dW5uZWwgZm9yIHJlbW90ZSBWTkMgYWNjZXNzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb3B5IHRoZSBQaW5nZ3kgVVJMIiwKICAgICAgInRleHQiOiAiT25jZSB0aGUgdHVubmVsIGlzIGVzdGFibGlzaGVkLCBQaW5nZ3kgd2lsbCBnZW5lcmF0ZSBhIHB1YmxpYyBVUkwgbGlrZSAndGNwOi8vZXhhbXBsZS0xMjMucGluZ2d5Lmxpbms6NDMyMTAnLiBDb3B5IHRoaXMgVVJMIGZvciB1c2UgaW4gdGhlIFZOQyB2aWV3ZXIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgYSBWTkMgVmlld2VyIG9uIFlvdXIgUEMiLAogICAgICAidGV4dCI6ICJEb3dubG9hZCBhbmQgaW5zdGFsbCBUaWdodFZOQyBvciBSZWFsVk5DIFZpZXdlciBvbiB5b3VyIGxvY2FsIG1hY2hpbmUuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIklucHV0IHRoZSBQaW5nZ3kgVVJMIGluIHRoZSBWTkMgVmlld2VyIiwKICAgICAgInRleHQiOiAiT3BlbiB0aGUgVk5DIHZpZXdlciwgcGFzdGUgdGhlIFBpbmdneSBVUkwgKGUuZy4sICd0Y3A6Ly9leGFtcGxlLTEyMy5waW5nZ3kubGluazo0MzIxMCcpLCBhbmQgY29ubmVjdCB0byB5b3VyIElvVCBkZXZpY2UgcmVtb3RlbHkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNlY3VyZSBhbmQgTW9uaXRvciBZb3VyIENvbm5lY3Rpb24iLAogICAgICAidGV4dCI6ICJVc2Ugc3Ryb25nIHBhc3N3b3JkcywgbGltaXQgb3BlbiBmaXJld2FsbCBwb3J0cywgYW5kIG1vbml0b3Igc3lzdGVtIGFjdGl2aXR5IHVzaW5nIHRvb2xzIGxpa2UgaHRvcCBvciBwc3V0aWwuIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
date: 2025-03-12T03:57:29+05:30
draft: false
---


Virtual Network Computing (VNC) is a graphical desktop-sharing system leveraging the Remote Frame Buffer (RFB) protocol, which allows remote control and visualization of another computer over a network. This technology is particularly useful for managing and interacting with IoT devices such as 
{{< link href="https://www.raspberrypi.org/" >}}Raspberry Pi{{< /link >}}, {{< link href="https://www.nvidia.com/en-in/autonomous-machines/embedded-systems/jetson-nano/product-development/" >}}Nvidia Jetson Nano{{< /link >}} , and {{< link href="https://coral.ai/" >}}Google Coral {{< /link >}} remotely from any location worldwide.

This comprehensive guide details the steps required to set up a VNC server on your IoT device, securely connect to it remotely using the [Pinggy](https://pinggy.io) SSH tunneling service, and access its desktop environment via a VNC client.

{{% tldr %}}

1. **Step 1.** Set up the desktop environment and VNC server on your IoT device:

```
sudo apt update
sudo apt install -y tightvncserver
vncserver
```

2. **Step 2.** Create a secure SSH tunnel with [Pinggy](https://pinggy.io/) to access your VNC server remotely:

```
ssh -p 443 -R0:localhost:5901 tcp@a.pinggy.io
```

You will receive a URL similar to:
```
tcp://example-123.pinggy.link:43210
```

3. **Step 3.** Install a VNC viewer on your PC:

- TightVNC: <a href="https://www.tightvnc.com/download.php" target="_blank">Download here</a>

- RealVNC: <a href= "https://www.realvnc.com/en/connect/download/viewer/" target="_blank">Download here</a>

Enter the public URL provided by Pinggy in the VNC viewer:
```
example-123.pinggy.link:43210
```

Enter your VNC password to connect and access your IoT desktop remotely.

{{% /tldr %}}

{{< image "remotely_connect_to_iot_devices_using_vnc/thumbnail.webp" "Remotely Connect to IoT Devices Using VNC" >}}


### Step-by-Step Guide

#### (Optional) Step 1: Install Desktop Environment  

If you want to visualize your IoT device's interface remotely, you can install a graphical desktop environment. Some Linux distributions, like Ubuntu Server, do not come with a GUI by default. In that case, you can install XFCE, which is highly recommended due to its lightweight nature, making it suitable for IoT devices:

```bash
sudo apt update && sudo apt upgrade -y  
sudo apt install -y xfce4 xfce4-goodies  
```

#### Step 2: Install and Configure TightVNC Server
There are various VNC servers available, such as {{< link href="https://tigervnc.org/" >}}TightVNC {{< /link >}}, {{< link href="https://www.realvnc.com/en/connect/download/viewer/" >}}RealVNC {{< /link >}}, and {{< link href="https://uvnc.com/" >}}UltraVNC {{< /link >}}. In this guide, we’ll use {{< link href="https://tigervnc.org/" >}}TightVNC {{< /link >}} due to its ease of use and compatibility with lightweight desktop environments.

1. **Install TightVNC Server:**

```bash
sudo apt install -y tightvncserver
```

{{< image "remotely_connect_to_iot_devices_using_vnc/install_tightvncserver.png" "install tightvncserver" >}}

2. **Set VNC Password:**

Initialize the VNC server to create access credentials:

```bash
vncserver
```

{{< image "remotely_connect_to_iot_devices_using_vnc/set_password.webp" "Set VNC Password" >}}

You’ll be prompted for:
- A mandatory access password
- An optional view-only password (can skip by pressing Enter)

Stop the current VNC instance:

```bash
vncserver -kill :1
```

3. **Configure VNC Startup File:**

Safely backup the original startup configuration and create a custom script to run the XFCE desktop:

```bash
mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
printf '#!/bin/bash\nxrdb $HOME/.Xresources\nstartxfce4 &\n' > ~/.vnc/xstartup
chmod +x ~/.vnc/xstartup
```

4. **Restart VNC Server:**

```bash
vncserver
```

The VNC server now listens on TCP port `5901` by default.

#### Step 3: Secure Remote Access Using Pinggy

To securely access your IoT device remotely, use [Pinggy](https://pinggy.io/), a secure SSH tunneling service.

Execute the following command to establish a secure SSH tunnel to your IoT device’s VNC server:

```bash
ssh -p 443 -R0:localhost:5901 tcp@a.pinggy.io
```

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to VNC server:" portstring="VNC server Port" localport="5901" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

After successful execution, Pinggy provides a publicly accessible URL like:

```
tcp://example-123.pinggy.link:43210
```

{{< image "remotely_connect_to_iot_devices_using_vnc/pinggy_public_url.webp" "Pinggy Public Url" >}}

Use this URL for remote connectivity via your VNC client.

#### Step 4: Installing VNC Viewer on Your Laptop/PC

Install a VNC client application on your local machine. Two highly recommended options include:

- **TightVNC Viewer:** {{< link href="https://www.tightvnc.com/download.php" >}}Download TightVNC{{< /link >}}
- **RealVNC Viewer:** {{< link href="https://www.realvnc.com/en/connect/download/viewer/" >}}Download TightVNC{{< /link >}}

Once installed, open the VNC viewer and enter the provided public URL from Pinggy.

- Example Remote Host URL: `example-123.pinggy.link:43210`

Click **Connect**, enter your VNC password, and gain remote desktop access to your IoT device instantly.

{{< image "remotely_connect_to_iot_devices_using_vnc/real_vnc_nav_bar.webp" "connect using realvnc viewer" >}}

{{< image "remotely_connect_to_iot_devices_using_vnc/password_real_vnc.webp" "enter password realvnc viewer" >}}

### Best Practices and Security Tips

- **Robust Passwords:** Always use strong, unique passwords.
- **SSH Tunneling:** Opt for reliable tunneling services like [Pinggy](https://pinggy.io/) to encrypt remote sessions securely.
- **Firewall Management:** Limit your IoT device's open ports, permitting only necessary connections (typically port `5901`).

### Conclusion

Remotely connecting to IoT devices using VNC provides powerful flexibility and control, enabling users to manage IoT resources seamlessly across global distances. By implementing the described setup using XFCE, TightVNC, and [Pinggy](https://pinggy.io/) SSH tunneling, users can achieve secure, reliable, and efficient remote desktop connectivity.

Always follow best practices for securing your VNC sessions, including using strong passwords and carefully managing firewall rules. Leveraging automation and monitoring tools further enhances the productivity and effectiveness of remote IoT device management. Embrace these strategies to fully harness the potential of your IoT devices from anywhere, at any time.

