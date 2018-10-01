// Imports express into our app and sets it up for use
const express = require('express');

//MongoDB requirements
const mongoose = require('mongoose');
const COLLECTION = 'todolist';

// Require all models
var db = require("./models");

const app = express();

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// -----------------

require('./routes/routes.js')(app);

// Connect to the database before starting the application server.
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true }, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Database connection ready");
});


// Starts our server on the predefined PORT
//Using process.env.PORT to allow Heroku to dynamically choose its own port
app.listen(process.env.PORT || 8080, function(){
    console.log(`App is now listening on PORT `+ process.env.PORT);
});