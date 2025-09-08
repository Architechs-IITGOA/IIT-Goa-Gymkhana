
    // Fade-in on scroll using Intersection Observer
    document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const options = {
        threshold: 0.15
      };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      sections.forEach(section => {
        observer.observe(section);
      });
    });

    // Responsive nav burger menu toggle
    const burger = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
      burger.setAttribute('aria-expanded', !expanded);
      burger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking a nav link (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if(navMenu.classList.contains('open')){
          burger.classList.remove('open');
          burger.setAttribute('aria-expanded', false);
          navMenu.classList.remove('open');
        }
      });
    });