let mongoose = require('mongoose');

let dogSchema = mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Dog', dogSchema);