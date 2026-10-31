---
title: "Autoaloja OmniRoute: un gateway de IA gratis para 500+ modelos y 290+ proveedores"
slug: "autoalojar-omniroute-gateway-ia"
description: "OmniRoute es un gateway de IA gratuito con licencia MIT que ejecutas tú mismo: un único endpoint compatible con OpenAI delante de más de 290 proveedores y 500 modelos. Lo ejecutamos en Docker, obtuvimos 99 modelos disponibles sin configurar nada, probamos los combos, la compresión, MCP y la CLI, y luego lo compartimos todo mediante una URL HTTPS pública con Pinggy. Datos revisados de nuevo con la v3.8.51 (octubre de 2026)."
date: 2026-07-30T11:20:00+05:30
lastmod: 2026-10-29T11:20:00+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Tecnología"
tags: ["OmniRoute", "AI gateway", "self-hosted AI", "LLM router", "open source", "Claude Code"]
categories: ["Technology", "AI Tools", "Self-Hosting"]
og_image: "images/omniroute_ai_gateway_security/omniroute_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gYXV0b2Fsb2phciBPbW5pUm91dGUgeSBhY2NlZGVyIGEgw6lsIGVuIHJlbW90byBjb24gUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiR3XDrWEgcGFzbyBhIHBhc28gcGFyYSBhdXRvYWxvamFyIGVsIGdhdGV3YXkgZGUgSUEgT21uaVJvdXRlIGNvbiBEb2NrZXIsIGRlZmluaXIgdW5hIGNvbnRyYXNlw7FhIGluaWNpYWwgZGUgYWRtaW5pc3RyYWRvciwgYXB1bnRhciB0dXMgaGVycmFtaWVudGFzIGRlIHByb2dyYW1hY2nDs24gYSBzdSBlbmRwb2ludCBjb21wYXRpYmxlIGNvbiBPcGVuQUkgeSBjb21wYXJ0aXJsbyBtZWRpYW50ZSB1bmEgVVJMIEhUVFBTIHDDumJsaWNhIGNvbiBQaW5nZ3kuIiwKICAidG90YWxUaW1lIjogIlBUMTBNIiwKICAidG9vbCI6IFsKICAgIHsgIkB0eXBlIjogIkhvd1RvVG9vbCIsICJuYW1lIjogIkRvY2tlciAobyBOb2RlLmpzIDIyLjIyLjIrIG8gMjQueC0yNi54IHBhcmEgbGEgaW5zdGFsYWNpw7NuIGNvbiBucG0pIiB9LAogICAgeyAiQHR5cGUiOiAiSG93VG9Ub29sIiwgIm5hbWUiOiAiVW4gY2xpZW50ZSBTU0giIH0KICBdLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRGVmaW5lIHVuYSBjb250cmFzZcOxYSBpbmljaWFsIGRlIGFkbWluaXN0cmFkb3IiLAogICAgICAidGV4dCI6ICJPbW5pUm91dGUgZ2VuZXJhIGF1dG9tw6F0aWNhbWVudGUgSldUX1NFQ1JFVCwgQVBJX0tFWV9TRUNSRVQgeSBTVE9SQUdFX0VOQ1JZUFRJT05fS0VZIGVuIGVsIHByaW1lciBhcnJhbnF1ZSwgcGVybyBsYSBjb250cmFzZcOxYSBkZSBhZG1pbmlzdHJhZG9yIGRlbCBkYXNoYm9hcmQgcGFzYSBhIHNlciBsYSBjYWRlbmEgbGl0ZXJhbCBDSEFOR0VNRSBzaSBJTklUSUFMX1BBU1NXT1JEIG5vIGVzdMOhIGRlZmluaWRhLiBHZW5lcmEgdW5hIHByaW1lcm8gY29uIGV4cG9ydCBJTklUSUFMX1BBU1NXT1JEPSQob3BlbnNzbCByYW5kIC1iYXNlNjQgMjQpLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBcnJhbmNhIE9tbmlSb3V0ZSBjb24gRG9ja2VyIiwKICAgICAgInRleHQiOiAiRWplY3V0YSBkb2NrZXIgcnVuIC1kIC0tbmFtZSBvbW5pcm91dGUgLS1yZXN0YXJ0IHVubGVzcy1zdG9wcGVkIC0tc3RvcC10aW1lb3V0IDQwIC1wIDIwMTI4OjIwMTI4IC12IG9tbmlyb3V0ZS1kYXRhOi9hcHAvZGF0YSAtZSBJTklUSUFMX1BBU1NXT1JEIGRpZWdvc291emFwdy9vbW5pcm91dGU6bGF0ZXN0LiBFbCBkYXNoYm9hcmQgeSBsYSBBUEkgY29tcGF0aWJsZSBjb24gT3BlbkFJIHNlIHNpcnZlbiBkZXNkZSBlbCBwdWVydG8gMjAxMjguIEVsIHRpZW1wbyBkZSBwYXJhZGEgZGUgNDAgc2VndW5kb3MgcGVybWl0ZSBxdWUgT21uaVJvdXRlIGhhZ2EgY2hlY2twb2ludCBkZSBzdSBiYXNlIGRlIGRhdG9zIFNRTGl0ZSBhbCBhcGFnYXJzZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29tcHJ1ZWJhIHF1ZSBlbCBnYXRld2F5IGVzdMOhIGFjdGl2byIsCiAgICAgICJ0ZXh0IjogIkFicmUgaHR0cDovL2xvY2FsaG9zdDoyMDEyOCBlbiB1biBuYXZlZ2Fkb3IsIHF1ZSByZWRpcmlnZSBhIC9kYXNoYm9hcmQuIFJldmlzYSBsYSBsaXN0YSBkZSBtb2RlbG9zIGNvbiBjdXJsIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjgvdjEvbW9kZWxzLiBVbm9zIDk5IG1vZGVsb3MgZXN0w6FuIGRpc3BvbmlibGVzIGFudGVzIGRlIGNvbmZpZ3VyYXIgdW4gc29sbyBwcm92ZWVkb3IsIGluY2x1aWRvcyAzNiBhbGlhcyBkZSBjb21ibyBhdXRvLyogeSB2YXJpb3MgcG9vbHMgZGUgcHJvdmVlZG9yZXMgZ3JhdHVpdG9zIHNpbiBhdXRlbnRpY2FjacOzbi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29uZWN0YSBwcm92ZWVkb3JlcyB5IGNyZWEgdW5hIEFQSSBrZXkiLAogICAgICAidGV4dCI6ICJFbiBlbCBkYXNoYm9hcmQsIHZlIGEgUHJvdmlkZXJzIHBhcmEgY29uZWN0YXIgc3VzY3JpcGNpb25lcyBwb3IgT0F1dGggY29tbyBDbGF1ZGUgQ29kZSwgQ29kZXggeSBHaXRIdWIgQ29waWxvdCwgbyBwZWdhIEFQSSBrZXlzIGRlIEdMTSwgRGVlcFNlZWssIE1pc3RyYWwsIEdyb3EgeSBvdHJvcyBwcm92ZWVkb3Jlcy4gRGVzcHXDqXMgdmUgYSBBUEkgS2V5cyBwYXJhIGdlbmVyYXIgdW4gYmVhcmVyIHRva2VuIHkgbGltaXRhcmxvIGEgY2hhdCwgbWFuYWdlLCBhZG1pbiwgbWVtb3J5IG8gbWNwLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJBcHVudGEgdHVzIGhlcnJhbWllbnRhcyBkZSBwcm9ncmFtYWNpw7NuIGFsIGdhdGV3YXkiLAogICAgICAidGV4dCI6ICJEZWZpbmUgQU5USFJPUElDX0JBU0VfVVJMIGNvbW8gaHR0cDovL2xvY2FsaG9zdDoyMDEyOCBwYXJhIENsYXVkZSBDb2RlLCB1IE9QRU5BSV9CQVNFX1VSTCBjb21vIGh0dHA6Ly9sb2NhbGhvc3Q6MjAxMjggcGFyYSBDb2RleC4gUGFyYSBDdXJzb3IsIENsaW5lLCBDb250aW51ZSB5IFJvb0NvZGUsIGVsaWdlIGVsIHByb3ZlZWRvciBjb21wYXRpYmxlIGNvbiBPcGVuQUkgeSBkZWZpbmUgbGEgVVJMIGJhc2UgY29tbyBodHRwOi8vbG9jYWxob3N0OjIwMTI4L3YxIGNvbiB0dSBBUEkga2V5IGRlIE9tbmlSb3V0ZS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRXhww7NuIGVsIHB1ZXJ0byAyMDEyOCBjb24gUGluZ2d5IiwKICAgICAgInRleHQiOiAiRW4gb3RyYSB0ZXJtaW5hbCwgZWplY3V0YSBzc2ggLXAgNDQzIC1SMDpsb2NhbGhvc3Q6MjAxMjggZnJlZS5waW5nZ3kuaW8gcGFyYSBvYnRlbmVyIHVuYSBVUkwgSFRUUFMgcMO6YmxpY2EgcXVlIGhhY2UgZGUgdMO6bmVsIGhhY2lhIHR1IGluc3RhbmNpYSBsb2NhbCBkZSBPbW5pUm91dGUsIHkgYXPDrSBhY2NlZGVyIGFsIGRhc2hib2FyZCBvIGVucnV0YXIgbGxhbWFkYXMgYSBsYSBBUEkgYSB0cmF2w6lzIGRlIGVsbGEgZGVzZGUgb3RyYSBtw6FxdWluYS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQcOxYWRlIGF1dGVudGljYWNpw7NuIEhUVFAgYsOhc2ljYSBhbCB0w7puZWwiLAogICAgICAidGV4dCI6ICJFamVjdXRhIHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDoyMDEyOCAtdCBmcmVlLnBpbmdneS5pbyBiOnVzZXI6cGFzc3dvcmQgcGFyYSBxdWUgZWwgcHJvcGlvIHTDum5lbCBwaWRhIGNyZWRlbmNpYWxlcy4gTGFzIHBldGljaW9uZXMgc2luIGVsbGFzIHJlY2liZW4gdW4gNDAxIGFudGVzIGRlIGxsZWdhciBhIE9tbmlSb3V0ZSwgbG8gcXVlIGHDsWFkZSB1bmEgY2FwYSBpbmRlcGVuZGllbnRlIGRlIGxhIGF1dGVudGljYWNpw7NuIGRlbCBwcm9waW8gZ2F0ZXdheS4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ2llcnJhIGVsIHTDum5lbCBjdWFuZG8gdGVybWluZXMiLAogICAgICAidGV4dCI6ICJUZXJtaW5hIGxhIHNlc2nDs24gU1NIIGVuIGx1Z2FyIGRlIGRlamFyIGVsIHTDum5lbCBhYmllcnRvIGluZGVmaW5pZGFtZW50ZS4gVW4gZW5sYWNlIHF1ZSBzb2xvIGV4aXN0ZSBkdXJhbnRlIHVuYSBzZXNpw7NuIGRlIHRyYWJham8gZXMgdW4gb2JqZXRpdm8gbXVjaG8gbcOhcyBwZXF1ZcOxbyBxdWUgdW5vIHBlcm1hbmVudGUuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "omniroute_ai_gateway_security/omniroute_banner.webp" "Autoaloja OmniRoute: un gateway de IA gratis para 500+ modelos y 290+ proveedores" >}}

Con un solo comando tienes un gateway de IA funcionando en más o menos un minuto, y esto es lo que me sorprendió: antes de configurar un solo proveedor o pegar una sola API key, `curl http://localhost:20128/v1/models` devolvió 99 modelos (en la v3.8.48, que es la que ejecutamos). Eso incluye 36 alias de enrutado como `auto/best-coding` y `auto/best-free`, además de un puñado de pools de proveedores sin autenticación que no te piden absolutamente nada. Uno de ellos respondió a una chat completion real a la primera.

OmniRoute es un gateway de IA gratuito, con licencia MIT, que alojas tú mismo. Pone un único endpoint compatible con OpenAI delante de lo que su README cuenta como 358 proveedores (más de 150 con nivel gratuito), que abarcan Claude, GPT, Gemini, DeepSeek, Kimi, GLM, Mistral y MiniMax. En el camino de las peticiones no hay nada más que tu propio contenedor. Apareció en GitHub en febrero de 2026 y, a 9 de octubre de 2026, suma 74,497 estrellas y 10,738 forks, con la v3.8.51 del 30 de septiembre de 2026 como versión actual. Son bastantes más que las 33,908 estrellas y los más de 290 proveedores que tenía cuando escribimos esto por primera vez en julio. Repasamos la categoría de gateways de IA en general, incluidos <a href="https://openrouter.ai/" target="_blank">OpenRouter</a> y <a href="https://www.litellm.ai/" target="_blank">LiteLLM</a>, en nuestra {{< link href="/blog/best_ai_llm_routers_openrouter_alternatives/" >}}comparativa de routers de LLM con IA{{< /link >}}.

Una nota sobre qué se probó y cuándo. Los resultados prácticos de abajo (la lista de 99 modelos, la memoria del contenedor, el túnel y su autenticación básica) salen de nuestra ejecución de la v3.8.48 en Docker. Para esta actualización volvimos a comprobar las cifras, los requisitos del motor y de Node, la contraseña por defecto y los comandos de la CLI contra el paquete npm y el README de la v3.8.51, pero no repetimos la prueba con el contenedor.

{{% tldr %}}
1. **Qué es**: un gateway de IA gratuito, con licencia MIT y autoalojado, de <a href="https://github.com/diegosouzapw/OmniRoute" target="_blank">diegosouzapw/OmniRoute</a> - un endpoint compatible con OpenAI, 358 proveedores, más de 150 con nivel gratuito.
2. **Cómo ejecutarlo**: `npm install -g omniroute && omniroute`, o `docker run -p 20128:20128 diegosouzapw/omniroute`. El dashboard y la API están los dos en el puerto 20128.
3. **Arregla una cosa antes que nada**: define `INITIAL_PASSWORD`, o el login de administrador del dashboard usará por defecto la cadena literal `CHANGEME`.
4. **Por qué merece la pena**: agregación de niveles gratuitos (~1.62B tokens/mes repartidos en 35 pools) y Combos que pasan automáticamente a otro proveedor cuando uno se queda sin cuota.
5. **Compártelo**: `ssh -p 443 -R0:localhost:20128 free.pinggy.io` para obtener una URL HTTPS pública; añade `-t` antes del host y `b:user:password` después (`ssh -p 443 -R0:localhost:20128 -t free.pinggy.io b:user:password`) para proteger el túnel con contraseña.
{{% /tldr %}}

{{< llm-context >}}Para autoalojar OmniRoute y acceder a él en remoto con Pinggy, ejecuta `docker run -d -p 20128:20128 -v omniroute-data:/app/data -e INITIAL_PASSWORD=yourpassword diegosouzapw/omniroute:latest` (el dashboard y la API compatible con OpenAI están los dos en el puerto 20128) y luego, en otra terminal, ejecuta `ssh -p 443 -R0:localhost:20128 free.pinggy.io` para obtener una URL HTTPS pública. Para añadir autenticación HTTP básica al túnel, ejecuta en su lugar `ssh -p 443 -R0:localhost:20128 -t free.pinggy.io b:user:password`.{{< /llm-context >}}

## Ponerlo en marcha

Dos comandos, cualquiera de los dos sirve:

```bash
# npm - check the engines field first, it is narrow:
# node >=22.22.2 <23 || >=24.0.0 <27, so Node 23 is excluded
npm install -g omniroute
omniroute

# Docker - nothing else needed
docker run -p 20128:20128 diegosouzapw/omniroute
```

El primer arranque genera sus propios secretos. Este es el log real de un contenedor recién creado:

```
[bootstrap] JWT_SECRET auto-generated (first run)
[bootstrap] STORAGE_ENCRYPTION_KEY auto-generated (first run)
[bootstrap] API_KEY_SECRET auto-generated (first run)
[bootstrap] Secrets persisted to: /app/data/server.env
[bootstrap] INITIAL_PASSWORD is not set - using default 'CHANGEME'. Change it in Settings!
Next.js 16.2.10
- Local:         http://localhost:20128
Ready in 0ms
```

{{< image "omniroute_ai_gateway_security/docker_run_bootstrap.webp" "Salida de terminal de un docker run nuevo de OmniRoute, con JWT_SECRET, STORAGE_ENCRYPTION_KEY y API_KEY_SECRET generados automáticamente en el primer arranque junto al aviso de la contraseña CHANGEME" >}}

Tres de esos cuatro secretos se gestionan solos. La cuarta línea es lo único que hay que arreglar antes que nada:

```bash
export INITIAL_PASSWORD=$(openssl rand -base64 24)
```

Con eso definido, el aviso de `CHANGEME` no aparece. Para cualquier cosa que pienses dejar en marcha, usa un contenedor con nombre, un volumen persistente y un tiempo de parada de 40 segundos, ya que OmniRoute hace checkpoint de su base de datos SQLite al apagarse:

```bash
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 20128:20128 -v omniroute-data:/app/data \
  -e INITIAL_PASSWORD \
  diegosouzapw/omniroute:latest
```

{{< image "omniroute_ai_gateway_security/docker_container_running.webp" "Contenedor de OmniRoute ejecutándose en Docker Desktop, mapeado al puerto 20128" >}}

En nuestra instancia, el contenedor se quedó en reposo en unos 541 MB de RAM y alrededor de un 3% de CPU sin tráfico.

## Lo que obtienes antes de configurar nada

Sin ningún proveedor conectado, la lista de modelos ya viene llena:

```bash
curl -s http://localhost:20128/v1/models | jq '.data | length'
# 99
```

De esos 99, 36 son alias de combo `auto/*` como `auto/best-coding` y `auto/best-free`. Son nombres basados en la intención y no modelos: pides `auto/best-coding` y OmniRoute elige el proveedor configurado que en ese momento cumple esa intención, así que la configuración de tu cliente no tiene que cambiar cuando cambias los proveedores de debajo.

Los 63 restantes salen de pools de proveedores sin autenticación que vienen activados: `theoldllm` (26 modelos), `auggie` (15), `opencode` (8), `duckduckgo-web` (6) y algunos más pequeños. Una petición normal con formato de OpenAI contra uno de ellos funcionó al instante y devolvió un objeto `chat.completion` normal con un bloque `usage` real. Siendo honestos con el resto: de los siete provedores sin autenticación que probamos, solo respondieron dos; los demás devolvieron `403`, `418`, `502` o `400`. Tómatelos como un extra que a veces funciona, no como el motivo para instalar esto.

## El dashboard, los combos y la agregación de niveles gratuitos

{{< image "omniroute_ai_gateway_security/omniroute_ui_localhost.webp" "Página de inicio del dashboard de OmniRoute con el banner del modo sin configuración, la tarjeta de Quick Start de cuatro pasos y el panel de topología de proveedores" >}}

`http://localhost:20128` redirige a `/dashboard`, que confirma el banner de cifrado y te guía en cuatro pasos: crear una API key, conectar proveedores, apuntar tu cliente a `/v1` y monitorizar el uso. Los proveedores se conectan de tres formas: OAuth para suscripciones como Claude Code y GitHub Copilot, pegar y guardar para proveedores con API key como GLM y Mistral, y un interruptor para los pools gratuitos sin autenticación. Los endpoints de gestión están bien protegidos; llamar a `/api/free-tier/summary` sin key devuelve un `401` limpio.

La función más útil son los **Combos**, una lista ordenada de modelos más una estrategia de fallback:

```json
{
  "name": "premium-coding",
  "strategy": "priority",
  "models": [
    { "model": "cc/claude-opus-5" },
    { "model": "glm/glm-5.2" },
    { "model": "minimax/MiniMax-M3" }
  ]
}
```

El README ahora enumera 19 estrategias, entre ellas priority (orden estricto), round-robin, weighted, least-used, cost-optimized, random, `cache-optimized` (envía las peticiones repetidas a la conexión que tiene el prefijo en caché) y un modo `fusion` que reparte un prompt entre varios modelos. Nosotros solo probamos las sencillas. OmniRoute sigue la ventana de cuota de cada proveedor (reinicios cada 5 horas y semanales en las suscripciones, diarios o mensuales en los proveedores de API), y cuando uno llega a su límite el combo pasa al siguiente en lugar de devolverle un error a tu cliente.

Ese failover combina bien con el otro gran atractivo del proyecto: la agregación de niveles gratuitos. La <a href="https://github.com/diegosouzapw/OmniRoute/blob/main/docs/reference/FREE_TIERS.md" target="_blank">referencia FREE_TIERS</a> de OmniRoute sitúa la cuota recurrente documentada en unos 1.62 mil millones de tokens gratis al mes repartidos en 35 pools deduplicados, con Mistral a la cabeza con unos 1,000 millones, seguido de Nara (210M), LLM7 (150M), xKiro (150M) y Groq (30M, como cinco límites por modelo). Tómate esa cifra con cierta cautela. El documento dice que la cifra de Mistral solo se ve dentro de la consola de una cuenta, y una nueva auditoría de septiembre de 2026 quitó Gemini y Ollama Cloud de la suma porque ninguno publica ya una cifra de tokens (el total bajó desde ~1.94B a principios de año por correcciones parecidas). Cuenta también con límites de peticiones: el propio documento de OmniRoute indica 2 peticiones por minuto para el nivel gratuito de Mistral, mientras que el centro de ayuda de Mistral (una página más antigua) dice 1 petición por segundo, así que revisa tu propia consola de administración. Mira nuestra guía de {{< link href="/blog/free_ai_model_apis_unlimited_tokens_openrouter/" >}}APIs de modelos de IA gratuitas{{< /link >}} si eso es lo que más te interesa.

Además, la compresión puede recortar entre un 15% y un 95% del uso de tokens antes de que las peticiones lleguen a un proveedor. La configuración por defecto usa dos motores: **Caveman** comprime prosa y **RTK** (inspirado en <a href="https://github.com/RTK-AI/rtk" target="_blank">Rust Token Killer</a>) comprime salidas de herramientas repetitivas como logs de compilación y ejecuciones de tests. El README ahora enumera 12 motores combinables en total, incluido LLMLingua-2 y algunos modos con pérdida que tienes que activar tú. El código, las URLs y el JSON pasan intactos con la configuración por defecto, y cada respuesta lleva una cabecera `x-omniroute-compression` que indica si se aplicó.

## Apuntar tus herramientas de programación a OmniRoute

Si ya usas un agente de programación, es un cambio de cinco minutos, no un flujo de trabajo nuevo. Para Claude Code, define `ANTHROPIC_BASE_URL=http://localhost:20128` y `ANTHROPIC_AUTH_TOKEN=your-omniroute-api-key` en `~/.claude/settings.json`. Para Codex CLI, `export OPENAI_BASE_URL="http://localhost:20128"` y `OPENAI_API_KEY`. Para Cursor, Cline, Continue y RooCode, elige el tipo de proveedor compatible con OpenAI y apúntalo a `http://localhost:20128/v1`. Si todavía estás comparando agentes, nuestros repasos de las {{< link href="/blog/best_ai_tools_for_coding/" >}}mejores herramientas de IA para programar{{< /link >}} y de los {{< link href="/blog/best_open_source_cli_coding_agents/" >}}agentes de programación CLI{{< /link >}} cuentan qué espera cada uno de un proveedor.

## MCP, A2A y la CLI

OmniRoute se expone como servidor MCP (SSE, HTTP streaming o stdio con `omniroute --mcp`), así que un agente puede manejar el propio gateway, con 110 herramientas detrás de 33 scopes (la aplicación de scopes es opcional, así que revisa ese ajuste antes de darle una key a un agente). Mira nuestra guía sobre cómo {{< link href="/blog/expose_mcp_server_with_pinggy/" >}}exponer un servidor MCP con Pinggy{{< /link >}} si quieres acceder a él en remoto. Tambien hay un servidor A2A que habla JSON-RPC 2.0 con un framework de skills, aunque esta parte del proyecto es la menos madura y la peor documentada.

La CLI ha crecido hasta más de 80 comandos y cubre casi todo lo que hace el dashboard, algo que importa en máquinas sin interfaz gráfica:

```bash
omniroute doctor                   # checks data dir, DB, providers, port conflicts
omniroute providers test <id>      # live round-trip against one provider
omniroute quota                    # provider quota usage
omniroute combo switch <name>      # change the default combo
omniroute reset-password           # admin password recovery
```

`omniroute doctor` es lo primero a lo que recurrir cuando algo falla. Si OmniRoute corre en un VPS, `omniroute connect <host>` conecta esa misma CLI al servidor remoto con un token de alcance limitado, así que puedes manejarlo desde tu portátil.

## Acceder a tu gateway desde otra máquina con Pinggy

`localhost:20128` solo es accesible desde un ordenador. Un túnel de Pinggy lo resuelve sin abrir un puerto en el router:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:20128 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:20128 free.pinggy.io\"}}}"
{{</ ssh_command >}}

{{< image "omniroute_ai_gateway_security/pinggy_public_url.webp" "Pinggy mostrando dos URLs HTTPS públicas para el túnel que reenvía a localhost:20128" >}}

Tanto el dashboard como la API funcionan a través de él. En nuestro túnel, `/v1/models` devolvió los mismos 99 modelos y una chat completion llegó en streaming con normalidad. Al cargar esa URL en el navegador, la tarjeta de Quick Start de OmniRoute incluso se actualiza para mostrarla como URL base del cliente, ya que el dashboard lee la dirección por la que se está accediendo realmente.

{{< image "omniroute_ai_gateway_security/omniroute_running_on_pinggy_url.webp" "Dashboard de OmniRoute cargado a través de una URL pública de túnel de Pinggy, con la tarjeta de Quick Start mostrando esa URL como URL base para los clientes de la API" >}}

Como tu gateway ahora guarda todas las keys de proveedor que hayas configurado, ponle una contraseña al propio túnel:

```bash
ssh -p 443 -R0:localhost:20128 -t free.pinggy.io b:user:temporarypass
```

Esta es la sintaxis de la {{< link href="/docs/http_tunnels/basic_auth/" >}}documentación de autenticación básica{{< /link >}}. En nuestra prueba de julio, las peticiones sin credenciales o con credenciales incorrectas recibieron un `401`, y solo las correctas llegaron a OmniRoute. Eso te da dos capas independientes: la contraseña del túnel y `INITIAL_PASSWORD`. Cierra la sesión SSH cuando termines en lugar de dejar un enlace permanente abierto.

## Conclusión

Define `INITIAL_PASSWORD`, ten en cuenta el tamaño de la imagen y pon delante un túnel de Pinggy con autenticación básica cuando necesites acceder desde otro sitio. Los combos, el failover según la cuota, el soporte de MCP/A2A y un catálogo de niveles gratuitos que vale aproximadamente 1.62B tokens al mes hacen de esto mucho software útil para una licencia MIT.
