---
title: "localhost:9090 - Guía del puerto del panel y la interfaz web de OpenClaw"
description: "Guía completa de localhost:9090 - el puerto habitual del panel del agente de IA autónomo OpenClaw y del sistema de monitorización Prometheus."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-08-01T10:00:00+05:30
draft: false
tags: ["localhost", "port", "openclaw", "prometheus", "ai", "dashboard"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px;">
  <h2 style="margin: 0 0 15px 0; color: white; font-size: 2.2em;">localhost:9090 / 9091</h2>
  <p style="margin: 0 0 20px 0; color: rgba(255,255,255,0.9); font-size: 1.1em;">Puerto del panel de IA de OpenClaw</p>
  <a href="http://localhost:9090" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3); transition: all 0.3s ease; border: none;">
    🤖 Abrir localhost:9090
  </a>
  <p style="margin: 15px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;">
    Accede a tu panel de OpenClaw en el puerto 9090 o 9091
  </p>
</div>

**Localhost:9090** (y de vez en cuando el **9091**) es un puerto muy habitual en paneles de IA locales y pasarelas de monitorización. Sobre todo, es el puerto por defecto de la interfaz web del agente de IA autónomo **OpenClaw** y de su WebSocket Gateway. También es conocido entre los ingenieros de DevOps por ser el puerto por defecto del sistema de métricas **Prometheus**.

El puerto 9090 da a los desarrolladores una interfaz web cómoda para revisar los registros del agente, consultar estadísticas de monitorización o ajustar los límites del sistema sin pisar puertos más comunes del rango bajo, como el 8080 o el 3000.

---

## Acceder a localhost:9090 desde otros dispositivos

Usa un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} para compartir tu panel sin complicaciones:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:9090 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Esto expone la interfaz al instante. **Aviso:** si estás ejecutando un agente de IA o un portal de base de datos, activa la autenticación antes de exponerlo a Internet.

---

## Servicios y programas que usan el puerto 9090

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 25px 0;">

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">🤖 IA y aplicaciones locales</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://openclaw.ai/" >}}OpenClaw AI{{< /link >}}</strong>: interfaz web y pasarela WebSocket del agente local</li>
<li><strong>Cockpit</strong>: gestor de servidores que suele usar el 9090</li>
</ul>
</div>

<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
<h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 1.3em;">📊 DevOps y monitorización</h3>
<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
<li><strong>{{< link href="https://prometheus.io/" >}}Prometheus{{< /link >}}</strong>: la principal base de datos de series temporales y monitorización</li>
<li><strong>Exportadores varios</strong>: suelen usar el 9091 o el 9090</li>
</ul>
</div>

</div>

Con OpenClaw, la pasarela de IA escucha en el puerto 9090 para conectar las aplicaciones de mensajería (como Telegram o Discord) con los modelos LLM subyacentes.

---

## Cómo resolver problemas con localhost:9090

<div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #856404; margin: 0 0 15px 0;">🔍 Paso 1: comprueba que el servidor local está activo</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> confirma que OpenClaw (o Prometheus) está en marcha.</p>
</div>

<div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #0c5460; margin: 0 0 15px 0;">🚫 Paso 2: prueba con el puerto 9091</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> si el 9090 falla, puede que el servidor haya cambiado automáticamente al 9091. Abre <code>http://localhost:9091</code></p>
</div>

<div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h3 style="color: #155724; margin: 0 0 15px 0;">🌐 Paso 3: prueba la conexión</h3>
<p style="margin: 0 0 10px 0;"><strong>Acción:</strong> lanza un curl sencillo, <code>curl http://localhost:9090</code>, para revisar las cabeceras.</p>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:9090` y cómo resolverlos:

<div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 25px 0;">

<div style="background: #fff; border-left: 4px solid #e74c3c; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #e74c3c; margin: 0 0 10px 0;">❌ Error «Connection Refused»</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> no consigues llegar al panel.</p>
<p style="margin: 0;"><strong>Solución:</strong> asegúrate de que tu servidor terminó de arrancar en la terminal sin errores.</p>
</div>

<div style="background: #fff; border-left: 4px solid #f39c12; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<h3 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ Error «Port Already in Use»</h3>
<p style="margin: 0 0 10px 0;"><strong>Problema:</strong> puede que OpenClaw y Prometheus estén chocando.</p>
<p style="margin: 0;"><strong>Solución:</strong> usa <code>lsof -i :9090</code> para comprobarlo. Cambia la configuración de uno de los dos al <code>9091</code> para resolver el conflicto.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:9090` y `9091` los usan sobre todo interfaces web de paneles de IA y herramientas de monitorización de DevOps.
* **Resolución de problemas**: si el 9090 da conflicto (algo habitual por culpa de Prometheus), la aplicación suele intentar el `9091` automáticamente. Revisa qué procesos tienen los puertos abiertos si fallan los dos.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;">
<h3 style="margin: 0 0 15px 0; font-size: 1.4em;">🚀 Comandos rápidos</h3>
<div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin: 15px 0;">
<code style="display: block; color: #fff; font-size: 14px; line-height: 1.6;">
# Comprobar qué se está ejecutando en el 9090<br>
lsof -i :9090
</code>
</div>
</div>
