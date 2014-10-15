var sensor_groups = [];

function addSensorGroup() {
	var sensor_group = new SensorGroup();
	SensorGroup.addSensorGroup('#sensor-group-list', sensor_groups, sensor_group, function(){
		$("body").animate({'scrollTop': Math.max($(document).height() - $(window).height(), 0) + 'px'}, 200);
	});
}

function drawer() {
	var start = {
		top: 0,
		y: 0,
		height: 0
	};
	var in_drag = false;
	$('#top-drawer-handle').on('touchstart.drawer', function(e) {
		e.preventDefault();
		e.stopPropagation();
		start.top = $(this).offset().top;
		start.height = $('#top-drawer-body').height();
		start.y = e.originalEvent.touches[0].pageY;
		in_drag = true;
	});
	$(document).on('touchmove.drawer', function(e) {
		if (in_drag) {
			e.preventDefault();
			e.stopPropagation();
			var offsetY = e.originalEvent.touches[0].pageY - start.top;
			$('#top-drawer-body').css('height', (start.height + offsetY) + 'px');
		}
	});
	$(document).on('touchend.drawer', function(e) {
		if (in_drag) {
			in_drag = false;
			e.preventDefault();
			e.stopPropagation();
			var offsetY = e.originalEvent.changedTouches[0].pageY - start.top;
			var windowHeight = $(window).height();
			if ((offsetY > windowHeight * 0.3 && start.height === 0) ||
				(!(-offsetY > windowHeight * 0.15 && start.height > 0))) {
				drawerDown();
			} else {
				drawerUp();
			}
		}
	});

	var drawerDown = function() {
		var windowHeight = $(window).height();
		var setHeight = 
			windowHeight - 
			$('#header').height() -
			$('#top-drawer-handle').height() -
			$('#add-sensor-group-button').height();
		$('#top-drawer-body').animate({'height': setHeight + 'px'}, 200);
	};
	var drawerUp = function() {
		$('#top-drawer-body').animate({'height': '0px'}, 200);
	};

	var sensors_in_repository = [];
	for (var i = 0; i < sensor_repository.length; i++) {
		var sensor_option = sensor_repository[i];
		var sensor_el = $(Sensor.tpl.button.substitute({'img-src':sensor_option.icon}));
		(function() {
			var _name = sensor_option.name;
			var _start = {
				x: 0,
				y: 0,
				top: 0,
				left: 0
			};
			var _delay = 300;
			var _timeout = -1;
			var _in_drag = false;
			var _clone = null;
			sensor_el.on('touchstart', function(e) {
				e.preventDefault();
				e.stopPropagation();
				var _thisRef = this;
				_timeout = setTimeout(function() {
					_clone = $(sensor_el).clone();
					_in_drag = true;
					_start.x = e.originalEvent.touches[0].pageX;
					_start.y = e.originalEvent.touches[0].pageY;
					_start.left = $(_thisRef).offset().left;
					_start.top = $(_thisRef).offset().top;
					_clone.css('position', 'absolute');
					_clone.css('z-index', 999);
					_clone.css('top', _start.top + 'px');
					_clone.css('left', _start.left + 'px');
					_clone.appendTo('body');
					drawerUp();
				}, _delay);
			});
			sensor_el.on('touchmove', function(e) {
				clearTimeout(_timeout);
				if (_in_drag) {
					e.preventDefault();
					e.stopPropagation();
					var offsetX = e.originalEvent.touches[0].pageX - _start.x;
					var offsetY = e.originalEvent.touches[0].pageY - _start.y;
					_clone.css('left', (_start.left + offsetX) + 'px');
					_clone.css('top', (_start.top + offsetY) + 'px');
				};
			});
			sensor_el.on('touchend', function(e) {
				clearTimeout(_timeout);
				if (_in_drag) {
					e.preventDefault();
					e.stopPropagation();
					var touchX = e.originalEvent.changedTouches[0].pageX;
					var touchY = e.originalEvent.changedTouches[0].pageY;
					for (var j = 0; j < sensor_groups.length; j++) {
						var _sensor_group_el = sensor_groups[j].el;
						var _sensor_group_el_spec = _sensor_group_el.offset();
						_sensor_group_el_spec.right = _sensor_group_el_spec.left + _sensor_group_el.outerWidth();
						_sensor_group_el_spec.bottom = _sensor_group_el_spec.top + _sensor_group_el.outerHeight();
						if (touchX > _sensor_group_el_spec.left &&
							touchX < _sensor_group_el_spec.right &&
							touchY > _sensor_group_el_spec.top &&
							touchY < _sensor_group_el_spec.bottom) {
							var _sensor = new Sensor(_name);
							sensor_groups[j].addSensor(_sensor);
							_sensor.configDialog(true);
							break;
						}
					}
					_clone.remove();
				}
			});
		})();
		sensor_el.removeClass('button-inline');
		$('#top-drawer-sensor-list').append(sensor_el);
	}
}

$(document).ready(function(){
	addSensorGroup();

	$('#add-sensor-group-button').drag({
		opacity: 0.5,
		touch: true,
		direction: 'vertical',
		mouseupCallback: function(e) {
			console.log(e);
			e = e.originalEvent.changedTouches[0];
			var elSpec = $('#add-sensor-group-button').offset();
			elSpec.right = $('#add-sensor-group-button').outerWidth() + elSpec.left;
			elSpec.bottom = $('#add-sensor-group-button').outerHeight() + elSpec.top;
			if (e.pageX < elSpec.left || e.pageX > elSpec.right || e.pageY < elSpec.top || e.pageY > elSpec.bottom) {
				addSensorGroup();
			}
		}
	});

	drawer();
});