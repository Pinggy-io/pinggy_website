---
title: "localhost:4200 - Guía del puerto del servidor de desarrollo de Angular"
description: "Guía completa de localhost:4200 - el puerto por defecto del servidor de desarrollo de Angular, usado por Angular CLI."
date: 2025-01-30T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "angular", "frontend", "development", "cli"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:4200</p>
  <p class="kyp-hero__sub">Puerto del servidor de desarrollo de Angular</p>
  <a href="http://localhost:4200" target="_blank" class="kyp-hero__btn">
    Abrir localhost:4200
  </a>
  <p class="kyp-hero__note">
    Accede a tu servidor de desarrollo de Angular con recarga automática
  </p>
</div>

**Localhost:4200** es el puerto por defecto del servidor de desarrollo de Angular, que usa en exclusiva Angular CLI para servir aplicaciones mientras desarrollas. «Localhost» es tu propio ordenador (normalmente la IP `127.0.0.1`) y «4200» es el puerto característico de Angular. Si ves localhost:4200, estás ante una aplicación de Angular en modo desarrollo.

El equipo de Angular eligió el 4200 como puerto por defecto para evitar choques con otros puertos de desarrollo habituales. Angular CLI arranca ahí el servidor automáticamente al ejecutar `ng serve`, con recarga automática, reemplazo de módulos en caliente y una experiencia de desarrollo optimizada.

---

## Acceder a localhost:4200 desde otros dispositivos

Si no consigues llegar a localhost:4200 desde otros dispositivos, seguramente sea porque estás en otra red. Usa un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} para acceder desde cualquier sitio:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:4200 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:4200 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:4200 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:4200 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:4200 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:4200 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:4200 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:4200 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:4200 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Este comando crea un túnel seguro que reenvía el tráfico de una URL pública a tu servidor de Angular en el puerto 4200, lo que te permite:
- **Compartir tu aplicación de Angular** con compañeros o clientes
- **Probarla en el móvil** sin estar en la misma red
- **Enseñar tu aplicación** desde cualquier parte del mundo
- **Depurar errores** en distintos dispositivos y navegadores

El túnel te da una URL pública que puedes compartir, de modo que tu aplicación en localhost:4200 queda accesible desde cualquier dispositivo con conexión.

---

## Servicios y programas que usan el puerto 4200

El puerto 4200 se asocia sobre todo al desarrollo con Angular, aunque también lo usan herramientas de su ecosistema. Estas son las principales:

<div class="kyp-grid">

<div class="kyp-card">
<h3>Framework Angular</h3>
<ul>
<li><strong>{{< link href="https://angular.dev/" >}}Angular CLI{{< /link >}}</strong>: puerto por defecto del servidor de desarrollo</li>
<li><strong>Aplicaciones de {{< link href="https://angular.dev/" >}}Angular{{< /link >}}</strong>: aplicaciones de una sola página hechas con Angular</li>
<li><strong>{{< link href="https://angular.dev/guide/ssr" >}}Angular SSR{{< /link >}}</strong>: desarrollo con renderizado en servidor (antes Angular Universal)</li>
<li><strong>{{< link href="https://nx.dev/" >}}Nx Workspace{{< /link >}}</strong>: aplicaciones de Angular en monorepos Nx</li>
<li><strong>{{< link href="https://www.angularjs.org/" >}}AngularJS{{< /link >}} (heredado)</strong>: aplicaciones antiguas de AngularJS</li>
</ul>
</div>

<div class="kyp-card">
<h3>Herramientas de desarrollo</h3>
<ul>
<li><strong>Servidor de {{< link href="https://angular.dev/cli" >}}Angular CLI{{< /link >}}</strong>: el servidor de desarrollo principal</li>
<li><strong>Servidor de desarrollo de {{< link href="https://vite.dev/" >}}Vite{{< /link >}}</strong>: lo que usa <code>ng serve</code> por debajo con el constructor de aplicaciones basado en esbuild, el que viene por defecto (el antiguo constructor de webpack está obsoleto)</li>
<li><strong>{{< link href="https://storybook.js.org/" >}}Storybook{{< /link >}} (configurado)</strong>: entorno de desarrollo de componentes</li>
<li><strong>{{< link href="https://karma-runner.github.io/" >}}Karma{{< /link >}}</strong>: el ejecutor de pruebas de Angular</li>
<li><strong>{{< link href="https://www.protractortest.org/" >}}Protractor{{< /link >}} (obsoleto)</strong>: framework de pruebas de extremo a extremo</li>
</ul>
</div>

<div class="kyp-card">
<h3>Aplicaciones de Angular</h3>
<ul>
<li><strong>Aplicaciones de una sola página</strong>: SPAs hechas con {{< link href="https://angular.dev/" >}}Angular{{< /link >}}</li>
<li><strong>Aplicaciones web progresivas</strong>: PWAs con el {{< link href="https://angular.dev/ecosystem/service-workers" >}}service worker de Angular{{< /link >}}</li>
<li><strong>Aplicaciones en {{< link href="https://www.typescriptlang.org/" >}}TypeScript{{< /link >}}</strong>: el lenguaje por defecto de Angular</li>
<li><strong>Aplicaciones empresariales</strong>: proyectos grandes hechos con Angular</li>
<li><strong>Aplicaciones móviles</strong>: apps de {{< link href="https://ionicframework.com/" >}}Ionic{{< /link >}} con Angular</li>
</ul>
</div>

<div class="kyp-card">
<h3>Librerías de interfaz</h3>
<ul>
<li><strong>{{< link href="https://material.angular.dev/" >}}Angular Material{{< /link >}}</strong>: componentes de Material Design para Angular</li>
<li><strong>{{< link href="https://ng-bootstrap.github.io/" >}}ng-bootstrap{{< /link >}}</strong>: componentes de Bootstrap para Angular</li>
<li><strong>{{< link href="https://primeng.dev/" >}}PrimeNG{{< /link >}}</strong>: componentes de interfaz avanzados para Angular</li>
<li><strong>{{< link href="https://ng.ant.design/" >}}NG-ZORRO{{< /link >}}</strong>: componentes de Ant Design para Angular</li>
<li><strong>{{< link href="https://clarity.design/" >}}Clarity Design{{< /link >}}</strong>: el sistema de diseño de VMware para Angular</li>
</ul>
</div>

</div>

Cuando ejecutas `ng serve` en un proyecto de Angular, el servidor arranca automáticamente en el puerto 4200 y queda disponible en http://localhost:4200/. Ofrece recarga automática, reemplazo de módulos en caliente y compilaciones optimizadas para desarrollo.

---

## Cómo resolver problemas con localhost:4200

Si no consigues acceder a `localhost:4200`, así puedes diagnosticar y solucionar los fallos más comunes:

<div class="kyp-step">
<h3>Paso 1: comprueba que el servidor de Angular está en marcha</h3>
<p><strong>Acción:</strong> confirma que el servidor está activo y escuchando en el puerto 4200.</p>
<p><strong>Cómo comprobarlo:</strong></p>
<ul>
<li><strong>Arranca Angular:</strong> <code>ng serve</code> o <code>npm start</code></li>
<li><strong>Mira la terminal:</strong> busca el mensaje «Local: http://localhost:4200/»</li>
<li><strong>Verifica Angular CLI:</strong> <code>ng version</code></li>
<li><strong>Revisa el directorio:</strong> asegúrate de estar dentro de un proyecto de Angular</li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 2: resuelve los conflictos de puerto</h3>
<p><strong>Acción:</strong> asegúrate de que ninguna otra aplicación está usando el puerto 4200.</p>
<p><strong>Cómo arreglarlo:</strong></p>
<ul>
<li><strong>Localiza el proceso:</strong> <code>lsof -i :4200</code> (Linux/macOS) o <code>netstat -ano | findstr :4200</code> (Windows)</li>
<li><strong>Párale:</strong> <code>kill -9 &lt;PID&gt;</code></li>
<li><strong>Usa otro puerto:</strong> <code>ng serve --port 4201</code></li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 3: corrige la configuración de Angular</h3>
<p><strong>Acción:</strong> resuelve los problemas de configuración o de dependencias del proyecto.</p>
<p><strong>Cómo arreglarlo:</strong></p>
<ul>
<li><strong>Instala las dependencias:</strong> <code>npm install</code> o <code>yarn install</code></li>
<li><strong>Revisa angular.json:</strong> comprueba la configuración del proyecto</li>
<li><strong>Limpia la caché:</strong> <code>ng cache clean</code> (borra la caché en disco de la CLI, en <code>.angular/cache</code>)</li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 4: prueba la conexión</h3>
<p><strong>Acción:</strong> verifica que el servidor responde.</p>
<p><strong>Cómo probarlo:</strong></p>
<ul>
<li><strong>Navegador:</strong> abre <code>http://localhost:4200</code></li>
<li><strong>Terminal:</strong> <code>curl http://localhost:4200</code></li>
<li><strong>Acceso en red:</strong> usa <code>ng serve --host 0.0.0.0</code> para permitir conexiones externas</li>
</ul>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:4200` y cómo resolverlos:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>Error «Port Already in Use»</h3>
<p><strong>Problema:</strong> otra aplicación está ocupando el puerto 4200.</p>
<p><strong>Solución:</strong> localiza el proceso con <code>lsof -i :4200</code>, párale con <code>kill -9 &lt;PID&gt;</code> o usa otro puerto con <code>ng serve --port 4201</code>.</p>
</div>

<div class="kyp-problem">
<h3>No se encuentra Angular CLI</h3>
<p><strong>Problema:</strong> Angular CLI no está instalado o no está en el PATH.</p>
<p><strong>Solución:</strong> instálalo globalmente con <code>npm install -g @angular/cli</code> y comprueba la instalación con <code>ng version</code>.</p>
</div>

<div class="kyp-problem">
<h3>La recarga automática no funciona</h3>
<p><strong>Problema:</strong> los cambios en el código no refrescan el navegador.</p>
<p><strong>Solución:</strong> revisa la consola del navegador, reinicia el servidor con <code>ng serve</code> o limpia la caché y refresca a mano.</p>
</div>

<div class="kyp-problem">
<h3>No se puede acceder desde otros dispositivos</h3>
<p><strong>Problema:</strong> localhost:4200 solo funciona en tu propia máquina.</p>
<p><strong>Solución:</strong> usa <code>ng serve --host 0.0.0.0</code> para permitir el acceso en red y entra por tu IP, por ejemplo <code>http://192.168.1.100:4200</code>.</p>
</div>

<div class="kyp-problem">
<h3>Compilaciones lentas</h3>
<p><strong>Problema:</strong> el servidor tarda mucho en compilar o recargar.</p>
<p><strong>Solución:</strong> usa <code>ng serve --aot=false</code> para compilar más rápido, amplía la memoria de Node.js con <code>--max_old_space_size=8192</code> u optimiza tus imports y dependencias.</p>
</div>

<div class="kyp-problem">
<h3>Errores de compilación</h3>
<p><strong>Problema:</strong> errores de TypeScript o fallos al compilar el proyecto.</p>
<p><strong>Solución:</strong> revisa los errores en la terminal, comprueba que las versiones de Angular y TypeScript son compatibles, ejecuta <code>ng update</code> o corrige los imports.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:4200` es la dirección por defecto (IP `127.0.0.1`, puerto 4200) del servidor de desarrollo de Angular.
* **Quién lo usa**: desarrolladores de frontend que crean aplicaciones Angular, SPAs y aplicaciones web modernas con Angular CLI.
* **Resolución de problemas**: comprueba si el servidor está corriendo, resuelve conflictos de puerto, corrige la configuración y prueba la conexión.
* **Soluciones habituales**: arrancar el servidor, liberar el puerto, instalar dependencias o limpiar la caché de Angular.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Crear una aplicación nueva<br>
ng new my-app && cd my-app<br><br>
# Arrancar el servidor de desarrollo<br>
ng serve<br><br>
# Abrir la aplicación<br>
open http://localhost:4200
</code>
</div>
<p class="kyp-quick__note">
Usa estos comandos para empezar rápido con Angular en localhost:4200
</p>
</div>

El puerto 4200 es la piedra angular del desarrollo con Angular y te da un servidor potente y eficiente. Tanto si creas tu primera aplicación como si desarrollas una solución empresarial compleja, localhost:4200 es donde empieza el camino y donde vas a exprimir las herramientas de Angular.
