---
 title: "Sharing Netdata from localhost" 
 description: "Netdata is an open source tool designed to collect real-time metrics, such as CPU usage, disk activity, bandwidth usage etc."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/netdata.webp"
---

With [pinggy.io](https://pinggy.io) you can share your Netdata server from localhost with just a single command. **Replace the port 19999 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Netdata server:" portstring="Netdata Port" localport="19999" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
