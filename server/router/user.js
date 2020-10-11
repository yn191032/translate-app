const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const getToken = (user) => {
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  return token;
};

router.post('/register', (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });

  user.save()
    .then((user) => {
      res
        .header('auth-token', getToken(user))
        .status(201)
        .send('User was created.');
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.post('/login', (req, res) => {
  User.findOne({ name: req.body.name }).then((user) => {
    user.validPass(req.body.password);
  }).catch((err) => {
    res.status(400).send('Username or Password incorrect');
  });;
});

module.exports = router;