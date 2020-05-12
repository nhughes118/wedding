$(document).ready(function(){
	
	$('#top').click(function(){
		$('html,body').animate({scrollTop: 0}, 500);
	});
	
	$('.mobileMenu').click(function(){
		$('#topNav li').toggle("slide");
	});
	
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
	document.getElementById("myBtn").style.display = "block";
	} else {
	document.getElementById("myBtn").style.display = "none";
	}
	}
	
	// When the user clicks on the button, scroll to the top of the document
	$('#myBtn').click(function(){
	$('html,body').animate({scrollTop: 0}, 100);
	});


}); // closes my document.ready