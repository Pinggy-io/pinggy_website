---
 title: "TCP Tunnels" 
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create TCP Tunnels with Pinggy

Create a tunnel using a single command.

{{< tabs >}}
{{% tab name="Without Token" %}}
```
ssh -R0:localhost:<localport> tcp@a.pinggy.io
```
{{% /tab %}}
{{% tab name="With Token" %}}
```
ssh -R0:localhost:<localport> <token>+tcp@a.pinggy.io
```
{{% /tab %}}
{{< /tabs >}}

This command present user with a URL and a TCP port. Port allocation changes per connection. However, one can reserve a port on <https://dashboard.pinggy.io>