---
 title: "Sharing Express from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/express.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Express server from localhost with just a single command. **Replace the port 3000 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.io`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Express server:" portstring="Express Port" localport="3000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
