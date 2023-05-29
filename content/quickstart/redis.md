---
 title: "Sharing Redis from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/redis.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Redis server from localhost with just a single command. **Replace the port 6379 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.io`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Redis server:" portstring="Redis Port" localport="6379" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
