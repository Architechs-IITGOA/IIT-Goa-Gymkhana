let vw = window.innerWidth;

const handleSliding = ()=>{
    let cards = document.querySelectorAll('.card-3d-wrapper');
    
    function sildeFromLeftToRight(card){
        card.style.left ='0vw';
        card.style.filter = `blur(0px)`;
        card.style.opacity = 1;
    }
    
    for(let i=0;i<cards.length;i++){
        setTimeout(()=>sildeFromLeftToRight(cards[i]), i*200);
        setTimeout(()=>temp[i].style.zIndex = cards.length-i, i*200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        handleSliding();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const section = document.querySelector("#section4");
  if (section) observer.observe(section);
});