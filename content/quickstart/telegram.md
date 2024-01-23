---
 title: "Test Telegram webhooks locally" 
 description: "Cloud-based messaging app providing secure and fast communication through features like messaging, groups, and channels."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide", "webhook"]
 og_image: "/quickstart/images/telegram.svg"
---

With [pinggy.io](https://pinggy.io) you can test your Telegram Webhook from localhost with just a single command. **Replace the port 8081 with the port where your local development server is running and make sure it is ready to receive requests (e.g. http://localhost:8081/bot).**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.online`. Use this URL to access the webhook.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Telegram Webhook:" portstring="Telegram Port" localport="8081" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
