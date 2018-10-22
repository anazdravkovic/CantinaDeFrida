$(document).ready(function(){
	
	
	$('#slider').unslider({
			
			autoplay: true,
			arrows: false,
			nav: false,
			speed: 750,
			delay: 6000, 
			infinite: true
	});
	
	
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("#main-header .container").addClass("smanji");
		}
		else
		{
			$("#main-header .container").removeClass("smanji");
		}
	});
	

	$(document).ready(function(){
	  $("#mobile-bars").click(function(){ 
		$("#top-menu ul").slideToggle(700);
	  });
	});
	
	
	$( '#submit' ).click(function() {
		$( "#forma-kontakt" ).effect( "shake" );
	});
	
	
});
