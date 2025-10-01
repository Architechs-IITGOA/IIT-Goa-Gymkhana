let cards = document.querySelectorAll(".cards_members");
const vh = window.innerHeight;

const checkHideOrShow = () => {
    let y = Math.floor(window.scrollY / window.innerHeight);
    y = y % cards.length;

    for (let i = 0; i <= y; i++) {
        cards[i].classList.add("showit");
        cards[i].classList.remove("hideit");
    }
    for (let i = y + 1; i < cards.length; i++) {
        cards[i].classList.remove("showit");
        cards[i].classList.add("hideit");
    }
};

document.querySelector(".go-up-button").addEventListener("click", () =>
    window.scrollBy({
        top: -1 * vh,
        left: 0,
        behavior: "smooth",
    })
);

document.querySelector(".go-down-button").addEventListener("click", () =>
    window.scrollBy({
        top: vh,
        left: 0,
        behavior: "smooth",
    })
);

checkHideOrShow();
window.addEventListener("scroll", () => checkHideOrShow()); // check everytime whenever user scrolls