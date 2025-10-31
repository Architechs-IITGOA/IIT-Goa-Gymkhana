const timelineData = [
  {
    date: "2014",
    title: "Allotment of IIT to Goa",
    description:
      "The central government allotted an IIT for Goa as part of its plan to expand IITs across India.",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" width="32" height="32">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // programming related
  },
  {
    date: "2016",
    title: "Inauguration & start of operations",
    description:
      "IIT Goa formally began functioning on 30 July 2016 in a temporary campus (Goa Engineering College, Farmagudi).",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7l3-7z"/></svg>`, // event (star)
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "2016-2019",
    title: "Mentorship by IIT Bombay",
    description:
      "For its first three years, IIT Goa was mentored by IIT Bombay to help set up academics, recruitment, and governance.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/></svg>`, // achievement (circle badge)
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "2020",
    title: "Establishment of HPC Nodal Center",
    description:
      "Under India’s National Supercomputing Mission, IIT Goa became a nodal centre for high performance computing and AI education/research.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 2h-4v6H6l6 6 6-6h-4V2z"/></svg>`, // tech (arrow down)
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "2024",
    title: "Got best UG batch ever",
    description:
      "IIT Goa welcomed a fresh batch of brilliant minds, ready to innovate and shape the future of technology.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h16v2H4zM4 10h16v2H4zM4 16h10v2H4z"/></svg>`, // event (text lines)
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "2025",
    title: "Highest Package Record",
    description:
      "IIT Goa secured a highest package of ₹1.1 crore per annum during the 2021-22 placement drive, showcasing the peak earning potential for its students.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 7l5 5-5 5-1.5-1.5L14 13H7v-2h7l-3.5-3.5L12 7z"/></svg>`, // achievement (arrow right)
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

// >>>>>>>>>>>>>>>>>>>>>>>>>> here are some svgs for new events also can find other too <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2" width="32" height="32">
//   <circle cx="12" cy="12" r="10"/>
//   <circle cx="12" cy="12" r="6"/>
//   <circle cx="12" cy="12" r="2"/>
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#67e8f9" width="32" height="32">
//   <path d="M12 2 2 9l10 13 10-13-10-7Zm-4.5 7 4.5-4 4.5 4H7.5Zm9.42 2L12 20.24 7.08 11h9.84Z"/>
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#60a5fa" width="32" height="32">
//   <path d="M12 2 1 7l11 5 9-4.09V17h2V7L12 2Zm0 13-7-3.18v4.06L12 21l7-5.12v-4.06L12 15Z"/>
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c084fc" width="32" height="32">
//   <path d="M12 2 15 8l6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1 3-6z"/>
// </svg>


// Reference elements ( containers )
const timelineItemsContainer = document.getElementById("timeline-items");
const timelineLine = document.getElementById("timeline-line");
const scrollProgress = document.getElementById("scroll-progress");

// Creating timeline dots and cards
timelineData.forEach((item, index) => {
  
  // Create timeline card
  const card = document.createElement("article");
  card.className = "timeline-item";

  // Alternate left/right for desktop
  card.classList.add(index % 2 === 0 ? "left" : "right");
  // Initial slide direction
  card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
  card.dataset.index = index;

  // diciding position of card based on grid layout
  if(window.innerWidth >= 768){
    card.style.gridRow = `${index+1} / ${index+1}`;
    card.style.gridColumn = `${index%2 == 0 ? 1 : 2} / ${index%2 == 0 ? 1 : 2}`;
  } else {
    card.style.gridRow = `${index+1} / ${index+1}`;
    card.style.gridColumn = `1 / 1`;
  }
  
  
  // Insert icon wrapper
  const iconWrapper = document.createElement("div");
  iconWrapper.className = "icon-wrapper";
  iconWrapper.innerHTML = item.icon;
  card.appendChild(iconWrapper);
  
  // Create image element if exists
  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = `${item.title} image`;
    img.loading = "lazy";
    card.appendChild(img);
  }
  
  // Content wrapper
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "timeline-content";
  
  // Content inside card
  const timeElem = document.createElement("time");
  timeElem.textContent = item.date;
  contentWrapper.appendChild(timeElem);
  
  const titleElem = document.createElement("h3");
  titleElem.textContent = item.title;
  contentWrapper.appendChild(titleElem);
  
  const descElem = document.createElement("p");
  descElem.textContent = item.description;
  contentWrapper.appendChild(descElem);
  
  card.appendChild(contentWrapper);
  
  timelineItemsContainer.appendChild(card);

  // Create timeline dot
  const dot = document.createElement("div");
  dot.className = "timeline-dot";
  dot.style.top = `${index * 47 + 2}vh`; // hard coded value to match card position and dot position using vh
  dot.innerHTML = item.icon;
  dot.setAttribute("aria-hidden", "true");
  dot.dataset.index = index;
  dot.style.top = card.getBoundingClientRect().top;
  timelineLine.parentElement.appendChild(dot);
});

// IntersectionObserver for scroll-trigger animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

// For staggered animation, keep track of delays
let animationDelay = 0;

const timelineItems = document.querySelectorAll(".timeline-item");
const timelineDots = document.querySelectorAll(".timeline-dot");

// Function to activate glow on timeline line dot on card hover
function setLineGlow(index, active) {
  if (!timelineDots[index]) return;
  if (active) {
    timelineDots[index].style.boxShadow = `0 0 28px 10px var(--color-glow)`;
    timelineDots[index].style.borderColor = "var(--color-glow)";
  } else {
    timelineDots[index].style.boxShadow = "";
    timelineDots[index].style.borderColor = "";
  }
}

// Observer callback
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    const card = entry.target;
    const index = parseInt(card.dataset.index, 10);
    if (entry.isIntersecting) {
      // Add visible class with staggered delay
      setTimeout(() => {
        card.classList.add("visible");
        card.classList.remove("slide-in-left", "slide-in-right");
      }, index * 180);

      observer.unobserve(card);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
timelineItems.forEach((item) => observer.observe(item));

// Hover effect on cards to glow timeline line dot
timelineItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const idx = parseInt(item.dataset.index, 10);
    setLineGlow(idx, true);
  });
  item.addEventListener("mouseleave", () => {
    const idx = parseInt(item.dataset.index, 10);
    setLineGlow(idx, false);
  });
});

// Scroll progress bar update
function updateScrollProgress() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrolled + "%";
}
window.addEventListener("scroll", updateScrollProgress);
updateScrollProgress();

// Responsive adjustments for timeline dots vertical position on resize
function repositionDots() {
  timelineDots.forEach((dot, idx) => {

    dot.style.left = "50%";
    dot.style.transform = "translateX(-50%)";
    dot.style.top = `${idx * 48 + 2}vh`;

  });
}
window.addEventListener("resize", repositionDots);
repositionDots();