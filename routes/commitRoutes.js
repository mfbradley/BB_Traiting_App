var express = require('express');
var commitRouter = express.Router();
var models = require('../path/to/folder/models');

commitRouter.get('/:id', function(req, res) {
    models.trade
        .findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: models.pirate,
                    as: 'author'
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
        .then(function(foundCommit) {
            console.log(foundCommit);
            res.render('commit', {
                trades: foundCommit,
                pirate: req.session.pirate
            });
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
});

commitRouter.post('/items/', function(req, res) {
    res.send("/:id");
});

module.exports = commitRouter;
