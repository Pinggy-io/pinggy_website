---
 title: "HTTP / HTTPS Tunnels" 
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create HTTP / HTTPS Tunnels with Pinggy

Pinggy allows you to create HTTP / HTTPS tunnels to your localhost using a single command:


First, run the service you want to share in localhost. You need to know the port where the service is running, for example `8000`. Check if the service is accessible from localhost through <a href="http://localhost:8080" target="_blank">http://localhost:8000</a>.

Command to start a tunnel to port `8000`:
<br>
```
ssh -p 443 -R0:localhost:8000 a.pinggy.io
```

*Replace `8000` with the port where your service is running*.

The above command will provide you http and https URLs as follows:

```
You can access local server via following URL(s):
http://fakqxzqrohxxx.a.pinggy.io
https://fakqxzqrohxxx.a.pinggy.io
```

You can access your localhost service using these URLs.

**These URLs will change every time you create a new tunnel.<br> If you want a persistent subdomain** <b><a target="_blank" href="http://pinggy.io/#prices">upgrade to Pinggy Pro</a></b>.


