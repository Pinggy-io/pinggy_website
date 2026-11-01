---
title: "Five Small Qwen Agents Sharing Files Beat One Big Model: Inside Memdoor's team-solve"
description: "Memdoor's team-solve workflow runs five Qwen3.8-27B agents that talk only through files on disk. Here is how the plan, ideate, solve, test, review and repair loop works, what it scored on LiveCodeBench Hard, and where it breaks."
date: 2026-10-31T10:00:00+05:30
lastmod: 2026-10-31T10:00:00+05:30
draft: false
tags: ["Memdoor", "AI coding agents", "AI agents", "local LLM"]
og_image: "images/team_solve_five_small_models_shared_files/team_solve_five_small_models_shared_files_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkZpdmUgU21hbGwgUXdlbiBBZ2VudHMgU2hhcmluZyBGaWxlcyBCZWF0IE9uZSBCaWcgTW9kZWw6IEluc2lkZSBNZW1kb29yJ3MgdGVhbS1zb2x2ZSIsCiAgImRlc2NyaXB0aW9uIjogIk1lbWRvb3IncyB0ZWFtLXNvbHZlIHdvcmtmbG93IHJ1bnMgZml2ZSBRd2VuMy44LTI3QiBhZ2VudHMgdGhhdCB0YWxrIG9ubHkgdGhyb3VnaCBmaWxlcyBvbiBkaXNrLiBIZXJlIGlzIGhvdyB0aGUgcGxhbiwgaWRlYXRlLCBzb2x2ZSwgdGVzdCwgcmV2aWV3IGFuZCByZXBhaXIgbG9vcCB3b3Jrcywgd2hhdCBpdCBzY29yZWQgb24gTGl2ZUNvZGVCZW5jaCBIYXJkLCBhbmQgd2hlcmUgaXQgYnJlYWtzLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy90ZWFtX3NvbHZlX2ZpdmVfc21hbGxfbW9kZWxzX3NoYXJlZF9maWxlcy90ZWFtX3NvbHZlX2ZpdmVfc21hbGxfbW9kZWxzX3NoYXJlZF9maWxlc19iYW5uZXIud2VicCIsCiAgImF1dGhvciI6IHsgIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsICJuYW1lIjogIlBpbmdneSIgfSwKICAicHVibGlzaGVyIjogeyAiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwgIm5hbWUiOiAiUGluZ2d5IiwgInVybCI6ICJodHRwczovL3BpbmdneS5pbyIgfSwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTEwLTMxVDEwOjAwOjAwKzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTAtMzFUMTA6MDA6MDArMDU6MzAiLAogICJtYWluRW50aXR5T2ZQYWdlIjogeyAiQHR5cGUiOiAiV2ViUGFnZSIsICJAaWQiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vYmxvZy90ZWFtX3NvbHZlX2ZpdmVfc21hbGxfbW9kZWxzX3NoYXJlZF9maWxlcy8iIH0sCiAgImFydGljbGVTZWN0aW9uIjogIkFJIEFnZW50cyIsCiAgInByb2ZpY2llbmN5TGV2ZWwiOiAiSW50ZXJtZWRpYXRlIiwKICAia2V5d29yZHMiOiAiTWVtZG9vciB0ZWFtLXNvbHZlLCBtdWx0aS1hZ2VudCBjb2Rpbmcgd29ya2Zsb3csIFF3ZW4zLjgtMjdCLCBMaXZlQ29kZUJlbmNoIEhhcmQsIEdWUzVILCBzaGFyZWQgZmlsZXN5c3RlbSBhZ2VudHMiLAogICJhYm91dCI6IFsKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTWVtZG9vciIsICJkZXNjcmlwdGlvbiI6ICJTaW5nbGUtYmluYXJ5IGNvZGluZyBhZ2VudCB3aXRoIFlBTUwgd29ya2Zsb3dzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiR1ZTNUgiLCAiZGVzY3JpcHRpb24iOiAiVHJhaW5pbmctZnJlZSBvcmNoZXN0cmF0aW9uIHdoZXJlIGZyZXNoIG1vZGVsIGluc3RhbmNlcyBjb29yZGluYXRlIHRocm91Z2ggc2hhcmVkIGZpbGVzLiIgfSwKICAgIHsgIkB0eXBlIjogIlRoaW5nIiwgIm5hbWUiOiAiTGl2ZUNvZGVCZW5jaCBIYXJkIiwgImRlc2NyaXB0aW9uIjogIkNvbXBldGl0aXZlIHByb2dyYW1taW5nIGJlbmNobWFyayB1c2VkIHRvIHNjb3JlIHRoZSB3b3JrZmxvdy4iIH0sCiAgICB7ICJAdHlwZSI6ICJUaGluZyIsICJuYW1lIjogIk11bHRpLWFnZW50IHdvcmtmbG93IiwgImRlc2NyaXB0aW9uIjogIlBsYW4sIGlkZWF0ZSwgc29sdmUsIHRlc3QsIHJldmlldyBhbmQgcmVwYWlyIHN0ZXBzIHJ1biBhcyBhIGdyYXBoLiIgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "team_solve_five_small_models_shared_files/team_solve_five_small_models_shared_files_banner.webp" "Headline Five small models, one shared folder, next to bars showing mean scores of 9.8 for team-solve, 9.6 for the original harness and 8.0 for one Fable 5 call" >}}

On the README's LiveCodeBench Hard benchmark (the first ten problems, five passes each), a workflow of Qwen3.8-27B agents averaged a score of **9.8 out of 10**. Fable 5 in a single call averaged 8.0. The workflow is Memdoor's `team-solve`, a port of a method called GVS5H, and it is eight YAML files with no code. The agents never see each other's chat. They read and write four files: `task.md`, `plan.md`, `notes.md` and `solution.py`.

That is the interesting part. Nobody trained anything. The gain comes from splitting one hard problem into small jobs, giving each job a fresh context, and letting a script (not a model) decide when the answer is right. <a href="https://github.com/guregodevo/memdoor" target="_blank">Memdoor</a> is an Apache 2.0 coding agent shipped as a single binary, and `team-solve` is one of its example workflows. The numbers are the project's own, and the sample is small, so read them as "roughly at parity", which is exactly how the authors put it.

{{% tldr %}}
1. **Agents talk through files, not chat.** Every step starts with a fresh context, reads `task.md`, `plan.md` and `notes.md` from disk, and writes its result back.
2. **Two ideators, one solver.** One ideator proposes the most direct provable algorithm, the other proposes something from a different family, and the solver picks.
3. **A script is the judge.** `verify` runs the sample tests with `diff`. A model saying "done" counts for nothing.
4. **Result: 9.8 vs 9.6 vs 8.0.** Five Qwen3.8-27B passes against the original harness and a single Fable 5 call, on 10 problems. That is parity, not a win.
5. **It is slow and has known holes.** Median run: about 40 minutes and $0.39. The loop can overwrite a correct program.
{{% /tldr %}}

## What the original idea was

GVS5H (Lee, 2026) is a training-free orchestration method. Fresh instances of the same model split a problem between them and coordinate through a shared filesystem. Its reported numbers on 100 recent hard LiveCodeBench problems are 92.4% for a locally served Qwen3.8-27B (up from 66.8% alone), and 93.0% for Qwen3.8 Flash Next against 90.4% for Claude Fable 5, at about 9% of the cost. The code lives at <a href="https://github.com/slee-persis/GVS5H" target="_blank">slee-persis/GVS5H</a>.

Those are the author's figures and I couldn't find an independent replication. The Hacker News thread raised the obvious objections: the benchmark window runs from May 2023 to April 2025, so contamination is likely, and the test is old and close to saturated. Keep that in mind for everything below.

What Memdoor adds is a second, public implementation. The `team-solve` example reproduces the harness as a workflow and publishes all 50 runs, including requests, replies, the programs and the grader output.

## The pipeline, step by step

Memdoor workflows are YAML task files run as a graph. Independent steps run in parallel, and a failed run resumes at the failed step. `team-solve` has eight of them:

| Step | Kind | Reads | Writes |
|---|---|---|---|
| `plan` | agent | `task.md` | `plan.md`, `notes.md` |
| `ideate-a`, `ideate-b` | agent, in parallel | the plan | one proposal each |
| `solve` | agent | both proposals | `solution.py`, its decision in `notes.md` |
| `test` | command | `tests/` | `test-output.log` |
| `review` | agent | the test output | repair instructions in `notes.md` |
| `repair` | agent | the instructions | a fixed `solution.py`, or nothing |
| `verify` | command | `tests/` | the verdict |

{{< image "team_solve_five_small_models_shared_files/team_solve_pipeline.webp" "Flowchart of Memdoor team-solve: plan, two parallel ideators, solve, test, review, repair and verify, all reading and writing task.md, plan.md, notes.md and solution.py in a shared folder" >}}

*Agents never talk to each other. They leave files for the next step.*

Two details do most of the work.

**The ideators are told to differ.** `ideate-a` asks for the most direct provable algorithm. `ideate-b` asks for one from another family of techniques. The notes say the prompts originally named the sample problem's methods, which would have biased every other problem, so they were reworded on 2026-10-28. The solver then reads both proposals and records which one it picked.

**The loop is closed by a command.** `test` never fails the run, it just records output. `review` turns that output into repair instructions, `repair` edits `solution.py` or leaves it alone, and `verify` runs the tests again and exits nonzero if any sample fails. For your own problem you supply `tests/N.in` and `tests/N.out` pairs, and the program is a `solution.py` that reads stdin and is compared with `diff`.

Why fresh contexts? Every agent prompt says to read the files and not rely on chat. A 27B model that has spent 30 turns arguing with itself gets worse as the context fills. Starting clean from a short plan and notes file keeps each call small. That is my reading of why it works, not something the authors measured.

## What it scored

The README reports scores out of 10 per problem, from the first ten LiveCodeBench Hard problems with five passes each. Its table lists five rows:

| Problem | team-solve | Original harness | Fable 5, one call |
|---|---|---|---|
| 1 | 10/10 | 9 | 7 |
| 2 | 10/10 | 10 | 8 |
| 3 | 10/10 | 10 | 10 |
| 4 | 10/10 | 9 | 8 |
| 5 | 9/10 | 10 | 7 |
| **Mean** | **9.8** | **9.6** | **8.0** |

{{< image "team_solve_five_small_models_shared_files/team_solve_livecodebench_scores.webp" "Grouped bar chart of scores out of 10 on five LiveCodeBench Hard problems for team-solve, the original harness and one Fable 5 call, with means 9.8, 9.6 and 8.0" >}}

*Data: Memdoor team-solve README. Authors' own numbers.*

The README itself says 9.8 and 9.6 are effectively the same number. The claim is parity with the authors' harness, not improvement. Also, the Fable 5 column is one call per problem using the authors' files and was not run in this harness.

The cost side is more concrete. The 50 runs cost $35.79 and produced 15.3M output tokens (about $38.77 with 16 attempts that were cut off, stopped for a fix or paused). The median run took about 40 minutes of model time and $0.39. The longest ran four hours. 49 of the 50 problems were solved, on OpenRouter, not on the authors' own vLLM in FP8.

## Where the loop loses

The authors kept the failures in, which is why I trust the repo more than the headline.

- **A wrong counterexample.** On `abc399_e`, round 1's program was correct. The reviewing agent invented a counterexample with a wrong expected answer, the team rewrote the program, and the new one passed the public samples but not 32 of 44 hidden tests.
- **A correct program overwritten.** On `arc196_c` and `arc196_d`, a program that passed every hidden test was replaced in a later round because the manager did not declare the task done. Both recovered (round 8 for one, the final call for the other), and they were the two most expensive runs at $3.44 and $4.24.
- **Public samples only.** The loop sees the sample tests. Scoring uses hidden ones.

The notes suggest two fixes that keep the method intact: check a counterexample against a brute-force solution on small inputs, and keep the last program that passed the samples. Neither is in the published numbers.

The prompt text mattered more than I expected. The first version wrapped each problem in its own task file, and the 27B planned worse from it: `arc196_c`'s plan passed 0 of 2 samples, against 2 of 2 with the authors' exact LiveCodeBench text. Paraphrasing a problem costs you.

## Trying it yourself

These are the commands from the README. I haven't run them, so treat the versions and the model behaviour as unchecked.

```bash
curl -fsSL https://memdoor.ai/install.sh | bash
memdoor connect openrouter        # or anthropic, openai, gemini, chatgpt
# or no API key: memdoor connect local   (Ollama needs a 32K context window)

git clone --depth 1 https://github.com/guregodevo/memdoor
mkdir -p ~/.memdoor/workflows
cp -r memdoor/examples/workflows/team-solve ~/.memdoor/workflows/

mkdir my-problem && cd my-problem
cp -r ../memdoor/examples/workflows/team-solve/sample/* .
memdoor workflow run team-solve --wait   # exit 0 when every sample passes
```

The sample is a string-counting problem: substrings of a string over `a`, `b`, `c` with equal counts of each letter, up to 200,000 characters. On the first run (2026-10-25) it finished 8 of 8 steps and 5 of 5 samples, and the chosen solution ran in 0.04 s at N = 200,000. The same run died once because a provider dropped a stream and the coder had set `max_retries: 0`. Agent steps now use `max_retries: 1`.

The workflow YAML names no model, so a local one works if it has a 32K window. Python 3 and bash are required. Run `/workflow` inside `memdoor tui` to watch it live, and use the exit code in CI: 0 means every sample passed.

## What to take from it

You don't need Memdoor to copy the pattern. Write a task file, a plan file and a notes file. Run a planner, two ideators told to disagree, and a solver, each as a separate call that starts from those files. Let a shell script run your tests and be the only judge, definately not the model. If you try it on a small model, log every round, because the failure cases above are the ones you will recieve too.

The open question is whether this beats just sampling the same model five times and running the tests. The repo doesn't compare against that, and I would want to see it before betting on the structure over the extra samples.
