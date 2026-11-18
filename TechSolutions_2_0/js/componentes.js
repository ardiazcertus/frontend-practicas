/* =============================================================
   COMPONENTES REUTILIZABLES EN LIVE SERVER, SIN NODE.JS
   data-base="./" en index.html y data-base="../" en /paginas/.
   No se intentan cargar archivos <head>: Bootstrap y CSS deben
   declararse en cada HTML para evitar flashes de estilo.
   ============================================================= */
(async function () {
  const base = document.body.dataset.base || './';
  const pagina = document.body.dataset.page;

  async function insertarComponente(archivo, destino) {
    const respuesta = await fetch(`${base}componentes/${archivo}`);
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}: ${archivo}`);
    const plantilla = await respuesta.text();
    document.querySelector(destino).innerHTML = plantilla.replaceAll('{{BASE}}', base);
  }

  try {
    await Promise.all([
      insertarComponente('navbar.html', '#componente-navbar'),
      insertarComponente('footer.html', '#componente-footer')
    ]);
    // Menú activo según la página actual.
    document.querySelector(`.nav-link[data-page="${pagina}"]`)?.classList.add('active');
    document.querySelectorAll('[data-anio]').forEach(el => el.textContent = new Date().getFullYear());

    // Ejemplo de localStorage: solo se almacena una preferencia visual.
    const botonTema = document.querySelector('#btnTema');
    function aplicarTema(oscuro) {
      document.body.classList.toggle('modo-oscuro', oscuro);
      botonTema.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
      botonTema.setAttribute('aria-pressed', String(oscuro));
    }
    aplicarTema(localStorage.getItem('techsolutions_tema') === 'oscuro');
    botonTema.addEventListener('click', () => {
      const oscuro = !document.body.classList.contains('modo-oscuro');
      aplicarTema(oscuro);
      localStorage.setItem('techsolutions_tema', oscuro ? 'oscuro' : 'claro');
    });
  } catch (error) {
    console.error('No se cargaron los componentes compartidos:', error);
    document.querySelector('#componente-navbar').textContent = 'No se pudo cargar el menú. Ejecuta este proyecto desde Live Server.';
  }
})();
