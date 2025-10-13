const form = document.getElementById('reservaForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita recargar la página
    // alert('Formulario enviado con éxito');
    Swal.fire({
        title: '¡Formulario enviado!',
        text: 'Gracias por reservar con nosotros.',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    });
});

const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    // alert('pagina en construccion')
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Pagina en Construccion</a>'
});
})