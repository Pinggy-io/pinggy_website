---
title: "Run Tunnel on Startup with rc.local"
description: "Learn how to use rc.local to run your Pinggy tunnel automatically on Linux boot. A simple alternative to systemd for older systems or quick setups."
date: 2024-05-14T11:39:18Z
draft: false
---

# Run Tunnel on Startup with rc.local

`rc.local` is a traditional way to run commands at the end of the multi-user runlevel on many Linux distributions. While many modern systems have moved to `systemd`, `rc.local` remains a popular and simple choice for quick startup scripts.

## Prerequisite

Generate an SSH key if you haven't already. Since `rc.local` runs as the **root** user, it's easiest to generate the key for the root user.

- In your terminal, run: `sudo ssh-keygen`
- Press Enter until the command finishes.

This is necessary for the SSH command to connect without requiring a password.

## Step 1: Create a Startup Script

It's best practice to put your tunnel command in a separate script file rather than putting it directly in `rc.local`.

1. **Create the Script:**
   ```bash
   sudo nano /usr/local/sbin/pinggy-startup.sh
   ```

2. **Paste your Pinggy command:**
   ```bash
   #!/bin/bash
   # Run Pinggy tunnel in the background
   ssh -p 443 -R0:localhost:8000 -o StrictHostKeyChecking=no -o ServerAliveInterval=30 a.pinggy.io >> /var/log/pinggy.log 2>&1 &
   ```

   **Note:** If you want to run the tunnel as a specific user instead of root, you can use `su`:
   ```bash
   su - yourusername -c 'ssh -p 443 -R0:localhost:8000 -o StrictHostKeyChecking=no -o ServerAliveInterval=30 a.pinggy.io' >> /var/log/pinggy.log 2>&1 &
   ```

   You can customize the command here:

   {{< pinggytunnel box="true" tunnelstring="Paste this command to start tunnel:" portstring="Local Port" localport="8000" webdebugenabled=false keepalive=true >}}
   {{< /pinggytunnel >}}

3. **Make the Script Executable:**
   ```bash
   sudo chmod +x /usr/local/sbin/pinggy-startup.sh
   ```

## Step 2: Configure rc.local

1. **Check if /etc/rc.local exists:**
   If the file does not exist, you can create it.

   ```bash
   sudo nano /etc/rc.local
   ```

2. **Add the script to rc.local:**
   Add the path to your script before the `exit 0` line (if it exists).

   ```bash
   #!/bin/sh -e
   #
   # rc.local
   #
   # This script is executed at the end of each multiuser runlevel.
   # Make sure that the script will "exit 0" on success or any other
   # value on error.

   /usr/local/sbin/pinggy-startup.sh

   exit 0
   ```

3. **Ensure rc.local is executable:**
   ```bash
   sudo chmod +x /etc/rc.local
   ```

4. **Note for Systemd users:**
   On modern systems using `systemd`, ensure that the `rc-local.service` is enabled and running:
   ```bash
   sudo systemctl status rc-local.service
   # If it is not running, try:
   sudo systemctl enable rc-local.service
   sudo systemctl start rc-local.service
   ```

## Step 3: Verification

Reboot your system to verify that the tunnel starts automatically:

```bash
sudo reboot
```

After rebooting, you can check if the SSH process is running:

```bash
ps aux | grep ssh
```

Or check the log file:

```bash
cat /var/log/pinggy.log
```
