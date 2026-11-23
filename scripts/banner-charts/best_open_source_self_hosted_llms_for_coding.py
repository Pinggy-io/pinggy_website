#!/usr/bin/env python3
"""Render the November 2026 coding LLM banner and Inkling size comparison.

Run from the desired output directory. Convert the two PNGs to WebP with
cwebp -q 88 as described in README.md. Both language editions use these charts.
"""
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

INK = "#1A1A1A"
GRID = "#CFCFCF"
plt.rcParams.update({
    "font.family": "DejaVu Sans", "font.size": 14,
    "text.color": INK, "axes.edgecolor": "#BFBFBF",
    "axes.labelcolor": INK, "xtick.color": INK, "ytick.color": INK,
})


def bar_panel(ax, entries, title, ticks, ceiling, unit="", reference=None):
    for position, (label, value) in enumerate(entries):
        proprietary = label == reference
        ax.bar(position, value, width=0.56,
               facecolor="#FBE7C6" if proprietary else "#EDEAF7",
               edgecolor="#C8801E" if proprietary else "#6B5DB8",
               hatch="\\\\" if proprietary else "///", linewidth=1.2)
        ax.text(position, value + ceiling * 0.02, f"{value:g}{unit}",
                ha="center", va="bottom", weight="bold")
    ax.set_title(title, loc="left", fontsize=18, weight="bold", pad=12)
    ax.set_xticks(range(len(entries)), [label for label, _ in entries])
    ax.set_ylim(0, ceiling)
    ax.set_yticks(ticks)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.spines[["top", "right"]].set_visible(False)
    ax.tick_params(axis="x", length=0, pad=8)


# Artificial Analysis, November 2026, v5.0.1. Figures are rounded as displayed.
# https://artificialanalysis.ai/embed/llm-performance-leaderboard
index = [("Kimi\nK3.1 Pro", 46), ("Tencent\nHy4", 35),
         ("DeepSeek\n1017 (max)", 33), ("GLM-5.3\n(max)", 32),
         ("Qwen3.8\nFlash-Next", 29), ("Inkling\n2 Mini", 20),
         ("Qwen3.8\n27B (xhigh)", 20)]

# Moonshot's release comparison, including its proprietary reference.
# https://huggingface.co/moonshotai/Kimi-K3.1-Pro#3-evaluation-results
opus = "Claude Opus 5.5\n(hosted)"
terminal = [(opus, 66.4), ("Kimi K3.1 Pro", 65.7),
            ("DeepSeek V4.1\nFlash-1017", 42.3), ("GLM-5.3", 41.8)]

fig, (top, bottom) = plt.subplots(2, 1, figsize=(12, 8.7), dpi=135)
fig.subplots_adjust(left=0.08, right=0.97, top=0.76, bottom=0.085, hspace=0.82)
fig.suptitle("Best Open Source LLMs for Coding\nto Self-Host in 2026",
             y=0.98, fontsize=30, weight="bold")
fig.text(0.5, 0.838, "November 2026  ·  Selected downloadable models and one hosted reference",
         ha="center", color="#666666")
bar_panel(top, index, "Artificial Analysis Intelligence Index v5.0.1",
          [0, 10, 20, 30, 40, 50], 54)
bar_panel(bottom, terminal, "Terminal-Bench 4.0  ·  Moonshot release comparison",
          [0, 25, 50, 75, 100], 100, "%", reference=opus)
fig.savefig("coding_llms_november_2026_banner.png", facecolor="white")
plt.close(fig)

# Language weights only, decimal GB, as listed by the people who built the GGUFs.
# https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF
sizes = [("IQ4_NL", 17.6), ("Q8_0", 27.8), ("BF16", 52.2)]
fig, ax = plt.subplots(figsize=(11, 5.2), dpi=150)
fig.subplots_adjust(left=0.085, right=0.97, top=0.69, bottom=0.12)
fig.suptitle("Inkling 2 Mini download sizes", y=0.95, fontsize=29, weight="bold")
fig.text(0.5, 0.79, "llama.cpp language weights  ·  Vision projector and runtime memory excluded",
         ha="center", color="#666666")
bar_panel(ax, sizes, "GGUF file size", [0, 20, 40, 60], 60, " GB")
fig.savefig("inkling_2_mini_gguf_sizes.png", facecolor="white")
plt.close(fig)
