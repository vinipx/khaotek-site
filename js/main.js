document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Random glitch effect on logo
    const logo = document.querySelector('.logo');
    setInterval(() => {
        if (Math.random() > 0.95) {
            logo.style.textShadow = `
                ${Math.random() * 10}px ${Math.random() * 10}px #ff0000,
                ${Math.random() * -10}px ${Math.random() * 10}px #00ff00
            `;
            setTimeout(() => {
                logo.style.textShadow = 'none';
            }, 100);
        }
    }, 100);

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#hero');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });
});
