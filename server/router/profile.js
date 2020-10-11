const router = require('express').Router();

const User = require('../models/User');
const auth = require('./middleware/auth');

router.get('/profile', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    res.status(200).json({
      name: user.name,
    });
  });
});

module.exports = router;