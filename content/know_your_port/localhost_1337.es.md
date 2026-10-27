---
title: "localhost:1337 - Guía del puerto de la IA local Jan"
description: "Guía completa de localhost:1337 - el puerto por defecto de Jan, una alternativa de código abierto a ChatGPT que funciona totalmente sin conexión."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "jan", "llm", "ai", "offline"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:1337</p>
  <p class="kyp-hero__sub">Puerto del servidor de IA local Jan</p>
  <a href="http://localhost:1337" target="_blank" class="kyp-hero__btn">
    Abrir localhost:1337
  </a>
  <p class="kyp-hero__note">
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

La API de Jan rechaza las peticiones cuya cabecera `Host` no sea `localhost`, una IP local o una entrada de su ajuste Trusted Hosts (`403 Invalid host header`), así que reescribe la cabecera al crear el túnel: `ssh -p 443 -R0:localhost:1337 -t free.pinggy.io "u:Host:localhost:1337"`.

---

## Servicios y programas que usan el puerto 1337

<div class="kyp-grid">

<div class="kyp-card">
<h3>Ecosistema Jan AI</h3>
<ul>
<li><strong>{{< link href="https://jan.ai/" >}}Jan Desktop{{< /link >}}</strong>: la interfaz principal y el servidor del motor de IA</li>
<li><strong>API de Jan</strong>: el endpoint local compatible con OpenAI</li>
</ul>
</div>

<div class="kyp-card">
<h3>Usos históricos y generales</h3>
<ul>
<li><strong>Servidores de juego</strong>: habitual en configuraciones de juegos antiguos</li>
<li><strong>Clientes P2P varios</strong>: puerto alternativo tradicional</li>
</ul>
</div>

</div>

Cuando Jan arranca su servidor de inferencia, basta con cambiar el endpoint de tus herramientas de Python o Node a `http://localhost:1337/v1` para que el tráfico vaya a tu máquina sin conexión en lugar de a los servidores de OpenAI.

---

## Cómo resolver problemas con localhost:1337

Si no consigues acceder a `localhost:1337`, así puedes diagnosticar y solucionar los fallos más comunes del servidor de Jan:

<div class="kyp-step">
<h3>Paso 1: comprueba que Jan está en marcha</h3>
<p><strong>Acción:</strong> confirma que la aplicación Jan está activa.</p>
<p><strong>Cómo comprobarlo:</strong> asegúrate de que la aplicación de escritorio está abierta y de que el servidor de API local está activado en sus ajustes.</p>
</div>

<div class="kyp-step">
<h3>Paso 2: resuelve los conflictos de puerto</h3>
<p><strong>Acción:</strong> asegúrate de que ningún otro programa está usando el puerto 1337.</p>
<p><strong>Cómo arreglarlo:</strong> usa <code>lsof -i :1337</code> (macOS/Linux) o <code>netstat -ano | findstr :1337</code> (Windows) para ver si otro proceso tiene el puerto.</p>
</div>

<div class="kyp-step">
<h3>Paso 3: prueba la conexión</h3>
<p><strong>Acción:</strong> verifica que la API local responde.</p>
<p><strong>Cómo probarlo:</strong> ejecuta <code>curl http://localhost:1337/v1/models</code> y comprueba si devuelve una lista de modelos. Si has configurado una clave de API en Jan, añade <code>-H "Authorization: Bearer YOUR_API_KEY"</code>; si no, recibirás <code>401 Unauthorized</code>.</p>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:1337` y cómo resolverlos:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>Error «Connection Refused»</h3>
<p><strong>Problema:</strong> el servidor de API de Jan está apagado.</p>
<p><strong>Solución:</strong> abre Jan Desktop y comprueba que el servidor de API local está activado en los ajustes.</p>
</div>

<div class="kyp-problem">
<h3>Error «Port Already in Use»</h3>
<p><strong>Problema:</strong> otra aplicación está ocupando el puerto 1337.</p>
<p><strong>Solución:</strong> localiza el proceso en conflicto (suele ser un servidor de desarrollo o de juego) y ciérralo, o configura Jan para usar otro puerto.</p>
</div>

<div class="kyp-problem">
<h3>El modelo no carga</h3>
<p><strong>Problema:</strong> la API responde, pero las peticiones caducan o no generan nada.</p>
<p><strong>Solución:</strong> asegúrate de haber descargado un modelo y de tenerlo cargado en memoria en Jan antes de lanzar peticiones.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:1337` es el puerto por defecto del LLM local sin conexión Jan.
* **Quién lo usa**: ingenieros de IA que prueban modelos de código abierto reutilizando sus integraciones con el SDK de OpenAI.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Conectar el SDK de OpenAI a Jan<br>
export OPENAI_BASE_URL="http://localhost:1337/v1"
</code>
</div>
</div>
