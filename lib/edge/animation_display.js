setTimeout(function(){
	$(".flow-wrapper").fadeTo(800, 0, function(){
		$("#Stage").css("display", "none");
		$(".flow-wrapper").css("display", "none");
	});
	$("#nav .nav-menu ul li").fadeTo(800, 1);
	$("#nav-right .social").fadeTo(800, 1);
}, 6000);