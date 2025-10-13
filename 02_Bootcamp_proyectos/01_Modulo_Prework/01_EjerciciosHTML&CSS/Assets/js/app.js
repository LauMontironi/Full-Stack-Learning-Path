let toggle=document.querySelector('.toggle');
let sidebar= document.querySelector('.sidebar');

let icon_1= document.getElementById('icon-1');
let icon_2= document.getElementById('icon-2');

let logo_img =document.querySelector('.logo-img');
let logo_text =document.querySelector('.logo-text');


toggle.addEventListener('click',function(){
    sidebar.classList.toggle('active');
    toggle.classList.toggle('active');

    icon_1.classList.toggle('d-none');
    icon_2.classList.toggle('d-none');

    logo_img.classList.toggle('d-none');
    logo_text.classList.toggle('d-none');
})