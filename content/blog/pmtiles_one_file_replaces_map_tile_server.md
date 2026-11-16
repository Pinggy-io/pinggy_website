---
title: "PMTiles: How One 139 GB File Replaces a Map Tile Server"
description: "PMTiles packs a whole OpenStreetMap basemap into one file that browsers read with HTTP Range requests. We fetch a Lisbon tile by hand in 3 requests, cut a 12 MB city extract, and render it with MapLibre."
date: 2026-11-16T10:00:00+05:30
lastmod: 2026-11-16T10:00:00+05:30
draft: false
tags: ["Protomaps", "self-hosted", "open source", "http", "web development"]
og_image: "images/pmtiles_one_file_replaces_map_tile_server/pmtiles_one_file_replaces_map_tile_server_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlBNVGlsZXM6IEhvdyBPbmUgMTM5IEdCIEZpbGUgUmVwbGFjZXMgYSBNYXAgVGlsZSBTZXJ2ZXIiLAogICJkZXNjcmlwdGlvbiI6ICJQTVRpbGVzIHBhY2tzIGEgd2hvbGUgT3BlblN0cmVldE1hcCBiYXNlbWFwIGludG8gb25lIGZpbGUgdGhhdCBicm93c2VycyByZWFkIHdpdGggSFRUUCBSYW5nZSByZXF1ZXN0cy4gV2UgZmV0Y2ggYSBMaXNib24gdGlsZSBieSBoYW5kIGluIDMgcmVxdWVzdHMsIGN1dCBhIDEyIE1CIGNpdHkgZXh0cmFjdCwgYW5kIHJlbmRlciBpdCB3aXRoIE1hcExpYnJlLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9wbXRpbGVzX29uZV9maWxlX3JlcGxhY2VzX21hcF90aWxlX3NlcnZlci9wbXRpbGVzX29uZV9maWxlX3JlcGxhY2VzX21hcF90aWxlX3NlcnZlcl9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTE2VDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMTZUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9wbXRpbGVzX29uZV9maWxlX3JlcGxhY2VzX21hcF90aWxlX3NlcnZlci8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIlNlbGYtaG9zdGluZyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiUE1UaWxlcywgUHJvdG9tYXBzLCBzZWxmLWhvc3RlZCBtYXBzLCBzZWxmLWhvc3QgbWFwIHRpbGVzLCBIVFRQIFJhbmdlIHJlcXVlc3RzLCBNYXBMaWJyZSBHTCBKUywgT3BlblN0cmVldE1hcCB2ZWN0b3IgdGlsZXMsIHBtdGlsZXMgZXh0cmFjdCwgTWFwYm94IGFsdGVybmF0aXZlIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBNVGlsZXMiLCAiZGVzY3JpcHRpb24iOiAiQSBzaW5nbGUtZmlsZSBhcmNoaXZlIGZvcm1hdCBmb3IgbWFwIHRpbGVzLCByZWFkIHJlbW90ZWx5IHdpdGggSFRUUCBSYW5nZSByZXF1ZXN0cy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlByb3RvbWFwcyIsICJkZXNjcmlwdGlvbiI6ICJBbiBvcGVuIHNvdXJjZSBwcm9qZWN0IHRoYXQgcHVibGlzaGVzIGEgZGFpbHkgT3BlblN0cmVldE1hcCB2ZWN0b3IgYmFzZW1hcCBhcyBvbmUgUE1UaWxlcyBmaWxlLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiSFRUUCBSYW5nZSByZXF1ZXN0cyIsICJkZXNjcmlwdGlvbiI6ICJSZXF1ZXN0cyB0aGF0IGFzayBhIHNlcnZlciBmb3IgYSBieXRlIHJhbmdlIG9mIGEgZmlsZSBpbnN0ZWFkIG9mIHRoZSB3aG9sZSBmaWxlLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTWFwTGlicmUgR0wgSlMiLCAiZGVzY3JpcHRpb24iOiAiQW4gb3BlbiBzb3VyY2UgV2ViR0wgbWFwIHJlbmRlcmVyIHRoYXQgY2FuIHJlYWQgUE1UaWxlcyB0aHJvdWdoIGEgcHJvdG9jb2wgcGx1Z2luLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiSGlsYmVydCBjdXJ2ZSIsICJkZXNjcmlwdGlvbiI6ICJBIHNwYWNlLWZpbGxpbmcgY3VydmUgUE1UaWxlcyB1c2VzIHRvIG51bWJlciB0aWxlcyBzbyB0aGF0IG5laWdoYm91cmluZyB0aWxlcyBzaXQgbmVhciBlYWNoIG90aGVyIGluIHRoZSBmaWxlLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "pmtiles_one_file_replaces_map_tile_server/pmtiles_one_file_replaces_map_tile_server_banner.webp" "Banner reading One 139 GB file, no tile server, with a list of three HTTP Range requests beside a MapLibre map of Lisbon" >}}

`curl -s -r 0-6 https://build.protomaps.com/20261116.pmtiles` prints `PMTiles`. Those seven bytes are the start of a 139,535,414,652-byte file that holds a vector map of the whole planet, built from OpenStreetMap, zoom levels 0 to 15. Getting one tile of Lisbon out of it took me three HTTP requests and 170 KB. No tile server, no database, no API key: a static file on a host that understands the `Range` header.

That's the trick behind {{< link href="https://protomaps.com/" >}}Protomaps{{< /link >}} and its {{< link href="https://docs.protomaps.com/pmtiles/" >}}PMTiles{{< /link >}} format. This post takes the file apart, fetches a tile by hand with `curl`, then cuts out a city and renders it in a browser.

{{% tldr %}}

1. **PMTiles is one file, read in pieces.** A browser pulls tiles out of it with HTTP `Range` requests, so any static host or bucket that supports ranges can serve a map.
2. **The first tile costs 3 requests, every later one costs 1.** Header and root directory (16 KB), one leaf directory (108 KB), then the tile itself. The first two are cached.
3. **You rarely need the whole planet.** The tiles covering Lisbon at zooms 0 to 15 are 355 tiles and 12.3 MB. `pmtiles extract` cuts that out of the remote file without downloading the rest.
4. **A real page view is small.** MapLibre showing Lisbon at zoom 12 in a 1280x720 window made 10 requests for 820 KB against the city file.
5. **What you give up:** the file is read-only, it's tiles only (no search, no routing), and you pay for your own bandwidth.

{{% /tldr %}}

## What a map tile server usually does

A web map is a pyramid of square tiles. Zoom 0 is one tile for the world, and each level splits every tile in four, so zoom 15 has about a billion. The map library asks for them by address: `/{z}/{x}/{y}`.

Traditionally something has to answer those addresses. Either a server process reads tiles out of a database (MBTiles is SQLite, for instance), or you upload every tile as its own object. The Protomaps docs put a number on the second option: a global pyramid is around 300 million files, which {{< link href="https://docs.protomaps.com/pmtiles/" >}}could cost 1,500 USD in request fees{{< /link >}} and take days to upload. Or you skip all of it and pay a maps API per load.

PMTiles moves the lookup into the client. The file carries its own index, and teh browser reads the index first, then asks for exactly the bytes of the tile it wants.

## What's inside the 139.5 GB planet file

Protomaps publishes a {{< link href="https://maps.protomaps.com/builds/" >}}daily build{{< /link >}} of its basemap. I used the November 16, 2026 one, `20261116.pmtiles`, basemap version 4.15.2. The first 127 bytes are a fixed header of offsets and counts. Decoded:

| Section | Starts at byte | Size |
|---|---|---|
| Header | 0 | 127 bytes |
| Root directory (gzip) | 127 | 15,562 bytes |
| Tile data | 16,384 | 139.18 GB |
| Metadata (gzip JSON) | 139,181,664,736 | 1,179 bytes |
| Leaf directories | 139,181,665,915 | 353.7 MB |

{{< image "pmtiles_one_file_replaces_map_tile_server/pmtiles_planet_file_layout.webp" "The 139.5 GB PMTiles planet file drawn as one bar: a 127-byte header and 15.6 KB root directory in the first 16,384 bytes, then 139.18 GB of tile data, 1.2 KB of metadata and 353.7 MB of leaf directories" >}}

The {{< link href="https://github.com/protomaps/PMTiles/blob/main/spec/v3/spec.md" >}}v3 spec{{< /link >}} requires the header and root directory to fit in the first 16,384 bytes, so a reader always opens with the same request: bytes 0 to 16383.

Three counters in the header say a lot about why the file is "only" 139 GB:

- 1,431,655,765 tile addresses (every tile from zoom 0 to 15)
- 178,731,957 directory entries
- 136,809,476 distinct tile contents

Fewer than one address in ten has its own bytes. Open ocean is the same blue tile millions of times over, so the directory stores it once and points a whole run of addresses at it.

## Fetching one Lisbon tile by hand

The worked example for the rest of this post is central Lisbon, around 38.7223, -9.1393. At zoom 12 that point falls in tile `12/1944/1569`.

Directories don't use z/x/y. Each tile gets a single integer, its tile ID, and a directory is a sorted list of `(tile ID, run length, offset, length)` entries. Tile `12/1944/1569` is ID 8,297,750 (more on that number in the next section). The lookup goes like this:

```bash
URL=https://build.protomaps.com/20261116.pmtiles

# 1. header + root directory: 16,384 bytes
curl -s -r 0-16383 $URL -o head.bin

# 2. the leaf directory that covers tile ID 8297750: 108,349 bytes
curl -s -r 139186085356-139186193704 $URL | gunzip > leaf.bin

# 3. the tile: 45,412 bytes gzipped, 63,511 as a vector tile
curl -s -r 9317194723-9317240134 $URL | gunzip > 12-1944-1569.mvt
```

The root directory of this build has 2,917 entries, and every one is a pointer to a leaf directory (a run length of 0 marks a pointer). A binary search for 8,297,750 picks the leaf; the leaf holds 61,279 entries, and one of them gives the tile's offset and length. Running `strings` over the result turns up `Lisboa`, `Rio Tejo`, `Almada` and `Santa Justa Lift`, so it's the right tile.

Total: 3 requests, 170,145 bytes, out of a 139.5 GB file. The offsets above are specific to the November 16 build, and the builds bucket only keeps a week of dailies, so treat steps 2 and 3 as a transcript. Step 1 works on any build.

{{< image "pmtiles_one_file_replaces_map_tile_server/pmtiles_three_range_requests.webp" "Sequence of three HTTP Range requests from a browser to planet.pmtiles: header and root directory (16 KB), leaf directory (108 KB), then the Lisbon tile (45 KB)" >}}

A client keeps the header and directories in memory. The leaf that covers one tile of Lisbon covers its neighbours too, so panning around costs one request per tile, same as a normal tile server.

## Why tile IDs follow a Hilbert curve

The tile ID is what makes the single-file layout work well over a network. IDs count along a {{< link href="https://en.wikipedia.org/wiki/Hilbert_curve" >}}Hilbert curve{{< /link >}}, one zoom level after another: zoom 0 is ID 0, zoom 1 is IDs 1 to 4, zoom 2 is 5 to 20, and so on. Zoom 12 starts at 5,592,405.

A Hilbert curve visits every cell of a grid without ever jumping: consecutive IDs are always adjacent tiles. Tile data is written in ID order (the spec calls such a file "clustered"), so tiles that are neighbours on the map tend to be neighbours on disk.

{{< image "pmtiles_one_file_replaces_map_tile_server/pmtiles_hilbert_tile_ids.webp" "A 4x4 grid of zoom 2 tiles labelled with PMTiles tile IDs 5 to 20 along a Hilbert curve, next to the same IDs in file order, with tiles 5 to 8 highlighted in both" >}}

Two things fall out of that. Runs of identical tiles (that ocean again) collapse into one entry with a run length. And cutting a region out of a remote file needs a handful of large range requests instead of thousands of tiny ones, because a city's tiles sit in a few contiguous stretches. In the leaf I fetched, 35,074 of the 61,279 entries store their offset as a single zero byte meaning "right after the previous tile".

## Cutting your city out of the planet

You can host all 139.5 GB, and at object storage prices that's cheap. But most projects cover one city or one country, and the planet file can be sliced remotely.

The tool is the {{< link href="https://docs.protomaps.com/pmtiles/cli" >}}pmtiles CLI{{< /link >}}, a single Go binary (v1.31.2 as of November 2026). For Lisbon:

```bash
pmtiles extract https://build.protomaps.com/20261116.pmtiles lisbon.pmtiles \
  --bbox=-9.25,38.68,-9.08,38.80
```

A caveat before the numbers: I couldn't run the Go binary in the sandbox this post was written in, so that command comes from the docs and the flag definitions in the v1.31.2 source, not from my terminal. What I did instead was walk the directories with a short Python script for the same bounding box and pull the same tiles with range requests. That box touches 355 tiles across zooms 0 to 15 (240 of them at zoom 15), 341 distinct, 12,291,044 bytes of tile data. The archive I assembled from them is 12,293,415 bytes, so expect `pmtiles extract` to hand you a file of about 12 MB. It has a `--dry-run` flag that reports the tile count without downloading, and `--maxzoom` if you don't need street-level detail; each zoom level you drop roughly halves the file.

## Rendering it with MapLibre

Put `lisbon.pmtiles` in a folder with this `index.html`. {{< link href="https://maplibre.org/maplibre-gl-js/docs/" >}}MapLibre GL JS{{< /link >}} draws the map, the `pmtiles` package teaches it the `pmtiles://` protocol, and `@protomaps/basemaps` generates the style layers:

```html
<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@6.18.0/dist/maplibre-gl.css">
<script src="https://unpkg.com/pmtiles@4.5.0/dist/pmtiles.js"></script>
<script src="https://unpkg.com/@protomaps/basemaps@5.7.2/dist/basemaps.js"></script>
<style>html, body, #map { margin: 0; height: 100%; }</style>
<div id="map"></div>
<script type="module">
  import * as maplibregl from "https://unpkg.com/maplibre-gl@6.18.0/dist/maplibre-gl.mjs";
  maplibregl.addProtocol("pmtiles", new pmtiles.Protocol().tile);
  const map = new maplibregl.Map({
    container: "map",
    center: [-9.1393, 38.7223],
    zoom: 12,
    style: {
      version: 8,
      glyphs: "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
      sprite: "https://protomaps.github.io/basemaps-assets/sprites/v4/light",
      sources: {
        protomaps: {
          type: "vector",
          url: "pmtiles://" + location.origin + "/lisbon.pmtiles",
          attribution: '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>'
        }
      },
      layers: basemaps.layers("protomaps", basemaps.namedFlavor("light"), { lang: "en" })
    }
  });
</script>
```

One thing that cost me ten minutes: MapLibre GL JS 6 ships ES modules only. The `dist/maplibre-gl.js` path that every older tutorial uses returns a 404 on 6.18.0, and the `.mjs` build has no default export, hence `import * as maplibregl`. If you'd rather keep a plain `<script>` tag, pin `maplibre-gl@5.24.1`.

Any static server that handles `Range` will do for local testing. The docs suggest `http-server` from npm:

```bash
npx http-server . --cors -p 8080
```

Open `http://localhost:8080` and Lisbon shows up.

{{< image "pmtiles_one_file_replaces_map_tile_server/pmtiles_lisbon_maplibre.webp" "Browser view of central Lisbon at zoom 12 in the Protomaps light style, rendered by MapLibre GL JS from a local lisbon.pmtiles file" >}}

*Lisbon at zoom 12, drawn by MapLibre GL JS from the 12.3 MB lisbon.pmtiles. Screenshot: localhost:8080, November 2026. Map data © {{< link href="https://www.openstreetmap.org/copyright" >}}OpenStreetMap{{< /link >}} contributors.*

I logged the requests headless Chromium made for this page in a 1280x720 window. Against the city file: 10 requests, 820,314 bytes. That's the 16 KB header and 9 tiles, with no directory fetch at all, because a 355-tile archive fits its whole index in the root. Jumping to zoom 15 took 8 more requests and 745 KB. The same view against the full planet build took 14 requests and 1.06 MB: header, one leaf directory, 12 tiles. The 139 GB file is not meaningfully slower to recieve tiles from than the 12 MB one; it costs one extra round trip on the first view.

You can't point a browser straight at `build.protomaps.com`, by the way. That bucket sends no `Access-Control-Allow-Origin` header, so `fetch` from another origin is blocked, and the docs ask you not to hotlink it anyway. Copy the file to storage you control.

## Showing the map to someone else

While the map is still an `index.html` and a `.pmtiles` file on your laptop, a tunnel is the quickest way to check it on a phone or send it to a teammate, before you pick a bucket. With `http-server` running on 8080:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

[Pinggy](https://pinggy.io) prints a public HTTPS URL of the form `https://xxxx.run.pinggy-free.link` that forwards to port 8080. The page builds the tile URL from `location.origin`, so it keeps working under the new hostname. I had no SSH client in the same sandbox, so this step is untested for this post; the thing to verify is that ranges survive the trip, and `curl -s -r 0-6 https://xxxx.run.pinggy-free.link/lisbon.pmtiles` should print `PMTiles` and nothing more. Free tunnels last 60 minutes and get a new URL each time, which is fine for a look and wrong for production.

## Where to host it, and what it costs

For real traffic the file goes on object storage or a CDN that caches range requests. Storage is the easy part. {{< link href="https://developers.cloudflare.com/r2/pricing/" >}}Cloudflare R2{{< /link >}} lists $0.015 per GB-month with free egress, checked on November 16, 2026, which puts the whole planet at about $2.09 a month and the Lisbon extract inside the 10 GB free tier. R2 bills reads at $0.36 per million after the first 10 million a month, and at 10 to 14 requests per first view that free allowance is somewhere around 700,000 map loads. On a host that charges for egress instead, budget roughly 1 MB per first view.

The tradeoffs are real, though:

- **Read-only.** You can't patch a PMTiles file. A new OpenStreetMap edit reaches your map when you download a newer build and replace the file.
- **Tiles only.** No geocoding, no routing, no place search. Those are separate services, and they're the hard ones to self-host.
- **Fonts and icons live elsewhere.** The style above loads glyphs and sprites from `protomaps.github.io`. For a fully self-hosted or offline map, download them from the {{< link href="https://github.com/protomaps/basemaps-assets" >}}basemaps-assets{{< /link >}} repo.
- **Your bandwidth, your problem.** Nothing stops a stranger from downloading the whole file. On metered egress, cap the response size or rate limit large ranges at the CDN.
- **Attribution is required.** The basemap is an ODbL Produced Work, so the OpenStreetMap credit stays on the map.

## Try it yourself

Start with the seven bytes: `curl -s -r 0-6 https://build.protomaps.com/20261116.pmtiles` (swap in the newest name from the builds page). Then drop a `.pmtiles` file or its URL into {{< link href="https://pmtiles.io/" >}}pmtiles.io{{< /link >}}, the hosted viewer, and open your browser's network tab. Every tile you pan to is one `206 Partial Content` response with a `Content-Range` header. The entire protocol is visible right there.
