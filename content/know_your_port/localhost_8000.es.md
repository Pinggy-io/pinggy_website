---
title: "localhost:8000 - Guía del puerto de Python y servidores de desarrollo"
description: "Guía completa de localhost:8000 - el puerto que usan Django, el servidor HTTP de Python y otros frameworks de desarrollo."
date: 2025-01-30T10:00:00+05:30
lastmod: 2026-10-24T10:00:00+05:30
draft: false
tags: ["localhost", "port", "python", "django", "development", "http server"]
schemahowto: true
outputs:
  - HTML
  - AMP
---

<div class="kyp-hero">
  <p class="kyp-hero__port">localhost:8000</p>
  <p class="kyp-hero__sub">Puerto del servidor de desarrollo de Python</p>
  <a href="http://localhost:8000" target="_blank" class="kyp-hero__btn">
    Abrir localhost:8000
  </a>
  <p class="kyp-hero__note">
    Accede a tu aplicación web de Python o a tu servidor de desarrollo
  </p>
</div>

**Localhost:8000** es sinónimo de desarrollo web con Python: es el puerto por defecto de las aplicaciones Django y del servidor HTTP integrado de Python. «Localhost» es tu propio ordenador (normalmente la IP `127.0.0.1`) y «8000» es el puerto donde los servidores web de Python esperan conexiones HTTP. Esta combinación se ha convertido en la opción estándar para quien programa en Python.

El puerto 8000 se popularizó con la adopción masiva de Django, que lo estableció como estándar del desarrollo web en Python. El comando integrado `python -m http.server` también usa el 8000 por defecto, lo que reforzó esa asociación. Además es lo bastante alto como para no chocar con servicios del sistema y sigue siendo fácil de recordar.

---

## Acceder a localhost:8000 desde otros dispositivos

Si no consigues llegar a localhost:8000 desde otros dispositivos, seguramente sea porque estás en otra red. Usa un {{< link href="https://pinggy.io/" >}}túnel de Pinggy{{< /link >}} para acceder desde cualquier sitio:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8000 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8000 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8000 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8000 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Este comando crea un túnel seguro que reenvía el tráfico de una URL pública a tu servidor de Python en el puerto 8000, lo que te permite:
- **Compartir tu aplicación de Django o FastAPI** con compañeros o clientes
- **Probarla en el móvil** sin estar en la misma red
- **Enseñar tu aplicación** desde cualquier parte del mundo
- **Depurar aplicaciones de Python** en distintos dispositivos y navegadores

El túnel te da una URL pública que puedes compartir, de modo que tu servidor en localhost:8000 queda accesible desde cualquier dispositivo con conexión.

---

## Servicios y programas que usan el puerto 8000

El puerto 8000 se asocia sobre todo al desarrollo con Python, aunque también lo usan otras herramientas. Estas son las principales:

<div class="kyp-grid">

<div class="kyp-card">
<h3>Frameworks web de Python</h3>
<ul>
<li><strong>{{< link href="https://www.djangoproject.com/" >}}Django{{< /link >}}</strong>: puerto por defecto de su servidor de desarrollo</li>
<li><strong>{{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}}</strong>: framework web moderno, con {{< link href="https://uvicorn.dev/" >}}uvicorn{{< /link >}}</li>
<li><strong>{{< link href="https://flask.palletsprojects.com/" >}}Flask{{< /link >}} (configurado)</strong>: alternativa a su puerto 5000 por defecto</li>
<li><strong>{{< link href="https://www.tornadoweb.org/" >}}Tornado{{< /link >}}</strong>: framework web y librería asíncrona</li>
<li><strong>{{< link href="https://sanic.dev/" >}}Sanic{{< /link >}}</strong>: framework web asíncrono</li>
</ul>
</div>

<div class="kyp-card">
<h3>Herramientas integradas de Python</h3>
<ul>
<li><strong>{{< link href="https://docs.python.org/3/library/http.server.html" >}}Servidor HTTP de Python{{< /link >}}</strong>: el integrado <code>python -m http.server</code></li>
<li><strong>SimpleHTTPServer</strong>: su equivalente en Python 2 (obsoleto)</li>
<li><strong>Servidores propios</strong>: implementaciones para desarrollo</li>
<li><strong>Servidor CGI de Python</strong>: el antiguo modo <code>python -m http.server --cgi</code>, obsoleto desde la 3.13 y eliminado en Python 3.15</li>
<li><strong>Servidores WSGI de desarrollo</strong>: distintas implementaciones WSGI</li>
</ul>
</div>

<div class="kyp-card">
<h3>Ciencia de datos y analítica</h3>
<ul>
<li><strong>{{< link href="https://jupyter.org/" >}}Jupyter Notebooks{{< /link >}} (alt.)</strong>: alternativa a su puerto 8888</li>
<li><strong>{{< link href="https://streamlit.io/" >}}Streamlit{{< /link >}}</strong>: framework de aplicaciones para ciencia de datos</li>
<li><strong>{{< link href="https://plotly.com/dash/" >}}Dash{{< /link >}}</strong>: el framework de Plotly para aplicaciones analíticas</li>
<li><strong>{{< link href="https://panel.holoviz.org/" >}}Panel{{< /link >}}</strong>: framework de cuadros de mando en Python</li>
<li><strong>{{< link href="https://docs.bokeh.org/en/latest/docs/user_guide/server.html" >}}Bokeh Server{{< /link >}}</strong>: servidor de visualizaciones interactivas</li>
</ul>
</div>

<div class="kyp-card">
<h3>Desarrollo de APIs</h3>
<ul>
<li><strong>{{< link href="https://www.django-rest-framework.org/" >}}Django REST Framework{{< /link >}}</strong>: desarrollo de APIs con Django</li>
<li><strong>Microservicios con {{< link href="https://fastapi.tiangolo.com/" >}}FastAPI{{< /link >}}</strong>: APIs de alto rendimiento</li>
<li><strong>{{< link href="https://graphene-python.org/" >}}Servidores GraphQL{{< /link >}}</strong>: implementaciones de GraphQL en Python</li>
<li><strong>APIs REST a medida</strong>: distintos frameworks de Python</li>
<li><strong>Servidores mock de API</strong>: herramientas de prueba y desarrollo</li>
</ul>
</div>

</div>

El servidor HTTP integrado de Python usa el puerto 8000 por defecto al ejecutar `python -m http.server 8000`, y te da un servidor de archivos sencillo en localhost:8000. Las aplicaciones Django usan el 8000 al lanzar `python manage.py runserver`, y FastAPI suele usarlo también con uvicorn como servidor ASGI.

---

## Cómo resolver problemas con localhost:8000

Si no consigues acceder a `localhost:8000`, así puedes diagnosticar y solucionar los fallos más comunes:

<div class="kyp-step">
<h3>Paso 1: comprueba que el servidor de Python está en marcha</h3>
<p><strong>Acción:</strong> confirma que tu aplicación o servidor está activo en el puerto 8000.</p>
<p><strong>Cómo comprobarlo:</strong></p>
<ul>
<li><strong>Django:</strong> <code>python manage.py runserver</code></li>
<li><strong>FastAPI:</strong> <code>uvicorn main:app --reload</code></li>
<li><strong>Flask:</strong> <code>python app.py</code> o <code>flask run --port 8000</code></li>
<li><strong>Servidor HTTP de Python:</strong> <code>python -m http.server 8000</code></li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 2: resuelve los conflictos de puerto</h3>
<p><strong>Acción:</strong> asegúrate de que ninguna otra aplicación está usando el puerto 8000.</p>
<p><strong>Cómo arreglarlo:</strong></p>
<ul>
<li><strong>Localiza el proceso:</strong> <code>lsof -i :8000</code> (Linux/macOS) o <code>netstat -ano | findstr :8000</code> (Windows)</li>
<li><strong>Párale:</strong> <code>kill -9 &lt;PID&gt;</code></li>
<li><strong>Usa otro puerto:</strong> <code>python manage.py runserver 8001</code></li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 3: corrige los problemas de la aplicación</h3>
<p><strong>Acción:</strong> resuelve los errores de arranque o de configuración.</p>
<p><strong>Cómo arreglarlo:</strong></p>
<ul>
<li><strong>Revisa las dependencias:</strong> <code>pip install -r requirements.txt</code></li>
<li><strong>Comprueba la versión de Python:</strong> asegúrate de que es compatible</li>
<li><strong>Lee los logs:</strong> busca mensajes de error en la salida de la terminal</li>
</ul>
</div>

<div class="kyp-step">
<h3>Paso 4: prueba la conexión</h3>
<p><strong>Acción:</strong> verifica que el servidor responde.</p>
<p><strong>Cómo probarlo:</strong></p>
<ul>
<li><strong>Navegador:</strong> abre <code>http://localhost:8000</code></li>
<li><strong>Terminal:</strong> <code>curl http://localhost:8000</code></li>
<li><strong>Acceso en red:</strong> usa <code>python manage.py runserver 0.0.0.0:8000</code> para permitir conexiones externas</li>
</ul>
</div>

---

## Problemas habituales y sus soluciones

Estos son los fallos típicos con `localhost:8000` y cómo resolverlos:

<div class="kyp-problems">

<div class="kyp-problem">
<h3>Error «Port Already in Use»</h3>
<p><strong>Problema:</strong> otra aplicación está ocupando el puerto 8000.</p>
<p><strong>Solución:</strong> localiza el proceso con <code>lsof -i :8000</code>, párale con <code>kill -9 &lt;PID&gt;</code> o usa otro puerto con <code>python manage.py runserver 8001</code>.</p>
</div>

<div class="kyp-problem">
<h3>El servidor de Django no arranca</h3>
<p><strong>Problema:</strong> el servidor de desarrollo falla por problemas de configuración o de dependencias.</p>
<p><strong>Solución:</strong> ejecuta <code>pip install django</code>, revisa las migraciones con <code>python manage.py migrate</code> y comprueba la configuración de settings.py.</p>
</div>

<div class="kyp-problem">
<h3>Errores de módulos de Python</h3>
<p><strong>Problema:</strong> ImportError o ModuleNotFoundError al arrancar la aplicación.</p>
<p><strong>Solución:</strong> instala lo que falte con <code>pip install -r requirements.txt</code>, activa el entorno virtual o revisa la configuración del PYTHONPATH.</p>
</div>

<div class="kyp-problem">
<h3>No se puede acceder desde otros dispositivos</h3>
<p><strong>Problema:</strong> localhost:8000 solo funciona en tu propia máquina.</p>
<p><strong>Solución:</strong> usa <code>python manage.py runserver 0.0.0.0:8000</code> en Django o <code>uvicorn main:app --host 0.0.0.0</code> en FastAPI para permitir el acceso en red. Django además valida la cabecera <code>Host</code>: añade la IP de tu red local o el dominio del túnel a <code>ALLOWED_HOSTS</code>, o las peticiones fallarán con un 400 y «Invalid HTTP_HOST header».</p>
</div>

<div class="kyp-problem">
<h3>Los archivos estáticos no cargan</h3>
<p><strong>Problema:</strong> el CSS, el JavaScript o las imágenes no aparecen en una aplicación Django.</p>
<p><strong>Solución:</strong> ejecuta <code>python manage.py collectstatic</code>, revisa el ajuste STATIC_URL o comprueba que DEBUG=True en desarrollo.</p>
</div>

<div class="kyp-problem">
<h3>Problemas de conexión con la base de datos</h3>
<p><strong>Problema:</strong> errores de base de datos al usar Django u otras aplicaciones web de Python.</p>
<p><strong>Solución:</strong> aplica las migraciones con <code>python manage.py migrate</code>, revisa la configuración de la base de datos y comprueba que el servidor de base de datos está en marcha.</p>
</div>

</div>

---

## Resumen

* **Qué es**: `localhost:8000` es la dirección estándar (IP `127.0.0.1`, puerto 8000) de los servidores de desarrollo web en Python.
* **Quién lo usa**: quienes programan en Python con Django, FastAPI, Flask y otros frameworks y herramientas.
* **Resolución de problemas**: comprueba si el servidor está corriendo, resuelve conflictos de puerto, corrige la aplicación y prueba la conexión.
* **Soluciones habituales**: arrancar el servidor, liberar el puerto, instalar dependencias o corregir errores de configuración.

<div class="kyp-quick">
<h3>Comandos rápidos</h3>
<div class="kyp-quick__code">
<code>
# Proyecto de Django<br>
django-admin startproject mysite && cd mysite && python manage.py runserver<br><br>
# Aplicación de FastAPI<br>
pip install fastapi uvicorn && uvicorn main:app --reload<br><br>
# Servidor HTTP sencillo<br>
python -m http.server 8000
</code>
</div>
<p class="kyp-quick__note">
Usa estos comandos para empezar rápido con Python en localhost:8000
</p>
</div>

El puerto 8000 sigue siendo la piedra angular del desarrollo web en Python, con un endpoint familiar y fiable para infinidad de aplicaciones. Tanto si montas tu primer proyecto en Django como si desarrollas un microservicio con FastAPI o sirves archivos con el servidor integrado, localhost:8000 es donde empieza todo.
