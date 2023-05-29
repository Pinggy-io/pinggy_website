---
 title: "Test Github webhooks locally" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/github.svg"
---

With [pinggy.io](https://pinggy.io) you can share your GitHub Webhook from localhost with just a single command. **Replace the port 80 with the port where your webhook is running and make sure the webhook is ready to receive requests (e.g. http://localhost:80/webhooks).**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.io`. Use this URL to test the webhook.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to GitHub Webhook:" portstring="GitHub Port" localport="80" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
