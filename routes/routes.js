var db = require("../models");
var path = require("path");
module.exports = function(app) {
  //main page/initial load (start with login.html, change to splash as project progresses)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // jlb 6-6-2017 1452 from wheatley-0604
  app.post("/customers", function(req, res) {
    db.Customer.create({
      customer_name: req.body.customer_name,
      customer_pw: req.body.customer_pw
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
	  }).catch(function(err){
      console.log("app customers error");
      res.json(err);
	  });
  });
};
