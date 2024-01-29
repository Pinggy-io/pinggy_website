---
 title: "Sharing MySQL from localhost"
 description: "MySQL, a powerful relational database management system, is widely acclaimed for its robustness and flexibility." 
 date: 2023-05-26T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/mysql.svg"
---

With [pinggy.io](https://pinggy.io) you can share your MySQL server from localhost with just a single command. **Replace the port 3306 with the port where your server is running.**

Pinggy will give you a URL like `tcp://ranfjyszvqyxz.a.pinggy.online:42555`. Use this URL to access the server.

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to MySQL server:" portstring="MySQL server Port" localport="3306" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
