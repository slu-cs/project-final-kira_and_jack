const mongoose = require('mongoose');

const SignUp = new mongoose.Schema({
    date: {type: String, required: true},
    time: {type: String, required: true}, 
    name: {type: String, maxlength: 100, trim: true}, 
    description: {type: String, maxlength: 280, trim: true}
});

module.exports = mongoose.model('SignUp', SignUp);
