---
title: "Jeff Dean Left Google After 27 Years to Automate the Scientific Method"
description: "Jeff Dean, Sanjay Ghemawat, Oriol Vinyals, and Quoc Le just quit Google to found Discovery Loop, a startup betting that the entire cycle of hypothesis, experiment, and evaluation can be run on a loop, at scale, by machines. Here's what it actually is, and what's still unproven."
date: 2026-08-06T10:30:00+05:30
draft: false
tags: ["Jeff Dean", "Discovery Loop", "Google", "Google DeepMind", "AI research", "AI for science", "AlphaEvolve", "startups"]
categories: ["Technology", "AI", "Business"]
og_image: "images/jeff_dean_discovery_loop/jeff_dean_discovery_loop_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "jeff_dean_discovery_loop/jeff_dean_discovery_loop_banner.webp" "Jeff Dean left Google to put science on a loop: after 27 years at Google, Dean and three AI veterans are building Discovery Loop to automate the propose, run, evaluate, iterate cycle of research" >}}

On August 5, 2026, Jeff Dean, employee number 30 at Google and its chief scientist for the last several years, told the company he was leaving. He wasn't alone. Sanjay Ghemawat, a Google Senior Fellow who'd been there just as long, Oriol Vinyals, VP of research at Google DeepMind, and Quoc Le, a founding member of Google Brain, walked out with him. Combined, the four of them have somewhere between 60 and 90 years of Google tenure, and their names are attached to a large share of the infrastructure the rest of the industry runs on: MapReduce, Bigtable, Spanner, TensorFlow, the sequence-to-sequence work that underpins modern translation, AlphaStar, and a good chunk of what became Google Brain.

They're starting a company called Discovery Loop. Its pitch, in Dean's own words, is that the scientific method itself, propose a hypothesis, run the experiment, evaluate the result, is a loop, and a loop is exactly the kind of thing you can automate and run at a speed no human team can match.

{{% tldr %}}
1. **Who left:** Jeff Dean (chief scientist, 27 years, employee #30), Sanjay Ghemawat (Senior Fellow, 27 years), Oriol Vinyals (VP Research, Google DeepMind), and Quoc Le (Google Brain co-founder) all resigned on the same day to found Discovery Loop.
2. **What it is:** an independent Delaware public benefit corporation whose mission is to automate the "propose, run, evaluate" loop of research, starting with machine learning research and engineering before broadening into science generally.
3. **Who's paying for it:** a seed round co-led by <a href="https://radical.vc/" target="_blank">Radical Ventures</a> and <a href="https://www.khoslaventures.com/" target="_blank">Khosla Ventures</a>, with Lightspeed, Kleiner Perkins, and Doerr Capital also participating. Google itself is a founding investor and stays on as the startup's cloud partner, an unusually cooperative arrangement for a company that just lost four of its most senior researchers.
4. **The market's reaction:** Alphabet's stock fell as much as 5.4% the day of the announcement, briefly wiping close to $190 billion off its ~$4.6 trillion market cap.
5. **The catch:** fully automated, end-to-end research is not a new idea, and the last high-profile attempt at it, Sakana AI's "AI Scientist," drew serious criticism for shaky novelty detection and a reviewer model that missed its own flaws. Discovery Loop is starting from a much stronger position technically, but the hard parts of that problem haven't gone away.
{{% /tldr %}}

## Who's actually in the room

If you don't recognize the names, it's worth a beat, because this isn't a group of promising mid-career researchers making a startup bet. It's closer to four people each independently credited with reshaping how the industry builds software, leaving on the same afternoon.

- **Jeff Dean** joined Google in 1999 as its 30th employee and went on to co-design {{< link href="https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/" >}}MapReduce{{< /link >}}, {{< link href="https://research.google/pubs/bigtable-a-distributed-storage-system-for-structured-data/" >}}Bigtable{{< /link >}}, and {{< link href="https://research.google/pubs/spanner-googles-globally-distributed-database/" >}}Spanner{{< /link >}}, then led the team that built {{< link href="https://www.tensorflow.org/" >}}TensorFlow{{< /link >}} and eventually became Google's chief scientist.
- **Sanjay Ghemawat**, a Google Senior Fellow, is Dean's longtime collaborator on nearly all of the above; the two have co-authored so much foundational systems work that "Jeff and Sanjay" is close to a proper noun in distributed systems circles.
- **Oriol Vinyals**, VP of research at Google DeepMind, led the sequence-to-sequence research that reshaped machine translation and was the lead on {{< link href="https://deepmind.google/discover/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/" >}}AlphaStar{{< /link >}}, DeepMind's StarCraft II agent.
- **Quoc Le**, a co-founder of Google Brain, has his name on foundational work in neural architecture search and large-scale model scaling.

Sundar Pichai reportedly tried to keep them. It didn't work, and Dean was candid about part of why in comments to the New York Times: as an independent company, "we might make decisions that are not necessarily in the company's purest financial interests." That's a strange thing to hear from someone who spent 27 years optimizing a Fortune 50 company's infrastructure, and it's also exactly the kind of freedom a startup buys you that a public company's org chart doesn't.

## The pitch: put the scientific method on a loop

The name isn't a marketing flourish. Two weeks before the announcement, Dean gave a talk at {{< link href="https://www.startupschool.org/" >}}Y Combinator's Startup School{{< /link >}} that, in hindsight, was basically the company's thesis statement:

> "There's this sort of the foundation of the scientific method of you propose an experiment, you implement what you need to run the experiment, and you evaluate the experiment, and then you get results from that... I think there are more and more problems that are now possible to implement where that whole loop of running not just a few experiments, but running many, many experiments, because you're able to automate that loop and make the latency of that loop extremely low, is going to be really, really important."

Strip the hedging and the idea is straightforward: research progress is gated by how fast you can cycle through propose, run, evaluate, repeat. Humans are slow at this, not because we're bad at any one step, but because we can only run a handful of experiments in parallel and each cycle involves a lot of manual setup. If you can get a system to propose experiments, implement and run them, and score the results without a human in every step, you can run thousands of cycles where a lab would run dozens, and the latency of a single cycle drops from days to minutes.

Discovery Loop's first target is deliberately narrow: automating machine learning research and engineering itself, using frontier models and large compute budgets to propose, run, and learn from evaluations of ML experiments. That's a sensible place to start. It's a domain where "evaluate the result" often has a clean, computable answer (does the model's eval score go up), which sidesteps the hardest part of the general problem. The stated ambition is to expand from there into science and engineering more broadly, where evaluation is messier and a wrong answer can cost a lot more than a wasted training run.

## Not the first attempt, but the best-resourced one

{{< image "jeff_dean_discovery_loop/jeff_dean_discovery_loop_timeline.webp" "Timeline of AI-for-science attempts: FunSearch in December 2023, Sakana AI's The AI Scientist in August 2024, Google's AlphaEvolve and AI co-scientist in 2025, and Discovery Loop launching as an independent company in August 2026" >}}

"Automate the research loop" has been tried before, including inside Google. {{< link href="https://deepmind.google/discover/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/" >}}FunSearch{{< /link >}}, published by Google DeepMind in late 2023, paired an LLM with an automated evaluator to search for new solutions to open math problems, an early proof that a propose-and-score loop could find things humans hadn't. {{< link href="https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/" >}}AlphaEvolve{{< /link >}} scaled that idea up in 2025, evolving entire codebases against programmatic evaluation functions and shipping algorithmic improvements that reportedly saved real compute in Google's own data centers. Alongside it, Google's AI co-scientist took a different angle, representing hypotheses and evaluation criteria in natural language rather than code.

The more instructive precedent, though, is outside Google. In August 2024, Sakana AI shipped {{< link href="https://sakana.ai/ai-scientist/" >}}The AI Scientist{{< /link >}}, a system that claimed to automate the entire research lifecycle end to end: generating ideas, running experiments, writing up a paper, and even reviewing it, for around $15 a paper. It drew real attention and real criticism. Independent evaluations found its literature review leaned on shallow keyword search rather than real synthesis, which meant it repeatedly misjudged existing, well-known ideas as novel. Worse, its automated peer reviewer, the step meant to catch its own mistakes, missed significant flaws in its own output. The lesson wasn't that automated research is a dead end; it's that the "evaluate" step of the loop is the part that's actually hard, and a system that fakes it convincingly is more dangerous than one that fails obviously.

Discovery Loop starts from a stronger position than Sakana did: frontier-model-scale compute, four people who've spent decades building the infrastructure this kind of thing needs, and a narrower first target that has a much more honest evaluation signal than "is this paper good." None of that guarantees the harder, open-ended version of the problem is solved. It just means they're not starting from zero.

## An unusually friendly exit

The most interesting part of this story, structurally, isn't the talent loss, it's how Google is handling it. Discovery Loop is incorporated as a Delaware public benefit corporation, not a subsidiary, and its seed round was co-led by {{< link href="https://radical.vc/our-investment-in-discovery-loop/" >}}Radical Ventures{{< /link >}} and Khosla Ventures, with Lightspeed, Kleiner Perkins, and Doerr Capital also participating. But Google is on the cap table too, listed as a founding investor, and it's staying on as Discovery Loop's cloud infrastructure partner, with a stated plan to collaborate on ML systems and infrastructure research going forward. Neither round size nor valuation has been disclosed, though seed rounds at this level of pedigree have recently clustered in the mid-single-digit billions.

That's not how you typically lose your most senior people to a competitor. It reads more like Google spinning out an ambitious, high-risk research bet while keeping equity and a commercial relationship in the outcome, rather than a clean break. Whether that's a sign of Google managing the loss gracefully, or a sign it had no leverage left to keep them and took the best deal on offer, depends on who you ask.

## The market didn't shrug

Alphabet's stock dropped as much as 5.4% intraday on the news, briefly erasing close to $190 billion from a company worth roughly $4.6 trillion. That's a large reaction to four departures, even significant ones, and it says as much about how tightly the market is now pricing "who has the best AI research talent" into big tech valuations as it does about Discovery Loop specifically.

The departures also landed alongside a broader reshuffle: Demis Hassabis is stepping back from day-to-day duties at Google DeepMind to become Chair of GDM and Chief Scientist of Alphabet, while continuing to lead Isomorphic Labs. Read together, it looks less like an isolated resignation and more like a moment where Google is visibly re-negotiating how it retains and organizes its most senior AI talent, in public, while a chunk of that talent is choosing to leave the building entirely.

## What would actually have to be true

The genuinely hard part of "automate the scientific method" was never the "run many experiments in parallel" part, compute has been cheap enough for that for a while. It's evaluation: telling a good result from a lucky one, telling a novel idea from a well-known one wearing a new coat of paint, and doing it without a human checking the machine's homework every time. Sakana's AI Scientist is the cautionary tale here, not because its ambition was wrong, but because the flaws showed up exactly where you'd expect: the system was confident and wrong about which of its ideas were actually new.

Discovery Loop's decision to start with ML research and engineering, rather than science broadly, is the right call precisely because it dodges that problem for now. "Did the benchmark number improve" is a much cleaner signal than "is this a genuinely novel contribution to the field," and it lets the company prove out the propose-run-evaluate machinery on problems where being wrong just means a wasted training run, not a published error. The bet worth watching isn't whether they can automate ML experiments at scale; a well-resourced team with this pedigree probably can. It's whether the evaluation problem that tripped up every previous attempt at the general version of this holds up once they point the same loop at open-ended science, where there usually isn't a benchmark number to chase.
