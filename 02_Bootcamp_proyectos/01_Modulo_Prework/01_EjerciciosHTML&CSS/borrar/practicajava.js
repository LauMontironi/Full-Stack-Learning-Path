let edad = 17;

if (edad > 78) {
    console.log('No hace falta que votes');
} else if (edad >= 18) {
    console.log('Puede votar');
} else {
    console.log('No puede votar');
}

let TengoCoche =  false;
let edadd= 18;
let permiso= true;

if(TengoCoche === true && edadd>= 18 || permiso === true){
    console.log('puedo conducir')
} else {
    console.log('no puedo conducir')
}


let dia = 'jueves'

switch (dia){
    case 'lunes':
        console.log ('tarta de calabaza');
        break;
    case 'martes':
        console.log('asado');
        break;
    case 'miercoles':
        console.log('chocolate');
        break;
    default : 
        console.log('unvalid day');
    
}

let frutas = ["manzana", "pera", "uva", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

let cachu= ''

for (let i=0 ; i<10; i++){
    cachu= cachu + '#';
    console.log(cachu);
}