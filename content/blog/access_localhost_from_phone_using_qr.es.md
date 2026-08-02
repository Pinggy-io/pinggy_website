---
title: "¡Accede a localhost desde tu móvil!"
slug: "accede-a-localhost-desde-tu-movil"
description: "Accede a localhost desde tu móvil con los códigos QR de Pinggy. Abre un túnel y pulsa 'u' o 'c' para ver el QR, o usa los usuarios 'qr'/'aqr' para mostrarlo siempre."
date: 2023-08-10T14:15:25+05:30
lastmod: 2026-08-01T14:15:25+05:30
draft: false
og_image: "images/qr/pinggyqr.webp"
# Tags stay in English (the Spanish site has taxonomies disabled), so set the
# eyebrow explicitly or the template falls back to showing an English tag.
eyebrow: "Novedades"
tags: ["update", "guide"]
outputs:
  - HTML
  - AMP
---

{{< video poster="/assets/tunnelvideothumb.jpg" src="/assets/qr.webm" >}}

#### ¡Pinggy ya muestra códigos QR en la propia terminal!

<br>

{{% tldr %}}

1. Abre un túnel de Pinggy y pulsa **`u`** o **`c`** para ver el código QR.
2. Pulsa **`Esc`** para ocultarlo.
3. O usa **`qr`** o **`aqr`** como usuario para mostrarlo siempre en la terminal:
   ```
   ssh -p443 -R0:localhost:8000 qr@free.pinggy.io
   ```
   ```
   ssh -p443 -R0:localhost:8000 aqr@free.pinggy.io
   ```
4. Puedes pasar tu `token` junto con `qr` uniéndolos con el símbolo `+`:
   ```
   ssh -p443 -R0:localhost:8000 token+qr@pro.pinggy.io
   ```

{{% /tldr %}}

Pinggy puede imprimir códigos QR de las URLs del túnel en ASCII o en Unicode. Estas son las instrucciones para ambos.

## ASCII

Abre un túnel normal de Pinggy:

```
ssh -p 443 -R0:localhost:8000 free.pinggy.io
```

Pulsa **`c`** para mostrar el código QR. Aparecerá el QR que representa la URL del túnel en formato ASCII, como se ve en la captura siguiente.

Puedes usar las **flechas del teclado** para recorrer las distintas URLs y sus códigos QR. Para volver a la pantalla normal, pulsa **`Esc`**.

{{< figure src="/doc_img/qrcode/qr-ascii2.webp" alt="Pulsa c para mostrar el código QR en ASCII" >}}

Este código QR se dibuja con caracteres ASCII, así que funciona en prácticamente cualquier terminal. Aun así, en ventanas pequeñas puede no caber bien. Si quieres un QR más compacto, usa la versión Unicode.

## Unicode

Para un código QR más compacto, pulsa **`u`** y se generará usando caracteres Unicode.

{{< figure src="/doc_img/qrcode/qr-unicode2.webp" alt="Pulsa u para mostrar el código QR en Unicode" >}}

El QR en Unicode cabe sin problema en una terminal de 80x25. Eso sí, la terminal tiene que soportar el juego de caracteres Unicode.

# Mostrar siempre el código QR

Pinggy también admite las palabras clave `qr` y `aqr` al crear un túnel, para mostrar los códigos QR en la terminal de forma permanente.

{{< figure src="/doc_img/qrcode/qr-inline-unicode2.webp" alt="Mostrar siempre el código QR en la TUI" >}}

```
ssh -p443 -R0:localhost:8000 qr@free.pinggy.io
```

Si quieres pasar otra palabra clave, como un token, únelas con el símbolo `+`:

```
ssh -p443 -R0:localhost:8000 qr+token@pro.pinggy.io
```

Aquí `qr` genera el código en Unicode, mientras que `aqr` lo genera en ASCII.
