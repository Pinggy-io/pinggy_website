---
 title: "Sharing Django server from localhost" 
 date: 2023-05-25T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/django.svg"
---

With [pinggy.io](https://pinggy.io) you can share your Jupyter notebook from localhost with just a single command. **Replace the port 3000 with the port where your notebook is running.**

Pinggy will give you a URL like https://ranlkfsbjkxry.a.pinggy.io. Open this URL with your jupyter notebook token such as:
https://ranlkfsbjkxry.a.pinggy.io?token=09f45dxxxx


{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Django server:" portstring="Django Port" localport="8000" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

<hr>