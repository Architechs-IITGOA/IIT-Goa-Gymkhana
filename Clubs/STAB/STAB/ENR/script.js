const taglineEl = document.querySelector('#hero .tagline');
const taglineText = "Innovating Circuits, Creating the Future.";
let taglineIndex = 0;
function typeTagline() {
  if (taglineIndex <= taglineText.length) {
    taglineEl.textContent = taglineText.slice(0, taglineIndex);
    taglineIndex++;
    setTimeout(typeTagline, 90);
  } else {
    setTimeout(() => {
      taglineIndex = 0;
      typeTagline();
    }, 3000);
  }
} 
typeTagline();

// Background circuit lines animation setup
const heroBg = document.getElementById('hero-bg');
const linesColor = ["red", "blue","green","yellow","white","purple","#8dc4ff"];
const lineCount = 25;
for (let i = 0; i < lineCount; i++) {
  const line = document.createElement('div');
  const color = linesColor[Math.floor(Math.random()*linesColor.length)];
  line.classList.add('circuit-line');
  line.style.top = `${i*(100/lineCount) + 3}vh`;
  line.style.width = `${20 + Math.random() * 60}vw`;
  // line.style.left = `${-80 - Math.random() * 100}vw`;
  line.style.left = `0vw`;
  line.style.animationDuration = `${5 + Math.random() * 5}s`;
  line.style.animationDelay = `${Math.random() * 10}s`;
  line.style.borderColor = color;
  line.style.filter = `drop-shadow(0 0 ${Math.floor(Math.random()*7) + 3}px ${color})`;
  heroBg.appendChild(line);
}

// Team members data
const members = [
  { name: "Ananya Singh", role: "Junior Core", photo: "https://i.pravatar.cc/100?img=12" },
  { name: "Rohan Mehta", role: "Junior Core", photo: "https://i.pravatar.cc/100?img=5" },
  { name: "Sanya Kapoor", role: "Club Head", photo: "https://i.pravatar.cc/100?img=15" },
  { name: "Aditya Sharma", role: "Club Head", photo: "https://i.pravatar.cc/100?img=9" },
  { name: "Meera Joshi", role: "Senior Core", photo: "https://i.pravatar.cc/100?img=20" },
  { name: "Arjun Verma", role: "Senior Core", photo: "https://i.pravatar.cc/100?img=2" },
  { name: "Priya Nair", role: "Junior Core", photo: "https://i.pravatar.cc/100?img=8" },
  { name: "Karan Gill", role: "Senior Core", photo: "https://i.pravatar.cc/100?img=18" },
];

const membersGrid = document.querySelector('.members-grid-container');

const getElectricCardSvg = ()=>{
  return `<svg class="svg-container">
          <defs>
            <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
              <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>
  
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
              <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>
  
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
              <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>
  
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
              <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
              </feOffset>
  
              <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
              <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
              <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
  
              <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
            </filter>
          </defs>
        </svg>`;
}

const getElectricCardCardContainer = (name , role, photo)=>{
  return `<div class="card-container">
          <div class="inner-container">
            <div class="border-outer">
              <div class="main-card"></div>
            </div>
            <div class="glow-layer-1"></div>
            <div class="glow-layer-2"></div>
          </div>
  
          <div class="background-glow"></div>
  
          <div class="content-container">
            <div class="content-top">
              <p class="title">${name}</p>
            </div>
            <hr class="divider" />
            <div class="content-bottom">
              <p class="description">
                ${role}
              </p>
            </div>
          </div>
        </div>`;
}

function renderMembers(filter = "all") {
  membersGrid.innerHTML = "";
  const filtered = filter === "all" ? members : members.filter(m => m.role.toLowerCase() == filter);
  filtered.forEach(member => {

    const electricCard = document.createElement('div');
    electricCard.classList.add('electric-card');

    electricCard.innerHTML += getElectricCardSvg();
    electricCard.innerHTML += getElectricCardCardContainer(member.name,member.role,member.photo);
    membersGrid.appendChild(electricCard);
  });
}
renderMembers();


// Filter buttons logic
const filterButtons = document.querySelectorAll('#team .filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    renderMembers(btn.dataset.filter);
  });
});

// Events data
const events = [
  {
    title: "Robot Wars 2023",
    date: "March 15, 2023",
    shortDesc: "High-octane battle between autonomous robots built by club members.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "IoT Hackathon",
    date: "July 10-12, 2023",
    shortDesc: "48-hour hackathon focusing on innovative Internet of Things solutions.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Embedded Systems Workshop",
    date: "September 5, 2023",
    shortDesc: "Hands-on workshop on microcontrollers and real-time systems.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AI Robotics Symposium",
    date: "Upcoming - December 2023",
    shortDesc: "A symposium featuring talks on AI integration in robotics.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  }
];

const getElectricEventCardContainer = (event)=>{
  return `<div class="event-card-container">
            <div class="inner-container">
              <div class="border-outer">
                <div class="main-card"></div>
              </div>
              <div class="glow-layer-1"></div>
              <div class="glow-layer-2"></div>
            </div>
    
            <div class="background-glow"></div>
    
            <div class="content-container">
            <div class="scrollbar-glass">${event.date}</div>
              <div class="content-top">
                <img src=${event.image} class="event-image " />
                <p class="title">${event.title}</p>
              </div>
              <hr class="divider">
              <div class="content-bottom">
                <p class="description">
                  ${event.shortDesc}
                </p>
              </div>
            </div>
        </div>`;
};

const eventsGrid = document.querySelector('.event-grid-container');

function addEventCard(event) {
  const electricCard = document.createElement('div');
  electricCard.classList.add('electric-event-card');

  electricCard.innerHTML += getElectricCardSvg(); // it has same SVG as member card 
  electricCard.innerHTML += getElectricEventCardContainer(event);
  eventsGrid.appendChild(electricCard);
}

events.forEach(event => {
  addEventCard(event);
});

// IntersectionObserver for fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));