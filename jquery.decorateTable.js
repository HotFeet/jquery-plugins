/*
 * HotFeet jQuery plugin
 *
 * Copyright 2010 HotFeet GmbH
 * Licensed under GPL Version 3 licenses.
 */
(function($) {
	$.fn.decorateTable = function(options) {
		opts = jQuery.extend({
			rowParity: false,
			rowIndex: false,
			columnParity: false,
			columnIndex: false
		}, options);

		return this.each(function() {
			$(this).find("tr").each(function(rowIdx) {
				if(opts.rowIndex) { $(this).addClass("row" + rowIdx); }
				if(opts.rowParity) { $(this).addClass(rowIdx % 2 === 0 ? "even" : "odd"); }
	
				$(this).find("th, td").each(function(colIdx) {
					if(opts.columnIndex) { $(this).addClass("col" + colIdx); }
					if(opts.columnParity) { $(this).addClass(colIdx % 2 === 0 ? "even" : "odd"); }
				});
			});
		});
	};
})(jQuery);