#!/usr/bin/env python3
"""
Chart for content/blog/small_llms_that_fit_in_8gb_memory.md

Panel 1 (PRIMARY): Artificial Analysis Intelligence Index v4.3, read off the
live leaderboard at https://artificialanalysis.ai/leaderboards/models on
2026-09-15. Scope is "what an 8GB machine can run", which is NOT the same as
"what fits in 8GB of VRAM": the lavender bars fit on the card by themselves,
and the single amber bar (Qwen3.5-35B-A3B) only runs once its MoE experts are
offloaded to system RAM. The legend spells that out, so do not drop it.

Panel 2: the download size of the smallest good-quality build of each of those
same models, in the SAME left-to-right order as panel 1, with the 8GB budget
line drawn in. Sizes are Ollama's published tag sizes
(ollama.com/library/<model>/tags), cross-checked against the two screenshots
embedded in the post; the amber bar is the measured size of Unsloth's
UD-IQ2_XXS GGUF and is deliberately the only bar above the 8GB line.

IMPORTANT - index versioning. AA rescales this index; v4.3 folds in ten much
harder evals (Humanity's Last Exam, Terminal-Bench v4.0, GDPval-AA v2, ...), so
scores compress downward and are NOT comparable with older versions. AA's own
March 2026 write-up of the Qwen3.5 small models quoted 32 for the 9B on the
then-current index; the same model reads 14 on v4.3. Never mix the two scales,
and never compare these bars against the v4.1.1 numbers in
best_open_source_self_hosted_llms_for_coding.py. If you refresh this chart,
re-read the version string off the leaderboard first and update the source note.

Where AA publishes both a reasoning and a non-reasoning row for a model, the
reasoning row is used, so this is one row per model.

Usage (see README.md in this folder for the full workflow):
    python small_llms_that_fit_in_8gb_memory.py
Writes small_llms_that_fit_in_8gb_memory_chart.png next to the script; convert
to .webp with cwebp and drop it in the post's images folder.

House style: light-lavender hatched bars with a purple edge, bold near-black
title, grey source note, recessive dashed grid, no top/right spines. The amber
hatched bar is the house's existing "different category" accent, reused here
for the offload route rather than for a proprietary reference. That is still
two accents, not a categorical palette, so there is nothing to colorblind-
validate. This chart also carries x/y axis titles, which the banner scripts in
this folder do not - it is embedded mid-article rather than used as a banner.
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"   # very light lavender - fits in 8GB on its own
BAR_EDGE = "#6B5DB8"   # purple
BAR_HATCH = "///"
OFF_FACE = "#FBE7C6"   # light amber - runs on 8GB only via MoE CPU offload
OFF_EDGE = "#C8801E"
OFF_HATCH = "\\\\\\"
LIMIT_COLOR = "#E4322B"  # crimson - the 8GB budget line
INK = "#1A1A1A"
GRID = "#CFCFCF"
plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 13,
    "axes.edgecolor": "#BFBFBF",
    "text.color": INK,
    "axes.labelcolor": INK,
    "xtick.color": INK,
    "ytick.color": INK,
})

# ---- data (all values cited in the post) ----------------------------------
# One row per model, ordered by AA Intelligence Index v4.3 descending. The same
# order is reused in panel 2 so a bar can be read down the figure: tall in panel
# 1 and short in panel 2 is the combination worth having.
#
# The leading amber bar is the MoE-offload route, not a model that fits in 8GB
# on its own: Qwen3.5-35B-A3B is 36B total / ~3B active, so Unsloth's
# UD-IQ2_XXS dynamic quant (9.93GB, measured by HTTP HEAD against
# huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF) runs on an 8GB card once
# llama.cpp's --n-cpu-moe parks the expert tensors in system RAM. It is the
# highest-scoring thing an 8GB machine can run, which is the whole point of
# including it. AA lists only a non-reasoning row for it; every other row here
# is the reasoning variant, so its bar is not strictly like-for-like.
#
# label, AA Intelligence Index v4.3, size in GB, needs MoE offload
MODELS = [
    ("Qwen3.5\n35B-A3B\nUnsloth",  15, 9.93, True),
    ("Gemma 4\n12B\nQAT",          14, 7.2,  False),
    ("Qwen3.5\n9B",                14, 6.6,  False),
    ("Qwen3.5\n4B",                13, 3.4,  False),
    ("Gemma 4\nE4B\nQAT",           9, 6.1,  False),
    ("Gemma 4\nE2B\nQAT",           8, 4.3,  False),
    ("Granite\n4.1 8B",             7, 5.3,  False),
    ("Nemotron 3\nNano 4B",         7, 2.8,  False),
    ("Qwen3.5\n2B",                 7, 2.7,  False),
    ("Phi-4\nMini",                 6, 2.5,  False),
    ("Granite\n4.1 3B",             6, 2.1,  False),
    ("Ministral\n3 8B",             5, 6.0,  False),
]

labels = [m[0] for m in MODELS]
aa_vals = [m[1] for m in MODELS]
size_vals = [m[2] for m in MODELS]
offload = [m[3] for m in MODELS]

BUDGET_GB = 8.0


def bar_panel(ax, labels, vals, title, ymax, yticks, fmt="{:.0f}",
              tickfs=9.5, titlefs=17, subtitle=None, budget=None,
              xlabel=None, ylabel=None, off=None):
    x = list(range(len(vals)))
    off = off or [False] * len(vals)
    # hatch can't be passed as a list, so draw each bar on its own
    for xi, v, o in zip(x, vals, off):
        ax.bar(xi, v, width=0.66,
               facecolor=OFF_FACE if o else BAR_FACE,
               edgecolor=OFF_EDGE if o else BAR_EDGE,
               hatch=OFF_HATCH if o else BAR_HATCH, linewidth=1.1, zorder=3)
    for xi, v in zip(x, vals):
        ax.text(xi, v + ymax * 0.015, fmt.format(v), ha="center", va="bottom",
                fontsize=11.5, fontweight="bold")
    if budget is not None:
        ax.axhline(budget, color=LIMIT_COLOR, linestyle="--", linewidth=1.6,
                   zorder=4)
        ax.text(len(vals) - 0.45, budget - ymax * 0.045, "8GB budget",
                color=LIMIT_COLOR, fontsize=11.5, fontweight="bold",
                va="top", ha="right")
    # a subtitle needs the title lifted so the grey line can sit between them
    ax.set_title(title, fontsize=titlefs, fontweight="bold",
                 pad=30 if subtitle else 12)
    if subtitle:
        ax.text(0.5, 1.035, subtitle, transform=ax.transAxes, ha="center",
                va="bottom", fontsize=12, color="#666666")
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=tickfs)
    # axis titles sit outside the ticks; the x tick labels run to three lines,
    # so the x label needs a wide pad to clear the tallest of them
    if ylabel:
        ax.set_ylabel(ylabel, fontsize=12.5, fontweight="bold", labelpad=10)
    if xlabel:
        ax.set_xlabel(xlabel, fontsize=12.5, fontweight="bold", labelpad=12)
    ax.set_ylim(0, ymax)
    ax.set_yticks(yticks)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.set_xlim(-0.7, len(vals) - 0.3)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


fig = plt.figure(figsize=(13.0, 11.2), dpi=100)
fig.patch.set_facecolor("white")
fig.suptitle("Small LLMs That Fit in 8GB", fontsize=30, fontweight="bold",
             y=0.985, va="top")

fig.text(0.5, 0.928,
         "Artificial Analysis Intelligence Index v4.3, read 2026-09-15  ·  "
         "reasoning variant where one is published\n"
         "Sizes are Ollama tag sizes for the smallest good-quality build of each model",
         fontsize=11.5, color="#666666", ha="center", va="top",
         linespacing=1.5)

fits_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH,
                            label="Fits in 8GB of VRAM on its own")
off_patch = mpatches.Patch(facecolor=OFF_FACE, edgecolor=OFF_EDGE,
                           hatch=OFF_HATCH,
                           label="Runs on 8GB via MoE offload to system RAM "
                                 "(Unsloth dynamic quant + llama.cpp --n-cpu-moe)")
fig.legend(handles=[fits_patch, off_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.884), ncol=2, frameon=False, fontsize=11.5)

# bottom leaves room for panel 2's x label under its three-line tick labels
gs = fig.add_gridspec(2, 1, hspace=0.66, left=0.075, right=0.975, top=0.778,
                      bottom=0.112)
ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[1, 0])

bar_panel(ax1, labels, aa_vals,
          "How they rank: Artificial Analysis Intelligence Index v4.3",
          18, [0, 5, 10, 15], off=offload,
          subtitle="Higher is better. Every model here runs on an 8GB machine.",
          xlabel="Model (ranked by Intelligence Index)",
          ylabel="Intelligence Index v4.3")
bar_panel(ax2, labels, size_vals,
          "What they cost you: weights on disk, smallest good build",
          12.0, [0, 2, 4, 6, 8, 10, 12], fmt="{:.1f}", budget=BUDGET_GB,
          off=offload,
          subtitle="Same order as above. Weights only - the KV cache is extra.",
          xlabel="Model (same order as above)",
          ylabel="Weights on disk (GB)")

out = "small_llms_that_fit_in_8gb_memory_chart.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
