const express = require('express');
const app = express();
require('express-async-errors');
const cors = require('cors');

app.use(cors());
app.use(express.static('build'));

module.exports = app;