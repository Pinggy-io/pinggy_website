---
 title: "IP Whitelist with TLSTCP Tunnel"
 description: "Configure IP Whitelisting with Pinggy TLSTCP tunnels. Learn how to start tunnels with restricted access based on specified IP addresses."
 date: 2023-12-07T01:15:25+05:30
 draft: false 
---

# IP Whitelist with TLSTCP Tunnel

Pinggy provides the capability of IP whitelisting, allowing access restrictions based on specified IP addresses or ranges. This feature permits connections solely from designated IP addresses while disregarding requests from other addresses without any response.

Start tunnel with IP Whitelisting as follows:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:IP1\"}}}"
{{</ ssh_command >}}

Like basic authentication, one can set multiple ip addresses as well.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]\"}}}"
{{</ ssh_command >}}

You can customize the command here:

{{< pinggytunnel box="true" mode="tlstcp" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false
keepalive=true ipwhitelistcheck=true >}}
{{< /pinggytunnel >}}
