---
title: "Self-Host TREK: The Open-Source Travel Planner Taking GitHub by Storm"
description: "TREK is a self-hosted, real-time collaborative travel planner that hit GitHub trending this week. Learn how to run it with Docker and share it online with Pinggy so your whole group can plan trips together."
date: 2026-06-25T10:00:00+05:30
lastmod: 2026-06-25T10:00:00+05:30
draft: false
og_image: "images/self_host_trek_travel_planner/trek_banner.png"
tags: ["self-hosted", "travel", "TREK", "docker", "pinggy", "open-source", "collaboration", "trip planning"]
categories: ["Self-Hosting", "How-To", "Open Source"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBUUkVLIFRyYXZlbCBQbGFubmVyIGFuZCBTaGFyZSBJdCBPbmxpbmUgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gcnVubmluZyB0aGUgVFJFSyBzZWxmLWhvc3RlZCB0cmF2ZWwgcGxhbm5lciB3aXRoIERvY2tlciBhbmQgZXhwb3NpbmcgaXQgcHVibGljbHkgdmlhIFBpbmdneSB0dW5uZWwgZm9yIHJlYWwtdGltZSBjb2xsYWJvcmF0aXZlIHRyaXAgcGxhbm5pbmcuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgRG9ja2VyIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCBEb2NrZXIgb24geW91ciBzeXN0ZW0gKFdpbmRvd3MsIG1hY09TLCBvciBMaW51eCkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUnVuIFRSRUsgd2l0aCBEb2NrZXIiLAogICAgICAidGV4dCI6ICJSdW4gVFJFSyB1c2luZyBEb2NrZXI6IEVOQ1JZUFRJT05fS0VZPSQob3BlbnNzbCByYW5kIC1oZXggMzIpIGRvY2tlciBydW4gLWQgLXAgMzAwMDozMDAwIC1lIEVOQ1JZUFRJT05fS0VZPSRFTkNSWVBUSU9OX0tFWSAtdiAuL2RhdGE6L2FwcC9kYXRhIC12IC4vdXBsb2FkczovYXBwL3VwbG9hZHMgbWF1cmljZWJvZS90cmVrIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkFjY2VzcyBUUkVLIGxvY2FsbHkiLAogICAgICAidGV4dCI6ICJPcGVuIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCBhbmQgY3JlYXRlIHlvdXIgYWRtaW4gYWNjb3VudCIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDcmVhdGUgYSBQaW5nZ3kgdHVubmVsIiwKICAgICAgInRleHQiOiAiUnVuIHRoZSBQaW5nZ3kgdHVubmVsIGNvbW1hbmQ6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDozMDAwIGZyZWUucGluZ2d5LmlvIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNoYXJlIHRoZSBwdWJsaWMgVVJMIHdpdGggY29sbGFib3JhdG9ycyIsCiAgICAgICJ0ZXh0IjogIlNoYXJlIHRoZSBQaW5nZ3ktZ2VuZXJhdGVkIEhUVFBTIFVSTCB3aXRoIHRyaXAgY29sbGFib3JhdG9ycyB0byBwbGFuIHRyaXBzIHRvZ2V0aGVyIGluIHJlYWwgdGltZSIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}To self-host TREK travel planner and share it online with Pinggy - run `ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d -p 3000:3000 -e ENCRYPTION_KEY=$ENCRYPTION_KEY -v ./data:/app/data -v ./uploads:/app/uploads mauriceboe/trek` (starts on port 3000), then in a new terminal run `ssh -p 443 -R0:localhost:3000 free.pinggy.io` to get a public HTTPS URL to share with trip collaborators.{{< /llm-context >}}

{{< image "self_host_trek_travel_planner/trek_banner.png" "Self-Host TREK Travel Planner with Pinggy" >}}

A self-hosted travel planner hit #1 on GitHub Trending this week and it's surprisingly good. <a href="https://github.com/mauriceboe/TREK" target="_blank">TREK</a> is a full-featured, open-source trip planning app with real-time collaboration, interactive maps, budget tracking, and PWA support - all running from a single Docker container.

The catch most people run into: you start it on your laptop, want to plan a trip with friends, and realize you can't just paste `http://localhost:3000` into a group chat. This guide covers both parts - running TREK and getting it online in under five minutes with Pinggy.

{{% tldr %}}
**What you'll build:**
- TREK self-hosted travel planner running on your machine via Docker
- Public HTTPS URL via Pinggy so collaborators can join in real time
- No paid hosting, no subscriptions, full data ownership

**Quick setup:**
1. Start TREK:
   ```bash
   ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d \
     -p 3000:3000 \
     -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
     -v ./data:/app/data \
     -v ./uploads:/app/uploads \
     mauriceboe/trek
   ```
2. Open `http://localhost:3000` and create your admin account
3. Expose it with Pinggy:
   ```bash
   ssh -p 443 -R0:localhost:3000 free.pinggy.io
   ```
4. Share the `https://xxxx.a.pinggy.link` URL with your travel group

**Resources:**
- <a href="https://github.com/mauriceboe/TREK" target="_blank">TREK on GitHub</a>
- <a href="https://github.com/mauriceboe/TREK/wiki" target="_blank">TREK Wiki</a>
- <a href="https://pinggy.io" target="_blank">Pinggy</a> for tunneling
{{% /tldr %}}

## What is TREK?

<a href="https://github.com/mauriceboe/TREK" target="_blank">TREK</a> is an AGPL v3-licensed travel planner built with a NestJS backend, React 19 frontend, and SQLite database - packaged as a single Docker image. It crossed 7,200 GitHub stars this week and has been climbing the trending chart fast.

The feature set is genuinely impressive for a one-person open-source project:

- **Drag-and-drop itinerary builder** - organize places day by day, reorder with a tap
- **Interactive maps** - Leaflet by default, Mapbox GL with 3D support if you add a key; place search works with both Google Places and OpenStreetMap (no API key required for OSM)
- **Real-time WebSocket sync** - changes from one collaborator appear instantly for everyone else
- **Budget tracking** - multi-currency, expense splitting, per-person summaries
- **Packing lists** - templates, progress tracking, shareable within the trip
- **Reservation tracking** - flights, accommodation, restaurants with status (confirmed, pending, open)
- **16-day weather forecasts** via Open-Meteo for each destination
- **PDF export** of the full trip plan
- **PWA** - install to iOS or Android home screen with offline support
- **SSO** via OIDC (Google, Apple, Authentik, Keycloak) and 2FA/passkeys
- **MCP server** built in - Claude and other AI clients can query and modify your trips via 150+ tools

The main reason to self-host over using a SaaS trip planner: your itinerary data stays on your hardware. No per-seat pricing when the group grows, no vendor deciding to sunset the free tier, no third party with access to where you'll be and when.

## Prerequisites

You need:
- **Docker** installed (any recent version)
- **SSH** client available (comes with macOS/Linux, included in Windows 10+ via OpenSSH)

If you're on Linux without Docker yet:

```bash
sudo apt update && sudo apt install -y docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
# log out and back in for the group change to take effect
```

Windows and macOS users: install <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker Desktop</a>.

## Step 1: Run TREK with Docker

The quickest way to get TREK running is a single command. TREK requires an encryption key for data at rest, so generate one on the fly:

```bash
ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d \
  --name trek \
  -p 3000:3000 \
  -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
  -v ./data:/app/data \
  -v ./uploads:/app/uploads \
  --restart unless-stopped \
  mauriceboe/trek
```

What each flag does:
- `ENCRYPTION_KEY=$(openssl rand -hex 32)` - generates a 32-byte random key and passes it in
- `-p 3000:3000` - exposes TREK on your host's port 3000
- `-v ./data:/app/data` - persists the SQLite database locally
- `-v ./uploads:/app/uploads` - persists uploaded documents and attachments
- `--restart unless-stopped` - survives reboots

One important caveat: don't mount a volume at `/app` itself - that hides the application code inside the image and the container will fail to start. Only mount the two subdirectories shown above.

**Check that it started:**
```bash
docker logs trek
```

On first boot, TREK prints the auto-generated admin credentials to the log. Copy them before you do anything else.

## Step 2: First Login and Initial Setup

Open `http://localhost:3000` in your browser. Log in with the credentials from the Docker logs, then immediately change the admin password in the profile settings.

From the admin panel you can:
- Enable or disable add-ons (Collab for shared chat/notes/polls, Journey for a travel journal, Atlas for a world map with visit stats, Vacay for personal vacation day tracking)
- Configure SSO if you have Google OAuth credentials set up
- Set the `APP_URL` environment variable to your public URL once you have one - this is required for invite links and email notifications to contain the right address

For a group trip you'll want to invite collaborators. TREK supports two approaches: invite links (optional expiry, role-based) and OIDC SSO if your group all has Google accounts. For a quick setup, invite links work fine.

## Step 3: Expose TREK Online with Pinggy

Right now TREK is only accessible at `http://localhost:3000`. That's fine for solo planning, but if you want your group to collaborate in real time you need a public URL.

Pinggy creates an SSH reverse tunnel that gives you an HTTPS URL pointing at your local port. Open a new terminal:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

You'll see output like this:

```
You are not authenticated. Please authenticate using the Pinggy link below:
http://dashboard.pinggy.io/?t=xxxxxxxx

  .......................
  URLs:
  https://rtn7x.a.pinggy.link
  http://rtn7x.a.pinggy.link
```

The `https://rtn7x.a.pinggy.link` URL is now publicly accessible and proxied to your local TREK instance. Pinggy handles TLS termination, so anyone you share this link with gets a valid HTTPS connection.

**WebSocket support**: TREK uses WebSocket connections on the `/ws` path for real-time sync. Pinggy passes WebSocket upgrades through transparently - no extra configuration needed.

Once you have the URL, go back to your TREK admin panel and set `APP_URL` to the Pinggy URL so invite links and email notifications work correctly. You can set it as an environment variable when starting the container:

```bash
ENCRYPTION_KEY=$(openssl rand -hex 32) docker run -d \
  --name trek \
  -p 3000:3000 \
  -e ENCRYPTION_KEY=$ENCRYPTION_KEY \
  -e APP_URL=https://rtn7x.a.pinggy.link \
  -v ./data:/app/data \
  -v ./uploads:/app/uploads \
  --restart unless-stopped \
  mauriceboe/trek
```

## Step 4: Invite Collaborators

With your Pinggy URL in hand:

1. In TREK, open your trip and go to **Share**
2. Generate an invite link - set an expiry if you want (e.g. 7 days) and assign a role (viewer or editor)
3. Paste the invite link in your group chat

Your collaborators open the link, register or log in, and they're in. Changes one person makes appear for everyone else within a second over WebSocket. You can see who's currently online via the avatar stack in the trip header.

## Step 5: Install as a PWA on Mobile

TREK ships as a Progressive Web App. On HTTPS (which Pinggy provides), collaborators can install it to their phone's home screen:

- **iOS**: tap the Share button in Safari, then "Add to Home Screen"
- **Android**: tap the browser menu, then "Install app" or "Add to Home Screen"

This gives the full app experience with offline support for previously-loaded itinerary data - useful when you're on the ground in a city with spotty connectivity.

## Docker Compose Setup (Optional)

If you prefer Docker Compose for easier management:

```yaml
services:
  trek:
    image: mauriceboe/trek:latest
    container_name: trek
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      ENCRYPTION_KEY: your-key-here   # replace with output of: openssl rand -hex 32
      APP_URL: https://your-pinggy-url.a.pinggy.link
      TZ: America/New_York
    volumes:
      - ./data:/app/data
      - ./uploads:/app/uploads
    restart: unless-stopped
```

Save as `docker-compose.yml` and run:

```bash
docker compose up -d
```

Then start your Pinggy tunnel separately in another terminal as before.

## Persistent Pinggy URL

The free Pinggy tunnel generates a random subdomain each session. If you want the same URL across restarts - useful for setting `APP_URL` once and leaving it - <a href="https://pinggy.io/#prices" target="_blank">Pinggy Pro</a> lets you claim a fixed subdomain. You'd update the command to:

```bash
ssh -p 443 -R0:localhost:3000 yourname@free.pinggy.io
```

after authenticating at `dashboard.pinggy.io` and reserving a subdomain.

## What TREK Doesn't Do (Yet)

A few things worth knowing before you commit:

- **No native mobile apps** - it's PWA-only. The experience is good on mobile, but you won't find it in the App Store.
- **SQLite only in single-node setup** - fine for a group of friends, not for running a multi-instance cluster. TREK doesn't support PostgreSQL yet.
- **AGPL v3 licensing** - if you modify the code and offer it as a service to others, you must open-source those modifications. For personal or internal company use, you're fine.
- **Pinggy URL changes on restart** - on the free tier, you get a new URL each session. Either keep the SSH connection alive or pay for a fixed subdomain if uptime matters.

## Wrapping Up

TREK is one of those projects that makes self-hosting feel worthwhile. The Docker setup is genuinely 30 seconds, the feature set punches well above what most SaaS trip planners offer at their paid tier, and the real-time collaboration actually works. The Pinggy tunnel bridges the one gap a local install has: getting the URL out to your group.

If you're planning a trip with friends and want to stop fighting over a shared Google Doc or paying for another subscription, give this combination a try. Your itinerary data stays on your machine, and your group gets a proper web app with live sync, maps, budgets, and packing lists.

Sources:
- <a href="https://github.com/mauriceboe/TREK" target="_blank">TREK GitHub Repository</a>
- <a href="https://github.com/mauriceboe/TREK/wiki" target="_blank">TREK Wiki - Installation and Configuration</a>
- <a href="https://pinggy.io" target="_blank">Pinggy - Instant Public URLs for Localhost</a>
