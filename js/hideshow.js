var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.head').outerHeight();
	$(document).ready(function(){
		navbarHeight = $('.head').outerHeight();
		$(window).scroll(function(event){
		didScroll = true;
		hasScrolled();
	});
	function hasScrolled() {
	var st = $(this).scrollTop();
	console.log(Math.abs(lastScrollTop - st) <= delta);
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.head').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.head').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
	}
	});