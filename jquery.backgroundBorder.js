/*!
 * HotFeet jQuery plugin
 *
 * Copyright 2011 HotFeet GmbH
 * Licensed under GPL Version 3 licenses.
 *
 * Requires:
 *  jQuery v1.3.2 or later
 */
(function($) {
	$.fn.backgroundBorder = function(options) {
		var opts = $.extend({}, $.fn.backgroundBorder.defaults, options);
	
		return this.each(function() {
			var bg = $(this).css("background-color");
			//TODO: test with IE/Safari/Opera/...
			bg = (bg == "transparent" || bg == "rgba(0, 0, 0, 0)" ? "white" : bg);
			var p, w, h, newCss;

			if($(this).css("border-right-style") == "dotted") { // all four borders are dotted
				$(this).css("width", $(this).width() - ($(this).outerWidth() - 1) % 3 + 3); 
				$(this).css("height", $(this).height() - ($(this).outerHeight() - 1) % 3 + 3); 
		
				//TODO: remove assumption that all paddings are equal
				p = parseInt($(this).css("padding-top"), 10);

				w = $(this).innerWidth() - 3;
				h = $(this).innerHeight() - 2;
		
				newCss = {
					width: w, height: h,
					paddingLeft: 2, paddingRight: 1,
					paddingTop: 1, paddingBottom: 1,
					border: "none"
				};
				$(this).css(newCss).addClass(opts.backgroundClass);
				$(this).wrapInner($("<div/>").css({
						width: (w - p - p),
						height: (h - p - p - 1),
						paddingLeft: (p - 1), paddingRight: p,
						paddingTop: p, paddingBottom: p,
						backgroundColor: bg
				}));
			} else if($(this).css("border-top-style") == "dotted" && $(this).css("border-bottom-style") == "dotted" ) {
				$(this).css("height", $(this).height() - ($(this).outerHeight() - 1) % 3 + 3); 
		
				//TODO: remove assumption that all paddings are equal
				p = parseInt($(this).css("padding-top"), 10);

				w = $(this).innerWidth();
				h = $(this).innerHeight() - 2;
				newCss = {
					width: w, height: h,
					paddingTop: 1, paddingBottom: 1,
					border: "none"
				};
				$(this).css(newCss).addClass(opts.backgroundClass);
				$(this).wrapInner($("<div/>").css({
						width: w,
						height: (h - p - p - 1),
						paddingTop: p, paddingBottom: p,
						backgroundColor: bg
				}));
			} else if($(this).css("border-top-style") == "dotted") { // only top border is dotted
				p = parseInt($(this).css("padding-top"), 10);
				$(this).css({
					paddingTop: 1,
					border: "none"
				});
				$(this).addClass(opts.backgroundClass);
				$(this).wrapInner($("<div/>").css({
					paddingTop: p,
					backgroundColor: bg
				}));
			}
		});
	};

	$.fn.backgroundBorder.defaults = {
		backgroundClass: "background-border"
	};
})(jQuery);