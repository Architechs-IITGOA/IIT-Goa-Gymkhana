// Hamburger-menu

const menuButton=document.querySelector(".hamburger");
const navbar=document.querySelector(".navbar-nav");

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('hamburger-active');
    menuButton.classList.toggle('hamburger-active');
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
        navbar.classList.remove('hamburger-active'); 
        menuButton.classList.remove('hamburger-active'); 
    }
});

function clearForm(form) {
  setTimeout(() => {form.reset();}, 100);
}

// Scrolling smoothly

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Making clicked menu active

// document.addEventListener("DOMContentLoaded", () => {
//   const navLinks = document.querySelectorAll(".nav-link");
//   const logoContainer = document.querySelector(".logo-container");

//   const handleNavClick = (event) => {
//       navLinks.forEach(link => link.classList.remove("active"));
//       event.target.classList.add("active");
//   };

//   navLinks.forEach(link => {
//       link.addEventListener("click", handleNavClick);
//   });

//   logoContainer.addEventListener("click", () => {
//       navLinks.forEach(link => link.classList.remove("active"));
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const logoContainer = document.querySelector(".logo-container");
  const sections = document.querySelectorAll("section"); 

  // Function to handle the active class on navigation links
  const handleNavClick = (event) => {
    navLinks.forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
  };

  // Function to set active class on the correct nav link based on the section in view
  const setActiveNavLink = () => {
    let currentSection = null;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === currentSection) {
        link.classList.add("active");
      }
    });
  };

  // Set active link on page load if a section is in view
  setActiveNavLink();

  // Listen for scroll events and update the active link
  window.addEventListener("scroll", setActiveNavLink);

  // Event listeners for navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener("click", handleNavClick);
  });

  // Remove active class from nav links when logo is clicked
  logoContainer.addEventListener("click", () => {
    navLinks.forEach(link => link.classList.remove("active"));
  });
});



// ----------------------------------------------------------------------------------------