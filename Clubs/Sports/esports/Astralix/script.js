const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));


// back to top  
document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

// Navbar when scrolling

const header = document.querySelector('#header');
window.onscroll = function(){
  if (document.documentElement.scrollTop > 20){
    header.classList.add('blur-header');
  }else{
    header.classList.remove('blur-header');
  }
}

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop : "infinite",
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
  

// Scroll reveal animation
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true, 
})

sr.reveal('#left-img', {origin: 'left'})
sr.reveal('#right-img', {origin: 'right'})
sr.reveal('.home-info', {origin: 'bottom'})
sr.reveal('#about-left-img', {origin: 'left', opacity:1})
sr.reveal('.about-right-content-container', {origin: 'right', opacity:1})
sr.reveal('.council-title')
sr.reveal('.council-p')
sr.reveal('.swiper', {origin:"bottom"})


 