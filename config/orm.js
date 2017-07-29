// MYSQL FRAMWORK FOR "C.R.U.D." FUNCITONS: [3]

// Import MySQL connection
var connection = require("../config/connection.js");




// ORM OBJECT FOR OUR SQL FUNCTIONS
var orm = {
		all: function(table, cols, callback) {
			var queryString = "SELECT * FROM " + table;
			connection.query(queryString, function(err, result){
				if (err) throw err;
				callback(result);
			});
		},
		create: function(table, cols, vals, callback) {
			var query = "INSERT INTO "
			var queryString = "INSERT INTO " + table;

		},
		delete: function(table, devoured, callback) {

		}
};



// EXPORTS ORM FOR USE IN BURGER.JS
module.exports = orm;