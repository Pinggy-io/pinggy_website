---
title: "Polars 2.0: Streaming by Default and What Breaks"
description: "Polars 2.0 makes the streaming engine the default for collect(), spills to disk past 80% of RAM, and adds a Map dtype. Here is what changes in your code, tested on 2.0.0."
date: 2026-10-05T18:00:00+05:30
lastmod: 2026-10-05T18:00:00+05:30
draft: false
tags: ["Polars", "Python", "rust", "open source"]
og_image: "images/polars_2_release_breaking_changes/polars_2_release_breaking_changes_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlBvbGFycyAyLjA6IFN0cmVhbWluZyBieSBEZWZhdWx0IGFuZCBXaGF0IEJyZWFrcyIsCiAgImRlc2NyaXB0aW9uIjogIlBvbGFycyAyLjAgbWFrZXMgdGhlIHN0cmVhbWluZyBlbmdpbmUgdGhlIGRlZmF1bHQgZm9yIGNvbGxlY3QoKSwgc3BpbGxzIHRvIGRpc2sgcGFzdCA4MCUgb2YgUkFNLCBhbmQgYWRkcyBhIE1hcCBkdHlwZS4gSGVyZSBpcyB3aGF0IGNoYW5nZXMgaW4geW91ciBjb2RlLCB0ZXN0ZWQgb24gMi4wLjAuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3BvbGFyc18yX3JlbGVhc2VfYnJlYWtpbmdfY2hhbmdlcy9wb2xhcnNfMl9yZWxlYXNlX2JyZWFraW5nX2NoYW5nZXNfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0wNVQxODowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTA1VDE4OjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvcG9sYXJzXzJfcmVsZWFzZV9icmVha2luZ19jaGFuZ2VzLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiRGF0YSBFbmdpbmVlcmluZyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiUG9sYXJzIDIuMCwgUG9sYXJzIHN0cmVhbWluZyBlbmdpbmUsIFBvbGFycyBicmVha2luZyBjaGFuZ2VzLCBQb2xhcnMgdXBncmFkZSwgUG9sYXJzIE1hcCBkdHlwZSwgUG9sYXJzIG91dC1vZi1jb3JlIiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBvbGFycyBzdHJlYW1pbmcgZW5naW5lIiwgImRlc2NyaXB0aW9uIjogIkJhdGNoLWJhc2VkIHF1ZXJ5IGVuZ2luZSB0aGF0IGlzIG5vdyB0aGUgZGVmYXVsdCBmb3IgTGF6eUZyYW1lLmNvbGxlY3QoKS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk91dC1vZi1jb3JlIHByb2Nlc3NpbmciLCAiZGVzY3JpcHRpb24iOiAiU3BpbGxpbmcgaW50ZXJtZWRpYXRlIGRhdGEgdG8gZGlzayBhdCBhYm91dCA4MCUgb2YgUkFNLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTWFwIGR0eXBlIiwgImRlc2NyaXB0aW9uIjogIk5hdGl2ZSBBcnJvdyBNYXBUeXBlIHN1cHBvcnQgd2l0aCBrZXkgbG9va3Vwcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBvbGFycyAyLjAgbWlncmF0aW9uIiwgImRlc2NyaXB0aW9uIjogIlJlbW92ZWQgZGVwcmVjYXRpb25zIGFuZCBiZWhhdmlvdXIgY2hhbmdlcyB0byBjaGVjayB3aGVuIHVwZ3JhZGluZy4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "polars_2_release_breaking_changes/polars_2_release_breaking_changes_banner.webp" "Headline reading Polars 2.0: what breaks, with a flow from collect() through the in-memory engine to the streaming engine" >}}

`pip install -U polars` now gives you 2.0.0, and the biggest change is one you will not see in a diff: `LazyFrame.collect()` runs on the streaming engine by default. Queries use less memory and run faster, but operations that do not need an order, such as `group_by`, no longer promise one. If your pipeline relied on that by accident, it still runs, and the output is quietly in a different order.

This post covers what changed in 2.0.0 (released October 6, 2026), what it breaks, and a short checklist for upgrading. I installed 2.0.0 and ran every Python snippet below unless noted.

{{% tldr %}}
1. **`collect()` now uses the streaming engine.** Row order is no longer guaranteed for `group_by`, `unpivot`, joins and similar operations. Ask for it with `maintain_order`.
2. **Out-of-core is on by default.** Polars starts spilling to disk at about 80% of RAM, with a 64 GB disk budget. Sorts and window functions spill today; joins and group-bys are on the roadmap.
3. **A native `Map` dtype** replaces the old `List(Struct(key, value))` that Arrow and Parquet maps used to become.
4. **Old deprecations are now errors.** `melt`, `with_row_count`, string-to-date casts and `LazyFrame.profile` raise instead of warning.
5. **SQL got bigger and stricter.** Numeric literals are exact decimals, and `QUALIFY` and `GROUPING SETS` work.
{{% /tldr %}}

## What the streaming engine changes

Polars has two ways to run a lazy query. The in-memory engine reads everything it needs and processes each step on the full data. The streaming engine cuts the data into batches and pushes them through the query plan, so a filter-then-aggregate over a big Parquet file never holds the whole file at once. Until 2.0 you opted in with `collect(engine="streaming")`. Now `collect()` does it for you.

You can see the engine's one visible side effect in a few lines. Five million rows, 1,000 groups, on a 4-core machine:

```python
import polars as pl

n = 5_000_000
g = pl.DataFrame({"g": [i % 1000 for i in range(n)], "v": range(n)}).lazy()

r = g.group_by("g").agg(pl.col("v").sum()).collect()
print(r["g"].is_sorted(), r["g"].head(5).to_list())
# False [292, 503, 563, 612, 870]

r = g.group_by("g", maintain_order=True).agg(pl.col("v").sum()).collect()
print(r["g"].head(5).to_list())
# [0, 1, 2, 3, 4]
```

The first result is correct, just not in the order the groups first appeared. The {{< link href="https://docs.pola.rs/releases/upgrade/2/" >}}upgrade guide{{< /link >}} says the same applies to `unpivot` and joins. I could not make a join reorder rows on this machine (5M rows, equal keys, order held), so treat join order as unspecified rather than as broken. If it matters, say so: `join(..., maintain_order="left")` or an explicit `.sort()`.

The practical rule: any test that compares a frame to an expected frame without sorting is the first thing to fail or flake after the upgrade. Add a `.sort()` to the query or use `assert_frame_equal(..., check_row_order=False)`.

## Spilling to disk instead of running out of memory

Out-of-core support is the other half of the streaming story. According to the {{< link href="https://pola.rs/posts/release-polars-2" >}}release post{{< /link >}}, Polars begins writing intermediate data to disk at roughly 80% RAM use, with a default disk budget of 64 GB. It covers sorts, window functions and a range of expressions in this first version. Joins and group-bys are listed as next.

That last part is the caveat. A query that is mostly a big join can still hit the memory limit in 2.0; one that sorts or runs window functions over a large file now should not. I did not stress-test the spill path on this 4-core box, so I have no numbers of my own to add here.

## The Map dtype

Arrow and Parquet have a map type. Before 2.0, Polars turned it into `List(Struct({"key": ..., "value": ...}))`, which made a lookup a filter-and-explode dance. Now it is `pl.Map`:

```python
df = pl.DataFrame({
    "user": ["alice", "bob", "carol"],
    "scores": pl.Series(
        [{"math": 90, "art": 75}, {"math": 60}, {}],
        dtype=pl.Map(pl.String, pl.Int64),
    ),
    "subject": ["art", "art", "math"],
})

df.select(
    "user",
    pl.col("scores").map.get("math").alias("math"),
    pl.col("scores").map.get(pl.col("subject")).alias("by_subject"),
    pl.col("scores").map.len().alias("n"),
)
```

```text
┌───────┬──────┬────────────┬─────┐
│ user  ┆ math ┆ by_subject ┆ n   │
│ ---   ┆ ---  ┆ ---        ┆ --- │
│ str   ┆ i64  ┆ i64        ┆ u32 │
╞═══════╪══════╪════════════╪═════╡
│ alice ┆ 90   ┆ 75         ┆ 2   │
│ bob   ┆ 60   ┆ null       ┆ 1   │
│ carol ┆ null ┆ null       ┆ 0   │
└───────┴──────┴────────────┴─────┘
```

A missing key gives `null`, and the key can come from another column, which is the part the old struct layout could not do. There are also `.map.contains_key()`, `.map.keys()` and `.map.values()`. The flip side is that any code reading a Parquet map column and expecting a list of structs now gets dicts.

## Deprecations that are now errors

Everything Polars warned about in 1.x is gone, and the failures are typed and say what to use. I hit these on 2.0.0:

```text
AttributeRemovedError: `melt` was removed in version 2.0; use `DataFrame.unpivot` instead, with `index` instead of `id_vars` and `on` instead of `value_vars`
AttributeRemovedError: `with_row_count` was removed in version 2.0; use `with_row_index` instead. Note that the default column name has changed from 'row_nr' to 'index'.
InvalidOperationError: casting from string to date is not supported.
It was removed in Polars 2.0. Use `str.to_date()` instead.
```

The `with_row_count` message hides a second change: the default column is now `index`, not `row_nr`. `LazyFrame.profile()` is also removed because it does not fit the streaming engine.

A few behaviours changed without any error, which is worse:

- `df.drop("*")` on a 3-row frame now returns shape `(3, 0)`. It used to collapse to `(0, 0)`.
- `pl.concat(..., how="horizontal")` now requires equal heights and raises `ShapeError`. Use `how="horizontal_extend"` to pad the shorter frame with nulls.
- Exploding an empty list yields zero rows, not one null row.
- `read_csv(..., has_header=False)` names columns `column_0`, `column_1`, starting at 0 instead of 1.
- CSV schema inference over multiple files looks at 10 files by default instead of all of them (`infer_schema_files`).

## SQL changes

The release post calls SQL a first-class citizen, and the engine work backs it up: join reordering, better common-subplan elimination and dynamic predicates. The visible changes are smaller. Literals like `1.5` are now exact decimals:

```python
pl.sql("select 1.5 as v").collect().schema
# Schema([('v', Decimal(precision=2, scale=1))])
```

`QUALIFY` works on window functions, which is the clean way to take the top row per group:

```python
ctx = pl.SQLContext(t=pl.DataFrame({"g": ["a", "a", "b"], "v": [1, 2, 3]}))
ctx.execute("""
  select g, v, row_number() over (partition by g order by v desc) as rn
  from t qualify rn = 1
""").collect()
```

That returned `(a, 2, 1)` and `(b, 3, 1)`. The 2.0 notes also list `GROUPING SETS`, `ROLLUP` and `CUBE`; I only ran `QUALIFY`.

## How fast is it

The Polars team published a TPC-H and TPC-DS comparison against DuckDB 1.5.6, a DuckDB 2.0 alpha and DataFusion 54.0.0 on AWS c7a.4xlarge (16 vCPUs, 32 GB) and c7a.metal (192 vCPUs, 384 GB). Their claim is that Polars wins all but one benchmark on the 4xlarge, and scales 3.8x on TPC-H and 2.2x on TPC-DS going from 16 to 192 vCPUs, against 3.2x and 1.9x for DuckDB. DataFusion timed out on one TPC-DS query and ran out of memory on TPC-H q18.

This is a vendor benchmark, so read it that way. It does publish its method, and you can rerun it from {{< link href="https://github.com/pola-rs/polars-2.0-benchmark" >}}pola-rs/polars-2.0-benchmark{{< /link >}} with `uv run setup.py tpch 10,100` and `uv run bench.py tpch 100 --engine polars --iters 5`. The authors also note that small queries show a constant overhead on 192 threads, which they expect to fix in the next release. Benchmark on your own data before you believe any of these numbers, mine included.

{{< image "polars_2_release_breaking_changes/polars_collect_engine_change.webp" "Two panels comparing LazyFrame.collect() in Polars 1.x with the in-memory engine and in Polars 2.0 with the streaming engine" >}}

*The same lazy query before and after 2.0. Only the engine behind collect() changed.*

## Upgrade checklist

1. Pin and read first: `pip install "polars>=2,<3"` in a branch, then run your test suite with warnings as errors on 1.x first so deprecations show up before the removals do.
2. Grep for the removed names: `melt(`, `with_row_count(`, `.profile(`, and `cast(pl.Date)` or `cast(pl.Datetime)` on string columns.
3. Find every test and export that depends on row order after a `group_by`, `unpivot` or join. Add `maintain_order=True` or a `.sort()`.
4. Check places that assume `column_1` as the first headerless CSV column, or `row_nr` as the row-index name.
5. If you read Parquet with map columns, switch the downstream code from list-of-structs to `.map.get()`.
6. If you want the old engine for a hot path, `collect(engine="in-memory")` is still there.

The full list is in the {{< link href="https://docs.pola.rs/releases/upgrade/2/" >}}official upgrade guide{{< /link >}}. Most of it is mechanical. The row-order change is the one to test for, because it is the only one that does not fail loudly.
