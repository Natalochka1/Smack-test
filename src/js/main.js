$(document).ready(function(){
	//gallery start
	$(function() {
				Grid.init();
			});
	//buttons scroll window
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
	//sliders
	$("#slider-adver").owlCarousel({
    	items: 6,
    	margin: 50,
    	nav: true,
    	dots: false,
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

$(document).ready(function(){
    $('.progressbars-wrapper').viewportChecker({
      callbackFunction: function(elem, action){
        $(".pie").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"

		}).radialProgress("to", {'perc': '90 ', 'time': 1000}),
        $(".aips").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"

		}).radialProgress("to", {'perc': '96 ', 'time': 1500}),
		$(".jsphp").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"

		}).radialProgress("to", {'perc': '85 ', 'time': 800}),
		$(".ptgr").radialProgress("init", {
		  'size': 144,
		  'fill': 6,
		  'text-color': "#ffe600",
		  'font-size': 35,
		  'font-family': "Oswald",
		  'background': "#fff",
		  'color':"rgb(255,230,0)"

		}).radialProgress("to", {'perc': '94 ', 'time': 1400})	
    }});
});
$(document).ready(function(){
    $('.number-block').viewportChecker({
      callbackFunction: function(elem, action){
          $('#countdown1600').animateNumber({ number: 1600}),
          $('#countdown3200').animateNumber({ number: 3200}),
          $('#countdown40').animateNumber({ number: 40}),
          $('#countdown20000').animateNumber({ number: 20000});
        }});
    });
$(document).ready(function(){
	$(".close-button").click(function(){
	$(".tab-list ul li").removeClass("ui-tabs-active ui-state-active");
	$(".ui-tabs-panel").fadeOut(1);

	 return false;
		});
	});
$(document).ready(function(){
	 $( ".tab-list" ).tabs({ show: { effect: "explode", duration: 1000 } }); 
	});

//mobile buttons
  $( ".mobile-close" ).hide();
		$( ".mobile" ).click(function() {
			$( ".collapse" ).slideToggle( "slow", function() {
			$( ".mobile" ).hide();
			$( ".mobile-close" ).show();
		});
});

$( ".mobile-close" ).click(function() {
	$( ".collapse" ).slideToggle( "slow", function() {
		$( ".mobile-close" ).hide();
		$( ".mobile" ).show();
	});
});