---
 title: "Sharing Django from localhost" 
 description: "Django is a Python-based web framework that simplifies and accelerates the process of building web applications."
 date: 2023-05-25T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/django.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Django server from localhost with just a single command. **Replace the port 8000 with the port where your server is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.link`. Use this URL to access the server.

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Django server:" portstring="Django Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>
