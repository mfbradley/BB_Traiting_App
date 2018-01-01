var express  = require('express');
var myitemsRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require("../models");

myitemsRouter.get('/', shared.checkAuth, function(req,res) {
    models.message
    .findAll({
        where: { authorId: req.session.user.userId },
        order: [['createdAt', "DESC"]],
        include: [
            {
                model: models.user,
                as: 'author'
            },
            {
                model: models.interest,
                as: 'interest',
                include: {
                    model: models.user,
                    as: "user"
                }
            }
        ]
    })
    
    .then(function(foundMessages) {
        console.log(foundMessages);
        res.render('myitems', { messages: foundMessages,
            user: req.session.user});
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
    });
    
myitemsRouter.post('/:id', shared.checkAuth, function(req, res) {
    models.like
    .destroy({
        where: {
            messageId: req.params.id
        }
    })
    .then(function() {
        res.redirect('/myitems');
    });
});

module.exports = myitemsRouter;