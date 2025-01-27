const { signupSchema } = require('../middlewares/validator');
const User = require('../models/User');
const { doHash } = require('../utils/hashing');

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

    res.status(201).json({
      success: true,
      message: 'Your account has been created successfully',
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
