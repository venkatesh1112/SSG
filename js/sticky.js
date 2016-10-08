$(document).ready(function() {

var stickyNavTop = $('.stickydiv').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.stickydiv').addClass('sticky');
} else {
    $('.stickydiv').removeClass('sticky'); 
}
};
 
																							
$(window).scroll(function() {
  stickyNav();
});
});