$(document).ready(function(){

	// Smooth Scrolling

	function scrollNav() {
	  $('nav a').click(function(e){  
	  	e.preventDefault();
	    //Animate
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    $('aside').fadeOut();
	    $('#menu-button').removeClass('open');
	    return false;
	  });
	}
	scrollNav();

	// Menu Button Toggle

	$('#menu-button').click(function(e) {
		e.preventDefault();
	    $('aside').fadeToggle();
	    $(this).toggleClass('open');
	});

	// $(window).on('scroll', function () {
		
	// 	var headerHeight = $('.header-wrapper').outerHeight(),
	// 		header__bottom = $('.header-wrapper').offset().top + headerHeight;

	// 	if ($(window).scrollTop() > header__bottom) {
	// 	    $('.scrolled-header').addClass('visible');
	// 	} else {
	// 	    $('.scrolled-header').removeClass('visible');
	// 	    $('nav a').removeClass('active');
	// 	}

	// 	var cur_pos = $(this).scrollTop();
 
	// 	$('section').each(function() {
	// 		var top = $(this).offset().top - 150,
	// 		    bottom = top + $(this).outerHeight();

	// 		if ($(window).width() > 980) {

	// 			if (cur_pos >= top && cur_pos <= bottom) {
	// 			  $('nav').find('a').removeClass('active');
	// 			  $('section').removeClass('active');
	// 			  $('nav').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	// 			}
	// 		}

	// 	});

	// });

});


