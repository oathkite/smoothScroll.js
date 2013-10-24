(function($) {
	$.fn.smoothScroll = function(offset) {
		offset = offset || 0;
		return this.each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				var target = $($(this).attr('href')).length ? $($(this).attr('href')).offset().top - offset : 0
				$('html, body').animate({
					scrollTop: target
				});
			})
		});
	};
})(jQuery);
$(function() {
	$('a[href^=#]').smoothScroll();
});