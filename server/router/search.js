const router = require('express').Router();
const auth = require('./middleware/auth');
const fetchCards = require('./middleware/fetchCards');
const User = require('../models/User');

router.get('/:from/:to/:phrase', auth, fetchCards, (req, res, next) => {
  const { from, to, phrase } = req.params;
  User.findById(req.user._id).populate('phrasebook').exec().then((user) => {
    const results = user.mapResultsWithSaved(req.user.results);
    res.json(results);
    user.addHistory({ phrase, langs: { from, to } });
    user.save();
  }).catch(err => {
    console.log(err);
    res.status(400).send('Error accured');
  });
});

module.exports = router;