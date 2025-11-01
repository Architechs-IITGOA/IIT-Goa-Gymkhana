
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-bars"></i>' : 
        '<i class="fas fa-times"></i>';
    navMenu.classList.toggle('active');
});


document.getElementById("join-community-button").addEventListener("click",()=>{
  window.location.href = "https://chat.whatsapp.com/L8Ul44IyCsd64UKLJC6Jky";
});



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
let lineCount = 25;
for (let i = 0; i < lineCount; i++) {
  const line = document.createElement('div');
  const color = linesColor[Math.floor(Math.random()*linesColor.length)];
  line.classList.add('circuit-line');
  line.style.top = `${i*(100/lineCount) + 3}vh`;
  line.style.width = `${20 + Math.random() * 60}vw`;
  line.style.animationName = (Math.floor(Math.random()*2) == 0) ? 'move-horizontal-from-left' : 'move-horizontal-from-right';
  line.style.left = `0vw`;
  line.style.animationDuration = `${1 + Math.random() * 5}s`;
  line.style.animationDelay = `${Math.random() * 10}s`;
  line.style.borderColor = color;
  line.style.filter = `drop-shadow(0 0 ${Math.floor(Math.random()*7) + 3}px ${color})`;
  heroBg.appendChild(line);
}

lineCount = 0; // now add this from vertical lines

for (let i = 0; i < lineCount; i++) {
  const line = document.createElement('div');
  const color = linesColor[Math.floor(Math.random()*linesColor.length)];
  line.classList.add('circuit-line');
  line.style.left = `${i*(100/lineCount) + 3}vw`;
  line.style.height = `${50 + Math.random() * 60}vh`;
  line.style.top = `0vw`;
  line.style.animationName = (Math.floor(Math.random()*2) == 0) ? 'move-vertical-from-up' : 'move-vertical-from-down';
  line.style.animationDuration = `${1 + Math.random() * 5}s`;
  line.style.animationDelay = `${Math.random() * 10}s`;
  line.style.borderColor = color;
  line.style.filter = `blur(2px)`;
  line.style.filter = `drop-shadow(0 0 ${Math.floor(Math.random()*7) + 3}px ${color})`;
  heroBg.appendChild(line);
}

// Team members dataconst 
const members = [
  { name: "Ameya Bhagwat", role: "Club Head", image: "./images/members/AmeyaBhagwat_EnR_club_head.jpg", phNo: "+91 9820456950", email: "ameya.sunil.23063@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/bhagwatameya/"},
  { name: "Swathi Lakkoju", role: "Advisory Core", image: "./images/members/Sai_Swathi_Lakkoju_EnR_Advisory_Core.jpg", phNo: "+91 7674826862", email: "sai2414202@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/srilakkoju1/"},
  { name: "Roshan Sharma", role: "Advisory Core", image: "./images/members/Roshan_Sharma_EnR_Advisory_Core.jpg", phNo: "+91 8169043955", email: "Roshan.sharma.22042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/roshan-sharma-547585235/" },
  { name: "Rahul Tilwani", role: "Advisory Core", image: "./images/members/Rahul_Tilwani_EnR_Advisory_Core.jpg", phNo: "+91 7567359995", email: "rahul.tilwani.22063@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/rahul-tilwani-26bb11256/"},
  { name: "Kamal Assudani", role: "Core Member", image: "./images/members/Kamal_Assudani_Enr_Core.jpg", phNo: "+91 8799306073", email: "kamal.assudani.23063@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/kamal-assudani-3139b4292/" },
  { name: "Parth Gupta", role: "Core Member", image: "./images/members/Parth_Gupta_EnR_Core.jpeg", phNo: "+91 8264622235", email: "parth.gupta.23031@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/parth-gupta-63a652308/" },
  { name: "Saurav Baranwal", role: "Core Member", image: "./images/members/SauravBaranwal_ENR_CoreMember.jpg", phNo: "+91 8826849645", email: "saurav.baranwal.24033@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/saurav-baranwal-17941b329/" },
  { name: "Tarique Bin Yusuf", role: "Core Member", image: "./images/members/Tarique_Bin_Yusuf_EnR_Core.jpg", phNo: "+91 9305006407", email: "tarique.bin.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/tarique-bin-yusuf-6b701232b/" },
  { name: "Keerthi Enganti", role: "Core Member", image: "./images/members/Keerthi_ENR_Core.jpg", phNo: "+91 9392708931", email: "enganti.keerthi.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/keerthi-enganti-b1ba61334/" },
  { name: "Y Veekshitha", role: "Core Member", image: "./images/members/Veekshita_EnR_Core.jpg", phNo: "+91 7993506087", email: "y.veekshitha.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/y-veekshitha-985a60334/" },
  { name: "Ajinkya Tembhurne", role: "Core Member", image: "./images/members/Ajinkya_Tembhurne_EnR_Core.jpg", phNo: "+91 7028678916", email: "tembhurne.ajinkya.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/ajinkya-tembhurne-1b59b3381/" },
  { name: "Snigdha Naina", role: "Core Member", image: "./images/members/Snigdha_Naina_EnR_Core.jpg", phNo: "+91 7396426357", email: "beagari.snigdha.24063@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/beagari-snigdha-naina-514ab9330/" },
  { name: "Malhar Salunkhe", role: "Core Member", image: "./images/members/Malhar_Salunkhe_EnR_Core.jpg", phNo: "+91 8591213749", email: "malhar.pravin.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/malhar-salunkhe/" },
  { name: "Yuvraj Singh", role: "Core Member", image: "./images/members/Yuvraj_Singh_EnR_Core.jpg", phNo: "+91 9027366461", email: "yuvraj.singh.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/yuvraj-singh-bb8625330/" },
  { name: "Abhishek Mirchandani", role: "Core Member", image: "./images/members/Abhishek_Mirchandani_EnR_Core.jpg", phNo: "+91 9892046055", email: "abhishek.mirchandani.2404202@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/abhishek-mirchandani-8838b9333/" },
  { name: "Aayush Vats", role: "Core Member", image: "./images/members/AayushVats_EnR_Core.jpg", phNo: "+91 9812930249", email: "aayush25263101@iitgoa.ac.in", linkedin : "https://www.linkedin.com"},
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

const getElectricCardCardContainer = (member)=>{
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
              <img class="member-image" src=${member.image}>
              <p class="title">${member.name}</p>
            </div>
            <hr class="divider" />
            <div class="content-bottom">
              <p class="description">
                ${member.role} <br>
                ${member.phNo}
              </p>
              <div class="social-links">
                  <a href="mailto:${member.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>
                  <a href="${member.linkedin}" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                  </div>
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
    electricCard.innerHTML += getElectricCardCardContainer(member);
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
    title: "School Outreach Program 2024",
    date: "23 January 2025",
    shortDesc: "Exposed Goa school students to the fascinating worlds of AI and robotics.",
    image: "./images/events/school_outreach_program_2024.jpg",
  },
  {
    title: "PCB and soldering workshop 2025",
    date: "19 March 2025",
    shortDesc: "Engaging workshop featuring PCB design and hands-on soldering practice.",
    image: "./images/events/pcb_soldering_workshop_2025.jpg",
  },
  {
    title: "Arduino Workshop 2025",
    date: "23-25 August 2025",
    shortDesc: "A hands-on session for beginners to learn Arduino programming, sensor interfacing and build working line-follower robots.",
    image: "./images/events/arduino_workshop_2025.jpg",
  },
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
  eventsGrid.style.height = "max-content";
});

// IntersectionObserver for fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.01
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