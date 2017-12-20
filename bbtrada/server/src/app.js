var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var {sequelize} = require('./models')
var config = require('./config/config')

var app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// var PORT = 8081

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('server started on port')
  })

// app.listen(8081, function () {
//   console.log('listening on port 2 ' + PORT)----------------------------------//
// })

// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

//   // Send the below string to the client when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
