module.exports = function(opts) {

	var facade = new function(){};

	var hours = {am: [12,1,2,3,4,5,6,7,8,9,10,11,12], pm: [12,1,2,3,4,5,6,7,8,9,10,11,12]};
	var min;
	var merid;

	for(merid in hours) {
		hours[merid].forEach(function(hour) {
			for(min = 0; min < 60; min++) {
				facade[merid + hour + "_" + min] = (function(mi, h, me) {
					return function() {
						this.minute = mi;
						this.hour = h;
						this.meridian = me;
						
						return this;
					}
				})(min, hour, merid);
			}
		});
	}
	
	facade.translate = function(toL) {
		return ({
			french 	: "Samedi",
			spanish	: "Sábado",
			german  : "Samstag"
		})[toL] || null;
	}
	
	return facade;
};