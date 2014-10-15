$.fn.slideAway = function(opts) {
	var options = $.extend({
		direction: 'horizontal',
		touch: false
	}, opts);

	var start = {
		x: 0,
		y: 0,
		left: 0,
		top: 0,
		style: {
			"position": null,
			"top": null,
			"left": null,
			"z-index": null
		}
	};

	var saveStyle = function(ele) {
		for (var key in start.style) {
			start.style[key] = ele.style[key];
		}
	};
	var dumpStyle = function(ele) {
		for (var key in start.style) {
			ele.style[key] = start.style[key];
		}
	};

	if (touch) {
		
	}
};