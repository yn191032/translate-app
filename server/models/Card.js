const { Schema, model } = require('mongoose');
const hash = require('object-hash');
const hashFunc = hash;

const CardSchema = new Schema({
  hash: { type: String },
  langs: {
    from: { type: String, required: true },
    to: { type: String, required: true },
  },
  from: {
    phrase: { type: String, required: true },
    example: { type: String },
  },
  to: {
    phrase: { type: String },
    example: { type: String },
  },
});

CardSchema.methods.createHash = function() {
  const { langs, from, to } = this;
  this.hash = hashFunc(JSON.stringify({ langs, from, to }));
};

CardSchema.pre('save', function() {
  this.createHash();
});

module.exports = model('Card', CardSchema);