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
	$.fn.fadeSliderToggle = function(settings) {
		settings = jQuery.extend({
			speed: 500,
			easing: "swing"
		}, settings);
		
		return this.animate({
			opacity: (this.css("display") == "none" ? 1 : 0),
			height: 'toggle'
		}, settings.speed, settings.easing);
	};
})(jQuery);