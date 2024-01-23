---
title: "Sharing Minecraft from localhost"
description: "Minecraft is a popular sandbox game known for its blocky worlds, creative building, and adventurous gameplay."
date: 2023-12-06T01:15:25+05:30
draft: false
tags: ["guide"]
og_image: "/quickstart/images/minecraft.svg"
---

With [pinggy.io](https://pinggy.io), you can easily share your Minecraft server from localhost with just a single command. **Replace the port 25565 with the port where your server is running.**

{{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start a tunnel to Minecraft server:" portstring="Minecraft server Port" localport="25565" webdebugenabled=false keepalive=true >}}
{{< /pinggytunnel >}}

### Ways to Start a Minecraft Server

**Using the Minecraft Server JAR file:**

- **Download the Minecraft server software**:

  - Visit the [official website](https://www.minecraft.net/en-us/download/server).
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
  - You can also modify the `server.properties` file for more advanced configurations.

<hr>
