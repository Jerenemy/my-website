window.addEventListener('scroll', function() {
    const container = document.getElementById('container');
    const scrollPosition = window.scrollY;
    const triggerPoint = window.innerHeight / 4; // Change color after scrolling 25% of viewport height
  
    if (scrollPosition > triggerPoint) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  });
  