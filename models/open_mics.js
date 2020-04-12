// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const OpenMic = new mongoose.Schema({
  date: {type: Date, required: true, match: /CS\d\d\d/},
  description: {type: String, maxlength: 1000, trim: true},
});

// Export the model
module.exports = mongoose.model('OpenMic', OpenMic);
