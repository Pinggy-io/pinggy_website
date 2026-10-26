---
title: "localhost:11501 - Guía del puerto de la aplicación Khajane 2 (K2) de Tesorería"
description: "Guía completa de https://localhost:11501 - el puerto local que usa la aplicación de escritorio Khajane 2 (K2) del Departamento de Tesorería de Karnataka, con soluciones para avisos de certificado y errores de conexión."
date: 2026-10-24T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "khajane2", "dsc", "https"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:11501</p>
  <p class="kyp-hero__sub">Puerto de la aplicación local Khajane 2 (K2)</p>
  <a href="https://localhost:11501" target="_blank" class="kyp-hero__btn">
    Abrir https://localhost:11501
  </a>
  <p class="kyp-hero__note">
    Abre la aplicación Khajane 2 que se ejecuta en este ordenador. Fíjate en el https://
  </p>
</div>

**Localhost:11501** es el puerto que usa la aplicación de escritorio **Khajane II (K2)**. K2 es el Sistema Integrado de Gestión Financiera del Gobierno de Karnataka (India), gestionado por el {{< link href="https://khajane.karnataka.gov.in/" >}}Departamento de Tesorería{{< /link >}}, y es lo que usan los responsables de pagos (DDO, *drawing and disbursing officers*) y el personal de tesorería para preparar facturas y el resto del trabajo de tesorería. El instalador, que aparece como «Khajane II Application» de «DOT - Government of Karnataka», levanta un pequeño servidor HTTPS en tu PC en `https://localhost:11501`.

¿Por qué necesita un portal web un programa en tu PC? Una página web no puede hablar por sí sola con hardware USB como un token de certificado de firma digital (DSC), así que los portales públicos que necesitan firmar suelen incluir un pequeño programa local al que la página llama a través de `localhost`. El Departamento de Tesorería indica que hace falta un DSC para trabajar en K2 y que el registro biométrico es obligatorio para todos los usuarios de K2.

Hay dos cosas que confunden a casi todo el mundo:

- **Es `https://`, no `http://`.** Si escribes `http://localhost:11501`, no funciona.
- **El certificado es autofirmado.** La primera vez, el navegador mostrará el aviso «La conexión no es privada». En tu propio ordenador, y para esta aplicación, es lo esperado.

---

## ¿Se puede abrir localhost:11501 desde otro dispositivo?

No, y con K2 no deberías intentarlo. `localhost` significa «este ordenador», así que la aplicación K2 tiene que ejecutarse en el mismo PC que tu navegador y tu token DSC. Si abres `localhost:11501` en el móvil, el navegador busca la aplicación en el móvil, donde no existe.

Tampoco expongas la aplicación K2 a internet con un túnel. Es el puente hacia tu token DSC, y una URL pública que apunta a ella es una URL pública que apunta a tu sistema de firma. Si necesitas K2 en otro ordenador, instala allí la aplicación K2 y el controlador de tu token.

### Si el 11501 es tu propia aplicación

El puerto 11501 no está reservado para K2. Si lo has elegido para tu propio servidor de desarrollo y quieres compartirlo, un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} le da una URL pública:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:11501 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:11501 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:11501 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:11501 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Sirve para enseñar a un compañero una aplicación a medio hacer, probarla en el móvil o recibir webhooks. Úsalo solo con aplicaciones que no te importe que cualquiera pueda abrir.

---

## Qué usa el puerto 11501

<div class="kyp-grid">

<div class="kyp-card">
<h3>Khajane II (K2)</h3>
<ul>
<li><strong>Khajane II Application</strong>: la aplicación para Windows del Departamento de Tesorería que sirve <code>https://localhost:11501</code></li>
<li><strong>Portal web de K2</strong>: el sitio de tesorería que tienes abierto en el navegador y que llama a la aplicación local</li>
</ul>
</div>

<div class="kyp-card">
<h3>Con qué trabaja K2</h3>
<ul>
<li><strong>Token USB DSC</strong>: tu certificado de firma digital, junto con el controlador del token de su fabricante</li>
<li><strong>Registro biométrico</strong>: se hace en persona en tu oficina de tesorería, como exige el departamento a todos los usuarios de K2</li>
</ul>
</div>

</div>

Consigue el instalador de K2 en la oficina de tesorería de tu distrito, no en una web de descargas de terceros. La aplicación tiene que estar instalada y en marcha para que cargue cualquier cosa en `https://localhost:11501`.

---

## Cómo resolver problemas con localhost:11501

Si `https://localhost:11501` no se abre, sigue estos pasos en orden:

<div class="kyp-step">
<h3>Paso 1: comprueba que la aplicación K2 está en marcha</h3>
<p><strong>Acción:</strong> abre la aplicación Khajane II desde el menú Inicio o su acceso directo del escritorio y espera unos segundos.</p>
<p><strong>Cómo comprobarlo:</strong> ejecuta <code>netstat -ano | findstr :11501</code> en el Símbolo del sistema. Si aparece una línea que termina en <code>LISTENING</code>, hay algo sirviendo el puerto.</p>
</div>

<div class="kyp-step">
<h3>Paso 2: usa https:// y acepta el certificado</h3>
<p><strong>Acción:</strong> abre <code>https://localhost:11501</code>, con la <code>s</code>.</p>
<p><strong>Cómo saltar el aviso:</strong> en Chrome o Edge, pulsa <em>Configuración avanzada</em> (o <em>Avanzado</em>) y después <em>Acceder a localhost (sitio no seguro)</em> o <em>Continuar a localhost (no seguro)</em>. En Firefox, pulsa <em>Avanzado</em> y después <em>Aceptar el riesgo y continuar</em>. Luego vuelve al portal de K2 y reinténtalo.</p>
</div>

<div class="kyp-step">
<h3>Paso 3: busca un conflicto de puerto</h3>
<p><strong>Acción:</strong> asegúrate de que el programa que ocupa el 11501 es realmente K2.</p>
<p><strong>Cómo comprobarlo:</strong> copia el PID de la última columna de la salida de <code>netstat</code> y ejecuta <code>tasklist /FI "PID eq &lt;pid&gt;"</code>. Si es otro programa, ciérralo y vuelve a abrir K2.</p>
</div>

---

## Problemas habituales y sus soluciones

<div class="kyp-problems">

<div class="kyp-problem">
<h3>«No se puede acceder a este sitio web» (ERR_CONNECTION_REFUSED)</h3>
<p><strong>Problema:</strong> no hay nada escuchando en el puerto 11501.</p>
<p><strong>Solución:</strong> la aplicación K2 no está en marcha o se ha cerrado. Vuelve a abrirla. Si se cierra al momento, comprueba si tu antivirus la ha puesto en cuarentena.</p>
</div>

<div class="kyp-problem">
<h3>«La conexión no es privada» (NET::ERR_CERT_AUTHORITY_INVALID)</h3>
<p><strong>Problema:</strong> el navegador no confía en el certificado autofirmado de K2.</p>
<p><strong>Solución:</strong> es lo esperado con la aplicación K2 en tu propio ordenador. Pulsa <em>Configuración avanzada</em> y continúa. Hazlo solo con <code>localhost</code>, nunca con un sitio de internet.</p>
</div>

<div class="kyp-problem">
<h3>Error 404 o página en blanco después de continuar</h3>
<p><strong>Problema:</strong> has aceptado el aviso y te sale un 404 o una página vacía.</p>
<p><strong>Solución:</strong> normalmente solo significa que la aplicación está en marcha y que el certificado ya está aceptado. La aplicación local no está pensada para navegar por ella, así que vuelve al portal de K2 y prueba otra vez.</p>
</div>

<div class="kyp-problem">
<h3>No se detecta el token DSC</h3>
<p><strong>Problema:</strong> K2 carga, pero la firma falla o no encuentra ningún certificado.</p>
<p><strong>Solución:</strong> instala el controlador de la marca de tu token, conecta el token directamente al PC (no a un hub) y comprueba que el certificado no ha caducado. Si sigue fallando, contacta con el servicio de ayuda de la tesorería de tu distrito.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `https://localhost:11501` es donde se ejecuta en tu PC la aplicación de escritorio Khajane II (K2) del Departamento de Tesorería de Karnataka.
* **Quién lo usa**: los DDO y el personal de tesorería que trabajan en K2 con un token DSC.
* **Resolución de problemas**: comprueba que la aplicación está en marcha, usa `https://` y acepta el aviso del certificado autofirmado.
* **Acceso remoto**: no lo expongas con un túnel. K2 tiene que ejecutarse en el mismo ordenador que tu navegador y tu token DSC.

<div class="kyp-quick">
<h3>Comandos de comprobación rápida (Windows)</h3>
<div class="kyp-quick__code">
<code>
# ¿Hay algo escuchando en el 11501?<br>
netstat -ano | findstr :11501<br><br>
# ¿Qué programa tiene ese PID?<br>
tasklist /FI "PID eq &lt;pid&gt;"<br><br>
# Abre la aplicación local de K2 en tu navegador predeterminado<br>
start https://localhost:11501
</code>
</div>
</div>
