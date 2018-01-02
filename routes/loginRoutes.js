var express  = require('express');
var loginRouter = express.Router();
var models = require('../path/to/folder/models');

loginRouter.get("/", function(req, res) {
  res.render('login');
});

loginRouter.post("/", function(req, res) {
  if (!req.body || !req.body.piratename || !req.body.password) {
    return res.redirect("login");
  }

  var requestingPirate = req.body;
  var pirateRecord;

  models.pirate
  .findOne({
      where: {
        piratename: requestingPirate.piratename,
        password: requestingPirate.password
      }
    }).then(function (pirate) {
      if (pirate) {
        req.session.pirate = {
          piratename: pirate.piratename, 
          displayName: pirate.displayname,
          pirateId: pirate.id
        }
        res.redirect("/");
      } else {
        console.log("nope");
        return res.redirect("login");
      }
    });
});

module.exports = loginRouter;