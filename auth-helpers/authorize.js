var jwt = require('jsonwebtoken');
var config = require("../config");
// do we need a require for user? it was present in node-token-authorize

module.exports = function (req, res, next) {
    var token = req.headers.authorization;

    // decode token
    if (token) {
    	jwt.verify(token, config.secret, function(err, decoded){
    		if(err) {
    			return res.status(403).json({
    				success: false,
    				message: "Failed to authn token"
    			});
    		} else {
    			req.token = decoded;
    			next();
    		}
    	});

    } else {
    	return res.status(401).send({
    		success: false,
    		message: "no token provided"
    	});
    }

};