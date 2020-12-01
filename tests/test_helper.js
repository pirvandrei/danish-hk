const Word = require('../models/word');
const User = require('../models/user');

const initialWords = [
  {
    lex: 'HTML is easy',
    definitionDk: 'first definition',
    createDate: new Date(),
    updateDate: new Date(),
  },
  {
    lex: 'HTML is as easy',
    definitionDk: 'this is the secod definition',
    createDate: new Date(),
    updateDate: new Date(),
  },
];

const nonExistingId = async () => {
  const word = new Word({
    lex: 'køre',
    definitionDk: 'at styre ting med på nogen bane',
    createDate: new Date(),
    updateDate: new Date(),
  });
  await word.save();
  await word.remove();

  return word._id.toString();
};

const wordsInDb = async () => {
  const words = await Word.find({});
  return words.map((word) => word.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialWords,
  nonExistingId,
  wordsInDb,
  usersInDb,
};
