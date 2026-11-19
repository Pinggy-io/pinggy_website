---
title: "Las mejores alternativas open source a Jev: 7 modelos de decisión autoalojados"
slug: "mejores-alternativas-open-source-a-jev"
description: "Los modelos de decisión de pesos abiertos ya superan a Jev de TypeSafe en las dos tablas independientes. Karpo Decision 31B, GLiDE, vLLM-SR d3, Mammoth-1, pplx-decider v1.3, Kev y Laya comparados por sus puntuaciones en Decision Index 0.4.1 y Artificial Analysis v2, sus licencias y la GPU que necesita cada uno para autoalojarlo."
date: 2026-09-23T10:30:00+05:30
lastmod: 2026-11-18T10:30:00+05:30
draft: false
og_image: "images/best_open_source_jev_alternatives_self_hosted_decision_models/best_open_source_jev_alternatives_self_hosted_decision_models_banner.webp"
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Modelos de IA"
tags: ["AI Models", "open source", "self-hosted AI", "llm", "developer tools"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gc3VzdGl0dWlyIEpldiBkZSBUeXBlU2FmZSBwb3IgdW4gbW9kZWxvIGRlIGRlY2lzacOzbiBvcGVuIHNvdXJjZSIsCiAgImRlc2NyaXB0aW9uIjogIkd1w61hIHBhc28gYSBwYXNvIHBhcmEgZWxlZ2lyLCBlamVjdXRhciB5IGV2YWx1YXIgdW5hIGFsdGVybmF0aXZhIGRlIHBlc29zIGFiaWVydG9zIGEgSmV2LCBlbCBtb2RlbG8gU3lzdGVtIE9uZSBkZSBUeXBlU2FmZSwgZW4gbm92aWVtYnJlIGRlIDIwMjY6IEthcnBvIERlY2lzaW9uIDMxQiwgR0xpREUsIHZMTE0tU1IgZDMsIE1hbW1vdGgtMSB5IEVsZXBoYW50LTEsIHBwbHgtZGVjaWRlciB2MS4zLCBLZXYgeSBMYXlhLCBjb24gc3VzIHB1bnR1YWNpb25lcyBlbiBEZWNpc2lvbiBJbmRleCB5IEFydGlmaWNpYWwgQW5hbHlzaXMsIHN1cyBsaWNlbmNpYXMsIGxhIEdQVSBxdWUgbmVjZXNpdGFuIHkgY8OzbW8gcHJvYmFyIHVuIHNlcnZpZG9yIGRlIGRlY2lzaW9uZXMgbG9jYWwuIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMThUMTA6MzA6MDArMDU6MzAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRWxpZ2UgcHJpbWVybyBwb3IgbWVtb3JpYSBkZSBHUFUiLAogICAgICAidGV4dCI6ICJUb2RvcyBsb3MgbW9kZWxvcyBhYmllcnRvcyBxdWUgc3VwZXJhbiBjb24gY2xhcmlkYWQgYSBKZXYgMS4xNCBlbiBlbCBEZWNpc2lvbiBJbmRleCBzb24gZmluZS10dW5lcyBkZSAyN0IgYSAzMUIgY29uIDUwIGEgNjMgR0IgZGUgcGVzb3MgZW4gYmYxNiwgYXPDrSBxdWUgbmVjZXNpdGFuIHVuYSBHUFUgZGUgY2xhc2UgODAgR0I6IEthcnBvIERlY2lzaW9uIDMxQiwgR0xpREUgMjdCLCB2TExNLVNSIGQzLXVsdHJhLCBNYW1tb3RoLTEsIHBwbHgtZGVjaWRlciB2MS4zIHkgS2V2IDI3Qi4gQ29uIHVuYSB0YXJqZXRhIGRlIDI0IEdCLCBsYXMgb3BjaW9uZXMgc29uIEdMaURFIDlCLCBFbGVwaGFudC0xIHkgZDMtZmxhc2guIEVuIENQVSBmdW5jaW9uYSBMYXlhLCBwZXJvIHB1bnTDumEgY2VyY2EgZGVsIGZvbmRvIGRlIGxhIHRhYmxhLCBhc8OtIHF1ZSBjdWVudGEgY29uIGhhY2VybGUgZmluZS10dW5pbmcuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkxlZSBsYSBsaWNlbmNpYSBhbnRlcyBxdWUgbGEgdGFibGEiLAogICAgICAidGV4dCI6ICJLYXJwbyBEZWNpc2lvbiwgcHBseC1kZWNpZGVyLCB2TExNLVNSIGQzLCBLZXYgeSBMYXlhIHNvbiBBcGFjaGUtMi4wLCB5IE1hbW1vdGgtMSB5IEVsZXBoYW50LTEgc29uIE1JVC4gR0xpREUgc2UgZGlzdHJpYnV5ZSBjb24gbGEgRmFzdGlubyBDb21tdW5pdHkgTGljZW5zZSwgcXVlIGV4aWdlIHVuIGFjdWVyZG8gY29tZXJjaWFsIGFwYXJ0ZSBwYXJhIGVsIHVzbyBlbiBwcm9kdWNjacOzbiBwb3IgcGFydGUgZGUgdW5hIGVtcHJlc2EgY29uIG3DoXMgZGUgMTAgbWlsbG9uZXMgZGUgZMOzbGFyZXMgZGUgaW5ncmVzb3MgYW51YWxlcy4gSDJPIExpZ2h0bmluZyB5IEJlc3Bva2UgTmltYmxlIHNvbiBubyBjb21lcmNpYWxlcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29uc2VydmEgdHUgY2xpZW50ZSBkZSBKZXYgeSBjYW1iaWEgbGEgYmFzZSBVUkwiLAogICAgICAidGV4dCI6ICJLYXJwbyBEZWNpc2lvbiwgR0xpREUsIEtldiwgTGF5YSB5IGVsIG1vZG8gRW5naW5lIGRlIHZMTE0gU2VtYW50aWMgUm91dGVyIHNpcnZlbiBlbCBjb250cmF0byBQT1NUIC92MS9zeXN0ZW1vbmUgZGUgVHlwZVNhZmUsIGFzw60gcXVlIHVuIGNsaWVudGUgZGUgSmV2IGV4aXN0ZW50ZSBvIGVsIHR5cGVzYWZlLXNkayBmdW5jaW9uYW4gY29udHJhIHVuIHNlcnZpZG9yIGxvY2FsIGNvbiBzb2xvIGNhbWJpYXIgbGEgYmFzZSBVUkwuIHBwbHgtZGVjaWRlciB0cmFlIGVuIHN1IGx1Z2FyIHVuYSBBUEkgZGUgUHl0aG9uIGRlY2lkZSgpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQcnVlYmEgdW5hIGNvcGlhIGFsb2phZGEgYW50ZXMgZGUgYWxxdWlsYXIgdW5hIEdQVSIsCiAgICAgICJ0ZXh0IjogIkRlY2lkZXIgdjEuMyBkZSBQZXJwbGV4aXR5IGVzIGdyYXRpcyBlbiBPcGVuUm91dGVyLCB2TExNLVNSIHNpcnZlIGQzLXVsdHJhIGVuIHVuYSBBUEkgZ3JhdHVpdGEgZW4gZGVjaXNpb24udmxsbS1zci5haSwgeSBCYXNldGVuIGFsb2phIE1hbW1vdGgtMS4gUGFzYSB1bm9zIGNpZW50b3MgZGUgdHVzIHByb3BpYXMgZGVjaXNpb25lcyBldGlxdWV0YWRhcyBwb3IgbGEgY29waWEgYWxvamFkYSB5LCBzaSBsb3MgbsO6bWVyb3MgYWd1YW50YW4sIGF1dG9hbG9qYSBsb3MgbWlzbW9zIHBlc29zLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSZWFqdXN0YSBsYSB0ZW1wZXJhdHVyYSBkZSBjb25maWFuemEgY29uIHR1cyBwcm9waW9zIGRhdG9zIiwKICAgICAgInRleHQiOiAiQXJ0aWZpY2lhbCBBbmFseXNpcyBlbmNvbnRyw7MgcXVlIGxvcyBtb2RlbG9zIGRlIGRlY2lzacOzbiBzb24gZGVtYXNpYWRvIGNvbmZpYWRvcyBlbiBwcmVndW50YXMgZGUgY29ub2NpbWllbnRvIGRpZsOtY2lsZXMsIHkgUGVycGxleGl0eSBkaWNlIHF1ZSB1bmEgc29sYSB0ZW1wZXJhdHVyYSBubyBwdWVkZSB2YWxlciBwYXJhIHRvZGFzIGxhcyB0YXJlYXMuIEFqdXN0YSBsYSB0ZW1wZXJhdHVyYSBvIHVtYnJhbGVzIHBvciB0YXJlYSBjb24gdHLDoWZpY28gcmVzZXJ2YWRvIGFudGVzIGRlIHF1ZSB1bmEgcHJvYmFiaWxpZGFkIGRlY2lkYSBzaSBhY3R1YXIgbyBlc2NhbGFyLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJQcnVlYmEgZWwgc2Vydmlkb3IgZGUgZGVjaXNpb25lcyBsb2NhbCBkZXNkZSBmdWVyYSBkZSB0dSBtw6FxdWluYSIsCiAgICAgICJ0ZXh0IjogIkEgdW4gZW5kcG9pbnQgZGUgZGVjaXNpb25lcyBzdWVsZSBsbGFtYXJsbyB1biB3ZWJob29rLCB1bmEgYXBwIGRlIHN0YWdpbmcgbyB1biBjb21wYcOxZXJvLCB5IG5pbmd1bm8gcHVlZGUgbGxlZ2FyIGEgMTI3LjAuMC4xLiBDb24gZWwgc2Vydmlkb3IgZXNjdWNoYW5kbyBlbiBlbCBwdWVydG8gODAwOSwgZWplY3V0YSBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6ODAwOSBmcmVlLnBpbmdneS5pbyBwYXJhIG9idGVuZXIgdW5hIFVSTCBIVFRQUyBww7pibGljYSBxdWUgY3VhbHF1aWVyIGxsYW1hZG9yIGV4dGVybm8gcHVlZGUgdXNhciwgc2luIHJlZGlyZWNjacOzbiBkZSBwdWVydG9zIG5pIGNhbWJpb3MgZW4gZWwgZmlyZXdhbGwuIENvbmZpZ3VyYSBhbnRlcyBsYSB2YXJpYWJsZSBkZSBBUEkga2V5IGRlbCBzZXJ2aWRvciwgcG9ycXVlIGVzdG9zIHNlcnZpZG9yZXMgZXN0w6FuIGFiaWVydG9zIHBvciBkZWZlY3RvLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---
{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/best_open_source_jev_alternatives_self_hosted_decision_models_banner.webp" "Las mejores alternativas open source a Jev: 5 modelos de decisión autoalojados" >}}

Un modelo Apache-2.0 está ahora en lo más alto del Decision Index de la comunidad. karpo-decision-31B, un fine-tune de Gemma 4 31B de MachinePulse, saca **73.86** en la tabla del 17 de noviembre, y el propio Jev 1.14 de TypeSafe queda en el puesto 67 con **60.24**. De las 66 entradas por encima de Jev, 65 funcionan con pesos que puedes descargar.

No es el mismo panorama que encontró TypeSafe cuando lanzó {{< link href="/blog/typesafe_jev_system_one_model_use_cases_vs_llms/" >}}Jev{{< /link >}} el 15 de septiembre de 2026. Las primeras reimplementaciones abiertas aparecieron en más o menos un día, <a href="https://www.latent.space/p/ainews-here-are-6-clones-of-jev-in" target="_blank">AINews contó seis en dos días</a>, y copiaban la interfaz de Jev mucho mejor que su precisión: en el benchmark de clasificadores de jabr, con 49 tareas, el mejor participante abierto sacaba 0.704 frente al 0.966 de Jev. La brecha se cerró con algo más pesado. Perplexity, Baseten, Fastino, el equipo de vLLM Semantic Router y un montón de laboratorios pequeños tomaron bases abiertas de 27B a 31B, ajustaron todos los pesos con millones de decisiones tipadas y pusieron una capa de lectura sobre las opciones de respuesta donde antes estaba el generador de texto.

Los siete modelos de abajo están ordenados por su puntuación Full en el <a href="https://huggingface.co/spaces/multimodalart/jev-decision-index" target="_blank">Decision Index 0.4.1</a>, con la puntuación del <a href="https://artificialanalysis.ai/articles/decision-index-v2" target="_blank">Artificial Analysis Decision Index v2</a> al lado cuando la hay. Puntuaciones, estrellas y licencias comprobadas el 18 de noviembre de 2026. Este campo se reordena cada semana, así que vuelve a mirar las tablas antes de comprometerte.

{{% tldr %}}

**Los pesos abiertos ya superan a Jev en precisión. Siguen perdiendo en hardware.**

- **<a href="https://huggingface.co/MachinePulseAI/karpo-decision-31B" target="_blank">Karpo Decision 31B</a>** (Apache-2.0) es el primero del Decision Index con 73.86, con una mediana de 94 ms en una RTX PRO 6000. Solo los pesos ocupan 62.5 GB.
- **<a href="https://huggingface.co/fastino/GLiDE-27B" target="_blank">GLiDE 27B</a>** es segundo con 73.37 y saca 73 en Artificial Analysis, pero su licencia exige un acuerdo comercial por encima de 10 millones de dólares de ingresos anuales.
- **<a href="https://huggingface.co/vllm-sr/d3-ultra" target="_blank">vLLM-SR d3-ultra</a>** (Apache-2.0, 70.18) es la opción para imágenes, vídeo y documentos de 131k tokens. Su hermano de 9B, d3-flash, tiene 101,936 descargas.
- **<a href="https://huggingface.co/baselabs/mammoth-1" target="_blank">Mammoth-1</a>** (MIT) saca 71 en Artificial Analysis y da la misma respuesta a preguntas reformuladas el 99% de las veces. Elephant-1, de 9B, empata ahí con Jev en 66.
- **<a href="https://huggingface.co/perplexity-ai/pplx-decider-v1.3" target="_blank">pplx-decider v1.3</a>** (Apache-2.0) es gratis en OpenRouter, así que puedes probarlo con tu tráfico antes de comprar una GPU.
- **<a href="https://github.com/jaredpalmer/kev" target="_blank">Kev 27B</a>** queda a la par de Jev (59.56) y ejecuta el propio SDK de TypeSafe sin cambios.
- **<a href="https://github.com/NandhaKishorM/laya" target="_blank">Laya</a>** tiene 35,664 estrellas en GitHub, el que más del campo con mucha diferencia, y queda en el puesto 294 de 308. Funciona en CPU; hazle fine-tuning o sáltatelo.

{{% /tldr %}}

## Los modelos abiertos alcanzaron a Jev en dos meses

Un modelo System One es estrecho. Le das un bloque de estado más preguntas con tipos de respuesta declarados - un `choice` entre hasta 255 opciones, un `score` en una escala ordenada, un `noul` con la probabilidad de sí/no - y devuelve una probabilidad para cada respuesta permitida en una sola pasada, en lugar de decodificar tokens. La interfaz es pública en la <a href="https://docs.typesafe.ai/api" target="_blank">documentación de la API</a> de TypeSafe, así que se copió en un fin de semana. El modelo y los datos de entrenamiento no lo son.

A los clones de septiembre les faltaban datos y cómputo. Base Labs entrenó Mammoth-1 con 6.21 millones de ejemplos de decisión en 72 GPU GB300, con un término de calibración Brier en la pérdida y una opción "no lo sé" entrenada. Karpo pone una capa de lectura lineal de 255 x 5,376 sobre Gemma 4 31B, lee el estado una vez y le da a cada pregunta su propia rama, que ve el estado pero nunca las opciones de otra pregunta. Son fine-tunes completos de modelos de 27B a 31B, no un LoRA sobre un 4B ni una cabeza sobre un encoder congelado.

El formato de red sobrevivió. Karpo, GLiDE, Kev, Laya y el modo Engine de vLLM Semantic Router sirven el contrato `POST /v1/systemone` de TypeSafe, así que un cliente de Jev existente se muda con una base URL nueva. pplx-decider trae en su lugar una API de Python `decide()`.

El precio es el hardware. Todos los modelos abiertos que superan a Jev con claridad pesan de 50 a 63 GB en bf16 y piden una GPU de clase 80 GB. Los más pequeños que llegan a la puntuación de Jev son de 9B - GLiDE 9B (62.48), Jeffan-9B (61.48) y Elephant-1 (60.26) - con unos 16 a 19 GB de pesos. Por debajo, nada abierto iguala todavía a Jev: los mejores modelos de menos de 5B, KnowLine 4B Gen5.5 de PelaAI y Decider Flash v1.3 de Perplexity, sacan alrededor de 55.

### Tabla comparativa

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Modelo</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Licencia</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tamaño y base</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Decision Index 0.4.1 (de 308)</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Artificial Analysis v2 (de 25)</th>
  <th style="border:1px solid #ddd;padding:0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Pesos en bf16</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Karpo Decision 31B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">31B, Gemma 4 31B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">73.86 (1.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">No aparece</td>
  <td style="border:1px solid #ddd;padding:0.4em;">62.5 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>GLiDE 27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Fastino Community (tope de ingresos de 10M $)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B, Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">73.37 (2.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">73 (4.º, v1.2 alojado)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">52.2 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>vLLM-SR d3-ultra</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">26B, Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">70.18 (14.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">No aparece</td>
  <td style="border:1px solid #ddd;padding:0.4em;">~52 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Mammoth-1 / Elephant-1</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">MIT</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B / 9B, Qwen3.5</td>
  <td style="border:1px solid #ddd;padding:0.4em;">68.44 (22.º) / 60.26 (66.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">71 (5.º) / 66 (13.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">~55 GB / ~19 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>pplx-decider v1.3</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B, Qwen3.8-27B (Flash: 4B)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">67.67 (30.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">70 (7.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">54 GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Kev 27B</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">27B, Qwen3.8-27B</td>
  <td style="border:1px solid #ddd;padding:0.4em;">59.56 (74.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">No aparece</td>
  <td style="border:1px solid #ddd;padding:0.4em;">51.3 GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em;"><strong>Laya</strong></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Apache-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em;">421M, ModernBERT-large</td>
  <td style="border:1px solid #ddd;padding:0.4em;">9.21 (294.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">No aparece</td>
  <td style="border:1px solid #ddd;padding:0.4em;">Funciona en CPU</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em;"><em>TypeSafe Jev 1.14 (referencia)</em></td>
  <td style="border:1px solid #ddd;padding:0.4em;">Cerrado, alojado</td>
  <td style="border:1px solid #ddd;padding:0.4em;">No publicado</td>
  <td style="border:1px solid #ddd;padding:0.4em;">60.24 (67.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">66 (14.º)</td>
  <td style="border:1px solid #ddd;padding:0.4em;">-</td>
</tr>
</tbody>
</table>

Los pesos marcados con `~` son el número de parámetros por dos bytes; el resto sale de cada model card o del Hub.

## Decision Index, Artificial Analysis y OpenRouter miden cosas distintas

**Decision Index 0.4.1** es la tabla de la comunidad en Hugging Face, mantenida por multimodalart y ejecutada en una RTX PRO 6000 por participante. Desde la edición 0.4, su puntuación Full es un 60% de pruebas privadas de las mismas habilidades que la suite pública y un 40% de tareas privadas de dominios nuevos; los 37 benchmarks públicos se siguen mostrando pero ya no cuentan, y las filas con las que un participante entrenó cuentan como fallos. Tiene 308 entradas, casi todas fine-tunes abiertos, así que es el mejor mapa del campo abierto.

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/decision_index_open_models_vs_jev.webp" "Gráfico de barras del Decision Index 0.4.1: karpo-decision-31B 73.86, GLiDE 27B 73.37, d3-ultra 70.18, Mammoth-1 68.44, pplx-decider v1.3 67.67, Kev 27B 59.56 y Laya 9.21, con Jev 1.14 como línea de referencia en 60.24" >}}

*Datos: {{< link href="https://huggingface.co/spaces/multimodalart/jev-decision-index" >}}Decision Index 0.4.1{{< /link >}}, tabla del 17 de noviembre de 2026.*

**Artificial Analysis Decision Index v2**, publicado el 8 de noviembre, puntúa 25 modelos de decisión y algunos modelos de chat. Ahora el 45% son datos privados, y su métrica principal, el Decision Score, es 50 x (1 + accuracy - Brier score), así que una respuesta equivocada con mucha confianza cuesta más que una dudosa. El d1.2-ultra alojado de Liquid encabeza los modelos de decisión con 75, Drex Max v1.1 de Nace.AI y GLiDE v1.2 de Fastino le siguen con 73, Mammoth está en 71, Decider v1.3 en 70 y Jev 1.14 en 66 junto a Elephant. Los modelos de chat siguen puntuando más alto - Claude Haiku 5.5 (Max) saca 77 - pero a 32.65 segundos por tarea frente a los 92 ms de Jev.

**<a href="https://openrouter.ai/rankings/decisions" target="_blank">El ranking de decisiones de OpenRouter</a>** mide uso, no calidad, y el uso sigue yendo a Jev. En la última semana, hasta el 17 de noviembre, Jev 1.13 sirvió 950M de peticiones y Jev 1.14, 614M; el modelo de pesos abiertos más usado, Decider v1.2 de Perplexity, sirvió 268M. La cuota de TypeSafe en peticiones de decisión fue del 68.5% en la semana que empezó el 9 de noviembre.

Las tablas discrepan de formas útiles. Elephant-1 es 13.º de 25 en Artificial Analysis y 66.º de 308 en el Decision Index, y d3-ultra y Karpo ni siquiera aparecen en Artificial Analysis. La cabeza del Decision Index también cambia rápido: Mammoth-1 salió el 21 de octubre como número 1 de la edición 0.4 con 71.24 y hoy es 22.º.

## 1. Karpo Decision 31B: primero en el Decision Index

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/karpo_decision_31b_hf.webp" "La model card de karpo-decision-31B en Hugging Face, con las insignias de número 1 en el Decision Index 0.4.1 y licencia Apache-2.0" >}}

*Captura: huggingface.co/MachinePulseAI/karpo-decision-31B, noviembre de 2026.*

Karpo Decision es el modelo más nuevo de la lista y el que hay que batir. MachinePulse subió el de 31B a Hugging Face el 5 de noviembre bajo Apache-2.0: Gemma 4 31B ajustado de punta a punta, con una capa de lectura lineal sobre 255 códigos de opción donde estaba el generador de texto. Lee texto e imágenes, incluida una captura de una página, admite 32,768 tokens por secuencia y divide una petición más larga por preguntas en lugar de truncarla. Trae una API de Python y un servidor `POST /v1/systemone`.

Su 73.86 de puntuación Full se reparte en 70.7 en pruebas privadas de habilidades conocidas y **78.6 en tareas privadas de dominios nuevos**, la parte que premia generalizar en vez de memorizar. La tabla midió una mediana de 94 ms por petición y un error de calibración de 4.8 puntos. GLiDE 27B queda dentro de la franja de empate de 0.9 puntos de la tabla, así que técnicamente comparten el primer puesto.

Estos son los comandos de la model card. No los he ejecutado, porque piden una sola GPU con sitio para 62.5 GB de pesos:

```bash
pip install "karpo-decision @ git+https://github.com/machinepulse-ai/karpo-decision"
CKPT=$(python -c 'from huggingface_hub import snapshot_download; print(snapshot_download("MachinePulseAI/karpo-decision-31B"))')
torchrun --standalone --nproc_per_node 1 -m karpo_decision.serve.server --checkpoint "$CKPT" --port 18440
```

El 12 de noviembre MachinePulse añadió hermanos de 12B (Gemma 4 12B), 9B, 4B, 2B y 0.8B (Qwen3.5), ninguno en la tabla todavía. Dos advertencias. El modelo tiene dos semanas, viene de una empresa pequeña sin informe técnico, y su model card atribuye su diseño a otros tres participantes (FlexDM, jev-brain y Sieve-31B-v3); buena parte de la cabeza de esta tabla es gente remezclando las recetas de otros. Y cargarlo como un modelo de chat normal no reproduce sus respuestas; usa el paquete.

## 2. GLiDE 27B: segundo puesto, con tope de ingresos

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/glide_27b_hf.webp" "La model card de GLiDE 27B de Fastino en Hugging Face, con la licencia fastino-community" >}}

*Captura: huggingface.co/fastino/GLiDE-27B, noviembre de 2026.*

GLiDE viene de Fastino, el equipo detrás de los modelos de extracción GLiNER2, en cinco tamaños: 27B sobre Qwen3.8-27B, y luego 9B, 2B, 0.8B y un 0.4B construido sobre un encoder Ettin de 400M. El de 27B es segundo en el Decision Index con 73.37, y el GLiDE v1.2 alojado por Fastino saca 73 en Artificial Analysis, cuarto de 25 y empatado con Drex Max, con más precisión bruta que Drex Max (60 frente a 58). **GLiDE 9B, con 62.48, es el modelo abierto más pequeño de la tabla que supera a Jev.**

Autoalojar el de 27B supone 52.2 GB de pesos en bf16 y una GPU con 80 GB o más; Fastino midió una mediana de 112 ms en una RTX PRO 6000. Lee texto, JSON e imágenes, admite por defecto 40,000 tokens por pregunta, y su servidor `/v1/systemone` exige un bearer token en cuanto configuras `GLIDE_API_KEY`.

Lee la <a href="https://huggingface.co/fastino/GLiDE/blob/main/LICENSE" target="_blank">Fastino Community License</a> antes que nada. Es gratis para usar, modificar y redistribuir, pero una empresa con más de 10 millones de dólares de ingresos anuales que lo use en producción con fines comerciales necesita un acuerdo aparte con Fastino, cualquier uso comercial tiene que mostrar "Built with Fastino GLiDE", y los fine-tunes y las cuantizaciones heredan las dos reglas. La evaluación y un piloto de hasta 90 días quedan exentos. Son pesos abiertos, no open source, y la API alojada tampoco es barata: Artificial Analysis la sitúa en 780 dólares por millón de tareas, porque Fastino cobra la entrada una vez por pregunta y no una vez por petición.

## 3. vLLM-SR d3-ultra y d3-flash: imágenes, vídeo y documentos largos

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/d3_ultra_hf.webp" "La model card de vLLM-SR d3-ultra en Hugging Face: 26.09B parámetros, texto, imágenes y vídeo, preguntas Box y Track, 131,072 tokens, Apache-2.0" >}}

*Captura: huggingface.co/vllm-sr/d3-ultra, noviembre de 2026.*

Decision 3.0 es la familia de modelos de decisión del proyecto <a href="https://github.com/vllm-project/semantic-router" target="_blank">vLLM Semantic Router</a>, y cubre entradas que los demás no cubren. **d3-ultra**, publicado el 26 de octubre bajo Apache-2.0, tiene 26.09B parámetros, incluido un encoder de visión de 0.46B, y admite hasta 131,072 tokens por pregunta. Además de choice, sí/no y score, responde a `Box` (dónde está esto en la imagen o en este momento del vídeo) y `Track` (dónde está a lo largo de todo el clip), todo a partir de una sola lectura de la entrada. En una AMD Instinct MI325X, una pregunta sobre una foto tardó 304 ms y 255 preguntas tardaron 2.16 s, unos 7.3 ms por pregunta extra.

Saca 70.18 en el Decision Index, 14.º de 308. La prueba SR-Text del propio equipo lo pone en 87.2 frente al 73.1 de Jev 1.14; es un benchmark del fabricante, así que dale el peso que merece. Una API alojada gratuita en <a href="https://decision.vllm-sr.ai" target="_blank">decision.vllm-sr.ai</a> sirve d3-ultra si quieres probarlo primero.

El **d3-flash** de 9B es el práctico. Tiene 101,936 descargas en el Hub, más que cualquier otro modelo de este artículo, y vLLM Semantic Router lo sirve de forma nativa con `vllm-sr serve -e` en CPU, CUDA o ROCm, con 23.8 a 29.1 GiB de memoria de GPU y 95 peticiones por segundo con p99 por debajo de un segundo en una MI325X. Saca 54.27 en el Decision Index, bastante lejos de Jev, así que encaja mejor en enrutado de mucho volumen que en decisiones difíciles. El modo Engine sigue en el canal de desarrollo.

## 4. Mammoth-1 y Elephant-1: las respuestas más consistentes

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/mammoth_1_hf.webp" "La model card de baselabs/mammoth-1 en Hugging Face, con el banner de Mammoth-1 de Baseten, licencia MIT y un checkpoint de 27B en BF16 post-entrenado desde Qwen3.5-27B" >}}

*Captura: huggingface.co/baselabs/mammoth-1, noviembre de 2026.*

Base Labs, el brazo de investigación de Baseten, publicó <a href="https://www.baseten.co/blog/the-best-decision-models-in-the-world-mammoth-1-and-elephant-1/" target="_blank">Mammoth-1 (27B) y Elephant-1 (9B)</a> el 21 de octubre bajo MIT, la licencia más permisiva de esta lista. Los dos son post-entrenamientos completos de Qwen3.5 de los mismos tamaños, leen texto e imágenes y admiten hasta 16,384 tokens.

Destacan en Artificial Analysis. Mammoth saca 71, quinto de 25 y cinco puntos por delante de Jev 1.14, con 106 ms por tarea. Elephant saca 66, a la par de Jev, con 79 ms, el segundo modelo de decisión más rápido de esa tabla. En AA-Symmetry, que hace la misma pregunta de varias maneras, **Mammoth da la misma respuesta el 99% de las veces**, frente al 91% de Drex Max, el 88% de GLiDE y el 67% de Clef de Cloudflare. Parte de eso viene de abstenerse: se entrenó con una opción explícita de "no lo sé" y la usa.

En el Decision Index han bajado desde el lanzamiento, Mammoth al puesto 22 con 68.44 y Elephant al 66 con 60.26, un pelo por encima de Jev. Para autoalojarlos se usa un runtime OneJev fijado que `setup.sh` instala en una sola GPU CUDA, y Baseten tambien aloja Mammoth a 0.10 dólares por millón de tokens de entrada. Elígelos cuando las respuestas consistentes y la abstención importen más que el último punto de precisión, o cuando tu equipo legal solo firme MIT.

## 5. pplx-decider v1.3: pruébalo gratis y luego autoaloja los mismos pesos

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/pplx_decider_v1_3_hf.webp" "La model card de pplx-decider-v1.3 de Perplexity en Hugging Face, con licencia Apache-2.0 y la nueva extracción de fragmentos Locate" >}}

*Captura: huggingface.co/perplexity-ai/pplx-decider-v1.3, noviembre de 2026.*

Perplexity subió la v1.3 a Hugging Face el 9 de noviembre, otra vez bajo Apache-2.0: un fine-tune de 27B sobre Qwen3.8-27B y un Flash de 4B sobre Qwen3.5-4B. Saca 70 en Artificial Analysis, séptimo de 25, y con 68 dólares por millón de tareas es de los más baratos de esa tabla. En el Decision Index queda en 67.67, a menos de un tercio de punto del 67.98 de la v1.2, así que no actualices esperando un salto en tareas generales.

La novedad es **Locate**: pregunta `"person": {"type": "locate", "instructions": "The person who signed the contract"}` y obtienes fragmentos literales con offsets de caracteres y una puntuación, mezclados en la misma petición que tus decisiones. Solo funciona con estados de texto, hasta 128 preguntas. La v1.3 tambien espera su propio formato de prompt, que construye el paquete `pplx_decider`, y da respuestas distintas si le pasas prompts al estilo de la v1.2.

La vía alojada la convierte en el modelo abierto más fácil de evaluar. Decider V1.3 es gratis en OpenRouter, donde sirvió 58.1M de peticiones en la última semana, y la API de Perplexity cobra 0.02 dólares por millón de tokens de entrada. Pasa tu conjunto etiquetado por la copia alojada y, si los números aguantan, descarga los mismos pesos: 54 GB de safetensors y una GPU CUDA con sitio para unos 49 GiB en BF16 más memoria de trabajo. La ruta `fast=True` de la model card empaqueta secuencias y compila el decodificador, y va entre 1.7 y 1.9 veces más rápida en el modo por defecto.

## 6. Kev: a la par de Jev, y habla la API de Jev

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/kev_github_repo.webp" "El repositorio jaredpalmer/kev en GitHub con 10k estrellas, una familia de modelos de decisión al estilo de Jev sobre Qwen3.5 y Qwen3.8" >}}

*Captura: github.com/jaredpalmer/kev, noviembre de 2026.*

Kev, de Jared Palmer, tiene 10,047 estrellas en GitHub y las evaluaciones mejor documentadas del campo abierto. Su modelo principal es ahora **Kev-27B v2**, un fine-tune de todos los pesos de Qwen3.8-27B promediado con el LoRA anterior, que saca 59.56 en el Decision Index: 0.68 por detrás de Jev 1.14 y por encima de Jev 1.13. La comparación propia de Kev con 14 datasets lo deja en 52.3 frente al 54.0 de Jev con intervalos de confianza solapados: más o menos lo mismo. El entrenamiento descartó 6,388 registros que coincidían con conjuntos de evaluación, y ninguna salida de Jev entró en los datos de entrenamiento.

El argumento de Kev sigue siendo la API. Sirve el contrato `POST /v1/systemone` de TypeSafe, así que el `typesafe-sdk` oficial funciona cambiando una base URL. Aquí están el servidor y una petición, ejecutados en un Apple M3 Pro con el modelo pequeño de 0.8B:

```bash
git clone https://github.com/jaredpalmer/kev.git && cd kev
uv sync --extra serve
KEV_DTYPE=bf16 uv run --extra serve python -m kev.serve --run jaredpalmer/kev-0.8b --port 8009
```

```bash
curl -s localhost:8009/v1/systemone -H 'content-type: application/json' -d '{
  "state": "Shoes arrived two weeks late and in the wrong size. Also I see two charges on my card.",
  "model": "kev-latest",
  "questions": {
    "department": {"type": "choice", "instructions": "Which team should handle this?",
                   "criteria": {"returns": "Exchanges, refunds, wrong or damaged items",
                                "shipping": "Delivery status, delays, lost packages",
                                "billing": "Charges, invoices, payment problems"}},
    "escalate":   {"type": "noul", "instructions": "Does this need urgent human attention?"},
    "frustration":{"type": "score", "instructions": "How frustrated is the customer?",
                   "criteria": ["Calm", "Frustrated", "Very angry"]}
  }}'
```

Eso devolvió `returns` con 0.39 de probabilidad, `shipping` con 0.38 y `billing` con 0.24, el reparto correcto para un ticket que menciona las tres cosas. Con el backend MLX de Kev, la petición tardó **77 ms con un estado nuevo y 47 ms con uno repetido**, tras una primera llamada de 3.2 s. Rápido, pero el de 0.8B saca 16.3 en el Decision Index, así que trátalo como un sustituto para desarrollo. Para tráfico real cambia a `--run jaredpalmer/kev-27b`, que necesita una GPU de clase 80 GB (51 GB de pesos, 65.5 GB residentes); Kev espera que quepa en un Mac de 96 a 128 GB vía MLX, pero todavía no lo ha medido.

## 7. Laya: el que más estrellas tiene, cerca del fondo de la tabla

{{< image "best_open_source_jev_alternatives_self_hosted_decision_models/laya_github_repo.webp" "El repositorio NandhaKishorM/laya en GitHub con 35.7k estrellas, un motor de decisiones System 1 no autorregresivo para más de 100 idiomas" >}}

*Captura: github.com/NandhaKishorM/laya, noviembre de 2026.*

Laya es la alternativa abierta a Jev de la que todo el mundo ha oído hablar: **35,664 estrellas**, más que Kev, SemIf, NanoJev, jevlike y la lista awesome-jev juntos, y la única que se instala con un simple `pip install laya`. Convai Innovations la construyó sobre un backbone ModernBERT-large de 421M, con un checkpoint multilingüe de 322M para más de 100 idiomas, bajo Apache-2.0. Tarda de 32.8 a 39.5 ms por pregunta en una Tesla T4 y va bien en la CPU de un portátil. Ejecuté el quickstart del README en un M3 Pro sin aceleración por GPU y medí **66 ms de mediana en 20 ejecuciones** para las tres preguntas en una sola pasada:

```python
import laya

agent = laya.load("convaiinnovations/laya")

state = {
    "subject": "Duplicate charge on invoice #4411",
    "body": "We were billed twice for March. Please refund the duplicate today or we will cancel our plan.",
}
questions = {
    "department": {"type": "choice", "instructions": "Which department should handle this request?",
                   "criteria": {"billing": "invoices, payments, refunds",
                                "technical": "bugs, outages, system errors",
                                "sales": "pricing, new contracts"}},
    "urgency": {"type": "score", "instructions": "How urgent is this request?",
                "criteria": ["not urgent", "soon", "critical deadline or blocking issue"]},
    "churn_risk": {"type": "noul", "instructions": "Does the user threaten to cancel or leave?"},
}

res = agent.predict(state, questions)["answers"]
print(res["department"]["choice"], res["department"]["confidence"])  # billing 0.827
print(res["urgency"]["score"], res["churn_risk"]["noul"])             # 1.49 0.741
```

El número de estrellas esconde una puntuación floja. En el Decision Index, Laya saca **9.21, puesto 294 de 308**, junto a los demás modelos del tamaño de un encoder: Von 1.3 con 11.65 y GLiNER2.5-Decide de Fastino con 10.14. Su propio README lo admite: los checkpoints base sacan 0.362 y 0.352 en su benchmark de typed-decisions, por debajo de una línea base de clase mayoritaria de 0.461, y toda la precisión ahí viene del fine-tuning (el checkpoint ajustado `laya-typed-decisions` llega a 0.766). También avisa de que el checkpoint inglés se hunde con sistemas de escritura no latinos, con 0.000 en jemer y 0.952 de confianza antes de su ajuste de temperatura, y por eso el `Router` incluido detecta el sistema de escritura antes de la pasada. El paquete publica versiones casi a diario, la 0.4.37 el 18 de noviembre, y desde la 0.4.23 `laya.Agent(vegaml=True)` cambia a un lector congelado aparte de 0.8B que también acepta imágenes y voz. La puntuación del Decision Index de arriba es la del checkpoint de 421M, no la de esa ruta.

Laya es la herramienta adecuada cuando una decisión tiene que ejecutarse en CPU, en muchos idiomas, y vas a {{< link href="/blog/finetune_and_selfhost_llms_locally_with_unsloth/" >}}ajustarla con tus propias etiquetas{{< /link >}}. No es un reemplazo de Jev de serie, y sus estrellas miden atención, no precisión. `laya-serve` expone el mismo protocolo `POST /v1/systemone`.

## Otros modelos de decisión abiertos

- **<a href="https://huggingface.co/decisionmodels/REAX-1.3" target="_blank">REAX 1.3</a>** es tercero en el Decision Index con 72.64. Sale de una competición en una subred de Bittensor y promedia al 50% dos partes de unos 30B, una de la línea Gemma y otra construida en parte sobre d3-ultra. Es Apache-2.0, pero pide una RTX PRO 6000 de 96 GB, 400 GB de disco y 64 GiB de RAM, y algunas peticiones largas tardan minutos. Es más un artefacto de investigación que algo para desplegar.
- **Clef de Cloudflare** es uno de los modelos de decisión más descargados de Hugging Face (78,027 descargas, 2,377 likes), pero saca 54.92 en el Decision Index y 60 en Artificial Analysis. Lo cubrimos junto a las opciones alojadas en nuestra {{< link href="/blog/best_ai_decision_models/" >}}comparativa de modelos de decisión{{< /link >}}.
- **No aptos para uso comercial:** H2O Lightning 31B (69.92, 16.º) tiene la licencia no comercial de H2O, y Bespoke Nimble v4.1 Max (70.03, 15.º) es CC-BY-NC-4.0. Nace.AI publica Drex v2.0 con su propia licencia OpenRAIL-M, pero Drex Max, que empata con GLiDE en Artificial Analysis, no tiene pesos públicos. El d1-2B de Liquid usa la LFM Open License, que limita el uso comercial a empresas con menos de 10 millones de dólares de ingresos.
- **Del tamaño de un portátil:** por debajo de 5B lideran KnowLine 4B Gen5.5 de PelaAI (55.99) y Decider Flash v1.3 de Perplexity (55.14), y GLiDE 2B saca 43.22. Strands Decider 2B de AWS se instala con pip y funciona en Apple Silicon, pero saca 20.72, puesto 253.
- **La primera ola de clones** enseñó el patrón y se quedó ahí. <a href="https://github.com/TheoLeeCJ/SemIf-OpenJev" target="_blank">SemIf</a> (4,965 estrellas), que lee los logits de las opciones de un Qwen3.5-4B congelado, saca 26.71 y no tiene commits desde el 23 de septiembre. <a href="https://github.com/TianyuCodings/NanoJev" target="_blank">NanoJev</a> (2,602 estrellas) sigue siendo la referencia para decisiones de 0.6B dentro de bucles de juego en tiempo real, <a href="https://github.com/vinnylarouge/jevlike" target="_blank">jevlike</a> (1,372 estrellas) es un entrenador para tu propio conjunto de etiquetas, y Von, que lideraba el campo abierto en el benchmark de jabr en septiembre, ha archivado su repositorio.

## Prueba un servidor de decisiones local desde fuera de tu máquina

Todos los modelos de arriba funcionan como un servidor HTTP ligado a tu propia máquina, y con los de 27B a 31B esa máquina suele ser una GPU alquilada o una estación de trabajo debajo de la mesa. Eso está bien hasta que otra cosa tiene que llamarlo: una app de staging, un webhook que alimenta al clasificador, un compañero revisando el enrutado o un {{< link href="/blog/best_ai_llm_routers_openrouter_alternatives/" >}}router{{< /link >}} que manda las decisiones pequeñas al modelo barato. Con Kev escuchando en el puerto 8009, un solo comando le da una URL HTTPS pública usando {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8009 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8009 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8009 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8009 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Cambia el puerto para los demás servidores (el ejemplo de Karpo usa el 18440). Durante una migración, elige entre modelos pasándoles tráfico real en sombra a los dos: apunta una copia de los webhooks de producción al túnel, registra lo que habría decidido el modelo abierto y compáralo con la respuesta que te da Jev. Una advertencia - estos servidores están abiertos por defecto, así que configura `KEV_API_KEY`, `GLIDE_API_KEY` o `LAYA_API_KEY` para exigir un bearer token antes de exponer cualquiera de ellos.

## Elige primero por memoria de GPU, luego por licencia

Empieza por la GPU que tienes. Con una tarjeta de clase 80 GB, usa **Karpo Decision 31B** para la mejor precisión bajo Apache-2.0, o **Mammoth-1** si quieres MIT y respuestas que no cambian cuando se reformula la pregunta. Si prefieres probar antes de comprar hardware, empieza con **pplx-decider v1.3** gratis en OpenRouter y autoaloja los mismos pesos después. Para imágenes, vídeo o documentos de más de 32k tokens, usa **d3-ultra**; con una tarjeta de 24 GB, **d3-flash** o **Elephant-1**. Para conservar un cliente de Jev existente sin tocar el código, ejecuta **Kev 27B**. En CPU, en muchos idiomas y con tiempo para hacer fine-tuning, usa **Laya**. **GLiDE** puntúa tan bien como Karpo, así que úsalo si tus ingresos están por debajo de 10 millones de dólares o estás dispuesto a firmar el acuerdo de Fastino.

## Conclusión

El campo abierto copió la interfaz de Jev en un día y luego pasó semanas sin conseguir copiar su precisión. Esa parte ya está hecha: en las dos tablas independientes, modelos que puedes descargar bajo Apache-2.0 o MIT puntúan ya por encima de Jev 1.14. La factura del hardware no ha cambiado. Todo lo que supera a Jev con claridad pide de 50 a 63 GB de memoria de GPU, mientras que Jev responde en 92 ms por 0.042 dólares por millón de tokens de entrada sin que tengas una GPU.

Así que elige el modelo que encaje con tu hardware y tu licencia, ejecútalo en sombra contra unos cientos de tus propias decisones etiquetadas, reajusta la temperatura de confianza y compara precisión y coste con lo que ejecutas hoy. Trata cada número de arriba, incluidos los de los fabricantes, como una hipótesis hasta que tu propio tráfico lo confirme - la misma precaución que vale para {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}autoalojar modelos{{< /link >}} en general.
