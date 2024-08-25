---
 title: "Sharing Rails from localhost"
 description: "Rails is a server-side web application framework written in Ruby." 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/rails.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Rails server from localhost with just a single command. **Replace the port 3000 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Rails server:" portstring="Rails Port" localport="3000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
