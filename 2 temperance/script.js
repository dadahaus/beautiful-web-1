const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('nav');

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburguer.classList.toggle('active');
});