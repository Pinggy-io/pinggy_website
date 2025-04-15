---
 title: "SSH IoT device from anywhere"
 description: "Securely SSH into your IoT devices, like Raspberry Pi, from anywhere with Pinggy. No need for a public IP address – create TCP tunnels effortlessly. Obtain a public URL and port for remote access. Simplify IoT device management."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# SSH IoT device from anywhere

## Understanding the Challenge

SSH follows a client-server model the SSH server runs on your IoT device (like a Raspberry Pi) and the SSH client runs on your laptop or PC. The SSH server listens on TCP port 22 by default.

If your IoT device is behind NAT, a firewall, or CGNAT, you won't be able to access it remotely without port forwarding. Pinggy solves this problem by providing remote access to your devices without requiring port forwarding.

## Using Pinggy for Remote SSH Access

Pinggy provides a secure and reliable method to remotely access your IoT devices, including:
- Raspberry Pi
- Banana Pi
- Orange Pi
- NanoPi NEO
- Odroid
- Rock Pi
- NVIDIA Jetson Nano
- And other similar devices

Even if your device doesn't have a public IP address, Pinggy enables you to establish an SSH connection from anywhere in the world. Pinggy offers a free tier that allows remote access to your devices.

### Free Access Option

On your IoT device, open a terminal and run the following command:

```
ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
```

This command establishes a secure connection to the Pinggy server, creating a tunnel that forwards traffic from the server to your IoT device's SSH port (22).

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to SSH server:" portstring="SSH server Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

### Using Your Pinggy Account

For more features, you can <a target="_blank" href="https://dashboard.pinggy.io">sign in to Pinggy</a> to create TCP tunnels with your account.

Once signed in, you'll find your access token in the dashboard:

Example:

```
b0b87d56-653f-45fb-98d9-8e43779c9081
```

Then create a tunnel to your IoT device using your token:

```
ssh -p 443 -R0:localhost:22 b0b87d56-653f-45fb-98d9-8e43779c9081+tcp@a.pinggy.io
```

_Replace `b0b87d56-653f-45fb-98d9-8e43779c9081` with your own token from the dashboard._

## Connecting to Your Device

After running the tunneling command, you'll receive a public URL like:

```
tcp://rnrwn-14-139-241-214.a.free.pinggy.link:43141
```
{{< image "iot/public_url.webp" "Public URL" >}}

Using this public URL and port, you can SSH into your device with:

```
ssh -p 43141 username@rnrwn-14-139-241-214.a.free.pinggy.link
```

Replace `username` with the username of your IoT device, and use the URL and port from the output of the tunneling command.
