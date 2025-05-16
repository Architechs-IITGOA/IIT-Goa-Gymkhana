export function FadeInOut(targetSelector, threshold = 0.1) {
  document.addEventListener("DOMContentLoaded", () => {
      const targetElement = document.querySelector(targetSelector);

      if (!targetElement) {
          console.error(`Element not found: ${targetSelector}`);
          return;
      }

      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  targetElement.classList.add("visible"); // Add the visible class
              } else {
                  targetElement.classList.remove("visible"); // Remove the visible class
              }
          },
          { threshold } // Trigger when the specified percentage of the section is visible
      );

      observer.observe(targetElement);
  });
}
