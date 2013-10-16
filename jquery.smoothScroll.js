(function($) {
	$.fn.smoothScroll = function(options) {
		offset = offset || 0;
		$('body').on('click', 'a[href^=#]', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('html, body').animate({
				scrollTop: target.length ? $($(this).attr('href')).offset().top - offset : 0
			});
		})
	}
})(jQuery);
$(function() {
	$('a[href^=#]').smoothScroll();
});