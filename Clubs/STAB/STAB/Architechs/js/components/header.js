

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const menuItems = dropdownMenu.querySelectorAll("a"); // Select all links or items in the dropdown

  let menuOpen = false;

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      hamburger.classList.add("open");
      dropdownMenu.classList.add("show");
    } else {
      hamburger.classList.remove("open");
      dropdownMenu.classList.remove("show");
    }
  });

  // Close menu on menu item click
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuOpen = false;
      hamburger.classList.remove("open");
      dropdownMenu.classList.remove("show");
    });
  });
});
