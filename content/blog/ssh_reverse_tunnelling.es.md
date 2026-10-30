---
title: "Túnel SSH inverso"
slug: "tunel-ssh-inverso"
description: "Aprende a usar túneles SSH inversos para acceder de forma segura a servicios locales desde cualquier lugar, aunque estén detrás de firewalls o NAT. Incluye control de dispositivos IoT y acceso a bases de datos."
date: 2024-10-23T14:15:25+05:30
lastmod: 2026-10-29T15:15:25+05:30
draft: false
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJCbG9nUG9zdGluZyIsCiAgIm1haW5FbnRpdHlPZlBhZ2UiOiB7CiAgICAiQHR5cGUiOiAiV2ViUGFnZSIsCiAgICAiQGlkIjogImh0dHBzOi8vcGluZ2d5LmlvL2VzL2Jsb2cvdHVuZWwtc3NoLWludmVyc28vIgogIH0sCiAgImhlYWRsaW5lIjogIlTDum5lbCBTU0ggaW52ZXJzbzogZ3XDrWEgY29tcGxldGEiLAogICJkZXNjcmlwdGlvbiI6ICJBcHJlbmRlIGPDs21vIGZ1bmNpb25hIGVsIHTDum5lbCBTU0ggaW52ZXJzbywgc3VzIGNhc29zIGRlIHVzbyBwcsOhY3RpY29zLCBsYXMgYnVlbmFzIHByw6FjdGljYXMgZGUgc2VndXJpZGFkIHkgY8OzbW8gUGluZ2d5IHNpbXBsaWZpY2EgbGEgY3JlYWNpw7NuIGRlIHTDum5lbGVzIHNlZ3Vyb3MgZGVzZGUgbG9jYWxob3N0LiIsCiAgInB1Ymxpc2hlciI6IHsKICAgICJAdHlwZSI6ICJPcmdhbml6YXRpb24iLAogICAgIm5hbWUiOiAiUGluZ2d5IgogIH0sCiAgImRhdGVQdWJsaXNoZWQiOiAiMjAyNC0xMC0yMyIsCiAgImRhdGVNb2RpZmllZCI6ICIyMDI2LTEwLTI5IiwKICAia2V5d29yZHMiOiAiU1NILCB0w7puZWwgaW52ZXJzbywgYWNjZXNvIHJlbW90bywgTkFULCBmaXJld2FsbCwgUGluZ2d5LCBhdXRvc3NoLCBkZXB1cmFjacOzbiByZW1vdGEsIGFjY2VzbyBhIElvVCwgdMO6bmVsZXMgYSBiYXNlcyBkZSBkYXRvcywgc2VndXJpZGFkIFNTSCwgcmVkaXJlY2Npw7NuIGRlIHB1ZXJ0b3MiLAogICJhcnRpY2xlU2VjdGlvbiI6ICJSZWRlcywgRGV2T3BzLCBTZWd1cmlkYWQiLAogICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vZXMvYmxvZy90dW5lbC1zc2gtaW52ZXJzby8iLAogICJhcnRpY2xlQm9keSI6ICJQYXJhIGNyZWFyIHVuIHTDum5lbCBTU0ggaW52ZXJzbyBiw6FzaWNvLCB1c2EgZXN0ZSBjb21hbmRvOlxuXG5zc2ggLVIgODA4MDpsb2NhbGhvc3Q6MzAwMCB1c2VyQHJlbW90ZS1zZXJ2ZXIuY29tXG5cbkVzdG8gZXhwb25lIHR1IHB1ZXJ0byBsb2NhbCAzMDAwIGVuIGVsIHB1ZXJ0byA4MDgwIGRlbCBzZXJ2aWRvciByZW1vdG8uIENvbiBQaW5nZ3kgcHVlZGVzIGNvbnNlZ3VpciB1biB0w7puZWwgcGFyZWNpZG8gc2luIG5lY2VzaXRhciB1bmEgSVAgcMO6YmxpY2EgbmkgdW5hIGNvbmZpZ3VyYWNpw7NuIGNvbXBsaWNhZGEuIgp9Cjwvc2NyaXB0Pgo="
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "SSH"
tags: ["ssh", "tunneling", "networking"]
og_image: "images/ssh_reverse_tunnelling/ssh-reverse-tunneling.webp"
outputs:
  - HTML
  - AMP
---

{{< llm-context >}}Para acceder a un servicio local desde cualquier sitio con Pinggy - ejecuta tu servicio en local (por ejemplo, en el puerto 3000) y luego ejecuta `ssh -p 443 -R0:localhost:3000 free.pinggy.io` para obtener una URL HTTPS pública que lleva hasta él, sin tener que alojar un túnel inverso propio.{{< /llm-context >}}

{{< image "ssh_reverse_tunnelling/ssh-reverse-tunneling.webp" "Ejemplo de comando de túnel SSH inverso" >}}


Entrar en una máquina cuya ruta de red no controlas - un portátil en el Wi-Fi de una cafetería, una Raspberry Pi en una ubicación remota, un servidor detrás de un firewall corporativo - es un problema con el que todo desarrollador se encuentra tarde o temprano. SSH te deja redirigir puertos en las dos direcciones. La dirección menos obvia, el túnel inverso, es la que usas cuando no se puede llegar directamente a la máquina que ejecuta tu servicio: está detrás de un firewall corporativo, en una red privada o tiene una IP dinámica sin acceso entrante. En lugar de abrir agujeros en un firewall o configurar la redirección de puertos en un router que quizá no controlas, inicias una conexión hacia fuera desde la máquina restringida, y el servidor remoto devuelve el tráfico por ese túnel.

[Pinggy](https://pinggy.io) se basa justo en este mecanismo: se encarga del lado del servidor público para que no tengas que montar el tuyo.

{{% tldr %}}
El túnel SSH inverso te permite exponer servicios locales a internet, saltándote los firewalls y las restricciones de NAT.

**Comandos básicos:**
1. Crea un túnel inverso básico:
   ```bash
   ssh -R 8080:localhost:3000 user@remote-server.com
   ```
   
2. Crea un túnel persistente con autossh:
   ```bash
   autossh -M 0 -R 8080:localhost:3000 user@remote-server.com
   ```
   
3. Túnel rápido con Pinggy:
   ```bash
   ssh -p 443 -R0:localhost:3000 free.pinggy.io
   ```
{{% /tldr %}}

## ¿Qué es un túnel SSH inverso?

Un túnel SSH (Secure Shell) inverso permite que una máquina externa se conecte a una máquina local, aunque esa máquina local esté detrás de un firewall o no tenga una dirección IP pública. A diferencia de la redirección de puertos SSH habitual, en la que el tráfico que llega a un puerto del sistema local se reenvía hacia fuera, a un sistema remoto, el túnel inverso envía el tráfico desde el sistema remoto de vuelta a tu máquina local.

Esta técnica es especialmente útil para:

- Reenviar tráfico desde un sistema remoto a un sistema local que está detrás de un NAT
- Saltarse restricciones de firewall
- Acceder a servicios de una máquina local desde una ubicación remota
- Permitir la depuración o las pruebas remotas de aplicaciones
- Gestionar dispositivos IoT, servidores o bases de datos desde cualquier lugar


{{< image "ssh_reverse_tunnelling/ssh-reverse-tunnelling.webp" "Ejemplo de túnel SSH inverso" >}}

## ¿Cómo funciona un túnel SSH inverso?

El principio básico del túnel SSH inverso es crear con SSH una conexión entre una máquina remota (que puede ser un servidor en la nube) y tu máquina local, redirigiendo un puerto del sistema remoto a un servicio que se ejecuta en tu sistema local.

{{< image "ssh_reverse_tunnelling/ssh_command.webp" "Comando de túnel SSH inverso" >}}

- **Sintaxis del comando:**

    ```
    ssh -R [remote-port]:[hostname]:[port] [user]@[remote-host]
    ```
    - `-R`: Define el túnel inverso
    - `[remote-port]`: El puerto de la máquina remota que reenvía el tráfico
    - `[hostname]:[port]`: El host y el puerto al que la máquina local reenviará el tráfico. Aquí `hostname` puede ser simplemente `localhost` para reenviar el tráfico a un servicio que se ejecuta en este mismo sistema local.
    - `[user]@[remote-host]`: Credenciales del servidor SSH remoto

Por ejemplo:

```
ssh -R 8080:localhost:3000 user@remote-server.com
```

En este ejemplo, todo el tráfico que llegue a `remote-server.com:8080` se reenviará al puerto `3000` de tu máquina local, de modo que cualquiera que se conecte al servidor remoto podrá acceder a tu servicio alojado en local.

## Cómo configurar un túnel SSH inverso

Configurar un túnel SSH inverso te permite reenviar de forma segura el tráfico de un servidor remoto a tu máquina local. Los pasos pueden variar según tu sistema operativo. Aquí tienes una guía para **Linux**, **macOS** y **Windows**.

### En Linux


#### Paso 1: Comprueba que SSH está instalado
La mayoría de distribuciones Linux traen SSH preinstalado. Si no lo tienes, puedes instalarlo con estos comandos:

En Ubuntu/Debian:

```bash
sudo apt update
sudo apt install openssh-client
```
#### Paso 2: Configura SSH en el servidor remoto

Asegúrate de que SSH está instalado en el servidor remoto y configurado para permitir túneles inversos. Tendrás que editar el archivo de configuración de SSH para habilitar esta función:

1. **Abre el archivo de configuración de SSH en el servidor remoto**:

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. **Busca la línea `GatewayPorts` y ponla en `yes`**:

    ```bash
    GatewayPorts yes
    ```
3. **Reinicia el servicio SSH para aplicar los cambios**:

    ```bash
    sudo systemctl restart sshd
    ```
#### Paso 3: Ejecuta el comando del túnel SSH inverso:
Para crear un túnel inverso, usa este comando:

```bash
ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
```

- `[remote-port]`: El puerto del servidor remoto que quieres reenviar.
- `[local-port]`: El puerto de tu máquina local que recibe el tráfico reenviado.
- `[user]@[remote-host]`: Tus credenciales SSH.

Ejemplo:
```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

Esto reenviará el tráfico del puerto `8080` del servidor remoto al puerto `3000` de tu máquina local.

---

### En macOS


#### Paso 1: Comprueba que SSH está instalado
macOS suele traer SSH preinstalado. Aun así, si falta, puedes instalarlo con **Homebrew**:

```bash
brew install openssh
```

#### Paso 2: Configura SSH en el servidor remoto
Sigue los mismos pasos que en la sección de Linux para configurar SSH en el servidor remoto:

1. Edita `/etc/ssh/sshd_config` para permitir túneles inversos:
```bash
sudo nano /etc/ssh/sshd_config
```
2. Pon `GatewayPorts` en `yes` y reinicia el servicio SSH:
```bash
sudo systemctl restart sshd
```

#### Paso 3: Ejecuta el comando del túnel SSH inverso
El mismo comando de túnel SSH inverso sirve en macOS:

```bash
ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
```
Por ejemplo, si quieres reenviar el puerto `8080` del servidor remoto al puerto `3000` de tu máquina local:

```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

### En Windows

En Windows puedes configurar un túnel SSH inverso con OpenSSH (incluido en Windows 10 y versiones posteriores) o con PuTTY.

### Opción 1: Con OpenSSH (Windows 10 y posteriores)

#### Paso 1: Instala OpenSSH (si no lo tienes ya)
Para comprobar si OpenSSH está instalado, abre PowerShell y ejecuta:

```bash
ssh
```

Si falta OpenSSH, instálalo desde **Configuración > Aplicaciones > Características opcionales > Agregar una característica** y busca **Cliente OpenSSH**.

#### Paso 2: Configura SSH en el servidor remoto
Configura SSH en el servidor remoto editando el archivo `/etc/ssh/sshd_config` como se explica en la sección de Linux, para habilitar `GatewayPorts`.

#### Paso 3: Ejecuta el comando del túnel SSH inverso
Cuando OpenSSH esté listo, puedes usar el mismo comando SSH que en Linux y macOS:

```bash
ssh -R [remote-port]:localhost:[local-port] [user]@[remote-host]
```

Ejemplo:

```bash
ssh -R 8080:localhost:3000 user@remote-server.com
```

### Opción 2: Con PuTTY
Si prefieres una interfaz gráfica, usa PuTTY para configurar el túnel inverso.

#### Paso 1: Descarga e instala PuTTY
Puedes descargar PuTTY desde su web oficial: {{< link href="https://www.putty.org/" >}}Descargar PuTTY{{</ link >}}.

#### Paso 2: Configura el túnel inverso en PuTTY

1. Abre PuTTY e introduce la IP del servidor remoto en el campo **Host Name**.
2. Ve a **Connection > SSH > Tunnels**.
3. En **Source Port**, introduce el puerto remoto que quieres reenviar (por ejemplo, `8080`).
4. En **Destination**, introduce `localhost:[local-port]` (por ejemplo, `localhost:3000`).
5. Selecciona **Remote**.
6. Pulsa **Add** y después **Open** para establecer la conexión.

#### Paso 4: Accede al túnel (todas las plataformas)

Una vez configurado el túnel inverso, todo el tráfico dirigido al servidor remoto (por ejemplo, `remote-server.com:8080`) se reenviará al puerto de tu máquina local (por ejemplo, `localhost:3000`).

#### Paso opcional: túneles persistentes

Si quieres que el túnel inverso sobreviva a las caídas de la sesión SSH o a los reinicios del servidor, usa herramientas como autossh o mete el comando en un servicio de systemd. autossh vigila la conexión y la reinicia si falla:

```bash
autossh -M 0 -o "ServerAliveInterval 30" -o "ServerAliveCountMax 3" -R 8080:localhost:3000 user@remote-server.com
```

Una unidad de systemd normal también sirve, sin la dependencia extra de autossh:

```ini
# /etc/systemd/system/reverse-tunnel.service
[Unit]
Description=Persistent SSH reverse tunnel
After=network-online.target

[Service]
ExecStart=/usr/bin/ssh -N -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -o ExitOnForwardFailure=yes -R 8080:localhost:3000 user@remote-server.com
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Actívala con `systemctl enable --now reverse-tunnel.service`, y systemd se encarga de reiniciarla tanto si se cae la conexión como si se reinicia la máquina.


## Casos de uso habituales del túnel SSH inverso

#### 1. Control remoto de dispositivos IoT

Supón que tienes en casa una Raspberry Pi que controla sensores o cámaras. La Pi no es accesible desde internet, porque está detrás del NAT del router de casa. Desde la Pi, abre un túnel inverso a un servidor que sí controles:

{{< image "ssh_reverse_tunnelling/Accessing-IOT-devices.webp" "Gestionar dispositivos IoT con un túnel SSH inverso" >}}

```
ssh -R 9000:localhost:22 user@remote-server.com
```

El puerto 9000 del servidor remoto lleva ahora al puerto 22 de la Pi. Desde cualquier sitio, `ssh -p 9000 user@remote-server.com` te deja en la shell de la Pi como si estuviera expuesta directamente a internet.

#### 2. Acceso remoto a bases de datos

Una instancia de MySQL en una máquina de desarrollo detrás de un firewall no necesita estar expuesta públicamente para que un compañero la consulte. Saca el puerto por un túnel a través de un servidor compartido:

```
ssh -R 3307:localhost:3306 user@remote-server.com
```

A partir de ahí, `mysql -h remote-server.com -P 3307` se conecta a la base de datos local como si estuviera en el propio servidor remoto. Sin VPN y sin cambiar ninguna regla de firewall.

#### 3. Alojar partidas detrás de un NAT

Algunos juegos multijugador necesitan puertos de entrada abiertos para alojar partidas, y los NAT domésticos suelen bloquearlos. Si un servidor de juego corre en `localhost:25565`, un túnel inverso permite que tus amigos se conecten sin tocar el router:

```
ssh -R 4000:localhost:25565 user@remote-server.com
```

Los demás pueden unirse a través de `remote-server.com:4000`. El túnel hace de relay, así que la IP de tu casa queda totalmente fuera de la ecuación.

## Solución de problemas habituales

Con los túneles inversos hay unos cuantos problemas que aparecen a menudo. Si la conexión falla directamente, lo primero que hay que comprobar es si el servidor remoto tiene `GatewayPorts yes` en `/etc/ssh/sshd_config`: sin eso, el túnel solo se enlaza a `127.0.0.1` en el lado remoto, no a la interfaz pública.

Los errores de autenticación suelen significar que la clave SSH no está cargada en el agente. Ejecuta `ssh-add` para cargar la clave por defecto, o pasa `-i ~/.ssh/your_key` de forma explícita en el comando del túnel.

Los conflictos de puertos en el lado remoto son fáciles de pasar por alto. Si el puerto que indicaste ya está en uso, SSH sigue adelante sin decir nada, pero el túnel no funcionará como esperas. Compruébalo con `lsof -i :<port>` o `ss -tlnp | grep <port>` en el servidor remoto, y elige otro puerto si hace falta.

## Buenas prácticas de seguridad para túneles SSH inversos

Aunque el túnel SSH inverso es seguro, conviene seguir algunas buenas prácticas para evitar accesos no autorizados:

1. **Usa claves SSH**: desactiva la autenticación por contraseña en tu servidor SSH y permite el acceso solo con pares de claves pública/privada para mejorar la seguridad:
   `PasswordAuthentication no`
   en el archivo `sshd_config`.

2. **Claves protegidas con frase de contraseña**: protege siempre tus claves privadas con una frase de contraseña para que no queden comprometidas si te las roban.

3. **Restringe el acceso**: limita qué usuarios y direcciones IP pueden acceder al túnel inverso con reglas de firewall o indicando los usuarios permitidos en `sshd_config`:
   `AllowUsers user@ip-address`

4. **Prefiere `GatewayPorts clientspecified` a `yes`**: con `GatewayPorts yes`, cada puerto reenviado de forma inversa se enlaza a todas las interfaces del servidor remoto, así que cualquiera que pueda llegar a esa máquina tambien puede llegar a tu túnel. `GatewayPorts clientspecified`, en cambio, deja que el cliente elija la dirección de enlace en cada redirección (`ssh -R 0.0.0.0:8080:...` para hacerlo público, `ssh -R 127.0.0.1:8080:...` para que quede solo en el servidor), lo que es más seguro si el mismo servidor aloja túneles que no quieres que sean públicos por defecto.

5. **Monitorización**: audita con regularidad las conexiones y los logs de SSH para asegurarte de que solo acceden al túnel usuarios autorizados.

## Alternativas al túnel SSH inverso

Aunque el túnel SSH inverso es una herramienta muy útil, hay alternativas que pueden encajar mejor en algunos casos:

- **VPN (red privada virtual)**: una VPN crea un túnel seguro para todo el tráfico de red entre tu máquina y una red remota. Puede escalar mejor y ser más fácil de gestionar si necesitas acceder a varios servicios o máquinas de una red remota.

- **Herramientas de tunneling**: herramientas como [Pinggy](https://pinggy.io) y {{< link href="https://tailscale.com/" >}}Tailscale{{< /link >}} están pensadas para compartir servicios como aplicaciones web y juegos, y te permiten exponer servidores locales a internet con una URL pública sin montar tu propio servidor de túneles inversos.

Cada método tiene sus pros y sus contras según lo que necesites, pero el túnel SSH inverso destaca cuando buscas un acceso seguro y flexible a servicios concretos.

## Cómo usa Pinggy el túnel SSH inverso

[Pinggy](https://pinggy.io) ejecuta el servidor SSH público para que tú no tengas que hacerlo. En lugar de aprovisionar un VPS y mantener `sshd_config`, apuntas un solo comando a `free.pinggy.io` y recibes una URL pública al momento:

```
ssh -p 443 -R0:localhost:3000 free.pinggy.io
```

El `-p 443` mantiene viva la conexión en redes que bloquean el puerto 22. El `R0` le dice al servidor que asigne un puerto de forma dinámica. Pinggy responde con una URL como `https://yourapp.a.pinggy.link` que lleva directamente a `localhost:3000` en tu máquina. Comparte esa URL y cualquier petición que llegue a ella volverá por el túnel hasta tu servicio local.

Si tu red hace pasar el tráfico por un proxy HTTP, puedes enrutar la conexion SSH a través de él con `ncat`:

```
ssh -p 443 -R0:localhost:4000 -o ProxyCommand="ncat --proxy-type http --proxy 192.168.2.2:3128 %h %p" free.pinggy.io
```

Para redes en las que incluso eso está bloqueado, la {{< link href="/app/" >}}app{{< /link >}} de Pinggy puede establecer el túnel sobre SSL sin un cliente SSH aparte.

## Conclusión

El túnel SSH inverso funciona de forma fiable en situaciones en las que fallan la mayoría de técnicas de acceso remoto: sin IP pública, sin puertos de entrada abiertos y sin control sobre el borde de la red. La contrapartida es que necesitas un servidor accesible en el otro extremo para anclar el túnel, que es justo lo que resuelve Pinggy.

Tanto si estás probando un webhook como si depuras una app móvil contra una API local o accedes a un dispositivo en una instalación remota, el patrón es el mismo: inicia la conexión hacia fuera desde la máquina restringida y deja que el túnel devuelva el tráfico. Una vez que interiorizas ese modelo mental, el flag `-R` deja de parecer oscuro y empieza a parecer lo obvio.
