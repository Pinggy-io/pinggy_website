---
 title: "Test Slack webhooks locally" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/slack.svg"
---

With [pinggy.io](https://pinggy.io) you can test your Slack Webhook from localhost with just a single command. **Replace the port 8080 with the port where your local development server is running and make sure it is ready to receive requests (e.g. http://localhost:8080/webhook-url).**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.online`. Use this URL to access the webhook.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Slack Webhook:" portstring="Slack Port" localport="8080" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
