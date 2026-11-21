---
title: "Los mejores modelos de IA de pesos abiertos para generar imágenes en local en 2026"
slug: "mejores-generadores-de-imagenes-ia-de-codigo-abierto"
description: "Clasificación de modelos de imagen de pesos abiertos en noviembre de 2026: MiniMax H3-Image, FLUX 3 Image Klein y Fibo 2.0. Compara sus licencias, descargas y requisitos de GPU."
date: 2025-08-28T14:15:25+05:30
lastmod: 2026-11-20T18:30:00+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Generación de imágenes con IA"
tags: ["AI Image Generation", "self-hosted", "open source", "Machine Learning"]
og_image: "images/best_free_open_source_ai_image_generators/ai_image_arena_elo_nov2026.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJUZWNoQXJ0aWNsZSIsCiAgImhlYWRsaW5lIjogIkxvcyBtZWpvcmVzIG1vZGVsb3MgZGUgSUEgZGUgcGVzb3MgYWJpZXJ0b3MgcGFyYSBnZW5lcmFyIGltw6FnZW5lcyBlbiBsb2NhbCBlbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiQ2xhc2lmaWNhY2nDs24gZGUgbW9kZWxvcyBkZSBpbWFnZW4gZGUgcGVzb3MgYWJpZXJ0b3MgZW4gbm92aWVtYnJlIGRlIDIwMjY6IE1pbmlNYXggSDMtSW1hZ2UsIEZMVVggMyBJbWFnZSBLbGVpbiB5IEZpYm8gMi4wLiBDb21wYXJhIHN1cyBsaWNlbmNpYXMsIGRlc2NhcmdhcyB5IHJlcXVpc2l0b3MgZGUgR1BVLiIsCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNS0wOC0yOFQxNDoxNToyNSswNTozMCIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTExLTIwVDE4OjMwOjAwKzA1OjMwIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Jlc3RfZnJlZV9vcGVuX3NvdXJjZV9haV9pbWFnZV9nZW5lcmF0b3JzL2FpX2ltYWdlX2FyZW5hX2Vsb19ub3YyMDI2LndlYnAiLAogICJhcnRpY2xlU2VjdGlvbiI6IFsKICAgICJUZWNub2xvZ8OtYSIsCiAgICAiSGVycmFtaWVudGFzIGRlIElBIiwKICAgICJBdXRvYWxvamFtaWVudG8iCiAgXSwKICAia2V5d29yZHMiOiBbCiAgICAiZ2VuZXJhY2nDs24gZGUgaW3DoWdlbmVzIGNvbiBJQSIsCiAgICAibW9kZWxvcyBkZSBwZXNvcyBhYmllcnRvcyIsCiAgICAiYXV0b2Fsb2phbWllbnRvIiwKICAgICJNaW5pTWF4IEgzLUltYWdlIiwKICAgICJGTFVYIDMgSW1hZ2UgS2xlaW4iLAogICAgIkZpYm8gMi4wIgogIF0sCiAgImluTGFuZ3VhZ2UiOiAiZXMiCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "best_free_open_source_ai_image_generators/ai_image_arena_elo_nov2026_es.webp" "Puntuaciones Elo e intervalos del 95 %. H3-Image encabeza la tabla con 1066 puntos, seguido de Qwen-Image-2.1 y FLUX 3 Image Klein." >}}

MiniMax H3-Image encabeza la clasificación de modelos de pesos abiertos de Artificial Analysis. Antes de descargarlo, haz cuentas: el modelo de imagen y su codificador de texto suman unos **135 GB en disco**, incluso sin el expansor de instrucciones opcional. Para una GeForce de **8 GB de VRAM**, FLUX 3 Image Klein tiene una configuración INT8 documentada.

{{% tldr %}}

- Para editar imágenes en un PC, prueba FLUX 3 Image Klein. Si buscas pesos Apache 2.0 para una tarjeta de 16 GB, empieza por Z-Image Turbo.
- H3-Image genera unos 16 megapíxeles de forma nativa. Su licencia limita tanto el territorio como la prestación de servicios a terceros.
- Para carteles e interfaces, Ming-Image ofrece pesos MIT. Qwen-Image-2.1 admite fondos transparentes y varias referencias con licencia de investigación. Fibo 2.0 Dev permite definir la composición mediante instrucciones estructuradas.
- Si solo necesitas algunas imágenes y no tienes GPU, un <a href="https://higgsfield.ai/ai-image" target="_blank">generador de imágenes alojado como Higgsfield</a> evita instalar un entorno de inferencia.

{{% /tldr %}}

## Qué mide la clasificación

Artificial Analysis presenta imágenes generadas a partir de una instrucción de texto y recoge preferencias humanas en comparaciones a ciegas. Estas son las ocho primeras entradas de **AA-Image-T2I v2.1** en la consulta del 21 de noviembre de 2026, cuando H3-Image tenía 3344 muestras. Las puntuaciones cambian al llegar nuevos votos. FLUX.2 [dev] sirve de referencia fija en 1000 puntos. <a href="https://artificialanalysis.ai/image/leaderboard/text-to-image/open-weights" target="_blank">Clasificación de Artificial Analysis</a>.

| Puesto | Configuración evaluada | Elo | Licencia de los pesos o vía de acceso |
| ---: | --- | ---: | --- |
| 1 | MiniMax H3-Image | 1066 | MiniMax-H3-Image Community |
| 2 | Qwen-Image-2.1 | 1048 | Qwen Research |
| 3 | FLUX 3 Image Klein | 1041 | FLUX Kommunity |
| 4 | Fibo 2.0 | 1037 | CC BY-NC 4.0 para los pesos Dev |
| 5 | Ideogram 4.0 (Quality) | 1027 | Configuración de la API |
| 6 | Ideogram 4.0 | 1004 | Ideogram 4 Non-Commercial |
| 7 | Ming-Image-0.1-Design | 1001 | MIT |
| 8 | FLUX.2 [dev] | 1000 | FLUX no comercial |

Los intervalos del 95 % de Qwen, FLUX 3 Klein y Fibo 2.0 se solapan. Si tu trabajo consiste en imprimir una etiqueta, ensaya el texto y el espaciado reales antes de elegir por unos pocos puntos. La clasificación evalúa la generación a partir de texto. No mide el consumo de VRAM ni la fidelidad de una edición.

## Qué modelos puedes ejecutar en local

### MiniMax H3-Image

{{< image "best_free_open_source_ai_image_generators/minimax_h3_moka_pot.webp" "Un dibujo de líneas blancas sobre una cuadrícula azul muestra una cafetera italiana en corte y sus piezas en una vista de despiece." >}}

*H3-Image creó esta lámina a partir de dos imágenes de referencia que mostraban la cafetera y sus piezas. Fuente: {{< link href="https://github.com/MiniMax-AI/MiniMax-H3-Image/blob/main/showcase/instruction-following.md#moka-pot-blueprint" >}}MiniMax{{< /link >}}.*

Genera imágenes de 4096 × 4096 en seis pasos y admite hasta 16 referencias para edición. La descarga inicial comprende 68,65 GB para el modelo de imagen y 66,7 GB para el codificador de texto H3. La VRAM necesaria depende del motor, la resolución y los componentes que descargues a RAM. MiniMax enlaza plantillas locales de ComfyUI y un expansor opcional para instrucciones breves. <a href="https://huggingface.co/MiniMaxAI/MiniMax-H3-Image" target="_blank">Ficha de MiniMax</a>.

La licencia específica **del modelo de imagen** excluye Estados Unidos, la Unión Europea, el Reino Unido y Corea del Sur. También restringe el uso de los resultados en esos territorios. Dentro del territorio autorizado, prestar un servicio alojado a terceros o superar un millón de dólares de ingresos anualizados propios o de empresas afiliadas exige autorización previa por escrito. <a href="https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE" target="_blank">Licencia MiniMax-H3-Image</a>.

### FLUX 3 Image Klein

{{< image "best_free_open_source_ai_image_generators/flux3_klein_text_to_image.webp" "Ocho muestras de FLUX 3 Image Klein incluyen un búho en una vidriera, un astronauta junto a una flor, un cartel ferroviario y un colibrí bordado." >}}

*En estas imágenes generadas a partir de texto, el mismo modelo representa al búho como una vidriera y al colibrí como un bordado. Fuente: {{< link href="https://github.com/black-forest-labs/flux-3-image-klein#text-to-image-examples" >}}Black Forest Labs{{< /link >}}.*

El generador tiene 5600 millones de parámetros, acepta hasta diez imágenes de referencia y permite delimitar objetos o ediciones con rectángulos. Usa el modelo base para ajustar sus pesos y el destilado para iterar. BFL cita unos cuatro segundos por imagen de un megapíxel en una RTX 5090 con INT8 en ComfyUI. La compatibilidad con 8 GB corresponde al flujo optimizado. Los pesos del generador por sí solos no incluyen todos los componentes de la inferencia. <a href="https://bfl.ai/blog/flux-3-image-klein" target="_blank">Mediciones y configuraciones de BFL</a>.

La licencia Kommunity permite generar resultados con fines comerciales a quienes cumplan sus condiciones y tengan ingresos brutos anualizados inferiores a cinco millones de dólares, incluidas sus empresas afiliadas. Exige filtrado o revisión de los resultados y las indicaciones sobre generación con IA que establezca la ley aplicable. <a href="https://huggingface.co/black-forest-labs/flux-3-image-klein/blob/main/LICENSE.md" target="_blank">Licencia FLUX Kommunity</a>.

### Qwen-Image-2.1 y Qwen-Image-2512

{{< image "best_free_open_source_ai_image_generators/qwen_image_2_1_text_rendering.webp" "Muestra de Qwen-Image-2.1: una infografía arquitectónica del castillo de Olavinlinna con título y etiquetas en chino, un subtítulo en inglés, una planta, alzados y detalles ampliados" >}}

Qwen-Image-2.1 reúne generación y edición en un modelo con un componente visual de 7000 millones de parámetros. Puede generar imágenes RGBA y combinar hasta diez referencias. La variante Turbo realiza ocho pasos de eliminación de ruido. La puntuación de la tabla corresponde al modelo original. La licencia Qwen Research restringe el uso a investigación o evaluación; para uso comercial hay que solicitar otra licencia. <a href="https://huggingface.co/Qwen/Qwen-Image-2.1" target="_blank">Modelo y ejemplos</a> · <a href="https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo" target="_blank">Qwen-Image-2.1-Turbo</a>.

{{< image "best_free_open_source_ai_image_generators/qwen.webp" "Comparativa lado a lado de Qwen-Image y Qwen-Image-2512 con una cascada en la selva, de la comparación Finer Natural Detail de Qwen" >}}

La alternativa de la misma familia para un producto comercial es **Qwen-Image-2512**, un modelo de unos 20.000 millones de parámetros con licencia Apache 2.0. La clasificación consultada no incluye una entrada con el nombre exacto de este descargable. No le atribuyas automáticamente la puntuación de un servicio alojado con un nombre parecido. <a href="https://huggingface.co/Qwen/Qwen-Image-2512" target="_blank">Pesos de Qwen-Image-2512</a>.

### Ideogram 4.0

{{< image "best_free_open_source_ai_image_generators/ideogram4.webp" "Collage de generaciones de muestra de Ideogram 4.0, desde retratos fotorrealistas hasta un logo tipográfico de comida y un cartel de circo" >}}

Ideogram 4.0 permite especificar texto, colores y posición mediante instrucciones JSON. El repositorio describe un generador de 9300 millones de parámetros y versiones nf4 y fp8. La fila «Quality» se evaluó mediante la API. Para autoalojar, consulta los pesos 4.0 y sus requisitos. La versión 4.6 está en la oferta de la API. <a href="https://github.com/ideogram-oss/ideogram4" target="_blank">Repositorio de Ideogram 4</a> · <a href="https://developer.ideogram.ai/ideogram-api/models" target="_blank">Modelos de la API de Ideogram</a>.

La licencia de los pesos es no comercial e incluye restricciones para materiales promocionales. Con el acuerdo comercial adecuado, puedes utilizar los diseños en un <a href="https://www.flipsnack.com/" target="_blank">catálogo digital</a>. Para trabajar sin instalar el modelo existe la <a href="https://ideogram.ai/" target="_blank">plataforma de Ideogram</a>.

### FLUX.2

{{< image "best_free_open_source_ai_image_generators/flux2.webp" "Flujo de edición de muestra con FLUX.2" >}}

FLUX.2 [dev] tiene 32.000 millones de parámetros, admite varias referencias y sirve de ancla de la clasificación. La licencia distingue entre el uso de resultados permitidos y la explotación comercial del modelo. Para una GPU de consumo, [klein] 4B ofrece pesos Apache 2.0 y BFL indica unos 13 GB de VRAM. La variante 9B tiene una licencia no comercial distinta. <a href="https://huggingface.co/black-forest-labs/FLUX.2-dev/blob/main/LICENSE.md" target="_blank">Licencia de FLUX.2 dev</a> · <a href="https://huggingface.co/black-forest-labs/FLUX.2-klein-4B" target="_blank">Ficha de klein 4B</a>.

### Ming-Image-0.1-Design

{{< image "best_free_open_source_ai_image_generators/ming_image_design.webp" "Muestras de Ming-Image-0.1-Design: páginas web de e-commerce y marketing, una infografía sobre la red trófica antártica, un diagrama de maquetación responsive con tarjetas y un mockup de Instagram" >}}

Ming está orientado a interfaces, carteles e infografías con texto. Sus pesos MIT permiten uso comercial sujeto a esa licencia. InclusionAI documenta pruebas con una GPU CUDA de **80 GiB**. Su configuración de referencia usa BF16, imágenes de 2048 × 2048 y 12 pasos. La ficha no establece el mínimo para una tarjeta de consumo. <a href="https://huggingface.co/inclusionAI/Ming-Image-0.1-Design" target="_blank">Ficha y ejemplos de Ming</a>.

### HunyuanImage 3.0

{{< image "best_free_open_source_ai_image_generators/hunyuan_3_banner.webp" "Rótulo HunyuanImage 3.0 renderizado en cromo, madera, pelo, cristal, lava y tela vaquera junto a una mascota pingüino" >}}

Tencent publica un modelo de mezcla de expertos con 80.000 millones de parámetros totales y 13.000 millones activos por token. Recomienda al menos tres GPU de 80 GB para el modelo base y ocho para Instruct en sus configuraciones de referencia. La licencia excluye la UE, el Reino Unido y Corea del Sur e incluye una condición de escala para productos o servicios que superen los 100 millones de usuarios activos mensuales en el periodo definido. <a href="https://github.com/Tencent-Hunyuan/HunyuanImage-3.0" target="_blank">Repositorio de Tencent</a> · <a href="https://huggingface.co/tencent/HunyuanImage-3.0-Instruct/blob/main/LICENSE" target="_blank">Licencia de Instruct</a>.

### Cosmos3-Super-Text2Image

{{< image "best_free_open_source_ai_image_generators/cosmos3_sample.webp" "Imagen de muestra de Cosmos3-Super-Text2Image con unas manos dando forma a un jarrón de barro en un torno de alfarero" >}}

NVIDIA publica estos pesos bajo OpenMDW 1.1. En la configuración «agentic», el sistema genera candidatos y utiliza un modelo de visión y lenguaje para evaluarlos y refinar la instrucción. La receta de ejemplo puede llamar a servicios externos. Si necesitas un entorno aislado, comprueba el crítico y el modelo que reescribe el texto además del generador. NVIDIA documenta una configuración de vLLM-Omni con ocho H100. <a href="https://huggingface.co/nvidia/Cosmos3-Super-Text2Image" target="_blank">Receta y requisitos de Cosmos3</a>.

### Krea 2

{{< image "best_free_open_source_ai_image_generators/Krea.webp" "Generaciones de muestra de Krea 2" >}}

Krea ofrece Raw para ajuste fino y Turbo para generar con ocho pasos. Para uso comercial, la licencia fija un umbral de ingresos totales inferior a un millón de dólares en los doce meses anteriores, contando las entidades afiliadas. También establece condiciones de filtrado, atribución y denominación al distribuir modelos. <a href="https://www.krea.ai/blog/krea-2-technical-report" target="_blank">Informe técnico de Krea</a> · <a href="https://www.krea.ai/krea-2-licensing" target="_blank">Licencia de Krea 2</a>.

### Fibo 2.0 Dev y FIBO

{{< image "best_free_open_source_ai_image_generators/fibo.webp" "Imágenes del repositorio FIBO de Bria: un ciervo, un frasco de perfume, un hot rod amarillo y un café con leche" >}}

La muestra corresponde al FIBO original de Bria. Fibo 2.0 Dev incorpora generación, edición con máscara y edición con varias referencias en el mismo modelo. Un esquema de escena te permite mantener el encuadre y la iluminación de una fotografía de producto mientras cambias un detalle. Bria identifica la licencia de los pesos Dev como CC BY-NC 4.0. La explotación comercial requiere un acuerdo aparte. <a href="https://huggingface.co/briaai/Fibo-2.0-dev" target="_blank">Ficha de Fibo 2.0 Dev</a>.

### Otros modelos según el uso

{{< image "best_free_open_source_ai_image_generators/stable_diffusion.webp" "Cuadrícula de imágenes de muestra de Stable Diffusion 3.5, con frascos de pociones y un garaje de neón Drive On" >}}

**Stable Diffusion 3.5 Large** tiene 8100 millones de parámetros. Conserva su interés si ya dependes de adaptadores compatibles. Para uso comercial consulta el umbral de ingresos y las condiciones de la licencia de Stability AI. <a href="https://huggingface.co/stabilityai/stable-diffusion-3.5-large" target="_blank">Stable Diffusion 3.5 Large</a>.

{{< image "best_free_open_source_ai_image_generators/sana.webp" "Generaciones de muestra de NVIDIA Sana 1.6B sobre gráficos de latencia que comparan Sana con Flux-Dev, SD3 y PixArt-Sigma a 1024px y 4096px" >}}

**Sana.** Sus autores informan de menos de un segundo para una imagen de 1024 × 1024 con Sana-0.6B en una GPU de portátil de 16 GB. La ficha distingue Apache 2.0 para el modelo y las condiciones de Gemma para el codificador de texto. Sana-Sprint es otra variante destilada para generar en pocos pasos. <a href="https://huggingface.co/Efficient-Large-Model/Sana_600M_1024px" target="_blank">Ficha de Sana 600M</a>.

{{< image "best_free_open_source_ai_image_generators/sensenova.webp" "Cartel publicitario vintage del refresco RETRO-COLA generado por SenseNova-U1.5 Preview" >}}

**SenseNova-U1.5-8B-MoT** combina comprensión, generación y edición de imágenes. Admite generación nativa en 4K y varias referencias. El modelo final tiene licencia Apache 2.0. <a href="https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT" target="_blank">Pesos de SenseNova</a>.

{{< image "best_free_open_source_ai_image_generators/mage_flow.webp" "Imagen de portada de Mage-Flow: un mago con túnica de MSRA bajo un rótulo Mage-Flow con joyas incrustadas" >}}

**Mage-Flow** es una familia de investigación de Microsoft con modelos distintos para generar y editar. Microsoft midió 0,59 s por imagen de 1024 × 1024 con la variante Turbo de generación en una A100. La ficha oficial de Turbo indica una licencia MIT. No pudimos verificar que los archivos de pesos de Turbo se puedan descargar sin iniciar sesión. <a href="https://github.com/microsoft/Mage/tree/main/mage_flow" target="_blank">Resultados de Microsoft</a> · <a href="https://huggingface.co/microsoft/Mage-Flow-Turbo" target="_blank">Ficha de Mage-Flow-Turbo</a>.

{{< image "best_free_open_source_ai_image_generators/z_image_turbo.webp" "Cuadrícula de imágenes de muestra de Z-Image Turbo con retratos, deportes, paisajes y fuegos artificiales" >}}

- **Z-Image Turbo** usa 6000 millones de parámetros. El equipo documenta generación en ocho evaluaciones y ejecución en GPU de 16 GB con licencia Apache 2.0. <a href="https://huggingface.co/Tongyi-MAI/Z-Image-Turbo" target="_blank">Ficha de Z-Image Turbo</a>.
- **MOSS-Image** ofrece pesos Apache 2.0 y dos versiones para trabajar con texto y composición. Base está pensada para ajustar el modelo; la ficha muestra cómo SFT organiza mejor un ejemplo de pizarra. <a href="https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base" target="_blank">Comparación de OpenMOSS</a>.
- **HiDream-O1-Image** se distribuye bajo MIT. **ERNIE-Image** de Baidu es una opción de 8000 millones de parámetros bajo Apache 2.0 con una variante Turbo. <a href="https://huggingface.co/HiDream-ai/HiDream-O1-Image" target="_blank">HiDream</a> · <a href="https://huggingface.co/baidu/ERNIE-Image" target="_blank">ERNIE-Image</a>.

## Interfaces para ejecutar los modelos

{{< image "best_free_open_source_ai_image_generators/swarmui.webp" "Pestaña Generate de SwarmUI con la imagen de un gato, en SwarmUI 0.6.4" >}}

**SwarmUI** admite varios motores y permite comparar una cuadrícula de generaciones cambiando el modelo o los parámetros. El puerto predeterminado es el 7801. <a href="https://github.com/mcmonkeyprojects/SwarmUI" target="_blank">SwarmUI</a>.

{{< image "best_free_open_source_ai_image_generators/comfyui.webp" "Captura de pantalla de ComfyUI" >}}

**ComfyUI** muestra el flujo de generación como un grafo de nodos. Para H3-Image empieza con la plantilla local enlazada en su ficha. Los nodos de socios llaman a una API alojada aunque ejecutes ComfyUI en tu equipo. El servidor local usa habitualmente el puerto 8188. <a href="https://github.com/Comfy-Org/ComfyUI" target="_blank">ComfyUI</a>.

**Forge Neo** mantiene una interfaz de una sola página. Su lista de compatibilidad distingue FLUX.2 [klein] 4B y 9B de FLUX.2 [dev]. Comprueba el modelo y el formato exactos antes de descargar los pesos. Su puerto habitual es el 7860. <a href="https://github.com/Haoming02/sd-webui-forge-classic" target="_blank">Repositorio de Forge Neo</a>.

## Compartir la interfaz

Si ComfyUI está en `localhost:8188`, puedes compartirlo con un túnel de [Pinggy](/). Desde otra terminal, ejecuta `ssh -p 443 -R0:localhost:8188 free.pinggy.io`. Para SwarmUI o Forge Neo cambia 8188 por el puerto de tu instalación. El túnel gratuito dura 60 minutos y proporciona una URL pública. La [guía para compartir ComfyUI](/blog/how_to_easily_share_comfyui_online/) explica cómo proteger el acceso; la [guía para Google Colab](/blog/run_and_share_comfyui_on_google_colab/) cubre el uso desde un cuaderno.

Para una tarjeta de 16 GB, la primera comparación razonable es entre Z-Image Turbo y FLUX 3 Klein INT8 si su licencia encaja. Si trabajas con carteles, compara también Ming con un diseño propio. El coste de H3-Image se entiende mejor cuando necesitas ese detalle a 16 megapíxeles y tienes derecho a desplegarlo.
