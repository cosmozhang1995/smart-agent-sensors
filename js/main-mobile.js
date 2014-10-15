// ===================================================================
// View defines
// ===================================================================

TextField = function(opts) {
	opts = opts || {};
	this.name = opts.name;
	this.displayName = opts.displayName;
	this.el = $(
		'<div class="form-group">\
			<label for="text-field-' + name + '">' + this.displayName + '</label>\
			<input type="text" class="form-control" id="text-field-' + name + '" placeholder="' + this.displayName + '">\
		</div>');
	this.input = this.el.find('input');
	this.getVal = function() {
		return this.input.val();
	};
	this.setVal = function(val) {
		this.input.val(val);
		this.input.attr('value', val);
	};
};
EmailField = function(opts) {
	opts = opts || {};
	this.name = opts.name;
	this.displayName = opts.displayName;
	this.el = $(
		'<div class="form-group">\
			<label for="email-field-' + name + '">' + this.displayName + '</label>\
			<input type="email" class="form-control" id="email-field-' + name + '" placeholder="' + this.displayName + '">\
		</div>');
	this.input = this.el.find('input');
	this.getVal = function() {
		return this.input.val();
	};
	this.setVal = function(val) {
		this.input.val(val);
		this.input.attr('value', val);
	};
};
TextBoxField = function(opts) {
	opts = opts || {};
	opts.rows = opts.rows || 3;
	this.name = opts.name;
	this.displayName = opts.displayName;
	this.el = $(
		'<div class="form-group">\
			<label for="text-box-field-' + name + '">' + this.displayName + '</label>\
			<textarea type="text" class="form-control" rows="3" id="text-box-field-' + name + '" placeholder="' + this.displayName + '"></textarea>\
		</div>');
	this.input = this.el.find('textarea');
	this.getVal = function() {
		return this.input.val();
	};
	this.setVal = function(val) {
		this.input.val(val);
		this.input.attr('value', val);
		this.input.html(val);
	};
};

// ===================================================================
// Datas
// ===================================================================

operator_repository = [];
operator_repository_mock = [
	{
		name: "email",
		displayName: "E-mail",
		icon: "img/operator/mail.png",
		fields: [
			{
				name: "emailto",
				displayName: "接收 E-mail 地址",
				viewClass: EmailField,
				defaultValue: ""
			},
			{
				name: "content",
				displayName: "邮件内容",
				viewClass: TextBoxField,
				defaultValue: ""
			}
		]
	}
];
function getOperatorRepository() {
	return operator_repository_mock;
};
operator_repository = getOperatorRepository();

sensor_repository = [];
sensor_repository_mock = [
	{
		name: "bbs",
		displayName: "BBS",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	}
	,
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor1",
		displayName: "传感器 1",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	},
	{
		name: "sensor2",
		displayName: "传感器 2",
		icon: "img/sensor/bbs.png",
		fields: [
			{
				name: "title",
				displayName: "帖子名",
				viewClass: TextField,
				defaultValue: ""
			},
			{
				name: "keywords",
				displayName: "关键字",
				viewClass: TextField,
				defaultValue: ""
			}
		]
	}
];
function getSensorRepository() {
	return sensor_repository_mock;
};
sensor_repository = getSensorRepository();

app_configuration_options = [
	{
		name: "name",
		displayName: "应用名称",
		viewClass: TextField,
		defaultValue: ""
	}
];

// ===================================================================
// Class defines
// ===================================================================

/* Modal define */
(function() {
	Modal = function(html, opts) {
	
		var thisRef = this;
		this.options = {
			title: null,
			primary: null,
			secondary: null,
			primaryListener: function(e){
				thisRef.destroy();
			},
			secondaryListener: function(e){
				thisRef.destroy();
			}
		};
		$.extend(this.options, opts || {});
	
		this._init = function() {
			if ((typeof html !== "string") && !(html instanceof jQuery) && !(html instanceof Element))
				throw "Argument html is illegal!";
			if (Modal && Modal.modal && (Modal.modal instanceof Modal)) Modal.modal.destroy();
			Modal.modal = this;
			this.el = $(Modal.tpl.modal);
			this.content = this.el.find('.modal-content');
			this.header = null;
			this.body = null;
			this.footer = null;
	
			if (this.options.title) {
				this.header = $(Modal.tpl.header.substitute({'title':this.options.title}));
				this.content.append(this.header);
			}
			this.body = $(Modal.tpl.body);
			if (typeof html === "string")
				this.body.html(html);
			else if (html instanceof jQuery)
				this.body.append(html);
			else if (html instanceof Element)
				this.body.append($(html)); 
			this.content.append(this.body);
			if (this.options.primary || this.options.secondary) {
				this.footer = $(Modal.tpl.footer);
				if (this.options.secondary) {
					this.secondaryButton = $(Modal.tpl.secondaryButton.substitute({'text':this.options.secondary}));
					this.secondaryButton.click(this.options.secondaryListener);
					this.footer.append(this.secondaryButton);
				}
				if (this.options.primary) {
					this.primaryButton = $(Modal.tpl.primaryButton.substitute({'text':this.options.primary}));
					this.primaryButton.click(this.options.primaryListener);
					this.footer.append(this.primaryButton);
				}
				this.content.append(this.footer);
			}
	
			this._bind();
		};
	
		this._bind = function() {
			this.el.appendTo("body");
		};
		this._unbind = function() {
			this.el.remove();
		}
	
		this.show = function(callback) {
			if (typeof callback === "function") {
				this.el.one("modal.bs.shown", callback);
			}
			this.el.modal("show");
		};
		this.hide = function(callback) {
			if (typeof callback === "function") {
				this.el.one("modal.bs.hidden", callback);
			}
			this.el.modal("hide");
		};
	
		this.destroy = function() {
			this.hide(function() {
				thisRef._unbind();
			});
		};
	
		this._init();
	};
	Modal.tpl = {
		modal:
			'<div class="modal fade" id="default-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
				<div class="modal-dialog">\
					<div class="modal-content">\
					</div>\
				</div>\
			</div>',
		header: 
			'<div class="modal-header">\
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
				<h4 class="modal-title" id="myModalLabel">#{title}</h4>\
			</div>',
		body:
			'<div class="modal-body">\
			</div>',
		footer:
			'<div class="modal-footer">\
			</div>',
		primaryButton:
			'<button type="button" class="btn btn-primary">#{text}</button>',
		secondaryButton:
			'<button type="button" class="btn btn-default">#{text}</button>'
	};
})();

/* Sensor class define */
(function() {
	Sensor = function(name) {
		var thisRef = this;
		this.name = name;
		this._init = function() {
			this.sensor_obj = sensor_repository.findBy('name', this.name);
			if (!this.sensor_obj)
				throw "Cannot find sensor '" + this.name + "' in repository";
			this.configs = {};
			for (var i = 0; i < this.sensor_obj.fields.length; i++) {
				this.configs[this.sensor_obj.fields[i].name] = this.sensor_obj.fields[i].defaultValue;
			}
			this.el = $(Sensor.tpl.button.substitute({
				"img-src":this.sensor_obj.icon
			}));
			this.el.data("sensor", this);

			this._bind();
		};

		this._bind = function() {
			this.el.on('click.' + Sensor.spacename, function(e){
				thisRef.configDialog();
			});
		};

		this.configDialog = function(force) {
			if (!this.group.formContainerEl.is(':visible') || force === true) {
				var fields = [];
				var dialog = $(Sensor.tpl.sensorConfigDialog.substitute({
					"name": this.sensor_obj.name,
					"displayName": this.sensor_obj.displayName,
					"img-src": this.sensor_obj.icon
				}));
				for (var i = 0; i < this.sensor_obj.fields.length; i++) {
					var theFieldOption = this.sensor_obj.fields[i];
					var theField = new theFieldOption.viewClass({
						name: theFieldOption.name,
						displayName: theFieldOption.displayName
					});
					if (typeof this.configs[theFieldOption.name] !== "undefined")
						theField.setVal(this.configs[theFieldOption.name]);
					else if (typeof theFieldOption.defaultValue !== "undefined")
						theField.setVal(theFieldOption.defaultValue);
					fields.push(theField);
					theField.el.appendTo(dialog);
				}
				this.group.formEl.html('');
				dialog.appendTo(this.group.formEl);
				this.group.formContainerEl.find('.collapse-form-arrow, .collapse-form-arrow-mask').css('left', (this.el.offset().left + this.el.outerWidth()/2) + 'px');
				this.group.formContainerEl.data('sensor', this);
				this.group.formContainerEl.data('fields', fields);
				this.group.formContainerEl.slideDown(200, function(){
					var documentClickFunction = function(e) {
						if ($(e.target).hasClass('.collapse-form-container') || $(e.target).parents('.collapse-form-container').length > 0) {
							$(document).one('click.formSlide', documentClickFunction);
						} else {
							e.preventDefault();
							e.stopPropagation();
							thisRef.group.formContainerEl.each(function() {
								var _sensor = $(this).data('sensor');
								var _fields = $(this).data('fields');
								if (_sensor && _fields) {
									for (var j = 0; j < _fields.length; j++) {
										_sensor.configs[_fields[j].name] = _fields[j].getVal();
									}
								}
							});
							thisRef.group.formContainerEl.slideUp(200);
						}
					};
					$(document).one('click.formSlide', documentClickFunction);
				});
			}
		};

		this.destroy = function() {
			if (this.group)
				this.group.removeSensor(this);
		};
	
		this._init();
	};
	Sensor.tpl = {
		button:
			'<div class="button button-inline sensor">\
				<div class="button-icon sensor-icon">\
					<img src="#{img-src}"/>\
				</div>\
			</div>',
		sensorIcon:
			'<div class="sensor-icon" data-name="#{name}" data-toggle="tooltip" data-placement="bottom" title="#{displayName}">\
				<img src="#{img-src}"/>\
			</div>',
		sensorTitleBar:
			'<div class="title-bar">#{name}</div>',
		addSensorDialog:
			'<div class="add-sensor">\
			</div>',
		sensorConfigDialog:
			'<div class="sensor-config-dialog">\
				<div class="sensor-config-dialog-header">\
					<h4>#{displayName}</h4>\
				</div>\
			</div>'
	};
	Sensor.spacename = "senser";
})();

/* Operator class define */
(function() {
	Operator = function(name) {
		var thisRef = this;
		this.name = name;
		this._init = function() {
			this.operator_obj = operator_repository.findBy('name', this.name);
			if (!this.operator_obj)
				throw "Cannot find operator '" + this.name + "' in repository";
			this.configs = {};
			for (var i = 0; i < this.operator_obj.fields.length; i++) {
				this.configs[this.operator_obj.fields[i].name] = this.operator_obj.fields[i].defaultValue;
			}
			this.el = $(Operator.tpl.button.substitute({
				"img-src":this.operator_obj.icon,
				"displayName":this.operator_obj.displayName
			}));
			this.el.tooltip();
			this.el.data("operator", this);

			this._bind();
		};

		this._bind = function() {
			this.el.on('click.' + Operator.spacename, function(e){
				thisRef.configDialog();
			});
			this.el.drag({
				opacity: 0.5,
				mousemoveCallback: function(e) {
					var trashIconSize = 20;
					var trashIconDistance = 1;

					var elSpec = thisRef.el.parents('.operator-list').offset();
					elSpec.right = thisRef.el.parents('.operator-list').outerWidth() + elSpec.left;
					elSpec.bottom = thisRef.el.parents('.operator-list').outerHeight() + elSpec.top;
					if (e.pageX < elSpec.left || e.pageX > elSpec.right || e.pageY < elSpec.top || e.pageY > elSpec.bottom) {
						$('#drag-trash-image').remove();
						var img = $('<img id="drag-trash-image" src="img/cancel_deny.png" style="position:absolute; top:' + (e.pageY + trashIconDistance) + 'px; left:' + (e.pageX - (trashIconSize + trashIconDistance)) + 'px; width:' + trashIconSize + 'px; height:' + trashIconSize + 'px; z-index:999;" />');
						img.appendTo("body");
					} else {
						$('#drag-trash-image').remove();
					}
				},
				mouseupCallback: function(e) {
					$('#drag-trash-image').remove();
					var elSpec = thisRef.el.parents('.operator-list').offset();
					elSpec.right = thisRef.el.outerWidth() + elSpec.left;
					elSpec.bottom = thisRef.el.outerHeight() + elSpec.top;
					if (e.pageX < elSpec.left || e.pageX > elSpec.right || e.pageY < elSpec.top || e.pageY > elSpec.bottom) {
						thisRef.destroy();
					}
				}
			});
		};

		this.configDialog = function() {
			var fields = [];
			var dialog = $(Operator.tpl.operatorConfigDialog.substitute({
				"name": this.operator_obj.name,
				"img-src": this.operator_obj.icon
			}));
			for (var i = 0; i < this.operator_obj.fields.length; i++) {
				var theFieldOption = this.operator_obj.fields[i];
				var theField = new theFieldOption.viewClass({
					name: theFieldOption.name,
					displayName: theFieldOption.displayName
				});
				if (typeof this.configs[theFieldOption.name] !== "undefined")
					theField.setVal(this.configs[theFieldOption.name]);
				else if (typeof theFieldOption.defaultValue !== "undefined")
					theField.setVal(theFieldOption.defaultValue);
				fields.push(theField);
				theField.el.appendTo(dialog);
			}
			this.configOperatorModal = new Modal(dialog, {
				title: this.operator_obj.displayName,
				primary: "确定",
				secondary: "取消",
				primaryListener: function() {
					thisRef.configOperatorModal.destroy();
					for (var i = 0; i < fields.length; i++) {
						var theField = fields[i];
						thisRef.configs[theField.name] = theField.getVal();
					}
				}
			});
			this.configOperatorModal.show();
		};

		this.destroy = function() {
			this.el.hide(200, function() {
				if (thisRef.belongToList && thisRef.belongToList instanceof Array) {
					for (var i = thisRef.belongToList.length - 1; i >= 0; i--) {
						if (thisRef.belongToList[i] === thisRef) 
							thisRef.belongToList.splice(i, 1);
					}
				}
				thisRef.el.remove();
			});
		};
	
		this._init();
	};
	Operator.tpl = {
		button:
			'<button type="button" class="btn btn-icon btn-default operator" data-toggle="tooltip" data-placement="bottom" title="#{displayName}">\
				<div class="btn-content">\
					<img src="#{img-src}" />\
				</div>\
			</button>',
		operatorIcon:
			'<div class="operator-icon" data-name="#{name}" data-toggle="tooltip" data-placement="bottom" title="#{displayName}">\
				<img src="#{img-src}"/>\
			</div>',
		operatorTitleBar:
			'<div class="title-bar">#{name}</div>',
		addOperatorDialog:
			'<div class="add-operator">\
			</div>',
		operatorConfigDialog:
			'<div class="add-operator">\
				<div class="title-bar">#{name}</div>\
				<div class="operator-icon operator-icon-static">\
					<img src="#{img-src}"/>\
				</div>\
			</div>'
	};
	Operator.spacename = "operator";

	Operator.addOperator = function(to_el, list, item) {
		if (!(to_el instanceof jQuery) && !(to_el instanceof Element) && (typeof to_el !== "string"))
			throw "to_el argument must be an instance of jQuery, a jQuery selector or an instanceof Element";
		to_el = $(to_el);
		if (!(list instanceof Array))
			throw "list argument must be an instance of Array";
		if (!(item instanceof Operator))
			throw "item argument must be an instance of Operator";
		item.belongToList = list;
		list.push(item);
		item.el.css('display', 'none');
		if (to_el.children('.btn-add').length > 0)
			to_el.children('.btn-add').before(item.el);
		else
			item.el.appendTo(to_el);
		item.el.show(200);
	};
	Operator.addOperatorDialog = function(to_el, list) {
		var dialog = $(Operator.tpl.addOperatorDialog);
		var title_bar = null;
		var form = null;
		var operator = null;
		var fields = [];
		myfields = fields;
		for (var i = 0; i < operator_repository.length; i++) {
			var operator_obj = operator_repository[i];
			var operator_icon = $(Operator.tpl.operatorIcon.substitute({
				"name": operator_obj.name,
				"displayName": operator_obj.displayName,
				"img-src": operator_obj.icon
			}));
			operator_icon.tooltip();
			operator_icon.one('click', function(e) {
				var offset = $(this).offset();
				var parent_offset = $(this).parent().offset();
				$(this).css('top', (offset.top - parent_offset.top) + 'px');
				$(this).css('left', (offset.left - parent_offset.left) + 'px');
				$(this).addClass('operator-icon-static');
				$(this).tooltip('destroy');
				brotherNodes = $(this).parent().find('.operator-icon');
				for (var j = brotherNodes.length - 1; j >= 0; j--) {
					if ($(brotherNodes[j]).data('name') !== $(this).data('name')) {
						$(brotherNodes[j]).fadeOut(200, function(){
							$(brotherNodes[j]).remove();
						});
					}
				}
				$(this).animate({
					'top': '0px',
					'left': '0px'
				}, 200, function() {
					operator = new Operator($(this).data('name'));
					title_bar = $(Operator.tpl.operatorTitleBar.substitute({name:operator.operator_obj.displayName}));
					dialog.append(title_bar);
					form = $('<div></div>');
					for (var j = 0; j < operator.operator_obj.fields.length; j++) {
						var theFieldOption = operator.operator_obj.fields[j];
						var theField = new theFieldOption.viewClass({
							name: theFieldOption.name,
							displayName: theFieldOption.displayName
						});
						if (typeof theFieldOption.defaultValue !== "undefined")
							theField.setVal(theFieldOption.default);
						fields.push(theField);
						theField.el.appendTo(dialog);
					}
				});
			});
			operator_icon.appendTo(dialog);
		}
		this.addOperatorModal = new Modal(dialog, {
			title: "添加执行器",
			primary: "添加",
			secondary: "取消",
			primaryListener: function() {
				Operator.addOperatorModal.destroy();
				for (var i = 0; i < fields.length; i++) {
					var theField = fields[i];
					operator.configs[theField.name] = theField.getVal();
				}
				Operator.addOperator(to_el, list, operator);
			}
		});
		this.addOperatorModal.show();
	};
})();

/* SensorGroup class define */
(function() {
	SensorGroup = function() {
	
		var thisRef = this;
	
		this.sensorList = [];
	
		this._init = function() {
			this.el = $(SensorGroup.tpl.panel);
			this.el.data("sensorGroup", this);
			this.sensorListEl = this.el.find('.sensor-list');
			this.formContainerEl = this.el.find('.collapse-form-container');
			this.formEl = this.el.find('.collapse-form');
	
			this._bind();
		};
	
		this._bind = function() {
		};
	
		this.addSensor = function(sensor) {
			sensor.group = this;
			this.sensorList.push(sensor);
			// this.addButton.before(sensor.el);
			this.sensorListEl.append(sensor.el);
		};
		this.removeSensor = function(sensor) {
			for (var i = this.sensorList.length - 1; i >= 0; i--) {
				if (this.sensorList[i] === sensor) {
					sensor.el.hide(200, function() {
						sensor.el.remove();
						thisRef.sensorList.splice(i, 1);
					});
				}
			}
		};
		this.removeSensorAtIndex = function(idx) {
			var sensor = this.sensorList[idx];
			if (sensor && (sensor instanceof Sensor)) {
				sensor.el.remove();
				this.sensorList.splice(idx, 1);
			}
		};

		this.destroy = function() {
			this.el.hide(200, function() {
				if (thisRef.belongToList && thisRef.belongToList instanceof Array) {
					for (var i = thisRef.belongToList.length - 1; i >= 0; i--) {
						if (thisRef.belongToList[i] === thisRef) 
							thisRef.belongToList.splice(i, 1);
					}
				}
				thisRef.el.remove();
			});
		};
	
		this._init();
	};
	SensorGroup.tpl = {
		panel:
			'<div class="sensor-group">\
				<div class="sensor-list-container">\
					<div class="sensor-list">\
					</div>\
				</div>\
				<div class="collapse-form-container">\
					<div class="collapse-form-arrow"></div>\
					<div class="collapse-form"></div>\
					<div class="collapse-form-arrow-mask"></div>\
				</div>\
			</div>'
	};
	SensorGroup.spacename = "senser-group";

	SensorGroup.addSensorGroup = function(to_el, list, item, callback) {
		if (!(to_el instanceof jQuery) && !(to_el instanceof Element) && (typeof to_el !== "string"))
			throw "to_el argument must be an instance of jQuery, a jQuery selector or an instanceof Element";
		to_el = $(to_el);
		if (!(list instanceof Array))
			throw "list argument must be an instance of Array";
		if (!(item instanceof SensorGroup))
			throw "item argument must be an instance of SensorGroup";
		item.belongToList = list;
		list.push(item);
		item.el.css('display', 'none');
		if (to_el.children('.btn-add').length > 0)
			to_el.children('.btn-add').before(item.el);
		else
			item.el.appendTo(to_el);
		item.el.show(200, callback);
	};
})();

// ===================================================================
// Configurations initialize
// ===================================================================

(function () {
	AppConfiguration = function(name) {
		this.name = name;

		this._init = function() {
			this.configOption = app_configuration_options.findBy('name', name);
			if (!this.configOption)
				throw "Cannot find configuration '" + this.name + "' in repository"
			this.field = new this.configOption.viewClass({
				name: this.configOption.name,
				displayName: this.configOption.displayName
			});
			if (typeof this.configOption.defaultValue !== "undefined")
				this.field.setVal(this.configOption.default);
		};

		this.destroy = function() {
			if (this.belongToList && this.belongToList instanceof Array) {
				for (var i = this.belongToList.length - 1; i >= 0; i--) {
					if (this.belongToList[i] === this) 
						this.belongToList.splice(i, 1);
				}
			}
			this.field.el.remove();
		};

		this._init();
	};

	AppConfiguration.addConfiguration = function(to_el, list, item) {
		if (!(to_el instanceof jQuery) && !(to_el instanceof Element) && (typeof to_el !== "string"))
			throw "to_el argument must be an instance of jQuery, a jQuery selector or an instanceof Element";
		to_el = $(to_el);
		if (!(list instanceof Array))
			throw "list argument must be an instance of Array";
		if (!(item instanceof AppConfiguration))
			throw "item argument must be an instance of AppConfiguration";
		item.belongToList = list;
		list.push(item);
		if (to_el.children('.btn-add').length > 0)
			to_el.children('.btn-add').before(item.el);
		else
			item.field.el.appendTo(to_el);
	};
	AppConfiguration.initConfigurationList = function(to_el, list) {
		for (var i = list.length - 1; i >= 0; i--) {
			list.pop().destroy();
		};
		for (var i = 0; i < app_configuration_options.length; i++) {
			var config = new AppConfiguration(app_configuration_options[i].name);
			AppConfiguration.addConfiguration(to_el, list, config);
		};
	};
})();