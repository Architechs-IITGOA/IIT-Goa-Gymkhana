// DOM Elements
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const eventSlides = document.querySelectorAll('.event-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
const teamCategoryBtns = document.querySelectorAll('.team-category-btn');
const teamGroups = document.querySelectorAll('.team-group');

// Sticky Header
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    
    // Active Link on Scroll
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-bars"></i>' : 
        '<i class="fas fa-times"></i>';
    
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Main Events Slider
let currentSlide = 0;

function showSlide(index) {
    if (index < 0) {
        currentSlide = eventSlides.length - 1;
    } else if (index >= eventSlides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    
    eventSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    eventSlides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Reset image navigation for the new slide
    resetImageNavigation(currentSlide);
}

// Next and Previous buttons for main events
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Indicators for main events
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        showSlide(index);
    });
});

// Event Image Gallery Functionality
function initEventImageNavigation() {
    document.querySelectorAll('.event-slide').forEach((slide, slideIndex) => {
        let currentImageIndex = 0;
        const images = slide.querySelectorAll('.event-image');
        const prevBtn = slide.querySelector('.event-image-prev');
        const nextBtn = slide.querySelector('.event-image-next');
        const indicators = slide.querySelectorAll('.event-image-indicator');
        let imageInterval;

        function showImage(index) {
            // Handle wrap-around
            if (index < 0) index = images.length - 1;
            if (index >= images.length) index = 0;
            
            currentImageIndex = index;
            images.forEach(img => img.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));
            
            images[currentImageIndex].classList.add('active');
            indicators[currentImageIndex].classList.add('active');
        }

        function startImageInterval() {
            clearInterval(imageInterval);
            if (images.length > 1) { // Only auto-advance if there are multiple images
                imageInterval = setInterval(() => {
                    showImage(currentImageIndex + 1);
                }, 3000);
            }
        }

        // Initialize
        if (images.length > 0) {
            showImage(0);
            startImageInterval();
            
            // Set up navigation
            prevBtn.addEventListener('click', () => {
                showImage(currentImageIndex - 1);
                startImageInterval();
            });
            
            nextBtn.addEventListener('click', () => {
                showImage(currentImageIndex + 1);
                startImageInterval();
            });
            
            // Set up indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showImage(index);
                    startImageInterval();
                });
            });
            
            // Pause on hover
            const gallery = slide.querySelector('.event-gallery');
            gallery.addEventListener('mouseenter', () => clearInterval(imageInterval));
            gallery.addEventListener('mouseleave', startImageInterval);
            
            // Handle touch events for mobile
            gallery.addEventListener('touchstart', handleTouchStart, {passive: true});
            gallery.addEventListener('touchmove', handleTouchMove, {passive: true});
            
            let touchStartX = 0;
            let touchEndX = 0;
            
            function handleTouchStart(e) {
                touchStartX = e.changedTouches[0].screenX;
            }
            
            function handleTouchMove(e) {
                touchEndX = e.changedTouches[0].screenX;
            }
            
            gallery.addEventListener('touchend', () => {
                if (touchStartX - touchEndX > 50) {
                    // Swipe left
                    showImage(currentImageIndex + 1);
                } else if (touchEndX - touchStartX > 50) {
                    // Swipe right
                    showImage(currentImageIndex - 1);
                }
                startImageInterval();
            });
        } else {
            // Hide navigation if only one image
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            slide.querySelector('.event-image-indicators').style.display = 'none';
        }
    });
}

function resetImageNavigation(slideIndex) {
    const slide = document.querySelectorAll('.event-slide')[slideIndex];
    if (!slide) return;
    
    const images = slide.querySelectorAll('.event-image');
    const indicators = slide.querySelectorAll('.event-image-indicator');
    
    images.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    if (images.length > 0) {
        images[0].classList.add('active');
        indicators[0].classList.add('active');
    }
}

// Team Category Toggle
teamCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Toggle active class on buttons
        teamCategoryBtns.forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        
        // Toggle team groups
        teamGroups.forEach(group => {
            group.classList.remove('active');
        });
        document.getElementById(category).classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Card flip on touch for mobile devices
const teamCards = document.querySelectorAll('.team-card');
        
teamCards.forEach(card => {
    card.addEventListener('touchstart', function() {
        const cardInner = this.querySelector('.card-inner');
        cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 
            'rotateY(0deg)' : 'rotateY(180deg)';
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize image navigation for events
    initEventImageNavigation();
    
    // Initialize first slide
    showSlide(0);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate image heights if needed
    document.querySelectorAll('.event-images').forEach(container => {
        const aspectRatio = window.innerWidth < 480 ? 1 : 
                          window.innerWidth < 768 ? 0.75 : 0.5625;
        container.style.paddingBottom = `${aspectRatio * 100}%`;
    });
});
