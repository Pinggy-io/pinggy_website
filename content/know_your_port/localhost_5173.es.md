---
title: "localhost:5173 - Guía del puerto del servidor de desarrollo de Vite"
description: "Guía completa de localhost:5173 - el puerto por defecto del servidor de desarrollo de Vite, usado por Vue.js, React y los frameworks de frontend modernos."
date: 2025-01-30T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "vite", "vue", "react", "frontend", "development"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:5173</p>
  <p class="kyp-hero__sub">Puerto del servidor de desarrollo de Vite</p>
  <a href="http://localhost:5173" target="_blank" class="kyp-hero__btn">
    Abrir localhost:5173
  </a>
  <p class="kyp-hero__note">
    El servidor de desarrollo de Vite, con HMR sobre módulos ES nativos
  </p>
</div>

**`localhost:5173`** es la dirección a la que se enlaza el servidor de desarrollo de Vite por defecto al ejecutar `npm run dev`. `localhost` resuelve a `127.0.0.1` (tu máquina) y `5173` es el puerto que Vite eligió en la v2.7 para no chocar con Create React App en el 3000 y compañía.

Hay un pequeño chiste en el número: 5-1-7-3 se lee como V-I-T-E si miras un teclado de teléfono. Ingenioso, pero la razón de que casi cualquier proyecto de frontend que toques en 2026 acabe en este puerto es más aburrida: Vite es el servidor de desarrollo por defecto de casi todos los frameworks modernos.

En 2026, Vite 8 viene con **{{< link href="https://rolldown.rs/" >}}Rolldown{{< /link >}}**, un empaquetador escrito en Rust que sustituye a la antigua combinación de Rollup y esbuild. Las compilaciones de producción son entre 1,6 y 7,7 veces más rápidas que en Vite 7 sobre bases de código reales (Linear pasó de 46 s a 6 s; Ramp bajó un 57 %; Beehiiv un 64 %). Se mantuvo la compatibilidad de la API de plugins, pero algunos plugins de Rollup que tocan detalles internos todavía necesitan actualizarse: compruébalo antes de actualizar un monorepo grande. El servidor de desarrollo en `localhost:5173` funciona igual que antes, aunque por dentro usa ahora la **Environment API** (introducida en Vite 6) para tratar los entornos de cliente, SSR y edge como entornos separados y configurables, la base sobre la que TanStack Start, Nuxt y SvelteKit construyen su paridad entre desarrollo y producción. A su alrededor, el ecosistema ha sumado **{{< link href="https://tanstack.com/start" >}}TanStack Start{{< /link >}}** (React full-stack sobre Vite, con la 1.0 estable desde octubre de 2026), **{{< link href="https://voidzero.dev/posts/announcing-vite-plus" >}}Vite+{{< /link >}}** (la cadena de herramientas integrada de VoidZero) y agentes de programación como Claude Code y Cursor, que manejan el servidor de Vite para automatizar el navegador.

---

## Acceder a localhost:5173 desde otros dispositivos

`localhost` solo resuelve en la máquina donde corre Vite, así que un móvil en el mismo wifi o un compañero al otro lado de la oficina no pueden entrar directamente. Tienes dos opciones: enlazar Vite a tu IP de la red local (`npm run dev -- --host` y luego entrar en `http://<tu-ip>:5173`), o abrir un túnel para cualquiera en internet. Para lo segundo, un comando de {{< link href="https://pinggy.io/" >}}Pinggy{{< /link >}} funciona sin instalar nada:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:5173 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5173 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5173 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5173 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Recibirás una URL pública HTTPS que hace de proxy a `localhost:5173`. Va bien para enseñar un trabajo en curso a un cliente, probar en Safari de iOS sin pelearte con certificados o apuntar un webhook (Stripe, Clerk, GitHub) a un manejador local. Aviso: el HMR de Vite va por WebSockets y, según tu `vite.config.js`, puede que tengas que poner `server.hmr.clientPort: 443` y añadir el host del túnel a `server.allowedHosts` para que la recarga en caliente siga funcionando.

---

## Servicios y programas que usan el puerto 5173

El puerto 5173 lo usan sobre todo Vite y las aplicaciones construidas sobre él. Estas son las principales:

<div class="kyp-grid">

<div class="kyp-card">
<h3>Frameworks basados en Vite</h3>
<ul>
<li><strong>{{< link href="https://tanstack.com/start" >}}TanStack Start{{< /link >}}</strong>: React (y Solid) full-stack sobre Vite. La 1.0 es estable desde el 13 de octubre de 2026, tras una release candidate que llevaba disponible desde septiembre de 2025</li>
<li><strong>{{< link href="https://vuejs.org/" >}}Vue.js 3{{< /link >}}</strong>: el scaffold por defecto (<code>npm create vue@latest</code>) monta Vite</li>
<li><strong>{{< link href="https://reactjs.org/" >}}React{{< /link >}}</strong>: Vite es el punto de partida recomendado por el equipo de React desde que CRA se retiró en 2025</li>
<li><strong>{{< link href="https://kit.svelte.dev/" >}}SvelteKit{{< /link >}}</strong>: el framework full-stack de Svelte, sobre Vite</li>
<li><strong>{{< link href="https://astro.build/" >}}Astro{{< /link >}}</strong>: estático orientado a contenido con arquitectura de islas, construido sobre Vite</li>
<li><strong>{{< link href="https://nuxt.com/" >}}Nuxt 3{{< /link >}}</strong>: el framework full-stack de Vue, sobre Vite y Nitro</li>
<li><strong>{{< link href="https://remix.run/" >}}Remix{{< /link >}}</strong>: React full-stack, basado en Vite desde la v2</li>
<li><strong>{{< link href="https://qwik.builder.io/" >}}Qwik{{< /link >}}</strong>: framework centrado en la resumibilidad, con Vite por debajo</li>
<li><strong>{{< link href="https://www.solidjs.com/" >}}Solid.js{{< /link >}}</strong>: runtime reactivo de grano fino, con plantilla de Vite</li>
<li><strong>{{< link href="https://analogjs.org/" >}}Analog{{< /link >}}</strong>: metaframework de Angular sobre Vite</li>
<li><strong>{{< link href="https://waku.gg/" >}}Waku{{< /link >}}</strong>: framework mínimo de React Server Components sobre Vite</li>
<li><strong>{{< link href="https://lit.dev/" >}}Lit{{< /link >}}</strong>: librería de web components que funciona bien con Vite</li>
<li><strong>{{< link href="https://preactjs.com/" >}}Preact{{< /link >}}</strong>: alternativa a React de 3 KB, con plantilla de Vite</li>
</ul>
</div>

<div class="kyp-card">
<h3>Herramientas de desarrollo</h3>
<ul>
<li><strong>{{< link href="https://vite.dev/" >}}Servidor de Vite 8{{< /link >}}</strong>: el proceso que realmente escucha en el 5173. La v8 trae Rolldown como empaquetador (compilaciones de 10 a 30 veces más rápidas que con Rollup)</li>
<li><strong>{{< link href="https://voidzero.dev/posts/announcing-vite-plus" >}}Vite+{{< /link >}}</strong>: la cadena de herramientas de VoidZero que junta Vite, Vitest, Rolldown y Oxc en una sola CLI</li>
<li><strong>{{< link href="https://vitest.dev/" >}}Vitest{{< /link >}}</strong>: ejecutor de pruebas unitarias nativo de Vite; reutiliza tu <code>vite.config.js</code></li>
<li><strong>{{< link href="https://tanstack.com/devtools" >}}TanStack DevTools{{< /link >}}</strong>: panel unificado para Query, Router, Form y Start, instalado como plugin de Vite</li>
<li><strong>{{< link href="https://storybook.js.org/" >}}Storybook{{< /link >}}</strong>: usa Vite como constructor (Storybook 7 en adelante)</li>
<li><strong>{{< link href="https://playwright.dev/" >}}Playwright{{< /link >}}</strong> / <strong>{{< link href="https://www.cypress.io/" >}}Cypress{{< /link >}}</strong>: ejecutores de pruebas E2E que apuntan a la URL de desarrollo de Vite</li>
<li><strong>Agentes de programación con IA</strong>: Cursor, Claude Code y similares arrancan Vite con <code>server.open: false</code> y <code>strictPort: true</code> para que la URL sea predecible en los pasos de navegador sin interfaz</li>
<li><strong>{{< link href="https://mswjs.io/" >}}MSW{{< /link >}}</strong>: Mock Service Worker, intercepta <code>fetch</code> durante el desarrollo para que programes contra una API que aún no existe</li>
<li><strong>{{< link href="https://vite-pwa-org.netlify.app/" >}}vite-plugin-pwa{{< /link >}}</strong>: añade un service worker y un manifiesto a tu build; funciona en el 5173 en desarrollo con <code>devOptions.enabled: true</code></li>
<li><strong>{{< link href="https://github.com/oxc-project/oxc" >}}Oxc{{< /link >}} / <strong>{{< link href="https://biomejs.dev/" >}}Biome{{< /link >}}</strong></strong>: herramientas de lint y formato en Rust; en Vite 8 el <code>@vitejs/plugin-react</code> de siempre usa Oxc para la transformación de Fast Refresh, así que el paquete aparte <code>@vitejs/plugin-react-oxc</code> está obsoleto</li>
<li><strong>{{< link href="https://hono.dev/" >}}Hono{{< /link >}}</strong>: framework web orientado a edge con integración de primera con Vite (<code>@hono/vite-dev-server</code>) para aplicaciones full-stack en un solo puerto</li>
<li><strong>{{< link href="https://vite.dev/plugins/" >}}Plugins de Vite{{< /link >}}</strong>: desde <code>vite-plugin-svelte</code> hasta <code>@vitejs/plugin-react</code></li>
</ul>
</div>

<div class="kyp-card">
<h3>Aplicaciones web modernas</h3>
<ul>
<li><strong>Aplicaciones de una sola página (SPA)</strong>: aplicaciones completas que corren enteras en el navegador</li>
<li><strong>Aplicaciones web progresivas (PWA)</strong>: funcionan sin conexión y se sienten como una app nativa</li>
<li><strong>Proyectos en {{< link href="https://www.typescriptlang.org/" >}}TypeScript{{< /link >}}</strong>: tipado completo desde el primer momento</li>
<li><strong>JavaScript sin framework</strong>: solo módulos ES modernos</li>
<li><strong>Web components</strong>: elementos HTML propios y reutilizables</li>
<li><strong>Aplicaciones móviles</strong>: apps de iOS y Android con {{< link href="https://capacitorjs.com/" >}}Capacitor{{< /link >}} o {{< link href="https://tauri.app/" >}}Tauri{{< /link >}}</li>
</ul>
</div>

<div class="kyp-card">
<h3>Herramientas de frontend</h3>
<ul>
<li><strong>Frameworks de CSS</strong>: {{< link href="https://tailwindcss.com/" >}}Tailwind CSS{{< /link >}}, {{< link href="https://unocss.dev/" >}}UnoCSS{{< /link >}}, {{< link href="https://sass-lang.com/" >}}Sass{{< /link >}}</li>
<li><strong>Librerías de componentes</strong>: crear y probar componentes con recarga en vivo</li>
<li><strong>Microfrontends</strong>: federación de módulos para aplicaciones componibles</li>
<li><strong>Sitios de documentación</strong>: {{< link href="https://vitepress.dev/" >}}VitePress{{< /link >}} o {{< link href="https://d.umijs.org/" >}}Dumi{{< /link >}}</li>
<li><strong>Sistemas de diseño</strong>: construir y mantener sistemas de componentes</li>
<li><strong>Generadores de blogs</strong>: {{< link href="https://astro.build/" >}}Astro{{< /link >}} para sitios con mucho contenido</li>
</ul>
</div>

</div>

Ejecuta `npm run dev`, `yarn dev` o `pnpm dev` y Vite arranca en el 5173 sin configurar nada. Consigues arranques en frío de decenas de milisegundos (frente a los ~10 s de CRA en una aplicación comparable), HMR por WebSocket en el mismo puerto, ESM nativo en el navegador, preempaquetado de dependencias con esbuild en la primera ejecución y transpilación de TypeScript sin configuración (ojo: transpilación, no comprobación de tipos; ejecuta `tsc --noEmit` aparte o con Vitest).

---

## Cómo resolver problemas con localhost:5173

Cuando el servidor no responde en el 5173, casi siempre es una de estas cuatro cosas:

<div class="kyp-step">
<h3>Paso 1: asegúrate de que Vite está corriendo</h3>
<p><strong>La solución:</strong> arranca el servidor de desarrollo si no lo está ya.</p>
<p><strong>Qué hacer:</strong></p>
<ul>
<li><strong>Arranca Vite:</strong> <code>npm run dev</code>, <code>yarn dev</code> o <code>pnpm dev</code></li>
<li><strong>Mira la terminal:</strong> busca el mensaje «Local: http://localhost:5173/»</li>
<li><strong>Comprueba el proyecto:</strong> asegúrate de estar dentro de un proyecto de Vite</li>
<li><strong>Revisa package.json:</strong> verifica que el script <code>dev</code> está bien configurado</li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 2: libera el puerto 5173</h3>
<p><strong>La solución:</strong> el puerto 5173 ya lo tiene otra cosa.</p>
<p><strong>Atajos:</strong></p>
<ul>
<li><strong>Localiza el proceso:</strong> <code>lsof -i :5173</code> (Linux/macOS) o <code>netstat -ano | findstr :5173</code> (Windows)</li>
<li><strong>Párale:</strong> <code>kill -9 &lt;PID&gt;</code></li>
<li><strong>Usa otro puerto:</strong> <code>npm run dev -- --port 5174</code></li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 3: problemas de configuración o dependencias</h3>
<p><strong>La solución:</strong> algo va mal en tu configuración.</p>
<p><strong>Prueba esto:</strong></p>
<ul>
<li><strong>Revisa vite.config.js:</strong> comprueba la sintaxis y los plugins</li>
<li><strong>Instala las dependencias:</strong> <code>npm install</code> o <code>yarn install</code></li>
<li><strong>Limpia la caché:</strong> borra el directorio <code>node_modules/.vite</code></li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 4: comprueba que funciona</h3>
<p><strong>La solución:</strong> verifica que el servidor responde de verdad.</p>
<p><strong>Cómo comprobarlo:</strong></p>
<ul>
<li><strong>Navegador:</strong> abre <code>http://localhost:5173</code></li>
<li><strong>Terminal:</strong> <code>curl http://localhost:5173</code></li>
<li><strong>Acceso en red:</strong> usa <code>npm run dev -- --host</code> para permitir conexiones externas</li>
</ul>
</div>

---

## Detalles del puerto que conviene conocer

Algunas cosas sobre cómo Vite gestiona el 5173 que pillan a mucha gente:

- **Se autoincrementa.** Si el 5173 está ocupado, Vite pasa al 5174 sin avisar, luego al 5175 y así. Va bien con dos proyectos a la vez, y fatal cuando tus scripts o marcadores dan por hecho el 5173. Fíjalo con `server.strictPort: true` en `vite.config.js` (o `--strictPort` en la CLI) y Vite fallará en lugar de moverse.
- **`vite dev` y `vite preview` usan puertos distintos.** El de desarrollo va en el 5173. `vite preview` (que sirve tu `dist/` de producción para probarlo) usa por defecto el **4173**. Son procesos distintos sirviendo bundles distintos: no compartas estado entre ellos.
- **`--host` te expone en la red local.** Sin ese flag, Vite se enlaza a `127.0.0.1` y solo es accesible desde tu máquina. Con `--host` (o `server.host: true`) se enlaza a `0.0.0.0`, y cualquiera en el mismo wifi puede entrar. En casa da igual; en la red de un hotel o una cafetería, menos.
- **`allowedHosts` se aplica.** Desde Vite 6, las peticiones con una cabecera `Host` que no esté en `server.allowedHosts` se rechazan con un 403. Esto importa al pasar por un túnel o un proxy inverso: añade el nombre público o ponlo a `true` en desarrollo.
- **Dentro de Docker, `localhost` no es tu host.** En un contenedor, `localhost` es el propio contenedor. Ejecuta Vite con `--host 0.0.0.0`, expón el 5173 en tu `Dockerfile` o en compose, y entra en `http://localhost:5173` desde el host. Para el HMR quizá necesites también `server.hmr.host` con el nombre que use el navegador.
- **HTTPS en localhost requiere un plugin.** Vite tiene `server.https`, pero lo doloroso es generar un certificado de confianza. `vite-plugin-mkcert` lo automatiza (usa <a href="https://github.com/FiloSottile/mkcert" target="_blank">mkcert</a> por debajo) y es la respuesta estándar cuando necesitas HTTPS para callbacks de OAuth, PWAs o cualquier cosa que exija un contexto seguro.

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:5173` y cómo resolverlos:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>Error «Port Already in Use»</h3>
<p><strong>Verás:</strong> «Port 5173 is in use...»</p>
<p><strong>Solución rápida:</strong> <code>lsof -i :5173</code> para ver quién lo usa, <code>kill -9 &lt;PID&gt;</code> para pararlo, o simplemente cambia de puerto con <code>npm run dev -- --port 5174</code></p>
</div>

<div class="kyp-problem">
<h3>El servidor de Vite no arranca</h3>
<p><strong>Verás:</strong> errores durante el arranque o un fallo inmediato</p>
<p><strong>Solución rápida:</strong> <code>npm install</code> para reinstalar dependencias, revisa vite.config.js por si hay erratas o borra la caché de <code>node_modules/.vite</code></p>
</div>

<div class="kyp-problem">
<h3>El HMR no funciona (los cambios no recargan)</h3>
<p><strong>Verás:</strong> guardas un archivo y el navegador no se actualiza</p>
<p><strong>Solución rápida:</strong> revisa la consola del navegador por si hay errores de WebSocket, comprueba que tu editor está vigilando los archivos, o reinicia Vite</p>
</div>

<div class="kyp-problem">
<h3>No se puede acceder desde otros equipos de la red</h3>
<p><strong>Verás:</strong> funciona en localhost pero no desde el móvil u otro PC</p>
<p><strong>Solución rápida:</strong> <code>npm run dev -- --host</code> y entra por la IP de tu máquina, por ejemplo <code>http://192.168.1.100:5173</code></p>
</div>

<div class="kyp-problem">
<h3>Carga inicial o arranque lentos</h3>
<p><strong>Verás:</strong> tarda una eternidad en arrancar o la primera carga va pesada</p>
<p><strong>Solución rápida:</strong> <code>rm -rf node_modules package-lock.json && npm install</code>, borra la carpeta <code>node_modules/.vite</code> u optimiza las dependencias en vite.config.js</p>
</div>

<div class="kyp-problem">
<h3>Errores de plugins</h3>
<p><strong>Verás:</strong> Vite arranca pero se queja de un plugin</p>
<p><strong>Solución rápida:</strong> comprueba que las versiones de los plugins encajan con tu versión de Vite, revisa la configuración y actualiza con <code>npm update</code></p>
</div>

<div class="kyp-problem">
<h3>El HMR se desconecta detrás de un túnel o proxy inverso</h3>
<p><strong>Verás:</strong> la página carga bien, pero la consola muestra <code>WebSocket connection to 'wss://...:5173' failed</code> y los cambios no recargan</p>
<p><strong>Solución rápida:</strong> el cliente de Vite intenta abrir el WebSocket en el puerto 5173, pero los túneles y proxies solo exponen el 443. Pon <code>server.hmr.clientPort: 443</code> (y <code>server.hmr.protocol: 'wss'</code> si hace falta) en <code>vite.config.js</code>, y añade el host público a <code>server.allowedHosts</code>.</p>
</div>

<div class="kyp-problem">
<h3>Monorepos: «The request url ... is outside of Vite serving allow list»</h3>
<p><strong>Verás:</strong> importar un paquete hermano en un workspace de pnpm o npm da un 403 con ese error</p>
<p><strong>Solución rápida:</strong> añade la raíz del workspace (o las rutas concretas de los paquetes) a <code>server.fs.allow</code> en tu <code>vite.config.js</code>. Por defecto solo se sirve la raíz del proyecto; en un monorepo, Vite se niega a servir archivos por encima de ella por seguridad.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:5173` es la dirección por defecto del servidor de desarrollo de Vite (`127.0.0.1` en el puerto TCP 5173).
* **Quién lo usa**: cualquier stack basado en Vite: Vue, React, Svelte, Astro, Nuxt, TanStack Start, Solid, Qwik, Analog, Waku, además de Vitest y Storybook en desarrollo.
* **Primer paso al depurar**: `lsof -i :5173` para ver qué está enlazado, y luego `npm run dev` mirando la terminal por la línea «Local: http://localhost:5173/».
* **Soluciones habituales**: mata lo que ocupe el puerto, pasa `--port 5174`, borra `node_modules/.vite` o usa `--host` para exponerlo en la red local.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Vue<br>
npm create vue@latest my-app && cd my-app && npm install<br><br>
# React (plantilla de Vite)<br>
npm create vite@latest my-app -- --template react-ts<br><br>
# TanStack Start (React full-stack sobre Vite)<br>
npm create @tanstack/start@latest my-app<br><br>
# El mismo scaffold con Bun (instalación más rápida)<br>
bunx create-vite@latest my-app --template svelte-ts<br><br>
# Arrancar el servidor (se enlaza a localhost:5173)<br>
npm run dev
</code>
</div>
<p class="kyp-quick__note">
Usa estos comandos para empezar rápido con Vite en localhost:5173
</p>
</div>

Si has tocado herramientas de frontend en los últimos años, el 5173 es probablemente uno de los números más recurrentes de tu historial de comandos. No tiene nada de mágico: es el puerto que eligió Vite, y resulta que Vite es lo que casi todos los frameworks montan hoy como servidor de desarrollo. Saber qué hay enlazado ahí, cómo moverte a otro puerto y cómo exponerlo con seguridad cubre el 90 % de lo que vas a necesitar.
