---
title: "Running Muse Spark Open (816B) on Two Mac Studios: Memory Math, MLX Setup and Real Speeds"
description: "Meta's open-weight Muse Spark Open has 816B parameters and needs about 493GB at 4-bit, so it takes two M5 Ultra Mac Studios linked over Thunderbolt 5. How the split works, measured tokens per second, the setup, and how to reach it remotely."
date: 2026-10-15T20:00:00+05:30
lastmod: 2026-10-15T20:00:00+05:30
draft: false
tags: ["Muse Spark Open", "Apple Silicon", "local LLM", "self-hosted AI", "open source AI"]
og_image: "images/muse_spark_open_two_mac_studios/muse_spark_open_two_mac_studios_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlJ1bm5pbmcgTXVzZSBTcGFyayBPcGVuICg4MTZCKSBvbiBUd28gTWFjIFN0dWRpb3M6IE1lbW9yeSBNYXRoLCBNTFggU2V0dXAgYW5kIFJlYWwgU3BlZWRzIiwKICAiZGVzY3JpcHRpb24iOiAiTWV0YSdzIG9wZW4td2VpZ2h0IE11c2UgU3BhcmsgT3BlbiBoYXMgODE2QiBwYXJhbWV0ZXJzIGFuZCBuZWVkcyBhYm91dCA0OTNHQiBhdCA0LWJpdCwgc28gaXQgdGFrZXMgdHdvIE01IFVsdHJhIE1hYyBTdHVkaW9zIGxpbmtlZCBvdmVyIFRodW5kZXJib2x0IDUuIEhvdyB0aGUgc3BsaXQgd29ya3MsIG1lYXN1cmVkIHRva2VucyBwZXIgc2Vjb25kLCB0aGUgc2V0dXAsIGFuZCBob3cgdG8gcmVhY2ggaXQgcmVtb3RlbHkuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL211c2Vfc3Bhcmtfb3Blbl90d29fbWFjX3N0dWRpb3MvbXVzZV9zcGFya19vcGVuX3R3b19tYWNfc3R1ZGlvc19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTE1VDIwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMTVUMjA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy9tdXNlX3NwYXJrX29wZW5fdHdvX21hY19zdHVkaW9zLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiTG9jYWwgQUkiLAogICJwcm9maWNpZW5jeUxldmVsIjogIkludGVybWVkaWF0ZSIsCiAgImtleXdvcmRzIjogIk11c2UgU3BhcmsgT3BlbiwgcnVuIE11c2UgU3BhcmsgT3BlbiBsb2NhbGx5LCA4MTZCIG1vZGVsIE1hYyBTdHVkaW8sIE1MWCBkaXN0cmlidXRlZCBpbmZlcmVuY2UsIEpBQ0NMIFJETUEgVGh1bmRlcmJvbHQgNSwgTTUgVWx0cmEgTWFjIFN0dWRpbyBMTE0sIG1seF9sbS5zZXJ2ZXIiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTXVzZSBTcGFyayBPcGVuIiwgImRlc2NyaXB0aW9uIjogIk1ldGEncyA4MTZCLXBhcmFtZXRlciBtaXh0dXJlLW9mLWV4cGVydHMgb3Blbi13ZWlnaHQgbW9kZWwgd2l0aCA0MkIgYWN0aXZlIHBhcmFtZXRlcnMuIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJUZW5zb3IgcGFyYWxsZWxpc20iLCAiZGVzY3JpcHRpb24iOiAiU3BsaXR0aW5nIGV2ZXJ5IGxheWVyIGFjcm9zcyBtYWNoaW5lcyBzbyBlYWNoIHRva2VuIHVzZXMgYWxsIG9mIHRoZW0uIiB9LAogICAgeyAiQHR5cGUiOiAiVGhpbmciLCAibmFtZSI6ICJNTFggSkFDQ0wiLCAiZGVzY3JpcHRpb24iOiAiTUxYIGRpc3RyaWJ1dGVkIGJhY2tlbmQgdGhhdCB1c2VzIFJETUEgb3ZlciBUaHVuZGVyYm9sdCA1IGZvciBsb3ctbGF0ZW5jeSBjb21tdW5pY2F0aW9uIGJldHdlZW4gTWFjcy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBpbmdneSB0dW5uZWwiLCAiZGVzY3JpcHRpb24iOiAiQW4gU1NILWJhc2VkIHR1bm5lbCB0aGF0IGV4cG9zZXMgYSBsb2NhbCBPcGVuQUktY29tcGF0aWJsZSBzZXJ2ZXIgb3ZlciBIVFRQUy4iIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "muse_spark_open_two_mac_studios/muse_spark_open_two_mac_studios_banner.webp" "Headline '816B on two Macs' above two Mac Studio boxes joined by two Thunderbolt 5 links and a panel showing 24.99 tokens per second" >}}
Muse Spark Open, the open-weight model Meta released on October 15, 2026, has 816B parameters, and the 4-bit build is about 493GB. That is just too big for a single 512GB Mac Studio once macOS and the KV cache take their share, so Meta and Apple's recipe is two M5 Ultra Mac Studios joined by Thunderbolt 5 and run as one machine through MLX. Apple's own numbers: 24.99 tokens per second on two machines, 36.73 on four.

I have not run this myself. It needs two machines that start at $5,499 each, and the 512GB configuration is not even on sale yet. What follows is the memory math, what Apple measured, the setup as the MLX docs describe it, and the one part you can test on a normal laptop today: reaching the server from outside the room.

{{< llm-context >}}To use Muse Spark Open from anywhere with Pinggy - on the Mac that launched the cluster run `mlx.launch --hostfile hostfile.json --backend jaccl -- mlx_lm.server --model meta-models/Muse-Spark-Open-816B-A42B-NVFP4 --port 8080` (serves an OpenAI-compatible API on port 8080), then in a new terminal run `ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- k:your-secret-key` to get a public HTTPS URL protected by a bearer key.{{< /llm-context >}}

{{% tldr %}}
1. **It is a mixture-of-experts model**: 816B total parameters but only **42B active** per token, with a 1M-token context window. Memory decides what you can load; bandwidth decides how fast it talks.
2. **The 4-bit NVFP4 build is about 493GB**, so it needs two 512GB M5 Ultra Mac Studios. The BF16 original would need more than 1.6TB.
3. **Tensor parallelism beats pipeline parallelism for decoding**: Apple measured **15.74 tok/s** with a pipeline split and **24.99 tok/s** with a tensor split on the same two Macs, because RDMA over Thunderbolt 5 makes the many small syncs per token cheap.
4. **The license is gated**: you accept the Muse Model License on Hugging Face, products must show "Built with Muse Spark Open", and there is a revenue threshold for hosting it as a service.
5. **The server speaks the OpenAI API**, so a Pinggy tunnel with a bearer key is enough to use it from another machine. Do not skip the key.
{{% /tldr %}}

## Why 816B parameters need two machines

Start with the arithmetic. Meta's {{< link href="https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4" >}}model card{{< /link >}} describes a mixture-of-experts transformer: 62 layers, 256 experts per MoE layer with top-8 routing, 816B parameters in total and 42B active for any given token. NVFP4 stores weights at roughly 4 bits plus a scale factor per small block. Apple's {{< link href="https://machinelearning.apple.com/research/mlx-distributed-inference" >}}MLX distributed inference post{{< /link >}} puts the quantized model at about 493GB and the BF16 original at over 1.6TB.

A top-spec M5 Ultra Mac Studio has 512GB of unified memory, but not all of it is usable by the GPU, and the context cache needs room too. We went through that in {{< link href="/blog/self_hosting_llms_on_512gb_m5_ultra_mac_studio/" >}}the 512GB Mac Studio post{{< /link >}}. 493GB of weights on one box leaves almost nothing, so the model goes across two.

Bandwidth is the other half. Each token only reads the 42B active parameters. At about 4.5 bits per weight that is roughly 24GB per token (my back-of-envelope, not a vendor figure). One M5 Ultra reads 1.2TB/s, so a single machine's ceiling would be around 50 tokens per second if the rest were free. It never is, and splitting across machines adds communication, which is the real subject of the next section.

{{< image "muse_spark_open_two_mac_studios/muse_spark_open_memory_fit.webp" "Bar chart comparing one Mac Studio at 512GB and two at 1,024GB with Muse Spark Open at 493GB in NVFP4 and over 1,600GB in BF16" >}}

*Data: Apple MLX research post and Meta's Muse Spark Open announcement, October 2026.*
## Pipeline or tensor: how two Macs share one model

MLX offers two ways to split a model across machines, and the choice changes the numbers a lot.

**Pipeline parallelism** gives each Mac a slice of the layers. Machine 1 runs layers 1 to 31, hands the activations to machine 2, which runs 32 to 62. Only one machine is busy at a time while decoding, so decode speed looks like a single machine's. It helps prefill, because MLX pipelines 8,192-token chunks so both machines work at once.

**Tensor parallelism** splits every layer across both machines. Each token needs many small exchanges, so latency matters more than bandwidth. That is why the setup depends on macOS 26.2's low-latency RDMA driver over Thunderbolt 5 and the `jaccl` backend in MLX 0.30.1 or later. Over ordinary TCP the small messages would eat the gain.

Apple's published decode speeds for Muse Spark Open (128 generated tokens, batch size 1):

| Setup | Decode speed | Time to first token |
|---|---|---|
| 2x M5 Ultra, pipeline | 15.74 tok/s | 8.4 s |
| 2x M5 Ultra, tensor | 24.99 tok/s | 8.2 s |
| 4x M5 Ultra, tensor | 36.73 tok/s | 4.8 s |

Two Macs with tensor parallelism are about 59% faster at decoding than the pipeline split. Four Macs add another 47% on top, at twice the hardware, which is not a great trade for most people. Each pair of machines is linked by two Thunderbolt 5 cables, which Apple says doubles link bandwidth.

{{< image "muse_spark_open_two_mac_studios/muse_spark_open_decode_speed.webp" "Bar chart of Muse Spark Open decode speed: 15.74 tokens per second with a two-Mac pipeline split, 24.99 with two-Mac tensor split, 36.73 with four Macs" >}}

*Data: Apple Machine Learning Research, MLX distributed inference, 2026. Batch size 1, so not a throughput figure.*
Two caveats from Apple's post. Tensor parallelism on two machines lags the pipeline split for prefill at 65,536 tokens, so a very long first prompt can be slower. And `MLX_METAL_FAST_SYNCH=1`, which the commands below set, is marked experimental. Batch size 1 also means these are single-user speeds. Several agents hitting the server at once will see less each.

## Setting up the two-Mac cluster

This follows the MLX {{< link href="https://ml-explore.github.io/mlx/build/html/usage/distributed.html" >}}distributed docs{{< /link >}} and Apple's post. I did not run it, so check each step against those pages.

1. **Hardware.** Two Thunderbolt 5 Macs (M5 Ultra Mac Studios here), on macOS 26.2 or later, with a direct Thunderbolt cable between them. Use two cables if you can. JACCL only supports fully connected topologies, and the Thunderbolt bridge must be disabled.
2. **Enable RDMA.** This cannot be done over SSH, even with sudo. Boot each Mac into Recovery, open Terminal from Utilities, run `rdma_ctl enable`, and reboot. Afterwards `ibv_devices` should list `rdma_en*` devices.
3. **Install MLX** (0.30.1 or later) and `mlx-lm` on both machines, with the same Python environment path, because the launcher starts processes over SSH.
4. **Write the hostfile.** `mlx.distributed_config --over thunderbolt --backend jaccl --auto-setup --output hostfile.json --hosts mac-1,mac-2` will detect the cabling and generate it. By hand it is a JSON list, one entry per node in rank order. With two cables between two Macs it looks like this (device names are examples):

```json
[
  { "ssh": "mac-1", "ips": ["192.168.1.10"], "rdma": [null, ["rdma_en2", "rdma_en3"]] },
  { "ssh": "mac-2", "ips": [], "rdma": [["rdma_en2", "rdma_en3"], null] }
]
```

5. **Benchmark first.** This is Apple's command for the tensor split (add `--pipeline` for the pipeline one):

```bash
mlx.launch --hostfile hostfile.json --backend jaccl --env MLX_METAL_FAST_SYNCH=1 -- \
  mlx_lm.benchmark --model meta-models/Muse-Spark-Open-816B-A42B-NVFP4 -p 8192 -g 128 -b 1
```

The first run downloads about 493GB from Hugging Face, so do that over a wired connection, and accept the license on the model page first.

{{< image "muse_spark_open_two_mac_studios/two_mac_studio_cluster.webp" "Two Mac Studios joined by two Thunderbolt 5 RDMA cables, each holding half of every layer, with mlx_lm.server on port 8080 serving an editor or agent" >}}

*Tensor parallelism: both Macs work on every layer of every token.*
## Serving it as an OpenAI-compatible API

Apple's post serves the same model with the same launcher, swapping the benchmark for the server:

```bash
mlx.launch --hostfile hostfile.json --backend jaccl --env MLX_METAL_FAST_SYNCH=1 -- \
  mlx_lm.server --model meta-models/Muse-Spark-Open-816B-A42B-NVFP4 --port 8080
```

Their example points OpenCode at `http://127.0.0.1:8080/v1` as an OpenAI-compatible provider, so on the launching Mac the API is at that address. A quick check from the same Mac:

```bash
curl http://127.0.0.1:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"meta-models/Muse-Spark-Open-816B-A42B-NVFP4","messages":[{"role":"user","content":"Say hi"}]}'
```

The model card recommends temperature 1.0, top-p 1.0 and top-k disabled, with reasoning effort at `high` or `xhigh` for coding and agent work (`xhigh` is the default). Higher effort means more thinking tokens, and at 25 tokens per second that is minutes, not seconds.

## Reaching the cluster from your laptop with Pinggy

The server listens on loopback of a Mac Studio that sits behind a home or office router. If you want to use it from a laptop on another network, from your phone, or from a teammate's agent, a tunnel is the shortest path, with no router changes.

On the Mac running the server, in a second terminal:

```bash
ssh -p 443 -R0:localhost:8080 free.pinggy.io -T -- k:your-secret-key
```

Pinggy prints a public HTTPS URL like `https://abc123.a.free.pinggy.link`. The `k:` option makes Pinggy reject any request that does not carry `Authorization: Bearer your-secret-key`, which is the header OpenAI-compatible clients already send. Then, from anywhere:

```bash
curl https://abc123.a.free.pinggy.link/v1/models -H "Authorization: Bearer your-secret-key"
```

In OpenCode, Continue.dev or the OpenAI SDK, set the base URL to that address plus `/v1` and the key to `your-secret-key`. The flow is: your laptop calls the Pinggy URL -> Pinggy forwards it down the SSH connection the Mac opened -> the Mac hands it to `mlx_lm.server` on port 8080.

{{< image "muse_spark_open_two_mac_studios/muse_spark_pinggy_request.webp" "Sequence diagram of a laptop request with a bearer key passing through Pinggy and down the SSH connection the Mac Studio opened to mlx_lm.server on port 8080" >}}

*The key is checked at the Pinggy edge before anything reaches the cluster.*
Two practical notes. A free tunnel URL changes when you reconnect, and a long reasoning response can run for minutes, so a paid persistent subdomain and the Pinggy CLI (which reconnects on its own) suit an always-on setup better. And never run this without `k:`: an open endpoint in front of a 493GB model is a very expensive free API for whoever finds it. For more on the pattern, see {{< link href="/blog/omlx_local_llm_server_pinggy/" >}}our oMLX server post{{< /link >}} and {{< link href="/blog/forward_ollama_port_11434_online_access/" >}}forwarding the Ollama port{{< /link >}}.

## What the license actually asks

The weights are gated on Hugging Face: you sign in and submit your legal name, date of birth and organization. The Muse Model License (dated October 15, 2026) then says, among other things:

- Products built on it must prominently display "Built with Muse Spark Open".
- Fine-tunes and distillations are derivatives and fall under the same license.
- Offering it as a service above $20M in trailing 12-month gross revenue requires notifying Meta and signing a separate agreement.
- Users must be 18 or older, and Meta claims no ownership of outputs.

For a developer running it locally this is mostly the attribution line. If you plan to host it for others, read the full text first.

## Where this setup is the wrong answer

- **Cost.** Two top-spec Mac Studios is a lot of money for 25 tokens per second. Meta lists hosted API access through Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter and Together AI, and for light use that is far cheaper.
- **Vendor numbers only.** Meta's model card lists safety results but no general capability benchmarks, and the speeds above are Apple's, at batch size 1. Treat claims like "most capable US open-weight model" as Meta's, until independent evaluations show up.
- **Setup friction.** RDMA needs a trip to Recovery mode on each machine, matched software versions and direct cabling between every pair.
- **Smaller models may do the job.** For many coding tasks, a model that fits on one GPU is simpler to run. We compare those in {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" >}}the best self-hosted LLMs for coding{{< /link >}}.

## Conclusion

Muse Spark Open is the first model of this size with an official recipe for a desk-sized setup, and the recipe is mostly one idea: split every layer across two Macs and use RDMA so the splitting is cheap. If you have the hardware, run the `mlx_lm.benchmark` command above and compare it with Apple's 24.99 tok/s. If you do not, rent it from one of the hosted providers first, and put it behind a Pinggy tunnel with a bearer key whenever you serve it from your own machine.
