---
 title: "Sharing Home Assistant from localhost" 
 date: 2023-05-26T01:17:02+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/homeassistant.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Home Assistant server from localhost with just a single command. **Replace the port 80 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.online`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Home Assistant server:" portstring="Home Assistant Port" localport="8123" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
