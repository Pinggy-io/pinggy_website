---
title: "pgrust: Someone Rewrote Postgres in Rust and It Now Passes Every Regression Test"
description: "Since April, Michael Malis has been rebuilding PostgreSQL from scratch in Rust with heavy help from AI coding agents. pgrust now passes all 46,066 of Postgres's own regression tests and boots a real Postgres 18.3 data directory. Here's how, and why."
date: 2026-07-09T16:45:00+05:30
draft: false
tags: ["pgrust", "postgres", "postgresql", "rust", "database internals", "open source", "ai coding agents", "codex"]
categories: ["Technology", "Databases", "Open Source"]
og_image: "images/pgrust_postgres_rewritten_in_rust/pgrust_postgres_rewritten_in_rust_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "pgrust_postgres_rewritten_in_rust/pgrust_postgres_rewritten_in_rust_banner.webp" "pgrust: PostgreSQL rewritten from scratch in Rust, now passing 100% of Postgres's 46,000+ regression tests, built with 450,000+ lines of Rust and 8 parallel Codex agents" >}}

pgrust, a from-scratch reimplementation of PostgreSQL written in Rust, now passes all 46,066 queries in Postgres's own regression test suite. Not a driver, not a proxy in front of `libpq`, not a fork that swaps out one subsystem. A separate database engine, written mostly by one person since April 2026, that boots from a real Postgres 18.3 data directory and gives back byte-identical answers to the same test suite the actual Postgres project uses to catch its own regressions.

That result, posted by <a href="https://malisper.me/pgrust-passes-100-of-postgresqls-regression-tests/" target="_blank">Michael Malis</a> and picked up on <a href="https://news.ycombinator.com/item?id=48841676" target="_blank">Hacker News</a> this week, is the kind of thing that sounds like a joke until you read the commit history. It isn't a joke. It's also a pretty concrete data point on what a single motivated developer can do with a database this complicated once AI coding agents are cheap enough to run in parallel.

{{% tldr %}}
1. **What it is**: <a href="https://github.com/malisper/pgrust" target="_blank">pgrust</a> is a rewrite of PostgreSQL 18.3 in Rust that passes 100% of Postgres's 46,066 regression queries and its isolation tests, and is disk-compatible with real Postgres data directories.
2. **Who built it**: Michael Malis, former database team lead at Heap and creator of the Postgres query-analysis tool Perfalytics, working with his friend Jason Seibel.
3. **The timeline**: started April 20, 2026 at 250,000 lines of Rust and roughly a third of the tests passing; 67% by May 4; 100% by late June. The codebase is now past 450,000 lines.
4. **How**: heavy use of AI coding agents, mainly OpenAI's Codex, at one point running 8 accounts in parallel at $200/month each, pointed at the real Postgres C source and asked to explain and then reimplement each subsystem.
5. **What it isn't yet**: production-ready, performance-tuned, or compatible with existing Postgres extensions (PL/Python, PL/Perl, PL/Tcl, and most of `contrib` are not supported).
6. **Try it**: a WebAssembly build runs Postgres queries directly in your browser at <a href="https://pgrust.com/" target="_blank">pgrust.com</a>, or pull `malisper/pgrust:v0.1` from Docker.
{{% /tldr %}}

## What pgrust actually is

Postgres is old, in the good way: three decades of C, a battle-tested planner, and a regression suite with tens of thousands of queries that encode three decades of "we got this wrong before, don't get it wrong again." Rewriting that from zero in a different language and matching its behavior isn't a weekend hack, it's closer to reverse-engineering a very large, very precise contract.

pgrust targets exact compatibility with Postgres 18.3: same wire protocol, same SQL dialect, same on-disk format. That last part is the detail that makes this more than a toy. pgrust can start up pointed at an existing Postgres 18.3 data directory and read the data that's already there, because it implements the same heap and index page layouts Postgres does, not a translated copy. It also passes Postgres's isolation tests, the suite that exercises concurrent transactions and checks that locking and MVCC visibility behave the way Postgres promises they will.

The project's stated goal, from the <a href="https://github.com/malisper/pgrust" target="_blank">GitHub README</a>, is to make Postgres "easier to change from the inside": keep Postgres's actual behavior as the source of truth, use Rust so structural changes are less terrifying to make than in the original C, and use AI-assisted programming to get through the sheer volume of subsystems a real database needs before any of that experimentation is possible. It's AGPL-3.0 licensed, which is itself a small signal: this is aimed at people who want to build on it and contribute back, not repackage it into a closed product.

## From a third of the tests to all of them, in about ten weeks

The origin story, laid out in Malis's <a href="https://malisper.me/pgrust-rebuilding-postgres-in-rust-with-ai/" target="_blank">April 20 post</a>, starts almost flippantly: "That's why two weeks ago I started working on pgrust." Two weeks in, he had 250,000 lines of Rust covering all the major Postgres subsystems, a third of the regression suite passing, and a WebAssembly build compiled to run entirely in a browser tab. Asked how that much of a real database got built that fast, his answer was blunt: "I got a lot of help with AI."

By the <a href="https://malisper.me/pgrust-update-at-67-postgres-compatibility-and-accelerating/" target="_blank">May 4 update</a>, the pass rate was at 67%, up from a third a week before, after another 90,000 lines of Rust and 280 merged PRs in two weeks. The scale of the AI usage by that point was concrete rather than vibes: 8 Codex accounts running in parallel, at $200 a month each. The more interesting number, though, is the trend line on effort: token usage per regression test fixed was going *down* over time, not up, even as the remaining bugs presumably got harder. Malis describes moving an order of magnitude faster against the test suite than during the initial foundational work, even after accounting for the extra tokens spent.

By late June, per the <a href="https://malisper.me/pgrust-passes-100-of-postgresqls-regression-tests/" target="_blank">most recent post</a>, all 46,066 regression queries passed, plus the isolation tests. The workflow behind that, as described across the posts, was consistent: point a coding agent at the relevant piece of real Postgres source, have it explain what that component does and why, then work with it to build a minimal, behavior-matching version of that piece in Rust, using the actual Postgres regression suite as the pass/fail oracle the whole way. That's a meaningfully different approach from "ask an LLM to write a database," it's closer to test-driven development where the tests are 46,000 queries someone else already wrote and validated over 30 years.

## Why bother rewriting Postgres at all

The obvious HN comment on any "rewrite X in Rust" post is "why not just fix X." Malis has an answer for that, laid out in a companion piece he calls <a href="https://malisper.me/the-four-horsemen-behind-thousands-of-postgres-outages/" target="_blank">"The Four Horsemen Behind Thousands of Postgres Outages"</a>: recurring, structural ways Postgres breaks in production that come up constantly when talking to engineers at startups, drawn partly from his time running the database team at Heap, where he managed roughly a petabyte of data across dozens of Postgres instances.

The pattern he points at: Postgres has more than 350 tunable settings, and getting `autovacuum` misconfigured among them can take the whole database down. Postgres also has no built-in connection pooling, which means an unpooled burst of client connections can crash the server outright, forcing every serious deployment to bolt on PgBouncer or equivalent. JSONB workloads suffer from weak query planner statistics, which produces plans that look fine until they don't. And the planner can flip to a dramatically worse execution plan with no warning when data distribution shifts slightly, which is one of the more infuriating failure modes to debug at 2 a.m.

None of these are secrets. They're the kind of thing every experienced Postgres operator has a war story about. The bet pgrust is making is that a Rust codebase with the same tests as an oracle is a better place to attack these problems than 30 years of C, because you can restructure something risky and immediately know, from the regression suite, whether you broke anything. The project's own roadmap (nicknamed after that "Four Horsemen" framing) lists multithreaded internals, built-in connection pooling, better JSONB statistics, fast database forking/branching, storage designs that don't need vacuuming at all, and runtime guardrails against bad query plans, including plans generated by AI-written SQL, as the next targets.

## What it isn't, yet

The project is upfront about this, which is worth taking at face value rather than reading as false modesty. pgrust is "not production-ready yet" and "not performance optimized yet," direct quotes from the README. Existing Postgres extensions, including procedural languages like PL/Python, PL/Perl, and PL/Tcl, generally don't work, though some bundled `contrib` modules have been ported over.

Performance numbers are genuinely hard to pin down right now, and the project says so: components like the query planner have been added since the last round of benchmarking, and those additions aren't optimized, so old numbers don't describe the current build. The one concrete data point that has come out is narrow but interesting: on some benchmarks, Rust's regex engine ran about 10x faster than Postgres's own C implementation of regex matching, which the author frames as a proof of "there's room to beat Postgres somewhere," not a claim that pgrust is faster overall. Right now, "does it give you the same answer as Postgres" and "is it fast" are still two separate, mostly unlinked questions for this project, and only the first one has a real answer.

## Trying it yourself

The lowest-friction way to poke at pgrust is the WebAssembly build at <a href="https://pgrust.com/" target="_blank">pgrust.com</a>, which compiles the whole engine to `wasm32` and runs it client-side in your browser tab, no server, no signup. It ships preloaded with examples that show off window functions, JSONB, foreign keys, `EXPLAIN ANALYZE` output, regex, and (because someone always does this) a recursive CTE that implements a small Lisp interpreter.

For anything past kicking the tires, there's a Docker image (`malisper/pgrust:v0.1`) and build instructions for macOS and Debian/Ubuntu in the <a href="https://github.com/malisper/pgrust" target="_blank">GitHub repo</a>, along with a Discord for people tracking development closely.

## The bigger pattern here

Set aside whether pgrust ever ships a production build. The interesting HN-adjacent story isn't really "Postgres in Rust," it's what the timeline implies about solo-developer ceiling in 2026. Ten weeks, one primary author plus a collaborator, and a codebase that reimplements the storage engine, planner, executor, and wire protocol of one of the most widely deployed pieces of infrastructure software on the internet, closely enough to pass its own 46,000-query test suite. That's not a small side project scope, and a year or two ago it would have been a multi-year team effort or it wouldn't have happened at all.

The mechanism that made it tractable is specific, not vague "AI helps developers" hand-waving: a codebase with a decades-old, extremely thorough, machine-checkable test suite is exactly the shape of problem where an AI coding agent can be pointed at "make this pass" and left to iterate, because the oracle for correctness already exists and doesn't need a human to write it from scratch. Not every rewrite has that. Postgres, unusually, does. That's probably the more transferable lesson for anyone eyeing their own "rewrite the scary legacy thing" project: the AI-assisted version of that plan gets a lot more realistic once you already have, or can build, a test suite good enough to trust as ground truth.

## Conclusion

pgrust passing 100% of Postgres's regression tests doesn't mean Postgres has a real successor yet. It's not fast, it doesn't run your extensions, and "not production-ready" is doing a lot of work in that sentence. What it does mean is that a two-person effort took a serious run at one of the hardest kinds of software to clone faithfully, in about ten weeks, and got far enough that the result is disk-compatible with the real thing and indistinguishable from it on every test the real project uses to check itself. Whether pgrust becomes a genuine alternative or a very impressive research artifact that quietly stalls at "not production ready," the underlying claim, that AI-assisted development changes what's tractable for one or two people to attempt against decades-old, tests-first infrastructure, is the part worth remembering next time someone says a rewrite like this would take a team five years.
