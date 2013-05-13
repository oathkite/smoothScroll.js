(function($) {
	$.fn.smoothScroll = function(options) {
		this.on('click', function(event) {
			event.preventDefault();
			var target = $($(this).attr('href'));
			if(target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				});
			}
		});
	}
})(jQuery);
$(function() {
	$('a[href^=#]').smoothScroll();
});