---
title: "Val Town Is Shutting Down: How to Move Your Vals Before January 10"
description: "Val Town goes read-only on December 10, 2026 and stops running vals on January 10, 2027. How to export a val, swap std/sqlite and std/blob, rebuild HTTP, cron and email triggers, and keep val.run links and webhooks working."
date: 2026-11-11T18:00:00+05:30
lastmod: 2026-11-11T18:00:00+05:30
draft: false
tags: ["Val Town", "Deno", "webhook", "Cloudflare", "self-hosted"]
og_image: "images/val_town_shutting_down_migrate_vals/val_town_shutting_down_migrate_vals_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIG1pZ3JhdGUgdmFscyBvZmYgVmFsIFRvd24gYmVmb3JlIGl0IHNodXRzIGRvd24iLAogICJkZXNjcmlwdGlvbiI6ICJWYWwgVG93biBnb2VzIHJlYWQtb25seSBvbiBEZWNlbWJlciAxMCwgMjAyNiBhbmQgc3RvcHMgcnVubmluZyB2YWxzIG9uIEphbnVhcnkgMTAsIDIwMjcuIEhvdyB0byBleHBvcnQgYSB2YWwsIHN3YXAgc3RkL3NxbGl0ZSBhbmQgc3RkL2Jsb2IsIHJlYnVpbGQgSFRUUCwgY3JvbiBhbmQgZW1haWwgdHJpZ2dlcnMsIGFuZCBrZWVwIHZhbC5ydW4gbGlua3MgYW5kIHdlYmhvb2tzIHdvcmtpbmcuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3ZhbF90b3duX3NodXR0aW5nX2Rvd25fbWlncmF0ZV92YWxzL3ZhbF90b3duX3NodXR0aW5nX2Rvd25fbWlncmF0ZV92YWxzX2Jhbm5lci53ZWJwIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTExVDE4OjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMTFUMTg6MDA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiQ2xvbmUgeW91ciB2YWxzIHdpdGggdnQiLCAidGV4dCI6ICJJbnN0YWxsIHRoZSBWYWwgVG93biBDTEkgd2l0aCBkZW5vIGluc3RhbGwgLWdyQWYganNyOkB2YWx0b3duL3Z0LCBhdXRoZW50aWNhdGUgd2l0aCBhbiBBUEkga2V5LCBydW4gdnQgbGlzdCBhbmQgdGhlbiB2dCBjbG9uZSBmb3IgZWFjaCB2YWwgeW91IHdhbnQgdG8ga2VlcC4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJSZXBsYWNlIGVzbS50b3duIGltcG9ydHMiLCAidGV4dCI6ICJUdXJuIG5wbSBhbmQgQ0ROIGltcG9ydHMgaW50byBwYWNrYWdlLmpzb24gZGVwZW5kZW5jaWVzLCBjb3B5IGltcG9ydGVkIHZhbHMgaW50byB0aGUgcHJvamVjdCwgYW5kIHN3YXAgc3RkL3NxbGl0ZSwgc3RkL2Jsb2IgYW5kIHN0ZC9lbWFpbCBmb3IgdGhlIGRlc3RpbmF0aW9uJ3MgZGF0YWJhc2UsIHN0b3JhZ2UgYW5kIGVtYWlsIHNlcnZpY2VzLiBSZXBsYWNlIERlbm8uZW52LmdldCB3aXRoIHByb2Nlc3MuZW52LiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkV4cG9ydCBTUUxpdGUgYmVmb3JlIERlY2VtYmVyIDEwIiwgInRleHQiOiAiQWRkIGEgdGVtcG9yYXJ5IEhUVFAgdmFsIHByb3RlY3RlZCBieSBhIFNRTElURV9FWFBPUlRfVE9LRU4gYmVhcmVyIHRva2VuIHRoYXQgc3RyZWFtcyBhIFNRTCBkdW1wLCBkb3dubG9hZCBpdCB3aXRoIGN1cmwsIGxvYWQgaXQgd2l0aCBzcWxpdGUzIGFuZCBjb21wYXJlIHJvdyBjb3VudHMuIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9TdGVwIiwgIm5hbWUiOiAiTW92ZSBjcm9uIGpvYnMiLCAidGV4dCI6ICJTdG9yZSBsYXN0UnVuQXQgeW91cnNlbGYsIHNjaGVkdWxlIHRoZSBqb2Igd2l0aCBjcm9udGFiIG9yIGEgQ2xvdWRmbGFyZSBDcm9uIFRyaWdnZXIgaW4gVVRDLCBhbmQgZGlzYWJsZSB0aGUgVmFsIFRvd24gc2NoZWR1bGUgYmVmb3JlIGVuYWJsaW5nIHRoZSBuZXcgb25lLiIgfSwKICAgIHsgIkB0eXBlIjogIkhvd1RvU3RlcCIsICJuYW1lIjogIkV4cG9zZSBhIHNlbGYtaG9zdGVkIEhUVFAgdmFsIiwgInRleHQiOiAiUnVuIHRoZSBoYW5kbGVyIG9uIEJ1biBvciBOb2RlIG9uIHBvcnQgODc4NyBhbmQgc3RhcnQgYSB0dW5uZWwgd2l0aCBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODc4NyBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIGZvciB3ZWJob29rcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJIb3dUb1N0ZXAiLCAibmFtZSI6ICJVcGRhdGUgd2ViaG9va3MgYW5kIHNldCByZWRpcmVjdHMiLCAidGV4dCI6ICJDaGFuZ2Ugd2ViaG9vayBVUkxzIGF0IEdpdEh1YiwgU3RyaXBlIG9yIFNsYWNrIGRpcmVjdGx5LCB0aGVuIHNldCB2YWwucnVuIHJlZGlyZWN0cyB0byBmaW5hbCBzdGFibGUgVVJMcyBiZWZvcmUgdGhleSBiZWNvbWUgcGVybWFuZW50IG9uIERlY2VtYmVyIDEwLCAyMDI2LiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "val_town_shutting_down_migrate_vals/val_town_shutting_down_migrate_vals_banner.webp" "Move your vals off Val Town: signups closed Nov 10, code read-only Dec 10, vals stop running Jan 10, 2027" >}}

On November 10, 2026, Steve Krouse announced that Val Town is winding down. Signups closed that day. On **December 10, 2026** your code becomes read-only, and on **January 10, 2027** vals stop running. The platform will be open-sourced on February 1, 2027, three weeks after the last val goes dark. If you have a webhook handler, a cron job or a little SQLite-backed app on `*.val.run`, you have about eight weeks to move it, and only four of them with an editable account.

The good news is that a val is a small thing. It's a Deno TypeScript file with a trigger attached, plus maybe a SQLite database and some blob keys. I took a typical one, a GitHub star webhook that writes to `std/sqlite` and an hourly digest cron, and moved it to Bun on my own machine. The handler body barely changed. What took the time was the stuff around it: the `esm.town` imports, the data, the schedule, and the URL GitHub was posting to.

{{% tldr %}}
1. **Three dates** - signups closed November 10, code goes **read-only on December 10, 2026** (redirects lock then too), and **vals stop on January 10, 2027**. Source code is promised as open source on February 1, 2027.
2. **Don't land on Deno** - Val Town runs on Deno, and the Deno team <a href="https://deno.com/blog/cloudflare" target="_blank">joined Cloudflare</a> with runtime support ending around October 2027. Val Town's own guide recomends Node, Bun, Workers or Vercel Functions.
3. **The code is the easy part** - an HTTP val is already a web-standard `(req: Request) => Response` function. The work is replacing `esm.town/v/std/*` imports and exporting your data while you still can.
4. **Redirects don't save webhooks** - `val.run` redirects become permanent on December 10, but many webhook senders don't follow redirects. **Update the URL at GitHub, Stripe or Slack directly.**
5. **Cloudflare is the closest match** for the full feature set; a box at home plus a tunnel is the cheapest home for small personal vals.
{{% /tldr %}}

## What happens on each date

The <a href="https://blog.val.town/winding-down" target="_blank">wind-down post</a> lays out four dates. The <a href="https://docs.val.town/migration/redirects" target="_blank">redirects page</a> adds a fifth detail that's easy to miss.

| Date | What stops |
|---|---|
| November 10, 2026 | New signups and plan upgrades. Billing is paused; existing subscriptions keep running for free, and annual plans get a partial refund. |
| December 10, 2026 | Code becomes read-only. SQLite and blob storage are explicitly *not* included, so the data stays writable. Redirects you've set become permanent and can no longer be edited. |
| January 10, 2027 | All other services. HTTP, cron and email triggers stop. |
| February 1, 2027 | Val Town is open-sourced. |

December 10 is the date to plan around. After it you can still read your code and pull your data, but you can't add a temporary export endpoint, fix a bug, or point a `val.run` URL somewhere new. Anything that needs a code change on the Val Town side, and the SQLite export below does, has to happen before then.

{{< image "val_town_shutting_down_migrate_vals/val_town_shutdown_timeline.webp" "Timeline of the Val Town shutdown from November 2026 to October 2027, with the edit window from Nov 10 to Dec 10 and the read-only month before vals stop on Jan 10" >}}

*Code edits and redirect changes stop a month before the vals do. Data: {{< link href="https://blog.val.town/winding-down" >}}Val Town wind-down post{{< /link >}} and {{< link href="https://docs.val.town/migration" >}}migration guide{{< /link >}}, November 2026.*

## What a val actually is

If you've never used it: Val Town hosts small TypeScript programs called vals and runs them on Deno (2.9.6 per the <a href="https://docs.val.town/reference/runtime" target="_blank">runtime page</a>, with no filesystem access). Each file can carry a trigger:

- **HTTP** - the file's default export takes a `Request` and returns a `Response`, served at a `*.val.run` URL.
- **Cron** - the export recieves an `Interval` object (`lastRunAt` and friends). Schedules run in UTC, at most every 15 minutes on Free or every minute on Pro.
- **Email** - the export gets an `Email` with `from`, `subject`, `text`, `html` and `attachments`, sent to an `@valtown.email` address.

Around that sit a few standard libraries imported straight from `esm.town`: `std/sqlite` (a per-val database on Turso, 10 MB free and up to 1 GB paid), `std/blob` (key-value object storage), `std/email` and `std/openai`. Older vals use the account-global versions of SQLite and blob storage. Those are different stores, so check which import your code uses before you export anything.

My example is two files. `stars.ts` is an HTTP val that GitHub calls on every star event:

```ts
import { sqlite } from "https://esm.town/v/std/sqlite/main.ts";

export default async function (req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("ok");
  const e = await req.json();
  await sqlite.execute({
    sql: "INSERT INTO stars VALUES (?, ?, ?, ?)",
    args: [e.repository.full_name, e.sender.login, e.action, new Date().toISOString()],
  });
  return Response.json({ ok: true });
}
```

And `digest.ts` is an hourly cron that posts a count of new stars to a Discord webhook, using `interval.lastRunAt` to know where it left off. Each piece of that maps to something on the destination, and the mapping is the whole migration.

{{< image "val_town_shutting_down_migrate_vals/val_town_features_to_replacements.webp" "Table mapping Val Town HTTP, cron, email, SQLite and blob features to Cloudflare Workers, Cron Triggers, Email Workers, D1 and R2, and to Bun.serve, crontab, an inbound email webhook, bun:sqlite and local disk on your own server" >}}

*Email is the one feature that needs a domain you control. Based on Val Town's {{< link href="https://docs.val.town/migration/where-to-migrate" >}}where-to-migrate guide{{< /link >}}.*

## Get the code out with vt

The official CLI, <a href="https://github.com/val-town/vt" target="_blank">vt</a> (0.1.43 at the time of writing), clones a val to a local folder. It's built on Deno, so install Deno first, then:

```bash
deno install -grAf jsr:@valtown/vt
vt            # first run asks for an API key from val.town/settings/api
vt list       # every val you own
vt clone you/stars
```

The key needs user read and val read+write. You'll get a folder with your files, a `.vt` metadata directory and a `deno.json`. Do this for every val you care about this week, even the ones you plan to drop. A read-only copy on Val Town disappears on January 10; a local folder doesn't. Val Town also ships an MCP server and an agent plugin, and the <a href="https://docs.val.town/migration" target="_blank">migration guide</a> includes a prompt that has an agent inventory your vals and propose a plan. That's handy if you have fifty vals. With three, `vt` is faster.

Before you commit the folder to Git, grep it. Env var values, `.env` files and SQL exports don't belong in the repo, and ignoring them after the first commit doesn't take them out of history.

## Replace the esm.town imports

Every `https://esm.town/v/...` import is a dependency on Val Town's servers, so each one has to go:

- `npm:` imports and package CDN URLs become normal `package.json` dependencies, at the same versions.
- Other people's vals imported from `esm.town` get copied into the project as local files, with their licence.
- `std/sqlite`, `std/blob` and `std/email` get swapped for whatever the destination offers.
- `Deno.env.get(...)` and other `Deno.*` calls become `process.env` or web APIs.

Here is `stars.ts` after the move, running on Bun 1.4.4 with `bun:sqlite`. I also added the signature check the original skipped, since GitHub signs every delivery with your webhook secret in `X-Hub-Signature-256`:

```ts
import { Database } from "bun:sqlite";
import { createHmac, timingSafeEqual } from "node:crypto";

const db = new Database("stars.db");
db.run("CREATE TABLE IF NOT EXISTS stars (repo TEXT, user TEXT, action TEXT, at TEXT)");
const secret = process.env.GITHUB_WEBHOOK_SECRET!;

async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("ok");
  const body = await req.text();
  const want = Buffer.from("sha256=" + createHmac("sha256", secret).update(body).digest("hex"));
  const got = Buffer.from(req.headers.get("x-hub-signature-256") ?? "");
  if (got.length !== want.length || !timingSafeEqual(got, want)) {
    return new Response("bad signature", { status: 401 });
  }
  const e = JSON.parse(body);
  db.run("INSERT INTO stars VALUES (?, ?, ?, ?)",
    [e.repository.full_name, e.sender.login, e.action, new Date().toISOString()]);
  return Response.json({ ok: true });
}

export default { port: 8787, fetch: handler };
```

The `handler` function is the same shape Val Town used, which is why HTTP vals port so cleanly. On Cloudflare the same function goes in a Worker's `fetch(request, env, ctx)` and the database becomes a D1 binding. On Node 22 you'd use `node:sqlite` and wrap the handler with `@hono/node-server`. Testing it locally with a signed fake event:

```bash
$ GITHUB_WEBHOOK_SECRET=test123 bun stars.ts &
Started development server: http://localhost:8787

$ BODY='{"action":"created","repository":{"full_name":"you/project"},"sender":{"login":"octocat"}}'
$ SIG="sha256=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac test123 | awk '{print $2}')"
$ curl -s -X POST localhost:8787 -H "X-Hub-Signature-256: $SIG" -d "$BODY"
{"ok":true}
$ curl -s -X POST localhost:8787 -H "X-Hub-Signature-256: sha256=nope" -d "$BODY" -w ' %{http_code}\n'
bad signature 401
```

## Export SQLite before December 10

This is the step with a deadline inside the deadline. Val Town's SQLite lives on Turso behind `std/sqlite`, and there is no download button. The <a href="https://docs.val.town/migration/cloudflare/migrate-sqlite" target="_blank">official approach</a> is to add a temporary HTTP val that streams a SQL dump of the tables you name, gated by a bearer token you store as `SQLITE_EXPORT_TOKEN`. Their script is about 80 lines. It handles indexes, triggers, `AUTOINCREMENT` counters and int64 values, and refuses FTS virtual tables, which need their own plan. Copy it from the docs rather than writing your own.

Adding that val is a code change, so it has to happen before December 10. The data itself stays writable after that date (the read-only freeze explicitly excludes SQLite and blob storage), but you won't be able to create the endpoint that reads it. Pause any cron that writes to those tables, then pull the dump and load it:

```bash
curl -H "Authorization: Bearer $SQLITE_EXPORT_TOKEN" \
  https://<your-export-val>.val.run -o stars.sql
sqlite3 stars.db < stars.sql
sqlite3 stars.db "SELECT count(*) FROM stars"
```

Compare that count with the one Val Town's SQLite admin panel shows. The dump is your data in plain text, so keep it out of Git and out of chat windows. Delete the export val once you're done.

Blobs follow the same pattern: list keys with `blob.list()` (it takes a prefix), copy the bytes rather than the URLs, and keep content types. Scoped blob storage sits on S3 and the legacy global store on R2, and you have to export each one seperately.

## Move the cron

`digest.ts` read `interval.lastRunAt` from Val Town. Nobody passes that to you anymore, so the job stores it itself:

```ts
import { Database } from "bun:sqlite";

const db = new Database("stars.db");
db.run("CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT)");

// Val Town passed interval.lastRunAt; here we keep it ourselves.
const last = db.query("SELECT v FROM meta WHERE k = 'lastRunAt'").get() as { v: string } | null;
const since = last?.v ?? "1970-01-01T00:00:00Z";
const rows = db.query("SELECT repo, user FROM stars WHERE action = 'created' AND at > ?").all(since);

if (rows.length) {
  await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ content: `${rows.length} new stars since ${since}` }),
  });
}
db.run("INSERT OR REPLACE INTO meta VALUES ('lastRunAt', ?)", [new Date().toISOString()]);
console.log(`sent digest for ${rows.length} stars`);
```

Two runs in a row print `sent digest for 1 stars` and then `sent digest for 0 stars`, which is the behaviour you want. On a Linux box, schedule it with an ordinary crontab line: `0 * * * * cd ~/vals && bun digest.ts`. On Cloudflare it's a `scheduled()` handler plus `"triggers": { "crons": ["0 * * * *"] }` in the Wrangler config.

Watch the timezone. Val Town crons run in UTC, and so do Cloudflare Cron Triggers, but a crontab runs in the server's local time, so either run the box in UTC or add `CRON_TZ=UTC` on crons that support it (cronie does). Also note that "every hour" as a Val Town interval and `0 * * * *` aren't quite the same thing: one is an elapsed interval, the other a wall-clock time. And turn off the Val Town schedule before you turn on the new one, or the digest goes out twice.

## Email vals need a domain you own

There's no portable equivalent of `something@valtown.email`. Those addresses don't transfer, so an email val needs an address on a domain you control, plus a service that turns inbound mail into an HTTP request or a Worker call: Cloudflare Email Routing with an Email Worker, or the inbound webhooks from Resend, Postmark or similar. Update every form and doc that mentions the old address. If you only used `std/email` to send yourself notifications, a Discord or Slack webhook is often the simpler replacement.

## Where to host what's left

Val Town's own <a href="https://docs.val.town/migration/where-to-migrate" target="_blank">where-to-migrate page</a> calls Cloudflare "the most feature-equivalent platform", and the team is moving its own blog and docs there. Workers, D1, R2, Cron Triggers and Email Workers cover all five pieces above. Vercel and Netlify cover most of them, Render and Railway cover hosting plus cron or databases. Turso, the database under Val Town SQLite, is an option if you want to keep the same engine.

The tradeoff is the one Val Town existed to remove. Every one of those is a project, a config file, a deploy step and a dashboard, for what used to be one file you edited in a browser tab. For a team's production webhooks that's fine. For the personal stuff, the RSS-to-Discord bot and the Hacker News digest, a lot of people will end up running the vals on a machine they already own: a home server, a Raspberry Pi, an old laptop in a closet. That's cheap and you control it, and you lose the public URL.

## Giving a self-hosted val a public URL with Pinggy

That last part is the only piece of Val Town a home server can't give you: GitHub needs an HTTPS address to post to, and your box is behind a router. A tunnel solves it without opening a port. With `stars.ts` listening on 8787:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8787 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8787 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8787 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8787 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8787 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8787 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8787 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8787 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8787 free.pinggy.io\"}}}"
{{</ ssh_command >}}

It prints an `https://xxxx.run.pinggy-free.link` URL. Put that in the repo's Settings -> Webhooks as the payload URL, with content type `application/json` and the same secret as `GITHUB_WEBHOOK_SECRET`. GitHub sends a `ping` event straight away, and the Recent Deliveries tab shows whether it got a 200 or a 401. The request path is: GitHub posts to the Pinggy URL -> Pinggy sends it down the SSH connection your server opened -> `ssh` hands it to port 8787.

{{< image "val_town_shutting_down_migrate_vals/github_webhook_to_self_hosted_val.webp" "GitHub posts a star event to a Pinggy URL, which travels down the SSH connection the server opened to a Bun handler on port 8787 that writes to stars.db" >}}

Be honest with yourself about the limits. Free tunnels last 60 minutes and come back with a new random URL, so they suit testing and replaying deliveries, not a webhook you leave running for months. For that you want a Pro token with a persistent subdomain (or your own domain) assigned in the <a href="https://dashboard.pinggy.io" target="_blank">dashboard</a>, run as `ssh -p 443 -R0:localhost:8787 <token>@pro.pinggy.io` under systemd or the Pinggy CLI so it reconnects on its own. And your server has to be on. Val Town never had a power cut in your living room. If uptime matters more than cost, put this val on Workers instead. For more on webhook setups, see [receiving webhooks on localhost](/blog/receive_and_test_webhooks_in_localhost/).

## Redirect the val.run URLs last

Once the new endpoint works, you can point the old `*.val.run` URL at it from the val's settings (HTTP section) or from your account's Custom Domains page. Redirects keep the path and query string by default. Three things to know:

- As soon as a redirect is set, the val stops receiving requests. Set it after the migration, not before.
- Redirects are editable until December 10, then they're permanent. Double-check the target URL. A Pinggy free URL there would be a mistake, because it changes on every restart.
- Many webhook senders don't follow redirects, and the ones that do may turn a POST into a GET. For GitHub, Stripe, Slack and anything else that calls you, change the URL at the provider.

Custom domains aren't covered by these redirects at all. If `api.example.com` points at Val Town, you move it by changing DNS.

## A checklist for the next four weeks

Do these before December 10, in this order, and you can take your time over the rest:

1. `vt clone` every val you might want, into a Git repo with a `.gitignore` for `.env` and `*.sql`.
2. For each val that uses SQLite, add the token-protected export val and pull a dump. Check row counts.
3. Copy blob keys out, scoped and global seperately.
4. Get the new HTTP endpoints running and change the webhook URLs at each provider.
5. Set `val.run` redirects to final, stable URLs.

Crons and email can move during the read-only month, since the old ones keep running until January 10. When you're done, run `grep -rn "esm.town\|val.run" .` across the project. Anything it finds is something that will break on January 10.
