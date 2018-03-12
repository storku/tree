const passport = require('passport'); // has nothing to do with passport.js file

//export the function and calling it with express app object
module.exports = app => {
  //when user reaches /auth/google route, they enter the oauth
  //passport attempts to authenticate the user using google strategy
  //scopes asks for the user's information (i.e. profile and email) from google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //this route handler activates when passport redirects the user
  //back to our server after authenticating
  //google sends the code for user to us
  //we send the code back to google to get the user's profile and email
  //then the callback function (arrow function / the 2nd arguement) in passport.use is executed
  app.get('/auth/google/callback', passport.authenticate('google'));

  //log the user out
  app.get('/api/logout', (req, res) => {
    //kills the id in the cookie
    req.logout(); //logout() is automatically attached to req by passport
    res.send(req.user); //proves that you are logged out
  });

  //check the current user object from the id from the cookie
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
