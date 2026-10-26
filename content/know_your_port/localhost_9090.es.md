---
title: "localhost:9090 - Guía del puerto del panel y la interfaz web de OpenClaw"
description: "Guía completa de localhost:9090 - el puerto habitual del panel del agente de IA autónomo OpenClaw y del sistema de monitorización Prometheus."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "openclaw", "prometheus", "ai", "dashboard"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:9090 / 9091</p>
  <p class="kyp-hero__sub">Puerto del panel de IA de OpenClaw</p>
  <a href="http://localhost:9090" target="_blank" class="kyp-hero__btn">
    Abrir localhost:9090
  </a>
  <p class="kyp-hero__note">
    Accede a tu panel de OpenClaw en el puerto 9090 o 9091
  </p>
</div>

**Localhost:9090** (y de vez en cuando el **9091**) es un puerto muy habitual en paneles de IA locales y pasarelas de monitorización. Si buscas la interfaz web del agente de IA autónomo **OpenClaw** y su WebSocket Gateway, ten en cuenta que las versiones actuales de OpenClaw sirven ambas en el puerto **18789** por defecto, no en el 9090. También es conocido entre los ingenieros de DevOps por ser el puerto por defecto del sistema de métricas **Prometheus**.

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

<div class="kyp-grid">

<div class="kyp-card">
<h3>IA y aplicaciones locales</h3>
<ul>
<li><strong>{{< link href="https://openclaw.ai/" >}}OpenClaw AI{{< /link >}}</strong>: interfaz web y pasarela WebSocket del agente local</li>
<li><strong>Cockpit</strong>: gestor de servidores que suele usar el 9090</li>
</ul>
</div>

<div class="kyp-card">
<h3>DevOps y monitorización</h3>
<ul>
<li><strong>{{< link href="https://prometheus.io/" >}}Prometheus{{< /link >}}</strong>: la principal base de datos de series temporales y monitorización</li>
<li><strong>{{< link href="https://github.com/prometheus/pushgateway" >}}Pushgateway{{< /link >}}</strong>: componente de Prometheus para trabajos de corta duración, con el 9091 como puerto por defecto (los exportadores empiezan en el 9100)</li>
</ul>
</div>

</div>

La pasarela de OpenClaw conecta las aplicaciones de mensajería (como Telegram o Discord) con los modelos LLM subyacentes. Solo escucha en el 9090 si la arrancas con `openclaw gateway --port 9090` o defines `gateway.port` en su configuración (o la variable de entorno `OPENCLAW_GATEWAY_PORT`); si no, abre `http://127.0.0.1:18789/` o ejecuta `openclaw dashboard`.

---

## Cómo resolver problemas con localhost:9090

<div class="kyp-step">
<h3>Paso 1: comprueba que el servidor local está activo</h3>
<p><strong>Acción:</strong> confirma que OpenClaw (o Prometheus) está en marcha.</p>
</div>

<div class="kyp-step">
<h3>Paso 2: prueba con el puerto 9091</h3>
<p><strong>Acción:</strong> si el 9090 falla, puede que el servidor haya cambiado automáticamente al 9091. Abre <code>http://localhost:9091</code></p>
</div>

<div class="kyp-step">
<h3>Paso 3: prueba la conexión</h3>
<p><strong>Acción:</strong> lanza un curl sencillo, <code>curl http://localhost:9090</code>, para revisar las cabeceras. En Prometheus, <code>curl http://localhost:9090/-/healthy</code> debería devolver <code>Prometheus Server is Healthy.</code></p>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:9090` y cómo resolverlos:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>Error «Connection Refused»</h3>
<p><strong>Problema:</strong> no consigues llegar al panel.</p>
<p><strong>Solución:</strong> asegúrate de que tu servidor terminó de arrancar en la terminal sin errores.</p>
</div>

<div class="kyp-problem">
<h3>Error «Port Already in Use»</h3>
<p><strong>Problema:</strong> puede que OpenClaw y Prometheus estén chocando.</p>
<p><strong>Solución:</strong> usa <code>lsof -i :9090</code> para comprobarlo. Cambia la configuración de uno de los dos al <code>9091</code> para resolver el conflicto.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:9090` y `9091` los usan sobre todo interfaces web de paneles de IA y herramientas de monitorización de DevOps.
* **Resolución de problemas**: si el 9090 da conflicto (algo habitual por culpa de Prometheus), la aplicación suele intentar el `9091` automáticamente. Revisa qué procesos tienen los puertos abiertos si fallan los dos.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Comprobar qué se está ejecutando en el 9090<br>
lsof -i :9090
</code>
</div>
</div>
