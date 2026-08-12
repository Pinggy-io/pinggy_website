#!/usr/bin/env python3
"""
Banner chart for content/blog/best_open_source_self_hosted_llms_for_coding.md

Primary source: Artificial Analysis (Intelligence Index). Secondary: SWE-Bench Pro.
Third panel: SWE-bench Verified for the models that fit a 128GB MacBook Pro at
4-bit. All figures are the ones cited in the post body.

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
# model. Claude Fable 5 is the current AA Intelligence Index #1 (60), ahead of
# Claude Opus 4.8 (56); SWE-Bench Pro frontier reference is still Opus 4.8
# (69.2) pending a verified Fable 5 number. `prop` flags proprietary bars.
# Kimi K3 (57 on AA Index) published weights on Jul 27, 2026, but Moonshot
# reported no SWE-Bench Pro number for it, so it's absent from panel 2.

# Panel 1 (PRIMARY): Artificial Analysis Intelligence Index.
aa_labels = ["Claude\nFable 5", "Kimi\nK3", "GLM\n5.2", "MiniMax\nM3",
             "DeepSeek\nV4 Pro", "MiMo\nV2.5-Pro", "Qwen3.6\n35B-A3B"]
aa_vals = [60.0, 57.0, 51.1, 44.4, 44.3, 42.2, 32.0]
aa_prop = [True, False, False, False, False, False, False]

# Panel 2: SWE-Bench Pro.
# Muse Glimmer 30B (Meta, Aug 10 2026) is the only bar here that runs on a
# single consumer GPU - 51.2 is Meta's self-reported High Reasoning score from
# the model card (https://huggingface.co/meta-models/Muse-Glimmer-30B), the
# same table that gives Qwen3.6-27B 50.2 and Gemma4-31B 36.9. Meta published no
# Artificial Analysis Index number, so it is absent from panels 1 and 3.
swe_labels = ["Claude\nOpus 4.8", "GLM\n5.2", "MiniMax\nM3",
              "DeepSeek\nV4-Pro-Max", "Muse\nGlimmer\n30B", "Qwen3.6\n35B-A3B"]
swe_vals = [69.2, 62.1, 59.0, 55.4, 51.2, 49.5]
swe_prop = [True, False, False, False, False, False]

# Panel 3: the models that actually fit a maxed-out MacBook Pro. The M5 Max
# tops out at 128GB of unified memory (Apple, Mar 2026), so the cutoff is
# "4-bit weights + KV cache headroom inside 128GB". Devstral 2 at 123B dense
# (~70GB) is the largest that clears it; GLM-5.2 does not (its 2-bit GGUF is
# ~239GB, a 256GB Mac Studio job).
#
# Scores are the Artificial Analysis Intelligence Index - the SAME metric and
# scale as panel 1, so laptop models can be read directly against Kimi K3 (57)
# and Claude Fable 5 (60). Sourced from AA's small (4B-40B) and medium
# (40B-150B) open-weights boards:
#   https://artificialanalysis.ai/models/open-source/small
#   https://artificialanalysis.ai/models/open-source/medium
# Reasoning variant used wherever AA publishes one, so this is one row per
# model. Qwen3-Coder-Next and Mistral Medium 3.5 are scored non-reasoning only -
# caveat carried into the post body.
#
# The point of the panel: the top bar is a 27B dense model, and every 120B-class
# model that also fits scores lower. Second label line is the approximate 4-bit
# in-memory size (gpt-oss-120b ships natively MXFP4).
# three lines (name / size / footprint) so no single line is wide enough to
# collide with its neighbour at this bar count
mac_labels = ["Qwen3.6\n27B\n~17 GB", "Qwen3.6\n35B-A3B\n~20 GB",
              "Qwen3.5\n122B-A10B\n~70 GB", "Mistral\nMedium 3.5\n~72 GB",
              "Gemma 4\n31B\n~18 GB", "Nemotron 3\nSuper 120B\n~68 GB",
              "gpt-oss\n120b\n~63 GB", "Qwen3-Coder\nNext\n~45 GB"]
mac_vals = [37.0, 32.0, 32.0, 30.0, 29.0, 25.0, 24.0, 21.0]


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
         "Artificial Analysis Intelligence Index  ·  cross-check: SWE-Bench Pro  ·  Jul-Aug 2026",
         fontsize=11.5, color="#666666", ha="center")

MAC_SUB = ("Artificial Analysis Intelligence Index, same scale as the top-left panel  ·  "
           "4-bit weights inside the M5 Max's 128GB ceiling")

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
prop_patch = mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                            hatch=PROP_HATCH,
                            label="Proprietary frontier (Claude Fable 5 / Opus 4.8)")
fig.legend(handles=[open_patch, prop_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.86), ncol=2, frameon=False, fontsize=12.5)

gs = fig.add_gridspec(2, 2, height_ratios=[1, 1], hspace=0.5, wspace=0.18,
                      left=0.06, right=0.975, top=0.80, bottom=0.075)

ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[1, :])

bar_panel(ax1, aa_labels, aa_vals,
          "Artificial Analysis Intelligence Index", 68, [0, 20, 40, 60],
          prop=aa_prop, tickfs=9.5)
bar_panel(ax2, swe_labels, swe_vals, "SWE-Bench Pro", 80, [0, 40, 80],
          prop=swe_prop, tickfs=9.0)
bar_panel(ax3, mac_labels, mac_vals,
          "Practical Models You Can Actually Self-Host", 44, [0, 10, 20, 30, 40],
          fmt="{:.0f}", tickfs=9.0, titlefs=17, subtitle=MAC_SUB)

out = "best_open_source_self_hosted_llms_for_coding_banner.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
