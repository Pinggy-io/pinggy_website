---
 title: "Sharing PostgreSQL from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/postgresql.svg"
---

With [pinggy.io](https://pinggy.io) you can share your PostgreSQL server from localhost with just a single command. **Replace the port 5432 with the port where your server is running.**

Pinggy will give you a URL like `tcp://ranfjyszvqyxz.a.pinggy.online:42555`. Use this address to access the server.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to PostgreSQL server:" portstring="PostgreSQL Port" localport="5432" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
