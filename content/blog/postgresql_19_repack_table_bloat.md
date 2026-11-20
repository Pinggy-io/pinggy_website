---
title: "PostgreSQL 19 REPACK: Built-In Table Bloat Cleanup Without the Long Lock"
description: "PostgreSQL 19 adds REPACK, one command that replaces VACUUM FULL and CLUSTER, plus REPACK (CONCURRENTLY) to shrink bloated tables while reads and writes continue. How it works, its limits, and how to try it."
date: 2026-11-20T10:00:00+05:30
lastmod: 2026-11-20T10:00:00+05:30
draft: false
tags: ["PostgreSQL", "database", "open source", "DevOps"]
og_image: "images/postgresql_19_repack_table_bloat/postgresql_19_repack_table_bloat_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlBvc3RncmVTUUwgMTkgUkVQQUNLOiBCdWlsdC1JbiBUYWJsZSBCbG9hdCBDbGVhbnVwIFdpdGhvdXQgdGhlIExvbmcgTG9jayIsCiAgImRlc2NyaXB0aW9uIjogIlBvc3RncmVTUUwgMTkgYWRkcyBSRVBBQ0ssIG9uZSBjb21tYW5kIHRoYXQgcmVwbGFjZXMgVkFDVVVNIEZVTEwgYW5kIENMVVNURVIsIHBsdXMgUkVQQUNLIChDT05DVVJSRU5UTFkpIHRvIHNocmluayBibG9hdGVkIHRhYmxlcyB3aGlsZSByZWFkcyBhbmQgd3JpdGVzIGNvbnRpbnVlLiBIb3cgaXQgd29ya3MsIGl0cyBsaW1pdHMsIGFuZCBob3cgdG8gdHJ5IGl0LiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9wb3N0Z3Jlc3FsXzE5X3JlcGFja190YWJsZV9ibG9hdC9wb3N0Z3Jlc3FsXzE5X3JlcGFja190YWJsZV9ibG9hdF9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6ICAgIHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTExLTIwVDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMjBUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9wb3N0Z3Jlc3FsXzE5X3JlcGFja190YWJsZV9ibG9hdC8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkRhdGFiYXNlcyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiUG9zdGdyZVNRTCAxOSwgUkVQQUNLLCBSRVBBQ0sgQ09OQ1VSUkVOVExZLCB0YWJsZSBibG9hdCwgVkFDVVVNIEZVTEwsIENMVVNURVIsIHBnX3JlcGFjaywgcGdfc3F1ZWV6ZSwgcGdfc3RhdF9wcm9ncmVzc19yZXBhY2siLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUkVQQUNLIiwgImRlc2NyaXB0aW9uIjogIlBvc3RncmVTUUwgMTkgY29tbWFuZCB0aGF0IHJld3JpdGVzIGEgdGFibGUgaW50byBhIG5ldyBmaWxlIHRvIHJlY2xhaW0gZGlzayBzcGFjZSwgcmVwbGFjaW5nIFZBQ1VVTSBGVUxMIGFuZCBDTFVTVEVSLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiVGFibGUgYmxvYXQiLCAiZGVzY3JpcHRpb24iOiAiRGlzayBzcGFjZSBoZWxkIGJ5IGRlYWQgcm93IHZlcnNpb25zIHRoYXQgcGxhaW4gVkFDVVVNIG1hcmtzIHJldXNhYmxlIGJ1dCBkb2VzIG5vdCByZXR1cm4gdG8gdGhlIG9wZXJhdGluZyBzeXN0ZW0uIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "postgresql_19_repack_table_bloat/postgresql_19_repack_table_bloat_banner.webp" "PostgreSQL 19 REPACK banner comparing a 266 MB table after VACUUM with 27 MB after a rewrite, above the command REPACK (CONCURRENTLY) jobs" >}}

PostgreSQL 19.0 came out on November 19, 2026, and the change most people running Postgres in production will actually feel is a new command: `REPACK`. It rewrites a table into a fresh file with no dead space, which is what `VACUUM FULL` and `CLUSTER` already did, but it gives that job one name and, with `REPACK (CONCURRENTLY)`, does it without locking reads and writes out of the table for the whole run. Untill now that last part needed a third-party extension like pg_repack or pg_squeeze. On a test table where I deleted 90% of 2 million rows, plain `VACUUM` left the heap at 223 MB; a rewrite took it to 22 MB.

{{% tldr %}}
1. **Plain VACUUM does not shrink tables.** It marks dead rows as reusable space but only returns pages at the very end of the file, so a table with scattered deletes stays the same size on disk.
2. **REPACK replaces VACUUM FULL and CLUSTER.** `REPACK t` is the old `VACUUM FULL t`, `REPACK t USING INDEX i` is the old `CLUSTER t USING i`. The old commands still work.
3. **REPACK (CONCURRENTLY) holds the exclusive lock only for the file swap.** It copies the table under a weaker lock, captures concurrent changes with logical decoding, replays them, then swaps files.
4. **CONCURRENTLY has real limits.** No partitioned tables, no tables without a primary key or replica identity index, not inside a transaction block, and it is not MVCC-safe for old snapshots.
5. **You still need the disk.** A rewrite needs free space at least equal to the table plus all its indexes, and it counts as one long transaction while it runs.
{{% /tldr %}}

A note on what I ran. The bloat numbers and lock output below come from PostgreSQL 16.15, which was the server I had on hand, using `VACUUM FULL`. That is the same rewrite `REPACK` does without `CONCURRENTLY`. The `REPACK` syntax, options and limits are taken from the {{< link href="https://www.postgresql.org/docs/19/sql-repack.html" >}}PostgreSQL 19 REPACK docs{{< /link >}} and the {{< link href="https://www.postgresql.org/docs/release/19.0/" >}}19.0 release notes{{< /link >}}; I haven't run them against a 19.0 server myself.

## Why VACUUM doesn't give disk space back

Postgres never updates a row in place. An `UPDATE` writes a new row version and leaves the old one behind, and a `DELETE` just marks the row dead. That's MVCC: transactions that started earlier may still need to see the old version. Once no transaction can see a dead row any more, `VACUUM` (or autovacuum) clears it and records the space in the free space map so future inserts can reuse it.

What `VACUUM` doesn't do is move live rows around. It can only truncate the file when whole pages at the end are empty. If your deletes are spread through the table, every page keeps a few live rows, and the file stays exactly as big as it was.

Here's a queue-style table, the kind that bloats in real apps: insert 2 million jobs, delete the 90% that are "done", vacuum.

```sql
CREATE EXTENSION IF NOT EXISTS pgstattuple;
CREATE TABLE jobs (
  id bigserial PRIMARY KEY, queue text, payload jsonb,
  status text, created_at timestamptz DEFAULT now()
);
INSERT INTO jobs (queue, payload, status)
SELECT 'emails', jsonb_build_object('to','user'||g||'@example.com','tpl','welcome'), 'pending'
FROM generate_series(1,2000000) g;

DELETE FROM jobs WHERE id % 10 <> 0;
VACUUM jobs;

SELECT pg_size_pretty(pg_total_relation_size('jobs')) total,
       pg_size_pretty(pg_relation_size('jobs')) heap;
SELECT table_len, tuple_count, round(tuple_percent::numeric,1) tuple_pct,
       round(free_percent::numeric,1) free_pct
FROM pgstattuple('jobs');
```

The table was 266 MB before the delete. After the delete and a vacuum:

```text
 total  |  heap
--------+--------
 266 MB | 223 MB

 table_len | tuple_count | tuple_pct | free_pct
-----------+-------------+-----------+----------
 234061824 |      200000 |       9.6 |     86.7
```

Same size. `pgstattuple` (a contrib extension that scans the table and reports what's in it) shows why: live rows fill 9.6% of the file and 86.7% is free space sitting inside pages. Then the rewrite:

```text
INFO:  "public.jobs": found 0 removable, 200000 nonremovable row versions in 28572 pages
VACUUM
Time: 391.040 ms

 total | heap
-------+-------
 27 MB | 22 MB

 table_len | tuple_count | tuple_pct | free_pct
-----------+-------------+-----------+----------
  23412736 |      200000 |      95.7 |      0.6
```

From 28,572 pages to about 2,860. Sequential scans read 10x less, the indexes were rebuilt compact, and the operating system got 239 MB back.

{{< image "postgresql_19_repack_table_bloat/vacuum_vs_repack_pages.webp" "Two grids of 8 kB heap pages: after VACUUM every page holds a thin strip of live rows, after REPACK the same rows fill a few full pages and the rest is returned to the OS" >}}

*Plain VACUUM makes the space reusable for new rows. A rewrite is what hands it back to the disk. Data: pgstattuple on the test table above.*

## What VACUUM FULL and CLUSTER cost you

The rewrite has always been there. `VACUUM FULL` copies the live rows into a new file, and `CLUSTER` does the same but in index order. The catch is the lock: both take `ACCESS EXCLUSIVE` on the table for the entire run, which blocks every query including plain `SELECT`s.

I grew the table to 692 MB, started `VACUUM FULL jobs` in one session and `SELECT count(*) FROM jobs` in another half a second later, then looked at `pg_stat_activity` and `pg_locks`:

```text
 pid | wait_event_type |      wait_event       | state  |             q
-----+-----------------+-----------------------+--------+---------------------------
 685 | IO              | DataFileImmediateSync | active | VACUUM FULL jobs
 690 | Lock            | relation              | active | SELECT count(*) FROM jobs

        mode         | granted |           query
---------------------+---------+---------------------------
 AccessExclusiveLock | t       | VACUUM FULL jobs
 ShareLock           | t       | VACUUM FULL jobs
 AccessShareLock     | f       | SELECT count(*) FROM jobs
```

The `count(*)` sat wating for a full second on a table this small. On a 400 GB table the same wait is hours, and every connection that touches the table piles up behind it until your pool is exhausted. That's why most teams treated `VACUUM FULL` as something you run in a maintenance window or never, and reached for {{< link href="https://github.com/reorg/pg_repack" >}}pg_repack{{< /link >}} instead.

## REPACK is one command for both

PostgreSQL 19 folds both commands into one. The release notes put it bluntly: the two "did similar things, but with confusing names, so unify them as REPACK." The old spellings are kept for compatibility.

| Before 19 | PostgreSQL 19 |
|---|---|
| `VACUUM FULL jobs;` | `REPACK jobs;` |
| `CLUSTER jobs USING jobs_created_idx;` | `REPACK jobs USING INDEX jobs_created_idx;` |
| `CLUSTER jobs;` (reuse the recorded index) | `REPACK jobs USING INDEX;` |
| `VACUUM FULL;` (whole database) | `REPACK;` |
| pg_repack or pg_squeeze extension | `REPACK (CONCURRENTLY) jobs;` |

The full synopsis from the docs:

```sql
REPACK [ ( option [, ...] ) ] [ table_and_columns [ USING INDEX [ index_name ] ] ]
REPACK [ ( option [, ...] ) ] USING INDEX

-- option is one of: VERBOSE, ANALYZE, CONCURRENTLY
```

A few details worth knowing:

- `REPACK (ANALYZE) jobs` refreshes planner stats right after the rewrite. That matters most after `USING INDEX`, since the planner tracks physical row order and the old stats are now wrong. It only works on a single non-partitioned table.
- `REPACK` with no table name processes every table and materialized view you have the `MAINTAIN` privilege on. It can't run inside a transaction block, and it can't be combined with `CONCURRENTLY`.
- It refuses tables that have an invalid index (a leftover from a failed `CREATE INDEX CONCURRENTLY`, for example). Drop or reindex it first.
- Clustering is still one-shot. New and updated rows after the rewrite aren't kept in index order.

## How REPACK (CONCURRENTLY) avoids the long lock

This is the part that actually changes how you operate Postgres. With `CONCURRENTLY`, the docs describe the sequence like this:

1. Take a `SHARE UPDATE EXCLUSIVE` lock. That's the same level autovacuum uses: it blocks other maintenance and DDL on the table, but `SELECT`, `INSERT`, `UPDATE` and `DELETE` all keep running.
2. Start capturing changes to the table through logical decoding, the same machinery logical replication uses to read row changes out of the WAL.
3. Copy the live rows into a new file and build a new file for each index.
4. Replay the changes that happened during the copy (the `catch-up` phase).
5. Request `ACCESS EXCLUSIVE`, replay whatever arrived while it waited, swap the old and new files, and delete the old ones.

The exclusive lock is held only for step 5, and for as long as it takes to apply the changes that piled up while waiting for it. On a table that isn't getting hammered, that's short.

{{< image "postgresql_19_repack_table_bloat/repack_concurrently_lock_timeline.webp" "Timeline of locks: plain REPACK holds ACCESS EXCLUSIVE for the whole rewrite, REPACK CONCURRENTLY holds SHARE UPDATE EXCLUSIVE while copying and catching up and takes ACCESS EXCLUSIVE only to swap files" >}}

*Source: {{< link href="https://www.postgresql.org/docs/19/sql-repack.html" >}}PostgreSQL 19 REPACK docs{{< /link >}}, Notes on Concurrent Operation.*

You don't need to change `wal_level` first. PostgreSQL 19 also added automatic enablement of logical decoding when `wal_level = replica`, reported through a new `effective_wal_level` setting. The `initializing` phase of a concurrent repack switches it on and waits for every backend to start writing the extra WAL. Each concurrent repack also uses a replication slot from a new pool, `max_repack_replication_slots`, which defaults to 5 and can only be changed at server start.

The design has a history. pg_repack, the extension most people used, captures concurrent changes with triggers it installs on your table, and it needs a client binary matching the server version. {{< link href="https://github.com/cybertec-postgresql/pg_squeeze" >}}pg_squeeze{{< /link >}} from Cybertec switched to logical decoding and ran entirely server side. Antonin Houska, who wrote pg_squeeze, is the primary author of `REPACK` in core, so the concurrent mode is that approach moved into Postgres itself.

## Where CONCURRENTLY says no

The docs list the cases where `CONCURRENTLY` can't be used:

- The relation isn't a plain table (a materialized view, for instance).
- The table is `UNLOGGED`, partitioned, a system catalog or a TOAST table, or uses an access method other than heap.
- The table has no primary key and no index-based replica identity. Logical decoding needs a way to identify rows.
- It runs inside a transaction block.
- `max_repack_replication_slots` is already used up.

Partitioned tables are the one that'll sting. Big, bloat-prone tables are exactly the ones that tend to be partitioned. You can still repack partitions one at a time by name, since each partition is a regular table.

Two more limits from the docs. Tracking concurrent changes costs a little memory per updated or deleted row, outside `maintenance_work_mem`, and if more than about 104 million rows are updated or deleted during the run, the command fails. And DDL from other sessions on the table during the run can make it fail too.

Then there's the warning box in the docs: `REPACK` with `CONCURRENTLY` is not MVCC-safe. A transaction that took its snapshot before the repack started will see the table as empty after the repack commits. `TRUNCATE` and `ALTER TABLE` rewrites already behave this way, so it isn't new, but it's easy to miss. If you have long-running `REPEATABLE READ` reports or `pg_dump` runs crossing the window, schedule around them, or you get queries that quietly return zero rows.

## Disk, WAL and the long-transaction trap

Neither mode is free. Plan for these before pointing it at a big table:

- **Free disk.** The rewrite builds a full copy of the table and every index before it drops the old ones, so you need free space at least equal to table plus indexes. If `USING INDEX` picks a sort instead of an index scan, add a sort file up to the table's size. You can force the index scan with `SET enable_sort = off`, which is slower but uses less disk.
- **One long transaction.** For vacuum purposes the whole repack counts as one transaction, so while it runs, VACUUM can't clean dead rows in other tables either. The docs suggest watching `pg_stat_activity.backend_xid` for the repack's backend on very large tables.
- **WAL and replicas.** Unless `wal_level` is `minimal`, the new table and index files are written to WAL in full, and your archive and standbys have to absorb all of it.
- **Memory.** Raise `maintenance_work_mem` for the session before you start; index rebuilds use it.
- **Not a wraparound fix.** It does advance `relfrozenxid`, but the docs recommend plain `VACUUM` for wraparound emergencies, since a repack takes much longer and can fail after most of the work is done.

## Watching it run

PostgreSQL 19 adds a `pg_stat_progress_repack` view that reports `REPACK`, `CLUSTER` and `VACUUM FULL` alike. The older `pg_stat_progress_cluster` stays around for compatibility and translates `REPACK` into `CLUSTER` or `VACUUM FULL` in its `command` column.

```sql
SELECT pid, relid::regclass AS tbl, command, phase,
       heap_blks_scanned, heap_blks_total,
       heap_tuples_inserted, heap_tuples_updated, heap_tuples_deleted
FROM pg_stat_progress_repack;
```

The `catch-up` phase is the one to watch with `CONCURRENTLY`. The `heap_tuples_updated` and `heap_tuples_deleted` counters only move there, and the phase also covers waiting for the final exclusive lock, so a repack that sits in `catch-up` for a long time is usually stuck behind a long transaction holding a lock on the table. For comparison, here's what the old view showed on 16 during my `VACUUM FULL`:

```text
   command   |          phase           | heap_blks_total | heap_blks_scanned
-------------+--------------------------+-----------------+-------------------
 VACUUM FULL | performing final cleanup |           88572 |             88572
```

## Should you drop pg_repack?

Not on day one. Most managed providers take a while to offer a new major version, and you'll be on 18 or older for some time. When you do upgrade, the core command has clear advantages: no extension to install, no client binary to keep in sync with the server, no triggers on your table, and progress reporting built in.

pg_repack still covers cases core doesn't yet, mainly repacking a whole partitioned table in one go and the tooling teams have already built around it. Keep it where it's working, and move tables over to `REPACK (CONCURRENTLY)` as you upgrade.

## Try it on a scratch table

The quickest way to see it is to recreate the bloated `jobs` table from above on a 19 server, then run:

```sql
SELECT pg_size_pretty(pg_total_relation_size('jobs'));  -- before
REPACK (CONCURRENTLY, VERBOSE) jobs;
ANALYZE jobs;
SELECT pg_size_pretty(pg_total_relation_size('jobs'));  -- after
```

Run a loop of inserts against `jobs` in a second session while it works, and query `pg_stat_progress_repack` from a third to watch it move through `catch-up`.

Before you run it on a production table that takes hours, do it from a `tmux` session on a machine near the database, not from your laptop over a flaky connection. pg_repack is driven by a client binary, so a dropped connection kills the run, and a server-side `REPACK` can be cancelled the same way once the server notices the client is gone. Either way the copy work is thrown away, and on a multi-terabyte table that's a lost night.

To find which tables are worth it in the first place, `pgstattuple` gives exact numbers but scans the whole table; `pgstattuple_approx('jobs')` is much cheaper on large tables and good enough for deciding. Anything with free space above 30 or 40% that you can't wait for normal inserts to fill is a candidate.
