---
title: "localhost:9090 - Guía del puerto de la interfaz web de Prometheus"
description: "Guía completa de localhost:9090 - el puerto por defecto de la interfaz web y la API HTTP de Prometheus, que también usan la consola de servidores Cockpit y la consola de administración de Openfire."
date: 2026-03-06T10:00:00+05:30
lastmod: 2026-10-25T10:00:00+05:30
draft: false
tags: ["localhost", "port", "prometheus", "monitoring", "devops", "dashboard"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:9090</p>
  <p class="kyp-hero__sub">Puerto de la interfaz web de Prometheus</p>
  <a href="http://localhost:9090" target="_blank" class="kyp-hero__btn">
    Abrir localhost:9090
  </a>
  <p class="kyp-hero__note">
    Accede a la interfaz de consultas y a la API HTTP de Prometheus en el puerto 9090
  </p>
</div>

**Localhost:9090** es el puerto por defecto de **Prometheus**, el sistema de monitorización y base de datos de series temporales de código abierto. Si lo abres en el navegador verás la interfaz web de Prometheus: la página de consultas PromQL con gráficas, y las páginas Targets, Alerts y Status. El mismo puerto sirve la API HTTP (`/api/v1/query`) y las métricas del propio Prometheus en `/metrics`.

El 9090 tiene otros inquilinos conocidos: **Cockpit**, la consola web de servidores Linux que incluyen Fedora y las distribuciones de la familia RHEL, y la consola de administración del servidor XMPP **Openfire**. Si buscabas el panel de **OpenClaw**, las versiones actuales de OpenClaw lo sirven en el puerto **18789** por defecto, no en el 9090.

---

## Acceder a localhost:9090 desde otros dispositivos

Usa un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} para compartir tu interfaz de Prometheus sin complicaciones:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:9090 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:9090 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:9090 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Esto expone la interfaz al instante. **Aviso:** Prometheus no pide inicio de sesión por defecto, así que cualquiera con la URL puede lanzar consultas y leer todas las métricas que recoges. Añade autenticación básica al túnel con `ssh -p 443 -R0:localhost:9090 -t free.pinggy.io b:username:password`, o define `basic_auth_users` en un `--web.config.file` de Prometheus.

---

## Servicios y programas que usan el puerto 9090

<div class="kyp-grid">

<div class="kyp-card">
<h3>Prometheus y monitorización</h3>
<ul>
<li><strong>{{< link href="https://prometheus.io/" >}}Prometheus{{< /link >}}</strong>: interfaz web, API HTTP y métricas propias, por defecto <code>--web.listen-address=":9090"</code></li>
<li><strong>{{< link href="https://github.com/prometheus/pushgateway" >}}Pushgateway{{< /link >}}</strong>: componente de Prometheus para trabajos de corta duración, con el 9091 como puerto por defecto (Alertmanager usa el 9093 y los exportadores empiezan en el 9100)</li>
</ul>
</div>

<div class="kyp-card">
<h3>Administración de servidores y otras aplicaciones</h3>
<ul>
<li><strong>{{< link href="https://cockpit-project.org/" >}}Cockpit{{< /link >}}</strong>: consola web de servidores Linux, escucha en el 9090 mediante <code>cockpit.socket</code></li>
<li><strong>{{< link href="https://www.igniterealtime.org/projects/openfire/" >}}Openfire{{< /link >}}</strong>: consola de administración del servidor XMPP en el 9090 (HTTP) y el 9091 (HTTPS)</li>
</ul>
</div>

</div>

¿Buscas {{< link href="https://openclaw.ai/" >}}OpenClaw{{< /link >}}? Su pasarela (que conecta aplicaciones de mensajería como Telegram o Discord con el LLM) y su panel usan el puerto 18789 por defecto. Solo escucha en el 9090 si la arrancas con `openclaw gateway --port 9090` o defines `gateway.port` en su configuración (o la variable de entorno `OPENCLAW_GATEWAY_PORT`); si no, abre `http://127.0.0.1:18789/` o ejecuta `openclaw dashboard`.

---

## Cómo resolver problemas con localhost:9090

<div class="kyp-step">
<h3>Paso 1: comprueba que Prometheus está en marcha</h3>
<p><strong>Acción:</strong> arráncalo con <code>./prometheus --config.file=prometheus.yml</code>, revisa <code>systemctl status prometheus</code> si lo instalaste con un paquete, o ejecútalo en Docker con <code>docker run -p 9090:9090 prom/prometheus</code>.</p>
</div>

<div class="kyp-step">
<h3>Paso 2: mira quién ocupa el puerto</h3>
<p><strong>Acción:</strong> ejecuta <code>lsof -i :9090</code> (macOS/Linux) o <code>netstat -ano | findstr :9090</code> (Windows). En Fedora o RHEL, muchas veces la respuesta es <code>systemd</code> con <code>cockpit.socket</code>, no Prometheus.</p>
</div>

<div class="kyp-step">
<h3>Paso 3: prueba la conexión</h3>
<p><strong>Acción:</strong> <code>curl http://localhost:9090/-/healthy</code> debería devolver <code>Prometheus Server is Healthy.</code> y <code>curl http://localhost:9090/-/ready</code> devuelve <code>Prometheus Server is Ready.</code> cuando ya puede atender consultas.</p>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:9090` y cómo resolverlos:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>Error «Connection Refused»</h3>
<p><strong>Problema:</strong> no consigues llegar a la interfaz de Prometheus.</p>
<p><strong>Solución:</strong> asegúrate de que Prometheus terminó de arrancar sin errores de configuración. En Docker hay que publicar el puerto con <code>-p 9090:9090</code>, y un <code>--web.listen-address</code> personalizado saca la interfaz del 9090.</p>
</div>

<div class="kyp-problem">
<h3>Error «bind: address already in use»</h3>
<p><strong>Problema:</strong> Prometheus se cierra al arrancar porque Cockpit u otra instancia de Prometheus ya ocupa el 9090. No cambia de puerto por su cuenta.</p>
<p><strong>Solución:</strong> usa <code>lsof -i :9090</code> para ver quién lo ocupa. Arranca Prometheus con <code>--web.listen-address=":9095"</code> o mueve Cockpit con <code>sudo systemctl edit cockpit.socket</code>. Evita el 9091, que es de Pushgateway (y de la consola HTTPS de Openfire).</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:9090` es el puerto por defecto de la interfaz web y la API HTTP de Prometheus, y también el de las consolas de administración de Cockpit y Openfire.
* **Resolución de problemas**: si el 9090 está ocupado, Prometheus falla con «address already in use» en lugar de cambiar de puerto. Localiza al responsable con `lsof -i :9090` y mueve uno de los servicios con `--web.listen-address`.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Ejecutar Prometheus en el puerto 9090<br>
docker run -p 9090:9090 prom/prometheus<br><br>
# Comprobar que está sano<br>
curl http://localhost:9090/-/healthy<br><br>
# Comprobar qué se está ejecutando en el 9090<br>
lsof -i :9090
</code>
</div>
</div>
