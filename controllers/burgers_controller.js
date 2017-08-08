// ROUTER FILE TO SERVER CONNECTIONS: [5]
var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");



// GET "READ" REQUEST =================================
router.get("/", function(req, res) {
  burger.all(['id', 'burger_name', 'devoured'], function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST "CREATE" REQUEST ================================
router.post("/", function(req, res) {

  let burgerString = "'" + req.body.burger_name + "'";

  burger.create([
    "burger_name", "devoured"
    ], [
      burgerString, false
    ], function() {

    res.send({redirect: "/"});
    console.log("shit's working yo");
  });
  // console.log("Post working");
  // console.log(req.body.burger_name);
});



// UPDATE REQUEST ==============================
router.put("/:id", function(req, res) {
  burger.update('id', req.params.id, 'devoured', true, function() {
  
    res.redirect('/');
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





