const mongoose = require('mongoose');

const SignUp = new mongoose.Schema({
    date: {type: Date, required: true},
    name: {type: String, maxlength: 100, trim: true}, 
    description: {type: String, maxlength: 280, trim: true},
    approved: {type: Boolean, required: true }
});

module.exports = mongoose.model('SignUp', SignUp);
