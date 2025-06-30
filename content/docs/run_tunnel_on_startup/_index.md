---
title: "Run Tunnel on Startup for Windows"
description: "Run your Pinggy tunnel on Windows startup with ease. Create a batch file with your Pinggy command, save it in the startup folder for automatic execution."
date: 2023-12-13T14:15:25+05:30
draft: false
---

# Run Tunnel on Startup for Windows

To run a tunnel on Windows startup, follow these steps:

1. Generate an ssh key, if you don't have one already.
   
   - In your terminal / command prompt run: `ssh-keygen`
   - Press Enter key (Return key) till the command finishes.
   
   This is necessary to skip the password input of the ssh command.

2. **Create a Batch File**:

   - Open Notepad or any text editor.
   - Paste your Pinggy command into the text editor. For example:
     {{< ssh_command text="ssh -p 443 -R0:localhost:8000 -o ServerAliveInterval=30 a.pinggy.io" >}}
     "{}"
     {{</ ssh_command >}}

   You can customize the command here:

   {{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false keepalive=true >}}
   {{< /pinggytunnel >}}

3. **Save the Batch File**:

   - After pasting the Pinggy command into the text editor, go to the 'File' menu and select 'Save As'.

   - Choose a recognizable name for your batch file, such as `pinggy_tunnel.bat`.

   - Crucially, ensure you select 'All Files' from the 'Save as type' dropdown menu before saving. This prevents the file from being saved as a `.txt` file unintentionally.

   - Click 'Save' to confirm the creation of your batch file.

   {{< figure src="/doc_img/windows_saveas.webp" alt="Windows Save As Option">}}

4. **Access the Startup Folder**:

   - Press `Win + R` on your keyboard to open the Run dialog.
   - Type `shell:startup` and press Enter. This will open the Startup folder.

   {{< figure src="/doc_img/windows_startup.webp" alt="Windows Startup">}}

5. **Move the Batch File**:

   - Copy or move the `pinggy_tunnel.bat` file you created into this Startup folder.

   {{< figure src="/doc_img/windows_startup_folder.webp" alt="Windows Startup Folder">}}

6. **Run Tunnel on Startup**:
   - The `pinggy_tunnel.bat` file in the Startup folder will execute automatically each time you log in to your Windows account.
