---
 title: "Sharing Jekyll from localhost" 
 description: "Jekyll is a static site generator written in Ruby used for creating websites and blogs."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/jekyll.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Jekyll server from localhost with just a single command. **Replace the port 4000 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.online`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jekyll server:" portstring="Jekyll Port" localport="4000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
