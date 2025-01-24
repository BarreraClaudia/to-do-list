const { User, validate } = require('../models/User');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/todo');
  }
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  //   const { error } = validate(req.body);
  //   if (error) {
  //     return res.status(400).send(error.details[0].message);
  //   }
  //   let user = await User.findOne({ email: req.body.email });
  //   if (user) {
  //     return res.status(400).send('User already exists. Please sign in');
  //   } else {
  //     try {
  //       const salt = await bcrypt.genSalt(10);
  //       const password = await bcrypt.hash(req.body.password, salt);
  //       const user = new User({
  //         userName: req.body.userName,
  //         email: req.body.email,
  //         password: password,
  //       });
  //       await user.save();
  //       return res.status(201).json(user);
  //     } catch (err) {
  //       return res.status(400).json({ message: err.message });
  //     }
  //   }
};
