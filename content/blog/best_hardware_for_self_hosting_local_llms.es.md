---
title: "El mejor hardware para ejecutar LLM en local en 2026"
slug: "mejor-hardware-para-llms-locales"
description: "Elige una GPU o un equipo con memoria unificada según el tamaño real del modelo. Compara Mac Studio M5, Ryzen AI Halo, RTX Spark, DGX Spark y GPU de estación de trabajo."
date: 2026-06-05T14:15:25+05:30
lastmod: 2026-11-20T14:15:25+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Tecnología"
tags: ["local LLM", "self-hosted AI", "Apple Silicon", "Ollama", "AI hardware"]
categories: ["Technology", "AI", "Hardware"]
og_image: "images/best_hardware_for_self_hosting_local_llms/local_llm_model_sizes.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiRWwgbWVqb3IgaGFyZHdhcmUgcGFyYSBlamVjdXRhciBMTE0gZW4gbG9jYWwgZW4gMjAyNiIsCiAgImRlc2NyaXB0aW9uIjogIkVsaWdlIHVuYSBHUFUgbyB1biBlcXVpcG8gY29uIG1lbW9yaWEgdW5pZmljYWRhIHNlZ8O6biBlbCB0YW1hw7FvIHJlYWwgZGVsIG1vZGVsby4gQ29tcGFyYSBNYWMgU3R1ZGlvIE01LCBSeXplbiBBSSBIYWxvLCBSVFggU3BhcmssIERHWCBTcGFyayB5IEdQVSBkZSBlc3RhY2nDs24gZGUgdHJhYmFqby4iLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ29uc3VsdGEgZWwgdGFtYcOxbyBkZSBsYSBkZXNjYXJnYSB5IGxhIGN1YW50aXphY2nDs24gZXhhY3RhLiBSZXNlcnZhIG1lbW9yaWEgcGFyYSBlbCBjb250ZXh0byB5IGxvcyBiw7pmZXJlcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRXNjb2dlIHVuYSBHUFUgbyB1biBlcXVpcG8gY29uIG1lbW9yaWEgdW5pZmljYWRhIGNvbXBhdGlibGUgY29uIGVsIG1vdG9yIHkgZWwgc2lzdGVtYSBvcGVyYXRpdm8gcXVlIHZhcyBhIHVzYXIuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkRpbWVuc2lvbmEgZWwgYWxtYWNlbmFtaWVudG8gcGFyYSBsb3MgbW9kZWxvcyB5IGxhIFJBTSBwYXJhIGVsIHNpc3RlbWEgeSBsYXMgY2FwYXMgcXVlIHNlIGVqZWN1dGVuIGVuIENQVS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiRWplY3V0YSBlbCBtb2RlbG8gZW4gT2xsYW1hLCBjb21wcnVlYmEgb2xsYW1hIHBzIHkgbWlkZSBwb3Igc2VwYXJhZG8gZWwgcHJvY2VzYW1pZW50byBkZSBsYSBlbnRyYWRhIHkgbGEgZ2VuZXJhY2nDs24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIlBhcmEgYWNjZWRlciBhIGRpc3RhbmNpYSwgcmVlbnbDrWEgZWwgcHVlcnRvIGRlIE9sbGFtYSBtZWRpYW50ZSBQaW5nZ3kgY29uIGF1dGVudGljYWNpw7NuIHBvciBjbGF2ZSB5IGNvbmZpZ3VyYSBlbCBjbGllbnRlIGNvbiBsYSBkaXJlY2Npw7NuIEhUVFBTLiIKICAgIH0KICBdLAogICJpbkxhbmd1YWdlIjogImVzIgp9Cjwvc2NyaXB0Pg=="
outputs:
  - HTML
  - AMP
---

{{< image "best_hardware_for_self_hosting_local_llms/local_llm_model_sizes_es.webp" "Tamaños de cinco descargas Q4_K_M: de 5,2 GB para Qwen3 8B a 243 GB para Llama 3.1 405B, antes de añadir la caché." >}}

Una tarjeta de 16 GB puede alojar los 9,3 GB de Qwen3 14B cuantizado y dejar espacio para una conversación. Los 20 GB de Qwen3 32B ya superan su capacidad. Antes de elegir una GPU, identifica el modelo exacto, la cuantización, la longitud de los documentos y cuántas personas van a utilizarlo a la vez.

{{% tldr %}}

- **8B a 14B.** Empieza por el equipo que ya tienes. Una GPU de 8 GB puede servir para un modelo de 8B a cuatro bits con un contexto modesto. Para un PC nuevo, la RTX 5060 Ti de **16 GB** da más margen que la versión de 8 GB.
- **32B y 70B.** Para un modelo denso de 32B a cuatro bits, compara tarjetas de 24 y 32 GB. Para el modelo de 70B de la tabla, considera 48 GB de memoria dedicada o un sistema con al menos 64 GB de memoria compartida. Las sesiones largas o simultáneas necesitan más espacio.
- **405B.** Solo la descarga Q4_K_M de Llama 3.1 405B ocupa 243 GB. Un Mac Studio M5 Ultra con 512 GB permite alojarla en una máquina. Si necesitas CUDA, otra opción es repartir el modelo entre varios dispositivos.

{{% /tldr %}}

## Cuánta memoria necesita el modelo

Ollama publica estos tamaños redondeados en GB decimales. Cada enlace identifica el archivo y su cuantización. La última columna es una orientación para una sesión individual.

| Modelo | Descarga Q4_K_M | Hardware que conviene valorar |
| --- | ---: | --- |
| <a href="https://ollama.com/library/qwen3:8b" target="_blank">Qwen3 8B</a> | 5,2 GB | Una GPU de 8 GB para conversaciones cortas |
| <a href="https://ollama.com/library/qwen3:14b" target="_blank">Qwen3 14B</a> | 9,3 GB | 12 GB con contexto modesto; 16 GB dan más margen |
| <a href="https://ollama.com/library/qwen3:32b" target="_blank">Qwen3 32B</a> | 20 GB | 24 GB con contexto corto, o 32 GB para ampliar el margen |
| <a href="https://ollama.com/library/llama3.3:70b" target="_blank">Llama 3.3 70B</a> | 43 GB | Desde 48 GB dedicados o 64 GB en un sistema de memoria compartida |
| <a href="https://ollama.com/library/llama3.1:405b-instruct-q4_K_M" target="_blank">Llama 3.1 405B Instruct</a> | 243 GB | Una estación de gran memoria o varias GPU con el modelo repartido |

Además de los pesos, el motor necesita búferes y una caché de claves y valores (KV) para la atención. Aumentar la longitud de las conversaciones o mantener varias sesiones puede agrandar esa caché. En un equipo con memoria unificada, el sistema operativo y las demás aplicaciones también ocupan parte de la memoria física.

Con 70.000 millones de pesos a dos bytes cada uno, la cuenta aproximada es **140 GB en BF16**. A un byte por peso serían unos **70 GB**, antes de cualquier sobrecarga. Dos tarjetas de 24 GB suman 48 GB físicos: tiene sentido probar el modelo de 43 GB repartido entre ellas, pero uno de 70 GB no cabe por completo en sus memorias. Para un modelo de mezcla de expertos, calcula primero el espacio de todos los pesos aunque cada token solo active parte de ellos.

## Cómo interpretar los tokens por segundo

Durante una conversación con un modelo denso y un único usuario, cada token de salida suele requerir volver a leer gran parte de los pesos. Si se leyesen 43 GB por token en un bus de 273 GB/s, el techo aritmético sería de unos **6,3 tokens/s**. La ejecución de los kernels, el acceso a la caché y otros consumidores de ancho de banda pueden reducir el resultado. No es una medición de un equipo concreto.

El procesamiento de la instrucción inicial puede trabajar con varios tokens a la vez. Para documentos largos, mide el **tiempo hasta el primer token**. Para un chat, mide también los **tokens generados por segundo**. Para un servicio compartido, anota el rendimiento total y la latencia por usuario. Compara el mismo modelo, cuantización, programa, longitud de entrada y número de sesiones.

## GPU de consumo y estaciones de trabajo

| Trabajo previsto | Tarjetas que conviene comparar | Qué cambia entre ellas |
| --- | --- | --- |
| Modelos de 8B o 14B | RTX 5060 Ti 16 GB, RX 9070 XT 16 GB, RTX 5080 16 GB | La capacidad es la misma. Compara la velocidad en tu motor y comprueba que eliges la variante de 16 GB. |
| 32B a cuatro bits | RTX 3090 o 4090 de 24 GB de segunda mano, RTX 5090 o Radeon AI PRO R9700 de 32 GB | Los 32 GB dejan más espacio para contexto o varias solicitudes con el modelo de 20 GB. |
| 70B en una GPU | RTX 6000 Ada de 48 GB o RTX PRO 6000 Blackwell Workstation Edition de 96 GB | La segunda da espacio para más precisión o sesiones. Comprueba fuente de alimentación, espacio y refrigeración. |

Como referencias históricas en EE. UU., NVIDIA anunció la RTX 5060 Ti de 16 GB desde **429 USD** y AMD indicó **1299 USD** como precio recomendado inicial de la R9700. Son precios de tarjeta. Al comparar con un equipo completo, suma los componentes que necesites cambiar. La RTX PRO 6000 Workstation Edition de 96 GB tiene una potencia máxima declarada de 600 W solo para la tarjeta. <a href="https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299" target="_blank">Precios de lanzamiento de GeForce</a> · <a href="https://www.amd.com/en/products/graphics/workstations/radeon-ai-pro.html" target="_blank">Datos de AMD</a> · <a href="https://www.nvidia.com/en-us/products/workstations/professional-desktop-gpus/rtx-pro-6000/" target="_blank">Ficha de la RTX PRO 6000</a>.

Si tu flujo requiere un kernel CUDA concreto, verifica que acepte la arquitectura y precisión de tu tarjeta. Para Radeon, comprueba la combinación de GPU, sistema operativo y motor. <a href="https://docs.ollama.com/gpu" target="_blank">GPU compatibles con Ollama</a>.

## Equipos con memoria unificada

| Equipo | Memoria unificada | Ancho de banda publicado | Uso típico |
| --- | --- | --- | --- |
| Mac Studio M5 Max | Desde 36 GB, hasta 128 GB | 460 o 614 GB/s según el chip | Trabajo diario e inferencia local. Para el modelo de 43 GB valora 64 GB o más. |
| Mac Studio M5 Ultra | Desde 96 GB, hasta 512 GB | 1,2 TB/s | Modelos grandes con Metal o MLX. La configuración de 512 GB deja margen para el modelo de 243 GB. |
| AMD Ryzen AI Halo, Max+ PRO 495 | Hasta 192 GB; hasta 160 GB para gráficos | 273 GB/s | Un equipo x86 compacto con Windows o Linux cuando una tarjeta dedicada se queda pequeña. |
| ASUS ProArt GR1X, RTX Spark | 64 o 128 GB | 300 GB/s | Windows en Arm con GPU Blackwell integrada. Verifica la disponibilidad de tu motor para Arm. |
| NVIDIA DGX Spark, GB10 | 64 GB en determinados equipos de socios, o 128 GB | 273 GB/s | Linux en Arm, CUDA y despliegues distribuidos. |

**Mac Studio.** Apple anunció precios de partida en Estados Unidos de **2499 USD para M5 Max** y **5499 USD para M5 Ultra**. La opción de 512 GB cuesta más y requiere el M5 Ultra con CPU de 36 núcleos y GPU de 80 núcleos. Si ya tienes un M4 Max o un M3 Ultra con espacio suficiente, mide primero tus propias consultas. <a href="https://www.apple.com/mac-studio/specs/" target="_blank">Configuraciones de Apple</a> · <a href="https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/" target="_blank">Precios de lanzamiento</a>.

**Ryzen AI Halo.** Compara la configuración de 192 GB del PRO 495 con un Ryzen AI Max+ 395 de 128 GB si buscas ejecutar un 70B. El nuevo Halo puede destinar hasta 160 GB a gráficos. Un modelo de unos 140 GB en BF16 deja mucho menos margen que su variante a cuatro bits. AMD también ofrece Project Zenith, su entorno preconfigurado de Windows 11 para desarrollo. <a href="https://www.amd.com/en/blogs/2026/project-zenith-comes-to-amd-ryzen-ai-halo-ready-to-code.html" target="_blank">Disponibilidad y especificaciones de AMD</a>.

**RTX Spark.** ASUS anunció la disponibilidad en EE. UU. del GR1X para el 18 de noviembre. En una prueba de redacción con Qwen3.8 27B en LM Studio, Tom’s Guide midió **25,63 tokens/s** en el GR1X de 128 GB y **20,76 tokens/s** en un mini-PC Ryzen AI Max 395 de la misma capacidad. Los tiempos hasta el primer token fueron **0,32 s** y **1,10 s**. El medio citó 4499 USD de partida y 6999 USD para el GR1X probado. No especificó la cuantización. <a href="https://press.asus.com/news/press-releases/asus-announces-availability-proart-gr1x-rtx-spark-mini-pc" target="_blank">Anuncio de ASUS</a> · <a href="https://www.asus.com/displays-desktops/mini-pcs/proart-mini-pc-series/proart-gr1x-mini-pc/techspec/" target="_blank">Ficha del GR1X</a> · <a href="https://www.tomsguide.com/computing/mini-pcs/nvidia-rtx-spark-mini-pc-review-benchmarks-vs-amd" target="_blank">Prueba y precios de Tom’s Guide</a>.

**DGX Spark.** Al precio recomendado de 4699 USD publicado por NVIDIA para la Founders Edition, dos unidades de 128 GB suman **9398 USD** antes de impuestos y red. Pueden conectarse directamente por sus puertos ConnectX-7 con un cable QSFP compatible. El motor debe distribuir el modelo para aprovechar la memoria de varios nodos. En otra configuración, NVIDIA midió **31 tokens/s de salida** con el modelo completo GLM 5.3 NVFP4, concurrencia uno y decodificación especulativa MTP3 en ocho nodos con 1 TB agregado. <a href="https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713" target="_blank">Precio de la Founders Edition</a> · <a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/" target="_blank">Conectividad</a> · <a href="https://developer.nvidia.com/blog/running-frontier-class-ai-models-across-8-nvidia-dgx-spark-nodes" target="_blank">Mediciones en ocho nodos</a>.

## GPU para un servicio compartido

Las especificaciones SXM de NVIDIA son **80 GB y 3,35 TB/s** para H100, **141 GB y 4,8 TB/s** para H200 y **180 GB y hasta 8 TB/s** para B200. La H100 puede alojar el modelo de 43 GB en una GPU; la H200 deja más capacidad para las cachés de las peticiones activas. Para mantener un modelo de 243 GB enteramente en memoria de GPU hacen falta varios aceleradores en los tres casos. <a href="https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html" target="_blank">Arquitectura de referencia HGX</a>.

## Almacenamiento, RAM y varias GPU

Los dos modelos de 20 y 43 GB ya ocupan unos 63 GB de disco. Un SSD rápido ayuda al cargar por primera vez. Cuando el modelo reside en memoria, un SSD más rápido apenas afecta a la generación. Si descargas capas a la CPU, reserva RAM para esas capas, el motor y el sistema operativo.

Con varias GPU puedes repartir capas u operaciones. Cada dispositivo necesita sus propios búferes y la velocidad depende de la interconexión y del reparto. Si el modelo cabe entero en cada tarjeta, dos copias que atiendan colas independientes también son una opción.

## Cuándo alquilar resulta más barato

Supón que compras una estación por **3000 USD**, que la alternativa equivalente cuesta **1,50 USD por hora activa** y que tu electricidad cuesta **0,15 USD por hora activa**. Dividir 3000 entre la diferencia de 1,35 da unas **2222 horas de uso** para recuperar la inversión. A 40 horas mensuales son más de cuatro años. Son cifras de ejemplo: sustituye los importes por tus tarifas e incluye consumo en reposo, almacenamiento y mantenimiento. Para un servicio compartido, compara el coste por solicitud completada a la latencia que necesitan tus usuarios.

## Cómo comprobar tu equipo con Ollama

Instala <a href="https://ollama.com/download" target="_blank">Ollama para tu sistema</a>. En una tarjeta de 16 GB, prueba el mismo ejemplo que en la edición inglesa:

```sh
ollama run qwen3:14b --verbose "Explain how a DNS cache works in three sentences."
ollama ps
```

{{< image "best_hardware_for_self_hosting_local_llms/ollama_qwen3_14b_details.webp" "La ficha de Qwen3 14B en Ollama muestra el comando de ejecución, la cuantización Q4_K_M y una descarga de 9,3 GB." >}}

*Comprueba la etiqueta del modelo al calcular cuánta memoria de GPU necesitas. Los 9,3 GB corresponden a la descarga. Una sesión en marcha también necesita memoria para la caché de contexto y los búferes de trabajo. Captura de {{< link href="https://ollama.com/library/qwen3:14b" >}}Ollama{{< /link >}}, noviembre de 2026.*

Repite con el modelo ya cargado y compara por separado la evaluación de la instrucción y la generación. La columna `PROCESSOR` de `ollama ps` muestra si el modelo se ha cargado en la GPU o si se ha dividido entre CPU y GPU. Repite después con un documento de la longitud que usarás realmente. Para un equipo mayor, prueba `llama3.3:70b`. <a href="https://docs.ollama.com/faq" target="_blank">Comprobaciones de Ollama</a>.

Si utilizas Docker Desktop, puedes ejecutar Open WebUI junto a la instalación de Ollama del equipo:

```bash
docker run -d -p 127.0.0.1:3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

Abre `localhost:3000`. La [guía de alternativas a ChatGPT](/blog/best_open_source_alternatives_to_chatgpt/) describe otras interfaces.

{{< llm-context >}}Para acceder a tu LLM local desde otro equipo, inicia Ollama en el puerto 11434 con `ollama serve` si todavía no está activo. Sustituye YOUR_RANDOM_KEY por una clave privada, ejecuta `ssh -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https` y utiliza la URL HTTPS con esa clave de tipo bearer.{{< /llm-context >}}

## Acceder al LLM desde otro dispositivo

Con Ollama escuchando en `localhost:11434`, sustituye `YOUR_RANDOM_KEY` por una clave aleatoria privada. El túnel de Pinggy pedirá esa misma clave al cliente.

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io k:YOUR_RANDOM_KEY u:Host:localhost x:https\"}}}"
{{</ ssh_command >}}

En un cliente compatible con OpenAI, utiliza como URL base la dirección HTTPS que imprima Pinggy seguida de `/v1` e introduce la clave como clave de API. Mantén el túnel abierto durante la sesión. [Autenticación por clave con Pinggy](/docs/http_tunnels/key_auth/).

Para elegir un modelo, consulta las guías de [modelos autoalojados para programar](/es/blog/mejores-llms-de-codigo-abierto-para-programar/) y [herramientas de inferencia local](/es/blog/top-5-herramientas-y-modelos-llm-locales/).
