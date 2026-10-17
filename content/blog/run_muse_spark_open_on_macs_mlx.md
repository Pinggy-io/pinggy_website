---
title: "Running Meta's Muse Spark Open on Two Mac Studios with MLX"
description: "Muse Spark Open is an 816B-parameter open-weight model that fits on two M5 Ultra Mac Studios. Here is how MLX splits it across machines, what the speeds look like, and how to reach the local server from outside with Pinggy."
date: 2026-10-17T08:00:00+05:30
lastmod: 2026-10-17T08:00:00+05:30
draft: false
tags: ["Muse Spark Open", "Apple Silicon", "local LLM", "self-hosted AI", "Pinggy"]
og_image: "images/run_muse_spark_open_on_macs_mlx/run_muse_spark_open_on_macs_mlx_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlJ1bm5pbmcgTWV0YSdzIE11c2UgU3BhcmsgT3BlbiBvbiBUd28gTWFjIFN0dWRpb3Mgd2l0aCBNTFgiLAogICJkZXNjcmlwdGlvbiI6ICJNdXNlIFNwYXJrIE9wZW4gaXMgYW4gODE2Qi1wYXJhbWV0ZXIgb3Blbi13ZWlnaHQgbW9kZWwgdGhhdCBmaXRzIG9uIHR3byBNNSBVbHRyYSBNYWMgU3R1ZGlvcy4gSGVyZSBpcyBob3cgTUxYIHNwbGl0cyBpdCBhY3Jvc3MgbWFjaGluZXMsIHdoYXQgdGhlIHNwZWVkcyBsb29rIGxpa2UsIGFuZCBob3cgdG8gcmVhY2ggdGhlIGxvY2FsIHNlcnZlciBmcm9tIG91dHNpZGUgd2l0aCBQaW5nZ3kuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL3J1bl9tdXNlX3NwYXJrX29wZW5fb25fbWFjc19tbHgvcnVuX211c2Vfc3Bhcmtfb3Blbl9vbl9tYWNzX21seF9iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTE3VDA4OjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMTdUMDg6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9ydW5fbXVzZV9zcGFya19vcGVuX29uX21hY3NfbWx4LyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiTG9jYWwgQUkiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkFkdmFuY2VkIiwKICAia2V5d29yZHMiOiAiTXVzZSBTcGFyayBPcGVuLCBNTFggZGlzdHJpYnV0ZWQgaW5mZXJlbmNlLCBNYWMgU3R1ZGlvIE01IFVsdHJhLCBqYWNjbCwgVGh1bmRlcmJvbHQgNSBSRE1BLCBtbHhfbG0uc2VydmVyLCBydW4gTExNIGxvY2FsbHksIFBpbmdneSIsCiAgImFib3V0IjogWwogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJNdXNlIFNwYXJrIE9wZW4iLCAiZGVzY3JpcHRpb24iOiAiTWV0YSdzIDgxNkItcGFyYW1ldGVyIG9wZW4td2VpZ2h0IG1peHR1cmUtb2YtZXhwZXJ0cyBtb2RlbCB3aXRoIDQyQiBhY3RpdmUgcGFyYW1ldGVycy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlRlbnNvciBwYXJhbGxlbGlzbSIsICJkZXNjcmlwdGlvbiI6ICJTcGxpdHRpbmcgZXZlcnkgbGF5ZXIgb2YgYSBtb2RlbCBhY3Jvc3MgbWFjaGluZXMgc28gZGVjb2RlIHNwZWVkIHNjYWxlcyB3aXRoIG1hY2hpbmUgY291bnQuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJQaXBlbGluZSBwYXJhbGxlbGlzbSIsICJkZXNjcmlwdGlvbiI6ICJTcGxpdHRpbmcgYSBtb2RlbCBieSBsYXllcnMgYWNyb3NzIG1hY2hpbmVzOyBzaW1wbGUsIGJ1dCBkZWNvZGluZyBpcyBubyBmYXN0ZXIgdGhhbiBvbmUgbWFjaGluZS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlJETUEgb3ZlciBUaHVuZGVyYm9sdCA1IiwgImRlc2NyaXB0aW9uIjogIkxvdy1sYXRlbmN5IGxpbmsgYmV0d2VlbiBNYWNzIHVzZWQgYnkgdGhlIE1MWCBqYWNjbCBiYWNrZW5kLCBhdmFpbGFibGUgZnJvbSBtYWNPUyAyNi4yLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUGluZ2d5IHR1bm5lbCIsICJkZXNjcmlwdGlvbiI6ICJBbiBTU0ggdHVubmVsIHRoYXQgZ2l2ZXMgdGhlIGxvY2FsIG1seF9sbS5zZXJ2ZXIgcG9ydCBhIHB1YmxpYyBIVFRQUyBVUkwuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "run_muse_spark_open_on_macs_mlx/run_muse_spark_open_on_macs_mlx_banner.webp" "Banner reading 816B model on 2 Macs, with a panel of Muse Spark Open decode speeds: 15.74, 24.99 and 36.73 tokens per second" >}}

Meta {{< link href="https://research.meta.ai/blog/muse-spark-open" >}}released Muse Spark Open{{< /link >}} on October 15, 2026: an 816B-parameter mixture-of-experts model with 42B parameters active per token and a 1M-token context window. The part that caught my eye is the hardware line on the model card. It runs on **two Apple M5 Ultra Mac Studios** wired together with Thunderbolt 5, using MLX. A model that normally wants a rack of GPUs fits on a desk, and Apple {{< link href="https://machinelearning.apple.com/research/mlx-distributed-inference" >}}published the numbers{{< /link >}}: 24.99 tokens/s decode on two Macs, 36.73 tokens/s on four.

It isn't a casual download. The 4-bit weights are about 493GB, you need macOS 26.2 or later, and RDMA over Thunderbolt has to be switched on from macOS Recovery. This post walks through why one Mac isn't enough, what MLX does to split the model, the exact commands from Apple's write-up, and how to reach the resulting server from another network with Pinggy.

A caveat up front: I don't have two M5 Ultra Mac Studios here. The commands below are copied from Apple's and Meta's published material and the MLX docs, and I have not run them myself. Numbers are Apple's, measured on their hardware.

{{% tldr %}}
1. **One Mac can't hold it.** Muse Spark Open is 816B parameters (42B active). In NVFP4 it is about 493GB, which doesn't fit in a single 512GB Mac Studio once working memory is added. BF16 would need over 1.6TB.
2. **MLX splits it two ways.** Pipeline parallelism splits by layer and barely speeds up decoding. Tensor parallelism splits each layer across machines and scales: 24.99 tok/s on 2 Macs, 36.73 tok/s on 4 (8,192-token context).
3. **The link matters.** MLX uses the `jaccl` backend over Thunderbolt 5 RDMA, which needs macOS 26.2+, MLX 0.30.1+, and RDMA enabled in Recovery.
4. **It serves an OpenAI-style API.** `mlx_lm.server` wrapped in `mlx.launch` listens on port 8080 at `/v1`, so tools like OpenCode can point at it.
5. **Pinggy gets it off your desk.** One `ssh -p 443 -R0:localhost:8080 free.pinggy.io` from the first Mac gives you a public HTTPS URL. Add a key so strangers can't use your hardware.
{{% /tldr %}}

{{< llm-context >}}To reach a locally served Muse Spark Open model with Pinggy - run `mlx.launch --hostfile hostfile.json --backend jaccl --env MLX_METAL_FAST_SYNCH=1 -- mlx_lm.server --model meta-models/Muse-Spark-Open-816B-A42B-NVFP4 --port 8080` on the Mac cluster (OpenAI-compatible API on port 8080), then in a new terminal on the first Mac run `ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- k:yourkey` to get a public HTTPS URL that requires a bearer key.{{< /llm-context >}}

## Why one Mac Studio isn't enough

Start with the arithmetic. Meta's {{< link href="https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B" >}}model card{{< /link >}} lists 816B total parameters, stored as BF16 (2 bytes each) or NVFP4 (about half a byte each plus scaling data). Apple's post puts the NVFP4 build at roughly 493GB and says BF16 would need more than 1.6TB for the weights alone.

An M5 Ultra Mac Studio tops out at 512GB of unified memory with 1.2TB/s of bandwidth. 493GB of weights leaves about 19GB for the KV cache, activations and macOS itself, and Apple states it directly: the model does not fit on one machine once intermediate computation memory is added. Two machines give you about 1TB, which is why Meta's launch post says two Mac Studios.

{{< image "run_muse_spark_open_on_macs_mlx/muse_spark_memory_fit.webp" "Bar chart comparing Muse Spark Open weights in BF16 (over 1,600 GB) and NVFP4 (about 493 GB) with 512 GB for one Mac Studio and 1,024 GB for two" >}}

*Data: Apple Machine Learning Research and Meta, October 2026.*

The 42B active figure is the other half of the story. It is a mixture-of-experts model with 256 experts and 8 active per token, so each token touches roughly 5% of the weights. That is why decode speed is respectable at all. Memory capacity decides whether it loads. Memory bandwidth and the link between Macs decide how fast it talks.

## What MLX does to split the model

MLX is Apple's array framework, and `mlx-lm` is the LLM package on top of it. Apple's write-up compares two ways of spreading one model over several machines.

**Pipeline parallelism** gives each Mac a contiguous block of layers. Mac 1 runs layers 1 to N, hands the activations to Mac 2, which runs the rest. It's simple and tolerates a slow link. The catch is that layers still run one after the other, so decoding is no faster than a single machine would be. Apple notes that it only helps prefill, mainly at very long contexts.

**Tensor parallelism** splits every layer across the machines. Each Mac computes part of every layer, and they exchange partial results after each one. That's harder to build and punishing on latency, since the Macs talk to each other many times per token. When the link is fast enough, decode speed scales with the machine count.

{{< image "run_muse_spark_open_on_macs_mlx/pipeline_vs_tensor_parallelism.webp" "Two stacks of six layers: pipeline parallelism puts layers 1 to 3 on Mac 1 and 4 to 6 on Mac 2, tensor parallelism cuts every layer between both Macs" >}}

*Same model, two ways to cut it.*

## The numbers from Apple's benchmark

Apple ran the NVFP4 build on M5 Ultra Mac Studios at an 8,192-token context, batch size 1, measuring decode over 128 generated tokens. Time to first token (TTFT) is how long prefill takes before the first token appears.

| Setup | Decode (tok/s) | TTFT at 8,192 tokens |
|---|---|---|
| 2 Macs, pipeline parallel | 15.74 | 8.4 s |
| 2 Macs, tensor parallel | 24.99 | 8.2 s |
| 4 Macs, tensor parallel | 36.73 | 4.8 s |

Going from pipeline to tensor on the same two machines is a 59% decode gain. Doubling to four Macs adds another 47%. It isn't linear scaling, because every added Mac adds more exchanges, but it keeps climbing.

{{< image "run_muse_spark_open_on_macs_mlx/muse_spark_decode_speed.webp" "Bar chart of Muse Spark Open decode speed: 15.74 tokens/s on 2 Macs with pipeline, 24.99 on 2 Macs with tensor, 36.73 on 4 Macs with tensor" >}}

*Data: Apple Machine Learning Research, October 2026.*

There is a flip side at long context. At 65,536 tokens, Apple reports that 2-Mac tensor parallelism has slower prefill than 2-Mac pipeline parallelism because of communication overhead. On four Macs at that length, using two cables per link cut TTFT from about 50.5s to 40.6s. If your use is long-document or whole-repo prompts, prefill, not decode, is where the wait is.

## Setting up the cluster

What follows is assembled from the {{< link href="https://ml-explore.github.io/mlx/build/html/usage/distributed.html" >}}MLX distributed docs{{< /link >}} and Apple's post. I haven't run it.

You need Thunderbolt 5 Macs on macOS 26.2 or later and MLX 0.30.1 or later. Each pair of Macs needs a direct cable (a fully connected mesh), and Apple used two cables per link for the 2-Mac setup. Then:

1. **Enable RDMA.** This can't be done remotely, even with sudo. Boot each Mac into Recovery, open Terminal from Utilities, run `rdma_ctl enable`, and reboot.
2. **Verify.** `ibv_devices` should list `rdma_en*` devices.
3. **Network.** Disable the Thunderbolt bridge and give each Thunderbolt connection its own local network. RDMA traffic doesn't use TCP/IP, but the docs still require this.
4. **Generate the hostfile.** The MLX helper checks the mesh and writes it:

```bash
mlx.distributed_config --verbose --hosts m3-ultra-1,m3-ultra-2 \
  --over thunderbolt --backend jaccl --auto-setup --output hostfile.json
```

The hostnames above come from the MLX docs' example. Use your own Macs' SSH names. The hosts also need to be reachable over SSH on your normal network, because `mlx.launch` starts a process on each one.

{{< image "run_muse_spark_open_on_macs_mlx/mlx_two_mac_cluster.webp" "Two Mac Studios joined by two Thunderbolt 5 cables, with a dashed SSH line from mlx.launch above them and port 8080 on Mac 1" >}}

*Two networks, two jobs.*

## Starting the model and the API

Apple's post benchmarks first. This is the tensor-parallel run for Muse Spark Open:

```bash
mlx.launch --hostfile hostfile.json --backend jaccl --env MLX_METAL_FAST_SYNCH=1 -- \
  mlx_lm.benchmark --model meta-models/Muse-Spark-Open-816B-A42B-NVFP4 -p 8192 -g 128 -b 1
```

`MLX_METAL_FAST_SYNCH=1` switches on a faster GPU-CPU sync. Apple calls it experimental and the MLX docs warn it can deadlock and leave the GPU wedged, so don't leave it on for anything you can't restart. The model downloads from Hugging Face, and the card is gated, so you have to log in and accept the Muse Model License first. The license asks you to display "Built with Muse Spark Open" and follow a usage policy.

To get an API, swap the benchmark for the server:

```bash
mlx.launch --hostfile hostfile.json --backend jaccl --env MLX_METAL_FAST_SYNCH=1 -- \
  mlx_lm.server --model meta-models/Muse-Spark-Open-816B-A42B-NVFP4 --port 8080
```

That serves an OpenAI-compatible API at `http://127.0.0.1:8080/v1`. Apple's example points OpenCode at it with this config:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "meta-models/Muse-Spark-Open-816B-A42B-NVFP4",
  "provider": {
    "mlx": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Local MLX",
      "options": { "baseURL": "http://127.0.0.1:8080/v1" },
      "models": {
        "meta-models/Muse-Spark-Open-816B-A42B-NVFP4": { "name": "Muse Spark Open 816B (MLX)" }
      }
    }
  }
}
```

Meta's model card recommends temperature 1.0, top_p 1.0, and top_k disabled, with reasoning effort at high or xhigh for hard tasks (the default is xhigh).

## Reaching the server from another network with Pinggy

The server listens on the first Mac. That's fine at your desk, but a half-terabyte cluster you can only reach from the same LAN is a shame. You may want to call it from a laptop on the road, a phone, or a cloud-hosted agent.

A tunnel fixes that without opening a router port. Run it on the Mac that serves port 8080, in a second terminal (see the {{< link href="https://pinggy.io/docs/" >}}Pinggy docs{{< /link >}} for other ways to connect):

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8080 free.pinggy.io" >}}
{{</ ssh_command >}}

Pinggy prints an `https://....a.pinggy.link` style URL. Apple's example doesn't set any authentication on `mlx_lm.server`, so as it stands, anyone with that URL could use your Macs. Add a bearer key at the tunnel:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- k:my-long-random-key
```

Now requests must carry the key. Replace the URL below with the one Pinggy printed:

```bash
curl https://abc123.a.pinggy.link/v1/chat/completions \
  -H "Authorization: Bearer my-long-random-key" \
  -H "Content-Type: application/json" \
  -d '{"model": "meta-models/Muse-Spark-Open-816B-A42B-NVFP4",
       "messages": [{"role": "user", "content": "Say hi in five words."}]}'
```

Two limits to know. A free tunnel lasts 60 minutes and gives a new URL on each start, so for anything longer you want a Pro token and a persistent subdomain from the {{< link href="https://dashboard.pinggy.io" >}}Pinggy dashboard{{< /link >}}. And a reply at 25 tokens/s streams slowly through any tunnel; ask your client to stream, or long answers will sit silent until finished.

{{< image "run_muse_spark_open_on_macs_mlx/muse_spark_pinggy_request.webp" "Sequence diagram of a request from a laptop through the Pinggy server and SSH connection to Mac 1, which splits the work with Mac 2 and streams the reply back" >}}

*The request goes in through the tunnel, and the Macs split the work over Thunderbolt.*

## What I'd check before buying two Mac Studios

- **Quality for your task.** Meta's card reports 89.2 on MCP-Atlas and 80.4 on OSWorld Verified, and a 39 on the Artificial Analysis Intelligence Index, which is below some comparison models. Agentic coding looks like its strength, not general knowledge.
- **The wait at long context.** 8.2s to first token at 8k is OK. 40 to 50s at 65k is something you'll feel in every agent turn.
- **Hosted options.** The model is also on OpenRouter, Together AI, Fireworks AI, Groq, Baseten, Modal and Nebius. If you just want to try it, an API key is far cheaper than hardware.
- **Stability.** The fast-sync flag is experimental, and a user in the MLX issue tracker has reported crashes running `mlx.launch --backend jaccl` outside an Apple-provisioned app. Expect rough edges.

## Conclusion

Muse Spark Open on two Mac Studios is the first time I've seen a model this size credibly run on hardware you can buy without a purchase order. The mechanism is the interesting part: tensor parallelism over Thunderbolt 5 RDMA is what turns two machines into one fast one. If you have the Macs, start with `mlx.distributed_config` and the benchmark command, check your own tokens/s against Apple's table, and only then put a tunnel in front of the server. If you don't, try the hosted API first and decide whether the quality earns the hardware.
