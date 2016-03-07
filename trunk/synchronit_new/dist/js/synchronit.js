// onScreen jQuery plugin v0.2.1
// (c) 2011-2013 Ben Pickles
//
// http://benpickles.github.io/onScreen
//
// Released under MIT license.
(function(a){a.expr[":"].onScreen=function(b){var c=a(window),d=c.scrollTop(),e=c.height(),f=d+e,g=a(b),h=g.offset().top,i=g.height(),j=h+i;return h>=d&&h<f||j>d&&j<=f||i>e&&h<=d&&j>=f}})(jQuery);

/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
*/
(function($){$.fn.appear=function(f,o){var s=$.extend({one:true},o);return this.each(function(){var t=$(this);t.appeared=false;if(!f){t.trigger('appear',s.data);return;}var w=$(window);var c=function(){if(!t.is(':visible')){t.appeared=false;return;}var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;if(y+t.height()>=b&&y<=b+w.height()&&x+t.width()>=a&&x<=a+w.width()){if(!t.appeared)t.trigger('appear',s.data);}else{t.appeared=false;}};var m=function(){t.appeared=true;if(s.one){w.unbind('scroll',c);var i=$.inArray(c,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1);}f.apply(this,arguments);};if(s.one)t.one('appear',s.data,m);else t.bind('appear',s.data,m);w.scroll(c);$.fn.appear.checks.push(c);(c)();});};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var l=$.fn.appear.checks.length;if(l>0)while(l--)($.fn.appear.checks[l])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20);}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var u=$.fn[n];if(u){$.fn[n]=function(){var r=u.apply(this,arguments);$.fn.appear.run();return r;}}});})(jQuery);
/*
 * jQuery FlexSlider v1.8
 * http://flex.madebymufffin.com
 * Copyright 2011, Tyler Smith
 */
(function(a){a.flexslider=function(c,b){var d=c;d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);d.data("flexslider",true);d.container=a(".slides",d);d.slides=a(".slides > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;d.manualPause=false;d.vertical=(d.vars.slideDirection=="vertical");d.prop=(d.vertical)?"top":"marginLeft";d.args={};d.transitions="webkitTransition" in document.body.style;if(d.transitions){d.prop="-webkit-transform"}if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){if(d.transitions){d.setTransition(0)}d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.newSlides=a(".slides > li",d);var m=(-1*(d.currentSlide+d.cloneOffset));if(d.vertical){d.newSlides.css({display:"block",width:"100%","float":"left"});d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){d.css({position:"relative"}).height(d.slides.filter(":first").height());d.args[d.prop]=(d.transitions)?"translate3d(0,"+m*d.height()+"px,0)":m*d.height()+"px";d.container.css(d.args)},100)}else{d.args[d.prop]=(d.transitions)?"translate3d("+m*d.width()+"px,0,0)":m*d.width()+"px";d.container.width((d.count+d.cloneCount)*200+"%").css(d.args);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left",display:"block"})},100)}}else{d.transitions=false;d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var e=a('<ol class="flex-control-nav"></ol>');var s=1;for(var t=0;t<d.count;t++){e.append("<li><a>"+s+"</a></li>");s++}if(d.containerExists){a(d.controlsContainer).append(e);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(e);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){(d.controlNav.index(a(this))>d.currentSlide)?d.direction="next":d.direction="prev";d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var v=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(v);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(v);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){function h(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}}a(document).bind("keyup",h)}if(d.vars.mousewheel){d.mousewheelEvent=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";d.bind(d.mousewheelEvent,function(y){y.preventDefault();y=y?y:window.event;var i=y.detail?y.detail*-1:y.wheelDelta/40,j=(i<0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){if(!d.manualPause){d.resume()}})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var q=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(q);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(q);d.pausePlay=a(".flex-pauseplay span",d)}var n=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(n).text((n=="pause")?d.vars.pauseText:d.vars.playText);d.pausePlay.bind(d.eventType,function(i){i.preventDefault();if(a(this).hasClass("pause")){d.pause();d.manualPause=true}else{d.resume();d.manualPause=false}})}if("ontouchstart" in document.documentElement){var w,u,l,r,o,x,p=false;d.each(function(){if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",g,false)}});function g(i){if(d.animating){i.preventDefault()}else{if(i.touches.length==1){d.pause();r=(d.vertical)?d.height():d.width();x=Number(new Date());l=(d.vertical)?(d.currentSlide+d.cloneOffset)*d.height():(d.currentSlide+d.cloneOffset)*d.width();w=(d.vertical)?i.touches[0].pageY:i.touches[0].pageX;u=(d.vertical)?i.touches[0].pageX:i.touches[0].pageY;d.setTransition(0);this.addEventListener("touchmove",k,false);this.addEventListener("touchend",f,false)}}}function k(i){o=(d.vertical)?w-i.touches[0].pageY:w-i.touches[0].pageX;p=(d.vertical)?(Math.abs(o)<Math.abs(i.touches[0].pageX-u)):(Math.abs(o)<Math.abs(i.touches[0].pageY-u));if(!p){i.preventDefault();if(d.vars.animation=="slide"&&d.transitions){if(!d.vars.animationLoop){o=o/((d.currentSlide==0&&o<0||d.currentSlide==d.count-1&&o>0)?(Math.abs(o)/r+2):1)}d.args[d.prop]=(d.vertical)?"translate3d(0,"+(-l-o)+"px,0)":"translate3d("+(-l-o)+"px,0,0)";d.container.css(d.args)}}}function f(j){d.animating=false;if(d.animatingTo==d.currentSlide&&!p&&!(o==null)){var i=(o>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(i)&&Number(new Date())-x<550&&Math.abs(o)>20||Math.abs(o)>r/2){d.flexAnimate(i,d.vars.pauseOnAction)}else{d.flexAnimate(d.currentSlide,d.vars.pauseOnAction)}}this.removeEventListener("touchmove",k,false);this.removeEventListener("touchend",f,false);w=null;u=null;o=null;l=null}}if(d.vars.animation.toLowerCase()=="slide"){a(window).resize(function(){if(!d.animating){if(d.vertical){d.height(d.slides.filter(":first").height());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.slides.filter(":first").height()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{d.newSlides.width(d.width());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}})}d.vars.start(d)};d.flexAnimate=function(g,f){if(!d.animating){d.animating=true;d.animatingTo=g;d.vars.before(d);if(f){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(g).addClass("active")}d.atEnd=(g==0||g==d.count-1)?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(g==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(g==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}}if(!d.vars.animationLoop&&g==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){var e=(d.vertical)?d.slides.filter(":first").height():d.slides.filter(":first").width();if(d.currentSlide==0&&g==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&g==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=(-1*(d.count+1))*e+"px"}else{d.slideString=(-1*(g+d.cloneOffset))*e+"px"}}d.args[d.prop]=d.slideString;if(d.transitions){d.setTransition(d.vars.animationDuration);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.slideString+",0)":"translate3d("+d.slideString+",0,0)";d.container.css(d.args).one("webkitTransitionEnd transitionend",function(){d.wrapup(e)})}else{d.container.animate(d.args,d.vars.animationDuration,function(){d.wrapup(e)})}}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(g).fadeIn(d.vars.animationDuration,function(){d.wrapup()})}}};d.wrapup=function(e){if(d.vars.animation=="slide"){if(d.currentSlide==0&&d.animatingTo==d.count-1&&d.vars.animationLoop){d.args[d.prop]=(-1*d.count)*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{if(d.currentSlide==d.count-1&&d.animatingTo==0&&d.vars.animationLoop){d.args[d.prop]=-1*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}}d.animating=false;d.currentSlide=d.animatingTo;d.vars.after(d)};d.animateSlides=function(){if(!d.animating){d.flexAnimate(d.getTarget("next"))}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.setTransition=function(e){d.container.css({"-webkit-transition-duration":(e/1000)+"s"})};d.init()};a.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,mousewheel:false,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides li").length==1){a(this).find(".slides li").fadeIn(400)}else{if(a(this).data("flexslider")!=true){new a.flexslider(a(this),b)}}})}})(jQuery);
/**
 * $.disablescroll
 * Author: Josh Harrison - aloof.co
 *
 * Disables scroll events from mousewheels, touchmoves and keypresses.
 * Use while jQuery is animating the scroll position for a guaranteed super-smooth ride!
 */
 (function(e){"use strict";function r(t,n){this.opts=e.extend({handleWheel:!0,handleScrollbar:!0,handleKeys:!0,scrollEventKeys:[32,33,34,35,36,37,38,39,40]},n);this.$container=t;this.$document=e(document);this.lockToScrollPos=[0,0];this.disable()}var t,n;n=r.prototype;n.disable=function(){var e=this;e.opts.handleWheel&&e.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",e._handleWheel);if(e.opts.handleScrollbar){e.lockToScrollPos=[e.$container.scrollLeft(),e.$container.scrollTop()];e.$container.on("scroll.disablescroll",function(){e._handleScrollbar.call(e)})}e.opts.handleKeys&&e.$document.on("keydown.disablescroll",function(t){e._handleKeydown.call(e,t)})};n.undo=function(){var e=this;e.$container.off(".disablescroll");e.opts.handleKeys&&e.$document.off(".disablescroll")};n._handleWheel=function(e){e.preventDefault()};n._handleScrollbar=function(){this.$container.scrollLeft(this.lockToScrollPos[0]);this.$container.scrollTop(this.lockToScrollPos[1])};n._handleKeydown=function(e){for(var t=0;t<this.opts.scrollEventKeys.length;t++)if(e.keyCode===this.opts.scrollEventKeys[t]){e.preventDefault();return}};e.fn.disablescroll=function(e){!t&&(typeof e=="object"||!e)&&(t=new r(this,e));t&&typeof e=="undefined"?t.disable():t&&t[e]&&t[e].call(t)};window.UserScrollDisabler=r})(jQuery);

(function($) {
	$.widget("synchronit.dialog", {

		options : {
			style : {
				width : '60%',
				top : '20%',
				position : 'fixed',
				left : '20%',
				zIndex : 101
			},
			fadeInTime : 500,
			fadeOutTime : 500,
			easeIn : 'easeOutCubic',
			easeOut : 'easeOutCubic',
			backdrop : true,
			backdropOpacity : 0.7,
			dialogClass : ""

		},
		open : function() {
			var $elem = this.element;
			var $dialogContainer = $elem.parents('.dialog:eq(0)');
			$dialogContainer.css(this.options.style);
			$dialogContainer.css('opacity', 0);
			$dialogContainer.css('display', 'block');

			$dialogContainer.animate({
				opacity : 1.0
			}, this.options.fadeInTime, this.options.easeIn);
			this._showBackdrop(this.options.style.zIndex);
			if (this.options.scrollToPosition) {
				$('body, html').animate({
					scrollTop : Math.max(0, this.options.top - 30)
				}, 'slow');
			}

		},
		_getDialogZIndex : function() {
			var maxZIndex = this.options.style.zIndex;

			maxZIndex += 5;
			return maxZIndex;
		},
		_showBackdrop : function(dialogZIndex) {
			if (this.options.backdrop) {
				var $backdrop = $("#dialog-shadow");
				if (!$backdrop.is(':visible')) {
					var backdropZIndex = dialogZIndex - 1;
					var backdropOpactiy = this.options.backdropOpacity;

					$backdrop.css('opacity', 0);
					$backdrop.css('display', 'block');
					$backdrop.css('zIndex', backdropZIndex);

					$backdrop.animate({
						opacity : backdropOpactiy
					}, this.options.fadeInTime, this.options.easeIn);

				}
			}
		},

		close : function() {
			if (this.options.beforeClose && !this.options.beforeClose()) {
				return;
			}
			var $elem = this.element;

			var $dialogContainer = $elem.parents('.dialog:eq(0)');
			var $backdrop = $("#dialog-shadow");
			$backdrop.animate({
				opacity : 0.0
			}, this.options.fadeOutTime, this.options.easeOut);
			var onClose = this.options.onClose;
			var destroyOnClose = this.options.destroyOnClose;
			$dialogContainer.animate({
				opacity : 0.0
			}, this.options.fadeOutTime, this.options.easeOut, function() {
				$dialogContainer.css('display', 'none');
				$backdrop.css('display', 'none');
				if (onClose) {
					onClose();
				}
				if (destroyOnClose) {
					$dialogContainer.remove();
					$backdrop.remove();
				}
			});

		},
		isOpen : function() {

		},
		_create : function() {
			var $elem = this.element;

			if (!$elem.parent() || $elem.parent().length === 0) {
				$("body").append($elem);
			}
			if ($elem.data('dialog-class')) {
				this.options.dialogClass = $elem.data('dialog-class');
			}
			$elem.wrap("<div class='dialog " + this.options.dialogClass
					+ "' />");

			var $container = $elem.parent();
			$elem.wrap('<div class="contentContainer dialog-content" />');
			$elem.append('<div class="dialog-close-button"><i class="glyphicons remove"></i></div>');
			var $close = $container.find(".dialog-close-button");
			
			var that = this;
			$close.off('click.dialog');
			$close.on('click.dialog', function() {
				that.close();
			});
			if ($(".dialog-shadow").length === 0) {
				$("body").append(
						"<div id='dialog-shadow' class='dialog-shadow' />");
			}
			// this.open();
		}
	});

})(jQuery);


$(function(){

	
		
	
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
		$recent_work_thumb = $('#recent-work .thumb'),
		$gallery_slider = $('.post_gallery_slider');

		function is_touch_device() {
		  return !!('ontouchstart' in window) // works on most browsers
			  || !!('onmsgesturechange' in window); // works on ie10
		};
		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod|Macintosh)/g) ? true : false );

		if( $(window).width() > 680 && !is_touch_device() && !iOS){
		/*	$("html").niceScroll({
				zindex: 9999,
				cursoropacitymin: 0.3,
				cursorwidth: 7,
				cursorborder: 0,
				mousescrollstep: 40,
				scrollspeed: 100,
				horizrailenabled: false
			});*/
		}

	// TO TOP BUTTON
	$('#fr_to_top').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});

	/*
	$main_menu.superfish({
			delay:       300,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			autoArrows:  true,                           // disable generation oission to deliver the best possible VR experience, we’re looking for insight into the hardware developers are using with DK1 and DK2.  Your answers to this short survey will help us improve the Rift and the Oculus SDK.
 			dropShadows: false                            // disable drop shadows
		});
	*/

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
			var p = [ "#header_featured","#services","#recent-work","#team","#about","#fr_contact","#fr_contact_form"];
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
	
	var $window=$(window);

$window.disablescroll({
	handleScrollbar: false
});
$window.disablescroll('undo');
 var latestScrollEvt=0;
	// MENU SETTINGS
   /*
   $("#main-menu").find("a").add("#fr_converse .fr_simple_btn").click( function(){
	   $.data(window, 'processing', true);
	 		if(latestScrollEvt>0){
				clearTimeout(latestScrollEvt);
			}

			$window.disablescroll('disable');


	   var elem = $(this).attr("href");
	   $('html, body').stop().animate(
		   {scrollTop: $(elem).offset().top},
		   {duration: 1000,
		    done: function(e){
		    	$.data(window, 'processing', false);
			   	setTimeout(function(){
						$window.disablescroll("undo");
						latestScrollEvt=0
					},300);
				}
		   });


	   });
*/

   	// DOWN ARROW SETTINGS
   $(".fixed_down").find("a").add("#fr_converse .fr_simple_btn").click(function(e){
		var elem = $(this).attr("href");
		$('html, body').animate({ scrollTop: $(elem).offset().top }, 1000);
    });



   $('.value_anchor').mouseenter(function(){

		$('#values_big_text').css('display', 'block');
		var p = $('.value_anchor > img');
		for (var i = 0, len = p.length; i < len; i++) {
			    $(p[i]).css('max-width', '50%');
			}
		$($(this).find('img')[0]).css('max-width', '100%');


		var type = $($(this).find('img')[0]).attr('alt');
		$('#values_big_text').hide();
		$('.value_description').css('display', 'none');
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
		myLatlng = new google.maps.LatLng(47.2159772,8.5714568);
		google.maps.event.trigger(mapSwiss, 'resize');
		mapSwiss.setCenter(myLatlng);

		myLatlng = new google.maps.LatLng(-34.9073784,-56.198578);
		google.maps.event.trigger(mapUy, 'resize');
		mapUy.setCenter(myLatlng);

	});


});

$(window).load(function(){ // after loading the DOM
    $("#ajax_contact_form").submit(function(){
			// this points to our form
			var str = $(this).serialize(); // Serialize the data for the POST-request
			$(this).html("<div class=\"notification_ok\"><h2>Message was sent, thank you!</h2></div>");// If a message is sent, the user thanks
			$.ajax({
				type: "POST",
				url: "contact.php",
				data: str,
				success: function (msg){
					$("#note").ajaxComplete(function (event, request, settings) {
						if (msg == 'OK'){
							result = "<div class=\"notification_ok\">Message was sent, thank you!</div>";
							$("#fields-main").hide();
						}
						else {
							result = msg;
						}
					});
				}
			});
			return false;
		});
});

//Google Map	
	var mapSwiss;
	var mapUy;
	var styles = [
			{
			  stylers: [
				{ hue: "#533f1b" },
				{ saturation: -80 },
				{ lightness: -20 }
			  ]
			},{
			  featureType: "road.arterial",
			  elementType: "geometry",
			  stylers: [
				{ lightness: 100 },
				{ visibility: "simplified" }
			  ]
			},{
			  featureType: "road",
			  elementType: "labels",
			  stylers: [
				{ visibility: "off" }
			  ]
			}
		  ];
		  
		  
		function initialize() {
		     swissMap();
		     uruguayMap();
		     
		}
		
		function swissMap() {
		 // Create an array of styles.
		 

		  // Create a new StyledMapType object, passing it the array of styles,
		  // as well as the name to be displayed on the map type control.
		  var styledMap = new google.maps.StyledMapType(styles,
			{name: "Styled Map"});
			
			// Map Coordinates
			var myLatlng = new google.maps.LatLng(47.216012, 8.571446);
			var mapOptions = {
				zoom: 16,
				center: myLatlng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			mapSwiss = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			//Marker Coordinates
			 var marker = new google.maps.Marker({
			  position:  new google.maps.LatLng(47.216012, 8.571446),
			  map: mapSwiss
			});
			
			 mapSwiss.mapTypes.set('map_style', styledMap);
			 mapSwiss.setMapTypeId('map_style');

		}
		
	
		
		
		
		function uruguayMap() {
			  var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map III"});
				
				// Map Coordinates
				var myLatlng = new google.maps.LatLng(-34.907341, -56.198928);
				var mapOptions = {
					zoom: 16,
					center: myLatlng,
					scrollwheel: false,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				mapUy = new google.maps.Map(document.getElementById('map-canvas-uy'), mapOptions);
				
				//Marker Coordinates
				 var marker = new google.maps.Marker({
				  position:  new google.maps.LatLng(-34.907341, -56.198928),
				  map: mapUy
				});
				
				 mapUy.mapTypes.set('map_style', styledMap);
				 mapUy.setMapTypeId('map_style');
				 
			}
		
	
			
		google.maps.event.addDomListener(window, 'load', initialize);
		google.maps.event.addDomListener(window, 'resize', initialize);

$(function(){
	var $header_featured = $('#header_featured'),
		$flexnav = $('#header_featured .flex-direction-nav');
	
	$('#header_featured .slide').css({ 'width': $(window).width() , 'height': $(window).height() });
	
	$('#header_featured .fr_slide_image').each(function(i){
			$(this).css('backgroundImage', 'url('+$(this).find('img').attr('src')+')');
			$(this).find('img').remove();
		});
	
	/*if ( $header_featured.length ){
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
				
			},
			start: function(slider) {
				slider = slider;
			}
		};			
		slider_settings.pauseOnHover = true;
		
		$header_featured.flexslider( slider_settings );
	}*/
	$header_featured.flexslider({
		slideshow: false, 			// set true for autoplay
		//slideshowSpeed: 7000,		//uncommented for autoplay
	});
	$("#header_featured").find('#left-arrow').click( function(){
			$('#header_featured .flex-direction-nav').find('a.prev').trigger('click');
			return false;
		});
	
	$("#header_featured").find('#right-arrow').click( function(){
		$('#header_featured .flex-direction-nav').find('a.next').trigger('click');
		return false;
	});
		
});

$(document).ready(function() {
	var tooltipReady=function(origin, tooltip){
    	$(".see-more-value").click(function(e) {
    		e.preventDefault();
    		var id = $(this).data('valueId');
    		$("#" + id).dialog('open');
    		return false;
    	});
    };
	$('#you-me-we-icon').tooltipster({
		interactive:true,
		content: $('<p>The first pre-requisite for a successful project, is to build up a team.<br/> And this is not a one-time process. It is a permanent activity.</p>'
        		+"<a href='#' class='see-more-value' data-value-id='youmewe'>See more...</a>"),
        functionReady: tooltipReady
    });
	$('#liberte-icon').tooltipster({
		interactive:true,
		content: $('<p>At synchronit we believe,train and treat each fellow to be a complete professional and entrepreneur and we help as a team, in this personal and professional quest of continuous growth..</p>'
        		+"<a href='#' class='see-more-value' data-value-id='freedom'>See more...</a>"),
        functionReady: tooltipReady
    });
	$('#value-creation-icon').tooltipster({
		interactive:true,
		content: $('<p>We believe, that sharing your work with others for the creation of value means that you benefit from their work, as well as they benefit from yours.</p>'
        		+"<a href='#' class='see-more-value' data-value-id='value_creation'>See more...</a>"),
        functionReady: tooltipReady
    });
	$('#transparency-icon').tooltipster({
		interactive:true,
		content: $('<p>It helps and forces us to focus in the creation of real value at every single moment and not just to serve tribute to past glories.</p>'
        		+"<a href='#' class='see-more-value' data-value-id='transparency'>See more...</a>"),
        functionReady: tooltipReady
    });
	
	
});    
//<div id="freedom" class="value_description value_text_block" style="display: block;">
//<p>After more than 200 years of the French revolution that influenced so many democracies, the fundamental values that inspired it are still to be reaffirmed every day. Universal opportunity is a concept and a practice that we adhere to.</p>
//<p>At Synchronit, we have no managers or hierarchical positions in the traditional sense.</p>
//<p>We believe, each fellow to be a complete professional and entrepreneur and we help as a team, in this personal and professional quest of continuous growth.</p>
//<p>The reason is simple and (why not?) also selfish: the better each member is, the better it is for all. We learned that since living in caves and it is part of what makes us humans.</p>
//</div>
//<div id="value_creation" class="value_description value_text_block" style="display: block;">
//<p>We believe, that sharing your work with others for the creation of value means that you benefit from their work, as well as they benefit from yours.</p>
//<p>We believe, that sharing this value is not a mathematical equation and that "the whole is more than the sum of the parts".</p>
//<p>We believe, that proper value creation should enable a relaxed life for all members, whilst ensuring company's existence.</p>
//<p>We believe, that together with our customers the creation of value is such, that win-win situations are a natural consequence of sharing a bright future.</p>
//<p>We believe, that accounting permits an objective measurment of value creation</p>
//</div>
//<div id="transparency" class="value_description value_text_block" style="display: block;">
//<p>Transparency is one of the best solutions against corruption.</p>
//<p>And we do not mean just political or economic. We believe in value creation and fair compensation.</p>
//<p>This is not a romantic or utopic position. It helps and forces us to focus in the creation of real value at every single moment and not just to serve tribute to past glories.</p>
//<p>In practice, this means that at Synchronit there is no profit-taken nor dividends. Each person earns purely based on the contribution done to generate value.
//Modern companies are starting to think in this way, like Amazon for example.</p>
//</div>
/***
 * Initialize dialogs on ready.
 */
$(function(){
	$(".value_description").dialog();
	
});

$(function(){
  $(".team-member-dialog").dialog({
      dialogClass:'team-member-dialog-container'
  });
  $(".team-open-dialog-item").click(function(){
      $(this).parents("li:first").find('.team-member-dialog').dialog('open');
  });
});

//# sourceMappingURL=synchronit.js.map