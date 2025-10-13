/*acceder al dom para el cambio de color*/

const cambiarColor = document.querySelector('.btn-1');
const nombreColor = document.getElementById('texto');

/*defino la funcion*/

function generarColor(){
    let digitos = '0123456789ABCDEF';
    let color = '#'

    for (let i = 0; i< 6; i++){
        let indiceAleatorio= Math.floor(Math.random()*16);
        color += digitos[indiceAleatorio];
    }
    return color;
}

/*asociar la funcion al evento click*/

cambiarColor.addEventListener ('click', function(){
    let colorAleatorio = generarColor();
    nombreColor.textContent= colorAleatorio;
    document.getElementById('contenedor-principal').style.backgroundColor = colorAleatorio;

})

/*cambiar imagen de fondo al hacer clik en el boton y su descripcion*/

// Paso 1: Accedemos a los elementos del DOM

const botonImagen = document.querySelector('.btn');
const contenedorSecundario = document.getElementById('contenedor-secundario');
const tituloPaisaje = document.getElementById('paisaje');

// Paso 2: Creamos un array con imágenes y títulos

const imagenes = [
  {
    url: "url('./imagenes/Paisaje2 (1).jpg')",
    titulo: "Arbol solitario"
  },
  {
    url: "url('./imagenes/Paisaje2 (2).jpg')",
    titulo: "Bosque magico"
  },
  {
    url: "url('./imagenes/Paisaje2 (3).jpg')",
    titulo: "Lago profundo"
  }
];

// Paso 3: Variable para saber en qué imagen estamos
let indiceActual = 0;

// Paso 4: Evento al hacer clic en el botón
botonImagen.addEventListener('click', function() {
  // Cambiar al siguiente índice
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0; // Volver al inicio
  }

  // Cambiar imagen de fondo y texto
  contenedorSecundario.style.backgroundImage = imagenes[indiceActual].url;
  contenedorSecundario.style.backgroundSize = 'cover';
  contenedorSecundario.style.backgroundPosition = 'center';
  
  tituloPaisaje.textContent = imagenes[indiceActual].titulo;
});