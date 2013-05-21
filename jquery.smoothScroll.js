(function($) {
	$.fn.smoothScroll = function(options) {
		$('body').deligate(this, 'click', function(event) {
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