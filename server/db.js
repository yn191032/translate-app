const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to mongodb...');
  })
  .catch((err) => {
    if (err) throw err
    console.log('Cannot connect to db...');
  });
