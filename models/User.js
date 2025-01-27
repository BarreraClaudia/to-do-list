const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // userName: {
  //   type: String,
  //   required: [true, 'User name is required!'],
  //   trim: true,
  //   unique: [true, 'User name must be unique!'],
  // },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    trim: true,
    unique: [true, 'Email must be unique!'],
    minLength: [5, 'Email must have 5 characters!'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password must be provided!'],
    trim: true,
    select: false, //will not include password when we try to fetch the user from the database
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    select: false,
  },
  verificationCodeValidation: {
    type: Number,
    select: false,
  },
  forgotPasswordCode: {
    type: String,
    select: false,
  },
  forgotPasswordCodeValidation: {
    type: Number,
    select: false,
  },
});

module.exports = mongoose.model('User', UserSchema);
