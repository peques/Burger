// ROUTER FILE TO SERVER CONNECTIONS: [5]
var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");



// GET "READ" REQUEST =================================
router.get("/", function(req, res) {
  burger.all(['id', 'burger_name', 'devoured'], function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST "CREATE" REQUEST ================================
router.post("/", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function() {
    res.redirect("/");
  });
});


// DELETE REQUEST ==============================
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});




// Export routes for server.js to use.
module.exports = router;


