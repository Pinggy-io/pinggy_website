---
title: "Self-Host Ever Gauzy and Expose It with Pinggy"
description: "Ever Gauzy bundles CRM, HR, ATS, and project management into one AGPL-3.0 codebase with 7.1k GitHub stars. Run the Docker Compose demo stack locally, then expose it with Pinggy instead of paying for Salesforce, BambooHR, and monday.com separately."
date: 2026-09-16T11:00:00+05:30
draft: false
tags: ["Ever Gauzy", "self-hosted", "Docker", "Pinggy", "open source"]
categories: ["Technology", "Self-Hosting", "Developer Tools"]
og_image: "images/ever_gauzy_open_source_erp_crm_pinggy/ever_gauzy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFNlbGYtSG9zdCBFdmVyIEdhdXp5IGFuZCBFeHBvc2UgSXQgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgZ3VpZGUgdG8gcnVubmluZyB0aGUgRXZlciBHYXV6eSBvcGVuIHNvdXJjZSBFUlAsIENSTSwgYW5kIEhSTSBwbGF0Zm9ybSBsb2NhbGx5IHdpdGggRG9ja2VyIENvbXBvc2UgYW5kIG1ha2luZyBpdCBwdWJsaWNseSByZWFjaGFibGUgd2l0aCBhIFBpbmdneSB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNsb25lIHRoZSByZXBvc2l0b3J5IiwKICAgICAgInRleHQiOiAiUnVuOiBnaXQgY2xvbmUgLS1kZXB0aCAxIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmVyLWNvL2V2ZXItZ2F1enkuZ2l0ICYmIGNkIGV2ZXItZ2F1enkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhcnQgdGhlIGRlbW8gc3RhY2siLAogICAgICAidGV4dCI6ICJSdW46IGRvY2tlciBjb21wb3NlIC1mIGRvY2tlci1jb21wb3NlLmRlbW8ueW1sIHVwIC1kIHRvIHN0YXJ0IFBvc3RncmVTUUwsIHRoZSBOZXN0SlMgQVBJIG9uIHBvcnQgMzAwMCwgYW5kIHRoZSBBbmd1bGFyIHdlYiBVSSBvbiBwb3J0IDQyMDAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNvbmZpcm0gaXQgaXMgcnVubmluZyIsCiAgICAgICJ0ZXh0IjogIk9wZW4gaHR0cDovL2xvY2FsaG9zdDo0MjAwIGFuZCBsb2cgaW4gd2l0aCB0aGUgZGVtbyBjcmVkZW50aWFscyBhZG1pbkBldmVyLmNvIGFuZCBhZG1pbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHRoZSBBUEkgd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJJbiBhIG5ldyB0ZXJtaW5hbCwgcnVuOiBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MzAwMCBmcmVlLnBpbmdneS5pbyAtVCB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIGZvciB0aGUgQVBJLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgdGhlIHdlYiBVSSB3aXRoIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIkluIGFub3RoZXIgdGVybWluYWwsIHJ1bjogc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjQyMDAgZnJlZS5waW5nZ3kuaW8gLVQgdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBmb3IgdGhlIHdlYiBhcHAuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBvaW50IEdhdXp5IGF0IHRoZSBwdWJsaWMgVVJMcyIsCiAgICAgICJ0ZXh0IjogIkVkaXQgLmVudi5kZW1vLmNvbXBvc2UsIHNldCBBUElfQkFTRV9VUkwgYW5kIENMSUVOVF9CQVNFX1VSTCB0byB0aGUgdHdvIFBpbmdneSBVUkxzLCB0aGVuIHJ1biBkb2NrZXIgY29tcG9zZSAtZiBkb2NrZXItY29tcG9zZS5kZW1vLnltbCB1cCAtZCAtLWZvcmNlLXJlY3JlYXRlIGFwaSB3ZWJhcHAuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "ever_gauzy_open_source_erp_crm_pinggy/ever_gauzy_banner.webp" "Ever Gauzy homepage describing itself as an Open Business Management Platform combining ERP, CRM, HRM, ATS, and PM, with a dashboard preview showing cash flow and invoicing charts" >}}

Run a ten-person company and you're likely paying three different vendors to track three things that all touch the same people. Salesforce Sales Cloud starts at $25/user/month, but the tier with real automation and forecasting is $175/user/month. BambooHR won't quote a per-seat price without a sales call, and the effective floor for a small team is around $250/month flat. monday.com's Standard plan is $12/seat/month billed annually, with a mandatory three-seat minimum. Add up the cheapest tiers of all three for ten people and you're near $620/month, or about $7,400/year, for tools that still don't share a login and need Zapier to pass data between them.

<a href="https://github.com/ever-co/ever-gauzy" target="_blank">Ever Gauzy</a> (7.1k GitHub stars, AGPL-3.0) takes a different approach: one NestJS + Angular codebase that covers ERP, CRM, HRM, an applicant tracking system, and project management, all sharing the same organization and employee records. It's actively developed in public - over 27,000 commits, more than 60 open pull requests at any given time, and multiple merges a day. The `develop` branch shipped a full payroll module (`PayrollRun` and `PayrollItem` entities) and a leave-management system with time-off policies and holiday tracking this week.

The catch is the same one every self-hosted app runs into: `docker compose` binds the API and the web UI to `127.0.0.1`, so nobody outside your machine can reach either one. Pinggy fixes that with two SSH commands.

{{< llm-context >}}To self-host Ever Gauzy (open source ERP/CRM/HRM) with Pinggy - run `docker compose -f docker-compose.demo.yml up -d` (starts the API on port 3000 and the web UI on port 4200), then run `ssh -p 443 -R0:localhost:3000 free.pinggy.io -T` and `ssh -p 443 -R0:localhost:4200 free.pinggy.io -T` in two separate terminals to get public HTTPS URLs for each. Set API_BASE_URL and CLIENT_BASE_URL in `.env.demo.compose` to those two URLs and restart with `docker compose -f docker-compose.demo.yml up -d --force-recreate api webapp`.{{< /llm-context >}}

{{% tldr %}}
1. **Clone**: `git clone --depth 1 https://github.com/ever-co/ever-gauzy.git && cd ever-gauzy`
2. **Start**: `docker compose -f docker-compose.demo.yml up -d` - runs Postgres, the API (port 3000), and the web UI (port 4200)
3. **Check locally**: open `http://localhost:4200`, log in with `admin@ever.co` / `admin`
4. **Expose the API**: `ssh -p 443 -R0:localhost:3000 free.pinggy.io -T`
5. **Expose the web UI**: `ssh -p 443 -R0:localhost:4200 free.pinggy.io -T` (in a second terminal)
6. **Rewire the URLs**: set `API_BASE_URL` and `CLIENT_BASE_URL` in `.env.demo.compose` to the two Pinggy URLs, then `docker compose -f docker-compose.demo.yml up -d --force-recreate api webapp`
{{% /tldr %}}

## What Ever Gauzy actually does

"ERP/CRM/HRM/ATS/PM" is a mouthful, but the repo's About section spells out what's actually in there: accounting, billing, bookkeeping, CRM pipelines, expense tracking, HR records, invoicing, an issue tracker, payroll, project management, a team-management layer, and time tracking - all as GitHub topics on the same repository, not separate products.

{{< image "ever_gauzy_open_source_erp_crm_pinggy/ever_gauzy_github_repo.webp" "The ever-co/ever-gauzy GitHub repository page showing 7.1k stars, AGPL-3.0 license, and topic tags including crm, erp, hr, payroll, and time-tracking" >}}

In practice, the modules break down like this:

- **HRM** - employee records, onboarding, time-off and holiday policies, activity and productivity monitoring, and now a payroll module with pay-run tracking.
- **CRM** - contact and organization management, sales pipelines, proposals, and client invoicing.
- **ERP** - accounting, multi-currency invoicing, expense management, and inventory/supply chain tracking.
- **ATS** - a job pipeline for tracking applicants through hiring stages.
- **PM** - task and project management, with time tracking tied directly to tasks so hours logged against a project show up in both the PM and payroll views.
- **Integrations** - Upwork and Hubstaff for freelancer time data, plus Zapier, Make, and GitHub OAuth for connecting to the rest of your stack.

It also ships desktop apps - a full Gauzy Desktop client, a lightweight Desktop Timer for tracking hours without the whole UI, and a Server app that bundles the API, database, and UI into one installer. For this walkthrough we're using the web version, which is what most teams actually run.

## The networking problem Pinggy solves

Ever Gauzy's demo Docker Compose file runs three containers: `db` (Postgres 17), `api` (the NestJS backend, port 3000), and `webapp` (the Angular frontend, served by nginx on port 4200). All three publish their ports to `127.0.0.1` by default, which is fine as long as everything stays on one machine.

It stops being fine the moment you want to log in from your phone, pull up the dashboard during a call, or let a teammate poke at your test instance. The Angular app running in your browser makes API calls to whatever `API_BASE_URL` is set to - by default `http://localhost:3000` - which only resolves on the machine where you're running the browser. Point a second device at your webapp's IP and the page loads, but every API request silently fails because that device's `localhost:3000` is not your machine's `localhost:3000`.

Pinggy solves this the same way it does for any local app: it opens an SSH reverse tunnel from your machine out to Pinggy's servers, which then forward public HTTPS traffic back down that connection to your local port. No inbound firewall rule, no static IP, no router configuration. Since Gauzy has two ports that both need a public identity - the API and the web UI - you run two tunnels instead of one.

## Setup walkthrough

You need Docker and Docker Compose. These steps work on macOS, Linux, or Windows with WSL2.

**Step 1 - Clone the repo**

Ever Gauzy is an Nx monorepo, so a shallow clone keeps the download reasonable:

```bash
git clone --depth 1 https://github.com/ever-co/ever-gauzy.git
cd ever-gauzy
```

**Step 2 - Start the demo stack**

```bash
docker compose -f docker-compose.demo.yml up -d
```

This pulls three prebuilt images - `postgres:17-alpine`, `ghcr.io/ever-co/gauzy-api:latest`, and `ghcr.io/ever-co/gauzy-webapp:latest` - so there's no local build step. First run takes a couple of minutes depending on your connection; the API waits for Postgres's health check before it starts, and the web UI waits for the API.

**Step 3 - Confirm it's running**

Open `http://localhost:4200`. You should land on the Gauzy login screen. Sign in with the built-in demo account:

```
Email: admin@ever.co
Password: admin
```

The `.env.demo.compose` file that ships with the repo also seeds placeholder JWT and session secrets (`refreshSecretKey`, `verificationSecretKey`, and similar), which is fine for trying the platform out but not for anything with real data - more on that below.

## Exposing Ever Gauzy with Pinggy

Open a second terminal and tunnel the API first:

```bash
ssh -p 443 -R0:localhost:3000 free.pinggy.io -T
```

Pinggy prints a public HTTPS URL, something like `https://abc123.run.pinggy-free.link`. Copy it - this is your API's public address.

Open a third terminal and tunnel the web UI:

```bash
ssh -p 443 -R0:localhost:4200 free.pinggy.io -T
```

You'll get a second URL, for example `https://xyz789.run.pinggy-free.link`. This is the address you'll actually share and browse to.

Now edit `.env.demo.compose` in the repo root and point both base URLs at the tunnels you just opened:

```bash
API_BASE_URL=https://abc123.run.pinggy-free.link
CLIENT_BASE_URL=https://xyz789.run.pinggy-free.link
```

Recreate the two services that read these values so the new URLs take effect:

```bash
docker compose -f docker-compose.demo.yml up -d --force-recreate api webapp
```

Open `https://xyz789.run.pinggy-free.link` from any device - your phone, a teammate's laptop, a browser tab that isn't yours. You should see the same Gauzy login screen, now reachable over the public internet, with the Angular app correctly calling back to your API through its own tunnel instead of failing on `localhost`.

### Persistent URLs

Both free Pinggy URLs above expire and get reassigned the moment either SSH session drops, which means every restart means editing `.env.demo.compose` again. A [Pinggy paid plan](https://pinggy.io/#prices) gives each tunnel a fixed subdomain, so you set `API_BASE_URL` and `CLIENT_BASE_URL` once and they stay correct across reconnects. Pair that with a [tunnel token](https://pinggy.io/docs/tunnel_token/) if you want the tunnels to reconnect automatically after a reboot.

## Tradeoffs to know

**Demo secrets aren't production secrets.** `.env.demo.compose` ships with hardcoded values for `JWT_SECRET`, `JWT_REFRESH_TOKEN_SECRET`, and `EXPRESS_SESSION_SECRET`. They're identical for everyone who clones the repo, which is fine for kicking the tyres but not for storing real employee or customer data. For anything beyond a demo, switch to the non-demo `docker-compose.yml`, generate your own secrets, and put a real Postgres instance behind it instead of the container-managed one.

**It's heavier than a single-service app.** The official minimum for the API alone is 2GB RAM and 1 CPU core; running Postgres, the API, and the Angular UI together comfortably wants closer to 4GB free. That's a different class of resource commitment than something like a single Go binary or a lightweight Node app.

**No SMTP configured out of the box.** Like most self-hosted platforms, the demo compose file doesn't set mail credentials, so password-reset emails and notifications won't send until you add `MAIL_HOST`, `MAIL_USERNAME`, and `MAIL_PASSWORD` to your env file.

**Two tunnels, two URLs to keep straight.** Most Pinggy walkthroughs involve exposing one port. Gauzy's split between API and web UI means you're managing two tunnel sessions and two environment variables instead of one - not hard, but it's an extra step compared to a single-container app.

**Free Pinggy URLs aren't stable.** As with any free-tier tunnel, disconnecting and reconnecting hands you a new subdomain each time, which means re-editing `.env.demo.compose`. Fine while you're evaluating the platform, annoying if you're actually running it day to day - that's what the paid plan's fixed subdomains are for.

## The cost math again

Stack Salesforce Starter ($25/user), BambooHR's small-team floor (~$250/month), and monday.com Standard ($12/seat) for a ten-person company and you're near $620/month before anyone adds automation, forecasting, or a bigger HR tier - and the three tools still don't share a database. Ever Gauzy is free software; the only recurring cost is wherever you choose to run it (a $5-6/month VPS if you want it always-on) plus a Pinggy plan if you want a persistent URL instead of the free tunnel. The tradeoff is that you're now the one running upgrades and backups instead of a vendor - a fair trade for a lot of small teams, a bad one if nobody on the team wants to own infrastructure.

## Wrapping up

Ever Gauzy packs CRM, HR, payroll, project tracking, and applicant tracking into one codebase that's shipped tens of thousands of commits and is still merging pull requests multiple times a day. The Docker Compose demo gets the whole stack running locally in a couple of minutes. The only piece it doesn't solve is making that stack reachable from anywhere but your own machine - and that's two `ssh` commands away with Pinggy.
