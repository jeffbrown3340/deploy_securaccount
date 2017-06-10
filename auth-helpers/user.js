var db = require("../models");
module.exports = {
    findOne: function (user, callback) {
        console.log("users.js line 4 user =", user);
        db.Customer.findOne({
          where: {
            customer_name: user.username
          }
        }).then(function(dbCustomer){
            console.log("users.js line 10 dbCustomer.customer_name=", dbCustomer.customer_name);
            console.log("users.js line 11 user.username=", user.username);
            if (user.username === dbCustomer.customer_name) {
                var dbUser = {
                    // username: dbCustomer.customer_name,
                    password: dbCustomer.customer_pw,
                    id: dbCustomer.id
                }
            } else {
                var dbUser = {
                    // username: "",
                    password: "",
                    id: ""
                };
            }
            callback(dbUser);
        });
    }
}