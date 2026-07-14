#!/usr/bin/env python3
"""
Comparison chart for
content/blog/best_free_open_source_ai_image_generators_to_self_host.md

Source: Artificial Analysis Text-to-Image Arena, Open Weights view (July 2026).
Single-panel magnitude chart of the top open-weight models by Arena Elo, with
the new open-weight leader (NVIDIA Cosmos3-Super-Text2Image, agentic) called out
in amber. All figures match the ones cited in the post body.

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
# Artificial Analysis Text-to-Image Arena Elo, open weights only (July 2026).
# `lead` flags the leader bar (amber).
labels = ["Cosmos3\nSuper-T2I", "HiDream\nO1-Dev", "Ideogram\n4.0 Quality",
          "ERNIE\nImage", "Qwen Image\nMax 2512", "FLUX.2\n[dev]",
          "HunyuanImage\n3.0", "FIBO", "Stable Diffusion\n3.5 Large",
          "Sana\nSprint 1.6B"]
vals = [1219, 1183, 1164, 1163, 1154, 1152, 1120, 1067, 1021, 929]
lead = [True, False, False, False, False, False, False, False, False, False]

BASELINE = 900
YMAX = 1260

fig, ax = plt.subplots(figsize=(12.4, 6.8), dpi=100)
fig.patch.set_facecolor("white")

fig.suptitle("Best Open-Weight AI Image Generators (2026)",
             fontsize=25, fontweight="bold", y=0.995, va="top")
fig.text(0.5, 0.885,
         "Artificial Analysis Text-to-Image Arena  ·  quality Elo, open weights only  "
         "·  higher is better  ·  July 2026",
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
ax.set_yticks([900, 1000, 1100, 1200])
ax.set_axisbelow(True)
ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
ax.set_xlim(-0.7, len(vals) - 0.3)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)

open_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                            hatch=BAR_HATCH, label="Open weight")
lead_patch = mpatches.Patch(facecolor=LEAD_FACE, edgecolor=LEAD_EDGE,
                            hatch=LEAD_HATCH,
                            label="Open-weight leader (Cosmos3, agentic)")
ax.legend(handles=[open_patch, lead_patch], loc="upper right",
          frameon=False, fontsize=11.5)

fig.subplots_adjust(left=0.06, right=0.975, top=0.80, bottom=0.13)

out = "ai_image_arena_elo.png"
fig.savefig(out, dpi=100, facecolor="white")
print("wrote", out)
