---
 title: "IP Whitelist with TLSTCP Tunnel"
 description: "Configure IP Whitelisting with Pinggy TLSTCP tunnels. Learn how to start tunnels with restricted access based on specified IP addresses."
 date: 2023-12-07T01:15:25+05:30
 draft: false 
---

# IP Whitelist with TLSTCP Tunnel

Pinggy provides the capability of IP whitelisting, allowing access restrictions based on specified IP addresses or ranges. This feature permits connections solely from designated IP addresses while disregarding requests from other addresses without any response.

Start tunnel with IP Whitelisting as follows
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t tlstcp@a.pinggy.io w:IP1
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t <token>+tlstcp@a.pinggy.io w:IP1
```

{{% /tab %}}
{{< /tabs >}}

Like basic authentication, one can set multiple ip addresses as well.
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> -t <token>+tlstcp@a.pinggy.io w:[IP1[,IP2[,IP3..]]]
```

{{% /tab %}}
{{< /tabs >}}

You can customize the command here:

{{< pinggytunnel box="true" mode="tlstcp" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false
keepalive=true ipwhitelistcheck=true >}}
{{< /pinggytunnel >}}
