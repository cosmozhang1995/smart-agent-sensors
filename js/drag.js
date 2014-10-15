$.fn.drag = function(opts) {
	var options = {
		'opacity': null,
		'mousedownCallback': null,
		'mouseupCallback': null,
		'mousemoveCallback': null,
		'touch': false,
		'z-index': 999,
		'delay': 0,
		'el': null,
		'direction': 'horizontal|vertical'
	};
	if (opts) $.extend(options, opts);

	if ((typeof options.el === "string") || options.el instanceof Element)
		options.el = $(options.el);

	var start = {
		x: 0,
		y: 0,
		left: 0,
		top: 0,
		style: {
			"position": null,
			"top": null,
			"left": null,
			"opacity": null,
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

	var in_drag = false;
	var delay_timer = -1;

	var clone = null;

	var directions = {
		horizontal: false,
		vertical: false
	};
	(function(){
		var _ds = options.direction.split('|');
		for (var i = 0; i < _ds.length; i++) {
			if (_ds[i] === 'horizontal') directions.horizontal = true;
			if (_ds[i] === 'vertical') directions.vertical = true;
		}
	})();

	if (options.touch === true) {
		$(this).on('touchstart.drag', function(e) {
			e.preventDefault();
			var thisRef = this;
			delay_timer = setTimeout(function(){
				e.preventDefault();
				e.stopPropagation();
	
				start.x = e.originalEvent.touches[0].pageX;
				start.y = e.originalEvent.touches[0].pageY;
				start.left = $(thisRef).offset().left;
				start.top = $(thisRef).offset().top;
			
				clone = options.el || $(thisRef).clone();
				clone.css('position', 'absolute');
				clone.css('z-index', options['z-index']);
				clone.css('top', start.top + 'px');
				clone.css('left', start.left + 'px');
				clone.css('width', $(thisRef).width() + 'px');
				clone.css('height', $(thisRef).height() + 'px');
				if (typeof options.opacity === "number") clone.css('opacity', options.opacity);
				clone.appendTo("body");
	
				in_drag = true;
	
				if (typeof options.mousedownCallback === "function")
					options.mousedownCallback(e);
			}, ((typeof options.delay === "number") ? options.delay : 0));
		});
	
		$(document).on('touchmove.drag', function(e) {
			clearTimeout(delay_timer);
			if (in_drag) {
				e.preventDefault();
				e.stopPropagation();
				offsetX = e.originalEvent.touches[0].pageX - start.x;
				offsetY = e.originalEvent.touches[0].pageY - start.y;
				if (directions.vertical) clone.css('top', (start.top + offsetY) + 'px');
				if (directions.horizontal) clone.css('left', (start.left + offsetX) + 'px');
				if (typeof options.mousemoveCallback === "function")
					options.mousemoveCallback(e);
			}
		});
	
		$(document).on('touchend.drag', function(e) {
			clearTimeout(delay_timer);
			if (in_drag) {
				e.preventDefault();
				e.stopPropagation();
	
				in_drag = false;
				clone.animate({
					top: start.top + 'px',
					left: start.left + 'px'
				}, 200, function() {
					clone.remove();
				});
		
				if (typeof options.mouseupCallback === "function")
					options.mouseupCallback(e);
			}
		});
	} else {
		$(this).on('mousedown.drag', function(e) {
			e.preventDefault();
			var thisRef = this;
			delay_timer = setTimeout(function(){
				e.preventDefault();
				e.stopPropagation();
	
				start.x = e.pageX;
				start.y = e.pageY;
				start.left = $(thisRef).offset().left;
				start.top = $(thisRef).offset().top;
			
				clone = options.el || $(thisRef).clone();
				clone.css('position', 'absolute');
				clone.css('top', start.top + 'px');
				clone.css('left', start.left + 'px');
				if (typeof options.opacity === "number") clone.css('opacity', options.opacity);
				clone.appendTo("body");
	
				in_drag = true;
	
				if (typeof options.mousedownCallback === "function")
					options.mousedownCallback(e);
			}, ((typeof options.delay === "number") ? options.delay : 0));
		});
	
		$(document).on('mousemove.drag', function(e) {
			clearTimeout(delay_timer);
			if (in_drag) {
				e.preventDefault();
				e.stopPropagation();
				offsetX = e.pageX - start.x;
				offsetY = e.pageY - start.y;
				clone.css('z-index', options['z-index']);
				if (directions.vertical) clone.css('top', (start.top + offsetY) + 'px');
				if (directions.horizontal) clone.css('left', (start.left + offsetX) + 'px');
				if (typeof options.mousemoveCallback === "function")
					options.mousemoveCallback(e);
			}
		});
	
		$(document).on('mouseup.drag', function(e) {
			clearTimeout(delay_timer);
			if (in_drag) {
				e.preventDefault();
				e.stopPropagation();
	
				in_drag = false;
				clone.animate({
					top: start.top + 'px',
					left: start.left + 'px'
				}, 200, function() {
					clone.remove();
				});
		
				if (typeof options.mouseupCallback === "function")
					options.mouseupCallback(e);
			}
		});
	}
}