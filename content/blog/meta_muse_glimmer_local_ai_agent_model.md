---
title: "Muse Glimmer: Meta Built a 30B Model to Live on Your Machine, Not the Cloud"
description: "Meta Superintelligence Labs shipped Muse Glimmer, a 30B open-weight model built specifically for always-on local agents. Here's the architecture, the real quantization and speed numbers, what Hacker News made of it, and how to reach it from your phone with a Pinggy tunnel."
date: 2026-08-11T14:30:00+05:30
draft: false
tags: ["Muse Glimmer", "Meta AI", "open-weight models", "local LLM", "AI agents", "Ollama", "Apache 2.0", "on-device AI"]
categories: ["Technology", "AI", "AI Tools"]
og_image: "images/meta_muse_glimmer_local_ai_agent_model/meta_muse_glimmer_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiUnVuIE11c2UgR2xpbW1lciBMb2NhbGx5IHdpdGggT2xsYW1hIGFuZCBFeHBvc2UgSXQgd2l0aCBQaW5nZ3kiLAogICJkZXNjcmlwdGlvbiI6ICJTdGVwLWJ5LXN0ZXAgd29ya2Zsb3cgdG8gcHVsbCBNZXRhJ3MgTXVzZSBHbGltbWVyIG1vZGVsIHdpdGggT2xsYW1hLCBydW4gaXQgYXMgYSBsb2NhbCBhZ2VudCwgYW5kIHJlYWNoIGl0cyBBUEkgZnJvbSBhbm90aGVyIGRldmljZSB1c2luZyBhIFBpbmdneSB0dW5uZWwuIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkluc3RhbGwgT2xsYW1hIiwKICAgICAgInRleHQiOiAiSW5zdGFsbCBPbGxhbWEgb24gdGhlIG1hY2hpbmUgdGhhdCBoYXMgdGhlIEdQVSBvciBBcHBsZSBTaWxpY29uIGNoaXAgeW91IHBsYW4gdG8gcnVuIHRoZSBtb2RlbCBvbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUHVsbCBhbmQgcnVuIE11c2UgR2xpbW1lciIsCiAgICAgICJ0ZXh0IjogIlJ1biBvbGxhbWEgcnVuIG11c2UtZ2xpbW1lciB0byBkb3dubG9hZCB0aGUgcXVhbnRpemVkIHdlaWdodHMgYW5kIHN0YXJ0IHRoZSBtb2RlbCwgb3Igb2xsYW1hIHJ1biBtdXNlLWdsaW1tZXI6MzBiLW1seCBvbiBBcHBsZSBTaWxpY29uLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25maXJtIHRoZSBsb2NhbCBBUEkgaXMgdXAiLAogICAgICAidGV4dCI6ICJPbGxhbWEgZXhwb3NlcyBhbiBPcGVuQUktY29tcGF0aWJsZSBBUEkgb24gbG9jYWxob3N0OjExNDM0IGJ5IGRlZmF1bHQgb25jZSB0aGUgbW9kZWwgaXMgcnVubmluZy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiT3BlbiBhIFBpbmdneSB0dW5uZWwiLAogICAgICAidGV4dCI6ICJJbiBhIG5ldyB0ZXJtaW5hbCwgcnVuIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoxMTQzNCBmcmVlLnBpbmdneS5pbyB0byBnZXQgYSBwdWJsaWMgSFRUUFMgVVJMIHRoYXQgZm9yd2FyZHMgdG8gdGhlIGxvY2FsIE9sbGFtYSBBUEkuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNhbGwgdGhlIGFnZW50IGZyb20gYW55d2hlcmUiLAogICAgICAidGV4dCI6ICJTZW5kIHJlcXVlc3RzIHRvIHRoZSBQaW5nZ3kgVVJMIGluc3RlYWQgb2YgbG9jYWxob3N0IGZyb20geW91ciBwaG9uZSwgYW5vdGhlciBtYWNoaW5lLCBvciBhbnkgTUNQIGNsaWVudCBvciB3ZWJob29rIHRoYXQgbmVlZHMgdG8gcmVhY2ggdGhlIGFnZW50LiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "meta_muse_glimmer_local_ai_agent_model/meta_muse_glimmer_banner.webp" "Hero graphic for Muse Glimmer showing it is a 30 billion parameter dense model with under 20GB quantized footprint, Apache 2.0 license, 128K token context, running on one consumer GPU" >}}

Meta Superintelligence Labs shipped a model this week that is not trying to win a leaderboard. Muse Glimmer is 30 billion parameters, released under an Apache 2.0 license, and quantizes down to under 20 GB, small enough to sit on a single RTX 5090 or a Mac with 32 GB of unified memory and just stay there, running, waiting for the next tool call. Meta calls it a model for "local, always-on agent workflows," which is a fairly precise way of saying: this isn't for a chat window, it's for a process you leave running in the background like a daemon.

That framing matters more than the parameter count. Plenty of 30B-class open models have shipped this year. What's different here is that Muse Glimmer was trained and packaged around a specific deployment shape: one machine, one GPU, one long-lived session, doing tool calls and multi-step tasks instead of chatting with a human. It's a bet that a meaningful chunk of "AI agent" workloads don't need a datacenter at all, they need a model that's cheap enough to keep warm on hardware you already own.

{{% tldr %}}
1. **What it is:** Muse Glimmer, a 30B-parameter dense (not mixture-of-experts) model from Meta Superintelligence Labs, released August 10, 2026 under Apache 2.0, distilled from a larger teacher model called Muse Spark and purpose-built for tool use and long agent loops.
2. **Why dense instead of MoE:** no router, no expert selection, every parameter runs on every token. That trades some raw efficiency for a simpler, more predictable memory and latency profile on a single GPU, which is exactly what a workload has to have if it's going to stay resident all day.
3. **The size trick:** full precision needs around 55 GB; 4-bit quantization gets the language model itself under 20 GB, leaving headroom in a 24-32 GB card for the KV cache, the image encoder, and a speculative decoding drafter.
4. **The speed trick:** a companion draft model called DFlash speeds up token generation via speculative decoding, roughly 3.1x on an RTX 5090, 1.8x on an M5 Max, 1.5x on an M4 Max.
5. **How people are running it:** Ollama, LM Studio, llama.cpp, MLX, and Unsloth for local use; vLLM, SGLang, and NVIDIA NIM for serving it; Together AI, Fireworks AI, and OpenRouter if you'd rather not host it yourself.
6. **What Hacker News actually thinks:** it's a solid tool-caller and a genuinely open release, but several commenters point out it only "barely edges out" Qwen3.6-27B outside of tool-calling, and some read the release timing as a preemptive move against Alibaba's next Qwen drop.
7. **The catch for actually using it as an agent:** an always-on local agent is only useful if something outside your LAN can reach it. Ollama's API binds to `localhost` by default, so hooking it up to your phone, an MCP client, or a webhook means putting a public URL in front of it, which is where a tunnel comes in.
{{% /tldr %}}

## Why dense, and why now

Most of the interesting open-weight releases in the last year or two have leaned mixture-of-experts: route each token to a handful of specialist sub-networks, keep the active parameter count low, and get GPT-4-class behavior out of a model with an enormous total parameter count. It works, and it's why models with hundreds of billions of total parameters can run at usable speed on modest hardware, our post on [Colibrì running a 744B GLM-5.2 on 25 GB of RAM](/blog/colibri_glm_5_2_744b_model_25gb_ram/) is the extreme end of that trend.

Muse Glimmer goes the other way. It's dense: every one of its 30 billion parameters activates for every token, no routing, no expert selection, no variance in which weights get touched from one token to the next. That's a real tradeoff. A well-tuned MoE model can pack more effective capacity into the same active-parameter budget. But dense models have a property that matters a lot for an always-on process: their memory footprint and latency are flat and predictable. There's no cold-expert penalty, no router misprediction, no bursty VRAM spikes when a request happens to hit an unusual mix of experts. If the plan is to leave a model running in the background for hours while it works through an agent loop, predictable beats clever.

## What's actually inside it

Meta's <a href="https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model" target="_blank">announcement post</a> describes a three-phase training pipeline. Pre-training happens via logit distillation from Muse Spark, a larger, presumably frontier-scale teacher model that isn't itself being released, so Glimmer inherits its behavior without inheriting its size. Mid-training shifts to longer-context, agent-focused data with reasoning traces baked in. Post-training combines supervised fine-tuning with on-policy distillation and reinforcement learning, the same general recipe most labs are using now to sharpen tool-use and multi-step reasoning rather than just next-token prediction quality.

The model ships with a dedicated perception encoder for image understanding, supports over 100 languages, and comes with a 128K-token context window, per its Ollama listing. Meta's own materials frame the target capabilities plainly: end-to-end task completion on benchmark suites like DeepSearch QA, MCP-Atlas, and SWE-Bench-style coding workloads, reliable tool calling with precise schemas across long sessions, multi-step reasoning that holds up over extended horizons, and failure recovery, meaning the model notices when a tool call errors out and tries something else instead of stalling.

## The size and speed numbers

The headline number is the quantization. At full precision the model needs roughly 55 GB, which puts it out of reach of a single consumer GPU entirely. Meta's 4-bit quantization gets the language model itself under 20 GB, which is small enough to leave real headroom inside a 24 GB or 32 GB card for the working memory (the KV cache that grows as an agent session gets longer), the perception encoder, and a speculative decoding drafter running alongside it. Ollama's published tags line up with that: the standard `muse-glimmer:30b` weighs in at 18 GB, and the Apple Silicon-tuned `30b-mlx` variant is 21 GB.

Speed is the second number worth knowing, and it comes from a technique called speculative decoding: a small, fast draft model proposes several tokens ahead, and the full model verifies them in a batch instead of generating one token at a time. Meta's drafter for this is called DFlash, and on the K-quant build it reportedly delivers about 3.1x faster decoding on an RTX 5090, 1.8x on an Apple M5 Max, and 1.5x on an M4 Max. Speculative decoding gains vary a lot by workload (they shrink on outputs that are hard to predict token-by-token, like dense code with unusual identifiers), so treat those as best-case multipliers rather than a guarantee, but they're a meaningful chunk of why this is usable at all as something you'd want running continuously rather than just for the occasional query.

## How it stacks up, honestly

Meta's announcement benchmarks Glimmer against Gemma4-31B and Qwen3.6-27B across agentic, coding, multimodal, safety, and reasoning categories, and reports competitive results within its size class. What's more useful than the vendor's own framing is what showed up in the <a href="https://news.ycombinator.com/item?id=49241679" target="_blank">Hacker News thread</a> once people actually ran it. The reception was positive but not uncritical. Commenters liked the tool-calling behavior specifically, one described it as a "good candidate to test breaking down subtasks," and there was real praise for the model's terse, non-rambling thinking traces compared to some alternatives. There was also genuine enthusiasm for the fact that this is Meta shipping real open weights again, one thread called it evidence of a "competitive culture of open weights that isn't just geopolitics."

The skepticism was equally specific. Several people noted that outside of tool-calling, Glimmer "barely edges out" Qwen3.6-27B, reading it as incremental progress in an increasingly saturated 30B weight class rather than a leap. There was debate about whether Meta rushed the release ahead of Alibaba's next Qwen version, and a separate, more structural argument that small dense models are still served more efficiently on big shared GPUs in the cloud than run one-at-a-time on a personal machine, because of how much throughput you give up without batching multiple requests together. That's a fair point for a company serving thousands of users. It's a much weaker point for a single developer who wants a private agent running on hardware they already own and isn't paying per-token to a provider.

If you want the general background on why mixture-of-experts models behave differently from what Glimmer is doing here, see our explainer on [mixture of experts in LLMs](/blog/what_is_mixture_of_experts_in_llm_models/).

## Where you can actually run it

The deployment story is unusually broad for a day-one release. On the local side, it's supported in Ollama, LM Studio, llama.cpp, ExecuTorch, and MLX, with Unsloth in the mix for anyone who wants to fine-tune it further. For serving it to more than one user at a time, there's vLLM and SGLang, plus an NVIDIA NIM container for teams that want a prebuilt, auto-configured inference endpoint. NVIDIA's own numbers for the datacenter path are a different animal entirely from the local numbers above, over 20,000 tokens per second per GPU on Blackwell Ultra hardware, which is a batched-serving figure, not something a single laptop session will ever see, but it tells you Meta and NVIDIA both expect this model to also live on real infrastructure, not just laptops. If you'd rather skip hosting it yourself altogether, Together AI, Fireworks AI, and OpenRouter all list it as a hosted endpoint.

Weights are on <a href="https://huggingface.co/meta-models/Muse-Glimmer-30B" target="_blank">Hugging Face</a> under Apache 2.0, which is about as unrestricted as an open-weight license gets: no usage tier gates, no field-of-use carve-outs, commercial use included.

## Actually running it, and reaching it from anywhere

Here's where the "always-on local agent" framing runs into a practical wall. Ollama's API server binds to `localhost:11434` by default. That's the right default, it shouldn't be open to your whole network without you asking for it, but it also means the model you just spent effort setting up as a persistent background agent is only reachable from the machine it's running on. If the point of an always-on agent is that it keeps working while you're away from your desk, "away from your desk" is exactly the moment you can't reach it.

{{< image "meta_muse_glimmer_local_ai_agent_model/meta_muse_glimmer_pinggy_diagram.webp" "Diagram showing Ollama running Muse Glimmer on localhost, a Pinggy SSH tunnel exposing it as a public HTTPS URL, and a phone or MCP client calling that URL from anywhere" >}}

The fix is the same one-line trick that shows up in most of our local-LLM guides: put a tunnel in front of the local port instead of trying to open your router or deploy the model somewhere else. Get the model running first:

```bash
ollama run muse-glimmer
```

Then, in a second terminal, point {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} at Ollama's default port:

```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io
```

That opens an SSH reverse tunnel and prints back a public HTTPS URL, something like `https://abc123.a.pinggy.link`, that forwards straight to the Ollama process on your machine. No account needed for casual use, no router configuration, no cloud deployment. From there, anything that can make an HTTPS request can reach your agent: curl it from your phone to check on a long-running task, point an MCP client at it instead of a cloud model, or give the URL to a service that needs to POST a webhook back into your local workflow. When you're done, `Ctrl+C` closes the tunnel and the URL stops resolving, which matters here more than in most tunneling use cases, since you're exposing an API that can execute tool calls, not just serve a static page.

This is the same pattern we've walked through for other local models, including [running Ollama's API and Open WebUI online](/blog/how_to_easily_share_ollama_api_and_open_webui_online/) and [forwarding Ollama's port 11434 for remote access](/blog/forward_ollama_port_11434_online_access/), and it works identically here because Glimmer sits behind the same Ollama API surface those guides already cover. The only thing that's changed is which model is answering the requests.

## Where this fits Meta's bigger bet

Muse Glimmer didn't ship in isolation. It landed the same week Mark Zuckerberg published a lengthy manifesto laying out his vision for "personal superintelligence," the idea that the most valuable AI isn't a shared assistant everyone talks to in the cloud, it's a private, personal one that runs close to you and knows your context. Whatever you make of that framing, Glimmer is a fairly literal, concrete instance of it: a capable agent model small enough to run entirely on hardware you own, with nothing round-tripping to Meta's servers unless you choose to send it there. Read next to each other, one is Meta's long-term pitch and the other is a working piece of infrastructure for it available today under a license that lets anyone build on it.

## Should you actually use it

If you're already running local models for coding assistance, research agents, or anything that chains multiple tool calls together, Muse Glimmer is worth pulling down and trying against your actual workflows rather than trusting any single benchmark table, including Meta's own. The dense architecture and predictable memory footprint make it a genuinely easier thing to leave running for hours than a lot of the MoE alternatives in its weight class, and the tool-calling strength that Hacker News commenters kept independently landing on is the specific thing that matters for agent work.

If your bar is raw chat quality or you're chasing leaderboard position, the honest read from the community is that it's a solid entry in a crowded 30B field rather than a clear step change over Qwen3.6-27B. And if you're serving many users at once rather than running a single personal agent, the throughput argument for cloud-hosted, batched serving still holds, that's exactly why Together AI, Fireworks, and OpenRouter are offering it as a hosted endpoint alongside the local release.

## Conclusion

The interesting part of Muse Glimmer isn't a benchmark win, it's the design target. Meta built a model around the assumption that an AI agent should be able to live on the same machine as the person it's working for, running continuously, without a cloud bill attached to every tool call. Whether that turns out to be the right shape for most agent workloads is still an open question, and the Hacker News thread is right to be skeptical rather than starstruck about it. But the pieces to try it yourself are all sitting there today: Apache 2.0 weights, day-one Ollama support, and a quantized footprint that fits on hardware a lot of developers already have. Pull it down, point a tunnel at it, and see if it holds up on the tasks you actually care about.
