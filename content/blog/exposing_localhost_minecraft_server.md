---
 title: "Hosting a Localhost Minecraft Server Online with Pinggy"
 description: "Learn how to easily expose your localhost Minecraft server to the internet using Pinggy. This step-by-step guide covers everything from installing the Minecraft Launcher to configuring and sharing your server online, enabling you to play with friends worldwide."
 og_image: "images/minecraft/minecraft_launcher.webp"
 date: 2024-03-01T23:33:55+05:30
 draft: false
 tags: ["guide", "minecraft"]
 outputs:
  - HTML
  - AMP
---

In this guide, we'll walk through the process of exposing your localhost Minecraft server to the internet using [Pinggy](https://pinggy.io).By following these steps, you can seamlessly play with friends from around the world.

## Installing Minecraft Launcher

To embark on your Minecraft adventure, the first step is to install the Minecraft Launcher. Follow these detailed instructions to ensure a smooth installation process.

1. **Visit the Official Minecraft Website:**
   Head over to the official Minecraft website by navigating to [minecraft.net](https://www.minecraft.net). Once on the homepage, you'll find various options and information related to Minecraft.

2. **Create a Minecraft Account:**
   If you don't already have a Minecraft account, you can create one by registering on the website. You can register by linking your Microsoft account. Follow the on-screen instructions to complete the registration process and verify your account.

   {{< image "minecraft/minecraft_register.png" "Login/Signup" >}}

3. **Purchase Minecraft:**
   After successfully creating your account, you'll need to purchase Minecraft. Look for the `Get Minecraft` section on the website. Choose the edition of Minecraft you want to purchase, such as Java Edition or Bedrock Edition, and complete the payment process.

4. **Choose Your Platform:**
   Once you've purchased Minecraft, you can download the game for various platforms. On the Minecraft website, navigate to the "Download" section. Here, you'll see options for different platforms, including Windows, macOS, Linux (Debian/Ubuntu), iOS, Android, and more.

5. **Select Your Edition:**
   Depending on the edition you purchased, choose the appropriate download link. For example, if you bought Java Edition, click on the "Download for Windows" link if you're using a Windows PC. If you purchased Bedrock Edition, select the relevant link for your device.

6. **Run the Installer:**
   Once the download is complete, run the installer. Follow the on-screen instructions to install the Minecraft Launcher on your device. The installation process may vary slightly depending on your operating system.

7. **Launch the Minecraft Launcher:**
   After installation, launch the Minecraft Launcher. You may need to log in with the account credentials you used during the signup process.

   {{< image "minecraft/minecraft_launcher.webp" "Minecraft Launcher" >}}

Congratulations! You've successfully installed the Minecraft Launcher on your device. Now, you're ready to dive into the blocky and adventurous world of Minecraft. Whether you're exploring solo or planning to host a multiplayer server, the Minecraft Launcher is your gateway to endless creativity and fun.

## Starting a Map

Once the Minecraft Launcher is installed, launch a map and initiate the server setup. Click on **Open to LAN** to configure your server settings.

{{< image "minecraft/minecraft_open_to_lan.webp" "Open to LAN" >}}

Configure various settings, such as game mode and cheats. Once done, click on **Start LAN World**.

{{< image "minecraft/minecraft_start_lan_world.webp" "Start LAN World" >}}

Minecraft will open a port for incoming multiplayer connections. Note the port number; in this case, it's **37624**.

{{< image "minecraft/minecraft_port_opened.webp" "Port Opened" >}}

## Exposing the Server with Pinggy

Now, let's use Pinggy to expose the server to the internet.

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
