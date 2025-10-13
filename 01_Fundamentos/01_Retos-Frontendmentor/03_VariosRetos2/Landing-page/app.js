const boton = document.querySelector('.btn-what');

boton.addEventListener('click', function(){
  Swal.fire({
    title: "Que es Meet?",
    text: "Un lugar para conocer y conectar",
    icon: "question"
  });
});

const toggle = document.querySelector('#modo-toggle');

toggle.addEventListener('click', function(){
    document.querySelector('main').style.backgroundColor=toggle.checked ? 'black' : 'white';
   
})

const descarga= document.querySelector('.btn-download');

descarga.addEventListener('click', function(){
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, download it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Downloaded!",
      text: "Your file has been downloaded.",
      icon: "success"
    });
  }
});
})