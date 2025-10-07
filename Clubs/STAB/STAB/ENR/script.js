// Animated tagline typing effect
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
  line.style.top = `${Math.random()*100}vh`;
  line.style.width = `${20 + Math.random() * 60}vw`;
  line.style.left = `${-80 - Math.random() * 100}vw`;
  line.style.animationDuration = `${5 + Math.random() * 5}s`;
  line.style.animationDelay = `${Math.random() * 10}s`;
  line.style.borderColor = color;
  line.style.filter = `drop-shadow(0 0 ${Math.floor(Math.random()*7) + 3}px ${color})`;
  heroBg.appendChild(line);
}

// Team members data
const members = [
  { name: "Ananya Singh", role: "Core Team", photo: "https://i.pravatar.cc/100?img=12" },
  { name: "Rohan Mehta", role: "Technical Team", photo: "https://i.pravatar.cc/100?img=5" },
  { name: "Sanya Kapoor", role: "Design Team", photo: "https://i.pravatar.cc/100?img=15" },
  { name: "Aditya Sharma", role: "Core Team", photo: "https://i.pravatar.cc/100?img=9" },
  { name: "Meera Joshi", role: "Technical Team", photo: "https://i.pravatar.cc/100?img=20" },
  { name: "Arjun Verma", role: "Design Team", photo: "https://i.pravatar.cc/100?img=2" },
  { name: "Priya Nair", role: "Core Team", photo: "https://i.pravatar.cc/100?img=8" },
  { name: "Karan Gill", role: "Technical Team", photo: "https://i.pravatar.cc/100?img=18" },
];

const membersGrid = document.getElementById('members-grid');

function renderMembers(filter = "all") {
  membersGrid.innerHTML = "";
  const filtered = filter === "all" ? members : members.filter(m => m.role.toLowerCase().includes(filter));
  filtered.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.classList.add('electric-border');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <img src="${member.photo}" alt="Photo of ${member.name}" class="member-photo" loading="lazy" />
      <div class="member-name">${member.name}</div>
      <div class="member-role">${member.role}</div>
    `;
    membersGrid.appendChild(card);
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
    details: "The Robot Wars 2023 event saw fierce competition among teams designing robots with unique strategies and weapons. The event was judged by industry experts and featured workshops on combat robotics."
  },
  {
    title: "IoT Hackathon",
    date: "July 10-12, 2023",
    shortDesc: "48-hour hackathon focusing on innovative Internet of Things solutions.",
    details: "Teams developed smart IoT prototypes, integrating sensors and cloud connectivity. Winners got mentorship and seed funding to develop their projects further."
  },
  {
    title: "Embedded Systems Workshop",
    date: "September 5, 2023",
    shortDesc: "Hands-on workshop on microcontrollers and real-time systems.",
    details: "Participants learned to program embedded systems using popular platforms like Arduino and Raspberry Pi. The workshop included live demos and project building sessions."
  },
  {
    title: "AI Robotics Symposium",
    date: "Upcoming - December 2023",
    shortDesc: "A symposium featuring talks on AI integration in robotics.",
    details: "Planned as a multi-day event with keynote speakers from academia and industry, panel discussions, and live demonstrations of AI-powered robots."
  }
];

const eventsGrid = document.getElementById('events-grid');

function createEventCard(event) {
  const card = document.createElement('div');
  card.classList.add('event-card');
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-pressed', 'false');
  card.setAttribute('aria-label', `Event: ${event.title}. Press to see more details.`);

  card.innerHTML = `
    <div class="event-front">
      <div class="event-title">${event.title}</div>
      <div class="event-date">${event.date}</div>
      <div class="event-desc">${event.shortDesc}</div>
    </div>
    <div class="event-back">
      <div class="event-title">${event.title} Details</div>
      <div class="event-desc">${event.details}</div>
    </div>
  `;

  // Toggle flip on click or keyboard enter
  function toggleFlip() {
    const flipped = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
  }
  card.addEventListener('click', toggleFlip);
  card.addEventListener('keydown', e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  });

  return card;
}

events.forEach(event => {
  eventsGrid.appendChild(createEventCard(event));
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
