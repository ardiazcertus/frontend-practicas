# Guía docente — Sitio multipágina modular con Bootstrap y jQuery

**Objetivo:** implementar un sitio empresarial de cinco páginas con una arquitectura frontend simple, componentes reutilizables, diseño responsive e interacciones DOM. **Servidor:** Live Server. **Sin Node.js.**

## Sesión 1 (60 min): estructura multipágina y componentes

1. (10 min) Revisar el árbol de archivos. Identificar HTML/CSS/JS y distinguir código compartido de código exclusivo de página.
2. (10 min) Abrir `index.html`, explicar `data-base="./"`; abrir `paginas/servicios.html` y explicar `data-base="../"`.
3. (20 min) Abrir `js/componentes.js`. Explicar `fetch()`, `async/await`, `Promise.all()`, `innerHTML` y `replaceAll('{{BASE}}', base)`; señalar que las plantillas son archivos propios de confianza, no entrada del usuario.
4. (10 min) Modificar `componentes/navbar.html` (texto del logo) y comprobar actualización en todas las páginas.
5. (10 min) Preguntar: ¿por qué `fetch()` no funciona igual abriendo el HTML como archivo local? ¿Por qué no se reutiliza `<head>`?

## Sesión 2 (60 min): Bootstrap y CSS

1. (10 min) Ubicar el CDN de Bootstrap 5 en `<head>` y el bundle JS al final del documento.
2. (15 min) Mostrar clases `.container`, `.row`, `.col-md-4`, `.card`, `.btn`, `.navbar`, `.collapse`, `py-5`.
3. (15 min) Cambiar el layout de tarjetas en `index.html` y reducir ventana a 390 px con DevTools (F12, modo dispositivo).
4. (10 min) Cambiar colores en `css/estilos.css`; explicar orden de hojas y sobreescritura.
5. (10 min) Explicar `@media` y `prefers-reduced-motion` de `responsive.css`.

## Sesión 3 (60 min): jQuery y modales

1. (15 min) Revisar `paginas/servicios.html` y la diferencia entre `.servicio`, `data-categoria` y `.filtro`.
2. (15 min) Ejecutar filtros. Abrir `js/servicios.js`; explicar `$(function(){})`, `.on('click')`, `.each()`, `.data()`, `.toggle()`, `.filter(':visible')`.
3. (15 min) Abrir Portafolio, pulsar Ver proyecto y analizar `js/portafolio.js`. Explicar `bootstrap.Modal.getOrCreateInstance(...)`.
4. (15 min) Modificar un servicio, añadir una tarjeta con categoría correcta y verificar que el contador crece automáticamente.

## Sesión 4 (60 min): formularios, eventos y datos

1. (15 min) Identificar formulario y atributos HTML `required`, `type=email`, `minlength`.
2. (15 min) Enviar vacío, mal correo y formulario válido. Explicar `event.preventDefault()` y `.checkValidity()`.
3. (10 min) Analizar `js/contacto.js`: `.val()`, `.text()`, `.on('submit')`, `.on('reset')`.
4. (10 min) Cambiar modo oscuro y recargar; explicar `localStorage` y por qué se almacena solo una preferencia no sensible.
5. (10 min) Cerrar con restricciones del frontend: sin backend no se pueden recibir mensajes reales ni centralizar usuarios.

## Ejercicios evaluables

- Crear una sexta página `preguntas.html` con navbar/footer compartidos y actualizar el menú.
- Añadir dos servicios y una nueva categoría con su botón de filtro.
- Añadir una cuarta tarjeta al portafolio que use el mismo modal.
- Añadir al formulario un campo de teléfono opcional con validación adecuada.
- Implementar un contador de servicios visibles sin refrescar el navegador.

## Puntos técnicos para enfatizar

- Bootstrap 5 **no depende de jQuery**. Se utilizan simultáneamente por finalidad pedagógica.
- El script de jQuery debe cargarse **antes** de `servicios.js`, `portafolio.js` y `contacto.js`.
- Los fragmentos compartidos se insertan de forma asíncrona. Los eventos del botón de tema se registran **después** de insertarlo.
- `.text()` se utiliza con datos variables para no inyectar HTML sin control.
- La modularidad con `fetch()` depende de JavaScript habilitado y no sustituye a un motor de plantillas de compilación.
- La validación del navegador mejora la experiencia, pero en un sistema real debe repetirse también en el servidor.

## Casos de prueba y resultados esperados

| Prueba | Resultado esperado |
|---|---|
| Abrir Inicio con Live Server | Menú y footer visibles |
| Navegar a Servicios | El menú destaca Servicios |
| Filtrar Seguridad | Dos tarjetas visibles |
| Abrir detalle de proyecto | Modal con título correcto |
| Enviar formulario vacío | Errores visuales |
| Enviar correo incorrecto | Error de formato |
| Enviar datos válidos | Resumen de simulación |
| Activar modo oscuro y actualizar | Preferencia conservada |
| Simular 390px de ancho | Navbar colapsable, columnas apiladas |
