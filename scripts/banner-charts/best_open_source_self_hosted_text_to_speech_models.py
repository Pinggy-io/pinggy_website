#!/usr/bin/env python3
"""
Banner chart for content/blog/best_open_source_self_hosted_text_to_speech_models.md

Primary source: Artificial Analysis Speech Arena (provider-voice Elo, open-weights
filter). Second panel: model size. Third panel: hosted API price per 1M characters.
All figures are the ones cited in the post body.

Usage (see README.md in this folder for the full workflow):
    python best_open_source_self_hosted_text_to_speech_models.py
This writes best_open_source_self_hosted_text_to_speech_models_banner.png next to
the script; convert to .webp with cwebp and drop it in the post's images folder.

House style (matches the other blog banners): light-lavender hatched bars with a
purple edge, red dots, bold near-black title, recessive dashed grid. The amber
hatched bar/dot is the proprietary frontier reference, not an open-weight model.
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
# Panel 1 (PRIMARY): Artificial Analysis Speech Arena Elo, provider-voice,
# August 2026 snapshot. Amber bars are proprietary reference points: Cartesia
# Sonic 3.6 (1,283) leads the overall board, and ElevenLabs Eleven v3 (1,177) is
# placed in Elo order to show that Breeze TTS 2 now outranks it.
elo_labels = ["Cartesia\nSonic 3.6", "Breeze\nTTS 2", "Eleven v3", "Fish Audio\nS2 Pro",
              "Step Audio\nEditX", "Voxtral\nTTS", "Magpie-Multi\n357M",
              "Kokoro\n82M v1.0", "Maya1", "Higgs Audio\nV3 TTS", "Chatterbox",
              "Zonos\nv0.1"]
elo_vals = [1283, 1215, 1177, 1125, 1102, 1082, 1066, 1060, 1045, 1042, 1020, 1000]
elo_prop = [True, False, True, False, False, False, False, False, False, False,
            False, False]

# Panel 2: total parameters, in millions (open weights only). Log scale - the
# range is 82M to ~9B. Shows Kokoro punching far above its weight class.
size_labels = ["Kokoro\n82M v1.0", "Magpie-Multi\n357M", "Chatterbox", "Zonos\nv0.1",
               "Breeze\nTTS 2", "Voxtral\nTTS", "Fish Audio\nS2 Pro", "VibeVoice\n7B"]
size_vals = [82, 357, 500, 1600, 3000, 4000, 4400, 9000]

# Panel 3: hosted API price, USD per 1M characters, as listed on the Artificial
# Analysis leaderboard. Open weights (crimson) vs proprietary (amber) - this is
# what you pay someone *else* to run them; self-hosting trades it for hardware.
# Sorted ascending by price, proprietary interleaved where it falls.
price_labels = ["Kokoro\n82M v1.0", "StyleTTS 2", "OpenVoice\nv2", "Fish Audio\nS2 Pro",
                "Voxtral\nTTS", "Zonos\nv0.1", "Chatterbox", "Breeze\nTTS 2",
                "Eleven v3\nConversational", "Eleven v3"]
price_vals = [0.7, 2.8, 8.3, 15.0, 16.0, 20.0, 25.0, 34.0, 50.0, 100.0]
price_prop = [False, False, False, False, False, False, False, False, True, True]


def bar_panel(ax, labels, vals, title, ymax, yticks, prop=None, fmt="{:,.0f}",
              tickfs=10.5, ymin=0, log=False, rot=0):
    x = list(range(len(vals)))
    prop = prop or [False] * len(vals)
    # hatch can't be passed as a list, so draw each bar on its own
    for xi, v, p in zip(x, vals, prop):
        ax.bar(xi, v - ymin, bottom=ymin, width=0.66,
               facecolor=PROP_FACE if p else BAR_FACE,
               edgecolor=PROP_EDGE if p else BAR_EDGE,
               hatch=PROP_HATCH if p else BAR_HATCH, linewidth=1.1, zorder=3)
    for xi, v in zip(x, vals):
        off = v * 0.06 if log else (ymax - ymin) * 0.015
        ax.text(xi, v + off, fmt.format(v), ha="center", va="bottom",
                fontsize=11.5, fontweight="bold")
    ax.set_title(title, fontsize=16, fontweight="bold", pad=12)
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=tickfs, rotation=rot,
                       ha="right" if rot else "center")
    if log:
        ax.set_yscale("log")
    ax.set_ylim(ymin, ymax)
    ax.set_yticks(yticks)
    ax.get_yaxis().set_major_formatter(matplotlib.ticker.ScalarFormatter())
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.set_xlim(-0.7, len(vals) - 0.3)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


def dot_panel(ax, labels, vals, title, ymax, yticks, prop=None, tickfs=10.5):
    x = range(len(vals))
    prop = prop or [False] * len(vals)
    ax.vlines(x, 0, vals, color="#BBBBBB", linestyle="--", linewidth=1, zorder=2)
    for xi, v, p in zip(x, vals, prop):
        ax.scatter([xi], [v], s=130, color=PROP_EDGE if p else DOT_COLOR, zorder=4,
                   edgecolor="white", linewidth=1.2)
    for xi, v in zip(x, vals):
        ax.text(xi, v + ymax * 0.03, "${:g}".format(v), ha="center", va="bottom",
                fontsize=10, fontweight="bold")
    ax.set_title(title, fontsize=16, fontweight="bold", pad=12)
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=tickfs, rotation=40, ha="right")
    ax.set_ylim(0, ymax)
    ax.set_yticks(yticks)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.set_xlim(-0.7, len(vals) - 0.3)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


fig = plt.figure(figsize=(12.4, 12.6), dpi=100)
fig.patch.set_facecolor("white")
fig.suptitle("Best Open Source Self-Hosted\nText-to-Speech Models in 2026",
             fontsize=29, fontweight="bold", y=0.985, va="top")

# source note + legend between title and panels
fig.text(0.5, 0.88,
         "Open weights vs proprietary reference points  ·  primary metric: "
         "Artificial Analysis Speech Arena Elo  ·  August 2026",
         fontsize=12, color="#666666", ha="center")

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
prop_patch = mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                            hatch=PROP_HATCH,
                            label="Proprietary reference (Cartesia Sonic 3.6, Eleven v3)")
fig.legend(handles=[open_patch, prop_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.86), ncol=2, frameon=False, fontsize=12.5)

# Elo is the primary metric, so it gets the full-width panel; the two spec
# cross-checks sit below it.
gs = fig.add_gridspec(2, 2, height_ratios=[1, 1], hspace=0.5, wspace=0.2,
                      left=0.07, right=0.975, top=0.775, bottom=0.075)

ax1 = fig.add_subplot(gs[0, :])
ax2 = fig.add_subplot(gs[1, 0])
ax3 = fig.add_subplot(gs[1, 1])

# Elo is an interval scale with no meaningful zero, so this panel starts at 900
# (below the lowest bar) rather than 0. Labelled on the axis title to be explicit.
bar_panel(ax1, elo_labels, elo_vals, "Speech Arena Elo (axis starts at 900)",
          1360, [900, 1000, 1100, 1200, 1300], prop=elo_prop, tickfs=8.5, ymin=900)
bar_panel(ax2, size_labels, size_vals, "Model size (M parameters, log)",
          20000, [100, 1000, 10000], tickfs=8, ymin=50, log=True, rot=40)
dot_panel(ax3, price_labels, price_vals, "Hosted API price (USD / 1M chars)",
          120, [0, 40, 80, 120], prop=price_prop, tickfs=7.5)

out = "best_open_source_self_hosted_text_to_speech_models_banner.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
