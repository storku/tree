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
  //after passport is done, we redirects it to another page with the 3rd parameter
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  //log the user out
  app.get('/api/logout', (req, res) => {
    //kills the id in the cookie
    req.logout(); //logout() is automatically attached to req by passport
    res.redirect('/'); //when the user is logged out, redirect them to root page
  });

  //check the current user object from the id from the cookie
  //use this route handler to decide if the user is signed in or not
  app.get('/api/current_user', (req, res) => {
    //if it response back with the user model then the user is logged in
    //if it response back with undefined or null then the user is not logged in
    res.send(req.user);
  });
};
