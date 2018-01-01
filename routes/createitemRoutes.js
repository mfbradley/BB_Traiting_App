//  temp trying to create a string

var express = require('express');
var createitemsRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require('../path/to/folder/models');

createitemsRouter.get('/', shared.checkAuth, function(req, res) {
    res.render('createitem', {user : req.session.user});
});

createitemsRouter.post('/', function(req, res) {
    if(!req.body || !req.body.newitem) {
        res.redirect('/createitem');
    }
    
    var newItem = models.message.build({
        item : req.body.newitem,
        authorId : req.session.user.userId
    });
    newItem
        .save()
        .then(function(savedItem) {
            res.redirect('/');
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
});

module.exports = createitemsRouter;