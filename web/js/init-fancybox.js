$(document).ready(function(){
	$(".fancybox").fancybox({
		openEffect: "none",
		closeEffect: "none",
		helpers : { 
			title : { type : 'inside' }
		}, // helpers
		beforeLoad: function() {
			this.title = $(this.element).attr('caption');
		}
		});
});