---
 title: "HTTP / HTTPS Tunnels" 
 description: "Create HTTP/HTTPS tunnels to your localhost effortlessly with Pinggy. Use a single command to share your service, and access it through dynamic URLs. For a persistent subdomain, upgrade to Pinggy Pro."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create HTTP / HTTPS Tunnels with Pinggy

Pinggy allows you to create HTTP / HTTPS tunnels to your localhost using a single command:

First, run the service you want to share in localhost. You need to know the port where the service is running, for example `8000`. Check if the service is accessible from localhost through <a href="http://localhost:8080" target="_blank">http://localhost:8000</a>.

Command to start a tunnel to port `8000`:
{{< tabs >}}
{{% tab name="Without Token" %}}

```
ssh -p 443 -R0:localhost:8000 a.pinggy.io
```

_Replace `8000` with the port where your service is running_.
{{% /tab %}}
{{% tab name="With Token" %}}

```
ssh -p 443 -R0:localhost:8000 token@a.pinggy.io
```

_Replace `8000` with the port where your service is running, and replace `token` with your owntoken_.
{{% /tab %}}
{{< /tabs >}}

The above command will provide you http and https URLs as follows:

```
You can access local server via following URL(s):
http://fakqxzqrohxxx.a.pinggy.online
https://fakqxzqrohxxx.a.pinggy.online
```

You can access your localhost service using these URLs.

**These URLs will change every time you create a new tunnel.<br> If you want a persistent subdomain** <b><a target="_blank" href="https://pinggy.io/#prices">upgrade to Pinggy Pro</a></b>.
