let mongoose = require('mongoose');

let catSchema = mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Cat', catSchema);