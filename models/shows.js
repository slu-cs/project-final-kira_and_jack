// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Show = new mongoose.Schema({
  date: {type: String}, // date objects are a hassle
  time: {type: String},
  performers: {type: String, maxlength: 240, trim: true, required: true},
  description: {type: String, maxlength: 1000, trim: true},
  link: {type: String, required: false}
});

// Export the model
module.exports = mongoose.model('show', Show);
