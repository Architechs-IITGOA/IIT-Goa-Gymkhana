
let home = document.querySelector('#home');
let aboutus = document.querySelector('#aboutus');
let timeline = document.querySelector('#timeline');
let contactus = document.querySelector('#contactus');

home.addEventListener("click", ()=>{
    let list = document.querySelectorAll('.section');
    list.forEach((elem)=>{
        elem.style.display = "none";
    });
    document.querySelector('#section0').style.display = "block";
});

aboutus.addEventListener("click", ()=>{
    let list = document.querySelectorAll('.section');
    list.forEach((elem)=>{
        elem.style.display = "none";
    });
    document.querySelector('#section1').style.display = "block";
});

timeline.addEventListener("click", ()=>{
    let list = document.querySelectorAll('.section');
    list.forEach((elem)=>{
        elem.style.display = "none";
    });
    document.querySelector('#section2').style.display = "block";
    setTimeout(() => {
        timelineSwiper.update();
        timelineSwiper.slideTo(0, 0);
    }, 50);
});

contactus.addEventListener("click", ()=>{
    let list = document.querySelectorAll('.section');
    list.forEach((elem)=>{
        elem.style.display = "none";
    });
    document.querySelector('#section3').style.display = "block";
});