//SET OF ROUTES FOR DISPLAYING AND SAVING DATA to DB

//requiring our models
var db = require("../models");

//ROUTES

module.exports = function(app) {

    //GET route for all the items
    app.get("/api/items", function(req, res) {
        var query = {};
        //NEED TO CHECK THIS SYNTAX!!!!user_id?
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        //find all query
        db.item.findAll({
            where: query,
            include: [db.user]
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};
