---
title: "Los mejores LLMs de código abierto para programar y autoalojar en 2026"
slug: "mejores-llms-de-codigo-abierto-para-programar"
description: "Compara LLMs abiertos para programar en una GPU de 24 GB, un Mac de 128 GB o un clúster. Destacan Kimi K3.1 Pro, Hy4, DeepSeek-V4.1-Flash-1017, Inkling 2, Qwen3.8-27B y Nanbeige4.3-33B, con notas de AA v5.0.2 y cálculo de memoria."
date: 2026-03-26T14:15:25+05:30
lastmod: 2026-11-25T09:00:00+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "LLM de código abierto"
tags: ["open source LLM", "self-hosted AI", "local LLM", "AI coding agents", "open source"]
og_image: "images/best_open_source_self_hosted_llms_for_coding/open_coding_llms_nov_2026_banner_es.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkxvcyBtZWpvcmVzIExMTXMgZGUgY8OzZGlnbyBhYmllcnRvIHBhcmEgcHJvZ3JhbWFyIHkgYXV0b2Fsb2phciBlbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiQ29tcGFyYSBMTE1zIGFiaWVydG9zIHBhcmEgcHJvZ3JhbWFyIGVuIHVuYSBHUFUgZGUgMjQgR0IsIHVuIE1hYyBkZSAxMjggR0IgbyB1biBjbMO6c3Rlci4gRGVzdGFjYW4gS2ltaSBLMy4xIFBybywgSHk0LCBEZWVwU2Vlay1WNC4xLUZsYXNoLTEwMTcsIElua2xpbmcgMiwgUXdlbjMuOC0yN0IgeSBOYW5iZWlnZTQuMy0zM0IsIGNvbiBub3RhcyBkZSBBQSB2NS4wLjIgeSBjw6FsY3VsbyBkZSBtZW1vcmlhLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9iZXN0X29wZW5fc291cmNlX3NlbGZfaG9zdGVkX2xsbXNfZm9yX2NvZGluZy9vcGVuX2NvZGluZ19sbG1zX25vdl8yMDI2X2Jhbm5lcl9lcy53ZWJwIiwKICAiZGF0ZVB1Ymxpc2hlZCI6ICIyMDI2LTAzLTI2VDE0OjE1OjI1KzA1OjMwIiwKICAiZGF0ZU1vZGlmaWVkIjogIjIwMjYtMTEtMjVUMDk6MDA6MDArMDU6MzAiLAogICJpbkxhbmd1YWdlIjogImVzIgp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---

{{< image "best_open_source_self_hosted_llms_for_coding/open_coding_llms_nov_2026_banner_es.webp" "Dos gráficos de barras de modelos de programación de pesos abiertos: el Artificial Analysis Intelligence Index v5.0.2, donde Kimi K3.1 Pro lidera con 47, y la ejecución de Terminal-Bench 4.1 de Artificial Analysis, con Claude Opus 5.5 como referencia alojada" >}}

Autoalojar un modelo de programación es, sobre todo, un problema de memoria. Tienen que caber los pesos, y tambien todo lo que el agente va acumulando en su contexto mientras lee archivos, ejecuta pruebas y vuelve a leer la salida.

El modelo descargable más fuerte en el Artificial Analysis Intelligence Index v5.0.2 es **Kimi K3.1 Pro**, con 47 puntos, frente a los 59 de Claude Opus 5.5 con esfuerzo máximo. Necesita ocho GPU Blackwell. En una sola tarjeta de 24 GB la carrera está más reñida: Qwen3.8-27B, Inkling 2 Mini y Nanbeige4.3-33B obtienen 20. Nanbeige completa el 29 % de las tareas de Terminal-Bench 4.1 en la ejecución de Artificial Analysis y los otros dos el 6 %, pero su caché KV es más del triple de grande, así que en esa tarjeta le queda la mitad de contexto.

Comprobé cada modelo de esta lista contra su ficha de Hugging Face, la <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank">clasificación de Artificial Analysis</a> y la <a href="https://www.tbench.ai/leaderboard" target="_blank">clasificación de Terminal-Bench 4.1</a>. No ejecuté inferencia local para esta comparativa. Las cifras de memoria salen de los tamaños de archivo y del `config.json` de cada modelo.

{{% tldr %}}

1. **Una GPU de 24 GB:** Qwen3.8-27B es la opción fácil. Su versión de 18 GB en Ollama más 64K tokens de caché KV suman unos 22 GB, con licencia Apache 2.0.
2. **Una tarjeta de 32 GB o un Mac de 32 GB:** añade Nanbeige4.3-33B para trabajo de agente con mucha terminal, o Inkling 2 Mini para arreglar repositorios. Los dos son Apache 2.0.
3. **Un Mac de 128 GB:** Qwen3.8-Flash-Next con el GGUF dividido de Atomic Chat mantiene 56 GB en la memoria de la GPU y una tabla de consulta de 38 GB en el SSD.
4. **Un servidor GPU compartido:** GLM-5.3-Flash (MIT) cabe en tres o cuatro tarjetas de 80 GB a 4 bits. Inkling 2 Small (Apache 2.0) y DeepSeek-V4.1-Flash-1017 (MIT) caben en cuatro H200.
5. **Un nodo de ocho GPU:** Kimi K3.1 Pro supera a todos los modelos abiertos en el índice y en Terminal-Bench, con Tencent Hy4 en segundo lugar. Las dos licencias añaden condiciones para los grandes revendedores de API.

{{% /tldr %}}

## ¿Qué modelos de programación caben en tu hardware?

El tamaño de un archivo te dice cuánto vas a descargar. El servidor en marcha también necesita espacio para la caché KV (las claves y los valores de atención de cada token del contexto), que crece a medida que el agente lee archivos y recibe la salida de las herramientas. Ollama multiplica el contexto por el número de peticiones en paralelo, así que dos personas compartiendo un servidor necesitan el doble de caché.

| Máquina | Modelo y licencia | Qué presupuestar |
|---|---|---|
| Una GPU de 24 GB | Qwen3.8-27B, Apache 2.0 | 18 GB de <a href="https://ollama.com/library/qwen3.8/tags" target="_blank">descarga en Ollama</a>, más unos 4,3 GB de caché KV con 64K tokens. |
| Una GPU o un Mac de 32 GB | Inkling 2 Mini o Nanbeige4.3-33B, ambos Apache 2.0 | 17,6 GB y 18,6 GB a 4 bits. Thinking Machines recomienda 32 GB para Inkling, y la caché de Nanbeige ronda los 14 GB con 64K. |
| Apple Silicon con 128 GB | Qwen3.8-Flash-Next, Qwen Community License | La versión dividida de Atomic Chat mantiene 56,1 GB en la memoria de la GPU y deja una tabla de 38,4 GB en el SSD. |
| Tres o cuatro GPU de 80 GB | GLM-5.3-Flash, MIT | Los <a href="https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF" target="_blank">archivos de 4 bits de Unsloth</a> ocupan entre 157 y 200 GB. |
| Cuatro H200 o dos B300 | Inkling 2 Small (Apache 2.0) o DeepSeek-V4.1-Flash-1017 (MIT) | 394 GB de pesos NVFP4 para Inkling, 510 GB para DeepSeek con sus tablas Engram en la RAM del host. |
| Un nodo de ocho GPU | Tencent Hy4 (Tencent Hy License) o Kimi K3.1 Pro (Kimi K3.1-Pro License) | Unos 944 GB de memoria de GPU para Hy4-FP8. Los 1,56 TB de pesos MXFP4 de Kimi funcionan en ocho B300 o en dos bandejas GB300. |

### Cuánto contexto cabe en una tarjeta de 24 GB

Puedes estimar la caché KV a partir del `config.json` de un modelo: 2 (claves y valores) x capas de atención x cabezas KV x dimensión de cabeza x 2 bytes en FP16, por cada token. OpenCode pide al menos 64K tokens de contexto, así que ese es el presupuesto que usé.

Qwen3.8-27B sale barato aquí porque solo 16 de sus 64 capas usan atención completa. Las otras 48 son capas Gated DeltaNet, que mantienen un estado de tamaño fijo por mucho que crezca el contexto. Con 4 cabezas KV de 256 dimensiones, eso son 64 KiB por token, o 4,3 GB con 64K. Devstral Small 2 tiene 40 capas de atención normales con 8 cabezas KV de 128, así que 160 KiB por token y 10,7 GB. Nanbeige4.3-33B es una arquitectura Llama sin más, con 52 capas, lo que sale a 208 KiB por token y 14,0 GB.

{{< image "best_open_source_self_hosted_llms_for_coding/kv_cache_24gb_card_es.webp" "Gráfico de barras apiladas de pesos a 4 bits más caché KV en FP16 con 64K tokens: Qwen3.8-27B 18 GB más 4,3 GB, Devstral Small 2 15 GB más 10,7 GB, Nanbeige4.3-33B 18,6 GB más 14,0 GB, frente a los 25,8 GB de una tarjeta de 24 GiB" >}}

*Pesos: tamaños de archivo GGUF de Ollama y bartowski. Caché KV: calculada a partir del `config.json` de cada modelo. Los búferes de cómputo y el proyector de visión van aparte.*

Una RTX 4090 de "24 GB" tiene 24 GiB, unos 25,8 GB, y el controlador y los búferes de cómputo se llevan una parte. Qwen cabe con margen. Devstral, con 25,7 GB, no. Poner `OLLAMA_KV_CACHE_TYPE=q8_0` reduce la caché a la mitad, lo que deja Devstral en 20,4 GB, pero Nanbeige sigue necesitando 25,6 GB con 64K. En una tarjeta de 24 GB, ejecútalo con 32K (22,1 GB con caché q8) o dale una tarjeta de 32 GB. Inkling 2 Mini es más difícil de estimar a mano. La mayoría de sus capas usan ventanas deslizantes de 1024 tokens, así que la caché crece despacio, pero cada una de sus capas en bucle mantiene su propia caché, y el <a href="https://huggingface.co/blog/inkling2mini" target="_blank">artículo de lanzamiento en Hugging Face</a> dice que el archivo IQ4_NL de 17,6 GB "cabe en 32 GB de RAM de GPU o de memoria unificada".

## Qué dicen las pruebas

Artificial Analysis promedia nueve evaluaciones en su <a href="https://artificialanalysis.ai/methodology/intelligence-benchmarking" target="_blank">Intelligence Index v5.0.2</a>, repartidas en cuatro grupos con el mismo peso. El grupo de programación lo forman FrontierCode-AA 2.0 (15 %) y Terminal-Bench 4.1 (10 %). La versión 5.0.2 cambió Terminal-Bench 4.0 por 4.1, que mantiene las mismas 66 tareas con verificadores más estrictos, y volvió a puntuar FrontierCode para todos los modelos. Las puntuaciones del índice v4.x están en otra escala. Qwen3.8-27B marcaba 34 en v4.3.2 y marca 20 en v5.0.2, así que nunca compares una captura antigua con una actual.

La tabla recoge las ejecuciones propias de Artificial Analysis, con el nivel de razonamiento más alto de cada modelo.

| Modelo | Índice v5.0.2 | Terminal-Bench 4.1 | FrontierCode-AA 2.0 |
|---|---:|---:|---:|
| Claude Opus 5.5, max *(referencia alojada)* | 59 | 59,1 % | 46,9 % |
| Kimi K3.1 Pro | **47** | **68,2 %** | 25,5 % |
| Tencent Hy4 | 35 | 37,9 % | **31,2 %** |
| DeepSeek-V4.1-Flash-1017 | 32 | 32,3 % | 28,2 % |
| GLM-5.3 | 32 | 40,9 % | 21,6 % |
| Inkling 2 Small | 31 | 13,6 % | 25,4 % |
| MiMo-V2.6-Pro | 30 | 35,4 % | 24,0 % |
| MiniMax-M3.1-Flash | 29 | 25,8 % | 20,8 % |
| Qwen3.8-Flash-Next | 28 | 24,2 % | 27,1 % |
| GLM-5.3-Flash | 28 | 32,8 % | 17,2 % |
| MiMo-V2.6-Flash | 27 | 23,7 % | 21,6 % |
| Mistral Large 4 | 26 | 24,7 % | 15,0 % |
| Nanbeige4.3-33B | 20 | 29,3 % | 10,7 % |
| Inkling 2 Mini | 20 | 5,6 % | 15,1 % |
| Qwen3.8-27B | 20 | 5,6 % | 14,9 % |
| MiniMax-M3 | 19 | 2,0 % | 23,0 % |
| Beam 1.0 | 18 | 3,0 % | 5,1 % |

Kimi K3.1 Pro supera a Opus 5.5 en Terminal-Bench en esta ejecución y se queda muy por detrás en FrontierCode, así que "el mejor" depende de si tu agente vive en una terminal o en una base de código grande. Otros tres modelos abiertos puntúan por la mitad de la tabla pero no tienen sección más abajo: Ling 3.1 Flash 1019 de InclusionAI (30, MIT, 560B), Step 5 Preview de StepFun (29) y Muse Spark Open de Meta, de acceso restringido (25). Cada uno necesita 530 GB o más de pesos.

### Pruebas de los laboratorios y el harness del agente

Las cifras que publican los laboratorios sirven cuando una misma tabla pasa todos los modelos por el mismo harness (el programa que conduce al agente). Las fichas de Thinking Machines publican DeepSWE v1.1 con mini-swe-agent para todos: DeepSeek-V4.1-Flash-1017 77,0 %, MiniMax-M3.1-Flash 73,7 %, Inkling 2 Small 72,1 %, MiMo-V2.6-Pro 71,9 %, GLM-5.3 69,0 %, Kimi K3 68,5 %, Inkling 2 Mini 48,2 % y Qwen3.8-27B 42,2 %. En la clasificación pública de Terminal-Bench 4.1, donde cada entrada elige su propio agente, Kimi K3.1 Pro con Claude Code obtiene un 59,7 % frente al 65,8 % de Opus 5.5. Es menos que su 68,2 % en la ejecución de Artificial Analysis, lo que te da una idea de cuánto mueve el harness estas cifras.

Dejé fuera SWE-Bench Pro. Scale lo pasó a un <a href="https://huggingface.co/datasets/ScaleAI/SWE-bench_Pro" target="_blank">conjunto V2 de 642 tareas</a>, la mayoría de las fichas de modelo siguen citando el conjunto v1 de 731 tareas, y la clasificación pública de Scale no incluye los modelos abiertos actuales.

## Los mejores LLMs de código abierto para programar

El orden sigue más o menos el índice. Las puntuaciones son de Artificial Analysis v5.0.2, salvo que se cite un laboratorio.

### 1. Kimi K3.1 Pro (Moonshot AI)

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k3_1_pro.webp" "Página del modelo moonshotai/Kimi-K3.1-Pro en Hugging Face, con la licencia kimi-k3.1-pro y 2,8T parámetros" >}}

*Captura: huggingface.co/moonshotai/Kimi-K3.1-Pro.*

<a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro" target="_blank">Kimi K3.1 Pro</a>, de Moonshot, está post-entrenado a partir de Kimi K3 y conserva su forma: 2,8T parámetros en total, 104B activos, 896 expertos con 16 por token, entrada de imagen y un contexto de 1.048.576 tokens. Hay un cambio que importa en sesiones largas de agente: las 24 capas Gated MLA de atención completa pasaron a ser capas Gated DeepSeek Sparse Attention. Los pesos salen del entrenamiento con cuantización (quantization-aware training) ya en MXFP4, así que la descarga de 1,56 TB ya es la versión pequeña.

Obtiene **47**, el mejor resultado de pesos abiertos, y un 68,2 % en la ejecución de Terminal-Bench 4.1 de Artificial Analysis. La <a href="https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro" target="_blank">receta de vLLM</a> usa un grupo de paralelismo tensorial de ocho GPU en un nodo B300, dos bandejas GB300 o un nodo MI355X, y necesita una nightly de vLLM 0.35.0 o la imagen `vllm/vllm-openai:kimi-k31`, con `--tool-call-parser kimi_k3 --reasoning-parser kimi_k3`. Si escribes tu propio bucle de agente, devuelve el mensaje completo del asistente en cada turno, incluido `reasoning_content`; la ficha dice que el uso de herramientas en varios turnos depende de ello.

La <a href="https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE" target="_blank">Kimi K3.1-Pro License</a> es de estilo MIT con dos añadidos. Un negocio de modelo como servicio cuyos ingresos, sumando sus filiales, superen los 20 millones de dólares en 12 meses necesita un acuerdo aparte, y los productos con más de 100 millones de usuarios mensuales o 20 millones de dólares de ingresos mensuales deben mostrar "Kimi K3.1-Pro" en la interfaz. El uso interno está exento. El anterior Kimi K3 ocupa lo mismo y obtiene un 23,0 % en la clasificación pública de Terminal-Bench 4.1 frente al 59,7 % de K3.1 Pro, así que hay pocas razones para desplegarlo ahora.

### 2. Tencent Hy4 y Hy4 flash

{{< image "best_open_source_self_hosted_llms_for_coding/hy4.webp" "Página del modelo tencent/Hy4 en Hugging Face, con la licencia tencent-hy-license y la introducción del modelo" >}}

*Captura: huggingface.co/tencent/Hy4.*

<a href="https://huggingface.co/tencent/Hy4" target="_blank">Hy4</a>, de Tencent, es un modelo de lenguaje de mezcla de expertos de 770B con 49B parámetros activos, 78 capas, 256 expertos enrutados (8 por token) más un experto compartido, un codificador de visión de 1,23B y un contexto de 1M tokens. La atención es Gated DeepSeek Sparse Attention, y un modelo borrador integrado de 3,3B llamado DFly2 reutiliza la caché KV del modelo principal para la decodificación especulativa, así que no gasta memoria de caché extra.

Hy4 obtiene 35, segundo entre los modelos abiertos, y su 31,2 % en FrontierCode-AA 2.0 es el mejor resultado de pesos abiertos en esa prueba. El checkpoint FP8 ocupa 786 GB en disco, y la <a href="https://recipes.vllm.ai/tencent/Hy4" target="_blank">receta de vLLM</a> pide unos 944 GB de memoria de GPU agregada, así que cuenta con un nodo de ocho GPU; la receta muestra 8x B300 y dice que 8x MI355X ejecuta el checkpoint FP8. El razonamiento tiene dos ajustes, `no_think` y `high`. La Tencent Hy License deriva de Apache 2.0 con condiciones comerciales añadidas: un negocio de modelo como servicio necesita una licencia aparte cuando los ingresos superan los 50 millones de dólares al año o un producto pasa de 100 millones de usuarios mensuales, y el uso puramente interno está exento. La propia ficha de Tencent reconoce con franqueza que "sigue habiendo una diferencia notable" con los mejores modelos propietarios en programación de largo recorrido.

<a href="https://huggingface.co/tencent/Hy4-flash" target="_blank">Hy4 flash</a> es el hermano más barato: 220B en total, incluidos 64B de tablas n-gram "Engram", con unos 12B activos. No cuentes con un Mac de 128 GB. El GGUF Q4_K_M de AngelSlim ocupa 168 GB, y llama.cpp necesita la build b12755 o posterior para cargarlo. En la clasificación pública de Terminal-Bench 4.1 obtiene un 11,8 %.

### 3. DeepSeek-V4.1-Flash-1017 (DeepSeek)

{{< image "best_open_source_self_hosted_llms_for_coding/deepseek_v4_1_flash_1017.webp" "Página del modelo deepseek-ai/DeepSeek-V4.1-Flash-1017 en Hugging Face, con la licencia MIT y la introducción del modelo" >}}

*Captura: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017.*

<a href="https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017" target="_blank">DeepSeek-V4.1-Flash-1017</a> es una actualización del V4.1-Flash con los mismos 510 GB de pesos bajo MIT. El diseño es poco habitual: una red troncal de 552B más 196B de memoria Engram que puede quedarse en la RAM de la CPU, 384 expertos con 6 activos, y 8B parámetros activos durante el prefill pero 16B durante la decodificación. DeepSeek publica que Terminal-Bench 4.0 sube del 31,2 % al 42,3 % (harness de Claude Code) y DeepSWE v1.1 del 74,2 % al 77,0 % (Mini-SWE-V2), el mejor resultado de DeepSWE entre los modelos abiertos.

Obtiene 32 con esfuerzo máximo y cuesta 0,60 $ por tarea del índice en la ejecución de Artificial Analysis, frente a 3,68 $ de Kimi K3.1 Pro. Dos notas prácticas. La versión no trae plantilla de chat Jinja; incluye un codificador de referencia en Python y las bibliotecas <a href="https://github.com/deepseek-ai/deepseek-recipe" target="_blank">deepseek-recipe</a>, así que comprueba que tu servidor admite el formato antes de fiarte de las llamadas a herramientas. Y vLLM documenta una <a href="https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4.1-Flash" target="_blank">configuración con cuatro H200</a> que coloca las tablas Engram en RAM del host fijada (pinned), lo que libera memoria de GPU para sesiones simultáneas.

DeepSeek-V4-Pro-0813 (1,6T en total, 49B activos, 893 GB) ahora obtiene 23, por debajo del Flash, así que sáltatelo salvo que ya lo tengas desplegado. El antiguo {{< link href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731" >}}V4-Flash-0731{{< /link >}} de 284B todavía cabe en una máquina de 128 GB a 3 bits, como explica nuestra {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}guía de herramientas y modelos LLM locales{{< /link >}}.

### 4. GLM-5.3 y GLM-5.3-Flash (Z.AI)

{{< image "best_open_source_self_hosted_llms_for_coding/glm_5_3.webp" "Página del modelo zai-org/GLM-5.3 en Hugging Face, con la licencia glm-5.3 y 753B parámetros" >}}

*Captura: huggingface.co/zai-org/GLM-5.3.*

{{< link href="https://huggingface.co/zai-org/GLM-5.3" >}}GLM-5.3{{< /link >}} mantiene la base de 744B de GLM-5.2 con 40B activos, y toda la mejora viene del post-entrenamiento. Obtiene 32, y su 40,9 % en Terminal-Bench 4.1 solo lo supera Kimi entre los modelos abiertos. El repositorio nativo en FP8 ocupa 756 GB, que caben en ocho H200 pero no en un nodo H100 de 8x80 GB. La GLM-5.3 License se parece a MIT, salvo que los operadores de modelo como servicio con más de 10.000 millones de dólares de ingresos necesitan antes una revisión de seguridad de Z.AI.

**GLM-5.3-Flash** es el que la mayoría de equipos puede desplegar. Es un MoE de 320B con 18B activos, bajo MIT sin más, multimodal de forma nativa, con un híbrido de atención lineal y dispersa que, según Z.AI, reduce la caché KV 4,44 veces respecto a GLM-5.3. Obtiene 28 y un 32,8 % en Terminal-Bench 4.1, mejor en la terminal que varios modelos que están por encima en el índice. Los GGUF de 4 bits de Unsloth van de 157 GB (`UD-IQ4_XS`) a 200 GB (`UD-Q4_K_XL`), que caben en tres o cuatro GPU de 80 GB, y el `UD-Q2_K_XL` de 2 bits ocupa 109 GB, con una pérdida real de calidad. La rama principal de llama.cpp ya lo soporta ({{< link href="https://github.com/ggml-org/llama.cpp/pull/27773" >}}PR #27773{{< /link >}}). Ollama solo ofrece `glm-5.3-flash:cloud`, así que ejecuta el GGUF con llama.cpp o LM Studio.

### 5. Inkling 2 Small e Inkling 2 Mini (Thinking Machines)

{{< image "best_open_source_self_hosted_llms_for_coding/inkling_2_mini.webp" "Página del modelo thinkingmachines/Inkling-2-Mini en Hugging Face, con la licencia Apache 2.0 y 26,4B parámetros" >}}

*Captura: huggingface.co/thinkingmachines/Inkling-2-Mini.*

Thinking Machines publicó los dos bajo Apache 2.0, sin cláusulas de ingresos. <a href="https://huggingface.co/thinkingmachines/Inkling-2-Small" target="_blank">Inkling 2 Small</a> es un MoE de 594B con 17B activos, 48 capas, 384 expertos con 8 por token y un contexto de 1M tokens. Se entrenó en NVFP4, y ese checkpoint de 394 GB necesita al menos 500 GB de VRAM agregada: dos B300 o cuatro H200. Obtiene 31 y un 25,4 % en FrontierCode-AA 2.0, pero solo un 13,6 % en Terminal-Bench 4.1. Elígelo para trabajo sobre repositorios con una licencia limpia, no para sesiones largas en la terminal.

<a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini" target="_blank">Inkling 2 Mini</a> guarda 24 capas y ejecuta las 12 centrales tres veces, así que cada token recibe 48 pasadas de capa a partir de 26,4B parámetros con 3,4B activos (5,4B efectivos). El checkpoint nativo ocupa unos 20 GB. Los <a href="https://huggingface.co/ggml-org/Inkling-2-Mini-GGUF" target="_blank">GGUF</a> de ggml-org ocupan 17,6 GB en IQ4_NL, 27,8 GB en Q8_0 y 52,2 GB en BF16, Unsloth baja hasta 7,8 GB a 1 bit, y Ollama ya lo ofrece como `inkling-2-mini` (18-20 GB).

Mini empata con Qwen3.8-27B a 20 en el índice y a 5,6 % en Terminal-Bench 4.1, pero llegó ahí en 14,7 minutos por tarea frente a 31,0, y por 0,59 $ frente a 3,53 $. En la tabla de Thinking Machines supera a Qwen en DeepSWE (48,2 % frente a 42,2 %) y en SWE-bench Verified solo con bash (79,2 % frente a 77,8 %). Si pasas la mayor parte del día arreglando pruebas que fallan, es el más rápido de los dos.

### 6. MiMo-V2.6-Pro y MiMo-V2.6-Flash (Xiaomi)

{{< image "best_open_source_self_hosted_llms_for_coding/mimo_v2_6_pro.webp" "Página del modelo XiaomiMiMo/MiMo-V2.6-Pro-MOPD en Hugging Face, con la licencia MIT y 1T parámetros" >}}

*Captura: huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD.*

Xiaomi publicó los dos bajo MIT sin más, y los repositorios mejorados `-MOPD` que salieron despues son los que hay que descargar. Aceptan texto, imagen, vídeo y audio, con un contexto de 1M tokens y un modelo borrador de predicción multitoken. El <a href="https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD" target="_blank">Pro</a> es un MoE de 1,02T con 42B activos y unos 574 GB de pesos, la mayoría en MXFP4; vLLM documenta ocho H200 o cuatro MI355X. Obtiene 30 y un 35,4 % en Terminal-Bench 4.1. El Flash tiene 309B con 15B activos, unos 178 GB, y funciona en cuatro H200. Obtiene 27. Ninguno de los dos lidera nada aquí, pero pesos MIT, entrada de audio y un Pro que cabe en cuatro MI355X es una combinación que no ofrece nadie más.

### 7. MiniMax-M3.1-Flash y MiniMax M3 (MiniMax)

{{< image "best_open_source_self_hosted_llms_for_coding/minimax_m3_1_flash.webp" "Página del modelo MiniMaxAI/MiniMax-M3.1-Flash en Hugging Face, con la licencia minimax-community y la ficha del modelo" >}}

*Captura: huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash.*

<a href="https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash" target="_blank">MiniMax-M3.1-Flash</a> mantiene el MoE de 428B de M3 con 23B activos y su contexto de 1M tokens, pero usa MiniMax Sparse Attention en todas las capas, añade entrenamiento con cuantización y trae una cabeza de decodificación especulativa DSpark. Los pesos ocupan 252 GB. Obtiene 29, diez puntos más que M3, y MiniMax publica un 73,7 % en DeepSWE v1.1 (mini-SWE-agent) y un 38,1 % en Terminal-Bench 4.0 (harness de Codex). Por ahora funciona con vLLM, SGLang o TokenSpeed; la ficha indica que el soporte de Transformers y Unsloth está en curso.

Lee la **MiniMax Community License** antes que nada. La concesión base es no comercial. El uso comercial necesita el aviso "Built with MiniMax M3.1-Flash" y un único correo a MiniMax, y los productos con más de 20 millones de dólares al año necesitan autorización por escrito. El anterior {{< link href="https://huggingface.co/MiniMaxAI/MiniMax-M3" >}}MiniMax M3{{< /link >}} tiene las mismas condiciones. Sus GGUF de Unsloth ocupan 213-270 GB a 4 bits y funcionan con atención densa, porque llama.cpp no implementa MSA.

### 8. Qwen3.8-Flash-Next (Alibaba): el mejor para una máquina de 128 GB

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_flash_next.webp" "Página del modelo Qwen/Qwen3.8-Flash-Next en Hugging Face, con la licencia qwen-community-1.0" >}}

*Captura: huggingface.co/Qwen/Qwen3.8-Flash-Next.*

{{< link href="https://huggingface.co/Qwen/Qwen3.8-Flash-Next" >}}Qwen3.8-Flash-Next{{< /link >}} es un anticipo de la arquitectura Qwen4: 125B parámetros con 6B activos, más una tabla de embeddings n-gram de 51B que puede vivir en la RAM o en el SSD, Gated DeltaNet con Qwen Sparse Attention, entrada de imagen y un contexto de 262K ampliable a 1M. Obtiene 28, y su 27,1 % en FrontierCode-AA 2.0 supera a todos los modelos abiertos salvo Hy4 y DeepSeek-V4.1-Flash-1017.

Lee primero la **Qwen Community License**. La atribución es obligatoria por encima de 100 millones de usuarios mensuales o 20 millones de dólares de ingresos mensuales, y cualquier empresa que tenga un negocio de modelo como servicio o de "asistente de trabajo con IA" (programación con IA o productividad de oficina) necesita una licencia aparte antes del uso comercial, sea del tamaño que sea. El uso puramente interno está exento. En un Mac, el GGUF que elijas importa más que con cualquier otro modelo de esta lista; la [sección de configuración más abajo](#ejecutar-qwen38-flash-next-en-un-mac-de-128-gb) explica por qué.

### 9. Qwen3.8-27B (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_27b.webp" "Página del modelo Qwen/Qwen3.8-27B en Hugging Face, con la licencia Apache 2.0" >}}

*Captura: huggingface.co/Qwen/Qwen3.8-27B.*

Para quien no tiene un servidor con GPU, sigue siendo la opción por defecto. {{< link href="https://huggingface.co/Qwen/Qwen3.8-27B" >}}Qwen3.8-27B{{< /link >}} (**Apache 2.0**) es un modelo denso de visión y lenguaje de 27B cuyas 64 capas repiten tres bloques Gated DeltaNet y un bloque de atención con compuerta, con un contexto de 262K. Esa disposición es la razón de que su caché KV se mantenga pequeña. Alibaba publica un 61,7 % en SWE-Bench Pro v1 y 90,3 en LiveCodeBench v6.

Obtiene 20 con razonamiento `xhigh`, 17,5 con `medium` y 15,7 con `low`, y un 5,6 % en Terminal-Bench 4.1. La queja de verdad es lo mucho que se enrolla: Artificial Analysis midió unos 59 tokens de salida por segundo y 31 minutos por tarea del índice con `xhigh`, el doble que Inkling 2 Mini para la misma puntuación. Baja el razonamiento para ediciones interactivas y súbelo para ejecuciones de agente desatendidas. La etiqueta predeterminada `qwen3.8:27b` de Ollama ocupa 18 GB, la etiqueta `27b-mlx` funciona con el backend MLX de Apple, y NVIDIA ha publicado pequeños modelos borrador para decodificación especulativa.

### 10. Nanbeige4.3-33B (Nanbeige)

{{< image "best_open_source_self_hosted_llms_for_coding/nanbeige_4_3_33b.webp" "Página del modelo Nanbeige/Nanbeige4.3-33B en Hugging Face, con la licencia Apache 2.0 y 33B de parámetros" >}}

*Captura: huggingface.co/Nanbeige/Nanbeige4.3-33B.*

<a href="https://huggingface.co/Nanbeige/Nanbeige4.3-33B" target="_blank">Nanbeige4.3-33B</a> (Apache 2.0) es la sorpresa en las pruebas de terminal. Es un modelo denso de 33B, solo texto, sobre la arquitectura Llama de siempre y con un contexto de 512K. La ficha de Nanbeige pasa todos los modelos por el mismo harness y publica un 23,8 % en Terminal-Bench 4.0 frente al 6,3 % de Qwen3.8-27B, y un 65,5 % en DeepSWE frente al 42,5 %. Qwen sigue ganando en SWE-Bench Pro, 61,7 % frente a 60,3 %. Artificial Analysis midió por su cuenta un 29,3 % en Terminal-Bench 4.1, el mejor resultado de cualquier modelo de este tamaño, con una puntuación de 20 en el índice.

El precio es la memoria, como muestra el gráfico de arriba. Ollama no lo ofrece, así que usa los GGUF de bartowski (18,6 GB en IQ4_XS, 20,8 GB en Q4_K_M) con llama.cpp o LM Studio. La ficha recomienda `preserve_thinking=True` y llamadas a herramientas en XML para trabajo de agente. En una tarjeta de 24 GB yo empezaría con este comando (sin probar), que limita el contexto a 32K y cuantiza la caché:

```bash
llama-server -hf bartowski/Nanbeige_Nanbeige4.3-33B-GGUF:IQ4_XS \
  --jinja -ngl 99 -c 32768 -fa on -ctk q8_0 -ctv q8_0 \
  --chat-template-kwargs '{"preserve_thinking": true}' --port 8080
```

### 11. Qwen3.8-Max (Alibaba)

{{< image "best_open_source_self_hosted_llms_for_coding/qwen3_8_max.webp" "Página del modelo Qwen/Qwen3.8-2.4T-A95B en Hugging Face, los pesos abiertos de Qwen3.8-Max" >}}

*Captura: huggingface.co/Qwen/Qwen3.8-2.4T-A95B.*

Alibaba abrió los pesos de Qwen3.8-Max como {{< link href="https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B" >}}Qwen3.8-2.4T-A95B{{< /link >}}: un MoE de 2,4T, solo texto, con 95B activos y un contexto de 262K. Su ficha publica un 67,7 % en SWE-Bench Pro v1. Artificial Analysis aún no lo ha puntuado en el índice v5, pero midió un 11,1 % en Terminal-Bench 4.1. La receta de vLLM ejecuta la versión NVFP4 (1,32 TiB) en ocho B300. La licencia exige una licencia aparte a los negocios de programación con IA y de asistentes de oficina con más de 50 millones de dólares al año. Con ese hardware, Kimi K3.1 Pro es la opción más fuerte. El nuevo Qwen4-Max de Alibaba obtiene 43, pero de momento solo está disponible por API.

### 12. Reflection Beam 1.0 (Reflection)

{{< image "best_open_source_self_hosted_llms_for_coding/beam_1_0.webp" "Página del modelo reflection/Beam-1.0-501B-A23B en Hugging Face, con la licencia Apache 2.0" >}}

*Captura: huggingface.co/reflection/Beam-1.0-501B-A23B.*

<a href="https://huggingface.co/reflection/Beam-1.0-501B-A23B" target="_blank">Beam 1.0</a> (Apache 2.0) es un MoE de 501B, solo texto, con 23B activos y un contexto de 1M tokens, en BF16, FP8 y NVFP4. El checkpoint NVFP4 ocupa unos 280 GB, y <a href="https://huggingface.co/blog/reflection-beam" target="_blank">Hugging Face recomienda cuatro B200</a> para uso compartido. Reflection publica un 81,6 % en SWE-bench Verified y un 66,1 % en SWE-Bench Pro v1, pero solo un 43,3 % en DeepSWE, y Artificial Analysis midió un 3,0 % en Terminal-Bench 4.1 con una puntuación de 18 en el índice. Esa diferencia entre arreglar una sola incidencia y aguantar ejecuciones largas de agente es el patrón que hay que vigilar. El punto fuerte de Beam es la velocidad: 373 tokens de salida por segundo en Artificial Analysis, el más rápido de esta lista, lo que encaja con refactorizaciones por lotes y generación de pruebas.

### 13. Mistral Large 4, Medium 3.5 y Devstral Small 2 (Mistral AI)

{{< image "best_open_source_self_hosted_llms_for_coding/mistral_large_4.webp" "Página del modelo mistralai/Mistral-Large-4-1T-A52B en Hugging Face, con la introducción del modelo" >}}

*Captura: huggingface.co/mistralai/Mistral-Large-4-1T-A52B.*

<a href="https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B" target="_blank">Mistral Large 4</a> es un MoE de 1T con 52B activos contando los embeddings, 128 expertos con 4 por token, entrada de imagen y un contexto de 1M tokens. Ahora es el modelo detrás de Vibe, la CLI de programación de código abierto de Mistral. Obtiene 26 y un 24,7 % en Terminal-Bench 4.1, y la versión NVFP4 ocupa 610 GB. La Mistral Ecosystem Open-Weight License es una MIT modificada que exige una licencia aparte a los negocios de modelo como servicio.

Mistral Medium 3.5 (128B denso) obtiene solo 5 en el índice actual, así que yo no lo usaría para agentes. El modelo pequeño sigue siendo útil. **Devstral Small 2** (24B, Apache 2.0) es una descarga de 15 GB en Ollama con entrada de imagen. Su caché de 10,7 GB con 64K es la pega que se ve en el gráfico de arriba, así que pon `OLLAMA_KV_CACHE_TYPE=q8_0` en una tarjeta de 24 GB.

### 14. Muse Glimmer 30B (Meta)

{{< image "best_open_source_self_hosted_llms_for_coding/muse_glimmer_30b.webp" "Página del modelo meta-models/Muse-Glimmer-30B en Hugging Face, con la licencia Apache 2.0 y la ficha del modelo" >}}

*Captura: huggingface.co/meta-models/Muse-Glimmer-30B.*

{{< link href="https://huggingface.co/meta-models/Muse-Glimmer-30B" >}}Muse Glimmer{{< /link >}} (**Apache 2.0**) es un modelo multimodal denso de 29,6B con un contexto de 131K, y las versiones K-quant de la propia Meta caben en una tarjeta de 24 GB. Meta publica un 75,5 % en MCP Atlas, y su decodificador especulativo DFlash llevó una RTX 5090 de 74,9 a 233,4 tokens por segundo con una salida idéntica. En programación con agentes flojea: 6 en el índice y un 0,5 % en Terminal-Bench 4.1. El Muse Spark Open de Meta, más grande (816B, 42B activos), obtiene 25, pero está restringido tras una licencia Muse propia y necesita 533 GB en NVFP4.

### 15. Nemotron 3.5 Lightning (NVIDIA)

{{< image "best_open_source_self_hosted_llms_for_coding/nemotron_3_5_lightning.webp" "Página del modelo NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16 en Hugging Face, con la licencia y un gráfico de precisión" >}}

*Captura: huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16.*

{{< link href="https://artificialanalysis.ai/articles/nemotron-3-5-lightning-launch" >}}Nemotron 3.5 Lightning{{< /link >}} es un híbrido de Mamba-2, MoE y atención con 31,6B parámetros en total y 3,6B activos, hasta 1M tokens de contexto, y pesos, datos de entrenamiento y recetas publicados bajo **OpenMDW-1.1**. Obtiene 6 en el índice, así que no es un modelo para agentes. Su argumento es el rendimiento: unos 314 tokens de salida por segundo en Artificial Analysis, y versiones de 4 bits de 21-25,5 GB. Para un pipeline de mucho volumen (triaje de logs, docstrings, generación sencilla de pruebas) ese compromiso puede compensar. El nuevo Nemotron 3.5 Super VL de NVIDIA (124,5B, 12B activos) obtiene 14.

## Menciones honoríficas

{{< image "best_open_source_self_hosted_llms_for_coding/starcode2.webp" "StarCoder 2, LLM de código abierto de BigCode" >}}

{{< link href="https://github.com/bigcode-project/starcoder2" >}}StarCoder 2{{< /link >}} de BigCode viene en tamaños de 3B, 7B y 15B con un contexto de 16K. Cada archivo fuente de su conjunto de entrenamiento lleva un identificador de Software Heritage, lo que lo convierte en el modelo de programación más auditable que hay. Elígelo cuando lo que te frena sea el cumplimiento de propiedad intelectual y no la capacidad.

{{< image "best_open_source_self_hosted_llms_for_coding/kimi_k27_code.webp" "Página del modelo moonshotai/Kimi-K2.7-Code en Hugging Face, con la ficha del modelo" >}}

*Captura: huggingface.co/moonshotai/Kimi-K2.7-Code.*

{{< link href="https://huggingface.co/moonshotai/Kimi-K2.7-Code" >}}Kimi K2.7-Code{{< /link >}} es un MoE de 1T con 32B activos y un contexto de 262K bajo una licencia MIT modificada, con más o menos un tercio del tamaño de K3.1 Pro. Artificial Analysis midió un 1,0 % en Terminal-Bench 4.1, así que trátalo como un modelo de autocompletado y chat, no como un agente.

{{< image "best_open_source_self_hosted_llms_for_coding/granite_4_2.webp" "Página del modelo ibm-granite/granite-4.2-30b en Hugging Face, con la licencia Apache 2.0 y el resumen del modelo" >}}

*Captura: huggingface.co/ibm-granite/granite-4.2-30b.*

{{< link href="https://huggingface.co/ibm-granite/granite-4.2-30b" >}}IBM Granite 4.2{{< /link >}} viene en modelos densos de 3B, 8B y 30B bajo Apache 2.0 con un contexto de 128K. IBM publica un 57,0 % en SWE-bench Verified para el de 30B. No compite en capacidad, pero es la opción empresarial con la licencia más limpia.

## Cómo usar estos modelos con un agente de programación

La configuración local más rápida es {{< link href="https://opencode.ai" >}}OpenCode{{< /link >}}, un agente de programación de código abierto para la terminal, con {{< link href="https://ollama.com" >}}Ollama{{< /link >}} sirviendo el modelo. Los comandos siguen la <a href="https://docs.ollama.com/integrations/opencode" target="_blank">guía de integración de Ollama</a> y la <a href="https://opencode.ai/docs/providers/" target="_blank">documentación de proveedores de OpenCode</a> para Ollama 0.40.18 y OpenCode v2.

**1. Instala Ollama y OpenCode v2**

```bash
curl -fsSL https://ollama.com/install.sh | sh
curl -fsSL https://opencode.ai/v2/install | bash
```

El instalador de v2 sustituye un binario de OpenCode 1, y v2 sigue leyendo un `opencode.json` de v1.

**2. Dale al modelo suficiente contexto**

OpenCode necesita al menos 64K tokens de contexto. El valor predeterminado de Ollama es 4K por debajo de 24 GiB de VRAM y 32K entre 24 y 48 GiB, así que <a href="https://docs.ollama.com/context-length" target="_blank">súbelo</a>, y de paso reduce la caché a la mitad:

```bash
OLLAMA_CONTEXT_LENGTH=65536 OLLAMA_KV_CACHE_TYPE=q8_0 ollama serve
```

**3. Lanza OpenCode a través de Ollama**

En una segunda terminal:

```bash
ollama pull qwen3.8:27b
ollama launch opencode --model qwen3.8:27b
```

En un Mac de 32 GB, cámbialo por `inkling-2-mini`. OpenCode v2 también sondea `http://127.0.0.1:11434` por su cuenta y lista los modelos que encuentra en `/models`, así que un simple `opencode` también funciona. Hace lo mismo con LM Studio en el puerto 1234 y con vLLM en el puerto 8000, pero los modelos de vLLM descubiertos arrancan con las herramientas desactivadas, así que añade `"capabilities": { "tools": true }` para ese modelo en tu configuración.

Con el modelo cargado, ejecuta `ollama ps`. La columna `CONTEXT` muestra la ventana asignada, y un reparto CPU/GPU en `PROCESSOR` significa que parte de los pesos se ha desbordado a la CPU. Si las ediciones van lentas, revisa ese reparto antes de culpar al modelo.

## Ejecutar Qwen3.8-Flash-Next en un Mac de 128 GB

Flash-Next en un Mac pide más cuidado porque macOS no le da a la GPU toda la memoria unificada. Por defecto puede fijar alrededor del 75 %, unos 96 GB en una máquina de 128 GB. Comprueba el tuyo (`0` significa que rige el valor predeterminado):

```bash
sysctl iogpu.wired_limit_mb
```

Un GGUF estándar de Flash-Next a 4 bits necesita 96-114 GB, justo en ese límite o por encima, antes de contar ninguna caché KV. Puedes subir el límite con `sudo sysctl iogpu.wired_limit_mb=<MB>` hasta el siguiente reinicio (nuestro {{< link href="/blog/self_hosting_llms_on_512gb_m5_ultra_mac_studio/" >}}artículo sobre el Mac Studio de 512 GB{{< /link >}} explica cuánto dejarle a macOS), pero así queda poco para el contexto. Hay una opción mejor.

### Deja la tabla n-gram en el SSD

La tabla n-gram de 51B es una consulta, no una multiplicación de matrices. Cada token calcula un hash de sus tres últimos tokens y lee 16 filas, unos 2,7 KB, así que la tabla puede quedarse en disco y cargarse por páginas bajo demanda. llama.cpp mapea en memoria los archivos GGUF por defecto, así que en principio eso ya funciona. El problema, según la {{< link href="https://huggingface.co/AtomicChat/Qwen3.8-Flash-Next-GGUF" >}}ficha del modelo de Atomic Chat{{< /link >}}, es que Metal fija toda la región mapeada de cualquier fragmento que contenga un tensor de GPU, así que una tabla que comparte fragmento con otros pesos acaba fijada en la memoria de la GPU. Las versiones "AD" de Atomic Chat ponen la tabla sola en su propio fragmento.

Descarga `AD-4.27bpw-Q4_K_M-M64`. Mantiene 56,1 GB en la memoria de la GPU y deja 38,4 GB en el SSD, con una divergencia KL media de 0,0842 y el mismo token top-1 que el modelo completo el 89,49 % de las veces, dentro del error de medida de la versión de 5,00 bpw. Eso deja unos 40 GB libres por debajo del límite predeterminado, así que no hace falta tocar el sysctl. La versión de 3,84 bpw mete Flash-Next en un Mac de 64 GB, pero la mayoría de sus pesos de expertos bajan a 1,75 bits y su divergencia KL es 2,7 veces mayor. Deja mmap activado, que es lo predeterminado, porque es lo que permite paginar la tabla.

### Añade un modelo pequeño al lado

Ese margen da para un segundo modelo. Usa Flash-Next como caballo de batalla y pon a su lado {{< link href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF" >}}Gemma 4 26B-A4B{{< /link >}} (unos 4B activos, 14,2 GB en la versión QAT de Unsloth) para las llamadas rápidas. Juntos ocupan unos 70 GB de los ~96 GB predeterminados. Descarga primero los tres fragmentos de Flash-Next y luego arranca cada servidor en su propia terminal:

```bash
hf download AtomicChat/Qwen3.8-Flash-Next-GGUF \
  --include "Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-*.gguf" --local-dir .
llama-server -m Qwen3.8-Flash-Next-AD-4.27bpw-Q4_K_M-M64-00001-of-00003.gguf \
  --jinja -ngl 99 -c 65536 -fa on -fit off --alias flash-next --port 8080

# In a second terminal
llama-server -hf unsloth/gemma-4-26B-A4B-it-qat-GGUF:UD-Q4_K_XL \
  --jinja -ngl 99 -c 32768 --alias gemma-4-26b --port 8081
```

Flash-Next necesita `--jinja` (sin él, los turnos pueden salir mal formados) y `-fit off`, porque el ajuste automático de memoria de llama.cpp falla con esta arquitectura. La ficha no publica tamaños de caché KV, así que vigila la presión de memoria en el Monitor de Actividad la primera vez que una sesión se acerque a 64K. Luego apunta OpenCode a los dos servidores en `opencode.jsonc`, con el formato nativo de v2. En v2 el trabajo del modelo pequeño son los títulos de sesión, y se configura con el agente integrado `title`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "providers": {
    "mac": {
      "name": "Flash-Next on this Mac",
      "package": "@opencode/ai/providers/openai-compatible",
      "settings": { "baseURL": "http://localhost:8080/v1" },
      "models": {
        "flash-next": {
          "name": "Qwen3.8-Flash-Next",
          "capabilities": { "tools": true },
          "limit": { "context": 65536 }
        }
      }
    },
    "mac-small": {
      "name": "Gemma on this Mac",
      "package": "@opencode/ai/providers/openai-compatible",
      "settings": { "baseURL": "http://localhost:8081/v1" },
      "models": { "gemma-4-26b": { "name": "Gemma 4 26B-A4B" } }
    }
  },
  "model": "mac/flash-next",
  "agents": { "title": { "model": "mac-small/gemma-4-26b" } }
}
```

El precio son 14 GB que Flash-Next podría dedicar al contexto, así que quita Gemma primero si las sesiones largas se quedan sin sitio. Flash-Next lee imágenes por sí mismo con el proyector `mmproj-Qwen3.8-Flash-Next-F16.gguf` de 0,9 GB del mismo repositorio, y la app de escritorio {{< link href="https://atomic.chat/" >}}Atomic Chat{{< /link >}} ejecuta las mismas versiones si prefieres saltarte la terminal.

## Ejecutar el modelo en una máquina con GPU y programar desde el portátil

Una configuración habitual es una estación de trabajo con la GPU en casa o en la oficina y un portátil para todo lo demás. Ollama solo escucha en localhost y rechaza las peticiones cuya cabecera `Host` no sea un nombre local, así que un túnel normal recibe un `403 Forbidden`. Un túnel de [Pinggy](https://pinggy.io/) puede reescribir la cabecera y exigir una clave. Elige un secreto aleatorio, sustituye `YOUR_RANDOM_KEY` en los dos sitios y ejecuta esto en la máquina con GPU:

```bash
ssh -p 443 -R0:localhost:11434 free.pinggy.io -T -- "u:Host:localhost:11434" "k:YOUR_RANDOM_KEY"
```

{{< image "best_open_source_self_hosted_llms_for_coding/opencode_remote_ollama_pinggy_es.webp" "Diagrama de OpenCode en un portátil enviando una petición con una clave bearer a una URL de Pinggy, Pinggy comprobando la clave y reescribiendo la cabecera Host a localhost:11434, y la petición llegando a Ollama en la máquina con GPU por el túnel SSH que abrió esa máquina" >}}

Muestra URLs HTTPS públicas como `https://<random>.run.pinggy-free.link`, y una petición sin `Authorization: Bearer YOUR_RANDOM_KEY` recibe un `401`. El proveedor de Ollama integrado en OpenCode v2 envía su `apiKey` exactamente como ese token bearer, tanto en el descubrimiento como en las peticiones al modelo, así que en el portátil solo tienes que cambiar el endpoint:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "ollama/qwen3.8:27b",
  "providers": {
    "ollama": {
      "settings": {
        "baseURL": "https://<random>.run.pinggy-free.link/v1",
        "apiKey": "YOUR_RANDOM_KEY"
      }
    }
  }
}
```

Los túneles gratuitos duran 60 minutos y reciben una URL nueva cada vez, lo que basta para una sesión rápida. Para una máquina contra la que programas a diario, un [token de Pinggy Pro](https://dashboard.pinggy.io) quita el límite de tiempo y mantiene la URL estable.

## Cómo autoalojar estos modelos

Una vez elegido el modelo, estas guías cubren el resto:

- {{< link href="/blog/how_to_self_host_any_llm_step_by_step_guide/" >}}Cómo autoalojar cualquier LLM{{< /link >}} explica cómo ejecutar Ollama y Open WebUI en Docker y compartir la configuración fuera de tu red.
- {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}Las mejores herramientas y modelos LLM locales{{< /link >}} compara LM Studio, Unsloth, Ollama y otras.
- {{< link href="/blog/best_hardware_for_self_hosted_coding_agents/" >}}El mejor hardware para agentes de programación autoalojados{{< /link >}} cubre GPU y máquinas con memoria unificada.

## Prueba una incidencia antes de estandarizar un modelo

Elige un bug que ya hayas arreglado y haz checkout del commit justo anterior al arreglo en un worktree desechable. Dale a cada modelo el texto de la incidencia, las mismas herramientas, el mismo límite de contexto y el mismo presupuesto de tiempo, y deja la prueba de regresión fuera de su prompt. Después de cada ejecución, aplica la prueba y lee el diff. Apunta si el arreglo pasa, cuánto tardó, cuántos tokens usó y si tuviste que guiarlo. En una tarjeta de 24 GB, hazlo dos veces: una con el contexto que te gustaría y otra con el contexto que realmente cabe. Un modelo que pierde el hilo cuando recortas su ventana de 64K a 32K hará lo mismo en un repositorio real.

## Conclusión

Con una GPU de 24GB, empieza por Qwen3.8-27B en Ollama; con 32GB, prueba Nanbeige4.3-33B o Inkling 2 Mini. Un servidor compartido puede con GLM-5.3-Flash, y un nodo de ocho GPUs te da Kimi K3.1 Pro, el modelo abierto más cercano a la frontera alojada. Elijas el que elijas, pruébalo con una incidencia real de tu proyecto, porque ese es el benchmark que cuenta.
