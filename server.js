    var express = require('express');
    var expressValidator = require('express-validator');
    var app = express()
    var session = require('express-session');
    var sessionConfig = require('./sessionConfig');
    var passport = require('passport');
    var port = process.env.PORT || 8080;
    var session = require('express-session');
    var bodyParser = require('body-parser');
    var models = require('./path/to/folder/models');
    var exphbs = require('express-handlebars');
    var indexRouter = require('./routes/indexRoutes');
    var loginRouter = require('./routes/loginRoutes');
    var logoutRouter = require('./routes/logoutRoutes');
    var signupRouter = require('./routes/signupRoutes');
    var interestRouter = require('./routes/interestRoutes');
    var createitemsRouter = require('./routes/createitemRoutes');
    var myitemsRouter = require('./routes/myitemRoutes');
    var {sequelize} = require('./path/to/folder/models')
    var config = require('./path/to/folder/config/config')
    var path = require('path');

module.exports = {
  'config': path.resolve('path/to/folder', 'config/config.json'),
  'migrations-path': path.resolve('path/to/folder', 'migrations'),
  'models-path': path.resolve('path/to/folder', 'models')
}

    //For Handlebars
    app.engine('hbs', exphbs({ extname: '.hbs' }));
    app.set('views', './views')
    app.set('view engine', 'hbs');
    
        //For BodyParser
    app.use(express.static('public'));
    app.use(express.static('views'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
    app.use(session(sessionConfig));


   // routes
    app.use('/', indexRouter);
    app.use('/home', indexRouter);
    app.use('/login', loginRouter);
    app.use('/logout', logoutRouter);
    app.use('/signup', signupRouter);
    app.use('/interest', interestRouter);
    app.use('/myitems', myitemsRouter);
    app.use('/createitem', createitemsRouter);


    // //Models
    // var models = require("./app/models");


//     //Sync Database
// var connection = mysql.createConnection(connectionConfig);
// sequelize.sync()
//   .then(() => {
//     app.listen(config.port);
//     console.log('server started on port');

//     }).catch(function(err) {
//      console.log(err, "Something went wrong with the Database Update!");
//     });



    // app.listen(8080, function(err) {
    //  if (!err)
    //   console.log("Site is live");
    //  else console.log(err);

    // });
    app.listen(port, function() {
    console.log('site is live: ', port);
})