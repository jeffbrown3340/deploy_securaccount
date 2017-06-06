// Node/Express server

// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

// Express
var app = express();
var PORT = process.env.PORT || 8080;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// static directory
app.use(express.static("./public"));

// routes
require("./routes/html-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
// require("./routes/author-api-routes.js")(app);

// db.sequelize.sync({force: true}).then(function(){
db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});