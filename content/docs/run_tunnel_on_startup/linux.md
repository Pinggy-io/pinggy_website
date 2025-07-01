---
title: "Run Tunnel on Startup for Linux"
description: "Run your Pinggy tunnel on Linux startup with ease. Create a shell script with your Pinggy command and set up a systemd service for automatic execution."
date: 2023-02-07T14:15:25+05:30
draft: false
---

# Run Tunnel on Startup for Linux

To run a tunnel on Linux startup, follow these steps:

## Prerequisite

Generate an ssh key, if you don't have one already.
   
   - In your terminal / command prompt run: `ssh-keygen`
   - Press Enter key (Return key) till the command finishes.
   
   This is necessary to skip the password input of the ssh command.

## Step 1: Create a Shell Script

1. **Open a Terminal:**

   - Open your terminal emulator on Linux.

2. **Create a Shell Script:**

   - Use a text editor to create a shell script. For example, you can use `nano`:

     ```bash
     sudo nano /usr/local/sbin/my-startup.sh
     ```

   - Paste your Pinggy command into the script. For example:

     ```bash
     #!/bin/sh
     ssh -p 443 -R0:localhost:8000 -o StrictHostKeyChecking=no
     -o ServerAliveInterval=30 a.pinggy.io
     ```

   You can customize the command here:

   {{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false keepalive=true >}}
   {{< /pinggytunnel >}}

   - Save and exit the text editor.

3. **Make the Script Executable:**
   - Run the following command to make your script executable:
     ```bash
     sudo chmod +x /usr/local/sbin/my-startup.sh
     ```

## Step 2: Create a Systemd Service

1. **Create a Systemd Service File:**

   - Use a text editor to create a systemd service file. For example:

     ```bash
     sudo nano /etc/systemd/system/my-startup.service
     ```

   - Paste the following content into the file:

     ```ini
     [Unit]
     Description=Pinggy Tunnel Startup

     [Service]
     ExecStart=/usr/local/sbin/my-startup.sh
     Restart=on-failure
     RestartSec=10s

     [Install]
     WantedBy=multi-user.target
     ```

   - Save and exit the text editor.

2. **Reload Systemd and Enable the Service:**
   - Run the following commands to reload systemd and enable your service:
     ```bash
     sudo systemctl daemon-reload
     sudo systemctl enable my-startup.service
     ```

## Step 3: Verify and Monitor the Service

1. **Check Service Status:**

   - Run the following command to check the status of your service:

     ```bash
     sudo systemctl status my-startup.service
     ```

   {{< figure src="/doc_img/linux_system_service_status.webp" alt="Linux System Service Status">}}

2. **View Service Logs:**

   - Use the following command to view the logs of your service:
     ```bash
     sudo journalctl -u my-startup.service
     ```

   {{< figure src="/doc_img/linux_logs.webp" alt="Linux Logs">}}

Now, your Pinggy tunnel will automatically execute each time your Linux system starts up.
