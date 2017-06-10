var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var User = require('./user');
var config = require("../config");

module.exports = function (req, res) {
    // find the user
    // console.log("authenticate line 40 req.body.customer_name=", req.body.customer_name);
    User.findOne({
        username: req.body.customer_name
    }, function (user) {
        // console.log("authenticate, 44, user=", user);
        if (!user) {
            res.status(401).json({success: false, message: "AuthN failed. User/PW combo not found"});
        } else if (user) {
            // check if password matches
            if (user.password != req.body.customer_pw) {
                res.status(401).json({success:false, message: "AuthN failed. User/PW combo not found"});
            } else {
                // console.log("authenticate, 51, user", user);
                var token = jwt.sign({
                    // username: user.customer_name,
                    user_id: user.id
                }, config.secret,  {
                    expiresIn: 86400
                });
                // console.log("authenticate, 58, token=", token);
                res.json({
                    success: true,
                    token: token
                });

            }
        }
    });
};