(function($) {
	$.fn.smoothScroll = function(options) {
		return this.each(function() {
			var target = $($(this).attr('href'));
			$(this).click(function(event) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				});
			});
		});
	}
})(jQuery);
$(function() {
	$('a[href^=#]').smoothScroll();
});