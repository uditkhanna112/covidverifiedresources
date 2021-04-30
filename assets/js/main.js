var typed = new Typed('.typed', {

		strings: ["<p>Happy BirthDay Mommy.</p>", "<p>We love you.</p>"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		backSpeed: 50,
		// time before backspacing
		backDelay: 1500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,

  });
$(document).ready(function() {
//Preloader
$(window).on("load", function() {
preloaderFadeOutTime = 5000;
function hidePreloader() {
var preloader = $('.spinner');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
});