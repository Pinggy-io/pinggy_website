---
title: "Sharing Minecraft from localhost"
description: "Minecraft is a popular sandbox game known for its blocky worlds, creative building, and adventurous gameplay."
date: 2023-12-06T01:15:25+05:30
lastmod: 2026-08-10T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/minecraft.svg"
---

With [pinggy.io](https://pinggy.io), you can share your Minecraft server from localhost with just a single command. No port forwarding, no router settings, nothing to install. **Replace the port 25565 with the port where your server is running.**

{{% tldr %}}

1. In Minecraft, launch a map and initiate the server setup. Click on **Open to LAN**.
2. Note the port number. Example: **25565**.
3. Open a terminal / cmd, and run the following command (replace 25565 with your port):
   ```bash
   ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io
   ```
4. This command creates a TCP tunnel and it will output a public URL like `tcp://tljocjkijs.a.pinggy.link:40527`.
5. Your friends can use the endpoint provided by Pinggy `tljocjkijs.a.pinggy.link:40527` to connect to your local game server.

{{% /tldr %}}


{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to Minecraft server:" portstring="Minecraft server Port" localport="25565" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

{{< iframe src="https://www.youtube.com/embed/jwHRK6rYDIs" title="How to Host a Minecraft Server for Friends Online (No Port Forwarding)" >}}
## Open your world to LAN

This is the quickest route: any world you are already playing can become a server without downloading anything.

1. Launch Minecraft and load the world you want to share.
2. Press **Esc** and click **Open to LAN**.
3. Choose the game mode and whether cheats are allowed, then click **Start LAN World**.
4. Minecraft opens a port for incoming multiplayer connections and prints it in the chat, for example `Local game hosted on port 25565`. Note that number - it changes every time you reopen the world.

**Open to LAN** is a Java Edition feature. On Bedrock, or if you want the world to stay up after you quit, run a dedicated server instead (see below).

## Start the tunnel

Open a terminal (or cmd on Windows) and run the command below, replacing 25565 with the port from the previous step:

```bash
ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io
```

Pinggy creates a TCP tunnel and prints a public address like `tcp://tljocjkijs.a.pinggy.link:40527`.

## Join the server

Your friends open **Multiplayer** &rarr; **Direct Connection** and enter the host and port from that address, without the `tcp://` prefix: `tljocjkijs.a.pinggy.link:40527`.

Both the world and the tunnel have to stay running. If you close either one, everyone gets disconnected.

## Running a dedicated server instead

If you want a server that stays up independently of your game client, use the Minecraft server JAR.

- **Download the Minecraft server software**:

  - Visit the <a href="https://www.minecraft.net/en-us/download/server" target="_blank">official website</a>.
  - Download the server software suitable for your operating system.

- **Setting up the server**:

  - Once downloaded, navigate to the directory where the server file is located.
  - Open a terminal or command prompt in that directory.

- **Launch the server**:

  - Run the following command:
    ```bash
    java -Xmx1024M -Xms1024M -jar server.jar nogui
    ```
    Replace `server.jar` with the actual name of your server file if different.

- **Configuring the server**:
  - After the server starts, follow the console prompts to configure settings such as game mode, difficulty, etc.
  - You can also modify the `server.properties` file for more advanced configurations. The port it listens on is the `server-port` value in that file, 25565 by default. That is the port to pass to the tunnel command above.

<hr>
