---
title: "localhost:11434 - Guía del puerto de los LLM locales de Ollama"
description: "Guía completa de localhost:11434 - el puerto por defecto de Ollama, la conocida herramienta de código abierto para ejecutar LLMs en local."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-08-01T10:00:00+05:30
draft: false
tags: ["localhost", "port", "ollama", "llm", "ai", "development"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
  <h2 style="margin: 0 0 15px 0; color: white; font-size: 2.2em;">localhost:11434</h2>
  <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9); font-size: 1.1em;">Puerto del servidor de API de Ollama</p>
  <a href="http://localhost:11434" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3); transition: all 0.3s ease; border: none;">
    🦙 Abrir localhost:11434
  </a>
  <p style="margin: 15px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;">
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

---

## Servicios y programas que usan el puerto 11434

El puerto 11434 está muy arraigado en el ecosistema de IA local. Estas son las aplicaciones principales que se conectan a él:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🦙 Motor de IA principal</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://ollama.com/" >}}API de Ollama{{< /link >}}</strong>: el servidor principal para gestionar LLM locales</li>
<li><strong>CLI de Ollama</strong>: herramienta para descargar y ejecutar modelos a mano</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🖥️ Clientes de IA</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://openwebui.com/" >}}Open WebUI{{< /link >}}</strong>: se conecta al 11434 para la inferencia</li>
<li><strong>{{< link href="https://lobechat.com/" >}}LobeChat{{< /link >}}</strong>: interfaz moderna que conecta con Ollama</li>
<li><strong>{{< link href="https://useanything.com/" >}}AnythingLLM{{< /link >}}</strong>: usa los modelos de Ollama de forma nativa</li>
</ul>
</div>

</div>

Cuando arrancas Ollama, este levanta su servidor en segundo plano y escucha en el puerto 11434. Enviando una petición HTTP a `http://localhost:11434/api/generate`, otros programas pueden consultar los modelos que tengas descargados.

---

## Cómo resolver problemas con localhost:11434

Si no consigues acceder a `localhost:11434`, así puedes diagnosticar y solucionar los fallos más comunes del servidor de Ollama:

<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #856404; margin: 0 0 15px 0;">🔍 Paso 1: comprueba que el servidor está en marcha</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> confirma que tu servidor de Ollama está activo.</p>
<p style="margin: 0;"><strong>Cómo comprobarlo:</strong> ejecuta <code>ollama serve</code> en la terminal o asegúrate de que la aplicación de escritorio está abierta.</p>
</div>

<div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #0c5460; margin: 0 0 15px 0;">🚫 Paso 2: resuelve los conflictos de puerto</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> asegúrate de que ningún otro programa está usando el puerto 11434.</p>
<p style="margin: 0;"><strong>Cómo arreglarlo:</strong> usa <code>lsof -i :11434</code> (macOS/Linux) o <code>netstat -ano | findstr :11434</code> (Windows) para ver si otro proceso se ha quedado con el puerto.</p>
</div>

<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #155724; margin: 0 0 15px 0;">🌐 Paso 3: prueba la conexión</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> verifica que el servidor responde.</p>
<p style="margin: 0;"><strong>Cómo probarlo:</strong> abre <code>http://localhost:11434</code> en el navegador. Deberías ver un mensaje sencillo que dice «Ollama is running».</p>
</div>

---

## Problemas habituales y sus soluciones

<div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 25px 0;">

<div style="background: #fff; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e74c3c; margin: 0 0 10px 0;">❌ No aparece el texto «ollama is running»</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> localhost no carga.</p>
<p style="margin: 0;"><strong>Solución:</strong> lo más probable es que Ollama se haya parado. Reinicia la aplicación o ejecuta <code>ollama serve</code> en la terminal.</p>
</div>

<div style="background: #fff; border-left: 4px solid #f39c12; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ Errores de CORS</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> una interfaz web rechaza la conexión.</p>
<p style="margin: 0;"><strong>Solución:</strong> define la variable de entorno <code>OLLAMA_ORIGINS="*"</code> antes de arrancar el servidor.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:11434` es el puerto por defecto de la API de LLM locales de Ollama.
* **Quién lo usa**: desarrolladores y aficionados a la IA que ejecutan modelos de código abierto en su propio hardware.
* **Resolución de problemas**: comprueba si la aplicación está corriendo en segundo plano, que no haya puertos solapados y configura CORS si hace falta.
* **Soluciones habituales**: reinicia el servicio de Ollama para que recupere el puerto 11434.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
<h3 style="margin: 0 0 15px 0; font-size: 1.4em;">🚀 Comandos rápidos</h3>
<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin: 15px 0;">
<code style="display: block; color: #fff; font-size: 14px; line-height: 1.6;">
# Arrancar el servidor de Ollama<br>
ollama serve<br><br>
# Descargar y probar un modelo<br>
ollama run llama3
</code>
</div>
</div>
