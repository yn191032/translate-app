require('dotenv').config();
require('./db');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/search', require('./router/search'));
app.use('/suggests', require('./router/suggests'));
app.use('/langs', require('./router/langs'));
app.use('/user', require('./router/user'));
app.use('/user', require('./router/profile'));
app.use('/user', require('./router/phrasebook'));
app.use('/user', require('./router/history'));

app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Not found',
      status: 404,
    }
  });
});

app.listen(port, () => {
  console.log(`Server is up on ${port}...`);
});