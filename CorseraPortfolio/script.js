document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul.nav-items');
    const modeToggle = document.getElementById('mode-toggle');
    const lightModeStylesheet = document.getElementById('light-mode');
    const darkModeStylesheet = document.getElementById('dark-mode');
    const navLinks = document.querySelectorAll('nav ul.nav-items li a');
    const projectImages = document.querySelectorAll('#projects img');
    const contactForm = document.getElementById('contactForm');
    const lightbox = document.createElement('div');
    
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // Toggle navigation menu
    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('visible');
        this.classList.toggle('active');
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    modeToggle.addEventListener('click', function () {
        const isDarkMode = !darkModeStylesheet.disabled;
        darkModeStylesheet.disabled = isDarkMode;
        lightModeStylesheet.disabled = !isDarkMode;
        modeToggle.textContent = isDarkMode ? 'Toggle Dark Mode' : 'Toggle Light Mode';
    });

    // Lightbox effect for project images
    projectImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Form validation
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        // If all fields are filled, submit the form
        this.submit();
    });
});
