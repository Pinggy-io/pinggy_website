---
title: "localhost:11434 - Guía del puerto de los LLM locales de Ollama"
description: "Guía completa de localhost:11434 - el puerto por defecto de Ollama, la conocida herramienta de código abierto para ejecutar LLMs en local."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "ollama", "llm", "ai", "development"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:11434</p>
  <p class="kyp-hero__sub">Puerto del servidor de API de Ollama</p>
  <a href="http://localhost:11434" target="_blank" class="kyp-hero__btn">
    Abrir localhost:11434
  </a>
  <p class="kyp-hero__note">
    Accede a tu instancia local de Ollama en el puerto 11434
  </p>
</div>

**Localhost:11434** es el puerto por defecto de **Ollama**, una herramienta de código abierto muy popular que permite ejecutar, crear y compartir modelos de lenguaje grandes (LLM) en local. «Localhost» es tu propio ordenador (normalmente la IP `127.0.0.1`) y «11434» es el puerto donde el servidor de API de Ollama espera conexiones. Esta combinación es el pan de cada día de quien desarrolla IA local con modelos como Llama 3, Mistral o DeepSeek.

El puerto 11434 es la puerta de entrada para hablar con tus LLM locales. Otras interfaces se conectan a esta API de tu máquina para ofrecer un chat completo sobre tus modelos sin enviar tus datos a servidores externos.

---

## Acceder a localhost:11434 desde otros dispositivos

Si no consigues llegar a localhost:11434 desde otros dispositivos, seguramente sea porque estás en otra red. Usa un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} para acceder desde cualquier sitio:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11434 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11434 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11434 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11434 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Este comando crea un túnel seguro que reenvía el tráfico de una URL pública a tu API local de Ollama, lo que te permite:
- **Usar tus modelos locales** en remoto desde el móvil o el portátil
- **Integrar herramientas de IA** sin pagar GPUs en la nube
- **Crear aplicaciones** con un endpoint externo seguro para tu backend de IA local

Ollama responde con `403 Forbidden` a cualquier petición cuya cabecera `Host` no sea un nombre local como `localhost`, así que, para llamar a la API a través del túnel, reescribe la cabecera: `ssh -p 443 -R0:localhost:11434 -t free.pinggy.io "u:Host:localhost:11434"`.

---

## Servicios y programas que usan el puerto 11434

El puerto 11434 está muy arraigado en el ecosistema de IA local. Estas son las aplicaciones principales que se conectan a él:

<div class="kyp-grid">

<div class="kyp-card">
<h3>Motor de IA principal</h3>
<ul>
<li><strong>{{< link href="https://ollama.com/" >}}API de Ollama{{< /link >}}</strong>: el servidor principal para gestionar LLM locales</li>
<li><strong>CLI de Ollama</strong>: herramienta para descargar y ejecutar modelos a mano</li>
</ul>
</div>

<div class="kyp-card">
<h3>Clientes de IA</h3>
<ul>
<li><strong>{{< link href="https://openwebui.com/" >}}Open WebUI{{< /link >}}</strong>: se conecta al 11434 para la inferencia</li>
<li><strong>{{< link href="https://lobehub.com/" >}}LobeHub{{< /link >}}</strong>: antes LobeChat, interfaz moderna que conecta con Ollama</li>
<li><strong>{{< link href="https://anythingllm.com/" >}}AnythingLLM{{< /link >}}</strong>: usa los modelos de Ollama de forma nativa</li>
</ul>
</div>

</div>

Cuando arrancas Ollama, este levanta su servidor en segundo plano y escucha en el puerto 11434. Enviando una petición HTTP a `http://localhost:11434/api/generate`, otros programas pueden consultar los modelos que tengas descargados.

---

## Cómo resolver problemas con localhost:11434

Si no consigues acceder a `localhost:11434`, así puedes diagnosticar y solucionar los fallos más comunes del servidor de Ollama:

<div class="kyp-step">
<h3>Paso 1: comprueba que el servidor está en marcha</h3>
<p><strong>Acción:</strong> confirma que tu servidor de Ollama está activo.</p>
<p><strong>Cómo comprobarlo:</strong> ejecuta <code>ollama serve</code> en la terminal o asegúrate de que la aplicación de escritorio está abierta.</p>
</div>

<div class="kyp-step">
<h3>Paso 2: resuelve los conflictos de puerto</h3>
<p><strong>Acción:</strong> asegúrate de que ningún otro programa está usando el puerto 11434.</p>
<p><strong>Cómo arreglarlo:</strong> usa <code>lsof -i :11434</code> (macOS/Linux) o <code>netstat -ano | findstr :11434</code> (Windows) para ver si otro proceso se ha quedado con el puerto.</p>
</div>

<div class="kyp-step">
<h3>Paso 3: prueba la conexión</h3>
<p><strong>Acción:</strong> verifica que el servidor responde.</p>
<p><strong>Cómo probarlo:</strong> abre <code>http://localhost:11434</code> en el navegador. Deberías ver un mensaje sencillo que dice «Ollama is running».</p>
</div>

---

## Problemas habituales y sus soluciones

<div class="kyp-problems">

<div class="kyp-problem">
<h3>No aparece el texto «ollama is running»</h3>
<p><strong>Problema:</strong> localhost no carga.</p>
<p><strong>Solución:</strong> lo más probable es que Ollama se haya parado. Reinicia la aplicación o ejecuta <code>ollama serve</code> en la terminal.</p>
</div>

<div class="kyp-problem">
<h3>Errores de CORS</h3>
<p><strong>Problema:</strong> una interfaz web rechaza la conexión.</p>
<p><strong>Solución:</strong> define la variable de entorno <code>OLLAMA_ORIGINS="*"</code> antes de arrancar el servidor.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:11434` es el puerto por defecto de la API de LLM locales de Ollama.
* **Quién lo usa**: desarrolladores y aficionados a la IA que ejecutan modelos de código abierto en su propio hardware.
* **Resolución de problemas**: comprueba si la aplicación está corriendo en segundo plano, que no haya puertos solapados y configura CORS si hace falta.
* **Soluciones habituales**: reinicia el servicio de Ollama para que recupere el puerto 11434.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Arrancar el servidor de Ollama<br>
ollama serve<br><br>
# Descargar y probar un modelo<br>
ollama run gemma4
</code>
</div>
</div>
