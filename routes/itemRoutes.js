var express  = require('express');
var itemsRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require('../path/to/folder/models');

itemsRouter.get('/', function(req, res) {
    models.trade
    .findAll({
        where: {authorId: req.session.pirate.pirateId },
        order: [['createdAt', 'DESC']],
        include: [
            {
                model: models.pirate,
                as: 'author'
            },
            {
                model: models.interest,
                as: 'commit',
                include: {
                    model: models.pirate,
                    as: 'pirate'
                }
            }
        ]
    })
    .then(function(foundTrades) {
        console.log(foundTrades);
        res.render('items', { trades: foundTrades,
            pirate: req.session.pirate });
    })
    .catch(function(err) {
        res.status(500).send(err);
    });
});

itemsRouter.post('/:id', function(req, res) {
    models.interest
    .destroy({
        where: {
            tradeId: req.params.id
        }
    })
    .then(function() {
        res.redirect('/items');
    });
});

module.exports = itemsRouter;