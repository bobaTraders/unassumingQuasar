//Serve it up!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3000;


//PARSING
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

//SERVE UP STATIC FILES
app.use(express.static(path.join(__dirname + '/../client/')));


//GOOGLE AUTHENTICATION
require('./routes/config.js')(app, express);
//TODO: further modularize code for routing use below line:
// require('./routes/PartyRouter.js')(app, express);


//ROUTING
var partyRouter = require(path.join(__dirname + '/routes/PartyRouter.js'));
app.use(partyRouter);

//START APP ON PORT 
app.listen( port, function(err){
  if(err) {
    return console.log('error listening on port'+port, err);
  }
  console.log('App is listening on port '+port);
});
