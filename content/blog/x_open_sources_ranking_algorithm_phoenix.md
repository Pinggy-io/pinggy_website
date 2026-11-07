---
title: "X Open-Sourced Its Ranking Algorithm. Here's What Phoenix Actually Does"
description: "X released the code behind its For You feed: a two-tower retrieval model, a transformer called Phoenix whose candidates can't see each other, and a new tool that shows if you've been shadowbanned."
date: 2026-08-14T11:00:00+05:30
draft: false
tags: ["X (Twitter)", "open source", "Machine Learning", "recommendation systems", "social media"]
categories: ["Technology", "AI", "Machine Learning"]
og_image: "images/x_open_sources_ranking_algorithm_phoenix/x_open_sources_ranking_algorithm_phoenix_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFJlYWQgWCdzIE9wZW4gU291cmNlIFJhbmtpbmcgQWxnb3JpdGhtIiwKICAiZGVzY3JpcHRpb24iOiAiU3RlcC1ieS1zdGVwIGd1aWRlIHRvIG5hdmlnYXRpbmcgdGhlIHhhaS1vcmcveC1hbGdvcml0aG0gcmVwb3NpdG9yeSwgdHJhY2luZyBob3cgdGhlIFBvc3QgUGlwZWxpbmUgc2NvcmVzIGEgY2FuZGlkYXRlLCBhbmQgcnVubmluZyB0aGUgUGhvZW5peCBtb2RlbCdzIHN5bnRoZXRpYyB0cmFpbmluZyBwaXBlbGluZSBsb2NhbGx5LiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDbG9uZSB0aGUgcmVwb3NpdG9yeSIsCiAgICAgICJ0ZXh0IjogIkNsb25lIGdpdGh1Yi5jb20veGFpLW9yZy94LWFsZ29yaXRobSwgbGljZW5zZWQgdW5kZXIgQXBhY2hlIDIuMC4gSXQgaXMgdGhlIHByb2R1Y3Rpb24gY29kZSBiZWhpbmQgdGhlIEZvciBZb3UgZmVlZCBtaW51cyB4QUktc3BlY2lmaWMgaW5mcmFzdHJ1Y3R1cmUsIG5vdCBhIHNpbXBsaWZpZWQgZGVtby4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVHJhY2UgdGhlIFBvc3QgUGlwZWxpbmUiLAogICAgICAidGV4dCI6ICJTdGFydCBpbiBob21lLW1peGVyLyB0byBzZWUgcGlwZWxpbmUgb3JjaGVzdHJhdGlvbiBhbmQgc2NvcmluZyB3ZWlnaHRzLCB0aGVuIGZvbGxvdyBjYW5kaWRhdGUtcGlwZWxpbmUvIHRocm91Z2ggcmV0cmlldmFsIChUaHVuZGVyLCBQaG9lbml4IHJldHJpZXZhbCwgU2ltQ2x1c3RlcnMpLCBoeWRyYXRpb24sIHByZS1zY29yaW5nIGZpbHRlcnMsIHNjb3JpbmcsIHNlbGVjdGlvbiwgYW5kIHBvc3Qtc2VsZWN0aW9uIGZpbHRlcnMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlJlYWQgdGhlIFBob2VuaXggbW9kZWwgY29kZSIsCiAgICAgICJ0ZXh0IjogIk9wZW4gcGhvZW5peC8gZm9yIHRoZSB0d28tdG93ZXIgcmV0cmlldmFsIG1vZGVsIGFuZCB0aGUgcmFua2luZyB0cmFuc2Zvcm1lciwgaW5jbHVkaW5nIHRoZSBhdHRlbnRpb24gbWFzayB0aGF0IGJsb2NrcyBjYW5kaWRhdGVzIGZyb20gYXR0ZW5kaW5nIHRvIGVhY2ggb3RoZXIgc28gc2NvcmVzIHN0YXkgaW5kZXBlbmRlbnQgb2YgYmF0Y2ggY29tcG9zaXRpb24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlJ1biB0aGUgc3ludGhldGljIHRyYWluaW5nIHBpcGVsaW5lIiwKICAgICAgInRleHQiOiAiVXNlIHV2IHJ1biBweXRob24gcmVmZXJlbmNlL3dvcmxkX3NuYXBzaG90cy5weSBhbmQgZHVtcF9nZW4ucHkgdG8gZ2VuZXJhdGUgc3ludGhldGljIGRhdGEsIHJlZmVyZW5jZS90cmFpbl9zeW50aC5weSB0byB0cmFpbiBhIHNtYWxsIG1vZGVsLCB0aGVuIHJlZmVyZW5jZS9yZXRyaWV2ZV90aGVuX3JhbmsucHkgdG8gc2VlIHJldHJpZXZhbCBhbmQgcmFua2luZyBydW4gZW5kIHRvIGVuZCBvbiB5b3VyIG93biBtYWNoaW5lLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDaGVjayB5b3VyIG93biBVbmRlciB0aGUgSG9vZCBkYXRhIiwKICAgICAgInRleHQiOiAiSWYgeW91ciBhY2NvdW50IGlzIGVsaWdpYmxlLCBvcGVuIHRoZSBVbmRlciB0aGUgSG9vZCBwYWdlIGluIFgncyBzZXR0aW5ncyBhbmQgZG93bmxvYWQgdGhlIGFnZ3JlZ2F0ZSBKU09OIHRvIHNlZSB3aGljaCB2aXNpYmlsaXR5LWxpbWl0aW5nIGxhYmVscywgaWYgYW55LCB3ZXJlIGFwcGxpZWQgdG8geW91ciBhY2NvdW50IG9yIHBvc3RzIGluIHRoZSBwYXN0IG1vbnRoLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "x_open_sources_ranking_algorithm_phoenix/x_open_sources_ranking_algorithm_phoenix_banner.webp" "Hero graphic for X open-sourcing its ranking algorithm, showing a code diff turning a private score_post function public, next to stats: 28.6k GitHub stars in 24 hours, 10-15x larger than the 2023 release, Apache 2.0 license, transformer-based ranking" >}}

X pushed a repository called `x-algorithm` to GitHub on August 13, and by the next morning it had passed 28,000 stars. That number alone isn't the story, plenty of repos spike and fade. What's actually in the repo is: the real "For You" feed code, a transformer-based ranking model called Phoenix that's structurally different from anything a social platform has published before, and a companion feature called "Under the Hood" that lets you download a JSON file showing whether your own posts have been quietly limited.

This isn't the first time a version of this happened. In March 2023, Twitter published two repositories under the same promise of algorithmic transparency, and Elon Musk warned people up front that it would be "quite embarrassing." It mostly was: a Scala-and-Java service mesh with a straightforward three-stage pipeline (source candidates, rank them, apply heuristics) that told you the shape of the system without explaining much about why any specific post ranked where it did. This release is a different animal. It's reportedly 10 to 15 times larger than the 2023 code, it ships the actual scoring math, and it comes paired with a tool that answers the one question the 2023 release never could: was I shadowbanned?

{{% tldr %}}
1. **What shipped:** the production code behind X's "For You" feed, on GitHub at <a href="https://github.com/xai-org/x-algorithm" target="_blank">xai-org/x-algorithm</a> under Apache 2.0, expanded to roughly 10-15x the size of the 2023 release.
2. **The model:** Phoenix, a transformer that does both retrieval (narrowing millions of posts to thousands via a two-tower embedding model) and ranking (scoring those candidates with a design that stops any candidate from attending to any other candidate during inference).
3. **The formula:** each post's score is a weighted sum of predicted action probabilities (favorite, reply, repost, and more), then adjusted for author diversity, whether the post is out-of-network, and whether the author is new.
4. **The new transparency feature:** "Under the Hood," a settings page that lets eligible accounts download a monthly JSON file showing which visibility-limiting labels, if any, were applied to their account or posts.
5. **What's still closed:** the specific LLM prompts used to predict rule violations, some rule definitions, and everything outside the For You timeline, including ads.
6. **Can you run it:** yes. The `phoenix/` folder ships synthetic data generators and training scripts so you can run the retrieval-then-ranking pipeline locally without any real user data.
{{% /tldr %}}

## What actually shipped

The headline claim from X's VP of Product, Keith Coleman, was blunt: "This is the kind of thing that I think people will be fairly shocked that we are releasing." Whether or not that holds up, the scope is real. The repository's README describes it as the code that "combines posts from accounts users follow (in-network) with discovered content from unfollowed accounts (out-of-network), then filters and ranks everything using machine learning," and it's structured as two pipelines plus one standing process:

- **Post Pipeline**: retrieves candidates, hydrates them with metadata, scores them, and filters the result.
- **Blending Pipeline**: wraps the ranked posts and interleaves ads, recommendations, and prompts around them.
- **Labeling Path**: a continuous, separate process that runs classifiers and rule-based systems to generate the visibility labels that decide whether a post ships normally, sits behind a warning, or gets dropped.

The repo lays out its components as a table you can walk directly:

| Component | Purpose |
|---|---|
| `home-mixer/` | Pipeline orchestration and scoring weights |
| `candidate-pipeline/` | Framework defining stage types (source, hydrator, filter, scorer) |
| `thunder/` | In-network post cache |
| `phoenix/` | Retrieval model and ranking transformer |
| `simclusters/` | Cluster-based post discovery |
| `visibility-filtering/` | Drop / allow / interstitial decisions |
| `grox/`, `media-model-proxy/`, `clip/` | Content classifiers |
| `agatha/`, `bdsm/`, `user-cred-v2/` | Account scoring models |
| `scarecrow/`, `botmaker/` | Rule-based labeling system |

Coleman's other line about the release is arguably the more interesting one for developers specifically: the intent is for the algorithm to become visible "to the public, but also, like, by the public," with outside contributors able to submit pull requests against the ranking logic. Whether X actually merges meaningful community PRs into a system this central to its business is the real test, but the door being open at all is new.

## How a candidate becomes a post in your feed

{{< image "x_open_sources_ranking_algorithm_phoenix/x_open_sources_ranking_algorithm_phoenix_pipeline.webp" "Diagram of X's Post Pipeline: retrieval narrows millions of candidates via Thunder, Phoenix, and SimClusters, hydration enriches them with metadata, Phoenix ranking scores them with a transformer that blocks candidates from attending to each other, and visibility filtering decides whether each post ships, gets an interstitial, or is dropped" >}}

Query hydration runs first and collects viewer context: recent engagement, who you follow, and your blocks and mutes. From there, retrieval pulls candidates from three separate sources: **Thunder** for posts from accounts you follow, **Phoenix retrieval** for out-of-network discovery, and **SimClusters** for cluster-based recommendations. That narrows a pool of millions down to a few thousand candidates.

Pre-scoring filters strip out duplicates, old posts, blocked accounts, muted keywords, and content you've already seen. What's left goes through Phoenix's ranking transformer, gets a final score, and survives one more round of post-selection filters that enforce visibility rules and deduplicate conversations before the blending pipeline slots in ads and recommendations around the result.

## Phoenix: one architecture doing two different jobs

The part of this release worth actually reading the code for is `phoenix/`, because retrieval and ranking share the same transformer trunk and differ only in their output heads.

**Retrieval is a two-tower model.** A user tower encodes your engagement history through a transformer and produces a single normalized embedding, built from your interaction history plus one additional token carrying coarse profile data like country and language. Notably, production doesn't use learned per-user ID embeddings at all. A candidate tower does the same for every post in the corpus, but instead of representing a post by its raw ID, it uses **semantic IDs**: residual-quantized codes across 6 levels of 256 codes each, derived from multimodal embeddings of the post, plus a hashed author identifier. That choice matters more than it looks: representing content by what it *is* rather than by an opaque ID means the model can generalize to posts it has never seen during training, instead of memorizing a fixed vocabulary of post IDs. At every checkpoint save, the candidate tower re-embeds the entire corpus and stores it inside the checkpoint, so serving is just a dot-product similarity search between your embedding and that index.

**Ranking is the same kind of transformer with one deliberate constraint.** The model scores a batch of candidates for a user, but candidates are masked from attending to each other. Users and history get full bidirectional attention; candidates can attend to the user and history but not to each other, so a candidate's score never changes based on what else happens to be in the same batch. That's a batch-invariance guarantee, and it's the kind of detail that only matters once you've operated a ranking system at scale and discovered that scores silently drifting with batch composition is a real, hard-to-debug failure mode.

The published model sizes make the production/lightweight split explicit:

| Parameter | Ranking (Prod) | Ranking (Nano) | Retrieval (Prod) | Retrieval (Nano) |
|---|---|---|---|---|
| Embedding dim | 2560 | 512 | 1024 | 512 |
| Transformer layers | 8 | 4 | 8 | 4 |
| Query/KV heads | 20/4 | 4/2 | 16/4 | 4/2 |
| History length | 1022 | 1022 | 1023 | 1022 |
| Candidate length | 64 | 64 | 64 | 64 |

Training-wise, the ranking model predicts several engagement types at once (favorite, reply, repost, and more) as multi-label targets, plus a continuous regression head for dwell time, while retrieval is trained contrastively using favorites as the positive signal against in-batch and sampled negatives.

## The formula behind "why is this post here"

Once Phoenix has scored a candidate on every action it predicts, those scores collapse into one number:

```
final_score = Σ (weight_i × P(action_i))
```

That weighted sum then goes through three adjustments before the post is placed: an **author diversity decay** so one prolific account can't dominate your timeline, an **out-of-network discount** that mildly penalizes posts from accounts you don't follow relative to equally-scored posts from accounts you do, and a **new-author boost** that gives newer accounts a nudge they wouldn't otherwise earn on engagement alone. None of the individual weights are published as fixed numbers in the README, since the repo describes them as externalized configuration synced from production via cron rather than hardcoded constants, but the formula's shape and the three levers pulling on it are now public in a way they weren't a week ago.

## What's still closed, on purpose

X is upfront that this isn't a full disclosure. The README states plainly that "certain files remain unpublished: specific LLM prompts for content classifiers and some rule definitions," and the stated reason is straightforward: publishing the exact prompts a Grok-based classifier uses to predict rule violations would hand bad actors a way to probe and route around enforcement. Ads systems and anything outside the For You timeline stay closed too.

That caveat has precedent. Researchers who picked through the 2023 release noted it revealed comparatively little about actual behavior, mostly because a codebase without the production weights, the exact feature values, or the account-scoring internals only tells you the shape of a system, not how any specific post got ranked. This release goes considerably further by including real model architecture and the scoring formula, but the same asymmetry is still true in miniature: you can now read exactly how Phoenix scores a post, but not the specific signals that feed the abuse and spam classifiers sitting upstream of it.

## Under the Hood: the shadowban question, answered with a JSON file

The feature getting the most attention outside developer circles is "Under the Hood," a new page in X's settings. Accounts that have posted at least 10 times in the past month can download an aggregate stats file for the past calendar month showing whether any visibility-limiting labels, covering categories like NSFW, spam, violence, impersonation, hateful conduct, and civic integrity, were applied to their account or posts.

Two caveats are worth knowing before you go looking for it. First, it's aggregate, not per-post: you get a monthly summary, not "this specific post was throttled." Second, it's currently a pilot restricted to accounts at least a year old, ahead of a wider rollout X hasn't dated yet. The output is also, by design, a JSON file rather than a friendly dashboard, which is clearly meant for exactly the kind of person reading a post like this one; X's own messaging suggests non-technical users feed it into an AI assistant alongside the GitHub repo to get a plain-language read.

## Trying it yourself

You don't need production data or an X account to see Phoenix run. The `phoenix/` folder ships synthetic data generators specifically so anyone can exercise the full retrieval-then-ranking pipeline locally:

```bash
# Generate synthetic data: semantic-ID snapshots, embeddings, and a corpus
uv run python reference/world_snapshots.py --out ./synth_index --seed 20260721
uv run python reference/dump_gen.py --out ./synth_dump --seed 20260721

# Train a small model end to end on the synthetic data
uv run python reference/train_synth.py --data ./synth_dump --steps 6 --out ./checkpoints

# Run the retrieve-then-rank pipeline against your own checkpoint
uv run python reference/retrieve_then_rank.py --data ./synth_dump --sessions 3 --topk 16
```

That's a real, if scaled-down, run of the same two-stage architecture described above: retrieval narrows a synthetic corpus down with the two-tower model, then the ranking transformer scores what's left using the same candidate-isolation attention mask that production uses. It won't reproduce X's actual weights or real engagement data, but it's enough to step through the code with a debugger and see exactly where a candidate's score comes from, which is more than any prior social platform has offered.

## Should you care if you're not building a feed

If you post on X and have ever wondered whether a specific thread just quietly underperformed or was actively limited, Under the Hood is the first real instrument for that question, even in its limited, aggregate, year-old-accounts-only form. If you build recommendation systems, retrieval, or anything with a ranking step, `phoenix/` is a genuinely useful reference for a production-grade two-tower-plus-transformer design, particularly the candidate-isolation attention mask, which is a pattern worth stealing regardless of what you're ranking. And if you're just a developer who likes reading how large, adversarial-by-nature systems are actually built, this is one of the few times a platform this size has shown its scoring math instead of a marketing diagram of it.

The honest caveat is the same one that applies to any vendor-published transparency effort: X chose what to publish, and the parts most useful for gaming the system, the classifier prompts and some rule definitions, are exactly the parts still withheld. That's a reasonable trade-off for X to make, and it's also worth remembering while you read the rest of the code as if it were the whole picture.
