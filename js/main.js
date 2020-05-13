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

	Vue.component('countdown', {
	  template: '#countdown-template',
	  mounted() {
	    window.setInterval(() => {
	        this.now = Math.trunc((new Date()).getTime() / 1000);
	    },1000);
	  },
	  props: {
	    date: {
	      type: String
	    }
	  },
	  data() {
	    return {
	      now: Math.trunc((new Date()).getTime() / 1000)
	    }
	  },
	  computed: {
	    dateInMilliseconds() {
	      return Math.trunc(Date.parse(this.date) / 1000)
	    },
	    seconds() {
	      return (this.dateInMilliseconds - this.now) % 60;
	    },
	    minutes() {
	      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
	    },
	    hours() {
	      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
	    },
	    days() {
	      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
	    }
	  }
	});

	Vue.filter('two_digits', (value) => {
	  if (value < 0) {
	    return '00';
	  }
	  if (value.toString().length <= 1) {
	    return `0${value}`;
	  }
	  return value;
	});




	var app = new Vue({
	  el: '#app'
	});


}); // closes my document.ready
