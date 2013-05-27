(function($) {
	$.fn.smoothScroll = function(options) {
		$('body').delegate('a[href^=#]', 'click', function(event) {
			event.preventDefault();
			var target = $($(this).attr('href'));
			$('html, body').animate({
				scrollTop: target.length ? $($(this).attr('href')).offset().top : 0
			});
		});
	}
})(jQuery);
$(function() {
	$('a[href^=#]').smoothScroll();
});