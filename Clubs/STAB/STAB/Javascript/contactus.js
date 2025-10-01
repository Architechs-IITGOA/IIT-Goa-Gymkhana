const vh = window.innerHeight;

const checkHideOrShow = () => {
    let cards = document.querySelectorAll(".cards_members");
    let y = Math.floor(window.scrollY*2/ window.innerHeight);

    //  0 - 50 vh : card 1 to 3
    //  50 - 100 vh : card 1 to 6
    //  100 - 150 vh : card 1 to 9
    //  ... 
    
    let i = y;

    if(cards[3*i]){
        cards[3*i].classList.add("showit");
        cards[3*i].classList.remove("hideit");
    }
    if(cards[3*i+1]){
        cards[3*i+1].classList.add("showit");
        cards[3*i+1].classList.remove("hideit");
    }
    if(cards[3*i+2]){
        cards[3*i+2].classList.add("showit");
        cards[3*i+2].classList.remove("hideit");
    }
    i--;
    if(cards[3*i]){
        cards[3*i].classList.add("hideit");
        cards[3*i].classList.remove("showit");
    }
    if(cards[3*i+1]){
        cards[3*i+1].classList.add("hideit");
        cards[3*i+1].classList.remove("showit");
    }
    if(cards[3*i+2]){
        cards[3*i+2].classList.add("hideit");
        cards[3*i+2].classList.remove("showit");
    }
    i+=2;
    if(cards[3*i]){
        cards[3*i].classList.add("hideit");
        cards[3*i].classList.remove("showit");
    }
    if(cards[3*i+1]){
        cards[3*i+1].classList.add("hideit");
        cards[3*i+1].classList.remove("showit");
    }
    if(cards[3*i+2]){
        cards[3*i+2].classList.add("hideit");
        cards[3*i+2].classList.remove("showit");
    }
};

checkHideOrShow();
window.addEventListener("scroll", () => checkHideOrShow()); // check everytime whenever user scrolls