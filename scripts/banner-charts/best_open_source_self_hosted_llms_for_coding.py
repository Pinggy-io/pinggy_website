#!/usr/bin/env python3
"""Render the coding LLM banner (English and Spanish) for
content/blog/best_open_source_self_hosted_llms_for_coding(.es).md.

Run from the desired output directory. Convert the two PNGs to WebP with
cwebp -q 88 as described in README.md and copy them into
assets/images/best_open_source_self_hosted_llms_for_coding/.
"""
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

INK = "#1A1A1A"
GRID = "#CFCFCF"
plt.rcParams.update({
    "font.family": "DejaVu Sans", "font.size": 13,
    "text.color": INK, "axes.edgecolor": "#BFBFBF",
    "axes.labelcolor": INK, "xtick.color": INK, "ytick.color": INK,
})

# Artificial Analysis, checked 2026-11-26. Intelligence Index v5.0.2 and
# Artificial Analysis's own Terminal-Bench 4.1 run, each model at its highest
# reasoning setting. Index values are rounded as the leaderboard displays them.
# https://artificialanalysis.ai/leaderboards/models
# https://artificialanalysis.ai/methodology/intelligence-benchmarking
OPUS = "opus"
MODELS = [  # key, English label, Spanish label, index, Terminal-Bench 4.1 (%)
    (OPUS, "Claude Opus 5.5\n(hosted)", "Claude Opus 5.5\n(alojado)", 59, 59.1),
    ("kimi", "Kimi\nK3.1 Pro", "Kimi\nK3.1 Pro", 47, 68.2),
    ("hy4", "Tencent\nHy4", "Tencent\nHy4", 35, 37.9),
    ("ds", "DeepSeek V4.1\nFlash-1017", "DeepSeek V4.1\nFlash-1017", 32, 32.3),
    ("glm", "GLM-5.3", "GLM-5.3", 32, 40.9),
    ("ink", "Inkling 2\nSmall", "Inkling 2\nSmall", 31, 13.6),
    ("next", "Qwen3.8\nFlash-Next", "Qwen3.8\nFlash-Next", 28, 24.2),
    ("nan", "Nanbeige4.3\n33B", "Nanbeige4.3\n33B", 20, 29.3),
    ("q27", "Qwen3.8\n27B", "Qwen3.8\n27B", 20, 5.6),
]

TEXT = {
    "en": {
        "title": "Best Open Source LLMs for Coding\nto Self-Host in 2026",
        "sub": "Data: Artificial Analysis  ·  Open-weight models plus one hosted reference",
        "p1": "Artificial Analysis Intelligence Index v5.0.2",
        "p2": "Terminal-Bench 4.1  ·  Artificial Analysis run",
        "out": "open_coding_llms_nov_2026_banner.png",
    },
    "es": {
        "title": "Los mejores LLMs de código abierto\npara programar y autoalojar en 2026",
        "sub": "Datos: Artificial Analysis  ·  Modelos de pesos abiertos y una referencia alojada",
        "p1": "Índice de inteligencia de Artificial Analysis v5.0.2",
        "p2": "Terminal-Bench 4.1  ·  Ejecución de Artificial Analysis",
        "out": "open_coding_llms_nov_2026_banner_es.png",
    },
}


def bar_panel(ax, labels, values, keys, title, ticks, ceiling, unit=""):
    for position, (value, key) in enumerate(zip(values, keys)):
        proprietary = key == OPUS
        ax.bar(position, value, width=0.58,
               facecolor="#FBE7C6" if proprietary else "#EDEAF7",
               edgecolor="#C8801E" if proprietary else "#6B5DB8",
               hatch="\\\\" if proprietary else "///", linewidth=1.2)
        ax.text(position, value + ceiling * 0.02, f"{value:g}{unit}",
                ha="center", va="bottom", weight="bold")
    ax.set_title(title, loc="left", fontsize=17, weight="bold", pad=12)
    ax.set_xticks(range(len(labels)), labels, fontsize=11.5)
    ax.set_ylim(0, ceiling)
    ax.set_yticks(ticks)
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, linestyle="--", linewidth=0.8, color=GRID)
    ax.spines[["top", "right"]].set_visible(False)
    ax.tick_params(axis="x", length=0, pad=8)


for lang, t in TEXT.items():
    labels = [m[1] if lang == "en" else m[2] for m in MODELS]
    keys = [m[0] for m in MODELS]
    fig, (top, bottom) = plt.subplots(2, 1, figsize=(13, 8.7), dpi=135)
    fig.subplots_adjust(left=0.07, right=0.98, top=0.76, bottom=0.09, hspace=0.85)
    fig.suptitle(t["title"], y=0.98, fontsize=29, weight="bold")
    fig.text(0.5, 0.838, t["sub"], ha="center", color="#666666")
    bar_panel(top, labels, [m[3] for m in MODELS], keys, t["p1"],
              [0, 20, 40, 60], 70)
    bar_panel(bottom, labels, [m[4] for m in MODELS], keys, t["p2"],
              [0, 25, 50, 75], 85, "%")
    fig.savefig(t["out"], facecolor="white")
    plt.close(fig)
