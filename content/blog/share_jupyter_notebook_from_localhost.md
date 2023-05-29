---
 title: "Sharing Jupyter Notebooks with Pinggy" 
 date: 2023-05-29T14:15:25+05:30 
 draft: false 
---


{{% link href="https://jupyter.org/" %}}Jupyter Notebook{{% /link %}} allows users to create and share documents containing live code, equations, visualizations, and explanatory text. However, by default, Jupyter Notebook is limited to local access, requiring users to be on the same machine or network to collaborate effectively. This guide shows how you can share Jupyter Notebook with your teammates, collaborators, and friends.

Through this guide you will be able to:

- Share Jupyter Notebooks with a URL
- Collaborate on your Jupyter Notebook with your teammates and friends
- Access Jupyter Notebooks remotely
- Get a public URL to your local Jupyter Notebook


{{% tldr %}}

1. Install Jupyter Notebook
2. Start Notebook

{{% /tldr %}} 










## Overview of pinggy.io
Before jumping in we will have a brief overview of Pinggy.


[Pinggy.io](https://pinggy.io) is a tunneling solution that provides a public address to reach your local computer's server, even if it's behind a firewall or NAT. This can be accomplished with a single command, without the need for any downloads. Using the pinggy command, users can access your locally hosted website or application without having to configure the cloud, perform port forwarding, DNS setup, or VPN connections.

## Getting started with Pinggy
You do not need to do anything to get started. For better features you might want to sign in to https://pinggy.io later.


## Step 1 - Start a pinggy localhost tunnel

On you terminal type:
```
ssh -p 443 -R0:localhost:3000 a.pinggy.io
```

This will give you a public url such as:
```
https://ranxxxxydxmwb.a.pinggy.io
```

Now that you have pinggy running, you can use it to receive webhooks from other services to localhost:3000. To do this, you will need to configure the external service to send webhooks to your pinggy URL. You can change the port from 3000 to any port of your choice.

## Step 2 - There is no step 2. Just test.

For example, if you are testing a webhook integration with Stripe, you would log into your Stripe account, navigate to the webhook settings, and enter your pinggy URL as the webhook endpoint. Stripe will then send webhook events to your pinggy URL, which will be forwarded to your local development server.

## Try it yourself now

{{< pinggytunnel box="true" tunnelstring="Paste this command to start receiving webhooks:" portstring="Localhost Port" localport="3000" webdebugenabled=true keepalive=false >}}
{{< /pinggytunnel >}}

## Debugging with pinggy [coming soon]
One of the benefits of using Pinggy is that it will allow you to see the webhook requests that are being sent to your local server. When a webhook event is received, Pinggy will log the request details in your terminal, including the request method, URL, headers, and body.

This can be incredibly useful for debugging and troubleshooting webhook integrations, as it allows you to see exactly what data is being sent to your server and how it is being processed.

## Conclusion
In conclusion, pinggy is a powerful tool for testing and developing webhooks on your local development environment. By exposing your local server to the internet, pinggy allows external services to send data to your server in real-time, making it easy to test and debug webhook integrations. With pinggy, you can streamline your webhook development workflow and build more robust and reliable webhook integrations.