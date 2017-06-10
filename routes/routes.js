var db = require("../models");
var path = require("path");
var authorize = require('../auth-helpers/authorize');
var authenticate = require('../auth-helpers/authenticate');
module.exports = function(app) {
  //main page/initial load (start with login.html, change to splash as project progresses)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.post("/authenticate", authenticate);

  app.post("/signup", function(req, res) {
    // customer trying to sign up, so check for username in db.Customer
    db.Customer.findOne({
      where: {
        customer_name: req.body.customer_name
      }
    }).then(function(dbCustomer){
      // if a customer exists, dbCustomer is (not null)/true condition, which is a signup failure
      // sign ups must not use an existing username
      // otherwise create the new user
      if (dbCustomer) {
        res.send("signup-failure");
      } else {
        db.Customer.create({
          customer_name: req.body.customer_name,
          customer_pw: req.body.customer_pw
        }).then(res.send("signup-success"))
    	    .catch(function(err){
          console.log("app.js post signup error");
          console.log(err);
          res.send("signup-failure");
    	  });
      }
    });
  });

  app.get("/records", authorize, function(req, res){
    db.Record.findAll({
      where: {customer_id: req.token.user_id},
      include: [db.PayTo, db.PayFrom, db.Customer]      
    }).then(function(result){
      res.render('summary', {summary: result});
    });
  });
};
