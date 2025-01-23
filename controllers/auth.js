const User = require('../models/User');

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/todo');
  }
  res.render('signup', {
    title: 'Create Account',
  });
};

exports.postSignup = (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  user.save();
};
