---
title: "Self-hosting Obsidian"
description: "Complete guide to self-hosting Obsidian sync using Docker, CouchDB, and Pinggy tunnel. No paid Obsidian Sync, full control, and all the fun of building your own sync server!"
date: 2025-09-14T14:30:00+05:30
lastmod: 2026-10-10T14:30:00+05:30
draft: false
og_image: "images/self_hosting_obsidian/self_hosting_obsidian_complete_guide.webp"
tags: ["obsidian", "self-hosted", "Docker", "Pinggy", "ngrok"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IEkgU2VsZi1Ib3N0ZWQgT2JzaWRpYW4gU3luYyB3aXRoIERvY2tlciwgQ291Y2hEQiAmIFBpbmdneSBUdW5uZWwiLAogICJkZXNjcmlwdGlvbiI6ICJDb21wbGV0ZSBndWlkZSB0byBzZWxmLWhvc3RpbmcgT2JzaWRpYW4gc3luYyB1c2luZyBEb2NrZXIsIENvdWNoREIsIGFuZCBQaW5nZ3kgdHVubmVsLiBObyBwYWlkIE9ic2lkaWFuIFN5bmMsIGZ1bGwgY29udHJvbCwgYW5kIGFsbCB0aGUgZnVuIG9mIGJ1aWxkaW5nIHlvdXIgb3duIHN5bmMgc2VydmVyISIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3Rpbmdfb2JzaWRpYW4vc2VsZl9ob3N0aW5nX29ic2lkaWFuX2NvbXBsZXRlX2d1aWRlLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCBEb2NrZXIgb24geW91ciBzeXN0ZW0gKFdpbmRvd3MsIG1hY09TLCBvciBMaW51eCkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiU2V0IHVwIENvdWNoREIgdXNpbmcgRG9ja2VyIGNvbnRhaW5lciIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDb25maWd1cmUgQ291Y2hEQiBkYXRhYmFzZSBhbmQgdXNlciBhY2NvdW50cyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJTZXQgdXAgUGluZ2d5IHR1bm5lbCBmb3IgcmVtb3RlIGFjY2VzcyIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIGFuZCBjb25maWd1cmUgT2JzaWRpYW4gTGl2ZVN5bmMgcGx1Z2luIgogICAgfQogIF0KfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_obsidian/self_hosting_obsidian_complete_guide.webp" "Self-hosting Obsidian" >}}

Obsidian Sync costs $5/month ($4/month if you pay annually). You can replace it with a {{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}} container, the Self-hosted LiveSync community plugin, and a tunnel to reach the database from outside your home network. I run mine in Docker with {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} as the tunnel; total monthly cost is zero. This post walks through the setup, end to end, using Self-hosted LiveSync 1.0.35 (released October 5, 2026) and CouchDB 3.5.

LiveSync does most of the heavy lifting. It speaks CouchDB's replication protocol directly, so edits propagate in a second or two and conflicts get resolved on the client without manual merges. I've used it through large vault reorganizations and concurrent edits across desktop and mobile and haven't lost a note. The Docker side keeps the install identical on Windows, macOS, and Linux. Plan on 30 to 60 minutes start to finish. Back up your vault first, and turn off Obsidian Sync, iCloud or any other service that writes to the same vault before you connect LiveSync.

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
- Deno 2 (only to run LiveSync's CouchDB setup script once)
{{% /tldr %}}

## Why I Built My Own Sync Server

My vault is a few thousand notes - project docs, code snippets, research, journal entries, the usual mix. Putting all of that on someone else's servers started to feel like a single point of failure I hadn't thought hard enough about. The \$5/month wasn't really the issue; control was. Two annoying sync conflicts (and one lost edit) later, I went looking for an alternative.

What pushed me to self-host:

* **Privacy**: my vault has client work and personal notes I'd rather not park on someone else's servers.
* **Cost**: \$48/year isn't a lot, but the self-hosted option turned out to be better, not just cheaper.
* **Understanding**: setting it up taught me how CouchDB's replication actually works, which I'd been hand-waving past for years.
* **Reliability**: I own the uptime, the backups, and the recovery plan. No third party can change the terms on me.
* **Flexibility**: I can tweak any layer of the stack without waiting for someone to ship a feature.

I tried a couple of other approaches before settling on this one. Git-based sync (commit notes, push, pull) gets noisy fast and produces merge conflicts on mobile. Syncthing handles arbitrary files well but doesn't know what a note is, so partial syncs leave Obsidian in odd intermediate states. CouchDB plus LiveSync was the first combination that just behaved.

## What we're building
Four pieces, all open source except Pinggy:

- **{{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}}** is the database. Its replication protocol is what makes the whole thing work; nodes and CouchDB-compatible clients (like LiveSync) reconcile by trading document revisions, not by diffing files.
- **Docker** keeps the install reproducible across Windows, macOS, and Linux. The CouchDB side is one `docker-compose.yml`.
- **Self-hosted LiveSync** is the Obsidian community plugin that talks to CouchDB. It watches the vault for changes and pushes them upstream within a second or two.
- **{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}** is an SSH-based tunnel that gives the CouchDB container a public HTTPS URL. Saves you from router port-forwarding and dynamic-DNS plumbing.

## Prerequisites and system requirements

System requirements are whatever Docker needs to run. CouchDB itself is light on resources, so a modest box - old laptop, cheap VPS, home server, Raspberry Pi - is plenty.

You'll need **Docker** on whichever machine will host CouchDB. Docker Desktop is the easiest install on Windows and macOS; on Linux, Docker Engine from the official repository is the cleanest path. If you already have Docker running for other projects, you're set.

You'll also need **Obsidian** on every device you want to sync. LiveSync works wherever Obsidian works: Windows, macOS, Linux, iOS, and Android.
## Step 1: Installing Docker

Docker is the foundation of our setup, providing containerization that makes deployment consistent across different operating systems. The installation process varies by platform, so I'll cover all three major operating systems.

### Windows Installation

Download Docker Desktop from {{< link href="https://www.docker.com/products/docker-desktop/" >}}docker.com{{< /link >}} and run the installer. You'll need Windows 10 64-bit Pro, Enterprise, or Education (Build 19041 or higher), or Windows 11. The installer will enable WSL 2 if it's not already active.

```powershell
# Verify Docker installation
docker --version
docker compose version
```

After installation, Docker Desktop should show a green status indicator in your system tray. If you encounter issues, make sure virtualization is enabled in your BIOS settings.

Note: the legacy `docker-compose` (V1, with the hyphen) binary was retired in 2023. Compose V2 ships as a Docker CLI plugin and is invoked as `docker compose` (with a space). Docker Desktop installs it by default.



### macOS Installation

Download Docker Desktop for Mac from the official website. The installer works on both Intel and Apple Silicon Macs running macOS 10.15 or newer.

```bash
# Verify Docker installation
docker --version
docker compose version
```

### Linux Installation

For Ubuntu and Debian, use Docker's official apt repository for the most up-to-date version:

```bash
# Add Docker's official GPG key
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add your user to docker group (requires logout/login)
sudo usermod -aG docker $USER

# Verify installation
docker --version
docker compose version
```

These are the commands from Docker's Ubuntu install page (22.04, 24.04 and 26.04 are supported). On Debian, swap `ubuntu` for `debian` in the URLs.

## Step 2: Setting Up CouchDB with Docker

Now we'll create our {{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}} instance using Docker. CouchDB is perfect for this use case because it's designed for replication and handles the complex synchronization logic that makes LiveSync work so well.

### Creating the Docker Compose Configuration

Create a new directory for your Obsidian sync server and set up the Docker Compose configuration:

**Windows (PowerShell):**
```powershell
# Create project directory
mkdir obsidian-sync
cd obsidian-sync
mkdir couchdb-data, couchdb-etc

# Create docker-compose.yml
New-Item -ItemType File -Name "docker-compose.yml"
```

**macOS/Linux:**
```bash
# Create project directory
mkdir -p obsidian-sync/couchdb-data obsidian-sync/couchdb-etc
cd obsidian-sync

# Create docker-compose.yml
touch docker-compose.yml
```

Now edit the `docker-compose.yml` file with your preferred text editor and add the following configuration:

```yaml
services:
  couchdb:
    image: couchdb:3.5
    container_name: couchdb-for-ols
    user: 5984:5984
    environment:
      - COUCHDB_USER=obsidian_admin #Please change as you like.
      - COUCHDB_PASSWORD=change-me-to-a-long-random-password #Please change as you like.
    volumes:
      - ./couchdb-data:/opt/couchdb/data
      - ./couchdb-etc:/opt/couchdb/etc/local.d
    ports:
      - 5984:5984
    restart: unless-stopped
```

The top-level `version:` field that older guides put at the top of the file is no longer required and Compose V2 prints a deprecation warning if you include it. The Compose schema is inferred from the CLI version now.

Replace the placeholder password with a long random one (a password manager's generator is fine). This is your CouchDB admin password, and once the tunnel is up this database is reachable from the internet, so a short or guessable password is the main way this setup gets hurt.

I pin the image to `couchdb:3.5` so a future major release doesn't change under you on a restart. LiveSync's own docs use `couchdb:latest`; either works today (Docker Hub's `latest` is 3.5.2.1 as of October 2026). If the container exits straight away, check the ownership of `couchdb-data` and `couchdb-etc` first. LiveSync's docs say CouchDB runs as uid 5984 and recommend this on a Linux host:

```bash
sudo chown -R 5984:5984 ./couchdb-data ./couchdb-etc
```

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


After a few moments, CouchDB should be running and accessible at `http://localhost:5984`. Open the URL in your browser to verify - you should see a JSON response welcoming you to CouchDB.

{{< image "self_hosting_obsidian/couchdb_running_in_local_host_5984.webp" "CouchDB running at localhost:5984" >}}

## Step 3: Initializing CouchDB for LiveSync

A fresh CouchDB container is not ready for LiveSync. The plugin needs the server configured for it (single-node setup, authentication, CORS for Obsidian's requests) and a database created. Older versions of this guide did that by hand in the Fauxton admin page, but LiveSync now ships a provisioning script that does it in one go, so use that instead.

First check that CouchDB answers. Open `http://localhost:5984/_utils` and log in with the admin username and password from your compose file.

{{< image "self_hosting_obsidian/login_couch_db.webp" "Log in to CouchDB Fauxton" >}}

The script runs on Deno 2. Install it if you don't have it:

```bash
# macOS / Linux
curl -fsSL https://deno.land/install.sh | sh
# Windows PowerShell:  irm https://deno.land/install.ps1 | iex
# or: brew install deno / winget install DenoLand.Deno

# confirm it works (open a new terminal first if the installer asks you to)
deno --version
```

Then run the script with your CouchDB admin credentials. `obsidiannotes` is the database name LiveSync's docs use, and you can pick another:

```bash
export hostname=http://localhost:5984
export username=obsidian_admin
export password='your-couchdb-admin-password'
export database=obsidiannotes
curl -s https://raw.githubusercontent.com/vrtmrz/obsidian-livesync/main/utils/couchdb/couchdb-init.sh | bash
```

It should end with `CouchDB provisioning completed.` If it prints `ERROR: Hostname missing`, pass the three variables inline in front of `bash` instead, as shown in the {{< link href="https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/setup_own_server.md" >}}LiveSync server setup guide{{< /link >}}.

The script does not create a separate non-admin account, so LiveSync will connect with the admin credentials. That's fine for a personal server, but it is one more reason to keep the password long.

## Step 4: Setting Up Pinggy Tunnel for Remote Access

Now that CouchDB is running locally, we need a way to access it from outside your home network. Traditional approaches like port forwarding or dynamic DNS are tedious to configure and come with security risks. Instead, we'll use {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} to create an encrypted tunnel that securely exposes your CouchDB instance to the internet.

What makes {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} ideal for this use case is that there's nothing to install it works entirely over SSH, which comes pre-installed on every modern operating system. You run a single command, and Pinggy gives you a public HTTPS URL that routes traffic directly to your local CouchDB server.

**Note:** The command below works without an account on the free tier, which is fine for testing. Free tunnels last 60 minutes and get a new random URL each time you reconnect, so for a sync server you'll want {{< link href="https://pinggy.io/#prices" >}}Pinggy Pro{{< /link >}} (a persistent subdomain and no timeout).

### Creating the Tunnel

Start a Pinggy tunnel to expose your CouchDB instance securely with just one command:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:5984 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5984 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5984 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\"}}}"
{{</ ssh_command >}}

That's it! Pinggy will provide you with a public HTTPS URL (on the free tier, something like `https://abc123.run.pinggy-free.link`) that securely tunnels to your local CouchDB instance. This URL will work from anywhere on the internet, allowing you to sync your Obsidian notes from any device.

{{< image "self_hosting_obsidian/run_the_pinggy_tunnel.webp" "Run the Pinggy tunnel" >}}

The tunnel will display something like this:
```
You can access local server via following URL(s):
https://abc123.run.pinggy-free.link
```

Copy this URL - you'll need it for configuring Obsidian LiveSync. Obsidian on iOS and Android only talks to HTTPS servers with a valid certificate, which is the other reason to use a tunnel (or a reverse proxy with a real domain) instead of plain `http://` on your LAN.

If you'd rather start the tunnel from a script or a long-running service (instead of leaving an SSH session open), Pinggy now ships official {{< link href="https://pinggy.io/docs/" >}}Node.js and Python SDKs{{< /link >}}. Both wrap the same protocol the SSH command above uses, so you can spin the tunnel up and tear it down programmatically from inside your own automation. Useful if you want the tunnel to come up alongside the CouchDB container on boot rather than as a separate manual step.

## Step 5: Installing Obsidian and Configuring LiveSync

With the database and tunnel running, the rest is on the Obsidian side: install the app, enable the LiveSync plugin, and point it at the tunnel URL.

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

### Configuring LiveSync on the first device

LiveSync 1.0.x walks you through setup with an onboarding dialog rather than the old Settings > Setup tab. The flow below follows the {{< link href="https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/quick_setup.md" >}}plugin's quick setup guide{{< /link >}}; the screenshots further down are from an earlier version of the plugin, so button labels may differ slightly.

1. After enabling the plugin, select the `Welcome to Self-hosted LiveSync` notice to open onboarding.
2. Choose `I am setting this up for the first time` and confirm.
3. On `Connection Method`, choose `Configure a remote manually`, then `Proceed with manual configuration`.
4. On `End-to-End Encryption`, turn it on and enter a strong vault passphrase. Store it somewhere safe: without it the data on the server can't be read, and every other device needs the same passphrase.
5. On `Choose a synchronisation remote`, select `CouchDB`, then fill in the connection details:
   - **URL**: your full Pinggy URL, including `https://` and with no extra path (e.g. `https://abc123.run.pinggy-free.link`)
   - **Username** and **Password**: your CouchDB admin credentials from `docker-compose.yml`
   - **Database name**: `obsidiannotes` (or whatever you used in Step 3)
6. Select `Create or connect to database and continue`. This test has to pass before onboarding goes on.
7. Review `Setup Complete: Preparing to Initialise Server` and select `Restart and Initialise Server`. Read the overwrite warning, and only continue with `I Understand, Overwrite Server` if this device is meant to be the source of truth and you have a backup.
8. If you see `No Synchronisation Settings Found` on a new database, choose `Use this device's settings`.
9. Acknowledge that optional features are disabled, and keep Obsidian open until the progress indicators clear.

{{< image "self_hosting_obsidian/remote_configuration_server_url.webp" "LiveSync server URL configuration" >}}

Create a test note and let it upload before you add a second device.

**Configuration notes:**
- Use the full Pinggy URL including `https://`
- Don't add `/obsidiannotes` or any other path to the URL
- Make sure the Pinggy tunnel is running before you run the connection test

## Step 6: Adding Additional Devices

One of the best features of this setup is how easy it is to add new devices to your sync network.

### Generating a Setup URI on the first device

Once the test note has synced, generate a Setup URI from this working device. It captures the settings this device is actually using, including the encryption setup.

1. Open the Obsidian command palette
2. Run `Self-hosted LiveSync: Copy settings as a new Setup URI`
3. Enter a passphrase to protect the URI and select `OK`
4. Copy the result. It looks like `obsidian://setuplivesync?settings=...`

**Security note**: the URI contains your credentials and vault settings. It is encrypted, but store it and its passphrase in a password manager, in separate places, and don't send both over the same channel.

{{< image "self_hosting_obsidian/copy_the_setup_url.webp" "Copy the setup URI" >}}

### Adding another device

On each new device, start with a new or backed-up vault:

1. Install Obsidian and the Self-hosted LiveSync plugin
2. Open onboarding from the `Welcome to Self-hosted LiveSync` notice
3. Choose `I am adding a device to an existing synchronisation setup`
4. On `Device Setup Method`, choose `Use a Setup URI (Recommended)`
5. Paste the Setup URI, enter its passphrase, and select `Test Settings and Continue`
6. Select `Restart and Fetch Data`. For an empty vault choose `Overwrite all with remote files`. If the vault already has notes, stop and read the plugin's {{< link href="https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/tips/fast-setup.md" >}}Fast Setup guide{{< /link >}} first, because the wrong choice can overwrite local work.

{{< image "self_hosting_obsidian/connect_with_setup_url.webp" "Connect with setup URL" >}}
{{< image "self_hosting_obsidian/enter_you_encrpt_passphrase.webp" "Enter your encrypt passphrase" >}}

When retrieval finishes, the test note from the first device should appear unchanged. Edit a note on the new device to confirm sync works in both directions.

{{< image "self_hosting_obsidian/data_sync_between_two_device.webp" "Data sync between two devices" >}}

## Wrapping up
What you end up with: a CouchDB container, a Pinggy tunnel, and the LiveSync plugin keeping your vault in sync across whatever devices you've got. Day-to-day maintenance is mostly leaving it alone; the container's restart policy handles reboots.

A few things worth flagging for anyone setting this up:

- The tunnel URL needs to stay reachable. The free Pinggy tier disconnects after 60 minutes and gives you a new URL when you reconnect, so for a permanent setup, run it on a Pro plan with a persistent URL or a custom domain. Otherwise you'll be updating LiveSync's settings every time the tunnel restarts.
- Back up the CouchDB data directory. The whole point of self-hosting is owning the failure mode too. Snapshot `./couchdb-data` to whatever you already trust for backups.
- LiveSync's end-to-end encryption is worth enabling even though the tunnel is already HTTPS. It means the CouchDB instance never sees plaintext notes, which is the right default once the data leaves your machine at all.

## Conclusion

You now have a CouchDB container behind a Pinggy tunnel, with LiveSync keeping your vault in step across devices and your notes encrypted before they leave the machine. Before you trust it with the only copy of your notes, run three quick checks. Reboot the host, run `docker compose ps` in the `obsidian-sync` folder to confirm CouchDB came back up, and if you're on the free tunnel, restart it and update the URL in LiveSync, since it will have changed. Then edit a note on each device and confirm the change shows up on the other one. Finally, copy `./couchdb-data` somewhere else and write down your vault encryption passphrase and the Setup URI passphrase, because without the vault passphrase the synced data can't be read and no database backup will fix that. Once those pass, add your phone using a Setup URI generated from the first device, and consider a Pinggy Pro persistent subdomain so the sync address stops changing.
