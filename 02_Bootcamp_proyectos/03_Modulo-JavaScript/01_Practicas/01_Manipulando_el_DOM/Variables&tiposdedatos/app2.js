//🟢 1. Saludo personalizado

//Pide al usuario su nombre y muestra un saludo con alert.

let nombre = prompt('introduce tu nombre aqui');
alert(`Hola ${nombre}`);

//🟢 2. Confirmar acción

//Pregunta al usuario si desea continuar usando confirm().
//Si acepta, muestra un mensaje de confirmación. Si no, muestra uno de cancelación.

let continuar = confirm('¿Estas seguro que deseas continuar?');

if (continuar === true) {
    alert('compra efectuada con exito');
} else {
        alert('Su carrito esta vacio')
    }


//🟡 3. Comparar dos números

//Solicita dos números mediante prompt() y muestra si el primero es mayor, menor o igual que el segundo.

let numero1 = parseInt(prompt('introduce un numero aqui'));
let numero2 = parseInt(prompt('introduce otro numero aqui'));

/*debo transformarlo a numero porque el promt por defecto es cadena y para comparar quiero que sea numero*/

if (numero1 < numero2) {
    alert(`${numero1} es menor a ${numero2}`);
} else if (numero1 > numero2) {
        alert (`${numero1} es mayor a ${numero2}`);
    } else {alert(`los numeros elegidos son iguales`)
}

/*🟡 4. Edad y carnet

Pide al usuario su edad y pregúntale con confirm() si tiene carnet de conducir.
Usa operadores lógicos para mostrar si puede o no conducir.*/

let edad = parseInt(prompt('indicanos tu edad'));
 
if (edad >= 18) {
    alert('bienvenido puedes alquilar tu coche');
} else alert('lo siento, aun eres muy pequeño!')

/*🟠 5. Contador con operadores de asignación

Crea una variable contador y realiza varias operaciones con operadores de asignación (+=, -=, *=…) para modificar su valor.
Muestra el resultado final con alert().*/

let contador = 0;
contador += 1// 1
console.log(contador);
contador++ // 2
contador += 2 // contador 4
console.log(contador);
contador -= 1 // contador 3
contador *= 2 // contador 6

//lo muestro con console.log porque ya hay mucha alerta

console.log(contador); 

/*🔵 6. Simulador de inicio de sesión

Pide nombre de usuario y contraseña.
Comprueba si coinciden con unos valores predefinidos (por ejemplo, usuario “admin”, contraseña “1234”).
Muestra un mensaje según sea correcto o no.*/

let name = prompt('introduce tu nombre de usuario');
let password = prompt('introduce tu contraseña');

if (name === 'admin' && password === '1234') {
    alert('bienvenido a su sesion');
} else alert('usuario y/o clave incorrecta');

/*🔵 7. Contar del 1 al 5

Usa un bucle for para mostrar los números del 1 al 5 en alertas o en la consola.*/

let numberA = 0;
for (let i = 0; i <= 5; i++){
    console.log(numberA + i)
}

/*🔵 8. Bucle con condición

Suma números hasta que el usuario escriba “0”.*/
let suma = 0;
let sumas;

do {
    sumas = parseint(prompt('introduce un numero aqui)'));
    suma += sumas
} while (sumas !== 0);

alert("La suma total es " + suma);
