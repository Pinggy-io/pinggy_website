---
title: "Cómo conseguir APIs de modelos de IA gratis con tokens 'ilimitados'"
slug: "apis-ia-gratis-tokens-ilimitados-openrouter"
description: "Cómo conseguir APIs de modelos de IA gratis en OpenRouter a finales de 2026: los límites reales (20 peticiones por minuto, 50 o 1,000 al día), el catálogo gratuito actual (Inkling, Nemotron 3 Ultra, Nemotron 3.5 Super VL, Gemma 4), qué registran los endpoints gratuitos y código que funciona."
date: 2026-07-10T11:30:00+05:30
lastmod: 2026-10-29T11:30:00+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "IA"
tags: ["OpenRouter", "AI Models", "API", "LLM router"]
categories: ["AI", "Development", "APIs"]
og_image: "images/free_ai_model_apis_unlimited_tokens_openrouter/free_ai_model_apis_unlimited_tokens_openrouter_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gY29uc2VndWlyIEFQSXMgZGUgbW9kZWxvcyBkZSBJQSBncmF0aXMgY29uIHRva2VucyBpbGltaXRhZG9zIiwKICAiZGVzY3JpcHRpb24iOiAiR3XDrWEgcGFzbyBhIHBhc28gcGFyYSByZWdpc3RyYXJ0ZSBlbiBPcGVuUm91dGVyLCBnZW5lcmFyIHVuYSBBUEkga2V5IHkgbGxhbWFyIGEgbW9kZWxvcyBMTE0gZ3JhdHVpdG9zIHNpbiBjb3N0ZSBwb3IgdG9rZW4sIGRlbnRybyBkZSBsb3MgbMOtbWl0ZXMgZGUgcGV0aWNpb25lcyBkZWwgbml2ZWwgZ3JhdHVpdG8uIiwKICAic3RlcCI6IFsKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkNyZWEgdW5hIGN1ZW50YSBkZSBPcGVuUm91dGVyIHkgdW5hIEFQSSBrZXkiLAogICAgICAidGV4dCI6ICJSZWfDrXN0cmF0ZSBlbiBvcGVucm91dGVyLmFpIGNvbiBlbWFpbCBvIEdpdEh1YiB5IGdlbmVyYSB1bmEgQVBJIGtleSBkZXNkZSBsYSBww6FnaW5hIEtleXMgZGUgbGEgY29uZmlndXJhY2nDs24gZGUgdHUgY3VlbnRhLiBObyBoYWNlIGZhbHRhIHRhcmpldGEgZGUgY3LDqWRpdG8gcGFyYSBlbXBlemFyIGEgdXNhciBsb3MgbW9kZWxvcyBncmF0dWl0b3MuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkVsaWdlIHVuIG1vZGVsbyBncmF0dWl0byIsCiAgICAgICJ0ZXh0IjogIkV4cGxvcmEgbGEgY29sZWNjacOzbiBGcmVlIE1vZGVscyBkZSBPcGVuUm91dGVyIHkgZWxpZ2UgdW4gbW9kZWxvIGN1eW8gSUQgdGVybWluZSBlbiA6ZnJlZSwgY29tbyBUaGlua2luZyBNYWNoaW5lcyBJbmtsaW5nLCBOVklESUEgTmVtb3Ryb24gMyBVbHRyYSwgTmVtb3Ryb24gMy41IFN1cGVyIFZMIG8gR29vZ2xlIEdlbW1hIDQuIExlZSBlbCBhdmlzbyBzb2JyZSBkYXRvcyBkZSBsYSBww6FnaW5hIGRlbCBtb2RlbG8gYW50ZXMgZGUgZW52aWFyIG5hZGEgY29uZmlkZW5jaWFsLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJMbGFtYSBhbCBlbmRwb2ludCBjb21wYXRpYmxlIGNvbiBPcGVuQUkiLAogICAgICAidGV4dCI6ICJFbnbDrWEgdW5hIHBldGljacOzbiBhIGh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjEvY2hhdC9jb21wbGV0aW9ucyBjb24gbGEgQVBJIGtleSBlbiBsYSBjYWJlY2VyYSBBdXRob3JpemF0aW9uIHkgZWwgSUQgZGVsIG1vZGVsbyBlbGVnaWRvIGVuIGVsIGN1ZXJwbyBkZSBsYSBwZXRpY2nDs24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkHDsWFkZSBtb2RlbG9zIGRlIHJlc3BhbGRvIiwKICAgICAgInRleHQiOiAiUG9uIGRvcyBvIHRyZXMgbW9kZWxvcyBncmF0dWl0b3MgZW4gZWwgYXJyYXkgbW9kZWxzIHBhcmEgcXVlIE9wZW5Sb3V0ZXIgcHJ1ZWJlIGF1dG9tw6F0aWNhbWVudGUgZWwgc2lndWllbnRlIHNpIGVsIHByaW1lcm8gbGxlZ2EgYSBzdSBsw61taXRlIGRlIHBldGljaW9uZXMgbyBubyBlc3TDoSBkaXNwb25pYmxlLiBIYXogcXVlIHRvZGFzIGxhcyBlbnRyYWRhcyBzZWFuIG1vZGVsb3MgOmZyZWUgcGFyYSBxdWUgbGEgcGV0aWNpw7NuIHNpZ2Egc2llbmRvIGdyYXR1aXRhLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBw7FhZGUgY3LDqWRpdG9zIHBhcmEgdGVuZXIgbMOtbWl0ZXMgbcOhcyBhbHRvcyIsCiAgICAgICJ0ZXh0IjogIkNvbXByYSAxMCBVU0QgZGUgY3LDqWRpdG9zIGRlIE9wZW5Sb3V0ZXIgZW4gdG90YWwgcGFyYSBzdWJpciBlbCBsw61taXRlIGRpYXJpbyBkZSBwZXRpY2lvbmVzIGEgbW9kZWxvcyBncmF0dWl0b3MgZGUgNTAgYSAxMDAwIHBldGljaW9uZXMgYWwgZMOtYS4gRWwgbml2ZWwgZGVwZW5kZSBkZWwgdG90YWwgZGUgY3LDqWRpdG9zIGNvbXByYWRvcyBlbiBsYSB2aWRhIGRlIGxhIGN1ZW50YSwgbm8gZGVsIHNhbGRvIGFjdHVhbC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29tcHJ1ZWJhIGN1w6FudGFzIHBldGljaW9uZXMgZ3JhdHVpdGFzIHRlIHF1ZWRhbiIsCiAgICAgICJ0ZXh0IjogIkVudsOtYSB1bmEgcGV0aWNpw7NuIEdFVCBhIGh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjEva2V5LiBFbCBvYmpldG8gZnJlZV9tb2RlbF9kYWlseV9yZXF1ZXN0cyBkZSBsYSByZXNwdWVzdGEgbXVlc3RyYSBsYXMgcGV0aWNpb25lcyBhIG1vZGVsb3MgZ3JhdHVpdG9zIHVzYWRhcyAodXNlZCksIGVsIGzDrW1pdGUgKGxpbWl0KSB5IGxhcyByZXN0YW50ZXMgKHJlbWFpbmluZykgZGVsIGTDrWEgVVRDIGVuIGN1cnNvLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/free_ai_model_apis_unlimited_tokens_openrouter_banner.webp" "APIs de modelos de IA gratis en OpenRouter: $0 por token, 20 peticiones por minuto, 50 peticiones al día o 1,000 tras comprar $10 en créditos" >}}

La mayoría de los desarrolladores se topan con el mismo muro en cuanto empiezan a construir con modelos de lenguaje grandes: el prototipo funciona y, a partir de ahí, la factura de la API empieza a apuntar cada experimento. Los modelos de frontera siguen cobrando por token. Claude Opus 5.5 tiene un precio de lista de <a href="https://platform.claude.com/docs/en/about-claude/pricing" target="_blank">$4 por millón de tokens de entrada y $20 por millón de tokens de salida</a>, y eso sube rápido en cuanto lo llamas dentro de un bucle.

Busca "API de IA gratis con tokens ilimitados" y encontrarás un montón de artículos que prometen una forma de esquivarlo. La versión honesta es menos emocionante pero más útil: {{< link href="https://openrouter.ai" >}}OpenRouter{{< /link >}} te da acceso sin tarjeta de crédito a un conjunto rotativo de modelos a **$0 por token**, pero "ilimitado" no es la palabra correcta. Tienes 20 peticiones por minuto y 50 o 1,000 peticiones al día, según hayas comprado o no $10 en créditos. No hay tope de tokens, pero sí un tope de peticiones muy real.

La lista gratuita además cambia rápido. En julio de 2026, Owl Alpha, Tencent Hy3, Qwen3 Coder y gpt-oss-120b eran gratis en OpenRouter; hoy no lo es ninguno, y encabezan la lista Inkling, el modelo de 975 mil millones de parámetros de Thinking Machines, y la familia Nemotron de NVIDIA. Todos los límites, precios e IDs de modelo de este artículo se comprobaron contra la API en vivo y las páginas de modelos de OpenRouter el 27 de octubre de 2026.

Este es el catálogo gratuito actual de un vistazo, antes de entrar en cómo funciona:

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Modelo</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tamaño</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Contexto (gratis)</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Ideal para</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://openrouter.ai/thinkingmachines/inkling:free" target="_blank">Thinking Machines Inkling</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MoE de 975B / 41B activos</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1M tokens</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Programación y entornos agénticos, entrada de texto, imagen y audio</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free" target="_blank">NVIDIA Nemotron 3 Ultra</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MoE de 550B / 55B activos</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1M tokens</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Razonamiento general, orquestación de agentes</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://openrouter.ai/nvidia/nemotron-3.5-super-vl:free" target="_blank">NVIDIA Nemotron 3.5 Super VL</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MoE de 120B / 12B activos</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">1M tokens</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Entrada de documentos, capturas de pantalla y vídeo</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://openrouter.ai/google/gemma-4-31b-it:free" target="_blank">Google Gemma 4</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">31B denso / 26B-A4B MoE</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">262K tokens</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Entrada multimodal, function calling, más de 140 idiomas</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://openrouter.ai/poolside/laguna-s-2.1:free" target="_blank">Poolside Laguna S 2.1</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">MoE de 118B / 8B activos</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">262K tokens</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Agentes de programación, se retira el 31 de octubre de 2026</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;"><strong><a href="https://openrouter.ai/openrouter/free" target="_blank">openrouter/free</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Router sobre los modelos gratuitos</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">200K tokens</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.4em;text-align:left;">Código que tiene que seguir funcionando aunque roten los modelos</td>
</tr>
</tbody>
</table>

Esa tabla recoge los seis que merece la pena conocer uno por uno. Si cuentas los modelos de embeddings, reranking, voz y de "decisión", OpenRouter lista ahora mismo 28 IDs de modelo que terminan en `:free`, 16 de ellos modelos de chat, y del resto hablamos más abajo.

{{% tldr %}}

**Qué significa "gratis" en OpenRouter**: los modelos cuyo ID termina en `:free` cuestan <a href="https://openrouter.ai/pricing" target="_blank">$0 por token de entrada y de salida</a>. El límite está en las peticiones, no en los tokens: **20 peticiones/minuto** siempre, más **50 peticiones/día** hasta que hayas comprado $10 en créditos en total, y **1,000 peticiones/día** a partir de ahí. El nivel depende de lo que has comprado en toda la vida de la cuenta, así que gastar el saldo no te devuelve a 50.

**Primeros pasos**: crea una cuenta en <a href="https://openrouter.ai/keys" target="_blank">openrouter.ai/keys</a> (email o GitHub, sin tarjeta), genera una API key y llama al endpoint compatible con OpenAI en `https://openrouter.ai/api/v1/chat/completions` con cualquier ID de modelo que termine en `:free`. Un `GET` a `https://openrouter.ai/api/v1/key` te dice cuántas peticiones gratuitas te quedan hoy.

**Modelos gratuitos que conviene conocer ahora mismo** (octubre de 2026, compruébalo antes de depender de uno): Inkling, Nemotron 3 Ultra, Nemotron 3.5 Super VL, Gemma 4 y Laguna S 2.1 (hasta el 31 de octubre), además del router `openrouter/free`. Owl Alpha, Tencent Hy3, Qwen3 Coder y gpt-oss eran gratis en julio y ya no lo son.

**La trampa más allá de los límites**: los endpoints gratuitos suelen registrar lo que envías. NVIDIA, Thinking Machines y Poolside indican en sus páginas de modelo en OpenRouter que el tráfico del nivel gratuito se registra o puede usarse para mejorar sus modelos, así que no les mandes datos confidenciales.

**El consejo de fiabilidad**: los modelos gratuitos salen de la lista con poco aviso. Pon 2-3 modelos gratuitos de respaldo en el array `models` de OpenRouter en lugar de dejar fijo en el código un único ID de modelo.

{{% /tldr %}}

Estos modelos gratuitos sirven para algo más que llamadas directas a la API. Agentes de programación como <a href="https://opencode.ai" target="_blank">OpenCode</a> traen OpenRouter como proveedor integrado, y ya explicamos de principio a fin cómo ejecutar {{< link href="/blog/self_host_hermes_agent_free_openrouter/" newtab=false >}}Hermes Agent con los modelos gratuitos de OpenRouter{{< /link >}}. Esta guía se centra en el nivel gratuito en sí: cuánto cuesta, qué limita y qué modelos incluye ahora mismo.

## El nivel gratuito: límites de peticiones, no de tokens

Esta es la parte que la mayoría de artículos sobre "tokens ilimitados" cuentan mal. Los modelos gratuitos de OpenRouter cobran **$0.00 por token de entrada y $0.00 por token de salida**, así que de verdad no hay facturación por tokens. Lo que sí tiene toda cuenta es un tope de peticiones, documentado en la <a href="https://openrouter.ai/docs/api/reference/limits" target="_blank">página de límites</a> de OpenRouter:

- **20 peticiones por minuto**, siempre, sea cual sea el estado de la cuenta
- **50 peticiones al día** si has comprado menos de $10 en créditos en total
- **1,000 peticiones al día** en cuanto tus compras de créditos llegan a **$10**

La documentación dice que el nivel diario "se elige según el total de créditos comprados", así que cuenta lo que has comprado durante toda la vida de la cuenta, no tu saldo actual. Una vez que pasas de $10, el techo más alto se mantiene aunque después tu saldo baje a cero. En la práctica, el nivel de 1,000 empieza a partir de 9 créditos, uno por debajo del umbral, algo que según OpenRouter sirve para absorber redondeos y comisiones de recarga.

Así que una conversación de 100,000 tokens te cuesta una petición, lo mismo que un prompt de dos palabras, y un bucle de agente que llama al modelo docenas de veces por tarea choca con el techo diario mucho antes de que importe ningún recuento de tokens. Hay dos cosas más que pueden frenarte: la protección DDoS de Cloudflare bloquea las peticiones que "superan drásticamente un uso razonable", y un saldo de créditos negativo también puede bloquear los modelos gratuitos, con errores 402. Eso pasa sobre todo si usas modelos de pago junto a los gratuitos y dejas que el saldo se agote.

### Cómo comprobar cuántas peticiones gratuitas te quedan

OpenRouter muestra el contador diario en su endpoint de la key:

```bash
curl https://openrouter.ai/api/v1/key \
  -H "Authorization: Bearer $OPENROUTER_API_KEY"
```

La respuesta incluye un objeto `free_model_daily_requests` con los contadores `used`, `limit` y `remaining` del día UTC en curso. Un agente puede consultarlo antes de una ejecución larga en lugar de descubrir el techo a base de errores 429 "Rate limit exceeded" a mitad de camino. Eso sí, no informa del límite por minuto. Cuando llegas a un límite, la respuesta 429 trae cabeceras `X-RateLimit-*` que describen cuál has alcanzado.

### Configuración inicial

1. Ve a <a href="https://openrouter.ai/keys" target="_blank">openrouter.ai/keys</a> y regístrate con email o GitHub. No necesitas tarjeta de crédito para los modelos gratuitos.
2. Genera una API key en esa página. Si quieres, puedes ponerle a cada key un límite de créditos.
3. (Opcional, recomendado) Compra créditos. El pago por uso tiene una **comisión de plataforma del 5.5%** sobre las compras de créditos (8% en el plan Business), y **$10 en compras en total** es lo que sube tu techo de modelos gratuitos a 1,000 peticiones al día. Es un umbral que se cruza una vez, no una suscripción.
4. Llama a la API. Los modelos gratuitos llevan el sufijo `:free` en su ID, y la <a href="https://openrouter.ai/collections/free-models" target="_blank">colección Free Models</a> de OpenRouter es la forma más rápida de ver qué hay disponible hoy.

Si solo piensas usar modelos gratuitos, puedes quedarte en el paso 2 y gastar $0. Los $10 sirven unicamente para subir el techo diario, y vale la pena pagarlos en cuanto un proyecto se convierte en algo que usas todos los días, porque 50 peticiones se van volando cuando estás iterando sobre prompts. Antes de comprar, ten en cuenta que el <a href="https://openrouter.ai/docs/faq" target="_blank">FAQ</a> de OpenRouter dice que se reserva el derecho a hacer caducar los créditos sin usar un año después de la compra.

## Cómo llamar a un modelo gratuito

Como OpenRouter replica la forma de la API de OpenAI, puedes usar `curl` directamente o el SDK estándar `openai` de Python/JS apuntando a otra URL base. Esta es la versión con HTTP a secas:

```bash
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -d '{
    "model": "nvidia/nemotron-3-ultra-550b-a55b:free",
    "messages": [
      {"role": "user", "content": "Explain the difference between MoE and dense transformer architectures in two sentences."}
    ]
  }'
```

Y la misma llamada con el SDK oficial de OpenAI para Python, simplemente apuntado a OpenRouter:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="sk-or-v1-your-key-here",
)

response = client.chat.completions.create(
    model="nvidia/nemotron-3-ultra-550b-a55b:free",
    messages=[
        {"role": "user", "content": "Explain the difference between MoE and dense transformer architectures in two sentences."}
    ],
)

print(response.choices[0].message.content)
```

Ni SDK específico de OpenRouter ni librería cliente propia. Si tu código ya habla con la API de OpenAI, cambiar `base_url` y la cadena `model` es toda la migración.

### Cómo gestionar la rotación y los límites con modelos de respaldo

El consejo más importante para usar el nivel gratuito en producción: **no fijes un único modelo gratuito en el código**. Las variantes gratuitas se retiran o cambian de precio sin mucho aviso. Entre julio y finales de octubre de 2026 han desaparecido `qwen/qwen3-coder:free`, `openai/gpt-oss-120b:free`, `tencent/hy3:free` y `nvidia/nemotron-3-super-120b-a12b:free`, y cualquier código atado a ellos ahora falla. El <a href="https://openrouter.ai/docs/guides/routing/model-fallbacks" target="_blank">array `models`</a> de OpenRouter te deja listar varios candidatos por orden de prioridad en una sola petición:

```json
{
  "models": [
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "google/gemma-4-31b-it:free",
    "nvidia/nemotron-3.5-lightning:free"
  ],
  "messages": [
    {"role": "user", "content": "Summarize this changelog in three bullet points."}
  ]
}
```

Por defecto, cualquier error puede mandar la petición al siguiente modelo, incluidos errores de longitud de contexto, avisos de moderación, límites de peticiones y caídas del proveedor. Se te cobra el modelo que respondió, y su ID vuelve en el campo `model` de la respuesta, así que puedes registrar qué respaldo entró en juego. Que todas las entradas sean modelos `:free`: si la lista acaba cayendo en uno de pago, pagas la tarifa de ese modelo.

Si prefieres no gestionar ninguna lista, `openrouter/free` es un router que elige al azar un modelo gratuito entre los que soportan lo que necesita tu petición, como llamada a herramientas, salidas estructuradas o entrada de imágenes. Cambia previsibilidad por comodidad: no controlas qué modelo responde, pero tu código sigue funcionando aunque cambie el catálogo gratuito.

## Cómo salen los modelos gratuitos de OpenRouter

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/openrouter_free_models_july_vs_october.webp" "Estado en octubre de 2026 de los modelos gratuitos de OpenRouter de julio de 2026: Nemotron 3 Ultra y Gemma 4 siguen gratis; Owl Alpha (ahora LongCat-2.0), Tencent Hy3, Qwen3 Coder y gpt-oss-120b ya son de pago" >}}

*Precios: el proveedor más barato de OpenRouter por millón de tokens de entrada, 27 de octubre de 2026.*

Hace tres meses la lista gratuita era otra. En julio, Nemotron 3 Ultra, Gemma 4, Owl Alpha, Tencent Hy3, Qwen3 Coder y gpt-oss-120b eran todos gratis. Solo los dos primeros lo siguen siendo, y los otros cuatro muestran las distintas maneras en que se acaba un modelo gratuito.

**Owl Alpha resultó ser LongCat-2.0 de Meituan.** Era un modelo stealth, un checkpoint previo al lanzamiento que OpenRouter sirve gratis bajo un nombre en clave mientras el laboratorio recoge uso real. A finales de junio, el equipo LongCat de Meituan <a href="https://x.com/Meituan_LongCat/status/2071783587205308721" target="_blank">presentó LongCat-2.0</a> como "el modelo completo detrás de Owl Alpha": 1.6 billones de parámetros, unos 48B activos por token y un contexto de 1M tokens. Los pesos están en <a href="https://huggingface.co/meituan-longcat/LongCat-2.0" target="_blank">Hugging Face</a> con licencia MIT, y en OpenRouter `meituan/longcat-2.0` cuesta $0.30/M de entrada y $1.20/M de salida, que ahora aparece como precio con descuento.

Lo mismo volvió a pasar este otoño. Un modelo stealth llamado Space Bunny salió de OpenRouter el 5 de octubre y volvió el 19 de octubre como <a href="https://www.unite.ai/minimax-launches-m3-1-flash-revealing-space-bunny-stealth-model/" target="_blank">MiniMax M3.1 Flash</a>, gratis durante 72 horas y ahora de pago, desde $0.143/M de entrada. A 27 de octubre no hay ningún modelo stealth en la lista, así que no hagas planes contando con uno.

**La ventana gratuita de Tencent Hy3 se cerró.** Tencent había fijado el 21 de julio como fecha de fin de la oferta gratuita, y Hy3 ahora es solo de pago, desde $0.0825/M de entrada y $0.33/M de salida a través del endpoint propio de Tencent.

**Qwen3 Coder y gpt-oss-120b perdieron sus variantes `:free`.** Los dos siguen en OpenRouter como modelos de pago: Qwen3 Coder desde $0.22/M de entrada, y gpt-oss-120b desde $0.03/M de entrada y $0.15/M de salida entre unas dos docenas de proveedores. A ese precio, gpt-oss está cerca de ser gratis de todos modos. Los modelos gratuitos más pequeños de julio siguieron el mismo camino: las variantes gratuitas de Llama 3.3 70B, Llama 3.2 3B y Hermes 3 405B ya no están, y Nemotron 3 Super de NVIDIA perdió su endpoint gratuito a finales de octubre (de pago desde $0.08/M de entrada). DeepSeek sigue sin modelo gratuito, aunque V4.1 Flash aparece a $0.14/M de entrada y $0.42/M de salida.

## El catálogo de modelos gratuitos ahora mismo

El catálogo gratuito de OpenRouter es un blanco móvil: se añaden modelos cuando los laboratorios promocionan un lanzamiento y se retiran cuando termina la promoción. El 27 de octubre de 2026, la API lista 28 IDs de modelo que terminan en `:free`: 16 modelos de chat, siete de embeddings y reranking, dos de texto a voz y tres modelos de "decisión" que devuelven respuestas puntuadas en lugar de texto libre. Según el uso de la semana pasada, la <a href="https://openrouter.ai/collections/free-models" target="_blank">página Free Models</a> de OpenRouter sitúa a Nemotron 3 Ultra, Nemotron 3.5 Super VL y Nemotron 3.5 Lightning como los más usados. Cinco de los modelos de chat merecen un apartado propio.

### Thinking Machines Inkling (975B-A41B)

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/inkling_free.webp" "Página del modelo gratuito Thinking Machines Inkling en OpenRouter, con el aviso de que el endpoint gratuito se registra y está limitado a entornos agénticos" >}}

*Captura: openrouter.ai/thinkingmachines/inkling:free, octubre de 2026.*

{{< link href="https://openrouter.ai/thinkingmachines/inkling:free" >}}Inkling{{< /link >}} es el modelo más grande de la lista gratuita. Thinking Machines Lab <a href="https://thinkingmachines.ai/news/introducing-inkling/" target="_blank">lo lanzó el 15 de julio de 2026</a>, entrenado desde cero y con todos los pesos publicados: un Mixture-of-Experts con 975B parámetros en total y 41B activos, entrada de texto, imagen y audio, y hasta 1M tokens de contexto. Los pesos están en <a href="https://huggingface.co/thinkingmachines/Inkling" target="_blank">Hugging Face</a> con licencia Apache 2.0. En OpenRouter, el endpoint gratuito sirve el contexto completo de 1M, mientras que la versión de pago ($1.00/M de entrada, $4.05/M de salida) se queda en 524K. El laboratorio es franco sobre dónde está: "Inkling no es el modelo más fuerte disponible hoy en general, ni abierto ni cerrado", y lo presenta como una base para personalizar.

Lee el aviso de la parte de arriba de la página del modelo antes de integrarlo. El endpoint gratuito "solo está disponible para su uso con entornos agénticos", y Thinking Machines registra sus prompts y respuestas para mejorar sus modelos, después de separarlos de tu cuenta. Úsalo para experimentos con agentes de programación, no para trabajo confidencial. Su hermano pequeño, `thinkingmachines/inkling-small:free` (276B en total, 12B activos), tambien es gratis.

### NVIDIA Nemotron 3 Ultra (550B-A55B)

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/nemotron_3_ultra_free.webp" "Página del modelo gratuito NVIDIA Nemotron 3 Ultra en OpenRouter, con una ventana de contexto de 1M sin coste" >}}

*Captura: openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free, octubre de 2026.*

{{< link href="https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free" >}}NVIDIA Nemotron 3 Ultra{{< /link >}}, lanzado el 4 de junio de 2026, es una de las dos elecciones de julio que siguen siendo gratis. Es un MoE de 550B parámetros con 55B activos por token, construido sobre una arquitectura híbrida Transformer-Mamba que NVIDIA diseñó para pipelines de agentes con mucho throughput. NVIDIA sirve el endpoint gratuito directamente, con un contexto de 1M tokens y hasta 65,536 tokens de salida. Los endpoints de pago, desde $0.40/M de entrada y $1.76/M de salida, se quedan en 262K de contexto, así que en este modelo el nivel gratuito es el más grande. El aviso de NVIDIA en la página dice que el uso del endpoint gratuito "se registra por motivos de seguridad y para mejorar los productos y servicios de NVIDIA".

### NVIDIA Nemotron 3.5 Super VL (120B-A12B)

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/nemotron_35_super_vl_free.webp" "Página del modelo gratuito NVIDIA Nemotron 3.5 Super VL en OpenRouter, con entrada de texto, imagen y vídeo y una ventana de contexto de 1M" >}}

*Captura: openrouter.ai/nvidia/nemotron-3.5-super-vl:free, octubre de 2026.*

{{< link href="https://openrouter.ai/nvidia/nemotron-3.5-super-vl:free" >}}Nemotron 3.5 Super VL{{< /link >}} es el modelo más reciente de esta guía, lanzado el 15 de octubre de 2026. Es un MoE de 120B parámetros con 12B activos que acepta texto, imágenes, documentos, capturas de interfaces gráficas y vídeo y devuelve texto, con un contexto de 1M tokens y el razonamiento activado por defecto (puedes desactivarlo o darle un presupuesto de tokens). Eso lo convierte en la opción gratuita para extraer datos de documentos, agentes que trabajan sobre capturas de pantalla y comprensión de vídeo. En su página aparece el mismo aviso de registro de NVIDIA. Los endpoints de pago empiezan en $0.06/M de entrada. Si prefieres velocidad a tamaño, `nvidia/nemotron-3.5-lightning:free` (30B en total, 3B activos, solo texto, 1M de contexto) es la opción de alto throughput de la misma familia.

### Google Gemma 4 (31B y 26B-A4B)

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/gemma_4_31b_free.webp" "Página del modelo gratuito Google Gemma 4 31B en OpenRouter, servido por Google AI Studio" >}}

*Captura: openrouter.ai/google/gemma-4-31b-it:free, octubre de 2026.*

La familia {{< link href="https://openrouter.ai/google/gemma-4-31b-it:free" >}}Gemma 4{{< /link >}} de Google DeepMind, lanzada el 2 de abril de 2026, es la otra elección de julio que sigue siendo gratis, y las dos variantes han sobrevivido. `google/gemma-4-31b-it:free` es el modelo denso de 30.7B: sin enrutado MoE, así que es el más lento de los dos, pero es el que conviene usar cuando quieres la mejor respuesta posible. {{< link href="https://openrouter.ai/google/gemma-4-26b-a4b-it:free" >}}`google/gemma-4-26b-a4b-it:free`{{< /link >}} es su hermano MoE, con 25.2B parámetros en total y 3.8B activos, y se queda cerca de la calidad del 31B respondiendo más rápido. Google AI Studio sirve los dos gratis con un contexto de 262K, hasta 32,768 tokens de salida, entrada de imagen y vídeo, razonamiento configurable, function calling nativo y más de 140 idiomas, con licencia Apache 2.0. A diferencia de las páginas de NVIDIA y Thinking Machines, la página gratuita de Gemma no muestra ningún aviso de registro.

### Poolside Laguna S 2.1 - Se retira el 31 de octubre

{{< image "free_ai_model_apis_unlimited_tokens_openrouter/laguna_s_21_free.webp" "Página del modelo gratuito Poolside Laguna S 2.1 en OpenRouter, marcado como retirado a partir del 31 de octubre de 2026" >}}

*Captura: openrouter.ai/poolside/laguna-s-2.1:free, octubre de 2026.*

{{< link href="https://openrouter.ai/poolside/laguna-s-2.1:free" >}}Laguna S 2.1{{< /link >}} es el modelo de Poolside para agentes de programación: 118B parámetros en total, 8B activos, de pesos abiertos con la licencia OpenMDW-1.1 y un contexto de 262K en el endpoint gratuito. Poolside publica un 70.2% en Terminal-Bench 2.1 y un 40.4% en DeepSWE. Son cifras del propio fabricante, pero buenas para un modelo con 8B parámetros activos, y de todo lo que hay en la lista gratuita es el más pensado para {{< link href="/blog/best_ai_tools_for_coding/" newtab=false >}}agentes de programación{{< /link >}}. Justo ahí está el problema: la página del modelo anuncia que se retira el 31 de octubre de 2026, y el más pequeño `poolside/laguna-xs-2.1:free` (33B en total, 3B activos) caduca el mismo día. Poolside también dice que puede usar las entradas y salidas del nivel gratuito para entrenar sus modelos. Y no es solo el nivel gratuito el que se acaba: la versión de pago ($0.09/M de entrada, $0.18/M de salida, 1M de contexto) muestra el mismo aviso de retirada para el 31 de octubre de 2026, igual que la versión de pago de Laguna XS 2.1.

Lo destacamos porque las listas de modelos gratuitos se quedan viejas en cuestión de semanas. Después del 31 de octubre de 2026, revisa <a href="https://openrouter.ai/poolside/laguna-s-2.1:free" target="_blank">su ficha actual</a> antes de usarlo.

### El resto del catálogo gratuito actual

Aparte de esos cinco, los modelos de chat gratuitos son Inkling Small; Nemotron 3.5 Lightning, Nemotron 3 Nano Omni (30B-A3B, con entrada de texto, imagen, audio y vídeo) y el modelo de guardrail Nemotron 3.5 Content Safety de 4B, todos de NVIDIA; North Mini Code de Cohere (30B, 3B activos), su primer modelo de programación agéntica; Flint de Recursive (40B, 2.5B activos), pensado para agentes de programación y añadido el 21 de octubre; Xing4.0 29B-A4B de China Telecom; Dots3-Note Preview de Dots Studio (280B, 16B activos), gratis hasta el 31 de diciembre de 2026; y LFM2.5-2.6B de LiquidAI para tareas pequeñas y rápidas. Fuera del chat hay modelos gratuitos de embeddings y reranking de NVIDIA y LiquidAI, y texto a voz gratuito de Fish Audio y HeyGen (el de HeyGen hasta el 30 de noviembre).

Si buscas modelos de pesos abiertos que puedas ejecutar en tu propio hardware en lugar de depender de un nivel gratuito que va rotando, mira nuestra {{< link href="/blog/best_open_source_self_hosted_llms_for_coding/" newtab=false >}}guía de LLMs self-hosted para programar{{< /link >}}.

## Qué hacen los endpoints gratuitos con tus prompts

Los límites de peticiones son el coste documentado del nivel gratuito. El menos evidente son los datos. Tres de las cinco páginas de modelo de arriba dicen que el proveedor registra el tráfico del nivel gratuito o puede entrenar con él: NVIDIA y Thinking Machines lo registran para mejorar sus modelos, y Poolside puede entrenar con él. Ese es el trato detrás de casi toda la inferencia gratuita: tú te llevas los tokens y el laboratorio se lleva uso real.

OpenRouter te deja excluirte, pero tiene un precio. La configuración de privacidad de tu cuenta tiene interruptores separados para modelos de pago y gratuitos que deciden si se permiten proveedores que pueden entrenar con tus datos, y según la <a href="https://openrouter.ai/docs/guides/privacy/provider-logging" target="_blank">documentación sobre registro de proveedores</a> de OpenRouter, si te excluyes, "OpenRouter no enrutará a proveedores que entrenan". Todos los modelos gratuitos de esta guía funcionan con un único proveedor, así que excluirte no te lleva a un host más seguro; directamente los deja fuera de tu cuenta. Si un modelo gratuito le funciona a todo el mundo menos a ti, revisa primero ese ajuste.

## Nivel gratuito vs. pagar: a qué renuncias de verdad

El nivel gratuito no es una demo recortada. Los modelos gratuitos más grandes son lanzamientos de pesos abiertos a escala de frontera, y en Inkling y Nemotron 3 Ultra el endpoint gratuito ofrece una ventana de contexto mayor que la versión de pago. A esto renuncias si te quedas en lo gratuito:

- **Modelos insignia propietarios.** Los modelos gratuitos de OpenRouter son lanzamientos de pesos abiertos (Inkling, Nemotron, Gemma, Laguna) o promociones temporales. No vas a encontrar acceso gratuito a los modelos insignia de Claude, GPT o Gemini.
- **Volumen.** 50 o 1,000 peticiones al día bastan para proyectos personales y prototipos. No alcanza para una app en producción con tráfico real, y la propia OpenRouter avisa de que los modelos gratuitos pueden tener límites de peticiones o ir más lentos en horas punta.
- **Privacidad.** Como vimos arriba, muchos endpoints gratuitos registran lo que envías o pueden entrenar con ello.

Cuando se te quede corto, el pago por uso cobra el precio de lista de cada proveedor sin recargo sobre los tokens, más la comisión del 5.5% al comprar créditos. Si ya tienes keys de OpenAI, Anthropic o Google, BYOK (bring your own key, usar tu propia key) enruta a través de ellas sin comisión de OpenRouter sobre los primeros $25,000 de inferencia a precio de lista cada mes y con un 5% a partir de ahí, según la <a href="https://openrouter.ai/pricing" target="_blank">página de precios</a>. Para gateways distintos de OpenRouter, nuestra {{< link href="/blog/best_ai_llm_routers_openrouter_alternatives/" newtab=false >}}comparativa de routers de LLM{{< /link >}} repasa Portkey, LiteLLM y otros, y nuestro artículo sobre {{< link href="/blog/openrouter_production_provider_routing_pitfalls/" newtab=false >}}los tropiezos de OpenRouter en producción{{< /link >}} cuenta qué se rompe cuando mueves tráfico de pago a OpenRouter.

## Una forma realista de usar esto

El patrón que aguanta con el tiempo es este: desarrolla contra el endpoint compatible con OpenAI para no quedar atado nunca al SDK de un proveedor, pon dos o tres modelos gratuitos en un array de respaldo `models` en lugar de fiarte de uno solo, consulta `free_model_daily_requests` antes de las ejecuciones largas y deja los datos confidenciales en endpoints de pago cuya política de datos hayas leído. Trata los modelos stealth y las ofertas con fecha de caducidad como Laguna S 2.1 como capacidad extra, no como algo de lo que dependa un flujo de trabajo.

## Conclusión

"API de IA gratis con tokens ilimitados" es una búsqueda llamativa, pero la descripción exacta resulta más útil una vez que la entiendes: OpenRouter te da acceso gratuito y sin tope por tokens a un conjunto bueno y cambiante de modelos de pesos abiertos (ahora mismo Inkling, Nemotron 3 Ultra, Nemotron 3.5 Super VL y Gemma 4), limitado por un número de peticiones diarias y no por tokens. Cincuenta peticiones al día no cuestan nada y no piden tarjeta; $10 en créditos, comprados una sola vez, lo suben a mil. La disciplina que exige no ha cambiado desde julio: diseña pensando en la rotación desde el primer día, lee el aviso sobre datos de cada endpoint gratuito y vuelve a revisar las páginas de los modelos antes de depender de ellos.
