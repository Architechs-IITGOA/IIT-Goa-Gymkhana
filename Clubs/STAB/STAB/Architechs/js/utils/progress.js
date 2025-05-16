
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-bar");

  document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Distance from the top of the page
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercent = (scrollTop / docHeight) * 100; // Percentage scrolled

    // Update the progress bar width
    progressBar.style.width = `${Math.min(scrollPercent, 100)}%`; // Cap the width at 100%
  });
});
