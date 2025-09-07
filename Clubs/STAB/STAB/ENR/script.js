document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple contact form submission (for demonstration)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission

            // In a real scenario, you'd send this data to a server
            // For now, we'll just simulate a success message
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            formStatus.style.color = 'green';
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';

            // Clear the form fields
            contactForm.reset();

            // Optionally, clear status after a few seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});