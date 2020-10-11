const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Card = require('./Card');
const History = require('./History');

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phrasebook: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
  history: [{
    phrase: { type: String },
    langs: {
      from: { type: String },
      to: { type: String },
    },
    date: { type: String },
  }],
  langsQuick: [{ type: String }],
  langs: {
    from: { type: String },
    to: { type: String },
  },
});

UserSchema.methods.mapResultsWithSaved = function(array) {
  return array.map(item => {
    const card = new Card(item);
    card.createHash();

    const saved = this.phrasebook.some(p => p.hash === card.hash);
    return { 
      saved, 
      hash: card.hash,
      langs: card.langs,
      from: card.from,
      to: card.to,
    };
  });
};

UserSchema.methods.validPass = function(passToValid) {
  bcrypt.compare(passToValid, this.password).then((valid) => {
    console.log(valid);
  });
};

UserSchema.methods.addCard = function(card) {
  const newCard = new Card(card);
  newCard.save();
  this.phrasebook.push(newCard);
};

UserSchema.methods.addHistory = function(history) {
  const newHistory = new History(history);
  this.history.push(newHistory);
};

UserSchema.methods.deleteHistory = function(historyId) {
  let filtered = false;
  this.history = this.history.filter(h => {
    if (String(h._id) !== String(historyId)) {
      return true;
    } else {
      filtered = true;
      return false;
    }
  });

  if (!filtered) {
    throw new Error('History not found');
  }
};

UserSchema.methods.getHistory = function(historyId) {
  let history = null;
  history =  this.history.find(h => h._id === historyId);
  if (!history) {
    throw new Error('History not found');
  }
};

UserSchema.methods.setLangs = function(from, to) {
  this.langs.from = from;
  this.langs.to = to;
};

UserSchema.methods.getLangs = function() {
  return this.langs;
};

UserSchema.methods.setLangsQuick = function(langsQuick) {
  this.langsQuick = langsQuick;
};

UserSchema.methods.getLangsQuick = function() {
  return this.langsQuick;
};

UserSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 10);
  this.langs.from = 'pl';
  this.langs.to = 'en';
  this.langsQuick = ['en', 'pl', 'ru'];
});

UserSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('The name is already taken'));
  } else {
    next(error);
  }
});

module.exports = model('User', UserSchema);