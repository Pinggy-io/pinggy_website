---
title: "El mejor DNS para juegos en 2026"
slug: "mejor-dns-para-juegos"
description: "Compara resolutores DNS para juegos, mídelos con ping y con consultas reales del lanzador, y configura el DNS en Windows, macOS, Linux, routers y consolas."
date: 2024-11-21T14:15:25+05:30
lastmod: 2026-11-25T23:20:00+05:30
draft: false
og_image: "images/best_dns_for_gaming/dns_for_gaming.webp"
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Juegos"
tags: ["gaming", "DNS", "networking", "guide"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmcvIiwKICAiQHR5cGUiOiAiSG93VG8iLAogICJuYW1lIjogIkVsIG1lam9yIEROUyBwYXJhIGp1ZWdvcyBlbiAyMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiQ29tcGFyYSByZXNvbHV0b3JlcyBETlMgcGFyYSBqdWVnb3MsIG3DrWRlbG9zIGNvbiBwaW5nIHkgY29uIGNvbnN1bHRhcyByZWFsZXMgZGVsIGxhbnphZG9yLCB5IGNvbmZpZ3VyYSBlbCBETlMgZW4gV2luZG93cywgbWFjT1MsIExpbnV4LCByb3V0ZXJzIHkgY29uc29sYXMuIiwKICAiaW1hZ2UiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vaW1hZ2VzL2Jlc3RfZG5zX2Zvcl9nYW1pbmcvZG5zX2Zvcl9nYW1pbmcud2VicCIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJFbGlnZSBkb3MgcmVzb2x1dG9yZXMgZGlzcG9uaWJsZXMgZW4gdHUgcmVnacOzbiBjb24gZWwgZmlsdHJhZG8gcXVlIG5lY2VzaXRlcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiTWlkZSBjb25zdWx0YXMgRE5TIGRlIHR1IGxhbnphZG9yIGRlc2RlIHR1IGNvbmV4acOzbiB5IHJlZ2lzdHJhIGxvcyB0aWVtcG9zIGRlIGVzcGVyYSBhZ290YWRvcy4iCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiQ29uZmlndXJhIGxhcyBkaXJlY2Npb25lcyBlbiB0dSBkaXNwb3NpdGl2byBvIHJvdXRlciB5IHBydWViYSBlbCBpbmljaW8gZGUgc2VzacOzbiB5IGxhIGRlc2NhcmdhIGRlIHVuIHBhcmNoZS4iCiAgICB9CiAgXSwKICAiaW5MYW5ndWFnZSI6ICJlcyIKfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

{{< image "best_dns_for_gaming/dns_for_gaming.webp" "Un mando y un cable Ethernet junto al título de la guía de DNS para juegos" >}}

Si el lanzador tarda en iniciar sesión, el DNS es una de las cosas que puedes medir. Un resolutor puede responder antes o dirigir una descarga a otro servidor de la CDN. Cuando ya estás jugando contra una IP concreta, cambiar de DNS no acorta el trayecto de los paquetes hasta ese servidor.

{{% tldr %}}

- Compara tu resolutor habitual con dos alternativas desde la red en la que juegas. Mide consultas DNS y cuenta los tiempos de espera agotados.
- Si necesitas un filtro familiar, elige dos direcciones que apliquen la misma política. El dispositivo puede consultar cualquiera de ellas.
- Si el problema aparece solo durante la partida, comprueba la región del servidor, la pérdida de paquetes y la conexión Wi-Fi.

{{% /tldr %}}

## Qué DNS probar en un PC o una consola

| Proveedor | Direcciones IPv4 | Cuándo elegirlo |
| --- | --- | --- |
| <a href="https://developers.cloudflare.com/1.1.1.1/ip-addresses/" target="_blank">Cloudflare</a> | `1.1.1.1`, `1.0.0.1` | Sin filtrado en este par. Para bloquear malware usa `1.1.1.2` y `1.0.0.2`. Para añadir un filtro de contenido adulto usa `1.1.1.3` y `1.0.0.3`. |
| <a href="https://developers.google.com/speed/public-dns" target="_blank">Google Public DNS</a> | `8.8.8.8`, `8.8.4.4` | Una segunda referencia para medir consultas desde tu conexión. |
| <a href="https://www.opendns.com/" target="_blank">OpenDNS</a> | `208.67.222.222`, `208.67.220.220` | Ofrece controles de contenido. Cisco indica que el servicio está suspendido en Francia y determinados territorios franceses. |
| <a href="https://docs.quad9.net/services/" target="_blank">Quad9</a> | `9.9.9.9`, `149.112.112.112` | Bloquea dominios maliciosos. Quad9 está retirando su servicio en Francia. |
| <a href="https://dns.watch/" target="_blank">DNS.WATCH</a> | `84.200.69.80`, `84.200.70.40` | El proveedor declara que valida DNSSEC y no registra las consultas. |
| <a href="https://controld.com/free-dns" target="_blank">Control D</a> | `76.76.2.0`, `76.76.10.0` | Este par es el perfil sin filtros. Los perfiles de bloqueo usan otras direcciones. |
| <a href="https://adguard-dns.io/en/public-dns.html" target="_blank">AdGuard DNS</a> | `94.140.14.14`, `94.140.15.15` | El perfil predeterminado bloquea publicidad y rastreadores. |
| <a href="https://nextdns.io/pricing" target="_blank">NextDNS</a> | Configuración propia | Puedes personalizar los filtros. El plan gratuito los aplica a las primeras 300.000 consultas del mes. Al superar el límite, sigue resolviendo sin filtrar. |
| <a href="https://joindns4.eu/for-public" target="_blank">DNS4EU</a> | `86.54.11.100`, `86.54.11.200` | Resolución en la UE. Este perfil solo aplica los bloqueos de dominios exigidos por orden judicial. El perfil de protección usa `86.54.11.1` y `86.54.11.201`. |

Si alojas tu **propio servidor de juegos**, quizá necesites DNS autoritativo para publicar un nombre de dominio. Dynadot, por ejemplo, permite registrar un dominio, apuntarlo a la IP de tu servidor y crear registros SRV en subdominios para los juegos que los admiten. Ese servicio no proporciona una IP de resolutor que debas introducir en la consola. <a href="https://www.dynadot.com/domain/search" target="_blank">Búsqueda de dominios de Dynadot</a> · <a href="https://www.dynadot.com/help/question/add-SRV-record" target="_blank">Configuración de registros SRV</a>.

## Cómo medir una consulta desde casa

- **Para qué sirve de verdad**: saludos iniciales más rápidos durante el login, el emparejamiento y el arranque de las descargas de parches.
- **Herramientas**: `ping` para una comprobación rápida; <a href="https://www.grc.com/dns/benchmark.htm" target="_blank">GRC DNS Benchmark</a> en Windows (sigue con mantenimiento activo), <a href="https://github.com/mrwiora/NAMEinator" target="_blank">NAMEinator</a> (el sucesor mantenido de namebench) o `dnsperf` en Linux. El namebench original de Google lleva años abandonado, así que olvídate de él.

### Pasos para medir la latencia con `ping`

1. Abre tu terminal o el símbolo del sistema.
2. Escribe esto y pulsa Enter.
   ````plaintext
   ping 8.8.8.8
   ````
3. Fijate en el tiempo que aparece en la salida (`time=XX ms`) para medir la latencia de ida y vuelta.

#### Ejemplo de salida

{{< image "best_dns_for_gaming/ping_result.webp" "Respuestas ICMP a ping 8.8.8.8 y resumen del tiempo de ida y vuelta" >}}

Los valores `time=XX ms` son la latencia. Cuanto más bajos, mejor. Ten en cuenta que `ping` mide el viaje de ida y vuelta de un paquete ICMP hasta la IP del resolutor, no lo que tarda en responder una consulta DNS. Un equipo puede responder al ping aunque falle el servicio DNS.

#### Comparar varios servidores DNS

Repite la prueba de `ping` con otros servidores DNS, como el `1.1.1.1` de Cloudflare:

```plaintext
ping 1.1.1.1
```

### Cronometrar una consulta DNS real

`ping` sirve para hacer una primera criba. Para medir la consulta en sí en macOS o Linux con `dig`, ejecuta estas órdenes desde tu conexión habitual. La primera utiliza el servidor que `dig` ve de forma predeterminada. Las otras dos preguntan por el mismo registro a resolutores concretos. Un navegador con su propio DNS cifrado puede seguir otro camino.

```sh
dig store.steampowered.com A +stats
dig @1.1.1.1 store.steampowered.com A +stats
dig @8.8.8.8 store.steampowered.com A +stats
```

Busca `status: NOERROR`, comprueba que hay una respuseta y compara `Query time` en milisegundos. Repite con varios dominios que use tu lanzador. Anota la primera consulta por separado: las repeticiones suelen aprovechar la caché. Cuenta también los fallos. En Windows, la versión 2 de pago de <a href="https://www.grc.com/dns/benchmark.htm" target="_blank">GRC DNS Benchmark</a> también permite comparar DoH y DNS sobre TLS (DoT).

El <a href="https://github.com/Moksh45/DNS-Latency-Checker" target="_blank">script DNS Latency Checker</a> automatiza la comparación con `ping` entre varias direcciones.

{{< image "best_dns_for_gaming/script_result.webp" "Direcciones de varios resolutores ordenadas por el tiempo medio de respuesta al ping" >}}

*La etiqueta «DNS Server Latencies» de la captura corresponde a las respuestas de ping. Para cronometrar una consulta de nombres, usa la prueba con `dig`.*

## Disponibilidad, privacidad y descargas

En una ocasión, una incidencia en la red de Cloudflare dejó el resolutor fuera de servicio durante 62 minutos. Si quieres redundancia entre operadores y utilizas DNS sin filtros, puedes combinar `1.1.1.1` con `8.8.8.8`. Si dependes del control parental, añadir un resolutor sin filtros como secundario puede dejar consultas sin proteger. <a href="https://blog.cloudflare.com/cloudflare-1-1-1-1-incident-on-july-14-2025/" target="_blank">Informe de Cloudflare</a>.

DNSSEC permite verificar los registros de dominios firmados. DoH, DoT y DNS sobre QUIC (DoQ) cifran la conexión con el resolutor. El filtrado de dominios maliciosos es otra función. Quad9 valida DNSSEC en todos sus servicios, incluido `9.9.9.10`, que prescinde del bloqueo de amenazas. <a href="https://quad9.net/news/blog/quad9-enables-dnssec-on-all-service-endpoints/" target="_blank">Anuncio sobre DNSSEC</a> · <a href="https://quad9.net/news/blog/quad9-enables-dns-over-http-3-and-dns-over-quic/" target="_blank">DoQ y HTTP/3 en Quad9</a>.

Dos resolutores pueden dirigir una descarga a nodos distintos de la CDN. El par protegido de Quad9 con EDNS Client Subnet (`9.9.9.11` y `149.112.112.11`) permite enviar parte de la dirección de red del cliente al servidor autoritativo. Si recibes parches desde un nodo lejano, prueba a descargar el mismo contenido y compara. El par predeterminado de Quad9 no envía esa subred.

## Cómo cambiar el DNS

- **Windows 11.** En **Configuración > Red e Internet**, abre las propiedades de tu conexión, edita la asignación del servidor DNS, elige **Manual** e introduce las direcciones IPv4. Para DoH, `Get-DnsClientDohServerAddress` muestra las plantillas registradas. Configura el servidor alternativo con su plantilla correspondiente si también quieres cifrar esa ruta. <a href="https://learn.microsoft.com/en-us/windows-server/networking/dns/dns-encryption-dns-over-https" target="_blank">Guía de Microsoft</a>.
- **macOS.** En **Ajustes del Sistema > Red**, elige la conexión activa y abre **Detalles > DNS**. Añade las direcciones con **+** y confirma el cambio. Para volver al DNS que anuncia el router, elimina las entradas que añadiste.
- **Ubuntu con GNOME.** Abre los ajustes de la conexión cableada o Wi-Fi, entra en **IPv4** o **IPv6**, desactiva el DNS automático e introduce las direcciones. Aplica los cambios y vuelve a conectar. Si usas systemd-resolved, `resolvectl status` muestra los resolutores configurados.
- **Router.** Busca los servidores DNS en los ajustes de Internet, WAN o DHCP según el equipo. Un cambio en DHCP puede requerir que el cliente renueve la conexión. Si elegiste Cloudflare, usa su <a href="https://developers.cloudflare.com/1.1.1.1/check/" target="_blank">prueba de conexión</a>. Un navegador con DNS propio solo comprueba su propia ruta.
- **PS5.** En la configuración de red, abre **Configurar conexión a Internet**, selecciona la red guardada y entra en sus ajustes avanzados. Elige DNS manual e introduce ambas direcciones.
- **Xbox Series X|S.** Abre **Configuración > General > Configuración de red > Configuración avanzada > Configuración de DNS** y elige **Manual**.
- **Nintendo Switch y Switch 2.** En los ajustes de Internet, selecciona la red guardada, cambia sus ajustes y elige DNS manual. <a href="https://www.nintendo.com/en-gb/Support/Nintendo-Switch/How-to-Manually-Enter-DNS-Settings-1496747.html" target="_blank">Guía de Nintendo</a>.

Si una tienda deja de cargar después de activar un filtro, vuelve a probar con la configuración anterior. Si el problema es una NAT estricta en partidas entre pares, cambiar el DNS deja intactos los puertos del router. Para ese caso, consulta la [guía de reenvío de puertos](/blog/how_to_set_up_port_forwarding_even_behind_cgnat/).
