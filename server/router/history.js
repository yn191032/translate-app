const router = require('express').Router();

const User = require('../models/User');
const auth = require('./middleware/auth');

router.get('/history', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    res.status(200).json(user.history);
  });
});

router.delete('/history/:id', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    try {
      user.deleteHistory(req.params.id);
      user.save();
    } catch(err) {
      console.log(err.message);
      return res.status(400).send(err.message);
    }
    return res.status(200).send('History deleted.');
  });
});

router.post('/history', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    user.addHistory({
      phrase: req.body.phrase,
      langs: {
        from: req.body.langs.from,
        to: req.body.langs.to,
      }
    });
    user.save().then(() => {
      res.status(200).send('History added.')
    }).catch((err) => {
      console.log(err.message);
      res.status(400).send('Error accured');
    });
  });
});

module.exports = router;