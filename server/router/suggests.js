const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');

router.get('/:from/:to/:phrase', (req, res, next) => {
  const { from, to, phrase } = req.params;

  axios(`${process.env.SOURCE_URL}/ajax/phrasesAutosuggest?from=${from}&dest=${to}&phrase=${phrase}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      console.error(err.message);
      next();
    });
});

module.exports = router;