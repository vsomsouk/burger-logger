const express = require ("express");

const PORT = process.env.PORT || 8080;

const app = express();

//handlebars
cont exphbs = require("./controllers/burgers_controllers.js");










app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });
  