// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const Show = new mongoose.Schema({
  date: Date,
  performers: String,
  description: String
});

// Export the model
module.exports = mongoose.model('show', Show);