let currentSlide = 0;
const inner = document.getElementById('carouselInner');
const items = inner.children;
const totalSlides = items.length;
console.log(totalSlides);
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');



inner.style.width = `${items.length * 100}%`; // ✅ ADD THIS LINE

function updateCarousel() {
  inner.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));