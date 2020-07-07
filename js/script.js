$(document).ready(function() {
	
//script per lo scroll della pagina
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1500);
			return false;
		  }
		}
	  });
	
//script per il burger button
	$('#burger').click(function(e){
		e.preventDefault();
       	$('.menuprincipale').stop().slideToggle();
   		$(this).find('i.fa').toggleClass('fa-bars').addClass('fa-times');
     });
	 
//script per lo slider
  	$('.flexslider').flexslider({
    	animation: "slide",
		controlNav: true,
		directionNav: false,
	});
	
//script per la gallery
	$('.gallery a').touchTouch();
});