---
 title: "Sharing Spring Boot from localhost" 
 description: "Java framework for efficient web app development, leveraging Spring ecosystem with simplified configuration."
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/springboot.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Spring Boot server from localhost with just a single command. **Replace the port 8080 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Spring Boot server:" portstring="Spring Boot Port" localport="8080" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
