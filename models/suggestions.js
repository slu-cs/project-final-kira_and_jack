const mongoose = require('mongoose');

const Suggestion = new mongoose.Schema({
  date: {type: Date, required: true}, // when a suggestion is made, the db will save the time of request
  name: {type: String, maxlength: 100, trim: true}, // otherwise pretty similar to open mic signup
  act: {type: String, maxlength: 280, trim: true}
});

module.exports = mongoose.model('Suggestion', Suggestion);
