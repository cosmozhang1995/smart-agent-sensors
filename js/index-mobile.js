var sensor_groups = [];
var operators = [];
var configurations = [];
var JUMP_STEP_DISTANCE = 0;

var steps = [
	{
		name: 'sensors',
		hash: 'sensors',
		prefix: 'sensors',
		title: '触发器'
	},
	{
		name: 'operators',
		hash: 'operators',
		prefix: 'operators',
		title: '执行器'
	},
	{
		name: 'configurations',
		hash: 'configurations',
		prefix: 'configurations',
		title: '应用配置'
	},
	{
		name: 'confirmation',
		hash: 'confirmation',
		prefix: 'confirmation',
		title: '确认'
	},
	{
		name: 'completion',
		hash: 'completion',
		prefix: 'completion',
		title: '完成'
	}
];
function findStepBy(key, val) {
	for (var i = 0; i < steps.length; i++) {
		if (steps[i][key] === val) 
			return steps[i];
	}
	return null;
}
function findStepByHash(hash) {
	return findStepBy('hash', hash);
}
function currentStep() {
	var hash = this.location.hash.replace(/#/,'');
	return findStepByHash(hash) || steps[0];
}
function jumpStep(prev) {
	var _currentStep = currentStep();
	var currentStepIdx = (function() {
		for (var i = 0; i < steps.length; i++)
			if (_currentStep === steps[i])
				return i;
		return -1;
	})();
	var _step;
	if (prev) _step = steps[currentStepIdx - 1];
	else _step = steps[currentStepIdx + 1];
	if (_step)
		initStep(_step);
}
function nextStep() {
	jumpStep(false);
}
function prevStep() {
	jumpStep(true);
}

function headerNavButton() {
	$('#nav-prev').click(prevStep);
	$('#nav-next').click(nextStep);
}

function gestureRecognize() {
	var dollarRecognizer = new DollarRecognizer();
	var timer = -1;
	var start = {
		x: 0,
		y: 0
	}
	var points = [];
	var in_drag = false;
	var ctx = null;
	var canvas = document.getElementById('confirmation-canvas');
	var setUpCanvas = function(_c) {
		_c.width = $(_c).width();
		_c.height = $(_c).height();
	}
	var setUpCanvasCtx = function(_ctx) {
		_ctx.lineCap = "round";
		_ctx.lineJoin = "round";
		_ctx.lineWidth = 1.0;
		_ctx.strokeStyle = "#000";
	};
	var canvasSpec = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
	var down = function(e) {
		console.log(e);
		canvasSpec = $.extend({
			width: $(canvas).width(),
			height: $(canvas).height(),
		}, $(canvas).offset());

		var point = new Point(e.pageX - canvasSpec.left, e.pageY - canvasSpec.top);
		start.x = point.X;
		start.y = point.Y;
		points = [point];
		in_drag = true;

		ctx = canvas.getContext("2d");
		setUpCanvas(canvas);
		setUpCanvasCtx(ctx);
		ctx.clearRect(0, 0, canvasSpec.width, canvasSpec.height);
		ctx.moveTo(start.x, start.y);
	}
	var move = function(e) {
		if (in_drag) {
			var point = new Point(e.pageX - canvasSpec.left, e.pageY - canvasSpec.top);
			points.push(point);
			ctx.lineTo(point.X, point.Y);
			ctx.stroke();
		}
	}
	var up = function(e) {
		if (in_drag) {
			in_drag = false;
			var point = new Point(e.pageX - canvasSpec.left, e.pageY - canvasSpec.top);
			points.push(point);
			// console.log(points);
			for (var i = 0; i < points.length; i++) {
				console.log(points[i].X, points[i].Y);
			}
			var result = dollarRecognizer.Recognize(points);
			console.log(result);
			nextStep();
		}
	}
	// $(canvas).on('mousedown', down);
	// $(canvas).on('mousemove', move);
	// $(canvas).on('mouseup', up);
	$(canvas).on('touchstart', function(e){down(e.originalEvent.touches[0])});
	$(canvas).on('touchmove', function(e){move(e.originalEvent.touches[0])});
	$(canvas).on('touchend', function(e){up(e.originalEvent.changedTouches[0])});
}

function clearSensorGroup() {
	for (var i = sensor_groups.length-1; i >= 0; i++) 
		sensor_groups[i].destroy();
}

function addSensorGroup() {
	var sensor_group = new SensorGroup();
	SensorGroup.addSensorGroup('#sensor-group-list', sensor_groups, sensor_group, function(){
		var scrollTop = $('#sensors-container').height() - $('#section').height();
		scrollTop += parseFloat($('#sensors-container').css('marginTop').replace('px', ''));
		scrollTop += parseFloat($('#sensors-container').css('marginBottom').replace('px', ''));
		$("#section").animate({'scrollTop': Math.max(scrollTop, 0) + 'px'}, 200);
	});
}

function addOperator() {
}

function drawerSensors() {
	var start = {
		top: 0,
		y: 0,
		height: 0
	};
	var in_drag = false;
	$('#top-drawer-handle').off('touchstart.drawer');
	$('#top-drawer-handle').off('touchmove.drawer');
	$('#top-drawer-handle').off('touchend.drawer');
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
	$('#top-drawer-list').html('');
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
		$('#top-drawer-list').append(sensor_el);
	}
}

function drawerOperators() {
	var start = {
		top: 0,
		y: 0,
		height: 0
	};
	var in_drag = false;
	$('#top-drawer-handle').off('touchstart.drawer');
	$('#top-drawer-handle').off('touchmove.drawer');
	$('#top-drawer-handle').off('touchend.drawer');
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
			$('#top-drawer-handle').height();
		$('#top-drawer-body').animate({'height': setHeight + 'px'}, 200);
	};
	var drawerUp = function() {
		$('#top-drawer-body').animate({'height': '0px'}, 200);
	};

	var operators_in_repository = [];
	$('#top-drawer-list').html('');
	for (var i = 0; i < operator_repository.length; i++) {
		var operator_option = operator_repository[i];
		var operator_el = $(Sensor.tpl.button.substitute({'img-src':operator_option.icon}));
		(function() {
			var _name = operator_option.name;
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
			operator_el.on('touchstart', function(e) {
				e.preventDefault();
				e.stopPropagation();
				var _thisRef = this;
				_timeout = setTimeout(function() {
					_clone = $(operator_el).clone();
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
			operator_el.on('touchmove', function(e) {
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
			operator_el.on('touchend', function(e) {
				clearTimeout(_timeout);
				if (_in_drag) {
					e.preventDefault();
					e.stopPropagation();
					var touchX = e.originalEvent.changedTouches[0].pageX;
					var touchY = e.originalEvent.changedTouches[0].pageY;
					var operator_list_el = $('#operator-list-container');
					var operator_list_el_spec = operator_list_el.offset();
					operator_list_el_spec.right = operator_list_el_spec.left + operator_list_el.outerWidth();
					operator_list_el_spec.bottom = operator_list_el_spec.top + operator_list_el.outerHeight();
					if (touchX > operator_list_el_spec.left &&
						touchX < operator_list_el_spec.right &&
						touchY > operator_list_el_spec.top &&
						touchY < operator_list_el_spec.bottom) {
						var _operator = new Operator(_name, {
							dialogContainer: '#operator-config-form',
							arrowContainer: '#operator-config-dialog-arrow-container'
						});
						Operator.addOperator('#operator-list-container', operators, _operator, function() {
							_operator.configDialog(true);
						});
					}
					_clone.remove();
				}
			});
		})();
		operator_el.removeClass('button-inline');
		$('#top-drawer-list').append(operator_el);
	}
}

function initGlobal() {
	addSensorGroup();
	$(document).on('hashChange', function(){
		var hash = this.location.hash.replace(/#/,'');
		var _step = findStepByHash(hash) || steps[0];
		initStep(_step);
	});
	collapseFormArrow();
	headerNavButton();
	gestureRecognize();
	// $(document).on('touchstart', function(e) {
	// 	if (document.body.scrollTop >= $(document).height() - $(window).height()) {
	// 		$(document).data('touchstarty', e.originalEvent.touches[0].pageY);
	// 		$(document).on('touchmove.jumpStep', function(e){
	// 			if (e.originalEvent.touches[0].pageY + JUMP_STEP_DISTANCE < $(document).data('touchstarty')) {
	// 				$(document).off('touchmove.jumpStep');
	// 				if (currentStep < MAX_STEP) {
	// 					initStep(currentStep + 1);
	// 				}
	// 			} else if (e.originalEvent.touches[0].pageY - JUMP_STEP_DISTANCE > $(document).data('touchstarty')) {
	// 				$(document).off('touchmove.jumpStep');
	// 				if (currentStep > 0) {
	// 					initStep(currentStep - 1);
	// 				}
	// 			}
	// 		});
	// 	}
	// });
}
function initStep(step) {
	document.location.hash = step.hash;
	$('#title').html(step.title + ' - Smart Agent')
	for (var i = 0; i < steps.length; i++) {
		if (steps[i] === step)
			$('#' + steps[i].prefix + '-container').slideDown(200);
		else
			$('#' + steps[i].prefix + '-container').slideUp(200);
	}
	$('.action-nav').show();
	if (step.name === "sensors") 
		initSensors();
	else if (step.name === "operators")
		initOperators();
	else if (step.name === "configurations")
		initConfigurations();
	else if (step.name === "confirmation")
		initConfirmation();
	else if (step.name === "completion")
		initCompletion();
	else 
		initSensors();
}
function initSensors() {
	$('#add-sensor-group-button').slideDown(200);
	$('#top-drawer').slideDown(200);
	$('#nav-prev').hide();

	$('#add-sensor-group-button').drag({
		opacity: 0.5,
		touch: true,
		direction: 'vertical',
		mouseupCallback: function(e) {
			e = e.originalEvent.changedTouches[0];
			var elSpec = $('#add-sensor-group-button').offset();
			elSpec.right = $('#add-sensor-group-button').outerWidth() + elSpec.left;
			elSpec.bottom = $('#add-sensor-group-button').outerHeight() + elSpec.top;
			if (e.pageX < elSpec.left || e.pageX > elSpec.right || e.pageY < elSpec.top || e.pageY > elSpec.bottom) {
				addSensorGroup();
			}
		}
	});
	drawerSensors();
}
function initOperators() {
	$('#add-sensor-group-button').slideUp(200);
	$('#top-drawer').slideDown(200);
	drawerOperators();
}
function initConfigurations() {
	$('#add-sensor-group-button').slideUp(200);
	$('#top-drawer').slideUp(200);
	AppConfiguration.initConfigurationList('#configuration-list', configurations);
}
function initConfirmation() {
	$('#nav-next').hide();
	$('#add-sensor-group-button').slideUp(200);
	$('#top-drawer').slideUp(200);
	AppConfiguration.initConfigurationList('#configuration-list', configurations);
}
function initCompletion() {
	$('.action-nav').hide();
	$('#add-sensor-group-button').slideUp(200);
	$('#top-drawer').slideUp(200);
}

$(document).ready(function(){
	initGlobal();
	$(document).trigger('hashChange');
});


$(window).click(function(e) {
	console.log(e.pageX, e.pageY);
});