---
title: "God's Eye View: The Open-Source Spy-Satellite Simulator Running in a Browser Tab"
description: "God's Eye View turns public flight, ship, satellite, and camera feeds into a photorealistic 3D globe you run on your own machine. Here's how it works, what its security model actually is, and how to share your instance with Pinggy."
date: 2026-08-30T11:00:00+05:30
draft: false
tags: ["God's Eye View", "open source", "geospatial", "Pinggy", "localhost"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/gods_eye_view_pinggy/gods_eye_view_pinggy_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJ1biBHb2QncyBFeWUgVmlldyBMb2NhbGx5IGFuZCBTaGFyZSBJdCB3aXRoIFBpbmdneSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBpbnN0YWxsaW5nIHRoZSBvcGVuLXNvdXJjZSBHb2QncyBFeWUgVmlldyAzRCBnbG9iZSwgcnVubmluZyBpdHMgVml0ZSBkZXYgc2VydmVyIGxvY2FsbHksIGFuZCBleHBvc2luZyBpdCBvdmVyIGEgcHVibGljIEhUVFBTIFVSTCB3aXRoIGEgUGluZ2d5IHR1bm5lbC4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2xvbmUgYW5kIGluc3RhbGwgR29kJ3MgRXllIFZpZXciLAogICAgICAidGV4dCI6ICJDbG9uZSBnaXRodWIuY29tL2JpbGF3YWxzaWRodS9nb2RzLWV5ZS12aWV3LCBjb3B5IC5lbnYuZXhhbXBsZSB0byAuZW52IGFuZCBhZGQgYSBHT09HTEVfTUFQU19BUElfS0VZLCB0aGVuIHJ1biBucG0gaW5zdGFsbCAoTm9kZSAyNC4xNC54IG9yIDI2LnggcmVxdWlyZWQpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTdGFydCB0aGUgZGV2IHNlcnZlciIsCiAgICAgICJ0ZXh0IjogIlJ1biBucG0gcnVuIGRldiAtLSAtLWhvc3QgbG9jYWxob3N0IC0tcG9ydCA0MTczIHRvIHN0YXJ0IHRoZSBWaXRlIGRldiBzZXJ2ZXIsIHRoZW4gb3BlbiBodHRwOi8vbG9jYWxob3N0OjQxNzMgaW4gYSBicm93c2VyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFeHBvc2UgcG9ydCA0MTczIHdpdGggUGluZ2d5IiwKICAgICAgInRleHQiOiAiSW4gYSBuZXcgdGVybWluYWwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo0MTczIGZyZWUucGluZ2d5LmlvIHRvIGdldCBhIHB1YmxpYyBIVFRQUyBVUkwgdGhhdCB0dW5uZWxzIHN0cmFpZ2h0IHRvIHRoZSBsb2NhbCBkZXYgc2VydmVyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTaGFyZSB0aGUgcHVibGljIFVSTCIsCiAgICAgICJ0ZXh0IjogIlNlbmQgdGhlIHBpbmdneS5saW5rIFVSTCB0byBhbnlvbmUsIG9yIG9wZW4gaXQgb24gYSBwaG9uZSBhd2F5IGZyb20gaG9tZSBXaS1GaSwgdG8gdmlldyBhbmQgaW50ZXJhY3Qgd2l0aCB0aGUgc2FtZSBsaXZlIGdsb2JlLCBpbmNsdWRpbmcgbWljcm9waG9uZS1iYXNlZCB2b2ljZSBjb250cm9sLCB3aXRob3V0IGV4cG9zaW5nIHRoZSBsb2NhbCBuZXR3b3JrLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "gods_eye_view_pinggy/gods_eye_view_pinggy_banner.webp" "Stylized dark HUD-style illustration of a tracking globe with flight, satellite, vessel, and camera blips, representing the God's Eye View open-source spatial intelligence tool" >}}

<a href="https://github.com/bilawalsidhu/gods-eye-view" target="_blank">God's Eye View</a> is a browser tab that renders a photorealistic 3D Earth and then covers it in everything public data feeds will tell you: live aircraft, ships, satellites, earthquakes, wildfires, traffic, and roughly 800 public CCTV cameras, all updating in near real time. Click a plane and the camera drops into a terrain-following cockpit view behind it. Flip on FLIR mode and the whole globe turns into thermal-camera green. Say "take me to LAX and track the nearest aircraft" out loud and it does exactly that. None of the data is fake. It's the same public feeds that flight trackers and marine trackers have used for years, just fused into one globe instead of a dozen separate tabs.

The project is built by Bilawal Sidhu, a former Google Maps product manager who now hosts technology segments for TED and scouts for Andreessen Horowitz, and it grew out of a YouTube series where he walked through the interface. On August 24, 2026 he put the code up on GitHub under the MIT license. Less than a week later it's sitting at 13.3k stars and 2.6k forks.

{{% tldr %}}
1. **What it is**: an open-source, browser-based 3D globe (CesiumJS + Vite, vanilla JavaScript, no framework) that overlays live flights, ships, satellites, earthquakes, fires, traffic, and public cameras on Google's Photorealistic 3D Tiles.
2. **Run it**: clone the repo, copy `.env.example` to `.env` with a `GOOGLE_MAPS_API_KEY`, then `npm install && npm run dev -- --host localhost --port 4173`. Requires Node 24.14.x or 26.x.
3. **Most layers are free**: flights (OpenSky, adsb.lol), satellites (CelesTrak), and quakes (USGS) need no key at all. Only Google's 3D tiles and the optional OpenAI voice control are metered, and both come with free monthly allowances.
4. **The security note in the README is real**: the dev server binds to `localhost` by default because `--host 0.0.0.0` puts your API keys within reach of anyone on the LAN.
5. **Reach it from anywhere**: `ssh -p 443 -R0:localhost:4173 free.pinggy.io` turns the local dev server into a public HTTPS URL, which also happens to be the only way to get the voice control feature working for anyone who isn't sitting at your own machine.
{{% /tldr %}}

{{< llm-context >}}To run God's Eye View and share it with Pinggy - clone github.com/bilawalsidhu/gods-eye-view, add a GOOGLE_MAPS_API_KEY to .env, then run `npm install && npm run dev -- --host localhost --port 4173` (starts on port 4173), then in a new terminal run `ssh -p 443 -R0:localhost:4173 free.pinggy.io` to get a public HTTPS URL for the globe.{{< /llm-context >}}

## What's actually rendering on screen

Under the hood this is a Vite dev server serving vanilla JavaScript against the CesiumJS engine, with no React, Vue, or any other framework in the stack. Cesium handles the photorealistic 3D globe itself, streaming Google's Photorealistic 3D Tiles for terrain and buildings. Everything drawn on top of that base map comes from thirteen separate live-data layers, each polling a different public API:

- **Flights** from OpenSky Network and adsb.lol, including a military-flight layer sourced from ADS-B feeds
- **Ships** from AISStream, plotted from AIS transponder data
- **Satellites** from CelesTrak's public TLE catalog, propagated with the SGP4 orbital model so positions are computed, not just interpolated
- **Earthquakes** from USGS (last 24 hours) and **active fires** from NASA FIRMS
- **Public cameras**, roughly 800 of them, pulled from city open-data APIs (Austin, London, Caltrans, and others) and projected into the 3D city geometry
- **Traffic**, **radio stations** (750+, from Radio Browser), bikeshare availability, submarine cables, and data center locations rounding out the rest

Aircraft positions get polled every 15 to 30 seconds and rendered a beat behind real time with interpolation smoothing the gaps, and dead reckoning fills in when a feed goes stale. Entity altitudes are sampled against the actual rendered terrain mesh using a geoid-aware vertical datum, which is a fussier detail than most hobby projects bother with. It's the difference between a plane hovering at the correct altitude over mountainous terrain and one clipping through it. A voice layer built on OpenAI's Realtime API adds 28 callable tools for navigation, annotation, and querying the scene, so "zoom into the Suez Canal" or "what's that aircraft" gets answered with actual scene state, not a canned response.

The project draws a clear line around what it won't do: no named-person search, no face recognition, no tracking of individuals. It models aircraft, vessels, satellites, and infrastructure, not people, and every data source is public and documented in the repo's `DATA_SOURCES.md`. The README is also blunt about the data's limits: "data may be delayed, incomplete, modeled, inferred, or wrong," and it explicitly says not to use this for navigation, emergency response, or anything safety-critical. It's a demo of what's possible when you fuse open data feeds, not an operations tool.

## Running it costs less than the name suggests

For something that looks like classified software, the actual bill is small. Node 24.14.x or 26.x is required (the version is pinned in `package.json`), and setup is three commands:

```bash
git clone https://github.com/bilawalsidhu/gods-eye-view
cd gods-eye-view
cp .env.example .env   # add GOOGLE_MAPS_API_KEY
npm install
npm run dev -- --host localhost --port 4173
```

That starts the dev server at `http://localhost:4173`, with a cold start the project's own benchmarks put at around 1.9 seconds. Most of the interesting layers, flights, satellites, earthquakes, radio stations, cost nothing and need no signup at all. Ships (AISStream), fires (NASA FIRMS), and real traffic (TomTom) need a free API key each, but none of them charge for the tiers this project uses.

The two layers that do cost money are the ones doing the heaviest lifting. Google's Photorealistic 3D Tiles API bills at <a href="https://developers.google.com/maps/documentation/tile/usage-and-billing" target="_blank">$6.00 per 1,000 sessions</a> after a free allowance of 1,000 sessions a month, where one "session" covers up to three hours of browsing before it counts as a new one. OpenAI's Realtime API for voice control is metered too, but the app caps each session at $5 of usage so a mic left open by accident can't run up a real bill. For a single person poking around their own globe, both of those free tiers go a long way.

## Why the README tells you not to just open your router

The thing that makes this project worth a second look, beyond the neat visuals, is that it doesn't pretend the security question away. Buried in the setup docs is a specific warning: running with `--host 0.0.0.0` so other devices on your Wi-Fi can reach the dev server also puts your `.env` keys within reach of anything else on that network, since Vite's dev server has no built-in access control. The project's own answer is a client-side proxy that keeps the riskier keys, OpenAI, AISStream, FIRMS, TomTom, on the server side and only ever ships the Google Maps and Cesium Ion keys to the browser. That's a sane default, but it only protects you from a stranger reading your `.env` file over the wire; it doesn't change the fact that `--host 0.0.0.0` opens a plain HTTP port to your entire local network, trusted or not.

There's a second, more concrete reason LAN sharing falls short here, and it has nothing to do with the API keys: browsers only grant microphone access to a <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts" target="_blank">secure context</a>, meaning HTTPS or `localhost`. Voice control is one of the more fun parts of this project, but the moment you hand someone a plain `http://192.168.1.x:4173` LAN address, Chrome refuses `getUserMedia` on it and the mic button just does nothing. Wiring up HTTPS locally for a Vite dev server means generating a certificate, trusting it in a browser, and doing it again on every device that connects, for a demo you're probably running for ten minutes.

{{< image "gods_eye_view_pinggy/gods_eye_view_pinggy_tunnel_diagram.webp" "Diagram showing a local Vite dev server for God's Eye View at localhost:4173 tunneled through Pinggy to a public HTTPS URL, reachable by a friend, a phone off Wi-Fi, or a screen share" >}}

A Pinggy tunnel sidesteps both problems without touching the app's code. From a second terminal, with the dev server still running:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:4173 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:4173 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:4173 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:4173 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:4173 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:4173 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:4173 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:4173 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints back a public URL like `https://abc123.a.pinggy.link`, already on HTTPS, that tunnels straight to the dev server on your machine. That URL works from your phone on cellular data, from a friend's laptop on a different continent, or in a screen-share where you just paste a link instead of walking someone through a router's port-forwarding page, and because it's a real secure context, the voice control mic prompt works exactly like it does on `localhost`. Since the app still ships the Google Maps key to whichever browser loads the page, the sane move for anything beyond a quick demo is to keep the tunnel open only while you're actively sharing it and to layer on Pinggy's basic auth for longer sessions:

```bash
ssh -p 443 -R0:localhost:4173 a.pinggy.io -t "b:reviewer:temporarypass"
```

That way a scraped or forwarded link isn't enough on its own, and closing the SSH session takes the whole thing offline the moment you're done, instead of leaving a port sitting open on your router.

## Good for a demo, not a deployment

**Good for:** showing someone the globe live instead of sending a screen recording, pulling it up on your own phone when you're away from your desk, or running a walkthrough on a call without asking anyone to install Node and clone a repo first. The tunnel is disposable by design, one command starts it and closing the terminal ends it.

**Not good for:** leaving running indefinitely as a public service. There's no login system, no per-user rate limiting beyond what the project's own budget-governed proxy applies, and a metered Google Maps key sitting behind a public link is a bill waiting to happen if the link gets passed around further than you intended. Treat it the same way you'd treat any other dev server you didn't build for multi-tenant use: on for as long as you're actually showing it to someone, off right after.

## Conclusion

What makes God's Eye View worth running yourself, rather than just watching the video, is that all the "how does this even work" questions are answered by reading the source: a handful of public flight, ship, and satellite tracking APIs, glued together behind one photorealistic globe instead of scattered across a dozen bookmark-tab trackers. Getting it onto your own machine takes three commands and a Google Maps key with a thousand free sessions a month. Getting it in front of someone else who isn't standing behind you, mic access included, takes one more: a Pinggy tunnel pointed at the same port. If exposing local dev servers like this is a pattern you run into often, our guide on {{< link href="/blog/how_to_share_a_svelte_app_from_localhost/" newtab=false >}}sharing a Svelte app from localhost{{< /link >}} covers the same trick for a more typical frontend stack.
