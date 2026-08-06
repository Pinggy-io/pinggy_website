---
title: "Las 5 mejores herramientas y modelos LLM locales en 2026"
slug: "top-5-herramientas-y-modelos-llm-locales"
description: "Descubre las mejores herramientas y modelos LLM locales de 2026, que ofrecen privacidad, control y ahorro para ejecutar modelos de IA potentes en tu propio hardware."
date: 2025-06-04T14:00:00+05:30
lastmod: 2026-08-02T17:41:00+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "IA local"
tags: ["LLM", "AI Models", "Local AI", "Self-Hosted AI", "Ollama", "LM Studio", "Unsloth", "GPT4All", "llama.cpp", "Local Inference", "Jan"]
og_image: "images/top_5_local_llm_tools_and_models/top_5_local_llm_tools_and_models_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiRWplY3V0YXIgTExNcyBlbiBsb2NhbCBlbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiR3VpYSBkZSBsYXMgbWVqb3JlcyBoZXJyYW1pZW50YXMgeSBtb2RlbG9zIExMTSBsb2NhbGVzIGRlIDIwMjYsIGNvbiBMTSBTdHVkaW8sIFVuc2xvdGgsIE9sbGFtYSB5IGxvcyBtb2RlbG9zIGRlIHBlc29zIGFiaWVydG9zIG1hcyBwb3RlbnRlcyBxdWUgY2FiZW4gZW4gMTI4IEdCIGRlIG1lbW9yaWEsIGluY2x1aWRvcyBRd2VuMy42LCBHZW1tYSA0LCBncHQtb3NzLCBRd2VuMy1Db2Rlci1OZXh0LCBOZW1vdHJvbiAzIFN1cGVyIHkgRGVlcFNlZWstVjQtRmxhc2giLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvdG9wXzVfbG9jYWxfbGxtX3Rvb2xzX2FuZF9tb2RlbHMvdG9wXzVfbG9jYWxfbGxtX3Rvb2xzX2FuZF9tb2RlbHNfYmFubmVyLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRWxpZ2UgZWwgZWplY3V0b3IgcXVlIGVuY2FqZSBjb24gdHUgZm9ybWEgZGUgdHJhYmFqYXI6IExNIFN0dWRpbyBzaSBxdWllcmVzIHVuYSBhcGxpY2FjaW9uIGdyYWZpY2EgY29uIGxvcyBtb3RvcmVzIGxsYW1hLmNwcCB5IE1MWCwgVW5zbG90aCBTdHVkaW8gcGFyYSBlamVjdXRhciB5IGFqdXN0YXIgbW9kZWxvcyBkZXNkZSB1bmEgc29sYSBpbnRlcmZheiwgdSBPbGxhbWEgcGFyYSBkZXNjYXJnYXMgcG9yIGxpbmVhIGRlIGNvbWFuZG9zLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxhIGxhIGhlcnJhbWllbnRhIHF1ZSBoYXlhcyBlbGVnaWRvIGRlc2RlIHN1IHBhZ2luYSBvZmljaWFsIGRlIGRlc2NhcmdhLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJDYWxjdWxhIHR1IHByZXN1cHVlc3RvIGRlIG1lbW9yaWEuIEVsIGFyY2hpdm8gZGVsIG1vZGVsbyBjdWFudGl6YWRvIG1hcyBsYSBjYWNoZSBLViB0aWVuZW4gcXVlIGNhYmVyIGVuIGxhIHN1bWEgZGUgUkFNIHkgVlJBTS4gQ29uIDEyOCBHQiBwdWVkZXMgZWplY3V0YXIgaGFzdGEgdW4gbW9kZWxvIGRlIG1lemNsYSBkZSBleHBlcnRvcyBkZSB1bm9zIDEyMEIgZW4gNCBiaXRzLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJEZXNjYXJnYSB1biBHR1VGIER5bmFtaWMgZGUgVW5zbG90aCAobGEgdmFyaWFudGUgVUQtUTRfS19YTCBlcyBlbCBwdW50byBkZSBwYXJ0aWRhIGhhYml0dWFsKTogUXdlbjMuNi0zNUItQTNCIG9jdXBhIHVub3MgMjMgR0IsIFF3ZW4zLUNvZGVyLU5leHQgdW5vcyA0NiBHQiwgZ3B0LW9zcy0xMjBiIHVub3MgNjYgR0IsIG8gRGVlcFNlZWstVjQtRmxhc2ggZW4gMyBiaXRzIHBhcmEgbGxlbmFyIHVuIGVxdWlwbyBkZSAxMjggR0IuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkVqZWN1dGEgZWwgbW9kZWxvIGRlc2RlIGVsIGNoYXQgZGUgbGEgaGVycmFtaWVudGEgbyBtZWRpYW50ZSBzdSBBUEkgY29tcGF0aWJsZSBjb24gT3BlbkFJLCBjb24gbGxhbWFkYSBhIGhlcnJhbWllbnRhcyB5IGVudHJhZGEgZGUgaW1hZ2VuZXMgc2kgZWwgbW9kZWxvIGxvIGFkbWl0ZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRGUgZm9ybWEgb3BjaW9uYWwsIGNvbXBhcnRlIHR1IExMTSBsb2NhbCBlbiBpbnRlcm5ldCBjb24gUGluZ2d5IGNyZWFuZG8gdW4gdHVuZWwgc2VndXJvIGhhY2lhIGVsIGVuZHBvaW50IGRlIHR1IEFQSSBsb2NhbCBwYXJhIGFjY2VkZXIgZW4gcmVtb3RvLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "top_5_local_llm_tools_and_models/top_5_local_llm_tools_and_models_banner.webp" "banner de las 5 mejores herramientas y modelos LLM locales de 2026" >}}

Ejecutar modelos de lenguaje potentes en local es cada vez más accesible en 2026, y trae privacidad, ahorro y control total sobre tus datos. Con lanzamientos como Qwen3.6 y Qwen3.5, Gemma 4 de Google, gpt-oss de OpenAI, Qwen3-Coder-Next para programación agéntica, Nemotron 3 de NVIDIA, Mistral Medium 3.5 y DeepSeek-V4-Flash, los LLMs locales ya compiten en rendimiento con los servicios en la nube sin sacar tus datos de tu equipo y sin cuotas mensuales.

La pregunta ya no es si existe un buen modelo de pesos abiertos, sino cuál cabe en tu máquina. Por eso este artículo está organizado en torno a un presupuesto de memoria de **128 GB**, que es lo que te da un Mac Studio bien equipado, un mini PC con Ryzen AI MAX+ 395 o una estación de trabajo con un par de GPUs y bastante DDR5. Abajo tienes las herramientas que merece la pena instalar, una sección sobre Unsloth (cuyos archivos de modelo cuantizados usa mucha gente sin saberlo) y después los modelos que caben de verdad, con cifras de memoria medidas en lugar de impresiones.

{{% tldr %}}

**Las mejores herramientas para LLMs locales:**
1. **LM Studio** - La mejor interfaz gráfica, incluye los motores llama.cpp y MLX | <a href="https://lmstudio.ai/" target="_blank">Descargar</a>
2. **Unsloth** - Cuantizaciones GGUF Dynamic y una interfaz local para ejecutar y entrenar | <a href="https://unsloth.ai/" target="_blank">Unsloth</a>
3. **Ollama** - Comandos de una línea, ideal para automatizar | <a href="https://ollama.com/download" target="_blank">Descargar</a>
4. **text-generation-webui** - Flexible, con extensiones y varios backends | <a href="https://github.com/oobabooga/text-generation-webui" target="_blank">GitHub</a>
5. **GPT4All** - Aplicación de escritorio fácil para empezar | <a href="https://gpt4all.io/" target="_blank">Descargar</a>
6. **LocalAI** - Orientada a desarrolladores, compatible con la API de OpenAI | <a href="https://localai.io/" target="_blank">LocalAI</a>

**Extra: Jan** - Alternativa completa a ChatGPT, 100 % sin conexión | <a href="https://jan.ai/" target="_blank">Descargar</a>

**Los mejores modelos que caben en 128 GB (en 4 bits salvo que se indique):**
- **Qwen3.6-35B-A3B** - 23 GB, la mejor opción general | <a href="https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF" target="_blank">GGUF de Unsloth</a>
- **Gemma 4 26B-A4B** - 16-18 GB, multimodal, Apache 2.0 | <a href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF" target="_blank">GGUF de Unsloth</a>
- **Qwen3-Coder-Next** - 46 GB, MoE de 80B pensado para programación agéntica | <a href="https://huggingface.co/unsloth/Qwen3-Coder-Next-GGUF" target="_blank">GGUF de Unsloth</a>
- **gpt-oss-120b** - 66 GB, Apache 2.0, muy bueno llamando herramientas | <a href="https://huggingface.co/unsloth/gpt-oss-120b-GGUF" target="_blank">GGUF de Unsloth</a>
- **Nemotron 3 Super 120B-A12B** - 64-72 GB, contexto de 1M | <a href="https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Super-120B-A12B-GGUF" target="_blank">GGUF de Unsloth</a>
- **Qwen3.5-122B-A10B** - 70 GB, contexto de 256K | <a href="https://huggingface.co/unsloth/Qwen3.5-122B-A10B-GGUF" target="_blank">GGUF de Unsloth</a>
- **Mistral Medium 3.5 128B** - 80 GB, denso y multimodal | <a href="https://huggingface.co/unsloth/Mistral-Medium-3.5-128B-GGUF" target="_blank">GGUF de Unsloth</a>
- **DeepSeek-V4-Flash** - 110-135 GB en 3 bits, llena un equipo de 128 GB | <a href="https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF" target="_blank">GGUF de Unsloth</a>

{{% /tldr %}}

## ¿Por qué ejecutar LLMs en local en 2026?

Los motivos no han cambiado mucho, pero la diferencia de capacidad se ha estrechado lo bastante como para que por fin importen:

- **Privacidad total de los datos**: tus prompts y tus archivos nunca salen del equipo
- **Sin cuotas de suscripción**: sin facturación por token ni límites de uso
- **Funciona sin conexión**: en un avión, en un laboratorio o detrás de una red aislada
- **Personalización**: ajusta el modelo con tus propios datos, cambia plantillas de chat, controla el muestreo
- **Menos latencia**: sin viaje de ida y vuelta y sin cola detrás de otros clientes

## Las mejores herramientas para LLMs locales en 2026

### 1. LM Studio

LM Studio es la que hay que instalar primero si no tienes claro qué quieres. Es una aplicación de escritorio que esconde las partes incómodas de la inferencia local (encontrar un modelo, elegir una cuantización que quepa, montar una API) tras una interfaz que no da por hecho que te hayas leído el changelog de llama.cpp.

Lo que la separa del resto es que incluye **dos motores de inferencia**. `llama.cpp` ejecuta archivos GGUF en NVIDIA, AMD, Intel y CPU. **MLX** de Apple ejecuta modelos en formato MLX de forma nativa en Macs con chip M, y sobre el mismo chip una compilación MLX suele ser entre un 10 % y un 40 % más rápida que el GGUF equivalente. LM Studio elige el motor adecuado y te deja cambiarlo.

**Características principales:**
- Buscador de modelos que te dice de antemano si una cuantización cabe en tu RAM
- Motores llama.cpp y MLX, intercambiables por modelo
- Chat integrado con historial, adjuntos y entrada de imágenes
- Servidor de API compatible con OpenAI y llamada a herramientas
- Ajuste de parámetros y control de descarga a GPU por modelo sin tocar archivos de configuración

**Primeros pasos con LM Studio:**

1. **Instala LM Studio**:
   - Entra en {{< link href="https://lmstudio.ai/" >}}lmstudio.ai{{< /link >}}
   - Descarga el instalador para tu sistema
   {{< image "lm_studio/lm_home_page.webp" "Página de inicio de LM Studio" >}}

2. **Descarga modelos**:
   - Abre la pestaña «Discover» y busca un modelo
   - LM Studio marca cada cuantización como compatible o no según tu hardware
   {{< image "lm_studio/lm_model.webp" "Descargar modelos en LM Studio" >}}

3. **Chatea o activa la API**:
   - Usa el chat integrado
   - O arranca el servidor desde la pestaña «Developer» y apunta cualquier cliente de OpenAI a `http://localhost:1234/v1`
   {{< image "lm_studio/lm_studio_dev.webp" "Modo desarrollador de LM Studio" >}}

Las últimas versiones han sido constantes más que espectaculares: la serie 0.4.x trajo predicciones en paralelo para modelos con visión como Qwen3.5/3.6 y Gemma 4, y checkpointing de la caché KV, que ayuda bastante en ejecuciones agénticas repetidas con contexto largo. Puedes seguirlo en el {{< link href="https://lmstudio.ai/changelog" >}}changelog{{< /link >}}.

**Ideal para**: casi todo el mundo. Es el camino más corto entre «tengo un portátil» y «estoy hablando con un modelo de 27B».

> **Relacionado**: consulta nuestra {{< link href="/blog/lm_studio/" >}}guía de LM Studio{{< /link >}} con la instalación paso a paso y sus funciones avanzadas.

### 2. Unsloth

{{< link href="https://unsloth.ai/" >}}Unsloth{{< /link >}} es el proyecto más útil de esta lista que casi nadie ha instalado a propósito. Si has descargado un GGUF en el último año, hay bastantes posibilidades de que fuera suyo.

Empezó como una librería de fine-tuning (entrenar 2 veces más rápido con un 70 % menos de VRAM, con kernels propios en Triton) y hoy son dos cosas: los **archivos de modelo cuantizados** sobre los que funciona buena parte del ecosistema local, y **Unsloth Studio**, una interfaz local con licencia Apache 2.0 para ejecutar y entrenar modelos en tu propio hardware. El repositorio de GitHub ronda las 69 000 estrellas y recibe commits a diario.

#### Por qué merece la pena buscar las cuantizaciones de Unsloth

La cuantización GGUF estándar aplica el mismo número de bits a todas las capas. Es una mala suposición. Las capas de embeddings y los primeros y últimos bloques de atención cargan una estructura de la que depende el resto del modelo, y aplastarlos a 4 bits cuesta mucha más precisión que aplastar una capa feed-forward intermedia.

**Unsloth Dynamic 2.0** elige un tipo de cuantización por capa, y el patrón se deriva para cada modelo. Las capas que protege en Gemma 3 no son las mismas que protege en Llama 4. La calibración usa un conjunto de datos curado a mano de más de 1,5 millones de tokens y, para no engañarse a sí mismos, miden la divergencia KL contra texto de Wikipedia en lugar de contra el propio conjunto de calibración.

Los números lo respaldan. En Gemma 3 27B, comparando contra la versión con entrenamiento consciente de la cuantización (QAT) de la propia Google:

| Cuantización | MMLU de Unsloth (5-shot) | QAT de Google | Disco |
|---|---|---|---|
| Q4_K_XL | 71,47 % | 71,07 % | 15,64 GB |
| Q3_K_XL | 70,87 % | 69,50 % | 12,76 GB |
| Q2_K_XL | 68,70 % | 67,77 % | 9,95 GB |

La versión dinámica de 4 bits ocupa unos 2 GB menos que la QAT y saca alrededor de un punto más. En divergencia KL (cuanto más baja mejor, y es la métrica que de verdad mide «¿se comporta esto como el modelo original?»), Gemma 3 12B en Q3_K_XL pasa de 0,0878 a 0,0806 a cambio de 0,25 GB más en disco.

Verás estos archivos con el prefijo `UD-`, como en `UD-Q4_K_XL`. UD viene de Unsloth Dynamic, y el sufijo `_XL` significa que gasta bits de más donde importan. **`UD-Q4_K_XL` es la opción por defecto sensata** para la mayoría.

#### La otra mitad: los arreglos de errores

La ventaja menos anunciada es que Unsloth suele encontrar y arreglar los fallos de plantilla de chat y de tokenizador que traen los modelos recién lanzados. Han trabajado directamente con los equipos de gpt-oss, Qwen3, Llama 4, Mistral y Gemma en problemas que cambiaban la precisión medida, incluidos {{< link href="https://github.com/ggml-org/llama.cpp/pull/12889" >}}parches integrados en llama.cpp{{< /link >}}. Cuando sale un modelo importante y el primer fin de semana se llena de mensajes de «este modelo es tonto» que acaban siendo una plantilla Jinja rota, el GGUF corregido suele ser el suyo.

Vale la pena leer las discusiones de la comunidad en los {{< link href="https://huggingface.co/unsloth" >}}repositorios de Hugging Face{{< /link >}} antes de elegir un archivo. La versión corta de la eterna duda entre `UD-Q4_K_XL` y `Q4_K_M`: la variante XL usa Q5_K en las matrices importantes, donde Q4_K_M usa sobre todo Q6_K, y a igualdad de tamaño de archivo la XL suele ganar.

*La contrapartida honesta*: en modelos densos pequeños, la diferencia entre una cuantización Dynamic y una buena cuantización imatrix convencional es real pero moderada, y a veces los tamaños de archivo salen casi idénticos. Las ventajas se hacen grandes en modelos de mezcla de expertos y con pocos bits (3 bits o menos), que es exactamente donde vas a estar si intentas meter un modelo de 284B en 128 GB.

#### Unsloth Studio: ejecutar y entrenar en una sola aplicación

Unsloth Studio es la mitad más reciente del proyecto, y es la razón por la que Unsloth entra en una lista de herramientas y no solo en una nota al pie sobre formatos de archivo. Es una interfaz web local (todavía marcada como Beta) que cubre tanto la inferencia como el entrenamiento, en Windows, Linux, WSL y macOS.

{{< image "top_5_local_llm_tools_and_models/unsloth_studio.webp" "Interfaz de entrenamiento de Unsloth Studio" >}}

En la parte de inferencia hace lo que hace LM Studio, más algunas cosas que este no:

- Buscar, descargar y ejecutar modelos **GGUF, MLX y safetensors**, incluidos adaptadores LoRA
- **Controles de hardware para GGUF**: elegir GPUs y número de capas, descargar los expertos MoE a la CPU, usar varias GPUs o paralelismo tensorial. Este es el ajuste que decide si un MoE de 120B llega a funcionar en tu equipo
- **Model arena** para pasar el mismo prompt por dos modelos en paralelo
- Llamada a herramientas con autorreparación, ejecución de código y búsqueda web y en PDF
- RAG local con varios modelos de embeddings a elegir
- Chat con imágenes, audio, PDFs, DOCX y código
- Endpoints compatibles con OpenAI **y** con Anthropic (`/v1/chat/completions`, `/v1/responses`, `/v1/messages`)
- También puede servir de fachada para proveedores y servidores remotos (OpenAI, Anthropic, vLLM, Ollama) desde la misma interfaz

En la parte de entrenamiento, que es donde empezó Unsloth:

- Ajustar y aplicar RL sobre más de 500 modelos, unas 2 veces más rápido y con alrededor de un 70 % menos de VRAM, y hasta 12 veces más rápido en modelos MoE
- LoRA, QLoRA, fine-tuning completo, preentrenamiento y RL, en 4 bits, 16 bits o FP8
- **Data Recipes** construye conjuntos de entrenamiento a partir de archivos PDF, CSV o DOCX en un editor visual de nodos
- GRPO y RL con visión usando alrededor de un 80 % menos de VRAM, y entrenamiento con contextos de más de 500K tokens
- Observabilidad en vivo de las curvas de pérdida y del uso de GPU
- Exportar el resultado directamente a GGUF o a safetensors de 16 bits, para que un modelo ajustado vuelva a tu ejecutor sin un paso de conversión aparte

El soporte de hardware es más amplio de lo que cabría esperar: NVIDIA RTX 30/40/50 y Blackwell, AMD vía ROCm en Windows y Linux, Vulkan para inferencia GGUF en GPUs Intel, y macOS con entrenamiento e inferencia tanto MLX como GGUF. Con solo CPU funcionan el chat y las Data Recipes.

**Primeros pasos con Unsloth:**

1. **Instala** (macOS, Linux, WSL):
   ```bash
   curl -fsSL https://unsloth.ai/install.sh | sh
   ```
   En PowerShell de Windows:
   ```powershell
   irm https://unsloth.ai/install.ps1 | iex
   ```
   El mismo comando actualiza una instalación existente.

2. **Arranca {{< link href="https://unsloth.ai/docs/new/studio/" >}}Unsloth Studio{{< /link >}}**:
   ```bash
   unsloth studio
   ```
   Después abre la interfaz en el navegador, busca un modelo y descárgalo. Para exponerlo en tu red en lugar de solo en localhost, pasa un host y un puerto:
   ```bash
   unsloth studio -H 0.0.0.0 -p 8888
   ```

3. **Apunta un agente de programación a tu modelo local**:
   ```bash
   unsloth start claude
   ```
   `codex`, `opencode` y `hermes` funcionan igual. También puedes mantener tu modelo en la nube de siempre y añadir uno local como subagente:
   ```bash
   unsloth start claude --as-subagent --model unsloth/model-GGUF:quant
   ```

**Ideal para**: quien quiera exprimir al máximo la calidad dentro de un presupuesto de memoria fijo, y quien quiera ajustar un modelo y ejecutarlo sin alquilar una GPU ni salir de una sola aplicación.

### 3. Ollama

Ollama sigue siendo la forma más rápida de poner un modelo en marcha desde la terminal, y es lo más fácil de automatizar o de meter en un archivo de Docker Compose.

**Características principales:**
- Comandos de una línea para descargar y ejecutar modelos
- Una biblioteca curada, así que no tienes que elegir entre 40 cuantizaciones del mismo modelo
- Multiplataforma (Windows, macOS, Linux), con optimizaciones MLX en Apple Silicon
- API compatible con OpenAI en el puerto 11434
- Formato `Modelfile` sencillo para fijar prompts de sistema y parámetros

**Primeros pasos con Ollama:**

1. **Instala Ollama**:
   - Entra en {{< link href="https://ollama.com/download" >}}ollama.com/download{{< /link >}}
   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/ollama_version.webp" "Comprobar la instalación de Ollama" >}}

2. **Ejecuta un modelo**:
   ```bash
   # Buena opción por defecto en un equipo de 32 GB
   ollama run qwen3.6

   # Cabe de sobra en 16 GB
   ollama run gemma4:12b

   # Razonamiento y llamada a herramientas, necesita unos 66 GB
   ollama run gpt-oss:120b
   ```
   {{< image "how_to_easily_share_ollama_api_and_open_webui_online/model_run_terminal.webp" "Ejecutar un modelo con Ollama" >}}

3. **Usa la API**:
   ```bash
   curl http://localhost:11434/api/chat -d '{
     "model": "qwen3.6",
     "messages": [
       {"role": "user", "content": "Explain KV cache quantization in two sentences"}
     ]
   }'
   ```
   {{< image "run_deepseek_locally/postman_ss.webp" "Enviar peticiones con curl" >}}

Las etiquetas de los modelos cambian, así que consulta {{< link href="https://ollama.com/library" >}}ollama.com/library{{< /link >}} para ver qué hay publicado antes de automatizar nada contra una etiqueta concreta.

**Ideal para**: quien vive en la terminal y quien automatiza inferencia local.

> **Relacionado**: aprende a {{< link href="/blog/running_ollama_on_google_colab_with_pinggy/" >}}ejecutar Ollama en Google Colab{{< /link >}} o a {{< link href="/blog/how_to_easily_share_ollama_api_and_open_webui_online/" >}}compartir tu API de Ollama en internet{{< /link >}} para acceder en remoto.

### 4. text-generation-webui

Si quieres tocar todos los mandos, text-generation-webui sigue siendo la opción más configurable, y las compilaciones portables se llevaron por delante la vieja queja del infierno de dependencias.

**Características principales:**
- Compilaciones portables que no requieren instalación
- Modos de chat y de completado de texto en bruto
- Varios backends (GGUF, GPTQ, AWQ, ExLlama)
- Ecosistema de extensiones
- Creación de personajes y RAG integrado

**Primeros pasos:**

1. **Consigue una compilación portable**:
   - Descárgala desde {{< link href="https://github.com/oobabooga/text-generation-webui/releases" >}}GitHub Releases{{< /link >}}
   - Descomprime y ejecuta, sin paso de instalación

2. **Arranca la interfaz web**:
   ```bash
   text-generation-webui --listen
   ```

3. **Descarga modelos desde la propia interfaz**:
   - Abre la pestaña «Models» y descarga directamente desde Hugging Face

{{< image "top_5_local_llm_tools_and_models/text_generation_webui.webp" "Interfaz de text-generation-webui" >}}

**Ideal para**: quien disfruta trasteando y quiere control a nivel de muestreo y libertad de formatos.

### 5. GPT4All

GPT4All es una aplicación de escritorio clásica, y ahí está justo su gracia. Sin terminal, sin elegir motor, sin convenciones de nombres de cuantizaciones.

**Características principales:**
- Aplicación de escritorio con una instalación corta
- Lista de modelos preconfigurada
- Chat con historial de conversaciones
- RAG local sobre tus propios documentos
- Ecosistema de plugins

**Primeros pasos:**

1. **Instala GPT4All** desde {{< link href="https://gpt4all.io/" >}}gpt4all.io{{< /link >}}
2. **Elige un modelo** con el descargador integrado
3. **Empieza a chatear**, ajustando los parámetros desde el panel de configuración

{{< image "top_5_local_llm_tools_and_models/gpt4_all.webp" "Aplicación de escritorio GPT4All" >}}

**Ideal para**: perfiles no técnicos y equipos con Windows donde quieres un instalador y nada más.

### 6. LocalAI

{{< link href="https://localai.io/" >}}LocalAI{{< /link >}} es la opción a la que recurres cuando el LLM es una pieza dentro de un sistema mayor y no algo con lo que chateas.

**Características principales:**
- Sustituto directo de la API de OpenAI
- Varias arquitecturas de modelos (GGUF, ONNX, PyTorch)
- Multimodal: texto, generación de imágenes, transcripción de audio y TTS
- Listo para Docker, lo que facilita fijarlo en CI

**Primeros pasos con LocalAI:**

1. **Con Docker**:
   ```bash
   # Imagen solo para CPU:
   docker run -ti --name local-ai -p 8080:8080 localai/localai:latest-cpu

   # GPU de Nvidia:
   docker run -ti --name local-ai -p 8080:8080 --gpus all localai/localai:latest-gpu-nvidia-cuda-12

   # Imagen para CPU y GPU (más pesada):
   docker run -ti --name local-ai -p 8080:8080 localai/localai:latest

   # Imágenes AIO (descargan por adelantado un conjunto de modelos listos para usar)
   docker run -ti --name local-ai -p 8080:8080 localai/localai:latest-aio-cpu
   ```

2. **Explora y descarga modelos** en `http://localhost:8080/browse/`

{{< image "top_5_local_llm_tools_and_models/local_ai.webp" "Navegador de modelos de LocalAI" >}}

**Ideal para**: desarrolladores que quieren sustituir una dependencia de OpenAI en una aplicación existente.

### 7. BlueQubit

{{< link href="https://www.bluequbit.io/" >}}BlueQubit{{< /link >}} es la rareza de esta lista: es una plataforma de computación cuántica en la nube, no un ejecutor de LLMs locales. Está aquí porque el flujo de trabajo se parece. Si ya prototipas modelos en Python y Jupyter, BlueQubit te da ese mismo bucle para circuitos cuánticos sin comprar ni reservar hardware.

Escribes los circuitos contra un SDK de Python y luego los ejecutas en un simulador o en backends cuánticos reales de varios proveedores. Habla Qiskit y Cirq, así que el código de circuitos que tengas se aprovecha casi tal cual.

**Primeros pasos con BlueQubit:**

1. **Crea una cuenta** en {{< link href="https://www.bluequbit.io/" >}}bluequbit.io{{< /link >}} con el plan gratuito
2. **Instala el SDK**:
   ```bash
   pip install bluequbit
   ```
3. **Conéctate y ejecuta un circuito** en un simulador o en un backend de hardware disponible
4. **Analiza e itera** desde tu notebook

**Ideal para**: quien programa o investiga y quiere aprender computación cuántica sin gestionar hardware.

*Conviene ser claro con la contrapartida*: aquí no se ejecuta nada en tu máquina, y la computación cuántica resuelve una clase de problema distinta a la de un LLM. Si has venido a este artículo a ejecutar un modelo de chat sin conexión, esta es afín, no un sustituto.

### Herramienta extra: Jan

Jan es una aplicación de escritorio con forma de ChatGPT que funciona totalmente sin conexión, y es la más cuidada visualmente del grupo.

**Características principales:**
- Biblioteca de modelos con Llama, Gemma, Mistral y Qwen
- Servidor de API compatible con OpenAI
- Sistema de extensiones
- También puede llamar a APIs remotas como Groq y OpenRouter cuando te interese

**Primeros pasos con Jan:**

1. **Instala Jan** desde {{< link href="https://jan.ai/" >}}jan.ai{{< /link >}} (Windows, macOS o Linux)
2. **Abre la biblioteca de modelos** y elige uno que encaje con tu hardware
3. **Empieza a chatear** y, si quieres, activa el servidor de API

{{< image "top_5_local_llm_tools_and_models/jan.webp" "Interfaz de Jan AI" >}}

**Ideal para**: quien busca una aplicación todo en uno y pulida que funcione en varias plataformas.

> **Relacionado**: aprende a {{< link href="/blog/self_host_local_ai_assistant_with_jan_and_pinggy/" >}}autoalojar Jan como asistente de IA{{< /link >}} y acceder a él desde cualquier sitio.

## Los mejores modelos que caben en 128 GB

Primero, la regla que gobierna todo lo que viene abajo: **los pesos cuantizados más la caché KV tienen que caber en la suma de RAM y VRAM**. Si el modelo se desborda a disco, el rendimiento se hunde. El contexto largo lo empeora, porque la caché KV crece con él, así que deja margen en lugar de elegir el archivo más grande que técnicamente entra.

Todas las cifras de memoria de abajo corresponden a cuantizaciones Dynamic de Unsloth en 4 bits salvo que se indique otra cosa, y se refieren al total de RAM más VRAM.

| Modelo | Parámetros (activos) | Memoria en 4 bits | Bueno para |
|---|---|---|---|
| Gemma 4 12B | 12B denso | 7-8 GB | Uso general en un portátil |
| gpt-oss-20b | 20B MoE | 14 GB | Razonamiento, llamada a herramientas |
| Gemma 4 26B-A4B | 26B (4B) | 16-18 GB | Multimodal y rápido |
| Qwen3.6-27B | 27B denso | 18 GB | Calidad por GB |
| Gemma 4 31B | 31B denso | 17-20 GB | El Gemma denso más potente |
| Qwen3.6-35B-A3B | 35B (3B) | 23 GB | La mejor opción general |
| Qwen3-Coder-Next | 80B (3B) | 46 GB | Programación agéntica |
| Nemotron 3 Super | 120B (12B) | 64-72 GB | Razonamiento, contexto de 1M |
| gpt-oss-120b | 120B MoE | 66 GB | Llamada a herramientas, Apache 2.0 |
| Qwen3.5-122B-A10B | 122B (10B) | 70 GB | Uso general casi de frontera |
| Mistral Medium 3.5 | 128B denso | 80 GB | Multimodal y multilingüe |
| DeepSeek-V4-Flash | 284B (13B) | 110-135 GB (3 bits) | El techo de los 128 GB |

### 1. Qwen3.6 (27B y 35B-A3B)

Qwen3.6 de Alibaba es la recomendación por defecto para la mayoría de la gente con un equipo decente. Dos variantes: un denso de 27B y un modelo de mezcla de expertos de 35B con 3B de parámetros activos. El MoE es el más interesante, porque activar 3B de parámetros por token significa que genera casi a la velocidad de un modelo pequeño mientras contiene el conocimiento de 35B.

Ambos vienen con 256K de contexto en 201 idiomas, ampliable hacia 1M con YaRN. También hay compilaciones MTP (predicción multitoken) que cambian aproximadamente 1 GB de memoria extra por menos latencia.

{{< image "top_5_local_llm_tools_and_models/qwen.webp" "Resumen del modelo Qwen3.6" >}}

- **Memoria**: el 27B necesita 18 GB en 4 bits y 30 GB en 8 bits. El 35B-A3B necesita 23 GB en 4 bits y 38 GB en 8 bits
- **Licencia**: Apache 2.0
- **GGUFs de Unsloth**: {{< link href="https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF" >}}Qwen3.6-35B-A3B-GGUF{{< /link >}} y {{< link href="https://huggingface.co/unsloth/Qwen3.6-27B-GGUF" >}}Qwen3.6-27B-GGUF{{< /link >}}
- **Para Macs**: {{< link href="https://huggingface.co/unsloth/Qwen3.6-27B-UD-MLX-4bit" >}}Qwen3.6-27B-UD-MLX-4bit{{< /link >}} funciona con el motor MLX
- **Guía**: {{< link href="https://unsloth.ai/docs/models/qwen3.6" >}}guía de Qwen3.6 de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, text-generation-webui, Jan

### 2. Gemma 4 (12B, 26B-A4B y 31B)

La familia Gemma 4 de Google es la mejor opción por debajo de 20 GB, y el 12B en particular es el modelo que le pasarías a alguien con un portátil de 16 GB. La arquitectura merece un apunte: no hay codificadores multimodales separados. La visión pasa por una única multiplicación de matrices y el audio en bruto se proyecta al mismo espacio que los tokens de texto, y ambos alimentan directamente al backbone del LLM.

El 26B-A4B es un MoE que activa 4B de parámetros por token, y por eso se siente más ágil de lo que sugiere su tamaño. El 31B es el miembro denso más potente. El contexto es de 128K en los modelos E2B/E4B pensados para el edge y de 256K en el resto.

Google también publica versiones QAT, y Unsloth las replica, así que puedes compararlas directamente con sus compilaciones Dynamic.

{{< image "top_5_local_llm_tools_and_models/gemma.webp" "Resumen del modelo Gemma 4" >}}

- **Memoria**: el 12B necesita 7-8 GB en 4 bits. El 26B-A4B necesita 16-18 GB. El 31B necesita 17-20 GB
- **Licencia**: términos de uso de Gemma
- **GGUFs de Unsloth**: {{< link href="https://huggingface.co/unsloth/gemma-4-12b-it-GGUF" >}}12B{{< /link >}}, {{< link href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF" >}}26B-A4B{{< /link >}}, {{< link href="https://huggingface.co/unsloth/gemma-4-31B-it-GGUF" >}}31B{{< /link >}}, {{< link href="https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF" >}}E4B{{< /link >}} para dispositivos edge
- **Versiones QAT**: {{< link href="https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF" >}}gemma-4-26B-A4B-it-qat-GGUF{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/gemma-4" >}}guía de Gemma 4 de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, text-generation-webui, Jan

### 3. Qwen3-Coder-Next

Si vas a ejecutar un modelo local para programar, este es el bueno. 80B en total con 3B activos, 262K de contexto nativo, y está construido específicamente para programación agéntica en lugar de ser un modelo general al que se le da bien escribir código.

Aquí el número de parámetros activos importa más que en ningún otro sitio, porque los bucles de programación agéntica están limitados por el rendimiento. La documentación de Unsloth lo sitúa en más de 20 tokens/s cuando la cuantización cabe entera en memoria, cosa que ocurre con margen de sobra en 128 GB.

- **Memoria**: 46 GB en 4 bits, 85 GB en 8 bits
- **GGUF de Unsloth**: {{< link href="https://huggingface.co/unsloth/Qwen3-Coder-Next-GGUF" >}}Qwen3-Coder-Next-GGUF{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/qwen3-coder-next" >}}guía de Qwen3-Coder-Next de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, llama.cpp, vLLM

### 4. gpt-oss (20B y 120B)

Los modelos de pesos abiertos de OpenAI son Apache 2.0, nativos en MXFP4, y siguen estando entre los mejores disponibles para llamada a herramientas y razonamiento estructurado. El 120B es el punto dulce en un equipo de 128 GB: unos 66 GB de memoria para más de 6 tokens/s, lo que deja bastante sitio para el contexto.

El 20B es mejor opción si compartes el equipo con cualquier otra cosa, con unos 14 GB.

{{< image "top_5_local_llm_tools_and_models/openai.webp" "Modelos gpt-oss de OpenAI" >}}

- **Memoria**: el 20B necesita 14 GB, el 120B necesita 66 GB
- **Contexto**: 128K en ambos
- **Licencia**: Apache 2.0
- **GGUFs de Unsloth**: {{< link href="https://huggingface.co/unsloth/gpt-oss-120b-GGUF" >}}gpt-oss-120b-GGUF{{< /link >}} y {{< link href="https://huggingface.co/unsloth/gpt-oss-20b-GGUF" >}}gpt-oss-20b-GGUF{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/gpt-oss-how-to-run-and-fine-tune" >}}guía de gpt-oss de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, LocalAI, llama.cpp

### 5. NVIDIA Nemotron 3 (Nano, Super y Ultra)

La línea Nemotron 3 de NVIDIA es una familia MoE de razonamiento híbrido con una ventana de contexto de 1 millón de tokens. **Nemotron-3-Super-120B-A12B** es el que encaja en un presupuesto de 128 GB: 120B en total, 12B activos y 64-72 GB en 4 bits. Los 12B activos lo hacen más pesado por token que gpt-oss-120b, pero puntúa bien en AIME 2025, Terminal Bench y SWE-Bench Verified.

**Nemotron-3-Nano-30B-A3B** es el hermano pequeño si quieres el mismo comportamiento en un portátil. Nemotron-3-Ultra-550B-A55B existe, pero queda muy por encima de los 128 GB.

{{< image "top_5_local_llm_tools_and_models/nvidia.webp" "Página del modelo Nemotron de NVIDIA" >}}

- **Memoria**: el Super necesita 64-72 GB en 4 bits y 128 GB en 8 bits. El Nano 30B-A3B es mucho más pequeño
- **Licencia**: NVIDIA Open Model License (no es Apache, revisa las condiciones para uso comercial)
- **GGUFs de Unsloth**: {{< link href="https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Super-120B-A12B-GGUF" >}}Super 120B-A12B{{< /link >}} y {{< link href="https://huggingface.co/unsloth/Nemotron-3-Nano-30B-A3B-GGUF" >}}Nano 30B-A3B{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/nemotron-3/nemotron-3-super" >}}guía de Nemotron 3 Super de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, vLLM, SGLang, llama.cpp

### 6. Qwen3.5-122B-A10B

El Qwen3.5 grande se queda justo por debajo de la línea de los 128 GB, con 70 GB en 4 bits, o 60 GB en 3 bits si quieres más sitio para el contexto. 122B en total, 10B activos, 256K de contexto. La familia Qwen3.5 es inusualmente amplia, va de 0,8B hasta 397B, así que es fácil prototipar con uno pequeño e ir subiendo.

Ojo: la variante 397B-A17B necesita 214 GB en 4 bits, así que queda fuera de alcance aquí.

- **Memoria**: 60 GB en 3 bits, 70 GB en 4 bits, 106 GB en 6 bits
- **Licencia**: Apache 2.0
- **GGUF de Unsloth**: {{< link href="https://huggingface.co/unsloth/Qwen3.5-122B-A10B-GGUF" >}}Qwen3.5-122B-A10B-GGUF{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/qwen3.5" >}}guía de Qwen3.5 de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, LocalAI, Jan

### 7. Mistral Medium 3.5 128B

El único modelo grande **denso** de esta lista. Mistral Medium 3.5 es un modelo denso de 128B, multimodal y de razonamiento híbrido, con una ventana de contexto de 256K, y necesita 80 GB en 4 bits o 64 GB en 3 bits.

Denso significa que todos los parámetros se ejecutan para cada token, así que es más lento que un MoE con una huella de memoria parecida. A cambio ganas consistencia: los modelos densos tienden a degradarse con más elegancia en tareas que se salen de aquello para lo que se ajustó el enrutado del MoE.

{{< image "top_5_local_llm_tools_and_models/mistral.webp" "Resumen del modelo Mistral" >}}

- **Memoria**: 64 GB en 3 bits, 80 GB en 4 bits, 128-170 GB en 8 bits
- **GGUF de Unsloth**: {{< link href="https://huggingface.co/unsloth/Mistral-Medium-3.5-128B-GGUF" >}}Mistral-Medium-3.5-128B-GGUF{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/mistral-3.5" >}}guía de Mistral 3.5 de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, Ollama, vLLM, llama.cpp

### 8. DeepSeek-V4-Flash

Este es el techo. DeepSeek-V4-Flash-0731 tiene 284B en total con 13B activos y una ventana de contexto de 1M, y no cabe en 4 bits (eso pide 162 GB). En **3 bits** (`UD-IQ3_XXS`) se queda en 103 GB de disco y 110-135 GB de memoria, que es justo el caso para el que se construyó la cuantización dinámica de Unsloth: a 3 bits, la cuantización uniforme se desmorona, y repartir bits por capa marca la diferencia entre un modelo usable y uno roto.

El propio tutorial de Unsloth para este modelo usa la cuantización de 3 bits precisamente porque cabe en un equipo de 128 GB. Cuenta con al menos 110 GB de memoria libre de verdad y no esperes ejecutar mucho más a la vez.

{{< image "top_5_local_llm_tools_and_models/deepseek.webp" "Página del modelo DeepSeek" >}}

- **Memoria**: 92 GB en 1 bit, 102 GB en 2 bits, 110-135 GB en 3 bits, 162 GB en 4 bits
- **GGUF de Unsloth**: {{< link href="https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF" >}}DeepSeek-V4-Flash-0731-GGUF{{< /link >}}
- **Guía**: {{< link href="https://unsloth.ai/docs/models/deepseek-v4" >}}guía de DeepSeek-V4 de Unsloth{{< /link >}}
- **Compatible con**: LM Studio, Unsloth, llama.cpp, vLLM, SGLang

### Lo que no cabe en 128 GB

Vale la pena decirlo claro, porque son los modelos que copan los titulares:

- **GLM-5.2** (744B totales, 40B activos) necesita 223 GB incluso en 1 bit. La versión de 2 bits cabe en un Mac de 256 GB, no en uno de 128 GB. {{< link href="https://huggingface.co/unsloth/GLM-5.2-GGUF" >}}GGUF{{< /link >}}
- **Kimi K2.6 y K3** están en la clase del billón de parámetros. {{< link href="https://huggingface.co/unsloth/Kimi-K2.6-GGUF" >}}GGUF{{< /link >}}
- **DeepSeek-V4-Pro** tiene 1,6 billones de parámetros totales con 49B activos
- **Nemotron-3-Ultra-550B-A55B** y **Qwen3.5-397B-A17B** (214 GB en 4 bits) quedan fuera los dos
- **MiniMax M3** también está por encima de la línea. {{< link href="https://huggingface.co/unsloth/MiniMax-M3-GGUF" >}}GGUF{{< /link >}}

Si quieres ejecutar estos, las opciones prácticas son un Mac Studio de 256 GB o 512 GB, un servidor con varias GPUs, o descargar los expertos del MoE a disco, que funciona pero es lo bastante lento como para que no lo disfrutes.

> **Relacionado**: ¿quieres ejecutar modelos de DeepSeek en concreto? Echa un vistazo a nuestra guía sobre {{< link href="/blog/run_deepseek_locally/" >}}cómo ejecutar DeepSeek en local{{< /link >}}.

## Conclusión

El panorama práctico en 2026: instala **LM Studio** si quieres el camino más corto, usa los **GGUF Dynamic de Unsloth** con el ejecutor que acabes eligiendo, y tira de **Ollama** cuando vayas a automatizar.

En cuanto a los modelos, el presupuesto de memoria decide más que la tabla de clasificación. Con 16 GB, Gemma 4 12B es un asistente sinceramente bueno. Con 32 GB, Qwen3.6-35B-A3B es el mejor modelo general que puede ejecutar la mayoría. Con 128 GB, gpt-oss-120b y Nemotron 3 Super van cómodos, Qwen3-Coder-Next se encarga de la programación agéntica, y DeepSeek-V4-Flash en 3 bits es lo más grande que va a entrar.

Los modelos de pesos abiertos de frontera (GLM-5.2, Kimi K3, DeepSeek-V4-Pro) siguen fuera del alcance de una sola máquina de 128 GB, y fingir lo contrario es como se acaba con un modelo paginando contra el SSD a dos tokens por segundo. La distancia entre «el mejor modelo abierto» y «el mejor modelo abierto que puedo ejecutar de verdad» es real, pero con 128 GB es más corta que nunca.
