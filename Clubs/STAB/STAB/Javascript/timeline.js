const timelineData = [
  {
    date: "2015",
    title: "Started Programming Journey",
    description:
      "Learned basics of programming through online courses and small projects.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M2 3h20v2H2V3zm2 14v-2h4v2H4zm6 0v-2h4v2h-4zm6 0v-2h4v2h-4zM4 7v2h4V7H4zm6 0v2h4V7h-4zm6 0v2h4V7h-4z"/></svg>`, // tech (code brackets)
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // programming related
  },
  {
    date: "2017",
    title: "First Hackathon Win",
    description:
      "Won 1st place at local hackathon with a team project focused on smart home automation.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7l3-7z"/></svg>`, // event (star)
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // hackathon/teamwork
  },
  {
    date: "2018",
    title: "Joined Tech Startup",
    description:
      "Started working as a frontend developer building innovative web applications.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"/></svg>`, // achievement (circle badge)
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", // startup office
  },
  {
    date: "2020",
    title: "Open Source Contributor",
    description:
      "Contributed major features and bug fixes to popular open source projects.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 2h-4v6H6l6 6 6-6h-4V2z"/></svg>`, // tech (arrow down)
    image: "https://images.unsplash.com/photo-1537432376769-00a84a7f47d2?auto=format&fit=crop&w=600&q=80", // open source coding
  },
  {
    date: "2021",
    title: "Launched Personal Blog",
    description:
      "Started a tech blog sharing tutorials, opinions, and career advice.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 4h16v2H4zM4 10h16v2H4zM4 16h10v2H4z"/></svg>`, // event (text lines)
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80", // blog writing
  },
  {
    date: "2023",
    title: "Speaker at Tech Conference",
    description:
      "Presented a talk on modern web animations and user experience design.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 7l5 5-5 5-1.5-1.5L14 13H7v-2h7l-3.5-3.5L12 7z"/></svg>`, // achievement (arrow right)
    image: "https://images.unsplash.com/photo-1503424886301-7c34e4f1c716?auto=format&fit=crop&w=600&q=80", // conference speaker
  },
];

// Reference elements
const timelineItemsContainer = document.getElementById("timeline-items");
const timelineLine = document.getElementById("timeline-line");
const scrollProgress = document.getElementById("scroll-progress");

// Create timeline dots and cards dynamically
timelineData.forEach((item, index) => {
  
  // Create timeline card
  const card = document.createElement("article");
  card.className = "timeline-item";
  // Alternate left/right for desktop
  card.classList.add(index % 2 === 0 ? "left" : "right");
  // Initial slide direction
  card.classList.add(index % 2 === 0 ? "slide-in-left" : "slide-in-right");
  card.dataset.index = index;

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
  dot.style.top = `${index * 47 + 2}vh`; // vertical spacing increased
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