---
 title: "TLS Tunnels" 
 description: "Create TLS tunnels with Pinggy in a single command. Establish SSL/TLS connections to your localhost using unique domains. Follow the guide for creating TLS tunnels now."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create TLS Tunnels with Pinggy

Create a tunnel using a single command.

{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:<localport> tls@a.pinggy.io
```

{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:<localport> <token>+tls@a.pinggy.io
```

{{% /tab %}}
{{< /tabs >}}

TLS tunnel does not provide any port. It present with a unique domain and SSL/TLS connection to be made to that domain at TCP port 443.
In case of TLS tunnel, Pinggy does not terminate the SSL/TLS, instead it forward as it is to the client. The client needs to terminate SSL/TLS.
