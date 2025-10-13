// seleccionar los elementos del dom 

const boton = document.querySelector('button');
const color = document.getElementById('Color');

//definir funcion 

function generarColorHexAleatorio(){
    let digitos ='0123456789ABCDEF';
    let colorHex = '#';

    for (let i= 0; i<6; i++) {
        let indiceAleatorio= Math.floor(Math.random()*16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

// asociar la funcion al evento click 

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor =colorAleatorio;
} );