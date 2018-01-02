var express = require('express');
var newitemRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require('../path/to/folder/models');

newitemRouter.get('/', shared.checkAuth, function(req, res) {
    res.render('newitem', {pirate : req.session.pirate});
});

//pay attention to aitem and aItem

newitemRouter.post('/', function(req, res) {
    if(!req.body || !req.body.aitem) {
        res.redirect('/newitem');
    }
    
    var aItem = models.message.build({
        item : req.body.aitem,
        authorId : req.session.pirate.pirateId
    });
    aItem
    .save()
    .then(function(savedItem) {
        res.redirect('/');
    })
    .catch(function(err) {
        res.status(500).send(err);
    });
});

module.exports = newitemRouter;