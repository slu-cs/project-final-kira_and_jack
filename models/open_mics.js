// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const OpenMic = new mongoose.Schema({
  date: {type: String, required: true},
  time: {type: String, required: true},
  name: {type: String, maxlength: 100, trim: true},
  act: {type: String, maxlength: 280, trim: true}

});

// Export the model
module.exports = mongoose.model('OpenMic', OpenMic);
