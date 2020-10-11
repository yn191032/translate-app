const router = require('express').Router();

const User = require('../models/User');
const Card = require('../models/Card');
const auth = require('./middleware/auth');

router.get('/phrasebook', auth, (req, res) => {
  User.findById(req.user._id).populate('phrasebook').exec().then((user) => {
    res.status(200).json(user.phrasebook);
  });
});

router.get('/phrasebook/:id', auth, (req, res) => {
  Card.findById(req.params.id).then((card) => {
    res.status(200).json(card);
  }).catch((err) => {
    console.log(err.message);
    res.status(404).send('Phrase not found.');
  });
});

router.delete('/phrasebook/:id', auth, (req, res) => {
  Card.findByIdAndDelete(req.params.id).then((card) => {
    res.status(200).send('Phrase was deleted.');
  }).catch((err) => {
    console.log(err.message);
    res.status(404).send('Phrase not found.');
  });
});

router.post('/phrasebook', auth, (req, res) => {
  User.findById(req.user._id).then((user) => {
    user.addCard({
      langs: {
        from: req.body.langs.from,
        to: req.body.langs.to,
      },
      from: {
        phrase: req.body.from.phrase,
        example: req.body.from.example,
      },
      to: {
        phrase: req.body.to.phrase,
        example: req.body.to.example,
      },
    });
    user.save().then(() => {
      res.status(200).send('Phrase added.')
    }).catch((err) => {
      console.log(err.message);
      res.status(400).send('Error accured.');
    });
  });
});

module.exports = router;