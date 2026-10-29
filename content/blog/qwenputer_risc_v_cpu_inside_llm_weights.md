---
title: "Qwenputer: A RISC-V CPU Compiled Into an LLM's Weights"
description: "Qwenputer puts a working 32-bit RISC-V CPU inside Qwen3.5-4B by using Gated DeltaNet state as RAM. How it works, the numbers, and what it costs."
date: 2026-10-29T11:00:00+05:30
lastmod: 2026-10-29T11:00:00+05:30
draft: false
tags: ["Qwenputer", "AI Models", "local LLM", "open source AI", "Qwen3.5"]
og_image: "images/qwenputer_risc_v_cpu_inside_llm_weights/qwenputer_risc_v_cpu_inside_llm_weights_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogIkBjb250ZXh0IjogImh0dHBzOi8vc2NoZW1hLm9yZyIsCiAiQHR5cGUiOiAiVGVjaEFydGljbGUiLAogImhlYWRsaW5lIjogIlF3ZW5wdXRlcjogQSBSSVNDLVYgQ1BVIENvbXBpbGVkIEludG8gYW4gTExNJ3MgV2VpZ2h0cyIsCiAiZGVzY3JpcHRpb24iOiAiUXdlbnB1dGVyIHB1dHMgYSB3b3JraW5nIDMyLWJpdCBSSVNDLVYgQ1BVIGluc2lkZSBRd2VuMy41LTRCIGJ5IHVzaW5nIEdhdGVkIERlbHRhTmV0IHN0YXRlIGFzIFJBTS4gSG93IGl0IHdvcmtzLCB0aGUgbnVtYmVycywgYW5kIHdoYXQgaXQgY29zdHMuIiwKICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvcXdlbnB1dGVyX3Jpc2Nfdl9jcHVfaW5zaWRlX2xsbV93ZWlnaHRzL3F3ZW5wdXRlcl9yaXNjX3ZfY3B1X2luc2lkZV9sbG1fd2VpZ2h0c19iYW5uZXIud2VicCIsCiAiYXV0aG9yIjogewogICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICJuYW1lIjogIlBpbmdneSIKIH0sCiAicHVibGlzaGVyIjogewogICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICJuYW1lIjogIlBpbmdneSIsCiAgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIKIH0sCiAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTI5VDExOjAwOjAwKzA1OjMwIiwKICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMC0yOVQxMTowMDowMCswNTozMCIsCiAibWFpbkVudGl0eU9mUGFnZSI6IHsKICAiQHR5cGUiOiAiV2ViUGFnZSIsCiAgIkBpZCI6ICJodHRwczovL3BpbmdneS5pby9ibG9nL3F3ZW5wdXRlcl9yaXNjX3ZfY3B1X2luc2lkZV9sbG1fd2VpZ2h0cy8iCiB9LAogImFydGljbGVTZWN0aW9uIjogIkFJIE1vZGVscyIsCiAicHJvZmljaWVuY3lMZXZlbCI6ICJJbnRlcm1lZGlhdGUiLAogImtleXdvcmRzIjogIlF3ZW5wdXRlciwgUklTQy1WIENQVSBpbiBMTE0gd2VpZ2h0cywgR2F0ZWQgRGVsdGFOZXQsIFF3ZW4zLjUtNEIsIGxpbmVhciBhdHRlbnRpb24gbWVtb3J5IiwKICJhYm91dCI6IFsKICB7CiAgICJAdHlwZSI6ICJUaGluZyIsCiAgICJuYW1lIjogIkdhdGVkIERlbHRhTmV0IiwKICAgImRlc2NyaXB0aW9uIjogIkEgbGluZWFyLWF0dGVudGlvbiBsYXllciB3aXRoIGEgZml4ZWQtc2l6ZSBzdGF0ZSB1cGRhdGVkIGJ5IHRoZSBkZWx0YSBydWxlLiIKICB9LAogIHsKICAgIkB0eXBlIjogIlRoaW5nIiwKICAgIm5hbWUiOiAiUklTQy1WIiwKICAgImRlc2NyaXB0aW9uIjogIk9wZW4gMzItYml0IGluc3RydWN0aW9uIHNldCBpbXBsZW1lbnRlZCBoZXJlIGFzIFJWMzJJTS4iCiAgfSwKICB7CiAgICJAdHlwZSI6ICJUaGluZyIsCiAgICJuYW1lIjogIlF3ZW4zLjUtNEIiLAogICAiZGVzY3JpcHRpb24iOiAiSHlicmlkIGxpbmVhciBhbmQgZnVsbCBhdHRlbnRpb24gb3Blbi13ZWlnaHRzIG1vZGVsLiIKICB9CiBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "qwenputer_risc_v_cpu_inside_llm_weights/qwenputer_risc_v_cpu_inside_llm_weights_banner.webp" "A multiplication prompt flows through 11 RISC-V CPU layers and 32 Qwen layers and returns the exact answer 121932631112635269" >}}

`123456789 * 987654321` is `121932631112635269`, and a 4B-parameter model can now produce that answer without a calculator tool, a Python sandbox, or any learned arithmetic. It runs a 32-bit RISC-V program, one instruction at a time, inside its own forward pass.

The project is called <a href="https://github.com/divagr18/qwenputer" target="_blank">Qwenputer</a>, published in October 2026 by Divyansh Agrawal. It takes Qwen3.5-4B and adds 11 layers in front of the original ones. Those layers were not trained. A compiler wrote their weights directly from a circuit description of a CPU, and the trick that makes it work is a property of the linear-attention layers Qwen3.5 already has.

{{% tldr %}}
1. **The RAM is a Gated DeltaNet state.** Set the forget gate to 1 and the write strength to 1, use one-hot keys, and each write overwrites exactly one slot while each read returns it exactly.
2. **The CPU is compiled, not trained.** Attention heads do lookups, feed-forward units do arithmetic, DeltaNet heads hold registers, memory and the program counter. Qwen's own weights are untouched.
3. **It implements RV32IM** (plus the Zba extension and a small bignum unit), passes the official `riscv-tests`, and matched a reference machine on about 230,000 output positions with zero mismatches.
4. **Accuracy on big-number arithmetic jumps** (`mul_big` from 55.0% to 97.5% on 40 problems), but each instruction costs several decoded tokens, and the checkpoint is 18.8 GB.
5. **You need a CUDA GPU and a small driver** (`RvChat`) to see it work. A plain `generate()` call does not boot the CPU yet.
{{% /tldr %}}

## Why a linear-attention state can act like RAM

Qwen3.5 is a hybrid model: in the layout it inherited from Qwen3-Next, three out of every four layers use Gated DeltaNet, a form of linear attention, and one in four uses ordinary gated attention. (Details come from third-party write-ups such as <a href="https://huggingface.co/blog/mlabonne/qwen35" target="_blank">this overview of the Qwen3.5 architecture</a>; layer counts differ per model size, so check the model card for the one you use.)

A normal attention layer keeps a KV cache that grows with every token. A DeltaNet layer keeps a fixed-size matrix per head instead. For each new token it updates that matrix with the delta rule, from the <a href="https://arxiv.org/abs/2412.06464" target="_blank">Gated Delta Networks paper</a>:

```text
S_t = S_(t-1) * alpha_t * (I - beta_t * k_t * k_t^T) + beta_t * v_t * k_t^T
```

`alpha` is the forget gate, `beta` is the write strength, `k` is the key and `v` is the value. In normal use these are all learned, soft quantities, and the state is a blurry summary of the past.

Now pick the extreme values. With `alpha = 1` nothing fades. With `beta = 1` and a one-hot key (`k` is all zeros except a single 1), the term `(I - k * k^T)` erases exactly one slot of the state and `v * k^T` writes the new value in its place. A one-hot query then reads that slot back, untouched by any other. That is a memory with an address bus: write value `v` to address `i`, read address `i` later and get `v` back exactly.

Unlike a KV cache, the state stays the same size however long the run gets. That matters, because a CPU executing millions of instructions would otherwise drag a cache that grows with every step.

The idea builds on earlier "fast weights" work (Schlag et al., 2021). The new part, per the author, is making it exact and reliable enough to host a whole CPU.

{{< image "qwenputer_risc_v_cpu_inside_llm_weights/deltanet_state_as_ram.webp" "A normal Gated DeltaNet head with blurred state cells beside a Qwenputer head where one slot is written and read exactly" >}}

*The same DeltaNet head, tuned so each write replaces one slot and each read returns it exactly.*

## Compiling a CPU into weights

There is no training run behind Qwenputer. A compiler takes a circuit description of the CPU and sets the weights to implement it:

- **Attention heads** perform lookups, such as fetching the instruction at the program counter.
- **Feed-forward units** do the arithmetic and decoding.
- **DeltaNet heads** hold the machine state as the RAM above: the registers, memory and program counter.

The CPU takes 11 layers in front of Qwen's 32. Qwen's original weights are not modified. The CPU lives in extra dimensions and extra layers, which is why the hidden size grows from 2560 to 3968, and the vocabulary gains 230,324 trace tokens. By the model card's count, the computer has only about 1M nonzero weights; the rest of the checkpoint is zero padding.

The CPU implements RV32IM, the 32-bit RISC-V base integer set plus multiply and divide, along with the Zba address-generation extension and a small bignum unit for large-number arithmetic. It runs C and MicroPython, slowly. It is not yet capable of running Linux.

{{< image "qwenputer_risc_v_cpu_inside_llm_weights/qwenputer_layer_stack.webp" "Layer stack showing embeddings, 11 compiled CPU layers and 32 unchanged Qwen3.5-4B layers" >}}

*The CPU is 11 extra layers in front of Qwen's original ones.*

## What one instruction looks like

The CPU runs as the model generates tokens. Every instruction produces a few trace tokens:

- an `ADDR` token, naming the memory row touched,
- a `VAL` token, carrying the value,
- a `STEP` token, which ends the instruction.

Qwen triggers the CPU through the tool-call format it already knows, writing a `<tool_call>` block. The built-in computer layers execute it, then Qwen writes the result as ordinary text. A small driver called `RvChat` loads the firmware into the DeltaNet state and keeps the trace tokens out of Qwen's own layers. That driver is the catch: the project says a plain `generate()` call does not boot the CPU yet.

So "no external tool" is accurate in the sense that no process outside the model computes anything. It is still a tool-call interface, just one whose other end is in the same forward pass.

{{< image "qwenputer_risc_v_cpu_inside_llm_weights/qwenputer_instruction_trace.webp" "Sequence diagram of a multiplication request passing from the user to Qwen, the CPU layers and DeltaNet RAM and back" >}}

*Each CPU instruction becomes a few trace tokens, then Qwen writes the answer.*

## What the numbers say

The author compared base Qwen3.5-4B against the RISC-V Qwenputer with greedy decoding, 40 problems per set. The base model was given a system prompt telling it to compute exactly.

| Benchmark | Base Qwen | Qwenputer |
|---|---|---|
| Synthetic integer arithmetic | 75.0% | 97.5% |
| DeepMind `mul_big` | 55.0% | 97.5% |
| DeepMind `div_big` | 72.5% | 97.5% |
| DeepMind `mul_div_multiple_longer` | 90.0% | 100.0% |
| DeepMind `add_or_sub_big` | 87.5% | 97.5% |

The blog post also compares against base Qwen with a Python tool: on `mul_big` that setup scored 100% against Qwenputer's 97.5%, and on `div_big` it scored 95% against 97.5%. So the in-weight CPU roughly matches a Python tool, not beats it. The argument for it is that nothing outside the model has to exist.

Some correctness numbers matter more than the accuracy table:

- The CPU passes the official `riscv-tests` and matches qemu output.
- It ran 18 million instructions free-running, meaning no reference machine corrected it between steps, with no errors.
- About 230,000 output positions were replayed against a reference machine with zero mismatches.
- Normal text barely moves: KL divergence from base Qwen is 6e-4, against a noise floor of 5e-4.

The README also lists what doesn't improve. The earlier CHIP-8 version of the project only tied base Qwen on GSM8K and GSM-Hard, because word problems depend on reasoning more than arithmetic. Base Qwen still leads on long chains of DeepMind expressions, where Qwenputer tends to re-verify results until it runs out of token budget.

{{< image "qwenputer_risc_v_cpu_inside_llm_weights/qwenputer_arithmetic_accuracy.webp" "Bar chart of arithmetic accuracy for base Qwen3.5-4B versus Qwenputer on five test sets" >}}

*Data: {{< link href="https://github.com/divagr18/qwenputer" >}}Qwenputer README{{< /link >}}, 2026.*

## What it costs

- **Speed.** Each CPU instruction costs several decoded tokens, so big calculations take seconds. The batched Triton executor runs at about 3,200 CPU tokens per second on an NVIDIA L4.
- **Size.** The checkpoint is 18.8 GB in bf16, roughly double base Qwen, though most of it is zero padding. It runs on a single 24 GB GPU.
- **Compatibility.** It loads as a stock `Qwen3_5ForCausalLM`, and the model card lists vLLM and SGLang support, but the full CPU path needs the `RvChat` driver.
- **Licensing.** The code is MIT and the weights are Apache-2.0. The model card's citation block says MIT, which conflicts with its stated license, so read it before shipping anything.

Also note the evidence is small: 40 problems per set, one model, one author. Treat the accuracy table as a demo, and the exact-match replay as the stronger result.

## An experimental filesystem in the same state

A separate model, `Qwen3.5-4B-Qwenputer-Filesystem` (the `rv-store` branch), uses the same DeltaNet state to store files with no tool calls. Filenames are hashed into 1,024 directory slots, collisions are resolved by probing the next slot, and a lookup takes about two or three steps. It holds up to 512 files, around 53,000 tokens of text, and files persist when saved and reloaded across conversations.

On 90 multi-session recall questions the score went from 7.8% to 83.3%. On 30 questions where a fact changed in a later session, it scored 90% against 30% for pasting old chats back into the prompt. Against Python-based memory tools it was closer, 83.3% against 78.9%. The project describes this branch as experimental.

## Run it yourself

I did not run this one; it needs a CUDA GPU. The commands below are from the project's own quickstart. You need `uv` and the Hugging Face CLI.

```bash
git clone https://github.com/divagr18/qwenputer && cd qwenputer/experimental/riscv && uv sync --extra hf
hf download divagr1925/Qwen3.5-4B-Qwenputer --local-dir qwenputer-rv
uv run python -m chipformer.rv.chat qwenputer-rv --firmware tests/data/rv/calc-bridge.elf \
    --ask "Use calc: what is 123456789 * 987654321?"
```

If it works, the answer should be `121932631112635269`, and you can compare it against `python3 -c "print(123456789*987654321)"`. The project's roadmap lists a `python()` tool that runs Python on the in-weight MicroPython and faster CPU execution as next steps.

## Conclusion

It is not a faster way to multiply numbers; a Python call beats it on every axis except the one it was built for. What it shows is that the "LLMs can't do exact computation" assumption is about training, not architecture: a hybrid model's recurrent state is enough to host a deterministic machine if you write the weights by hand. Whether that is useful, say as a way to hide a verifier inside a model, or just a very good party trick, is an open question the author is still poking at.

Check the claim yourself: run the quickstart above with a few multiplications of your own and compare each answer against Python, rather than taking the table on trust. And if you hit teh long-chain failures the README mentions, you'll recieve a good look at how a re-verifying model burns its token budget.
