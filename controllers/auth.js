const { signupSchema, loginSchema } = require('../middlewares/validator');
const User = require('../models/User');
const { doHash, doHashValidation } = require('../utils/hashing');
const jwt = require('jsonwebtoken');

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/todo');
  }
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  //res.json({ message: 'Signup Successful' }); //check to make sure it works on postman

  const { email, password } = req.body;
  try {
    const { error, value } = signupSchema.validate({ email, password });

    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: 'User already exists!' });
    }

    const hashedPassword = await doHash(password, 12);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();

    result.password = undefined;

    res.redirect('/todo');
  } catch (error) {
    console.log(error);
  }
};

exports.getLogin = async (req, res) => {
  if (req.user) {
    return res.redirect('/todo');
  }
  res.render('login');
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { error, value } = loginSchema.validate({ email, password });

    if (error) {
      return res
        .status(401)
        .json({ success: false, message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email }).select('+password');

    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: 'User does not exist!' });
    }

    const result = await doHashValidation(password, existingUser.password);

    if (!result) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid password!' });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '8h',
      }
    );

    res
      .cookie('Authorization', 'Bearer' + token, {
        expires: new Date(Date.now() + 8 * 3600000),
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      })
      .redirect('/todo');
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res) => {
  res.clearCookie('Authorization').status(200).redirect('/');
};
