---
title: "Open-Source Calendly Alternatives You Can Self-Host in 2026"
description: "Cal.com went closed source in April 2026. Here are the open-source, self-hostable Calendly alternatives that took its place - Cal.diy, Easy!Appointments, Tymeslot, Rallly and more - with licenses, versions, and a tested Docker plus Pinggy setup."
date: 2026-08-18T07:30:00+05:30
lastmod: 2026-08-18T07:30:00+05:30
draft: false
og_image: "images/self_hosted_calendly_alternatives/self_hosted_calendly_alternatives_banner.webp"
tags: ["Scheduling", "self-hosted", "open source", "Pinggy", "Docker"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJlcGxhY2UgQ2FsZW5kbHkgd2l0aCBhIFNlbGYtSG9zdGVkLCBPcGVuLVNvdXJjZSBTY2hlZHVsaW5nIEFwcCIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBjaG9vc2luZyBhbiBvcGVuLXNvdXJjZSBDYWxlbmRseSBhbHRlcm5hdGl2ZSBpbiAyMDI2LCBydW5uaW5nIGl0IHdpdGggRG9ja2VyLCBjb25uZWN0aW5nIGl0IHRvIHlvdXIgb3duIGNhbGVuZGFyIHNlcnZlciwgYW5kIG1ha2luZyB0aGUgYm9va2luZyBwYWdlIHJlYWNoYWJsZSBmcm9tIHRoZSBpbnRlcm5ldCB3aXRoIGEgUGluZ2d5IFNTSCB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBpY2sgdGhlIHRvb2wgdGhhdCBtYXRjaGVzIHlvdXIgYm9va2luZyBtb2RlbCIsCiAgICAgICJ0ZXh0IjogIkNob29zZSBhIGJvb2tpbmctcGFnZSB0b29sIHN1Y2ggYXMgQ2FsLmRpeSwgRWFzeSFBcHBvaW50bWVudHMsIFR5bWVzbG90LCBUaHVuZGVyYmlyZCBBcHBvaW50bWVudCBvciBDYWxub2RlIGlmIHBlb3BsZSBib29rIHNsb3RzIG9uIHlvdXIgY2FsZW5kYXIsIE5leHRjbG91ZCBDYWxlbmRhciBhcHBvaW50bWVudCBzbG90cyBpZiB5b3UgYWxyZWFkeSBydW4gTmV4dGNsb3VkLCBvciBhIHBvbGwgdG9vbCBzdWNoIGFzIFJhbGxseSBvciBDcmFiIEZpdCBpZiB5b3UgaW5zdGVhZCBuZWVkIHRvIGZpbmQgYSB0aW1lIHRoYXQgc3VpdHMgYSB3aG9sZSBncm91cC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2hlY2sgdGhlIGxpY2Vuc2UgYW5kIGhvc3RpbmcgcmVxdWlyZW1lbnRzIiwKICAgICAgInRleHQiOiAiQ2FsLmRpeSBpcyBNSVQgYnV0IGN1cnJlbnRseSBoYXMgbm8gcHVibGlzaGVkIERvY2tlciBpbWFnZSwgc28gaXQgbXVzdCBiZSBidWlsdCBmcm9tIHNvdXJjZSBhbmQgbmVlZHMgTm9kZSAxOCBvciBuZXdlciB3aXRoIFBvc3RncmVTUUwgMTMgb3IgbmV3ZXIuIEVhc3khQXBwb2ludG1lbnRzIDEuNi4wIGlzIEdQTC0zLjAgYW5kIG5lZWRzIFBIUCA4LjIgd2l0aCBNeVNRTC4gVHltZXNsb3QgaXMgQUdQTC0zLjAgYW5kIGJ1bmRsZXMgUG9zdGdyZVNRTCBpbiBpdHMgaW1hZ2UuIFNlbGYtaG9zdGVkIFJhbGxseSBpcyBmcmVlIGZvciBhIHNpbmdsZSB1c2VyIGJ1dCByZXF1aXJlcyBhIHBhaWQgbGljZW5zZSBrZXkgZm9yIG11bHRpLXVzZXIgaW5zdGFuY2VzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSdW4gdGhlIGFwcCB3aXRoIERvY2tlciIsCiAgICAgICJ0ZXh0IjogIldyaXRlIGEgZG9ja2VyLWNvbXBvc2UueW1sIGZvciB0aGUgY2hvc2VuIGFwcCwgc2V0IGl0cyBkYXRhYmFzZSBjcmVkZW50aWFscyBhbmQgaXRzIG93biBiYXNlIFVSTCBlbnZpcm9ubWVudCB2YXJpYWJsZSwgYW5kIHJ1biBkb2NrZXIgY29tcG9zZSB1cCAtZC4gRm9yIEVhc3khQXBwb2ludG1lbnRzLCBtYXAgcG9ydCA4MDgwIHRvIGNvbnRhaW5lciBwb3J0IDgwLCB0aGVuIG9wZW4gaHR0cDovL2xvY2FsaG9zdDo4MDgwIGFuZCBjb21wbGV0ZSB0aGUgYnJvd3NlciBpbnN0YWxsIHdpemFyZCB0byBjcmVhdGUgdGhlIGFkbWluIGFjY291bnQgYW5kIHRoZSBmaXJzdCBwcm92aWRlci4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhwb3NlIHRoZSBib29raW5nIHBhZ2Ugd2l0aCBQaW5nZ3kiLAogICAgICAidGV4dCI6ICJSdW4gc3NoIC1wIDQ0MyAtUjA6bG9jYWxob3N0OjgwODAgZnJlZS5waW5nZ3kuaW8gaW4gYSBzZWNvbmQgdGVybWluYWwgdG8gZ2V0IGEgcHVibGljIEhUVFBTIFVSTCBmb3IgdGhlIGxvY2FsIGluc3RhbmNlLiBObyBwb3J0IGZvcndhcmRpbmcsIGZpcmV3YWxsIGNoYW5nZSBvciBjZXJ0aWZpY2F0ZSBzZXR1cCBpcyByZXF1aXJlZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2V0IHRoZSBhcHBsaWNhdGlvbidzIGJhc2UgVVJMIHRvIHRoZSB0dW5uZWwgVVJMIiwKICAgICAgInRleHQiOiAiVXBkYXRlIHRoZSBhcHAncyBvd24gYmFzZSBVUkwgc2V0dGluZyAoQkFTRV9VUkwgZm9yIEVhc3khQXBwb2ludG1lbnRzLCBQSFhfSE9TVCBmb3IgVHltZXNsb3QsIE5FWFRfUFVCTElDX1dFQkFQUF9VUkwgZm9yIENhbC5kaXkpIHRvIHRoZSBwdWJsaWMgSFRUUFMgVVJMIGFuZCByZWNyZWF0ZSB0aGUgY29udGFpbmVyLiBPdGhlcndpc2UgdGhlIHBhZ2VzIHNlcnZlZCB0aHJvdWdoIHRoZSB0dW5uZWwga2VlcCByZWZlcmVuY2luZyBsb2NhbGhvc3QgZm9yIGFzc2V0cyBhbmQgY29uZmlybWF0aW9uIGxpbmtzLCB3aGljaCBmYWlscyBpbiBldmVyeSB2aXNpdG9yJ3MgYnJvd3Nlci4gVXNlIGEgUGluZ2d5IHBhaWQgcGxhbiBmb3IgYSBmaXhlZCBzdWJkb21haW4gb3IgY3VzdG9tIGRvbWFpbiBzbyB0aGUgVVJMIHN0YXlzIHN0YWJsZS4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "self_hosted_calendly_alternatives/self_hosted_calendly_alternatives_banner.webp" "Open-Source Calendly Alternatives You Can Self-Host in 2026" >}}

Booking a meeting with someone outside your own organisation is still one of the clumsiest parts of everyday work: two calendars nobody else can see, two timezones, and an email thread that ends with "does Thursday still work?". Scheduling links fixed that, which is why so many teams now pay per seat for what is, underneath, a free/busy lookup and a form.

The self-hosted answer used to be simple: run Cal.com. That changed on 15 April 2026, when Cal.com moved its production codebase into a private repository and relicensed the public one from AGPL-3.0 to MIT under a new name, <a href="https://github.com/calcom/cal.diy" target="_blank">Cal.diy</a>, with the enterprise features stripped out. Calendly meanwhile costs $10 per seat per month on Standard and $16 on Teams, billed yearly. Here is what is actually worth running instead, what each one costs you in setup, and how to put one on the public internet with a single command.

### Comparison Table for Self-Hosted Calendly Alternatives

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Project</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Best For</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">License</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">GitHub Stars</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">How You Run It</th>
</tr>
</thead>
<tbody>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:center;" colspan="5"><strong>Booking Pages (direct Calendly replacements)</strong></td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://github.com/calcom/cal.diy" target="_blank">Cal.diy</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Feature depth, app-store integrations</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">47.8K</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Next.js + Postgres, build from source</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://easyappointments.org" target="_blank">Easy!Appointments</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Service businesses, multiple providers</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">GPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">4.3K</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">PHP + MySQL, official Docker image</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://github.com/tymeslot/tymeslot" target="_blank">Tymeslot</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Modern booking pages, one container</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">AGPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">173</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Elixir/Phoenix, Postgres bundled in image</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://github.com/thunderbird/appointment" target="_blank">Thunderbird Appointment</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">CalDAV-native scheduling, email workflow</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MPL-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">547</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Python API + Vue UI, Docker Compose</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://apps.nextcloud.com/apps/calendar" target="_blank">Nextcloud Calendar</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Teams already running Nextcloud</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">AGPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1.2K (app)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">App inside a Nextcloud server</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://github.com/Calnode/calnode" target="_blank">Calnode</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Tiny footprint, API and agent driven booking</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">42</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Single Go binary + SQLite, 58MB image</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://github.com/dennisklappe/CloudMeet" target="_blank">CloudMeet</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">No server at all, Google/Outlook users</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">518</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Cloudflare Workers + D1, deploy from GitHub</td>
</tr>
<tr style="background:#e8f5e9;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:center;" colspan="5"><strong>Group Polls (find a time that works for everyone)</strong></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://rallly.co" target="_blank">Rallly</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Doodle-style date polls</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">AGPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">5.2K</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Docker stack, install script</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://crab.fit" target="_blank">Crab Fit</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Availability heat-maps, no accounts</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">GPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">513</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Next.js app + API, self-hosting guide</td>
</tr>
</tbody>
</table>

{{% tldr %}}

1. **Cal.com went closed source** on 15 April 2026. Its public code lives on as MIT-licensed <a href="https://github.com/calcom/cal.diy" target="_blank">Cal.diy</a>, minus Teams, Workflows, Insights, SSO and API v1.

2. **Booking pages**: <a href="https://github.com/calcom/cal.diy" target="_blank">Cal.diy</a> (most features, no prebuilt image), <a href="https://easyappointments.org" target="_blank">Easy!Appointments</a> (PHP + MySQL, official image), <a href="https://github.com/tymeslot/tymeslot" target="_blank">Tymeslot</a> (one `docker run`), <a href="https://github.com/thunderbird/appointment" target="_blank">Thunderbird Appointment</a> (CalDAV-native), <a href="https://github.com/Calnode/calnode" target="_blank">Calnode</a> (58MB Go binary).

3. **Group polls**: <a href="https://rallly.co" target="_blank">Rallly</a> for dates (paid license above one user), <a href="https://crab.fit" target="_blank">Crab Fit</a> for heat-maps.

4. **Go public**: `ssh -p 443 -R0:localhost:8080 free.pinggy.io`, then set the app's own base URL to that URL.

{{% /tldr %}}

## What changed in 2026: Cal.com went closed source

On 15 April 2026 the `LICENSE` file in `calcom/cal.com` was replaced in a commit titled "feat: Cal.diy - community-driven MIT-licensed fork", the repository was renamed to `calcom/cal.diy`, and the production codebase moved somewhere you cannot read it. CEO Bailey Pumfleet's stated reason was security: AI coding assistants have made it cheap to scan public code for vulnerabilities, and open-source code is "basically like handing out the blueprint to a bank vault".

The <a href="https://news.ycombinator.com/item?id=47780456" target="_blank">Hacker News thread</a> (391 points) was unconvinced, with Simon Willison asking whether the message being sent is "We are no longer confident in our own ability to secure your data?". Either way, the practical result is clear. Cal.diy keeps the scheduling engine, booking flows, app store and API v2; it loses Organizations and Teams, Routing Forms, Workflows, Instant Booking, the AI phone agent, SAML/SSO, Insights and API v1. There is no hosted version, and the README calls it "strictly recommended for personal, non-production use".

## Booking pages: the direct Calendly replacements

These do Calendly's actual job: publish a link, show real availability, take a booking, write it to your calendar.

### 1. Cal.diy - the most features, if you build it yourself

{{< image "self_hosted_calendly_alternatives/caldiy.webp" "Cal.diy repository on GitHub showing the MIT license and 47.8k stars" >}}

Cal.diy inherits event types with buffers and minimum notice, Stripe payments, video links through Daily.co or Google Meet, a large app store, webhooks and API v2. Team scheduling, round-robin and routing forms went to the closed edition. At 47.8K stars it has more community behind it than everything else in this guide combined, and MIT is as permissive as licensing gets.

The catch is operational. It is a Next.js + tRPC + Prisma monorepo on PostgreSQL 13+ with Node 18+, and the Docker image the README points at does not exist yet:

```bash
docker pull calcom/cal.diy:latest
# Error response from daemon: manifest for calcom/cal.diy:latest not found: manifest unknown
```

The Docker Hub repository has zero tags and zero pulls as of 18 August 2026. The last published image is `calcom/cal.com:v6.2.0` from 2 March 2026, built from pre-fork AGPL code. So self-hosting today means `git clone --recursive`, two `openssl rand` secrets in `.env`, and a `docker compose up -d` that builds the whole monorepo locally. Budget a slow first build and a machine with real RAM.

### 2. Easy!Appointments - the boring option that just works

{{< image "self_hosted_calendly_alternatives/easyappointments_running_on_locahost_8080_2.webp" "Easy!Appointments admin calendar running on localhost:8080" >}}

<a href="https://easyappointments.org" target="_blank">Easy!Appointments</a> has been on GitHub since 2014 and has none of Cal.com's drama. Version 1.6.0 (27 May 2026, GPL-3.0) runs on PHP 8.2+ with MySQL, so it works on essentially any host, and there is an official Docker image plus a browser install wizard.

The data model is a business one: services, providers and working plans, with customers booking a service with a provider. That suits a clinic, salon or consultancy better than "book 30 minutes with me". It ships CalDAV sync and LDAP alongside Google Calendar, and 1.6.0 added Jitsi and Google Meet links plus an ALTCHA CAPTCHA on public forms. The UI is jQuery-era and you configure SMTP yourself, but nothing here is going to be relicensed out from under you. This is the tool used in the walkthrough below.

### 3. Tymeslot - one container, batteries included

{{< image "self_hosted_calendly_alternatives/tymeslot.webp" "Tymeslot booking page showing meeting durations to choose from" >}}

<a href="https://github.com/tymeslot/tymeslot" target="_blank">Tymeslot</a> (AGPL-3.0, Elixir/Phoenix) is the most direct spiritual replacement for self-hosted Cal.com, and its README says why: "Cal.com relicensed away from open source in 2026. Tymeslot's source stays public and self-hostable under the GNU AGPLv3." Postgres is baked into the image, so setup really is one command:

```bash
docker run --name tymeslot -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data -v tymeslot_pg:/var/lib/postgresql/data \
  luka1thb/tymeslot:latest
```

That pulls 1.13GB, boots, and serves `http://localhost:4000`; the first account you create is the admin. Releases ship weekly (v1.10.1 on 17 August 2026) and the same code runs their managed cloud. The caveat is maturity: 173 stars, repository created August 2025.

### 4. Thunderbird Appointment - CalDAV-native, MPL-licensed

{{< image "self_hosted_calendly_alternatives/thunderbird_appointment.webp" "Thunderbird Appointment scheduling dashboard with weekly availability" >}}

<a href="https://github.com/thunderbird/appointment" target="_blank">Thunderbird Appointment</a> is the Thunderbird team's scheduling tool, built on the same values as the mail client: MPL-2.0, standards-first, CalDAV as a first-class citizen. Self-hosting is a `docker compose up -d --build` after copying two `.env.example` files; the frontend lands on port 8090 and the Python API on 5000, with `APP_ALLOW_FIRST_TIME_REGISTER=True` to create the first account.

Two caveats: the self-hosting docs are openly work in progress, and the polished version is the hosted one inside Thunderbird Pro at $6/month billed annually, currently waitlisted. If you want CalDAV-native scheduling from an organisation unlikely to rug-pull its license, watch this one.

### 5. Nextcloud Calendar - free if you already run Nextcloud

{{< image "self_hosted_calendly_alternatives/nextcloud_calendar.webp" "Nextcloud Calendar app listing showing appointment slots and calendar views" >}}

If you already have Nextcloud, you may not need another app. The Calendar app (v6.6.0, on Nextcloud Server 34.0.3) has appointment slots with configurable duration and increment, a booking window, and public or secret-URL links. Bookings check existing events for conflicts, write into your calendar, and can create a Nextcloud Talk room automatically.

There is no round-robin or team routing and it is less slick than Calendly, but it is zero extra infrastructure on accounts and backups you already run. For a lighter take on the same idea, our writeup of {{< link href="/blog/oxicloud_self_hosted_cloud_storage/" >}}OxiCloud's CalDAV stack{{< /link >}} covers a smaller alternative.

### 6. Calnode - a single Go binary, if small is what you want

{{< image "self_hosted_calendly_alternatives/calnode.webp" "Calnode first-run screen asking for the owner account details" >}}

<a href="https://github.com/Calnode/calnode" target="_blank">Calnode</a> takes the opposite position from Cal.com: one static Go binary with embedded SQLite, no Redis, no Postgres, no separate API server. The image is 58MB, nearly 30 times smaller than the last cal.com image, and starts in about a second with `docker run -p 3000:3000 -v ./data:/data ghcr.io/calnode/calnode:latest`.

It is Apache-2.0, API-first, and ships an MCP server inside the binary so agents can book directly, which pairs with our guide to {{< link href="/blog/llm_tool_use_mcp_custom_tools/" >}}custom MCP tools{{< /link >}}. Treat it as promising rather than proven: first commit June 2026, 42 stars, v0.2.2. Great for a homelab, not for client-facing bookings this quarter.

### 7. CloudMeet - no server to run at all

{{< image "self_hosted_calendly_alternatives/cloudmeet.webp" "CloudMeet booking page with a date picker running on Cloudflare" >}}

<a href="https://github.com/dennisklappe/CloudMeet" target="_blank">CloudMeet</a> (MIT, 518 stars) deploys to your own Cloudflare account instead of a box you own, using Workers and D1 inside the free tier. You fork the template, add secrets for a Cloudflare API token, Google OAuth, an admin email and a JWT secret, and GitHub Actions deploys it. It handles Google and Outlook calendars, Meet or Teams links, and booking emails. Not self-hosting in the strict sense, but there is no per-seat fee and no server to patch.

## Group polls: when the answer is "whenever suits everyone"

Booking pages assume one person's availability is authoritative. Sometimes you need the opposite: seven people, no shared calendar, pick a slot.

### 8. Rallly - the Doodle replacement

{{< image "self_hosted_calendly_alternatives/rallly.webp" "Rallly group poll showing participants voting on meeting times" >}}

<a href="https://rallly.co" target="_blank">Rallly</a> (AGPL-3.0, 5.2K stars, v4.12.3) polls candidate dates and shows an availability grid as people vote, with no accounts needed for participants. Self-hosting is `curl -fsSL https://get.rallly.co | bash`, which lays down a Compose stack in `/opt/rallly` with Traefik, Postgres and S3-compatible storage; you need 2GB of RAM, a domain, and SMTP.

Read the licensing before you deploy it for a team. Self-hosted Rallly is free for single-user use, but multi-user instances need a paid key: $49 for up to 5 users, $299 for up to 50, $999+ beyond. Guest voters do not count, and the docs describe it as an honor system, but it is not "free forever" the way the AGPL badge suggests.

### 9. Crab Fit - availability heat-maps with zero accounts

{{< image "self_hosted_calendly_alternatives/crab_fit.webp" "Crab Fit event creation page with a calendar and time range picker" >}}

<a href="https://crab.fit" target="_blank">Crab Fit</a> (GPL-3.0, 513 stars) is the lightest thing here. Create an event, everyone paints their availability onto a grid, and the result is a heat-map of when most people are free. Nobody creates an account, and the project wiki has a self-hosting guide for the web app and its API. Single purpose, and better for it.

## Walkthrough: Easy!Appointments public in two commands

{{< llm-context >}}To self-host a Calendly alternative with Pinggy - run `docker compose up -d` with the Easy!Appointments image (starts on port 8080), finish the browser install wizard, then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io` to get a public HTTPS URL, and set the app's BASE_URL to that URL before restarting the container.{{< /llm-context >}}

Everything below was run and verified on Docker 28.4.0. Two services, one file:

{{< image "self_hosted_calendly_alternatives/docker_compose_ss.webp" "The Easy!Appointments docker-compose.yml with the app and MySQL services" >}}

Save it as `docker-compose.yml`:

```yaml
services:
  easyappointments:
    image: alextselegidis/easyappointments:1.6.0
    restart: unless-stopped
    ports:
      - "8080:80"
    environment:
      - BASE_URL=http://localhost:8080
      - DEBUG_MODE=FALSE
      - DB_HOST=mysql
      - DB_NAME=easyappointments
      - DB_USERNAME=root
      - DB_PASSWORD=secret
    depends_on:
      - mysql

  mysql:
    image: mysql:8.0
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=secret
      - MYSQL_DATABASE=easyappointments
    volumes:
      - mysql:/var/lib/mysql

volumes:
  mysql:
```

Then bring it up:

{{< image "self_hosted_calendly_alternatives/docker_compose_up_command.webp" "docker compose up -d starting the MySQL and Easy!Appointments containers" >}}

Both containers should show as running:

{{< image "self_hosted_calendly_alternatives/docker_desktop_ss_running_calendar.webp" "Docker Desktop showing the calendar stack running" >}}

Once MySQL finishes initialising, `http://localhost:8080` returns a `307` to `/index.php/installation`; fill in the admin and company details and the wizard creates the schema and your first provider.

{{< image "self_hosted_calendly_alternatives/easyappointments_running_on_locahost_8080.webp" "Easy!Appointments installation wizard on localhost:8080" >}}

The booking page then lives at `http://localhost:8080/` - your Calendly link, on your own machine.

To let a client actually book a slot, it needs a public address. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} does that in one command, with no router configuration, reverse proxy or certificate to obtain:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints an HTTP and an HTTPS URL:

{{< image "self_hosted_calendly_alternatives/pinggy_public_url.webp" "Pinggy printing the public HTTP and HTTPS URLs for the tunnel" >}}

**Do not skip this last step.** Easy!Appointments writes absolute URLs from `BASE_URL` into every page, so with it still set to `http://localhost:8080` the tunnelled page comes back with `<script src="http://localhost:8080/assets/js/pages/booking.min.js">`. Your browser resolves that; your client's does not, and the page arrives unstyled and broken. Set `BASE_URL` to the Pinggy HTTPS URL and recreate the app container with `docker compose up -d --force-recreate easyappointments`. This is the same trap that catches people self-hosting {{< link href="/blog/best_open_source_alternatives_to_slack_and_discord/" >}}chat platforms with a ROOT_URL setting{{< /link >}}: the tunnel is transparent, the application's idea of its own address is not.

With that set, the booking page your clients see is live on the public internet, over HTTPS, with no ports opened on your router:

{{< image "self_hosted_calendly_alternatives/easyappointments_running_on_pinggy_public_url.webp" "The Easy!Appointments booking page served over a public Pinggy HTTPS URL" >}}

While you are still seeding test data, add `-t free.pinggy.io b:username:password` to put basic auth in front of the tunnel. The tunnel also prints a live request counter, which is the quickest way to confirm traffic is reaching your machine:

{{< image "self_hosted_calendly_alternatives/pinggy_log.webp" "Pinggy tunnel log showing a 200 OK request and the 60 minute expiry notice" >}}

Note that free tunnels expire after 60 minutes with a new random hostname on reconnect, which is the wrong property for a URL baked into `BASE_URL`; a <a href="https://pinggy.io/#prices" target="_blank">paid plan</a> gives you a fixed subdomain or your own domain, so you set it once. The same two-step pattern works for everything above, only the port changes: Tymeslot 4000, Calnode 3000, Cal.diy 3000.

## How to choose

- **Closest to Calendly's feature set**: Cal.diy, if you accept that you are building the images and reading the diffs yourself.
- **Still running unattended in three years**: Easy!Appointments. A decade of releases, an ordinary PHP/MySQL stack, no venture-backed company that can change the license underneath you.
- **Modern booking page, least setup**: Tymeslot, one `docker run` away.
- **Already running Nextcloud**: use the Calendar app's appointment slots rather than adding another service.
- **Consensus, not a booking**: Rallly for date polls, Crab Fit for heat-maps.

## Conclusion

The Cal.com relicense reshuffled this category rather than emptying it: Cal.diy carries the code forward under MIT, Easy!Appointments remains the dependable boring choice, and Tymeslot and Calnode are the new entrants worth watching. The economics still favour self-hosting, with Calendly Teams costing $960 a year for five seats against roughly $70 for a VPS that runs any of these. Get it working on `localhost`, then put one `ssh -p 443 -R0:localhost:<port> free.pinggy.io` in front of it.
