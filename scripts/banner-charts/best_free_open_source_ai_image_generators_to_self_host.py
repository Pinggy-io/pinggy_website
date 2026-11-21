#!/usr/bin/env python3
"""Render the November English article's AA-Image-T2I v2.1 open-weights chart.

Source: https://artificialanalysis.ai/image/leaderboard/text-to-image/open-weights
The first eight entries on November 21, 2026, in the published order.
FLUX.2 [dev] has a fixed rating. Other entries have 95% Elo intervals.
Run from the desired output directory, then convert the PNG with cwebp.
"""
import argparse

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--lang", choices=("en", "es"), default="en")
spanish = parser.parse_args().lang == "es"
suffix = "_es" if spanish else ""


# Name, Elo, lower and upper bounds. The anchor has no sampling interval.
rows = [
    ("MiniMax H3-Image", 1066, 1052, 1080),
    ("Qwen-Image-2.1", 1048, 1036, 1060),
    ("FLUX 3 Image Klein", 1041, 1030, 1052),
    ("Fibo 2.0", 1037, 1026, 1048),
    ("Ideogram 4.0 (Quality)", 1027, 1017, 1037),
    ("Ideogram 4.0", 1004, 994, 1014),
    ("Ming-Image-0.1-Design", 1001, 992, 1010),
    ("FLUX.2 [dev]", 1000, None, None),
]

fig, ax = plt.subplots(figsize=(12, 7), dpi=140)
fig.subplots_adjust(left=0.33, right=0.89, top=0.78, bottom=0.13)
fig.text(0.06, 0.91, "Generadores de imágenes de pesos abiertos" if spanish else "Open-weight image generators, ranked", fontsize=30, weight="bold")
fig.text(0.06, 0.84, "Artificial Analysis Text-to-Image Arena v2.1  /  21 de noviembre de 2026" if spanish else "Artificial Analysis Text-to-Image Arena v2.1  /  November 21, 2026",
         fontsize=16, color="#414151")
ax.axvline(1000, color="#898696", linestyle="--", linewidth=1.4, zorder=1)
for y, (name, score, low, high) in enumerate(rows):
    if low is None:
        ax.plot(score, y, marker="D", color="#393543", markersize=8)
    else:
        ax.errorbar(score, y, xerr=[[score-low], [high-score]], fmt="o",
                    color="#6B5DB8", markersize=10, capsize=5, linewidth=2.7)
    ax.text(1085, y, (str(score) if spanish else f"{score:,}"), ha="left", va="center", fontsize=15, weight="bold")
ax.set_yticks(range(len(rows)), [row[0] for row in rows], fontsize=15)
ax.set_ylim(len(rows)-0.45, -0.65)
ax.set_xlim(986, 1093)
ax.set_xticks([1000, 1020, 1040, 1060, 1080])
ax.tick_params(length=0, pad=7)
ax.set_xlabel("Elo  /  intervalos del 95 %  /  rombo: referencia fija" if spanish else "Elo rating  /  whiskers show 95% intervals  /  diamond is the fixed anchor",
              fontsize=12, labelpad=12)
ax.grid(axis="x", color="#D9D7DF", linestyle=":", linewidth=1)
ax.set_axisbelow(True)
for spine in ax.spines.values():
    spine.set_visible(False)
fig.savefig(f"ai_image_arena_elo_nov2026{suffix}.png", facecolor="white")
