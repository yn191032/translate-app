const router = require('express').Router();
const auth = require('./middleware/auth');

const User = require('../models/Card');
const { langsOptions } = require('../constants');

router.get('/options', auth, (req, res) => {
  res.json(langsOptions);
});

router.get('/quick', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    res.status(200).json(user.langsQuick);
  });
});

router.get('/custom', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    res.status(200).json(user.getLangs());
  });
});

router.post('/custom', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    user.setLangs(req.body.from, req.body.to);
    user.save().then(() => {
      res.status(200).send('Languages changed.')
    }).catch((err) => {
      console.log(err.message);
      res.status(400).send('Error accured.');
    });
  });
});

module.exports = router;