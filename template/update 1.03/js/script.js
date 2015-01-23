/* ----------------- Start JS Document ----------------- */


//---- Page Loader
jQuery(window).load(function(){
	jQuery('#loader').delay(200).fadeOut("slow");
});



//---- Main Scripts
jQuery(document).ready(function($) {
	'use strict';
	
	
	//---- Nice-Scroll
	(function() {
	
		jQuery("html").niceScroll({
			scrollspeed: 70,
			mousescrollstep: 38,
			cursorwidth: 8,
			cursorborder: 0,
			cursorcolor: '#333',
			autohidemode: false,
			zindex: 999999999,
			horizrailenabled: false,
			cursorborderradius: 0,
		});
		
	})();
	
	
	
	//---- Nav Menu & Search
	(function() {
	
		jQuery(".nav > li:has(ul)").addClass("drop");
		jQuery(".nav > li.drop > ul").addClass("dropdown");
		jQuery(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
		
		jQuery('.show-search').click(function() {
			jQuery('.search-form').fadeIn(300);
			jQuery('.search-form input').focus();
		});
		jQuery('.search-form input').blur(function() {
			jQuery('.search-form').fadeOut(300);
		});
		
	})();
	
	
	
	//---- Back Top Link
	(function() {
	
		var offset = 200;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(400);
			} else {
				jQuery('.back-to-top').fadeOut(400);
			}
		});
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, 600);
			return false;
		})
		
	})();
	
	
	
	//---- Projects Carousel
	(function() {
		
		jQuery(".projects-carousel").owlCarousel({
			navigation : true,
			pagination: false,
			slideSpeed : 400,
			stopOnHover: true,
			autoPlay: 3000,
			items : 4,
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,2],
			itemsMobile : [479, 1]
		});
		
	})();
	
	
	
	//---- Testimonials Carousel
	(function() {
		
		jQuery(".testimonials-carousel").owlCarousel({
			navigation : true,
			pagination: false,
			slideSpeed : 2500,
			stopOnHover: true,
			autoPlay: 3000,
			singleItem:true,
			autoHeight : true,
			transitionStyle : "fade"
		});
		
	})();
	
	
	
	//---- Custom Carousel
	(function() {
		
		jQuery('.custom-carousel').each(function(){
			var owl = jQuery(this),
				itemsNum = jQuery(this).attr('data-appeared-items'),
				sliderNavigation = jQuery(this).attr('data-navigation');
				
			if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
				var returnSliderNavigation = false
			}else {
				var returnSliderNavigation = true
			}
			if( itemsNum == 1) {
				var deskitemsNum = 1;
				var desksmallitemsNum = 1;
				var tabletitemsNum = 1;
			} 
			else if (itemsNum >= 2 && itemsNum < 4) {
				var deskitemsNum = itemsNum;
				var desksmallitemsNum = itemsNum - 1;
				var tabletitemsNum = itemsNum - 1;
			} 
			else if (itemsNum >= 4 && itemsNum < 8) {
				var deskitemsNum = itemsNum -1;
				var desksmallitemsNum = itemsNum - 2;
				var tabletitemsNum = itemsNum - 3;
			} 
			else {
				var deskitemsNum = itemsNum -3;
				var desksmallitemsNum = itemsNum - 6;
				var tabletitemsNum = itemsNum - 8;
			}
			owl.owlCarousel({
				slideSpeed : 300,
				stopOnHover: true,
				autoPlay: 3000,
				navigation : returnSliderNavigation,
				pagination: false,
				lazyLoad : true,
				items : itemsNum,
				itemsDesktop : [1000,deskitemsNum],
				itemsDesktopSmall : [900,desksmallitemsNum],
				itemsTablet: [600,tabletitemsNum],
				itemsMobile : false,
				transitionStyle : "goDown",
			});
		});
		
	})();
	
	
	
	//---- Tabs
	(function() {
	
		jQuery('#myTab a').click(function (e) {
			e.preventDefault()
			jQuery(this).tab('show')
		})
		
	})();
	
	
	
	//---- CSS3 Animations
	(function() {
		
		jQuery('*').each(function(){
			if(jQuery(this).attr('data-animation')) {
				var $animationName = jQuery(this).attr('data-animation'),
					$animationDelay = "delay-"+jQuery(this).attr('data-animation-delay');
				jQuery(this).appear(function() {
					jQuery(this).addClass('animated').addClass($animationName);
					jQuery(this).addClass('animated').addClass($animationDelay);
				});
			}
		});
		
	})();
	
	
	
	//---- Pie Charts
	(function() {
		
		var pieChartClass = 'pieChart',
			pieChartLoadedClass = 'pie-chart-loaded',
			chart = jQuery('.' + pieChartClass);
		
		chart.each(function() {
			jQuery(this).appear(function() {
				var $this = jQuery(this),
					chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
					chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
				if( !$this.hasClass(pieChartLoadedClass) ) {
					$this.easyPieChart({
						animate: 2000,
						size: chartBarWidth,
						lineWidth: 2,
						scaleColor: false,
						trackColor: "#eee",
						barColor: chartBarColor,
					}).addClass(pieChartLoadedClass);
				}
			});
		});
		
	})();
	
	
	
	//---- Animation Progress Bars
	(function() {
		
		jQuery("[data-progress-animation]").each(function() {
			var $this = jQuery(this);
			$this.appear(function() {
				var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
				if(delay > 1) $this.css("animation-delay", delay + "ms");
				setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);
			}, {accX: 0, accY: -50});
		});
		
	})();
	
	
	
	//---- Milestone Counter
	(function() {
		
		jQuery('.milestone-block').each(function() {
			jQuery(this).appear(function() {
				var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
				jQuery(this).find('.milestone-number').countTo({
					from: 0,
					to: $endNum,
					speed: 4000,
					refreshInterval: 60,
				});
			},{accX: 0, accY: 0});
		});
		
	})();
	
	
	
	//---- Nivo Lightbox
	(function() {
		
		jQuery('.lightbox').nivoLightbox({
			effect: 'fadeScale',
			keyboardNav: true,
			errorMessage: 'The requested content cannot be loaded. Please try again later.'
		});
		
	})();
	
	
	
	//---- Tooltips, Fit Vids, Parallax & Text Animations
	(function() {
		
		jQuery('body').each(function() {
			jQuery(this).fitVids();
		});
		
		jQuery('.sh-tooltip').each(function() {
			jQuery(this).tooltip();
		});
		
		jQuery('.bg-parallax').each(function() {
			jQuery(this).parallax("30%", 0.2);
		});
		
		jQuery('.tlt').textillate({
			loop: true,
			in: {
				effect: 'fadeInUp',
				delayScale: 2,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: true,
			},
			out: {
				effect: 'fadeOutUp',
				delayScale: 2,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: true,
			},
		});
		
	})();
	
	
	
	//---- Portfolio Isotope
	(function() {
		
		var setportfolio = function() {
			var $container = jQuery('#portfolio');
			$container.isotope({
				layoutMode : 'masonry',
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});
		
			jQuery('.portfolio-filter ul a').click(function(){
				var selector = jQuery(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
			  return false;
			});
		
			var $optionSets = jQuery('.portfolio-filter ul'),
				$optionLinks = $optionSets.find('a');
			$optionLinks.click(function(){
				var $this = jQuery(this);
				if ( $this.hasClass('selected') ) { return false; }
				var $optionSet = $this.parents('.portfolio-filter ul');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected'); 
			});
		
		};
		
		jQuery(window).load(function() {
			setportfolio();
		});
		
	})();
	
	
	
	//---- Touch Slider
	(function() {
		
		var time = 4.4,
			$progressBar,
			$bar,
			$elem,
			isPause,
			tick,
			percentTime;
			
		jQuery('.touch-slider').each(function(){
			var owl = jQuery(this),
				sliderNav = jQuery(this).attr('data-slider-navigation'),
				sliderPag = jQuery(this).attr('data-slider-pagination'),
				sliderProgressBar = jQuery(this).attr('data-slider-progress-bar');
				
			if ( sliderNav == 'false' || sliderNav == '0' ) {
				var returnSliderNav = false
			}else {
				var returnSliderNav = true
			}
			
			if ( sliderPag == 'true' || sliderPag == '1' ) {
				var returnSliderPag = true
			}else {
				var returnSliderPag = false
			}
			
			if ( sliderProgressBar == 'true' || sliderProgressBar == '1' ) {
				var returnSliderProgressBar = progressBar
				var returnAutoPlay = false
				var returnAfterMove = moved
				var returnStartDragging = pauseOnDragging
			}else {
				var returnSliderProgressBar = false
				var returnAutoPlay = true
				var returnAfterMove = false
				var returnStartDragging = false
			}
			
			owl.owlCarousel({
				navigation : returnSliderNav,
				pagination: returnSliderPag,
				slideSpeed : 400,
				paginationSpeed : 400,
				lazyLoad : true,
				singleItem: true,
				autoHeight : true,
				autoPlay: returnAutoPlay,
				stopOnHover: returnAutoPlay,
				transitionStyle : "fade",
				afterInit : returnSliderProgressBar,
				afterMove : returnAfterMove,
				startDragging : returnStartDragging
			});
			
		});
	
		function progressBar(elem){
			$elem = elem;
			buildProgressBar();
			start();
		}
		
		function buildProgressBar(){
			$progressBar = jQuery("<div>",{
				id:"progressBar"
			});
			$bar = jQuery("<div>",{
				id:"bar"
			});
			$progressBar.append($bar).prependTo($elem);
		}
		
		function start() {
			percentTime = 0;
			isPause = false;
			tick = setInterval(interval, 10);
		};
	 
		function interval() {
			if(isPause === false){
				percentTime += 1 / time;
				$bar.css({
					width: percentTime+"%"
				});
				if(percentTime >= 100){
					$elem.trigger('owl.next')
				}
			}
		}
		
		function pauseOnDragging(){
		  isPause = true;
		}
		
		function moved(){
		  clearTimeout(tick);
		  start();
		}
		
	})();
	
	
	
	//---- Change & Add Icons
	(function() {
	
		jQuery('.touch-slider').each(function(){
			jQuery(this).find('.owl-prev').html('<i class="icon-left-open-big"></i>');
			jQuery(this).find('.owl-next').html('<i class="icon-right-open-big"></i>');
		});
		jQuery('.touch-carousel, .testimonials-carousel').each(function(){
			jQuery(this).find('.owl-prev').html('<i class="icon-angle-left"></i>');
			jQuery(this).find('.owl-next').html('<i class="icon-angle-right"></i>');
		});
		jQuery('.read-more').each(function(){
			jQuery(this).append('<i class="icon-right-open-mini"></i>');
		});
		
	})();
	
	
	
	//---- Hidden Header
	(function() {
		
		var headerEle = function(){
			var $headerHeight = jQuery('header').height();
			jQuery('.hidden-header').css({ 'height' : $headerHeight  + "px" });
		};
		jQuery(window).ready(function () { headerEle(); });
		jQuery(window).resize(function () { headerEle(); });
		
	})();
	
	
	
	//---- Sticky Header
	(function() {
		
		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( 'header' );
			
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY(),
				navMenu = 28,
				navLogo = 27,
				shrinkValue = 10,
				navMenuScroll = navMenu - shrinkValue,
				navLogoScroll = navLogo - shrinkValue;
			
			if ( sy >= changeHeaderOn ) {
				jQuery('.top-bar').slideUp(300);
				jQuery("header").addClass("fixed-header");
				jQuery('.navbar-brand').css({ 'padding-top' : navLogoScroll + "px", 'padding-bottom' : navLogoScroll + "px" });
				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || jQuery(window).width() < 479 ){
					jQuery('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					jQuery('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : navMenuScroll + "px", 'padding-bottom' : navMenuScroll + "px" })
				};
			}
			else {
				jQuery('.top-bar').slideDown(300);
				jQuery("header").removeClass("fixed-header");
				jQuery('.navbar-brand').css({ 'padding-top' : navLogo + "px", 'padding-bottom' : navLogo + "px" });
				
				if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || jQuery(window).width() < 479 ){
					jQuery('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
				}else{
					jQuery('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : navMenu + "px", 'padding-bottom' : navMenu + "px" })
				};
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
	})();
	
	
});
/* ----------------- End JS Document ----------------- */