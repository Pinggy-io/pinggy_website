"""Render the model-download-size chart in the local LLM hardware guide.

Source: Ollama registry manifests for the nine default four-bit tags linked in
the article (Q4_K_M, or MXFP4 for gpt-oss). Sizes are the sum of all layers in
decimal GB, so Qwen3.8 27B includes its vision projector. Keep these numbers in
sync with the model table in content/blog/best_hardware_for_self_hosting_local_llms*.md.

This body chart uses the copper-on-paper palette of the post's other two body
images (not the lavender banner style), so the three read as one set.

    python best_hardware_for_self_hosting_local_llms.py [--lang es] [--font-dir DIR]

--font-dir may point at a folder with Sora and Azeret Mono .ttf files
(sora-latin-400/700/800-normal.ttf, azeret-mono-latin-700-normal.ttf); without
it matplotlib's default sans is used. Convert the PNG to WebP with cwebp.
"""
import argparse
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--lang", choices=("en", "es"), default="en")
parser.add_argument("--font-dir", default=None)
args = parser.parse_args()
spanish = args.lang == "es"
suffix = "_es" if spanish else ""

sans, mono = "DejaVu Sans", "DejaVu Sans Mono"
if args.font_dir:
    for ttf in Path(args.font_dir).glob("*.ttf"):
        font_manager.fontManager.addfont(str(ttf))
    names = {f.name for f in font_manager.fontManager.ttflist}
    sans = "Sora" if "Sora" in names else sans
    mono = "Azeret Mono" if "Azeret Mono" in names else mono

COPPER, COPPER_DARK, COPPER_SOFT = "#b4652a", "#8a4a1c", "#f6ebe1"
INK, MUTED, RULE, PAPER = "#1c1b19", "#6b655c", "#ddd5c9", "#f8f4ee"

models = ["Qwen3 8B", "Qwen3 14B", "gpt-oss 20B (MoE)", "Qwen3.8 27B", "Qwen3 32B",
          "Llama 3.3 70B", "gpt-oss 120B (MoE)", "Qwen3.5 122B-A10B (MoE)", "Llama 3.1 405B"]
download_gb = [5.2, 9.3, 13.8, 17.7, 20.2, 42.5, 65.4, 81.4, 243.1]

title = "¿Cuánta memoria necesita un LLM local?" if spanish else "How much memory does a local LLM need?"
subtitle = ("Descargas de Ollama a 4 bits en GB, antes de la caché KV y los búferes del motor" if spanish
            else "Ollama 4-bit download sizes in GB, before the KV cache and runtime buffers")
xlabel = "Tamaño de la descarga (GB decimales)" if spanish else "Model download size (decimal GB)"

fig, ax = plt.subplots(figsize=(11, 7.2), dpi=150)
fig.patch.set_facecolor(PAPER)
ax.set_facecolor(PAPER)
fig.subplots_adjust(left=0.30, right=0.94, top=0.79, bottom=0.12)
fig.text(0.05, 0.905, title, fontsize=25, weight="heavy", color=INK, family=sans)
fig.text(0.05, 0.85, subtitle, fontsize=13.5, color=MUTED, family=sans)

bars = ax.barh(models, download_gb, height=0.62, color=COPPER_SOFT,
               edgecolor=COPPER, linewidth=1.6, hatch="///")
# Matplotlib draws the hatch in the edge colour; keep the outline a touch darker.
for bar in bars:
    bar.set_edgecolor(COPPER)
ax.invert_yaxis()
labels = [(f"{size:g} GB".replace(".", ",") if spanish else f"{size:g} GB") for size in download_gb]
ax.bar_label(bars, labels=labels, padding=6, fontsize=12.5, weight="bold", color=INK, family=mono)
ax.set_xlim(0, 280)
ax.set_xticks([0, 50, 100, 150, 200, 250])
ax.tick_params(axis="both", length=0, labelsize=12.5, pad=8, colors=INK)
for label in ax.get_yticklabels():
    label.set_family(sans)
for label in ax.get_xticklabels():
    label.set_family(mono)
    label.set_color(MUTED)
ax.grid(axis="x", color=RULE, linestyle="--", linewidth=0.9)
ax.set_axisbelow(True)
ax.set_xlabel(xlabel, fontsize=12, labelpad=9, color=MUTED, family=sans)
for spine in ax.spines.values():
    spine.set_visible(False)
fig.savefig(f"local_llm_model_sizes{suffix}.png", facecolor=PAPER)
