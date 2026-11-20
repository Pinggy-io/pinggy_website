---
title: "Three Sites Made 215,000 AI Buying Guides, and Perplexity Treats Them as Real Sources"
description: "A research audit of 380 software categories found three near-identical content-farm domains outranking Gartner and G2 in Perplexity's AI search citations."
date: 2026-09-03T15:30:00+05:30
draft: false
tags: ["AI Search", "GEO", "SEO", "developer tools", "security"]
categories: ["Technology", "Marketing", "AI Tools"]
og_image: "images/three_sites_gaming_ai_search_recommendations/three_sites_gaming_ai_search_recommendations_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "three_sites_gaming_ai_search_recommendations/three_sites_gaming_ai_search_recommendations_banner.webp" "Diagram showing worldmetrics.org, gitnux.org, and wifitalents.com feeding into Perplexity's sonar model, which then answers a user's question about the best project estimation software" >}}

Ask Perplexity for the best project estimation software and, depending on which source it pulls from, you'll get one of at least two different top-five lists, each cited to a research site that looks the same: named analysts, a GDPR badge, a claim of tens of thousands of independently verified software reviews. `worldmetrics.org` recommends Float, Scoro, Teamwork.com, Procore, and Wrike. `wifitalents.com`, for the identical question, recommends Float, Scoro, Teamwork.com, Buildertrend, and Apropo. Neither site agrees with the other, and neither is actually independent. They're two of three domains that, according to a report published this week, generated 215,128 near-identical "best software" pages between them and now sit inside the citation graph Perplexity draws on to answer exactly this kind of question.

The report comes from <a href="https://trellner.com/reports/manufactured-sources-behind-ai-recommendations/" target="_blank">Trellner Research</a>, an independent outfit that measures what AI systems actually cite when they answer questions. It queried Perplexity's `sonar` and `sonar-pro` models with 380 software-category questions ("best project estimation software," "top research data management platforms," and so on), asked for five ranked recommendations with sourced homepage domains, and logged every citation. The result: 7,534 citations spanning 2,055 distinct domains. It's a small, specific study, but the pattern it surfaces is not small at all.

{{% tldr %}}
1. **The finding:** Three domains, `worldmetrics.org`, `gitnux.org`, and `wifitalents.com`, published 215,128 machine-generated "best software" pages and now show up as cited sources in Perplexity's answers, more often than Gartner in some categories.
2. **The scale of the miss:** 59.8% of all citations in the study point to domains ranked below #100,000 on Tranco's global traffic list; 23.4% aren't ranked in the top million at all. The median cited domain sits at rank 71,611.
3. **The tell:** all three sites share the same two Cloudflare nameservers, the same page template and navigation, and were registered through NameCheap within a five-month window in 2023-2024, yet each credits a different set of three "named researchers" for identical rankings.
4. **It's not hypothetical harm:** one citation for a research-data-management query resolved to a domain that no longer belongs to the real service and now redirects to a gambling site.
5. **A vendor's own marketing blog**, Guideflow, ranked as the third most-cited domain overall, ahead of Gartner, despite not competing in most of the categories it was cited for.
6. **The report is careful about its limits**: one prompt wording, one run per category, Perplexity only, no test of whether removing these sources would change the actual recommendations. Read the numbers as a real pattern worth watching, not proof the sources decided the outcome.
{{% /tldr %}}

## What the three sites actually look like

Open `worldmetrics.org` or `gitnux.org` and the pitch is confident: an "independent market research platform," 70,000+ software reviews across nearly a hundred categories, a five-step editorial process, named analysts with degrees from real institutions, and logos claiming citations from Microsoft, Forbes, Bloomberg, and Reuters. `gitnux.org` says it was founded in 2021. `wifitalents.com` runs the same pitch with the same structure: custom research from a few thousand euros, software advisory retainers, and a promise that "humans decide what gets published."

None of that squares with what Trellner found underneath the branding. All three domains delegate DNS to the identical pair of Cloudflare nameservers, `pam.ns.cloudflare.com` and `sean.ns.cloudflare.com`. All three run the exact same page template with the exact same navigation bar: Services, Market Data, Software Advice, Editorial Process, Company. All three were registered through NameCheap between December 2023 and May 2024, a five-month window that doesn't line up with `gitnux.org`'s own "founded in 2021" claim on its About page.

The tell that's hardest to explain away is the bylines. Each page carries three named staff credits that never repeat across sites: Worldmetrics credits Kathryn Blake, Alexander Schmidt, and Victoria Marsh; Gitnux credits Diana Reeves, Helena Kowalczyk, and Olivia Thornton; WifiTalents credits Ryan Gallagher, Isabella Rossi, and Natasha Ivanova. Nine distinct named "researchers," for the identical project-estimation-software ranking, none of whom appear to have actually written anything, since the underlying page is a template. Trellner also found unrendered template variables surfacing in some bylines, like a "Within the next 26 days" placeholder that was clearly meant to be filled in by a script and never was.

## The citation table nobody was tracking

Here's where it gets concrete. Across all 7,534 citations Trellner logged, the top of the table looks roughly like what you'd expect, mixed in with what you wouldn't:

<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Domain</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Citations</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Share</th>
  <th style="border:1px solid #ddd;padding:0.45em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tranco rank</th>
</tr>
</thead>
<tbody>
<tr><td style="border:1px solid #ddd;padding:0.45em;">g2.com</td><td style="border:1px solid #ddd;padding:0.45em;">291</td><td style="border:1px solid #ddd;padding:0.45em;">3.86%</td><td style="border:1px solid #ddd;padding:0.45em;">4,027</td></tr>
<tr style="background:#f9fbfd;"><td style="border:1px solid #ddd;padding:0.45em;">reddit.com</td><td style="border:1px solid #ddd;padding:0.45em;">261</td><td style="border:1px solid #ddd;padding:0.45em;">3.46%</td><td style="border:1px solid #ddd;padding:0.45em;">105</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.45em;"><strong>guideflow.com</strong></td><td style="border:1px solid #ddd;padding:0.45em;">194</td><td style="border:1px solid #ddd;padding:0.45em;">2.57%</td><td style="border:1px solid #ddd;padding:0.45em;">177,039</td></tr>
<tr style="background:#f9fbfd;"><td style="border:1px solid #ddd;padding:0.45em;">gartner.com</td><td style="border:1px solid #ddd;padding:0.45em;">158</td><td style="border:1px solid #ddd;padding:0.45em;">2.10%</td><td style="border:1px solid #ddd;padding:0.45em;">1,766</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.45em;">zapier.com</td><td style="border:1px solid #ddd;padding:0.45em;">82</td><td style="border:1px solid #ddd;padding:0.45em;">1.09%</td><td style="border:1px solid #ddd;padding:0.45em;">2,919</td></tr>
<tr style="background:#f9fbfd;"><td style="border:1px solid #ddd;padding:0.45em;"><strong>wifitalents.com</strong></td><td style="border:1px solid #ddd;padding:0.45em;">71</td><td style="border:1px solid #ddd;padding:0.45em;">0.94%</td><td style="border:1px solid #ddd;padding:0.45em;">105,281</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.45em;">capterra.com</td><td style="border:1px solid #ddd;padding:0.45em;">68</td><td style="border:1px solid #ddd;padding:0.45em;">0.90%</td><td style="border:1px solid #ddd;padding:0.45em;">6,387</td></tr>
<tr style="background:#f9fbfd;"><td style="border:1px solid #ddd;padding:0.45em;">linkedin.com</td><td style="border:1px solid #ddd;padding:0.45em;">67</td><td style="border:1px solid #ddd;padding:0.45em;">0.89%</td><td style="border:1px solid #ddd;padding:0.45em;">18</td></tr>
<tr><td style="border:1px solid #ddd;padding:0.45em;"><strong>worldmetrics.org</strong></td><td style="border:1px solid #ddd;padding:0.45em;">60</td><td style="border:1px solid #ddd;padding:0.45em;">0.80%</td><td style="border:1px solid #ddd;padding:0.45em;">104,737</td></tr>
<tr style="background:#f9fbfd;"><td style="border:1px solid #ddd;padding:0.45em;"><strong>gitnux.org</strong></td><td style="border:1px solid #ddd;padding:0.45em;">50</td><td style="border:1px solid #ddd;padding:0.45em;">0.66%</td><td style="border:1px solid #ddd;padding:0.45em;">42,759</td></tr>
</tbody>
</table>
</div>

Three of the ten most-cited domains for software buying decisions are the manufactured network. Between them they out-cite Zapier, Capterra, and LinkedIn. And that top-10 list is the tame part: outside it, 59.8% of all citations point to domains ranked below #100,000 globally, 23.4% aren't in the Tranco top million at all, and the median cited domain sits at rank 71,611. Only 17.3% of citations concentrate in what you'd call the top ten "real" sources. The long tail isn't a rounding error, it's most of the answer.

## When a marketing blog outranks Gartner

The other name worth sitting with is `guideflow.com`, sitting at #3 with 194 citations, ahead of Gartner's 158. Guideflow sells interactive product-demo software. It does not operate in most of the categories where Trellner found it cited, and its blog is, by the report's description, standard content-marketing material aimed at driving signups, not neutral comparison research. It still became "the third-largest evidence base" behind Perplexity's software recommendations, simply because it publishes a lot of content that happens to be structured the way these models like to extract from.

That's the part that should worry anyone who has spent the last year hearing "just optimize for AI search" as the new SEO advice. It's true that AI answer engines reward clearly structured, frequently updated, citation-dense content; we wrote about the mechanics of that in our <a href="/blog/generative_engine_optimization/">guide to Generative Engine Optimization</a>. What this report adds is the uncomfortable flip side: that same reward function doesn't distinguish a neutral analyst from a vendor's own sales blog, or from three shell domains built specifically to look like one, provided the formatting checks the right boxes.

## The broken links are the part that should have caught someone

Trellner also spot-checked whether the recommended vendor URLs actually resolved. 1.1% didn't. One example given in the report: a citation for "research data management platforms" pointed a reader toward `dryad.co`, presumably meant to be the well-known Dryad data repository, but the domain has since lapsed and now redirects to an Indonesian gambling site. Another recommendation, for Monte Carlo-style data tooling, pointed to a URL that now belongs to a Monegasque casino portal. Neither of these is a subtle SEO trick. They're stale links nobody bothered to re-verify, surfaced with full confidence as a citation inside an AI-generated answer that looks, at a glance, exactly as authoritative as every other line in the response.

## What the report doesn't claim

To its credit, Trellner is explicit about where the evidence stops. The methodology is one prompt wording per category, one run, no repeat sampling, and it covers Perplexity's `sonar` models only, not ChatGPT, Gemini, or any other AI search product. The authors write plainly: "We have not shown that any of this changes the answers," and they didn't test the counterfactual of what Perplexity would recommend if these three domains were removed from its index entirely. It's entirely possible the underlying vendor rankings would look similar either way, since programmatic sites like these tend to scrape and remix the same public review data everyone else does.

What the report does establish, carefully, is narrower and still significant: that a small, coordinated, unverifiable content network occupies real, measurable space inside the evidence base an AI search product presents as sourced fact, and that space is comparable to or larger than what long-established, actually-independent analyst firms occupy in the same answers.

## Why this matters past software listicles

The three sites in this report happen to sell "software advisory" and market research, which makes the story easy to dismiss as a B2B SaaS problem. It isn't. The same programmatic-content playbook, register a domain, adopt research-site branding, generate tens of thousands of templated pages, works for any category an AI search engine gets asked about: health supplements, financial products, legal services, hardware reviews. Software recommendations are just the category someone happened to audit first, with a public, checkable list of domains that anyone can verify by loading the pages.

For founders and indie hackers, there are two takeaways worth carrying past the headline number. First, "an AI search engine recommended us" is not by itself a signal that you've earned real trust with a model. It might just mean your competitor's citation farm hasn't gotten around to your category yet, or already has, and is quietly outranking you with a page that took thirty seconds to generate. Second, if you're relying on ChatGPT, Perplexity, or Gemini traffic as a growth channel, it's worth actually checking who else gets cited alongside you for your category, the way Trellner did manually here. Run the query yourself, note every domain cited, and look up who's actually behind them. It costs five minutes and tells you whether you're competing against real alternatives or against a template with a different logo on it.

None of this means AI search is untrustworthy across the board. It means the citation graph underneath it is exactly as gameable as the link graph underneath classic SEO was fifteen years ago, just with less scrutiny on it so far, because most people still assume "cited source" means "verified source." That gap is where 215,128 pages came from, and it's very unlikely to be the last network built to fill it.
