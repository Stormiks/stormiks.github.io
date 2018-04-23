$(window).scroll(function () {
	var bar, buttonUp;
	bar = $('.sidebar-nav');
	buttonUp = $('.buttonUp');

	if ($(this).scrollTop() > 100) {
		bar.fadeOut(500);
		if ($(this).scrollTop() > 200) {
			buttonUp.fadeIn(1200);
		}
	}
	if ($(this).scrollTop() < 100) {
		bar.fadeIn(1000);
		if ($(this).scrollTop() < 200)
			buttonUp.fadeOut(200);
	}
});

$(function() {
    $('.buttonUp').click(function(){
       $('html, body').animate({scrollTop: 0}, 1500);
   });
});

$(document).ready(function(){
	$(".buttonUp").hover(function() {
		$(this).stop().animate({ backgroundColor: "#5D8AE2", opacity: 1 }, 500);
		},function() {
		$(this).stop().animate({ backgroundColor: "#C0DBE7", opacity: 0.4 }, 400);
	});
});
