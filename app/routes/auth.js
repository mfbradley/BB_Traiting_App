//we should name this user-api-routes.js will need to update server.js file as well


var authController = require('../controllers/authcontroller.js');
var path = require('path');
module.exports = function(app, passport) {

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));


    app.get('/dashboard', isLoggedIn, authController.dashboard);


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
    //route to new ITEM form page 
    app.get("/newform", function(req, res) {
        res.sendFile(path.join(__dirname, "/assets/html/new_item_form.html"));
    });

    // app.post("/newform", function(req, res) {
    //     res.sendFile(path.join(__dirname, "/assets/html/new_item_form.html"));
    // });

};
