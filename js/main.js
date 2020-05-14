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

	//countdown timer
window.onload = function() {
	  // Month Day, Year Hour:Minute:Second, id-of-element-container
	  countDownToTime("Oct 23, 2020 17:00:00", 'countdown1'); // ****** Change this line!
	}
	function countDownToTime(countTo, id) {
	  countTo = new Date(countTo).getTime();
	  var now = new Date(),
	      countTo = new Date(countTo),
	      timeDifference = (countTo - now);

	  var secondsInADay = 60 *  60 * 1000 * 24,
	      secondsInAHour = 60 * 60 * 1000;

	  days = Math.floor(timeDifference / (secondsInADay) * 1);
	  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
	  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
	  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

	  var idEl = document.getElementById(id);
	  idEl.getElementsByClassName('days')[0].innerHTML = days;
	  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
	  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
	  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

	  clearTimeout(countDownToTime.interval);
	  countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);
	}










}); // closes my document.ready
