#!/usr/bin/env python3
"""
Banner chart for content/blog/self_hosting_llms_on_512gb_m5_ultra_mac_studio.md

The post's thesis is that capacity and speed are set by two different numbers, so
the banner is two capacity panels plus one speed panel:

  Panel 1  4-bit memory footprint of the models that fit one 512GB Mac Studio.
  Panel 2  The models that do not, against the 1-Mac and 4-Mac memory ceilings.
  Panel 3  Measured generation tok/s on an M3 Ultra 512GB, dense vs MoE.

Sources (same ones the post cites):
  - Footprints in bold in the post are real Hugging Face repository sizes for
    published MLX 4-bit conversions: Qwen3.8-27B 16.1GB, DeepSeek-V4-Flash 151GB,
    GLM-5.3-Flash 177.6GB, MiniMax M3 ~240GB, GLM-5.2 418GB, Kimi K2.7-Code
    641GB. Kimi K3's official MXFP4 checkpoint is 1.56TB. DeepSeek-V4-Pro is
    ~862GB in its native FP4-expert/FP8-attention format.
  - gpt-oss-120b (~65GB MXFP4), Qwen3.8-Flash-Next (~100GB) and Qwen3.8-Max
    (~1.3TB) are calculated at roughly 0.5-0.6 GB per billion total parameters,
    the same rule the post states, and are marked "est." in their labels.
  - Speeds are measured on the previous-generation M3 Ultra 512GB (819GB/s):
    the MLX repo's systematic benchmark discussion #3209 (Mixtral 8x7B, Qwen 32B,
    Llama 405B), the oMLX benchmark database (GLM-5.2), and published DeepSeek
    R1/V3-0324 runs. The post scales these by 1.46x for the M5 Ultra's 1.2TB/s;
    the chart deliberately shows the measured numbers, not the estimates.

Usage (see README.md in this folder for the full workflow):
    python self_hosting_llms_on_512gb_m5_ultra_mac_studio.py
This writes self_hosting_llms_on_512gb_m5_ultra_mac_studio_banner.png next to the
script; convert to .webp with cwebp and drop it in the post's images folder.

House style: light-lavender hatched bars with a purple edge for the "in budget"
series, amber hatched bars for the contrasting series inside the same panel
(here: does not fit one machine / dense architecture), crimson dashed reference
lines, bold near-black title, recessive dashed grid. Every panel is single-series
per mark type, so there is no categorical palette to colorblind-validate.
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.lines import Line2D

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"   # very light lavender - fits one machine / sparse MoE
BAR_EDGE = "#6B5DB8"   # purple
BAR_HATCH = "///"
ALT_FACE = "#FBE7C6"   # light amber - needs a cluster / dense architecture
ALT_EDGE = "#C8801E"
ALT_HATCH = "\\\\\\"
DOT_COLOR = "#E4322B"  # crimson - reference lines
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

# ---- Panel 1: fits one 512GB Mac Studio (4-bit weights, GB) ---------------
# 472GB is what the GPU can actually wire after `sudo sysctl
# iogpu.wired_limit_mb=483328`, leaving ~40GB for macOS. That, not the 512GB on
# the spec sheet, is the real ceiling - hence the crimson line.
fit_labels = ["Qwen3.8\n27B", "gpt-oss\n120b\nest.", "Qwen3.8\nFlash-Next\nest.",
              "DeepSeek\nV4-Flash", "GLM-5.3\nFlash", "MiniMax\nM3",
              "DeepSeek\n671B\n(R1)", "GLM-5.2"]
fit_vals = [16.1, 65.0, 100.0, 151.0, 177.6, 240.0, 404.0, 418.0]

# ---- Panel 2: does not fit one machine (GB) -------------------------------
big_labels = ["Kimi K2.7\nCode", "DeepSeek\nV4-Pro", "Qwen3.8\nMax\nest.",
              "Kimi K3"]
big_vals = [641.0, 862.0, 1300.0, 1560.0]

# ---- Panel 3: measured generation tok/s, M3 Ultra 512GB -------------------
# `dense` flags the amber bars. The point of the panel: the two dense models are
# the slowest things on it relative to their size class, and a 47B MoE beats a
# 32B dense model outright.
spd_labels = ["Mixtral\n8x7B MoE\n12.9B active", "Qwen 32B\ndense",
              "DeepSeek\nV3-0324\n671B MoE", "GLM-5.2\n743B MoE",
              "DeepSeek R1\n671B MoE", "Llama 3.3\n70B dense\n8K ctx",
              "Llama 405B\ndense"]
spd_vals = [68.4, 31.2, 20.0, 17.7, 17.5, 15.5, 2.9]
spd_dense = [False, True, False, False, False, True, True]


def bar_panel(ax, labels, vals, title, ymax, yticks, alt=None, fmt="{:.1f}",
              tickfs=10.5, titlefs=16, subtitle=None, hlines=(),
              hline_side="right", xlim_left=-0.7):
    """One single-series magnitude panel. `alt` flags amber bars; `hlines` is a
    list of (value, label) crimson dashed reference lines."""
    x = list(range(len(vals)))
    alt = alt or [False] * len(vals)
    # hatch can't be passed as a list, so draw each bar on its own
    for xi, v, a in zip(x, vals, alt):
        ax.bar(xi, v, width=0.66,
               facecolor=ALT_FACE if a else BAR_FACE,
               edgecolor=ALT_EDGE if a else BAR_EDGE,
               hatch=ALT_HATCH if a else BAR_HATCH, linewidth=1.1, zorder=3)
    for xi, v in zip(x, vals):
        ax.text(xi, v + ymax * 0.015, fmt.format(v), ha="center", va="bottom",
                fontsize=11.5, fontweight="bold")
    # the left-side variant needs the extra x padding from xlim_left, otherwise
    # the label runs into the first bar
    lx, lha = ((len(vals) - 0.35, "right") if hline_side == "right"
               else (xlim_left + 0.06, "left"))
    for v, lab in hlines:
        ax.axhline(v, color=DOT_COLOR, linestyle="--", linewidth=1.4, zorder=4)
        ax.text(lx, v + ymax * 0.012, lab, ha=lha, va="bottom",
                fontsize=10.5, fontweight="bold", color=DOT_COLOR, zorder=5)
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
    ax.set_xlim(xlim_left, len(vals) - 0.3)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


fig = plt.figure(figsize=(12.4, 12.6), dpi=100)
fig.patch.set_facecolor("white")
fig.suptitle("What Actually Fits on a 512GB\nM5 Ultra Mac Studio",
             fontsize=29, fontweight="bold", y=0.985, va="top")

fig.text(0.5, 0.893,
         "Open-weight LLMs at 4-bit  ·  footprints are published MLX "
         "repository sizes where available",
         fontsize=11.5, color="#666666", ha="center")
fig.text(0.5, 0.873,
         "Speeds measured on the previous-generation M3 Ultra 512GB  ·  "
         "September 2026",
         fontsize=11.5, color="#666666", ha="center")

fit_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                           hatch=BAR_HATCH,
                           label="Fits one machine / sparse MoE")
alt_patch = mpatches.Patch(facecolor=ALT_FACE, edgecolor=ALT_EDGE,
                           hatch=ALT_HATCH,
                           label="Needs a cluster / dense architecture")
line_key = Line2D([0], [0], color=DOT_COLOR, linestyle="--", linewidth=1.6,
                  label="Memory ceiling")
fig.legend(handles=[fit_patch, alt_patch, line_key], loc="upper center",
           bbox_to_anchor=(0.5, 0.851), ncol=3, frameon=False, fontsize=12.0)

gs = fig.add_gridspec(2, 2, height_ratios=[1, 1], hspace=0.5, wspace=0.18,
                      left=0.075, right=0.975, top=0.80, bottom=0.075)

ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[1, :])

bar_panel(ax1, fit_labels, fit_vals,
          "Fits one 512GB Mac (GB at 4-bit)", 560, [0, 200, 400],
          tickfs=8.2, titlefs=15,
          hlines=[(472, "472GB usable after raising the wired limit")])
bar_panel(ax2, big_labels, big_vals,
          "Too big for one Mac (GB)", 2300, [0, 512, 1024, 1536, 2048],
          alt=[True] * len(big_vals), fmt="{:.0f}", tickfs=9.0, titlefs=15,
          hline_side="left", xlim_left=-1.0,
          hlines=[(512, "1 Mac"), (2048, "4 Macs")])
bar_panel(ax3, spd_labels, spd_vals,
          "Generation Speed Is Set by Active Parameters, Not Total Size", 78,
          [0, 20, 40, 60], alt=spd_dense, tickfs=9.0, titlefs=17,
          subtitle="tokens/sec, 4-bit, batch 1, short context, measured on an "
                   "M3 Ultra 512GB (819GB/s)")

out = "self_hosting_llms_on_512gb_m5_ultra_mac_studio_banner.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)


# =========================================================================
# Body figures. Same house style, one panel each, sized for in-article width
# rather than as a banner. Each one backs a specific section of the post.
# =========================================================================

def save(fig, name):
    fig.savefig(name, dpi=100, facecolor="white", bbox_inches="tight")
    print("wrote", name)


# ---- Figure 2: quantization vs context length ----------------------------
# Backs the "What speed actually looks like" section. Source: the MLX repo's
# systematic benchmark discussion #3209, Qwen 32B dense on an M3 Ultra 512GB,
# batch 1, 256 generation tokens, 3 trials per configuration. The point: at 1K
# context, F16 -> Q2 is a 4.6x speedup; at 128K it is 1.7x. Context, not
# quantization, is what sets your throughput on long-context work.
quants = ["F16", "Q8", "Q6", "Q4", "Q3", "Q2"]
tps_1k = [10.4, 18.3, 23.0, 31.2, 38.1, 47.6]
tps_128k = [5.5, 7.1, 7.7, 8.5, 8.9, 9.3]

fig2 = plt.figure(figsize=(11.2, 5.4), dpi=100)
fig2.patch.set_facecolor("white")
fig2.suptitle("Quantization Buys Speed at Short Context, Almost Nothing at Long",
              fontsize=17, fontweight="bold", y=1.0, va="top")
fig2.text(0.5, 0.915,
          "Qwen 32B dense, generation tokens/sec, batch 1  ·  measured on an "
          "M3 Ultra 512GB (MLX discussion #3209)",
          fontsize=11, color="#666666", ha="center")
gs2 = fig2.add_gridspec(1, 2, wspace=0.16, left=0.07, right=0.98, top=0.80,
                        bottom=0.11)
a1 = fig2.add_subplot(gs2[0, 0])
a2 = fig2.add_subplot(gs2[0, 1])
# same y limit on both panels so the collapse is readable as an area, not just
# as numbers
bar_panel(a1, quants, tps_1k, "1K token context", 54, [0, 20, 40],
          tickfs=11, titlefs=14)
bar_panel(a2, quants, tps_128k, "128K token context", 54, [0, 20, 40],
          tickfs=11, titlefs=14)
save(fig2, "self_hosting_llms_on_512gb_m5_ultra_mac_studio_quant_vs_context.png")


# ---- Figure 3: prefill vs decode on M5 -----------------------------------
# Backs the "Prefill is a different bottleneck" section. Source: Apple's own MLX
# measurements on M5 vs M4 across six models (machinelearning.apple.com). Both
# endpoints of each range are shown rather than a single midpoint, because the
# spread is the interesting part: the Neural Accelerators transform prefill and
# barely touch decode, which stays pinned to the 28% memory-bandwidth gain.
phase_labels = ["Prefill (TTFT)\nslowest of\nsix models",
                "Prefill (TTFT)\nfastest of\nsix models",
                "Decode\nslowest of\nsix models",
                "Decode\nfastest of\nsix models"]
phase_vals = [3.30, 4.06, 1.19, 1.27]
phase_alt = [False, False, True, True]

fig3 = plt.figure(figsize=(9.6, 5.4), dpi=100)
fig3.patch.set_facecolor("white")
fig3.suptitle("The M5's Neural Accelerators Speed Up Prompts, Not Generation",
              fontsize=16.5, fontweight="bold", y=1.0, va="top")
fig3.text(0.5, 0.905,
          "Speedup vs M4 across six models in MLX  ·  Apple Machine Learning "
          "Research, January 2026",
          fontsize=11, color="#666666", ha="center")
a3 = fig3.add_axes([0.09, 0.13, 0.885, 0.66])
bar_panel(a3, phase_labels, phase_vals, "", 4.8, [1, 2, 3, 4],
          alt=phase_alt, fmt="{:.2f}x", tickfs=10.5,
          hline_side="left", xlim_left=-1.05,
          hlines=[(1.0, "M4 parity")])
save(fig3, "self_hosting_llms_on_512gb_m5_ultra_mac_studio_prefill_vs_decode.png")


# ---- Figure 4: what Mac clusters actually deliver ------------------------
# Backs the "Clustering two to four Mac Studios" section. Measured runs on
# M3 Ultra 512GB nodes over Thunderbolt 5 RDMA. NOTE: the model differs per node
# count, because these are the models people actually ran at each tier - this is
# not a scaling curve for one model, and the subtitle says so.
clu_labels = ["1x M3 Ultra\nDeepSeek V3-0324\n671B MoE",
              "2x M3 Ultra\nKimi K2.5\n1T MoE",
              "4x M3 Ultra\nQwen3 235B-A22B",
              "4x M3 Ultra\nDeepSeek V3.1\n671B MoE"]
clu_vals = [20.0, 24.0, 31.9, 32.5]

fig4 = plt.figure(figsize=(9.6, 5.4), dpi=100)
fig4.patch.set_facecolor("white")
fig4.suptitle("What a Thunderbolt 5 Mac Cluster Actually Delivers",
              fontsize=17, fontweight="bold", y=1.0, va="top")
fig4.text(0.5, 0.915,
          "Generation tokens/sec, 4-bit, over Thunderbolt 5 RDMA",
          fontsize=11, color="#666666", ha="center")
fig4.text(0.5, 0.862,
          "The model differs per node count - read this as a tier guide, not a "
          "scaling curve",
          fontsize=11, color="#666666", ha="center")
a4 = fig4.add_axes([0.09, 0.15, 0.885, 0.62])
bar_panel(a4, clu_labels, clu_vals, "", 40, [0, 10, 20, 30], tickfs=10.0)
save(fig4, "self_hosting_llms_on_512gb_m5_ultra_mac_studio_cluster_throughput.png")
