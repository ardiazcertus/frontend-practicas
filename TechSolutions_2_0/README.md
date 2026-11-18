# TechSolutions Perú 2.0 — proyecto integrador

Proyecto demostrativo **HTML5 + CSS3 + Bootstrap 5.3.3 + jQuery 3.7.1 + JavaScript**, 100% frontend.

## Cómo ejecutarlo

1. Descomprime el ZIP.
2. Abre **exactamente la carpeta `TechSolutions_2_0`** en Visual Studio Code (Archivo → Abrir carpeta).
3. Haz clic derecho en `index.html` → **Open with Live Server**.
4. Navega por Inicio, Nosotros, Servicios, Portafolio y Contacto.

**No uses `file://`**: la carga de `navbar.html` y `footer.html` usa `fetch()`, que necesita HTTP. No se requiere Node.js ni `npm`.

**Conexión:** Las bibliotecas Bootstrap y jQuery se cargan desde CDN; se requiere Internet. La aplicación no usa APIs privadas ni backend.

## Arquitectura

- `componentes/navbar.html` y `componentes/footer.html`: HTML compartido.
- `js/componentes.js`: lee `data-base` y descarga los fragmentos con `fetch()`.
- `index.html` y `paginas/*.html`: contienen contenido propio, más dos contenedores para los componentes.
- `css/estilos.css`: diseño personalizado y tema oscuro.
- `css/responsive.css`: reglas de adaptación y reducción de movimiento.
- `js/servicios.js`: filtros por categoría usando jQuery.
- `js/portafolio.js`: modal Bootstrap alimentado por jQuery.
- `js/contacto.js`: formulario con validación HTML5 y eventos jQuery.

## Consideraciones

- Las referencias a CSS y scripts **sí se repiten dentro de `<head>` y al final de `<body>`**, porque Live Server no soporta inclusión automática de plantillas. La modularidad aquí aplica a `navbar` y `footer`.
- Las rutas se calculan según `data-base="./"` en Inicio y `data-base="../"` en las páginas interiores.
- Al modificar `componentes/navbar.html`, los cambios aparecen en todas las páginas después de actualizar el navegador.
- El formulario **no envía ni almacena información de usuarios**. `localStorage` guarda solo la preferencia de modo claro/oscuro.
- Nombres, proyectos, textos y equipo son ficticios. No se necesita base de datos.
- Si los archivos CDN no cargan, comprueba la conexión y la consola F12 → Console.

## Pruebas rápidas

1. Cada enlace del menú abre la página correcta y destaca la página activa.
2. El botón de tema mantiene su selección luego de recargar.
3. Servicios → filtro Seguridad muestra exactamente dos tarjetas.
4. Portafolio → Ver proyecto abre un modal con título y descripción correspondientes.
5. Contacto → vacío/inválido muestra validaciones; válido muestra mensaje sin enviar datos.
6. Reducir el ancho a 390px: el menú colapsa y las tarjetas se apilan.

Consulta `GUIA_DOCENTE.md` para el guion detallado de clase.
