(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	const scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
  }

  const currentPage = document.location.href.match(/[^\/]+$/)[0];
  const isHomePage = !(['village', 'contact', 'rooms', 'activities'].filter(page => currentPage.includes(page)).length);
  const darkHeightTrigger = isHomePage ? $(window).height() : 500
  if (scroll >= darkHeightTrigger) {
    console.log()
    $('.slicknav_icon-bar').addClass('slicknav_icon-bar-dark')
  } else {
    $('.slicknav_icon-bar').removeClass('slicknav_icon-bar-dark')
  }
});


$(document).ready(function(){

// mobile_menu
const menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay: true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 1600,
  navSpeed: 1000,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          // nav:false,
      },
      992:{
          items:1
      }
  }
});


});

})(jQuery);
