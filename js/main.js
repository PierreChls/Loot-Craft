$(document).ready(function(){
  $("#main-container").css("visibility", "visible");	
  $("#main-container").css("opacity", 0);
  $("#nav-bottom p").css("opacity", 0);
  $("#main-container").fadeTo(800, 1);
  $("#nav-bottom p").fadeTo(800, 1);
  
  $("a.transition").click(function(event){
	  event.preventDefault();
	  linkLocation = this.href;
	  $("#nav.open .nav-home").fadeTo(300, 0);
	  $("#nav.open .nav-menu").fadeTo(300, 0);
	  $("#nav.open .nav-footer").fadeTo(300, 0);
	  $("#nav-bottom p").fadeTo(300, 0);
	  $("#main-container").fadeTo(300, 0, function(){
	  	redirectPage();
	  });    
  });
 
  
  function redirectPage() {
  	location.href = document.referrer;
  	window.location = linkLocation;
  }
  
  
  $(window).unload(function(){
	 $(window).unbind('unload'); 
  });
  
  $(window).bind('pageshow', function(e){
	 if(e.originalEvent.persisted){
		 window.location.reload();
	 } 
  });
  
  menu_responsive();
   
  
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
    $("input#copyTarget").focusout();
    $("input#copyTarget").trigger('focusout');
  });
  
  $("a#share-url").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset()}, 800);
  });
  
  
  $("img").mouseover(function() {
  	$( this ).prop('title', '');
  })
  
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
