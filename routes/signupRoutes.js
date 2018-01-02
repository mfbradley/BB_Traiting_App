const express  = require("express");
const signupRouter = express.Router();
const models = require('../path/to/folder/models');

signupRouter.get("/", function(req, res) {
  res.render('signup');
});

signupRouter.post('/', function(req, res) {
    if(!req.body ||
    !req.body.piratename ||
    !req.body.password ||
    !req.body.passwordConfirm ||
    !req.body.displayName) {
        return res.redirect('/');
    }
    
    req.assert('passwordConfirm', 'Passwords need to match').equals(req.body.password);
    
    var errors = req.validationErrors();
    
    if(errors) {
        return res.render('signup', {errors: errors, data: req.body});
    } else {
        var newPirate = models.pirate.build({
            piratename : req.body.piratename,
            password : req.body.password,
            displayname : req.body.displayName
        });
        newPirate
            .save()
            .then(function(savedPirate) {
                res.redirect('/login');
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    }
});

module.exports = signupRouter;