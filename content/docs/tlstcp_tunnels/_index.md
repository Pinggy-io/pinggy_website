---
 title: "TLSTCP Tunnels" 
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create TLSTCP Tunnels with Pinggy

Create a tunnel using a single command.

{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -p 443 -R0:localhost:<localport> tlstcp@a.pinggy.io
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -p 443 -R0:localhost:<localport> <token>+tlstcp@a.pinggy.io
```
{{% /tab %}}
{{< /tabs >}}

TLSTCP is the wrapper on top TCP. It provides an option to connection to a TCP based service via TLS.