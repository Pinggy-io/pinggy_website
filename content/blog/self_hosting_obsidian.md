---
title: "Self-hosting Obsidian"
description: "Complete guide to self-hosting Obsidian sync using Docker, CouchDB, and Pinggy tunnel. No paid Obsidian Sync, full control, and all the fun of building your own sync server!"
date: 2025-09-14T14:30:00+05:30
draft: false
og_image: "images/self_hosting_obsidian/self_hosting_obsidian_complete_guide.webp"
tags: ["obsidian", "self-hosted", "docker", "couchdb", "livesync", "pinggy"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IEkgU2VsZi1Ib3N0ZWQgT2JzaWRpYW4gU3luYyB3aXRoIERvY2tlciwgQ291Y2hEQiAmIFBpbmdneSBUdW5uZWwiLAogICJkZXNjcmlwdGlvbiI6ICJDb21wbGV0ZSBndWlkZSB0byBzZWxmLWhvc3RpbmcgT2JzaWRpYW4gc3luYyB1c2luZyBEb2NrZXIsIENvdWNoREIsIGFuZCBQaW5nZ3kgdHVubmVsLiBObyBwYWlkIE9ic2lkaWFuIFN5bmMsIGZ1bGwgY29udHJvbCwgYW5kIGFsbCB0aGUgZnVuIG9mIGJ1aWxkaW5nIHlvdXIgb3duIHN5bmMgc2VydmVyISIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3Rpbmdfb2JzaWRpYW4vc2VsZl9ob3N0aW5nX29ic2lkaWFuX2NvbXBsZXRlX2d1aWRlLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCBEb2NrZXIgb24geW91ciBzeXN0ZW0gKFdpbmRvd3MsIG1hY09TLCBvciBMaW51eCkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2V0IHVwIENvdWNoREIgdXNpbmcgRG9ja2VyIGNvbnRhaW5lciIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDb25maWd1cmUgQ291Y2hEQiBkYXRhYmFzZSBhbmQgdXNlciBhY2NvdW50cyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTZXQgdXAgUGluZ2d5IHR1bm5lbCBmb3IgcmVtb3RlIGFjY2VzcyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIGFuZCBjb25maWd1cmUgT2JzaWRpYW4gTGl2ZVN5bmMgcGx1Z2luIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_obsidian/self_hosting_obsidian_complete_guide.webp" "Self-hosting Obsidian" >}}

I've been using Obsidian as my main note-taking tool for over two years, but didn’t want to pay $5/month for Obsidian Sync when I could build something better. After some research, I found the perfect setup: Docker for containerization, {{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}} for real-time sync, and {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} for secure remote access. It costs almost nothing, gives me full control of my data, and works flawlessly across all devices.

The best part is the Obsidian LiveSync plugin, which provides faster, more reliable sync than the official service. I’ve been running this for months—handling large vault reorganizations and multi-device edits with ease. Since it’s all containerized, the setup is reproducible, easy to maintain, and works on Windows, macOS, or Linux. With this guide, you can have your own private Obsidian sync server running in under an hour.

{{% tldr %}}
**What You'll Build:**
- Self-hosted CouchDB database for storing your notes securely
- Docker containers for easy deployment and management across any OS
- Pinggy tunnel for secure remote access without port forwarding hassles
- Real-time sync across all your devices using the LiveSync plugin
- Complete data ownership with zero monthly fees (save $48/year!)

**Prerequisites:**
- Docker installed on your system (Windows, macOS, or Linux)
- Basic command line knowledge (copy/paste level)
- Obsidian installed on your devices
{{% /tldr %}}

## Why I Built My Own Sync Server

I use Obsidian as my primary knowledge hub, storing 3,000+ interconnected notes—from project docs and code snippets to research and personal thoughts. With so much of my workflow depending on it, I wanted more control than the \$5/month Obsidian Sync offered. A few sync conflicts (and lost work) sealed the deal: I needed my own reliable, private setup.

The main drivers were:

* **Privacy**: Sensitive project and personal info
* **Cost**: \$48/year adds up when a better free option exists
* **Learning**: Explore how real-time sync works
* **Reliability**: Full control over uptime and performance
* **Customization**: Tailor the setup to my needs

After researching options, I chose CouchDB for replication, paired with Obsidian’s LiveSync plugin. Combined with Docker for containerization and Pinggy for secure tunneling, this solution is robust, maintainable, and more reliable than many paid alternatives.

## What We're Building
Our self-hosted Obsidian sync setup has three main parts: **{{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}}**, **Docker**, and **{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}**, tied together by the **LiveSync plugin**. CouchDB powers real-time replication, making it ideal for syncing notes. Everything runs in Docker containers, so the setup works the same on Windows, macOS, and Linux.

LiveSync bridges Obsidian and CouchDB, handling sync logic and avoiding merge conflicts that plague Git-based solutions—changes appear instantly across devices. Pinggy adds secure remote access without port forwarding or dynamic IP headaches.

## Prerequisites and System Requirements

Before we dive into the setup, let’s make sure you have everything ready. Since we’re using Docker, the requirements are minimal and consistent across all operating systems.

You’ll need Docker installed on your system Docker Desktop works best for Windows and macOS, while Linux users can install Docker Engine directly.

You’ll also need Obsidian on every device you want to sync. The LiveSync plugin works on both desktop (Windows, macOS, Linux) and mobile (iOS, Android), so you can keep notes in sync across all your devices.
## Step 1: Installing Docker

Docker is the foundation of our setup, providing containerization that makes deployment consistent across different operating systems. The installation process varies by platform, so I'll cover all three major operating systems.

### Windows Installation

Download Docker Desktop from {{< link href="https://www.docker.com/products/docker-desktop/" >}}docker.com{{< /link >}} and run the installer. You'll need Windows 10 64-bit Pro, Enterprise, or Education (Build 19041 or higher), or Windows 11. The installer will enable WSL 2 if it's not already active.

```powershell
# Verify Docker installation
docker --version
docker-compose --version
```

After installation, Docker Desktop should show a green status indicator in your system tray. If you encounter issues, make sure virtualization is enabled in your BIOS settings.



### macOS Installation

Download Docker Desktop for Mac from the official website. The installer works on both Intel and Apple Silicon Macs running macOS 10.15 or newer.

```bash
# Verify Docker installation
docker --version
docker-compose --version
```

### Linux Installation

For Ubuntu/Debian systems, use the official Docker repository for the most up-to-date version:

```bash
# Update package index
sudo apt update

# Install prerequisites
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to docker group (requires logout/login)
sudo usermod -aG docker $USER

# Verify installation
docker --version
docker compose version
```

## Step 2: Setting Up CouchDB with Docker

Now we'll create our {{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}} instance using Docker. CouchDB is perfect for this use case because it's designed for replication and handles the complex synchronization logic that makes LiveSync work so well.

### Creating the Docker Compose Configuration

Create a new directory for your Obsidian sync server and set up the Docker Compose configuration:

**Windows (PowerShell):**
```powershell
# Create project directory
mkdir obsidian-sync
cd obsidian-sync

# Create docker-compose.yml
New-Item -ItemType File -Name "docker-compose.yml"
```

**macOS/Linux:**
```bash
# Create project directory
mkdir obsidian-sync
cd obsidian-sync

# Create docker-compose.yml
touch docker-compose.yml
```

Now edit the `docker-compose.yml` file with your preferred text editor and add the following configuration:

```yaml
version: '3.8'

services:
  couchdb:
    image: couchdb:latest
    container_name: couchdb-for-ols
    user: 5984:5984
    environment:
      - COUCHDB_USER=admin #Please change as you like.
      - COUCHDB_PASSWORD=112 #Please change as you like.
    volumes:
      - ./couchdb-data:/opt/couchdb/data
      - ./couchdb-etc:/opt/couchdb/etc/local.d
    ports:
      - 5984:5984
    restart: unless-stopped

volumes:
  couchdb-data:
  couchdb-config:

networks:
  obsidian-network:
    driver: bridge

```

Replace `your-secure-password-here` with a strong password. This will be your CouchDB admin password, so make it secure and memorable.

{{< image "self_hosting_obsidian/docker_compose.webp" "Docker Compose file example" >}}

### Starting CouchDB

Launch your CouchDB container using Docker Compose:

**All Platforms:**
```bash
# Start CouchDB in detached mode
docker compose up -d

# Check if container is running
docker compose ps

# View logs if needed
docker compose logs couchdb
```
{{< image "self_hosting_obsidian/run_docker_compose_up_d.webp" "Run docker compose up -d" >}}

{{< image "self_hosting_obsidian/showing_dokcer_container_running.webp" "Docker containers running" >}}


After a few moments, CouchDB should be running and accessible at `http://localhost:5984`. You can verify this by opening the URL in your browser – you should see a JSON response welcoming you to CouchDB.

{{< image "self_hosting_obsidian/couchdb_running_in_local_host_5984.webp" "CouchDB running at localhost:5984" >}}

## Step 3: Configuring CouchDB

With CouchDB running, we need to set it up for use with Obsidian LiveSync. This involves creating a database and configuring user permissions.

### Initial CouchDB Setup

Open your browser and navigate to `http://localhost:5984/_utils` to access the CouchDB admin interface. Log in using the credentials you specified in the Docker Compose file (username: `admin`, password: your chosen password).

{{< image "self_hosting_obsidian/login_couch_db.webp" "Log in to CouchDB Fauxton" >}}

### Creating the Database

In the CouchDB admin interface:

1. Click "Create Database" in the sidebar
2. Name your database `obsidian` (or any name you prefer)
3. Leave "Partitioned" unchecked
4. Click "Create"

{{< image "self_hosting_obsidian/create_obsidian_database.webp" "Create obsidian database" >}}

### Configuring Database Permissions

Now we need to give our new user access to the obsidian database:

1. Navigate to your `obsidian` database
2. Click on "Permissions" in the sidebar
3. Under "Members", add `obsidian_user` to both "Names" fields (for read and write access)
4. Click "Save"

{{< image "self_hosting_obsidian/add_premission_in_obsidian_database.webp" "Add permissions to obsidian database" >}}

Your CouchDB instance is now ready for Obsidian LiveSync!

## Step 4: Setting Up Pinggy Tunnel for Remote Access

Instead of dealing with port forwarding or dynamic DNS, we'll use {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} to create a secure tunnel to our CouchDB instance. This approach is much simpler and more secure than exposing your database directly to the internet.

The beauty of {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} is its simplicity - you don't need to download or install anything. It works directly through SSH, which is already available on all modern operating systems.

**Note:** This tunnel setup requires {{< link href="https://pinggy.io/#prices" >}}Pinggy Pro{{< /link >}}.

### Creating the Tunnel

Start a Pinggy tunnel to expose your CouchDB instance securely with just one command:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:5984 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5984 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5984 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That's it! Pinggy will provide you with a public URL (something like `https://abc123.a.pinggy.io`) that securely tunnels to your local CouchDB instance. This URL will work from anywhere on the internet, allowing you to sync your Obsidian notes from any device.

{{< image "self_hosting_obsidian/run_the_pinggy_tunnel.webp" "Run the Pinggy tunnel" >}}

The tunnel will display something like this:
```
You can access local server via following URL(s):
https://abc123.a.pinggy.io
```

Copy this URL - you'll need it for configuring Obsidian LiveSync.

## Step 5: Installing Obsidian and Configuring LiveSync

Now comes the exciting part – downloading Obsidian, setting it up, and connecting it to your self-hosted CouchDB instance using the LiveSync plugin.

### Downloading and Installing Obsidian

First, let's get Obsidian installed on your system. Obsidian is available for all major platforms and is completely free to use.

**Windows:**
1. Visit {{< link href="https://obsidian.md/" >}}obsidian.md{{< /link >}}
2. Click "Download for Windows"
3. Run the downloaded installer (`Obsidian.Setup.exe`)
4. Follow the installation wizard
5. Launch Obsidian from your Start menu or desktop shortcut

**macOS:**
1. Visit {{< link href="https://obsidian.md/" >}}obsidian.md{{< /link >}}
2. Click "Download for Mac"
3. Open the downloaded DMG file
4. Drag Obsidian to your Applications folder
5. Launch Obsidian from Applications or Spotlight

**Linux:**
1. Visit {{< link href="https://obsidian.md/" >}}obsidian.md{{< /link >}}
2. Choose your preferred format:
   - **AppImage** (universal): Download and make executable
   - **Snap**: `sudo snap install obsidian --classic`
   - **Flatpak**: `flatpak install flathub md.obsidian.Obsidian`
   - **DEB/RPM**: Download the appropriate package for your distribution

{{< image "self_hosting_obsidian/download_obsidian.webp" "Download Obsidian" >}}

### Initial Obsidian Setup

When you first launch Obsidian:

1. **Create or Open a Vault**: Choose "Create new vault" if this is your first time
2. **Name your vault**: Give it a meaningful name like "My Notes" or "Knowledge Base"
3. **Choose location**: Select where you want to store your notes locally
4. **Skip the tutorial** for now (we'll set up sync first)

{{< image "self_hosting_obsidian/create_the_new_vault_in_obsidian.webp" "Create a new Obsidian vault" >}}

### Installing the LiveSync Plugin

Now let's install the plugin that will connect to your CouchDB server:

1. Open Obsidian and click the Settings icon (gear icon) in the bottom-left
2. In the left sidebar, navigate to "Community plugins"

{{< image "self_hosting_obsidian/turn_on_community_lugins_in_obsidian.webp" "Turn on community plugins" >}}

3. If this is your first community plugin, click "Turn on community plugins"

{{< image "self_hosting_obsidian/community_plugins_turn_on_restricted_mode.webp" "Community plugins restricted mode" >}}

4. Click "Browse" to open the plugin marketplace


5. In the search bar, type "Self-hosted LiveSync"

{{< image "self_hosting_obsidian/search_the_self_hosted_livesync_plugin.webp" "Search Self-hosted LiveSync plugin" >}}

6. Find the plugin by **vorotamoroz** (make sure it's the official one)
7. Click "Install"
8. After installation, click "Enable" to activate the plugin

{{< image "self_hosting_obsidian/enable_self_hosted_livesync_plugin.webp" "Enable Self-hosted LiveSync plugin" >}}

### Configuring LiveSync Plugin

Once the plugin is installed and enabled, you'll see a new "Self-hosted LiveSync" option in your settings. We'll use the manual setup for full control.

1. In Settings, scroll down to find "Self-hosted LiveSync" in the left sidebar
2. Click it to open the plugin settings
3. Go to the "Setup" tab
4. Click "Manual setup"
5. Click "Next" to Appearance Settings
6. Fill in your connection details:

**Database Configuration:**
- **Server URI**: Your Pinggy tunnel URL (e.g., `https://abc123.a.pinggy.io`)
- **Username**: `admin`
- **Password**: Your CouchDB admin password (from `docker-compose.yml`)
- **Database name**: `obsidian`
- **Test Connection**: Click to verify your settings
- Then click "Next" and accept any warnings if prompted

{{< image "self_hosting_obsidian/remote_configuration_server_url.webp" "LiveSync server URL configuration" >}}

**Important Configuration Notes:**
- Use the full Pinggy URL including `https://`
- Don't add `/obsidian` or any extra path to the URI
- Make sure your Pinggy tunnel is running before testing

## Step 6: Adding Additional Devices

One of the best features of this setup is how easy it is to add new devices to your sync network.

### Generating Setup URI for Other Devices
Once sync is working properly:

1. Go to the "Setup" tab in LiveSync settings
2. In the "Set up other devices" section, click "Copy setup URI"
3. Enter a passphrase to encrypt the setup URI and click "OK"
4. The setup URI will be copied automatically
5. The URI format: `obsidian://setuplivesync?settings=encrypted_config_data`

**Security Note**: This URI contains encrypted connection information. Store it in a password manager or secure location.

{{< image "self_hosting_obsidian/copy_the_setup_url.webp" "Copy the setup URI" >}}

### Using the Setup URI

On each new device where you want to sync your Obsidian vault:

1. Install Obsidian and the Self-hosted LiveSync plugin
2. Go to Settings → Self-hosted LiveSync
3. Go to the "Setup" tab
4. Choose "Connect with setup URL"
5. Paste the setup URI you saved earlier
6. Enter the passphrase
7. Click "Apply"

{{< image "self_hosting_obsidian/connect_with_setup_url.webp" "Connect with setup URL" >}}
{{< image "self_hosting_obsidian/enter_you_encrpt_passphrase.webp" "Enter your encrypt passphrase" >}}

The plugin will automatically configure all the connection settings and begin syncing your vault to the new device.

{{< image "self_hosting_obsidian/data_sync_between_two_device.webp" "Data sync between two devices" >}}

## Conclusion
By combining Docker, CouchDB, Pinggy, and the Obsidian LiveSync plugin, you get a private, reliable, and cost-effective alternative to Obsidian Sync. The setup takes less than an hour, works seamlessly across desktop and mobile devices, and saves you from recurring subscription fees while giving you complete ownership of your data.

If you’ve ever hesitated to trust your notes to a third-party service or wanted more flexibility, self-hosting is a powerful solution. Once set up, it quietly runs in the background, keeping your notes instantly in sync no matter where you are. With this approach, you gain both peace of mind and the satisfaction of building your own professional-grade sync system.