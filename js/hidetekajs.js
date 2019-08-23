
  
  // scroll menure hattervalt
  window.scroll({
   
    behavior: 'smooth'
  });
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    // if(document.body.scrollTop < 300){
    
    //   document.getElementById("container").style.transform="translate()"
    
    
    // }
      
    if (document.body.scrollTop > 300|| document.documentElement.scrollTop >300 ) {
      document.getElementById("headercolor").style.backgroundColor = "black";
      document.getElementById("headercolor").style.boxShadow="0px 9px 7px -5px rgba(0,0,0,0.75)"; 
      document.getElementById("headercolor2").style.backgroundColor = "black";
      document.getElementById("headercolor3").style.backgroundColor = "black";
    } else {  
      document.getElementById("headercolor").style.backgroundColor = "inherit";
      document.getElementById("headercolor").style.boxShadow="0px 9px 7px -5px rgba(0,0,0,0)"
      document.getElementById("headercolor2").style.backgroundColor = "inherit";
      document.getElementById("headercolor3").style.backgroundColor = "inherit";

    }
  }
  
  //Laapozo resz
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // kovetkezo/elozo
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // kepirany
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }
  
  // jobbrol lenyilo menu
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }









  //NAV
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  AOS.init({
    duration: 1200,
  })