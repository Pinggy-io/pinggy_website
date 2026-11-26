---
title: "Cómo elegir el hardware adecuado para ejecutar LLMs en local en 2026"
slug: "mejor-hardware-para-llms-locales"
description: "Una guía práctica de hardware para hacer self-hosting de LLMs: cuánta memoria necesita cada modelo contando la caché KV, por qué el ancho de banda marca los tokens por segundo y precios actuales de GPUs RTX 50, Radeon AI PRO, Mac Studio M5, Ryzen AI Max, DGX Spark y RTX Spark."
date: 2026-06-05T14:15:25+05:30
lastmod: 2026-11-25T14:15:25+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Tecnología"
tags: ["local LLM", "self-hosted AI", "Apple Silicon", "Ollama", "AI hardware"]
categories: ["Technology", "AI", "Hardware"]
og_image: "images/best_hardware_for_self_hosting_local_llms/best_hardware_for_self_hosting_local_llms_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gZWxlZ2lyIGVsIGhhcmR3YXJlIHBhcmEgaGFjZXIgc2VsZi1ob3N0aW5nIGRlIExMTXMgbG9jYWxlcyIsCiAgImRlc2NyaXB0aW9uIjogIkRpbWVuc2lvbmEgZWwgaGFyZHdhcmUgcGFyYSBMTE1zIGxvY2FsZXMgcG9yIG1lbW9yaWE6IGxhIGRlc2NhcmdhIGRlbCBtb2RlbG8gbcOhcyBzdSBjYWNow6kgS1YsIHkgZGVzcHXDqXMgbWlyYSBlbCBhbmNobyBkZSBiYW5kYSBwYXJhIGxhIHZlbG9jaWRhZC4gQ3VicmUgR1BVcyBkZSAxNkdCIHkgMzJHQiwgc2lzdGVtYXMgZGUgbWVtb3JpYSB1bmlmaWNhZGEgZGUgMTI4R0IsIGVsIE1hYyBTdHVkaW8gTTUsIGVsIERHWCBTcGFyayB5IGVsIFJ5emVuIEFJIE1heC4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvYmVzdF9oYXJkd2FyZV9mb3Jfc2VsZl9ob3N0aW5nX2xvY2FsX2xsbXMvYmVzdF9oYXJkd2FyZV9mb3Jfc2VsZl9ob3N0aW5nX2xvY2FsX2xsbXNfYmFubmVyLndlYnAiLAogICJkYXRlTW9kaWZpZWQiOiAiMjAyNi0xMS0yNVQxNDoxNToyNSswNTozMCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDb25zdWx0YSBlbCB0YW1hw7FvIGRlIGRlc2NhcmdhIGRlbCBtb2RlbG8iLAogICAgICAidGV4dCI6ICJDb21wcnVlYmEgbGEgZXRpcXVldGEgeSBsYSBjdWFudGl6YWNpw7NuIGV4YWN0YXMgZW4gT2xsYW1hLiBBIGN1YXRybyBiaXRzLCBRd2VuMyAxNEIgb2N1cGEgOSwzIEdCLCBRd2VuMyAzMkIgMjAsMiBHQiwgTGxhbWEgMy4zIDcwQiA0Miw1IEdCIHkgZ3B0LW9zcyAxMjBCIDY1LDQgR0IuIFVuIG1vZGVsbyBtaXh0dXJlLW9mLWV4cGVydHMgbmVjZXNpdGEgbWVtb3JpYSBwYXJhIHRvZG9zIHN1cyBwZXNvcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiU3VtYSBsYSBjYWNow6kgS1YgZGUgdHUgbG9uZ2l0dWQgZGUgY29udGV4dG8iLAogICAgICAidGV4dCI6ICJCeXRlcyBkZSBLViBwb3IgdG9rZW4gPSAyIHggY2FwYXMgeCBjYWJlemFzIEtWIHggZGltZW5zacOzbiBkZSBjYWJlemEgeCBieXRlcyBwb3IgdmFsb3IuIFF3ZW4zIDMyQiBuZWNlc2l0YSAyNTYgS2lCIHBvciB0b2tlbiBlbiBmMTYsIGFzw60gcXVlIHVuIGNvbnRleHRvIGRlIDMyayBhw7FhZGUgOCBHaUIgeSBsbyBzYWNhIGRlIHVuYSB0YXJqZXRhIGRlIDI0IEdCLiBPTExBTUFfS1ZfQ0FDSEVfVFlQRT1xOF8wIHJlZHVjZSBsYSBjYWNow6kgbcOhcyBvIG1lbm9zIGEgbGEgbWl0YWQuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkVsaWdlIGhhcmR3YXJlIGVuIGVsIHF1ZSBxdWVwYSBlbCB0b3RhbCIsCiAgICAgICJ0ZXh0IjogIkxhcyB0YXJqZXRhcyBkZSAxNiBHQiBjb21vIGxhIFJUWCA1MDYwIFRpIGNhcmdhbiBtb2RlbG9zIGRlIDhCIGEgMTRCIHkgZ3B0LW9zcyAyMEIuIExhcyBkZSAzMiBHQiBjb21vIGxhIFJhZGVvbiBBSSBQUk8gUjk3MDAgbyBsYSBSVFggNTA5MCBjYXJnYW4gUXdlbjMgMzJCIGEgMzJrLiBMb3Mgc2lzdGVtYXMgY29uIDEyOCBHQiBkZSBtZW1vcmlhIHVuaWZpY2FkYSAoUnl6ZW4gQUkgTWF4KyAzOTUsIE1hYyBTdHVkaW8gTTUgTWF4LCBER1ggU3BhcmspIGNhcmdhbiBncHQtb3NzIDEyMEIsIHkgdW4gTWFjIFN0dWRpbyBNNSBVbHRyYSBkZSA1MTIgR0IgY2FyZ2EgTGxhbWEgMy4xIDQwNUIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk1pcmEgZWwgYW5jaG8gZGUgYmFuZGEgcGFyYSBsYSB2ZWxvY2lkYWQiLAogICAgICAidGV4dCI6ICJFbiB1biBtb2RlbG8gZGVuc28sIGVsIGFuY2hvIGRlIGJhbmRhIGRpdmlkaWRvIGVudHJlIGVsIHRhbWHDsW8gZGVsIG1vZGVsbyBlcyBlbCB0ZWNobyBkZSB0b2tlbnMgcG9yIHNlZ3VuZG8uIEVuIHVuYSBtaXNtYSBwcnVlYmEgY29uIE9sbGFtYSB5IExsYW1hIDMuMSA3MEIsIHVuIE0zIFVsdHJhIGRlIDgxOSBHQi9zIGVzY3JpYmnDsyAxNCwwOCB0b2tlbnMvcywgdW4gUnl6ZW4gQUkgTWF4KyAzOTUgZGUgMjU2IEdCL3MgNCw5NyB5IHVuIHNpc3RlbWEgR0IxMCBkZSAyNzMgR0IvcyA0LDcxLiBMb3MgbW9kZWxvcyBtaXh0dXJlLW9mLWV4cGVydHMgc29sbyBsZWVuIHN1cyBwYXLDoW1ldHJvcyBhY3Rpdm9zIHkgdmFuIG11Y2hvIG3DoXMgcsOhcGlkby4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiSW5zdGFsYSBPbGxhbWEgeSBjb21wcnVlYmEgcXVlIGNhYmUiLAogICAgICAidGV4dCI6ICJJbnN0YWxhIE9sbGFtYSAoY3VybCAtZnNTTCBodHRwczovL29sbGFtYS5jb20vaW5zdGFsbC5zaCB8IHNoIGVuIExpbnV4KSwgZWplY3V0YSBlbCBtb2RlbG8gY29uIG9sbGFtYSBydW4gPG1vZGVsbz4gLS12ZXJib3NlIHkgZGVzcHXDqXMgb2xsYW1hIHBzLiBQUk9DRVNTT1IgZGViZXLDrWEgaW5kaWNhciAxMDAlIEdQVSB5IENPTlRFWFQgbXVlc3RyYSBsYSB2ZW50YW5hIHJlc2VydmFkYTsgc8O6YmVsYSBjb24gT0xMQU1BX0NPTlRFWFRfTEVOR1RILiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBY2NlZGUgYSB0dSBMTE0gbG9jYWwgZW4gcmVtb3RvIiwKICAgICAgInRleHQiOiAiRWplY3V0YSBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MTE0MzQgZnJlZS5waW5nZ3kuaW8gdTpIb3N0OmxvY2FsaG9zdDoxMTQzNCBwYXJhIG9idGVuZXIgdW5hIFVSTCBIVFRQUyBww7pibGljYSBwYXJhIGxhIEFQSSBkZSBPbGxhbWEuIExhIHJlZXNjcml0dXJhIHU6SG9zdCBoYWNlIGZhbHRhIHBvcnF1ZSBPbGxhbWEgcmVjaGF6YSBsYXMgcGV0aWNpb25lcyBjdXlhIGNhYmVjZXJhIEhvc3Qgbm8gZXMgdW4gbm9tYnJlIGxvY2FsLiBBw7FhZGUgazpZT1VSX1JBTkRPTV9LRVkgcGFyYSBleGlnaXIgdW5hIGNsYXZlIGJlYXJlci4iCiAgICB9CiAgXQp9Cjwvc2NyaXB0Pgo="
outputs:
  - HTML
  - AMP
---


{{< image "best_hardware_for_self_hosting_local_llms/best_hardware_for_self_hosting_local_llms_banner.webp" "Cómo elegir el hardware adecuado para ejecutar LLMs en local en 2026" >}}

Ejecutar un modelo de lenguaje grande en tu propio hardware mantiene tus prompts en privado, no genera una factura por token y sigue funcionando cuando falla internet. Lo difícil es elegir la máquina, porque las fichas técnicas venden teraflops, pero el dato que decide lo rápido que responde un modelo es la memoria: cuánta tienes y a qué velocidad puede leerla el chip.

Por eso los precios pueden engañar. Una RTX 4060 de $600 basta para modelos de 7B, un equipo con AMD Ryzen AI Max+ 395 y 128GB por unos $3,400 carga un modelo de 70B entero en la memoria de la GPU, a unos 5 tokens por segundo, y un Mac Studio Ultra con 256GB de memoria unificada carga ese mismo modelo de 70B a precisión completa, sin ninguna cuantización. En cambio, el DGX Spark de NVIDIA, que se vende como un superordenador personal de IA, solo llega a 2,7 tok/s con un modelo de 70B en FP8, porque su ancho de banda de memoria es más o menos una cuarta parte del de una RTX 4090.

Esta guía cubre todos los niveles: GPUs para modelos de 7B a 34B, los sistemas con mucha memoria unificada que hicieron viables los modelos de 70B en casa y las configuraciones con varias GPUs para 405B o más, además de cómo servir tu modelo con Ollama y acceder a él desde cualquier lugar.

{{< llm-context >}}Para acceder en remoto a tu LLM self-hosted con Pinggy - ejecuta `ollama serve` (arranca en el puerto 11434) y después, en otra terminal, ejecuta `ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434` para obtener una URL HTTPS pública para tu API de Ollama (la reescritura `u:Host` evita que Ollama responda con un 403).{{< /llm-context >}}

{{% tldr %}}

**Por tamaño de modelo:**
- **Modelos de 8B-14B y gpt-oss 20B**: <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5060-family/" target="_blank">RTX 5060 Ti 16GB</a> (≈$800) o <a href="https://www.amd.com/en/products/graphics/desktops/radeon/9000-series/amd-radeon-rx-9070xt.html" target="_blank">AMD RX 9070 XT 16GB</a> (≈$980); una RTX 4060 de 8GB sigue moviendo 8B con un contexto corto
- **Modelos densos de 27B-32B**: <a href="https://www.amd.com/en/products/graphics/workstations/radeon-ai-pro/ai-9000-series/amd-radeon-ai-pro-r9700.html" target="_blank">Radeon AI PRO R9700 32GB</a> (≈$1,900) por precio, <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/" target="_blank">RTX 5090 32GB</a> (≈$7,350) por velocidad
- **Modelos densos de 70B y MoE de 120B**: 128GB de memoria unificada - un sistema Ryzen AI Max+ 395 (≈$3,449), un <a href="https://www.apple.com/mac-studio/" target="_blank">Mac Studio</a> M5 Max (desde $2,499, hasta 128GB), un <a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/" target="_blank">NVIDIA DGX Spark</a> (≈$6,950) o un mini PC con RTX Spark
- **405B o más**: un Mac Studio M5 Ultra de 512GB ($22,299) o hasta ocho DGX Spark en clúster

**Regla clave:** el archivo del modelo más su caché KV tiene que caber en memoria a la que llegue la GPU; a partir de ahí, el ancho de banda marca la velocidad. En una misma prueba con Ollama y Llama 3.1 70B, un M3 Ultra (819 GB/s) dio 14,08 tok/s, un Ryzen AI Max+ 395 (256 GB/s) 4,97 y un equipo GB10 de la clase del Spark (273 GB/s) 4,71. Una RTX 4090 de 24GB se quedó en 3,10, porque el modelo no cabía.

**El mejor software de inferencia:**
- <a href="https://ollama.com" target="_blank">Ollama</a> - se instala con un comando, funciona en todas partes, ajusta el contexto a tu VRAM y añade un motor MLX en Apple Silicon
- <a href="https://lmstudio.ai" target="_blank">LM Studio</a> - la mejor interfaz gráfica para usuarios de escritorio
- <a href="https://github.com/vllm-project/vllm" target="_blank">vLLM</a> - lo mejor para servir a varios usuarios en producción con NVIDIA
- <a href="https://github.com/ggml-org/llama.cpp" target="_blank">llama.cpp</a> - el motor que hay debajo de casi todas las herramientas locales, con backends CUDA, ROCm, Vulkan, SYCL y Metal

{{% /tldr %}}

## El cuello de botella: el ancho de banda de memoria

Antes de mirar hardware concreto, hay un concepto que conviene entender: **generar texto está limitado por el ancho de banda de memoria, no por el cómputo.** Para producir cada token, la GPU lee de memoria todos los pesos que el modelo usa para ese token. En un modelo denso eso es el archivo entero, una vez por token. Divide el ancho de banda entre los bytes leídos y tienes un techo duro para la velocidad de salida, digan lo que digan los teraflops.

Haz la cuenta con Llama 3.3 70B, que ocupa 42,5 GB a cuatro bits. Un Ryzen AI Max+ 395 con 256 GB/s se queda en unos 6 tokens por segundo como máximo, un DGX Spark con 273 GB/s en 6,4, un M4 Max con 546 GB/s en 12,8, un M3 Ultra con 819 GB/s en 19 y el M5 Ultra, con 1,2 TB/s, en unos 28. Las pruebas reales quedan por debajo de esos techos, porque ningún chip alcanza su ancho de banda teórico y además hay que leer la caché KV.

El repositorio <a href="https://github.com/geerlingguy/ai-benchmarks" target="_blank">ai-benchmarks</a> de Jeff Geerling ejecuta la misma prueba de Ollama en todas las máquinas, así que es una de las pocas comparaciones en igualdad de condiciones. Llama 3.1 70B, etiqueta por defecto de Ollama:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Máquina</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Dónde se ejecuta el modelo</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">tok/s de salida</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio M3 Ultra, 512GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>14,08</strong></td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio M1 Ultra, 128GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9,84</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio M1 Max, 64GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">7,25</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Framework Desktop, Ryzen AI Max+ 395</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU y CPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4,97</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Dell Pro Max con GB10 (el chip del DGX Spark)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4,71</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Ryzen 9 7900X con una RTX 4090 de 24GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU y CPU</td>
  <td style="border:1px solid #ddd;padding:0.5em;">3,10</td>
</tr>
</tbody>
</table>

El orden sigue al ancho de banda casi al pie de la letra, con una excepción reveladora. La RTX 4090 tiene 1008 GB/s, más que cualquier otra de la tabla, y queda la última, porque 42,5 GB no caben en 24GB y lo que sobra se ejecuta a la velocidad de la RAM del sistema. La cifra de 2,7 tok/s del DGX Spark viene de la <a href="https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark" target="_blank">review de LMSYS</a>, que ejecutó Llama 3.1 70B en FP8 con SGLang. Los pesos en FP8 ocupan unos 70GB, así que a 273 GB/s el techo está por debajo de 4 tokens por segundo.

Hay dos excepciones que completan el cuadro. Los modelos mixture-of-experts (MoE) solo leen los expertos activos en cada token: gpt-oss 120B tiene 117B parámetros pero unos 5,1B activos, según la <a href="https://openai.com/index/introducing-gpt-oss/" target="_blank">ficha del modelo de OpenAI</a>, así que escribe muchas veces más rápido que un 70B denso en la misma máquina. Y leer tu prompt (el prefill) depende del cómputo, así que la espera hasta el primer token sigue a la potencia de la GPU. La capacidad decide si un modelo cabe, el ancho de banda decide lo rápido que escribe y el cómputo decide cuánto esperas después de pegar un archivo largo.

## ¿Cuánta memoria necesitas?

Multiplicar los parámetros por 0,6 todavía da una buena aproximación para un modelo denso en Q4_K_M, pero la descarga real es fácil de consultar. Estas son las etiquetas de cuatro bits por defecto de Ollama (Q4_K_M, o MXFP4 en gpt-oss) en GB decimales, con un punto de partida para un usuario y un contexto moderado:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Modelo</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tipo</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Descarga de Ollama</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Hardware a considerar</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3:8b" target="_blank">Qwen3 8B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">denso</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5,2 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">GPU de 8GB para chats cortos</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3:14b" target="_blank">Qwen3 14B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">denso</td>
  <td style="border:1px solid #ddd;padding:0.5em;">9,3 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">12GB con contexto corto, 16GB para más</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/gpt-oss:20b" target="_blank">gpt-oss 20B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE, MXFP4</td>
  <td style="border:1px solid #ddd;padding:0.5em;">13,8 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">tarjeta de 16GB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3.8:27b" target="_blank">Qwen3.8 27B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">denso, visión</td>
  <td style="border:1px solid #ddd;padding:0.5em;">17,7 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">tarjeta de 24GB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3:32b" target="_blank">Qwen3 32B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">denso</td>
  <td style="border:1px solid #ddd;padding:0.5em;">20,2 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24GB con contexto corto, 32GB para largo</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/llama3.3:70b" target="_blank">Llama 3.3 70B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">denso</td>
  <td style="border:1px solid #ddd;padding:0.5em;">42,5 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">tarjeta de 48GB o 64GB de memoria unificada</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/gpt-oss:120b" target="_blank">gpt-oss 120B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE, MXFP4</td>
  <td style="border:1px solid #ddd;padding:0.5em;">65,4 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">tarjeta de 96GB o 128GB de memoria unificada</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/qwen3.5:122b-a10b-q4_K_M" target="_blank">Qwen3.5 122B-A10B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">MoE</td>
  <td style="border:1px solid #ddd;padding:0.5em;">81,4 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">128GB de memoria unificada</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><a href="https://ollama.com/library/llama3.1:405b-instruct-q4_K_M" target="_blank">Llama 3.1 405B</a></td>
  <td style="border:1px solid #ddd;padding:0.5em;">denso</td>
  <td style="border:1px solid #ddd;padding:0.5em;">243,1 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">Mac Studio de 512GB o varias GPUs</td>
</tr>
</tbody>
</table>

{{< image "best_hardware_for_self_hosting_local_llms/local_llm_model_sizes_es.webp" "Gráfico de barras titulado Cuánta memoria necesita un LLM local, con el tamaño de descarga de Ollama a cuatro bits de nueve LLMs locales, desde 5,2 GB para Qwen3 8B hasta 243,1 GB para Llama 3.1 405B." >}}

*Datos: manifiestos del registro de Ollama para las etiquetas Q4_K_M o MXFP4 por defecto.*

Hay dos cosas de esa tabla que confunden a mucha gente. Un modelo MoE necesita memoria para **todos** sus pesos, aunque cada token solo toque unos pocos expertos, así que gpt-oss 120B sigue necesitando sus 65,4 GB completos. Y la cifra de Qwen3.8 incluye un proyector de visión de 0,9 GB, porque Ollama incluye el codificador de imágenes en la misma descarga. Más precisión escala con los bits por peso: Q8_0 guarda unos 8,5 bits por parámetro, así que un modelo de 70B ocupa unos 75GB, y BF16 usa dos bytes por parámetro, unos 140GB. Q4_K_M sigue siendo la opción estándar, y es lo que Ollama descarga por defecto.

Comprueba siempre la etiqueta exacta antes de hacer cuentas. La página del modelo en Ollama muestra la cuantización y el tamaño:

{{< image "best_hardware_for_self_hosting_local_llms/ollama_qwen3_14b_details.webp" "Página del modelo Qwen3 14B en Ollama con el comando ollama run qwen3:14b, cuantización Q4_K_M, 14.8B parámetros y una descarga de 9.3GB." >}}

### El contexto añade la caché KV

La descarga es solo la primera reserva de memoria. Cada token de la conversación deja claves y valores en cada capa de atención, y esa caché KV crece de forma lineal con la longitud del contexto. Así es como un modelo que "cabe" en un chat corto deja de caber a 32k. El coste por token sale directamente del `config.json` del modelo:

```text
KV bytes per token = 2 (K and V) x layers x KV heads x head dim x bytes per value
```

Para <a href="https://huggingface.co/Qwen/Qwen3-32B/blob/main/config.json" target="_blank">Qwen3 32B</a> son 2 x 64 x 8 x 128 x 2 bytes = **256 KiB por token** con la caché f16 por defecto. La misma cuenta para los otros modelos densos:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Modelo</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Capas x cabezas KV x dim. de cabeza</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">KV por token (f16)</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">A 4k</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">A 32k</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3 8B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">36 x 8 x 128</td>
  <td style="border:1px solid #ddd;padding:0.5em;">144 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0,56 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">4,5 GiB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3 14B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">40 x 8 x 128</td>
  <td style="border:1px solid #ddd;padding:0.5em;">160 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">0,63 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">5,0 GiB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Qwen3 32B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">64 x 8 x 128</td>
  <td style="border:1px solid #ddd;padding:0.5em;">256 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,0 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">8,0 GiB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Llama 3.3 70B</td>
  <td style="border:1px solid #ddd;padding:0.5em;">80 x 8 x 128</td>
  <td style="border:1px solid #ddd;padding:0.5em;">320 KiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,25 GiB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">10,0 GiB</td>
</tr>
</tbody>
</table>

{{< image "best_hardware_for_self_hosting_local_llms/qwen3_32b_kv_cache_fit_es.webp" "Gráfico titulado Qwen3 32B en GPU de 24 GB y de 32 GB: 18,8 GiB de pesos más 1 GiB de caché KV con contexto de 4k, 8 GiB a 32k con caché f16 y 4,25 GiB a 32k con caché q8_0, frente a los límites de 24 GiB y 32 GiB." >}}

Pasa los pesos a la misma unidad (20,2 GB son 18,8 GiB) y el problema queda claro. Con 4k de contexto, Qwen3 32B necesita unos 19,8 GiB y cabe en una tarjeta de 24GB. Con 32k necesita 26,8 GiB, así que en una RTX 3090 o 4090 de 24GB parte del modelo pasa a la RAM del sistema y la generación se frena mucho. Una RTX 5090 o una Radeon AI PRO R9700 de 32GB cargan la versión de 32k con margen.

Hay dos palancas para reducir la caché. Ollama puede guardarla como `q8_0`, que según las <a href="https://docs.ollama.com/faq" target="_blank">FAQ de Ollama</a> usa más o menos la mitad de memoria que f16 "con una pérdida de precisión muy pequeña", o como `q4_0`, con una cuarta parte y algo más de pérdida. Se activa en el servidor con `OLLAMA_KV_CACHE_TYPE=q8_0` y necesita flash attention, que Ollama enciende por su cuenta cuando el backend lo admite. Así Qwen3 32B a 32k baja a unos 23,1 GiB, justo por debajo de la línea de 24GB y con poco margen para búferes. La otra palanca es la arquitectura: gpt-oss 120B usa una ventana deslizante de 128 tokens en la mitad de sus 36 capas, así que solo necesita unos 36 KiB por token, unos 4,5 GiB con su contexto completo de 128k.

Ollama también elige la longitud de contexto por ti. Según su <a href="https://docs.ollama.com/context-length" target="_blank">documentación de longitud de contexto</a>, usa 4k por defecto en GPUs con menos de 24 GiB, 32k entre 24 y 48 GiB y 256k a partir de 48 GiB. En una GPU pequeña, un documento largo puede perder su principio sin avisar, porque nunca llegó a caber en la ventana. Define `OLLAMA_CONTEXT_LENGTH` al arrancar el servidor y vuelve a comprobar que todo cabe.

Lo comprobé en mi MacBook Pro M3 Pro de 18GB con Ollama 0.40.11 y `qwen3:8b`. El log del servidor indicó 13,3 GiB de memoria de GPU utilizable, eligió `default_num_ctx=4096` y reservó exactamente 576 MiB de caché KV: 144 KiB por 4096 tokens. Con `OLLAMA_CONTEXT_LENGTH=32768` y `OLLAMA_KV_CACHE_TYPE=q8_0` la caché fue de 2448 MiB, frente a los 4608 MiB que da la fórmula para f16 a 32k, y el log avisó de que había activado flash attention para la caché cuantizada. La velocidad de salida se mantuvo entre 24,6 y 25,6 tokens/s en todas las pruebas.

## GPUs de consumo

La serie RTX 50 de NVIDIA sigue dominando aquí, sobre todo por el software: Ollama, LM Studio, vLLM, TensorRT-LLM y llama.cpp apuntan primero a CUDA. Lo que ha cambiado es el precio. La escasez de DRAM y GDDR7 llevó los precios de tienda muy por encima de los de lanzamiento: el seguimiento de Newegg de Tom's Hardware, resumido por <a href="https://www.club386.com/nvidia-gpu-price-increases-august-2026/" target="_blank">Club386</a>, mostró la mediana de la RTX 5060 Ti 16GB subiendo de $569.99 a $804.99 en un par de meses. Estas son las tarjetas que merece la pena considerar, con el anuncio nuevo más barato en EE. UU. según <a href="https://gpuprix.com/us/gpus/geforce-rtx-5090" target="_blank">gpuprix</a>:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tarjeta</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">VRAM</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Ancho de banda</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Precio de lanzamiento</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Precio nuevo más bajo en EE. UU.</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5060 Ti 16GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">448 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$429</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$800</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">RX 9070 XT</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">640 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$599</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$980</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Intel Arc Pro B60</td>
  <td style="border:1px solid #ddd;padding:0.5em;">24 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">456 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$599 (primeros anuncios)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$1,000</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5070 Ti</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">896 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$749</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$1,400</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">Radeon AI PRO R9700</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">640 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$1,299</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$1,900</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5080</td>
  <td style="border:1px solid #ddd;padding:0.5em;">16 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">960 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$999</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$2,000</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">RTX 5090</td>
  <td style="border:1px solid #ddd;padding:0.5em;">32 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1792 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$1,999</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$7,350</td>
</tr>
</tbody>
</table>

Las tarjetas de 16GB se diferencian en velocidad, no en lo que pueden cargar. Cualquiera mueve Qwen3 14B con 32k de contexto (8,7 GiB de pesos más 5 GiB de caché) y gpt-oss 20B, y ninguna carga un modelo denso de 27B o 32B. La **RTX 5060 Ti 16GB** es la entrada barata, una tarjeta Blackwell con soporte FP4. La **RTX 5070 Ti** y la **RTX 5080** duplican su ancho de banda, así que los mismos modelos escriben más o menos el doble de rápido, pero pagas velocidad, no capacidad. Una tarjeta de 8GB que ya tengas, como la RTX 4060, sigue moviendo Qwen3 8B con el contexto de 4k por defecto de Ollama.

Entre 24 y 32GB la elección es dinero frente a velocidad. La **Radeon AI PRO R9700** te da 32GB por unos $1,900, suficiente para Qwen3 32B con 32k de contexto. La **RTX 5090** tiene los mismos 32GB con casi el triple de ancho de banda, así que es la tarjeta de consumo más rápida para todo lo que quepa, pero a unos $7,350 cuesta justificarla solo por capacidad. La **Intel Arc Pro B60** es la tarjeta de 24GB mas barata, a unos $1,000, si te manejas con los backends SYCL o Vulkan de llama.cpp.

Las tarjetas usadas también se han encarecido. Una **RTX 3090 usada** (24GB, 936 GB/s) tenía un precio mediano pedido en eBay de $1,996 según <a href="https://gpudojo.com/market-notes/2026-11-11-rtx-3090-asks-rise" target="_blank">gpudojo</a>, más o menos lo que cuesta una R9700 nueva con 8GB menos, así que solo compensa muy por debajo de esa cifra. La **RTX 4090** ya no se fabrica y las nuevas cuestan desde unos $4,400, y la **RX 7900 XTX** de 24GB ronda los $1,500 reacondicionada.

{{< image "best_hardware_for_self_hosting_local_llms/local_llm_memory_per_dollar_es.webp" "Gráfico de dispersión titulado Hardware para LLM locales: memoria y precio, con la memoria frente al precio en EE. UU. en escala logarítmica: GPUs dedicadas desde 16 GB a $800 hasta 32 GB a $7,350 y 96 GB a unos $16,000, sistemas de memoria unificada desde 128 GB a $3,449 hasta 512 GB a $22,299." >}}

Por gigabyte, las GPUs dedicadas son caras y los sistemas de memoria unificada son donde la capacidad sale barata. Esa capacidad se paga en ancho de banda, que es el tema de la siguiente sección.

El soporte del backend importa más fuera de NVIDIA. La <a href="https://docs.ollama.com/gpu" target="_blank">página de soporte de GPUs de Ollama</a> incluye la RX 9070 XT y la R9700 en Linux con el driver ROCm v7, mientras que su lista de ROCm para Windows se queda en la serie RX 7000 y las Radeon PRO W7000. Vulkan viene activado por defecto y cubre el resto, así que una Radeon en Windows funciona igualmente, solo que no a través de ROCm. Las Intel Arc Pro no aparecen en la lista de Ollama; lo habitual es usar los backends SYCL y Vulkan de llama.cpp. Para inferencia con AMD, Linux sigue siendo la mejor opción.

## Sistemas con mucha memoria unificada

Esta es la categoría que cambia las cuentas para los modelos de 70B o más. En un PC con una tarjeta de 24GB, Llama 3.3 70B no cabe sin desbordarse a la RAM del sistema. Los sistemas con mucha **memoria unificada**, en los que CPU y GPU comparten un mismo bloque, eliminan ese techo: gpt-oss 120B se carga en 128GB y todas las capas se ejecutan en la GPU. La contrapartida es el ancho de banda. Los equipos de AMD y NVIDIA están entre 256 y 300 GB/s, mientras que los chips Max y Ultra de Apple van mucho más allá.

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Sistema</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Memoria</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Ancho de banda</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Precio en EE. UU.</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mac Studio M5 Max</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">de 36 a 128 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">460 o 614 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">desde $2,499</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Mac Studio M5 Ultra</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">96, 256 o 512 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1,2 TB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">desde $5,499; 512GB $22,299</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Framework Desktop, Ryzen AI Max+ 395</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">256 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$3,449</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>Framework Desktop, Ryzen AI Max+ PRO 495</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">192 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">273 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">$6,799 (DIY Edition)</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>ASUS ProArt GR1X, RTX Spark</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">64 o 128 GB</td>
  <td style="border:1px solid #ddd;padding:0.5em;">300 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">desde $4,499; 128GB $6,999</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;"><strong>NVIDIA DGX Spark</strong></td>
  <td style="border:1px solid #ddd;padding:0.5em;">128 GB (64GB de socios)</td>
  <td style="border:1px solid #ddd;padding:0.5em;">273 GB/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">≈$6,950; 64GB desde $4,999</td>
</tr>
</tbody>
</table>

### Mac Studio M5 Max y M5 Ultra

El Mac Studio es la máquina individual más rápida de este grupo. La <a href="https://www.apple.com/mac-studio/specs/" target="_blank">página de especificaciones de Apple</a> ata la memoria al chip: el M5 Max base de $2,499 tiene una GPU de 32 núcleos, 36GB y 460 GB/s, mientras que 48, 64 y 128GB solo vienen con la GPU de 40 núcleos a 614 GB/s. Para Llama 3.3 70B quieres 64GB o 128GB, y con 128GB también caben gpt-oss 120B y Qwen3.5 122B-A10B. El modelo base de 36GB no carga un 70B con un contexto útil.

El M5 Ultra funciona a 1,2 TB/s en todas las configuraciones. El más barato cuesta $5,499 con GPU de 64 núcleos y 96GB, suficiente para Llama 3.3 70B con mucho margen de contexto. Las versiones de 256GB y 512GB exigen la GPU de 80 núcleos: según la <a href="https://www.tomshardware.com/desktops/mini-pcs/apple-mac-studio-m5-ultra-review" target="_blank">review de Tom's Hardware</a>, eso suma $1,300, y pasar de 96GB a 256GB añade otros $4,000, así que 256GB empieza en torno a $10,799. La versión de 512GB cuesta $22,299, de los que $15,500 son memoria (<a href="https://macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/" target="_blank">MacRumors</a>). Es la única máquina individual de esta lista en la que caben los 243GB de Llama 3.1 405B con sitio para la caché.

La velocidad sigue al ancho de banda. Tom's Hardware probó el modelo denso Qwen3.8 27B en Q4_K_M con el M5 Ultra de 80 núcleos y midió una velocidad de salida de más o menos el doble que el M4 Max y casi cuatro veces la de un DGX Spark, además de procesar prompts más rápido que el Spark. Los Mac anteriores leían despacio los prompts largos, y Apple asegura que el M5 Max procesa prompts hasta 3,9 veces más rápido que el M4 Max en LM Studio (<a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/" target="_blank">Apple newsroom</a>), gracias a aceleradores neuronales en cada núcleo de la GPU.

El problema es el software. En un <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/going-deep-on-local-ai-performance-with-apples-mac-studio-with-m5-ultra-inference-engine-recipes-mandatory-for-bigger-models-as-mlx-stack-matures" target="_blank">análisis posterior</a> con modelos MoE grandes, los resultados dependían mucho del motor de inferencia: dos DGX Spark en clúster procesaban los prompts largos bastante más rápido, y una receta de servicio específica para MLX triplicó la velocidad de decodificación del Mac con GLM 5.3 Flash frente a llama.cpp. MLX tampoco agrupa peticiones como vLLM en NVIDIA, así que el Mac es excelente para un desarrollador o un equipo pequeño y no es la herramienta adecuada para 20 usuarios a la vez.

### Mac Studio M4 Max y M3 Ultra (usados y reacondicionados)

Los Mac Studio anteriores aparecen usados y reacondicionados. El M3 Ultra tiene 819 GB/s y hasta 512GB, y en la prueba de Geerling movió Llama 3.1 70B a 14,08 tokens/s, el mejor resultado entre las máquinas de memoria unificada de esa tabla. Con 256GB cabe Llama 3.3 70B a precisión BF16 completa (unos 140GB) con margen.

El M4 Max de 40 núcleos tiene 546 GB/s y hasta 128GB. Las <a href="https://www.tomshardware.com/desktops/exploring-apple-silicons-local-ai-performance-with-the-mac-studio-and-m4-max-m4-max-beats-gb10-and-strix-halo-in-decode-throughput-but-memory-bandwidth-isnt-everything" target="_blank">pruebas con llama.cpp de Tom's Hardware</a> lo vieron escribir entre un 27% y un 82% más rápido que un equipo GB10 según el modelo, y 2,26 veces más rápido que Strix Halo con el denso Gemma 4 12B. Con ese modelo denso, eso sí, su procesamiento de prompts solo igualó a Strix Halo, que es justo lo que la generación M5 fue a corregir.

### NVIDIA DGX Spark (128GB LPDDR5X)

El DGX Spark es el "superordenador de IA personal" de NVIDIA: un chip GB10 Grace Blackwell con 128GB de memoria unificada a 273 GB/s, con Linux, CUDA y el stack de contenedores de NVIDIA. Ese stack es la razón principal para comprarlo, porque los scripts de fine-tuning, los contenedores NIM y las recetas de vLLM o SGLang pensadas para NVIDIA funcionan casi siempre a la primera. Los <a href="https://developer.nvidia.com/blog/how-nvidia-dgx-sparks-performance-enables-intensive-ai-tasks" target="_blank">benchmarks de un solo usuario de NVIDIA</a> muestran dónde es fuerte: Llama 3.1 8B en NVFP4 leyó un prompt de 2048 tokens a 10 257 tokens/s y luego escribió a 38,65 tokens/s, y gpt-oss 120B dio 1725 y 55,37. Las cifras de prefill son de verdad impresionantes; las de generación son lo que permiten 273 GB/s.

Con modelos densos grandes, ese bus es el techo: LMSYS midió 2,7 tokens/s con Llama 3.1 70B en FP8, y la prueba de Geerling con Ollama dio 4,71 con el archivo de cuatro bits. El precio también ha subido con el coste de la memoria. <a href="https://servethehome.com/nvidia-dgx-spark-64gb-launched-and-big-128gb-gb10-price-increases" target="_blank">ServeTheHome informó</a> de que el modelo de 128GB, que salió a $3,999, cuesta ahora $6,950, mientras que Acer, ASUS, Dell, Gigabyte, HP y MSI venden versiones de 64GB desde $4,999.

Lo que distingue al Spark es el clúster. Dos unidades se conectan directamente por sus puertos ConnectX-7, y NVIDIA ya admite hasta ocho. En sus <a href="https://developer.nvidia.com/blog/running-frontier-class-ai-models-across-8-nvidia-dgx-spark-nodes" target="_blank">benchmarks multinodo</a>, Qwen3.8 27B en NVFP4 decodificó a 11,86 tokens/s en un Spark con un prompt de 8k, a 21,71 en dos nodos conectados directamente y a 52,58 en ocho nodos detrás de un switch. Ocho nodos suman 1TB de memoria, suficiente para el GLM 5.3 completo de 753B en NVFP4, que NVIDIA ejecutó a 31 tokens/s para un usuario con decodificación especulativa. Eso sí, ocho Spark al precio actual cuestan más de $55,000.

### AMD Ryzen AI Max+ 395 (Strix Halo)

El Ryzen AI Max+ 395 es la respuesta de AMD a Apple Silicon: 16 núcleos Zen 5, una GPU Radeon 8060S de 40 CU y hasta 128GB de LPDDR5X a 256 GB/s en un solo chip. La Variable Graphics Memory de AMD da a la GPU hasta 96GB en Windows, y Linux permite más, así que Llama 3.3 70B o gpt-oss 120B se ejecutan enteros en la GPU, algo que ninguna tarjeta de 24GB o 32GB puede hacer. Es la forma más barata de cargar un MoE de 120B, aunque su precio subió como todo lo demás: el Framework Desktop de 128GB salió a $1,999 y ahora cuesta $3,449 (<a href="https://hwbusters.com/news/framework-desktop-goes-to-192gb-with-gorgon-halo-and-the-price-nearly-doubles-to-6799/" target="_blank">Hardware Busters</a>). El Corsair AI Workstation 300, el Geekom A9 Mega y el Ryzen AI Halo de la propia AMD están en el mismo rango.

Con un 70B denso es lento: Geerling midió 4,97 tokens/s, en línea con su techo de 6 tokens/s. Con modelos MoE es otra máquina. Una misma persona, eugr, ejecutó el mismo comando `llama-bench` con gpt-oss 120B en un DGX Spark y en un mini PC con Ryzen AI Max+ 395 y <a href="https://forums.developer.nvidia.com/t/dgx-spark-vs-amd-strix-halo/348751" target="_blank">publicó los resultados</a>:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Máquina (llama.cpp, gpt-oss 120B)</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Prompt, contexto vacío</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Salida, contexto vacío</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Prompt a 32k</th>
  <th style="border:1px solid #ddd;padding:0.5em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Salida a 32k</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.5em;">DGX Spark, CUDA</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1939 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">56,3 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1242 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">39,1 tok/s</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.5em;">Ryzen AI Max+ 395, ROCm</td>
  <td style="border:1px solid #ddd;padding:0.5em;">1000 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">47,5 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">349 tok/s</td>
  <td style="border:1px solid #ddd;padding:0.5em;">35,4 tok/s</td>
</tr>
</tbody>
</table>

La velocidad de salida es parecida, porque los dos tienen casi el mismo ancho de banda y gpt-oss solo lee unos pocos GB por token. Procesar el prompt es trabajo de cómputo, y ahí el Spark es el doble de rápido con el contexto vacío y 3,6 veces más rápido a 32k: leer otros 2048 tokens en una conversación de 32k lleva unos 1,6 segundos en el Spark y 5,9 en el equipo de AMD. Los dos backends han mejorado desde entonces, y una <a href="https://github.com/visorcraft/strix-halo-llm-perf" target="_blank">prueba posterior de la comunidad</a> con ROCm 7 midió 53,4 tokens/s de salida en el 395, así que lo útil es la proporción. Para una ventana de chat, el equipo de AMD a mitad de precio va bien. Para un agente de programación que relee un contexto grande en cada turno, el prefill del Spark merece lo que cuesta.

Usa Linux con ROCm 7 para obtener los mejores resultados; en Windows la mayoría de herramientas tiran de Vulkan.

### AMD Ryzen AI Max+ PRO 495 (Gorgon Halo)

Gorgon Halo mantiene el diseño y sube el techo de memoria. El Ryzen AI Max+ PRO 495 combina 16 núcleos Zen 5 (hasta 5,2 GHz) con una Radeon 8065S de 40 CU y admite hasta **192GB de memoria unificada**, de los que 160GB pueden ir a la GPU. Da para Qwen3.5 122B-A10B con un contexto largo, o para Llama 3.3 70B a precisión BF16 completa.

No esperes mucha más velocidad. La memoria sigue siendo LPDDR5X, ahora a 8533 MT/s, así que el ancho de banda solo sube a 273 GB/s, un 7% más que el 395. Pagas por margen, y pagas mucho: el Framework Desktop de 192GB empieza en **$6,799** en su DIY Edition y, con esa memoria, solo admite Linux. El ThinkCentre X Ultra de Lenovo lleva el PRO 495 con hasta 128GB, y el <a href="https://www.amd.com/en/blogs/2026/project-zenith-comes-to-amd-ryzen-ai-halo-ready-to-code.html" target="_blank">Ryzen AI Halo 495 de AMD</a> viene con el entorno de desarrollo Project Zenith de Microsoft preinstalado.

### NVIDIA RTX Spark

El RTX Spark es el chip de NVIDIA para Windows on Arm: una CPU Arm desarrollada con MediaTek y una GPU Blackwell que comparten 64 o 128GB de LPDDR5X a 300 GB/s. Lleva la idea del DGX Spark, memoria unificada con CUDA, a portátiles y sobremesas pequeños, y ya está a la venta de la mano de ASUS, Dell, HP, Lenovo, Microsoft Surface y MSI, desde el Surface Laptop Ultra hasta mini PCs como el ASUS ProArt GR1X ($4,499 con 64GB, $6,999 con 128GB).

En la <a href="https://www.tomsguide.com/computing/mini-pcs/nvidia-rtx-spark-mini-pc-review-benchmarks-vs-amd" target="_blank">review de Tom's Guide</a>, el GR1X de 128GB movió Qwen3.8 27B en LM Studio a entre 25,6 y 31,1 tokens/s en tres tareas, frente a 20,8-24,3 en un mini PC Ryzen AI Max 395 de 128GB que cuesta $3,000 menos. La diferencia grande estuvo en el tiempo hasta el primer token: de 0,32 a 0,98 segundos frente a 1,10-2,41. La review no indica la cuantización. Comprueba qeu tus herramientas tienen versión para Windows on Arm antes de comprar.

## GPUs profesionales y empresariales

Cuando das servicio a un equipo en lugar de a un solo usuario, el hardware de consumo se topa con límites reales: sin memoria ECC, garantías más cortas y software pensado para una petición cada vez.

La tarjeta actual para estaciones de trabajo es la **RTX PRO 6000 Blackwell**: 96GB de GDDR7 con ECC a 1792 GB/s, el ancho de banda de una RTX 5090 con el triple de memoria. NVIDIA no publica un precio oficial; su tienda la listó a unos $16,000 según <a href="https://www.igorslab.de/en/nvidia-rtx-pro-6000-blackwell-16000-dollar-96-gb-workstation-gpu-price-increase/" target="_blank">Igor's Lab</a>, que además la encontró agotada. Con 96GB caben gpt-oss 120B con un contexto largo o Llama 3.3 70B en Q8, y el techo para el 70B de cuatro bits ronda los 42 tokens/s, siete veces lo que alcanzan los equipos de memoria unificada. Runpod la alquila desde $1.69 la hora.

Las GPUs de centro de datos son otra liga. NVIDIA indica 80GB de HBM3 a 3,35 TB/s para la <a href="https://www.nvidia.com/en-us/data-center/h100/" target="_blank">H100 SXM</a> y 141GB de HBM3e a 4,8 TB/s para la <a href="https://www.nvidia.com/en-us/data-center/h200/" target="_blank">H200</a>. Su ventaja real es la concurrencia: con vLLM, el batching convierte las lecturas de pesos de muchos usuarios en una sola, así que decenas de personas comparten una GPU sin que la velocidad caiga en proporción. La mayoría de equipos las alquila. La <a href="https://www.runpod.io/pricing" target="_blank">página de precios de Runpod</a> pone la H100 SXM a $2.69 la hora en community cloud ($4.39 en secure) y la H200 a $3.59 ($5.29 en secure). Alquila la candidata un día y reproduce tráfico real con vLLM antes de comprometerte.

## Almacenamiento, RAM y multi-GPU

Unos cuantos puntos prácticos que se suelen subestimar.

La **RAM del sistema** es un desbordamiento lento: las capas que no caben en la VRAM se ejecutan desde ella a través de PCIe, que es por lo que la 4090 quedó última en la tabla de Geerling, y si también se acaba la RAM, el sistema tira de swap. En un equipo con GPU dedicada, pon como mínimo el doble de tu VRAM en RAM del sistema. En un Mac o un Ryzen AI Max, la parte de la GPU sale del mismo bloque que necesita el sistema operativo, así que deja unos cuantos GB libres.

El **almacenamiento** solo decide el tiempo de arranque en frío. gpt-oss 120B ocupa 65,4 GB, así que un NVMe PCIe 4.0 a unos 7000 MB/s (Samsung 990 Pro, WD Black SN850X) lo lee en unos 10 segundos, mientras que un SSD SATA a 550 MB/s tarda unos dos minutos. Hazte con al menos 2TB de NVMe si vas a tener varios modelos.

El **multi-GPU** suma memoria, no velocidad para un solo usuario. llama.cpp y Ollama reparten las capas entre tarjetas, así que dos tarjetas de 24GB cargan Llama 3.3 70B con un contexto moderado, pero cada token sigue pasando por las tarjetas una detrás de otra. Para acelerar de verdad hace falta paralelismo de tensores, en el que todas las tarjetas trabajan en cada capa a la vez; vLLM lo hace en NVIDIA, y las cifras del Spark de arriba muestran lo que aporta: 1,84 veces la velocidad de decodificación con dos nodos y 4,43 veces con ocho.

## Nube vs. hardware propio

Para un uso esporádico, alquilar gana con facilidad. Runpod pone una RTX 4090 a $0.34 la hora y una RTX 5090 a $0.69 en su community cloud, o a $0.89 y $1.39 en su secure cloud, y alquilar te deja probar un modelo en una tarjeta antes de comprarla.

Las cuentas cambian con un uso sostenido. A $1.39 la hora, una RTX 5090 de $7,350 se amortiza tras unas 5290 horas, sin contar la electricidad: dos años y medio a 40 horas por semana, o unos siete meses funcionando día y noche. Una RTX 3090 usada a $1,996 frente a una 4090 alquilada a $0.34 se amortiza tras unas 5870 horas, y una RTX PRO 6000 de $16,000 frente a su tarifa de $2.69 en secure cloud, tras unas 5950. Con los precios actuales, entre 5000 y 6000 horas de uso real es el punto en el que tener el hardware empieza a compensar. Si la máquina va a funcionar todo el día o los datos no pueden salir de tu red, compra. Para una tarde de pruebas o un trabajo por lotes semanal, alquila.

## Primeros pasos con Ollama

Una vez que tienes el hardware, poner en marcha un modelo lleva unos minutos. En macOS y Windows, descarga la aplicación desde <a href="https://ollama.com/download" target="_blank">ollama.com/download</a>. En Linux, usa el script de instalación:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Elige un modelo que quepa con margen para el contexto: Qwen3 14B en una GPU de 16GB, gpt-oss 120B o Llama 3.3 70B en una máquina con 128GB de memoria unificada.

```bash
ollama run qwen3:14b
ollama run gpt-oss:120b
ollama run llama3.3:70b
```

Añade `--verbose` para ver por separado los tiempos del prompt y de la respuesta, y después comprueba lo que se ha reservado de verdad con `ollama ps`:

```bash
ollama run qwen3:8b --verbose "Explain how a DNS cache works in three sentences."
ollama ps
```

```text
NAME        ID              SIZE      PROCESSOR    CONTEXT    RUNNER      UNTIL
qwen3:8b    500a1f067a9f    5.1 GB    100% GPU     4096       llamacpp    4 minutes from now

prompt eval count:    21 token(s)
prompt eval cached:   20 token(s)
eval count:           278 token(s)
eval rate:            25.58 tokens/s
```

Es una ejecución en caliente en mi M3 Pro, y 25,6 tokens/s queda cerca del techo de ancho de banda de este chip (150 GB/s entre 5,2 GB, unos 29). **PROCESSOR** debería decir `100% GPU`; un reparto como `48%/52% CPU/GPU` significa que el modelo o su caché no cabían, así que baja el contexto, cuantiza la caché o usa una etiqueta más pequeña. **CONTEXT** muestra la ventana que ha reservado Ollama, que se queda en el valor por defecto según la VRAM salvo que lo subas:

```bash
OLLAMA_CONTEXT_LENGTH=32768 OLLAMA_KV_CACHE_TYPE=q8_0 ollama serve
```

**RUNNER** indica qué motor ha cargado el modelo. Ollama añadió un <a href="https://ollama.com/blog/mlx" target="_blank">motor MLX</a> para Apple Silicon en la versión 0.19, primero como vista previa con una lista corta de modelos compatibles, y elige el motor para cada modelo, así que mira la columna en vez de darlo por hecho; aquí `qwen3:8b` se cargó en el backend Metal de llama.cpp. Con AMD, Ollama necesita el driver ROCm v7 en Linux, usa Vulkan con las tarjetas RDNA 4 en Windows, y su documentación explica `HSA_OVERRIDE_GFX_VERSION` para las GPUs que ROCm no incluye en su lista. Con NVIDIA funciona sin más.

Ollama sirve una API compatible con OpenAI en `http://localhost:11434/v1`, así que Cursor, Continue, Open WebUI o cualquier cliente de OpenAI pueden apuntar directamente a ella. Como frontend de chat, Open WebUI se ejecuta en Docker junto a un Ollama instalado en el host:

```bash
docker run -d -p 127.0.0.1:3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

Eso te da una interfaz al estilo de ChatGPT en `localhost:3000`, accesible solo desde tu máquina. Nuestra guía de {{< link href="/blog/best_open_source_alternatives_to_chatgpt/" >}}alternativas open source a ChatGPT{{< /link >}} repasa más opciones de frontend.

## Accede a tu LLM desde cualquier lugar con Pinggy

Con Ollama funcionando en local, puede que quieras llegar a él desde un portátil, un móvil o el equipo de alguien de tu equipo. {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} crea un túnel público seguro con un solo comando SSH, sin reglas de firewall, redirección de puertos ni IP estática.

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io u:Host:localhost:11434\"}}}"
{{</ ssh_command >}}

Esto te da una URL HTTPS pública para tu instancia de Ollama; úsala con `/v1` al final como URL base en cualquier cliente compatible con OpenAI. La parte `u:Host:localhost:11434` reescribe la cabecera Host con la que Ollama espera; sin ella, Ollama responde 403 Forbidden. El mismo método sirve para Open WebUI en el puerto 3000.

Cualquiera que tenga la URL puede usar tu modelo, así que añade una clave antes de compartirla. Si añades `k:YOUR_RANDOM_KEY` al comando, el túnel rechaza las peticiones que no envíen `Authorization: Bearer YOUR_RANDOM_KEY`, que es justo lo que los clientes de estilo OpenAI mandan como clave de API; la [documentación de autenticación con clave](/docs/http_tunnels/key_auth/) tiene los detalles. Un túnel gratuito dura 60 minutos y recibe una URL nueva cada vez, mientras que un token Pro con un [subdominio persistente](/docs/persistent_subdomain/) mantiene la dirección.

## Qué comprar con cada presupuesto

Precios de tienda en EE. UU., que se han movido mucho con la escasez de memoria.

**Unos $800.** Una RTX 5060 Ti 16GB mueve Qwen3 14B con 32k de contexto y gpt-oss 20B. Mira antes tu equipo actual: una tarjeta de 8GB ya mueve Qwen3 8B con el contexto de 4k por defecto de Ollama.

**De $1,000 a $2,000.** La Arc Pro B60 da 24GB por unos $1,000 si te van bien los backends de Intel de llama.cpp. La Radeon AI PRO R9700, a unos $1,900, da 32GB, suficiente para Qwen3 32B a 32k, y es la opción de AMD mejor soportada en Linux. Una RTX 3090 usada cuesta lo mismo con menos memoria, así que solo compensa si está barata.

**De $2,500 a $3,500.** Un equipo Ryzen AI Max+ 395 de 128GB carga gpt-oss 120B y lo escribe a unos 50 tokens/s. Un Mac Studio M5 Max con 64GB o más es la opción si además quieres un Mac, con más ancho de banda y mucha menos configuración.

**De $5,000 a $7,500.** El M5 Ultra de $5,499 tiene con diferencia el mayor ancho de banda. El DGX Spark tiene CUDA, prefill rápido y clúster, el GR1X funciona con Windows y el Framework 495 de 192GB tiene la mayor memoria. Una RTX 5090 es la opción más rápida para modelos de menos de 32GB y la peor compra para cualquier cosa más grande.

**$10,000 o más.** Un M5 Ultra de 256GB desde unos $10,799 mueve modelos MoE grandes, una RTX PRO 6000 es la opción más rápida hasta 96GB y el Mac Studio de 512GB a $22,299 carga Llama 3.1 405B en una sola máquina.

## Conclusión

Dimensiona la máquina primero por memoria: el modelo más su caché KV con el contexto que usas. Una tarjeta de 16GB como la RTX 5060 Ti cubre modelos de 8B a 14B, con 32GB caben los de 27B a 32B, y a partir de ahí mandan los sistemas de memoria unificada como el Ryzen AI Max+ 395, el DGX Spark o el Mac Studio M5 Ultra. Comprueba `ollama ps` con tus prompts reales antes de decidir.

Para saber qué ejecutar, consulta {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" >}}los mejores LLMs open source para programar{{< /link >}} y {{< link href="/blog/top_5_local_llm_tools_and_models/" >}}las mejores herramientas de LLM locales{{< /link >}}.
