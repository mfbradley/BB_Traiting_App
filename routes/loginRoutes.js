var express  = require('express');
var loginRouter = express.Router();
var models = require('../path/to/folder/models');

loginRouter.get("/", function(req, res) {
  if (!req.session.pirate) {res.render('login');}
  else {res.render('index')}
});

loginRouter.post("/", function(req, res) {
  if (!req.body || !req.body.username || !req.body.password) {
    // console.log(req.body.piratename)
    // console.log(req.body.password)
    return res.redirect("login");
  }

  var requestingPirate = req.body;
  var pirateRecord;

  models.pirate
  .findOne({
      where: {
        piratename: requestingPirate.username,
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