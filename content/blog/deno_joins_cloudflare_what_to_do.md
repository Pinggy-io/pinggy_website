---
title: "Deno Is Joining Cloudflare: What to Do With Your Deno Apps"
description: "Deno's runtime gets one more year of fixes, Deno Deploy shuts down in six months, and the team is merging celld into workerd. What changed, what breaks, and how a Deno app moves to Node, Bun or Workers."
date: 2026-10-10T18:30:00+05:30
lastmod: 2026-10-10T18:30:00+05:30
draft: false
tags: ["Deno", "Cloudflare", "Node.js", "serverless", "self-hosted"]
og_image: "images/deno_joins_cloudflare_what_to_do/deno_joins_cloudflare_what_to_do_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkRlbm8gSXMgSm9pbmluZyBDbG91ZGZsYXJlOiBXaGF0IHRvIERvIFdpdGggWW91ciBEZW5vIEFwcHMiLAogICJkZXNjcmlwdGlvbiI6ICJEZW5vJ3MgcnVudGltZSBnZXRzIG9uZSBtb3JlIHllYXIgb2YgZml4ZXMsIERlbm8gRGVwbG95IHNodXRzIGRvd24gaW4gc2l4IG1vbnRocywgYW5kIHRoZSB0ZWFtIGlzIG1lcmdpbmcgY2VsbGQgaW50byB3b3JrZXJkLiBXaGF0IGNoYW5nZWQsIHdoYXQgYnJlYWtzLCBhbmQgaG93IGEgRGVubyBhcHAgbW92ZXMgdG8gTm9kZSwgQnVuIG9yIFdvcmtlcnMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Rlbm9fam9pbnNfY2xvdWRmbGFyZV93aGF0X3RvX2RvL2Rlbm9fam9pbnNfY2xvdWRmbGFyZV93aGF0X3RvX2RvX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMTBUMTg6MzA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0xMFQxODozMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL2Rlbm9fam9pbnNfY2xvdWRmbGFyZV93aGF0X3RvX2RvLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiRGV2ZWxvcGVyIFRvb2xzIiwKICAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogICJrZXl3b3JkcyI6ICJEZW5vIENsb3VkZmxhcmUsIERlbm8gRGVwbG95IHNodXRkb3duLCBtaWdyYXRlIGZyb20gRGVubywgY2VsbGQgd29ya2VyZCwgRHVyYWJsZSBPYmplY3RzIHNlbGYtaG9zdGluZywgRGVubyB0byBOb2RlIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkRlbm8gcnVudGltZSBzdW5zZXQiLCAiZGVzY3JpcHRpb24iOiAiRGVubyBnZXRzIDEyIG1vbnRocyBvZiBtb250aGx5IGJ1Zy1maXggYW5kIHNlY3VyaXR5IHJlbGVhc2VzLCB0aGVuIG9mZmljaWFsIGRldmVsb3BtZW50IGVuZHMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJEZW5vIERlcGxveSBzaHV0ZG93biIsICJkZXNjcmlwdGlvbiI6ICJEZW5vIERlcGxveSBzaHV0cyBkb3duIHNpeCBtb250aHMgYWZ0ZXIgdGhlIE9jdG9iZXIgOSwgMjAyNiBhbm5vdW5jZW1lbnQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJjZWxsZCBhbmQgd29ya2VyZCIsICJkZXNjcmlwdGlvbiI6ICJjZWxsZCwgYSBzZWxmLWhvc3RhYmxlIER1cmFibGUgT2JqZWN0cyBydW50aW1lLCBpcyBiZWluZyBtZXJnZWQgaW50byBDbG91ZGZsYXJlJ3Mgb3BlbiBzb3VyY2Ugd29ya2VyZC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk1pZ3JhdGluZyBhIERlbm8gYXBwIiwgImRlc2NyaXB0aW9uIjogIldlYi1zdGFuZGFyZCBjb2RlIGFuZCBucG0gcGFja2FnZXMgcG9ydCB0byBOb2RlLCBCdW4gYW5kIFdvcmtlcnM7IERlbm8uKiBBUElzIG5lZWQgcmV3cml0aW5nLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "deno_joins_cloudflare_what_to_do/deno_joins_cloudflare_what_to_do_banner.webp" "Deno is joining Cloudflare: a timeline from the October 9, 2026 announcement to the end of Deno Deploy and the last runtime release" >}}

On October 9, 2026, Ryan Dahl announced that the Deno team is joining Cloudflare. The runtime itself gets a year of monthly bug-fix and security releases and then official development stops. Deno Deploy, the hosting service, shuts down in six months. Deno stays open source, but nobody at Deno will be building it after that.

If you run Deno in production, the practical question is what a Deno app depends on that Node or Workers don't give you. I took a small Hono app that runs under `deno run` and moved it to Node, Bun and `wrangler dev` to find out. The app code did not change. Everything that moved was the three lines that start the server.

{{% tldr %}}
1. **The clock** - per <a href="https://deno.com/blog/cloudflare" target="_blank">Ryan Dahl's post</a>, the Deno runtime gets 12 months of monthly bug-fix and security releases, and Deno Deploy shuts down after 6 months. Neither date was published as a calendar day, so count from October 9, 2026.
2. **What survives** - JSR keeps running (its infrastructure moves to Cloudflare), `rusty_v8` keeps being maintained, and the Deno repository stays open source.
3. **The real project** - Dahl and Bert Belder will merge `celld`, a self-hostable runtime for Durable Objects, into `workerd`, Cloudflare's open source Workers runtime.
4. **Migration cost** - code written against web standards plus `npm:` packages ports in minutes. Code that calls `Deno.*` APIs does not, and you find those with a search.
5. **No rush, no denial** - a year is long enough to move on your own schedule, and short enough that new projects should not start on Deno.
{{% /tldr %}}

## What was announced

The two announcements are the {{< link href="https://deno.com/blog/cloudflare" >}}Deno post{{< /link >}} and the {{< link href="https://blog.cloudflare.com/deno-joins-cloudflare/" >}}Cloudflare post{{< /link >}} by Kenton Varda and Ryan Dahl. Between them:

- **Deno runtime:** "another year" of monthly releases with bug fixes and security updates, then Deno's own development ends. It remains open source and the post says others are welcome to continue it.
- **Deno Deploy:** operates for six months, then shuts down. Paying customers get migration support to Cloudflare Workers.
- **JSR:** continues, with its infrastructure moving to Cloudflare.
- **rusty_v8:** maintenance continues, with work toward integrating it into `workerd`.
- **Terms of the deal:** not disclosed in either post.

The posts do not say what happens to Deno-based products built on top of the runtime, such as the edge function offerings from other hosting providers. Check their status pages instead of assuming a date.

The Deno post also tells you where the effort goes next: a shared platform built on the Workers programming model and Durable Objects, not a separate runtime and hosting service.

## Why celld is the point of the deal

A Durable Object is a small server you address by name. Dahl describes each one as having its own SQLite database, single-threaded JavaScript execution and WebSocket support. A chat app with one Durable Object per channel shards both the data and the connections without a separate database tier.

On Cloudflare that works because Cloudflare runs the routing and storage. Self-hosting it did not work. `workerd` supports Durable Objects on a single instance only, and Varda writes that Cloudflare tried to build a scalable self-hosted version and it "didn't work".

`celld` is Deno's answer, which a third-party write-up dates to August 2026. Per Dahl's description it is one Rust binary with object storage as its only external service dependency: you run many `celld` instances and one bucket. The Cloudflare post does not explain how coordination works internally, so I'm not going to guess at it here.

The stated plan is to merge code and ideas from `celld` into `workerd` so that self-hosting Workers and Durable Objects becomes a first-class option. Cloudflare says it will share more "in the coming months". Until then you can self-host either one, and that is the part worth watching: it is the first credible route to running Durable Objects off Cloudflare.

{{< image "deno_joins_cloudflare_what_to_do/deno_cloudflare_timeline.webp" "Timeline showing Deno Deploy shutting down about six months after the announcement and the last Deno runtime release at about twelve months, while JSR and the open source repo continue" >}}

*Everything is counted from the October 9, 2026 announcement. Only the Deploy and runtime clocks have a number.*

## What a Deno app actually depends on

My test app is a Hono server with two routes. The portable part lives in `app.ts` and knows nothing about the runtime:

```ts
import { Hono } from "npm:hono@4";

export const app = new Hono();

app.get("/", (c) => c.json({ ok: true, ua: c.req.header("user-agent") }));
app.get("/hello/:name", (c) => c.text(`hello ${c.req.param("name")}`));
```

Only `main.ts` is Deno-specific:

```ts
import { app } from "./app.ts";

const port = Number(Deno.env.get("PORT") ?? 8000);
Deno.serve({ port }, app.fetch);
```

I ran it with Deno 2.9.6 and `curl localhost:8000/hello/pinggy` returned `hello pinggy`. Anything in a Deno project falls into one of three buckets:

1. **Web-standard code:** `fetch`, `Request`, `Response`, `URL`, `crypto.subtle`, `WebSocket`. Runs on Node, Bun and Workers unchanged.
2. **`npm:` and `jsr:` imports:** the `npm:` ones become normal `package.json` dependencies. A `jsr:` import works on other runtimes through the JSR npm compatibility layer, or by installing with `npx jsr add`.
3. **`Deno.*` APIs:** `Deno.serve`, `Deno.env`, `Deno.readTextFile`, `Deno.openKv`, permissions flags. This is the bucket that needs rewriting.

Run `grep -rn "Deno\." --include='*.ts' .` before you plan anything. That count is your migration size. If you skip the grep and run a `Deno.env.get` call on Node, you get `ReferenceError: Deno is not defined`, which I confirmed with `tsx`.

## Moving the app to Node, Bun or Workers

For Node, the port is a new entry file and a `package.json`. I copied `app.ts`, changed `npm:hono@4` to `hono`, and wrote:

```ts
import { serve } from "@hono/node-server";
import { app } from "./app.ts";

serve({ fetch: app.fetch, port: Number(process.env.PORT ?? 8000) });
```

```bash
npm i hono @hono/node-server tsx
PORT=8001 npx tsx main.ts
```

`curl localhost:8001/hello/pinggy` returned `hello pinggy`. The same `main.ts` also runs under Bun 1.4.2 with `bun main.ts` and nothing else to install, which I tested on port 8003.

For Workers, there is no server to start. A Worker exports a `fetch` handler, and a Hono app already has one:

```ts
import { app } from "./app.ts";
export default app;
```

```toml
# wrangler.toml
name = "demo"
main = "worker.ts"
compatibility_date = "2026-10-01"
```

`npx wrangler dev --port 8002` (wrangler 4.149.0, running `workerd` 2026-10-10 locally) answered `GET /hello/pinggy 200 OK`. That is the same runtime Cloudflare runs in production, which is why the Deno team's work will land there.

One more detail: Deno can run the Node version as-is. `deno run -A main.ts` against the Node project, with its `node_modules`, also answered `hello denonode`. If you want to move in two steps, convert the code to Node-style first and keep running it on Deno until the host changes.

{{< image "deno_joins_cloudflare_what_to_do/one_hono_app_three_runtimes.webp" "One Hono app.ts file shared by three short entry files for Deno, Node and Bun, and Cloudflare Workers" >}}

*The same Hono app on four runtimes. Only the entry file differs.*

## What does not port cleanly

The test app is the easy case. Things I did not test, and where I would expect friction:

- **Deno KV** (`Deno.openKv`) has no drop-in equivalent. On Workers, the nearest thing is Workers KV or a Durable Object with SQLite, and the semantics are not the same, so budget real time.
- **The permission model.** `--allow-net` and friends give a Deno process a sandbox. Bun and Workers don't use the same model, so the guardrails move into your container or isolate configuration.
- **`deno compile`.** I built the test app into a single binary, and it came out at about 105 MB. Node and Bun have their own single-executable options but the output and flags differ.
- **Deno Deploy specifics:** if you used its built-in cron, queues or KV, Cloudflare's migration support for paying customers is the route the announcement points to.

If you only need a runtime and have no Deploy dependency, you have the full year. If you are on Deploy, you have about six months.

## Running your own with workerd

Self-hosting is the part that makes the Cloudflare side interesting. `workerd` is already installable. I ran `npm i workerd` and got 1.20261010.1, which reports `workerd 2026-10-10`. You describe a service in a Cap'n Proto config and point it at your script. The Cloudflare post says self-hosting will get more official attention "in the coming months", so expect the config and the Durable Objects story to change. Treat anything you build on it today as provisional.

Once it runs on a box at home or in a closet, that box is behind NAT. A tunnel gets a public HTTPS URL to a self-hosted Worker without opening a router port. With the Pinggy SSH command (from the docs, I did not run it in the sandbox where I tested the rest, since it has no SSH client):

```bash
ssh -p 443 -R0:localhost:8000 free.pinggy.io -T
```

It prints an `https://` URL that forwards to port 8000 on the machine. See {{< link href="https://pinggy.io/docs/" >}}the Pinggy docs{{< /link >}} for persistent subdomains. For background on how that connection works, read [SSH reverse tunnelling](/blog/ssh_reverse_tunnelling/).

## What I would do this week

1. Run `grep -rn "Deno\." .` and count the lines. Zero means you are a `package.json` away from Node.
2. If you deploy on Deno Deploy, put the six-month date in your calendar now and pick Workers, a container or a VPS.
3. If you use Deno as a local dev tool only, nothing is urgent. A year of monthly security fixes is a long time.
4. Do not start a new project on Deno. That is a judgment call, not a statement from either company.
5. Watch the `workerd` repository for the `celld` merge if you want Durable Objects off Cloudflare.

The one sentence in the announcement that should change your plans is the one that says development ends. Everything else is a schedule.
