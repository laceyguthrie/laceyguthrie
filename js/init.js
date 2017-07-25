$(document).ready(function(){

	// Smooth Scrolling

	function scrollNav() {
	  $('.scroll a').click(function(){  
	    //Animate
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	  });
	  $('.top').click(function(){
	  	$('html, body').animate({
	  		scrollTop: 0
	  	}, 500);
	    return false;
	  });
	}
	scrollNav();

	// Menu Button Toggle

	$('#menu-button').click(function() {
	    $('aside').fadeToggle();
	    $(this).toggleClass('open');
	});

	// Mobile Menu Fade

	function menuFade() {
		$('nav a').click(function() {
			if ($(window).width() < 980) {
				$('aside').fadeOut();
				$('#menu-button').removeClass('open');
			}
		});
		if ($(window).width() > 980) {
			$('aside').fadeIn();
		} else {
			$('aside').hide();
			$('aside a').removeClass('active');
		}
	}

	menuFade();

	$(window).resize(function(){
		menuFade();
	});

	$(window).on('scroll', function () {

		var cur_pos = $(this).scrollTop();

		// Nav active states for single-page scrolling sites
 
		$('section').each(function() {
			var top = $(this).offset().top - 80,
			    bottom = top + $(this).outerHeight();

			if ($(window).width() > 980) {

				if (cur_pos >= top && cur_pos <= bottom) {
				  $('nav').find('a').removeClass('active');
				  $('section').removeClass('active');
				  $('nav').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
				}
			}

		});

	});

});


