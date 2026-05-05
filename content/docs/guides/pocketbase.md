---
 title: "Expose a PocketBase backend"
 description: "Share a locally running PocketBase instance with mobile clients, teammates, or webhook providers using a Pinggy HTTP tunnel."
 date: 2026-05-05T14:15:25+05:30
 draft: false
---

# Expose a PocketBase backend through Pinggy

[PocketBase](https://pocketbase.io/) is a single-binary backend that bundles a SQLite database, a REST and realtime API, file storage, and an admin dashboard. It is a popular choice for prototypes and small apps because the entire backend ships as one executable. The only friction comes when a frontend running on another device - a phone simulator, a teammate's browser, an OAuth callback - needs to reach the PocketBase instance you started on `127.0.0.1:8090`.

Pinggy's HTTP tunnel forwards public HTTP/HTTPS traffic to that local port, so PocketBase becomes reachable without deploying it to a VPS first.

#### Step 1: Start PocketBase

Download the binary for your platform from the PocketBase site and launch it:

```bash
./pocketbase serve
```

The default address is `http://127.0.0.1:8090`. Visit `/_/` in a browser to set the admin credentials on first run.

#### Step 2: Open the tunnel

In a second terminal, run:

```bash
ssh -p 443 -R0:localhost:8090 free.pinggy.io
```

Pinggy emits an `https://...a.pinggy.link` URL. The admin UI is now reachable at `<url>/_/` and the REST API at `<url>/api/`.

#### Step 3: Bind PocketBase to all interfaces (optional)

By default PocketBase listens on `127.0.0.1`, which is fine when Pinggy and PocketBase run on the same host. If they run on different machines on your LAN, start PocketBase with an explicit bind:

```bash
./pocketbase serve --http=0.0.0.0:8090
```

Then point the tunnel at the LAN IP of the PocketBase host instead of `localhost`.

#### Step 4: Configure realtime and CORS

PocketBase's realtime subscriptions ride over Server-Sent Events (SSE), which works through Pinggy's HTTP tunnel without extra setup. If your frontend is hosted on a different origin, allow it in the admin dashboard under **Settings → Application → CORS** so browser fetches and EventSource connections succeed.

#### Step 5: Pin the URL for OAuth and webhooks

OAuth providers and webhook senders require a stable callback URL. A free Pinggy tunnel reissues a new hostname on every reconnect; sign in to [the dashboard](https://dashboard.pinggy.io) and configure a [persistent subdomain](/docs/persistent_subdomain/) or [custom domain](/docs/custom_domain/) so the same URL keeps working across restarts.
