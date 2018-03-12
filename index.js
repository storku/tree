const express = require('express'); //import express
const mongoose = require('mongoose'); //import mongoose to interact with mongodb
//need passport to keep track of user auth state by using cookies
const cookieSession = require('cookie-session'); //give us access to cookies
const passport = require('passport'); //tell passport to use cookies
//get the keys
const keys = require('./config/keys');
//note that User.js has to be required in before passport.js so Schema is created before it is used
//when app boosts up, configuration in User.js is loaded
//mongoose will create a Collection of users
require('./models/User');
//get passport for user auth, we are not exporting/pulling any code out of it
//we only need to make sure passport.js is executed so we don't
//need to assign a variable to it
require('./services/passport');

mongoose.connect(keys.mongoURI); //connect mongoose to mongodb on mlab

const app = express(); //starts express server

//.use wires up middlewares
//modify incoming requests before sending them to route handlers

//sets up the cookie session for placing/retreiving id into/from the cookie
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//call authRoutes function with app object to activate the route handlers
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; //express server is at port 5000 if local
app.listen(PORT); //express server is listening on specific port
