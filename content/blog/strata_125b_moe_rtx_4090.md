---
title: "How a 125B MoE Model Runs at 100 tokens/s on One RTX 4090"
description: "Strata runs Qwen3.8-Flash-Next, a 125B mixture-of-experts model, on a single 12 to 24 GB GPU by caching hot experts in VRAM. How the three tiers work, what the benchmarks measure, and how to reach it remotely."
date: 2026-10-04T10:00:00+05:30
lastmod: 2026-10-04T10:00:00+05:30
draft: false
tags: ["Strata", "Mixture of Experts", "local LLM", "GPU", "self-hosted AI"]
og_image: "images/strata_125b_moe_rtx_4090/strata_125b_moe_rtx_4090_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkhvdyBhIDEyNUIgTW9FIE1vZGVsIFJ1bnMgYXQgMTAwIHRva2Vucy9zIG9uIE9uZSBSVFggNDA5MCIsCiAgImRlc2NyaXB0aW9uIjogIlN0cmF0YSBydW5zIFF3ZW4zLjgtRmxhc2gtTmV4dCwgYSAxMjVCIG1peHR1cmUtb2YtZXhwZXJ0cyBtb2RlbCwgb24gYSBzaW5nbGUgMTIgdG8gMjQgR0IgR1BVIGJ5IGNhY2hpbmcgaG90IGV4cGVydHMgaW4gVlJBTS4gSG93IHRoZSB0aHJlZSB0aWVycyB3b3JrLCB3aGF0IHRoZSBiZW5jaG1hcmtzIG1lYXN1cmUsIGFuZCBob3cgdG8gcmVhY2ggaXQgcmVtb3RlbHkuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3N0cmF0YV8xMjViX21vZV9ydHhfNDA5MC9zdHJhdGFfMTI1Yl9tb2VfcnR4XzQwOTBfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiB7CiAgICAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwKICAgICJuYW1lIjogIlBpbmdneSIKICB9LAogICJwdWJsaXNoZXIiOiB7CiAgICAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwKICAgICJuYW1lIjogIlBpbmdneSIsCiAgICAidXJsIjogImh0dHBzOi8vcGluZ2d5LmlvIgogIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0xMC0wNFQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTA0VDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsKICAgICJAdHlwZSI6ICJXZWJQYWdlIiwKICAgICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9zdHJhdGFfMTI1Yl9tb2VfcnR4XzQwOTAvIgogIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkxvY2FsIExMTXMiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIlN0cmF0YSwgUXdlbjMuOC1GbGFzaC1OZXh0LCBydW4gMTI1QiBtb2RlbCBvbiBSVFggNDA5MCwgTW9FIGV4cGVydCBvZmZsb2FkaW5nLCBsb2NhbCBMTE0sIHNwZWN1bGF0aXZlIGRlY29kaW5nIiwKICAiYWJvdXQiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIk1peHR1cmUgb2YgZXhwZXJ0cyIsCiAgICAgICJkZXNjcmlwdGlvbiI6ICJBIG1vZGVsIGRlc2lnbiB3aGVyZSBhIHJvdXRlciBhY3RpdmF0ZXMgYSBmZXcgc21hbGwgZXhwZXJ0IG5ldHdvcmtzIHBlciB0b2tlbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiVGhpbmciLAogICAgICAibmFtZSI6ICJFeHBlcnQgY2FjaGluZyIsCiAgICAgICJkZXNjcmlwdGlvbiI6ICJLZWVwaW5nIHRoZSBtb3N0LXVzZWQgZXhwZXJ0cyBpbiBHUFUgbWVtb3J5IGFuZCB0aGUgcmVzdCBpbiBzeXN0ZW0gUkFNLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIlNwZWN1bGF0aXZlIGRlY29kaW5nIiwKICAgICAgImRlc2NyaXB0aW9uIjogIkEgZHJhZnQgaGVhZCBndWVzc2VzIHRva2VucyB0aGF0IHRoZSBmdWxsIG1vZGVsIHZlcmlmaWVzIGluIG9uZSBwYXNzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJUaGluZyIsCiAgICAgICJuYW1lIjogIlBpbmdneSB0dW5uZWwiLAogICAgICAiZGVzY3JpcHRpb24iOiAiQW4gU1NILWJhc2VkIHR1bm5lbCB0aGF0IGdpdmVzIGEgbG9jYWwgc2VydmVyIGEgcHVibGljIEhUVFBTIFVSTC4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "strata_125b_moe_rtx_4090/strata_125b_moe_rtx_4090_banner.webp" "Headline reading 125B model, one RTX 4090, beside a panel showing 106 tokens per second, a 95.5% expert cache hit rate and 10,196 of 24,576 experts held in VRAM" >}}
<a href="https://github.com/Niko1221/Strata" target="_blank">Strata</a> is an MIT-licensed inference engine that runs Qwen3.8-Flash-Next, a 125B-parameter mixture-of-experts model, on one gaming GPU. A community benchmark on an RTX 4090 (24 GB, i9-13900K, 64 GB DDR5) reports 106 tokens/s over a whole 3,127-token request with the 2-bit `IQ2_XS` build, and about 98 tokens/s with the larger `IQ3_XXS` build. The model's weights are many times bigger than the card's memory. The trick is that each token only touches 10 of 512 experts per layer, and Strata keeps the popular ones in VRAM, all of them in system RAM, and speculates a few tokens ahead.

It is a good trick, and it has a price: the real constraint moves from VRAM to system RAM, and the headline speed depends heavily on what you ask it to write. This post walks through the mechanism and the numbers, then shows how to reach the server from another device. As of October 5, 2026 the repo has about 12.8k stars and the latest release is v0.1.39.

{{% tldr %}}
1. **Only a sliver of the model runs per token**: Qwen3.8-Flash-Next has 512 experts in each of 48 layers (24,576 in total), and a token uses 10 routed experts plus 1 shared one per layer, about 6B active parameters out of 180B.
2. **Strata caches by popularity**: the most-used experts sit in VRAM, every expert sits in RAM, and on the benchmarked 4090 the VRAM cache answered 91.9% to 95.5% of lookups.
3. **Speculative decoding adds 1.6x to 1.8x**, but the gain depends on content: roughly 0.88 of drafted tokens are accepted on code and 0.59 on prose.
4. **You need RAM, not just a GPU**: 32 GB minimum, 64 GB for the larger quantizations, about 80 GB of disk, and a 1 to 3 minute freeze while the model loads.
5. **Never expose it without a key**: the README's remote flag is `--api-key`, and a tunnel in front of it is a cleaner way to reach it than opening a port.
{{% /tldr %}}

## Why a 125B model does not need 125B of work per token

A dense model multiplies every token by every weight. A mixture-of-experts model splits each feed-forward block into many small expert networks and a router that picks a few per token. If you want the general background, we covered it in {{< link href="/blog/what_is_mixture_of_experts_in_llm_models/" >}}what is mixture of experts in LLM models{{< /link >}}.

The numbers for Qwen3.8-Flash-Next, from the <a href="https://akash.network/the-bid/qwen3-8-flash-next-architecture-gpu-requirements/" target="_blank">Akash write-up of the architecture</a>:

- 48 layers, 512 experts per layer, 10 routed plus 1 shared expert active per token.
- 180B parameters in total: a 125B language model, a 51B n-gram embedding table and 4B for multi-token prediction.
- About 6B parameters active per token.
- 262,144 tokens of native context, and a license called `qwen-community-1.0`.

Multiply 48 by 512 and you get 24,576, which is the expert count Strata's README quotes. Per token the router touches 480 of them, about 2%. The catch is that you cannot know which 480 ahead of time, so in principle all 24,576 must be reachable. At FP8 the checkpoint is 172.78 GiB. That does not fit on a card, and it does not fit in a desktop's RAM either, which is why the engine works on quantized builds of 35 to 55 GB.

## How Strata splits experts across GPU, RAM and SSD

Strata is built on llama.cpp and ggml, pinned to a specific llama.cpp commit, and it is purpose-built for this one model. Its README describes three tiers:

- **GPU**: the few thousand experts that get used most often.
- **RAM**: all of them.
- **SSD**: a lookup table, plus the model file itself.

The README does not spell out every placement detail, but the issue above mentions the KV cache living on the GPU, and a community benchmark describes the remaining experts as held in pinned system memory. A miss therefore costs a copy over PCIe. The `UD-Q4_K_XL` build is the exception: the README says it reads mostly from the SSD and runs at 7 to 8.5 tokens/s on a 64 GB PC.

{{< image "strata_125b_moe_rtx_4090/strata_expert_tiers.webp" "Diagram of a router sending a token to GPU VRAM on a cache hit or to system RAM over PCIe on a miss, with an SSD holding the model file below" >}}

*Hot experts live in VRAM, every expert lives in RAM, and a miss costs a PCIe copy.*
## What the cache hit rate says about routing

The RTX 4090 run in <a href="https://github.com/Niko1221/Strata/issues/307" target="_blank">issue #307</a> (September 30, 2026, Windows, 128K context, 8-bit KV cache, multi-token prediction on) reports the cache numbers directly:

| Build | Experts in VRAM | Share of all 24,576 | Cache hit rate | Whole-request speed |
|---|---|---|---|---|
| `IQ2_XS` | 10,196 | 41.5% | 95.5% | 106.1 tok/s |
| `IQ3_XXS` | 8,185 | 33.3% | 91.9% | 98.1 tok/s |

The percentages in the third column are my arithmetic from the issue's figures. The interesting part is the gap between the third and fourth columns. Holding a third to two fifths of the experts answers over 90% of lookups, so the router leans on a popular subset instead of spreading evenly. If the hit rate is counted per expert lookup, 95.5% means roughly 22 of the 480 expert reads per token go to RAM, and 91.9% means roughly 39. That arithmetic is mine too, and the issue does not say how it counts, so treat it as an estimate.

The larger quantization holds fewer experts in the same 24 GB because each one is bigger, so it misses more and runs a little slower. The author of the issue noted the `IQ3_XXS` output was also 3.7 times longer, which is part of why the whole-request time looks fine.

## Speculative decoding and why code is faster than prose

Qwen3.8-Flash-Next ships with multi-token prediction (MTP) heads. Strata uses them as a draft model: the small head guesses the next few tokens and the full model verifies them in one pass. Verified tokens are identical to what the full model would have produced, so quality does not change. The README claims 1.6x to 1.8x faster generation.

How much you gain depends on how often the draft is right. A <a href="https://dev.to/ashraf_chowdury09/a-125b-model-at-100-toks-on-one-rtx-4090-heres-what-the-hn-hype-leaves-out-463n" target="_blank">third-party write-up</a> measured acceptance rates of about 0.59 on prose, 0.88 on code and 0.93 on structured output. On an AMD Strix Halo machine, the same model went from about 22 tokens/s on prose to 82 tokens/s on code. So the 100 tokens/s figure is a coding-agent figure. If you are generating essays, plan on less.

## Which build to pick for your RAM

Strata's own benchmark table, on an RTX 5070 (12 GB) with a Ryzen 5 7600 and 64 GB of RAM, shows the trade between speed and quality:

{{< image "strata_125b_moe_rtx_4090/strata_speed_by_build.webp" "Bar chart of Strata output tokens per second by build on an RTX 5070: Q2_0 94, IQ2_XS 79, IQ3_XXS 62, IQ3_S 53, Coder 55" >}}

*Data: {{< link href="https://github.com/Niko1221/Strata" >}}Strata README{{< /link >}}, 2026. Measured by the project, not independently.*
The README's guidance by system RAM:

- **32 GB**: the `Coder` variant. It removes half the experts and, per the README, reaches 91% of the full model's SWE-bench Verified score. It is weaker on CJK text.
- **48 GB**: `IQ2_XS` or `Q2_0`. The bigger builds do not fit.
- **64 GB**: `IQ2_XS`, `IQ3_XXS` or `IQ3_S`. `IQ3_S` is the smartest of them.
- **96 GB or more**: `IQ3_S` or Unsloth's `UD-IQ4_XS`, a roughly 4-bit build with a 94 GB download.

Minimum hardware is 12 GB of VRAM, 32 GB of RAM and about 80 GB of free disk, on Windows 10/11 or Linux. NVIDIA RTX 20 series and newer work, and so do several recent AMD Radeon cards. Reading images is not yet supported on AMD under Windows.

## What it costs you

Strata is honest about its own rough edges, and a few are worth planning around:

- **Startup**: loading 35 to 55 GB into RAM can make the machine sluggish or unresponsive for 1 to 3 minutes.
- **Long prompts**: the README says about one minute per 30,000 tokens, roughly 500 tokens/s. A coding agent that re-sends a large context will feel that first-token wait.
- **Heavy quantization**: the fast builds are 2-bit. A 2-bit 125B model is not the same thing as the full-precision one, and the SWE-bench figure above applies to the `Coder` variant, not to every build.
- **RAM pressure**: "the disk light keeps blinking" and "the engine stopped unexpectedly" both mean you picked a build too big for your free RAM.
- **The headline benchmark** in the <a href="https://dev.to/ashraf_chowdury09/a-125b-model-at-100-toks-on-one-rtx-4090-heres-what-the-hn-hype-leaves-out-463n" target="_blank">skeptical write-up</a> ran with 192 GB of RAM, far above the recommended 64 GB.
- **License**: Strata is MIT, but the model keeps its own `qwen-community-1.0` terms. Read them before shipping it in a product.

## Running it and reaching it from another device

On Windows, unzip the repo and run `START-HERE.bat`, answer the prompts for model size, context length and image support, and wait for the download (about 70 GB for the larger builds). On Linux run `./setup.sh`. The UI opens at `http://127.0.0.1:8080`, and the API listens on the same port:

- OpenAI-compatible: `http://127.0.0.1:8080/v1`
- Anthropic-compatible: `http://127.0.0.1:8080/v1/messages`
- Responses API, for Codex CLI: `/v1/responses`

I did not run Strata myself for this post. It needs a GPU and 64 GB of RAM that I did not have, so every number above comes from the project, its issues and third-party write-ups, and the commands below come from the README and are untested.

The README gives this command for letting a phone or another PC connect:

```bash
START-HERE.bat --setup --host 0.0.0.0 --api-key <secret>
```

Binding to `0.0.0.0` puts the port on your whole LAN. If the client is on another network, you would also have to open a port on your router. A tunnel avoids both: the machine running Strata opens an outbound SSH connection, and the public URL forwards through it to port 8080. The SSH client connects to `localhost`, so you can leave the server on its default loopback address. Keep the API key anyway, because the public URL is reachable by anyone who has it. I have not checked whether `--api-key` can be used without `--host`, so check the README for the flags your version supports.

With Strata running, open a {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} tunnel to port 8080 from a second terminal. Windows 10 and 11 ship an SSH client, so no install is needed:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8080 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8080 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Pinggy prints a public HTTPS URL. From the laptop or phone, call it like any OpenAI-compatible endpoint. The README says any model name works:

```bash
curl https://<your-pinggy-url>/v1/chat/completions \
  -H "Authorization: Bearer <secret>" \
  -H "Content-Type: application/json" \
  -d '{"model":"strata","messages":[{"role":"user","content":"Write a bash one-liner that counts lines in all .py files"}]}'
```

{{< image "strata_125b_moe_rtx_4090/strata_pinggy_remote_access.webp" "Sequence diagram of a laptop calling a Pinggy URL, the request travelling down an SSH connection the gaming PC opened, and reaching Strata on localhost:8080" >}}

*The gaming PC dials out to Pinggy, so a client on any network can reach port 8080.*
Free tunnels expire after 60 minutes. A {{< link href="https://dashboard.pinggy.io" >}}Pinggy Pro token{{< /link >}} gives a persistent URL. For the same pattern with other local servers, see {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}how to self-host any LLM{{< /link >}}.

## Conclusion

The useful idea here is not the 125B figure. It is that routing in a large MoE model is skewed, so a cache sized at a third of the experts can serve over 90% of lookups, and the rest can live in cheap RAM. That is a trade you can measure on your own box: Strata has a Monitor tab with GPU, CPU and RAM metrics, and the project keeps a `COMMUNITY_BENCHMARKS.md` you can add your own numbers to. Start with the build your RAM table row suggests, time a coding prompt and a prose prompt separately, and see which side of 100 tokens/s you land on.
