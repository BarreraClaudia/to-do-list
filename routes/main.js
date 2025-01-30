const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const { identifier } = require('../middlewares/identification');

router.get('/', homeController.getIndex);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', identifier, authController.logout);

router.patch(
  '/send-verification-code',
  identifier,
  authController.sendVerificationCode
);
router.patch(
  '/verify-verification-code',
  identifier,
  authController.verifyVerificationCode
);
router.patch('/change-password', identifier, authController.changePassword);
router.patch(
  '/send-forgot-password-code',
  authController.sendForgotPasswordCode
);
router.patch(
  '/verify-forgot-password-code',
  authController.verifyForgotPasswordCode
);

module.exports = router;
