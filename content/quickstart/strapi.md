---
 title: "Sharing Strapi from localhost" 
 description: "Strapi is a headless CMS (Content Management System) that allows easy creation of customizable APIs."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/strapi.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Strapi server from localhost with just a single command. **Replace the port 1337 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.online`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Strapi server:" portstring="Strapi Port" localport="1337" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
