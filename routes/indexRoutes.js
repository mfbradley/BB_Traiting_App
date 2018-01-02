var express = require('express');
var indexRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require('../path/to/folder/models');

indexRouter.get('/', function(req, res) {
    console.log('==============111')
    models.trade
        .findAll({
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: models.pirate,
                    as: "author"
            },
                {
                    model: models.interest,
                    as: "commit",
                    include: {
                        model: models.pirate,
                        as: 'pirate'
                    }
            }
        ]
        })
        .then(function(foundTrades) {
            console.log(foundTrades);
            res.render('index', {
                trades: foundTrades,
                pirate: req.session.pirate
            });
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
});

indexRouter.post('commit/:id', function(req, res) {
    var newInterest = models.interest.build({
        tradeId: req.params.id,
        pirateId: req.session.pirate.pirateId
    });
    newInterest
        .save()
        .then(function(savedInterest) {
            res.redirect('/');
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
});

module.exports = indexRouter;
