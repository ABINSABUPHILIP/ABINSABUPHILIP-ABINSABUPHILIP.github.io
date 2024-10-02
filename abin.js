// abin.js

// Preloader
window.addEventListener("load", () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
});

// Smooth Scrolling (Optional if not using CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
