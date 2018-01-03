var express = require('express');
var newitemRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require('../path/to/folder/models');

newitemRouter.get('/', function(req, res) {
    // console.log('hey');
    res.render('newItem', {pirate : req.session.pirate});
});

//pay attention to aitem and aItem

newitemRouter.post('/', function(req, res) {
    if(!req.body || !req.body.newitem) {
        res.redirect('/newitem');
    }
    // console.log('=============')
    var aItem = models.trade.build({
        item : req.body.newitem,
        authorId : req.session.pirate.pirateId
    });
    // console.log(req.body)
    aItem
    .save()
    .then(function(savedItem) {
        res.redirect('/');
    })
    .catch(function(err) {
        // console.log(err)
    });
    //     res.status(500).send(err);
    // });
});
// console.log('hey' + newitemRouter)
module.exports = newitemRouter;