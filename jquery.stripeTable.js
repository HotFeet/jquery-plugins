/*!
 * HotFeet jQuery plugin
 *
 * Copyright 2011 HotFeet GmbH
 * Licensed under GPL Version 3 licenses.
 *
 * Requires:
 *  jQuery v1.3.2 or later
 *  jquery.colors plugin (http://enideo.com/#jquery-colors)
 */
(function($) {
	$.fn.stripeTable = function(options) {
		opts = jQuery.extend({
			lightnessRatio: 0.95,
			maxLightness: 92,
			saturationRatio: 0.6
		}, options);
		
		var rem = (opts.darkRows == "even" ? 0 : 1);
		
		//TODO: add RGB -> HSL -> RGB conversion from
		//      http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
		//      var parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]
		//      http://github.com/jquery/jquery-color/blob/master/jquery.color.js
		
		//TODO: move this into color creation via $.colors(...)
		$.colors.defaultModel = "HSL";
		
		return this.each(function() {
			$(this).find("tr").each(function(rowIdx) {
				if(rowIdx % 2 === rem) {
					$(this).find("th, td").each(function() {
						var c = $(this).css("background-color");
						var color = $.colors($(this).css("background-color"));
						//TODO: handle empty background-colors (i.e. Alpha = 0)
						var l = Math.min(color.get("l") * opts.lightnessRatio, opts.maxLightness);
						color.set("l", l); 
						color.set("s", color.get("s") * opts.saturationRatio);
						$(this).css("background-color", color);

						//var mixedColor = $.colors(originalColor).mixWith(opts.color);
						//$(this).css("background-color", mixedColor);
					});
				}
			});
		});
	};
})(jQuery);