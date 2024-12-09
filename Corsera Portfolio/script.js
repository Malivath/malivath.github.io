// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuIcon.addEventListener('click', function () {
        dropdownMenu.classList.toggle('visible');
    });

    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Filter projects
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox effect
const projectImages = document.querySelectorAll('#projects img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

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
const contactForm = document.getElementById('contactForm');

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


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const modeToggle = document.getElementById('mode-toggle');
    const lightModeStylesheet = document.getElementById('light-mode');
    const darkModeStylesheet = document.getElementById('dark-mode');

    // Toggle dropdown menu
    menuIcon.addEventListener('click', function () {
        dropdownMenu.classList.toggle('visible');
    });

    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
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
        if (darkModeStylesheet.disabled) {
            darkModeStylesheet.disabled = false;
            lightModeStylesheet.disabled = true;
            modeToggle.textContent = 'Toggle Light Mode';
        } else {
            darkModeStylesheet.disabled = true;
            lightModeStylesheet.disabled = false;
            modeToggle.textContent = 'Toggle Dark Mode';
        }
    });
});
