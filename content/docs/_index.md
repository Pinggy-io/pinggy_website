---
 title: "Documentation - Getting Started" 
 description: "Start using Pinggy in three simple steps. Host websites, receive webhooks, share files, and connect to your localhost remotely with ease."
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

{{< tabs >}}
{{% tab name="SSH" %}}
Open your terminal / command prompt and run the following to create a tunnel using SSH:

```bash
ssh -p 443 -R0:localhost:8000 a.pinggy.io
```

Replace the port `8000` with the localhost port where your service is running.

![SSH Tunnel Screenshot](/assets/ssh_tui_screenshot.png)
{{% /tab %}}

{{% tab name="CLI" %}}
Download the Pinggy CLI from <a href="/cli/" target="_blank">here</a> and run the following command:

```bash
./pinggy -p 443 -R0:localhost:8000
```
Replace the port `8000` with the localhost port where your service is running.

![CLI Tunnel Screenshot](/assets/cli_tui.png)
{{% /tab %}}

{{% tab name="App" %}}
Download the Pinggy App from <a href="/app/" target="_blank">here</a> and follow the instructions to set up a tunnel for your localhost service.

![Pinggy App Screenshot](/assets/app5.webp)
{{% /tab %}}
{{% tab name="Node.js SDK" %}}
Install the <a target="_blank" href="https://pinggy-io.github.io/sdk-nodejs/">Pinggy Node.js SDK</a> using `npm`:

```bash
npm i @pinggy/pinggy
```

<br/>

Then, create a tunnel in your Node.js application:

```js
import { pinggy } from "@pinggy/pinggy";

const tunnel = pinggy.createTunnel({ forwardTo: "localhost:3000" });
await tunnel.start();
console.log("Tunnel URLs:", tunnel.urls()); 
```

Replace `3000` with the port where your service is running.

Follow <a target="_blank" href="https://pinggy-io.github.io/sdk-nodejs/">Pinggy Node.js SDK docs</a> for more details. 


{{% /tab %}}
{{% tab name="Python SDK" %}}
Install the <a target="_blank" href="https://pypi.org/project/pinggy/">Python SDK</a> using `pip`:

```bash
pip install pinggy
```

<br/>

Then, create a tunnel in your Python application:

```python
import pinggy

# Start an HTTP tunnel forwarding traffic to localhost on port 8000
tunnel = pinggy.start_tunnel(forwardto="localhost:8000")

print(f"Tunnel started. Urls: {tunnel.urls}")
```

Replace `8000` with the port where your service is running.

Follow <a target="_blank" href="https://pypi.org/project/pinggy/">Python SDK docs</a> for more details. 

{{% /tab %}}
{{< /tabs >}}

#### Step 3: Access through public URL

The above command will provide you http and https URLs as follows:

```
// You can access local server via following URL(s):
http://fakqxzqrohxxx.a.pinggy.link
https://fakqxzqrohxxx.a.pinggy.link
```

You can access your localhost service using these URLs.

#### Quickstart Recipes

View our <a href="/quickstart/" target="_blank"><button type="button" class="btn btn-dark">Quickstart Recipes</button></a> to find the Pinggy configuration for your favourite app / service.
