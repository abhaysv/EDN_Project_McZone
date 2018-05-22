/*------------------------------------------------------------------
 * Theme Name: HESA HOSTING - WHMCS & HTML Domain & Web Hosting Template (RTL Included)
 * Author: coodiv
 * Author URI: http://coodiv.net/
 * Author URI: https://themeforest.net/user/coodiv
 * Description: A Bootstrap Responsive Domain & Web Hosting Template + WHMCS theme LRT&RTL
 * Version: 1.0
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2017 coodiv.
 -------------------------------------------------------------------*/
 
 
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.1;

    window.onscroll = function() {
        [].slice.call(parallax).forEach(function(el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

    if (window.innerWidth > 750) {
        $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                $(this).toggleClass('open');
            }
        );

    };

    $('.menu-toggle-cls-sidebar').click(function() {
        $(".sidebar").toggleClass("closesidebar");
        $(".no-btn-close").toggleClass("closesidebar");
        $(".menu-toggle-cls-sidebar").toggleClass("rotatbtn-close");
        $(".fullpagenosidebar").toggleClass("fullwidth");
    });

    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        nav: true,
        smartSpeed: 450,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

    $('.testimonial').owlCarousel({
        items: 1,
        animateOut: 'slideOutRight',
        animateIn: 'flipInX',
        loop: true,
        margin: 10,
        nav: true,
    });

    $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-angle-up" aria-hidden="true"></i></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();

    $("#pageloeadacc").delay(1200).fadeOut(600);
	new WOW().init();
	
   $('.owl-feedback').owlCarousel({
                loop: true,
                margin: 10,
				items:1,
				dots: false,
				nav: true,
               
     });
			
  
     $('#circlent').circleProgress({
    value: 0.64,
    size: 160,
	lineCap: 'round',
    fill: {
      gradient: ["#fe1028", "#fc0a8c"]
    }
    });

	
	$('#circlentt').circleProgress({
    value: 0.15,
    size: 160,
	lineCap: 'round',
    fill: {
      gradient: ["#fe1028", "#fc0a8c"]
    }
    });
	
	
	$('#circlenttt').circleProgress({
    value: 0.3,
    size: 160,
	lineCap: 'round',
    fill: {
      gradient: ["#fe1028", "#fc0a8c"]
    }
    });
	
    $('[data-toggle="popover"]').popover();

  
});