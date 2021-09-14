function council(name_of_member){
    var modal = document.getElementById("council_myModal");
    
    
    var img = document.getElementById(name_of_member);
    var modalImg = document.getElementById("img_councilmem");
    var captionText = document.getElementById("caption");
    d(modal,modalImg,captionText,img);
    function d(modal,modalImg,captionText,img){
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    }
    
    }
    
    
    var span1 = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("council_myModal");
    
    span1.onclick = function() { 
      modal.style.display = "none";
    }