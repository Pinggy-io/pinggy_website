---
 title: "IP Whitelist with HTTP Tunnel"
 description: "Configure IP Whitelisting with Pinggy HTTP tunnels. Learn how to start tunnels with restricted access based on specified IP addresses."
 date: 2023-12-07T01:15:25+05:30
 draft: false 
---

# IP Whitelist

Pinggy provides the capability of IP whitelisting, allowing access restrictions based on specified IP addresses or ranges. This feature permits connections solely from designated IP addresses while disregarding requests from other addresses without any response.

Start tunnel with IP Whitelisting as follows:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:IP1\"}}}"
{{</ ssh_command >}}

Like basic authentication, one can set multiple ip addresses as well.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"}}}"
{{</ ssh_command >}}

You can modify the command below to suit your needs, including adding more IP addresses. **Additionally, your IP address has been included, but feel free to add more if necessary.**

{{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false
keepalive=true ipwhitelistcheck=true >}}
{{< /pinggytunnel >}}

&nbsp;

If you execute the command with your designated port where your service is operational, you can include any desired IP address in the setup, and you'll observe an output resembling this:

{{< figure src="/doc_img/ip_whitelist_terminal.webp" alt="IP Whitelist With HTTP Tunnel">}}

**Only the IP addresses specified in the command will be able to access the tunnel.**
