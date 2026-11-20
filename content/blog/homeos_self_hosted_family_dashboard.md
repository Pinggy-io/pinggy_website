---
title: "HomeOS: A Self-Hosted Family Dashboard for the Kitchen Touchscreen"
description: "HomeOS is an open-source, self-hosted dashboard for a kitchen touchscreen that manages chores, shopping lists, notes, prayer times, and birthdays. Here's how it works, and how to reach it from your phone with Pinggy."
date: 2026-09-02T16:30:00+05:30
draft: false
tags: ["HomeOS", "self-hosted", "Docker", "remote access", "Pinggy"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/homeos_self_hosted_family_dashboard/homeos_self_hosted_family_dashboard_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBIb21lT1MgYW5kIFJlYWNoIEl0IFJlbW90ZWx5IHdpdGggUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIHNlbGYtaG9zdGluZyBIb21lT1MsIGFuIG9wZW4tc291cmNlIGZhbWlseSBkYXNoYm9hcmQgZm9yIGEga2l0Y2hlbiB0b3VjaHNjcmVlbiwgd2l0aCBEb2NrZXIgYW5kIGEgUGluZ2d5IHR1bm5lbCBmb3IgcmVtb3RlIGFjY2Vzcy4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvaG9tZW9zX3NlbGZfaG9zdGVkX2ZhbWlseV9kYXNoYm9hcmQvaG9tZW9zX3NlbGZfaG9zdGVkX2ZhbWlseV9kYXNoYm9hcmRfYmFubmVyLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsbCBEb2NrZXIiLAogICAgICAidGV4dCI6ICJJbnN0YWxsIERvY2tlciBhbmQgRG9ja2VyIENvbXBvc2Ugb24gYSBMaW51eCBtYWNoaW5lLCBtaW5pIFBDLCBvciBSYXNwYmVycnkgUGkgdGhhdCBjYW4gc3RheSBwb3dlcmVkIG9uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbG9uZSBIb21lT1MiLAogICAgICAidGV4dCI6ICJDbG9uZSB0aGUgcmVwb3NpdG9yeSB3aXRoIGdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vZGFuaWFsa2hpbGppL0hvbWVPUy5naXQgYW5kIGNkIGludG8gaXQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbmZpZ3VyZSBsb2NhdGlvbiIsCiAgICAgICJ0ZXh0IjogIkNvcHkgLmVudi5leGFtcGxlIHRvIC5lbnYgYW5kIHNldCBXRUFUSEVSX0xBVElUVURFIGFuZCBXRUFUSEVSX0xPTkdJVFVERSB0byB5b3VyIGNpdHkncyBjb29yZGluYXRlcyBmb3Igd2VhdGhlciBhbmQgcHJheWVyIHRpbWVzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgc3RhY2siLAogICAgICAidGV4dCI6ICJSdW4gZG9ja2VyIGNvbXBvc2UgdXAgLS1idWlsZCAtZCB0byBidWlsZCBhbmQgc3RhcnQgdGhlIGZyb250ZW5kIGFuZCBiYWNrZW5kIGNvbnRhaW5lcnMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk9wZW4gdGhlIGRhc2hib2FyZCIsCiAgICAgICJ0ZXh0IjogIlZpc2l0IGh0dHA6Ly9sb2NhbGhvc3QgaW4gYSBicm93c2VyIG9uIHRoZSBzYW1lIG1hY2hpbmUgb3IgbmV0d29yayB0byBzZWUgdGhlIGRhc2hib2FyZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIGl0IHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiUnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MCAtdCBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgcmVhY2hlcyB0aGUgZGFzaGJvYXJkIGZyb20gb3V0c2lkZSB5b3VyIGhvbWUgbmV0d29yay4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "homeos_self_hosted_family_dashboard/homeos_self_hosted_family_dashboard_banner.webp" "HomeOS self-hosted family dashboard running on a kitchen touchscreen, showing weather, prayer times, calendar, tasks, and shopping list" >}}

Every household eventually invents its own version of the same broken system: a shared to-do app nobody but one parent opens, a group chat where chores get "assigned" and immediately forgotten, or a whiteboard on the fridge that only gets updated when someone is annoyed enough to grab a marker. {{< link href="https://github.com/danialkhilji/HomeOS" >}}HomeOS{{< /link >}} is a small open-source project that tries to fix this the boring, effective way: put the household's stuff on a screen mounted where everyone already stands several times a day, and make it nobody's personal app.

It is not a smart-home platform. There is no device control, no sensors, no automations triggering lights. It is a single-purpose dashboard: chores, a shopping list, shared notes, birthdays, a calendar, and prayer times, all running on a Linux box you own, displayed on a cheap touchscreen bolted to a wall or propped up on a counter.

{{% tldr %}}
**What is HomeOS?**
<a href="https://github.com/danialkhilji/HomeOS" target="_blank">HomeOS</a> is an open-source, self-hosted family dashboard for a kitchen touchscreen. It handles chores, shopping lists, notes, birthdays, a calendar, and prayer times, and it deliberately has no smart-home ambitions.

**Stack:**
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Python 3.12, FastAPI, SQLAlchemy (async), SQLite
- Ships as two Docker containers (nginx-served frontend on port 80, FastAPI backend on port 8000)

**Quick setup:**
```bash
git clone https://github.com/danialkhilji/HomeOS.git
cd HomeOS
cp .env.example .env
docker compose up --build -d
```
Open at `http://localhost`

**Reach it from outside your home network with Pinggy:**
```bash
ssh -p 443 -R0:localhost:80 -t free.pinggy.io
```

**Resources:**
- <a href="https://github.com/danialkhilji/HomeOS" target="_blank">HomeOS on GitHub</a>
- <a href="https://pinggy.io" target="_blank">Pinggy</a> for instant public tunnels
{{% /tldr %}}

## What's actually on the screen

The dashboard is organized around five sections, reachable from a fixed bottom nav bar built for a finger, not a mouse: Dashboard, Tasks, Shopping, Notes, and Settings. I spun it up locally to see how the pieces fit together, and it's a surprisingly complete little household console for something built by one person.

The dashboard view stacks a weather card, a monthly calendar, the day's five prayer times, and a live task list into one screen. Weather comes from {{< link href="https://open-meteo.com/" >}}Open-Meteo{{< /link >}}, which needs nothing more than latitude and longitude, no API key, no account. Prayer times come from the {{< link href="https://aladhan.com/prayer-times-api" >}}Aladhan API{{< /link >}}, calculated with the Moonsighting Committee Worldwide method and Hanafi Asr timing, tuned in the changelog to match a specific mosque's posted schedule down to a 24-minute Isha offset. That's the kind of detail that only shows up when someone is actually using the thing they built, not demoing it.

{{< image "homeos_self_hosted_family_dashboard/homeos_tasks_page.webp" "HomeOS Tasks page showing chores assigned to family members with daily and weekly recurrence badges" >}}

Tasks are where the project earns its "family operating system" name. Each task can be assigned to a member, marked recurring (daily, weekly, or monthly), and reset automatically. There's also a rotation endpoint that isn't just decorative: every Monday at midnight, a scheduled job walks every assigned task and bumps it to the next member in line, so "take out the trash" doesn't quietly become one person's permanent job by default. It's a small mechanism, but it's the sort of fairness logic that a generic to-do app never bothers to build because it's specific to how chores actually get contested in a household.

{{< image "homeos_self_hosted_family_dashboard/homeos_shopping_list.webp" "HomeOS shopping list with quick-add buttons for common grocery items like milk, eggs, and bread" >}}

The shopping list adds quick-add buttons for common items (milk, eggs, bread, produce) so a parent standing at the fridge can tap instead of type, and a toggle to show or hide already-purchased items so the list doesn't just grow forever. Notes are unstructured, shared, and attributable to whoever wrote them. Birthdays sit inside the calendar rather than as a separate list, so an upcoming birthday shows up the same way a task deadline does. None of this is novel individually, but bundling it into one SQLite-backed FastAPI service instead of gluing together three SaaS apps is the actual point.

## Setting it up

The project ships a `docker-compose.yml` that builds two images: a FastAPI backend on port 8000 with a health check and a SQLite volume, and an nginx-served frontend on port 80 that depends on the backend passing that health check before it starts. Getting from clone to running dashboard is genuinely three commands:

```bash
git clone https://github.com/danialkhilji/HomeOS.git
cd HomeOS
cp .env.example .env
```

Open `.env` and set your coordinates, they drive both the weather card and the prayer times:

```bash
WEATHER_LATITUDE=40.7128
WEATHER_LONGITUDE=-74.0060
```

Then bring the stack up:

```bash
docker compose up --build -d
```

Docker builds the Python and Node images, wires up the SQLite volume, and runs Alembic migrations on first boot. Once both containers report healthy, `http://localhost` serves the dashboard. On the intended hardware, that's a Linux mini PC sitting somewhere out of the way with an old touchscreen or tablet pointed at it over the local WiFi.

For development, the same app also runs without Docker at all, a FastAPI dev server on `:8000` and a Vite dev server on `:5173` that proxies `/api` calls straight to the backend, which is how I actually ran it while writing this. Same app, same SQLite file, just without the container layer.

## The dashboard has no login screen, and that's on purpose

Here's a detail worth calling out explicitly, because it changes how you should think about exposing this thing: HomeOS has no authentication. No login page, no accounts, no sessions. Every API route is open to whatever can reach it, and the CORS policy in the shipped `docker-compose.yml` is wide open (`CORS_ORIGINS=["*"]`). That's a deliberate, reasonable choice for a kiosk that only your family's own devices can reach on your own WiFi. Nobody wants to type a password to check the shopping list. But it means the moment you start thinking about reaching this dashboard from outside your house, you're also thinking about who else could reach it.

The project's own documentation gets this right and points you at {{< link href="https://tailscale.com/" >}}Tailscale{{< /link >}}: install it on the Linux box, install it on your phone, sign into the same account on both, and you can hit the dashboard's private Tailscale IP from anywhere without opening a port. It's a solid, secure answer, and if you're already running Tailscale for other devices, use it.

## A lighter option for occasional access

Tailscale is the right call if you want permanent, always-on access from your own devices. But it asks for a client install and a sign-in on every device that needs access, which is friction the moment you just want to show your shopping list to a partner's phone that isn't enrolled, or check tonight's chore rotation from a friend's laptop while you're both out. For that kind of occasional, one-off access, a {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} tunnel gets you a shareable HTTPS link with a single SSH command and nothing to install on the machine doing the viewing:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:80 -t free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:80 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:80 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:80 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:80 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:80 -t free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:80 -t free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:80 -t free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:80 -t free.pinggy.io\"}}}"
{{</ ssh_command >}}

Run that on the same machine running `docker compose`, and Pinggy prints back a public URL like `https://randomstring.a.pinggy.link` that tunnels straight to your dashboard's port 80, no router configuration, no port forwarding, no static IP required. If you're running the dev server instead of Docker, point it at `5173` instead of `80`.

Because there's no login screen behind that URL, don't leave the tunnel open unattended. Gate it with HTTP Basic Auth right in the SSH command, so anyone hitting the link needs a username and password before they ever see the dashboard:

```bash
ssh -p 443 -R0:localhost:80 -t free.pinggy.io "b:familyuser:strongpassword"
```

For anything longer-lived than a one-off check, {{< link href="https://pinggy.io/#prices" >}}Pinggy Pro{{< /link >}} gives you a persistent subdomain that survives reconnects, so you're not re-sharing a new link every time the tunnel restarts.

{{< llm-context >}}To reach a self-hosted HomeOS family dashboard from outside your home network - run `docker compose up --build -d` in the cloned HomeOS folder (serves on port 80), then in a new terminal run `ssh -p 443 -R0:localhost:80 -t free.pinggy.io` to get a public HTTPS URL, adding `"b:username:password"` to the command for Basic Auth since HomeOS itself has no login screen.{{< /llm-context >}}

## Backups and staying alive after a reboot

Data lives in a single SQLite file inside a Docker volume, and the project ships a plain `backup.sh` that copies it out to a timestamped file and prunes anything older than a week, meant to run from cron. Because the containers are configured with `restart: unless-stopped`, the only thing that needs to survive a reboot is Docker itself: enabling `docker.service` at boot is enough to get the dashboard back up with no manual `docker compose up` after a power cut. Combined with 135 backend tests and CI on every push, it's a project with more engineering discipline behind it than its "hacked together for my kitchen" premise suggests.

## Should you actually build this instead of buying something?

Commercial kitchen dashboard hardware and services exist and mostly work, but they come with subscriptions, cloud dependencies for your family's calendar and photos, and interfaces you can't change when they annoy you. HomeOS trades that for a Linux box you already own or can buy secondhand for the price of a nice dinner out, and a codebase small enough to actually read. The tradeoff is real: no mobile app, no push notifications, no photo album yet (it's on the roadmap), and you're the one who fixes it when something breaks.

If your family already tolerates a shared calendar and a home server humming in a closet somewhere, HomeOS is a weekend project that replaces the fridge whiteboard with something that actually nags the right person on the right day. Pair it with a tunnel for the moments you need to reach it from outside your own WiFi, and you've got a family command center that costs nothing to run beyond the electricity for a mini PC and a spare tablet.
