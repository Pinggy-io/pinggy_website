---
title: "Running a 0.5B LLM on Seven ESP32-S3 Boards"
description: "How an open-source cluster of seven ESP32-S3 microcontrollers splits a Qwen2-0.5B model into 1.58-bit ternary layers, why it fits in 16 MB of flash per board, and why it is slow."
date: 2026-09-29T10:00:00+05:30
lastmod: 2026-09-29T10:00:00+05:30
draft: false
tags: ["ESP32", "BitNet", "edge AI", "LLM"]
og_image: "images/esp32_s3_bitnet_llm_cluster/esp32_s3_bitnet_llm_cluster_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIlJ1bm5pbmcgYSAwLjVCIExMTSBvbiBTZXZlbiBFU1AzMi1TMyBCb2FyZHMiLAogICJkZXNjcmlwdGlvbiI6ICJIb3cgYW4gb3Blbi1zb3VyY2UgY2x1c3RlciBvZiBzZXZlbiBFU1AzMi1TMyBtaWNyb2NvbnRyb2xsZXJzIHNwbGl0cyBhIFF3ZW4yLTAuNUIgbW9kZWwgaW50byAxLjU4LWJpdCB0ZXJuYXJ5IGxheWVycywgd2h5IGl0IGZpdHMgaW4gMTYgTUIgb2YgZmxhc2ggcGVyIGJvYXJkLCBhbmQgd2h5IGl0IGlzIHNsb3cuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2VzcDMyX3MzX2JpdG5ldF9sbG1fY2x1c3Rlci9lc3AzMl9zM19iaXRuZXRfbGxtX2NsdXN0ZXJfYmFubmVyLndlYnAiLAogICJhdXRob3IiOiAgICB7ICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLCAibmFtZSI6ICJQaW5nZ3kiIH0sCiAgInB1Ymxpc2hlciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIsICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8iIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNi0wOS0yOVQxMDowMDowMCswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTA5LTI5VDEwOjAwOjAwKzA1OjMwIiwKICAibWFpbkVudGl0eU9mUGFnZSI6IHsgIkB0eXBlIjogIldlYlBhZ2UiLCAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2Jsb2cvZXNwMzJfczNfYml0bmV0X2xsbV9jbHVzdGVyLyIgfSwKICAiYXJ0aWNsZVNlY3Rpb24iOiAiRWRnZSBBSSIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiRVNQMzItUzMgTExNLCBCaXROZXQgYjEuNTgsIDEuNTgtYml0IHF1YW50aXphdGlvbiwgUXdlbjItMC41QiwgbWljcm9jb250cm9sbGVyIExMTSBjbHVzdGVyLCBwaXBlbGluZSBpbmZlcmVuY2UiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiQml0TmV0IGIxLjU4IiwgImRlc2NyaXB0aW9uIjogIkxMTSB3ZWlnaHRzIHJlc3RyaWN0ZWQgdG8gLTEsIDAgYW5kICsxLCBhYm91dCAxLjU4IGJpdHMgZWFjaC4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIkVTUDMyLVMzIiwgImRlc2NyaXB0aW9uIjogIkVzcHJlc3NpZiBkdWFsLWNvcmUgWHRlbnNhIExYNyBtaWNyb2NvbnRyb2xsZXIgd2l0aCA1MTIgS0IgU1JBTS4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIlBpcGVsaW5lIGluZmVyZW5jZSIsICJkZXNjcmlwdGlvbiI6ICJFYWNoIGJvYXJkIHJ1bnMgYSBzbGljZSBvZiBsYXllcnMgYW5kIHBhc3NlcyB0aGUgaGlkZGVuIHN0YXRlIHRvIHRoZSBuZXh0LiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiUXdlbjItMC41QiIsICJkZXNjcmlwdGlvbiI6ICIyNC1sYXllciwgODk2LXdpZGUgb3BlbiBtb2RlbCBzcGxpdCBhY3Jvc3MgdGhlIGNsdXN0ZXIuIiB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "esp32_s3_bitnet_llm_cluster/esp32_s3_bitnet_llm_cluster_banner.webp" "A chain of a master board and six ESP32-S3 nodes, with the figures 0.5B parameters, 15.3 MB flash per node and about 1.5 W" >}}
A GitHub project called ESP32s3-LLM-Cluster runs a 0.5B-parameter Qwen2 model on seven ESP32-S3 microcontrollers wired together with SPI. One board handles the tokenizer and embeddings. The other six each hold four transformer layers, and every weight in those layers is one of `-1`, `0` or `+1`. The whole cluster draws about 1.5 W. It is also slow, and the model it ships is only partly trained, so treat it as a proof that the pipeline works, not as something to chat with.

What makes it worth reading is the arithmetic. Each layer packs into about 3.82 MB, four layers fill a 16 MB flash chip, and the only thing crossing the wires between boards is one 896-value vector per token.

{{% tldr %}}
1. **Ternary weights (1.58-bit) shrink each layer to about 3.82 MB**, so four layers (about 15.3 MB) fit in one board's 16 MB flash.
2. **The boards form a pipeline, not a parallel machine.** A token visits the master, then nodes 1 to 6 in order, then returns to the master for sampling.
3. **Only the hidden state moves between boards**: 896 FP32 values, about 3.5 KB per hop, so the SPI links are not the limit.
4. **Speed is the cost.** The README reports about 1.3 s per node, so I estimate several seconds per token, and adding boards adds latency linearly.
5. **The shipped weights are barely trained.** The author says the training script stops around a loss of 8.0 and the model emits random tokens.
{{% /tldr %}}

## What the cluster is made of

The project is {{< link href="https://github.com/Low-Zi-Hong/ESP32s3-LLM-Cluster" >}}Low-Zi-Hong/ESP32s3-LLM-Cluster{{< /link >}}, MIT licensed. The hardware is seven ESP32-S3 boards: one master and six compute nodes.

The ESP32-S3 is Espressif's dual-core Xtensa LX7 chip running at up to 240 MHz, with 512 KB of internal SRAM. It supports external flash and PSRAM and has vector instructions meant for neural-network work, according to the {{< link href="https://www.espressif.com/en/products/socs/esp32-s3" >}}Espressif product page{{< /link >}}. The author uses 16 MB of flash per board, plus PSRAM on the compute nodes for the KV cache.

The model is Qwen2-0.5B: 24 transformer layers, hidden size 896, an MLP width of 4,864, and 14 query heads sharing 2 key/value heads. The context window is capped at 512 tokens, because the KV cache lives in each node's PSRAM.

## Why 1.58-bit weights are the whole trick

A model is stored as a pile of weight matrices. At FP16, Qwen2-0.5B needs about 1 GB, which is far more than seven microcontrollers hold. BitNet b1.58 restricts every weight to three values, `-1`, `0` and `+1`. Three states carry log2(3), about 1.58 bits of information, which is where the name comes from. Microsoft's {{< link href="https://github.com/microsoft/BitNet" >}}BitNet repo{{< /link >}} has the papers and the CPU and GPU inference kernels.

On the ESP32 the ternary weights are packed 4 per byte (2 bits each). I checked the README's sizes against the model shape. One Qwen2-0.5B layer has about 14.9 million weights: roughly 1.8 million in attention (Q, K, V and output projections) and 13.1 million in the gate, up and down projections of the MLP. At 2 bits each that is about 3.7 MB, which matches the README's 3.82 MB once the FP16 scales and norm weights are added. Four layers come to about 15.3 MB, which is why each node needs a 16 MB partition and nothing more.

The master does the same trick with a different format. It prunes the vocabulary from 151K tokens to 32K, then stores the embedding table as INT4, about 14 MB. The README notes 32K is the most that fits in 16 MB of flash. The output head is tied to those same embeddings, so no second table is needed.

There is one catch, and the author is upfront about it. You cannot just round a normal model's weights to three values. The repo's `qat_158.py` does quantization-aware training to adapt the model, and the workflow notes say it only trains partially, stops at a loss around 8.0, and the result "will be just spitting out random tokens". The hardware pipeline is the finished part, and the model quality is not.

{{< image "esp32_s3_bitnet_llm_cluster/esp32_llm_pipeline.webp" "Six boxes in a row: the master board (tokenizer, embedding), nodes 1 to 6 holding layers 0 to 23, and the master again for the final norm and LM head, joined by arrows" >}}

*Source for the layout: {{< link href="https://github.com/Low-Zi-Hong/ESP32s3-LLM-Cluster" >}}Low-Zi-Hong/ESP32s3-LLM-Cluster{{< /link >}} README, September 2026.*
## How a token travels through the chain

The boards are not splitting each matrix multiplication between them. They form a pipeline, and a single token visits every board in order:

1. The master tokenizes the prompt (a BPE tokenizer running on the ESP32) and looks up the token's INT4 embedding.
2. It sends the resulting hidden state, 896 FP32 values, to node 1 over SPI.
3. Node 1 runs layers 0 to 3: RMSNorm, ternary attention with RoPE and a PSRAM-backed KV cache, then the ternary MLP. It forwards the new hidden state to node 2.
4. Nodes 2 to 6 repeat this for layers 4 to 23.
5. Node 6 returns the vector to the master, which applies the final RMSNorm, the LM head and greedy (argmax) sampling to pick the next token.

The wiring is a daisy chain. Each board has two SPI channels: channel A transmits (chip select on GPIO 4, MOSI on 5, clock on 7) and channel B receives (GPIO 15, 16 and 18). Node N's channel A goes to node N+1's channel B. A separate reset and ready loop lets the master reset every board on startup and learn when the last one is up. All boards must share ground, and the RST pin has to be left floating while flashing.

Order matters more than anything. Nothing checks that the board in position 3 holds layers 8 to 11. The README says a wrong order gives no error, only garbage output.

## Why it is slow, and why more boards will not help

The README gives two useful measurements. Idle, the cluster draws 5 V at 0.23 A, about 1.17 W. While generating it draws about 0.3 A, roughly 1.5 W. (The file writes "0.5V" for the inference voltage, which looks like a typo for 5 V.)

For speed it says each node spends 1.3 s on inference. There are six nodes in series, so my estimate is around 8 s per token. That is my arithmetic from the README, not a number I measured, and the repo has no tokens-per-second table. The `/bench` command in the master's console prints a benchmark after each answer if you want the real figure.

Why so slow? My reading, not the author's: each token needs every weight in a node's four layers, all 15.3 MB of them. They sit in external flash and the chip has only 512 KB of SRAM, so nearly all the time is spent streaming weights, not doing arithmetic. Compare that with the 3.5 KB hidden state that goes over SPI. The link carries about 4,000 times less data than the flash reads.

{{< image "esp32_s3_bitnet_llm_cluster/esp32_llm_bytes_moved.webp" "Two horizontal bars on one scale: a full-width bar for about 15.3 MB read from flash and a hairline for about 3.5 KB sent over SPI" >}}

*Figures from the project's workflow.md model table; the SPI size is 896 x 4 bytes.*
The same reasoning explains the scaling claim in the README: with more boards you could host a bigger model, with 100 boards holding 400 layers. Each token still has to pass every board in turn, so latency grows linearly with model depth. More boards buy capacity, not speed. It is the general rule for LLM inference: memory bandwidth, not arithmetic, usually decides speed.

## What you would do with it, and what you would skip

On quality: nothing yet. With the shipped training the output is noise, and the troubleshooting section suggests feeding it text that matches its training data to confirm the pipeline at least reproduces something.

If you want a useful small model on cheap hardware, a single-board computer or an ordinary PC is a better tool. For running BitNet models at a usable speed, Microsoft's bitnet.cpp targets CPUs and GPUs, and its README reports a 100B BitNet b1.58 model on a single CPU at 5 to 7 tokens per second. For the general case of running small models on modest machines, see our posts on {{< link href="/blog/small_llms_that_fit_in_8gb_memory/" >}}small LLMs that fit in 8GB{{< /link >}} and {{< link href="/blog/best_hardware_for_self_hosting_local_llms/" >}}hardware for self-hosting LLMs{{< /link >}}.

What the project does show is how far the memory budget bends. A 0.5B model in seven parts, on chips that cost a few dollars each, at 1.5 W, is a working existence proof. If the training script is finished, or someone swaps in a properly trained BitNet checkpoint, the hardware side is already done.

## Conclusion

To check the claims yourself, read `workflow.md` in the repo, which lists the wiring and the model table, then redo the flash arithmetic: 3 x 896 x 4,864 weights in the MLP plus the attention projections, at 2 bits each, should land near 3.7 MB per layer. If you build one, type `/bench` in the master's console and run a prompt; the benchmark it prints is the tokens-per-second number this post could not give you.
