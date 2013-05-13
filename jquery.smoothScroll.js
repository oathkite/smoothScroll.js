(function($) {
	$.fn.smoothScroll = function(options) {
		this.on('click', function(event) {
			event.preventDefault();
			var target = target.length ? $($(this).attr('href')).offset().top : 0;
			$('html, body').animate({
				scrollTop: target
			});
		});
	}
})(jQuery);
$(function() {
	$('a[href^=#]').smoothScroll();
});