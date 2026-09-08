#!/usr/bin/env python3
"""
Banner chart for content/blog/what_ai_coding_agents_pick_for_your_stack.md

Source: Armature, "Which tools do Claude Code, Codex and Cursor choose? We
measured 17k runs to find out" (armature.tech/blog/which-tools-coding-agents-install,
published Sep 3 2026). 16,893 sessions run, 5,292 valid sessions kept for the
published analysis. All figures below are the ones cited in the post body.

Usage (see README.md in this folder for the full workflow):
    python what_ai_coding_agents_pick_for_your_stack.py
    cwebp -q 88 what_ai_coding_agents_pick_for_your_stack_banner.png \
      -o what_ai_coding_agents_pick_for_your_stack_banner.webp

House style (matches the other blog banners): light-lavender hatched bars with
a purple edge, crimson dots on a dashed stem for a panel on a different scale,
bold near-black title, recessive dashed grid, no top/right spines.
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

# ---- house-style tokens ---------------------------------------------------
BAR_FACE = "#EDEAF7"   # very light lavender
BAR_EDGE = "#6B5DB8"   # purple
BAR_HATCH = "///"
DOT_COLOR = "#E4322B"  # crimson
INK = "#1A1A1A"
GRID = "#CFCFCF"
MUTED = "#666666"
plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 13,
    "axes.edgecolor": "#BFBFBF",
    "text.color": INK,
    "axes.labelcolor": INK,
    "xtick.color": INK,
    "ytick.color": INK,
})

# ---- Panel 1 data: how often each agent searches the web before picking ---
# a tool, per session. Claude Code's baseline is ~30%, rising to ~80% in
# sectors it has less prior exposure to; the chart uses the overall baseline
# figure cited alongside Codex and Cursor's headline numbers.
agents = ["Claude Code", "Cursor", "Codex"]
web_search_pct = [30, 67, 94]

# ---- Panel 2 data: mentioned constantly by the agents, picked almost never.
# Left axis (lavender bars) = number of session mentions. Right axis (crimson
# dots) = the share of those mentions that turned into an actual pick.
mention_labels = ["PayPal", "LangChain", "Netlify"]
mentions = [139, 194, 152]
picks = [0, 4, 6]
pick_rate = [p / m * 100 for p, m in zip(picks, mentions)]


def panel1(ax):
    x = list(range(len(agents)))
    for xi, v in zip(x, web_search_pct):
        ax.bar(xi, v, width=0.55, facecolor=BAR_FACE, edgecolor=BAR_EDGE,
               hatch=BAR_HATCH, linewidth=1.2, zorder=3)
        ax.text(xi, v + 2, f"{v}%", ha="center", va="bottom",
                 fontsize=15, fontweight="bold")
    ax.set_title("Web search rate before picking a tool",
                  fontsize=16, fontweight="bold", pad=14)
    ax.set_xticks(x)
    ax.set_xticklabels(agents, fontsize=13)
    ax.set_ylim(0, 105)
    ax.set_yticks([0, 25, 50, 75, 100])
    ax.set_yticklabels(["0%", "25%", "50%", "75%", "100%"])
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.set_xlim(-0.6, len(agents) - 0.4)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)


def panel2(ax):
    x = list(range(len(mention_labels)))
    peak = max(mentions)
    for xi, v in zip(x, mentions):
        ax.bar(xi, v, width=0.55, facecolor=BAR_FACE, edgecolor=BAR_EDGE,
               hatch=BAR_HATCH, linewidth=1.2, zorder=3)
        ax.text(xi, v + peak * 0.025, f"{v} mentions", ha="center",
                 va="bottom", fontsize=11.5, fontweight="bold")
    ax.set_ylim(0, peak * 1.22)
    ax.set_yticks([])
    ax.set_xticks(x)
    ax.set_xticklabels(mention_labels, fontsize=13)
    ax.set_xlim(-0.6, len(mention_labels) - 0.4)
    for s in ("top", "right", "left"):
        ax.spines[s].set_visible(False)
    ax.set_title("Mentioned a lot, picked almost never",
                  fontsize=16, fontweight="bold", pad=14)

    ax2 = ax.twinx()
    for xi, v in zip(x, pick_rate):
        ax2.plot([xi, xi], [0, v], color=DOT_COLOR, linewidth=1.6,
                  linestyle="--", zorder=2)
        ax2.scatter([xi], [v], color=DOT_COLOR, s=110, zorder=4)
        ax2.text(xi + 0.14, v, f"{v:.1f}% picked", color=DOT_COLOR,
                  fontsize=11, fontweight="bold", va="center")
    ax2.set_ylim(0, max(pick_rate) * 3.2 + 1)
    ax2.set_yticks([])
    for s in ("top", "right", "left"):
        ax2.spines[s].set_visible(False)


fig = plt.figure(figsize=(12.8, 7.2), dpi=150)
fig.patch.set_facecolor("white")
fig.suptitle("What Claude Code, Codex, and Cursor Actually Pick",
              fontsize=25, fontweight="bold", y=0.975, va="top")
fig.text(0.5, 0.895,
          "5,292 valid coding-agent sessions across 75 repos  ·  "
          "Armature, Sep 2026",
          fontsize=11.5, color=MUTED, ha="center")

mention_patch = mpatches.Patch(facecolor=BAR_FACE, edgecolor=BAR_EDGE,
                                hatch=BAR_HATCH, label="Times mentioned")
rate_patch = mpatches.Patch(facecolor=DOT_COLOR, edgecolor=DOT_COLOR,
                             label="Share of mentions actually picked")
fig.legend(handles=[mention_patch, rate_patch], loc="upper center",
           bbox_to_anchor=(0.5, 0.825), ncol=2, frameon=False, fontsize=11)

gs = fig.add_gridspec(1, 2, wspace=0.28, left=0.055, right=0.95,
                      top=0.70, bottom=0.11)
ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
panel1(ax1)
panel2(ax2)

out = "what_ai_coding_agents_pick_for_your_stack_banner.png"
fig.savefig(out, dpi=150, facecolor="white")
print("wrote", out)
