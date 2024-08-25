---
 title: "Documentation - Getting Started" 
 description: "Start using Pinggy in three simple steps. Host websites, receive webhooks, share files, and connect to your localhost remotely with ease. Explore the quickstart guide now."
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Pinggy - Quickstart

Pinggy is the easiest way to get public URLs for your localhost. You can use it to quickly host a website from your laptop, receive webhooks, share files, connect to your Raspberry Pi, and more.

Follow the three simple steps to get started:

#### Step 1: Run your service in localhost

First you need to run the service you want to share in localhost. For example you may be using a webserver like <a href="https://httpd.apache.org" target="_blank">Apache</a>. Make sure your service is available in a localhost URL such as <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>.

You can quickly launch such a server for testing purposes using Python: `python3 -m http.server` .
This will start a server at <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>.

#### Step 2: Create a tunnel using a single command

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 a.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 a.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 a.pinggy.io\"}}}"
{{</ ssh_command >}}

Replace the port `8000` with the localhost port where your service is running.

#### Step 3: Access through public URL

The above command will provide you http and https URLs as follows:

```
// You can access local server via following URL(s):
http://fakqxzqrohxxx.a.pinggy.link
https://fakqxzqrohxxx.a.pinggy.link
```

You can access your localhost service using these URLs.
