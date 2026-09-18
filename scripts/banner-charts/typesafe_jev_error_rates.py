#!/usr/bin/env python3
"""
In-body chart for content/blog/typesafe_jev_system_one_model_use_cases_vs_llms.md

Source: TypeSafe AI's published error-rate charts from the Jev launch,
September 15, 2026. Vendor-reported; LLM comparison data was drawn from
OpenRouter, and TypeSafe notes its own 0% figure "is not empirical" but a
property of schema matching. Figures match the post body, and all 22 values were re-read from
TypeSafe's own chart at native resolution to confirm each printed label.

Structured-output error rate (%):
    Jev 0, luna 0.58, terra 0.58, sol 0.83, astra 1.43, gemini 3.1 pro 1.94,
    gemini 3.8 flash 3.15, opus 5 5.73, fable 5.1 8.25, sonnet 5 13.2,
    haiku 4.5 45.5
Tool-call error rate (%):
    Jev 0, opus 5 0.67, fable 5.1 1.38, haiku 4.5 1.76, sonnet 5 2.07,
    gemini 3.8 flash 2.15, gemini 3.1 pro 3.17, terra 5.5, luna 7.67,
    astra 16.6, sol 17.0

The two panels are STACKED, not side by side. TypeSafe's original puts them in
one row 2048px wide, which leaves each model label about 7px tall once the
image is scaled into the blog's reading column. Full-width panels give each of
the eleven labels room at a readable size. Do not switch this to a 1x2 grid.

Usage (see README.md in this folder for the full workflow):
    /tmp/chartenv/bin/python typesafe_jev_error_rates.py
    cwebp -q 92 typesafe_jev_error_rates.png -o typesafe_jev_error_rates.webp
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"
BAR_EDGE = "#6B5DB8"
BAR_HATCH = "///"
PROP_FACE = "#FBE7C6"   # amber marks Jev, the subject of the post
PROP_EDGE = "#C8801E"
PROP_HATCH = "\\\\\\"
INK = "#1A1A1A"
GRID = "#CFCFCF"
MUTED = "#666666"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 16,
    "axes.edgecolor": "#BFBFBF",
    "text.color": INK,
    "axes.labelcolor": INK,
    "xtick.color": INK,
    "ytick.color": INK,
})

# (label, value, display). `display` is the label exactly as TypeSafe prints it
# on its own chart - %g would render 17.0 as "17", losing the source's precision.
STRUCTURED = [
    ("Jev", 0.0, "0%"), ("luna", 0.58, "0.58%"), ("terra", 0.58, "0.58%"),
    ("sol", 0.83, "0.83%"), ("astra", 1.43, "1.43%"),
    ("gemini 3.1 pro", 1.94, "1.94%"), ("gemini 3.8 flash", 3.15, "3.15%"),
    ("opus 5", 5.73, "5.73%"), ("fable 5.1", 8.25, "8.25%"),
    ("sonnet 5", 13.2, "13.2%"), ("haiku 4.5", 45.5, "45.5%"),
]
TOOL_CALL = [
    ("Jev", 0.0, "0%"), ("opus 5", 0.67, "0.67%"), ("fable 5.1", 1.38, "1.38%"),
    ("haiku 4.5", 1.76, "1.76%"), ("sonnet 5", 2.07, "2.07%"),
    ("gemini 3.8 flash", 2.15, "2.15%"), ("gemini 3.1 pro", 3.17, "3.17%"),
    ("terra", 5.5, "5.5%"), ("luna", 7.67, "7.67%"), ("astra", 16.6, "16.6%"),
    ("sol", 17.0, "17.0%"),
]

PANELS = [
    ("Structured-output error rate (lower is better)", STRUCTURED),
    ("Tool-call error rate (lower is better)", TOOL_CALL),
]

fig, axes = plt.subplots(2, 1, figsize=(13, 11.6), dpi=200)
fig.patch.set_facecolor("white")

for ax, (title, rows) in zip(axes, PANELS):
    labels = [r[0] for r in rows]
    vals = [r[1] for r in rows]
    peak = max(vals)
    for i, v in enumerate(vals):
        jev = labels[i] == "Jev"
        ax.bar(i, v,
               color=PROP_FACE if jev else BAR_FACE,
               edgecolor=PROP_EDGE if jev else BAR_EDGE,
               hatch=PROP_HATCH if jev else BAR_HATCH,
               linewidth=1.6, width=0.68, zorder=3)
        ax.text(i, v + peak * 0.035, rows[i][2], ha="center", va="bottom",
                fontsize=16, fontweight="bold")

    ax.set_ylim(0, peak * 1.20)
    ax.set_title(title, fontsize=21, fontweight="bold", pad=16)
    ax.set_xticks(range(len(labels)))
    ax.set_xticklabels(labels, fontsize=15, rotation=30, ha="right")
    ax.set_ylabel("error rate (% of responses)", fontsize=15.5, labelpad=10)
    ax.tick_params(axis="y", labelsize=14)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID, zorder=0)
    ax.set_axisbelow(True)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)

fig.suptitle("Where the structured-output claim actually lands",
             fontsize=29, fontweight="bold", y=0.988, va="top")
fig.text(0.5, 0.951,
         "Eleven models, TypeSafe AI's own figures, September 2026.\n"
         "The spread inside one vendor is wider than the gap between vendors.",
         fontsize=15, color=MUTED, ha="center", va="top", linespacing=1.5)

fig.legend(handles=[
    mpatches.Patch(facecolor=PROP_FACE, edgecolor=PROP_EDGE,
                   hatch=PROP_HATCH, label="TypeSafe Jev (System One)"),
    mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                   hatch=BAR_HATCH, label="Frontier LLM"),
], loc="upper center", bbox_to_anchor=(0.5, 0.901), ncol=2,
    frameon=False, fontsize=16)

fig.tight_layout(rect=[0, 0, 1, 0.875])
fig.subplots_adjust(hspace=0.55)
out = "typesafe_jev_error_rates.png"
fig.savefig(out, facecolor="white")
print("wrote", out)
