$(document).ready(function(){

  $("#main-container").css("display", "none");
  $("#main-container").fadeIn(800);
  $("a.transition").click(function(event){
	  event.preventDefault();
	  linkLocation = this.href;
	   $("#main-container").fadeOut(600, redirectPage);      
  });
  function redirectPage() {
  	window.location = linkLocation;
  }
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
  $(".nav-icon .hamburger").click(function(event){		
  		event.preventDefault();
  		if( $("#nav").hasClass("open") ){
  			$("#nav").removeClass("open");
  			$(".hamburger").removeClass("is-active");
  		}
  		else{
	  		$("#nav").addClass("open");
	  		$(".hamburger").addClass("is-active");
  		}	
  		$('html,body').animate({scrollTop:0}, 0);
  });
  
  $("a#copy-url").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset()}, 800);
    $("input#copyTarget").val($(location).attr('href'));
    copyToClipboard(document.getElementById("copyTarget"));
  });
  
  $("a#share-url").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset()}, 800);
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
  
  function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
	    var targetId = "_hiddenCopyText_";
	    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
	    var origSelectionStart, origSelectionEnd;
	    if (isInput) {
	        // can just use the original source element for the selection and copy
	        target = elem;
	        origSelectionStart = elem.selectionStart;
	        origSelectionEnd = elem.selectionEnd;
	    }
	    // select the content
	    var currentFocus = document.activeElement;
	    target.focus();
	    target.setSelectionRange(0, target.value.length);
	    
	    // copy the selection
	    var succeed;
	    try {
	    	  succeed = document.execCommand("copy");
	    } catch(e) {
	        succeed = false;
	    }
	    // restore original focus
	    if (currentFocus && typeof currentFocus.focus === "function") {
	        currentFocus.focus();
	    }
	    
	    if (isInput) {
	        // restore prior selection
	        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
	    } else {
	        // clear temporary content
	        target.textContent = "";
	    }
	    return succeed;
	}
  
});
