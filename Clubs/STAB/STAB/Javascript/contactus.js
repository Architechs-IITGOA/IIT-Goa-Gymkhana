// Responsive show/hide for cards — replaces previous function
const vh = window.innerHeight;

function getCardsPerRow() { // simple function to get max No. of cards in each row
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

let ticking = false;
const checkHideOrShow = () => {
  const cards = Array.from(document.querySelectorAll(".cards_members"));
  if (!cards.length) return;

  const cardsPerScreen = getCardsPerRow();

  // same segmentation logic as before (each segment = 50vh)
  const y = Math.floor((window.scrollY * 2) / vh);
  const i = Math.max(0, y);

  if(i*cardsPerScreen >= cards.length) return;

  // helper to toggle a batch (show or hide)
  const toggleBatch = (batchIndex, show) => {
    for (let k = 0; k < cardsPerScreen; k++) {
      const idx = batchIndex * cardsPerScreen + k;
      if (typeof cards[idx] === "undefined") continue;
      if (show) {
        cards[idx].classList.add("showit");
        cards[idx].classList.remove("hideit");
      } else {
        cards[idx].classList.add("hideit");
        cards[idx].classList.remove("showit");
      }
    }
  };

  // show current
  toggleBatch(i, true);

  // hide previous
  if (i - 1 >= 0) toggleBatch(i - 1, false);

  // hide next
  toggleBatch(i + 1, false);

  // JUST IN CASE IF ANY ERROR OCCURS
  // hide everything outside prev/current/next groups
  const keepStart = Math.max(0, (i - 1) * cardsPerScreen);
  const keepEnd = (i + 1) * cardsPerScreen + (cardsPerScreen - 1);
  cards.forEach((card, idx) => {
    if (idx < keepStart || idx > keepEnd) {
      card.classList.add("hideit");
      card.classList.remove("showit");
    }
  });
};

// scroll handler
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkHideOrShow();
      ticking = false;
    });
    ticking = true;
  }
}

// run once when its loaded 
window.addEventListener("load", () => {
  checkHideOrShow();
});

window.addEventListener("scroll", onScroll, { passive: true });

window.addEventListener("resize", () => checkHideOrShow());
