//Inside the burgers_controller.js file, import the following: express, router, burger.js (models)
const express = require("express");
const router = express.Router();
const burger = require("../models/burger")


//Create the router for the app, and export the router at the end of your file

//GET
router.get("/", function(req, res) {
    burger.all(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  //POST
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  //PUT
  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  


//Export routes for server.js to use
module.exports = router;