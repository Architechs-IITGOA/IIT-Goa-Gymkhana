
let home = document.querySelector('#home');
let aboutus = document.querySelector('#aboutus');
let clubs = document.querySelector('#clubs');
let timeline = document.querySelector('#timeline');
let contactus = document.querySelector('#contactus');

const makeSectionVisible = (section)=>{
    let list = document.querySelectorAll('.section');
    list.forEach((elem)=>{
        elem.style.display = "none";
    });
    document.querySelector('#section' + section).style.display = "block";
    if(section == "2") {
        setTimeout(() => {
        timelineSwiper.update();
        timelineSwiper.slideTo(0, 0);
    }, 50);
    }
    localStorage.setItem('currentSection',section);
}

let current_Section = localStorage.getItem('currentSection');
if(current_Section){
    makeSectionVisible(current_Section);
} else {
    makeSectionVisible("0");
}


home.addEventListener("click", ()=>makeSectionVisible("0"));

clubs.addEventListener("click", ()=>makeSectionVisible("1"));

timeline.addEventListener("click",()=> makeSectionVisible("2"));

contactus.addEventListener("click",()=> makeSectionVisible("3"));

aboutus.addEventListener("click",()=>makeSectionVisible("4"));