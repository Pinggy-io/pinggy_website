---
 title: "Sharing Jupyter Notebook from localhost" 
 date: 2023-05-25T01:15:25+05:30 
 draft: false 
 tags: ["guide"]
 og_image: "/quickstart/images/jupyter.svg"
---

# Sharing Jupyter Notebook from localhost

With [pinggy.io](https://pinggy.io) you can share your Jupyter notebook from localhost with just a single command. **Replace the port 8888 with the port where your notebook is running.**

Pinggy will give you a URL like `https://ranlkfsbjkxry.a.pinggy.io`. Open this URL with your jupyter notebook token such as:
https://ranlkfsbjkxry.a.pinggy.io?token=09f45dxxxx

{{< pinggytunnel box="true" tunnelstring="Paste this command to start a tunnel to Jupyter Notebook:" portstring="Jupyter Notebook Port" localport="8888" webdebugenabled=false keepalive=true headermodifications=`[{"mode":"u", "headername":"Host", "headerval": "localhost:8888"}]` >}}
{{< /pinggytunnel >}}

<hr>
