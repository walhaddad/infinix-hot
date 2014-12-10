$(document).ready(function() {	
	$('#top-wrapper').waypoint('sticky');
	$('.popmenu-prompt').click(function(event) {
		/* Act on the event */
		$('.menu-overlay').fadeToggle();
		$('.popmenu-prompt').fadeOut('fast', function() {
			$('.close-popmenu-prompt').fadeIn();
		});
		
	});

	$('.close-popmenu-prompt').click(function(event) {
		/* Act on the event */
		$('.menu-overlay').fadeToggle();
		$('.close-popmenu-prompt').fadeOut('fast', function() {
			$('.popmenu-prompt').fadeIn();
		});
		
	});
});

$(window).load(function() {
	$(".preloader").fadeOut(2000);
});