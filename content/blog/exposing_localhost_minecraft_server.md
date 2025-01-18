---
 title: "Sharing a Minecraft Server running on Localhost with Your Friends Online"
 description: "Learn how to easily expose your localhost Minecraft server to the internet using Pinggy. This step-by-step guide covers everything from installing the Minecraft Launcher to configuring and sharing your server online, enabling you to play with friends worldwide."
 og_image: "images/minecraft/minecraft_launcher.webp"
 date: 2024-03-01T23:33:55+05:30
 lastmod: 2025-01-17T14:15:25+05:30
 schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIlNoYXJpbmcgYSBNaW5lY3JhZnQgU2VydmVyIHJ1bm5pbmcgb24gTG9jYWxob3N0IHdpdGggWW91ciBGcmllbmRzIE9ubGluZSIsCiAgImRlc2NyaXB0aW9uIjogIkxlYXJuIGhvdyB0byBlYXNpbHkgZXhwb3NlIHlvdXIgbG9jYWxob3N0IE1pbmVjcmFmdCBzZXJ2ZXIgdG8gdGhlIGludGVybmV0IHVzaW5nIFBpbmdneS4gVGhpcyBzdGVwLWJ5LXN0ZXAgZ3VpZGUgY292ZXJzIGV2ZXJ5dGhpbmcgZnJvbSBpbnN0YWxsaW5nIHRoZSBNaW5lY3JhZnQgTGF1bmNoZXIgdG8gY29uZmlndXJpbmcgYW5kIHNoYXJpbmcgeW91ciBzZXJ2ZXIgb25saW5lLCBlbmFibGluZyB5b3UgdG8gcGxheSB3aXRoIGZyaWVuZHMgd29ybGR3aWRlLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9taW5lY3JhZnQvbWluZWNyYWZ0X2xhdW5jaGVyLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCB0aGUgTWluZWNyYWZ0IExhdW5jaGVyIGJ5IHZpc2l0aW5nIHRoZSBvZmZpY2lhbCBNaW5lY3JhZnQgd2Vic2l0ZSwgY3JlYXRpbmcgYW4gYWNjb3VudCwgYW5kIHB1cmNoYXNpbmcgTWluZWNyYWZ0LiIsCiAgICAgICJ1cmwiOiAiaHR0cHM6Ly93d3cubWluZWNyYWZ0Lm5ldCIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJMYXVuY2ggdGhlIE1pbmVjcmFmdCBMYXVuY2hlciBhbmQgc3RhcnQgYSBtYXAuIENsaWNrIG9uICdPcGVuIHRvIExBTicgdG8gaW5pdGlhdGUgdGhlIHNlcnZlciBzZXR1cCBhbmQgbm90ZSB0aGUgcG9ydCBudW1iZXIuIiwKICAgICAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9taW5lY3JhZnQvbWluZWNyYWZ0X29wZW5fdG9fbGFuLndlYnAiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiT3BlbiBhIHRlcm1pbmFsIGFuZCBydW4gdGhlIFBpbmdneSBjb21tYW5kOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjU1NjUgdGNwQGEucGluZ2d5LmlvIHRvIGNyZWF0ZSBhIHR1bm5lbC4iLAogICAgICAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvL2RvY3MvIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvcHkgdGhlIHB1YmxpYyBVUkwgZ2VuZXJhdGVkIGJ5IFBpbmdneSwgc3VjaCBhcyB0Y3A6Ly9leGFtcGxlLnBpbmdneS5saW5rOjQyMjg5LCBhbmQgc2hhcmUgaXQgd2l0aCB5b3VyIGZyaWVuZHMgdG8gY29ubmVjdCB0byB5b3VyIHNlcnZlci4iLAogICAgICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL21pbmVjcmFmdC9wdWJsaWNfdXJsLndlYnAiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiWW91ciBmcmllbmRzIGNhbiB1c2UgdGhlIHByb3ZpZGVkIGVuZHBvaW50IHRvIGNvbm5lY3QgdG8geW91ciBNaW5lY3JhZnQgc2VydmVyLiBFbnN1cmUgdGhlIHNlcnZlciBhbmQgUGluZ2d5IHR1bm5lbCBhcmUgcnVubmluZy4iLAogICAgICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL21pbmVjcmFmdC9taW5lY3JhZnRfam9pbl9zZXJ2ZXIud2VicCIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJPcHRpb25hbDogVXNlIFBpbmdneSBEYXNoYm9hcmQgdG8gbWFuYWdlIHlvdXIgdHVubmVscyBhbmQgZXhwbG9yZSBwbGFucyBmb3IgbG9uZ2VyIHNlc3Npb25zLiIsCiAgICAgICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vI3ByaWNlcyIsCiAgICAgICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaW90L3BpbmdneV9kYXNoYm9hcmQud2VicCIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cgo="
 draft: false
 tags: ["guide", "minecraft"]
 outputs:
  - HTML
  - AMP
---

In this guide, we'll walk through the process of exposing your localhost Minecraft server to the internet using [Pinggy](https://pinggy.io). By following these steps, you can seamlessly play with friends from around the world.

{{% tldr %}}

1. In Minecraft, launch a map and initiate the server setup. Click on **Open to LAN**.
2. Note the port number. Example: **25565**.
3. Open a terminal / cmd, and run the following command (replace 25565 with your port):
   ```bash
   ssh -p 443 -R0:localhost:25565 tcp@a.pinggy.io
   ```
4. This command creates a TCP tunnel and it will output a public URL like `tcp://tljocjkijs.a.pinggy.link:40527`.
5. Your friends can use the endpoint provided by Pinggy `tljocjkijs.a.pinggy.link:42289` to connect to your Local game server.

{{% /tldr %}}

## Installing Minecraft Launcher

To embark on your Minecraft adventure, the first step is to install the Minecraft Launcher. Follow these detailed instructions to ensure a smooth installation process.

1. **Visit the Official Minecraft Website:**           
   Head over to the official Minecraft website by navigating to {{< link href="https://www.minecraft.net" >}}minecraft.net{{< /link >}}. Once on the homepage, you'll find various options and information related to Minecraft.

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

Minecraft will open a port for incoming multiplayer connections. Note the port number; in this case, it's **25565**.

{{< image "minecraft/minecraft_port_opened.webp" "Port Opened" >}}

## Exposing the Server with Pinggy

Now, let's use Pinggy to expose the server to the internet.

1. Open a terminal and run the following command:

   ```bash
   ssh -p 443 -R0:localhost:25565 tcp@a.pinggy.io
   ```

   {{< pinggytunnel box="true" mode="tcp" tunnelstring="Paste this command to start the tunnel" portstring="Server Port" localport="25565" webdebugenabled=false keepalive=true tryYourselfText="Customize your command:" >}}{{< /pinggytunnel >}}

2. After running the tunneling command, you will receive a public URL in the following format: `tcp://rnsej-14-139-241-214.a.free.pinggy.link:42289`. This URL can be used to connect to your Minecraft server from anywhere.

   {{< image "minecraft/public_url.webp" "Public URL" >}}

## Joining the Server

Your friends can use the endpoint provided by Pinggy `rnsej-14-139-241-214.a.free.pinggy.link:42289` to connect to your Local game server.

{{< image "minecraft/minecraft_join_server.webp" "Join Server" >}}

Ensure your Minecraft server and the Pinggy tunnel are running; otherwise, players won't be able to connect.

## Tips

Use [Pinggy Dashboard](https://dashboard.pinggy.io/) to manage your tunnels, and advanced controls.

{{< image "iot/pinggy_dashboard.webp" "Pinggy Dashboard" >}}

Pinggy gives you free tunnels for 60 minutes. For longer sessions, explore Pinggy's pricing details [here](https://pinggy.io/#prices) to find the most suitable plan for your needs and budget.
