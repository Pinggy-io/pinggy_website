---
title: "GitHub Stacked PRs Are Live: What Actually Works, and What Graphite Still Does Better"
description: "GitHub's native stacked pull requests hit public preview on July 30, 2026, rolling out to every repo with no waitlist. Here's how the gh stack CLI works, what the PR-size data actually says, and the squash-merge edge cases GitHub hasn't solved yet."
date: 2026-08-01T10:30:00+05:30
draft: false
tags: ["GitHub", "stacked PRs", "pull requests", "code review", "git workflow", "developer tools", "Graphite", "gh CLI", "software engineering"]
categories: ["Technology", "Development", "Developer Tools"]
og_image: "images/github_stacked_prs/github_stacked_prs_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "github_stacked_prs/github_stacked_prs_banner.webp" "Three stacked GitHub pull requests shown as connected cards, each targeting the branch below it instead of main, illustrating GitHub's new native stacked PR workflow" >}}

As of July 30, 2026, GitHub will let you open a pull request against another pull request instead of against `main`, and it'll actually track the relationship for you. Stacked pull requests moved from a private, waitlisted preview to {{< link href="https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/" >}}public preview{{< /link >}} that day, and GitHub says it's rolling out to every repository "over the coming days," no opt-in required. If you've spent the last few years watching your teammates rebase a five-branch stack by hand, or paying Graphite $20 a seat a month to do it for you, this is the feature that's supposed to make that unnecessary.

It's also not finished. The {{< link href="https://news.ycombinator.com/item?id=49112232" >}}Hacker News thread on the launch{{< /link >}} pulled in 516 points and 282 comments in a day, and a good chunk of that discussion is people pointing at exactly where the feature still breaks.

{{% tldr %}}
1. **What shipped**: native stacked PRs, in public preview on GitHub.com, the `gh` CLI, the mobile app, and Copilot via a `gh-stack` skill, as of July 30, 2026.
2. **The idea**: a stack is an ordered chain of branches where each one targets the branch below it instead of `main`. Review and merge checks run per-PR, but you can merge the whole stack in one action once every layer is approved.
3. **Why anyone cares**: an oft-cited analysis of 1.5 million pull requests found PRs in the 200-400 line range get approved roughly 3x faster and ship with about 40% fewer defects than larger ones. Stacking is a way to keep that size discipline on features that don't fit in one PR.
4. **What's still rough**: squash-merging a PR in the middle of a stack rewrites its commit hash and can break the chain, requiring re-approval on every PR in a stack, and "Merge with rebase" always rewrites commits, which some teams rely on fast-forward merges to avoid.
5. **What it means for Graphite and Aviator**: GitHub's version needs zero installs for a reviewer to understand a stack, which was the biggest adoption blocker for third-party tools. Graphite still has years of polish on the edge cases GitHub hasn't gotten to yet.
{{% /tldr %}}

## What a "stack" actually is

Stacked PRs aren't a new idea, they're new to GitHub. The pattern has existed inside Meta for close to a decade (their internal tool predates the public `ghstack` project), and Graphite built an entire company around bringing it to teams that don't have Meta's internal tooling.

The mechanics are simple even if the tooling around them isn't. A stack is two or more pull requests in the same repo where the bottom PR targets your trunk branch (usually `main`), and each PR after that targets the branch of the PR directly below it. So instead of one 800-line PR titled "add rate limiting," you get three:

1. `feat/rate-limit-mw` → `main` (the middleware itself)
2. `feat/rate-limit-wire` → `feat/rate-limit-mw` (wiring it into the router)
3. `feat/rate-limit-tenant` → `feat/rate-limit-wire` (per-tenant overrides)

Each layer gets its own diff, its own review thread, and its own CI run. A reviewer looking at PR 2 sees only the wiring change, not the middleware code that's still under review one layer down. That's the entire pitch: you get to keep writing PRs that are small enough to review in one sitting, even when the total change is not small at all.

What's new is that GitHub now tracks this natively. Before this, if you wanted a stack, you either rebased every downstream branch by hand every time the bottom one changed, or you paid for Graphite, Aviator, or a similar tool to do it. GitHub's pitch, laid out in its {{< link href="https://docs.github.com/en/pull-requests/get-started/about-stacked-prs" >}}stacked PRs documentation{{< /link >}}, is that since the stack now lives inside GitHub's own PR object model, your existing branch protections, required reviews, and status checks apply to each layer automatically, without a bot or a browser extension in the loop.

## The gh CLI is where you'll actually live

The web UI shows you a stack once it exists, but building one is a CLI job, via a new `gh stack` extension:

```bash
# start a new stack from the current branch
gh stack init user-model

# add the next layer on top
gh stack add search-api

# push every active branch in the stack in one shot,
# each with its own --force-with-lease
gh stack push

# push branches, then create or update a PR for every layer
gh stack submit

# check out a stack by number, PR number, PR url, or branch name
gh stack checkout 1284
```

`gh stack submit` is the one that matters day-to-day: it pushes your branches and opens (or updates) a PR per layer, then links them together as a stack on GitHub's side. Update a commit three layers down, run it again, and every downstream PR's diff updates without you touching a rebase command. The same workflow is available from GitHub Copilot through what GitHub is calling the `gh-stack` skill, so an agent working across a multi-commit change can submit the stack the same way a human would.

## The data behind the pitch

The case for smaller PRs isn't new, and it isn't really about stacking specifically, it's about PR size. An analysis of 1.5 million pull requests, cited across several engineering blogs this year, found that PRs in the 200-400 line range get approved around 3x faster and land with roughly 40% fewer production defects than larger changes. The same data suggests every additional 100 lines adds about 25 minutes of review time, and past 1,000 lines, defect detection in review drops by 70%, which tracks with what most people already know from experience: reviewers skim past a certain point, and skimmed code hides bugs.

None of that requires stacking, you can just write smaller PRs. What stacking actually solves is the workflow problem that shows up when you try to do that in practice: a feature that's genuinely 800 lines of interdependent change doesn't become three independent 250-line PRs, it becomes three PRs where the second one is meaningless without the first. Before native stacking, reviewing that sequence on GitHub meant either one big PR, or three PRs where two of them show a diff against `main` that includes code from the PR underneath, which is confusing enough that most teams just gave up and merged the big PR instead.

## What Hacker News actually argued about

The launch thread split roughly the way you'd expect. One side treated it as overdue validation:

> "Stacked diffs have existed at Meta for a decade, glad GitHub is joining 2016."

The other side pushed back on the premise entirely:

> "Either changes are independent and you use separate PRs, or they're dependent and reviewing them separately makes no sense."

That's a fair objection if you've never worked on a codebase where "dependent" and "independently reviewable" aren't opposites. A middleware layer and the code that wires it in are dependent, in the sense that one doesn't work without the other, but they're still two different things to evaluate: is the rate limiter itself correct, and separately, was it integrated correctly. Stacking is a bet that most large changes decompose that way more often than people assume, not that every large PR should be split.

The more useful criticism was about implementation, not concept. GitHub's own docs and multiple third-party writeups converge on the same list of rough edges:

- **Squash-merge breaks identity tracking.** When you squash-merge a PR, git rewrites its commit hash. If that PR was the base of a stack, the branch above it now points at a commit that no longer exists in the trunk's history, and GitHub has to reconcile that. This is the single edge case Graphite has spent the most engineering time on, and it's the one GitHub's v1 handles the least gracefully.
- **Re-approval cascades.** If your repo requires re-approval after new commits, updating the bottom of a stack and re-pushing can invalidate approvals on every PR above it, even ones where the actual diff didn't change.
- **"Merge with rebase" always rewrites commits**, which breaks fast-forward-only merge policies some teams rely on specifically to keep a stack's history clean.
- **Merging a full stack in one action is inconsistently reliable today**, according to several early users, particularly when a middle layer has failing or pending checks.

None of this is disqualifying. It's the normal state of a feature in public preview: the common path works, the edge cases are still being found in production by people whose workflows don't match whatever GitHub tested internally.

## Does this kill Graphite?

Probably not immediately, but it changes the sales pitch. Graphite, founded by former Meta engineers specifically to bring stacked diffs to teams outside Meta, built its product on the fact that GitHub had no native concept of a stack. That gap is now closing. GitHub's version wins on the dimension that actually blocked adoption of third-party stacking tools in most teams: a reviewer opening a stacked PR on GitHub.com needs nothing installed, no Graphite account, no CLI, no browser extension. That "zero setup for the reviewer" property is worth more than any individual feature, because the reviewer was always the one person in the loop who had no reason to opt into your tooling choice.

What Graphite keeps, for now, is everything GitHub hasn't gotten to yet: clean squash-merge handling, years of accumulated fixes for cascading rebase conflicts, and a CLI (`gt`) that's had a lot more time in the field than `gh stack`. Whether that's enough to justify $20-40 per seat per month is now a real question for any team currently paying for it, and it's the same question Graphite is presumably asking itself.

## Should you actually use this

If your team already writes small, independent PRs, nothing changes for you, stacking solves a problem you don't have. If you regularly end up with one enormous PR because a feature genuinely doesn't decompose into independent chunks, it's worth trying on one feature branch before rolling it out broadly. Start with `gh stack init` on something you'd normally have opened as one big PR, split it at the natural seams, and see whether your team's actual merge policy (squash vs. merge vs. rebase, required re-approval or not) hits one of the rough edges above before you commit to it as a default workflow.

## Conclusion

Native stacked PRs are the kind of feature that's easy to underestimate because the underlying idea is simple: chain your branches, review them separately, merge them together. The interesting part isn't the concept, Meta and Graphite already proved it out years ago. It's that GitHub folding it into the core PR object model removes the one barrier that mattered most, needing every reviewer on your team to install something. The squash-merge and re-approval edge cases are real and worth checking against your own repo's settings before you lean on this for anything critical, but they're the kind of thing that gets fixed in a public preview, not a reason to wait it out. If you've been putting off breaking up your biggest PRs because the review experience for a stack was worse than just living with one giant diff, that tradeoff just changed.
