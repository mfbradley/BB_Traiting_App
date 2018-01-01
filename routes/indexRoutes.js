var express  = require('express');
var indexRouter = express.Router();
var shared = require('../public/sharedFunctions.js');
var models = require("../models");

indexRouter.get("/", shared.checkAuth, function(req, res) {
  models.message
    .findAll({
      order: [[ "createdAt", "DESC"]],
      include: [
        {
          model: models.user,
          as: "author"
        },
        {
          model: models.interest,
          as: "interest",
          include: { 
            model: models.user,
            as: "user"
          }
        }
      ]
    })
    .then(function(foundMessages) {   
      console.log(foundMessages);  
    res.render("index", { messages: foundMessages,
                          user: req.session.user });
    })
    .catch(function(err) {
      res.status(500).send(err);
    }); 
});

indexRouter.post("/interest/:id", function(req, res) {
  var newInterest = models.interest.build({
    messageId : req.params.id,
    userId : req.session.user.userId
  });
  newInterest
    .save()
    .then(function(savedLike) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = indexRouter;