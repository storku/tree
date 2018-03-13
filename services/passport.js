//passport module is required for OAuth (used for user registration / login)
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose'); //require in mongoose library
const keys = require('../config/keys');

//fetch the Model Class User, Model Class allows us to create Model Instances
//Model Instances save to / interact with the Records in the users Collection
const User = mongoose.model('users'); //pull a Schema out of mongoose with 1 argument

//serialize user model (turn it into an id) before putting it into cookie
passport.serializeUser((user, done) => {
  //user.id is the user._id and Not the profile.id / googleId
  //we use _id because the user might not have googleId, might have facebook or twitter instead
  done(null, user.id);
});

//turn the id back into a mongoose model instance
//search through all users, find the one with the same user._id
passport.deserializeUser((id, done) => {
  //async
  User.findById(id).then(user => {
    //user model is added to request object as req.user
    //and passed to the next route handler
    done(null, user);
  });
});

//Sets up the Google OAuth with passport
passport.use(
  //First 2 options are google client id and client secret
  //Third option is the URL (path) user is sent to after granting permission
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    //called after profile and email information of the user is obtained from google
    //take identifying user information (profile) and save it to database
    async (accessToken, refreshToken, profile, done) => {
      //check if user alrady exists in mongoosedb
      //look through users Collection, find the first record with googleId of profile.id
      //Note that any mongodb interaction is asynchronous
      const existingUser = await User.findOne({ googleId: profile.id });
      //existingUser is either an instance (found) or null (not found)
      if (existingUser) {
        //if existingUser is found / an instance
        //we already have a record with a given profile ID
        done(null, existingUser); //call done to proceed to the next auth step
      } else {
        //if existingUser is not found / null
        //we don't have a user with this ID, make a new record
        //creates a new instance of User
        //it represents a record that exists or might exist in the users Collection
        const user = await new User({ googleId: profile.id }).save(); //.save() saves the record into the mongodb database
        //call done then call in the newly created user to proceed
        done(null, user); //user is a fresh copy straight from the database
      }
    }
  )
);
