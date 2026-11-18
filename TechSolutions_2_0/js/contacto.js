/* VALIDACIÓN: HTML5 checkValidity + eventos de formulario y DOM con jQuery.
   NO envía la información ni la guarda en localStorage. */
$(function () {
  const $form = $('#formContacto');
  const $resultado = $('#resultadoContacto');
  $form.on('submit', function (evento) {
    evento.preventDefault();
    this.classList.add('was-validated');
    if (!this.checkValidity()) return;

    const nombre = $('#nombre').val().trim();
    const servicio = $('#servicio').val();
    // Evitar insertar directamente el nombre con .html() (riesgo de XSS).
    $resultado.empty()
      .append($('<strong>').text(`Gracias, ${nombre}.`))
      .append(document.createTextNode(` Validación correcta para: ${servicio}. Este envío es una simulación; no se almacenó información.`))
      .removeClass('d-none');
  });
  $form.on('reset', function () {
    this.classList.remove('was-validated');
    $resultado.addClass('d-none').empty();
  });
});
