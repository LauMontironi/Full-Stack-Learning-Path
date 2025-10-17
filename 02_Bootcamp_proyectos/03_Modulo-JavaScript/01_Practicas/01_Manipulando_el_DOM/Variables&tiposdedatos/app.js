alert('HOLA MUNDO') // probando si la pagina esta bien enlazada

// Tipos de datos :
//-Datos primitivos:

//1- undefinded :

var sinValor
console.log(sinValor);

//2-Null 
var nulo = null;
console.log(nulo);

//o para vaciar variables :

var nombre = 'laura';
console.log(nombre);

nombre = null; 

console.log(nombre);

//3 Boolean

var esVerdadero = true; // false es el valor contrario
console.log(esVerdadero); // true

//4 Number

var edad = 25; // numero entero
var precio = 3.99; // numero racional ¡ojo el simbolo de racional es punto!
var negativo = -2;
console.log(edad); // 25

//5.String
//string con comilla doble
var nombre = "Juan";
console.log(nombre); // Juan

//string con comilla simple
var apellido = 'Pérez';
console.log(apellido); // Pérez

//Template string . Permite la concatenación facil de direntes tipos de datos y texto. Las comillas usadas son las oblicuas ``
var numero1 = 2;
var numero2 = 34;
var resultado = `El resultado de sumar ${numero1} + ${numero2} es igual a ${numero1 + numero2}`

console.log(resultado);


//Convertir de cadena a número
var numeroEntero = parseInt('123');
var numeroDecimal = parseFloat('123.5');

console.log(numeroEntero);
console.log(numeroDecimal);

//Convertir número a cadena to.stringvar numero1 = Number("123");   // Convierte cadena "123" a número 123
var numero2 = Number("123.45"); // Convierte cadena "123.45" a número 123.45
var numeroInvalido = Number("abc"); // Devuelve NaN, porque no se puede convertir


var numero = 123;
var cadena = numero.toString();

console.log(cadena);

//Convertir texto a mayúsculas to Uperrcase o to lowecase

var texto = "hola";
var textoEnMayusculas = texto.toUpperCase();

console.log(textoEnMayusculas); // "HOLA"

let textos = "HOLA";
let textoEnMinusculas = textos.toLowerCase();

console.log(textoEnMinusculas); // "hola"

//Funciones Number y String

var numero1 = Number("123");   // Convierte cadena "123" a número 123
var numero2 = Number("123.45"); // Convierte cadena "123.45" a número 123.45
var numeroInvalido = Number("abc"); // Devuelve NaN, porque no se puede convertir

console.log(numero1); // 123
console.log(numero2); // 123.45
console.log(numeroInvalido); // NaN

var numero = 456;
var booleano = true;
var cadenaNumero = String(numero);   // Convierte el número 456 a la cadena "456"
var cadenaBooleano = String(booleano); // Convierte el booleano true a la cadena "true"

console.log(cadenaNumero);   // "456"
console.log(cadenaBooleano); // "true"

//Funciones alert(), confirm() y prompt()
//alert(): Muestra un mensaje al usuario.

alert("¡Hola! Este es un mensaje de alerta.");

//confirm(): Pide al usuario que confirme una acción.
var resultado = confirm("¿Estás seguro de que quieres continuar?");

//prompt(): Pide al usuario que ingrese un valor.

var nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombre);

// operadores

let a = 5;
let b = 2;
console.log(a + b);// 7
console.log(a - b);// 3
console.log(a * b);// 10
console.log(a / b);// 2.5
console.log(a % b);// 1
console.log(a++);// 5 (después de esta línea, a es 6)
console.log(a--);// 6 (después de esta línea, a es 5)
console.log(a ** b); // 25