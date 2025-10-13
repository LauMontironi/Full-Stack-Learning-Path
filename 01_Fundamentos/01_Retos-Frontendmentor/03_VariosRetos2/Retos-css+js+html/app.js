    const boton1= document.getElementsByClassName('ov-btn-slide-close')[0];

    boton1.addEventListener('click', function(){
        Swal.fire({
    title: "soy ingeniera en software y me encanta programar",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
    `
    });
    });

    const boton2= document.getElementsByClassName('ov-btn-slide-close')[1];
    boton2.addEventListener('click', function(){
        Swal.fire({
    title: "soy un artista callejero amante de la fotografia",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
    `
    });
    });

    const boton3= document.getElementsByClassName('ov-btn-slide-close')[2];
    boton3.addEventListener('click', function(){
        Swal.fire({
    title: "soy un apasionado chef en busca de nuevos sabores",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
    `
    });
    });

let nombres = document.getElementsByTagName('h1');

for (let i = 0; i < nombres.length; i++) {
  nombres[i].addEventListener('mouseover', function(){
    nombres[i].style.fontSize = '40px';
    nombres[i].style.color = "blue";
  });
}