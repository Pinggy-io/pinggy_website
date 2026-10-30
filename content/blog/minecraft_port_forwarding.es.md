---
title: "Abrir puertos para Minecraft (port forwarding)"
slug: "abrir-puertos-minecraft"
description: "Aprende a abrir puertos en tu router para compartir tu servidor de Minecraft con tus amigos. Incluye distintos routers, solución de problemas y Pinggy como alternativa."
date: 2025-05-18T14:15:25+05:30
lastmod: 2026-10-29T15:15:25+05:30
draft: false
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Juegos"
tags: ["gaming", "minecraft", "networking", "port forwarding", "guide", "tcp"]
og_image: "images/minecraft_port_forwarding/minecraft_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gY29uZmlndXJhciBsYSByZWRpcmVjY2nDs24gZGUgcHVlcnRvcyBwYXJhIE1pbmVjcmFmdCIsCiAgImRlc2NyaXB0aW9uIjogIkd1w61hIHBhc28gYSBwYXNvIHBhcmEgY29uZmlndXJhciBsYSByZWRpcmVjY2nDs24gZGUgcHVlcnRvcyBkZSBNaW5lY3JhZnQgZW4gZGlzdGludG9zIHJvdXRlcnMsIGNvbiBjb25zZWpvcyBwYXJhIHNvbHVjaW9uYXIgcHJvYmxlbWFzIHkgc29sdWNpb25lcyBhbHRlcm5hdGl2YXMgdXNhbmRvIFBpbmdneS4iLAogICJpbWFnZSI6ICJodHRwczovL3BpbmdneS5pby9pbWFnZXMvbWluZWNyYWZ0X3BvcnRfZm9yd2FyZGluZy9taW5lY3JhZnRfYmFubmVyLndlYnAiLAogICJkYXRlUHVibGlzaGVkIjogIjIwMjUtMDUtMThUMTQ6MTU6MjUrMDU6MzAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiUHJlcGFyYSB0dSBzZXJ2aWRvciBkZSBNaW5lY3JhZnQiLAogICAgICAidGV4dCI6ICJEZXNjYXJnYSBlIGluc3RhbGEgZWwgc29mdHdhcmUgZGUgc2Vydmlkb3IgZGUgTWluZWNyYWZ0IGVuIHR1IGVxdWlwby4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQnVzY2EgdHUgZGlyZWNjacOzbiBJUCBsb2NhbCIsCiAgICAgICJ0ZXh0IjogIkF2ZXJpZ3VhIGN1w6FsIGVzIGxhIGRpcmVjY2nDs24gSVAgbG9jYWwgZGUgdHUgZXF1aXBvIGVuIHR1IHJlZC4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiRW50cmEgZW4gdHUgcm91dGVyIiwKICAgICAgInRleHQiOiAiSW5pY2lhIHNlc2nDs24gZW4gbGEgcMOhZ2luYSBkZSBhZG1pbmlzdHJhY2nDs24gZGVsIHJvdXRlciBlc2NyaWJpZW5kbyBzdSBkaXJlY2Npw7NuIElQIGVuIGVsIG5hdmVnYWRvci4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiQ29uZmlndXJhIGxhIHJlZGlyZWNjacOzbiBkZSBwdWVydG9zIiwKICAgICAgInRleHQiOiAiQ29uZmlndXJhIGxhIHJlZGlyZWNjacOzbiBkZWwgcHVlcnRvIDI1NTY1IChUQ1ApIGhhY2lhIGxhIGRpcmVjY2nDs24gSVAgbG9jYWwgZGUgdHUgZXF1aXBvLiIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJCdXNjYSB0dSBkaXJlY2Npw7NuIElQIHDDumJsaWNhIiwKICAgICAgInRleHQiOiAiQXZlcmlndWEgdHUgZGlyZWNjacOzbiBJUCBww7pibGljYSBwYXJhIGNvbXBhcnRpcmxhIGNvbiB0dXMgYW1pZ29zIHkgcXVlIHB1ZWRhbiBjb25lY3RhcnNlIGEgdHUgc2Vydmlkb3IuIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJuYW1lIjogIlBydWViYSBsYSBjb25leGnDs24iLAogICAgICAidGV4dCI6ICJQaWRlIGEgdW4gYW1pZ28gcXVlIGludGVudGUgY29uZWN0YXJzZSBhIHR1IHNlcnZpZG9yIHVzYW5kbyB0dSBkaXJlY2Npw7NuIElQIHDDumJsaWNhIHkgZWwgcHVlcnRvLiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+Cg=="
outputs:
  - HTML
  - AMP
---

{{< image "minecraft_port_forwarding/minecraft_banner.webp" "Banner de port forwarding para Minecraft" >}}
El software de servidor de Minecraft escucha por defecto en el puerto 25565, y tu router no deja que el tráfico de fuera llegue hasta él mientras no redirijas ese puerto. Parece bastante sencillo, pero con más de 170 millones de jugadores activos al mes, mucha gente se atasca en algún punto entre el panel de administración del router, un ISP que usa CGNAT o una regla de firewall que bloquea la conexión sin avisar. Esta guía explica cómo configurar la redirección de puertos para un servidor de Minecraft en 2026, las formas más habituales en que falla y una alternativa basada en túneles por si la redirección de puertos no te funciona.


{{% tldr %}}

**Resumen de la redirección de puertos**  
- La redirección de puertos envía el tráfico del puerto 25565 (el predeterminado de Minecraft) de tu router a tu equipo local.
- Permite que jugadores de fuera de tu red se conecten a tu servidor de Minecraft.
- Es necesaria si alojas tu propio servidor y quieres que se unan amigos desde otros lugares.

**Configurar la redirección de puertos**  
- **Busca tu IP local:** usa `ipconfig` (Windows), `ip addr` (Linux) o los ajustes de Red (macOS).
- **Entra en el router:** escribe la IP del router en el navegador (normalmente 192.168.0.1 o 192.168.1.1).
- **Crea la regla de redirección:** configura el puerto 25565 (TCP) para que apunte a la IP local de tu equipo.
- **Comparte tu IP pública:** averigua tu IP pública y pásasela a tus amigos para que puedan conectarse.

**Alternativa: usar Pinggy**
- **Sin redirección de puertos:** te saltas por completo la configuración del router.
- **Funciona con CGNAT:** una solución para los ISPs que bloquean la redirección de puertos tradicional.
- **Configuración sencilla:** basta con ejecutar un solo comando para crear un túnel seguro.
- **Acceso inmediato:** tus amigos se conectan con el hostname y el puerto que te da Pinggy.

{{% /tldr %}}

## ¿Qué es la redirección de puertos en Minecraft?

Cuando ejecutas un servidor de Minecraft en tu equipo, escucha conexiones entrantes en el puerto 25565 por defecto. Sin embargo, el router de tu casa hace de barrera: bloquea el tráfico no solicitado que llega desde internet para proteger tu red. La redirección de puertos le dice al router que tome todo el tráfico entrante en un puerto concreto (25565) y lo envíe directamente a la dirección IP local de tu equipo.

Piensa en ello como darles a tus amigos un camino directo a través del firewall del router para llegar a tu servidor de Minecraft. Sin esta configuración, solo pueden unirse los dispositivos conectados al Wi-Fi o a la LAN de tu casa. Con la redirección de puertos activada, cualquiera que tenga tu IP pública puede conectarse desde cualquier parte del mundo.

## Por qué necesitas la redirección de puertos para Minecraft

Alojar tu propio servidor de Minecraft es mucho más flexible que depender de Minecraft Realms o de proveedores de hosting externos. Pero para que tus amigos de fuera de tu red local puedan unirse, el router tiene que saber cómo reenviar sus solicitudes de conexión a tu máquina. Esto es lo que hace que la redirección de puertos merezca la pena:

- **Acceso global**: jugadores de cualquier parte del mundo pueden conectarse a tu servidor, no solo quien esté en tu Wi-Fi
- **Conexión directa**: tus amigos se unen con tu IP pública, sin servicios intermediarios
- **Control total**: tú decides la configuración del servidor, los mods, los plugins, la semilla del mundo y el límite de jugadores
- **Sin costes de hosting**: tener un servidor en tu propio hardware no cuesta nada aparte de la luz y la factura de internet

## Cómo configurar la redirección de puertos para Minecraft

{{< iframe src="https://www.youtube.com/embed/jwHRK6rYDIs" title="Redirección de puertos en Minecraft" >}}

Sigue estos pasos para configurar la redirección de puertos de tu servidor de Minecraft:

### 1. Prepara tu servidor de Minecraft

Antes de empezar con la redirección de puertos, asegúrate de tener un servidor de Minecraft funcionando en tu equipo. Puedes descargar el software oficial de servidor desde la {{< link href="https://www.minecraft.net/en-us/download/server/" >}}web de Minecraft{{< /link >}}.

{{< image "minecraft/minecraft_launcher.webp" "Launcher de Minecraft" >}}


### 2. Busca tu dirección IP local

Necesitas saber cuál es la dirección IP local de tu equipo dentro de tu red.

**En Windows:**
1. Abre el Símbolo del sistema
2. Escribe `ipconfig` y pulsa Enter
3. Busca "Dirección IPv4" en tu conexión activa

**En Linux:**
1. Abre una terminal
2. Escribe `ip addr` o `ifconfig` y pulsa Enter
3. Busca "inet" seguido de tu dirección IP

**En macOS:**
1. Ve a Preferencias del Sistema > Red
2. Selecciona tu conexión activa
3. Tu dirección IP aparecerá a la derecha

{{< image "minecraft_port_forwarding/wifi_settings.webp" "Buscar tu dirección IP local en macOS" >}}

### 3. Entra en tu router

A la mayoría de los routers se accede desde el navegador:

1. Abre el navegador
2. Escribe la dirección IP del router en la barra de direcciones (las más habituales son `192.168.0.1` o `192.168.1.1`)
3. Inicia sesión con el usuario y la contraseña del router (si no los has cambiado, busca las credenciales por defecto en la documentación del router)

### 4. Ve a los ajustes de redirección de puertos

La ubicación exacta de los ajustes de redirección de puertos cambia según la marca del router:

- **Linksys**: Security > Apps and Gaming > Port Range Forward
- **Netgear**: Advanced > Advanced Setup > Port Forwarding / Port Triggering
- **TP-Link**: Advanced > NAT Forwarding > Virtual Servers
- **ASUS**: WAN > Virtual Server / Port Forwarding
- **D-Link**: Advanced > Port Forwarding

### 5. Crea una nueva regla de redirección de puertos

Añade una nueva regla de redirección de puertos con estos valores:

- **Nombre del servicio/Descripción**: Minecraft Server
- **Rango de puertos/Puerto externo**: 25565
- **Puerto interno**: 25565
- **Protocolo**: TCP (o ambos, TCP/UDP)
- **Dirección IP interna**: la IP local de tu equipo (del paso 2)
- **Activado/Estado**: Activado

Guarda los ajustes y el router aplicará los cambios.

### 6. Busca tu dirección IP pública

Ahora tienes que averiguar tu IP pública para compartirla con tus amigos. Solo tienes que visitar {{< link href="https://www.whatismyip.com/" >}}whatismyip.com{{< /link >}} o buscar "cuál es mi IP" en Google.


{{< image "minecraft_port_forwarding/what_is_my_ip.webp" "Buscar tu dirección IP pública" >}}

### 7. Prueba la conexión

Para probar la conexión, pide a un amigo que intente conectarse a tu servidor. Tiene que abrir Minecraft, hacer clic en "Multijugador", luego en "Añadir servidor", e introducir tu IP pública seguida del puerto (por ejemplo, `203.0.113.42:25565`, o solo tu IP si usas el puerto por defecto 25565).

## Redirección de puertos con distintos ISPs

Algunos proveedores de internet (ISPs) gestionan la redirección de puertos de forma diferente:

### 1. T-Mobile Home Internet

T-Mobile Home Internet usa CGNAT (Carrier-Grade NAT), que impide la redirección de puertos tradicional. Tendrás que usar métodos alternativos como [Pinggy](https://pinggy.io/) (más abajo).

### 2. AT&T

Los routers de AT&T suelen obligarte a crear una DMZ (zona desmilitarizada) o a usar sus ajustes "Firewall Advanced".

### 3. Xfinity/Comcast

Los usuarios de Xfinity pueden entrar en los ajustes del router en `10.0.0.1` e ir a Advanced > Port Forwarding.

### 4. Verizon Fios

Los usuarios de Fios deben entrar en el router en `192.168.1.1` y buscar "Port Forwarding" en los ajustes de Firewall.

## Problemas habituales con la redirección de puertos y cómo solucionarlos

### Error "Connection Timed Out"

Si te aparece el error "Connection Timed Out", hay varias causas posibles. Puede que la redirección de puertos no esté bien configurada, que el firewall esté bloqueando las conexiones o que el servidor no esté funcionando correctamente. Para resolverlo, revisa la configuración de la redirección de puertos, crea excepciones en el firewall para Java y Minecraft, y comprueba que el servidor funciona bien.

### No puedes entrar en los ajustes del router

Si no puedes acceder a los ajustes del router, puede que estés usando una IP del router incorrecta o unas credenciales equivocadas. Consulta la documentación del router para encontrar la IP correcta y, si hace falta, restablece las credenciales (aunque esto puede obligarte a resetear el router por completo).

### UPnP no funciona

Si UPnP (Universal Plug and Play) no funciona, puede que esté desactivado en el router o que lo bloquee tu ISP. Prueba a activar UPnP en los ajustes del router si es posible, o pasa a la redirección de puertos manual que se describe en esta guía.

### Problemas con CGNAT

CGNAT (Carrier-Grade NAT) es habitual en los ISPs móviles e impide que funcione la redirección de puertos tradicional. Si tu ISP usa CGNAT, puedes pedirle una IP pública (puede costar más) o usar un servicio de túneles como Pinggy, como se explica más abajo. Los jugadores que quieran proteger su privacidad en internet también pueden plantearse un servicio de VPN como {{< link href="https://veepn.com/vpn-servers/hong-kong/" >}}VeePN{{< /link >}} al conectarse a servidores de juego.

## Alternativas a la redirección de puertos: usar Pinggy

La redirección de puertos no le funciona a todo el mundo. Si tu ISP usa CGNAT, tu router no la admite o simplemente no quieres exponer la IP de tu casa, [Pinggy](https://pinggy.io) es la forma más facil de esquivar el problema. Crea un túnel TCP seguro desde los servidores de Pinggy directamente hasta tu servidor de Minecraft: sin configurar el router, sin IP estática y sin reglas de firewall.

Así se configura:

1. Asegúrate de tener SSH disponible en tu sistema (viene preinstalado en Windows 10+, macOS y Linux)
2. Con el servidor de Minecraft en marcha, ejecuta este comando:

{{< ssh_command >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:25565 tcp@free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:25565 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:25565 tcp@free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:25565 tcp@free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:25565 tcp@free.pinggy.io\"}}}"
{{</ ssh_command >}}

Esto crea un túnel TCP desde los servidores de Pinggy hasta tu servidor de Minecraft. Pinggy te dará un hostname y un puerto qeu tus amigos pueden usar para conectarse a tu servidor.

### Ventajas de usar Pinggy para Minecraft

Hay varias razones por las que Pinggy se ha convertido en una opción popular para alojar servidores de Minecraft en 2026:

- **Se salta el CGNAT y los ISPs restrictivos**: funciona incluso cuando tu ISP bloquea la redirección de puertos tradicional
- **Conexión cifrada**: todo el tráfico entre tu servidor y los jugadores pasa por un túnel seguro
- **Configuración con un solo comando**: sin entrar en el router ni tocar reglas de firewall; ejecutas el comando SSH y listo
- **Compatible con IP dinámica**: tu hostname de Pinggy no cambia aunque tu ISP te cambie la IP
- **Nada que instalar**: usa SSH, que ya viene integrado en cualquier sistema operativo moderno

Para una guía detallada sobre cómo usar Pinggy específicamente con Minecraft, consulta nuestro artículo sobre {{< link href="/blog/exposing_localhost_minecraft_server" >}}cómo exponer un servidor de Minecraft en localhost{{< /link >}}.

## Proteger tu servidor de Minecraft

Hacer que tu servidor sea accesible públicamente implica pensar en la seguridad. Unos cuantos pasos básicos mantendrán fuera a los griefers y a la gente con malas intenciones:

- **Activa la lista blanca**: deja entrar solo a los nombres de usuario aprobados; es la protección más eficaz que hay
- **Mantén el servidor actualizado**: usa siempre la última versión del servidor de Minecraft para corregir vulnerabilidades conocidas
- **Usa contraseñas RCON fuertes**: si has activado el acceso por consola remota, asegúrate de que la contraseña sea larga y única
- **Haz copias de seguridad del mundo con regularidad**: automatiza copias diarias para poder recuperarte del griefing o de datos corruptos
- **Vigila los logs del servidor**: revísalos de vez en cuando por si aparecen jugadores desconocidos o patrones de conexión sospechosos

## Conclusión

La redirección de puertos sigue siendo la forma estándar de hacer que un servidor de Minecraft sea accesible desde internet, y en la mayoría de redes domésticas con un router normal, los pasos de arriba te llevarán hasta ahí. Pero el panorama de las redes ha cambiado: cada vez más ISPs usan CGNAT y muchos jugadores no quieren dejar expuesta públicamente la IP de su casa. Ahí es donde entra un túnel como Pinggy: el mismo resultado, sin configurar el router.

Elijas el método que elijas, alojar el servidor tú mismo te da el control total de tu mundo, tus reglas y tu comunidad de jugadores.

Cuando esa comunidad crece más allá de un puñado de amigos, el trabajo de administración deja de ser puramente técnico. La gente necesita enterarse de las ventanas de mantenimiento antes de que reinicies la máquina, de cuándo cambia la lista blanca y de cuál es el nuevo hostname si usas un túnel gratuito que lo va rotando. Discord cubre casi todo eso sin problema, pero si tu grupo es más grande o está repartido entre plataformas, un resumen mensual funciona mejor que un mensaje fijado que nadie vuelve a leer, y cuesta muy poco {{< link href="https://www.flipsnack.com/digital-newsletter" >}}crear una newsletter online{{< /link >}} con lo mejor de las construcciones, los próximos eventos y la siguiente parada programada. ¡A construir!
