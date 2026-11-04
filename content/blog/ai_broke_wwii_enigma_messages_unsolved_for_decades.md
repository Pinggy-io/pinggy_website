---
title: "How AI Cracked WWII Enigma Ciphers That Stumped Cryptanalysts for Decades"
description: "GPT-6 Astra and Claude Opus 5 independently broke WWII Enigma messages that had resisted cryptanalysis since 2005, writing their own Bombe simulators and testing millions of keys. Here's exactly how, and what it actually proves."
date: 2026-09-23T10:00:00+05:30
draft: false
tags: ["Enigma", "AI agents", "cybersecurity", "OpenAI", "Anthropic"]
categories: ["Technology", "AI"]
og_image: "images/ai_broke_wwii_enigma_messages_unsolved_for_decades/ai_broke_wwii_enigma_messages_unsolved_for_decades_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIEV2YWx1YXRlIGFuIEFJLUFzc2lzdGVkIENvZGVicmVha2luZyBDbGFpbSIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCBndWlkZSB0byBjaGVja2luZyB3aGV0aGVyIGEgY2xhaW1lZCBBSSBjcnlwdGFuYWx5c2lzIGJyZWFrdGhyb3VnaCBpcyBnZW51aW5lbHkgbm92ZWwsIHByb3Blcmx5IHZlcmlmaWVkLCBhbmQgYWNjdXJhdGVseSBhdHRyaWJ1dGVkIGJldHdlZW4gaHVtYW4gYW5kIG1vZGVsIGVmZm9ydC4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2hlY2sgd2hhdCBodW1hbiBpbnB1dCBtYWRlIHRoZSBhdHRhY2sgZmVhc2libGUiLAogICAgICAidGV4dCI6ICJMb29rIGZvciBhIHN1cHBsaWVkIGNyaWIsIGtub3duIHBsYWludGV4dCwgb3IgcmVzZWFyY2ggbGVhZCBhIHBlcnNvbiBwcm92aWRlZCwgc2luY2UgYSBoYXJkIHNlYXJjaCBwcm9ibGVtIG9mdGVuIGJlY29tZXMgdHJhY3RhYmxlIG9uY2UgYSBzdGFydGluZyBwb2ludCBleGlzdHMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlNlcGFyYXRlIGRlbGVnYXRpb24gZnJvbSBhdXRvbm9tb3VzIGRpc2NvdmVyeSIsCiAgICAgICJ0ZXh0IjogIlJlYWQgdGhlIGFubm91bmNlbWVudCBmb3Igd2hvIGNob3NlIHRoZSB0YXJnZXQsIHdobyBzdXBwbGllZCB0aGUgbGVhZCwgYW5kIHdoaWNoIGRlY2lzaW9ucyB0aGUgbW9kZWwgbWFkZSB1bnN1cGVydmlzZWQgdmVyc3VzIG9uIGRpcmVjdGlvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiVmVyaWZ5IHRoZSBwbGFpbnRleHQgaW5kZXBlbmRlbnRseSIsCiAgICAgICJ0ZXh0IjogIkNyb3NzLWNoZWNrIHRoZSBkZWNyeXB0ZWQgcmVzdWx0IGFnYWluc3QgaGlzdG9yaWNhbCByZWNvcmRzLCBrbm93biBwbGFjZSBuYW1lcywgb3IgcHJpb3IgcmVsYXRlZCBicmVha3MgcmF0aGVyIHRoYW4gYWNjZXB0aW5nIHRoYXQgaXQgcmVhZHMgY29ycmVjdGx5IGluIGlzb2xhdGlvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiTG9vayBmb3IgcmVwcm9kdWN0aW9uIGFjcm9zcyBvdGhlciBtb2RlbHMiLAogICAgICAidGV4dCI6ICJJZiBhIGRpZmZlcmVudCBtb2RlbCBvciBhIGhhbmQtd3JpdHRlbiBzY3JpcHQgcmVhY2hlcyB0aGUgc2FtZSBhbnN3ZXIgZnJvbSB0aGUgc2FtZSBjcmliLCB0aGUgcmVzdWx0IGRlbW9uc3RyYXRlcyBjb21wZXRlbnQgZXhlY3V0aW9uIHJhdGhlciB0aGFuIGEgdW5pcXVlbHkgZW1lcmdlbnQgY2FwYWJpbGl0eS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU2NvcGUgdGhlIGRpZmZpY3VsdHkgYWdhaW5zdCB0aGUgdGFyZ2V0IGNvbXBsZXhpdHkiLAogICAgICAidGV4dCI6ICJBIHdpbiBhZ2FpbnN0IGEgMTkzMHMgcm90b3IgY2lwaGVyIHdpdGggYSBrbm93biBjcmliIGlzIG5vdCBldmlkZW5jZSBhYm91dCBtb2Rlcm4gY3J5cHRvZ3JhcGh5LCBzbyByZWFkIHRoZSBhbm5vdW5jZW1lbnQgYXQgdGhhdCBzY29wZSByYXRoZXIgdGhhbiBhIGJyb2FkZXIgb25lLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "ai_broke_wwii_enigma_messages_unsolved_for_decades/ai_broke_wwii_enigma_messages_unsolved_for_decades_banner.webp" "AI broke WWII Enigma ciphers that stumped human cryptanalysts for decades" >}}

On 10 July 1941, a German Army radio operator sent a short message, 82 letters long, catalogued years later under the indicator **MVUEH**. Wartime codebreakers never got to it. Post-war historians and hobbyist cryptanalysts tried and failed too. By 2005, it had a permanent spot on Frode Weierud's Crypto Cellar, a research site that tracks WWII Enigma intercepts nobody has ever solved. It sat there, unbroken, for 21 more years.

In September 2026, it fell in about 10 hours of model time. Not to a supercomputer running a brute-force sweep of the entire keyspace, but to OpenAI's GPT-6 Astra, working from one borrowed clue and a piece of software it wrote for the occasion.

{{% tldr %}}
1. **The target:** MVUEH, an 82-letter German Army Enigma message from 10 July 1941, unsolved since at least 2005 on Frode Weierud's Crypto Cellar archive.
2. **The method:** Carter Leffen pointed GPT-6 Astra at the archive's unbroken messages. It linked MVUEH to a related message broken by hand in 2017, reused that message's plaintext ("ROSENOW ROSENOW") as a crib, wrote its own Enigma simulator and Bombe-style search in Python and C++, and checked 14.8 million keys before landing on the right one.
3. **The payoff:** a mundane military logistics message, "Please specify the route of march. I am in Rosenow, Rosenow. Immediate reply by radio," signed by a sender tentatively read as Waschbusch.
4. **The sequel:** days later, on 20 September, a second unbroken message (FMNGI, from 31 July 1941) fell the same way, this time with Anthropic's Claude Opus 5 and a different crib, "XHARTJENSTEINX."
5. **The catch:** a human picked the target and supplied the crib in both cases, other models reportedly reproduced the same result from the same prompt, and even the person who ran the first break says the write-up took 99 times longer than the codebreaking itself.
{{% /tldr %}}

## Why this particular message was still unbroken

Enigma cryptanalysis is not new, and most WWII Army traffic was broken decades ago, either at the time by Bletchley Park and its allies or since by hobbyists with modern hardware. What's left on Weierud's unbroken list is the residue: messages where something about the transmission or the key setup broke the usual attack.

MVUEH had three things working against it. First, the ciphertext as transcribed from the original intercept contained errors, which is common for radio traffic copied by hand under wartime conditions and is murder on any attack that assumes a clean input. Second, its daily key used a wheel order that didn't match the rest of that day's traffic, so operators (and later, researchers) couldn't just borrow a neighboring message's settings. Third, and most technically interesting, the Enigma's left-hand rotor happened to turn over at the 72nd letter of an 82-letter message, a rare event that shifts the machine's internal state partway through and breaks the assumptions behind standard crib-dragging techniques.

None of that makes MVUEH special in a historical sense. It makes it exactly the kind of message that resists casual attack: not impossible, just annoying enough that nobody had put in the specific, unglamorous work to crack it.

## What actually happened in September 2026

According to <a href="https://www.cryptocellar.org/bgac/the-mvueh-break.html" target="_blank">Weierud's account of the break</a>, Carter Leffen set GPT-6 Astra loose on the Crypto Cellar's list of unbroken messages with an open-ended goal: find one that looks solvable, and solve it. The model settled on MVUEH and then made the connection that had apparently gone unexploited for years, that message Nr. 173, indicator **SIPVX** and sent the same day, had already been broken by hand back in 2017 by researcher Alex Shovkoplyas. Its plaintext contained the place name "ROSENOW ROSENOW," repeated for radio clarity, twice.

{{< image "ai_broke_wwii_enigma_messages_unsolved_for_decades/mvueh_crib_chain_timeline.webp" "Timeline showing how a 2017 Enigma break supplied the crib an AI model used to crack the unsolved MVUEH message in 2026" >}}

That repeated town name became the crib: a guess at the plaintext, anchored to a specific position in the ciphertext, that narrows an otherwise impossible search down to something tractable. GPT-6 Astra then wrote its own tooling from scratch, an Enigma simulator plus Bombe-style search software in Python and C++, and used it to test candidate keys against the crib. It ran through 14.8 million keys before it found the one that turned MVUEH's garbled letters into readable German. The full process reportedly took around 10 hours of model time and referenced archival file identifiers (Bundesarchiv references RS 3-3/20a and RS 3-3/63b) that suggest it was pulling from more than just the public write-up of the earlier break.

The output, once translated, turned out to be almost anticlimactic: a routine request for marching orders, "Please specify the route of march. I am in Rosenow, Rosenow. Immediate reply by radio." That's the whole message. Eighty-five years of secrecy, 21 years on an unsolved list, and 10 hours of an AI model's time, all guarding a radio operator asking his commander which road to take.

## Why the keyspace didn't matter as much as you'd think

A stock 3-rotor Army Enigma with a plugboard has on the order of 159 quintillion possible daily settings. That's not a search space you sweep by brute force, then or now. What made the original Bombe work in the 1940s, and what makes this kind of attack work today, is the same insight: Enigma can never encrypt a letter to itself. If your crib is "ROSENOWROSENOW" and you slide it against the ciphertext, any alignment where a letter would map to itself is instantly wrong. That single structural quirk, a side effect of the rotor wiring, turns an intractable 159-quintillion-key search into a much smaller set of candidate alignments and key fragments worth checking in full.

That's genuinely useful applied cryptanalysis, and writing correct Bombe-style search code from a description of the algorithm is not nothing. But it's worth being precise about what's hard here. The hard part historically was building the Bombe and running it with 1940s hardware, or finding the crib by hand from a mountain of intercepted traffic. Once you have a solid crib and can write software, checking 14.8 million keys is well within reach of a laptop, let alone whatever compute backs a frontier model's tool-use loop.

## Then it happened again, four days later

If the MVUEH break were a one-off curiosity, it would be a fun footnote. What makes it a story is what happened next. On 20 September, a second previously unbroken message, catalogued as Nr. 205 / Nr. 285, indicator **FMNGI**, sent on 31 July 1941 and 63 letters long, was broken the same way, this time using Anthropic's Claude Opus 5 and a different crib: "XHARTJENSTEINX," a signature that recurs often enough in the traffic to be a reliable anchor.

Two different labs, two different models, the same general recipe, within a week of each other. That's less "an AI had a breakthrough" and more "this particular class of attack, crib plus agentic tool use plus a research archive of known-unsolved targets, is now a repeatable move." Expect more of Weierud's unbroken list to fall in the coming months, not because any single model is uniquely brilliant at cryptanalysis, but because the recipe is now known and cheap to run.

## The pushback, and it's worth taking seriously

The <a href="https://news.ycombinator.com/item?id=49801324" target="_blank">Hacker News discussion around the MVUEH break</a> was more interesting than the announcement itself, and it raised points that any technically literate reader should weigh before getting too excited.

The biggest one is attribution. Carter Leffen picked the target, made the connection between the two messages, and supplied the crib. The model's job, however capable, was to take that lead and execute a well-defined search. Several commenters pointed out that other models, given the same prompt and the same crib, reportedly produced comparable code and reached the same answer. That's a meaningful distinction: it's evidence the underlying task, once framed correctly, is not exotic for a competent coding agent, rather than evidence that this specific model has some unique codebreaking talent.

There's also a verification gap. How do you know the plaintext is actually correct, as opposed to merely plausible-looking German that happens to decrypt cleanly? The strongest version of that check is exactly what happened here: the message matches known German military phrasing, references a real place (Rosenow), and lines up with a related, independently-verified message from the same day. That's solid corroboration, but it's also worth noting that Weierud's own team said they were still combing through the model's logs afterward to understand exactly how it got there, which is a reasonable thing to want before calling a case fully closed.

Leffen's own framing, <a href="https://tech.yahoo.com/ai/chatgpt/articles/openais-gpt-6-astra-cracked-092217942.html" target="_blank">as relayed in the press coverage</a>, is the most useful one to end on. He reportedly said the write-up explaining the solution took 99 times more effort than the codebreaking itself, and was blunt that "the cipher itself is not the story." Enigma is a 1930s electromechanical rotor machine with a well-understood, decades-old body of attack techniques. None of this says anything about modern cryptography. The math protecting a TLS session or a Bitcoin wallet belongs, in his words, to "a far harder class" of problem, and nothing here moves that needle.

## What it's actually evidence of

Strip away the WWII romance and the AI-hype headlines, and what's left is a reasonably clean case study in long-horizon agentic tool use. GPT-6 Astra was pointed at an open-ended research corpus, asked to find a promising target on its own, correctly linked two historical records that had apparently sat unconnected for years, wrote nontrivial simulation and search code in two languages, and ran a multi-hour, multi-million-iteration search without falling over or needing a human to debug it along the way. If you build agents for a living, that combination (research, code synthesis, sustained execution, self-correction over hours rather than minutes) is the part worth paying attention to, independent of the fact that the target happened to be a Nazi radio message instead of a flaky test suite or a legacy codebase.

It's also a decent reminder of how these stories tend to get inflated in transit. "AI breaks WWII cipher" reads a lot more dramatically than "AI executes a well-specified cryptanalysis pipeline given a human-supplied crib," even though the second sentence is the accurate one. Both things can be true: this is a genuinely capable demonstration of tool-using agents, and it is not the codebreaking singularity the headlines implied. Read it as the former, and it's a good week for anyone building on frontier models. Read it as the latter, and you'll be disappointed the next time someone points a chatbot at a hash function.
