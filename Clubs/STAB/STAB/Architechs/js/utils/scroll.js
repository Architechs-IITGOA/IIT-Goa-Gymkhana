
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const isMobile = window.innerWidth <= 768; // Define a breakpoint for mobile view
      const offset = isMobile ? 150 : 150; // Adjust the offset value for mobile
      
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Smooth scroll
      });
    }
  });
});
