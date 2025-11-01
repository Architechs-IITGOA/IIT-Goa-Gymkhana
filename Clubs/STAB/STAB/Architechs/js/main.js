import "./components/about.js";
import "./components/events.js";
import "./components/header.js";
import "./components/hero.js";
import "./utils/progress.js";
import "./utils/scroll.js";
import "./components/teams.js"
import "./utils/copyClipboard.js"


document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
  
    // Hide the loading screen after 1.5 seconds
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 1500);
  });