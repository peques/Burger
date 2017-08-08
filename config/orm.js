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
			// var query = "INSERT INTO "
			var queryString = "INSERT INTO " + table;

			queryString += " (";
		    queryString += cols.toString();
		    queryString += ") ";
		    queryString += "VALUES (";
		    queryString += vals.toString();
		    queryString += ") ";

    		console.log(queryString);

		    connection.query(queryString, vals, function(err, result) {
		      if (err) {
		        throw err;
		      } else {
		      	callback(result);
		      }

		  	});
		},
		update: function(table, conditionCol, condition, newValueCol, newValue, callback){
			//UPDATE burgers SET devoured = true WHERE id = 8;
			var queryString = "UPDATE " + table + " SET " + newValueCol + " = " + newValue + " WHERE " + conditionCol + " = " + condition + "; ";
			console.log(queryString);

			connection.query(queryString, function(err, result){
				if (err) {
					throw err;
				} else {
					callback(result);
				}
			})
		}
		// delete: function(table, devoured, callback) {

		// }
};



// EXPORTS ORM FOR USE IN BURGER.JS
module.exports = orm;


