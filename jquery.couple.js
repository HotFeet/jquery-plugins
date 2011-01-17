(function($) {
	$.fn.couple = function(target, options) {
		options = jQuery.extend({
			hoverClass: "selected",
			events: "hover click"
		}, options);
	
		if(options.events.indexOf("hover") != -1) {
			$(this).hover(
				function() { $(target).toggleClass(options.hoverClass, true); },
				function() { $(target).toggleClass(options.hoverClass, false); }
			);
			var source = this;
			$(target).hover(
				function() { $(source).toggleClass(options.hoverClass, true); },
				function() { $(source).toggleClass(options.hoverClass, false); }
			);
		}
		if(options.events.indexOf("click") != -1) {
			$(this).click(function() { $(target).click(); });
		}
	};
})(jQuery);
