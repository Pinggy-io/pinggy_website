---
title: "OpenAI Says It Solved Navier-Stokes. 25 Fields Medalists Say That's the Problem."
description: "OpenAI claims an internal model cracked a Millennium Prize problem using 10,000 agents over 88 hours. A credit dispute with an NYU mathematician and an Anthropic researcher broke first, then 25 Fields Medalists, led by Terence Tao, published a declaration saying the whole approach is broken."
date: 2026-09-12T10:30:00+05:30
draft: false
tags: ["OpenAI", "Anthropic", "generative AI", "scientific research"]
categories: ["Technology", "AI", "Business"]
og_image: "images/openai_navier_stokes_fields_medalists_feud/openai_navier_stokes_fields_medalists_feud_banner.webp"
outputs:
  - HTML
  - AMP
---

{{< image "openai_navier_stokes_fields_medalists_feud/openai_navier_stokes_fields_medalists_feud_banner.webp" "Terence Tao's blog post 'A Severe Misalignment of AI in Mathematics,' the September 2026 declaration signed by 25 Fields Medalists about AI companies racing to solve famous math problems" >}}

On September 8, 2026, NYU mathematician Tristan Buckmaster published a statement accusing OpenAI of trying to cut a collaborator out of credit for a proof the two of them hadn't even released yet. A day later, OpenAI announced that an internal, unreleased model had solved a piece of the Navier-Stokes existence and smoothness problem, one of the seven Clay Millennium Prize problems, each worth $1 million. Three days after that, 25 Fields Medalists, mathematics' highest honor, published a joint declaration saying the entire race to solve famous problems with AI is "severely misaligned" with what mathematics is actually for.

That's three separate news cycles in five days, and they're all the same story.

{{% tldr %}}
1. **The proof:** Tristan Buckmaster (NYU) and Levent Alpöge (Anthropic) proved on August 15 that a version of the Euler equations, the frictionless cousin of Navier-Stokes, can "blow up." They verified it in the formal proof language Lean.
2. **The escalation:** OpenAI heard about the unpublished result, started its own attempt at the harder Navier-Stokes case about a week later, and ran roughly 10,000 agents for 88 hours to get there. Buckmaster alleges OpenAI's Sebastien Bubeck pressured him to drop Alpöge from co-authorship because Alpöge works at Anthropic.
3. **OpenAI's response:** Bubeck denies demanding Alpöge's removal, apologized for a remark made on a heated call, and says the model never saw the pair's private work. OpenAI didn't claim the $1 million prize; the Clay Institute still lists the problem as "active."
4. **The declaration:** Terence Tao and 24 other Fields Medalists published "A Severe Misalignment of AI in Mathematics," arguing that racing to solve landmark problems for PR value skips the writeups, attribution, and slow community verification that actually turn an answer into mathematical knowledge.
{{% /tldr %}}

## What OpenAI actually claims to have solved

Navier-Stokes describes how fluids move, and it's the reason weather models, aircraft design, and blood-flow simulations work at all. What nobody has proven is whether the equations always behave: whether, starting from smooth, well-behaved initial conditions, a solution can ever "blow up" into an infinite value in finite time. The Clay Mathematics Institute put a $1 million bounty on resolving it in 2000, and it has remained one of seven Millennium Prize problems, only one of which (the Poincaré conjecture) has ever been solved.

OpenAI's announcement was narrower than the headlines that followed it: an internal system, not the model you can access today, coordinated on the order of 10,000 sub-agents over 88 hours to construct a blowup scenario, then checked the proof with <a href="https://leanprover.github.io/" target="_blank">Lean</a>, a formal proof assistant that verifies each logical step mechanically rather than trusting a human reviewer to catch mistakes. Estimates of the compute bill range from roughly $2 million to as much as $22.5 million depending on which pricing model you apply to the run. OpenAI has not formally submitted the result to the Clay Institute for the prize, and the Institute's own tracker still marks Navier-Stokes as "active," not solved. That distinction matters: a company blog post is not peer review, and this one hasn't gone through it yet.

## The proof that came first, and got skipped

The part of this story that doesn't show up in most of the coverage is that OpenAI wasn't working in a vacuum. On August 15, Tristan Buckmaster and Levent Alpöge, a mathematician at Anthropic, <a href="https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/" target="_blank">posted a proof</a> of finite-time blowup, with smooth forcing, for the incompressible porous medium equation, the Boussinesq equations, and the 3D incompressible Euler equations, the frictionless, technically easier cousin of Navier-Stokes. The result extends a "rough forcing" construction originally due to Diego Córdoba and Luis Martínez-Zoroa into the much harder smooth-forcing regime. Buckmaster and Alpöge used Anthropic's Claude to reconstruct the key steps of the older proof, and both Claude and OpenAI's Codex to help write it up, then verified the whole thing in Lean, though by Buckmaster's own account the LLM-generated explanation of *why* the proof worked was "barely readable" and needed a human pass to actually explain the mathematics.

Buckmaster has been calling the moment "a Deep Blue-Kasparov moment" for the field, the point where the machine stops being a curiosity and starts setting the pace. He isn't shy about the magnitude of what happened. He is shy about how OpenAI got from his unpublished Euler proof to its own Navier-Stokes result roughly a week later.

## The credit dispute

According to Buckmaster's public statement, OpenAI first requested a call with him on September 3, after word of the unpublished Euler proof reached the company. On September 6, he learned in that call that OpenAI's own Navier-Stokes attempt had only started in the preceding week, seemingly triggered by that same rumor. He alleges he was then offered two options: publish jointly with reduced credit, or publish solo and acknowledge OpenAI's solution, but only if he dropped Alpöge from the author list, because Alpöge works for a rival lab. Buckmaster says he was told, on a call that turned heated, "Why would you ruin your career?" and "If you don't want me to be nice, then I don't have to be nice." He refused both offers and went public on September 8, about twelve hours before OpenAI's own announcement.

OpenAI's Sebastien Bubeck, who led the project, denies asking twice for Alpöge to be removed and says he only suggested it would be "simpler" if a rewrite of the paper didn't carry an Anthropic employee's name, while separately apologizing for the tone of the call. OpenAI also says its researchers and agents "did not see any part of [Buckmaster and Alpöge's] work until they published it publicly" and that "no person or AI system searched user data to solve the problem," while conceding it can't fully rule out that de-identified usage data from its own products, including Buckmaster and Alpöge's own use of Codex while doing the Euler work, fed into the models that later solved Navier-Stokes. That's the open question nobody involved can currently close: whether working on a hard problem with a company's own AI tools quietly teaches that company how to solve it faster than you can publish.

## Why 25 Fields Medalists are actually upset

If the story stopped at a credit dispute, it would be an ugly but ordinary academic fight. What turned it into something much bigger is what Tao and the other signatories, including Peter Scholze, Maryna Viazovska, Martin Hairer, and 2026 medalist Yu Deng, said next. Their declaration, <a href="https://terrytao.wordpress.com/2026/09/11/a-severe-misalignment-of-ai-in-mathematics/" target="_blank">posted on Tao's blog on September 11</a>, doesn't argue that AI shouldn't solve hard problems. It argues that solving the problem was never really the point:

> "Solving one of these problems has been a certain sign of new insights and interesting methods, which would then be studied by a community of mathematicians, through a long and arduous process of talks, discussions, simplifications."

That process, they write, is how a single clever trick becomes a technique other mathematicians can reuse, how a proof becomes a textbook chapter, how a hard problem trains the next generation of people who can solve the next one. An AI-generated proof, announced the same week it's produced, with no failed attempts disclosed and often a machine-written explanation nobody can follow, skips every step of that pipeline. The declaration's central line is blunt: "the push by AI companies to solve mathematical problems as a benchmark is detrimental to the science of mathematics... the goals of the AI companies and the goals of the mathematical community are severely misaligned."

Tao has been more colorful elsewhere, describing the dynamic as AI companies "strip-mining" open problems for headline results, comparing it to "using excavators to loot an archaeological site." The metaphor is worth sitting with: an excavator can remove an artifact faster than any careful dig, but it destroys the context, the layering, the information about how the thing got there, that made the artifact worth studying in the first place. In this analogy, a verified proof is the artifact. The reasoning, the false starts, and the eventual textbook exposition are the layers of dirt that a fast enough machine has no incentive to preserve.

The 25 initial signatories are explicitly the first wave. The declaration links to a page collecting further signatures, echoing an earlier <a href="https://leidendeclaration.ai/" target="_blank">Leiden Declaration</a> from June 2026 that made a similar, less pointed case and has since drawn over a thousand signatures of its own. The consequences have already reached beyond blog posts: OpenAI withdrew its sponsorship of a Caltech mathematics event after researchers there criticized the company over the Buckmaster affair.

## "Misalignment" is doing double duty on purpose

The word choice in the declaration's title isn't an accident. "Alignment" is normally AI-safety jargon for making a model's goals match human intent. Tao and company are borrowing the term to make a different point: even a model that behaves exactly as instructed, that produces a correct, formally verified proof with zero hallucination, can still be optimizing for the wrong target. If an AI lab measures success by "did we solve the famous problem first," and a research community measures success by "did this deepen collective understanding," you can get a technically flawless proof that the field would have been better off without, at least on the current release schedule. It's the same shape of problem this blog has written about in the context of [LLM benchmarks](/blog/why_llm_benchmarks_need_a_reset/): optimizing hard for a metric that only loosely tracks the thing you actually care about eventually produces results that look great on the metric and hollow everywhere else.

## What happens to the $1 million

Practically, nothing resolves cleanly here yet. The Clay Mathematics Institute requires a proof to be published and to withstand two years of scrutiny before it pays out, so nobody is cashing a check this month regardless of who verifies what in Lean. Buckmaster and Alpöge's Euler result and OpenAI's Navier-Stokes claim both now sit in that queue, and the queue itself is the mathematicians' entire point: two years of arguing, checking, and rewriting is exactly the process an instant AI-generated announcement is built to route around.

What's actually new here isn't that a machine can grind through a hard proof. It's that the fight over what a "solved" problem means, who gets credit, and whether speed is even the right thing to optimize for, is happening in public, in real time, between people who built the models and the people whose entire discipline depends on getting this right the slow way.
