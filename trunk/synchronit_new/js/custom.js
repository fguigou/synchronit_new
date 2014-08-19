(function($){

		jQuery.preloadImages = function () {
			if (typeof arguments[arguments.length - 1] == 'function') {
				var callback = arguments[arguments.length - 1];
			} else {
				var callback = false;
			}
			if (typeof arguments[0] == 'object') {
				var images = arguments[0];
				var n = images.length;
			} else {
				var images = arguments;
				var n = images.length - 1;
			}
			var not_loaded = n;
			for (var i = 0; i < n; i++) {
				jQuery(new Image()).attr('src', images[i]).load(function() {
					if (--not_loaded < 1 && typeof callback == 'function') {
						callback();
					}
				});
			}
		}

		var menu_flip_speed = 200,
		recent_work_opacity_speed = 400,
		featured_controllers_opacity_speed = 500,
		featured_bar_animation_speed = 500,
		featured_bar_animation_easing = 'easeOutExpo',
		$mobile_nav_button = $('#mobile_nav'),
		$main_menu = $('ul.nav'),
		$featured = $('#fr_showcase_slider'),
		$featured_controllers_container = $('#featured-controllers'),
		$featured_control_item = $featured_controllers_container.find('li'),
		container_width = $('#container').innerWidth(),
		$footer_widget = $('.footer-widget'),
		$cloned_nav,
		slider_settings,
		sd_slider_autospeed,
		slider,
		$recent_work_thumb = $('#our-team .thumb'),
		$gallery_slider = $('.post_gallery_slider');
		
		function is_touch_device() {
		  return !!('ontouchstart' in window) // works on most browsers 
			  || !!('onmsgesturechange' in window); // works on ie10
		};
		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod|Macintosh)/g) ? true : false );
		
		if( $(window).width() > 680 && !is_touch_device() && !iOS){
			$("html").niceScroll({
				zindex: 9999,
				cursoropacitymin: 0.3,
				cursorwidth: 7,
				cursorborder: 0,
				mousescrollstep: 40,
				scrollspeed: 100,
				horizrailenabled: false
			});
		}
		
	// TO TOP BUTTON
	$('#fr_to_top').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	
	$main_menu.superfish({ 
			delay:       300,                            // one second delay on mouseout 
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
			speed:       'fast',                          // faster animation speed 
			autoArrows:  true,                           // disable generation of arrow mark-up 
			dropShadows: false                            // disable drop shadows 
		});
		
		$main_menu.find('>li').hover( function(){
			$(this).addClass( 'fr_hover' );
			$(this).find(".sub-menu").slideDown();
		}, function(){
			$(this).removeClass( 'fr_hover' );
		});
		
		
		$('.js #main-menu').show();
	
	//MOBILE MENU
		$main_menu.clone().attr('id','mobile_menu').removeClass().appendTo( $mobile_nav_button );
		$cloned_nav = $mobile_nav_button.find('> ul');
		$cloned_nav.find('span.menu_slide').remove().end().find('span.main_text').removeClass();
		
		$mobile_nav_button.click( function(){
			if ( $(this).hasClass('closed') ){
				$(this).removeClass( 'closed' ).addClass( 'opened' );
				$cloned_nav.slideDown( 500 );
			} else {
				$(this).removeClass( 'opened' ).addClass( 'closed' );
				$cloned_nav.slideUp( 500 );
			}
			return false;
		} );
		
		$mobile_nav_button.find('a').click( function(event){
			event.stopPropagation();
		} );
		
		$('#mobile_menu li').hover(function(){
			$(this).find('.sub-menu').slideDown( 500 ).css({display: 'block', visibility: 'visible'});
		}, function () {
			$(this).find('.sub-menu').slideUp( 500 );
		});
		//MOBILE MENU
	
	// POST FORMAT GALLERY
	$gallery_slider.flexslider({
		slideshow: true,           
		slideshowSpeed: 7000,
		controlsContainer: ".slider_controls"
	});

     (function($) {
		$.fn.countTo = function(options) {
			// merge the default plugin settings with the custom options
			options = $.extend({}, $.fn.countTo.defaults, options || {});

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(options.speed / options.refreshInterval),
				increment = (options.to - options.from) / loops;

			return $(this).delay(1000).each(function() {
				var _this = this,
					loopCount = 0,
					value = options.from,
					interval = setInterval(updateTimer, options.refreshInterval);

				function updateTimer() {
					value += increment;
					loopCount++;
					$(_this).html(value.toFixed(options.decimals));

					if (typeof(options.onUpdate) == 'function') {
						options.onUpdate.call(_this, value);
					}

					if (loopCount >= loops) {
						clearInterval(interval);
						value = options.to;

						if (typeof(options.onComplete) == 'function') {
							options.onComplete.call(_this, value);
						}
					}
				}
			});
		};

		$.fn.countTo.defaults = {
			from: 0,  // the number the element should start at
			to: 100,  // the number the element should end at
			speed: 1000,  // how long it should take to count between the target numbers
			refreshInterval: 100,  // how often the element should be updated
			decimals: 0,  // the number of decimal places to show
			onUpdate: null,  // callback method for every time the element is updated,
			onComplete: null,  // callback method for when the element finishes updating
		};
	})(jQuery);
	
		//if( $('body').is('#about')){
			$('.home .fucts_counter').appear(function() {
				$('.fucts_counter').each(function(){
					dataperc = $(this).attr('data-perc'),
					$(this).find('.fucts_count').delay(6000).countTo({
					from: 0,
					to: dataperc,
					speed: 2000,
					refreshInterval: 100
				});
			 });
		});
			
	//}
	
		$('.home #main_header').css('height', $(window).height() );
		
		function OffScroll () {
			var winScrollTop = $(window).scrollTop();
			$(window).bind('scroll',function (e) {
			  $(window).scrollTop(winScrollTop);
			});
		}
		
		/*var chld = $('.servise_items').children();
		for(var i=1; i>$('.servise_items').children();i++){
			$chld[i].find('span').html('0'+i);
		}*/
		$('.servise_items').children().each(function(i, e){
			i++;
			$(this).find('span').html('0'+i+'/ ');
		});
	
		
		
		$recent_work_thumb.hover( function(){
			$(this).stop(true,true).animate( { 'opacity' : '.5' }, recent_work_opacity_speed );
		}, function(){
			$(this).stop(true,true).animate( { 'opacity' : '1' }, recent_work_opacity_speed );
		} );
		
		// HEADER PARALLAX SCROLL	
		function parallaxScroll(){
			var scrolled = $(window).scrollTop();
			$("#main_header").css({backgroundPosition: "0 "+(95+(scrolled*.4))+"%" });
			$(".fr_slide_image").css({backgroundPosition: "0 "+(95+(scrolled*.4))+"%" });
		}
		$(window).bind('scroll',function(e){
			parallaxScroll();
		});
		
		$("#down_arrow").click(function(){ updateArrow();});
		
		function updateArrow() {
			var scroll_position = $(document).scrollTop();
			var team_expanded = $("#fullPreview").css("display")
			var text = "";
			$("#down_arrow").attr("href", "#header_featured")
			var p = [ "#header_featured","#services","#our-team","#our-values","#about","#fr_contact","#fr_contact_form"];
			for (var i = 0, len = p.length; i < len; i++) {
			    if($( p[i]+':onScreen').length >0)
			    {
			      text = p[i+1];
			      i = i+1000;
			    }   
			}
			$("#down_arrow").attr("href", text);
			 
		}
		
		// SHOWCASE SLIDER SETTINGS
		
		if ( $featured.length ){
			slider_settings = {
				slideshow: false, 			// set true for autoplay
				//slideshowSpeed: 7000,		//uncommented for autoplay
				before: function(slider){
					var $this_control = $featured_control_item.eq(slider.animatingTo),
						width_to = '239px';
						
					if ( container_width === 748 ) {width_to = '186px';}
					
					if ( $('#featured_controls').length ){
						$('#featured_controls li').removeClass().eq(slider.animatingTo).addClass('active-slide');
						return;
					}
					
					$featured_control_item.removeClass('active-slide');
					
					if ( ! $this_control.find('.animated_bar').length ){ $this_control.append('<div class="animated_bar"></div>'); }
					$this_control.find('.animated_bar').css({ 'display' : 'block', 'width' : '7px', 'left' : '120px'}).stop(true,true).animate( { width : width_to, 'left' : 0 }, featured_bar_animation_speed, featured_bar_animation_easing, function(){
						$this_control.find('.animated_bar').hide()
						.end().find('.slide_hover').stop(true,true).animate( { 'opacity' : '0' }, featured_controllers_opacity_speed )
						.end().addClass('active-slide');
					} );
				},
				start: function(slider) {
					slider = slider;
				}
			};			
			slider_settings.pauseOnHover = true;
			
			$featured.flexslider( slider_settings );
		}
		
		// SHOWCASE SLIDER SETTINGS
		
		
		
		
	
	$(window).load( function(){
		var $flexnav = $('#fr_showcase_slider .flex-direction-nav'),
			$flexcontrol = $('#fr_showcase_slider .flex-control-nav');
		
		$("#fr_showcase_slider").find('#fr_case_left').click( function(){
			$flexnav.find('a.prev').trigger('click');
			return false;
		} );
		
		$("#fr_showcase_slider").find('#fr_case_right').click( function(){
			$flexnav.find('a.next').trigger('click');
			return false;
		} );
				
	});
	
	//’secret’ specifies the numerical keystrokes that make up the word “...mary”
	var secret = "19019019077658289"; 
	var input = "";
	var timer;
	//The following function sets a timer that checks for user input. You can change the variation in how long the user has to input by changing the number in ‘setTimeout.’ In this case, it’s set for 500 milliseconds or ½ second.
	$(document).keyup(function(e) {
	   input += e.which;    
	   clearTimeout(timer);
	   timer = setTimeout(function() { input = ""; }, 500);
	   check_input();
	});
	//Once the time is up, this function is run to see if the user’s input is the same as the secret code
	function check_input() {
	    if(input == secret) {
	        $('.fixed_mary').animate({bottom: "165px"}, 800).delay(300).animate({left: "87%"}, 500).delay(1800).animate({bottom: "-300px"}, 500);
	        $('.fixed_thumb').css("left","84%").delay(1800).animate({bottom: "30px"}, 300).delay(1300).animate({bottom: "-300px"}, 500);

	    }
	};
	 
	
	// MENU SETTINGS
   $("#main-menu").find("a").add("#fr_converse .fr_simple_btn").click( function(){
	   $.data(window, 'processing', true);
	   
	   var elem = $(this).attr("href");
	   $('html, body').animate(
		   {scrollTop: $(elem).offset().top}, 
		   {duration: 1000, 
		    complete: function(e){ 
		    	$.data(window, 'processing', false);
			   }
		   }); 
	 
	   
	   });
   
   
   	// DOWN ARROW SETTINGS
   $(".fixed_down").find("a").add("#fr_converse .fr_simple_btn").click(function(e){
		var elem = $(this).attr("href");
		$('html, body').animate({ scrollTop: $(elem).offset().top }, 1000);
    });
   
      	// DOWN ARROW SETTINGS
   $('.value_anchor > img').add("#fr_converse .fr_simple_btn").click(function(e){
		$('html, body').animate({ scrollTop: $('#our-values').offset().top }, 1000);
    });
   
 
   
   $('.value_anchor > img').click(function(){
		$('#values_big_text').css('display', 'block');
		$('#values_big_text').css('display', 'block');
		var p = $('.value_anchor > img');
		for (var i = 0, len = p.length; i < len; i++) {
			    $(p[i]).css('max-width', '50%');
			}
		$(this).css('max-width', '100%');
		
		
		var type = $(this).attr('alt');
		$('#values_big_text').hide();
		$('#'+type).css('display', 'block');
		$('#values_big_text').fadeIn('slow');
		
		
    });
   
   $("input[type='text']").on("click", function () {
	   $(this).select();
	});
   $("textarea").on("click", function () {
	   $(this).select();
	});
   


	$( ".fixed_down" ).mouseenter(function() {
		$(this).animate({left: "10px"}, 500);
	})
	.mouseleave(function() {
		$(this).animate({left: "-65px"}, 500);
	});
	
	$('.country_slides a').click(function(){
		var myLatlng = null;
		myLatlng = new google.maps.LatLng(47.21626,8.572229);				
		google.maps.event.trigger(mapSwiss, 'resize');
		mapSwiss.setCenter(myLatlng);
		
		myLatlng = new google.maps.LatLng(48.137647,11.534657);		
		google.maps.event.trigger(mapGer, 'resize');
		mapGer.setCenter(myLatlng);
		
		myLatlng = new google.maps.LatLng(-34.906953,-56.167823);		
		google.maps.event.trigger(mapUy, 'resize');
		mapUy.setCenter(myLatlng);
		
		myLatlng = new google.maps.LatLng(43.698713,7.268892);		
		google.maps.event.trigger(mapFra, 'resize');
		mapFra.setCenter(myLatlng);
	});
	
	$(document).on( "mousewheel DOMMouseScroll", function(e){
		if(!($.data(window, 'processing'))) return; 
		// avoiding scroll while auto scroll
	    e.preventDefault();
	    return false;
	});
         
})(jQuery);