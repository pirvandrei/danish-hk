const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb://fullstack:${password}@cluster0-shard-00-00-sy0oy.azure.mongodb.net:27017,cluster0-shard-00-01-sy0oy.azure.mongodb.net:27017,cluster0-shard-00-02-sy0oy.azure.mongodb.net:27017/react?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const wordSchema = new mongoose.Schema({
  lex: String,
  definitionDk: String,
  definitionRo: String,
  definitionEn: String,
  createDate: Date,
  updateDate: Date,
});

const Word = mongoose.model('Word', wordSchema);

const word = new Word({
  lex: process.argv[3] || 'rydde op',
  definitionDk: "at ordne nogen forskillie ting på deres rette plads",
  definitionRo: "a aranja lucrurile la locul lor",
  definitionEn: "to clean up",
  createDate: new Date(),
  updateDate: new Date(),
});

word
  .save()
  .then(() => {
    console.log('word saved!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

  Word.find({}).then((result) => {
  result.forEach((word) => {
    console.log(word);

    mongoose.connection.close();
  });
});
