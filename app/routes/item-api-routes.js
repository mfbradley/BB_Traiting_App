//SET OF ROUTES FOR DISPLAYING AND SAVING DATA to DB

//requiring our models
var db = require("../models");

//ROUTES
module.exports = function(app) {

    //GET route for all the ITEMs
    app.get("/api/items", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        //find all query
        db.item.findAll({
            where: query,
            //including user
            include: [db.user]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });


    //GET route for ITEM by USER--STILL NEED TO TEST when we get POST routes up and running!
    app.get("/api/items/:user", function(req, res) {
        db.item.findAll({
            where: {
                user: req.params.user
            },
            include: [db.user]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });


    //GET route for ITEM by CATEGORY--STILL NEED TO TEST!
    app.get("/api/items/:category", function(req, res) {
        db.item.findAll({
            where: {
                category: req.params.category
            },
            include: [db.user]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });

    //GET route for "expensive" ITEMs by EstimatedValue over 100--STILL NEED TO TEST!
    app.get("/api/items/expensive", function(req, res) {
        db.item.findAll({
            where: {
                estimatedValue: {
                    $gte: 100
                }
            },
            //sorts lowest to highest
            order: [["estimatedValue", "ASC"]],
            include: [db.user]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });
    //GET route for "INexpensive" ITEMs by EstimatedValue over 100--STILL NEED TO TEST!
    app.get("/api/items/inexpensive", function(req, res) {
        db.item.findAll({
            where: {
                //not sure if I have 100 here what it will do for items with EstValue of 100
                estimatedValue: {
                    $lte: 100
                }
            },
            //sorts lowest to highest
            order: [["estimatedValue", "ASC"]],
            include: [db.user]
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });

    //POST route to CREATE NEW ITEM
    app.post("/api/posts", function(req, res) {
        db.item.create(req.body).then(function(dbItem) {
            res.json(dbItem);
        });
    });

    //POST route to DELETE ITEM
    app.delete("/api/posts/:id", function(req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbItem) {
            res.json(dbItem);
        });
    });

    //PUT route for UPDATING ITEMs
    app.put("/api/posts", function(req, res) {
        db.Item.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbItem) {
            res.json(dbItem);
        });
    });

};
