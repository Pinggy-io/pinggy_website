---
 title: "IoT Remote Desktop for Raspberry Pi" 
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
    ```
2. **Step 2.** Run this command to get a public URL to your Raspberry Pi:
    ```
    ssh -p 443 -R0:localhost:3389 tcp@a.pinggy.io
    ```

    You will get a URL and port in the output such as:<br>
    tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.online</span>:<span style="background: #e9ecff">40527</span>
3. **Step 3.** Open *Remote Desktop Connection* application on your Windows. Enter the URL:Port to connect.<br>
Example: `tljocjkijs.a.pinggy.online:40527`

{{% /tldr %}}
