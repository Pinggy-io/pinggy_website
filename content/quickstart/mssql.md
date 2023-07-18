---
 title: "Sharing MsSQL from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/mssql.svg"
---

With [pinggy.io](https://pinggy.io) you can share your MsSQL server from localhost with just a single command. **Replace the port 1433 with the port where your server is running.**

Pinggy will give you a URL like `tcp://ranfjyszvqyxz.a.pinggy.online:42555`. Use this address to access the server.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to MsSQL server:" portstring="MsSQL Port" localport="1433" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
