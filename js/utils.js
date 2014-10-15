// ===================================================================
// System function extension
// ===================================================================

Array.prototype.contains = function(ele) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] === ele) return true;
	}
	return false;
};
Array.prototype.clear = function() {
	var cnt = this.length;
	this.splice(0, cnt);
};
Array.prototype.findBy = function(key, val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i][key] === val) return this[i];
	}
	return null;
};

String.prototype.substitute = function(dict, sign) {
	var substitution = this;
	if (typeof sign !== "string") 
		sign = "#";
	for (var key in dict) {
		substitution = substitution.replace(new RegExp( sign + '{' + key + '}', 'g'), dict[key])
	}
	return substitution;
};