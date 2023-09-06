$(document).ready(function() {
	'use strict';
  
	// sidenav control right
	$(".sidenav-control-right").sideNav({
	  edge: 'right',
	  closeOnClick: false
	});
  
	// slick slider
	$('.slider-slick').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  autoplay: true
	});
  
	// faq collapse icon
	$(document).on("click", ".faq-collapsible", function() {
	  $(this).find('i').toggleClass('fa-minus');
	});
  
	// tabs
	$('ul.tabs').tabs();
  
	// Language selection dropdown
	$(".selected-language").click(function() {
	  $(".language-list").toggleClass("show");
	});
  
	// Close language selection dropdown when clicked outside
	$(document).click(function(event) {
	  if (!$(event.target).closest(".language-selection").length) {
		$(".language-list").removeClass("show");
	  }
	});

	
	
  });