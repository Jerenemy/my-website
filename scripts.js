// ===========================
// scripts.js
// ===========================

/* 
 * Author: Your Name
 * Description: JavaScript functionalities for the MyPortfolio website.
 * Date: YYYY-MM-DD
 */

/* ===========================
   Navigation Bar Background Change on Scroll
   =========================== */

/**
 * This function adds or removes the 'scrolled' class to the navbar based on the scroll position.
 * When the user scrolls down more than 50 pixels, the 'scrolled' class is added to change the navbar's background.
 */
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50; // Number of pixels to scroll before changing navbar

    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleNavbarScroll);

/* ===========================
   Smooth Scrolling for Navigation Links
   =========================== */

/**
 * This function enables smooth scrolling behavior when navigation links are clicked.
 * It calculates the target section's position and scrolls smoothly to it.
 */
function enableSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate the top position of the target section
                const targetPosition = targetSection.offsetTop - 80; // Adjust for navbar height

                // Scroll to the target position smoothly
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize smooth scrolling after the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', enableSmoothScrolling);

/* ===========================
   (Optional) Initialize AOS (Animate On Scroll)
   =========================== */

/**
 * If you're using the AOS library for scroll animations, uncomment the following lines
 * to initialize it with your desired settings.
 */

// Uncomment the following block if using AOS
/*
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once - while scrolling down
        mirror: false,  // Whether elements should animate out while scrolling past them
    });
});
*/
