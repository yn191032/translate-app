const axios = require('axios');
const cheerio = require('cheerio');

const fetchCards = (req, res, next) => {
  const { from, to, phrase } = req.params;
  axios(`${process.env.SOURCE_URL}/${from}/${to}/${phrase}`)
  .then(response => {
    const $ = cheerio.load(response.data);
    req.user.results = $('li.phraseMeaning').map(function() {
      return {
        langs: { from, to },
        from: { 
          phrase: phrase,
          example: $(this).find('.examples div[dir]').first().text(),
        },
        to: {
          phrase: $(this).find('.text-info .phr').text(),
          example: $(this).find('.examples div[dir]').last().text(),
        }
      };
    }).toArray();
    next();
  }).catch(err => {
    console.log(err.message);
    res.status(400).send('Error accured');
  });
};

module.exports = fetchCards;