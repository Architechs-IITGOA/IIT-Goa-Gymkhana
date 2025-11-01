const navLinks = document.querySelectorAll(".nav-links a"); // <-- corrected selector
const sections = document.querySelectorAll("section");

navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // adjust for navbar height
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
document.querySelectorAll(".team-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector(".card-inner").classList.toggle("flipped");
  });
});
