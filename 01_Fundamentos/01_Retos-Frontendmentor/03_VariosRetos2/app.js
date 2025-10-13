document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementsByClassName('btn')[0];
  const emailInput = document.getElementsByClassName('mail')[0];

  boton.addEventListener("click", function () {
    const mail = emailInput.value;

    if (mail === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: 'Indique su email',
      });
    } else if (!mail.includes("@")) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Email inválido",
        footer: 'El formato del e-mail no es correcto',
      });
    } else {
      Swal.fire({
        title: "Su e-mail es correcto",
        icon: "success",
      });
    }
  });
});

