// THIS FILE IS USED TO START THE SERVER: [1]

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


//STATIC ROUTE
app.use(express.static('public'));

//OVERRIDES UPDATE/DELETE METHODS
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({extended: false}));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Connection Successful");
  console.log("Listening On PORT: " + PORT);
});

// THIS METHOD ALLOWS OTHER FILES TO USE/CONNECT TO SERVER AND WILL
// ALLOW THEM TO USE ANY METHODS OF THE "app" OBJECT. Ex: app.createConnection
module.exports = app;