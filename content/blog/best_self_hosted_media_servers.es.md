---
title: "Tu propio stack de streaming: los mejores servidores multimedia self-hosted y de código abierto en 2026"
slug: "mejores-servidores-multimedia-self-hosted"
description: "Guía práctica de los mejores servidores multimedia self-hosted y de código abierto en 2026. Compara Jellyfin, Navidrome, Immich, Audiobookshelf y Kavita para montar en casa tu propio Netflix, Spotify y Google Photos."
date: 2026-06-07T14:15:25+05:30
lastmod: 2026-10-29T14:15:25+05:30
draft: false
# Las etiquetas y categorías se mantienen en inglés (el sitio en español tiene las
# taxonomías desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Tecnología"
tags: ["self-hosted", "open source"]
categories: ["Technology", "Self-Hosting", "Open Source"]
og_image: "images/best_self_hosted_media_servers/best_self_hosted_media_servers_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gbW9udGFyIHVuIHNlcnZpZG9yIG11bHRpbWVkaWEgc2VsZi1ob3N0ZWQiLAogICJkZXNjcmlwdGlvbiI6ICJHdcOtYSBwYXNvIGEgcGFzbyBwYXJhIGVsZWdpciB5IGVqZWN1dGFyIHVuIHNlcnZpZG9yIG11bHRpbWVkaWEgc2VsZi1ob3N0ZWQgY29tbyBKZWxseWZpbiwgTmF2aWRyb21lIG8gSW1taWNoLCB5IGhhY2VybG8gYWNjZXNpYmxlIGVuIHJlbW90byBjb24gUGluZ2d5LiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJFbGlnZSB0dSB0aXBvIGRlIGNvbnRlbmlkbyIsCiAgICAgICJ0ZXh0IjogIkRlY2lkZSBxdcOpIHF1aWVyZXMgc2VydmlyLiBQZWzDrWN1bGFzIHkgc2VyaWVzOiBKZWxseWZpbi4gTcO6c2ljYTogTmF2aWRyb21lLiBGb3RvczogSW1taWNoLiBBdWRpb2xpYnJvcyB5IHBvZGNhc3RzOiBBdWRpb2Jvb2tzaGVsZi4gRWJvb2tzIHkgY8OzbWljczogS2F2aXRhLiBMYSBtYXlvcsOtYSBkZSBsb3MgdXN1YXJpb3MgZWplY3V0YSBkb3MgbyBtw6FzIGEgbGEgdmV6LCB5YSBxdWUgY2FkYSB1bm8gc2UgY2VudHJhIGVuIHVuIHRpcG8gZGUgY29udGVuaWRvIGRpc3RpbnRvLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxhIERvY2tlciIsCiAgICAgICJ0ZXh0IjogIlRvZG9zIGxvcyBzZXJ2aWRvcmVzIG11bHRpbWVkaWEgc2VsZi1ob3N0ZWQgaW1wb3J0YW50ZXMgc29uIGNvbXBhdGlibGVzIGNvbiBEb2NrZXIuIEluc3RhbGEgRG9ja2VyIEVuZ2luZSBjb246IGN1cmwgLWZzU0wgaHR0cHM6Ly9nZXQuZG9ja2VyLmNvbSB8IHNoLiBEb2NrZXIgYcOtc2xhIGxhIGFwbGljYWNpw7NuLCBzaW1wbGlmaWNhIGxhcyBhY3R1YWxpemFjaW9uZXMgeSBoYWNlIHF1ZSBsYSBjb25maWd1cmFjacOzbiBkZSBsYSB0cmFuc2NvZGlmaWNhY2nDs24gcG9yIGhhcmR3YXJlIHNlYSBpZ3VhbCBlbiB0b2RhcyBsYXMgcGxhdGFmb3JtYXMuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIkRlc3BsaWVnYSB0dSBzZXJ2aWRvciIsCiAgICAgICJ0ZXh0IjogIkVqZWN1dGEgZWwgc2Vydmlkb3IgcXVlIGhheWFzIGVsZWdpZG8gY29uIERvY2tlciBDb21wb3NlLiBQYXJhIEplbGx5ZmluLCBjcmVhIHVuIGRvY2tlci1jb21wb3NlLnltbCBjb24gbGEgaW1hZ2VuIGplbGx5ZmluL2plbGx5ZmluLCBtb250YSB0dSBkaXJlY3RvcmlvIGRlIGNvbnRlbmlkbyB5IGVqZWN1dGEgZG9ja2VyIGNvbXBvc2UgdXAgLWQuIEFicmUgaHR0cDovL2xvY2FsaG9zdDo4MDk2IGVuIHVuIG5hdmVnYWRvciBwYXJhIGNvbXBsZXRhciBlbCBhc2lzdGVudGUgZGUgY29uZmlndXJhY2nDs24uIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIk9yZ2FuaXphIHR1IGJpYmxpb3RlY2EiLAogICAgICAidGV4dCI6ICJFc3RydWN0dXJhIHR1cyBhcmNoaXZvcyBhbnRlcyBkZSBpbXBvcnRhcmxvcy4gSmVsbHlmaW4gZXNwZXJhIGxhcyBwZWzDrWN1bGFzIGVuIGNhcnBldGFzICdUw610dWxvIGRlIGxhIHBlbMOtY3VsYSAoQcOxbyknIHkgbGFzIHNlcmllcyBlbiBkaXJlY3RvcmlvcyAnL05vbWJyZSBkZSBsYSBzZXJpZS9TZWFzb24gMDEvJy4gQ29uIGxvcyBub21icmVzIGNvcnJlY3RvcywgSmVsbHlmaW4gZGVzY2FyZ2EgYXV0b23DoXRpY2FtZW50ZSBtZXRhZGF0b3MsIGNhcsOhdHVsYXMgeSBzdWJ0w610dWxvcyBkZSBUTURCIHkgVGhlVFZEQi4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQWN0aXZhIGVsIGFjY2VzbyByZW1vdG8gY29uIFBpbmdneSIsCiAgICAgICJ0ZXh0IjogIlBhcmEgbGxlZ2FyIGEgdHUgc2Vydmlkb3IgbXVsdGltZWRpYSBkZXNkZSBmdWVyYSBkZSB0dSByZWQgZG9tw6lzdGljYSwgdXNhIFBpbmdneSBwYXJhIGNyZWFyIHVuIHTDum5lbCBww7pibGljbyBzZWd1cm8uIEVqZWN1dGE6IHNzaCAtcCA0NDMgLVIwOmxvY2FsaG9zdDo4MDk2IGZyZWUucGluZ2d5LmlvLiBBc8OtIG9idGllbmVzIHVuYSBVUkwgSFRUUFMgcMO6YmxpY2Egc2luIHJlZGlyaWdpciBwdWVydG9zIG5pIHRlbmVyIHVuYSBJUCBlc3TDoXRpY2EuIgogICAgfQogIF0KfQo8L3NjcmlwdD4K"
outputs:
  - HTML
  - AMP
---

{{< image "best_self_hosted_media_servers/best_self_hosted_media_servers_banner.webp" "Tu propio stack de streaming: los mejores servidores multimedia self-hosted y de código abierto en 2026" >}}

Las suscripciones de streaming se han convertido, casi sin que nos demos cuenta, en uno de los gastos fijos más grandes del presupuesto de una casa. Netflix, Spotify, Audible, Apple TV+, un periódico por aquí, una plataforma de música por allá: la cuenta sube rápido, y nada de eso es tuyo para quedártelo. Un servidor multimedia self-hosted le da la vuelta a ese modelo: tus archivos, tu biblioteca, tu servidor, accesibles desde cualquier dispositivo y desde cualquier sitio. El ecosistema de código abierto para esto ha madurado hasta el punto de que la instalación es sencilla, las apps cliente están pulidas y la experiencia está a la altura de las alternativas comerciales para quien esté dispuesto a dedicarle una tarde a ponerlo en marcha.

Esta guía repasa las mejores opciones de código abierto para cada tipo de contenido (vídeo, música, fotos, audiolibros y ebooks) para que puedas montar un stack que sustituya las suscripciones que de verdad te importan.

### Comparativa rápida

<table style="width:100%;border-collapse:collapse;">
<thead>
<tr>
  <th style="border:1px solid #ddd;padding:0.4em 0.6em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Servidor</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.6em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Tipo de contenido</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.6em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Licencia</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.6em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">Sustituye a</th>
  <th style="border:1px solid #ddd;padding:0.4em 0.6em;text-align:left;background:#f5f7fa;color:#333;font-weight:bold;">RAM (en reposo)</th>
</tr>
</thead>
<tbody>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://jellyfin.org" target="_blank">Jellyfin</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Vídeo, música, fotos, TV en directo</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">GPL-2.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Netflix, Plex</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">~200-300 MB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://emby.media" target="_blank">Emby</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Vídeo, música, fotos, TV en directo</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Propietaria (freemium)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Netflix, Plex</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">~250-350 MB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://www.plex.tv" target="_blank">Plex</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Vídeo, música, fotos, TV en directo</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Propietaria (plan gratuito)</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Netflix</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">~300-500 MB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://www.navidrome.org" target="_blank">Navidrome</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Solo música</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">GPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Spotify</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">&lt;50 MB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://immich.app" target="_blank">Immich</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Fotos y vídeos</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">AGPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Google Photos, iCloud</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">~500-800 MB</td>
</tr>
<tr>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://www.audiobookshelf.org" target="_blank">Audiobookshelf</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Audiolibros, podcasts</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">GPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Audible, Pocket Casts</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">~150-200 MB</td>
</tr>
<tr style="background:#f9fbfd;">
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;"><strong><a href="https://www.kavitareader.com" target="_blank">Kavita</a></strong></td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Ebooks, manga, cómics</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">GPL-3.0</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">Kindle, Comixology</td>
  <td style="border:1px solid #ddd;padding:0.4em 0.6em;">~150-200 MB</td>
</tr>
</tbody>
</table>

{{% tldr %}}

**Por tipo de contenido:**

- **Películas y series**: <a href="https://jellyfin.org" target="_blank">Jellyfin</a> - 100 % gratis, de código abierto, sin necesidad de cuenta y con transcodificación por hardware de serie
- **Música**: <a href="https://www.navidrome.org" target="_blank">Navidrome</a> - un único binario en Go, menos de 50 MB de RAM y compatibilidad total con la API de Subsonic
- **Fotos y vídeos**: <a href="https://immich.app" target="_blank">Immich</a> - más de 92K estrellas en GitHub, copia de seguridad desde el móvil al estilo de Google Photos y reconocimiento facial con IA
- **Audiolibros y podcasts**: <a href="https://www.audiobookshelf.org" target="_blank">Audiobookshelf</a> - apps móviles propias, metadatos de Audible y navegación por capítulos
- **Ebooks, manga, cómics**: <a href="https://www.kavitareader.com" target="_blank">Kavita</a> - EPUB, CBZ, CBR y PDF, con un feed OPDS para lectores electrónicos

**Regla clave:** Estos servidores se complementan, no compiten entre sí. Navidrome no va a reproducir tus películas, y el soporte de música de Jellyfin es básico comparado con un servidor de música dedicado. Usar Jellyfin junto con Navidrome e Immich es una combinación habitual que cubre casi cualquier caso de uso multimedia con menos de 800 MB de RAM entre los tres.

**Sobre Plex:** Plex no es de código abierto y ahora cobra $7.99/mes o $749.99 por el pase de por vida (el triple que los $249.99 que costaba antes de julio de 2026). Para quien empieza con el self-hosting, Jellyfin es la opción por defecto: es gratis, de código abierto y no exige cuenta.

**Para compartir tu servidor en remoto:** Ejecuta `ssh -p 443 -R0:localhost:8096 free.pinggy.io` para obtener una URL HTTPS pública para tu servidor Jellyfin a través de {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}, sin necesidad de redirigir puertos.

{{% /tldr %}}

## ¿Por qué alojar tu propio contenido multimedia?

Las razones prácticas se acumulan rápido. El precio de las suscripciones no deja de subir: solo Netflix ha subido sus tarifas tres veces en cuatro años, y la mayoría de los hogares paga tres o más servicios de streaming. Con self-hosting compras o ripeas el contenido una vez y no pagas nada al mes. Tu biblioteca tampoco desaparece cuando vence un acuerdo de licencias o cierra un servicio.

La privacidad es otro motivo real. Las plataformas comerciales registran qué ves, cuándo pausas y qué vuelves a ver, y usan esos datos para alimentar las recomendaciones y, en algunos casos, la publicidad dirigida. Un servidor self-hosted no envía nada a ninguna parte.

El argumento del control es menos abstracto de lo que parece. ¿Quieres ver contenido en 4K sin pagar un plan premium? ¿Quieres que los subtítulos de OpenSubtitles se descarguen solos? ¿Quieres compartir el acceso con familiares que viven en otros países? En los servidores multimedia self-hosted todo eso son funciones básicas, que en los productos comerciales suelen estar detrás de un muro de pago o directamente no existen.

El inconveniente también es real: necesitas hardware, una conexión a internet para el acceso remoto y algo de mantenimiento de vez en cuando, cuando sale una actualización del servidor. Si eso te parece demasiado trabajo, los servicios comerciales son, siendo sinceros, más cómodos. Pero si ya tienes un servidor en casa o un NAS, añadir un servidor multimedia suele ser cosa de una tarde.

## Servidores de vídeo

### Jellyfin - la opción de código abierto por defecto

{{< image "best_self_hosted_media_servers/jellyfin.webp" "Jellyfin, servidor multimedia de código abierto" >}}

{{< link href="https://jellyfin.org" >}}Jellyfin{{< /link >}} es la recomendación clara para cualquiera que quiera montar una videoteca self-hosted en 2026. Nació en 2018 como fork de Emby, cuando Emby cerró su código fuente, y desde entonces se ha convertido en el servidor multimedia totalmente de código abierto más popular, con más de 40,000 estrellas en GitHub y más de 1,100 colaboradores.

Lo que Jellyfin hace bien, sobre todo, es no esconder funciones detrás de un muro de pago. La transcodificación por hardware con Intel QuickSync, NVIDIA NVENC y AMD VCE funciona de serie en cualquier instalación, sin clave de licencia ni plan de pago. Lo mismo vale para la TV en directo, la gestión multiusuario y los clientes móviles para Android e iOS. Todo es gratis porque no le queda otra: a Jellyfin lo gobierna una organización sin ánimo de lucro y se sostiene por completo con donaciones y voluntarios.

La interfaz web reúne películas, series, música, fotos y TV en directo en una única biblioteca unificada. Los metadatos se descargan automáticamente de TMDB y TheTVDB a partir de los nombres de archivos y carpetas que uses. El soporte de subtítulos incluye subtítulos incrustados, archivos SRT y descarga automática desde OpenSubtitles. La función **SyncPlay** permite que varios usuarios vean el mismo contenido sincronizado en distintos dispositivos, incluidos los saltos y las pausas.

Donde Jellyfin sigue por detrás de Plex es en la variedad de clientes: hay apps para smart TV, pero su calidad cambia según la plataforma, y el cliente de Apple TV ha sido históricamente menos estable que los de Android TV o Fire TV. Las apps de Android e iOS son sólidas. La reproducción en el navegador es la alternativa más fiable.

**Características principales:**

- 100 % gratis y de código abierto, sin plan premium, sin necesidad de cuenta y sin telemetría
- Transcodificación por hardware mediante Intel QSV, NVIDIA NVENC, AMD VCE y VA-API, sin licencia
- Soporte multiusuario con bibliotecas por usuario, control parental e historial de reproducción
- TV en directo y DVR con programación y grabaciones
- SyncPlay para ver contenido sincronizado entre dispositivos
- Ecosistema de plugins para fuentes de metadatos adicionales, proveedores de subtítulos e integraciones
- Clientes nativos para Android, iOS, Android TV, Fire TV, Roku y navegadores web

**Requisitos del sistema:** Cualquier equipo con Linux, Windows o macOS. Raspberry Pi 4 o superior para la transcodificación por hardware; los modelos de Pi más antiguos solo sirven para reproducción directa. Docker es el método de instalación recomendado.

**Licencia:** GPL-2.0 | **Estrellas en GitHub:** 53K+ | {{< link href="https://github.com/jellyfin/jellyfin" >}}GitHub{{< /link >}}

---

### Emby - la alternativa freemium más pulida

{{< image "best_self_hosted_media_servers/emby.webp" "Emby, servidor multimedia" >}}

{{< link href="https://emby.media" >}}Emby{{< /link >}} es el predecesor de Jellyfin o, para ser más exactos, el proyecto del que Jellyfin hizo fork cuando Emby pasó a ser parcialmente propietario en 2018. Hoy Emby funciona como un producto freemium, con un plan gratuito y una suscripción de pago, Emby Premiere ($4.99/mes o $119 de por vida), que desbloquea la transcodificación por hardware, el DVR, la sincronización con el móvil y el soporte para Chromecast.

Lo que inclina la balanza hacia Emby frente a Jellyfin es la calidad y el acabado de sus clientes. Las apps de Emby para smart TV suelen estar más refinadas, y su interfaz tiene un aire algo más comercial que algunos usuarios prefieren. Las apps móviles están bien mantenidas. Si vienes de Plex, la experiencia de uso de Emby te resultará más familiar.

El argumento en contra es sencillo: el motivo principal para hacer self-hosting es dejar de pagar suscripciones y usar software de código abierto, y la licencia propietaria de Emby con cuota mensual choca con las dos cosas. Para usuarios nuevos, Jellyfin ofrece la misma experiencia básica (y transcodificación por hardware gratis) sin ningún muro de pago.

**Licencia:** Propietaria (freemium) | {{< link href="https://emby.media" >}}emby.media{{< /link >}}

---

### Plex - la opción comercial que conviene conocer

{{< image "best_self_hosted_media_servers/plex.webp" "Plex Media Server" >}}

Plex no es de código abierto, pero sale en cualquier conversación sobre self-hosting, así que merece la pena hablar de él directamente. El plan gratuito de Plex es más limitado que antes: la sincronización sin conexión, la transcodificación por hardware y algunas apps cliente requieren Plex Pass. En mayo de 2026, Plex anunció que el precio del Plex Pass de por vida pasaría de $249.99 a $749.99 a partir del 1 de julio de 2026. El precio mensual ($7.99/mes) no cambia.

Las ventajas reales de Plex sobre Jellyfin son la calidad de su cliente para smart TV, sus funciones de descubrimiento (Discover, Watchlist) y un catálogo más amplio de clientes propios con actualizaciones constantes. Además, Plex exige una cuenta para ejecutar el servidor, lo que significa que tu servidor se autentica a través de la infraestructura de Plex incluso para reproducir solo en local, algo a tener muy en cuenta si te importa la privacidad.

Para la mayoría de quienes hacen self-hosting y priorizan el código abierto y la privacidad, Jellyfin es mejor opción. Plex tiene sentido si necesitas la mejor experiencia en apps de smart TV y no te importa depender de una cuenta.

**Licencia:** Propietaria | {{< link href="https://www.plex.tv" >}}plex.tv{{< /link >}}

## Servidor de música

### Navidrome - streaming de música ligero y compatible con Subsonic

{{< image "best_self_hosted_media_servers/navidrome.webp" "Navidrome, servidor de música self-hosted" >}}

{{< link href="https://www.navidrome.org" >}}Navidrome{{< /link >}} es la herramienta adecuada si la música es tu uso principal y quieres algo hecho a propósito, en lugar de añadirle una biblioteca de música a un servidor de vídeo generalista. Está escrito en Go, se distribuye como un único binario sin dependecias de runtime y usa menos de 50 MB de RAM en reposo: puedes ejecutarlo sin problemas en una Raspberry Pi Zero 2 W.

La funcionalidad básica es justo lo que querrías de un sustituto de Spotify: lo apuntas a tu carpeta de música y él indexa la biblioteca leyendo las etiquetas ID3, descarga imágenes de los artistas de fuentes externas, gestiona el acceso multiusuario, hace scrobbling a Last.fm y ListenBrainz, admite listas inteligentes y aplica ReplayGain para mantener un volumen constante. La interfaz web integrada es limpia y responde bien.

El valor real está en la **compatibilidad con la API de Subsonic**. Navidrome implementa la API de Subsonic completa, así que puedes usar cualquiera de las decenas de clientes de Subsonic maduros que hay para cada plataforma: DSub y Symfonium en Android, Amperfy y Ultrasonic en iOS, Feishin en escritorio. El ecosistema es bastante más grande que la base de clientes propia de Navidrome, porque los clientes de Subsonic existían años antes que Navidrome. No te quedas atado a ninguna app.

Una biblioteca de 50,000 pistas se indexa en minutos en cualquier hardware moderno. La imagen de Docker ocupa unos 80 MB. El proyecto se mantiene activamente: las últimas versiones añadieron soporte para las extensiones de la API OpenSubsonic y mejoraron la gestión de listas de reproducción.

**Características principales:**

- Un único binario, sin dependencias externas, menos de 50 MB de RAM en reposo
- Compatibilidad total con la API de Subsonic, con soporte para decenas de clientes de terceros
- Scrobbling a Last.fm y ListenBrainz
- Multiusuario con bibliotecas e historial de reproducción por usuario
- Soporte de ReplayGain para un volumen constante entre pistas
- Listas inteligentes y gestión de listas de reproducción normales
- Funciona en Linux, macOS, Windows y ARM (incluida la Raspberry Pi)

**Requisitos del sistema:** Cualquier equipo con 512 MB de RAM o más. Se recomienda Docker, pero el binario funciona por sí solo. Apto para NAS (hay paquetes oficiales para QNAP, Synology y Unraid).

**Licencia:** GPL-3.0 | **Estrellas en GitHub:** 21.6K+ | {{< link href="https://github.com/navidrome/navidrome" >}}GitHub{{< /link >}}

## Biblioteca de fotos

### Immich - el Google Photos self-hosted

{{< image "best_self_hosted_media_servers/immich.webp" "Immich, gestión de fotos y vídeos self-hosted" >}}

{{< link href="https://immich.app" >}}Immich{{< /link >}} se ha convertido en la solución self-hosted dominante para gestionar fotos y vídeos, con más de 92,000 estrellas en GitHub: es uno de los proyectos self-hosted que más rápido han crecido, sea del tipo que sea. Llegó a su versión estable v2.0.0 en octubre de 2025, con lo que desaparecieron los avisos de que el proyecto estaba en pleno desarrollo, y la v2.5.x (la actual a principios de 2026) ha mantenido el ritmo de mejoras.

El producto se acerca de verdad a Google Photos en las funciones que importan en el día a día. La **app móvil** (Android e iOS) se encarga de la copia de seguridad automática en segundo plano, organizada por fecha y ubicación. El **reconocimiento facial con IA** agrupa las fotos por persona sin ningún procesamiento en la nube. La **búsqueda inteligente** entiende descripciones como "perro en la playa" o "coche rojo" gracias a una búsqueda basada en CLIP que se ejecuta en local. La **galería en línea de tiempo** lo ordena todo cronológicamente, con vista de mapa y creación de álbumes.

En la práctica, la v2.5.0 añadió la función "Free Up Space", que borra de tu móvil las fotos locales una vez que se han copiado correctamente, y eso elimina el último obstáculo para sustituir Google Photos para la mayoría de los usuarios. El proceso de copia de seguridad y restauración está integrado en la interfaz web. El almacenamiento puede ser un disco local, recursos compartidos de red (NFS, SMB) o almacenamiento de objetos compatible con S3.

Immich se despliega con varios contenedores: el servidor principal, un contenedor de microservicios para las tareas de ML, Redis y PostgreSQL. Docker Compose lo levanta todo con un solo comando. Las funciones de machine learning (reconocimiento facial, búsqueda inteligente) piden más CPU que una simple herramienta de copia de fotos: cuenta con un equipo de al menos 4 GB de RAM y, a ser posible, una CPU moderna para indexar bibliotecas grandes con rapidez.

**Características principales:**

- Copia de seguridad automática de fotos y vídeos desde el móvil (Android e iOS)
- Reconocimiento facial y agrupación con IA sin ningún procesamiento en la nube
- Búsqueda inteligente basada en CLIP ("puesta de sol sobre el agua", "tarta de cumpleaños")
- Galería en línea de tiempo con vista de mapa, álbumes y álbumes compartidos
- "Free Up Space" para borrar del móvil las fotos que ya tienen copia
- Soporte de almacenamiento compatible con S3 además de rutas locales
- Uso compartido con tu pareja, compartir álbumes y acceso de invitados
- Copia de seguridad y restauración completas integradas en la interfaz web

**Requisitos del sistema:** 4 GB de RAM como mínimo; se recomiendan 8 GB o más para bibliotecas grandes o con el indexado de ML en marcha. Requiere Docker Compose. Compatible con ARM64 (Apple Silicon, Raspberry Pi 4+). Puertos: 2283 (HTTP).

**Licencia:** AGPL-3.0 | **Estrellas en GitHub:** 103K+ | {{< link href="https://github.com/immich-app/immich" >}}GitHub{{< /link >}}

## Servidor de audiolibros y podcasts

### Audiobookshelf - el servidor de audiolibros definitivo

{{< image "best_self_hosted_media_servers/audiobookshelf.webp" "Audiobookshelf, servidor de audiolibros self-hosted" >}}

{{< link href="https://www.audiobookshelf.org" >}}Audiobookshelf{{< /link >}} cubre un hueco que los servidores multimedia generalistas resuelven mal: los audiolibros tienen capítulos, marcadores, temporizador de apagado, velocidad de reproducción y organización por series, cosas que los diferencian bastante de la música. Audiobookshelf se creó específicamente para esto, y se nota.

El servidor indexa tu biblioteca, extrae metadatos de Audible y otras fuentes (portada, narrador, serie, fecha de publicación) y registra el progreso de escucha de cada usuario en todos sus dispositivos. El reproductor web tiene todo lo que cabe esperar: navegación por capítulos, velocidad de reproducción variable (de 0.5x a 3x), marcadores y temporizador de apagado. Las apps de Android e iOS replican todo esto y sincronizan el progreso con el servidor automáticamente.

Tambien incluye soporte para podcasts: te suscribes a un podcast por RSS y Audiobookshelf descarga los episodios nuevos automáticamente y los trata como audiolibros (con marcas de capítulo cuando los episodios las traen). Eso lo convierte en una app razonable para gestionar tanto audiolibros como podcasts.

La instalación es sencilla. Apunta el servidor a tu directorio de audiolibros, organizado como `/Library/Author/Book Title/`, y él se encarga del resto. El soporte OPDS te permite explorar y descargar libros desde lectores electrónicos compatibles, y hay una API disponible para integraciones a medida.

**Características principales:**

- Progreso de escucha por usuario, registrado en todos los dispositivos con sincronización automática
- Navegación por capítulos, marcadores, temporizador de apagado y velocidad de reproducción variable
- Extracción de metadatos de Audible y Goodreads (portada, narrador, serie, descripción)
- Gestor de podcasts integrado con descarga automática de episodios
- Apps nativas para Android e iOS
- Soporte OPDS para explorar y descargar desde lectores electrónicos
- Multiusuario con progreso por usuario y control de acceso a la biblioteca

**Requisitos del sistema:** Cualquier equipo Linux/macOS/Windows con 512 MB de RAM. Docker es el despliegue recomendado. Puertos: 13378 (HTTP).

**Licencia:** GPL-3.0 | **Estrellas en GitHub:** 13.1K+ | {{< link href="https://github.com/advplyr/audiobookshelf" >}}GitHub{{< /link >}}

## Servidor de ebooks y cómics

### Kavita - servidor de lectura para manga, cómics y ebooks

{{< image "best_self_hosted_media_servers/kavitareader.webp" "Kavita, servidor de ebooks y cómics self-hosted" >}}

{{< link href="https://www.kavitareader.com" >}}Kavita{{< /link >}} se encarga de los formatos que los servidores multimedia generalistas ignoran: CBZ, CBR (cómics), EPUB, PDF e incluso archivos ZIP de imágenes para manga y novelas ligeras. El lector web integrado se adapta al tipo de contenido: un lector de manga con paginación de derecha a izquierda y un modo de tira larga para webtoons, o un diseño de lector electrónico tradicional para los archivos EPUB.

El escaneo de la biblioteca es rápido, y Kavita obtiene metadatos de bases de datos online (MangaDex, ComicVine, AniList, Goodreads) a partir de los nombres de archivo y los metadatos incrustados. El progreso de lectura se sincroniza entre dispositivos, y los feeds OPDS y OPDS-PS te permiten conectar Kavita a cualquier app de lectura compatible (KOReader, Kybook, Chunky) para descargar y leer sin conexión.

Si tienes audiolibros y ebooks, Audiobookshelf y Kavita se complementan sin pisarse: los dos se despliegan en un solo contenedor ligero y juntos usan menos de 400 MB de RAM en reposo.

**Características principales:**

- Admite los formatos CBZ, CBR, ZIP, EPUB y PDF
- Lector web adaptable con modos de manga, webtoon, cómic y libro
- Feeds OPDS y OPDS-PS para apps de lectura externas
- Extracción de metadatos de MangaDex, ComicVine, AniList y Goodreads
- Sincronización del progreso de lectura entre dispositivos
- Multiusuario con bibliotecas e historial de lectura por usuario

**Requisitos del sistema:** 512 MB de RAM como mínimo. Se recomienda Docker. Funciona en Linux, macOS y Windows. Puertos: 5000 (HTTP).

**Licencia:** GPL-3.0 | **Estrellas en GitHub:** 11K+ | {{< link href="https://github.com/Kareadita/Kavita" >}}GitHub{{< /link >}}

## Cómo poner Jellyfin en marcha

Jellyfin es el mejor punto de partida porque es el que más terreno cubre (vídeo, música, fotos, TV en directo) y su instalación con Docker es representativa de cómo funcionan la mayoría de los servidores multimedia self-hosted. Una vez que tengas Jellyfin funcionando, añadir Navidrome o Immich a su lado sigue el mismo patrón.

Primero, instala Docker si todavía no lo tienes:

```bash
curl -fsSL https://get.docker.com | sh
```

Crea un archivo `docker-compose.yml`:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    ports:
      - "8096:8096"
    volumes:
      - ./config:/config
      - ./cache:/cache
      - /path/to/media:/media:ro
    restart: unless-stopped
```

Arranca el servidor:

```bash
docker compose up -d
```

Abre `http://localhost:8096` en un navegador y sigue el asistente de configuración. Crearás una cuenta de administrador, añadirás las rutas de las bibliotecas y lanzarás un primer escaneo. Jellyfin descargará los metadatos de todo lo que consiga identificar.

**Para la transcodificación por hardware con una CPU Intel** (de 6.ª generación o posterior, con gráficos integrados), añade el acceso al dispositivo en tu archivo compose:

```yaml
services:
  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    ports:
      - "8096:8096"
    volumes:
      - ./config:/config
      - ./cache:/cache
      - /path/to/media:/media:ro
    devices:
      - /dev/dri:/dev/dri  # Intel QSV / VA-API
    restart: unless-stopped
```

Después, en el panel de administración de Jellyfin, ve a Dashboard > Playback > Transcoding y activa la opción Intel QuickSync o VA-API. La transcodificación por hardware marca una diferencia notable si varios usuarios hacen streaming a la vez o si los clientes necesitan convertir de formato: traslada la carga de la CPU al codificador de la GPU, que hace el trabajo con una fracción del consumo.

**Los nombres de archivo importan.** La extracción de metadatos de Jellyfin depende por completo de que reconozca los nombres de las películas y las series a partir de tu estructura de archivos. Los patrones esperados son:

```
/media/movies/The Dark Knight (2008)/The Dark Knight (2008).mkv
/media/tv/Breaking Bad/Season 01/Breaking Bad S01E01.mkv
```

Acertar con los nombres antes del primer escaneo te ahorra mucha limpieza manual después. La {{< link href="https://jellyfin.org/docs/general/server/media/movies" >}}documentación de Jellyfin{{< /link >}} cubre todos los casos especiales, incluidas las películas con varias ediciones, los especiales y los extras.

### Navidrome junto a Jellyfin

Para usar Navidrome para la música junto a Jellyfin para el vídeo, basta con un `docker-compose.yml` adicional:

```yaml
services:
  navidrome:
    image: deluan/navidrome:latest
    container_name: navidrome
    ports:
      - "4533:4533"
    volumes:
      - ./navidrome-data:/data
      - /path/to/music:/music:ro
    environment:
      ND_SCANSCHEDULE: "1h"
      ND_LOGLEVEL: "info"
    restart: unless-stopped
```

Apunta tu cliente de Subsonic (Symfonium, Amperfy, Feishin) a `http://your-server:4533` y tendrás un sustituto completo de Spotify. Navidrome es lo bastante rápido como para correr en la misma máquina que Jellyfin sin que se peleen por los recursos en un hardware normal.

## Accede a tu servidor multimedia en remoto con Pinggy

Un servidor multimedia self-hosted es mucho más útil cuando puedes llegar a él desde cualquier sitio: tu móvil con datos, una tablet en casa de un amigo, un portátil de viaje. El método habitual consiste en abrir un puerto en el router, configurar un servicio de DNS dinámico y montar certificados SSL. Funciona, pero lleva su tiempo dejarlo bien.

{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} te da una URL HTTPS pública para cualquier servidor que tengas en local con un solo comando SSH, sin tocar el router ni necesitar una IP estática. Para Jellyfin en el puerto 8096:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:8096 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:8096 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:8096 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:8096 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:8096 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:8096 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8096 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:8096 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:8096 free.pinggy.io\"}}}"
{{</ ssh_command >}}

Así obtienes una URL HTTPS pública que puedes abrir en la app móvil de Jellyfin o en un navegador, o compartir con los familiares que quieras añadir como usuarios de tu servidor. El mismo comando sirve para cualquier puerto: cambia a `4533` para Navidrome, `2283` para Immich o `13378` para Audiobookshelf.

Para un acceso remoto persistente con un subdominio fijo, en lugar de una URL aleatoria en cada sesión, un {{< link href="https://pinggy.io" >}}plan de pago de Pinggy{{< /link >}} te da un subdominio personalizado estable que sobrevive a los reinicios del servidor. Viene bien si quieres configurar la app de Jellyfin para iOS una sola vez y que siempre se conecte a la misma dirección.

## Cómo elegir qué instalar

La respuesta sincera es que la mayoría de la gente acaba usando más de uno, porque cubren tipos de contenido distintos sin solaparse. Un stack inicial habitual para alguien que quiere sustituir sus suscripciones de streaming:

**Jellyfin** para películas y series: es la videoteca en la que encaja todo lo demás. Instálalo primero, déjalo estable y todo lo que venga después será más fácil.

**Navidrome** para la música, si te importa la calidad del sonido y quieres un sustituto de Spotify dedicado. Si solo escuchas algún álbum de vez en cuando, el soporte de música integrado de Jellyfin probablemente te baste.

**Immich** si pagas por el almacenamiento de Google Photos o iCloud. Solo la copia de seguridad desde el móvil ya compensa el tiempo de instalación si tienes unos cuantos miles de fotos repartidas en varios dispositivos.

**Audiobookshelf** si compras audiolibros o escuchas podcasts. El DRM de Audible lo complica un poco (necesitas archivos sin DRM o usar herramientas como Libation para quitar el DRM de las compras que ya tienes), pero la app en sí es excelente.

**Kavita** si lees manga, cómics o ebooks y quieres una biblioteca central en lugar de archivos dispersos por varios dispositivos.

Los requisitos de hardware crecen con lo que ejecutes. Una Raspberry Pi 4 con 4 GB de RAM puede con Jellyfin (reproducción directa, sin transcodificar), Navidrome y Audiobookshelf a la vez. El indexado de ML de Immich agradece una CPU más rápida. Si piensas transcodificar vídeo para verlo en remoto, cualquier equipo con una CPU Intel de 6.ª generación o posterior (para QSV) aguantará varias reproducciones simultáneas sin despeinarse.

## Conclusión

Jellyfin, Navidrome e Immich se despliegan con Docker, se mantienen activamente y son gratis. Si ya tienes un NAS o un servidor en casa, el coste marginal de añadir un stack de streaming completo es cero, y tu biblioteca no desaparece cuando se cae un acuerdo de licencias. La fricción principal está en la instalación inicial y la migración, no en el uso del día a día.

Para el acceso remoto sin redirigir puertos ni montar un proxy inverso, {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} hace que cualquiera de ellos sea accesible desde cualquier sitio con un solo comando.
