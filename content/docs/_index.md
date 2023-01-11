---
 title: "Documentation - Getting Started" 
 date: 2023-01-10T14:15:25+05:30 
 draft: false 
---

# Pinggy - Getting Started

Pinggy is the easiest way to get public URLs for your localhost. You can use it to quickly host a website from your laptop, receive webhooks, share files, connect to your Raspberry Pi, and more.

Follow the three simple steps to get started:

#### Step 1: Run your service in localhost

First you need to run the service you want to share in localhost. For example you may be using a webserver like <a href="https://httpd.apache.org" target="_blank">Apache</a>. Make sure your service is available in a localhost URL such as <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>.

You can quickly launch such a server for testing purposes using Python: `python3 -m http.server` .
This will start a server at <a href="http://localhost:8000" target="_blank">http://localhost:8000</a>.


#### Step 2: Create a tunnel using a single command


```
ssh -p 7878 -R0:localhost:8000 b.pinggy.io
```

Replace the port `8000` with the localhost port where your service is running.


#### Step 3: Access through public URL

The above command will provide you http and https URLs as follows:

```
You can access local server via following URL(s):
http://fakqxzqrohxxx.b.pinggy.io
https://fakqxzqrohxxx.b.pinggy.io
```

You can access your localhost service using these URLs.

**These URLs will change every time you create a new tunnel. If you want a static subdomain** <b><a target="_blank" href="http://dashboard.pinggy.io">Sign in</a></b>.


----

## Know who is accessing your URL

If you want to access more features such as a log of visitors clicking your URL, the volume of data transferred, and more, then download the Pinggy client.

<a id="downloadlink" href="https://pinggy.io/download/" target="_blank" class="btn btn-primary px-4 py-2 mx-2 my-md-2 my-1">Download Client <span id="downloadlinktext"></span></a>
