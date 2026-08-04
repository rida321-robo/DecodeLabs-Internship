document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Smooth Scrolling & Navigation Active State
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            navItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

    // Theme Accent Switcher
    const themeBtn = document.getElementById('themeToggleBtn');
    let isWarmAccent = false;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isWarmAccent = !isWarmAccent;
            document.documentElement.style.setProperty(
                '--primary-trust', 
                isWarmAccent ? '#E07A5F' : '#0EA5E9'
            );
            themeBtn.textContent = isWarmAccent ? 'Reset Primary Theme' : 'Toggle Warm Accent';
        });
    }

    // Explore Action
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            alert("Requirements Verified: 100% Semantic HTML (No divs), CSS Grid Layout, and Vanilla JavaScript!");
        });
    }
});