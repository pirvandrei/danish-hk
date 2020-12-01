const supertest = require('supertest');
const mongoose = require('mongoose');
const helper = require('./test_helper');
const app = require('../app');
const api = supertest(app);
const Word = require('../models/word');

beforeEach(async () => {
  await Word.deleteMany({});

  const wordObjects = helper.initialWords.map((word) => new Word(word));
  const promiseArray = wordObjects.map((word) => word.save());
  await Promise.all(promiseArray);

  console.log('done');
  token =
    'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBpcnZhbmRyZWVhIiwiaWQiOiI1ZjI5MTg4NGMwNzYyNDU0YjhiZTczMTMiLCJpYXQiOjE1OTY2MjA5MDh9.R5sqEnOhsAF14uXe-B-1smLGWce7MbgS8hwDGOCCUpU';
});

describe('when there is initially some words saved', () => {
  test('words are returned as json', async () => {
    await api
      .get('/api/words')
      .set({ Authorization: token })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all words are returned', async () => {
    const response = await api.get('/api/words').set({ Authorization: token });

    expect(response.body).toHaveLength(helper.initialWords.length);
  });

  test('a specific word is within the returned words', async () => {
    const response = await api.get('/api/words').set({ Authorization: token });

    const contents = response.body.map((r) => r.lex);
    expect(contents).toContain('HTML is as easy');
  });
});

describe('addition of a new word', () => {
  test('succeeds with valid data', async () => {
    const newWord = {
      lex: 'bygge',
      definitionRo: 'a contrui',
      definitionEn: 'to build',
      definitionDk: 'to ordne forskillie ting til det retter plads',
    };

    await api
      .post('/api/words')
      .send(newWord)
      .set({ Authorization: token })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    const wordsAtEnd = await helper.wordsInDb();
    expect(wordsAtEnd).toHaveLength(helper.initialWords.length + 1);

    const definitions = wordsAtEnd.map((n) => n.definitionDk);
    expect(definitions).toContain(
      'to ordne forskillie ting til det retter plads'
    );
  });

  test('fails with status code 400 if data invaild', async () => {
    const newWord = {
      definitionDk: 'saa',
      createDate: new Date(),
      updateDate: new Date(),
    };

    await api
      .post('/api/words')
      .send(newWord)
      .set({ Authorization: token })
      .expect(400);

    const response = await api.get('/api/words').set({ Authorization: token });
    expect(response.body).toHaveLength(helper.initialWords.length);
  });
});

describe('viewing a specific word', () => {
  test('succeeds with a valid id', async () => {
    const wordAsStart = await helper.wordsInDb();

    const wordToView = wordAsStart[0];

    const resultWord = await api
      .get(`/api/words/${wordToView.id}`)
      .set({ Authorization: token })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(resultWord.body.lex).toEqual(wordToView.lex);
    expect(resultWord.body.definitionDk).toEqual(wordToView.definitionDk);
  });

  test('fails with statuscode 404 if word does not exist', async () => {
    const validNonexistingId = await helper.nonExistingId();

    await api.get(`/api/words/${validNonexistingId}`).expect(404);
  });
});

describe('deletion of a word', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const wordsAtStart = await helper.wordsInDb();
    const wordToDelete = wordsAtStart[0];

    await api.delete(`/api/words/${wordToDelete.id}`).expect(200);

    const wordsAtEnd = await helper.wordsInDb();

    expect(wordsAtEnd).toHaveLength(helper.initialWords.length - 1);

    const lexes = wordsAtEnd.map((r) => r.lex);

    expect(lexes).not.toContain(wordToDelete.lex);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
