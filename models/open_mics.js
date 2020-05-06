// Model for the course collection.
const mongoose = require('mongoose');

// Define the schema
const OpenMic = new mongoose.Schema({
  date: {type: Date, required: true}
});

// Export the model
module.exports = mongoose.model('OpenMic', OpenMic);
