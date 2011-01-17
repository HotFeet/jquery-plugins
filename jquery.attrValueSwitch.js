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
	function switchValue(obj, idx) {
		obj.each(function() {
			var attrName = obj.data("attrValueToggle.attrName");
			var values = obj.data("attrValueToggle.values");
			if(idx == undefined) {
				idx = (obj.data("attrValueToggle.curIndex") + 1) % values.length;
			}
			obj.data("attrValueToggle.curIndex", idx).attr(attrName, values[idx]);
		});
	}

	$.fn.attrValueSwitch = function(attrName, settings) {
		if(attrName === null || typeof attrName == "number") {
			switchValue($(this), attrName);
			return $(this);
		}

		settings = jQuery.extend({
			separator: "|",
			startIndex: 0
		}, settings);


		$(this).each(function() {
			$(this).data("attrValueToggle.attrName", attrName);

			var values = $(this).attr(attrName).split(settings.separator);
			$(this).data("attrValueToggle.values", values);
		});

		switchValue($(this), settings.startIndex);
		return $(this);
	};
})(jQuery);