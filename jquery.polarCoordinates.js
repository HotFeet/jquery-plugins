/*!
 * HotFeet jQuery plugin
 *
 * Copyright 2011 HotFeet GmbH
 * Licensed under GPL Version 3 licenses.
 *
 * Requires:
 *  jQuery v1.3.2 or later
 */

// setup: config: {center ({x,y}), phiUnits ("degrees", "radians")
// commands: "pageToPolar" ({x,y})
(function($) {
	$.fn.polarCoordinates = function() {
		if(arguments.length === 0 || typeof arguments[0] == "object") {
			opts = jQuery.extend({
				phiUnits: "degrees"
			}, arguments[0]);
			
			if(!opts.center) {
				opts.center = {
					x: this.width() / 2,
					y: this.height() / 2
				};
			}
			
			this.data("polarCoordinates.opts", opts);
			return this;
		}
		
		function _extractXY(src) {
			if(src.x != null && src.y != null) { return src; }
			if(src.X != null && src.Y != null) { return {x: X, y: Y }; }
			if(src.pageX != null && src.pageY != null) {
				return {x: src.pageX, y: src.pageY};
			} 
		}
		
		var opts = this.data("polarCoordinates.opts");
		
		if(arguments[0] == "pageToPolar") {
			var srcCoord = _extractXY(arguments[1]);
			var pos = this.offset();
			var vector = {
				x: srcCoord.x - pos.left - opts.center.x,
				y: srcCoord.y - pos.top - opts.center.y
			};
			var r = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
			var phi = Math.atan2(vector.y, vector.x) + Math.PI / 2;
			if(phi < 0) {
				phi += Math.PI * 2;
			}
			
			if(opts.phiUnits == "degrees") {
				phi = phi / Math.PI * 180;
			}
				
			return {r: r, phi: phi};
		}
		return this;
	};
})(jQuery);