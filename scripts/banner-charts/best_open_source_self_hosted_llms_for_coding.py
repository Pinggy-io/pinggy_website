#!/usr/bin/env python3
"""
Banner chart for content/blog/best_open_source_self_hosted_llms_for_coding.md

Primary source: Artificial Analysis (Intelligence Index v4.1.1). Secondary:
SWE-Bench Pro. Third panel: the same Intelligence Index for the models that fit a
128GB MacBook Pro at 4-bit. All figures are the ones cited in the post body.

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
# model. Claude Opus 5 is the current AA Intelligence Index #1 (63), ahead of
# Claude Fable 5. `prop` flags proprietary bars.
#
# Panel 2's amber bar is Claude Opus 5 at 79.2, sourced from Tencent's own
# Hy4-preview benchmark appendix (huggingface.co/tencent/Hy4-preview), which
# lists Claude Opus 5's SWE-Bench Pro at "79.2/79.9*" (79.2 = Anthropic's own
# reported figure; 79.9* = Tencent's retest). Claude Opus 4.8's SWE-Bench Pro
# of 69.2 (used in the previous version of this chart) is independently
# confirmed across THREE competitor cards - Qwen3.8-Max, GLM-5.2, and this same
# Tencent appendix - so trust that figure if you ever need Opus 4.8 specifically
# instead of Opus 5.
# Rebuilt against the official leaderboard at
# huggingface.co/datasets/ScaleAI/SWE-bench_Pro, which surfaced four open-weight
# entrants this chart didn't have: Tencent Hy4-preview (65.7), Ornith AI's
# Ornith-1.5-397B (65.1), Xiaohongshu's dots3-note-prev (61.0), and Poolside's
# Laguna S 2.1 (59.4) - Poolside notably being a previously closed, API-only
# lab. All four numbers are each model's own vendor-reported card.
# WARNING: a "Claude Opus 5 = 79.2 SWE-Bench Pro" figure circulates on secondary
# sites. It is wrong - 79.20 is Claude 4.5 Opus on live-SWE-agent on SWE-bench
# VERIFIED (swebench.com, 2025-12-15), a different and easier benchmark, and
# swebench.com hosts no Pro board at all. Do not substitute it.
# For an INDEPENDENT Pro board see Scale's SEAL (labs.scale.com), which tops out
# at 61.5 (Muse Spark 1.1) under standardized scaffolding and does not cover the
# August open-weight wave - never mix its numbers with the vendor-run ones here.
# Kimi K3 is absent because Moonshot reported no SWE-Bench Pro number for it.

# Panel 1 (PRIMARY): Artificial Analysis Intelligence Index (v4.1.1, Aug 2026).
# GLM-5.3's 756 GB of native-FP8 weights were published Aug 29 2026, so the full
# 743B model is now self-hostable and joins the chart tied with Kimi K3 at 60.
# GLM-5.3-Flash (57, MIT) stays as the bar that fits a single 8x80GB node.
aa_labels = ["Claude\nOpus 5", "Kimi\nK3", "GLM-5.3", "Qwen3.8\nMax",
             "GLM-5.3\nFlash", "DeepSeek\nV4 Pro", "Qwen3.8\n27B",
             "MiniMax\nM3"]
aa_vals = [63.0, 60.0, 60.0, 58.0, 57.0, 53.0, 52.0, 45.0]
aa_prop = [True, False, False, False, False, False, False, False]

# Panel 2: SWE-Bench Pro, open weights only. Qwen3.8-27B (Alibaba, Aug 14 2026)
# is the bar that matters - it is the only one here that runs on a single 24GB
# consumer GPU, and it lands within half a point of GLM-5.2 at ~28x fewer total
# parameters. All figures are vendor-reported from each model card.
swe_labels = ["Claude\nOpus 5", "Qwen3.8\nMax", "Tencent\nHy4-\npreview",
              "Ornith\n1.5-397B", "GLM\n5.2", "Qwen3.8\n27B", "dots3-\nnote-\nprev",
              "Poolside\nLaguna\nS 2.1", "MiniMax\nM3", "DeepSeek\nV4-Pro",
              "Muse\nGlimmer\n30B"]
swe_vals = [79.2, 67.7, 65.7, 65.1, 62.1, 61.7, 61.0, 59.4, 59.0, 55.4, 51.2]
swe_prop = [True, False, False, False, False, False, False, False, False, False, False]

# Panel 3: the models that actually fit a maxed-out MacBook Pro. The M5 Max
# tops out at 128GB of unified memory (Apple, Mar 2026), so the cutoff is
# "4-bit weights + KV cache headroom inside 128GB". GLM-5.3-Flash does not clear
# it at a real Q4 (~180-195GB); Kimi K3 and Qwen3.8-Max are further out again.
#
# Scores are the Artificial Analysis Intelligence Index - the SAME metric and
# scale as panel 1, so laptop models can be read directly against Kimi K3 (60)
# and Claude Opus 5 (63). Reasoning variant used wherever AA publishes one, so
# this is one row per model. Sourced from AA's open-weights boards:
#   https://artificialanalysis.ai/models/open-source
#
# The point of the panel: the top bar is a 27B dense model at the smallest
# footprint on the chart, and every 120B-class model that also fits scores at
# least 25 points lower. Second/third label lines are the model size and the
# approximate 4-bit in-memory footprint (gpt-oss-120b ships natively MXFP4).
mac_labels = ["Qwen3.8\n27B\n~14-17 GB", "Qwen3.6\n27B\n~17 GB",
              "Muse Glimmer\n30B\n<20 GB", "Gemma 4\n31B\n~18 GB",
              "Nemotron 3\nSuper 120B\n~68 GB", "gpt-oss\n120b\n~63 GB",
              "Nemotron 3.5\nLightning\n~18 GB", "Qwen3-Coder\nNext\n~45 GB"]
mac_vals = [52.0, 38.0, 35.0, 30.0, 26.0, 24.0, 24.0, 21.0]


def bar_panel(ax, labels, vals, title, ymax, yticks, prop=None, fmt="{:.1f}",
              tickfs=10.5, titlefs=16, subtitle=None):
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
    # a subtitle needs the title lifted so the grey line can sit between them
    ax.set_title(title, fontsize=titlefs, fontweight="bold",
                 pad=30 if subtitle else 12)
    if subtitle:
        ax.text(0.5, 1.035, subtitle, transform=ax.transAxes, ha="center",
                va="bottom", fontsize=12, color="#666666")
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=tickfs)
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
         "Artificial Analysis Intelligence Index v4.1.1  ·  cross-check: SWE-Bench Pro  ·  August 2026",
         fontsize=11.5, color="#666666", ha="center")

MAC_SUB = ("Artificial Analysis Intelligence Index, same scale as the top-left panel  ·  "
           "4-bit weights inside the M5 Max's 128GB ceiling")

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
prop_patch = mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                            hatch=PROP_HATCH,
                            label="Proprietary frontier (Claude Opus 5)")
fig.legend(handles=[open_patch, prop_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.86), ncol=2, frameon=False, fontsize=12.5)

gs = fig.add_gridspec(2, 2, height_ratios=[1, 1], hspace=0.5, wspace=0.18,
                      left=0.06, right=0.975, top=0.80, bottom=0.075)

ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[1, :])

bar_panel(ax1, aa_labels, aa_vals,
          "Artificial Analysis Intelligence Index", 72, [0, 20, 40, 60],
          prop=aa_prop, tickfs=8.5)
bar_panel(ax2, swe_labels, swe_vals, "SWE-Bench Pro (vendor-reported)", 88,
          [0, 40, 80], prop=swe_prop, tickfs=7.3, titlefs=15)
bar_panel(ax3, mac_labels, mac_vals,
          "Practical Models You Can Actually Self-Host", 60, [0, 20, 40, 60],
          fmt="{:.0f}", tickfs=9.0, titlefs=17, subtitle=MAC_SUB)

out = "best_open_source_self_hosted_llms_for_coding_banner.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
