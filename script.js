
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-bars"></i>' : 
        '<i class="fas fa-times"></i>';
    navMenu.classList.toggle('active');
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
  { name: "Tarique Bin Yusuf ", role: "Club Head", image: "./images/members/TariqueBin.png", phNo: "9305006407", email: "tarique.bin.24042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/tarique-bin-yusuf-6b701232b?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
  { name: "Bysali Khara ", role: "Senior Core", image: "images/members/BysaliKhara.jpg", phNo: "6289795562", email: "bysali2614201@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/bysali-khara-04927123b?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
  { name: "Madhura Srishti Karthikeyan ", role: "Senior Core", image: "images/members/MadhuraSrishtiKarthikeyan.jpg", phNo: "8056095443", email: "madhura2614203@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/madhura-karthikeyan-552002254?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Manasi Saxena ", role: "Senior Core", image: "images/members/ManasiSaxena.jpg", phNo: "9742045989", email: "manasi.saxena.24042@iitgoa.ac.in " ,linkedin: "https://www.linkedin.com/in/manasi-saxena-951a25332"},
  { name: "E S Balaganesh", role: "Core Member", image: "images/members/Gemini_Generated_Image_uy9a82uy9a82uy9a-BalaganeshE.jpeg", phNo: "9995353708", email: "balaganesh.e.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/balaganesh2006?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Kishan Pandey", role: "Core Member", image: "images/members/KishanLalbahadur.png", phNo: "7620223586", email: "kishan.lalbahadur.25063@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/kishan-pandey-64b16a343?trk=contact-info" },
  { name: "Aditya Kumar ", role: "Core Member", image: "images/members/AdityaKumar.webp", phNo: "7061464478", email: "aditya.kumar.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/aditya-kumar-93b81b3b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Netanel Leo", role: "Core Member", image: "images/members/NetanelMervin.jpeg", phNo: "8208474997", email: "netanel.mervin.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/netanel-leo-9864b4390" },
  { name: "Devraj", role: "Core Member", image: "images/members/Devraj.jpg", phNo: "7014721896", email: "devraj.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/devraj-devraj-choudhary-266173380?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Viraj Varma ", role: "Core Member", image: "images/members/VirajVijay.jpg", phNo: "9561441502", email: "viraj.vijay.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/viraj-varma-055b36399?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Shreya Deelip Gatthawar", role: "Core Member", image: "images/members/ShreyaDeelip.jpg", phNo: "7058944494", email: "shreya.deelip.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/shreya-gatthawar-08a1ba378?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Naman Bankar", role: "Core Member", image: "images/members/NamanBalasaheb.jpeg", phNo: "8485887254", email: "naman.balasaheb.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/naman-bankar-bb5271383?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Eesh sharma", role: "Core Member", image: "images/members/EeshSharma.jpg", phNo: "9829580883", email: "eesh.sharma.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/eesh-sharma-593a5935b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Tanvi Bijapur ", role: "Core Member", image: "images/members/TanviSanjeev.jpeg", phNo: "8904048155", email: "tanvi.sanjeev.25042@iitgoa.ac.in" ,linkedin: "https://www.linkedin.com/in/tanvi-bijapur-b5412337b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
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