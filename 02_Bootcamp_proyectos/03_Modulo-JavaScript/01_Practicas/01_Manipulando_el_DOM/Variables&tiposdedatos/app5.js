const color = document.getElementById('color');
const mensaje = document.getElementById('mensaje');
const back = document.getElementById('back');
const texto = document.getElementById('texto');
const contenedor = document.getElementById('contenedor');
const cuerpoPagina = document.body;


mensaje.addEventListener('click', function () {
    alert('Bienvenido, es un placer tenerte en mi GitHub')
})

texto.addEventListener('click', function () {
    const parrafo= document.createElement('P')
    parrafo.textContent = 'Este es un mensaje de prueba';
    contenedor.appendChild(parrafo);
})

function generarColorHexAleatorio() {
  const numero = Math.floor(Math.random() * 16777215);
  const hexColor = numero.toString(16).padStart(6, '0');
  return `#${hexColor}`;
}
color.addEventListener('click', function () {
  const nuevoColor = generarColorHexAleatorio();
  cuerpoPagina.style.backgroundColor = nuevoColor;
});


back.addEventListener('click', function () {
    cuerpoPagina.style.backgroundColor = 'black';
    contenedor.innerHTML = '';

    })
