const menu = document.getElementById('hamburguesa');
const navMenu = document.querySelector('nav ul');





menu.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
        navMenu.style.backgroundColor = 'rgba(230, 57, 70, 0.8)';
    } else {
        navMenu.style.backgroundColor = '#e63946';
    }
});


