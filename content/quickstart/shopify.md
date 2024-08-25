---
 title: "Test Shopify webhooks locally"
 description: "Shopify is a popular e-commerce platform for creating online stores and selling products." 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide", "webhook"]
 og_image: "/quickstart/images/shopify.svg"
---

With [pinggy.io](https://pinggy.io) you can test your Shopify Webhook from localhost with just a single command. **Replace the port 8080 with the port where your local development server is running and make sure it is ready to receive requests (e.g. http://localhost:3030/webhooks).**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to access the webhook.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Shopify Webhook:" portstring="Shopify Port" localport="3030" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
