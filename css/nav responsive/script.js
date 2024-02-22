document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbar = document.getElementById('navbar');

    hamburgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
});

