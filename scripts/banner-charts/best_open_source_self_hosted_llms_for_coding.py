#!/usr/bin/env python3
"""
Banner chart for content/blog/best_open_source_self_hosted_llms_for_coding.md

Primary source: Artificial Analysis (Intelligence Index v4.3.2). Secondary:
Terminal-Bench 2.1 (vendor-reported). Third panel: the same Intelligence Index
for the models that fit a 128GB MacBook Pro at 4-bit. All figures are the ones
cited in the post body.

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

# ---- data (all values cited in the post, checked 2026-10-06) -------------
# Artificial Analysis rescaled its index in September 2026: v4.3 (Sep 7)
# swapped Terminal-Bench 2.1 for Terminal-Bench 4.0 and replaced tau3-Banking
# with AutomationBench-AA, and v4.3.2 (Sep 19) is the current 10-eval version.
# Scores fell 10-20 points, so NEVER mix these with the v4.1.1 numbers the
# August version of this chart used (Claude Opus 5 63, Kimi K3 60, ...).
# Values are the integers AA shows on its model pages and
# https://artificialanalysis.ai/models/open-source

# Panel 1 (PRIMARY): AA Intelligence Index v4.3.2. The amber bar is the
# overall #1, Claude Opus 5.5 (max), released 2026-09-22, as a frontier
# reference. The rest are the top open weights. "Qwen3.8 2.4T" is AA's
# open-weight entry Qwen3.8-2.4T-A95B (39.9), the weights behind Qwen3.8-Max; AA
# lists the hosted Qwen3.8 Max separately (45 for the 0902 build). It and
# Qwen3.8-Flash-Next (39.8) both display as 40; DeepSeek V4.1 Flash (max) is 39.
aa_labels = ["Claude\nOpus 5.5", "MiMo\nV2.6 Pro", "GLM-5.3", "Kimi\nK3",
             "GLM-5.3\nFlash", "Qwen3.8\n2.4T", "Qwen3.8\nFlash-\nNext",
             "DeepSeek\nV4.1\nFlash"]
aa_vals = [58.0, 46.0, 45.0, 44.0, 42.0, 40.0, 40.0, 39.0]
aa_prop = [True, False, False, False, False, False, False, False]

# Panel 2: Terminal-Bench 2.1, open weights only, vendor-reported from each
# model card and the HF leaderboard at
# huggingface.co/datasets/harborframework/terminal-bench-2.1.
# This replaced the SWE-Bench Pro panel because the four top open weights
# (MiMo-V2.6-Pro, GLM-5.3, Kimi K3, DeepSeek-V4.1-Flash) report no SWE-Bench
# Pro score, and SWE-Bench Pro moved to a V2 dataset on 2026-09-22.
# DeepSeek V4-Pro is the 0813 build (its card reports 87.9).
tb_labels = ["DeepSeek\nV4.1\nFlash", "MiMo\nV2.6\nPro", "Kimi\nK3", "GLM\n5.3",
             "DeepSeek\nV4-Pro", "MiMo\nV2.6\nFlash", "Qwen3.8\n2.4T",
             "GLM\n5.3\nFlash", "Qwen3.8\n27B", "MiniMax\nM3", "Muse\nGlimmer\n30B"]
tb_vals = [90.6, 89.9, 88.3, 88.2, 87.9, 87.6, 86.6, 84.3, 73.0, 66.0, 51.7]

# Panel 3: the models that actually fit a maxed-out MacBook Pro. The M5 Max
# tops out at 128GB of unified memory (apple.com/macbook-pro/specs), so the
# cutoff is "4-bit weights + KV cache headroom inside 128GB". GLM-5.3-Flash only
# gets in at 2-bit (~115GB), so it is left out; Kimi K3 and the rest are far out.
#
# Scores are the AA Intelligence Index v4.3.2 - the SAME metric and scale as
# panel 1, so laptop models can be read directly against the top open weights
# and Claude Opus 5.5 (58). Reasoning variant wherever AA publishes one.
# Second/third label lines are the model and its approximate 4-bit memory, from
# Unsloth's model guides (Nemotron 3.5 Lightning: its 4-bit GGUF file sizes,
# IQ4_NL 21.2GB to UD-Q4_K_XL 25.5GB).
mac_labels = ["Qwen3.8\nFlash-Next\n96-114 GB", "Qwen3.8\n27B\n16-19 GB",
              "Qwen3.6\n27B\n18 GB", "Muse Glimmer\n30B\n17 GB",
              "Gemma 4\n31B\n17-20 GB", "Nemotron 3.5\nLightning\n21-25.5 GB",
              "Nemotron 3\nSuper 120B\n64-72 GB", "gpt-oss\n120b\n~63 GB",
              "Qwen3-Coder\nNext\n46 GB"]
mac_vals = [40.0, 34.0, 21.0, 17.0, 15.0, 13.0, 13.0, 12.0, 9.0]


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
fig.suptitle("Best Open Source LLMs for Coding\nto Self-Host in 2026",
             fontsize=29, fontweight="bold", y=0.985, va="top")

# source note + legend between title and panels
fig.text(0.5, 0.88,
         "Open weights vs the best proprietary model  ·  primary metric: "
         "Artificial Analysis Intelligence Index v4.3.2  ·  cross-check: Terminal-Bench 2.1  ·  October 2026",
         fontsize=11, color="#666666", ha="center")

MAC_SUB = ("Artificial Analysis Intelligence Index v4.3.2, same scale as the top-left panel  ·  "
           "4-bit weights inside the M5 Max's 128GB ceiling")

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
prop_patch = mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                            hatch=PROP_HATCH,
                            label="Proprietary frontier (Claude Opus 5.5)")
fig.legend(handles=[open_patch, prop_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.86), ncol=2, frameon=False, fontsize=12.5)

gs = fig.add_gridspec(2, 2, height_ratios=[1, 1], hspace=0.5, wspace=0.18,
                      left=0.06, right=0.975, top=0.80, bottom=0.075)

ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[1, :])

bar_panel(ax1, aa_labels, aa_vals,
          "Artificial Analysis Intelligence Index", 66, [0, 20, 40, 60],
          prop=aa_prop, fmt="{:.0f}", tickfs=8.5)
bar_panel(ax2, tb_labels, tb_vals, "Terminal-Bench 2.1 (vendor-reported)", 104,
          [0, 50, 100], tickfs=7.3, titlefs=15)
bar_panel(ax3, mac_labels, mac_vals,
          "Practical Models You Can Actually Self-Host", 66, [0, 20, 40, 60],
          fmt="{:.0f}", tickfs=9.0, titlefs=17, subtitle=MAC_SUB)

out = "best_open_source_self_hosted_llms_for_coding_banner.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
