var express  = require('express');
var interestRouter = express.Router();
var models = require("../models");

interestRouter.get("/:id", function(req, res) {
  models.message
    .findOne({ 
      where: { id: req.params.id },
      include: [
        {
          model: models.user,
          as: "author"
        },
        {
          model: models.like,
          as: "interest",
          include: { 
            model: models.user,
            as: "user"
          }
        }
      ]
    })
    .then(function(foundInterest) {
      console.log(foundInterest);
      res.render("interest", { messages: foundInterest,
                            user: req.session.user });
    })
    .catch(function(err) {
      res.status(500).send(err);
    }); 
});

module.exports = interestRouter;