#!/usr/bin/env python3
"""
Banner chart for content/blog/best_open_source_self_hosted_llms_for_coding.md

Primary source: Artificial Analysis (Intelligence Index). Secondary: SWE-Bench Pro.
Third panel: context window. All figures are the ones cited in the post body.

Usage (see README.md in this folder for the full workflow):
    python best_open_source_self_hosted_llms_for_coding.py
This writes best_open_source_self_hosted_llms_for_coding_banner.png next to the
script; convert to .webp with cwebp and drop it in the post's images folder.

House style (matches the other blog banners): light-lavender hatched bars with a
purple edge, red dots, bold near-black title, recessive dashed grid. Each panel is
a single-series magnitude chart, so there is one accent per mark type (no
categorical palette to validate).
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"   # very light lavender - open-weight models
BAR_EDGE = "#6B5DB8"   # purple
BAR_HATCH = "///"
PROP_FACE = "#FBE7C6"  # light amber - proprietary frontier reference
PROP_EDGE = "#C8801E"
PROP_HATCH = "\\\\\\"
DOT_COLOR = "#E4322B"  # crimson
INK = "#1A1A1A"        # title / value labels
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
# The leading proprietary bar (amber) is a frontier reference, not an
# open-weight model - it shows how far open weights are from the best closed
# model. Claude Opus 4.8: AA Intelligence Index 56, SWE-Bench Pro 69.2.
# `prop` flags which bars are the proprietary reference.

# Panel 1 (PRIMARY): Artificial Analysis Intelligence Index.
aa_labels = ["Claude\nOpus 4.8", "GLM\n5.2", "MiniMax\nM3", "DeepSeek\nV4 Pro",
             "Kimi\nK2.6", "MiMo\nV2.5-Pro", "Kimi K2.7\nCode", "Qwen3.6\n35B-A3B"]
aa_vals = [56.0, 51.1, 44.4, 44.3, 42.8, 42.2, 42.0, 32.0]
aa_prop = [True, False, False, False, False, False, False, False]

# Panel 2: SWE-Bench Pro.
swe_labels = ["Claude\nOpus 4.8", "GLM\n5.2", "MiniMax\nM3", "Kimi K2.7\nCode",
              "GLM\n5.1", "DeepSeek\nV4-Pro-Max", "Qwen3.6\n35B-A3B"]
swe_vals = [69.2, 62.1, 59.0, 58.6, 58.4, 55.4, 49.5]
swe_prop = [True, False, False, False, False, False, False]

# Panel 3: context window in millions of tokens (open weights only).
ctx_labels = ["GLM\n5.2", "MiniMax\nM3", "DeepSeek\nV4 Pro", "MiMo\nV2.5-Pro",
              "Kimi K2.7\nCode", "Qwen3.6\n35B-A3B", "Devstral\n2", "GLM\n5.1",
              "DeepSeek\nV3.2"]
ctx_vals = [1.0, 1.0, 1.0, 1.0, 0.256, 0.262, 0.256, 0.2, 0.16]


def bar_panel(ax, labels, vals, title, ymax, yticks, prop=None, fmt="{:.1f}",
              tickfs=10.5):
    x = list(range(len(vals)))
    prop = prop or [False] * len(vals)
    # hatch can't be passed as a list, so draw each bar on its own
    for xi, v, p in zip(x, vals, prop):
        ax.bar(xi, v, width=0.66,
               facecolor=PROP_FACE if p else BAR_FACE,
               edgecolor=PROP_EDGE if p else BAR_EDGE,
               hatch=PROP_HATCH if p else BAR_HATCH, linewidth=1.1, zorder=3)
    for xi, v in zip(x, vals):
        ax.text(xi, v + ymax * 0.015, fmt.format(v), ha="center", va="bottom",
                fontsize=11.5, fontweight="bold")
    ax.set_title(title, fontsize=16, fontweight="bold", pad=12)
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=tickfs)
    ax.set_ylim(0, ymax)
    ax.set_yticks(yticks)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.set_xlim(-0.7, len(vals) - 0.3)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


def dot_panel(ax, labels, vals, title, ymax, yticks):
    x = range(len(vals))
    ax.vlines(x, 0, vals, color="#BBBBBB", linestyle="--", linewidth=1, zorder=2)
    ax.scatter(x, vals, s=150, color=DOT_COLOR, zorder=4, edgecolor="white",
               linewidth=1.2)
    for xi, v in zip(x, vals):
        txt = "{:.3f}".format(v).rstrip("0").rstrip(".") if v < 1 else "{:.2f}".format(v)
        ax.text(xi, v + ymax * 0.03, txt, ha="center", va="bottom",
                fontsize=11.5, fontweight="bold")
    ax.set_title(title, fontsize=17, fontweight="bold", pad=12)
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=10.5)
    ax.set_ylim(0, ymax)
    ax.set_yticks(yticks)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.set_xlim(-0.7, len(vals) - 0.3)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


fig = plt.figure(figsize=(12.4, 12.6), dpi=100)
fig.patch.set_facecolor("white")
fig.suptitle("Best Open Source Self-Hosted LLMs for\nCoding in 2026",
             fontsize=29, fontweight="bold", y=0.985, va="top")

# source note + legend between title and panels
fig.text(0.5, 0.88,
         "Open weights vs the best proprietary model  ·  primary metric: "
         "Artificial Analysis Intelligence Index  ·  cross-check: SWE-Bench Pro  ·  July 2026",
         fontsize=12, color="#666666", ha="center")

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
prop_patch = mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                            hatch=PROP_HATCH,
                            label="Proprietary frontier (Claude Opus 4.8)")
fig.legend(handles=[open_patch, prop_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.86), ncol=2, frameon=False, fontsize=12.5)

gs = fig.add_gridspec(2, 2, height_ratios=[1, 1], hspace=0.45, wspace=0.18,
                      left=0.06, right=0.975, top=0.80, bottom=0.06)

ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[1, :])

bar_panel(ax1, aa_labels, aa_vals,
          "Artificial Analysis Intelligence Index", 60, [0, 20, 40, 60],
          prop=aa_prop, tickfs=9.5)
bar_panel(ax2, swe_labels, swe_vals, "SWE-Bench Pro", 80, [0, 40, 80],
          prop=swe_prop, tickfs=9.5)
dot_panel(ax3, ctx_labels, ctx_vals, "Context Window (M tokens)", 1.5,
          [0, 0.5, 1.0, 1.5])

out = "best_open_source_self_hosted_llms_for_coding_banner.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
