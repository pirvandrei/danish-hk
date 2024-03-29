const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const wordSchema = new mongoose.Schema({
  lex: {
    type: String,
    required: true,
  },
  definitionDk: {
    type: String,
    required: true,
  },
  definitionRo: {
    type: String,
  },
  definitionEn: {
    type: String,
  },
  createDate: {
    type: Date,
    required: true,
  },
  updateDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

wordSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Word', wordSchema);
