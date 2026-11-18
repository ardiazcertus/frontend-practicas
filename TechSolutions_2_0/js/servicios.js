/* PRÁCTICA jQuery: .on(), .data(), .filter(), .toggle(), .text() */
$(function () {
  const $tarjetas = $('.servicio');
  const $contador = $('#contadorServicios');
  function filtrar(categoria) {
    $tarjetas.each(function () {
      const coincide = categoria === 'todos' || $(this).data('categoria') === categoria;
      $(this).toggle(coincide);
    });
    const visibles = $tarjetas.filter(':visible').length;
    $contador.text(`Mostrando ${visibles} de ${$tarjetas.length} servicios.`);
  }
  $('.filtro').on('click', function () {
    $('.filtro').removeClass('btn-primary').addClass('btn-outline-primary').attr('aria-pressed', 'false');
    $(this).removeClass('btn-outline-primary').addClass('btn-primary').attr('aria-pressed', 'true');
    filtrar($(this).data('filtro'));
  });
  filtrar('todos');
});
