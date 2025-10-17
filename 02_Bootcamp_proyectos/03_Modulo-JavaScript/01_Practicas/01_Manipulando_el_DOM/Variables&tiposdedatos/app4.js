/*Consigna: Pide números al usuario hasta que ingrese 0. Muestra en la página la suma y la cantidad de números introducidos.
HTML: contenedor para mostrar resultados y un botón “Iniciar sumador”.*/

let boton = document.getElementById('btn');

let cantidad = document.getElementsByClassName('sp1')[0];
let suma = document.getElementsByClassName('sp2')[0];

boton.addEventListener('click', function () {
    let i = 0;
    let total = 0;
    let numero;
    do {
        numero = parseInt(prompt('ingrese un numero (cero para terminar):'))
        if (numero !== 0) {
            total += numero;
            i++;
        }
    } while (numero !== 0);

    cantidad.textContent = i;
    suma.textContent = total;
})

