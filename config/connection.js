// THIS FILE ESTABLISHES CONNECTION TO MYSQL: [2]
var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  	console.log("Connected ID: " + connection.threadId);
});



// EXPORT CONNECTION TO ORM.JS
module.exports = connection;
