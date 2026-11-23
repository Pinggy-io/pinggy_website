---
title: "Los mejores LLMs de código abierto para programar y autoalojar en 2026"
slug: "mejores-llms-de-codigo-abierto-para-programar"
description: "Compara modelos de pesos abiertos para programar con una GPU, un Mac de 128 GB o un clúster. La guía de noviembre de 2026 incluye Inkling 2 Mini, Qwen3.8-27B, DeepSeek y Kimi K3.1 Pro, con pruebas y memoria necesaria."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-11-22T09:00:00+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "LLM de código abierto"
tags: ["open source LLM", "self-hosted AI", "local LLM", "AI coding agents", "open source"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/coding_llms_november_2026_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkxvcyBtZWpvcmVzIExMTXMgZGUgY8OzZGlnbyBhYmllcnRvIHBhcmEgcHJvZ3JhbWFyIHkgYXV0b2Fsb2phciBlbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiQ29tcGFyYSBtb2RlbG9zIGRlIHBlc29zIGFiaWVydG9zIHBhcmEgcHJvZ3JhbWFyIGNvbiB1bmEgR1BVLCB1biBNYWMgZGUgMTI4IEdCIG8gdW4gY2zDunN0ZXIuIExhIGd1w61hIGRlIG5vdmllbWJyZSBkZSAyMDI2IGluY2x1eWUgSW5rbGluZyAyIE1pbmksIFF3ZW4zLjgtMjdCLCBEZWVwU2VlayB5IEtpbWkgSzMuMSBQcm8sIGNvbiBwcnVlYmFzIHkgbWVtb3JpYSBuZWNlc2FyaWEuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Jlc3Rfb3Blbl9zb3VyY2Vfc2VsZl9ob3N0ZWRfbGxtc19mb3JfY29kaW5nL2NvZGluZ19sbG1zX25vdmVtYmVyXzIwMjZfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjYtMDMtMjZUMTQ6MTU6MjUrMDU6MzAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yMlQwOTowMDowMCswNTozMCIsCiAgImluTGFuZ3VhZ2UiOiAiZXMiCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/coding_llms_november_2026_banner.webp" "Modelos de programación en noviembre de 2026. Kimi K3.1 Pro obtiene 46 puntos en el índice de Artificial Analysis. Inkling 2 Mini y Qwen3.8-27B empatan con 20. El segundo gráfico compara los resultados publicados de Terminal-Bench 4.0." >}}

Si ya usas Ollama y tienes una GPU de 24 GB, probaría primero **Qwen3.8-27B**. La descarga predeterminada ocupa 18 GB. En esa misma tarjeta también cabe **Inkling 2 Mini**: su versión de 17,6 GB resuelve más incidencias de repositorios en DeepSWE, según Thinking Machines. Los dos obtienen 20 puntos en el índice independiente de Artificial Analysis. Para desempatar, les daría el mismo fallo de mi repositorio y comprobaría qué parche pasa las pruebas. <a href="https://ollama.com/library/qwen3.8:27b" target="_blank">Registro de Ollama</a> · <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">Versiones de llama.cpp</a> · <a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini" target="_blank">Evaluaciones de Thinking Machines</a>.

{{% tldr %}}

1. **Una GPU de 24 GB.** Ollama conecta Qwen3.8-27B directamente con OpenCode. Inkling 2 Mini funciona en llama.cpp y MLX. Ambos tienen licencia Apache 2.0.
2. **Un Mac de 128 GB.** Con la versión GGUF adecuada, Qwen3.8-Flash-Next mantiene 56,1 GB de pesos en la GPU y una tabla de consulta de 38,4 GB en el SSD.
3. **Un servidor compartido.** GLM-5.3-Flash y DeepSeek-V4.1-Flash-1017 publican sus pesos bajo MIT. Reflection ofrece Beam bajo Apache 2.0 y documenta una configuración con cuatro B200.
4. **Un clúster.** Kimi K3.1 Pro encabeza esta selección en el índice independiente. Una configuración documentada usa ocho B300. Si vendes servicios de inferencia, revisa la licencia de Moonshot.

{{% /tldr %}}

## Qué modelos caben en tu equipo

Comprobamos estas descargas y configuraciones en noviembre de 2026. Además de los pesos, el servidor necesita memoria para las activaciones y la caché de atención (caché KV). Esta última crece conforme el agente lee archivos y acumula resultados de herramientas. Que una sesión larga quepa en la GPU tampoco garantiza que quepan dos sesiones simultáneas.

| Equipo o tarea | Modelo y licencia | Memoria y descarga |
|---|---|---|
| GPU pequeña, cambios puntuales | Qwen2.5-Coder-7B-Instruct, Apache 2.0 | La <a href="https://ollama.com/library/qwen2.5-coder:7b" target="_blank">descarga de Ollama</a> ocupa 4,7 GB. Prueba con una función y el test que falla. |
| Una GPU de 24 GB | Inkling 2 Mini o Qwen3.8-27B, ambos Apache 2.0 | 17,6 GB para los pesos de lenguaje IQ4_NL de Inkling o 18 GB para Qwen en Ollama. Reserva espacio para el contexto. |
| Mac con Apple Silicon y 128 GB | Qwen3.8-Flash-Next, Qwen Community License | La versión dividida de Atomic Chat ocupa 94,5 GB en disco. La GPU mantiene 56,1 GB. |
| Servidor con tarjetas de 80 GB | GLM-5.3-Flash, MIT | Los <a href="https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF" target="_blank">archivos de Unsloth a cuatro bits</a> ocupan entre 162 y 210 GB. Con cuatro tarjetas queda más espacio para el contexto que con tres. |
| Servidor Blackwell | Beam 1.0, Apache 2.0 | Unos 280 GB de pesos en NVFP4. <a href="https://huggingface.co/blog/reflection-beam" target="_blank">Hugging Face recomienda cuatro B200</a> para contextos largos y peticiones simultáneas. |
| Nodo de centro de datos o clúster | Kimi K3.1 Pro, licencia K3.1-Pro de Moonshot | La <a href="https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro" target="_blank">guía de vLLM</a> reparte una réplica entre ocho B300, ocho MI355X o dos bandejas de cuatro GB300. |

## Qué miden las pruebas de programación

Artificial Analysis combina nueve evaluaciones en su **Intelligence Index v5.0.1**, entre ellas ingeniería de software, razonamiento y uso de herramientas. En esta selección, Kimi K3.1 Pro obtiene **46** puntos, Tencent Hy4 **35**, DeepSeek-V4.1-Flash-1017 **33** y GLM-5.3 **32** (estos dos con esfuerzo máximo). Les siguen Qwen3.8-Flash-Next con **29**, e Inkling 2 Mini y Qwen3.8-27B (xhigh) con **20** cada uno. Son resultados de los servicios evaluados. Una copia local cuantizada a cuatro bits puede comportarse de otra manera. <a href="https://artificialanalysis.ai/embed/llm-performance-leaderboard" target="_blank">Clasificación de Artificial Analysis</a> · <a href="https://artificialanalysis.ai/models/tencent-hy4" target="_blank">Evaluación de Hy4</a> · <a href="https://artificialanalysis.ai/models/inkling-2-mini" target="_blank">Metodología y resultados de Inkling</a>.

Terminal-Bench mide si el agente termina una tarea en la terminal. DeepSWE comprueba si corrige una incidencia en un repositorio. La comparación que publicó Moonshot con K3.1 Pro incluye un modelo propietario como referencia.

| Modelo | Terminal-Bench 4.0 | DeepSWE v1.1 |
|---|---:|---:|
| Claude Opus 5.5 (servicio alojado) | 66,4 % | 74,2 % |
| Kimi K3.1 Pro | 65,7 % | 75,5 % |
| DeepSeek-V4.1-Flash-1017 | 42,3 % | 77,0 % |
| GLM-5.3 | 41,8 % | 66,9 % |

DeepSeek aventaja a Kimi en DeepSWE, mientras que Kimi completa más tareas de terminal. Hay un detalle importante para interpretar DeepSWE: Moonshot ejecutó Kimi con Claude Code y DeepSeek usó Mini-SWE-V2 para 1017. Cada agente decide cómo editar, cuándo repetir un comando y cuántos tokens gastar. Los porcentajes miden el conjunto. <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro#3-evaluation-results" target="_blank">Tabla y notas de Moonshot</a> · <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank">Configuración de DeepSeek</a>.

## Comparativas de octubre

Las mediciones de octubre de 2026 se hicieron con las diez pruebas del Intelligence Index v4.3.2 de Artificial Analysis. La revisión de septiembre incorporó Terminal-Bench 4.0 y AutomationBench-AA. Estas cifras son comparables dentro de la tabla. El índice v5.0.1 de noviembre que aparece arriba utiliza otras pruebas.

Claude Opus 5.5 obtuvo 58 puntos y MiMo-V2.6-Pro, 46 en la v4.3.2. La columna de hardware indica configuraciones de ejemplo para alojar los pesos. Reserva memoria adicional para la caché KV.

| Modelo | Parámetros (activos) | Licencia | AA v4.3.2 | Ejemplo de configuración |
|---|---|---|---|---|
| Claude Opus 5.5 *(propietario)* | - | - | **58** | Solo API |
| MiMo-V2.6-Pro | 1.02T (42B) | MIT | **46** | 8x H200 (~574GB, casi todo MXFP4) |
| GLM-5.3 | 744B (40B) | GLM-5.3 License | **45** | 8x H200 (756GB FP8) |
| Kimi K3 | 2.78T (104B) | Kimi K3 License | **44** | 8x GB300 o 8x MI355X (1.56TB MXFP4) |
| GLM-5.3-Flash | 320B (18B) | MIT | **42** | 3-4x GPUs de 80GB en 4 bits (162-210GB) |
| Qwen3.8-Max (2.4T-A95B) | 2.4T (95B) | Qwen3.8-Max License | 40 | 8x B300 en NVFP4 (1.32TiB) |
| Qwen3.8-Flash-Next | 125B (6B) + tabla de n-gramas de 51B | Qwen Community License | 40 | Máquina de 128GB (56GB en memoria de GPU en 4 bits, tabla de n-gramas en el SSD) |
| DeepSeek-V4.1-Flash | 552B + 196B Engram (16B) | MIT | 39 | 4x H200 con Engram en la CPU (~511GB) |
| MiMo-V2.6-Flash | 309B (15B) | MIT | 38 | 4x H200 (~178GB, casi todo MXFP4) |
| DeepSeek-V4-Pro-0813 | 1.6T (49B) | MIT | 36 | 8x H200 (893GB) |
| Qwen3.8-27B | 27B denso | Apache 2.0 | 34 | Una GPU de 24GB (16-19GB en 4 bits) |
| MiniMax M3 | 428B (23B) | MiniMax Community License | 29 | 4x H100 en 4 bits (213-270GB) |

### Modelos que caben en una GPU o en una máquina de 128GB

Si tu "servidor" es un portátil o un Mac de escritorio por debajo de un Ultra, el techo lo pone Apple: el M5 Max llega como máximo a **128GB de memoria unificada**, tanto en el MacBook Pro como en el Mac Studio. Ahí tienen que caber los pesos y la caché KV, y por defecto macOS solo deja que la GPU use alrededor del 75%, unos **96GB**. Es el mismo índice, así que estas cifras se pueden comparar directamente con la tabla de arriba.

| Modelo | Parámetros (activos) | Memoria en ~4 bits | AA v4.3.2 |
|---|---|---|---|
| Qwen3.8-Flash-Next | 125B (6B) + tabla de n-gramas | 96-114GB (56GB con la tabla en el SSD) | **40** |
| Qwen3.8-27B | 27B denso + visión | 16-19GB | **34** |
| Qwen3.6-27B | 27.8B denso | 18GB | 21 |
| Muse Glimmer 30B | 29.6B denso (incl. visión) | 17GB | 17 |
| Gemma 4 26B-A4B | 26B (4B) | 14-17GB | 17 (est.) |
| Gemma 4 31B | 30.7B denso | 17-20GB | 15 |
| Nemotron 3.5 Lightning | 31.6B (3.6B) | 21-25.5GB | 13 |
| Nemotron 3 Super 120B-A12B | 120.6B (12.7B) | 64-72GB | 13 |
| gpt-oss-120b (high) | 117B (5.1B) | ~63GB | 12 |
| Qwen3-Coder-Next | 79.7B (3B) | 46GB | 9 |

En la comparativa de octubre, Qwen3.8-27B obtuvo 34 puntos y K2 Horizon MoVA 36B-A4B, 25. GLM-5.3-Flash también cabe en un equipo de 128 GB con el archivo de dos bits y 109 GB de Unsloth, a costa de perder calidad.

### SWE-Bench Pro y Terminal-Bench 2.1

El Intelligence Index mide la capacidad general. Para código en concreto, SWE-Bench Pro (arreglar issues reales en repos reales) y Terminal-Bench 2.1 (tareas agénticas en una shell) son los que más modelos de pesos abiertos cubren. Son cifras que publica cada fabricante en la ficha de su modelo, contrastadas con las tablas de {{< link href="https://huggingface.co/datasets/ScaleAI/SWE-bench_Pro" >}}SWE-Bench Pro{{< /link >}} y {{< link href="https://huggingface.co/datasets/harborframework/terminal-bench-2.1" >}}Terminal-Bench 2.1{{< /link >}} en Hugging Face, y ordenadas por Terminal-Bench.

| Modelo | Lanzamiento | SWE-Bench Pro (v1) | Terminal-Bench 2.1 |
|---|---|---|---|
| DeepSeek-V4.1-Flash | sep 2026 | No publicado | **90.6** |
| MiMo-V2.6-Pro | sep 2026 | No publicado | 89.9 |
| Kimi K3 | jul 2026 | No publicado | 88.3 |
| GLM-5.3 | ago 2026 | No publicado | 88.2 |
| DeepSeek-V4-Pro-0813 | ago 2026 | 55.4 (preview de abril) | 87.9 |
| MiMo-V2.6-Flash | sep 2026 | No publicado | 87.6 |
| Qwen3.8-Max | ago 2026 | **67.7** | 86.6 |
| Ornith-1.5-397B | ago 2026 | 65.1 | 86.1 |
| Tencent Hy4-preview | ago 2026 | 65.7 | 85.4 |
| GLM-5.3-Flash | ago 2026 | No publicado | 84.3 |
| Nex-N2.5-Pro | sep 2026 | 61.2 | 82.7 |
| GLM-5.2 | jun 2026 | 62.1 | 81.0 (Terminus-2) |
| dots3-note-prev | ago 2026 | 61.0 | 75.1 |
| Qwen3.8-27B | ago 2026 | 61.7 | 73.0 |
| Poolside Laguna-S-2.1 | jul 2026 | 59.4 | 70.2 |
| MiniMax M3 | jun 2026 | 59.0 | 66.0 |
| Muse Glimmer 30B | ago 2026 | 51.2 | 51.7 |
| Qwen3.8-Flash-Next | ago 2026 | 62.5 | No publicado |

DeepSeek-V4.1-Flash obtuvo 90.6 en Terminal-Bench 2.1. En SWE-Bench Pro v1, Qwen3.8-Max (2.4T) consiguió 67.7, frente a 61.7 del modelo mucho más pequeño Qwen3.8-27B. Cada fabricante usó su propio agente. Scale publicó la v2 el 22 de septiembre y Qwen usó un conjunto corregido de tareas de la v1. Comprueba la versión y el agente antes de comparar las cifras con la <a href="https://labs.scale.com/leaderboard/swe_bench_pro" target="_blank">clasificación SEAL</a>.

### Lo que aporta LiveBench

En las <a href="https://livebench.ai/#/?cats=Agentic+Coding" target="_blank">pruebas de programación con agentes de LiveBench</a> de octubre, DeepSeek-V4.1-Flash de septiembre obtuvo 77.27 y Claude Opus 5.5, 71.72. DeepSeek-V4-Flash-Vision-Exp alcanzó 65.10, Qwen3.8-Max 64.65, Kimi K3 62.17, Qwen3.8-Flash-Next 61.62, Qwen3.8-27B 61.36 y GLM-5.3 60.91. Kimi K3 obtuvo 81.45 en la categoría independiente de programación sin agente.

## Los mejores LLMs de código abierto para programar

Las fichas numeradas incluyen cada versión y sus resultados de lanzamiento. Salvo que se indique otra versión, las puntuaciones del Intelligence Index de estas fichas corresponden a la **v4.3.2** de octubre.

### 1. MiMo-V2.6-Pro y MiMo-V2.6-Flash (Xiaomi)

{{< image "best_open_source_self_hosted_llms_for_coding/mimo_v2_6_pro.webp" "Página de Hugging Face del modelo XiaomiMiMo/MiMo-V2.6-Pro-MOPD, con la licencia MIT y 1T de parámetros" >}}

*Captura: huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD, octubre de 2026.*

Xiaomi publicó **MiMo-V2.6-Pro** y **MiMo-V2.6-Flash** el 21 de septiembre de 2026 con una licencia MIT tal cual, sin umbrales de ingresos. Cada uno viene en dos versiones: los repos `-RL` del día del lanzamiento y los repos `-MOPD` mejorados, publicados el 27 de septiembre. Los dos aceptan texto, imagen, vídeo y audio como entrada, con un contexto de 1M de tokens, hasta 128K tokens de salida y una combinación de atención de ventana deslizante y atención global, más un drafter de predicción multitoken para decodificar más rápido.

El Pro es un MoE de 1.02T de parámetros con 42B activos (384 expertos, 8 activos por token). Sus pesos, casi todos en MXFP4 de 4 bits, suman unos 574GB, y la receta de vLLM pide al menos 680GB de VRAM, con configuraciones documentadas de ocho H200 o cuatro MI355X. Saca **46** en el Intelligence Index, **89.9 en Terminal-Bench 2.1** y 71.9 en DeepSWE. El Flash tiene 309B con 15B activos, unos 178GB de pesos, y funciona en cuatro H200. Saca 38 en el índice y 87.6 en Terminal-Bench 2.1. Las fichas de lanzamiento no publicaron cifras de SWE-Bench Pro ni SWE-Bench Verified.

Sustituyen al MiMo-V2.5-Pro de abril, que Artificial Analysis marca ahora como obsoleto, con 26.

<a href="https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD" target="_blank">Ficha de MOPD</a> · <a href="https://recipes.vllm.ai/XiaomiMiMo/MiMo-V2.6-Pro-RL" target="_blank">Guía de vLLM</a>.

### 2. GLM-5.3 y GLM-5.3-Flash (Z.AI)

{{< image "best_open_source_self_hosted_llms_for_coding/glm_5_3.webp" "Página de Hugging Face del modelo zai-org/GLM-5.3, con la licencia GLM-5.3 y 753B de parámetros" >}}

*Captura: huggingface.co/zai-org/GLM-5.3, octubre de 2026.*

Z.AI anunció **GLM-5.3** el 14 de agosto y publicó los pesos en {{< link href="https://huggingface.co/zai-org/GLM-5.3" >}}Hugging Face{{< /link >}} el 28 de agosto, después de retenerlos dos semanas para evaluaciones de seguridad. El modelo base es el mismo de GLM-5.2 (744B en total, 40B activos); toda la mejora viene del post-entrenamiento. Terminal-Bench 3.0 pasa de 4.6 a 28.3, DeepSWE v1.1 de 46.2 a 66.9, y la ficha reporta **88.2 en Terminal-Bench 2.1**. Tambien saca un 84.5% en CyberGym, y Z.AI dice que con él encontró 2436 vulnerabilidades en 269 proyectos reales.

El repo por defecto está en FP8 nativo: 141 shards de safetensors, 756GB, que caben en ocho H200 pero no en un nodo de 8x80GB H100 (también hay una copia en BF16 de unos 1.5TB). Tiene 78 capas, 256 expertos enrutados con 8 activos, un contexto de 1M de tokens y razonamiento en tres niveles que no se puede desactivar. La **GLM-5.3 License** es parecida a MIT, salvo que los operadores de modelo como servicio con más de 10.000 millones de dólares de ingresos tienen que pasar antes una revisión de seguridad de Z.AI.

**GLM-5.3-Flash** es el que la mayoría de equipos puede desplegar. Publicado el 26 de agosto bajo **MIT**, es un MoE de 320B con 18B activos, el primer modelo GLM-5 multimodal de forma nativa, con un contexto de 1M de tokens. Su combinación de atención lineal y dispersa le da una caché KV 4.44x más pequeña y unas 3x menos de cómputo de atención que GLM-5.3. Saca **42** en el índice, 84.3 en Terminal-Bench 2.1 y 63.4 en DeepSWE, a unos $0.25 por tarea en la ejecución de Artificial Analysis. Los pesos nativos en FP8 (328GB) necesitan un nodo de 8x80GB, pero una versión de 4 bits de 162-210GB (la `UD-Q4_K_XL` de Unsloth ocupa 200GB) cabe en tres o cuatro GPUs de 80GB o en un Mac de 256GB, y la {{< link href="https://unsloth.ai/docs/models/glm-5.3-flash" >}}cuantización de 2 bits de Unsloth{{< /link >}} necesita unos 115GB. La rama principal de llama.cpp {{< link href="https://github.com/ggml-org/llama.cpp/pull/27773" >}}incorporó el soporte{{< /link >}} el 30 de septiembre.

### 3. Kimi K3 (Moonshot AI)

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k3.webp" "Página de Hugging Face del modelo moonshotai/Kimi-K3, con la licencia kimi-k3 y 2.8T de parámetros" >}}

*Captura: huggingface.co/moonshotai/Kimi-K3, octubre de 2026.*

Moonshot anunció {{< link href="https://huggingface.co/moonshotai/Kimi-K3" >}}Kimi K3{{< /link >}} el 16 de julio y publicó los pesos el 27 de julio. Con **2.78T de parámetros en total** y 104B activos, su arquitectura incluye 896 expertos con 16 activos por token, 93 capas (69 de Kimi Delta Attention más 24 de Gated MLA), un codificador de visión MoonViT-V2 y un contexto de 1M de tokens.

Los pesos vienen en MXFP4 de forma nativa gracias al entrenamiento consciente de la cuantización, así que la descarga de 1.56TB ya es la versión compacta, y la receta de vLLM pide al menos ocho GPUs GB300 o MI355X, con varios nodos para tráfico de producción. Unsloth sí publica GGUFs, pero su cuantización recomendada de 1 bit (`UD-IQ1_S`) sigue ocupando 594GB, e incluso el archivo más pequeño (`UD-Q1_0`) pesa 466GB. La **Kimi K3 License** permite el self-hosting y el fine-tuning y deja exento el uso interno, pero los operadores de modelo como servicio con más de $20M de ingresos necesitan un acuerdo aparte, y los productos con más de 100M de usuarios mensuales o $20M de ingresos mensuales tienen que mostrar "Kimi K3" en la interfaz.

Moonshot reporta **88.3 en Terminal-Bench 2.1**, 81.2 en FrontierSWE y 67.5 en DeepSWE, sin cifra de SWE-Bench Pro. En octubre obtuvo 81.45 en programación en LiveBench y 44 en la v4.3.2 del índice.

#### Kimi K3.1 Pro para tareas largas de terminal

Kimi K3.1 Pro es el candidato para un clúster si el agente pasa la mayor parte del tiempo en la terminal. Su 65,7 % en Terminal-Bench 4.0 se acerca al 66,4 % que Moonshot atribuye a Claude Opus 5.5. Acepta imágenes y hasta 1.048.576 tokens de contexto. Por token activa 104.000 millones de sus 2,8 billones de parámetros. Los pesos ya vienen en MXFP4. Para dimensionar un servidor, consulta la configuración de ocho GPU de vLLM: el número de parámetros activos por sí solo no indica cuánta memoria necesitas. <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro" target="_blank">Pesos y resultados de Kimi</a> · <a href="https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro" target="_blank">Guía de despliegue de vLLM</a>.

La licencia de Moonshot distingue entre una herramienta interna y un servicio que permite a clientes controlar la inferencia. Si la empresa o una filial ofrece el modelo como servicio y sus ingresos conjuntos superan los 20 millones de dólares en cualquier período de 12 meses consecutivos, se aplica la cláusula de acuerdo adicional. La licencia también define el uso interno y los umbrales de atribución. <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE" target="_blank">Licencia de Kimi K3.1-Pro, apartados 2 a 4</a>.

### 4. Qwen3.8-Max (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_max.webp" "Página de Hugging Face del modelo Qwen/Qwen3.8-2.4T-A95B, los pesos abiertos de Qwen3.8-Max" >}}

*Captura: huggingface.co/Qwen/Qwen3.8-2.4T-A95B, octubre de 2026.*

Alibaba anunció Qwen3.8-Max el 3 de agosto y publicó los pesos como {{< link href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B" >}}Qwen3.8-2.4T-A95B{{< /link >}} el 12 de agosto, la primera vez que se abren los pesos de un modelo de la clase Qwen-Max. Es un MoE de 2.4T con 95B activos (512 expertos, 10 enrutados más 1 compartido por token), un contexto de 262K ampliable a cerca de 1M y razonamiento siempre activo que puedes regular con `reasoning_effort` (`xhigh`, `medium` o `low`).

Su ficha indica **67.7 en SWE-Bench Pro v1**, y saca 86.6 en Terminal-Bench 2.1. Dos advertencias. Los pesos abiertos son solo de texto y no son el modelo alojado: la actualización Qwen3.8-Max-0902, disponible solo por API, saca 45 en el índice, mientras que los pesos abiertos sacan 40. Y la licencia es propia: exige atribución por encima de 100M de usuarios mensuales o $20M de ingresos mensuales, y además pide una licencia aparte para negocios de modelo como servicio, de programación con IA o de asistentes de oficina con más de $50M de ingresos al año, contando las filiales. Los pesos en BF16 ocupan unos 4.9TB. La receta de vLLM ejecuta la versión NVFP4 (1.32TiB) en ocho B300, o la versión FP8 en 16 B300 o 32 H200.

Alibaba anunció Qwen4-Max el 16 de noviembre. El anuncio ofrece Max a través de la API y del Token Plan de QwenCloud, y adelanta que publicará los pesos de modelos Qwen4 más pequeños. Si tu equipo tiene que trabajar sin conexión, Qwen3.8-27B ya se puede descargar. <a href="https://qwen.ai/blog?id=qwen4-max" target="_blank">Anuncio de Qwen4-Max</a>.

### 5. DeepSeek-V4.1-Flash y V4-Pro (DeepSeek)

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek_v4_1_flash.webp" "Página de Hugging Face del modelo deepseek-ai/DeepSeek-V4.1-Flash, con la licencia MIT y el backbone de 552B en su introducción" >}}

*Captura: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash, octubre de 2026.*

**DeepSeek-V4.1-Flash** (10 de septiembre, MIT) es el diseño más raro de la lista. Es un modelo encoder-decoder con un backbone de 552B más 196B de memoria "Engram" que puede quedarse en la RAM de la CPU, 384 expertos con 6 activos, y 8B de parámetros activos durante el prefill pero 16B durante el decode. Tiene un contexto de 1M de tokens y 384K tokens de salida. DeepSeek reporta **90.6 en Terminal-Bench 2.1** (88.0 con el harness de Claude Code) y 74.2 en DeepSWE en la versión de septiembre. Saca 39 en el índice. Los pesos ocupan unos 511GB, y la receta de vLLM lo ejecuta en ocho H200, o en cuatro si llevas Engram a la CPU.

**DeepSeek-V4-Pro-0813** (13 de agosto, MIT) tiene 1.6T en total con 49B activos, un contexto de 1M y tres niveles de esfuerzo, y la API de DeepSeek ya habla de forma nativa la Responses API de OpenAI. Su ficha reporta 87.9 en Terminal-Bench 2.1 y 62.7 en DeepSWE, y saca 36 en el índice. Los tan citados 80.6 en SWE-Bench Verified y 55.4 en SWE-Bench Pro vienen de la preview de abril, no de esta versión. Los pesos oficiales ya vienen con los expertos en FP4 más FP8, 893GB en total, con configuraciones documentadas de ocho H200 o cuatro MI355X. En la API de DeepSeek, V4-Flash y V4-Flash-Vision-Exp se retiraron el 10 de septiembre y sus nombres ahora apuntan a V4.1-Flash. Si prefieres quedarte con el anterior {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" >}}V4-Flash-0731{{< /link >}}, de 284B, cabe en una máquina de 128GB en 3 bits, como explica nuestra {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}guía de herramientas y modelos LLM locales{{< /link >}}.

#### DeepSeek-V4.1-Flash-1017 para corregir incidencias

Al comparar cifras, fíjate en el sufijo. Según DeepSeek, los pesos del 17 de octubre subieron del 31,2 % al 42,3 % en Terminal-Bench 4.0 y del 74,2 % al 77,0 % en DeepSWE v1.1 respecto a Flash de septiembre. El código y los pesos tienen licencia MIT. DeepSeek incluye un codificador de referencia para el historial de razonamiento y las llamadas a herramientas. El servidor debe conocer ese formato para que el agente pueda interpretar las llamadas. <a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank">Pesos, resultados y formato de DeepSeek</a>.

En la configuración de vLLM con cuatro H200, las tablas de consulta Engram se guardan en RAM del servidor, en páginas que permanecen en memoria. Así queda más memoria de GPU para solicitudes simultáneas. El equipo necesita RAM suficiente y GPU con direccionamiento virtual unificado. <a href="https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4.1-Flash" target="_blank">Configuraciones de vLLM</a> · <a href="https://docs.vllm.ai/en/v0.32.0/features/engram/" target="_blank">Documentación de Engram</a>.

### 6. Qwen3.8-Flash-Next (Alibaba) - el mejor para una máquina de 128GB

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_flash_next.webp" "Página de Hugging Face del modelo Qwen/Qwen3.8-Flash-Next, con la licencia qwen-community-1.0" >}}

*Captura: huggingface.co/Qwen/Qwen3.8-Flash-Next, octubre de 2026.*

{{< link href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next" >}}Qwen3.8-Flash-Next{{< /link >}} (26 de agosto) es el adelanto de Alibaba de la arquitectura Qwen4: 125B de parámetros con 6B activos, más una tabla de embeddings de n-gramas de 51B que se puede mover a la RAM o al SSD, Gated DeltaNet con Qwen Sparse Attention, entrada de imágenes nativa y un contexto de 262K ampliable a 1M. El razonamiento se puede desactivar, a diferencia de Max.

Saca **40** en el índice, igual que Qwen3.8-2.4T-A95B, los pesos abiertos que hay detrás de Qwen3.8-Max, con **62.5 en SWE-Bench Pro** y 91.9 en LiveCodeBench v6. Lee antes la **Qwen Community License**: exige atribución por encima de 100M de usuarios mensuales o $20M de ingresos mensuales, y cualquier empresa (o filial) que tenga un negocio de modelo como servicio o de "asistente de trabajo con IA" (programación con IA o productividad de oficina) necesita una licencia aparte antes de usarlo comercialmente, sea del tamaño que sea. El uso puramente interno, sin nada expuesto a terceros, queda exento.

En un Mac, elige bien el GGUF. La {{< link href="https://unsloth.ai/docs/models/qwen3.8-next" >}}guía{{< /link >}} de Unsloth pone la cuantización de 4 bits en 96-114GB, que está en el límite o por encima de los aproximadamente 96GB que macOS deja usar a la GPU en una máquina de 128GB. La {{< link href="https://huggingface.co/AtomicChat/Qwen3.8-Flash-Next-GGUF" >}}versión de Atomic Chat{{< /link >}} deja en cambio la tabla de n-gramas de 38GB en el SSD, así que su cuantización de 4.27bpw solo ocupa 56GB de memoria de GPU, y queda sitio para contexto largo o un segundo modelo. Su versión de 3.84bpw incluso funciona en un Mac de 64GB, a costa de una pérdida de calidad real. La [sección de configuración de más abajo](#running-qwen38-flash-next-on-a-128gb-mac) explica por qué funciona y tiene los comandos.

### 7. Qwen3.8-27B (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_27b.webp" "Página de Hugging Face del modelo Qwen/Qwen3.8-27B, con la licencia Apache 2.0" >}}

*Captura: huggingface.co/Qwen/Qwen3.8-27B, octubre de 2026.*

Para quien no tenga un servidor de GPUs, este es el modelo más importante de la lista. Alibaba publicó {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B" >}}Qwen3.8-27B{{< /link >}} el 14 de agosto bajo **Apache 2.0**. Es un modelo denso de visión y lenguaje de 27B con 64 capas (que repiten tres bloques Gated DeltaNet y un bloque de gated attention) y un contexto de 262K ampliable a cerca de 1M.

Lo que importa son las cifras de programación: **61.7 en SWE-Bench Pro**, 73.0 en Terminal-Bench 2.1, 90.3 en LiveCodeBench v6 y 42.2 en DeepSWE, más del triple que los 13.3 de Qwen3.6-27B. SWE-Bench Pro y DeepSWE se ejecutaron con el harness de Claude Code, y Terminal-Bench con Terminus. Saca 34 en el índice, el primero de los 142 modelos de la muestra de octubre de su categoría de tamaño y muy por delante de Qwen3.6-27B (21).

Necesita 16-19GB en 4 bits (una sola tarjeta de 24GB como una RTX 4090, o un Mac de 24GB), unos 31GB en FP8 y 56GB en BF16, y el tag por defecto de Ollama es una descarga de 18GB. La pega de verdad es lo mucho que habla. Artificial Analysis midió 47.8 tokens/s de salida frente a 222.8 de DeepSeek-V4-Flash-0731, y tardó unas seis veces más en completar el índice. Baja el esfuerzo de razonamiento para ediciones interactivas y mantenlo alto para las ejecuciones del agente. Si prefieres un especialista en código, Qwen3-Coder-Next (80B, 3B activos, 46GB en 4 bits) es rápido, pero puntúa mucho más bajo en el índice v4.3.2 de octubre (9).

### 8. MiniMax M3 (MiniMax)

{{< image "best_open_source_self_hosted_llms_for_coding/minimax_m3.webp" "Página de Hugging Face del modelo MiniMaxAI/MiniMax-M3, con la licencia minimax-community y 427B de parámetros" >}}

*Captura: huggingface.co/MiniMaxAI/MiniMax-M3, octubre de 2026.*

{{< link href="https://huggingface.co/MiniMaxAI/MiniMax-M3" >}}MiniMax M3{{< /link >}} salió el 1 de junio, con los pesos en Hugging Face desde el 12 de junio. Es un MoE de 428B con 23B activos, un contexto de 1M de tokens y entrada nativa de imagen y vídeo, construido en torno a MiniMax Sparse Attention (MSA), que lee cada bloque de la caché KV una sola vez. MiniMax reporta 59.0 en SWE-Bench Pro, 66.0 en Terminal-Bench 2.1 y 74.2 en MCP-Atlas, y saca 29 en el índice.

Dos cosas que conviene saber. Los GGUF de 4 bits de Unsloth necesitan 213-270GB, así que cuenta con cuatro H100, y son solo de texto con atención densa porque llama.cpp no implementa MSA. Y la **MiniMax Community License** es restrictiva: la concesión base es no comercial, el uso comercial exige un aviso "Built with MiniMax M3" y una notificación única a MiniMax, y los productos con más de $20M al año necesitan autorización por escrito.

#### MiniMax-M3.1-Flash

Útil si el agente lee capturas y edita código. MiniMax publica un 73,7 % en DeepSWE v1.1. Antes de dimensionar el servidor, comprueba la licencia MiniMax Community y la compatibilidad del motor con la atención dispersa. <a href="https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash" target="_blank">Resultados y guía de MiniMax</a>.

### 9. Muse Glimmer 30B (Meta)

{{< image "best_open_source_self_hosted_llms_for_coding/muse_glimmer_30b.webp" "Página de Hugging Face del modelo meta-models/Muse-Glimmer-30B, con la licencia Apache 2.0 y la ficha del modelo" >}}

*Captura: huggingface.co/meta-models/Muse-Glimmer-30B, octubre de 2026.*

Meta Superintelligence Labs publicó {{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}Muse Glimmer{{< /link >}} el 10 de agosto: un modelo multimodal denso de 29.6B (incluido un codificador de visión de 1.8B) bajo **Apache 2.0**, con 52 capas y un contexto de 131K. Los pesos en BF16 ocupan unos 60GB, y las versiones K-Quant de Meta lo dejan por debajo de 20GB con una degradación del 0.2-1.0%, así que cabe en una tarjeta de 24GB.

Las cifras de la propia Meta son buenas en uso de herramientas: **75.5 en MCP Atlas** frente a los 62.5 de Qwen3.6-27B, cerca de los 76.8 de GLM-5.2 con sus 744B de parámetros, además de 51.2 en SWE-Bench Pro. Los resultados independientes son más flojos. Saca 17 en el índice v4.3.2 de octubre, por detrás de Qwen3.6-27B con 21, y la reseña de lanzamiento de Artificial Analysis señaló el trabajo agéntico de conocimiento como "su punto débil en relación con su categoría de tamaño". Qwen3.8-27B, publicado cuatro días después, lo supera en todos los benchmarks que publican los dos. Lo que le queda es MCP Atlas y **DFlash**, un decodificador especulativo de difusión por bloques con el que Meta midió un salto de 74.9 a 233.4 tokens/s en una RTX 5090 con una salida idéntica. Funciona en Ollama, LM Studio, llama.cpp, MLX, vLLM y SGLang.

### 10. Nemotron 3.5 Lightning (NVIDIA)

{{< image "best_open_source_self_hosted_llms_for_coding/nemotron_3_5_lightning.webp" "Página de Hugging Face de NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, con la licencia OpenMDW-1.1 y un gráfico de precisión" >}}

*Captura: huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, octubre de 2026.*

NVIDIA lanzó {{< link href="https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch" >}}Nemotron 3.5 Lightning{{< /link >}} el 11 de agosto: un híbrido de Mamba-2, MoE y atención con 31.6B de parámetros totales y 3.6B activos según el recuento de Artificial Analysis (NVIDIA redondea a 30B y 3B), destilado de Nemotron 3 Ultra, con hasta 1M de tokens de contexto. Se distribuye bajo **OpenMDW-1.1**, con los pesos, los datos de entrenamiento y las recetas publicados.

En capacidad no compite con Qwen3.8-27B. Saca 13 en el índice, igual que Nemotron 3 Super y por encima de gpt-oss-120b (12), y NVIDIA reporta 51.56 en SWE-bench Verified. Su argumento es el throughput: Artificial Analysis midió casi **670 tokens/s** con los pesos NVFP4 en el lanzamiento. Sus versiones de 4 bits ocupan 21-25.5GB en disco. Para un pipeline de mucho volumen (refactorizaciones por lotes, generación de tests, triaje de logs) ese compromiso puede compensar; para cualquier cosa que tenga que pensar, no.

### 11. Mistral Medium 3.5 y Devstral Small 2 (Mistral AI)

{{< image "best_open_source_self_hosted_llms_for_coding/mistral_medium_3_5.webp" "Página de Hugging Face del modelo mistralai/Mistral-Medium-3.5-128B, que indica que sustituye a Devstral 2 en Vibe" >}}

*Captura: huggingface.co/mistralai/Mistral-Medium-3.5-128B, octubre de 2026.*

La línea de programación de Mistral se ha concentrado. {{< link href="https://huggingface.co/mistralai/Mistral-Medium-3.5-128B" >}}Mistral Medium 3.5{{< /link >}} (abril de 2026) es un modelo denso de 128B con una licencia MIT modificada, un contexto de 256K y un 77.6% en SWE-bench Verified, y su ficha dice que reemplaza a Devstral y sustituye a Devstral 2 en Vibe CLI, el agente de programación de terminal open source de Mistral. Necesita unos 80GB en 4 bits, pero solo saca 14 en el índice v4.3.2 de octubre.

El hermano pequeño es la razón por la que Mistral sigue en esta lista. **Devstral Small 2** (24B, Apache 2.0, diciembre de 2025) saca un 68.0% en SWE-bench Verified, acepta imágenes, tiene un contexto de 256K y funciona en una sola RTX 4090 o en un Mac de 32GB. Qwen3.8-27B lo supera con un tamaño parecido, pero Devstral Small 2 con Vibe CLI es un flujo de trabajo ya montado.

#### Mistral Large 4

Large 4 ofrece pesos del orden de un billón de parámetros bajo la licencia Mistral Ecosystem Open-Weight. Si usas Vibe en local, Devstral Small 2 es la alternativa de 24.000 millones de parámetros con licencia Apache 2.0. <a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank">Large 4</a> · <a href="https://huggingface.co/mistralai/Devstral-Small-2-24B-Instruct-2512" target="_blank">Devstral Small 2</a>.

### 12. Inkling 2 Mini para editar repositorios

Thinking Machines publicó **Inkling 2 Mini** el 20 de noviembre bajo Apache 2.0. Guarda 24 capas y recorre las 12 centrales tres veces por token. Así realiza 48 evaluaciones de capa reutilizando los pesos, aunque cada pasada necesita su propia caché. Si tienes 24 GB, calcula cuánto ocupa el contexto que usas a diario antes de contar con el millón de tokens que anuncia el modelo. <a href="https://huggingface.co/blog/inkling2mini" target="_blank">Guía de Hugging Face</a> · <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">Notas de conversión de llama.cpp</a>.

{{< image "best_open_source_self_hosted_llms_for_coding/inkling_2_mini_gguf_sizes.webp" "Tamaño de los pesos de lenguaje de Inkling 2 Mini: 17,6 GB en IQ4_NL, 27,8 GB en Q8_0 y 52,2 GB en BF16." >}}

*Fuente: <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">tabla de archivos de ggml-org</a>. Para procesar imágenes, descarga también el proyector de visión.*

Thinking Machines publica un **48,2 % en DeepSWE v1.1** para Mini frente al **42,2 % de Qwen3.8-27B**. Ambos obtienen **5,6 % en Terminal-Bench 4.0**. Si dedicas buena parte del día a corregir pruebas que fallan, Mini merece un ensayo. Elige el archivo IQ4_NL y una versión de llama.cpp compatible con Inkling 2 Mini. En el mismo repositorio, Q8_0 ocupa **27,8 GB** y BF16, **52,2 GB**. En Apple Silicon también puedes cargar los pesos originales de precisión mixta con MLX. <a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini#5-evaluations" target="_blank">Ficha de Thinking Machines</a> · <a href="https://huggingface.co/blog/inkling2mini" target="_blank">Ejemplos de ejecución</a>.

### 13. Reflection Beam para equipos que necesitan Apache 2.0

Beam 1.0 se puede descargar en BF16, FP8 y NVFP4. Recibe texto, almacena 501.000 millones de parámetros y activa 23.000 millones por token. La versión NVFP4 ocupa unos 280 GB. Dos B200 pueden almacenar los pesos, pero Hugging Face recomienda cuatro para compartir el servidor o trabajar con sesiones largas. En Hopper, su ejemplo usa FP8 en ocho H200. Reflection también publica el agente con el que evaluó Beam, un punto de partida para reproducir las pruebas. <a href="https://huggingface.co/reflection/Beam-1.0-501B-A23B" target="_blank">Ficha y pesos de Reflection</a> · <a href="https://huggingface.co/blog/reflection-beam" target="_blank">Configuraciones de inferencia</a>.

Reflection publicó 65.5 en SWE-Bench Pro y 80.1 en Terminal-Bench 2.1 en su <a href="https://reflection.ai/blog/introducing-beam" target="_blank">anuncio de lanzamiento</a>.

### 14. Tencent Hy4

Para trabajar en interfaces a partir de capturas de pantalla. Tencent publicó en noviembre pesos base y ajustados para instrucciones. Elige estos últimos para un agente. La versión FP8 incluye un modelo de lenguaje de 770.000 millones de parámetros y un modelo auxiliar de decodificación especulativa bajo la licencia Tencent Hy. <a href="https://huggingface.co/tencent/Hy4-FP8" target="_blank">Ficha y documentación de Tencent</a>.

## Menciones de honor

{{< image "best_open_source_self_hosted_llms_for_coding/starcode2.webp" "StarCoder 2, LLM de código abierto de BigCode" >}}

{{< link href="https://github.com/bigcode-project/starcoder2" >}}StarCoder 2{{< /link >}} de BigCode viene en tamaños de 3B, 7B y 15B con un contexto de 16K. El de 15B se entrenó con más de 600 lenguages de The Stack v2, y cada archivo de código fuente de su conjunto de entrenamiento lleva un identificador de Software Heritage, lo que lo convierte en el modelo de programación más auditable que existe. Elígelo cuando lo que te frena sea el cumplimiento en propiedad intelectual y no la capacidad.

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k27_code.webp" "Kimi K2.7-Code, LLM de código abierto de Moonshot AI" >}}

{{< link href="https://huggingface.co/moonshotai/Kimi-K2.7-Code" >}}Kimi K2.7-Code{{< /link >}} (12 de junio) es la línea de programación de Moonshot: un MoE de 1T con 32B activos y un contexto de 262K que gasta alrededor de un 30% menos de tokens de razonamiento que K2.6. Una variante HighSpeed sirve a unos 180 tokens/s. Mantiene la licencia MIT modificada que K3 abandonó, con cerca de un tercio del tamaño de K3.

{{< image "best_open_source_self_hosted_llms_for_coding/granite_4_2.webp" "Página de Hugging Face del modelo ibm-granite/granite-4.2-30b, con la licencia Apache 2.0 y el resumen del modelo" >}}

*Captura: huggingface.co/ibm-granite/granite-4.2-30b, octubre de 2026.*

{{< link href="https://huggingface.co/ibm-granite/granite-4.2-30b" >}}IBM Granite 4.2{{< /link >}} (25 de agosto) viene en modelos densos de 3B, 8B y 30B bajo Apache 2.0, con un contexto de 128K ampliable a 512K y un modo de razonamiento. El de 30B saca 57.0 en SWE-bench Verified y 33.29 en SWE-Bench Pro. En capacidad no compite, pero es la opción empresarial con la licencia más limpia, igual que la línea Granite Code, más antigua, de IBM (de 3B a 34B, entrenada con 116 lenguajes).

{{< image "best_open_source_self_hosted_llms_for_coding/yi_coder.webp" "Yi-Coder, LLM de código abierto de 01.AI" >}}

{{< link href="https://github.com/01-ai/Yi-Coder" >}}Yi-Coder{{< /link >}} de 01.AI viene en tamaños de 1.5B y 9B con un contexto de 128K bajo Apache 2.0, y Yi-Coder-9B-Chat saca un 85.4% en HumanEval. Es lo bastante pequeño para autocompletar código en hardware modesto.

## Cómo usar estos modelos con un agente de programación {#how-to-use-these-models-with-a-coding-agent}

Para trabajar en local puedes combinar {{< link href="https://opencode.ai" >}}OpenCode{{< /link >}}, un agente de programación de terminal open source, con {{< link href="https://ollama.com" >}}Ollama{{< /link >}} sirviendo el modelo. Los comandos siguen la <a href="https://docs.ollama.com/integrations/opencode" target="_blank">guía de integración de Ollama</a>. Para esta comparación consultamos las configuraciones publicadas. No medimos el consumo de GPU en una ejecución local.

**Paso 1: Instala Ollama**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

{{< image "best_open_source_self_hosted_llms_for_coding/install_ollama.webp" "instalar ollama" >}}

**Paso 2: Instala OpenCode**

```bash
curl -fsSL https://opencode.ai/install | bash
```

{{< image "best_open_source_self_hosted_llms_for_coding/install_opencode.webp" "instalar opencode" >}}

**Paso 3: Dale al modelo contexto suficiente**

OpenCode necesita al menos 64K tokens de contexto, y el valor por defecto de Ollama es menor en la mayoría de GPUs de consumo: 4K por debajo de 24GiB de VRAM y 32K hasta 48GiB. Puedes ajustar la ventana en la app de Ollama o detener el servidor actual y reiniciarlo con el siguiente comando. <a href="https://docs.ollama.com/context-length" target="_blank">Ajustes de contexto de Ollama</a>.

```bash
OLLAMA_CONTEXT_LENGTH=64000 ollama serve
```

**Paso 4: Lanza OpenCode a través de Ollama**

En una segunda terminal:

```bash
ollama launch opencode --model qwen3.8:27b
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode.webp" "opencode" >}}

Con el modelo cargado, ejecuta `ollama ps` en otra terminal. La columna `CONTEXT` indica el contexto asignado. Si `PROCESSOR` muestra un reparto CPU/GPU, parte del modelo se ejecuta en la CPU. Comprueba ese reparto si el agente tarda demasiado en editar.

En un Mac con Apple Silicon, usa la etiqueta `qwen3.8:27b-mlx` (también de 18GB), que funciona sobre el backend MLX de Apple. Después abre tu repositorio y úsalo como cualquier otro agente de programación de terminal. Qwen3.8-27B piensa mucho por defecto, así que si las ediciones interactivas se te hacen lentas, baja el esfuerzo de razonamiento para el chat y mantenlo alto para las ejecuciones largas del agente.

## Cómo ejecutar Qwen3.8-Flash-Next en un Mac de 128GB {#running-qwen38-flash-next-on-a-128gb-mac}

Ollama es el camino fácil para Qwen3.8-27B. Flash-Next en un Mac requiere más cuidado, por un límite que la ficha técnica de Apple no menciona: macOS no le da a la GPU toda la memoria unificada. Por defecto puede fijar (wire) alrededor del 75%, unos 96GB en una máquina de 128GB. Comprueba el tuyo (`0` significa que rige el valor por defecto):

```bash
sysctl iogpu.wired_limit_mb
```

Un GGUF estándar de Flash-Next en 4 bits necesita 96-114GB, así que queda en el límite o por encima antes de añadir nada de caché KV. Puedes subir el límite con `sudo sysctl iogpu.wired_limit_mb=<MB>`, que dura hasta el siguiente reinicio (nuestro [artículo sobre el Mac Studio de 512GB](/blog/self_hosting_llms_on_512gb_m5_ultra_mac_studio/) explica cuánto hay que dejarle a macOS), pero en una máquina de 128GB eso deja muy poco para el contexto. Hay una opción mejor.

### Deja la tabla de n-gramas en el SSD

La tabla de n-gramas de 51B es una búsqueda, no una multiplicación de matrices. Cada token hashea sus tres últimos tokens y lee 16 filas, unos 2.7KB, así que la tabla puede quedarse en disco y cargarse bajo demanda. Los n-gramas frecuentes pueden permanecer en la caché de páginas. llama.cpp mapea en memoria los archivos GGUF por defecto, así que en principio ya funciona así. El problema, según la {{< link href="https://huggingface.co/AtomicChat/Qwen3.8-Flash-Next-GGUF" >}}ficha del modelo de Atomic Chat{{< /link >}}, es que Metal fija toda la región mapeada de cualquier shard que contenga un tensor de GPU, así que una tabla que comparte shard con otros pesos acaba fijada en la memoria de GPU junto con ellos. Las versiones "AD" de Atomic Chat ponen la tabla sola en su propio shard, y así Metal puede dejarla en el SSD. Descarga juntos los tres archivos de la versión elegida: los dos primeros contienen los pesos y el tercero contiene la tabla.

| Versión | Memoria de GPU | En el SSD | KLD medio | Mismo token top-1 |
|---|---|---|---|---|
| `AD-3.84bpw-IQ4_XS-M64` | 45.8GB | 39.1GB | 0.2277 | 82.68% |
| `AD-4.27bpw-Q4_K_M-M64` | **56.1GB** | 38.4GB | **0.0842** | **89.49%** |
| `AD-5.00bpw-Q5_K_M-M64` | 56.1GB | 54.4GB | 0.0837 | 89.55% |

Descarga la versión de 4.27bpw. Iguala a la de 5.00bpw dentro del margen de error de medida, y con 56GB deja unos 40GB libres bajo el límite por defecto, así que no tienes que tocar el sysctl para nada. Dos advertencias sobre los nombres. La cifra de bpw es la media de todo el archivo, y la tabla de n-gramas en Q5_1 es el 41% de él, así que los pesos de los expertos que van en la memoria de GPU están entre 2.5 y 4.5 bits; la columna KLD es el dato de calidad en el que fiarse. Y la versión de 3.84bpw es la que permite meter Flash-Next en un Mac de 64GB (Atomic Chat midió 36 tokens/s en un M5 Max de 64GB, y {{< link href="https://lilting.ch/en/articles/qwen38-flash-next-llamacpp-m1max-test" >}}una prueba independiente{{< /link >}} obtuvo 17.6 tokens/s en un M1 Max de 64GB), pero la mayoría de sus pesos de expertos están a 1.75 bits y su KLD es 2.7 veces mayor. La rama principal de llama.cpp soporta la arquitectura desde el 27 de agosto ({{< link href="https://github.com/ggml-org/llama.cpp/pull/27742" >}}PR #27742{{< /link >}}). Deja mmap activado, que es lo predeterminado, ya que es justo lo que permite paginar la tabla.

### Añade un modelo pequeño al lado

Ese margen da para un segundo modelo, y una buena forma de aprovecharlo es combinar Flash-Next como caballo de batalla con {{< link href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF" >}}Gemma 4 26B-A4B{{< /link >}} para tareas rápidas e imágenes. Gemma es un modelo de mezcla de expertos con unos 4B de parámetros activos y la versión QAT de Unsloth ocupa 14.2GB.

| Modelo | Versión | Memoria de GPU |
|---|---|---|
| Qwen3.8-Flash-Next | Atomic Chat `AD-4.27bpw-Q4_K_M-M64`, tabla en el SSD | 56.1GB |
| Gemma 4 26B-A4B | Unsloth QAT `UD-Q4_K_XL` | 14.2GB |
| **Total de pesos** | | **~70GB de los ~96GB por defecto** |

OpenCode ya reparte el trabajo así. Su opción `small_model` se encarga de llamadas ligeras como los títulos de sesión, y sin ella esas llamadas van a tu modelo principal, donde compiten con el turno del agente que estás esperando. Abre una terminal para cada servidor. Descarga primero las partes de Flash-Next en el directorio de trabajo. Los alias de los servidores coinciden con los identificadores que se usan en OpenCode.

```bash
hf download AtomicChat/Qwen3.8-Flash-Next-GGUF \
  --include "Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-*.gguf" --local-dir .
llama-server -m Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-00001-of-00003.gguf \
  --jinja -ngl 99 -c 65536 -fa on -fit off --alias flash-next --port 8080

# En una segunda terminal
llama-server -hf unsloth/gemma-4-26B-A4B-it-qat-GGUF:UD-Q4_K_XL \
  --jinja -ngl 99 -c 32768 --alias gemma-4-26b --port 8081
```

Flash-Next necesita `--jinja` (sin él, los turnos pueden salir mal formados) y `-fit off`, porque el ajuste automático de memoria de llama.cpp falla con esta arquitectura. La ficha no publica tamaños de caché KV y sus propios ejemplos se quedan en 32K, así que vigila la presión de memoria en el Monitor de Actividad la primera vez que lleves una sesión hacia los 64K que necesita OpenCode. Después apunta OpenCode a los dos servidores en `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "mac": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Flash-Next on this Mac",
      "options": { "baseURL": "http://localhost:8080/v1" },
      "models": { "flash-next": { "name": "Qwen3.8-Flash-Next" } }
    },
    "mac-small": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Gemma on this Mac",
      "options": { "baseURL": "http://localhost:8081/v1" },
      "models": { "gemma-4-26b": { "name": "Gemma 4 26B-A4B" } }
    }
  },
  "model": "mac/flash-next",
  "small_model": "mac-small/gemma-4-26b"
}
```

El precio son 14GB que Flash-Next podría dedicar al contexto, así que si las sesiones largas empiezan a ir justas, quita Gemma primero. Tampoco lo necesitas para las imágenes: Flash-Next las lee él mismo con el proyector `mmproj-Qwen3.8-Flash-Next-F16.gguf` de 0.9GB que hay en el mismo repo. Y si prefieres no usar la terminal, la app de escritorio {{< link href="https://atomic.chat/" >}}Atomic Chat{{< /link >}} ejecuta las mismas versiones.

## Ejecutar el modelo en una máquina con GPU y programar desde el portátil

Una configuración habitual es una estación de trabajo con la GPU en casa o en la oficina y un portátil para todo lo demás. Ollama solo escucha en localhost, y rechaza las peticiones cuya cabecera `Host` no sea un nombre local, así que un túnel normal recibe un `403 Forbidden`. Un túnel de [Pinggy](https://pinggy.io/) puede reescribir la cabecera y exigir una clave. Elige una clave aleatoria, sustituye `YOUR_RANDOM_KEY` en los dos ejemplos y ejecuta el comando en la máquina con GPU.

```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io -T -- "u:Host:localhost:11434" "k:YOUR_RANDOM_KEY"
```

Imprime URLs HTTPS públicas como `https://<random>.run.pinggy-free.link`, y las peticiones sin `Authorization: Bearer YOUR_RANDOM_KEY` reciben un `401`. Los clientes compatibles con OpenAI envían justo esa cabecera con su API key, así que en el portátil configura OpenCode con la URL que ha impreso el túnel y la misma clave. Usa tu configuración privada y selecciona el modelo remoto:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "gpubox/qwen3.8:27b",
  "provider": {
    "gpubox": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama on my GPU box",
      "options": {
        "baseURL": "https://<random>.run.pinggy-free.link/v1",
        "apiKey": "YOUR_RANDOM_KEY"
      },
      "models": {
        "qwen3.8:27b": { "name": "Qwen3.8-27B" }
      }
    }
  }
}
```

Los túneles gratuitos duran 60 minutos y cambian de URL cada vez, lo cual vale para una sesión rápida. Para una máquina contra la que programas a diario, un [token de Pinggy Pro](https://dashboard.pinggy.io) quita el límite de tiempo y mantiene la URL estable.

## Cómo autoalojar estos modelos

Una vez elegido el modelo, estas guías cubren el resto:

- [Cómo autoalojar cualquier LLM](/blog/how_to_self_host_any_llm_step_by_step_guide/) explica cómo ejecutar Ollama y Open WebUI en Docker, descargar un modelo y compartir la instalación fuera de tu red.
- [Las mejores herramientas y modelos LLM locales](/es/blog/top-5-herramientas-y-modelos-llm-locales/) compara LM Studio, Unsloth, Ollama y otras, y enumera qué modelos caben en 128GB.
- [El mejor hardware para agentes de programación autoalojados](/blog/best_hardware_for_self_hosted_coding_agents/) trata las GPUs y las máquinas con memoria unificada.

## Prueba una incidencia antes de elegir modelo

Elige un fallo que ya hayas corregido y crea un árbol de trabajo temporal con el commit anterior a la corrección. Da a cada modelo la misma descripción, las mismas herramientas y el mismo tiempo. Guarda la prueba de regresión fuera de las instrucciones. Al acabar cada intento, ejecuta esa prueba y revisa el parche. Anota si pasa, cuánto ha tardado y si has tenido que intervenir. En una máquina de 24 GB, esos datos te ayudan a elegir entre Inkling y Qwen aunque empaten en el índice.

## Conclusión

Con una GPU de 24 GB, empieza por Qwen3.8-27B si ya usas Ollama o quieres pasarle al agente una captura de pantalla. Si dedicas buena parte del día a corregir fallos que detectan tus pruebas, compara sus parches con los de Inkling 2 Mini. En un Mac de 128 GB, la versión dividida de Qwen3.8-Flash-Next permite dejar la tabla de n-gramas en el SSD y reservar memoria de GPU para instrucciones más largas.

Para un servidor compartido con tres o cuatro GPU de 80 GB, GLM-5.3-Flash es una opción práctica. Si dispones de las ocho GPU necesarias para la configuración de Kimi K3.1 Pro descrita en la guía, sus resultados en terminal justifican probarlo en tareas de shell largas. En ambos casos, elige una incidencia habitual y dale al agente las herramientas y el contexto que usa tu equipo. Comprueba si el parche supera la revisión con el tiempo y la memoria disponibles.
