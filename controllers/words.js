const wordsRouter = require('express').Router();
const Word = require('../models/word');
// const User = require('../models/user');
// const jwt = require('jsonwebtoken');

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

wordsRouter.get('/', (req, res) => {
  Word.find({})
    .then((words) => {
      res.json(words);
    })
    .catch((error) => {
      console.log('error connecting to MongoDB:', error.message);
      res.status(404).end();
    });
});

module.exports = wordsRouter;
