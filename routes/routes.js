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

 // jlb 6-8-2017-0232 begin INCOMPLETE block
 //  app.post("/authenticate", function(req, res) {
 //    // customer trying to login, so try to match username and PW
 //    db.Customer.findOne({
 //      where: {
 //          customer_name: req.body.customer_name,
 //          customer_pw: req.body.customer_pw
 //      }
 //    }).then(function(dbCustomer){
 //      // if query is successful, dbCustomer is not null
 //      // turn this into the true condition
 //      // with the NOT operator
 //      // if successful, authenticate and proceed
 //      if (!dbCustomer) {
 //        res.send("login-failure");
 //      } else {
 //        db.Customer.create({
 //          customer_name: req.body.customer_name,
 //          customer_pw: req.body.customer_pw
 //        }).then(res.send("login-success"))
 //          .catch(function(err){
 //          console.log("app.js post login error");
 //          console.log(err);
 //          res.send("login-failure");
 //        });
 //      }
 //    });
 // });
// jlb 6-8-2017-0232 end INCOMPLETE block
 


  app.get("/records", function(req, res){
    db.Record.findAll({
      where: {customer_id: req.token.userId},
      include: [db.PayTo, db.PayFrom, db.Customer]      
    }).then(function(result){
      res.json(result);
    });
  });
};
