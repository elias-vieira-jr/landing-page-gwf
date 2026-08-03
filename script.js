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

    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        revealElements.forEach((el) => revealObserver.observe(el));
    }

    const counters = document.querySelectorAll('[data-count]');

    if (counters.length) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const animateCount = (el) => {
            const target = Number(el.dataset.count);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';

            if (prefersReducedMotion) {
                el.textContent = `${prefix}${target}${suffix}`;
                return;
            }

            const duration = 1500;
            const startTime = performance.now();

            const step = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;

                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        const countObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach((el) => countObserver.observe(el));
    }
});
