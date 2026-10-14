---
title: "pg_vectorsearch: How the PRISM Index Beats HNSW in Postgres"
description: "pg_vectorsearch adds the PRISM index to Postgres 18. Learn how RaBitQ quantization and cluster routing cut a 100M-vector build from 42 hours to 1 h 40 min, and what the alpha still can't do."
date: 2026-10-14T10:00:00+05:30
lastmod: 2026-10-14T10:00:00+05:30
draft: false
tags: ["PostgreSQL", "open source", "self-hosted"]
og_image: "images/pg_vectorsearch_prism_index/pg_vectorsearch_prism_index_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogInBnX3ZlY3RvcnNlYXJjaDogSG93IHRoZSBQUklTTSBJbmRleCBCZWF0cyBITlNXIGluIFBvc3RncmVzIiwKICAiZGVzY3JpcHRpb24iOiAicGdfdmVjdG9yc2VhcmNoIGFkZHMgdGhlIFBSSVNNIGluZGV4IHRvIFBvc3RncmVzIDE4LiBMZWFybiBob3cgUmFCaXRRIHF1YW50aXphdGlvbiBhbmQgY2x1c3RlciByb3V0aW5nIGN1dCBhIDEwME0tdmVjdG9yIGJ1aWxkIGZyb20gNDIgaG91cnMgdG8gMSBoIDQwIG1pbiwgYW5kIHdoYXQgdGhlIGFscGhhIHN0aWxsIGNhbid0IGRvLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9wZ192ZWN0b3JzZWFyY2hfcHJpc21faW5kZXgvcGdfdmVjdG9yc2VhcmNoX3ByaXNtX2luZGV4X2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTAtMTRUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0xNFQxMDowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL3BnX3ZlY3RvcnNlYXJjaF9wcmlzbV9pbmRleC8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkRhdGFiYXNlcyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAicGdfdmVjdG9yc2VhcmNoLCBQUklTTSBpbmRleCwgcGd2ZWN0b3IsIEhOU1csIFJhQml0USwgdmVjdG9yIHNlYXJjaCBQb3N0Z3JlU1FMLCBJVkZGbGF0IiwKICAiYWJvdXQiOiBbCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBSSVNNIGluZGV4IiwgImRlc2NyaXB0aW9uIjogIkEgUG9zdGdyZXMgaW5kZXggYWNjZXNzIG1ldGhvZCBmb3IgYXBwcm94aW1hdGUgbmVhcmVzdCBuZWlnaGJvciBzZWFyY2ggYmFzZWQgb24gY2x1c3RlcmVkIHBvc3RpbmcgbGlzdHMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJSYUJpdFEiLCAiZGVzY3JpcHRpb24iOiAiQSAxLWJpdC1wZXItZGltZW5zaW9uIHZlY3RvciBxdWFudGl6YXRpb24gd2l0aCBhIHRoZW9yZXRpY2FsIGVycm9yIGJvdW5kIG9uIGRpc3RhbmNlIGVzdGltYXRlcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkhOU1ciLCAiZGVzY3JpcHRpb24iOiAiQSBncmFwaC1iYXNlZCBhcHByb3hpbWF0ZSBuZWFyZXN0IG5laWdoYm9yIGluZGV4IHVzZWQgYnkgcGd2ZWN0b3IuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJwZ3ZlY3RvciIsICJkZXNjcmlwdGlvbiI6ICJUaGUgUG9zdGdyZXMgZXh0ZW5zaW9uIHRoYXQgYWRkcyB2ZWN0b3IgdHlwZXMgYW5kIG9wZXJhdG9ycy4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "pg_vectorsearch_prism_index/pg_vectorsearch_prism_index_banner.webp" "Headline reading PRISM vs HNSW in Postgres beside two small bar panels: 100M-vector index build time of 49 minutes against 42 hours, and index size of 25 GB against 180 GB" >}}

On October 13, 2026, Tiger Data (the company formerly known as Timescale) released {{< link href="https://github.com/timescale/pg_vectorsearch" >}}pg_vectorsearch{{< /link >}} 0.1.0, a Postgres extension with a new vector index called PRISM. On a 100-million-vector dataset of Cohere embeddings, they report a PRISM index building in 1 hour 40 minutes and answering at 6 ms p50 for 95% recall, on a 128 GiB machine where an HNSW index never finished building. The same HNSW build took 42 hours on a machine with 4x the memory and cost.

It's an alpha, it needs Postgres 18, and the repo says "meant for testing, not production". But the design is interesting on its own, because it drops the graph that pgvector's HNSW is built on and goes back to partitioned lists with much better compression.

{{% tldr %}}
1. PRISM is an **IVF-style index**: it clusters vectors, then a query scans only the nearest clusters. It is closest to pgvector's IVFFlat, with a tree on top to find clusters quickly.
2. Vectors inside the index are stored as **RaBitQ codes, about 1 bit per dimension**. A 768-dimension vector shrinks from 3,072 bytes to about 104. Error bounds on those codes let most candidates be discarded without touching the full vector.
3. On Tiger Data's own benchmarks, a 100M-vector index was **25 GB for PRISM against 180 GB for HNSW**, and on the same 64-vCPU machine built in 49 minutes against 42 hours.
4. It reads existing pgvector `vector` and `halfvec` columns as they are, so trying it needs one `CREATE INDEX`, not a data migration.
5. The alpha has real gaps: no automatic rebalancing under heavy churn, no space reuse after deletes, and filtered queries can come back short.
{{% /tldr %}}

## Why HNSW gets expensive at 100M vectors

HNSW stores a graph. Every vector is a node, every node links to its neighbours, and a query walks the graph toward the closest point. That gives great latency when the whole graph sits in RAM. It gets expensive when it doesn't, because a graph walk is a chain of random reads, and building it means inserting nodes one at a time into a structure that keeps growing.

The numbers in the pg_vectorsearch announcement show it. At 100M vectors, the HNSW index was 180 GB. On the 128 GiB machine (r8i.4xlarge, 16 vCPU) the build did not finish. On a 512 GiB machine (r8i.16xlarge, 64 vCPU) it finished after 42 hours and reached 8 ms p50 at 95% recall, but never reached 99% recall at a usable latency. Moving that finished index back onto the 128 GiB machine pushed queries past 1 second per query at 95% recall.

Tiger Data hit a second problem earlier, with its own DiskANN-style index, pgvectorscale. Testing on more datasets, especially low-dimensional ones, showed parts of the graph could become unreachable and recall would degrade. They said they found no principled fix, and that partitioned-list designs offered stronger guarantees. So they started over, and pgvectorscale moves to maintenance mode.

## How PRISM routes a query

PRISM stands for Partitioned Routing Index for Similarity Matching. At build time it runs k-means to split the vectors into clusters (`nlist` of them), and each cluster gets a posting list: the vectors in it, plus their row pointers (TIDs) in the table. At query time it does four things, as laid out in the {{< link href="https://github.com/timescale/pg_vectorsearch/blob/main/docs/architecture.md" >}}architecture doc{{< /link >}}:

1. Walk a tree of centroids from the root to find the clusters nearest the query.
2. Read those clusters' posting lists.
3. Estimate each candidate's distance from its quantized code, and use error bounds to rule out most of them.
4. Rerank the survivors against the full-precision vectors in the table and return the top k.

Step 1 matters at scale. A flat list of centroids would need a distance computation against every one of them. With a tree, a query compares against a few hundred at the root and then follows a branch factor of 32 to 64 down each level, which is roughly logarithmic in the number of clusters. The centroid pages live in Postgres's ordinary shared buffers. They are touched by every query, so they stay hot without any custom cache.

{{< image "pg_vectorsearch_prism_index/prism_query_path.webp" "Four steps of a PRISM query left to right: walk the centroid tree, read the nearest posting lists, estimate with 1-bit codes and drop most candidates, rerank survivors from the table" >}}

*A query touches a few clusters, and most of the vectors in them are rejected using their compressed codes.*

## What RaBitQ buys you

The second idea is compression. {{< link href="https://arxiv.org/abs/2405.12497" >}}RaBitQ{{< /link >}} (SIGMOD 2024) quantizes each vector to roughly one bit per dimension, and, unlike most quantizers, it comes with a theoretical error bound on the distance estimate. The architecture doc gives the arithmetic for 768 dimensions and 8 KB pages:

| Format | Bytes per vector | Entries per 8 KB page |
|---|---|---|
| RaBitQ code | 112 (8 metadata + 104 data) | about 72 |
| float16 | 1,544 | 5 |
| float32 | 3,080 | 2 |

The data part is 768 bits, or 96 bytes, plus a few correction factors. That is about 30x smaller than float32, which is where the 25 GB against 180 GB comes from.

The error bound is what makes it safe to throw candidates away. For each vector, the estimate comes with an interval the true distance must fall in. If the best case for a candidate is still worse than the current k-th best, it can't be a neighbour, and its full vector is never read. The doc says this filters 80 to 95% of candidates before the rerank step. The rerank reads full-precision vectors from the table, which is why the index stays small and the answers are still exact for the vectors it does return.

## Why vectors are stored in two clusters

Clusters have a weakness: a query's true nearest neighbour can sit just across a boundary, in a cluster the query doesn't scan. PRISM handles this by writing some vectors into a second cluster at build time. Two build options control it, both documented in the architecture doc:

- `boundary_epsilon` (default 0.35) copies vectors near a boundary into the neighbouring cluster, the approach from the SPANN paper.
- `soar_lambda` (default 1.0) adds a secondary assignment chosen so its error is orthogonal to the primary one, the approach from Google's SOAR work in ScaNN. Set either to `0` to turn it off.

The cost is index size, since some vectors are stored twice. Inserts after the build go to a single list only; the extra copies are made at build time.

## Trying it on a table you already have

The README's pgvector path is the quickest way to see whether it helps you. I haven't run these commands myself, so treat them as copied from the {{< link href="https://github.com/timescale/pg_vectorsearch#existing-pgvector-tables" >}}README{{< /link >}}, not tested output. The extension needs PostgreSQL 18, a C11 compiler and Meson:

```bash
meson setup builddir --buildtype=release
meson install -C builddir
```

Then, in `psql`, build a PRISM index next to your existing HNSW one. The `vec32` operator classes work on pgvector's `vector` columns without rewriting the table:

```sql
CREATE EXTENSION pg_vectorsearch;

CREATE INDEX documents_embedding_prism
    ON documents USING prism (embedding vec32_l2_ops);

EXPLAIN (COSTS OFF)
SELECT id, body
FROM documents
ORDER BY embedding <-> (SELECT embedding FROM documents WHERE id = 42)
LIMIT 10;
```

The plan should show an index scan using `documents_embedding_prism`. Operator classes follow your distance: `vec32_l2_ops` for `<->`, `vec32_ip_ops` for `<#>`, `vec32_cosine_ops` for `<=>`, and `vec16_*` for `halfvec` columns. Load the data before creating the index. The index is sized from the row count at `CREATE INDEX`, and the changelog advises against building on an empty table and filling it afterwards.

There is one query-time dial, `prism.nprobe`, the number of clusters each query scans. The default of `0` picks about `0.5 * sqrt(nlist)` clusters to target roughly 95% recall. The tuning guide's rule of thumb is that about a third of that gives roughly 90% recall at several times the throughput:

```sql
SET prism.nprobe = 40;          -- this session
BEGIN;
SET LOCAL prism.nprobe = 400;   -- one transaction, for a recall-critical query
```

## What the benchmark does and doesn't show

Two benchmarks come from the announcement. Both are Tiger Data's own, run with their {{< link href="https://github.com/timescale/rekall" >}}rekall{{< /link >}} tool, with recall@10 measured against brute force.

| Dataset | Instance | Index | Build | Size | p50 at 95% recall |
|---|---|---|---|---|---|
| 100M vectors | r8i.4xlarge, 128 GiB | PRISM | 1 h 40 min | 25 GB | 6 ms |
| 100M vectors | r8i.4xlarge, 128 GiB | HNSW | did not finish | 180 GB | n/a |
| 100M vectors | r8i.16xlarge, 512 GiB | PRISM | 49 min | 25 GB | 4 ms |
| 100M vectors | r8i.16xlarge, 512 GiB | HNSW | 42 h | 180 GB | 8 ms |
| 1M vectors | c8g.large, 4 GiB | PRISM | about 3.1 min | 280 MB | 3 ms |
| 1M vectors | c8g.large, 4 GiB | HNSW | about 21.7 h | 2.05 GB | 122 ms |

Read these with some care. The post does not report vector dimensions, the 1M dataset is not named, and there are no throughput (QPS) numbers or concurrent-client tests; the team lists multi-client testing as planned work. A 21.7-hour HNSW build for 1M vectors on a 4 GiB box says more about a memory-starved build than about HNSW in general, and the authors say as much by not trying HNSW on the 2 GiB machine. They also note that graphs are still the better fit for small datasets that change quickly.

The honest takeaway is narrower than the headline: when the index does not fit in memory, a compressed partitioned index degrades much more gently than a graph. If your HNSW index fits comfortably in RAM and your latency is fine, nothing here is a reason to move.

{{< image "pg_vectorsearch_prism_index/prism_vs_hnsw_100m.webp" "Bar charts comparing PRISM and HNSW on 100 million vectors: build time 49 minutes against 42 hours, index size 25 GB against 180 GB" >}}

*Data: {{< link href="https://www.tigerdata.com/blog/announcing-pg_vectorsearch-scalable-open-source-vector-search-postgresql" >}}Tiger Data, October 2026{{< /link >}}, 100M Cohere embeddings on an r8i.16xlarge (64 vCPU, 512 GiB).*

## What the alpha can't do yet

The {{< link href="https://github.com/timescale/pg_vectorsearch/blob/main/CHANGELOG.md" >}}0.1.0 changelog{{< /link >}} is unusually frank about the gaps. The ones that would bite me first:

- **Churn drifts recall.** Posting lists never split on their own, so a table with heavy inserts or updates slowly gets worse partitions. You fix it by running `CALL prism_rebalance('index_name');` or by `REINDEX`. The maintenance guide calls this experimental.
- **Deletes don't free space.** `VACUUM` turns deleted entries into tombstones that scans skip, but the pages aren't reused until a `REINDEX`.
- **Filters can return fewer rows than `LIMIT`.** The `WHERE` clause is applied after the index emits its top-k, so a filter that doesn't line up with vector proximity can leave you short ({{< link href="https://github.com/timescale/pg_vectorsearch/issues/188" >}}issue 188{{< /link >}}). A partial index on the filter avoids it.
- **Big `LIMIT` values get cut off silently.** The result buffer is sized from `work_mem`. A `LIMIT` larger than it holds, or no `LIMIT`, returns fewer rows with no error. Raise `work_mem` to get more.
- **No upgrade path between prereleases.** Drop and recreate the extension and its indexes. Physical replication and backup/restore are on the list of things to finish before GA.

## How to check it on your own data

Don't take the 6 ms from someone else's 100M-row dataset. Take a copy of your largest embeddings table onto a Postgres 18 test instance, build both indexes, and compare three numbers: build time, index size from `pg_relation_size('your_index')`, and recall at the latency you need, measured against a brute-force scan on a sample of real queries. The `rekall` tool the authors used is open source if you want the same harness. Run it with the memory you would actually give production, because that's where the two designs diverge.
