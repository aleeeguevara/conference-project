
goToPlace = selector =>{
   $(selector).click(function(event){
       event.preventDefault();
       const target= $(this).attr('href');
       
       $('html, body').animate({
           scrollTop: $(target).offset().top
       }, 500);    
   })    
};   

goToPlace("a[href*=panel-about]");
goToPlace("a[href*=panel-speakers]");
goToPlace("a[href*=btn-sign]");


