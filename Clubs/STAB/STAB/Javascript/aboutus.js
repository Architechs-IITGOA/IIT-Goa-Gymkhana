
var navicon = document.getElementById('navicon');
var cheading = document.getElementById('cheading');
var cdetails = document.getElementById('cdetails');
var cheadname = document.getElementById('cheadname');
var cheaddetail = document.getElementById('cheaddetail');
var cimage1 = document.getElementById('cimage1');
var cimage2 = document.getElementById('cimage2');
var cimage3 = document.getElementById('cimage3');
var cimage4 = document.getElementById('cimage4');
var cimage5 = document.getElementById('cimage5');
var headpic = document.getElementById('headpic');
var individual_common = document.getElementById('individual-common');

function commonbackFunction() {
    navicon.style.display = 'block';
    setTimeout(function() {
        individual_common.style.marginLeft = '100vw';
    }, 0);
}

function commonclubfunction(x) {
    navicon.style.display = 'none';
    setTimeout(function() {
        individual_common.style.marginLeft = '0vw';
    }, 0);
    console.log('comminghere', x);
    if (x == 'architechs') {
        cheading.innerHTML = 'ArchiTechs';
        cdetails.innerHTML =
            '‘Archi-‘, taken from Architect represents the designing aspect and ‘-Techs’, taken from Technology represents \
             the programming aspect. Basically, the group indulges in app and web development, which is bifurcated into \
             designing and programming.The members of the Design team are the creative brains of the group, who lay down \
             the basis for the programming to work on. ArchiTechs team ensures the practicality and is responsible \
             for making the apps and sites operational for users.';
        cheadname.innerHTML = 'ArchiTechs-Head';
        cheaddetail.innerHTML = 'Utsav Shah';
        cimage1.src = './images/clubs/archi/1.jpg';
        cimage2.src = './images/clubs/archi/2.jpg';
        cimage3.src = './images/clubs/archi/3.jpg';
        cimage4.src = './images/clubs/archi/4.jpg';
        cimage5.src = './images/clubs/archi/5.jpg';
        headpic.src = './images/clubhead/Utsav_Shah_club_head_ArchiTechs.jpg'
    } else if (x == 'er') {
        cheading.innerHTML = 'E & R';
        cdetails.innerHTML =
            'The Electronics and Robotics club of IIT Goa provides students with a platform to interested students in pursuing electronic and mechanical design aspects.Several workshops, events and competitions based on\
        Arduino, IOT, etc have been organised in the past and the club continues to be one of the most active clubs\
        under student technical Activities Body.The club caters to every individual with or without experience and\
        helps students gain the required knowledge and experience.';
        cheadname.innerHTML = 'E & R-Head';
        cheaddetail.innerHTML = 'Roshan Sharma';
        cimage1.src = './images/clubs/er/er1.jpg';
        cimage2.src = './images/clubs/er/er2.jpg';
        cimage3.src = './images/clubs/er/er3.jpg';
        cimage4.src = './images/clubs/er/er4.jpg';
        cimage5.src = './images/clubs/er/er5.jpg';
        headpic.src = './images/clubhead/Roshan_Sharma_EnR_club_head.jpg'
    } else if (x == 'gomyno') {
        cheading.innerHTML = 'GOMYNO';
        cdetails.innerHTML =
            'As a part of Student Technical Activities Body, Go Myno, the coding club of IIT Goa has always encouraged \
             students to join the coding community. Along with various events and workshops held regularly, many  \
             hackathons and coding competitions like Game of Codes, etc are organised by the club. The aim of the club \
              is to build a strong coding culture among the passionate students of the institute so that they can get \
              assistance and enhance their coding ability.';
        cheadname.innerHTML = 'GoMyno-Head';
        cheaddetail.innerHTML = 'Karmanya Gupta';
        cimage1.src = './images/clubs/gomyno/gomynoa.jpg';
        cimage2.src = './images/clubs/gomyno/gomynob.jpg';
        cimage3.src = './images/clubs/gomyno/gomynoc.jpg';
        cimage4.src = './images/clubs/gomyno/gomynod.jpg';
        cimage5.src = './images/clubs/gomyno/gomynoe.jpg';
        headpic.src = './images/clubhead/Karmanya_Gupta_GoMyno_Head.jpg'
    } else if (x == 'googledsc') {
        cheading.innerHTML = 'GOOGLE DSC';
        cdetails.innerHTML =
            'DSC IIT Goa powered by Google Developers is a programming club based in IIT Goa. It is a globally recognized student body which helps \
            students to have the opportunity to not only learn development skills, but it also acts as a medium to \
            apply them to real life problems by finding solutions, and then showcasing their work within their \
            communities.By developing solutions, the talented students can now help the local community and have a \
            hands-on experience for building real world applications.';
        cheadname.innerHTML = 'DSC-Head';
        cheaddetail.innerHTML = 'Jatin Reddy';
        cimage1.src = './images/clubs/dsc/dsc8.jpg';
        cimage2.src = './images/clubs/dsc/dsc6.jpg';
        cimage3.src = './images/clubs/dsc/dsc3.jpg';
        cimage4.src = './images/clubs/dsc/dsc7.jpg';
        cimage5.src = './images/clubs/dsc/dsc5.jpg';
        headpic.src = './images/clubhead/Jatin_Reddy_GDSC_club_head.jpg';
    } else if (x == 'infosec') {
        cheading.innerHTML = 'INFOSEC';
        cdetails.innerHTML =
            'Infosec IIT Goa consists of students enthusiastic about the domain of Cyber Security. There are currently 103 members\
             in the club. The members have been reporting vulnerabilities in various websites. It also regularly participates in\
              Capture The Flag Competitions. The team is actively involved in educating the students about the Cyber Security domain\
               and assists them in the learning process. It has been the organizing partner for the HCL Cyber Security Hackathon 2020\
                conducted IIT Kanpur.';
        cheadname.innerHTML = 'InfoSec-Head';
        cheaddetail.innerHTML = 'Maanas Bhaya';
        cimage1.src = './images/clubs/infosec/infosec1.jpg';
        cimage2.src = './images/clubs/infosec/infosec2.jpg';
        cimage3.src = './images/clubs/infosec/infosec3.jpg';
        cimage4.src = './images/clubs/infosec/infosec4.jpg';
        cimage5.src = './images/clubs/infosec/infosec5.jpg';
        headpic.src = './images/clubhead/Maanas_Bhaya_infosec_club_head.jpg'
    } else if (x == 'mdash') {
        cheading.innerHTML = 'M-DASH';
        cdetails.innerHTML =
            'M-DASH club here at IIT Goa aims to generate interest and impart knowledge among students especially having \
             a mechanical engineering based background. Various workshops and events are held regularly to make the students \
            comfortable with various designing softwares like AutoCAD, Solidworks, etc.Things are taught from scratch to \
            freshmen and hence, everyone is welcome to join the club and gain knowledge and experience.';
        cheadname.innerHTML = 'M-Dash-Head';
        cheaddetail.innerHTML = 'Yash Khobragade';
        cimage1.src = './images/clubs/mdash/mdash1.JPG';
        cimage2.src = './images/clubs/mdash/mdash2.JPG';
        cimage3.src = './images/clubs/mdash/mdash3.JPG';
        cimage4.src = './images/clubs/mdash/mdash4.JPG';
        cimage5.src = './images/clubs/mdash/mdash5.JPG';
        headpic.src = './images/clubhead/Yash_Khobragade_Mdash_club_head.jpg';
    }
    else if (x=='alpha'){
        cheading.innerHTML = 'ALPHA';
        cdetails.innerHTML =
            'Official Finanace Club of IIT Goa, student driven body which aims at increasing the awareness of Finance and Economics among IIT Goa\
            community by conducting various workshops, sessions and competitions along wth encouraging students to see Finance as a \
            viable carrer option leveraging their technical Skills. Our activities and projects are aimed at demonstrating the \
            application of technology in Finance.';
        cheadname.innerHTML = 'Alpha Head';
        cheaddetail.innerHTML = 'Jash Gaglani';
        cimage1.src = '';
        cimage2.src = '';
        cimage3.src = '';
        cimage4.src = '';
        cimage5.src = '';
        headpic.src = './images/clubhead/Jash_Gaglani_Alpha_club_head.jpg';
    }
    else if (x=='MotorSports'){
        cheading.innerHTML = 'MotorSports';
        cdetails.innerHTML =
            'IIT Goa Motorsports is the Official Formula Student team of IIT Goa which develops prototype race cars and represent the Institute\
            at national and international engineering design competitions like Formula Bharat, Formula Student Electric Vehicle (FSEV), \
            FMEA-FKDC, GO Kart challenge, etc. The team gives you a platform to build exciting racing cars like formula one, go-karts, \
            off-road vehicles, etc, and make a business plan for the cars built by the team. We aim to step towards Sustainable and carbon-neutral \
            energy-powered innovations.';
        cheadname.innerHTML = 'MotorSports Head';
        cheaddetail.innerHTML = 'Rahul Tilwani';
        cimage1.src = './images/clubs/motorsports/1.jpg';
        cimage2.src = './images/clubs/motorsports/6.jpg';
        cimage3.src = './images/clubs/motorsports/7.jpg';
        cimage4.src = './images/clubs/motorsports/4.jpg';
        cimage5.src = './images/clubs/motorsports/5.jpg';
        headpic.src = './images/clubhead/Rahul_Tilwani_Motorsports_club_head.jpg';
    }
}
$(document).ready(function() {
    $('.gallery-slider').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        // nextArrow: $('.next'),
        // prevArrow: $('.prev')
        arrows: true
    });
    $('.gallery-er').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        // nextArrow: $('.next'),
        // prevArrow: $('.prev')
        arrows: true
    });
});