$(document).ready(function(){
	$(function() {
				Grid.init();
			});
	$("#toTop").click(function(event){
		  event.preventDefault();
		  var duration = 500;
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
	});
	$("#toDown").click(function(event){
		  event.preventDefault();
		  var duration = 200;
		  var winHeight = $(window).height();
        $('html, body').animate({scrollTop: winHeight}, duration);
        return false;
	});
	$("#slider-adver").owlCarousel({
    	items: 6,
    	margin: 50,
    	nav: true,
    	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    	// dots: true,
        loop: true,
        responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:3,
	        },
	        768:{
	            items:4,
	        },
	        1000:{
	            items:6,
	        }
	    }
    });
      $("#slider-quote").owlCarousel({
    	items: 1,
    	margin: 0,
    	nav: false,
    	dots: true,
        loop: true,
    });
});