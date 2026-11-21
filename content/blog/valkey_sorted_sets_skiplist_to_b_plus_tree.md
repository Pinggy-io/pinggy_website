---
title: "Valkey 9.2 Replaces the Sorted Set Skiplist with a B+ Tree"
description: "Valkey 9.2 drops the skiplist behind large sorted sets for fbtree, a 61-way B+ tree. Ordering overhead falls from 50.3 to 28.5 bytes per member and ZADD score updates run 2x faster. How it works and how to check it."
date: 2026-11-21T10:00:00+05:30
lastmod: 2026-11-21T10:00:00+05:30
draft: false
tags: ["Valkey", "database", "open source"]
og_image: "images/valkey_sorted_sets_skiplist_to_b_plus_tree/valkey_sorted_sets_skiplist_to_b_plus_tree_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlZhbGtleSA5LjIgUmVwbGFjZXMgdGhlIFNvcnRlZCBTZXQgU2tpcGxpc3Qgd2l0aCBhIEIrIFRyZWUiLAogICJkZXNjcmlwdGlvbiI6ICJWYWxrZXkgOS4yIGRyb3BzIHRoZSBza2lwbGlzdCBiZWhpbmQgbGFyZ2Ugc29ydGVkIHNldHMgZm9yIGZidHJlZSwgYSA2MS13YXkgQisgdHJlZS4gT3JkZXJpbmcgb3ZlcmhlYWQgZmFsbHMgZnJvbSA1MC4zIHRvIDI4LjUgYnl0ZXMgcGVyIG1lbWJlciBhbmQgWkFERCBzY29yZSB1cGRhdGVzIHJ1biAyeCBmYXN0ZXIuIEhvdyBpdCB3b3JrcyBhbmQgaG93IHRvIGNoZWNrIGl0LiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy92YWxrZXlfc29ydGVkX3NldHNfc2tpcGxpc3RfdG9fYl9wbHVzX3RyZWUvdmFsa2V5X3NvcnRlZF9zZXRzX3NraXBsaXN0X3RvX2JfcGx1c190cmVlX2Jhbm5lci53ZWJwIiwKICAiYXV0aG9yIjogICAgeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiB9LAogICJwdWJsaXNoZXIiOiB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiLCAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIiB9LAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMTEtMjFUMTA6MDA6MDArMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yMVQxMDowMDowMCswNTozMCIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7ICJAdHlwZSI6ICJXZWJQYWdlIiwgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL3ZhbGtleV9zb3J0ZWRfc2V0c19za2lwbGlzdF90b19iX3BsdXNfdHJlZS8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkRhdGFiYXNlcyIsCiAgImtleXdvcmRzIjogIlZhbGtleSA5LjIsIHNvcnRlZCBzZXQsIHNraXBsaXN0LCBCKyB0cmVlLCBmYnRyZWUsIFpBREQsIE9CSkVDVCBFTkNPRElORyBidHJlZSwgUmVkaXMgc29ydGVkIHNldCBtZW1vcnkiCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "valkey_sorted_sets_skiplist_to_b_plus_tree/valkey_sorted_sets_skiplist_to_b_plus_tree_banner.webp" "Bar panel comparing Valkey sorted set ordering overhead: skiplist 50.3 bytes per member against B+ tree 28.5 bytes, a 43% drop" >}}

Valkey 9.2.0 shipped on November 19, 2026, and the most interesting line in its release notes is a small one: large sorted sets are no longer backed by a skiplist. They now sit in **fbtree, a 61-way B+ tree**, and `OBJECT ENCODING` on a big leaderboard key now answers `btree` instead of `skiplist`. The skiplist has been the textbook example of "Redis picked the simple data structure and it was fine" since sorted sets landed in 2009. Valkey's own numbers say it wasn't quite fine: in a 5-million-member test with 20-byte members, the memory spent on ordering dropped from 50.3 to 28.5 bytes per member, and `ZADD` score updates got 105% faster. Commands and replies stay the same, so for most apps this is a free upgrade with one string to watch out for.

{{% tldr %}}
1. **Valkey 9.2.0 (Nov 19, 2026) replaces the skiplist** in large sorted sets with fbtree, a B+ tree with up to 61 entries per node. The member-to-score hashtable is unchanged.
2. **Ordering overhead falls 36 to 43%**: 50.3 B per member down to 28.5 B (sequential inserts) or 32.0 B (random inserts), about 92 to 109 MB saved on a 5M-member set.
3. **Writes gain the most**: `ZADD` score updates +105%, `ZREM` +76%, `ZCOUNT` +27%, `ZRANK` +19%. Hashtable reads like `ZSCORE` barely move.
4. **The speedup is about cache misses, not big-O.** A skiplist step is a dependent pointer fetch from anywhere in RAM; a 512-byte B+ tree leaf hands you 61 neighbours at once.
5. **One visible change**: `OBJECT ENCODING` returns `btree` for large sets. Anything that greps for `skiplist` needs updating.
{{% /tldr %}}

To keep this concrete, the rest of the post uses one key: a game leaderboard called `lb` with 1,000,000 players, each member a 20-byte string like `player:0000000500000`, scored by points. That's the shape sorted sets get used for most, and it is close to the 20-byte members in Valkey's own tests.

## How a sorted set was stored before 9.2

A sorted set has to answer two kinds of question fast. "What is the score of `player:0000000500000`?" is a lookup by member. "Who is at rank 500,000?" or "who scored between 1,000 and 2,000?" is a lookup by order. No single structure is great at both, so Redis (and Valkey, which forked from Redis 7.2.4 in 2024) has always kept two.

Small sets don't bother with any of this. Up to 128 members, each at most 64 bytes, a sorted set is a listpack: one flat block of memory, scanned linearly. Those limits are the `zset-max-listpack-entries` and `zset-max-listpack-value` settings. You can watch the switch happen. This is from a Redis 7.0.15 box I had handy, which behaves the same as Valkey before 9.2:

```bash
$ redis-cli CONFIG GET 'zset-max-listpack*'
1) "zset-max-listpack-entries"
2) "128"
3) "zset-max-listpack-value"
4) "64"
$ redis-cli EVAL "for i=1,128 do redis.call('ZADD','small',i,'m'..i) end return 1" 0
(integer) 1
$ redis-cli OBJECT ENCODING small
"listpack"
$ redis-cli ZADD small 129 m129
(integer) 1
$ redis-cli OBJECT ENCODING small
"skiplist"
```

Member number 129 converts the whole key. From then on, it's a hashtable for member -> score plus a skiplist for order. A <a href="https://en.wikipedia.org/wiki/Skip_list" target="_blank">skiplist</a> is a sorted linked list with express lanes: every node is on level 1, and each node has a 25% chance of also being on the next level up, so the top levels skip over long runs and a search takes O(log n) hops. To make `ZRANK` work, every forward pointer also carries a "span", the number of nodes it jumps over.

Here is what that costs per node, using the figures from the Valkey team's write-up:

- 1 separate heap allocation per member
- an 8-byte backward pointer (for `ZREVRANGE`)
- about 1.33 levels on average, each an 8-byte pointer plus an 8-byte span, so roughly 21 bytes
- the 8-byte score

That's about 37 bytes of bookkeeping before the member string itself, and allocator rounding pushes the measured figure to 50.3 bytes. For a 20-byte member, the index that keeps things in order is more than twice the size of teh data it orders. On my Redis 7.0.15 instance, `MEMORY USAGE lb` for the 1M-player leaderboard came back at 117,749,304 bytes, about 118 bytes per player all in, hashtable and member strings included.

## Why the skiplist is slow on modern CPUs

The memory cost is easy to see. The speed cost is sneakier. Every hop in a skiplist is a pointer to a node that was allocated whenever that member was inserted, so it lives wherever the allocator happened to put it. The CPU can't fetch the next node until it has read the current one, so each hop is a dependent load. An L1 cache hit is about 1 ns; a trip to DRAM is about 100 ns. With an effective branching factor of about 4, finding one member in our 1M-player set takes roughly 10 levels of hops, and most of them miss the cache.

This isn't just theory. A <a href="https://arxiv.org/abs/2507.21492" target="_blank">2025 paper on in-memory indexes</a> (not about Valkey) measured skiplists taking 2.4 to 4.8x more cache misses than a comparable B-tree, with 2 to 8x lower throughput. B-trees are the standard fix because they put many keys in one contiguous node: one cache-line-friendly fetch gets you dozens of comparisons instead of one.

{{< image "valkey_sorted_sets_skiplist_to_b_plus_tree/skiplist_vs_fbtree_layout.webp" "A skiplist with one separately allocated node per member next to a Valkey fbtree inner node pointing to three doubly linked 512-byte leaves" >}}

*The skiplist pays one allocation and a few pointers per member; fbtree packs up to 61 members into each 512-byte leaf. Sizes from {{< link href="https://github.com/valkey-io/valkey/blob/9.2.0/src/fbtree_internal.h" >}}src/fbtree_internal.h{{< /link >}} in Valkey 9.2.0.*

## How fbtree is laid out

fbtree (Valkey calls it a "Feature B+ Tree") lives in `src/fbtree.c`, about 3,000 lines in the 9.2.0 tag, and it replaced `src/skiplist.c` outright in <a href="https://github.com/valkey-io/valkey/pull/4206" target="_blank">PR #4206</a> by Rain Valentine. The layout from `src/fbtree_internal.h`:

- **Leaves are 512 bytes** and hold up to 61 pointers to members, plus `prev` and `next` pointers so leaves form a doubly linked list.
- **Inner nodes are 2048 bytes** and hold up to 61 children. For each child they keep an anchor (the largest member in that child's subtree), the child pointer, and the child's subtree size.
- **Both sizes match jemalloc size classes exactly.** There are `static_assert`s in the header that fail the build if a struct drifts off 512 or 2048 bytes on 64-bit, so no bytes are lost to allocator rounding.
- **Score and member are packed into one string**: an 8-byte normalized score followed by the member bytes. The score is encoded so plain byte comparison sorts correctly, which means the tree never needs to know about doubles. It just compares strings.

With 61-way fanout our 1M-player leaderboard is 4 levels deep (61^3 is about 227,000, so the 1M members need a fourth level), and the header notes that depth 6 covers more than 51 billion elements. Compare that with the 10 or so skiplist levels and a hop per level.

The subtree sizes stored in each inner node are what make `ZRANK` and `ZRANGE lb 500000 500099` work. To find rank 500,000 you walk down, subtracting child sizes as you skip over them, like a skiplist span but in one dense array instead of scattered nodes. That's the same O(log n), with far fewer cache lines touched.

## How the feature bytes route a lookup

The "Feature" part is the clever bit. A naive B+ tree would compare your search key against up to 61 anchor strings at each inner node, and each anchor is itself a pointer to a string somewhere else in memory. That would undo most of the cache win.

fbtree avoids that with two tricks. First, each inner node stores the prefix that all its anchors share, so it can skip the bytes that are identical. In our leaderboard, every member in a leaf starts with the same normalized score bytes or the same `player:000000`, so that's most of the string. Second, it stores 4 "feature" bytes per child: the 4 bytes of each anchor that come right after the shared prefix. Those 4 x 61 bytes sit in 4 rows of 64 bytes, one cache line each.

A lookup takes the 4 bytes of the search key at the same offset and compares them against all 61 children at once with SIMD. The code biases every byte by `0x80` becuase SIMD byte compares like `_mm256_cmpgt_epi8` are signed and the keys are unsigned. If the feature bytes alone pick one child, the search descends without ever loading an anchor string. If two children tie, the features shrink the range and a short binary search over the real anchors finishes the job.

{{< image "valkey_sorted_sets_skiplist_to_b_plus_tree/fbtree_feature_byte_lookup.webp" "Flowchart of one fbtree inner node lookup: skip the shared prefix, take the next 4 bytes, compare them against 61 children with SIMD, then descend on a unique match or binary search on a tie" >}}

Range scans get a simpler win. `ZRANGE` and `ZRANGEBYSCORE` find the starting leaf once, then walk the leaf list sideways, 61 members per node, without climbing back up the tree. The leftmost and rightmost leaves are cached on the index itself, so `ZPOPMIN`, `ZPOPMAX` and appending a new high score are O(1) to reach.

## The benchmark numbers

The memory test used 5 million members of 20 bytes each and measured only the ordered index, since the hashtable and the member strings didn't change:

| Insert order | Skiplist | fbtree | Reduction | Saved on 5M members |
|---|---|---|---|---|
| Sequential | 50.3 B / member | 28.5 B / member | 43% | ~109 MB |
| Random | 50.3 B / member | 32.0 B / member | 36% | ~92 MB |

Random inserts split leaves in the middle and leave them partly empty, so they save less. Since the saving is per member, the relative drop in total memory is biggest when members are small. A leaderboard of short player IDs is close to the best case; a set of 500-byte JSON blobs will barely notice.

Throughput was measured on an AWS Graviton3 `c7g.metal` (64 cores), 9 I/O threads, pipeline depth 10, against a 3M-member set, 5 runs each:

{{< image "valkey_sorted_sets_skiplist_to_b_plus_tree/valkey_92_sorted_set_throughput.webp" "Horizontal bar chart of Valkey 9.2 sorted set throughput change versus the skiplist: ZADD +105%, ZREM +76%, ZCOUNT +27%, ZRANK +19%, ZRANGE +6%, ZRANDMEMBER +2%, ZSCORE +2%, ZRANGEBYSCORE +1%, ZPOPMIN about 0%" >}}

*Data: {{< link href="https://valkey.io/blog/from-skiplist-to-b+tree/" >}}Valkey blog{{< /link >}}, November 2026, measured on the PR branch rather than the final 9.2.0 build.*

The pattern makes sense once you know where the work goes. `ZADD` on an existing member removes it from its old position and inserts it at the new one, two tree walks plus pointer updates, so a shallower, denser tree helps twice. `ZSCORE` and `ZRANDMEMBER` are answered from the hashtable, which didn't change, so +2% is noise. Range reads like `ZRANGE` gain only 6% because walking the index was never the expensive part: formatting and sending 100 replies is.

Two caveats on these numbers. They were measured on the PR branch (`oi/pr3-fbtree-v2`), not rerun on the merged commit, and the Valkey post says so. And the team doesn't report any regressions, but they also tuned the code until it "matched or exceeded" the skiplist on the commands they tested, so anything outside that list is untested territory. If your workload leans on `ZRANGEBYLEX` or `ZUNIONSTORE`, measure it.

## The tradeoffs that came up in review

The PR thread is worth reading if you run big sorted sets in production, because it shows what a B+ tree costs that a skiplist didn't.

- **Deletes leave holes.** A skiplist frees a node and it's gone. A B+ tree leaf with 1 member left still costs 512 bytes. The PR originally deferred any cleanup. The shipped 9.2.0 code compacts on the delete path instead: when the leaves under one bottom inner node drop below 50% full, they get re-packed, moving only pointers so the hashtable entries stay valid. That compaction is paused while a fork child shares memory pages, the same way hashtable rehashing is.
- **Defrag had to be made incremental.** The first version moved every inner node in one pass, which on a huge set is a long stall on the single-threaded event loop. A reviewer caught it and defrag now relocates inner nodes as it scans the leaves.
- **Edge cases in byte-ordered scores.** Review turned up a negative-zero score normalization bug, a lex-range bug for members starting with `0xFF`, and a stack buffer over-read during descent, all fixed before merge. The PR lists 275 unit tests and 337 integration tests passing. Packing doubles into sortable bytes is a well known trick, but it is exactly the kind of thing that has a long tail of corner cases, so I'd expect a few more to shake out in 9.2.x patch releases.
- **The encoding name changed.** Reviewers argued about whether returning `btree` from `OBJECT ENCODING` counts as a breaking change. It's not, by the documented contract, but monitoring scripts and tests that assert `skiplist` will start failing.

## How to check it on your own data

The cheapest test is to load a copy of a real RDB into 9.2.0 and compare. Start the official image (I didn't run 9.2.0 myself for this post, so treat these as untested; the Redis 7 output above is real):

```bash
docker run --rm -d --name vk92 -p 6379:6379 valkey/valkey:9.2.0
```

Then recreate the leaderboard, or restore your own dump, and look at the encoding and the memory:

```bash
valkey-cli EVAL "for i=1,1000000 do redis.call('ZADD','lb',i,string.format('player:%013d',i)) end return 1" 0
valkey-cli OBJECT ENCODING lb     # expect "btree" on 9.2, "skiplist" before
valkey-cli MEMORY USAGE lb SAMPLES 0
```

Run the same three commands against your current version and compare the two `MEMORY USAGE` numbers. `SAMPLES 0` makes it walk every element instead of estimating from a sample. On Redis 7.0.15 the leaderboard came back at 117,749,304 bytes; based on Valkey's index-only figures, you'd expect roughly 22 bytes per member less from the ordering structure alone, so around 20 MB on 1M players, though Valkey 8.1 had already reworked the hashtable side seperately, so a jump from Redis 7 straight to Valkey 9.2 will show a bigger gap than the B+ tree alone explains.

For a rough throughput check, `valkey-benchmark` has built-in synthetic `zadd` and `zpopmin` tests (also untested here, and nowhere near as good as replaying your own traffic):

```bash
valkey-benchmark -t zadd,zpopmin -n 1000000 -P 10 -r 1000000
```

Before you upgrade, grep your dashboards, alert rules and test suites for the literal string `skiplist`. That's the only change your code can actually observe.

## Conclusion

The skiplist survived this long because it is easy to write and easy to reason about, and for a lot of workloads it still is fine. What changed is the hardware: on a CPU where a cache miss costs 100 times a hit, a structure that does one pointer chase per level loses to one that reads 61 keys per cache-friendly node. Valkey's fbtree is a careful version of that idea, with sizes tuned to jemalloc and SIMD feature bytes so most lookups never touch the strings they are routing on.

If you run large sorted sets with short members (leaderboards, rate limit windows, delayed job queues keyed by timestamp), 9.2.0 is worth a test on a restored snapshot. Load it, compare `MEMORY USAGE`, run your heaviest `ZADD` path through `valkey-benchmark`, and fix the one `skiplist` string in your monitoring before it pages someone.
