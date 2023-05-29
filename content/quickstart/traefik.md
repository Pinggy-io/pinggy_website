---
 title: "Sharing Traefik from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/traefik.png"
---

With [pinggy.io](https://pinggy.io) you can share your Traefik server from localhost with just a single command. **Replace the port 9090 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.io`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Traefik server:" portstring="Traefik Port" localport="9090" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
