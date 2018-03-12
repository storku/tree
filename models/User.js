const mongoose = require('mongoose');
/* ES2015 destructuring
const Schema = mongoose.Schema is equivalent
it says mongoose object has a property called Schema
take that property and assignment it const Schema */
const { Schema } = mongoose;

//Schema for users Collection
//can freely add or remove properties at anytime!!!
const userSchema = new Schema({
  googleId: String
});

//mongoose creates a new Collection in mongo called users
//if the users Collection already exists, it will not override it
mongoose.model('users', userSchema); //2 arguments = loads the Schema into mongoose
