document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SMOOTH SCROLLING FOR NAVIGATION ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 2. SCROLL REVEAL ANIMATION ---
    // Select elements we want to animate
    const animatedElements = document.querySelectorAll('.job-card, .project-card, .skill-sticker, .section-title');

    // Set initial state for animation via JS
    // (This ensures content remains visible if JS is disabled/fails)
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Create the Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reveal the element
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Stop observing once revealed
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach observer to elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- 3. DYNAMIC GREETING (Optional Console Easter Egg) ---
    console.log(
        "%c Hello! Thanks for checking out the code. \n Designed by Maulana Shidiq. ",
        "background: #2a9d8f; color: #fff; padding: 10px; border-radius: 5px; font-family: sans-serif;"
    );
});