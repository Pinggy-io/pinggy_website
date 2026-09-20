#!/usr/bin/env python3
"""
Banner chart for content/blog/typesafe_jev_system_one_model_use_cases_vs_llms.md

PROVENANCE RULE FOR THIS CHART: every number below is quoted verbatim from
TypeSafe AI's own launch post (https://typesafe.ai/blog/introducing-system-one-
models-and-jev, September 15, 2026), verified against the page text:

  "Input tokens: from $0.20 to $10 / MTok. Output tokens: ~5x more expensive
   than input tokens."                                  -> LLM price range
  "Input tokens: $0.042 / MTok ($42 per billion tokens).
   Output tokens: FREE (too cheap to meter)."           -> Jev price
  "End-to-end response time is 3 to 329 seconds for frontier models."
  "End-to-end response time is 70ms-500ms for TypeSafe."

Deliberately NOT charted: the per-case accuracy / cost / latency table that
circulated in secondary coverage (67.8% / 67.9% / 73.1%, $0.0004 / $0.0304 /
$0.1761, 0.4s / 10.1s / 37.8s). Those figures do not appear anywhere in
TypeSafe's published post - grepping the page source returns matches only
inside a share-link hash, an SVG stroke-miterlimit and CSS border floats - so
they are unverifiable and are omitted from both the chart and the post body.
Do not add them back without a primary source.

All figures remain vendor-reported; no independent reproduction exists.

Usage (see README.md in this folder for the full workflow):
    /tmp/chartenv/bin/python typesafe_jev_system_one_model_use_cases_vs_llms.py
    cwebp -lossless -m 6 typesafe_jev_system_one_model_use_cases_vs_llms_banner.png \
      -o typesafe_jev_system_one_model_use_cases_vs_llms_banner.webp
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.ticker import FuncFormatter

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"   # very light lavender - conversational frontier models
BAR_EDGE = "#6B5DB8"
BAR_HATCH = "///"
PROP_FACE = "#FBE7C6"  # light amber - TypeSafe Jev, the subject of the post
PROP_EDGE = "#C8801E"
PROP_HATCH = "\\\\\\"
INK = "#1A1A1A"
GRID = "#CFCFCF"
MUTED = "#666666"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 17,
    "axes.edgecolor": "#BFBFBF",
    "text.color": INK,
    "axes.labelcolor": INK,
    "xtick.color": INK,
    "ytick.color": INK,
})

# (label, value, is_jev, display) - display is quoted from the source wording
PRICE = [
    ("Jev\ninput", 0.042, True, "$0.042"),
    ("LLM input\n(low end)", 0.20, False, "$0.20"),
    ("LLM input\n(high end)", 10.0, False, "$10"),
]
SPEED = [
    ("Jev\n(fastest)", 0.07, True, "70ms"),
    ("Jev\n(slowest)", 0.5, True, "500ms"),
    ("Frontier LLM\n(fastest)", 3.0, False, "3s"),
    ("Frontier LLM\n(slowest)", 329.0, False, "329s"),
]

PANELS = [
    ("Input price per million tokens",
     "USD per million input tokens (log scale)",
     PRICE),
    ("End-to-end response time",
     "seconds (log scale)",
     SPEED),
]

fig, axes = plt.subplots(1, 2, figsize=(13.5, 7.6), dpi=200,
                         gridspec_kw={"width_ratios": [3, 4]})
fig.patch.set_facecolor("white")

for ax, (title, ylab, rows) in zip(axes, PANELS):
    labels = [r[0] for r in rows]
    vals = [r[1] for r in rows]
    for i, (_, v, jev, disp) in enumerate(rows):
        ax.bar(i, v,
               color=PROP_FACE if jev else BAR_FACE,
               edgecolor=PROP_EDGE if jev else BAR_EDGE,
               hatch=PROP_HATCH if jev else BAR_HATCH,
               linewidth=1.6, width=0.62, zorder=3)
        # On a log axis the gap above a bar is multiplicative, not additive.
        ax.text(i, v * 1.32, disp, ha="center", va="bottom",
                fontsize=18, fontweight="bold")

    ax.set_yscale("log")
    ax.set_ylim(min(vals) / 4, max(vals) * 6)
    ax.set_title(title, fontsize=20, fontweight="bold", pad=14)
    ax.set_ylabel(ylab, fontsize=15.5, labelpad=10)
    ax.set_xticks(range(len(labels)))
    ax.set_xticklabels(labels, fontsize=15)
    ax.tick_params(axis="y", labelsize=14)
    # Plain numbers read better than 10^-1 on a price axis.
    ax.yaxis.set_major_formatter(FuncFormatter(
        lambda v, _pos: f"{v:g}" if v >= 0.01 else f"{v:.3f}"))
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID, zorder=0)
    ax.set_axisbelow(True)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)

fig.suptitle("What TypeSafe actually publishes about Jev",
             fontsize=29, fontweight="bold", y=0.986, va="top")
fig.text(0.5, 0.923,
         "Jev output tokens are free; LLM output runs ~5x input. "
         "Figures quoted from TypeSafe AI, September 2026, and vendor-reported.",
         fontsize=14.5, color=MUTED, ha="center", va="top")

fig.legend(handles=[
    mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                   hatch=PROP_HATCH, label="TypeSafe Jev (System One)"),
    mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                   hatch=BAR_HATCH, label="Conversational frontier LLM"),
], loc="upper center", bbox_to_anchor=(0.5, 0.893), ncol=2,
    frameon=False, fontsize=16)

fig.tight_layout(rect=[0, 0, 1, 0.835])
out = "typesafe_jev_system_one_model_use_cases_vs_llms_banner.png"
fig.savefig(out, facecolor="white")
print("wrote", out)
