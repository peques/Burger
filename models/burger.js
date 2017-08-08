// ACCEPTS ORM OBJECTS, CALLS ORM FUNCTIONS TO MANIPULATE MYSQL DATA: [4]
var orm = require("../config/orm.js");

var burger = {
	all: function(cols, callback) {
		orm.all('burgers', cols, function(result){
			callback(result);
		});
	},
	create: function(cols, vals, callback) {
		orm.create('burgers', cols, vals, function(result){
		// 	callback(result);
			callback(result);
		 });
	},
	update: function(conditionCol, condition, newValueCol, newValue, callback) {
		orm.update('burgers', conditionCol, condition, newValueCol, newValue, function(result) {
			callback(result);
		});
	}
};



// EXPORT FUNCTIONS FOR THE BURGERS_CONTROLLER.JS
module.exports = burger;

