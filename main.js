// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// Form Handling & Validation
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic Validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.length < 2 || !email.includes('@')) {
        statusMsg.style.color = "#ff4d4d";
        statusMsg.innerText = "Please fill in all fields correctly.";
        return;
    }

    // Success Simulation (since Formspree needs a real ID)
    statusMsg.style.color = "var(--accent-color)";
    statusMsg.innerText = "Sending...";

    // This simulates the submission process
    setTimeout(() => {
        statusMsg.innerText = "Message sent successfully!";
        contactForm.reset();
        
        // Clear message after 3 seconds
        setTimeout(() => {
            statusMsg.innerText = "";
        }, 3000);
    }, 1500);

    /* Uncomment this for real Formspree usage:
    const data = new FormData(e.target);
    fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            statusMsg.innerText = "Message sent successfully!";
            contactForm.reset();
        }
    });
    */
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "15px 5%";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
        nav.style.padding = "20px 5%";
        nav.style.boxShadow = "none";
    }
});