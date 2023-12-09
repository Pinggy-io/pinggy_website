---
 title: "IP Whitelist with TCP Tunnel"
 date: 2023-12-07T01:15:25+05:30
 draft: false 
---

# IP Whitelist with TCP Tunnel

Pinggy provides the capability of IP whitelisting, allowing access restrictions based on specified IP addresses or ranges. This feature permits connections solely from designated IP addresses while disregarding requests from other addresses without any response.

Start tunnel with IP Whitelisting as follows
{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -p 443 -R0:localhost:<localport> -t tcp@a.pinggy.io w:IP1
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -p 443 -R0:localhost:<localport> -t <token>+tcp@a.pinggy.io w:IP1
```
{{% /tab %}}
{{< /tabs >}}

Like basic authentication, one can set multiple ip addresses as well.
{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -p 443 -R0:localhost:<localport> -t tcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -p 443 -R0:localhost:<localport> -t <token>+tcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]
```
{{% /tab %}}
{{< /tabs >}}

You can customize the command here:

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false 
keepalive=true ipwhitelistcheck=true >}}
{{< /pinggytunnel >}}