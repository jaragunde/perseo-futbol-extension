# Extensión de navegador para Perseo Fútbol

Comprueba si ya FALTA UNOOOOO sin gastar la tecla F5, con un icono en la barra
de herramientas que cambia según el estado del juego.

## Installation

Descarga la última versión de la extensión para tu navegador desde la
[página de releases](https://github.com/jaragunde/perseo-futbol-extension/releases)
y luego sigue estas instrucciones:

### Chrome

Abre el menú de Chrome -> Configuración -> Icono de menú superior izquierdo ->
Extensiones y activa "Modo de desarrollador", luego arrastra el fichero .crx de
la extensión desde el explorador de ficheros a la pestaña de extensiones del
navegador.

AVISO: Chrome intentará instalar la extensión al hacer click en el enlace al
fichero .crx, pero da un error. Hay que descargar la extensión primero con click
derecho -> Guardar enlace como.

### Firefox

Firefox debería pedir permiso para instalar la extensión directamente tras hacer
click en ella en la página de extensiones.

De no ser así, ir al menú -> Complementos y temas -> click en el icono del
engranaje -> Instalar complemento desde archivo, y selecciona el fichero .xpi
descargado.


## Testing the development version

### Chrome

Open `chrome://extensions`, enable "Developer mode", then "Load unpacked" and
select the directory containing the extension.

### Firefox

Open `about:debugging`, then "This Firefox". Click on "Load Temporary Add-on"
and select the manifest file of the extension.

Notice that extensions installed this way are not permanent; they will be
removed when you close the last Firefox window.
