---
 title: "Localtunnel - Easiest way to create a local tunnel" 
 description: "Open a local tunnel to localhost with a single command using Pinggy. No downloads required. Just paste one command to get local tunnels."
 date: 2024-06-22T00:15:25+05:30
 lastmod: 2025-02-12T14:15:25+05:30
 tags: ["local tunnel", "Pinggy", "secure tunneling", "HTTP tunnel", "TCP tunnel"]
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkxvY2FsdHVubmVsIC0gRWFzaWVzdCB3YXkgdG8gY3JlYXRlIGEgbG9jYWwgdHVubmVsIiwKICAiZGVzY3JpcHRpb24iOiAiUXVpY2sgZ3VpZGUgb24gc2VjdXJlbHkgZXhwb3NpbmcgeW91ciBsb2NhbCBzZXJ2aWNlcyB1c2luZyBQaW5nZ3kuIExlYXJuIHRvIHNldCB1cCBib3RoIEhUVFAgYW5kIFRDUCB0dW5uZWxzIHdpdGggbWluaW1hbCBjb21tYW5kcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9hc3NldHMvaGVhZGVyLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiVW5kZXJzdGFuZCB0aGF0IGxvY2FsIHR1bm5lbHMgZXhwb3NlIHlvdXIgbG9jYWwgc2VydmljZXMgdG8gYSBwdWJsaWMgVVJMLCBieXBhc3NpbmcgTkFULCBDR05BVCwgYW5kIGZpcmV3YWxsIHJlc3RyaWN0aW9ucy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2V0IHVwIGFuIEhUVFAgdHVubmVsIGJ5IGV4ZWN1dGluZzogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0Ojx5b3VyLXBvcnQ+IHFyQGEucGluZ2d5LmlvIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlNldCB1cCBhIFRDUCB0dW5uZWwgYnkgZXhlY3V0aW5nOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6PHlvdXItcG9ydD4gdGNwQGEucGluZ2d5LmlvIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlNlY3VyZSB5b3VyIHR1bm5lbCB1c2luZyBlbmNyeXB0aW9uIChUTFMvSFRUUFMpLCBzZWN1cmUgYWNjZXNzIHRva2VucywgYW5kIElQIHdoaXRlbGlzdGluZy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRm9yIHBlcnNpc3RlbnQgY29uZmlndXJhdGlvbnMgYW5kIGN1c3RvbSBkb21haW5zLCBzaWduIGludG8gdGhlIFBpbmdneSBEYXNoYm9hcmQuIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
 draft: false 
 og_image: "/assets/header.webp"
 outputs:
  - HTML
  - AMP
---


Starting a local tunnel is as simple as pasting the following command into your Terminal / Command Prompt:

```
ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
```

Change <kbd>8000</kbd> to your required port. Visit https://pinggy.io for more details.


{{< video poster="/assets/tunnelvideothumb.webp" src="/assets/pinggy_demo.webm" >}}

**Local tunnels are simple using {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}** 

{{% tldr %}}

**Local Tunnel Overview**  
- Securely exposes your local services to the internet via a generated URL.  
- Supports HTTP, TCP, and UDP, bypassing NAT, CGNAT, and firewalls.

**Benefits & Use Cases**  
- **Rapid Setup:** One command to expose your local environment.  
- **Enhanced Collaboration:** Easily share demos and debug sessions.  
- **Cost-Effective & Customizable:** Avoid costly deployments with options for custom domains and persistent subdomains via Pinggy.  
- **Ideal For:** Web development, mobile app debugging, API integration, remote administration, and IoT management.

**Security Considerations**  
- **Risks:** Potential exposure of sensitive data, unauthorized access, and MitM attacks.  
- **Mitigations:** Use encryption (TLS/HTTPS), secure tokens, IP whitelisting, and monitor traffic.

**Setting Up with Pinggy**  
- **HTTP Tunnel:**  
  ```bash
  ssh -p 443 -R0:localhost:<your-port> qr@a.pinggy.io
  ```  
- **TCP Tunnel:**  
  ```bash
  ssh -p 443 -R0:localhost:<your-port> tcp@a.pinggy.io
  ```  
- Sign in to the [Pinggy Dashboard](https://dashboard.pinggy.io/) for access tokens and custom domain configurations.

{{% /tldr %}}

## Local Tunnels using a single command

Local tunnels are tunnels to localhost which helps in hosting websites, web applications, share files, remote access etc. It essential where port forwarding is not possible such as behind CGNAT and firewalls. Using just one Pinggy command get a secure local tunnel to your localhost server directly through the terminal. No need for platform-specific downloads and installations – Pinggy HTTP / TCP / TLS tunnels make server exposure effortless and efficient for developers worldwide.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true tryYourselfText="Paste one command to start tunnel:" >}}
{{< /pinggytunnel >}}

A local tunnel is created and you get an HTTP link to your localhost.

## What is local tunnel?

A local tunnel is a secure tunnel to reach a device connected to a private locan network from the internet. A local tunnel can be for different protocols such as HTTP, TCP, UDP, etc., which allows tunneling of traffic of that protocol. For example, a HTTP local tunnel will allow you to host a website on your localhost, that is your local computer, and make it accessible from the internet through a public URL. 

Usually localhost ports are not reachable from the interenet because of NAT, CGNATS, and firewalls. Local tunnels are solve this problem by tunneling in traffic in a secure manner. This is similar to port forwarding, but with the added advantage of a public address and the ability to circumvent CGNAT.

## How to create a local tunnel

Using [Pinggy](https://pinggy.io/) is fastest way to setup a local tunnel. With just one  command, a local server can be made accessible over the internet. This is particularly useful during development and testing phases.


### Steps for HTTP local tunnel:

1. Open command prompt / terminal. Paste the following command and press enter to start a local tunnel. Replace `8000` with your port.
   ```
   ssh -p 443 -R0:localhost:8000 qr@a.pinggy.io
   ```
2. The local tunnel can be accessed using the public URL given by Pinggy.

   {{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel:" portstring="Localhost port" localport="8080" webdebugenabled=true keepalive=true tryYourselfText="Customize the command for required features and better reliability:" >}}
   {{< /pinggytunnel >}}

3. Pinggy will give you a random URL for your local tunnel by default. To avoid this, you can sign in to https://dashboard.pinggy.io to get an access token. When you start a tunnel using your access token, you can find ongoing tunnel URLs from the dashboard. You can upgrade to Pro to get a persistent subdomain.

4. You can link a custom domain to your Pinggy tunnel to have a permanent URL to localhost.

### Steps for TCP local tunnel:

1. You can create TCP local tunnel by running the following command in command prompt / terminal (replace `22` with your port):

   ```
   ssh -p 443 -R0:localhost:22 tcp@a.pinggy.io
   ```

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a TCP tunnel:" portstring="TCP Port" localport="22" webdebugenabled=false keepalive=true tryYourselfText="You can customize the command with more options:" >}}
   {{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format:
   tcp://<span style="background: #fff0f0">tljocjkijs.a.pinggy.link</span>:<span style="background: #e9ecff">40527</span>

   You can use this address and port to connect to your local port from outside the local network.

   {{< image "iot/url.webp" "Pinggy tunnel for T-Mobile home internet port forwarding" >}}

## Benefits of Using Local Tunnels

Local tunnels offer several key advantages:

- **Rapid Setup:** With a single command, you can expose your local service, eliminating the need for complicated network configurations.
- **Enhanced Collaboration:** Developers can instantly share in-progress work with remote colleagues or clients without deploying the code to a public server.
- **Bypassing Network Limitations:** They overcome issues posed by NAT, CGNAT, and firewalls—common hurdles that block inbound connections to local environments.
- **Cost Efficiency:** Instead of provisioning a server for testing or demonstrations, local tunnels provide a low-cost, temporary solution.
- **Customizable Endpoints:** Many tunneling services allow you to set custom subdomains or even link your own domain, which adds branding and memorability to your public URLs.
- **Cross-Protocol Support:** Whether you need to expose HTTP, TCP, or even UDP services, local tunnels adapt to your requirements with minimal adjustments.

## Use Cases for Local Tunnels

Local tunnels are incredibly versatile and can be applied to various scenarios, including:

- **Web Development & Testing:** Quickly share your local web applications for live demonstrations, client feedback, or debugging sessions.
- **Mobile Application Debugging:** Test mobile apps interacting with a backend running on your development machine.
- **API Integration:** Expose local APIs to external services for callback testing, webhook handling, or integration testing.
- **IoT Device Management:** Remotely access and manage IoT devices connected within a private network.
- **Remote Administration:** Securely administer servers or desktops from outside your local network without complex VPN setups.
- **Customer Demos:** Seamlessly present prototypes or beta versions of your projects to remote stakeholders, reducing the need for full-scale deployments.

## Security Risks and Mitigations

While local tunnels simplify connectivity, they also introduce some security challenges:

- **Exposure of Sensitive Services:** By making your local services public, you risk exposing development tools or sensitive endpoints.  
  **Mitigation:** Use authentication, restrict access with IP whitelisting, and ensure that no production data is exposed.
  
- **Data Leakage:** Unsecured tunnels can inadvertently expose confidential or internal data.  
  **Mitigation:** Always use encrypted tunnels (TLS/HTTPS) and avoid using real production data in your development environment.
  
- **Unauthorized Access:** A publicly accessible tunnel may attract unwanted attention, including brute-force or exploitation attempts.  
  **Mitigation:** Employ robust access tokens, use persistent subdomains through trusted dashboards (like Pinggy’s), and monitor traffic for any suspicious activity.
  
- **Man-in-the-Middle (MitM) Attacks:** Data traveling through an unencrypted tunnel is vulnerable to interception.  
  **Mitigation:** Ensure that your tunnel encrypts data in transit using TLS or similar protocols.

By being aware of these risks and implementing the recommended practices, you can enjoy the benefits of local tunnels while maintaining a secure environment.

## Conclusion

Local tunnels empower developers and IT professionals to expose local environments quickly and securely, whether for development, testing, demos, or remote administration. They offer a practical solution to bypass common networking hurdles and support multiple protocols to fit a variety of use cases. However, it is essential to implement security best practices to mitigate potential risks associated with exposing internal services to the public internet.
