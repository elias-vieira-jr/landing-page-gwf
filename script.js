document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!navbar || !menuToggle || !navMenu) return;

    const closeMenu = () => {
        navbar.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('nav-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
});
