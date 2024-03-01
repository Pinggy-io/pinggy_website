---
 title: "Exposing localhost minecraft server"
 description: "Learn how to easily expose your localhost Minecraft server to the internet using Pinggy. This step-by-step guide covers everything from installing the Minecraft Launcher to configuring and sharing your server online, enabling you to play with friends worldwide."
 og_image: "images/minecraft/minecraft_launcher.webp"
 date: 2024-03-01T23:33:55+05:30
 draft: false
 tags: ["guide", "minecraft"]
 outputs:
  - HTML
  - AMP
---

In this guide, we'll walk through the process of exposing your localhost Minecraft server to the internet using [Pinggy](https://pinggy.io).

## Installing Minecraft Launcher

Begin by installing the Minecraft Launcher from the official website. You can download it [here](https://www.minecraft.net).

{{< image "minecraft/minecraft_launcher.webp" "Minecraft Launcher" >}}

## Starting a Map

Once the Minecraft Launcher is installed, launch a map and start playing. Click on **Open to LAN** to initiate the server setup.

{{< image "minecraft/minecraft_open_to_lan.webp" "Open to LAN" >}}

Configure settings like game mode and cheats. Once done, click on **Start LAN World**.

{{< image "minecraft/minecraft_start_lan_world.webp" "Start LAN World" >}}

Minecraft will open a port for incoming multiplayer connections. Note the port number; in this case, it's **37624**.

{{< image "minecraft/minecraft_port_opened.webp" "Port Opened" >}}

## Exposing the Server with Pinggy

Next, you can go ahead and expose the port **37624** using Pinggy.

1. Open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:37624 tcp@a.pinggy.io
   ```

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start the tunnel" portstring="Server Port" localport="37624" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format: `tcp://rnsej-14-139-241-214.a.free.pinggy.online:42289`. This URL can be used to connect to your Minecraft server from anywhere.

   {{< image "minecraft/public_url.webp" "Public URL" >}}

## Joining the Server

Your friends can use the endpoint provided by Pinggy `rnsej-14-139-241-214.a.free.pinggy.online:42289` to connect to your Local game server.

{{< image "minecraft/minecraft_join_server.webp" "Join Server" >}}

Ensure your Minecraft server and the Pinggy tunnel are running; otherwise, players won't be able to connect.

## Tips

Use [Pinggy Dashboard](https://pinggy.io/dashboard) to manage your tunnels, monitor traffic, and access logs.

{{< image "iot/pinggy_dashboard.webp" "Pinggy Dashboard" >}}

You can explore Pinggy's pricing details [here](https://pinggy.io/#prices) to find the most suitable plan for your needs and budget.
