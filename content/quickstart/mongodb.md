---
 title: "Sharing MongoDB from localhost" 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/mongodb.svg"
---

With [pinggy.io](https://pinggy.io) you can share your MongoDB server from localhost with just a single command. **Replace the port 27017 with the port where your server is running.**

Pinggy will give you a URL like `tcp://ranfjyszvqyxz.a.pinggy.io:42555`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to MongoDB server:" portstring="MongoDB server Port" localport="27017" mode="tcp" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
