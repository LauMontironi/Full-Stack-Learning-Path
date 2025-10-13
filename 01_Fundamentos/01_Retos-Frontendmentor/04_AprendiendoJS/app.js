/*document.getElementById('boton-flecha').addEventListener('click', function () {
    const popUp = document.getElementById('myPopup');
    popUp.classList.toggle("show"); 
});


document.getElementById('boton-flecha').addEventListener('click', function () {
  console.log("Click detectado");
  const popUp = document.getElementById('myPopup');
  popUp.classList.toggle("show");
});*/


let person = {
  name: "laura",
  age: 37,
  alias: "lau",
  mail: "lau@kdddkd.com",
};

console.log(person);

console.log(person.age);

person.phone = 630758925;

console.log(person);

delete person.alias;

console.log(person);