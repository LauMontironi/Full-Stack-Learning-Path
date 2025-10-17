/*Consigna: Pide al usuario 3 artículos (por prompt), guarda en un array y muestra la lista en la página como una lista (<ul>).
HTML: un contenedor vacío (div#app) y un botón “Crear lista”.*/

let contenedor = document.getElementById('app');
let boton = document.querySelector('button');

boton.addEventListener('click', function() {
    let miArticulo1 = prompt('Escribe tu prenda de vestir favorita');
    let miArticulo2 = prompt('Escribe tu instrumento musical favorito');
    let miArticulo3 = prompt('Escribe tu accesorio favorito');

    let miArrayDeArticulos = [miArticulo1, miArticulo2, miArticulo3];

    let lista = document.createElement('ul');

    for (let articulo of miArrayDeArticulos) {
        let item = document.createElement('li');
        item.textContent = articulo;
        lista.appendChild(item);
    }

    contenedor.appendChild(lista);
});

