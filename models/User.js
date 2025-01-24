const mongoose = require('mongoose');
// const Joi = require('joi');

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model('User', UserSchema);

//https://medium.com/@wanguiwawerub/user-registration-in-node-js-3e0ef7a61de7

// const UserSchema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true,
//     min: 3,
//     max: 100,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     min: 5,
//     max: 255,
//   },
//   password: {
//     type: String,
//     required: true,
//     min: 8,
//     max: 100,
//   },
// });

// function validateUser(user) {
//   const schema = Joi.object({
//     userName: Joi.string().min(3).max(100).required(),
//     email: Joi.string().min(5).max(255).required().email(),
//     password: Joi.string().min(8).max(100).required(),
//   });
//   return schema.validate(user);
// }

// const User = mongoose.model('User', userSchema);
// module.exports.validate = validateUser;
// module.exports.User = User;
