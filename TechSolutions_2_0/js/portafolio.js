/* PRÁCTICA jQuery + Bootstrap Modal: reutilizar un único modal. */
$(function () {
  $('.btn-detalle').on('click', function () {
    // .text() evita interpretar HTML procedente de atributos como código.
    $('#modalProyectoTitulo').text($(this).data('titulo'));
    $('#modalProyectoDescripcion').text($(this).data('descripcion'));
    const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#modalProyecto'));
    modal.show();
  });
});
