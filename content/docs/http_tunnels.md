---
 title: "HTTP / HTTPS Tunnels" 
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Create HTTP / HTTPS Tunnels with Pinggy

Pinggy allows you to create HTTP / HTTPS tunnels to your localhost using the following two methods:

## Using ssh command

First, run the service you want to share in localhost. You need to know the port where the service is running, for example `8000`. Check if the service is accessible from localhost through <a href="http://localhost:8080" target="_blank">http://localhost:8000</a>.

Command to start a tunnel to port `8000`:
<br>
```
ssh -p 7878 -R0:localhost:8000 b.pinggy.io
```

*Replace `8000` with the port where your service is running*.

The above command will provide you http and https URLs as follows:

```
You can access local server via following URL(s):
http://fakqxzqrohxxx.b.pinggy.io
https://fakqxzqrohxxx.b.pinggy.io
```

You can access your localhost service using these URLs.

**These URLs will change every time you create a new tunnel. If you want a persistent subdomain** <b><a target="_blank" href="http://dashboard.pinggy.io">Sign in</a></b>.



## Using the Pinggy client

<a href="https://pinggy.io/download/" target="_blank">Download</a> the Pinggy client for your platform (Mac, Linux, Windows).

Make sure the downloaded binary is executable using `chmod +x pinggy_mac_amd64`. Replace `pinggy_mac_amd64` with the filename that you downloaded.

To run an HTTP / HTTPS tunnel on port `8000` use the command:

```
./pinggy_mac_amd64 -p 8000
```

Replace `8000` with the port where your service is running in localhost.

You will get the public URL in the terminal.

![Pinggy client HTTP tunnel](/doc_img/pinggy_cli_http.jpg)



**These URLs will change every time you create a new tunnel. If you want a persistent subdomain** <b><a target="_blank" href="http://dashboard.pinggy.io">Sign in</a></b>.



