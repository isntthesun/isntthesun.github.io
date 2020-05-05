document.addEventListener('DOMContentLoaded',function(event){
	var timerWrapper = document.querySelectorAll("#typewriter-text");
  	const second = 1000,
      	minute = second * 60,
      	hour = minute * 60,
      	day = hour * 24;

	let countDown = new Date('May 05, 2020 15:00:00').getTime(),
	x = setInterval(function() {    

	 	let now = new Date().getTime(),
	     distance = countDown - now;

  		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  		document.getElementById("typewriter-text").innerHTML = days + "." + hours + "." + minutes + "." + seconds;

	 	if (distance < 0) {
	  		clearInterval(x);
	  		document.querySelector("#typewriter-text").innerHTML = "<a href='https://forms.gle/Zg8NQfSzFARjKcKb7' id='new-link' target='_blank'>Come and talk to us. Find the truth.</a>";
        document.querySelector("#typewriter-text").classList.remove('active');
        document.querySelector("#new-link").classList.add('active');
        document.querySelector("#footer-content").classList.add('active');

	 	}

	}, second);
});

window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
};