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

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

The above command will provide you http and https URLs as follows:

```
You can access local server via following URL(s):
http://fakqxzqrohxxx.a.pinggy.online
https://fakqxzqrohxxx.a.pinggy.online
```

You can access your localhost service using these URLs.

**These URLs will change every time you create a new tunnel.<br> If you want a persistent subdomain** <b><a target="_blank" href="https://pinggy.io/#prices">upgrade to Pinggy Pro</a></b>.


## Force HTTPS redirect

If you want browsers visiting your Pinggy tunnel URL to only use HTTPS, you can enable the `x:https` option. This will redirect browsers visiting any HTTP address to HTTPS.


Just pass the optional `x:https` argument at the end of the command the command. In addition, add the `-t` option right after the ssh command.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:https\"}}}"
{{</ ssh_command >}}



## Connect to local HTTPS server

If your localhost server is an HTTPS server that only accepts TLS connections, then use the `x:localServerTls` option. This will make Pinggy tunnel connect to your local server using the HTTPS (TLS) protocol only.

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\"}}}"
{{</ ssh_command >}}




You can also set the server name (SNI) used to connect to your local server as by passing adding the argument: `x:localServerTls:example.com`

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\",\"cmd\":\"./pinggy.exe -p 443 ./pinggy.exe -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls:example.com\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 -t a.pinggy.io x:localServerTls\"}}}"
{{</ ssh_command >}}


