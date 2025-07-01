---
 title: "T-Mobile Port Forwarding" 
 description: "T-Mobile home internet uses CG-NAT, making port forwarding difficult. Learn how to create a Pinggy TCP tunnel to forward any port through T-Mobile's CG-NAT."
 date: 2024-06-20T14:15:25+05:30
 lastmod: 2025-06-13T14:15:25+05:30
 draft: false 
 og_image: "/assets/header.webp"
 tags: ["guide", "tcp"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwgCiAgIkB0eXBlIjogIkhvd1RvIiwgCiAgIm5hbWUiOiAiSG93IHRvIGRvIFQtTW9iaWxlIFBvcnQgRm9yd2FyZGluZyIsCiAgImRlc2NyaXB0aW9uIjogIlQtTW9iaWxlIGhvbWUgaW50ZXJuZXQgZW1wbG95cyBDRy1OQVQsIHdoaWNoIG1ha2VzIHBvcnQgZm9yd2FyZGluZyBkaWZmaWN1bHQuIFRvIGVuYWJsZSBwb3J0IGZvcndhcmRpbmcsIHBhc3RlIGEgc2luZ2xlIGNvbW1hbmQgaW4gdGhlIHRlcm1pbmFsIHRvIGNyZWF0ZSBhIFBpbmdneSBUQ1AgdHVubmVsLiBVc2luZyB0aGUgUGluZ2d5IHR1bm5lbCwgeW91IGNhbiBmb3J3YXJkIGFueSBwb3J0IHRocm91Z2ggVC1Nb2JpbGUncyBDRy1OQVQuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYXNzZXRzL2hlYWRlcjUucG5nIiwKICAidG90YWxUaW1lIjogIlBUM00iLAogICJlc3RpbWF0ZWRDb3N0IjogewogICAgIkB0eXBlIjogIk1vbmV0YXJ5QW1vdW50IiwKICAgICJjdXJyZW5jeSI6ICJVU0QiLAogICAgInZhbHVlIjogIjMiCiAgfSwKICAidG9vbCI6IHsKICAgICJAdHlwZSI6ICJIb3dUb1Rvb2wiLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgInN0ZXAiOiBbewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJPcGVuaW5nIFRlcm1pbmFsL0NvbW1hbmQgTGluZSBvbiBEaWZmZXJlbnQgT3BlcmF0aW5nIFN5c3RlbXM6CldpbmRvd3M6CjEuIFByZXNzIFdpbiArIFI6IE9wZW4gdGhlICdSdW4nIGRpYWxvZyBib3guCjIuIFR5cGUgJ2NtZCc6IEVudGVyICdjbWQnIGFuZCBwcmVzcyBFbnRlciBvciBjbGljayBPSy4KMy4gQ29tbWFuZCBQcm9tcHQgT3BlbnM6IFRoZSBDb21tYW5kIFByb21wdCB3aW5kb3cgd2lsbCBhcHBlYXIuCk1hYzoKMS4gUHJlc3MgQ29tbWFuZCArIFNwYWNlOiBPcGVuIFNwb3RsaWdodCBzZWFyY2guCjIuIFR5cGUgJ1Rlcm1pbmFsJzogU3RhcnQgdHlwaW5nICdUZXJtaW5hbCcgYW5kIHByZXNzIEVudGVyIHdoZW4gaXQgYXBwZWFycy4KMy4gVGVybWluYWwgT3BlbnM6IFRoZSBUZXJtaW5hbCBhcHBsaWNhdGlvbiB3aWxsIGxhdW5jaC4KTGludXggKFVidW50dSk6CjEuIFByZXNzIEN0cmwgKyBBbHQgKyBUOiBUaGlzIGtleWJvYXJkIHNob3J0Y3V0IG9wZW5zIHRoZSBUZXJtaW5hbCBkaXJlY3RseS4KMi4gVXNlIEFwcGxpY2F0aW9uIE1lbnU6IE5hdmlnYXRlIHRvIHRoZSBBcHBsaWNhdGlvbnMgbWVudSwgZmluZCAnVGVybWluYWwnIHVuZGVyICdTeXN0ZW0gVG9vbHMuJwozLiBUZXJtaW5hbCBPcGVuczogQ2xpY2sgb24gJ1Rlcm1pbmFsJyB0byBvcGVuIHRoZSBjb21tYW5kIGxpbmUgaW50ZXJmYWNlLiIsCiAgICAibmFtZSI6ICJPcGVuIFRlcm1pbmFsIgogIH0sewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJEZXRlcm1pbmUgdGhlIHBvcnQgeW91IHdhbnQgdG8gZm9yd2FyZC4gRm9yIGV4YW1wbGUsIGlmIHlvdSB3YW50IHRvIGFjY2VzcyBhbiBIVFRQIHNlcnZlciwgdGhlIHBvcnQgaXMgdXN1YWxseSA4MCBvciA0NDMuClBhc3RlIHRoZSBmb2xsb3dpbmcgY29tbWFuZCBpbiB0aGUgdGVybWluYWwgKHJlcGxhY2UgODAgd2l0aCB0aGUgcG9ydCB5b3Ugd2FudCB0byBmb3J3YXJkKToKc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwIHRjcEBhLnBpbmdneS5pbyIsCiAgICAibmFtZSI6ICJDcmVhdGUgVHVubmVsIgogIH0sewogICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAidGV4dCI6ICJBZnRlciBydW5uaW5nIHRoZSB0dW5uZWxpbmcgY29tbWFuZCwgeW91IHdpbGwgcmVjZWl2ZSBhIHB1YmxpYyBVUkwgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6IHRjcDovL3Rsam9jamtpanMuYS5waW5nZ3kub25saW5lOjQwNTI3CllvdSBjYW4gdXNlIHRoaXMgYWRkcmVzcyBhbmQgcG9ydCB0byBjb25uZWN0IHRvIHlvdXIgbG9jYWwgcG9ydCBmcm9tIG91dHNpZGUgdGhlIGxvY2FsIG5ldHdvcmsuIiwKICAgICJuYW1lIjogIlNpZ24gaW4gdG8gUGluZ2d5IHRvIGdldCBwZXJzaXN0ZW50IFVSTHMiCiAgfSx7CiAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICJ0ZXh0IjogIlNpZ24gaW4gdG8gaHR0cHM6Ly9kYXNoYm9hcmQucGluZ2d5LmlvIHRvIGdldCBwZXJzaXN0ZW50IFVSTHMgYW5kIHBlcnNpc3RlbnQgVENQIHBvcnRzIGZvciB5b3VyIHR1bm5lbHMuIgogIH1dICAgIAp9Cjwvc2NyaXB0Pg=="
 outputs:
  - HTML
  - AMP
---

{{< figure src="/assets/header.webp" alt="Pinggy tunnel for T-Mobile home internet port forwarding" >}}

{{% tldr %}}

1. Open terminal or command prompt.

2. Paste the following command in the terminal (replace `22` with the port you want to forward):

   ```
   ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
   ```

3. After running the tunneling command, you will receive a public URL in the following format:
   tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.link</span>:<span style="background: #e9ecff">40527</span>

   You can use this address and port to connect to your local port from outside the local network.

4. Sign in to https://dashboard.pinggy.io to get persistent URLs and persistent TCP ports for your tunnels.

{{% /tldr %}}

If you're a T-Mobile home internet user, you might have encountered a roadblock when it comes to port forwarding. Port forwarding, a method that allows external devices to access services within your local network, becomes a necessity for many tasks, but T-Mobile's use of CG-NAT (Carrier-Grade Network Address Translation) has posed significant hurdles for users trying to access their home services remotely.

## What is port forwarding?

Usually random users from the internet cannot reach your local computer because of NAT and Firewall of your router. But often we need to allow this access to play games, host websites, share files, remote access, etc. Port forwarding is like opening a gateway to allow users from outside the network communicate with services like web applications, personal cloud storage (NAS), and more on your home network. For example, if you want to host a website from your computer at home then port forwarding would allow people from the internet to visit your website by passing through your router's security.

It's also helpful for receiving webhooks, which are like real-time messages from other services. For instance, if you're using a smart security camera that sends alerts to your phone, port forwarding lets those alerts reach you even when you're away. Additionally, if you have a Network Attached Storage (NAS) device that holds all your important files, port forwarding allows you to access those files remotely, as if you were right at home.

   {{< image "iot/port_forwarding.png" "port forwarding" >}}

## T-mobile does not allow port forwarding

However, T-Mobile's CG-NAT setup for home internet complicates this process significantly. It acts like a gatekeeper, preventing unsolicited incoming traffic from getting through. So, without port forwarding, you can't easily host a website, receive webhooks, or access your NAS while you're outside your home network.

## Understanding CG-NAT

CG-NAT (Carrier-Grade Network Address Translation) blocks unsolicited inbound traffic from reaching your devices. While this security measure is designed to protect your devices from potential threats, it also means that you won't be able to receive inbound traffic, including the much-needed port forwarding. This limitation can be frustrating, especially when you're looking to host a website, manage IoT devices remotely, or indulge in online gaming where incoming connections are vital.

## No public IP address because of T-mobile CG-NAT

Unlike traditional ISPs where each customer might receive their own public IP address, T-Mobile's home internet employs CG-NAT, which does not provide individual public IP addresses. Instead, CG-NAT assigns a single public IP address to a group of users, and it manages the distribution of data traffic between these users and the internet. While this approach conserves IPv4 addresses (which are becoming increasingly scarce), it also means that your devices within the network aren't directly reachable from the outside world. This lack of public IP addresses complicates tasks like hosting servers, receiving inbound connections, and effective port forwarding.

## Reverse proxy / tunnels as a workaround

There's a reliable workaround that can help you circumvent CGNAT: the solution lies in utilizing a reverse proxy in the form of a {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} tunnel.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} acts as an intermediary between the external internet and your local network. By employing a reverse proxy solution like Pinggy, you can expose your local server or service to the internet without being hindered by T-Mobile's CG-NAT. In simple terms, **Pinggy forwards incoming connections from the internet to your local network, essentially bypassing CG-NAT's barriers.** This means you can once again enjoy the benefits of port forwarding, enabling your web server to be publicly accessible, granting remote access to your IoT devices, and enhancing your online gaming experiences.

## Steps for port forwarding using Pinggy

Using {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} you can easily forward a port by opening a tunnel to that port.

### Steps for HTTP tunnel:

1. Select a port and start an HTTP tunnel to that port by running the following command. Replace `8000` with your port.
   ```
   ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
   ```
2. Observe the public URL given by Pinggy and use it to access your service.

   {{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true tryYourselfText="Customize the command for required features and better reliability:" >}}
   {{< /pinggytunnel >}}

3. Pinggy will give you a random URL by default. To avoid this, you can sign in to https://dashboard.pinggy.io to get an access token. When you start a tunnel using your access token, you can find ongoing tunnel URLs from the dashboard. You can upgrade to Pro to get a persistent subdomain.

4. You can link a custom domain to your Pinggy tunnel to have a permanent URL to localhost.

### Steps for TCP port forwarding (TCP tunnel):

1. Create a TCP tunnel by running the following command in the terminal (replace `22` with your port):

   ```
   ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
   ```

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a TCP tunnel:" portstring="TCP Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="You can customize the command with more options:" >}}
   {{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format:
   tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.link</span>:<span style="background: #e9ecff">40527</span>

   You can use this address and port to connect to your local port from outside the local network.

   {{< image "iot/url.webp" "Pinggy tunnel for T-Mobile home internet port forwarding" >}}

## Why is port forwarding required?

Usually, if you are not on the same WiFi (same local network), you cannot access one computer from the other. You cannot use your mobile data (5G, 4G) to directly access your home computer. Port forwarding configures your home internet router to allow external access from the internet, to your internal network devices. This can be used for remote access to devices, web hosting, online gaming, etc.
Port forwarding allows direct connections between devices on different networks, bypasses the limitations of [Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation), and improves network performance.

In network service providers such as T-Mobile, port forwarding is not possible trivially, instead you need a localhost tunnel service such as https://pinggy.io.

## How is port forwarding better than disabling firewall?

Port forwarding enhances security by controlling access to only single ports of specific devices. It is much more secure than opening the floodgate to the internet and exposing all ports of all devices in your local network. With port forwarding:

- Only specific ports are exposed, not your entire network
- You maintain control over which services are accessible
- The rest of your network remains protected behind your firewall

## Conclusion

In summary, T-Mobile's utilization of CG-NAT might initially seem like a roadblock to seamless port forwarding, essential for hosting web servers, managing IoT devices, and enjoying online games. However, armed with Pinggy, you can overcome these limitations and take full advantage of your T-Mobile home internet. By embracing this solution, you can host services on localhost and seamlessly connect them from outside, all without requiring any special hardware or complex network configurations.

With just a single command, you can bypass T-Mobile's CG-NAT restrictions and open your local services to the world, maintaining both accessibility and security.
