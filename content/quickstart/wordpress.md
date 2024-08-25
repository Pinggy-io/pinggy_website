---
 title: "Sharing Wordpress from localhost" 
 description: "WordPress is a popular web content management system written in PHP."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/wordpress.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Wordpress server from localhost with just a single command. **Replace the port 80 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Wordpress server:" portstring="Wordpress Port" localport="80" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
