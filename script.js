window.addEventListener('scroll', function() {
    const intro = document.getElementById('intro');
    const hiddenSection = document.getElementById('hidden-section');

    if (window.scrollY > 50) {
        intro.style.opacity = '0';
        intro.style.transform = 'translateY(-50px)';
        hiddenSection.style.opacity = '1';
        hiddenSection.style.transform = 'translateY(0)';
    }
});
