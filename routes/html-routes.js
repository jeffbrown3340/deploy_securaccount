// html-routes.js - routing to HTML
var path = require("path");
module.exports = function(app) {
  //main page/initial load (start with login.html, change to splash as project progresses)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index/login.html"));
  });

};
