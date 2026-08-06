---
title: "localhost:1337 - Guía del puerto de la IA local Jan"
description: "Guía completa de localhost:1337 - el puerto por defecto de Jan, una alternativa de código abierto a ChatGPT que funciona totalmente sin conexión."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-08-01T10:00:00+05:30
draft: false
tags: ["localhost", "port", "jan", "llm", "ai", "offline"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
  <h2 style="margin: 0 0 15px 0; color: white; font-size: 2.2em;">localhost:1337</h2>
  <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9); font-size: 1.1em;">Puerto del servidor de IA local Jan</p>
  <a href="http://localhost:1337" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3); transition: all 0.3s ease; border: none;">
    💠 Abrir localhost:1337
  </a>
  <p style="margin: 15px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;">
    Accede a tu servidor de modelos Jan en el puerto 1337
  </p>
</div>

**Localhost:1337** es el puerto por defecto de **Jan**, una alternativa de código abierto a ChatGPT centrada en la privacidad que funciona 100 % sin conexión en cualquier equipo Windows, Mac o Linux. El número «1337» (que en leet se lee «leet», de «elite») es un guiño a la cultura hacker y hace que el endpoint sea fácil de recordar.

Jan expone de forma nativa una API equivalente a la de OpenAI. Levanta un servidor local en el puerto 1337 con la misma estructura que `api.openai.com/v1`, así que conectar Jan a aplicaciones pensadas para ChatGPT es tan sencillo como cambiar la URL base.

---

## Acceder a localhost:1337 desde otros dispositivos

Usa un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} para compartir tu servidor de Jan:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:1337 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:1337 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:1337 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:1337 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Así otras aplicaciones en redes ajenas pueden comunicarse de forma segura con tus modelos de Jan.

---

## Servicios y programas que usan el puerto 1337

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">💠 Ecosistema Jan AI</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://jan.ai/" >}}Jan Desktop{{< /link >}}</strong>: la interfaz principal y el servidor del motor de IA</li>
<li><strong>API de Jan</strong>: el endpoint local compatible con OpenAI</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🕹️ Usos históricos y generales</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>Servidores de juego</strong>: habitual en configuraciones de juegos antiguos</li>
<li><strong>Clientes P2P varios</strong>: puerto alternativo tradicional</li>
</ul>
</div>

</div>

Cuando Jan arranca su servidor de inferencia, basta con cambiar el endpoint de tus herramientas de Python o Node a `http://localhost:1337/v1` para que el tráfico vaya a tu máquina sin conexión en lugar de a los servidores de OpenAI.

---

## Cómo resolver problemas con localhost:1337

Si no consigues acceder a `localhost:1337`, así puedes diagnosticar y solucionar los fallos más comunes del servidor de Jan:

<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #856404; margin: 0 0 15px 0;">🔍 Paso 1: comprueba que Jan está en marcha</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> confirma que la aplicación Jan está activa.</p>
<p style="margin: 0;"><strong>Cómo comprobarlo:</strong> asegúrate de que la aplicación de escritorio está abierta y de que el servidor de API local está activado en sus ajustes.</p>
</div>

<div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #0c5460; margin: 0 0 15px 0;">🚫 Paso 2: resuelve los conflictos de puerto</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> asegúrate de que ningún otro programa está usando el puerto 1337.</p>
<p style="margin: 0;"><strong>Cómo arreglarlo:</strong> usa <code>lsof -i :1337</code> (macOS/Linux) o <code>netstat -ano | findstr :1337</code> (Windows) para ver si otro proceso tiene el puerto.</p>
</div>

<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #155724; margin: 0 0 15px 0;">🌐 Paso 3: prueba la conexión</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> verifica que la API local responde.</p>
<p style="margin: 0;"><strong>Cómo probarlo:</strong> ejecuta <code>curl http://localhost:1337/v1/models</code> y comprueba si devuelve una lista de modelos.</p>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:1337` y cómo resolverlos:

<div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 25px 0;">

<div style="background: #fff; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e74c3c; margin: 0 0 10px 0;">❌ Error «Connection Refused»</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> el servidor de API de Jan está apagado.</p>
<p style="margin: 0;"><strong>Solución:</strong> abre Jan Desktop y comprueba que el servidor de API local está activado en los ajustes.</p>
</div>

<div style="background: #fff; border-left: 4px solid #f39c12; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ Error «Port Already in Use»</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> otra aplicación está ocupando el puerto 1337.</p>
<p style="margin: 0;"><strong>Solución:</strong> localiza el proceso en conflicto (suele ser un servidor de desarrollo o de juego) y ciérralo, o configura Jan para usar otro puerto.</p>
</div>

<div style="background: #fff; border-left: 4px solid #9b59b6; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #9b59b6; margin: 0 0 10px 0;">🤖 El modelo no carga</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> la API responde, pero las peticiones caducan o no generan nada.</p>
<p style="margin: 0;"><strong>Solución:</strong> asegúrate de haber descargado un modelo y de tenerlo cargado en memoria en Jan antes de lanzar peticiones.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:1337` es el puerto por defecto del LLM local sin conexión Jan.
* **Quién lo usa**: ingenieros de IA que prueban modelos de código abierto reutilizando sus integraciones con el SDK de OpenAI.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
<h3 style="margin: 0 0 15px 0; font-size: 1.4em;">🚀 Comandos rápidos</h3>
<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin: 15px 0;">
<code style="display: block; color: #fff; font-size: 14px; line-height: 1.6;">
# Conectar el SDK de OpenAI a Jan<br>
export OPENAI_API_BASE="http://localhost:1337/v1"
</code>
</div>
</div>
