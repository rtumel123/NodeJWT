const router = require('express').Router();
const User = require('../models/User');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.send(req.user);
  // User.findOne({ _id: req.user });
});

module.exports = router;