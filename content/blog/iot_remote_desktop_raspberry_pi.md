---
 title: "Remote Desktop for Raspberry Pi and other IoT devices" 
 date: 2023-08-11T14:15:25+05:30
 draft: false 
 og_image: "/blog/images/pirdp/pirdp.webp"
 tags: ["guide", "tcp"]
---

{{< figure src="../images/pirdp/pirdp.webp" alt="Accessing IoT Devices from Anywhere through ssh tunnel using pinggy" >}}


You remotely access your Raspberry Pi desktop from anywhere using *Remote Desktop Protocol* (RDP). Even if your Pi is outside your local network, you can access it easily over the internet using Pinggy.

{{% tldr %}}

1. **Step 1.** Run these commands on your Raspberry Pi:
    ```
    sudo apt update
    sudo apt install xrdp
    sudo systemctl start xrdp
    ```
2. **Step 2.** Run this command to get a public URL to your Raspberry Pi:
    ```
    ssh -p 443 -R0:localhost:3389 tcp@a.pinggy.io
    ```

    You will get a URL and port in the output such as:<br>
    tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.online</span>:<span style="background: #e9ecff">40527</span>
3. **Step 3.** Open *Remote Desktop Connection* application on your Windows / *Microsoft Remote Desktop* on Mac. Enter the URL:Port to connect.<br>
Example: `tljocjkijs.a.pinggy.online:40527`

4. Sign in to https://dashboard.pinggy.io to get your ongoing tunnel URLs from the dashboard.

{{% /tldr %}}


<dev class="youtube-container my-4">
<iframe src="https://www.youtube.com/embed/HvI7FJngFDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</dev>

The Remote Desktop Protocol (RDP) enables users to connect to and control Raspberry Pi or similar devices via a network connection. However, this is only possible if the device is on the local network (LAN) or has a public IP address. Often, Raspberry Pi and similar devices are located behind NAT or CGNAT, as well as firewalls, lacking a public IP address. In such situations, Pinggy.io can be employed to access your device over the internet, providing a public address without requiring software installation. Through the Pinggy TCP tunnel, you can access your RDP-enabled device over the internet, circumventing NAT and firewalls. 

The above video shows you the steps. Below is an outline of how to remotely access your Raspberry Pi like device from anywhere over the internet.

## Step 1. Install RDP server

On your device install an RDP server such as *xrdp*. On your Raspberry Pi, you can install xrdp using the following commands in the terminal:
```bash
sudo apt update
sudo apt install xrdp
sudo systemctl start xrdp
``` 

## Step 2. Start Pinggy TCP tunnel

To get a public URL to access your Raspberry Pi over the internet bypassing NAT and firewall, you need to start a Pinggy tunnel. Just copy and paste the following command to start a tunnel.


{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to the RDP server:" portstring="RDP server Port" localport="3389" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<br>

## Step 3. Obtain the Public URL

After running the tunneling command, you will receive a public URL in the following format:
tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.online</span>:<span style="background: #e9ecff">40527</span>



Make note of this URL (<span style="background: #fff0f0">tljocjkijs.a.pinggy.online</span>) and port (<span style="background: #e9ecff">40527</span>) as they will be used to establish an RDP connection to your Raspberry Pi or other IoT device.

To avoid copying the URL, you can sign in to https://dashboard.pinggy.io to get an access token. When you start a tunnel using your access token, you can find ongoing tunnel URLs from the dashboard.

{{< figure src="../images/iot/url.webp" alt="Get the URL and port from the output of the Pinggy command to connect to RDP of  Raspberry Pi IoT device." >}}


## Step 4. Connect to remote desktop

Open *Remote Desktop Connection* application on your Windows / *Microsoft Remote Desktop* on Mac. Enter the URL:Port to connect.

{{< figure src="../images/pirdp/rdp.webp" alt="Accessing IoT Devices from Anywhere through ssh tunnel using pinggy" >}}


## Tips

Pinggy free tunnels expire after 60 minutes, and the URLs change after reconnection. To avoid this, sign in to https://dashboard.pinggy.io and get an access token. Then run the tunnel in auto-reconnection mode.

```bash
while true; do 
    ssh -p 443 -o ServerAliveInterval=30 -R0:localhost:3389 tcp@a.pinggy.io; 
sleep 10; done
```

From the Pinggy dashboard you will be able to see the list of your active tunnels.