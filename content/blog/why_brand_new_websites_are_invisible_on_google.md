---
title: "Why Brand-New Websites Are Invisible on Google for Months"
description: "Wikis and sites launched on fresh domains since Google's March 2024 core update are getting crawled and indexed, then staying invisible in regular search results for months. Here's the evidence, the competing theories, and what it means if you're about to launch something new."
date: 2026-09-08T11:20:00+05:30
lastmod: 2026-09-07T11:20:00+05:30
draft: false
eyebrow: "SEO"
tags: ["SEO", "Google Search", "indie web", "web development"]
categories: ["Technology", "SEO", "Web Development"]
og_image: "images/why_brand_new_websites_are_invisible_on_google/why_brand_new_websites_are_invisible_on_google_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "why_brand_new_websites_are_invisible_on_google/why_brand_new_websites_are_invisible_on_google_banner.webp" "Chart showing organic search traffic staying flat for months after a new domain launches, then rising sharply once it crosses a trust threshold" >}}

Run `site:hollowknight.wiki` on Google and you get roughly 2,300 results: articles on every boss, charm, and item, all fully crawled and indexed. Search for almost any of that content by name, "hollow knight hornet boss guide," say, and the wiki doesn't show up. Not on page one, not on page five. Older Fandom pages on the same topic, some of them years stale, outrank a wiki that Google's own index says it has fully read.

That gap between "indexed" and "rankable" is what a growing number of wiki operators and independent site owners have started calling **Google Jail**: a stretch, sometimes lasting the better part of a year, where a brand-new domain is crawled and stored but almost never surfaced for anything except a search for its own name. It traces back to Google's March 2024 core update, it isn't officially acknowledged as a distinct penalty, and the evidence for it is now solid enough that it's worth understanding if you're about to point a new domain at anything.

{{% tldr %}}
1. **The pattern**: since Google's March 2024 core update, new wikis on fresh domains get crawled and indexed (confirmed by `site:` searches showing thousands of pages) but essentially never surface for ordinary queries, sometimes for up to a year.
2. **The scale**: Weird Gloop, the team behind several game wikis, estimates roughly 90% of wikis launched on new domains since March 2024 have hit this, including gta.wiki, hytalewiki.org, hollowknight.wiki, and the Path of Exile 2 wiki. Around 85% of a typical game wiki's traffic normally comes from Google, so the effect is close to existential for a new project.
3. **Google's public position**: there's no such thing as a "sandbox." John Mueller has said as much since at least 2018. What Google confirms instead is three spam policies rolled out alongside the March 2024 update, expired domain abuse, scaled content abuse, and site reputation abuse, aimed at cutting low-quality and unoriginal content from search results by about 40%.
4. **A messier, competing explanation**: one wiki operator traced their own visibility loss to aggressive crawler abuse through residential proxies hammering expensive, uncached pages, which caused server instability that they believe triggered the penalty, independent of domain age.
5. **The workaround is ironic**: the fastest fix people have found is launching on a subdomain of an already-trusted domain, then migrating later, the exact centralization pattern many of these wikis exist to escape.
{{% /tldr %}}

## Indexed, but invisible

The mechanism itself is the strange part. This isn't a crawl problem. Google is visiting these sites, parsing the pages, and adding them to its index at a normal rate, you can watch it happen in Search Console. The break happens one step later, at ranking. A page can be indexed and still functionally never be shown, because ranking and indexing are separate systems, and a low enough trust score on the ranking side means a page essentially never clears the bar for a real query, no matter how directly it answers it.

{{< image "why_brand_new_websites_are_invisible_on_google/indexed_but_invisible.webp" "Illustration comparing a site: search showing a wiki fully indexed with thousands of results against a normal search query where the same wiki does not appear at all" >}}

That's a meaningfully different failure mode than the classic reasons a new site struggles: thin content, bad backlink profile, technical SEO mistakes. Those depress rankings gradually and unevenly. This is closer to a blanket suppression that lifts all at once, months later, for reasons that aren't visible from the outside.

## The scale of it

The clearest writeup of the pattern comes from Weird Gloop, the team that runs the RuneScape wikis and several others, in <a href="https://weirdgloop.org/blog/google-jail" target="_blank">a post published in August 2026</a>. Cookmeplox, writing for Weird Gloop, put a number on it: roughly 90% of wikis launched on brand-new domains since the March 2024 core update have run into this, and it has lasted "sometimes up to a year." The named list is not a handful of edge cases: gta.wiki, hytalewiki.org, hollowknight.wiki, poe2wiki.net (the Path of Exile 2 wiki), plus wikis for Undertale and Vampire Survivors, and the Overwatch and Fortnite wikis that recently migrated off Fandom onto their own domains.

The reason this matters so much specifically for wikis is the traffic mix. Cookmeplox cites roughly 85% of video game wiki traffic as coming from Google. A wiki that isn't visible in ordinary search results isn't losing a growth channel, it's losing almost the entire reason anyone finds it, which starves the very thing a wiki needs to survive: enough visitors turning into enough editors to keep pages current. A few wikis have reportedly clawed their way out early by riding a big game update that generated a surge of fresh, timely content, but "wait for a viral event" isn't a strategy most projects can plan around.

## Where this traces back to

Google's own account of what changed in March 2024 is public, if you know to look at the <a href="https://developers.google.com/search/blog/2024/03/core-update-spam-policies" target="_blank">spam policy announcement</a> rather than the core ranking update. Alongside the core update, Google introduced three new spam policies aimed squarely at gaming trust rather than content quality in the traditional sense: **expired domain abuse** (buying a lapsed domain to inherit its old authority and load it with unrelated content), **scaled content abuse** (mass-producing pages, however they're generated, mainly to manipulate rankings rather than help anyone), and **site reputation abuse** (third parties publishing low-oversight content on a trusted host purely to borrow its ranking signal). Google gave two months' notice on enforcing the site reputation abuse policy specifically and started acting on it May 5, 2024. The stated goal for the whole update was to reduce the amount of low-quality, unoriginal content in search results by about 40%.

None of those three policies is written to target new domains as a category. But if the practical signal Google is now weighting more heavily is something like *is this domain's history and pattern of behavior something we already trust*, a brand-new domain has, structurally, no history to weigh. It's not that new sites are penalized on purpose. It's that the fastest way to catch the abuse patterns Google actually named is a filter that also happens to catch everything with no track record yet, real projects included.

## Is this just the old "sandbox," back under a new name?

SEO forums have talked about a "Google Sandbox" holding back new sites since at least the mid-2000s, and Google has been consistent in denying it exists as a formal mechanism. <a href="https://www.searchenginejournal.com/mueller-mentions-google-sandbox-and-honeymoon-ranking-effects/408994/" target="_blank">John Mueller said in a 2018 Search Central office-hours session</a>: "With regards to sandbox, we don't really have this traditional sandbox that a lot of SEOs used to be talking about in the years past." He repeated essentially the same line in 2021, adding that what people perceive as a sandbox is more likely "a number of algorithms that might look similar" but are really just Google "trying to understand how this website fits in with the rest of the websites trying to rank for those queries."

That's a real distinction, not just PR. There's a difference between "we hold new sites back on purpose" and "we don't have enough signal about a new site yet, so our trust-scoring algorithms rank it conservatively by default until it earns more." The end result looks identical from the outside: nothing ranks for months. But the second framing is closer to what Weird Gloop's data actually shows, because the effect isn't uniform. It concentrates specifically on new domains competing against something Google already trusts on the same topic.

## A messier, more specific culprit

The <a href="https://news.ycombinator.com/item?id=49604870" target="_blank">Hacker News discussion</a> of the Weird Gloop post surfaced a data point that complicates the "just domain age" story. iamacyborg, who operates the Path of Exile 2 wiki, wrote that their visibility problem in the last few months wasn't really about being new at all: "The recent issues relate to site errors due to aggressive crawling of uncached, server-intensive pages (diffs, etc) hidden behind residential proxies. We were being hit sufficiently hard that the server had stability issues and we were penalised by Google." In other words, bot traffic disguised behind residential IPs hammered expensive, dynamically generated pages hard enough to make the server unreliable, and Google's systems appear to have read that instability as a quality signal and dropped the site's trust score accordingly, independent of how old the domain was.

A second data point pushes in the same direction. miladyincontrol described running a wiki for "a rather specific niche" launched about 1.5 years ago that ranked well within a few months, no jail. Their read: "It sounds like the issue isnt for 'independent wikis' but for wikis competing with an existing domain already hosting one on the topic, in this case fandom.com's." A wiki with no real incumbent to displace seems to onboard normally. A wiki trying to out-rank an established Fandom page on the same subject is where the suppression shows up hardest, which reads less like a blanket new-domain penalty and more like Google being deliberately conservative about handing rankings to a challenger until it's proven itself over time. And it isn't limited to wikis with heavy dynamic content, either, arjie, a self-hoster running a personal blog on MediaWiki, described being "absent from all search engines for a year" on a low-traffic site with none of the crawler-abuse dynamics wikis like poe2wiki have.

Put together, there probably isn't one clean cause. Domain trust, competing against an established incumbent on the same query, and the site's own operational health (whether bots are hammering it into instability) all look like inputs into the same underlying trust score, and a new site is more exposed on every one of those axes at once.

## The irony of the fix

The workaround people have actually converged on says a lot about how the incentives shake out. Cookmeplox notes that the Overwatch wiki, freshly launched as a subdomain of the already-established weirdgloop.org, was indexing normally within seven days, a fraction of what a brand-new root domain takes. The plan for future wikis, per that post, is to launch on a subdomain of a domain Google already trusts, build an editing and traffic base there, and only later migrate to a clean, independent root domain with 301 redirects once the project has enough of a track record to survive the transition.

That's a rational response to the actual algorithm, and it's also exactly backwards from the reason a lot of these projects exist in the first place. The entire pitch of an independent wiki is escaping a centralized host, Fandom, HN commenter unglaublich summed up the frustration bluntly as "another push to centralizing and walling off user content." A search algorithm that makes a brand-new independent domain functionally invisible for months, while a subdomain of an existing platform indexes in a week, is quietly re-creating the dependency on centralized hosts that these projects were trying to leave.

## What this means if you're launching something new

None of this is specific to game wikis. If you're about to point a new root domain at a SaaS product, a docs site, a blog, or any other content that's meant to be found through search, the practical planning assumption should be that Google is not your first channel. Budget for a multi-month gap, plausibly the better part of a year in a competitive niche, between launch and any meaningful organic traffic, and plan your early distribution around things that don't depend on Google at all: communities where your actual audience already gathers, direct links from people who already trust you, a newsletter, word of mouth. That's not a new idea for anyone who has watched a Show HN post or a Product Hunt launch actually move the needle for a new product, but it becomes a load-bearing plan rather than a nice-to-have once you know the SEO channel is functionally off for months. Once you're past that window, the fundamentals of {{< link href="/blog/how_to_make_website_agent_ready_and_rank_on_ai_searches/" >}}making a new site properly crawlable and indexable{{< /link >}} are still worth getting right early, so there's nothing left blocking you once Google starts trusting the domain.

Two more concrete takeaways follow from the causes above. First, since scaled content abuse is one of the three policies Google explicitly named, resist the urge to pad a new site with thin, templated, or AI-bulk-generated pages to look bigger faster, that's precisely the pattern the March 2024 policies were built to catch, and doing it on a domain with zero trust built up is the worst possible time to test the boundary. Second, since at least one operator traced their suppression to uncontrolled bot traffic destabilizing their server, it's worth hardening whatever endpoints get hit hardest on a new site (search pages, diff views, anything expensive and uncached) with basic rate limiting before launch, not after a scraper finds them.

## Conclusion

Google's official line is that there's no sandbox, and taken literally, that's true, there's no single flag in some admin panel labeled "hold new sites back." What Weird Gloop's data, the named wiki examples, and the operator accounts on Hacker News add up to instead is a set of trust-scoring systems that, in combination, produce the same real-world outcome anyway: a brand-new domain, especially one trying to out-rank an established incumbent on the same topic, can be fully crawled and indexed and still be functionally unsearchable for months. Whatever you call the mechanism, if you're launching something new on a fresh domain, the honest plan is to expect Google traffic to be near zero for a while and to have already lined up somewhere else for your first readers to come from.
