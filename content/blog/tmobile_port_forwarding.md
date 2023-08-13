---
 title: "T-Mobile Port Forwarding" 
 date: 2023-08-13T14:15:25+05:30
 draft: false 
 og_image: "/assets/header5.png"
---

{{< figure src="/assets/header5.png" alt="Pinggy tunnel for T-Mobile home internet port forwarding" >}}

{{% tldr %}}

1. Create a TCP tunnel by running the following command in the terminal (replace `22` with your port):
    ```
    ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
    ```

2. After running the tunneling command, you will receive a public URL in the following format:
    tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.online</span>:<span style="background: #e9ecff">40527</span>

    You can use this address and port to connect to your local port from outside the local network.

3. Sign in to https://dashboard.pinggy.io to get persistent URLs and persistent TCP ports for your tunnels.  

{{% /tldr %}}


If you're a T-Mobile home internet user, you might have encountered a roadblock when it comes to port forwarding. Port forwarding, a method that allows external devices to access services within your local network, becomes a necessity for these tasks, but T-Mobile's use of CG-NAT (Carrier-Grade Network Address Translation) has posed significant hurdles.

## What is port forwarding?

Port forwarding is like opening a gateway to allow users from outside the network communicate with services like web applications, personal cloud storage (NAS), and more on your home network. For example, if you want to host a website from your computer at home then port forwarding would allow people from the internet to visit your website by passing through your router's security. 

It's also helpful for receiving webhooks, which are like real-time messages from other services. For instance, if you're using a smart security camera that sends alerts to your phone, port forwarding lets those alerts reach you even when you're away. Additionally, if you have a Network Attached Storage (NAS) device that holds all your important files, port forwarding allows you to access those files remotely, as if you were right at home.

## T-mobile does not allow port forwarding
However, T-Mobile's CG-NAT setup for home interenet complicates this process. It acts like a gatekeeper, preventing unsolicited incoming traffic from getting through. So, without port forwarding, you can't easily host a website, receive webhooks, or access your NAS while you're outside your home network.

## Understanding CG-NAT

CG-NAT blocks unsolicited inbound traffic from reaching your devices. While this security measure is designed to protect your devices from potential threats, it also means that you won't be able to receive inbound traffic, including the much-needed port forwarding. This limitation can be frustrating, especially when you're looking to host a website, manage IoT devices remotely, or indulge in online gaming where incoming connections are vital.

## No public IP address because of T-mobile CG-NAT

Unlike traditional setups where each device on your home network gets its own public IP address, T-Mobile's home internet employs CG-NAT, which does not provide individual public IP addresses. Instead, CG-NAT assigns a single public IP address to a group of users, and it manages the distribution of data traffic between these users and the internet. While this approach and conserves IPv4 addresses for T-mobile, it also means that your devices within the network aren't directly reachable from the outside world. This lack of public IP addresses complicates tasks like hosting servers, receiving inbound connections, and effective port forwarding.


## Reverse proxy / tunnels as a workaround

There's a workaround that can help you circumvent CGNAT: the solution lies in utilizing a reverse proxy in the form of a {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} tunnel.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} acts as an intermediary between the external internet and your local network. By employing a reverse proxy solution like Pinggy, you can expose your local server or service to the internet without being hindered by T-Mobile's CG-NAT. In simple terms, **Pinggy forwards incoming connections from the internet to your local network, essentially bypassing CG-NAT's barriers.** This means you can once again enjoy the benefits of port forwarding, enabling your web server to be publicly accessible, granting remote access to your IoT devices, and enhancing your online gaming experiences.

## Steps for port forwarding using Pinggy

Using {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} you can easily forward a port by opening a tunnel to that port.

### Steps for HTTP tunnel:

1. Select a port and start an HTTP tunnel to that port by running the following command. Replace `8000` with your port.
    ```
    ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
    ```
2. Observe the public URL given by Pinggy and use it to access your service.

3. Customize the command for required features and better reliability:
    {{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true >}}
    {{< /pinggytunnel >}}

4. Pinggy will give you a random URL by default. To avoid this, you can sign in to https://dashboard.pinggy.io to get an access token. When you start a tunnel using your access token, you can find ongoing tunnel URLs from the dashboard. You can upgrade to Pro to get a persistent subdomain.

5. You can link a custom domain to your Pinggy tunnel to have a permanent URL to localhost.

### Steps for TCP port forwarding (TCP tunnel):

1. Create a TCP tunnel by running the following command in the terminal (replace `22` with your port):
    ```
    ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
    ```

2. You can customize the command with more options:
    {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a TCP tunnel:" portstring="TCP Port" localport="22" webdebugenabled=false keepalive=true >}}
    {{< /pinggytunnel >}}

3. After running the tunneling command, you will receive a public URL in the following format:
    tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.online</span>:<span style="background: #e9ecff">40527</span>

    You can use this address and port to connect to your local port from outside the local network.

    {{< figure src="../images/iot/url.webp" alt="Get the URL and port from the output of the Pinggy command to ssh into your IoT device." >}}


## Conclusion

In summary, T-Mobile's utilization of CG-NAT might initially seem like a roadblock to seamless port forwarding, essential for hosting web servers, managing IoT devices, and enjoying online games. However, armed with Pinggy, you can overcome these limitations and take full advantage of your T-Mobile home internet. By embracing this solution, you can host services on localhost and seamlessly connect them from outside.