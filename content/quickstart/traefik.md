---
 title: "Sharing Traefik from localhost" 
 description: "Traefik is a modern, dynamic reverse proxy and load balancer used for routing and managing web traffic."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/traefik.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Traefik server from localhost with just a single command. **Replace the port 8080 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.online`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Traefik server:" portstring="Traefik Port" localport="8080" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
