---
 title: "TCP Tunnels" 
 description: "Effortlessly create TCP tunnels with Pinggy using a single command. Reserve a port on the dashboard for a consistent connection. No complexities, just seamless tunneling for your localhost."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create TCP Tunnels with Pinggy

Create a tunnel using a single command.

{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> tcp@a.pinggy.io
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> <token>+tcp@a.pinggy.io
```

{{% /tab %}}
{{< /tabs >}}

This command present user with a URL and a TCP port. Port allocation changes per connection. However, one can reserve a port on <https://dashboard.pinggy.io>
