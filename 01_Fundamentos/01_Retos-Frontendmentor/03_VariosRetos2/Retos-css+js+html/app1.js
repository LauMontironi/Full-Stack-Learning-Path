const home=document.getElementById('home');

home.addEventListener('click', function(){
    Swal.fire({
  title: "Seccion en Construccion",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
})

const botonMostrar = document.getElementById('mostrar-popup');
  const botonCerrar = document.getElementById('cerrar-popup');
  const popup = document.getElementById('popup-mensaje');

  // Cuando clico "Mostrar mensaje", quitamos la clase 'oculto'
  botonMostrar.addEventListener('click', function () {
    popup.classList.remove('oculto');
  });

  // Cuando clico "Cerrar", volvemos a ocultarlo
  botonCerrar.addEventListener('click', function () {
    popup.classList.add('oculto');
  });
