const wordsRouter = require('express').Router();
const Word = require('../models/word');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

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

wordsRouter.post('/', async (request, response) => {
  const body = request.body;

  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }

  const user = await User.findById(decodedToken.id);

  if (body.lex === undefined) {
    return response.status(400).json({
      error: 'word missing',
    });
  }

  const word = new Word({
    lex: body.lex,
    definitionDk: body.definitionDk,
    definitionEn: body.definitionDk,
    definitionRo: body.definitionDk,
    createDate: new Date(),
    updateDate: new Date(),
    user: user._id,
  });

  const savedWord = await word.save();

  // user.notes = user.notes.concat(savedNote._id);
  // await user.save();

  response.json(savedWord);
});

module.exports = wordsRouter;
