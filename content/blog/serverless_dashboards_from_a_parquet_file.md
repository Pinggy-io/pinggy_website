---
title: "A 40MB Parquet File Can Replace Your Analytics Database - Here's the Catch"
description: "How one engineer built customer-facing dashboards from a single Parquet file, an 18KB browser reader, and HTTP range requests - no database, no query engine, and a real cost breakdown."
date: 2026-08-24T11:00:00+05:30
draft: false
tags: ["Parquet", "DuckDB", "data engineering", "serverless", "Cloudflare"]
categories: ["Technology", "Data Engineering", "Web Development"]
og_image: "images/serverless_dashboards_from_a_parquet_file/serverless_dashboards_from_a_parquet_file_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQnVpbGQgYSBTZXJ2ZXJsZXNzIERhc2hib2FyZCBGcm9tIGEgU2luZ2xlIFBhcnF1ZXQgRmlsZSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBhcHByb2FjaCB0byBwcmUtY29tcHV0aW5nIGdyb3VwaW5nIHNldHMsIHNvcnRpbmcgdGhlbSBmb3IgYnl0ZS1yYW5nZSBwcnVuaW5nLCBob3N0aW5nIHRoZSByZXN1bHRpbmcgUGFycXVldCBmaWxlIG9uIG9iamVjdCBzdG9yYWdlLCBhbmQgcmVhZGluZyBpdCBpbiB0aGUgYnJvd3NlciB3aXRob3V0IGEgZGF0YWJhc2UuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlByZWNvbXB1dGUgZXZlcnkgY2hhcnQgYXMgYSBncm91cGluZyBzZXQiLAogICAgICAidGV4dCI6ICJSdW4gYSBHUk9VUCBCWSBHUk9VUElORyBTRVRTIHF1ZXJ5IG92ZXIgeW91ciBzb3VyY2UgZGF0YSBzbyBlYWNoIGNoYXJ0IGFuZCBmaWx0ZXIgY29tYmluYXRpb24gYmVjb21lcyBpdHMgb3duIHNtYWxsIHByZS1hZ2dyZWdhdGVkIHRhYmxlIGluc3RlYWQgb2YgYSBsaXZlIHF1ZXJ5LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJTb3J0IGVhY2ggZ3JvdXBpbmcgc2V0IGJ5IGl0cyBmaWx0ZXIgY29sdW1ucyIsCiAgICAgICJ0ZXh0IjogIk9yZGVyIHRoZSByb3dzIGluIGVhY2ggZ3JvdXBpbmcgc2V0IGJ5IHRoZSBjb2x1bW5zIHlvdXIgZGFzaGJvYXJkIGZpbHRlcnMgb24sIHNvIHRoZSBQYXJxdWV0IGZpbGUncyByb3ctZ3JvdXAgbWluL21heCBzdGF0aXN0aWNzIGNhbiBza2lwIGlycmVsZXZhbnQgZGF0YS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3RhY2sgdGhlIGdyb3VwaW5nIHNldHMgaW50byBvbmUgUGFycXVldCBmaWxlIiwKICAgICAgInRleHQiOiAiV3JpdGUgYWxsIGdyb3VwaW5nIHNldHMgaW50byBhIHNpbmdsZSBpbW11dGFibGUgUGFycXVldCBmaWxlLCBvbmUgc2VjdGlvbiBwZXIgc2V0LCBzbyB0aGUgd2hvbGUgZGFzaGJvYXJkJ3MgZGF0YSBsaXZlcyBpbiBvbmUgb2JqZWN0LiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJIb3N0IHRoZSBmaWxlIG9uIG9iamVjdCBzdG9yYWdlIHdpdGggcmFuZ2UtcmVxdWVzdCBzdXBwb3J0IiwKICAgICAgInRleHQiOiAiVXBsb2FkIHRoZSBQYXJxdWV0IGZpbGUgdG8gc3RvcmFnZSBsaWtlIENsb3VkZmxhcmUgUjIgb3IgUzMgYW5kIHB1dCBhIHNtYWxsIHByb3h5IG9yIENETiBpbiBmcm9udCBzbyBieXRlLXJhbmdlIHJlcXVlc3RzIGFyZSBjYWNoZWQgYXQgdGhlIGVkZ2UuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlJlYWQgaXQgaW4gdGhlIGJyb3dzZXIgd2l0aCBhIFBhcnF1ZXQgcmVhZGVyIiwKICAgICAgInRleHQiOiAiVXNlIGEgbGlnaHR3ZWlnaHQgbGlicmFyeSBsaWtlIEh5cGFycXVldCB0byByZWFkIHRoZSBmaWxlJ3MgZm9vdGVyIG9uY2UsIHRoZW4gZmV0Y2ggb25seSB0aGUgYnl0ZSByYW5nZXMgYSBjaGFydCBuZWVkcywgd2l0aCBubyBzZXJ2ZXIgb3IgcXVlcnkgZW5naW5lIGludm9sdmVkLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "serverless_dashboards_from_a_parquet_file/serverless_dashboards_from_a_parquet_file_banner.webp" "Architecture diagram showing a DuckDB pipeline building a 40MB Parquet cube, served over HTTP range requests to an 18KB browser reader" >}}

Hamilton Ulmer, an engineer at <a href="https://motherduck.com/" target="_blank">MotherDuck</a>, the cloud-hosted DuckDB company, wrote up a problem a friend brought him: customer usage data sitting in Iceberg on Cloudflare R2, and a need to show users some basic charts with filters. The obvious move is to stand up a database or a query engine behind an API. Instead he built the dashboard out of one static file.

The result, laid out in <a href="https://www.hamiltonulmer.com/customer-dashboards-r2-hyparquet/" target="_blank">Fast drilldown dashboards from a single Parquet file</a>, is a working demo over the NYC 311 complaints dataset: about 34 million rows across 15 years, rolled up into a single 40MB Parquet file. A user clicks "NYPD" in an agency leaderboard and the browser fetches about 260KB to answer it. No database connection, no backend process, no query engine anywhere in the request path.

{{% tldr %}}
1. **The core idea** - precompute every chart and filter combination into a Parquet file, sorted so row-group statistics can skip irrelevant data, then read it with HTTP range requests instead of a database.
2. **The numbers** - a 40MB cube built from ~34 million rows, a 195KB footer read once, and roughly 260KB fetched to answer a single filtered click.
3. **The reader** - <a href="https://github.com/hyparam/hyparquet" target="_blank">Hyparquet</a>, an 18KB, zero-dependency JavaScript library that reads Parquet files straight from object storage in the browser or Node.
4. **The cost** - storing and rebuilding 10,000 customer dashboards daily runs about $2.85/month on R2; rebuilding every five minutes runs about $389/month.
5. **The catch** - this only works for a fixed set of charts over data that updates on a coarse schedule, not ad-hoc queries or real-time data.
6. **Where it breaks down** - high-cardinality dimensions blow up file size fast, and some aggregations (percentiles, distinct counts) can't be computed this way at all.
{{% /tldr %}}

## The default move is to add a database

The reflexive answer to "show our customers a dashboard" is almost always the same: stand up a read replica, add a query engine, build an API layer, wire up caching. Each piece is reasonable on its own, and each one is also a new thing that can go down, a new bill, and a new surface for someone to leave a query unindexed until a customer's dashboard times out.

Ulmer's framing skips that whole stack for a specific, common case: dashboards with a known, bounded set of charts and filters, where the underlying data doesn't need to update every second. That description covers a lot of embedded customer analytics. Most usage and billing pages, the ones showing "requests over time," "spend by category," "top N by whatever," fit it exactly.

## Turn every question into a precomputed answer

The build step uses a DuckDB `GROUP BY GROUPING SETS` query, DuckDB's way of computing several different `GROUP BY` roll-ups in a single pass instead of running one query per chart. Something in that shape:

```sql
SELECT
    agency,
    complaint_type,
    date_trunc('day', created_date) AS day,
    count(*) AS n
FROM requests
GROUP BY GROUPING SETS (
    (),                                  -- grand total
    (day),                                -- requests per day
    (agency),                             -- totals by agency
    (complaint_type),                     -- totals by complaint type
    (agency, complaint_type, day)         -- the full drilldown
)
```

Each grouping set becomes its own small table, an answer to one specific question the dashboard needs to be able to answer. "Requests per day" is one set. "Totals by agency" is another. The full four-dimension drilldown is another, bigger one. Instead of shipping these off to separate tables or a live query engine, all of them get stacked into one Parquet file, one section per grouping set. That file is the entire "database" the dashboard runs against, and it's immutable until the next rebuild.

## Row order does most of the actual work

Stacking pre-aggregated tables into a file only gets you so far if reading it still means downloading the whole thing. The part that makes this fast is how the rows inside each grouping set are ordered.

Parquet files are split into row groups, tens of thousands of rows each, and every row group carries footer metadata with min/max statistics for each column. If a grouping set's rows are sorted by the columns your dashboard actually filters on, those min/max ranges become genuinely useful: a client can look at the footer, see that the row group for "day between March 1 and March 15" doesn't overlap the requested range, and skip fetching it entirely.

That's the mechanic behind the numbers in the write-up. The full NYC 311 cube has a 195KB footer, read once per page load. A daily-requests chart with no filters applied pulls about 171KB. Clicking through to filter by one dimension pulls a few megabytes. Clicking "NYPD" specifically in the agency breakdown, thanks to sorted, prunable row groups, costs about 260KB out of the 40MB file. The database-shaped intuition, that filtering should cost less than a table scan, holds up, except there's no database doing the filtering. It's the file format's own footer statistics plus range requests over plain HTTP.

## An 18KB reader instead of a backend

On the client side, the whole job is handled by <a href="https://github.com/hyparam/hyparquet" target="_blank">Hyparquet</a>, a JavaScript Parquet parser with zero dependencies that runs in both the browser and Node. Per its README, it reads the footer, figures out which byte ranges actually matter for the requested rows and columns, and issues only those range requests:

```javascript
const { asyncBufferFromUrl, parquetReadObjects } = await import('hyparquet')

const file = await asyncBufferFromUrl({ url: 'https://your-bucket.example.com/cube.parquet' })
const data = await parquetReadObjects({
  file,
  columns: ['agency', 'day', 'n'],
  rowStart: 0,
  rowEnd: 1000,
})
```

It handles every Parquet type and encoding, and the base package covers uncompressed and Snappy-compressed files out of the box; a companion package, `hyparquet-compressors`, adds gzip, Brotli, and Zstandard for files written with those codecs. It's MIT-licensed, built by the same small team behind DuckDB-adjacent tooling under the "HypStack" umbrella, with support from a Hugging Face open-source grant. The whole thing minifies down to around 18KB, smaller than most charting libraries alone, and it never talks to a server beyond the object storage bucket itself.

Behind that bucket, the setup in the write-up puts a Cloudflare Worker in front of R2 to proxy the byte-range requests and cache them at the edge, so repeat visitors to the same filtered view don't re-fetch bytes that are already sitting in cache nearby.

## What it actually costs to run

The economics are the part that makes this more than a neat trick. R2's pricing charges $4.50 per million Class A operations (writes), about 12.5x the price of reads, which makes rebuild frequency the dominant cost, not storage. For a scenario of 10,000 customers with 10MB cubes each, the write-up works out:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Rebuild cadence</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Approx. monthly cost</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Storage alone</td>
  <td style="border:1px solid #ddd;padding:0.45em;">~$1.50</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Daily rebuilds</td>
  <td style="border:1px solid #ddd;padding:0.45em;">~$1.35</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.45em;">Hourly rebuilds</td>
  <td style="border:1px solid #ddd;padding:0.45em;">~$32</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.45em;">Every 5 minutes</td>
  <td style="border:1px solid #ddd;padding:0.45em;">~$389</td>
</tr>
</tbody>
</table>

Daily-refresh dashboards for 10,000 customers land under three dollars a month, total, excluding whatever compute builds the cubes in the first place. The write-up notes S3 comes out roughly 20% more expensive across the same scenarios. Compare that to the fixed cost of a managed Postgres read replica or a hosted query engine sized for the same customer count, and it's not close, at least for the workloads this pattern actually fits.

## Where the pattern breaks

None of this is presented as a universal database replacement, and the write-up is specific about where it stops working.

**The chart set has to be fixed.** This is precomputation, not a query engine. If a customer needs to ask an arbitrary question your grouping sets didn't anticipate, there's no fallback path; you'd need to add a new grouping set and rebuild. Ad-hoc, self-serve query building is not what this is for.

**Only some aggregations survive the shape.** Sums, counts, maxes, and averages are what the write-up calls distributive and algebraic aggregations, they can be computed piecewise and combined later, which is exactly what grouping sets do. Percentiles, distinct counts, and other holistic aggregations need the full underlying distribution and don't reduce the same way; they need a different, harder solution not covered here.

**Update cadence has to be coarse.** The whole model assumes data that refreshes on a schedule, not a live stream. If customers expect numbers to move within seconds of an event happening, the five-minute-rebuild cost line above is close to the ceiling of what's practical before you're better off with an actual streaming or real-time backend.

**Cardinality blows up file size fast.** In the demo dataset, `complaint_type` alone has 485 distinct values. Choosing a daily grain instead of weekly for one chart made that grouping set roughly 7x larger, because every combination of day and complaint type needs its own row. A dashboard with several high-cardinality filter dimensions can end up with a cube far bigger than 40MB before it covers as much ground as the NYC 311 demo does.

## If you want to try this yourself

The shape of the work is the same regardless of your stack: figure out the finite set of charts and filters your dashboard actually needs to answer, write a `GROUP BY GROUPING SETS` query that produces all of them in one pass, sort each grouping set by the columns it gets filtered on, and write the result to one Parquet file per customer or tenant. Host it somewhere that supports HTTP range requests, R2 and S3 both do, put a cache in front if you expect repeat traffic, and read it client-side with Hyparquet or an equivalent.

The one piece worth planning for before you commit to this is the rebuild trigger. Something has to kick off the pipeline: a cron job on a schedule, or a webhook fired when new data lands (an Iceberg snapshot commit, a Stripe event, whatever your source actually is). Whichever it is, you'll want to test that trigger against your local pipeline code before it's live in production. If it's webhook-driven, that means getting an external service to hit a port on your laptop, which is what a tool like <a href="https://pinggy.io" target="_blank">Pinggy</a> is for:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io
```

Point that at whatever's listening for the rebuild event locally, and you can watch a real webhook trigger a real cube rebuild before any of it touches R2.

## The takeaway

This isn't an argument against databases. It's a reminder that a lot of what gets built with one is really a small, bounded set of precomputed answers wearing a database-shaped API. When that's true, one well-sorted Parquet file, an edge cache, and an 18KB reader can do the job for a few dollars a month, with fewer moving parts to keep online. When it isn't true, when the questions are genuinely open-ended or the data genuinely needs to be live, that's exactly the signal that you do need the database after all. The useful skill here isn't "always do it this way," it's recognizing which of the two situations you're actually in before you provision anything.
