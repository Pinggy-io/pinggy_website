"""Render the model-download sizes in the local LLM hardware guide.

Source: the five Ollama library tags linked in the article, November 21, 2026.
Run in the desired output directory and convert the PNG to WebP with cwebp.
"""
import argparse

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--lang", choices=("en", "es"), default="en")
spanish = parser.parse_args().lang == "es"
suffix = "_es" if spanish else ""


models = ["Qwen3 8B", "Qwen3 14B", "Qwen3 32B", "Llama 3.3 70B", "Llama 3.1 405B"]
download_gb = [5.2, 9.3, 20, 43, 243]

fig, ax = plt.subplots(figsize=(11, 6.2), dpi=150)
fig.subplots_adjust(left=0.24, right=0.95, top=0.77, bottom=0.15)
fig.text(0.06, 0.90, "¿Cuánta memoria necesita un LLM local?" if spanish else "How much memory does a local LLM need?", fontsize=25, weight="bold")
fig.text(0.06, 0.82, "Descargas Q4_K_M de Ollama en GB, sin la caché de contexto ni los búferes" if spanish else "Ollama Q4_K_M downloads in GB, before the context cache and runtime buffers",
         fontsize=14, color="#484554")
bars = ax.barh(models, download_gb, height=0.58, color="#EDEAF7",
               edgecolor="#6B5DB8", linewidth=1.5, hatch="///")
ax.invert_yaxis()
ax.bar_label(bars, labels=[(f"{size:g} GB".replace(".", ",") if spanish else f"{size:g} GB") for size in download_gb],
             padding=6, fontsize=13, weight="bold")
ax.set_xlim(0, 280)
ax.set_xticks([0, 50, 100, 150, 200, 250])
ax.tick_params(axis="both", length=0, labelsize=13, pad=8)
ax.grid(axis="x", color="#D3CFDD", linestyle="--", linewidth=0.8)
ax.set_axisbelow(True)
ax.set_xlabel("Tamaño de la descarga (GB decimales)" if spanish else "Model download size (decimal GB)", fontsize=12, labelpad=9)
for spine in ax.spines.values():
    spine.set_visible(False)
fig.savefig(f"local_llm_model_sizes{suffix}.png", facecolor="white")
