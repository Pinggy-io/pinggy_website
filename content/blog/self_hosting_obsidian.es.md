---
title: "Self-hosting de Obsidian"
slug: "self-hosting-de-obsidian"
description: "Guía completa para montar tu propia sincronización de Obsidian con Docker, CouchDB y un túnel de Pinggy. Sin pagar Obsidian Sync, con control total y con todo lo divertido de construir tu propio servidor de sincronización."
date: 2025-09-14T14:30:00+05:30
lastmod: 2026-10-29T14:30:00+05:30
draft: false
og_image: "images/self_hosting_obsidian/self_hosting_obsidian_complete_guide.webp"
# Las etiquetas se mantienen en inglés (el sitio en español tiene las taxonomías
# desactivadas), así que el eyebrow se fija a mano para que no salga en inglés.
eyebrow: "Obsidian"
tags: ["obsidian", "self-hosted", "Docker", "Pinggy", "ngrok"]
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiQ8OzbW8gbW9udMOpIG1pIHByb3BpbyBPYnNpZGlhbiBTeW5jIGNvbiBEb2NrZXIsIENvdWNoREIgeSB1biB0w7puZWwgZGUgUGluZ2d5IiwKICAiZGVzY3JpcHRpb24iOiAiR3XDrWEgY29tcGxldGEgcGFyYSBtb250YXIgdHUgcHJvcGlhIHNpbmNyb25pemFjacOzbiBkZSBPYnNpZGlhbiBjb24gRG9ja2VyLCBDb3VjaERCIHkgdW4gdMO6bmVsIGRlIFBpbmdneS4gU2luIHBhZ2FyIE9ic2lkaWFuIFN5bmMsIGNvbiBjb250cm9sIHRvdGFsIHkgY29uIHRvZG8gbG8gZGl2ZXJ0aWRvIGRlIGNvbnN0cnVpciB0dSBwcm9waW8gc2Vydmlkb3IgZGUgc2luY3Jvbml6YWNpw7NuLiIsCiAgImltYWdlIjogImh0dHBzOi8vcGluZ2d5LmlvL2ltYWdlcy9zZWxmX2hvc3Rpbmdfb2JzaWRpYW4vc2VsZl9ob3N0aW5nX29ic2lkaWFuX2NvbXBsZXRlX2d1aWRlLndlYnAiLAogICJzdGVwIjogWwogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiSW5zdGFsYSBEb2NrZXIgZW4gdHUgc2lzdGVtYSAoV2luZG93cywgbWFjT1MgbyBMaW51eCkiCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgInRleHQiOiAiTGV2YW50YSBDb3VjaERCIGVuIHVuIGNvbnRlbmVkb3IgZGUgRG9ja2VyIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvbmZpZ3VyYSBsYSBiYXNlIGRlIGRhdG9zIHkgbGFzIGN1ZW50YXMgZGUgdXN1YXJpbyBkZSBDb3VjaERCIgogICAgfSwKICAgIHsKICAgICAgIkB0eXBlIjogIkhvd1RvU3RlcCIsCiAgICAgICJ0ZXh0IjogIkNvbmZpZ3VyYSB1biB0w7puZWwgZGUgUGluZ2d5IHBhcmEgZWwgYWNjZXNvIHJlbW90byIKICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAidGV4dCI6ICJJbnN0YWxhIHkgY29uZmlndXJhIGVsIHBsdWdpbiBMaXZlU3luYyBkZSBPYnNpZGlhbiIKICAgIH0KICBdCn0KPC9zY3JpcHQ+"
outputs:
  - HTML
  - AMP
---

{{< image "self_hosting_obsidian/self_hosting_obsidian_complete_guide.webp" "Self-hosting de Obsidian" >}}

Obsidian Sync cuesta $5/mes ($4/mes si pagas al año). Puedes sustituirlo por un contenedor de {{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}}, el plugin de la comunidad Self-hosted LiveSync y un túnel para llegar a la base de datos desde fuera de tu red doméstica. Yo lo tengo en Docker con {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} como túnel; el coste mensual total es cero. Este artículo recorre la configuración de principio a fin, con Self-hosted LiveSync 1.0.35 (publicado el 5 de octubre de 2026) y CouchDB 3.5.

LiveSync hace casi todo el trabajo pesado. Habla directamente el protocolo de replicación de CouchDB, así que los cambios se propagan en un segundo o dos y los conflictos se resuelven en el cliente sin merges manuales. Lo he usado durante grandes reorganizaciones del vault y con ediciones simultáneas entre escritorio y móvil, y no he perdido ni una nota. La parte de Docker hace que la instalación sea idéntica en Windows, macOS y Linux. Calcula entre 30 y 60 minutos de principio a fin. Haz antes una copia de seguridad de tu vault y desactiva Obsidian Sync, iCloud o cualquier otro servicio que escriba en el mismo vault antes de conectar LiveSync.

{{% tldr %}}
**Lo que vas a montar:**
- Una base de datos CouchDB autoalojada para guardar tus notas de forma segura
- Contenedores Docker para desplegar y gestionar todo fácilmente en cualquier sistema operativo
- Un túnel de Pinggy para acceso remoto seguro sin pelearte con el reenvío de puertos
- Sincronización en tiempo real entre todos tus dispositivos con el plugin LiveSync
- Control total de tus datos sin cuotas mensuales (¡te ahorras $48 al año!)

**Requisitos previos:**
- Docker instalado en tu sistema (Windows, macOS o Linux)
- Conocimientos básicos de línea de comandos (nivel copiar y pegar)
- Obsidian instalado en tus dispositivos
- Deno 2 (solo para ejecutar una vez el script de configuración de CouchDB de LiveSync)
{{% /tldr %}}

## Por qué monté mi propio servidor de sincronización

Mi vault tiene unos cuantos miles de notas: documentación de proyectos, fragmentos de código, investigación, entradas de diario, la mezcla de siempre. Tener todo eso en los servidores de otro empezó a parecerme un punto único de fallo en el que no había pensado lo suficiente. Los \$5/mes no eran realmente el problema; el problema era el control. Dos conflictos de sincronización molestos (y una edición perdida) despues, me puse a buscar una alternativa.

Lo que me empujó a alojarlo yo mismo:

* **Privacidad**: mi vault tiene trabajo de clientes y notas personales que prefiero no dejar en servidores ajenos.
* **Coste**: \$48 al año no es mucho, pero la opción autoalojada resultó ser mejor, además de más barata.
* **Aprendizaje**: montarlo me enseñó cómo funciona de verdad la replicación de CouchDB, algo que llevaba años dando por sentado sin entenderlo.
* **Fiabilidad**: el uptime, las copias de seguridad y el plan de recuperación son cosa mía. Ningún tercero puede cambiarme las condiciones.
* **Flexibilidad**: puedo ajustar cualquier capa del stack sin esperar a que otro saque una función.

Probé un par de enfoques más antes de quedarme con este. La sincronización basada en Git (hacer commit de las notas, push, pull) se vuelve ruidosa enseguida y genera conflictos de merge en el móvil. Syncthing maneja bien archivos arbitrarios, pero no sabe qué es una nota, así que las sincronizaciones parciales dejan Obsidian en estados intermedios raros. CouchDB con LiveSync fue la primera combinación que simplemente se portó bien.

## Qué vamos a montar
Cuatro piezas, todas de código abierto salvo Pinggy:

- **{{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}}** es la base de datos. Su protocolo de replicación es lo que hace que todo funcione; los nodos y los clientes compatibles con CouchDB (como LiveSync) se ponen de acuerdo intercambiando revisiones de documentos, no comparando archivos.
- **Docker** hace que la instalación sea reproducible en Windows, macOS y Linux. La parte de CouchDB es un único `docker-compose.yml`.
- **Self-hosted LiveSync** es el plugin de la comunidad de Obsidian que habla con CouchDB. Vigila el vault en busca de cambios y los sube al servidor en un segundo o dos.
- **{{< link href="https://pinggy.io" >}}Pinggy{{< /link >}}** es un túnel basado en SSH que le da al contenedor de CouchDB una URL HTTPS pública. Te ahorra el reenvío de puertos en el router y toda la fontanería del DNS dinámico.

## Requisitos previos y del sistema

Los requisitos del sistema son los que necesite Docker para funcionar. CouchDB en sí consume pocos recursos, así que una máquina modesta (un portátil viejo, un VPS barato, un servidor casero, una Raspberry Pi) es más que suficiente.

Necesitarás **Docker** en la máquina que vaya a alojar CouchDB. Docker Desktop es la instalación más sencilla en Windows y macOS; en Linux, Docker Engine desde el repositorio oficial es el camino más limpio. Si ya tienes Docker funcionando para otros proyectos, no tienes que hacer nada más.

También necesitarás **Obsidian** en cada dispositivo que quieras sincronizar. LiveSync funciona donde funcione Obsidian: Windows, macOS, Linux, iOS y Android.
## Paso 1: Instalar Docker

Docker es la base de nuestra configuración: la contenedorización hace que el despliegue sea consistente entre sistemas operativos distintos. El proceso de instalación cambia según la plataforma, así que voy a cubrir los tres sistemas operativos principales.

### Instalación en Windows

Descarga Docker Desktop desde {{< link href="https://www.docker.com/products/docker-desktop/" >}}docker.com{{< /link >}} y ejecuta el instalador. Necesitas Windows 10 de 64 bits Pro, Enterprise o Education (Build 19041 o superior), o Windows 11. El instalador activará WSL 2 si todavía no lo tienes activo.

```powershell
# Verify Docker installation
docker --version
docker compose version
```

Tras la instalación, Docker Desktop debería mostrar un indicador de estado verde en la bandeja del sistema. Si tienes problemas, asegúrate de que la virtualización está activada en la BIOS.

Nota: el binario antiguo `docker-compose` (V1, con guion) se retiró en 2023. Compose V2 viene como plugin de la CLI de Docker y se invoca como `docker compose` (con un espacio). Docker Desktop lo instala por defecto.



### Instalación en macOS

Descarga Docker Desktop para Mac desde la web oficial. El instalador funciona tanto en Macs con Intel como con Apple Silicon que tengan macOS 10.15 o posterior.

```bash
# Verify Docker installation
docker --version
docker compose version
```

### Instalación en Linux

En Ubuntu y Debian, usa el repositorio apt oficial de Docker para tener la versión más reciente:

```bash
# Add Docker's official GPG key
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add your user to docker group (requires logout/login)
sudo usermod -aG docker $USER

# Verify installation
docker --version
docker compose version
```

Estos son los comandos de la página de instalación de Docker para Ubuntu (se admiten 22.04, 24.04 y 26.04). En Debian, cambia `ubuntu` por `debian` en las URLs.

## Paso 2: Configurar CouchDB con Docker

Ahora vamos a crear nuestra instancia de {{< link href="https://couchdb.apache.org/" >}}CouchDB{{< /link >}} con Docker. CouchDB encaja perfectamente en este caso de uso porque está diseñado para la replicación y se encarga de la lógica de sincronización compleja que hace que LiveSync funcione tan bien.

### Crear la configuración de Docker Compose

Crea un directorio nuevo para tu servidor de sincronización de Obsidian y prepara la configuración de Docker Compose:

**Windows (PowerShell):**
```powershell
# Create project directory
mkdir obsidian-sync
cd obsidian-sync
mkdir couchdb-data, couchdb-etc

# Create docker-compose.yml
New-Item -ItemType File -Name "docker-compose.yml"
```

**macOS/Linux:**
```bash
# Create project directory
mkdir -p obsidian-sync/couchdb-data obsidian-sync/couchdb-etc
cd obsidian-sync

# Create docker-compose.yml
touch docker-compose.yml
```

Ahora edita el archivo `docker-compose.yml` con tu editor de texto favorito y añade la siguiente configuración:

```yaml
services:
  couchdb:
    image: couchdb:3.5
    container_name: couchdb-for-ols
    user: 5984:5984
    environment:
      - COUCHDB_USER=obsidian_admin #Please change as you like.
      - COUCHDB_PASSWORD=change-me-to-a-long-random-password #Please change as you like.
    volumes:
      - ./couchdb-data:/opt/couchdb/data
      - ./couchdb-etc:/opt/couchdb/etc/local.d
    ports:
      - 5984:5984
    restart: unless-stopped
```

El campo `version:` de nivel superior que las guías antiguas ponían al principio del archivo ya no hace falta, y Compose V2 muestra un aviso de obsolescencia si lo incluyes. Ahora el esquema de Compose se deduce de la versión de la CLI.

Sustituye la contraseña de ejemplo por una larga y aleatoria (el generador de un gestor de contraseñas sirve). Esta es la contraseña de administrador de CouchDB, y en cuanto el túnel esté activo esta base de datos será accesible desde internet, así que una contraseña corta o fácil de adivinar es la principal vía por la que esta configuración puede salir mal.

Fijo la imagen a `couchdb:3.5` para que una futura versión mayor no te cambie por debajo al reiniciar. La documentación de LiveSync usa `couchdb:latest`; hoy funciona cualquiera de las dos (`latest` en Docker Hub es la 3.5.2.1 a fecha de octubre de 2026). Si el contenedor se cierra nada más arrancar, revisa primero el propietario de `couchdb-data` y `couchdb-etc`. La documentación de LiveSync dice que CouchDB se ejecuta con el uid 5984 y recomienda esto en un host Linux:

```bash
sudo chown -R 5984:5984 ./couchdb-data ./couchdb-etc
```

{{< image "self_hosting_obsidian/docker_compose.webp" "Ejemplo de archivo Docker Compose" >}}

### Arrancar CouchDB

Lanza tu contenedor de CouchDB con Docker Compose:

**Todas las plataformas:**
```bash
# Start CouchDB in detached mode
docker compose up -d

# Check if container is running
docker compose ps

# View logs if needed
docker compose logs couchdb
```
{{< image "self_hosting_obsidian/run_docker_compose_up_d.webp" "Ejecutar docker compose up -d" >}}

{{< image "self_hosting_obsidian/showing_dokcer_container_running.webp" "Contenedores de Docker en ejecución" >}}


Al cabo de unos instantes, CouchDB debería estar en marcha y accesible en `http://localhost:5984`. Abre la URL en el navegador para comprobarlo: deberías ver una respuesta JSON qeu te da la bienvenida a CouchDB.

{{< image "self_hosting_obsidian/couchdb_running_in_local_host_5984.webp" "CouchDB en ejecución en localhost:5984" >}}

## Paso 3: Inicializar CouchDB para LiveSync

Un contenedor de CouchDB recién creado no está listo para LiveSync. El plugin necesita que el servidor esté configurado para él (configuración de un solo nodo, autenticación, CORS para las peticiones de Obsidian) y que exista una base de datos. Las versiones anteriores de esta guía lo hacían a mano en la página de administración Fauxton, pero LiveSync ahora incluye un script de aprovisionamiento que lo hace todo de una vez, así que usa ese.

Primero comprueba que CouchDB responde. Abre `http://localhost:5984/_utils` e inicia sesión con el usuario y la contraseña de administrador de tu archivo compose.

{{< image "self_hosting_obsidian/login_couch_db.webp" "Iniciar sesión en Fauxton de CouchDB" >}}

El script se ejecuta con Deno 2. Instálalo si no lo tienes:

```bash
# macOS / Linux
curl -fsSL https://deno.land/install.sh | sh
# Windows PowerShell:  irm https://deno.land/install.ps1 | iex
# or: brew install deno / winget install DenoLand.Deno

# confirm it works (open a new terminal first if the installer asks you to)
deno --version
```

Después ejecuta el script con tus credenciales de administrador de CouchDB. `obsidiannotes` es el nombre de base de datos que usa la documentación de LiveSync, pero puedes elegir otro:

```bash
export hostname=http://localhost:5984
export username=obsidian_admin
export password='your-couchdb-admin-password'
export database=obsidiannotes
curl -s https://raw.githubusercontent.com/vrtmrz/obsidian-livesync/main/utils/couchdb/couchdb-init.sh | bash
```

Debería terminar con `CouchDB provisioning completed.` Si muestra `ERROR: Hostname missing`, pasa las tres variables en línea delante de `bash`, como se explica en la {{< link href="https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/setup_own_server.md" >}}guía de configuración del servidor de LiveSync{{< /link >}}.

El script no crea una cuenta aparte sin privilegios de administrador, así que LiveSync se conectará con las credenciales de administrador. Para un servidor personal está bien, pero es un motivo más para usar una contraseña larga.

## Paso 4: Configurar el túnel de Pinggy para el acceso remoto

Ahora que CouchDB funciona en local, necesitamos una forma de acceder a él desde fuera de tu red doméstica. Los métodos tradicionales, como el reenvío de puertos o el DNS dinámico, son tediosos de configurar y conllevan riesgos de seguridad. En su lugar, usaremos {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} para crear un túnel cifrado que expone tu instancia de CouchDB a internet de forma segura.

Lo que hace que {{< link href="https://pinggy.io" >}}Pinggy{{< /link >}} encaje tan bien aquí es que no hay nada que instalar: funciona completamente sobre SSH, que viene preinstalado en cualquier sistema operativo moderno. Ejecutas un solo comando y Pinggy te da una URL HTTPS pública que lleva el tráfico directamente a tu servidor CouchDB local.

**Nota:** El comando de abajo funciona sin cuenta en el plan gratuito, y para hacer pruebas es suficiente. Los túneles gratuitos duran 60 minutos y reciben una URL aleatoria nueva cada vez que te reconectas, así que para un servidor de sincronización te conviene {{< link href="https://pinggy.io/#prices" >}}Pinggy Pro{{< /link >}} (un subdominio persistente y sin límite de tiempo).

### Crear el túnel

Arranca un túnel de Pinggy para exponer tu instancia de CouchDB de forma segura con un solo comando:

{{< ssh_command defaultcommand="ssh -p 443 -R0:localhost:5984 free.pinggy.io" >}}
"{\"cli\":{\"windows\":{\"ps\":\"./pinggy.exe -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"./pinggy.exe -p 443 -R0:localhost:5984 free.pinggy.io\"},\"linux\":{\"ps\":\"./pinggy -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"./pinggy -p 443 -R0:localhost:5984 free.pinggy.io\"}},\"ssh\":{\"windows\":{\"ps\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\"},\"linux\":{\"ps\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\",\"cmd\":\"ssh -p 443 -R0:localhost:5984 free.pinggy.io\"}}}"
{{</ ssh_command >}}

¡Y ya está! Pinggy te dará una URL HTTPS pública (en el plan gratuito, algo como `https://abc123.run.pinggy-free.link`) que lleva de forma segura a tu instancia local de CouchDB. Esta URL funciona desde cualquier lugar de internet, así que podrás sincronizar tus notas de Obsidian desde cualquier dispositivo.

{{< image "self_hosting_obsidian/run_the_pinggy_tunnel.webp" "Ejecutar el túnel de Pinggy" >}}

El túnel mostrará algo parecido a esto:
```
You can access local server via following URL(s):
https://abc123.run.pinggy-free.link
```

Copia esta URL, porque la necesitarás para configurar Obsidian LiveSync. Obsidian en iOS y Android solo se comunica con servidores HTTPS con un certificado válido, que es la otra razón para usar un túnel (o un proxy inverso con un dominio real) en lugar de `http://` a secas en tu LAN.

Si prefieres arrancar el túnel desde un script o un servicio de larga duración (en lugar de dejar abierta una sesión SSH), Pinggy ya ofrece {{< link href="https://pinggy.io/docs/" >}}SDKs oficiales para Node.js y Python{{< /link >}}. Los dos envuelven el mismo protocolo que usa el comando SSH de arriba, así que puedes levantar y tirar el túnel por código desde tu propia automatización. Es útil si quieres que el túnel se levante junto con el contenedor de CouchDB al arrancar la máquina, en lugar de ser un paso manual aparte.

## Paso 5: Instalar Obsidian y configurar LiveSync

Con la base de datos y el túnel en marcha, el resto ocurre en el lado de Obsidian: instala la app, activa el plugin LiveSync y apúntalo a la URL del túnel.

### Descargar e instalar Obsidian

Primero, vamos a instalar Obsidian en tu sistema. Obsidian está disponible para las principales plataformas y es totalmente gratuito.

**Windows:**
1. Visita {{< link href="https://obsidian.md/" >}}obsidian.md{{< /link >}}
2. Haz clic en "Download for Windows"
3. Ejecuta el instalador descargado (`Obsidian.Setup.exe`)
4. Sigue el asistente de instalación
5. Abre Obsidian desde el menú Inicio o desde el acceso directo del escritorio

**macOS:**
1. Visita {{< link href="https://obsidian.md/" >}}obsidian.md{{< /link >}}
2. Haz clic en "Download for Mac"
3. Abre el archivo DMG descargado
4. Arrastra Obsidian a tu carpeta Aplicaciones
5. Abre Obsidian desde Aplicaciones o desde Spotlight

**Linux:**
1. Visita {{< link href="https://obsidian.md/" >}}obsidian.md{{< /link >}}
2. Elige el formato que prefieras:
   - **AppImage** (universal): descárgalo y hazlo ejecutable
   - **Snap**: `sudo snap install obsidian --classic`
   - **Flatpak**: `flatpak install flathub md.obsidian.Obsidian`
   - **DEB/RPM**: descarga el paquete adecuado para tu distribución

{{< image "self_hosting_obsidian/download_obsidian.webp" "Descargar Obsidian" >}}

### Configuración inicial de Obsidian

La primera vez que abras Obsidian:

1. **Crea o abre un vault**: elige "Create new vault" si es la primera vez
2. **Ponle nombre a tu vault**: dale un nombre que tenga sentido, como "Mis notas" o "Base de conocimiento"
3. **Elige la ubicación**: selecciona dónde quieres guardar tus notas en local
4. **Sáltate el tutorial** por ahora (primero vamos a configurar la sincronización)

{{< image "self_hosting_obsidian/create_the_new_vault_in_obsidian.webp" "Crear un nuevo vault de Obsidian" >}}

### Instalar el plugin LiveSync

Ahora vamos a instalar el plugin que se conectará a tu servidor CouchDB:

1. Abre Obsidian y haz clic en el icono de Ajustes (el engranaje) abajo a la izquierda
2. En la barra lateral izquierda, ve a "Community plugins"

{{< image "self_hosting_obsidian/turn_on_community_lugins_in_obsidian.webp" "Activar los plugins de la comunidad" >}}

3. Si es tu primer plugin de la comunidad, haz clic en "Turn on community plugins"

{{< image "self_hosting_obsidian/community_plugins_turn_on_restricted_mode.webp" "Modo restringido de los plugins de la comunidad" >}}

4. Haz clic en "Browse" para abrir el catálogo de plugins


5. En la barra de búsqueda, escribe "Self-hosted LiveSync"

{{< image "self_hosting_obsidian/search_the_self_hosted_livesync_plugin.webp" "Buscar el plugin Self-hosted LiveSync" >}}

6. Busca el plugin de **vorotamoroz** (asegúrate de que es el oficial)
7. Haz clic en "Install"
8. Cuando termine la instalación, haz clic en "Enable" para activar el plugin

{{< image "self_hosting_obsidian/enable_self_hosted_livesync_plugin.webp" "Activar el plugin Self-hosted LiveSync" >}}

### Configurar LiveSync en el primer dispositivo

LiveSync 1.0.x te guía en la configuración con un asistente de bienvenida en lugar de la antigua pestaña Settings > Setup. El flujo de abajo sigue la {{< link href="https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/quick_setup.md" >}}guía de configuración rápida del plugin{{< /link >}}; las capturas de más abajo son de una versión anterior del plugin, así que los textos de los botones pueden variar un poco.

1. Después de activar el plugin, selecciona el aviso `Welcome to Self-hosted LiveSync` para abrir el asistente.
2. Elige `I am setting this up for the first time` y confirma.
3. En `Connection Method`, elige `Configure a remote manually` y luego `Proceed with manual configuration`.
4. En `End-to-End Encryption`, actívalo e introduce una frase de contraseña fuerte para el vault. Guárdala en un lugar seguro: sin ella los datos del servidor no se pueden leer, y todos los demás dispositivos necesitan la misma frase de contraseña.
5. En `Choose a synchronisation remote`, selecciona `CouchDB` y rellena los datos de conexión:
   - **URL**: tu URL completa de Pinggy, con `https://` y sin ninguna ruta extra (por ejemplo, `https://abc123.run.pinggy-free.link`)
   - **Username** y **Password**: tus credenciales de administrador de CouchDB de `docker-compose.yml`
   - **Database name**: `obsidiannotes` (o el nombre que usaras en el paso 3)
6. Selecciona `Create or connect to database and continue`. Esta prueba tiene que pasar para que el asistente siga adelante.
7. Revisa `Setup Complete: Preparing to Initialise Server` y selecciona `Restart and Initialise Server`. Lee el aviso de sobrescritura y continúa con `I Understand, Overwrite Server` solo si este dispositivo va a ser la fuente de verdad y tienes una copia de seguridad.
8. Si ves `No Synchronisation Settings Found` en una base de datos nueva, elige `Use this device's settings`.
9. Confirma el aviso de que las funciones opcionales están desactivadas y deja Obsidian abierto hasta que desaparezcan los indicadores de progreso.

{{< image "self_hosting_obsidian/remote_configuration_server_url.webp" "Configuración de la URL del servidor en LiveSync" >}}

Crea una nota de prueba y deja que se suba antes de añadir un segundo dispositivo.

**Notas sobre la configuración:**
- Usa la URL completa de Pinggy, incluido `https://`
- No añadas `/obsidiannotes` ni ninguna otra ruta a la URL
- Asegúrate de que el túnel de Pinggy está en marcha antes de lanzar la prueba de conexión

## Paso 6: Añadir más dispositivos

Una de las mejores cosas de esta configuración es lo fácil que resulta añadir dispositivos nuevos a tu red de sincronización.

### Generar una Setup URI en el primer dispositivo

Cuando la nota de prueba se haya sincronizado, genera una Setup URI desde este dispositivo que ya funciona. Recoge los ajustes que este dispositivo está usando de verdad, incluida la configuración de cifrado.

1. Abre la paleta de comandos de Obsidian
2. Ejecuta `Self-hosted LiveSync: Copy settings as a new Setup URI`
3. Introduce una frase de contraseña para proteger la URI y selecciona `OK`
4. Copia el resultado. Tiene esta pinta: `obsidian://setuplivesync?settings=...`

**Nota de seguridad**: la URI contiene tus credenciales y los ajustes del vault. Está cifrada, pero guarda la URI y su frase de contraseña en un gestor de contraseñas, por separado, y no envíes las dos por el mismo canal.

{{< image "self_hosting_obsidian/copy_the_setup_url.webp" "Copiar la Setup URI" >}}

### Añadir otro dispositivo

En cada dispositivo nuevo, empieza con un vault nuevo o del que tengas copia de seguridad:

1. Instala Obsidian y el plugin Self-hosted LiveSync
2. Abre el asistente desde el aviso `Welcome to Self-hosted LiveSync`
3. Elige `I am adding a device to an existing synchronisation setup`
4. En `Device Setup Method`, elige `Use a Setup URI (Recommended)`
5. Pega la Setup URI, introduce su frase de contraseña y selecciona `Test Settings and Continue`
6. Selecciona `Restart and Fetch Data`. Para un vault vacío, elige `Overwrite all with remote files`. Si el vault ya tiene notas, para y lee antes la {{< link href="https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/tips/fast-setup.md" >}}guía Fast Setup{{< /link >}} del plugin, porque si eliges mal puedes sobrescribir tu trabajo local.

{{< image "self_hosting_obsidian/connect_with_setup_url.webp" "Conectar con la URL de configuración" >}}
{{< image "self_hosting_obsidian/enter_you_encrpt_passphrase.webp" "Introduce tu frase de contraseña de cifrado" >}}

Cuando termine la descarga, la nota de prueba del primer dispositivo debería aparecer sin cambios. Edita una nota en el dispositivo nuevo para confirmar que la sincronización funciona en los dos sentidos.

{{< image "self_hosting_obsidian/data_sync_between_two_device.webp" "Sincronización de datos entre dos dispositivos" >}}

## Para cerrar
Lo que te queda al final: un contenedor de CouchDB, un túnel de Pinggy y el plugin LiveSync manteniendo tu vault sincronizado en todos los dispositivos que tengas. El mantenimiento diario consiste sobre todo en dejarlo en paz; la política de reinicio del contenedor se encarga de los reinicios de la máquina.

Unas cuantas cosas a tener en cuenta si vas a montarlo:

- La URL del túnel tiene que seguir siendo accesible. El plan gratuito de Pinggy se desconecta a los 60 minutos y te da una URL nueva al reconectar, así que para una configuración permanente usa un plan Pro con una URL persistente o un dominio propio. Si no, tendrás que actualizar los ajustes de LiveSync cada vez que se reinicie el túnel.
- Haz copias de seguridad del directorio de datos de CouchDB. La gracia del self-hosting es que los fallos también son cosa tuya. Haz snapshots de `./couchdb-data` en lo que ya uses para tus copias de seguridad.
- Merece la pena activar el cifrado de extremo a extremo de LiveSync aunque el túnel ya vaya por HTTPS. Así la instancia de CouchDB nunca ve las notas en texto plano, que es lo correcto por defecto en cuanto los datos salen de tu máquina.

## Conclusión

Ya tienes un contenedor de CouchDB detrás de un túnel de Pinggy, con LiveSync manteniendo tu vault al día entre dispositivos y tus notas cifradas antes de salir de la máquina. Antes de confiarle la única copia de tus notas, haz tres comprobaciones rápidas. Reinicia el host, ejecuta `docker compose ps` en la carpeta `obsidian-sync` para confirmar que CouchDB ha vuelto a arrancar y, si usas el túnel gratuito, reinícialo y actualiza la URL en LiveSync, porque habrá cambiado. Después edita una nota en cada dispositivo y confirma que el cambio aparece en el otro. Por último, copia `./couchdb-data` a otro sitio y apunta la frase de contraseña de cifrado del vault y la de la Setup URI, porque sin la del vault los datos sincronizados no se pueden leer y ninguna copia de la base de datos lo va a arreglar. Cuando todo eso funcione, añade tu móvil con una Setup URI generada desde el primer dispositivo y plantéate un subdominio persistente de Pinggy Pro para que la dirección de sincronización deje de cambiar.
