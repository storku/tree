/* eslint global-require: "off" */
/* eslint import/no-unresolved: [2, { ignore: ['./prod'] }] */
// figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production, return prod keys
  module.exports = require('./prod');
} else {
  console.log('hello');
  // we are in development, return the dev keys
  module.exports = require('./dev');
}
