$(document).ready(function(){
  
  menu_responsive();
  
  $(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
   
  
  /* Scroll To */
  $(".scroll").click(function(event){		
  		event.preventDefault();
  		$('html,body').animate({scrollTop:$(this.hash).offset().top -50}, 800);
  });
  
  /* Open/close menu */
  $(".nav-icon").click(function(event){		
  		event.preventDefault();
  		if( $("#nav").hasClass("open") ){
  			$("#nav").removeClass("open");
  			$(".hamburger").removeClass("is-active");
  		}
  		else{
	  		$("#nav").addClass("open");
	  		$(".hamburger").addClass("is-active");
  		}	
  });
  
  
  $( window ).resize(function() {
  		menu_responsive();
  });
  
  
  function menu_responsive(){
	  if( $(window).width() > 992 || $(window).height() < 370 ){
		  $(".hamburger").removeClass("is-active");
		  $("#nav").removeClass("open");
	  }
  }
  
});
