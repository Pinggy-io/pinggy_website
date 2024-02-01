---
 title: "SSH IoT device from anywhere"
 description: "Securely SSH into your IoT devices, like Raspberry Pi, from anywhere with Pinggy. No need for a public IP address – create TCP tunnels effortlessly. Obtain a public URL and port for remote access. Simplify IoT device management."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# SSH IoT device from anywhere

Your IoT device such as Raspberry Pi does not have a public IP address? No problem, with Pinggy you can ssh into your Raspberry Pi and other similar IoT devices from anywehere.

You need to <a target="_blank" href="https://dashboard.pinggy.io">sign in to Pinggy</a> to create TCP tunnels.

Once you sign in, you will be presented a dashboard where you will find your access token.

Example:

```
b0b87d56-653f-45fb-98d9-8e43779c9081
```

Create a tunnel to you IoT device, just use a single command as follows.

On your IoT device, run the following command to start a tunnel to port `22` and with token `b0b87d56-653f-45fb-98d9-8e43779c9081`:
<br>

```
ssh -p 443 -R0:localhost:22 b0b87d56-653f-45fb-98d9-8e43779c9081+tcp@a.pinggy.io
```

_Replace `8000` with the port where your service is running_.

_Replace `b0b87d56-653f-45fb-98d9-8e43779c9081` with your own token from the dashboard._

This will give you a public URL like:

```
tcp://tljocjkijs.a.pinggy.online:40527
```

Given this public URL and port you can now ssh into your device using the command:

```
ssh -p 40527 username@tljocjkijs.a.pinggy.online
```

Replace the `username` with the username of the IoT device, and use the url and port from the output of the first ssh command.
