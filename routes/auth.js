const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
  // validate data before sending
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if user already in database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOGIN
router.post('/login', (req, res) => {
  // validate data before sending
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});

module.exports = router;