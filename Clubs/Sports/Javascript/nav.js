
window.onscroll = function() {

    scrollFunction();

};

document.addEventListener('click', function (event) {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('.click-me')) return;


}, false);
// for removing navbar on gallery click
document.addEventListener('click', function (event) {

  console.log(event.target.className);

  if ((event.target.className=="demo-gallery-poster") ||(event.target.className=="card-bg"))
  {
    
      document.getElementById("navbar").style.display="none";
      document.getElementById("logo").style.display="none";
  }
  if ((event.target.className=="lg-close lg-icon") || (event.target.className=="lg-img-wrap")||(event.target.Id=="close"))
  {
      document.getElementById("navbar").style.removeProperty( 'display' );
      document.getElementById("logo").style.removeProperty( 'display' );
  }


});


function scrollFunction() {

    
        if($(window).width() > 500)
        {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          document.getElementById("navbar").style.marginTop = "0px";
          
          document.getElementById("navbar").style.padding = "8px";
            
             
          document.getElementById("logo").style.width = "60px";
           
            document.getElementById("logo").style.height = "60px";
            
            // document.getElementById("iitgoalogotext").style.fontSize="35px";
            
            // document.getElementById("iitgoalogotext").style.top="5px";
            
          
        } else {
          // document.getElementById("navbar").style.marginTop = "30px";

            
                 document.getElementById("navbar").style.padding = "8px";

             document.getElementById("logo").style.width = "100px";
            document.getElementById("logo").style.height="100px"
            // document.getElementById("iitgoalogotext").style.fontSize="45px";
             document.getElementById("navbar").style.marginTop="30px";
            //  document.getElementById("iitgoalogotext").style.top="5px";
        }
      }
      else{
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          document.getElementById("navbar").style.marginTop = "0px";
          
          document.getElementById("navbar").style.padding = "8px";

            
             
          document.getElementById("logo").style.width = "60px";
           
            document.getElementById("logo").style.height = "60px";
            
            // document.getElementById("iitgoalogotext").style.fontSize="30px";
            
            // document.getElementById("iitgoalogotext").style.top="5px";
            
          
        } else {
          // document.getElementById("navbar").style.marginTop = "30px";

            
                 document.getElementById("navbar").style.padding = "8px";

             document.getElementById("logo").style.width = "100px";
            document.getElementById("logo").style.height="100px"
            // document.getElementById("iitgoalogotext").style.fontSize="30px";
             document.getElementById("navbar").style.marginTop="30px";
            //  document.getElementById("iitgoalogotext").style.top="5px";
        }


      }
  
          
}   
              
          
          
      