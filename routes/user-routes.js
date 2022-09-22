var express = require('express');
var router = express.Router();

var UserModel = require('../models/UserModel.js');

// register
router.post(
    '/register',          // http://localhost:3001/users/register
    function(req, res) {

        // console.log(req.body.firstname);
        // console.log(req.body.lastname);
        // console.log(req.body.email);

        var newDocument = {
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "password": req.body.password
        };

        UserModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                res.json(dbDocument);
            }
        )
        .catch(
            function(dbError) {
                console.log(dbError);
                res.send("Error occured /users/register");
            }
        );
    }
);

module.exports = router;