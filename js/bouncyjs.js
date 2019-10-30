/*global $, jQuery, alert , console*/
$(function () {
	'use strict';
	
	$(window).on('scroll', function () {
		$('.addact').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - $('.navbar').innerHeight() - 5) {
				$('.navbar-nav .nav-item[data-link=".' + $(this).attr('id') + '"]').addClass('active').siblings().removeClass('active');
				
				
			}
		});
	});
	
	/*Start Go Up*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 800) {
			$('.up').fadeIn(1000);
		} else {
			$('.up').fadeOut(1000);
		}
	});
	$('.up').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	});
	/*End Go Up*/
	/*Start Navbar*/
	$('.mynav, .over').innerHeight($(window).height());
	$('.nav-link').on('click', function (e) {
		e.preventDefault();
	});
	var navH = $('.navbar').innerHeight();
	
	$('.maintext').innerHeight($(window).height() - navH - 100);
	
	$('.navbar-nav .nav-item').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('link') === '.home') {
			$('html').animate({
				scrollTop: 0
			}, 1000);
		}
		$('html').animate({
			scrollTop: $($(this).data('link')).offset().top - navH
		}, 1000);
	});
	
	$('.mainicon').on('click', function () {
		$('html').animate({
			scrollTop: $(window).height() - navH
		}, 1000);
	});
	$(window).on('scroll', function () {
		if ($('body, html').scrollTop() >= $(window).height() - navH) {
			$('.navbar').css({
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 999,
				width: '100%',
				backgroundColor: '#55efc4'
			});
			$('.navbar .navbar-brand span').css('color', '#FFF');
			
		} else {
			$('.navbar').css({
				position: 'relative',
				top: 0,
				left: 0,
				background: 'none'
			});
			$('.navbar .navbar-brand span').css('color', '#55efc4');
		}
	});
	/*End Navbar*/
	/*Start About Us*/
	$('.details .icons .icon').on('click', function () {
		$(this).addClass('active-icon').siblings().removeClass('active-icon');
	});
	$('.details .det-container').innerHeight($('.details .det-text').innerHeight());
	$('.details .icons .icon').on('click', function () {
		$("." + $(this).attr('id')).fadeIn(1500).siblings().hide();
	});
	/*End About Us*/
	/*Start Features*/
	$('.features .feat-imgs .img').on('click', function () {
		
		$('.features .feat-imgs .img').removeClass('col-4');
		$(this).siblings().addClass('col-3');
		$(this).addClass('active-feat col-6').siblings().removeClass('active-feat col-6');
		
		$(this).children('.over-img').fadeOut(1000).parent('.img').siblings().children('.over-img').fadeIn(500);
		
		
		
	});
	/*End Features*/
	/*Start Service*/
	
	$('.service-prog .progress-bar').each(function () {
		$(this).text($(this).attr('aria-valuenow') + '%');
		$(this).css({
			width: $(this).attr('aria-valuenow') + '%'
		});
	});

	/*End Service*/
	/*Start Portfolio*/
	$('.portfolio .port-over .icon ').on('click', function () {
		
		$(this).toggleClass('like');
	});
	
	$('.portfolio .img-list ul li').on('click', function () {
		$(this).addClass('active-img').siblings().removeClass('active-img');
		
		if ($(this).data('img') === '.all') {
			$('.portfolio .imgs').css({
				opacity: 1
			}).find('.port-over').css('display', 'block');
		} else {
			/*      parent siblings child image    */
			$('.portfolio .imgs').css('opacity', '.2').find('.port-over').css('display', 'none');
			$($(this).data('img')).css('opacity', '1').find('.port-over').css('display', 'block');
			
		}
		
	});
	
	
	/*End Portfolio*/
	/*Start The Team*/
	$('.team-prog .progress-bar').each(function () {
		$(this).text($(this).attr('aria-valuenow') + '%');
		$(this).css({
			width: $(this).attr('aria-valuenow') + '%'
		});
	});
	
	
	
	/*End The Team*/
	/*Start Price*/
	$('.price .myprice .card').on('mouseenter', function () {
		$(this).find('.card-over').slideUp(700);
	});
	$('.price .myprice .card').on('mouseleave', function () {
		$(this).find('.card-over').slideDown(700);
	});
	/*End Price*/
	
	$('input').on('focus', function () {
		$(this).attr('data-place', $(this).attr('placeholder'));
		$(this).attr('placeholder', '');
	});
	$('input').on('blur', function () {
		
		$(this).attr('placeholder', $(this).attr('data-place'));
	});
}); /*End Of Ready Function*/

/*Start Load*/
$(window).on('load', function () {
	'use strict';
	$('body').css('overflow', 'auto');
	$('.loading-overlay .spinner').fadeOut(2000, function () {
		$(this).parent().fadeOut(2000, function () {
			$(this).remove();
		});
	});
});
/*End Load*/











