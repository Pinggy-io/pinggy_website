#!/usr/bin/env python3
"""
Comparison chart for
content/blog/best_free_open_source_ai_image_generators_to_self_host.md

Source: Artificial Analysis Text-to-Image Arena v2.0, Open Weights view,
fetched October 2, 2026 (https://artificialanalysis.ai/image/leaderboard/text-to-image/open-weights).
Single-panel magnitude chart of the top open-weight models by Arena Elo, one bar
per model (fal's FLUX.2 [dev] Turbo/Flash LoRAs are left out), with the
open-weight leader (Alibaba Qwen-Image-2.1) called out in amber. The v2.0 board
pins FLUX.2 [dev] at exactly 1000, so these numbers are not comparable with the
pre-September 2026 scale. All figures match the ones cited in the post body.

Usage (see README.md in this folder for the full workflow):
    python best_free_open_source_ai_image_generators_to_self_host.py
This writes ai_image_arena_elo.png next to the script; convert to .webp with
cwebp and drop it in the post's images folder.

House style: light-lavender hatched bars with a purple edge, one amber highlight
bar for the leader, bold near-black title, recessive dashed grid. Elo is an
interval scale (0 is not meaningful), so the y-axis starts at a baseline rather
than zero - the note under the title says so.
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"   # very light lavender - open-weight models
BAR_EDGE = "#6B5DB8"   # purple
BAR_HATCH = "///"
LEAD_FACE = "#FBE7C6"  # light amber - the open-weight leader
LEAD_EDGE = "#C8801E"
LEAD_HATCH = "\\\\\\"
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
# Artificial Analysis Text-to-Image Arena v2.0 Elo, open weights only
# (October 2, 2026). `lead` flags the leader bar (amber).
labels = ["Qwen-Image\n2.1", "Ideogram 4.0\n(Quality)", "FLUX.2\n[dev]",
          "Qwen Image\nMax 2512", "Ming-Image\n0.1-Design", "HunyuanImage\n3.0 Instruct",
          "Cosmos3\nSuper-T2I", "HiDream\nO1-Image", "Z-Image\nTurbo",
          "FLUX.2\n[klein] 9B"]
vals = [1036, 1011, 1000, 999, 998, 995, 995, 982, 941, 941]
lead = [True, False, False, False, False, False, False, False, False, False]

BASELINE = 900
YMAX = 1060

fig, ax = plt.subplots(figsize=(12.4, 6.8), dpi=100)
fig.patch.set_facecolor("white")

fig.suptitle("Best Open-Weight AI Image Generators (2026)",
             fontsize=25, fontweight="bold", y=0.995, va="top")
fig.text(0.5, 0.885,
         "Artificial Analysis Text-to-Image Arena v2.0  ·  open weights only  ·  "
         "FLUX.2 [dev] = 1000  ·  higher is better  ·  October 2, 2026",
         fontsize=12, color="#666666", ha="center")

x = list(range(len(vals)))
for xi, v, p in zip(x, vals, lead):
    ax.bar(xi, v - BASELINE, bottom=BASELINE, width=0.66,
           facecolor=LEAD_FACE if p else BAR_FACE,
           edgecolor=LEAD_EDGE if p else BAR_EDGE,
           hatch=LEAD_HATCH if p else BAR_HATCH, linewidth=1.1, zorder=3)
for xi, v in zip(x, vals):
    ax.text(xi, v + (YMAX - BASELINE) * 0.012, f"{v:,}", ha="center",
            va="bottom", fontsize=11.5, fontweight="bold")

ax.set_xticks(x)
ax.set_xticklabels(labels, fontsize=9.5)
ax.set_ylim(BASELINE, YMAX)
ax.set_yticks([900, 950, 1000, 1050])
ax.set_axisbelow(True)
ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
ax.set_xlim(-0.7, len(vals) - 0.3)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
lead_patch = mpatches.Patch(facecolor=LEAD_FACE, edgecolor=LEAD_EDGE,
                            hatch=LEAD_HATCH,
                            label="Open-weight leader (Qwen-Image-2.1)")
ax.legend(handles=[open_patch, lead_patch], loc="upper right",
          frameon=False, fontsize=11.5)

fig.subplots_adjust(left=0.06, right=0.975, top=0.80, bottom=0.13)

out = "ai_image_arena_elo.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
