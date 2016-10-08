$(document).ready(function(){
	$(".clickme").click(function() {
		$('html, body').animate({scrollTop: $("body").offset().top}, 2000);
	});
});